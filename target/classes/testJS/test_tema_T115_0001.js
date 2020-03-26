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
//  Id pregunta: 5218 Año de creación de pregunta: 2006
 questions[0]= "1)  &iquest;C&oacute;mo se denomina a la configuraci&oacute;n de una red de cable en la que la fibra llega hasta los derivadores (&quot;taps&quot;)?";
 choices[0]= new Array();
 choices[0][0] = "Fiber to the bridger";
 choices[0][1] = "Fiber to the curb";
 choices[0][2] = "Fiber to the home";
 choices[0][3] = "Fiber to the last amplifier";
 answers[0] = 1;
 units[0] = ['115'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5218. ";
 preguntaids[0] = 5218


//  Id pregunta: 7538 Año de creación de pregunta: 2010
 questions[1]= "2)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[1]= new Array();
 choices[1][0] = "De 50 a 550 MHz.";
 choices[1][1] = "De 5 a 50 MHz.";
 choices[1][2] = "De 550 a 860 MHz.";
 choices[1][3] = "De 5 a 860 MHz.";
 answers[1] = 1;
 units[1] = ['115'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7538. Map 2005";
 preguntaids[1] = 7538


//  Id pregunta: 8153 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;En qu&eacute; a&ntilde;o ha concluido el apag&oacute;n anal&oacute;gico en Espa&ntilde;a?";
 choices[2]= new Array();
 choices[2][0] = "2007";
 choices[2][1] = "2008";
 choices[2][2] = "2009";
 choices[2][3] = "2010";
 answers[2] = 3;
 units[2] = ['115'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8153. Examen TIC A2 2010 interna";
 preguntaids[2] = 8153


//  Id pregunta: 1654 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; tipo de modulaci&oacute;n se utiliza en el est&aacute;ndar TDT (Televisi&oacute;n Digital Terrestre) utilizado en Espa&ntilde;a?";
 choices[3]= new Array();
 choices[3][0] = "QPSK";
 choices[3][1] = "QAM";
 choices[3][2] = "COFDM";
 choices[3][3] = "G.711";
 answers[3] = 2;
 units[3] = ['115'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 1654. ";
 preguntaids[3] = 1654


//  Id pregunta: 9328 Año de creación de pregunta: 2014
 questions[4]= "5)  EuroDOCSIS";
 choices[4]= new Array();
 choices[4][0] = "Significa, en el &aacute;mbito de la Uni&oacute;n Europea, DOCument System Interface Service, y hace referencia a un est&aacute;ndar de gesti&oacute;n documental.";
 choices[4][1] = "es una extensi&oacute;n de DOCSIS especificada por ETSI para el &aacute;mbito Europeo.";
 choices[4][2] = "significa, en el &aacute;mbito de la zona Euro, Digital Open Currency System Interface Standard.";
 choices[4][3] = "es un est&aacute;ndar propietario de gesti&oacute;n documental de amplia implantaci&oacute;n enEuropa.";
 answers[4] = 1;
 units[4] = ['115'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9328. ";
 preguntaids[4] = 9328


//  Id pregunta: 7395 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Qu&eacute; dato es INCORRECTO relativo al dividendo digital espa&ntilde;ol?";
 choices[5]= new Array();
 choices[5][0] = "Consiste en las bandas de frecuencias que han sido empleadas para la difusi&oacute;n de la TDT";
 choices[5][1] = "Ocupa la banda de frecuencias de 790 a 862 MHz";
 choices[5][2] = "Se refiere a las frecuencias usadas para la difusi&oacute;n en anal&oacute;gico";
 choices[5][3] = "En el futuro, ser&aacute; utilizado para servicios diferentes al de la televisi&oacute;n";
 answers[5] = 2;
 units[5] = ['115'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7395. Examen TIC B 2009";
 preguntaids[5] = 7395


//  Id pregunta: 6496 Año de creación de pregunta: 2003
 questions[6]= "7)  En una red de CATV &iquest;cu&aacute;l es el rango de frecuencias que se utiliza en sentido ascendente para el envio de informaci&oacute;n de usuario a cabecera?";
 choices[6]= new Array();
 choices[6][0] = "De 55 a 150";
 choices[6][1] = "De 550 a 860";
 choices[6][2] = "De 50 a 550";
 choices[6][3] = "De 5 a 50";
 answers[6] = 3;
 units[6] = ['115'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 6496. ";
 preguntaids[6] = 6496


//  Id pregunta: 6707 Año de creación de pregunta: 2009
 questions[7]= "8)  En referencia al direccionamiento IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes no se corresponde con un tipo de direcciones en IPv6:";
 choices[7]= new Array();
 choices[7][0] = "Unicast";
 choices[7][1] = "Multicast";
 choices[7][2] = "Anycast";
 choices[7][3] = "Broadcast";
 answers[7] = 3;
 units[7] = ['115'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 6707. MAP 2008 A1";
 preguntaids[7] = 6707


//  Id pregunta: 9449 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;Qu&eacute; es el dividendo digital?";
 choices[8]= new Array();
 choices[8][0] = "Una parte del espectro radioel&eacute;ctrico que usaba la TDT ha quedado liberada para otros servicios de comunicaciones";
 choices[8][1] = "Una parte del espectro digital.";
 choices[8][2] = "Una compresi&oacute;n del espectro debido a la utilizaci&oacute;n de se&ntilde;ales digitales.";
 choices[8][3] = "Una reasignaci&oacute;n de frecuencias dentro de la banda que utiliza la TDT.";
 answers[8] = 0;
 units[8] = ['115'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 9449. Examen TIC A1 2011";
 preguntaids[8] = 9449


//  Id pregunta: 8154 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Cu&aacute;l es el est&aacute;ndar europeo de TDT?";
 choices[9]= new Array();
 choices[9][0] = "ISDB.";
 choices[9][1] = "MPEG-2";
 choices[9][2] = "DVB-T";
 choices[9][3] = "EDTV";
 answers[9] = 2;
 units[9] = ['115'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8154. Examen TIC A2 2010 interna";
 preguntaids[9] = 8154


//  Id pregunta: 4906 Año de creación de pregunta: 2002
 questions[10]= "11)  La pen&iacute;nsula ib&eacute;rica est&aacute; telem&aacute;ticamente unida a las islas Canarias:";
 choices[10]= new Array();
 choices[10][0] = "&uacute;nicamente mediante enlace por sat&eacute;lite";
 choices[10][1] = "&uacute;nicamente mediante enlace por cable submarino";
 choices[10][2] = "mediante cable submarino como enlace principal y por sat&eacute;lite como enlace de reserva";
 choices[10][3] = "mediante enlace por sat&eacute;lite como enlace principal y por cable submarino como enlace de reserva";
 answers[10] = 2;
 units[10] = ['115'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4906. ";
 preguntaids[10] = 4906


//  Id pregunta: 1772 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale cu&aacute;l es el sistema de compresi&oacute;n de se&ntilde;al utilizado para la distribuci&oacute;n de televisi&oacute;n digital terrestre (TDT):";
 choices[11]= new Array();
 choices[11][0] = "MPEG-3 y MPEG-4 combinados, en funci&oacute;n del formato de se&ntilde;al utilizado: 4:3 &oacute; 16:9";
 choices[11][1] = "MPEG-4";
 choices[11][2] = "MPEG-2";
 choices[11][3] = "MPEG-3";
 answers[11] = 2;
 units[11] = ['115'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 1772. ";
 preguntaids[11] = 1772


//  Id pregunta: 4532 Año de creación de pregunta: 2002
 questions[12]= "13)  DVB/DAVIC y DOCSIS son est&aacute;ndares de:";
 choices[12]= new Array();
 choices[12][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[12][1] = "m&oacute;dems de cable";
 choices[12][2] = "tecnolog&iacute;a xDSL";
 choices[12][3] = "grabaci&oacute;n cd CDROMs";
 answers[12] = 1;
 units[12] = ['115'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4532. ";
 preguntaids[12] = 4532


//  Id pregunta: 4805 Año de creación de pregunta: 2002
 questions[13]= "14)  En Espa&ntilde;a la televisi&oacute;n por cable:";
 choices[13]= new Array();
 choices[13][0] = "Est&aacute; teniendo una implantaci&oacute;n similar a la existente en Alemania";
 choices[13][1] = "Carece de tecnolog&iacute;a suficiente para poder implantarse";
 choices[13][2] = "Se presta generalmente con redes h&iacute;bridasjunto a telefon&iacute;a y datos";
 choices[13][3] = "Todo lo anterior es correcto";
 answers[13] = 2;
 units[13] = ['115'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4805. ";
 preguntaids[13] = 4805


//  Id pregunta: 6230 Año de creación de pregunta: 2003
 questions[14]= "15)  La Tecnolog&iacute;a empleada por la Televisi&oacute;n Digital Terrestre (TDT) permite que el despliegue de las redes de radiodifusi&oacute;n se efect&uacute;e:";
 choices[14]= new Array();
 choices[14][0] = "En redes de Frecuencia &Uacute;nica (SFN) y en redes Multifrecuencia (MFN).";
 choices[14][1] = "&Uacute;nicamente en redes de Frecuencia &Uacute;nica (SFN).";
 choices[14][2] = "&Uacute;nicamente en redes Multifrecuencia (MFN).";
 choices[14][3] = "En redes de Frecuencia (SFN) sin necesidad de sincronizar los transmisores radio.";
 answers[14] = 0;
 units[14] = ['115'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6230. Examen TIC A Castilla La Mancha 2007";
 preguntaids[14] = 6230


//  Id pregunta: 1412 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[15]= new Array();
 choices[15][0] = "ATSC";
 choices[15][1] = "ISDB-T";
 choices[15][2] = "DVB-T";
 choices[15][3] = "EDTVB";
 answers[15] = 2;
 units[15] = ['115'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 1412. ";
 preguntaids[15] = 1412


//  Id pregunta: 8155 Año de creación de pregunta: 2011
 questions[16]= "17)  &iquest;Qu&eacute; codec de v&iacute;deo se utiliza en la TDT para los canales en alta definici&oacute;n (HD)?";
 choices[16]= new Array();
 choices[16][0] = "Huffyuv.";
 choices[16][1] = "MPEG-4";
 choices[16][2] = "MPEG-2";
 choices[16][3] = "Sorenson.";
 answers[16] = 1;
 units[16] = ['115'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8155. Examen TIC A2 2010 interna";
 preguntaids[16] = 8155


//  Id pregunta: 6846 Año de creación de pregunta: 2010
 questions[17]= "18)  En relaci&oacute;n con la TDT (Televisi&oacute;n Digital Terrestre), &iquest;como se denominan a las especificaciones t&eacute;cnicas aprobadas a nivel europeo para la emisi&oacute;n de TDT?";
 choices[17]= new Array();
 choices[17][0] = "TDT est&aacute;ndar";
 choices[17][1] = "DVB &ndash; T";
 choices[17][2] = "DVB - TDT";
 choices[17][3] = "Ninguna de las anteriores es correcta";
 answers[17] = 1;
 units[17] = ['115'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 6846. ";
 preguntaids[17] = 6846


//  Id pregunta: 4321 Año de creación de pregunta: 2004
 questions[18]= "19)  &iquest;Qu&eacute; organismo trabaj&oacute; en la estandarizaci&oacute;n de las redes de cable?";
 choices[18]= new Array();
 choices[18][0] = "El IEEE 802.11";
 choices[18][1] = "El IEEE 802.14";
 choices[18][2] = "El ATU-C";
 choices[18][3] = "El UIT-T E.164";
 answers[18] = 1;
 units[18] = ['115'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4321. Examen TIC MAP B 2004";
 preguntaids[18] = 4321


//  Id pregunta: 4629 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; se entiende por 'modem de cable'?:";
 choices[19]= new Array();
 choices[19][0] = "A un cable inversor utilizado para la conexi&oacute;n entre dos dispositivos por el puerto serie";
 choices[19][1] = "A un cable utilizado para unir dos PCs por el puerto paralelo";
 choices[19][2] = "A un dispositivo que permite la transmisi&oacute;n de datos a alta velocidad a trav&eacute;s de una red de cable";
 choices[19][3] = "A un modem que no necesita fuente de alimentaci&oacute;n y que es del tama&ntilde;o de una 'caja de cerillas' que pr&aacute;cticamente que embutido en un cable";
 answers[19] = 2;
 units[19] = ['115'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4629. ";
 preguntaids[19] = 4629


//  Id pregunta: 5698 Año de creación de pregunta: 2007
 questions[20]= "21)  El sistema de radiodifusi&oacute;n digital de audio (DAB) emplea bloques de frecuencia cuyo ancho de banda es de:";
 choices[20]= new Array();
 choices[20][0] = "200 KHz.";
 choices[20][1] = "1,536 MHz.";
 choices[20][2] = "8 MHz.";
 choices[20][3] = "4,567 MHz";
 answers[20] = 1;
 units[20] = ['115'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5698. ";
 preguntaids[20] = 5698


//  Id pregunta: 6847 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Qui&eacute;n es el responsable del est&aacute;ndar DVB-T para la emisi&oacute;n de TDT?";
 choices[21]= new Array();
 choices[21][0] = "CEN/CENELEC";
 choices[21][1] = "ETSI";
 choices[21][2] = "UIT-T";
 choices[21][3] = "IEEE";
 answers[21] = 1;
 units[21] = ['115'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 6847. ";
 preguntaids[21] = 6847


//  Id pregunta: 6344 Año de creación de pregunta: 2003
 questions[22]= "23)  Indique cu&aacute;l de las siguientes opciones no se corresponde al modelo .NET de desarrollo:";
 choices[22]= new Array();
 choices[22][0] = "Interface Definition Language";
 choices[22][1] = "Common Type System";
 choices[22][2] = "Base Class Library";
 choices[22][3] = "Common Language Runtime";
 answers[22] = 0;
 units[22] = ['115'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6344. ";
 preguntaids[22] = 6344


//  Id pregunta: 1527 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;En cu&aacute;l de los siguientes pa&iacute;ses se usa el mismo sistema de Televisi&oacute;n Digital Terrestre que usamos en Europa?";
 choices[23]= new Array();
 choices[23][0] = "Australia.";
 choices[23][1] = "EEUU.";
 choices[23][2] = "Chile.";
 choices[23][3] = "Jap&oacute;n.";
 answers[23] = 0;
 units[23] = ['115'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1527. ";
 preguntaids[23] = 1527


//  Id pregunta: 1531 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n el Reglamento T&eacute;cnico y de Prestaci&oacute;n del Servicio de Telecomunicaciones por Cable (RD 2066/96), &iquest;qu&eacute; se entiende por servicio de v&iacute;deo bajo demanda?";
 choices[24]= new Array();
 choices[24][0] = "Consiste en la difusi&oacute;n mediante redes de cable de im&aacute;genes no permanentes con su sonido asociado, transmitidas en un solo sentido, codificadas o no, que constituyen una programaci&oacute;n prefijada dirigida de forma simult&aacute;nea a una multiplicidad de usuarios sin posibilidad de interactuar sobre el servicio.";
 choices[24][1] = "Consiste en la distribuci&oacute;n de un programa audiovisual en el que el usuario final interact&uacute;a con la red para seleccionar el programa deseado y el momento del suministro.";
 choices[24][2] = "Consiste en la difusi&oacute;n de programas audiovisuales en el que el usuario final interact&uacute;a con la red para acceder al programa deseado, que le es suministrado en un momento prefijado por la red.";
 choices[24][3] = "Servicio de valor a&ntilde;adido de telecomunicaciones por cable consistente en la distribuci&oacute;n o intercambio de informaci&oacute;n bajo la forma de im&aacute;genes, sonidos, textos, gr&aacute;ficos o combinaci&oacute;n de ellos que requieren de un canal de retorno para su prestaci&oacute;n.";
 answers[24] = 1;
 units[24] = ['115'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1531. ";
 preguntaids[24] = 1531


//  Id pregunta: 9444 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;El reglamento de Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) se encuentra recogido en?:";
 choices[25]= new Array();
 choices[25][0] = "El Real Decreto 920 / 2006";
 choices[25][1] = "El Real Decreto 346 / 2011";
 choices[25][2] = "El Real Decreto 401 / 2003";
 choices[25][3] = "Ninguno de los anteriores";
 answers[25] = 1;
 units[25] = ['115'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9444. Real Decreto 920/2006, de 28 de julio, por el que se aprueba el Reglamento general de prestaci&oacute;n del servicio de difusi&oacute;n de radio y televisi&oacute;n por cable; Real Decreto 401/2003: ICTs. Est&aacute; derogado;";
 preguntaids[25] = 9444


//  Id pregunta: 1528 Año de creación de pregunta: 2016
 questions[26]= "27)  El est&aacute;ndar DVB-T usado para la transmisi&oacute;n de televisi&oacute;n digital terrestre usa la t&eacute;cnica de modulaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "COFDM";
 choices[26][1] = "QAM";
 choices[26][2] = "QFSK";
 choices[26][3] = "VSB";
 answers[26] = 0;
 units[26] = ['115'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1528. ";
 preguntaids[26] = 1528


//  Id pregunta: 5796 Año de creación de pregunta: 2007
 questions[27]= "28)  Cual de las siguientes no es una caracter&iacute;stica de DAB:";
 choices[27]= new Array();
 choices[27][0] = "utiliza m&uacute;ltiples portadoras en el mismo canal.";
 choices[27][1] = "permite emitir en redes de frecuencia &uacute;nica";
 choices[27][2] = "ofrece un canal radio de retorno";
 choices[27][3] = "ofrecer servicios de datos";
 answers[27] = 2;
 units[27] = ['115'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5796. ";
 preguntaids[27] = 5796


//  Id pregunta: 5516 Año de creación de pregunta: 2007
 questions[28]= "29)  El dispositivo necesario para tener acceso a Internet a trav&eacute;s de la red de cable-TV que ofrecen distintos operadores, se llama:";
 choices[28]= new Array();
 choices[28][0] = "CODEC.";
 choices[28][1] = "Router.";
 choices[28][2] = "MODEM cable.";
 choices[28][3] = "Splitter.";
 answers[28] = 2;
 units[28] = ['115'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5516. ";
 preguntaids[28] = 5516


//  Id pregunta: 9446 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;Qu&eacute; novedad introduce el est&aacute;ndar DOCSIS 3.1?";
 choices[29]= new Array();
 choices[29][0] = "No existe dicho est&aacute;ndar";
 choices[29][1] = "Puede soportar hasta 10 Gbit/s de bajada";
 choices[29][2] = "Permite el uso de tecnolog&iacute;as S-CDMA";
 choices[29][3] = "Permite el ajuste de diferentes niveles de calidad de servicio, seg&uacute;n el servicio empleado";
 answers[29] = 1;
 units[29] = ['115'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9446. ";
 preguntaids[29] = 9446


//  Id pregunta: 6343 Año de creación de pregunta: 2003
 questions[30]= "31)  Indique cu&aacute;l de los siguientes no es un objeto integrado de ASP:";
 choices[30]= new Array();
 choices[30][0] = "Client";
 choices[30][1] = "Application";
 choices[30][2] = "Server";
 choices[30][3] = "Request";
 answers[30] = 0;
 units[30] = ['115'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6343. ";
 preguntaids[30] = 6343


//  Id pregunta: 5217 Año de creación de pregunta: 2006
 questions[31]= "32)  &iquest;Cu&aacute;l fue el servicio para el que originalmente fueron dise&ntilde;adas las redes de cable?";
 choices[31]= new Array();
 choices[31][0] = "Televisi&oacute;n";
 choices[31][1] = "Telefon&iacute;a";
 choices[31][2] = "Transporte de datos";
 choices[31][3] = "Conexi&oacute;n a Internet";
 answers[31] = 0;
 units[31] = ['115'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5217. ";
 preguntaids[31] = 5217


//  Id pregunta: 1653 Año de creación de pregunta: 2016
 questions[32]= "33)  El est&aacute;ndar utilizado en Espa&ntilde;a para la transmisi&oacute;n de TDT (Televisi&oacute;n Digital Terrestre) es:";
 choices[32]= new Array();
 choices[32][0] = "DVB-T";
 choices[32][1] = "DVB-S";
 choices[32][2] = "COFDM";
 choices[32][3] = "HDTV";
 answers[32] = 0;
 units[32] = ['115'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1653. ";
 preguntaids[32] = 1653


//  Id pregunta: 6498 Año de creación de pregunta: 2003
 questions[33]= "34)  &iquest;Qu&eacute; niveles implementa el m&oacute;dem de cable?";
 choices[33]= new Array();
 choices[33][0] = "El nivel f&iacute;sico, de control de acceso al medio e IP";
 choices[33][1] = "El nivel f&iacute;sico, enlace, de red y de transporte";
 choices[33][2] = "El nivel f&iacute;sico y de control de acceso al medio";
 choices[33][3] = "Depende, a partir de DOCSIS 2.0 se implementan el nivel f&iacute;sico y de control de acceso al medio e IP";
 answers[33] = 2;
 units[33] = ['115'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 6498. ";
 preguntaids[33] = 6498


//  Id pregunta: 10755 Año de creación de pregunta: 2015
 questions[34]= "35)  Seg&uacute;n el plan de frecuencias de las redes HFC, la banda de guarda se encuentra en el rango de:";
 choices[34]= new Array();
 choices[34][0] = "5 a 55 Mhz";
 choices[34][1] = "86 a 108 Mhz";
 choices[34][2] = "606 a 862 Mhz";
 choices[34][3] = "55 a 86 Mhz";
 answers[34] = 3;
 units[34] = ['115'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10755. ";
 preguntaids[34] = 10755


//  Id pregunta: 9447 Año de creación de pregunta: 2010
 questions[35]= "36)  El TS (Transport Stream) en MPEG-2:";
 choices[35]= new Array();
 choices[35][0] = "Su carga &uacute;til est&aacute; formada por paquetes de trenes elementales (Packetized elementary Streams, PES)";
 choices[35][1] = "Su tama&ntilde;o es de 188 bytes";
 choices[35][2] = "Su cabecera es de 4 bytes";
 choices[35][3] = "Todas las anteriores son ciertas";
 answers[35] = 3;
 units[35] = ['115'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 9447. ";
 preguntaids[35] = 9447


//  Id pregunta: 7199 Año de creación de pregunta: 2010
 questions[36]= "37)  Respecto a las mejoras de la TDT (DVB-T), sobre la televisi&oacute;n anal&oacute;gica, se&ntilde;ale la afirmaci&oacute;n INCORRECTA";
 choices[36]= new Array();
 choices[36][0] = "TDT permite un mayor aprovechamiento del espectro";
 choices[36][1] = "TDT permite mayor calidad de imagen";
 choices[36][2] = "TDT permite interactividad";
 choices[36][3] = "TDT permite la visualizaci&oacute;n degradada ante un nivel de se&ntilde;al d&eacute;bil";
 answers[36] = 3;
 units[36] = ['115'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7199. Castilla La Mancha 2009";
 preguntaids[36] = 7199


//  Id pregunta: 906 Año de creación de pregunta: 2016
 questions[37]= "38)  El est&aacute;ndar utilizado para la transmisi&oacute;n de la se&ntilde;al de televisi&oacute;n en la red de televisi&oacute;n digital terrestre es:";
 choices[37]= new Array();
 choices[37][0] = "PAL B/G";
 choices[37][1] = "DVB-T";
 choices[37][2] = "DVB-C";
 choices[37][3] = "DOCSIS 3.0";
 answers[37] = 1;
 units[37] = ['115'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 906. AGE A2 2015";
 preguntaids[37] = 906


//  Id pregunta: 6497 Año de creación de pregunta: 2003
 questions[38]= "39)  Los sistemas en el segunado nivel troncal trabajan en";
 choices[38]= new Array();
 choices[38][0] = "La segunda ventana &oacute;ptica (1330nm). Es en estos nodos donde se realiza la inserci&oacute;n de programaci&oacute;n local resultando m&aacute;s econ&oacute;mico que se lleve a cabo a nivel el&eacute;ctrico.";
 choices[38][1] = "La tercera ventana &oacute;ptica (1550nm) con la ventaja de tener un mayor alcance.";
 choices[38][2] = "La segunda ventana &oacute;ptica (1330nm), ya que en dicha ventana existen amplificadores &oacute;pticos comerciales de alto rendimiento";
 choices[38][3] = "La tercera ventana &oacute;ptica (1550nm) siendo necesario hacer una doble conversi&oacute;n (opto-el&eacute;ctrica y electro-&oacute;ptica)";
 answers[38] = 0;
 units[38] = ['115'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 6497. ";
 preguntaids[38] = 6497


//  Id pregunta: 5221 Año de creación de pregunta: 2006
 questions[39]= "40)  &iquest;Cu&aacute;l es el significado del acr&oacute;nimo DOCSIS?";
 choices[39]= new Array();
 choices[39][0] = "Data Over Coaxial Service Interface Specification";
 choices[39][1] = "Data Over Cable Service Internet Specification";
 choices[39][2] = "Data Over Coaxial Service Internet Specification";
 choices[39][3] = "Data Over Cable Service Interface Specification";
 answers[39] = 3;
 units[39] = ['115'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5221. ";
 preguntaids[39] = 5221


//  Id pregunta: 9445 Año de creación de pregunta: 2010
 questions[40]= "41)  Conforme a DOCSIS y EuroDOCSIS los canales de cable tienen un ancho de:";
 choices[40]= new Array();
 choices[40][0] = "8 MHz en Europa";
 choices[40][1] = "6 MHz en Norte Am&eacute;rica";
 choices[40][2] = "Las dos anteriores son ciertas";
 choices[40][3] = "Ninguno de los anteriores";
 answers[40] = 2;
 units[40] = ['115'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9445. ";
 preguntaids[40] = 9445


//  Id pregunta: 7396 Año de creación de pregunta: 2010
 questions[41]= "42)  El dispositivo necesario para modular la se&ntilde;al de acceso a las redes de cable TV se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Cablemodem";
 choices[41][1] = "HBA (Host Bus Adapter)";
 choices[41][2] = "Splitter";
 choices[41][3] = "HDMI (High-Definition Multi-media interface)";
 answers[41] = 0;
 units[41] = ['115'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7396. Examen TIC B 2009";
 preguntaids[41] = 7396


//  Id pregunta: 5659 Año de creación de pregunta: 2007
 questions[42]= "43)  El est&aacute;ndar europeo de Televisi&oacute;n Digital Terrestre definido por ETSI (EN 300 744) especifica la difusi&oacute;n terrestre de se&ntilde;ales de TV codificadas en:";
 choices[42]= new Array();
 choices[42][0] = "MPEG-3.";
 choices[42][1] = "MPEG-2.";
 choices[42][2] = "MPEG-4.";
 choices[42][3] = "MPEG-1.";
 answers[42] = 1;
 units[42] = ['115'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5659. ";
 preguntaids[42] = 5659


//  Id pregunta: 9400 Año de creación de pregunta: 2014
 questions[43]= "44)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[43]= new Array();
 choices[43][0] = "100 a 224 MHz";
 choices[43][1] = "225 a 356 MHz";
 choices[43][2] = "470 a 862 MHz";
 choices[43][3] = "470 a 758 MHz";
 answers[43] = 3;
 units[43] = ['115'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 9400. Examen TIC A2  2013";
 preguntaids[43] = 9400


//  Id pregunta: 5219 Año de creación de pregunta: 2006
 questions[44]= "45)  En el caso de que una red de cable proporcione servicios de datos, &iquest;c&oacute;mo se denomina al equipo situado en la cabecera de la red que env&iacute;a y recibe los flujos de datos?";
 choices[44]= new Array();
 choices[44][0] = "Router";
 choices[44][1] = "Switch";
 choices[44][2] = "Gateway";
 choices[44][3] = "CMTS";
 answers[44] = 3;
 units[44] = ['115'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5219. ";
 preguntaids[44] = 5219


//  Id pregunta: 7970 Año de creación de pregunta: 2011
 questions[45]= "46)  La normativa que establece las condiciones t&eacute;cnicas para la emisi&oacute;n del servido de televisi&oacute;n digital terrestre (TDT) en alta definici&oacute;n, es:";
 choices[45]= new Array();
 choices[45][0] = "Ley 7/2010.";
 choices[45][1] = "Real Decreto 691/2010.";
 choices[45][2] = "Directiva 98/48/CE.";
 choices[45][3] = "Real Decreto 944/2005.";
 answers[45] = 1;
 units[45] = ['115', '121'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 7970. Examen TIC A2 2010";
 preguntaids[45] = 7970


//  Id pregunta: 9401 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[46]= new Array();
 choices[46][0] = "ATSC";
 choices[46][1] = "ISDB-T";
 choices[46][2] = "DVB-T";
 choices[46][3] = "EDTVB";
 answers[46] = 2;
 units[46] = ['115'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9401. Examen TIC A2  2013";
 preguntaids[46] = 9401


//  Id pregunta: 5214 Año de creación de pregunta: 2006
 questions[47]= "48)  En las redes HFC (Hybrid Fiber Coaxial), la transmisi&oacute;n de informaci&oacute;n desde el usuario hacia la cabecera se realiza dedicando una parte del espectro, en concreto utilizando el rango de frecuencias comprendido entre:";
 choices[47]= new Array();
 choices[47][0] = "50-100 Mhz (aproximadamente)";
 choices[47][1] = "200-300 Mhz (aproximadamente)";
 choices[47][2] = "5-50 Mhz (aproximadamente)";
 choices[47][3] = "100-200 Mhz (aproximadamente)";
 answers[47] = 2;
 units[47] = ['115'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5214. ";
 preguntaids[47] = 5214


//  Id pregunta: 5215 Año de creación de pregunta: 2006
 questions[48]= "49)  Con respecto al est&aacute;ndar DOCSIS 1.1 (Data over Cable Service Interface Specification), se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[48]= new Array();
 choices[48][0] = "Especifica mecanismos para garantizar la QoS de flujo de datos en tiempo real como la voz.";
 choices[48][1] = "La voz y los datos viajan por canales diferentes, pero permitiendo un tratamiento uniforme en la red HFC.";
 choices[48][2] = "En la versi&oacute;n europea de DOCSIS 1.1 se establece un m&aacute;ximo de 160 km entre el CMTS (Cable Modem Termination System).";
 choices[48][3] = "En DOCSIS 1.1 est&aacute; prevista la definici&oacute;n para el soporte de ATM.";
 answers[48] = 1;
 units[48] = ['115'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5215. ";
 preguntaids[48] = 5215


//  Id pregunta: 1647 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes es un est&aacute;ndar de transmisi&oacute;n de datos sobre sistemas de televisi&oacute;n por cable (CATV)?";
 choices[49]= new Array();
 choices[49][0] = "Data Over Cable Service Interface Specifications (DOCSIS)";
 choices[49][1] = "National Television System Committee (NTSC)";
 choices[49][2] = "ATP";
 choices[49][3] = "Xtream";
 answers[49] = 0;
 units[49] = ['115'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 1647. ";
 preguntaids[49] = 1647


//  Id pregunta: 9448 Año de creación de pregunta: 2010
 questions[50]= "51)  La TDT utiliza como t&eacute;cnica de modulaci&oacute;n de nivel f&iacute;sico";
 choices[50]= new Array();
 choices[50][0] = "CDMA";
 choices[50][1] = "COFDM";
 choices[50][2] = "64-QAM";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = 1;
 units[50] = ['115'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9448. Ayuntamiento Madrid 2014";
 preguntaids[50] = 9448


//  Id pregunta: 9880 Año de creación de pregunta: 2015
 questions[51]= "52)  Elija la afirmaci&oacute;n correcta sobre el est&aacute;ndar DOCSIS:";
 choices[51]= new Array();
 choices[51][0] = "Se puede emplear para proporcionar acceso a Internet sobre una infraestructura de red HFC.";
 choices[51][1] = "Permite a&ntilde;adir transferencias de datos de alta velocidad a un sistema de televisi&oacute;n por cable (CATV)";
 choices[51][2] = "La versi&oacute;n europea se denomina EuroDOCSIS.";
 choices[51][3] = "Todas las anteriores son correctas.";
 answers[51] = 3;
 units[51] = ['115'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9880. ";
 preguntaids[51] = 9880


//  Id pregunta: 5039 Año de creación de pregunta: 2002
 questions[52]= "53)  Respecto a los elementos de red de SDH puede decirse que:";
 choices[52]= new Array();
 choices[52][0] = "Un multiplexor integra tributarios en una estructura de orden superior";
 choices[52][1] = "Un ADM integra y extrae tributarios de la se&ntilde;al de l&iacute;nea";
 choices[52][2] = "Un crossconnect interconecta tributarios entre agregados y agregados entre s&iacute;";
 choices[52][3] = "Todas las afirmaciones anteriores son correctas";
 answers[52] = 3;
 units[52] = ['115'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5039. ";
 preguntaids[52] = 5039


//  Id pregunta: 6005 Año de creación de pregunta: 2003
 questions[53]= "54)  Entre los objetos utilizados por ADO.NET, no se encuentra:";
 choices[53]= new Array();
 choices[53][0] = "DataSet.";
 choices[53][1] = "DataReader.";
 choices[53][2] = "DataRequest.";
 choices[53][3] = "DataAdapter.";
 answers[53] = 2;
 units[53] = ['115'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 6005. TIC B 2007";
 preguntaids[53] = 6005


//  Id pregunta: 5220 Año de creación de pregunta: 2006
 questions[54]= "55)  &iquest;Cu&aacute;l es el n&uacute;mero aproximado de usuarios a los que da servicio cada ONT (&quot;Optical Network Termination&quot;) en una red de cable?";
 choices[54]= new Array();
 choices[54][0] = "50";
 choices[54][1] = "500";
 choices[54][2] = "5";
 choices[54][3] = "50";
 answers[54] = 1;
 units[54] = ['115'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5220. ";
 preguntaids[54] = 5220


//  Id pregunta: 5216 Año de creación de pregunta: 2006
 questions[55]= "56)  En relaci&oacute;n con las redes de distribuci&oacute;n HFC, se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[55]= new Array();
 choices[55][0] = "Los amplificadores de l&iacute;nea (Line Extender) son componentes activos.";
 choices[55][1] = "Los taps son componentes pasivos.";
 choices[55][2] = "Los amplificadores de l&iacute;nea (Line Extender), en sentido ascendente, utilizan configuraciones de amplificaci&oacute;n en paralelo denominadas &ldquo;power dubbing&rdquo; o &ldquo;feed forward&rdquo;.";
 choices[55][3] = "Los taps derivan parte de la energ&iacute;a que circula por el coaxial hacia las terminaciones donde se conectan las acometidas de usuario.";
 answers[55] = 2;
 units[55] = ['115'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 5216. ";
 preguntaids[55] = 5216


