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
//  Id pregunta: 1648 Año de creación de pregunta: 2016
 questions[0]= "1)  En voz sobre IP, integraci&oacute;n de voz y datos, se&ntilde;ale cu&aacute;l es el protocolo que se encarga de los mensajes de control (participantes, medidas de calidad, etc.):";
 choices[0]= new Array();
 choices[0][0] = "UDP";
 choices[0][1] = "RTTP";
 choices[0][2] = "G729";
 choices[0][3] = "RTCP";
 answers[0] = 3;
 units[0] = ['110'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1648. ";
 preguntaids[0] = 1648


//  Id pregunta: 1650 Año de creación de pregunta: 2016
 questions[1]= "2)  Entre las ventajas del protocolo de control MGCP (Media Gateway Control Protocol) NO se encuentra:";
 choices[1]= new Array();
 choices[1][0] = "Escalabilidad";
 choices[1][1] = "Dependencia del fabricante";
 choices[1][2] = "Fiabilidad";
 choices[1][3] = "Tiempo de desarrollo reducido";
 answers[1] = 1;
 units[1] = ['110'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1650. ";
 preguntaids[1] = 1650


//  Id pregunta: 8850 Año de creación de pregunta: 2013
 questions[2]= "3)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP:";
 choices[2]= new Array();
 choices[2][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[2][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al c&oacute;dec G.711.";
 choices[2][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = 0;
 units[2] = ['110'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8850. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[2] = 8850


//  Id pregunta: 2081 Año de creación de pregunta: 2002
 questions[3]= "4)  En Espa&ntilde;a la portabilidad del n&uacute;mero de abonado:";
 choices[3]= new Array();
 choices[3][0] = "Es obligatoria desde la Orden Ministerial de 4 de agosto de 1997";
 choices[3][1] = "Se basa en diferentes tecnolog&iacute;as: redirecci&oacute;n de llamada y red inteligente";
 choices[3][2] = "Permite a un abonado de un operador de telefon&iacute;a cambiar de operador conservando el n&uacute;mero";
 choices[3][3] = "Todas las respuestas anteriores son correctas";
 answers[3] = 3;
 units[3] = ['110'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 2081. ";
 preguntaids[3] = 2081


//  Id pregunta: 4568 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Cu&aacute;l es el servicio del nivel de enlace del modelo OSI m&aacute;s apropiado para transmitir voz?:";
 choices[4]= new Array();
 choices[4][0] = "Servicio con acuse de recibo y sin conexi&oacute;n";
 choices[4][1] = "Servicio sin acuse de recibo y sin conexi&oacute;n";
 choices[4][2] = "Servicio con acuse de recibo y orientado a la conexi&oacute;n";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = 1;
 units[4] = ['110'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4568. ";
 preguntaids[4] = 4568


//  Id pregunta: 5694 Año de creación de pregunta: 2007
 questions[5]= "6)  Dentro de la soluci&oacute;n de telefon&iacute;a IP de Cisco, el componente encargado de almacenar los mensajes del buz&oacute;n de voz recibe el nombre de:";
 choices[5]= new Array();
 choices[5][0] = "Cisco CallManager";
 choices[5][1] = "Cisco Unity";
 choices[5][2] = "Cisco VoiceCom";
 choices[5][3] = "CiscoWorks";
 answers[5] = 1;
 units[5] = ['110'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5694. ";
 preguntaids[5] = 5694


//  Id pregunta: 6235 Año de creación de pregunta: 2003
 questions[6]= "7)  El transporte de voz en tiempo real a trav&eacute;s de redes IP se efect&uacute;a por medio de los protocolos:";
 choices[6]= new Array();
 choices[6][0] = "MPLS sobre UDP";
 choices[6][1] = "RVSP";
 choices[6][2] = "RTP sobre TCP";
 choices[6][3] = "RTP sobre UDP";
 answers[6] = 3;
 units[6] = ['110'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 6235. Examen TIC A Castilla La Mancha 2007";
 preguntaids[6] = 6235


//  Id pregunta: 6231 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;Qu&eacute; tama&ntilde;o de celda se utiliza en ATM (Asynchronous Transfer Mode)?";
 choices[7]= new Array();
 choices[7][0] = "Tiene un tama&ntilde;o variable, al tratarse de conmutaci&oacute;n de paquetes de longitud variable.";
 choices[7][1] = "53 bytes";
 choices[7][2] = "1024 bytes";
 choices[7][3] = "64 bytes";
 answers[7] = 1;
 units[7] = ['110'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 6231. Examen TIC A Castilla La Mancha 2007";
 preguntaids[7] = 6231


//  Id pregunta: 6907 Año de creación de pregunta: 2010
 questions[8]= "9)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[8]= new Array();
 choices[8][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[8][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[8][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[8][3] = "Todas las respuestas anteriores son correctas";
 answers[8] = 3;
 units[8] = ['110'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6907. ";
 preguntaids[8] = 6907


//  Id pregunta: 2953 Año de creación de pregunta: 2002
 questions[9]= "10)  La t&eacute;cnica ADPCM:";
 choices[9]= new Array();
 choices[9][0] = "Se utiliza para comprimir im&aacute;genes est&aacute;ticas";
 choices[9][1] = "Se basa en la modelizaci&oacute;n por fractales";
 choices[9][2] = "Tambi&eacute;n es llamada LZW (Lempel, Ziv y Welch), y se usa para compresi&oacute;n de audio";
 choices[9][3] = "Ninguna de las anteriores es verdadera";
 answers[9] = 3;
 units[9] = ['107', '110'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 2953. ";
 preguntaids[9] = 2953


//  Id pregunta: 7614 Año de creación de pregunta: 2010
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[10]= new Array();
 choices[10][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas de tiempo real.";
 choices[10][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y v&iacute;deo interactivos.";
 choices[10][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889.";
 choices[10][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol) con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece este protocolo.";
 answers[10] = 0;
 units[10] = ['110'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7614. Map 2006";
 preguntaids[10] = 7614


//  Id pregunta: 9392 Año de creación de pregunta: 2014
 questions[11]= "12)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[11]= new Array();
 choices[11][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[11][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[11][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[11][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[11] = 2;
 units[11] = ['110'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9392. Examen TIC A2  2013";
 preguntaids[11] = 9392


//  Id pregunta: 4843 Año de creación de pregunta: 2002
 questions[12]= "13)  En transmisi&oacute;n de datos, &iquest;qu&eacute; ventaja reporta el uso de c&eacute;lulas peque&ntilde;as de longitud fija?:";
 choices[12]= new Array();
 choices[12][0] = "Utilizaci&oacute;n m&aacute;s eficiente del enlace ya que un dispositivo puede enviar c&eacute;lulas sin necesidad de un slot 'libre' de tiempo";
 choices[12][1] = "Minimizaci&oacute;n de esperas intermitentes que pueden derivarse de la espera para que se transmita un paquete largo";
 choices[12][2] = "Una estaci&oacute;n puede enviar muchas c&eacute;lulas en fila sin tener que esperar para est&eacute; disponible su slot de tiempo";
 choices[12][3] = "Puede usarse un pol&iacute;tica de tr&aacute;fico para comparar el tr&aacute;fico real con el acordado";
 answers[12] = 1;
 units[12] = ['110'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4843. ";
 preguntaids[12] = 4843


//  Id pregunta: 9379 Año de creación de pregunta: 2014
 questions[13]= "14)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[13]= new Array();
 choices[13][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[13][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[13][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[13][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[13] = 3;
 units[13] = ['110'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9379. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[13] = 9379


//  Id pregunta: 9728 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;Qu&eacute; RFC define el Estandar SIP?";
 choices[14]= new Array();
 choices[14][0] = "RFC 3160";
 choices[14][1] = "RFC 6130";
 choices[14][2] = "RFC 3610";
 choices[14][3] = "RFC 3261";
 answers[14] = 3;
 units[14] = ['110'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9728. ";
 preguntaids[14] = 9728


//  Id pregunta: 5190 Año de creación de pregunta: 2003
 questions[15]= "16)  Una de las siguientes afirmaciones no es correcta:";
 choices[15]= new Array();
 choices[15][0] = "El protocolo SIP se utiliza en la red de transporte de una red UMTS";
 choices[15][1] = "H.323 y SIP son protocolos que se utilizan en VoIP (Voz sobre IP)";
 choices[15][2] = "H.323 es un protocolo mucho m&aacute;s sencillo de implementar que SIP";
 choices[15][3] = "Los primeros productos comerciales de VoIP utilizaban H.323";
 answers[15] = 2;
 units[15] = ['110'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5190. ";
 preguntaids[15] = 5190


//  Id pregunta: 1409 Año de creación de pregunta: 2016
 questions[16]= "17)  La medida Mean Opinion Score (MOS) se utiliza en:";
 choices[16]= new Array();
 choices[16][0] = "La ponderaci&oacute;n de alternativas en el m&eacute;todo Delphi.";
 choices[16][1] = "La calidad de la voz sobre el protocolo VoIP.";
 choices[16][2] = "La evaluaci&oacute;n de riesgos del m&eacute;todo Magerit v2.";
 choices[16][3] = "La explotaci&oacute;n de almacenes de datos en CRM (Customer Relationship Management).";
 answers[16] = 1;
 units[16] = ['110'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1409. ";
 preguntaids[16] = 1409


//  Id pregunta: 4334 Año de creación de pregunta: 2004
 questions[17]= "18)  Indique a qu&eacute; velocidad aproximada dentro de la Jerarqu&iacute;a Digital S&iacute;ncrona corresponde a un contenedor OC-3 de la Jerarqu&iacute;a SONET:";
 choices[17]= new Array();
 choices[17][0] = "52 Mbps";
 choices[17][1] = "155 Mbps";
 choices[17][2] = "384 Mpbs";
 choices[17][3] = "Ninguno de los anteriores";
 answers[17] = 1;
 units[17] = ['110'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4334. ";
 preguntaids[17] = 4334


//  Id pregunta: 5429 Año de creación de pregunta: 2007
 questions[18]= "19)  El protocolo RAS de la pila de protocolos H323 de la ITU:";
 choices[18]= new Array();
 choices[18][0] = "Son las siglas de Registration, Admission and Signalling";
 choices[18][1] = "Funciona sobre el protocolo de transporte TCP";
 choices[18][2] = "Es un protocolo de se&ntilde;alizacion entre los elementos de red y el Gateway";
 choices[18][3] = "El canal de se&ntilde;alizaci&oacute;n RAS se abre antes de que se establezca cualquier otro canal entre puntos extremos H.323";
 answers[18] = 3;
 units[18] = ['110'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5429. ";
 preguntaids[18] = 5429


//  Id pregunta: 6351 Año de creación de pregunta: 2003
 questions[19]= "20)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n corresponde a:";
 choices[19]= new Array();
 choices[19][0] = "El Ministerio de  Energia, Turismo y Agenda Digital";
 choices[19][1] = "Gobierno";
 choices[19][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[19][3] = "Ninguno de los anteriores";
 answers[19] = 1;
 units[19] = ['110'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 6351. ";
 preguntaids[19] = 6351


//  Id pregunta: 6905 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[20]= new Array();
 choices[20][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[20][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[20][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[20][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[20] = 0;
 units[20] = ['110'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 6905. ";
 preguntaids[20] = 6905


//  Id pregunta: 1210 Año de creación de pregunta: 2016
 questions[21]= "22)  La especificaci&oacute;n del protocolo RTP (Real-Time Transport Protocol) corresponde a:";
 choices[21]= new Array();
 choices[21][0] = "ITU-T";
 choices[21][1] = "IETF";
 choices[21][2] = "W3C";
 choices[21][3] = "IEEE";
 answers[21] = 1;
 units[21] = ['110'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1210. ";
 preguntaids[21] = 1210


//  Id pregunta: 4510 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes no corresponde a una definici&oacute;n correcta de especificaci&oacute;n de la ITU-T?:";
 choices[22]= new Array();
 choices[22][0] = "X.25: interfaz entre ETD y ETCD para terminales en modo paquete en redes p&uacute;blicas de conmutaci&oacute;n de paquetes";
 choices[22][1] = "X.29: define los mecanismos y protocolos para la conexi&oacute;n de terminales as&iacute;ncronos a trav&eacute;s de la red X25, usando un PAD";
 choices[22][2] = "X.32: interfaz entre ETD y ETCD para terminales telegr&aacute;ficos accediendo a redes p&uacute;blicas de conmutaci&oacute;n de paquetes v&iacute;a red de conmutaci&oacute;n de circuitos";
 choices[22][3] = "X.75: interconexi&oacute;n de redes p&uacute;blicas de conmutaci&oacute;n de paquetes y conexi&oacute;n de nodos de las mismas";
 answers[22] = 2;
 units[22] = ['110'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4510. ";
 preguntaids[22] = 4510


//  Id pregunta: 7803 Año de creación de pregunta: 2010
 questions[23]= "24)  Los fabricantes e investigadores hacen referencia a diversos factores determinantes en la calidad de la trasmisi&oacute;n de la voz, de entre los siguientes, determine el &laquo;cr&iacute;tico&raquo; para aplicaciones de tiempo real como la voz y el v&iacute;deo sobre IP:";
 choices[23]= new Array();
 choices[23][0] = "Jitter.";
 choices[23][1] = "Throughput.";
 choices[23][2] = "Delay.";
 choices[23][3] = "Packet Loss.";
 answers[23] = 0;
 units[23] = ['110'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7803. ";
 preguntaids[23] = 7803


//  Id pregunta: 6906 Año de creación de pregunta: 2010
 questions[24]= "25)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[24]= new Array();
 choices[24][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[24][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[24][2] = "Las dos respuestas anteriores son correctas";
 choices[24][3] = "Todas las respuestas anteriores son falsas";
 answers[24] = 0;
 units[24] = ['110'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 6906. ";
 preguntaids[24] = 6906


//  Id pregunta: 7514 Año de creación de pregunta: 2010
 questions[25]= "26)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE:";
 choices[25]= new Array();
 choices[25][0] = "802.9.";
 choices[25][1] = "802.10.";
 choices[25][2] = "802.11.";
 choices[25][3] = "802.12.";
 answers[25] = 0;
 units[25] = ['110'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 7514. Map 2005";
 preguntaids[25] = 7514


//  Id pregunta: 6699 Año de creación de pregunta: 2009
 questions[26]= "27)  Determine cu&aacute;l de las afirmaciones siguiente NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[26]= new Array();
 choices[26][0] = "Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la trasferencia de informaci&oacute;n entre dos extremos";
 choices[26][1] = "ATM es independiente del trasporte f&iacute;sico, las celdas ATM pueden ser trasportadas en redes SONET, SDH, T3/E3 &Oacute; T1/E1";
 choices[26][2] = "ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha";
 choices[26][3] = "Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n";
 answers[26] = 3;
 units[26] = ['110'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 6699. MAP 2008 A1";
 preguntaids[26] = 6699


//  Id pregunta: 6665 Año de creación de pregunta: 2009
 questions[27]= "28)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[27]= new Array();
 choices[27][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[27][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[27][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[27][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[27] = 1;
 units[27] = ['110'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 6665. MAP 2008 A1";
 preguntaids[27] = 6665


//  Id pregunta: 1234 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[28]= new Array();
 choices[28][0] = "16, 24, 32 &oacute; 40";
 choices[28][1] = "6, 12, 24 &oacute; 48";
 choices[28][2] = "4, 8, 16 &oacute; 40";
 choices[28][3] = "8, 16, 32 &oacute; 64";
 answers[28] = 0;
 units[28] = ['110'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1234. ";
 preguntaids[28] = 1234


//  Id pregunta: 4655 Año de creación de pregunta: 2002
 questions[29]= "30)  Con voz sobre IP:";
 choices[29]= new Array();
 choices[29][0] = "Se alcanza la misma calidad que con llamadas telef&oacute;nicas convencionales";
 choices[29][1] = "Se pueden realizar llamadas internacionales al mismo precio que una llamada local, el precio de la conexi&oacute;n con el nodo de acceso a Internet";
 choices[29][2] = "Las 2 respuestas anteriores son correctas";
 choices[29][3] = "Las 2 respuestas anteriores son falsas";
 answers[29] = 2;
 units[29] = ['110'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4655. ";
 preguntaids[29] = 4655


//  Id pregunta: 1649 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes es un est&aacute;ndar, cada vez m&aacute;s utilizado en telefon&iacute;a IP, para la conexi&oacute;n de los terminales a la infraestructura de red del edificio donde se pretende implantar?";
 choices[30]= new Array();
 choices[30][0] = "PCM";
 choices[30][1] = "IEEE 802.3af";
 choices[30][2] = "G.730";
 choices[30][3] = "IEEE 802.11b";
 answers[30] = 1;
 units[30] = ['110'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1649. ";
 preguntaids[30] = 1649


//  Id pregunta: 10915 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Cu&aacute;l es uno de los beneficios de la utilizaci&oacute;n de las VPN para el acceso remoto?";
 choices[31]= new Array();
 choices[31][0] = "Menor sobrecarga de protocolo";
 choices[31][1] = "Potencial reducci&oacute;n de los costos de conectividad";
 choices[31][2] = "Aumento de la calidad de servicio";
 choices[31][3] = "Facilidad de soluci&oacute;n de problemas";
 answers[31] = 1;
 units[31] = ['110'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10915. ";
 preguntaids[31] = 10915


//  Id pregunta: 10761 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l es un protocolo estandar para la gesti&oacute;n de VLANs?";
 choices[32]= new Array();
 choices[32][0] = "VTP";
 choices[32][1] = "GVRP";
 choices[32][2] = "HSRP";
 choices[32][3] = "VRRP";
 answers[32] = 1;
 units[32] = ['110'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 10761. a) protocolo de CISCO. c) y d) protocolos de redundancia.";
 preguntaids[32] = 10761


//  Id pregunta: 9725 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[33]= new Array();
 choices[33][0] = "I.413";
 choices[33][1] = "I.411";
 choices[33][2] = "I.431";
 choices[33][3] = "I.314";
 answers[33] = 0;
 units[33] = ['110'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9725. ";
 preguntaids[33] = 9725


//  Id pregunta: 5595 Año de creación de pregunta: 2007
 questions[34]= "35)  &iquest;C&oacute;mo se denomina en telefon&iacute;a IP el elemento encargado de registrar los dispositivos que realizan llamadas usando la red IP?";
 choices[34]= new Array();
 choices[34][0] = "Gateway.";
 choices[34][1] = "Terminal.";
 choices[34][2] = "IVR";
 choices[34][3] = "Gatekeeper.";
 answers[34] = 3;
 units[34] = ['110'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5595. ";
 preguntaids[34] = 5595


//  Id pregunta: 9726 Año de creación de pregunta: 2014
 questions[35]= "36)  &iquest;Que estandar establece el formato de la numeracion, las direcciones email y las direcciones web?";
 choices[35]= new Array();
 choices[35][0] = "E.122";
 choices[35][1] = "E.123";
 choices[35][2] = "E.231";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = 1;
 units[35] = ['110'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 9726. ";
 preguntaids[35] = 9726


//  Id pregunta: 1767 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale qu&eacute; ley o leyes recomienda la ITU-T en su recomendaci&oacute;n G.711 para codificaci&oacute;n de frecuencias de se&ntilde;ales vocales:";
 choices[36]= new Array();
 choices[36][0] = "Ley A y Ley &quot;Mu&quot;.";
 choices[36][1] = "Ley A y Ley &quot;Gamma&quot;.";
 choices[36][2] = "Ley &quot;Mu&quot; y Ley &quot;Gamma&quot;";
 choices[36][3] = "Ley &quot;Gamma&quot;.";
 answers[36] = 0;
 units[36] = ['110'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1767. ";
 preguntaids[36] = 1767


//  Id pregunta: 6352 Año de creación de pregunta: 2003
 questions[37]= "38)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n de si la prestaci&oacute;n del servicio universal supone una causa injustificada para los operadores obligados a prestarlo corresponde a:";
 choices[37]= new Array();
 choices[37][0] = "El Ministerio de  Energia, Turismo y Agenda Digital";
 choices[37][1] = "Gobierno";
 choices[37][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[37][3] = "Ninguno de los anteriores";
 answers[37] = 2;
 units[37] = ['110'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6352. ";
 preguntaids[37] = 6352


//  Id pregunta: 9393 Año de creación de pregunta: 2014
 questions[38]= "39)  Qu&eacute; datos NO incorporar&aacute; una descripci&oacute;n de sesi&oacute;n SDP (Session Description Protocol - RFC 4566) en una iniciaci&oacute;n de sesi&oacute;n utilizada en SIP (Session Initiation Protocol):";
 choices[38]= new Array();
 choices[38][0] = "Tipo de medio.";
 choices[38][1] = "Protocolo de transporte (RTP/UDP/IP, H 320, etc.).";
 choices[38][2] = "Formato del medio (video H.261, video MPEG, etc.).";
 choices[38][3] = "Tama&ntilde;o de los datos.";
 answers[38] = 3;
 units[38] = ['110'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9393. Examen TIC A2  2013";
 preguntaids[38] = 9393


//  Id pregunta: 7722 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Qu&eacute; se utiliza para codificar la voz que se transmite por la red IP?";
 choices[39]= new Array();
 choices[39][0] = "Retardo.";
 choices[39][1] = "Encriptado.";
 choices[39][2] = "C&oacute;decs.";
 choices[39][3] = "Claves.";
 answers[39] = 2;
 units[39] = ['110'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 7722. Map 2007";
 preguntaids[39] = 7722


//  Id pregunta: 9372 Año de creación de pregunta: 2014
 questions[40]= "41)  El algoritmo PLC (Packet Loss Concealment):";
 choices[40]= new Array();
 choices[40][0] = "Lo utiliza Frame Relay para el reenv&iacute;o de tramas p&eacute;rdidas por la congesti&oacute;n en el sentido de la transmisi&oacute;n.";
 choices[40][1] = "Algoritmo de ocultamiento de p&eacute;rdida de paquetes utilizado por VoIP.";
 choices[40][2] = "Utilizado por TCP para la retransmisi&oacute;n de paquetes despu&eacute;s de una trama NACK (negative acknowledgement).";
 choices[40][3] = "Algoritmo de descarte de paquetes en situaci&oacute;n de congesti&oacute;n en redes Frame Relay.";
 answers[40] = 1;
 units[40] = ['110'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9372. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[40] = 9372


//  Id pregunta: 1236 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; tasa de transferencia tiene la codificaci&oacute;n de voz CS-ACELP (Conjugate-Structure Algebraic Code Excited Linear-Prediction) de la Recomendaci&oacute;n ITU G.729 (anexo A)?";
 choices[41]= new Array();
 choices[41][0] = "8 Kbit/s.";
 choices[41][1] = "16 Kbit/s.";
 choices[41][2] = "32 Kbit/s.";
 choices[41][3] = "64 Kbit/s.";
 answers[41] = 0;
 units[41] = ['110'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1236. ";
 preguntaids[41] = 1236


//  Id pregunta: 1408 Año de creación de pregunta: 2016
 questions[42]= "43)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[42]= new Array();
 choices[42][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[42][1] = "EI tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[42][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[42][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un periodo de tiempo dado.";
 answers[42] = 2;
 units[42] = ['110'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1408. ";
 preguntaids[42] = 1408


//  Id pregunta: 6353 Año de creación de pregunta: 2003
 questions[43]= "44)  &ldquo;La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas&rdquo; est&aacute; catalogada por la Ley 9/2014 como infracci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Muy grave";
 choices[43][1] = "Grave";
 choices[43][2] = "Leve";
 choices[43][3] = "No est&aacute; considerado infracci&oacute;n";
 answers[43] = 1;
 units[43] = ['110'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 6353. ";
 preguntaids[43] = 6353


//  Id pregunta: 3117 Año de creación de pregunta: 2002
 questions[44]= "45)  Comparando los sistemas de compresi&oacute;n de video:";
 choices[44]= new Array();
 choices[44][0] = "La complejidad de compresi&oacute;n es mayor en MPEG-x que en H.26x";
 choices[44][1] = "El retardo producido por H.26x es mayor que el producido por MPEG-x";
 choices[44][2] = "La eficiencia es mayor en los algoritmos H.26x que en los algoritmos MPEG-x";
 choices[44][3] = "Todas las respuestas anteriores son correctas";
 answers[44] = 0;
 units[44] = ['110'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 3117. ";
 preguntaids[44] = 3117


//  Id pregunta: 10107 Año de creación de pregunta: 2015
 questions[45]= "46)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[45]= new Array();
 choices[45][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[45][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[45][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[45][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[45] = 2;
 units[45] = ['110'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 10107. Examen TIC A2 2014";
 preguntaids[45] = 10107


//  Id pregunta: 8228 Año de creación de pregunta: 2011
 questions[46]= "47)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[46]= new Array();
 choices[46][0] = "Agente de usuario";
 choices[46][1] = "Servidor proxy";
 choices[46][2] = "Agente de usuario inverso";
 choices[46][3] = "Agente proxy";
 answers[46] = 3;
 units[46] = ['110'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8228. Examen UPM A2 2011";
 preguntaids[46] = 8228


//  Id pregunta: 4658 Año de creación de pregunta: 2002
 questions[47]= "48)  CTI es:";
 choices[47]= new Array();
 choices[47][0] = "Computer Telephony Integration, el uso conjunto de telefon&iacute;a y ordenadores en el funcionamiento de un centro de atenci&oacute;n de llamadas";
 choices[47][1] = "el conjunto formado por la intranet, los tel&eacute;fonos de los puestos de ofim&aacute;tica y los ordenadores de los usuarios";
 choices[47][2] = "las siglas del Comit&eacute; para las Telecomunicaciones y la Innovaci&oacute;n, organismo sin &aacute;nimo de lucro encargado de observar las tendencias tecnol&oacute;gicas en telecomunicaciones y su aplicaci&oacute;n a los proyectos de la Administraci&oacute;n del Estado";
 choices[47][3] = "nada de lo anterior";
 answers[47] = 0;
 units[47] = ['110'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4658. ";
 preguntaids[47] = 4658


//  Id pregunta: 4893 Año de creación de pregunta: 2002
 questions[48]= "49)  La jerarqu&iacute;a digital MDH:";
 choices[48]= new Array();
 choices[48][0] = "Responde por Multimedia Digital Hierarchy";
 choices[48][1] = "Responde por Multiplexed Digital Hierarchy";
 choices[48][2] = "No existe";
 choices[48][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[48] = 2;
 units[48] = ['110'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4893. ";
 preguntaids[48] = 4893


//  Id pregunta: 10760 Año de creación de pregunta: 2015
 questions[49]= "50)  El nivel de enlace para la se&ntilde;alizaci&oacute;n por canal D de un enlace RDSI es:";
 choices[49]= new Array();
 choices[49][0] = "V.120";
 choices[49][1] = "LAPB";
 choices[49][2] = "Q.921";
 choices[49][3] = "Q.931";
 answers[49] = 2;
 units[49] = ['110'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 10760. ";
 preguntaids[49] = 10760


//  Id pregunta: 8849 Año de creación de pregunta: 2013
 questions[50]= "51)  RTP (Real Time Protocol) se utiliza en ToIP (telefon&iacute;a IP) para:";
 choices[50]= new Array();
 choices[50][0] = "Mantener sincronizados los relojes de los tel&eacute;fonos.";
 choices[50][1] = "Nada. Lo que se utiliza es RTCP (Real Time Control Protocol)";
 choices[50][2] = "Transmitir la voz: una vez codificada se encapsula como payload de RTP en datagramas UDP.";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = 2;
 units[50] = ['110'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 8849. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[50] = 8849


//  Id pregunta: 7424 Año de creación de pregunta: 2010
 questions[51]= "52)  Las redes de pr&oacute;xima generaci&oacute;n (NGN) son seg&uacute;n la UIT (uni&oacute;n internacional de telecomunicaciones):";
 choices[51]= new Array();
 choices[51][0] = "Las redes que engloban las nuevas tecnolog&iacute;as inal&aacute;mbricas, tambi&eacute;n conocidas como redes de cuarta generaci&oacute;n (4G)";
 choices[51][1] = "Las redes que ser&aacute;n desplegadas para la generaci&oacute;n del siglo XXI, las cuales garantizar&aacute;n una cobertura real del 100%";
 choices[51][2] = "Las redes de los pr&oacute;ximos a&ntilde;os, basadas en el protocolo Internet IP y que ser&aacute;n utilizadas para todo tipo de servicios";
 choices[51][3] = "Las futuras redes basadas en conmutaci&oacute;n de circuitos, que proporcionar&aacute;n una calidad de servicio superior y permitir&aacute;n comunicaciones de voz y datos a altas velocidades";
 answers[51] = 2;
 units[51] = ['110'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7424. Examen TIC B 2009";
 preguntaids[51] = 7424


//  Id pregunta: 898 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; es una 'zona NGA blanca'?";
 choices[52]= new Array();
 choices[52][0] = "Zona en la que existe una sola red de nueva generaci&oacute;n (NGA).";
 choices[52][1] = "Zona en la que ya existe m&aacute;s de una NGA o van a desplegarse en los pr&oacute;ximos 3 a&ntilde;os.";
 choices[52][2] = "Zona en la que ya existe o va a desplegarse una sola NGA en los pr&oacute;ximos 3 a&ntilde;os.";
 choices[52][3] = "Zona en la que no existen NGA y en la que no es probable que los operadores privados las construyan en un periodo de 3 a&ntilde;os.";
 answers[52] = 3;
 units[52] = ['110'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 898. AGE A2 2015";
 preguntaids[52] = 898


