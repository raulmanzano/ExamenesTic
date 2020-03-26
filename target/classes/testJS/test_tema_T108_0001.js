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
//  Id pregunta: 1529 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es usado para minimizar las colisiones en una LAN inal&aacute;mbrica?";
 choices[0]= new Array();
 choices[0][0] = "CSMA/CD";
 choices[0][1] = "CSMA/CA";
 choices[0][2] = "LACP";
 choices[0][3] = "LWAPP";
 answers[0] = 1;
 units[0] = ['108'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1529. ";
 preguntaids[0] = 1529


//  Id pregunta: 5066 Año de creación de pregunta: 2002
 questions[1]= "2)  Separaci&oacute;n del tr&aacute;fico de voz y datos, reutilizaci&oacute;n de infraestructuras existentes,  necesidad de proximidad a la central local, inversiones en equipamientos del usuario&hellip;, son todas caracter&iacute;sticas propias de las tecnolog&iacute;as:";
 choices[1]= new Array();
 choices[1][0] = "de los m&oacute;dems de cable";
 choices[1][1] = "de los dispositivos WAP";
 choices[1][2] = "de xDSL";
 choices[1][3] = "de LMDS";
 answers[1] = 2;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5066. ";
 preguntaids[1] = 5066


//  Id pregunta: 4374 Año de creación de pregunta: 2004
 questions[2]= "3)  &iquest;A qu&eacute; se corresponden las siglas 802.11i sobre redes inal&aacute;mbricas?";
 choices[2]= new Array();
 choices[2][0] = "A especificaciones de nivel f&iacute;sico";
 choices[2][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[2][2] = "A especificaciones de Seguridad";
 choices[2][3] = "A especificiaciones de roaming";
 answers[2] = 2;
 units[2] = ['108'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4374. ";
 preguntaids[2] = 4374


//  Id pregunta: 4778 Año de creación de pregunta: 2002
 questions[3]= "4)  En el acceso a l&iacute;neas y redes de comunicaciones, desde el bucle de abonado constituido por pares de cobre, la tecnolog&iacute;a que permite separar el flujo de datos del tr&aacute;fico telef&oacute;nico en origen, es:";
 choices[3]= new Array();
 choices[3][0] = "RDSI";
 choices[3][1] = "ADSL";
 choices[3][2] = "RTC";
 choices[3][3] = "TCP-IP";
 answers[3] = 1;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4778. ";
 preguntaids[3] = 4778


//  Id pregunta: 887 Año de creación de pregunta: 2016
 questions[4]= "5)  El est&aacute;ndar del ADSL2+ (ADSL2 Plus) es:";
 choices[4]= new Array();
 choices[4][0] = "ITU G.993.3";
 choices[4][1] = "ITU G.992.4";
 choices[4][2] = "ITU G.992.5";
 choices[4][3] = "ITU G.993.6";
 answers[4] = 2;
 units[4] = ['108'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 887. AGE A2 2015";
 preguntaids[4] = 887


//  Id pregunta: 5032 Año de creación de pregunta: 2002
 questions[5]= "6)  Radius permite autentificaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo mediante PAP";
 choices[5][1] = "S&oacute;lo mediante CHAP";
 choices[5][2] = "S&oacute;lo para dispositivos fijos";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 3;
 units[5] = ['108'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5032. ";
 preguntaids[5] = 5032


//  Id pregunta: 4782 Año de creación de pregunta: 2002
 questions[6]= "7)  En el entorno de las redes inal&aacute;mbricas se denomina &quot;hot-spot&quot;:";
 choices[6]= new Array();
 choices[6][0] = "A la zona de cobertura con mayor demanda de tr&aacute;fico";
 choices[6][1] = "A los emplazamientos con cobertura WiFi";
 choices[6][2] = "A zonas de cobertura con potenciales problemas de interferencias";
 choices[6][3] = "A las zonas de sombra";
 answers[6] = 1;
 units[6] = ['108'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4782. ";
 preguntaids[6] = 4782


//  Id pregunta: 4357 Año de creación de pregunta: 2004
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes aseveraciones en relaci&oacute;n con el est&aacute;ndar IEEE 802.11 es falsa?";
 choices[7]= new Array();
 choices[7][0] = "Los estandares IEEE 802.11 son de libre distribuci&oacute;n";
 choices[7][1] = "La especificaci&oacute;n de la capa MAC (Medium Access Control) del IEEE 802.11 es el CSMA/CA";
 choices[7][2] = "El nivel MAC del IEEE 802.11 define tres tipos de tramas: datos, administraci&oacute;n y control";
 choices[7][3] = "La especifici&oacute;n IEEE 802.11b define transmisiones con velocidades hasta 54Mbps";
 answers[7] = 3;
 units[7] = ['108'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4357. ";
 preguntaids[7] = 4357


//  Id pregunta: 4370 Año de creación de pregunta: 2004
 questions[8]= "9)  La familia de redes locales inal&aacute;mbricas WLAN operan en las bandas de frecuencia:";
 choices[8]= new Array();
 choices[8][0] = "2.4 GHz y 5 Ghz";
 choices[8][1] = "10MHz y 100MHz";
 choices[8][2] = "1MHz y 10 MHz";
 choices[8][3] = "ninguna de las anteriores";
 answers[8] = 0;
 units[8] = ['108'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4370. ";
 preguntaids[8] = 4370


//  Id pregunta: 5232 Año de creación de pregunta: 2006
 questions[9]= "10)  Con respecto a la tecnolog&iacute;a WIMAX, se&ntilde;ale qu&eacute; est&aacute;ndar del IEEE ha sido dise&ntilde;ado para soportar roaming entre c&eacute;lulas y movilidad urbana (baja velocidad):";
 choices[9]= new Array();
 choices[9][0] = "802.16";
 choices[9][1] = "802.16a";
 choices[9][2] = "802.16c";
 choices[9][3] = "802.16e";
 answers[9] = 3;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5232. ";
 preguntaids[9] = 5232


//  Id pregunta: 4956 Año de creación de pregunta: 2002
 questions[10]= "11)  La velocidad de transmisi&oacute;n que se puede alcanzar con tecnolog&iacute;a Bluetooth versi&oacute;n 5 es de:";
 choices[10]= new Array();
 choices[10][0] = "25 Mbit/s";
 choices[10][1] = "50 Mbit/s";
 choices[10][2] = "12 Mbit/s";
 choices[10][3] = "6 Mbit/s";
 answers[10] = 1;
 units[10] = ['108'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4956. ";
 preguntaids[10] = 4956


//  Id pregunta: 5158 Año de creación de pregunta: 2003
 questions[11]= "12)  &iquest;Qu&eacute; es falso respecto a un applet?";
 choices[11]= new Array();
 choices[11][0] = "Utiliza clases de la librer&iacute;a Java.applet";
 choices[11][1] = "Tienen un m&eacute;todo paint()";
 choices[11][2] = "Se pueden visualizar mediante appletviewer";
 choices[11][3] = "Necesitan m&eacute;todo main()";
 answers[11] = 3;
 units[11] = ['108'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5158. ";
 preguntaids[11] = 5158


//  Id pregunta: 5131 Año de creación de pregunta: 2003
 questions[12]= "13)  Sobre ADSL es cierto que:";
 choices[12]= new Array();
 choices[12][0] = "No es compatible con RDSI";
 choices[12][1] = "Las portadoras que usa ADSL se modulan en cuadratura";
 choices[12][2] = "Los organismos de estandarizaci&oacute;n se han decantado por la t&eacute;cnica de modulaci&oacute;n CAP para ADSL";
 choices[12][3] = "ADSL opera en un margen defrecuencias que llega hasta los 20 KHz";
 answers[12] = 1;
 units[12] = ['108'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5131. Compatible con RDSI seg&uacute;n anexo B. CAP utiliza modulaci&oacute;n QAM en canal de bajada.";
 preguntaids[12] = 5131


//  Id pregunta: 4977 Año de creación de pregunta: 2002
 questions[13]= "14)  Los conceptos de &quot;piconet&quot; y &quot;scatternet&quot; forman parte de la arquitectura de red utilizada con tecnolog&iacute;a:";
 choices[13]= new Array();
 choices[13][0] = "IrDA";
 choices[13][1] = "DECT";
 choices[13][2] = "Bluetooth";
 choices[13][3] = "WLAN";
 answers[13] = 2;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4977. ";
 preguntaids[13] = 4977


//  Id pregunta: 5133 Año de creación de pregunta: 2003
 questions[14]= "15)  Sobre el est&aacute;ndar IEEE 802.20 se puede afirmar que:";
 choices[14]= new Array();
 choices[14][0] = "No existe a&uacute;n ese est&aacute;ndar";
 choices[14][1] = "Es el est&aacute;ndar relativo a redes inal&aacute;mbricas metropolitanas de banda ancha";
 choices[14][2] = "Es el est&aacute;ndar de acceso inal&aacute;mbrico m&oacute;vil de banda ancha";
 choices[14][3] = "Nada de lo anterior es cierto";
 answers[14] = 2;
 units[14] = ['108'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5133. ";
 preguntaids[14] = 5133


//  Id pregunta: 5234 Año de creación de pregunta: 2006
 questions[15]= "16)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T que designa a la tecnolog&iacute;a HDSL?";
 choices[15]= new Array();
 choices[15][0] = "G 992.1";
 choices[15][1] = "G 991.2";
 choices[15][2] = "G 992.2";
 choices[15][3] = "G 991.1";
 answers[15] = 3;
 units[15] = ['108'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5234. ";
 preguntaids[15] = 5234


//  Id pregunta: 1246 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; est&aacute;ndar del IEEE opera con canales de 80 MHz de ancho de banda por cliente?";
 choices[16]= new Array();
 choices[16][0] = "802.11n";
 choices[16][1] = "802.11g";
 choices[16][2] = "802.11ac";
 choices[16][3] = "802.11ad";
 answers[16] = 2;
 units[16] = ['108'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1246. ";
 preguntaids[16] = 1246


//  Id pregunta: 4588 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;En cu&aacute;l de los siguientes casos no recomendar&iacute;a utilizar una red VSAT?:";
 choices[17]= new Array();
 choices[17][0] = "En Redes de Area Extensa (WAN)";
 choices[17][1] = "En organizaci&oacute;n muy dispersa en la que s&oacute;lo es necesario realizar actualizaciones peri&oacute;dicas de informaci&oacute;n";
 choices[17][2] = "En entorno transaccional fuerte";
 choices[17][3] = "En organizaciones con oficinas en lugares remotos sin posibilidad de acceso al servicio telef&oacute;nico";
 answers[17] = 2;
 units[17] = ['108'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4588. VSAT presenta velocidades del orden de 56 a 64 Kbps, no recomendable para grandes vol&uacute;menes de transmisi&oacute;n de datos.";
 preguntaids[17] = 4588


//  Id pregunta: 4652 Año de creación de pregunta: 2002
 questions[18]= "19)  Comparando WiFi y Bluetooth:";
 choices[18]= new Array();
 choices[18][0] = "Bluetooth es m&aacute;s lento que WiFi";
 choices[18][1] = "Bluetooth es m&aacute;s vers&aacute;til que WiFi";
 choices[18][2] = "Ambos operan en la banda de 2,4 GHz";
 choices[18][3] = "Todo lo anterior es cierto";
 answers[18] = 3;
 units[18] = ['108'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4652. ";
 preguntaids[18] = 4652


//  Id pregunta: 1098 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a la tecnolog&iacute;a WIFI:";
 choices[19]= new Array();
 choices[19][0] = "Los equipos WIFI no necesitan adaptarse a ninguna normativa.";
 choices[19][1] = "Los ayuntamientos pueden comercializar WIFI siempre y cuando se hayan inscrito en el registro de operadores.";
 choices[19][2] = "Los operadores de telecomunicaciones tienen que pedir una licencia para la utilizaci&oacute;n de la banda WIFI, que les permite comercializar este servicio.";
 choices[19][3] = "Los equipos WIFI utilizan una banda de uso com&uacute;n.";
 answers[19] = 3;
 units[19] = ['108'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1098. ";
 preguntaids[19] = 1098


//  Id pregunta: 889 Año de creación de pregunta: 2016
 questions[20]= "21)  En relaci&oacute;n con el est&aacute;ndar 802.11ac se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[20]= new Array();
 choices[20][0] = "puede funcionar con 80 MHz o incluso 160 MHz.";
 choices[20][1] = "se conoce como WIFI 5G o WiFi Gigabit, y es una mejora del IEEE 802.11n.";
 choices[20][2] = "opera en el espectro de 2,4 GHz.";
 choices[20][3] = "los componentes utilizados consumen menos energ&iacute;a que los utilizados en el est&aacute;ndar 802.11n.";
 answers[20] = 2;
 units[20] = ['108'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 889. AGE A2 2015";
 preguntaids[20] = 889


//  Id pregunta: 4377 Año de creación de pregunta: 2004
 questions[21]= "22)  &iquest;A qu&eacute; se corresponden las siglas 802.11e sobre redes inal&aacute;mbricas?";
 choices[21]= new Array();
 choices[21][0] = "A especificaciones de nivel f&iacute;sico";
 choices[21][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[21][2] = "A especificaciones de Seguridad";
 choices[21][3] = "A especificiaciones de roaming";
 answers[21] = 1;
 units[21] = ['108'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4377. ";
 preguntaids[21] = 4377


//  Id pregunta: 4509 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes modulaciones, utilizadas con la tecnolog&iacute;a LMDS, proporciona mayor eficiencia espectral?:";
 choices[22]= new Array();
 choices[22][0] = "QPSK";
 choices[22][1] = "4-QAM";
 choices[22][2] = "16-QAM";
 choices[22][3] = "64-QAM";
 answers[22] = 3;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4509. ";
 preguntaids[22] = 4509


//  Id pregunta: 5163 Año de creación de pregunta: 2003
 questions[23]= "24)  &iquest;Qu&eacute; nivel OSI garantiza la comunicaci&oacute;n extremo a extremo?";
 choices[23]= new Array();
 choices[23][0] = "3";
 choices[23][1] = "4";
 choices[23][2] = "5";
 choices[23][3] = "6";
 answers[23] = 1;
 units[23] = ['108'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5163. ";
 preguntaids[23] = 5163


//  Id pregunta: 4323 Año de creación de pregunta: 2004
 questions[24]= "25)  En ADSL la velocidad de transmisi&oacute;n no depende de:";
 choices[24]= new Array();
 choices[24][0] = "La longitud del bucle de abonado local";
 choices[24][1] = "Los empalmes, conectores y distribuidores que haya para llevar la se&ntilde;al a distintos equipos en el domicilio del usuario";
 choices[24][2] = "Diafon&iacute;a";
 choices[24][3] = "Todas las anteriores.";
 answers[24] = 3;
 units[24] = ['108'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4323. Similar a examen TIC SS A 2003";
 preguntaids[24] = 4323


//  Id pregunta: 5230 Año de creación de pregunta: 2006
 questions[25]= "26)  Con respecto a la tecnolog&iacute;a VDSL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[25]= new Array();
 choices[25][0] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 52 Mbit/s en sentido descendente y 6,4 Mbit/s en sentido ascendente.";
 choices[25][1] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 54 Mbit/s en sentido descendente y 8,2 Mbit/s en sentido ascendente.";
 choices[25][2] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 30 Mbit/s.";
 choices[25][3] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 25 Mbit/s.";
 answers[25] = 0;
 units[25] = ['108'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5230. ";
 preguntaids[25] = 5230


//  Id pregunta: 890 Año de creación de pregunta: 2016
 questions[26]= "27)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[26]= new Array();
 choices[26][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[26][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[26][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[26][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[26] = 2;
 units[26] = ['108'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 890. Junta de Extremadura A1 2015";
 preguntaids[26] = 890


//  Id pregunta: 4387 Año de creación de pregunta: 2004
 questions[27]= "28)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[27]= new Array();
 choices[27][0] = "Bluetooth";
 choices[27][1] = "HomeRF";
 choices[27][2] = "HiperLAN/2";
 choices[27][3] = "IrLMP";
 answers[27] = 1;
 units[27] = ['108'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4387. Examen TAI 2004";
 preguntaids[27] = 4387


//  Id pregunta: 5178 Año de creación de pregunta: 2003
 questions[28]= "29)  La familia de redes locales inal&aacute;mbricas WLAN operan en las bandas de frecuencias:";
 choices[28]= new Array();
 choices[28][0] = "2,4 GHz y 5 GHz";
 choices[28][1] = "10 MHz y 100 MHz";
 choices[28][2] = "1 MHz y 10 MHz";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = 0;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5178. ";
 preguntaids[28] = 5178


//  Id pregunta: 4301 Año de creación de pregunta: 2004
 questions[29]= "30)  &iquest;Cu&aacute;l es el est&aacute;ndar de WLAN que permite transmitir a una velocidad efectiva de entre 12 y 24 Mbps y a una velocidad m&aacute;xima de 54 Mbps?";
 choices[29]= new Array();
 choices[29][0] = "IEEE 802.11a";
 choices[29][1] = "IEEE 802.11b";
 choices[29][2] = "IEEE 802.11g";
 choices[29][3] = "IEEE 802.11i";
 answers[29] = 2;
 units[29] = ['108'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4301. Similar a examen TIC SS A 2003";
 preguntaids[29] = 4301


//  Id pregunta: 4844 Año de creación de pregunta: 2002
 questions[30]= "31)  En UMTS un terminal puede comunicarse simult&aacute;neamente a trav&eacute;s de dos celdas diferentes. Esto:";
 choices[30]= new Array();
 choices[30][0] = "Es cierto tambi&eacute;n en GSM";
 choices[30][1] = "Es cierto tambi&eacute;n en GPRS";
 choices[30][2] = "Es cierto s&oacute;lo en UMTS";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = 2;
 units[30] = ['108'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4844. ";
 preguntaids[30] = 4844


//  Id pregunta: 4898 Año de creación de pregunta: 2002
 questions[31]= "32)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[31]= new Array();
 choices[31][0] = "11 Mbps";
 choices[31][1] = "11 MBps";
 choices[31][2] = "54 Mbps";
 choices[31][3] = "54 MBps";
 answers[31] = 2;
 units[31] = ['108', '112'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4898. ";
 preguntaids[31] = 4898


//  Id pregunta: 886 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA cuando nos referimos a la tecnolog&iacute;a NFC?";
 choices[32]= new Array();
 choices[32][0] = "Trabaja en una banda que no requiere licencia para su uso.";
 choices[32][1] = "Es una tecnolog&iacute;a inal&aacute;mbrica.";
 choices[32][2] = "Permite alcances de hasta 10 metros.";
 choices[32][3] = "Su funcionamiento se basa en los campos electromagn&eacute;ticos.";
 answers[32] = 2;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 886. AGE A2 2015";
 preguntaids[32] = 886


//  Id pregunta: 5087 Año de creación de pregunta: 2002
 questions[33]= "34)  USSD es:";
 choices[33]= new Array();
 choices[33][0] = "Universal Serial Service Data";
 choices[33][1] = "Universal Synchronous Service Data";
 choices[33][2] = "Unstructured Supplementary Service Data";
 choices[33][3] = "Unsorted Simple Service Data";
 answers[33] = 2;
 units[33] = ['108'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5087. ";
 preguntaids[33] = 5087


//  Id pregunta: 5179 Año de creación de pregunta: 2003
 questions[34]= "35)  La jerarqu&iacute;a digital plesi&oacute;crona (JDP o PDH):";
 choices[34]= new Array();
 choices[34][0] = "Tiene la misma normativa de niveles en Europa y en Estados Unidos";
 choices[34][1] = "Tiene la misma normativa de niveles en jap&oacute;n y en Estados Unidos";
 choices[34][2] = "Tiene la misma normativa de niveles para todo el mundo";
 choices[34][3] = "Son tres normativas distintas para cada &aacute;rea";
 answers[34] = 3;
 units[34] = ['108'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5179. ";
 preguntaids[34] = 5179


//  Id pregunta: 4632 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[35]= new Array();
 choices[35][0] = "Spread spectrum con secuencia directa";
 choices[35][1] = "Spread spectrum con salto de frecuencia";
 choices[35][2] = "&quot;a&quot; y &quot;b&quot;";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = 1;
 units[35] = ['108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4632. ";
 preguntaids[35] = 4632


//  Id pregunta: 2557 Año de creación de pregunta: 2004
 questions[36]= "37)  &iquest;Cu&aacute;l de estas tecnologias ser&iacute;a v&aacute;lida para la conexi&oacute;n en una red de area personal de los perif&eacute;ricos m&aacute;s habituales?";
 choices[36]= new Array();
 choices[36][0] = "Ethernet";
 choices[36][1] = "Bluetooth";
 choices[36][2] = "Wifi";
 choices[36][3] = "WLAN";
 answers[36] = 1;
 units[36] = ['108'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 2557. Examen Seg-Social A 2004";
 preguntaids[36] = 2557


//  Id pregunta: 4355 Año de creación de pregunta: 2004
 questions[37]= "38)  &iquest;Qu&eacute; norma se encarga de la estandarizaci&oacute;n de redes inal&aacute;mbricas de &aacute;rea personal?";
 choices[37]= new Array();
 choices[37][0] = "El IEEE 802.11";
 choices[37][1] = "El IEEE 802.15";
 choices[37][2] = "El AUT-C";
 choices[37][3] = "El UIT-T E-164";
 answers[37] = 1;
 units[37] = ['108'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4355. ";
 preguntaids[37] = 4355


//  Id pregunta: 1241 Año de creación de pregunta: 2016
 questions[38]= "39)  En el &aacute;mbito de las redes inal&aacute;mbricas, la variante IEEE 802.11a:";
 choices[38]= new Array();
 choices[38][0] = "Opera dentro del rango de los 5 GHz.";
 choices[38][1] = "Es compatible con el Est&aacute;ndar 802.11b.";
 choices[38][2] = "Es compatible con el est&aacute;ndar 802.11g.";
 choices[38][3] = "Incorpora QoS (Calidad de Servicio).";
 answers[38] = 0;
 units[38] = ['108'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1241. ";
 preguntaids[38] = 1241


//  Id pregunta: 1245 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; es WirelessMAN-Advanced?";
 choices[39]= new Array();
 choices[39][0] = "La evoluci&oacute;n de la norma 802.16.";
 choices[39][1] = "Bluetooth versi&oacute;n 5.";
 choices[39][2] = "El nuevo grupo de trabajo 802.13.";
 choices[39][3] = "LTE (Long-Term Evolution) para redes MAN.";
 answers[39] = 0;
 units[39] = ['108'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 1245. ";
 preguntaids[39] = 1245


//  Id pregunta: 5128 Año de creación de pregunta: 2003
 questions[40]= "41)  La Interfaz Aire de la norma IEEE 802.11g es:";
 choices[40]= new Array();
 choices[40][0] = "FHSS/DSSS";
 choices[40][1] = "DSSS";
 choices[40][2] = "OFDM";
 choices[40][3] = "DSSS/OFDM";
 answers[40] = 3;
 units[40] = ['108'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5128. ";
 preguntaids[40] = 5128


//  Id pregunta: 4329 Año de creación de pregunta: 2004
 questions[41]= "42)  LMDS";
 choices[41]= new Array();
 choices[41][0] = "Usa el ancho de banda de forma sim&eacute;trica para los canales de subida y bajada";
 choices[41][1] = "Utiliza para transmitir una frecuencia de 10 Gz";
 choices[41][2] = "Reserva un ancho de banda de 3,1 Gz";
 choices[41][3] = "Ofrece un servicio de bucle local a los usuarios";
 answers[41] = 3;
 units[41] = ['108'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4329. ";
 preguntaids[41] = 4329


//  Id pregunta: 5009 Año de creación de pregunta: 2002
 questions[42]= "43)  Nombre y caracter&iacute;sticas del mecanismo de encriptado y autenticaci&oacute;n especificado en el est&aacute;ndar 802.11:";
 choices[42]= new Array();
 choices[42][0] = "WAP, con clave de hasta 40 bits";
 choices[42][1] = "WEP, con clave de hasta 40 bits";
 choices[42][2] = "WEP, con clave de hasta 128 bits";
 choices[42][3] = "WTLS, con clave de hasta 128 bits";
 answers[42] = 2;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5009. ";
 preguntaids[42] = 5009


//  Id pregunta: 5042 Año de creación de pregunta: 2002
 questions[43]= "44)  Respecto de ADSL, puede decirse que:";
 choices[43]= new Array();
 choices[43][0] = "No requiere ning&uacute;n tipo de dispositivo conectado al PC";
 choices[43][1] = "Basta con un m&oacute;dem ADSL en casa del abonado";
 choices[43][2] = "Necesita que la central del abonado pueda dar el servicio";
 choices[43][3] = "El abonado ha de estar a como mucho 1000 m de su central";
 answers[43] = 2;
 units[43] = ['108'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5042. ";
 preguntaids[43] = 5042


//  Id pregunta: 4699 Año de creación de pregunta: 2002
 questions[44]= "45)  El nivel fisico denominado 802.11b se conoce como:";
 choices[44]= new Array();
 choices[44][0] = "High Rate Sequence HR/DS PHY (high-rate, direct-sequence PHY)";
 choices[44][1] = "High Rate Sequence HR/DSSS PHY (High Rate / Direct Sequence Spread Spectrum Physical Layer)";
 choices[44][2] = "OFDM PHY";
 choices[44][3] = "Las respuestas 'a' y 'b' son correctas";
 answers[44] = 3;
 units[44] = ['108'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4699. ";
 preguntaids[44] = 4699


//  Id pregunta: 4375 Año de creación de pregunta: 2004
 questions[45]= "46)  &iquest;A qu&eacute; se corresponden las siglas 802.11d sobre redes inal&aacute;mbricas?";
 choices[45]= new Array();
 choices[45][0] = "A especificaciones de nivel f&iacute;sico";
 choices[45][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[45][2] = "A especificaciones de Seguridad";
 choices[45][3] = "A especificiaciones de roaming";
 answers[45] = 3;
 units[45] = ['108'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4375. ";
 preguntaids[45] = 4375


//  Id pregunta: 4512 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xDSL?";
 choices[46]= new Array();
 choices[46][0] = "HDSL";
 choices[46][1] = "VDSL";
 choices[46][2] = "ADSL";
 choices[46][3] = "MDSL";
 answers[46] = 3;
 units[46] = ['108'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4512. ";
 preguntaids[46] = 4512


//  Id pregunta: 4698 Año de creación de pregunta: 2002
 questions[47]= "48)  El nivel fisico denominados 802.11a se conoce como:";
 choices[47]= new Array();
 choices[47][0] = "High Rate Sequence HR/DS PHY";
 choices[47][1] = "High Rate Sequence HR/DSSS PHY";
 choices[47][2] = "Orthogonal Frequency Division Multiplexing";
 choices[47][3] = "IR/PHY";
 answers[47] = 2;
 units[47] = ['108'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4698. ";
 preguntaids[47] = 4698


//  Id pregunta: 1413 Año de creación de pregunta: 2016
 questions[48]= "49)  Indica cual es el grupo de trabajo en el est&aacute;ndar IEEE 802.11 cuyo objetivo es ampliar el soporte para aplicaciones wireless con requisitos de calidad de servicio (QoS):";
 choices[48]= new Array();
 choices[48][0] = "802.11e";
 choices[48][1] = "802.11i";
 choices[48][2] = "802.11n";
 choices[48][3] = "802.11q";
 answers[48] = 0;
 units[48] = ['108'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1413. ";
 preguntaids[48] = 1413


//  Id pregunta: 5035 Año de creación de pregunta: 2002
 questions[49]= "50)  Respecto a la serie de est&aacute;ndares de redes inal&aacute;mbricas 802.x podemos decir que:";
 choices[49]= new Array();
 choices[49][0] = "802.11b es posterior a 802.11a";
 choices[49][1] = "802.11a admite una velocidad m&aacute;xima de 54 Mbps";
 choices[49][2] = "la serie 802.x tiene su origen en Europa, en el ETSI";
 choices[49][3] = "todo lo anterior es correcto";
 answers[49] = 1;
 units[49] = ['108'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5035. ";
 preguntaids[49] = 5035


//  Id pregunta: 1243 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes NO es un protocolo relacionado con las redes inal&aacute;mbricas WLAN?";
 choices[50]= new Array();
 choices[50][0] = "DECT.";
 choices[50][1] = "802.11b.";
 choices[50][2] = "802.11g.";
 choices[50][3] = "802.11n.";
 answers[50] = 0;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 1243. ";
 preguntaids[50] = 1243


//  Id pregunta: 5117 Año de creación de pregunta: 2004
 questions[51]= "52)  El est&aacute;ndar 802.11i relativo a seguridad en redes WiFi, &iquest;Qu&eacute; nuevo protocolo utiliza?";
 choices[51]= new Array();
 choices[51][0] = "WPA2";
 choices[51][1] = "WPA3";
 choices[51][2] = "TKIP";
 choices[51][3] = "WEP";
 answers[51] = 0;
 units[51] = ['108'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5117. ";
 preguntaids[51] = 5117


//  Id pregunta: 4636 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n establece la norma 802.11g de comunicaciones inal&aacute;mbricas?:";
 choices[52]= new Array();
 choices[52][0] = "100 Mbps";
 choices[52][1] = "54 Mbps";
 choices[52][2] = "22 Mbps";
 choices[52][3] = "36 Mbps";
 answers[52] = 1;
 units[52] = ['108'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4636. ";
 preguntaids[52] = 4636


//  Id pregunta: 4772 Año de creación de pregunta: 2002
 questions[53]= "54)  El uso de la red de energ&iacute;a el&eacute;ctrica como una red de transmisi&oacute;n telem&aacute;tica de voz y datos es la tecnolog&iacute;a:";
 choices[53]= new Array();
 choices[53][0] = "LCC";
 choices[53][1] = "PCC";
 choices[53][2] = "LLC";
 choices[53][3] = "PLC";
 answers[53] = 3;
 units[53] = ['108'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4772. ";
 preguntaids[53] = 4772


//  Id pregunta: 2944 Año de creación de pregunta: 2002
 questions[54]= "55)  La modulaci&oacute;n QAM transmite a:";
 choices[54]= new Array();
 choices[54][0] = "1 bit por baudio.";
 choices[54][1] = "4 bits por baudio.";
 choices[54][2] = "2 bits por baudio.";
 choices[54][3] = "Depende de las portadoras utilizadas.";
 answers[54] = 1;
 units[54] = ['108'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 2944. ";
 preguntaids[54] = 2944


//  Id pregunta: 4703 Año de creación de pregunta: 2002
 questions[55]= "56)  El PLCP se incorpora como subnivel de:";
 choices[55]= new Array();
 choices[55][0] = "Nivel 2 de 802.11";
 choices[55][1] = "Nivel 1 de 802.11";
 choices[55][2] = "Nivel 1 de 802.3";
 choices[55][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[55] = 1;
 units[55] = ['108'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4703. ";
 preguntaids[55] = 4703


//  Id pregunta: 885 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; banda de frecuencia utilizan las etiquetas RFID HF (Alta Frecuencia)?";
 choices[56]= new Array();
 choices[56][0] = "125 kHz - 134 kHz";
 choices[56][1] = "13,553 MHz - 13,567 MHz";
 choices[56][2] = "400 MHz - 1000 MHz";
 choices[56][3] = "2,45 GHz - 5,4 GHz";
 answers[56] = 1;
 units[56] = ['108'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 885. AGE A2 2015";
 preguntaids[56] = 885


//  Id pregunta: 2964 Año de creación de pregunta: 2002
 questions[57]= "58)  Las modulaciones angulares, respecto a las modulaciones lineales:";
 choices[57]= new Array();
 choices[57][0] = "Dan peor discriminaci&oacute;n en contra del ruido y la interferencia.";
 choices[57][1] = "Utilizan menor ancho de banda.";
 choices[57][2] = "Utilizan mayor energ&iacute;a para transmitir.";
 choices[57][3] = "Dan mejor discriminaci&oacute;n en contra del ruido y la interferencia.";
 answers[57] = 3;
 units[57] = ['108', '117', '118'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 2964. ";
 preguntaids[57] = 2964


//  Id pregunta: 1846 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre el est&aacute;ndar IEEE 802.11";
 choices[58]= new Array();
 choices[58][0] = "Utiliza CSMA/CA como protocolo MAC";
 choices[58][1] = "La trama 802.11 contiene 4 direcciones MAC";
 choices[58][2] = "La trama 802.11 contiene 2 direcciones MAC";
 choices[58][3] = "Utiliza tramas de reconocimiento o confirmaci&oacute;n (ACK)";
 answers[58] = 2;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1846. ";
 preguntaids[58] = 1846


//  Id pregunta: 5129 Año de creación de pregunta: 2003
 questions[59]= "60)  La norma llamada WiMAX es:";
 choices[59]= new Array();
 choices[59][0] = "La norma IEEE 802.12";
 choices[59][1] = "Una norma WLAN europea elaborada por el Instituto Europeo de Normas de Telecomunicaciones (ETSI) y es similar a IEEE 802.11a";
 choices[59][2] = "Una norma inal&aacute;mbrica fija en condiciones de transmitir 32-56 km con velocidades m&aacute;ximas de datos cercanas a 70 Mbit/s";
 choices[59][3] = "Ninguna de las anteriores es cierta";
 answers[59] = 2;
 units[59] = ['108'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5129. ";
 preguntaids[59] = 5129


//  Id pregunta: 1244 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;alar en qu&eacute; banda de frecuencias el est&aacute;ndar 802.11ad alcanza sus velocidades m&aacute;ximas:";
 choices[60]= new Array();
 choices[60][0] = "60 GHz.";
 choices[60][1] = "6 GHz.";
 choices[60][2] = "600 MHz.";
 choices[60][3] = "60 MHz.";
 answers[60] = 0;
 units[60] = ['108'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1244. ";
 preguntaids[60] = 1244


//  Id pregunta: 4405 Año de creación de pregunta: 2002
 questions[61]= "62)  Bluetooth:";
 choices[61]= new Array();
 choices[61][0] = "Es una tecnolog&iacute;a de enlace radio para redes LAN de peque&ntilde;o alcance";
 choices[61][1] = "Es una tecnolog&iacute;a de enlace de radio para redes PAN";
 choices[61][2] = "Es el resultado de la aplicaci&oacute;n de las &uacute;ltimas t&eacute;cnicas inform&aacute;ticas al mundo de la odontolog&iacute;a";
 choices[61][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[61] = 1;
 units[61] = ['108'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4405. ";
 preguntaids[61] = 4405


//  Id pregunta: 4378 Año de creación de pregunta: 2004
 questions[62]= "63)  Entre las carater&iacute;sticas de propagaci&oacute;n de las ondas de radiofrecuencia, cu&aacute;l de las siguientes afirmaciones no es correcta cuando se incrementa la frecuencia?";
 choices[62]= new Array();
 choices[62][0] = "Menor alcance de la se&ntilde;al";
 choices[62][1] = "menor ancho de banda";
 choices[62][2] = "mayor inmunidad al ruido";
 choices[62][3] = "mayor necesidad de visibilidad directa";
 answers[62] = 1;
 units[62] = ['108'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4378. ";
 preguntaids[62] = 4378


//  Id pregunta: 5090 Año de creación de pregunta: 2003
 questions[63]= "64)  Con respecto a las l&iacute;neas PLC (POWER LINE COMMUNICATIONS) no es cierto que:";
 choices[63]= new Array();
 choices[63][0] = "Tiene problemas respecto a sus a prestaciones o a la velocidad debido al ruido y microcortes";
 choices[63][1] = "No es necesaria nueva regulaci&oacute;n debido a la que ya existe para las l&iacute;neas de potencia instaladas";
 choices[63][2] = "Requiere colocar amplificadores de desacoplamiento en cada transformador de media/baja tensi&oacute;n porque estos act&uacute;an como filtros para los datos";
 choices[63][3] = "Deben enfrentarse a todas las interferencias y perturbaciones presentes, debido a la amplia proliferaci&oacute;n de electrodom&eacute;sticos y otros dispositivos conectados";
 answers[63] = 1;
 units[63] = ['108'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5090. ";
 preguntaids[63] = 5090


//  Id pregunta: 4945 Año de creación de pregunta: 2002
 questions[64]= "65)  Una de las siguientes afirmaciones es falsa con respecto a ADSL:";
 choices[64]= new Array();
 choices[64][0] = "El caudal de informaci&oacute;n es mayor en sentido red-usuario que en el sentido contrario";
 choices[64][1] = "La tarificaci&oacute;n no depende del uso sino del ancho de banda contratado";
 choices[64][2] = "Permite navegar por Internet y mantener una conversaci&oacute;n telef&oacute;nica simult&aacute;neamente";
 choices[64][3] = "Hay que hacer un nuevo tendido de cobre entre la central y el domicilio del abonado para poder instalarlo";
 answers[64] = 3;
 units[64] = ['108'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4945. ";
 preguntaids[64] = 4945


//  Id pregunta: 4659 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es una debilidad de las redes inal&aacute;mbricas frente a otro tipo de redes?:";
 choices[65]= new Array();
 choices[65][0] = "Poca seguridad";
 choices[65][1] = "Escasa protecci&oacute;n frente a interferencias";
 choices[65][2] = "Precio elevado";
 choices[65][3] = "Cobertura limitada";
 answers[65] = 2;
 units[65] = ['108'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4659. ";
 preguntaids[65] = 4659


//  Id pregunta: 888 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale qu&eacute; est&aacute;ndar wifi del IEEE est&aacute; especialmente dise&ntilde;ado para uso en redes que permitan la comunicaci&oacute;n en entornos entre veh&iacute;culos:";
 choices[66]= new Array();
 choices[66][0] = "802.11Qay";
 choices[66][1] = "802.11n";
 choices[66][2] = "802.11p";
 choices[66][3] = "802.11ve";
 answers[66] = 2;
 units[66] = ['108'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 888. AGE A2 2015";
 preguntaids[66] = 888


//  Id pregunta: 5027 Año de creación de pregunta: 2002
 questions[67]= "68)  PLC responde por:";
 choices[67]= new Array();
 choices[67][0] = "Power Limit Consumption";
 choices[67][1] = "Priority Lock Change";
 choices[67][2] = "Power Line Communication";
 choices[67][3] = "Protocol Link Conmutation";
 answers[67] = 2;
 units[67] = ['108'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5027. ";
 preguntaids[67] = 5027


//  Id pregunta: 5177 Año de creación de pregunta: 2003
 questions[68]= "69)  La especificaci&oacute;n H.323:";
 choices[68]= new Array();
 choices[68][0] = "Ha sido creada por la ISO, y define un conjunto de protocolos para transmitir voz, video y datos sobre IP";
 choices[68][1] = "Emplea a su vez otras especificaciones, como H.225 y H.245";
 choices[68][2] = "Hace uso del protocolo RTP para establecer las llamadas sobre la red IP";
 choices[68][3] = "Las respuestas b) y c) son correctas";
 answers[68] = 1;
 units[68] = ['108'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5177. ";
 preguntaids[68] = 5177


//  Id pregunta: 5235 Año de creación de pregunta: 2006
 questions[69]= "70)  La separaci&oacute;n entre subportadoras en la modulaci&oacute;n DMT de ADSL es de:";
 choices[69]= new Array();
 choices[69][0] = "4,3125 KHz";
 choices[69][1] = "4,3215 KHz";
 choices[69][2] = "4,315 KHz";
 choices[69][3] = "4,3175 KHz";
 answers[69] = 0;
 units[69] = ['108'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5235. ";
 preguntaids[69] = 5235


//  Id pregunta: 5130 Año de creación de pregunta: 2004
 questions[70]= "71)  Es posible la transmisi&oacute;n de datos entre dispositivos que siguen el estandar 802.11a y dispositivos que siguen el estandar 802.11b";
 choices[70]= new Array();
 choices[70][0] = "S&iacute;, porque ambos son dispositivos inal&aacute;mbricos WiFi";
 choices[70][1] = "No, porque su radio m&aacute;ximo de acci&oacute;n es diferente";
 choices[70][2] = "No";
 choices[70][3] = "Si siempre que utilicen el mismo canal dentro de la banda de frecuencias en que transmiten.";
 answers[70] = 2;
 units[70] = ['108'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5130. Porque operan en distintas frecuencias.";
 preguntaids[70] = 5130


//  Id pregunta: 4376 Año de creación de pregunta: 2004
 questions[71]= "72)  &iquest;A qu&eacute; se corresponden las siglas 802.11f sobre redes inal&aacute;mbricas?";
 choices[71]= new Array();
 choices[71][0] = "A especificaciones de nivel f&iacute;sico";
 choices[71][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[71][2] = "A especificaciones de Seguridad";
 choices[71][3] = "A especificiaciones de comunicaci&oacute;n entre puntos de acceso";
 answers[71] = 3;
 units[71] = ['108'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4376. Es una recomendaci&oacute;n que permite mayor compatibilidad. Usa el protocolo IAPP que permite a un usuario itinerante cambiarse de un punto de acceso a otro mientras est&aacute; en movimiento sin importar qu&eacute; marcas de puntos de acceso se usan en la red.";
 preguntaids[71] = 4376


//  Id pregunta: 5233 Año de creación de pregunta: 2006
 questions[72]= "73)  De las siguientes tecnolog&iacute;as xDSL, &iquest;cu&aacute;l de ellas puede ser asim&eacute;trica?";
 choices[72]= new Array();
 choices[72][0] = "HDSL";
 choices[72][1] = "SDSL";
 choices[72][2] = "VDSL";
 choices[72][3] = "SHDSL";
 answers[72] = 2;
 units[72] = ['108'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5233. ";
 preguntaids[72] = 5233


//  Id pregunta: 5231 Año de creación de pregunta: 2006
 questions[73]= "74)  Con respecto a las redes locales y personales inal&aacute;mbricas, se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[73]= new Array();
 choices[73][0] = "El est&aacute;ndar 802.11b funciona en la banda de 2,4 GHz y utiliza DSSS en el nivel f&iacute;sico.";
 choices[73][1] = "El est&aacute;ndar 802.11a funciona en la banda de 5 GHz y utiliza OFDM en el nivel f&iacute;sico.";
 choices[73][2] = "El est&aacute;ndar 802.11g funciona en la banda de 2,4 GHz y puede utilizar OFDM o DSSS en el nivel f&iacute;sico.";
 choices[73][3] = "El est&aacute;ndar Bluetooth funciona en la banda de 2,4 GHz y utiliza OFDM en el nivel f&iacute;sico.";
 answers[73] = 3;
 units[73] = ['108'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5231. ";
 preguntaids[73] = 5231


//  Id pregunta: 5031 Año de creación de pregunta: 2002
 questions[74]= "75)  RADIUS es:";
 choices[74]= new Array();
 choices[74][0] = "una herramienta estandarizada de an&aacute;lisis de cobertura radioel&eacute;ctrica";
 choices[74][1] = "un protocolo de acceso inal&aacute;mbrico en la capa de acceso al medio radioel&eacute;ctrico";
 choices[74][2] = "un protocolo de gesti&oacute;n y mantenimiento de redes";
 choices[74][3] = "un protocolo de autenticaci&oacute;n, autorizaci&oacute;n y configuraci&oacute;n de accesos";
 answers[74] = 3;
 units[74] = ['108'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5031. ";
 preguntaids[74] = 5031


