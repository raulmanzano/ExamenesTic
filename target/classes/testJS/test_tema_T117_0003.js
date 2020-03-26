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
//  Id pregunta: 9500 Año de creación de pregunta: 2014
 questions[0]= "1)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[0]= new Array();
 choices[0][0] = "Para el canal de subida utiliza la modulaci&oacute;n WCDMA y para el de bajada, OFDMA";
 choices[0][1] = "Corresponde a la release 8 del 3GPP (3rd Generation Partnership Project)";
 choices[0][2] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[0][3] = "El ancho de banda de los canales es variable entre 1,25MHz y 20MHz";
 answers[0] = 0;
 units[0] = ['117'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9500. Para el canal de subida usa SC-FDMA (Single Carrier FDMA)";
 preguntaids[0] = 9500


//  Id pregunta: 9498 Año de creación de pregunta: 2014
 questions[1]= "2)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[1]= new Array();
 choices[1][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[1][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[1][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[1][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[1] = 1;
 units[1] = ['117'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9498. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";
 preguntaids[1] = 9498


//  Id pregunta: 9394 Año de creación de pregunta: 2014
 questions[2]= "3)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[2]= new Array();
 choices[2][0] = "GPRS";
 choices[2][1] = "HSDPA";
 choices[2][2] = "HSUPA";
 choices[2][3] = "UMTS";
 answers[2] = 1;
 units[2] = ['117'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9394. Examen TIC A2  2013";
 preguntaids[2] = 9394


//  Id pregunta: 10377 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;C&oacute;mo se denominan los sistemas de comunicaciones m&oacute;viles que realizan la transmisi&oacute;n y recepci&oacute;n de forma secuencial en un sentido cada vez?";
 choices[3]= new Array();
 choices[3][0] = "Paralelos";
 choices[3][1] = "D&uacute;plex";
 choices[3][2] = "Semi-duplex";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = 2;
 units[3] = ['117'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10377. ";
 preguntaids[3] = 10377


//  Id pregunta: 10769 Año de creación de pregunta: 2015
 questions[4]= "5)  La velocidad y el ancho de banda en las celdas LTE es:";
 choices[4]= new Array();
 choices[4][0] = "Bajada hasta 326Mbps y ancho de canal de 20MHz";
 choices[4][1] = "Bajada hasta 2Mbps y ancho de canal de 5MHz";
 choices[4][2] = "Bajada hasta 256Mbps y ancho de canal de 200KHz";
 choices[4][3] = "Bajada hasta 1Gpbs y ancho de canal de 160MHz";
 answers[4] = 0;
 units[4] = ['117'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10769. ";
 preguntaids[4] = 10769


//  Id pregunta: 8832 Año de creación de pregunta: 2013
 questions[5]= "6)  En LTE, las funciones de control de recursos de radio, control de calidad de servicio y movilidad se llevan a cabo en:";
 choices[5]= new Array();
 choices[5][0] = "Los Evolved Node-B";
 choices[5][1] = "Los Evolved RNC";
 choices[5][2] = "En las BSC";
 choices[5][3] = "En servidores remotos del operador, a los que se accede por conmutaci&oacute;n en una red IP";
 answers[5] = 0;
 units[5] = ['117'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8832. ";
 preguntaids[5] = 8832


//  Id pregunta: 9496 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[6]= new Array();
 choices[6][0] = "Corresponde a la release 7 del 3GPP (3rd Generation Partnership Project)";
 choices[6][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[6][2] = "Reutiliza los RNC (Radio Network Controller) de la red 3G incorporando las funciones de los nodos B";
 choices[6][3] = "El ancho de banda de los canales pasa de los 5 MHz de 3G a los 20MHz";
 answers[6] = 1;
 units[6] = ['117'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9496. Se trata de la release 8. Desaparece el RNC y sus funciones se incorporan al eNode B (Evolved Node B). El ancho de banda no es fijo sino variable entre 1,25MHz y 20MHz.";
 preguntaids[6] = 9496


//  Id pregunta: 8836 Año de creación de pregunta: 2013
 questions[7]= "8)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[7]= new Array();
 choices[7][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[7][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[7][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[7][3] = "La modulaci&oacute;n utilizada en GMS es GMSK";
 answers[7] = 2;
 units[7] = ['117'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8836. ";
 preguntaids[7] = 8836


//  Id pregunta: 9499 Año de creación de pregunta: 2014
 questions[8]= "9)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[8]= new Array();
 choices[8][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[8][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[8][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[8][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[8] = 3;
 units[8] = ['117'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 9499. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";
 preguntaids[8] = 9499


//  Id pregunta: 8831 Año de creación de pregunta: 2013
 questions[9]= "10)  Seg&uacute;n la UIT, dentro de la denominaci&oacute;n 4G, se pueden incluir las siguientes tecnolog&iacute;as:";
 choices[9]= new Array();
 choices[9][0] = "LTE";
 choices[9][1] = "WiMAX y LTE";
 choices[9][2] = "WiMAX";
 choices[9][3] = "LTE, WiMAX y HSPA+";
 answers[9] = 3;
 units[9] = ['117'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8831. ";
 preguntaids[9] = 8831


//  Id pregunta: 8834 Año de creación de pregunta: 2013
 questions[10]= "11)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[10]= new Array();
 choices[10][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[10][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP.";
 choices[10][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP.";
 choices[10][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[10] = 1;
 units[10] = ['117'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8834. ";
 preguntaids[10] = 8834


//  Id pregunta: 8838 Año de creación de pregunta: 2013
 questions[11]= "12)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[11]= new Array();
 choices[11][0] = "Direcci&oacute;n IPv6 compatible con IPv4.";
 choices[11][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[11][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[11][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[11] = 2;
 units[11] = ['117', '109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8838. Examen TIC A1 2011";
 preguntaids[11] = 8838


//  Id pregunta: 10766 Año de creación de pregunta: 2015
 questions[12]= "13)  Indique la respuesta FALSA sobre la tecnolog&iacute;a HSDPA.";
 choices[12]= new Array();
 choices[12][0] = "Utiliza t&eacute;cnicas de redundancia incremental durante la transmisi&oacute;n de tramas.";
 choices[12][1] = "Incorpora una mejora del enlace ascendente de UMTS de manera que permite disponer de una nueva portadora a 384 Kbps.";
 choices[12][2] = "Utiliza FAST PACKET SCHEDULING, con el cual las estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datos en el siguiente marco de 4 ms.";
 choices[12][3] = "Mantiene la compatibilidad en sentido inverso con W-CDMA.";
 answers[12] = 2;
 units[12] = ['117'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10766. ";
 preguntaids[12] = 10766


//  Id pregunta: 10847 Año de creación de pregunta: 2015
 questions[13]= "14)  En LTE, el S-GW:";
 choices[13]= new Array();
 choices[13][0] = "Es el punto de interconexi&oacute;n a redes IP externas.";
 choices[13][1] = "Une la red de acceso con el n&uacute;cleo de red.";
 choices[13][2] = "Gestiona la QoS en los servicios.";
 choices[13][3] = "Almacena y actualiza la base de datos que contiene la informaci&oacute;n de suscripci&oacute;n del usuario.";
 answers[13] = 1;
 units[13] = ['106', '117'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10847. ";
 preguntaids[13] = 10847


//  Id pregunta: 10110 Año de creación de pregunta: 2015
 questions[14]= "15)  La red de acceso especificada para la tecnolog&iacute;a de comunicaciones m&oacute;viles LTE (Long Term Evolution) y que utiliza la tecnolog&iacute;a OFDMA para la comunicaci&oacute;n con los equipos de los usuarios se llama:";
 choices[14]= new Array();
 choices[14][0] = "E-UTRAN";
 choices[14][1] = "FFTN";
 choices[14][2] = "LMDS";
 choices[14][3] = "WIMAX";
 answers[14] = 0;
 units[14] = ['117', '106'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10110. Examen TIC A2 2014";
 preguntaids[14] = 10110


//  Id pregunta: 9501 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[15]= new Array();
 choices[15][0] = "Es compatible con las redes IEEE 802.16e";
 choices[15][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[15][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[15][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[15] = 1;
 units[15] = ['117'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9501. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server),";
 preguntaids[15] = 9501


//  Id pregunta: 9663 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[16]= new Array();
 choices[16][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga.";
 choices[16][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[16][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[16][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[16] = 1;
 units[16] = ['117'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9663. Examen TIC A1 2013";
 preguntaids[16] = 9663


//  Id pregunta: 9230 Año de creación de pregunta: 2014
 questions[17]= "18)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[17]= new Array();
 choices[17][0] = "384 kbps.";
 choices[17][1] = "115 kbps.";
 choices[17][2] = "2 Mbps.";
 choices[17][3] = "10 Mbps.";
 answers[17] = 0;
 units[17] = ['117'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9230. Examen TIC A1 2013";
 preguntaids[17] = 9230


//  Id pregunta: 10145 Año de creación de pregunta: 2015
 questions[18]= "19)  La cuarta generaci&oacute;n de telefon&iacute;a m&oacute;vil (4G) incluye:";
 choices[18]= new Array();
 choices[18][0] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[18][1] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 choices[18][2] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[18][3] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 answers[18] = 0;
 units[18] = ['117', '106'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10145. Examen TIC A1 2014";
 preguntaids[18] = 10145


//  Id pregunta: 8842 Año de creación de pregunta: 2013
 questions[19]= "20)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[19]= new Array();
 choices[19][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatic Repeat Request)";
 choices[19][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[19][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[19][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[19] = 3;
 units[19] = ['117'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8842. ";
 preguntaids[19] = 8842


//  Id pregunta: 9859 Año de creación de pregunta: 2015
 questions[20]= "21)  Indique el orden correcto, de mayor a menor, en velocidad de transmisi&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "LTE, UMTS y GPRS.";
 choices[20][1] = "W-CDMA, WiMAX y EDGE.EGDE, UMTS y LTE.";
 choices[20][2] = "HSPA, LTE y GPRS.";
 choices[20][3] = "WiMAX, GPRS y LTE.";
 answers[20] = 0;
 units[20] = ['117', '106'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9859. ";
 preguntaids[20] = 9859


//  Id pregunta: 10864 Año de creación de pregunta: 2015
 questions[21]= "22)  Se&ntilde;ale el c&oacute;dec que no aplica compresi&oacute;n de entre los siguientes:";
 choices[21]= new Array();
 choices[21][0] = "G.711";
 choices[21][1] = "G.726";
 choices[21][2] = "G.729";
 choices[21][3] = "iLBC";
 answers[21] = 0;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10864. ";
 preguntaids[21] = 10864


//  Id pregunta: 9270 Año de creación de pregunta: 2014
 questions[22]= "23)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[22]= new Array();
 choices[22][0] = "Para mejorar la resistencia a las interferencias.";
 choices[22][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[22][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[22][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[22] = 0;
 units[22] = ['117'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9270. Examen TIC A1 2013";
 preguntaids[22] = 9270


//  Id pregunta: 8839 Año de creación de pregunta: 2013
 questions[23]= "24)  En las comunicaciones m&oacute;viles, permitir que se mantenga la conexi&oacute;n cuando un dispositivo m&oacute;vil se cambia dentro de la red a la que pertenece de la zona cubierta por una estaci&oacute;n base a otra, se conoce como:";
 choices[23]= new Array();
 choices[23][0] = "Roaming.";
 choices[23][1] = "Cobertura.";
 choices[23][2] = "Talk-out.";
 choices[23][3] = "hand-off o handover.";
 answers[23] = 3;
 units[23] = ['117'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8839. Examen TIC A2 2011";
 preguntaids[23] = 8839


//  Id pregunta: 8840 Año de creación de pregunta: 2013
 questions[24]= "25)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[24]= new Array();
 choices[24][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[24][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[24][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[24][3] = "Ninguna de las respuestas es correcta.";
 answers[24] = 0;
 units[24] = ['117'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8840. Examen TIC A2 2011";
 preguntaids[24] = 8840


//  Id pregunta: 9395 Año de creación de pregunta: 2014
 questions[25]= "26)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[25]= new Array();
 choices[25][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[25][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[25][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[25][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[25] = 1;
 units[25] = ['117'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9395. Examen TIC A2  2013";
 preguntaids[25] = 9395


//  Id pregunta: 9497 Año de creación de pregunta: 2014
 questions[26]= "27)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[26]= new Array();
 choices[26][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[26][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[26][2] = "Es compatible con las redes IEEE 802.16e";
 choices[26][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[26] = 2;
 units[26] = ['117'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9497. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";
 preguntaids[26] = 9497


//  Id pregunta: 9402 Año de creación de pregunta: 2014
 questions[27]= "28)  En el contexto de comunicaciones inal&aacute;mbricas, MIMO significa:";
 choices[27]= new Array();
 choices[27][0] = "Multiple Input Multiple Output.";
 choices[27][1] = "Massive Input Massive Output.";
 choices[27][2] = "Multiplexed Input Multiplexed Output.";
 choices[27][3] = "Mapped Input Mapped Output.";
 answers[27] = 0;
 units[27] = ['117'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9402. Examen TIC A2  2013";
 preguntaids[27] = 9402


//  Id pregunta: 10109 Año de creación de pregunta: 2015
 questions[28]= "29)  Se&ntilde;alar de las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles cu&aacute;l utiliza W-CDMA:";
 choices[28]= new Array();
 choices[28][0] = "GSM";
 choices[28][1] = "EDGE";
 choices[28][2] = "UMTS";
 choices[28][3] = "LTE";
 answers[28] = 2;
 units[28] = ['117'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 10109. Examen TIC A2 2014";
 preguntaids[28] = 10109


//  Id pregunta: 8833 Año de creación de pregunta: 2013
 questions[29]= "30)  Sobre el interfaz radio de LTE, se puede afirmar";
 choices[29]= new Array();
 choices[29][0] = "Utiliza WCDMA";
 choices[29][1] = "Utiliza unicamente FDD para la duplexaci&oacute;n.";
 choices[29][2] = "Utiliza OFDM para la bajada y FDMA de portadora simple en la subida";
 choices[29][3] = "Combina TDMA y FDMA";
 answers[29] = 2;
 units[29] = ['117'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8833. ";
 preguntaids[29] = 8833


//  Id pregunta: 9323 Año de creación de pregunta: 2014
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[30]= new Array();
 choices[30][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[30][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[30][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[30][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[30] = 2;
 units[30] = ['117'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 9323. ";
 preguntaids[30] = 9323


//  Id pregunta: 10764 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Qu&eacute; tecnolog&iacute;a se caracteriza por dimensionar un sistema de colas sin p&eacute;rdidas con multiplexaci&oacute;n de frecuencias, alta velocidad en el establecimiento de conexiones, estructura celular, transmisi&oacute;n digital y para grupos cerrados de usuarios?";
 choices[31]= new Array();
 choices[31][0] = "DECT";
 choices[31][1] = "TETRA";
 choices[31][2] = "PMR";
 choices[31][3] = "CDCS";
 answers[31] = 1;
 units[31] = ['117'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10764. ";
 preguntaids[31] = 10764


//  Id pregunta: 10848 Año de creación de pregunta: 2015
 questions[32]= "33)  En UMTS, la banda ascendente FDD usa el rango de frecuencias:";
 choices[32]= new Array();
 choices[32][0] = "1920 MHz a 1980 MHz";
 choices[32][1] = "1980 MHz a 2010 MHz";
 choices[32][2] = "2110 MHz a 2170 MHz";
 choices[32][3] = "2170 MHz a 2200 MHz";
 answers[32] = 0;
 units[32] = ['117'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 10848. ";
 preguntaids[32] = 10848


//  Id pregunta: 9860 Año de creación de pregunta: 2015
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "La tarjeta SIM contiene la clave del algoritmo de autenticaci&oacute;n con la red GSM.";
 choices[33][1] = "En GSM se utilizan circuitos conmutados extremo a extremo.";
 choices[33][2] = "En la arquitectura de GSM, la interfaz Um se encuentra entre el Subsistema de Estaci&oacute;n Base (BSS) y la Estaci&oacute;n M&oacute;vil (MS).";
 choices[33][3] = "En GSM, la separaci&oacute;n entre portadoras ascendente y descendente es de 45 Mhz.";
 answers[33] = 2;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9860. http://seguridadengprs.galeon.com/tema2.htm";
 preguntaids[33] = 9860


//  Id pregunta: 8835 Año de creación de pregunta: 2013
 questions[34]= "35)  De las tecnolog&iacute;as 4G, se puede afirmar:";
 choices[34]= new Array();
 choices[34][0] = "WiMax alcanza velocidades de bajada inferiores a 100 Mbps";
 choices[34][1] = "LTE alcanza velocidades de bajada superiores a las que se alcanzan con WiMax";
 choices[34][2] = "WiMAX puede alcanzar velocidades de bajada superiores a 100 Mbps";
 choices[34][3] = "HSPA+ no puede superar los 25 Mbps de bajada puesto que no mantiene una conexi&oacute;n permanente con la estaci&oacute;n base";
 answers[34] = 2;
 units[34] = ['117'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8835. ";
 preguntaids[34] = 8835


//  Id pregunta: 8841 Año de creación de pregunta: 2013
 questions[35]= "36)  Se&ntilde;ale la respuesta falsa con respecto a LTE:";
 choices[35]= new Array();
 choices[35][0] = "Emplea radiocanales de frecuencia fija de 15 Mhz";
 choices[35][1] = "Utiliza canales de ancho de banda adaptativos.";
 choices[35][2] = "Puede trabajar en muchas bandas frecuenciales diferentes";
 choices[35][3] = "Utiliza modulaciones QPSK, 16QAM y 64QAM";
 answers[35] = 0;
 units[35] = ['117'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8841. Examen Teleco Ayto Madrid 2010";
 preguntaids[35] = 8841


//  Id pregunta: 10754 Año de creación de pregunta: 2015
 questions[36]= "37)  En las redes m&oacute;viles 4G, LTE, el interfaz existente entre los eNodeB y la MME (entidad de gesti&oacute;n de la movilidad), se denomina:";
 choices[36]= new Array();
 choices[36][0] = "x2";
 choices[36][1] = "S1";
 choices[36][2] = "Um";
 choices[36][3] = "Abis";
 answers[36] = 0;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10754. ";
 preguntaids[36] = 10754


//  Id pregunta: 10108 Año de creación de pregunta: 2015
 questions[37]= "38)  La tecnolog&iacute;a de telefon&iacute;a m&oacute;vil GSM utiliza, entre otras, la siguiente base de datos de usuarios:";
 choices[37]= new Array();
 choices[37][0] = "MSC";
 choices[37][1] = "BSC";
 choices[37][2] = "NSS";
 choices[37][3] = "VLR";
 answers[37] = 3;
 units[37] = ['117'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 10108. Examen TIC A2 2014";
 preguntaids[37] = 10108


