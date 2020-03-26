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
//  Id pregunta: 10878 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Cuantos host puede poseer una red /30?";
 choices[0]= new Array();
 choices[0][0] = "1";
 choices[0][1] = "6";
 choices[0][2] = "2";
 choices[0][3] = "4";
 answers[0] = 2;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10878. ";
 preguntaids[0] = 10878


//  Id pregunta: 10897 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de conmutaci&oacute;n LAN ejecuta un CRC en cada trama?";
 choices[1]= new Array();
 choices[1][0] = "Metodo de corte";
 choices[1][1] = "Verificaci&oacute;n de fragmentos";
 choices[1][2] = "Libre de fragmentos";
 choices[1][3] = "Almacenamiento y env&iacute;o";
 answers[1] = 3;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10897. ";
 preguntaids[1] = 10897


//  Id pregunta: 10847 Año de creación de pregunta: 2015
 questions[2]= "3)  En LTE, el S-GW:";
 choices[2]= new Array();
 choices[2][0] = "Es el punto de interconexi&oacute;n a redes IP externas.";
 choices[2][1] = "Une la red de acceso con el n&uacute;cleo de red.";
 choices[2][2] = "Gestiona la QoS en los servicios.";
 choices[2][3] = "Almacena y actualiza la base de datos que contiene la informaci&oacute;n de suscripci&oacute;n del usuario.";
 answers[2] = 1;
 units[2] = ['106', '117'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10847. ";
 preguntaids[2] = 10847


//  Id pregunta: 10883 Año de creación de pregunta: 2015
 questions[3]= "4)  Los mensajes intercambiados entre Bridges en STP se denominan:";
 choices[3]= new Array();
 choices[3][0] = "PDUs";
 choices[3][1] = "PDIs";
 choices[3][2] = "BPDU";
 choices[3][3] = "SPDU";
 answers[3] = 2;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10883. ";
 preguntaids[3] = 10883


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


//  Id pregunta: 10852 Año de creación de pregunta: 2015
 questions[5]= "6)  El mandato del Presidente de la CNMC tiene una duraci&oacute;n de:";
 choices[5]= new Array();
 choices[5][0] = "4 a&ntilde;os no renovables";
 choices[5][1] = "4 a&ntilde;os renovables";
 choices[5][2] = "6 a&ntilde;os no renovables";
 choices[5][3] = "6 a&ntilde;os renovables";
 answers[5] = 2;
 units[5] = ['121'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 10852. ";
 preguntaids[5] = 10852


//  Id pregunta: 10839 Año de creación de pregunta: 2015
 questions[6]= "7)  El protocolo TCP se encuentra especificado en:";
 choices[6]= new Array();
 choices[6][0] = "RFC 793";
 choices[6][1] = "RFC 739";
 choices[6][2] = "RFC 791";
 choices[6][3] = "RFC 719";
 answers[6] = 0;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10839. ";
 preguntaids[6] = 10839


//  Id pregunta: 10890 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;cu&aacute;l no es un mecanismo de transici&oacute;n a ipv6?";
 choices[7]= new Array();
 choices[7][0] = "Tunel 6a4";
 choices[7][1] = "Tunel GRE";
 choices[7][2] = "Tunel ISATAP";
 choices[7][3] = "Tunel PPP";
 answers[7] = 3;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10890. CCN-STIC-495";
 preguntaids[7] = 10890


//  Id pregunta: 10832 Año de creación de pregunta: 2015
 questions[8]= "9)  En la versi&oacute;n de 2013 del modelo EFQM se introduce como nuevo concepto fundamental:";
 choices[8]= new Array();
 choices[8][0] = "Alcanzar el &eacute;xito mediante el talento de las personas";
 choices[8][1] = "Crear un futuro sostenible";
 choices[8][2] = "Gestionar con agilidad";
 choices[8][3] = "Aprovechar la creatividad y la innovaci&oacute;n";
 answers[8] = 2;
 units[8] = ['98'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 10832. ";
 preguntaids[8] = 10832


//  Id pregunta: 10869 Año de creación de pregunta: 2015
 questions[9]= "10)  En el modelo COCOMO, los CDA (Cost Driven Attributes) se utilizan en el modelo:";
 choices[9]= new Array();
 choices[9][0] = "B&aacute;sico";
 choices[9][1] = "Intermedio";
 choices[9][2] = "Avanzado";
 choices[9][3] = "b) y c) son correctos";
 answers[9] = 3;
 units[9] = ['93'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10869. ";
 preguntaids[9] = 10869


//  Id pregunta: 10846 Año de creación de pregunta: 2015
 questions[10]= "11)  El est&aacute;ndar WiFi que permite establecer comunicaciones entre autom&oacute;viles es:";
 choices[10]= new Array();
 choices[10][0] = "IEEE 802.11j";
 choices[10][1] = "IEEE 802.11k";
 choices[10][2] = "IEEE 802.11n";
 choices[10][3] = "IEEE 802.11p";
 answers[10] = 3;
 units[10] = ['108'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10846. ";
 preguntaids[10] = 10846


//  Id pregunta: 10863 Año de creación de pregunta: 2015
 questions[11]= "12)  Se&ntilde;ale la tecnolog&iacute;a que no hace uso de MIMO:";
 choices[11]= new Array();
 choices[11][0] = "HSPA+";
 choices[11][1] = "WiFi";
 choices[11][2] = "WiMAX";
 choices[11][3] = "Las 3 hacen uso de MIMO";
 answers[11] = 3;
 units[11] = ['108'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 10863. ";
 preguntaids[11] = 10863


//  Id pregunta: 10872 Año de creación de pregunta: 2015
 questions[12]= "13)  Cuando un switch recibe una trama y no posee la direcci&oacute;n de destino, el switch:";
 choices[12]= new Array();
 choices[12][0] = "env&iacute;a la trama por todos los puertos";
 choices[12][1] = "env&iacute;a un ARP para obtener la direcci&oacute;n de destino de la trama";
 choices[12][2] = "reenv&iacute;a la trama por todos los puertos, excepto por el que fue recibido";
 choices[12][3] = "descarta la trama";
 answers[12] = 2;
 units[12] = ['105'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10872. ";
 preguntaids[12] = 10872


//  Id pregunta: 10885 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Cu&aacute;l no es una caracteristica de PPP?";
 choices[13]= new Array();
 choices[13][0] = "Se puede usar en circuitos anal&oacute;gicos";
 choices[13][1] = "solo soporta IP";
 choices[13][2] = "es capaz de encapsular varios protocolos";
 choices[13][3] = "Proporciona correcci&oacute;n de errores";
 answers[13] = 1;
 units[13] = ['102'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10885. ";
 preguntaids[13] = 10885


//  Id pregunta: 10889 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Qu&eacute; caracter&iacute;stica no se a&ntilde;ade en SNMPv3 respecto a SNMPv2?";
 choices[14]= new Array();
 choices[14][0] = "Autenticaci&oacute;n";
 choices[14][1] = "Cifrado";
 choices[14][2] = "Deteccion de errores";
 choices[14][3] = "Integridad del mensaje";
 answers[14] = 2;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10889. ";
 preguntaids[14] = 10889


//  Id pregunta: 10838 Año de creación de pregunta: 2015
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de los siguientes no es un conector de fibra &oacute;ptica:";
 choices[15]= new Array();
 choices[15][0] = "FC";
 choices[15][1] = "LC";
 choices[15][2] = "SC";
 choices[15][3] = "NC";
 answers[15] = 3;
 units[15] = ['104'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10838. ";
 preguntaids[15] = 10838


//  Id pregunta: 10850 Año de creación de pregunta: 2015
 questions[16]= "17)  De acuerdo a la Ley 9/2014, General de Telecomunicaciones, los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico con limitaci&oacute;n de n&uacute;mero:";
 choices[16]= new Array();
 choices[16][0] = "Se otorgar&aacute;n, por un per&iacute;odo que finalizar&aacute; el 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia, sin perjuicio de su posible renovaci&oacute;n.";
 choices[16][1] = "Se otorgar&aacute;n, por un per&iacute;odo que finalizar&aacute; el 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia, sin posibilidad de renovaci&oacute;n.";
 choices[16][2] = "Tendr&aacute;n la duraci&oacute;n prevista en los correspondientes procedimientos de licitaci&oacute;n, con un m&aacute;ximo de veinte a&ntilde;os, incluyendo pr&oacute;rrogas, sin posibilidad de renovaci&oacute;n autom&aacute;tica.";
 choices[16][3] = "Tendr&aacute;n la duraci&oacute;n prevista en los correspondientes procedimientos de licitaci&oacute;n, con un m&aacute;ximo de veinte a&ntilde;os, salvo pr&oacute;rrogas, sin posibilidad de renovaci&oacute;n autom&aacute;tica.";
 answers[16] = 2;
 units[16] = ['121'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 10850. ";
 preguntaids[16] = 10850


//  Id pregunta: 10875 Año de creación de pregunta: 2015
 questions[17]= "18)  Al conectar un PC y un HUB se debe usar:";
 choices[17]= new Array();
 choices[17][0] = "Straight-through cable";
 choices[17][1] = "Consola";
 choices[17][2] = "Crossover cable";
 choices[17][3] = "RJ 11";
 answers[17] = 0;
 units[17] = ['104'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 10875. ";
 preguntaids[17] = 10875


//  Id pregunta: 10904 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Qu&eacute; factor determina en TCP el tama&ntilde;o de ventana?";
 choices[18]= new Array();
 choices[18][0] = "la cantidad de datos que el destino puede procesar a la vez";
 choices[18][1] = "el n&uacute;mero de servicios incluidos en el segmento TCP";
 choices[18][2] = "la cantidad de datos que la fuente es capaz de enviar de una sola vez";
 choices[18][3] = "la cantidad de datos a transmitir";
 answers[18] = 0;
 units[18] = ['102'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10904. ";
 preguntaids[18] = 10904


//  Id pregunta: 10898 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera acerca de las VLANs?";
 choices[19]= new Array();
 choices[19][0] = "Se deben tener al menos dos VLANs definidas en cada red conmutada";
 choices[19][1] = "Se deben tener al menos tres VLANs definidas en cada red conmutada";
 choices[19][2] = "No deber&iacute;an tenerse m&aacute;s de 3 switches en cada red conmutada";
 choices[19][3] = "Actuan a nivel 2 del modelo OSI";
 answers[19] = 3;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10898. ";
 preguntaids[19] = 10898


//  Id pregunta: 10844 Año de creación de pregunta: 2015
 questions[20]= "21)  En la tecnolog&iacute;a RDSI, la interfaz entre un equipo de usuario no compatible con RDSI y el correspondiente terminal adaptador recibe el nombre de punto de referencia:";
 choices[20]= new Array();
 choices[20][0] = "P";
 choices[20][1] = "R";
 choices[20][2] = "S";
 choices[20][3] = "T";
 answers[20] = 1;
 units[20] = ['114'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 10844. ";
 preguntaids[20] = 10844


//  Id pregunta: 10864 Año de creación de pregunta: 2015
 questions[21]= "22)  Se&ntilde;ale el c&oacute;dec que no aplica compresi&oacute;n de entre los siguientes:";
 choices[21]= new Array();
 choices[21][0] = "G.711";
 choices[21][1] = "G.726";
 choices[21][2] = "G.729";
 choices[21][3] = "iLBC";
 answers[21] = 0;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10864. ";
 preguntaids[21] = 10864


//  Id pregunta: 10900 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[22]= new Array();
 choices[22][0] = "Direccion destino IP";
 choices[22][1] = "Direccion origen IP";
 choices[22][2] = "Protocolo";
 choices[22][3] = "Puerto";
 answers[22] = 1;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10900. ";
 preguntaids[22] = 10900


//  Id pregunta: 10837 Año de creación de pregunta: 2015
 questions[23]= "24)  La Gesti&oacute;n de la disponibilidad se encuentra en ITILv2 e ITIL v3, respectivamente en:";
 choices[23]= new Array();
 choices[23][0] = "Entrega del servicio y Dise&ntilde;o del servicio";
 choices[23][1] = "Soporte del servicio y Estrategia del servicio";
 choices[23][2] = "Soporte del servicio y Transici&oacute;n del servicio";
 choices[23][3] = "Entrega del servicio y Estrategia del servicio";
 answers[23] = 0;
 units[23] = ['101'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10837. ";
 preguntaids[23] = 10837


//  Id pregunta: 10902 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l es la forma en que un administrador puede configurar VLAN?";
 choices[24]= new Array();
 choices[24][0] = "Est&aacute;ticamente o Dinamicamente";
 choices[24][1] = "Din&aacute;micamente o a trav&eacute;s de una base de datos de VLAN";
 choices[24][2] = "A trav&eacute;s de un servidor DHCP";
 choices[24][3] = "A trav&eacute;s de una base de datos";
 answers[24] = 0;
 units[24] = ['102'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 10902. ";
 preguntaids[24] = 10902


//  Id pregunta: 10853 Año de creación de pregunta: 2015
 questions[25]= "26)  Las dimensiones can&oacute;nicas de la seguridad son:";
 choices[25]= new Array();
 choices[25][0] = "Disponibilidad, confidencialidad y trazabilidad";
 choices[25][1] = "Confidencialidad, autenticidad y disponibilidad";
 choices[25][2] = "Integridad, trazabilidad y autenticidad";
 choices[25][3] = "Confidencialidad, integridad y disponibilidad";
 answers[25] = 3;
 units[25] = ['119'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10853. ";
 preguntaids[25] = 10853


//  Id pregunta: 10861 Año de creación de pregunta: 2015
 questions[26]= "27)  El JRE no contiene el nivel de:";
 choices[26]= new Array();
 choices[26][0] = "Herramientas de interfaz de usuario";
 choices[26][1] = "Despliegue";
 choices[26][2] = "Librer&iacute;as de integraci&oacute;n";
 choices[26][3] = "Contiene los 3 niveles";
 answers[26] = 3;
 units[26] = ['64'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 10861. ";
 preguntaids[26] = 10861


//  Id pregunta: 10856 Año de creación de pregunta: 2015
 questions[27]= "28)  POCO son las siglas de:";
 choices[27]= new Array();
 choices[27][0] = "Plain Old CLR Object";
 choices[27][1] = "Plain Old Class Object";
 choices[27][2] = "Plain Old COM Object";
 choices[27][3] = "Plain Old Connection Object";
 answers[27] = 0;
 units[27] = ['63'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10856. ";
 preguntaids[27] = 10856


//  Id pregunta: 10836 Año de creación de pregunta: 2015
 questions[28]= "29)  Indique cu&aacute;l no es un habilitador de CoBIT";
 choices[28]= new Array();
 choices[28][0] = "Procesos";
 choices[28][1] = "Gobierno";
 choices[28][2] = "Informaci&oacute;n";
 choices[28][3] = "Estructuras organizacionales";
 answers[28] = 1;
 units[28] = ['101'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10836. ";
 preguntaids[28] = 10836


//  Id pregunta: 10893 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;cu&aacute;l es una caracter&iacute;stica de los ataques DoS?";
 choices[29]= new Array();
 choices[29][0] = "Siempre preceden a ataques de acceso";
 choices[29][1] = "Intentan comprometer la disponibilidad de un equipo, red, o aplicaci&oacute;n";
 choices[29][2] = "Un ejemplo de ellos es el escaneo de puertos";
 choices[29][3] = "Un ejemplo de ellos es el &quot;barrido de ping&quot;";
 answers[29] = 1;
 units[29] = ['119'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10893. ";
 preguntaids[29] = 10893


//  Id pregunta: 10895 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Qu&eacute; amenaza de seguridad se trata de SW que se adhiere a otro SW para ejecutar funciones no deseadas?";
 choices[30]= new Array();
 choices[30][0] = "Virus";
 choices[30][1] = "Gusano";
 choices[30][2] = "Caballo de Troya Proxy";
 choices[30][3] = "Caballo de Troya de denegaci&oacute;n de servicio";
 answers[30] = 0;
 units[30] = ['119'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10895. ";
 preguntaids[30] = 10895


//  Id pregunta: 10833 Año de creación de pregunta: 2015
 questions[31]= "32)  Entre las siguientes afirmaciones sobre el formato JPEG, se&ntilde;ale la incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "Sus siglas vienen de Joint Photography Experts Group";
 choices[31][1] = "Soporta animaciones";
 choices[31][2] = "Es un formato de compresi&oacute;n con p&eacute;rdidas";
 choices[31][3] = "Usa la transformada discreta del coseno (DCT)";
 answers[31] = 1;
 units[31] = ['80'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 10833. ";
 preguntaids[31] = 10833


//  Id pregunta: 10879 Año de creación de pregunta: 2015
 questions[32]= "33)  En el contexto de NAT IP,&iquest; qu&eacute; direcci&oacute;n se usa para representar equipos internos en el exterior?";
 choices[32]= new Array();
 choices[32][0] = "Local interna";
 choices[32][1] = "Global interna";
 choices[32][2] = "Local externa";
 choices[32][3] = "Global interna";
 answers[32] = 1;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 10879. ";
 preguntaids[32] = 10879


//  Id pregunta: 10867 Año de creación de pregunta: 2015
 questions[33]= "34)  El comando top de Linux permite:";
 choices[33]= new Array();
 choices[33][0] = "Moverse por una b&uacute;squeda";
 choices[33][1] = "Acceder al directorio inmediatamente inferior";
 choices[33][2] = "Conocer el consumo de CPU de todos los procesos";
 choices[33][3] = "Todas las anteriores son falsas";
 answers[33] = 2;
 units[33] = ['57'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10867. ";
 preguntaids[33] = 10867


//  Id pregunta: 10899 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza caracter&iacute;sticas tanto de los protocolos de vector distancia como de los de estado de enlace?";
 choices[34]= new Array();
 choices[34][0] = "OSPF";
 choices[34][1] = "RIP";
 choices[34][2] = "RIPv2";
 choices[34][3] = "EIGRP";
 answers[34] = 3;
 units[34] = ['102'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10899. ";
 preguntaids[34] = 10899


//  Id pregunta: 10881 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Qu&eacute; es PAT?";
 choices[35]= new Array();
 choices[35][0] = "Port Address Translation";
 choices[35][1] = "Protocol Access Translation";
 choices[35][2] = "Port Acknowledge Timeout";
 choices[35][3] = "PDU access token";
 answers[35] = 0;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10881. ";
 preguntaids[35] = 10881


//  Id pregunta: 10866 Año de creación de pregunta: 2015
 questions[36]= "37)  UDDI se corresponde con las siglas:";
 choices[36]= new Array();
 choices[36][0] = "Universal Description, Discovery and Integration";
 choices[36][1] = "Uniform Description, Discovery and Integration";
 choices[36][2] = "Universal Description, Discovery and Information";
 choices[36][3] = "Unic Description, Discovery and Information";
 answers[36] = 0;
 units[36] = ['55'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10866. ";
 preguntaids[36] = 10866


//  Id pregunta: 10843 Año de creación de pregunta: 2015
 questions[37]= "38)  Son protocolos de estado del enlace:";
 choices[37]= new Array();
 choices[37][0] = "OSPF y RIPv2";
 choices[37][1] = "IS-IS y OSPF";
 choices[37][2] = "IGRP y RIPv2";
 choices[37][3] = "RIPv2 e IS-IS";
 answers[37] = 1;
 units[37] = ['102'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 10843. ";
 preguntaids[37] = 10843


//  Id pregunta: 10901 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Cu&aacute;les de los siguientes protocolos no incluye la suite PPP?";
 choices[38]= new Array();
 choices[38][0] = "LAPB";
 choices[38][1] = "HDLC";
 choices[38][2] = "LCP";
 choices[38][3] = "SDLC";
 answers[38] = 0;
 units[38] = ['105'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10901. ";
 preguntaids[38] = 10901


//  Id pregunta: 10888 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[39]= new Array();
 choices[39][0] = "MIB";
 choices[39][1] = "SNMP manager";
 choices[39][2] = "SNMP agent";
 choices[39][3] = "Servidor Syslog";
 answers[39] = 3;
 units[39] = ['114'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 10888. ";
 preguntaids[39] = 10888


//  Id pregunta: 10841 Año de creación de pregunta: 2015
 questions[40]= "41)  En IPv6, desaparece el direccionamiento:";
 choices[40]= new Array();
 choices[40][0] = "Unicast";
 choices[40][1] = "Multicast";
 choices[40][2] = "Anycast";
 choices[40][3] = "Broadcast";
 answers[40] = 3;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10841. ";
 preguntaids[40] = 10841


//  Id pregunta: 10886 Año de creación de pregunta: 2015
 questions[41]= "42)  Una WAN ATM est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[41]= new Array();
 choices[41][0] = "Punto a punto";
 choices[41][1] = "Broadcast multi-acceso";
 choices[41][2] = "No broadcast multi-acceso";
 choices[41][3] = "Broadcast punto a multipunto";
 answers[41] = 2;
 units[41] = ['107'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 10886. ";
 preguntaids[41] = 10886


//  Id pregunta: 10882 Año de creación de pregunta: 2015
 questions[42]= "43)  &iquest;cu&aacute;l no es un estado de puerto en el protocolo STP?";
 choices[42]= new Array();
 choices[42][0] = "Listening";
 choices[42][1] = "Learning";
 choices[42][2] = "Forwarding";
 choices[42][3] = "Broadcasting";
 answers[42] = 3;
 units[42] = ['102'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 10882. ";
 preguntaids[42] = 10882


//  Id pregunta: 10845 Año de creación de pregunta: 2015
 questions[43]= "44)  Se&ntilde;ale la frase incorrecta:";
 choices[43]= new Array();
 choices[43][0] = "La versi&oacute;n 3 de SNMP proporciona mejoras en materia de seguridad con respecto a la versi&oacute;n 2.";
 choices[43][1] = "SNMP es un protocolo de la capa de aplicaci&oacute;n.";
 choices[43][2] = "Las versiones 1, 2 y 3 son compatibles entre s&iacute;.";
 choices[43][3] = "Los mensajes GetNextRequest se utilizan para recorrer una tabla de objetos.";
 answers[43] = 2;
 units[43] = ['114'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 10845. ";
 preguntaids[43] = 10845


//  Id pregunta: 10842 Año de creación de pregunta: 2015
 questions[44]= "45)  Una trama STM-4 tiene una capacidad de:";
 choices[44]= new Array();
 choices[44][0] = "155 Mbps";
 choices[44][1] = "622 Mbps";
 choices[44][2] = "2,5 Gbps";
 choices[44][3] = "10 Gbps";
 answers[44] = 1;
 units[44] = ['112'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 10842. ";
 preguntaids[44] = 10842


//  Id pregunta: 10859 Año de creación de pregunta: 2015
 questions[45]= "46)  Las gu&iacute;as de mejores pr&aacute;ticas de Java se denominan:";
 choices[45]= new Array();
 choices[45][0] = "Hibernate";
 choices[45][1] = "Spring";
 choices[45][2] = "BluePrints";
 choices[45][3] = "Struts";
 answers[45] = 2;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 10859. ";
 preguntaids[45] = 10859


//  Id pregunta: 10854 Año de creación de pregunta: 2015
 questions[46]= "47)  El perfil de XAdES en el que se a&ntilde;aden los certificados a los documentos firmados es:";
 choices[46]= new Array();
 choices[46][0] = "XAdES-A";
 choices[46][1] = "XAdES-C";
 choices[46][2] = "XAdES-X-L";
 choices[46][3] = "XAdES-X";
 answers[46] = 2;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 10854. ";
 preguntaids[46] = 10854


//  Id pregunta: 10870 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[47]= new Array();
 choices[47][0] = "MAC";
 choices[47][1] = "Segmento";
 choices[47][2] = "Paquete";
 choices[47][3] = "Trama";
 answers[47] = 3;
 units[47] = ['105'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 10870. ";
 preguntaids[47] = 10870


//  Id pregunta: 10877 Año de creación de pregunta: 2015
 questions[48]= "49)  Un cable RJ-45 cruzado se forma:";
 choices[48]= new Array();
 choices[48][0] = "conectando los pines 1 al 3 y el 2 al 6";
 choices[48][1] = "conectando los pines 1 al 8 el y el 2 al 7";
 choices[48][2] = "conectando los pines 1 al 3 y el 2 al 4";
 choices[48][3] = "conectando el pin 1 al pin 1 y el pin 2 al pin 2";
 answers[48] = 0;
 units[48] = ['104'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 10877. ";
 preguntaids[48] = 10877


//  Id pregunta: 10891 Año de creación de pregunta: 2015
 questions[49]= "50)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[49]= new Array();
 choices[49][0] = "2000::/3";
 choices[49][1] = "FF00::/10";
 choices[49][2] = "FE00::/12";
 choices[49][3] = "::1/128";
 answers[49] = 0;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 10891. ";
 preguntaids[49] = 10891


//  Id pregunta: 10830 Año de creación de pregunta: 2015
 questions[50]= "51)  Indique cu&aacute;l no es un principio de la norma ISO 9004";
 choices[50]= new Array();
 choices[50][0] = "Enfoque de sistema para la gesti&oacute;n";
 choices[50][1] = "Enfoque basado en procesos";
 choices[50][2] = "Enfoque al cliente";
 choices[50][3] = "Enfoque al proveedor";
 answers[50] = 3;
 units[50] = ['98'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10830. ";
 preguntaids[50] = 10830


//  Id pregunta: 10862 Año de creación de pregunta: 2015
 questions[51]= "52)  Son plataformas para almacenar y compartir fotos:";
 choices[51]= new Array();
 choices[51][0] = "Flickr, Backpackit y Picasa";
 choices[51][1] = "Photobucket, Picasa y ThisLife";
 choices[51][2] = "ThisLife, Drupal y Flickr";
 choices[51][3] = "Photobucket, Backpackit y Feedreader";
 answers[51] = 1;
 units[51] = ['125'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 10862. ";
 preguntaids[51] = 10862


//  Id pregunta: 10871 Año de creación de pregunta: 2015
 questions[52]= "53)  Cuando el servidor web envia una respuesta, seg&uacute;n el modelo OSI los datos primero se encapsulan en un";
 choices[52]= new Array();
 choices[52][0] = "Paquete";
 choices[52][1] = "Segmento";
 choices[52][2] = "Trama";
 choices[52][3] = "Frame";
 answers[52] = 1;
 units[52] = ['105'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 10871. ";
 preguntaids[52] = 10871


//  Id pregunta: 10892 Año de creación de pregunta: 2015
 questions[53]= "54)  Qu&eacute; direcci&oacute;n multicast utiliza RIPng";
 choices[53]= new Array();
 choices[53][0] = "FF02::9";
 choices[53][1] = "FF02::1";
 choices[53][2] = "FF02:A";
 choices[53][3] = "FF02::6";
 answers[53] = 0;
 units[53] = ['102'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 10892. ";
 preguntaids[53] = 10892


//  Id pregunta: 10894 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los Caballos de Troya?";
 choices[54]= new Array();
 choices[54][0] = "Un caballo de troya proxy abre el puerto 21 en el sistema objetivo";
 choices[54][1] = "Un caballo de troya es dificil de detectar, porque detiene su ejecuci&oacute;n cuando la aplicaci&oacute;n que lo ejecut&oacute; se cierra.";
 choices[54][2] = "Un caballo de Troya puede cargarse en un virus o un gusano";
 choices[54][3] = "Un caballo de Troya FTP compromete el funcionamiento de cortafuegos";
 answers[54] = 2;
 units[54] = ['119'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 10894. ";
 preguntaids[54] = 10894


//  Id pregunta: 10831 Año de creación de pregunta: 2015
 questions[55]= "56)  En el modelo EFQM, de los siguientes criterios, el que tiene un mayor peso en la puntuaci&oacute;n es:";
 choices[55]= new Array();
 choices[55][0] = "Resultados en los clientes";
 choices[55][1] = "Resultados en la sociedad";
 choices[55][2] = "Resultados en las personas";
 choices[55][3] = "Todos tienen el mismo peso";
 answers[55] = 0;
 units[55] = ['98'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 10831. ";
 preguntaids[55] = 10831


//  Id pregunta: 10860 Año de creación de pregunta: 2015
 questions[56]= "57)  En Java, para redirigir la petici&oacute;n a otra p&aacute;gina JSP se utiliza la etiqueta:";
 choices[56]= new Array();
 choices[56][0] = "page";
 choices[56][1] = "forward";
 choices[56][2] = "request";
 choices[56][3] = "pageContext";
 answers[56] = 1;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 10860. ";
 preguntaids[56] = 10860


//  Id pregunta: 10835 Año de creación de pregunta: 2015
 questions[57]= "58)  El stemming es:";
 choices[57]= new Array();
 choices[57][0] = "Una t&eacute;cnica de indexaci&oacute;n sint&aacute;ctica";
 choices[57][1] = "Una t&eacute;cnica de indexaci&oacute;n morfol&oacute;gica";
 choices[57][2] = "Una t&eacute;cnica de indexaci&oacute;n sem&aacute;ntica";
 choices[57][3] = "Una t&eacute;cnica de eliminaci&oacute;n de palabras vac&iacute;as";
 answers[57] = 1;
 units[57] = ['100'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10835. ";
 preguntaids[57] = 10835


//  Id pregunta: 10884 Año de creación de pregunta: 2015
 questions[58]= "59)  Un ABR (Router frontera de &aacute;rea) de OSPF:";
 choices[58]= new Array();
 choices[58][0] = "Debe disponer de varias interfaces conectadas al area Backbone";
 choices[58][1] = "Es un enrutador con dos interfaces, cada una de ellas conectada a un area OSPF diferente";
 choices[58][2] = "Un ABR debe disponer de una interfaz conectada al &aacute;rea backbone, y otra conectada a otra &aacute;rea OSPF";
 choices[58][3] = "Basta con que disponga de una interfaz conectada al &aacute;rea Backbone de OSPF";
 answers[58] = 2;
 units[58] = ['102'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 10884. ";
 preguntaids[58] = 10884


//  Id pregunta: 10873 Año de creación de pregunta: 2015
 questions[59]= "60)  La capa de Red del modelo OSI equivale a la capa siguiente del modelo TCP:";
 choices[59]= new Array();
 choices[59][0] = "Internet";
 choices[59][1] = "Application";
 choices[59][2] = "Red";
 choices[59][3] = "Data Link";
 answers[59] = 0;
 units[59] = ['105'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 10873. ";
 preguntaids[59] = 10873


//  Id pregunta: 10855 Año de creación de pregunta: 2015
 questions[60]= "61)  XACML es:";
 choices[60]= new Array();
 choices[60][0] = "Un est&aacute;ndar de firma de documentos.";
 choices[60][1] = "Un est&aacute;ndar que define un esquema XML para el intercambio de autorizaci&oacute;n y autenticaci&oacute;n.";
 choices[60][2] = "Un est&aacute;ndar basado en la especificaci&oacute;n XML para definir pol&iacute;ticas de control de acceso.";
 choices[60][3] = "Especifica un proceso para cifrar datos y representar esa informaci&oacute;n cifrada en XML.";
 answers[60] = 2;
 units[60] = ['119'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 10855. ";
 preguntaids[60] = 10855


//  Id pregunta: 10851 Año de creación de pregunta: 2015
 questions[61]= "62)  De acuerdo a la Ley 9/2014, General de Telecomunicaciones, por la comisi&oacute;n de infracciones graves tipificadas en las que la Comisi&oacute;n Nacional de los Mercados y la Competencia tenga competencias sancionadoras se impondr&aacute; al infractor multa por importe de:";
 choices[61]= new Array();
 choices[61][0] = "Hasta el duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, un l&iacute;mite m&aacute;ximo de dos millones de euros.";
 choices[61][1] = "Hasta el duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, dos millones de euros.";
 choices[61][2] = "El duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, un l&iacute;mite m&aacute;ximo de dos millones de euros.";
 choices[61][3] = "Dos millones de euros.";
 answers[61] = 0;
 units[61] = ['121'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10851. ";
 preguntaids[61] = 10851


//  Id pregunta: 10876 Año de creación de pregunta: 2015
 questions[62]= "63)  El OUI de una direcci&oacute;n MAC posee";
 choices[62]= new Array();
 choices[62][0] = "6 digitos Hexadecimales";
 choices[62][1] = "32bits";
 choices[62][2] = "48bits";
 choices[62][3] = "24bytes";
 answers[62] = 0;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 10876. ";
 preguntaids[62] = 10876


//  Id pregunta: 10868 Año de creación de pregunta: 2015
 questions[63]= "64)  Se&ntilde;ale la falsa con respecto al usuario root del sistema operativo UNIX:";
 choices[63]= new Array();
 choices[63][0] = "Su UID es el 0.";
 choices[63][1] = "Recibe el nombre de superusuario.";
 choices[63][2] = "Puede eliminarse por medio del comando rmuser, con los permisos adecuados.";
 choices[63][3] = "Puede fijar prioridades a los procesos.";
 answers[63] = 2;
 units[63] = ['57'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 10868. ";
 preguntaids[63] = 10868


//  Id pregunta: 10848 Año de creación de pregunta: 2015
 questions[64]= "65)  En UMTS, la banda ascendente FDD usa el rango de frecuencias:";
 choices[64]= new Array();
 choices[64][0] = "1920 MHz a 1980 MHz";
 choices[64][1] = "1980 MHz a 2010 MHz";
 choices[64][2] = "2110 MHz a 2170 MHz";
 choices[64][3] = "2170 MHz a 2200 MHz";
 answers[64] = 0;
 units[64] = ['117'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 10848. ";
 preguntaids[64] = 10848


//  Id pregunta: 10874 Año de creación de pregunta: 2015
 questions[65]= "66)  Al conectar un PC a un switch se debe usar;";
 choices[65]= new Array();
 choices[65][0] = "Straight-through cable";
 choices[65][1] = "Consola";
 choices[65][2] = "Crossover cable";
 choices[65][3] = "RJ 11";
 answers[65] = 0;
 units[65] = ['104'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 10874. ";
 preguntaids[65] = 10874


//  Id pregunta: 10896 Año de creación de pregunta: 2015
 questions[66]= "67)  En el &aacute;mbito de la seguridad,&iquest;a qu&eacute; atienden las siglas AAA?";
 choices[66]= new Array();
 choices[66][0] = "Authentication, Authorization and Accounting";
 choices[66][1] = "Acknowledge, Authorization and Accounting";
 choices[66][2] = "Authentication, Authorization and Access";
 choices[66][3] = "Authentication, Approval and Accounting";
 answers[66] = 0;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 10896. ";
 preguntaids[66] = 10896


//  Id pregunta: 10880 Año de creación de pregunta: 2015
 questions[67]= "68)  En qu&eacute; consiste el mecanismo de Sobrecarga NAT";
 choices[67]= new Array();
 choices[67][0] = "En la utilizaci&oacute;n de puertos para traducir una direccion interna local en una direccion interna global.";
 choices[67][1] = "En la utilizaci&oacute;n de puertos para traducir direcciones internas locales en una o m&aacute;s direcciones globales internas.";
 choices[67][2] = "Traduce una direccion local interna en una global interna";
 choices[67][3] = "Traduce una direccion local interna en otra direccion local interna";
 answers[67] = 1;
 units[67] = ['119'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 10880. ";
 preguntaids[67] = 10880


//  Id pregunta: 10840 Año de creación de pregunta: 2015
 questions[68]= "69)  En IPv6, la etiqueta de flujo tiene una longitud de:";
 choices[68]= new Array();
 choices[68][0] = "8 bits";
 choices[68][1] = "16 bits";
 choices[68][2] = "20 bits";
 choices[68][3] = "No existe dicha etiqueta";
 answers[68] = 2;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 10840. ";
 preguntaids[68] = 10840


//  Id pregunta: 10858 Año de creación de pregunta: 2015
 questions[69]= "70)  Los Enterprise Java Beans (EJB) con funcionamiento as&iacute;ncrono son:";
 choices[69]= new Array();
 choices[69][0] = "Message driven beans";
 choices[69][1] = "Session beans";
 choices[69][2] = "Entity beans";
 choices[69][3] = "Todos los anteriores tienen funcionamiento as&iacute;ncrono.";
 answers[69] = 0;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 10858. ";
 preguntaids[69] = 10858


//  Id pregunta: 10834 Año de creación de pregunta: 2015
 questions[70]= "71)  En relaci&oacute;n con las t&eacute;cnicas de OCR:";
 choices[70]= new Array();
 choices[70][0] = "La ascendente es la porci&oacute;n de un car&aacute;cter que queda por encima de la l&iacute;nea base";
 choices[70][1] = "Un car&aacute;cter es la unidad b&aacute;sica de reconocimiento y est&aacute; siempre formado por una letra";
 choices[70][2] = "La l&iacute;nea base une las descendentes de una fila de letras";
 choices[70][3] = "Una pica equivale a 12 puntos";
 answers[70] = 3;
 units[70] = ['81'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 10834. ";
 preguntaids[70] = 10834


//  Id pregunta: 10887 Año de creación de pregunta: 2015
 questions[71]= "72)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[71]= new Array();
 choices[71][0] = "Punto a punto";
 choices[71][1] = "Broadcast multi-acceso";
 choices[71][2] = "No broadcast multi-acceso";
 choices[71][3] = "Broadcast punto a multipunto";
 answers[71] = 2;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 10887. ";
 preguntaids[71] = 10887


//  Id pregunta: 10857 Año de creación de pregunta: 2015
 questions[72]= "73)  Con respecto a WCF, se&ntilde;ale la incorrecta:";
 choices[72]= new Array();
 choices[72][0] = "Los servicios WCF pueden ejecutarse sobre TCP.";
 choices[72][1] = "WCF son las siglas de Windows Communication Foundation.";
 choices[72][2] = "WCF usa siempre SOAP.";
 choices[72][3] = "Las tres anteriores son ciertas.";
 answers[72] = 2;
 units[72] = ['63'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 10857. ";
 preguntaids[72] = 10857


//  Id pregunta: 10849 Año de creación de pregunta: 2015
 questions[73]= "74)  El incumplimiento por los operadores, o por los propietarios de los correspondientes recursos asociados, de las obligaciones establecidas para la utilizaci&oacute;n compartida de los tramos finales de las redes de acceso, se recoge en la Ley 9/2014, General de Telecomunicaciones como una infracci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Leve";
 choices[73][1] = "Grave";
 choices[73][2] = "Muy grave";
 choices[73][3] = "Dicha infracci&oacute;n no se encuentra recogida en la Ley 9/2014.";
 answers[73] = 1;
 units[73] = ['121'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10849. ";
 preguntaids[73] = 10849


//  Id pregunta: 10865 Año de creación de pregunta: 2015
 questions[74]= "75)  SATA III ofrece una transferencia de datos de:";
 choices[74]= new Array();
 choices[74][0] = "100 MB/s";
 choices[74][1] = "200 MB/s";
 choices[74][2] = "300 MB/s";
 choices[74][3] = "600 MB/s";
 answers[74] = 3;
 units[74] = ['53'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 10865. ";
 preguntaids[74] = 10865


