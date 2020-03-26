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
//  Id pregunta: 4982 Año de creación de pregunta: 2002
 questions[0]= "1)  Los cortafuegos de filtrado de paquetes:";
 choices[0]= new Array();
 choices[0][0] = "analizan el tr&aacute;fico de la red fundamentalmente en la capa 3";
 choices[0][1] = "generalmente se usan formando 2 listas de reglas: una con acciones permitidas y otra con acciones denegadas";
 choices[0][2] = "son &uacute;tiles contra ataques de denegaci&oacute;n de servicio, y destacan por su rapidez transparencia y flexibilidad";
 choices[0][3] = "Todas las respuestas anteriores son correctas";
 answers[0] = 3;
 units[0] = ['119'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4982. ";
 preguntaids[0] = 4982


//  Id pregunta: 6237 Año de creación de pregunta: 2003
 questions[1]= "2)  En el protocolo IPSEC, una asociaci&oacute;n de seguridad (SA) queda un&iacute;vocamente identificada por medio de:";
 choices[1]= new Array();
 choices[1][0] = "Una direcci&oacute;n IP";
 choices[1][1] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI)";
 choices[1][2] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI) y un puerto de comunicaci&oacute;n TCP.";
 choices[1][3] = "Una direcci&oacute;n IP y un &Iacute;ndice de Par&aacute;metro de Seguridad (SPI).";
 answers[1] = 3;
 units[1] = ['119'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 6237. Examen TIC A Castilla La Mancha 2007";
 preguntaids[1] = 6237


//  Id pregunta: 6236 Año de creación de pregunta: 2003
 questions[2]= "3)  Las VPN's utilizan mecanismos basados en t&uacute;neles para:";
 choices[2]= new Array();
 choices[2][0] = "Habilitar la navegaci&oacute;n por Internet.";
 choices[2][1] = "Encapsular paquetes de un protocolo dentro de otros paquetes pudiendo acomodar as&iacute; protocolos incompatibles.";
 choices[2][2] = "Efectuar una tarificaci&oacute;n a la corporaci&oacute;n que habilita acceso VPN";
 choices[2][3] = "Deshabilitar la seguridad del acceso VPN una vez autenticado el cliente VPN.";
 answers[2] = 1;
 units[2] = ['119'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 6236. Examen TIC A Castilla La Mancha 2007";
 preguntaids[2] = 6236


//  Id pregunta: 4385 Año de creación de pregunta: 2004
 questions[3]= "4)  &iquest;Qu&eacute; no puede hacer un sistema de detecci&oacute;n de intrusos?";
 choices[3]= new Array();
 choices[3][0] = "Controlar el tr&aacute;fico de red dentro y fuera de los firewall";
 choices[3][1] = "Evitar que salten alarmas falsas";
 choices[3][2] = "Detectar tiempos de acceso anormales";
 choices[3][3] = "Guardar logs de los accesos";
 answers[3] = 0;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4385. SS-A 2004";
 preguntaids[3] = 4385


//  Id pregunta: 4400 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes no es cierta respecto a SSL?";
 choices[4]= new Array();
 choices[4][0] = "Es el acr&oacute;nimo de Secure Sockets Layer, capa segura de interfaz con sockets";
 choices[4][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web";
 choices[4][2] = "En su funcionamiento, se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal (confidencialidad)";
 choices[4][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes";
 answers[4] = 3;
 units[4] = ['119'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4400. ";
 preguntaids[4] = 4400


//  Id pregunta: 5037 Año de creación de pregunta: 2002
 questions[5]= "6)  Respecto a los cortafuegos de filtrado de paquetes:";
 choices[5]= new Array();
 choices[5][0] = "act&uacute;an como routers inteligentes o screening routers";
 choices[5][1] = "se componen de un conjunto de aplicaciones intermedias, una por servicio";
 choices[5][2] = "desempe&ntilde;an funciones de proxy";
 choices[5][3] = "ninguna de las anteriores respuestas es correcta";
 answers[5] = 0;
 units[5] = ['119'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5037. ";
 preguntaids[5] = 5037


//  Id pregunta: 6234 Año de creación de pregunta: 2003
 questions[6]= "7)  El protocolo que contiene las especificaciones para garantizar la integridad y seguridad en mensajer&iacute;a de Servicios Web es:";
 choices[6]= new Array();
 choices[6][0] = "RSA";
 choices[6][1] = "WS-Security (WSS)";
 choices[6][2] = "X.509";
 choices[6][3] = "Kerberos";
 answers[6] = 1;
 units[6] = ['119'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 6234. Examen TIC A Castilla La Mancha 2007";
 preguntaids[6] = 6234


//  Id pregunta: 4443 Año de creación de pregunta: 2002
 questions[7]= "8)  Los sistemas de recuperaci&oacute;n de fallos hardware se basan siempre en:";
 choices[7]= new Array();
 choices[7][0] = "La redundancia del equipo o empleo de equipos fault-tolerant";
 choices[7][1] = "El establecimiento de una pol&iacute;tica de respaldo rigurosa";
 choices[7][2] = "Una pol&iacute;tica de mantenimiento de equipos adecuada";
 choices[7][3] = "Evitar manipulaciones indebidas en la instalaci&oacute;n inform&aacute;tica";
 answers[7] = 0;
 units[7] = ['119'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4443. ";
 preguntaids[7] = 4443


//  Id pregunta: 6069 Año de creación de pregunta: 2003
 questions[8]= "9)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[8]= new Array();
 choices[8][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[8][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[8][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[8][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[8] = 3;
 units[8] = ['119', '120'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6069. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6069


//  Id pregunta: 1217 Año de creación de pregunta: 2016
 questions[9]= "10)  El est&aacute;ndar ANSI/TIA-942 describe distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los CPD. &iquest;Cu&aacute;l es el nivel (Tier) que se refiere a una instalaci&oacute;n que no tiene redundadas sus componentes vitales (climatizaci&oacute;n, suministro el&eacute;ctrico)?";
 choices[9]= new Array();
 choices[9][0] = "Tier 0.";
 choices[9][1] = "Tier 2.";
 choices[9][2] = "Tier 1.";
 choices[9][3] = "Tier 3.";
 answers[9] = 2;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1217. ";
 preguntaids[9] = 1217


//  Id pregunta: 1810 Año de creación de pregunta: 2016
 questions[10]= "11)  Entre los diferentes tipos de servidores que existen, indique en cu&aacute;l de ellos es correcto que se realicen las funciones de un servicio de cortafuegos.";
 choices[10]= new Array();
 choices[10][0] = "Servidor de acceso remoto";
 choices[10][1] = "Servidor web";
 choices[10][2] = "Servidor de red";
 choices[10][3] = "Servidor de comunicaciones";
 answers[10] = 2;
 units[10] = ['119'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1810. ";
 preguntaids[10] = 1810


//  Id pregunta: 5662 Año de creación de pregunta: 2007
 questions[11]= "12)  &iquest;C&oacute;mo define la Norma UNE ISO IEC 27002 la seguridad de la informaci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "La preservaci&oacute;n de la confidencialidad y la integridad";
 choices[11][1] = "La preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[11][2] = "La obtenci&oacute;n de la autenticaci&oacute;n y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[11][3] = "La obtenci&oacute;n de la autenticaci&oacute;n y el no repudio y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 answers[11] = 1;
 units[11] = ['119'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5662. ";
 preguntaids[11] = 5662


//  Id pregunta: 5099 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Qu&eacute; son los IDS?";
 choices[12]= new Array();
 choices[12][0] = "Sistemas que permiten a los hackers rastrear puertos";
 choices[12][1] = "Sistemas que permiten detectar actividad inadecuada, incorrecta o an&oacute;mala en un sistema";
 choices[12][2] = "Sistemas que simulan uno o m&aacute;s sistemas f&aacute;ciles de atacar con el fin de tentar a los intrusos";
 choices[12][3] = "Ninguno de los anteriores";
 answers[12] = 1;
 units[12] = ['119'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5099. ";
 preguntaids[12] = 5099


//  Id pregunta: 5749 Año de creación de pregunta: 2007
 questions[13]= "14)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[13]= new Array();
 choices[13][0] = "recrea las claves cada cierto tiempo";
 choices[13][1] = "permite utilizar certificados digitales";
 choices[13][2] = "se necesita una asociaci&oacute;n de seguridad IKE para cada conexi&oacute;n IPSEC.";
 choices[13][3] = "esta basado en Oakley.";
 answers[13] = 2;
 units[13] = ['119'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5749. ";
 preguntaids[13] = 5749


//  Id pregunta: 5329 Año de creación de pregunta: 2006
 questions[14]= "15)  Cuando multitud de sistemas atacan un &uacute;nico sistema provocando su caida, estamos ante";
 choices[14]= new Array();
 choices[14][0] = "Un ataque de denegaci&oacute;n de servicio (DoS)";
 choices[14][1] = "Echelon, una red global de espias";
 choices[14][2] = "Un ataque distribuido de denegaci&oacute;n de servicio (DDoS)";
 choices[14][3] = "Un ataque de ingenier&iacute;a social";
 answers[14] = 2;
 units[14] = ['119'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5329. ";
 preguntaids[14] = 5329


//  Id pregunta: 6506 Año de creación de pregunta: 2003
 questions[15]= "16)  Se entiende por seguridad de los sistemas de informaci&oacute;n al conjunto de funciones, servicios y mecanismos que permitan garantizar las siguientes premisas:";
 choices[15]= new Array();
 choices[15][0] = "Autenticaci&oacute;n, confidenciabilidad, accesibilidad, servicios de no-repudiaci&oacute;n";
 choices[15][1] = "Accesibilidad, servicios de no-repudiaci&oacute;n, integridad, disponibilidad";
 choices[15][2] = "Integridad, confidencialidad, disponibilidad, servicios de no-repudiaci&oacute;n";
 choices[15][3] = "Autenticacion, confidencialidad, integridad, disponibilidad";
 answers[15] = 3;
 units[15] = ['119'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6506. ";
 preguntaids[15] = 6506


//  Id pregunta: 4667 Año de creación de pregunta: 2002
 questions[16]= "17)  De los protocolos para proporcionar seguridad en internet es cierto que:";
 choices[16]= new Array();
 choices[16][0] = "IPSec no es transparente a las aplicaciones";
 choices[16][1] = "PPP asegura s&oacute;lo un enlace, pero no la conexi&oacute;n completa";
 choices[16][2] = "WTLS es m&aacute;s complejo que TLS ya que se adapta al entorno inal&aacute;mbrico";
 choices[16][3] = "Los protocolos a nivel de aplicaci&oacute;n son comunes a grupos de aplicaciones seg&uacute;n su funcionalidad";
 answers[16] = 1;
 units[16] = ['119'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4667. ";
 preguntaids[16] = 4667


//  Id pregunta: 6507 Año de creación de pregunta: 2003
 questions[17]= "18)  La especificaci&oacute;n PKCS que define el formato de las claves privadas es:";
 choices[17]= new Array();
 choices[17][0] = "PKCS 1";
 choices[17][1] = "PKCS 5";
 choices[17][2] = "PKCS 8";
 choices[17][3] = "PKCS 6";
 answers[17] = 2;
 units[17] = ['119'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 6507. ";
 preguntaids[17] = 6507


//  Id pregunta: 5841 Año de creación de pregunta: 2009
 questions[18]= "19)  La siguiente instrucci&oacute;n &ldquo;iptables &ndash;L&rdquo; :";
 choices[18]= new Array();
 choices[18][0] = "Habilita el firewall de un equipo basado en iptables.";
 choices[18][1] = "Habilita el interface loopback a traves del firewall iptables.";
 choices[18][2] = "Habilita el paso de paquetes de retorno a trav&eacute;s del firewall iptables.";
 choices[18][3] = "Muestra la lista de reglas del firewall basado en iptables.";
 answers[18] = 3;
 units[18] = ['57', '119'];
 blocks[18] = ['B2', 'B4'];
 comments[18] = "Id Pregunta: 5841. Examen 2006 JCYL";
 preguntaids[18] = 5841


//  Id pregunta: 1878 Año de creación de pregunta: 2016
 questions[19]= "20)  EI sistema Kerberos de autenticaci&oacute;n y de distribuci&oacute;n de claves de sesi&oacute;n requiere:";
 choices[19]= new Array();
 choices[19][0] = "La existencia de una tercera entidad de confianza centralizada";
 choices[19][1] = "Que cada usuario tenga un par de claves reconocidas: la p&uacute;blica y la privada";
 choices[19][2] = "La existencia de una red de conexi&oacute;n interna total mente segura.";
 choices[19][3] = "Que cada servidor de aplicaciones mantenga claves secretas compartidas con todos los usuarios que Ie puedan solicitar servicios.";
 answers[19] = 0;
 units[19] = ['119'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1878. ";
 preguntaids[19] = 1878


//  Id pregunta: 5753 Año de creación de pregunta: 2007
 questions[20]= "21)  Ignorar quien accede a que dato y cuando lo hace, afecta a Ia dimensi&oacute;n de la seguridad denominada";
 choices[20]= new Array();
 choices[20][0] = "confidencialidad";
 choices[20][1] = "disponibilidad";
 choices[20][2] = "integridad";
 choices[20][3] = "trazabilidad";
 answers[20] = 3;
 units[20] = ['119'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5753. ";
 preguntaids[20] = 5753


//  Id pregunta: 5093 Año de creación de pregunta: 2003
 questions[21]= "22)  El cortafuegos CheckPoint Firewall-1 es:";
 choices[21]= new Array();
 choices[21][0] = "Un cortafuegos de filtrado din&aacute;mico de paquetes";
 choices[21][1] = "Un cortafuegos de inspecci&oacute;n de estado";
 choices[21][2] = "Un cortafuegos h&iacute;brido que intercepta los paquetes entre las capas 3 y4 del modelo OSI";
 choices[21][3] = "No es nada de lo anterior";
 answers[21] = 1;
 units[21] = ['119'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5093. ";
 preguntaids[21] = 5093


//  Id pregunta: 4398 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Para que me sirve una sonda de intrusi&oacute;n?:";
 choices[22]= new Array();
 choices[22][0] = "No existe ese concepto";
 choices[22][1] = "Para devolver el ataque";
 choices[22][2] = "Para detectar actividades anormales o sospechosas en la red";
 choices[22][3] = "Para penetrar en un sistema";
 answers[22] = 2;
 units[22] = ['119'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4398. ";
 preguntaids[22] = 4398


//  Id pregunta: 916 Año de creación de pregunta: 2016
 questions[23]= "24)  WS-Security contiene especificaciones sobre:";
 choices[23]= new Array();
 choices[23][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[23][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[23][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[23][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[23] = 1;
 units[23] = ['119'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 916. AGE A1 2015";
 preguntaids[23] = 916


//  Id pregunta: 5141 Año de creación de pregunta: 2004
 questions[24]= "25)  En un entorno de red, un pinchado de l&iacute;nea puede causar:";
 choices[24]= new Array();
 choices[24][0] = "Uso excesivo de CPU";
 choices[24][1] = "Acceso no autorizado a datos";
 choices[24][2] = "a) y b)";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = 1;
 units[24] = ['119'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5141. ";
 preguntaids[24] = 5141


//  Id pregunta: 1833 Año de creación de pregunta: 2016
 questions[25]= "26)  Dentro del &aacute;mbito de Kerberos, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[25]= new Array();
 choices[25][0] = "Es un protocolo de autenticaci&oacute;n de usuarios dentro de una red.";
 choices[25][1] = "Est&aacute; basado en el Protocolo de Needham-Schroeder.";
 choices[25][2] = "Mantiene una base de datos de claves secretas de todos los usuarios.";
 choices[25][3] = "El env&iacute;o de las contrase&ntilde;as desde el Centro de Distribuci&oacute;n de Claves (KDC) y el Servidor de Autenticaci&oacute;n (AS) se hace de manera no encriptada.";
 answers[25] = 3;
 units[25] = ['119'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 1833. ";
 preguntaids[25] = 1833


//  Id pregunta: 5102 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;C&uacute;al de las siguientes afirmaciones sobre el virus Blaster es correcta?";
 choices[26]= new Array();
 choices[26][0] = "Es un gusano que inspecciona la agenda de direcciones y env&iacute;a un mensaje replicado a todas ellas";
 choices[26][1] = "Es un gusano que usa una vulnerabilidad de Windows por la que el atacante puede tener permisos de ejecuci&oacute;n locales";
 choices[26][2] = "Es un gusano que se propaga a trav&eacute;s del correo electr&oacute;nico en un mensaje escrito en ingl&eacute;s de caracter&iacute;sticas variables, as&iacute; como a trav&eacute;s de los programas de intercambio de ficheros punto a punto";
 choices[26][3] = "Es un gusano que busca en todas las unidades de disco direcciones de correo electr&oacute;nico y se autoenv&iacute;a a ellas utilizando su propio motor SMTP";
 answers[26] = 1;
 units[26] = ['119'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5102. ";
 preguntaids[26] = 5102


//  Id pregunta: 5186 Año de creación de pregunta: 2003
 questions[27]= "28)  Sobre SNMP indicar la correcta";
 choices[27]= new Array();
 choices[27][0] = "Conexi&oacute;n IP orientada a conexi&oacute;n";
 choices[27][1] = "Conexi&oacute;n IP no orientada a conexi&oacute;n";
 choices[27][2] = "Conexi&oacute;n UDP no orientada a conexi&oacute;n";
 choices[27][3] = "Conexi&oacute;n TCP orientada a conexi&oacute;n";
 answers[27] = 2;
 units[27] = ['119'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5186. ";
 preguntaids[27] = 5186


//  Id pregunta: 4366 Año de creación de pregunta: 2004
 questions[28]= "29)  De los siguientes &iquest;Cu&aacute;l es un componente b&aacute;sico de un cortafuegos?";
 choices[28]= new Array();
 choices[28][0] = "El balanceador de carga (o asignador de tareas) que permite la ampliaci&oacute;n horizontal del &quot;basti&oacute;n&quot; mediante la asignaci&oacute;n de tramas IP entre varias subredes o m&aacute;quinas configuradas en forma id&eacute;ntica.";
 choices[28][1] = "Los servicios proxy, entendidos como aplicaciones SW para reenviar o bloquear conexiones a servicios como finger, telnet o ftp";
 choices[28][2] = "el sistema operativo LINUX en sus distribuciones seguras";
 choices[28][3] = "La monitorizaci&oacute;n de servicios de red tipo SMTP, POP3, HTTP, NNTP, PING,&hellip;,  a efectos de disponibilidad y rendimiento (performance)";
 answers[28] = 1;
 units[28] = ['119'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4366. ";
 preguntaids[28] = 4366


//  Id pregunta: 4671 Año de creación de pregunta: 2002
 questions[29]= "30)  Del protocolo IKE de IPSec podemos decir:";
 choices[29]= new Array();
 choices[29][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[29][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[29][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[29][3] = "nada de lo anterior es cierto";
 answers[29] = 0;
 units[29] = ['119'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4671. Consultar rfc 2409";
 preguntaids[29] = 4671


//  Id pregunta: 6114 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&quot;Secure Socket Layer&quot;) es correcta?:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo proporciona servicios de seguridad para el protocolo HTTP (&quot;HyperText Transfer Protocol&quot;)";
 choices[30][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir";
 choices[30][2] = "El protocolo se implementa entre los niveles de Transporte y de Red";
 choices[30][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n";
 answers[30] = 3;
 units[30] = ['119'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6114. Examen TIC A1 MAP 2007";
 preguntaids[30] = 6114


//  Id pregunta: 5487 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes elementos, de resultar inadecuado, podr&iacute;a facilitar un ataque de negaci&oacute;n de servicio en un sistema de informaci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "La configuraci&oacute;n del router y reglas aplicadas.";
 choices[31][1] = "El dise&ntilde;o de la red interna.";
 choices[31][2] = "Las t&eacute;cnicas de revisi&oacute;n de auditoria.";
 choices[31][3] = "Las t&eacute;cnicas de prueba de auditoria";
 answers[31] = 0;
 units[31] = ['119'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5487. ";
 preguntaids[31] = 5487


//  Id pregunta: 4438 Año de creación de pregunta: 2002
 questions[32]= "33)  Un sistema, si se desea que controle los intentos de violaci&oacute;n debe incorporar:";
 choices[32]= new Array();
 choices[32][0] = "An&aacute;lisis y validaci&oacute;n de la llamada";
 choices[32][1] = "Registro de la historia y fecha de la contrase&ntilde;a";
 choices[32][2] = "Forzar a que los usuarios cambien la contrase&ntilde;a";
 choices[32][3] = "Todas las respuestas anteriores son ciertas";
 answers[32] = 3;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4438. ";
 preguntaids[32] = 4438


//  Id pregunta: 1885 Año de creación de pregunta: 2016
 questions[33]= "34)  En el contexto de seguridad en redes, que se entiende por cortatuegos:";
 choices[33]= new Array();
 choices[33][0] = "Un sistema que separa, en cuanto a seguridad se refiere, una m&aacute;quina o sub red del resto";
 choices[33][1] = "Es un programa que se instala en un anfitri&oacute;n de la red interna para proteger los accesos a la misma.";
 choices[33][2] = "Es un sistema que se instala en la red externa para controlar los accesos a la red interna";
 choices[33][3] = "Es software o dispositivo que realiza una acci&oacute;n en representaci&oacute;n de otro, garantizado as! su seguridad.";
 answers[33] = 0;
 units[33] = ['119'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1885. ";
 preguntaids[33] = 1885


//  Id pregunta: 1887 Año de creación de pregunta: 2016
 questions[34]= "35)  Cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[34]= new Array();
 choices[34][0] = "IPSEC es utilizada para el establecimiento de t&uacute;neles seguros a trav&eacute;s de Internet";
 choices[34][1] = "IPSEC se comporta igual con Ipv4 que con Ipv6";
 choices[34][2] = "Con IPSEC se garantiza la integridad y la autenticidad, siendo la confidencialidad opcional";
 choices[34][3] = "Cada conexi&oacute;n con IPSEC requiere de dos SA para que sea bidireccional";
 answers[34] = 1;
 units[34] = ['119'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1887. ";
 preguntaids[34] = 1887


//  Id pregunta: 6126 Año de creación de pregunta: 2003
 questions[35]= "36)  El algoritmo de cifrado IDEA es del tipo:";
 choices[35]= new Array();
 choices[35][0] = "Asim&eacute;trico";
 choices[35][1] = "Sim&eacute;trico por bloques";
 choices[35][2] = "Sim&eacute;trico de flujo";
 choices[35][3] = "Sim&eacute;trico de resumen (hash)";
 answers[35] = 1;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 6126. Examen TIC A1 MAP 2007";
 preguntaids[35] = 6126


//  Id pregunta: 4389 Año de creación de pregunta: 2002
 questions[36]= "37)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[36]= new Array();
 choices[36][0] = "criptoan&aacute;lisis lineal";
 choices[36][1] = "criptoan&aacute;lisis continuo";
 choices[36][2] = "sweep-attack";
 choices[36][3] = "fuerza bruta";
 answers[36] = 3;
 units[36] = ['119'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4389. ";
 preguntaids[36] = 4389


//  Id pregunta: 4390 Año de creación de pregunta: 2005
 questions[37]= "38)  Al instalar un cortafuegos (firewall) para la protecci&oacute;n de un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[37]= new Array();
 choices[37][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[37][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[37][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[37][3] = "Todas las anteriores";
 answers[37] = 3;
 units[37] = ['119'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4390. Magerit V2";
 preguntaids[37] = 4390


//  Id pregunta: 4383 Año de creación de pregunta: 2004
 questions[38]= "39)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "No existen";
 choices[38][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[38][2] = "Pueden ser considerados como filtros de paquetes";
 choices[38][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[38] = 3;
 units[38] = ['119'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4383. Examen TAI 2004";
 preguntaids[38] = 4383


//  Id pregunta: 6233 Año de creación de pregunta: 2003
 questions[39]= "40)  En una VPN (Virtual Private Network) de acceso remoto,";
 choices[39]= new Array();
 choices[39][0] = "Al tratarse de una red privada, no es necesario ning&uacute;n tipo de encapsulamiento de los paquetes de datos para protegerlos de posibles ataques.";
 choices[39][1] = "No es necesario verificar la identidad de los usuarios";
 choices[39][2] = "No permite cifrado de datos.";
 choices[39][3] = "Los paquetes de datos viajan por un tunel definido en la red p&uacute;blica";
 answers[39] = 3;
 units[39] = ['119'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 6233. Examen TIC A Castilla La Mancha 2007";
 preguntaids[39] = 6233


//  Id pregunta: 918 Año de creación de pregunta: 2016
 questions[40]= "41)  WPS (Wifi Protected Setup) define los mecanismos a trav&eacute;s de los que los diferentes dispositivos de la red obtienen las credenciales (SSID y PSK), necesarias para iniciar el proceso de autenticaci&oacute;n. &iquest;Cu&aacute;l de las siguientes configuraciones WPS para el intercambio de credenciales es FALSA?";
 choices[40]= new Array();
 choices[40][0] = "RADIUS";
 choices[40][1] = "PBC";
 choices[40][2] = "NFC";
 choices[40][3] = "USB";
 answers[40] = 0;
 units[40] = ['119'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 918. AGE A2 2015";
 preguntaids[40] = 918


//  Id pregunta: 4779 Año de creación de pregunta: 2005
 questions[41]= "42)  En el &aacute;mbito de la seguridad de redes, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[41]= new Array();
 choices[41][0] = "Los ataques de &quot;buffer overflow&quot; son posibles debido a fallos de programaci&oacute;n";
 choices[41][1] = "Los ataques mediante &quot;spoofing&quot; se basan en la generaci&oacute;n de paquetes de informaci&oacute;n falsa";
 choices[41][2] = "NIS, NFS, DNS o SMTP son protocolos de aplicaci&oacute;n inseguros";
 choices[41][3] = "Los ataques mediante &quot;secuestro de sesi&oacute;n&quot; no pueden prevenirse en la labor de administraci&oacute;n";
 answers[41] = 3;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4779. ";
 preguntaids[41] = 4779


//  Id pregunta: 1837 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; protocolo se puede utilizar para encapsular el tr&aacute;fico que atraviesa el t&uacute;nel de VPN?";
 choices[42]= new Array();
 choices[42][0] = "IPX";
 choices[42][1] = "MPLS";
 choices[42][2] = "PPTP";
 choices[42][3] = "ATM";
 answers[42] = 2;
 units[42] = ['119'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1837. ";
 preguntaids[42] = 1837


//  Id pregunta: 4463 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;C&oacute;mo se denominan los 2 modos de utilizaci&oacute;n de IPSec?";
 choices[43]= new Array();
 choices[43][0] = "balanceado y no balanceado";
 choices[43][1] = "t&uacute;nel y abierto";
 choices[43][2] = "datagrama y transporte";
 choices[43][3] = "transporte y t&uacute;nel";
 answers[43] = 3;
 units[43] = ['119'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4463. ";
 preguntaids[43] = 4463


//  Id pregunta: 6196 Año de creación de pregunta: 2003
 questions[44]= "45)  La seguridad de los algoritmos de cifrado debe basarse en:";
 choices[44]= new Array();
 choices[44][0] = "Mantener el funcionamiento de los algoritmos en secreto.";
 choices[44][1] = "Utilizar sistemas propietarios.";
 choices[44][2] = "Demostrar su resistencia desde un punto de vista te&oacute;rico y pr&aacute;ctico.";
 choices[44][3] = "Utilizar tarjeta electr&oacute;nica";
 answers[44] = 2;
 units[44] = ['119'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6196. Examen TIC A Castilla La Mancha 2007";
 preguntaids[44] = 6196


//  Id pregunta: 6516 Año de creación de pregunta: 2003
 questions[45]= "46)  En el protocolo SSL, el paso &quot;Server Key Exchange&quot; o Intercambio de clave del servidor es:";
 choices[45]= new Array();
 choices[45][0] = "Obligatorio";
 choices[45][1] = "Opcional, &uacute;nicamente cuando no existe certificado";
 choices[45][2] = "Nunca es necesario";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = 1;
 units[45] = ['119'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 6516. ";
 preguntaids[45] = 6516


//  Id pregunta: 4847 Año de creación de pregunta: 2002
 questions[46]= "47)  En un firewall de paquetes IP, los paquetes entrantes:";
 choices[46]= new Array();
 choices[46][0] = "Primero se filtran, luego se hace el NAT";
 choices[46][1] = "Primero se hace NAT y luego se filtran";
 choices[46][2] = "Es igual que para los paquetes salientes";
 choices[46][3] = "Depende de la interfaz";
 answers[46] = 1;
 units[46] = ['119'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4847. ";
 preguntaids[46] = 4847


//  Id pregunta: 4710 Año de creación de pregunta: 2002
 questions[47]= "48)  Existen varios procedimientos de ataques en internet, como el &quot;hijacking&quot;. &iquest;En qu&eacute; consiste &eacute;ste?:";
 choices[47]= new Array();
 choices[47][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP origen";
 choices[47][1] = "Repudiaci&oacute;n de la auditor&iacute;a del mensaje";
 choices[47][2] = "secuestro de una conexi&oacute;n TCP/IP por ejemplo durante una sesi&oacute;n Telnet permitiendo a un atacante inyectar comandos o realizar un DoS durante dicha sesi&oacute;n.";
 choices[47][3] = "Escucha de una comunicaci&oacute;n y grabaci&oacute;n de su contenido";
 answers[47] = 2;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4710. ";
 preguntaids[47] = 4710


//  Id pregunta: 5657 Año de creación de pregunta: 2007
 questions[48]= "49)  Una caracter&iacute;stica fundamental de XML signature es que:";
 choices[48]= new Array();
 choices[48][0] = "Puede firmar parte o la totalidad de un documento XML";
 choices[48][1] = "Puede firmar un documento RTF y convertirlo en un documento XML.";
 choices[48][2] = "Solo puede firmar un documento XML completo.";
 choices[48][3] = "Solo puede firmar documentos RTF.";
 answers[48] = 0;
 units[48] = ['119'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5657. ";
 preguntaids[48] = 5657


//  Id pregunta: 4402 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Qu&eacute; es el spyware?:";
 choices[49]= new Array();
 choices[49][0] = "SW de alto secreto usado por los servicios de inteligencia de cada pa&iacute;s";
 choices[49][1] = "SW que diversas compa&ntilde;&iacute;as introducen en tu ordenador cuando te descargas algo de internet, para ver tus programas y tus usos y sacar estudios de mercado";
 choices[49][2] = "Es otro nombre de las conocidas cookies";
 choices[49][3] = "La denominaci&oacute;n es err&oacute;nea, no se refiere a nada";
 answers[49] = 1;
 units[49] = ['119'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4402. ";
 preguntaids[49] = 4402


//  Id pregunta: 6517 Año de creación de pregunta: 2003
 questions[50]= "51)  Indique cu&aacute;l es el n&uacute;mero de protocolo ESP (Encapsulating Security Payload)";
 choices[50]= new Array();
 choices[50][0] = "51";
 choices[50][1] = "50";
 choices[50][2] = "49";
 choices[50][3] = "Ninguno de los anteriores";
 answers[50] = 1;
 units[50] = ['119'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 6517. ";
 preguntaids[50] = 6517


//  Id pregunta: 5709 Año de creación de pregunta: 2007
 questions[51]= "52)  Seg&uacute;n la Norma UNE-ISO/IEC 27001:2007, la facultad de un control para lograr los objetivos de seguridad para la que fue dise&ntilde;ado se denomina";
 choices[51]= new Array();
 choices[51][0] = "eficacia de un control";
 choices[51][1] = "eficiencia de un control";
 choices[51][2] = "idoneidad de un control";
 choices[51][3] = "finalidad de un control";
 answers[51] = 0;
 units[51] = ['119'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5709. ";
 preguntaids[51] = 5709


//  Id pregunta: 1830 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; se entiende por IP Spoofing?";
 choices[52]= new Array();
 choices[52][0] = "Es un ataque que se basa en la ejecuci&oacute;n de c&oacute;digo &ldquo;Script&rdquo; arbitrario en un navegador.";
 choices[52][1] = "Es un ataque que pretende provocar un direccionamiento err&oacute;neo en los equipos afectados, mediante la traducci&oacute;n err&oacute;nea de los nombres de dominio a direcciones IP.";
 choices[52][2] = "Es un ataque que consiste en modificar la cabecera de los paquetes enviados a un determinado sistema inform&aacute;tico para simular que proceden de un equipo distinto al que verdaderamente los ha originado.";
 choices[52][3] = "Es un ataque que se compone de un conjunto de actuaciones que persiguen colapsar determinados equipos o redes inform&aacute;ticas, para impedir que puedan ofrecer sus servicios a sus clientes y usuarios.";
 answers[52] = 2;
 units[52] = ['119'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1830. ";
 preguntaids[52] = 1830


//  Id pregunta: 1078 Año de creación de pregunta: 2016
 questions[53]= "54)  Referente a las radiaciones electromagn&eacute;ticas esp&uacute;reas emitidas por los equipos basados en tecnolog&iacute;as de la informaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "TEMPEST es el acr&oacute;nimo de Telecommunications Electronics Material Protected from Emanating Spurious Transmissions.";
 choices[53][1] = "En el &aacute;mbito del Ministerio de Defensa la certificaci&oacute;n TEMPEST es emitida por el CCN (Centro Criptol&oacute;gico Nacional).";
 choices[53][2] = "El nivel 3 de certificaci&oacute;n TEMPEST corresponde a equipos cuyas radiaciones son imperceptibles a distancias superiores a los 15 metros.";
 choices[53][3] = "Se pueden prevenir apantallando los equipos mediante una jaula de Faraday.";
 answers[53] = 1;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 1078. ";
 preguntaids[53] = 1078


//  Id pregunta: 5092 Año de creación de pregunta: 2003
 questions[54]= "55)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[54]= new Array();
 choices[54][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[54][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[54][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[54][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[54] = 2;
 units[54] = ['119'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5092. ";
 preguntaids[54] = 5092


//  Id pregunta: 917 Año de creación de pregunta: 2016
 questions[55]= "56)  El software que puede ejecutarse con m&aacute;ximos privilegios en el sistema infectado y que modifica el funcionamiento normal del S.O o de otras aplicaciones para ocultar su actividad, es denominado:";
 choices[55]= new Array();
 choices[55][0] = "Spyware.";
 choices[55][1] = "Eavesdropping.";
 choices[55][2] = "Troyano.";
 choices[55][3] = "Rootkit.";
 answers[55] = 3;
 units[55] = ['119'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 917. AGE A2 2015";
 preguntaids[55] = 917


//  Id pregunta: 5654 Año de creación de pregunta: 2007
 questions[56]= "57)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[56]= new Array();
 choices[56][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de la red publica.";
 choices[56][1] = "Efectuar la autentificaci&oacute;n de los usuarios.";
 choices[56][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de la red publica.";
 choices[56][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[56] = 2;
 units[56] = ['119', '120'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5654. ";
 preguntaids[56] = 5654


//  Id pregunta: 5663 Año de creación de pregunta: 2007
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes es una norma certificable?";
 choices[57]= new Array();
 choices[57][0] = "ISO/IEC 27003";
 choices[57][1] = "UNE-ISO/IEC 27002:2009";
 choices[57][2] = "UNE-ISO/IEC 27001:2007";
 choices[57][3] = "BS 7799-1";
 answers[57] = 2;
 units[57] = ['119'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5663. ";
 preguntaids[57] = 5663


//  Id pregunta: 1400 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique la respuesta FALSA, respecto al protocolo IPSEC:";
 choices[58]= new Array();
 choices[58][0] = "EI protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[58][1] = "EI protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[58][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[58][3] = "IPSEC ESP es incompatible con el modo transporte, solo se puede utilizar en modo t&uacute;nel.";
 answers[58] = 3;
 units[58] = ['119'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1400. ";
 preguntaids[58] = 1400


//  Id pregunta: 5701 Año de creación de pregunta: 2007
 questions[59]= "60)  Los denominados cortafuegos o firewalls de filtrado de paquetes, se caracterizan porque:";
 choices[59]= new Array();
 choices[59][0] = "Analizan &uacute;nicamente la informaci&oacute;n incluida en la cabecera TCP/IP de cada paquete.";
 choices[59][1] = "Analizan la carga &uacute;til de datos de cada paquete.";
 choices[59][2] = "Autentifican los usuarios que acceden a la red.";
 choices[59][3] = "No permiten filtrar paquetes en funci&oacute;n del puerto destino de la comunicaci&oacute;n saliente.";
 answers[59] = 0;
 units[59] = ['119'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5701. ";
 preguntaids[59] = 5701


//  Id pregunta: 6197 Año de creación de pregunta: 2003
 questions[60]= "61)  &iquest;Cu&aacute;l es la longitud equivalente a una clave RSA de 1024 bits si utiliz&aacute;ramos un algoritmo de clave sim&eacute;trica?";
 choices[60]= new Array();
 choices[60][0] = "132";
 choices[60][1] = "80";
 choices[60][2] = "64";
 choices[60][3] = "512";
 answers[60] = 1;
 units[60] = ['119'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 6197. Examen TIC A Castilla La Mancha 2007";
 preguntaids[60] = 6197


//  Id pregunta: 919 Año de creación de pregunta: 2016
 questions[61]= "62)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[61]= new Array();
 choices[61][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[61][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[61][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[61][3] = "Estos sistemas es imposible clasificarlos.";
 answers[61] = 1;
 units[61] = ['119'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 919. Junta de Extremadura A1 2015";
 preguntaids[61] = 919


//  Id pregunta: 4384 Año de creación de pregunta: 2004
 questions[62]= "63)  &iquest;Qu&eacute; diferencia, entre otras, hay entre S-HTTP y SSL?";
 choices[62]= new Array();
 choices[62][0] = "El protocolo SSL fue desarrollado por Enterprise Integration Technologies (EIT) y el S-HTTP por Netscape";
 choices[62][1] = "S-HTTP permite el cifrado pero no la autenticaci&oacute;n digital, SSL permite tanto el cifrado como la autenticaci&oacute;n digital";
 choices[62][2] = "S-HTTP funciona entre la capa TCP y la capa de aplicaci&oacute;n, SSL funciona en la de aplicaci&oacute;n";
 choices[62][3] = "S-HTTP solamente sirve para la navegaci&oacute;n web, mientras que SSL sirve para cualquier comunicaci&oacute;n";
 answers[62] = 3;
 units[62] = ['119'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4384. Examen TAI 2004";
 preguntaids[62] = 4384


//  Id pregunta: 4939 Año de creación de pregunta: 2002
 questions[63]= "64)  Un servidor &quot;proxy&quot;:";
 choices[63]= new Array();
 choices[63][0] = "Sirve para traducir direcciones IP";
 choices[63][1] = "Act&uacute;a de intermediario, para acceder a determinados servicios de forma indirecta";
 choices[63][2] = "Permite acceder a cualquier servicio de internet, actuando de intermediario";
 choices[63][3] = "Sirve para realizar pagos on-line";
 answers[63] = 1;
 units[63] = ['119'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4939. ";
 preguntaids[63] = 4939


//  Id pregunta: 915 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[64]= new Array();
 choices[64][0] = "DoS";
 choices[64][1] = "Phishing";
 choices[64][2] = "Sniffing";
 choices[64][3] = "Spoofing";
 answers[64] = 3;
 units[64] = ['119'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 915. AGE A1 2015";
 preguntaids[64] = 915


//  Id pregunta: 4812 Año de creación de pregunta: 2002
 questions[65]= "66)  En la arquitectura de cortafuegos &quot;screened subnet&quot; o subred apantallada:";
 choices[65]= new Array();
 choices[65][0] = "se dispone de un &uacute;nico router, estando el basti&oacute;n y los dem&aacute;s componentes en la red interna";
 choices[65][1] = "se dispone de 2 routers, interno y externo, y tanto el basti&oacute;n como los dem&aacute;s componentes est&aacute;n en la red interna";
 choices[65][2] = "se dispone de 2 routers, interno y externo, y el basti&oacute;n est&aacute; en una red intermedia desmilitarizada o DMZ";
 choices[65][3] = "no se dispone de ning&uacute;n router, sino de un basti&oacute;n con funciones de proxy que apantalla la red interna y alberga los servidores p&uacute;blicos";
 answers[65] = 2;
 units[65] = ['119'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4812. ";
 preguntaids[65] = 4812


//  Id pregunta: 6508 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Qu&eacute; es un SOCKS o un FWTK?";
 choices[66]= new Array();
 choices[66][0] = "Son servidores de contrase&ntilde;as y claves que protegen generalmente informaci&oacute;n vital mediante algoritmos de cifrado";
 choices[66][1] = "Servidores de autenticaci&oacute;n y proxy";
 choices[66][2] = "Servidores de nombres";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = 1;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 6508. ";
 preguntaids[66] = 6508


//  Id pregunta: 4981 Año de creación de pregunta: 2002
 questions[67]= "68)  Los cortafuegos a nivel de aplicaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "suelen prestar servicios de tipo proxy";
 choices[67][1] = "son generalistas, no bas&aacute;ndose en ning&uacute;n protocolo en concreto";
 choices[67][2] = "no pueden prestar en ning&uacute;n caso servicios de autenticaci&oacute;n de usuarios";
 choices[67][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[67] = 0;
 units[67] = ['119'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4981. ";
 preguntaids[67] = 4981


//  Id pregunta: 5798 Año de creación de pregunta: 2007
 questions[68]= "69)  Un detector de intrusiones act&uacute;a a:";
 choices[68]= new Array();
 choices[68][0] = "nivel f&iacute;sico";
 choices[68][1] = "nivel de enlace";
 choices[68][2] = "nivel de red";
 choices[68][3] = "nivel de aplicaci&oacute;n";
 answers[68] = 3;
 units[68] = ['119', '120'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5798. ";
 preguntaids[68] = 5798


//  Id pregunta: 2568 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Qu&eacute; tiene de particular una c&aacute;mara o sala anecoica?";
 choices[69]= new Array();
 choices[69][0] = "Las paredes son espejos reflectantes que permiten ver de fuera a dentro pero no de dentro a fuera.";
 choices[69][1] = "Las paredes tienen formas geom&eacute;tricas a lo largo de su superficie que evitan que rebote el sonido.";
 choices[69][2] = "Su electricidad est&aacute;tica hace que se comporte como una jaula de Faraday.";
 choices[69][3] = "Se mantiene completamente isoterma gracias al material de sus revestimientos.";
 answers[69] = 1;
 units[69] = ['119'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 2568. ";
 preguntaids[69] = 2568


//  Id pregunta: 4372 Año de creación de pregunta: 2004
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguiente definiciones se corresponde con la vulnerabilidad DDoS que puede producirse sobre nuestros sistemas?";
 choices[70]= new Array();
 choices[70][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[70][1] = "Escuchas en red";
 choices[70][2] = "Denegaci&oacute;n de servicio Distribuido";
 choices[70][3] = "Ataques de desbordamiento de buffer";
 answers[70] = 2;
 units[70] = ['119'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4372. ";
 preguntaids[70] = 4372


//  Id pregunta: 4382 Año de creación de pregunta: 2004
 questions[71]= "72)  Entre los ataques de seguridad que se producen a trav&eacute;s de redes como internet, aparece el concepto de Phishing. &iquest;Cu&aacute;l de las siguientes definiciones se ajustan a este concepto?";
 choices[71]= new Array();
 choices[71][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[71][1] = "Suplantaci&oacute;n de identidades de organizaciones para conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[71][2] = "Escuchas en red con el fin de conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = 1;
 units[71] = ['119'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4382. ";
 preguntaids[71] = 4382


//  Id pregunta: 1227 Año de creación de pregunta: 2016
 questions[72]= "73)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Screened Subnet.";
 choices[72][1] = "Dual-Homed Host.";
 choices[72][2] = "Router-Homed Host.";
 choices[72][3] = "Screened Host.";
 answers[72] = 3;
 units[72] = ['119'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1227. ";
 preguntaids[72] = 1227


//  Id pregunta: 6044 Año de creación de pregunta: 2003
 questions[73]= "74)  Pedro es administrador corporativo de seguridad. Para &eacute;l, la Intranet y la DMZ son:";
 choices[73]= new Array();
 choices[73][0] = "El conjunto de aplicaciones que son de uso interno del personal del Organismo.";
 choices[73][1] = "El conjunto de servicios y personal que no son directamente accedidos desde el exterior.";
 choices[73][2] = "Dominios de seguridad, entendidos como el conjunto de m&aacute;quinas cuya configuraci&oacute;n es responsabilidad de undepartamento interno.";
 choices[73][3] = "El conjunto de ordenadores que no tienen acceso directo al exterior.";
 answers[73] = 2;
 units[73] = ['119'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 6044. TIC B 2007";
 preguntaids[73] = 6044


//  Id pregunta: 4414 Año de creación de pregunta: 2002
 questions[74]= "75)  En un sistema de alimentaci&oacute;n ininterrumpida, a qu&eacute; se denomina 'red de reserva':";
 choices[74]= new Array();
 choices[74][0] = "A la suministrada por la compa&ntilde;ia el&eacute;ctrica";
 choices[74][1] = "A la que suministra el ondulador (inversor) a la carga";
 choices[74][2] = "A la carga remanente en las bater&iacute;as";
 choices[74][3] = "A la que entrega el rectificador";
 answers[74] = 0;
 units[74] = ['119'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4414. ";
 preguntaids[74] = 4414


