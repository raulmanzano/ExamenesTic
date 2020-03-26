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
//  Id pregunta: 8105 Año de creación de pregunta: 2011
 questions[0]= "1)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[0]= new Array();
 choices[0][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[0][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[0][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[0][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[0] = 0;
 units[0] = ['112'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8105. Examen TIC A2 2010 interna";
 preguntaids[0] = 8105


//  Id pregunta: 8082 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Cu&aacute;l es uno de los inconvenientes de usar un Hub?:";
 choices[1]= new Array();
 choices[1][0] = "Un Hub no puede extender la distancia operativa de la red";
 choices[1][1] = "Un Hub no puede filtrar el tr&aacute;fico de la red";
 choices[1][2] = "Un Hub no puede amplificar se&ntilde;ales debilitadas";
 choices[1][3] = "Un Hub no cumple ninguna de las anteriores";
 answers[1] = 1;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8082. Analista Ayto. Madrid 2010";
 preguntaids[1] = 8082


//  Id pregunta: 8139 Año de creación de pregunta: 2011
 questions[2]= "3)  En relaci&oacute;n con los mecanismos de seguridad en redes Wi-Fi, indique la afirmaci&oacute;n FALSA:";
 choices[2]= new Array();
 choices[2][0] = "Las especificaciones WEP y WPA usan RC4 como algoritmo de cifrado.";
 choices[2][1] = "La especificaci&oacute;n WPA2 mejora la segundad al usar AES como algoritmo de cifrado.";
 choices[2][2] = "En el est&aacute;ndar IEEE 802.11 i es donde se detalla la especificaci&oacute;n de WPA2.";
 choices[2][3] = "El est&aacute;ndar IEEE 802.11g incrementa la seguridad introduciendo 3DES como algoritmo de cifrado.";
 answers[2] = 3;
 units[2] = ['108'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8139. Examen TIC A2 2010 interna";
 preguntaids[2] = 8139


//  Id pregunta: 8192 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes NO es una plataforma de virtualizaci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "Xen";
 choices[3][1] = "Alfresco";
 choices[3][2] = "VMWare";
 choices[3][3] = "Virtuozzo";
 answers[3] = 1;
 units[3] = ['124'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8192. Examen TIC A2 2010 interna";
 preguntaids[3] = 8192


//  Id pregunta: 8116 Año de creación de pregunta: 2011
 questions[4]= "5)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo?";
 choices[4]= new Array();
 choices[4][0] = "0-15";
 choices[4][1] = "0-255";
 choices[4][2] = "0-5";
 choices[4][3] = "0-127";
 answers[4] = 1;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8116. Examen TIC A2 2010";
 preguntaids[4] = 8116


//  Id pregunta: 8112 Año de creación de pregunta: 2011
 questions[5]= "6)  De las siguientes afirmaciones sobre el protocolo ICMP, &iquest;cu&aacute;l es cierta?";
 choices[5]= new Array();
 choices[5][0] = "Est&aacute; definido en las RFC 792 y 2463.";
 choices[5][1] = "Se considera un protocolo de nivel de transporte, al ir sobre datagramas IP.";
 choices[5][2] = "Permite conocer la direcci&oacute;n MAC asociada a una direcci&oacute;n IP.";
 choices[5][3] = "La cabecera tiene una longitud de 4 bytes en ICMPv4 y de 8 en ICMPv6.";
 answers[5] = 0;
 units[5] = ['105', '109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8112. Examen TIC A2 2010 interna";
 preguntaids[5] = 8112


//  Id pregunta: 8194 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes problemas afecta a los medios de transmisi&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "Reverberaci&oacute;n.";
 choices[6][1] = "Ruido blanco";
 choices[6][2] = "Afon&iacute;a";
 choices[6][3] = "Todos son posibles problemas de los medios de transmisi&oacute;n";
 answers[6] = 1;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8194. Examen TIC A2 2010 interna";
 preguntaids[6] = 8194


//  Id pregunta: 8149 Año de creación de pregunta: 2011
 questions[7]= "8)  En las redes m&oacute;viles 3G de transici&oacute;n, encontramos tecnolog&iacute;as como HSPA evolucionado o HSPA+. &iquest;Cu&aacute;l es una de las caracter&iacute;sticas de mejora de esta tecnolog&iacute;a?";
 choices[7]= new Array();
 choices[7][0] = "Permite el uso de antenas MIMO";
 choices[7][1] = "Alcanza velocidades pico te&oacute;ncas de 100 Mbps.";
 choices[7][2] = "Proporciona capacidades sim&eacute;tricas para los enlaces ascendente y descendente";
 choices[7][3] = "La modulaci&oacute;n es GMSK, de gran eficiencia espectral";
 answers[7] = 0;
 units[7] = ['117'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8149. Examen TIC A2 2010 interna";
 preguntaids[7] = 8149


//  Id pregunta: 8153 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;En qu&eacute; a&ntilde;o ha concluido el apag&oacute;n anal&oacute;gico en Espa&ntilde;a?";
 choices[8]= new Array();
 choices[8][0] = "2007";
 choices[8][1] = "2008";
 choices[8][2] = "2009";
 choices[8][3] = "2010";
 answers[8] = 3;
 units[8] = ['115'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8153. Examen TIC A2 2010 interna";
 preguntaids[8] = 8153


//  Id pregunta: 8111 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta, considerando diferencias entre IPv4 e IPv6?";
 choices[9]= new Array();
 choices[9][0] = "Ipv6 duplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 64 bits.";
 choices[9][1] = "Algunos campos de la cabecera de Ipv4 han sido eliminados o convertidos en opcionales para reducir el coste de proceso normal de los paquetes y limitar el coste en ancho de banda de la cabecera Ipv6.";
 choices[9][2] = "IPV6 complica la cabecera, al a&ntilde;adir campos a los que ya tenia la cabecea Ipv4, para permitir mayor capacidad de configuraci&oacute;n, lo que supone, por contra, un mayor coste de proceso, que se compensar&aacute; por la mayor potencia del hardware.";
 choices[9][3] = "IPv6 triplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 96 bits.";
 answers[9] = 1;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8111. Examen TIC A2 2010 interna";
 preguntaids[9] = 8111


//  Id pregunta: 8229 Año de creación de pregunta: 2011
 questions[10]= "11)  En la tecnolog&iacute;a VDSL, &iquest;cu&aacute;ntos canales se utilizan para la transmisi&oacute;n de los datos?";
 choices[10]= new Array();
 choices[10][0] = "4 (2 de bajada y 2 para subida)";
 choices[10][1] = "3 (2 de bajada y 1 de subida)";
 choices[10][2] = "2 (1 de bajada y 1 de subida)";
 choices[10][3] = "5 (3 de bajada y 2 de subida)";
 answers[10] = 0;
 units[10] = ['108'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8229. Examen UPM A2 2011";
 preguntaids[10] = 8229


//  Id pregunta: 8143 Año de creación de pregunta: 2011
 questions[11]= "12)  La Web sem&aacute;ntica pretende dotar a la Web de mayor significado, gracias a una informaci&oacute;n mejor definida. Para ello se utilizan tecnolog&iacute;as como:";
 choices[11]= new Array();
 choices[11][0] = "RTF.";
 choices[11][1] = "RML.";
 choices[11][2] = "OWL.";
 choices[11][3] = "Jabsys.";
 answers[11] = 2;
 units[11] = ['125'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8143. Examen TIC A2 2010 interna";
 preguntaids[11] = 8143


//  Id pregunta: 8195 Año de creación de pregunta: 2011
 questions[12]= "13)  Un cable consistente en un n&uacute;cleo de vidrio con un alto Indice refracci&oacute;n, rodeada de una capa o revestimiento de material similar, pero con &iacute;ndice de refracci&oacute;n ligeramente menor, y, todo ello, envuelto en una cubierta do protecci&oacute;n totalmente opaca que le proporciona consistencia, es un cable:";
 choices[12]= new Array();
 choices[12][0] = "De par trenzado tipo BS/UTP (Braided ana screened unshielded twisteo pair).";
 choices[12][1] = "Coaxial de tipo thick";
 choices[12][2] = "De par trenzado tipo S/STP (Screened and shielded twisted pair)";
 choices[12][3] = "De fibra &oacute;ptica";
 answers[12] = 3;
 units[12] = ['106'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8195. Examen TIC A2 2010 interna";
 preguntaids[12] = 8195


//  Id pregunta: 8025 Año de creación de pregunta: 2011
 questions[13]= "14)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[13]= new Array();
 choices[13][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[13][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[13][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[13][3] = "Puede usar conectores MIC.";
 answers[13] = 3;
 units[13] = ['104'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8025. Examen TIC A2 2010";
 preguntaids[13] = 8025


//  Id pregunta: 8156 Año de creación de pregunta: 2011
 questions[14]= "15)  1 &iquest;En qu&eacute; RFC se describe el modelo de seguridad basado en usuario (USM o User-basad Security Model) para la versi&oacute;n 3 de SNMP?";
 choices[14]= new Array();
 choices[14][0] = "RFC 1157.";
 choices[14][1] = "RFC 1441";
 choices[14][2] = "RFC 3414";
 choices[14][3] = "RFC 3854";
 answers[14] = 2;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8156. Examen TIC A2 2010 interna";
 preguntaids[14] = 8156


//  Id pregunta: 8224 Año de creación de pregunta: 2011
 questions[15]= "16)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[15]= new Array();
 choices[15][0] = "Firma digital";
 choices[15][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[15][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[15][3] = "Seguridad Wi-Fi";
 answers[15] = 1;
 units[15] = ['104'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8224. Examen UPM A2 2011";
 preguntaids[15] = 8224


//  Id pregunta: 8228 Año de creación de pregunta: 2011
 questions[16]= "17)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[16]= new Array();
 choices[16][0] = "Agente de usuario";
 choices[16][1] = "Servidor proxy";
 choices[16][2] = "Agente de usuario inverso";
 choices[16][3] = "Agente proxy";
 answers[16] = 3;
 units[16] = ['110'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8228. Examen UPM A2 2011";
 preguntaids[16] = 8228


//  Id pregunta: 8084 Año de creación de pregunta: 2011
 questions[17]= "18)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[17]= new Array();
 choices[17][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[17][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[17][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[17][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[17] = 0;
 units[17] = ['114'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8084. Analista Ayto. Madrid 2010";
 preguntaids[17] = 8084


//  Id pregunta: 8110 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Cu&aacute;l es el well-known port del protocolo SNMP en el modo petici&oacute;n-respuesta?";
 choices[18]= new Array();
 choices[18][0] = "169";
 choices[18][1] = "161";
 choices[18][2] = "171";
 choices[18][3] = "179";
 answers[18] = 1;
 units[18] = ['114'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8110. Examen TIC A2 2010 interna";
 preguntaids[18] = 8110


//  Id pregunta: 8095 Año de creación de pregunta: 2011
 questions[19]= "20)  Las fibras monomodo:";
 choices[19]= new Array();
 choices[19][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[19][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[19][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[19][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[19] = 0;
 units[19] = ['106'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8095. Analista Ayto. Madrid 2010";
 preguntaids[19] = 8095


//  Id pregunta: 8075 Año de creación de pregunta: 2011
 questions[20]= "21)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[20]= new Array();
 choices[20][0] = "Conecta";
 choices[20][1] = "Robinson";
 choices[20][2] = "Stork";
 choices[20][3] = "Interoperability card";
 answers[20] = 2;
 units[20] = ['123'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8075. ";
 preguntaids[20] = 8075


//  Id pregunta: 8109 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Qu&eacute; es una DMZ o zona desmilitarizada?";
 choices[21]= new Array();
 choices[21][0] = "Es una subred perimetral aislada por cortafuegos aunque visible desde Internet.";
 choices[21][1] = "a) Es una subred libre de ataques externos, donde residen -entre otros- servidores con bases de datos criticas.";
 choices[21][2] = "Es una subred desde la que se permiten conexiones a la red interna, por estar la primera desmilitarizada.";
 choices[21][3] = "Es un tipo de honeypot.";
 answers[21] = 0;
 units[21] = ['113'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8109. Examen TIC A2 2010 interna";
 preguntaids[21] = 8109


//  Id pregunta: 8230 Año de creación de pregunta: 2011
 questions[22]= "23)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[22]= new Array();
 choices[22][0] = "Bluetooth";
 choices[22][1] = "HomeRF";
 choices[22][2] = "HiperLAN/2";
 choices[22][3] = "IrLMP";
 answers[22] = 1;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8230. Examen UPM A2 2011";
 preguntaids[22] = 8230


//  Id pregunta: 8027 Año de creación de pregunta: 2011
 questions[23]= "24)  El cable UTP (Unshielded Twisted Pair):";
 choices[23]= new Array();
 choices[23][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair).";
 choices[23][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[23][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[23][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[23] = 1;
 units[23] = ['104'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8027. Examen TIC A2 2010";
 preguntaids[23] = 8027


//  Id pregunta: 8183 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cual de las siguientes soluciones comerciales de Escritorio Remoto se distribuye bajo licencia propietaria?";
 choices[24]= new Array();
 choices[24][0] = "Vinagre";
 choices[24][1] = "DameWare Mini Remote Control";
 choices[24][2] = "TightVNC";
 choices[24][3] = "RdesKtop";
 answers[24] = 1;
 units[24] = ['123'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8183. Examen TIC A2 2010 interna";
 preguntaids[24] = 8183


//  Id pregunta: 8081 Año de creación de pregunta: 2011
 questions[25]= "26)  El est&aacute;ndar 802.11b mas conocido como Wifi, trabaja en la banda libre de:";
 choices[25]= new Array();
 choices[25][0] = "2.4 GHz";
 choices[25][1] = "2.4 MHz";
 choices[25][2] = "2.4 THz";
 choices[25][3] = "2 GHz";
 answers[25] = 0;
 units[25] = ['108'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8081. Analista Ayto. Madrid 2010";
 preguntaids[25] = 8081


//  Id pregunta: 8225 Año de creación de pregunta: 2011
 questions[26]= "27)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[26]= new Array();
 choices[26][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[26][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[26][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[26][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[26] = 3;
 units[26] = ['106'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8225. Examen UPM A2 2011";
 preguntaids[26] = 8225


//  Id pregunta: 8103 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes modos de propagaci&oacute;n de la fibra &oacute;ptica permite un mayor alcance y capacidad?";
 choices[27]= new Array();
 choices[27][0] = "Monomodo";
 choices[27][1] = "Multimodo con salto de &iacute;ndice de refracci&oacute;n.";
 choices[27][2] = "Multimodo con &iacute;ndice de refracci&oacute;n gradual.";
 choices[27][3] = "Ultramodo de alta dispersi&oacute;n modal.";
 answers[27] = 0;
 units[27] = ['106'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8103. Examen TIC A2 2010 interna";
 preguntaids[27] = 8103


//  Id pregunta: 8029 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes protocolos de enrutamiento NO soporta VLSM (Variable Length Subnet Mask - M&aacute;scara de subred de tama&ntilde;o variable)?:";
 choices[28]= new Array();
 choices[28][0] = "RIPv2.";
 choices[28][1] = "EIGRP.";
 choices[28][2] = "IGRP.";
 choices[28][3] = "OSPF.";
 answers[28] = 2;
 units[28] = ['102', '103'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8029. Examen TIC A2 2010";
 preguntaids[28] = 8029


//  Id pregunta: 8232 Año de creación de pregunta: 2011
 questions[29]= "30)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[29]= new Array();
 choices[29][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[29][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[29][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[29][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[29] = 1;
 units[29] = ['103'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8232. Examen UPM A2 2011";
 preguntaids[29] = 8232


//  Id pregunta: 8104 Año de creación de pregunta: 2011
 questions[30]= "31)  El est&aacute;ndar IEEE 802.16 hace referencia a:";
 choices[30]= new Array();
 choices[30][0] = "Bluetooth.";
 choices[30][1] = "Wi-Fi.";
 choices[30][2] = "Wimax.";
 choices[30][3] = "Wireless LAN.";
 answers[30] = 2;
 units[30] = ['108'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8104. Examen TIC A2 2010 interna";
 preguntaids[30] = 8104


//  Id pregunta: 8223 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;En qu&eacute; recomendaci&oacute;n del ITU-T se especifican las caracter&iacute;sticas de las fibras &oacute;pticas monomodo &quot;non-zero dispersion-shifted&quot; (NZDSF) habitualmente utilizadas en DWDM?:";
 choices[31]= new Array();
 choices[31][0] = "G.653";
 choices[31][1] = "G.654";
 choices[31][2] = "G.655";
 choices[31][3] = "G.656";
 answers[31] = 2;
 units[31] = ['106'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 8223. Examen TIC A2 2010 interna";
 preguntaids[31] = 8223


//  Id pregunta: 8158 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;En qu&eacute; recomendaci&oacute;n de la Uni&oacute;n Internacional de Telecomunicaciones viene recogida la tecnolog&iacute;a ADSL-Lite?";
 choices[32]= new Array();
 choices[32][0] = "ITU G.992.1.";
 choices[32][1] = "ITU G.992.2";
 choices[32][2] = "ITU G.992.3.";
 choices[32][3] = "ITUG.992.4.";
 answers[32] = 1;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8158. Examen TIC A2 2010 interna";
 preguntaids[32] = 8158


//  Id pregunta: 8142 Año de creación de pregunta: 2011
 questions[33]= "34)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[33]= new Array();
 choices[33][0] = "Wiki.";
 choices[33][1] = "Mashup.";
 choices[33][2] = "Blog.";
 choices[33][3] = "Agregador o feeder.";
 answers[33] = 0;
 units[33] = ['125'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8142. Examen TIC A2 2010 interna";
 preguntaids[33] = 8142


//  Id pregunta: 8079 Año de creación de pregunta: 2011
 questions[34]= "35)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[34]= new Array();
 choices[34][0] = "a) 172.16.20.0";
 choices[34][1] = "172.16.24.45";
 choices[34][2] = "Ambas respuestas son correctas";
 choices[34][3] = "Ninguna respuesta es correcta";
 answers[34] = 2;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8079. Analista Ayto. Madrid 2010";
 preguntaids[34] = 8079


//  Id pregunta: 8137 Año de creación de pregunta: 2011
 questions[35]= "36)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[35]= new Array();
 choices[35][0] = "4 bits.";
 choices[35][1] = "5 bits.";
 choices[35][2] = "32 bits.";
 choices[35][3] = "258 bits.";
 answers[35] = 2;
 units[35] = ['107'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8137. Examen TIC A2 2010 interna";
 preguntaids[35] = 8137


//  Id pregunta: 8097 Año de creación de pregunta: 2011
 questions[36]= "37)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[36]= new Array();
 choices[36][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[36][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[36][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = 1;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8097. Analista Ayto. Madrid 2010";
 preguntaids[36] = 8097


//  Id pregunta: 8152 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes algoritmos de cifrado NO se implementa en WiMax?";
 choices[37]= new Array();
 choices[37][0] = "3DES";
 choices[37][1] = "SEAL";
 choices[37][2] = "AES";
 choices[37][3] = "RSA";
 answers[37] = 1;
 units[37] = ['108'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 8152. Examen TIC A2 2010 interna";
 preguntaids[37] = 8152


//  Id pregunta: 8155 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;Qu&eacute; codec de v&iacute;deo se utiliza en la TDT para los canales en alta definici&oacute;n (HD)?";
 choices[38]= new Array();
 choices[38][0] = "Huffyuv.";
 choices[38][1] = "MPEG-4";
 choices[38][2] = "MPEG-2";
 choices[38][3] = "Sorenson.";
 answers[38] = 1;
 units[38] = ['115'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 8155. Examen TIC A2 2010 interna";
 preguntaids[38] = 8155


//  Id pregunta: 8113 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Sobre qu&eacute; protocolo se encapsulan los paquetes DHCP?";
 choices[39]= new Array();
 choices[39][0] = "HTTP.";
 choices[39][1] = "UDP.";
 choices[39][2] = "TCP.";
 choices[39][3] = "IP.";
 answers[39] = 1;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8113. Examen TIC A2 2010 interna";
 preguntaids[39] = 8113


//  Id pregunta: 8107 Año de creación de pregunta: 2011
 questions[40]= "41)  &iquest;Qu&eacute; tipo de codificaci&oacute;n se utiliza en las redes Ethernet?";
 choices[40]= new Array();
 choices[40][0] = "London";
 choices[40][1] = "Liverpool.";
 choices[40][2] = "Manchester.";
 choices[40][3] = "Boston.";
 answers[40] = 2;
 units[40] = ['112'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8107. Examen TIC A2 2010 interna";
 preguntaids[40] = 8107


//  Id pregunta: 8141 Año de creación de pregunta: 2011
 questions[41]= "42)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Modo t&uacute;nel.";
 choices[41][1] = "Modo transporte.";
 choices[41][2] = "Modo encapsulado.";
 choices[41][3] = "Modo transparente.";
 answers[41] = 1;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8141. Examen TIC A2 2010 interna";
 preguntaids[41] = 8141


//  Id pregunta: 8026 Año de creación de pregunta: 2011
 questions[42]= "43)  Una desventaja de la topolog&iacute;a f&iacute;sica de estrella es que:";
 choices[42]= new Array();
 choices[42][0] = "Requiere m&aacute;s cable que la topolog&iacute;a de bus.";
 choices[42][1] = "Se requieren terminadores.";
 choices[42][2] = "Es dif&iacute;cil conectar nuevos nodos a la red,";
 choices[42][3] = "Toda la red se caer&iacute;a si hubiera una ruptura en el cable principal.";
 answers[42] = 0;
 units[42] = ['102'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8026. Examen TIC A2 2010";
 preguntaids[42] = 8026


//  Id pregunta: 8159 Año de creación de pregunta: 2011
 questions[43]= "44)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[43]= new Array();
 choices[43][0] = "Al servidor DNS principal";
 choices[43][1] = "Al servidor de correo asociado al dominio";
 choices[43][2] = "Al servidor seguro asociado al dominio";
 choices[43][3] = "Ninguna de las anteriores es correcta";
 answers[43] = 1;
 units[43] = ['116'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 8159. Analista Ayto. Madrid 2010";
 preguntaids[43] = 8159


//  Id pregunta: 8161 Año de creación de pregunta: 2011
 questions[44]= "45)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[44]= new Array();
 choices[44][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursosdel mismo.";
 choices[44][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permitecompartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes.";
 choices[44][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemasoperativos en una m&aacute;quina.";
 choices[44][3] = "Un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de recursosdel mismo.";
 answers[44] = 2;
 units[44] = ['124'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8161. Analista Ayto. Madrid 2010";
 preguntaids[44] = 8161


//  Id pregunta: 8138 Año de creación de pregunta: 2011
 questions[45]= "46)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[45]= new Array();
 choices[45][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[45][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[45][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[45][3] = "Son firewalls que operan en el nivel de red.";
 answers[45] = 3;
 units[45] = ['119'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8138. Examen TIC A2 2010 interna";
 preguntaids[45] = 8138


//  Id pregunta: 8136 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[46]= new Array();
 choices[46][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[46][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[46][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[46][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[46] = 3;
 units[46] = ['107'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8136. Examen TIC A2 2010 interna";
 preguntaids[46] = 8136


//  Id pregunta: 8144 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[47]= new Array();
 choices[47][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[47][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[47][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[47][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[47] = 0;
 units[47] = ['108'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8144. Examen TIC A2 2010 interna";
 preguntaids[47] = 8144


//  Id pregunta: 8140 Año de creación de pregunta: 2011
 questions[48]= "49)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[48]= new Array();
 choices[48][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[48][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[48][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[48][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[48] = 2;
 units[48] = ['119'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8140. Examen TIC A2 2010 interna";
 preguntaids[48] = 8140


//  Id pregunta: 8102 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[49]= new Array();
 choices[49][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[49][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[49][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[49][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[49] = 1;
 units[49] = ['104'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8102. Examen TIC A2 2010 interna";
 preguntaids[49] = 8102


//  Id pregunta: 8078 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[50]= new Array();
 choices[50][0] = "FTP.";
 choices[50][1] = "TFTP.";
 choices[50][2] = "DNS.";
 choices[50][3] = "Ninguno de los anteriores.";
 answers[50] = 2;
 units[50] = ['105', '109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 8078. Analista Ayto. Madrid 2010";
 preguntaids[50] = 8078


//  Id pregunta: 8154 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Cu&aacute;l es el est&aacute;ndar europeo de TDT?";
 choices[51]= new Array();
 choices[51][0] = "ISDB.";
 choices[51][1] = "MPEG-2";
 choices[51][2] = "DVB-T";
 choices[51][3] = "EDTV";
 answers[51] = 2;
 units[51] = ['115'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8154. Examen TIC A2 2010 interna";
 preguntaids[51] = 8154


//  Id pregunta: 8196 Año de creación de pregunta: 2011
 questions[52]= "53)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[52]= new Array();
 choices[52][0] = "Por encaminamiento IP y basada en ATM";
 choices[52][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[52][2] = "Mediante solicitud-reserva y por contienda.";
 choices[52][3] = "En estrella y en &aacute;rbol.";
 answers[52] = 2;
 units[52] = ['102', '112'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8196. Examen TIC A2 2010 interna";
 preguntaids[52] = 8196


//  Id pregunta: 8150 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[53]= new Array();
 choices[53][0] = "2.4 GHz y hasta 11 Mbps";
 choices[53][1] = "5 GHz y hasta 54Mbps.";
 choices[53][2] = "2.4 GHz y hasta 54 Mbps.";
 choices[53][3] = "5 GHz y hasta 11 Mbps";
 answers[53] = 1;
 units[53] = ['108'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8150. Examen TIC A2 2010 interna";
 preguntaids[53] = 8150


//  Id pregunta: 8108 Año de creación de pregunta: 2011
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[54]= new Array();
 choices[54][0] = "SetRequest";
 choices[54][1] = "GetBulkRequest";
 choices[54][2] = "GetNextRequest";
 choices[54][3] = "Trap";
 answers[54] = 1;
 units[54] = ['114'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 8108. Examen TIC A2 2010 interna";
 preguntaids[54] = 8108


//  Id pregunta: 8124 Año de creación de pregunta: 2011
 questions[55]= "56)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "ISO/lEC 13335-2.";
 choices[55][1] = "ISO/lEC 27002:2013.";
 choices[55][2] = "UNE 71502:2004.";
 choices[55][3] = "ISO 10646.";
 answers[55] = 1;
 units[55] = ['119'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 8124. Examen TIC A2 2010";
 preguntaids[55] = 8124


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


//  Id pregunta: 8096 Año de creación de pregunta: 2011
 questions[57]= "58)  La RDSI (red digital de servicios integrados), ofrece una conexi&oacute;n digital extremo a extremo para el intercambio de informaci&oacute;n al integrar servicios de voz y de datos sobre la estructura de la red telef&oacute;nica p&uacute;blica. El acceso primario, en Europa, esta constituido por:";
 choices[57]= new Array();
 choices[57][0] = "2 canales B y 2 canales D";
 choices[57][1] = "30 canales B y 30 canales D";
 choices[57][2] = "30 canales B y un canal D";
 choices[57][3] = "30 canales B y dos canales D";
 answers[57] = 2;
 units[57] = ['114'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 8096. Analista Ayto. Madrid 2010";
 preguntaids[57] = 8096


//  Id pregunta: 8028 Año de creación de pregunta: 2011
 questions[58]= "59)  Cu&aacute;l de los siguientes estados NO corresponde con ninguno de los estados en los que puede estar un puerto de un dispositivo de interconexi&oacute;n, seg&uacute;n lo definido en el est&aacute;ndar 802.1D para el protocolo Spanning Tree:";
 choices[58]= new Array();
 choices[58][0] = "Blocking (Bloqueando).";
 choices[58][1] = "Listening (Escuchando).";
 choices[58][2] = "Learning (Aprendiendo).";
 choices[58][3] = "Receiving (Recibiendo).";
 answers[58] = 3;
 units[58] = ['102'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 8028. Examen TIC A2 2010";
 preguntaids[58] = 8028


//  Id pregunta: 8147 Año de creación de pregunta: 2011
 questions[59]= "60)  &iquest;Qu&eacute; tecnolog&iacute;a de acceso permite un tipo de servicio tanto sim&eacute;trico como asim&eacute;trico?";
 choices[59]= new Array();
 choices[59][0] = "SHDSL";
 choices[59][1] = "HDSL";
 choices[59][2] = "ADSL2";
 choices[59][3] = "VDSL";
 answers[59] = 3;
 units[59] = ['108'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8147. Examen TIC A2 2010 interna";
 preguntaids[59] = 8147


//  Id pregunta: 8098 Año de creación de pregunta: 2011
 questions[60]= "61)  La norma DECT (Digital Enhanced Cordless Telecomunications) contempla el modode acceso:";
 choices[60]= new Array();
 choices[60][0] = "TDMA/ TDD";
 choices[60][1] = "GFSK";
 choices[60][2] = "FSK";
 choices[60][3] = "CDMA";
 answers[60] = 0;
 units[60] = ['108'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 8098. Analista Ayto. Madrid 2010";
 preguntaids[60] = 8098


//  Id pregunta: 8060 Año de creación de pregunta: 2011
 questions[61]= "62)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[61]= new Array();
 choices[61][0] = "Bluetooth";
 choices[61][1] = "PayPal Mobile";
 choices[61][2] = "NFC (Near Field Communication)";
 choices[61][3] = "3D Secure";
 answers[61] = 2;
 units[61] = ['75', '108'];
 blocks[61] = ['B2', 'B4'];
 comments[61] = "Id Pregunta: 8060. ";
 preguntaids[61] = 8060


//  Id pregunta: 8069 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes normas del IEEE se utiliza para el control de acceso a red basada en puertos?";
 choices[62]= new Array();
 choices[62][0] = "802.1x";
 choices[62][1] = "802.3.ay";
 choices[62][2] = "802.11";
 choices[62][3] = "802.3.q";
 answers[62] = 0;
 units[62] = ['112'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 8069. ";
 preguntaids[62] = 8069


//  Id pregunta: 8227 Año de creación de pregunta: 2011
 questions[63]= "64)  La se&ntilde;ales de banda Ku, &iquest;en que rango de frecuencias trabajan?";
 choices[63]= new Array();
 choices[63][0] = "1-8 MHz";
 choices[63][1] = "4-8 GHz";
 choices[63][2] = "12-18 GHz";
 choices[63][3] = "4-8 MHz";
 answers[63] = 2;
 units[63] = ['117'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8227. Examen UPM A2 2011";
 preguntaids[63] = 8227


//  Id pregunta: 8083 Año de creación de pregunta: 2011
 questions[64]= "65)  Un puente se caracteriza por:";
 choices[64]= new Array();
 choices[64][0] = "Operar en capa 3 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[64][1] = "Opera en capa 2 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[64][2] = "Operar en capa 3 del modelo OSI y utiliza direcciones IP para tomar decisiones";
 choices[64][3] = "Operar en capa 4 del modelo OSI y utiliza puertos TCP para tomar decisiones";
 answers[64] = 1;
 units[64] = ['102'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8083. Analista Ayto. Madrid 2010";
 preguntaids[64] = 8083


//  Id pregunta: 8146 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[65][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[65][2] = "PCM (Pulse-Code Modulation).";
 choices[65][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[65] = 2;
 units[65] = ['122'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8146. Examen TIC A2 2010 interna";
 preguntaids[65] = 8146


//  Id pregunta: 8068 Año de creación de pregunta: 2011
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no es un tipo de SSO (Single Sign-On)?";
 choices[66]= new Array();
 choices[66][0] = "Enterprise SSO";
 choices[66][1] = "Web SSO";
 choices[66][2] = "Kerberos";
 choices[66][3] = "Novell";
 answers[66] = 3;
 units[66] = ['123'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 8068. ";
 preguntaids[66] = 8068


//  Id pregunta: 8126 Año de creación de pregunta: 2011
 questions[67]= "68)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[67]= new Array();
 choices[67][0] = "El c&oacute;digo se replica al activarse";
 choices[67][1] = "Su efecto es retardado.";
 choices[67][2] = "No se activan por eventos.";
 choices[67][3] = "Es otra manera de referirse a los troyanos.";
 answers[67] = 1;
 units[67] = ['119'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8126. Examen TIC A2 2010";
 preguntaids[67] = 8126


//  Id pregunta: 8148 Año de creación de pregunta: 2011
 questions[68]= "69)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[68]= new Array();
 choices[68][0] = "10,8 Mbps te&oacute;ricos.";
 choices[68][1] = "14 Mbps";
 choices[68][2] = "2 Mbps";
 choices[68][3] = "384 Kbps";
 answers[68] = 1;
 units[68] = ['117'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 8148. Examen TIC A2 2010 interna";
 preguntaids[68] = 8148


//  Id pregunta: 8106 Año de creación de pregunta: 2011
 questions[69]= "70)  Indique cu&aacute;l de los siguientes es un est&aacute;ndar WiMAX para servicios m&oacute;viles:";
 choices[69]= new Array();
 choices[69][0] = "IEEE 802.16-2004";
 choices[69][1] = "IEEE 802.16d";
 choices[69][2] = "IEEE 802.16e.";
 choices[69][3] = "Wimax no permite acceso a servicios m&oacute;viles.";
 answers[69] = 2;
 units[69] = ['108'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 8106. Examen TIC A2 2010 interna";
 preguntaids[69] = 8106


//  Id pregunta: 8151 Año de creación de pregunta: 2011
 questions[70]= "71)  &iquest;Qu&eacute; est&aacute;ndar de redes inal&aacute;mbricas permite a dispositivos en movimiento realizar itinerancia r&aacute;pida de un punto de acceso a otro?";
 choices[70]= new Array();
 choices[70][0] = "IEEE 802.11 h";
 choices[70][1] = "IEEE 802.11 l";
 choices[70][2] = "IEEE 802.11 p";
 choices[70][3] = "IEEE 802 11 r.";
 answers[70] = 3;
 units[70] = ['108'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 8151. Examen TIC A2 2010 interna";
 preguntaids[70] = 8151


//  Id pregunta: 8145 Año de creación de pregunta: 2011
 questions[71]= "72)  En relaci&oacute;n con la tecnolog&iacute;a ADSL, un multiplexor localizado en la central telef&oacute;nica que concentra el tr&aacute;fico de enlaces ADSL de usuario, se denomina:";
 choices[71]= new Array();
 choices[71][0] = "DSLAM";
 choices[71][1] = "DSLM";
 choices[71][2] = "ADSLM";
 choices[71][3] = "ADSLAM";
 answers[71] = 0;
 units[71] = ['108'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 8145. Examen TIC A2 2010 interna";
 preguntaids[71] = 8145


//  Id pregunta: 8077 Año de creación de pregunta: 2011
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera una mejora de IPv6 respecto a IPv4?";
 choices[72]= new Array();
 choices[72][0] = "Capacidad extendida del direccionamiento";
 choices[72][1] = "Seguridad de nivel de aplicaci&oacute;n obligatoria";
 choices[72][2] = "Movilidad";
 choices[72][3] = "Multicast";
 answers[72] = 1;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 8077. ";
 preguntaids[72] = 8077


//  Id pregunta: 8231 Año de creación de pregunta: 2011
 questions[73]= "74)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[73]= new Array();
 choices[73][0] = "802.6";
 choices[73][1] = "802.7";
 choices[73][2] = "802.8";
 choices[73][3] = "802.9";
 answers[73] = 2;
 units[73] = ['112'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 8231. Examen UPM A2 2011";
 preguntaids[73] = 8231


//  Id pregunta: 8117 Año de creación de pregunta: 2011
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes NO es un campo de control en el segmento TCP?";
 choices[74]= new Array();
 choices[74][0] = "URG";
 choices[74][1] = "PSH";
 choices[74][2] = "END";
 choices[74][3] = "ACK";
 answers[74] = 2;
 units[74] = ['109'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 8117. Examen TIC A2 2010";
 preguntaids[74] = 8117


