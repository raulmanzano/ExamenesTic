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
//  Id pregunta: 4941 Año de creación de pregunta: 2002
 questions[0]= "1)  Una arquitectura de red jer&aacute;rquica:";
 choices[0]= new Array();
 choices[0][0] = "Asigna a cada sistema de comunicaciones de la red las mismas funciones";
 choices[0][1] = "Todas las sesiones de la red tienen lugar entre sistemas parejos";
 choices[0][2] = "Un sistema maestro es el encargado de toda la red y realiza funciones de gesti&oacute;n y control";
 choices[0][3] = "Todas las sesiones comparten las funciones de gesti&oacute;n de red";
 answers[0] = 2;
 units[0] = ['114'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4941. ";
 preguntaids[0] = 4941


//  Id pregunta: 4932 Año de creación de pregunta: 2002
 questions[1]= "2)  Un BALUN:";
 choices[1]= new Array();
 choices[1][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[1][1] = "Adapta un conector RJ45 y BNC.";
 choices[1][2] = "Es un conector entre RJ11 y RJ45.";
 choices[1][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[1] = 0;
 units[1] = ['104'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4932. ";
 preguntaids[1] = 4932


//  Id pregunta: 4914 Año de creación de pregunta: 2002
 questions[2]= "3)  Cual seria el formato de direcciones IPv4 compatibles en Ipv6";
 choices[2]= new Array();
 choices[2][0] = "::&lt;direcci&oacute;n_IPv4&gt;";
 choices[2][1] = "::FFFF:&lt;direcci&oacute;n_IPv4&gt;";
 choices[2][2] = ":&lt;direcci&oacute;n_IPv4&gt;";
 choices[2][3] = "&lt;direcci&oacute;n_IPv4&gt;::";
 answers[2] = 0;
 units[2] = ['105'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4914. ";
 preguntaids[2] = 4914


//  Id pregunta: 4957 Año de creación de pregunta: 2002
 questions[3]= "4)  La velocidad del est&aacute;ndar Gigabit Ethernet es:";
 choices[3]= new Array();
 choices[3][0] = "100 Mbps";
 choices[3][1] = "1000 Mbps";
 choices[3][2] = "10000 Mbps";
 choices[3][3] = "100000 Mbps";
 answers[3] = 1;
 units[3] = ['112'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4957. ";
 preguntaids[3] = 4957


//  Id pregunta: 4937 Año de creación de pregunta: 2002
 questions[4]= "5)  Un puente transparente aprende la direcci&oacute;n de los dispositivos:";
 choices[4]= new Array();
 choices[4][0] = "Examinado las direcciones MAC de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[4][1] = "Examinando las direcciones de red de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[4][2] = "Examinado las direcciones MAC de las tramas salientes y asoci&aacute;ndolas con una interfaz da salida";
 choices[4][3] = "Examinando las direcciones de red de las tramas salientes y asoci&aacute;ndolas con una interfaz de salida";
 answers[4] = 0;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4937. ";
 preguntaids[4] = 4937


//  Id pregunta: 4965 Año de creación de pregunta: 2002
 questions[5]= "6)  Las diversas tecnolog&iacute;as usadas en red local y metropolitanas se han popularizado mediante diversos nombres y normas. Indique la opci&oacute;n correcta o si lo son todas ellas:";
 choices[5]= new Array();
 choices[5][0] = "Las redes Token Ring se caracterizan por tener una topolog&iacute;a en anillo l&oacute;gico y la norma que cumple es IEEE 802.4";
 choices[5][1] = "La red FDDI est&aacute; definida como una red en anillo f&iacute;sico y est&aacute; amparada por la norma ISO-9314";
 choices[5][2] = "Las redes Token Bus se caracterizan por tener una topolog&iacute;a en anillo f&iacute;sico y estar amparadas por la norma IEEE 802.3";
 choices[5][3] = "Todas las respuestas anteriores son ciertas";
 answers[5] = 1;
 units[5] = ['112'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4965. ";
 preguntaids[5] = 4965


//  Id pregunta: 4975 Año de creación de pregunta: 2002
 questions[6]= "7)  Los agentes SNMP son:";
 choices[6]= new Array();
 choices[6][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n";
 choices[6][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[6][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[6][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[6] = 0;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4975. ";
 preguntaids[6] = 4975


//  Id pregunta: 4917 Año de creación de pregunta: 2002
 questions[7]= "8)  La separaci&oacute;n entre diferentes canales de radio en UMTS se hace mediante:";
 choices[7]= new Array();
 choices[7][0] = "Diferentes frecuencias";
 choices[7][1] = "Distintos intervalos temporales";
 choices[7][2] = "Diferentes c&oacute;digos";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = 2;
 units[7] = ['117'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4917. ";
 preguntaids[7] = 4917


//  Id pregunta: 4976 Año de creación de pregunta: 2002
 questions[8]= "9)  Los circuitos de la red telef&oacute;nica conmutada anal&oacute;gica, vistos desde el interfaz LT - ETCD...:";
 choices[8]= new Array();
 choices[8][0] = "No est&aacute;n limitados en banda porque no hay multiplexaci&oacute;n de se&ntilde;ales";
 choices[8][1] = "Est&aacute;n limitados a una banda entre 300 Hz y 3.400 Hz";
 choices[8][2] = "Est&aacute;n limitados a 64 kbps";
 choices[8][3] = "Est&aacute;n limitados a 144 kbps";
 answers[8] = 1;
 units[8] = ['114'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4976. ";
 preguntaids[8] = 4976


//  Id pregunta: 4902 Año de creación de pregunta: 2002
 questions[9]= "10)  La normativa para sistemas de cableado de edificios es:";
 choices[9]= new Array();
 choices[9][0] = "EIA/TIA 568";
 choices[9][1] = "ISO/IEC DIS 11801";
 choices[9][2] = "EPHOS 2";
 choices[9][3] = "&quot;a&quot; y &quot;b&quot;";
 answers[9] = 3;
 units[9] = ['104'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4902. ";
 preguntaids[9] = 4902


//  Id pregunta: 4911 Año de creación de pregunta: 2002
 questions[10]= "11)  La recomendaci&oacute;n RFC-1006 define:";
 choices[10]= new Array();
 choices[10][0] = "Funciones de un protocolo de red";
 choices[10][1] = "El protocolo de transporte TCP";
 choices[10][2] = "El protocolo de transporte UDP";
 choices[10][3] = "Protocolo de convergencia de TCP a TP0";
 answers[10] = 3;
 units[10] = ['105'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4911. ";
 preguntaids[10] = 4911


//  Id pregunta: 4971 Año de creación de pregunta: 2002
 questions[11]= "12)  Las tramas son las unidades del nivel de enlace mientras que los paquetes pertenecen al nivel de:";
 choices[11]= new Array();
 choices[11][0] = "Nivel o estrato f&iacute;sico";
 choices[11][1] = "Nivel o estrato de red";
 choices[11][2] = "Nivel o estrato de sesi&oacute;n";
 choices[11][3] = "Nivel o estrato de transporte";
 answers[11] = 1;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4971. ";
 preguntaids[11] = 4971


//  Id pregunta: 4949 Año de creación de pregunta: 2002
 questions[12]= "13)  Una palabra muy usada cuando hablamos de velocidades de transmisi&oacute;n es 'baudio' que se define como:";
 choices[12]= new Array();
 choices[12][0] = "La velocidad de cambios de se&ntilde;alizaci&oacute;n por segundo en un canal";
 choices[12][1] = "N&uacute;mero de bits por segundo transmitidos por un canal";
 choices[12][2] = "Cambios de frecuencia por segundo en la se&ntilde;al por un canal";
 choices[12][3] = "Todas las respuestas anteriores son ciertas";
 answers[12] = 0;
 units[12] = ['104'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4949. ";
 preguntaids[12] = 4949


//  Id pregunta: 4948 Año de creación de pregunta: 2002
 questions[13]= "14)  Una empresa dispone de dos edificios de oficinas a ambos lados de una calle. Para conectarlos han decidido estudiar las alternativas disponibles. Indique la opci&oacute;n que sea mejor tanto t&eacute;cnica como econ&oacute;micamente:";
 choices[13]= new Array();
 choices[13][0] = "utilizaci&oacute;n de un enlace infrarrojos";
 choices[13][1] = "Utilizaci&oacute;n de una l&iacute;nea punto a punto arrendada a una empresa con concesi&oacute;n para ofrecer servicios portadores";
 choices[13][2] = "Contrataci&oacute;n de un servicio VSAT";
 choices[13][3] = "Solicitar del Ayuntamiento permiso de obra para la conexi&oacute;n permanente de una l&iacute;nea privada que atraviese la calle";
 answers[13] = 1;
 units[13] = ['102'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4948. ";
 preguntaids[13] = 4948


//  Id pregunta: 4967 Año de creación de pregunta: 2002
 questions[14]= "15)  Las fibras &oacute;pticas:";
 choices[14]= new Array();
 choices[14][0] = "Presentan mayor atenuaci&oacute;n que los pares coaxiales";
 choices[14][1] = "Se necesitan efectuar conversiones O/E y O/E en los terminales emisor y receptor, respectivamente";
 choices[14][2] = "La distorsi&oacute;n multimodo se produce, sobre todo, en las de &iacute;ndice gradual";
 choices[14][3] = "Son inmunes a las interferencias electromagn&eacute;ticas";
 answers[14] = 3;
 units[14] = ['106'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4967. ";
 preguntaids[14] = 4967


//  Id pregunta: 4969 Año de creación de pregunta: 2002
 questions[15]= "16)  Las Infrestructuras Comunes de Telecomunicaciones (ICT) para el acceso a los servicios de telecomunicaciones en el interior de edificios se regulan mediante:";
 choices[15]= new Array();
 choices[15][0] = "Real Decreto 346/2011 del 11 de marzo.";
 choices[15][1] = "Real Decreto 401/2003 del 4 de abril";
 choices[15][2] = "Ordenanzas municipales";
 choices[15][3] = "Reglamentos de las comunidades aut&oacute;nomas";
 answers[15] = 0;
 units[15] = ['121'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4969. ";
 preguntaids[15] = 4969


//  Id pregunta: 4935 Año de creación de pregunta: 2002
 questions[16]= "17)  Un LED es:";
 choices[16]= new Array();
 choices[16][0] = "Un diodo emisor de luz, usado para generar luz a partir de energ&iacute;a el&eacute;ctrica, a menudo a modo de peque&ntilde;os pilotos de aviso";
 choices[16][1] = "Un tipo de vocoder que permite una generaci&oacute;n progresiva de la voz humana";
 choices[16][2] = "Un m&eacute;todo de gesti&oacute;n de proyectos espec&iacute;ficos de I+D con todas las particularidades que estos conllevan";
 choices[16][3] = "Nada de lo anterior";
 answers[16] = 0;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4935. ";
 preguntaids[16] = 4935


//  Id pregunta: 4956 Año de creación de pregunta: 2002
 questions[17]= "18)  La velocidad de transmisi&oacute;n que se puede alcanzar con tecnolog&iacute;a Bluetooth versi&oacute;n 5 es de:";
 choices[17]= new Array();
 choices[17][0] = "25 Mbit/s";
 choices[17][1] = "50 Mbit/s";
 choices[17][2] = "12 Mbit/s";
 choices[17][3] = "6 Mbit/s";
 answers[17] = 1;
 units[17] = ['108'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4956. ";
 preguntaids[17] = 4956


//  Id pregunta: 4951 Año de creación de pregunta: 2002
 questions[18]= "19)  Una red de conmutaci&oacute;n de paquetes trabaja en modo datagrama cuando:";
 choices[18]= new Array();
 choices[18][0] = "La transmisi&oacute;n de paquetes no es orientada a la conexi&oacute;n";
 choices[18][1] = "Se establecen circuitos virtuales entre origen y destino";
 choices[18][2] = "Se establecen circuitos f&iacute;sicos entre origen y destino";
 choices[18][3] = "Los mensajes se dividen en paquetes de longitud fija para su env&iacute;o";
 answers[18] = 0;
 units[18] = ['112'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4951. ";
 preguntaids[18] = 4951


//  Id pregunta: 4961 Año de creación de pregunta: 2002
 questions[19]= "20)  Las direcciones anycast en IPv6 se caracterizan por:";
 choices[19]= new Array();
 choices[19][0] = "identificar a una &uacute;nica interfaz";
 choices[19][1] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a una de ellas, eligi&eacute;ndose la mejor desde el punto de vista de la topoog&iacute;a de red";
 choices[19][2] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a todas las interfaces";
 choices[19][3] = "ninguna de las anteriores respuestas es correcta";
 answers[19] = 1;
 units[19] = ['105'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4961. ";
 preguntaids[19] = 4961


//  Id pregunta: 4938 Año de creación de pregunta: 2002
 questions[20]= "21)  Un router IP puede intercambiar tr&aacute;fico IP:";
 choices[20]= new Array();
 choices[20][0] = "Entre un interfaz Ethernet y un interfaz STM-1";
 choices[20][1] = "S&oacute;lo entre interfaces de un mismo nivel";
 choices[20][2] = "Nunca si existen m&aacute;quinas UNIX y Windows en cada una de las redes que conecta";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 0;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4938. ";
 preguntaids[20] = 4938


//  Id pregunta: 4913 Año de creación de pregunta: 2002
 questions[21]= "22)  La red digital de servicios integrados (RDSI):";
 choices[21]= new Array();
 choices[21][0] = "Procede de la evoluci&oacute;n de la red telef&oacute;nica conmutada";
 choices[21][1] = "El acceso b&aacute;sico disponen de dos canales B (64 Kbit/s) que emplean conmutaci&oacute;n de paquetes";
 choices[21][2] = "El acceso desde el terminal de abonado se realiza mediante fibra &oacute;ptica";
 choices[21][3] = "El acceso b&aacute;sico no se puede utilizar para conexi&oacute;n de centralitas digitales PABX's";
 answers[21] = 0;
 units[21] = ['114'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4913. ";
 preguntaids[21] = 4913


//  Id pregunta: 4939 Año de creación de pregunta: 2002
 questions[22]= "23)  Un servidor &quot;proxy&quot;:";
 choices[22]= new Array();
 choices[22][0] = "Sirve para traducir direcciones IP";
 choices[22][1] = "Act&uacute;a de intermediario, para acceder a determinados servicios de forma indirecta";
 choices[22][2] = "Permite acceder a cualquier servicio de internet, actuando de intermediario";
 choices[22][3] = "Sirve para realizar pagos on-line";
 answers[22] = 1;
 units[22] = ['119'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4939. ";
 preguntaids[22] = 4939


//  Id pregunta: 4903 Año de creación de pregunta: 2002
 questions[23]= "24)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[23]= new Array();
 choices[23][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[23][1] = "Al nivel 1 : F&iacute;sico";
 choices[23][2] = "Al nivel 3 : Red";
 choices[23][3] = "Al nivel 5 : Enlace";
 answers[23] = 1;
 units[23] = ['102', '114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4903. ";
 preguntaids[23] = 4903


//  Id pregunta: 4906 Año de creación de pregunta: 2002
 questions[24]= "25)  La pen&iacute;nsula ib&eacute;rica est&aacute; telem&aacute;ticamente unida a las islas Canarias:";
 choices[24]= new Array();
 choices[24][0] = "&uacute;nicamente mediante enlace por sat&eacute;lite";
 choices[24][1] = "&uacute;nicamente mediante enlace por cable submarino";
 choices[24][2] = "mediante cable submarino como enlace principal y por sat&eacute;lite como enlace de reserva";
 choices[24][3] = "mediante enlace por sat&eacute;lite como enlace principal y por cable submarino como enlace de reserva";
 answers[24] = 2;
 units[24] = ['115'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4906. ";
 preguntaids[24] = 4906


//  Id pregunta: 4924 Año de creación de pregunta: 2002
 questions[25]= "26)  La tecnolog&iacute;a de red de &aacute;rea local Switched Ethernet:";
 choices[25]= new Array();
 choices[25][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[25][1] = "Se basa en el concepto de Microsegmentaci&oacute;n (se reduce el dominio de colisi&oacute;n de tal forma que solo dos nodos coexisten en cada dominio de colisi&oacute;n)";
 choices[25][2] = "Las dos anteriores son falsas";
 choices[25][3] = "Las dos anteriores son correctas";
 answers[25] = 1;
 units[25] = ['102'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4924. ";
 preguntaids[25] = 4924


//  Id pregunta: 4919 Año de creación de pregunta: 2002
 questions[26]= "27)  La t&eacute;cnica de acceso al medio utilizada en redes Ethernet se denomina:";
 choices[26]= new Array();
 choices[26][0] = "CSMA";
 choices[26][1] = "CSMA/CD";
 choices[26][2] = "CSMA/CA";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 1;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4919. ";
 preguntaids[26] = 4919


//  Id pregunta: 4926 Año de creación de pregunta: 2002
 questions[27]= "28)  La tecnolog&iacute;a que pretende extender la banda ancha a los hogares usando fibra se denomina:";
 choices[27]= new Array();
 choices[27][0] = "Home Fiber";
 choices[27][1] = "City fiber";
 choices[27][2] = "Instant Fiber";
 choices[27][3] = "Fiber To The Home";
 answers[27] = 3;
 units[27] = ['112'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4926. ";
 preguntaids[27] = 4926


//  Id pregunta: 4945 Año de creación de pregunta: 2002
 questions[28]= "29)  Una de las siguientes afirmaciones es falsa con respecto a ADSL:";
 choices[28]= new Array();
 choices[28][0] = "El caudal de informaci&oacute;n es mayor en sentido red-usuario que en el sentido contrario";
 choices[28][1] = "La tarificaci&oacute;n no depende del uso sino del ancho de banda contratado";
 choices[28][2] = "Permite navegar por Internet y mantener una conversaci&oacute;n telef&oacute;nica simult&aacute;neamente";
 choices[28][3] = "Hay que hacer un nuevo tendido de cobre entre la central y el domicilio del abonado para poder instalarlo";
 answers[28] = 3;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4945. ";
 preguntaids[28] = 4945


//  Id pregunta: 4962 Año de creación de pregunta: 2002
 questions[29]= "30)  Las direcciones de tipo B en IPv4:";
 choices[29]= new Array();
 choices[29][0] = "Comienzan por '110'";
 choices[29][1] = "incluyen entre ellas a la direcci&oacute;n 193.168.25.73";
 choices[29][2] = "destina 16 bits para los sistemas";
 choices[29][3] = "es utilizada para direcciones multicast";
 answers[29] = 2;
 units[29] = ['105'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4962. ";
 preguntaids[29] = 4962


//  Id pregunta: 4908 Año de creación de pregunta: 2002
 questions[30]= "31)  La primera empresa que propuso el uso de t&eacute;cnicas CDMA fue:";
 choices[30]= new Array();
 choices[30][0] = "AT&amp;T";
 choices[30][1] = "Qualcomm";
 choices[30][2] = "Motorola";
 choices[30][3] = "RCA";
 answers[30] = 1;
 units[30] = ['117'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4908. ";
 preguntaids[30] = 4908


//  Id pregunta: 4952 Año de creación de pregunta: 2002
 questions[31]= "32)  Una red MAN es capaz de conectar estaciones de voz y datos en entornos metropolitanos, lo que suele entenderse por un di&aacute;metro de red de varias decenas de kil&oacute;metros. Entre estas se encuentra la denominada DQDB. Indique la opci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.6";
 choices[31][1] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.9";
 choices[31][2] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.6";
 choices[31][3] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.9";
 answers[31] = 2;
 units[31] = ['112'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4952. ";
 preguntaids[31] = 4952


//  Id pregunta: 4963 Año de creación de pregunta: 2002
 questions[32]= "33)  Las direcciones en IPv6 se clasifican en:";
 choices[32]= new Array();
 choices[32][0] = "unicast, multicast y broadcast";
 choices[32][1] = "unicast, anycast y broadcast";
 choices[32][2] = "unicast, anycast y multicast";
 choices[32][3] = "unicast y multicast";
 answers[32] = 2;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4963. ";
 preguntaids[32] = 4963


//  Id pregunta: 4929 Año de creación de pregunta: 2002
 questions[33]= "34)  Un acceso RDSI primario consta de:";
 choices[33]= new Array();
 choices[33][0] = "2 canales B y un canal D";
 choices[33][1] = "2 canales B y ning&uacute;n canal D";
 choices[33][2] = "30 canales B y 1 canal D";
 choices[33][3] = "30 canales B y 2 canales D";
 answers[33] = 2;
 units[33] = ['114'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4929. ";
 preguntaids[33] = 4929


//  Id pregunta: 4943 Año de creación de pregunta: 2002
 questions[34]= "35)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[34]= new Array();
 choices[34][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[34][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[34][2] = "Enlace - Conector V.24, Conector V.35";
 choices[34][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[34] = 2;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4943. ";
 preguntaids[34] = 4943


//  Id pregunta: 4977 Año de creación de pregunta: 2002
 questions[35]= "36)  Los conceptos de &quot;piconet&quot; y &quot;scatternet&quot; forman parte de la arquitectura de red utilizada con tecnolog&iacute;a:";
 choices[35]= new Array();
 choices[35][0] = "IrDA";
 choices[35][1] = "DECT";
 choices[35][2] = "Bluetooth";
 choices[35][3] = "WLAN";
 answers[35] = 2;
 units[35] = ['108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4977. ";
 preguntaids[35] = 4977


//  Id pregunta: 4910 Año de creación de pregunta: 2002
 questions[36]= "37)  La RDSI (o ISDN):";
 choices[36]= new Array();
 choices[36][0] = "Implementa todas las capas del modelo OSI";
 choices[36][1] = "Implementa los protocolos TCP/IP";
 choices[36][2] = "Tiene un ancho de banda suficiente para la transmisi&oacute;n de v&iacute;deo sin comprimir";
 choices[36][3] = "Tiene un ancho de banda inferior al t&iacute;pico de las redes locales";
 answers[36] = 3;
 units[36] = ['114'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4910. ";
 preguntaids[36] = 4910


//  Id pregunta: 4900 Año de creación de pregunta: 2002
 questions[37]= "38)  La norma X400 de la ITU-T se refiere a:";
 choices[37]= new Array();
 choices[37][0] = "Servicios de directorio";
 choices[37][1] = "Correo electr&oacute;nico";
 choices[37][2] = "Interfaz RS-232";
 choices[37][3] = "Interfaz de comunicaci&oacute;n de paquetes";
 answers[37] = 1;
 units[37] = ['116'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4900. ";
 preguntaids[37] = 4900


//  Id pregunta: 4974 Año de creación de pregunta: 2002
 questions[38]= "39)  LMDS es:";
 choices[38]= new Array();
 choices[38][0] = "una tecnolog&iacute;a de banda ancha para un bucle de abonado sin cable";
 choices[38][1] = "una tecnolog&iacute;a de banda estrecha para un bucle de abonado sin cable";
 choices[38][2] = "una tecnolog&iacute;a de realizaci&oacute;n de circuitos monol&iacute;ticos de microondas en banda S";
 choices[38][3] = "un est&aacute;ndar para la programaci&oacute;n de interfaces de dispositivos multimedia";
 answers[38] = 0;
 units[38] = ['117'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4974. ";
 preguntaids[38] = 4974


//  Id pregunta: 4972 Año de creación de pregunta: 2002
 questions[39]= "40)  Las unidades de informaci&oacute;n entre redes contienen una o m&aacute;s cabeceras que se usan para:";
 choices[39]= new Array();
 choices[39][0] = "Transportar datos a la aplicaci&oacute;n software receptora";
 choices[39][1] = "Evitar que los datos transmitidos por una estaci&oacute;n interfieran con los de otra";
 choices[39][2] = "Asegurar un acceso ordenado al medio f&iacute;sico";
 choices[39][3] = "Pasar informaci&oacute;n de control a los niveles OSI (o equivalentes) en el sistema de destino";
 answers[39] = 3;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4972. ";
 preguntaids[39] = 4972


//  Id pregunta: 4966 Año de creación de pregunta: 2002
 questions[40]= "41)  Las estaciones de una red Token Ring transmiten utilizando la t&eacute;cnica de:";
 choices[40]= new Array();
 choices[40][0] = "Detecci&oacute;n de transmisiones";
 choices[40][1] = "Detecci&oacute;n de colisiones";
 choices[40][2] = "Paso de testigo";
 choices[40][3] = "Reintentos aleatorios";
 answers[40] = 2;
 units[40] = ['112'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4966. ";
 preguntaids[40] = 4966


//  Id pregunta: 4950 Año de creación de pregunta: 2002
 questions[41]= "42)  Una red de conmutaci&oacute;n de paquetes en la que cada paquete viaja por una ruta diferente se dice que opera en modo:";
 choices[41]= new Array();
 choices[41][0] = "Circuito virtual permanente";
 choices[41][1] = "Circuito virtual conmutado";
 choices[41][2] = "Datagrama";
 choices[41][3] = "Multiplexaci&oacute;n estad&iacute;stica";
 answers[41] = 2;
 units[41] = ['112'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4950. ";
 preguntaids[41] = 4950


//  Id pregunta: 4922 Año de creación de pregunta: 2002
 questions[42]= "43)  La tecnolog&iacute;a de red de &aacute;rea local 10Base-T:";
 choices[42]= new Array();
 choices[42][0] = "Requiere cableado coaxial delgado";
 choices[42][1] = "Requiere cableado de pares trenzados de categor&iacute;a 5 como m&iacute;nimo";
 choices[42][2] = "Cumple el est&aacute;ndar IEEE 802.3";
 choices[42][3] = "Son ciertas las respuestas 'b' y 'c'";
 answers[42] = 2;
 units[42] = ['112'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4922. ";
 preguntaids[42] = 4922


//  Id pregunta: 4918 Año de creación de pregunta: 2002
 questions[43]= "44)  La sintaxis de transferencia en ASN.1:";
 choices[43]= new Array();
 choices[43][0] = "Est&aacute; definida dentro del nivel 5 del modelo OSI de ISO";
 choices[43][1] = "Es una sintaxis totalmente conceptual";
 choices[43][2] = "Fue reemplazada por las sintaxis abstractas";
 choices[43][3] = "Ninguna de las anteriores es verdadera";
 answers[43] = 3;
 units[43] = ['105'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4918. ";
 preguntaids[43] = 4918


//  Id pregunta: 4927 Año de creación de pregunta: 2002
 questions[44]= "45)  La topolog&iacute;a m&aacute;s com&uacute;n de dise&ntilde;o de redes SDH es:";
 choices[44]= new Array();
 choices[44][0] = "malla completa o parcial";
 choices[44][1] = "anillo";
 choices[44][2] = "estrella";
 choices[44][3] = "&aacute;rbol";
 answers[44] = 1;
 units[44] = ['112'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4927. ";
 preguntaids[44] = 4927


//  Id pregunta: 4921 Año de creación de pregunta: 2002
 questions[45]= "46)  La tecnolog&iacute;a de red de &aacute;rea local 100VG-AnyLAN:";
 choices[45]= new Array();
 choices[45][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[45][1] = "Utiliza el protocolo de acceso al medio por demanda de prioridad IEEE 802.12";
 choices[45][2] = "Requiere 8 pares trenzados de categor&iacute;a 3";
 choices[45][3] = "Todas las afirmaciones anteriores son falsas";
 answers[45] = 1;
 units[45] = ['112'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4921. ";
 preguntaids[45] = 4921


//  Id pregunta: 4916 Año de creación de pregunta: 2002
 questions[46]= "47)  La RFC que contiene las especificaciones del protocolo IPv6 es:";
 choices[46]= new Array();
 choices[46][0] = "1945";
 choices[46][1] = "1884";
 choices[46][2] = "2460";
 choices[46][3] = "2584";
 answers[46] = 2;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4916. ";
 preguntaids[46] = 4916


//  Id pregunta: 4904 Año de creación de pregunta: 2002
 questions[47]= "48)  La operaci&oacute;n de gateways se entronca en:";
 choices[47]= new Array();
 choices[47][0] = "El nivel de enlace";
 choices[47][1] = "El nivel de aplicaci&oacute;n";
 choices[47][2] = "Interconexi&oacute;n de sistemas homogeneos";
 choices[47][3] = "Encaminadores y puentes";
 answers[47] = 1;
 units[47] = ['102'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4904. ";
 preguntaids[47] = 4904


//  Id pregunta: 4915 Año de creación de pregunta: 2002
 questions[48]= "49)  La reserva de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico implica que:";
 choices[48]= new Array();
 choices[48][0] = "No es onerosa para el sujeto obligado";
 choices[48][1] = "Est&aacute; fijada en el Ley General de Presupuestos";
 choices[48][2] = "Seguir&aacute; las leyes de mercado y estimacion de su rentabilidad";
 choices[48][3] = "Las Administraciones P&uacute;blicas no estan exentas de su pago";
 answers[48] = 2;
 units[48] = ['121'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4915. ";
 preguntaids[48] = 4915


//  Id pregunta: 4973 Año de creación de pregunta: 2002
 questions[49]= "50)  Las velocidades de transmisi&oacute;n y de modulaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Son siempre iguales";
 choices[49][1] = "La de transmisi&oacute;n s&oacute;lo puede ser mayor o igual a la de modulaci&oacute;n";
 choices[49][2] = "La de modulaci&oacute;n s&oacute;lo puede ser mayor o igual que la de transmisi&oacute;n";
 choices[49][3] = "La velocidad de transmisi&oacute;n puede ser mayor, menor o igual que la de modulaci&oacute;n, seg&uacute;n el caso";
 answers[49] = 1;
 units[49] = ['106'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4973. ";
 preguntaids[49] = 4973


//  Id pregunta: 4942 Año de creación de pregunta: 2002
 questions[50]= "51)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[50]= new Array();
 choices[50][0] = "ET1";
 choices[50][1] = "ET2";
 choices[50][2] = "TR2";
 choices[50][3] = "AT";
 answers[50] = 2;
 units[50] = ['114'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4942. ";
 preguntaids[50] = 4942


//  Id pregunta: 4954 Año de creación de pregunta: 2002
 questions[51]= "52)  Uno de los protocolos m&aacute;s populares usados en las redes Ethernet (y 802.3) es el protocolo 'spanning tree' y es usado por los puentes:";
 choices[51]= new Array();
 choices[51][0] = "Puentes transparentes";
 choices[51][1] = "Puentes 'source routing'";
 choices[51][2] = "Puentes TCP/IP";
 choices[51][3] = "Ninguno de ellos";
 answers[51] = 0;
 units[51] = ['102'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4954. ";
 preguntaids[51] = 4954


//  Id pregunta: 4968 Año de creación de pregunta: 2002
 questions[52]= "53)  Las funciones del modelo OSI siguientes: criptograf&iacute;a, gesti&oacute;n de conversaciones, detecci&oacute;n de errores extremo a extremo, validaciones de tensiones el&eacute;ctricas, garantizar la conexi&oacute;n punto a punto; corresponden, por este orden, a los niveles OSI:";
 choices[52]= new Array();
 choices[52][0] = "Presentaci&oacute;n, aplicaci&oacute;n, transporte, f&iacute;sico, red";
 choices[52][1] = "Presentaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, enlace";
 choices[52][2] = "Aplicaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, red";
 choices[52][3] = "Aplicaci&oacute;n, sesi&oacute;n, red, enlace, transporte";
 answers[52] = 1;
 units[52] = ['105'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4968. ";
 preguntaids[52] = 4968


//  Id pregunta: 4901 Año de creación de pregunta: 2002
 questions[53]= "54)  La normas de la serie 802 del IEEE est&aacute;n establecidas por diversos grupos de trabajo a los que que est&aacute;n asignadas diferentes tareas. &iquest;A cu&aacute;l corresponde la 802.6?:";
 choices[53]= new Array();
 choices[53][0] = "Control l&oacute;gico del enlace";
 choices[53][1] = "Normativa de conectividad entre equipos a nivel f&iacute;sico";
 choices[53][2] = "M&eacute;todo de paso de testigo en bus";
 choices[53][3] = "Redes de &aacute;rea metropolitana";
 answers[53] = 3;
 units[53] = ['112'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4901. ";
 preguntaids[53] = 4901


//  Id pregunta: 4960 Año de creación de pregunta: 2002
 questions[54]= "55)  Las caracter&iacute;sticas: Separaci&oacute;n de portadoras = 200 KHz, Ancho de banda = 75 MHz, Distancia duplex = 95 MHz, corresponden a un sistema:";
 choices[54]= new Array();
 choices[54][0] = "GSM 900";
 choices[54][1] = "GSM 1800";
 choices[54][2] = "PCS 1900";
 choices[54][3] = "UMTS";
 answers[54] = 1;
 units[54] = ['117'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4960. ";
 preguntaids[54] = 4960


//  Id pregunta: 4947 Año de creación de pregunta: 2002
 questions[55]= "56)  Una emisora de radiodifusi&oacute;n comercial es un ejemplo de sistemas de transmisi&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Simplex";
 choices[55][1] = "Semiduplex";
 choices[55][2] = "Duplex";
 choices[55][3] = "Half duplex";
 answers[55] = 0;
 units[55] = ['104'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4947. ";
 preguntaids[55] = 4947


//  Id pregunta: 4923 Año de creación de pregunta: 2002
 questions[56]= "57)  La tecnolog&iacute;a de red de &aacute;rea local PMD-FDDI:";
 choices[56]= new Array();
 choices[56][0] = "Trabaja a 125 Mhz";
 choices[56][1] = "Utiliza codificaci&oacute;n 4B/5B NRZI";
 choices[56][2] = "Transmite a 100 Mbps";
 choices[56][3] = "Todas las respuestas anteriores son correctas";
 answers[56] = 3;
 units[56] = ['112'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4923. ";
 preguntaids[56] = 4923


//  Id pregunta: 4946 Año de creación de pregunta: 2002
 questions[57]= "58)  Una de las siguientes caracter&iacute;sticas es falsa para la tecnolog&iacute;a GPS. Indicar cu&aacute;l:";
 choices[57]= new Array();
 choices[57][0] = "El sistema lo forma una constelaci&oacute;n de 32 sat&eacute;lites, que orbitan alrededor de la Tierra a 12600 millas, con 5 estaciones fijas de monitorizaci&oacute;n y seguimiento";
 choices[57][1] = "La posici&oacute;n se expresa en latitud y longitud gracias a la triangulaci&oacute;n producida por al menos 4 sat&eacute;lites trabajando simult&aacute;neamente";
 choices[57][2] = "Entre sus aplicaciones principales est&aacute; la gesti&oacute;n de flotas, la provisi&oacute;n de servicios de telefon&iacute;a m&oacute;vil basados en localizaci&oacute;n o las radios privadas y p&uacute;blicas de tipo trunking";
 choices[57][3] = "Es un sistema de origen estadounidense proveniente del campo militar, y la versi&oacute;n de la que puede disponer el gran p&uacute;blico no es tan precisa como la del campo militar";
 answers[57] = 0;
 units[57] = ['117'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4946. ";
 preguntaids[57] = 4946


//  Id pregunta: 4964 Año de creación de pregunta: 2002
 questions[58]= "59)  Las direcciones IPv6 tienen una longitud de:";
 choices[58]= new Array();
 choices[58][0] = "32 bits";
 choices[58][1] = "128 bits";
 choices[58][2] = "64 bits";
 choices[58][3] = "48 bits";
 answers[58] = 1;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4964. ";
 preguntaids[58] = 4964


//  Id pregunta: 4909 Año de creación de pregunta: 2002
 questions[59]= "60)  La prioridad de acceso en redes Token Ring:";
 choices[59]= new Array();
 choices[59][0] = "Usa los primeros 6 bits en el campo 'Priority' (prioridad) para controlar el acceso en red Token Ring";
 choices[59][1] = "Permite a los puentes de la red limitar tr&aacute;fico de broadcast sobre redes locales o remotas";
 choices[59][2] = "Es una funci&oacute;n del router (encaminador o canalizador) usada para control de acceso a ciertas puertas seg&uacute;n la prioridad de la direcci&oacute;n";
 choices[59][3] = "Permite que ciertas estaciones accedan a la red m&aacute;s frecuentemente que otras basadas en su prioridad";
 answers[59] = 3;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4909. ";
 preguntaids[59] = 4909


//  Id pregunta: 4959 Año de creación de pregunta: 2002
 questions[60]= "61)  Se&ntilde;ale la opcion mas adecuada: Las bandas de frecuencia utilizables en un cable coaxial se encuentran:";
 choices[60]= new Array();
 choices[60][0] = "Entre 60 KHz y 3 GHz";
 choices[60][1] = "Sobre los 100 MHz";
 choices[60][2] = "Entre 4 y 11 GHz";
 choices[60][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[60] = 0;
 units[60] = ['104'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4959. ";
 preguntaids[60] = 4959


//  Id pregunta: 4920 Año de creación de pregunta: 2002
 questions[61]= "62)  La t&eacute;cnica de utilizar 'ventanas de transmisi&oacute;n y recepci&oacute;n' en los protocolos se utiliza fundamentalmente porque:";
 choices[61]= new Array();
 choices[61][0] = "Evita la necesidad de enviar 'reconocimientos negativos' a aquellas tramas que han llegado incorrectamente";
 choices[61][1] = "Aumenta el tiempo de utilizaci&oacute;n efectiva del canal";
 choices[61][2] = "Aumenta la velocidad de sincronismo entre transmisor y receptor";
 choices[61][3] = "Impide el desbordamiento de la memoria del receptor";
 answers[61] = 1;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4920. ";
 preguntaids[61] = 4920


//  Id pregunta: 4936 Año de creación de pregunta: 2002
 questions[62]= "63)  Un protocolo, seg&uacute;n el modelo OSI:";
 choices[62]= new Array();
 choices[62][0] = "especifica reglas sint&aacute;cticas, sem&aacute;nticas y gram&aacute;ticas que determinan la comunicaci&oacute;n entre entidades del mismo nivel";
 choices[62][1] = "especifica reglas sint&aacute;cticas, sem&aacute;nticas y gram&aacute;ticas que determinan la comunicaci&oacute;n entre entidades de distinto nivel";
 choices[62][2] = "no especifica reglas de comportamiento, s&oacute;lo de sintaxis entre los mensajes intercambiados";
 choices[62][3] = "es especificado en un lenguaje de prop&oacute;sito general, por lo general dependiente de la m&aacute;quina en la que se ejecute dicho protocolo";
 answers[62] = 0;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4936. ";
 preguntaids[62] = 4936


//  Id pregunta: 4958 Año de creación de pregunta: 2002
 questions[63]= "64)  La versi&oacute;n europea de la tecnolog&iacute;a de sat&eacute;lites GPS americana se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Kepler";
 choices[63][1] = "Galileo";
 choices[63][2] = "Marconi";
 choices[63][3] = "Hawking";
 answers[63] = 1;
 units[63] = ['117'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4958. ";
 preguntaids[63] = 4958


//  Id pregunta: 4905 Año de creación de pregunta: 2002
 questions[64]= "65)  La orden por la que se aprueba el reglamento de desarrollo en lo relativo al uso de dominio p&uacute;blico radioel&eacute;ctrico es:";
 choices[64]= new Array();
 choices[64][0] = "Orden de 10 de marzo de 2000";
 choices[64][1] = "Orden de 10 de marzo de 2001";
 choices[64][2] = "Orden de 10 de marzo de 2002";
 choices[64][3] = "Orden de 9 de marzo de 2000. Derogada por el Real Decreto 863/2008";
 answers[64] = 3;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4905. ";
 preguntaids[64] = 4905


//  Id pregunta: 4925 Año de creación de pregunta: 2002
 questions[65]= "66)  La tecnolog&iacute;a PUSH permite:";
 choices[65]= new Array();
 choices[65][0] = "Proteger la informaci&oacute;n mediante cifrado de la misma";
 choices[65][1] = "Establecer una conexi&oacute;n con un ordenador remoto";
 choices[65][2] = "Encaminar los datagramas a su destino";
 choices[65][3] = "Envio de informacion del servidor al cliente, sin requerir petici&oacute;n expresa";
 answers[65] = 3;
 units[65] = ['113'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4925. ";
 preguntaids[65] = 4925


//  Id pregunta: 4907 Año de creación de pregunta: 2002
 questions[66]= "67)  En cuanto a la LGT, la prestaci&oacute;n de consentimiento expreso por parte del cliente o afectado  exige:";
 choices[66]= new Array();
 choices[66][0] = "Es valido el silencio por parte del destinatario";
 choices[66][1] = "La manifestaci&oacute;n de una voluntad libre, informada, espec&iacute;fica e inequ&iacute;voca (que no deje lugar a duda)";
 choices[66][2] = "Es v&aacute;lido el consentimiento oral";
 choices[66][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[66] = 1;
 units[66] = ['121'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4907. ";
 preguntaids[66] = 4907


//  Id pregunta: 4955 Año de creación de pregunta: 2002
 questions[67]= "68)  La utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico mediante redes de sat&eacute;lites:";
 choices[67]= new Array();
 choices[67][0] = "Se regula de acuerdo al derecho p&uacute;blico";
 choices[67][1] = "Se regula mediante derecho internacional";
 choices[67][2] = "Su gesti&oacute;n no puede darse en concesi&oacute;n";
 choices[67][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[67] = 1;
 units[67] = ['121'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4955. ";
 preguntaids[67] = 4955


//  Id pregunta: 4944 Año de creación de pregunta: 2002
 questions[68]= "69)  Una de las funciones de la Gesti&oacute;n de Red es la Funci&oacute;n de Contabilidad Indicar cu&aacute;l de las siguientes tareas no corresponde a esta funci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Evaluar el grado de utilizaci&oacute;n de la red";
 choices[68][1] = "Establecimiento de prioridades y fijaci&oacute;n de franjas de uso de la red";
 choices[68][2] = "Controlar el uso abusivo de determinados elementos";
 choices[68][3] = "Evaluar el rendimiento y calidad de servicio de la red";
 answers[68] = 3;
 units[68] = ['114'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4944. ";
 preguntaids[68] = 4944


//  Id pregunta: 4953 Año de creación de pregunta: 2002
 questions[69]= "70)  Una transmisi&oacute;n de datos que consiste en un &uacute;nico paquete de datos se env&iacute;a a un subconjunto espec&iacute;fico de los nodos de una red se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Broadcast";
 choices[69][1] = "Multicast";
 choices[69][2] = "Subnetcast";
 choices[69][3] = "Unicast";
 answers[69] = 1;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4953. ";
 preguntaids[69] = 4953


//  Id pregunta: 4933 Año de creación de pregunta: 2002
 questions[70]= "71)  Un conjunto de redes administradas por una entidad com&uacute;n y que comparten una estrategia com&uacute;n de encaminamiento se conoce en la terminolog&iacute;a ISO como:";
 choices[70]= new Array();
 choices[70][0] = "Una LAN (RAL)";
 choices[70][1] = "Un &aacute;rea";
 choices[70][2] = "Un sistema aut&oacute;nomo";
 choices[70][3] = "Un dominio";
 answers[70] = 2;
 units[70] = ['102'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4933. ";
 preguntaids[70] = 4933


//  Id pregunta: 4930 Año de creación de pregunta: 2002
 questions[71]= "72)  Un acceso RDSI:";
 choices[71]= new Array();
 choices[71][0] = "Precisa de una instalaci&oacute;n de cable espec&iacute;fica en casa del abonado";
 choices[71][1] = "Es un servicio que se proporciona sobre el par de hilos telef&oacute;nico";
 choices[71][2] = "Precisa tener contratados 2 canales de voz";
 choices[71][3] = "Ninguna de las anteriores de las respuestas anteriores es correcta";
 answers[71] = 1;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4930. ";
 preguntaids[71] = 4930


//  Id pregunta: 4970 Año de creación de pregunta: 2002
 questions[72]= "73)  Las siglas UTP corresponden a:";
 choices[72]= new Array();
 choices[72][0] = "Cable coaxial fino";
 choices[72][1] = "Cable coaxial grueso";
 choices[72][2] = "Fibra &oacute;ptica sin apantallar";
 choices[72][3] = "Par trenzado sin apantallar";
 answers[72] = 3;
 units[72] = ['104'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4970. ";
 preguntaids[72] = 4970


//  Id pregunta: 4912 Año de creación de pregunta: 2002
 questions[73]= "74)  La Red Digital de Servicios Integrados (RDSI), permite los siguientes accesos o servicios:";
 choices[73]= new Array();
 choices[73][0] = "Circuitos virtuales permanentes";
 choices[73][1] = "Accesos B&aacute;sico 2B+D";
 choices[73][2] = "Circuitos virtuales punto a punto";
 choices[73][3] = "Todas las respuestas anteriores son correctas";
 answers[73] = 1;
 units[73] = ['114'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4912. ";
 preguntaids[73] = 4912


//  Id pregunta: 4940 Año de creación de pregunta: 2002
 questions[74]= "75)  Un sistema IVR es aquel que:";
 choices[74]= new Array();
 choices[74][0] = "Proporciona posibilidad de video interactivo (Interactive Video Response)";
 choices[74][1] = "Proporciona respuesta de voz interactiva (Interactive Voice Response)";
 choices[74][2] = "Mejora la calidad de la image de video (Immediate Video Refresh)";
 choices[74][3] = "Recuenta los votos electr&oacute;nicos aplicando confidencialidad (Immediate Vote Recounting)";
 answers[74] = 1;
 units[74] = ['103'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4940. ";
 preguntaids[74] = 4940


