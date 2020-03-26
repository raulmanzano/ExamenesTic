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
//  Id pregunta: 4580 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;ntas subredes son posibles en una red de clase C, con una m&aacute;scara de subnet de 255.255.255.224?:";
 choices[0]= new Array();
 choices[0][0] = "32";
 choices[0][1] = "30";
 choices[0][2] = "8";
 choices[0][3] = "6";
 answers[0] = 3;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4580. Se usa la f&oacute;rmula 2^N=Y, siendo N el n&uacute;mero de bits ocupados seg&uacute;n la m&aacute;scara, correspodientes a la asignaci&oacute;n por defecto para Host (en este caso  224=11100000 2^3=8) Pero no aplicamos subnet 0 de cara al examen, por lo que el n&uacute;mero de subredes es 8 - 2; es decir, 6";
 preguntaids[0] = 4580


//  Id pregunta: 4624 Año de creación de pregunta: 2002
 questions[1]= "2)  En RDSI, &iquest;qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[1]= new Array();
 choices[1][0] = "R";
 choices[1][1] = "S";
 choices[1][2] = "T";
 choices[1][3] = "U";
 answers[1] = 2;
 units[1] = ['114'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4624. ";
 preguntaids[1] = 4624


//  Id pregunta: 4597 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes es verdadera en relaci&oacute;n con las funciones de conexi&oacute;n del modelo OSI?";
 choices[2]= new Array();
 choices[2][0] = "El multiplexado es la conexi&oacute;n de varias conexiones de nivel N en una conexi&oacute;n de nivel N-1";
 choices[2][1] = "La concatenaci&oacute;n consiste en unir varias N-PDU en una (N-1)PDU";
 choices[2][2] = "La segmentaci&oacute;n consiste en dividir una N-SDU en varias (N-1)SDU";
 choices[2][3] = "El reensamblado es la operaci&oacute;n contraria a la concatenaci&oacute;n";
 answers[2] = 0;
 units[2] = ['105'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4597. ";
 preguntaids[2] = 4597


//  Id pregunta: 4647 Año de creación de pregunta: 2002
 questions[3]= "4)  BGP es un 'exterior gateway protocol'. &iquest;Qu&eacute; significa esto?:";
 choices[3]= new Array();
 choices[3][0] = "Usa algoritmos propietarios para calcular la ruta &oacute;ptima";
 choices[3][1] = "Es un protocolo que se utiliza para acceder dentro de Internet y ser reconocido por los firewalls";
 choices[3][2] = "Filtra el tr&aacute;fico de las fuentes exteriores antes de encaminarlo";
 choices[3][3] = "Encamina o enruta el tr&aacute;fico entre sistemas aut&oacute;nomos diferentes";
 answers[3] = 3;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4647. ";
 preguntaids[3] = 4647


//  Id pregunta: 4632 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[4]= new Array();
 choices[4][0] = "Spread spectrum con secuencia directa";
 choices[4][1] = "Spread spectrum con salto de frecuencia";
 choices[4][2] = "&quot;a&quot; y &quot;b&quot;";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = 1;
 units[4] = ['108'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4632. ";
 preguntaids[4] = 4632


//  Id pregunta: 4606 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Qu&eacute; es FTAM (File Transfer Access and Management)?:";
 choices[5]= new Array();
 choices[5][0] = "Un protocolo del nivel de presentaci&oacute;n para gesti&oacute;n de ficheros";
 choices[5][1] = "Una aplicaci&oacute;n para transferencia y compartici&oacute;n de archivos";
 choices[5][2] = "Una aplicaci&oacute;n para emulaci&oacute;n de terminales remotos";
 choices[5][3] = "Un protocolo de la capa TCP/IP para compartir archivos";
 answers[5] = 1;
 units[5] = ['105'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4606. ";
 preguntaids[5] = 4606


//  Id pregunta: 4614 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Qu&eacute; funci&oacute;n principal realiza una PABX?:";
 choices[6]= new Array();
 choices[6][0] = "Conmutaci&oacute;n";
 choices[6][1] = "Recogida de informaci&oacute;n de gesti&oacute;n de red";
 choices[6][2] = "Visualizaci&oacute;n de informaci&oacute;n de gesti&oacute;n de red";
 choices[6][3] = "Consulta bajo demanda de la informaci&oacute;n de gesti&oacute;n de red";
 answers[6] = 0;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4614. ";
 preguntaids[6] = 4614


//  Id pregunta: 4611 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Qu&eacute; es un puente (bridge) en el mundo de las comunicaciones?:";
 choices[7]= new Array();
 choices[7][0] = "Un equipo que enlaza varias redes a nivel 3 de OSI";
 choices[7][1] = "Un equipo que enlaza varias redes a nivel 4 de OSI";
 choices[7][2] = "Un equipo que enlaza varias redes a nivel 5 de OSI";
 choices[7][3] = "Nada de lo anterior";
 answers[7] = 3;
 units[7] = ['102'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4611. ";
 preguntaids[7] = 4611


//  Id pregunta: 4639 Año de creación de pregunta: 2002
 questions[8]= "9)  10BaseT es:";
 choices[8]= new Array();
 choices[8][0] = "Un tipo de modem primario";
 choices[8][1] = "Una variante del est&aacute;ndar IEEE 802.3 para trabajar sobre pares trenzados";
 choices[8][2] = "Un m&eacute;todo de acceso en contenci&oacute;n";
 choices[8][3] = "Un m&eacute;todo de acceso por paso de testigo";
 answers[8] = 1;
 units[8] = ['104'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4639. ";
 preguntaids[8] = 4639


//  Id pregunta: 4613 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Qu&eacute; funci&oacute;n cumple el punto de referencia S en RDSI?:";
 choices[9]= new Array();
 choices[9][0] = "Conexi&oacute;n de un TR1 a un TR2";
 choices[9][1] = "Conexi&oacute;n de un TE1 o un TA a un TR2";
 choices[9][2] = "Conexi&oacute;n de un TE2 a un TR2";
 choices[9][3] = "Conexi&oacute;n de un TE1 a un TE2";
 answers[9] = 1;
 units[9] = ['114'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4613. ";
 preguntaids[9] = 4613


//  Id pregunta: 4642 Año de creación de pregunta: 2002
 questions[10]= "11)  A la tecnolog&iacute;a que permite a un abonado disfrutar de servicios propios de su operadora cuando est&aacute; en itinerancia en otra operadora nacional o extranjera con la que se tengan acuerdos de roaming, se denomina:";
 choices[10]= new Array();
 choices[10][0] = "USSD";
 choices[10][1] = "CAMEL";
 choices[10][2] = "VHE";
 choices[10][3] = "I-Roaming";
 answers[10] = 1;
 units[10] = ['117'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4642. ";
 preguntaids[10] = 4642


//  Id pregunta: 4621 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Qu&eacute; &oacute;rbita es la m&aacute;s ventajosa para una operadora de telecomunicaciones en t&eacute;rminos de coste a la hora de poner un nuevo sat&eacute;lite?:";
 choices[11]= new Array();
 choices[11][0] = "La el&iacute;ptica";
 choices[11][1] = "La circular";
 choices[11][2] = "La ovoide";
 choices[11][3] = "La geoestacionaria";
 answers[11] = 3;
 units[11] = ['117'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4621. ";
 preguntaids[11] = 4621


//  Id pregunta: 4594 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Entre que dos dispositivos se utiliza el NNI (network node interface)?:";
 choices[12]= new Array();
 choices[12][0] = "Dos switches ATM";
 choices[12][1] = "Dos sistemas finales ATM";
 choices[12][2] = "Un DSU/CSU y un router";
 choices[12][3] = "Un sistema final ATM y un switch";
 answers[12] = 0;
 units[12] = ['107'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4594. ";
 preguntaids[12] = 4594


//  Id pregunta: 4634 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;Qu&eacute; topolog&iacute;a tiene una red ethernet cableada con 10 Base T?:";
 choices[13]= new Array();
 choices[13][0] = "Bus";
 choices[13][1] = "Estrella";
 choices[13][2] = "Anillo";
 choices[13][3] = "Doble bus";
 answers[13] = 1;
 units[13] = ['112'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4634. ";
 preguntaids[13] = 4634


//  Id pregunta: 4587 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;D&oacute;nde se define el punto de referencia R en RDSI?:";
 choices[14]= new Array();
 choices[14][0] = "Entre el ET2 (Equipo terminal de tipo 2) y el adaptador de terminales";
 choices[14][1] = "Entre el ET1 (Equipo terminal de tipo 1) y el adaptador de terminales";
 choices[14][2] = "Entre el TR1 y el TR2";
 choices[14][3] = "Entre el equipo de usaurio y el TR2 o TR1 cuando no hay TR2";
 answers[14] = 0;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4587. ";
 preguntaids[14] = 4587


//  Id pregunta: 4599 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Qu&eacute; ancho de banda tiene un acceso b&aacute;sico de RDSI en Europa?:";
 choices[15]= new Array();
 choices[15][0] = "64 kbps";
 choices[15][1] = "144 kbps";
 choices[15][2] = "128 kbps";
 choices[15][3] = "2048 kbps";
 answers[15] = 1;
 units[15] = ['114'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4599. ";
 preguntaids[15] = 4599


//  Id pregunta: 4595 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Por qu&eacute; motivo no debe utilizarse una red Ethernet para comunicar dispositivos que deban trabajar en tiempo real cr&iacute;tico?:";
 choices[16]= new Array();
 choices[16][0] = "Porque el tiempo medio entre fallos de este tipo de redes es bajo";
 choices[16][1] = "Porque la velocidad de este tipo de redes es demasiado baja";
 choices[16][2] = "Porque el tiempo m&aacute;ximo que tarda un nodo en acceder a la red no est&aacute; acotado";
 choices[16][3] = "Porque este tipo de redes responde al modelo cliente servidor y no permite comunicar dispositivos entre s&iacute;";
 answers[16] = 2;
 units[16] = ['104'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4595. ";
 preguntaids[16] = 4595


//  Id pregunta: 4582 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;Cu&aacute;ntos canales TDMA admite un sistema GSM 900?:";
 choices[17]= new Array();
 choices[17][0] = "992";
 choices[17][1] = "1000";
 choices[17][2] = "496";
 choices[17][3] = "2000";
 answers[17] = 0;
 units[17] = ['117'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4582. ";
 preguntaids[17] = 4582


//  Id pregunta: 4633 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Qu&eacute; t&eacute;cnica de multiplexaci&oacute;n es aquella en la que el n&uacute;mero de se&ntilde;ales simult&aacute;neas que se pueden transmitir por un circuito se obtiene dividiendo el ancho de banda del circuito entre el ancho de banda de las se&ntilde;ales a transmitir?:";
 choices[18]= new Array();
 choices[18][0] = "Multiplexaci&oacute;n estad&iacute;stica";
 choices[18][1] = "Multiplexaci&oacute;n por divisi&oacute;n de frecuencia";
 choices[18][2] = "Multiplexaci&oacute;n por divisi&oacute;n de tiempo";
 choices[18][3] = "Multiplexaci&oacute;n por divisi&oacute;n de fase";
 answers[18] = 1;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4633. ";
 preguntaids[18] = 4633


//  Id pregunta: 4590 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;En qu&eacute; componente de una red GSM se centraliza la gesti&oacute;n de los servicios suplementarios?:";
 choices[19]= new Array();
 choices[19][0] = "MSC";
 choices[19][1] = "HLR";
 choices[19][2] = "VLR";
 choices[19][3] = "EIR";
 answers[19] = 1;
 units[19] = ['117'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4590. ";
 preguntaids[19] = 4590


//  Id pregunta: 4589 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;En qu&eacute; bandas de frecuencias se han concedido licencias LMDS en Espa&ntilde;a?:";
 choices[20]= new Array();
 choices[20][0] = "450 y 900 MHz";
 choices[20][1] = "450 y 900 GHz";
 choices[20][2] = "3,5 y 26 MHz";
 choices[20][3] = "3,5 y 26 GHz";
 answers[20] = 3;
 units[20] = ['107'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4589. ";
 preguntaids[20] = 4589


//  Id pregunta: 4596 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Por qu&eacute; son m&aacute;s eficiente los protocolos orientados a bit que los orientados a car&aacute;cter?:";
 choices[21]= new Array();
 choices[21][0] = "Debido al relleno de bits";
 choices[21][1] = "La eficiencia de ambos protocolos es la misma";
 choices[21][2] = "Debido al relleno de caracteres";
 choices[21][3] = "Debido a la codificaci&oacute;n binaria de los caracteres";
 answers[21] = 0;
 units[21] = ['104'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4596. ";
 preguntaids[21] = 4596


//  Id pregunta: 4598 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes respecto del funcionamiento de TCP/IP no es cierta?";
 choices[22]= new Array();
 choices[22][0] = "Los routers no mantienen estado de las posibles conexiones extremo a extremo, y a nivel de red no existe el concepto de conexi&oacute;n";
 choices[22][1] = "Los paquetes entre un mismo par &lt;origen, destino&gt;, una vez seleccionada la ruta adecuada, deben seguir la misma ruta hasta el final de la transmisi&oacute;n";
 choices[22][2] = "No se garantiza capacidad m&iacute;nima, ni retardo m&aacute;ximo, ni variaciones acotadas de los retardos";
 choices[22][3] = "No se garantiza la entrega ni el orden de entrega, aunque s&iacute; la integridad del segmento";
 answers[22] = 1;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4598. ";
 preguntaids[22] = 4598


//  Id pregunta: 4627 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Qu&eacute; relaci&oacute;n hay entre Jerarqu&iacute;a Digital S&iacute;ncrona y ATM?:";
 choices[23]= new Array();
 choices[23][0] = "Son dos est&aacute;ndares correspondientes al mismo nivel ISO-OSI, por lo que la decisi&oacute;n entre uno y otro es alternativa";
 choices[23][1] = "Las celdas ATM suelen viajar 'embebidas' en tramas JDS";
 choices[23][2] = "Las tramas JDS suelen viajar embebidas en tramas ATM";
 choices[23][3] = "ATM y JDS son dos nombres distintos para el mismo est&aacute;ndar";
 answers[23] = 1;
 units[23] = ['107'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4627. ";
 preguntaids[23] = 4627


//  Id pregunta: 4592 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;En qu&eacute; consiste la funci&oacute;n de filtrado en un bridge?:";
 choices[24]= new Array();
 choices[24][0] = "Permitir el paso de determinadas frecuencias &uacute;nicamente";
 choices[24][1] = "Eliminaci&oacute;n de las tramas err&oacute;neas";
 choices[24][2] = "Separaci&oacute;n del tr&aacute;fico de dos subredes";
 choices[24][3] = "Los bridges (puentes) no tienen capacidad de filtrado, ya que operan al nivel de enlace";
 answers[24] = 2;
 units[24] = ['102'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4592. ";
 preguntaids[24] = 4592


//  Id pregunta: 4644 Año de creación de pregunta: 2002
 questions[25]= "26)  Al est&aacute;ndar de facto para la programaci&oacute;n de aplicaciones que se comunican entre ellos usando un interfaz TCP/IP se le denomina:";
 choices[25]= new Array();
 choices[25][0] = "pipes";
 choices[25][1] = "sockets";
 choices[25][2] = "sem&aacute;foros";
 choices[25][3] = "ninguno de los anteriores";
 answers[25] = 1;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4644. ";
 preguntaids[25] = 4644


//  Id pregunta: 4628 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Qu&eacute; se entiende por &quot;punto de sincronizaci&oacute;n principal&quot;?:";
 choices[26]= new Array();
 choices[26][0] = "En el nivel de red, se trata de nodos de cada subred encargados de sincronizar las comunicaciones que pasan por ellos";
 choices[26][1] = "En el nivel de enlace, son lugares de acceso a primitivas de servicio para control de flujo";
 choices[26][2] = "En el nivel de transporte, son puntos de sincronizaci&oacute;n de inicio y fin de una conexi&oacute;n";
 choices[26][3] = "En el nivel de sesi&oacute;n, son puntos que estructuran la transferencia de datos dividi&eacute;ndola en unidades de di&aacute;logo separadas";
 answers[26] = 3;
 units[26] = ['105'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4628. ";
 preguntaids[26] = 4628


//  Id pregunta: 4620 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Qu&eacute; nos dice el teorema del muestreo o teorema de Nyquist?:";
 choices[27]= new Array();
 choices[27][0] = "Que la frecuencia de muestreo debe ser mayor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[27][1] = "Que la frecuencia de muestreo debe ser menor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[27][2] = "Que la frecuencia de muestreo debe ser mayor o igual que el triple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[27][3] = "Que la frecuencia de muestreo debe ser mayor o igual que el cu&aacute;druple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 answers[27] = 0;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4620. ";
 preguntaids[27] = 4620


//  Id pregunta: 4616 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Qu&eacute; indica el teorema de Shannon?:";
 choices[28]= new Array();
 choices[28][0] = "La m&aacute;xima velocidad de transferencia de un canal  es  H*log(1+S/N), donde H es el ancho de banda del canal de transmisi&oacute;n y S/N es la relaci&oacute;n se&ntilde;al ruido";
 choices[28][1] = "La m&aacute;xima velocidad a la que se puede transmitir informaci&oacute;n digital binaria es el doble de la m&aacute;xima frecuencia del canal de transmisi&oacute;n";
 choices[28][2] = "La m&aacute;xima velocidad de transferencia de un canal  sujeto a ruido es directamente proporcional a la relaci&oacute;n se&ntilde;al ruido del canal";
 choices[28][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[28] = 0;
 units[28] = ['104'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4616. ";
 preguntaids[28] = 4616


//  Id pregunta: 4630 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Qu&eacute; se entiende por modem inteligente?:";
 choices[29]= new Array();
 choices[29][0] = "Aquellos que son capaces de detectar errores";
 choices[29][1] = "Aquellos que llevan microprocesador y memoria";
 choices[29][2] = "Aquellos que no pueden detectar m&uacute;ltiples llamadas";
 choices[29][3] = "Aquellos que funcionan igual a un terminal";
 answers[29] = 0;
 units[29] = ['104'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4630. ";
 preguntaids[29] = 4630


//  Id pregunta: 4626 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales no dise&ntilde;ados para conectarse directamente a la RDSI, como un terminal telef&oacute;nico convencional &oacute; m&aacute;quina de fax convencional (Grupo III), con el equipo Adaptador de Terminal?:";
 choices[30]= new Array();
 choices[30][0] = "R";
 choices[30][1] = "S";
 choices[30][2] = "T";
 choices[30][3] = "U";
 answers[30] = 0;
 units[30] = ['114'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4626. ";
 preguntaids[30] = 4626


//  Id pregunta: 4600 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Qu&eacute; define la norma X.400?:";
 choices[31]= new Array();
 choices[31][0] = "Sistema de tratamiento de alarmas";
 choices[31][1] = "Sistema de tratamiento de mensajes";
 choices[31][2] = "Sistema de transferencia de ficheros";
 choices[31][3] = "Sistema de gesti&oacute;n de red";
 answers[31] = 1;
 units[31] = ['116'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4600. ";
 preguntaids[31] = 4600


//  Id pregunta: 4588 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;En cu&aacute;l de los siguientes casos no recomendar&iacute;a utilizar una red VSAT?:";
 choices[32]= new Array();
 choices[32][0] = "En Redes de Area Extensa (WAN)";
 choices[32][1] = "En organizaci&oacute;n muy dispersa en la que s&oacute;lo es necesario realizar actualizaciones peri&oacute;dicas de informaci&oacute;n";
 choices[32][2] = "En entorno transaccional fuerte";
 choices[32][3] = "En organizaciones con oficinas en lugares remotos sin posibilidad de acceso al servicio telef&oacute;nico";
 answers[32] = 2;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4588. VSAT presenta velocidades del orden de 56 a 64 Kbps, no recomendable para grandes vol&uacute;menes de transmisi&oacute;n de datos.";
 preguntaids[32] = 4588


//  Id pregunta: 4618 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Qu&eacute; nivel del modelo OSI se encarga del enrutamiento de la informaci&oacute;n?:";
 choices[33]= new Array();
 choices[33][0] = "El nivel de red";
 choices[33][1] = "El nivel de enlace";
 choices[33][2] = "El nivel de transporte";
 choices[33][3] = "Se realiza conjuntamente entre el nivel de red y el nivel de transporte, a trav&eacute;s del interfaz entre estos niveles adyacentes";
 answers[33] = 0;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4618. ";
 preguntaids[33] = 4618


//  Id pregunta: 4645 Año de creación de pregunta: 2002
 questions[34]= "35)  Al fen&oacute;meno que se da en transmisi&oacute;n por fibra &oacute;ptica consistente en que los pulsos &oacute;pticos tienden a expandirse provocando interferencia, con lo que diferentes longitudes de onda viajan a diferentes velocidades, se le denomina:";
 choices[34]= new Array();
 choices[34][0] = "Dispersi&oacute;n de ventana";
 choices[34][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[34][2] = "Atenuaci&oacute;n &oacute;ptica";
 choices[34][3] = "Atenuaci&oacute;n de ventana";
 answers[34] = 1;
 units[34] = ['106'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4645. ";
 preguntaids[34] = 4645


//  Id pregunta: 4584 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[35]= new Array();
 choices[35][0] = "S&oacute;lo 1 canal puede estar ocupado en un momento determinado";
 choices[35][1] = "2, ya que puede haber comunicaciones simult&aacute;neas en los canales B de datos";
 choices[35][2] = "1 por cada canal B mientras que el canal D puede ser utilizado por varios terminales en modo paquete";
 choices[35][3] = "3, ya que cada canal solo puede ser utilizado por un terminal a la vez, independientemente de su tipo";
 answers[35] = 2;
 units[35] = ['114'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4584. ";
 preguntaids[35] = 4584


//  Id pregunta: 4651 Año de creación de pregunta: 2002
 questions[36]= "37)  Comparando las cabeceras IPv4 e IPV6:";
 choices[36]= new Array();
 choices[36][0] = "En IPv6 se mantiene el campo de checksum";
 choices[36][1] = "En IPv6 aparece nuevo el campo de versi&oacute;n";
 choices[36][2] = "El campo 'tiempo de vida' de IPv4 se transforma en el campo 'l&iacute;mite de saltos' de IPv6";
 choices[36][3] = "En IPv6 se sigue conservando como en IPv4 el campo de 'etiqueta de flujo'";
 answers[36] = 2;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4651. ";
 preguntaids[36] = 4651


//  Id pregunta: 4653 Año de creación de pregunta: 2002
 questions[37]= "38)  Con referencia a los modems:";
 choices[37]= new Array();
 choices[37][0] = "La se&ntilde;al de entrada modula a la portadora, siendo ambas digitales";
 choices[37][1] = "Realizan los procesos de codificaci&oacute;n, modulaci&oacute;n, demodulaci&oacute;n, recepci&oacute;n y decodificaci&oacute;n";
 choices[37][2] = "Realizan s&oacute;lo los procesos de modulaci&oacute;n y demodulaci&oacute;n";
 choices[37][3] = "La se&ntilde;al de entrada puede ser anal&oacute;gica o digital y la moduladora es anal&oacute;gica para adaptarse a la l&iacute;nea de transmisi&oacute;n";
 answers[37] = 1;
 units[37] = ['102'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4653. ";
 preguntaids[37] = 4653


//  Id pregunta: 4648 Año de creación de pregunta: 2002
 questions[38]= "39)  BGP es un protocolo que se usa para:";
 choices[38]= new Array();
 choices[38][0] = "Tratar de encontrar un sistema del cual conocemos el nombre y no la direcci&oacute;n de red en redes OSI (Broadcasting Generation Protocol)";
 choices[38][1] = "Es un protocolo de intercambio de informaci&oacute;n en modo binario entre dos entidades de transporte en el modelo OSI, para que las pasen directamente de modo transparente a la capa de Sesi&oacute;n. (Binary Gateway Protocol)";
 choices[38][2] = "Es un protocolo de enrutamiento o encaminamiento por el que se intercambian informaci&oacute;n los routers en las fronteras de los sistemas aut&oacute;nomos en redes TCP/IP (Border Gateway Protocol)";
 choices[38][3] = "Es un protocolo por el que se convierte a nivel de transporte fragmentos (o TPDUs) de Appletalk a fragmentos TCP (Bellcore Gateway Protocol)";
 answers[38] = 2;
 units[38] = ['102'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4648. ";
 preguntaids[38] = 4648


//  Id pregunta: 4640 Año de creación de pregunta: 2002
 questions[39]= "40)  8802.3 es:";
 choices[39]= new Array();
 choices[39][0] = "El c&oacute;digo de acceso a la red digital";
 choices[39][1] = "Un est&aacute;ndar de redes de &aacute;rea local de ISO IEC JTC1";
 choices[39][2] = "Un est&aacute;ndar europeo de conmutaci&oacute;n de paquetes";
 choices[39][3] = "Un est&aacute;ndar ANSI que trata de m&oacute;dems";
 answers[39] = 1;
 units[39] = ['112'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4640. ";
 preguntaids[39] = 4640


//  Id pregunta: 4579 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Cu&aacute;les son los servicios que proporciona el nivel de transporte (4 de OSI) al nivel de sesi&oacute;n (5 de OSI)?:";
 choices[40]= new Array();
 choices[40][0] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos e indicaci&oacute;n de calidad del servicio";
 choices[40][1] = "Transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[40][2] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[40][3] = "Control de calidad del servicio, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 answers[40] = 1;
 units[40] = ['105'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4579. ";
 preguntaids[40] = 4579


//  Id pregunta: 4585 Año de creación de pregunta: 2009
 questions[41]= "42)  En GPRS, es razonable facturar:";
 choices[41]= new Array();
 choices[41][0] = "por tiempo de conexi&oacute;n";
 choices[41][1] = "por n&uacute;mero de conexiones";
 choices[41][2] = "por portadoras en uso";
 choices[41][3] = "por volumen y calidad de servicio";
 answers[41] = 3;
 units[41] = ['117'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4585. ";
 preguntaids[41] = 4585


//  Id pregunta: 4629 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Qu&eacute; se entiende por 'modem de cable'?:";
 choices[42]= new Array();
 choices[42][0] = "A un cable inversor utilizado para la conexi&oacute;n entre dos dispositivos por el puerto serie";
 choices[42][1] = "A un cable utilizado para unir dos PCs por el puerto paralelo";
 choices[42][2] = "A un dispositivo que permite la transmisi&oacute;n de datos a alta velocidad a trav&eacute;s de una red de cable";
 choices[42][3] = "A un modem que no necesita fuente de alimentaci&oacute;n y que es del tama&ntilde;o de una 'caja de cerillas' que pr&aacute;cticamente que embutido en un cable";
 answers[42] = 2;
 units[42] = ['115'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4629. ";
 preguntaids[42] = 4629


//  Id pregunta: 4607 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Qu&eacute; es la MTU en un paquete IP?:";
 choices[43]= new Array();
 choices[43][0] = "El m&aacute;ximo uso de transmisi&oacute;n";
 choices[43][1] = "La mayor unidad posible de datos que puede ser enviada a trav&eacute;s de un medio f&iacute;sico";
 choices[43][2] = "El tama&ntilde;o del paquete IP";
 choices[43][3] = "Solo se utiliza en IPv6";
 answers[43] = 1;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4607. ";
 preguntaids[43] = 4607


//  Id pregunta: 4609 Año de creación de pregunta: 2002
 questions[44]= "45)  &iquest;Qu&eacute; es un convertidor anal&oacute;gico/digital (ADC)?:";
 choices[44]= new Array();
 choices[44][0] = "Un convertidor similar a uno digital";
 choices[44][1] = "Un programa que convierte formato anal&oacute;gico a formato digital";
 choices[44][2] = "Un sistema que lee valores continuos y saca valores discretos";
 choices[44][3] = "Nada de lo anterior es correcto";
 answers[44] = 2;
 units[44] = ['104'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4609. ";
 preguntaids[44] = 4609


//  Id pregunta: 4652 Año de creación de pregunta: 2002
 questions[45]= "46)  Comparando WiFi y Bluetooth:";
 choices[45]= new Array();
 choices[45][0] = "Bluetooth es m&aacute;s lento que WiFi";
 choices[45][1] = "Bluetooth es m&aacute;s vers&aacute;til que WiFi";
 choices[45][2] = "Ambos operan en la banda de 2,4 GHz";
 choices[45][3] = "Todo lo anterior es cierto";
 answers[45] = 3;
 units[45] = ['108'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4652. ";
 preguntaids[45] = 4652


//  Id pregunta: 4637 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Sabe qu&eacute; organismo defini&oacute; el est&aacute;ndar TCP/IP?:";
 choices[46]= new Array();
 choices[46][0] = "American National Standard Institute (ANSI)";
 choices[46][1] = "Departamento de Defensa de EE.UU.";
 choices[46][2] = "International Standards Organization (ISO)";
 choices[46][3] = "Institute for Electrical and Electronic Engineers (IEEE)";
 answers[46] = 1;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4637. ";
 preguntaids[46] = 4637


//  Id pregunta: 4601 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Qu&eacute; elemento de la especificaci&oacute;n de RDSI ser&iacute;a una centralita digital de abonado?:";
 choices[47]= new Array();
 choices[47][0] = "Un TR1";
 choices[47][1] = "Un TR2";
 choices[47][2] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET1) m&aacute;s";
 choices[47][3] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET2) m&aacute;s";
 answers[47] = 1;
 units[47] = ['114'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4601. ";
 preguntaids[47] = 4601


//  Id pregunta: 4636 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n establece la norma 802.11g de comunicaciones inal&aacute;mbricas?:";
 choices[48]= new Array();
 choices[48][0] = "100 Mbps";
 choices[48][1] = "54 Mbps";
 choices[48][2] = "22 Mbps";
 choices[48][3] = "36 Mbps";
 answers[48] = 1;
 units[48] = ['108'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4636. ";
 preguntaids[48] = 4636


//  Id pregunta: 4625 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales dise&ntilde;ados para conectarse directamente a la RDSI como los tel&eacute;fonos digitales RDSI, &oacute; Adaptadores de Terminal, con una Terminaci&oacute;n de Red de tipo 2?:";
 choices[49]= new Array();
 choices[49][0] = "R";
 choices[49][1] = "S";
 choices[49][2] = "T";
 choices[49][3] = "U";
 answers[49] = 1;
 units[49] = ['103'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4625. ";
 preguntaids[49] = 4625


//  Id pregunta: 4622 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Qu&eacute; organismo se encarga directamente de asignar los puertos en Internet, que son precisos a la hora de especificar los est&aacute;ndares?:";
 choices[50]= new Array();
 choices[50][0] = "IETF";
 choices[50][1] = "IESG";
 choices[50][2] = "ITU-T";
 choices[50][3] = "ICANN";
 answers[50] = 3;
 units[50] = ['103'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4622. ";
 preguntaids[50] = 4622


//  Id pregunta: 4586 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;De que trata el est&aacute;ndar IEEE 802.1.q?:";
 choices[51]= new Array();
 choices[51][0] = "De las VLAN (Virtual Local Area Network)";
 choices[51][1] = "De la capa f&iacute;sica de la red Ethernet";
 choices[51][2] = "No existe dicho est&aacute;ndar";
 choices[51][3] = "Del canal D de la RDSI";
 answers[51] = 0;
 units[51] = ['102'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4586. ";
 preguntaids[51] = 4586


//  Id pregunta: 4638 Año de creación de pregunta: 2002
 questions[52]= "53)  100BaseTX, 100BaseFX, y 100BaseT4 usan los tipos de cable (o de superior calidad) , respectivamente:";
 choices[52]= new Array();
 choices[52][0] = "Categoria 5 STP, fibra &oacute;ptica, y categor&iacute;a 5 STP";
 choices[52][1] = "Fibra &oacute;ptica, Categoria 5 UTP, y categor&iacute;a 3 UTP";
 choices[52][2] = "Categor&iacute;a 5 UTP, tipo 1 STP,  y categor&iacute;a 3 UTP";
 choices[52][3] = "Categor&iacute;a 5 UTP, fibra &oacute;ptica, y categor&iacute;a 3 UTP";
 answers[52] = 3;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4638. ";
 preguntaids[52] = 4638


//  Id pregunta: 4617 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Qu&eacute; mecanismo de acceso al medio utiliza una red Token Ring?:";
 choices[53]= new Array();
 choices[53][0] = "Interrogaci&oacute;n y respuesta (Polling Selecting)";
 choices[53][1] = "Paso de testigo";
 choices[53][2] = "CSMA/CD";
 choices[53][3] = "DQDB";
 answers[53] = 1;
 units[53] = ['104'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4617. ";
 preguntaids[53] = 4617


//  Id pregunta: 4646 Año de creación de pregunta: 2002
 questions[54]= "55)  Bajo el protocolo PEM:";
 choices[54]= new Array();
 choices[54][0] = "Se distinguen 3 tipos de mensajes";
 choices[54][1] = "Un mensaje MIC-CLEAR soporta confidencialidad";
 choices[54][2] = "Un mensaje MIC-Only solo envia la cabecera";
 choices[54][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[54] = 0;
 units[54] = ['116'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4646. ";
 preguntaids[54] = 4646


//  Id pregunta: 4612 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Qu&eacute; estandariza el est&aacute;ndar MIME?:";
 choices[55]= new Array();
 choices[55][0] = "Protocolo de acceso al correo electr&oacute;nico";
 choices[55][1] = "Seguridad en Sistemas de correo electr&oacute;nico";
 choices[55][2] = "Transferencia de documentos multimedia a trav&eacute;s de correo electr&oacute;nico";
 choices[55][3] = "Agenda de direcciones de correo electr&oacute;nico";
 answers[55] = 2;
 units[55] = ['116'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4612. ";
 preguntaids[55] = 4612


//  Id pregunta: 4623 Año de creación de pregunta: 2002
 questions[56]= "57)  &iquest;Qu&eacute; protocolo se usa para enviar mensajes cortos en GSM por se&ntilde;alizaci&oacute;n SS7?:";
 choices[56]= new Array();
 choices[56][0] = "CAP";
 choices[56][1] = "MAP";
 choices[56][2] = "LAPD";
 choices[56][3] = "WAP";
 answers[56] = 1;
 units[56] = ['117'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4623. ";
 preguntaids[56] = 4623


//  Id pregunta: 4591 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;En qu&eacute; consiste el denominado MAC - Control de acceso al medio?:";
 choices[57]= new Array();
 choices[57][0] = "Es el protocolo de aplicaciones usado en redes punto a punto";
 choices[57][1] = "Es un mecanismo de seguridad en redes de comunicaciones para controlar el acceso a la informaci&oacute;n";
 choices[57][2] = "Es un subnivel del nivel de enlace de datos encargado de regular el acceso al medio de transmisi&oacute;n";
 choices[57][3] = "Es el mecanismo de transmisi&oacute;n espec&iacute;fico de las redes Ethernet";
 answers[57] = 2;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4591. ";
 preguntaids[57] = 4591


//  Id pregunta: 4619 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;Qu&eacute; nivel del modelo OSI subdividen los subniveles LLC y MAC especificados por el IEEE?:";
 choices[58]= new Array();
 choices[58][0] = "El nivel f&iacute;sico";
 choices[58][1] = "El nivel de enlace";
 choices[58][2] = "El nivel de red";
 choices[58][3] = "El nivel de transporte";
 answers[58] = 1;
 units[58] = ['105'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4619. ";
 preguntaids[58] = 4619


//  Id pregunta: 4602 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.400 de OSI?:";
 choices[59]= new Array();
 choices[59][0] = "Agente de usuario (UA)";
 choices[59][1] = "Sistema de almacenamiento de mensajes (MS)";
 choices[59][2] = "Sistema de enrutamiento de mensajes (MRS)";
 choices[59][3] = "Sistema de mensajes interpersonales (IPMS)";
 answers[59] = 2;
 units[59] = ['114'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4602. ";
 preguntaids[59] = 4602


//  Id pregunta: 4615 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Qu&eacute; hecho no es correcto en la evoluci&oacute;n del protocolo TCP/IP?:";
 choices[60]= new Array();
 choices[60][0] = "El desarrollador inicial fue ARPANET";
 choices[60][1] = "La publicaci&oacute;n fue por IAB";
 choices[60][2] = "La financiaci&oacute;n corri&oacute; a cargo de DARPA";
 choices[60][3] = "El desarrollador final fue CERN";
 answers[60] = 3;
 units[60] = ['103'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4615. ";
 preguntaids[60] = 4615


//  Id pregunta: 4649 Año de creación de pregunta: 2002
 questions[61]= "62)  Cada cabecera de IPv6 tiene una longitud de:";
 choices[61]= new Array();
 choices[61][0] = "32 bytes";
 choices[61][1] = "36 bytes";
 choices[61][2] = "n&uacute;mero de bytes variable seg&uacute;n el tipo de cabecera";
 choices[61][3] = "40 bytes";
 answers[61] = 3;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4649. ";
 preguntaids[61] = 4649


//  Id pregunta: 4610 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Qu&eacute; es un modem en banda base?:";
 choices[62]= new Array();
 choices[62][0] = "Equipo que efect&uacute;a &uacute;nicamente funciones de codificaci&oacute;n y decodificaci&oacute;n, aparte de las funciones de di&aacute;logo con el ETD y de interfaz con la l&iacute;nea de transmisi&oacute;n";
 choices[62][1] = "Equipo que adapta el ETD a las caracter&iacute;sticas el&eacute;ctricas de la l&iacute;nea de transmisi&oacute;n";
 choices[62][2] = "Equipo normalizado que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 Hz";
 choices[62][3] = "Equipo que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 HZ y l&iacute;mite superior dependiente de la velocidad de transmisi&oacute;n";
 answers[62] = 0;
 units[62] = ['104'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4610. ";
 preguntaids[62] = 4610


//  Id pregunta: 4643 Año de creación de pregunta: 2002
 questions[63]= "64)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[63]= new Array();
 choices[63][0] = "applet";
 choices[63][1] = "cookie";
 choices[63][2] = "socket";
 choices[63][3] = "control activeX";
 answers[63] = 1;
 units[63] = ['113'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4643. ";
 preguntaids[63] = 4643


//  Id pregunta: 4603 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Qu&eacute; es el jitter?";
 choices[64]= new Array();
 choices[64][0] = "un dispositivo similar al router pero con mayor inteligencia a la hora de enrutar los paquetes";
 choices[64][1] = "la variabilidad del retardo en la transmisi&oacute;n de informaci&oacute;n por una red";
 choices[64][2] = "un envoltorio software a modo de cortafuegos que se instala sobre protocolos conocidos como TCP o FTP";
 choices[64][3] = "un hacker que se dedica a desenmascarar en la red a otros hackers";
 answers[64] = 1;
 units[64] = ['107'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4603. ";
 preguntaids[64] = 4603


//  Id pregunta: 4654 Año de creación de pregunta: 2002
 questions[65]= "66)  Con un &quot;m&oacute;dem&quot; RDSI, la llamada:";
 choices[65]= new Array();
 choices[65][0] = "Se establece cada vez que se intercambian datos";
 choices[65][1] = "Est&aacute; siempre establecida";
 choices[65][2] = "Puede ser configurable cu&aacute;ndo se quiere que se establezca la llamada";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = 2;
 units[65] = ['114'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4654. ";
 preguntaids[65] = 4654


//  Id pregunta: 4641 Año de creación de pregunta: 2002
 questions[66]= "67)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[66]= new Array();
 choices[66][0] = "registro de incidencias";
 choices[66][1] = "fichero de log";
 choices[66][2] = "lista de errores";
 choices[66][3] = "fichero de registros";
 answers[66] = 1;
 units[66] = ['113'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4641. ";
 preguntaids[66] = 4641


//  Id pregunta: 4631 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Qu&eacute; tama&ntilde;o de celdas se utiliza en ATM?:";
 choices[67]= new Array();
 choices[67][0] = "Un m&aacute;ximo de 64 bytes";
 choices[67][1] = "El tama&ntilde;o m&aacute;ximo depende del contrato con el proveedor del servicio, siendo m&uacute;ltiplo de 64 bytes";
 choices[67][2] = "1024 bits";
 choices[67][3] = "424 bits";
 answers[67] = 3;
 units[67] = ['107'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4631. ";
 preguntaids[67] = 4631


//  Id pregunta: 4581 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Cu&aacute;ntos bytes ocupa la cabecera m&iacute;nima en IPv4?";
 choices[68]= new Array();
 choices[68][0] = "16";
 choices[68][1] = "20";
 choices[68][2] = "24";
 choices[68][3] = "32";
 answers[68] = 1;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4581. ";
 preguntaids[68] = 4581


//  Id pregunta: 4604 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Qu&eacute; es el modo en una transmisi&oacute;n por fibra &oacute;ptica?:";
 choices[69]= new Array();
 choices[69][0] = "Es el trayecto de un rayo en una fibra";
 choices[69][1] = "Es el trayecto de todos los haces de una fibra";
 choices[69][2] = "Es la polarizaci&oacute;n que existe en la fibra en cada momento de la transmisi&oacute;n";
 choices[69][3] = "Es el tipo de modulaci&oacute;n digital que se imprime al rayo al introducirlo en la fibra";
 answers[69] = 0;
 units[69] = ['106'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4604. ";
 preguntaids[69] = 4604


//  Id pregunta: 4593 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;En qu&eacute; nivel OSI act&uacute;an los repetidores?";
 choices[70]= new Array();
 choices[70][0] = "Enlace";
 choices[70][1] = "Red";
 choices[70][2] = "Transporte";
 choices[70][3] = "F&iacute;sico";
 answers[70] = 3;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4593. ";
 preguntaids[70] = 4593


//  Id pregunta: 4605 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Qu&eacute; es fibra oscura?:";
 choices[71]= new Array();
 choices[71][0] = "Fibra &oacute;ptica que ha perdido sus propiedades y que se ha vuelto opaca";
 choices[71][1] = "Ramal de fibra &oacute;ptica que alquila un particular a un Operador de Telecomunicaciones sin electr&oacute;nica u optr&oacute;nica";
 choices[71][2] = "Un terminador de fibra &oacute;ptica para igualar la impedancia de la l&iacute;nea";
 choices[71][3] = "Fibra &oacute;ptica con impurezas";
 answers[71] = 1;
 units[71] = ['106'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4605. ";
 preguntaids[71] = 4605


//  Id pregunta: 4635 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n es m&aacute;s acorde con la tecnolog&iacute;a GPRS?:";
 choices[72]= new Array();
 choices[72][0] = "64 kbps";
 choices[72][1] = "256 kbps";
 choices[72][2] = "384 kbps";
 choices[72][3] = "115 kbps";
 answers[72] = 3;
 units[72] = ['117'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4635. ";
 preguntaids[72] = 4635


//  Id pregunta: 4608 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Qu&eacute; es SDH?";
 choices[73]= new Array();
 choices[73][0] = "una familia de protocolos para transportar se&ntilde;ales digitales multimedia";
 choices[73][1] = "un conjunto de especificaciones de tasas de transmisi&oacute;n que transportan s&iacute;ncronamente se&ntilde;ales digitales de diferentes capacidades";
 choices[73][2] = "una torre de protocolos propietaria similar a SNA";
 choices[73][3] = "un conjunto de est&aacute;ndares americanos de transporte de se&ntilde;ales digitales entre sistemas digitales";
 answers[73] = 1;
 units[73] = ['107'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4608. ";
 preguntaids[73] = 4608


//  Id pregunta: 4583 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;ntos octetos usa la cabecera de la nueva versi&oacute;n de IP (Ipv6)?:";
 choices[74]= new Array();
 choices[74][0] = "32";
 choices[74][1] = "8";
 choices[74][2] = "12";
 choices[74][3] = "40";
 answers[74] = 3;
 units[74] = ['109'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4583. ";
 preguntaids[74] = 4583


