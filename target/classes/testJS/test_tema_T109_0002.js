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
//  Id pregunta: 5012 Año de creación de pregunta: 2002
 questions[0]= "1)  Para aplicaciones de media streaming es m&aacute;s adecuado:";
 choices[0]= new Array();
 choices[0][0] = "UDP";
 choices[0][1] = "TCP";
 choices[0][2] = "tanto TCP como UDP son adecuados ya que proporcionan un nivel de transporte a la aplicaci&oacute;n de video";
 choices[0][3] = "ni TCP ni UDP son adecuados ya que no garantizan la velocidad adecuada suficiente";
 answers[0] = 0;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5012. ";
 preguntaids[0] = 5012


//  Id pregunta: 4432 Año de creación de pregunta: 2002
 questions[1]= "2)  Se dice que una l&iacute;nea es 'full duplex' cuando:";
 choices[1]= new Array();
 choices[1][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea tienen que usarla de forma alternativa en cada sentido de transmisi&oacute;n";
 choices[1][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea pueden transmitir simult&aacute;neamente sin restricciones";
 choices[1][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[1][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 answers[1] = 1;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4432. ";
 preguntaids[1] = 4432


//  Id pregunta: 4565 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece al nivel de aplicaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "Telnet";
 choices[2][1] = "FTP";
 choices[2][2] = "SMTP";
 choices[2][3] = "RIP";
 answers[2] = 3;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4565. ";
 preguntaids[2] = 4565


//  Id pregunta: 4423 Año de creación de pregunta: 2002
 questions[3]= "4)  La introducci&oacute;n de redundancias en un c&oacute;digo de representaci&oacute;n, por ejemplo la introducci&oacute;n de un bit de paridad (par o impar), se hace para:";
 choices[3]= new Array();
 choices[3][0] = "Detectar posibles errores en la transmisi&oacute;n de la informaci&oacute;n";
 choices[3][1] = "Aumentar la eficacia del c&oacute;digo";
 choices[3][2] = "Aumentar el n&uacute;mero de datos susceptibles de representaci&oacute;n";
 choices[3][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[3] = 0;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4423. ";
 preguntaids[3] = 4423


//  Id pregunta: 5145 Año de creación de pregunta: 2004
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es falsa?";
 choices[4]= new Array();
 choices[4][0] = "La longitud de la cabecera de los paquetes no es fija";
 choices[4][1] = "Usa direcciones de 128 bits";
 choices[4][2] = "Soporte intr&iacute;nseco de seguridad (Ipsec)";
 choices[4][3] = "Soporte de autoconfiguraci&oacute;n (los hosts determinan su direcci&oacute;n de manera autom&aacute;tica)";
 answers[4] = 0;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5145. ";
 preguntaids[4] = 5145


//  Id pregunta: 5370 Año de creación de pregunta: 2006
 questions[5]= "6)  Respecto al protocolo IP es falso que";
 choices[5]= new Array();
 choices[5][0] = "En IPv6 las direcciones anycast tienen un rango de numeraci&oacute;n diferenciado";
 choices[5][1] = "IPv4 permite priorizaci&oacute;n de tr&aacute;fico";
 choices[5][2] = "IPv6 permite la asignaci&oacute;n de direcciones multicast permanentes";
 choices[5][3] = "Se puede transmitir IPv6 sobre redes IPv4";
 answers[5] = 0;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5370. ";
 preguntaids[5] = 5370


//  Id pregunta: 4367 Año de creación de pregunta: 2004
 questions[6]= "7)  Dentro de la familia de protocolos TCP/IP hay algunos que se definen como no fiables en el sentido de que no aseguran la recepci&oacute;n final en el equipo destinatario de la informaci&oacute;n. De los siguientes indique cu&aacute;l es un protocolo fiable:";
 choices[6]= new Array();
 choices[6][0] = "IP";
 choices[6][1] = "UDP";
 choices[6][2] = "TCP";
 choices[6][3] = "FDDI";
 answers[6] = 2;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4367. ";
 preguntaids[6] = 4367


//  Id pregunta: 5200 Año de creación de pregunta: 2006
 questions[7]= "8)  Se&ntilde;ale la respuesta falsa:";
 choices[7]= new Array();
 choices[7][0] = "ICMP es un protocolo de nivel 3.";
 choices[7][1] = "TCP es orientado a conexi&oacute;n y no confirmado.";
 choices[7][2] = "UDP es no orientado a conexi&oacute;n";
 choices[7][3] = "La cabecera de IPv4 tiene un campo de offset de 1.5 bytes.";
 answers[7] = 1;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5200. ";
 preguntaids[7] = 5200


//  Id pregunta: 4665 Año de creación de pregunta: 2002
 questions[8]= "9)  De las siguientes funciones, &iquest;cu&aacute;l no es propia del protocolo de nivel de red?:";
 choices[8]= new Array();
 choices[8][0] = "Conmutaci&oacute;n";
 choices[8][1] = "Encaminamiento";
 choices[8][2] = "Multiplexaci&oacute;n";
 choices[8][3] = "Tarificaci&oacute;n";
 answers[8] = 3;
 units[8] = ['109'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4665. ";
 preguntaids[8] = 4665


//  Id pregunta: 4399 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Para qu&eacute; se utiliza el entrelazado de bits en la transmisi&oacute;n de informaci&oacute;n?";
 choices[9]= new Array();
 choices[9][0] = "para proporcionar una sencilla manera de cifrado y conseguir la confidencialidad";
 choices[9][1] = "para evitar que fallos de transmisi&oacute;n afecten a bits consecutivos y se pierda informaci&oacute;n";
 choices[9][2] = "para obtener un c&oacute;digo de redundancia c&iacute;clica que prevenga de errores en recepci&oacute;n";
 choices[9][3] = "Adem&aacute;s de evitar los fallos de transmisi&oacute;n (los llamados errores de r&aacute;faga) evita que se introduzca una mayor latencia en el sistema agilizando la comunicaci&oacute;n";
 answers[9] = 1;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4399. La principal desventaja del entrelazado es que introduce latencia al sistema, ya que tenemos que esperar a la recepci&oacute;n de todos los bits del mensaje para poder desentrelazar y emplear las t&eacute;cnicas de correcci&oacute;n de errores";
 preguntaids[9] = 4399


//  Id pregunta: 5248 Año de creación de pregunta: 2006
 questions[10]= "11)  Que sentido tiene pasar de IPv4 a IPV6";
 choices[10]= new Array();
 choices[10][0] = "El principal motivo es aumentar el ancho de banda";
 choices[10][1] = "Los nodos de internet cambiar&aacute;n a este protocolo el 1 de enero de 2014";
 choices[10][2] = "IPv6 permite un uso optimo de las tecnolog&iacute;as wireless";
 choices[10][3] = "Ninguna de las anteriores es correcta";
 answers[10] = 3;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5248. ";
 preguntaids[10] = 5248


//  Id pregunta: 4474 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de las respuestas siguientes es verdadera sobre las direcciones disponibles en clases A, B y C en redes IP?:";
 choices[11]= new Array();
 choices[11][0] = "El n&uacute;mero de direcciones para sistemas por red decrece de redes clase A a las de clase C";
 choices[11][1] = "El n&uacute;mero de direcciones disponibles para redes decrece de las de clases A a las de clase C";
 choices[11][2] = "Las direcciones de clase C son adecuadas para organizaciones muy grandes, mientras que las de clase B son m&aacute;s adecuadas para compa&ntilde;ias peque&ntilde;as";
 choices[11][3] = "El rango de direcciones A es num&eacute;ricamente el mayor mientras que las de clase C es numericamente el menor";
 answers[11] = 0;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4474. ";
 preguntaids[11] = 4474


//  Id pregunta: 4682 Año de creación de pregunta: 2002
 questions[12]= "13)  El hacer subredes (subnetting) en redes IP permite:";
 choices[12]= new Array();
 choices[12][0] = "Un esquema de direccionamiento jer&aacute;rquico que mejora la flexibilidad de la red";
 choices[12][1] = "Al administrador de la red, obtener m&aacute;s direcciones de una direcci&oacute;n dada IP";
 choices[12][2] = "Que el 'mundo exterior' conozca mejor la estructura interna de nuestra red";
 choices[12][3] = "Que nuestra red pueda formar parte del www";
 answers[12] = 0;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4682. ";
 preguntaids[12] = 4682


//  Id pregunta: 4719 Año de creación de pregunta: 2002
 questions[13]= "14)  ICMP es:";
 choices[13]= new Array();
 choices[13][0] = "un protocolo de intercambio de correos electr&oacute;nicos";
 choices[13][1] = "un protocolo de gesti&oacute;n de internet";
 choices[13][2] = "un protocolo de mensajes para el control de internet";
 choices[13][3] = "ninguno de los anteriores";
 answers[13] = 2;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4719. ";
 preguntaids[13] = 4719


//  Id pregunta: 4728 Año de creación de pregunta: 2002
 questions[14]= "15)  Indicar la respuesta verdadera respecto a la pila de protocolos TCP/IP:";
 choices[14]= new Array();
 choices[14][0] = "NNTP usa UDP";
 choices[14][1] = "NTP utiliza &uacute;nicamente TCP";
 choices[14][2] = "FTP utiliza TCP";
 choices[14][3] = "NTP no es necesario en un entorno multihost";
 answers[14] = 2;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4728. ";
 preguntaids[14] = 4728


//  Id pregunta: 4773 Año de creación de pregunta: 2002
 questions[15]= "16)  El uso de un sistema de intercambio electr&oacute;nico de datos (EDI):";
 choices[15]= new Array();
 choices[15][0] = "Exige la utilizaci&oacute;n de redes con una velocidad de transmisi&oacute;n media-alta";
 choices[15][1] = "Requiere la adquisici&oacute;n de un sistema propietario de correo electr&oacute;nico para la transferencia de informaci&oacute;n";
 choices[15][2] = "Permite el libre intercambio de texto, voz e imagen";
 choices[15][3] = "Constituye en s&iacute; mismo un entorno normalizado de intercambio de mensajes mediante un convenio";
 answers[15] = 3;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4773. ";
 preguntaids[15] = 4773


//  Id pregunta: 5096 Año de creación de pregunta: 2004
 questions[16]= "17)  Cu&aacute;l no es una caracter&iacute;stica de IPv6";
 choices[16]= new Array();
 choices[16][0] = "Tama&ntilde;o de paquete m&aacute;ximo de 64 Kb";
 choices[16][1] = "Soporte para autenticaci&oacute;n y privacidad";
 choices[16][2] = "Aumenta el tama&ntilde;o de las tablas de enrutado";
 choices[16][3] = "Elimina el checksum del paquete";
 answers[16] = 2;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5096. ";
 preguntaids[16] = 5096


//  Id pregunta: 4753 Año de creación de pregunta: 2002
 questions[17]= "18)  El protocolo TCP (Transmisi&oacute;n Control Protocol):";
 choices[17]= new Array();
 choices[17][0] = "Es orientado a conexi&oacute;n y bidireccional";
 choices[17][1] = "Es orientado a conexi&oacute;n, pero no bidireccional";
 choices[17][2] = "Es no orientado a conexi&oacute;n y bidireccional";
 choices[17][3] = "Es no orientado a conexi&oacute;n, y no bidireccional";
 answers[17] = 0;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4753. ";
 preguntaids[17] = 4753


//  Id pregunta: 4472 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;l de estas afirmaciones es verdadera respecto a TCP/IP?:";
 choices[18]= new Array();
 choices[18][0] = "TCP tiene el mismo formato de mensaje que IP";
 choices[18][1] = "UDP no es un protocolo TCP/IP";
 choices[18][2] = "Para que TCP/IP funcione es necesario disponer de un interfaz Ethernet";
 choices[18][3] = "Una m&aacute;quina con varias tarjetas de red tiene varias direcciones Internet";
 answers[18] = 3;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4472. ";
 preguntaids[18] = 4472


//  Id pregunta: 4514 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes respuestas define el formato de la trama en Ethernet V2?:";
 choices[19]= new Array();
 choices[19][0] = "CRC, longitud trama, direcci&oacute;n origen, direcci&oacute;n destino, datos";
 choices[19][1] = "Pre&aacute;mbulo, tipo trama, direcci&oacute;n origen, direcci&oacute;n destino, datos y CRC";
 choices[19][2] = "Pre&aacute;mbulo, direcci&oacute;n destino, direcci&oacute;n origen, tipo trama, datos y CRC";
 choices[19][3] = "Pre&aacute;mbulo, direcci&oacute;n origen, direcci&oacute;n destino, longitud trama, datos y CRC";
 answers[19] = 2;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4514. ";
 preguntaids[19] = 4514


//  Id pregunta: 4644 Año de creación de pregunta: 2002
 questions[20]= "21)  Al est&aacute;ndar de facto para la programaci&oacute;n de aplicaciones que se comunican entre ellos usando un interfaz TCP/IP se le denomina:";
 choices[20]= new Array();
 choices[20][0] = "pipes";
 choices[20][1] = "sockets";
 choices[20][2] = "sem&aacute;foros";
 choices[20][3] = "ninguno de los anteriores";
 answers[20] = 1;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4644. ";
 preguntaids[20] = 4644


//  Id pregunta: 4551 Año de creación de pregunta: 2002
 questions[21]= "22)  El est&aacute;ndar IEEE que suministra una descripci&oacute;n de los procedimientos del protocolo a nivel de enlace en una red de &aacute;rea local para la transferencia de datos y su control entre cualquier pareja de puntos de acceso al servicio es:";
 choices[21]= new Array();
 choices[21][0] = "802.1";
 choices[21][1] = "802.2";
 choices[21][2] = "802.1";
 choices[21][3] = "802.12";
 answers[21] = 1;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4551. ";
 preguntaids[21] = 4551


//  Id pregunta: 5198 Año de creación de pregunta: 2006
 questions[22]= "23)  En el protocolo IPV6 las direcciones son de:";
 choices[22]= new Array();
 choices[22][0] = "16 bits";
 choices[22][1] = "16 bytes";
 choices[22][2] = "32 bits";
 choices[22][3] = "32 bytes";
 answers[22] = 1;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5198. ";
 preguntaids[22] = 5198


//  Id pregunta: 5201 Año de creación de pregunta: 2006
 questions[23]= "24)  &iquest;Qu&eacute; es falso sobre IPv6?";
 choices[23]= new Array();
 choices[23][0] = "::1 es la direcci&oacute;n de loopback.";
 choices[23][1] = "Las cabeceras de extensi&oacute;n no son examinadas ni procesadas por ning&uacute;n nodo a lo largo de la ruta de entrega de un paquete, excepto la de Opciones de Salto a Salto.";
 choices[23][2] = "El campo de la cabecera denominado &quot;cabecera siguiente&quot; utiliza los mismos valores que el campo &quot;protocolo&quot; de IPv4";
 choices[23][3] = "Todas son verdaderas.";
 answers[23] = 3;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5201. ";
 preguntaids[23] = 5201


//  Id pregunta: 4607 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Qu&eacute; es la MTU en un paquete IP?:";
 choices[24]= new Array();
 choices[24][0] = "El m&aacute;ximo uso de transmisi&oacute;n";
 choices[24][1] = "La mayor unidad posible de datos que puede ser enviada a trav&eacute;s de un medio f&iacute;sico";
 choices[24][2] = "El tama&ntilde;o del paquete IP";
 choices[24][3] = "Solo se utiliza en IPv6";
 answers[24] = 1;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4607. ";
 preguntaids[24] = 4607


//  Id pregunta: 4363 Año de creación de pregunta: 2004
 questions[25]= "26)  De los siguientes n&uacute;meros de puertos TCP y UDP indicar la falsa:";
 choices[25]= new Array();
 choices[25][0] = "21 para FTP";
 choices[25][1] = "23 para TELNET";
 choices[25][2] = "110 para POP3";
 choices[25][3] = "80 para DNS";
 answers[25] = 3;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4363. ";
 preguntaids[25] = 4363


//  Id pregunta: 4441 Año de creación de pregunta: 2002
 questions[26]= "27)  Una transmisi&oacute;n half duplex describe:";
 choices[26]= new Array();
 choices[26][0] = "Un circuito de cuatro hilos";
 choices[26][1] = "Un cable con doble malla";
 choices[26][2] = "Una comunicaci&oacute;n alternativa en dos sentidos";
 choices[26][3] = "Todas las respuestas anteriores son ciertas";
 answers[26] = 2;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4441. ";
 preguntaids[26] = 4441


//  Id pregunta: 4433 Año de creación de pregunta: 2002
 questions[27]= "28)  Se dice que una l&iacute;nea es 'half duplex' cuando:";
 choices[27]= new Array();
 choices[27][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea pueden transmitir simult&aacute;neamente sin restricciones";
 choices[27][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 choices[27][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[27][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir de forma ininterrumpida independientemente de la actividad del otro terminal";
 answers[27] = 2;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4433. ";
 preguntaids[27] = 4433


//  Id pregunta: 4580 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Cu&aacute;ntas subredes son posibles en una red de clase C, con una m&aacute;scara de subnet de 255.255.255.224?:";
 choices[28]= new Array();
 choices[28][0] = "32";
 choices[28][1] = "30";
 choices[28][2] = "8";
 choices[28][3] = "6";
 answers[28] = 3;
 units[28] = ['109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4580. Se usa la f&oacute;rmula 2^N=Y, siendo N el n&uacute;mero de bits ocupados seg&uacute;n la m&aacute;scara, correspodientes a la asignaci&oacute;n por defecto para Host (en este caso  224=11100000 2^3=8) Pero no aplicamos subnet 0 de cara al examen, por lo que el n&uacute;mero de subredes es 8 - 2; es decir, 6";
 preguntaids[28] = 4580


//  Id pregunta: 4990 Año de creación de pregunta: 2002
 questions[29]= "30)  Los prefijos de subred de longitud arbitraria en IPv4, con notaci&oacute;n a.b.c.d/x donde x es el n&uacute;mero de bits de prefijo, son introducidos seg&uacute;n:";
 choices[29]= new Array();
 choices[29][0] = "CICR";
 choices[29][1] = "CIDR";
 choices[29][2] = "DICR";
 choices[29][3] = "DIDR";
 answers[29] = 1;
 units[29] = ['109'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4990. ";
 preguntaids[29] = 4990


//  Id pregunta: 5350 Año de creación de pregunta: 2006
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es un servicio TCP?";
 choices[30]= new Array();
 choices[30][0] = "who";
 choices[30][1] = "whois";
 choices[30][2] = "finger";
 choices[30][3] = "identd";
 answers[30] = 0;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5350. ";
 preguntaids[30] = 5350


//  Id pregunta: 4521 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguiente elementos residen en la capa de aplicaci&oacute;n de la pila TCP/IP?:";
 choices[31]= new Array();
 choices[31][0] = "TFTP";
 choices[31][1] = "FTP";
 choices[31][2] = "DNS";
 choices[31][3] = "Todos los anteriores";
 answers[31] = 3;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4521. ";
 preguntaids[31] = 4521


//  Id pregunta: 5185 Año de creación de pregunta: 2003
 questions[32]= "33)  Se&ntilde;ale que es falso respecto a IPv6";
 choices[32]= new Array();
 choices[32][0] = "La cabecera de IPv6 es menor que la de IPv4";
 choices[32][1] = "IPv6 soporte para autenticaci&oacute;n";
 choices[32][2] = "IPv6 soporte para encriptaci&oacute;n";
 choices[32][3] = "IPv6 direcciones de 16 bytes";
 answers[32] = 0;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5185. ";
 preguntaids[32] = 5185


//  Id pregunta: 4649 Año de creación de pregunta: 2002
 questions[33]= "34)  Cada cabecera de IPv6 tiene una longitud de:";
 choices[33]= new Array();
 choices[33][0] = "32 bytes";
 choices[33][1] = "36 bytes";
 choices[33][2] = "n&uacute;mero de bytes variable seg&uacute;n el tipo de cabecera";
 choices[33][3] = "40 bytes";
 answers[33] = 3;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4649. ";
 preguntaids[33] = 4649


//  Id pregunta: 4358 Año de creación de pregunta: 2004
 questions[34]= "35)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderse con su router por defecto";
 choices[34]= new Array();
 choices[34][0] = "10.2.40.64";
 choices[34][1] = "10.2.41.45";
 choices[34][2] = "10.2.40.63";
 choices[34][3] = "10.2.40.62";
 answers[34] = 3;
 units[34] = ['109'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4358. ";
 preguntaids[34] = 4358


//  Id pregunta: 5015 Año de creación de pregunta: 2002
 questions[35]= "36)  Para establecer una comunicaci&oacute;n punto a punto seg&uacute;n TCP/IP es necesario conocer:";
 choices[35]= new Array();
 choices[35][0] = "direcci&oacute;n y puerto origen";
 choices[35][1] = "direcci&oacute;n y puerto destino";
 choices[35][2] = "s&oacute;lo direcciones origen y destino";
 choices[35][3] = "las respuestas a) y b) son correctas";
 answers[35] = 3;
 units[35] = ['109'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5015. ";
 preguntaids[35] = 5015


//  Id pregunta: 4712 Año de creación de pregunta: 2002
 questions[36]= "37)  Funciones como contabilidad, enrutamiento, control de flujo, control de congesti&oacute;n o direccionamiento pertenecen al:";
 choices[36]= new Array();
 choices[36][0] = "nivel de transporte";
 choices[36][1] = "nivel de enlace";
 choices[36][2] = "nivel de red";
 choices[36][3] = "son funciones presentes en varios niveles";
 answers[36] = 3;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4712. ";
 preguntaids[36] = 4712


//  Id pregunta: 4477 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de IPv6 es correcta?:";
 choices[37]= new Array();
 choices[37][0] = "Existe una cabecera principal y cabeceras de extensi&oacute;n";
 choices[37][1] = "La cabecera se ha complicado y ha crecido bastante, al tener que incorporar algunos elementos como la seguridad y el esquema de direccionamiento extendido. El tama&ntilde;o ahora es de 64 bytes frente a los 20 bytes de IPv4";
 choices[37][2] = "Las nuevas direcciones tienen 20 bytes";
 choices[37][3] = "Todas son incorrectas";
 answers[37] = 0;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4477. ";
 preguntaids[37] = 4477


//  Id pregunta: 4651 Año de creación de pregunta: 2002
 questions[38]= "39)  Comparando las cabeceras IPv4 e IPV6:";
 choices[38]= new Array();
 choices[38][0] = "En IPv6 se mantiene el campo de checksum";
 choices[38][1] = "En IPv6 aparece nuevo el campo de versi&oacute;n";
 choices[38][2] = "El campo 'tiempo de vida' de IPv4 se transforma en el campo 'l&iacute;mite de saltos' de IPv6";
 choices[38][3] = "En IPv6 se sigue conservando como en IPv4 el campo de 'etiqueta de flujo'";
 answers[38] = 2;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4651. ";
 preguntaids[38] = 4651


//  Id pregunta: 4440 Año de creación de pregunta: 2002
 questions[39]= "40)  Una transmisi&oacute;n as&iacute;ncrona se caracteriza porque:";
 choices[39]= new Array();
 choices[39][0] = "Los caracteres se reciben a un ritmo diferente del que se transmiten";
 choices[39][1] = "El terminal receptor funciona a velocidad diferente del emisor";
 choices[39][2] = "Cada car&aacute;cter incorpora su propio sincronismo";
 choices[39][3] = "Se utilizan caracteres de sincronizaci&oacute;n sin periodicidad fija";
 answers[39] = 2;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4440. Cada caracter a ser transmitido es delimitado por un bit de informaci&oacute;n denominado de cabecera o de arranque, y uno o dos bits denominados de terminaci&oacute;n o de parada";
 preguntaids[39] = 4440


//  Id pregunta: 4566 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes protocolos reporta los problemas de entrega y encaminamiento en IP?:";
 choices[40]= new Array();
 choices[40][0] = "TCP";
 choices[40][1] = "ICMP";
 choices[40][2] = "RIP";
 choices[40][3] = "UDP";
 answers[40] = 1;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4566. ";
 preguntaids[40] = 4566


//  Id pregunta: 5324 Año de creación de pregunta: 2006
 questions[41]= "42)  Los mensajes enviados por alguien para saber qu&eacute; servicios de la red se encuentran activos se llaman";
 choices[41]= new Array();
 choices[41][0] = "robo de bits";
 choices[41][1] = "Lenguaje de descripci&oacute;n de servicios Web (WSDL)";
 choices[41][2] = "Identificador de Perfil de Servicio (SPI)";
 choices[41][3] = "escaneo de puertos";
 answers[41] = 3;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5324. ";
 preguntaids[41] = 5324


//  Id pregunta: 4583 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;ntos octetos usa la cabecera de la nueva versi&oacute;n de IP (Ipv6)?:";
 choices[42]= new Array();
 choices[42][0] = "32";
 choices[42][1] = "8";
 choices[42][2] = "12";
 choices[42][3] = "40";
 answers[42] = 3;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4583. ";
 preguntaids[42] = 4583


//  Id pregunta: 4542 Año de creación de pregunta: 2002
 questions[43]= "44)  El comando de FTP que presenta los mensajes del servidor es:";
 choices[43]= new Array();
 choices[43][0] = "Dir";
 choices[43][1] = "Pwd";
 choices[43][2] = "Verbose";
 choices[43][3] = "Lcd";
 answers[43] = 2;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4542. ";
 preguntaids[43] = 4542


//  Id pregunta: 4992 Año de creación de pregunta: 2002
 questions[44]= "45)  Los problemas principales de IPv4 que hacen necesario IPv6 son:";
 choices[44]= new Array();
 choices[44][0] = "los relativos a la escasez de direcciones";
 choices[44][1] = "los relativos al tama&ntilde;o de las tablas de encaminamiento";
 choices[44][2] = "los relativos a la calidad de servicio";
 choices[44][3] = "todos los anteriores";
 answers[44] = 3;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4992. ";
 preguntaids[44] = 4992


//  Id pregunta: 4598 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes respecto del funcionamiento de TCP/IP no es cierta?";
 choices[45]= new Array();
 choices[45][0] = "Los routers no mantienen estado de las posibles conexiones extremo a extremo, y a nivel de red no existe el concepto de conexi&oacute;n";
 choices[45][1] = "Los paquetes entre un mismo par &lt;origen, destino&gt;, una vez seleccionada la ruta adecuada, deben seguir la misma ruta hasta el final de la transmisi&oacute;n";
 choices[45][2] = "No se garantiza capacidad m&iacute;nima, ni retardo m&aacute;ximo, ni variaciones acotadas de los retardos";
 choices[45][3] = "No se garantiza la entrega ni el orden de entrega, aunque s&iacute; la integridad del segmento";
 answers[45] = 1;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4598. ";
 preguntaids[45] = 4598


//  Id pregunta: 4581 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;ntos bytes ocupa la cabecera m&iacute;nima en IPv4?";
 choices[46]= new Array();
 choices[46][0] = "16";
 choices[46][1] = "20";
 choices[46][2] = "24";
 choices[46][3] = "32";
 answers[46] = 1;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4581. ";
 preguntaids[46] = 4581


//  Id pregunta: 4567 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Cu&aacute;l es el puerto habitual usado por una conexi&oacute;n Telnet?:";
 choices[47]= new Array();
 choices[47][0] = "15";
 choices[47][1] = "21";
 choices[47][2] = "23";
 choices[47][3] = "80";
 answers[47] = 2;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4567. ";
 preguntaids[47] = 4567


//  Id pregunta: 4392 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes direcciones es v&aacute;lida para un equipo conectado y accesible directamente desde Internet?:";
 choices[48]= new Array();
 choices[48][0] = "256.198.234.12";
 choices[48][1] = "10.128.179.54";
 choices[48][2] = "192.139.234.12";
 choices[48][3] = "127.34.156.0";
 answers[48] = 2;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4392. ";
 preguntaids[48] = 4392


//  Id pregunta: 4660 Año de creación de pregunta: 2002
 questions[49]= "50)  Cuando el comando &lsquo;ping 127.0.0.1&rsquo; produce un eco correcto:";
 choices[49]= new Array();
 choices[49][0] = "Significa que la tarjeta de red del ordenador donde se ejecuta funciona correctamente";
 choices[49][1] = "Significa que la pila de protocolos TCP/IP del ordenador donde se ejecuta funciona correctamente, aunque la tarjeta de red del mismo ordenador falle";
 choices[49][2] = "El mensaje de eco incluye el n&uacute;mero de saltos entre dos ordenadores en la red IP";
 choices[49][3] = "Nada de lo anterior es correcto";
 answers[49] = 1;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4660. ";
 preguntaids[49] = 4660


//  Id pregunta: 4502 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes direcciones IPv6 es correcta?";
 choices[50]= new Array();
 choices[50][0] = ":FF56::12::13D4";
 choices[50][1] = "15::78A1:9982";
 choices[50][2] = "AAB2:12::15H3:149";
 choices[50][3] = "1234:5678:9012:3456:7890:1234:5678";
 answers[50] = 1;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4502. ";
 preguntaids[50] = 4502


//  Id pregunta: 4637 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;Sabe qu&eacute; organismo defini&oacute; el est&aacute;ndar TCP/IP?:";
 choices[51]= new Array();
 choices[51][0] = "American National Standard Institute (ANSI)";
 choices[51][1] = "Departamento de Defensa de EE.UU.";
 choices[51][2] = "International Standards Organization (ISO)";
 choices[51][3] = "Institute for Electrical and Electronic Engineers (IEEE)";
 answers[51] = 1;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4637. ";
 preguntaids[51] = 4637


//  Id pregunta: 4752 Año de creación de pregunta: 2002
 questions[52]= "53)  El protocolo TCP (Protocolo de Control de Transmisi&oacute;n) es un protocolo a nivel de transporte orientado a conexi&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Que fue desarrollado expresamente para Internet";
 choices[52][1] = "Que, al igual que el protocolo IP (Protocolo Interredes), son protocolos OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 choices[52][2] = "Que no puede interoperar con protocolos de transporte OSI";
 choices[52][3] = "Que fue dise&ntilde;ado para garantizar la fiabilidad que no ofrece el protocolo IP para establecer comunicaciones fiables entre subredes de datos";
 answers[52] = 3;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4752. ";
 preguntaids[52] = 4752


//  Id pregunta: 4666 Año de creación de pregunta: 2002
 questions[53]= "54)  De los cuatro octetos que forman una direcci&oacute;n del protocolo IP indicar en qu&eacute; clase de red se utiliza un octeto para los n&uacute;meros de host:";
 choices[53]= new Array();
 choices[53][0] = "Clase B";
 choices[53][1] = "Clase D";
 choices[53][2] = "Clase A";
 choices[53][3] = "Clase C";
 answers[53] = 3;
 units[53] = ['109'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4666. ";
 preguntaids[53] = 4666


//  Id pregunta: 4664 Año de creación de pregunta: 2002
 questions[54]= "55)  De las siguientes direcciones IP para Internet s&oacute;lo una puede asignarse de forma correcta seg&uacute;n las normas que regulan el formato de estas direcciones:";
 choices[54]= new Array();
 choices[54][0] = "1";
 choices[54][1] = "198.70.8.255";
 choices[54][2] = "64.3.53.255";
 choices[54][3] = "640.13.53.40";
 answers[54] = 2;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4664. ";
 preguntaids[54] = 4664


//  Id pregunta: 4570 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Cu&aacute;l es la funci&oacute;n principal del protocolo ICMP?:";
 choices[55]= new Array();
 choices[55][0] = "Convertir direcciones hardware en direcciones IP";
 choices[55][1] = "Convertir direcciones IP en direcciones hardware";
 choices[55][2] = "Estar orientado a la conexi&oacute;n y proporcionar una conexi&oacute;n full-duplex fiable";
 choices[55][3] = "Manejar el control de la informaci&oacute;n y de errores entre el router y el host";
 answers[55] = 3;
 units[55] = ['109'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4570. ";
 preguntaids[55] = 4570


//  Id pregunta: 5095 Año de creación de pregunta: 2004
 questions[56]= "57)  El protocolo ARP";
 choices[56]= new Array();
 choices[56][0] = "Proporciona la traducci&oacute;n entre direcci&oacute;n IP y direcci&oacute;n LAN";
 choices[56][1] = "Proporciona una conversi&oacute;n entre direcci&oacute;n LAN y direcci&oacute;n IP";
 choices[56][2] = "Se utiliza en routers y bridges";
 choices[56][3] = "A y B son correctas";
 answers[56] = 0;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5095. ";
 preguntaids[56] = 5095


//  Id pregunta: 5043 Año de creación de pregunta: 2002
 questions[57]= "58)  RTP y RTCP son protocolos que habitualmente se situan:";
 choices[57]= new Array();
 choices[57][0] = "justo encima de TCP";
 choices[57][1] = "justo encima de UDP";
 choices[57][2] = "justo debajo de TCP";
 choices[57][3] = "justo debajo de UDP";
 answers[57] = 1;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5043. ";
 preguntaids[57] = 5043


//  Id pregunta: 4359 Año de creación de pregunta: 2004
 questions[58]= "59)  Las cabeceras de extensi&oacute;n";
 choices[58]= new Array();
 choices[58][0] = "Pertenecen al protocolo ipv4";
 choices[58][1] = "Son todas obligatorias";
 choices[58][2] = "Perminten definir la ruta que siga un paquete IPv6";
 choices[58][3] = "Definen las opciones en una red Token Ring";
 answers[58] = 2;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4359. ";
 preguntaids[58] = 4359


//  Id pregunta: 4386 Año de creación de pregunta: 2004
 questions[59]= "60)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[59]= new Array();
 choices[59][0] = "La direcci&oacute;n IP no se asocia a la m&aacute;quina sino a la interfaz de red";
 choices[59][1] = "Hay 256 puertos llamados bien conocidos (well known)";
 choices[59][2] = "La direcci&oacute;n IP y el puerto determinan un socket";
 choices[59][3] = "Una aplicaci&oacute;n se identifica por un puerto";
 answers[59] = 1;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4386. SS-A 2004. Los puertos bien conocidos (well-known ports) son aquellos menores a 1024 y que se utilizan para los servicios b&aacute;sicos en Internet";
 preguntaids[59] = 4386


//  Id pregunta: 5021 Año de creación de pregunta: 2002
 questions[60]= "61)  Cu&aacute;ntos octetos usa IPv6 en el direccionamiento, considerando que IPv4 usa 4 octetos:";
 choices[60]= new Array();
 choices[60][0] = "6";
 choices[60][1] = "8";
 choices[60][2] = "14";
 choices[60][3] = "16";
 answers[60] = 3;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5021. ";
 preguntaids[60] = 5021


//  Id pregunta: 5154 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;les son los tipos de direcciones unicast especiales de IPv6?";
 choices[61]= new Array();
 choices[61][0] = "de &aacute;mbito local y de &aacute;mbito privado";
 choices[61][1] = "Loopback, inespec&iacute;fica, compatibles, mapeadas a IPv4, de &aacute;mbito local, de &aacute;mbito privado y  globales";
 choices[61][2] = "Compatibles, mapeadas a IPv4 y globales";
 choices[61][3] = "Compatibles, mapeadas a IPv4, locales y globales";
 answers[61] = 1;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5154. ";
 preguntaids[61] = 5154


//  Id pregunta: 5371 Año de creación de pregunta: 2006
 questions[62]= "63)  Respecto al protocolo IP";
 choices[62]= new Array();
 choices[62][0] = "IPv6 no permite OSPF";
 choices[62][1] = "IPv4 no permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[62][2] = "IPv6 permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[62][3] = "ninguna de las anteriores";
 answers[62] = 2;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5371. ";
 preguntaids[62] = 5371


//  Id pregunta: 4964 Año de creación de pregunta: 2002
 questions[63]= "64)  Las direcciones IPv6 tienen una longitud de:";
 choices[63]= new Array();
 choices[63][0] = "32 bits";
 choices[63][1] = "128 bits";
 choices[63][2] = "64 bits";
 choices[63][3] = "48 bits";
 answers[63] = 1;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4964. ";
 preguntaids[63] = 4964


//  Id pregunta: 5199 Año de creación de pregunta: 2006
 questions[64]= "65)  Se&ntilde;ale la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "Cuando se usa selecci&oacute;n, existe una estaci&oacute;n de control y una o varias estaciones tributarios.";
 choices[64][1] = "En la contienda todas las estaciones pueden acceder en cualquier momento al circuito.";
 choices[64][2] = "Se denomina ventana al n&uacute;mero m&aacute;ximo de tramas que en un determinado momento pueden estar pendientes de confirmaci&oacute;n.";
 choices[64][3] = "Todas son verdaderas.";
 answers[64] = 3;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5199. ";
 preguntaids[64] = 5199


//  Id pregunta: 4397 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Entre qu&eacute; niveles de la arquitectura TCP/IP se encuentra el protocolo SSL (Secure Socket Layer)?:";
 choices[65]= new Array();
 choices[65][0] = "Por encima del nivel de aplicaci&oacute;n";
 choices[65][1] = "Al mismo nivel que el nivel de aplicaci&oacute;n";
 choices[65][2] = "Entre el nivel de aplicaci&oacute;n y TCP";
 choices[65][3] = "Entre TCP e IP";
 answers[65] = 2;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4397. ";
 preguntaids[65] = 4397


//  Id pregunta: 4717 Año de creación de pregunta: 2002
 questions[66]= "67)  HDLC es un protocolo:";
 choices[66]= new Array();
 choices[66][0] = "De enlace, orientado a car&aacute;cter";
 choices[66][1] = "De enlace orientado a bit";
 choices[66][2] = "F&iacute;sico, en serie";
 choices[66][3] = "F&iacute;sico, en paralelo";
 answers[66] = 1;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4717. ";
 preguntaids[66] = 4717


//  Id pregunta: 5122 Año de creación de pregunta: 2003
 questions[67]= "68)  En la arquitectura TCP/IP, &iquest;cu&aacute;l de los siguientes protocolos no tiene estrictamente TCP/UDP en una capa m&aacute;s baja?:";
 choices[67]= new Array();
 choices[67][0] = "ICMP";
 choices[67][1] = "SNMP.";
 choices[67][2] = "SMTP.";
 choices[67][3] = "MIME.";
 answers[67] = 0;
 units[67] = ['109'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5122. Junta Andaluc&iacute;a";
 preguntaids[67] = 5122


//  Id pregunta: 4368 Año de creación de pregunta: 2004
 questions[68]= "69)  El protocolo IPv6 define un campo de direcciones de:";
 choices[68]= new Array();
 choices[68][0] = "32 bits";
 choices[68][1] = "64 bits";
 choices[68][2] = "128 bits";
 choices[68][3] = "ninguna de las anteriores";
 answers[68] = 2;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4368. ";
 preguntaids[68] = 4368


//  Id pregunta: 5057 Año de creación de pregunta: 2002
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l es el mecanismo que utiliza el protocolo IP para gesti&oacute;n de flujo:";
 choices[69]= new Array();
 choices[69][0] = "Frenado brusco con trama de control &quot;rmr&quot;";
 choices[69][1] = "Frenado brusco con trama de control &quot;wack&quot;";
 choices[69][2] = "Ventana de cr&eacute;dito de tama&ntilde;o variable";
 choices[69][3] = "El protocolo IP no realiza control de flujo";
 answers[69] = 3;
 units[69] = ['109'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5057. ";
 preguntaids[69] = 5057


//  Id pregunta: 4591 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;En qu&eacute; consiste el denominado MAC - Control de acceso al medio?:";
 choices[70]= new Array();
 choices[70][0] = "Es el protocolo de aplicaciones usado en redes punto a punto";
 choices[70][1] = "Es un mecanismo de seguridad en redes de comunicaciones para controlar el acceso a la informaci&oacute;n";
 choices[70][2] = "Es un subnivel del nivel de enlace de datos encargado de regular el acceso al medio de transmisi&oacute;n";
 choices[70][3] = "Es el mecanismo de transmisi&oacute;n espec&iacute;fico de las redes Ethernet";
 answers[70] = 2;
 units[70] = ['109'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4591. ";
 preguntaids[70] = 4591


//  Id pregunta: 4673 Año de creación de pregunta: 2002
 questions[71]= "72)  Dentro de la familia de protocolos TCP/IP, el protocolo RARP se emplea para:";
 choices[71]= new Array();
 choices[71][0] = "Establecer un protocolo de rearranque remoto que activa el demonio BOOTP";
 choices[71][1] = "Obtener la direcci&oacute;n Ethernet (48 bits) a partir de la direcci&oacute;n IP (32 bits)";
 choices[71][2] = "Obtener la direcci&oacute;n IP (32 bits) a partir de la direcci&oacute;n Ethernet (48 bits)";
 choices[71][3] = "Manejar la tabla de direcciones IP en el socket 250 de UDP";
 answers[71] = 2;
 units[71] = ['109'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4673. ";
 preguntaids[71] = 4673


//  Id pregunta: 4362 Año de creación de pregunta: 2004
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al protocolo IPv6?";
 choices[72]= new Array();
 choices[72][0] = "Maneja direcciones de 16 bytes";
 choices[72][1] = "La cabecera del protocolo se ha ampliado respecto a la de IPv4";
 choices[72][2] = "Incluye funciones de autenticaci&oacute;n";
 choices[72][3] = "Incluye funciones de encriptaciones";
 answers[72] = 1;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4362. Aunque la cabecera IPv6 tiene mayor tama&ntilde;o, los campos menos utilizados de IP v4 se han movido a OPCIONES";
 preguntaids[72] = 4362


//  Id pregunta: 4963 Año de creación de pregunta: 2002
 questions[73]= "74)  Las direcciones en IPv6 se clasifican en:";
 choices[73]= new Array();
 choices[73][0] = "unicast, multicast y broadcast";
 choices[73][1] = "unicast, anycast y broadcast";
 choices[73][2] = "unicast, anycast y multicast";
 choices[73][3] = "unicast y multicast";
 answers[73] = 2;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4963. ";
 preguntaids[73] = 4963


//  Id pregunta: 5167 Año de creación de pregunta: 2003
 questions[74]= "75)  El protocolo Internet versi&oacute;n 6 (IPv6) define un espacio de direcciones de:";
 choices[74]= new Array();
 choices[74][0] = "32 bits";
 choices[74][1] = "64 bits";
 choices[74][2] = "128 bits";
 choices[74][3] = "Ninguno de los anteriores";
 answers[74] = 2;
 units[74] = ['109'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5167. ";
 preguntaids[74] = 5167


