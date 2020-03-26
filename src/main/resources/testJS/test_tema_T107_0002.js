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
//  Id pregunta: 7948 Año de creación de pregunta: 2011
 questions[0]= "1)  Dentro del nivel AAL de ATM, AAL2 se caracteriza por tener:";
 choices[0]= new Array();
 choices[0][0] = "Retardo constante y tasa de bit variable.";
 choices[0][1] = "Retardo variable y tasa de bit constante.";
 choices[0][2] = "Retardo variable y tasa de bit variable.";
 choices[0][3] = "Retardo constante y tasa de bit constante.";
 answers[0] = 0;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7948. Examen TIC A2 2010";
 preguntaids[0] = 7948


//  Id pregunta: 10096 Año de creación de pregunta: 2015
 questions[1]= "2)  El tama&ntilde;o de una cabecera MPLS seg&uacute;n la RFC 3032, es de:";
 choices[1]= new Array();
 choices[1][0] = "20 bits.";
 choices[1][1] = "32 bits.";
 choices[1][2] = "48 bits.";
 choices[1][3] = "64 bits.";
 answers[1] = 1;
 units[1] = ['107'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10096. Examen TIC A2 2014";
 preguntaids[1] = 10096


//  Id pregunta: 8846 Año de creación de pregunta: 2013
 questions[2]= "3)  En el modelo de referencia de ATM, &iquest;c&oacute;mo se denomina la capa que tiene las funciones de convergencia, y segmentaci&oacute;n y reensamblado?";
 choices[2]= new Array();
 choices[2][0] = "TC";
 choices[2][1] = "PM";
 choices[2][2] = "AAL";
 choices[2][3] = "ATM";
 answers[2] = 2;
 units[2] = ['107'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8846. Examen TIC AGE A2 2011 Promoci&oacute;n Interna";
 preguntaids[2] = 8846


//  Id pregunta: 7973 Año de creación de pregunta: 2011
 questions[3]= "4)  ATM se caracteriza, entre otras, por que:";
 choices[3]= new Array();
 choices[3][0] = "Puede funcionar sobre cualquier capa f&iacute;sica";
 choices[3][1] = "Proporciona retransmisi&oacute;n de celdas en caso de detecci&oacute;n de error";
 choices[3][2] = "a y b son ciertas";
 choices[3][3] = "Todas las anteriores son falsas";
 answers[3] = 0;
 units[3] = ['107'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 7973. Analista Ayto. Madrid 2010";
 preguntaids[3] = 7973


//  Id pregunta: 10886 Año de creación de pregunta: 2015
 questions[4]= "5)  Una WAN ATM est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[4]= new Array();
 choices[4][0] = "Punto a punto";
 choices[4][1] = "Broadcast multi-acceso";
 choices[4][2] = "No broadcast multi-acceso";
 choices[4][3] = "Broadcast punto a multipunto";
 answers[4] = 2;
 units[4] = ['107'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10886. ";
 preguntaids[4] = 10886


//  Id pregunta: 8848 Año de creación de pregunta: 2013
 questions[5]= "6)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[5]= new Array();
 choices[5][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[5][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[5][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 1;
 units[5] = ['107'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8848. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[5] = 8848


//  Id pregunta: 8137 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[6]= new Array();
 choices[6][0] = "4 bits.";
 choices[6][1] = "5 bits.";
 choices[6][2] = "32 bits.";
 choices[6][3] = "258 bits.";
 answers[6] = 2;
 units[6] = ['107'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8137. Examen TIC A2 2010 interna";
 preguntaids[6] = 8137


//  Id pregunta: 9427 Año de creación de pregunta: 2014
 questions[7]= "8)  Cu&aacute;l de los siguientes contenedores SDH no es posible:";
 choices[7]= new Array();
 choices[7][0] = "STM-1";
 choices[7][1] = "STM-16";
 choices[7][2] = "STM-128";
 choices[7][3] = "STM-256";
 answers[7] = 2;
 units[7] = ['107'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 9427. ";
 preguntaids[7] = 9427


//  Id pregunta: 7757 Año de creación de pregunta: 2010
 questions[8]= "9)  Con respecto a la tecnolog&iacute;a conocida como &laquo;SONET&raquo; (terminolog&iacute;a de EE.UU.) o SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[8]= new Array();
 choices[8][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplo de una se&ntilde;al base de 155 Mbps denominada STM.";
 choices[8][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia.";
 choices[8][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red.";
 choices[8][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace o nodo de la red.";
 answers[8] = 1;
 units[8] = ['107'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7757. ";
 preguntaids[8] = 7757


//  Id pregunta: 7835 Año de creación de pregunta: 2010
 questions[9]= "10)  Determine cu&aacute;l de las afirmaciones siguientes NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[9]= new Array();
 choices[9][0] = "Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la transferencia de informaci&oacute;n entre dos extremos.";
 choices[9][1] = "ATM es independiente del transporte f&iacute;sico, las celdas ATM pueden ser transportadas en redes SONET, SDH, T3/E3 o T1/E1.";
 choices[9][2] = "ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha.";
 choices[9][3] = "Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n.";
 answers[9] = 3;
 units[9] = ['107'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7835. ";
 preguntaids[9] = 7835


//  Id pregunta: 8240 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[10]= new Array();
 choices[10][0] = "Home Agent.";
 choices[10][1] = "Agent Advertisement.";
 choices[10][2] = "Mobility Agent.";
 choices[10][3] = "Agent Discovery.";
 answers[10] = 0;
 units[10] = ['107'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8240. Examen UPM A2 2011";
 preguntaids[10] = 8240


//  Id pregunta: 8238 Año de creación de pregunta: 2011
 questions[11]= "12)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[11]= new Array();
 choices[11][0] = "Es el elemento que conmuta etiquetas.";
 choices[11][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[11][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[11][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[11] = 0;
 units[11] = ['107'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8238. Examen UPM A2 2011";
 preguntaids[11] = 8238


//  Id pregunta: 9387 Año de creación de pregunta: 2014
 questions[12]= "13)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[12]= new Array();
 choices[12][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[12][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[12][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[12][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[12] = 0;
 units[12] = ['107'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9387. Examen TIC A2  2013";
 preguntaids[12] = 9387


//  Id pregunta: 9751 Año de creación de pregunta: 2014
 questions[13]= "14)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[13]= new Array();
 choices[13][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[13][1] = "En MPLS el camino establecido es bidireccional";
 choices[13][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[13][3] = "El campo de etiqueta en MPLS es de 20 bits";
 answers[13] = 1;
 units[13] = ['107'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9751. ";
 preguntaids[13] = 9751


//  Id pregunta: 7974 Año de creación de pregunta: 2011
 questions[14]= "15)  La tecnologia IDSL (ISDN Digital Subscriber Line):";
 choices[14]= new Array();
 choices[14][0] = "Se utiliza para transportar voz y datos";
 choices[14][1] = "Es asim&eacute;trica";
 choices[14][2] = "Utiliza 3 pares de hilos";
 choices[14][3] = "Alcanza una distancia m&aacute;xima de 5,5 Km.";
 answers[14] = 3;
 units[14] = ['107'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 7974. Analista Ayto. Madrid 2010";
 preguntaids[14] = 7974


//  Id pregunta: 8845 Año de creación de pregunta: 2013
 questions[15]= "16)  En el modelo de referencia de ATM, &iquest;cu&aacute;ntos planos se especifican?";
 choices[15]= new Array();
 choices[15][0] = "Dos (usuario y se&ntilde;alizaci&oacute;n).";
 choices[15][1] = "Tres (usuario, control/se&ntilde;alizaci&oacute;n y administraci&oacute;n).";
 choices[15][2] = "Dos (datos estructurados y datos no estructurados).";
 choices[15][3] = "Tres (datos, voz y video).";
 answers[15] = 1;
 units[15] = ['107'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8845. Examen TIC AGE A2 2011 libre";
 preguntaids[15] = 8845


//  Id pregunta: 9378 Año de creación de pregunta: 2014
 questions[16]= "17)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[16]= new Array();
 choices[16][0] = "32";
 choices[16][1] = "24";
 choices[16][2] = "20";
 choices[16][3] = "16";
 answers[16] = 2;
 units[16] = ['107'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9378. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[16] = 9378


//  Id pregunta: 7947 Año de creación de pregunta: 2011
 questions[17]= "18)  El protocolo MPLS (Multiprotocol Label Switching), &iquest;entre qu&eacute; capas del modelo OSI opera?";
 choices[17]= new Array();
 choices[17][0] = "Entre la capa f&iacute;sica y la de enlace de datos.";
 choices[17][1] = "Entre la capa de enlace de datos y la capa de red.";
 choices[17][2] = "Entre la capa de red y la capa de transporte.";
 choices[17][3] = "Entre la capa de transporte y las capas superiores.";
 answers[17] = 1;
 units[17] = ['107'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 7947. Examen TIC A2 2010";
 preguntaids[17] = 7947


//  Id pregunta: 10520 Año de creación de pregunta: 2015
 questions[18]= "19)  En MPLS, c&oacute;mo se llama el router que no es de frontera";
 choices[18]= new Array();
 choices[18][0] = "LSR";
 choices[18][1] = "LER";
 choices[18][2] = "LSP";
 choices[18][3] = "FEC";
 answers[18] = 0;
 units[18] = ['107'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10520. ";
 preguntaids[18] = 10520


//  Id pregunta: 8482 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Cu&aacute;l es el tama&ntilde;o de las celdas ATM?";
 choices[19]= new Array();
 choices[19][0] = "48 octetos";
 choices[19][1] = "64 octetos";
 choices[19][2] = "53 octetos";
 choices[19][3] = "32 octetos";
 answers[19] = 2;
 units[19] = ['107'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8482. Examen UPM A2 2011";
 preguntaids[19] = 8482


//  Id pregunta: 8844 Año de creación de pregunta: 2013
 questions[20]= "21)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[20]= new Array();
 choices[20][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio.";
 choices[20][1] = "Apenas se entiende nada.";
 choices[20][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[20][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[20] = 2;
 units[20] = ['107'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8844. Examen Xunta de Galicia A1 2011";
 preguntaids[20] = 8844


//  Id pregunta: 8503 Año de creación de pregunta: 2011
 questions[21]= "22)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[21]= new Array();
 choices[21][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[21][1] = "S&oacute;lo se emplea en RDSI.";
 choices[21][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = 0;
 units[21] = ['106', '107'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8503. Teleco Ayto. Madrid 2010";
 preguntaids[21] = 8503


//  Id pregunta: 8843 Año de creación de pregunta: 2013
 questions[22]= "23)  Las redes ATM emplean celdas de:";
 choices[22]= new Array();
 choices[22][0] = "Tama&ntilde;o variable: entre 5 e 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n";
 choices[22][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n";
 choices[22][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[22][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[22] = 1;
 units[22] = ['107'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8843. ";
 preguntaids[22] = 8843


//  Id pregunta: 10757 Año de creación de pregunta: 2015
 questions[23]= "24)  Las cabeceras de MPLS";
 choices[23]= new Array();
 choices[23][0] = "Pueden reutilizar campos de cabeceras de otros protocolos.";
 choices[23][1] = "Emplean enrutamiento desde origen por conmutaci&oacute;n de paquetes.";
 choices[23][2] = "Los routers son los mismos que se emplean en cualquier red IP";
 choices[23][3] = "La b y c son correctas.";
 answers[23] = 0;
 units[23] = ['107'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10757. ";
 preguntaids[23] = 10757


//  Id pregunta: 8247 Año de creación de pregunta: 2011
 questions[24]= "25)  En el protocolo MPLS, la cabecera de las etiquetas MPLS, NO contiene el siguiente item:";
 choices[24]= new Array();
 choices[24][0] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 choices[24][1] = "Tiempo de vida (8 bits)";
 choices[24][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[24][3] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 answers[24] = 0;
 units[24] = ['107'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8247. Examen UPM A2 2011";
 preguntaids[24] = 8247


//  Id pregunta: 9727 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;Cual de los siguientes no es un tipo de tr&aacute;fico de ATM?";
 choices[25]= new Array();
 choices[25][0] = "UBR";
 choices[25][1] = "VBR";
 choices[25][2] = "SBR";
 choices[25][3] = "CBR";
 answers[25] = 2;
 units[25] = ['107'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9727. ";
 preguntaids[25] = 9727


//  Id pregunta: 9373 Año de creación de pregunta: 2014
 questions[26]= "27)  MPLS (Multiprotocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[26]= new Array();
 choices[26][0] = "FEC (Forwarding Equivalent Class).";
 choices[26][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[26][2] = "CIR (Commited Information Rate).";
 choices[26][3] = "MBS (Maximum Burst Size).";
 answers[26] = 0;
 units[26] = ['107'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9373. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[26] = 9373


//  Id pregunta: 8136 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[27]= new Array();
 choices[27][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[27][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[27][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[27][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[27] = 3;
 units[27] = ['107'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8136. Examen TIC A2 2010 interna";
 preguntaids[27] = 8136


//  Id pregunta: 7961 Año de creación de pregunta: 2011
 questions[28]= "29)  El c&oacute;dec G.729 especificado por la ITU-T para la codificaci&oacute;n de voz para su uso en sistemas de Voz sobre IP, &iquest;a qu&eacute; tasas de bit puede operar?";
 choices[28]= new Array();
 choices[28][0] = "A 56 o 64 kbps.";
 choices[28][1] = "A 6.4, 8 o 11.8 kbps.";
 choices[28][2] = "&Uacute;nicamente a 8 kbps.";
 choices[28][3] = "A 5.3 o 6.4 kbps.";
 answers[28] = 1;
 units[28] = ['107'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7961. Examen TIC A2 2010";
 preguntaids[28] = 7961


//  Id pregunta: 9399 Año de creación de pregunta: 2014
 questions[29]= "30)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[29]= new Array();
 choices[29][0] = "RDSI";
 choices[29][1] = "Bluetooth";
 choices[29][2] = "DECT";
 choices[29][3] = "Wimax";
 answers[29] = 1;
 units[29] = ['107'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9399. Examen TIC A2  2013";
 preguntaids[29] = 9399


//  Id pregunta: 9368 Año de creación de pregunta: 2014
 questions[30]= "31)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[30]= new Array();
 choices[30][0] = "RSVP";
 choices[30][1] = "ARP";
 choices[30][2] = "802.1ar";
 choices[30][3] = "H.264";
 answers[30] = 0;
 units[30] = ['107'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 9368. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[30] = 9368


//  Id pregunta: 7962 Año de creación de pregunta: 2011
 questions[31]= "32)  La recomendaci&oacute;n para VoIP, definida en 1996 por la UIT es el:";
 choices[31]= new Array();
 choices[31][0] = "H.261.";
 choices[31][1] = "H.320.";
 choices[31][2] = "H.221.";
 choices[31][3] = "H.323.";
 answers[31] = 3;
 units[31] = ['107'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 7962. Examen TIC A2 2010";
 preguntaids[31] = 7962


//  Id pregunta: 8481 Año de creación de pregunta: 2011
 questions[32]= "33)  ATM ofrece las siguientes clases de servicio de tiempo real:";
 choices[32]= new Array();
 choices[32][0] = "CBR y GFR";
 choices[32][1] = "ABR y CBR";
 choices[32][2] = "ABR y GFR";
 choices[32][3] = "CBR y rt-VBR";
 answers[32] = 3;
 units[32] = ['107'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8481. Examen UPM A2 2011";
 preguntaids[32] = 8481


