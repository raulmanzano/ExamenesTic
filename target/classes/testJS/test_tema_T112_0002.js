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
//  Id pregunta: 5068 Año de creación de pregunta: 2002
 questions[0]= "1)  Si alguien habla de &quot;la arquitectura DNA&quot; se est&aacute; refiriendo a:";
 choices[0]= new Array();
 choices[0][0] = "Un modelo de inteligencia artificial basado en algoritmos gen&eacute;ticos";
 choices[0][1] = "Una determinada arquitectura de red registrada por una compa&ntilde;&iacute;a privada";
 choices[0][2] = "Una determinada arquitectura de red normalizada por ISO";
 choices[0][3] = "Un tipo de procesador RISC";
 answers[0] = 1;
 units[0] = ['112'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5068. ";
 preguntaids[0] = 5068


//  Id pregunta: 5059 Año de creación de pregunta: 2002
 questions[1]= "2)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[1]= new Array();
 choices[1][0] = "El mantenimiento del anillo se hace de forma centralizada en token ring y distribuida en token bus";
 choices[1][1] = "El mantenimiento del anillo se hace de forma centralizada en token ring y token bus";
 choices[1][2] = "El mantenimiento del anillo se hace de forma distribuida en token ring y token bus";
 choices[1][3] = "El mantenimiento del anillo se hace de forma centralizada en token bus y distribuida en token ring";
 answers[1] = 0;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5059. ";
 preguntaids[1] = 5059


//  Id pregunta: 5500 Año de creación de pregunta: 2007
 questions[2]= "3)  La tecnolog&iacute;a dominante hoy en d&iacute;a en el campo de las redes locales es:";
 choices[2]= new Array();
 choices[2][0] = "Ethernet.";
 choices[2][1] = "Arcnet";
 choices[2][2] = "Arpanet.";
 choices[2][3] = "Sarenet";
 answers[2] = 0;
 units[2] = ['112'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5500. ";
 preguntaids[2] = 5500


//  Id pregunta: 8807 Año de creación de pregunta: 2013
 questions[3]= "4)  &iquest;Cu&aacute;l de estas afirmaciones es cierta en relaci&oacute;n con las redes de &aacute;rea local?";
 choices[3]= new Array();
 choices[3][0] = "El subnivel LLC se encarga del control l&oacute;gico del enlace, por lo que gestiona el tipo de acceso al medio.";
 choices[3][1] = "El subnivel MAC controla el acceso al medio, creando una trama que se adapta a la topolog&iacute;a de la red f&iacute;sica.";
 choices[3][2] = "El subnivel MAC se encarga del control l&oacute;gico del enlace.";
 choices[3][3] = "El subnivel MAC es el responsable de las funciones de entramado, control de errores y control de flujo.";
 answers[3] = 1;
 units[3] = ['112'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8807. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";
 preguntaids[3] = 8807


//  Id pregunta: 7195 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Qu&eacute; protocolo define las VLAN (Virtual LAN)?";
 choices[4]= new Array();
 choices[4][0] = "RFC 1032";
 choices[4][1] = "IEEE 802.3u";
 choices[4][2] = "IEEE 802.1q";
 choices[4][3] = "IEEE 802.11";
 answers[4] = 2;
 units[4] = ['112'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 7195. Castilla La Mancha 2009";
 preguntaids[4] = 7195


//  Id pregunta: 6465 Año de creación de pregunta: 2003
 questions[5]= "6)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.21 del IEEE?";
 choices[5]= new Array();
 choices[5][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[5][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[5][2] = "Resilient Packet Ring";
 choices[5][3] = "Traspaso entre redes";
 answers[5] = 3;
 units[5] = ['112'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 6465. ";
 preguntaids[5] = 6465


//  Id pregunta: 4966 Año de creación de pregunta: 2002
 questions[6]= "7)  Las estaciones de una red Token Ring transmiten utilizando la t&eacute;cnica de:";
 choices[6]= new Array();
 choices[6][0] = "Detecci&oacute;n de transmisiones";
 choices[6][1] = "Detecci&oacute;n de colisiones";
 choices[6][2] = "Paso de testigo";
 choices[6][3] = "Reintentos aleatorios";
 answers[6] = 2;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4966. ";
 preguntaids[6] = 4966


//  Id pregunta: 5171 Año de creación de pregunta: 2003
 questions[7]= "8)  En las redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[7]= new Array();
 choices[7][0] = "Un ordenador se conecta con el siguiente y el &uacute;ltimo con el primero, formando un circuito cerrado";
 choices[7][1] = "Existe un nodo ra&iacute;z del que cuelgan uno o varios nodos";
 choices[7][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[7][3] = "Cada uno de los nodos est&aacute; conectado con todos los dem&aacute;s";
 answers[7] = 2;
 units[7] = ['112'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5171. ";
 preguntaids[7] = 5171


//  Id pregunta: 8808 Año de creación de pregunta: 2013
 questions[8]= "9)  De entre los diferentes tipos de CSMA (Carrier Sense Multiple Access), se puede afirmar:";
 choices[8]= new Array();
 choices[8][0] = "En CSMA 1-persistente, si el medio est&aacute; libre, el emisor transmite, si no, espera un tiempo aleatorio.";
 choices[8][1] = "En CSMA p-Persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre.";
 choices[8][2] = "En CSMA no-persistente, si el emisor tiene el canal libre, transmite con probabilidad &quot;p&quot; y si detecta que existe alguien transmitiendo, espera un tiempo aleatorio con probabilidad &quot;q=(1-p)&quot;";
 choices[8][3] = "En CSMA 1-persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre";
 answers[8] = 3;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8808. ";
 preguntaids[8] = 8808


//  Id pregunta: 5313 Año de creación de pregunta: 2006
 questions[9]= "10)  La red geogr&aacute;ficamente dispersa se llama";
 choices[9]= new Array();
 choices[9][0] = "WAN";
 choices[9][1] = "LAN";
 choices[9][2] = "SAN";
 choices[9][3] = "PAN";
 answers[9] = 0;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5313. ";
 preguntaids[9] = 5313


//  Id pregunta: 8478 Año de creación de pregunta: 2011
 questions[10]= "11)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet";
 choices[10]= new Array();
 choices[10][0] = "Acceden al medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[10][1] = "Acceden al medio de transmisi&oacute;n en per&iacute;odos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[10][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por lo que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones.";
 choices[10][3] = "Nunca acceden si tras un primer intento se detect&oacute; una colisi&oacute;n.";
 answers[10] = 0;
 units[10] = ['112'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8478. Examen UPM A2 2011";
 preguntaids[10] = 8478


//  Id pregunta: 6154 Año de creación de pregunta: 2003
 questions[11]= "12)  En la estructura de la trama del protocolo HDLC (&quot;High level Data Link Control&quot;) el n&uacute;mero de bits del delimitador del comienzo de la trama es:";
 choices[11]= new Array();
 choices[11][0] = "Variable";
 choices[11][1] = "8";
 choices[11][2] = "16";
 choices[11][3] = "32";
 answers[11] = 1;
 units[11] = ['112'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6154. Examen TIC A1 MAP 2007";
 preguntaids[11] = 6154


//  Id pregunta: 8231 Año de creación de pregunta: 2011
 questions[12]= "13)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[12]= new Array();
 choices[12][0] = "802.6";
 choices[12][1] = "802.7";
 choices[12][2] = "802.8";
 choices[12][3] = "802.9";
 answers[12] = 2;
 units[12] = ['112'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8231. Examen UPM A2 2011";
 preguntaids[12] = 8231


//  Id pregunta: 7713 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutador multinivel Gigabit Ethernet?";
 choices[13]= new Array();
 choices[13][0] = "Bus compartido.";
 choices[13][1] = "Memoria compartida.";
 choices[13][2] = "I/O compartida.";
 choices[13][3] = "Crossbar.";
 answers[13] = 0;
 units[13] = ['112'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7713. Map 2007";
 preguntaids[13] = 7713


//  Id pregunta: 8105 Año de creación de pregunta: 2011
 questions[14]= "15)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[14]= new Array();
 choices[14][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[14][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[14][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[14][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[14] = 0;
 units[14] = ['112'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8105. Examen TIC A2 2010 interna";
 preguntaids[14] = 8105


//  Id pregunta: 8815 Año de creación de pregunta: 2013
 questions[15]= "16)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[15]= new Array();
 choices[15][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[15][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[15][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[15][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[15] = 0;
 units[15] = ['112'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8815. ";
 preguntaids[15] = 8815


//  Id pregunta: 7737 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes grupos de trabajo del IEEE dedica su actividad al campo de las redes de &aacute;rea metropolitana?";
 choices[16]= new Array();
 choices[16][0] = "802.3.";
 choices[16][1] = "802.4.";
 choices[16][2] = "802.5.";
 choices[16][3] = "802.6.";
 answers[16] = 3;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7737. ";
 preguntaids[16] = 7737


//  Id pregunta: 5083 Año de creación de pregunta: 2002
 questions[17]= "18)  Topolog&iacute;a de una red (indicar la respuesta err&oacute;nea):";
 choices[17]= new Array();
 choices[17][0] = "Se distingue entre topolog&iacute;a f&iacute;sica y topolog&iacute;a l&oacute;gica";
 choices[17][1] = "En una configuraci&oacute;n en estrella se pueden utilizar medios y velocidades de transmisi&oacute;n diferentes a lo largo de la red";
 choices[17][2] = "En una configuraci&oacute;n en Bus, todas las estaciones est&aacute;n conectadas a un &uacute;nico canal de comunicaciones";
 choices[17][3] = "En una configuraci&oacute;n en anillo, la aver&iacute;a de una estaci&oacute;n no afecta al servicio";
 answers[17] = 3;
 units[17] = ['112'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5083. ";
 preguntaids[17] = 5083


//  Id pregunta: 6439 Año de creación de pregunta: 2003
 questions[18]= "19)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[18]= new Array();
 choices[18][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[18][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[18][2] = "Las respuestas a) y b) son verdaderas";
 choices[18][3] = "Ninguna es verdadera";
 answers[18] = 2;
 units[18] = ['112'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 6439. ";
 preguntaids[18] = 6439


//  Id pregunta: 6561 Año de creación de pregunta: 2003
 questions[19]= "20)  Indique cu&aacute;l de las siguientes opciones no est&aacute; relacionada con la Web Sem&aacute;ntica:";
 choices[19]= new Array();
 choices[19][0] = "RDF (Resource Description Framework).";
 choices[19][1] = "OWL (Web Ontology Language).";
 choices[19][2] = "XML (Extensible Markup Language)";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 3;
 units[19] = ['112'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 6561. ";
 preguntaids[19] = 6561


//  Id pregunta: 5062 Año de creación de pregunta: 2002
 questions[20]= "21)  Se&ntilde;ale la afirmaci&oacute;n verdadera en un sistema de transmisi&oacute;n de datos:";
 choices[20]= new Array();
 choices[20][0] = "El equipo terminal de datos dialoga con la l&iacute;nea de transmisi&oacute;n para emitir la se&ntilde;al";
 choices[20][1] = "El equipo terminal del circuito de datos es el origen o destino final de la comunicaci&oacute;n";
 choices[20][2] = "Un m&oacute;dem es un ejemplo de un equipo terminal de datos";
 choices[20][3] = "El equipo terminal de datos dialoga con el equipo terminal del circuito de datos pas&aacute;ndose la informaci&oacute;n que se quiere transmitir/recibir";
 answers[20] = 3;
 units[20] = ['112'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5062. ";
 preguntaids[20] = 5062


//  Id pregunta: 8020 Año de creación de pregunta: 2011
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una herramienta de benchmarking de aplicaciones web:";
 choices[21]= new Array();
 choices[21][0] = "JMeter.";
 choices[21][1] = "OpenSTA.";
 choices[21][2] = "ApacheBench.";
 choices[21][3] = "Junit.";
 answers[21] = 3;
 units[21] = ['112'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8020. Examen TIC A2 2010";
 preguntaids[21] = 8020


//  Id pregunta: 7704 Año de creación de pregunta: 2010
 questions[22]= "23)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas que circulan por la red?";
 choices[22]= new Array();
 choices[22][0] = "1522 bytes.";
 choices[22][1] = "1500 bytes.";
 choices[22][2] = "1496 bytes.";
 choices[22][3] = "1518 bytes.";
 answers[22] = 0;
 units[22] = ['112'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7704. Map 2007";
 preguntaids[22] = 7704


//  Id pregunta: 5169 Año de creación de pregunta: 2003
 questions[23]= "24)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[23]= new Array();
 choices[23][0] = "MAN (Metropolitan Area Network";
 choices[23][1] = "LAN (Local Area Network)";
 choices[23][2] = "SAN (State Areal Network)";
 choices[23][3] = "WAN (Wide Area Network)";
 answers[23] = 2;
 units[23] = ['112'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5169. ";
 preguntaids[23] = 5169


//  Id pregunta: 8814 Año de creación de pregunta: 2013
 questions[24]= "25)  Los niveles de servicio de Resilient Packet Ring son:";
 choices[24]= new Array();
 choices[24][0] = "Clase A: Servicio best effort";
 choices[24][1] = "Clase B: Con latencia y jitter predecible.";
 choices[24][2] = "Clase C: Para tr&aacute;fico con requisitos de baja latencia y bajo jitter.";
 choices[24][3] = "Todas las respuestas son correctas.";
 answers[24] = 1;
 units[24] = ['112'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8814. ";
 preguntaids[24] = 8814


//  Id pregunta: 5023 Año de creación de pregunta: 2002
 questions[25]= "26)  Para usar DNS en una LAN que utiliza Traducciones de Direcciones (NAT) en el firewall:";
 choices[25]= new Array();
 choices[25][0] = "Es recomendable un DNS interno";
 choices[25][1] = "Es recomendable ofrecer el servicio DNS en el firewall";
 choices[25][2] = "Es necesario utilizar un DNS externo al existir NAT";
 choices[25][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[25] = 0;
 units[25] = ['112'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5023. ";
 preguntaids[25] = 5023


//  Id pregunta: 4987 Año de creación de pregunta: 2002
 questions[26]= "27)  Los m&eacute;todos de control de acceso al medio de transmisi&oacute;n en las redes de &aacute;rea local describen las reglas que gobiernan cu&aacute;ndo los dispositivos est&aacute;n autorizados a transmitir, evit&aacute;ndose as&iacute; las colisiones.  Estos m&eacute;todos son:";
 choices[26]= new Array();
 choices[26][0] = "CSMA/CD y CSMA/CA";
 choices[26][1] = "Selecci&oacute;n o encuesta (&ldquo;polling&rdquo;), contienda o contenci&oacute;n y reserva o paso de testigo (&ldquo;token passing&rdquo;)";
 choices[26][2] = "Ethernet, IEEE 802.3 y IEEE 802.5";
 choices[26][3] = "Bus, &aacute;rbol y anillo";
 answers[26] = 1;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4987. ";
 preguntaids[26] = 4987


//  Id pregunta: 7642 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[27]= new Array();
 choices[27][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red.";
 choices[27][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n de subred complementaria en cada paquete.";
 choices[27][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores).";
 choices[27][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red.";
 answers[27] = 2;
 units[27] = ['112'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 7642. Map 2006";
 preguntaids[27] = 7642


//  Id pregunta: 5063 Año de creación de pregunta: 2002
 questions[28]= "29)  Se&ntilde;ale la norma de IEEE que se refiere a redes LAN con CSMA/CD:";
 choices[28]= new Array();
 choices[28][0] = "802.1";
 choices[28][1] = "802.2";
 choices[28][2] = "802.3";
 choices[28][3] = "802.4";
 answers[28] = 2;
 units[28] = ['112'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5063. ";
 preguntaids[28] = 5063


//  Id pregunta: 5205 Año de creación de pregunta: 2006
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n verdadera acerca de la Multiplexaci&oacute;n CWDM:";
 choices[29]= new Array();
 choices[29][0] = "El plan de longitudes de onda define 18, pero s&oacute;lo son &uacute;tiles 16.";
 choices[29][1] = "La separaci&oacute;n entre longitudes de onda es de 50 nm y la m&aacute;xima distancia alcanza los 100 km si se emplean todos los canales.";
 choices[29][2] = "Las conexiones simult&aacute;neas que pueden transmitirse en una fibra &oacute;ptica tienen que cumplir el mismo protocolo a fin de impedir la interferencia entre canales.";
 choices[29][3] = "Puede transportar ATM, pero es incompatible con Gigabit Ethernet";
 answers[29] = 0;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5205. ";
 preguntaids[29] = 5205


//  Id pregunta: 7623 Año de creación de pregunta: 2010
 questions[30]= "31)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientes protocolos:";
 choices[30]= new Array();
 choices[30][0] = "ARP (Address Resolution Protocol).";
 choices[30][1] = "RARP (Reverse Address Resolution Protocol).";
 choices[30][2] = "BOOTP (Bootstrap Protocol).";
 choices[30][3] = "IGMP (Internet Group Management Protocol).";
 answers[30] = 2;
 units[30] = ['112'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7623. Map 2006";
 preguntaids[30] = 7623


//  Id pregunta: 5400 Año de creación de pregunta: 2006
 questions[31]= "32)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE";
 choices[31]= new Array();
 choices[31][0] = "802.9";
 choices[31][1] = "802.1";
 choices[31][2] = "802.11";
 choices[31][3] = "802.12";
 answers[31] = 0;
 units[31] = ['112'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5400. ";
 preguntaids[31] = 5400


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


//  Id pregunta: 5206 Año de creación de pregunta: 2006
 questions[33]= "34)  Sobre FDDI:";
 choices[33]= new Array();
 choices[33][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[33][1] = "Se conoce como X3T9.3";
 choices[33][2] = "Su equivalente en cobre es CDDI";
 choices[33][3] = "Todas son verdaderas";
 answers[33] = 2;
 units[33] = ['112'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5206. ";
 preguntaids[33] = 5206


//  Id pregunta: 8196 Año de creación de pregunta: 2011
 questions[34]= "35)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[34]= new Array();
 choices[34][0] = "Por encaminamiento IP y basada en ATM";
 choices[34][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[34][2] = "Mediante solicitud-reserva y por contienda.";
 choices[34][3] = "En estrella y en &aacute;rbol.";
 answers[34] = 2;
 units[34] = ['102', '112'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8196. Examen TIC A2 2010 interna";
 preguntaids[34] = 8196


//  Id pregunta: 8069 Año de creación de pregunta: 2011
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes normas del IEEE se utiliza para el control de acceso a red basada en puertos?";
 choices[35]= new Array();
 choices[35][0] = "802.1x";
 choices[35][1] = "802.3.ay";
 choices[35][2] = "802.11";
 choices[35][3] = "802.3.q";
 answers[35] = 0;
 units[35] = ['112'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8069. ";
 preguntaids[35] = 8069


//  Id pregunta: 7935 Año de creación de pregunta: 2011
 questions[36]= "37)  Un agente SNMP env&iacute;a traps a un sistema administrador de red a trav&eacute;s del puerto:";
 choices[36]= new Array();
 choices[36][0] = "162";
 choices[36][1] = "126";
 choices[36][2] = "161";
 choices[36][3] = "25";
 answers[36] = 0;
 units[36] = ['112'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7935. Examen TIC A2 2010";
 preguntaids[36] = 7935


//  Id pregunta: 6224 Año de creación de pregunta: 2003
 questions[37]= "38)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[37]= new Array();
 choices[37][0] = "IEEE 802.2";
 choices[37][1] = "IEEE 802.3";
 choices[37][2] = "IEEE 802.4";
 choices[37][3] = "IEEE 802.5";
 answers[37] = 1;
 units[37] = ['112'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6224. Examen TIC A Castilla La Mancha 2007";
 preguntaids[37] = 6224


//  Id pregunta: 5170 Año de creación de pregunta: 2003
 questions[38]= "39)  En las redes basadas en servidores centrales que utilizan el modelo b&aacute;sico cliente-servidor:";
 choices[38]= new Array();
 choices[38][0] = "Un ordenador pone sus recursos a disposici&oacute;n del resto de ordenadores de la red, de forma que cada estaci&oacute;n recupera datos del servidor y los procesa como si fuesen locales";
 choices[38][1] = "Cada ordenador conectado a la red puede compartir la informaci&oacute;n y los recursos determinados previamente con los dem&aacute;s ordenadores de la red";
 choices[38][2] = "Los ordenadores utilizan enlaces a trav&eacute;s de los puertos serie o paralelo para transferir archivos o compartir perif&eacute;ricos";
 choices[38][3] = "Los ordenadores se encuentran conectados permanentemente entre s&iacute;, a trav&eacute;s de un sistema cerrado punto a punto";
 answers[38] = 0;
 units[38] = ['112'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5170. ";
 preguntaids[38] = 5170


//  Id pregunta: 5084 Año de creación de pregunta: 2002
 questions[39]= "40)  Tras ser extraidos los datos por la estaci&oacute;n destino en una red Token Ring &oacute; IEEE 802.5:";
 choices[39]= new Array();
 choices[39][0] = "Se devuelve un acuse de recibo ('acknowledgment')  antes de liberar el testigo";
 choices[39][1] = "La trama de datos circula hasta completar una vuelta entera hasta que es eliminada por la estaci&oacute;n emisora";
 choices[39][2] = "Se altera el testigo (que se convierte en una secuencia de cabecera de trama)";
 choices[39][3] = "La estaci&oacute;n a&ntilde;ade informaci&oacute;n adicional al testigo antes de retransmitir la trama";
 answers[39] = 1;
 units[39] = ['112'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5084. ";
 preguntaids[39] = 5084


//  Id pregunta: 5203 Año de creación de pregunta: 2006
 questions[40]= "41)  En las tramas 802.3 el pre&aacute;mbulo est&aacute; formado por:";
 choices[40]= new Array();
 choices[40][0] = "Un patr&oacute;n alternativo de unos y ceros";
 choices[40][1] = "El flag de sincronizaci&oacute;n 01111110";
 choices[40][2] = "El tipo de protocolo de nivel superior";
 choices[40][3] = "El c&oacute;digo de redundancia c&iacute;clica";
 answers[40] = 0;
 units[40] = ['112'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5203. ";
 preguntaids[40] = 5203


//  Id pregunta: 6098 Año de creación de pregunta: 2003
 questions[41]= "42)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[41]= new Array();
 choices[41][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet";
 choices[41][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet";
 choices[41][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree)";
 choices[41][3] = "De la especificaci&oacute;n 1000Base-T";
 answers[41] = 1;
 units[41] = ['112'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6098. Examen TIC A1 MAP 2007";
 preguntaids[41] = 6098


//  Id pregunta: 6462 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.17 del IEEE?";
 choices[42]= new Array();
 choices[42][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[42][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[42][2] = "Resilient Packet Ring";
 choices[42][3] = "Traspaso entre redes";
 answers[42] = 2;
 units[42] = ['112'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 6462. ";
 preguntaids[42] = 6462


//  Id pregunta: 6383 Año de creación de pregunta: 2003
 questions[43]= "44)  Diga cu&aacute;l de las siguientes afirmaciones es cierta";
 choices[43]= new Array();
 choices[43][0] = "En las WAN los retardos son altos, por la gran distancia que cubre";
 choices[43][1] = "Las WAN son las LAN inal&aacute;mbricas (Wireless).";
 choices[43][2] = "Las LAN, MAN y WAN son la misma cosa, solo cambia la distancia que abarcan";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = 0;
 units[43] = ['112'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 6383. Examen 2006 JCYL";
 preguntaids[43] = 6383


//  Id pregunta: 5257 Año de creación de pregunta: 2006
 questions[44]= "45)  El protocolo de transporte TCP, est&aacute;ndar de internet, NO tiene entre sus caracter&iacute;sticas";
 choices[44]= new Array();
 choices[44][0] = "la entrega fiable de paquetes";
 choices[44][1] = "la detecci&oacute;n y el control de la congesti&oacute;n";
 choices[44][2] = "es orientado a conexi&oacute;n";
 choices[44][3] = "su RFC es 793";
 answers[44] = 1;
 units[44] = ['112', '100'];
 blocks[44] = ['B4', 'B3'];
 comments[44] = "Id Pregunta: 5257. ";
 preguntaids[44] = 5257


//  Id pregunta: 6464 Año de creación de pregunta: 2003
 questions[45]= "46)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.19 del IEEE?";
 choices[45]= new Array();
 choices[45][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[45][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[45][2] = "Resilient Packet Ring";
 choices[45][3] = "Traspaso entre redes";
 answers[45] = 1;
 units[45] = ['112'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 6464. ";
 preguntaids[45] = 6464


//  Id pregunta: 6677 Año de creación de pregunta: 2009
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes opciones describe correctamente la estructura de una direcci&oacute;n MAC?";
 choices[46]= new Array();
 choices[46][0] = "C&oacute;digo de red de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits";
 choices[46][1] = "C&oacute;digo del fabricante de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits";
 choices[46][2] = "C&oacute;digo del fabricante de 24 bits m&aacute;s c&oacute;digo de serie de 24 bits";
 choices[46][3] = "Identidad de red de 24 bits m&aacute;s identidad de host de 24 bits";
 answers[46] = 2;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 6677. MAP 2008 A1";
 preguntaids[46] = 6677


//  Id pregunta: 5060 Año de creación de pregunta: 2002
 questions[47]= "48)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los servicios de red:";
 choices[47]= new Array();
 choices[47][0] = "Los servicios de red orientados a conexi&oacute;n implican el uso de un encaminamiento &uacute;nico durante toda la duraci&oacute;n de una conexi&oacute;n.  El fallo de un dispositivo en red en cualquier punto a lo largo del encaminamiento seleccionado provocar&aacute; un fallo en la conex";
 choices[47][1] = "Los servicios de red no orientados a conexi&oacute;n no predeterminan el encaminamiento de los datos ni la secuencia de los paquetes de datos transmitidos.  Los paquetes de datos pueden ser encaminados sorteando fallos de dispositivos en red, y los recursos de r";
 choices[47][2] = "En los servicios de red no orientados a conexi&oacute;n, los paquetes de datos (datagramas) son recibidos en el mismo orden en que fueron transmitidos";
 choices[47][3] = "Los servicios de red no orientados a conexi&oacute;n son &uacute;tiles para la transmisi&oacute;n de paquetes de datos que permiten distintas demoras de propagaci&oacute;n y el reordenamiento de la secuencia de paquetes de datos en recepci&oacute;n";
 answers[47] = 2;
 units[47] = ['112'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5060. ";
 preguntaids[47] = 5060


//  Id pregunta: 6054 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes redes no admite asignar niveles de prioridad en el tr&aacute;fico transmitido?:";
 choices[48]= new Array();
 choices[48][0] = "802.6.";
 choices[48][1] = "802.3.";
 choices[48][2] = "802.4.";
 choices[48][3] = "802.5.";
 answers[48] = 1;
 units[48] = ['112'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 6054. TIC B 2007";
 preguntaids[48] = 6054


//  Id pregunta: 6326 Año de creación de pregunta: 2003
 questions[49]= "50)  802.13 es el est&aacute;ndar IEEE referente a";
 choices[49]= new Array();
 choices[49][0] = "USB sin hilos";
 choices[49][1] = "WiMax";
 choices[49][2] = "Bluetooth";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = 3;
 units[49] = ['112'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6326. ";
 preguntaids[49] = 6326


//  Id pregunta: 5076 Año de creación de pregunta: 2002
 questions[50]= "51)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[50]= new Array();
 choices[50][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[50][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[50][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red";
 choices[50][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[50] = 0;
 units[50] = ['112'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5076. ";
 preguntaids[50] = 5076


//  Id pregunta: 7695 Año de creación de pregunta: 2010
 questions[51]= "52)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[51]= new Array();
 choices[51][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet.";
 choices[51][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet.";
 choices[51][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree).";
 choices[51][3] = "De la especificaci&oacute;n 1000Base-T.";
 answers[51] = 1;
 units[51] = ['112'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7695. Map 2007";
 preguntaids[51] = 7695


//  Id pregunta: 6461 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as permiten la transmisi&oacute;n de datos sobre una infraestructura de fibra &oacute;ptica para una red de &aacute;rea metropolitana?";
 choices[52]= new Array();
 choices[52][0] = "DQDB";
 choices[52][1] = "CDDI";
 choices[52][2] = "HIPPI";
 choices[52][3] = "PDDI";
 answers[52] = 0;
 units[52] = ['112'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 6461. ";
 preguntaids[52] = 6461


//  Id pregunta: 4965 Año de creación de pregunta: 2002
 questions[53]= "54)  Las diversas tecnolog&iacute;as usadas en red local y metropolitanas se han popularizado mediante diversos nombres y normas. Indique la opci&oacute;n correcta o si lo son todas ellas:";
 choices[53]= new Array();
 choices[53][0] = "Las redes Token Ring se caracterizan por tener una topolog&iacute;a en anillo l&oacute;gico y la norma que cumple es IEEE 802.4";
 choices[53][1] = "La red FDDI est&aacute; definida como una red en anillo f&iacute;sico y est&aacute; amparada por la norma ISO-9314";
 choices[53][2] = "Las redes Token Bus se caracterizan por tener una topolog&iacute;a en anillo f&iacute;sico y estar amparadas por la norma IEEE 802.3";
 choices[53][3] = "Todas las respuestas anteriores son ciertas";
 answers[53] = 1;
 units[53] = ['112'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4965. ";
 preguntaids[53] = 4965


//  Id pregunta: 6460 Año de creación de pregunta: 2003
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al Resilient Packet Ring?";
 choices[54]= new Array();
 choices[54][0] = "Es una tecnolog&iacute;a de nivel 2";
 choices[54][1] = "Es el est&aacute;ndar 802.17";
 choices[54][2] = "Est&aacute; basado en una topolog&iacute;a de anillo dual";
 choices[54][3] = "Est&aacute; orientada a servicios s&iacute;ncronos";
 answers[54] = 3;
 units[54] = ['112'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 6460. ";
 preguntaids[54] = 6460


//  Id pregunta: 6140 Año de creación de pregunta: 2003
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes grupos de trabajo del IEEE dedica su actividad al campo de las redes de &aacute;rea metropolitana?:";
 choices[55]= new Array();
 choices[55][0] = "802.3";
 choices[55][1] = "802.4";
 choices[55][2] = "802.5";
 choices[55][3] = "802.6";
 answers[55] = 3;
 units[55] = ['112'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 6140. Examen TIC A1 MAP 2007";
 preguntaids[55] = 6140


//  Id pregunta: 8107 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Qu&eacute; tipo de codificaci&oacute;n se utiliza en las redes Ethernet?";
 choices[56]= new Array();
 choices[56][0] = "London";
 choices[56][1] = "Liverpool.";
 choices[56][2] = "Manchester.";
 choices[56][3] = "Boston.";
 answers[56] = 2;
 units[56] = ['112'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8107. Examen TIC A2 2010 interna";
 preguntaids[56] = 8107


//  Id pregunta: 5022 Año de creación de pregunta: 2002
 questions[57]= "58)  Para una red de conmutaci&oacute;n de circuitos, &iquest;qu&eacute; tipo de encaminamiento no utilizar&iacute;a?:";
 choices[57]= new Array();
 choices[57][0] = "Encaminamiento fijo";
 choices[57][1] = "Encaminamiento aleatorio";
 choices[57][2] = "Encaminamiento adaptativo";
 choices[57][3] = "Encaminamiento por inundaci&oacute;n";
 answers[57] = 3;
 units[57] = ['112'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5022. ";
 preguntaids[57] = 5022


//  Id pregunta: 8406 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[58]= new Array();
 choices[58][0] = "En notaci&oacute;n decimal.";
 choices[58][1] = "En notaci&oacute;n hexadecimal.";
 choices[58][2] = "En notaci&oacute;n octal.";
 choices[58][3] = "En notaci&oacute;n binaria";
 answers[58] = 1;
 units[58] = ['112'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 8406. Operador Ayto. Madrid 2010";
 preguntaids[58] = 8406


//  Id pregunta: 8811 Año de creación de pregunta: 2013
 questions[59]= "60)  Una red Ethernet que sigue la especificaci&oacute;n 10GBASE-ER:";
 choices[59]= new Array();
 choices[59][0] = "Funciona sobre par de cobre.";
 choices[59][1] = "Funciona con fibra &oacute;ptica que opera en primera ventana.";
 choices[59][2] = "Funciona con fibra &oacute;ptica que opera en tercera ventana.";
 choices[59][3] = "Utiliza fibra &oacute;ptica multimodo.";
 answers[59] = 2;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8811. ";
 preguntaids[59] = 8811


//  Id pregunta: 7972 Año de creación de pregunta: 2011
 questions[60]= "61)  El protocolo LAPB:";
 choices[60]= new Array();
 choices[60][0] = "Se implementa en la capa de aplicaci&oacute;n del modelo OSI";
 choices[60][1] = "Utiliza tramas con el mismo formato que HDLC";
 choices[60][2] = "Utiliza todo el juego de comandos de HDLC";
 choices[60][3] = "Se implementa en la capa de red del modelo OSI";
 answers[60] = 1;
 units[60] = ['112'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7972. Analista Ayto. Madrid 2010";
 preguntaids[60] = 7972


//  Id pregunta: 8813 Año de creación de pregunta: 2013
 questions[61]= "62)  Resilient Packet Ring";
 choices[61]= new Array();
 choices[61][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[61][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[61][2] = "Es incompatible con Ethernet.";
 choices[61][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[61] = 3;
 units[61] = ['112'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 8813. ";
 preguntaids[61] = 8813


//  Id pregunta: 7267 Año de creación de pregunta: 2010
 questions[62]= "63)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[62]= new Array();
 choices[62][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[62][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[62][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[62][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[62] = 0;
 units[62] = ['112'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7267. ";
 preguntaids[62] = 7267


//  Id pregunta: 8810 Año de creación de pregunta: 2013
 questions[63]= "64)  Una red de anillo en contienda.";
 choices[63]= new Array();
 choices[63][0] = "Nunca se pasa un testigo";
 choices[63][1] = "Lo m&aacute;s razonable es utilizar este m&eacute;todo en situaciones de demanda baja de transmisi&oacute;n.";
 choices[63][2] = "Mejora las prestaciones de la red en situaciones alta demanda de transmisi&oacute;n.";
 choices[63][3] = "Es imposible detectar las colisiones bajo este esquema de funcionamiento.";
 answers[63] = 1;
 units[63] = ['112'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8810. ";
 preguntaids[63] = 8810


//  Id pregunta: 8809 Año de creación de pregunta: 2013
 questions[64]= "65)  Una red utiliza CSMA/CD. Opera a 1 Gbps con un cable de 500 metros de largo sin repetidores. La velocidad de propagaci&oacute;n en el cable es de 200.000 km/s &iquest;Cu&aacute;l es el tama&ntilde;o m&iacute;nimo de la trama?";
 choices[64]= new Array();
 choices[64][0] = "5000 bits";
 choices[64][1] = "10000 bits";
 choices[64][2] = "1250 bytes";
 choices[64][3] = "1000 bits";
 answers[64] = 0;
 units[64] = ['112'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8809. ";
 preguntaids[64] = 8809


//  Id pregunta: 5081 Año de creación de pregunta: 2002
 questions[65]= "66)  TCP utiliza un algoritmo para control de flujo denominado Slow Start . Dicho algoritmo consiste en:";
 choices[65]= new Array();
 choices[65][0] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[65][1] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 choices[65][2] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[65][3] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 answers[65] = 1;
 units[65] = ['112'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5081. ";
 preguntaids[65] = 5081


//  Id pregunta: 7926 Año de creación de pregunta: 2011
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;ade en SNMPv2 con respecto a las de SNMPv1?:";
 choices[66]= new Array();
 choices[66][0] = "Trap.";
 choices[66][1] = "GetResponse.";
 choices[66][2] = "GetBulkRequest.";
 choices[66][3] = "GetNextRequest.";
 answers[66] = 2;
 units[66] = ['112'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7926. Examen TIC A1 2010";
 preguntaids[66] = 7926


//  Id pregunta: 6681 Año de creación de pregunta: 2009
 questions[67]= "68)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes m&oacute;viles inal&aacute;mbricas de banda ancha (MBWA):";
 choices[67]= new Array();
 choices[67][0] = "802. 3";
 choices[67][1] = "802. 11";
 choices[67][2] = "802. 15";
 choices[67][3] = "802. 20";
 answers[67] = 3;
 units[67] = ['112'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 6681. MAP 2008 A1";
 preguntaids[67] = 6681


//  Id pregunta: 8805 Año de creación de pregunta: 2013
 questions[68]= "69)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[68]= new Array();
 choices[68][0] = "40GBASE-KR4";
 choices[68][1] = "4GBASE-SR40";
 choices[68][2] = "40GBASE-SR4";
 choices[68][3] = "40GBASE-LR4";
 answers[68] = 3;
 units[68] = ['106', '112'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 8805. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";
 preguntaids[68] = 8805


//  Id pregunta: 5053 Año de creación de pregunta: 2002
 questions[69]= "70)  Se&ntilde;alar qu&eacute; afirmaci&oacute;n no es correcta. En una red de conmutaci&oacute;n de paquetes para evitar la congesti&oacute;n se puede:";
 choices[69]= new Array();
 choices[69][0] = "Reservar espacio suficiente de almacenamiento en los nodos";
 choices[69][1] = "Descartar paquetes";
 choices[69][2] = "En una red de conmutaci&oacute;n de paquetes no hay congesti&oacute;n";
 choices[69][3] = "Enviar paquetes de contenci&oacute;n";
 answers[69] = 2;
 units[69] = ['112'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5053. ";
 preguntaids[69] = 5053


//  Id pregunta: 8288 Año de creación de pregunta: 2011
 questions[70]= "71)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[70]= new Array();
 choices[70][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[70][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[70][2] = "PoE2.";
 choices[70][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[70] = 0;
 units[70] = ['112'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 8288. Examen TIC A2 2010 interna";
 preguntaids[70] = 8288


//  Id pregunta: 7936 Año de creación de pregunta: 2011
 questions[71]= "72)  Una red administrada a trav&eacute;s de SNMP contempla tres componentes claves. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos?";
 choices[71]= new Array();
 choices[71][0] = "Dispositivos administrados.";
 choices[71][1] = "Agentes.";
 choices[71][2] = "Sistemas administradores de red (NMS).";
 choices[71][3] = "Registro de ubicaci&oacute;n de visitantes (VLR).";
 answers[71] = 3;
 units[71] = ['112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 7936. Examen TIC A2 2010";
 preguntaids[71] = 7936


//  Id pregunta: 7675 Año de creación de pregunta: 2010
 questions[72]= "73)  El protocolo DHCP (&laquo;Dynamic Host Configuration Protocol&raquo;) permite:";
 choices[72]= new Array();
 choices[72][0] = "Resolver la direcci&oacute;n del nombre de un host.";
 choices[72][1] = "Eliminar paquetes TCP (Transmission Control Protocol).";
 choices[72][2] = "Asignar din&aacute;micamente direcciones IP.";
 choices[72][3] = "Enrutar paquetes IP.";
 answers[72] = 2;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7675. Map 2007";
 preguntaids[72] = 7675


//  Id pregunta: 7939 Año de creación de pregunta: 2011
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes NO se encuentra entre los elementos de un Sistema de Gesti&oacute;n de Red?";
 choices[73]= new Array();
 choices[73][0] = "Gestor DHCP.";
 choices[73][1] = "MIB.";
 choices[73][2] = "Agente-SMAP.";
 choices[73][3] = "NMS.";
 answers[73] = 0;
 units[73] = ['112'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7939. Examen TIC A2 2010";
 preguntaids[73] = 7939


//  Id pregunta: 6463 Año de creación de pregunta: 2003
 questions[74]= "75)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.18 del IEEE?";
 choices[74]= new Array();
 choices[74][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[74][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[74][2] = "Resilient Packet Ring";
 choices[74][3] = "Traspaso entre redes";
 answers[74] = 0;
 units[74] = ['112'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 6463. ";
 preguntaids[74] = 6463


