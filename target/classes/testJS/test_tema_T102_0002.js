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
//  Id pregunta: 5648 Año de creación de pregunta: 2007
 questions[0]= "1)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[0]= new Array();
 choices[0][0] = "Los repetidores o hubs que interconectan estaciones entre s&iacute; operan &uacute;nicamente a nivel el&eacute;ctrico (nivel f&iacute;sico del modelo OSI)";
 choices[0][1] = "El algoritmo de &aacute;rbol de extensi&oacute;n (spanning tree algorithm) es utilizado por los dispositivos puentes (o &quot;bridges&quot;) para construir topolog&iacute;as de interconexi&oacute;n de LAN's libres de bucles.";
 choices[0][2] = "Los encaminadores o routers deben tener implementadas las funcionalidades de los 7 niveles del modelo de referencia OSI para descubrir las rutas de encaminamiento adecuadas.";
 choices[0][3] = "Las pasarelas o gateways permiten, entre otras funcionalidades Ia implementaci&oacute;n de servicios NAT de traducci&oacute;n de direcciones IP.";
 answers[0] = 2;
 units[0] = ['102'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5648. ";
 preguntaids[0] = 5648


//  Id pregunta: 5030 Año de creación de pregunta: 2002
 questions[1]= "2)  Por una misma fibra &oacute;ptica:";
 choices[1]= new Array();
 choices[1][0] = "Puede transportarse tr&aacute;fico asociado a varios PVCs y SVCs";
 choices[1][1] = "S&oacute;lo puede viajar tr&aacute;fico asociado a un &uacute;nico PVC configurado para tal fin";
 choices[1][2] = "No puede llevar tr&aacute;fico asociado a PVCs";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = 0;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5030. ";
 preguntaids[1] = 5030


//  Id pregunta: 7945 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes definiciones explica de mejor manera lo que es el throughput de un sistema inform&aacute;tico?";
 choices[2]= new Array();
 choices[2][0] = "La cantidad de trabajo &uacute;til ejecutada por unidad de tiempo en un entorno de carga determinado.";
 choices[2][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede ejecutar por unidad de tiempo en un entorno de carga determinado.";
 choices[2][2] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes del sistema est&aacute;n utilizados simult&aacute;neamente.";
 choices[2][3] = "Es el porcentaje de tiempo durante el cual se est&aacute; utilizando un componente del sistema inform&aacute;tico.";
 answers[2] = 0;
 units[2] = ['102'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 7945. Examen TIC A2 2010";
 preguntaids[2] = 7945


//  Id pregunta: 6053 Año de creación de pregunta: 2003
 questions[3]= "4)  Los equipos utilizados para la interconexi&oacute;n de redes a nivel 5 seg&uacute;n el modelo OSI se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Repetidores.";
 choices[3][1] = "Routers.";
 choices[3][2] = "Bridges.";
 choices[3][3] = "Gateways.";
 answers[3] = 3;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6053. TIC B 2007";
 preguntaids[3] = 6053


//  Id pregunta: 8408 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes acciones NO es realizada por un switch de nivel 2?:";
 choices[4]= new Array();
 choices[4][0] = "Conversi&oacute;n de protocolos.";
 choices[4][1] = "Aprendizaje de direcciones MAC.";
 choices[4][2] = "Reducci&oacute;n de colisiones respecto a un hub.";
 choices[4][3] = "Posibilitar m&uacute;ltiples transmisiones simult&aacute;neas sin interferir en otras sub-redes";
 answers[4] = 0;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8408. Operador Ayto. Madrid 2010";
 preguntaids[4] = 8408


//  Id pregunta: 5204 Año de creación de pregunta: 2006
 questions[5]= "6)  En relaci&oacute;n a los switches, se&ntilde;ale la respuesta falsa:";
 choices[5]= new Array();
 choices[5][0] = "Tienen mayor rendimiento que los puentes, y pueden trabajar a la velocidad nominal (wire speed) de la interfaz.";
 choices[5][1] = "En la conmutaci&oacute;n &quot;store-and-forward&quot; recibe la trama y la retransmite si es correcta, tras haber comprobado el CRC.";
 choices[5][2] = "En la conmutaci&oacute;n &quot;cut-throutgh&quot; si el CRC es err&oacute;neo la trama no se retransmite";
 choices[5][3] = "Mediante &quot;cut-through libre de fragmentos&quot; se reciben 64 bytes antes de retransmitir.";
 answers[5] = 2;
 units[5] = ['102'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5204. ";
 preguntaids[5] = 5204


//  Id pregunta: 6867 Año de creación de pregunta: 2010
 questions[6]= "7)  El teorema de Nyquist establece que el n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal:";
 choices[6]= new Array();
 choices[6][0] = "Puede ser superior al doble de su ancho de banda.";
 choices[6][1] = "No puede ser superior al doble de su ancho de banda.";
 choices[6][2] = "No tiene l&iacute;mite alguno.";
 choices[6][3] = "No puede ser superior al ancho de banda.";
 answers[6] = 1;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 6867. TIC A 2009";
 preguntaids[6] = 6867


//  Id pregunta: 5497 Año de creación de pregunta: 2007
 questions[7]= "8)  Un Puente o Bridge:";
 choices[7]= new Array();
 choices[7][0] = "S&oacute;lo funcionan con TCP/IP.";
 choices[7][1] = "Puede dividir una red en dos segmentos.";
 choices[7][2] = "Permiten establecer una Topolog&iacute;a en Estrella en una red en BUS al garantizar la compatibilidad en el nivel 2 de OSI.";
 choices[7][3] = "Encaminan la informaci&oacute;n hacia el destino siguiendo el trayecto m&aacute;s corto por la red.";
 answers[7] = 1;
 units[7] = ['102'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5497. ";
 preguntaids[7] = 5497


//  Id pregunta: 4933 Año de creación de pregunta: 2002
 questions[8]= "9)  Un conjunto de redes administradas por una entidad com&uacute;n y que comparten una estrategia com&uacute;n de encaminamiento se conoce en la terminolog&iacute;a ISO como:";
 choices[8]= new Array();
 choices[8][0] = "Una LAN (RAL)";
 choices[8][1] = "Un &aacute;rea";
 choices[8][2] = "Un sistema aut&oacute;nomo";
 choices[8][3] = "Un dominio";
 answers[8] = 2;
 units[8] = ['102'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4933. ";
 preguntaids[8] = 4933


//  Id pregunta: 7853 Año de creación de pregunta: 2011
 questions[9]= "10)  Indique la Potencia a la entrada del receptor del sistema de telecomunicaciones compuesto de los siguientes elementos: - Una antena receptora a la que le llega una Potencia de entrada de 10exp-8 mW. - Un amplificador con ganancia G1 = 1000. - Una longitud de cable de 10m con atenuaci&oacute;n del mismo de 0&rsquo;3 dB/m. - Un amplificador con ganancia G2 = 100. - Un receptor.";
 choices[9]= new Array();
 choices[9][0] = "-63 dBW.";
 choices[9][1] = "33 dBm.";
 choices[9][2] = "1exp-6 W.";
 choices[9][3] = "-53 dBm.";
 answers[9] = 0;
 units[9] = ['102'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7853. Examen TIC A1 2010";
 preguntaids[9] = 7853


//  Id pregunta: 6680 Año de creación de pregunta: 2009
 questions[10]= "11)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l era clasificado por CISCO como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace";
 choices[10]= new Array();
 choices[10][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol)";
 choices[10][1] = "IGRP (Interior Gateway Routing Protocol)";
 choices[10][2] = "OSPF (Open Shortest Path First)";
 choices[10][3] = "RIPv2 (Routing Information Protocol ver. 2)";
 answers[10] = 0;
 units[10] = ['102'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 6680. MAP 2008 A1";
 preguntaids[10] = 6680


//  Id pregunta: 8028 Año de creación de pregunta: 2011
 questions[11]= "12)  Cu&aacute;l de los siguientes estados NO corresponde con ninguno de los estados en los que puede estar un puerto de un dispositivo de interconexi&oacute;n, seg&uacute;n lo definido en el est&aacute;ndar 802.1D para el protocolo Spanning Tree:";
 choices[11]= new Array();
 choices[11][0] = "Blocking (Bloqueando).";
 choices[11][1] = "Listening (Escuchando).";
 choices[11][2] = "Learning (Aprendiendo).";
 choices[11][3] = "Receiving (Recibiendo).";
 answers[11] = 3;
 units[11] = ['102'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8028. Examen TIC A2 2010";
 preguntaids[11] = 8028


//  Id pregunta: 4948 Año de creación de pregunta: 2002
 questions[12]= "13)  Una empresa dispone de dos edificios de oficinas a ambos lados de una calle. Para conectarlos han decidido estudiar las alternativas disponibles. Indique la opci&oacute;n que sea mejor tanto t&eacute;cnica como econ&oacute;micamente:";
 choices[12]= new Array();
 choices[12][0] = "utilizaci&oacute;n de un enlace infrarrojos";
 choices[12][1] = "Utilizaci&oacute;n de una l&iacute;nea punto a punto arrendada a una empresa con concesi&oacute;n para ofrecer servicios portadores";
 choices[12][2] = "Contrataci&oacute;n de un servicio VSAT";
 choices[12][3] = "Solicitar del Ayuntamiento permiso de obra para la conexi&oacute;n permanente de una l&iacute;nea privada que atraviese la calle";
 answers[12] = 1;
 units[12] = ['102'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4948. ";
 preguntaids[12] = 4948


//  Id pregunta: 5799 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;Qu&eacute; protocolo de enrutamiento se utiliza principalmente entre los sistemas aut&oacute;nomos en Internet?";
 choices[13]= new Array();
 choices[13][0] = "OSPF";
 choices[13][1] = "RIP";
 choices[13][2] = "BGP";
 choices[13][3] = "RIP2";
 answers[13] = 2;
 units[13] = ['102'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5799. ";
 preguntaids[13] = 5799


//  Id pregunta: 8368 Año de creación de pregunta: 2011
 questions[14]= "15)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[14]= new Array();
 choices[14][0] = "El nodo iniciador env&iacute;a tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 choices[14][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[14][2] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[14][3] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a todos los nodos adyacentes";
 answers[14] = 0;
 units[14] = ['102'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8368. Analista Ayto. Madrid 2010";
 preguntaids[14] = 8368


//  Id pregunta: 5202 Año de creación de pregunta: 2006
 questions[15]= "16)  En relaci&oacute;n con las redes de comunicaciones, &iquest;a qu&eacute; hace referencia el t&eacute;rmino &quot;VLAN trunking&quot;?";
 choices[15]= new Array();
 choices[15][0] = "Es el est&aacute;ndar 802.1Q";
 choices[15][1] = "Se refiere a etiquetar tramas ethernet";
 choices[15][2] = "Al proceso de transmitir m&uacute;ltiples VLAN por un &uacute;nico enlace";
 choices[15][3] = "A la se&ntilde;alizaci&oacute;n de VLAN";
 answers[15] = 2;
 units[15] = ['102'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5202. ";
 preguntaids[15] = 5202


//  Id pregunta: 5401 Año de creación de pregunta: 2006
 questions[16]= "17)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera seg&uacute;n el modelo OSI en el nivel de:";
 choices[16]= new Array();
 choices[16][0] = "transporte";
 choices[16][1] = "red";
 choices[16][2] = "f&iacute;sico";
 choices[16][3] = "enlace";
 answers[16] = 1;
 units[16] = ['102'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5401. ";
 preguntaids[16] = 5401


//  Id pregunta: 5019 Año de creación de pregunta: 2002
 questions[17]= "18)  Para la interconexi&oacute;n de redes locales se han especificado diversos equipos. Indique cu&aacute;l de las opciones es correcta:";
 choices[17]= new Array();
 choices[17][0] = "Un router necesariamente une segmentos de red con distinto protocolo de enlace, o nivel dos";
 choices[17][1] = "Un router une dos segmentos de red utilizando exclusivamente la informaci&oacute;n de nivel tres para el filtrado de las direcciones";
 choices[17][2] = "Un router necesariamente une segmentos de red con el mismo protocolo de enlace, o de nivel dos";
 choices[17][3] = "Todas las respuestas anteriores son correctas";
 answers[17] = 1;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5019. ";
 preguntaids[17] = 5019


//  Id pregunta: 4996 Año de creación de pregunta: 2002
 questions[18]= "19)  Los puentes transparentes:";
 choices[18]= new Array();
 choices[18][0] = "Son lo mismo que los puentes 'Source Routing'";
 choices[18][1] = "Eliminan la direcci&oacute;n origen de cada trama que reciben";
 choices[18][2] = "No existen";
 choices[18][3] = "Aprenden las direcciones MAC de cada trama recibida y las guardan temporalmente, asoci&aacute;ndolas a un puerto.";
 answers[18] = 3;
 units[18] = ['102'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4996. ";
 preguntaids[18] = 4996


//  Id pregunta: 5209 Año de creación de pregunta: 2006
 questions[19]= "20)  Respecto a los protocolos de routing:";
 choices[19]= new Array();
 choices[19][0] = "El protocolo de vector distancia es de routing interno (Interior Gateway Protocol).";
 choices[19][1] = "El IS-IS es utilizado como est&aacute;ndar de Internet.";
 choices[19][2] = "OSPF utiliza &aacute;reas dentro de un sistema aut&oacute;nomo, creando jerarqu&iacute;as.";
 choices[19][3] = "Todas son falsas";
 answers[19] = 0;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5209. ";
 preguntaids[19] = 5209


//  Id pregunta: 7394 Año de creación de pregunta: 2010
 questions[20]= "21)  La funci&oacute;n de un hub es";
 choices[20]= new Array();
 choices[20][0] = "Reenviar los paquetes en funci&oacute;n de la direcci&oacute;n MAC de destino";
 choices[20][1] = "Repetir la informaci&oacute;n que llega a un puerto por el resto de puertos";
 choices[20][2] = "Dirigir correctamente tr&aacute;fico de una red a otra";
 choices[20][3] = "Asignar diferentes preferencias a los mensajes que fluyen por la red";
 answers[20] = 1;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7394. Examen TIC B 2009";
 preguntaids[20] = 7394


//  Id pregunta: 5020 Año de creación de pregunta: 2002
 questions[21]= "22)  Para poder aumentar el rendimiento de los medios de comunicaci&oacute;n se han desarrollado diversos sistemas de multiplexaci&oacute;n. Elija la opci&oacute;n que considere cierta:";
 choices[21]= new Array();
 choices[21][0] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando cada canal de entrada se modula sobre una portadora diferente";
 choices[21][1] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna un per&iacute;odo de tiempo dentro de una trama";
 choices[21][2] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna una frecuencia portadora distinta";
 choices[21][3] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando a cada canal de entrada se le asigna una frecuencia entre las disponibles en el espectro del medio";
 answers[21] = 2;
 units[21] = ['102'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5020. ";
 preguntaids[21] = 5020


//  Id pregunta: 6790 Año de creación de pregunta: 2010
 questions[22]= "23)  El protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian tr&aacute;fico es:";
 choices[22]= new Array();
 choices[22][0] = "OSPF.";
 choices[22][1] = "No es adecuado usar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas.";
 choices[22][2] = "RIP.";
 choices[22][3] = "BGP-4.";
 answers[22] = 3;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6790. TIC A 2009";
 preguntaids[22] = 6790


//  Id pregunta: 6226 Año de creación de pregunta: 2003
 questions[23]= "24)  Un HUB es un dispositivo de interconexi&oacute;n utilizado para:";
 choices[23]= new Array();
 choices[23][0] = "Enlazar LANs separadas y proporcionar filtrado de paquetes entre ellas.";
 choices[23][1] = "Interconectar redes con protocolos y arquitecturas completamente diferentes, a todos los niveles de comunicaci&oacute;n.";
 choices[23][2] = "Concentrar y organizar el cableado en una red de &aacute;rea local.";
 choices[23][3] = "Controlar las comunicaciones, permit&eacute;ndolas o prohibi&eacute;ndolas seg&uacute;n las pol&iacute;ticas de red que haya definido la organizaci&oacute;n responsable de la red.";
 answers[23] = 2;
 units[23] = ['102'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6226. Examen TIC A Castilla La Mancha 2007";
 preguntaids[23] = 6226


//  Id pregunta: 5017 Año de creación de pregunta: 2002
 questions[24]= "25)  Para interconectar diferentes redes de &aacute;rea local:";
 choices[24]= new Array();
 choices[24][0] = "Es necesario el uso de puentes";
 choices[24][1] = "Los routers posibilitan la conexi&oacute;n en una misma red de dos cableados diferentes";
 choices[24][2] = "Un bridge interconecta al cable troncal de un edificio el cable Ethernet de cada planta";
 choices[24][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[24] = 3;
 units[24] = ['102'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5017. ";
 preguntaids[24] = 5017


//  Id pregunta: 5374 Año de creación de pregunta: 2006
 questions[25]= "26)  Para listar las conexiones en un servidor utilizo el comando";
 choices[25]= new Array();
 choices[25][0] = "ping";
 choices[25][1] = "netstat";
 choices[25][2] = "tracert o traceroute";
 choices[25][3] = "ipconfig / ifconfig";
 answers[25] = 1;
 units[25] = ['102'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5374. ";
 preguntaids[25] = 5374


//  Id pregunta: 5018 Año de creación de pregunta: 2002
 questions[26]= "27)  Para la conmutaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la ventaja de tener una latencia menor";
 choices[26][1] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la desventaja de transmitir paquetes err&oacute;neos";
 choices[26][2] = "La t&eacute;cnica &quot;store and fordward&quot; tiene las caracter&iacute;sticas opuestas a &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[26][3] = "Todas las afirmaciones anteriores son correctas";
 answers[26] = 3;
 units[26] = ['102'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5018. ";
 preguntaids[26] = 5018


//  Id pregunta: 7852 Año de creación de pregunta: 2011
 questions[27]= "28)  La Recomendaci&oacute;n UIT-T I.411 &quot;Configuraciones de referencia de las interfaces Usuario-Red de la RDSI&quot;, define el punto de referencia T entre:";
 choices[27]= new Array();
 choices[27][0] = "La Terminaci&oacute;n de Red 1 (NT1) y la Terminaci&oacute;n de L&iacute;nea (LT).";
 choices[27][1] = "La Terminaci&oacute;n de Red 2 (NT2) y la Terminaci&oacute;n de Red 1 (NT1).";
 choices[27][2] = "El Equipo Terminal de Tipo 1 (TE1) y el Adaptador de Terminal (TA).";
 choices[27][3] = "El Equipo Terminal de Tipo 2 (TE2) y el Adaptador de Terminal (TA).";
 answers[27] = 1;
 units[27] = ['102'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 7852. Examen TIC A1 2010";
 preguntaids[27] = 7852


//  Id pregunta: 7537 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para el protocolo TCP/IP?";
 choices[28]= new Array();
 choices[28][0] = "IP no proporciona control de errores para datos, ni sumas de comprobaci&oacute;n de cabeceras.";
 choices[28][1] = "Si se pierde o da&ntilde;a alg&uacute;n datagrama durante la transmisi&oacute;n, TCP lo detecta y lo vuelve a retransmitir.";
 choices[28][2] = "UDP garantiza la entrega de los datagramas y evita las duplicaciones.";
 choices[28][3] = "ICMP garantiza la entrega fiable de un paquete IP.";
 answers[28] = 1;
 units[28] = ['102'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7537. Map 2005";
 preguntaids[28] = 7537


//  Id pregunta: 6116 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutadormultinivel Gigabit Ethernet?:";
 choices[29]= new Array();
 choices[29][0] = "Bus compartido.";
 choices[29][1] = "Memoria compartida.";
 choices[29][2] = "I/O compartida.";
 choices[29][3] = "Crossbar";
 answers[29] = 0;
 units[29] = ['102'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 6116. Examen TIC A1 MAP 2007";
 preguntaids[29] = 6116


//  Id pregunta: 5693 Año de creación de pregunta: 2007
 questions[30]= "31)  El protocolo RIP:";
 choices[30]= new Array();
 choices[30][0] = "Es un protocolo de encaminamiento del tipo &quot;vector de distancia&quot;.";
 choices[30][1] = "Es un protocolo de encaminamiento del tipo &quot;estado del enlace&quot;.";
 choices[30][2] = "Es un protocolo de descarga de correo electr&oacute;nico desde un servidor web.";
 choices[30][3] = "Es un protocolo de interconexi&oacute;n de conmutadores.";
 answers[30] = 0;
 units[30] = ['102'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5693. ";
 preguntaids[30] = 5693


//  Id pregunta: 5503 Año de creación de pregunta: 2007
 questions[31]= "32)  Una importante desventaja de emplear una topolog&iacute;a de conmutadores (switchs) jer&aacute;rquica en una LAN es";
 choices[31]= new Array();
 choices[31][0] = "El coste, pues se deben utilizar muchos conmutadores.";
 choices[31][1] = "La dependencia de un solo proveedor, ya que todos han de ser compatibles.";
 choices[31][2] = "Que una ca&iacute;da de un conmutador dejar&aacute; a dos subredes incomunicadas.";
 choices[31][3] = "Su obsolescencia, ya que es una topolog&iacute;a de los a&ntilde;os 80.";
 answers[31] = 2;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5503. ";
 preguntaids[31] = 5503


//  Id pregunta: 5375 Año de creación de pregunta: 2006
 questions[32]= "33)  Para ver los saltos en la ruta entre dos servidores utilizo el comando";
 choices[32]= new Array();
 choices[32][0] = "ping";
 choices[32][1] = "netstat";
 choices[32][2] = "tracert o traceroute";
 choices[32][3] = "ipconfig / ifconfig";
 answers[32] = 2;
 units[32] = ['102'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5375. ";
 preguntaids[32] = 5375


//  Id pregunta: 6466 Año de creación de pregunta: 2003
 questions[33]= "34)  &iquest;Qu&eacute; afirmaci&oacute;n sobre los puentes NO es correcta?";
 choices[33]= new Array();
 choices[33][0] = "Da servicio a un n&uacute;mero de ordenadores mayor que el que puede cubrirse con una red local";
 choices[33][1] = "Puede conectar redees heterog&eacute;neas";
 choices[33][2] = "Puede conectar medios f&iacute;sicos distintos";
 choices[33][3] = "Un problema en una subred afecta a toda la red";
 answers[33] = 3;
 units[33] = ['102'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 6466. ";
 preguntaids[33] = 6466


//  Id pregunta: 6661 Año de creación de pregunta: 2009
 questions[34]= "35)  Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &quot;servidor NAT&quot;?:";
 choices[34]= new Array();
 choices[34][0] = "Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n";
 choices[34][1] = "Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[34][2] = "Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5";
 choices[34][3] = "Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse";
 answers[34] = 1;
 units[34] = ['102'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 6661. MAP 2008 A1";
 preguntaids[34] = 6661


//  Id pregunta: 6804 Año de creación de pregunta: 2010
 questions[35]= "36)  En el encaminamiento por vector distancia:";
 choices[35]= new Array();
 choices[35][0] = "Cada router env&iacute;a su LSP a toda la red.";
 choices[35][1] = "Emplea como m&eacute;trica el retardo y el ancho de banda";
 choices[35][2] = "Se produce el problema de cuenta a infinito.";
 choices[35][3] = "El algoritmo correspondiente tambi&eacute;n es conocido como algoritmo de Dijkstra.";
 answers[35] = 2;
 units[35] = ['102'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 6804. TIC A 2009";
 preguntaids[35] = 6804


//  Id pregunta: 4924 Año de creación de pregunta: 2002
 questions[36]= "37)  La tecnolog&iacute;a de red de &aacute;rea local Switched Ethernet:";
 choices[36]= new Array();
 choices[36][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[36][1] = "Se basa en el concepto de Microsegmentaci&oacute;n (se reduce el dominio de colisi&oacute;n de tal forma que solo dos nodos coexisten en cada dominio de colisi&oacute;n)";
 choices[36][2] = "Las dos anteriores son falsas";
 choices[36][3] = "Las dos anteriores son correctas";
 answers[36] = 1;
 units[36] = ['102'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4924. ";
 preguntaids[36] = 4924


//  Id pregunta: 6468 Año de creación de pregunta: 2003
 questions[37]= "38)  &iquest;C&uacute;al de los siguientes protocolos de encaminamiento NO es interno?";
 choices[37]= new Array();
 choices[37][0] = "BGP";
 choices[37][1] = "EIGRP";
 choices[37][2] = "OSPF";
 choices[37][3] = "IGRP";
 answers[37] = 0;
 units[37] = ['102'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6468. ";
 preguntaids[37] = 6468


//  Id pregunta: 4995 Año de creación de pregunta: 2002
 questions[38]= "39)  Los puentes que evitan el bucle de paquetes cuando hay varios enlaces entre ellos se denominan:";
 choices[38]= new Array();
 choices[38][0] = "Adaptativos y redundantes";
 choices[38][1] = "Tipo 'source routing'";
 choices[38][2] = "Tipo 'spanning tree'";
 choices[38][3] = "De inversi&oacute;n de se&ntilde;ales f&iacute;sicas";
 answers[38] = 2;
 units[38] = ['102'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4995. ";
 preguntaids[38] = 4995


//  Id pregunta: 8029 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes protocolos de enrutamiento NO soporta VLSM (Variable Length Subnet Mask - M&aacute;scara de subred de tama&ntilde;o variable)?:";
 choices[39]= new Array();
 choices[39][0] = "RIPv2.";
 choices[39][1] = "EIGRP.";
 choices[39][2] = "IGRP.";
 choices[39][3] = "OSPF.";
 answers[39] = 2;
 units[39] = ['102', '103'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8029. Examen TIC A2 2010";
 preguntaids[39] = 8029


//  Id pregunta: 4938 Año de creación de pregunta: 2002
 questions[40]= "41)  Un router IP puede intercambiar tr&aacute;fico IP:";
 choices[40]= new Array();
 choices[40][0] = "Entre un interfaz Ethernet y un interfaz STM-1";
 choices[40][1] = "S&oacute;lo entre interfaces de un mismo nivel";
 choices[40][2] = "Nunca si existen m&aacute;quinas UNIX y Windows en cada una de las redes que conecta";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 0;
 units[40] = ['102'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4938. ";
 preguntaids[40] = 4938


//  Id pregunta: 5260 Año de creación de pregunta: 2006
 questions[41]= "42)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[41]= new Array();
 choices[41][0] = "La convergencia de las redes de voz y datos";
 choices[41][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[41][2] = "Ninguna de las anteriores";
 choices[41][3] = "tanto la opci&oacute;n a como la b";
 answers[41] = 3;
 units[41] = ['102', '107', '108'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5260. ";
 preguntaids[41] = 5260


//  Id pregunta: 8082 Año de creación de pregunta: 2011
 questions[42]= "43)  &iquest;Cu&aacute;l es uno de los inconvenientes de usar un Hub?:";
 choices[42]= new Array();
 choices[42][0] = "Un Hub no puede extender la distancia operativa de la red";
 choices[42][1] = "Un Hub no puede filtrar el tr&aacute;fico de la red";
 choices[42][2] = "Un Hub no puede amplificar se&ntilde;ales debilitadas";
 choices[42][3] = "Un Hub no cumple ninguna de las anteriores";
 answers[42] = 1;
 units[42] = ['102'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8082. Analista Ayto. Madrid 2010";
 preguntaids[42] = 8082


//  Id pregunta: 8498 Año de creación de pregunta: 2011
 questions[43]= "44)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[43]= new Array();
 choices[43][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[43][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[43][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = 1;
 units[43] = ['102'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 8498. Teleco Ayto. Madrid 2010";
 preguntaids[43] = 8498


//  Id pregunta: 7651 Año de creación de pregunta: 2010
 questions[44]= "45)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[44]= new Array();
 choices[44][0] = "La preferencia local.";
 choices[44][1] = "El agregado at&oacute;mico.";
 choices[44][2] = "El pr&oacute;ximo salto.";
 choices[44][3] = "El agregador.";
 answers[44] = 2;
 units[44] = ['102'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 7651. Map 2006";
 preguntaids[44] = 7651


//  Id pregunta: 4980 Año de creación de pregunta: 2002
 questions[45]= "46)  Los conmutadores o switches LAN construyen una tabla de conmutaci&oacute;n que consiste en:";
 choices[45]= new Array();
 choices[45][0] = "Direcciones MAC y su interfaz de salida asociada";
 choices[45][1] = "Direcciones MAC y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 choices[45][2] = "Direcciones de red y su interfaz de salida apropiada";
 choices[45][3] = "Direcciones de red  y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 answers[45] = 0;
 units[45] = ['102'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4980. ";
 preguntaids[45] = 4980


//  Id pregunta: 5330 Año de creación de pregunta: 2006
 questions[46]= "47)  El modo promiscuo se utiliza para";
 choices[46]= new Array();
 choices[46][0] = "Comunicarse con todos los ordenadores de una red";
 choices[46][1] = "Abrir un canal IRC (chat) a todos los usuarios conectados";
 choices[46][2] = "Habilitar redes TCP multicast";
 choices[46][3] = "Acceder a todos los paquetes del segmento de red";
 answers[46] = 3;
 units[46] = ['102'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5330. ";
 preguntaids[46] = 5330


//  Id pregunta: 5695 Año de creación de pregunta: 2007
 questions[47]= "48)  Las siglas CCNA se corresponden con:";
 choices[47]= new Array();
 choices[47][0] = "Una metodolog&iacute;a de gesti&oacute;n de proyectos en Tecnolog&iacute;as de is Informaci&oacute;n.";
 choices[47][1] = "Una metodolog&iacute;a para el an&aacute;lisis y gesti&oacute;n de riesgos en Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[47][2] = "Metodolog&iacute;a de gesti&oacute;n de Ia seguridad en las Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[47][3] = "Una certificaci&oacute;n de Cisco.";
 answers[47] = 3;
 units[47] = ['102'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5695. ";
 preguntaids[47] = 5695


//  Id pregunta: 8026 Año de creación de pregunta: 2011
 questions[48]= "49)  Una desventaja de la topolog&iacute;a f&iacute;sica de estrella es que:";
 choices[48]= new Array();
 choices[48][0] = "Requiere m&aacute;s cable que la topolog&iacute;a de bus.";
 choices[48][1] = "Se requieren terminadores.";
 choices[48][2] = "Es dif&iacute;cil conectar nuevos nodos a la red,";
 choices[48][3] = "Toda la red se caer&iacute;a si hubiera una ruptura en el cable principal.";
 answers[48] = 0;
 units[48] = ['102'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8026. Examen TIC A2 2010";
 preguntaids[48] = 8026


//  Id pregunta: 6670 Año de creación de pregunta: 2009
 questions[49]= "50)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[49]= new Array();
 choices[49][0] = "Hub";
 choices[49][1] = "Puente";
 choices[49][2] = "NIC (Network Interface Card)";
 choices[49][3] = "Router";
 answers[49] = 3;
 units[49] = ['102'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6670. MAP 2008 A1";
 preguntaids[49] = 6670


//  Id pregunta: 6467 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes opciones NO es necesaria para que una red ethernet pueda funcionar en modo d&uacute;plex completo?";
 choices[50]= new Array();
 choices[50][0] = "El medio f&iacute;sico permite la transmisi&oacute;n d&uacute;plex completa";
 choices[50][1] = "La distancia entre las dos estaciones es menor de 50 m";
 choices[50][2] = "Solo hay dos estaciones conectadas entre s&iacute;";
 choices[50][3] = "Las tarjetas de red de ambos equipos soportan el funcionamiento en modo d&uacute;plex completo";
 answers[50] = 1;
 units[50] = ['102'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 6467. ";
 preguntaids[50] = 6467


//  Id pregunta: 8241 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[51]= new Array();
 choices[51][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[51][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[51][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[51][3] = "No";
 answers[51] = 0;
 units[51] = ['102'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8241. Examen UPM A2 2011";
 preguntaids[51] = 8241


//  Id pregunta: 8083 Año de creación de pregunta: 2011
 questions[52]= "53)  Un puente se caracteriza por:";
 choices[52]= new Array();
 choices[52][0] = "Operar en capa 3 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[52][1] = "Opera en capa 2 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[52][2] = "Operar en capa 3 del modelo OSI y utiliza direcciones IP para tomar decisiones";
 choices[52][3] = "Operar en capa 4 del modelo OSI y utiliza puertos TCP para tomar decisiones";
 answers[52] = 1;
 units[52] = ['102'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8083. Analista Ayto. Madrid 2010";
 preguntaids[52] = 8083


//  Id pregunta: 5025 Año de creación de pregunta: 2002
 questions[53]= "54)  PCM es:";
 choices[53]= new Array();
 choices[53][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[53][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[53][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[53][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[53] = 0;
 units[53] = ['102'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5025. ";
 preguntaids[53] = 5025


//  Id pregunta: 4954 Año de creación de pregunta: 2002
 questions[54]= "55)  Uno de los protocolos m&aacute;s populares usados en las redes Ethernet (y 802.3) es el protocolo 'spanning tree' y es usado por los puentes:";
 choices[54]= new Array();
 choices[54][0] = "Puentes transparentes";
 choices[54][1] = "Puentes 'source routing'";
 choices[54][2] = "Puentes TCP/IP";
 choices[54][3] = "Ninguno de ellos";
 answers[54] = 0;
 units[54] = ['102'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4954. ";
 preguntaids[54] = 4954


//  Id pregunta: 7194 Año de creación de pregunta: 2010
 questions[55]= "56)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[55]= new Array();
 choices[55][0] = "Repetidor";
 choices[55][1] = "Puente (bridge)";
 choices[55][2] = "Pasarela (gateway)";
 choices[55][3] = "Encaminador (router)";
 answers[55] = 1;
 units[55] = ['102'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7194. Castilla La Mancha 2009";
 preguntaids[55] = 7194


//  Id pregunta: 9092 Año de creación de pregunta: 2014
 questions[56]= "57)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[56]= new Array();
 choices[56][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[56][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[56][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[56][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[56] = 2;
 units[56] = ['102'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 9092. Examen TIC-A1 2013";
 preguntaids[56] = 9092


//  Id pregunta: 7774 Año de creación de pregunta: 2010
 questions[57]= "58)  Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo de Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &laquo;servidor NAT&raquo;?";
 choices[57]= new Array();
 choices[57][0] = "Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n.";
 choices[57][1] = "Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[57][2] = "Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5.";
 choices[57][3] = "Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse.";
 answers[57] = 1;
 units[57] = ['102'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7774. ";
 preguntaids[57] = 7774


//  Id pregunta: 7196 Año de creación de pregunta: 2010
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de enrutamiento?";
 choices[58]= new Array();
 choices[58][0] = "OSPF";
 choices[58][1] = "RIP";
 choices[58][2] = "BGP";
 choices[58][3] = "RARP";
 answers[58] = 3;
 units[58] = ['102'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7196. Castilla La Mancha 2009";
 preguntaids[58] = 7196


//  Id pregunta: 5973 Año de creación de pregunta: 2007
 questions[59]= "60)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[59]= new Array();
 choices[59][0] = "La preferencia local";
 choices[59][1] = "El agregado at&oacute;mico";
 choices[59][2] = "El pr&oacute;ximo salto";
 choices[59][3] = "El agregador";
 answers[59] = 2;
 units[59] = ['102'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5973. ";
 preguntaids[59] = 5973


//  Id pregunta: 5963 Año de creación de pregunta: 2007
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[60]= new Array();
 choices[60][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red";
 choices[60][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n desubred complementaria en cada paquete";
 choices[60][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores)";
 choices[60][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red";
 answers[60] = 2;
 units[60] = ['102'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5963. ";
 preguntaids[60] = 5963


//  Id pregunta: 5914 Año de creación de pregunta: 2007
 questions[61]= "62)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[61]= new Array();
 choices[61][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization)";
 choices[61][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation)";
 choices[61][2] = "SNA (System Network Architecture), de IBM";
 choices[61][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union - Telecommunications)";
 answers[61] = 3;
 units[61] = ['102'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5914. ";
 preguntaids[61] = 5914


//  Id pregunta: 5038 Año de creación de pregunta: 2002
 questions[62]= "63)  Respecto a los dispositivos de interconexi&oacute;n de redes locales, es falso que:";
 choices[62]= new Array();
 choices[62][0] = "El repetidor compatibiliza 2 medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[62][1] = "Los puentes operan a nivel de enlace, subnivel LLC para un mismo nivel MAC";
 choices[62][2] = "Los enrutadores conectan LANs con LANs, MANs o WANs";
 choices[62][3] = "Las pasarelas trabajan a nivel de red o superior";
 answers[62] = 1;
 units[62] = ['102'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5038. ";
 preguntaids[62] = 5038


//  Id pregunta: 8497 Año de creación de pregunta: 2011
 questions[63]= "64)  Cuando una l&iacute;nea de transmisi&oacute;n cumple la condici&oacute;n de Heaviside:";
 choices[63]= new Array();
 choices[63][0] = "El retardo es m&iacute;nimo.";
 choices[63][1] = "El retardo es m&aacute;ximo.";
 choices[63][2] = "El retardo es constante.";
 choices[63][3] = "No existe retardo";
 answers[63] = 2;
 units[63] = ['102'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8497. Teleco Ayto. Madrid 2010";
 preguntaids[63] = 8497


//  Id pregunta: 5208 Año de creación de pregunta: 2006
 questions[64]= "65)  Un router puede ser:";
 choices[64]= new Array();
 choices[64][0] = "S&oacute;lo un dispositivo hardware.";
 choices[64][1] = "S&oacute;lo un dispositivo software.";
 choices[64][2] = "Un dispositivo software, hardware o bien una combinaci&oacute;n de ellos.";
 choices[64][3] = "Ninguna de las anteriores es cierta";
 answers[64] = 2;
 units[64] = ['102'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5208. ";
 preguntaids[64] = 5208


//  Id pregunta: 5040 Año de creación de pregunta: 2002
 questions[65]= "66)  Respecto a los enrutadores, encaminadores o 'routers' se puede afirmar que:";
 choices[65]= new Array();
 choices[65][0] = "En la red de &aacute;rea local, son imprescindibles entre los ordenadores personales y su servidor";
 choices[65][1] = "Facilitan la uni&oacute;n a nivel f&iacute;sico entre dos redes distintas 10baseT y SNA";
 choices[65][2] = "Unen dos redes locales a nivel de red, ya que se suele decir que son equipos h&iacute;bridos";
 choices[65][3] = "Unen las redes WAN o MAN que tienen igual subnivel de control LLC";
 answers[65] = 2;
 units[65] = ['102'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5040. ";
 preguntaids[65] = 5040


//  Id pregunta: 7532 Año de creación de pregunta: 2010
 questions[66]= "67)  Las SDU (Service Data Unit) son unidades de datos:";
 choices[66]= new Array();
 choices[66][0] = "Que se intercambian entre entidades hom&oacute;logas.";
 choices[66][1] = "Que proporcionan informaci&oacute;n de control entre niveles.";
 choices[66][2] = "Correspondientes a las primitivas de comunicaci&oacute;n.";
 choices[66][3] = "Que deben ser tratados por el nivel superior N+1 de forma transparente.";
 answers[66] = 3;
 units[66] = ['102'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7532. Map 2005";
 preguntaids[66] = 7532


//  Id pregunta: 8618 Año de creación de pregunta: 2013
 questions[67]= "68)  De los siguientes sistemas, &iquest;cu&aacute;l no se refiere a un sistema de navegaci&oacute;n por sat&eacute;lite?";
 choices[67]= new Array();
 choices[67][0] = "Beidou";
 choices[67][1] = "COMPASS";
 choices[67][2] = "QZSS";
 choices[67][3] = "GNP";
 answers[67] = 3;
 units[67] = ['102'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8618. ";
 preguntaids[67] = 8618


//  Id pregunta: 5502 Año de creación de pregunta: 2007
 questions[68]= "69)  Marcos es el administrador de una LAN Ethernet que consta de 10 estaciones de trabajo, 2 servidores y 3 impresoras, todo ello conectado a trav&eacute;s de un hub central de 20 puertos. El rendimiento de la red ha ca&iacute;do en picado como consecuencia de la instalaci&oacute;n de una nueva aplicaci&oacute;n, cr&iacute;tica para la Organizaci&oacute;n, que genera muchas colisiones de paquetes, ralentizando los accesos a datos y servicios. Los usuarios presionan al Director de Sistemas de Informaci&oacute;n para que se solucione el problema. El Director pide a Marcos su opini&oacute;n sobre la soluci&oacute;n m&aacute;s econ&oacute;mica y eficiente. El consejo de Marcos deber&iacute;a ser:";
 choices[68]= new Array();
 choices[68][0] = "Sustituir el cableado UTP por fibra &oacute;ptica para aumentar el ancho de banda.";
 choices[68][1] = "Sustituir los dos servidores actuales por un servidor tetraprocesador.";
 choices[68][2] = "Desinstalar la aplicaci&oacute;n que causa los problemas.";
 choices[68][3] = "Sustituir el hub por un switch.";
 answers[68] = 3;
 units[68] = ['102'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5502. ";
 preguntaids[68] = 5502


//  Id pregunta: 4937 Año de creación de pregunta: 2002
 questions[69]= "70)  Un puente transparente aprende la direcci&oacute;n de los dispositivos:";
 choices[69]= new Array();
 choices[69][0] = "Examinado las direcciones MAC de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[69][1] = "Examinando las direcciones de red de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[69][2] = "Examinado las direcciones MAC de las tramas salientes y asoci&aacute;ndolas con una interfaz da salida";
 choices[69][3] = "Examinando las direcciones de red de las tramas salientes y asoci&aacute;ndolas con una interfaz de salida";
 answers[69] = 0;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4937. ";
 preguntaids[69] = 4937


//  Id pregunta: 5207 Año de creación de pregunta: 2006
 questions[70]= "71)  La t&eacute;cnica NAT no permite:";
 choices[70]= new Array();
 choices[70][0] = "Implementar una pasarela FTP.";
 choices[70][1] = "Optimizar el uso de direccionamiento IP p&uacute;blico.";
 choices[70][2] = "Aislar el espacio de direccionamiento p&uacute;blico del privado.";
 choices[70][3] = "Asignar direcciones din&aacute;micas para acceso a Internet.";
 answers[70] = 0;
 units[70] = ['102'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5207. ";
 preguntaids[70] = 5207


//  Id pregunta: 8196 Año de creación de pregunta: 2011
 questions[71]= "72)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[71]= new Array();
 choices[71][0] = "Por encaminamiento IP y basada en ATM";
 choices[71][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[71][2] = "Mediante solicitud-reserva y por contienda.";
 choices[71][3] = "En estrella y en &aacute;rbol.";
 answers[71] = 2;
 units[71] = ['102', '112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 8196. Examen TIC A2 2010 interna";
 preguntaids[71] = 8196


//  Id pregunta: 8495 Año de creación de pregunta: 2011
 questions[72]= "73)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[72]= new Array();
 choices[72][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[72][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[72][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = 2;
 units[72] = ['102'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 8495. Teleco Ayto. Madrid 2010";
 preguntaids[72] = 8495


//  Id pregunta: 7531 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[73]= new Array();
 choices[73][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX o SOH al comienzo de la trama y un car&aacute;cter ETX o ETB al final de la trama.";
 choices[73][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control.";
 choices[73][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack.";
 choices[73][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras.";
 answers[73] = 2;
 units[73] = ['102'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7531. Map 2005";
 preguntaids[73] = 7531


//  Id pregunta: 8496 Año de creación de pregunta: 2011
 questions[74]= "75)  En un sistema de transmisi&oacute;n digital &hellip;";
 choices[74]= new Array();
 choices[74][0] = "El ruido es acumulativo.";
 choices[74][1] = "Cada repetidor puede regenerar la se&ntilde;al.";
 choices[74][2] = "No tiene influencia el ruido.";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = 1;
 units[74] = ['102'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 8496. Teleco Ayto. Madrid 2010";
 preguntaids[74] = 8496


