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
//  Id pregunta: 4664 Año de creación de pregunta: 2002
 questions[0]= "1)  De las siguientes direcciones IP para Internet s&oacute;lo una puede asignarse de forma correcta seg&uacute;n las normas que regulan el formato de estas direcciones:";
 choices[0]= new Array();
 choices[0][0] = "1";
 choices[0][1] = "198.70.8.255";
 choices[0][2] = "64.3.53.255";
 choices[0][3] = "640.13.53.40";
 answers[0] = 2;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4664. ";
 preguntaids[0] = 4664


//  Id pregunta: 4734 Año de creación de pregunta: 2002
 questions[1]= "2)  El protocolo ARP es:";
 choices[1]= new Array();
 choices[1][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[1][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[1][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[1][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[1] = 2;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4734. ";
 preguntaids[1] = 4734


//  Id pregunta: 4719 Año de creación de pregunta: 2002
 questions[2]= "3)  ICMP es:";
 choices[2]= new Array();
 choices[2][0] = "un protocolo de intercambio de correos electr&oacute;nicos";
 choices[2][1] = "un protocolo de gesti&oacute;n de internet";
 choices[2][2] = "un protocolo de mensajes para el control de internet";
 choices[2][3] = "ninguno de los anteriores";
 answers[2] = 2;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4719. ";
 preguntaids[2] = 4719


//  Id pregunta: 4690 Año de creación de pregunta: 2002
 questions[3]= "4)  El m&oacute;dulo de transferencia s&iacute;ncrono (STM) principal de SDH  se transmite a una velocidad de:";
 choices[3]= new Array();
 choices[3][0] = "51.84 Mbps";
 choices[3][1] = "1984 kbps";
 choices[3][2] = "100 Mbps";
 choices[3][3] = "155.52 Mbps";
 answers[3] = 3;
 units[3] = ['107'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4690. ";
 preguntaids[3] = 4690


//  Id pregunta: 4660 Año de creación de pregunta: 2002
 questions[4]= "5)  Cuando el comando &lsquo;ping 127.0.0.1&rsquo; produce un eco correcto:";
 choices[4]= new Array();
 choices[4][0] = "Significa que la tarjeta de red del ordenador donde se ejecuta funciona correctamente";
 choices[4][1] = "Significa que la pila de protocolos TCP/IP del ordenador donde se ejecuta funciona correctamente, aunque la tarjeta de red del mismo ordenador falle";
 choices[4][2] = "El mensaje de eco incluye el n&uacute;mero de saltos entre dos ordenadores en la red IP";
 choices[4][3] = "Nada de lo anterior es correcto";
 answers[4] = 1;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4660. ";
 preguntaids[4] = 4660


//  Id pregunta: 4726 Año de creación de pregunta: 2002
 questions[5]= "6)  Indicar entre las siguientes normas del IEEE la que trata sobre seguridad LAN/MAN interoperable:";
 choices[5]= new Array();
 choices[5][0] = "802.1";
 choices[5][1] = "802.11";
 choices[5][2] = "802.12";
 choices[5][3] = "802.13";
 answers[5] = 0;
 units[5] = ['112'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4726. ";
 preguntaids[5] = 4726


//  Id pregunta: 4731 Año de creación de pregunta: 2002
 questions[6]= "7)  Indique la afirmaci&oacute;n incorrecta referente a la RDSI:";
 choices[6]= new Array();
 choices[6][0] = "Se puede realizar el acceso a trav&eacute;s de las l&iacute;neas existentes a dos hilos";
 choices[6][1] = "La se&ntilde;alizaci&oacute;n por canal com&uacute;n (CCS7) se realiza entre centrales";
 choices[6][2] = "El sistema de se&ntilde;alizaci&oacute;n para abonados digitales RDSI (DSS1) ha sido definido para su empleo entre centrales y equipos terminales";
 choices[6][3] = "El transporte de se&ntilde;alizaci&oacute;n (Canal D) no permite el empaquetamiento de datos";
 answers[6] = 3;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4731. ";
 preguntaids[6] = 4731


//  Id pregunta: 4710 Año de creación de pregunta: 2002
 questions[7]= "8)  Existen varios procedimientos de ataques en internet, como el &quot;hijacking&quot;. &iquest;En qu&eacute; consiste &eacute;ste?:";
 choices[7]= new Array();
 choices[7][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP origen";
 choices[7][1] = "Repudiaci&oacute;n de la auditor&iacute;a del mensaje";
 choices[7][2] = "secuestro de una conexi&oacute;n TCP/IP por ejemplo durante una sesi&oacute;n Telnet permitiendo a un atacante inyectar comandos o realizar un DoS durante dicha sesi&oacute;n.";
 choices[7][3] = "Escucha de una comunicaci&oacute;n y grabaci&oacute;n de su contenido";
 answers[7] = 2;
 units[7] = ['119'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4710. ";
 preguntaids[7] = 4710


//  Id pregunta: 4655 Año de creación de pregunta: 2002
 questions[8]= "9)  Con voz sobre IP:";
 choices[8]= new Array();
 choices[8][0] = "Se alcanza la misma calidad que con llamadas telef&oacute;nicas convencionales";
 choices[8][1] = "Se pueden realizar llamadas internacionales al mismo precio que una llamada local, el precio de la conexi&oacute;n con el nodo de acceso a Internet";
 choices[8][2] = "Las 2 respuestas anteriores son correctas";
 choices[8][3] = "Las 2 respuestas anteriores son falsas";
 answers[8] = 2;
 units[8] = ['110'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4655. ";
 preguntaids[8] = 4655


//  Id pregunta: 4730 Año de creación de pregunta: 2002
 questions[9]= "10)  Indique cu&aacute;l de las siguientes informaciones sobre la interconexi&oacute;n de redes locales desde el punto de vista del hardware es correcta:";
 choices[9]= new Array();
 choices[9][0] = "Las funciones del Enrutador consiste en compatibilizar dos medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[9][1] = "Los Repetidores operan posibilitando la conexi&oacute;n de elementos de red a nivel de enlace dentro del subnivel MAC (Medium Access Control)";
 choices[9][2] = "El Puente compatibiliza elementos de dos redes locales a nivel de red";
 choices[9][3] = "Las Pasarelas operan a nivel de transporte o en niveles superiores";
 answers[9] = 3;
 units[9] = ['102'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4730. ";
 preguntaids[9] = 4730


//  Id pregunta: 4716 Año de creación de pregunta: 2002
 questions[10]= "11)  H.320 es el est&aacute;ndar para:";
 choices[10]= new Array();
 choices[10][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[10][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[10][2] = "videoconferencia multipunto sobre RDSI";
 choices[10][3] = "videconferencia multipunto sobre internet";
 answers[10] = 2;
 units[10] = ['122'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4716. ";
 preguntaids[10] = 4716


//  Id pregunta: 4732 Año de creación de pregunta: 2002
 questions[11]= "12)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[11]= new Array();
 choices[11][0] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[11][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[11][2] = "Los nodos PPP se anuncian para obtenci&oacute;n din&aacute;mica de direcci&oacute;n o preguntan a los servidores para uqe se les asigne una direcci&oacute;n";
 choices[11][3] = "El nodo iniciador envia tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 answers[11] = 3;
 units[11] = ['112'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4732. ";
 preguntaids[11] = 4732


//  Id pregunta: 4671 Año de creación de pregunta: 2002
 questions[12]= "13)  Del protocolo IKE de IPSec podemos decir:";
 choices[12]= new Array();
 choices[12][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[12][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[12][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[12][3] = "nada de lo anterior es cierto";
 answers[12] = 0;
 units[12] = ['119'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4671. Consultar rfc 2409";
 preguntaids[12] = 4671


//  Id pregunta: 4689 Año de creación de pregunta: 2002
 questions[13]= "14)  El modelo para interconexi&oacute;n de sistemas abiertos (OSI) describe siete niveles. &iquest;D&oacute;nde est&aacute; situado ASN.1?:";
 choices[13]= new Array();
 choices[13][0] = "Presentaci&oacute;n";
 choices[13][1] = "Aplicaci&oacute;n";
 choices[13][2] = "Sesi&oacute;n";
 choices[13][3] = "Transporte";
 answers[13] = 0;
 units[13] = ['105'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4689. ";
 preguntaids[13] = 4689


//  Id pregunta: 4681 Año de creación de pregunta: 2002
 questions[14]= "15)  El est&aacute;ndar X.25 usa, a nivel de enlace, el protocolo:";
 choices[14]= new Array();
 choices[14][0] = "SDLC";
 choices[14][1] = "LAP-B";
 choices[14][2] = "Ethernet";
 choices[14][3] = "SAP";
 answers[14] = 1;
 units[14] = ['112'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4681. ";
 preguntaids[14] = 4681


//  Id pregunta: 4694 Año de creación de pregunta: 2002
 questions[15]= "16)  El nivel de enlace del modelo OSI tiene como funci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Enrutar los datos";
 choices[15][1] = "Conectar sistemas no enlazados directamente";
 choices[15][2] = "Transmitir informaci&oacute;n entre nodos conectados entre si directamente";
 choices[15][3] = "Mantener la integridad de los datos entre extremos de la red";
 answers[15] = 2;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4694. ";
 preguntaids[15] = 4694


//  Id pregunta: 4668 Año de creación de pregunta: 2002
 questions[16]= "17)  De los siguientes, &iquest;cu&aacute;l no es un servicio ofrecido por la norma FTAM de OSI?:";
 choices[16]= new Array();
 choices[16][0] = "Seguridad, gesti&oacute;n de permisos de acceso";
 choices[16][1] = "Transferencia, mover ficheros o parte de ellos";
 choices[16][2] = "Acceso, localizaci&oacute;n de un registro";
 choices[16][3] = "Gesti&oacute;n, creaci&oacute;n / borrado de ficheros";
 answers[16] = 0;
 units[16] = ['103'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4668. ";
 preguntaids[16] = 4668


//  Id pregunta: 4712 Año de creación de pregunta: 2002
 questions[17]= "18)  Funciones como contabilidad, enrutamiento, control de flujo, control de congesti&oacute;n o direccionamiento pertenecen al:";
 choices[17]= new Array();
 choices[17][0] = "nivel de transporte";
 choices[17][1] = "nivel de enlace";
 choices[17][2] = "nivel de red";
 choices[17][3] = "son funciones presentes en varios niveles";
 answers[17] = 3;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4712. ";
 preguntaids[17] = 4712


//  Id pregunta: 4680 Año de creación de pregunta: 2002
 questions[18]= "19)  El est&aacute;ndar ITU-T para audio digital no comprimido en el sonido telef&oacute;nico es:";
 choices[18]= new Array();
 choices[18][0] = "Q.932";
 choices[18][1] = "G.722";
 choices[18][2] = "G.711";
 choices[18][3] = "Q.931";
 answers[18] = 2;
 units[18] = ['117'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4680. ";
 preguntaids[18] = 4680


//  Id pregunta: 4683 Año de creación de pregunta: 2002
 questions[19]= "20)  El interfaz A-bis en GSM es el que va entre:";
 choices[19]= new Array();
 choices[19][0] = "BTS y BSC";
 choices[19][1] = "MSC y HLR";
 choices[19][2] = "HLR y VLR";
 choices[19][3] = "BSC y MSC";
 answers[19] = 0;
 units[19] = ['117'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4683. ";
 preguntaids[19] = 4683


//  Id pregunta: 4686 Año de creación de pregunta: 2002
 questions[20]= "21)  El MIB est&aacute;ndar o MIB-I se complet&oacute; con:";
 choices[20]= new Array();
 choices[20][0] = "MIB-2";
 choices[20][1] = "MIB-II";
 choices[20][2] = "Con la RFC 1213";
 choices[20][3] = "La 'b' y la 'c' son correctas";
 answers[20] = 3;
 units[20] = ['114'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4686. ";
 preguntaids[20] = 4686


//  Id pregunta: 4672 Año de creación de pregunta: 2002
 questions[21]= "22)  Dentro de la especificaci&oacute;n de la Red Digital de Servicios Integrados, se definen diversos interfaces. Indique cual de las opciones siguientes es verdadera:";
 choices[21]= new Array();
 choices[21][0] = "El interfaz U es el definido entre la central p&uacute;blica y el equipo terminado de red";
 choices[21][1] = "El interfaz U utiliza un par de hilos telef&oacute;nicos como los de la RTB";
 choices[21][2] = "El interfaz U depende de las compa&ntilde;&iacute;as telef&oacute;nicas";
 choices[21][3] = "Todas las respuestas anteriores son ciertas";
 answers[21] = 3;
 units[21] = ['114'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4672. ";
 preguntaids[21] = 4672


//  Id pregunta: 4659 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es una debilidad de las redes inal&aacute;mbricas frente a otro tipo de redes?:";
 choices[22]= new Array();
 choices[22][0] = "Poca seguridad";
 choices[22][1] = "Escasa protecci&oacute;n frente a interferencias";
 choices[22][2] = "Precio elevado";
 choices[22][3] = "Cobertura limitada";
 answers[22] = 2;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4659. ";
 preguntaids[22] = 4659


//  Id pregunta: 4667 Año de creación de pregunta: 2002
 questions[23]= "24)  De los protocolos para proporcionar seguridad en internet es cierto que:";
 choices[23]= new Array();
 choices[23][0] = "IPSec no es transparente a las aplicaciones";
 choices[23][1] = "PPP asegura s&oacute;lo un enlace, pero no la conexi&oacute;n completa";
 choices[23][2] = "WTLS es m&aacute;s complejo que TLS ya que se adapta al entorno inal&aacute;mbrico";
 choices[23][3] = "Los protocolos a nivel de aplicaci&oacute;n son comunes a grupos de aplicaciones seg&uacute;n su funcionalidad";
 answers[23] = 1;
 units[23] = ['119'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4667. ";
 preguntaids[23] = 4667


//  Id pregunta: 4676 Año de creación de pregunta: 2002
 questions[24]= "25)  Dentro de los sistemas m&oacute;viles celulares el t&eacute;rmino 'handover' hace referencia a los problemas relativos a:";
 choices[24]= new Array();
 choices[24][0] = "Traspaso del m&oacute;vil de una c&eacute;lula a otra";
 choices[24][1] = "La incompatibilidad entre sistemas";
 choices[24][2] = "Los sistemas de directorio X.500";
 choices[24][3] = "Los problemas debidos a la saturaci&oacute;n del espectro radioel&eacute;ctrico";
 answers[24] = 0;
 units[24] = ['117'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4676. ";
 preguntaids[24] = 4676


//  Id pregunta: 4723 Año de creación de pregunta: 2002
 questions[25]= "26)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de &aacute;rea metropolitana:";
 choices[25]= new Array();
 choices[25][0] = "802.6";
 choices[25][1] = "802.7";
 choices[25][2] = "802.8";
 choices[25][3] = "802.9";
 answers[25] = 0;
 units[25] = ['112'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4723. ";
 preguntaids[25] = 4723


//  Id pregunta: 4662 Año de creación de pregunta: 2002
 questions[26]= "27)  Cuando una estaci&oacute;n Token Ring detecta un problema serio en la red:";
 choices[26]= new Array();
 choices[26][0] = "La estaci&oacute;n que lo detecta envia una trama de advertencia ('beacon') que define el dominio del fallo";
 choices[26][1] = "La estaci&oacute;n espera que el servidor local m&aacute;s cercano reconfigure las tablas de direcciones";
 choices[26][2] = "La estaci&oacute;n transmite mensajes exploratorios a sus siguientes vecinos activos";
 choices[26][3] = "La estaci&oacute;n escucha por tr&aacute;fico y si no oye nada, manda testigos a todas las estaciones activas locales (en el anillo)";
 answers[26] = 0;
 units[26] = ['102'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4662. ";
 preguntaids[26] = 4662


//  Id pregunta: 4721 Año de creación de pregunta: 2002
 questions[27]= "28)  Indicar cu&aacute;l de los siguientes equipos no deber&iacute;a colocarse en una DMZ:";
 choices[27]= new Array();
 choices[27][0] = "Bastion host";
 choices[27][1] = "Servidor Web";
 choices[27][2] = "Servidor FTP";
 choices[27][3] = "Servidor de aplicaciones";
 answers[27] = 3;
 units[27] = ['113'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4721. ";
 preguntaids[27] = 4721


//  Id pregunta: 4727 Año de creación de pregunta: 2002
 questions[28]= "29)  Indicar la respuesta correcta: El protocolo HTTP, utilizado al navegar por Internet:";
 choices[28]= new Array();
 choices[28][0] = "Realiza una nueva conexi&oacute;n TCP con el servidor cada vez que se solicita una nueva p&aacute;gina web";
 choices[28][1] = "Abre una conexi&oacute;n TCP con el servidor la primera vez que se solicita una p&aacute;gina y la mantiene abierta mientras no se cambia de servidor";
 choices[28][2] = "HTTP no es un protocolo de comunicaciones, sino un lenguaje para la creaci&oacute;n de p&aacute;ginas web";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = 0;
 units[28] = ['112'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4727. ";
 preguntaids[28] = 4727


//  Id pregunta: 4728 Año de creación de pregunta: 2002
 questions[29]= "30)  Indicar la respuesta verdadera respecto a la pila de protocolos TCP/IP:";
 choices[29]= new Array();
 choices[29][0] = "NNTP usa UDP";
 choices[29][1] = "NTP utiliza &uacute;nicamente TCP";
 choices[29][2] = "FTP utiliza TCP";
 choices[29][3] = "NTP no es necesario en un entorno multihost";
 answers[29] = 2;
 units[29] = ['109'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4728. ";
 preguntaids[29] = 4728


//  Id pregunta: 4697 Año de creación de pregunta: 2002
 questions[30]= "31)  El nivel encargado de la correcci&oacute;n definitiva de errores de comunicaci&oacute;n en el modelo de referencia OSI es:";
 choices[30]= new Array();
 choices[30][0] = "Sesi&oacute;n";
 choices[30][1] = "Red";
 choices[30][2] = "Transporte";
 choices[30][3] = "Enlace";
 answers[30] = 2;
 units[30] = ['105'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4697. ";
 preguntaids[30] = 4697


//  Id pregunta: 4670 Año de creación de pregunta: 2002
 questions[31]= "32)  De SDH y SONET podemos decir:";
 choices[31]= new Array();
 choices[31][0] = "son en realidad lo mismo pero con diferente denominaci&oacute;n en Norteam&eacute;rica y Europa";
 choices[31][1] = "son distintos en la disposici&oacute;n de los contenedores virtuales pero todas sus tasas de transmisi&oacute;n coinciden";
 choices[31][2] = "son compatibles en conjunto, adaptando las velocidades de diferentes niveles de capacidad";
 choices[31][3] = "son jerarqu&iacute;as de transmisi&oacute;n digital totalmente distintas e incompatibles entre s&iacute;";
 answers[31] = 2;
 units[31] = ['107'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4670. ";
 preguntaids[31] = 4670


//  Id pregunta: 4674 Año de creación de pregunta: 2002
 questions[32]= "33)  Dentro de las normas X.400, &iquest;a qu&eacute; corresponde el protocolo P2?:";
 choices[32]= new Array();
 choices[32][0] = "Es el protocolo que se establece entre dos agentes de transferencia de mensajes";
 choices[32][1] = "Es el protocolo que se establece entre el agente de usuario y el agente de transferencia de mensajes";
 choices[32][2] = "Es el protocolo que se establece entre dos agentes de usuario";
 choices[32][3] = "Es el protocolo que se establece entre el agente de usuario y el almacen de mensajes";
 answers[32] = 2;
 units[32] = ['116'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4674. ";
 preguntaids[32] = 4674


//  Id pregunta: 4677 Año de creación de pregunta: 2002
 questions[33]= "34)  Dentro de una celda ATM, el campo GFC:";
 choices[33]= new Array();
 choices[33][0] = "S&oacute;lo esta presente en las celdas de los interfaces usuario-red";
 choices[33][1] = "Al igual que el campo CLP, &quot;marca&quot; la celda a lo largo de todo su transito por la red";
 choices[33][2] = "Tiene una longitud de 1 bit";
 choices[33][3] = "Proporciona la sincronizaci&oacute;n entre celdas";
 answers[33] = 0;
 units[33] = ['107'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4677. ";
 preguntaids[33] = 4677


//  Id pregunta: 4663 Año de creación de pregunta: 2002
 questions[34]= "35)  De IPSec, una de las siguientes afirmaciones no es cierta. Indicar cu&aacute;l:";
 choices[34]= new Array();
 choices[34][0] = "Para transmitir IPSec, tanto en modo transporte como en modo t&uacute;nel se ha de incluir una cabecera justo delante de la cabecera IP original y una cola detr&aacute;s de los datos";
 choices[34][1] = "En modo transporte, IPSec se tiene entre los sistemas finales, mientras en modo t&uacute;nel se tiene IPSec entre routers pero IP en los tramos routers-sistemas finales";
 choices[34][2] = "El protocolo por defecto para la gesti&oacute;n de claves en IPSec se denomina IKE (Internet Key Exchange)";
 choices[34][3] = "Entre otros, IPSec proporciona mecanismos anti-replay, autenticaci&oacute;n, control de acceso y confidencialidad de datos";
 answers[34] = 0;
 units[34] = ['120'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4663. ";
 preguntaids[34] = 4663


//  Id pregunta: 4700 Año de creación de pregunta: 2002
 questions[35]= "36)  El nivel f&iacute;sico incorpora un mecanismo de deteccion de canal libre que se denomina dentro de la especificaci&oacute;n 802.11:";
 choices[35]= new Array();
 choices[35][0] = "Carrier Detection";
 choices[35][1] = "Clear Channel Assessment";
 choices[35][2] = "Channel Check";
 choices[35][3] = "Carrier Assesment";
 answers[35] = 1;
 units[35] = ['107'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4700. ";
 preguntaids[35] = 4700


//  Id pregunta: 4695 Año de creación de pregunta: 2002
 questions[36]= "37)  El nivel de sesi&oacute;n del modelo de referencia OSI :";
 choices[36]= new Array();
 choices[36][0] = "Permite a un usuario que la sintaxis y la sem&aacute;ntica del mensaje sea entendida por el destinatario";
 choices[36][1] = "Se encarga de coordinar aplicaciones como el correo electr&oacute;nico o la transferencia de documentos";
 choices[36][2] = "Permite a un usuario entrar en un sistema remoto y, si es necesario, transferir ficheros entre dichos sistemas";
 choices[36][3] = "Asegura que todos los fragmentos del mensaje lleguen a su destino";
 answers[36] = 2;
 units[36] = ['105'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4695. ";
 preguntaids[36] = 4695


//  Id pregunta: 4696 Año de creación de pregunta: 2002
 questions[37]= "38)  El nivel de transporte de modelo OSI gestiona funciones como:";
 choices[37]= new Array();
 choices[37][0] = "Direccionamiento f&iacute;sico, secuenciamiento de tramas, control de flujo y notificaci&oacute;n de errores";
 choices[37][1] = "Compresi&oacute;n y encriptaci&oacute;n de datos";
 choices[37][2] = "Control de flujo, multiplexaci&oacute;n y gesti&oacute;n de errores";
 choices[37][3] = "Identificaci&oacute;n de los corresponsales y sincronizaci&oacute;n de la comunicaci&oacute;n";
 answers[37] = 2;
 units[37] = ['105'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4696. ";
 preguntaids[37] = 4696


//  Id pregunta: 4692 Año de creación de pregunta: 2002
 questions[38]= "39)  El nivel 6 del modelo OSI es:";
 choices[38]= new Array();
 choices[38][0] = "Transporte";
 choices[38][1] = "Presentaci&oacute;n";
 choices[38][2] = "Sesi&oacute;n";
 choices[38][3] = "Aplicaci&oacute;n";
 answers[38] = 1;
 units[38] = ['105'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4692. ";
 preguntaids[38] = 4692


//  Id pregunta: 4706 Año de creación de pregunta: 2002
 questions[39]= "40)  Entre los equipos de interconexi&oacute;n de redes:";
 choices[39]= new Array();
 choices[39][0] = "Los bridges operan a nivel de red";
 choices[39][1] = "Los repetidores operan a nivel de MAC";
 choices[39][2] = "Los bridges realizan funciones de autoaprendizaje, filtrado y reenvio";
 choices[39][3] = "Las pasarelas o gateways son elementos de interconexi&oacute;n independientes del protocolo de nivel de red";
 answers[39] = 2;
 units[39] = ['102'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4706. ";
 preguntaids[39] = 4706


//  Id pregunta: 4685 Año de creación de pregunta: 2002
 questions[40]= "41)  El m&eacute;todo de Okumura-Hata se usa para:";
 choices[40]= new Array();
 choices[40][0] = "Resoluci&oacute;n de conflictos en negociaciones cuando los contendientes no desean verse en persona";
 choices[40][1] = "Calcular el coste de aplicaci&oacute;n de una u otra estrategia de adquisici&oacute;n de bienes y servicios inform&aacute;ticos y de telecomunicaci&oacute;n";
 choices[40][2] = "C&aacute;lculo de coberturas en enlaces radioel&eacute;ctricos";
 choices[40][3] = "No existe el m&eacute;todo de Okumura-Hata";
 answers[40] = 2;
 units[40] = ['117'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4685. ";
 preguntaids[40] = 4685


//  Id pregunta: 4691 Año de creación de pregunta: 2002
 questions[41]= "42)  El nivel 5 de OSI:";
 choices[41]= new Array();
 choices[41][0] = "Tiene como principal funci&oacute;n el control de la subred de comunicaciones";
 choices[41][1] = "Tiene como objetivo el ofrecer un servicio para que dos entidades puedan organizar y sincronizar su di&aacute;logo";
 choices[41][2] = "Realiza funciones de encaminamiento de la informaci&oacute;n";
 choices[41][3] = "Se subdivide en dos subniveles (LLC y MAC)";
 answers[41] = 1;
 units[41] = ['105'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4691. ";
 preguntaids[41] = 4691


//  Id pregunta: 4678 Año de creación de pregunta: 2002
 questions[42]= "43)  Dentro del modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se denominan primitivas a:";
 choices[42]= new Array();
 choices[42][0] = "Los servicios que al nivel inferior proporciona al nivel superior";
 choices[42][1] = "La interacci&oacute;n entre niveles adyacentes";
 choices[42][2] = "Los puntos de acceso al servicio";
 choices[42][3] = "Los multiples identificadores de conexi&oacute;n";
 answers[42] = 0;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4678. ";
 preguntaids[42] = 4678


//  Id pregunta: 4682 Año de creación de pregunta: 2002
 questions[43]= "44)  El hacer subredes (subnetting) en redes IP permite:";
 choices[43]= new Array();
 choices[43][0] = "Un esquema de direccionamiento jer&aacute;rquico que mejora la flexibilidad de la red";
 choices[43][1] = "Al administrador de la red, obtener m&aacute;s direcciones de una direcci&oacute;n dada IP";
 choices[43][2] = "Que el 'mundo exterior' conozca mejor la estructura interna de nuestra red";
 choices[43][3] = "Que nuestra red pueda formar parte del www";
 answers[43] = 0;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4682. ";
 preguntaids[43] = 4682


//  Id pregunta: 4718 Año de creación de pregunta: 2002
 questions[44]= "45)  IAB, IETF, IRTF, IESG son:";
 choices[44]= new Array();
 choices[44][0] = "protocolos de Internet";
 choices[44][1] = "organismos relacionados con Internet";
 choices[44][2] = "organismos de estandarizaci&oacute;n en el campo de redes tanto inal&aacute;mbricas como cableadas";
 choices[44][3] = "protocolos de nivel de transporte, en particular de encaminamiento y optimizaci&oacute;n de rutas";
 answers[44] = 1;
 units[44] = ['103'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4718. ";
 preguntaids[44] = 4718


//  Id pregunta: 4693 Año de creación de pregunta: 2002
 questions[45]= "46)  El nivel de enlace del modelo de referencia OSI:";
 choices[45]= new Array();
 choices[45][0] = "Determina cu&aacute;ntos y por donde son enviados los paquetes desde la fuente al destino";
 choices[45][1] = "Resuelve los problemas planteados por la falta de fiabilidad de los circuitos";
 choices[45][2] = "Se mantiene a la escucha por si el emisor env&iacute;a alg&uacute;n mensaje. Posteriormente determina cu&aacute;l es el destinatario del mismo";
 choices[45][3] = "Se asegura de que todos los caminos posibles entre el emisor y el receptor est&aacute;n operativos";
 answers[45] = 1;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4693. ";
 preguntaids[45] = 4693


//  Id pregunta: 4722 Año de creación de pregunta: 2002
 questions[46]= "47)  Indicar entre las siguientes normas del IEEE la que trata sobre &lsquo;Demand Priority Access Method&rsquo;:";
 choices[46]= new Array();
 choices[46][0] = "802.1";
 choices[46][1] = "802.11";
 choices[46][2] = "802.12";
 choices[46][3] = "802.13";
 answers[46] = 2;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4722. ";
 preguntaids[46] = 4722


//  Id pregunta: 4733 Año de creación de pregunta: 2002
 questions[47]= "48)  El proceso de multiplexaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Permite a dispositivos ejecutar diferentes aplicaciones software al mismo tiempo";
 choices[47][1] = "Interconecta m&uacute;ltiples redes que usan diferentes medio f&iacute;sico de enlace";
 choices[47][2] = "Permite que la informaci&oacute;n de encaminamiento (routing) de diferentes protocolos se intercambie y se use para actualizar las tablas de encaminamiento";
 choices[47][3] = "Permite que datos de fuentes diferentes sean transmitidos simult&aacute;neamente sobre un &uacute;nico enlace";
 answers[47] = 3;
 units[47] = ['104', '105'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4733. ";
 preguntaids[47] = 4733


//  Id pregunta: 4669 Año de creación de pregunta: 2002
 questions[48]= "49)  De los t&eacute;rminos 'wander' y 'jitter' podemos decir:";
 choices[48]= new Array();
 choices[48][0] = "Que son lo mismo en terminolog&iacute;a americana e inglesa";
 choices[48][1] = "Que wander se refiere a oscilaciones de frecuencia a baja frecuencia y jitter a oscilaciones de frecuencia en alta frecuencia";
 choices[48][2] = "Que wander se refiere a oscilaciones de frecuencia a alta frecuencia y jitter a oscilaciones de frecuencia en baja frecuencia";
 choices[48][3] = "No existen los t&eacute;rminos wander ni jitter en telecomunicaciones";
 answers[48] = 1;
 units[48] = ['104'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4669. ";
 preguntaids[48] = 4669


//  Id pregunta: 4658 Año de creación de pregunta: 2002
 questions[49]= "50)  CTI es:";
 choices[49]= new Array();
 choices[49][0] = "Computer Telephony Integration, el uso conjunto de telefon&iacute;a y ordenadores en el funcionamiento de un centro de atenci&oacute;n de llamadas";
 choices[49][1] = "el conjunto formado por la intranet, los tel&eacute;fonos de los puestos de ofim&aacute;tica y los ordenadores de los usuarios";
 choices[49][2] = "las siglas del Comit&eacute; para las Telecomunicaciones y la Innovaci&oacute;n, organismo sin &aacute;nimo de lucro encargado de observar las tendencias tecnol&oacute;gicas en telecomunicaciones y su aplicaci&oacute;n a los proyectos de la Administraci&oacute;n del Estado";
 choices[49][3] = "nada de lo anterior";
 answers[49] = 0;
 units[49] = ['110'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4658. ";
 preguntaids[49] = 4658


//  Id pregunta: 4720 Año de creación de pregunta: 2002
 questions[50]= "51)  Indicar cu&aacute;l de las siguientes ventajas corresponde al uso de una pasarela de aplicaci&oacute;n como cortafuegos:";
 choices[50]= new Array();
 choices[50][0] = "Simplicidad";
 choices[50][1] = "Facilidad de control";
 choices[50][2] = "Rapidez";
 choices[50][3] = "Transparencia";
 answers[50] = 1;
 units[50] = ['120'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4720. ";
 preguntaids[50] = 4720


//  Id pregunta: 4701 Año de creación de pregunta: 2002
 questions[51]= "52)  El n&uacute;mero m&aacute;ximo de dispositivos que se puede conectar al bus pasivo de usuario en una instalaci&oacute;n b&aacute;sica RDSI es de:";
 choices[51]= new Array();
 choices[51][0] = "2";
 choices[51][1] = "4";
 choices[51][2] = "8";
 choices[51][3] = "16";
 answers[51] = 2;
 units[51] = ['114'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4701. ";
 preguntaids[51] = 4701


//  Id pregunta: 4714 Año de creación de pregunta: 2002
 questions[52]= "53)  Gen&eacute;ricamente, xDSL es un conjunto de t&eacute;cnicas para:";
 choices[52]= new Array();
 choices[52][0] = "Transmitir a trav&eacute;s de l&iacute;neas de cobre a alta velocidad";
 choices[52][1] = "Transmitir a trav&eacute;s de l&iacute;neas &oacute;pticas a alta velocidad";
 choices[52][2] = "Transmitir por ondas de radio";
 choices[52][3] = "Transmitir utilizando sat&eacute;lites";
 answers[52] = 0;
 units[52] = ['106'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4714. ";
 preguntaids[52] = 4714


//  Id pregunta: 4713 Año de creación de pregunta: 2002
 questions[53]= "54)  Funciones t&iacute;picas del nivel de sesi&oacute;n son:";
 choices[53]= new Array();
 choices[53][0] = "sincronizaci&oacute;n y control del testigo de datos";
 choices[53][1] = "presentaci&oacute;n y criptograf&iacute;a";
 choices[53][2] = "control de flujo y errores";
 choices[53][3] = "todas las anteriores";
 answers[53] = 0;
 units[53] = ['105'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4713. ";
 preguntaids[53] = 4713


//  Id pregunta: 4698 Año de creación de pregunta: 2002
 questions[54]= "55)  El nivel fisico denominados 802.11a se conoce como:";
 choices[54]= new Array();
 choices[54][0] = "High Rate Sequence HR/DS PHY";
 choices[54][1] = "High Rate Sequence HR/DSSS PHY";
 choices[54][2] = "Orthogonal Frequency Division Multiplexing";
 choices[54][3] = "IR/PHY";
 answers[54] = 2;
 units[54] = ['108'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4698. ";
 preguntaids[54] = 4698


//  Id pregunta: 4704 Año de creación de pregunta: 2002
 questions[55]= "56)  El PMD:";
 choices[55]= new Array();
 choices[55][0] = "Es el acr&oacute;nimo de Physical Medium Dependent";
 choices[55][1] = "Pertenece al Nivel 2 de 802.11";
 choices[55][2] = "Es la uni&oacute;n entre MAC y PLCP";
 choices[55][3] = "Todas las anteriores respuestas son correctas";
 answers[55] = 0;
 units[55] = ['104'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4704. ";
 preguntaids[55] = 4704


//  Id pregunta: 4735 Año de creación de pregunta: 2002
 questions[56]= "57)  El protocolo ARP:";
 choices[56]= new Array();
 choices[56][0] = "S&oacute;lo funciona si hay un proxy configurado";
 choices[56][1] = "Permite relacionar puertos TCP y direcciones IP";
 choices[56][2] = "Permite relacionar puertos TCP  y direcciones MAC";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 3;
 units[56] = ['102'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4735. ";
 preguntaids[56] = 4735


//  Id pregunta: 4699 Año de creación de pregunta: 2002
 questions[57]= "58)  El nivel fisico denominado 802.11b se conoce como:";
 choices[57]= new Array();
 choices[57][0] = "High Rate Sequence HR/DS PHY (high-rate, direct-sequence PHY)";
 choices[57][1] = "High Rate Sequence HR/DSSS PHY (High Rate / Direct Sequence Spread Spectrum Physical Layer)";
 choices[57][2] = "OFDM PHY";
 choices[57][3] = "Las respuestas 'a' y 'b' son correctas";
 answers[57] = 3;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4699. ";
 preguntaids[57] = 4699


//  Id pregunta: 4656 Año de creación de pregunta: 2002
 questions[58]= "59)  Control de temperatura, ahorro de gasto de energ&iacute;a seg&uacute;n la hora del d&iacute;a, gesti&oacute;n de alarmas a distancia&hellip;, son disciplinas englobadas en la:";
 choices[58]= new Array();
 choices[58][0] = "Teleinform&aacute;tica.";
 choices[58][1] = "Automatizaci&oacute;n de procesos y rob&oacute;tica.";
 choices[58][2] = "Dom&oacute;tica.";
 choices[58][3] = "Telem&aacute;tica industrial.";
 answers[58] = 2;
 units[58] = ['112'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4656. ";
 preguntaids[58] = 4656


//  Id pregunta: 4673 Año de creación de pregunta: 2002
 questions[59]= "60)  Dentro de la familia de protocolos TCP/IP, el protocolo RARP se emplea para:";
 choices[59]= new Array();
 choices[59][0] = "Establecer un protocolo de rearranque remoto que activa el demonio BOOTP";
 choices[59][1] = "Obtener la direcci&oacute;n Ethernet (48 bits) a partir de la direcci&oacute;n IP (32 bits)";
 choices[59][2] = "Obtener la direcci&oacute;n IP (32 bits) a partir de la direcci&oacute;n Ethernet (48 bits)";
 choices[59][3] = "Manejar la tabla de direcciones IP en el socket 250 de UDP";
 answers[59] = 2;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4673. ";
 preguntaids[59] = 4673


//  Id pregunta: 4679 Año de creación de pregunta: 2002
 questions[60]= "61)  Dentro del Modelo de Referencia OSI para la interconexi&oacute;n de sistemas abiertos:";
 choices[60]= new Array();
 choices[60][0] = "El formato de datos corresponde al nivel 6";
 choices[60][1] = "El enrutamiento de paquetes corresponde al nivel 4";
 choices[60][2] = "La multiplexaci&oacute;n de conexiones corresponde al nivel 2";
 choices[60][3] = "Todas las anteriores son ciertas";
 answers[60] = 0;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4679. ";
 preguntaids[60] = 4679


//  Id pregunta: 4729 Año de creación de pregunta: 2002
 questions[61]= "62)  Indique cu&aacute;l de las opciones siguientes es verdadera respecto al acceso al medio en redes LAN:";
 choices[61]= new Array();
 choices[61][0] = "Si la estaci&oacute;n que utiliza el medio, cuando finaliza su uso lo cede a la siguiente que lo necesita, se denomina Token Passing";
 choices[61][1] = "Las redes que siguen un protocolo de acceso al medio consistente en que la estaci&oacute;n que lo requiere, observa hasta que no existe actividad en el mismo, en ese momento accede y observa que no colisiona con ninguna otra estaci&oacute;n, utilizan CSMA";
 choices[61][2] = "En las redes con protocolo Token Passing se puede determinar el tiempo m&aacute;ximo en que una estaci&oacute;n acceder al medio. En las redes con CSMA solo se puede estimar este tiempo";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = 3;
 units[61] = ['112'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4729. ";
 preguntaids[61] = 4729


//  Id pregunta: 4684 Año de creación de pregunta: 2002
 questions[62]= "63)  El localizador de recursos, URL, tiene como formato general:";
 choices[62]= new Array();
 choices[62][0] = "m&eacute;todo:/servidor[:puerto]//directorio/fichero";
 choices[62][1] = "servidor://m&eacute;todo[:puerto]//directorio/fichero";
 choices[62][2] = "m&eacute;todo://servidor[:puerto]/directorio/fichero";
 choices[62][3] = "m&eacute;todo://servidor[:direcci&oacute;n:puerto]/directorio/fichero";
 answers[62] = 2;
 units[62] = ['103'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4684. ";
 preguntaids[62] = 4684


//  Id pregunta: 4666 Año de creación de pregunta: 2002
 questions[63]= "64)  De los cuatro octetos que forman una direcci&oacute;n del protocolo IP indicar en qu&eacute; clase de red se utiliza un octeto para los n&uacute;meros de host:";
 choices[63]= new Array();
 choices[63][0] = "Clase B";
 choices[63][1] = "Clase D";
 choices[63][2] = "Clase A";
 choices[63][3] = "Clase C";
 answers[63] = 3;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4666. ";
 preguntaids[63] = 4666


//  Id pregunta: 4715 Año de creación de pregunta: 2002
 questions[64]= "65)  GPS es:";
 choices[64]= new Array();
 choices[64][0] = "General Packet System, Sistema general de paquetes, protocolo de tipo general del que GPRS (General Packet Radio System) es su particularizaci&oacute;n para las comunicaciones v&iacute;a radio";
 choices[64][1] = "Gaussian Phase Shifting, cambio de fase gaussiano, tipo de modulaci&oacute;n usada com&uacute;nmente en los intercambios de informaci&oacute;n mediante t&eacute;cnicas telem&aacute;ticas";
 choices[64][2] = "Group Pulling System, sistema de ofrecimiento a grupos, muy usado en tecnolog&iacute;as de difusi&oacute;n multimedia (en especial TV digital y canales de internet) para enviar informaci&oacute;n a colectivos";
 choices[64][3] = "Global Positioning System, sistema de posicionamiento global, usado como m&eacute;todo de localizaci&oacute;n v&iacute;a radio y usando sat&eacute;lites para el c&aacute;lculo de las coordenadas";
 answers[64] = 3;
 units[64] = ['117'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4715. ";
 preguntaids[64] = 4715


//  Id pregunta: 4665 Año de creación de pregunta: 2002
 questions[65]= "66)  De las siguientes funciones, &iquest;cu&aacute;l no es propia del protocolo de nivel de red?:";
 choices[65]= new Array();
 choices[65][0] = "Conmutaci&oacute;n";
 choices[65][1] = "Encaminamiento";
 choices[65][2] = "Multiplexaci&oacute;n";
 choices[65][3] = "Tarificaci&oacute;n";
 answers[65] = 3;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4665. ";
 preguntaids[65] = 4665


//  Id pregunta: 4708 Año de creación de pregunta: 2002
 questions[66]= "67)  Es falso que las &quot;Etiquetas RF/ID&quot;:";
 choices[66]= new Array();
 choices[66][0] = "Permiten s&oacute;lo lectura a una distancia de 1 metro. La escritura se debe hacer con contacto.";
 choices[66][1] = "Las etiquetas RF/ID pueden contener hasta 64 bytes";
 choices[66][2] = "Son etiquetas con una espiral en su interior de 5 x 5 cm";
 choices[66][3] = "Su principal aplicaci&oacute;n es inventario o seguridad";
 answers[66] = 0;
 units[66] = ['107'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4708. ";
 preguntaids[66] = 4708


//  Id pregunta: 4703 Año de creación de pregunta: 2002
 questions[67]= "68)  El PLCP se incorpora como subnivel de:";
 choices[67]= new Array();
 choices[67][0] = "Nivel 2 de 802.11";
 choices[67][1] = "Nivel 1 de 802.11";
 choices[67][2] = "Nivel 1 de 802.3";
 choices[67][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[67] = 1;
 units[67] = ['108'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4703. ";
 preguntaids[67] = 4703


//  Id pregunta: 4687 Año de creación de pregunta: 2002
 questions[68]= "69)  El middleware puede definirse como un m&oacute;dulo intermedio que act&uacute;a como conductor entre dos m&oacute;dulos de software.  A este respecto, tambi&eacute;n se puede afirmar que:";
 choices[68]= new Array();
 choices[68][0] = "En una aplicaci&oacute;n cliente/servidor, el middleware permite independizar los procesos cliente y servidor";
 choices[68][1] = "La utilizaci&oacute;n del middleware en lugar de utilizar drectamente las APIs del sistema operativo, hace que en muchas ocasiones se pierda 'potencia'";
 choices[68][2] = "En t&eacute;minos de programaci&oacute;n orientada a objetos, el middleware identifica diferentes objetos y conoce las propiedades que tienen asociadas, por lo que puede responder a peticiones referentes a los mismos";
 choices[68][3] = "Todas las respuestas anteriores son correctas";
 answers[68] = 3;
 units[68] = ['113'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4687. ";
 preguntaids[68] = 4687


//  Id pregunta: 4705 Año de creación de pregunta: 2002
 questions[69]= "70)  Entre las unidades de datos intercambiadas entre niveles pares y adyacentes del Modelo de Referencia OSI, cu&aacute;l de las siguientes combinaciones es cierta:";
 choices[69]= new Array();
 choices[69][0] = "PDU + PCI = SDU";
 choices[69][1] = "IDU + ICI = SDU";
 choices[69][2] = "SDU + PCI = PDU";
 choices[69][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[69] = 2;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4705. ";
 preguntaids[69] = 4705


//  Id pregunta: 4707 Año de creación de pregunta: 2002
 questions[70]= "71)  Entre los modos de conexi&oacute;n de la Red Digital de Servicios Integrados se define el Acceso B&aacute;sico. Indique cu&aacute;l de las siguientes opciones lo define, o si son falsas todas las definiciones:";
 choices[70]= new Array();
 choices[70][0] = "Un Acceso B&aacute;sico se define como el constituido por dos canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[70][1] = "Un Acceso B&aacute;sico se define como el constituido por treinta canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[70][2] = "Un Acceso B&aacute;sico se define como el constituido por doce canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = 0;
 units[70] = ['114'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4707. ";
 preguntaids[70] = 4707


//  Id pregunta: 4688 Año de creación de pregunta: 2002
 questions[71]= "72)  El modelo OSI (Open System Interconnection, Interconexi&oacute;n de Sistemas Abiertos):";
 choices[71]= new Array();
 choices[71][0] = "Dispone de 5 niveles: f&iacute;sico, enlace, red, transporte, aplicaci&oacute;n, usuario";
 choices[71][1] = "Dispone de 7 niveles: f&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n, aplicaci&oacute;n";
 choices[71][2] = "No fue pensado en su momento para comunicaci&oacute;n cliente-servidor, sino m&aacute;s bien comunicaci&oacute;n peer- to-peer";
 choices[71][3] = "Las opciones c) y b) son correctas";
 answers[71] = 3;
 units[71] = ['105'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4688. ";
 preguntaids[71] = 4688


//  Id pregunta: 4702 Año de creación de pregunta: 2002
 questions[72]= "73)  El orden consecutivo de las capas definidas en OSI, es:";
 choices[72]= new Array();
 choices[72][0] = "F&iacute;sico, enlace, red, transporte, presentaci&oacute;n y aplicaci&oacute;n";
 choices[72][1] = "F&iacute;sico, enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[72][2] = "F&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[72][3] = "Enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 answers[72] = 2;
 units[72] = ['105'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4702. ";
 preguntaids[72] = 4702


//  Id pregunta: 4657 Año de creación de pregunta: 2002
 questions[73]= "74)  CSMA/CD es:";
 choices[73]= new Array();
 choices[73][0] = "Un m&eacute;todo de paso de testigo en bus";
 choices[73][1] = "Un sistema operativo no propietario";
 choices[73][2] = "Un m&eacute;todo de detecci&oacute;n de se&ntilde;al en bus";
 choices[73][3] = "Un m&eacute;todo de paso de testigo en anillo";
 answers[73] = 2;
 units[73] = ['112'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4657. ";
 preguntaids[73] = 4657


//  Id pregunta: 4717 Año de creación de pregunta: 2002
 questions[74]= "75)  HDLC es un protocolo:";
 choices[74]= new Array();
 choices[74][0] = "De enlace, orientado a car&aacute;cter";
 choices[74][1] = "De enlace orientado a bit";
 choices[74][2] = "F&iacute;sico, en serie";
 choices[74][3] = "F&iacute;sico, en paralelo";
 answers[74] = 1;
 units[74] = ['109'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4717. ";
 preguntaids[74] = 4717


