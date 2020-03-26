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
//  Id pregunta: 4892 Año de creación de pregunta: 2002
 questions[0]= "1)  La ITU-T ha recogido en diversas recomendaciones la forma en que un terminal as&iacute;ncrono puede acceder a una red de conmutaci&oacute;n de paquetes. El conjunto de estas normas se conoce como la triple X. Indique cual de las siguientes opciones es verdadera:";
 choices[0]= new Array();
 choices[0][0] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[0][1] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica la forma el terminal de paquetes remoto puede controlar los par&aacute;metros del Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblado";
 choices[0][2] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[0][3] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.25 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal  con el Ensamblador\Desensamblador de Paquetes; y la X.7";
 answers[0] = 2;
 units[0] = ['112'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4892. ";
 preguntaids[0] = 4892


//  Id pregunta: 4859 Año de creación de pregunta: 2002
 questions[1]= "2)  En una red que usa conmutaci&oacute;n de paquetes:";
 choices[1]= new Array();
 choices[1][0] = "La longitud de la unidades de datos (paquetes) que puedan presentarse a la red es ilimitada";
 choices[1][1] = "Cuanto mayor sea la longitud de los paquetes, mayor ser&aacute; el tiempo de espera hasta su retransmisi&oacute;n, por lo que se procurar&aacute; que tama&ntilde;o de los paquetes sea el menor posible";
 choices[1][2] = "Si un mensaje supera la m&aacute;xima longitud permitida, se divide en unidades de datos m&aacute;s peque&ntilde;as";
 choices[1][3] = "La ITU-T en su recomendaci&oacute;n X.25 no propone ning&uacute;n m&aacute;ximo para la longitud de los paquetes";
 answers[1] = 2;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4859. ";
 preguntaids[1] = 4859


//  Id pregunta: 4822 Año de creación de pregunta: 2002
 questions[2]= "3)  En las transmisi&oacute;n de datos en tramas se suele incluir un campo denominado CRC. Indique cu&aacute;l de las opciones le parece correcta:";
 choices[2]= new Array();
 choices[2][0] = "Es un campo que indica el final de la trama y prepara al equipo receptor para la siguiente";
 choices[2][1] = "Es un campo de control del n&uacute;mero de bits incluidos en la trama, para conocer el final de la misma";
 choices[2][2] = "Es un campo de control de integridad de la trama, sirve para comprobar la ocurrencia de ciertos errores en la transmisi&oacute;n";
 choices[2][3] = "Es un campo de control de integridad de la trama, sirve para detectar cualquier error en la transmisi&oacute;n";
 answers[2] = 2;
 units[2] = ['112'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4822. ";
 preguntaids[2] = 4822


//  Id pregunta: 4825 Año de creación de pregunta: 2002
 questions[3]= "4)  En los sistemas de conmutaci&oacute;n de paquetes:";
 choices[3]= new Array();
 choices[3][0] = "Se pueden distinguir dos tipos fundamentales : datagrama y circuito l&oacute;gico";
 choices[3][1] = "En estas redes existe un tiempo de espera producido por la sobrecarga de paquetes en algunos nodos";
 choices[3][2] = "Los tiempos de espera se reducen mediante diversas t&eacute;cnicas de encaminamiento";
 choices[3][3] = "Para evitar la congesti&oacute;n de la red se estudian las rutas &oacute;ptimas para cada par de nodos y se guardan en un nodo central";
 answers[3] = 2;
 units[3] = ['112'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4825. ";
 preguntaids[3] = 4825


//  Id pregunta: 4824 Año de creación de pregunta: 2002
 questions[4]= "5)  En los m&oacute;dems en banda base:";
 choices[4]= new Array();
 choices[4][0] = "No se realiza modulaci&oacute;n ni demodulaci&oacute;n.";
 choices[4][1] = "Emplean modulaci&oacute;n de amplitud con banda lateral &uacute;nica.";
 choices[4][2] = "Emplean modulaci&oacute;n QAM (modulaci&oacute;n en amplitud de cuadratura).";
 choices[4][3] = "Usan modulaci&oacute;n PSK y ASK combinadas.";
 answers[4] = 0;
 units[4] = ['112'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4824. ";
 preguntaids[4] = 4824


//  Id pregunta: 4493 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[5]= new Array();
 choices[5][0] = "Los conmutadores se utilizan para resolver problemas de rendimiento de la red debido a anchos de banda peque&ntilde;os y embotellamientos";
 choices[5][1] = "Los encaminadores o routers son independientes del protocolo, ya que se sit&uacute;an en el nivel de red y eligen la ruta m&aacute;s eficiente de cada paquete que reciben";
 choices[5][2] = "El protocolo &quot;spanning tree&quot; tiene como misi&oacute;n evitar la formaci&oacute;n de bucles en la interconexi&oacute;n de elementos de una red";
 choices[5][3] = "Los repetidores obligan a que los 2 segmentos que interconectan tenga el mismo acceso al medio, la misma direcci&oacute;n de red y trabaje con los mismos protocolos";
 answers[5] = 1;
 units[5] = ['112'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4493. ";
 preguntaids[5] = 4493


//  Id pregunta: 4344 Año de creación de pregunta: 2004
 questions[6]= "7)  El estandar de IEEE 802.9 se corresponde con...";
 choices[6]= new Array();
 choices[6][0] = "fibra optica";
 choices[6][1] = "voz y datos";
 choices[6][2] = "seguridad LAN";
 choices[6][3] = "ninguna de las anteriores";
 answers[6] = 1;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4344. Examen Julio 2003";
 preguntaids[6] = 4344


//  Id pregunta: 900 Año de creación de pregunta: 2016
 questions[7]= "8)  La especificaci&oacute;n del Institute of Electrical and Electronics Engineers (IEEE) para acceso inat&aacute;mbrico de banda ancha m&oacute;vil o MBWA, es la:";
 choices[7]= new Array();
 choices[7][0] = "IEEE 802.19";
 choices[7][1] = "IEEE 802.20";
 choices[7][2] = "IEEE 802.21";
 choices[7][3] = "IEEE 802.22";
 answers[7] = 1;
 units[7] = ['112'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 900. AGE A2 2015";
 preguntaids[7] = 900


//  Id pregunta: 4810 Año de creación de pregunta: 2002
 questions[8]= "9)  En Internet, los distintos tipos de servicios utilizan protocolos espec&iacute;ficos. De las siguientes parejas servicios-protocolos, una es incorrecta. Se&ntilde;&aacute;lela:";
 choices[8]= new Array();
 choices[8][0] = "P&aacute;ginas Web-HTTP";
 choices[8][1] = "Correo electr&oacute;nico-SNMP";
 choices[8][2] = "Grupos de noticias-NNTP";
 choices[8][3] = "Transferencia de ficheros-FTP";
 answers[8] = 1;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4810. ";
 preguntaids[8] = 4810


//  Id pregunta: 1376 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[9]= new Array();
 choices[9][0] = "######";
 choices[9][1] = "FF::FF";
 choices[9][2] = "FF:FF:FF:FF:FF:FF:FF";
 choices[9][3] = "FF:FF:FF:FF:FF:FF";
 answers[9] = 3;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1376. ";
 preguntaids[9] = 1376


//  Id pregunta: 4726 Año de creación de pregunta: 2002
 questions[10]= "11)  Indicar entre las siguientes normas del IEEE la que trata sobre seguridad LAN/MAN interoperable:";
 choices[10]= new Array();
 choices[10][0] = "802.1";
 choices[10][1] = "802.11";
 choices[10][2] = "802.12";
 choices[10][3] = "802.13";
 answers[10] = 0;
 units[10] = ['112'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4726. ";
 preguntaids[10] = 4726


//  Id pregunta: 4656 Año de creación de pregunta: 2002
 questions[11]= "12)  Control de temperatura, ahorro de gasto de energ&iacute;a seg&uacute;n la hora del d&iacute;a, gesti&oacute;n de alarmas a distancia&hellip;, son disciplinas englobadas en la:";
 choices[11]= new Array();
 choices[11][0] = "Teleinform&aacute;tica.";
 choices[11][1] = "Automatizaci&oacute;n de procesos y rob&oacute;tica.";
 choices[11][2] = "Dom&oacute;tica.";
 choices[11][3] = "Telem&aacute;tica industrial.";
 answers[11] = 2;
 units[11] = ['112'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4656. ";
 preguntaids[11] = 4656


//  Id pregunta: 1850 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; protocolo de acceso al medio utiliza Ethernet?";
 choices[12]= new Array();
 choices[12][0] = "HDLC";
 choices[12][1] = "CSMA/CA";
 choices[12][2] = "CSMA/CD";
 choices[12][3] = "MACA";
 answers[12] = 2;
 units[12] = ['112'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1850. ";
 preguntaids[12] = 1850


//  Id pregunta: 3158 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre FDDI es cierta?:";
 choices[13]= new Array();
 choices[13][0] = "FDDI, en el nivel f&iacute;sico, utiliza una codificaci&oacute;n llamada &quot;4 de 5&quot; en lugar de la codificaci&oacute;n de Manchester";
 choices[13][1] = "La codificaci&oacute;n utilizada en FDDI no permite el autosincronismo aportado por la codificaci&oacute;n de Manchester";
 choices[13][2] = "La no utilizaci&oacute;n de una codificaci&oacute;n con autosincronismo en FDDI obliga a la necesidad de un pre&aacute;mbulo de 8 o m&aacute;s bytes que permita la sincronizaci&oacute;n de los relojes del emisor y el receptor";
 choices[13][3] = "Todas las respuestas anteriores son ciertas";
 answers[13] = 3;
 units[13] = ['112'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 3158. ";
 preguntaids[13] = 3158


//  Id pregunta: 1309 Año de creación de pregunta: 2016
 questions[14]= "15)  Ethernet realiza la difusi&oacute;n recibiendo tramas con la siguiente direcci&oacute;n MAC de destino:";
 choices[14]= new Array();
 choices[14][0] = "00: 00: 00: 00: 00:FF";
 choices[14][1] = "FF:FF:FF:FF:FF:FF";
 choices[14][2] = "FF: 00: 00: 00: 00:FF";
 choices[14][3] = "00:00:00:00:00:00";
 answers[14] = 1;
 units[14] = ['112'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1309. ";
 preguntaids[14] = 1309


//  Id pregunta: 4722 Año de creación de pregunta: 2002
 questions[15]= "16)  Indicar entre las siguientes normas del IEEE la que trata sobre &lsquo;Demand Priority Access Method&rsquo;:";
 choices[15]= new Array();
 choices[15][0] = "802.1";
 choices[15][1] = "802.11";
 choices[15][2] = "802.12";
 choices[15][3] = "802.13";
 answers[15] = 2;
 units[15] = ['112'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4722. ";
 preguntaids[15] = 4722


//  Id pregunta: 4501 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un protocolo de transmisi&oacute;n orientado a bit?:";
 choices[16]= new Array();
 choices[16][0] = "Para detectar el principio y el final de una trama se utiliza una secuencia de bits, llamada bandera";
 choices[16][1] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n mensajes constituidos por uno o varios caracteres, llamados de control de la comunicaci&oacute;n, tomados de un c&oacute;digo preestablecido";
 choices[16][2] = "La trama es de formato fijo, constituida por campos de longitud determinada, excepto el campo de informaci&oacute;n";
 choices[16][3] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n campos de control con bits (o grupos de bits) cuyo significado est&aacute; dado por su posici&oacute;n";
 answers[16] = 1;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4501. ";
 preguntaids[16] = 4501


//  Id pregunta: 4899 Año de creación de pregunta: 2002
 questions[17]= "18)  La norma IEEE 802.4 es la especificaci&oacute;n que define la redes:";
 choices[17]= new Array();
 choices[17][0] = "Ethernet";
 choices[17][1] = "Token bus";
 choices[17][2] = "Token ring";
 choices[17][3] = "FDDI";
 answers[17] = 1;
 units[17] = ['112'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4899. ";
 preguntaids[17] = 4899


//  Id pregunta: 1840 Año de creación de pregunta: 2016
 questions[18]= "19)  En el contexto de los tipos de redes, indique cu&aacute;l de las siguientes afirmaciones NO es correcta";
 choices[18]= new Array();
 choices[18][0] = "WAN significa Wireless Area Network";
 choices[18][1] = "PAN significa Personal &Aacute;rea Network";
 choices[18][2] = "MAN significa Metropolitan &Aacute;rea Network";
 choices[18][3] = "SAN significa Storage Area Network";
 answers[18] = 0;
 units[18] = ['112'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1840. ";
 preguntaids[18] = 1840


//  Id pregunta: 4732 Año de creación de pregunta: 2002
 questions[19]= "20)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[19]= new Array();
 choices[19][0] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[19][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[19][2] = "Los nodos PPP se anuncian para obtenci&oacute;n din&aacute;mica de direcci&oacute;n o preguntan a los servidores para uqe se les asigne una direcci&oacute;n";
 choices[19][3] = "El nodo iniciador envia tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 answers[19] = 3;
 units[19] = ['112'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4732. ";
 preguntaids[19] = 4732


//  Id pregunta: 3159 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes respuestas caracteriza FDDI?:";
 choices[20]= new Array();
 choices[20][0] = "Consiste en el control de dispositivos y datos que funcionan por desplazameinto de frecuencia";
 choices[20][1] = "Consiste en la t&eacute;cnica de control de los dispositivos para filtraje de datos en las redes de &aacute;rea local";
 choices[20][2] = "Consiste en dos bucles de fibra &oacute;ptica con protocolo de paso de testigo";
 choices[20][3] = "Consiste en un bucle de fibra &oacute;ptica que funciona como Ethernet (por contenci&oacute;n) pero a 100 Mbits/seg, y hay otro bucle como backup del primero";
 answers[20] = 2;
 units[20] = ['112'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 3159. ";
 preguntaids[20] = 3159


//  Id pregunta: 4807 Año de creación de pregunta: 2002
 questions[21]= "22)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[21]= new Array();
 choices[21][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[21][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[21][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[21][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[21] = 3;
 units[21] = ['112'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4807. ";
 preguntaids[21] = 4807


//  Id pregunta: 4919 Año de creación de pregunta: 2002
 questions[22]= "23)  La t&eacute;cnica de acceso al medio utilizada en redes Ethernet se denomina:";
 choices[22]= new Array();
 choices[22][0] = "CSMA";
 choices[22][1] = "CSMA/CD";
 choices[22][2] = "CSMA/CA";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = 1;
 units[22] = ['112'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4919. ";
 preguntaids[22] = 4919


//  Id pregunta: 4957 Año de creación de pregunta: 2002
 questions[23]= "24)  La velocidad del est&aacute;ndar Gigabit Ethernet es:";
 choices[23]= new Array();
 choices[23][0] = "100 Mbps";
 choices[23][1] = "1000 Mbps";
 choices[23][2] = "10000 Mbps";
 choices[23][3] = "100000 Mbps";
 answers[23] = 1;
 units[23] = ['112'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4957. ";
 preguntaids[23] = 4957


//  Id pregunta: 1908 Año de creación de pregunta: 2016
 questions[24]= "25)  En relaci&oacute;n al protocolo 802.1 Q usado para utilizar de forma transparente el mismo medio f&iacute;sico por m&uacute;ltiples redes, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[24]= new Array();
 choices[24][0] = "Encapsula la trama original";
 choices[24][1] = "A&ntilde;ade nuevos bytes a la cabecera";
 choices[24][2] = "Para establecer un trunking 802.1 q a ambos lados debemos tener la misma VLAN nativa";
 choices[24][3] = "Se precisa realizar un rec&aacute;lculo del campo &quot;FCS&quot;";
 answers[24] = 0;
 units[24] = ['112'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1908. ";
 preguntaids[24] = 1908


//  Id pregunta: 4909 Año de creación de pregunta: 2002
 questions[25]= "26)  La prioridad de acceso en redes Token Ring:";
 choices[25]= new Array();
 choices[25][0] = "Usa los primeros 6 bits en el campo 'Priority' (prioridad) para controlar el acceso en red Token Ring";
 choices[25][1] = "Permite a los puentes de la red limitar tr&aacute;fico de broadcast sobre redes locales o remotas";
 choices[25][2] = "Es una funci&oacute;n del router (encaminador o canalizador) usada para control de acceso a ciertas puertas seg&uacute;n la prioridad de la direcci&oacute;n";
 choices[25][3] = "Permite que ciertas estaciones accedan a la red m&aacute;s frecuentemente que otras basadas en su prioridad";
 answers[25] = 3;
 units[25] = ['112'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4909. ";
 preguntaids[25] = 4909


//  Id pregunta: 1375 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[26]= new Array();
 choices[26][0] = "4 bytes.";
 choices[26][1] = "6 bytes.";
 choices[26][2] = "12 bytes.";
 choices[26][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[26] = 0;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1375. ";
 preguntaids[26] = 1375


//  Id pregunta: 4952 Año de creación de pregunta: 2002
 questions[27]= "28)  Una red MAN es capaz de conectar estaciones de voz y datos en entornos metropolitanos, lo que suele entenderse por un di&aacute;metro de red de varias decenas de kil&oacute;metros. Entre estas se encuentra la denominada DQDB. Indique la opci&oacute;n correcta:";
 choices[27]= new Array();
 choices[27][0] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.6";
 choices[27][1] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.9";
 choices[27][2] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.6";
 choices[27][3] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.9";
 answers[27] = 2;
 units[27] = ['112'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4952. ";
 preguntaids[27] = 4952


//  Id pregunta: 4926 Año de creación de pregunta: 2002
 questions[28]= "29)  La tecnolog&iacute;a que pretende extender la banda ancha a los hogares usando fibra se denomina:";
 choices[28]= new Array();
 choices[28][0] = "Home Fiber";
 choices[28][1] = "City fiber";
 choices[28][2] = "Instant Fiber";
 choices[28][3] = "Fiber To The Home";
 answers[28] = 3;
 units[28] = ['112'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4926. ";
 preguntaids[28] = 4926


//  Id pregunta: 1377 Año de creación de pregunta: 2016
 questions[29]= "30)  En redes de &aacute;rea local, &iquest;Cu&aacute;l de los siguientes es un de acceso al medio compartido con escucha por contienda?";
 choices[29]= new Array();
 choices[29][0] = "Paso de testigo en anillo.";
 choices[29][1] = "CSMA no persistente.";
 choices[29][2] = "ALOHA ranurado.";
 choices[29][3] = "Contenci&oacute;n.";
 answers[29] = 1;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1377. ";
 preguntaids[29] = 1377


//  Id pregunta: 4729 Año de creación de pregunta: 2002
 questions[30]= "31)  Indique cu&aacute;l de las opciones siguientes es verdadera respecto al acceso al medio en redes LAN:";
 choices[30]= new Array();
 choices[30][0] = "Si la estaci&oacute;n que utiliza el medio, cuando finaliza su uso lo cede a la siguiente que lo necesita, se denomina Token Passing";
 choices[30][1] = "Las redes que siguen un protocolo de acceso al medio consistente en que la estaci&oacute;n que lo requiere, observa hasta que no existe actividad en el mismo, en ese momento accede y observa que no colisiona con ninguna otra estaci&oacute;n, utilizan CSMA";
 choices[30][2] = "En las redes con protocolo Token Passing se puede determinar el tiempo m&aacute;ximo en que una estaci&oacute;n acceder al medio. En las redes con CSMA solo se puede estimar este tiempo";
 choices[30][3] = "Todas las respuestas anteriores son correctas";
 answers[30] = 3;
 units[30] = ['112'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4729. ";
 preguntaids[30] = 4729


//  Id pregunta: 4804 Año de creación de pregunta: 2002
 questions[31]= "32)  En el tipo de conmutaci&oacute;n de paquetes conocido como datagrama:";
 choices[31]= new Array();
 choices[31][0] = "Los paquetes no han de llegar ordenados";
 choices[31][1] = "Se establece un enlace l&oacute;gico entre emisor y receptor";
 choices[31][2] = "Los mensajes no se trocean";
 choices[31][3] = "Los paquetes han de llegar ordenados";
 answers[31] = 0;
 units[31] = ['112'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4804. ";
 preguntaids[31] = 4804


//  Id pregunta: 4554 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares define un anillo l&oacute;gico sobre un bus f&iacute;sico?:";
 choices[32]= new Array();
 choices[32][0] = "802.2";
 choices[32][1] = "802.3";
 choices[32][2] = "802.4";
 choices[32][3] = "802.5";
 answers[32] = 2;
 units[32] = ['112'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4554. ";
 preguntaids[32] = 4554


//  Id pregunta: 4475 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Cu&aacute;l de las respuestas siguientes no se aplica a los servicios de red orientados a conexi&oacute;n?:";
 choices[33]= new Array();
 choices[33][0] = "Requiere que todas las conexiones sean expl&iacute;citamente establecidas y terminadas";
 choices[33][1] = "Requiere que a cada paquete se le a&ntilde;ada toda la direcci&oacute;n de encaminamiento antes de transmitirlo";
 choices[33][2] = "Predetermina el path desde la fuente al destino antes de transmitir los datos";
 choices[33][3] = "Reserva los recursos de red antes de transmitir los datos";
 answers[33] = 1;
 units[33] = ['112'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4475. ";
 preguntaids[33] = 4475


//  Id pregunta: 4870 Año de creación de pregunta: 2002
 questions[34]= "35)  La capa de acceso al medio en una red de &aacute;rea local se denomina:";
 choices[34]= new Array();
 choices[34][0] = "MAC";
 choices[34][1] = "ADSL";
 choices[34][2] = "BUS";
 choices[34][3] = "LLC";
 answers[34] = 0;
 units[34] = ['112'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4870. ";
 preguntaids[34] = 4870


//  Id pregunta: 1206 Año de creación de pregunta: 2016
 questions[35]= "36)  El est&aacute;ndar conocido como WRAN (Wireless Regional &Aacute;rea Network) pertenece al grupo de trabajo del IEEE:";
 choices[35]= new Array();
 choices[35][0] = "802.19";
 choices[35][1] = "802.2";
 choices[35][2] = "802.21";
 choices[35][3] = "802.22";
 answers[35] = 3;
 units[35] = ['112'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1206. ";
 preguntaids[35] = 1206


//  Id pregunta: 4855 Año de creación de pregunta: 2002
 questions[36]= "37)  En una red de &aacute;rea extensa (WAN):";
 choices[36]= new Array();
 choices[36][0] = "Los tiempos de propagaci&oacute;n son bajos";
 choices[36][1] = "Las velocidades de transmisi&oacute;n de datos son lentas, sobre todo comparadas con las LAN";
 choices[36][2] = "Baja tasa de errores, haciendo innecesario procedimientos efectivos para la detecci&oacute;n y su recuperaci&oacute;n";
 choices[36][3] = "Los retrasos son predecibles";
 answers[36] = 1;
 units[36] = ['112'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4855. ";
 preguntaids[36] = 4855


//  Id pregunta: 4769 Año de creación de pregunta: 2002
 questions[37]= "38)  El topolog&iacute;a denominada FDDI (Fiber Distributed Data Interface) utiliza un m&eacute;todo de acceso al medio:";
 choices[37]= new Array();
 choices[37][0] = "Tipo CSMA/CD: se emite en cualquier momento y se detectan las colisiones";
 choices[37][1] = "Tipo  &lsquo;paso de testigo&rsquo; (Token Passing): es necesario la posesi&oacute;n del testigo para emitir";
 choices[37][2] = "Tipo TDM (multiplexaci&oacute;n por divisi&oacute;n en el tiempo): se asignan diferentes slots de tiempo a cada estaci&oacute;n";
 choices[37][3] = "Tipo FDM: la frecuencia de luz emitida por cada estaci&oacute;n es diferente con lo que no hay colisiones";
 answers[37] = 1;
 units[37] = ['112'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4769. ";
 preguntaids[37] = 4769


//  Id pregunta: 4817 Año de creación de pregunta: 2002
 questions[38]= "39)  En las LAN el proceso 'token passing' o paso de testigo supone:";
 choices[38]= new Array();
 choices[38][0] = "Escuchar el tr&aacute;fico del testigo y transmitir si no se detecta nada";
 choices[38][1] = "Utilizar la posesi&oacute;n del testigo para garantizar el derecho a transmitir";
 choices[38][2] = "A&ntilde;adir tramas de testigo a las tramas de datos para acceder a la red";
 choices[38][3] = "El testigo circula en un anillo hasta que alcanza su destino";
 answers[38] = 1;
 units[38] = ['112'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4817. ";
 preguntaids[38] = 4817


//  Id pregunta: 4856 Año de creación de pregunta: 2002
 questions[39]= "40)  En una red de &aacute;rea local que utiliza la t&eacute;cnica de acceso al medio conocida como contienda, una de las siguientes afirmaciones es falsa. Se&ntilde;&aacute;lela:";
 choices[39]= new Array();
 choices[39][0] = "Se pueden producir colisiones";
 choices[39][1] = "Cualquier estaci&oacute;n de la Red de &Aacute;rea Local puede transmitir en cualquier momento";
 choices[39][2] = "Se pueden establecer prioridades";
 choices[39][3] = "Ofrece buen rendimiento a baja carga";
 answers[39] = 2;
 units[39] = ['112'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4856. ";
 preguntaids[39] = 4856


//  Id pregunta: 4545 Año de creación de pregunta: 2002
 questions[40]= "41)  El equipo que se encuentra en ambos extremos de una l&iacute;nea de transmisi&oacute;n, se denomina, seg&uacute;n la nomenclatura espa&ntilde;ola de la ITU-T:";
 choices[40]= new Array();
 choices[40][0] = "ETC o equipo terminal de datos";
 choices[40][1] = "ETD o equipo terminal de datos";
 choices[40][2] = "ETCD o equipo terminal del circuito digital";
 choices[40][3] = "ETCD o equipo terminal del circuito de datos";
 answers[40] = 3;
 units[40] = ['112'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4545. ";
 preguntaids[40] = 4545


//  Id pregunta: 4640 Año de creación de pregunta: 2002
 questions[41]= "42)  8802.3 es:";
 choices[41]= new Array();
 choices[41][0] = "El c&oacute;digo de acceso a la red digital";
 choices[41][1] = "Un est&aacute;ndar de redes de &aacute;rea local de ISO IEC JTC1";
 choices[41][2] = "Un est&aacute;ndar europeo de conmutaci&oacute;n de paquetes";
 choices[41][3] = "Un est&aacute;ndar ANSI que trata de m&oacute;dems";
 answers[41] = 1;
 units[41] = ['112'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4640. ";
 preguntaids[41] = 4640


//  Id pregunta: 4898 Año de creación de pregunta: 2002
 questions[42]= "43)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[42]= new Array();
 choices[42][0] = "11 Mbps";
 choices[42][1] = "11 MBps";
 choices[42][2] = "54 Mbps";
 choices[42][3] = "54 MBps";
 answers[42] = 2;
 units[42] = ['108', '112'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4898. ";
 preguntaids[42] = 4898


//  Id pregunta: 4927 Año de creación de pregunta: 2002
 questions[43]= "44)  La topolog&iacute;a m&aacute;s com&uacute;n de dise&ntilde;o de redes SDH es:";
 choices[43]= new Array();
 choices[43][0] = "malla completa o parcial";
 choices[43][1] = "anillo";
 choices[43][2] = "estrella";
 choices[43][3] = "&aacute;rbol";
 answers[43] = 1;
 units[43] = ['112'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4927. ";
 preguntaids[43] = 4927


//  Id pregunta: 1568 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es el est&aacute;ndar del IEEE conocido como PoE+ (Power over Ethernet Plus) que aumenta la potencia de entrega respecto a su predecesor?";
 choices[44]= new Array();
 choices[44][0] = "IEEE 802.3af";
 choices[44][1] = "IEEE 802.3ab";
 choices[44][2] = "IEEE 802.3at";
 choices[44][3] = "IEEE 802.1ba";
 answers[44] = 2;
 units[44] = ['112'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 1568. ";
 preguntaids[44] = 1568


//  Id pregunta: 4657 Año de creación de pregunta: 2002
 questions[45]= "46)  CSMA/CD es:";
 choices[45]= new Array();
 choices[45][0] = "Un m&eacute;todo de paso de testigo en bus";
 choices[45][1] = "Un sistema operativo no propietario";
 choices[45][2] = "Un m&eacute;todo de detecci&oacute;n de se&ntilde;al en bus";
 choices[45][3] = "Un m&eacute;todo de paso de testigo en anillo";
 answers[45] = 2;
 units[45] = ['112'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4657. ";
 preguntaids[45] = 4657


//  Id pregunta: 4922 Año de creación de pregunta: 2002
 questions[46]= "47)  La tecnolog&iacute;a de red de &aacute;rea local 10Base-T:";
 choices[46]= new Array();
 choices[46][0] = "Requiere cableado coaxial delgado";
 choices[46][1] = "Requiere cableado de pares trenzados de categor&iacute;a 5 como m&iacute;nimo";
 choices[46][2] = "Cumple el est&aacute;ndar IEEE 802.3";
 choices[46][3] = "Son ciertas las respuestas 'b' y 'c'";
 answers[46] = 2;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4922. ";
 preguntaids[46] = 4922


//  Id pregunta: 4833 Año de creación de pregunta: 2002
 questions[47]= "48)  En redes MAN, protocolo DQDB, se cumple que:";
 choices[47]= new Array();
 choices[47][0] = "Las celdas tienen longitud de 53 bytes";
 choices[47][1] = "Es compatible con ATM";
 choices[47][2] = "Tienen una carga &uacute;til de 48 bytes";
 choices[47][3] = "Todas las anteriores respuestas son correctas";
 answers[47] = 3;
 units[47] = ['112'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4833. ";
 preguntaids[47] = 4833


//  Id pregunta: 1745 Año de creación de pregunta: 2016
 questions[48]= "49)  El standard Ethernet IEEE 802.3 est&aacute; basado en una t&eacute;cnica de Acceso al Medio por Detecci&oacute;n de Portadora (CSMA-Carrier Sense Multiple Access), se&ntilde;ale cu&aacute;l es:";
 choices[48]= new Array();
 choices[48][0] = "CSMA/CA";
 choices[48][1] = "CSMA/CD";
 choices[48][2] = "CSMA/CR";
 choices[48][3] = "CSMA/CP";
 answers[48] = 1;
 units[48] = ['112'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1745. ";
 preguntaids[48] = 1745


//  Id pregunta: 4765 Año de creación de pregunta: 2002
 questions[49]= "50)  El tiempo m&aacute;ximo de paso de datos de una estaci&oacute;n en una red Ethernet a 100 Mbits es:";
 choices[49]= new Array();
 choices[49][0] = "Igual al tiempo que tarda en propagarse un mensaje con longitud m&aacute;xima multiplicado por el n&uacute;mero de nodos en ese tramo";
 choices[49][1] = "No hay tiempo m&aacute;ximo";
 choices[49][2] = "Depende fundamentalmente de si el soporte es de cobre o de fibra &oacute;ptica";
 choices[49][3] = "No existe tiempo m&aacute;ximo ya que es inmediato, pues que el acceso al medio del mensaje lo hace en cuanto escucha que no hay tr&aacute;fico en la red";
 answers[49] = 1;
 units[49] = ['112'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4765. ";
 preguntaids[49] = 4765


//  Id pregunta: 4923 Año de creación de pregunta: 2002
 questions[50]= "51)  La tecnolog&iacute;a de red de &aacute;rea local PMD-FDDI:";
 choices[50]= new Array();
 choices[50][0] = "Trabaja a 125 Mhz";
 choices[50][1] = "Utiliza codificaci&oacute;n 4B/5B NRZI";
 choices[50][2] = "Transmite a 100 Mbps";
 choices[50][3] = "Todas las respuestas anteriores son correctas";
 answers[50] = 3;
 units[50] = ['112'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4923. ";
 preguntaids[50] = 4923


//  Id pregunta: 4634 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;Qu&eacute; topolog&iacute;a tiene una red ethernet cableada con 10 Base T?:";
 choices[51]= new Array();
 choices[51][0] = "Bus";
 choices[51][1] = "Estrella";
 choices[51][2] = "Anillo";
 choices[51][3] = "Doble bus";
 answers[51] = 1;
 units[51] = ['112'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4634. ";
 preguntaids[51] = 4634


//  Id pregunta: 4821 Año de creación de pregunta: 2002
 questions[52]= "53)  En las topolog&iacute;as de red de &aacute;rea local (LAN) se puede decir:";
 choices[52]= new Array();
 choices[52][0] = "En un bus el control es siempre distribuido";
 choices[52][1] = "El doble anillo permite seguir funcionando aunque se produzcan fallos en los puntos de la red";
 choices[52][2] = "La malla se obtiene cuando se conectan nodos pertenecientes a redes distintas de la misma topolog&iacute;a";
 choices[52][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[52] = 3;
 units[52] = ['112'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4821. ";
 preguntaids[52] = 4821


//  Id pregunta: 4492 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[53]= new Array();
 choices[53][0] = "Los hubs o concentradores se suelen usar para implementar topolog&iacute;as en estrella f&iacute;sica, pero funcionando como un anillo o como un bus l&oacute;gico";
 choices[53][1] = "Los repetidores &uacute;nicamente sirven para repetir la se&ntilde;al transmitida evitando su atenuaci&oacute;n, ampliando as&iacute; la longitud del cable que soporta la red";
 choices[53][2] = "Los puentes ayudan a resolver el problema de limitaci&oacute;n de distancias junto con el de limitaci&oacute;n del n&uacute;mero de nodos en una red";
 choices[53][3] = "Las pasarelas sirven principalmente para enlazar redes de similares caracter&iacute;sticas";
 answers[53] = 3;
 units[53] = ['112'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4492. ";
 preguntaids[53] = 4492


//  Id pregunta: 1525 Año de creación de pregunta: 2016
 questions[54]= "55)  La autonegociaci&oacute;n Ethernet determina:";
 choices[54]= new Array();
 choices[54][0] = "El modo de spanning tree a utilizar.";
 choices[54][1] = "El modo d&uacute;plex.";
 choices[54][2] = "La calidad de servicio.";
 choices[54][3] = "La tasa de errores m&aacute;xima soportada por el enlace.";
 answers[54] = 1;
 units[54] = ['112'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 1525. ";
 preguntaids[54] = 1525


//  Id pregunta: 4777 Año de creación de pregunta: 2002
 questions[55]= "56)  Indique la respuesta correcta sobre conmutaci&oacute;n de paquetes:";
 choices[55]= new Array();
 choices[55][0] = "la transmisi&oacute;n es por r&aacute;fagas";
 choices[55][1] = "la ruta origen-&gt;destino puede ser variable";
 choices[55][2] = "no hay ning&uacute;n circuito f&iacute;sico dedicado en la comunicaci&oacute;n";
 choices[55][3] = "todas las anteriores son caracter&iacute;sticas de la conmutaci&oacute;n de paquetes";
 answers[55] = 3;
 units[55] = ['112'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4777. ";
 preguntaids[55] = 4777


//  Id pregunta: 4766 Año de creación de pregunta: 2002
 questions[56]= "57)  El tiempo que tarda un terminal en poner una trama en la red:";
 choices[56]= new Array();
 choices[56][0] = "En las redes Ethernet no depende de la ocupaci&oacute;n de su segmento de red";
 choices[56][1] = "Es mejor en una red Token Ring que en una Ethernet si la red est&aacute; muy cargada";
 choices[56][2] = "No tiene cota m&aacute;xima en una red Token Bus";
 choices[56][3] = "Tiene una cota m&aacute;xima en una red Ethernet";
 answers[56] = 1;
 units[56] = ['112'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4766. ";
 preguntaids[56] = 4766


//  Id pregunta: 4921 Año de creación de pregunta: 2002
 questions[57]= "58)  La tecnolog&iacute;a de red de &aacute;rea local 100VG-AnyLAN:";
 choices[57]= new Array();
 choices[57][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[57][1] = "Utiliza el protocolo de acceso al medio por demanda de prioridad IEEE 802.12";
 choices[57][2] = "Requiere 8 pares trenzados de categor&iacute;a 3";
 choices[57][3] = "Todas las afirmaciones anteriores son falsas";
 answers[57] = 1;
 units[57] = ['112'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4921. ";
 preguntaids[57] = 4921


//  Id pregunta: 4727 Año de creación de pregunta: 2002
 questions[58]= "59)  Indicar la respuesta correcta: El protocolo HTTP, utilizado al navegar por Internet:";
 choices[58]= new Array();
 choices[58][0] = "Realiza una nueva conexi&oacute;n TCP con el servidor cada vez que se solicita una nueva p&aacute;gina web";
 choices[58][1] = "Abre una conexi&oacute;n TCP con el servidor la primera vez que se solicita una p&aacute;gina y la mantiene abierta mientras no se cambia de servidor";
 choices[58][2] = "HTTP no es un protocolo de comunicaciones, sino un lenguaje para la creaci&oacute;n de p&aacute;ginas web";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = 0;
 units[58] = ['112'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4727. ";
 preguntaids[58] = 4727


//  Id pregunta: 901 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[59]= new Array();
 choices[59][0] = "IEEE 802.11p";
 choices[59][1] = "IEEE 802.11r";
 choices[59][2] = "IEEE 802.11v";
 choices[59][3] = "IEEE 802.11w";
 answers[59] = 1;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 901. TAI 2016.";
 preguntaids[59] = 901


//  Id pregunta: 4842 Año de creación de pregunta: 2002
 questions[60]= "61)  En Token Ring , un monitor activo:";
 choices[60]= new Array();
 choices[60][0] = "Transmite mensajes de monitorizaci&oacute;n a cada servidor en el anillo para facilitar el balance de carga entre ellos";
 choices[60][1] = "Espera por los mensajes de error, entonces env&iacute;a mensajes de notificaci&oacute;n para limitar (o reordenar) el tr&aacute;fico";
 choices[60][2] = "Escucha la prioridad del testigo y cuando se detecta, reserva la prioridad para la estaci&oacute;n emisora";
 choices[60][3] = "Elimina las tramas no recogidas y es el punto central de informaci&oacute;n de 'timing' para un anillo";
 answers[60] = 3;
 units[60] = ['112'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4842. ";
 preguntaids[60] = 4842


//  Id pregunta: 4349 Año de creación de pregunta: 2004
 questions[61]= "62)  En la redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[61]= new Array();
 choices[61][0] = "Un ordenador se conecta al siguiente y el &uacute;ltimo al primero, formando un circulo cerrado";
 choices[61][1] = "Existe un nodo raiz del que cuelgan uno o varios nodos";
 choices[61][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[61][3] = "Cada uno de los nodos est&aacute; conectado con todos los demas";
 answers[61] = 2;
 units[61] = ['112'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4349. ";
 preguntaids[61] = 4349


//  Id pregunta: 4901 Año de creación de pregunta: 2002
 questions[62]= "63)  La normas de la serie 802 del IEEE est&aacute;n establecidas por diversos grupos de trabajo a los que que est&aacute;n asignadas diferentes tareas. &iquest;A cu&aacute;l corresponde la 802.6?:";
 choices[62]= new Array();
 choices[62][0] = "Control l&oacute;gico del enlace";
 choices[62][1] = "Normativa de conectividad entre equipos a nivel f&iacute;sico";
 choices[62][2] = "M&eacute;todo de paso de testigo en bus";
 choices[62][3] = "Redes de &aacute;rea metropolitana";
 answers[62] = 3;
 units[62] = ['112'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4901. ";
 preguntaids[62] = 4901


//  Id pregunta: 4865 Año de creación de pregunta: 2002
 questions[63]= "64)  Indique la opci&oacute;n que mejor refleje el servicio ofrecido por las compa&ntilde;&iacute;as de telecomunicaci&oacute;n, como conmutaci&oacute;n de circuitos:";
 choices[63]= new Array();
 choices[63][0] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, la entrega a la red y libera el circuito";
 choices[63][1] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda variable";
 choices[63][2] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se env&iacute;a la informaci&oacute;n en paquetes";
 choices[63][3] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda de transmisi&oacute;n fijo durante todo el tiempo que permanece establecido el cto";
 answers[63] = 3;
 units[63] = ['112'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4865. ";
 preguntaids[63] = 4865


//  Id pregunta: 4681 Año de creación de pregunta: 2002
 questions[64]= "65)  El est&aacute;ndar X.25 usa, a nivel de enlace, el protocolo:";
 choices[64]= new Array();
 choices[64][0] = "SDLC";
 choices[64][1] = "LAP-B";
 choices[64][2] = "Ethernet";
 choices[64][3] = "SAP";
 answers[64] = 1;
 units[64] = ['112'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4681. ";
 preguntaids[64] = 4681


//  Id pregunta: 1746 Año de creación de pregunta: 2016
 questions[65]= "66)  El est&aacute;ndar IEEE 802.3ae define una versi&oacute;n de Ethernet con una velocidad nominal de:";
 choices[65]= new Array();
 choices[65][0] = "1 Gbit/s.";
 choices[65][1] = "100 Mbit/s.";
 choices[65][2] = "10 Gbit/s.";
 choices[65][3] = "1 Tbit/s.";
 answers[65] = 2;
 units[65] = ['112'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1746. ";
 preguntaids[65] = 1746


//  Id pregunta: 4723 Año de creación de pregunta: 2002
 questions[66]= "67)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de &aacute;rea metropolitana:";
 choices[66]= new Array();
 choices[66][0] = "802.6";
 choices[66][1] = "802.7";
 choices[66][2] = "802.8";
 choices[66][3] = "802.9";
 answers[66] = 0;
 units[66] = ['112'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4723. ";
 preguntaids[66] = 4723


//  Id pregunta: 4505 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes expresiones definen mejor las ventajas de un multiplexor estad&iacute;stico?:";
 choices[67]= new Array();
 choices[67][0] = "Pueden atender m&aacute;s circuitos que los multiplexores por divisi&oacute;n de tiempos (MDT)";
 choices[67][1] = "Permiten evaluar la eficacia de transmisi&oacute;n de los circuitos que multiplexa";
 choices[67][2] = "Permite utilizar una l&iacute;nea de transmisi&oacute;n de menor velocidad que el MDT equivalente";
 choices[67][3] = "Evita el uso de los filtros requeridos por el MDT";
 answers[67] = 2;
 units[67] = ['112'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4505. ";
 preguntaids[67] = 4505


//  Id pregunta: 4951 Año de creación de pregunta: 2002
 questions[68]= "69)  Una red de conmutaci&oacute;n de paquetes trabaja en modo datagrama cuando:";
 choices[68]= new Array();
 choices[68][0] = "La transmisi&oacute;n de paquetes no es orientada a la conexi&oacute;n";
 choices[68][1] = "Se establecen circuitos virtuales entre origen y destino";
 choices[68][2] = "Se establecen circuitos f&iacute;sicos entre origen y destino";
 choices[68][3] = "Los mensajes se dividen en paquetes de longitud fija para su env&iacute;o";
 answers[68] = 0;
 units[68] = ['112'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4951. ";
 preguntaids[68] = 4951


//  Id pregunta: 1524 Año de creación de pregunta: 2016
 questions[69]= "70)  En una trama Ethernet, &iquest;qu&eacute; valor en binario toma el campo delimitador de inicio de trama?";
 choices[69]= new Array();
 choices[69][0] = "#######";
 choices[69][1] = "1,00E+07";
 choices[69][2] = "#######";
 choices[69][3] = "#######";
 answers[69] = 0;
 units[69] = ['112'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 1524. ";
 preguntaids[69] = 1524


//  Id pregunta: 4950 Año de creación de pregunta: 2002
 questions[70]= "71)  Una red de conmutaci&oacute;n de paquetes en la que cada paquete viaja por una ruta diferente se dice que opera en modo:";
 choices[70]= new Array();
 choices[70][0] = "Circuito virtual permanente";
 choices[70][1] = "Circuito virtual conmutado";
 choices[70][2] = "Datagrama";
 choices[70][3] = "Multiplexaci&oacute;n estad&iacute;stica";
 answers[70] = 2;
 units[70] = ['112'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4950. ";
 preguntaids[70] = 4950


//  Id pregunta: 4572 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Cu&aacute;l es la funcionalidad de los multiplexores estad&iacute;sticos?:";
 choices[71]= new Array();
 choices[71][0] = "Que realizan un tipo de multiplexaci&oacute;n por divisi&oacute;n en frecuencias (FDM)";
 choices[71][1] = "Que realizan la transferencia de se&ntilde;ales anal&oacute;gicas, y la estad&iacute;stica de errores";
 choices[71][2] = "Que realizan un muestreo de l&iacute;neas seg&uacute;n el tr&aacute;fico, no asignando intervalos fijos";
 choices[71][3] = "Que dividen el ancho de banda, seg&uacute;n par&aacute;metros definibles, proporcionando informaci&oacute;n estad&iacute;stica de uso para que el usuario ajuste sus asignaciones";
 answers[71] = 2;
 units[71] = ['112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4572. ";
 preguntaids[71] = 4572


//  Id pregunta: 4935 Año de creación de pregunta: 2002
 questions[72]= "73)  Un LED es:";
 choices[72]= new Array();
 choices[72][0] = "Un diodo emisor de luz, usado para generar luz a partir de energ&iacute;a el&eacute;ctrica, a menudo a modo de peque&ntilde;os pilotos de aviso";
 choices[72][1] = "Un tipo de vocoder que permite una generaci&oacute;n progresiva de la voz humana";
 choices[72][2] = "Un m&eacute;todo de gesti&oacute;n de proyectos espec&iacute;ficos de I+D con todas las particularidades que estos conllevan";
 choices[72][3] = "Nada de lo anterior";
 answers[72] = 0;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4935. ";
 preguntaids[72] = 4935


//  Id pregunta: 4849 Año de creación de pregunta: 2002
 questions[73]= "74)  En un protocolo de nivel de enlace se denomina ventana a:";
 choices[73]= new Array();
 choices[73][0] = "Al env&iacute;o de una trama de control que indica al emisor que la trama de informaci&oacute;n ha llegado correctamente";
 choices[73][1] = "Al envio por el emisor de las tramas de informaci&oacute;n numeradas secuencialmente";
 choices[73][2] = "Al envio de los asentimientos numerados por cada una de las tramas de informaci&oacute;n recibidas";
 choices[73][3] = "Al n&uacute;mero m&aacute;ximo de tramas que en un momento dado pueden estar pendientes de confirmaci&oacute;n";
 answers[73] = 3;
 units[73] = ['112'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4849. ";
 preguntaids[73] = 4849


//  Id pregunta: 4736 Año de creación de pregunta: 2002
 questions[74]= "75)  El protocolo CSMA/CD utilizado en el subnivel MAC de las LAN es propio de las redes:";
 choices[74]= new Array();
 choices[74][0] = "Ethernet";
 choices[74][1] = "Token ring";
 choices[74][2] = "Token bus";
 choices[74][3] = "Se puede emplear en cualquiera de las anteriores";
 answers[74] = 0;
 units[74] = ['112'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4736. ";
 preguntaids[74] = 4736


