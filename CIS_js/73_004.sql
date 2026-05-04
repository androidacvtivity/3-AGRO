SELECT 
    'Rind ' || D.RIND ||
    CASE 
        WHEN D.COL1 IS NULL 
             OR LENGTH(TRIM(D.COL1)) < 4 
        THEN 
            ' Cod CUIO - nu este completat - ' || D.COL1

        WHEN D.COL2 IS NULL 
             OR NOT REGEXP_LIKE(TRIM(D.COL2), '^[0-9]{13}$')
        THEN 
            ' IDNO - trebuie sa contina exact 13 cifre - ' || D.COL2
            
        WHEN D.COL33 IS NULL 
             OR LENGTH(TRIM(D.COL33)) < 4 
        THEN 
            ' Denumirea entita?ilor economice - nu este completat sau are mai putin de 4 caractere - ' || D.COL33  

        WHEN NOT REGEXP_LIKE(TRIM(D.COL33), '^[[:alpha:][:space:]]+$')
        THEN 
            ' Denumirea entita?ilor economice - sunt permise doar litere - ' || D.COL33
    END AS REZULTAT
FROM VW_DATA_ALL D
WHERE
    D.PERIOADA = :PERIOADA
    AND D.CUIIO = :CUIIO
    AND (D.CUIIO_VERS = :CUIIO_VERS OR :CUIIO_VERS = -1)
    AND D.FORM = :FORM
    AND D.FORM_VERS = :FORM_VERS
    AND D.FORM = 73
    AND D.CAPITOL = 1196
    AND (
        D.RIND LIKE '1000-%'
        OR D.RIND LIKE '1300-%'
    )
GROUP BY 
    D.RIND,
    D.COL1,
    D.COL2,
    D.COL33
HAVING
    D.COL1 IS NULL  
    OR LENGTH(TRIM(D.COL1)) < 4 
   
    OR D.COL2 IS NULL  
    OR NOT REGEXP_LIKE(TRIM(D.COL2), '^[0-9]{13}$')
    
    OR D.COL33 IS NULL  
    OR LENGTH(TRIM(D.COL33)) < 4

    OR NOT REGEXP_LIKE(TRIM(D.COL33), '^[[:alpha:][:space:]]+$');