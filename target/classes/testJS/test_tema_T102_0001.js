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
//  Id pregunta: 1914 Año de creación de pregunta: 2016
 questions[0]= "1)  EI protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian trance es:";
 choices[0]= new Array();
 choices[0][0] = "OSPF";
 choices[0][1] = "No es adecuado utilizar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas";
 choices[0][2] = "RIP";
 choices[0][3] = "BGP-4";
 answers[0] = 3;
 units[0] = ['102'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1914. ";
 preguntaids[0] = 1914


//  Id pregunta: 4361 Año de creación de pregunta: 2004
 questions[1]= "2)  En un switch ethernet";
 choices[1]= new Array();
 choices[1][0] = "todos los puertos trabajan a la misma velocidad";
 choices[1][1] = "puede adaptarse a las distintas velocidades de los host conectados de manera autom&aacute;tica";
 choices[1][2] = "hace labores de enrutamiento a nivel wan";
 choices[1][3] = "sirve &uacute;nicamente para conectar redes ethernet con token ring";
 answers[1] = 1;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4361. ";
 preguntaids[1] = 4361


//  Id pregunta: 4662 Año de creación de pregunta: 2002
 questions[2]= "3)  Cuando una estaci&oacute;n Token Ring detecta un problema serio en la red:";
 choices[2]= new Array();
 choices[2][0] = "La estaci&oacute;n que lo detecta envia una trama de advertencia ('beacon') que define el dominio del fallo";
 choices[2][1] = "La estaci&oacute;n espera que el servidor local m&aacute;s cercano reconfigure las tablas de direcciones";
 choices[2][2] = "La estaci&oacute;n transmite mensajes exploratorios a sus siguientes vecinos activos";
 choices[2][3] = "La estaci&oacute;n escucha por tr&aacute;fico y si no oye nada, manda testigos a todas las estaciones activas locales (en el anillo)";
 answers[2] = 0;
 units[2] = ['102'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4662. ";
 preguntaids[2] = 4662


//  Id pregunta: 4576 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;les de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos puentes (bridges)?:";
 choices[3]= new Array();
 choices[3][0] = "Analizan la direcci&oacute;n destino del MAC (nivel 2 de OSI), pudiendo efectuar funciones de aprendizaje, filtrado y reenv&iacute;o";
 choices[3][1] = "Pueden interconectar redes tipo 802 que usan niveles 1 y 2 de OSI diferentes, pero no son transparentes a los protocolos de niveles superiores";
 choices[3][2] = "Su rendimiento (medido en paquetes/segundo) es menor que el de los equipos encaminadores (routers)";
 choices[3][3] = "Operan a nivel 3 de OSI, por lo que realizan funciones de filtrado, aislando el tr&aacute;fico de los segmentos conectados";
 answers[3] = 0;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4576. ";
 preguntaids[3] = 4576


//  Id pregunta: 1911 Año de creación de pregunta: 2016
 questions[4]= "5)  En relaci&oacute;n a la direcci&oacute;n MAC, &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[4]= new Array();
 choices[4][0] = "La direcci&oacute;n MAC contiene el c&oacute;digo de fabricante de 24 bits";
 choices[4][1] = "La direcci&oacute;n MAC contiene el c&oacute;digo de identidad de red de 24 bits";
 choices[4][2] = "Es utilizada en el nivel de enlace de datos de la torre de protocolos OSI";
 choices[4][3] = "La direcci&oacute;n MAC contiene el c&oacute;diqo de serie que es elegido por cada fabricante a su discreci&oacute;n.";
 answers[4] = 1;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 1911. ";
 preguntaids[4] = 1911


//  Id pregunta: 1395 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[5]= new Array();
 choices[5][0] = "OSPF";
 choices[5][1] = "RIP";
 choices[5][2] = "BGP";
 choices[5][3] = "EGP";
 answers[5] = 0;
 units[5] = ['102'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1395. ";
 preguntaids[5] = 1395


//  Id pregunta: 4792 Año de creación de pregunta: 2002
 questions[6]= "7)  En el modelo OSI un encaminador o router:";
 choices[6]= new Array();
 choices[6][0] = "Trabaja en el nivel 4";
 choices[6][1] = "Trabaja en el nivel 7";
 choices[6][2] = "Trabaja en el nivel 3";
 choices[6][3] = "Trabaja en el nivel 5";
 answers[6] = 2;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4792. ";
 preguntaids[6] = 4792


//  Id pregunta: 4480 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[7]= new Array();
 choices[7][0] = "El tama&ntilde;o m&aacute;ximo del mensaje a transmitir entre aplicaci&oacute;n origen y destino, depende del tama&ntilde;o m&aacute;ximo del paquete, que viene impuesto por la red";
 choices[7][1] = "No se puede establecer dos circuitos virtuales simult&aacute;neos entere un mismo origen y un mismo destino, ya que la red no podr&iacute;a coordinar dos n&uacute;meros de canal l&oacute;gico con un mismo destino";
 choices[7][2] = "Siempre que se reduzca el tama&ntilde;o de los paquetes, el rendimiento (bytes de informaci&oacute;n transmitidos por unidad de tiempo) disminuir&aacute;, ya que se env&iacute;an los mismo bytes de cabecera, para menos bytes de informaci&oacute;n";
 choices[7][3] = "Todas las respuestas anteriores son falsas";
 answers[7] = 2;
 units[7] = ['102'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4480. ";
 preguntaids[7] = 4480


//  Id pregunta: 4586 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;De que trata el est&aacute;ndar IEEE 802.1.q?:";
 choices[8]= new Array();
 choices[8][0] = "De las VLAN (Virtual Local Area Network)";
 choices[8][1] = "De la capa f&iacute;sica de la red Ethernet";
 choices[8][2] = "No existe dicho est&aacute;ndar";
 choices[8][3] = "Del canal D de la RDSI";
 answers[8] = 0;
 units[8] = ['102'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4586. ";
 preguntaids[8] = 4586


//  Id pregunta: 4470 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de circuitos?:";
 choices[9]= new Array();
 choices[9][0] = "No es necesario establecer una llamada";
 choices[9][1] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[9][2] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[9][3] = "No existe ning&uacute;n tipo de encaminamiento";
 answers[9] = 2;
 units[9] = ['102'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4470. ";
 preguntaids[9] = 4470


//  Id pregunta: 4325 Año de creación de pregunta: 2004
 questions[10]= "11)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[10]= new Array();
 choices[10][0] = "CSMA/CD";
 choices[10][1] = "Token bus";
 choices[10][2] = "Token Ring";
 choices[10][3] = "Aloha ranurado";
 answers[10] = 1;
 units[10] = ['102'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4325. Similar a examen TIC SS A 2003";
 preguntaids[10] = 4325


//  Id pregunta: 4857 Año de creación de pregunta: 2002
 questions[11]= "12)  En una red local con un &uacute;nico servidor de ficheros, existen problemas de tiempo de respuesta pues un excesivo n&uacute;mero de nodos intenta acceso al mismo. Indique cual de las opciones siguientes resuelve t&eacute;cnica y econ&oacute;micamente el problema:";
 choices[11]= new Array();
 choices[11][0] = "La utilizaci&oacute;n de un gateway entre dos segmentos de la red";
 choices[11][1] = "La utilizaci&oacute;n de un router entre los dos segmentos de la red";
 choices[11][2] = "La utilizaci&oacute;n de un bridge entre los dos segmentos de la red";
 choices[11][3] = "Ning&uacute;n dispositivo de comunicaciones resolver&iacute;a el problema";
 answers[11] = 3;
 units[11] = ['102'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4857. ";
 preguntaids[11] = 4857


//  Id pregunta: 4903 Año de creación de pregunta: 2002
 questions[12]= "13)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[12]= new Array();
 choices[12][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[12][1] = "Al nivel 1 : F&iacute;sico";
 choices[12][2] = "Al nivel 3 : Red";
 choices[12][3] = "Al nivel 5 : Enlace";
 answers[12] = 1;
 units[12] = ['102', '114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4903. ";
 preguntaids[12] = 4903


//  Id pregunta: 4592 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;En qu&eacute; consiste la funci&oacute;n de filtrado en un bridge?:";
 choices[13]= new Array();
 choices[13][0] = "Permitir el paso de determinadas frecuencias &uacute;nicamente";
 choices[13][1] = "Eliminaci&oacute;n de las tramas err&oacute;neas";
 choices[13][2] = "Separaci&oacute;n del tr&aacute;fico de dos subredes";
 choices[13][3] = "Los bridges (puentes) no tienen capacidad de filtrado, ya que operan al nivel de enlace";
 answers[13] = 2;
 units[13] = ['102'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4592. ";
 preguntaids[13] = 4592


//  Id pregunta: 1386 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[14]= new Array();
 choices[14][0] = "224.0.0.4";
 choices[14][1] = "224.0.0.5";
 choices[14][2] = "224.0.0.9";
 choices[14][3] = "224.0.0.22";
 answers[14] = 2;
 units[14] = ['102'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1386. ";
 preguntaids[14] = 1386


//  Id pregunta: 4837 Año de creación de pregunta: 2002
 questions[15]= "16)  En sistemas de informaci&oacute;n y comunicaciones, RED es el acr&oacute;nimo de:";
 choices[15]= new Array();
 choices[15][0] = "Random Early Detection";
 choices[15][1] = "Rapid Early Detection";
 choices[15][2] = "Requested Evaluation datagram";
 choices[15][3] = "Response Evaluation and Detection";
 answers[15] = 0;
 units[15] = ['102'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4837. ";
 preguntaids[15] = 4837


//  Id pregunta: 4459 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;A qu&eacute; se denomina 'modem nulo'?:";
 choices[16]= new Array();
 choices[16][0] = "A un modem para transportar datos por lineas digitales y que por lo tanto no modula ni demodula nada";
 choices[16][1] = "A un modem sin microprocesador de control";
 choices[16][2] = "A un cable inversor que conecta dos ETDs entre s&iacute;";
 choices[16][3] = "A un equipo que modula y demodula una se&ntilde;al nula";
 answers[16] = 2;
 units[16] = ['102'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4459. ";
 preguntaids[16] = 4459


//  Id pregunta: 4413 Año de creación de pregunta: 2002
 questions[17]= "18)  En los dispositivos de red se utiliza el 'buffering' para:";
 choices[17]= new Array();
 choices[17][0] = "Almacenar temporalmente los datos recibidos hasta que puedan ser procesados";
 choices[17][1] = "Informar al origen del tr&aacute;fico de que deber&iacute;a usarse control de flujo";
 choices[17][2] = "Emitir el ACK de las tranmisiones que se han recibido";
 choices[17][3] = "Impedir que los dispositivos fuente (emisores) transmitan datos a menos que se les pida expl&iacute;citamente";
 answers[17] = 0;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4413. ";
 preguntaids[17] = 4413


//  Id pregunta: 4706 Año de creación de pregunta: 2002
 questions[18]= "19)  Entre los equipos de interconexi&oacute;n de redes:";
 choices[18]= new Array();
 choices[18][0] = "Los bridges operan a nivel de red";
 choices[18][1] = "Los repetidores operan a nivel de MAC";
 choices[18][2] = "Los bridges realizan funciones de autoaprendizaje, filtrado y reenvio";
 choices[18][3] = "Las pasarelas o gateways son elementos de interconexi&oacute;n independientes del protocolo de nivel de red";
 answers[18] = 2;
 units[18] = ['102'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4706. ";
 preguntaids[18] = 4706


//  Id pregunta: 1523 Año de creación de pregunta: 2016
 questions[19]= "20)  Dentro de los m&eacute;todos de acceso al medio en redes, &iquest;cu&aacute;l de las siguientes t&eacute;cnicas se encuentra dentro de las denominadas de contienda con escucha?";
 choices[19]= new Array();
 choices[19][0] = "Token ring.";
 choices[19][1] = "CSMA.";
 choices[19][2] = "Aloha puro.";
 choices[19][3] = "Aloha ranurado.";
 answers[19] = 1;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1523. ";
 preguntaids[19] = 1523


//  Id pregunta: 1207 Año de creación de pregunta: 2016
 questions[20]= "21)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[20]= new Array();
 choices[20][0] = "Jitter.";
 choices[20][1] = "Delay.";
 choices[20][2] = "Round Trip delay Time.";
 choices[20][3] = "Latencia.";
 answers[20] = 2;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1207. ";
 preguntaids[20] = 1207


//  Id pregunta: 1635 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique cu&aacute;l de los siguientes NO es un protocolo de encaminamiento IGP (Interior Gateway Protocol)";
 choices[21]= new Array();
 choices[21][0] = "RIP";
 choices[21][1] = "BGP";
 choices[21][2] = "OSPF";
 choices[21][3] = "IGRP";
 answers[21] = 1;
 units[21] = ['102'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1635. ";
 preguntaids[21] = 1635


//  Id pregunta: 1905 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes protocolos no se ejecuta en el nivel de aplicaci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "RIP, Protocolo de informaci&oacute;n de enrutamiento";
 choices[22][1] = "NFS, sistema de archivos de red";
 choices[22][2] = "ARP, protocolo de resoluci&oacute;n de direcciones";
 choices[22][3] = "FTP, Protocolo de transferencia de Ficheros";
 answers[22] = 2;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1905. ";
 preguntaids[22] = 1905


//  Id pregunta: 1849 Año de creación de pregunta: 2016
 questions[23]= "24)  Desde un punto de vista conceptual, indique cu&aacute;l de las siguientes afirmaciones sobre encaminadores (routers) y conmutadores (switches) es correcta:";
 choices[23]= new Array();
 choices[23][0] = "Los encaminadores son para redes ATM y los conmutadores para redes Ethernet.";
 choices[23][1] = "Los encaminadores trabajan en el nivel 3 y los conmutadores en el nivel 2.";
 choices[23][2] = "Ambos trabajan en los niveles 2 y 3, pero los conmutadores realizan tareas de filtrado IP.";
 choices[23][3] = "Son exactamente lo mismo.";
 answers[23] = 1;
 units[23] = ['102'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1849. ";
 preguntaids[23] = 1849


//  Id pregunta: 875 Año de creación de pregunta: 2016
 questions[24]= "25)  Un protocolo para la conexi&oacute;n entre sistemas aut&oacute;nomos es:";
 choices[24]= new Array();
 choices[24][0] = "ELP4 (Exterior linking protocol).";
 choices[24][1] = "SGP2 (Standalone gateway protocol).";
 choices[24][2] = "BGP4 (Border gateway protocol).";
 choices[24][3] = "SLP2 (Standalone linking protocol).";
 answers[24] = 2;
 units[24] = ['102'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 875. AGE A2 2015";
 preguntaids[24] = 875


//  Id pregunta: 4449 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;A qu&eacute; est&aacute;ndar IEEE 802 corresponde el siguiente grupo de caracter&iacute;sticas: &lsquo;Mecanismo de acceso al medio por paso de testigo; topolog&iacute;a en bus l&oacute;gico; contiene las interfaces entre MAC y LLC, as&iacute; como las primitivas de servicio entre MAC y nivel f&iacute;sico&rsquo;?";
 choices[25]= new Array();
 choices[25][0] = "802.2";
 choices[25][1] = "802.4";
 choices[25][2] = "802.6";
 choices[25][3] = "No existe ning&uacute;n est&aacute;ndar IEEE que trate esas caracter&iacute;sticas";
 answers[25] = 3;
 units[25] = ['102'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4449. El IEE 802.4 es un paso de testigo en Bus (Topolog&iacute;a F&iacute;sica Bus y L&oacute;gica en Anillo)";
 preguntaids[25] = 4449


//  Id pregunta: 4490 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si hablamos de sincronizaci&oacute;n?:";
 choices[26]= new Array();
 choices[26][0] = "En la transmisi&oacute;n as&iacute;ncrona, la sincronizaci&oacute;n se realiza mediante los bits de arranque y parada";
 choices[26][1] = "En la transmisi&oacute;n s&iacute;ncrona, la sincronizaci&oacute;n se restablece con cada car&aacute;cter retransmitido";
 choices[26][2] = "Las se&ntilde;ales is&oacute;cronas requieren una sincronizaci&oacute;n interna, de modo que las sucesivas muestras se transmitan a intervalos fijos a partir de la primera";
 choices[26][3] = "En una red plesi&oacute;crona los equipos se sincronizan a partir de relojes independientes de similar precisi&oacute;n y estabilidad";
 answers[26] = 1;
 units[26] = ['102'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4490. ";
 preguntaids[26] = 4490


//  Id pregunta: 4469 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para un red de conmutaci&oacute;n de paquetes en modo datagrama?:";
 choices[27]= new Array();
 choices[27][0] = "Un paquete enviado posteriormente no puede llegar antes que otro enviado con anterioridad";
 choices[27][1] = "La red reordena los paquetes y los entrega en el destino en el orden de llegada";
 choices[27][2] = "Cada paquete lleva en la cabecera informaci&oacute;n acerca del origen y el destino del paquete";
 choices[27][3] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 answers[27] = 2;
 units[27] = ['102'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4469. ";
 preguntaids[27] = 4469


//  Id pregunta: 4819 Año de creación de pregunta: 2002
 questions[28]= "29)  En las redes locales, &iquest;qu&eacute; funciones tienen los repetidores?:";
 choices[28]= new Array();
 choices[28][0] = "Repiten los paquetes como se&ntilde;ales el&eacute;ctricas de una red a otra";
 choices[28][1] = "Repiten los paquetes incompletos para que sean reenviados completos";
 choices[28][2] = "Eliminan el ruido de las se&ntilde;ales en la l&iacute;nea y emiten los paquetes regenerados";
 choices[28][3] = "Repiten y ampl&iacute;an las se&ntilde;ales el&eacute;ctricas, incluyendo el ruido";
 answers[28] = 2;
 units[28] = ['102'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4819. ";
 preguntaids[28] = 4819


//  Id pregunta: 4471 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[29]= new Array();
 choices[29][0] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[29][1] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[29][2] = "No existe ning&uacute;n tipo de encaminamiento";
 choices[29][3] = "Todos los  paquetes siguen el mismo camino por la red";
 answers[29] = 0;
 units[29] = ['102'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4471. ";
 preguntaids[29] = 4471


//  Id pregunta: 1235 Año de creación de pregunta: 2016
 questions[30]= "31)  En conmutaci&oacute;n de paquetes, &iquest;cu&aacute;l de las siguientes afirmaciones con respecto a la multiplexaci&oacute;n por divisi&oacute;n de tiempo es correcta?";
 choices[30]= new Array();
 choices[30][0] = "En la multiplexaci&oacute;n s&iacute;ncrona no hay preasignaci&oacute;n de ranuras temporales.";
 choices[30][1] = "En la multiplexaci&oacute;n as&iacute;ncrona se asigna siempre la misma ranura de tiempo a cada dispositivo.";
 choices[30][2] = "En la multiplexaci&oacute;n s&iacute;ncrona el n&uacute;mero de dispositivos debe ser igual al n&uacute;mero de ranuras de tiempo disponibles.";
 choices[30][3] = "En la multiplexaci&oacute;n as&iacute;ncrona el retardo es variable.";
 answers[30] = 3;
 units[30] = ['102'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1235. ";
 preguntaids[30] = 1235


//  Id pregunta: 4319 Año de creación de pregunta: 2004
 questions[31]= "32)  Los Bridges:";
 choices[31]= new Array();
 choices[31][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[31][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[31][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[31][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[31] = 3;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4319. Examen TIC MAP B 2004";
 preguntaids[31] = 4319


//  Id pregunta: 4559 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de encaminamiento o enrutamiento?:";
 choices[32]= new Array();
 choices[32][0] = "OSPF";
 choices[32][1] = "RIP";
 choices[32][2] = "ORP";
 choices[32][3] = "IS-IS";
 answers[32] = 2;
 units[32] = ['102'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4559. ";
 preguntaids[32] = 4559


//  Id pregunta: 4647 Año de creación de pregunta: 2002
 questions[33]= "34)  BGP es un 'exterior gateway protocol'. &iquest;Qu&eacute; significa esto?:";
 choices[33]= new Array();
 choices[33][0] = "Usa algoritmos propietarios para calcular la ruta &oacute;ptima";
 choices[33][1] = "Es un protocolo que se utiliza para acceder dentro de Internet y ser reconocido por los firewalls";
 choices[33][2] = "Filtra el tr&aacute;fico de las fuentes exteriores antes de encaminarlo";
 choices[33][3] = "Encamina o enruta el tr&aacute;fico entre sistemas aut&oacute;nomos diferentes";
 answers[33] = 3;
 units[33] = ['102'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4647. ";
 preguntaids[33] = 4647


//  Id pregunta: 1915 Año de creación de pregunta: 2016
 questions[34]= "35)  En relaci&oacute;n al protocolo OSPF";
 choices[34]= new Array();
 choices[34][0] = "Presenta como gran inconveniente el elevado tiempo de convergencia";
 choices[34][1] = "Es un protocolo de tipo vector distancia";
 choices[34][2] = "Solo env&iacute;a actualizaciones cuando hay cambios de topolog&iacute;a.";
 choices[34][3] = "Es un protocolo de rutas est&aacute;ticas";
 answers[34] = 2;
 units[34] = ['102'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1915. ";
 preguntaids[34] = 1915


//  Id pregunta: 4904 Año de creación de pregunta: 2002
 questions[35]= "36)  La operaci&oacute;n de gateways se entronca en:";
 choices[35]= new Array();
 choices[35][0] = "El nivel de enlace";
 choices[35][1] = "El nivel de aplicaci&oacute;n";
 choices[35][2] = "Interconexi&oacute;n de sistemas homogeneos";
 choices[35][3] = "Encaminadores y puentes";
 answers[35] = 1;
 units[35] = ['102'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4904. ";
 preguntaids[35] = 4904


//  Id pregunta: 4735 Año de creación de pregunta: 2002
 questions[36]= "37)  El protocolo ARP:";
 choices[36]= new Array();
 choices[36][0] = "S&oacute;lo funciona si hay un proxy configurado";
 choices[36][1] = "Permite relacionar puertos TCP y direcciones IP";
 choices[36][2] = "Permite relacionar puertos TCP  y direcciones MAC";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = 3;
 units[36] = ['102'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4735. ";
 preguntaids[36] = 4735


//  Id pregunta: 4447 Año de creación de pregunta: 2002
 questions[37]= "38)  &quot;Bus lineal al que est&aacute;n conectadas varias estaciones y que termina en los extremos&quot; se corresponde con la definici&oacute;n de:";
 choices[37]= new Array();
 choices[37][0] = "intranet";
 choices[37][1] = "segmento";
 choices[37][2] = "pasarela";
 choices[37][3] = "puente";
 answers[37] = 1;
 units[37] = ['102'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4447. ";
 preguntaids[37] = 4447


//  Id pregunta: 874 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; protocolo utiliza traceroute para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[38]= new Array();
 choices[38][0] = "Ping";
 choices[38][1] = "ICMP";
 choices[38][2] = "PPP";
 choices[38][3] = "BGP";
 answers[38] = 1;
 units[38] = ['102'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 874. AGE A2 2015";
 preguntaids[38] = 874


//  Id pregunta: 4806 Año de creación de pregunta: 2002
 questions[39]= "40)  En Ethernet, se usa un transceptor (transceiver) para:";
 choices[39]= new Array();
 choices[39][0] = "Para hacer una conexi&oacute;n de red de un dispositivo a un servidor";
 choices[39][1] = "Establecer conexiones entre tarjetas de interfaz de red";
 choices[39][2] = "Convertir se&ntilde;ales recibidas por una puerta para transmitirlas por otra";
 choices[39][3] = "Unir un cable desde una estaci&oacute;n al medio f&iacute;sico que constituye la red";
 answers[39] = 3;
 units[39] = ['102'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4806. ";
 preguntaids[39] = 4806


//  Id pregunta: 1902 Año de creación de pregunta: 2016
 questions[40]= "41)  Para limitar el impacto negativo del tr&aacute;fico de broadcast, &iquest;Cu&aacute;l de las siguientes medidas NO es v&aacute;lida?:";
 choices[40]= new Array();
 choices[40][0] = "Dividir la red en subredes";
 choices[40][1] = "Implementar dispositivos de capa 3 para la comunicaci&oacute;n entre subredes";
 choices[40][2] = "Dividir la red en VLANs";
 choices[40][3] = "Sustituir Concentrador (hub) por conmutadores (switch)";
 answers[40] = 3;
 units[40] = ['102'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1902. ";
 preguntaids[40] = 1902


//  Id pregunta: 4500 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[41]= new Array();
 choices[41][0] = "El camino queda establecido durante toda la comunicaci&oacute;n";
 choices[41][1] = "La longitud de las unidades de datos est&aacute; limitada";
 choices[41][2] = "Se recogen en el est&aacute;ndar X.25 de la ITU-T";
 choices[41][3] = "Se han definido dos modos b&aacute;sicos de operaci&oacute;n: datagrama y circuito virtual";
 answers[41] = 0;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4500. ";
 preguntaids[41] = 4500


//  Id pregunta: 4439 Año de creación de pregunta: 2002
 questions[42]= "43)  Una Bridge CA:";
 choices[42]= new Array();
 choices[42][0] = "Es un dispositivo de nivel 3 (Red) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inal&aacute;mbrica y una terrestre";
 choices[42][1] = "Es un dispositivo de nivel 2 (Enlace) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inal&aacute;mbrica y una terrestre";
 choices[42][2] = "Es una autoridad de certificaci&oacute;n que tiene certificados cruzados con otras muchas CA, pero que no expide certificados, simplemente vale para hacer que los de las otras CA sean interoperables entre si";
 choices[42][3] = "Todas son falsas";
 answers[42] = 2;
 units[42] = ['102'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4439. ";
 preguntaids[42] = 4439


//  Id pregunta: 1388 Año de creación de pregunta: 2016
 questions[43]= "44)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[43]= new Array();
 choices[43][0] = "Cabecera.";
 choices[43][1] = "Checksum.";
 choices[43][2] = "Registros de recursos de Respuesta.";
 choices[43][3] = "Registros de recursos de Autoridad.";
 answers[43] = 1;
 units[43] = ['102'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1388. ";
 preguntaids[43] = 1388


//  Id pregunta: 4491 Año de creación de pregunta: 2002
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si nos referimos a la modulaci&oacute;n?:";
 choices[44]= new Array();
 choices[44][0] = "La modulaci&oacute;n/desmodulaci&oacute;n se realiza asociando los s&iacute;mbolos de un alfabeto a distintas se&ntilde;ales anal&oacute;gicas";
 choices[44][1] = "La modulaci&oacute;n FSK no afecta a la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[44][2] = "La modulaci&oacute;n QPSK act&uacute;a sobre la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[44][3] = "La modulaci&oacute;n QAM act&uacute;a sobre la fase y la amplitud de la se&ntilde;al anal&oacute;gica";
 answers[44] = 2;
 units[44] = ['102'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4491. ";
 preguntaids[44] = 4491


//  Id pregunta: 1756 Año de creación de pregunta: 2016
 questions[45]= "46)  Un uso muy ineficaz de la capacidad de conexi&oacute;n y un retardo m&iacute;nimo son caracter&iacute;sticas t&iacute;picas de:";
 choices[45]= new Array();
 choices[45][0] = "Conmutaci&oacute;n de circuitos.";
 choices[45][1] = "Conmutaci&oacute;n de paquetes.";
 choices[45][2] = "Conmutaci&oacute;n de mensajes.";
 choices[45][3] = "Conmutaci&oacute;n de tiempo.";
 answers[45] = 0;
 units[45] = ['102'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 1756. ";
 preguntaids[45] = 1756


//  Id pregunta: 4835 Año de creación de pregunta: 2002
 questions[46]= "47)  En sistemas de informaci&oacute;n y comunicaciones, INAP es acr&oacute;nimo de:";
 choices[46]= new Array();
 choices[46][0] = "Integration Network Application Protocol";
 choices[46][1] = "Intelligent Network Application Protocol";
 choices[46][2] = "Inverse Naming Address Protocol";
 choices[46][3] = "Intelligent Network Application Part";
 answers[46] = 3;
 units[46] = ['102'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4835. ";
 preguntaids[46] = 4835


//  Id pregunta: 1848 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento est&aacute; basado en el estado de los enlaces?";
 choices[47]= new Array();
 choices[47][0] = "RIP versi&oacute;n 1";
 choices[47][1] = "OSPF";
 choices[47][2] = "BGP";
 choices[47][3] = "RIP versi&oacute;n 2";
 answers[47] = 1;
 units[47] = ['102'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1848. ";
 preguntaids[47] = 1848


//  Id pregunta: 4331 Año de creación de pregunta: 2004
 questions[48]= "49)  Qu&eacute; es cierto respecto a los dispositivos bridge y switch de interconexi&oacute;n de redes lcoales";
 choices[48]= new Array();
 choices[48][0] = "El switch opera en el nivel 2 y el bridge en el nivel 3 del modelo OSI";
 choices[48][1] = "Los switches se suelen emplear para interconectar servidores y los bridges para interconectar LANs";
 choices[48][2] = "Un switch pueden interconectar distintos tipos de LAN y un bridge no";
 choices[48][3] = "En los switches cada puerto forma su dominio de colisi&oacute;n propio mientras que los bridges tienen varios dominios de colisi&oacute;n por puerto.";
 answers[48] = 1;
 units[48] = ['102'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4331. ";
 preguntaids[48] = 4331


//  Id pregunta: 1755 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique de los siguientes protocolos de encaminamiento cu&aacute;l se engloba dentro de la categor&iacute;a EGP (Exterior Gateway Protocols):";
 choices[49]= new Array();
 choices[49][0] = "IS-IS (Intermediate System to Intermediate System)";
 choices[49][1] = "OSPF (Open Shortest Path First)";
 choices[49][2] = "BGP (Border Gateway Protocol)";
 choices[49][3] = "RIP (Routing Information Protocol)";
 answers[49] = 2;
 units[49] = ['102'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 1755. ";
 preguntaids[49] = 1755


//  Id pregunta: 873 Año de creación de pregunta: 2016
 questions[50]= "51)  El algoritmo de grafos que resuelve el problema de encontrar los caminos m&aacute;s cortos a partir de un origen dado al resto de los v&eacute;rtices de un grafo pesado se denomina:";
 choices[50]= new Array();
 choices[50][0] = "Algoritmo de Prim.";
 choices[50][1] = "Algoritmo de Kruskal.";
 choices[50][2] = "Algoritmo de Dijkstra.";
 choices[50][3] = "Algoritmo de Floyd-Warshall.";
 answers[50] = 2;
 units[50] = ['102'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 873. AGE A2 2015";
 preguntaids[50] = 873


//  Id pregunta: 4611 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;Qu&eacute; es un puente (bridge) en el mundo de las comunicaciones?:";
 choices[51]= new Array();
 choices[51][0] = "Un equipo que enlaza varias redes a nivel 3 de OSI";
 choices[51][1] = "Un equipo que enlaza varias redes a nivel 4 de OSI";
 choices[51][2] = "Un equipo que enlaza varias redes a nivel 5 de OSI";
 choices[51][3] = "Nada de lo anterior";
 answers[51] = 3;
 units[51] = ['102'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4611. ";
 preguntaids[51] = 4611


//  Id pregunta: 1662 Año de creación de pregunta: 2016
 questions[52]= "53)  El encaminamiento mediante algoritmos que se ejecutan en los nodos de la red con los &uacute;ltimos datos que han recibido sobre su estado y convergen r&aacute;pidamente optimizando sus nuevas rutas se denomina:";
 choices[52]= new Array();
 choices[52][0] = "Encaminamiento adaptativo distribuido.";
 choices[52][1] = "Encaminamiento adaptativo centralizado.";
 choices[52][2] = "Encaminamiento adaptativo aislado.";
 choices[52][3] = "Encaminamiento determin&iacute;stico est&aacute;tico.";
 answers[52] = 0;
 units[52] = ['102'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1662. ";
 preguntaids[52] = 1662


//  Id pregunta: 1916 Año de creación de pregunta: 2016
 questions[53]= "54)  En relaci&oacute;n al protocolo OSPF, &iquest;cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[53]= new Array();
 choices[53][0] = "Divide el &aacute;rea en sistemas aut&oacute;nomos";
 choices[53][1] = "Es un protocolo jer&aacute;rquico";
 choices[53][2] = "Es un protocolo de pasarela interne";
 choices[53][3] = "Es un protocolo din&aacute;mico";
 answers[53] = 0;
 units[53] = ['102'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 1916. ";
 preguntaids[53] = 1916


//  Id pregunta: 4561 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes podr&iacute;a ser usado en un sistema aut&oacute;nomo para enrutamiento?:";
 choices[54]= new Array();
 choices[54][0] = "BGP (Border Gateway Protocol)";
 choices[54][1] = "EGP (Exterior Gateway Protocol)";
 choices[54][2] = "AGP (Autonomous Gateway Protocol)";
 choices[54][3] = "RIP (Routing Information Protocol)";
 answers[54] = 3;
 units[54] = ['102'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4561. ";
 preguntaids[54] = 4561


//  Id pregunta: 4473 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Cu&aacute;l de estas afirmaciones no es cierta para un red de conmutaci&oacute;n de paquetes en modo circuito virtual?:";
 choices[55]= new Array();
 choices[55][0] = "La red se asegura de que el orden de entrega de los paquetes es correcto";
 choices[55][1] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 choices[55][2] = "El circuito l&oacute;gico establecido dura lo que dura la llamada";
 choices[55][3] = "Es necesario liberar el circuito virtual permanente para finalizar la llamada";
 answers[55] = 3;
 units[55] = ['102'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4473. ";
 preguntaids[55] = 4473


//  Id pregunta: 4858 Año de creación de pregunta: 2002
 questions[56]= "57)  En una red local en la que se tienen problemas de capacidad de la misma se ha decidido dividirla en dos segmentos. Indique cual de las opciones siguientes es la soluci&oacute;n t&eacute;cnica y econ&oacute;micamente m&aacute;s adecuada:";
 choices[56]= new Array();
 choices[56][0] = "Utilizaci&oacute;n de un gateway entre los segmentos";
 choices[56][1] = "Utilizaci&oacute;n de un repetidor entre los segmentos";
 choices[56][2] = "Utilizaci&oacute;n de un switch entre los segmentos";
 choices[56][3] = "Todas las opciones son igualmente adecuadas";
 answers[56] = 2;
 units[56] = ['102'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4858. ";
 preguntaids[56] = 4858


//  Id pregunta: 4350 Año de creación de pregunta: 2004
 questions[57]= "58)  Los bridges:";
 choices[57]= new Array();
 choices[57][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[57][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[57][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[57][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[57] = 3;
 units[57] = ['102'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4350. ";
 preguntaids[57] = 4350


//  Id pregunta: 4846 Año de creación de pregunta: 2002
 questions[58]= "59)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[58]= new Array();
 choices[58][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[58][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[58][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[58][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[58] = 2;
 units[58] = ['102', '114'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4846. ";
 preguntaids[58] = 4846


//  Id pregunta: 1387 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[59]= new Array();
 choices[59][0] = "Ping";
 choices[59][1] = "ICMP";
 choices[59][2] = "PPP";
 choices[59][3] = "RSVP";
 answers[59] = 1;
 units[59] = ['102'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 1387. ";
 preguntaids[59] = 1387


//  Id pregunta: 1744 Año de creación de pregunta: 2016
 questions[60]= "61)  Una Unidad de Acceso Multiestaci&oacute;n o MAU es un dispositivo que administra la comunicaci&oacute;n entre los equipos conectados a una red de topolog&iacute;a:";
 choices[60]= new Array();
 choices[60][0] = "En anillo";
 choices[60][1] = "En Bus";
 choices[60][2] = "En Estrella";
 choices[60][3] = "En Bucle";
 answers[60] = 0;
 units[60] = ['102'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1744. ";
 preguntaids[60] = 1744


//  Id pregunta: 4464 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;C&oacute;mo se identifica generalmente una estaci&oacute;n Ethernet?:";
 choices[61]= new Array();
 choices[61][0] = "Mediante la direcci&oacute;n Ethernet que el gestor de la red le asigna";
 choices[61][1] = "Mediante la configuraci&oacute;n de su sistema operativo para configurar su identificaci&oacute;n en la red";
 choices[61][2] = "Mediante la asignaci&oacute;n por el fabricante de la tarjeta de red de una direcci&oacute;n Ethernet &uacute;nica y exclusiva";
 choices[61][3] = "Mediante la asignaci&oacute;n aleatoria que cada usuario de la estaci&oacute;n puede realizar";
 answers[61] = 2;
 units[61] = ['102'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4464. La direcci&oacute;n MAC ,compuesta de 48 bits, identifica un&iacute;vocamente a la tarjeta de red. Los 24 primeros bits son asignados por el IEE y los 24 &uacute;ltimos por el fabricante";
 preguntaids[61] = 4464


//  Id pregunta: 872 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la especificaci&oacute;n del protocolo de encaminamiento BGP-4:";
 choices[62]= new Array();
 choices[62][0] = "En E-BGP, los prefijos que aprende un router de un vecino no pueden ser anunciados a otro vecino mediante I-BGP.";
 choices[62][1] = "Un prefijo aprendido de un vecino mediante I-BGP no puede reanunciarse a otro vecino por I-BGP.";
 choices[62][2] = "Es un protocolo que funciona sobre TCP por el puerto 169.";
 choices[62][3] = "Es un protocolo que funciona sobre UDP por el puerto 169.";
 answers[62] = 1;
 units[62] = ['102'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 872. AGE A2 2015";
 preguntaids[62] = 872


//  Id pregunta: 4734 Año de creación de pregunta: 2002
 questions[63]= "64)  El protocolo ARP es:";
 choices[63]= new Array();
 choices[63][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[63][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[63][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[63][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[63] = 2;
 units[63] = ['102'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4734. ";
 preguntaids[63] = 4734


//  Id pregunta: 4653 Año de creación de pregunta: 2002
 questions[64]= "65)  Con referencia a los modems:";
 choices[64]= new Array();
 choices[64][0] = "La se&ntilde;al de entrada modula a la portadora, siendo ambas digitales";
 choices[64][1] = "Realizan los procesos de codificaci&oacute;n, modulaci&oacute;n, demodulaci&oacute;n, recepci&oacute;n y decodificaci&oacute;n";
 choices[64][2] = "Realizan s&oacute;lo los procesos de modulaci&oacute;n y demodulaci&oacute;n";
 choices[64][3] = "La se&ntilde;al de entrada puede ser anal&oacute;gica o digital y la moduladora es anal&oacute;gica para adaptarse a la l&iacute;nea de transmisi&oacute;n";
 answers[64] = 1;
 units[64] = ['102'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4653. ";
 preguntaids[64] = 4653


//  Id pregunta: 1219 Año de creación de pregunta: 2016
 questions[65]= "66)  Cu&aacute;l de las siguientes afirmaciones sobre el protocolo de enrutamiento OSPF (Open Shortest Path First) es INCORRECTA:";
 choices[65]= new Array();
 choices[65][0] = "OSPF enruta paquetes bas&aacute;ndose &uacute;nicamente en la direcci&oacute;n IP destino.";
 choices[65][1] = "Utiliza un m&eacute;todo basado en el algoritmo de Dijkstra para el c&aacute;lculo de la ruta &oacute;ptima.";
 choices[65][2] = "En OSPF un sistema aut&oacute;nomo (AS) es un conjunto de redes bajo una administraci&oacute;n com&uacute;n.";
 choices[65][3] = "Al operar OSPF internamente en un sistema aut&oacute;nomo (AS), no puede enviar ni recibir rutas a otros AS.";
 answers[65] = 3;
 units[65] = ['102'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1219. ";
 preguntaids[65] = 1219


//  Id pregunta: 4448 Año de creación de pregunta: 2002
 questions[66]= "67)  &quot;Red con un alto grado de cohesi&oacute;n y transparencia que hace que el usuario no vea a las funciones como repartidas entre los distintos elementos de la red&quot;. Es la definici&oacute;n de:";
 choices[66]= new Array();
 choices[66][0] = "Sistema abierto";
 choices[66][1] = "Sistema distribuido";
 choices[66][2] = "Intranet";
 choices[66][3] = "Sistema aut&oacute;nomo";
 answers[66] = 1;
 units[66] = ['102'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4448. ";
 preguntaids[66] = 4448


//  Id pregunta: 4748 Año de creación de pregunta: 2002
 questions[67]= "68)  El protocolo OSPF:";
 choices[67]= new Array();
 choices[67][0] = "Es un protocolo de encaminamiento como el RIP";
 choices[67][1] = "Significa 'Open Systems Protocol Family'";
 choices[67][2] = "No usa el algoritmo tipo de estados de enlaces (link-state) para encaminar los datagramas";
 choices[67][3] = "Se describe en la RFC942 (Request for Comments)";
 answers[67] = 0;
 units[67] = ['102'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4748. ";
 preguntaids[67] = 4748


//  Id pregunta: 4648 Año de creación de pregunta: 2002
 questions[68]= "69)  BGP es un protocolo que se usa para:";
 choices[68]= new Array();
 choices[68][0] = "Tratar de encontrar un sistema del cual conocemos el nombre y no la direcci&oacute;n de red en redes OSI (Broadcasting Generation Protocol)";
 choices[68][1] = "Es un protocolo de intercambio de informaci&oacute;n en modo binario entre dos entidades de transporte en el modelo OSI, para que las pasen directamente de modo transparente a la capa de Sesi&oacute;n. (Binary Gateway Protocol)";
 choices[68][2] = "Es un protocolo de enrutamiento o encaminamiento por el que se intercambian informaci&oacute;n los routers en las fronteras de los sistemas aut&oacute;nomos en redes TCP/IP (Border Gateway Protocol)";
 choices[68][3] = "Es un protocolo por el que se convierte a nivel de transporte fragmentos (o TPDUs) de Appletalk a fragmentos TCP (Bellcore Gateway Protocol)";
 answers[68] = 2;
 units[68] = ['102'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4648. ";
 preguntaids[68] = 4648


//  Id pregunta: 4776 Año de creación de pregunta: 2002
 questions[69]= "70)  En comunicaciones de datos, &iquest;sabe lo que es  'overrun'?:";
 choices[69]= new Array();
 choices[69][0] = "Cuando el sistema operativo o el procesador de comunicaciones paran por un exceso de temperatura";
 choices[69][1] = "Un switch que permite al sistema tener m&aacute;s rendimiento (bits /seg) bajo ciertas condiciones";
 choices[69][2] = "Una situaci&oacute;n en la que algunos paquetes pueden perderse debido a que llegan m&aacute;s r&aacute;pidamente de lo que pueden ser procesados";
 choices[69][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[69] = 2;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4776. ";
 preguntaids[69] = 4776


//  Id pregunta: 4488 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de los circuitos virtuales?:";
 choices[70]= new Array();
 choices[70][0] = "Un circuito virtual es un enlace dedicado o temporal entre dos o m&aacute;s estaciones finales en una malla de conmutaci&oacute;n de paquetes";
 choices[70][1] = "Un circuito virtual proporciona una sesi&oacute;n orientada a conexi&oacute;n entre dos puntos finales";
 choices[70][2] = "En circuito virtual conmutado las conexiones duran s&oacute;lo mientras se necesiten y se desconectan cuando la sesi&oacute;n se completa";
 choices[70][3] = "Por un mismo circuito virtual conmutado puede establecerse simult&aacute;neamente enlaces con diferentes estaciones finales de la red";
 answers[70] = 3;
 units[70] = ['102'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4488. ";
 preguntaids[70] = 4488


//  Id pregunta: 1912 Año de creación de pregunta: 2016
 questions[71]= "72)  En las redes de comunicaciones basadas en conmutaci&oacute;n de paquetes, la t&eacute;cnica de circuitos virtuales se caracteriza porque:";
 choices[71]= new Array();
 choices[71][0] = "Cada paquete se transporta de forma independiente sin referencia a los precedentes";
 choices[71][1] = "La ruta de origen a destino puede ser diferente, pero los paquetes llegan en orden";
 choices[71][2] = "Se dispone de un circuito dedicado";
 choices[71][3] = "La ruta es para toda la comunicaci&oacute;n";
 answers[71] = 3;
 units[71] = ['102'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1912. ";
 preguntaids[71] = 1912


//  Id pregunta: 4862 Año de creación de pregunta: 2002
 questions[72]= "73)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[72]= new Array();
 choices[72][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[72][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[72][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[72][3] = "limitaciones de la distancia a cubrir";
 answers[72] = 1;
 units[72] = ['102'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4862. ";
 preguntaids[72] = 4862


//  Id pregunta: 4730 Año de creación de pregunta: 2002
 questions[73]= "74)  Indique cu&aacute;l de las siguientes informaciones sobre la interconexi&oacute;n de redes locales desde el punto de vista del hardware es correcta:";
 choices[73]= new Array();
 choices[73][0] = "Las funciones del Enrutador consiste en compatibilizar dos medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[73][1] = "Los Repetidores operan posibilitando la conexi&oacute;n de elementos de red a nivel de enlace dentro del subnivel MAC (Medium Access Control)";
 choices[73][2] = "El Puente compatibiliza elementos de dos redes locales a nivel de red";
 choices[73][3] = "Las Pasarelas operan a nivel de transporte o en niveles superiores";
 answers[73] = 3;
 units[73] = ['102'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4730. ";
 preguntaids[73] = 4730


//  Id pregunta: 4537 Año de creación de pregunta: 2002
 questions[74]= "75)  El algoritmo conocido como Spanning Tree Algorithm se usa:";
 choices[74]= new Array();
 choices[74][0] = "Para optimizar los caminos usados en redes complejas con routers";
 choices[74][1] = "Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos";
 choices[74][2] = "Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla";
 choices[74][3] = "Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estaci&oacute;n no conteste (puede estar apagada o estropeada)";
 answers[74] = 1;
 units[74] = ['102'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4537. ";
 preguntaids[74] = 4537


