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
//  Id pregunta: 8104 Año de creación de pregunta: 2011
 questions[0]= "1)  El est&aacute;ndar IEEE 802.16 hace referencia a:";
 choices[0]= new Array();
 choices[0][0] = "Bluetooth.";
 choices[0][1] = "Wi-Fi.";
 choices[0][2] = "Wimax.";
 choices[0][3] = "Wireless LAN.";
 answers[0] = 2;
 units[0] = ['108'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8104. Examen TIC A2 2010 interna";
 preguntaids[0] = 8104


//  Id pregunta: 8147 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Qu&eacute; tecnolog&iacute;a de acceso permite un tipo de servicio tanto sim&eacute;trico como asim&eacute;trico?";
 choices[1]= new Array();
 choices[1][0] = "SHDSL";
 choices[1][1] = "HDSL";
 choices[1][2] = "ADSL2";
 choices[1][3] = "VDSL";
 answers[1] = 3;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8147. Examen TIC A2 2010 interna";
 preguntaids[1] = 8147


//  Id pregunta: 7547 Año de creación de pregunta: 2010
 questions[2]= "3)  Indique cu&aacute;l de las siguientes respuestas no es correcta en relaci&oacute;n con los est&aacute;ndares 802.11x del IEEE:";
 choices[2]= new Array();
 choices[2][0] = "802.11a utiliza la banda de 5 GHz, 802.11b y 802.11g la de 2,4 GHz.";
 choices[2][1] = "802.11a alcanza velocidades de 54 Mbps, 802.11b y 802.11g de 11 Mbps.";
 choices[2][2] = "802.11i se refiere a mejoras de seguridad.";
 choices[2][3] = "802.11e se refiere a calidad de servicio.";
 answers[2] = 1;
 units[2] = ['108'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 7547. Map 2005";
 preguntaids[2] = 7547


//  Id pregunta: 6791 Año de creación de pregunta: 2010
 questions[3]= "4)  La banda de 26 GHz se utiliza para:";
 choices[3]= new Array();
 choices[3][0] = "UMTS.";
 choices[3][1] = "LMDS.";
 choices[3][2] = "WiFi.";
 choices[3][3] = "Bluetooth.";
 answers[3] = 1;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6791. TIC A 2009";
 preguntaids[3] = 6791


//  Id pregunta: 5519 Año de creación de pregunta: 2007
 questions[4]= "5)  La raz&oacute;n por la que en las comunicaciones WiFi se utilizan t&eacute;cnicas de expansi&oacute;n del espectro es:";
 choices[4]= new Array();
 choices[4][0] = "Para poder incrementar la longitud de onda.";
 choices[4][1] = "Para reducir los problemas de propagaci&oacute;n de la se&ntilde;al.";
 choices[4][2] = "Por razones de seguridad.";
 choices[4][3] = "WiFi no utiliza expansi&oacute;n del espectro.";
 answers[4] = 1;
 units[4] = ['108'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5519. ";
 preguntaids[4] = 5519


//  Id pregunta: 6228 Año de creación de pregunta: 2003
 questions[5]= "6)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[5]= new Array();
 choices[5][0] = "La tecnolog&iacute;a WIMAX permite operar en condiciones en las que no existe l&iacute;nea de visi&oacute;n directa entre la estaci&oacute;n base y el terminal.";
 choices[5][1] = "En Espa&ntilde;a, la tecnolog&iacute;a WIMAX s&oacute;lo puede utilizarse en la banda de uso libre de 5 GHz.";
 choices[5][2] = "La tecnolog&iacute;a WIMAX utiliza un esquema de modulaci&oacute;n multiportadora OFDM.";
 choices[5][3] = "La tecnolog&iacute;a WIMAX se basa en aspectos de la capa f&iacute;sica y de control de acceso al m&eacute;dio del est&aacute;ndar IEEE 802.16";
 answers[5] = 1;
 units[5] = ['108'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 6228. Examen TIC A Castilla La Mancha 2007";
 preguntaids[5] = 6228


//  Id pregunta: 7198 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Es compatible el servicio ADSL y el servicio RDSI sobre el mismo par de cobre?";
 choices[6]= new Array();
 choices[6][0] = "S&iacute;";
 choices[6][1] = "No";
 choices[6][2] = "S&oacute;lo si no se ofrece tambi&eacute;n el servicio RTC";
 choices[6][3] = "S&oacute;lo si el cliente no tiene una centralita PBX";
 answers[6] = 0;
 units[6] = ['108'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7198. Castilla La Mancha 2009. Compatibilidad para ADSL 2+ seg&uacute;n Anexo B";
 preguntaids[6] = 7198


//  Id pregunta: 7967 Año de creación de pregunta: 2011
 questions[7]= "8)  Se&ntilde;ale cual de las siguientes caracter&iacute;sticas de seguridad est&aacute; incluida tanto en el est&aacute;ndar WPA2 como en el est&aacute;ndar WEP:";
 choices[7]= new Array();
 choices[7][0] = "Intercambio din&aacute;mico de claves.";
 choices[7][1] = "Autenticaci&oacute;n 802.1x";
 choices[7][2] = "Preshared Keys (PSK).";
 choices[7][3] = "Encriptaci&oacute;n AES.";
 answers[7] = 2;
 units[7] = ['108'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7967. Examen TIC A2 2010";
 preguntaids[7] = 7967


//  Id pregunta: 7662 Año de creación de pregunta: 2010
 questions[8]= "9)  El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a la seguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno que permite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a los est&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[8]= new Array();
 choices[8][0] = "El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivos en redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifrado sim&eacute;trico RC4.";
 choices[8][1] = "El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridad del protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x.";
 choices[8][2] = "El protocolo WPA (Wi-fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE.";
 choices[8][3] = "IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redes inal&aacute;mbricaS";
 answers[8] = 3;
 units[8] = ['108'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7662. Map 2006";
 preguntaids[8] = 7662


//  Id pregunta: 5594 Año de creación de pregunta: 2007
 questions[9]= "10)  &iquest;Cu&aacute;l es la banda de frecuencia reservada a voz convencional en la tecnolog&iacute;a ADSL?";
 choices[9]= new Array();
 choices[9][0] = "0-10 KHz";
 choices[9][1] = "0-4 KHz";
 choices[9][2] = "0-56 KHz";
 choices[9][3] = "5-10 KHz";
 answers[9] = 1;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5594. ";
 preguntaids[9] = 5594


//  Id pregunta: 5382 Año de creación de pregunta: 2006
 questions[10]= "11)  El estandar 802.11n se centra en";
 choices[10]= new Array();
 choices[10][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[10][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[10][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[10][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[10] = 2;
 units[10] = ['108'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5382. ";
 preguntaids[10] = 5382


//  Id pregunta: 5410 Año de creación de pregunta: 2006
 questions[11]= "12)  Indique cu&aacute;l de las siguientes respuestas no es correcta en relaci&oacute;n con los est&aacute;ndares 802.11x del IEEE:";
 choices[11]= new Array();
 choices[11][0] = "802.11a utiliza la banda de 5 GHz, 802.11b y 802.11g la de 2,4 GHz";
 choices[11][1] = "802.11a alcanza velocidades de 54 Mbps, 802.11b y 802.11g de 11 Mbps";
 choices[11][2] = "802.11i se refiere a mejoras de seguridad";
 choices[11][3] = "802.11e se refiere a calidad de servicio";
 answers[11] = 1;
 units[11] = ['108'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5410. ";
 preguntaids[11] = 5410


//  Id pregunta: 8106 Año de creación de pregunta: 2011
 questions[12]= "13)  Indique cu&aacute;l de los siguientes es un est&aacute;ndar WiMAX para servicios m&oacute;viles:";
 choices[12]= new Array();
 choices[12][0] = "IEEE 802.16-2004";
 choices[12][1] = "IEEE 802.16d";
 choices[12][2] = "IEEE 802.16e.";
 choices[12][3] = "Wimax no permite acceso a servicios m&oacute;viles.";
 answers[12] = 2;
 units[12] = ['108'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8106. Examen TIC A2 2010 interna";
 preguntaids[12] = 8106


//  Id pregunta: 7402 Año de creación de pregunta: 2010
 questions[13]= "14)  Existen diferencias entre ADSL2 y ADSL2+. Se&ntilde;ale la INCORRECTA:";
 choices[13]= new Array();
 choices[13][0] = "La velocidad m&aacute;xima. ADSL2+ alcanza mayores velocidades";
 choices[13][1] = "El ancho de banda. ADSL2+ ocupa mayor ancho de banda";
 choices[13][2] = "La infraestructura necesaria. ADSL2+ requiere una instalaci&oacute;n m&aacute;s compleja que ADSL2 para proporcionar la transici&oacute;n desde ADSL";
 choices[13][3] = "El n&uacute;mero de pares de cobre entrelazados. ADSL2+ requiere el doble de pares de cobre entrelazados";
 answers[13] = 3;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7402. Examen TIC B 2009";
 preguntaids[13] = 7402


//  Id pregunta: 5744 Año de creación de pregunta: 2007
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de WiMax respecto a WIFI?:";
 choices[14]= new Array();
 choices[14][0] = "el ancho los canales radio utilizados por WiMax es menor que los de WiFi";
 choices[14][1] = "WiMax utiliza un protocolo de control de acceso al medio CSMA evolucionado respecto al de WiFi";
 choices[14][2] = "WiMax soporta mas usuarios por cada canal radio";
 choices[14][3] = "WiMax permite el control autom&aacute;tico de potencia emitida";
 answers[14] = 1;
 units[14] = ['108'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5744. ";
 preguntaids[14] = 5744


//  Id pregunta: 6347 Año de creación de pregunta: 2003
 questions[15]= "16)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G a la generaci&oacute;n 2.5G ha requerido la realizaci&oacute;n de inversiones:";
 choices[15]= new Array();
 choices[15][0] = "En el acceso radio";
 choices[15][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[15][2] = "No fue necesario modificar la infraestructura existente.";
 choices[15][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[15] = 1;
 units[15] = ['108'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6347. ";
 preguntaids[15] = 6347


//  Id pregunta: 8139 Año de creación de pregunta: 2011
 questions[16]= "17)  En relaci&oacute;n con los mecanismos de seguridad en redes Wi-Fi, indique la afirmaci&oacute;n FALSA:";
 choices[16]= new Array();
 choices[16][0] = "Las especificaciones WEP y WPA usan RC4 como algoritmo de cifrado.";
 choices[16][1] = "La especificaci&oacute;n WPA2 mejora la segundad al usar AES como algoritmo de cifrado.";
 choices[16][2] = "En el est&aacute;ndar IEEE 802.11 i es donde se detalla la especificaci&oacute;n de WPA2.";
 choices[16][3] = "El est&aacute;ndar IEEE 802.11g incrementa la seguridad introduciendo 3DES como algoritmo de cifrado.";
 answers[16] = 3;
 units[16] = ['108'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8139. Examen TIC A2 2010 interna";
 preguntaids[16] = 8139


//  Id pregunta: 5650 Año de creación de pregunta: 2007
 questions[17]= "18)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[17]= new Array();
 choices[17][0] = "La tecnolog&iacute;a WiFi esta optimizada para usos en interiores y para rangos de cientos de metros, mientras que la tecnolog&iacute;a WIMAX esta optimizada para aplicaciones de exterior y para rangos de varios kil&oacute;metros.";
 choices[17][1] = "La tecnolog&iacute;a WiFi no requiere que exista l&iacute;nea de visi&oacute;n directa entre el terminal y el Punto de Acceso (AP), mientras que la tecnolog&iacute;a WIMAX requiere que exista una l&iacute;nea de visi&oacute;n directa entre la Estaci&oacute;n Base y la antena del terminal receptor";
 choices[17][2] = "La tecnolog&iacute;a WiFi es capaz de proporcionar capacidades brutas de hasta 54 Mbps en un canal de 20 MHz, mientras que WIMAX proporciona capacidades brutas de hasta 75 Mbps en un canal de 20 MHz.";
 choices[17][3] = "La tecnolog&iacute;a WiFi fue inicialmente dise&ntilde;ada para aplicaciones LAN inal&aacute;mbricas que soportaban decenas de usuarios con una suscripci&oacute;n por terminal, mientras que WIMAX puede soportar cientos de terminales con ilimitadas subscripciones por terminal.";
 answers[17] = 1;
 units[17] = ['108'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5650. ";
 preguntaids[17] = 5650


//  Id pregunta: 7585 Año de creación de pregunta: 2010
 questions[18]= "19)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y se aplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itinerancia de clientes es el:";
 choices[18]= new Array();
 choices[18][0] = "802.11e.";
 choices[18][1] = "802.11f.";
 choices[18][2] = "802.11h.";
 choices[18][3] = "802.11i.";
 answers[18] = 1;
 units[18] = ['108'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 7585. Map 2006";
 preguntaids[18] = 7585


//  Id pregunta: 5380 Año de creación de pregunta: 2006
 questions[19]= "20)  El estandar 802.11i se centra en";
 choices[19]= new Array();
 choices[19][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[19][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[19][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[19][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[19] = 1;
 units[19] = ['108'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5380. ";
 preguntaids[19] = 5380


//  Id pregunta: 7399 Año de creación de pregunta: 2010
 questions[20]= "21)  El sistema bluetooth posee las siguientes caracter&iacute;sticas. Se&ntilde;ale cu&aacute;l es la INCORRECTA";
 choices[20]= new Array();
 choices[20][0] = "Funciona en la banda de frecuencias ISM (2,45 GHz)";
 choices[20][1] = "Se corresponde con el est&aacute;ndar IEEE 802.15";
 choices[20][2] = "La topolog&iacute;a de las redes Bluetooth se conoce como micronet o microrred";
 choices[20][3] = "Bluetooth v2.0 permite alcanzar velocidades de hasta 3 Mbps";
 answers[20] = 2;
 units[20] = ['108'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7399. Examen TIC B 2009";
 preguntaids[20] = 7399


//  Id pregunta: 6742 Año de creación de pregunta: 2009
 questions[21]= "22)  En referencia a la arquitectura Bluetooth, seleccione la opci&oacute;n correcta de entre las que aparecen a continuaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "La unidad b&aacute;sica de un sistema Bluetooth es una scatternet, que consta de un nodo maestro y hasta siete nodos esclavos activos a una distancia de 10 metros";
 choices[21][1] = "La unidad b&aacute;sica de un sistema Bluetooth es una piconet, que consta de un nodo maestro y hasta siete nodos esclavos activos a una distancia de 10 metros";
 choices[21][2] = "La unidad b&aacute;sica de un sistema Bluetooth es una scatternet, que consta de uno o m&aacute;s nodos maestros y m&aacute;s de siete nodos esclavos a una distancia de 10 metros";
 choices[21][3] = "La unidad b&aacute;sica de un sistema Bluetooth es una piconet, que consta de uno o m&aacute;s nodos maestro y mas de siete nodos esclavos a una distancia de 10 metros";
 answers[21] = 1;
 units[21] = ['108'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 6742. MAP 2008 A1";
 preguntaids[21] = 6742


//  Id pregunta: 6082 Año de creación de pregunta: 2003
 questions[22]= "23)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en lanorma del ETSI:";
 choices[22]= new Array();
 choices[22][0] = "ET 301-192";
 choices[22][1] = "ET 202-125";
 choices[22][2] = "ET 125-100";
 choices[22][3] = "ET 100-200";
 answers[22] = 0;
 units[22] = ['107', '108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6082. Examen TIC A1 MAP 2007";
 preguntaids[22] = 6082


//  Id pregunta: 7966 Año de creación de pregunta: 2011
 questions[23]= "24)  De las siguientes opciones, se&ntilde;ale aquella que representa la m&aacute;xima velocidad a la que un dispositivo inal&aacute;mbrico puede enviar datos conforme al est&aacute;ndar IEEE indicado:";
 choices[23]= new Array();
 choices[23][0] = "802.11a usando DSSS, a 11 Mbps.";
 choices[23][1] = "802.11a usando DSSS, a 54 Mbps.";
 choices[23][2] = "802.11b usando OFDM, a 54 Mbps";
 choices[23][3] = "802.11g usando OFDM, a 54 Mbps.";
 answers[23] = 3;
 units[23] = ['108'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7966. Examen TIC A2 2010";
 preguntaids[23] = 7966


//  Id pregunta: 5381 Año de creación de pregunta: 2006
 questions[24]= "25)  El estandar 802.11k se centra en";
 choices[24]= new Array();
 choices[24][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[24][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[24][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[24][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[24] = 3;
 units[24] = ['108'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5381. ";
 preguntaids[24] = 5381


//  Id pregunta: 6229 Año de creación de pregunta: 2003
 questions[25]= "26)  Una antena que radia la misma potencia en todas las direcciones es conocida como:";
 choices[25]= new Array();
 choices[25][0] = "De Marconi";
 choices[25][1] = "Hertziana";
 choices[25][2] = "Ionosf&eacute;rica";
 choices[25][3] = "Isotr&oacute;pica";
 answers[25] = 3;
 units[25] = ['108'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 6229. Examen TIC A Castilla La Mancha 2007";
 preguntaids[25] = 6229


//  Id pregunta: 7392 Año de creación de pregunta: 2010
 questions[26]= "27)  MPLS (Multiprotocol Label Switching) opera:";
 choices[26]= new Array();
 choices[26][0] = "Sobre el protocolo IP, y por debajo del protocolo TCP";
 choices[26][1] = "Entre la capa de enlace de datos y la capa de red del modelo OSI";
 choices[26][2] = "Entre el protocolo TCP y los protocolos del nivel de Aplicaci&oacute;n";
 choices[26][3] = "Entre la capa del nivel de red y la capa de transporte del modelo TCP/IP";
 answers[26] = 1;
 units[26] = ['108'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 7392. Examen TIC B 2009";
 preguntaids[26] = 7392


//  Id pregunta: 5518 Año de creación de pregunta: 2007
 questions[27]= "28)  Para evitar las colisiones de paquetes, las redes inal&aacute;mbricas 802.11 WiFi pueden utilizar los siguientes mecanismos: I) CSMA/CA+ACK Carrier Sense Multiple Access with Collision Avoidance + Acknowledge). II) RTS/CTS (Request to Send/Clear to Send). III) OFDM (Orthogonal Frecuency Division Multiplexing).";
 choices[27]= new Array();
 choices[27][0] = "I y II.";
 choices[27][1] = "II y III.";
 choices[27][2] = "I y III.";
 choices[27][3] = "I, II y III.";
 answers[27] = 0;
 units[27] = ['108'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5518. ";
 preguntaids[27] = 5518


//  Id pregunta: 6691 Año de creación de pregunta: 2009
 questions[28]= "29)  En referencia a WiMAX, seleccione cu&aacute;l de las siguientes opciones se corresponde con WiMAX m&oacute;vil:";
 choices[28]= new Array();
 choices[28][0] = "802.16i";
 choices[28][1] = "802.16e";
 choices[28][2] = "802.16f";
 choices[28][3] = "802.16n";
 answers[28] = 1;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 6691. ";
 preguntaids[28] = 6691


//  Id pregunta: 5903 Año de creación de pregunta: 2007
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and ElectronicsEngineers) 802.11 es cierta?";
 choices[29]= new Array();
 choices[29][0] = "El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-sequence Spread Spectrum)";
 choices[29][1] = "El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-hopping spread spectrum)";
 choices[29][2] = "El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal Frequency-divisionMultiplexing)";
 choices[29][3] = "El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing)";
 answers[29] = 0;
 units[29] = ['108'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5903. ";
 preguntaids[29] = 5903


//  Id pregunta: 5260 Año de creación de pregunta: 2006
 questions[30]= "31)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[30]= new Array();
 choices[30][0] = "La convergencia de las redes de voz y datos";
 choices[30][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[30][2] = "Ninguna de las anteriores";
 choices[30][3] = "tanto la opci&oacute;n a como la b";
 answers[30] = 3;
 units[30] = ['102', '107', '108'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5260. ";
 preguntaids[30] = 5260


//  Id pregunta: 5412 Año de creación de pregunta: 2006
 questions[31]= "32)  Indique la tecnolog&iacute;a de transmisi&oacute;n que utiliza el est&aacute;ndar 802.16a del IEEE:";
 choices[31]= new Array();
 choices[31][0] = "DSSS";
 choices[31][1] = "FHSS";
 choices[31][2] = "OFDM";
 choices[31][3] = "DWDM";
 answers[31] = 2;
 units[31] = ['108'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5412. ";
 preguntaids[31] = 5412


//  Id pregunta: 7889 Año de creación de pregunta: 2011
 questions[32]= "33)  En relaci&oacute;n a la seguridad en redes inal&aacute;mbricas, cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[32]= new Array();
 choices[32][0] = "Entre los mecanismos b&aacute;sicos de seguridad aplicables en redes inal&aacute;mbricas, se encuentran: 1. Ocultaci&oacute;n del SSID (identificador de red). 2. Filtrado MAC. 3. Ajuste de potencia. 4. Uso de mecanismos de autenticaci&oacute;n y cifrado.";
 choices[32][1] = "El ataque DoS, &quot;Clear Channel Assesments&quot;, basado en falsear el mecanismo CCA, afecta a dispositivos 802.11a, 802.11b y 802.11g.";
 choices[32][2] = "Una RSN &quot;Robust Security Network&quot; es una red de seguridad en la que todas las asociaciones entre sus miembros se basan en fuertes mecanismos criptogr&aacute;ficos y de autenticaci&oacute;n.";
 choices[32][3] = "AirMagnet, Airodump, Aireplay, Kismet y Netstumbler, son herramientas inform&aacute;ticas que permiten estudiar redes inal&aacute;mbricas.";
 answers[32] = 1;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7889. Examen TIC A1 2010";
 preguntaids[32] = 7889


//  Id pregunta: 5823 Año de creación de pregunta: 2007
 questions[33]= "34)  En la tecnolog&iacute;a de comunicaciones RDSI, los canales se dividen en";
 choices[33]= new Array();
 choices[33][0] = "A, B y C";
 choices[33][1] = "I, II y III";
 choices[33][2] = "B1, B2 y B3";
 choices[33][3] = "B, D y H";
 answers[33] = 3;
 units[33] = ['108'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5823. Examen 2006 JCYL";
 preguntaids[33] = 5823


//  Id pregunta: 8060 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[34]= new Array();
 choices[34][0] = "Bluetooth";
 choices[34][1] = "PayPal Mobile";
 choices[34][2] = "NFC (Near Field Communication)";
 choices[34][3] = "3D Secure";
 answers[34] = 2;
 units[34] = ['75', '108'];
 blocks[34] = ['B2', 'B4'];
 comments[34] = "Id Pregunta: 8060. ";
 preguntaids[34] = 8060


//  Id pregunta: 7668 Año de creación de pregunta: 2010
 questions[35]= "36)  Con el est&aacute;ndar WLAN 802.11a, &iquest;qu&eacute; velocidad m&aacute;xima se puede alcanzar?";
 choices[35]= new Array();
 choices[35][0] = "11 Mbps en la banda de 2.4 GHz.";
 choices[35][1] = "108 Mbps en la banda de 5 GHz.";
 choices[35][2] = "54 Mbps en la banda de 5 GHz.";
 choices[35][3] = "58 Mbps en la banda de 2.4 GHz.";
 answers[35] = 2;
 units[35] = ['108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7668. Map 2007";
 preguntaids[35] = 7668


//  Id pregunta: 5792 Año de creación de pregunta: 2007
 questions[36]= "37)  &iquest;De qu&eacute; canales y en qu&eacute; numero esta compuesto un enlace primario RDSI si lo contratamos en Europa?:";
 choices[36]= new Array();
 choices[36][0] = "2B+D";
 choices[36][1] = "30B+2D (el D a 64 Kbps)";
 choices[36][2] = "30B+D (el D a 16 Kbps)";
 choices[36][3] = "30B+D (el D a 64 Kbps)";
 answers[36] = 3;
 units[36] = ['108'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5792. ";
 preguntaids[36] = 5792


//  Id pregunta: 5236 Año de creación de pregunta: 2006
 questions[37]= "38)  &iquest;Qu&eacute; modulaci&oacute;n usa el chip para PLC de DS2?";
 choices[37]= new Array();
 choices[37][0] = "GSMK";
 choices[37][1] = "DSSS";
 choices[37][2] = "QPSK";
 choices[37][3] = "OFDM";
 answers[37] = 3;
 units[37] = ['108'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5236. ";
 preguntaids[37] = 5236


//  Id pregunta: 5912 Año de creación de pregunta: 2007
 questions[38]= "39)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y seaplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itineranciade clientes es el:";
 choices[38]= new Array();
 choices[38][0] = "802.11e";
 choices[38][1] = "802.11f";
 choices[38][2] = "802.11h";
 choices[38][3] = "802.11i";
 answers[38] = 1;
 units[38] = ['108'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5912. ";
 preguntaids[38] = 5912


//  Id pregunta: 5583 Año de creación de pregunta: 2007
 questions[39]= "40)  El estandar IEEE 802.12 (100VG AnyLAN):";
 choices[39]= new Array();
 choices[39][0] = "Utiliza un m&eacute;todo de acceso de detecci&oacute;n de colisi&oacute;n.";
 choices[39][1] = "Utiliza un m&eacute;todo de acceso de prioridad de demanda.";
 choices[39][2] = "Utiliza un m&eacute;todo de acceso de impedimento de colisi&oacute;n.";
 choices[39][3] = "Utiliza un m&eacute;todo de acceso de paso de testigo.";
 answers[39] = 1;
 units[39] = ['108'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5583. ";
 preguntaids[39] = 5583


//  Id pregunta: 6348 Año de creación de pregunta: 2003
 questions[40]= "41)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G/2.5G a la generaci&oacute;n 3G ha requerido la realizaci&oacute;n de las inversiones m&aacute;s importantes";
 choices[40]= new Array();
 choices[40][0] = "En el acceso radio";
 choices[40][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[40][2] = "No fue necesario modificar la infraestructura existente.";
 choices[40][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[40] = 0;
 units[40] = ['108'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 6348. ";
 preguntaids[40] = 6348


//  Id pregunta: 7557 Año de creación de pregunta: 2010
 questions[41]= "42)  Indique la tecnolog&iacute;a de transmisi&oacute;n que utiliza el est&aacute;ndar 802.16a del IEEE:";
 choices[41]= new Array();
 choices[41][0] = "DSSS.";
 choices[41][1] = "FHSS.";
 choices[41][2] = "OFDM.";
 choices[41][3] = "DWDM.";
 answers[41] = 2;
 units[41] = ['108'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7557. Map 2005";
 preguntaids[41] = 7557


//  Id pregunta: 7401 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xSDL?";
 choices[42]= new Array();
 choices[42][0] = "HDSL";
 choices[42][1] = "VDSL";
 choices[42][2] = "ADSL";
 choices[42][3] = "EDSL";
 answers[42] = 3;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7401. Examen TIC B 2009";
 preguntaids[42] = 7401


//  Id pregunta: 8081 Año de creación de pregunta: 2011
 questions[43]= "44)  El est&aacute;ndar 802.11b mas conocido como Wifi, trabaja en la banda libre de:";
 choices[43]= new Array();
 choices[43][0] = "2.4 GHz";
 choices[43][1] = "2.4 MHz";
 choices[43][2] = "2.4 THz";
 choices[43][3] = "2 GHz";
 answers[43] = 0;
 units[43] = ['108'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 8081. Analista Ayto. Madrid 2010";
 preguntaids[43] = 8081


//  Id pregunta: 7958 Año de creación de pregunta: 2011
 questions[44]= "45)  Existe una variedad de tecnolog&iacute;as xDSL que se caracterizan por:";
 choices[44]= new Array();
 choices[44][0] = "La infraestructura f&iacute;sica que soporta el servicio: par de cobre, fibra &oacute;ptica u otros medios de transmisi&oacute;n.";
 choices[44][1] = "El n&uacute;mero de canales de alta velocidad disponibles.";
 choices[44][2] = "Por la compatibilidad, o no, con la transmisi&oacute;n de voz, y la calidad de la misma.";
 choices[44][3] = "Su simetr&iacute;a/asimetr&iacute;a en los canales de subida y bajada de datos.";
 answers[44] = 3;
 units[44] = ['108'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 7958. Examen TIC A2 2010";
 preguntaids[44] = 7958


//  Id pregunta: 5353 Año de creación de pregunta: 2006
 questions[45]= "46)  Las comunicaciones satelite son f&aacute;cilmente interceptables porque";
 choices[45]= new Array();
 choices[45][0] = "las transmisiones son continuas 24 horas al d&iacute;a";
 choices[45][1] = "la huella del sat&eacute;lite no cambia";
 choices[45][2] = "la huella del sat&eacute;lite es muy amplia";
 choices[45][3] = "la posici&oacute;n del sat&eacute;lite es conocida";
 answers[45] = 2;
 units[45] = ['108'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5353. ";
 preguntaids[45] = 5353


//  Id pregunta: 7400 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;l es el est&aacute;ndar WIMAX que permite movilidad conocido como: WIMAX m&oacute;vil?";
 choices[46]= new Array();
 choices[46][0] = "802.16d";
 choices[46][1] = "802.16";
 choices[46][2] = "802.16h";
 choices[46][3] = "802.16e";
 answers[46] = 3;
 units[46] = ['108'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7400. Examen TIC B 2009";
 preguntaids[46] = 7400


//  Id pregunta: 6673 Año de creación de pregunta: 2009
 questions[47]= "48)  De entre los est&aacute;ndares siguientes, &iquest;cu&aacute;l se corresponde con la tecnolog&iacute;a WLAN?";
 choices[47]= new Array();
 choices[47][0] = "802.11 del IEEE";
 choices[47][1] = "802.5 del IEEE";
 choices[47][2] = "802.8 del IEEE";
 choices[47][3] = "802.3 del IEEE";
 answers[47] = 0;
 units[47] = ['108'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6673. MAP 2008 A1";
 preguntaids[47] = 6673


//  Id pregunta: 7790 Año de creación de pregunta: 2010
 questions[48]= "49)  Con respecto a los sistemas RFID (Radio Frecuency Identification), indique la respuesta incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Las etiquetas RFID pueden ser activas, semipasivas o pasivas";
 choices[48][1] = "Pueden funcionar en rangos de frecuencia baja (125 KHz), alta (13.56 MHz), ultraelevada (868 MHz) o de microondas (2.45 GHz)";
 choices[48][2] = "Necesitan tener una l&iacute;nea de visi&oacute;n directa para su correcto funcionamiento";
 choices[48][3] = "La tecnolog&iacute;a Near Field Communications (NFC) es un subconjunto de RFID";
 answers[48] = 2;
 units[48] = ['108'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7790. ";
 preguntaids[48] = 7790


//  Id pregunta: 7959 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL?";
 choices[49]= new Array();
 choices[49][0] = "VDSL.";
 choices[49][1] = "DDSL.";
 choices[49][2] = "HDSL.";
 choices[49][3] = "ADSL.";
 answers[49] = 1;
 units[49] = ['108'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 7959. Examen TIC A2 2010";
 preguntaids[49] = 7959


//  Id pregunta: 7576 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and Electronics Engineers) 802.11 es cierta?";
 choices[50]= new Array();
 choices[50][0] = "El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-Sequence Spread Spectrum).";
 choices[50][1] = "El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-Hopping Spread Spectrum).";
 choices[50][2] = "El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal FrequencyDivision Multiplexing).";
 choices[50][3] = "El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing).";
 answers[50] = 0;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7576. Map 2006";
 preguntaids[50] = 7576


//  Id pregunta: 7800 Año de creación de pregunta: 2010
 questions[51]= "52)  &iquest;Cu&aacute;l es la topolog&iacute;a de red implementada en la arquitectura Bluetooth Low Energy (BLE)?";
 choices[51]= new Array();
 choices[51][0] = "Piconet";
 choices[51][1] = "Scatternet";
 choices[51][2] = "Star-Bus";
 choices[51][3] = "Full-Mesh";
 answers[51] = 2;
 units[51] = ['108'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7800. ";
 preguntaids[51] = 7800


//  Id pregunta: 5598 Año de creación de pregunta: 2007
 questions[52]= "53)  En relaci&oacute;n con las diferencias entre Wi-fi y Wi-MAX, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[52]= new Array();
 choices[52][0] = "El control y gesti&oacute;n de errores debe ser m&aacute;s importante en Wimax por ser m&aacute;s sensible el rango de frecuencias en que trabaja.";
 choices[52][1] = "Wimax est&aacute; dise&ntilde;ado para transporte de tr&aacute;fico multimedia mientras que Wi-fi, si bien podr&iacute;a soportarlo, no fue espec&iacute;ficamente dise&ntilde;ado para ello.";
 choices[52][2] = "Las frecuencias disponibles para Wimax est&aacute; en valores del espectro mayores que las disponibles para Wifi.";
 choices[52][3] = "Wimax fue inicialmente dise&ntilde;ado para conexiones inal&aacute;mbricas estacionarios mientras que Wifi est&aacute; dise&ntilde;ado para Ethernet m&oacute;vil.";
 answers[52] = 1;
 units[52] = ['108'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5598. ";
 preguntaids[52] = 5598


//  Id pregunta: 8145 Año de creación de pregunta: 2011
 questions[53]= "54)  En relaci&oacute;n con la tecnolog&iacute;a ADSL, un multiplexor localizado en la central telef&oacute;nica que concentra el tr&aacute;fico de enlaces ADSL de usuario, se denomina:";
 choices[53]= new Array();
 choices[53][0] = "DSLAM";
 choices[53][1] = "DSLM";
 choices[53][2] = "ADSLM";
 choices[53][3] = "ADSLAM";
 answers[53] = 0;
 units[53] = ['108'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8145. Examen TIC A2 2010 interna";
 preguntaids[53] = 8145


//  Id pregunta: 6346 Año de creación de pregunta: 2003
 questions[54]= "55)  En una comparativa de UMTS frente a GSM, no es cierto que:";
 choices[54]= new Array();
 choices[54][0] = "UMTS utiliza frecuencias m&aacute;s elevadas";
 choices[54][1] = "En UMTS se producen menores p&eacute;rdidas de propagaci&oacute;n";
 choices[54][2] = "En UMTS el tama&ntilde;o de las c&eacute;lulas puede ser inferior";
 choices[54][3] = "La capacidad de una portadora de W-CDMA es mayor que la de una portadora GSM";
 answers[54] = 1;
 units[54] = ['108'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 6346. ";
 preguntaids[54] = 6346


//  Id pregunta: 7965 Año de creación de pregunta: 2011
 questions[55]= "56)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[55]= new Array();
 choices[55][0] = "2,4 GHz y hasta 11Mbps.";
 choices[55][1] = "5 GHz y hasta 54Mbps.";
 choices[55][2] = "2,4 GHz y hasta 54 Mbps.";
 choices[55][3] = "5 GHz y hasta 11 Mbps.";
 answers[55] = 1;
 units[55] = ['108'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7965. Examen TIC A2 2010";
 preguntaids[55] = 7965


//  Id pregunta: 5383 Año de creación de pregunta: 2006
 questions[56]= "57)  Estandar que permite redes inal&aacute;mbricas con frecuencias de 2.4 GHz.";
 choices[56]= new Array();
 choices[56][0] = "802.11a";
 choices[56][1] = "802.11b";
 choices[56][2] = "802.11g";
 choices[56][3] = "B y C son correctas";
 answers[56] = 3;
 units[56] = ['108'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5383. ";
 preguntaids[56] = 5383


//  Id pregunta: 6101 Año de creación de pregunta: 2003
 questions[57]= "58)  Bluetooth es un enlace radio de corto alcance sin cables con un radio de:";
 choices[57]= new Array();
 choices[57][0] = "Hasta 5 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[57][1] = "Hasta 10 metros y un rango de frecuencia de 2,202 GHz a 2,404 GHz";
 choices[57][2] = "Hasta 10 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[57][3] = "Hasta 8 metros y un rango de frecuencia de 1,404 GHz a 2,480 GHz";
 answers[57] = 2;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 6101. Examen TIC A1 MAP 2007";
 preguntaids[57] = 6101


//  Id pregunta: 6061 Año de creación de pregunta: 2003
 questions[58]= "59)  Cu&aacute;l de las siguientes tecnolog&iacute;as xDSL proporciona mayor velocidad m&aacute;xima te&oacute;rica para la descarga deinformaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "ADSL2+.";
 choices[58][1] = "VDSL.";
 choices[58][2] = "SDSL.";
 choices[58][3] = "HDSL.";
 answers[58] = 1;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 6061. TIC B 2007";
 preguntaids[58] = 6061


//  Id pregunta: 5599 Año de creación de pregunta: 2007
 questions[59]= "60)  &iquest;Qu&eacute; se entiende por Indoor PLC?:";
 choices[59]= new Array();
 choices[59][0] = "MODEM que recoge la se&ntilde;al de la red el&eacute;ctrica a trav&eacute;s del enchufe.";
 choices[59][1] = "Vertiente de la tecnolog&iacute;a PLC que convierte la l&iacute;nea el&eacute;ctrica en una LAN.";
 choices[59][2] = "Equipo que conecta la red el&eacute;ctrica con la red de comunicaciones.";
 choices[59][3] = "Conjunto formado por el MODEM y el equipo terminal de datos que existen en la vivienda el usuario.";
 answers[59] = 1;
 units[59] = ['108'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5599. ";
 preguntaids[59] = 5599


//  Id pregunta: 5342 Año de creación de pregunta: 2006
 questions[60]= "61)  Especificaci&oacute;n industrial que describe como m&oacute;viles, ordenadores y PDAs pueden interconectarse entre s&iacute; usando una conexi&oacute;n inal&aacute;mbrica de corta distancia";
 choices[60]= new Array();
 choices[60][0] = "Bluetooth";
 choices[60][1] = "EMI";
 choices[60][2] = "Wimax";
 choices[60][3] = "IrDA";
 answers[60] = 0;
 units[60] = ['108'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5342. ";
 preguntaids[60] = 5342


//  Id pregunta: 7387 Año de creación de pregunta: 2010
 questions[61]= "62)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[61]= new Array();
 choices[61][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[61][1] = "Tiempo de vida (8 bits)";
 choices[61][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[61][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[61] = 3;
 units[61] = ['108'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 7387. Examen TIC B 2009";
 preguntaids[61] = 7387


//  Id pregunta: 7764 Año de creación de pregunta: 2010
 questions[62]= "63)  De entre los est&aacute;ndares siguientes, &iquest;cu&aacute;l se corresponde con la tecnolog&iacute;a WLAN?";
 choices[62]= new Array();
 choices[62][0] = "802.11 del IEEE.";
 choices[62][1] = "802.5 del IEEE.";
 choices[62][2] = "802.8 del IEEE.";
 choices[62][3] = "802.3 del IEEE.";
 answers[62] = 0;
 units[62] = ['108'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7764. ";
 preguntaids[62] = 7764


//  Id pregunta: 7698 Año de creación de pregunta: 2010
 questions[63]= "64)  Bluetooth es un enlace radio de corto alcance sin cables con un radio de:";
 choices[63]= new Array();
 choices[63][0] = "Hasta 5 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz.";
 choices[63][1] = "Hasta 10 metros y un rango de frecuencia de 2,202 GHz a 2,404 GHz.";
 choices[63][2] = "Hasta 10 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz.";
 choices[63][3] = "Hasta 8 metros y un rango de frecuencia de 1,404 GHz a 2,480 GHz.";
 answers[63] = 2;
 units[63] = ['108'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 7698. Map 2007";
 preguntaids[63] = 7698


//  Id pregunta: 5237 Año de creación de pregunta: 2006
 questions[64]= "65)  &iquest;En qu&eacute; banda de frecuencias funciona Bluetooth?";
 choices[64]= new Array();
 choices[64][0] = "3,5 GHz";
 choices[64][1] = "5 GHz";
 choices[64][2] = "1,8 GHz";
 choices[64][3] = "2,45 GHz";
 answers[64] = 3;
 units[64] = ['108'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5237. ";
 preguntaids[64] = 5237


//  Id pregunta: 6062 Año de creación de pregunta: 2003
 questions[65]= "66)  En ADSL, las velocidades de datos dependen de diversos factores. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[65]= new Array();
 choices[65][0] = "Longitud de la l&iacute;nea de cobre.";
 choices[65][1] = "La presencia de derivaciones puenteadas.";
 choices[65][2] = "La informaci&oacute;n de se&ntilde;alizaci&oacute;n que se debe transmitir simult&aacute;neamente.";
 choices[65][3] = "La interferencia de acoplamientos cruzados.";
 answers[65] = 2;
 units[65] = ['108'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 6062. TIC B 2007";
 preguntaids[65] = 6062


//  Id pregunta: 8098 Año de creación de pregunta: 2011
 questions[66]= "67)  La norma DECT (Digital Enhanced Cordless Telecomunications) contempla el modode acceso:";
 choices[66]= new Array();
 choices[66][0] = "TDMA/ TDD";
 choices[66][1] = "GFSK";
 choices[66][2] = "FSK";
 choices[66][3] = "CDMA";
 answers[66] = 0;
 units[66] = ['108'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 8098. Analista Ayto. Madrid 2010";
 preguntaids[66] = 8098


//  Id pregunta: 5697 Año de creación de pregunta: 2007
 questions[67]= "68)  &iquest;En que est&aacute;ndar se basa la tecnolog&iacute;a WIMAX?";
 choices[67]= new Array();
 choices[67][0] = "IEEE802.16";
 choices[67][1] = "IEEE802.11";
 choices[67][2] = "IEEE802.3";
 choices[67][3] = "IEEE802.2";
 answers[67] = 0;
 units[67] = ['108'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5697. ";
 preguntaids[67] = 5697


//  Id pregunta: 6882 Año de creación de pregunta: 2010
 questions[68]= "69)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[68]= new Array();
 choices[68][0] = "Activas.";
 choices[68][1] = "Pasivas.";
 choices[68][2] = "Hiperactivas.";
 choices[68][3] = "Semipasivas.";
 answers[68] = 2;
 units[68] = ['108'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6882. TIC A 2009";
 preguntaids[68] = 6882


//  Id pregunta: 7883 Año de creación de pregunta: 2011
 questions[69]= "70)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[69]= new Array();
 choices[69][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[69][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[69][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[69][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[69] = 1;
 units[69] = ['108'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7883. Examen TIC A1 2010";
 preguntaids[69] = 7883


//  Id pregunta: 6475 Año de creación de pregunta: 2003
 questions[70]= "71)  En el marco de la liberalizaci&oacute;n de las telecomunicaciones, &iquest;Cu&aacute;les de las siguientes acciones NO se pretende fomentar mediante la desagregaci&oacute;n del bucle de abonado?";
 choices[70]= new Array();
 choices[70][0] = "Incrementar el n&uacute;mero de abonados";
 choices[70][1] = "Incrementar la penetraci&oacute;n de servicios de banda ancha";
 choices[70][2] = "Reducir el precio de los servicios avanzados de telecomunicaciones";
 choices[70][3] = "Favorecer la competencia enlas redes de acceso";
 answers[70] = 0;
 units[70] = ['108'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 6475. ";
 preguntaids[70] = 6475


//  Id pregunta: 5385 Año de creación de pregunta: 2006
 questions[71]= "72)  ADSL2+";
 choices[71]= new Array();
 choices[71][0] = "Soporta una distancia m&aacute;xima de 3,6Km. mayor que VDSL";
 choices[71][1] = "Utiliza frecuencias hasta 2.2 MHz.";
 choices[71][2] = "A la m&aacute;xima distancia tiene un ancho de bajada m&aacute;ximo de 4Mbps";
 choices[71][3] = "Todas las anteriores son correctas";
 answers[71] = 3;
 units[71] = ['108'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5385. ";
 preguntaids[71] = 5385


//  Id pregunta: 5379 Año de creación de pregunta: 2006
 questions[72]= "73)  El estandar 802.11e se centra en";
 choices[72]= new Array();
 choices[72][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[72][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[72][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[72][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[72] = 0;
 units[72] = ['108'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5379. ";
 preguntaids[72] = 5379


//  Id pregunta: 8144 Año de creación de pregunta: 2011
 questions[73]= "74)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[73]= new Array();
 choices[73][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[73][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[73][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[73][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[73] = 0;
 units[73] = ['108'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 8144. Examen TIC A2 2010 interna";
 preguntaids[73] = 8144


//  Id pregunta: 5822 Año de creación de pregunta: 2007
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes protocolos hace referencia a redes inal&aacute;mbricas?";
 choices[74]= new Array();
 choices[74][0] = "802.1";
 choices[74][1] = "802.3";
 choices[74][2] = "802.11b";
 choices[74][3] = "802.3u";
 answers[74] = 2;
 units[74] = ['108'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5822. Examen 2006 JCYL";
 preguntaids[74] = 5822


