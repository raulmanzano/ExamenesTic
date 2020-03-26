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
//  Id pregunta: 2528 Año de creación de pregunta: 2004
 questions[0]= "1)  A finales del a&ntilde;o 2003, la industria lanz&oacute; un est&aacute;ndar H.350 de videoconferencia con el fin de impulsar el despliegue de este tipo de sistemas. &iquest;Sabr&iacute;a indicar en qu&eacute; consiste fundamentalmente?";
 choices[0]= new Array();
 choices[0][0] = "Permite una conversaci&oacute;n y negociaci&oacute;n sobre la calidad de los terminales sobre un protocolo HTTP entre dos extremos remotos";
 choices[0][1] = "Complementa el est&aacute;ndar H.323 para soportar transmisi&oacute;n por l&iacute;neas ADSL";
 choices[0][2] = "Define un servicio de directorio basado en LDAP para usuarios y equipos de videoconferencia.";
 choices[0][3] = "Todas las anteriores";
 answers[0] = 2;
 units[0] = ['122'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 2528. ";
 preguntaids[0] = 2528


//  Id pregunta: 6922 Año de creación de pregunta: 2010
 questions[1]= "2)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[1]= new Array();
 choices[1][0] = "Las MCUs permiten sesiones de videoconferencia multipunto con tres o mas localizaciones.";
 choices[1][1] = "Las soluciones de videoconferencia sin MCUs requieren un menor ancho de banda.";
 choices[1][2] = "En las soluciones de videoconferencia con MCU cada equipo env&iacute;a la informaci&oacute;n de audio y video con la MCU y esta la env&iacute;a al destinatario.";
 choices[1][3] = "Las soluciones de videoconferencia sin MCU necesitan equipos con mayor coste.";
 answers[1] = 1;
 units[1] = ['122'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 6922. ";
 preguntaids[1] = 6922


//  Id pregunta: 6600 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;Cual de las siguientes puede ser utilizada para videoconferencia?";
 choices[2]= new Array();
 choices[2][0] = "ATM";
 choices[2][1] = "H.323";
 choices[2][2] = "VRVS";
 choices[2][3] = "Todas las anteriores";
 answers[2] = 3;
 units[2] = ['122'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 6600. ";
 preguntaids[2] = 6600


//  Id pregunta: 8970 Año de creación de pregunta: 2013
 questions[3]= "4)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.329:";
 choices[3]= new Array();
 choices[3][0] = "Es un protocolo que define la se&ntilde;alizaci&oacute;n de llamadas";
 choices[3][1] = "Es un protocolo que permite la inclusi&oacute;n de tr&aacute;fico de datos";
 choices[3][2] = "Especifica un protocolo para el control y etiquetado de dos canales simult&aacute;neos en una &uacute;nica videoconferencia";
 choices[3][3] = "Simplifica y complementa al protocolo T.120";
 answers[3] = 0;
 units[3] = ['122'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8970. ";
 preguntaids[3] = 8970


//  Id pregunta: 8243 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;A qu&eacute; componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;?";
 choices[4]= new Array();
 choices[4][0] = "Proxy Server.";
 choices[4][1] = "Account Server.";
 choices[4][2] = "Redirect Server.";
 choices[4][3] = "Registrar Server.";
 answers[4] = 3;
 units[4] = ['122'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8243. Examen UPM A2 2011";
 preguntaids[4] = 8243


//  Id pregunta: 8146 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[5]= new Array();
 choices[5][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[5][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[5][2] = "PCM (Pulse-Code Modulation).";
 choices[5][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[5] = 2;
 units[5] = ['122'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8146. Examen TIC A2 2010 interna";
 preguntaids[5] = 8146


//  Id pregunta: 3165 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Qu&eacute; se entiende por audioconferencia?:";
 choices[6]= new Array();
 choices[6][0] = "Servicio que permite a m&aacute;s de dos usuarios participar simult&aacute;neamente en una &uacute;nica conversaci&oacute;n";
 choices[6][1] = "Servicio que permite a un usuario telef&oacute;nico depositar mensajes de voz en un audiobuz&oacute;n";
 choices[6][2] = "Servicio que suministra una informaci&oacute;n grabada de tipo gen&eacute;rico";
 choices[6][3] = "Servicio de telefon&iacute;a m&oacute;vil en grupo cerrado de usuarios";
 answers[6] = 0;
 units[6] = ['122'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 3165. ";
 preguntaids[6] = 3165


//  Id pregunta: 4818 Año de creación de pregunta: 2002
 questions[7]= "8)  En las necesidades para establecer una aplicaci&oacute;n de videoconferencia, es falso que se requiera:";
 choices[7]= new Array();
 choices[7][0] = "una compresi&oacute;n / descompresi&oacute;n en tiempo real";
 choices[7][1] = "unos l&iacute;mites m&iacute;nimos y m&aacute;ximos para el retardo de comunicaci&oacute;n";
 choices[7][2] = "una sincronizaci&oacute;n de audio y de video";
 choices[7][3] = "un protocolo de se&ntilde;alizaci&oacute;n";
 answers[7] = 1;
 units[7] = ['122'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4818. ";
 preguntaids[7] = 4818


//  Id pregunta: 6924 Año de creación de pregunta: 2010
 questions[8]= "9)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[8]= new Array();
 choices[8][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[8][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[8][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[8][3] = "Todas las anteriores son correctas.";
 answers[8] = 3;
 units[8] = ['122'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6924. ";
 preguntaids[8] = 6924


//  Id pregunta: 926 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes NO es un m&eacute;todo v&aacute;lido de petici&oacute;n SIP seg&uacute;n la especificaci&oacute;n RFC 3261?";
 choices[9]= new Array();
 choices[9][0] = "PUSH";
 choices[9][1] = "OPTIONS";
 choices[9][2] = "INVITE";
 choices[9][3] = "REGISTER";
 answers[9] = 0;
 units[9] = ['122'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 926. AGE A2 2015";
 preguntaids[9] = 926


//  Id pregunta: 10385 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;A partir de cuanto tiempo de retardo hace que la calidad de una videoconferencia sea cr&iacute;tica?";
 choices[10]= new Array();
 choices[10][0] = "50 ms";
 choices[10][1] = "150 ms";
 choices[10][2] = "300 ms";
 choices[10][3] = "600 ms";
 answers[10] = 2;
 units[10] = ['122'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10385. ";
 preguntaids[10] = 10385


//  Id pregunta: 6794 Año de creación de pregunta: 2010
 questions[11]= "12)  SIP (Session Initiation Protocol) es un protocolo que sirve para:";
 choices[11]= new Array();
 choices[11][0] = "Establecer videoconferencias sobre redes con calidad de servicio (ancho de banda garantizado).";
 choices[11][1] = "Realizar el transporte de flujos multimedia.";
 choices[11][2] = "Iniciar una sesi&oacute;n de correo web.";
 choices[11][3] = "Control y se&ntilde;alizaci&oacute;n, permite establecer y gestionar llamadas/conexiones de flujos multimedia.";
 answers[11] = 3;
 units[11] = ['122'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6794. TIC A 2009";
 preguntaids[11] = 6794


//  Id pregunta: 9653 Año de creación de pregunta: 2014
 questions[12]= "13)  Los sistemas de videoconferencia";
 choices[12]= new Array();
 choices[12][0] = "pueden utilizar conmutaci&oacute;n de circuitos sobre la RDSI usando el protocolo H.326.";
 choices[12][1] = "pueden utilizar redes IP con el protocolo H.323.";
 choices[12][2] = "pueden utilizar redes IP s&oacute;lo si usan el protocolo SIP.";
 choices[12][3] = "pueden utilizar conmutaci&oacute;n de paquetes sobre RDSI, multiplexando las se&ntilde;ales de las distintas localizaciones si usan el protocolo H.328.";
 answers[12] = 1;
 units[12] = ['122'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9653. Examen TIC A1 2013";
 preguntaids[12] = 9653


//  Id pregunta: 8968 Año de creación de pregunta: 2013
 questions[13]= "14)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.323:";
 choices[13]= new Array();
 choices[13][0] = "Es un est&aacute;ndar para videoconferencia sobre redes IP";
 choices[13][1] = "El gatekeeper es un componente principal";
 choices[13][2] = "Utiliza el protocolo H.235 como seguridad (autenticaci&oacute;n, integridad, etc.)";
 choices[13][3] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 answers[13] = 3;
 units[13] = ['122'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8968. ";
 preguntaids[13] = 8968


//  Id pregunta: 9874 Año de creación de pregunta: 2015
 questions[14]= "15)  Polycom, Radvision y Lifesize son:";
 choices[14]= new Array();
 choices[14][0] = "Sistemas de videoconferencia";
 choices[14][1] = "Sistemas de telefon&iacute;a";
 choices[14][2] = "Conectores RDSI";
 choices[14][3] = "C&oacute;decs de video.";
 answers[14] = 0;
 units[14] = ['122'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9874. ";
 preguntaids[14] = 9874


//  Id pregunta: 9715 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cual de los siguientes es un servicio comun de reuniones virtuales para las Administraciones Publicas?";
 choices[15]= new Array();
 choices[15][0] = "Re&uacute;nete";
 choices[15][1] = "Webex";
 choices[15][2] = "Meetic";
 choices[15][3] = "VirtualMeeting";
 answers[15] = 0;
 units[15] = ['122'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9715. http://administracionelectronica.gob.es/ctt/reunete";
 preguntaids[15] = 9715


//  Id pregunta: 8969 Año de creación de pregunta: 2013
 questions[16]= "17)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.245:";
 choices[16]= new Array();
 choices[16][0] = "Es un protocolo para el control multimedia de las llamadas";
 choices[16][1] = "S&oacute;lo lo utiliza el protocolo H.323";
 choices[16][2] = "Aparte del protocolo H.323, lo utilizan otros protocolos (como por ejemplo el protocolo H.234)";
 choices[16][3] = "Es un protocolo de gesti&oacute;n y control";
 answers[16] = 1;
 units[16] = ['122'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8969. ";
 preguntaids[16] = 8969


//  Id pregunta: 9658 Año de creación de pregunta: 2014
 questions[17]= "18)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[17]= new Array();
 choices[17][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235.";
 choices[17][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[17][2] = "permite audioconferencia pero no videoconferencia.";
 choices[17][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[17] = 0;
 units[17] = ['122'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9658. Examen TIC A1 2013";
 preguntaids[17] = 9658


//  Id pregunta: 6920 Año de creación de pregunta: 2010
 questions[18]= "19)  Indique la afirmaci&oacute;n correcta sobre los diferentes codecs de audio y video en videoconferencia H.323";
 choices[18]= new Array();
 choices[18][0] = "G711 y G722 son codecs de audio mientras que H261 y H263 son codecs de video";
 choices[18][1] = "G711 y G722 son codecs de video mientras que H261 y H263 son codecs de audio";
 choices[18][2] = "G711 y H261 son codecs de audio mientras que G722 y H263 son codecs de video";
 choices[18][3] = "G711 y H261 son codecs de video mientras que G722 y H263 son codecs de audio";
 answers[18] = 0;
 units[18] = ['122'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 6920. ";
 preguntaids[18] = 6920


//  Id pregunta: 927 Año de creación de pregunta: 2016
 questions[19]= "20)  Asterisk es:";
 choices[19]= new Array();
 choices[19][0] = "Una antena parab&oacute;lica de tipo Cassegrain que se caracteriza por llevar un segundo reflector cerca de su foco, el cual refleja la onda radiada desde el dispositivo radiante hacia el reflector en las antenas transmisoras.";
 choices[19][1] = "La evoluci&oacute;n del protocolo de autenticaci&oacute;n Kerberos para sistemas en la nube.";
 choices[19][2] = "Un algoritmo de b&uacute;squeda creado y utilizado por Google.";
 choices[19][3] = "Un framework de software libre (bajo licencia GPL) para controlar y gestionar comunicaciones de cualquier tipo (anal&oacute;gicas, digitales o VoIP).";
 answers[19] = 3;
 units[19] = ['122'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 927. AGE A2 2015";
 preguntaids[19] = 927


//  Id pregunta: 7678 Año de creación de pregunta: 2010
 questions[20]= "21)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en la norma del ETSI:";
 choices[20]= new Array();
 choices[20][0] = "ET 30192.";
 choices[20][1] = "ET 20225.";
 choices[20][2] = "ET 12500.";
 choices[20][3] = "ET 10000.";
 answers[20] = 0;
 units[20] = ['122'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7678. Map 2007";
 preguntaids[20] = 7678


//  Id pregunta: 8966 Año de creación de pregunta: 2013
 questions[21]= "22)  En los sistemas de videoconferencia las MCU:";
 choices[21]= new Array();
 choices[21][0] = "Son un componente obligatorio";
 choices[21][1] = "Son un componente opcional";
 choices[21][2] = "Permiten la comunicaci&oacute;n &uacute;nicamente entre dos terminales";
 choices[21][3] = "Permiten sesiones de videoconferencia s&oacute;lo para dos localizaciones remotas simult&aacute;neas";
 answers[21] = 1;
 units[21] = ['122'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8966. ";
 preguntaids[21] = 8966


//  Id pregunta: 1233 Año de creación de pregunta: 2016
 questions[22]= "23)  Entre los m&uacute;ltiples protocolos de se&ntilde;alizaci&oacute;n para VoIP se encuentra:";
 choices[22]= new Array();
 choices[22][0] = "SIP";
 choices[22][1] = "VDSL";
 choices[22][2] = "IMAP";
 choices[22][3] = "POTS";
 answers[22] = 0;
 units[22] = ['122'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1233. ";
 preguntaids[22] = 1233


//  Id pregunta: 10106 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[23]= new Array();
 choices[23][0] = "16, 24, 32 &oacute; 40";
 choices[23][1] = "6, 12, 24 &oacute; 48";
 choices[23][2] = "4, 8, 16 &oacute; 40";
 choices[23][3] = "8, 16, 32 &oacute; 64";
 answers[23] = 0;
 units[23] = ['122'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10106. Examen TIC A2 2014";
 preguntaids[23] = 10106


//  Id pregunta: 7915 Año de creación de pregunta: 2011
 questions[24]= "25)  Referente a la pila de protocolos de la familia ITU H.323 para el tr&aacute;fico multimedia sobre redes IP, la afirmaci&oacute;n correcta es:";
 choices[24]= new Array();
 choices[24][0] = "Requiere el uso del protocolo Registration, Admission and Status (RAS) entre los terminales.";
 choices[24][1] = "Emplea el protocolo TCP/IP para el env&iacute;o de la informaci&oacute;n multimedia pues UDP no garantiza el control de flujo y errores.";
 choices[24][2] = "Emplea Real-Time Control Protocol (RTCP) para la se&ntilde;alizaci&oacute;n (establecimiento, control y finalizaci&oacute;n) de llamadas.";
 choices[24][3] = "Emplea el protocolo T.120 para la inclusi&oacute;n de tr&aacute;fico de datos.";
 answers[24] = 3;
 units[24] = ['122'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7915. Examen TIC A1 2010";
 preguntaids[24] = 7915


//  Id pregunta: 8972 Año de creación de pregunta: 2013
 questions[25]= "26)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[25]= new Array();
 choices[25][0] = "Ancho de banda";
 choices[25][1] = "Jitter o variaci&oacute;n de retardo";
 choices[25][2] = "Eco";
 choices[25][3] = "Todas las respuestas anteriores son correctas";
 answers[25] = 3;
 units[25] = ['122'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8972. ";
 preguntaids[25] = 8972


//  Id pregunta: 3146 Año de creación de pregunta: 2002
 questions[26]= "27)  Respecto a los formatos de compresi&oacute;n de video de la familia H.26x, es falso que:";
 choices[26]= new Array();
 choices[26][0] = "H.261 est&aacute; orientado a caudal constante, m&aacute;s id&oacute;neo para video sobre RDSI";
 choices[26][1] = "H.263 es m&aacute;s eficiente que H.261 y est&aacute; orientado a video sobre internet, con caudal variable";
 choices[26][2] = "No ofrecen compresi&oacute;n temporal, aunque s&iacute; compresi&oacute;n espacial";
 choices[26][3] = "Todo lo anterior es falso";
 answers[26] = 3;
 units[26] = ['122'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 3146. ";
 preguntaids[26] = 3146


//  Id pregunta: 9273 Año de creación de pregunta: 2014
 questions[27]= "28)  El formato MP3:";
 choices[27]= new Array();
 choices[27][0] = "fue dise&ntilde;ado en 1984 en el Instituto Karlsruher.";
 choices[27][1] = "utiliza el algoritmo de compresi&oacute;n Lempel-Ziv-Welch (LZW).";
 choices[27][2] = "fue aprobado por el &ldquo;Motion Picture Experts Group&rdquo; en 1992.";
 choices[27][3] = "permite compresiones del orden de 10 a 1 respecto al formato CD, conp&eacute;rdida de informaci&oacute;n.";
 answers[27] = 3;
 units[27] = ['122'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9273. Examen TIC A1 2013";
 preguntaids[27] = 9273


//  Id pregunta: 1906 Año de creación de pregunta: 2016
 questions[28]= "29)  A que se denomina Jitter en una red de comunicaciones sobre la que se soporta VoIP?";
 choices[28]= new Array();
 choices[28][0] = "AI retardo m&aacute;ximo de un paquete IP en una red de comunicaciones";
 choices[28][1] = "A la variaci&oacute;n del retardo de los paquetes en una red de comunicaciones";
 choices[28][2] = "A la supresi&oacute;n de los silencios mediante la no transmisi&oacute;n de paquetes.";
 choices[28][3] = "Ninguno de los anteriores";
 answers[28] = 1;
 units[28] = ['122'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1906. ";
 preguntaids[28] = 1906


//  Id pregunta: 10384 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes protocolos se utiliza para videoconferencia sobre IP?";
 choices[29]= new Array();
 choices[29][0] = "ITU H.320";
 choices[29][1] = "ITU H.243";
 choices[29][2] = "ITU H.249";
 choices[29][3] = "ITU H.323";
 answers[29] = 3;
 units[29] = ['122'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10384. ";
 preguntaids[29] = 10384


//  Id pregunta: 10767 Año de creación de pregunta: 2015
 questions[30]= "31)  En una red H.323, &iquest;Qui&eacute;n tiene las funciones de DNS?";
 choices[30]= new Array();
 choices[30][0] = "MCU";
 choices[30][1] = "LMU";
 choices[30][2] = "GateKeeper";
 choices[30][3] = "GateControler";
 answers[30] = 2;
 units[30] = ['122'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10767. ";
 preguntaids[30] = 10767


//  Id pregunta: 6923 Año de creación de pregunta: 2010
 questions[31]= "32)  Indique cual de las siguientes no es una funci&oacute;n de los gatekeepers:";
 choices[31]= new Array();
 choices[31][0] = "Control del Ancho de Banda.";
 choices[31][1] = "Rechazo de llamadas seg&uacute;n distintos criterios.";
 choices[31][2] = "Control de comunicaci&oacute;n con MCUs o gateways.";
 choices[31][3] = "Comunicaci&oacute;n con redes de conmutaci&oacute;n de circuitos.";
 answers[31] = 3;
 units[31] = ['122'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6923. ";
 preguntaids[31] = 6923


//  Id pregunta: 8346 Año de creación de pregunta: 2011
 questions[32]= "33)  En los sistemas de colaboraci&oacute;n s&iacute;ncronos:";
 choices[32]= new Array();
 choices[32][0] = "No es posible utilizar la tecnolog&iacute;a multicast";
 choices[32][1] = "Todos est&aacute;n basados en interfaces WWW";
 choices[32][2] = "Se ampl&iacute;an las funcionalidades de los sistemas de videoconferencia cl&aacute;sicos.";
 choices[32][3] = "Su est&aacute;ndar viene definido por el W3C";
 answers[32] = 2;
 units[32] = ['122'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8346. Examen UC3M 2010";
 preguntaids[32] = 8346


//  Id pregunta: 8343 Año de creación de pregunta: 2011
 questions[33]= "34)  &iquest;Qu&eacute; est&aacute;ndar debe de cumplir un sistema de videoconferencia H.323 para poder compartir datos?";
 choices[33]= new Array();
 choices[33][0] = "H.239";
 choices[33][1] = "H.264";
 choices[33][2] = "H.263";
 choices[33][3] = "H.240";
 answers[33] = 0;
 units[33] = ['122'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8343. Examen UC3M 2010";
 preguntaids[33] = 8343


//  Id pregunta: 8973 Año de creación de pregunta: 2013
 questions[34]= "35)  Un valor 3 en la escala MOS (Mean Opinion Score) indica que la calidad de la se&ntilde;al es:";
 choices[34]= new Array();
 choices[34][0] = "Adecuada";
 choices[34][1] = "Pobre";
 choices[34][2] = "Buena";
 choices[34][3] = "Ninguna de las anteriores es correcta";
 answers[34] = 0;
 units[34] = ['122'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8973. ";
 preguntaids[34] = 8973


//  Id pregunta: 7284 Año de creación de pregunta: 2010
 questions[35]= "36)  La telefon&iacute;a IP";
 choices[35]= new Array();
 choices[35][0] = "Combina datos, voz y video en un &uacute;nico paquete";
 choices[35][1] = "Separa la red de datos de la voz";
 choices[35][2] = "Los procesos utilizados no dependen del tiempo";
 choices[35][3] = "A y C son correctas";
 answers[35] = 0;
 units[35] = ['122'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7284. ";
 preguntaids[35] = 7284


//  Id pregunta: 10160 Año de creación de pregunta: 2015
 questions[36]= "37)  Respecto a RTMP (Real Time Messaging Protocol), se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "Junto con ICMP proporciona las funciones de monitorizaci&oacute;n y control de TCP/IP.";
 choices[36][1] = "Permite la gesti&oacute;n conjunta de mensajer&iacute;a instant&aacute;nea y mensajes cortos GSM.";
 choices[36][2] = "Se emplea para la emisi&oacute;n en tiempo real de streaming de v&iacute;deo.";
 choices[36][3] = "Define el est&aacute;ndar de comunicaciones para los procesadores de sistemas de tiempo real cr&iacute;tico.";
 answers[36] = 2;
 units[36] = ['122'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10160. Examen TIC A1 2014";
 preguntaids[36] = 10160


//  Id pregunta: 7845 Año de creación de pregunta: 2011
 questions[37]= "38)  Respecto al API, Streaming API for XML (StAX), indicar la afirmaci&oacute;n correcta:";
 choices[37]= new Array();
 choices[37][0] = "Emplea &quot;push parsing&quot;.";
 choices[37][1] = "Permite vistas XML de datos no XML.";
 choices[37][2] = "Es un API unidireccional.";
 choices[37][3] = "El cliente del API no controla el thread de la aplicaci&oacute;n.";
 answers[37] = 1;
 units[37] = ['122'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7845. Examen TIC A1 2010";
 preguntaids[37] = 7845


//  Id pregunta: 5935 Año de creación de pregunta: 2007
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[38]= new Array();
 choices[38][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[38][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y video";
 choices[38][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[38][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[38] = 0;
 units[38] = ['109', '122'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5935. ";
 preguntaids[38] = 5935


//  Id pregunta: 6438 Año de creación de pregunta: 2003
 questions[39]= "40)  Indicar la respuesta falsa";
 choices[39]= new Array();
 choices[39][0] = "Los niveles del lenguaje son: f&oacute;nico, l&eacute;xico, sint&aacute;ctico y sem&aacute;ntico";
 choices[39][1] = "La se&ntilde;al de voz se puede analizar en dos dominios, el espectral y el temporal";
 choices[39][2] = "La frecuencia fundamental de la voz representa la frecuencia de vibraci&oacute;n de las cuerdas vocales";
 choices[39][3] = "La frecuencia fundamental de la voz masculina es de 120 a 500 Hz y la femenina de 50 a 250 Hz";
 answers[39] = 3;
 units[39] = ['122'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 6438. ";
 preguntaids[39] = 6438


//  Id pregunta: 6125 Año de creación de pregunta: 2003
 questions[40]= "41)  &iquest;Qu&eacute; se utiliza para codificar la voz que se transmite por la red IP?:";
 choices[40]= new Array();
 choices[40][0] = "Retardo";
 choices[40][1] = "Encriptado";
 choices[40][2] = "C&oacute;decs";
 choices[40][3] = "Claves";
 answers[40] = 2;
 units[40] = ['122'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 6125. Examen TIC A1 MAP 2007";
 preguntaids[40] = 6125


//  Id pregunta: 4716 Año de creación de pregunta: 2002
 questions[41]= "42)  H.320 es el est&aacute;ndar para:";
 choices[41]= new Array();
 choices[41][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[41][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[41][2] = "videoconferencia multipunto sobre RDSI";
 choices[41][3] = "videconferencia multipunto sobre internet";
 answers[41] = 2;
 units[41] = ['122'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4716. ";
 preguntaids[41] = 4716


//  Id pregunta: 8971 Año de creación de pregunta: 2013
 questions[42]= "43)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[42]= new Array();
 choices[42][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[42][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[42][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[42][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[42] = 1;
 units[42] = ['122'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8971. ";
 preguntaids[42] = 8971


//  Id pregunta: 8967 Año de creación de pregunta: 2013
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.320:";
 choices[43]= new Array();
 choices[43][0] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 choices[43][1] = "Utiliza como est&aacute;ndares de cifrado H.233 y H.244";
 choices[43][2] = "Uno de los tama&ntilde;os de cuadro es CIF (352x288)";
 choices[43][3] = "Uno de los tama&ntilde;os de cuadro es QCIF (176x144)";
 answers[43] = 1;
 units[43] = ['122'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 8967. ";
 preguntaids[43] = 8967


//  Id pregunta: 7426 Año de creación de pregunta: 2010
 questions[44]= "45)  La recomendaci&oacute;n de la UIT H.323";
 choices[44]= new Array();
 choices[44][0] = "Se utiliza &uacute;nicamente en redes RDSI";
 choices[44][1] = "Permite audioconferencia pero no videoconferencia";
 choices[44][2] = "Se le puede a&ntilde;adir seguridad seg&uacute;n la recomendaci&oacute;n de la UIT H.325";
 choices[44][3] = "Fue definida para redes de conmutaci&oacute;n de circuitos";
 answers[44] = 2;
 units[44] = ['122'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 7426. Examen TIC B 2009";
 preguntaids[44] = 7426


//  Id pregunta: 7960 Año de creación de pregunta: 2011
 questions[45]= "46)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz?";
 choices[45]= new Array();
 choices[45][0] = "G.711.";
 choices[45][1] = "G.726.";
 choices[45][2] = "G.728.";
 choices[45][3] = "G.729.";
 answers[45] = 1;
 units[45] = ['122'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 7960. Examen TIC A2 2010";
 preguntaids[45] = 7960


//  Id pregunta: 1768 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de los siguientes no es un protocolo de VoIP:";
 choices[46]= new Array();
 choices[46][0] = "MGCP";
 choices[46][1] = "SIP";
 choices[46][2] = "H323";
 choices[46][3] = "TDM";
 answers[46] = 3;
 units[46] = ['122'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1768. ";
 preguntaids[46] = 1768


//  Id pregunta: 2544 Año de creación de pregunta: 2004
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no se corresponde con un est&aacute;ndar de audio?";
 choices[47]= new Array();
 choices[47][0] = "mp3";
 choices[47][1] = "wav";
 choices[47][2] = "mod";
 choices[47][3] = "rmm";
 answers[47] = 3;
 units[47] = ['122'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 2544. ";
 preguntaids[47] = 2544


//  Id pregunta: 5024 Año de creación de pregunta: 2002
 questions[48]= "49)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[48]= new Array();
 choices[48][0] = "H.321";
 choices[48][1] = "H.320";
 choices[48][2] = "H.323";
 choices[48][3] = "H.324";
 answers[48] = 2;
 units[48] = ['122'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5024. ";
 preguntaids[48] = 5024


