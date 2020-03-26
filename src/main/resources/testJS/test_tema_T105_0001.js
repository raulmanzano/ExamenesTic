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
//  Id pregunta: 4457 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN en bus con paso de testigo?:";
 choices[0]= new Array();
 choices[0][0] = "802.4";
 choices[0][1] = "802.5";
 choices[0][2] = "802.6";
 choices[0][3] = "802.7";
 answers[0] = 0;
 units[0] = ['105'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4457. ";
 preguntaids[0] = 4457


//  Id pregunta: 4525 Año de creación de pregunta: 2002
 questions[1]= "2)  Dentro del modelo OSI la funci&oacute;n de 'manejo de distintos terminales', corresponde al nivel:";
 choices[1]= new Array();
 choices[1][0] = "Nivel de red";
 choices[1][1] = "Nivel de transporte";
 choices[1][2] = "Nivel de sesi&oacute;n";
 choices[1][3] = "Nivel de presentaci&oacute;n";
 answers[1] = 3;
 units[1] = ['105'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4525. ";
 preguntaids[1] = 4525


//  Id pregunta: 4452 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;A qu&eacute; nivel del modelo OSI corresponde la funci&oacute;n de detecci&oacute;n de colisiones en los sistemas CSMA/CD?:";
 choices[2]= new Array();
 choices[2][0] = "Nivel 1 F&iacute;sico";
 choices[2][1] = "Nivel 2 Enlace";
 choices[2][2] = "Nivel 3 Red";
 choices[2][3] = "Nivel 4 Transporte";
 answers[2] = 0;
 units[2] = ['105'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4452. Es debatible la respuesta, pero el nivel fisico en su adaptaci&oacute;n al medio f&iacute;sico de comunicaci&oacute;n puede estar capacitado para detectar colisiones.Por ejemplo, un hub trabaja en capa f&iacute;sica y detecta colisiones";
 preguntaids[2] = 4452


//  Id pregunta: 4618 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Qu&eacute; nivel del modelo OSI se encarga del enrutamiento de la informaci&oacute;n?:";
 choices[3]= new Array();
 choices[3][0] = "El nivel de red";
 choices[3][1] = "El nivel de enlace";
 choices[3][2] = "El nivel de transporte";
 choices[3][3] = "Se realiza conjuntamente entre el nivel de red y el nivel de transporte, a trav&eacute;s del interfaz entre estos niveles adyacentes";
 answers[3] = 0;
 units[3] = ['105'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4618. ";
 preguntaids[3] = 4618


//  Id pregunta: 4593 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;En qu&eacute; nivel OSI act&uacute;an los repetidores?";
 choices[4]= new Array();
 choices[4][0] = "Enlace";
 choices[4][1] = "Red";
 choices[4][2] = "Transporte";
 choices[4][3] = "F&iacute;sico";
 answers[4] = 3;
 units[4] = ['105'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4593. ";
 preguntaids[4] = 4593


//  Id pregunta: 4456 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN con CSMA/CD?:";
 choices[5]= new Array();
 choices[5][0] = "802.1";
 choices[5][1] = "802.2";
 choices[5][2] = "802.3";
 choices[5][3] = "802.4";
 answers[5] = 2;
 units[5] = ['105'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4456. ";
 preguntaids[5] = 4456


//  Id pregunta: 4553 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes dispositivos es el que trabaja como m&aacute;ximo a nivel 3 - Red - del sistema OSI?:";
 choices[6]= new Array();
 choices[6][0] = "Repetidores";
 choices[6][1] = "Puentes (Bridges)";
 choices[6][2] = "Enrutadores (routers)";
 choices[6][3] = "Pasarelas (Gateways)";
 answers[6] = 2;
 units[6] = ['105'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4553. ";
 preguntaids[6] = 4553


//  Id pregunta: 4517 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes respuestas referentes a las funciones de los distintos niveles OSI es falsa?:";
 choices[7]= new Array();
 choices[7][0] = "Las aplicaciones de correo electr&oacute;nico residen en el nivel de transporte";
 choices[7][1] = "Uno de los servicios que suministra el nivel de Sesi&oacute;n es permitir a un usuario entrar en un sistema remoto a tiempo compartido";
 choices[7][2] = "El nivel de presentaci&oacute;n se encarga del cifrado de la informaci&oacute;n por t&eacute;cnicas criptogr&aacute;ficas";
 choices[7][3] = "Las funciones del nivel de aplicaci&oacute;n est&aacute;n determinadas por los requerimientos de la aplicaci&oacute;n que cargue el usuario";
 answers[7] = 0;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4517. ";
 preguntaids[7] = 4517


//  Id pregunta: 4689 Año de creación de pregunta: 2002
 questions[8]= "9)  El modelo para interconexi&oacute;n de sistemas abiertos (OSI) describe siete niveles. &iquest;D&oacute;nde est&aacute; situado ASN.1?:";
 choices[8]= new Array();
 choices[8][0] = "Presentaci&oacute;n";
 choices[8][1] = "Aplicaci&oacute;n";
 choices[8][2] = "Sesi&oacute;n";
 choices[8][3] = "Transporte";
 answers[8] = 0;
 units[8] = ['105'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4689. ";
 preguntaids[8] = 4689


//  Id pregunta: 1841 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre el modelo de capas OSI:";
 choices[9]= new Array();
 choices[9][0] = "La capa de enlace se encarga de determinar los enlaces por donde enviar los paquetes.";
 choices[9][1] = "La capa de sesi&oacute;n est&aacute; por encima de la capa de presentaci&oacute;n.";
 choices[9][2] = "El nivel que realiza la funci&oacute;n de obtener la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el nivel 3.";
 choices[9][3] = "La compresi&oacute;n y el cifrado de los datos es una tarea de la capa de aplicaci&oacute;n.";
 answers[9] = 2;
 units[9] = ['105'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1841. ";
 preguntaids[9] = 1841


//  Id pregunta: 1749 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique cu&aacute;l de los siguientes conceptos se corresponde con una primitiva de servicio entre niveles del modelo OSI:";
 choices[10]= new Array();
 choices[10][0] = "RECEIVE";
 choices[10][1] = "INDICATION";
 choices[10][2] = "SEND";
 choices[10][3] = "ECHO";
 answers[10] = 1;
 units[10] = ['105'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1749. ";
 preguntaids[10] = 1749


//  Id pregunta: 4523 Año de creación de pregunta: 2002
 questions[11]= "12)  Dentro del modelo OSI la funci&oacute;n de 'compatibilizaci&oacute;n de ficheros de distintos formatos', corresponde al nivel:";
 choices[11]= new Array();
 choices[11][0] = "Nivel de red";
 choices[11][1] = "Nivel de transporte";
 choices[11][2] = "Nivel de sesi&oacute;n";
 choices[11][3] = "Nivel de presentaci&oacute;n";
 answers[11] = 3;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4523. ";
 preguntaids[11] = 4523


//  Id pregunta: 1845 Año de creación de pregunta: 2016
 questions[12]= "13)  Los equipos Bluetooth emplean:";
 choices[12]= new Array();
 choices[12][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[12][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencia.";
 choices[12][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[12][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[12] = 1;
 units[12] = ['105'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1845. ";
 preguntaids[12] = 1845


//  Id pregunta: 2651 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;En qu&eacute; base num&eacute;rica el n&uacute;mero 6B7 se corresponde con el n&uacute;mero 1003 en decimal?";
 choices[13]= new Array();
 choices[13][0] = "en base 13.";
 choices[13][1] = "en base 7.";
 choices[13][2] = "en base 11.";
 choices[13][3] = "en base 12.";
 answers[13] = 3;
 units[13] = ['105'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 2651. ";
 preguntaids[13] = 2651


//  Id pregunta: 4453 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;A qu&eacute; nivel ISO-OSI operan los bridges (puentes)?:";
 choices[14]= new Array();
 choices[14][0] = "A nivel f&iacute;sico";
 choices[14][1] = "A nivel de red";
 choices[14][2] = "A nivel de enlace";
 choices[14][3] = "A nivel de transporte";
 answers[14] = 2;
 units[14] = ['105'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4453. ";
 preguntaids[14] = 4453


//  Id pregunta: 4678 Año de creación de pregunta: 2002
 questions[15]= "16)  Dentro del modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se denominan primitivas a:";
 choices[15]= new Array();
 choices[15][0] = "Los servicios que al nivel inferior proporciona al nivel superior";
 choices[15][1] = "La interacci&oacute;n entre niveles adyacentes";
 choices[15][2] = "Los puntos de acceso al servicio";
 choices[15][3] = "Los multiples identificadores de conexi&oacute;n";
 answers[15] = 0;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4678. ";
 preguntaids[15] = 4678


//  Id pregunta: 4497 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[16]= new Array();
 choices[16][0] = "SMTP-X.400";
 choices[16][1] = "TELNET-VT";
 choices[16][2] = "FTAM-FTP";
 choices[16][3] = "X.500-SNMP";
 answers[16] = 3;
 units[16] = ['105'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4497. ";
 preguntaids[16] = 4497


//  Id pregunta: 4733 Año de creación de pregunta: 2002
 questions[17]= "18)  El proceso de multiplexaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Permite a dispositivos ejecutar diferentes aplicaciones software al mismo tiempo";
 choices[17][1] = "Interconecta m&uacute;ltiples redes que usan diferentes medio f&iacute;sico de enlace";
 choices[17][2] = "Permite que la informaci&oacute;n de encaminamiento (routing) de diferentes protocolos se intercambie y se use para actualizar las tablas de encaminamiento";
 choices[17][3] = "Permite que datos de fuentes diferentes sean transmitidos simult&aacute;neamente sobre un &uacute;nico enlace";
 answers[17] = 3;
 units[17] = ['104', '105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4733. ";
 preguntaids[17] = 4733


//  Id pregunta: 4558 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es protocolo OSI de nivel de aplicaci&oacute;n?:";
 choices[18]= new Array();
 choices[18][0] = "Transferencia de ficheros FTAM";
 choices[18][1] = "Correo electr&oacute;nico X.400";
 choices[18][2] = "Servicios de Directorio X.500";
 choices[18][3] = "Transferencia de correo electr&oacute;nico SMTP";
 answers[18] = 3;
 units[18] = ['105'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4558. SMTP es protocolo del nivel de aplicaci&oacute;n del modelo TCP/IP";
 preguntaids[18] = 4558


//  Id pregunta: 4530 Año de creación de pregunta: 2002
 questions[19]= "20)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar testigos para que las dos partes de un protocolo no utilicen la misma operaci&oacute;n al mismo tiempo', corresponde al nivel:";
 choices[19]= new Array();
 choices[19][0] = "Presentaci&oacute;n";
 choices[19][1] = "Transporte";
 choices[19][2] = "Sesi&oacute;n";
 choices[19][3] = "Red";
 answers[19] = 2;
 units[19] = ['105'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4530. ";
 preguntaids[19] = 4530


//  Id pregunta: 4597 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes es verdadera en relaci&oacute;n con las funciones de conexi&oacute;n del modelo OSI?";
 choices[20]= new Array();
 choices[20][0] = "El multiplexado es la conexi&oacute;n de varias conexiones de nivel N en una conexi&oacute;n de nivel N-1";
 choices[20][1] = "La concatenaci&oacute;n consiste en unir varias N-PDU en una (N-1)PDU";
 choices[20][2] = "La segmentaci&oacute;n consiste en dividir una N-SDU en varias (N-1)SDU";
 choices[20][3] = "El reensamblado es la operaci&oacute;n contraria a la concatenaci&oacute;n";
 answers[20] = 0;
 units[20] = ['105'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4597. ";
 preguntaids[20] = 4597


//  Id pregunta: 4688 Año de creación de pregunta: 2002
 questions[21]= "22)  El modelo OSI (Open System Interconnection, Interconexi&oacute;n de Sistemas Abiertos):";
 choices[21]= new Array();
 choices[21][0] = "Dispone de 5 niveles: f&iacute;sico, enlace, red, transporte, aplicaci&oacute;n, usuario";
 choices[21][1] = "Dispone de 7 niveles: f&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n, aplicaci&oacute;n";
 choices[21][2] = "No fue pensado en su momento para comunicaci&oacute;n cliente-servidor, sino m&aacute;s bien comunicaci&oacute;n peer- to-peer";
 choices[21][3] = "Las opciones c) y b) son correctas";
 answers[21] = 3;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4688. ";
 preguntaids[21] = 4688


//  Id pregunta: 4522 Año de creación de pregunta: 2002
 questions[22]= "23)  Dentro del modelo de referencia OSI, &iquest;cu&aacute;l es el componente de los procesos de aplicaci&oacute;n que se encarga de ejecutar los protocolos de nivel de aplicaci&oacute;n, y de proporcionar los elementos de servicio del nivel de aplicaci&oacute;n?:";
 choices[22]= new Array();
 choices[22][0] = "La entidad de aplicaci&oacute;n";
 choices[22][1] = "Los CASEs (Common Aplication Service Elements)";
 choices[22][2] = "Los SASEs (Specific Aplication Service Elements)";
 choices[22][3] = "El stack de comunicaciones";
 answers[22] = 0;
 units[22] = ['105'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4522. ";
 preguntaids[22] = 4522


//  Id pregunta: 4702 Año de creación de pregunta: 2002
 questions[23]= "24)  El orden consecutivo de las capas definidas en OSI, es:";
 choices[23]= new Array();
 choices[23][0] = "F&iacute;sico, enlace, red, transporte, presentaci&oacute;n y aplicaci&oacute;n";
 choices[23][1] = "F&iacute;sico, enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[23][2] = "F&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[23][3] = "Enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 answers[23] = 2;
 units[23] = ['105'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4702. ";
 preguntaids[23] = 4702


//  Id pregunta: 4302 Año de creación de pregunta: 2004
 questions[24]= "25)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[24]= new Array();
 choices[24][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[24][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[24][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[24][3] = "No";
 answers[24] = 0;
 units[24] = ['105', '109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4302. Similar a examen TIC SS A 2003";
 preguntaids[24] = 4302


//  Id pregunta: 4451 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;A qu&eacute; nivel de OSI es equivalente el protocolo IP (Internet Protocol)?:";
 choices[25]= new Array();
 choices[25][0] = "Enlace";
 choices[25][1] = "Red";
 choices[25][2] = "Transporte";
 choices[25][3] = "Comunicaci&oacute;n";
 answers[25] = 1;
 units[25] = ['105'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4451. ";
 preguntaids[25] = 4451


//  Id pregunta: 4527 Año de creación de pregunta: 2002
 questions[26]= "27)  Dentro del modelo OSI la funci&oacute;n de 'permitir a un usuario entrar en un sistema remoto a tiempo compartido, o transferir ficheros entre dos m&aacute;quinas', corresponde al nivel:";
 choices[26]= new Array();
 choices[26][0] = "Nivel de red";
 choices[26][1] = "Nivel de transporte";
 choices[26][2] = "Nivel de sesi&oacute;n";
 choices[26][3] = "Nivel de presentaci&oacute;n";
 answers[26] = 2;
 units[26] = ['105'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4527. ";
 preguntaids[26] = 4527


//  Id pregunta: 4531 Año de creación de pregunta: 2002
 questions[27]= "28)  Dentro del modelo OSI, podemos afirmar que:";
 choices[27]= new Array();
 choices[27][0] = "El nivel 2 no hay control de flujo";
 choices[27][1] = "El nivel 3 se enfrenta a problemas de encaminamiento";
 choices[27][2] = "El nivel 4 se encarga de los problemas de interconexi&oacute;n de redes";
 choices[27][3] = "En el nivel 5 se tratan los aspectos sint&aacute;ctico y sem&aacute;ntico de la informaci&oacute;n";
 answers[27] = 1;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4531. ";
 preguntaids[27] = 4531


//  Id pregunta: 4743 Año de creación de pregunta: 2002
 questions[28]= "29)  El protocolo en que est&aacute;n basados los niveles inferiores del modelo OSI de la ISO es:";
 choices[28]= new Array();
 choices[28][0] = "SDLC";
 choices[28][1] = "EBCDIC";
 choices[28][2] = "HDLC";
 choices[28][3] = "X.400";
 answers[28] = 2;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4743. ";
 preguntaids[28] = 4743


//  Id pregunta: 1732 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos de gesti&oacute;n de redes est&aacute; basado en el modelo de referencia OSI de ISO:";
 choices[29]= new Array();
 choices[29][0] = "CMIP";
 choices[29][1] = "SNMP";
 choices[29][2] = "SGMP";
 choices[29][3] = "TL-1";
 answers[29] = 0;
 units[29] = ['105'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1732. ";
 preguntaids[29] = 1732


//  Id pregunta: 4529 Año de creación de pregunta: 2002
 questions[30]= "31)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar puntos de chequeo que permita reiniciar la transmisi&oacute;n a partir del punto m&aacute;s cercano al posible fallo y no desde el principio', corresponde al nivel:";
 choices[30]= new Array();
 choices[30][0] = "Nivel de red";
 choices[30][1] = "Nivel de transporte";
 choices[30][2] = "Nivel de sesi&oacute;n";
 choices[30][3] = "Nivel de presentaci&oacute;n";
 answers[30] = 2;
 units[30] = ['105'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4529. ";
 preguntaids[30] = 4529


//  Id pregunta: 2035 Año de creación de pregunta: 2002
 questions[31]= "32)  En el sistema internacional de medidas se usan una serie de prefijos para las unidades. A continuaci&oacute;n se presentan algunos de ellos. &iquest;Podr&iacute;a indicar cu&aacute;l es el orden correcto de menor a mayor?";
 choices[31]= new Array();
 choices[31][0] = "Kilo-Mega-Giga-Tera-Exa-Peta.";
 choices[31][1] = "Kilo-Giga-Mega-Tera-Exa-Peta.";
 choices[31][2] = "Kilo-Mega-Giga-Peta-Exa-Tera.";
 choices[31][3] = "Kilo-Mega-Giga-Tera-Peta-Exa.";
 answers[31] = 3;
 units[31] = ['105'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 2035. ";
 preguntaids[31] = 2035


//  Id pregunta: 4694 Año de creación de pregunta: 2002
 questions[32]= "33)  El nivel de enlace del modelo OSI tiene como funci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Enrutar los datos";
 choices[32][1] = "Conectar sistemas no enlazados directamente";
 choices[32][2] = "Transmitir informaci&oacute;n entre nodos conectados entre si directamente";
 choices[32][3] = "Mantener la integridad de los datos entre extremos de la red";
 answers[32] = 2;
 units[32] = ['105'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4694. ";
 preguntaids[32] = 4694


//  Id pregunta: 2855 Año de creación de pregunta: 2002
 questions[33]= "34)  En un desplazamiento c&iacute;clico a la izquierda de un bit, el contenido de &quot;100101&quot; se modifica en:";
 choices[33]= new Array();
 choices[33][0] = "&ldquo;110010&rdquo;.";
 choices[33][1] = "&quot;1010&rdquo;.";
 choices[33][2] = "&ldquo;110011&rdquo;.";
 choices[33][3] = "&ldquo;1011&rdquo;.";
 answers[33] = 3;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 2855. ";
 preguntaids[33] = 2855


//  Id pregunta: 4693 Año de creación de pregunta: 2002
 questions[34]= "35)  El nivel de enlace del modelo de referencia OSI:";
 choices[34]= new Array();
 choices[34][0] = "Determina cu&aacute;ntos y por donde son enviados los paquetes desde la fuente al destino";
 choices[34][1] = "Resuelve los problemas planteados por la falta de fiabilidad de los circuitos";
 choices[34][2] = "Se mantiene a la escucha por si el emisor env&iacute;a alg&uacute;n mensaje. Posteriormente determina cu&aacute;l es el destinatario del mismo";
 choices[34][3] = "Se asegura de que todos los caminos posibles entre el emisor y el receptor est&aacute;n operativos";
 answers[34] = 1;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4693. ";
 preguntaids[34] = 4693


//  Id pregunta: 4713 Año de creación de pregunta: 2002
 questions[35]= "36)  Funciones t&iacute;picas del nivel de sesi&oacute;n son:";
 choices[35]= new Array();
 choices[35][0] = "sincronizaci&oacute;n y control del testigo de datos";
 choices[35][1] = "presentaci&oacute;n y criptograf&iacute;a";
 choices[35][2] = "control de flujo y errores";
 choices[35][3] = "todas las anteriores";
 answers[35] = 0;
 units[35] = ['105'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4713. ";
 preguntaids[35] = 4713


//  Id pregunta: 1129 Año de creación de pregunta: 2016
 questions[36]= "37)  La unidad de datos intercambiada en la capa de transporte, seg&uacute;n el modelo OSI de ISO, es:";
 choices[36]= new Array();
 choices[36][0] = "TPDU.";
 choices[36][1] = "Paquete.";
 choices[36][2] = "Trama.";
 choices[36][3] = "TCDU.";
 answers[36] = 0;
 units[36] = ['105'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1129. ";
 preguntaids[36] = 1129


//  Id pregunta: 4486 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo OSI de ISO?";
 choices[37]= new Array();
 choices[37][0] = "El modelo no especifica relaci&oacute;n de ning&uacute;n tipo ni con lenguajes de programaci&oacute;n ni con sistemas operativos";
 choices[37][1] = "El modelo no contempla aspectos relativos a los interfaces de la aplicaci&oacute;n ni a los usuarios";
 choices[37][2] = "El modelo describe el comportamiento externo y la estructura interna de los sistemas";
 choices[37][3] = "Todas las respuestas anteriores son falsas";
 answers[37] = 2;
 units[37] = ['105'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4486. ";
 preguntaids[37] = 4486


//  Id pregunta: 4579 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Cu&aacute;les son los servicios que proporciona el nivel de transporte (4 de OSI) al nivel de sesi&oacute;n (5 de OSI)?:";
 choices[38]= new Array();
 choices[38][0] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos e indicaci&oacute;n de calidad del servicio";
 choices[38][1] = "Transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[38][2] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[38][3] = "Control de calidad del servicio, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 answers[38] = 1;
 units[38] = ['105'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4579. ";
 preguntaids[38] = 4579


//  Id pregunta: 4695 Año de creación de pregunta: 2002
 questions[39]= "40)  El nivel de sesi&oacute;n del modelo de referencia OSI :";
 choices[39]= new Array();
 choices[39][0] = "Permite a un usuario que la sintaxis y la sem&aacute;ntica del mensaje sea entendida por el destinatario";
 choices[39][1] = "Se encarga de coordinar aplicaciones como el correo electr&oacute;nico o la transferencia de documentos";
 choices[39][2] = "Permite a un usuario entrar en un sistema remoto y, si es necesario, transferir ficheros entre dichos sistemas";
 choices[39][3] = "Asegura que todos los fragmentos del mensaje lleguen a su destino";
 answers[39] = 2;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4695. ";
 preguntaids[39] = 4695


//  Id pregunta: 4691 Año de creación de pregunta: 2002
 questions[40]= "41)  El nivel 5 de OSI:";
 choices[40]= new Array();
 choices[40][0] = "Tiene como principal funci&oacute;n el control de la subred de comunicaciones";
 choices[40][1] = "Tiene como objetivo el ofrecer un servicio para que dos entidades puedan organizar y sincronizar su di&aacute;logo";
 choices[40][2] = "Realiza funciones de encaminamiento de la informaci&oacute;n";
 choices[40][3] = "Se subdivide en dos subniveles (LLC y MAC)";
 answers[40] = 1;
 units[40] = ['105'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4691. ";
 preguntaids[40] = 4691


//  Id pregunta: 2757 Año de creación de pregunta: 2002
 questions[41]= "42)  El interfaz socket:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo es aplicable a TCP/IP";
 choices[41][1] = "S&oacute;lo es aplicable a UNIX";
 choices[41][2] = "Es el &uacute;nico modelo en Unix para acceder a TCP/IP";
 choices[41][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[41] = 3;
 units[41] = ['105'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 2757. ";
 preguntaids[41] = 2757


//  Id pregunta: 4495 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto de los protocolos de gesti&oacute;n de red SNMP y CMIP/CMIS no es cierta?:";
 choices[42]= new Array();
 choices[42][0] = "CMIS/CMIP soporta una arquitectura de objetos (entidades gestionables) m&aacute;s complejos que SNMP";
 choices[42][1] = "CMIS/CMIP contiene las especificaciones para el uso de protocolos SNMP sobre redes OSI mediante la norma CMOT";
 choices[42][2] = "Las aplicaciones de gesti&oacute;n de red basadas en protocolos SNMP est&aacute;n mucho m&aacute;s extendidas en el mercado que las basadas en CMIP";
 choices[42][3] = "CMIS/CMIP es desarrollo conjunto de CCITT e ISO, mientras que SNMP es producto de IETF";
 answers[42] = 1;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4495. ";
 preguntaids[42] = 4495


//  Id pregunta: 880 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[43]= new Array();
 choices[43][0] = "Nivel 7 - MPLS.";
 choices[43][1] = "Nivel 3 - RARP.";
 choices[43][2] = "Nivel 2 - HDLC.";
 choices[43][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[43] = 2;
 units[43] = ['105'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 880. AGE A1 2015";
 preguntaids[43] = 880


//  Id pregunta: 4317 Año de creación de pregunta: 2004
 questions[44]= "45)  Dentro de la capa OSI, la funci&oacute;n de cifrado de datos se realiza en el nivel de:";
 choices[44]= new Array();
 choices[44][0] = "Red";
 choices[44][1] = "Transporte";
 choices[44][2] = "Sesi&oacute;n";
 choices[44][3] = "Presentaci&oacute;n";
 answers[44] = 3;
 units[44] = ['105'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4317. Similar a examen TIC SS A 2003";
 preguntaids[44] = 4317


//  Id pregunta: 4560 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un protocolo del nivel de aplicaci&oacute;n del modelo OSI?:";
 choices[45]= new Array();
 choices[45][0] = "X.400";
 choices[45][1] = "FTAM";
 choices[45][2] = "X.500";
 choices[45][3] = "X.25";
 answers[45] = 3;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4560. X.25 no pertenece al modelo OSI";
 preguntaids[45] = 4560


//  Id pregunta: 4524 Año de creación de pregunta: 2002
 questions[46]= "47)  Dentro del modelo OSI la funci&oacute;n de 'compresi&oacute;n de mensajes', corresponde al nivel:";
 choices[46]= new Array();
 choices[46][0] = "Nivel de red";
 choices[46][1] = "Nivel de transporte";
 choices[46][2] = "Nivel de sesi&oacute;n";
 choices[46][3] = "Nivel de presentaci&oacute;n";
 answers[46] = 3;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4524. ";
 preguntaids[46] = 4524


//  Id pregunta: 4619 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Qu&eacute; nivel del modelo OSI subdividen los subniveles LLC y MAC especificados por el IEEE?:";
 choices[47]= new Array();
 choices[47][0] = "El nivel f&iacute;sico";
 choices[47][1] = "El nivel de enlace";
 choices[47][2] = "El nivel de red";
 choices[47][3] = "El nivel de transporte";
 answers[47] = 1;
 units[47] = ['105'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4619. ";
 preguntaids[47] = 4619


//  Id pregunta: 4478 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a alguno de los principios en virtud de los cuales se han definido siete niveles en el Modelo de Referencia OSI?:";
 choices[48]= new Array();
 choices[48][0] = "Definir un n&uacute;mero de capas muy elevado, de modo que la tarea de integrar las capas no sea m&aacute;s dif&iacute;cil de lo estrictamente necesario";
 choices[48][1] = "Crear niveles separados para aquellas funciones que son manifiestamente diferentes por raz&oacute;n del proceso realizado y de la tecnolog&iacute;a involucrada";
 choices[48][2] = "Crear una nueva capa siempre que exista necesidad de fragmentar de nuevo los datos en PDUs de menor tama&ntilde;o para de este modo optimizar el uso de la red";
 choices[48][3] = "Crear una nueva capa siempre que exista necesidad de un nuevo tipo de aplicaci&oacute;n final entre sistemas";
 answers[48] = 1;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4478. ";
 preguntaids[48] = 4478


//  Id pregunta: 4528 Año de creación de pregunta: 2002
 questions[49]= "50)  Dentro del modelo OSI la funci&oacute;n de 'permitir la comunicaci&oacute;n simult&aacute;nea, utilizando una o varias direcciones de red, de una o varias sesiones de trabajo', corresponde al nivel:";
 choices[49]= new Array();
 choices[49][0] = "Nivel de red";
 choices[49][1] = "Nivel de transporte";
 choices[49][2] = "Nivel de sesi&oacute;n";
 choices[49][3] = "Nivel de presentaci&oacute;n";
 answers[49] = 1;
 units[49] = ['105'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4528. ";
 preguntaids[49] = 4528


//  Id pregunta: 4494 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones referidas al modelo de referencia de interconexi&oacute;n de sistemas abiertos de ISO es err&oacute;nea?:";
 choices[50]= new Array();
 choices[50][0] = "El nivel de presentaci&oacute;n da servicios al nivel de aplicaci&oacute;n y solicita revisi&oacute;n a trav&eacute;s de primitivas al nivel de sesi&oacute;n";
 choices[50][1] = "El bloque de transporte est&aacute; formado por los niveles f&iacute;sico, enlace, red y transporte";
 choices[50][2] = "El protocolo de nivel de presentaci&oacute;n regula el di&aacute;logo entre dos entes de nivel 5";
 choices[50][3] = "El nivel de red da servicio al nivel de transporte y solicita servicios del nivel enlace";
 answers[50] = 2;
 units[50] = ['105'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4494. Los tres niveles inferiores (f&iacute;sico, de enlace, de red) constituyen el bloque de transmisi&oacute;n. (depenndientes de la red de conmutaci&oacute;n) y los tres superiores est&aacute;n orientados a la aplicaci&oacute;n (funciones de comunicaci&oacute;n)";
 preguntaids[50] = 4494


//  Id pregunta: 881 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Aplicaci&oacute;n";
 choices[51][1] = "Sesi&oacute;n";
 choices[51][2] = "Presentaci&oacute;n";
 choices[51][3] = "Transporte";
 answers[51] = 2;
 units[51] = ['105'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 881. AGE A1 2015";
 preguntaids[51] = 881


//  Id pregunta: 4322 Año de creación de pregunta: 2004
 questions[52]= "53)  &iquest;Cu&aacute;l es el primer nivel OSI en el que se produce comunicaci&oacute;n extremo-extremo?";
 choices[52]= new Array();
 choices[52][0] = "Red";
 choices[52][1] = "Transporte";
 choices[52][2] = "Sesi&oacute;n";
 choices[52][3] = "Presentaci&oacute;n";
 answers[52] = 1;
 units[52] = ['105'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4322. Similar a examen TIC SS A 2003";
 preguntaids[52] = 4322


//  Id pregunta: 4679 Año de creación de pregunta: 2002
 questions[53]= "54)  Dentro del Modelo de Referencia OSI para la interconexi&oacute;n de sistemas abiertos:";
 choices[53]= new Array();
 choices[53][0] = "El formato de datos corresponde al nivel 6";
 choices[53][1] = "El enrutamiento de paquetes corresponde al nivel 4";
 choices[53][2] = "La multiplexaci&oacute;n de conexiones corresponde al nivel 2";
 choices[53][3] = "Todas las anteriores son ciertas";
 answers[53] = 0;
 units[53] = ['105'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4679. ";
 preguntaids[53] = 4679


//  Id pregunta: 4454 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;A qu&eacute; nivel OSI corresponden las funciones de encaminamiento?:";
 choices[54]= new Array();
 choices[54][0] = "El nivel de enlace";
 choices[54][1] = "El nivel de red";
 choices[54][2] = "El nivel de transporte";
 choices[54][3] = "El nivel de sesi&oacute;n";
 answers[54] = 1;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4454. ";
 preguntaids[54] = 4454


//  Id pregunta: 4696 Año de creación de pregunta: 2002
 questions[55]= "56)  El nivel de transporte de modelo OSI gestiona funciones como:";
 choices[55]= new Array();
 choices[55][0] = "Direccionamiento f&iacute;sico, secuenciamiento de tramas, control de flujo y notificaci&oacute;n de errores";
 choices[55][1] = "Compresi&oacute;n y encriptaci&oacute;n de datos";
 choices[55][2] = "Control de flujo, multiplexaci&oacute;n y gesti&oacute;n de errores";
 choices[55][3] = "Identificaci&oacute;n de los corresponsales y sincronizaci&oacute;n de la comunicaci&oacute;n";
 answers[55] = 2;
 units[55] = ['105'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4696. ";
 preguntaids[55] = 4696


//  Id pregunta: 4496 Año de creación de pregunta: 2002
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el modelo OSI, es falsa?";
 choices[56]= new Array();
 choices[56][0] = "Un SAP es un recurso a trav&eacute;s del cual una entidad de nivel N+1 accede a los servicios de nivel N";
 choices[56][1] = "Una entidad N+1 s&oacute;lo puede estar conectada a un SAP";
 choices[56][2] = "Las entidades conectadas a trav&eacute;s de un SAP deben residir en el mismo subsistema";
 choices[56][3] = "Una direcci&oacute;n de SAP identifica a un &uacute;nico SAP";
 answers[56] = 1;
 units[56] = ['105'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4496. ";
 preguntaids[56] = 4496


//  Id pregunta: 4345 Año de creación de pregunta: 2004
 questions[57]= "58)  El subnivel de control de acceso al medio, MAC se encuentra encuadrado dentro del nivel?";
 choices[57]= new Array();
 choices[57][0] = "Enlace";
 choices[57][1] = "F&iacute;sico";
 choices[57][2] = "Red";
 choices[57][3] = "ninguna de las anteriores";
 answers[57] = 0;
 units[57] = ['105'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4345. Examen Julio 2003";
 preguntaids[57] = 4345


//  Id pregunta: 4738 Año de creación de pregunta: 2002
 questions[58]= "59)  El protocolo de comunicaciones denominado HDLC, es un protocolo orientado a:";
 choices[58]= new Array();
 choices[58][0] = "Car&aacute;cter, de modos: ARM, ABM y SRM";
 choices[58][1] = "Bit , de modos: ARM, ABM y SRM";
 choices[58][2] = "Car&aacute;cter, con cadencia secuencial";
 choices[58][3] = "Bit, con cadencia secuencial";
 answers[58] = 1;
 units[58] = ['105'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4738. ";
 preguntaids[58] = 4738


//  Id pregunta: 4506 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes funciones corresponder&iacute;an al nivel de red en el Modelo de referencia OSI?:";
 choices[59]= new Array();
 choices[59][0] = "Compartici&oacute;n de circuito f&iacute;sico";
 choices[59][1] = "Establecimiento de varias comunicaciones simult&aacute;neas";
 choices[59][2] = "Cifrado de datos";
 choices[59][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[59] = 3;
 units[59] = ['105'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4506. ";
 preguntaids[59] = 4506


//  Id pregunta: 4628 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Qu&eacute; se entiende por &quot;punto de sincronizaci&oacute;n principal&quot;?:";
 choices[60]= new Array();
 choices[60][0] = "En el nivel de red, se trata de nodos de cada subred encargados de sincronizar las comunicaciones que pasan por ellos";
 choices[60][1] = "En el nivel de enlace, son lugares de acceso a primitivas de servicio para control de flujo";
 choices[60][2] = "En el nivel de transporte, son puntos de sincronizaci&oacute;n de inicio y fin de una conexi&oacute;n";
 choices[60][3] = "En el nivel de sesi&oacute;n, son puntos que estructuran la transferencia de datos dividi&eacute;ndola en unidades de di&aacute;logo separadas";
 answers[60] = 3;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4628. ";
 preguntaids[60] = 4628


//  Id pregunta: 4742 Año de creación de pregunta: 2002
 questions[61]= "62)  El protocolo del stack TCP/IP que define el acceso interactivo a un ordenador remoto es:";
 choices[61]= new Array();
 choices[61][0] = "FTP";
 choices[61][1] = "WAIS";
 choices[61][2] = "Telnet";
 choices[61][3] = "Mail";
 answers[61] = 2;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4742. ";
 preguntaids[61] = 4742


//  Id pregunta: 4498 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes capas del modelo OSI se encarga de establecer puntos intermedios de sincronizaci&oacute;n para evitar p&eacute;rdida de informaci&oacute;n en caso de ca&iacute;das de la comunicaci&oacute;n?:";
 choices[62]= new Array();
 choices[62][0] = "La capa de enlace";
 choices[62][1] = "La capa de red";
 choices[62][2] = "La capa de transporte";
 choices[62][3] = "La capa de sesi&oacute;n";
 answers[62] = 3;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4498. ";
 preguntaids[62] = 4498


//  Id pregunta: 4697 Año de creación de pregunta: 2002
 questions[63]= "64)  El nivel encargado de la correcci&oacute;n definitiva de errores de comunicaci&oacute;n en el modelo de referencia OSI es:";
 choices[63]= new Array();
 choices[63][0] = "Sesi&oacute;n";
 choices[63][1] = "Red";
 choices[63][2] = "Transporte";
 choices[63][3] = "Enlace";
 answers[63] = 2;
 units[63] = ['105'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4697. ";
 preguntaids[63] = 4697


//  Id pregunta: 4705 Año de creación de pregunta: 2002
 questions[64]= "65)  Entre las unidades de datos intercambiadas entre niveles pares y adyacentes del Modelo de Referencia OSI, cu&aacute;l de las siguientes combinaciones es cierta:";
 choices[64]= new Array();
 choices[64][0] = "PDU + PCI = SDU";
 choices[64][1] = "IDU + ICI = SDU";
 choices[64][2] = "SDU + PCI = PDU";
 choices[64][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[64] = 2;
 units[64] = ['105'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4705. ";
 preguntaids[64] = 4705


//  Id pregunta: 4468 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Cu&aacute; de los siguientes no es un servicio del nivel de enlace de datos del modelo de referencia OSI?:";
 choices[65]= new Array();
 choices[65][0] = "Establecimiento y liberaci&oacute;n de un enlace de datos";
 choices[65][1] = "Control de la transmisi&oacute;n y recuperaci&oacute;n de fallos";
 choices[65][2] = "Gesti&oacute;n del propio nivel";
 choices[65][3] = "Identificaci&oacute;n de circuitos de datos";
 answers[65] = 3;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4468. ";
 preguntaids[65] = 4468


//  Id pregunta: 4431 Año de creación de pregunta: 2002
 questions[66]= "67)  Podemos definir protocolo como:";
 choices[66]= new Array();
 choices[66][0] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n entre entidades heterog&eacute;neas, tanto en la transmisi&oacute;n como en el control y recuperaci&oacute;n de errores";
 choices[66][1] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n entre entidades homog&eacute;neas";
 choices[66][2] = "Conjunto de reglas responsables de la comunicaci&oacute;n directa entre 2 sistemas a trav&eacute;s del medio f&iacute;sico que los mantiene conectados";
 choices[66][3] = "Conjunto de reglas que permiten identificar de forma &uacute;nica e inequ&iacute;voca a un nodo o host";
 answers[66] = 1;
 units[66] = ['105'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4431. Seg&uacute;n el modelo OSI un protocolo establece reglas organizadas y convenidas entre entidades pares (horizontal)";
 preguntaids[66] = 4431


//  Id pregunta: 4507 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al nivel de transporte?:";
 choices[67]= new Array();
 choices[67][0] = "Dividir en fragmentos mas peque&ntilde;os la informaci&oacute;n que acepta del nivel de sesi&oacute;n, y pasarlos al nivel de red";
 choices[67][1] = "Asegurar el trasvase de informaci&oacute;n entre los 2 extremos de la comunicaci&oacute;n";
 choices[67][2] = "Permitir la comunicaci&oacute;n simult&aacute;nea de varias sesiones de trabajo";
 choices[67][3] = "Transportar la informaci&oacute;n entre nodos de conmutaci&oacute;n conectados directamente entre si";
 answers[67] = 3;
 units[67] = ['105'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4507. ";
 preguntaids[67] = 4507


//  Id pregunta: 4455 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;A qu&eacute; nivel OSI hace referencia la norma RS-232-C?:";
 choices[68]= new Array();
 choices[68][0] = "Nivel 3";
 choices[68][1] = "Nivel 2";
 choices[68][2] = "Nivel 1";
 choices[68][3] = "No se puede identificar con ninguno de los niveles OSI ya que no est&aacute; reconocido como est&aacute;ndar &lsquo;de jure&rsquo;";
 answers[68] = 2;
 units[68] = ['105'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4455. ";
 preguntaids[68] = 4455


//  Id pregunta: 4571 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;l es la funci&oacute;n que tiene la capa de presentaci&oacute;n (Presentation Layer) en la arquitectura de protocolos ISO de OSI?:";
 choices[69]= new Array();
 choices[69][0] = "Presentar la informaci&oacute;n al usuario final";
 choices[69][1] = "Ocuparse de las distintas representaciones de la informaci&oacute;n en distintas m&aacute;quinas, de tal forma que el significado sea el mismo aunque las representaciones sean diferentes";
 choices[69][2] = "Presentar la informaci&oacute;n a la red estableciendo puntos de sincronismo intermedios para evitar p&eacute;rdidas de informaci&oacute;n en caso de caidas de la red";
 choices[69][3] = "Todas las anteriores son funciones de la capa de sesi&oacute;n";
 answers[69] = 1;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4571. ";
 preguntaids[69] = 4571


//  Id pregunta: 4526 Año de creación de pregunta: 2002
 questions[70]= "71)  Dentro del modelo OSI la funci&oacute;n de 'mantener la secuencialidad de la informaci&oacute;n', corresponde al nivel:";
 choices[70]= new Array();
 choices[70][0] = "Nivel de red";
 choices[70][1] = "Nivel de transporte";
 choices[70][2] = "Nivel de sesi&oacute;n";
 choices[70][3] = "Nivel de presentaci&oacute;n";
 answers[70] = 0;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4526. ";
 preguntaids[70] = 4526


//  Id pregunta: 4606 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Qu&eacute; es FTAM (File Transfer Access and Management)?:";
 choices[71]= new Array();
 choices[71][0] = "Un protocolo del nivel de presentaci&oacute;n para gesti&oacute;n de ficheros";
 choices[71][1] = "Una aplicaci&oacute;n para transferencia y compartici&oacute;n de archivos";
 choices[71][2] = "Una aplicaci&oacute;n para emulaci&oacute;n de terminales remotos";
 choices[71][3] = "Un protocolo de la capa TCP/IP para compartir archivos";
 answers[71] = 1;
 units[71] = ['105'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4606. ";
 preguntaids[71] = 4606


//  Id pregunta: 4692 Año de creación de pregunta: 2002
 questions[72]= "73)  El nivel 6 del modelo OSI es:";
 choices[72]= new Array();
 choices[72][0] = "Transporte";
 choices[72][1] = "Presentaci&oacute;n";
 choices[72][2] = "Sesi&oacute;n";
 choices[72][3] = "Aplicaci&oacute;n";
 answers[72] = 1;
 units[72] = ['105'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4692. ";
 preguntaids[72] = 4692


//  Id pregunta: 4508 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes funciones no es propia de los protocolos de nivel de enlace?:";
 choices[73]= new Array();
 choices[73][0] = "Control de flujo";
 choices[73][1] = "Sincronizacion y entramado";
 choices[73][2] = "Control de los canales l&oacute;gicos";
 choices[73][3] = "Recuperaci&oacute;n de errores";
 answers[73] = 2;
 units[73] = ['105'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4508. ";
 preguntaids[73] = 4508


//  Id pregunta: 4351 Año de creación de pregunta: 2004
 questions[74]= "75)  &iquest;Cu&aacute;s de los siguientes servicios no proporciona el nivel de aplicaci&oacute;n en el modelo OSI de ISO?";
 choices[74]= new Array();
 choices[74][0] = "Determinaci&oacute;n de la calidad de servicio aceptable";
 choices[74][1] = "Acuerdo sobre los mecanismos de privacidad";
 choices[74][2] = "Reglas gramaticales para representaci&oacute;n de los datos y est&aacute;ndares acordados  para obtener  informaci&oacute;n entendible entre sistemas (ASCII, EDIC, ASN.1 )";
 choices[74][3] = "Selecci&oacute;n de la disciplina de di&aacute;logo, incluyendo los procedimientos de iniciaci&oacute;n y liberaci&oacute;n";
 answers[74] = 2;
 units[74] = ['105'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4351. Es la capa de presentaci&oacute;n la que se encarga de la sintaxis";
 preguntaids[74] = 4351


