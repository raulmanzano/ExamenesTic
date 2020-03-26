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
//  Id pregunta: 1390 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[0]= new Array();
 choices[0][0] = "No es v&aacute;lida";
 choices[0][1] = "Multicast.";
 choices[0][2] = "Unicast.";
 choices[0][3] = "Loopback.";
 answers[0] = 2;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1390. ";
 preguntaids[0] = 1390


//  Id pregunta: 1131 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[1]= new Array();
 choices[1][0] = "192.168.30.0";
 choices[1][1] = "192.168.30.128";
 choices[1][2] = "192.168.30.255";
 choices[1][3] = "192.168.30.200";
 answers[1] = 1;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1131. ";
 preguntaids[1] = 1131


//  Id pregunta: 1237 Año de creación de pregunta: 2016
 questions[2]= "3)  La tecnolog&iacute;a de telefon&iacute;a m&oacute;vil GSM utiliza, entre otras, la siguiente base de datos de usuarios:";
 choices[2]= new Array();
 choices[2][0] = "MSC";
 choices[2][1] = "BSC";
 choices[2][2] = "NSS";
 choices[2][3] = "VLR";
 answers[2] = 3;
 units[2] = ['117'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1237. ";
 preguntaids[2] = 1237


//  Id pregunta: 1098 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a la tecnolog&iacute;a WIFI:";
 choices[3]= new Array();
 choices[3][0] = "Los equipos WIFI no necesitan adaptarse a ninguna normativa.";
 choices[3][1] = "Los ayuntamientos pueden comercializar WIFI siempre y cuando se hayan inscrito en el registro de operadores.";
 choices[3][2] = "Los operadores de telecomunicaciones tienen que pedir una licencia para la utilizaci&oacute;n de la banda WIFI, que les permite comercializar este servicio.";
 choices[3][3] = "Los equipos WIFI utilizan una banda de uso com&uacute;n.";
 answers[3] = 3;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 1098. ";
 preguntaids[3] = 1098


//  Id pregunta: 1377 Año de creación de pregunta: 2016
 questions[4]= "5)  En redes de &aacute;rea local, &iquest;Cu&aacute;l de los siguientes es un de acceso al medio compartido con escucha por contienda?";
 choices[4]= new Array();
 choices[4][0] = "Paso de testigo en anillo.";
 choices[4][1] = "CSMA no persistente.";
 choices[4][2] = "ALOHA ranurado.";
 choices[4][3] = "Contenci&oacute;n.";
 answers[4] = 1;
 units[4] = ['112'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 1377. ";
 preguntaids[4] = 1377


//  Id pregunta: 1205 Año de creación de pregunta: 2016
 questions[5]= "6)  La fibra multimodo NO se usa para aplicaciones donde el producto &quot;largas distancias por ancho de banda&quot; deba ser alto, porque:";
 choices[5]= new Array();
 choices[5][0] = "Existen diferentes modos de propagaci&oacute;n, con diferentes velocidades de propagaci&oacute;n de la se&ntilde;al, llegando la misma distorsionada al receptor.";
 choices[5][1] = "El coste de fabricaci&oacute;n de un segmento continuo se incrementa cuadr&aacute;ticamente con la distancia (mientras que en la monomodo lo hace linealmente).";
 choices[5][2] = "Requiere transmitir en la segunda ventana, lo que unido a la potencia &oacute;ptica necesaria por larga distancia hace que aumente prohibitivamente el coste.";
 choices[5][3] = "Requiere, para amplificar la se&ntilde;al a largas distancias, EDFAs (Erbium Doped Fibre Amplifier), mientras que en monomodo hay amplificadores m&aacute;s baratos.";
 answers[5] = 0;
 units[5] = ['104'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1205. ";
 preguntaids[5] = 1205


//  Id pregunta: 948 Año de creación de pregunta: 2016
 questions[6]= "7)  Cu&aacute;l de los siguientes aspectos NO se considera obligatorio en la Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE.";
 choices[6]= new Array();
 choices[6][0] = "Se realizar&aacute;n a trav&eacute;s de sede electr&oacute;nica todas las actuaciones que requieran de autenticaci&oacute;n tanto de la Administraci&oacute;n como del ciudadano.";
 choices[6][1] = "Cuando se recojan datos personales mediante un formulario se deber&aacute; incluir una clausula informativa de acuerdo al Art&iacute;culo 5 de la LOPD.";
 choices[6][2] = "La p&aacute;gina de inicio deber&aacute; contar con informaci&oacute;n sobre accesibilidad del portal e iconos de cumplimiento de la norma WAI.";
 choices[6][3] = "Usar pictogramas e iconos que sean intuitivos.";
 answers[6] = 3;
 units[6] = ['125'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 948. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[6] = 948


//  Id pregunta: 1378 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[7]= new Array();
 choices[7][0] = "110";
 choices[7][1] = "119";
 choices[7][2] = "161";
 choices[7][3] = "25";
 answers[7] = 2;
 units[7] = ['114'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 1378. ";
 preguntaids[7] = 1378


//  Id pregunta: 1245 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; es WirelessMAN-Advanced?";
 choices[8]= new Array();
 choices[8][0] = "La evoluci&oacute;n de la norma 802.16.";
 choices[8][1] = "Bluetooth versi&oacute;n 5.";
 choices[8][2] = "El nuevo grupo de trabajo 802.13.";
 choices[8][3] = "LTE (Long-Term Evolution) para redes MAN.";
 answers[8] = 0;
 units[8] = ['108'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1245. ";
 preguntaids[8] = 1245


//  Id pregunta: 1227 Año de creación de pregunta: 2016
 questions[9]= "10)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Screened Subnet.";
 choices[9][1] = "Dual-Homed Host.";
 choices[9][2] = "Router-Homed Host.";
 choices[9][3] = "Screened Host.";
 answers[9] = 3;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1227. ";
 preguntaids[9] = 1227


//  Id pregunta: 1056 Año de creación de pregunta: 2016
 questions[10]= "11)  Cu&aacute;l de los siguientes tipos de canales, en comunicaciones m&oacute;viles, permite la comunicaci&oacute;n directa m&oacute;vil a m&oacute;vil:";
 choices[10]= new Array();
 choices[10][0] = "Semid&uacute;plex.";
 choices[10][1] = "D&uacute;plex.";
 choices[10][2] = "S&iacute;mplex a una frecuencia.";
 choices[10][3] = "S&iacute;mplex a dos frecuencias.";
 answers[10] = 2;
 units[10] = ['117'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1056. ";
 preguntaids[10] = 1056


//  Id pregunta: 1064 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[11]= new Array();
 choices[11][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[11][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[11][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[11][3] = "Las recomendaciones GSM contemplan la posibilidad de utilizar un codificador de voz que permita dividir en dos cada canal.";
 answers[11] = 2;
 units[11] = ['117'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 1064. ";
 preguntaids[11] = 1064


//  Id pregunta: 1243 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes NO es un protocolo relacionado con las redes inal&aacute;mbricas WLAN?";
 choices[12]= new Array();
 choices[12][0] = "DECT.";
 choices[12][1] = "802.11b.";
 choices[12][2] = "802.11g.";
 choices[12][3] = "802.11n.";
 answers[12] = 0;
 units[12] = ['108'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1243. ";
 preguntaids[12] = 1243


//  Id pregunta: 1381 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[13]= new Array();
 choices[13][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[13][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[13][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.";
 choices[13][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[13] = 3;
 units[13] = ['114'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1381. ";
 preguntaids[13] = 1381


//  Id pregunta: 1210 Año de creación de pregunta: 2016
 questions[14]= "15)  La especificaci&oacute;n del protocolo RTP (Real-Time Transport Protocol) corresponde a:";
 choices[14]= new Array();
 choices[14][0] = "ITU-T";
 choices[14][1] = "IETF";
 choices[14][2] = "W3C";
 choices[14][3] = "IEEE";
 answers[14] = 1;
 units[14] = ['110'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1210. ";
 preguntaids[14] = 1210


//  Id pregunta: 1246 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; est&aacute;ndar del IEEE opera con canales de 80 MHz de ancho de banda por cliente?";
 choices[15]= new Array();
 choices[15][0] = "802.11n";
 choices[15][1] = "802.11g";
 choices[15][2] = "802.11ac";
 choices[15][3] = "802.11ad";
 answers[15] = 2;
 units[15] = ['108'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 1246. ";
 preguntaids[15] = 1246


//  Id pregunta: 949 Año de creación de pregunta: 2016
 questions[16]= "17)  En la Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, en el Fasc&iacute;culo de Imagen Institucional se establecen elementos gr&aacute;ficos entre los cuales NO se incluyen:";
 choices[16]= new Array();
 choices[16][0] = "La tipograf&iacute;a Gill Sans para los logotipos.";
 choices[16][1] = "El tama&ntilde;o de los logotipos y los colores de los gr&aacute;ficos.";
 choices[16][2] = "El orden del texto en los logotipos para indicar la titularidad del sitio web.";
 choices[16][3] = "Todos los anteriores est&aacute;n incluidos.";
 answers[16] = 3;
 units[16] = ['125'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 949. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[16] = 949


//  Id pregunta: 1086 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[17]= new Array();
 choices[17][0] = "UTP - Unshielded Twisted Pair.";
 choices[17][1] = "STP - Shielded Twisted Pair.";
 choices[17][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[17][3] = "FTP - Foiled Twisted Pair.";
 answers[17] = 2;
 units[17] = ['104'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1086. ";
 preguntaids[17] = 1086


//  Id pregunta: 1068 Año de creación de pregunta: 2016
 questions[18]= "19)  En cu&aacute;l de las siguientes combinaciones de topolog&iacute;as de red, un fallo en el cableado de red, impedir&aacute; el funcionamiento de toda ella:";
 choices[18]= new Array();
 choices[18][0] = "Topolog&iacute;a Estrella f&iacute;sica y Mallada l&oacute;gica.";
 choices[18][1] = "Topolog&iacute;a Anillo f&iacute;sica y Bus l&oacute;gica.";
 choices[18][2] = "Topolog&iacute;a Mallada f&iacute;sica y Anillo l&oacute;gica.";
 choices[18][3] = "Topolog&iacute;a Bus f&iacute;sica y Estrella l&oacute;gica.";
 answers[18] = 3;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1068. ";
 preguntaids[18] = 1068


//  Id pregunta: 1244 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;alar en qu&eacute; banda de frecuencias el est&aacute;ndar 802.11ad alcanza sus velocidades m&aacute;ximas:";
 choices[19]= new Array();
 choices[19][0] = "60 GHz.";
 choices[19][1] = "6 GHz.";
 choices[19][2] = "600 MHz.";
 choices[19][3] = "60 MHz.";
 answers[19] = 0;
 units[19] = ['108'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1244. ";
 preguntaids[19] = 1244


//  Id pregunta: 1219 Año de creación de pregunta: 2016
 questions[20]= "21)  Cu&aacute;l de las siguientes afirmaciones sobre el protocolo de enrutamiento OSPF (Open Shortest Path First) es INCORRECTA:";
 choices[20]= new Array();
 choices[20][0] = "OSPF enruta paquetes bas&aacute;ndose &uacute;nicamente en la direcci&oacute;n IP destino.";
 choices[20][1] = "Utiliza un m&eacute;todo basado en el algoritmo de Dijkstra para el c&aacute;lculo de la ruta &oacute;ptima.";
 choices[20][2] = "En OSPF un sistema aut&oacute;nomo (AS) es un conjunto de redes bajo una administraci&oacute;n com&uacute;n.";
 choices[20][3] = "Al operar OSPF internamente en un sistema aut&oacute;nomo (AS), no puede enviar ni recibir rutas a otros AS.";
 answers[20] = 3;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1219. ";
 preguntaids[20] = 1219


//  Id pregunta: 1385 Año de creación de pregunta: 2016
 questions[21]= "22)  EI puerto 69 es utilizado por:";
 choices[21]= new Array();
 choices[21][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[21][1] = "Finger.";
 choices[21][2] = "IMAP (Internet Message Access Protocol).";
 choices[21][3] = "SFTP (Secure File Transfer Protocol).";
 answers[21] = 0;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1385. ";
 preguntaids[21] = 1385


//  Id pregunta: 1076 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO corresponde a uno de los tipos de uso establecidos para el dominio p&uacute;blico radioel&eacute;ctrico?";
 choices[22]= new Array();
 choices[22][0] = "Uso Com&uacute;n";
 choices[22][1] = "Uso Especial";
 choices[22][2] = "Uso General.";
 choices[22][3] = "Uso Privativo.";
 answers[22] = 2;
 units[22] = ['121'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1076. ";
 preguntaids[22] = 1076


//  Id pregunta: 1216 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[23]= new Array();
 choices[23][0] = "Loopback.";
 choices[23][1] = "Indefinida (Unspecified).";
 choices[23][2] = "Multicast.";
 choices[23][3] = "No es v&aacute;lida.";
 answers[23] = 0;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1216. ";
 preguntaids[23] = 1216


//  Id pregunta: 1388 Año de creación de pregunta: 2016
 questions[24]= "25)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[24]= new Array();
 choices[24][0] = "Cabecera.";
 choices[24][1] = "Checksum.";
 choices[24][2] = "Registros de recursos de Respuesta.";
 choices[24][3] = "Registros de recursos de Autoridad.";
 answers[24] = 1;
 units[24] = ['102'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1388. ";
 preguntaids[24] = 1388


//  Id pregunta: 1239 Año de creación de pregunta: 2016
 questions[25]= "26)  La norma TETRA (TErrestrial Trunked RAdio) es un est&aacute;ndar elaborado por:";
 choices[25]= new Array();
 choices[25][0] = "IEEE (Institute of Electrical and Electronics Engineers).";
 choices[25][1] = "IETF (Internet Engineering Task Force).";
 choices[25][2] = "ETSI (European Telecommunications Standards Institute).";
 choices[25][3] = "ITU (International Telecommunications Union).";
 answers[25] = 2;
 units[25] = ['117'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 1239. ";
 preguntaids[25] = 1239


//  Id pregunta: 1211 Año de creación de pregunta: 2016
 questions[26]= "27)  El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:";
 choices[26]= new Array();
 choices[26][0] = "2121";
 choices[26][1] = "2020";
 choices[26][2] = "980";
 choices[26][3] = "990";
 answers[26] = 3;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1211. ";
 preguntaids[26] = 1211


//  Id pregunta: 1242 Año de creación de pregunta: 2016
 questions[27]= "28)  El est&aacute;ndar IEEE 802.11e sobre redes inal&aacute;mbricas se corresponde con especificaciones";
 choices[27]= new Array();
 choices[27][0] = "Para la coexistencia con sistemas de Radar o Sat&eacute;lite.";
 choices[27][1] = "De seguridad.";
 choices[27][2] = "De roaming.";
 choices[27][3] = "Sobre calidad de servicio QoS.";
 answers[27] = 3;
 units[27] = ['106'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1242. ";
 preguntaids[27] = 1242


//  Id pregunta: 1236 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; tasa de transferencia tiene la codificaci&oacute;n de voz CS-ACELP (Conjugate-Structure Algebraic Code Excited Linear-Prediction) de la Recomendaci&oacute;n ITU G.729 (anexo A)?";
 choices[28]= new Array();
 choices[28][0] = "8 Kbit/s.";
 choices[28][1] = "16 Kbit/s.";
 choices[28][2] = "32 Kbit/s.";
 choices[28][3] = "64 Kbit/s.";
 answers[28] = 0;
 units[28] = ['110'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1236. ";
 preguntaids[28] = 1236


//  Id pregunta: 1380 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale cual de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[29]= new Array();
 choices[29][0] = "GETREQUEST PDU";
 choices[29][1] = "SETRESPONSEPDU";
 choices[29][2] = "RESPONSEPDU";
 choices[29][3] = "INFORM REQUEST PDU";
 answers[29] = 1;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1380. ";
 preguntaids[29] = 1380


//  Id pregunta: 1379 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[30]= new Array();
 choices[30][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este para metro.";
 choices[30][1] = "No, necesitaria una base de datos externa para almacenarlo.";
 choices[30][2] = "Si, solo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[30][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[30] = 0;
 units[30] = ['114'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1379. ";
 preguntaids[30] = 1379


//  Id pregunta: 1247 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes conceptos NO est&aacute; relacionado con la especificaci&oacute;n de IP m&oacute;vil para IPv4 del IETF (RFC 5944)?";
 choices[31]= new Array();
 choices[31][0] = "Tunneling.";
 choices[31][1] = "Home agent.";
 choices[31][2] = "Mobile Switching Centre.";
 choices[31][3] = "Care-of address.";
 answers[31] = 2;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1247. ";
 preguntaids[31] = 1247


//  Id pregunta: 1233 Año de creación de pregunta: 2016
 questions[32]= "33)  Entre los m&uacute;ltiples protocolos de se&ntilde;alizaci&oacute;n para VoIP se encuentra:";
 choices[32]= new Array();
 choices[32][0] = "SIP";
 choices[32][1] = "VDSL";
 choices[32][2] = "IMAP";
 choices[32][3] = "POTS";
 answers[32] = 0;
 units[32] = ['122'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1233. ";
 preguntaids[32] = 1233


//  Id pregunta: 1386 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[33]= new Array();
 choices[33][0] = "224.0.0.4";
 choices[33][1] = "224.0.0.5";
 choices[33][2] = "224.0.0.9";
 choices[33][3] = "224.0.0.22";
 answers[33] = 2;
 units[33] = ['102'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1386. ";
 preguntaids[33] = 1386


//  Id pregunta: 1389 Año de creación de pregunta: 2016
 questions[34]= "35)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; mascara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[34]= new Array();
 choices[34][0] = "Mascara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[34][1] = "Mascara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[34][2] = "Mascara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[34][3] = "Mascara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[34] = 0;
 units[34] = ['109'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1389. ";
 preguntaids[34] = 1389


//  Id pregunta: 1128 Año de creación de pregunta: 2016
 questions[35]= "36)  Dentro del protocolo TCP/IP, el comando arp -a:";
 choices[35]= new Array();
 choices[35][0] = "Muestra la tabla RARP con la relaci&oacute;n entre direcciones MAC e IP.";
 choices[35][1] = "Muestra la tabla ARP con la relaci&oacute;n entre direcciones IP y MAC.";
 choices[35][2] = "Muestra la tabla ARP con la relaci&oacute;n entre direcciones IP y puertos UDP.";
 choices[35][3] = "Muestra la tabla de direcciones IP con la relaci&oacute;n entre direcciones IP y puertos TCP.";
 answers[35] = 1;
 units[35] = ['109'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1128. ";
 preguntaids[35] = 1128


//  Id pregunta: 947 Año de creación de pregunta: 2016
 questions[36]= "37)  La Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE identifica 3 estrategias para optimizar los sitios web para m&oacute;viles, cu&aacute;l de las siguientes NO es una de esas estrategias:";
 choices[36]= new Array();
 choices[36][0] = "No hacer un sitio especial para dispositivo m&oacute;vil.";
 choices[36][1] = "Hacer un sitio especial para dispositivo m&oacute;vil.";
 choices[36][2] = "Construir un sitio m&oacute;vil con contenido adaptable a los dispositivos.";
 choices[36][3] = "Estrategia del tipo What You See Is What You Get (WYSIWYG).";
 answers[36] = 3;
 units[36] = ['125'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 947. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[36] = 947


//  Id pregunta: 1384 Año de creación de pregunta: 2016
 questions[37]= "38)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "Fragmentaci&oacute;n.";
 choices[37][1] = "Opciones de salto a salto.";
 choices[37][2] = "Autenticaci&oacute;n.";
 choices[37][3] = "Limite de saltos.";
 answers[37] = 3;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 1384. ";
 preguntaids[37] = 1384


//  Id pregunta: 1217 Año de creación de pregunta: 2016
 questions[38]= "39)  El est&aacute;ndar ANSI/TIA-942 describe distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los CPD. &iquest;Cu&aacute;l es el nivel (Tier) que se refiere a una instalaci&oacute;n que no tiene redundadas sus componentes vitales (climatizaci&oacute;n, suministro el&eacute;ctrico)?";
 choices[38]= new Array();
 choices[38][0] = "Tier 0.";
 choices[38][1] = "Tier 2.";
 choices[38][2] = "Tier 1.";
 choices[38][3] = "Tier 3.";
 answers[38] = 2;
 units[38] = ['119'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1217. ";
 preguntaids[38] = 1217


//  Id pregunta: 1078 Año de creación de pregunta: 2016
 questions[39]= "40)  Referente a las radiaciones electromagn&eacute;ticas esp&uacute;reas emitidas por los equipos basados en tecnolog&iacute;as de la informaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "TEMPEST es el acr&oacute;nimo de Telecommunications Electronics Material Protected from Emanating Spurious Transmissions.";
 choices[39][1] = "En el &aacute;mbito del Ministerio de Defensa la certificaci&oacute;n TEMPEST es emitida por el CCN (Centro Criptol&oacute;gico Nacional).";
 choices[39][2] = "El nivel 3 de certificaci&oacute;n TEMPEST corresponde a equipos cuyas radiaciones son imperceptibles a distancias superiores a los 15 metros.";
 choices[39][3] = "Se pueden prevenir apantallando los equipos mediante una jaula de Faraday.";
 answers[39] = 1;
 units[39] = ['119'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 1078. ";
 preguntaids[39] = 1078


//  Id pregunta: 1382 Año de creación de pregunta: 2016
 questions[40]= "41)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[40]= new Array();
 choices[40][0] = "135.26.41.94";
 choices[40][1] = "135.26.41.95";
 choices[40][2] = "135.26.41.96";
 choices[40][3] = "135.26.41.97";
 answers[40] = 0;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1382. ";
 preguntaids[40] = 1382


//  Id pregunta: 1215 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale los tipos de tr&aacute;fico IPv6 que hay:";
 choices[41]= new Array();
 choices[41][0] = "Unicast, Multicast y Broadcast.";
 choices[41][1] = "Somecast, Multicast y Broadcast.";
 choices[41][2] = "Unicast, Multicast y Anycast.";
 choices[41][3] = "Unicast, Megacast y Anycast.";
 answers[41] = 2;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1215. ";
 preguntaids[41] = 1215


//  Id pregunta: 1213 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale cu&aacute;les son las direcciones IP de red y de broadcast para la siguiente subred 132.27.43.25/27:";
 choices[42]= new Array();
 choices[42][0] = "Red: 132.27.43.31/27 y broadcast: 132.27.43.0";
 choices[42][1] = "red: 132.27.43.20/27 y broadcast: 132.27.43.1";
 choices[42][2] = "red: 132.27.43.0/27 y broadcast: 132.27.43.1";
 choices[42][3] = "red: 132.27.43.0/27 y broadcast: 132.27.43.31";
 answers[42] = 3;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1213. ";
 preguntaids[42] = 1213


//  Id pregunta: 1376 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[43]= new Array();
 choices[43][0] = "######";
 choices[43][1] = "FF::FF";
 choices[43][2] = "FF:FF:FF:FF:FF:FF:FF";
 choices[43][3] = "FF:FF:FF:FF:FF:FF";
 answers[43] = 3;
 units[43] = ['112'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1376. ";
 preguntaids[43] = 1376


//  Id pregunta: 1207 Año de creación de pregunta: 2016
 questions[44]= "45)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[44]= new Array();
 choices[44][0] = "Jitter.";
 choices[44][1] = "Delay.";
 choices[44][2] = "Round Trip delay Time.";
 choices[44][3] = "Latencia.";
 answers[44] = 2;
 units[44] = ['102'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 1207. ";
 preguntaids[44] = 1207


//  Id pregunta: 1248 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;En qu&eacute; consiste la liberaci&oacute;n del dividendo digital?";
 choices[45]= new Array();
 choices[45][0] = "Es el proceso por el que se volvieron a repartir las frecuencias del espectro radioel&eacute;ctrico de los 900 MHz, anteriormente asignadas a Movistar, Vodafone y Orange, a aquellos operadores que lo solicitaron, de forma que pudieran ser utilizadas para ofrecer servicios m&oacute;viles LTE/4G.";
 choices[45][1] = "Se denomina as&iacute; al espectro asignado a la emisi&oacute;n de televisi&oacute;n anal&oacute;gica, que va a pasar a ser utilizado por tecnolog&iacute;as LTE/4G.";
 choices[45][2] = "Se denomina as&iacute; al espectro recuperado al hacerse efectiva la transici&oacute;n a la televisi&oacute;n digital terrestre.";
 choices[45][3] = "Es el proceso de reordenaci&oacute;n de algunos canales TDT, para liberar las frecuencias radioel&eacute;ctricas de la banda de 800 MHz que ser&aacute; utilizada por tecnolog&iacute;as m&oacute;viles LTE/4G.";
 answers[45] = 3;
 units[45] = ['117'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 1248. ";
 preguntaids[45] = 1248


//  Id pregunta: 1214 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n RFC 2460, se&ntilde;ale de las siguientes cabeceras IPv6 cu&aacute;l es una cabecera de extensi&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Cabecera Siguiente.";
 choices[46][1] = "Fragmento.";
 choices[46][2] = "L&iacute;mite de Saltos.";
 choices[46][3] = "Longitud de la Carga &Uacute;til.";
 answers[46] = 1;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1214. ";
 preguntaids[46] = 1214


//  Id pregunta: 1241 Año de creación de pregunta: 2016
 questions[47]= "48)  En el &aacute;mbito de las redes inal&aacute;mbricas, la variante IEEE 802.11a:";
 choices[47]= new Array();
 choices[47][0] = "Opera dentro del rango de los 5 GHz.";
 choices[47][1] = "Es compatible con el Est&aacute;ndar 802.11b.";
 choices[47][2] = "Es compatible con el est&aacute;ndar 802.11g.";
 choices[47][3] = "Incorpora QoS (Calidad de Servicio).";
 answers[47] = 0;
 units[47] = ['108'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1241. ";
 preguntaids[47] = 1241


//  Id pregunta: 1308 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta en relaci&oacute;n al protocolo FTP?";
 choices[48]= new Array();
 choices[48][0] = "En el modo activo el puerto de datos del cliente es el 20.";
 choices[48][1] = "EI comando &quot;upload&quot; permite subir un fichero al servidor.";
 choices[48][2] = "Entre los tipos de acceso, est&aacute; el acceso an&oacute;nimo, que permite conectarse sin necesidad de usuario y contrase&ntilde;a.";
 choices[48][3] = "EI protocolo permite tres modos de conexi&oacute;n: activo, pasivo y bajo demanda.";
 answers[48] = 2;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1308. ";
 preguntaids[48] = 1308


//  Id pregunta: 1206 Año de creación de pregunta: 2016
 questions[49]= "50)  El est&aacute;ndar conocido como WRAN (Wireless Regional &Aacute;rea Network) pertenece al grupo de trabajo del IEEE:";
 choices[49]= new Array();
 choices[49][0] = "802.19";
 choices[49][1] = "802.2";
 choices[49][2] = "802.21";
 choices[49][3] = "802.22";
 answers[49] = 3;
 units[49] = ['112'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 1206. ";
 preguntaids[49] = 1206


//  Id pregunta: 1234 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[50]= new Array();
 choices[50][0] = "16, 24, 32 &oacute; 40";
 choices[50][1] = "6, 12, 24 &oacute; 48";
 choices[50][2] = "4, 8, 16 &oacute; 40";
 choices[50][3] = "8, 16, 32 &oacute; 64";
 answers[50] = 0;
 units[50] = ['110'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 1234. ";
 preguntaids[50] = 1234


//  Id pregunta: 1235 Año de creación de pregunta: 2016
 questions[51]= "52)  En conmutaci&oacute;n de paquetes, &iquest;cu&aacute;l de las siguientes afirmaciones con respecto a la multiplexaci&oacute;n por divisi&oacute;n de tiempo es correcta?";
 choices[51]= new Array();
 choices[51][0] = "En la multiplexaci&oacute;n s&iacute;ncrona no hay preasignaci&oacute;n de ranuras temporales.";
 choices[51][1] = "En la multiplexaci&oacute;n as&iacute;ncrona se asigna siempre la misma ranura de tiempo a cada dispositivo.";
 choices[51][2] = "En la multiplexaci&oacute;n s&iacute;ncrona el n&uacute;mero de dispositivos debe ser igual al n&uacute;mero de ranuras de tiempo disponibles.";
 choices[51][3] = "En la multiplexaci&oacute;n as&iacute;ncrona el retardo es variable.";
 answers[51] = 3;
 units[51] = ['102'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1235. ";
 preguntaids[51] = 1235


//  Id pregunta: 1375 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[52]= new Array();
 choices[52][0] = "4 bytes.";
 choices[52][1] = "6 bytes.";
 choices[52][2] = "12 bytes.";
 choices[52][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[52] = 0;
 units[52] = ['112'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1375. ";
 preguntaids[52] = 1375


//  Id pregunta: 1204 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el est&aacute;ndar ISO/IEC 11801 para la clasificaci&oacute;n de fibras multimodo, indicar la respuesta correcta en relaci&oacute;n a OM4:";
 choices[53]= new Array();
 choices[53][0] = "Fibra de 62.5/125 micras.";
 choices[53][1] = "Fibra de 50/125 micras.";
 choices[53][2] = "Fibra de 50/25 micras.";
 choices[53][3] = "Fibra de 62/25 micras.";
 answers[53] = 1;
 units[53] = ['104'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 1204. ";
 preguntaids[53] = 1204


//  Id pregunta: 1221 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta. En una comunicaci&oacute;n HTTPS, &iquest;qu&eacute; tipo de cifrado se utiliza?";
 choices[54]= new Array();
 choices[54][0] = "Sim&eacute;trico exclusivamente.";
 choices[54][1] = "Asim&eacute;trico exclusivamente.";
 choices[54][2] = "No se utiliza ning&uacute;n cifrado.";
 choices[54][3] = "Tanto el sim&eacute;trico como el asim&eacute;trico.";
 answers[54] = 3;
 units[54] = ['120'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 1221. ";
 preguntaids[54] = 1221


//  Id pregunta: 1309 Año de creación de pregunta: 2016
 questions[55]= "56)  Ethernet realiza la difusi&oacute;n recibiendo tramas con la siguiente direcci&oacute;n MAC de destino:";
 choices[55]= new Array();
 choices[55][0] = "00: 00: 00: 00: 00:FF";
 choices[55][1] = "FF:FF:FF:FF:FF:FF";
 choices[55][2] = "FF: 00: 00: 00: 00:FF";
 choices[55][3] = "00:00:00:00:00:00";
 answers[55] = 1;
 units[55] = ['112'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 1309. ";
 preguntaids[55] = 1309


//  Id pregunta: 1218 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique la afirmaci&oacute;n correcta respecto a VPLS:";
 choices[56]= new Array();
 choices[56][0] = "S&oacute;lo permite establecer enlaces VPN punto a punto.";
 choices[56][1] = "Ofrece un servicio VPN de capa 4.";
 choices[56][2] = "Permite establecer Calidad de Servicio (QoS) utilizando el campo EXP.";
 choices[56][3] = "S&oacute;lo es &uacute;til en un contexto LAN.";
 answers[56] = 2;
 units[56] = ['107'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1218. ";
 preguntaids[56] = 1218


//  Id pregunta: 1230 Año de creación de pregunta: 2016
 questions[57]= "58)  La recomendaci&oacute;n ITU-T G.992.3 hace referencia a:";
 choices[57]= new Array();
 choices[57][0] = "ADSL";
 choices[57][1] = "VDSL";
 choices[57][2] = "ADSL2";
 choices[57][3] = "ADSL2+";
 answers[57] = 2;
 units[57] = ['106'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1230. ";
 preguntaids[57] = 1230


//  Id pregunta: 1240 Año de creación de pregunta: 2016
 questions[58]= "59)  La longitud de clave que se usa en el cifrado opcional de DECT, el denominado DECT Standard Cipher (DSC) es:";
 choices[58]= new Array();
 choices[58][0] = "32 bits.";
 choices[58][1] = "64 bits.";
 choices[58][2] = "128 bits.";
 choices[58][3] = "256 bits.";
 answers[58] = 1;
 units[58] = ['117'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1240. ";
 preguntaids[58] = 1240


//  Id pregunta: 1238 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;A qu&eacute; generaci&oacute;n pertenece UMTS?";
 choices[59]= new Array();
 choices[59][0] = "2G";
 choices[59][1] = "3G";
 choices[59][2] = "3.5G";
 choices[59][3] = "4G";
 answers[59] = 1;
 units[59] = ['117'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 1238. ";
 preguntaids[59] = 1238


//  Id pregunta: 1251 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo al Cuadro Nacional de Atribuciones de Frecuencias del Ministerio de Industria, &iquest;qu&eacute; frecuencia est&aacute; reservada a la Eurobaliza para ferrocarriles?";
 choices[60]= new Array();
 choices[60][0] = "457 KHz";
 choices[60][1] = "27,095 MHz";
 choices[60][2] = "93,9 MHz";
 choices[60][3] = "1.600 MHz";
 answers[60] = 1;
 units[60] = ['121'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1251. ";
 preguntaids[60] = 1251


//  Id pregunta: 1222 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l es la direcci&oacute;n de broadcast de la subred 172.17.11.32/27?";
 choices[61]= new Array();
 choices[61][0] = "172.17.11.255";
 choices[61][1] = "172.17.11.63";
 choices[61][2] = "172.17.11.47";
 choices[61][3] = "172.17.255.255";
 answers[61] = 1;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1222. ";
 preguntaids[61] = 1222


//  Id pregunta: 1232 Año de creación de pregunta: 2016
 questions[62]= "63)  Tal y como indica la Ley 9/2014, General de Telecomunicaciones, en su art&iacute;culo 84, tienen competencia sancionadora (se&ntilde;ale la respuesta FALSA):";
 choices[62]= new Array();
 choices[62][0] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[62][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[62][2] = "El Ministro de Industria, Energ&iacute;a y Turismo.";
 choices[62][3] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[62] = 2;
 units[62] = ['121'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 1232. ";
 preguntaids[62] = 1232


//  Id pregunta: 1387 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[63]= new Array();
 choices[63][0] = "Ping";
 choices[63][1] = "ICMP";
 choices[63][2] = "PPP";
 choices[63][3] = "RSVP";
 answers[63] = 1;
 units[63] = ['102'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1387. ";
 preguntaids[63] = 1387


//  Id pregunta: 1212 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; n&uacute;meros de puerto TCP tienen asignados por IANA los protocolos IMAP e IMAPS (IMAP4 sobre TLS/SSL)?";
 choices[64]= new Array();
 choices[64][0] = "IMAP 143 e IMAPS 993.";
 choices[64][1] = "IMAPS 143 e IMAP 993.";
 choices[64][2] = "IMAP 193 e IMAPS 443.";
 choices[64][3] = "IMAPS 193 e IMAP 443.";
 answers[64] = 0;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1212. ";
 preguntaids[64] = 1212


//  Id pregunta: 1391 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique que direcci&oacute;n IPv6 de las siguientes NO es correcta:";
 choices[65]= new Array();
 choices[65][0] = "::1";
 choices[65][1] = "2022::0ab7::1528:67bb";
 choices[65][2] = "::..";
 choices[65][3] = "::212.200.31.255";
 answers[65] = 1;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1391. ";
 preguntaids[65] = 1391


//  Id pregunta: 1208 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:";
 choices[66]= new Array();
 choices[66][0] = "SetRequest PDU";
 choices[66][1] = "InformRequest PDU";
 choices[66][2] = "Report PDU";
 choices[66][3] = "GetBackRequest PDU";
 answers[66] = 3;
 units[66] = ['114'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1208. ";
 preguntaids[66] = 1208


//  Id pregunta: 1193 Año de creación de pregunta: 2016
 questions[67]= "68)  El comando ping es el acr&oacute;nimo de:";
 choices[67]= new Array();
 choices[67][0] = "Packet Internet Group.";
 choices[67][1] = "Packet Internet Gangway.";
 choices[67][2] = "Packet Internet Gate.";
 choices[67][3] = "Packet Internet Groper.";
 answers[67] = 3;
 units[67] = ['109'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1193. ";
 preguntaids[67] = 1193


//  Id pregunta: 1130 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique el n&uacute;mero de puerto que deber&iacute;a usarse s&iacute; se quiere configurar un servicio para usar el protocolo de configuraci&oacute;n din&aacute;mica de host DHCP para IPv6:";
 choices[68]= new Array();
 choices[68][0] = "58";
 choices[68][1] = "169";
 choices[68][2] = "389";
 choices[68][3] = "547";
 answers[68] = 3;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1130. ";
 preguntaids[68] = 1130


//  Id pregunta: 1249 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es un elemento de una red MPLS seg&uacute;n el RFC 3031?";
 choices[69]= new Array();
 choices[69][0] = "LSR - Label Switching Router.";
 choices[69][1] = "LDP - Label Distribution Protocol.";
 choices[69][2] = "ILM - Incoming Label Mode.";
 choices[69][3] = "LSP - Label Switched Path.";
 answers[69] = 2;
 units[69] = ['107'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 1249. ";
 preguntaids[69] = 1249


//  Id pregunta: 1129 Año de creación de pregunta: 2016
 questions[70]= "71)  La unidad de datos intercambiada en la capa de transporte, seg&uacute;n el modelo OSI de ISO, es:";
 choices[70]= new Array();
 choices[70][0] = "TPDU.";
 choices[70][1] = "Paquete.";
 choices[70][2] = "Trama.";
 choices[70][3] = "TCDU.";
 answers[70] = 0;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1129. ";
 preguntaids[70] = 1129


//  Id pregunta: 1066 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes sistemas proporciona la funcionalidad de Single Sign-On basada en tickets?";
 choices[71]= new Array();
 choices[71][0] = "KERBEROS.";
 choices[71][1] = "STORK.";
 choices[71][2] = "SAML.";
 choices[71][3] = "OPENID.";
 answers[71] = 0;
 units[71] = ['120'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1066. ";
 preguntaids[71] = 1066


//  Id pregunta: 1360 Año de creación de pregunta: 2016
 questions[72]= "73)  RMAN es:";
 choices[72]= new Array();
 choices[72][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[72][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[72][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[72][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[72] = 2;
 units[72] = ['114'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1360. ";
 preguntaids[72] = 1360


//  Id pregunta: 1179 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; tienen en com&uacute;n los lenguajes ASP, JSP y PHP?";
 choices[73]= new Array();
 choices[73][0] = "Los tres son lenguajes interpretados.";
 choices[73][1] = "Los tres son lenguajes que se ejecutan en el lado cliente.";
 choices[73][2] = "Los tres son lenguajes que se ejecutan en el lado servidor.";
 choices[73][3] = "ASP Y JSP son ejecutados en el lado servidor, mientras que PHP s&oacute;lo es ejecutado en el lado cliente.";
 answers[73] = 2;
 units[73] = ['103'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 1179. ";
 preguntaids[73] = 1179


//  Id pregunta: 1383 Año de creación de pregunta: 2016
 questions[74]= "75)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a que subred pertenece.";
 choices[74]= new Array();
 choices[74][0] = "95.26.35.144/30";
 choices[74][1] = "95.26.35.144/29";
 choices[74][2] = "95.26.35.128/27";
 choices[74][3] = "95.26.35.128/25";
 answers[74] = 2;
 units[74] = ['109'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1383. ";
 preguntaids[74] = 1383


