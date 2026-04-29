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
            
            WHEN  NVAL(D.COL4) = 0
        THEN 
            ' date (nr. entita?ilor economice) -  ' || D.COL4
            
        WHEN  
        
    ((
    
   (NVAL(D.COL5) > 0 
    AND  NVAL(D.COL6) =  0)
    OR 
    (NVAL(D.COL5) = 0 
    AND  NVAL(D.COL6) >  0)
    OR 
     (NVAL(D.COL7) > 0 
    AND  NVAL(D.COL8) =  0)
    OR 
    (NVAL(D.COL8) = 0 
    AND  NVAL(D.COL7) >  0)
    
    ))
    
        THEN 
            ' Daca este COL2 si COL4  trebuie sa fie COL3 si COL5 si invers ' 
            
            
            
    END AS REZULTAT
FROM VW_DATA_ALL D
WHERE
    D.PERIOADA = :PERIOADA
    AND D.CUIIO = :CUIIO
    AND (D.CUIIO_VERS = :CUIIO_VERS OR :CUIIO_VERS = -1)
    AND D.FORM = :FORM
    AND D.FORM_VERS = :FORM_VERS
    AND D.FORM = 73
    AND D.CAPITOL = 1202
    AND (
        D.RIND LIKE '2000-%'
        OR D.RIND LIKE '2100-%'
        OR D.RIND LIKE '2200-%'
        
    )
GROUP BY 
    D.RIND,
    D.COL1,
    D.COL2,
    D.COL33,
    D.COL4,
    D.COL5,
    D.COL6,
    D.COL7,
    D.COL8
HAVING
    D.COL1 IS NULL  
    OR LENGTH(TRIM(D.COL1)) < 4 
   
    OR D.COL2 IS NULL  
    OR NOT REGEXP_LIKE(TRIM(D.COL2), '^[0-9]{13}$')
    
    OR D.COL33 IS NULL  
    OR LENGTH(TRIM(D.COL33)) < 4

    OR NOT REGEXP_LIKE(TRIM(D.COL33), '^[[:alpha:][:space:]]+$')
    
    OR 
    (NVAL(D.COL4) = 0)  
    
    OR 
    
    ((
    
   (NVAL(D.COL5) > 0 
    AND  NVAL(D.COL6) =  0)
    OR 
    (NVAL(D.COL5) = 0 
    AND  NVAL(D.COL6) >  0)
    OR 
     (NVAL(D.COL7) > 0 
    AND  NVAL(D.COL8) =  0)
    OR 
    (NVAL(D.COL8) = 0 
    AND  NVAL(D.COL7) >  0)
    
    ))
    