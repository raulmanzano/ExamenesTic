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
//  Id pregunta: 10092 Año de creación de pregunta: 2015
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta en relaci&oacute;n a la MTU (Maximum Transfer Unit) en redes IP, la MTU del camino es el valor de la:";
 choices[0]= new Array();
 choices[0][0] = "suma de todas las MTU entre el receptor y el emisor.";
 choices[0][1] = "media aritm&eacute;tica de todas las MTU entre el receptor y el emisor.";
 choices[0][2] = "MTU m&aacute;s baja de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 choices[0][3] = "MTU m&aacute;s alta de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 answers[0] = 2;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10092. Examen TIC A2 2014";
 preguntaids[0] = 10092


//  Id pregunta: 8290 Año de creación de pregunta: 2011
 questions[1]= "2)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[1]= new Array();
 choices[1][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[1][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[1][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[1][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[1] = 2;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8290. Examen UPM A2 2011";
 preguntaids[1] = 8290


//  Id pregunta: 10112 Año de creación de pregunta: 2015
 questions[2]= "3)  En un escenario de movilidad IP &iquest;de qu&eacute; se encarga el Agente Base (Home Agent)?";
 choices[2]= new Array();
 choices[2][0] = "Es el nodo que cambia su punto de conexi&oacute;n a la red sin cambiar su direcci&oacute;n IP o perder las conexiones establecidas.";
 choices[2][1] = "Es el router situado en la red origen del nodo m&oacute;vil que intercepta el tr&aacute;fico destinado al nodo m&oacute;vil y se lo reenv&iacute;a mediante t&uacute;neles IP, realizando adem&aacute;s tareas de localizaci&oacute;n de los nodos m&oacute;viles.";
 choices[2][2] = "Es el router situado en la red visitada que proporciona servicios de encaminamiento a los nodos m&oacute;viles registrados.";
 choices[2][3] = "Es el router situado en la red visitada que facilita una nueva direcci&oacute;n IP al nodo m&oacute;vil.";
 answers[2] = 1;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10112. Examen TIC A2 2014";
 preguntaids[2] = 10112


//  Id pregunta: 9361 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[3]= new Array();
 choices[3][0] = "224.0.0.4";
 choices[3][1] = "224.0.0.5";
 choices[3][2] = "224.0.0.9";
 choices[3][3] = "224.0.0.22";
 answers[3] = 2;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9361. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[3] = 9361


//  Id pregunta: 8306 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es correcta?";
 choices[4]= new Array();
 choices[4][0] = "Las direcciones no son jer&aacute;rquicas y se asignan aleatoriamente";
 choices[4][1] = "Hay 2.7 billones de direcciones disponibles para asignar";
 choices[4][2] = "Las direcciones broadcast se reemplazan con direcciones multicast";
 choices[4][3] = "Un interfaz de red &uacute;nicamente podr&aacute; ser configurado con una &uacute;nica direcci&oacute;n";
 answers[4] = 2;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8306. Examen UPM A2 2011";
 preguntaids[4] = 8306


//  Id pregunta: 9357 Año de creación de pregunta: 2014
 questions[5]= "6)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[5]= new Array();
 choices[5][0] = "135.26.41.94";
 choices[5][1] = "135.26.41.95";
 choices[5][2] = "135.26.41.96";
 choices[5][3] = "135.26.41.97";
 answers[5] = 0;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9357. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[5] = 9357


//  Id pregunta: 9359 Año de creación de pregunta: 2014
 questions[6]= "7)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "Fragmentacion.";
 choices[6][1] = "Opciones de salto a salto.";
 choices[6][2] = "Autenticaci&oacute;n.";
 choices[6][3] = "L&iacute;mite de saltos.";
 answers[6] = 3;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9359. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[6] = 9359


//  Id pregunta: 8291 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes cabeceras de extensi&oacute;n no est&aacute; especificada en la RFC 2460 que desarrolla las especificaciones de el protocolo IPv6?";
 choices[7]= new Array();
 choices[7][0] = "Hop-By-Hop Options";
 choices[7][1] = "Routing (Type 0)";
 choices[7][2] = "Fragment";
 choices[7][3] = "Authentication Header";
 answers[7] = 3;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8291. Examen UPM A2 2011";
 preguntaids[7] = 8291


//  Id pregunta: 8116 Año de creación de pregunta: 2011
 questions[8]= "9)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo?";
 choices[8]= new Array();
 choices[8][0] = "0-15";
 choices[8][1] = "0-255";
 choices[8][2] = "0-5";
 choices[8][3] = "0-127";
 answers[8] = 1;
 units[8] = ['109'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8116. Examen TIC A2 2010";
 preguntaids[8] = 8116


//  Id pregunta: 9999 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[9]= new Array();
 choices[9][0] = "192.168.30.0";
 choices[9][1] = "192.168.30.128";
 choices[9][2] = "192.168.30.255";
 choices[9][3] = "192.168.30.200";
 answers[9] = 1;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9999. Examen TIC A2 2014";
 preguntaids[9] = 9999


//  Id pregunta: 8286 Año de creación de pregunta: 2011
 questions[10]= "11)  La m&aacute;xima longitud de un datagrama IP es:";
 choices[10]= new Array();
 choices[10][0] = "128 Kbytes";
 choices[10][1] = "64 Kbytes.";
 choices[10][2] = "32 Kbytes";
 choices[10][3] = "No tiene longitud m&aacute;xima";
 answers[10] = 1;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8286. Examen TIC A2 2010 interna";
 preguntaids[10] = 8286


//  Id pregunta: 7943 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast?";
 choices[11]= new Array();
 choices[11][0] = "256";
 choices[11][1] = "254";
 choices[11][2] = "30";
 choices[11][3] = "64";
 answers[11] = 1;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 7943. Examen TIC A2 2010";
 preguntaids[11] = 7943


//  Id pregunta: 9262 Año de creación de pregunta: 2014
 questions[12]= "13)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[12]= new Array();
 choices[12][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[12][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[12][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[12][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[12] = 2;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9262. ";
 preguntaids[12] = 9262


//  Id pregunta: 8303 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Qu&eacute; protocolo puede encontrar la direcci&oacute;n MAC de un computador, dada su direcci&oacute;n IP?";
 choices[13]= new Array();
 choices[13][0] = "RARP";
 choices[13][1] = "DHCP";
 choices[13][2] = "ARP";
 choices[13][3] = "Proxy RARP";
 answers[13] = 2;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8303. Examen UPM A2 2011";
 preguntaids[13] = 8303


//  Id pregunta: 9750 Año de creación de pregunta: 2014
 questions[14]= "15)  En IPv6, se&ntilde;ale el prefijo empleado para direcciones link-local:";
 choices[14]= new Array();
 choices[14][0] = "fd00::/8";
 choices[14][1] = "fe00::/64";
 choices[14][2] = "fe80::/64";
 choices[14][3] = "No existen las direcciones link-local en IPv6";
 answers[14] = 2;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9750. ";
 preguntaids[14] = 9750


//  Id pregunta: 10090 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n RFC 2460, se&ntilde;ale de las siguientes cabeceras IPv6 cu&aacute;l es una cabecera de extensi&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Cabecera Siguiente.";
 choices[15][1] = "Fragmento.";
 choices[15][2] = "L&iacute;mite de Saltos.";
 choices[15][3] = "Longitud de la Carga &Uacute;til.";
 answers[15] = 1;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10090. Examen TIC A2 2014";
 preguntaids[15] = 10090


//  Id pregunta: 7946 Año de creación de pregunta: 2011
 questions[16]= "17)  Una direcci&oacute;n IP identifica:";
 choices[16]= new Array();
 choices[16][0] = "Una conexi&oacute;n.";
 choices[16][1] = "Una interfaz de tarjeta de red.";
 choices[16][2] = "Un ordenador.";
 choices[16][3] = "Una aplicaci&oacute;n interactiva.";
 answers[16] = 1;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7946. Examen TIC A2 2010";
 preguntaids[16] = 7946


//  Id pregunta: 10087 Año de creación de pregunta: 2015
 questions[17]= "18)  ICMP env&iacute;a mensajes en forma de datagramas que permiten al conjunto del protocolo TCP/IP realizar entre otras las siguientes funciones, se&ntilde;ale la FALSA:";
 choices[17]= new Array();
 choices[17][0] = "Control de flujo.";
 choices[17][1] = "Detecci&oacute;n de destinos inalcanzables.";
 choices[17][2] = "Encriptaci&oacute;n de paquetes.";
 choices[17][3] = "Pruebas de conectividad.";
 answers[17] = 2;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 10087. Examen TIC A2 2014";
 preguntaids[17] = 10087


//  Id pregunta: 10841 Año de creación de pregunta: 2015
 questions[18]= "19)  En IPv6, desaparece el direccionamiento:";
 choices[18]= new Array();
 choices[18][0] = "Unicast";
 choices[18][1] = "Multicast";
 choices[18][2] = "Anycast";
 choices[18][3] = "Broadcast";
 answers[18] = 3;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10841. ";
 preguntaids[18] = 10841


//  Id pregunta: 8400 Año de creación de pregunta: 2011
 questions[19]= "20)  FTP es un protocolo de la pila TCP/IP:";
 choices[19]= new Array();
 choices[19][0] = "Del nivel de Aplicaci&oacute;n.";
 choices[19][1] = "Del nivel de Transporte.";
 choices[19][2] = "Del nivel de Red.";
 choices[19][3] = "De nivel de Sesi&oacute;n";
 answers[19] = 0;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8400. Operador Ayto. Madrid 2010";
 preguntaids[19] = 8400


//  Id pregunta: 9872 Año de creación de pregunta: 2015
 questions[20]= "21)  Indique la afirmaci&oacute;n correcta:";
 choices[20]= new Array();
 choices[20][0] = "Ipv6 posibilita 2256 de direcciones de host diferentes.";
 choices[20][1] = "El encabezado de Ipv6 (sin opciones) es m&aacute;s corto que el de IPv4";
 choices[20][2] = "Con Ipv6 no es necesario el mecanismo de traducci&oacute;n de direcciones de red (NAT)";
 choices[20][3] = "Todas las anteriores son incorrectas.";
 answers[20] = 2;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9872. ";
 preguntaids[20] = 9872


//  Id pregunta: 10765 Año de creación de pregunta: 2015
 questions[21]= "22)  En el protocolo IPv6:";
 choices[21]= new Array();
 choices[21][0] = "No se pueden fragmentar paquetes.";
 choices[21][1] = "Las cabeceras AH y ESP se procesan en cada router.";
 choices[21][2] = "Incorpora mecanismos para crear circuitos virtuales.";
 choices[21][3] = "Se ofrecen servicios espec&iacute;ficos para TCPv6";
 answers[21] = 2;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10765. ";
 preguntaids[21] = 10765


//  Id pregunta: 10839 Año de creación de pregunta: 2015
 questions[22]= "23)  El protocolo TCP se encuentra especificado en:";
 choices[22]= new Array();
 choices[22][0] = "RFC 793";
 choices[22][1] = "RFC 739";
 choices[22][2] = "RFC 791";
 choices[22][3] = "RFC 719";
 answers[22] = 0;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10839. ";
 preguntaids[22] = 10839


//  Id pregunta: 9156 Año de creación de pregunta: 2014
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de las siguientes opciones est&aacute; basada en el protocolo ICMP:";
 choices[23]= new Array();
 choices[23][0] = "SMTP";
 choices[23][1] = "SNMP";
 choices[23][2] = "PING";
 choices[23][3] = "DNS";
 answers[23] = 2;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9156. Examen TIC A2 2013";
 preguntaids[23] = 9156


//  Id pregunta: 8112 Año de creación de pregunta: 2011
 questions[24]= "25)  De las siguientes afirmaciones sobre el protocolo ICMP, &iquest;cu&aacute;l es cierta?";
 choices[24]= new Array();
 choices[24][0] = "Est&aacute; definido en las RFC 792 y 2463.";
 choices[24][1] = "Se considera un protocolo de nivel de transporte, al ir sobre datagramas IP.";
 choices[24][2] = "Permite conocer la direcci&oacute;n MAC asociada a una direcci&oacute;n IP.";
 choices[24][3] = "La cabecera tiene una longitud de 4 bytes en ICMPv4 y de 8 en ICMPv6.";
 answers[24] = 0;
 units[24] = ['105', '109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8112. Examen TIC A2 2010 interna";
 preguntaids[24] = 8112


//  Id pregunta: 9370 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[25]= new Array();
 choices[25][0] = "LSP (Label Switched Path).";
 choices[25][1] = "LSR (Label Switching Router).";
 choices[25][2] = "FEC (Forwarding Equivalence Class).";
 choices[25][3] = "ILP (Incoming Label Protocol).";
 answers[25] = 3;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9370. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[25] = 9370


//  Id pregunta: 9261 Año de creación de pregunta: 2014
 questions[26]= "27)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[26]= new Array();
 choices[26][0] = "8192";
 choices[26][1] = "1024";
 choices[26][2] = "512";
 choices[26][3] = "2048";
 answers[26] = 0;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9261. ";
 preguntaids[26] = 9261


//  Id pregunta: 10891 Año de creación de pregunta: 2015
 questions[27]= "28)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[27]= new Array();
 choices[27][0] = "2000::/3";
 choices[27][1] = "FF00::/10";
 choices[27][2] = "FE00::/12";
 choices[27][3] = "::1/128";
 answers[27] = 0;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10891. ";
 preguntaids[27] = 10891


//  Id pregunta: 8838 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[28]= new Array();
 choices[28][0] = "Direcci&oacute;n IPv6 compatible con IPv4.";
 choices[28][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[28][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[28][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[28] = 2;
 units[28] = ['117', '109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8838. Examen TIC A1 2011";
 preguntaids[28] = 8838


//  Id pregunta: 8250 Año de creación de pregunta: 2011
 questions[29]= "30)  Un servidor DHCP no puede proveer a un equipo cliente de la configuraci&oacute;n de:";
 choices[29]= new Array();
 choices[29][0] = "M&aacute;scara de subred";
 choices[29][1] = "Tiempo m&aacute;ximo de espera del ARP";
 choices[29][2] = "Servidor SMTP";
 choices[29][3] = "Software antivirus";
 answers[29] = 3;
 units[29] = ['109'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8250. Examen UPM A2 2011";
 preguntaids[29] = 8250


//  Id pregunta: 10878 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Cuantos host puede poseer una red /30?";
 choices[30]= new Array();
 choices[30][0] = "1";
 choices[30][1] = "6";
 choices[30][2] = "2";
 choices[30][3] = "4";
 answers[30] = 2;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10878. ";
 preguntaids[30] = 10878


//  Id pregunta: 10756 Año de creación de pregunta: 2015
 questions[31]= "32)  Las direcciones IPv6 que permiten la configuraci&oacute;n autom&aacute;tica cuando no hay routers presentes son:";
 choices[31]= new Array();
 choices[31][0] = "Global Multicast";
 choices[31][1] = "Link Unique Address";
 choices[31][2] = "Link Local";
 choices[31][3] = "Este procedimiento no est&aacute; permitido por el protocolo IPv6";
 answers[31] = 2;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10756. ";
 preguntaids[31] = 10756


//  Id pregunta: 8285 Año de creación de pregunta: 2011
 questions[32]= "33)  Identificar la descripci&oacute;n del comando IP ERR&Oacute;NEO:";
 choices[32]= new Array();
 choices[32][0] = "NETSTAT: es una herramienta de l&iacute;nea de comandos que muestra un listado de las conexiones activas de un ordenador, tanto entrantes como salientes. Permite mostrar las estad&iacute;sticas de protocolos y las conexiones TCP/IP actuales";
 choices[32][1] = "IPCONFIG: Muestra o actualiza la configuraci&oacute;n de red TCP/IP";
 choices[32][2] = "NBTSTAT: Muestra estad&iacute;sticas del protocolo y conexiones TCP/IP actuales utilizando NBT. NBTStat es una herramienta que resulta de utilidad para solucionar problemas con la resoluci&oacute;n de nombres llevada a cabo por NetBIOS.";
 choices[32][3] = "TRACERT Muestra todas las direcciones IP intermedias por las que pasa un paquete entre el equipo remoto y la direcci&oacute;n IP especificada.";
 answers[32] = 3;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8285. Examen TIC A2 2010 interna";
 preguntaids[32] = 8285


//  Id pregunta: 9752 Año de creación de pregunta: 2014
 questions[33]= "34)  Se&ntilde;ale la respuesta correcta en lo referente a la detecci&oacute;n y correcci&oacute;n de errores en telecomunicaciones";
 choices[33]= new Array();
 choices[33][0] = "CRC (C&oacute;digo de Redundancia C&iacute;clico) permite detectar y corregir errores en recepci&oacute;n";
 choices[33][1] = "Un c&oacute;digo Hamming de distancia 3 permite detectar 2 errores y corregir 1";
 choices[33][2] = "Reed-Solomon solamente permite detectar errores, no corregirlos";
 choices[33][3] = "Todas las anteriores son incorrectas";
 answers[33] = 1;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9752. ";
 preguntaids[33] = 9752


//  Id pregunta: 8077 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera una mejora de IPv6 respecto a IPv4?";
 choices[34]= new Array();
 choices[34][0] = "Capacidad extendida del direccionamiento";
 choices[34][1] = "Seguridad de nivel de aplicaci&oacute;n obligatoria";
 choices[34][2] = "Movilidad";
 choices[34][3] = "Multicast";
 answers[34] = 1;
 units[34] = ['109'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8077. ";
 preguntaids[34] = 8077


//  Id pregunta: 10876 Año de creación de pregunta: 2015
 questions[35]= "36)  El OUI de una direcci&oacute;n MAC posee";
 choices[35]= new Array();
 choices[35][0] = "6 digitos Hexadecimales";
 choices[35][1] = "32bits";
 choices[35][2] = "48bits";
 choices[35][3] = "24bytes";
 answers[35] = 0;
 units[35] = ['109'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10876. ";
 preguntaids[35] = 10876


//  Id pregunta: 8117 Año de creación de pregunta: 2011
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes NO es un campo de control en el segmento TCP?";
 choices[36]= new Array();
 choices[36][0] = "URG";
 choices[36][1] = "PSH";
 choices[36][2] = "END";
 choices[36][3] = "ACK";
 answers[36] = 2;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8117. Examen TIC A2 2010";
 preguntaids[36] = 8117


//  Id pregunta: 8548 Año de creación de pregunta: 2013
 questions[37]= "38)  Indique cu&aacute;l es el n&uacute;mero de protocolo para IPv6";
 choices[37]= new Array();
 choices[37][0] = "17";
 choices[37][1] = "41";
 choices[37][2] = "47";
 choices[37][3] = "50";
 answers[37] = 1;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 8548. Consultar en wikipedia List_of_IP_protocol_numbers";
 preguntaids[37] = 8548


//  Id pregunta: 10544 Año de creación de pregunta: 2015
 questions[38]= "39)  En cuanto al formato de la cabecera IPv6, se&ntilde;ale la opci&oacute;n verdadera";
 choices[38]= new Array();
 choices[38][0] = "4 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[38][1] = "4 bits de versi&oacute;n, 20 bits de clase de tr&aacute;fico, 8 etiqueta de flujo";
 choices[38][2] = "8 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[38][3] = "4 bits de versi&oacute;n, 4 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 answers[38] = 0;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10544. ";
 preguntaids[38] = 10544


//  Id pregunta: 9585 Año de creación de pregunta: 2014
 questions[39]= "40)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[39]= new Array();
 choices[39][0] = "Cabecera siguiente.";
 choices[39][1] = "Enrutamiento.";
 choices[39][2] = "Longitud de la carga &uacute;til.";
 choices[39][3] = "L&iacute;mite de saltos.";
 answers[39] = 1;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9585. TIC A2 2013 libre";
 preguntaids[39] = 9585


//  Id pregunta: 8307 Año de creación de pregunta: 2011
 questions[40]= "41)  La longitud m&aacute;xima de un datagrama IP es:";
 choices[40]= new Array();
 choices[40][0] = "32 KB";
 choices[40][1] = "64 KB";
 choices[40][2] = "128 KB";
 choices[40][3] = "512 KB";
 answers[40] = 1;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8307. Examen UPM A2 2011";
 preguntaids[40] = 8307


//  Id pregunta: 9659 Año de creación de pregunta: 2014
 questions[41]= "42)  En el direccionamiento IPv4, clase C";
 choices[41]= new Array();
 choices[41][0] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^21 redes con 254 nodos posibles.";
 choices[41][1] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^21 redes  con 254 nodos posibles.";
 choices[41][2] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^22 redes  con 126 nodos posibles.";
 choices[41][3] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^22 redes  con 128 nodos posibles.";
 answers[41] = 0;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9659. Examen TIC A1 2013";
 preguntaids[41] = 9659


//  Id pregunta: 8287 Año de creación de pregunta: 2011
 questions[42]= "43)  &iquest;Cu&aacute;l es la versi&oacute;n extendida del protocolo BOOTP?";
 choices[42]= new Array();
 choices[42][0] = "DHCP";
 choices[42][1] = "RARP";
 choices[42][2] = "RTSP";
 choices[42][3] = "DNS";
 answers[42] = 0;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8287. Examen TIC A2 2010 interna";
 preguntaids[42] = 8287


//  Id pregunta: 10540 Año de creación de pregunta: 2015
 questions[43]= "44)  Cu&aacute;l es el significado de las sigla RIP";
 choices[43]= new Array();
 choices[43][0] = "Routing Improved Protocol";
 choices[43][1] = "Routing Inner Protocol";
 choices[43][2] = "Routing Information Protocol";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = 2;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 10540. ";
 preguntaids[43] = 10540


//  Id pregunta: 9258 Año de creación de pregunta: 2014
 questions[44]= "45)  Respecto al protocolo HDLC, indique la falsa:";
 choices[44]= new Array();
 choices[44][0] = "Significa High-Level Data Link Control y est&aacute; basado en el ISO 3339.";
 choices[44][1] = "Usa transmisi&oacute;n s&iacute;ncrona y todos los intercambios se realizan a trav&eacute;s de tramas.";
 choices[44][2] = "Utiliza un formato &uacute;nico de tramas, tanto para datos como para informaci&oacute;n de control.";
 choices[44][3] = "Es el protocolo m&aacute;s importante para el enlace de datos, siendo la base para otros protocolos de nivel 2.";
 answers[44] = 0;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 9258. ";
 preguntaids[44] = 9258


//  Id pregunta: 10089 Año de creación de pregunta: 2015
 questions[45]= "46)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[45]= new Array();
 choices[45][0] = "95.25.30.128/27";
 choices[45][1] = "95.25.30.128/25";
 choices[45][2] = "95.25.46.128/27";
 choices[45][3] = "95.25.46.128/25";
 answers[45] = 2;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 10089. Examen TIC A2 2014";
 preguntaids[45] = 10089


//  Id pregunta: 9358 Año de creación de pregunta: 2014
 questions[46]= "47)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[46]= new Array();
 choices[46][0] = "95.26.35.144/30";
 choices[46][1] = "95.26.35.144/29";
 choices[46][2] = "95.26.35.128/27";
 choices[46][3] = "95.26.35.128/25";
 answers[46] = 2;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9358. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[46] = 9358


//  Id pregunta: 8078 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[47]= new Array();
 choices[47][0] = "FTP.";
 choices[47][1] = "TFTP.";
 choices[47][2] = "DNS.";
 choices[47][3] = "Ninguno de los anteriores.";
 answers[47] = 2;
 units[47] = ['105', '109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8078. Analista Ayto. Madrid 2010";
 preguntaids[47] = 8078


//  Id pregunta: 10088 Año de creación de pregunta: 2015
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:";
 choices[48]= new Array();
 choices[48][0] = "132.26.41.128";
 choices[48][1] = "132.26.41.127";
 choices[48][2] = "132.26.41.124";
 choices[48][3] = "132.26.41.55";
 answers[48] = 2;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 10088. Examen TIC A2 2014";
 preguntaids[48] = 10088


//  Id pregunta: 10091 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[49]= new Array();
 choices[49][0] = "Loopback.";
 choices[49][1] = "Indefinida (Unspecified).";
 choices[49][2] = "Multicast.";
 choices[49][3] = "No es v&aacute;lida.";
 answers[49] = 0;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 10091. Examen TIC A2 2014";
 preguntaids[49] = 10091


//  Id pregunta: 9754 Año de creación de pregunta: 2014
 questions[50]= "51)  &iquest;Cu&aacute;l de estos est&aacute;ndares relacionados con Ethernet permite enrutamiento multipath?";
 choices[50]= new Array();
 choices[50][0] = "802.1aq (Shortest Path Bridging)";
 choices[50][1] = "802.D (Spanning Tree Protocol)";
 choices[50][2] = "802.1s, incluido en 802.1Q-2005 (Multiple Spanning Tree Protocol)";
 choices[50][3] = "802.1w (Rapid Spanning Tree Protocol)";
 answers[50] = 0;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9754. Shortest Path Bridging sustituye a los antiguos STP(IEEE 802.1D), RSTP (IEEE 802.1w) y MSTP (IEEE 802.1s) que permit&iacute;an un &uacute;nico camino activo para evitar bucles. SPB permite varios caminos activos lo que posibilita hasta m&aacute;s de 16 millones de VLAN.";
 preguntaids[50] = 9754


//  Id pregunta: 9259 Año de creación de pregunta: 2014
 questions[51]= "52)  En relaci&oacute;n con el campo TTL, indique la falsa:";
 choices[51]= new Array();
 choices[51][0] = "Sirve para limitar la vida de un paquete.";
 choices[51][1] = "Evita que los paquetes est&eacute;n dando vueltas eternamente por la red.";
 choices[51][2] = "Permite una vida m&aacute;xima de 512 segundos.";
 choices[51][3] = "En la pr&aacute;ctica, cuenta saltos.";
 answers[51] = 2;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9259. ";
 preguntaids[51] = 9259


//  Id pregunta: 10154 Año de creación de pregunta: 2015
 questions[52]= "53)  Para la direcci&oacute;n de loopback, es correcto que:";
 choices[52]= new Array();
 choices[52][0] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::127.0.0.1)";
 choices[52][1] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::1)";
 choices[52][2] = "Se han reservado 256 direcciones en IPv4 (127.0.0.0/24) y 256 direcciones en IPv6 (::127.0.0.1-255)";
 choices[52][3] = "Se han reservado 16.777.214 direcciones en IPv4 (127.0.0.0/8) y una direcci&oacute;n en IPv6 (::1)";
 answers[52] = 3;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 10154. Examen TIC A1 2014";
 preguntaids[52] = 10154


//  Id pregunta: 8111 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta, considerando diferencias entre IPv4 e IPv6?";
 choices[53]= new Array();
 choices[53][0] = "Ipv6 duplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 64 bits.";
 choices[53][1] = "Algunos campos de la cabecera de Ipv4 han sido eliminados o convertidos en opcionales para reducir el coste de proceso normal de los paquetes y limitar el coste en ancho de banda de la cabecera Ipv6.";
 choices[53][2] = "IPV6 complica la cabecera, al a&ntilde;adir campos a los que ya tenia la cabecea Ipv4, para permitir mayor capacidad de configuraci&oacute;n, lo que supone, por contra, un mayor coste de proceso, que se compensar&aacute; por la mayor potencia del hardware.";
 choices[53][3] = "IPv6 triplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 96 bits.";
 answers[53] = 1;
 units[53] = ['109'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8111. Examen TIC A2 2010 interna";
 preguntaids[53] = 8111


//  Id pregunta: 9362 Año de creación de pregunta: 2014
 questions[54]= "55)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[54]= new Array();
 choices[54][0] = "Ping";
 choices[54][1] = "ICMP";
 choices[54][2] = "PPP";
 choices[54][3] = "RSVP";
 answers[54] = 1;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 9362. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[54] = 9362


//  Id pregunta: 9083 Año de creación de pregunta: 2014
 questions[55]= "56)  El protocolo TCP es un protocolo";
 choices[55]= new Array();
 choices[55][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[55][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[55][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[55][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[55] = 1;
 units[55] = ['109'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9083. Examen TIC-A1 2013";
 preguntaids[55] = 9083


//  Id pregunta: 8226 Año de creación de pregunta: 2011
 questions[56]= "57)  Los tipos de direcciones en IPv6 son los siguientes:";
 choices[56]= new Array();
 choices[56][0] = "Unicast, Multicast y Anycast";
 choices[56][1] = "Unicast y Multicast";
 choices[56][2] = "Somecast y Groupcast";
 choices[56][3] = "Somecast, Multicast y Worldcast";
 answers[56] = 0;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8226. Examen UPM A2 2011";
 preguntaids[56] = 8226


//  Id pregunta: 10890 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;cu&aacute;l no es un mecanismo de transici&oacute;n a ipv6?";
 choices[57]= new Array();
 choices[57][0] = "Tunel 6a4";
 choices[57][1] = "Tunel GRE";
 choices[57][2] = "Tunel ISATAP";
 choices[57][3] = "Tunel PPP";
 answers[57] = 3;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 10890. CCN-STIC-495";
 preguntaids[57] = 10890


//  Id pregunta: 9364 Año de creación de pregunta: 2014
 questions[58]= "59)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; m&aacute;scara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[58]= new Array();
 choices[58][0] = "M&aacute;scara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[58][1] = "M&aacute;scara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[58][2] = "M&aacute;scara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[58][3] = "M&aacute;scara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[58] = 0;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9364. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[58] = 9364


//  Id pregunta: 9263 Año de creación de pregunta: 2014
 questions[59]= "60)  &iquest;Qu&eacute; ASE (Elemento de Servicio de Aplicaci&oacute;n) usan todas las aplicaciones?";
 choices[59]= new Array();
 choices[59][0] = "ACSE (Association Control Service Element).";
 choices[59][1] = "RTSE (Reliable Transfer Service Element).";
 choices[59][2] = "ROSE (Remote Operation Service Element).";
 choices[59][3] = "ATSE (Application Transfer Service Element).";
 answers[59] = 0;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9263. ";
 preguntaids[59] = 9263


//  Id pregunta: 9366 Año de creación de pregunta: 2014
 questions[60]= "61)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;en qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[60]= new Array();
 choices[60][0] = "Red A.";
 choices[60][1] = "Red B.";
 choices[60][2] = "Red C.";
 choices[60][3] = "Indistintamente en la red B o en la red C.";
 answers[60] = 2;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 9366. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[60] = 9366


//  Id pregunta: 10084 Año de creación de pregunta: 2015
 questions[61]= "62)  El protocolo DHCP (Dynamic Host Configuration Protocol) y DHCPv6 (DHCP for IPv6) est&aacute;n definidos en los documentos:";
 choices[61]= new Array();
 choices[61][0] = "RFC 792 y RFC 4361, respectivamente.";
 choices[61][1] = "RFC 826 y RFC 3315, respectivamente.";
 choices[61][2] = "RFC 1034 y RFC 4361, respectivamente.";
 choices[61][3] = "RFC 2131 y RFC 3315, respectivamente.";
 answers[61] = 3;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10084. Examen TIC A2 2014";
 preguntaids[61] = 10084


//  Id pregunta: 10840 Año de creación de pregunta: 2015
 questions[62]= "63)  En IPv6, la etiqueta de flujo tiene una longitud de:";
 choices[62]= new Array();
 choices[62][0] = "8 bits";
 choices[62][1] = "16 bits";
 choices[62][2] = "20 bits";
 choices[62][3] = "No existe dicha etiqueta";
 answers[62] = 2;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 10840. ";
 preguntaids[62] = 10840


//  Id pregunta: 9586 Año de creación de pregunta: 2014
 questions[63]= "64)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[63]= new Array();
 choices[63][0] = "15 bits.";
 choices[63][1] = "8 bits.";
 choices[63][2] = "10 bits.";
 choices[63][3] = "3 bits.";
 answers[63] = 1;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 9586. TIC A2 2013 libre";
 preguntaids[63] = 9586


//  Id pregunta: 10005 Año de creación de pregunta: 2015
 questions[64]= "65)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[64]= new Array();
 choices[64][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[64][1] = "Cuando haya recibido al menos dos ACK.";
 choices[64][2] = "Cuando reciba cualquier ACK.";
 choices[64][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[64] = 2;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 10005. Examen TIC A2 2014";
 preguntaids[64] = 10005


//  Id pregunta: 9753 Año de creación de pregunta: 2014
 questions[65]= "66)  &iquest;Qu&eacute; cabeceras del datagrama IP son revisadas por los routers intermedios en IPv6?";
 choices[65]= new Array();
 choices[65][0] = "Todas las cabeceras";
 choices[65][1] = "Ninguna";
 choices[65][2] = "Todas las cabeceras menos las opcionales";
 choices[65][3] = "La cabecera hop-to-hop y el resto de cabeceras menos las cabeceras opcionales";
 answers[65] = 3;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 9753. ";
 preguntaids[65] = 9753


//  Id pregunta: 7940 Año de creación de pregunta: 2011
 questions[66]= "67)  Entre las diferencias en los protocolos IPv4 e IPv6 NO se encuentra que:";
 choices[66]= new Array();
 choices[66][0] = "La implementaci&oacute;n del multicast es obligatoria en IPv6 y opcional en IPv4.";
 choices[66][1] = "MTU m&iacute;nimo de IPv6 es de 1280 bytes frente a los 576 bytes de IPv4.";
 choices[66][2] = "El encabezado de IPv6 sin opciones es menor que el encabezado de IPv4 sin opciones.";
 choices[66][3] = "El soporte para IPsec es obligatorio en IPv6 y opcional en IPv4.";
 answers[66] = 2;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7940. Examen TIC A2 2010";
 preguntaids[66] = 7940


//  Id pregunta: 9268 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es un campo de la cabecera IPv4?";
 choices[67]= new Array();
 choices[67][0] = "IHL.";
 choices[67][1] = "NF.";
 choices[67][2] = "TOS.";
 choices[67][3] = "OPCIONES.";
 answers[67] = 1;
 units[67] = ['109'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 9268. ";
 preguntaids[67] = 9268


//  Id pregunta: 9383 Año de creación de pregunta: 2014
 questions[68]= "69)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[68]= new Array();
 choices[68][0] = "Red A.";
 choices[68][1] = "Red B.";
 choices[68][2] = "Red C.";
 choices[68][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[68] = 1;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9383. Examen TIC A2  2013";
 preguntaids[68] = 9383


//  Id pregunta: 9365 Año de creación de pregunta: 2014
 questions[69]= "70)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[69]= new Array();
 choices[69][0] = "No es v&aacute;lida.";
 choices[69][1] = "Unicast.";
 choices[69][2] = "Multicast.";
 choices[69][3] = "Loopback.";
 answers[69] = 2;
 units[69] = ['109'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 9365. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[69] = 9365


//  Id pregunta: 9381 Año de creación de pregunta: 2014
 questions[70]= "71)  En las comunicaciones a trav&eacute;s de sockets, &iquest;cu&aacute;l de las siguientes NO se corresponde con una primitiva?";
 choices[70]= new Array();
 choices[70][0] = "Bind";
 choices[70][1] = "Listen";
 choices[70][2] = "Reject";
 choices[70][3] = "Socket";
 answers[70] = 2;
 units[70] = ['109'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9381. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[70] = 9381


