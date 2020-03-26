/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();
//  Id pregunta: 3424 Año de creación de pregunta: 2006
 questions[0]= "1)  En un GIS, el modelo vectorial";
 choices[0]= new Array();
 choices[0][0] = "Utiliza nodos, l&iacute;neas y pol&iacute;gonos para representar los datos geogr&aacute;ficos.";
 choices[0][1] = "Cada l&iacute;nea se define por todos los puntos intermedios, almacenando todos ellos.";
 choices[0][2] = "Utiliza m&aacute;s espacio de almacenamiento que el modelo r&aacute;ster.";
 choices[0][3] = "Es preferible al modelo r&aacute;ster para superposici&oacute;n de planos.";
 answers[0] = 0;
 units[0] = ['71'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3424. ";
 preguntaids[0] = 3424


//  Id pregunta: 3411 Año de creación de pregunta: 2006
 questions[1]= "2)  Los agentes de software inteligentes pueden clasificarse en tres &aacute;reas de acuerdo a sus &aacute;reas de aplicaci&oacute;n. Indique qu&eacute; terna define dichas &aacute;reas:";
 choices[1]= new Array();
 choices[1][0] = "Agentes virtuales, de informaci&oacute;n y de heur&iacute;sticas";
 choices[1][1] = "Agentes de informaci&oacute;n, de interfaz y de heur&iacute;sticas";
 choices[1][2] = "Agentes de interfaz, de informaci&oacute;n, y virtuales";
 choices[1][3] = "Agentes virtuales, de interfaz y de heur&iacute;sticas";
 answers[1] = 2;
 units[1] = ['67'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3411. ";
 preguntaids[1] = 3411


//  Id pregunta: 3431 Año de creación de pregunta: 2006
 questions[2]= "3)  &iquest;Qu&eacute; utilidad puede tener el Data Mining?";
 choices[2]= new Array();
 choices[2][0] = "Predecir valores futuros en base a los datos actuales.";
 choices[2][1] = "Descubrimiento de fraude.";
 choices[2][2] = "Descubrimiento de patrones en los datos.";
 choices[2][3] = "Todas las anteriores.";
 answers[2] = 3;
 units[2] = ['72'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3431. ";
 preguntaids[2] = 3431


//  Id pregunta: 3442 Año de creación de pregunta: 2006
 questions[3]= "4)  &iquest;Con cu&aacute;l de las siguientes categor&iacute;as de software est&aacute; m&aacute;s relacionado el Business Intelligence?";
 choices[3]= new Array();
 choices[3][0] = "ERP.";
 choices[3][1] = "Datawarehouse y OLAP.";
 choices[3][2] = "Document Management y Content Management.";
 choices[3][3] = "SCM.";
 answers[3] = 1;
 units[3] = ['72'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3442. ";
 preguntaids[3] = 3442


//  Id pregunta: 3402 Año de creación de pregunta: 2006
 questions[4]= "5)  &iquest;Cual de los siguientes ser&iacute;a uno de los productos equivalentes a Excel en el software libre?";
 choices[4]= new Array();
 choices[4][0] = "Konqueror";
 choices[4][1] = "Kspread";
 choices[4][2] = "Apache";
 choices[4][3] = "Evolution";
 answers[4] = 1;
 units[4] = ['66'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3402. ";
 preguntaids[4] = 3402


//  Id pregunta: 3421 Año de creación de pregunta: 2006
 questions[5]= "6)  La iniciativa ADL (Advanced Distributed Learning) public&oacute; en el a&ntilde;o 2000 un modelo que trata de estandarizar los contenidos formativos digitales y que se conoce como";
 choices[5]= new Array();
 choices[5][0] = "SCORM";
 choices[5][1] = "B-Learning";
 choices[5][2] = "DFC";
 choices[5][3] = "ADL 2000";
 answers[5] = 0;
 units[5] = ['70'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3421. ";
 preguntaids[5] = 3421


//  Id pregunta: 3434 Año de creación de pregunta: 2006
 questions[6]= "7)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[6]= new Array();
 choices[6][0] = "Data sparsity.";
 choices[6][1] = "Data cleansing.";
 choices[6][2] = "Data mining.";
 choices[6][3] = "Data explosion.";
 answers[6] = 0;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3434. ";
 preguntaids[6] = 3434


//  Id pregunta: 3420 Año de creación de pregunta: 2006
 questions[7]= "8)  &iquest;Qu&eacute; es moodle?";
 choices[7]= new Array();
 choices[7][0] = "Un sistema de gest&oacute;n de la ense&ntilde;anza de Software libre";
 choices[7][1] = "Un sistema de gesti&oacute;n de contenidos gratuito pero no libre";
 choices[7][2] = "Un buscador de Internet";
 choices[7][3] = "Un entorno de escritorio para sistemas Linux bajo tecnolog&iacute;a X Windows";
 answers[7] = 0;
 units[7] = ['70'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3420. Moodle tiene licencia GNU GPL.";
 preguntaids[7] = 3420


//  Id pregunta: 3449 Año de creación de pregunta: 2006
 questions[8]= "9)  Indique la respuesta falsa en relaci&oacute;n al WfMC (Workflow Management Coalition):";
 choices[8]= new Array();
 choices[8][0] = "Organizaci&oacute;n destinada a establecer est&aacute;ndares relativos a la terminolog&iacute;a del software, su interoperabilidad y conectividad";
 choices[8][1] = "Organizaci&oacute;n creada por las principales empresas del sector para el facilitar la compatibilidad de sus herramientas";
 choices[8][2] = "Ha desarrollado el denominado Modelo de Referencia de Workflow";
 choices[8][3] = "Est&aacute; dividida en tres comit&eacute;s principales: el Comit&eacute; T&eacute;cnico, el Comit&eacute; de Relaciones Externas y el Comit&eacute; Directivo";
 answers[8] = 1;
 units[8] = ['72'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3449. ";
 preguntaids[8] = 3449


//  Id pregunta: 3394 Año de creación de pregunta: 2006
 questions[9]= "10)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Superset o superconjunto.";
 choices[9][1] = "Package o paquete.";
 choices[9][2] = "Superclass o Superclase.";
 choices[9][3] = "Colection o Colecci&oacute;n.";
 answers[9] = 1;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3394. ";
 preguntaids[9] = 3394


//  Id pregunta: 3437 Año de creación de pregunta: 2006
 questions[10]= "11)  Entre los modelos t&iacute;picos de bases de datos multidimensionales se encuentra:";
 choices[10]= new Array();
 choices[10][0] = "Modelo en estrella.";
 choices[10][1] = "El modelo de copo de nieve.";
 choices[10][2] = "Modelo constelaci&oacute;n.";
 choices[10][3] = "Todos los anteriores son correctos.";
 answers[10] = 3;
 units[10] = ['72'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3437. ";
 preguntaids[10] = 3437


//  Id pregunta: 3468 Año de creación de pregunta: 2006
 questions[11]= "12)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[11]= new Array();
 choices[11][0] = "Aplicaci&oacute;n";
 choices[11][1] = "Transporte";
 choices[11][2] = "Red";
 choices[11][3] = "Sesi&oacute;n";
 answers[11] = 0;
 units[11] = ['77'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3468. ";
 preguntaids[11] = 3468


//  Id pregunta: 3464 Año de creación de pregunta: 2006
 questions[12]= "13)  Se&ntilde;ale la falsa:";
 choices[12]= new Array();
 choices[12][0] = "XML Signature asegura la integridad de partes de documentos XML transportados";
 choices[12][1] = "XML Signature puede aplicarse a cualquier contenido digital (objeto de datos), incluyendo XML";
 choices[12][2] = "XML Key Management es un protocolo para distribuir y registrar claves p&uacute;blicas. Lo que hace es ocultar la parte compleja que surge con PKI. Est&aacute; compuesto de: el registro de la clave p&uacute;blica (X-KRSS) y la informaci&oacute;n de clave p&uacute;blica (X-KISS).";
 choices[12][3] = "Todas las anteriores son ciertas";
 answers[12] = 3;
 units[12] = ['76'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3464. ";
 preguntaids[12] = 3464


//  Id pregunta: 3405 Año de creación de pregunta: 2006
 questions[13]= "14)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[13]= new Array();
 choices[13][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[13][1] = "Hoja de c&aacute;lculo para KDE";
 choices[13][2] = "Sistema gestor de redes empresariales extendidas";
 choices[13][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[13] = 3;
 units[13] = ['66'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3405. ";
 preguntaids[13] = 3405


//  Id pregunta: 3466 Año de creación de pregunta: 2009
 questions[14]= "15)  Relativo a la firma digital, indique la opci&oacute;n incorrecta:";
 choices[14]= new Array();
 choices[14][0] = "XMLDSig es una sintaxis XML para la generaci&oacute;n de firma digital";
 choices[14][1] = "XMLDSig s&oacute;lo se utiliza para firmar documentos XML";
 choices[14][2] = "XML Advanced Electronic Signatures (XAdES) cumple la directiva europea sobre firma electr&oacute;nica";
 choices[14][3] = "Las respuestas 'a' y 'c' son verdaderas";
 answers[14] = 1;
 units[14] = ['78'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3466. ";
 preguntaids[14] = 3466


//  Id pregunta: 3396 Año de creación de pregunta: 2006
 questions[15]= "16)  Respecto a JNI";
 choices[15]= new Array();
 choices[15][0] = "Se sigue conservando la portabilidad universal";
 choices[15][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[15][2] = "Permite utilizar clases java desde aplicaciones nativas.";
 choices[15][3] = "B y C son correctas";
 answers[15] = 3;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3396. ";
 preguntaids[15] = 3396


//  Id pregunta: 3425 Año de creación de pregunta: 2006
 questions[16]= "17)  &iquest;Cu&aacute;l es la utilidad de la proyecci&oacute;n en los GIS?";
 choices[16]= new Array();
 choices[16][0] = "Permite reconocer los datos geogr&aacute;ficos utilizando fotograf&iacute;as, preferiblemente desde sat&eacute;lite.";
 choices[16][1] = "Soluciona los problemas de representar la curvatura terrestre en un plano.";
 choices[16][2] = "Facilita la realizaci&oacute;n de zooms sin perder resoluci&oacute;n tanto hacia dentro como hacia fuera.";
 choices[16][3] = "Permite cambiar la longitud de onda de las fotograf&iacute;as para poder visualizar cosas que no se pueden ver en el espectro visible.";
 answers[16] = 1;
 units[16] = ['71'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3425. ";
 preguntaids[16] = 3425


//  Id pregunta: 3438 Año de creación de pregunta: 2006
 questions[17]= "18)  Las especializaciones de los sistemas de Datawarehouse orientadas a departamentos o &aacute;reas de negocio concretas se denominan:";
 choices[17]= new Array();
 choices[17][0] = "Data Marts.";
 choices[17][1] = "Data Cleansing.";
 choices[17][2] = "Data Mining.";
 choices[17][3] = "Metadata.";
 answers[17] = 0;
 units[17] = ['72'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3438. ";
 preguntaids[17] = 3438


//  Id pregunta: 3451 Año de creación de pregunta: 2006
 questions[18]= "19)  Se&ntilde;ale la falsa:";
 choices[18]= new Array();
 choices[18][0] = "Bonita es un motor de workflow de sw libre que implementa las especificaciones de la WfMC.";
 choices[18][1] = "Evolution es un cliente para correo electr&oacute;nico y workgroup para sistemas Linux.";
 choices[18][2] = "JoNAS es un servidor de aplicaciones de SW libre";
 choices[18][3] = "Todas son ciertas";
 answers[18] = 3;
 units[18] = ['72'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3451. ";
 preguntaids[18] = 3451


//  Id pregunta: 3459 Año de creación de pregunta: 2006
 questions[19]= "20)  Se&ntilde;ale la falsa:";
 choices[19]= new Array();
 choices[19][0] = "CRL son las siglas en ingl&eacute;s de la lista de certificados revocados";
 choices[19][1] = "OCSP son las siglas en ingl&eacute;s del protocolo de estado de certificados en l&iacute;nea";
 choices[19][2] = "PKCS#7 corresponde al est&aacute;ndar del formato del sobre digital";
 choices[19][3] = "PKCS#11 corresponde al algoritmo RSA";
 answers[19] = 3;
 units[19] = ['76'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3459. ";
 preguntaids[19] = 3459


//  Id pregunta: 3435 Año de creación de pregunta: 2006
 questions[20]= "21)  El termino ETL se refiere a:";
 choices[20]= new Array();
 choices[20][0] = "Extraction, Transfer &amp; Labeling.";
 choices[20][1] = "Explanation, Transformation &amp; Loading.";
 choices[20][2] = "Extraction, Transformation &amp; Loading.";
 choices[20][3] = "Extraction, Transfer &amp; Loading.";
 answers[20] = 2;
 units[20] = ['72'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3435. ";
 preguntaids[20] = 3435


//  Id pregunta: 3432 Año de creación de pregunta: 2006
 questions[21]= "22)  &iquest;Para qu&eacute; se utiliza  principalmente el algoritmo k-means?";
 choices[21]= new Array();
 choices[21][0] = "Clustering.";
 choices[21][1] = "Categorizaci&oacute;n.";
 choices[21][2] = "Predicci&oacute;n.";
 choices[21][3] = "Detecci&oacute;n de fraude.";
 answers[21] = 0;
 units[21] = ['72'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3432. ";
 preguntaids[21] = 3432


//  Id pregunta: 3463 Año de creación de pregunta: 2006
 questions[22]= "23)  En relaci&oacute;n al protocolo OCSP (Online Certificate Status Protocol):";
 choices[22]= new Array();
 choices[22][0] = "Se utiliza para conocer el estado de revocaci&oacute;n de un certificado X.509";
 choices[22][1] = "Los mensajes enviados v&iacute;a OCSP se codifican en ASN.1";
 choices[22][2] = "Se define en el RFC 6960";
 choices[22][3] = "Todas las anteriores respuestas son ciertas";
 answers[22] = 3;
 units[22] = ['76'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3463. ";
 preguntaids[22] = 3463


//  Id pregunta: 3457 Año de creación de pregunta: 2006
 questions[23]= "24)  Se&ntilde;ale la correcta:";
 choices[23]= new Array();
 choices[23][0] = "3DES es un algoritmo de cifrado asim&eacute;trico que consiste en aplicar tres veces DES";
 choices[23][1] = "AES es un algoritmo muy vers&aacute;til porque puede usarse com algoritmo de bloque, como algoritmo de flujo,como funci&oacute;n resumen y como generador de n&uacute;meros pseudo-aleatorios.";
 choices[23][2] = "Las caracter&iacute;sticas de las funciones hash son: resistencia a la preimagen, resistencia a la postimagen y resistencia a la colisi&oacute;n";
 choices[23][3] = "Todas las anteriores";
 answers[23] = 1;
 units[23] = ['76'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3457. ";
 preguntaids[23] = 3457


//  Id pregunta: 3404 Año de creación de pregunta: 2006
 questions[24]= "25)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[24]= new Array();
 choices[24][0] = "Impress";
 choices[24][1] = "Calc";
 choices[24][2] = "Math";
 choices[24][3] = "Text";
 answers[24] = 3;
 units[24] = ['66'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3404. ";
 preguntaids[24] = 3404


//  Id pregunta: 3413 Año de creación de pregunta: 2006
 questions[25]= "26)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas...";
 choices[25]= new Array();
 choices[25][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[25][1] = "Utilizan slots donde cada slot se corresponde con una idea";
 choices[25][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[25][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[25] = 0;
 units[25] = ['68'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3413. ";
 preguntaids[25] = 3413


//  Id pregunta: 3423 Año de creación de pregunta: 2006
 questions[26]= "27)  Se&ntilde;ale la opci&oacute;n que enumera tres de las especificaciones m&aacute;s robustas en el sector del e-learning";
 choices[26]= new Array();
 choices[26][0] = "AICC, IMS y SCORM";
 choices[26][1] = "AICC, EL-XML y SCORM";
 choices[26][2] = "ELEARN, FCC y SCORM";
 choices[26][3] = "SCORM, ELEARN y AICC";
 answers[26] = 0;
 units[26] = ['70'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3423. ";
 preguntaids[26] = 3423


//  Id pregunta: 3409 Año de creación de pregunta: 2006
 questions[27]= "28)  Se&ntilde;ale qu&eacute; lenguaje intermedio espec&iacute;fico de representaci&oacute;n de conocimiento se utiliza en el &aacute;rea de inteligencia artificial";
 choices[27]= new Array();
 choices[27][0] = "XML";
 choices[27][1] = "STRIPS";
 choices[27][2] = "KIF";
 choices[27][3] = "EXML";
 answers[27] = 2;
 units[27] = ['67'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3409. ";
 preguntaids[27] = 3409


//  Id pregunta: 3415 Año de creación de pregunta: 2006
 questions[28]= "29)  Indique cu&aacute;les son las facetas declarativas en la representaci&oacute;n del conocimiento mediante marcos (frameworks):";
 choices[28]= new Array();
 choices[28][0] = "if-needed; if-required e if-deleted";
 choices[28][1] = "if-needed; if-required e if-added";
 choices[28][2] = "if-needed; if-deleted e if-added";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = 3;
 units[28] = ['68'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3415. ";
 preguntaids[28] = 3415


//  Id pregunta: 3465 Año de creación de pregunta: 2006
 questions[29]= "30)  Se&ntilde;ale la correcta:";
 choices[29]= new Array();
 choices[29][0] = "El protocolo X500 es un est&aacute;ndar de la IETF";
 choices[29][1] = "El est&aacute;ndar de certificados digitales X509v3 introdujo el concepto de extensi&oacute;n";
 choices[29][2] = "El protocolo de la ITU LDAP dispone su informaci&oacute;n relacionada jer&aacute;rquicamente.";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = 1;
 units[29] = ['77'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3465. ";
 preguntaids[29] = 3465


//  Id pregunta: 3408 Año de creación de pregunta: 2006
 questions[30]= "31)  Al realizar la b&uacute;squeda en un espacio de estados, el m&eacute;todo de backtraking &hellip;";
 choices[30]= new Array();
 choices[30][0] = "Solo se puede usar para b&uacute;squedas ciegas";
 choices[30][1] = "Permite ahorrar recursos de computaci&oacute;n";
 choices[30][2] = "Permite recorrer los &aacute;rboles solo en anchura";
 choices[30][3] = "Permite recorrer los &aacute;rboles solo en profundidad";
 answers[30] = 1;
 units[30] = ['67'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3408. ";
 preguntaids[30] = 3408


//  Id pregunta: 3400 Año de creación de pregunta: 2006
 questions[31]= "32)  &iquest;Qu&eacute; es falso respecto a la licencia GPL?";
 choices[31]= new Array();
 choices[31][0] = "Los programas con licencia GPL carecen de derechos de autor";
 choices[31][1] = "Exige que los fuentes est&eacute;n a disposici&oacute;n de quien disponga de los binarios";
 choices[31][2] = "No permite su integraci&oacute;n con software propietario";
 choices[31][3] = "Permite modificaciones y redistribuci&oacute;n de estas";
 answers[31] = 0;
 units[31] = ['66'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3400. ";
 preguntaids[31] = 3400


//  Id pregunta: 3439 Año de creación de pregunta: 2006
 questions[32]= "33)  Las herramientas para la elaboraci&oacute;n de informes y listados, tanto en detalle como sobre informaci&oacute;n agregada, a partir de la informaci&oacute;n de los Datawarehouse y datamarts se conocen como herramientas de:";
 choices[32]= new Array();
 choices[32][0] = "OLAP.";
 choices[32][1] = "Query &amp; reporting.";
 choices[32][2] = "Cuadro de mando anal&iacute;tico.";
 choices[32][3] = "Datamining.";
 answers[32] = 1;
 units[32] = ['72'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3439. ";
 preguntaids[32] = 3439


//  Id pregunta: 3412 Año de creación de pregunta: 2006
 questions[33]= "34)  Para representaci&oacute;n del conocimiento, los m&eacute;todos param&eacute;tricos&hellip;";
 choices[33]= new Array();
 choices[33][0] = "Son preferibles para obtener explicaciones de la forma en que el sistema saca las conclusiones";
 choices[33][1] = "Simulan los mecanismos neuronales del pensamiento";
 choices[33][2] = "Emulan los procesos de razonamiento utilizando modelos simb&oacute;licos";
 choices[33][3] = "Permiten utilizar par&aacute;metros por valor y por variable";
 answers[33] = 1;
 units[33] = ['68'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3412. ";
 preguntaids[33] = 3412


//  Id pregunta: 3398 Año de creación de pregunta: 2006
 questions[34]= "35)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[34]= new Array();
 choices[34][0] = ".DOT";
 choices[34][1] = ".free";
 choices[34][2] = "Mono";
 choices[34][3] = "Gambas";
 answers[34] = 2;
 units[34] = ['66'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3398. ";
 preguntaids[34] = 3398


//  Id pregunta: 3462 Año de creación de pregunta: 2006
 questions[35]= "36)  &iquest;Qu&eacute; elemento no forma parte de la norma X.500 de OSI?";
 choices[35]= new Array();
 choices[35][0] = "Agente de usuario del directorio (DUA)";
 choices[35][1] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[35][2] = "Dominio de nombres de directorio (DND)";
 choices[35][3] = "Base de informaci&oacute;n del directorio (DIB)";
 answers[35] = 2;
 units[35] = ['77'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3462. ";
 preguntaids[35] = 3462


//  Id pregunta: 3403 Año de creación de pregunta: 2006
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[36]= new Array();
 choices[36][0] = "Tomcat";
 choices[36][1] = "Geronimo";
 choices[36][2] = "JBoss";
 choices[36][3] = "Los 3 lo son";
 answers[36] = 0;
 units[36] = ['64'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3403. De la especificaci&oacute;n JEE, Tomcat no cumple la especificaci&oacute;n EJB, solo servlets.";
 preguntaids[36] = 3403


//  Id pregunta: 3460 Año de creación de pregunta: 2009
 questions[37]= "38)  Se&ntilde;ale la falsa:";
 choices[37]= new Array();
 choices[37][0] = "XML Encryption es un lenguaje cuya funci&oacute;n principal es asegurar la confidencialidad de partes de documentos XML a trav&eacute;s de la encriptaci&oacute;n parcial del documento transportado";
 choices[37][1] = "XML Encryption se puede aplicar a cualquier recurso Web, incluyendo contenido que no es XML.";
 choices[37][2] = "XML Encryption establece que es posible cifrar datos a distintos niveles de granularidad, desde elementos simples hasta documentos enteros";
 choices[37][3] = "Ninguna de las anteriores es falsa.";
 answers[37] = 3;
 units[37] = ['76'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3460. ";
 preguntaids[37] = 3460


//  Id pregunta: 3440 Año de creación de pregunta: 2006
 questions[38]= "39)  Las tablas primarias en el modelo dimensional de un Datawarehouse y que contienen los valores y metricas se conocen como:";
 choices[38]= new Array();
 choices[38][0] = "Tablas de dimensiones.";
 choices[38][1] = "Tablas maestras.";
 choices[38][2] = "Tablas de hechos.";
 choices[38][3] = "Tablas externas.";
 answers[38] = 2;
 units[38] = ['72'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3440. ";
 preguntaids[38] = 3440


//  Id pregunta: 3445 Año de creación de pregunta: 2006
 questions[39]= "40)  &iquest;A qu&eacute; hacen referencia las siglas NRC en un sistema de pasarela de pagos?";
 choices[39]= new Array();
 choices[39][0] = "N&uacute;mero de Registro de Control";
 choices[39][1] = "N&uacute;mero de Referencia de Control";
 choices[39][2] = "N&uacute;mero de Referencia Completo";
 choices[39][3] = "N&uacute;mero de Registro Completo";
 answers[39] = 2;
 units[39] = ['75'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3445. ";
 preguntaids[39] = 3445


//  Id pregunta: 3426 Año de creación de pregunta: 2006
 questions[40]= "41)  En los GIS, el sistema UTM:";
 choices[40]= new Array();
 choices[40][0] = "Asocia cada elemento a una clave de zona.";
 choices[40][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[40][2] = "Almacena la informaci&oacute;n de los pol&iacute;gonos en base a un solo punto.";
 choices[40][3] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 answers[40] = 1;
 units[40] = ['71'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3426. ";
 preguntaids[40] = 3426


//  Id pregunta: 3441 Año de creación de pregunta: 2006
 questions[41]= "42)  La operaci&oacute;n que permite navegar hacia un mayor nivel de agregaci&oacute;n en dimensiones en un Datawarehouse se conoce como:";
 choices[41]= new Array();
 choices[41][0] = "Drill-Down.";
 choices[41][1] = "Roll-Up.";
 choices[41][2] = "Drill-Through.";
 choices[41][3] = "Slice and Dice.";
 answers[41] = 1;
 units[41] = ['72'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3441. ";
 preguntaids[41] = 3441


//  Id pregunta: 3453 Año de creación de pregunta: 2006
 questions[42]= "43)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[42]= new Array();
 choices[42][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[42][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[42][2] = "Facilidades de enrutamiento";
 choices[42][3] = "Todas las anteriores";
 answers[42] = 3;
 units[42] = ['72'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3453. ";
 preguntaids[42] = 3453


//  Id pregunta: 3397 Año de creación de pregunta: 2006
 questions[43]= "44)  &iquest;Qu&eacute; es un fichero JAR?";
 choices[43]= new Array();
 choices[43][0] = "Es el fichero que proporciona el entorno de ejecuci&oacute;n de java,  as&iacute; como una API gr&aacute;fica para el desarrollo de aplicaciones y applets.";
 choices[43][1] = "Es el fichero que empaqueta el entorno de ejecuci&oacute;n de java.";
 choices[43][2] = "Es el fichero que contiene el c&oacute;digo intermedio de java.";
 choices[43][3] = "Es un fichero en el que se re&uacute;nen las clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n de un applet o una aplicaci&oacute;n Java.";
 answers[43] = 3;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3397. ";
 preguntaids[43] = 3397


//  Id pregunta: 3436 Año de creación de pregunta: 2006
 questions[44]= "45)  Entre las ventajas de un Datawarehouse no se encuentra:";
 choices[44]= new Array();
 choices[44][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[44][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[44][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n.";
 choices[44][3] = "La informaci&oacute;n de una empresa se mantiene consistente, segura, actualizada y f&aacute;cilmente accesible.";
 answers[44] = 0;
 units[44] = ['72'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3436. ";
 preguntaids[44] = 3436


//  Id pregunta: 3444 Año de creación de pregunta: 2006
 questions[45]= "46)  Se&ntilde;alar la respuesta falsa:";
 choices[45]= new Array();
 choices[45][0] = "HTML es un subconjunto de SGML";
 choices[45][1] = "XHTML es un subconjunto de XML";
 choices[45][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[45][3] = "RTF es un subconjunto de SGML";
 answers[45] = 2;
 units[45] = ['74'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3444. ";
 preguntaids[45] = 3444


//  Id pregunta: 3422 Año de creación de pregunta: 2006
 questions[46]= "47)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[46]= new Array();
 choices[46][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[46][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[46][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[46][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[46] = 0;
 units[46] = ['70'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3422. &quot;blended learning&quot; = aprendizaje semipresencial";
 preguntaids[46] = 3422


//  Id pregunta: 3401 Año de creación de pregunta: 2006
 questions[47]= "48)  Se&ntilde;ale aqu&eacute;l tipo de software que se aleja m&aacute;s del concepto de software libre:";
 choices[47]= new Array();
 choices[47][0] = "Software de dominio p&uacute;blico";
 choices[47][1] = "Software bajo licencia GPL";
 choices[47][2] = "Shareware";
 choices[47][3] = "Software de descarga gratuita";
 answers[47] = 2;
 units[47] = ['66'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3401. ";
 preguntaids[47] = 3401


//  Id pregunta: 3406 Año de creación de pregunta: 2006
 questions[48]= "49)  Los m&eacute;todos de busca heur&iacute;stica&hellip;";
 choices[48]= new Array();
 choices[48][0] = "Nunca encuentran la soluci&oacute;n &oacute;ptima";
 choices[48][1] = "Dan con la soluci&oacute;n &oacute;ptima en menos tiempo";
 choices[48][2] = "Dan con la soluci&oacute;n &oacute;ptima pero pueden ser m&aacute;s lentos que otros m&eacute;todos";
 choices[48][3] = "Permiten encontrar una buena soluci&oacute;n r&aacute;pidamente pero puede no ser la &oacute;ptima";
 answers[48] = 3;
 units[48] = ['67'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3406. ";
 preguntaids[48] = 3406


//  Id pregunta: 3419 Año de creación de pregunta: 2006
 questions[49]= "50)  &iquest;Para que se utiliza un LMS?";
 choices[49]= new Array();
 choices[49][0] = "Para crear cursos de e-learning";
 choices[49][1] = "Para cachear los cursos de e-learning en el web server";
 choices[49][2] = "Es un Content Management System especializado en e-learning";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = 3;
 units[49] = ['70'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3419. Los cursos se crean mediante un LCMS. El LMS se utiliza para administrar esos cursos/objetos de aprendizajes ya existentes.";
 preguntaids[49] = 3419


//  Id pregunta: 3430 Año de creación de pregunta: 2006
 questions[50]= "51)  El modelo de datos vectorial utilizado en sistemas de informaci&oacute;n geogr&aacute;fica, utiliza los siguientes elementos de representaci&oacute;n para la informaci&oacute;n topol&oacute;gica (se&ntilde;ale la respuesta correcta):";
 choices[50]= new Array();
 choices[50][0] = "Puntos, arcos, politopos.";
 choices[50][1] = "Puntos, segmentos, pol&iacute;gonos.";
 choices[50][2] = "Puntos, arcos, pol&iacute;gonos.";
 choices[50][3] = "Puntos, arcos, segmentos.";
 answers[50] = 2;
 units[50] = ['71'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3430. ";
 preguntaids[50] = 3430


//  Id pregunta: 3414 Año de creación de pregunta: 2006
 questions[51]= "52)  Se&ntilde;alar cual no es una caracter&iacute;stica de las restricciones";
 choices[51]= new Array();
 choices[51][0] = "Permite sincronizar el comportamiento de los objetos buscando equilibrio entre sus atributos";
 choices[51][1] = "Permiten expresar m&uacute;ltiples relaciones causa-efecto mediante ecuaciones";
 choices[51][2] = "Pueden ser cualitativas (dominios discretos) o num&eacute;ricas.";
 choices[51][3] = "Representan sentencias condicionales donde a partir de antecedentes pueden obtenerse los consecuentes";
 answers[51] = 3;
 units[51] = ['68'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3414. ";
 preguntaids[51] = 3414


//  Id pregunta: 3395 Año de creación de pregunta: 2006
 questions[52]= "53)  Respecto al empaquetado de aplicaciones en JAVA";
 choices[52]= new Array();
 choices[52][0] = "Utiliza el algoritmo de compresi&oacute;n LZW";
 choices[52][1] = "Para facilitar el control y orden de todos estos ficheros es para lo que se han definido los ficheros JAR";
 choices[52][2] = "Un fichero JAR puede incluir un subdirectorio de metainformaci&oacute;n llamado META-INF";
 choices[52][3] = "Todas son correctas";
 answers[52] = 3;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3395. ";
 preguntaids[52] = 3395


//  Id pregunta: 3448 Año de creación de pregunta: 2006
 questions[53]= "54)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[53]= new Array();
 choices[53][0] = "Incremento de la productividad";
 choices[53][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[53][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[53][3] = "Todas las anteriores son ciertas";
 answers[53] = 3;
 units[53] = ['72'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3448. ";
 preguntaids[53] = 3448


//  Id pregunta: 3417 Año de creación de pregunta: 2006
 questions[54]= "55)  En sistemas de representaci&oacute;n del conocimiento mediante reglas, el disparo de una regla en el mecanismo de inferencia con encadenamiento hacia delante:";
 choices[54]= new Array();
 choices[54][0] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar dejan de poder hacerlo y otras pasan a verificar su antecedente";
 choices[54][1] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar pueden seguir haci&eacute;ndolo y otras pasan tambi&eacute;n a verificar su antecedente";
 choices[54][2] = "El antecedente de la regla seleccionada est&aacute; formado por hechos que son consi-derados ahora como subobjetivos iniciando de nuevo el proceso";
 choices[54][3] = "La idea es partir del objetivo, seleccionar una regla y entonces elegir como otro u otros subobjetivos los hechos que est&aacute;n en el antecedente de la regla seleccionada, repitiendo el proceso de selecci&oacute;n de regla hasta alcanzar los datos";
 answers[54] = 0;
 units[54] = ['68'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3417. ";
 preguntaids[54] = 3417


//  Id pregunta: 3447 Año de creación de pregunta: 2006
 questions[55]= "56)  &iquest;Con que categoria de software esta m&aacute;s relacionado el BPM?";
 choices[55]= new Array();
 choices[55][0] = "Workflow";
 choices[55][1] = "B2B";
 choices[55][2] = "B2C";
 choices[55][3] = "SCM";
 answers[55] = 0;
 units[55] = ['72'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3447. ";
 preguntaids[55] = 3447


//  Id pregunta: 3416 Año de creación de pregunta: 2006
 questions[56]= "57)  Se&ntilde;ale qu&eacute; opci&oacute;n contiene los distintos mecanismos de inferencia utilizando la representaci&oacute;n del conocimiento basada en marcos (frameworks):";
 choices[56]= new Array();
 choices[56][0] = "Deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y herencia de marcos";
 choices[56][1] = "Deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 choices[56][2] = "Deducci&oacute;n de valores de slots; herencia de slots; y equiparaci&oacute;n de marcos";
 choices[56][3] = "Reducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 answers[56] = 1;
 units[56] = ['68'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3416. ";
 preguntaids[56] = 3416


//  Id pregunta: 3458 Año de creación de pregunta: 2006
 questions[57]= "58)  Las aplicaciones fundamentales de la criptograf&iacute;a asim&eacute;trica son:";
 choices[57]= new Array();
 choices[57][0] = "El cifrado eficiente y la firma digital";
 choices[57][1] = "El intercambio seguro de claves privadas o de sesi&oacute;n y la firma digital";
 choices[57][2] = "El intercambio seguro de claves privadas o de sesi&oacute;n y el cifrado eficiente";
 choices[57][3] = "Todas las anteriores";
 answers[57] = 1;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3458. ";
 preguntaids[57] = 3458


//  Id pregunta: 3461 Año de creación de pregunta: 2006
 questions[58]= "59)  En relaci&oacute;n a los certificados X.509:";
 choices[58]= new Array();
 choices[58][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[58][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[58][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[58][3] = "Todas las anteriores son ciertas";
 answers[58] = 3;
 units[58] = ['77'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3461. ";
 preguntaids[58] = 3461


//  Id pregunta: 3452 Año de creación de pregunta: 2006
 questions[59]= "60)  ESTROFA:";
 choices[59]= new Array();
 choices[59][0] = "Especificaciones para el tratamiento de flujos automatizados";
 choices[59][1] = "Elaboradas por la COAXI hoy Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[59][2] = "Elaboradas con el fin de homogeneizar terminolog&iacute;a y asesorar a los compradores p&uacute;blicos a la hora de la adquisici&oacute;n de productos de Data Warehouse";
 choices[59][3] = "Todos los anteriores";
 answers[59] = 0;
 units[59] = ['72'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3452. ";
 preguntaids[59] = 3452


//  Id pregunta: 3446 Año de creación de pregunta: 2006
 questions[60]= "61)  Se&ntilde;ale la correcta:";
 choices[60]= new Array();
 choices[60][0] = "El protocolo de seguridad en comercio electr&oacute;nico 3D Secure es utilizado por Visa y MasterCard";
 choices[60][1] = "Visa utiliza el protocolo Verified by Visa";
 choices[60][2] = "MasterCard Secure Code es el protocolo utilizado por MasterCard";
 choices[60][3] = "Todas las anteriores";
 answers[60] = 3;
 units[60] = ['75'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3446. ";
 preguntaids[60] = 3446


//  Id pregunta: 3418 Año de creación de pregunta: 2006
 questions[61]= "62)  En el campo de los sistemas expertos, se&ntilde;ale de las siguientes opciones aquella que enumere sistemas que utilicen representaci&oacute;n param&eacute;trica:";
 choices[61]= new Array();
 choices[61][0] = "Redes neuronales; representaci&oacute;n por marcos y sistemas basados en restricciones";
 choices[61][1] = "Algoritmos gen&eacute;ticos; redes neuronales y redes sem&aacute;nticas";
 choices[61][2] = "Redes neuronales, redes sem&aacute;nticas, y sistemas basados en marcos";
 choices[61][3] = "Algoritmos gen&eacute;ticos; redes neuronales y perceptr&oacute;n";
 answers[61] = 3;
 units[61] = ['68'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3418. ";
 preguntaids[61] = 3418


//  Id pregunta: 3399 Año de creación de pregunta: 2006
 questions[62]= "63)  El Software Libre es bueno para las Administraciones P&uacute;blicas porque&hellip; Se&ntilde;ale la respuesta FALSA";
 choices[62]= new Array();
 choices[62][0] = "Es gratis";
 choices[62][1] = "Permite conocer exactamente el funcionamiento de los programas";
 choices[62][2] = "Facilita la conservaci&oacute;n de la informaci&oacute;n p&uacute;blica, libre de patentes y formatos propietarios";
 choices[62][3] = "Abre la posibilidad de contratar soporte t&eacute;cnico en un mercado en competencia";
 answers[62] = 0;
 units[62] = ['66'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3399. ";
 preguntaids[62] = 3399


//  Id pregunta: 3450 Año de creación de pregunta: 2006
 questions[63]= "64)  &iquest;A qu&eacute; hace referencia las siglas WAPI?";
 choices[63]= new Array();
 choices[63][0] = "Wireless Advanced Privacy Infrastructure";
 choices[63][1] = "Workflow Application Programming Interface";
 choices[63][2] = "Wired Advanced Professional Institute";
 choices[63][3] = "Wireless Application Programming Interface";
 answers[63] = 1;
 units[63] = ['72'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3450. ";
 preguntaids[63] = 3450


//  Id pregunta: 3454 Año de creación de pregunta: 2006
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes algoritmos no sirve de base para la definici&oacute;n de algoritmos de criptograf&iacute;a asim&eacute;trica?";
 choices[64]= new Array();
 choices[64][0] = "Problema de sustituci&oacute;n af&iacute;n";
 choices[64][1] = "Problema de factorizaci&oacute;n entera";
 choices[64][2] = "Problema de logaritmo discreto";
 choices[64][3] = "Problema de logaritmo discreto el&iacute;ptico";
 answers[64] = 0;
 units[64] = ['76'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3454. ";
 preguntaids[64] = 3454


//  Id pregunta: 3456 Año de creación de pregunta: 2006
 questions[65]= "66)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[65]= new Array();
 choices[65][0] = "Fuerza bruta";
 choices[65][1] = "Criptoan&aacute;lisis diferencial";
 choices[65][2] = "Criptoan&aacute;lisis lineal";
 choices[65][3] = "An&aacute;lisis de temporizaci&oacute;n";
 answers[65] = 0;
 units[65] = ['76'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3456. ";
 preguntaids[65] = 3456


//  Id pregunta: 3410 Año de creación de pregunta: 2006
 questions[66]= "67)  Se&ntilde;ale de qu&eacute; etapa del desarrollo de la inteligencia artifical son propias las t&eacute;cnicas de b&uacute;squeda heur&iacute;stica";
 choices[66]= new Array();
 choices[66][0] = "Difusi&oacute;n actual";
 choices[66][1] = "Etapa de prototipos";
 choices[66][2] = "Sistemas expertos";
 choices[66][3] = "Etapa inicial";
 answers[66] = 0;
 units[66] = ['67'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3410. ";
 preguntaids[66] = 3410


//  Id pregunta: 3443 Año de creación de pregunta: 2006
 questions[67]= "68)  OLAP significa:";
 choices[67]= new Array();
 choices[67][0] = "On-Line Automatic Prediction.";
 choices[67][1] = "On-Line Analytical Prediction.";
 choices[67][2] = "On-Line Automatic Processing.";
 choices[67][3] = "On-Line Analytical Processing.";
 answers[67] = 3;
 units[67] = ['72'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3443. ";
 preguntaids[67] = 3443


//  Id pregunta: 3467 Año de creación de pregunta: 2006
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es un sistema operativo utilizado en la arquitectura de un sistema de tarjeta inteligente?";
 choices[68]= new Array();
 choices[68][0] = "MultOS";
 choices[68][1] = "Jini";
 choices[68][2] = "Java Card";
 choices[68][3] = "Windows SC";
 answers[68] = 1;
 units[68] = ['78'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3467. ";
 preguntaids[68] = 3467


//  Id pregunta: 3427 Año de creación de pregunta: 2006
 questions[69]= "70)  Google Earth es un sistema que permite el acceso a informaci&oacute;n geogr&aacute;fica, y que emplea un modelo de datos:";
 choices[69]= new Array();
 choices[69][0] = "&Uacute;nicamente r&aacute;ster.";
 choices[69][1] = "R&aacute;ster y vectorial.";
 choices[69][2] = "&Uacute;nicamente vectorial.";
 choices[69][3] = "Representaci&oacute;n de tipo streaming.";
 answers[69] = 1;
 units[69] = ['71'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3427. ";
 preguntaids[69] = 3427


//  Id pregunta: 3407 Año de creación de pregunta: 2006
 questions[70]= "71)  Las siglas STRIPS se corresponden a";
 choices[70]= new Array();
 choices[70][0] = "Stanford Research Institute Problem Solver";
 choices[70][1] = "St. Luis Robotics Institute Private Software";
 choices[70][2] = "San Francisco Tech Robots Institute Practical Seasons";
 choices[70][3] = "Science, Tech and Research International Patented System";
 answers[70] = 0;
 units[70] = ['67'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3407. ";
 preguntaids[70] = 3407


//  Id pregunta: 3428 Año de creación de pregunta: 2006
 questions[71]= "72)  En el campo de los sistemas de informaci&oacute;n geogr&aacute;fica, un IDE es:";
 choices[71]= new Array();
 choices[71][0] = "Un conjunto de tecnolog&iacute;as, est&aacute;ndares y recursos humanos necesarios para adquirir, procesar, almacenar, distribuir y mejorar la utilizaci&oacute;n de la informaci&oacute;n geogr&aacute;fica.";
 choices[71][1] = "Un entorno de desarrollo integrado para la elaboraci&oacute;n de aplicaciones que utilizan informaci&oacute;n geogr&aacute;fica.";
 choices[71][2] = "Una infraestructura de datos empresariales, que permite la unificaci&oacute;n de sistemas de informaci&oacute;n geogr&aacute;fica con topolog&iacute;a distribuida.";
 choices[71][3] = "Un sistema de informaci&oacute;n cartogr&aacute;fica como Arc/Info y Arc/View.";
 answers[71] = 0;
 units[71] = ['71'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3428. ";
 preguntaids[71] = 3428


//  Id pregunta: 3455 Año de creación de pregunta: 2006
 questions[72]= "73)  Indicar la respuesta falsa:";
 choices[72]= new Array();
 choices[72][0] = "IDEA es un algoritmo de clave sim&eacute;trica";
 choices[72][1] = "RIPMED utiliza claves de 128 bits";
 choices[72][2] = "SHA-1 utiliza claves de 160 bits";
 choices[72][3] = "La seguridad de una funci&oacute;n hash radica en su car&aacute;cter unidireccional";
 answers[72] = 1;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3455. ";
 preguntaids[72] = 3455


//  Id pregunta: 3429 Año de creación de pregunta: 2006
 questions[73]= "74)  Los modelos digitales del terreno (MDT) son conjuntos de datos de gran utilidad, y t&iacute;picamente representados mediante un modelo de datos:";
 choices[73]= new Array();
 choices[73][0] = "Vectorial.";
 choices[73][1] = "R&aacute;ster.";
 choices[73][2] = "Alfanum&eacute;rico.";
 choices[73][3] = "De cotas u elevaciones.";
 answers[73] = 1;
 units[73] = ['71'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3429. ";
 preguntaids[73] = 3429


//  Id pregunta: 3433 Año de creación de pregunta: 2006
 questions[74]= "75)  De acuerdo al Garner Group, la transformaci&oacute;n de los datos de la compa&ntilde;&iacute;a en conocimiento para obtener una ventaja competitiva se define como:";
 choices[74]= new Array();
 choices[74][0] = "Business Intelligence.";
 choices[74][1] = "Data Mining.";
 choices[74][2] = "ETL.";
 choices[74][3] = "Balanced Score Card.";
 answers[74] = 0;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3433. ";
 preguntaids[74] = 3433


