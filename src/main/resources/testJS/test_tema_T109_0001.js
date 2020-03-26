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
//  Id pregunta: 1907 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[0]= new Array();
 choices[0][0] = "La direcci&oacute;n MAC del Router";
 choices[0][1] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destine";
 choices[0][2] = "La direcci&oacute;n IP del sistema final destine";
 choices[0][3] = "La direcci&oacute;n MAC del sistema final destino";
 answers[0] = 0;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1907. ";
 preguntaids[0] = 1907


//  Id pregunta: 1468 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;En el segmento TCP cu&aacute;ntos bits ocupa el campo &quot;reserved&quot;?";
 choices[1]= new Array();
 choices[1][0] = "6";
 choices[1][1] = "8";
 choices[1][2] = "4";
 choices[1][3] = "12";
 answers[1] = 2;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1468. ";
 preguntaids[1] = 1468


//  Id pregunta: 1389 Año de creación de pregunta: 2016
 questions[2]= "3)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; mascara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[2]= new Array();
 choices[2][0] = "Mascara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[2][1] = "Mascara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[2][2] = "Mascara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[2][3] = "Mascara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[2] = 0;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1389. ";
 preguntaids[2] = 1389


//  Id pregunta: 896 Año de creación de pregunta: 2016
 questions[3]= "4)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[3]= new Array();
 choices[3][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[3][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[3][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[3][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[3] = 0;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 896. Junta de Extremadura A1 2015";
 preguntaids[3] = 896


//  Id pregunta: 4308 Año de creación de pregunta: 2004
 questions[4]= "5)  &iquest;Qu&eacute; m&aacute;scara habr&iacute;a que aplicar para crear 8 subredes en una red de clase A?";
 choices[4]= new Array();
 choices[4][0] = "255.240.0.0";
 choices[4][1] = "255.192.0.0";
 choices[4][2] = "255.0.0.0";
 choices[4][3] = "2";
 answers[4] = 0;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4308. Similar a examen TIC MAP A 2004. Con esa m&aacute;scara tendriamos hasta 14 subredes. Se aplica la formula  2N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";
 preguntaids[4] = 4308


//  Id pregunta: 4339 Año de creación de pregunta: 2004
 questions[5]= "6)  Dada la m&aacute;scara de red 255.240.0.0, &iquest;Cu&aacute;nta subredes ser&iacute;a posible incluir dentro de una red tipo A?";
 choices[5]= new Array();
 choices[5][0] = "Ninguna";
 choices[5][1] = "16";
 choices[5][2] = "14";
 choices[5][3] = "8";
 answers[5] = 2;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4339. Se aplica la formula  2^N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";
 preguntaids[5] = 4339


//  Id pregunta: 4318 Año de creación de pregunta: 2004
 questions[6]= "7)  &iquest;Qu&eacute; no permite IP V6?";
 choices[6]= new Array();
 choices[6][0] = "Autenticaci&oacute;n";
 choices[6][1] = "Garantia de no repudio";
 choices[6][2] = "Cifrado";
 choices[6][3] = "Integridad";
 answers[6] = 1;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4318. Similar a examen TIC SS A 2003";
 preguntaids[6] = 4318


//  Id pregunta: 894 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; t&eacute;rmino NO aparece el RFC 3775 'Mobility Support in IPv6'?";
 choices[7]= new Array();
 choices[7][0] = "Correspondent node.";
 choices[7][1] = "L3 handover.";
 choices[7][2] = "Home agent.";
 choices[7][3] = "Care-of registration.";
 answers[7] = 3;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 894. AGE A2 2015";
 preguntaids[7] = 894


//  Id pregunta: 1385 Año de creación de pregunta: 2016
 questions[8]= "9)  EI puerto 69 es utilizado por:";
 choices[8]= new Array();
 choices[8][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[8][1] = "Finger.";
 choices[8][2] = "IMAP (Internet Message Access Protocol).";
 choices[8][3] = "SFTP (Secure File Transfer Protocol).";
 answers[8] = 0;
 units[8] = ['109'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1385. ";
 preguntaids[8] = 1385


//  Id pregunta: 1383 Año de creación de pregunta: 2016
 questions[9]= "10)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a que subred pertenece.";
 choices[9]= new Array();
 choices[9][0] = "95.26.35.144/30";
 choices[9][1] = "95.26.35.144/29";
 choices[9][2] = "95.26.35.128/27";
 choices[9][3] = "95.26.35.128/25";
 answers[9] = 2;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1383. ";
 preguntaids[9] = 1383


//  Id pregunta: 1130 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique el n&uacute;mero de puerto que deber&iacute;a usarse s&iacute; se quiere configurar un servicio para usar el protocolo de configuraci&oacute;n din&aacute;mica de host DHCP para IPv6:";
 choices[10]= new Array();
 choices[10][0] = "58";
 choices[10][1] = "169";
 choices[10][2] = "389";
 choices[10][3] = "547";
 answers[10] = 3;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1130. ";
 preguntaids[10] = 1130


//  Id pregunta: 1390 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[11]= new Array();
 choices[11][0] = "No es v&aacute;lida";
 choices[11][1] = "Multicast.";
 choices[11][2] = "Unicast.";
 choices[11][3] = "Loopback.";
 answers[11] = 2;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 1390. ";
 preguntaids[11] = 1390


//  Id pregunta: 1567 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; se entiende por tiempo de convergencia cuando hablamos de routers?";
 choices[12]= new Array();
 choices[12][0] = "Tiempo que tardan dos datagramas que siguen distinto encaminamiento en llegar al router final.";
 choices[12][1] = "Rapidez con la cual los routers de la red comparten informaci&oacute;n de enrutamiento.";
 choices[12][2] = "Tiempo que tarda un paquete en alcanzar su destino atravesando el m&iacute;nimo n&uacute;mero de routers posible.";
 choices[12][3] = "Tiempo medio que tarda un paquete en alcanzar cualquier nodo de la red, desde un mismo origen.";
 answers[12] = 1;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1567. ";
 preguntaids[12] = 1567


//  Id pregunta: 4347 Año de creación de pregunta: 2004
 questions[13]= "14)  En broadcast, &iquest;qu&eacute; protocolo traduce a direcci&oacute;n f&iacute;sica?";
 choices[13]= new Array();
 choices[13][0] = "TCP";
 choices[13][1] = "UDP";
 choices[13][2] = "RIP";
 choices[13][3] = "ARP";
 answers[13] = 3;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4347. Examen Julio 2003";
 preguntaids[13] = 4347


//  Id pregunta: 1212 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; n&uacute;meros de puerto TCP tienen asignados por IANA los protocolos IMAP e IMAPS (IMAP4 sobre TLS/SSL)?";
 choices[14]= new Array();
 choices[14][0] = "IMAP 143 e IMAPS 993.";
 choices[14][1] = "IMAPS 143 e IMAP 993.";
 choices[14][2] = "IMAP 193 e IMAPS 443.";
 choices[14][3] = "IMAPS 193 e IMAP 443.";
 answers[14] = 0;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1212. ";
 preguntaids[14] = 1212


//  Id pregunta: 4348 Año de creación de pregunta: 2004
 questions[15]= "16)  El protocolo ARP se basa en la creaci&oacute;n de ...";
 choices[15]= new Array();
 choices[15][0] = "Tablas din&aacute;micas";
 choices[15][1] = "Tablas est&aacute;ticas";
 choices[15][2] = "bloding";
 choices[15][3] = "ninguna de las anteriores";
 answers[15] = 0;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4348. Examen Julio 2003";
 preguntaids[15] = 4348


//  Id pregunta: 1628 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la afirmaci&oacute;n correcta. TCP es:";
 choices[16]= new Array();
 choices[16][0] = "Un protocolo de la capa de transporte orientado a conexi&oacute;n.";
 choices[16][1] = "Un protocolo de la capa de transporte no orientado a conexi&oacute;n.";
 choices[16][2] = "Un protocolo de las capas de enlace y red que puede detectar y compensar paquetes perdidos o datos alterados.";
 choices[16][3] = "Un protocolo de la capa de transporte orientado fundamentalmente a regular el flujo de transmisi&oacute;n para no saturar a los receptores m&aacute;s lentos.";
 answers[16] = 0;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1628. ";
 preguntaids[16] = 1628


//  Id pregunta: 1382 Año de creación de pregunta: 2016
 questions[17]= "18)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[17]= new Array();
 choices[17][0] = "135.26.41.94";
 choices[17][1] = "135.26.41.95";
 choices[17][2] = "135.26.41.96";
 choices[17][3] = "135.26.41.97";
 answers[17] = 0;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1382. ";
 preguntaids[17] = 1382


//  Id pregunta: 4320 Año de creación de pregunta: 2004
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?:";
 choices[18]= new Array();
 choices[18][0] = "DNS: Sistema de nombres de dominio";
 choices[18][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[18][2] = "FTP: Protocolo de transferencia de archivos";
 choices[18][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[18] = 3;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4320. Examen TIC MAP B 2004";
 preguntaids[18] = 4320


//  Id pregunta: 1909 Año de creación de pregunta: 2016
 questions[19]= "20)  La MTU del enlace es igual al:";
 choices[19]= new Array();
 choices[19][0] = "AI valor de MTU m&aacute;s alto de los posibles a lo largo de una ruta";
 choices[19][1] = "AI valor de MTU m&aacute;s bajo de los posibles a lo largo de una ruta";
 choices[19][2] = "AI valor medio de MTU de los enlaces que intervienen a lo largo de una ruta";
 choices[19][3] = "AI valor que haya sido definido en el PC que inicia la comunicaci&oacute;n";
 answers[19] = 1;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1909. ";
 preguntaids[19] = 1909


//  Id pregunta: 1466 Año de creación de pregunta: 2016
 questions[20]= "21)  El protocolo de Internet versi&oacute;n 6 fue definido en el:";
 choices[20]= new Array();
 choices[20][0] = "RFC 2460";
 choices[20][1] = "RFC 2430";
 choices[20][2] = "RFC 730";
 choices[20][3] = "RFC 720";
 answers[20] = 0;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1466. ";
 preguntaids[20] = 1466


//  Id pregunta: 1308 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta en relaci&oacute;n al protocolo FTP?";
 choices[21]= new Array();
 choices[21][0] = "En el modo activo el puerto de datos del cliente es el 20.";
 choices[21][1] = "EI comando &quot;upload&quot; permite subir un fichero al servidor.";
 choices[21][2] = "Entre los tipos de acceso, est&aacute; el acceso an&oacute;nimo, que permite conectarse sin necesidad de usuario y contrase&ntilde;a.";
 choices[21][3] = "EI protocolo permite tres modos de conexi&oacute;n: activo, pasivo y bajo demanda.";
 answers[21] = 2;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1308. ";
 preguntaids[21] = 1308


//  Id pregunta: 1131 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[22]= new Array();
 choices[22][0] = "192.168.30.0";
 choices[22][1] = "192.168.30.128";
 choices[22][2] = "192.168.30.255";
 choices[22][3] = "192.168.30.200";
 answers[22] = 1;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1131. ";
 preguntaids[22] = 1131


//  Id pregunta: 1512 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; comando me permite visualizar las tablas de enrutamiento de mi equipo?";
 choices[23]= new Array();
 choices[23][0] = "netstat -ar";
 choices[23][1] = "traceroute";
 choices[23][2] = "arp -p";
 choices[23][3] = "/etc/services &ndash;p";
 answers[23] = 0;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1512. ";
 preguntaids[23] = 1512


//  Id pregunta: 4352 Año de creación de pregunta: 2004
 questions[24]= "25)  La direcci&oacute;n ip 127.0.0.1 representa a";
 choices[24]= new Array();
 choices[24][0] = "El router de la red";
 choices[24][1] = "Toda la red";
 choices[24][2] = "El propio equipo";
 choices[24][3] = "Usualmente el servidor";
 answers[24] = 2;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4352. ";
 preguntaids[24] = 4352


//  Id pregunta: 4327 Año de creación de pregunta: 2004
 questions[25]= "26)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderso con su router por defecto:";
 choices[25]= new Array();
 choices[25][0] = "10.2.40.64";
 choices[25][1] = "10.2.41.45";
 choices[25][2] = "10.2.40.63";
 choices[25][3] = "10.2.40.1";
 answers[25] = 3;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4327. Examen TIC MAP B 2004";
 preguntaids[25] = 4327


//  Id pregunta: 1864 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP?";
 choices[26]= new Array();
 choices[26][0] = "PGR";
 choices[26][1] = "SMTP";
 choices[26][2] = "ICMP";
 choices[26][3] = "SNMP";
 answers[26] = 3;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1864. ";
 preguntaids[26] = 1864


//  Id pregunta: 1576 Año de creación de pregunta: 2016
 questions[27]= "28)  Se presentan a continuaci&oacute;n tres niveles de la torre de protocolos TCP/IP y tres protocolos: 1) Nivel 1 (F&iacute;sico) 2) Nivel 2 (Enlace de datos) 3) Nivel 5 (Aplicaci&oacute;n) I) GPRS (General Packet Radio Service). II) PLC (Power Line Communications). III) TLS/SSL (Transport Layer Security/Secure Sockets Layer) Se&ntilde;ale cu&aacute;l es el emparejamiento correcto de nivel/protocolo:";
 choices[27]= new Array();
 choices[27][0] = "1/I, 2/II, 3/III.";
 choices[27][1] = "1/II, 2/I, 3/III.";
 choices[27][2] = "1/III, 2/I, 3/II.";
 choices[27][3] = "1/II, 2/III, 3/I.";
 answers[27] = 1;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1576. ";
 preguntaids[27] = 1576


//  Id pregunta: 1214 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n RFC 2460, se&ntilde;ale de las siguientes cabeceras IPv6 cu&aacute;l es una cabecera de extensi&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Cabecera Siguiente.";
 choices[28][1] = "Fragmento.";
 choices[28][2] = "L&iacute;mite de Saltos.";
 choices[28][3] = "Longitud de la Carga &Uacute;til.";
 answers[28] = 1;
 units[28] = ['109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1214. ";
 preguntaids[28] = 1214


//  Id pregunta: 1630 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale c&oacute;mo se denomina la unidad de datos usada en la capa de transporte:";
 choices[29]= new Array();
 choices[29][0] = "Paquete";
 choices[29][1] = "Segmento";
 choices[29][2] = "Trama";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = 1;
 units[29] = ['109'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1630. ";
 preguntaids[29] = 1630


//  Id pregunta: 1855 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cu&aacute;l de las siguientes afirmaciones sobre el protocolo SMTP es correcta:";
 choices[30]= new Array();
 choices[30][0] = "Ejecutando el comando telnet para acceder al servidor SMTP por el puerto 25 ser&iacute;a posible enviar correos electr&oacute;nicos.";
 choices[30][1] = "Es un protocolo que necesita autenticaci&oacute;n del usuario.";
 choices[30][2] = "El cuerpo de los mensajes debe estar compuesto por caracteres ASCII de 8 bits.";
 choices[30][3] = "El protocolo modificado con las extensiones MIME, que permite ampliar el tipo de archivos que se pueden enviar, se denomina ESMTP.";
 answers[30] = 0;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1855. ";
 preguntaids[30] = 1855


//  Id pregunta: 1629 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;les son los principales protocolos que operan en la capa de transporte en el modelo TCP/IP?";
 choices[31]= new Array();
 choices[31][0] = "IPX y FTP";
 choices[31][1] = "UDP y TCP";
 choices[31][2] = "IP y TCP";
 choices[31][3] = "UDP y IP";
 answers[31] = 1;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1629. ";
 preguntaids[31] = 1629


//  Id pregunta: 1763 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale qu&eacute; puerto est&aacute;ndar est&aacute; asociado al protocolo HTTPS (HyperText Transfer Protocol):";
 choices[32]= new Array();
 choices[32][0] = "161";
 choices[32][1] = "115";
 choices[32][2] = "443";
 choices[32][3] = "22";
 answers[32] = 2;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1763. ";
 preguntaids[32] = 1763


//  Id pregunta: 3166 Año de creación de pregunta: 2002
 questions[33]= "34)  Cuando la transmisi&oacute;n de datos entre dos sistemas se caracteriza por llevar un bit de comienzo y un bit de parada, separando a cada unidad de informaci&oacute;n, se trata de:";
 choices[33]= new Array();
 choices[33][0] = "Comunicaci&oacute;n s&iacute;ncrona";
 choices[33][1] = "Comunicaci&oacute;n as&iacute;ncrona";
 choices[33][2] = "Comunicaci&oacute;n semiduplex (half-duplex)";
 choices[33][3] = "Comunicaci&oacute;n duplex (full-duplex)";
 answers[33] = 1;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 3166. ";
 preguntaids[33] = 3166


//  Id pregunta: 1565 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; tipo de registros DNS recomienda utilizar la RFC 3363 en relaci&oacute;n a IPv6?";
 choices[34]= new Array();
 choices[34][0] = "ALIAS";
 choices[34][1] = "AAAA";
 choices[34][2] = "CNAME";
 choices[34][3] = "HIPV6";
 answers[34] = 1;
 units[34] = ['109'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1565. ";
 preguntaids[34] = 1565


//  Id pregunta: 1921 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;a qu&eacute; clase corresponde la direcci&oacute;n IP 26.11 0.4.65?";
 choices[35]= new Array();
 choices[35][0] = "A";
 choices[35][1] = "B";
 choices[35][2] = "C";
 choices[35][3] = "Ninguna de las anteriores es correcta.";
 answers[35] = 0;
 units[35] = ['109'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1921. ";
 preguntaids[35] = 1921


//  Id pregunta: 4332 Año de creación de pregunta: 2004
 questions[36]= "37)  Qu&eacute; es falso respecto a Network Address Translation:";
 choices[36]= new Array();
 choices[36][0] = "Opera en el nivel de red";
 choices[36][1] = "Realiza cambios en la direcci&oacute;n del paquete TCP";
 choices[36][2] = "Realiza cambios en la direcci&oacute;n del paquete IP";
 choices[36][3] = "Realiza cambios en el puerto origen del paquete TCP";
 answers[36] = 1;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4332. Para evitar la ambig&uuml;edad, para los protocolos TCP y UDP, se cambian os n&uacute;meros de puerto as&iacute; como la combinaci&oacute;n de la informaci&oacute;n de IP y puerto en el paquete devuelto.";
 preguntaids[36] = 4332


//  Id pregunta: 1391 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique que direcci&oacute;n IPv6 de las siguientes NO es correcta:";
 choices[37]= new Array();
 choices[37][0] = "::1";
 choices[37][1] = "2022::0ab7::1528:67bb";
 choices[37][2] = "::..";
 choices[37][3] = "::212.200.31.255";
 answers[37] = 1;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 1391. ";
 preguntaids[37] = 1391


//  Id pregunta: 1839 Año de creación de pregunta: 2016
 questions[38]= "39)  El protocolo IPv6, &iquest;cu&aacute;ntas direcciones de red distintas posibilita?";
 choices[38]= new Array();
 choices[38][0] = "2 elevado a 64";
 choices[38][1] = "2 elevado a 128";
 choices[38][2] = "2 elevado a 32";
 choices[38][3] = "2 elevado a 256";
 answers[38] = 1;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1839. ";
 preguntaids[38] = 1839


//  Id pregunta: 4302 Año de creación de pregunta: 2004
 questions[39]= "40)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[39]= new Array();
 choices[39][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[39][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[39][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[39][3] = "No";
 answers[39] = 0;
 units[39] = ['105', '109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4302. Similar a examen TIC SS A 2003";
 preguntaids[39] = 4302


//  Id pregunta: 1542 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; indica el campo &quot;Data Offset&quot; en el segmento TCP?";
 choices[40]= new Array();
 choices[40][0] = "Este campo no pertenece a TCP.";
 choices[40][1] = "Indica d&oacute;nde terminan los datos.";
 choices[40][2] = "Indica d&oacute;nde empiezan los datos.";
 choices[40][3] = "Indica el n&uacute;mero de campos de control.";
 answers[40] = 2;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1542. ";
 preguntaids[40] = 1542


//  Id pregunta: 1456 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento se transmite directamente sobre el protocolo IP sin usar otro mecanismo de transporte?:";
 choices[41]= new Array();
 choices[41][0] = "EIGRP";
 choices[41][1] = "OSPF";
 choices[41][2] = "RIP";
 choices[41][3] = "BGP";
 answers[41] = 1;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1456. ";
 preguntaids[41] = 1456


//  Id pregunta: 1847 Año de creación de pregunta: 2016
 questions[42]= "43)  Dadas las IPs de dos hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0), &iquest;est&aacute;n en la misma subred?";
 choices[42]= new Array();
 choices[42][0] = "S&iacute;";
 choices[42][1] = "No";
 choices[42][2] = "Depende de la direcci&oacute;n de la puerta de enlace";
 choices[42][3] = "Depende de la configuraci&oacute;n del conmutador";
 answers[42] = 0;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1847. ";
 preguntaids[42] = 1847


//  Id pregunta: 4341 Año de creación de pregunta: 2004
 questions[43]= "44)  Suponiendo que con el protocolo HDLC tuvieramos un tama&ntilde;o de ventana de 6000, se hubieran enviado 2000 paquetes y recibido 1001 reconocimientos. &iquest;Cu&aacute;ntos paquete podriamos seguir enviando?";
 choices[43]= new Array();
 choices[43][0] = "3000";
 choices[43][1] = "6000";
 choices[43][2] = "5000";
 choices[43][3] = "4000";
 answers[43] = 2;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4341. Examen Julio 2003";
 preguntaids[43] = 4341


//  Id pregunta: 1540 Año de creación de pregunta: 2016
 questions[44]= "45)  El tama&ntilde;o en bits del campo Puerto Destino de un paquete UDP es de:";
 choices[44]= new Array();
 choices[44][0] = "15";
 choices[44][1] = "16";
 choices[44][2] = "14";
 choices[44][3] = "12";
 answers[44] = 1;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 1540. ";
 preguntaids[44] = 1540


//  Id pregunta: 4354 Año de creación de pregunta: 2004
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "DNS: Sistema de nombres de dominio";
 choices[45][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[45][2] = "FTP: Protocolo de transferencia de archivos";
 choices[45][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[45] = 3;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4354. ";
 preguntaids[45] = 4354


//  Id pregunta: 1751 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l es el puerto por defecto de SMTP:";
 choices[46]= new Array();
 choices[46][0] = "21";
 choices[46][1] = "23";
 choices[46][2] = "25";
 choices[46][3] = "80";
 answers[46] = 2;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1751. ";
 preguntaids[46] = 1751


//  Id pregunta: 1752 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la afirmaci&oacute;n correcta. La cabecera de IPv6 es:";
 choices[47]= new Array();
 choices[47][0] = "Menor que la de IPv4.";
 choices[47][1] = "Mayor que la de IPv4.";
 choices[47][2] = "Igual que la de IPv4.";
 choices[47][3] = "No hay cabecera propiamente dicha.";
 answers[47] = 1;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1752. ";
 preguntaids[47] = 1752


//  Id pregunta: 1910 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[48]= new Array();
 choices[48][0] = "Paquete Unicast es un paquete de datos dirigido a una &uacute;nica estaci&oacute;n";
 choices[48][1] = "Paquete Multicast es un paquete de datos dirigido a un grupo de estaciones, seleccion&aacute;ndose la interfaz m&aacute;s cercana";
 choices[48][2] = "Paquete Broadcast es un paquete de datos dirigido a todas y cada una de las estaciones del segmento local";
 choices[48][3] = "Paquete Anycast es un paquete dirigido a un grupo de estaciones, con la diferencia en que se selecciona una de estas estaciones para ser la destinataria de la informaci&oacute;n";
 answers[48] = 1;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1910. ";
 preguntaids[48] = 1910


//  Id pregunta: 893 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes NO ser&iacute;a una direcci&oacute;n v&aacute;lida IPv6?";
 choices[49]= new Array();
 choices[49][0] = "FFED::BA98:3210:4562";
 choices[49][1] = "3FFE:FFFF::8:800:20C4:0";
 choices[49][2] = "8000::56FA::FE12";
 choices[49][3] = "3FFE:FFFF:0:CD30::/64";
 answers[49] = 2;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 893. AGE A2 2015";
 preguntaids[49] = 893


//  Id pregunta: 4353 Año de creación de pregunta: 2004
 questions[50]= "51)  Un spanning tree es";
 choices[50]= new Array();
 choices[50][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[50][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[50][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[50][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[50] = 0;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4353. ";
 preguntaids[50] = 4353


//  Id pregunta: 1247 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes conceptos NO est&aacute; relacionado con la especificaci&oacute;n de IP m&oacute;vil para IPv4 del IETF (RFC 5944)?";
 choices[51]= new Array();
 choices[51][0] = "Tunneling.";
 choices[51][1] = "Home agent.";
 choices[51][2] = "Mobile Switching Centre.";
 choices[51][3] = "Care-of address.";
 answers[51] = 2;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1247. ";
 preguntaids[51] = 1247


//  Id pregunta: 1211 Año de creación de pregunta: 2016
 questions[52]= "53)  El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:";
 choices[52]= new Array();
 choices[52][0] = "2121";
 choices[52][1] = "2020";
 choices[52][2] = "980";
 choices[52][3] = "990";
 answers[52] = 3;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1211. ";
 preguntaids[52] = 1211


//  Id pregunta: 1392 Año de creación de pregunta: 2016
 questions[53]= "54)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la maxima seguridad posible, &iquest;En qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[53]= new Array();
 choices[53][0] = "Red A.";
 choices[53][1] = "Red B.";
 choices[53][2] = "Red C.";
 choices[53][3] = "Indistintamente en la red B o en la red C.";
 answers[53] = 2;
 units[53] = ['109'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 1392. ";
 preguntaids[53] = 1392


//  Id pregunta: 891 Año de creación de pregunta: 2016
 questions[54]= "55)  El campo 'versi&oacute;n' de la cabecera del protocolo IPv4 puede contener:";
 choices[54]= new Array();
 choices[54][0] = "Desde 0000 hasta 1111.";
 choices[54][1] = "0100 &oacute; 0110.";
 choices[54][2] = "4 y 6 en complemento a 1.";
 choices[54][3] = "Siempre 1111.";
 answers[54] = 1;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 891. AGE A2 2015";
 preguntaids[54] = 891


//  Id pregunta: 1384 Año de creación de pregunta: 2016
 questions[55]= "56)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "Fragmentaci&oacute;n.";
 choices[55][1] = "Opciones de salto a salto.";
 choices[55][2] = "Autenticaci&oacute;n.";
 choices[55][3] = "Limite de saltos.";
 answers[55] = 3;
 units[55] = ['109'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 1384. ";
 preguntaids[55] = 1384


//  Id pregunta: 1575 Año de creación de pregunta: 2016
 questions[56]= "57)  En el &aacute;mbito del modelo TCP/IP, se&ntilde;ale cu&aacute;l de las siguientes siglas identifica un algoritmo de encaminamiento:";
 choices[56]= new Array();
 choices[56][0] = "NTP (Network Time Protocol)";
 choices[56][1] = "RIP (Routing Information Protocol)";
 choices[56][2] = "RPC (Remote Procedure Call)";
 choices[56][3] = "FTP (File Transfer Protocol)";
 answers[56] = 1;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1575. ";
 preguntaids[56] = 1575


//  Id pregunta: 892 Año de creación de pregunta: 2016
 questions[57]= "58)  La RFC 1918 regula los rangos de direcciones reservadas para redes privadas, seg&uacute;n dicho RFC &iquest;cu&aacute;l de los siguientes rangos ser&iacute;a INCORRECTO considerarlo como red privada?";
 choices[57]= new Array();
 choices[57][0] = "10.0.0.0 a 10.255.255.255";
 choices[57][1] = "192.168.0.0 a 192.168.255.255";
 choices[57][2] = "169.16.0.0 a 169.31.255.255";
 choices[57][3] = "172.16.0.0 a 172.31.255.255";
 answers[57] = 2;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 892. AGE A2 2015";
 preguntaids[57] = 892


//  Id pregunta: 895 Año de creación de pregunta: 2016
 questions[58]= "59)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[58]= new Array();
 choices[58][0] = "192.228.0.0";
 choices[58][1] = "192.228.8.0";
 choices[58][2] = "192.228.16.0";
 choices[58][3] = "192.228.17.0";
 answers[58] = 2;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 895. Junta de Extremadura A1 2015";
 preguntaids[58] = 895


//  Id pregunta: 1405 Año de creación de pregunta: 2016
 questions[59]= "60)  EI protocolo FTP sobre TLS/SSL (FTPS-data) usa el puerto:";
 choices[59]= new Array();
 choices[59][0] = "989";
 choices[59][1] = "567";
 choices[59][2] = "742";
 choices[59][3] = "334";
 answers[59] = 0;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 1405. ";
 preguntaids[59] = 1405


//  Id pregunta: 1644 Año de creación de pregunta: 2016
 questions[60]= "61)  Interprete el funcionamiento de aplicar la m&aacute;scara de subred 255.255.240.0 a la direcci&oacute;n IP 132.90.132.5:";
 choices[60]= new Array();
 choices[60][0] = "Host 5 de la subred 132.90.132.0";
 choices[60][1] = "Host 4.1 de la subred 132.90.128.4";
 choices[60][2] = "Host 4 de la subred 132.90.128.5";
 choices[60][3] = "Host 4.5 de la subred 132.90.128.0";
 answers[60] = 3;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1644. ";
 preguntaids[60] = 1644


//  Id pregunta: 4326 Año de creación de pregunta: 2004
 questions[61]= "62)  &iquest;Cu&aacute;l es el bit del segmento TCP que le indica al receptor que entregue los datos inmediatamente a la aplicaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "ACK";
 choices[61][1] = "PSH";
 choices[61][2] = "RST";
 choices[61][3] = "PUT";
 answers[61] = 1;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4326. Examen TIC MAP B 2004";
 preguntaids[61] = 4326


//  Id pregunta: 1904 Año de creación de pregunta: 2016
 questions[62]= "63)  En el contexto de TCP/IP, &iquest;qu&eacute; se entiende por encapsulamiento?";
 choices[62]= new Array();
 choices[62][0] = "La partici&oacute;n del paquete a enviar en trozos acordes con la Unidad Maxima de Transferencia que soporta la red por la que se va a enviar";
 choices[62][1] = "EI cifrado de las direcciones IP de origen y destino";
 choices[62][2] = "La adici&oacute;n de informaci&oacute;n de control en cada nivel antes de pasarla al nivel inferior.";
 choices[62][3] = "La encriptaci&oacute;n de los octetos de informaci&oacute;n de los paquetes IP.";
 answers[62] = 2;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 1904. ";
 preguntaids[62] = 1904


//  Id pregunta: 1518 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;ntas direcciones IP podr&aacute;n asignarse en la subred 136.145.9.32/28, sin considerar las direcciones de subred y de broadcast?";
 choices[63]= new Array();
 choices[63][0] = "256";
 choices[63][1] = "14";
 choices[63][2] = "16";
 choices[63][3] = "Es una direcci&oacute;n no enrutable.";
 answers[63] = 1;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1518. ";
 preguntaids[63] = 1518


//  Id pregunta: 1216 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[64]= new Array();
 choices[64][0] = "Loopback.";
 choices[64][1] = "Indefinida (Unspecified).";
 choices[64][2] = "Multicast.";
 choices[64][3] = "No es v&aacute;lida.";
 answers[64] = 0;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1216. ";
 preguntaids[64] = 1216


//  Id pregunta: 1541 Año de creación de pregunta: 2016
 questions[65]= "66)  La direcci&oacute;n IP 0.0.0.0:";
 choices[65]= new Array();
 choices[65][0] = "Se usa para difusi&oacute;n en una subred local.";
 choices[65][1] = "Se usa para difundir un mensaje a todos los nodos de una red distante.";
 choices[65][2] = "La usa inicialmente un host cuando arranca.";
 choices[65][3] = "Se usa para pruebas de realimentaci&oacute;n.";
 answers[65] = 2;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1541. ";
 preguntaids[65] = 1541


//  Id pregunta: 1222 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l es la direcci&oacute;n de broadcast de la subred 172.17.11.32/27?";
 choices[66]= new Array();
 choices[66][0] = "172.17.11.255";
 choices[66][1] = "172.17.11.63";
 choices[66][2] = "172.17.11.47";
 choices[66][3] = "172.17.255.255";
 answers[66] = 1;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1222. ";
 preguntaids[66] = 1222


//  Id pregunta: 1215 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale los tipos de tr&aacute;fico IPv6 que hay:";
 choices[67]= new Array();
 choices[67][0] = "Unicast, Multicast y Broadcast.";
 choices[67][1] = "Somecast, Multicast y Broadcast.";
 choices[67][2] = "Unicast, Multicast y Anycast.";
 choices[67][3] = "Unicast, Megacast y Anycast.";
 answers[67] = 2;
 units[67] = ['109'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1215. ";
 preguntaids[67] = 1215


//  Id pregunta: 897 Año de creación de pregunta: 2016
 questions[68]= "69)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[68]= new Array();
 choices[68][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[68][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[68][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[68][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[68] = 3;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 897. Junta de Extremadura A1 2015";
 preguntaids[68] = 897


//  Id pregunta: 4328 Año de creación de pregunta: 2,000.00
 questions[69]= "70)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred";
 choices[69]= new Array();
 choices[69][0] = "00001010.00000001.10000001.10000000";
 choices[69][1] = "00001010.00000001.10000001.00000000";
 choices[69][2] = "00001010.00000001.00000000.00000001";
 choices[69][3] = "00001010.00000001.10000001.11000000";
 answers[69] = 0;
 units[69] = ['109'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4328. Examen TIC MAP B 2004";
 preguntaids[69] = 4328


//  Id pregunta: 1193 Año de creación de pregunta: 2016
 questions[70]= "71)  El comando ping es el acr&oacute;nimo de:";
 choices[70]= new Array();
 choices[70][0] = "Packet Internet Group.";
 choices[70][1] = "Packet Internet Gangway.";
 choices[70][2] = "Packet Internet Gate.";
 choices[70][3] = "Packet Internet Groper.";
 answers[70] = 3;
 units[70] = ['109'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1193. ";
 preguntaids[70] = 1193


//  Id pregunta: 1903 Año de creación de pregunta: 2016
 questions[71]= "72)  La cabecera de IPv6, en tsrrninos absolutos, es m&aacute;s grande que la de IPv4:";
 choices[71]= new Array();
 choices[71][0] = "Cierto, porque ocupa el doble de octetos";
 choices[71][1] = "Falso, ya que en IPv6 se ha simplificado el formato de la cabecera";
 choices[71][2] = "Cierto, porque el n&uacute;mero de direcciones pasa de 32 a 128 bits";
 choices[71][3] = "Falso, ya que la cabecera de IPv6 utiliza 8 campos y la de IPv4 utiliza 16 campos.";
 answers[71] = 0;
 units[71] = ['109'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1903. ";
 preguntaids[71] = 1903


//  Id pregunta: 1128 Año de creación de pregunta: 2016
 questions[72]= "73)  Dentro del protocolo TCP/IP, el comando arp -a:";
 choices[72]= new Array();
 choices[72][0] = "Muestra la tabla RARP con la relaci&oacute;n entre direcciones MAC e IP.";
 choices[72][1] = "Muestra la tabla ARP con la relaci&oacute;n entre direcciones IP y MAC.";
 choices[72][2] = "Muestra la tabla ARP con la relaci&oacute;n entre direcciones IP y puertos UDP.";
 choices[72][3] = "Muestra la tabla de direcciones IP con la relaci&oacute;n entre direcciones IP y puertos TCP.";
 answers[72] = 1;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1128. ";
 preguntaids[72] = 1128


//  Id pregunta: 1213 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale cu&aacute;les son las direcciones IP de red y de broadcast para la siguiente subred 132.27.43.25/27:";
 choices[73]= new Array();
 choices[73][0] = "Red: 132.27.43.31/27 y broadcast: 132.27.43.0";
 choices[73][1] = "red: 132.27.43.20/27 y broadcast: 132.27.43.1";
 choices[73][2] = "red: 132.27.43.0/27 y broadcast: 132.27.43.1";
 choices[73][3] = "red: 132.27.43.0/27 y broadcast: 132.27.43.31";
 answers[73] = 3;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 1213. ";
 preguntaids[73] = 1213


//  Id pregunta: 1750 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale qu&eacute; servicio NO es b&aacute;sico dentro de la arquitectura de comunicaciones TCP/IP:";
 choices[74]= new Array();
 choices[74][0] = "Transferencia de archivos.";
 choices[74][1] = "Terminal virtual.";
 choices[74][2] = "Correo.";
 choices[74][3] = "Acceso a archivos.";
 answers[74] = 3;
 units[74] = ['109'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1750. ";
 preguntaids[74] = 1750


