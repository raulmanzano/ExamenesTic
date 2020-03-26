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
//  Id pregunta: 8497 Año de creación de pregunta: 2011
 questions[0]= "1)  Cuando una l&iacute;nea de transmisi&oacute;n cumple la condici&oacute;n de Heaviside:";
 choices[0]= new Array();
 choices[0][0] = "El retardo es m&iacute;nimo.";
 choices[0][1] = "El retardo es m&aacute;ximo.";
 choices[0][2] = "El retardo es constante.";
 choices[0][3] = "No existe retardo";
 answers[0] = 2;
 units[0] = ['102'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8497. Teleco Ayto. Madrid 2010";
 preguntaids[0] = 8497


//  Id pregunta: 8401 Año de creación de pregunta: 2011
 questions[1]= "2)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[1]= new Array();
 choices[1][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[1][1] = "UTP Categor&iacute;a 3.";
 choices[1][2] = "UTP Categor&iacute;a 5 o 6";
 choices[1][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[1] = 2;
 units[1] = ['104'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8401. Operador Ayto. Madrid 2010";
 preguntaids[1] = 8401


//  Id pregunta: 8420 Año de creación de pregunta: 2011
 questions[2]= "3)  Es una caracter&iacute;stica de la fibra &oacute;ptica:";
 choices[2]= new Array();
 choices[2][0] = "Un ancho de banda de 800Mhz.";
 choices[2][1] = "Gran resistencia a interferencias y ruido.";
 choices[2][2] = "El bajo coste de su instalaci&oacute;n.";
 choices[2][3] = "La facilidad de su instalaci&oacute;n";
 answers[2] = 1;
 units[2] = ['106'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8420. Operador Ayto. Madrid 2010";
 preguntaids[2] = 8420


//  Id pregunta: 8285 Año de creación de pregunta: 2011
 questions[3]= "4)  Identificar la descripci&oacute;n del comando IP ERR&Oacute;NEO:";
 choices[3]= new Array();
 choices[3][0] = "NETSTAT: es una herramienta de l&iacute;nea de comandos que muestra un listado de las conexiones activas de un ordenador, tanto entrantes como salientes. Permite mostrar las estad&iacute;sticas de protocolos y las conexiones TCP/IP actuales";
 choices[3][1] = "IPCONFIG: Muestra o actualiza la configuraci&oacute;n de red TCP/IP";
 choices[3][2] = "NBTSTAT: Muestra estad&iacute;sticas del protocolo y conexiones TCP/IP actuales utilizando NBT. NBTStat es una herramienta que resulta de utilidad para solucionar problemas con la resoluci&oacute;n de nombres llevada a cabo por NetBIOS.";
 choices[3][3] = "TRACERT Muestra todas las direcciones IP intermedias por las que pasa un paquete entre el equipo remoto y la direcci&oacute;n IP especificada.";
 answers[3] = 3;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8285. Examen TIC A2 2010 interna";
 preguntaids[3] = 8285


//  Id pregunta: 8368 Año de creación de pregunta: 2011
 questions[4]= "5)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[4]= new Array();
 choices[4][0] = "El nodo iniciador env&iacute;a tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 choices[4][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[4][2] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[4][3] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a todos los nodos adyacentes";
 answers[4] = 0;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8368. Analista Ayto. Madrid 2010";
 preguntaids[4] = 8368


//  Id pregunta: 8243 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;A qu&eacute; componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;?";
 choices[5]= new Array();
 choices[5][0] = "Proxy Server.";
 choices[5][1] = "Account Server.";
 choices[5][2] = "Redirect Server.";
 choices[5][3] = "Registrar Server.";
 answers[5] = 3;
 units[5] = ['122'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8243. Examen UPM A2 2011";
 preguntaids[5] = 8243


//  Id pregunta: 8343 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Qu&eacute; est&aacute;ndar debe de cumplir un sistema de videoconferencia H.323 para poder compartir datos?";
 choices[6]= new Array();
 choices[6][0] = "H.239";
 choices[6][1] = "H.264";
 choices[6][2] = "H.263";
 choices[6][3] = "H.240";
 answers[6] = 0;
 units[6] = ['122'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8343. Examen UC3M 2010";
 preguntaids[6] = 8343


//  Id pregunta: 8494 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Qu&eacute; utilidad tiene en la transmisi&oacute;n por radio el pico de absorci&oacute;n del ox&iacute;geno en 60 Ghz?:";
 choices[7]= new Array();
 choices[7][0] = "Permite la propagaci&oacute;n por conductos .";
 choices[7][1] = "Permite la reutilizaci&oacute;n espacial de frecuencias en esa banda.";
 choices[7][2] = "Permite la propagaci&oacute;n por dispersi&oacute;n en esa banda.";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = 1;
 units[7] = ['108'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8494. Teleco Ayto. Madrid 2010";
 preguntaids[7] = 8494


//  Id pregunta: 8338 Año de creación de pregunta: 2011
 questions[8]= "9)  Si hablamos de virtualizaci&oacute;n &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[8]= new Array();
 choices[8][0] = "La virtualizaci&oacute;n del sistema operativo ofrece un conjunto de librer&iacute;as que hace que las aplicaciones que se ejecutan aparenten que lo hacen en una m&aacute;quina dedicada";
 choices[8][1] = "La virtualizaci&oacute;n del sistema operativo es la mejor soluci&oacute;n para configuraciones heterog&eacute;neas";
 choices[8][2] = "La virtualizaci&oacute;n del sistema operativo hace que las aplicaciones funcionen siempre igual de r&aacute;pido que en el mismo sistema dedicado";
 choices[8][3] = "En emulaci&oacute;n hardware o VMM las aplicaciones no pueden migrarse entre m&aacute;quinas diferentes";
 answers[8] = 0;
 units[8] = ['124'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8338. Examen UC3M 2010";
 preguntaids[8] = 8338


//  Id pregunta: 8233 Año de creación de pregunta: 2011
 questions[9]= "10)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[9]= new Array();
 choices[9][0] = "Capa IP";
 choices[9][1] = "Capa de Aplicaci&oacute;n";
 choices[9][2] = "Capa de Sesi&oacute;n";
 choices[9][3] = "Capa de Transporte";
 answers[9] = 0;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8233. Examen UPM A2 2011";
 preguntaids[9] = 8233


//  Id pregunta: 8400 Año de creación de pregunta: 2011
 questions[10]= "11)  FTP es un protocolo de la pila TCP/IP:";
 choices[10]= new Array();
 choices[10][0] = "Del nivel de Aplicaci&oacute;n.";
 choices[10][1] = "Del nivel de Transporte.";
 choices[10][2] = "Del nivel de Red.";
 choices[10][3] = "De nivel de Sesi&oacute;n";
 answers[10] = 0;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8400. Operador Ayto. Madrid 2010";
 preguntaids[10] = 8400


//  Id pregunta: 8250 Año de creación de pregunta: 2011
 questions[11]= "12)  Un servidor DHCP no puede proveer a un equipo cliente de la configuraci&oacute;n de:";
 choices[11]= new Array();
 choices[11][0] = "M&aacute;scara de subred";
 choices[11][1] = "Tiempo m&aacute;ximo de espera del ARP";
 choices[11][2] = "Servidor SMTP";
 choices[11][3] = "Software antivirus";
 answers[11] = 3;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8250. Examen UPM A2 2011";
 preguntaids[11] = 8250


//  Id pregunta: 8495 Año de creación de pregunta: 2011
 questions[12]= "13)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[12]= new Array();
 choices[12][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[12][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[12][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = 2;
 units[12] = ['102'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8495. Teleco Ayto. Madrid 2010";
 preguntaids[12] = 8495


//  Id pregunta: 8246 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[13]= new Array();
 choices[13][0] = "Spread spectrum con secuencia directa";
 choices[13][1] = "Spread spectrum con salto de frecuencia";
 choices[13][2] = "Spread spectrum con secuencia indirecta";
 choices[13][3] = "Spread spectrum sobre TCP/IP";
 answers[13] = 1;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8246. Examen UPM A2 2011";
 preguntaids[13] = 8246


//  Id pregunta: 8291 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes cabeceras de extensi&oacute;n no est&aacute; especificada en la RFC 2460 que desarrolla las especificaciones de el protocolo IPv6?";
 choices[14]= new Array();
 choices[14][0] = "Hop-By-Hop Options";
 choices[14][1] = "Routing (Type 0)";
 choices[14][2] = "Fragment";
 choices[14][3] = "Authentication Header";
 answers[14] = 3;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8291. Examen UPM A2 2011";
 preguntaids[14] = 8291


//  Id pregunta: 8499 Año de creación de pregunta: 2011
 questions[15]= "16)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[15]= new Array();
 choices[15][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[15][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[15][2] = "Se produce en ambos tipos de fibra.";
 choices[15][3] = "No se produce en la fibra &oacute;ptica";
 answers[15] = 1;
 units[15] = ['104'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8499. Teleco Ayto. Madrid 2010";
 preguntaids[15] = 8499


//  Id pregunta: 8413 Año de creación de pregunta: 2011
 questions[16]= "17)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[16]= new Array();
 choices[16][0] = "ROUTE";
 choices[16][1] = "NETSTAT";
 choices[16][2] = "NBTSTAT";
 choices[16][3] = "TRACERT";
 answers[16] = 1;
 units[16] = ['114'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8413. Operador Ayto. Madrid 2010";
 preguntaids[16] = 8413


//  Id pregunta: 8385 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;En que banda de frecuencias trabaja WiBro?";
 choices[17]= new Array();
 choices[17][0] = "10GHz-66GHz";
 choices[17][1] = "2,45MHz";
 choices[17][2] = "2,3GHz-2,4GHz";
 choices[17][3] = "2GHz-11GHz";
 answers[17] = 2;
 units[17] = ['108'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8385. ";
 preguntaids[17] = 8385


//  Id pregunta: 8383 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;C&oacute;mo se llama la PDU de nivel 3?";
 choices[18]= new Array();
 choices[18][0] = "Paquete";
 choices[18][1] = "SPDU";
 choices[18][2] = "Trama";
 choices[18][3] = "TPDU";
 answers[18] = 0;
 units[18] = ['105'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8383. ";
 preguntaids[18] = 8383


//  Id pregunta: 8244 Año de creación de pregunta: 2011
 questions[19]= "20)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[19]= new Array();
 choices[19][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[19][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[19][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar la red por alg&uacute;n motivo.";
 choices[19][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[19] = 2;
 units[19] = ['117'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8244. Examen UPM A2 2011";
 preguntaids[19] = 8244


//  Id pregunta: 8357 Año de creación de pregunta: 2011
 questions[20]= "21)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[20]= new Array();
 choices[20][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[20][1] = "Paralela y mediante hipervisor (bare metal)";
 choices[20][2] = "Balanceada y mediante SPM (Service Platform Manager)";
 choices[20][3] = "Mediante hipervisor (bare metal) y mediante supervisor (full metal)";
 answers[20] = 0;
 units[20] = ['124'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8357. Analista Ayto. Madrid 2010";
 preguntaids[20] = 8357


//  Id pregunta: 8286 Año de creación de pregunta: 2011
 questions[21]= "22)  La m&aacute;xima longitud de un datagrama IP es:";
 choices[21]= new Array();
 choices[21][0] = "128 Kbytes";
 choices[21][1] = "64 Kbytes.";
 choices[21][2] = "32 Kbytes";
 choices[21][3] = "No tiene longitud m&aacute;xima";
 answers[21] = 1;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8286. Examen TIC A2 2010 interna";
 preguntaids[21] = 8286


//  Id pregunta: 8236 Año de creación de pregunta: 2011
 questions[22]= "23)  Con respecto a los est&aacute;ndares de redes inal&aacute;mbricas &iquest;cu&aacute;l de las siguientes combinaciones es correcta?";
 choices[22]= new Array();
 choices[22][0] = "802.11a-2.4Ghz";
 choices[22][1] = "802.11b -2.4Ghz";
 choices[22][2] = "802.11g-5Ghz";
 choices[22][3] = "802.11x-2.4Ghz";
 answers[22] = 1;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8236. Examen UPM A2 2011";
 preguntaids[22] = 8236


//  Id pregunta: 8303 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;Qu&eacute; protocolo puede encontrar la direcci&oacute;n MAC de un computador, dada su direcci&oacute;n IP?";
 choices[23]= new Array();
 choices[23][0] = "RARP";
 choices[23][1] = "DHCP";
 choices[23][2] = "ARP";
 choices[23][3] = "Proxy RARP";
 answers[23] = 2;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8303. Examen UPM A2 2011";
 preguntaids[23] = 8303


//  Id pregunta: 8289 Año de creación de pregunta: 2011
 questions[24]= "25)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[24]= new Array();
 choices[24][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[24][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[24][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[24][3] = "Ninguna de las anteriores.";
 answers[24] = 2;
 units[24] = ['103'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8289. Examen UPM A2 2011";
 preguntaids[24] = 8289


//  Id pregunta: 8306 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es correcta?";
 choices[25]= new Array();
 choices[25][0] = "Las direcciones no son jer&aacute;rquicas y se asignan aleatoriamente";
 choices[25][1] = "Hay 2.7 billones de direcciones disponibles para asignar";
 choices[25][2] = "Las direcciones broadcast se reemplazan con direcciones multicast";
 choices[25][3] = "Un interfaz de red &uacute;nicamente podr&aacute; ser configurado con una &uacute;nica direcci&oacute;n";
 answers[25] = 2;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8306. Examen UPM A2 2011";
 preguntaids[25] = 8306


//  Id pregunta: 8287 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;Cu&aacute;l es la versi&oacute;n extendida del protocolo BOOTP?";
 choices[26]= new Array();
 choices[26][0] = "DHCP";
 choices[26][1] = "RARP";
 choices[26][2] = "RTSP";
 choices[26][3] = "DNS";
 answers[26] = 0;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8287. Examen TIC A2 2010 interna";
 preguntaids[26] = 8287


//  Id pregunta: 8503 Año de creación de pregunta: 2011
 questions[27]= "28)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[27]= new Array();
 choices[27][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[27][1] = "S&oacute;lo se emplea en RDSI.";
 choices[27][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 0;
 units[27] = ['106', '107'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8503. Teleco Ayto. Madrid 2010";
 preguntaids[27] = 8503


//  Id pregunta: 8498 Año de creación de pregunta: 2011
 questions[28]= "29)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[28]= new Array();
 choices[28][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[28][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[28][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = 1;
 units[28] = ['102'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8498. Teleco Ayto. Madrid 2010";
 preguntaids[28] = 8498


//  Id pregunta: 8384 Año de creación de pregunta: 2011
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un ASE?";
 choices[29]= new Array();
 choices[29][0] = "ACSE";
 choices[29][1] = "MCSE";
 choices[29][2] = "RTSE";
 choices[29][3] = "ROSE";
 answers[29] = 1;
 units[29] = ['105'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8384. ";
 preguntaids[29] = 8384


//  Id pregunta: 8479 Año de creación de pregunta: 2011
 questions[30]= "31)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[30]= new Array();
 choices[30][0] = "1 maestro y 7 esclavos";
 choices[30][1] = "1 maestro y 15 esclavos";
 choices[30][2] = "1 maestro y 16 esclavos";
 choices[30][3] = "1 maestro y 32 esclavos";
 answers[30] = 0;
 units[30] = ['108'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8479. Examen UPM A2 2011";
 preguntaids[30] = 8479


//  Id pregunta: 8290 Año de creación de pregunta: 2011
 questions[31]= "32)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[31]= new Array();
 choices[31][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[31][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[31][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[31][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[31] = 2;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 8290. Examen UPM A2 2011";
 preguntaids[31] = 8290


//  Id pregunta: 8345 Año de creación de pregunta: 2011
 questions[32]= "33)  Se entiende por SSO";
 choices[32]= new Array();
 choices[32][0] = "Un procedimiento de autenticaci&oacute;n que permite acceder a diversos recursos inform&aacute;ticos utilizando una &uacute;nica identificaci&oacute;n";
 choices[32][1] = "Un sistema basado el claves SSL para la gesti&oacute;n remota de claves sim&eacute;tricas";
 choices[32][2] = "Un sistema de gesti&oacute;n y almacenamiento de claves fraccionadas con coherencia asim&eacute;trica";
 choices[32][3] = "Un procedimiento de comunicaciones seguras entre objetos basado en sockets";
 answers[32] = 0;
 units[32] = ['123'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8345. Examen UC3M 2010";
 preguntaids[32] = 8345


//  Id pregunta: 8404 Año de creación de pregunta: 2011
 questions[33]= "34)  Indicar cu&aacute;l de las siguientes herramientas y protocolos permite el control remoto de puestos de usuario:";
 choices[33]= new Array();
 choices[33][0] = "NNTP.";
 choices[33][1] = "VNC.";
 choices[33][2] = "NTP.";
 choices[33][3] = "FTP";
 answers[33] = 1;
 units[33] = ['123'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8404. Operador Ayto. Madrid 2010";
 preguntaids[33] = 8404


//  Id pregunta: 8369 Año de creación de pregunta: 2011
 questions[34]= "35)  HDLC define tres tipos de estaciones, dos configuraciones de enlace y tres modos de operaci&oacute;n para la transferencia de los datos. Se&ntilde;ale la respuesta correcta en relaci&oacute;n a dichas definiciones:";
 choices[34]= new Array();
 choices[34][0] = "La Configuraci&oacute;n de Enlace no Balanceada est&aacute; formada por una estaci&oacute;n primaria y una o m&aacute;s estaciones secundarias y &uacute;nicamente se permite la transmisi&oacute;n semi-duplex";
 choices[34][1] = "El modo de respuesta normal (NRM) se utiliza en la configuraci&oacute;n no balanceada";
 choices[34][2] = "El modo de respuesta as&iacute;ncrono (ARM) se utiliza en la configuraci&oacute;n balanceada.";
 choices[34][3] = "Solamente existen dos tipos de estaciones, primaria y secundaria";
 answers[34] = 1;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8369. Analista Ayto. Madrid 2010";
 preguntaids[34] = 8369


//  Id pregunta: 8295 Año de creación de pregunta: 2011
 questions[35]= "36)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[35]= new Array();
 choices[35][0] = "53 TCP";
 choices[35][1] = "453 TCP";
 choices[35][2] = "456 UDP";
 choices[35][3] = "53 UDP";
 answers[35] = 0;
 units[35] = ['103'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8295. Examen UPM A2 2011";
 preguntaids[35] = 8295


//  Id pregunta: 8407 Año de creación de pregunta: 2011
 questions[36]= "37)  El sistema de radiocomunicaciones digitales TETRA:";
 choices[36]= new Array();
 choices[36][0] = "Tiene capacidades de transmisi&oacute;n de datos.";
 choices[36][1] = "No permite comunicaciones uno a muchos.";
 choices[36][2] = "Permite una mayor densidad de usuarios que GSM.";
 choices[36][3] = "Es exclusivamente anal&oacute;gico";
 answers[36] = 0;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8407. Operador Ayto. Madrid 2010";
 preguntaids[36] = 8407


//  Id pregunta: 8489 Año de creación de pregunta: 2011
 questions[37]= "38)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 68 de la Ley 9/2014 General de Telecomunicaciones:";
 choices[37]= new Array();
 choices[37][0] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[37][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[37][2] = "El Gobierno.";
 choices[37][3] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 answers[37] = 1;
 units[37] = ['121'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 8489. Teleco Ayto. Madrid 2010";
 preguntaids[37] = 8489


//  Id pregunta: 8490 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[38][1] = "Ministerio de Energia, Turismo y Agenda Digital";
 choices[38][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[38][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[38] = 1;
 units[38] = ['121'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 8490. Teleco Ayto. Madrid 2010";
 preguntaids[38] = 8490


//  Id pregunta: 8481 Año de creación de pregunta: 2011
 questions[39]= "40)  ATM ofrece las siguientes clases de servicio de tiempo real:";
 choices[39]= new Array();
 choices[39][0] = "CBR y GFR";
 choices[39][1] = "ABR y CBR";
 choices[39][2] = "ABR y GFR";
 choices[39][3] = "CBR y rt-VBR";
 answers[39] = 3;
 units[39] = ['107'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8481. Examen UPM A2 2011";
 preguntaids[39] = 8481


//  Id pregunta: 8477 Año de creación de pregunta: 2011
 questions[40]= "41)  El protocolo SSL (Secure Sockets Layer)";
 choices[40]= new Array();
 choices[40][0] = "Proporciona conexiones seguras s&oacute;lo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[40][1] = "No garantiza la integridad de la informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[40][2] = "Es una capa de seguridad que opera siempre sobre protocolo UDP.";
 choices[40][3] = "Proporciona conexiones seguras sobre una red insegura garantizando la integridad de los datos transmitidos, privacidad de la conexi&oacute;n y autentificaci&oacute;n del cliente y servidor.";
 answers[40] = 3;
 units[40] = ['120'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8477. Examen UPM A2 2011";
 preguntaids[40] = 8477


//  Id pregunta: 8307 Año de creación de pregunta: 2011
 questions[41]= "42)  La longitud m&aacute;xima de un datagrama IP es:";
 choices[41]= new Array();
 choices[41][0] = "32 KB";
 choices[41][1] = "64 KB";
 choices[41][2] = "128 KB";
 choices[41][3] = "512 KB";
 answers[41] = 1;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8307. Examen UPM A2 2011";
 preguntaids[41] = 8307


//  Id pregunta: 8408 Año de creación de pregunta: 2011
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes acciones NO es realizada por un switch de nivel 2?:";
 choices[42]= new Array();
 choices[42][0] = "Conversi&oacute;n de protocolos.";
 choices[42][1] = "Aprendizaje de direcciones MAC.";
 choices[42][2] = "Reducci&oacute;n de colisiones respecto a un hub.";
 choices[42][3] = "Posibilitar m&uacute;ltiples transmisiones simult&aacute;neas sin interferir en otras sub-redes";
 answers[42] = 0;
 units[42] = ['102'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8408. Operador Ayto. Madrid 2010";
 preguntaids[42] = 8408


//  Id pregunta: 8504 Año de creación de pregunta: 2011
 questions[43]= "44)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[43]= new Array();
 choices[43][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[43][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[43][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[43][3] = "Se pueden establecer 32 comunicaciones totales: 16 entrantes y 16 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 answers[43] = 0;
 units[43] = ['103'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 8504. Teleco Ayto. Madrid 2010";
 preguntaids[43] = 8504


//  Id pregunta: 8492 Año de creación de pregunta: 2011
 questions[44]= "45)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[44]= new Array();
 choices[44][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[44][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[44][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = 0;
 units[44] = ['108'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8492. Teleco Ayto. Madrid 2010";
 preguntaids[44] = 8492


//  Id pregunta: 8241 Año de creación de pregunta: 2011
 questions[45]= "46)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[45]= new Array();
 choices[45][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[45][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[45][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[45][3] = "No";
 answers[45] = 0;
 units[45] = ['102'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8241. Examen UPM A2 2011";
 preguntaids[45] = 8241


//  Id pregunta: 8501 Año de creación de pregunta: 2011
 questions[46]= "47)  Un CSS (Cent Call Second) se emplea en telefon&iacute;a como una medida de tr&aacute;fico telef&oacute;nico (volumen de tr&aacute;fico). Un CCS es el tr&aacute;fico telef&oacute;nico causado por una llamada de 100 segundos de duraci&oacute;n. &iquest;Cuantos CSS tiene un Erlang?";
 choices[46]= new Array();
 choices[46][0] = "1 CSS.";
 choices[46][1] = "100 CSS.";
 choices[46][2] = "36 CSS.";
 choices[46][3] = "10 CSS";
 answers[46] = 2;
 units[46] = ['104'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8501. Teleco Ayto. Madrid 2010";
 preguntaids[46] = 8501


//  Id pregunta: 8247 Año de creación de pregunta: 2011
 questions[47]= "48)  En el protocolo MPLS, la cabecera de las etiquetas MPLS, NO contiene el siguiente item:";
 choices[47]= new Array();
 choices[47][0] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 choices[47][1] = "Tiempo de vida (8 bits)";
 choices[47][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[47][3] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 answers[47] = 0;
 units[47] = ['107'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8247. Examen UPM A2 2011";
 preguntaids[47] = 8247


//  Id pregunta: 8406 Año de creación de pregunta: 2011
 questions[48]= "49)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[48]= new Array();
 choices[48][0] = "En notaci&oacute;n decimal.";
 choices[48][1] = "En notaci&oacute;n hexadecimal.";
 choices[48][2] = "En notaci&oacute;n octal.";
 choices[48][3] = "En notaci&oacute;n binaria";
 answers[48] = 1;
 units[48] = ['112'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8406. Operador Ayto. Madrid 2010";
 preguntaids[48] = 8406


//  Id pregunta: 8502 Año de creación de pregunta: 2011
 questions[49]= "50)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[49]= new Array();
 choices[49][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[49][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[49][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = 1;
 units[49] = ['104'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8502. Teleco Ayto. Madrid 2010";
 preguntaids[49] = 8502


//  Id pregunta: 8381 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Qu&eacute; Informaci&oacute;n contiene una SIM?";
 choices[50]= new Array();
 choices[50][0] = "IMSI";
 choices[50][1] = "PIN";
 choices[50][2] = "OMC";
 choices[50][3] = "La respuesta A y B son correctas";
 answers[50] = 3;
 units[50] = ['117'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 8381. ";
 preguntaids[50] = 8381


//  Id pregunta: 8234 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI?";
 choices[51]= new Array();
 choices[51][0] = "Proxy";
 choices[51][1] = "Firewall de filtrado de paquetes";
 choices[51][2] = "Antivirus";
 choices[51][3] = "Filtro anti SPAM";
 answers[51] = 1;
 units[51] = ['119'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8234. Examen UPM A2 2011";
 preguntaids[51] = 8234


//  Id pregunta: 8488 Año de creación de pregunta: 2011
 questions[52]= "53)  No ser&aacute; necesario que una ICT incluya inicialmente la red de distribuci&oacute;n para los servicios de:";
 choices[52]= new Array();
 choices[52][0] = "Telecomunicaciones por cable.";
 choices[52][1] = "Radiodifusi&oacute;n.";
 choices[52][2] = "Telefon&iacute;a.";
 choices[52][3] = "Deber&aacute; incluir todas ellas.";
 answers[52] = 3;
 units[52] = ['121'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8488. Teleco Ayto. Madrid 2010";
 preguntaids[52] = 8488


//  Id pregunta: 8474 Año de creación de pregunta: 2011
 questions[53]= "54)  En radio, &iquest;Qu&eacute; quiere decir MIMO?";
 choices[53]= new Array();
 choices[53][0] = "Maximum Input, Minimum Output";
 choices[53][1] = "Minimum Input, Maximum Output";
 choices[53][2] = "Multiple-Input Multiple-Output";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = 2;
 units[53] = ['106'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8474. ";
 preguntaids[53] = 8474


//  Id pregunta: 8249 Año de creación de pregunta: 2011
 questions[54]= "55)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[54]= new Array();
 choices[54][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[54][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[54][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[54][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[54] = 3;
 units[54] = ['114'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 8249. Examen UPM A2 2011";
 preguntaids[54] = 8249


//  Id pregunta: 8349 Año de creación de pregunta: 2011
 questions[55]= "56)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[55]= new Array();
 choices[55][0] = "EDGE";
 choices[55][1] = "HSDPA";
 choices[55][2] = "UMTS/3G";
 choices[55][3] = "GPRS";
 answers[55] = 1;
 units[55] = ['117'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 8349. Examen UC3M 2010";
 preguntaids[55] = 8349


//  Id pregunta: 8473 Año de creación de pregunta: 2011
 questions[56]= "57)  El est&aacute;ndar de telefon&iacute;a m&oacute;vil LTE (Long Term Evolution), emplea";
 choices[56]= new Array();
 choices[56][0] = "MIMO";
 choices[56][1] = "FDD";
 choices[56][2] = "TDD";
 choices[56][3] = "Todas las anteriores";
 answers[56] = 3;
 units[56] = ['106'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8473. ";
 preguntaids[56] = 8473


//  Id pregunta: 8496 Año de creación de pregunta: 2011
 questions[57]= "58)  En un sistema de transmisi&oacute;n digital &hellip;";
 choices[57]= new Array();
 choices[57][0] = "El ruido es acumulativo.";
 choices[57][1] = "Cada repetidor puede regenerar la se&ntilde;al.";
 choices[57][2] = "No tiene influencia el ruido.";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 1;
 units[57] = ['102'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 8496. Teleco Ayto. Madrid 2010";
 preguntaids[57] = 8496


//  Id pregunta: 8293 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;Que puerto utiliza NNTP?";
 choices[58]= new Array();
 choices[58][0] = "119";
 choices[58][1] = "53";
 choices[58][2] = "137";
 choices[58][3] = "139";
 answers[58] = 0;
 units[58] = ['103'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 8293. Examen UPM A2 2011";
 preguntaids[58] = 8293


//  Id pregunta: 8476 Año de creación de pregunta: 2011
 questions[59]= "60)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[59]= new Array();
 choices[59][0] = "2965";
 choices[59][1] = "8080";
 choices[59][2] = "1065";
 choices[59][3] = "1265";
 answers[59] = 0;
 units[59] = ['103'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8476. ";
 preguntaids[59] = 8476


//  Id pregunta: 8482 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l es el tama&ntilde;o de las celdas ATM?";
 choices[60]= new Array();
 choices[60][0] = "48 octetos";
 choices[60][1] = "64 octetos";
 choices[60][2] = "53 octetos";
 choices[60][3] = "32 octetos";
 answers[60] = 2;
 units[60] = ['107'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 8482. Examen UPM A2 2011";
 preguntaids[60] = 8482


//  Id pregunta: 8382 Año de creación de pregunta: 2011
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un tipo de Primitiva?";
 choices[61]= new Array();
 choices[61][0] = "Received";
 choices[61][1] = "Indication";
 choices[61][2] = "Response";
 choices[61][3] = "Request";
 answers[61] = 0;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 8382. ";
 preguntaids[61] = 8382


//  Id pregunta: 8418 Año de creación de pregunta: 2011
 questions[62]= "63)  Las siglas SSL y TLS se refieren a:";
 choices[62]= new Array();
 choices[62][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[62][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[62][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[62][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[62] = 1;
 units[62] = ['119', '120'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 8418. Operador Ayto. Madrid 2010";
 preguntaids[62] = 8418


//  Id pregunta: 8317 Año de creación de pregunta: 2011
 questions[63]= "64)  En el contexto de la Web 2.0, a la p&aacute;gina Web o aplicaci&oacute;n que usa o combina datos, presentaciones y funcionalidad procedentes de una o m&aacute;s fuentes para crear nuevos servicios, se conoce como:";
 choices[63]= new Array();
 choices[63][0] = "folcsonom&iacute;a";
 choices[63][1] = "mashup";
 choices[63][2] = "podcast";
 choices[63][3] = "Wiki";
 answers[63] = 1;
 units[63] = ['125'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8317. Examen UPM A2 2011";
 preguntaids[63] = 8317


//  Id pregunta: 8240 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[64]= new Array();
 choices[64][0] = "Home Agent.";
 choices[64][1] = "Agent Advertisement.";
 choices[64][2] = "Mobility Agent.";
 choices[64][3] = "Agent Discovery.";
 answers[64] = 0;
 units[64] = ['107'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8240. Examen UPM A2 2011";
 preguntaids[64] = 8240


//  Id pregunta: 8491 Año de creación de pregunta: 2011
 questions[65]= "66)  Las p&eacute;rdidas debidas a absorci&oacute;n por gases atmosf&eacute;ricos deben tenerse en cuenta en:";
 choices[65]= new Array();
 choices[65][0] = "Radioenlaces de frecuencias superiores a 30 GHz.";
 choices[65][1] = "Radioenlaces de frecuencias superiores a 3 GHz.";
 choices[65][2] = "Radioenlaces de frecuencias superiores a 300 MHz.";
 choices[65][3] = "Radioenlaces de frecuencias superiores a 300 kHz";
 answers[65] = 1;
 units[65] = ['108'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8491. Teleco Ayto. Madrid 2010";
 preguntaids[65] = 8491


//  Id pregunta: 8235 Año de creación de pregunta: 2011
 questions[66]= "67)  Un acceso RDSI primario consta de";
 choices[66]= new Array();
 choices[66][0] = "Dos canales B y un canal D";
 choices[66][1] = "Dos canales B y ning&uacute;n canal D";
 choices[66][2] = "Treinta canales B y un canal D";
 choices[66][3] = "Treinta canales B y dos canales D";
 answers[66] = 2;
 units[66] = ['114'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 8235. Examen UPM A2 2011";
 preguntaids[66] = 8235


//  Id pregunta: 8346 Año de creación de pregunta: 2011
 questions[67]= "68)  En los sistemas de colaboraci&oacute;n s&iacute;ncronos:";
 choices[67]= new Array();
 choices[67][0] = "No es posible utilizar la tecnolog&iacute;a multicast";
 choices[67][1] = "Todos est&aacute;n basados en interfaces WWW";
 choices[67][2] = "Se ampl&iacute;an las funcionalidades de los sistemas de videoconferencia cl&aacute;sicos.";
 choices[67][3] = "Su est&aacute;ndar viene definido por el W3C";
 answers[67] = 2;
 units[67] = ['122'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8346. Examen UC3M 2010";
 preguntaids[67] = 8346


//  Id pregunta: 8288 Año de creación de pregunta: 2011
 questions[68]= "69)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[68]= new Array();
 choices[68][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[68][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[68][2] = "PoE2.";
 choices[68][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[68] = 0;
 units[68] = ['112'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 8288. Examen TIC A2 2010 interna";
 preguntaids[68] = 8288


//  Id pregunta: 8367 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes asociaciones &ldquo;protocolos OSI - protocolos TCP/IP&rdquo; no es correcta?:";
 choices[69]= new Array();
 choices[69][0] = "X.500-SNMP";
 choices[69][1] = "SMTP-X.400";
 choices[69][2] = "FTAM-FTP";
 choices[69][3] = "SMTP-X.25";
 answers[69] = 0;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 8367. Analista Ayto. Madrid 2010";
 preguntaids[69] = 8367


//  Id pregunta: 8239 Año de creación de pregunta: 2011
 questions[70]= "71)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[70]= new Array();
 choices[70][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[70][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[70][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[70][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[70] = 2;
 units[70] = ['123'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 8239. Examen UPM A2 2011";
 preguntaids[70] = 8239


//  Id pregunta: 8478 Año de creación de pregunta: 2011
 questions[71]= "72)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet";
 choices[71]= new Array();
 choices[71][0] = "Acceden al medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[71][1] = "Acceden al medio de transmisi&oacute;n en per&iacute;odos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[71][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por lo que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones.";
 choices[71][3] = "Nunca acceden si tras un primer intento se detect&oacute; una colisi&oacute;n.";
 answers[71] = 0;
 units[71] = ['112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 8478. Examen UPM A2 2011";
 preguntaids[71] = 8478


//  Id pregunta: 8500 Año de creación de pregunta: 2011
 questions[72]= "73)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[72]= new Array();
 choices[72][0] = "De baja capacidad y elevado alcance.";
 choices[72][1] = "De alta capacidad y reducido alcance.";
 choices[72][2] = "De alta capacidad y elevado alcance.";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = 2;
 units[72] = ['106'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 8500. Teleco Ayto. Madrid 2010";
 preguntaids[72] = 8500


//  Id pregunta: 8238 Año de creación de pregunta: 2011
 questions[73]= "74)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[73]= new Array();
 choices[73][0] = "Es el elemento que conmuta etiquetas.";
 choices[73][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[73][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[73][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[73] = 0;
 units[73] = ['107'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 8238. Examen UPM A2 2011";
 preguntaids[73] = 8238


//  Id pregunta: 8487 Año de creación de pregunta: 2011
 questions[74]= "75)  Entre las competencias que la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, atribuye a la Comisi&oacute;n Nacional de los Mercados y la Competencia, est&aacute; analizar la competencia efectiva en los mercados de referencia que defina y determinar los operadores que en esos mercados se consideren:";
 choices[74]= new Array();
 choices[74][0] = "Dominantes.";
 choices[74][1] = "Con poder significativo en el mercado.";
 choices[74][2] = "Anticompetitivos.";
 choices[74][3] = "Incumbentes";
 answers[74] = 1;
 units[74] = ['121'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 8487. ";
 preguntaids[74] = 8487


