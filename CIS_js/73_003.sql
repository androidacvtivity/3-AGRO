SELECT 
            'Rind '|| D.RIND ||' COL2 -  '||NVAL(SUM(D.COL5)) AS REZULTAT
        FROM VW_DATA_ALL_TEMP D
        WHERE
            D.PERIOADA = :PERIOADA
            AND D.CUIIO = :CUIIO
            AND (D.CUIIO_VERS = :CUIIO_VERS OR :CUIIO_VERS = -1)
            AND D.FORM = :FORM
            AND D.FORM_VERS = :FORM_VERS
            AND (:CAPITOL = :CAPITOL OR :CAPITOL <> :CAPITOL)
            AND (:CAPITOL_VERS = :CAPITOL_VERS OR :CAPITOL_VERS <> :CAPITOL_VERS)
            AND (:ID_MD = :ID_MD OR :ID_MD <> :ID_MD)
            AND D.FORM = 73
            AND D.CAPITOL = 1196
            AND (
                D.RIND IN (
                    '1000','1100','1120','1130','1140','1150',
                    '1160','1170','1180','1190','1300','1400'
                )
                OR D.RIND LIKE '1000-%'
                OR D.RIND LIKE '1300-%'
            )
        GROUP BY D.RIND
        
        
        HAVING
        NVAL(SUM(D.COL4)) > 0 AND 
        NVAL(SUM(D.COL5)) = 0