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
//  Id pregunta: 9358 Año de creación de pregunta: 2014
 questions[0]= "1)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[0]= new Array();
 choices[0][0] = "95.26.35.144/30";
 choices[0][1] = "95.26.35.144/29";
 choices[0][2] = "95.26.35.128/27";
 choices[0][3] = "95.26.35.128/25";
 answers[0] = 2;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9358. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[0] = 9358


//  Id pregunta: 9435 Año de creación de pregunta: 2014
 questions[1]= "2)  Cu&aacute;l de los siguientes es un protocolo de encaminamiento externo:";
 choices[1]= new Array();
 choices[1][0] = "RIP";
 choices[1][1] = "OSPF";
 choices[1][2] = "BGP";
 choices[1][3] = "ISIS";
 answers[1] = 2;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9435. ";
 preguntaids[1] = 9435


//  Id pregunta: 9398 Año de creación de pregunta: 2014
 questions[2]= "3)  La tecnolog&iacute;a WiMAX 2 es conocida formalmente como:";
 choices[2]= new Array();
 choices[2][0] = "802.16m";
 choices[2][1] = "802.16a";
 choices[2][2] = "802.11x";
 choices[2][3] = "802.11n";
 answers[2] = 0;
 units[2] = ['106'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9398. Examen TIC A2  2013";
 preguntaids[2] = 9398


//  Id pregunta: 9432 Año de creación de pregunta: 2014
 questions[3]= "4)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[3]= new Array();
 choices[3][0] = "M&uacute;ltiples";
 choices[3][1] = "Trunk";
 choices[3][2] = "VLAN- Link";
 choices[3][3] = "Data-Link";
 answers[3] = 1;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9432. ";
 preguntaids[3] = 9432


//  Id pregunta: 9360 Año de creación de pregunta: 2014
 questions[4]= "5)  El puerto 69 es utilizado por:";
 choices[4]= new Array();
 choices[4][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[4][1] = "Finger.";
 choices[4][2] = "IMAP (Internet Message Access Protocol).";
 choices[4][3] = "SFTP (Secure File Transfer Protocol).";
 answers[4] = 0;
 units[4] = ['105'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9360. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[4] = 9360


//  Id pregunta: 9368 Año de creación de pregunta: 2014
 questions[5]= "6)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[5]= new Array();
 choices[5][0] = "RSVP";
 choices[5][1] = "ARP";
 choices[5][2] = "802.1ar";
 choices[5][3] = "H.264";
 answers[5] = 0;
 units[5] = ['107'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9368. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[5] = 9368


//  Id pregunta: 9356 Año de creación de pregunta: 2014
 questions[6]= "7)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[6]= new Array();
 choices[6][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[6][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[6][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.";
 choices[6][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[6] = 3;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9356. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[6] = 9356


//  Id pregunta: 9431 Año de creación de pregunta: 2014
 questions[7]= "8)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[7]= new Array();
 choices[7][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[7][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[7][2] = "Cuando ha recibido toda la trama";
 choices[7][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[7] = 0;
 units[7] = ['112'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 9431. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";
 preguntaids[7] = 9431


//  Id pregunta: 9427 Año de creación de pregunta: 2014
 questions[8]= "9)  Cu&aacute;l de los siguientes contenedores SDH no es posible:";
 choices[8]= new Array();
 choices[8][0] = "STM-1";
 choices[8][1] = "STM-16";
 choices[8][2] = "STM-128";
 choices[8][3] = "STM-256";
 answers[8] = 2;
 units[8] = ['107'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 9427. ";
 preguntaids[8] = 9427


//  Id pregunta: 9421 Año de creación de pregunta: 2014
 questions[9]= "10)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[9]= new Array();
 choices[9][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[9][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[9][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[9][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[9] = 2;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9421. ";
 preguntaids[9] = 9421


//  Id pregunta: 9267 Año de creación de pregunta: 2014
 questions[10]= "11)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[10]= new Array();
 choices[10][0] = "2, uno mayor y otro menor.";
 choices[10][1] = "3, mayor, mediano y menor.";
 choices[10][2] = "Ninguno.";
 choices[10][3] = "Depende del protocolo implementado.";
 answers[10] = 0;
 units[10] = ['105'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9267. ";
 preguntaids[10] = 9267


//  Id pregunta: 9365 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[11]= new Array();
 choices[11][0] = "No es v&aacute;lida.";
 choices[11][1] = "Unicast.";
 choices[11][2] = "Multicast.";
 choices[11][3] = "Loopback.";
 answers[11] = 2;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9365. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[11] = 9365


//  Id pregunta: 9430 Año de creación de pregunta: 2014
 questions[12]= "13)  Seleccionar la correcta:";
 choices[12]= new Array();
 choices[12][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[12][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[12][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[12][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[12] = 2;
 units[12] = ['112'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9430. ";
 preguntaids[12] = 9430


//  Id pregunta: 9434 Año de creación de pregunta: 2014
 questions[13]= "14)  En el encaminamiento por estado de los enlaces cada router:";
 choices[13]= new Array();
 choices[13][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[13][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[13][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[13][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[13] = 3;
 units[13] = ['112'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9434. ";
 preguntaids[13] = 9434


//  Id pregunta: 9437 Año de creación de pregunta: 2014
 questions[14]= "15)  La red TESTA tiene el rango de direcciones:";
 choices[14]= new Array();
 choices[14][0] = "10.0.0.0";
 choices[14][1] = "192.0.0.0";
 choices[14][2] = "62.0.0.0";
 choices[14][3] = "62.62.0.0";
 answers[14] = 3;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9437. ";
 preguntaids[14] = 9437


//  Id pregunta: 9381 Año de creación de pregunta: 2014
 questions[15]= "16)  En las comunicaciones a trav&eacute;s de sockets, &iquest;cu&aacute;l de las siguientes NO se corresponde con una primitiva?";
 choices[15]= new Array();
 choices[15][0] = "Bind";
 choices[15][1] = "Listen";
 choices[15][2] = "Reject";
 choices[15][3] = "Socket";
 answers[15] = 2;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9381. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[15] = 9381


//  Id pregunta: 9390 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[16]= new Array();
 choices[16][0] = "Web 3.0.";
 choices[16][1] = "Labelling.";
 choices[16][2] = "Taxonom&iacute;a.";
 choices[16][3] = "Folcsonom&iacute;a.";
 answers[16] = 3;
 units[16] = ['125'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9390. Examen TIC A2  2013";
 preguntaids[16] = 9390


//  Id pregunta: 9268 Año de creación de pregunta: 2014
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un campo de la cabecera IPv4?";
 choices[17]= new Array();
 choices[17][0] = "IHL.";
 choices[17][1] = "NF.";
 choices[17][2] = "TOS.";
 choices[17][3] = "OPCIONES.";
 answers[17] = 1;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9268. ";
 preguntaids[17] = 9268


//  Id pregunta: 9426 Año de creación de pregunta: 2014
 questions[18]= "19)  MTU es:";
 choices[18]= new Array();
 choices[18][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[18][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[18][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[18][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[18] = 0;
 units[18] = ['102'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9426. MTU-Maximum Transfer Unit";
 preguntaids[18] = 9426


//  Id pregunta: 9371 Año de creación de pregunta: 2010
 questions[19]= "20)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[19]= new Array();
 choices[19][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[19][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[19][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[19][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[19] = 0;
 units[19] = ['114'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9371. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[19] = 9371


//  Id pregunta: 9366 Año de creación de pregunta: 2014
 questions[20]= "21)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;en qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[20]= new Array();
 choices[20][0] = "Red A.";
 choices[20][1] = "Red B.";
 choices[20][2] = "Red C.";
 choices[20][3] = "Indistintamente en la red B o en la red C.";
 answers[20] = 2;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9366. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[20] = 9366


//  Id pregunta: 9262 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[21]= new Array();
 choices[21][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[21][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[21][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[21][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[21] = 2;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 9262. ";
 preguntaids[21] = 9262


//  Id pregunta: 9261 Año de creación de pregunta: 2014
 questions[22]= "23)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[22]= new Array();
 choices[22][0] = "8192";
 choices[22][1] = "1024";
 choices[22][2] = "512";
 choices[22][3] = "2048";
 answers[22] = 0;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9261. ";
 preguntaids[22] = 9261


//  Id pregunta: 9402 Año de creación de pregunta: 2014
 questions[23]= "24)  En el contexto de comunicaciones inal&aacute;mbricas, MIMO significa:";
 choices[23]= new Array();
 choices[23][0] = "Multiple Input Multiple Output.";
 choices[23][1] = "Massive Input Massive Output.";
 choices[23][2] = "Multiplexed Input Multiplexed Output.";
 choices[23][3] = "Mapped Input Mapped Output.";
 answers[23] = 0;
 units[23] = ['117'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9402. Examen TIC A2  2013";
 preguntaids[23] = 9402


//  Id pregunta: 9263 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Qu&eacute; ASE (Elemento de Servicio de Aplicaci&oacute;n) usan todas las aplicaciones?";
 choices[24]= new Array();
 choices[24][0] = "ACSE (Association Control Service Element).";
 choices[24][1] = "RTSE (Reliable Transfer Service Element).";
 choices[24][2] = "ROSE (Remote Operation Service Element).";
 choices[24][3] = "ATSE (Application Transfer Service Element).";
 answers[24] = 0;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9263. ";
 preguntaids[24] = 9263


//  Id pregunta: 9321 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;Cu&aacute;l es la herramienta utilizada para organizar reuniones virtuales dentro de la Red SARA?";
 choices[25]= new Array();
 choices[25][0] = "Conect@";
 choices[25][1] = "Re&uacute;nete";
 choices[25][2] = "Acceda en Cloud";
 choices[25][3] = "TelePresence";
 answers[25] = 1;
 units[25] = ['125'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9321. ";
 preguntaids[25] = 9321


//  Id pregunta: 9265 Año de creación de pregunta: 2014
 questions[26]= "27)  Indique la opci&oacute;n falsa:";
 choices[26]= new Array();
 choices[26][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[26][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[26][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[26][3] = "Todas son verdaderas.";
 answers[26] = 0;
 units[26] = ['105'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9265. ";
 preguntaids[26] = 9265


//  Id pregunta: 9230 Año de creación de pregunta: 2014
 questions[27]= "28)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[27]= new Array();
 choices[27][0] = "384 kbps.";
 choices[27][1] = "115 kbps.";
 choices[27][2] = "2 Mbps.";
 choices[27][3] = "10 Mbps.";
 answers[27] = 0;
 units[27] = ['117'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9230. Examen TIC A1 2013";
 preguntaids[27] = 9230


//  Id pregunta: 9373 Año de creación de pregunta: 2014
 questions[28]= "29)  MPLS (Multiprotocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[28]= new Array();
 choices[28][0] = "FEC (Forwarding Equivalent Class).";
 choices[28][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[28][2] = "CIR (Commited Information Rate).";
 choices[28][3] = "MBS (Maximum Burst Size).";
 answers[28] = 0;
 units[28] = ['107'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9373. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[28] = 9373


//  Id pregunta: 9433 Año de creación de pregunta: 2014
 questions[29]= "30)  En el encaminamiento por vector-distancia cada router:";
 choices[29]= new Array();
 choices[29][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[29][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[29][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[29][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[29] = 0;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9433. ";
 preguntaids[29] = 9433


//  Id pregunta: 9401 Año de creación de pregunta: 2014
 questions[30]= "31)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[30]= new Array();
 choices[30][0] = "ATSC";
 choices[30][1] = "ISDB-T";
 choices[30][2] = "DVB-T";
 choices[30][3] = "EDTVB";
 answers[30] = 2;
 units[30] = ['115'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 9401. Examen TIC A2  2013";
 preguntaids[30] = 9401


//  Id pregunta: 9266 Año de creación de pregunta: 2014
 questions[31]= "32)  &iquest;Cu&aacute;l no es un fallo detectado en el modelo de referencia OSI?";
 choices[31]= new Array();
 choices[31][0] = "Se desarroll&oacute; antes de que se inventaran los protocolos, as&iacute; que no se sab&iacute;a qu&eacute; funcionalidad poner en cada capa.";
 choices[31][1] = "Las capas de red y enlace de datos est&aacute;n muy llenas y se han subdividido en subcapas, cada una con funciones distintas.";
 choices[31][2] = "La administraci&oacute;n de la red es clave en el modelo.";
 choices[31][3] = "El modelo est&aacute; dominado por una mentalidad de comunicaciones.";
 answers[31] = 2;
 units[31] = ['105'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 9266. ";
 preguntaids[31] = 9266


//  Id pregunta: 9425 Año de creación de pregunta: 2014
 questions[32]= "33)  El tama&ntilde;o de trama m&iacute;nimo en Ethernet es:";
 choices[32]= new Array();
 choices[32][0] = "48 bytes";
 choices[32][1] = "24 bytes";
 choices[32][2] = "128 bytes";
 choices[32][3] = "64 bytes";
 answers[32] = 3;
 units[32] = ['112'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9425. ";
 preguntaids[32] = 9425


//  Id pregunta: 9362 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[33]= new Array();
 choices[33][0] = "Ping";
 choices[33][1] = "ICMP";
 choices[33][2] = "PPP";
 choices[33][3] = "RSVP";
 answers[33] = 1;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9362. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[33] = 9362


//  Id pregunta: 9423 Año de creación de pregunta: 2014
 questions[34]= "35)  El est&aacute;ndar Wimax est&aacute; especificado en la norma:";
 choices[34]= new Array();
 choices[34][0] = "IEEE 802.11";
 choices[34][1] = "IEEE 802.16";
 choices[34][2] = "IEEE 802.15";
 choices[34][3] = "IEEE 802.19";
 answers[34] = 1;
 units[34] = ['106'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 9423. ";
 preguntaids[34] = 9423


//  Id pregunta: 9323 Año de creación de pregunta: 2014
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[35]= new Array();
 choices[35][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[35][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[35][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[35][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[35] = 2;
 units[35] = ['117'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 9323. ";
 preguntaids[35] = 9323


//  Id pregunta: 9372 Año de creación de pregunta: 2014
 questions[36]= "37)  El algoritmo PLC (Packet Loss Concealment):";
 choices[36]= new Array();
 choices[36][0] = "Lo utiliza Frame Relay para el reenv&iacute;o de tramas p&eacute;rdidas por la congesti&oacute;n en el sentido de la transmisi&oacute;n.";
 choices[36][1] = "Algoritmo de ocultamiento de p&eacute;rdida de paquetes utilizado por VoIP.";
 choices[36][2] = "Utilizado por TCP para la retransmisi&oacute;n de paquetes despu&eacute;s de una trama NACK (negative acknowledgement).";
 choices[36][3] = "Algoritmo de descarte de paquetes en situaci&oacute;n de congesti&oacute;n en redes Frame Relay.";
 answers[36] = 1;
 units[36] = ['110'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 9372. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[36] = 9372


//  Id pregunta: 9424 Año de creación de pregunta: 2014
 questions[37]= "38)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[37]= new Array();
 choices[37][0] = "IEEE 802.1D";
 choices[37][1] = "IEEE 802.1P";
 choices[37][2] = "IEEE 802.1Q";
 choices[37][3] = "IEEE 802.2";
 answers[37] = 2;
 units[37] = ['112'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 9424. ";
 preguntaids[37] = 9424


//  Id pregunta: 9364 Año de creación de pregunta: 2014
 questions[38]= "39)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; m&aacute;scara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[38]= new Array();
 choices[38][0] = "M&aacute;scara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[38][1] = "M&aacute;scara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[38][2] = "M&aacute;scara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[38][3] = "M&aacute;scara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[38] = 0;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9364. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[38] = 9364


//  Id pregunta: 9370 Año de creación de pregunta: 2014
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[39]= new Array();
 choices[39][0] = "LSP (Label Switched Path).";
 choices[39][1] = "LSR (Label Switching Router).";
 choices[39][2] = "FEC (Forwarding Equivalence Class).";
 choices[39][3] = "ILP (Incoming Label Protocol).";
 answers[39] = 3;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9370. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[39] = 9370


//  Id pregunta: 9396 Año de creación de pregunta: 2014
 questions[40]= "41)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[40]= new Array();
 choices[40][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[40][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[40][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[40][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[40] = 1;
 units[40] = ['106'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9396. Examen TIC A2  2013";
 preguntaids[40] = 9396


//  Id pregunta: 9395 Año de creación de pregunta: 2014
 questions[41]= "42)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[41]= new Array();
 choices[41][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[41][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[41][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[41][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[41] = 1;
 units[41] = ['117'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9395. Examen TIC A2  2013";
 preguntaids[41] = 9395


//  Id pregunta: 9436 Año de creación de pregunta: 2014
 questions[42]= "43)  Un acceso b&aacute;sico RDSI tiene:";
 choices[42]= new Array();
 choices[42][0] = "30 canales B de 64 kbps y 1 canal D de 64 kbps";
 choices[42][1] = "2 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[42][2] = "30 canales B de 16 kbps y 1 canal D de 16 kbps";
 choices[42][3] = "2 canales B de 16 kbps y 1 canal D de 16 kbps";
 answers[42] = 0;
 units[42] = ['114'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 9436. ";
 preguntaids[42] = 9436


//  Id pregunta: 9357 Año de creación de pregunta: 2014
 questions[43]= "44)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[43]= new Array();
 choices[43][0] = "135.26.41.94";
 choices[43][1] = "135.26.41.95";
 choices[43][2] = "135.26.41.96";
 choices[43][3] = "135.26.41.97";
 answers[43] = 0;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 9357. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[43] = 9357


//  Id pregunta: 9270 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[44]= new Array();
 choices[44][0] = "Para mejorar la resistencia a las interferencias.";
 choices[44][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[44][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[44][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[44] = 0;
 units[44] = ['117'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 9270. Examen TIC A1 2013";
 preguntaids[44] = 9270


//  Id pregunta: 9429 Año de creación de pregunta: 2014
 questions[45]= "46)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[45]= new Array();
 choices[45][0] = "Router";
 choices[45][1] = "Switch";
 choices[45][2] = "Bridge";
 choices[45][3] = "Hub";
 answers[45] = 3;
 units[45] = ['102'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 9429. ";
 preguntaids[45] = 9429


//  Id pregunta: 9383 Año de creación de pregunta: 2014
 questions[46]= "47)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[46]= new Array();
 choices[46][0] = "Red A.";
 choices[46][1] = "Red B.";
 choices[46][2] = "Red C.";
 choices[46][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[46] = 1;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9383. Examen TIC A2  2013";
 preguntaids[46] = 9383


//  Id pregunta: 9361 Año de creación de pregunta: 2014
 questions[47]= "48)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[47]= new Array();
 choices[47][0] = "224.0.0.4";
 choices[47][1] = "224.0.0.5";
 choices[47][2] = "224.0.0.9";
 choices[47][3] = "224.0.0.22";
 answers[47] = 2;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 9361. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[47] = 9361


//  Id pregunta: 9394 Año de creación de pregunta: 2014
 questions[48]= "49)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[48]= new Array();
 choices[48][0] = "GPRS";
 choices[48][1] = "HSDPA";
 choices[48][2] = "HSUPA";
 choices[48][3] = "UMTS";
 answers[48] = 1;
 units[48] = ['117'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 9394. Examen TIC A2  2013";
 preguntaids[48] = 9394


//  Id pregunta: 9399 Año de creación de pregunta: 2014
 questions[49]= "50)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[49]= new Array();
 choices[49][0] = "RDSI";
 choices[49][1] = "Bluetooth";
 choices[49][2] = "DECT";
 choices[49][3] = "Wimax";
 answers[49] = 1;
 units[49] = ['107'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 9399. Examen TIC A2  2013";
 preguntaids[49] = 9399


//  Id pregunta: 9378 Año de creación de pregunta: 2014
 questions[50]= "51)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[50]= new Array();
 choices[50][0] = "32";
 choices[50][1] = "24";
 choices[50][2] = "20";
 choices[50][3] = "16";
 answers[50] = 2;
 units[50] = ['107'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9378. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[50] = 9378


//  Id pregunta: 9258 Año de creación de pregunta: 2014
 questions[51]= "52)  Respecto al protocolo HDLC, indique la falsa:";
 choices[51]= new Array();
 choices[51][0] = "Significa High-Level Data Link Control y est&aacute; basado en el ISO 3339.";
 choices[51][1] = "Usa transmisi&oacute;n s&iacute;ncrona y todos los intercambios se realizan a trav&eacute;s de tramas.";
 choices[51][2] = "Utiliza un formato &uacute;nico de tramas, tanto para datos como para informaci&oacute;n de control.";
 choices[51][3] = "Es el protocolo m&aacute;s importante para el enlace de datos, siendo la base para otros protocolos de nivel 2.";
 answers[51] = 0;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9258. ";
 preguntaids[51] = 9258


//  Id pregunta: 9389 Año de creación de pregunta: 2014
 questions[52]= "53)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[52]= new Array();
 choices[52][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[52][1] = "Europa y Norte de &Aacute;frica.";
 choices[52][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[52][3] = "Europa, Oriente Medio y Asia Central.";
 answers[52] = 3;
 units[52] = ['103'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 9389. Examen TIC A2  2013";
 preguntaids[52] = 9389


//  Id pregunta: 9369 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[53]= new Array();
 choices[53][0] = "OSPF";
 choices[53][1] = "RIP";
 choices[53][2] = "BGP";
 choices[53][3] = "EGP";
 answers[53] = 0;
 units[53] = ['102'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 9369. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[53] = 9369


//  Id pregunta: 9375 Año de creación de pregunta: 2014
 questions[54]= "55)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[54]= new Array();
 choices[54][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[54][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[54][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[54][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[54] = 3;
 units[54] = ['119'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 9375. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[54] = 9375


//  Id pregunta: 9273 Año de creación de pregunta: 2014
 questions[55]= "56)  El formato MP3:";
 choices[55]= new Array();
 choices[55][0] = "fue dise&ntilde;ado en 1984 en el Instituto Karlsruher.";
 choices[55][1] = "utiliza el algoritmo de compresi&oacute;n Lempel-Ziv-Welch (LZW).";
 choices[55][2] = "fue aprobado por el &ldquo;Motion Picture Experts Group&rdquo; en 1992.";
 choices[55][3] = "permite compresiones del orden de 10 a 1 respecto al formato CD, conp&eacute;rdida de informaci&oacute;n.";
 answers[55] = 3;
 units[55] = ['122'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9273. Examen TIC A1 2013";
 preguntaids[55] = 9273


//  Id pregunta: 9392 Año de creación de pregunta: 2014
 questions[56]= "57)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[56]= new Array();
 choices[56][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[56][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[56][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[56][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[56] = 2;
 units[56] = ['110'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 9392. Examen TIC A2  2013";
 preguntaids[56] = 9392


//  Id pregunta: 9391 Año de creación de pregunta: 2014
 questions[57]= "58)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[57][1] = "SGL (Splitterless G. Lite).";
 choices[57][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[57][3] = "CAP (Carrierless Amplitude Phase).";
 answers[57] = 3;
 units[57] = ['106'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9391. Examen TIC A2  2013";
 preguntaids[57] = 9391


//  Id pregunta: 9259 Año de creación de pregunta: 2014
 questions[58]= "59)  En relaci&oacute;n con el campo TTL, indique la falsa:";
 choices[58]= new Array();
 choices[58][0] = "Sirve para limitar la vida de un paquete.";
 choices[58][1] = "Evita que los paquetes est&eacute;n dando vueltas eternamente por la red.";
 choices[58][2] = "Permite una vida m&aacute;xima de 512 segundos.";
 choices[58][3] = "En la pr&aacute;ctica, cuenta saltos.";
 answers[58] = 2;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9259. ";
 preguntaids[58] = 9259


//  Id pregunta: 9397 Año de creación de pregunta: 2014
 questions[59]= "60)  Se&ntilde;ale cuales de las siguiente afirmaciones NO es una caracter&iacute;stica del protocolo EAP-TTLS:";
 choices[59]= new Array();
 choices[59][0] = "En la creaci&oacute;n del t&uacute;nel TLS el servidor se autentica mediante certificado.";
 choices[59][1] = "El cliente puede usar un m&eacute;todo de autenticaci&oacute;n distinto a EAP.";
 choices[59][2] = "Est&aacute; soportado de forma nativa en sistemas operativos Windows 7.";
 choices[59][3] = "Los mensajes de autenticaci&oacute;n del cliente son enviados cifrados al servidor.";
 answers[59] = 2;
 units[59] = ['119'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9397. Examen TIC A2  2013";
 preguntaids[59] = 9397


//  Id pregunta: 9367 Año de creación de pregunta: 2014
 questions[60]= "61)  El est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?a) Tier 5 b) Tier 4";
 choices[60]= new Array();
 choices[60][0] = "Tier 5";
 choices[60][1] = "Tier 4";
 choices[60][2] = "Tier 3";
 choices[60][3] = "Tier 0";
 answers[60] = 1;
 units[60] = ['104'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 9367. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[60] = 9367


//  Id pregunta: 9379 Año de creación de pregunta: 2014
 questions[61]= "62)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[61]= new Array();
 choices[61][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[61][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[61][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[61][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[61] = 3;
 units[61] = ['110'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 9379. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[61] = 9379


//  Id pregunta: 9260 Año de creación de pregunta: 2014
 questions[62]= "63)  Entre los conceptos fundamentales del modelo OSI no est&aacute;:";
 choices[62]= new Array();
 choices[62][0] = "Interfaz: normas de comunicaci&oacute;n entre capas.";
 choices[62][1] = "Primitivas de servicio: llamadas entrantes o salientes en cada una de las capas.";
 choices[62][2] = "Protocolo: conjunto de reglas organizadas y convenidas entre los participantes en una comunicaci&oacute;n.";
 choices[62][3] = "Servicio: cada capa recibe servicios de las entidades que se encuentran sobre ella y presta servicios a las entidades que se encuentran debajo.";
 answers[62] = 3;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9260. ";
 preguntaids[62] = 9260


//  Id pregunta: 9428 Año de creación de pregunta: 2014
 questions[63]= "64)  Respecto al protocolo Spanning Tree Protocol , es falso que:";
 choices[63]= new Array();
 choices[63][0] = "Es un protocolo de Nivel 2";
 choices[63][1] = "Permite realizar encaminamiento entre nodos";
 choices[63][2] = "Evita bucles en la red.";
 choices[63][3] = "Converge m&aacute;s lentamente que RSTP";
 answers[63] = 1;
 units[63] = ['112'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 9428. ";
 preguntaids[63] = 9428


//  Id pregunta: 9359 Año de creación de pregunta: 2014
 questions[64]= "65)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[64]= new Array();
 choices[64][0] = "Fragmentacion.";
 choices[64][1] = "Opciones de salto a salto.";
 choices[64][2] = "Autenticaci&oacute;n.";
 choices[64][3] = "L&iacute;mite de saltos.";
 answers[64] = 3;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 9359. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[64] = 9359


//  Id pregunta: 9422 Año de creación de pregunta: 2014
 questions[65]= "66)  Las siglas CSMA/CD significan:";
 choices[65]= new Array();
 choices[65][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[65][1] = "Carrier Sense Multiple Access with Common Data";
 choices[65][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[65][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[65] = 0;
 units[65] = ['112'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 9422. ";
 preguntaids[65] = 9422


//  Id pregunta: 9385 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes NO es un mecanismo de control de la congesti&oacute;n en redes?";
 choices[66]= new Array();
 choices[66][0] = "Cubeta con ficha.";
 choices[66][1] = "Paquetes de estrangulamiento.";
 choices[66][2] = "Control de admisi&oacute;n.";
 choices[66][3] = "Vector distancia.";
 answers[66] = 3;
 units[66] = ['102'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9385. Examen TIC A2  2013";
 preguntaids[66] = 9385


//  Id pregunta: 9393 Año de creación de pregunta: 2014
 questions[67]= "68)  Qu&eacute; datos NO incorporar&aacute; una descripci&oacute;n de sesi&oacute;n SDP (Session Description Protocol - RFC 4566) en una iniciaci&oacute;n de sesi&oacute;n utilizada en SIP (Session Initiation Protocol):";
 choices[67]= new Array();
 choices[67][0] = "Tipo de medio.";
 choices[67][1] = "Protocolo de transporte (RTP/UDP/IP, H 320, etc.).";
 choices[67][2] = "Formato del medio (video H.261, video MPEG, etc.).";
 choices[67][3] = "Tama&ntilde;o de los datos.";
 answers[67] = 3;
 units[67] = ['110'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 9393. Examen TIC A2  2013";
 preguntaids[67] = 9393


//  Id pregunta: 9386 Año de creación de pregunta: 2014
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[68]= new Array();
 choices[68][0] = "B";
 choices[68][1] = "D";
 choices[68][2] = "H";
 choices[68][3] = "I";
 answers[68] = 3;
 units[68] = ['114'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9386. Examen TIC A2  2013";
 preguntaids[68] = 9386


//  Id pregunta: 9363 Año de creación de pregunta: 2014
 questions[69]= "70)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[69]= new Array();
 choices[69][0] = "Cabecera.";
 choices[69][1] = "Checksum.";
 choices[69][2] = "Registros de recursos de Respuesta.";
 choices[69][3] = "Registros de recursos de Autoridad.";
 answers[69] = 1;
 units[69] = ['103'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 9363. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[69] = 9363


//  Id pregunta: 9328 Año de creación de pregunta: 2014
 questions[70]= "71)  EuroDOCSIS";
 choices[70]= new Array();
 choices[70][0] = "Significa, en el &aacute;mbito de la Uni&oacute;n Europea, DOCument System Interface Service, y hace referencia a un est&aacute;ndar de gesti&oacute;n documental.";
 choices[70][1] = "es una extensi&oacute;n de DOCSIS especificada por ETSI para el &aacute;mbito Europeo.";
 choices[70][2] = "significa, en el &aacute;mbito de la zona Euro, Digital Open Currency System Interface Standard.";
 choices[70][3] = "es un est&aacute;ndar propietario de gesti&oacute;n documental de amplia implantaci&oacute;n enEuropa.";
 answers[70] = 1;
 units[70] = ['115'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9328. ";
 preguntaids[70] = 9328


//  Id pregunta: 9438 Año de creación de pregunta: 2014
 questions[71]= "72)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[71]= new Array();
 choices[71][0] = "GEANT";
 choices[71][1] = "IRIS";
 choices[71][2] = "TESTA";
 choices[71][3] = "SARA";
 answers[71] = 1;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9438. ";
 preguntaids[71] = 9438


//  Id pregunta: 9387 Año de creación de pregunta: 2014
 questions[72]= "73)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[72][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[72][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[72][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[72] = 0;
 units[72] = ['107'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 9387. Examen TIC A2  2013";
 preguntaids[72] = 9387


//  Id pregunta: 9400 Año de creación de pregunta: 2014
 questions[73]= "74)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[73]= new Array();
 choices[73][0] = "100 a 224 MHz";
 choices[73][1] = "225 a 356 MHz";
 choices[73][2] = "470 a 862 MHz";
 choices[73][3] = "470 a 758 MHz";
 answers[73] = 3;
 units[73] = ['115'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 9400. Examen TIC A2  2013";
 preguntaids[73] = 9400


//  Id pregunta: 9264 Año de creación de pregunta: 2014
 questions[74]= "75)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[74]= new Array();
 choices[74][0] = "N3.";
 choices[74][1] = "N4.";
 choices[74][2] = "N6.";
 choices[74][3] = "N7.";
 answers[74] = 2;
 units[74] = ['105'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 9264. ";
 preguntaids[74] = 9264


