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
//  Id pregunta: 1906 Año de creación de pregunta: 2016
 questions[0]= "1)  A que se denomina Jitter en una red de comunicaciones sobre la que se soporta VoIP?";
 choices[0]= new Array();
 choices[0][0] = "AI retardo m&aacute;ximo de un paquete IP en una red de comunicaciones";
 choices[0][1] = "A la variaci&oacute;n del retardo de los paquetes en una red de comunicaciones";
 choices[0][2] = "A la supresi&oacute;n de los silencios mediante la no transmisi&oacute;n de paquetes.";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = 1;
 units[0] = ['122'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1906. ";
 preguntaids[0] = 1906


//  Id pregunta: 1744 Año de creación de pregunta: 2016
 questions[1]= "2)  Una Unidad de Acceso Multiestaci&oacute;n o MAU es un dispositivo que administra la comunicaci&oacute;n entre los equipos conectados a una red de topolog&iacute;a:";
 choices[1]= new Array();
 choices[1][0] = "En anillo";
 choices[1][1] = "En Bus";
 choices[1][2] = "En Estrella";
 choices[1][3] = "En Bucle";
 answers[1] = 0;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1744. ";
 preguntaids[1] = 1744


//  Id pregunta: 1847 Año de creación de pregunta: 2016
 questions[2]= "3)  Dadas las IPs de dos hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0), &iquest;est&aacute;n en la misma subred?";
 choices[2]= new Array();
 choices[2][0] = "S&iacute;";
 choices[2][1] = "No";
 choices[2][2] = "Depende de la direcci&oacute;n de la puerta de enlace";
 choices[2][3] = "Depende de la configuraci&oacute;n del conmutador";
 answers[2] = 0;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1847. ";
 preguntaids[2] = 1847


//  Id pregunta: 1763 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale qu&eacute; puerto est&aacute;ndar est&aacute; asociado al protocolo HTTPS (HyperText Transfer Protocol):";
 choices[3]= new Array();
 choices[3][0] = "161";
 choices[3][1] = "115";
 choices[3][2] = "443";
 choices[3][3] = "22";
 answers[3] = 2;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 1763. ";
 preguntaids[3] = 1763


//  Id pregunta: 1833 Año de creación de pregunta: 2016
 questions[4]= "5)  Dentro del &aacute;mbito de Kerberos, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[4]= new Array();
 choices[4][0] = "Es un protocolo de autenticaci&oacute;n de usuarios dentro de una red.";
 choices[4][1] = "Est&aacute; basado en el Protocolo de Needham-Schroeder.";
 choices[4][2] = "Mantiene una base de datos de claves secretas de todos los usuarios.";
 choices[4][3] = "El env&iacute;o de las contrase&ntilde;as desde el Centro de Distribuci&oacute;n de Claves (KDC) y el Servidor de Autenticaci&oacute;n (AS) se hace de manera no encriptada.";
 answers[4] = 3;
 units[4] = ['119'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 1833. ";
 preguntaids[4] = 1833


//  Id pregunta: 1910 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[5]= new Array();
 choices[5][0] = "Paquete Unicast es un paquete de datos dirigido a una &uacute;nica estaci&oacute;n";
 choices[5][1] = "Paquete Multicast es un paquete de datos dirigido a un grupo de estaciones, seleccion&aacute;ndose la interfaz m&aacute;s cercana";
 choices[5][2] = "Paquete Broadcast es un paquete de datos dirigido a todas y cada una de las estaciones del segmento local";
 choices[5][3] = "Paquete Anycast es un paquete dirigido a un grupo de estaciones, con la diferencia en que se selecciona una de estas estaciones para ser la destinataria de la informaci&oacute;n";
 answers[5] = 1;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1910. ";
 preguntaids[5] = 1910


//  Id pregunta: 1916 Año de creación de pregunta: 2016
 questions[6]= "7)  En relaci&oacute;n al protocolo OSPF, &iquest;cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[6]= new Array();
 choices[6][0] = "Divide el &aacute;rea en sistemas aut&oacute;nomos";
 choices[6][1] = "Es un protocolo jer&aacute;rquico";
 choices[6][2] = "Es un protocolo de pasarela interne";
 choices[6][3] = "Es un protocolo din&aacute;mico";
 answers[6] = 0;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 1916. ";
 preguntaids[6] = 1916


//  Id pregunta: 1864 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP?";
 choices[7]= new Array();
 choices[7][0] = "PGR";
 choices[7][1] = "SMTP";
 choices[7][2] = "ICMP";
 choices[7][3] = "SNMP";
 answers[7] = 3;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 1864. ";
 preguntaids[7] = 1864


//  Id pregunta: 1885 Año de creación de pregunta: 2016
 questions[8]= "9)  En el contexto de seguridad en redes, que se entiende por cortatuegos:";
 choices[8]= new Array();
 choices[8][0] = "Un sistema que separa, en cuanto a seguridad se refiere, una m&aacute;quina o sub red del resto";
 choices[8][1] = "Es un programa que se instala en un anfitri&oacute;n de la red interna para proteger los accesos a la misma.";
 choices[8][2] = "Es un sistema que se instala en la red externa para controlar los accesos a la red interna";
 choices[8][3] = "Es software o dispositivo que realiza una acci&oacute;n en representaci&oacute;n de otro, garantizado as! su seguridad.";
 answers[8] = 0;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1885. ";
 preguntaids[8] = 1885


//  Id pregunta: 1846 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre el est&aacute;ndar IEEE 802.11";
 choices[9]= new Array();
 choices[9][0] = "Utiliza CSMA/CA como protocolo MAC";
 choices[9][1] = "La trama 802.11 contiene 4 direcciones MAC";
 choices[9][2] = "La trama 802.11 contiene 2 direcciones MAC";
 choices[9][3] = "Utiliza tramas de reconocimiento o confirmaci&oacute;n (ACK)";
 answers[9] = 2;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1846. ";
 preguntaids[9] = 1846


//  Id pregunta: 1755 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique de los siguientes protocolos de encaminamiento cu&aacute;l se engloba dentro de la categor&iacute;a EGP (Exterior Gateway Protocols):";
 choices[10]= new Array();
 choices[10][0] = "IS-IS (Intermediate System to Intermediate System)";
 choices[10][1] = "OSPF (Open Shortest Path First)";
 choices[10][2] = "BGP (Border Gateway Protocol)";
 choices[10][3] = "RIP (Routing Information Protocol)";
 answers[10] = 2;
 units[10] = ['102'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1755. ";
 preguntaids[10] = 1755


//  Id pregunta: 1839 Año de creación de pregunta: 2016
 questions[11]= "12)  El protocolo IPv6, &iquest;cu&aacute;ntas direcciones de red distintas posibilita?";
 choices[11]= new Array();
 choices[11][0] = "2 elevado a 64";
 choices[11][1] = "2 elevado a 128";
 choices[11][2] = "2 elevado a 32";
 choices[11][3] = "2 elevado a 256";
 answers[11] = 1;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 1839. ";
 preguntaids[11] = 1839


//  Id pregunta: 1749 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique cu&aacute;l de los siguientes conceptos se corresponde con una primitiva de servicio entre niveles del modelo OSI:";
 choices[12]= new Array();
 choices[12][0] = "RECEIVE";
 choices[12][1] = "INDICATION";
 choices[12][2] = "SEND";
 choices[12][3] = "ECHO";
 answers[12] = 1;
 units[12] = ['105'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1749. ";
 preguntaids[12] = 1749


//  Id pregunta: 1837 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; protocolo se puede utilizar para encapsular el tr&aacute;fico que atraviesa el t&uacute;nel de VPN?";
 choices[13]= new Array();
 choices[13][0] = "IPX";
 choices[13][1] = "MPLS";
 choices[13][2] = "PPTP";
 choices[13][3] = "ATM";
 answers[13] = 2;
 units[13] = ['119'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1837. ";
 preguntaids[13] = 1837


//  Id pregunta: 1767 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale qu&eacute; ley o leyes recomienda la ITU-T en su recomendaci&oacute;n G.711 para codificaci&oacute;n de frecuencias de se&ntilde;ales vocales:";
 choices[14]= new Array();
 choices[14][0] = "Ley A y Ley &quot;Mu&quot;.";
 choices[14][1] = "Ley A y Ley &quot;Gamma&quot;.";
 choices[14][2] = "Ley &quot;Mu&quot; y Ley &quot;Gamma&quot;";
 choices[14][3] = "Ley &quot;Gamma&quot;.";
 answers[14] = 0;
 units[14] = ['110'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1767. ";
 preguntaids[14] = 1767


//  Id pregunta: 1915 Año de creación de pregunta: 2016
 questions[15]= "16)  En relaci&oacute;n al protocolo OSPF";
 choices[15]= new Array();
 choices[15][0] = "Presenta como gran inconveniente el elevado tiempo de convergencia";
 choices[15][1] = "Es un protocolo de tipo vector distancia";
 choices[15][2] = "Solo env&iacute;a actualizaciones cuando hay cambios de topolog&iacute;a.";
 choices[15][3] = "Es un protocolo de rutas est&aacute;ticas";
 answers[15] = 2;
 units[15] = ['102'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 1915. ";
 preguntaids[15] = 1915


//  Id pregunta: 1805 Año de creación de pregunta: 2016
 questions[16]= "17)  Los tipos de motores de b&uacute;squeda que centran sus resultados en b&uacute;squedas que realizan sobre otros buscadores, obteniendo inicialmente un conjunto de resultados de otro buscador, y a continuaci&oacute;n refinan esos resultados presentando una selecci&oacute;n propia, se denominan:";
 choices[16]= new Array();
 choices[16][0] = "Metabuscadores.";
 choices[16][1] = "Multibuscadores.";
 choices[16][2] = "Directorios.";
 choices[16][3] = "Spider o crawlers.";
 answers[16] = 0;
 units[16] = ['103'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1805. ";
 preguntaids[16] = 1805


//  Id pregunta: 1902 Año de creación de pregunta: 2016
 questions[17]= "18)  Para limitar el impacto negativo del tr&aacute;fico de broadcast, &iquest;Cu&aacute;l de las siguientes medidas NO es v&aacute;lida?:";
 choices[17]= new Array();
 choices[17][0] = "Dividir la red en subredes";
 choices[17][1] = "Implementar dispositivos de capa 3 para la comunicaci&oacute;n entre subredes";
 choices[17][2] = "Dividir la red en VLANs";
 choices[17][3] = "Sustituir Concentrador (hub) por conmutadores (switch)";
 answers[17] = 3;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1902. ";
 preguntaids[17] = 1902


//  Id pregunta: 1887 Año de creación de pregunta: 2016
 questions[18]= "19)  Cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[18]= new Array();
 choices[18][0] = "IPSEC es utilizada para el establecimiento de t&uacute;neles seguros a trav&eacute;s de Internet";
 choices[18][1] = "IPSEC se comporta igual con Ipv4 que con Ipv6";
 choices[18][2] = "Con IPSEC se garantiza la integridad y la autenticidad, siendo la confidencialidad opcional";
 choices[18][3] = "Cada conexi&oacute;n con IPSEC requiere de dos SA para que sea bidireccional";
 answers[18] = 1;
 units[18] = ['119'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1887. ";
 preguntaids[18] = 1887


//  Id pregunta: 1770 Año de creación de pregunta: 2016
 questions[19]= "20)  En la tecnolog&iacute;a GSM, qu&eacute; canal de se&ntilde;alizaci&oacute;n utiliza la estaci&oacute;n base para avisar al terminal m&oacute;vil de una nueva llamada entrante";
 choices[19]= new Array();
 choices[19][0] = "Stand-Alone Dedicated Control Channel, SDCCH";
 choices[19][1] = "Random Access Channel, RACH";
 choices[19][2] = "Broadcast Control Channel, BCCH";
 choices[19][3] = "Paging channel (PCH)";
 answers[19] = 3;
 units[19] = ['117'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1770. ";
 preguntaids[19] = 1770


//  Id pregunta: 1765 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l es la recomendaci&oacute;n de la ITU, que regula el ADSL2+:";
 choices[20]= new Array();
 choices[20][0] = "ITU-T G.821.5";
 choices[20][1] = "ITU-T G.711";
 choices[20][2] = "ITU-T G.992.5";
 choices[20][3] = "ITU-T G.707";
 answers[20] = 2;
 units[20] = ['106'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1765. ";
 preguntaids[20] = 1765


//  Id pregunta: 1840 Año de creación de pregunta: 2016
 questions[21]= "22)  En el contexto de los tipos de redes, indique cu&aacute;l de las siguientes afirmaciones NO es correcta";
 choices[21]= new Array();
 choices[21][0] = "WAN significa Wireless Area Network";
 choices[21][1] = "PAN significa Personal &Aacute;rea Network";
 choices[21][2] = "MAN significa Metropolitan &Aacute;rea Network";
 choices[21][3] = "SAN significa Storage Area Network";
 answers[21] = 0;
 units[21] = ['112'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1840. ";
 preguntaids[21] = 1840


//  Id pregunta: 1750 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale qu&eacute; servicio NO es b&aacute;sico dentro de la arquitectura de comunicaciones TCP/IP:";
 choices[22]= new Array();
 choices[22][0] = "Transferencia de archivos.";
 choices[22][1] = "Terminal virtual.";
 choices[22][2] = "Correo.";
 choices[22][3] = "Acceso a archivos.";
 answers[22] = 3;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1750. ";
 preguntaids[22] = 1750


//  Id pregunta: 1878 Año de creación de pregunta: 2016
 questions[23]= "24)  EI sistema Kerberos de autenticaci&oacute;n y de distribuci&oacute;n de claves de sesi&oacute;n requiere:";
 choices[23]= new Array();
 choices[23][0] = "La existencia de una tercera entidad de confianza centralizada";
 choices[23][1] = "Que cada usuario tenga un par de claves reconocidas: la p&uacute;blica y la privada";
 choices[23][2] = "La existencia de una red de conexi&oacute;n interna total mente segura.";
 choices[23][3] = "Que cada servidor de aplicaciones mantenga claves secretas compartidas con todos los usuarios que Ie puedan solicitar servicios.";
 answers[23] = 0;
 units[23] = ['119'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1878. ";
 preguntaids[23] = 1878


//  Id pregunta: 1756 Año de creación de pregunta: 2016
 questions[24]= "25)  Un uso muy ineficaz de la capacidad de conexi&oacute;n y un retardo m&iacute;nimo son caracter&iacute;sticas t&iacute;picas de:";
 choices[24]= new Array();
 choices[24][0] = "Conmutaci&oacute;n de circuitos.";
 choices[24][1] = "Conmutaci&oacute;n de paquetes.";
 choices[24][2] = "Conmutaci&oacute;n de mensajes.";
 choices[24][3] = "Conmutaci&oacute;n de tiempo.";
 answers[24] = 0;
 units[24] = ['102'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1756. ";
 preguntaids[24] = 1756


//  Id pregunta: 1757 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale qu&eacute; longitud tiene la cabecera de MPLS (Multiprotocol Label Switching):";
 choices[25]= new Array();
 choices[25][0] = "20 bits.";
 choices[25][1] = "32 bits.";
 choices[25][2] = "53 Bytes.";
 choices[25][3] = "53 bits.";
 answers[25] = 1;
 units[25] = ['107'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 1757. ";
 preguntaids[25] = 1757


//  Id pregunta: 1917 Año de creación de pregunta: 2016
 questions[26]= "27)  En relaci&oacute;n con el protocolo SMTP, &iquest;Cu&aacute;l de las siguientes aseveraciones se cumple?:";
 choices[26]= new Array();
 choices[26][0] = "Para leer correo de entrada y componer correo de salida los usuarios utilizan clientes SMTP";
 choices[26][1] = "SMTP es un protocolo no compatible con IPv6";
 choices[26][2] = "Los anfitriones externos, servidores de correo, se ponen en contacto con los anfitriones internos, servidores de correo, a trav&eacute;s de SMTP";
 choices[26][3] = "SMTP es un protocolo de capa de nivel de sesi&oacute;n.";
 answers[26] = 2;
 units[26] = ['116'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1917. ";
 preguntaids[26] = 1917


//  Id pregunta: 1843 Año de creación de pregunta: 2016
 questions[27]= "28)  Las redes ATM emplean celdas de:";
 choices[27]= new Array();
 choices[27][0] = "Tama&ntilde;o variable: entre 5 y 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n.";
 choices[27][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n.";
 choices[27][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[27][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[27] = 1;
 units[27] = ['107'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1843. ";
 preguntaids[27] = 1843


//  Id pregunta: 1834 Año de creación de pregunta: 2016
 questions[28]= "29)  Para establecer una comunicaci&oacute;n segura, el protocolo SSL usa:";
 choices[28]= new Array();
 choices[28][0] = "Una clave de sesi&oacute;n y un vector inicial";
 choices[28][1] = "Una clave de sesi&oacute;n";
 choices[28][2] = "Una clave p&uacute;blica y una privada";
 choices[28][3] = "Una clave sim&eacute;trica tipo Diffie-Hellman";
 answers[28] = 0;
 units[28] = ['120'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1834. ";
 preguntaids[28] = 1834


//  Id pregunta: 1842 Año de creación de pregunta: 2016
 questions[29]= "30)  El nombre del est&aacute;ndar WiMAX proviene de:";
 choices[29]= new Array();
 choices[29][0] = "Wireless Media for &Aacute;rea eXtent";
 choices[29][1] = "Worldwide Interoperability for Microwave Access";
 choices[29][2] = "WiFi MAXimun";
 choices[29][3] = "Wireless Model Access eXtensive";
 answers[29] = 1;
 units[29] = ['107'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1842. ";
 preguntaids[29] = 1842


//  Id pregunta: 1742 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO se corresponde con las especificaciones de ANSI para cables de Categor&iacute;a 6:";
 choices[30]= new Array();
 choices[30][0] = "Alcanza frecuencias de hasta 500 MHz en cada par.";
 choices[30][1] = "Se emplea para Gigabit Ethernet.";
 choices[30][2] = "Caracterizan los cables de pares trenzados.";
 choices[30][3] = "Se define en la especificaci&oacute;n ANSI/TIA/EIA-568-B2-1";
 answers[30] = 0;
 units[30] = ['104'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1742. ";
 preguntaids[30] = 1742


//  Id pregunta: 1905 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes protocolos no se ejecuta en el nivel de aplicaci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "RIP, Protocolo de informaci&oacute;n de enrutamiento";
 choices[31][1] = "NFS, sistema de archivos de red";
 choices[31][2] = "ARP, protocolo de resoluci&oacute;n de direcciones";
 choices[31][3] = "FTP, Protocolo de transferencia de Ficheros";
 answers[31] = 2;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1905. ";
 preguntaids[31] = 1905


//  Id pregunta: 1904 Año de creación de pregunta: 2016
 questions[32]= "33)  En el contexto de TCP/IP, &iquest;qu&eacute; se entiende por encapsulamiento?";
 choices[32]= new Array();
 choices[32][0] = "La partici&oacute;n del paquete a enviar en trozos acordes con la Unidad Maxima de Transferencia que soporta la red por la que se va a enviar";
 choices[32][1] = "EI cifrado de las direcciones IP de origen y destino";
 choices[32][2] = "La adici&oacute;n de informaci&oacute;n de control en cada nivel antes de pasarla al nivel inferior.";
 choices[32][3] = "La encriptaci&oacute;n de los octetos de informaci&oacute;n de los paquetes IP.";
 answers[32] = 2;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1904. ";
 preguntaids[32] = 1904


//  Id pregunta: 1771 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de los siguientes est&aacute;ndares regula la tecnolog&iacute;a WiMAX.";
 choices[33]= new Array();
 choices[33][0] = "IEEE 802.3";
 choices[33][1] = "IEEE 802.11";
 choices[33][2] = "IEEE 802.15";
 choices[33][3] = "IEEE 802.16";
 answers[33] = 3;
 units[33] = ['106'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1771. ";
 preguntaids[33] = 1771


//  Id pregunta: 1909 Año de creación de pregunta: 2016
 questions[34]= "35)  La MTU del enlace es igual al:";
 choices[34]= new Array();
 choices[34][0] = "AI valor de MTU m&aacute;s alto de los posibles a lo largo de una ruta";
 choices[34][1] = "AI valor de MTU m&aacute;s bajo de los posibles a lo largo de una ruta";
 choices[34][2] = "AI valor medio de MTU de los enlaces que intervienen a lo largo de una ruta";
 choices[34][3] = "AI valor que haya sido definido en el PC que inicia la comunicaci&oacute;n";
 answers[34] = 1;
 units[34] = ['109'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1909. ";
 preguntaids[34] = 1909


//  Id pregunta: 1762 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale qui&eacute;n gestiona la ra&iacute;z del DNS:";
 choices[35]= new Array();
 choices[35][0] = "IANA";
 choices[35][1] = "ESNIC";
 choices[35][2] = "INIC";
 choices[35][3] = "ITU";
 answers[35] = 0;
 units[35] = ['103'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1762. ";
 preguntaids[35] = 1762


//  Id pregunta: 1809 Año de creación de pregunta: 2016
 questions[36]= "37)  Teniendo en cuenta las caracter&iacute;sticas del protocolo XMPP (Extensible Messaging and Presence Protocol), indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[36]= new Array();
 choices[36][0] = "XMPP ha sido formalizado como una tecnolog&iacute;a de mensajer&iacute;a instant&aacute;nea est&aacute;ndar";
 choices[36][1] = "XMPP es totalmente centralizado, para la puesta en marcha de XMPP se requiere obligatoriamente un servidor central";
 choices[36][2] = "XMPP no permite la encriptaci&oacute;n de las comunicaciones";
 choices[36][3] = "XMPP no es extensible, al no permitir crear funcionalidades personalizadas";
 answers[36] = 0;
 units[36] = ['125'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1809. ";
 preguntaids[36] = 1809


//  Id pregunta: 1662 Año de creación de pregunta: 2016
 questions[37]= "38)  El encaminamiento mediante algoritmos que se ejecutan en los nodos de la red con los &uacute;ltimos datos que han recibido sobre su estado y convergen r&aacute;pidamente optimizando sus nuevas rutas se denomina:";
 choices[37]= new Array();
 choices[37][0] = "Encaminamiento adaptativo distribuido.";
 choices[37][1] = "Encaminamiento adaptativo centralizado.";
 choices[37][2] = "Encaminamiento adaptativo aislado.";
 choices[37][3] = "Encaminamiento determin&iacute;stico est&aacute;tico.";
 answers[37] = 0;
 units[37] = ['102'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 1662. ";
 preguntaids[37] = 1662


//  Id pregunta: 1855 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique cu&aacute;l de las siguientes afirmaciones sobre el protocolo SMTP es correcta:";
 choices[38]= new Array();
 choices[38][0] = "Ejecutando el comando telnet para acceder al servidor SMTP por el puerto 25 ser&iacute;a posible enviar correos electr&oacute;nicos.";
 choices[38][1] = "Es un protocolo que necesita autenticaci&oacute;n del usuario.";
 choices[38][2] = "El cuerpo de los mensajes debe estar compuesto por caracteres ASCII de 8 bits.";
 choices[38][3] = "El protocolo modificado con las extensiones MIME, que permite ampliar el tipo de archivos que se pueden enviar, se denomina ESMTP.";
 answers[38] = 0;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1855. ";
 preguntaids[38] = 1855


//  Id pregunta: 1850 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; protocolo de acceso al medio utiliza Ethernet?";
 choices[39]= new Array();
 choices[39][0] = "HDLC";
 choices[39][1] = "CSMA/CA";
 choices[39][2] = "CSMA/CD";
 choices[39][3] = "MACA";
 answers[39] = 2;
 units[39] = ['112'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 1850. ";
 preguntaids[39] = 1850


//  Id pregunta: 1748 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale a qu&eacute; se denomina Single sign-on (SSO):";
 choices[40]= new Array();
 choices[40][0] = "Es un protocolo de cifrado para autenticar al usuario.";
 choices[40][1] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[40][2] = "Esta asociado al cifrado basado en Secure Socket Layers (SSL).";
 choices[40][3] = "Permite a trav&eacute;s del protocolo de red HTTPS identificar a los usuarios en el acceso a servicios Web.";
 answers[40] = 1;
 units[40] = ['123'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1748. ";
 preguntaids[40] = 1748


//  Id pregunta: 1911 Año de creación de pregunta: 2016
 questions[41]= "42)  En relaci&oacute;n a la direcci&oacute;n MAC, &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[41]= new Array();
 choices[41][0] = "La direcci&oacute;n MAC contiene el c&oacute;digo de fabricante de 24 bits";
 choices[41][1] = "La direcci&oacute;n MAC contiene el c&oacute;digo de identidad de red de 24 bits";
 choices[41][2] = "Es utilizada en el nivel de enlace de datos de la torre de protocolos OSI";
 choices[41][3] = "La direcci&oacute;n MAC contiene el c&oacute;diqo de serie que es elegido por cada fabricante a su discreci&oacute;n.";
 answers[41] = 1;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1911. ";
 preguntaids[41] = 1911


//  Id pregunta: 1747 Año de creación de pregunta: 2016
 questions[42]= "43)  Seleccione la respuesta correcta:";
 choices[42]= new Array();
 choices[42][0] = "RMON monitoriza el tr&aacute;fico de los routers de una red.";
 choices[42][1] = "SMON monitoriza el tr&aacute;fico de los routers de una red.";
 choices[42][2] = "El standard RMON se define en la RFC 2613";
 choices[42][3] = "SMON ofrece informaci&oacute;n sobre las redes locales virtuales VLAN";
 answers[42] = 0;
 units[42] = ['114'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1747. ";
 preguntaids[42] = 1747


//  Id pregunta: 1768 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de los siguientes no es un protocolo de VoIP:";
 choices[43]= new Array();
 choices[43][0] = "MGCP";
 choices[43][1] = "SIP";
 choices[43][2] = "H323";
 choices[43][3] = "TDM";
 answers[43] = 3;
 units[43] = ['122'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1768. ";
 preguntaids[43] = 1768


//  Id pregunta: 1746 Año de creación de pregunta: 2016
 questions[44]= "45)  El est&aacute;ndar IEEE 802.3ae define una versi&oacute;n de Ethernet con una velocidad nominal de:";
 choices[44]= new Array();
 choices[44][0] = "1 Gbit/s.";
 choices[44][1] = "100 Mbit/s.";
 choices[44][2] = "10 Gbit/s.";
 choices[44][3] = "1 Tbit/s.";
 answers[44] = 2;
 units[44] = ['112'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 1746. ";
 preguntaids[44] = 1746


//  Id pregunta: 1913 Año de creación de pregunta: 2016
 questions[45]= "46)  Con respecto a la tecnolog&iacute;a de Jerarqu&iacute;a Digital S&iacute;ncrona (SDH/JDS) &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[45]= new Array();
 choices[45][0] = "Las tramas tributarias de las se&ntilde;ales de I&iacute;nea pueden ser subdivididas para acomodar cargas plesi&oacute;cronas, trafico ATM o unidades de menor orden. Esto supone mezclar trance de distinto tipo dando lugar a redes flexibles.";
 choices[45][1] = "EI procesamiento de la serial se lleva a cabo a nivel de STM-1, con lo que las se&ntilde;ales de velocidades superiores son s&iacute;ncronas entre s&iacute;, y est&aacute;n en fase per ser generadas localmente por cada nodo la red";
 choices[45][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[45][3] = "No sirven para transportar trance de tipo IP";
 answers[45] = 3;
 units[45] = ['107'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 1913. ";
 preguntaids[45] = 1913


//  Id pregunta: 1901 Año de creación de pregunta: 2016
 questions[46]= "47)  EI cableado estructurado de categor&iacute;a 5e:";
 choices[46]= new Array();
 choices[46][0] = "Permite transmisiones a velocidades 1OGbit Ethernet";
 choices[46][1] = "Solo es posible utilizarlo en comunicaciones full-duplex";
 choices[46][2] = "A diferencia de la categor&iacute;a 5, permite la transmisi&oacute;n de paquetes VolP";
 choices[46][3] = "Est&aacute; estandarizado por la norma TIAIEIA-568-B";
 answers[46] = 3;
 units[46] = ['104'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1901. ";
 preguntaids[46] = 1901


//  Id pregunta: 1752 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la afirmaci&oacute;n correcta. La cabecera de IPv6 es:";
 choices[47]= new Array();
 choices[47][0] = "Menor que la de IPv4.";
 choices[47][1] = "Mayor que la de IPv4.";
 choices[47][2] = "Igual que la de IPv4.";
 choices[47][3] = "No hay cabecera propiamente dicha.";
 answers[47] = 1;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1752. ";
 preguntaids[47] = 1752


//  Id pregunta: 1903 Año de creación de pregunta: 2016
 questions[48]= "49)  La cabecera de IPv6, en tsrrninos absolutos, es m&aacute;s grande que la de IPv4:";
 choices[48]= new Array();
 choices[48][0] = "Cierto, porque ocupa el doble de octetos";
 choices[48][1] = "Falso, ya que en IPv6 se ha simplificado el formato de la cabecera";
 choices[48][2] = "Cierto, porque el n&uacute;mero de direcciones pasa de 32 a 128 bits";
 choices[48][3] = "Falso, ya que la cabecera de IPv6 utiliza 8 campos y la de IPv4 utiliza 16 campos.";
 answers[48] = 0;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1903. ";
 preguntaids[48] = 1903


//  Id pregunta: 1912 Año de creación de pregunta: 2016
 questions[49]= "50)  En las redes de comunicaciones basadas en conmutaci&oacute;n de paquetes, la t&eacute;cnica de circuitos virtuales se caracteriza porque:";
 choices[49]= new Array();
 choices[49][0] = "Cada paquete se transporta de forma independiente sin referencia a los precedentes";
 choices[49][1] = "La ruta de origen a destino puede ser diferente, pero los paquetes llegan en orden";
 choices[49][2] = "Se dispone de un circuito dedicado";
 choices[49][3] = "La ruta es para toda la comunicaci&oacute;n";
 answers[49] = 3;
 units[49] = ['102'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 1912. ";
 preguntaids[49] = 1912


//  Id pregunta: 1743 Año de creación de pregunta: 2016
 questions[50]= "51)  En la resoluci&oacute;n del 22 de noviembre de 2005, de la Secretaria de Estado de Telecomunicaci&oacute;n y para la Sociedad de la Informaci&oacute;n, se publicaron los requisitos t&eacute;cnicos de la interfaz reglamentaria Ir-14 relativa a los sistemas de acceso inal&aacute;mbrico fijo (LMDS/FWA) para Espa&ntilde;a. Se&ntilde;ale qu&eacute; banda de frecuencias son las asignadas:";
 choices[50]= new Array();
 choices[50][0] = "2,4 a 2,6 Ghz.";
 choices[50][1] = "202,5 a 226,6 Ghz.";
 choices[50][2] = "24,5 a 26,5 Ghz.";
 choices[50][3] = "3.400 a 3.800 MHz.";
 answers[50] = 2;
 units[50] = ['106'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 1743. ";
 preguntaids[50] = 1743


//  Id pregunta: 1810 Año de creación de pregunta: 2016
 questions[51]= "52)  Entre los diferentes tipos de servidores que existen, indique en cu&aacute;l de ellos es correcto que se realicen las funciones de un servicio de cortafuegos.";
 choices[51]= new Array();
 choices[51][0] = "Servidor de acceso remoto";
 choices[51][1] = "Servidor web";
 choices[51][2] = "Servidor de red";
 choices[51][3] = "Servidor de comunicaciones";
 answers[51] = 2;
 units[51] = ['119'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1810. ";
 preguntaids[51] = 1810


//  Id pregunta: 1849 Año de creación de pregunta: 2016
 questions[52]= "53)  Desde un punto de vista conceptual, indique cu&aacute;l de las siguientes afirmaciones sobre encaminadores (routers) y conmutadores (switches) es correcta:";
 choices[52]= new Array();
 choices[52][0] = "Los encaminadores son para redes ATM y los conmutadores para redes Ethernet.";
 choices[52][1] = "Los encaminadores trabajan en el nivel 3 y los conmutadores en el nivel 2.";
 choices[52][2] = "Ambos trabajan en los niveles 2 y 3, pero los conmutadores realizan tareas de filtrado IP.";
 choices[52][3] = "Son exactamente lo mismo.";
 answers[52] = 1;
 units[52] = ['102'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1849. ";
 preguntaids[52] = 1849


//  Id pregunta: 1760 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale c&oacute;mo se denomina el protocolo sucesor de SSL (Secure Sockets Layer), estandarizado por el IETF:";
 choices[53]= new Array();
 choices[53][0] = "TSL";
 choices[53][1] = "TLS";
 choices[53][2] = "IPSEC";
 choices[53][3] = "SECIP";
 answers[53] = 1;
 units[53] = ['120'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 1760. ";
 preguntaids[53] = 1760


//  Id pregunta: 1812 Año de creación de pregunta: 2016
 questions[54]= "55)  Uno de los componentes de una granja de servidores son los monitores transaccionales que tienen como funci&oacute;n realizar la gesti&oacute;n de transacciones. Indique cu&aacute;l de las siguientes opciones es correcta como una de las partes que interviene en dicha gesti&oacute;n de transacciones:";
 choices[54]= new Array();
 choices[54][0] = "Gestor de aplicaci&oacute;n";
 choices[54][1] = "Gestor de servicio";
 choices[54][2] = "Gestor de registro";
 choices[54][3] = "Gestor de sesi&oacute;n";
 answers[54] = 2;
 units[54] = ['113'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 1812. ";
 preguntaids[54] = 1812


//  Id pregunta: 1751 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l es el puerto por defecto de SMTP:";
 choices[55]= new Array();
 choices[55][0] = "21";
 choices[55][1] = "23";
 choices[55][2] = "25";
 choices[55][3] = "80";
 answers[55] = 2;
 units[55] = ['109'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 1751. ";
 preguntaids[55] = 1751


//  Id pregunta: 1764 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de las siguientes opciones ordena correctamente las siguientes tecnolog&iacute;as, de menor a mayor, en cuanto a ancho de banda m&aacute;ximo de bajada:";
 choices[56]= new Array();
 choices[56][0] = "RDSI, ADSL, HDSL, VDSL.";
 choices[56][1] = "HDSL, RDSI, ADSL, VDSL.";
 choices[56][2] = "RDSI, HDSL, ADSL, VDSL.";
 choices[56][3] = "RDSI, HDSL, VDSL, ADSL.";
 answers[56] = 2;
 units[56] = ['114'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1764. ";
 preguntaids[56] = 1764


//  Id pregunta: 1845 Año de creación de pregunta: 2016
 questions[57]= "58)  Los equipos Bluetooth emplean:";
 choices[57]= new Array();
 choices[57][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[57][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencia.";
 choices[57][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[57][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[57] = 1;
 units[57] = ['105'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1845. ";
 preguntaids[57] = 1845


//  Id pregunta: 1919 Año de creación de pregunta: 2016
 questions[58]= "59)  La banda de 5'47 GHz se utiliza para:";
 choices[58]= new Array();
 choices[58][0] = "Bluetooth";
 choices[58][1] = "Est&aacute; reservada para uso militar";
 choices[58][2] = "WiFi";
 choices[58][3] = "Wimax";
 answers[58] = 3;
 units[58] = ['106'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1919. ";
 preguntaids[58] = 1919


//  Id pregunta: 1830 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; se entiende por IP Spoofing?";
 choices[59]= new Array();
 choices[59][0] = "Es un ataque que se basa en la ejecuci&oacute;n de c&oacute;digo &ldquo;Script&rdquo; arbitrario en un navegador.";
 choices[59][1] = "Es un ataque que pretende provocar un direccionamiento err&oacute;neo en los equipos afectados, mediante la traducci&oacute;n err&oacute;nea de los nombres de dominio a direcciones IP.";
 choices[59][2] = "Es un ataque que consiste en modificar la cabecera de los paquetes enviados a un determinado sistema inform&aacute;tico para simular que proceden de un equipo distinto al que verdaderamente los ha originado.";
 choices[59][3] = "Es un ataque que se compone de un conjunto de actuaciones que persiguen colapsar determinados equipos o redes inform&aacute;ticas, para impedir que puedan ofrecer sus servicios a sus clientes y usuarios.";
 answers[59] = 2;
 units[59] = ['119'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 1830. ";
 preguntaids[59] = 1830


//  Id pregunta: 1907 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[60]= new Array();
 choices[60][0] = "La direcci&oacute;n MAC del Router";
 choices[60][1] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destine";
 choices[60][2] = "La direcci&oacute;n IP del sistema final destine";
 choices[60][3] = "La direcci&oacute;n MAC del sistema final destino";
 answers[60] = 0;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1907. ";
 preguntaids[60] = 1907


//  Id pregunta: 1863 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;aden en el protocolo SNMPv2 con respecto a las de SNMPv1?";
 choices[61]= new Array();
 choices[61][0] = "Trap";
 choices[61][1] = "GetResponse";
 choices[61][2] = "GetBulkRequest";
 choices[61][3] = "GetNextTesponse";
 answers[61] = 2;
 units[61] = ['114'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1863. ";
 preguntaids[61] = 1863


//  Id pregunta: 1844 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre MPLS (Multiprotocol Label Switching)";
 choices[62]= new Array();
 choices[62][0] = "Opera entre la capa de enlace y la capa de red.";
 choices[62][1] = "Opera entre la capa de transporte y la capa de red.";
 choices[62][2] = "Complementa los servicios de TLS/SSL.";
 choices[62][3] = "Requiere una capa f&iacute;sica espec&iacute;fica.";
 answers[62] = 0;
 units[62] = ['107'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 1844. ";
 preguntaids[62] = 1844


//  Id pregunta: 1732 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos de gesti&oacute;n de redes est&aacute; basado en el modelo de referencia OSI de ISO:";
 choices[63]= new Array();
 choices[63][0] = "CMIP";
 choices[63][1] = "SNMP";
 choices[63][2] = "SGMP";
 choices[63][3] = "TL-1";
 answers[63] = 0;
 units[63] = ['105'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1732. ";
 preguntaids[63] = 1732


//  Id pregunta: 1841 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre el modelo de capas OSI:";
 choices[64]= new Array();
 choices[64][0] = "La capa de enlace se encarga de determinar los enlaces por donde enviar los paquetes.";
 choices[64][1] = "La capa de sesi&oacute;n est&aacute; por encima de la capa de presentaci&oacute;n.";
 choices[64][2] = "El nivel que realiza la funci&oacute;n de obtener la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el nivel 3.";
 choices[64][3] = "La compresi&oacute;n y el cifrado de los datos es una tarea de la capa de aplicaci&oacute;n.";
 answers[64] = 2;
 units[64] = ['105'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1841. ";
 preguntaids[64] = 1841


//  Id pregunta: 1900 Año de creación de pregunta: 2016
 questions[65]= "66)  Los cables de fibra &oacute;ptica utilizados en entornos WAN en enlaces de larga distancia:";
 choices[65]= new Array();
 choices[65][0] = "Suelen ser de tipo multimodo ya que permite transmitir varios haces de luz,";
 choices[65][1] = "Suelen ser de tipo monomodo por la mayor robustez de la libra";
 choices[65][2] = "Suelen ser de tipo monomodo per su menor atenuaci&oacute;n";
 choices[65][3] = "Suelen ser de tipo multimodo por su menor atenuaci&oacute;n";
 answers[65] = 2;
 units[65] = ['104'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1900. ";
 preguntaids[65] = 1900


//  Id pregunta: 1918 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[66]= new Array();
 choices[66][0] = "POP es un protocolo de acceso a correo";
 choices[66][1] = "SMTP es un protocolo de transporte de mensajes";
 choices[66][2] = "IMAP es un protocolo de red de acceso a mensajes electr&oacute;nicos almacenados en un servidor";
 choices[66][3] = "MIME no permite acentos en los mensajes de correo";
 answers[66] = 3;
 units[66] = ['116'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1918. ";
 preguntaids[66] = 1918


//  Id pregunta: 1766 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique cu&aacute;l de las siguientes capas NO se corresponde con las definidas en el protocolo WAP:";
 choices[67]= new Array();
 choices[67][0] = "De aplicaci&oacute;n, WAE";
 choices[67][1] = "De presentaci&oacute;n, WPP";
 choices[67][2] = "De seguridad, WTSL";
 choices[67][3] = "De transporte, WDP";
 answers[67] = 1;
 units[67] = ['117'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1766. ";
 preguntaids[67] = 1766


//  Id pregunta: 1848 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento est&aacute; basado en el estado de los enlaces?";
 choices[68]= new Array();
 choices[68][0] = "RIP versi&oacute;n 1";
 choices[68][1] = "OSPF";
 choices[68][2] = "BGP";
 choices[68][3] = "RIP versi&oacute;n 2";
 answers[68] = 1;
 units[68] = ['102'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1848. ";
 preguntaids[68] = 1848


//  Id pregunta: 1908 Año de creación de pregunta: 2016
 questions[69]= "70)  En relaci&oacute;n al protocolo 802.1 Q usado para utilizar de forma transparente el mismo medio f&iacute;sico por m&uacute;ltiples redes, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[69]= new Array();
 choices[69][0] = "Encapsula la trama original";
 choices[69][1] = "A&ntilde;ade nuevos bytes a la cabecera";
 choices[69][2] = "Para establecer un trunking 802.1 q a ambos lados debemos tener la misma VLAN nativa";
 choices[69][3] = "Se precisa realizar un rec&aacute;lculo del campo &quot;FCS&quot;";
 answers[69] = 0;
 units[69] = ['112'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 1908. ";
 preguntaids[69] = 1908


//  Id pregunta: 1745 Año de creación de pregunta: 2016
 questions[70]= "71)  El standard Ethernet IEEE 802.3 est&aacute; basado en una t&eacute;cnica de Acceso al Medio por Detecci&oacute;n de Portadora (CSMA-Carrier Sense Multiple Access), se&ntilde;ale cu&aacute;l es:";
 choices[70]= new Array();
 choices[70][0] = "CSMA/CA";
 choices[70][1] = "CSMA/CD";
 choices[70][2] = "CSMA/CR";
 choices[70][3] = "CSMA/CP";
 answers[70] = 1;
 units[70] = ['112'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1745. ";
 preguntaids[70] = 1745


//  Id pregunta: 1769 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale c&oacute;mo se denomina, En telefon&iacute;a m&oacute;vil, el procedimiento mediante el cual se consigue que una conexi&oacute;n se mantenga cuando el m&oacute;vil cambia de celda, dentro del alcance de una misma central de conmutaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Roaming";
 choices[71][1] = "Hand-over";
 choices[71][2] = "Clustering";
 choices[71][3] = "Trunking";
 answers[71] = 1;
 units[71] = ['117'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1769. ";
 preguntaids[71] = 1769


//  Id pregunta: 1772 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale cu&aacute;l es el sistema de compresi&oacute;n de se&ntilde;al utilizado para la distribuci&oacute;n de televisi&oacute;n digital terrestre (TDT):";
 choices[72]= new Array();
 choices[72][0] = "MPEG-3 y MPEG-4 combinados, en funci&oacute;n del formato de se&ntilde;al utilizado: 4:3 &oacute; 16:9";
 choices[72][1] = "MPEG-4";
 choices[72][2] = "MPEG-2";
 choices[72][3] = "MPEG-3";
 answers[72] = 2;
 units[72] = ['115'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1772. ";
 preguntaids[72] = 1772


//  Id pregunta: 1914 Año de creación de pregunta: 2016
 questions[73]= "74)  EI protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian trance es:";
 choices[73]= new Array();
 choices[73][0] = "OSPF";
 choices[73][1] = "No es adecuado utilizar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas";
 choices[73][2] = "RIP";
 choices[73][3] = "BGP-4";
 answers[73] = 3;
 units[73] = ['102'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 1914. ";
 preguntaids[73] = 1914


//  Id pregunta: 1920 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; funci&oacute;n realiza el splitter en la conexi&oacute;n ADSL?";
 choices[74]= new Array();
 choices[74][0] = "Para discriminar dos bandas de frecuencias";
 choices[74][1] = "Para ecualizar la se&ntilde;al vocal";
 choices[74][2] = "EI splitter solo se utiliza en las conexiones HDSL";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = 0;
 units[74] = ['106'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1920. ";
 preguntaids[74] = 1920


