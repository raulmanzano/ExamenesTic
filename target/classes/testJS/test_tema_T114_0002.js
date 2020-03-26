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
//  Id pregunta: 5213 Año de creación de pregunta: 2006
 questions[0]= "1)  En SNMP:";
 choices[0]= new Array();
 choices[0][0] = "El agente env&iacute;a al cliente comandos Get Response";
 choices[0][1] = "El origen de SNMP es SGMP";
 choices[0][2] = "Su arquitectura consiste en agente, objetos y cliente";
 choices[0][3] = "Todas son verdaderas";
 answers[0] = 3;
 units[0] = ['114'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5213. ";
 preguntaids[0] = 5213


//  Id pregunta: 8792 Año de creación de pregunta: 2013
 questions[1]= "2)  De entre las siguientes, existe una que no es una iniciativa comunitaria relacionada con el &aacute;mbito TIC:";
 choices[1]= new Array();
 choices[1][0] = "ISA";
 choices[1][1] = "eTIN";
 choices[1][2] = "IDAbc";
 choices[1][3] = "CIP 2007-2013";
 answers[1] = 1;
 units[1] = ['114'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8792. ";
 preguntaids[1] = 8792


//  Id pregunta: 5088 Año de creación de pregunta: 2002
 questions[2]= "3)  WLL es:";
 choices[2]= new Array();
 choices[2][0] = "Una DLL para dispositivos wireless";
 choices[2][1] = "Una t&eacute;cnica de dise&ntilde;o de enlaces o links a p&aacute;ginas web";
 choices[2][2] = "Un bucle local inal&aacute;mbrico de abonado en telefon&iacute;a fija";
 choices[2][3] = "Nada de lo anterior";
 answers[2] = 2;
 units[2] = ['114'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5088. ";
 preguntaids[2] = 5088


//  Id pregunta: 8794 Año de creación de pregunta: 2013
 questions[3]= "4)  La red S-TESTA:";
 choices[3]= new Array();
 choices[3][0] = "Es accesible directamente desde cada Ministerio.";
 choices[3][1] = "El EuroDomain es un Dominio Local de servicios centralizados.";
 choices[3][2] = "Algunas aplicaciones que usan sus servicios son OLAF, DG TREN o DG FISH.";
 choices[3][3] = "Da acceso y opera a trav&eacute;s de Internet.";
 answers[3] = 2;
 units[3] = ['114'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8794. ";
 preguntaids[3] = 8794


//  Id pregunta: 8795 Año de creación de pregunta: 2013
 questions[4]= "5)  En RDSI, en el lado del operador:";
 choices[4]= new Array();
 choices[4][0] = "La Terminaci&oacute;n de Central se encarga de manejar el protocolo de enlace de datos.";
 choices[4][1] = "La Terminaci&oacute;n de L&iacute;nea se encarga de manejar el protocolo de enlace de datos.";
 choices[4][2] = "La Terminaci&oacute;n de Central est&aacute; entre la interfaz U y V.";
 choices[4][3] = "La Terminaci&oacute;n de L&iacute;nea est&aacute; entre la interfaz U y T.";
 answers[4] = 0;
 units[4] = ['114'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8795. ";
 preguntaids[4] = 8795


//  Id pregunta: 6338 Año de creación de pregunta: 2003
 questions[5]= "6)  Indique cu&aacute;l de los siguientes formatos no se corresponde con un tipo de formato de imagen est&aacute;tica:";
 choices[5]= new Array();
 choices[5][0] = "PNG";
 choices[5][1] = "JPEG";
 choices[5][2] = "GIF";
 choices[5][3] = "MNG";
 answers[5] = 3;
 units[5] = ['114'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 6338. ";
 preguntaids[5] = 6338


//  Id pregunta: 7197 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;En qu&eacute; lenguaje est&aacute;n definidos los objetos gestionados en SNMP?";
 choices[6]= new Array();
 choices[6][0] = "C++";
 choices[6][1] = "ASN.1";
 choices[6][2] = "trap";
 choices[6][3] = "Java";
 answers[6] = 1;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7197. Castilla La Mancha 2009";
 preguntaids[6] = 7197


//  Id pregunta: 5155 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;C&uacute;antos canales tiene una trama MIC (PCM en ingl&eacute;s)?:";
 choices[7]= new Array();
 choices[7][0] = "32";
 choices[7][1] = "16";
 choices[7][2] = "32, pero dos de ellos se utilizan para se&ntilde;alizaci&oacute;n y sincronismo";
 choices[7][3] = "Todas las respuestas anteriores son falsas";
 answers[7] = 2;
 units[7] = ['114'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5155. ";
 preguntaids[7] = 5155


//  Id pregunta: 8796 Año de creación de pregunta: 2013
 questions[8]= "9)  Sobre los canales no estructurados en Europa:";
 choices[8]= new Array();
 choices[8][0] = "El H11 trabaja a 384 Kbps, agrupando 6 canales de 64 Kbps";
 choices[8][1] = "El H0 trabaja a 1536 Kbps, agrupando 24 canales de 64 Kbps";
 choices[8][2] = "El H11 trabaja a 1920 Kbps, agrupando 30 canales de 64 Kbps";
 choices[8][3] = "El H0 trabaja 384 Kbps, agrupando 6 canales de 64 Kbps";
 answers[8] = 3;
 units[8] = ['114'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8796. ";
 preguntaids[8] = 8796


//  Id pregunta: 6089 Año de creación de pregunta: 2003
 questions[9]= "10)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (TransmissionControl Protocol/Internet Protocol)?";
 choices[9]= new Array();
 choices[9][0] = "PGR";
 choices[9][1] = "SMTP";
 choices[9][2] = "ICMP";
 choices[9][3] = "SNMP";
 answers[9] = 3;
 units[9] = ['114'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6089. Examen TIC A1 MAP 2007";
 preguntaids[9] = 6089


//  Id pregunta: 8799 Año de creación de pregunta: 2013
 questions[10]= "11)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso primario RDSI en Europa?";
 choices[10]= new Array();
 choices[10][0] = "1544 Kbps";
 choices[10][1] = "64 Kbps";
 choices[10][2] = "2048 Kbps";
 choices[10][3] = "1024 Kbps";
 answers[10] = 2;
 units[10] = ['114'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8799. ";
 preguntaids[10] = 8799


//  Id pregunta: 8801 Año de creación de pregunta: 2013
 questions[11]= "12)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[11]= new Array();
 choices[11][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[11][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[11][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[11][3] = "Ninguna de las respuestas es correcta.";
 answers[11] = 0;
 units[11] = ['114'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8801. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[11] = 8801


//  Id pregunta: 6055 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Cu&aacute;l es el componente de SNMP que define las reglas para describir los objetos gestionados y c&oacute;mo losprotocolos sometidos a la gesti&oacute;n pueden acceder a ellos?:";
 choices[12]= new Array();
 choices[12][0] = "MIB (Management Information Base).";
 choices[12][1] = "PDU (Packet Data Unit).";
 choices[12][2] = "CMIS (Common Management Information Services).";
 choices[12][3] = "SMI (Structure of Management Information).";
 answers[12] = 3;
 units[12] = ['114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 6055. TIC B 2007";
 preguntaids[12] = 6055


//  Id pregunta: 5005 Año de creación de pregunta: 2002
 questions[13]= "14)  MIB es:";
 choices[13]= new Array();
 choices[13][0] = "Una base de datos de informaci&oacute;n de gestion";
 choices[13][1] = "Un protocolo de gesti&oacute;n";
 choices[13][2] = "Un dominio de gesti&oacute;n";
 choices[13][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[13] = 0;
 units[13] = ['114'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5005. ";
 preguntaids[13] = 5005


//  Id pregunta: 5058 Año de creación de pregunta: 2002
 questions[14]= "15)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[14]= new Array();
 choices[14][0] = "Grado de servicio";
 choices[14][1] = "Alerting delay";
 choices[14][2] = "Bit error";
 choices[14][3] = "Todos son par&aacute;metros de calidad";
 answers[14] = 3;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5058. ";
 preguntaids[14] = 5058


//  Id pregunta: 8797 Año de creación de pregunta: 2013
 questions[15]= "16)  DSS1 es:";
 choices[15]= new Array();
 choices[15][0] = "Un protocolo utilizado en ADSL, en la capa de red, para la gesti&oacute;n de conexiones con el DSLAM";
 choices[15][1] = "Un protocolo utilizado en RDSI, de la capa de red, para gesti&oacute;n de conexiones.";
 choices[15][2] = "Un protocolo utilizado en RDSI en la capa de enlace, para el control de acceso al canal D";
 choices[15][3] = "Un protocolo utilizado en ADSL, en la capa de enlace, para el acceso m&uacute;ltiple a los servicios";
 answers[15] = 1;
 units[15] = ['114'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8797. ";
 preguntaids[15] = 8797


//  Id pregunta: 6821 Año de creación de pregunta: 2010
 questions[16]= "17)  El programa marco de la UE para la innovaci&oacute;n y competitividad se denomina:";
 choices[16]= new Array();
 choices[16][0] = "eTEN";
 choices[16][1] = "IDA";
 choices[16][2] = "CIP";
 choices[16][3] = "Ninguna de las respuestas es correcta";
 answers[16] = 2;
 units[16] = ['114'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 6821. ";
 preguntaids[16] = 6821


//  Id pregunta: 5078 Año de creación de pregunta: 2002
 questions[17]= "18)  Sobre los sistemas de gesti&oacute;n de red (NMS - &ldquo;Network Management Systems&rdquo;), indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[17]= new Array();
 choices[17][0] = "La mayor&iacute;a de los sistemas de gesti&oacute;n de red utilizan la misma estructura: Los dispositivos en red ejecutan un software (agente de gesti&oacute;n de red) que les permite transmitir alarmas ante la aparici&oacute;n de un problema hacia una estaci&oacute;n de gesti&oacute;n de red.";
 choices[17][1] = "Entre los protocolos de gesti&oacute;n de red mas utilizados se encuentra SNMP (&ldquo;Simple Network Management Protocol&rdquo;) est&aacute;ndar ISO/OSI, y CMIP (&ldquo;Common Management Information Protocol&rdquo;) que forma parte de la familia de protocolos TCP/IP";
 choices[17][2] = "Los agentes de gesti&oacute;n de red son m&oacute;dulos de software que compilan informaci&oacute;n sobre los dispositivos de red en los que residen en una base de datos de estructura jer&aacute;rquica denominada MIB (&ldquo;Management Information Base&rdquo;).";
 choices[17][3] = "El modelo de sistema de gesti&oacute;n de red de ISO se compone de cinco &aacute;reas conceptuales: Gesti&oacute;n de prestaciones, gesti&oacute;n de configuraci&oacute;n, gesti&oacute;n contable, gesti&oacute;n de fallos y gesti&oacute;n de seguridad";
 answers[17] = 1;
 units[17] = ['114'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5078. ";
 preguntaids[17] = 5078


//  Id pregunta: 9089 Año de creación de pregunta: 2014
 questions[18]= "19)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[18]= new Array();
 choices[18][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[18][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[18][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[18][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[18] = 0;
 units[18] = ['114'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9089. Examen TIC-A1 2013";
 preguntaids[18] = 9089


//  Id pregunta: 5894 Año de creación de pregunta: 2007
 questions[19]= "20)  En que lenguaje esta especificada La MIB de SNMPv2";
 choices[19]= new Array();
 choices[19][0] = "XML";
 choices[19][1] = "HTML";
 choices[19][2] = "ASN1";
 choices[19][3] = "Java";
 answers[19] = 2;
 units[19] = ['114'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5894. ";
 preguntaids[19] = 5894


//  Id pregunta: 8108 Año de creación de pregunta: 2011
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[20]= new Array();
 choices[20][0] = "SetRequest";
 choices[20][1] = "GetBulkRequest";
 choices[20][2] = "GetNextRequest";
 choices[20][3] = "Trap";
 answers[20] = 1;
 units[20] = ['114'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8108. Examen TIC A2 2010 interna";
 preguntaids[20] = 8108


//  Id pregunta: 5692 Año de creación de pregunta: 2007
 questions[21]= "22)  Un enlace del tipo STM-1:";
 choices[21]= new Array();
 choices[21][0] = "Es un enlace PDH de 155,52 Mbps";
 choices[21][1] = "Es un enlace PDH de 622,08 Mbps.";
 choices[21][2] = "Es un enlace SDH de 622,08 Mbps.";
 choices[21][3] = "Es un enlace SDH de 155,52 Mbps.";
 answers[21] = 3;
 units[21] = ['114'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5692. ";
 preguntaids[21] = 5692


//  Id pregunta: 5405 Año de creación de pregunta: 2006
 questions[22]= "23)  Indique cual de las siguientes afirmaciones con relaci&oacute;n a la RDSI (Red Digital de Servicios Integrados) no es correcta:";
 choices[22]= new Array();
 choices[22][0] = "Utiliza el sistema de se&ntilde;alizaci&oacute;n por canal comun CCITT n&ordm; 7 (CCS7)";
 choices[22][1] = "Emplea el canal D para el transporte de se&ntilde;alizaci&oacute;n mediante conmutaci&oacute;n de paquetes";
 choices[22][2] = "La velocidad de los canales B tanto en los accesos b&aacute;sicos como en los primarios es de 64 Kbps";
 choices[22][3] = "La velocidad de los canales D tanto en los accesos b&aacute;sicos como en los primarios es de 16 Kbps";
 answers[22] = 3;
 units[22] = ['114'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5405. ";
 preguntaids[22] = 5405


//  Id pregunta: 6501 Año de creación de pregunta: 2003
 questions[23]= "24)  Ventajas de la versi&oacute;n SNMPv3 sobre SNMPv2";
 choices[23]= new Array();
 choices[23][0] = "SNMPv2 presentaba debilidades en la recuperaci&oacute;n de grandes cantidades de informaci&oacute;n.";
 choices[23][1] = "Introduce mecanismos de autentificaci&oacute;n, privacidad y control de accesos m&aacute;s solidos";
 choices[23][2] = "SNMPv3 introdujo nuevas operaciones: GetBulk, Inform, Report";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 1;
 units[23] = ['114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6501. ";
 preguntaids[23] = 6501


//  Id pregunta: 8793 Año de creación de pregunta: 2013
 questions[24]= "25)  Acerca de RDSI y sus diferentes servicios:";
 choices[24]= new Array();
 choices[24][0] = "Los servicios portadores soportan la comunicaci&oacute;n terminal a terminal";
 choices[24][1] = "Los teleservicios proporcionan capacidades adicionales para los servicios suplementarios y los servicios portadores.";
 choices[24][2] = "Los servicios suplementarios soportan la comunicaci&oacute;n terminal a terminal y controlan los procesos de comunicaci&oacute;n entre usuarios.";
 choices[24][3] = "Los teleservicios soportan la comunicaci&oacute;n terminal a terminal";
 answers[24] = 3;
 units[24] = ['114'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8793. ";
 preguntaids[24] = 8793


//  Id pregunta: 5080 Año de creación de pregunta: 2002
 questions[25]= "26)  STP proporciona:";
 choices[25]= new Array();
 choices[25][0] = "Puntos de acceso s&iacute;ncronos de transferencia de datos en RDSI";
 choices[25][1] = "Conmutaci&oacute;n de mensajes entre nodos de SS7";
 choices[25][2] = "Temporizaci&oacute;n exacta en redes WDM";
 choices[25][3] = "Nada de lo anterior es cierto";
 answers[25] = 1;
 units[25] = ['114'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5080. ";
 preguntaids[25] = 5080


//  Id pregunta: 6421 Año de creación de pregunta: 2003
 questions[26]= "27)  Indique cu&aacute;l de los siguientes no es un elemento de la arquitectura de la red europea TESTA-II:";
 choices[26]= new Array();
 choices[26][0] = "LocalDomain";
 choices[26][1] = "EuroDomain";
 choices[26][2] = "EuroNet";
 choices[26][3] = "EuroGate";
 answers[26] = 2;
 units[26] = ['114'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 6421. ";
 preguntaids[26] = 6421


//  Id pregunta: 5210 Año de creación de pregunta: 2006
 questions[27]= "28)  Se&ntilde;ale la respuesta correcta:";
 choices[27]= new Array();
 choices[27][0] = "IDABC tiene como objetivo la identificaci&oacute;n, promoci&oacute;n y desarrollo de servicios paneuropeos de e-administraci&oacute;n para los ciudadanos, las empresas y las administraciones, as&iacute; como de las infraestructuras y servicios necesarios para el despliegue.";
 choices[27][1] = "El comit&eacute; de gesti&oacute;n del programa se denomina Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE).";
 choices[27][2] = "Sus antecesores son los programas IDA II (1999-2004) e IDA I (1995-1998)";
 choices[27][3] = "Todas son verdaderas";
 answers[27] = 3;
 units[27] = ['114'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5210. ";
 preguntaids[27] = 5210


//  Id pregunta: 8803 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[28]= new Array();
 choices[28][0] = "S&oacute;lo 1 canal B puede estar ocupado en un momento determinado, pero puede encolar lo que entre por el otro.";
 choices[28][1] = "3, ya que cada canal s&oacute;lo puede ser utilizado por un terminal a la vez, y con la compresi&oacute;n adecuada todos los canales permiten una comunicaci&oacute;n vocal.";
 choices[28][2] = "1 por cada canal B, mientras que el canal D puede ser compartido por varios terminales en modo paquete.";
 choices[28][3] = "Los 8 terminales que puede soportar el acceso b&aacute;sico.";
 answers[28] = 2;
 units[28] = ['114'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8803. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[28] = 8803


//  Id pregunta: 5386 Año de creación de pregunta: 2006
 questions[29]= "30)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos con reparto balanceado de la carga de trabajo";
 choices[29]= new Array();
 choices[29][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[29][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[29][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[29][3] = "No puede ser conocido a priori";
 answers[29] = 0;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5386. ";
 preguntaids[29] = 5386


//  Id pregunta: 6822 Año de creación de pregunta: 2010
 questions[30]= "31)  GEANT2 es una red promovida por la UE para:";
 choices[30]= new Array();
 choices[30][0] = "El intercambio de datos entre las Administraciones Europeas";
 choices[30][1] = "La interconexi&oacute;n de la comunidad cient&iacute;fica y universitaria";
 choices[30][2] = "Las dos respuestas anteriores son correctas";
 choices[30][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[30] = 1;
 units[30] = ['114'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6822. ";
 preguntaids[30] = 6822


//  Id pregunta: 5982 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la gesti&oacute;n de redes NO es cierta?";
 choices[31]= new Array();
 choices[31][0] = "La base de informaci&oacute;n de administraci&oacute;n (MIB) tiene una estructura de base de datos y reside en laestaci&oacute;n de monitorizaci&oacute;n";
 choices[31][1] = "Uno de los modos de monitorizaci&oacute;n de SNMP (Simple Network Management Protocol) es el de sondeo, queconsiste en la interrupci&oacute;n por parte del agente SNMP a trav&eacute;s del puerto 162 de UDP (User DatagramProtocol)";
 choices[31][2] = "SNMPv3 (SNMP version 3) introduce capacidades de seguridad frente a las versiones anteriores, tales comocontrol de acceso, autenticaci&oacute;n y privacidad";
 choices[31][3] = "RMONv2 (Remote Monitoring version 2) permite la monitorizaci&oacute;n de segmentos de redes de &aacute;rea local y elchequeo de trafico a nivel de red y aplicaci&oacute;n";
 answers[31] = 0;
 units[31] = ['114'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5982. ";
 preguntaids[31] = 5982


//  Id pregunta: 7769 Año de creación de pregunta: 2010
 questions[32]= "33)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?";
 choices[32]= new Array();
 choices[32][0] = "Es una red que interconecta las redes Administrativas de los estados miembros y de las instituciones y agencias europeas.";
 choices[32][1] = "Es un instrumento vertebrador e integrador que ofrece a las Administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones.";
 choices[32][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet.";
 choices[32][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC.";
 answers[32] = 2;
 units[32] = ['114'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7769. ";
 preguntaids[32] = 7769


//  Id pregunta: 5212 Año de creación de pregunta: 2006
 questions[33]= "34)  En relaci&oacute;n a la gesti&oacute;n de red (se&ntilde;ale la falsa):";
 choices[33]= new Array();
 choices[33][0] = "Los modelos de gesti&oacute;n se pueden clasificar seg&uacute;n el grado de descentralizaci&oacute;n, el dominio, el grado de heterogeneidad y la jerarqu&iacute;a organizativa";
 choices[33][1] = "El est&aacute;ndar de OSI es SNMP (Symple Network Management Protocol)";
 choices[33][2] = "CMIP y SNMP utilizan MIB";
 choices[33][3] = "Todas son verdaderas";
 answers[33] = 1;
 units[33] = ['114'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5212. ";
 preguntaids[33] = 5212


//  Id pregunta: 5061 Año de creación de pregunta: 2002
 questions[34]= "35)  Se&ntilde;ale la afirmaci&oacute;n falsa relativa a la t&eacute;cnica de multiplexaci&oacute;n en el &aacute;mbito de las comunicaciones:";
 choices[34]= new Array();
 choices[34][0] = "Mejora la calidad de la se&ntilde;al transmitida";
 choices[34][1] = "Sirve para establecer varias comunicaciones independientes en un solo enlace";
 choices[34][2] = "Se puede realizar utilizando divisi&oacute;n en frecuencia o divisi&oacute;n en el tiempo";
 choices[34][3] = "Permite aprovechar al m&aacute;ximo la capacidad del enlace";
 answers[34] = 0;
 units[34] = ['114'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5061. ";
 preguntaids[34] = 5061


//  Id pregunta: 5384 Año de creación de pregunta: 2006
 questions[35]= "36)  Un modem RDSI";
 choices[35]= new Array();
 choices[35][0] = "Es un dispositivo utilizado para conectar un Interfaz B&aacute;sico a otros interfaces";
 choices[35][1] = "Permite la transmisi&oacute;n de datos sobre uno o dos canales B";
 choices[35][2] = "Es un t&eacute;rmino incorrecto";
 choices[35][3] = "Tiene un SPID (n&uacute;mero de l&iacute;nea) propio";
 answers[35] = 2;
 units[35] = ['114'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5384. ";
 preguntaids[35] = 5384


//  Id pregunta: 6823 Año de creación de pregunta: 2010
 questions[36]= "37)  Sobre el modelo de gesti&oacute;n TMN (Telecommunication Management Network):";
 choices[36]= new Array();
 choices[36][0] = "Es un modelo de gesti&oacute;n de red orientado a grandes operadores de telecomunicaciones";
 choices[36][1] = "Sus principios est&aacute;n recogidos en la recomendaci&oacute;n M.3010 de la UIT-T";
 choices[36][2] = "Es especialmente apropiado para redes de conmutaci&oacute;n de circuitos";
 choices[36][3] = "Todas las respuestas anteriores son correctas";
 answers[36] = 3;
 units[36] = ['114'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 6823. ";
 preguntaids[36] = 6823


//  Id pregunta: 6824 Año de creación de pregunta: 2010
 questions[37]= "38)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[37]= new Array();
 choices[37][0] = "UIT-T";
 choices[37][1] = "IETF";
 choices[37][2] = "ISO/IEC";
 choices[37][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[37] = 1;
 units[37] = ['114'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6824. ";
 preguntaids[37] = 6824


//  Id pregunta: 8798 Año de creación de pregunta: 2013
 questions[38]= "39)  Respecto de RDSI, se puede afirmar:";
 choices[38]= new Array();
 choices[38][0] = "En la capa de enlace, el canal D hace uso del Procedimiento de Acceso al Enlace en el Canal D (o LAPD)";
 choices[38][1] = "En la capa de enlace, el canal B hace uso del Procedimiento de Acceso al Enlace en el Canal B (o LAPB)";
 choices[38][2] = "La transmisi&oacute;n d&uacute;plex en la capa f&iacute;sica se efect&uacute;a a 192 kbps mediante tramas de 40 bits cada una y una duraci&oacute;n de 275 us";
 choices[38][3] = "En la capa de red, se usa el protocolo LAPB, para gestionar las conexiones";
 answers[38] = 0;
 units[38] = ['114'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 8798. ";
 preguntaids[38] = 8798


//  Id pregunta: 5387 Año de creación de pregunta: 2006
 questions[39]= "40)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos que deben funcionar simult&aacute;neamente en todo momento";
 choices[39]= new Array();
 choices[39][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[39][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[39][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[39][3] = "No puede ser conocido a priori";
 answers[39] = 1;
 units[39] = ['114'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5387. ";
 preguntaids[39] = 5387


//  Id pregunta: 5041 Año de creación de pregunta: 2002
 questions[40]= "41)  Respecto a las interfaces en RDSI:";
 choices[40]= new Array();
 choices[40][0] = "La interfaz R es la definida para poder conectar los equipos no RDSI (X21, RS232&hellip;) a la especificaci&oacute;n RDSI";
 choices[40][1] = "La interfaz R es la utilizada por los equipos remotos";
 choices[40][2] = "La Interfaz R est&aacute; todav&iacute;a indefinida pues depende de las compa&ntilde;&iacute;as proveedoras de servicio";
 choices[40][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[40] = 0;
 units[40] = ['114'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5041. ";
 preguntaids[40] = 5041


//  Id pregunta: 6422 Año de creación de pregunta: 2003
 questions[41]= "42)  La red de conexi&oacute;n r&aacute;pida inaugurada por la Uni&oacute;n Europea en 2005 para atender la interconexi&oacute;n de investigadores europeos se denomina:";
 choices[41]= new Array();
 choices[41][0] = "TEIN2";
 choices[41][1] = "GEANT2";
 choices[41][2] = "ALICE";
 choices[41][3] = "DANTE";
 answers[41] = 1;
 units[41] = ['114'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6422. ";
 preguntaids[41] = 6422


//  Id pregunta: 8851 Año de creación de pregunta: 2013
 questions[42]= "43)  QSIG es:";
 choices[42]= new Array();
 choices[42][0] = "Un protocolo de se&ntilde;alizaci&oacute;n normalizado a nivel internacional para su uso entre Private Automatic Branch eXchanges (PABX).";
 choices[42][1] = "Un sistema de calidad aplicado a la telefon&iacute;a SIP.";
 choices[42][2] = "Una extensi&oacute;n a SS7 que puede enviarse sobre IP.";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 0;
 units[42] = ['114'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8851. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[42] = 8851


//  Id pregunta: 5191 Año de creación de pregunta: 2003
 questions[43]= "44)  Velocidades de RDSI de banda ancha en Europa";
 choices[43]= new Array();
 choices[43][0] = "1,5 2,6 155 622 Mbps";
 choices[43][1] = "2 51 155 722 Mbps";
 choices[43][2] = "2 34 155 622 Mbps";
 choices[43][3] = "2 34 155 722 Mbps";
 answers[43] = 2;
 units[43] = ['114'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5191. ";
 preguntaids[43] = 5191


//  Id pregunta: 5649 Año de creación de pregunta: 2007
 questions[44]= "45)  En un sistema de gesti&oacute;n de red, Ia base de datos MIB (Management Information Base):";
 choices[44]= new Array();
 choices[44][0] = "Identifica el elemento de administraci&oacute;n central de Ia red.";
 choices[44][1] = "Especifica los elementos y Ia parte de los datos que un nodo debe conservar, asi Como las operaciones que se permiten sobre cada uno de ellos";
 choices[44][2] = "Establece Ia conexi&oacute;n entre el nodo administrado y la estaci&oacute;n administradora central.";
 choices[44][3] = "Es una Unidad de Datos del Protocolo (6 PDU) de gesti&oacute;n de red.";
 answers[44] = 1;
 units[44] = ['114'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5649. ";
 preguntaids[44] = 5649


//  Id pregunta: 8235 Año de creación de pregunta: 2011
 questions[45]= "46)  Un acceso RDSI primario consta de";
 choices[45]= new Array();
 choices[45][0] = "Dos canales B y un canal D";
 choices[45][1] = "Dos canales B y ning&uacute;n canal D";
 choices[45][2] = "Treinta canales B y un canal D";
 choices[45][3] = "Treinta canales B y dos canales D";
 answers[45] = 2;
 units[45] = ['114'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8235. Examen UPM A2 2011";
 preguntaids[45] = 8235


//  Id pregunta: 5006 Año de creación de pregunta: 2002
 questions[46]= "47)  MIB son unas siglas asociadas a:";
 choices[46]= new Array();
 choices[46][0] = "SGBD orientadas a objetos";
 choices[46][1] = "Lenguaje de programaci&oacute;n C++";
 choices[46][2] = "Sistemas de gesti&oacute;n de redes";
 choices[46][3] = "Sistemas OLAP";
 answers[46] = 2;
 units[46] = ['114'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5006. ";
 preguntaids[46] = 5006


//  Id pregunta: 5211 Año de creación de pregunta: 2006
 questions[47]= "48)  En el protocolo SNMPv2, un mensaje PDU GetRequest:";
 choices[47]= new Array();
 choices[47][0] = "Permite respuestas parciales al solicitar el valor de varios objetos.";
 choices[47][1] = "No permite respuestas parciales al solicitar el valor de varios objetos";
 choices[47][2] = "Es emitida por el agente al gestor.";
 choices[47][3] = "Es id&eacute;ntico al mensaje PDU GetBulkRequest.";
 answers[47] = 0;
 units[47] = ['114'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5211. ";
 preguntaids[47] = 5211


//  Id pregunta: 5123 Año de creación de pregunta: 2003
 questions[48]= "49)  En un servicio primario RDSI se pueden constituir los siguientes canales:";
 choices[48]= new Array();
 choices[48][0] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[48][1] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 choices[48][2] = "32 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[48][3] = "32 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 answers[48] = 0;
 units[48] = ['114'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5123. Junta Andaluc&iacute;a";
 preguntaids[48] = 5123


//  Id pregunta: 8096 Año de creación de pregunta: 2011
 questions[49]= "50)  La RDSI (red digital de servicios integrados), ofrece una conexi&oacute;n digital extremo a extremo para el intercambio de informaci&oacute;n al integrar servicios de voz y de datos sobre la estructura de la red telef&oacute;nica p&uacute;blica. El acceso primario, en Europa, esta constituido por:";
 choices[49]= new Array();
 choices[49][0] = "2 canales B y 2 canales D";
 choices[49][1] = "30 canales B y 30 canales D";
 choices[49][2] = "30 canales B y un canal D";
 choices[49][3] = "30 canales B y dos canales D";
 answers[49] = 2;
 units[49] = ['114'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8096. Analista Ayto. Madrid 2010";
 preguntaids[49] = 8096


//  Id pregunta: 7685 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (Transmission Control Protocol/Internet Protocol)?";
 choices[50]= new Array();
 choices[50][0] = "PGR.";
 choices[50][1] = "SMTP.";
 choices[50][2] = "ICMP.";
 choices[50][3] = "SNMP.";
 answers[50] = 3;
 units[50] = ['114'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7685. Map 2007";
 preguntaids[50] = 7685


//  Id pregunta: 8084 Año de creación de pregunta: 2011
 questions[51]= "52)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[51]= new Array();
 choices[51][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[51][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[51][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[51][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[51] = 0;
 units[51] = ['114'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8084. Analista Ayto. Madrid 2010";
 preguntaids[51] = 8084


//  Id pregunta: 5514 Año de creación de pregunta: 2007
 questions[52]= "53)  La red G&Eacute;ANT:";
 choices[52]= new Array();
 choices[52][0] = "Es una red basada en IPv6 de &aacute;mbito mundial, que constituye el n&uacute;cleo de Internet.";
 choices[52][1] = "Es una red basada en IPv6, que sirve de desarrollo e investigaci&oacute;n para la nueva Internet 2.";
 choices[52][2] = "Es la siguiente evoluci&oacute;n l&oacute;gica de la Intranet Administrativa que une a diversos organismos de la Administraci&oacute;n General del Estado.";
 choices[52][3] = "Es una red paneuropea de investigaci&oacute;n, formada por la uni&oacute;n de las redes de investigaci&oacute;n, financiada por la Uni&oacute;n Europea";
 answers[52] = 3;
 units[52] = ['114'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5514. ";
 preguntaids[52] = 5514


//  Id pregunta: 7660 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la gesti&oacute;n de redes NO es cierta?";
 choices[53]= new Array();
 choices[53][0] = "La base de informaci&oacute;n de administraci&oacute;n (MIB) tiene una estructura de base de datos y reside en la estaci&oacute;n de monitorizaci&oacute;n.";
 choices[53][1] = "Uno de los modos de monitorizaci&oacute;n de SNMP es el de sondeo, que consiste en la interrupci&oacute;n por parte del agente SNMP a trav&eacute;s del puerto 162 de UDP.";
 choices[53][2] = "SNMPv3 introduce capacidades de seguridad frente a las versiones anteriores, tales como control de acceso, autenticaci&oacute;n y privacidad.";
 choices[53][3] = "RMONv2 permite la monitorizaci&oacute;n de segmentos de redes de &aacute;rea local y el chequeo de trafico a nivel de red y aplicaci&oacute;n.";
 answers[53] = 0;
 units[53] = ['114'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7660. Similar a Map 2006";
 preguntaids[53] = 7660


//  Id pregunta: 6225 Año de creación de pregunta: 2003
 questions[54]= "55)  &iquest;Cu&aacute;l es la capacidad de un enlace E1?";
 choices[54]= new Array();
 choices[54][0] = "2048 Kbps.";
 choices[54][1] = "1544 Kbps";
 choices[54][2] = "8448 Kbps.";
 choices[54][3] = "155 Mbps.";
 answers[54] = 0;
 units[54] = ['114'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 6225. Examen TIC A Castilla La Mancha 2007";
 preguntaids[54] = 6225


//  Id pregunta: 7971 Año de creación de pregunta: 2011
 questions[55]= "56)  En la radio digital (DAB):";
 choices[55]= new Array();
 choices[55][0] = "Los servicios pueden estructurarse y configurarse de forma din&aacute;mica";
 choices[55][1] = "El servicio ha sido dise&ntilde;ado para trabajar en frecuencias de 30 GHz a 3000 GHz";
 choices[55][2] = "La cobertura solo puede ser local";
 choices[55][3] = "Ninguna de las anteriores es correcta";
 answers[55] = 0;
 units[55] = ['114'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7971. Analista Ayto. Madrid 2010";
 preguntaids[55] = 7971


//  Id pregunta: 6825 Año de creación de pregunta: 2010
 questions[56]= "57)  &iquest;Qu&eacute; es CMOT?";
 choices[56]= new Array();
 choices[56][0] = "Significa Common Management Interface Protocol Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[56][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT";
 choices[56][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica";
 choices[56][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[56] = 0;
 units[56] = ['114'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 6825. ";
 preguntaids[56] = 6825


//  Id pregunta: 7912 Año de creación de pregunta: 2011
 questions[57]= "58)  La red SARA permite la comunicaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "S&oacute;lo entre organismos y ministerios de la Administraci&oacute;n General del Estado (AGE).";
 choices[57][1] = "S&oacute;lo entre la AGE y la Uni&oacute;n Europea.";
 choices[57][2] = "Entre la AGE, CC.AA. y entidades locales, as&iacute; como su conexi&oacute;n con instituciones europeas a trav&eacute;s de la red transeuropea eu-SARA.";
 choices[57][3] = "Entre la AGE, CC.AA. y entidades locales, as&iacute; como su conexi&oacute;n con instituciones europeas a trav&eacute;s de la red transeuropea sTESTA.";
 answers[57] = 3;
 units[57] = ['114'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7912. Examen TIC A1 2010";
 preguntaids[57] = 7912


//  Id pregunta: 8802 Año de creación de pregunta: 2013
 questions[58]= "59)  Indica cu&aacute;l de estas afirmaciones es cierta:";
 choices[58]= new Array();
 choices[58][0] = "En RDSI, igual que en RTB, el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[58][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[58][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[58][3] = "Todas las respuestas son correctas.";
 answers[58] = 1;
 units[58] = ['114'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 8802. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[58] = 8802


//  Id pregunta: 5878 Año de creación de pregunta: 2007
 questions[59]= "60)  En el marco de las redes telem&aacute;ticas transeruopeas, la red s-TESTA";
 choices[59]= new Array();
 choices[59][0] = "Es la red Transversal Espa&ntilde;ola de Servicios Telem&aacute;ticos entre Administraciones, encargada de interconectar las distintas administraciones auton&oacute;micas";
 choices[59][1] = "Es una red IP aislada de Internet que interconecta las redes administrativas de los Estados miembros y de las Agencias e Instituciones europeas";
 choices[59][2] = "Es una red basada en tecnolog&iacute;a inal&aacute;mbrica, que pretende dar cobertura para el aacceso libre a Internet a todos los ciudadanos de la Uni&oacute;n Europea";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = 1;
 units[59] = ['114'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5878. ";
 preguntaids[59] = 5878


//  Id pregunta: 5065 Año de creación de pregunta: 2002
 questions[60]= "61)  Se&ntilde;ale la respuesta falsa respecto a los protocolos de gesti&oacute;n de red:";
 choices[60]= new Array();
 choices[60][0] = "El modelo de gesti&oacute;n OSI utiliza una base de informaci&oacute;n de gesti&oacute;n o MIB para almacenar la informaci&oacute;n estructurada que representa a los elementos de la red y sus atributos";
 choices[60][1] = "La estructura de informaci&oacute;n se denomina SMI (Estructura de informaci&oacute;n de Gestion) para estas estructuras el modelo OSI define un Sistema muy complejo de gesti&oacute;n orientado a objetos";
 choices[60][2] = "Con la especificaci&oacute;n SNMP versi&oacute;n 1 (Protocolo sencillo de gesti&oacute;n de red) no se puede comprobar el origen de un mensaje ni su autenficaci&oacute;n, lo que le hace vulnerable a ataques para modificar la configuraci&oacute;n de red";
 choices[60][3] = "SNMPv2 y SNMP son variantes de SMTP";
 answers[60] = 3;
 units[60] = ['114'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5065. ";
 preguntaids[60] = 5065


//  Id pregunta: 5124 Año de creación de pregunta: 2003
 questions[61]= "62)  En un sistema de cableado estructurado IEEE 802.3 en UTP, la distancia m&aacute;xima horizontal ser&aacute; de 90 metros desde la terminaci&oacute;n mec&aacute;nica del armario repartidor de planta hasta la roseta, permiti&eacute;ndose desde &eacute;sta, hasta la estaci&oacute;n de trabajo o tel&eacute;fono";
 choices[61]= new Array();
 choices[61][0] = "1,5 metros m&aacute;s.";
 choices[61][1] = "3 metros m&aacute;s.";
 choices[61][2] = "4,5 metros m&aacute;s.";
 choices[61][3] = "Una distancia tal que la longitud total de este &uacute;ltimo latiguillo y la del armario repartidor, no supere los 10 metros.";
 answers[61] = 3;
 units[61] = ['114'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5124. Junta Andaluc&iacute;a";
 preguntaids[61] = 5124


//  Id pregunta: 8413 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[62]= new Array();
 choices[62][0] = "ROUTE";
 choices[62][1] = "NETSTAT";
 choices[62][2] = "NBTSTAT";
 choices[62][3] = "TRACERT";
 answers[62] = 1;
 units[62] = ['114'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 8413. Operador Ayto. Madrid 2010";
 preguntaids[62] = 8413


//  Id pregunta: 5378 Año de creación de pregunta: 2006
 questions[63]= "64)  No es cierto que la herramienta Nagios";
 choices[63]= new Array();
 choices[63][0] = "Puede monitorizar servicios TCP";
 choices[63][1] = "Es una alternativa a Bigbrother";
 choices[63][2] = "Puede utilizar agentes distintos a SNMP";
 choices[63][3] = "Puede ser instalada en Windows";
 answers[63] = 3;
 units[63] = ['114'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5378. ";
 preguntaids[63] = 5378


//  Id pregunta: 8249 Año de creación de pregunta: 2011
 questions[64]= "65)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[64]= new Array();
 choices[64][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[64][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[64][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[64][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[64] = 3;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8249. Examen UPM A2 2011";
 preguntaids[64] = 8249


//  Id pregunta: 8156 Año de creación de pregunta: 2011
 questions[65]= "66)  1 &iquest;En qu&eacute; RFC se describe el modelo de seguridad basado en usuario (USM o User-basad Security Model) para la versi&oacute;n 3 de SNMP?";
 choices[65]= new Array();
 choices[65][0] = "RFC 1157.";
 choices[65][1] = "RFC 1441";
 choices[65][2] = "RFC 3414";
 choices[65][3] = "RFC 3854";
 answers[65] = 2;
 units[65] = ['114'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8156. Examen TIC A2 2010 interna";
 preguntaids[65] = 8156


//  Id pregunta: 5377 Año de creación de pregunta: 2006
 questions[66]= "67)  La herramienta MRTG";
 choices[66]= new Array();
 choices[66][0] = "Puede generar gr&aacute;ficas de cantidad de tr&aacute;fico";
 choices[66][1] = "Utiliza SNMP";
 choices[66][2] = "Es una herramienta gratuita";
 choices[66][3] = "todas las anteriores";
 answers[66] = 3;
 units[66] = ['114'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5377. ";
 preguntaids[66] = 5377


//  Id pregunta: 5513 Año de creación de pregunta: 2007
 questions[67]= "68)  La red de investigaci&oacute;n espa&ntilde;ola encargada de dar servicio Internet a universidades y centros de investigaci&oacute;n es:";
 choices[67]= new Array();
 choices[67][0] = "La intranet del CSIC";
 choices[67][1] = "No existe una red propia de investigaci&oacute;n, utilizando los servicios que ofrece Internet.";
 choices[67][2] = "RedIRIS.";
 choices[67][3] = "La Intranet Administrativa.";
 answers[67] = 2;
 units[67] = ['114'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5513. ";
 preguntaids[67] = 5513


//  Id pregunta: 5097 Año de creación de pregunta: 2004
 questions[68]= "69)  Qu&eacute; servicio no ofrece DNS security";
 choices[68]= new Array();
 choices[68][0] = "Prueba del origen de datos";
 choices[68][1] = "Distribuci&oacute;n de clave p&uacute;blica";
 choices[68][2] = "Secreto del mensaje";
 choices[68][3] = "Autenticaci&oacute;n";
 answers[68] = 2;
 units[68] = ['114'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5097. ";
 preguntaids[68] = 5097


//  Id pregunta: 8110 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Cu&aacute;l es el well-known port del protocolo SNMP en el modo petici&oacute;n-respuesta?";
 choices[69]= new Array();
 choices[69][0] = "169";
 choices[69][1] = "161";
 choices[69][2] = "171";
 choices[69][3] = "179";
 answers[69] = 1;
 units[69] = ['114'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 8110. Examen TIC A2 2010 interna";
 preguntaids[69] = 8110


//  Id pregunta: 9091 Año de creación de pregunta: 2014
 questions[70]= "71)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[70]= new Array();
 choices[70][0] = "A, B, C, D.";
 choices[70][1] = "E, F, G, H.";
 choices[70][2] = "S, T, U, V.";
 choices[70][3] = "W, X, Y, Z.";
 answers[70] = 2;
 units[70] = ['114'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9091. Examen TIC-A1 2013";
 preguntaids[70] = 9091


//  Id pregunta: 6499 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest;En qu&eacute; Real Decreto se establece la elaboraci&oacute;n de un Plan Director de Telecomunicaciones como herramienta de planificaci&oacute;n en el &aacute;mbito de cada departamento ministerial?";
 choices[71]= new Array();
 choices[71][0] = "En el RD 551/2001";
 choices[71][1] = "En el 541/2002";
 choices[71][2] = "En el 451/2002";
 choices[71][3] = "En el 541/2001";
 answers[71] = 3;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 6499. Art&iacute;culo 13";
 preguntaids[71] = 6499


//  Id pregunta: 6227 Año de creación de pregunta: 2003
 questions[72]= "73)  &iquest;Cu&aacute;ntos canales telef&oacute;nicos de voz (tipo B) soporta el Acceso RDSI Primario?";
 choices[72]= new Array();
 choices[72][0] = "2";
 choices[72][1] = "30";
 choices[72][2] = "24";
 choices[72][3] = "120";
 answers[72] = 1;
 units[72] = ['114'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 6227. Examen TIC A Castilla La Mancha 2007";
 preguntaids[72] = 6227


//  Id pregunta: 6500 Año de creación de pregunta: 2003
 questions[73]= "74)  Las areas funcionales definidas por ISO que todo sistema de gesti&oacute;n de red debe cubrir son:";
 choices[73]= new Array();
 choices[73][0] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Contabilidad, Gesti&oacute;n de Seguridad";
 choices[73][1] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[73][2] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Mantenimiento, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = 0;
 units[73] = ['114'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 6500. ";
 preguntaids[73] = 6500


//  Id pregunta: 8800 Año de creación de pregunta: 2013
 questions[74]= "75)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[74]= new Array();
 choices[74][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[74][1] = "S&oacute;lo se emplea en RDSI";
 choices[74][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[74][3] = "Ninguna de las respuestas es correcta.";
 answers[74] = 0;
 units[74] = ['114'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 8800. Pruebas selectivas para Gesti&oacute;n de Sistemas e Inform&aacute;tica de la UPM 2011. Libre";
 preguntaids[74] = 8800


