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
//  Id pregunta: 10351 Año de creación de pregunta: 2015
 questions[0]= "1)  A la hora de tomar requisitos para dise&ntilde;ar un sistema de informaci&oacute;n &iquest;Qu&eacute; informaci&oacute;n debe registrarse obligatoriamente de cada requisito?";
 choices[0]= new Array();
 choices[0][0] = "C&oacute;digo &uacute;nico";
 choices[0][1] = "Nombre descriptivo del requisito";
 choices[0][2] = "Descripci&oacute;n detallada del requisito";
 choices[0][3] = "Todos los anteriores";
 answers[0] = 3;
 units[0] = ['84'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 10351. ";
 preguntaids[0] = 10351


//  Id pregunta: 10378 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares Wifi incluye WPA2?";
 choices[1]= new Array();
 choices[1][0] = "802.e";
 choices[1][1] = "802.f";
 choices[1][2] = "802.h";
 choices[1][3] = "802.i";
 answers[1] = 3;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10378. ";
 preguntaids[1] = 10378


//  Id pregunta: 10339 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una soluci&oacute;n CRM?";
 choices[2]= new Array();
 choices[2][0] = "Oracle Siebel CRM";
 choices[2][1] = "Microsoft Dynamics CRM";
 choices[2][2] = "Jive Software";
 choices[2][3] = "IBM RightNow Sugar CRM";
 answers[2] = 3;
 units[2] = ['69'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 10339. SugarCRM no es de IBM, Siebel es la m&iacute;tica de Oracle (aunque la rebautiz&oacute;, mirando a modelos cloud como Salesforce)";
 preguntaids[2] = 10339


//  Id pregunta: 10355 Año de creación de pregunta: 2015
 questions[3]= "4)  Seleccione la respuesta verdadera:";
 choices[3]= new Array();
 choices[3][0] = "El fan-in de un m&oacute;dulo es usado como una medida de reusabilidad";
 choices[3][1] = "El fan-in de un m&oacute;dulo es usado como una medida de complejidad.";
 choices[3][2] = "Las dos anteriores son verdaderas";
 choices[3][3] = "Todas son falsas";
 answers[3] = 0;
 units[3] = ['89'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 10355. ";
 preguntaids[3] = 10355


//  Id pregunta: 10363 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes soportes de imagen realiza la transformada discreta del coseno (DCT) sobre bloques de 8x8 p&iacute;xeles?";
 choices[4]= new Array();
 choices[4][0] = "GIF";
 choices[4][1] = "TIFF";
 choices[4][2] = "BMP";
 choices[4][3] = "JPG";
 answers[4] = 3;
 units[4] = ['80'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10363. ";
 preguntaids[4] = 10363


//  Id pregunta: 10356 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;A qu&eacute; fase corresponde la Tarea &ldquo;Presentaci&oacute;n y aprobaci&oacute;n del Sistema de Informaci&oacute;n&rdquo; seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[5]= new Array();
 choices[5][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[5][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[5][2] = "Aseguramiento de la Calidad";
 choices[5][3] = "Gesti&oacute;n de Proyectos";
 answers[5] = 1;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 10356. ";
 preguntaids[5] = 10356


//  Id pregunta: 10344 Año de creación de pregunta: 2015
 questions[6]= "7)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, &iquest;cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[6]= new Array();
 choices[6][0] = "3 a&ntilde;os";
 choices[6][1] = "4 a&ntilde;os";
 choices[6][2] = "5 a&ntilde;os";
 choices[6][3] = "6 a&ntilde;os";
 answers[6] = 2;
 units[6] = ['77'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10344. LGT modific&oacute; la ley de firma";
 preguntaids[6] = 10344


//  Id pregunta: 10346 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Cu&aacute;l de lo siguientes sistemas de firma electr&oacute;nica utilizan las Administraciones P&uacute;blicas para la actuaci&oacute;n administrativa automatizada, con objeto de su identificaci&oacute;n electr&oacute;nica y para la autenticaci&oacute;n de los documentos electr&oacute;nicos que produzcan?";
 choices[7]= new Array();
 choices[7][0] = "Sello electr&oacute;nico";
 choices[7][1] = "C&oacute;digo seguro de verificaci&oacute;n";
 choices[7][2] = "Todos los anteriores";
 choices[7][3] = "Ninguno de los anteriores";
 answers[7] = 2;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 10346. ";
 preguntaids[7] = 10346


//  Id pregunta: 10361 Año de creación de pregunta: 2015
 questions[8]= "9)  De acuerdo con la Norma ISO 9004 sobre la madurez del sistema de gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes descripciones se refiere al nivel de madurez 1?";
 choices[8]= new Array();
 choices[8][0] = "Proceso de mejora existente y en uso";
 choices[8][1] = "No hay una aproximaci&oacute;n sistem&aacute;tica evidente; sin resultados, resultados pobres o resultados impredecibles.";
 choices[8][2] = "Aproximaci&oacute;n sistem&aacute;tica basada en el problema o en la prevenci&oacute;n; m&iacute;nimos datos disponibles sobre los resultados de mejora.";
 choices[8][3] = "Proceso de mejora ampliamente integrado.";
 answers[8] = 1;
 units[8] = ['98'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 10361. ";
 preguntaids[8] = 10361


//  Id pregunta: 10312 Año de creación de pregunta: 2015
 questions[9]= "10)  Seleccione la opci&oacute;n verdadera respecto a la clasificaci&oacute;n de las empresas en contratos";
 choices[9]= new Array();
 choices[9][0] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y contratos de servicios de valor estimado mayor que 500.000&euro;";
 choices[9][1] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 500.000&euro;";
 choices[9][2] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y en todo caso para contratos de servicios";
 choices[9][3] = "S&oacute;lo es exigible en contratos de obras en todo caso y contratos de servicios de valor estimado mayor que 200.000&euro;";
 answers[9] = 1;
 units[9] = ['37'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 10312. Para los contratos de servicios no ser&aacute; exigible la clasificaci&oacute;n del empresario (modificaci&oacute;n del TRCSP introducida por la ley 25/2013)";
 preguntaids[9] = 10312


//  Id pregunta: 10336 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;Cu&aacute;l es de las siguientes aplicaciones ofim&aacute;ticas permite crear gr&aacute;ficos y diagramas?";
 choices[10]= new Array();
 choices[10][0] = "Draw";
 choices[10][1] = "Impress";
 choices[10][2] = "Base";
 choices[10][3] = "Picture";
 answers[10] = 0;
 units[10] = ['66'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10336. ";
 preguntaids[10] = 10336


//  Id pregunta: 10340 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de pago?";
 choices[11]= new Array();
 choices[11][0] = "SET";
 choices[11][1] = "Paypal";
 choices[11][2] = "3-D Secure";
 choices[11][3] = "Mastercard True Payment Protocol";
 answers[11] = 3;
 units[11] = ['75'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10340. ";
 preguntaids[11] = 10340


//  Id pregunta: 10377 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;C&oacute;mo se denominan los sistemas de comunicaciones m&oacute;viles que realizan la transmisi&oacute;n y recepci&oacute;n de forma secuencial en un sentido cada vez?";
 choices[12]= new Array();
 choices[12][0] = "Paralelos";
 choices[12][1] = "D&uacute;plex";
 choices[12][2] = "Semi-duplex";
 choices[12][3] = "Ninguno de los anteriores";
 answers[12] = 2;
 units[12] = ['117'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10377. ";
 preguntaids[12] = 10377


//  Id pregunta: 10338 Año de creación de pregunta: 2015
 questions[13]= "14)  Seleccione la respuesta verdadera";
 choices[13]= new Array();
 choices[13][0] = "Los m&eacute;todos de aprendizaje no supervisado se utilizan para t&eacute;cnicas de clustering o agrupaci&oacute;n";
 choices[13][1] = "Los m&eacute;todos de aprendizaje supervisado y no supervisado parten de la misma base de datos de conocimiento";
 choices[13][2] = "Los m&eacute;todos de aprendizaje no supervisado permiten clasificar una muestra en funci&oacute;n de las clases conocidas";
 choices[13][3] = "Las redes neuronales son t&eacute;cnicas de aprendizaje no supervisado";
 answers[13] = 0;
 units[13] = ['67'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10338. ";
 preguntaids[13] = 10338


//  Id pregunta: 10335 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es una licencia de c&oacute;digo abierto reconocida por OSI?";
 choices[14]= new Array();
 choices[14][0] = "European Union Public License";
 choices[14][1] = "Apache License";
 choices[14][2] = "Mozilla Public License";
 choices[14][3] = "Google Legal License";
 answers[14] = 3;
 units[14] = ['66'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10335. ";
 preguntaids[14] = 10335


//  Id pregunta: 10329 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes versiones del sistema de archivos UNIX fue creada por ATT?";
 choices[15]= new Array();
 choices[15][0] = "Virtual File System";
 choices[15][1] = "Fast File System";
 choices[15][2] = "Network File System";
 choices[15][3] = "Remote File System";
 answers[15] = 2;
 units[15] = ['57'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 10329. ";
 preguntaids[15] = 10329


//  Id pregunta: 10347 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;ntos niveles de seguridad define el proyecto STORK?";
 choices[16]= new Array();
 choices[16][0] = "3";
 choices[16][1] = "4";
 choices[16][2] = "5";
 choices[16][3] = "6";
 answers[16] = 1;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10347. eIDAS se queda con 3";
 preguntaids[16] = 10347


//  Id pregunta: 10357 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Qu&eacute; roles deben participar en la Tarea de Evaluaci&oacute;n de Alternativas y Selecci&oacute;n, seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[17]= new Array();
 choices[17][0] = "Jefe de Proyecto";
 choices[17][1] = "Jefe de Proyecto y Comit&eacute; de Direcci&oacute;n";
 choices[17][2] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n y Analistas";
 choices[17][3] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n, Analistas y Usuarios Expertos";
 answers[17] = 2;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10357. ";
 preguntaids[17] = 10357


//  Id pregunta: 10321 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "CEN";
 choices[18][1] = "UNE";
 choices[18][2] = "CENELEC";
 choices[18][3] = "ETSI";
 answers[18] = 1;
 units[18] = ['48'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 10321. ";
 preguntaids[18] = 10321


//  Id pregunta: 10369 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes es una herramienta utilizada para el cifrado de correos electr&oacute;nicos";
 choices[19]= new Array();
 choices[19][0] = "PGP";
 choices[19][1] = "S/MME";
 choices[19][2] = "Todos los anteriores";
 choices[19][3] = "Ninguno de los anteriores";
 answers[19] = 2;
 units[19] = ['116'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10369. ";
 preguntaids[19] = 10369


//  Id pregunta: 10324 Año de creación de pregunta: 2015
 questions[20]= "21)  Los riesgos del Cloud Computing, de acuerdo con el &uacute;ltimo informe del ENISA pueden clasificarse como:";
 choices[20]= new Array();
 choices[20][0] = "Riesgos pol&iacute;ticos y organizativos, riesgos t&eacute;cnicos y riesgos legales";
 choices[20][1] = "Riesgos propios, riesgos compartidos y riesgos derivados";
 choices[20][2] = "Riesgos de usuarios, de la plataforma y del servicio";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 0;
 units[20] = ['52'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10324. ";
 preguntaids[20] = 10324


//  Id pregunta: 10331 Año de creación de pregunta: 2015
 questions[21]= "22)  &iquest;Qu&eacute; comando de UNIX muestra la ruta al directorio de trabajo?";
 choices[21]= new Array();
 choices[21][0] = "Ls";
 choices[21][1] = "Pwd";
 choices[21][2] = "Tree";
 choices[21][3] = "Cd /home";
 answers[21] = 1;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10331. ";
 preguntaids[21] = 10331


//  Id pregunta: 10375 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas se a&ntilde;ade en la Versi&oacute;n 3 del protocolo SNMP?";
 choices[22]= new Array();
 choices[22][0] = "Permite a los agentes informar de forma espontanea al gestor de un evento";
 choices[22][1] = "Enviar mensajes no solicitados al gestor";
 choices[22][2] = "Mecanismos de autentificaci&oacute;n, privacidad y control de accesos verdaderamente s&oacute;lidos.";
 choices[22][3] = "Permite que el agente informe espont&aacute;neamente de excepciones y errores en el protocolo";
 answers[22] = 2;
 units[22] = ['114'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10375. ";
 preguntaids[22] = 10375


//  Id pregunta: 10334 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[23]= new Array();
 choices[23][0] = "Native-Api Driver";
 choices[23][1] = "Network Protocol Driver";
 choices[23][2] = "Native Protocol Driver";
 choices[23][3] = "JDBC-OBDC Bridge";
 answers[23] = 1;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 10334. ";
 preguntaids[23] = 10334


//  Id pregunta: 10360 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;A qu&eacute; se refieren las siglas EFQM?";
 choices[24]= new Array();
 choices[24][0] = "European Foundation of Quality Metrics";
 choices[24][1] = "European Foundation of Quality Maintenance";
 choices[24][2] = "European Foundation for Qualitiy Management";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = 2;
 units[24] = ['98'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10360. Fundaci&oacute;n Europea Gesti&oacute;n Calidad";
 preguntaids[24] = 10360


//  Id pregunta: 10337 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de construcci&oacute;n de la Web Sem&aacute;ntica?";
 choices[25]= new Array();
 choices[25][0] = "OWL";
 choices[25][1] = "MADL";
 choices[25][2] = "XML";
 choices[25][3] = "RDF";
 answers[25] = 1;
 units[25] = ['67'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 10337. ";
 preguntaids[25] = 10337


//  Id pregunta: 10306 Año de creación de pregunta: 2015
 questions[26]= "27)  Seleccione la opci&oacute;n que no indica un principio o pauta de las WCAG 2.0";
 choices[26]= new Array();
 choices[26][0] = "Comprensibilidad";
 choices[26][1] = "Sencillez";
 choices[26][2] = "Operabilidad";
 choices[26][3] = "Robustez";
 answers[26] = 1;
 units[26] = ['42'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 10306. perceptible, operable, comprensible y robusto";
 preguntaids[26] = 10306


//  Id pregunta: 10325 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes sentencias es verdadera?";
 choices[27]= new Array();
 choices[27][0] = "El est&aacute;ndar SATA 3 soporta transferencias hasta 4.8 Gbps";
 choices[27][1] = "La versi&oacute;n ATA-8 soporta velocidades hasta 12 Gbps";
 choices[27][2] = "El SAS 600 consigue velocidades de hasta 16 Gbps";
 choices[27][3] = "Los discos SAS han sido progresivamente sustituidos por los SCSI,";
 answers[27] = 0;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10325. ";
 preguntaids[27] = 10325


//  Id pregunta: 10354 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Qu&eacute; caracter&iacute;sticas deben tener las transacciones para realizarse r&aacute;pidamente y con riesgos m&iacute;nimos?";
 choices[28]= new Array();
 choices[28][0] = "Atomicidad, Coherencia, Independencia, Durabilidad";
 choices[28][1] = "Atomicidad, Consistencia, Aislamiento, Durabilidad";
 choices[28][2] = "Atomicidad, Consistencia, Independencia, Durabilidad";
 choices[28][3] = "Atomicidad, Coherencia, Aislamiento, Durabilidad";
 answers[28] = 1;
 units[28] = ['86'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10354. Atomicity, Consistency Isolation, Durability (ACID)";
 preguntaids[28] = 10354


//  Id pregunta: 10371 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes Grupos de Trabajo del Comit&eacute; de Estandarizaci&oacute;n 802 permanece Activo?";
 choices[29]= new Array();
 choices[29][0] = "802.3 CSMA/CD Ethernet";
 choices[29][1] = "802.14 Redes CATV";
 choices[29][2] = "802.10 Seguridad en Est&aacute;ndares IEEE";
 choices[29][3] = "802.4 Token Bus";
 answers[29] = 0;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10371. ";
 preguntaids[29] = 10371


//  Id pregunta: 10370 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Qu&eacute; organismo es el responsable del est&aacute;ndar X.500?";
 choices[30]= new Array();
 choices[30][0] = "ITU-T";
 choices[30][1] = "ISO";
 choices[30][2] = "IETF";
 choices[30][3] = "IEEE";
 answers[30] = 2;
 units[30] = ['116'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10370. ITU-T  defini&oacute; el est&aacute;ndar X.500";
 preguntaids[30] = 10370


//  Id pregunta: 10309 Año de creación de pregunta: 2015
 questions[31]= "32)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[31]= new Array();
 choices[31][0] = "Organismo p&uacute;blicos";
 choices[31][1] = "Ministerios";
 choices[31][2] = "Comunidades Aut&oacute;nomas";
 choices[31][3] = "Todas las anteriores";
 answers[31] = 3;
 units[31] = ['46'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 10309. ";
 preguntaids[31] = 10309


//  Id pregunta: 10341 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes es el formato oficial de facturaci&oacute;n electr&oacute;nica de la Administraci&oacute;n General del Estado?";
 choices[32]= new Array();
 choices[32][0] = "GS2-XML";
 choices[32][1] = "UBL";
 choices[32][2] = "Facturae";
 choices[32][3] = "Eb-XML";
 answers[32] = 2;
 units[32] = ['75'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 10341. ";
 preguntaids[32] = 10341


//  Id pregunta: 10317 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;En qu&eacute; situaci&oacute;n pueden las AAPP establecer la obligatoriedad de comunicarse con ellas utilizando s&oacute;lo medios electr&oacute;nicos?";
 choices[33]= new Array();
 choices[33][0] = "Nunca";
 choices[33][1] = "&Uacute;nicamente cuando los interesados sean personas jur&iacute;dicas";
 choices[33][2] = "Cuando los interesados sean personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[33][3] = "En todo caso";
 answers[33] = 2;
 units[33] = ['43'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 10317. ";
 preguntaids[33] = 10317


//  Id pregunta: 10323 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no es un servicio de Amazon de Cloud Computing?";
 choices[34]= new Array();
 choices[34][0] = "Amazon CloudWatch";
 choices[34][1] = "Amazon Elastic Compute Cloud";
 choices[34][2] = "Amazon AppFabric";
 choices[34][3] = "Amazon Simple Storage Service";
 answers[34] = 2;
 units[34] = ['52'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 10323. ";
 preguntaids[34] = 10323


//  Id pregunta: 10376 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Cu&aacute;ntas conexiones activas permite mantener un dispositivo con el est&aacute;ndar Bluetooth?";
 choices[35]= new Array();
 choices[35][0] = "7";
 choices[35][1] = "8";
 choices[35][2] = "12";
 choices[35][3] = "16";
 answers[35] = 0;
 units[35] = ['108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10376. ";
 preguntaids[35] = 10376


//  Id pregunta: 10333 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes es un operador derivado de algebra relacional?";
 choices[36]= new Array();
 choices[36][0] = "Intersecci&oacute;n";
 choices[36][1] = "Uni&oacute;n";
 choices[36][2] = "Proyecci&oacute;n";
 choices[36][3] = "Selecci&oacute;n";
 answers[36] = 0;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10333. ";
 preguntaids[36] = 10333


//  Id pregunta: 10364 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Cu&aacute;les es el orden correcto de los bloques b&aacute;sicos de procesamiento de un sistema biom&eacute;trico de reconocimiento de voz?";
 choices[37]= new Array();
 choices[37][0] = "Preprocesamiento, Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[37][1] = "Obtenci&oacute;n de datos del sensor, Preprocesamiento, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[37][2] = "Extracci&oacute;n de caracter&iacute;sticas, Obtenci&oacute;n de datos del sensor, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[37][3] = "Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 answers[37] = 2;
 units[37] = ['81'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10364. ";
 preguntaids[37] = 10364


//  Id pregunta: 10348 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[38]= new Array();
 choices[38][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[38][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Energia, Turismo y Agenda Digital como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[38][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[38][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[38] = 0;
 units[38] = ['78'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10348. ";
 preguntaids[38] = 10348


//  Id pregunta: 10372 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Qu&eacute; tipo de tr&aacute;fico proporciona el nivel de servicio A del est&aacute;ndar 802.17 Resilient Packet Ring?";
 choices[39]= new Array();
 choices[39][0] = "Tr&aacute;fico con requisitos latencia y jitter predecible";
 choices[39][1] = "Tr&aacute;fico con requisitos de baja latencia y bajo jitter";
 choices[39][2] = "Tr&aacute;fico con requisitos de baja latencia y alto jitter";
 choices[39][3] = "Tr&aacute;fico de servicios Best Effort";
 answers[39] = 1;
 units[39] = ['112'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 10372. ";
 preguntaids[39] = 10372


//  Id pregunta: 10352 Año de creación de pregunta: 2015
 questions[40]= "41)  Seleccione la respuesta err&oacute;nea de los diagramas E/R:";
 choices[40]= new Array();
 choices[40][0] = "Los atributos multivalorados son aquellos que pueden contener m&aacute;s de un valor simult&aacute;neamente, y monovalorados los que s&oacute;lo pueden contener un valor";
 choices[40][1] = "Los atributos monovalorados se representan por un nombre dentro de una elipse, mientras que los multivalorados por un nombre dentro de una doble elipse.";
 choices[40][2] = "Se dice que un atributo es compuesto cuando puede descomponerse en otros componentes o atributos m&aacute;s peque&ntilde;os, y simple en otro caso.";
 choices[40][3] = "Se dice que un atributo es cardinal si obligatoriamente tiene que tener al menos un valor";
 answers[40] = 3;
 units[40] = ['85'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 10352. ";
 preguntaids[40] = 10352


//  Id pregunta: 10379 Año de creación de pregunta: 2015
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al MINETUR?";
 choices[41]= new Array();
 choices[41][0] = "Gestionar el Registro de Operadores";
 choices[41][1] = "Establecer obligaciones espec&iacute;ficas de operadores con poder significativo";
 choices[41][2] = "Proponer al gobierno la aprobaci&oacute;n de los planes de numeraci&oacute;n";
 choices[41][3] = "Administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico";
 answers[41] = 1;
 units[41] = ['121'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 10379. ";
 preguntaids[41] = 10379


//  Id pregunta: 10365 Año de creación de pregunta: 2015
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de contenidos opensource?";
 choices[42]= new Array();
 choices[42][0] = "Drupal";
 choices[42][1] = "Joomla";
 choices[42][2] = "Alfresco";
 choices[42][3] = "Sharepoint";
 answers[42] = 3;
 units[42] = ['99'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 10365. Soluci&oacute;n propietaria de Microsoft";
 preguntaids[42] = 10365


//  Id pregunta: 10349 Año de creación de pregunta: 2015
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es un inconveniente de los modelos de desarrollo basados en prototipos?";
 choices[43]= new Array();
 choices[43][0] = "Puede crear falsas expectativas en el usuario ya que puede ver el prototipo como si fuera el producto final";
 choices[43][1] = "Puede darse una fuerte intromisi&oacute;n de los usuarios finales en la integraci&oacute;n";
 choices[43][2] = "Los sistemas se desarrollan en distintas etapas, siendo en general un proceso m&aacute;s largo.";
 choices[43][3] = "No es un paradigma apto para proyectos grandes y de larga duraci&oacute;n ni para aplicaciones peque&ntilde;as";
 answers[43] = 2;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 10349. ";
 preguntaids[43] = 10349


//  Id pregunta: 10326 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un servidor de correo electr&oacute;nico?";
 choices[44]= new Array();
 choices[44][0] = "Sendmail";
 choices[44][1] = "Microsoft Exchange";
 choices[44][2] = "IBM Lotus Domino";
 choices[44][3] = "SMTP Websphere";
 answers[44] = 3;
 units[44] = ['54'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10326. IBM Websphere es un servidor de apps, y SMTP un protocolo";
 preguntaids[44] = 10326


//  Id pregunta: 10322 Año de creación de pregunta: 2015
 questions[45]= "46)  De acuerdo con la Taxonom&iacute;a de Flynn, como se denominan los sistemas de arquitectura serie de Von Neummann?";
 choices[45]= new Array();
 choices[45][0] = "SISD";
 choices[45][1] = "SIMD";
 choices[45][2] = "MISD";
 choices[45][3] = "MIMD";
 answers[45] = 0;
 units[45] = ['49'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 10322. ";
 preguntaids[45] = 10322


//  Id pregunta: 10362 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;les de las siguientes t&eacute;cnicas no suele utilizarse en los sistemas de reconocimiento de habla?";
 choices[46]= new Array();
 choices[46][0] = "Dynamic Time Warping";
 choices[46][1] = "Hidden Markov Model";
 choices[46][2] = "Neural Networks";
 choices[46][3] = "Todas las anteriores se suelen utilizar en los sistemas de reconocimiento de habla";
 answers[46] = 3;
 units[46] = ['80'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 10362. ";
 preguntaids[46] = 10362


//  Id pregunta: 10316 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes no es un contenido m&iacute;nimo que deben tener las sedes electr&oacute;nicas de acuerdo con el art&iacute;culo 6 del RD 1671/2009?";
 choices[47]= new Array();
 choices[47][0] = "Sistema de verificaci&oacute;n de los certificados de la sede, accesible de forma directa y gratuita";
 choices[47][1] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la AEPD.";
 choices[47][2] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[47][3] = "Todos los anteriores son contenidos m&iacute;nimos de las sedes electr&oacute;nicas.";
 answers[47] = 3;
 units[47] = ['43'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 10316. La ley 39/2015 a&uacute;n no ha tenido desarrollo reglamentario";
 preguntaids[47] = 10316


//  Id pregunta: 10305 Año de creación de pregunta: 2015
 questions[48]= "49)  Seleccione la respuesta verdadera:";
 choices[48]= new Array();
 choices[48][0] = "Un Valor Actual Neto mayor que 0 indica que la inversi&oacute;n es rentable";
 choices[48][1] = "Un Valor Actual Neto mayor que 0 indica que la TIR es inferior al coste del capital";
 choices[48][2] = "Las respuestas a) y b) son falsas";
 choices[48][3] = "Las respuestas a) y b) son verdaderas";
 answers[48] = 0;
 units[48] = ['40'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 10305. ";
 preguntaids[48] = 10305


//  Id pregunta: 10330 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no es una Shell de Linux?";
 choices[49]= new Array();
 choices[49][0] = "Shell X";
 choices[49][1] = "Shell de Korn";
 choices[49][2] = "Shell de Bourne";
 choices[49][3] = "Shell C";
 answers[49] = 0;
 units[49] = ['57'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 10330. ";
 preguntaids[49] = 10330


//  Id pregunta: 10332 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje para interactuar con la SGBD?";
 choices[50]= new Array();
 choices[50][0] = "DDL - Data Definition Language";
 choices[50][1] = "DML - Data Manipulation Language";
 choices[50][2] = "DCL - Data Control Language";
 choices[50][3] = "Todos los anteriores son lenguajes para interactuar con la SGBD";
 answers[50] = 3;
 units[50] = ['60'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 10332. ";
 preguntaids[50] = 10332


//  Id pregunta: 10307 Año de creación de pregunta: 2015
 questions[51]= "52)  &iquest;Cu&aacute;l no es un principio general del dise&ntilde;o centrado en el usuario de Nielsen?";
 choices[51]= new Array();
 choices[51][0] = "Medida de la satisfacci&oacute;n del usuario";
 choices[51][1] = "Visibilidad del estado del sistema";
 choices[51][2] = "Dise&ntilde;o minimalista";
 choices[51][3] = "Prevenci&oacute;n y ayuda en la recuperaci&oacute;n de errores";
 answers[51] = 0;
 units[51] = ['42'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 10307. ";
 preguntaids[51] = 10307


//  Id pregunta: 10353 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[52]= new Array();
 choices[52][0] = "Nivel 0: Diagrama de Contexto";
 choices[52][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[52][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[52][3] = "Nivel 4: Diagrama de Procesos";
 answers[52] = 2;
 units[52] = ['85'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 10353. ";
 preguntaids[52] = 10353


//  Id pregunta: 10373 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes componentes es de nivel 2?";
 choices[53]= new Array();
 choices[53][0] = "Repetidores";
 choices[53][1] = "Puentes";
 choices[53][2] = "Enrutadores";
 choices[53][3] = "Concentradores";
 answers[53] = 1;
 units[53] = ['102'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 10373. ";
 preguntaids[53] = 10373


//  Id pregunta: 10350 Año de creación de pregunta: 2015
 questions[54]= "55)  En un an&aacute;lisis DAFO previo a la definici&oacute;n de la estrategia de una organizaci&oacute;n, &iquest;qu&eacute; son las debilidades?";
 choices[54]= new Array();
 choices[54][0] = "Aspectos que limitan o reducen la capacidad de desarrollo efectivo de la estrategia de la organizaci&oacute;n y deben, por tanto, ser controladas y superadas.";
 choices[54][1] = "Todo aquello que pueda representar una posibilidad para mejorar la rentabilidad de la misma o aumentar la cifra de sus negocios.";
 choices[54][2] = "Toda fuerza del entorno que puede impedir la implantaci&oacute;n de una estrategia, o bien reducir su efectividad, o incrementar los riesgos de la misma,";
 choices[54][3] = "Todos aquellos aspectos de la organizaci&oacute;n que no son ventajas competitivas respecto a los competidores en un mismo mercado";
 answers[54] = 0;
 units[54] = ['83'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 10350. ";
 preguntaids[54] = 10350


//  Id pregunta: 10313 Año de creación de pregunta: 2015
 questions[55]= "56)  Seleccione la respuesta verdadera respecto a la publicidad de los procedimientos negociados:";
 choices[55]= new Array();
 choices[55][0] = "No se requiere publicidad en el caso de contratos cuyo valor estimado sea IGUAL o MENOR de 120.000";
 choices[55][1] = "El &oacute;rgano de contrataci&oacute;n solicitar&aacute; ofertas, al menos a 5 empresas capaces de realizar el objeto del contrato, cuando ello sea posible.";
 choices[55][2] = "El procedimiento permite la negociaci&oacute;n de las condiciones del contrato.";
 choices[55][3] = "Es el procedimiento ordinario de adjudicaci&oacute;n en los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado.";
 answers[55] = 2;
 units[55] = ['37'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 10313. Atenci&oacute;n al nuevo anteproyecto de la ley de contratos";
 preguntaids[55] = 10313


//  Id pregunta: 10314 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no es un derecho de los ciudadanos de acuerdo con la ley 39/2015?";
 choices[56]= new Array();
 choices[56][0] = "A relacionarse directamente con las AAPP.";
 choices[56][1] = "A no aportar datos y documentos que obren en poder de las Administraciones P&uacute;blicas";
 choices[56][2] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicos de los documentos electr&oacute;nicos que formen parte de un expediente por duplicado";
 choices[56][3] = "A elegir en cada momento el canal a trav&eacute;s del cual se relacionen con la Administraci&oacute;n";
 answers[56] = 2;
 units[56] = ['43'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 10314. ";
 preguntaids[56] = 10314


//  Id pregunta: 10308 Año de creación de pregunta: 2015
 questions[57]= "58)  Seleccione la opci&oacute;n verdadera";
 choices[57]= new Array();
 choices[57][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[57][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[57][2] = "ACCEDA permite crear un registro en la nube";
 choices[57][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[57] = 0;
 units[57] = ['46'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 10308. Geiser es una soluci&oacute;n de registro integral";
 preguntaids[57] = 10308


//  Id pregunta: 10358 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es un modo de COCOMO (Constructive Cost Model) para estimar el n&uacute;mero de instrucciones de c&oacute;digo fuente seg&uacute;n el entorno de aplicaci&oacute;n que se utiliza?";
 choices[58]= new Array();
 choices[58][0] = "Org&aacute;nico";
 choices[58][1] = "Acoplado";
 choices[58][2] = "Semiacoplado";
 choices[58][3] = "Empotrado";
 answers[58] = 1;
 units[58] = ['93'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 10358. ";
 preguntaids[58] = 10358


//  Id pregunta: 10315 Año de creación de pregunta: 2015
 questions[59]= "60)  &iquest;Por qu&eacute; acuerdo marco comprar&iacute;a usted un ordenador personal?";
 choices[59]= new Array();
 choices[59][0] = "AM 2/2013";
 choices[59][1] = "AM 10/2013";
 choices[59][2] = "AM 13/2013";
 choices[59][3] = "AM 5/2013";
 answers[59] = 0;
 units[59] = ['37'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 10315. El de servicios de desarrollo de la admin electr&oacute;nica es el AM 26/2015 entr&oacute; en vigor en 2016";
 preguntaids[59] = 10315


//  Id pregunta: 10367 Año de creación de pregunta: 2015
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes procesos no forma parte del Soporte de Servicio seg&uacute;n la biblioteca ITIL v3?";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de Incidencias";
 choices[60][1] = "Gesti&oacute;n de Problemas";
 choices[60][2] = "Gesti&oacute;n de Eventos";
 choices[60][3] = "Gesti&oacute;n del Cambio";
 answers[60] = 2;
 units[60] = ['101'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 10367. ";
 preguntaids[60] = 10367


//  Id pregunta: 10374 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento es de nivel interno?";
 choices[61]= new Array();
 choices[61][0] = "OSPF";
 choices[61][1] = "IS-IS";
 choices[61][2] = "RIP";
 choices[61][3] = "Todos los anteriores";
 answers[61] = 3;
 units[61] = ['114'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10374. ";
 preguntaids[61] = 10374


//  Id pregunta: 10328 Año de creación de pregunta: 2015
 questions[62]= "63)  &iquest;A qu&eacute; se refiere un problema de fragmentaci&oacute;n interna de la memoria de un sistema operativo?";
 choices[62]= new Array();
 choices[62][0] = "Cuando el programa es m&aacute;s peque&ntilde;o que el marco de p&aacute;gina asignado";
 choices[62][1] = "Cuando quedan zonas de memoria libres peque&ntilde;as que no se pueden utilizar";
 choices[62][2] = "Cuando un programa utiliza zonas de memoria diferentes en cada sesi&oacute;n para escribir sus datos.";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 0;
 units[62] = ['56'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 10328. ";
 preguntaids[62] = 10328


//  Id pregunta: 10310 Año de creación de pregunta: 2015
 questions[63]= "64)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = "Estar conectado a Red SARA.";
 choices[63][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[63][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[63][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[63] = 1;
 units[63] = ['46'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 10310. ";
 preguntaids[63] = 10310


//  Id pregunta: 10345 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;Qu&eacute; versi&oacute;n del PKCS define una interfaz para el acceso a dispositivos que contienen informaci&oacute;n criptogr&aacute;fica como Tokens o Tarjetas?";
 choices[64]= new Array();
 choices[64][0] = "PKCS 1";
 choices[64][1] = "PKCS 7";
 choices[64][2] = "PCKCS 9";
 choices[64][3] = "PKCS 11";
 answers[64] = 3;
 units[64] = ['77'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 10345. ";
 preguntaids[64] = 10345


//  Id pregunta: 10359 Año de creación de pregunta: 2015
 questions[65]= "66)  &iquest;A qu&eacute; concepto se corresponde la definici&oacute;n: &ldquo;proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n.&rdquo;";
 choices[65]= new Array();
 choices[65][0] = "Ingenier&iacute;a inversa";
 choices[65][1] = "Reingenier&iacute;a";
 choices[65][2] = "Ingenier&iacute;a hacia delante";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = 0;
 units[65] = ['97'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 10359. ";
 preguntaids[65] = 10359


//  Id pregunta: 10366 Año de creación de pregunta: 2015
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es un modelo cl&aacute;sico de recuperaci&oacute;n de informaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Probabil&iacute;stico";
 choices[66][1] = "Estructurado";
 choices[66][2] = "Vectorial";
 choices[66][3] = "Booleano";
 answers[66] = 1;
 units[66] = ['100'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 10366. ";
 preguntaids[66] = 10366


//  Id pregunta: 10320 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Cu&aacute;l de lo siguientes no es un servicio horizontal de la red SARA?";
 choices[67]= new Array();
 choices[67][0] = "Plataforma de validaci&oacute;n de firma electr&oacute;nica @firma";
 choices[67][1] = "Solicitud de cambio de domicilio";
 choices[67][2] = "Pasarela de pago";
 choices[67][3] = "Registro Central de Personal";
 answers[67] = 3;
 units[67] = ['47'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 10320. ";
 preguntaids[67] = 10320


//  Id pregunta: 10319 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?";
 choices[68]= new Array();
 choices[68][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[68][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[68][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[68][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[68] = 1;
 units[68] = ['43'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 10319. ";
 preguntaids[68] = 10319


//  Id pregunta: 10342 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes cifrados sim&eacute;tricos es de flujo?";
 choices[69]= new Array();
 choices[69][0] = "RC-4";
 choices[69][1] = "IDEA";
 choices[69][2] = "RC-5";
 choices[69][3] = "AES";
 answers[69] = 0;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 10342. ";
 preguntaids[69] = 10342


//  Id pregunta: 10318 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;A que se refiere la gu&iacute;a CCN-STIC 804?";
 choices[70]= new Array();
 choices[70][0] = "Medidas de implantaci&oacute;n del ENS";
 choices[70][1] = "Plan de Adecuaci&oacute;n del ENS";
 choices[70][2] = "Auditor&iacute;a del ENS";
 choices[70][3] = "Normas de seguridad del ENS";
 answers[70] = 0;
 units[70] = ['43'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 10318. ";
 preguntaids[70] = 10318


//  Id pregunta: 10368 Año de creación de pregunta: 2015
 questions[71]= "72)  &iquest;Cu&aacute;l es el ciclo de vida correcto de la informaci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "Generaci&oacute;n, Almacenamiento, Acceso, Disposici&oacute;n, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[71][1] = "Generaci&oacute;n, Acceso, Almacenamiento, Uso, Disposici&oacute;n y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[71][2] = "Generaci&oacute;n, Acceso, Disposici&oacute;n, Almacenamiento, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[71][3] = "Generaci&oacute;n, Almacenamiento, Acceso, Uso, Disposici&oacute;n, y Conservaci&oacute;n o Destrucci&oacute;n";
 answers[71] = 0;
 units[71] = ['100'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 10368. ";
 preguntaids[71] = 10368


//  Id pregunta: 10327 Año de creación de pregunta: 2015
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguiente no es un organismo de estandarizaci&oacute;n de arquitecturas SOA?";
 choices[72]= new Array();
 choices[72][0] = "Business Process Management Initiative (BPMI)";
 choices[72][1] = "Object Management Group (OMG)";
 choices[72][2] = "OASIS";
 choices[72][3] = "Microsoft-IBM Workflow Management Coallition";
 answers[72] = 3;
 units[72] = ['55'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 10327. ";
 preguntaids[72] = 10327


//  Id pregunta: 10311 Año de creación de pregunta: 2015
 questions[73]= "74)  El &oacute;rgano competente para la resoluci&oacute;n de un recurso especial en materia de contrataci&oacute;n en la AGE es:";
 choices[73]= new Array();
 choices[73][0] = "El Tribunal Administrativo Central de Recursos Contractuales";
 choices[73][1] = "El Tribunal Contencioso Administrativo";
 choices[73][2] = "El Tribunal de Cuentas";
 choices[73][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 answers[73] = 0;
 units[73] = ['37'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 10311. Recursos especiales para contratos SARA";
 preguntaids[73] = 10311


//  Id pregunta: 10343 Año de creación de pregunta: 2015
 questions[74]= "75)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T para infraestructuras de claves p&uacute;blicas?";
 choices[74]= new Array();
 choices[74][0] = "X.500";
 choices[74][1] = "X.509v3";
 choices[74][2] = "X.CRL";
 choices[74][3] = "OCSP";
 answers[74] = 1;
 units[74] = ['77'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 10343. X.500 es un conjunto de est&aacute;ndares de la ITU-T sobre servicios de directorio";
 preguntaids[74] = 10343


