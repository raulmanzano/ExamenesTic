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
//  Id pregunta: 10373 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes componentes es de nivel 2?";
 choices[0]= new Array();
 choices[0][0] = "Repetidores";
 choices[0][1] = "Puentes";
 choices[0][2] = "Enrutadores";
 choices[0][3] = "Concentradores";
 answers[0] = 1;
 units[0] = ['102'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10373. ";
 preguntaids[0] = 10373


//  Id pregunta: 10906 Año de creación de pregunta: 2015
 questions[1]= "2)  Qu&eacute; campo de la cabecera TCP se utiliza, entre otros, para confirmar la recepci&oacute;n de los datos?";
 choices[1]= new Array();
 choices[1][0] = "numero de secuencia";
 choices[1][1] = "checksum";
 choices[1][2] = "flag FIN";
 choices[1][3] = "flag SYN";
 answers[1] = 0;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10906. ";
 preguntaids[1] = 10906


//  Id pregunta: 10884 Año de creación de pregunta: 2015
 questions[2]= "3)  Un ABR (Router frontera de &aacute;rea) de OSPF:";
 choices[2]= new Array();
 choices[2][0] = "Debe disponer de varias interfaces conectadas al area Backbone";
 choices[2][1] = "Es un enrutador con dos interfaces, cada una de ellas conectada a un area OSPF diferente";
 choices[2][2] = "Un ABR debe disponer de una interfaz conectada al &aacute;rea backbone, y otra conectada a otra &aacute;rea OSPF";
 choices[2][3] = "Basta con que disponga de una interfaz conectada al &aacute;rea Backbone de OSPF";
 answers[2] = 2;
 units[2] = ['102'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10884. ";
 preguntaids[2] = 10884


//  Id pregunta: 10095 Año de creación de pregunta: 2015
 questions[3]= "4)  Diferencia entre el protocolo RIP v1 y RIP v2:";
 choices[3]= new Array();
 choices[3][0] = "RIP v1 es un protocolo de estado del enlace mientras que el RIP v2 es de vector de distancia.";
 choices[3][1] = "RIP v1 encapsula los mensajes en paquetes UDP y RIP v2 en paquetes TCP.";
 choices[3][2] = "RIP v1 no admite subredes y RIP v2 si las admite.";
 choices[3][3] = "RIP v1 es un protocolo de encaminamiento din&aacute;mico de tipo IGP Y RIP v2 es un protocolo de encaminamiento din&aacute;mico de tipo BGP.";
 answers[3] = 2;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10095. Examen TIC A2 2014";
 preguntaids[3] = 10095


//  Id pregunta: 10903 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cuantos mensajes se intercambian durante el proceso de terminaci&oacute;n de la sesi&oacute;n TCP entre el cliente y el servidor?";
 choices[4]= new Array();
 choices[4][0] = "2";
 choices[4][1] = "4";
 choices[4][2] = "6";
 choices[4][3] = "8";
 answers[4] = 1;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10903. ";
 preguntaids[4] = 10903


//  Id pregunta: 10892 Año de creación de pregunta: 2015
 questions[5]= "6)  Qu&eacute; direcci&oacute;n multicast utiliza RIPng";
 choices[5]= new Array();
 choices[5][0] = "FF02::9";
 choices[5][1] = "FF02::1";
 choices[5][2] = "FF02:A";
 choices[5][3] = "FF02::6";
 answers[5] = 0;
 units[5] = ['102'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 10892. ";
 preguntaids[5] = 10892


//  Id pregunta: 10885 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Cu&aacute;l no es una caracteristica de PPP?";
 choices[6]= new Array();
 choices[6][0] = "Se puede usar en circuitos anal&oacute;gicos";
 choices[6][1] = "solo soporta IP";
 choices[6][2] = "es capaz de encapsular varios protocolos";
 choices[6][3] = "Proporciona correcci&oacute;n de errores";
 answers[6] = 1;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10885. ";
 preguntaids[6] = 10885


//  Id pregunta: 10758 Año de creación de pregunta: 2015
 questions[7]= "8)  Protocolo que permite el aprendizaje de redes y evita que se produzcan bucles a nivel de enlace.";
 choices[7]= new Array();
 choices[7][0] = "802.1D";
 choices[7][1] = "802.Q";
 choices[7][2] = "Spanning Tree Algorithm";
 choices[7][3] = "Algotirmo de Dijkstra";
 answers[7] = 0;
 units[7] = ['102'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10758. Como pregunta por protocolo es la a), y no el algoritmo c) que utiliza dicho protocolo.";
 preguntaids[7] = 10758


//  Id pregunta: 9429 Año de creación de pregunta: 2014
 questions[8]= "9)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[8]= new Array();
 choices[8][0] = "Router";
 choices[8][1] = "Switch";
 choices[8][2] = "Bridge";
 choices[8][3] = "Hub";
 answers[8] = 3;
 units[8] = ['102'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 9429. ";
 preguntaids[8] = 9429


//  Id pregunta: 10908 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Qu&eacute; comando se puede utilizar en un PC con S.O. Windows para obtener la configuraci&oacute;n IP de ese equipo?";
 choices[9]= new Array();
 choices[9][0] = "ifconfig -a";
 choices[9][1] = "netstat -rn";
 choices[9][2] = "iptables -L";
 choices[9][3] = "ipconfig";
 answers[9] = 3;
 units[9] = ['102'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10908. ";
 preguntaids[9] = 10908


//  Id pregunta: 9432 Año de creación de pregunta: 2014
 questions[10]= "11)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[10]= new Array();
 choices[10][0] = "M&uacute;ltiples";
 choices[10][1] = "Trunk";
 choices[10][2] = "VLAN- Link";
 choices[10][3] = "Data-Link";
 answers[10] = 1;
 units[10] = ['102'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9432. ";
 preguntaids[10] = 9432


//  Id pregunta: 10079 Año de creación de pregunta: 2015
 questions[11]= "12)  La direcci&oacute;n can&oacute;nica de un puente o bridge es la direcci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "MAC del interface principal del puente.";
 choices[11][1] = "IP del interface principal del puente.";
 choices[11][2] = "MAC del puente.";
 choices[11][3] = "Del interface de rango num&eacute;rico m&aacute;s alto del puente.";
 answers[11] = 2;
 units[11] = ['102'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 10079. Examen TIC A2 2014";
 preguntaids[11] = 10079


//  Id pregunta: 9426 Año de creación de pregunta: 2014
 questions[12]= "13)  MTU es:";
 choices[12]= new Array();
 choices[12][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[12][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[12][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[12][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[12] = 0;
 units[12] = ['102'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9426. MTU-Maximum Transfer Unit";
 preguntaids[12] = 9426


//  Id pregunta: 10898 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera acerca de las VLANs?";
 choices[13]= new Array();
 choices[13][0] = "Se deben tener al menos dos VLANs definidas en cada red conmutada";
 choices[13][1] = "Se deben tener al menos tres VLANs definidas en cada red conmutada";
 choices[13][2] = "No deber&iacute;an tenerse m&aacute;s de 3 switches en cada red conmutada";
 choices[13][3] = "Actuan a nivel 2 del modelo OSI";
 answers[13] = 3;
 units[13] = ['102'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10898. ";
 preguntaids[13] = 10898


//  Id pregunta: 10882 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;cu&aacute;l no es un estado de puerto en el protocolo STP?";
 choices[14]= new Array();
 choices[14][0] = "Listening";
 choices[14][1] = "Learning";
 choices[14][2] = "Forwarding";
 choices[14][3] = "Broadcasting";
 answers[14] = 3;
 units[14] = ['102'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10882. ";
 preguntaids[14] = 10882


//  Id pregunta: 10897 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Qu&eacute; m&eacute;todo de conmutaci&oacute;n LAN ejecuta un CRC en cada trama?";
 choices[15]= new Array();
 choices[15][0] = "Metodo de corte";
 choices[15][1] = "Verificaci&oacute;n de fragmentos";
 choices[15][2] = "Libre de fragmentos";
 choices[15][3] = "Almacenamiento y env&iacute;o";
 answers[15] = 3;
 units[15] = ['102'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10897. ";
 preguntaids[15] = 10897


//  Id pregunta: 10904 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Qu&eacute; factor determina en TCP el tama&ntilde;o de ventana?";
 choices[16]= new Array();
 choices[16][0] = "la cantidad de datos que el destino puede procesar a la vez";
 choices[16][1] = "el n&uacute;mero de servicios incluidos en el segmento TCP";
 choices[16][2] = "la cantidad de datos que la fuente es capaz de enviar de una sola vez";
 choices[16][3] = "la cantidad de datos a transmitir";
 answers[16] = 0;
 units[16] = ['102'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 10904. ";
 preguntaids[16] = 10904


//  Id pregunta: 9584 Año de creación de pregunta: 2014
 questions[17]= "18)  En la administraci&oacute;n de un dispositivo switch &iquest;qu&eacute; es un trunk?";
 choices[17]= new Array();
 choices[17][0] = "Un puerto de velocidad GigaEthernet o 10 GigaEthernet.";
 choices[17][1] = "Un enlace que agrega tr&aacute;fico de varias VLANs.";
 choices[17][2] = "Un adaptador fibra - par trenzado.";
 choices[17][3] = "Una versi&oacute;n estable del firmware del dispositivo.";
 answers[17] = 1;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9584. TIC A2 2013 libre";
 preguntaids[17] = 9584


//  Id pregunta: 9385 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes NO es un mecanismo de control de la congesti&oacute;n en redes?";
 choices[18]= new Array();
 choices[18][0] = "Cubeta con ficha.";
 choices[18][1] = "Paquetes de estrangulamiento.";
 choices[18][2] = "Control de admisi&oacute;n.";
 choices[18][3] = "Vector distancia.";
 answers[18] = 3;
 units[18] = ['102'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9385. Examen TIC A2  2013";
 preguntaids[18] = 9385


//  Id pregunta: 10843 Año de creación de pregunta: 2015
 questions[19]= "20)  Son protocolos de estado del enlace:";
 choices[19]= new Array();
 choices[19][0] = "OSPF y RIPv2";
 choices[19][1] = "IS-IS y OSPF";
 choices[19][2] = "IGRP y RIPv2";
 choices[19][3] = "RIPv2 e IS-IS";
 answers[19] = 1;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10843. ";
 preguntaids[19] = 10843


//  Id pregunta: 10902 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Cu&aacute;l es la forma en que un administrador puede configurar VLAN?";
 choices[20]= new Array();
 choices[20][0] = "Est&aacute;ticamente o Dinamicamente";
 choices[20][1] = "Din&aacute;micamente o a trav&eacute;s de una base de datos de VLAN";
 choices[20][2] = "A trav&eacute;s de un servidor DHCP";
 choices[20][3] = "A trav&eacute;s de una base de datos";
 answers[20] = 0;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 10902. ";
 preguntaids[20] = 10902


//  Id pregunta: 10547 Año de creación de pregunta: 2015
 questions[21]= "22)  En cuanto a la segmentaci&oacute;n de dominios en una red se&ntilde;ale la verdadera";
 choices[21]= new Array();
 choices[21][0] = "Un switch segmenta dominios de colisi&oacute;n y de broadcast";
 choices[21][1] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n de manera f&iacute;sica y de broadcast de manera l&oacute;gica";
 choices[21][2] = "Un router segmenta dominios de broadcast de manera f&iacute;sica";
 choices[21][3] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n y de broadcast de manera f&iacute;sica";
 answers[21] = 2;
 units[21] = ['102'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10547. ";
 preguntaids[21] = 10547


//  Id pregunta: 10080 Año de creación de pregunta: 2015
 questions[22]= "23)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[22]= new Array();
 choices[22][0] = "Jitter.";
 choices[22][1] = "Delay.";
 choices[22][2] = "Round Trip delay Time.";
 choices[22][3] = "Latencia.";
 answers[22] = 2;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10080. Examen TIC A2 2014";
 preguntaids[22] = 10080


//  Id pregunta: 9369 Año de creación de pregunta: 2014
 questions[23]= "24)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[23]= new Array();
 choices[23][0] = "OSPF";
 choices[23][1] = "RIP";
 choices[23][2] = "BGP";
 choices[23][3] = "EGP";
 answers[23] = 0;
 units[23] = ['102'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9369. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[23] = 9369


//  Id pregunta: 10900 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[24]= new Array();
 choices[24][0] = "Direccion destino IP";
 choices[24][1] = "Direccion origen IP";
 choices[24][2] = "Protocolo";
 choices[24][3] = "Puerto";
 answers[24] = 1;
 units[24] = ['102'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 10900. ";
 preguntaids[24] = 10900


//  Id pregunta: 10899 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza caracter&iacute;sticas tanto de los protocolos de vector distancia como de los de estado de enlace?";
 choices[25]= new Array();
 choices[25][0] = "OSPF";
 choices[25][1] = "RIP";
 choices[25][2] = "RIPv2";
 choices[25][3] = "EIGRP";
 answers[25] = 3;
 units[25] = ['102'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10899. ";
 preguntaids[25] = 10899


//  Id pregunta: 10546 Año de creación de pregunta: 2015
 questions[26]= "27)  Las redes conmutadas ethernet, tienen una serie de ventajas. Se&ntilde;ale la que no se encuentra entre ellas";
 choices[26]= new Array();
 choices[26][0] = "Redes half-duplex";
 choices[26][1] = "Autonegociaci&oacute;n";
 choices[26][2] = "Trunking";
 choices[26][3] = "Uso del comando pause";
 answers[26] = 0;
 units[26] = ['102'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 10546. ";
 preguntaids[26] = 10546


//  Id pregunta: 9223 Año de creación de pregunta: 2014
 questions[27]= "28)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[27]= new Array();
 choices[27][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[27][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[27][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[27][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[27] = 1;
 units[27] = ['102'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9223. Examen TIC A1 2013";
 preguntaids[27] = 9223


//  Id pregunta: 10093 Año de creación de pregunta: 2015
 questions[28]= "29)  En el protocolo RIP Version 2 (Routing Information Protocol), cuyo algoritmo est&aacute; basado en vector distancia, el l&iacute;mite m&aacute;ximo de saltos a partir del cual se considera una ruta como inalcanzable es:";
 choices[28]= new Array();
 choices[28][0] = "15 saltos.";
 choices[28][1] = "9 saltos.";
 choices[28][2] = "16 saltos.";
 choices[28][3] = "7 saltos.";
 answers[28] = 0;
 units[28] = ['102'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 10093. Examen TIC A2 2014";
 preguntaids[28] = 10093


//  Id pregunta: 10883 Año de creación de pregunta: 2015
 questions[29]= "30)  Los mensajes intercambiados entre Bridges en STP se denominan:";
 choices[29]= new Array();
 choices[29][0] = "PDUs";
 choices[29][1] = "PDIs";
 choices[29][2] = "BPDU";
 choices[29][3] = "SPDU";
 answers[29] = 2;
 units[29] = ['102'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10883. ";
 preguntaids[29] = 10883


//  Id pregunta: 10529 Año de creación de pregunta: 2015
 questions[30]= "31)  Cu&aacute;l de los siguientes es un algoritmo de encaminamiento de estado del enlace";
 choices[30]= new Array();
 choices[30][0] = "IS-IS";
 choices[30][1] = "IGRP";
 choices[30][2] = "BGP";
 choices[30][3] = "RIP";
 answers[30] = 0;
 units[30] = ['102'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10529. ";
 preguntaids[30] = 10529


//  Id pregunta: 10910 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Qu&eacute; mensaje DHCP se utiliza para localizar cualquier servidor DHCP disponible en la red?";
 choices[31]= new Array();
 choices[31][0] = "DHCPREQUEST";
 choices[31][1] = "DHCPACK";
 choices[31][2] = "DHCPDISCOVER";
 choices[31][3] = "DHCPOFFER";
 answers[31] = 2;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10910. ";
 preguntaids[31] = 10910


