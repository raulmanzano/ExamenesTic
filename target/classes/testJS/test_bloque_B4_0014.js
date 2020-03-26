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
//  Id pregunta: 4986 Año de creación de pregunta: 2002
 questions[0]= "1)  Los mensajes SMS:";
 choices[0]= new Array();
 choices[0][0] = "Viajan por un canal de se&ntilde;alizaci&oacute;n";
 choices[0][1] = "Viajan por un canal de voz";
 choices[0][2] = "Se codifican por pulsos";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = 0;
 units[0] = ['117'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4986. ";
 preguntaids[0] = 4986


//  Id pregunta: 5035 Año de creación de pregunta: 2002
 questions[1]= "2)  Respecto a la serie de est&aacute;ndares de redes inal&aacute;mbricas 802.x podemos decir que:";
 choices[1]= new Array();
 choices[1][0] = "802.11b es posterior a 802.11a";
 choices[1][1] = "802.11a admite una velocidad m&aacute;xima de 54 Mbps";
 choices[1][2] = "la serie 802.x tiene su origen en Europa, en el ETSI";
 choices[1][3] = "todo lo anterior es correcto";
 answers[1] = 1;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5035. ";
 preguntaids[1] = 5035


//  Id pregunta: 5002 Año de creación de pregunta: 2002
 questions[2]= "3)  Los terminales dise&ntilde;ados para conectarse directamente a la RDSI, como los tel&eacute;fonos digitales RDSI, un ordenador equipado con tarjeta adaptadora a RDSI y software &ldquo;driver&rdquo; de la tarjeta adaptadora a RDSI se denominan:";
 choices[2]= new Array();
 choices[2][0] = "ET1";
 choices[2][1] = "ET2";
 choices[2][2] = "TR2";
 choices[2][3] = "AT";
 answers[2] = 0;
 units[2] = ['114'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5002. ";
 preguntaids[2] = 5002


//  Id pregunta: 5016 Año de creación de pregunta: 2002
 questions[3]= "4)  Para evitar el problema que suponen las cach&eacute;s y las sesiones a la hora de estudiar los accesos a una web se usa una t&eacute;cnica para garantizar el conocimiento de todos los accesos. Esta t&eacute;cnica se conoce como:";
 choices[3]= new Array();
 choices[3][0] = "cookies";
 choices[3][1] = "logs";
 choices[3][2] = "huellas";
 choices[3][3] = "ninguna de las anteriores";
 answers[3] = 2;
 units[3] = ['103'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5016. &quot;Huella&quot; equivale al t&eacute;rmino anglosaj&oacute;n &quot;Page Tagging&quot;, y resuelve el problema de la p&aacute;ginas en cach&eacute; no contabilizadas por el servidor";
 preguntaids[3] = 5016


//  Id pregunta: 4998 Año de creación de pregunta: 2002
 questions[4]= "5)  Los servicios de telecomunicaciones de libre recepci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Son emisiones sonoras, television u otro g&eacute;nero";
 choices[4][1] = "Incluyen los de minima cobertura";
 choices[4][2] = "Pueden llegar hasta los 20 Watts";
 choices[4][3] = "Todas los anteriores respuestas son correctas";
 answers[4] = 3;
 units[4] = ['121'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4998. ";
 preguntaids[4] = 4998


//  Id pregunta: 5049 Año de creación de pregunta: 2002
 questions[5]= "6)  Seg&uacute;n la norma X.400, &iquest;de cu&aacute;ntas partes consta un mensaje interpersonal (IM)?:";
 choices[5]= new Array();
 choices[5][0] = "Una";
 choices[5][1] = "Dos";
 choices[5][2] = "Tres";
 choices[5][3] = "Tantas como tipos de informaci&oacute;n contenga el mensaje";
 answers[5] = 1;
 units[5] = ['116'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5049. ";
 preguntaids[5] = 5049


//  Id pregunta: 5034 Año de creación de pregunta: 2002
 questions[6]= "7)  Respecto a la clase de QoS definido por el ATM Forum, UBR, puede decirse que:";
 choices[6]= new Array();
 choices[6][0] = "Asegura una cantidad m&iacute;nima de datos que pueden transmitirse a trav&eacute;s de la red";
 choices[6][1] = "Garantiza al menos una tasa de c&eacute;lulas transmitidas";
 choices[6][2] = "No garantiza ni siquiera un retardo m&aacute;ximo";
 choices[6][3] = "Tiene una tasa de bits concreta incluida en la especificaci&oacute;n";
 answers[6] = 2;
 units[6] = ['107'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5034. ";
 preguntaids[6] = 5034


//  Id pregunta: 5008 Año de creación de pregunta: 2002
 questions[7]= "8)  MPLS se encapsula en la torre de protocolos:";
 choices[7]= new Array();
 choices[7][0] = "por encima del protocolo IP y por debajo del protocolo TCP";
 choices[7][1] = "por encima del protocolo TCP y por debajo de otros protocolos de transporte";
 choices[7][2] = "por encima de los protocolos del nivel de enlace y por debajo de IP";
 choices[7][3] = "por encima de los protocolos del nivel de transporte";
 answers[7] = 2;
 units[7] = ['107'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5008. ";
 preguntaids[7] = 5008


//  Id pregunta: 4980 Año de creación de pregunta: 2002
 questions[8]= "9)  Los conmutadores o switches LAN construyen una tabla de conmutaci&oacute;n que consiste en:";
 choices[8]= new Array();
 choices[8][0] = "Direcciones MAC y su interfaz de salida asociada";
 choices[8][1] = "Direcciones MAC y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 choices[8][2] = "Direcciones de red y su interfaz de salida apropiada";
 choices[8][3] = "Direcciones de red  y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 answers[8] = 0;
 units[8] = ['102'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4980. ";
 preguntaids[8] = 4980


//  Id pregunta: 5031 Año de creación de pregunta: 2002
 questions[9]= "10)  RADIUS es:";
 choices[9]= new Array();
 choices[9][0] = "una herramienta estandarizada de an&aacute;lisis de cobertura radioel&eacute;ctrica";
 choices[9][1] = "un protocolo de acceso inal&aacute;mbrico en la capa de acceso al medio radioel&eacute;ctrico";
 choices[9][2] = "un protocolo de gesti&oacute;n y mantenimiento de redes";
 choices[9][3] = "un protocolo de autenticaci&oacute;n, autorizaci&oacute;n y configuraci&oacute;n de accesos";
 answers[9] = 3;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5031. ";
 preguntaids[9] = 5031


//  Id pregunta: 5015 Año de creación de pregunta: 2002
 questions[10]= "11)  Para establecer una comunicaci&oacute;n punto a punto seg&uacute;n TCP/IP es necesario conocer:";
 choices[10]= new Array();
 choices[10][0] = "direcci&oacute;n y puerto origen";
 choices[10][1] = "direcci&oacute;n y puerto destino";
 choices[10][2] = "s&oacute;lo direcciones origen y destino";
 choices[10][3] = "las respuestas a) y b) son correctas";
 answers[10] = 3;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5015. ";
 preguntaids[10] = 5015


//  Id pregunta: 4995 Año de creación de pregunta: 2002
 questions[11]= "12)  Los puentes que evitan el bucle de paquetes cuando hay varios enlaces entre ellos se denominan:";
 choices[11]= new Array();
 choices[11][0] = "Adaptativos y redundantes";
 choices[11][1] = "Tipo 'source routing'";
 choices[11][2] = "Tipo 'spanning tree'";
 choices[11][3] = "De inversi&oacute;n de se&ntilde;ales f&iacute;sicas";
 answers[11] = 2;
 units[11] = ['102'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4995. ";
 preguntaids[11] = 4995


//  Id pregunta: 5025 Año de creación de pregunta: 2002
 questions[12]= "13)  PCM es:";
 choices[12]= new Array();
 choices[12][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[12][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[12][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[12][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[12] = 0;
 units[12] = ['102'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5025. ";
 preguntaids[12] = 5025


//  Id pregunta: 5011 Año de creación de pregunta: 2002
 questions[13]= "14)  OSA Parlay es:";
 choices[13]= new Array();
 choices[13][0] = "Open Services Architecture, del Parlay Group, arquitectura que pretende establecer una capa de middleware para el desarrollo de aplicaciones est&aacute;ndares comunes para el desarrollo de servicios m&oacute;viles";
 choices[13][1] = "Open Software Association, con sede establecida en Parlay (Texas)";
 choices[13][2] = "Other Specification for Applicatios, un nuevo est&aacute;ndar dise&ntilde;ado por John Parlay (miembro destacado de ITU-T) que pretende establecer una capa universal de aplicaci&oacute;n que a&uacute;ne las capas de aplicaci&oacute;n de OSI y TCP/IP favoreciendo su total compatibilidad";
 choices[13][3] = "OSA Parlay no se corresponde con ning&uacute;n acr&oacute;nimo conocido";
 answers[13] = 0;
 units[13] = ['117'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5011. ";
 preguntaids[13] = 5011


//  Id pregunta: 4979 Año de creación de pregunta: 2002
 questions[14]= "15)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[14]= new Array();
 choices[14][0] = "RJ11";
 choices[14][1] = "RJ45";
 choices[14][2] = "RJ37";
 choices[14][3] = "V.24";
 answers[14] = 1;
 units[14] = ['104'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4979. ";
 preguntaids[14] = 4979


//  Id pregunta: 4978 Año de creación de pregunta: 2002
 questions[15]= "16)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[15]= new Array();
 choices[15][0] = "X.400";
 choices[15][1] = "I.200";
 choices[15][2] = "X.500";
 choices[15][3] = "X.200";
 answers[15] = 3;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4978. ";
 preguntaids[15] = 4978


//  Id pregunta: 5023 Año de creación de pregunta: 2002
 questions[16]= "17)  Para usar DNS en una LAN que utiliza Traducciones de Direcciones (NAT) en el firewall:";
 choices[16]= new Array();
 choices[16][0] = "Es recomendable un DNS interno";
 choices[16][1] = "Es recomendable ofrecer el servicio DNS en el firewall";
 choices[16][2] = "Es necesario utilizar un DNS externo al existir NAT";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = 0;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5023. ";
 preguntaids[16] = 5023


//  Id pregunta: 5012 Año de creación de pregunta: 2002
 questions[17]= "18)  Para aplicaciones de media streaming es m&aacute;s adecuado:";
 choices[17]= new Array();
 choices[17][0] = "UDP";
 choices[17][1] = "TCP";
 choices[17][2] = "tanto TCP como UDP son adecuados ya que proporcionan un nivel de transporte a la aplicaci&oacute;n de video";
 choices[17][3] = "ni TCP ni UDP son adecuados ya que no garantizan la velocidad adecuada suficiente";
 answers[17] = 0;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5012. ";
 preguntaids[17] = 5012


//  Id pregunta: 4994 Año de creación de pregunta: 2002
 questions[18]= "19)  Los protocolos TP0 y TP2 de OSI est&aacute;n dise&ntilde;ados para redes de tipo A (fiables). &iquest;Cu&aacute;l de las siguentes afirmaciones es correcta?:";
 choices[18]= new Array();
 choices[18][0] = "TP0 no dispone de mecanismos de checksum y TP2 s&iacute;";
 choices[18][1] = "TP2 numera las TPDUs (Transport Protocolo Data Unit) y TP0 no";
 choices[18][2] = "En TP2 existen mecanismos de restablecimiento de la conexi&oacute;n mientras que en TP0 no";
 choices[18][3] = "Ambos permiten el multiplexado Ascendente (varias conexiones de transporte pueden usar la misma de red)";
 answers[18] = 1;
 units[18] = ['105'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4994. ";
 preguntaids[18] = 4994


//  Id pregunta: 5009 Año de creación de pregunta: 2002
 questions[19]= "20)  Nombre y caracter&iacute;sticas del mecanismo de encriptado y autenticaci&oacute;n especificado en el est&aacute;ndar 802.11:";
 choices[19]= new Array();
 choices[19][0] = "WAP, con clave de hasta 40 bits";
 choices[19][1] = "WEP, con clave de hasta 40 bits";
 choices[19][2] = "WEP, con clave de hasta 128 bits";
 choices[19][3] = "WTLS, con clave de hasta 128 bits";
 answers[19] = 2;
 units[19] = ['108'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5009. ";
 preguntaids[19] = 5009


//  Id pregunta: 5017 Año de creación de pregunta: 2002
 questions[20]= "21)  Para interconectar diferentes redes de &aacute;rea local:";
 choices[20]= new Array();
 choices[20][0] = "Es necesario el uso de puentes";
 choices[20][1] = "Los routers posibilitan la conexi&oacute;n en una misma red de dos cableados diferentes";
 choices[20][2] = "Un bridge interconecta al cable troncal de un edificio el cable Ethernet de cada planta";
 choices[20][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[20] = 3;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5017. ";
 preguntaids[20] = 5017


//  Id pregunta: 4996 Año de creación de pregunta: 2002
 questions[21]= "22)  Los puentes transparentes:";
 choices[21]= new Array();
 choices[21][0] = "Son lo mismo que los puentes 'Source Routing'";
 choices[21][1] = "Eliminan la direcci&oacute;n origen de cada trama que reciben";
 choices[21][2] = "No existen";
 choices[21][3] = "Aprenden las direcciones MAC de cada trama recibida y las guardan temporalmente, asoci&aacute;ndolas a un puerto.";
 answers[21] = 3;
 units[21] = ['102'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4996. ";
 preguntaids[21] = 4996


//  Id pregunta: 5054 Año de creación de pregunta: 2002
 questions[22]= "23)  Se&ntilde;ale cu&aacute;l de las siguientes no es una arquitectura de comunicaciones:";
 choices[22]= new Array();
 choices[22][0] = "SNA";
 choices[22][1] = "SMTP";
 choices[22][2] = "OSI";
 choices[22][3] = "TCP/IP";
 answers[22] = 1;
 units[22] = ['105'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5054. ";
 preguntaids[22] = 5054


//  Id pregunta: 5051 Año de creación de pregunta: 2002
 questions[23]= "24)  Seg&uacute;n la recomendaci&oacute;n EIA/TIA 568:";
 choices[23]= new Array();
 choices[23][0] = "La distancia m&aacute;xima para el cableado horizontal var&iacute;a entre 70 m y 90 m";
 choices[23][1] = "La distancia entre equipo y roseta puede llegar a los 9 m";
 choices[23][2] = "Se consideran los cables coaxiales de 76 Ohm";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 0;
 units[23] = ['104'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5051. ";
 preguntaids[23] = 5051


//  Id pregunta: 4985 Año de creación de pregunta: 2002
 questions[24]= "25)  Los mensajes de respuesta HTTP de c&oacute;digo 5xx se corresponden con:";
 choices[24]= new Array();
 choices[24][0] = "error en el cliente";
 choices[24][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[24][2] = "error en el servidor";
 choices[24][3] = "petici&oacute;n con &eacute;xito";
 answers[24] = 2;
 units[24] = ['103'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4985. ";
 preguntaids[24] = 4985


//  Id pregunta: 5027 Año de creación de pregunta: 2002
 questions[25]= "26)  PLC responde por:";
 choices[25]= new Array();
 choices[25][0] = "Power Limit Consumption";
 choices[25][1] = "Priority Lock Change";
 choices[25][2] = "Power Line Communication";
 choices[25][3] = "Protocol Link Conmutation";
 answers[25] = 2;
 units[25] = ['108'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5027. ";
 preguntaids[25] = 5027


//  Id pregunta: 4989 Año de creación de pregunta: 2002
 questions[26]= "27)  Los niveles superiores del modelo OSI se agrupan dentro del bloque de aplicaci&oacute;n mientras que los niveles bajos se agrupan en el:";
 choices[26]= new Array();
 choices[26][0] = "Bloque de compatibilidad de software";
 choices[26][1] = "Bloque de encaminamiento del tr&aacute;fico";
 choices[26][2] = "Bloque de transmisi&oacute;n";
 choices[26][3] = "Bloque de multiplexaci&oacute;n y detecci&oacute;n de errores";
 answers[26] = 2;
 units[26] = ['105'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4989. ";
 preguntaids[26] = 4989


//  Id pregunta: 5019 Año de creación de pregunta: 2002
 questions[27]= "28)  Para la interconexi&oacute;n de redes locales se han especificado diversos equipos. Indique cu&aacute;l de las opciones es correcta:";
 choices[27]= new Array();
 choices[27][0] = "Un router necesariamente une segmentos de red con distinto protocolo de enlace, o nivel dos";
 choices[27][1] = "Un router une dos segmentos de red utilizando exclusivamente la informaci&oacute;n de nivel tres para el filtrado de las direcciones";
 choices[27][2] = "Un router necesariamente une segmentos de red con el mismo protocolo de enlace, o de nivel dos";
 choices[27][3] = "Todas las respuestas anteriores son correctas";
 answers[27] = 1;
 units[27] = ['102'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5019. ";
 preguntaids[27] = 5019


//  Id pregunta: 5033 Año de creación de pregunta: 2002
 questions[28]= "29)  Respecto a los distintos modos de transmisi&oacute;n en una comunicaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "La telefon&iacute;a convencional es de tipo d&uacute;plex, mientras que la telefon&iacute;a m&oacute;vil es semiduplex";
 choices[28][1] = "La radiofusi&oacute;n de televisi&oacute;n es de tipo semid&uacute;plex, transmite sonido e imagen en la misma portadora";
 choices[28][2] = "La radiofusi&oacute;n de se&ntilde;al musical en frecuencia modulada es un sistema simplex";
 choices[28][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[28] = 2;
 units[28] = ['106'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5033. ";
 preguntaids[28] = 5033


//  Id pregunta: 5004 Año de creación de pregunta: 2002
 questions[29]= "30)  Mbone es:";
 choices[29]= new Array();
 choices[29][0] = "una versi&oacute;n avanzada de Internet 2";
 choices[29][1] = "un backbone especializado en tranmisi&oacute;n de datos multimedia s&oacute;lo en tiempo real";
 choices[29][2] = "el backbone que une todas las dependencias del MIT para intercambio de informaci&oacute;n cient&iacute;fica y tecnol&oacute;gica";
 choices[29][3] = "una red virtual sobre porciones de internet con islas IP multicast";
 answers[29] = 3;
 units[29] = ['103'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5004. ";
 preguntaids[29] = 5004


//  Id pregunta: 5046 Año de creación de pregunta: 2002
 questions[30]= "31)  Se conoce como tiempo de vuelo a:";
 choices[30]= new Array();
 choices[30][0] = "El tiempo desde que el cabeza de un disco comienza su movimiento hasta que se posa sobre una pista concreta de la superficie del disco";
 choices[30][1] = "El tiempo desde que una se&ntilde;al (onda) sale de un emisor v&iacute;a radio (aire) hasta que llega a su destino";
 choices[30][2] = "El tiempo que transcurre desde que se pulsa una tecla hasta que el sistema responde al comando requerido";
 choices[30][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[30] = 1;
 units[30] = ['117'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5046. ";
 preguntaids[30] = 5046


//  Id pregunta: 4992 Año de creación de pregunta: 2002
 questions[31]= "32)  Los problemas principales de IPv4 que hacen necesario IPv6 son:";
 choices[31]= new Array();
 choices[31][0] = "los relativos a la escasez de direcciones";
 choices[31][1] = "los relativos al tama&ntilde;o de las tablas de encaminamiento";
 choices[31][2] = "los relativos a la calidad de servicio";
 choices[31][3] = "todos los anteriores";
 answers[31] = 3;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4992. ";
 preguntaids[31] = 4992


//  Id pregunta: 5029 Año de creación de pregunta: 2002
 questions[32]= "33)  Por B.E.R. entendemos:";
 choices[32]= new Array();
 choices[32][0] = "Basic Encoding Rules, reglas de codificaci&oacute;n b&aacute;sicas usadas en la definici&oacute;n de datos mediante ASN.1";
 choices[32][1] = "Binary Error Rate, tasa de error binaria que define la adecuaci&oacute;n de los canales de transmisi&oacute;n";
 choices[32][2] = "Las 2 respuestas anteriores son correctas";
 choices[32][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[32] = 2;
 units[32] = ['112'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5029. ";
 preguntaids[32] = 5029


//  Id pregunta: 4999 Año de creación de pregunta: 2002
 questions[33]= "34)  Los sistemas celulares se sustentan en dos conceptos principales que son:";
 choices[33]= new Array();
 choices[33][0] = "La reutilizaci&oacute;n de frecuencias y el dimensionamiento celular";
 choices[33][1] = "La difracci&oacute;n y la propagaci&oacute;n multitrayecto";
 choices[33][2] = "La modulaci&oacute;n y la separaci&oacute;n entre canales";
 choices[33][3] = "La distribuci&oacute;n de usuarios y la localizaci&oacute;n";
 answers[33] = 0;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4999. ";
 preguntaids[33] = 4999


//  Id pregunta: 5001 Año de creación de pregunta: 2002
 questions[34]= "35)  Los sistemas m&oacute;viles celulares:";
 choices[34]= new Array();
 choices[34][0] = "Son de car&aacute;cter unidireccional";
 choices[34][1] = "No permiten la conexi&oacute;n a la red p&uacute;blica";
 choices[34][2] = "Permiten la reutilizaci&oacute;n de frecuencias";
 choices[34][3] = "No requieren separaci&oacute;n m&iacute;nima entre c&eacute;lulas";
 answers[34] = 2;
 units[34] = ['117'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5001. ";
 preguntaids[34] = 5001


//  Id pregunta: 5014 Año de creación de pregunta: 2002
 questions[35]= "36)  Para especificar un protocolo en el modelo OSI son necesarios:";
 choices[35]= new Array();
 choices[35][0] = "S&oacute;lo la descripci&oacute;n de las PDUs que lo forman, junto con su prop&oacute;sito y los campos que las forman";
 choices[35][1] = "La a) y la descripci&oacute;n de los servicios usados, procedimientos seguidos y descripci&oacute;n formal (usando por ejemplo ASN.1)";
 choices[35][2] = "La b) y adem&aacute;s la descripci&oacute;n del comportamiento interno-externo";
 choices[35][3] = "Un protocolo no se puede especificar libremente, ya que hay impuestas condiciones referentes al sistema operativo y/o los lenguajes de programaci&oacute;n que usen las m&aacute;quinas en las que se implante";
 answers[35] = 1;
 units[35] = ['105'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5014. ";
 preguntaids[35] = 5014


//  Id pregunta: 4997 Año de creación de pregunta: 2002
 questions[36]= "37)  Los sat&eacute;lites de comunicaciones utilizan frecuencias elevadas (bandas Ku y K) porque:";
 choices[36]= new Array();
 choices[36][0] = "Las ondas de mayor frecuencia permiten un mayor alcance y atravesar obst&aacute;culos";
 choices[36][1] = "Las frecuencias altas permiten enviar mayor cantidad de informaci&oacute;n por segundo";
 choices[36][2] = "En estas bandas la atenuaci&oacute;n es menor";
 choices[36][3] = "Aunque la atenuaci&oacute;n es menor en estas frecuencias su alcance es mayor";
 answers[36] = 1;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4997. ";
 preguntaids[36] = 4997


//  Id pregunta: 5050 Año de creación de pregunta: 2002
 questions[37]= "38)  Seg&uacute;n la normativa UN-85, a cuanto asciende la m&aacute;xima potencia (PIRE) que un transmisor puede generar en redes inal&aacute;mbricas de banda 2,4 GHz?:";
 choices[37]= new Array();
 choices[37][0] = "10 mW";
 choices[37][1] = "1W";
 choices[37][2] = "100 mW";
 choices[37][3] = "1 mW";
 answers[37] = 2;
 units[37] = ['106'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5050. ";
 preguntaids[37] = 5050


//  Id pregunta: 5013 Año de creación de pregunta: 2002
 questions[38]= "39)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[38]= new Array();
 choices[38][0] = "El acceso telef&oacute;nico conmutado";
 choices[38][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[38][2] = "Utilizar l&iacute;neas privadas";
 choices[38][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[38] = 1;
 units[38] = ['113'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5013. ";
 preguntaids[38] = 5013


//  Id pregunta: 5005 Año de creación de pregunta: 2002
 questions[39]= "40)  MIB es:";
 choices[39]= new Array();
 choices[39][0] = "Una base de datos de informaci&oacute;n de gestion";
 choices[39][1] = "Un protocolo de gesti&oacute;n";
 choices[39][2] = "Un dominio de gesti&oacute;n";
 choices[39][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[39] = 0;
 units[39] = ['114'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5005. ";
 preguntaids[39] = 5005


//  Id pregunta: 5030 Año de creación de pregunta: 2002
 questions[40]= "41)  Por una misma fibra &oacute;ptica:";
 choices[40]= new Array();
 choices[40][0] = "Puede transportarse tr&aacute;fico asociado a varios PVCs y SVCs";
 choices[40][1] = "S&oacute;lo puede viajar tr&aacute;fico asociado a un &uacute;nico PVC configurado para tal fin";
 choices[40][2] = "No puede llevar tr&aacute;fico asociado a PVCs";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 0;
 units[40] = ['102'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5030. ";
 preguntaids[40] = 5030


//  Id pregunta: 5007 Año de creación de pregunta: 2002
 questions[41]= "42)  MIME responde por:";
 choices[41]= new Array();
 choices[41][0] = "Multimedia Internet Mail Extensions";
 choices[41][1] = "Multimedia Information Mail Extensions";
 choices[41][2] = "Multipurpose Internet Mail Extensions";
 choices[41][3] = "Multipurpose Information Mail Extensions";
 answers[41] = 2;
 units[41] = ['116'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5007. ";
 preguntaids[41] = 5007


//  Id pregunta: 5021 Año de creación de pregunta: 2002
 questions[42]= "43)  Cu&aacute;ntos octetos usa IPv6 en el direccionamiento, considerando que IPv4 usa 4 octetos:";
 choices[42]= new Array();
 choices[42][0] = "6";
 choices[42][1] = "8";
 choices[42][2] = "14";
 choices[42][3] = "16";
 answers[42] = 3;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5021. ";
 preguntaids[42] = 5021


//  Id pregunta: 4987 Año de creación de pregunta: 2002
 questions[43]= "44)  Los m&eacute;todos de control de acceso al medio de transmisi&oacute;n en las redes de &aacute;rea local describen las reglas que gobiernan cu&aacute;ndo los dispositivos est&aacute;n autorizados a transmitir, evit&aacute;ndose as&iacute; las colisiones.  Estos m&eacute;todos son:";
 choices[43]= new Array();
 choices[43][0] = "CSMA/CD y CSMA/CA";
 choices[43][1] = "Selecci&oacute;n o encuesta (&ldquo;polling&rdquo;), contienda o contenci&oacute;n y reserva o paso de testigo (&ldquo;token passing&rdquo;)";
 choices[43][2] = "Ethernet, IEEE 802.3 y IEEE 802.5";
 choices[43][3] = "Bus, &aacute;rbol y anillo";
 answers[43] = 1;
 units[43] = ['112'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4987. ";
 preguntaids[43] = 4987


//  Id pregunta: 5042 Año de creación de pregunta: 2002
 questions[44]= "45)  Respecto de ADSL, puede decirse que:";
 choices[44]= new Array();
 choices[44][0] = "No requiere ning&uacute;n tipo de dispositivo conectado al PC";
 choices[44][1] = "Basta con un m&oacute;dem ADSL en casa del abonado";
 choices[44][2] = "Necesita que la central del abonado pueda dar el servicio";
 choices[44][3] = "El abonado ha de estar a como mucho 1000 m de su central";
 answers[44] = 2;
 units[44] = ['108'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5042. ";
 preguntaids[44] = 5042


//  Id pregunta: 5036 Año de creación de pregunta: 2002
 questions[45]= "46)  Respecto a las Infraestructuras Comunes de Telecomunicaciones (ICTs):";
 choices[45]= new Array();
 choices[45][0] = "Pueden ser llevadas a cabo y firmadas por cualquier persona independientemente de su formaci&oacute;n acad&eacute;mica";
 choices[45][1] = "&Uacute;nicamente pueden ser firmadas por ingenieros de telecomunicaci&oacute;n, y deben ser visadas por el Colegio de Ingenieros de Telecomunicaci&oacute;n";
 choices[45][2] = "Tienen distinta legislaci&oacute;n en Espa&ntilde;a seg&uacute;n la comunidad aut&oacute;noma de que se trate";
 choices[45][3] = "Nada de lo anterior es cierto";
 answers[45] = 1;
 units[45] = ['121'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5036. ";
 preguntaids[45] = 5036


//  Id pregunta: 4984 Año de creación de pregunta: 2002
 questions[46]= "47)  Los est&aacute;ndares publicados por la IAB (Internet Activities Board) se denominan RFCs que son las siglas de:";
 choices[46]= new Array();
 choices[46][0] = "Recommendation File Contents";
 choices[46][1] = "Requisite File Coordination";
 choices[46][2] = "Request For Comments";
 choices[46][3] = "Register Full Condition";
 answers[46] = 2;
 units[46] = ['103'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4984. ";
 preguntaids[46] = 4984


//  Id pregunta: 4991 Año de creación de pregunta: 2002
 questions[47]= "48)  Los prestadores de servicios de la sociedad de la informaci&oacute;n, seg&uacute;n la Ley 34/2002, tienen obligaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "De comunicar a la Agencia de Protecci&oacute;n de Datos peri&oacute;dicamente los datos de tr&aacute;fico relativos a comunicaciones electr&oacute;nicas";
 choices[47][1] = "De comunicar al Registro de la Propiedad y a la Conserjer&iacute;a de Administraciones P&uacute;blicas su nombre de dominio y direcci&oacute;n de internet";
 choices[47][2] = "De mantener datos para su utilizaci&oacute;n en el marco de una investigaci&oacute;n criminal o para la salvaguarda de la seguridad p&uacute;blica y la defensa nacional sin sujeci&oacute;n a lo dispuesto en la normativa sobre protecci&oacute;n de datos personales";
 choices[47][3] = "De almacenar los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un periodo m&aacute;ximo de 12 meses";
 answers[47] = 3;
 units[47] = ['121'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4991. ";
 preguntaids[47] = 4991


//  Id pregunta: 5052 Año de creación de pregunta: 2002
 questions[48]= "49)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[48]= new Array();
 choices[48][0] = "sobre, cabeceras y cuerpo";
 choices[48][1] = "cabeceras, cuerpo y cola";
 choices[48][2] = "sobre, cabeceras, cuerpo y cola";
 choices[48][3] = "cabeceras y cuerpo";
 answers[48] = 0;
 units[48] = ['116'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5052. ";
 preguntaids[48] = 5052


//  Id pregunta: 5053 Año de creación de pregunta: 2002
 questions[49]= "50)  Se&ntilde;alar qu&eacute; afirmaci&oacute;n no es correcta. En una red de conmutaci&oacute;n de paquetes para evitar la congesti&oacute;n se puede:";
 choices[49]= new Array();
 choices[49][0] = "Reservar espacio suficiente de almacenamiento en los nodos";
 choices[49][1] = "Descartar paquetes";
 choices[49][2] = "En una red de conmutaci&oacute;n de paquetes no hay congesti&oacute;n";
 choices[49][3] = "Enviar paquetes de contenci&oacute;n";
 answers[49] = 2;
 units[49] = ['112'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5053. ";
 preguntaids[49] = 5053


//  Id pregunta: 4983 Año de creación de pregunta: 2002
 questions[50]= "51)  Los est&aacute;ndares MPT1327 y TETRA servicios de:";
 choices[50]= new Array();
 choices[50][0] = "Radiob&uacute;squeda";
 choices[50][1] = "Radiomensajer&iacute;a";
 choices[50][2] = "Comunicaciones mar&iacute;timas";
 choices[50][3] = "Radiocomunicaciones privadas";
 answers[50] = 3;
 units[50] = ['117'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4983. ";
 preguntaids[50] = 4983


//  Id pregunta: 5048 Año de creación de pregunta: 2002
 questions[51]= "52)  Se pueden se&ntilde;alar como ventajas del EDI (Electronic Data Interchange):";
 choices[51]= new Array();
 choices[51][0] = "Reduce los gastos de tratamiento de una transacci&oacute;n, as&iacute; como los de transmisi&oacute;n de la misma";
 choices[51][1] = "Se puede aplicar a todo tipo de sectores de la industria, pero dentro de un pa&iacute;s";
 choices[51][2] = "No existen condicionantes legales para su implantaci&oacute;n";
 choices[51][3] = "Se trata de un sistema de futuro";
 answers[51] = 0;
 units[51] = ['103'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5048. ";
 preguntaids[51] = 5048


//  Id pregunta: 5024 Año de creación de pregunta: 2002
 questions[52]= "53)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[52]= new Array();
 choices[52][0] = "H.321";
 choices[52][1] = "H.320";
 choices[52][2] = "H.323";
 choices[52][3] = "H.324";
 answers[52] = 2;
 units[52] = ['122'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5024. ";
 preguntaids[52] = 5024


//  Id pregunta: 5037 Año de creación de pregunta: 2002
 questions[53]= "54)  Respecto a los cortafuegos de filtrado de paquetes:";
 choices[53]= new Array();
 choices[53][0] = "act&uacute;an como routers inteligentes o screening routers";
 choices[53][1] = "se componen de un conjunto de aplicaciones intermedias, una por servicio";
 choices[53][2] = "desempe&ntilde;an funciones de proxy";
 choices[53][3] = "ninguna de las anteriores respuestas es correcta";
 answers[53] = 0;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5037. ";
 preguntaids[53] = 5037


//  Id pregunta: 4993 Año de creación de pregunta: 2002
 questions[54]= "55)  Los protocolos de control de enlace se orientan:";
 choices[54]= new Array();
 choices[54][0] = "A objeto";
 choices[54][1] = "A baudio";
 choices[54][2] = "A car&aacute;cter o a bit";
 choices[54][3] = "A una trama de tama&ntilde;o variable, hasta 256 bits";
 answers[54] = 2;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4993. ";
 preguntaids[54] = 4993


//  Id pregunta: 5045 Año de creación de pregunta: 2002
 questions[55]= "56)  Sabiendo que se dice que una fibra monomodo es aquella que transmite un &uacute;nico modo de propagaci&oacute;n de un haz monocrom&aacute;tico de luz. Indique cu&aacute;l de las afirmaciones siguientes es verdadera:";
 choices[55]= new Array();
 choices[55][0] = "Las fibras &oacute;pticas monomodo son las m&aacute;s adecuadas para la transmisi&oacute;n de se&ntilde;ales con un ancho de banda peque&ntilde;o y a grandes distancias";
 choices[55][1] = "La fibras &oacute;pticas monomodo son las adecuadas para transmitir se&ntilde;ales de gran ancho de banda y a grandes distancias";
 choices[55][2] = "Las fibras &oacute;pticas monomodo son &uacute;nicamente adecuadas para la transmisi&oacute;n de se&ntilde;ales anal&oacute;gicas";
 choices[55][3] = "Todas las anteriores respuestas son correctas";
 answers[55] = 1;
 units[55] = ['106'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 5045. ";
 preguntaids[55] = 5045


//  Id pregunta: 5040 Año de creación de pregunta: 2002
 questions[56]= "57)  Respecto a los enrutadores, encaminadores o 'routers' se puede afirmar que:";
 choices[56]= new Array();
 choices[56][0] = "En la red de &aacute;rea local, son imprescindibles entre los ordenadores personales y su servidor";
 choices[56][1] = "Facilitan la uni&oacute;n a nivel f&iacute;sico entre dos redes distintas 10baseT y SNA";
 choices[56][2] = "Unen dos redes locales a nivel de red, ya que se suele decir que son equipos h&iacute;bridos";
 choices[56][3] = "Unen las redes WAN o MAN que tienen igual subnivel de control LLC";
 answers[56] = 2;
 units[56] = ['102'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5040. ";
 preguntaids[56] = 5040


//  Id pregunta: 5032 Año de creación de pregunta: 2002
 questions[57]= "58)  Radius permite autentificaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "S&oacute;lo mediante PAP";
 choices[57][1] = "S&oacute;lo mediante CHAP";
 choices[57][2] = "S&oacute;lo para dispositivos fijos";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 3;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5032. ";
 preguntaids[57] = 5032


//  Id pregunta: 4990 Año de creación de pregunta: 2002
 questions[58]= "59)  Los prefijos de subred de longitud arbitraria en IPv4, con notaci&oacute;n a.b.c.d/x donde x es el n&uacute;mero de bits de prefijo, son introducidos seg&uacute;n:";
 choices[58]= new Array();
 choices[58][0] = "CICR";
 choices[58][1] = "CIDR";
 choices[58][2] = "DICR";
 choices[58][3] = "DIDR";
 answers[58] = 1;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4990. ";
 preguntaids[58] = 4990


//  Id pregunta: 5028 Año de creación de pregunta: 2002
 questions[59]= "60)  POP e IMAP son:";
 choices[59]= new Array();
 choices[59][0] = "protocolos de entrega de correo para servidores";
 choices[59][1] = "protocolos de acceso al correo para clientes";
 choices[59][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[59][3] = "las respuestas a) y b) son correctas";
 answers[59] = 1;
 units[59] = ['116'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5028. ";
 preguntaids[59] = 5028


//  Id pregunta: 5041 Año de creación de pregunta: 2002
 questions[60]= "61)  Respecto a las interfaces en RDSI:";
 choices[60]= new Array();
 choices[60][0] = "La interfaz R es la definida para poder conectar los equipos no RDSI (X21, RS232&hellip;) a la especificaci&oacute;n RDSI";
 choices[60][1] = "La interfaz R es la utilizada por los equipos remotos";
 choices[60][2] = "La Interfaz R est&aacute; todav&iacute;a indefinida pues depende de las compa&ntilde;&iacute;as proveedoras de servicio";
 choices[60][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[60] = 0;
 units[60] = ['114'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5041. ";
 preguntaids[60] = 5041


//  Id pregunta: 5018 Año de creación de pregunta: 2002
 questions[61]= "62)  Para la conmutaci&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la ventaja de tener una latencia menor";
 choices[61][1] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la desventaja de transmitir paquetes err&oacute;neos";
 choices[61][2] = "La t&eacute;cnica &quot;store and fordward&quot; tiene las caracter&iacute;sticas opuestas a &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[61][3] = "Todas las afirmaciones anteriores son correctas";
 answers[61] = 3;
 units[61] = ['102'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5018. ";
 preguntaids[61] = 5018


//  Id pregunta: 5003 Año de creación de pregunta: 2002
 questions[62]= "63)  Los tipos diferentes de primitivas existentes en el modelo OSI son:";
 choices[62]= new Array();
 choices[62][0] = "Request, Answer, Finalization";
 choices[62][1] = "Request, Response, Indication, Confirmation";
 choices[62][2] = "Request, Response, Error, Indication, Confirmation, Replay";
 choices[62][3] = "Dependen del protocolo, cada protocolo tiene un conjunto distinto de tipos de primitivas";
 answers[62] = 1;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5003. ";
 preguntaids[62] = 5003


//  Id pregunta: 5038 Año de creación de pregunta: 2002
 questions[63]= "64)  Respecto a los dispositivos de interconexi&oacute;n de redes locales, es falso que:";
 choices[63]= new Array();
 choices[63][0] = "El repetidor compatibiliza 2 medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[63][1] = "Los puentes operan a nivel de enlace, subnivel LLC para un mismo nivel MAC";
 choices[63][2] = "Los enrutadores conectan LANs con LANs, MANs o WANs";
 choices[63][3] = "Las pasarelas trabajan a nivel de red o superior";
 answers[63] = 1;
 units[63] = ['102'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5038. ";
 preguntaids[63] = 5038


//  Id pregunta: 4981 Año de creación de pregunta: 2002
 questions[64]= "65)  Los cortafuegos a nivel de aplicaci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "suelen prestar servicios de tipo proxy";
 choices[64][1] = "son generalistas, no bas&aacute;ndose en ning&uacute;n protocolo en concreto";
 choices[64][2] = "no pueden prestar en ning&uacute;n caso servicios de autenticaci&oacute;n de usuarios";
 choices[64][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[64] = 0;
 units[64] = ['119'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4981. ";
 preguntaids[64] = 4981


//  Id pregunta: 5022 Año de creación de pregunta: 2002
 questions[65]= "66)  Para una red de conmutaci&oacute;n de circuitos, &iquest;qu&eacute; tipo de encaminamiento no utilizar&iacute;a?:";
 choices[65]= new Array();
 choices[65][0] = "Encaminamiento fijo";
 choices[65][1] = "Encaminamiento aleatorio";
 choices[65][2] = "Encaminamiento adaptativo";
 choices[65][3] = "Encaminamiento por inundaci&oacute;n";
 answers[65] = 3;
 units[65] = ['112'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5022. ";
 preguntaids[65] = 5022


//  Id pregunta: 5039 Año de creación de pregunta: 2002
 questions[66]= "67)  Respecto a los elementos de red de SDH puede decirse que:";
 choices[66]= new Array();
 choices[66][0] = "Un multiplexor integra tributarios en una estructura de orden superior";
 choices[66][1] = "Un ADM integra y extrae tributarios de la se&ntilde;al de l&iacute;nea";
 choices[66][2] = "Un crossconnect interconecta tributarios entre agregados y agregados entre s&iacute;";
 choices[66][3] = "Todas las afirmaciones anteriores son correctas";
 answers[66] = 3;
 units[66] = ['115'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5039. ";
 preguntaids[66] = 5039


//  Id pregunta: 4988 Año de creación de pregunta: 2002
 questions[67]= "68)  Los m&oacute;dems usan t&eacute;cnicas de modulaci&oacute;n para transmitir datos sobre las l&iacute;neas telef&oacute;nicas. Indique cu&aacute;l de las siguientes no es una de estas t&eacute;cnicas:";
 choices[67]= new Array();
 choices[67][0] = "Modulaci&oacute;n de fase";
 choices[67][1] = "Modulaci&oacute;n de frecuencia";
 choices[67][2] = "Modulaci&oacute;n QAM";
 choices[67][3] = "Modulaci&oacute;n PCM";
 answers[67] = 3;
 units[67] = ['104'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4988. ";
 preguntaids[67] = 4988


//  Id pregunta: 5006 Año de creación de pregunta: 2002
 questions[68]= "69)  MIB son unas siglas asociadas a:";
 choices[68]= new Array();
 choices[68][0] = "SGBD orientadas a objetos";
 choices[68][1] = "Lenguaje de programaci&oacute;n C++";
 choices[68][2] = "Sistemas de gesti&oacute;n de redes";
 choices[68][3] = "Sistemas OLAP";
 answers[68] = 2;
 units[68] = ['114'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5006. ";
 preguntaids[68] = 5006


//  Id pregunta: 5020 Año de creación de pregunta: 2002
 questions[69]= "70)  Para poder aumentar el rendimiento de los medios de comunicaci&oacute;n se han desarrollado diversos sistemas de multiplexaci&oacute;n. Elija la opci&oacute;n que considere cierta:";
 choices[69]= new Array();
 choices[69][0] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando cada canal de entrada se modula sobre una portadora diferente";
 choices[69][1] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna un per&iacute;odo de tiempo dentro de una trama";
 choices[69][2] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna una frecuencia portadora distinta";
 choices[69][3] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando a cada canal de entrada se le asigna una frecuencia entre las disponibles en el espectro del medio";
 answers[69] = 2;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5020. ";
 preguntaids[69] = 5020


//  Id pregunta: 5010 Año de creación de pregunta: 2002
 questions[70]= "71)  OFTP es:";
 choices[70]= new Array();
 choices[70][0] = "Una versi&oacute;n de TCP/IP para OS/2";
 choices[70][1] = "Odette FTP, una variaci&oacute;n de FTP dise&ntilde;ada para intercambiar ficheros en el mundo de las empresas de automoci&oacute;n";
 choices[70][2] = "Other FTP, una implementaci&oacute;n libre de FTP que es compatible con cualquier plataforma existente en el mercado";
 choices[70][3] = "Own FTP, FTP dise&ntilde;ado por Microsoft para optimizaci&oacute;n del rendimiento del intercambio de archivos entre sus servidores";
 answers[70] = 1;
 units[70] = ['103'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5010. ";
 preguntaids[70] = 5010


//  Id pregunta: 4982 Año de creación de pregunta: 2002
 questions[71]= "72)  Los cortafuegos de filtrado de paquetes:";
 choices[71]= new Array();
 choices[71][0] = "analizan el tr&aacute;fico de la red fundamentalmente en la capa 3";
 choices[71][1] = "generalmente se usan formando 2 listas de reglas: una con acciones permitidas y otra con acciones denegadas";
 choices[71][2] = "son &uacute;tiles contra ataques de denegaci&oacute;n de servicio, y destacan por su rapidez transparencia y flexibilidad";
 choices[71][3] = "Todas las respuestas anteriores son correctas";
 answers[71] = 3;
 units[71] = ['119'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4982. ";
 preguntaids[71] = 4982


//  Id pregunta: 5000 Año de creación de pregunta: 2002
 questions[72]= "73)  Los sistemas de radio en los que los m&oacute;viles no est&aacute;n asignados a una &uacute;nica frecuencia sino que pueden usar una cualquiera de las frecuencias o canales disponibles se denomina:";
 choices[72]= new Array();
 choices[72][0] = "GSM";
 choices[72][1] = "TACS";
 choices[72][2] = "NMT";
 choices[72][3] = "Trunking";
 answers[72] = 3;
 units[72] = ['117'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5000. ";
 preguntaids[72] = 5000


//  Id pregunta: 5043 Año de creación de pregunta: 2002
 questions[73]= "74)  RTP y RTCP son protocolos que habitualmente se situan:";
 choices[73]= new Array();
 choices[73][0] = "justo encima de TCP";
 choices[73][1] = "justo encima de UDP";
 choices[73][2] = "justo debajo de TCP";
 choices[73][3] = "justo debajo de UDP";
 answers[73] = 1;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5043. ";
 preguntaids[73] = 5043


//  Id pregunta: 5044 Año de creación de pregunta: 2002
 questions[74]= "75)  S/MIME utiliza los siguientes algoritmos de  firma:";
 choices[74]= new Array();
 choices[74][0] = "RC2";
 choices[74][1] = "MD5";
 choices[74][2] = "RSA";
 choices[74][3] = "todos los anteriores";
 answers[74] = 3;
 units[74] = ['120'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5044. ";
 preguntaids[74] = 5044


