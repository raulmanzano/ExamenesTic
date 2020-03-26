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
//  Id pregunta: 7594 Año de creación de pregunta: 2010
 questions[0]= "1)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29. Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a la configuraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignable dentro de dicho rango?";
 choices[0]= new Array();
 choices[0][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.25.";
 choices[0][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada: 192.168.20.1.";
 choices[0][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.25.";
 choices[0][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.1.";
 answers[0] = 2;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7594. Map 2006";
 preguntaids[0] = 7594


//  Id pregunta: 5793 Año de creación de pregunta: 2007
 questions[1]= "2)  El protocolo CMIP de OSI se puede considerar el equivalente al siguiente protocolo de la familia TCP/IP:";
 choices[1]= new Array();
 choices[1][0] = "SMTP";
 choices[1][1] = "SNMP";
 choices[1][2] = "ARP";
 choices[1][3] = "HTTP";
 answers[1] = 1;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5793. ";
 preguntaids[1] = 5793


//  Id pregunta: 7390 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes opciones representa la m&aacute;scara 255.255.240.0?";
 choices[2]= new Array();
 choices[2][0] = "/20";
 choices[2][1] = "/22";
 choices[2][2] = "/24";
 choices[2][3] = "/240";
 answers[2] = 0;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 7390. Examen TIC B 2009";
 preguntaids[2] = 7390


//  Id pregunta: 5397 Año de creación de pregunta: 2006
 questions[3]= "4)  En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n";
 choices[3]= new Array();
 choices[3][0] = "El campo SYN del primer segmento TCP es igual a 0";
 choices[3][1] = "El campo SYN del primer segmento TCP es igual a 1";
 choices[3][2] = "El campo RST del primer segmento TCP es igual a 1";
 choices[3][3] = "El campo PSH del primer segmento TCP es igual a 1";
 answers[3] = 1;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5397. ";
 preguntaids[3] = 5397


//  Id pregunta: 7603 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[4]= new Array();
 choices[4][0] = "10.172.13.65";
 choices[4][1] = "172.16.223.125";
 choices[4][2] = "172.64.12.29";
 choices[4][3] = "192.168.23.252";
 answers[4] = 2;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 7603. Map 2006";
 preguntaids[4] = 7603


//  Id pregunta: 7584 Año de creación de pregunta: 2010
 questions[5]= "6)  El protocolo IPv6 Internet Protocol version 6:";
 choices[5]= new Array();
 choices[5][0] = "Tiene direcciones de red de 64 bits de longitud.";
 choices[5][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento (routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header).";
 choices[5][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menos campos. Esto hace que, por lo general, los routers (encaminadores) realicen menos procesamiento sobre los datagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente.";
 choices[5][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes.";
 answers[5] = 2;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7584. Map 2006";
 preguntaids[5] = 7584


//  Id pregunta: 7388 Año de creación de pregunta: 2010
 questions[6]= "7)  La direcci&oacute;n IPv4 172.30.120.135/12 es una direcci&oacute;n de tipo:";
 choices[6]= new Array();
 choices[6][0] = "Direcci&oacute;n de red broadcast";
 choices[6][1] = "Direcci&oacute;n de red privada";
 choices[6][2] = "Direcci&oacute;n de red de enlace local";
 choices[6][3] = "Direcci&oacute;n de red p&uacute;blica";
 answers[6] = 1;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7388. Examen TIC B 2009";
 preguntaids[6] = 7388


//  Id pregunta: 7930 Año de creación de pregunta: 2011
 questions[7]= "8)  El formato de direcci&oacute;n EUI-64 es un formato est&aacute;ndar del IEEE, que permite a un nodo autoconfigurar o asignarse autom&aacute;ticamente su propia direcci&oacute;n IPv6 de nodo, a partir de la direcci&oacute;n IEEE 802 MAC de la tarjeta de red del:";
 choices[7]= new Array();
 choices[7][0] = "Router vecino y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 choices[7][1] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/48) del router vecino al que est&aacute; conectado dicho nodo.";
 choices[7][2] = "Router vecino y del prefijo de la direcci&oacute;n de red (/48) a la que est&aacute; conectado dicho nodo.";
 choices[7][3] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 answers[7] = 3;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7930. Examen TIC A1 2010";
 preguntaids[7] = 7930


//  Id pregunta: 5935 Año de creación de pregunta: 2007
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[8]= new Array();
 choices[8][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[8][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y video";
 choices[8][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[8][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[8] = 0;
 units[8] = ['109', '122'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 5935. ";
 preguntaids[8] = 5935


//  Id pregunta: 7839 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;ntos bits utiliza el protocolo IPv6 (Internet Protocol version 6) para el campo de direcciones IP?";
 choices[9]= new Array();
 choices[9][0] = "56 bits.";
 choices[9][1] = "16 bits.";
 choices[9][2] = "32 bits.";
 choices[9][3] = "64 bits.";
 answers[9] = 3;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7839. ";
 preguntaids[9] = 7839


//  Id pregunta: 7280 Año de creación de pregunta: 2010
 questions[10]= "11)  De las siguientes afirmaciones, &iquest;cu&aacute;l es la correcta?";
 choices[10]= new Array();
 choices[10][0] = "ARP y RARP son unos protocolos de facto para transmitir datos a trav&eacute;s de Internet";
 choices[10][1] = "ARP traduce la direcci&oacute;n IP a su correspondiente direcci&oacute;n MAC";
 choices[10][2] = "ICMP traduce la direcci&oacute;n MAC a su correspondiente direcci&oacute;n IP";
 choices[10][3] = "Todas las respuestas anteriores son correctas";
 answers[10] = 1;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7280. ";
 preguntaids[10] = 7280


//  Id pregunta: 6459 Año de creación de pregunta: 2003
 questions[11]= "12)  En el protoloc IPv6, &iquest;cu&aacute;l ser&iacute;a la primera cabecera adicional despu&eacute;s de la cabecera IPv6?";
 choices[11]= new Array();
 choices[11][0] = "Cualquiera, no llevan un orden determinado";
 choices[11][1] = "Cabecera salto a salto";
 choices[11][2] = "Cabecera de autenticaci&oacute;n";
 choices[11][3] = "Cabecera de encaminamiento";
 answers[11] = 1;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6459. ";
 preguntaids[11] = 6459


//  Id pregunta: 6873 Año de creación de pregunta: 2010
 questions[12]= "13)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[12]= new Array();
 choices[12][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[12][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[12][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[12][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[12] = 1;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 6873. TIC A 2009";
 preguntaids[12] = 6873


//  Id pregunta: 7389 Año de creación de pregunta: 2010
 questions[13]= "14)  El protocolo FTP es un protocolo:";
 choices[13]= new Array();
 choices[13][0] = "Seguro";
 choices[13][1] = "No orientado a conexi&oacute;n";
 choices[13][2] = "De nivel de aplicaci&oacute;n";
 choices[13][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[13] = 2;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7389. Examen TIC B 2009";
 preguntaids[13] = 7389


//  Id pregunta: 5911 Año de creación de pregunta: 2007
 questions[14]= "15)  El protocolo IPv6 (Internet Protocol version 6):";
 choices[14]= new Array();
 choices[14][0] = "Tiene direcciones de red de 64 bits de longitud";
 choices[14][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento(routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header)";
 choices[14][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menoscampos. Esto hace que, por lo general, los routersrealicen menos procesamiento sobre losdatagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente";
 choices[14][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes";
 answers[14] = 2;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5911. ";
 preguntaids[14] = 5911


//  Id pregunta: 7812 Año de creación de pregunta: 2010
 questions[15]= "16)  En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[15]= new Array();
 choices[15][0] = "16";
 choices[15][1] = "24";
 choices[15][2] = "32";
 choices[15][3] = "64";
 answers[15] = 0;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7812. ";
 preguntaids[15] = 7812


//  Id pregunta: 7384 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Qu&eacute; valor tiene el primer n&uacute;mero de una red de clase C en internet?";
 choices[16]= new Array();
 choices[16][0] = "Menor o igual que 127";
 choices[16][1] = "Entre 192 y 223";
 choices[16][2] = "Mayor o igual que 224";
 choices[16][3] = "Entre 128 y 191";
 answers[16] = 1;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7384. Examen TIC B 2009";
 preguntaids[16] = 7384


//  Id pregunta: 5505 Año de creación de pregunta: 2007
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de comunicaciones fue originalmente concebido como el est&aacute;ndar militar MIL-STD-1778?:";
 choices[17]= new Array();
 choices[17][0] = "IEEE 802.3.";
 choices[17][1] = "IEEE 802.11b.";
 choices[17][2] = "CCITT X 25.";
 choices[17][3] = "TCP.";
 answers[17] = 3;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5505. ";
 preguntaids[17] = 5505


//  Id pregunta: 6701 Año de creación de pregunta: 2009
 questions[18]= "19)  En referencia al direccionamiento de IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes es VERDADERO:";
 choices[18]= new Array();
 choices[18][0] = "Una direcci&oacute;n IPv6 tiene la forma x:x:x:x:x:x:x:x donde cada &quot;x&quot; representa un valor en hexadecimal correspondiente a 8 bits";
 choices[18][1] = "En una direcci&oacute;n IPv6, se pueden sustituir todas las apariciones de cadenas de ceros por &quot;::&quot;";
 choices[18][2] = "Una forma alternativa de representaci&oacute;n de las direcciones en un entorno mixto de IPv4 e IPv6 es d.d.d.d:x:x:x:x:x:x donde las &quot;d&quot; son los valores decimales de los 8bits m&aacute;s significativos de la direcci&oacute;n IPv4, y las &quot;x&quot; son valores hexadecimales de los tramos menos significativos de la direcci&oacute;n IPv6";
 choices[18][3] = "La direcci&oacute;n 0:0:0:0:0:0:0:0 es conocida como &quot;unspecified address&quot;. y nunca debe ser asignada a un nodo";
 answers[18] = 3;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 6701. MAP 2008 A1";
 preguntaids[18] = 6701


//  Id pregunta: 5953 Año de creación de pregunta: 2007
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NOes cierta?";
 choices[19]= new Array();
 choices[19][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks)";
 choices[19][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada unode sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas pordicha estaci&oacute;n";
 choices[19][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast";
 choices[19][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os";
 answers[19] = 2;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5953. ";
 preguntaids[19] = 5953


//  Id pregunta: 7205 Año de creación de pregunta: 2010
 questions[20]= "21)  Respecto al direccionamiento en el protocolo TCP, se puede afirmar que:";
 choices[20]= new Array();
 choices[20][0] = "La cabecera TCP incluye las direcciones IP origen y destino";
 choices[20][1] = "La cabecera TCP incluye las direcciones origen y destino y los puertos TCP origen y destino";
 choices[20][2] = "La cabecera TPC incluye los puertos TCP origen y destino";
 choices[20][3] = "La cabecera TCP no incluye ning&uacute;n elemento asociado al direccionamiento de las conexiones del nivel de transporte";
 answers[20] = 2;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7205. Castilla La Mancha 2009";
 preguntaids[20] = 7205


//  Id pregunta: 7513 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece a la capa de aplicaci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "NFS.";
 choices[21][1] = "SMTP.";
 choices[21][2] = "RPC.";
 choices[21][3] = "UDP.";
 answers[21] = 3;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 7513. Map 2005";
 preguntaids[21] = 7513


//  Id pregunta: 6755 Año de creación de pregunta: 2009
 questions[22]= "23)  En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[22]= new Array();
 choices[22][0] = "16";
 choices[22][1] = "24";
 choices[22][2] = "32";
 choices[22][3] = "64";
 answers[22] = 0;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6755. MAP 2008 A1";
 preguntaids[22] = 6755


//  Id pregunta: 7383 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;A qu&eacute; se corresponde el RFC 793?";
 choices[23]= new Array();
 choices[23][0] = "Al protocolo FTP";
 choices[23][1] = "Al protocolo HTTP";
 choices[23][2] = "Al protocolo TCP";
 choices[23][3] = "Al protocolo IP";
 answers[23] = 2;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7383. Examen TIC B 2009";
 preguntaids[23] = 7383


//  Id pregunta: 7386 Año de creación de pregunta: 2010
 questions[24]= "25)  En el protocolo IPv6, las direcciones constan de:";
 choices[24]= new Array();
 choices[24][0] = "6 bytes";
 choices[24][1] = "8 bytes";
 choices[24][2] = "16 bytes";
 choices[24][3] = "32 bytes";
 answers[24] = 2;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7386. Examen TIC B 2009";
 preguntaids[24] = 7386


//  Id pregunta: 6222 Año de creación de pregunta: 2003
 questions[25]= "26)  En el modelo de referencia TCP/IP:";
 choices[25]= new Array();
 choices[25][0] = "No se definen las capas de sesi&oacute;n ni de aplicaci&oacute;n.";
 choices[25][1] = "No se definen las capas de red ni de sesi&oacute;n.";
 choices[25][2] = "No se definen las capas de presentaci&oacute;n ni de aplicaci&oacute;n.";
 choices[25][3] = "No se definen las capas de sesi&oacute;n ni de presentaci&oacute;n.";
 answers[25] = 3;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 6222. Examen TIC A Castilla La Mancha 2007";
 preguntaids[25] = 6222


//  Id pregunta: 6134 Año de creación de pregunta: 2003
 questions[26]= "27)  Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?:";
 choices[26]= new Array();
 choices[26][0] = "S&iacute;";
 choices[26][1] = "No";
 choices[26][2] = "Depende de la direcci&oacute;n de la Puerta de Enlace";
 choices[26][3] = "Depende de la configuraci&oacute;n del switch";
 answers[26] = 0;
 units[26] = ['105', '107', '109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 6134. Examen TIC A1 MAP 2007";
 preguntaids[26] = 6134


//  Id pregunta: 5402 Año de creación de pregunta: 2006
 questions[27]= "28)  Especifique de las siguientes normas aquella que pertenezca al nivel f&iacute;sico del modelo OSI";
 choices[27]= new Array();
 choices[27][0] = "X.214-ISO 8072";
 choices[27][1] = "RS-449";
 choices[27][2] = "X.215- ISO 8072";
 choices[27][3] = "802.3";
 answers[27] = 1;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5402. ";
 preguntaids[27] = 5402


//  Id pregunta: 7385 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 220.8.7.0/28, sin considerar las direcciones de subred y de broadcast?";
 choices[28]= new Array();
 choices[28][0] = "256";
 choices[28][1] = "254";
 choices[28][2] = "14";
 choices[28][3] = "28";
 answers[28] = 2;
 units[28] = ['109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7385. Examen TIC B 2009";
 preguntaids[28] = 7385


//  Id pregunta: 6877 Año de creación de pregunta: 2010
 questions[29]= "30)  El protocolo UDP proporciona servicios a las aplicaciones para:";
 choices[29]= new Array();
 choices[29][0] = "Controlar el flujo extremo a extremo.";
 choices[29][1] = "Eliminar paquetes duplicados.";
 choices[29][2] = "Multiplexar y demultiplexar.";
 choices[29][3] = "Reordenar paquetes.";
 answers[29] = 2;
 units[29] = ['109'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 6877. TIC A 2009";
 preguntaids[29] = 6877


//  Id pregunta: 6840 Año de creación de pregunta: 2010
 questions[30]= "31)  Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[30]= new Array();
 choices[30][0] = "La direcci&oacute;n MAC del sistema final destino.";
 choices[30][1] = "La direcci&oacute;n IP del sistema final destino.";
 choices[30][2] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destino.";
 choices[30][3] = "La direcci&oacute;n MAC del router.";
 answers[30] = 3;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6840. TIC A 2009";
 preguntaids[30] = 6840


//  Id pregunta: 5791 Año de creación de pregunta: 2007
 questions[31]= "32)  Dentro del protocolo de Ia capa de transporte TCP (Transmision Control Protocol&quot;), &iquest;cu&aacute;l de las siguientes primitivas no es de solicitud de servicio?:";
 choices[31]= new Array();
 choices[31][0] = "Active open";
 choices[31][1] = "Send";
 choices[31][2] = "Open success";
 choices[31][3] = "Allocate";
 answers[31] = 2;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5791. ";
 preguntaids[31] = 5791


//  Id pregunta: 5586 Año de creación de pregunta: 2007
 questions[32]= "33)  Un protocolo de comunicaci&oacute;n es:";
 choices[32]= new Array();
 choices[32][0] = "conjunto de reglas que gobiernan el formato de intercambio de mensajes entre niveles OSI de un mismo sistema.";
 choices[32][1] = "El conjunto de reglas que gobiernan c&oacute;mo va a proceder la comunicaci&oacute;n entre entidades pares de distintos sistemas.";
 choices[32][2] = "El conjunto de elementos f&iacute;sicos y l&oacute;gicos que relacionan dos niveles adyacentes de un sistema.";
 choices[32][3] = "Conjunto de primitivas y par&aacute;metros que concretan los servicios que se proporcionan a trav&eacute;s de la interfaz.";
 answers[32] = 1;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5586. ";
 preguntaids[32] = 5586


//  Id pregunta: 6056 Año de creación de pregunta: 2003
 questions[33]= "34)  Elena es una funcionaria que gracias a las nuevas medidas de conciliaci&oacute;n de la vida familiar y laboral trabajadesde su casa (teletrabajo) acudiendo al Ministerio puntualmente. Elena se conecta diariamente por Internet alhost ministerial, cuya direcci&oacute;n IP es 60.47.112.6. El ordenador cliente de Elena ayer ten&iacute;a la direcci&oacute;n IP192.168.0.3. Hoy se ha conectado de nuevo, y sin embargo su direcci&oacute;n IP es 192.168.0.2. Esto ocurre porque:";
 choices[33]= new Array();
 choices[33][0] = "El proveedor de acceso a Internet que utiliza Elena tiene un servidor DHCP (Dinamic Host ConfigurationProtocol) que asigna a Elena una direcci&oacute;n temporal en cada sesi&oacute;n.";
 choices[33][1] = "El proveedor de acceso a Internet que utiliza Elena utiliza un protocolo UTP que disminuye la direcci&oacute;n de losclientes en un octeto cada vez.";
 choices[33][2] = "Elena ha cambiado su tarjeta de acceso Ethernet de una con direcci&oacute;n A1-BD-33-6E-C7-BB a otra con direcci&oacute;nA1-BD-33-6E-C7-BA.";
 choices[33][3] = "Elena est&aacute; utilizando una conexi&oacute;n Wifi.";
 answers[33] = 0;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 6056. TIC B 2007";
 preguntaids[33] = 6056


//  Id pregunta: 5399 Año de creación de pregunta: 2006
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece a la capa de aplicaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "NFS";
 choices[34][1] = "SMTP";
 choices[34][2] = "RPC";
 choices[34][3] = "UDP";
 answers[34] = 3;
 units[34] = ['109'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5399. ";
 preguntaids[34] = 5399


//  Id pregunta: 7285 Año de creación de pregunta: 2010
 questions[35]= "36)  El protocolo IP";
 choices[35]= new Array();
 choices[35][0] = "Define el datagrama";
 choices[35][1] = "Define el esquema de direccionamiento";
 choices[35][2] = "Se corresponde aproximadamente con la capa 3 dentro del modelo OSI";
 choices[35][3] = "Todas las respuestas anteriores son correctas";
 answers[35] = 3;
 units[35] = ['109'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7285. ";
 preguntaids[35] = 7285


//  Id pregunta: 7837 Año de creación de pregunta: 2010
 questions[36]= "37)  En referencia al direccionamiento de IPv6 definido en el RFC 4291, indique cu&aacute;l de los apartados siguientes es VERDADERO:";
 choices[36]= new Array();
 choices[36][0] = "Una direcci&oacute;n IPv6 tiene la forma x:x:x:x:x:x:x:x donde cada &laquo;x&raquo; representa un valor en hexadecimal correspondiente a 8 bits.";
 choices[36][1] = "En una direcci&oacute;n IPv6, se pueden sustituir todas las apariciones de cadenas de ceros por &laquo;::&raquo;.";
 choices[36][2] = "Una forma alternativa de representaci&oacute;n de las direcciones en un entorno mixto de IPv4 e IPv6 es d.d.d.d:x:x:x:x:x:x donde las &laquo;d&raquo; son los valores decimales de los 8 bits m&aacute;s significativos de la direcci&oacute;n IPv4, y las &laquo;x&raquo; son valores hexadecimales de los tramos menos significativos de la direcci&oacute;n IPv6.";
 choices[36][3] = "La direcci&oacute;n 0:0:0:0:0:0:0:0 es conocida como &laquo;unspecified address&raquo; y nunca debe ser asignada a un nodo.";
 answers[36] = 3;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7837. ";
 preguntaids[36] = 7837


//  Id pregunta: 7281 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[37]= new Array();
 choices[37][0] = "ICMP trabaja en la capa de enlace";
 choices[37][1] = "ICMP informa a los hosts, routers y otros dispositivos de problemas en la red";
 choices[37][2] = "ICMP es el principal componente de la utilidad ping";
 choices[37][3] = "Todas las respuestas anteriores son correctas";
 answers[37] = 0;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7281. ";
 preguntaids[37] = 7281


//  Id pregunta: 5820 Año de creación de pregunta: 2007
 questions[38]= "39)  &iquest;Cu&aacute;l de la siguientes afirmaciones es falsa?";
 choices[38]= new Array();
 choices[38][0] = "El protocolo IPv6 admite direcciones en IPv4";
 choices[38][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[38][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[38][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[38] = 1;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5820. Examen 2006 JCYL";
 preguntaids[38] = 5820


//  Id pregunta: 5691 Año de creación de pregunta: 2007
 questions[39]= "40)  El protocolo UDP (User Datagram Protocol):";
 choices[39]= new Array();
 choices[39][0] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP no orientado a conexi&oacute;n.";
 choices[39][1] = "Es un protocolo de nivel de red perteneciente a la familia de protocolos TCP/IP.";
 choices[39][2] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP orientado a conexi&oacute;n.";
 choices[39][3] = "Es el protocolo de transporte utilizado por el protocolo de aplicaci&oacute;n FTP.";
 answers[39] = 0;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5691. ";
 preguntaids[39] = 5691


//  Id pregunta: 6349 Año de creación de pregunta: 2003
 questions[40]= "41)  Cu&aacute;l de las siguientes no es una clase de servicio ATM";
 choices[40]= new Array();
 choices[40][0] = "CBR";
 choices[40][1] = "HBR";
 choices[40][2] = "UBR";
 choices[40][3] = "NRT-VBR";
 answers[40] = 1;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 6349. ";
 preguntaids[40] = 6349


//  Id pregunta: 7923 Año de creación de pregunta: 2011
 questions[41]= "42)  En el protocolo Internet Protocol versi&oacute;n 6 (IPv6), &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo se permite fragmentar en el origen.";
 choices[41][1] = "No tiene un mecanismo equivalente al del bit Don't Fragment (DF) de IPv4.";
 choices[41][2] = "Se requiere que todos los enlaces tengan un MTU de 1500 octetos o mayor.";
 choices[41][3] = "Un jumbograma es un paquete IPv6 que contiene una carga &uacute;til (payload) mayor que 65535 octetos.";
 answers[41] = 2;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7923. Examen TIC A1 2010";
 preguntaids[41] = 7923


//  Id pregunta: 7495 Año de creación de pregunta: 2010
 questions[42]= "43)  La direcci&oacute;n de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP  100.254.254.254, es:";
 choices[42]= new Array();
 choices[42][0] = "100.255.255.255.";
 choices[42][1] = "0.0.0.255.";
 choices[42][2] = "100.0.0.0.";
 choices[42][3] = "100.254.254.255.";
 answers[42] = 0;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7495. Map 2005";
 preguntaids[42] = 7495


//  Id pregunta: 5924 Año de creación de pregunta: 2007
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[43]= new Array();
 choices[43][0] = "10.172.13.65";
 choices[43][1] = "172.16.223.125";
 choices[43][2] = "172.64.12.29";
 choices[43][3] = "192.168.23.252";
 answers[43] = 2;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5924. ";
 preguntaids[43] = 5924


//  Id pregunta: 5741 Año de creación de pregunta: 2007
 questions[44]= "45)  &iquest;Cu&aacute;l es el tama&ntilde;o de cabecera en una unidad de datos del protocolo lPv6?";
 choices[44]= new Array();
 choices[44][0] = "es variable";
 choices[44][1] = "de 20 octetos";
 choices[44][2] = "de 40 octetos";
 choices[44][3] = "similar a lPv4";
 answers[44] = 2;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5741. ";
 preguntaids[44] = 5741


//  Id pregunta: 6703 Año de creación de pregunta: 2009
 questions[45]= "46)  &iquest;Cu&aacute;ntos bits utiliza el protocolo IPv6 (Internet Protocol version 6) para el campo de direcciones IP?";
 choices[45]= new Array();
 choices[45][0] = "16 bits";
 choices[45][1] = "32 bits";
 choices[45][2] = "64 bits";
 choices[45][3] = "128 bits";
 answers[45] = 3;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 6703. MAP 2008 A1";
 preguntaids[45] = 6703


//  Id pregunta: 7938 Año de creación de pregunta: 2011
 questions[46]= "47)  Dada la red 193.163.14.192/27, podemos decir que:";
 choices[46]= new Array();
 choices[46][0] = "La direcci&oacute;n de broadcast de dicha red es la 193.168.14.255.";
 choices[46][1] = "Admite hasta 30 hosts, sin contar las direcciones de identificaci&oacute;n de red y de broadcast.";
 choices[46][2] = "La direcci&oacute;n IP 193.168.14.225 pertenece a dicha red.";
 choices[46][3] = "Es una red con direccionamiento privado.";
 answers[46] = 1;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7938. Examen TIC A2 2010";
 preguntaids[46] = 7938


//  Id pregunta: 5918 Año de creación de pregunta: 2007
 questions[47]= "48)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29.Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a laconfiguraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignabledentro de dicho rango?";
 choices[47]= new Array();
 choices[47][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[47][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada:192.168.20.1";
 choices[47][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[47][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248 Puerta de enlace predeterminada:192.168.20.1";
 answers[47] = 2;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5918. ";
 preguntaids[47] = 5918


//  Id pregunta: 5373 Año de creación de pregunta: 2006
 questions[48]= "49)  Para listar las conexiones TCP/UDP abiertas en un servidor utilizo el comando";
 choices[48]= new Array();
 choices[48][0] = "ping";
 choices[48][1] = "netstat";
 choices[48][2] = "tracert o traceroute";
 choices[48][3] = "ipconfig / ifconfig";
 answers[48] = 1;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5373. ";
 preguntaids[48] = 5373


//  Id pregunta: 5436 Año de creación de pregunta: 2007
 questions[49]= "50)  Indique cu&aacute;l de las siguientes no es una direcci&oacute;n IP correcta:";
 choices[49]= new Array();
 choices[49][0] = "115.26.13.4";
 choices[49][1] = "255.3.4.5";
 choices[49][2] = "10.0.0.1";
 choices[49][3] = "0.0.0.3";
 answers[49] = 1;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5436. ";
 preguntaids[49] = 5436


//  Id pregunta: 7770 Año de creación de pregunta: 2010
 questions[50]= "51)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l se clasifica como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace:";
 choices[50]= new Array();
 choices[50][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol).";
 choices[50][1] = "IGRP (Interior Gateway Routing Protocol).";
 choices[50][2] = "OSPF (Open Shortest Path First).";
 choices[50][3] = "RIPv2 (Routing Information Protocol ver. 2";
 answers[50] = 0;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7770. ";
 preguntaids[50] = 7770


//  Id pregunta: 7824 Año de creación de pregunta: 2010
 questions[51]= "52)  Teniendo una red IP con m&aacute;scara 255.255.240.0, &iquest;cu&aacute;ntos puestos se pueden direccionar?";
 choices[51]= new Array();
 choices[51][0] = "240";
 choices[51][1] = "512";
 choices[51][2] = "1024";
 choices[51][3] = "4094";
 answers[51] = 3;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7824. ";
 preguntaids[51] = 7824


//  Id pregunta: 7391 Año de creación de pregunta: 2010
 questions[52]= "53)  El protocolo UDP:";
 choices[52]= new Array();
 choices[52][0] = "Es orientado a conexi&oacute;n";
 choices[52][1] = "Genera un flujo unidireccional";
 choices[52][2] = "Realiza el control de redundancia c&iacute;clica (CRC) de los datos";
 choices[52][3] = "Emplea, al comenzar una comunicaci&oacute;n, el mecanismo denominado Three-Weay Hand Shaking";
 answers[52] = 1;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 7391. Examen TIC B 2009";
 preguntaids[52] = 7391


//  Id pregunta: 7505 Año de creación de pregunta: 2010
 questions[53]= "54)  En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "El campo SYN del primer segmento TCP es igual a 0.";
 choices[53][1] = "El campo SYN del primer segmento TCP es igual a 1.";
 choices[53][2] = "El campo RST del primer segmento TCP es igual a 1.";
 choices[53][3] = "El campo PSH del primer segmento TCP es igual a 1.";
 answers[53] = 1;
 units[53] = ['109'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7505. Map 2005";
 preguntaids[53] = 7505


//  Id pregunta: 5790 Año de creación de pregunta: 2007
 questions[54]= "55)  Para establecer una conexi&oacute;n TCP, el emisor env&iacute;a un segmento TCP en el que:";
 choices[54]= new Array();
 choices[54][0] = "el bit CON a 1 y el bit FIN a 0";
 choices[54][1] = "el bit CON a 1 y el bit ACK a 0.";
 choices[54][2] = "el bit SYN a 1 y el bit FIN a 0";
 choices[54][3] = "el bit SYN a 1 y el bit ACK a 0.";
 answers[54] = 2;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5790. ";
 preguntaids[54] = 5790


//  Id pregunta: 7613 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 - Internet Control Message Protocol version 4?";
 choices[55]= new Array();
 choices[55][0] = "32";
 choices[55][1] = "64";
 choices[55][2] = "128";
 choices[55][3] = "256";
 answers[55] = 1;
 units[55] = ['109'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7613. Map 2006";
 preguntaids[55] = 7613


//  Id pregunta: 7575 Año de creación de pregunta: 2010
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) y UDP (User Datagram Protocol) es cierta?";
 choices[56]= new Array();
 choices[56][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores.";
 choices[56][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos.";
 choices[56][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP (Internet Protocol), que es un protocolo de red no fiable.";
 choices[56][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite.";
 answers[56] = 3;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 7575. Map 2006";
 preguntaids[56] = 7575


//  Id pregunta: 5406 Año de creación de pregunta: 2006
 questions[57]= "58)  Las SDU (Service Data Unit) son unidades de datos";
 choices[57]= new Array();
 choices[57][0] = "Que se intercambian entre entidades hom&oacute;logas";
 choices[57][1] = "Que proporcionan informaci&oacute;n de control entre niveles";
 choices[57][2] = "Correspondientes a las primitivas de comunicaci&oacute;n";
 choices[57][3] = "Que deben ser tratados por el nivel superior (N+1) de forma transparente";
 answers[57] = 3;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5406. ";
 preguntaids[57] = 5406


//  Id pregunta: 5876 Año de creación de pregunta: 2007
 questions[58]= "59)  La diferencia esencial entre TCP y UDP es";
 choices[58]= new Array();
 choices[58][0] = "A diferencia de UDP, TCP dispone de mecanismos para el control de flujo y la transmisi&oacute;n fiable de paquetes";
 choices[58][1] = "A diferencia de UDP, TCP ofrece a la capa superior el servicio de multiplexaci&oacute;n por puerto";
 choices[58][2] = "A dferencia de UDP, TCP dispone de mecanismos para detectar errores de transmisi&oacute;n";
 choices[58][3] = "Todas las anteriores son ciertas";
 answers[58] = 0;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 5876. ";
 preguntaids[58] = 5876


//  Id pregunta: 7282 Año de creación de pregunta: 2010
 questions[59]= "60)  Podemos definir ARP poisoning como";
 choices[59]= new Array();
 choices[59][0] = "Alteraci&oacute;n de la tabla ARP para que una direcci&oacute;n IP se corresponda con una MAC distinta a la que ten&iacute;a";
 choices[59][1] = "Con este ataque no se puede redirigir el tr&aacute;fico al ordenador del atacante";
 choices[59][2] = "A y B son correctas";
 choices[59][3] = "A y B son incorrectas";
 answers[59] = 0;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 7282. ";
 preguntaids[59] = 7282


//  Id pregunta: 7925 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes algoritmos de encaminamiento est&aacute; basado en el estado del enlace?:";
 choices[60]= new Array();
 choices[60][0] = "RIP versi&oacute;n 1.";
 choices[60][1] = "OSPF.";
 choices[60][2] = "BGP.";
 choices[60][3] = "RIP versi&oacute;n 2.";
 answers[60] = 1;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7925. Examen TIC A1 2010";
 preguntaids[60] = 7925


//  Id pregunta: 6350 Año de creación de pregunta: 2003
 questions[61]= "62)  Las celdas ATM";
 choices[61]= new Array();
 choices[61][0] = "Tienen un tama&ntilde;o fijo de 53 Bytes";
 choices[61][1] = "Tienen un tama&ntilde;o variable m&aacute;ximo de 53 Bytes";
 choices[61][2] = "Tienen un tama&ntilde;o fijo de 48 Bytes";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 0;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6350. ";
 preguntaids[61] = 6350


//  Id pregunta: 5407 Año de creación de pregunta: 2006
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para el protocolo TCP/IP?";
 choices[62]= new Array();
 choices[62][0] = "IP no proporciona control de errores para datos, ni sumas de comprobaci&oacute;n de cabeceras";
 choices[62][1] = "Si se pierde o da&ntilde;a alg&uacute;n datagrama durante la transmisi&oacute;n, TCP lo detecta y lo vuelve a retransmitir";
 choices[62][2] = "UDP garantiza la entrega de los datagramas y evita las duplicaciones";
 choices[62][3] = "ICMP garantiza la entrega fiable de un paquete IP";
 answers[62] = 1;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5407. IPv6 no a&ntilde;ade CHECKSUM en su cabecera. La comprobaci&oacute;n de integridad se asume asegurada por checksum de la capa de enlace y checksum de nivel superiores (as&iacute; routers no necesitan recalcular checksum cada vez que alg&uacute;n campo cabecera cambia).";
 preguntaids[62] = 5407


//  Id pregunta: 5934 Año de creación de pregunta: 2007
 questions[63]= "64)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4)?";
 choices[63]= new Array();
 choices[63][0] = "32";
 choices[63][1] = "64";
 choices[63][2] = "128";
 choices[63][3] = "256";
 answers[63] = 0;
 units[63] = ['105', '109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5934. ";
 preguntaids[63] = 5934


//  Id pregunta: 6836 Año de creación de pregunta: 2010
 questions[64]= "65)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[64]= new Array();
 choices[64][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[64][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[64][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[64][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[64] = 3;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 6836. TIC A 2009";
 preguntaids[64] = 6836


//  Id pregunta: 5584 Año de creación de pregunta: 2007
 questions[65]= "66)  &iquest;Qu&eacute; comando se utiliza para comprobar una conexi&oacute;n f&iacute;sica entre dos hosts?";
 choices[65]= new Array();
 choices[65][0] = "TPING.";
 choices[65][1] = "WINPING.";
 choices[65][2] = "TCPING.";
 choices[65][3] = "PING.";
 answers[65] = 3;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5584. ";
 preguntaids[65] = 5584


//  Id pregunta: 7286 Año de creación de pregunta: 2010
 questions[66]= "67)  IPv6";
 choices[66]= new Array();
 choices[66][0] = "Proporciona un formato de cabecera m&aacute;s complejo";
 choices[66][1] = "Proporciona la posibilidad de a&ntilde;adir extensiones pero no opciones";
 choices[66][2] = "A&ntilde;ade posibilidades para gestionar la calidad de servicios";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = 2;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7286. ";
 preguntaids[66] = 7286


//  Id pregunta: 7393 Año de creación de pregunta: 2010
 questions[67]= "68)  Seg&uacute;n la RFC 2373 correpondiente a la arquitectura de direccionamiento para IPv6. El prefijo que es usado para direcciones multidifusi&oacute;n (multicast) es";
 choices[67]= new Array();
 choices[67][0] = "3F";
 choices[67][1] = "FE";
 choices[67][2] = "FC";
 choices[67][3] = "FF";
 answers[67] = 3;
 units[67] = ['109'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 7393. Examen TIC B 2009";
 preguntaids[67] = 7393


//  Id pregunta: 7703 Año de creación de pregunta: 2010
 questions[68]= "69)  En relaci&oacute;n con las ventanas de cr&eacute;dito (de recepci&oacute;n y de env&iacute;o) que utiliza el protocolo TCP para el control de flujo, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[68]= new Array();
 choices[68][0] = "Permiten que el emisor no tenga que esperar un ACK (acknowledge) para cada segmento de datos transmitido.";
 choices[68][1] = "El tama&ntilde;o del b&uacute;fer de estas ventanas est&aacute; limitado a 4096 bytes.";
 choices[68][2] = "Impiden que se reenv&iacute;en paquetes pasado un time-out.";
 choices[68][3] = "Hace que el canal de comunicaci&oacute;n est&eacute; m&aacute;s tiempo ocupado para transmitir la misma informaci&oacute;n.";
 answers[68] = 0;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 7703. Map 2007";
 preguntaids[68] = 7703


//  Id pregunta: 5696 Año de creación de pregunta: 2007
 questions[69]= "70)  El protocolo utilizado para gestionar un dispositivo en una red TCP/IP es:";
 choices[69]= new Array();
 choices[69][0] = "RCP";
 choices[69][1] = "SNMP";
 choices[69][2] = "SMTP";
 choices[69][3] = "ICMP";
 answers[69] = 1;
 units[69] = ['109'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5696. ";
 preguntaids[69] = 5696


//  Id pregunta: 5372 Año de creación de pregunta: 2006
 questions[70]= "71)  Es falso que se pueda utilizar como protocolo interno de encaminamiento en la red de un Ministerio";
 choices[70]= new Array();
 choices[70][0] = "Tablas est&aacute;ticas";
 choices[70][1] = "RIP";
 choices[70][2] = "OSPF";
 choices[70][3] = "BGP";
 answers[70] = 3;
 units[70] = ['109'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5372. ";
 preguntaids[70] = 5372


//  Id pregunta: 5404 Año de creación de pregunta: 2006
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[71]= new Array();
 choices[71][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX &oacute; SOH al comienzo de la trama y un car&aacute;cter ETX &oacute; ETB al final de la trama";
 choices[71][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control";
 choices[71][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack";
 choices[71][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras";
 answers[71] = 2;
 units[71] = ['109'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5404. Control WACK :Wait After ACK";
 preguntaids[71] = 5404


//  Id pregunta: 5394 Año de creación de pregunta: 2006
 questions[72]= "73)  La direcci&oacute;n de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP 100.254.254.254 es";
 choices[72]= new Array();
 choices[72][0] = "100,255,255,255";
 choices[72][1] = "0.0.0.255";
 choices[72][2] = "100.0.0.0";
 choices[72][3] = "100,254,254,255";
 answers[72] = 0;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5394. ";
 preguntaids[72] = 5394


//  Id pregunta: 6859 Año de creación de pregunta: 2010
 questions[73]= "74)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[73]= new Array();
 choices[73][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[73][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[73][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[73][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[73] = 3;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 6859. TIC A 2009";
 preguntaids[73] = 6859


//  Id pregunta: 7826 Año de creación de pregunta: 2010
 questions[74]= "75)  En referencia al direccionamiento IPv6 definido en el RFC 4291, indique cu&aacute;l de los apartados siguientes no se corresponde con un tipo de direcciones en IPv6:";
 choices[74]= new Array();
 choices[74][0] = "Unicast.";
 choices[74][1] = "Multicast.";
 choices[74][2] = "Anycast.";
 choices[74][3] = "Broadcast.";
 answers[74] = 3;
 units[74] = ['109'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 7826. ";
 preguntaids[74] = 7826


