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
//  Id pregunta: 6122 Año de creación de pregunta: 2003
 questions[0]= "1)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivelque realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redesgeogr&aacute;ficas distintas es el:";
 choices[0]= new Array();
 choices[0][0] = "Nivel 2";
 choices[0][1] = "Nivel 3";
 choices[0][2] = "Nivel 4";
 choices[0][3] = "Nivel 5";
 answers[0] = 1;
 units[0] = ['105'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 6122. Examen TIC A1 MAP 2007";
 preguntaids[0] = 6122


//  Id pregunta: 6394 Año de creación de pregunta: 2003
 questions[1]= "2)  Los registros glue de una zona DNS son aquellos que";
 choices[1]= new Array();
 choices[1][0] = "Son los registros que mantienen la resoluci&oacute;n inversa";
 choices[1][1] = "Son los registros que mantienen el espacio de nombres de la zona";
 choices[1][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[1][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns";
 answers[1] = 1;
 units[1] = ['103'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 6394. Examen 2006 JCYL";
 preguntaids[1] = 6394


//  Id pregunta: 6237 Año de creación de pregunta: 2003
 questions[2]= "3)  En el protocolo IPSEC, una asociaci&oacute;n de seguridad (SA) queda un&iacute;vocamente identificada por medio de:";
 choices[2]= new Array();
 choices[2][0] = "Una direcci&oacute;n IP";
 choices[2][1] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI)";
 choices[2][2] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI) y un puerto de comunicaci&oacute;n TCP.";
 choices[2][3] = "Una direcci&oacute;n IP y un &Iacute;ndice de Par&aacute;metro de Seguridad (SPI).";
 answers[2] = 3;
 units[2] = ['119'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 6237. Examen TIC A Castilla La Mancha 2007";
 preguntaids[2] = 6237


//  Id pregunta: 6427 Año de creación de pregunta: 2003
 questions[3]= "4)  Entre los sistemas operativos para dispositivos m&oacute;viles se encuentra:";
 choices[3]= new Array();
 choices[3][0] = "Symbian";
 choices[3][1] = "Hurd";
 choices[3][2] = "Mach";
 choices[3][3] = "BSD";
 answers[3] = 0;
 units[3] = ['118'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6427. ";
 preguntaids[3] = 6427


//  Id pregunta: 6352 Año de creación de pregunta: 2003
 questions[4]= "5)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n de si la prestaci&oacute;n del servicio universal supone una causa injustificada para los operadores obligados a prestarlo corresponde a:";
 choices[4]= new Array();
 choices[4][0] = "El Ministerio de  Energia, Turismo y Agenda Digital";
 choices[4][1] = "Gobierno";
 choices[4][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[4][3] = "Ninguno de los anteriores";
 answers[4] = 2;
 units[4] = ['110'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 6352. ";
 preguntaids[4] = 6352


//  Id pregunta: 6499 Año de creación de pregunta: 2003
 questions[5]= "6)  &iquest;En qu&eacute; Real Decreto se establece la elaboraci&oacute;n de un Plan Director de Telecomunicaciones como herramienta de planificaci&oacute;n en el &aacute;mbito de cada departamento ministerial?";
 choices[5]= new Array();
 choices[5][0] = "En el RD 551/2001";
 choices[5][1] = "En el 541/2002";
 choices[5][2] = "En el 451/2002";
 choices[5][3] = "En el 541/2001";
 answers[5] = 3;
 units[5] = ['114'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 6499. Art&iacute;culo 13";
 preguntaids[5] = 6499


//  Id pregunta: 6497 Año de creación de pregunta: 2003
 questions[6]= "7)  Los sistemas en el segunado nivel troncal trabajan en";
 choices[6]= new Array();
 choices[6][0] = "La segunda ventana &oacute;ptica (1330nm). Es en estos nodos donde se realiza la inserci&oacute;n de programaci&oacute;n local resultando m&aacute;s econ&oacute;mico que se lleve a cabo a nivel el&eacute;ctrico.";
 choices[6][1] = "La tercera ventana &oacute;ptica (1550nm) con la ventaja de tener un mayor alcance.";
 choices[6][2] = "La segunda ventana &oacute;ptica (1330nm), ya que en dicha ventana existen amplificadores &oacute;pticos comerciales de alto rendimiento";
 choices[6][3] = "La tercera ventana &oacute;ptica (1550nm) siendo necesario hacer una doble conversi&oacute;n (opto-el&eacute;ctrica y electro-&oacute;ptica)";
 answers[6] = 0;
 units[6] = ['115'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 6497. ";
 preguntaids[6] = 6497


//  Id pregunta: 6132 Año de creación de pregunta: 2003
 questions[7]= "8)  Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar unrecurso de la web:";
 choices[7]= new Array();
 choices[7][0] = "El nombre del recurso";
 choices[7][1] = "El tipo del recurso";
 choices[7][2] = "Donde se encuentra el recurso";
 choices[7][3] = "El protocolo que hay que usar para obtener el recurso";
 answers[7] = 1;
 units[7] = ['103'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 6132. Examen TIC A1 MAP 2007";
 preguntaids[7] = 6132


//  Id pregunta: 6126 Año de creación de pregunta: 2003
 questions[8]= "9)  El algoritmo de cifrado IDEA es del tipo:";
 choices[8]= new Array();
 choices[8][0] = "Asim&eacute;trico";
 choices[8][1] = "Sim&eacute;trico por bloques";
 choices[8][2] = "Sim&eacute;trico de flujo";
 choices[8][3] = "Sim&eacute;trico de resumen (hash)";
 answers[8] = 1;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6126. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6126


//  Id pregunta: 6343 Año de creación de pregunta: 2003
 questions[9]= "10)  Indique cu&aacute;l de los siguientes no es un objeto integrado de ASP:";
 choices[9]= new Array();
 choices[9][0] = "Client";
 choices[9][1] = "Application";
 choices[9][2] = "Server";
 choices[9][3] = "Request";
 answers[9] = 0;
 units[9] = ['115'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6343. ";
 preguntaids[9] = 6343


//  Id pregunta: 6222 Año de creación de pregunta: 2003
 questions[10]= "11)  En el modelo de referencia TCP/IP:";
 choices[10]= new Array();
 choices[10][0] = "No se definen las capas de sesi&oacute;n ni de aplicaci&oacute;n.";
 choices[10][1] = "No se definen las capas de red ni de sesi&oacute;n.";
 choices[10][2] = "No se definen las capas de presentaci&oacute;n ni de aplicaci&oacute;n.";
 choices[10][3] = "No se definen las capas de sesi&oacute;n ni de presentaci&oacute;n.";
 answers[10] = 3;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 6222. Examen TIC A Castilla La Mancha 2007";
 preguntaids[10] = 6222


//  Id pregunta: 6342 Año de creación de pregunta: 2003
 questions[11]= "12)  Indique cu&aacute;l de las siguientes opciones no se relaciona con un desarrollo JAVA:";
 choices[11]= new Array();
 choices[11][0] = "Hibernate";
 choices[11][1] = "Biztalk";
 choices[11][2] = "Java Server Faces";
 choices[11][3] = "Spring";
 answers[11] = 1;
 units[11] = ['116'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6342. ";
 preguntaids[11] = 6342


//  Id pregunta: 6114 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&quot;Secure Socket Layer&quot;) es correcta?:";
 choices[12]= new Array();
 choices[12][0] = "S&oacute;lo proporciona servicios de seguridad para el protocolo HTTP (&quot;HyperText Transfer Protocol&quot;)";
 choices[12][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir";
 choices[12][2] = "El protocolo se implementa entre los niveles de Transporte y de Red";
 choices[12][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n";
 answers[12] = 3;
 units[12] = ['119'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 6114. Examen TIC A1 MAP 2007";
 preguntaids[12] = 6114


//  Id pregunta: 6340 Año de creación de pregunta: 2003
 questions[13]= "14)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ...";
 choices[13]= new Array();
 choices[13][0] = "el servidor tiene un built-in de JVM.";
 choices[13][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente.";
 choices[13][2] = "el navegador tiene un built-in de JVM.";
 choices[13][3] = "los applets no necesitan una JVM.";
 answers[13] = 2;
 units[13] = ['116'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 6340. ";
 preguntaids[13] = 6340


//  Id pregunta: 6383 Año de creación de pregunta: 2003
 questions[14]= "15)  Diga cu&aacute;l de las siguientes afirmaciones es cierta";
 choices[14]= new Array();
 choices[14][0] = "En las WAN los retardos son altos, por la gran distancia que cubre";
 choices[14][1] = "Las WAN son las LAN inal&aacute;mbricas (Wireless).";
 choices[14][2] = "Las LAN, MAN y WAN son la misma cosa, solo cambia la distancia que abarcan";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = 0;
 units[14] = ['112'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6383. Examen 2006 JCYL";
 preguntaids[14] = 6383


//  Id pregunta: 6467 Año de creación de pregunta: 2003
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes opciones NO es necesaria para que una red ethernet pueda funcionar en modo d&uacute;plex completo?";
 choices[15]= new Array();
 choices[15][0] = "El medio f&iacute;sico permite la transmisi&oacute;n d&uacute;plex completa";
 choices[15][1] = "La distancia entre las dos estaciones es menor de 50 m";
 choices[15][2] = "Solo hay dos estaciones conectadas entre s&iacute;";
 choices[15][3] = "Las tarjetas de red de ambos equipos soportan el funcionamiento en modo d&uacute;plex completo";
 answers[15] = 1;
 units[15] = ['102'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6467. ";
 preguntaids[15] = 6467


//  Id pregunta: 6233 Año de creación de pregunta: 2003
 questions[16]= "17)  En una VPN (Virtual Private Network) de acceso remoto,";
 choices[16]= new Array();
 choices[16][0] = "Al tratarse de una red privada, no es necesario ning&uacute;n tipo de encapsulamiento de los paquetes de datos para protegerlos de posibles ataques.";
 choices[16][1] = "No es necesario verificar la identidad de los usuarios";
 choices[16][2] = "No permite cifrado de datos.";
 choices[16][3] = "Los paquetes de datos viajan por un tunel definido en la red p&uacute;blica";
 answers[16] = 3;
 units[16] = ['119'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 6233. Examen TIC A Castilla La Mancha 2007";
 preguntaids[16] = 6233


//  Id pregunta: 6121 Año de creación de pregunta: 2003
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre RSS es err&oacute;nea?:";
 choices[17]= new Array();
 choices[17][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web.";
 choices[17][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas webs de noticias";
 choices[17][2] = "RSS es parte de la familia de los formatos XML";
 choices[17][3] = "Es un acr&oacute;nimo de &quot;Really Simple Syndication&quot;";
 answers[17] = 1;
 units[17] = ['103'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 6121. Examen TIC A1 MAP 2007";
 preguntaids[17] = 6121


//  Id pregunta: 6113 Año de creación de pregunta: 2003
 questions[18]= "19)  Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[18]= new Array();
 choices[18][0] = "Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[18][1] = "Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos";
 choices[18][2] = "Serie D &ndash; orientadas a la transmisi&oacute;n de documentos";
 choices[18][3] = "Serie I &ndash; red digital de servicios integrados";
 answers[18] = 3;
 units[18] = ['48', '104'];
 blocks[18] = ['B1', 'B4'];
 comments[18] = "Id Pregunta: 6113. Examen TIC A1 MAP 2007";
 preguntaids[18] = 6113


//  Id pregunta: 6474 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Cu&aacute;l de estas afirmaciones NO es correcta?";
 choices[19]= new Array();
 choices[19][0] = "La recomendaci&oacute;n aplicable para HDSL es la G991.1";
 choices[19][1] = "La recomendaci&oacute;n aplicable para ADSL-lite es G992.2";
 choices[19][2] = "La recomendaci&oacute;n aplicable para el ADSL2 es G992.3 y G992.4";
 choices[19][3] = "La recomendaci&oacute;n aplicable del SHDSL es la G992.1";
 answers[19] = 3;
 units[19] = ['107'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 6474. ";
 preguntaids[19] = 6474


//  Id pregunta: 6226 Año de creación de pregunta: 2003
 questions[20]= "21)  Un HUB es un dispositivo de interconexi&oacute;n utilizado para:";
 choices[20]= new Array();
 choices[20][0] = "Enlazar LANs separadas y proporcionar filtrado de paquetes entre ellas.";
 choices[20][1] = "Interconectar redes con protocolos y arquitecturas completamente diferentes, a todos los niveles de comunicaci&oacute;n.";
 choices[20][2] = "Concentrar y organizar el cableado en una red de &aacute;rea local.";
 choices[20][3] = "Controlar las comunicaciones, permit&eacute;ndolas o prohibi&eacute;ndolas seg&uacute;n las pol&iacute;ticas de red que haya definido la organizaci&oacute;n responsable de la red.";
 answers[20] = 2;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 6226. Examen TIC A Castilla La Mancha 2007";
 preguntaids[20] = 6226


//  Id pregunta: 6438 Año de creación de pregunta: 2003
 questions[21]= "22)  Indicar la respuesta falsa";
 choices[21]= new Array();
 choices[21][0] = "Los niveles del lenguaje son: f&oacute;nico, l&eacute;xico, sint&aacute;ctico y sem&aacute;ntico";
 choices[21][1] = "La se&ntilde;al de voz se puede analizar en dos dominios, el espectral y el temporal";
 choices[21][2] = "La frecuencia fundamental de la voz representa la frecuencia de vibraci&oacute;n de las cuerdas vocales";
 choices[21][3] = "La frecuencia fundamental de la voz masculina es de 120 a 500 Hz y la femenina de 50 a 250 Hz";
 answers[21] = 3;
 units[21] = ['122'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 6438. ";
 preguntaids[21] = 6438


//  Id pregunta: 6194 Año de creación de pregunta: 2003
 questions[22]= "23)  &iquest;Qu&eacute; son los servicios web?";
 choices[22]= new Array();
 choices[22][0] = "Son los servicios POST y GET de petici&oacute;n de datos mediante formlarios web bajo el protocolo de aplicaci&oacute;n de HTTP";
 choices[22][1] = "Son los servicios de petici&oacute;n de p&aacute;ginas atendidos por un servidor web";
 choices[22][2] = "Una soluci&oacute;n a los problemas de comunicaci&oacute;n entre aplicaciones en la inform&aacute;tica";
 choices[22][3] = "Son los servicios multimedia ofrecido por los nuevos portales web.";
 answers[22] = 2;
 units[22] = ['113'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6194. Examen TIC A Castilla La Mancha 2007";
 preguntaids[22] = 6194


//  Id pregunta: 6326 Año de creación de pregunta: 2003
 questions[23]= "24)  802.13 es el est&aacute;ndar IEEE referente a";
 choices[23]= new Array();
 choices[23][0] = "USB sin hilos";
 choices[23][1] = "WiMax";
 choices[23][2] = "Bluetooth";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 3;
 units[23] = ['112'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6326. ";
 preguntaids[23] = 6326


//  Id pregunta: 6154 Año de creación de pregunta: 2003
 questions[24]= "25)  En la estructura de la trama del protocolo HDLC (&quot;High level Data Link Control&quot;) el n&uacute;mero de bits del delimitador del comienzo de la trama es:";
 choices[24]= new Array();
 choices[24][0] = "Variable";
 choices[24][1] = "8";
 choices[24][2] = "16";
 choices[24][3] = "32";
 answers[24] = 1;
 units[24] = ['112'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 6154. Examen TIC A1 MAP 2007";
 preguntaids[24] = 6154


//  Id pregunta: 6229 Año de creación de pregunta: 2003
 questions[25]= "26)  Una antena que radia la misma potencia en todas las direcciones es conocida como:";
 choices[25]= new Array();
 choices[25][0] = "De Marconi";
 choices[25][1] = "Hertziana";
 choices[25][2] = "Ionosf&eacute;rica";
 choices[25][3] = "Isotr&oacute;pica";
 answers[25] = 3;
 units[25] = ['108'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 6229. Examen TIC A Castilla La Mancha 2007";
 preguntaids[25] = 6229


//  Id pregunta: 6460 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al Resilient Packet Ring?";
 choices[26]= new Array();
 choices[26][0] = "Es una tecnolog&iacute;a de nivel 2";
 choices[26][1] = "Es el est&aacute;ndar 802.17";
 choices[26][2] = "Est&aacute; basado en una topolog&iacute;a de anillo dual";
 choices[26][3] = "Est&aacute; orientada a servicios s&iacute;ncronos";
 answers[26] = 3;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 6460. ";
 preguntaids[26] = 6460


//  Id pregunta: 6393 Año de creación de pregunta: 2003
 questions[27]= "28)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es";
 choices[27]= new Array();
 choices[27][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[27][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[27][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[27][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[27] = 2;
 units[27] = ['103'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 6393. Examen 2006 JCYL";
 preguntaids[27] = 6393


//  Id pregunta: 6465 Año de creación de pregunta: 2003
 questions[28]= "29)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.21 del IEEE?";
 choices[28]= new Array();
 choices[28][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[28][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[28][2] = "Resilient Packet Ring";
 choices[28][3] = "Traspaso entre redes";
 answers[28] = 3;
 units[28] = ['112'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 6465. ";
 preguntaids[28] = 6465


//  Id pregunta: 6140 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes grupos de trabajo del IEEE dedica su actividad al campo de las redes de &aacute;rea metropolitana?:";
 choices[29]= new Array();
 choices[29][0] = "802.3";
 choices[29][1] = "802.4";
 choices[29][2] = "802.5";
 choices[29][3] = "802.6";
 answers[29] = 3;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 6140. Examen TIC A1 MAP 2007";
 preguntaids[29] = 6140


//  Id pregunta: 6197 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Cu&aacute;l es la longitud equivalente a una clave RSA de 1024 bits si utiliz&aacute;ramos un algoritmo de clave sim&eacute;trica?";
 choices[30]= new Array();
 choices[30][0] = "132";
 choices[30][1] = "80";
 choices[30][2] = "64";
 choices[30][3] = "512";
 answers[30] = 1;
 units[30] = ['119'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6197. Examen TIC A Castilla La Mancha 2007";
 preguntaids[30] = 6197


//  Id pregunta: 6336 Año de creación de pregunta: 2003
 questions[31]= "32)  Indique cu&aacute;l de los siguientes no es un servicio b&aacute;sico de la red SARA de las administraciones:";
 choices[31]= new Array();
 choices[31][0] = "SMTP";
 choices[31][1] = "PROXY";
 choices[31][2] = "DHCP";
 choices[31][3] = "DNS";
 answers[31] = 2;
 units[31] = ['103'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6336. ";
 preguntaids[31] = 6336


//  Id pregunta: 6345 Año de creación de pregunta: 2003
 questions[32]= "33)  Indique cu&aacute;l de las siguientes tecnolog&iacute;as JAVA puede utilizarse para invocar dentro de una aplicaci&oacute;n a un parser DOM:";
 choices[32]= new Array();
 choices[32][0] = "JAX-RPC";
 choices[32][1] = "SAAJ";
 choices[32][2] = "JAXR";
 choices[32][3] = "JAXP";
 answers[32] = 3;
 units[32] = ['116'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 6345. ";
 preguntaids[32] = 6345


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


//  Id pregunta: 6353 Año de creación de pregunta: 2003
 questions[34]= "35)  &ldquo;La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas&rdquo; est&aacute; catalogada por la Ley 9/2014 como infracci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Muy grave";
 choices[34][1] = "Grave";
 choices[34][2] = "Leve";
 choices[34][3] = "No est&aacute; considerado infracci&oacute;n";
 answers[34] = 1;
 units[34] = ['110'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 6353. ";
 preguntaids[34] = 6353


//  Id pregunta: 6196 Año de creación de pregunta: 2003
 questions[35]= "36)  La seguridad de los algoritmos de cifrado debe basarse en:";
 choices[35]= new Array();
 choices[35][0] = "Mantener el funcionamiento de los algoritmos en secreto.";
 choices[35][1] = "Utilizar sistemas propietarios.";
 choices[35][2] = "Demostrar su resistencia desde un punto de vista te&oacute;rico y pr&aacute;ctico.";
 choices[35][3] = "Utilizar tarjeta electr&oacute;nica";
 answers[35] = 2;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 6196. Examen TIC A Castilla La Mancha 2007";
 preguntaids[35] = 6196


//  Id pregunta: 6347 Año de creación de pregunta: 2003
 questions[36]= "37)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G a la generaci&oacute;n 2.5G ha requerido la realizaci&oacute;n de inversiones:";
 choices[36]= new Array();
 choices[36][0] = "En el acceso radio";
 choices[36][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[36][2] = "No fue necesario modificar la infraestructura existente.";
 choices[36][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[36] = 1;
 units[36] = ['108'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 6347. ";
 preguntaids[36] = 6347


//  Id pregunta: 6421 Año de creación de pregunta: 2003
 questions[37]= "38)  Indique cu&aacute;l de los siguientes no es un elemento de la arquitectura de la red europea TESTA-II:";
 choices[37]= new Array();
 choices[37][0] = "LocalDomain";
 choices[37][1] = "EuroDomain";
 choices[37][2] = "EuroNet";
 choices[37][3] = "EuroGate";
 answers[37] = 2;
 units[37] = ['114'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6421. ";
 preguntaids[37] = 6421


//  Id pregunta: 6462 Año de creación de pregunta: 2003
 questions[38]= "39)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.17 del IEEE?";
 choices[38]= new Array();
 choices[38][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[38][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[38][2] = "Resilient Packet Ring";
 choices[38][3] = "Traspaso entre redes";
 answers[38] = 2;
 units[38] = ['112'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 6462. ";
 preguntaids[38] = 6462


//  Id pregunta: 6423 Año de creación de pregunta: 2003
 questions[39]= "40)  Indique cu&aacute;l es una caracter&iacute;stica t&eacute;cnica de W-CDMA, utilizada en UMTS:";
 choices[39]= new Array();
 choices[39][0] = "Emplea radiocanales de 50MHz de ancho de banda";
 choices[39][1] = "Permite transmisiones multic&oacute;digo";
 choices[39][2] = "No admite duplexaci&oacute;n por divisi&oacute;n en frecuencia (FDD)";
 choices[39][3] = "No admite duplexaci&oacute;n por divisi&oacute;n en el tiempo (TDD)";
 answers[39] = 1;
 units[39] = ['117'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 6423. ";
 preguntaids[39] = 6423


//  Id pregunta: 6224 Año de creación de pregunta: 2003
 questions[40]= "41)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[40]= new Array();
 choices[40][0] = "IEEE 802.2";
 choices[40][1] = "IEEE 802.3";
 choices[40][2] = "IEEE 802.4";
 choices[40][3] = "IEEE 802.5";
 answers[40] = 1;
 units[40] = ['112'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 6224. Examen TIC A Castilla La Mancha 2007";
 preguntaids[40] = 6224


//  Id pregunta: 6234 Año de creación de pregunta: 2003
 questions[41]= "42)  El protocolo que contiene las especificaciones para garantizar la integridad y seguridad en mensajer&iacute;a de Servicios Web es:";
 choices[41]= new Array();
 choices[41][0] = "RSA";
 choices[41][1] = "WS-Security (WSS)";
 choices[41][2] = "X.509";
 choices[41][3] = "Kerberos";
 answers[41] = 1;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6234. Examen TIC A Castilla La Mancha 2007";
 preguntaids[41] = 6234


//  Id pregunta: 6236 Año de creación de pregunta: 2003
 questions[42]= "43)  Las VPN's utilizan mecanismos basados en t&uacute;neles para:";
 choices[42]= new Array();
 choices[42][0] = "Habilitar la navegaci&oacute;n por Internet.";
 choices[42][1] = "Encapsular paquetes de un protocolo dentro de otros paquetes pudiendo acomodar as&iacute; protocolos incompatibles.";
 choices[42][2] = "Efectuar una tarificaci&oacute;n a la corporaci&oacute;n que habilita acceso VPN";
 choices[42][3] = "Deshabilitar la seguridad del acceso VPN una vez autenticado el cliente VPN.";
 answers[42] = 1;
 units[42] = ['119'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 6236. Examen TIC A Castilla La Mancha 2007";
 preguntaids[42] = 6236


//  Id pregunta: 6344 Año de creación de pregunta: 2003
 questions[43]= "44)  Indique cu&aacute;l de las siguientes opciones no se corresponde al modelo .NET de desarrollo:";
 choices[43]= new Array();
 choices[43][0] = "Interface Definition Language";
 choices[43][1] = "Common Type System";
 choices[43][2] = "Base Class Library";
 choices[43][3] = "Common Language Runtime";
 answers[43] = 0;
 units[43] = ['115'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 6344. ";
 preguntaids[43] = 6344


//  Id pregunta: 6351 Año de creación de pregunta: 2003
 questions[44]= "45)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n corresponde a:";
 choices[44]= new Array();
 choices[44][0] = "El Ministerio de  Energia, Turismo y Agenda Digital";
 choices[44][1] = "Gobierno";
 choices[44][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[44][3] = "Ninguno de los anteriores";
 answers[44] = 1;
 units[44] = ['110'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6351. ";
 preguntaids[44] = 6351


//  Id pregunta: 6110 Año de creación de pregunta: 2003
 questions[45]= "46)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece que:";
 choices[45]= new Array();
 choices[45][0] = "El Gobierno crear&aacute; una entidad p&uacute;blica para la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[45][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[45][2] = "El Gobierno, mediante Decreto, establecer&aacute; el procedimiento por el que las operadoras gestionar&aacute;n elFondo nacional del servicio universal";
 choices[45][3] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n se encargar&aacute; de lagesti&oacute;n del Fondo nacional del servicio universal";
 answers[45] = 1;
 units[45] = ['121'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 6110. Examen TIC A1 MAP 2007";
 preguntaids[45] = 6110


//  Id pregunta: 6349 Año de creación de pregunta: 2003
 questions[46]= "47)  Cu&aacute;l de las siguientes no es una clase de servicio ATM";
 choices[46]= new Array();
 choices[46][0] = "CBR";
 choices[46][1] = "HBR";
 choices[46][2] = "UBR";
 choices[46][3] = "NRT-VBR";
 answers[46] = 1;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 6349. ";
 preguntaids[46] = 6349


//  Id pregunta: 6498 Año de creación de pregunta: 2003
 questions[47]= "48)  &iquest;Qu&eacute; niveles implementa el m&oacute;dem de cable?";
 choices[47]= new Array();
 choices[47][0] = "El nivel f&iacute;sico, de control de acceso al medio e IP";
 choices[47][1] = "El nivel f&iacute;sico, enlace, de red y de transporte";
 choices[47][2] = "El nivel f&iacute;sico y de control de acceso al medio";
 choices[47][3] = "Depende, a partir de DOCSIS 2.0 se implementan el nivel f&iacute;sico y de control de acceso al medio e IP";
 answers[47] = 2;
 units[47] = ['115'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6498. ";
 preguntaids[47] = 6498


//  Id pregunta: 6227 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Cu&aacute;ntos canales telef&oacute;nicos de voz (tipo B) soporta el Acceso RDSI Primario?";
 choices[48]= new Array();
 choices[48][0] = "2";
 choices[48][1] = "30";
 choices[48][2] = "24";
 choices[48][3] = "120";
 answers[48] = 1;
 units[48] = ['114'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 6227. Examen TIC A Castilla La Mancha 2007";
 preguntaids[48] = 6227


//  Id pregunta: 6119 Año de creación de pregunta: 2003
 questions[49]= "50)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece como infracci&oacute;n leve:";
 choices[49]= new Array();
 choices[49][0] = "La realizaci&oacute;n de actividades sin t&iacute;tulo habilitante cuando sea legalmente necesario";
 choices[49][1] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en lanormativa reguladora de las telecomunicaciones, sea necesaria";
 choices[49][2] = "No facilitar los datos requeridos por la Administraci&oacute;n o retrasar injustificadamente su aportaci&oacute;n cuando resulte exigible conforme a lo previsto por la normativa reguladora de las comunicaciones electr&oacute;nicas.";
 choices[49][3] = "La transferencia de t&iacute;tulos habilitantes o cesi&oacute;n de derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico, sin cumplir con los requisitos establecidos a tal efecto por la normativa de desarrollo de esta Ley";
 answers[49] = 2;
 units[49] = ['121'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6119. Examen TIC A1 MAP 2007";
 preguntaids[49] = 6119


//  Id pregunta: 6346 Año de creación de pregunta: 2003
 questions[50]= "51)  En una comparativa de UMTS frente a GSM, no es cierto que:";
 choices[50]= new Array();
 choices[50][0] = "UMTS utiliza frecuencias m&aacute;s elevadas";
 choices[50][1] = "En UMTS se producen menores p&eacute;rdidas de propagaci&oacute;n";
 choices[50][2] = "En UMTS el tama&ntilde;o de las c&eacute;lulas puede ser inferior";
 choices[50][3] = "La capacidad de una portadora de W-CDMA es mayor que la de una portadora GSM";
 answers[50] = 1;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 6346. ";
 preguntaids[50] = 6346


//  Id pregunta: 6459 Año de creación de pregunta: 2003
 questions[51]= "52)  En el protoloc IPv6, &iquest;cu&aacute;l ser&iacute;a la primera cabecera adicional despu&eacute;s de la cabecera IPv6?";
 choices[51]= new Array();
 choices[51][0] = "Cualquiera, no llevan un orden determinado";
 choices[51][1] = "Cabecera salto a salto";
 choices[51][2] = "Cabecera de autenticaci&oacute;n";
 choices[51][3] = "Cabecera de encaminamiento";
 answers[51] = 1;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 6459. ";
 preguntaids[51] = 6459


//  Id pregunta: 6439 Año de creación de pregunta: 2003
 questions[52]= "53)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[52]= new Array();
 choices[52][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[52][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[52][2] = "Las respuestas a) y b) son verdaderas";
 choices[52][3] = "Ninguna es verdadera";
 answers[52] = 2;
 units[52] = ['112'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 6439. ";
 preguntaids[52] = 6439


//  Id pregunta: 6475 Año de creación de pregunta: 2003
 questions[53]= "54)  En el marco de la liberalizaci&oacute;n de las telecomunicaciones, &iquest;Cu&aacute;les de las siguientes acciones NO se pretende fomentar mediante la desagregaci&oacute;n del bucle de abonado?";
 choices[53]= new Array();
 choices[53][0] = "Incrementar el n&uacute;mero de abonados";
 choices[53][1] = "Incrementar la penetraci&oacute;n de servicios de banda ancha";
 choices[53][2] = "Reducir el precio de los servicios avanzados de telecomunicaciones";
 choices[53][3] = "Favorecer la competencia enlas redes de acceso";
 answers[53] = 0;
 units[53] = ['108'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 6475. ";
 preguntaids[53] = 6475


//  Id pregunta: 6424 Año de creación de pregunta: 2003
 questions[54]= "55)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[54]= new Array();
 choices[54][0] = "Mediante un cable cruzado";
 choices[54][1] = "Mediante un cable sin cruzar o cable plano";
 choices[54][2] = "Mediante un dado de interconexi&oacute;n";
 choices[54][3] = "Mediante cualquiera de las tres opciones indicadas";
 answers[54] = 0;
 units[54] = ['104'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 6424. ";
 preguntaids[54] = 6424


//  Id pregunta: 6362 Año de creación de pregunta: 2003
 questions[55]= "56)  La API JDBC se utiliza:";
 choices[55]= new Array();
 choices[55][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n se pueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones que soporta un SGBD relacional";
 choices[55][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional.";
 choices[55][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas a procedimientos almacenados no est&aacute;n soportados.";
 choices[55][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas de las funciones que soporta un SGBD relacional.";
 answers[55] = 0;
 units[55] = ['116'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 6362. Examen 2006 JCYL";
 preguntaids[55] = 6362


//  Id pregunta: 6116 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutadormultinivel Gigabit Ethernet?:";
 choices[56]= new Array();
 choices[56][0] = "Bus compartido.";
 choices[56][1] = "Memoria compartida.";
 choices[56][2] = "I/O compartida.";
 choices[56][3] = "Crossbar";
 answers[56] = 0;
 units[56] = ['102'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 6116. Examen TIC A1 MAP 2007";
 preguntaids[56] = 6116


//  Id pregunta: 6350 Año de creación de pregunta: 2003
 questions[57]= "58)  Las celdas ATM";
 choices[57]= new Array();
 choices[57][0] = "Tienen un tama&ntilde;o fijo de 53 Bytes";
 choices[57][1] = "Tienen un tama&ntilde;o variable m&aacute;ximo de 53 Bytes";
 choices[57][2] = "Tienen un tama&ntilde;o fijo de 48 Bytes";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 0;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 6350. ";
 preguntaids[57] = 6350


//  Id pregunta: 6348 Año de creación de pregunta: 2003
 questions[58]= "59)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G/2.5G a la generaci&oacute;n 3G ha requerido la realizaci&oacute;n de las inversiones m&aacute;s importantes";
 choices[58]= new Array();
 choices[58][0] = "En el acceso radio";
 choices[58][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[58][2] = "No fue necesario modificar la infraestructura existente.";
 choices[58][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[58] = 0;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 6348. ";
 preguntaids[58] = 6348


//  Id pregunta: 6464 Año de creación de pregunta: 2003
 questions[59]= "60)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.19 del IEEE?";
 choices[59]= new Array();
 choices[59][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[59][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[59][2] = "Resilient Packet Ring";
 choices[59][3] = "Traspaso entre redes";
 answers[59] = 1;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 6464. ";
 preguntaids[59] = 6464


//  Id pregunta: 6134 Año de creación de pregunta: 2003
 questions[60]= "61)  Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?:";
 choices[60]= new Array();
 choices[60][0] = "S&iacute;";
 choices[60][1] = "No";
 choices[60][2] = "Depende de la direcci&oacute;n de la Puerta de Enlace";
 choices[60][3] = "Depende de la configuraci&oacute;n del switch";
 answers[60] = 0;
 units[60] = ['105', '107', '109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 6134. Examen TIC A1 MAP 2007";
 preguntaids[60] = 6134


//  Id pregunta: 6225 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;l es la capacidad de un enlace E1?";
 choices[61]= new Array();
 choices[61][0] = "2048 Kbps.";
 choices[61][1] = "1544 Kbps";
 choices[61][2] = "8448 Kbps.";
 choices[61][3] = "155 Mbps.";
 answers[61] = 0;
 units[61] = ['114'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6225. Examen TIC A Castilla La Mancha 2007";
 preguntaids[61] = 6225


//  Id pregunta: 6232 Año de creación de pregunta: 2009
 questions[62]= "63)  Seg&uacute;n la legislaci&oacute;n aplicable, forma parte del servicio universal:";
 choices[62]= new Array();
 choices[62][0] = "Una conexi&oacute;n que deber&aacute; permitir comunicaciones en banda ancha, en los t&eacute;rminos que se definan por la normativa vigente";
 choices[62][1] = "Una conexi&oacute;n con acceso a servicios de televisi&oacute;n sobre IP";
 choices[62][2] = "Una conexi&oacute;n a telefon&iacute;a m&oacute;vil GSM";
 choices[62][3] = "Una conexi&oacute;n que permita comunicaciones de datos a velocidad suficiente para acceder de forma fucional a Internet y a otras redes de &aacute;mbito privado";
 answers[62] = 0;
 units[62] = ['121'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 6232. Examen TIC A Castilla La Mancha 2007";
 preguntaids[62] = 6232


//  Id pregunta: 6228 Año de creación de pregunta: 2003
 questions[63]= "64)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[63]= new Array();
 choices[63][0] = "La tecnolog&iacute;a WIMAX permite operar en condiciones en las que no existe l&iacute;nea de visi&oacute;n directa entre la estaci&oacute;n base y el terminal.";
 choices[63][1] = "En Espa&ntilde;a, la tecnolog&iacute;a WIMAX s&oacute;lo puede utilizarse en la banda de uso libre de 5 GHz.";
 choices[63][2] = "La tecnolog&iacute;a WIMAX utiliza un esquema de modulaci&oacute;n multiportadora OFDM.";
 choices[63][3] = "La tecnolog&iacute;a WIMAX se basa en aspectos de la capa f&iacute;sica y de control de acceso al m&eacute;dio del est&aacute;ndar IEEE 802.16";
 answers[63] = 1;
 units[63] = ['108'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 6228. Examen TIC A Castilla La Mancha 2007";
 preguntaids[63] = 6228


//  Id pregunta: 6422 Año de creación de pregunta: 2003
 questions[64]= "65)  La red de conexi&oacute;n r&aacute;pida inaugurada por la Uni&oacute;n Europea en 2005 para atender la interconexi&oacute;n de investigadores europeos se denomina:";
 choices[64]= new Array();
 choices[64][0] = "TEIN2";
 choices[64][1] = "GEANT2";
 choices[64][2] = "ALICE";
 choices[64][3] = "DANTE";
 answers[64] = 1;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 6422. ";
 preguntaids[64] = 6422


//  Id pregunta: 6231 Año de creación de pregunta: 2003
 questions[65]= "66)  &iquest;Qu&eacute; tama&ntilde;o de celda se utiliza en ATM (Asynchronous Transfer Mode)?";
 choices[65]= new Array();
 choices[65][0] = "Tiene un tama&ntilde;o variable, al tratarse de conmutaci&oacute;n de paquetes de longitud variable.";
 choices[65][1] = "53 bytes";
 choices[65][2] = "1024 bytes";
 choices[65][3] = "64 bytes";
 answers[65] = 1;
 units[65] = ['110'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 6231. Examen TIC A Castilla La Mancha 2007";
 preguntaids[65] = 6231


//  Id pregunta: 6125 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Qu&eacute; se utiliza para codificar la voz que se transmite por la red IP?:";
 choices[66]= new Array();
 choices[66][0] = "Retardo";
 choices[66][1] = "Encriptado";
 choices[66][2] = "C&oacute;decs";
 choices[66][3] = "Claves";
 answers[66] = 2;
 units[66] = ['122'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 6125. Examen TIC A1 MAP 2007";
 preguntaids[66] = 6125


//  Id pregunta: 6461 Año de creación de pregunta: 2003
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as permiten la transmisi&oacute;n de datos sobre una infraestructura de fibra &oacute;ptica para una red de &aacute;rea metropolitana?";
 choices[67]= new Array();
 choices[67][0] = "DQDB";
 choices[67][1] = "CDDI";
 choices[67][2] = "HIPPI";
 choices[67][3] = "PDDI";
 answers[67] = 0;
 units[67] = ['112'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 6461. ";
 preguntaids[67] = 6461


//  Id pregunta: 6335 Año de creación de pregunta: 2003
 questions[68]= "69)  Indique que respuesta no es correcta. La red transeuropea sTESTA:";
 choices[68]= new Array();
 choices[68][0] = "Corresponde con una de las infraestructuras y servicios comunes de IDABC.";
 choices[68][1] = "Conecta a trav&eacute;s de Internet las redes administrativas de los Estados Miembros y las instituciones europeas.";
 choices[68][2] = "Permite el acceso a los servicios paneuropeos de Administraci&oacute;n Electr&oacute;nica mediante el enlace SARA-sTESTA.";
 choices[68][3] = "Ahorra a los Departamentos de la Administraci&oacute;n el coste de enlaces independientes con administraciones de otros estados miembros";
 answers[68] = 1;
 units[68] = ['103'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6335. ";
 preguntaids[68] = 6335


//  Id pregunta: 6338 Año de creación de pregunta: 2003
 questions[69]= "70)  Indique cu&aacute;l de los siguientes formatos no se corresponde con un tipo de formato de imagen est&aacute;tica:";
 choices[69]= new Array();
 choices[69][0] = "PNG";
 choices[69][1] = "JPEG";
 choices[69][2] = "GIF";
 choices[69][3] = "MNG";
 answers[69] = 3;
 units[69] = ['114'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 6338. ";
 preguntaids[69] = 6338


//  Id pregunta: 6463 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.18 del IEEE?";
 choices[70]= new Array();
 choices[70][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[70][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[70][2] = "Resilient Packet Ring";
 choices[70][3] = "Traspaso entre redes";
 answers[70] = 0;
 units[70] = ['112'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 6463. ";
 preguntaids[70] = 6463


//  Id pregunta: 6496 Año de creación de pregunta: 2003
 questions[71]= "72)  En una red de CATV &iquest;cu&aacute;l es el rango de frecuencias que se utiliza en sentido ascendente para el envio de informaci&oacute;n de usuario a cabecera?";
 choices[71]= new Array();
 choices[71][0] = "De 55 a 150";
 choices[71][1] = "De 550 a 860";
 choices[71][2] = "De 50 a 550";
 choices[71][3] = "De 5 a 50";
 answers[71] = 3;
 units[71] = ['115'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 6496. ";
 preguntaids[71] = 6496


//  Id pregunta: 6468 Año de creación de pregunta: 2003
 questions[72]= "73)  &iquest;C&uacute;al de los siguientes protocolos de encaminamiento NO es interno?";
 choices[72]= new Array();
 choices[72][0] = "BGP";
 choices[72][1] = "EIGRP";
 choices[72][2] = "OSPF";
 choices[72][3] = "IGRP";
 answers[72] = 0;
 units[72] = ['102'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 6468. ";
 preguntaids[72] = 6468


//  Id pregunta: 6235 Año de creación de pregunta: 2003
 questions[73]= "74)  El transporte de voz en tiempo real a trav&eacute;s de redes IP se efect&uacute;a por medio de los protocolos:";
 choices[73]= new Array();
 choices[73][0] = "MPLS sobre UDP";
 choices[73][1] = "RVSP";
 choices[73][2] = "RTP sobre TCP";
 choices[73][3] = "RTP sobre UDP";
 answers[73] = 3;
 units[73] = ['110'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 6235. Examen TIC A Castilla La Mancha 2007";
 preguntaids[73] = 6235


//  Id pregunta: 6230 Año de creación de pregunta: 2003
 questions[74]= "75)  La Tecnolog&iacute;a empleada por la Televisi&oacute;n Digital Terrestre (TDT) permite que el despliegue de las redes de radiodifusi&oacute;n se efect&uacute;e:";
 choices[74]= new Array();
 choices[74][0] = "En redes de Frecuencia &Uacute;nica (SFN) y en redes Multifrecuencia (MFN).";
 choices[74][1] = "&Uacute;nicamente en redes de Frecuencia &Uacute;nica (SFN).";
 choices[74][2] = "&Uacute;nicamente en redes Multifrecuencia (MFN).";
 choices[74][3] = "En redes de Frecuencia (SFN) sin necesidad de sincronizar los transmisores radio.";
 answers[74] = 0;
 units[74] = ['115'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 6230. Examen TIC A Castilla La Mancha 2007";
 preguntaids[74] = 6230


