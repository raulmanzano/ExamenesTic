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
//  Id pregunta: 1394 Año de creación de pregunta: 2016
 questions[0]= "1)  De entre los siguientes, &iquest;Qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[0]= new Array();
 choices[0][0] = "RSVP";
 choices[0][1] = "ARP";
 choices[0][2] = "802.1ar";
 choices[0][3] = "H.264";
 answers[0] = 0;
 units[0] = ['114'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1394. ";
 preguntaids[0] = 1394


//  Id pregunta: 1522 Año de creación de pregunta: 2016
 questions[1]= "2)  Indicar la respuesta correcta, en relaci&oacute;n con el cable para transmisi&oacute;n de datos conocido como S/FTP:";
 choices[1]= new Array();
 choices[1][0] = "No es un cable de par trenzado.";
 choices[1][1] = "Tanto cada par individual como el cable van apantallados.";
 choices[1][2] = "S&oacute;lo va apantallado el cable, no cada par.";
 choices[1][3] = "S&oacute;lo se apantalla cada par, no el cable.";
 answers[1] = 1;
 units[1] = ['104'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1522. ";
 preguntaids[1] = 1522


//  Id pregunta: 1542 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; indica el campo &quot;Data Offset&quot; en el segmento TCP?";
 choices[2]= new Array();
 choices[2][0] = "Este campo no pertenece a TCP.";
 choices[2][1] = "Indica d&oacute;nde terminan los datos.";
 choices[2][2] = "Indica d&oacute;nde empiezan los datos.";
 choices[2][3] = "Indica el n&uacute;mero de campos de control.";
 answers[2] = 2;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1542. ";
 preguntaids[2] = 1542


//  Id pregunta: 1624 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con la transmisi&oacute;n por fibra &oacute;ptica:";
 choices[3]= new Array();
 choices[3][0] = "La velocidad de propagaci&oacute;n de la luz a trav&eacute;s de una fibra &oacute;ptica monomodo es de 300.000 Kms/seg.";
 choices[3][1] = "La fibra &oacute;ptica monomodo tiene una atenuaci&oacute;n menor que el cable coaxial.";
 choices[3][2] = "A la fibra &oacute;ptica monomodo tambi&eacute;n se la conoce como de &iacute;ndice gradual.";
 choices[3][3] = "La fibra &oacute;ptica multimodo es la que presenta menores p&eacute;rdidas de la se&ntilde;al.";
 answers[3] = 1;
 units[3] = ['104'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 1624. ";
 preguntaids[3] = 1624


//  Id pregunta: 1512 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; comando me permite visualizar las tablas de enrutamiento de mi equipo?";
 choices[4]= new Array();
 choices[4][0] = "netstat -ar";
 choices[4][1] = "traceroute";
 choices[4][2] = "arp -p";
 choices[4][3] = "/etc/services &ndash;p";
 answers[4] = 0;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 1512. ";
 preguntaids[4] = 1512


//  Id pregunta: 1653 Año de creación de pregunta: 2016
 questions[5]= "6)  El est&aacute;ndar utilizado en Espa&ntilde;a para la transmisi&oacute;n de TDT (Televisi&oacute;n Digital Terrestre) es:";
 choices[5]= new Array();
 choices[5][0] = "DVB-T";
 choices[5][1] = "DVB-S";
 choices[5][2] = "COFDM";
 choices[5][3] = "HDTV";
 answers[5] = 0;
 units[5] = ['115'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1653. ";
 preguntaids[5] = 1653


//  Id pregunta: 1652 Año de creación de pregunta: 2016
 questions[6]= "7)  La tecnolog&iacute;a de telefon&iacute;a m&oacute;vil basada en &quot;femtocell&quot; o microantenas pretende dar soluci&oacute;n a todos los problemas siguientes, excepto:";
 choices[6]= new Array();
 choices[6][0] = "Mejorar la cobertura en grandes edificios.";
 choices[6][1] = "Enrutar el tr&aacute;fico a trav&eacute;s de las redes convencionales de banda ancha, en vez de sobre las celdas de los operadores de telefon&iacute;a m&oacute;vil.";
 choices[6][2] = "Poder transmitir bajo demanda video en alta definici&oacute;n en formato HDMI.";
 choices[6][3] = "Reducir el consumo de bater&iacute;a de los terminales m&oacute;viles, alargando as&iacute; su vida &uacute;til.";
 answers[6] = 2;
 units[6] = ['117'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 1652. ";
 preguntaids[6] = 1652


//  Id pregunta: 1625 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;ntos elementos conductores diferenciados tiene un cable coaxial?";
 choices[7]= new Array();
 choices[7][0] = "4";
 choices[7][1] = "3";
 choices[7][2] = "2";
 choices[7][3] = "1";
 answers[7] = 2;
 units[7] = ['104'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 1625. ";
 preguntaids[7] = 1625


//  Id pregunta: 1637 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes clases de servicio proporcionadas por el protocolo ATM (Asynchronous Transfer Mode) deber&iacute;amos utilizar para la transmisi&oacute;n de video MPEG?";
 choices[8]= new Array();
 choices[8][0] = "ABR";
 choices[8][1] = "VBR-RT";
 choices[8][2] = "VBR-NRT";
 choices[8][3] = "UBR";
 answers[8] = 1;
 units[8] = ['107'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1637. ";
 preguntaids[8] = 1637


//  Id pregunta: 1392 Año de creación de pregunta: 2016
 questions[9]= "10)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la maxima seguridad posible, &iquest;En qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[9]= new Array();
 choices[9][0] = "Red A.";
 choices[9][1] = "Red B.";
 choices[9][2] = "Red C.";
 choices[9][3] = "Indistintamente en la red B o en la red C.";
 answers[9] = 2;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1392. ";
 preguntaids[9] = 1392


//  Id pregunta: 1405 Año de creación de pregunta: 2016
 questions[10]= "11)  EI protocolo FTP sobre TLS/SSL (FTPS-data) usa el puerto:";
 choices[10]= new Array();
 choices[10][0] = "989";
 choices[10][1] = "567";
 choices[10][2] = "742";
 choices[10][3] = "334";
 answers[10] = 0;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1405. ";
 preguntaids[10] = 1405


//  Id pregunta: 1646 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es la velocidad m&aacute;xima de bajada con el est&aacute;ndar G.992.5, conocido como ADSL2+?";
 choices[11]= new Array();
 choices[11][0] = "10 Mbps";
 choices[11][1] = "12 Mbps";
 choices[11][2] = "2 Mbps";
 choices[11][3] = "24 Mbps";
 answers[11] = 3;
 units[11] = ['106'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 1646. ";
 preguntaids[11] = 1646


//  Id pregunta: 1513 Año de creación de pregunta: 2016
 questions[12]= "13)  Si accedemos a un sitio https y recibimos un aviso de que la autoridad de certificaci&oacute;n que ha emitido el certificado de servidor no es reconocida por nosotros, y aun as&iacute; aceptamos establecer comunicaci&oacute;n con ese servidor, &iquest;la comunicaci&oacute;n entre cliente y servidor ser&aacute; cifrada?";
 choices[12]= new Array();
 choices[12][0] = "No, puesto que el certificado no es v&aacute;lido.";
 choices[12][1] = "S&iacute;, puesto que el certificado permite cifrar esa comunicaci&oacute;n, aunque haya sido emitido por una autoridad en la que no confiamos.";
 choices[12][2] = "No, puesto que aunque hayamos aceptado ese certificado no podemos utilizarlo para hacer el cifrado de informaci&oacute;n.";
 choices[12][3] = "S&iacute;, porque al aceptar el cifrado se va a realizar con un certificado de cliente.";
 answers[12] = 1;
 units[12] = ['120'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1513. ";
 preguntaids[12] = 1513


//  Id pregunta: 1517 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; es FEC (Forwarding Equivalence Class) en MPLS?";
 choices[13]= new Array();
 choices[13][0] = "Flujos de tr&aacute;fico que comparten la misma ruta y el mismo tratamiento en cada LSR.";
 choices[13][1] = "Es el trayecto a trav&eacute;s del cual fluye el tr&aacute;fico entre dos extremos LER.";
 choices[13][2] = "Protocolo que conmuta etiquetas.";
 choices[13][3] = "Protocolo responsable de que el LSP sea establecido para que sea funcional mediante el intercambio de etiquetas entre los nodos de la red.";
 answers[13] = 0;
 units[13] = ['107'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1517. ";
 preguntaids[13] = 1517


//  Id pregunta: 1398 Año de creación de pregunta: 2016
 questions[14]= "15)  MPLS (Multi protocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[14]= new Array();
 choices[14][0] = "FEC (Forwarding Equivalent Class).";
 choices[14][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[14][2] = "CIR (Commited Information Rate).";
 choices[14][3] = "MBS (Maximum Burst Size).";
 answers[14] = 0;
 units[14] = ['107'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1398. ";
 preguntaids[14] = 1398


//  Id pregunta: 1411 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; banda de frecuencia se destina con car&aacute;cter preferente al sistema digital europeo de telecomunicaciones sin cord&oacute;n (DECT), seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[15]= new Array();
 choices[15][0] = "1850-1900 MHz";
 choices[15][1] = "1860-1900 MHz";
 choices[15][2] = "1870-1900 MHz";
 choices[15][3] = "1880-1900 MHz";
 answers[15] = 3;
 units[15] = ['117'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 1411. ";
 preguntaids[15] = 1411


//  Id pregunta: 1576 Año de creación de pregunta: 2016
 questions[16]= "17)  Se presentan a continuaci&oacute;n tres niveles de la torre de protocolos TCP/IP y tres protocolos: 1) Nivel 1 (F&iacute;sico) 2) Nivel 2 (Enlace de datos) 3) Nivel 5 (Aplicaci&oacute;n) I) GPRS (General Packet Radio Service). II) PLC (Power Line Communications). III) TLS/SSL (Transport Layer Security/Secure Sockets Layer) Se&ntilde;ale cu&aacute;l es el emparejamiento correcto de nivel/protocolo:";
 choices[16]= new Array();
 choices[16][0] = "1/I, 2/II, 3/III.";
 choices[16][1] = "1/II, 2/I, 3/III.";
 choices[16][2] = "1/III, 2/I, 3/II.";
 choices[16][3] = "1/II, 2/III, 3/I.";
 answers[16] = 1;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1576. ";
 preguntaids[16] = 1576


//  Id pregunta: 1634 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de los siguientes NO es un paquete que se curse en el nivel 3 del protocolo X.25 en la fase de establecimiento de la conexi&oacute;n";
 choices[17]= new Array();
 choices[17][0] = "CALL REQUEST";
 choices[17][1] = "INCOMING CALL";
 choices[17][2] = "CLEAR INDICATION";
 choices[17][3] = "CALL CONECTED";
 answers[17] = 2;
 units[17] = ['114'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1634. ";
 preguntaids[17] = 1634


//  Id pregunta: 1650 Año de creación de pregunta: 2016
 questions[18]= "19)  Entre las ventajas del protocolo de control MGCP (Media Gateway Control Protocol) NO se encuentra:";
 choices[18]= new Array();
 choices[18][0] = "Escalabilidad";
 choices[18][1] = "Dependencia del fabricante";
 choices[18][2] = "Fiabilidad";
 choices[18][3] = "Tiempo de desarrollo reducido";
 answers[18] = 1;
 units[18] = ['110'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1650. ";
 preguntaids[18] = 1650


//  Id pregunta: 1541 Año de creación de pregunta: 2016
 questions[19]= "20)  La direcci&oacute;n IP 0.0.0.0:";
 choices[19]= new Array();
 choices[19][0] = "Se usa para difusi&oacute;n en una subred local.";
 choices[19][1] = "Se usa para difundir un mensaje a todos los nodos de una red distante.";
 choices[19][2] = "La usa inicialmente un host cuando arranca.";
 choices[19][3] = "Se usa para pruebas de realimentaci&oacute;n.";
 answers[19] = 2;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1541. ";
 preguntaids[19] = 1541


//  Id pregunta: 1531 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el Reglamento T&eacute;cnico y de Prestaci&oacute;n del Servicio de Telecomunicaciones por Cable (RD 2066/96), &iquest;qu&eacute; se entiende por servicio de v&iacute;deo bajo demanda?";
 choices[20]= new Array();
 choices[20][0] = "Consiste en la difusi&oacute;n mediante redes de cable de im&aacute;genes no permanentes con su sonido asociado, transmitidas en un solo sentido, codificadas o no, que constituyen una programaci&oacute;n prefijada dirigida de forma simult&aacute;nea a una multiplicidad de usuarios sin posibilidad de interactuar sobre el servicio.";
 choices[20][1] = "Consiste en la distribuci&oacute;n de un programa audiovisual en el que el usuario final interact&uacute;a con la red para seleccionar el programa deseado y el momento del suministro.";
 choices[20][2] = "Consiste en la difusi&oacute;n de programas audiovisuales en el que el usuario final interact&uacute;a con la red para acceder al programa deseado, que le es suministrado en un momento prefijado por la red.";
 choices[20][3] = "Servicio de valor a&ntilde;adido de telecomunicaciones por cable consistente en la distribuci&oacute;n o intercambio de informaci&oacute;n bajo la forma de im&aacute;genes, sonidos, textos, gr&aacute;ficos o combinaci&oacute;n de ellos que requieren de un canal de retorno para su prestaci&oacute;n.";
 answers[20] = 1;
 units[20] = ['115'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1531. ";
 preguntaids[20] = 1531


//  Id pregunta: 1626 Año de creación de pregunta: 2016
 questions[21]= "22)  En la herramienta de monitorizaci&oacute;n remota -RMON-, se&ntilde;ale qu&eacute; elemento genera la informaci&oacute;n estad&iacute;stica de los nodos:";
 choices[21]= new Array();
 choices[21][0] = "El cliente";
 choices[21][1] = "El servidor";
 choices[21][2] = "Los dos anteriores";
 choices[21][3] = "Ninguno de los anteriores";
 answers[21] = 1;
 units[21] = ['114'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1626. ";
 preguntaids[21] = 1626


//  Id pregunta: 1521 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; ventaja presenta una fibra &oacute;ptica monomodo respecto de una multimodo?";
 choices[22]= new Array();
 choices[22][0] = "En la multimodo, la se&ntilde;al se reparte entre varios modos, cada uno con un coeficiente de scattering diferente. Al recibirla, la se&ntilde;al se suma y la distorsi&oacute;n toma el valor medio, de baja variaci&oacute;n. La monomodo tiene un &uacute;nico coeficiente y por ello m&aacute;s distorsi&oacute;n.";
 choices[22][1] = "En la multimodo, la se&ntilde;al se reparte entre varios modos, cada uno con una velocidad de propagaci&oacute;n de la se&ntilde;al, quedando distorsionada al recibirla. La monomodo no presenta este tipo de distorsi&oacute;n, por lo que alcanza distancias m&aacute;s largas sin distorsi&oacute;n.";
 choices[22][2] = "En la multimodo, la potencia se reparte entre varios modos. Cada modo tiene menos atenuaci&oacute;n que el anterior, por lo que al recibirla, la se&ntilde;al ha sufrido menos atenuaci&oacute;n que si se hubiera enviado &uacute;nicamente en el primer modo, monomodo, el de mayor atenuaci&oacute;n.";
 choices[22][3] = "En la multimodo, la potencia se reparte entre varios modos. Cada modo tiene m&aacute;s atenuaci&oacute;n que el anterior, por lo que al recibirla, la se&ntilde;al ha sufrido m&aacute;s atenuaci&oacute;n que si se hubiera enviado &uacute;nicamente en el primer modo, monomodo, el de menor atenuaci&oacute;n.";
 answers[22] = 1;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1521. ";
 preguntaids[22] = 1521


//  Id pregunta: 1406 Año de creación de pregunta: 2016
 questions[23]= "24)  Los Puntos Neutros (Internet Exchange Points) en Internet:";
 choices[23]= new Array();
 choices[23][0] = "Permiten conectarse a Internet sin coste.";
 choices[23][1] = "Eliminan los paquetes con un TLL mayor del fijado en el segmento de red (t&iacute;picamente 30).";
 choices[23][2] = "Son pasarelas para compatibilizar el tr&aacute;fico IPv4 y el IPv6.";
 choices[23][3] = "Permiten interconectar las redes de diferentes ISP, reduciendo y encaminando de forma eficiente el tr&aacute;fico que circula entre ellas.";
 answers[23] = 3;
 units[23] = ['103'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1406. ";
 preguntaids[23] = 1406


//  Id pregunta: 1631 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Es posible que en una misma sesi&oacute;n/aplicaci&oacute;n sobre Internet se utilicen simult&aacute;neamente los protocolos de seguridad IPSec y SSL?";
 choices[24]= new Array();
 choices[24][0] = "No, se debe elegir en la implementaci&oacute;n de la aplicaci&oacute;n una de las dos, pues trabajan en el mismo nivel.";
 choices[24][1] = "No, se debe elegir en la implementaci&oacute;n de la aplicaci&oacute;n una de las dos, pues son incompatibles a nivel de socket.";
 choices[24][2] = "S&iacute;, no debe presentar especiales problemas.";
 choices[24][3] = "S&iacute;, pero necesita una adaptaci&oacute;n especial para que no se produzca una transposici&oacute;n de claves.";
 answers[24] = 2;
 units[24] = ['120'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1631. ";
 preguntaids[24] = 1631


//  Id pregunta: 1468 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En el segmento TCP cu&aacute;ntos bits ocupa el campo &quot;reserved&quot;?";
 choices[25]= new Array();
 choices[25][0] = "6";
 choices[25][1] = "8";
 choices[25][2] = "4";
 choices[25][3] = "12";
 answers[25] = 2;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 1468. ";
 preguntaids[25] = 1468


//  Id pregunta: 1635 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique cu&aacute;l de los siguientes NO es un protocolo de encaminamiento IGP (Interior Gateway Protocol)";
 choices[26]= new Array();
 choices[26][0] = "RIP";
 choices[26][1] = "BGP";
 choices[26][2] = "OSPF";
 choices[26][3] = "IGRP";
 answers[26] = 1;
 units[26] = ['102'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1635. ";
 preguntaids[26] = 1635


//  Id pregunta: 1566 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes es una conocida aplicaci&oacute;n de servidor de DNS?";
 choices[27]= new Array();
 choices[27][0] = "BISS";
 choices[27][1] = "DNSOPI";
 choices[27][2] = "DHCP";
 choices[27][3] = "BIND";
 answers[27] = 3;
 units[27] = ['103'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1566. ";
 preguntaids[27] = 1566


//  Id pregunta: 1412 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[28]= new Array();
 choices[28][0] = "ATSC";
 choices[28][1] = "ISDB-T";
 choices[28][2] = "DVB-T";
 choices[28][3] = "EDTVB";
 answers[28] = 2;
 units[28] = ['115'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1412. ";
 preguntaids[28] = 1412


//  Id pregunta: 1408 Año de creación de pregunta: 2016
 questions[29]= "30)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[29]= new Array();
 choices[29][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[29][1] = "EI tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[29][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[29][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un periodo de tiempo dado.";
 answers[29] = 2;
 units[29] = ['110'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1408. ";
 preguntaids[29] = 1408


//  Id pregunta: 1466 Año de creación de pregunta: 2016
 questions[30]= "31)  El protocolo de Internet versi&oacute;n 6 fue definido en el:";
 choices[30]= new Array();
 choices[30][0] = "RFC 2460";
 choices[30][1] = "RFC 2430";
 choices[30][2] = "RFC 730";
 choices[30][3] = "RFC 720";
 answers[30] = 0;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1466. ";
 preguntaids[30] = 1466


//  Id pregunta: 1623 Año de creación de pregunta: 2016
 questions[31]= "32)  En las redes Ethernet las especificaciones del medio son variadas. Para la especificaci&oacute;n 1000Base-T, indique qu&eacute; cable se utiliza:";
 choices[31]= new Array();
 choices[31][0] = "FTP";
 choices[31][1] = "Coaxial fino";
 choices[31][2] = "UTP-5";
 choices[31][3] = "UTP-3";
 answers[31] = 2;
 units[31] = ['104'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1623. ";
 preguntaids[31] = 1623


//  Id pregunta: 1456 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento se transmite directamente sobre el protocolo IP sin usar otro mecanismo de transporte?:";
 choices[32]= new Array();
 choices[32][0] = "EIGRP";
 choices[32][1] = "OSPF";
 choices[32][2] = "RIP";
 choices[32][3] = "BGP";
 answers[32] = 1;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1456. ";
 preguntaids[32] = 1456


//  Id pregunta: 1397 Año de creación de pregunta: 2016
 questions[33]= "34)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[33]= new Array();
 choices[33][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[33][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en el mismo pa&iacute;s.";
 choices[33][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[33][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[33] = 0;
 units[33] = ['114'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1397. ";
 preguntaids[33] = 1397


//  Id pregunta: 1528 Año de creación de pregunta: 2016
 questions[34]= "35)  El est&aacute;ndar DVB-T usado para la transmisi&oacute;n de televisi&oacute;n digital terrestre usa la t&eacute;cnica de modulaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "COFDM";
 choices[34][1] = "QAM";
 choices[34][2] = "QFSK";
 choices[34][3] = "VSB";
 answers[34] = 0;
 units[34] = ['115'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1528. ";
 preguntaids[34] = 1528


//  Id pregunta: 1410 Año de creación de pregunta: 2016
 questions[35]= "36)  La arquitectura de la red UMTS est&aacute; formada por varios elementos, cada uno con unas funciones especificas. Elija la afirmaci&oacute;n correcta entre las siguientes relativas a la arquitectura UMTS:";
 choices[35]= new Array();
 choices[35][0] = "EI RNS (Radio Network Subsystem) est&aacute; formado por los RNC (Radio Network Controller), el MSC (Mobile Switching Center) y los Nodos B.";
 choices[35][1] = "EI Nodo B es el responsable de la transmision radio desde los RNC (Radio Network Controller) hacia los MSs (Mobile Station) en una o m&aacute;s celdas UMTS.";
 choices[35][2] = "EI VLR (Visitor Location Register) mantiene una base de datos con los datos de los abonados m&oacute;viles, para poder realizar la autenticaci&oacute;n del abonado y cifrar las comunicaciones.";
 choices[35][3] = "EI UELC (User Equipment Location Controller) es el encargado de llevar a cabo las funciones de itinerancia (roaming) de las MSs (Mobile Station) en un &aacute;rea MSC (Mobile Switching Center).";
 answers[35] = 1;
 units[35] = ['117'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1410. ";
 preguntaids[35] = 1410


//  Id pregunta: 1654 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; tipo de modulaci&oacute;n se utiliza en el est&aacute;ndar TDT (Televisi&oacute;n Digital Terrestre) utilizado en Espa&ntilde;a?";
 choices[36]= new Array();
 choices[36][0] = "QPSK";
 choices[36][1] = "QAM";
 choices[36][2] = "COFDM";
 choices[36][3] = "G.711";
 answers[36] = 2;
 units[36] = ['115'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1654. ";
 preguntaids[36] = 1654


//  Id pregunta: 1404 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes organismos se encarga de generar y mantener las RFC en internet?";
 choices[37]= new Array();
 choices[37][0] = "IETF (Internet Engineering Task Force).";
 choices[37][1] = "IAB (Internet Architecture Board).";
 choices[37][2] = "IANA (Internet Assigned Numbers Authority).";
 choices[37][3] = "ISOC (Internet Society).";
 answers[37] = 0;
 units[37] = ['103'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 1404. ";
 preguntaids[37] = 1404


//  Id pregunta: 1642 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la respuesta FALSA:";
 choices[38]= new Array();
 choices[38][0] = "HTTPS es la versi&oacute;n segura del protocolo HTTP.";
 choices[38][1] = "Utiliza cifrado basado en SSL.";
 choices[38][2] = "El puerto est&aacute;ndar es el 443.";
 choices[38][3] = "Basta con que la direcci&oacute;n web empiece por https para que sea una p&aacute;gina segura.";
 answers[38] = 3;
 units[38] = ['120'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1642. ";
 preguntaids[38] = 1642


//  Id pregunta: 1413 Año de creación de pregunta: 2016
 questions[39]= "40)  Indica cual es el grupo de trabajo en el est&aacute;ndar IEEE 802.11 cuyo objetivo es ampliar el soporte para aplicaciones wireless con requisitos de calidad de servicio (QoS):";
 choices[39]= new Array();
 choices[39][0] = "802.11e";
 choices[39][1] = "802.11i";
 choices[39][2] = "802.11n";
 choices[39][3] = "802.11q";
 answers[39] = 0;
 units[39] = ['108'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 1413. ";
 preguntaids[39] = 1413


//  Id pregunta: 1396 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[40]= new Array();
 choices[40][0] = "LSP (Label Switched Path).";
 choices[40][1] = "LSR (Label Switching Router).";
 choices[40][2] = "FEC (Forwarding Equivalence Class).";
 choices[40][3] = "ILP (Incoming Label Protocol).";
 answers[40] = 3;
 units[40] = ['107'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1396. ";
 preguntaids[40] = 1396


//  Id pregunta: 1395 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[41]= new Array();
 choices[41][0] = "OSPF";
 choices[41][1] = "RIP";
 choices[41][2] = "BGP";
 choices[41][3] = "EGP";
 answers[41] = 0;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1395. ";
 preguntaids[41] = 1395


//  Id pregunta: 1529 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es usado para minimizar las colisiones en una LAN inal&aacute;mbrica?";
 choices[42]= new Array();
 choices[42][0] = "CSMA/CD";
 choices[42][1] = "CSMA/CA";
 choices[42][2] = "LACP";
 choices[42][3] = "LWAPP";
 answers[42] = 1;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1529. ";
 preguntaids[42] = 1529


//  Id pregunta: 1565 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; tipo de registros DNS recomienda utilizar la RFC 3363 en relaci&oacute;n a IPv6?";
 choices[43]= new Array();
 choices[43][0] = "ALIAS";
 choices[43][1] = "AAAA";
 choices[43][2] = "CNAME";
 choices[43][3] = "HIPV6";
 answers[43] = 1;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1565. ";
 preguntaids[43] = 1565


//  Id pregunta: 1648 Año de creación de pregunta: 2016
 questions[44]= "45)  En voz sobre IP, integraci&oacute;n de voz y datos, se&ntilde;ale cu&aacute;l es el protocolo que se encarga de los mensajes de control (participantes, medidas de calidad, etc.):";
 choices[44]= new Array();
 choices[44][0] = "UDP";
 choices[44][1] = "RTTP";
 choices[44][2] = "G729";
 choices[44][3] = "RTCP";
 answers[44] = 3;
 units[44] = ['110'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 1648. ";
 preguntaids[44] = 1648


//  Id pregunta: 1518 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;ntas direcciones IP podr&aacute;n asignarse en la subred 136.145.9.32/28, sin considerar las direcciones de subred y de broadcast?";
 choices[45]= new Array();
 choices[45][0] = "256";
 choices[45][1] = "14";
 choices[45][2] = "16";
 choices[45][3] = "Es una direcci&oacute;n no enrutable.";
 answers[45] = 1;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 1518. ";
 preguntaids[45] = 1518


//  Id pregunta: 1569 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de entre los protocolos que componen SSL reside al nivel m&aacute;s bajo y proporciona el encapsulado a los protocolos del nivel superior:";
 choices[46]= new Array();
 choices[46][0] = "Record.";
 choices[46][1] = "Handshake.";
 choices[46][2] = "Alert.";
 choices[46][3] = "Change Cipher Spec.";
 answers[46] = 0;
 units[46] = ['120'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1569. ";
 preguntaids[46] = 1569


//  Id pregunta: 1525 Año de creación de pregunta: 2016
 questions[47]= "48)  La autonegociaci&oacute;n Ethernet determina:";
 choices[47]= new Array();
 choices[47][0] = "El modo de spanning tree a utilizar.";
 choices[47][1] = "El modo d&uacute;plex.";
 choices[47][2] = "La calidad de servicio.";
 choices[47][3] = "La tasa de errores m&aacute;xima soportada por el enlace.";
 answers[47] = 1;
 units[47] = ['112'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1525. ";
 preguntaids[47] = 1525


//  Id pregunta: 1638 Año de creación de pregunta: 2016
 questions[48]= "49)  En relaci&oacute;n con el protocolo MPLS (Multiprotocol Label Switching), indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[48]= new Array();
 choices[48][0] = "En MPLS el camino que el tr&aacute;fico sigue por los nodos est&aacute; prefijado desde el origen.";
 choices[48][1] = "En MPLS se puede ofrecer un conjunto mayor y m&aacute;s flexible de servicios sobre las redes de operador, si bien, el mecanismo de conmutaci&oacute;n de etiquetas es algo m&aacute;s lento que el mecanismo de encaminamiento IP.";
 choices[48][2] = "Sobre MPLS se pueden establecer Redes Privadas Virtuales de nivel 3 con protocolo IP";
 choices[48][3] = "Sobre MPLS se pueden establecer Redes Privadas Virtuales de nivel 2 con VPLS";
 answers[48] = 1;
 units[48] = ['107'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1638. ";
 preguntaids[48] = 1638


//  Id pregunta: 1644 Año de creación de pregunta: 2016
 questions[49]= "50)  Interprete el funcionamiento de aplicar la m&aacute;scara de subred 255.255.240.0 a la direcci&oacute;n IP 132.90.132.5:";
 choices[49]= new Array();
 choices[49][0] = "Host 5 de la subred 132.90.132.0";
 choices[49][1] = "Host 4.1 de la subred 132.90.128.4";
 choices[49][2] = "Host 4 de la subred 132.90.128.5";
 choices[49][3] = "Host 4.5 de la subred 132.90.128.0";
 answers[49] = 3;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 1644. ";
 preguntaids[49] = 1644


//  Id pregunta: 1567 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; se entiende por tiempo de convergencia cuando hablamos de routers?";
 choices[50]= new Array();
 choices[50][0] = "Tiempo que tardan dos datagramas que siguen distinto encaminamiento en llegar al router final.";
 choices[50][1] = "Rapidez con la cual los routers de la red comparten informaci&oacute;n de enrutamiento.";
 choices[50][2] = "Tiempo que tarda un paquete en alcanzar su destino atravesando el m&iacute;nimo n&uacute;mero de routers posible.";
 choices[50][3] = "Tiempo medio que tarda un paquete en alcanzar cualquier nodo de la red, desde un mismo origen.";
 answers[50] = 1;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 1567. ";
 preguntaids[50] = 1567


//  Id pregunta: 1636 Año de creación de pregunta: 2016
 questions[51]= "52)  ATM (modo de transferencia as&iacute;ncrono)es un protocolo de nivel 2 utilizado en las redes de operadores sobre el que se encapsulan protocolos de niveles superiores en celdas de 53 octetos. Indique cu&aacute;l de las siguientes capas es la encargada de a&ntilde;adir los &uacute;ltimos 5 bytes de overhead &oacute; sobrecarga de protocolo a los 48 bytes rest&aacute;ntes para completar la celda ATM.";
 choices[51]= new Array();
 choices[51][0] = "Capa AAL1";
 choices[51][1] = "Capa CBR";
 choices[51][2] = "Capa AAL5";
 choices[51][3] = "Capa ATM";
 answers[51] = 3;
 units[51] = ['107'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1636. ";
 preguntaids[51] = 1636


//  Id pregunta: 1401 Año de creación de pregunta: 2016
 questions[52]= "53)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[52]= new Array();
 choices[52][0] = "32";
 choices[52][1] = "24";
 choices[52][2] = "20";
 choices[52][3] = "16";
 answers[52] = 2;
 units[52] = ['107'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1401. ";
 preguntaids[52] = 1401


//  Id pregunta: 1633 Año de creación de pregunta: 2016
 questions[53]= "54)  Dentro de la arquitectura MPLS -Multiple Protocol Label Switching-, tecnolog&iacute;a de conmutaci&oacute;n para circuitos virtuales, &iquest;c&oacute;mo se denomina al tr&aacute;fico que se encamina bajo una etiqueta?";
 choices[53]= new Array();
 choices[53][0] = "FER";
 choices[53][1] = "LSB";
 choices[53][2] = "FEC";
 choices[53][3] = "LSR";
 answers[53] = 2;
 units[53] = ['107'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 1633. ";
 preguntaids[53] = 1633


//  Id pregunta: 1649 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes es un est&aacute;ndar, cada vez m&aacute;s utilizado en telefon&iacute;a IP, para la conexi&oacute;n de los terminales a la infraestructura de red del edificio donde se pretende implantar?";
 choices[54]= new Array();
 choices[54][0] = "PCM";
 choices[54][1] = "IEEE 802.3af";
 choices[54][2] = "G.730";
 choices[54][3] = "IEEE 802.11b";
 answers[54] = 1;
 units[54] = ['110'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 1649. ";
 preguntaids[54] = 1649


//  Id pregunta: 1645 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; servicio xDSL permite disponer de circuitos sim&eacute;tricos de 2 Mbps orientados a fines profesionales o de negocios?";
 choices[55]= new Array();
 choices[55][0] = "HDSL";
 choices[55][1] = "RADSL";
 choices[55][2] = "ADSL";
 choices[55][3] = "ZDSL";
 answers[55] = 0;
 units[55] = ['106'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 1645. ";
 preguntaids[55] = 1645


//  Id pregunta: 1527 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;En cu&aacute;l de los siguientes pa&iacute;ses se usa el mismo sistema de Televisi&oacute;n Digital Terrestre que usamos en Europa?";
 choices[56]= new Array();
 choices[56][0] = "Australia.";
 choices[56][1] = "EEUU.";
 choices[56][2] = "Chile.";
 choices[56][3] = "Jap&oacute;n.";
 answers[56] = 0;
 units[56] = ['115'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1527. ";
 preguntaids[56] = 1527


//  Id pregunta: 1540 Año de creación de pregunta: 2016
 questions[57]= "58)  El tama&ntilde;o en bits del campo Puerto Destino de un paquete UDP es de:";
 choices[57]= new Array();
 choices[57][0] = "15";
 choices[57][1] = "16";
 choices[57][2] = "14";
 choices[57][3] = "12";
 answers[57] = 1;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1540. ";
 preguntaids[57] = 1540


//  Id pregunta: 1627 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes caracter&iacute;sticas est&aacute; disponible en SNMP v3, y NO lo estaba en las versiones previas:";
 choices[58]= new Array();
 choices[58][0] = "Mensajes GetBulkRequest";
 choices[58][1] = "Sentencias username para auntenticaci&oacute;n";
 choices[58][2] = "Mensajes GetNextRequest";
 choices[58][3] = "Saludo de tres v&iacute;as y reconocimiento para la transferencia de mensajes";
 answers[58] = 1;
 units[58] = ['114'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1627. ";
 preguntaids[58] = 1627


//  Id pregunta: 1393 Año de creación de pregunta: 2016
 questions[59]= "60)  EI est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?";
 choices[59]= new Array();
 choices[59][0] = "Tier 5";
 choices[59][1] = "Tier 4";
 choices[59][2] = "Tier 3";
 choices[59][3] = "Tier 0";
 answers[59] = 1;
 units[59] = ['104'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 1393. ";
 preguntaids[59] = 1393


//  Id pregunta: 1532 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l de las siguientes NO se corresponde con alguno de los 5 Registros Regionales de Internet (RIR) en los que la IANA delega la asignaci&oacute;n de los recursos de Internet:";
 choices[60]= new Array();
 choices[60][0] = "AfriNIC para &Aacute;frica.";
 choices[60][1] = "EUNIC para el continente europeo.";
 choices[60][2] = "APNIC para Asia y regi&oacute;n pac&iacute;fica.";
 choices[60][3] = "LACNIC para Am&eacute;rica Latina y algunas islas caribe&ntilde;as.";
 answers[60] = 1;
 units[60] = ['103'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1532. ";
 preguntaids[60] = 1532


//  Id pregunta: 1629 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;les son los principales protocolos que operan en la capa de transporte en el modelo TCP/IP?";
 choices[61]= new Array();
 choices[61][0] = "IPX y FTP";
 choices[61][1] = "UDP y TCP";
 choices[61][2] = "IP y TCP";
 choices[61][3] = "UDP y IP";
 answers[61] = 1;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1629. ";
 preguntaids[61] = 1629


//  Id pregunta: 1647 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes es un est&aacute;ndar de transmisi&oacute;n de datos sobre sistemas de televisi&oacute;n por cable (CATV)?";
 choices[62]= new Array();
 choices[62][0] = "Data Over Cable Service Interface Specifications (DOCSIS)";
 choices[62][1] = "National Television System Committee (NTSC)";
 choices[62][2] = "ATP";
 choices[62][3] = "Xtream";
 answers[62] = 0;
 units[62] = ['115'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 1647. ";
 preguntaids[62] = 1647


//  Id pregunta: 1400 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique la respuesta FALSA, respecto al protocolo IPSEC:";
 choices[63]= new Array();
 choices[63][0] = "EI protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[63][1] = "EI protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[63][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[63][3] = "IPSEC ESP es incompatible con el modo transporte, solo se puede utilizar en modo t&uacute;nel.";
 answers[63] = 3;
 units[63] = ['119'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1400. ";
 preguntaids[63] = 1400


//  Id pregunta: 1523 Año de creación de pregunta: 2016
 questions[64]= "65)  Dentro de los m&eacute;todos de acceso al medio en redes, &iquest;cu&aacute;l de las siguientes t&eacute;cnicas se encuentra dentro de las denominadas de contienda con escucha?";
 choices[64]= new Array();
 choices[64][0] = "Token ring.";
 choices[64][1] = "CSMA.";
 choices[64][2] = "Aloha puro.";
 choices[64][3] = "Aloha ranurado.";
 answers[64] = 1;
 units[64] = ['102'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1523. ";
 preguntaids[64] = 1523


//  Id pregunta: 1640 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un requisito indispensable para una comunicaci&oacute;n segura?";
 choices[65]= new Array();
 choices[65][0] = "Auditor&iacute;a";
 choices[65][1] = "Confidencialidad";
 choices[65][2] = "Integridad";
 choices[65][3] = "Disponibilidad";
 answers[65] = 0;
 units[65] = ['120'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1640. ";
 preguntaids[65] = 1640


//  Id pregunta: 1530 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; banda de frecuencias tiene asignada la tecnolog&iacute;a DECT 6.0 com&uacute;nmente en Europa?";
 choices[66]= new Array();
 choices[66][0] = "900MHz.";
 choices[66][1] = "1880-1900MHz.";
 choices[66][2] = "1920-1930MHz.";
 choices[66][3] = "2,4GHz - 5,8GHz.";
 answers[66] = 1;
 units[66] = ['117'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1530. ";
 preguntaids[66] = 1530


//  Id pregunta: 1568 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l es el est&aacute;ndar del IEEE conocido como PoE+ (Power over Ethernet Plus) que aumenta la potencia de entrega respecto a su predecesor?";
 choices[67]= new Array();
 choices[67][0] = "IEEE 802.3af";
 choices[67][1] = "IEEE 802.3ab";
 choices[67][2] = "IEEE 802.3at";
 choices[67][3] = "IEEE 802.1ba";
 answers[67] = 2;
 units[67] = ['112'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1568. ";
 preguntaids[67] = 1568


//  Id pregunta: 1409 Año de creación de pregunta: 2016
 questions[68]= "69)  La medida Mean Opinion Score (MOS) se utiliza en:";
 choices[68]= new Array();
 choices[68][0] = "La ponderaci&oacute;n de alternativas en el m&eacute;todo Delphi.";
 choices[68][1] = "La calidad de la voz sobre el protocolo VoIP.";
 choices[68][2] = "La evaluaci&oacute;n de riesgos del m&eacute;todo Magerit v2.";
 choices[68][3] = "La explotaci&oacute;n de almacenes de datos en CRM (Customer Relationship Management).";
 answers[68] = 1;
 units[68] = ['110'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1409. ";
 preguntaids[68] = 1409


//  Id pregunta: 1575 Año de creación de pregunta: 2016
 questions[69]= "70)  En el &aacute;mbito del modelo TCP/IP, se&ntilde;ale cu&aacute;l de las siguientes siglas identifica un algoritmo de encaminamiento:";
 choices[69]= new Array();
 choices[69][0] = "NTP (Network Time Protocol)";
 choices[69][1] = "RIP (Routing Information Protocol)";
 choices[69][2] = "RPC (Remote Procedure Call)";
 choices[69][3] = "FTP (File Transfer Protocol)";
 answers[69] = 1;
 units[69] = ['109'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 1575. ";
 preguntaids[69] = 1575


//  Id pregunta: 1630 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale c&oacute;mo se denomina la unidad de datos usada en la capa de transporte:";
 choices[70]= new Array();
 choices[70][0] = "Paquete";
 choices[70][1] = "Segmento";
 choices[70][2] = "Trama";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = 1;
 units[70] = ['109'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1630. ";
 preguntaids[70] = 1630


//  Id pregunta: 1651 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l es la velocidad m&aacute;xima te&oacute;rica a la que se puede transmitir en HSDPA (High Speed Downlink Packet Access)?";
 choices[71]= new Array();
 choices[71][0] = "2,5 Mbps";
 choices[71][1] = "14,4 Mbps";
 choices[71][2] = "3,5 Mbps";
 choices[71][3] = "1 Mbps";
 answers[71] = 1;
 units[71] = ['117'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1651. ";
 preguntaids[71] = 1651


//  Id pregunta: 1524 Año de creación de pregunta: 2016
 questions[72]= "73)  En una trama Ethernet, &iquest;qu&eacute; valor en binario toma el campo delimitador de inicio de trama?";
 choices[72]= new Array();
 choices[72][0] = "#######";
 choices[72][1] = "1,00E+07";
 choices[72][2] = "#######";
 choices[72][3] = "#######";
 answers[72] = 0;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1524. ";
 preguntaids[72] = 1524


//  Id pregunta: 1628 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n correcta. TCP es:";
 choices[73]= new Array();
 choices[73][0] = "Un protocolo de la capa de transporte orientado a conexi&oacute;n.";
 choices[73][1] = "Un protocolo de la capa de transporte no orientado a conexi&oacute;n.";
 choices[73][2] = "Un protocolo de las capas de enlace y red que puede detectar y compensar paquetes perdidos o datos alterados.";
 choices[73][3] = "Un protocolo de la capa de transporte orientado fundamentalmente a regular el flujo de transmisi&oacute;n para no saturar a los receptores m&aacute;s lentos.";
 answers[73] = 0;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 1628. ";
 preguntaids[73] = 1628


//  Id pregunta: 1639 Año de creación de pregunta: 2016
 questions[74]= "75)  Las redes ATM se caracterizan por:";
 choices[74]= new Array();
 choices[74][0] = "Las c&eacute;lulas se transmiten a intervalos regulares.";
 choices[74][1] = "Se realiza control de errores en el campo de datos.";
 choices[74][2] = "No se garantiza que las c&eacute;lulas llegan a su destino en el mismo orden en el que fueron transmitidas.";
 choices[74][3] = "Se realiza control de flujo en la red ATM.";
 answers[74] = 0;
 units[74] = ['107'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1639. ";
 preguntaids[74] = 1639


