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
//  Id pregunta: 10846 Año de creación de pregunta: 2015
 questions[0]= "1)  El est&aacute;ndar WiFi que permite establecer comunicaciones entre autom&oacute;viles es:";
 choices[0]= new Array();
 choices[0][0] = "IEEE 802.11j";
 choices[0][1] = "IEEE 802.11k";
 choices[0][2] = "IEEE 802.11n";
 choices[0][3] = "IEEE 802.11p";
 answers[0] = 3;
 units[0] = ['108'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10846. ";
 preguntaids[0] = 10846


//  Id pregunta: 8150 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[1]= new Array();
 choices[1][0] = "2.4 GHz y hasta 11 Mbps";
 choices[1][1] = "5 GHz y hasta 54Mbps.";
 choices[1][2] = "2.4 GHz y hasta 54 Mbps.";
 choices[1][3] = "5 GHz y hasta 11 Mbps";
 answers[1] = 1;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8150. Examen TIC A2 2010 interna";
 preguntaids[1] = 8150


//  Id pregunta: 8492 Año de creación de pregunta: 2011
 questions[2]= "3)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[2]= new Array();
 choices[2][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[2][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[2][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = 0;
 units[2] = ['108'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8492. Teleco Ayto. Madrid 2010";
 preguntaids[2] = 8492


//  Id pregunta: 10911 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[3]= new Array();
 choices[3][0] = "WEP";
 choices[3][1] = "PSK";
 choices[3][2] = "EAP";
 choices[3][3] = "WPA";
 answers[3] = 3;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10911. ";
 preguntaids[3] = 10911


//  Id pregunta: 10924 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Qu&eacute; es una topolog&iacute;a de red Ad-Hoc?";
 choices[4]= new Array();
 choices[4][0] = "Aquella en la que todos los elementos de una red se comunican con el resto de igual a igual";
 choices[4][1] = "Aquella en la que todos los elementos de una red se comunican a trav&eacute;s de un elemento com&uacute;n llamado control de accesos.";
 choices[4][2] = "Aquella en la que todos los elementos de una red se comunican siguiendo unas prioridades.";
 choices[4][3] = "Aquella que a nivel l&oacute;gico integra redes localizadas en diferentes redes externas.";
 answers[4] = 0;
 units[4] = ['108'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10924. ";
 preguntaids[4] = 10924


//  Id pregunta: 8151 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Qu&eacute; est&aacute;ndar de redes inal&aacute;mbricas permite a dispositivos en movimiento realizar itinerancia r&aacute;pida de un punto de acceso a otro?";
 choices[5]= new Array();
 choices[5][0] = "IEEE 802.11 h";
 choices[5][1] = "IEEE 802.11 l";
 choices[5][2] = "IEEE 802.11 p";
 choices[5][3] = "IEEE 802 11 r.";
 answers[5] = 3;
 units[5] = ['108'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8151. Examen TIC A2 2010 interna";
 preguntaids[5] = 8151


//  Id pregunta: 10768 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Cu&aacute;l es la velocidad, el ancho de banda y la banda de frecuencias en las que operan las especificaciones 802.11ac?";
 choices[6]= new Array();
 choices[6][0] = "11 Mbps, 22 Mhz, 2.4 Ghz";
 choices[6][1] = "54 Mbps, 20 Mhz, 2.4 Ghz";
 choices[6][2] = "160 Mbps, 80Mhz o 60 Mhz, 5Ghz";
 choices[6][3] = "108Mbps, 40Mhz, 2.4Ghz y 5Ghz";
 answers[6] = 2;
 units[6] = ['108'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10768. ";
 preguntaids[6] = 10768


//  Id pregunta: 10376 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Cu&aacute;ntas conexiones activas permite mantener un dispositivo con el est&aacute;ndar Bluetooth?";
 choices[7]= new Array();
 choices[7][0] = "7";
 choices[7][1] = "8";
 choices[7][2] = "12";
 choices[7][3] = "16";
 answers[7] = 0;
 units[7] = ['108'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10376. ";
 preguntaids[7] = 10376


//  Id pregunta: 10944 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes dificultades no tiene que hacer frente el par telef&oacute;nico para la transmisi&oacute;n de alta velocidad de datos?";
 choices[8]= new Array();
 choices[8][0] = "Ruido impulsivo";
 choices[8][1] = "Ruido de fondo";
 choices[8][2] = "Diafon&iacute;a";
 choices[8][3] = "Medio costoso";
 answers[8] = 3;
 units[8] = ['108'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10944. ";
 preguntaids[8] = 10944


//  Id pregunta: 8230 Año de creación de pregunta: 2011
 questions[9]= "10)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[9]= new Array();
 choices[9][0] = "Bluetooth";
 choices[9][1] = "HomeRF";
 choices[9][2] = "HiperLAN/2";
 choices[9][3] = "IrLMP";
 answers[9] = 1;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8230. Examen UPM A2 2011";
 preguntaids[9] = 8230


//  Id pregunta: 10144 Año de creación de pregunta: 2015
 questions[10]= "11)  Para una red wifi, &iquest;c&uacute;al de los siguientes NO es un protocolo de seguridad que le sea aplicable?";
 choices[10]= new Array();
 choices[10][0] = "WPA2.";
 choices[10][1] = "WPA.";
 choices[10][2] = "WAP.";
 choices[10][3] = "WEP.";
 answers[10] = 2;
 units[10] = ['108'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10144. Examen TIC A1 2014";
 preguntaids[10] = 10144


//  Id pregunta: 8246 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[11]= new Array();
 choices[11][0] = "Spread spectrum con secuencia directa";
 choices[11][1] = "Spread spectrum con salto de frecuencia";
 choices[11][2] = "Spread spectrum con secuencia indirecta";
 choices[11][3] = "Spread spectrum sobre TCP/IP";
 answers[11] = 1;
 units[11] = ['108'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8246. Examen UPM A2 2011";
 preguntaids[11] = 8246


//  Id pregunta: 8229 Año de creación de pregunta: 2011
 questions[12]= "13)  En la tecnolog&iacute;a VDSL, &iquest;cu&aacute;ntos canales se utilizan para la transmisi&oacute;n de los datos?";
 choices[12]= new Array();
 choices[12][0] = "4 (2 de bajada y 2 para subida)";
 choices[12][1] = "3 (2 de bajada y 1 de subida)";
 choices[12][2] = "2 (1 de bajada y 1 de subida)";
 choices[12][3] = "5 (3 de bajada y 2 de subida)";
 answers[12] = 0;
 units[12] = ['108'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8229. Examen UPM A2 2011";
 preguntaids[12] = 8229


//  Id pregunta: 8535 Año de creación de pregunta: 2011
 questions[13]= "14)  Respecto a LMDS:";
 choices[13]= new Array();
 choices[13][0] = "Al ser de frecuencias bajas, no tiene problemas con las zonas de sombra.";
 choices[13][1] = "Son redes de lento despliegue";
 choices[13][2] = "Funciona en la banda de los 28 a 31 Ghz y una difusi&oacute;n m&aacute;xima de 7 km";
 choices[13][3] = "Se la conoce como proveedor de servicios sin cable";
 answers[13] = 2;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8535. ";
 preguntaids[13] = 8535


//  Id pregunta: 8534 Año de creación de pregunta: 2011
 questions[14]= "15)  Indica cu&aacute;l de los siguientes par&aacute;metros tiene en cuenta el algoritmo de adjudicaci&oacute;n de HSUPA.";
 choices[14]= new Array();
 choices[14][0] = "Ancho de banda disponible en cada estaci&oacute;n";
 choices[14][1] = "Consumo el&eacute;ctrico del Hardware";
 choices[14][2] = "Interferencia en el canal UPLOAD";
 choices[14][3] = "Todos los anteriores.";
 answers[14] = 3;
 units[14] = ['108'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8534. ";
 preguntaids[14] = 8534


//  Id pregunta: 8494 Año de creación de pregunta: 2011
 questions[15]= "16)  &iquest;Qu&eacute; utilidad tiene en la transmisi&oacute;n por radio el pico de absorci&oacute;n del ox&iacute;geno en 60 Ghz?:";
 choices[15]= new Array();
 choices[15][0] = "Permite la propagaci&oacute;n por conductos .";
 choices[15][1] = "Permite la reutilizaci&oacute;n espacial de frecuencias en esa banda.";
 choices[15][2] = "Permite la propagaci&oacute;n por dispersi&oacute;n en esa banda.";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = 1;
 units[15] = ['108'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8494. Teleco Ayto. Madrid 2010";
 preguntaids[15] = 8494


//  Id pregunta: 8491 Año de creación de pregunta: 2011
 questions[16]= "17)  Las p&eacute;rdidas debidas a absorci&oacute;n por gases atmosf&eacute;ricos deben tenerse en cuenta en:";
 choices[16]= new Array();
 choices[16][0] = "Radioenlaces de frecuencias superiores a 30 GHz.";
 choices[16][1] = "Radioenlaces de frecuencias superiores a 3 GHz.";
 choices[16][2] = "Radioenlaces de frecuencias superiores a 300 MHz.";
 choices[16][3] = "Radioenlaces de frecuencias superiores a 300 kHz";
 answers[16] = 1;
 units[16] = ['108'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8491. Teleco Ayto. Madrid 2010";
 preguntaids[16] = 8491


//  Id pregunta: 8152 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes algoritmos de cifrado NO se implementa en WiMax?";
 choices[17]= new Array();
 choices[17][0] = "3DES";
 choices[17][1] = "SEAL";
 choices[17][2] = "AES";
 choices[17][3] = "RSA";
 answers[17] = 1;
 units[17] = ['108'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8152. Examen TIC A2 2010 interna";
 preguntaids[17] = 8152


//  Id pregunta: 9495 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[18]= new Array();
 choices[18][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[18][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[18][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[18][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[18] = 3;
 units[18] = ['108'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9495. ";
 preguntaids[18] = 9495


//  Id pregunta: 9864 Año de creación de pregunta: 2015
 questions[19]= "20)  Indique cu&aacute;l de estos est&aacute;ndares especifica las normas de funcionamiento de la capa f&iacute;sica y de enlace en una WLAN:";
 choices[19]= new Array();
 choices[19][0] = "802.11b";
 choices[19][1] = "802.11g";
 choices[19][2] = "802.11ac";
 choices[19][3] = "Todos los anteriores.";
 answers[19] = 3;
 units[19] = ['108'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9864. ";
 preguntaids[19] = 9864


//  Id pregunta: 9494 Año de creación de pregunta: 2014
 questions[20]= "21)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[20]= new Array();
 choices[20][0] = "802.11f";
 choices[20][1] = "802.11h";
 choices[20][2] = "802.11i";
 choices[20][3] = "802.11r";
 answers[20] = 2;
 units[20] = ['108'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9494. ";
 preguntaids[20] = 9494


//  Id pregunta: 8827 Año de creación de pregunta: 2013
 questions[21]= "22)  &iquest;De qu&eacute; est&aacute;ndar se estar&iacute;a hablando si se menciona una Interfaz aerea avanzada con velocidades de transmisi&oacute;n de 100 Mbps para dispositivos fijos y 1 Gbps para dispositivos m&oacute;viles?";
 choices[21]= new Array();
 choices[21][0] = "802.16e";
 choices[21][1] = "802.11-2012";
 choices[21][2] = "802.16m";
 choices[21][3] = "802.11ac";
 answers[21] = 2;
 units[21] = ['108'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8827. ";
 preguntaids[21] = 8827


//  Id pregunta: 10378 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares Wifi incluye WPA2?";
 choices[22]= new Array();
 choices[22][0] = "802.e";
 choices[22][1] = "802.f";
 choices[22][2] = "802.h";
 choices[22][3] = "802.i";
 answers[22] = 3;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10378. ";
 preguntaids[22] = 10378


//  Id pregunta: 8479 Año de creación de pregunta: 2011
 questions[23]= "24)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[23]= new Array();
 choices[23][0] = "1 maestro y 7 esclavos";
 choices[23][1] = "1 maestro y 15 esclavos";
 choices[23][2] = "1 maestro y 16 esclavos";
 choices[23][3] = "1 maestro y 32 esclavos";
 answers[23] = 0;
 units[23] = ['108'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8479. Examen UPM A2 2011";
 preguntaids[23] = 8479


//  Id pregunta: 9867 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l de estas tecnolog&iacute;as inal&aacute;mbricas puede alcanzar una cobertura de hasta 80 kil&oacute;metros?";
 choices[24]= new Array();
 choices[24][0] = "Zigbee";
 choices[24][1] = "WiMAX";
 choices[24][2] = "Ethernet";
 choices[24][3] = "Wibree";
 answers[24] = 1;
 units[24] = ['108'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9867. ";
 preguntaids[24] = 9867


//  Id pregunta: 10763 Año de creación de pregunta: 2015
 questions[25]= "26)  Se&ntilde;ale la respuesta incorrecta sobre ADSL 2";
 choices[25]= new Array();
 choices[25][0] = "Emplea un ancho de banda mayor que el ADSL original";
 choices[25][1] = "Puede emplear varias l&iacute;neas telef&oacute;nicas para un &uacute;nica comunicaci&oacute;n";
 choices[25][2] = "Est&aacute; basado en la tecnolog&iacute;a STTH";
 choices[25][3] = "Puede emplear el ancho de banda para telefon&iacute;a obteniendo un amayor velocidad de transmisi&oacute;n de datos.";
 answers[25] = 2;
 units[25] = ['108'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10763. ";
 preguntaids[25] = 10763


//  Id pregunta: 8385 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;En que banda de frecuencias trabaja WiBro?";
 choices[26]= new Array();
 choices[26][0] = "10GHz-66GHz";
 choices[26][1] = "2,45MHz";
 choices[26][2] = "2,3GHz-2,4GHz";
 choices[26][3] = "2GHz-11GHz";
 answers[26] = 2;
 units[26] = ['108'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8385. ";
 preguntaids[26] = 8385


//  Id pregunta: 9219 Año de creación de pregunta: 2014
 questions[27]= "28)  La norma ISO 27002";
 choices[27]= new Array();
 choices[27][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[27][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[27][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[27][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[27] = 1;
 units[27] = ['108'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9219. Examen TIC A1 2013";
 preguntaids[27] = 9219


//  Id pregunta: 9493 Año de creación de pregunta: 2014
 questions[28]= "29)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[28]= new Array();
 choices[28][0] = "3 Mbps";
 choices[28][1] = "2 Mbps";
 choices[28][2] = "5 Mbps";
 choices[28][3] = "1 Mbps";
 answers[28] = 0;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9493. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";
 preguntaids[28] = 9493


//  Id pregunta: 10111 Año de creación de pregunta: 2015
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto al est&aacute;ndar IEEE 802.11ac-2013:";
 choices[29]= new Array();
 choices[29][0] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 2,4 GHz.";
 choices[29][1] = "Ampl&iacute;a ancho de banda de canal a 40 MHz y opera en la banda de 2,4 GHz.";
 choices[29][2] = "Ampl&iacute;a ancho de banda de canal a 80 MHz y opera en la banda de 60 GHz.";
 choices[29][3] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 5 GHz.";
 answers[29] = 3;
 units[29] = ['108'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10111. Examen TIC A2 2014";
 preguntaids[29] = 10111


//  Id pregunta: 8509 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Qu&eacute; tecnolog&iacute;a utiliza en exclusiva una modulacu&oacute;n DSSS?";
 choices[30]= new Array();
 choices[30][0] = "802.11a";
 choices[30][1] = "802.11b";
 choices[30][2] = "802.11g";
 choices[30][3] = "802.11n";
 answers[30] = 1;
 units[30] = ['108'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8509. ";
 preguntaids[30] = 8509


//  Id pregunta: 10863 Año de creación de pregunta: 2015
 questions[31]= "32)  Se&ntilde;ale la tecnolog&iacute;a que no hace uso de MIMO:";
 choices[31]= new Array();
 choices[31][0] = "HSPA+";
 choices[31][1] = "WiFi";
 choices[31][2] = "WiMAX";
 choices[31][3] = "Las 3 hacen uso de MIMO";
 answers[31] = 3;
 units[31] = ['108'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10863. ";
 preguntaids[31] = 10863


//  Id pregunta: 9580 Año de creación de pregunta: 2014
 questions[32]= "33)  &iquest;Cu&aacute;l es el grupo de trabajo correspondiente al est&aacute;ndar WRAN (Wireless Regional Area Network)?:";
 choices[32]= new Array();
 choices[32][0] = "802.19";
 choices[32][1] = "802.2";
 choices[32][2] = "802.21";
 choices[32][3] = "802.22";
 answers[32] = 3;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9580. TIC A2 2013 libre";
 preguntaids[32] = 9580


//  Id pregunta: 8524 Año de creación de pregunta: 2011
 questions[33]= "34)  Cu&aacute;l es la afirmaci&oacute;n correcta sobre IEEE 802";
 choices[33]= new Array();
 choices[33][0] = "802.8 es el grupo asesor de banda ancha";
 choices[33][1] = "802.7 es el grupo asesor en fibras &oacute;pticas";
 choices[33][2] = "802.10 era el grupo asesor en seguridad";
 choices[33][3] = "802.3 trata sobre el control l&oacute;gico de enlace";
 answers[33] = 2;
 units[33] = ['108'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8524. ";
 preguntaids[33] = 8524


//  Id pregunta: 8236 Año de creación de pregunta: 2011
 questions[34]= "35)  Con respecto a los est&aacute;ndares de redes inal&aacute;mbricas &iquest;cu&aacute;l de las siguientes combinaciones es correcta?";
 choices[34]= new Array();
 choices[34][0] = "802.11a-2.4Ghz";
 choices[34][1] = "802.11b -2.4Ghz";
 choices[34][2] = "802.11g-5Ghz";
 choices[34][3] = "802.11x-2.4Ghz";
 answers[34] = 1;
 units[34] = ['108'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8236. Examen UPM A2 2011";
 preguntaids[34] = 8236


//  Id pregunta: 10762 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Cu&aacute;l no es una modulaci&oacute;n para DSL?";
 choices[35]= new Array();
 choices[35][0] = "CAP";
 choices[35][1] = "FSK";
 choices[35][2] = "DMT";
 choices[35][3] = "WDMT";
 answers[35] = 1;
 units[35] = ['108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10762. ";
 preguntaids[35] = 10762


//  Id pregunta: 8527 Año de creación de pregunta: 2014
 questions[36]= "37)  Con respecto a las siguientes siglas:";
 choices[36]= new Array();
 choices[36][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[36][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[36][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[36][3] = "Todas las anteriores";
 answers[36] = 3;
 units[36] = ['108'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8527. ";
 preguntaids[36] = 8527


//  Id pregunta: 9868 Año de creación de pregunta: 2015
 questions[37]= "38)  Se&ntilde;ale aquella opci&oacute;n que no es una WPAN:";
 choices[37]= new Array();
 choices[37][0] = "NFC";
 choices[37][1] = "IRDA";
 choices[37][2] = "Wibree";
 choices[37][3] = "CSMA";
 answers[37] = 3;
 units[37] = ['108'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 9868. ";
 preguntaids[37] = 9868


//  Id pregunta: 10141 Año de creación de pregunta: 2015
 questions[38]= "39)  Respecto a Bluetooth es correcto que:";
 choices[38]= new Array();
 choices[38][0] = "No utiliza la misma banda de frecuencia que Wi-Fi (802.11), por lo que no se interfieren mutuamente.";
 choices[38][1] = "Con 802.11 AMP puede llegar a 24 Mbps.";
 choices[38][2] = "Debe evitarse en entornos escolares debido a que emite radiaci&oacute;n ionizante.";
 choices[38][3] = "Debe emitirse con un m&iacute;nimo de 10 watios.";
 answers[38] = 1;
 units[38] = ['108'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10141. Examen TIC A1 2014";
 preguntaids[38] = 10141


//  Id pregunta: 8828 Año de creación de pregunta: 2013
 questions[39]= "40)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[39]= new Array();
 choices[39][0] = "802.16m";
 choices[39][1] = "802.16e";
 choices[39][2] = "802.16k";
 choices[39][3] = "802.16-2009";
 answers[39] = 0;
 units[39] = ['108'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8828. Tambi&eacute;n conocida como Mobile WiMAX Release 2";
 preguntaids[39] = 8828


//  Id pregunta: 8158 Año de creación de pregunta: 2011
 questions[40]= "41)  &iquest;En qu&eacute; recomendaci&oacute;n de la Uni&oacute;n Internacional de Telecomunicaciones viene recogida la tecnolog&iacute;a ADSL-Lite?";
 choices[40]= new Array();
 choices[40][0] = "ITU G.992.1.";
 choices[40][1] = "ITU G.992.2";
 choices[40][2] = "ITU G.992.3.";
 choices[40][3] = "ITUG.992.4.";
 answers[40] = 1;
 units[40] = ['108'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8158. Examen TIC A2 2010 interna";
 preguntaids[40] = 8158


