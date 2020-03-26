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
//  Id pregunta: 3165 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Qu&eacute; se entiende por audioconferencia?:";
 choices[0]= new Array();
 choices[0][0] = "Servicio que permite a m&aacute;s de dos usuarios participar simult&aacute;neamente en una &uacute;nica conversaci&oacute;n";
 choices[0][1] = "Servicio que permite a un usuario telef&oacute;nico depositar mensajes de voz en un audiobuz&oacute;n";
 choices[0][2] = "Servicio que suministra una informaci&oacute;n grabada de tipo gen&eacute;rico";
 choices[0][3] = "Servicio de telefon&iacute;a m&oacute;vil en grupo cerrado de usuarios";
 answers[0] = 0;
 units[0] = ['122'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 3165. ";
 preguntaids[0] = 3165


//  Id pregunta: 3158 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre FDDI es cierta?:";
 choices[1]= new Array();
 choices[1][0] = "FDDI, en el nivel f&iacute;sico, utiliza una codificaci&oacute;n llamada &quot;4 de 5&quot; en lugar de la codificaci&oacute;n de Manchester";
 choices[1][1] = "La codificaci&oacute;n utilizada en FDDI no permite el autosincronismo aportado por la codificaci&oacute;n de Manchester";
 choices[1][2] = "La no utilizaci&oacute;n de una codificaci&oacute;n con autosincronismo en FDDI obliga a la necesidad de un pre&aacute;mbulo de 8 o m&aacute;s bytes que permita la sincronizaci&oacute;n de los relojes del emisor y el receptor";
 choices[1][3] = "Todas las respuestas anteriores son ciertas";
 answers[1] = 3;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 3158. ";
 preguntaids[1] = 3158


//  Id pregunta: 4285 Año de creación de pregunta: 2005
 questions[2]= "3)  Los principales componentes de la Red SARA (Intranet Administrativa) son:";
 choices[2]= new Array();
 choices[2][0] = "&aacute;reas de conexi&oacute;n y red troncal";
 choices[2][1] = "&aacute;reas de conexi&oacute;n, red troncal, centro de servicios comunes, centro de acceso remoto y centros de servicios espec&iacute;ficos";
 choices[2][2] = "&aacute;reas de conexi&oacute;n, red troncal, centro de servicios comunes y centro de acceso remoto";
 choices[2][3] = "&aacute;reas de conexi&oacute;n, red troncal, redes perif&eacute;ricas, centro de servicios comunes, centro de acceso remoto y centros de servicios espec&iacute;ficos";
 answers[2] = 2;
 units[2] = ['114'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4285. ";
 preguntaids[2] = 4285


//  Id pregunta: 2651 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;En qu&eacute; base num&eacute;rica el n&uacute;mero 6B7 se corresponde con el n&uacute;mero 1003 en decimal?";
 choices[3]= new Array();
 choices[3][0] = "en base 13.";
 choices[3][1] = "en base 7.";
 choices[3][2] = "en base 11.";
 choices[3][3] = "en base 12.";
 answers[3] = 3;
 units[3] = ['105'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 2651. ";
 preguntaids[3] = 2651


//  Id pregunta: 2528 Año de creación de pregunta: 2004
 questions[4]= "5)  A finales del a&ntilde;o 2003, la industria lanz&oacute; un est&aacute;ndar H.350 de videoconferencia con el fin de impulsar el despliegue de este tipo de sistemas. &iquest;Sabr&iacute;a indicar en qu&eacute; consiste fundamentalmente?";
 choices[4]= new Array();
 choices[4][0] = "Permite una conversaci&oacute;n y negociaci&oacute;n sobre la calidad de los terminales sobre un protocolo HTTP entre dos extremos remotos";
 choices[4][1] = "Complementa el est&aacute;ndar H.323 para soportar transmisi&oacute;n por l&iacute;neas ADSL";
 choices[4][2] = "Define un servicio de directorio basado en LDAP para usuarios y equipos de videoconferencia.";
 choices[4][3] = "Todas las anteriores";
 answers[4] = 2;
 units[4] = ['122'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 2528. ";
 preguntaids[4] = 2528


//  Id pregunta: 1923 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes organismos de Internet gestiona la definici&oacute;n de pol&iacute;ticas para la asignaci&oacute;n de nombres simb&oacute;licos o dominios en Internet?:";
 choices[5]= new Array();
 choices[5][0] = "lANA";
 choices[5][1] = "ICANN";
 choices[5][2] = "RIPE";
 choices[5][3] = "IETF";
 answers[5] = 0;
 units[5] = ['103'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1923. ";
 preguntaids[5] = 1923


//  Id pregunta: 2557 Año de creación de pregunta: 2004
 questions[6]= "7)  &iquest;Cu&aacute;l de estas tecnologias ser&iacute;a v&aacute;lida para la conexi&oacute;n en una red de area personal de los perif&eacute;ricos m&aacute;s habituales?";
 choices[6]= new Array();
 choices[6][0] = "Ethernet";
 choices[6][1] = "Bluetooth";
 choices[6][2] = "Wifi";
 choices[6][3] = "WLAN";
 answers[6] = 1;
 units[6] = ['108'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 2557. Examen Seg-Social A 2004";
 preguntaids[6] = 2557


//  Id pregunta: 4317 Año de creación de pregunta: 2004
 questions[7]= "8)  Dentro de la capa OSI, la funci&oacute;n de cifrado de datos se realiza en el nivel de:";
 choices[7]= new Array();
 choices[7][0] = "Red";
 choices[7][1] = "Transporte";
 choices[7][2] = "Sesi&oacute;n";
 choices[7][3] = "Presentaci&oacute;n";
 answers[7] = 3;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4317. Similar a examen TIC SS A 2003";
 preguntaids[7] = 4317


//  Id pregunta: 4313 Año de creación de pregunta: 2004
 questions[8]= "9)  La Ley General de Telecomunicaciones 9/2014 establece la creaci&oacute;n de un registro de operadores. &iquest;A qu&eacute; entidad encarga su llevanza?";
 choices[8]= new Array();
 choices[8][0] = "Agencia estatal de radiocomunicaciones";
 choices[8][1] = "Ministerio  de Energia, Turismo y Agenda Digital";
 choices[8][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[8][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[8] = 1;
 units[8] = ['121'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4313. Similar a examen TIC MAP A 2004.";
 preguntaids[8] = 4313


//  Id pregunta: 4286 Año de creación de pregunta: 2002
 questions[9]= "10)  En TESTA II, el sistema de intercambio de informaci&oacute;n de productos farmac&eacute;uticos es:";
 choices[9]= new Array();
 choices[9][0] = "el sistema CARE";
 choices[9][1] = "el sistema EUDRANET";
 choices[9][2] = "el sistema STATEL";
 choices[9][3] = "el sistema EURES";
 answers[9] = 1;
 units[9] = ['114'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4286. ";
 preguntaids[9] = 4286


//  Id pregunta: 2648 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;les son las tecnolog&iacute;as b&aacute;sicas usadas en la gesti&oacute;n de entornos distribuidos?:";
 choices[10]= new Array();
 choices[10][0] = "Agentes inteligentes";
 choices[10][1] = "Agentes propietarios, est&aacute;ndar y proxys";
 choices[10][2] = "Protocolos SNMP y CMIP";
 choices[10][3] = "Las tres respuestas anteriores son correctas";
 answers[10] = 2;
 units[10] = ['114'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 2648. ";
 preguntaids[10] = 2648


//  Id pregunta: 2944 Año de creación de pregunta: 2002
 questions[11]= "12)  La modulaci&oacute;n QAM transmite a:";
 choices[11]= new Array();
 choices[11][0] = "1 bit por baudio.";
 choices[11][1] = "4 bits por baudio.";
 choices[11][2] = "2 bits por baudio.";
 choices[11][3] = "Depende de las portadoras utilizadas.";
 answers[11] = 1;
 units[11] = ['108'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 2944. ";
 preguntaids[11] = 2944


//  Id pregunta: 4330 Año de creación de pregunta: 2004
 questions[12]= "13)  Qu&eacute; es falso a prop&oacute;sito de GPRS";
 choices[12]= new Array();
 choices[12][0] = "Utiliza una configuraci&oacute;n de frecuencias fija";
 choices[12][1] = "Es una red de paquetes";
 choices[12][2] = "Funciona reservando ranuras de tiempo en frecuencias determinadas para el intercambio de paquetes";
 choices[12][3] = "Est&aacute; construida encima de redes GSM";
 answers[12] = 0;
 units[12] = ['117'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4330. ";
 preguntaids[12] = 4330


//  Id pregunta: 4329 Año de creación de pregunta: 2004
 questions[13]= "14)  LMDS";
 choices[13]= new Array();
 choices[13][0] = "Usa el ancho de banda de forma sim&eacute;trica para los canales de subida y bajada";
 choices[13][1] = "Utiliza para transmitir una frecuencia de 10 Gz";
 choices[13][2] = "Reserva un ancho de banda de 3,1 Gz";
 choices[13][3] = "Ofrece un servicio de bucle local a los usuarios";
 answers[13] = 3;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4329. ";
 preguntaids[13] = 4329


//  Id pregunta: 2468 Año de creación de pregunta: 2002
 questions[14]= "15)  En I+D+i, &iquest;a qu&eacute; se refiere la segunda 'i'?";
 choices[14]= new Array();
 choices[14][0] = "A implementaci&oacute;n.";
 choices[14][1] = "A instalaci&oacute;n.";
 choices[14][2] = "A innovaci&oacute;n.";
 choices[14][3] = "A internet.";
 answers[14] = 2;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 2468. ";
 preguntaids[14] = 2468


//  Id pregunta: 4318 Año de creación de pregunta: 2004
 questions[15]= "16)  &iquest;Qu&eacute; no permite IP V6?";
 choices[15]= new Array();
 choices[15][0] = "Autenticaci&oacute;n";
 choices[15][1] = "Garantia de no repudio";
 choices[15][2] = "Cifrado";
 choices[15][3] = "Integridad";
 answers[15] = 1;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4318. Similar a examen TIC SS A 2003";
 preguntaids[15] = 4318


//  Id pregunta: 2573 Año de creación de pregunta: 2002
 questions[16]= "17)  A la aplicaci&oacute;n de t&eacute;cnicas telem&aacute;ticas y tecnolog&iacute;as de redes para aumentar el confort, el control  y la seguridad en el hogar se le denomina:";
 choices[16]= new Array();
 choices[16][0] = "Infordom&oacute;tica.";
 choices[16][1] = "Domotelem&aacute;tica.";
 choices[16][2] = "Dom&oacute;tica.";
 choices[16][3] = "Telem&aacute;tica urban&iacute;stica.";
 answers[16] = 2;
 units[16] = ['111'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 2573. ";
 preguntaids[16] = 2573


//  Id pregunta: 4328 Año de creación de pregunta: 2,000.00
 questions[17]= "18)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred";
 choices[17]= new Array();
 choices[17][0] = "00001010.00000001.10000001.10000000";
 choices[17][1] = "00001010.00000001.10000001.00000000";
 choices[17][2] = "00001010.00000001.00000000.00000001";
 choices[17][3] = "00001010.00000001.10000001.11000000";
 answers[17] = 0;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4328. Examen TIC MAP B 2004";
 preguntaids[17] = 4328


//  Id pregunta: 4301 Año de creación de pregunta: 2004
 questions[18]= "19)  &iquest;Cu&aacute;l es el est&aacute;ndar de WLAN que permite transmitir a una velocidad efectiva de entre 12 y 24 Mbps y a una velocidad m&aacute;xima de 54 Mbps?";
 choices[18]= new Array();
 choices[18][0] = "IEEE 802.11a";
 choices[18][1] = "IEEE 802.11b";
 choices[18][2] = "IEEE 802.11g";
 choices[18][3] = "IEEE 802.11i";
 answers[18] = 2;
 units[18] = ['108'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4301. Similar a examen TIC SS A 2003";
 preguntaids[18] = 4301


//  Id pregunta: 2035 Año de creación de pregunta: 2002
 questions[19]= "20)  En el sistema internacional de medidas se usan una serie de prefijos para las unidades. A continuaci&oacute;n se presentan algunos de ellos. &iquest;Podr&iacute;a indicar cu&aacute;l es el orden correcto de menor a mayor?";
 choices[19]= new Array();
 choices[19][0] = "Kilo-Mega-Giga-Tera-Exa-Peta.";
 choices[19][1] = "Kilo-Giga-Mega-Tera-Exa-Peta.";
 choices[19][2] = "Kilo-Mega-Giga-Peta-Exa-Tera.";
 choices[19][3] = "Kilo-Mega-Giga-Tera-Peta-Exa.";
 answers[19] = 3;
 units[19] = ['105'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 2035. ";
 preguntaids[19] = 2035


//  Id pregunta: 4337 Año de creación de pregunta: 2004
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguentes no son funciones de la CNMC seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[20]= new Array();
 choices[20][0] = "Establecer, cuando proceda, las obligaciones espec&iacute;ficas que correspondan a los operadores con poder significativo en mercados de referencia.";
 choices[20][1] = "Realizar las funciones de arbitraje, tanto de derecho como de equidad, que le sean sometidas por los operadores de comunicaciones electr&oacute;nicas en aplicaci&oacute;n de la Ley 60/2003, de 23 de diciembre, de Arbitraje.";
 choices[20][2] = "Gesti&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[20][3] = "Fijar las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros en aplicaci&oacute;n de los aspectos t&eacute;cnicos y administrativos que mediante real decreto se establezcan para que &eacute;sta se lleve a cabo.";
 answers[20] = 2;
 units[20] = ['121'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4337. ";
 preguntaids[20] = 4337


//  Id pregunta: 1922 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; sentencia de las siguientes es correcta?:";
 choices[21]= new Array();
 choices[21][0] = "Con SSL las cabeceras IP y del nivel de transporte (TCP y UDP) son cifradas y por tanto no accesibles desde la red";
 choices[21][1] = "SSL utiliza &uacute;nicamente sistemas de clave p&uacute;blica para cifrar";
 choices[21][2] = "Para utilizar SSL los routers tienen que ser compatibles con SSL";
 choices[21][3] = "EI servidor en una sesi&oacute;n SSL no tiene por que estar siempre autenticado";
 answers[21] = 3;
 units[21] = ['120'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1922. ";
 preguntaids[21] = 1922


//  Id pregunta: 4310 Año de creación de pregunta: 2004
 questions[22]= "23)  &iquest;Qu&eacute; protocolo de correo permite acceder al correo electr&oacute;nico, manteniendo los mensajes en el servidor, de forma que pueda accederse al correo desde distintos terminales?";
 choices[22]= new Array();
 choices[22][0] = "POP-3";
 choices[22][1] = "SMTP";
 choices[22][2] = "IMAP";
 choices[22][3] = "MIME";
 answers[22] = 2;
 units[22] = ['116'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4310. Similar a examen TIC MAP A 2004";
 preguntaids[22] = 4310


//  Id pregunta: 4292 Año de creación de pregunta: 2004
 questions[23]= "24)  En GSM (Global System Mobile) el acceso al medio utilizado es:";
 choices[23]= new Array();
 choices[23][0] = "Acceso m&uacute;ltiple por divisi&oacute;n de tiempo.";
 choices[23][1] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia.";
 choices[23][2] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia y tiempo.";
 choices[23][3] = "Acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha.";
 answers[23] = 2;
 units[23] = ['117'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4292. ";
 preguntaids[23] = 4292


//  Id pregunta: 4288 Año de creación de pregunta: 2005
 questions[24]= "25)  La red SARA (Intranet Administrativa) no tiene entre sus principales objetivos:";
 choices[24]= new Array();
 choices[24][0] = "Ser un &uacute;nico punto de conexi&oacute;n con las Comunidades Aut&oacute;nomas";
 choices[24][1] = "Conectar con la Uni&oacute;n Europea a trav&eacute;s de TESTA e IDA";
 choices[24][2] = "Conectar todos los edificios de la Administraci&oacute;n General del Estado";
 choices[24][3] = "Ser de utilidad en la implantaci&oacute;n de aplicaciones horizontales";
 answers[24] = 2;
 units[24] = ['114'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4288. ";
 preguntaids[24] = 4288


//  Id pregunta: 4284 Año de creación de pregunta: 2002
 questions[25]= "26)  La entidad p&uacute;blica empresarial Red.es tiene como misi&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "la gesti&oacute;n de registros de nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s &quot;.es&quot; correspondiente a Espa&ntilde;a";
 choices[25][1] = "la de observar la evoluci&oacute;n del sector de las telecomunicaciones y de la sociedad de la informaci&oacute;n";
 choices[25][2] = "el asesoramiento a la Administraci&oacute;n General del Estado en materias TIC";
 choices[25][3] = "Todas las anteriores respuestas son correctas";
 answers[25] = 3;
 units[25] = ['103'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4284. ";
 preguntaids[25] = 4284


//  Id pregunta: 2832 Año de creación de pregunta: 2002
 questions[26]= "27)  En la multiplexaci&oacute;n por divisi&oacute;n en frecuencia, &iquest;cu&aacute;l de estas afirmaciones es correcta?";
 choices[26]= new Array();
 choices[26][0] = "Las se&ntilde;ales a enviar usan todo el ancho de banda disponible.";
 choices[26][1] = "Las se&ntilde;ales a enviar s&oacute;lo usan el ancho de banda asignado.";
 choices[26][2] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por todo ancho de banda.";
 choices[26][3] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por el ancho de banda asignado.";
 answers[26] = 1;
 units[26] = ['104'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 2832. ";
 preguntaids[26] = 2832


//  Id pregunta: 3159 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes respuestas caracteriza FDDI?:";
 choices[27]= new Array();
 choices[27][0] = "Consiste en el control de dispositivos y datos que funcionan por desplazameinto de frecuencia";
 choices[27][1] = "Consiste en la t&eacute;cnica de control de los dispositivos para filtraje de datos en las redes de &aacute;rea local";
 choices[27][2] = "Consiste en dos bucles de fibra &oacute;ptica con protocolo de paso de testigo";
 choices[27][3] = "Consiste en un bucle de fibra &oacute;ptica que funciona como Ethernet (por contenci&oacute;n) pero a 100 Mbits/seg, y hay otro bucle como backup del primero";
 answers[27] = 2;
 units[27] = ['112'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 3159. ";
 preguntaids[27] = 3159


//  Id pregunta: 2568 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Qu&eacute; tiene de particular una c&aacute;mara o sala anecoica?";
 choices[28]= new Array();
 choices[28][0] = "Las paredes son espejos reflectantes que permiten ver de fuera a dentro pero no de dentro a fuera.";
 choices[28][1] = "Las paredes tienen formas geom&eacute;tricas a lo largo de su superficie que evitan que rebote el sonido.";
 choices[28][2] = "Su electricidad est&aacute;tica hace que se comporte como una jaula de Faraday.";
 choices[28][3] = "Se mantiene completamente isoterma gracias al material de sus revestimientos.";
 answers[28] = 1;
 units[28] = ['119'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 2568. ";
 preguntaids[28] = 2568


//  Id pregunta: 3117 Año de creación de pregunta: 2002
 questions[29]= "30)  Comparando los sistemas de compresi&oacute;n de video:";
 choices[29]= new Array();
 choices[29][0] = "La complejidad de compresi&oacute;n es mayor en MPEG-x que en H.26x";
 choices[29][1] = "El retardo producido por H.26x es mayor que el producido por MPEG-x";
 choices[29][2] = "La eficiencia es mayor en los algoritmos H.26x que en los algoritmos MPEG-x";
 choices[29][3] = "Todas las respuestas anteriores son correctas";
 answers[29] = 0;
 units[29] = ['110'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 3117. ";
 preguntaids[29] = 3117


//  Id pregunta: 4326 Año de creación de pregunta: 2004
 questions[30]= "31)  &iquest;Cu&aacute;l es el bit del segmento TCP que le indica al receptor que entregue los datos inmediatamente a la aplicaci&oacute;n?";
 choices[30]= new Array();
 choices[30][0] = "ACK";
 choices[30][1] = "PSH";
 choices[30][2] = "RST";
 choices[30][3] = "PUT";
 answers[30] = 1;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4326. Examen TIC MAP B 2004";
 preguntaids[30] = 4326


//  Id pregunta: 2572 Año de creación de pregunta: 2002
 questions[31]= "32)  A Claude Shannon se le considera:";
 choices[31]= new Array();
 choices[31][0] = "el padre de la telem&aacute;tica moderna";
 choices[31][1] = "el creador del primer ordenador seg&uacute;n la m&aacute;quina de Von Neumann";
 choices[31][2] = "el pionero de los algoritmos criptogr&aacute;ficos";
 choices[31][3] = "el creador del primer sistema operativo";
 answers[31] = 0;
 units[31] = ['104'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 2572. ";
 preguntaids[31] = 2572


//  Id pregunta: 2964 Año de creación de pregunta: 2002
 questions[32]= "33)  Las modulaciones angulares, respecto a las modulaciones lineales:";
 choices[32]= new Array();
 choices[32][0] = "Dan peor discriminaci&oacute;n en contra del ruido y la interferencia.";
 choices[32][1] = "Utilizan menor ancho de banda.";
 choices[32][2] = "Utilizan mayor energ&iacute;a para transmitir.";
 choices[32][3] = "Dan mejor discriminaci&oacute;n en contra del ruido y la interferencia.";
 answers[32] = 3;
 units[32] = ['108', '117', '118'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 2964. ";
 preguntaids[32] = 2964


//  Id pregunta: 4302 Año de creación de pregunta: 2004
 questions[33]= "34)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[33]= new Array();
 choices[33][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[33][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[33][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[33][3] = "No";
 answers[33] = 0;
 units[33] = ['105', '109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4302. Similar a examen TIC SS A 2003";
 preguntaids[33] = 4302


//  Id pregunta: 2751 Año de creación de pregunta: 2002
 questions[34]= "35)  El decibelio (dB) es una unidad de medida usada en escalas:";
 choices[34]= new Array();
 choices[34][0] = "lineales.";
 choices[34][1] = "polares.";
 choices[34][2] = "logar&iacute;tmicas.";
 choices[34][3] = "exponenciales.";
 answers[34] = 2;
 units[34] = ['104'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 2751. ";
 preguntaids[34] = 2751


//  Id pregunta: 2913 Año de creación de pregunta: 2002
 questions[35]= "36)  Java EE es:";
 choices[35]= new Array();
 choices[35][0] = "Un producto";
 choices[35][1] = "Un servicio";
 choices[35][2] = "Un conjunto de especificaciones";
 choices[35][3] = "Nada de lo anterior";
 answers[35] = 2;
 units[35] = ['124'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 2913. ";
 preguntaids[35] = 2913


//  Id pregunta: 4331 Año de creación de pregunta: 2004
 questions[36]= "37)  Qu&eacute; es cierto respecto a los dispositivos bridge y switch de interconexi&oacute;n de redes lcoales";
 choices[36]= new Array();
 choices[36][0] = "El switch opera en el nivel 2 y el bridge en el nivel 3 del modelo OSI";
 choices[36][1] = "Los switches se suelen emplear para interconectar servidores y los bridges para interconectar LANs";
 choices[36][2] = "Un switch pueden interconectar distintos tipos de LAN y un bridge no";
 choices[36][3] = "En los switches cada puerto forma su dominio de colisi&oacute;n propio mientras que los bridges tienen varios dominios de colisi&oacute;n por puerto.";
 answers[36] = 1;
 units[36] = ['102'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4331. ";
 preguntaids[36] = 4331


//  Id pregunta: 4287 Año de creación de pregunta: 2002
 questions[37]= "38)  El sistema EURODAC de TESTA II intercambia informaci&oacute;n entre las Administraciones P&uacute;blicas europeas referentes a:";
 choices[37]= new Array();
 choices[37][0] = "inmigraci&oacute;n";
 choices[37][1] = "accidentes de tr&aacute;fico";
 choices[37][2] = "ofertas de empleo";
 choices[37][3] = "fondos estructurales";
 answers[37] = 0;
 units[37] = ['114'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4287. ";
 preguntaids[37] = 4287


//  Id pregunta: 2667 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Qu&eacute; define la norma X.500?:";
 choices[38]= new Array();
 choices[38][0] = "Servicio de directorio";
 choices[38][1] = "Sistema de tratamiento de mensajes";
 choices[38][2] = "Servicio de transferencia de ficheros";
 choices[38][3] = "Sistema de gesti&oacute;n de red";
 answers[38] = 0;
 units[38] = ['116'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 2667. ";
 preguntaids[38] = 2667


//  Id pregunta: 4298 Año de creación de pregunta: 2003
 questions[39]= "40)  En una red MPLS, &iquest; qu&eacute; funci&oacute;n realiza el LER?";
 choices[39]= new Array();
 choices[39][0] = "Es el elemento que conmuta etiquetas";
 choices[39][1] = "Es el nombre de un circuito virtual MPLS";
 choices[39][2] = "Es el elemento que inicia o termina el t&uacute;nel";
 choices[39][3] = "Es el elemento que conmuta el tr&aacute;fico en funci&oacute;n de las etiquetas";
 answers[39] = 2;
 units[39] = ['107'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4298. ";
 preguntaids[39] = 4298


//  Id pregunta: 4311 Año de creación de pregunta: 2004
 questions[40]= "41)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[40]= new Array();
 choices[40][0] = "1000BaseT";
 choices[40][1] = "1000BaseSX";
 choices[40][2] = "1000BaseLx";
 choices[40][3] = "1000BaseCX";
 answers[40] = 3;
 units[40] = ['104'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4311. Similar a examen TIC MAP A 2004";
 preguntaids[40] = 4311


//  Id pregunta: 4321 Año de creación de pregunta: 2004
 questions[41]= "42)  &iquest;Qu&eacute; organismo trabaj&oacute; en la estandarizaci&oacute;n de las redes de cable?";
 choices[41]= new Array();
 choices[41][0] = "El IEEE 802.11";
 choices[41][1] = "El IEEE 802.14";
 choices[41][2] = "El ATU-C";
 choices[41][3] = "El UIT-T E.164";
 answers[41] = 1;
 units[41] = ['115'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4321. Examen TIC MAP B 2004";
 preguntaids[41] = 4321


//  Id pregunta: 4339 Año de creación de pregunta: 2004
 questions[42]= "43)  Dada la m&aacute;scara de red 255.240.0.0, &iquest;Cu&aacute;nta subredes ser&iacute;a posible incluir dentro de una red tipo A?";
 choices[42]= new Array();
 choices[42][0] = "Ninguna";
 choices[42][1] = "16";
 choices[42][2] = "14";
 choices[42][3] = "8";
 answers[42] = 2;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4339. Se aplica la formula  2^N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";
 preguntaids[42] = 4339


//  Id pregunta: 4312 Año de creación de pregunta: 2004
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[43]= new Array();
 choices[43][0] = "Borrador de Internet";
 choices[43][1] = "Est&aacute;ndar propuesto";
 choices[43][2] = "Borrador de est&aacute;ndar";
 choices[43][3] = "Est&aacute;ndar temporal";
 answers[43] = 3;
 units[43] = ['103'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4312. Similar a examen TIC MAP A 2004";
 preguntaids[43] = 4312


//  Id pregunta: 4325 Año de creación de pregunta: 2004
 questions[44]= "45)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[44]= new Array();
 choices[44][0] = "CSMA/CD";
 choices[44][1] = "Token bus";
 choices[44][2] = "Token Ring";
 choices[44][3] = "Aloha ranurado";
 answers[44] = 1;
 units[44] = ['102'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4325. Similar a examen TIC SS A 2003";
 preguntaids[44] = 4325


//  Id pregunta: 4333 Año de creación de pregunta: 2004
 questions[45]= "46)  &iquest;Cu&aacute;l es el sistema de acceso que utiliza GPRS?";
 choices[45]= new Array();
 choices[45][0] = "OFDM/TDD";
 choices[45][1] = "CDMA/TDD";
 choices[45][2] = "CDMA/FDD";
 choices[45][3] = "Ninguno de los anteriores";
 answers[45] = 3;
 units[45] = ['117'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4333. ";
 preguntaids[45] = 4333


//  Id pregunta: 4324 Año de creación de pregunta: 2004
 questions[46]= "47)  Los documentos que definen los est&aacute;ndares de facto de internet se denominan:";
 choices[46]= new Array();
 choices[46][0] = "RFC";
 choices[46][1] = "IETF";
 choices[46][2] = "IANA";
 choices[46][3] = "Se definen en la serie ITU-T X.(n&uacute;mero de est&aacute;ndar)";
 answers[46] = 0;
 units[46] = ['103'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4324. Similar a examen TIC SS A 2003";
 preguntaids[46] = 4324


//  Id pregunta: 2640 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Cu&aacute;l es el sistema de mensajer&iacute;a t&iacute;pico de los sistemas Unix?:";
 choices[47]= new Array();
 choices[47][0] = "Exchange";
 choices[47][1] = "Sendmail";
 choices[47][2] = "Memo";
 choices[47][3] = "Groupwise";
 answers[47] = 1;
 units[47] = ['57', '116'];
 blocks[47] = ['B2', 'B4'];
 comments[47] = "Id Pregunta: 2640. ";
 preguntaids[47] = 2640


//  Id pregunta: 4338 Año de creación de pregunta: 2004
 questions[48]= "49)  &iquest;Cu&aacute;les de los siguientes mecanismos no sirve para garantizar la privacidad de las comunicaciones por correo electr&oacute;nico?";
 choices[48]= new Array();
 choices[48][0] = "GPG";
 choices[48][1] = "PGP";
 choices[48][2] = "S/MIME";
 choices[48][3] = "Todos los anteriores valen";
 answers[48] = 3;
 units[48] = ['116'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4338. ";
 preguntaids[48] = 4338


//  Id pregunta: 4334 Año de creación de pregunta: 2004
 questions[49]= "50)  Indique a qu&eacute; velocidad aproximada dentro de la Jerarqu&iacute;a Digital S&iacute;ncrona corresponde a un contenedor OC-3 de la Jerarqu&iacute;a SONET:";
 choices[49]= new Array();
 choices[49][0] = "52 Mbps";
 choices[49][1] = "155 Mbps";
 choices[49][2] = "384 Mpbs";
 choices[49][3] = "Ninguno de los anteriores";
 answers[49] = 1;
 units[49] = ['110'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4334. ";
 preguntaids[49] = 4334


//  Id pregunta: 4322 Año de creación de pregunta: 2004
 questions[50]= "51)  &iquest;Cu&aacute;l es el primer nivel OSI en el que se produce comunicaci&oacute;n extremo-extremo?";
 choices[50]= new Array();
 choices[50][0] = "Red";
 choices[50][1] = "Transporte";
 choices[50][2] = "Sesi&oacute;n";
 choices[50][3] = "Presentaci&oacute;n";
 answers[50] = 1;
 units[50] = ['105'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4322. Similar a examen TIC SS A 2003";
 preguntaids[50] = 4322


//  Id pregunta: 4323 Año de creación de pregunta: 2004
 questions[51]= "52)  En ADSL la velocidad de transmisi&oacute;n no depende de:";
 choices[51]= new Array();
 choices[51][0] = "La longitud del bucle de abonado local";
 choices[51][1] = "Los empalmes, conectores y distribuidores que haya para llevar la se&ntilde;al a distintos equipos en el domicilio del usuario";
 choices[51][2] = "Diafon&iacute;a";
 choices[51][3] = "Todas las anteriores.";
 answers[51] = 3;
 units[51] = ['108'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4323. Similar a examen TIC SS A 2003";
 preguntaids[51] = 4323


//  Id pregunta: 4332 Año de creación de pregunta: 2004
 questions[52]= "53)  Qu&eacute; es falso respecto a Network Address Translation:";
 choices[52]= new Array();
 choices[52][0] = "Opera en el nivel de red";
 choices[52][1] = "Realiza cambios en la direcci&oacute;n del paquete TCP";
 choices[52][2] = "Realiza cambios en la direcci&oacute;n del paquete IP";
 choices[52][3] = "Realiza cambios en el puerto origen del paquete TCP";
 answers[52] = 1;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4332. Para evitar la ambig&uuml;edad, para los protocolos TCP y UDP, se cambian os n&uacute;meros de puerto as&iacute; como la combinaci&oacute;n de la informaci&oacute;n de IP y puerto en el paquete devuelto.";
 preguntaids[52] = 4332


//  Id pregunta: 2544 Año de creación de pregunta: 2004
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no se corresponde con un est&aacute;ndar de audio?";
 choices[53]= new Array();
 choices[53][0] = "mp3";
 choices[53][1] = "wav";
 choices[53][2] = "mod";
 choices[53][3] = "rmm";
 answers[53] = 3;
 units[53] = ['122'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 2544. ";
 preguntaids[53] = 2544


//  Id pregunta: 4335 Año de creación de pregunta: 2004
 questions[54]= "55)  El sistema cableado del tipo conocido como de Par Trenzado sin Apantallar es:";
 choices[54]= new Array();
 choices[54][0] = "STP";
 choices[54][1] = "UTP";
 choices[54][2] = "FTP";
 choices[54][3] = "OM1";
 answers[54] = 1;
 units[54] = ['104'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4335. ";
 preguntaids[54] = 4335


//  Id pregunta: 2081 Año de creación de pregunta: 2002
 questions[55]= "56)  En Espa&ntilde;a la portabilidad del n&uacute;mero de abonado:";
 choices[55]= new Array();
 choices[55][0] = "Es obligatoria desde la Orden Ministerial de 4 de agosto de 1997";
 choices[55][1] = "Se basa en diferentes tecnolog&iacute;as: redirecci&oacute;n de llamada y red inteligente";
 choices[55][2] = "Permite a un abonado de un operador de telefon&iacute;a cambiar de operador conservando el n&uacute;mero";
 choices[55][3] = "Todas las respuestas anteriores son correctas";
 answers[55] = 3;
 units[55] = ['110'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 2081. ";
 preguntaids[55] = 2081


//  Id pregunta: 3210 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;Qu&eacute; es Wine?";
 choices[56]= new Array();
 choices[56][0] = "Un emulador X11 para Windows";
 choices[56][1] = "Un emulador X11 para Linux";
 choices[56][2] = "Una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[56][3] = "Nada de lo anterior";
 answers[56] = 2;
 units[56] = ['124'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 3210. ";
 preguntaids[56] = 3210


//  Id pregunta: 3166 Año de creación de pregunta: 2002
 questions[57]= "58)  Cuando la transmisi&oacute;n de datos entre dos sistemas se caracteriza por llevar un bit de comienzo y un bit de parada, separando a cada unidad de informaci&oacute;n, se trata de:";
 choices[57]= new Array();
 choices[57][0] = "Comunicaci&oacute;n s&iacute;ncrona";
 choices[57][1] = "Comunicaci&oacute;n as&iacute;ncrona";
 choices[57][2] = "Comunicaci&oacute;n semiduplex (half-duplex)";
 choices[57][3] = "Comunicaci&oacute;n duplex (full-duplex)";
 answers[57] = 1;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 3166. ";
 preguntaids[57] = 3166


//  Id pregunta: 4320 Año de creación de pregunta: 2004
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?:";
 choices[58]= new Array();
 choices[58][0] = "DNS: Sistema de nombres de dominio";
 choices[58][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[58][2] = "FTP: Protocolo de transferencia de archivos";
 choices[58][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[58] = 3;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4320. Examen TIC MAP B 2004";
 preguntaids[58] = 4320


//  Id pregunta: 3146 Año de creación de pregunta: 2002
 questions[59]= "60)  Respecto a los formatos de compresi&oacute;n de video de la familia H.26x, es falso que:";
 choices[59]= new Array();
 choices[59][0] = "H.261 est&aacute; orientado a caudal constante, m&aacute;s id&oacute;neo para video sobre RDSI";
 choices[59][1] = "H.263 es m&aacute;s eficiente que H.261 y est&aacute; orientado a video sobre internet, con caudal variable";
 choices[59][2] = "No ofrecen compresi&oacute;n temporal, aunque s&iacute; compresi&oacute;n espacial";
 choices[59][3] = "Todo lo anterior es falso";
 answers[59] = 3;
 units[59] = ['122'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 3146. ";
 preguntaids[59] = 3146


//  Id pregunta: 4319 Año de creación de pregunta: 2004
 questions[60]= "61)  Los Bridges:";
 choices[60]= new Array();
 choices[60][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[60][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[60][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[60][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[60] = 3;
 units[60] = ['102'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4319. Examen TIC MAP B 2004";
 preguntaids[60] = 4319


//  Id pregunta: 2757 Año de creación de pregunta: 2002
 questions[61]= "62)  El interfaz socket:";
 choices[61]= new Array();
 choices[61][0] = "S&oacute;lo es aplicable a TCP/IP";
 choices[61][1] = "S&oacute;lo es aplicable a UNIX";
 choices[61][2] = "Es el &uacute;nico modelo en Unix para acceder a TCP/IP";
 choices[61][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[61] = 3;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 2757. ";
 preguntaids[61] = 2757


//  Id pregunta: 2855 Año de creación de pregunta: 2002
 questions[62]= "63)  En un desplazamiento c&iacute;clico a la izquierda de un bit, el contenido de &quot;100101&quot; se modifica en:";
 choices[62]= new Array();
 choices[62][0] = "&ldquo;110010&rdquo;.";
 choices[62][1] = "&quot;1010&rdquo;.";
 choices[62][2] = "&ldquo;110011&rdquo;.";
 choices[62][3] = "&ldquo;1011&rdquo;.";
 answers[62] = 3;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 2855. ";
 preguntaids[62] = 2855


//  Id pregunta: 3073 Año de creación de pregunta: 2002
 questions[63]= "64)  Un servicio de directorio:";
 choices[63]= new Array();
 choices[63][0] = "Es una base de datos, orientada a consulta, con replicaci&oacute;n, y estructura jer&aacute;rquica";
 choices[63][1] = "Puede ser utilizado como un repositorio para guardar la informaci&oacute;n de los usuarios";
 choices[63][2] = "Puede ser utilizado como medio de autenticaci&oacute;n en sistemas heterogeneos";
 choices[63][3] = "Todas las respuestas anteriores son ciertas";
 answers[63] = 3;
 units[63] = ['116'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 3073. ";
 preguntaids[63] = 3073


//  Id pregunta: 4327 Año de creación de pregunta: 2004
 questions[64]= "65)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderso con su router por defecto:";
 choices[64]= new Array();
 choices[64][0] = "10.2.40.64";
 choices[64][1] = "10.2.41.45";
 choices[64][2] = "10.2.40.63";
 choices[64][3] = "10.2.40.1";
 answers[64] = 3;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4327. Examen TIC MAP B 2004";
 preguntaids[64] = 4327


//  Id pregunta: 4304 Año de creación de pregunta: 2004
 questions[65]= "66)  En relaci&oacute;n con GPRS se&ntilde;ale la opci&oacute;n incorrecta";
 choices[65]= new Array();
 choices[65][0] = "El acceso radio es por paquetes de datos";
 choices[65][1] = "Hasta 8 usuarios pueden compartir eficientemente un &uacute;nico timeslot de radio";
 choices[65][2] = "La tarificaci&oacute;n es por tiempo de conexi&oacute;n";
 choices[65][3] = "La red GPRS se puede comunicar con redes TCP/IP";
 answers[65] = 2;
 units[65] = ['117'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4304. Similar a examen TIC SS A 2003";
 preguntaids[65] = 4304


//  Id pregunta: 4305 Año de creación de pregunta: 2009
 questions[66]= "67)  En GPRS la velocidad m&aacute;xima te&oacute;rica de conexi&oacute;n es:";
 choices[66]= new Array();
 choices[66][0] = "128 kbps";
 choices[66][1] = "171.2 kbps";
 choices[66][2] = "64.1 kbps";
 choices[66][3] = "56.6 kbps";
 answers[66] = 1;
 units[66] = ['117'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4305. Similar a examen TIC SS A 2003";
 preguntaids[66] = 4305


//  Id pregunta: 3241 Año de creación de pregunta: 2004
 questions[67]= "68)  Respecto a SSL";
 choices[67]= new Array();
 choices[67][0] = "Es un protocolo promovido por IETF";
 choices[67][1] = "Se diferencia de TSL en las t&eacute;cnicas criptogr&aacute;ficas empleadas";
 choices[67][2] = "Cuando HTTP se usa sobre un canal SSL se denomina HTTPS";
 choices[67][3] = "Est&aacute; restringido a su uso en browsers";
 answers[67] = 2;
 units[67] = ['103'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 3241. ";
 preguntaids[67] = 3241


//  Id pregunta: 4308 Año de creación de pregunta: 2004
 questions[68]= "69)  &iquest;Qu&eacute; m&aacute;scara habr&iacute;a que aplicar para crear 8 subredes en una red de clase A?";
 choices[68]= new Array();
 choices[68][0] = "255.240.0.0";
 choices[68][1] = "255.192.0.0";
 choices[68][2] = "255.0.0.0";
 choices[68][3] = "2";
 answers[68] = 0;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4308. Similar a examen TIC MAP A 2004. Con esa m&aacute;scara tendriamos hasta 14 subredes. Se aplica la formula  2N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";
 preguntaids[68] = 4308


//  Id pregunta: 2953 Año de creación de pregunta: 2002
 questions[69]= "70)  La t&eacute;cnica ADPCM:";
 choices[69]= new Array();
 choices[69][0] = "Se utiliza para comprimir im&aacute;genes est&aacute;ticas";
 choices[69][1] = "Se basa en la modelizaci&oacute;n por fractales";
 choices[69][2] = "Tambi&eacute;n es llamada LZW (Lempel, Ziv y Welch), y se usa para compresi&oacute;n de audio";
 choices[69][3] = "Ninguna de las anteriores es verdadera";
 answers[69] = 3;
 units[69] = ['107', '110'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 2953. ";
 preguntaids[69] = 2953


//  Id pregunta: 4306 Año de creación de pregunta: 2004
 questions[70]= "71)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[70]= new Array();
 choices[70][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[70][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[70][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[70][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[70] = 2;
 units[70] = ['113'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4306. ";
 preguntaids[70] = 4306


//  Id pregunta: 1921 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;a qu&eacute; clase corresponde la direcci&oacute;n IP 26.11 0.4.65?";
 choices[71]= new Array();
 choices[71][0] = "A";
 choices[71][1] = "B";
 choices[71][2] = "C";
 choices[71][3] = "Ninguna de las anteriores es correcta.";
 answers[71] = 0;
 units[71] = ['109'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1921. ";
 preguntaids[71] = 1921


//  Id pregunta: 2470 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Qu&eacute; es PROFIT?";
 choices[72]= new Array();
 choices[72][0] = "Un estamento independiente que se encarga de velar por el desarrollo de las tecnolog&iacute;as de la informaci&oacute;n en los pa&iacute;ses en v&iacute;as de desarrollo.";
 choices[72][1] = "El Programa de Fomento para la Investigaci&oacute;n T&eacute;cnica, promovido para conceder ayudas a los proyectos de I+D.";
 choices[72][2] = "El programa asociado al programa ISA2 y encargado del intercambio de las estad&iacute;sticas de tr&aacute;fico en los distintos pa&iacute;ses de la Uni&oacute;n Europea.";
 choices[72][3] = "Nada de lo anterior es cierto.";
 answers[72] = 1;
 units[72] = ['114'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 2470. ";
 preguntaids[72] = 2470


//  Id pregunta: 4314 Año de creación de pregunta: 2004
 questions[73]= "74)  En telefon&iacute;a m&oacute;vil GSM, &iquest;qu&eacute; bases de datos se utilizan para almacenar datos de cliente?";
 choices[73]= new Array();
 choices[73][0] = "VLR y HLR";
 choices[73][1] = "EIR y HLR";
 choices[73][2] = "MSC y VLR";
 choices[73][3] = "EIR y MSC";
 answers[73] = 0;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4314. Similar a examen TIC MAP A 2004";
 preguntaids[73] = 4314


//  Id pregunta: 4289 Año de creación de pregunta: 2002
 questions[74]= "75)  La implantaci&oacute;n de SARA aporta:";
 choices[74]= new Array();
 choices[74][0] = "Servicios b&aacute;sicos horizontales";
 choices[74][1] = "Servicios sectoriales de los departamentos ministeriales";
 choices[74][2] = "Servicios horizontales de car&aacute;cter  avanzado";
 choices[74][3] = "Todas las respuestas anteriores son correctas";
 answers[74] = 3;
 units[74] = ['114'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4289. ";
 preguntaids[74] = 4289


