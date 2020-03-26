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
//  Id pregunta: 9435 Año de creación de pregunta: 2014
 questions[0]= "1)  Cu&aacute;l de los siguientes es un protocolo de encaminamiento externo:";
 choices[0]= new Array();
 choices[0][0] = "RIP";
 choices[0][1] = "OSPF";
 choices[0][2] = "BGP";
 choices[0][3] = "ISIS";
 answers[0] = 2;
 units[0] = ['112'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9435. ";
 preguntaids[0] = 9435


//  Id pregunta: 8826 Año de creación de pregunta: 2013
 questions[1]= "2)  Acerca de las recomendaciones relativas a X.25, se puede afirmar:";
 choices[1]= new Array();
 choices[1][0] = "X.21 define el interfaz entre ETD y ETCD para terminales que operan en modo paquete en redes p&uacute;blicas";
 choices[1][1] = "X.25 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 choices[1][2] = "X.75 define el Interfaz entre ETD y ETCD para un equipo de datos arr&iacute;tmico con acceso a la facilidad de empaquetado/desempaquetado de datos (PAD), en una red X.25";
 choices[1][3] = "X.75 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 answers[1] = 3;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8826. ";
 preguntaids[1] = 8826


//  Id pregunta: 8817 Año de creación de pregunta: 2013
 questions[2]= "3)  En una red metropolitana Ethernet basada en MPLS";
 choices[2]= new Array();
 choices[2][0] = "En la red del operador se transportan tramas de Ethernet sobre MPLS";
 choices[2][1] = "Las tramas de Ethernet se transportan sobre MPLS y en la red del operador se vuelve a utilizar Ethernet como tecnolog&iacute;a para el transporte de MPLS.";
 choices[2][2] = "En la salida de las diferentes redes de &aacute;rea local que componen la red metropolitana, se a&ntilde;ade una cabecera IP sobre la que se aplican las etiquetas MPLS.";
 choices[2][3] = "Ninguna de las respuestas es correcta.";
 answers[2] = 1;
 units[2] = ['112'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8817. ";
 preguntaids[2] = 8817


//  Id pregunta: 8819 Año de creación de pregunta: 2013
 questions[3]= "4)  En un circuito virtual:";
 choices[3]= new Array();
 choices[3][0] = "El Equipo de Terminaci&oacute;n del Circuito de Datos (ETCD) es un nodo frontera de red, a trav&eacute;s del cual los datos del usuario atraviesan la misma hasta llegar al ETCD remoto.";
 choices[3][1] = "La Central de Conmutaci&oacute;n de Paquetes es la encargada del paso de paquetes al siguiente nodo dentro del circuito virtual establecido.";
 choices[3][2] = "Un Circuito de Datos es la conexi&oacute;n virtual establecida entre los dos ETCD (Equipos de Terminaci&oacute;n del Circuito de Datos) involucrados en una transmisi&oacute;n.";
 choices[3][3] = "Todas son correctas.";
 answers[3] = 3;
 units[3] = ['112'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8819. ";
 preguntaids[3] = 8819


//  Id pregunta: 9422 Año de creación de pregunta: 2014
 questions[4]= "5)  Las siglas CSMA/CD significan:";
 choices[4]= new Array();
 choices[4][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[4][1] = "Carrier Sense Multiple Access with Common Data";
 choices[4][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[4][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[4] = 0;
 units[4] = ['112'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9422. ";
 preguntaids[4] = 9422


//  Id pregunta: 9431 Año de creación de pregunta: 2014
 questions[5]= "6)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[5]= new Array();
 choices[5][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[5][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[5][2] = "Cuando ha recibido toda la trama";
 choices[5][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[5] = 0;
 units[5] = ['112'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9431. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";
 preguntaids[5] = 9431


//  Id pregunta: 10078 Año de creación de pregunta: 2015
 questions[6]= "7)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[6]= new Array();
 choices[6][0] = "IEEE 802.3ab";
 choices[6][1] = "IEEE 802.3at";
 choices[6][2] = "IEEE 802.3ap";
 choices[6][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[6] = 1;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10078. Examen TIC A2 2014";
 preguntaids[6] = 10078


//  Id pregunta: 8818 Año de creación de pregunta: 2013
 questions[7]= "8)  E-Line:";
 choices[7]= new Array();
 choices[7][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[7][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[7][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[7][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[7] = 2;
 units[7] = ['112'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8818. ";
 preguntaids[7] = 8818


//  Id pregunta: 10371 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes Grupos de Trabajo del Comit&eacute; de Estandarizaci&oacute;n 802 permanece Activo?";
 choices[8]= new Array();
 choices[8][0] = "802.3 CSMA/CD Ethernet";
 choices[8][1] = "802.14 Redes CATV";
 choices[8][2] = "802.10 Seguridad en Est&aacute;ndares IEEE";
 choices[8][3] = "802.4 Token Bus";
 answers[8] = 0;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10371. ";
 preguntaids[8] = 10371


//  Id pregunta: 9600 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[9]= new Array();
 choices[9][0] = "4 bytes.";
 choices[9][1] = "6 bytes.";
 choices[9][2] = "12 bytes.";
 choices[9][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[9] = 0;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9600. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[9] = 9600


//  Id pregunta: 9425 Año de creación de pregunta: 2014
 questions[10]= "11)  El tama&ntilde;o de trama m&iacute;nimo en Ethernet es:";
 choices[10]= new Array();
 choices[10][0] = "48 bytes";
 choices[10][1] = "24 bytes";
 choices[10][2] = "128 bytes";
 choices[10][3] = "64 bytes";
 answers[10] = 3;
 units[10] = ['112'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9425. ";
 preguntaids[10] = 9425


//  Id pregunta: 9603 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[11]= new Array();
 choices[11][0] = "255,255,255,255";
 choices[11][1] = "FF::FF";
 choices[11][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[11][3] = "FF:FF:FF:FF:FF:FF";
 answers[11] = 3;
 units[11] = ['112'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9603. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[11] = 9603


//  Id pregunta: 10372 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Qu&eacute; tipo de tr&aacute;fico proporciona el nivel de servicio A del est&aacute;ndar 802.17 Resilient Packet Ring?";
 choices[12]= new Array();
 choices[12][0] = "Tr&aacute;fico con requisitos latencia y jitter predecible";
 choices[12][1] = "Tr&aacute;fico con requisitos de baja latencia y bajo jitter";
 choices[12][2] = "Tr&aacute;fico con requisitos de baja latencia y alto jitter";
 choices[12][3] = "Tr&aacute;fico de servicios Best Effort";
 answers[12] = 1;
 units[12] = ['112'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10372. ";
 preguntaids[12] = 10372


//  Id pregunta: 9424 Año de creación de pregunta: 2014
 questions[13]= "14)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[13]= new Array();
 choices[13][0] = "IEEE 802.1D";
 choices[13][1] = "IEEE 802.1P";
 choices[13][2] = "IEEE 802.1Q";
 choices[13][3] = "IEEE 802.2";
 answers[13] = 2;
 units[13] = ['112'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9424. ";
 preguntaids[13] = 9424


//  Id pregunta: 8820 Año de creación de pregunta: 2013
 questions[14]= "15)  El protocolo de nivel 2 utilizado en una l&iacute;nea punto a punto con Jerarqu&iacute;a Digital S&iacute;ncrona es:";
 choices[14]= new Array();
 choices[14][0] = "PPP";
 choices[14][1] = "LAPB";
 choices[14][2] = "L2TP";
 choices[14][3] = "L2F";
 answers[14] = 0;
 units[14] = ['112'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8820. ";
 preguntaids[14] = 8820


//  Id pregunta: 8847 Año de creación de pregunta: 2013
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes redes WAN esta orientada a conexi&oacute;n?";
 choices[15]= new Array();
 choices[15][0] = "Una red IP";
 choices[15][1] = "Una red ATM.";
 choices[15][2] = "Una red UMTS.";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = 1;
 units[15] = ['112'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8847. Examen TIC AGE A2 2011 Promoci&oacute;n Interna";
 preguntaids[15] = 8847


//  Id pregunta: 9421 Año de creación de pregunta: 2014
 questions[16]= "17)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[16]= new Array();
 choices[16][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[16][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[16][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[16][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[16] = 2;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9421. ";
 preguntaids[16] = 9421


//  Id pregunta: 9877 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Qu&eacute; tipo de m&eacute;todo de acceso al medio es aquel en el que todos los nodos compiten por el uso del medio?";
 choices[17]= new Array();
 choices[17][0] = "Por contienda.";
 choices[17][1] = "Por contenci&oacute;n.";
 choices[17][2] = "Por paso de testigo.";
 choices[17][3] = "Por detecci&oacute;n de portadora.";
 answers[17] = 1;
 units[17] = ['112'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9877. ";
 preguntaids[17] = 9877


//  Id pregunta: 10759 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;De qu&eacute; tama&ntilde;o es el campo de comprobaci&oacute;n de erorres en la tecnolog&iacute;a Ethernet?";
 choices[18]= new Array();
 choices[18][0] = "16";
 choices[18][1] = "32";
 choices[18][2] = "64";
 choices[18][3] = "48";
 answers[18] = 1;
 units[18] = ['112'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10759. ";
 preguntaids[18] = 10759


//  Id pregunta: 9581 Año de creación de pregunta: 2014
 questions[19]= "20)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha por contienda?";
 choices[19]= new Array();
 choices[19][0] = "Paso de testigo en anillo.";
 choices[19][1] = "CSMA no persistente.";
 choices[19][2] = "ALOHA ranurado.";
 choices[19][3] = "Contenci&oacute;n.";
 answers[19] = 1;
 units[19] = ['112'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9581. TIC A2 2013 libre";
 preguntaids[19] = 9581


//  Id pregunta: 9430 Año de creación de pregunta: 2014
 questions[20]= "21)  Seleccionar la correcta:";
 choices[20]= new Array();
 choices[20][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[20][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[20][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[20][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[20] = 2;
 units[20] = ['112'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9430. ";
 preguntaids[20] = 9430


//  Id pregunta: 10170 Año de creación de pregunta: 2015
 questions[21]= "22)  Al configurar una red Ethernet, es correcto que:";
 choices[21]= new Array();
 choices[21][0] = "El administrador de red debe hacer un listado de todas las direcciones MAC que se conectar&aacute;n.";
 choices[21][1] = "El administrador de red debe configurar en cada equipo la direcci&oacute;n MAC de la pasarela por defecto.";
 choices[21][2] = "El administrador de red debe instalar en todos los equipos la compatibilidad con 802.3 (Ethernet) y 802.4 (Gigabit Ethernet).";
 choices[21][3] = "El administrador de red debe establecer los segmentos de la red.";
 answers[21] = 3;
 units[21] = ['112'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10170. Examen TIC A1 2014";
 preguntaids[21] = 10170


//  Id pregunta: 9433 Año de creación de pregunta: 2014
 questions[22]= "23)  En el encaminamiento por vector-distancia cada router:";
 choices[22]= new Array();
 choices[22][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[22][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[22][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[22][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[22] = 0;
 units[22] = ['112'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9433. ";
 preguntaids[22] = 9433


//  Id pregunta: 9428 Año de creación de pregunta: 2014
 questions[23]= "24)  Respecto al protocolo Spanning Tree Protocol , es falso que:";
 choices[23]= new Array();
 choices[23][0] = "Es un protocolo de Nivel 2";
 choices[23][1] = "Permite realizar encaminamiento entre nodos";
 choices[23][2] = "Evita bucles en la red.";
 choices[23][3] = "Converge m&aacute;s lentamente que RSTP";
 answers[23] = 1;
 units[23] = ['112'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9428. ";
 preguntaids[23] = 9428


//  Id pregunta: 10842 Año de creación de pregunta: 2015
 questions[24]= "25)  Una trama STM-4 tiene una capacidad de:";
 choices[24]= new Array();
 choices[24][0] = "155 Mbps";
 choices[24][1] = "622 Mbps";
 choices[24][2] = "2,5 Gbps";
 choices[24][3] = "10 Gbps";
 answers[24] = 1;
 units[24] = ['112'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 10842. ";
 preguntaids[24] = 10842


//  Id pregunta: 8816 Año de creación de pregunta: 2013
 questions[25]= "26)  Ante situaciones de congesti&oacute;n, Resilient Packet Ring:";
 choices[25]= new Array();
 choices[25][0] = "Reacciona descartando paquetes.";
 choices[25][1] = "Utiliza el algoritmo Fairness, que sirve para los servicios de clase A1, B-CIR, B-EIR y C; y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo y que se puede reutilizar de las diferentes clases.";
 choices[25][2] = "Utiliza el algoritmo Fairness, que sirve para todos los tipos de tr&aacute;fico y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo.";
 choices[25][3] = "No tiene control de congesti&oacute;n.";
 answers[25] = 1;
 units[25] = ['112'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8816. ";
 preguntaids[25] = 8816


//  Id pregunta: 9434 Año de creación de pregunta: 2014
 questions[26]= "27)  En el encaminamiento por estado de los enlaces cada router:";
 choices[26]= new Array();
 choices[26][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[26][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[26][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[26][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[26] = 3;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9434. ";
 preguntaids[26] = 9434


//  Id pregunta: 9576 Año de creación de pregunta: 2010
 questions[27]= "28)  Una desventaja de la topolog&iacute;a f&iacute;sica de bus es que:";
 choices[27]= new Array();
 choices[27][0] = "Un fallo en el concentrador provoca el aislamiento de todos los nodos a &eacute;l conectados.";
 choices[27][1] = "Requiere m&aacute;s cable que la topolog&iacute;a en estrella.";
 choices[27][2] = "Es vulnerable a la atenuaci&oacute;n, ya que pierde se&ntilde;al a trav&eacute;s de la distancia del cable.";
 choices[27][3] = "Es compleja y dif&iacute;cil de arreglar.";
 answers[27] = 2;
 units[27] = ['112'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9576. TIC A2 2013 libre";
 preguntaids[27] = 9576


