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
//  Id pregunta: 4605 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Qu&eacute; es fibra oscura?:";
 choices[0]= new Array();
 choices[0][0] = "Fibra &oacute;ptica que ha perdido sus propiedades y que se ha vuelto opaca";
 choices[0][1] = "Ramal de fibra &oacute;ptica que alquila un particular a un Operador de Telecomunicaciones sin electr&oacute;nica u optr&oacute;nica";
 choices[0][2] = "Un terminador de fibra &oacute;ptica para igualar la impedancia de la l&iacute;nea";
 choices[0][3] = "Fibra &oacute;ptica con impurezas";
 answers[0] = 1;
 units[0] = ['106'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4605. ";
 preguntaids[0] = 4605


//  Id pregunta: 5390 Año de creación de pregunta: 2006
 questions[1]= "2)  La fibra &oacute;ptica monomodo m&aacute;s popular es";
 choices[1]= new Array();
 choices[1][0] = "9/125 um";
 choices[1][1] = "62.5/125 um";
 choices[1][2] = "50/125 um";
 choices[1][3] = "100/140 um";
 answers[1] = 0;
 units[1] = ['106'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5390. ";
 preguntaids[1] = 5390


//  Id pregunta: 5045 Año de creación de pregunta: 2002
 questions[2]= "3)  Sabiendo que se dice que una fibra monomodo es aquella que transmite un &uacute;nico modo de propagaci&oacute;n de un haz monocrom&aacute;tico de luz. Indique cu&aacute;l de las afirmaciones siguientes es verdadera:";
 choices[2]= new Array();
 choices[2][0] = "Las fibras &oacute;pticas monomodo son las m&aacute;s adecuadas para la transmisi&oacute;n de se&ntilde;ales con un ancho de banda peque&ntilde;o y a grandes distancias";
 choices[2][1] = "La fibras &oacute;pticas monomodo son las adecuadas para transmitir se&ntilde;ales de gran ancho de banda y a grandes distancias";
 choices[2][2] = "Las fibras &oacute;pticas monomodo son &uacute;nicamente adecuadas para la transmisi&oacute;n de se&ntilde;ales anal&oacute;gicas";
 choices[2][3] = "Todas las anteriores respuestas son correctas";
 answers[2] = 1;
 units[2] = ['106'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5045. ";
 preguntaids[2] = 5045


//  Id pregunta: 6908 Año de creación de pregunta: 2010
 questions[3]= "4)  Con respecto al ancho de banda de la conexi&oacute;n ADSL de un abonado";
 choices[3]= new Array();
 choices[3][0] = "La tasa de transferencia no es sensible a la distancia del abonado a la central, de forma que es similar a todos los abonados de una misma central";
 choices[3][1] = "La tasa de transferencia es sensible a la distancia del abonado a la central, de forma que los abonados que est&aacute;n m&aacute;s cerca de la central tendr&aacute;n posibilidad de velocidades m&aacute;s altas";
 choices[3][2] = "La tasa de transferencia del abonado depende principalmente del n&uacute;mero de abonados que est&aacute;n conectados simult&aacute;neamente, en ning&uacute;n caso de la distancia a la central";
 choices[3][3] = "Todas las respuestas anteriores son falsas";
 answers[3] = 1;
 units[3] = ['106'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6908. ";
 preguntaids[3] = 6908


//  Id pregunta: 9492 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Cual de la siguientes t&eacute;cnicas de modulaci&oacute;n no es usada por las tecnolog&iacute;as xDSL?";
 choices[4]= new Array();
 choices[4][0] = "2B1Q";
 choices[4][1] = "CAP";
 choices[4][2] = "DMT";
 choices[4][3] = "WDM";
 answers[4] = 3;
 units[4] = ['106'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9492. La tecnolog&iacute;a usada en algunas xDSL es DWMT, no WDM";
 preguntaids[4] = 9492


//  Id pregunta: 8500 Año de creación de pregunta: 2011
 questions[5]= "6)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[5]= new Array();
 choices[5][0] = "De baja capacidad y elevado alcance.";
 choices[5][1] = "De alta capacidad y reducido alcance.";
 choices[5][2] = "De alta capacidad y elevado alcance.";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 2;
 units[5] = ['106'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8500. Teleco Ayto. Madrid 2010";
 preguntaids[5] = 8500


//  Id pregunta: 1230 Año de creación de pregunta: 2016
 questions[6]= "7)  La recomendaci&oacute;n ITU-T G.992.3 hace referencia a:";
 choices[6]= new Array();
 choices[6][0] = "ADSL";
 choices[6][1] = "VDSL";
 choices[6][2] = "ADSL2";
 choices[6][3] = "ADSL2+";
 answers[6] = 2;
 units[6] = ['106'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 1230. ";
 preguntaids[6] = 1230


//  Id pregunta: 7586 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[7]= new Array();
 choices[7][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (International Telecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el par telef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logra mediante el empleo de unos filtros denominados &laquo;splitters&raquo;.";
 choices[7][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrierless Amplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos de estandarizaci&oacute;n se decantaron por esta &uacute;ltima.";
 choices[7][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5, que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access).";
 choices[7][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &laquo;G.Lite&raquo; o &laquo;ADSL Lite&raquo; es una variante de ADSL que proporciona menor caudal, pero tiene la ventaja de no requerir splitters.";
 answers[7] = 2;
 units[7] = ['106'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7586. Map 2006";
 preguntaids[7] = 7586


//  Id pregunta: 10105 Año de creación de pregunta: 2015
 questions[8]= "9)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[8]= new Array();
 choices[8][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[8][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[8][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[8][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[8] = 1;
 units[8] = ['106'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10105. Examen TIC A2 2014";
 preguntaids[8] = 10105


//  Id pregunta: 8779 Año de creación de pregunta: 2013
 questions[9]= "10)  Respecto a la tecnologia de multiplexaci&oacute;n WDM:";
 choices[9]= new Array();
 choices[9][0] = "Dense WDM soporta menos canales que Coarse WDM y se usa en distancias m&aacute;s cortas.";
 choices[9][1] = "Coarse WDM utiliza luz muy direccional para aprovechar el bajo n&uacute;mero de canales";
 choices[9][2] = "Dense WDM y Coarse WDM son tecnolog&iacute;as no interoperables";
 choices[9][3] = "Coarse WDM alcanza distancias de 1000 km";
 answers[9] = 2;
 units[9] = ['106'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8779. ";
 preguntaids[9] = 8779


//  Id pregunta: 8103 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes modos de propagaci&oacute;n de la fibra &oacute;ptica permite un mayor alcance y capacidad?";
 choices[10]= new Array();
 choices[10][0] = "Monomodo";
 choices[10][1] = "Multimodo con salto de &iacute;ndice de refracci&oacute;n.";
 choices[10][2] = "Multimodo con &iacute;ndice de refracci&oacute;n gradual.";
 choices[10][3] = "Ultramodo de alta dispersi&oacute;n modal.";
 answers[10] = 0;
 units[10] = ['106'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8103. Examen TIC A2 2010 interna";
 preguntaids[10] = 8103


//  Id pregunta: 9491 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[11]= new Array();
 choices[11][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[11][1] = "No permite la modalidad sim&eacute;trica";
 choices[11][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central";
 choices[11][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[11] = 1;
 units[11] = ['106'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9491. ";
 preguntaids[11] = 9491


//  Id pregunta: 8473 Año de creación de pregunta: 2011
 questions[12]= "13)  El est&aacute;ndar de telefon&iacute;a m&oacute;vil LTE (Long Term Evolution), emplea";
 choices[12]= new Array();
 choices[12][0] = "MIMO";
 choices[12][1] = "FDD";
 choices[12][2] = "TDD";
 choices[12][3] = "Todas las anteriores";
 answers[12] = 3;
 units[12] = ['106'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8473. ";
 preguntaids[12] = 8473


//  Id pregunta: 8223 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;En qu&eacute; recomendaci&oacute;n del ITU-T se especifican las caracter&iacute;sticas de las fibras &oacute;pticas monomodo &quot;non-zero dispersion-shifted&quot; (NZDSF) habitualmente utilizadas en DWDM?:";
 choices[13]= new Array();
 choices[13][0] = "G.653";
 choices[13][1] = "G.654";
 choices[13][2] = "G.655";
 choices[13][3] = "G.656";
 answers[13] = 2;
 units[13] = ['106'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8223. Examen TIC A2 2010 interna";
 preguntaids[13] = 8223


//  Id pregunta: 9398 Año de creación de pregunta: 2014
 questions[14]= "15)  La tecnolog&iacute;a WiMAX 2 es conocida formalmente como:";
 choices[14]= new Array();
 choices[14][0] = "802.16m";
 choices[14][1] = "802.16a";
 choices[14][2] = "802.11x";
 choices[14][3] = "802.11n";
 answers[14] = 0;
 units[14] = ['106'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9398. Examen TIC A2  2013";
 preguntaids[14] = 9398


//  Id pregunta: 883 Año de creación de pregunta: 2016
 questions[15]= "16)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[15]= new Array();
 choices[15][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[15][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[15][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[15][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[15] = 1;
 units[15] = ['106'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 883. TAI 2016.";
 preguntaids[15] = 883


//  Id pregunta: 5127 Año de creación de pregunta: 2003
 questions[16]= "17)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[16]= new Array();
 choices[16][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[16][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[16][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[16][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[16] = 1;
 units[16] = ['106'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5127. ";
 preguntaids[16] = 5127


//  Id pregunta: 8503 Año de creación de pregunta: 2011
 questions[17]= "18)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[17]= new Array();
 choices[17][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[17][1] = "S&oacute;lo se emplea en RDSI.";
 choices[17][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = 0;
 units[17] = ['106', '107'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8503. Teleco Ayto. Madrid 2010";
 preguntaids[17] = 8503


//  Id pregunta: 8225 Año de creación de pregunta: 2011
 questions[18]= "19)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[18]= new Array();
 choices[18][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[18][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[18][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[18][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[18] = 3;
 units[18] = ['106'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8225. Examen UPM A2 2011";
 preguntaids[18] = 8225


//  Id pregunta: 1242 Año de creación de pregunta: 2016
 questions[19]= "20)  El est&aacute;ndar IEEE 802.11e sobre redes inal&aacute;mbricas se corresponde con especificaciones";
 choices[19]= new Array();
 choices[19][0] = "Para la coexistencia con sistemas de Radar o Sat&eacute;lite.";
 choices[19][1] = "De seguridad.";
 choices[19][2] = "De roaming.";
 choices[19][3] = "Sobre calidad de servicio QoS.";
 answers[19] = 3;
 units[19] = ['106'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1242. ";
 preguntaids[19] = 1242


//  Id pregunta: 4645 Año de creación de pregunta: 2002
 questions[20]= "21)  Al fen&oacute;meno que se da en transmisi&oacute;n por fibra &oacute;ptica consistente en que los pulsos &oacute;pticos tienden a expandirse provocando interferencia, con lo que diferentes longitudes de onda viajan a diferentes velocidades, se le denomina:";
 choices[20]= new Array();
 choices[20][0] = "Dispersi&oacute;n de ventana";
 choices[20][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[20][2] = "Atenuaci&oacute;n &oacute;ptica";
 choices[20][3] = "Atenuaci&oacute;n de ventana";
 answers[20] = 1;
 units[20] = ['106'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4645. ";
 preguntaids[20] = 4645


//  Id pregunta: 4604 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Qu&eacute; es el modo en una transmisi&oacute;n por fibra &oacute;ptica?:";
 choices[21]= new Array();
 choices[21][0] = "Es el trayecto de un rayo en una fibra";
 choices[21][1] = "Es el trayecto de todos los haces de una fibra";
 choices[21][2] = "Es la polarizaci&oacute;n que existe en la fibra en cada momento de la transmisi&oacute;n";
 choices[21][3] = "Es el tipo de modulaci&oacute;n digital que se imprime al rayo al introducirlo en la fibra";
 answers[21] = 0;
 units[21] = ['106'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4604. ";
 preguntaids[21] = 4604


//  Id pregunta: 6107 Año de creación de pregunta: 2003
 questions[22]= "23)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas quecirculan por la red?:";
 choices[22]= new Array();
 choices[22][0] = "1522 bytes";
 choices[22][1] = "1500 bytes";
 choices[22][2] = "1496 bytes";
 choices[22][3] = "1518 bytes";
 answers[22] = 0;
 units[22] = ['106'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6107. Examen TIC A1 MAP 2007";
 preguntaids[22] = 6107


//  Id pregunta: 4404 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Qu&eacute; inconvenientes presenta la transmisi&oacute;n de informaci&oacute;n mediante rayo l&aacute;ser?:";
 choices[23]= new Array();
 choices[23][0] = "Posible causa de accidentes";
 choices[23][1] = "Coste excesivamente elevado";
 choices[23][2] = "Afectada fuertemente por condiciones climatol&oacute;gicas";
 choices[23][3] = "Genera fuertes interferencias electromagn&eacute;ticas en otros aparatos";
 answers[23] = 2;
 units[23] = ['106'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4404. ";
 preguntaids[23] = 4404


//  Id pregunta: 8812 Año de creación de pregunta: 2013
 questions[24]= "25)  Acerca de Fibre Channel, se puede decir:";
 choices[24]= new Array();
 choices[24][0] = "El protocolo sigue el modelo de referencia OSI.";
 choices[24][1] = "Es un protocolo con 5 capas.";
 choices[24][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[24][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[24] = 1;
 units[24] = ['53', '106'];
 blocks[24] = ['B2', 'B4'];
 comments[24] = "Id Pregunta: 8812. ";
 preguntaids[24] = 8812


//  Id pregunta: 4973 Año de creación de pregunta: 2002
 questions[25]= "26)  Las velocidades de transmisi&oacute;n y de modulaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Son siempre iguales";
 choices[25][1] = "La de transmisi&oacute;n s&oacute;lo puede ser mayor o igual a la de modulaci&oacute;n";
 choices[25][2] = "La de modulaci&oacute;n s&oacute;lo puede ser mayor o igual que la de transmisi&oacute;n";
 choices[25][3] = "La velocidad de transmisi&oacute;n puede ser mayor, menor o igual que la de modulaci&oacute;n, seg&uacute;n el caso";
 answers[25] = 1;
 units[25] = ['106'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4973. ";
 preguntaids[25] = 4973


//  Id pregunta: 9423 Año de creación de pregunta: 2014
 questions[26]= "27)  El est&aacute;ndar Wimax est&aacute; especificado en la norma:";
 choices[26]= new Array();
 choices[26][0] = "IEEE 802.11";
 choices[26][1] = "IEEE 802.16";
 choices[26][2] = "IEEE 802.15";
 choices[26][3] = "IEEE 802.19";
 answers[26] = 1;
 units[26] = ['106'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9423. ";
 preguntaids[26] = 9423


//  Id pregunta: 5389 Año de creación de pregunta: 2006
 questions[27]= "28)  La fibra &oacute;ptica m&aacute;s popular es";
 choices[27]= new Array();
 choices[27][0] = "9/125 um";
 choices[27][1] = "62.5/125 um";
 choices[27][2] = "50/125 um";
 choices[27][3] = "100/140 um";
 answers[27] = 1;
 units[27] = ['106'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5389. ";
 preguntaids[27] = 5389


//  Id pregunta: 10145 Año de creación de pregunta: 2015
 questions[28]= "29)  La cuarta generaci&oacute;n de telefon&iacute;a m&oacute;vil (4G) incluye:";
 choices[28]= new Array();
 choices[28][0] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[28][1] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 choices[28][2] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[28][3] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 answers[28] = 0;
 units[28] = ['117', '106'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 10145. Examen TIC A1 2014";
 preguntaids[28] = 10145


//  Id pregunta: 8420 Año de creación de pregunta: 2011
 questions[29]= "30)  Es una caracter&iacute;stica de la fibra &oacute;ptica:";
 choices[29]= new Array();
 choices[29][0] = "Un ancho de banda de 800Mhz.";
 choices[29][1] = "Gran resistencia a interferencias y ruido.";
 choices[29][2] = "El bajo coste de su instalaci&oacute;n.";
 choices[29][3] = "La facilidad de su instalaci&oacute;n";
 answers[29] = 1;
 units[29] = ['106'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8420. Operador Ayto. Madrid 2010";
 preguntaids[29] = 8420


//  Id pregunta: 4967 Año de creación de pregunta: 2002
 questions[30]= "31)  Las fibras &oacute;pticas:";
 choices[30]= new Array();
 choices[30][0] = "Presentan mayor atenuaci&oacute;n que los pares coaxiales";
 choices[30][1] = "Se necesitan efectuar conversiones O/E y O/E en los terminales emisor y receptor, respectivamente";
 choices[30][2] = "La distorsi&oacute;n multimodo se produce, sobre todo, en las de &iacute;ndice gradual";
 choices[30][3] = "Son inmunes a las interferencias electromagn&eacute;ticas";
 answers[30] = 3;
 units[30] = ['106'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4967. ";
 preguntaids[30] = 4967


//  Id pregunta: 1765 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale cu&aacute;l es la recomendaci&oacute;n de la ITU, que regula el ADSL2+:";
 choices[31]= new Array();
 choices[31][0] = "ITU-T G.821.5";
 choices[31][1] = "ITU-T G.711";
 choices[31][2] = "ITU-T G.992.5";
 choices[31][3] = "ITU-T G.707";
 answers[31] = 2;
 units[31] = ['106'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1765. ";
 preguntaids[31] = 1765


//  Id pregunta: 1743 Año de creación de pregunta: 2016
 questions[32]= "33)  En la resoluci&oacute;n del 22 de noviembre de 2005, de la Secretaria de Estado de Telecomunicaci&oacute;n y para la Sociedad de la Informaci&oacute;n, se publicaron los requisitos t&eacute;cnicos de la interfaz reglamentaria Ir-14 relativa a los sistemas de acceso inal&aacute;mbrico fijo (LMDS/FWA) para Espa&ntilde;a. Se&ntilde;ale qu&eacute; banda de frecuencias son las asignadas:";
 choices[32]= new Array();
 choices[32][0] = "2,4 a 2,6 Ghz.";
 choices[32][1] = "202,5 a 226,6 Ghz.";
 choices[32][2] = "24,5 a 26,5 Ghz.";
 choices[32][3] = "3.400 a 3.800 MHz.";
 answers[32] = 2;
 units[32] = ['106'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1743. ";
 preguntaids[32] = 1743


//  Id pregunta: 8022 Año de creación de pregunta: 2011
 questions[33]= "34)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es:";
 choices[33]= new Array();
 choices[33][0] = "750 nm.";
 choices[33][1] = "820 nm.";
 choices[33][2] = "1310 nm.";
 choices[33][3] = "1550 nm.";
 answers[33] = 3;
 units[33] = ['106'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8022. Examen TIC A2 2010";
 preguntaids[33] = 8022


//  Id pregunta: 9391 Año de creación de pregunta: 2014
 questions[34]= "35)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[34]= new Array();
 choices[34][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[34][1] = "SGL (Splitterless G. Lite).";
 choices[34][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[34][3] = "CAP (Carrierless Amplitude Phase).";
 answers[34] = 3;
 units[34] = ['106'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 9391. Examen TIC A2  2013";
 preguntaids[34] = 9391


//  Id pregunta: 4578 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Cu&aacute;les son las ventajas de la fibra &oacute;ptica comparadas con los cableados de cobre?:";
 choices[35]= new Array();
 choices[35][0] = "Mayor velocidad de transmisi&oacute;n, mayor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, menor atenuaci&oacute;n";
 choices[35][1] = "Mayor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, distancias menores entre repetidores";
 choices[35][2] = "Menor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n, distancias mayores entre repetidores";
 choices[35][3] = "Mayor velocidad de transmisi&oacute;n, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n";
 answers[35] = 0;
 units[35] = ['106'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4578. ";
 preguntaids[35] = 4578


//  Id pregunta: 8805 Año de creación de pregunta: 2013
 questions[36]= "37)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[36]= new Array();
 choices[36][0] = "40GBASE-KR4";
 choices[36][1] = "4GBASE-SR40";
 choices[36][2] = "40GBASE-SR4";
 choices[36][3] = "40GBASE-LR4";
 answers[36] = 3;
 units[36] = ['106', '112'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8805. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";
 preguntaids[36] = 8805


//  Id pregunta: 7566 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[37]= new Array();
 choices[37][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps.";
 choices[37][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos.";
 choices[37][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado.";
 choices[37][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos.";
 answers[37] = 0;
 units[37] = ['106'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7566. Map 2005";
 preguntaids[37] = 7566


//  Id pregunta: 1645 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; servicio xDSL permite disponer de circuitos sim&eacute;tricos de 2 Mbps orientados a fines profesionales o de negocios?";
 choices[38]= new Array();
 choices[38][0] = "HDSL";
 choices[38][1] = "RADSL";
 choices[38][2] = "ADSL";
 choices[38][3] = "ZDSL";
 answers[38] = 0;
 units[38] = ['106'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1645. ";
 preguntaids[38] = 1645


//  Id pregunta: 8804 Año de creación de pregunta: 2013
 questions[39]= "40)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[39]= new Array();
 choices[39][0] = "Fibra 62.5/125 um";
 choices[39][1] = "Fibra 50/125 um";
 choices[39][2] = "Fibra 200/380 um";
 choices[39][3] = "Fibra 10/125 um";
 answers[39] = 3;
 units[39] = ['106'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8804. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[39] = 8804


//  Id pregunta: 5913 Año de creación de pregunta: 2007
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[40]= new Array();
 choices[40][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (InternationalTelecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el partelef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logramediante el empleo de unos filtros denominados &quot;splitters&quot;";
 choices[40][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrier-lessAmplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos deestandarizaci&oacute;n se decantaron por esta &uacute;ltima";
 choices[40][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5,que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access)";
 choices[40][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &quot;G.Lite&quot; o &quot;ADSL Lite&quot; es una variante de ADSL queproporciona menor caudal, pero tiene la ventaja de no requerir splitters";
 answers[40] = 2;
 units[40] = ['106'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5913. ";
 preguntaids[40] = 5913


//  Id pregunta: 4409 Año de creación de pregunta: 2002
 questions[41]= "42)  El l&aacute;ser, como fuente de luz, es:";
 choices[41]= new Array();
 choices[41][0] = "Un oscilador &oacute;ptico basado en la formaci&oacute;n de una onda electromagn&eacute;tica confinada dentro de una cavidad";
 choices[41][1] = "Un rayo luminoso compuesto de ondas de diversas frecuencias";
 choices[41][2] = "Un dispositivo &oacute;ptico con ganancia interna y voltaje de ruptura";
 choices[41][3] = "Un dispositivo utilizado para seleccionar los componentes de una se&ntilde;al de acuerdo con sus frecuencias";
 answers[41] = 0;
 units[41] = ['106'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4409. ";
 preguntaids[41] = 4409


//  Id pregunta: 4714 Año de creación de pregunta: 2002
 questions[42]= "43)  Gen&eacute;ricamente, xDSL es un conjunto de t&eacute;cnicas para:";
 choices[42]= new Array();
 choices[42][0] = "Transmitir a trav&eacute;s de l&iacute;neas de cobre a alta velocidad";
 choices[42][1] = "Transmitir a trav&eacute;s de l&iacute;neas &oacute;pticas a alta velocidad";
 choices[42][2] = "Transmitir por ondas de radio";
 choices[42][3] = "Transmitir utilizando sat&eacute;lites";
 answers[42] = 0;
 units[42] = ['106'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4714. ";
 preguntaids[42] = 4714


//  Id pregunta: 5315 Año de creación de pregunta: 2006
 questions[43]= "44)  La tecnolog&iacute;a que permite varios canales independientes en una &uacute;nica fibra &oacute;ptica mediante el uso de diferentes frecuencias de luz se llama";
 choices[43]= new Array();
 choices[43][0] = "Multiplexado por divisi&oacute;n de frecuencia (FDM)";
 choices[43][1] = "Multiplexado por divisi&oacute;n de tiempo (TDM)";
 choices[43][2] = "Multiplexado por divisi&oacute;n densa de la longitud de onda (DWDM)";
 choices[43][3] = "Multiplexado tradicional (MUX)";
 answers[43] = 2;
 units[43] = ['106'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5315. ";
 preguntaids[43] = 5315


//  Id pregunta: 8778 Año de creación de pregunta: 2013
 questions[44]= "45)  Acerca de las ventanas de transmisi&oacute;n en las fibras &oacute;pticas, se puede afirmar:";
 choices[44]= new Array();
 choices[44][0] = "Son provocadas por la presencia del ion hidroxilo OH-";
 choices[44][1] = "La m&aacute;s amplia es la primera ventana, entre los 0,8 y 0,9 micras";
 choices[44][2] = "Alrededor de los 1550 nm existe una ventana de transmisi&oacute;n.";
 choices[44][3] = "La tercera ventana obliga a usar transmisiones monomodo";
 answers[44] = 2;
 units[44] = ['106'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8778. ";
 preguntaids[44] = 8778


//  Id pregunta: 9871 Año de creación de pregunta: 2015
 questions[45]= "46)  El teorema de Nyquist establece que:";
 choices[45]= new Array();
 choices[45][0] = "El n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal no puede ser superior al doble de su ancho de banda.";
 choices[45][1] = "La relaci&oacute;n se&ntilde;al a ruido presente en el medio de transmisi&oacute;n no puede ser superior al doble de su ancho de banda.";
 choices[45][2] = "La eficiencia espectral es la relaci&oacute;n entre la velocidad de transmisi&oacute;n y el n&uacute;mero m&aacute;ximo de baudios que pueden transmitirse.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = 0;
 units[45] = ['104', '106'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 9871. ";
 preguntaids[45] = 9871


//  Id pregunta: 8195 Año de creación de pregunta: 2011
 questions[46]= "47)  Un cable consistente en un n&uacute;cleo de vidrio con un alto Indice refracci&oacute;n, rodeada de una capa o revestimiento de material similar, pero con &iacute;ndice de refracci&oacute;n ligeramente menor, y, todo ello, envuelto en una cubierta do protecci&oacute;n totalmente opaca que le proporciona consistencia, es un cable:";
 choices[46]= new Array();
 choices[46][0] = "De par trenzado tipo BS/UTP (Braided ana screened unshielded twisteo pair).";
 choices[46][1] = "Coaxial de tipo thick";
 choices[46][2] = "De par trenzado tipo S/STP (Screened and shielded twisted pair)";
 choices[46][3] = "De fibra &oacute;ptica";
 answers[46] = 3;
 units[46] = ['106'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8195. Examen TIC A2 2010 interna";
 preguntaids[46] = 8195


//  Id pregunta: 1920 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; funci&oacute;n realiza el splitter en la conexi&oacute;n ADSL?";
 choices[47]= new Array();
 choices[47][0] = "Para discriminar dos bandas de frecuencias";
 choices[47][1] = "Para ecualizar la se&ntilde;al vocal";
 choices[47][2] = "EI splitter solo se utiliza en las conexiones HDSL";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = 0;
 units[47] = ['106'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1920. ";
 preguntaids[47] = 1920


//  Id pregunta: 8806 Año de creación de pregunta: 2013
 questions[48]= "49)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[48]= new Array();
 choices[48][0] = "CWDM";
 choices[48][1] = "SDH";
 choices[48][2] = "WDM";
 choices[48][3] = "DWDM";
 answers[48] = 3;
 units[48] = ['106'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8806. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";
 preguntaids[48] = 8806


//  Id pregunta: 8474 Año de creación de pregunta: 2011
 questions[49]= "50)  En radio, &iquest;Qu&eacute; quiere decir MIMO?";
 choices[49]= new Array();
 choices[49][0] = "Maximum Input, Minimum Output";
 choices[49][1] = "Minimum Input, Maximum Output";
 choices[49][2] = "Multiple-Input Multiple-Output";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = 2;
 units[49] = ['106'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8474. ";
 preguntaids[49] = 8474


//  Id pregunta: 882 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[50]= new Array();
 choices[50][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[50][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[50][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[50][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[50] = 3;
 units[50] = ['106'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 882. AGE A1 2015";
 preguntaids[50] = 882


//  Id pregunta: 1771 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale cu&aacute;l de los siguientes est&aacute;ndares regula la tecnolog&iacute;a WiMAX.";
 choices[51]= new Array();
 choices[51][0] = "IEEE 802.3";
 choices[51][1] = "IEEE 802.11";
 choices[51][2] = "IEEE 802.15";
 choices[51][3] = "IEEE 802.16";
 answers[51] = 3;
 units[51] = ['106'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1771. ";
 preguntaids[51] = 1771


//  Id pregunta: 4476 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguentes es una de las ventajas de utilizar fibra &oacute;ptica, frente a la utilizaci&oacute;n de cable en una red de &aacute;rea local?:";
 choices[52]= new Array();
 choices[52][0] = "Dispositivos y adaptadores m&aacute;s baratos";
 choices[52][1] = "Menor n&uacute;mero de bytes necesarios para obtener el sincronismo";
 choices[52][2] = "Mayor confidencialidad de la informaci&oacute;n que circula";
 choices[52][3] = "Menor ancho de banda";
 answers[52] = 2;
 units[52] = ['106'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4476. ";
 preguntaids[52] = 4476


//  Id pregunta: 7786 Año de creación de pregunta: 2010
 questions[53]= "54)  En referencia a WiMAX, seleccione cu&aacute;l de las siguientes opciones se corresponde con WiMAX m&oacute;vil:";
 choices[53]= new Array();
 choices[53][0] = "802.16i.";
 choices[53][1] = "802.16e.";
 choices[53][2] = "802.16f.";
 choices[53][3] = "802.16n.";
 answers[53] = 1;
 units[53] = ['106'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7786. ";
 preguntaids[53] = 7786


//  Id pregunta: 5050 Año de creación de pregunta: 2002
 questions[54]= "55)  Seg&uacute;n la normativa UN-85, a cuanto asciende la m&aacute;xima potencia (PIRE) que un transmisor puede generar en redes inal&aacute;mbricas de banda 2,4 GHz?:";
 choices[54]= new Array();
 choices[54][0] = "10 mW";
 choices[54][1] = "1W";
 choices[54][2] = "100 mW";
 choices[54][3] = "1 mW";
 answers[54] = 2;
 units[54] = ['106'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5050. ";
 preguntaids[54] = 5050


//  Id pregunta: 8784 Año de creación de pregunta: 2013
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[55]= new Array();
 choices[55][0] = "1000BASE-SX";
 choices[55][1] = "1000BASE-LX";
 choices[55][2] = "1000BASE-TX";
 choices[55][3] = "1000BASE-CX";
 answers[55] = 1;
 units[55] = ['106'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 8784. Examen TIC A2 2011";
 preguntaids[55] = 8784


//  Id pregunta: 8095 Año de creación de pregunta: 2011
 questions[56]= "57)  Las fibras monomodo:";
 choices[56]= new Array();
 choices[56][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[56][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[56][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[56][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[56] = 0;
 units[56] = ['106'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8095. Analista Ayto. Madrid 2010";
 preguntaids[56] = 8095


//  Id pregunta: 9859 Año de creación de pregunta: 2015
 questions[57]= "58)  Indique el orden correcto, de mayor a menor, en velocidad de transmisi&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "LTE, UMTS y GPRS.";
 choices[57][1] = "W-CDMA, WiMAX y EDGE.EGDE, UMTS y LTE.";
 choices[57][2] = "HSPA, LTE y GPRS.";
 choices[57][3] = "WiMAX, GPRS y LTE.";
 answers[57] = 0;
 units[57] = ['117', '106'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9859. ";
 preguntaids[57] = 9859


//  Id pregunta: 7771 Año de creación de pregunta: 2010
 questions[58]= "59)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes wireless de banda ancha (MBWA):";
 choices[58]= new Array();
 choices[58][0] = "802.3.";
 choices[58][1] = "802.11.";
 choices[58][2] = "802.15.";
 choices[58][3] = "802.20.";
 answers[58] = 3;
 units[58] = ['106'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7771. ";
 preguntaids[58] = 7771


//  Id pregunta: 5085 Año de creación de pregunta: 2002
 questions[59]= "60)  Usaremos fibra &oacute;ptica, frente a cable coaxial o par trenzado, cuando:";
 choices[59]= new Array();
 choices[59][0] = "La red se instala en un entorno que exige inmunidad al ruido";
 choices[59][1] = "Es un factor determinante la facilidad de instalaci&oacute;n";
 choices[59][2] = "Se necesita construir el backbone en una WAN";
 choices[59][3] = "Se pondera muy alto el abaratamiento de costes";
 answers[59] = 2;
 units[59] = ['106'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5085. ";
 preguntaids[59] = 5085


//  Id pregunta: 10110 Año de creación de pregunta: 2015
 questions[60]= "61)  La red de acceso especificada para la tecnolog&iacute;a de comunicaciones m&oacute;viles LTE (Long Term Evolution) y que utiliza la tecnolog&iacute;a OFDMA para la comunicaci&oacute;n con los equipos de los usuarios se llama:";
 choices[60]= new Array();
 choices[60][0] = "E-UTRAN";
 choices[60][1] = "FFTN";
 choices[60][2] = "LMDS";
 choices[60][3] = "WIMAX";
 answers[60] = 0;
 units[60] = ['117', '106'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 10110. Examen TIC A2 2014";
 preguntaids[60] = 10110


//  Id pregunta: 4504 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes es un m&eacute;todo de modulaci&oacute;n &oacute;ptica?:";
 choices[61]= new Array();
 choices[61][0] = "Modulaci&oacute;n directa";
 choices[61][1] = "Modulaci&oacute;n indirecta";
 choices[61][2] = "Modulaci&oacute;n de fase";
 choices[61][3] = "Modulaci&oacute;n interna";
 answers[61] = 0;
 units[61] = ['106'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4504. ";
 preguntaids[61] = 4504


//  Id pregunta: 4518 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes respuestas sobre CDDI (o CuDDI o TP-DDI) es falsa?:";
 choices[62]= new Array();
 choices[62][0] = "CDDI tiene toda la tolerancia a fallos y velocidad que la FDDI";
 choices[62][1] = "CDDI usa una especificaci&oacute;n PMD ANSI diferente que la FDDI";
 choices[62][2] = "CDDI tiene la misma limitaci&oacute;n de distancia que la FDDI";
 choices[62][3] = "CDDI usa un cableado m&aacute;s econ&oacute;mico que la FDDI";
 answers[62] = 2;
 units[62] = ['106'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4518. ";
 preguntaids[62] = 4518


//  Id pregunta: 1646 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l es la velocidad m&aacute;xima de bajada con el est&aacute;ndar G.992.5, conocido como ADSL2+?";
 choices[63]= new Array();
 choices[63][0] = "10 Mbps";
 choices[63][1] = "12 Mbps";
 choices[63][2] = "2 Mbps";
 choices[63][3] = "24 Mbps";
 answers[63] = 3;
 units[63] = ['106'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1646. ";
 preguntaids[63] = 1646


//  Id pregunta: 4481 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto de la fibra &oacute;ptica?:";
 choices[64]= new Array();
 choices[64][0] = "La fibra &oacute;ptica monomodo permite mayor ancho de banda que la multimodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[64][1] = "La fibra &oacute;ptica multimodo permite mayor ancho de banda que la monomodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[64][2] = "La fibra &oacute;ptica monomodo permite menor ancho de banda que la multimodo";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = 0;
 units[64] = ['106'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4481. ";
 preguntaids[64] = 4481


//  Id pregunta: 7595 Año de creación de pregunta: 2010
 questions[65]= "66)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN (Gateway GPRS Support Node)?";
 choices[65]= new Array();
 choices[65][0] = "La gesti&oacute;n de la movilidad.";
 choices[65][1] = "El cifrado y autenticaci&oacute;n.";
 choices[65][2] = "La conexi&oacute;n al HLR (Home Location Register).";
 choices[65][3] = "La conexi&oacute;n a los ISP (Internet Service Provider).";
 answers[65] = 3;
 units[65] = ['106'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7595. Map 2006";
 preguntaids[65] = 7595


//  Id pregunta: 7548 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes organismos de normalizaci&oacute;n ha promovido el est&aacute;ndar GSM?";
 choices[66]= new Array();
 choices[66][0] = "ISO (International Standards Organization).";
 choices[66][1] = "IEEE (Institute of Electrical Engineers).";
 choices[66][2] = "ETSI (European Telecommunications Standards Institute).";
 choices[66][3] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n).";
 answers[66] = 2;
 units[66] = ['106'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7548. Map 2005";
 preguntaids[66] = 7548


//  Id pregunta: 10847 Año de creación de pregunta: 2015
 questions[67]= "68)  En LTE, el S-GW:";
 choices[67]= new Array();
 choices[67][0] = "Es el punto de interconexi&oacute;n a redes IP externas.";
 choices[67][1] = "Une la red de acceso con el n&uacute;cleo de red.";
 choices[67][2] = "Gestiona la QoS en los servicios.";
 choices[67][3] = "Almacena y actualiza la base de datos que contiene la informaci&oacute;n de suscripci&oacute;n del usuario.";
 answers[67] = 1;
 units[67] = ['106', '117'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 10847. ";
 preguntaids[67] = 10847


//  Id pregunta: 5369 Año de creación de pregunta: 2006
 questions[68]= "69)  Para transmitir Gigabit Ethernet";
 choices[68]= new Array();
 choices[68][0] = "Es necesario un cableado de categoria 6";
 choices[68][1] = "Es necesaria fibra &oacute;ptica";
 choices[68][2] = "Se puede usar cable coaxial";
 choices[68][3] = "ninguna de las anteriores";
 answers[68] = 3;
 units[68] = ['106'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5369. ";
 preguntaids[68] = 5369


//  Id pregunta: 8619 Año de creación de pregunta: 2013
 questions[69]= "70)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[69]= new Array();
 choices[69][0] = "Independiente/Infraestructura";
 choices[69][1] = "Activo/Pasivo";
 choices[69][2] = "Manual/Continuo";
 choices[69][3] = "Modo voz/Modo voz + datos";
 answers[69] = 1;
 units[69] = ['106'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 8619. ";
 preguntaids[69] = 8619


//  Id pregunta: 9396 Año de creación de pregunta: 2014
 questions[70]= "71)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[70]= new Array();
 choices[70][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[70][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[70][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[70][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[70] = 1;
 units[70] = ['106'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9396. Examen TIC A2  2013";
 preguntaids[70] = 9396


//  Id pregunta: 5055 Año de creación de pregunta: 2002
 questions[71]= "72)  Se&ntilde;ale cu&aacute;l de los siguientes elementos NO es utilizado en las redes de fibra &oacute;ptica:";
 choices[71]= new Array();
 choices[71][0] = "Transceptor";
 choices[71][1] = "Repetidor";
 choices[71][2] = "Fibras &oacute;pticas";
 choices[71][3] = "Interfaces de RF";
 answers[71] = 3;
 units[71] = ['106'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5055. ";
 preguntaids[71] = 5055


//  Id pregunta: 1919 Año de creación de pregunta: 2016
 questions[72]= "73)  La banda de 5'47 GHz se utiliza para:";
 choices[72]= new Array();
 choices[72][0] = "Bluetooth";
 choices[72][1] = "Est&aacute; reservada para uso militar";
 choices[72][2] = "WiFi";
 choices[72][3] = "Wimax";
 answers[72] = 3;
 units[72] = ['106'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1919. ";
 preguntaids[72] = 1919


//  Id pregunta: 5033 Año de creación de pregunta: 2002
 questions[73]= "74)  Respecto a los distintos modos de transmisi&oacute;n en una comunicaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "La telefon&iacute;a convencional es de tipo d&uacute;plex, mientras que la telefon&iacute;a m&oacute;vil es semiduplex";
 choices[73][1] = "La radiofusi&oacute;n de televisi&oacute;n es de tipo semid&uacute;plex, transmite sonido e imagen en la misma portadora";
 choices[73][2] = "La radiofusi&oacute;n de se&ntilde;al musical en frecuencia modulada es un sistema simplex";
 choices[73][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[73] = 2;
 units[73] = ['106'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5033. ";
 preguntaids[73] = 5033


//  Id pregunta: 10943 Año de creación de pregunta: 2015
 questions[74]= "75)  &iquest;Para que se utiliza el sistema de multiplexaci&oacute;n CWDM?";
 choices[74]= new Array();
 choices[74][0] = "dar soporte a aplicaciones de redes de &aacute;rea metropolitana, donde se busca no tanto alcanzar largas distancias sino reducci&oacute;n de costes";
 choices[74][1] = "se utiliza para el transporte de grandes cantidades de informaci&oacute;n a larga distancia";
 choices[74][2] = "Actualmente no se utiliza";
 choices[74][3] = "El sistema CWDM es interoperable con DWDM.";
 answers[74] = 0;
 units[74] = ['106'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 10943. ";
 preguntaids[74] = 10943


