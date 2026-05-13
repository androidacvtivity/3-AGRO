
tabelul 

CREATE TABLE USER_EREPORTING.F_XML_FORMS
(
  FORMID              NUMBER,
  XML                 CLOB                      NOT NULL,
  STATUS              NUMBER                    NOT NULL,
  FORM_TYPE           VARCHAR2(50 BYTE),
  DATA_REG            DATE,
  CHECK_CONFIRM       NUMBER,
  MESAJ               VARCHAR2(4000 BYTE),
  CUIIO               NUMBER,
  SEND_REQUEST        NUMBER,
  SEND_ATTEMPTS       NUMBER,
  PROCESSING_MESSAGE  VARCHAR2(4000 BYTE)
)
LOB (XML) STORE AS BASICFILE (
  TABLESPACE  TBS_BNSDB
  ENABLE      STORAGE IN ROW
  CHUNK       8192
  RETENTION
  NOCACHE
  LOGGING)
TABLESPACE TBS_BNSDB
PCTUSED    0
PCTFREE    10
INITRANS   1
MAXTRANS   255
STORAGE    (
            INITIAL          64K
            NEXT             1M
            MINEXTENTS       1
            MAXEXTENTS       UNLIMITED
            PCTINCREASE      0
            BUFFER_POOL      DEFAULT
           )
LOGGING 
NOCOMPRESS 
NOCACHE
MONITORING;

trebuie - interogare care sa gaseasca in colona - XML si la care sunt cu date <CAP2_R2000_C0>2000-1</CAP2_R2000_C0> - CAP2 randurile dinamice au date 

TypeName="3-agr" si la care 

<dec TypeName="3-agr">
  <DataSet>
    <Header>
      <ENT_NAME>Biroul Național de Statistică</ENT_NAME>
      <CUATM title="0130000 - SEC.CENTRU">0130000</CUATM>
      <CAEM title="O8411 - Servicii de administratie publica generala">O8411</CAEM>
      <STREET>SEC.CENTRU Mun. Chișinău, str. Grenoble 106</STREET>
      <STREET_NR />
      <CUIIO>13706</CUIIO>
      <IDNO>1006601000200</IDNO>
      <TITLU_R5_C31 title="" />
      <TITLU_R1_C31 title="" />
      <HEAD />
      <TITLU_R2_C31>Șumova Liudmila</TITLU_R2_C31>
      <TITLU_R3_C31>+37302240304</TITLU_R3_C31>
      <TITLU_R4_C31 />
      <TITLU_R7_C31 />
      <YEAR title="2026">2026</YEAR>
      <nalogPeriodType>A/2026</nalogPeriodType>
      <nalogPeriodLetter>A</nalogPeriodLetter>
    </Header>
    <Data>
      <CAP1_R1000_C4>1</CAP1_R1000_C4>
      <CAP1_R1000_C5>700</CAP1_R1000_C5>
      <CAP1_R1000_C6>637</CAP1_R1000_C6>
      <CAP1_R1000_C7>63</CAP1_R1000_C7>
      <CAP1_R1000_C8 />
      <CAP1_R1110_C4 />
      <CAP1_R1110_C5 />
      <CAP1_R1120_C4 />
      <CAP1_R1120_C5 />
      <CAP1_R1130_C4 />
      <CAP1_R1130_C5 />
      <CAP1_R1140_C4 />
      <CAP1_R1140_C5 />
      <CAP1_R1150_C4 />
      <CAP1_R1150_C5 />
      <CAP1_R1160_C4 />
      <CAP1_R1160_C5 />
      <CAP1_R1170_C4 />
      <CAP1_R1170_C5 />
      <CAP1_R1180_C4 />
      <CAP1_R1180_C5 />
      <CAP1_R1190_C4 />
      <CAP1_R1190_C5 />
      <CAP1_R1200_C4 />
      <CAP1_R1200_C5 />
      <CAP1_R1300_C4>1</CAP1_R1300_C4>
      <CAP1_R1300_C5>17</CAP1_R1300_C5>
      <CAP1_R1400_C4 />
      <CAP1_R1400_C5 />
      <CAP1_R1500_C5 />
      <CAP1_R1600_C5 />
      <CAP1_R1700_C5 />
      <CAP1_R1800_C5 />
      <CAP1_R1900_C5>717</CAP1_R1900_C5>
      <CAP1_R1300_C6>11</CAP1_R1300_C6>
      <CAP1_R1300_C7>6</CAP1_R1300_C7>
      <CAP1_R1300_C8 />
      <CAP1_R1800_C6 />
      <CAP1_R1800_C7 />
      <CAP1_R1800_C8 />
      <CAP1_R1900_C6>648</CAP1_R1900_C6>
      <CAP1_R1900_C7>69</CAP1_R1900_C7>
      <CAP1_R1900_C8 />
      <CAP1_R1000 line="1">
        <CAP1_R1000_C0>1000-1</CAP1_R1000_C0>
        <CAP1_R1000_C1>04497960</CAP1_R1000_C1>
        <CAP1_R1000_C2>1003606000248</CAP1_R1000_C2>
        <CAP1_R1000_C33>SRL Agro-Denisimus</CAP1_R1000_C33>
        <CAP1_R1000_C4>1</CAP1_R1000_C4>
        <CAP1_R1000_C5>700</CAP1_R1000_C5>
        <CAP1_R1000_C6>637</CAP1_R1000_C6>
        <CAP1_R1000_C7>63</CAP1_R1000_C7>
        <CAP1_R1000_C8 />
      </CAP1_R1000>
      <CAP1_R1300 line="1">
        <CAP1_R1300_C0>1300-1</CAP1_R1300_C0>
        <CAP1_R1300_C1>04497960</CAP1_R1300_C1>
        <CAP1_R1300_C2>1023606006183</CAP1_R1300_C2>
        <CAP1_R1300_C33>Muntean Vitalie</CAP1_R1300_C33>
        <CAP1_R1300_C4>1</CAP1_R1300_C4>
        <CAP1_R1300_C5>17</CAP1_R1300_C5>
        <CAP1_R1300_C6>11</CAP1_R1300_C6>
        <CAP1_R1300_C7>6</CAP1_R1300_C7>
        <CAP1_R1300_C8 />
      </CAP1_R1300>
      <CAP2_R2000 line="1">
        <CAP2_R2000_C0>2000-1</CAP2_R2000_C0>
        <CAP2_R2000_C1>04497960</CAP2_R2000_C1>
        <CAP2_R2000_C2>1019600001394</CAP2_R2000_C2>
        <CAP2_R2000_C33>AQUAPRIM GRUP</CAP2_R2000_C33>
        <CAP2_R2000_C4>1</CAP2_R2000_C4>
        <CAP2_R2000_C5 />
        <CAP2_R2000_C6 />
        <CAP2_R2000_C7>1</CAP2_R2000_C7>
        <CAP2_R2000_C8>139000</CAP2_R2000_C8>
      </CAP2_R2000>
      <CAP2_R2100 line="1">
        <CAP2_R2100_C0>2100-1</CAP2_R2100_C0>
        <CAP2_R2100_C1 />
        <CAP2_R2100_C2 />
        <CAP2_R2100_C33 />
        <CAP2_R2100_C4 />
        <CAP2_R2100_C5 />
        <CAP2_R2100_C6 />
        <CAP2_R2100_C7 />
        <CAP2_R2100_C8 />
      </CAP2_R2100>
      <CAP2_R2200 line="1">
        <CAP2_R2200_C0>2200-1</CAP2_R2200_C0>
        <CAP2_R2200_C1 />
        <CAP2_R2200_C2 />
        <CAP2_R2200_C33 />
        <CAP2_R2200_C4 />
        <CAP2_R2200_C5 />
        <CAP2_R2200_C6 />
        <CAP2_R2200_C7 />
        <CAP2_R2200_C8 />
      </CAP2_R2200>
      <CAP1_R1100_C4 />
      <CAP1_R1100_C5 />
      <CAP2_R999_C1>10</CAP2_R999_C1>
      <CAP2_R2000_C4>1</CAP2_R2000_C4>
      <CAP2_R2000_C5 />
      <CAP2_R2000_C6 />
      <CAP2_R2000_C7>1</CAP2_R2000_C7>
      <CAP2_R2000_C8>139000</CAP2_R2000_C8>
      <CAP2_R2100_C4 />
      <CAP2_R2100_C5 />
      <CAP2_R2100_C6 />
      <CAP2_R2100_C7 />
      <CAP2_R2100_C8 />
      <CAP2_R2200_C4 />
      <CAP2_R2200_C5 />
      <CAP2_R2200_C6 />
      <CAP2_R2200_C7 />
      <CAP2_R2200_C8 />
      <CAP2_R2300_C4>1</CAP2_R2300_C4>
      <CAP2_R2300_C5 />
      <CAP2_R2300_C6 />
      <CAP2_R2300_C7>1</CAP2_R2300_C7>
      <CAP2_R2300_C8>139000</CAP2_R2300_C8>
    </Data>
  </DataSet>
</dec>

DATA_REG >= TO_DATE('05/01/2026 00:00:00', 'MM/DD/YYYY HH24:MI:SS')

si FORM_TYPE IN  ('3-agr')