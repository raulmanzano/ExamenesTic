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
//  Id pregunta: 4435 Año de creación de pregunta: 2005
 questions[0]= "1)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un cracker en un servidor web, en el peor de los casos, puede afectar a:";
 choices[0]= new Array();
 choices[0][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[0][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[0][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[0][3] = "Todas las anteriores";
 answers[0] = 3;
 units[0] = ['120'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4435. ";
 preguntaids[0] = 4435


//  Id pregunta: 5334 Año de creación de pregunta: 2006
 questions[1]= "2)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario comienza a realizar acciones destructivas sobre el sistema en un momento determinado de tiempo o a ra&iacute;z de una acci&oacute;n concreta se llama";
 choices[1]= new Array();
 choices[1][0] = "sniffer";
 choices[1][1] = "bomba l&oacute;gica";
 choices[1][2] = "troyano";
 choices[1][3] = "gusano";
 answers[1] = 1;
 units[1] = ['120'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5334. ";
 preguntaids[1] = 5334


//  Id pregunta: 921 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;C&oacute;mo se podr&iacute;an mitigar los ataques XSS (Cross-Site Scripting) a una aplicaci&oacute;n web?";
 choices[2]= new Array();
 choices[2][0] = "Mediante el uso de certificados electr&oacute;nicos.";
 choices[2][1] = "Mediante el filtrado de datos maliciosos en la entrada de la aplicaci&oacute;n, en la salida o en ambas.";
 choices[2][2] = "Mediante la creaci&oacute;n de reglas que permite un cortafuegos tradicional.";
 choices[2][3] = "Mediante la configuraci&oacute;n de listas de control de accesos (ACL).";
 answers[2] = 1;
 units[2] = ['120'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 921. AGE A2 2015";
 preguntaids[2] = 921


//  Id pregunta: 4425 Año de creación de pregunta: 2005
 questions[3]= "4)  La intrusi&oacute;n de un virus inform&aacute;tico del tipo gusano (worm) en un ordenador puede afectar, en primer lugar, por ocupaci&oacute;n de todo el espacio disponible en disco:";
 choices[3]= new Array();
 choices[3][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[3][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[3][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[3][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[3] = 1;
 units[3] = ['120'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4425. ";
 preguntaids[3] = 4425


//  Id pregunta: 7250 Año de creación de pregunta: 2010
 questions[4]= "5)  Un usuario de Kerberos";
 choices[4]= new Array();
 choices[4][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[4][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[4][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[4][3] = "Todas las respuestas anteriores son correctas";
 answers[4] = 3;
 units[4] = ['120'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 7250. ";
 preguntaids[4] = 7250


//  Id pregunta: 4407 Año de creación de pregunta: 2002
 questions[5]= "6)  De las vulnerabilidades del software respecto a la seguridad inform&aacute;tica es falso que:";
 choices[5]= new Array();
 choices[5][0] = "el ataque de buffer overflow se basa en desbordar un buffer de memoria a la pila del sistema y forzar un retorno de una funci&oacute;n al sitio deseado";
 choices[5][1] = "el ataque m&aacute;s famoso en internet (gusano de internet) se basaba en fallo del software de los servidores HTTP en la entrega de p&aacute;ginas";
 choices[5][2] = "el ataque de IP spoofing consiste en falsificar la direcci&oacute;n IP para suplantar la identidad";
 choices[5][3] = "DDOS es un m&eacute;todo de ataque de denegaci&oacute;n del servicio de forma distribuida";
 answers[5] = 1;
 units[5] = ['120'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4407. ";
 preguntaids[5] = 4407


//  Id pregunta: 5246 Año de creación de pregunta: 2006
 questions[6]= "7)  &iquest;Qu&eacute; no se suele permitir en una DMZ?";
 choices[6]= new Array();
 choices[6][0] = "Conexiones de ordenadores en la DMZ a ordenadores en la red interna";
 choices[6][1] = "Conexiones de ordenadores en la red interna a ordenadores en la dmz";
 choices[6][2] = "Conexiones de ordenadores en la dmz a ordenadores en la red externa";
 choices[6][3] = "Se permiten todas las anteriores";
 answers[6] = 3;
 units[6] = ['120'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5246. ";
 preguntaids[6] = 5246


//  Id pregunta: 6754 Año de creación de pregunta: 2009
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[7]= new Array();
 choices[7][0] = "Interrupci&oacute;n";
 choices[7][1] = "Interceptaci&oacute;n";
 choices[7][2] = "Modificaci&oacute;n";
 choices[7][3] = "Generaci&oacute;n";
 answers[7] = 1;
 units[7] = ['120'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 6754. MAP 2008 A1";
 preguntaids[7] = 6754


//  Id pregunta: 1631 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Es posible que en una misma sesi&oacute;n/aplicaci&oacute;n sobre Internet se utilicen simult&aacute;neamente los protocolos de seguridad IPSec y SSL?";
 choices[8]= new Array();
 choices[8][0] = "No, se debe elegir en la implementaci&oacute;n de la aplicaci&oacute;n una de las dos, pues trabajan en el mismo nivel.";
 choices[8][1] = "No, se debe elegir en la implementaci&oacute;n de la aplicaci&oacute;n una de las dos, pues son incompatibles a nivel de socket.";
 choices[8][2] = "S&iacute;, no debe presentar especiales problemas.";
 choices[8][3] = "S&iacute;, pero necesita una adaptaci&oacute;n especial para que no se produzca una transposici&oacute;n de claves.";
 answers[8] = 2;
 units[8] = ['120'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1631. ";
 preguntaids[8] = 1631


//  Id pregunta: 5333 Año de creación de pregunta: 2006
 questions[9]= "10)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario, es utilizado por un tercero para realizar acciones no autorizadas sobre el sistema se llama";
 choices[9]= new Array();
 choices[9][0] = "honeypot";
 choices[9][1] = "bomba l&oacute;gica";
 choices[9][2] = "virus";
 choices[9][3] = "troyano";
 answers[9] = 3;
 units[9] = ['120'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5333. ";
 preguntaids[9] = 5333


//  Id pregunta: 1834 Año de creación de pregunta: 2016
 questions[10]= "11)  Para establecer una comunicaci&oacute;n segura, el protocolo SSL usa:";
 choices[10]= new Array();
 choices[10][0] = "Una clave de sesi&oacute;n y un vector inicial";
 choices[10][1] = "Una clave de sesi&oacute;n";
 choices[10][2] = "Una clave p&uacute;blica y una privada";
 choices[10][3] = "Una clave sim&eacute;trica tipo Diffie-Hellman";
 answers[10] = 0;
 units[10] = ['120'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1834. ";
 preguntaids[10] = 1834


//  Id pregunta: 4663 Año de creación de pregunta: 2002
 questions[11]= "12)  De IPSec, una de las siguientes afirmaciones no es cierta. Indicar cu&aacute;l:";
 choices[11]= new Array();
 choices[11][0] = "Para transmitir IPSec, tanto en modo transporte como en modo t&uacute;nel se ha de incluir una cabecera justo delante de la cabecera IP original y una cola detr&aacute;s de los datos";
 choices[11][1] = "En modo transporte, IPSec se tiene entre los sistemas finales, mientras en modo t&uacute;nel se tiene IPSec entre routers pero IP en los tramos routers-sistemas finales";
 choices[11][2] = "El protocolo por defecto para la gesti&oacute;n de claves en IPSec se denomina IKE (Internet Key Exchange)";
 choices[11][3] = "Entre otros, IPSec proporciona mecanismos anti-replay, autenticaci&oacute;n, control de acceso y confidencialidad de datos";
 answers[11] = 0;
 units[11] = ['120'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4663. ";
 preguntaids[11] = 4663


//  Id pregunta: 5079 Año de creación de pregunta: 2002
 questions[12]= "13)  SSL utiliza, entre otros, el siguiente algoritmo de cifrado sim&eacute;trico:";
 choices[12]= new Array();
 choices[12][0] = "AES";
 choices[12][1] = "LUCIFER";
 choices[12][2] = "2DES";
 choices[12][3] = "Ninguno de las anteriores";
 answers[12] = 0;
 units[12] = ['120'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5079. ";
 preguntaids[12] = 5079


//  Id pregunta: 4426 Año de creación de pregunta: 2005
 questions[13]= "14)  La inundaci&oacute;n de un buz&oacute;n de correo electr&oacute;nico con un gran n&uacute;mero de mensajes (e-mail spamming) afecta a:";
 choices[13]= new Array();
 choices[13][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[13][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[13][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[13][3] = "Las respuestas &lsquo;c&rsquo; y &lsquo;d&rsquo; son correctas";
 answers[13] = 1;
 units[13] = ['120'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4426. ";
 preguntaids[13] = 4426


//  Id pregunta: 6698 Año de creación de pregunta: 2009
 questions[14]= "15)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[14]= new Array();
 choices[14][0] = "Es una especificaci&oacute;n desarrollada por la W3C";
 choices[14][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar";
 choices[14][2] = "P3P est&aacute; basado en CCXML";
 choices[14][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P";
 answers[14] = 2;
 units[14] = ['120'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6698. MAP 2008 A1";
 preguntaids[14] = 6698


//  Id pregunta: 6715 Año de creación de pregunta: 2009
 questions[15]= "16)  Por IP-SPOOFING entendemos:";
 choices[15]= new Array();
 choices[15][0] = "Captura de passwords";
 choices[15][1] = "Uso fraudulento de direcciones de enlace";
 choices[15][2] = "Suplantaci&oacute;n de direcciones de red";
 choices[15][3] = "Propagaci&oacute;n de virus";
 answers[15] = 2;
 units[15] = ['120'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6715. MAP 2008 A1";
 preguntaids[15] = 6715


//  Id pregunta: 5044 Año de creación de pregunta: 2002
 questions[16]= "17)  S/MIME utiliza los siguientes algoritmos de  firma:";
 choices[16]= new Array();
 choices[16][0] = "RC2";
 choices[16][1] = "MD5";
 choices[16][2] = "RSA";
 choices[16][3] = "todos los anteriores";
 answers[16] = 3;
 units[16] = ['120'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5044. ";
 preguntaids[16] = 5044


//  Id pregunta: 5351 Año de creación de pregunta: 2006
 questions[17]= "18)  Cuando las tareas de operaci&oacute;n y programaci&oacute;n no est&aacute;n segregadas, el responsable de seguridad debe de proveer controles";
 choices[17]= new Array();
 choices[17][0] = "compensatorios";
 choices[17][1] = "administrativos";
 choices[17][2] = "correctivos";
 choices[17][3] = "de acceso";
 answers[17] = 0;
 units[17] = ['120'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5351. ";
 preguntaids[17] = 5351


//  Id pregunta: 5341 Año de creación de pregunta: 2006
 questions[18]= "19)  Protocolo cliente/servidor que permite la autenticaci&oacute;n y control de acceso de usuarios PPP";
 choices[18]= new Array();
 choices[18][0] = "ACF2";
 choices[18][1] = "RACF";
 choices[18][2] = "RADIUS";
 choices[18][3] = "Kerberos";
 answers[18] = 2;
 units[18] = ['120'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5341. ";
 preguntaids[18] = 5341


//  Id pregunta: 5328 Año de creación de pregunta: 2006
 questions[19]= "20)  La transmisi&oacute;n de datos a trav&eacute;s de la red p&uacute;blica de forma que los nodos de enrutado no sean conscientes de que la transmisi&oacute;n es parte de una red privada se llama";
 choices[19]= new Array();
 choices[19][0] = "Tunel";
 choices[19][1] = "Red Privada Virtual (VPN)";
 choices[19][2] = "IPSec";
 choices[19][3] = "SSL";
 answers[19] = 0;
 units[19] = ['120'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5328. ";
 preguntaids[19] = 5328


//  Id pregunta: 1569 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de entre los protocolos que componen SSL reside al nivel m&aacute;s bajo y proporciona el encapsulado a los protocolos del nivel superior:";
 choices[20]= new Array();
 choices[20][0] = "Record.";
 choices[20][1] = "Handshake.";
 choices[20][2] = "Alert.";
 choices[20][3] = "Change Cipher Spec.";
 answers[20] = 0;
 units[20] = ['120'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1569. ";
 preguntaids[20] = 1569


//  Id pregunta: 6069 Año de creación de pregunta: 2003
 questions[21]= "22)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[21]= new Array();
 choices[21][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[21][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[21][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[21][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[21] = 3;
 units[21] = ['119', '120'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 6069. Examen TIC A1 MAP 2007";
 preguntaids[21] = 6069


//  Id pregunta: 920 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes es un ataque que se caracteriza porque el fraude est&aacute; dirigido principalmente a ejecutivos de alto nivel con objeto de obtener todo tipo de informaci&oacute;n confidencial para el acceso y control de los sistemas de informaci&oacute;n de la empresa?";
 choices[22]= new Array();
 choices[22][0] = "Hunting";
 choices[22][1] = "Stalking";
 choices[22][2] = "Whaling";
 choices[22][3] = "Trusting";
 answers[22] = 2;
 units[22] = ['120'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 920. AGE A2 2015";
 preguntaids[22] = 920


//  Id pregunta: 5337 Año de creación de pregunta: 2006
 questions[23]= "24)  Cada uno de los equipos comprometidos y utilizados para lanzar un ataque de denegaci&oacute;n de servicio distribuido contra un objetivo concreto se llama";
 choices[23]= new Array();
 choices[23][0] = "dongle";
 choices[23][1] = "token";
 choices[23][2] = "repetidor";
 choices[23][3] = "zombie";
 answers[23] = 3;
 units[23] = ['120'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5337. ";
 preguntaids[23] = 5337


//  Id pregunta: 7254 Año de creación de pregunta: 2010
 questions[24]= "25)  Deficiencias dentro del sistema Kerberos";
 choices[24]= new Array();
 choices[24][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[24][1] = "Privacidad";
 choices[24][2] = "Integridad";
 choices[24][3] = "Todas las respuestas anteriores son incorrectos";
 answers[24] = 0;
 units[24] = ['120'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7254. ";
 preguntaids[24] = 7254


//  Id pregunta: 5339 Año de creación de pregunta: 2006
 questions[25]= "26)  Sniffer de paquetes desarrollado por el FBI para la monitorizaci&oacute;n de las transmisiones electr&oacute;nicas de criminales";
 choices[25]= new Array();
 choices[25][0] = "Carnivore";
 choices[25][1] = "Internet Key Exchange (IKE)";
 choices[25][2] = "Kerberos";
 choices[25][3] = "SSL";
 answers[25] = 0;
 units[25] = ['120'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5339. ";
 preguntaids[25] = 5339


//  Id pregunta: 4436 Año de creación de pregunta: 2005
 questions[26]= "27)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un hacker en un servidor web afecta a:";
 choices[26]= new Array();
 choices[26][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[26][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[26][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[26][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[26] = 0;
 units[26] = ['120'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4436. ";
 preguntaids[26] = 4436


//  Id pregunta: 5349 Año de creación de pregunta: 2006
 questions[27]= "28)  &iquest;Qu&eacute; termino define mejor una credencial Kerberos?";
 choices[27]= new Array();
 choices[27][0] = "Un ticket de autenticaci&oacute;n";
 choices[27][1] = "Un ticket de autorizaci&oacute;n";
 choices[27][2] = "Cada uno de los servicios y aplicaciones de una red que soportan Kerberos";
 choices[27][3] = "Un dominio, formado por usuarios, equipos y servicios registrados en un servidor Kerberos";
 answers[27] = 1;
 units[27] = ['120'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5349. ";
 preguntaids[27] = 5349


//  Id pregunta: 7247 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[28]= new Array();
 choices[28][0] = "TACACS+";
 choices[28][1] = "Radius";
 choices[28][2] = "Un grupo de trabajo peer-to-peer";
 choices[28][3] = "Diameter";
 answers[28] = 2;
 units[28] = ['120'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7247. ";
 preguntaids[28] = 7247


//  Id pregunta: 5332 Año de creación de pregunta: 2006
 questions[29]= "30)  La intrusi&oacute;n basada en la habilidad del intruso en enga&ntilde;ar a la gente para que rompa los procedimientos normales de seguridad se llama";
 choices[29]= new Array();
 choices[29][0] = "surfeo sobre los hombros (shoulder surfing)";
 choices[29][1] = "huellas del cerebro (brain fingerprinting)";
 choices[29][2] = "ingenier&iacute;a social";
 choices[29][3] = "subterfugio";
 answers[29] = 2;
 units[29] = ['120'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5332. ";
 preguntaids[29] = 5332


//  Id pregunta: 1642 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la respuesta FALSA:";
 choices[30]= new Array();
 choices[30][0] = "HTTPS es la versi&oacute;n segura del protocolo HTTP.";
 choices[30][1] = "Utiliza cifrado basado en SSL.";
 choices[30][2] = "El puerto est&aacute;ndar es el 443.";
 choices[30][3] = "Basta con que la direcci&oacute;n web empiece por https para que sea una p&aacute;gina segura.";
 answers[30] = 3;
 units[30] = ['120'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1642. ";
 preguntaids[30] = 1642


//  Id pregunta: 5251 Año de creación de pregunta: 2006
 questions[31]= "32)  Un mensaje se puede cifrar";
 choices[31]= new Array();
 choices[31][0] = "Mediante mecanismos de cifrado sim&eacute;trico y asim&eacute;trico";
 choices[31][1] = "S&oacute;lo mediante mecanismos de cifrado sim&eacute;trico como DES";
 choices[31][2] = "S&oacute;lo mediante mecanismos de cifrado asim&eacute;trico como RSA";
 choices[31][3] = "Se puede cifrar con mecanismos de cifrado sim&eacute;trico, aunque por velocidad es preferible cifrar con criptograf&iacute;a de clave asim&eacute;trica";
 answers[31] = 0;
 units[31] = ['120'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5251. ";
 preguntaids[31] = 5251


//  Id pregunta: 5067 Año de creación de pregunta: 2002
 questions[32]= "33)  S-HTTP:";
 choices[32]= new Array();
 choices[32][0] = "es lo mismo que HTTPS (HTTP + SSL)";
 choices[32][1] = "responde por Secure-HTTP, y est&aacute; escasamente implantado";
 choices[32][2] = "Est&aacute; dise&ntilde;ado por los creadores del protocolo HTTP";
 choices[32][3] = "Es un protocolo del nivel de transporte";
 answers[32] = 1;
 units[32] = ['120'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5067. ";
 preguntaids[32] = 5067


//  Id pregunta: 5336 Año de creación de pregunta: 2006
 questions[33]= "34)  Cada uno de los equipos que, dentro de un servicio distribuido de detecci&oacute;n de intrusi&oacute;n, se instalan en los diferentes segmentos de red se llama";
 choices[33]= new Array();
 choices[33][0] = "cortafuegos";
 choices[33][1] = "sonda";
 choices[33][2] = "honeypot";
 choices[33][3] = "basti&oacute;n";
 answers[33] = 1;
 units[33] = ['120'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5336. ";
 preguntaids[33] = 5336


//  Id pregunta: 1513 Año de creación de pregunta: 2016
 questions[34]= "35)  Si accedemos a un sitio https y recibimos un aviso de que la autoridad de certificaci&oacute;n que ha emitido el certificado de servidor no es reconocida por nosotros, y aun as&iacute; aceptamos establecer comunicaci&oacute;n con ese servidor, &iquest;la comunicaci&oacute;n entre cliente y servidor ser&aacute; cifrada?";
 choices[34]= new Array();
 choices[34][0] = "No, puesto que el certificado no es v&aacute;lido.";
 choices[34][1] = "S&iacute;, puesto que el certificado permite cifrar esa comunicaci&oacute;n, aunque haya sido emitido por una autoridad en la que no confiamos.";
 choices[34][2] = "No, puesto que aunque hayamos aceptado ese certificado no podemos utilizarlo para hacer el cifrado de informaci&oacute;n.";
 choices[34][3] = "S&iacute;, porque al aceptar el cifrado se va a realizar con un certificado de cliente.";
 answers[34] = 1;
 units[34] = ['120'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1513. ";
 preguntaids[34] = 1513


//  Id pregunta: 6518 Año de creación de pregunta: 2003
 questions[35]= "36)  Indique cu&aacute;l de los siguientes no es un ataque en seguridad inform&aacute;tica";
 choices[35]= new Array();
 choices[35][0] = "Pharming";
 choices[35][1] = "Phishing";
 choices[35][2] = "Gloofing";
 choices[35][3] = "Spoofing";
 answers[35] = 2;
 units[35] = ['120'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 6518. ";
 preguntaids[35] = 6518


//  Id pregunta: 1760 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale c&oacute;mo se denomina el protocolo sucesor de SSL (Secure Sockets Layer), estandarizado por el IETF:";
 choices[36]= new Array();
 choices[36][0] = "TSL";
 choices[36][1] = "TLS";
 choices[36][2] = "IPSEC";
 choices[36][3] = "SECIP";
 answers[36] = 1;
 units[36] = ['120'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1760. ";
 preguntaids[36] = 1760


//  Id pregunta: 6519 Año de creación de pregunta: 2003
 questions[37]= "38)  De los siguientes ataques, cu&aacute;l se corresponde con la obtenci&oacute;n de informaci&oacute;n de una red sin modificar la informaci&oacute;n";
 choices[37]= new Array();
 choices[37][0] = "Explot";
 choices[37][1] = "Snooping";
 choices[37][2] = "Wardriving";
 choices[37][3] = "Teardrop";
 answers[37] = 1;
 units[37] = ['120'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6519. ";
 preguntaids[37] = 6519


//  Id pregunta: 5359 Año de creación de pregunta: 2006
 questions[38]= "39)  Si quiero autorizar a un usuario";
 choices[38]= new Array();
 choices[38][0] = "Le pido su nombre";
 choices[38][1] = "Le pido su DNI";
 choices[38][2] = "Compruebo la existencia de su nombre en una lista";
 choices[38][3] = "Le pregunto su n&uacute;mero de DNI";
 answers[38] = 2;
 units[38] = ['120'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5359. ";
 preguntaids[38] = 5359


//  Id pregunta: 5249 Año de creación de pregunta: 2006
 questions[39]= "40)  En referencia a las amenazas que afectan a la seguridad en las redes de comunicaciones, se&ntilde;ale la respuesta incorrecta";
 choices[39]= new Array();
 choices[39][0] = "La interrupci&oacute;n puede ser tanto f&iacute;sica como l&oacute;gica";
 choices[39][1] = "El llamado sniffing es un tipo de intercepci&oacute;n";
 choices[39][2] = "Los ataques de tipo pasivo son f&aacute;ciles de detectar";
 choices[39][3] = "Los ataques pueden ser activos y pasivos";
 answers[39] = 2;
 units[39] = ['120'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5249. ";
 preguntaids[39] = 5249


//  Id pregunta: 5354 Año de creación de pregunta: 2006
 questions[40]= "41)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[40]= new Array();
 choices[40][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[40][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[40][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[40][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[40] = 1;
 units[40] = ['120'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5354. ";
 preguntaids[40] = 5354


//  Id pregunta: 5335 Año de creación de pregunta: 2006
 questions[41]= "42)  Una aplicaci&oacute;n que se localiza en un servidor con el fin de ofrecer seguridad a la red interna, por lo que ha sido especialmente configurado para la recepci&oacute;n de ataques es un...";
 choices[41]= new Array();
 choices[41][0] = "cortafuegos";
 choices[41][1] = "sonda";
 choices[41][2] = "honeypot";
 choices[41][3] = "basti&oacute;n";
 answers[41] = 3;
 units[41] = ['120'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5335. ";
 preguntaids[41] = 5335


//  Id pregunta: 5340 Año de creación de pregunta: 2006
 questions[42]= "43)  El sistema de gesti&oacute;n de la seguridad que autoriza el acceso de usuarios a recursos en entorno OS/390 se llama";
 choices[42]= new Array();
 choices[42][0] = "ACF2";
 choices[42][1] = "RACF";
 choices[42][2] = "RADIUS";
 choices[42][3] = "CICS";
 answers[42] = 1;
 units[42] = ['120'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5340. ";
 preguntaids[42] = 5340


//  Id pregunta: 5250 Año de creación de pregunta: 2006
 questions[43]= "44)  Un buen sistema de gesti&oacute;n de contrase&ntilde;as se caracteriza por";
 choices[43]= new Array();
 choices[43][0] = "El sistema, si procede, permitir&aacute; a los usuarios que seleccionen sus contrase&ntilde;as";
 choices[43][1] = "Las contrase&ntilde;as de los usuarios con m&aacute;s privilegios se cambiar&aacute;n con mayor frecuencia";
 choices[43][2] = "El sistema no mantendr&aacute; un registro de las &uacute;ltimas contrase&ntilde;as usadas, manteniendo s&oacute;lo la actual";
 choices[43][3] = "A y B son correctas";
 answers[43] = 3;
 units[43] = ['120'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5250. ";
 preguntaids[43] = 5250


//  Id pregunta: 5089 Año de creación de pregunta: 2002
 questions[44]= "45)  WTLS:";
 choices[44]= new Array();
 choices[44][0] = "est&aacute; basado en el protocolo TLS, pero optimizado para dispositivos m&oacute;viles";
 choices[44][1] = "proporciona mayor seguridad que TLS";
 choices[44][2] = "es independiente de TLS, un protocolo dise&ntilde;ado espec&iacute;ficamente para redes inal&aacute;mbricas";
 choices[44][3] = "ningunas de las anteriores";
 answers[44] = 0;
 units[44] = ['120'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5089. ";
 preguntaids[44] = 5089


//  Id pregunta: 5348 Año de creación de pregunta: 2006
 questions[45]= "46)  En seguridad, que elemento no forma parte de los servicios de AAA";
 choices[45]= new Array();
 choices[45][0] = "Registro (accounting)";
 choices[45][1] = "Autorizaci&oacute;n";
 choices[45][2] = "Adaptaci&oacute;n";
 choices[45][3] = "Autenticaci&oacute;n";
 answers[45] = 2;
 units[45] = ['120'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5348. ";
 preguntaids[45] = 5348


//  Id pregunta: 7406 Año de creación de pregunta: 2010
 questions[46]= "47)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[46]= new Array();
 choices[46][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[46][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[46][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[46][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[46] = 3;
 units[46] = ['120'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7406. Examen TIC B 2009";
 preguntaids[46] = 7406


//  Id pregunta: 5077 Año de creación de pregunta: 2002
 questions[47]= "48)  Sobre los algoritmos Hash o funci&oacute;n resumen:";
 choices[47]= new Array();
 choices[47][0] = "Todos tienen una clave de longitud de 160 bits";
 choices[47][1] = "La longitud de la clave depender&aacute; del algoritmo utilizado";
 choices[47][2] = "Es imposible que la longitud de la clave sea menos de 160";
 choices[47][3] = "Da igual la longitud de clave";
 answers[47] = 1;
 units[47] = ['120'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5077. ";
 preguntaids[47] = 5077


//  Id pregunta: 4720 Año de creación de pregunta: 2002
 questions[48]= "49)  Indicar cu&aacute;l de las siguientes ventajas corresponde al uso de una pasarela de aplicaci&oacute;n como cortafuegos:";
 choices[48]= new Array();
 choices[48][0] = "Simplicidad";
 choices[48][1] = "Facilidad de control";
 choices[48][2] = "Rapidez";
 choices[48][3] = "Transparencia";
 answers[48] = 1;
 units[48] = ['120'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4720. ";
 preguntaids[48] = 4720


//  Id pregunta: 5326 Año de creación de pregunta: 2006
 questions[49]= "50)  El estandar de seguridad ubicado en la capa de procesamiento de paquetes en lugar de en la capa de aplicaci&oacute;n se llama";
 choices[49]= new Array();
 choices[49][0] = "SSL";
 choices[49][1] = "HTTPS";
 choices[49][2] = "FTP pasivo";
 choices[49][3] = "IPSec";
 answers[49] = 3;
 units[49] = ['120'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5326. ";
 preguntaids[49] = 5326


//  Id pregunta: 922 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[50]= new Array();
 choices[50][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[50][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[50][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[50][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[50] = 3;
 units[50] = ['120'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 922. Junta de Extremadura A1 2015";
 preguntaids[50] = 922


//  Id pregunta: 1066 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes sistemas proporciona la funcionalidad de Single Sign-On basada en tickets?";
 choices[51]= new Array();
 choices[51][0] = "KERBEROS.";
 choices[51][1] = "STORK.";
 choices[51][2] = "SAML.";
 choices[51][3] = "OPENID.";
 answers[51] = 0;
 units[51] = ['120'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1066. ";
 preguntaids[51] = 1066


//  Id pregunta: 1640 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un requisito indispensable para una comunicaci&oacute;n segura?";
 choices[52]= new Array();
 choices[52][0] = "Auditor&iacute;a";
 choices[52][1] = "Confidencialidad";
 choices[52][2] = "Integridad";
 choices[52][3] = "Disponibilidad";
 answers[52] = 0;
 units[52] = ['120'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1640. ";
 preguntaids[52] = 1640


//  Id pregunta: 4867 Año de creación de pregunta: 2002
 questions[53]= "54)  La actividad conocida como spamming es:";
 choices[53]= new Array();
 choices[53][0] = "uso de una direcci&oacute;n IP falsa para suplantar identidades en Internet";
 choices[53][1] = "uso de mecanismos de proxy para ocultar identidades y direcciones en Internet";
 choices[53][2] = "uso del correo electr&oacute;nico para enviar publicidad no solicitada";
 choices[53][3] = "uso de algoritmos de rastreo en Internet para localizar bases de datos y servidores";
 answers[53] = 2;
 units[53] = ['120'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4867. ";
 preguntaids[53] = 4867


//  Id pregunta: 5338 Año de creación de pregunta: 2006
 questions[54]= "55)  M&eacute;todo seguro de autorizaci&oacute;n de acceso a un servicio en una red desarrollado en el proyecto Athena del MIT";
 choices[54]= new Array();
 choices[54][0] = "Carnivore";
 choices[54][1] = "Internet Key Exchange (IKE)";
 choices[54][2] = "Kerberos";
 choices[54][3] = "SSL";
 answers[54] = 2;
 units[54] = ['120'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5338. ";
 preguntaids[54] = 5338


//  Id pregunta: 5355 Año de creación de pregunta: 2006
 questions[55]= "56)  La pol&iacute;tica de m&iacute;nimo privilegio trata de forzar los derechos de usuario m&aacute;s restrictivos";
 choices[55]= new Array();
 choices[55][0] = "Para ejecutar procesos de sistema";
 choices[55][1] = "En su descripci&oacute;n de puesto de trabajo";
 choices[55][2] = "Para realizar tareas autorizadas";
 choices[55][3] = "En el acceso a servicios de red";
 answers[55] = 2;
 units[55] = ['120'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 5355. ";
 preguntaids[55] = 5355


//  Id pregunta: 1922 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; sentencia de las siguientes es correcta?:";
 choices[56]= new Array();
 choices[56][0] = "Con SSL las cabeceras IP y del nivel de transporte (TCP y UDP) son cifradas y por tanto no accesibles desde la red";
 choices[56][1] = "SSL utiliza &uacute;nicamente sistemas de clave p&uacute;blica para cifrar";
 choices[56][2] = "Para utilizar SSL los routers tienen que ser compatibles con SSL";
 choices[56][3] = "EI servidor en una sesi&oacute;n SSL no tiene por que estar siempre autenticado";
 answers[56] = 3;
 units[56] = ['120'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1922. ";
 preguntaids[56] = 1922


//  Id pregunta: 5356 Año de creación de pregunta: 2006
 questions[57]= "58)  &iquest;C&oacute;mo evita SSL un ataque de &quot;hombre en el medio&quot;?";
 choices[57]= new Array();
 choices[57][0] = "Usa certificados para autenticar la clave p&uacute;blica del servidor";
 choices[57][1] = "Usa un valor aleatorio &uacute;nico por conexi&oacute;n en el protocolo de intercambio de credenciales";
 choices[57][2] = "Usa claves de 128 bits";
 choices[57][3] = "Cada mensaje enviado incluye un n&uacute;mero de secuencia";
 answers[57] = 1;
 units[57] = ['120'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5356. ";
 preguntaids[57] = 5356


//  Id pregunta: 4437 Año de creación de pregunta: 2005
 questions[58]= "59)  Un ataque del tipo denegaci&oacute;n de servicio (DoS = Denial of Service) a un servidor Web afecta a:";
 choices[58]= new Array();
 choices[58][0] = "Las respuestas 'c' y 'd' son correctas";
 choices[58][1] = "La dimensi&oacute;n de autenticaci&oacute;n de los usuarios";
 choices[58][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[58][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 answers[58] = 3;
 units[58] = ['120'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4437. ";
 preguntaids[58] = 4437


//  Id pregunta: 5360 Año de creación de pregunta: 2006
 questions[59]= "60)  Un buen libro de claves podr&iacute;a ser";
 choices[59]= new Array();
 choices[59][0] = "Los n&uacute;meros primos de 128 cifras";
 choices[59][1] = "La gu&iacute;a de Paginas Blancas de Madrid 2005";
 choices[59][2] = "El CD &quot;Hung up&quot; de Madonna";
 choices[59][3] = "todas las anteriores";
 answers[59] = 3;
 units[59] = ['120'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5360. ";
 preguntaids[59] = 5360


//  Id pregunta: 5357 Año de creación de pregunta: 2006
 questions[60]= "61)  Si pido a alguien su nombre le estoy pidiendo";
 choices[60]= new Array();
 choices[60][0] = "Identificaci&oacute;n";
 choices[60][1] = "Autorizaci&oacute;n";
 choices[60][2] = "Autenticaci&oacute;n";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = 0;
 units[60] = ['120'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5357. ";
 preguntaids[60] = 5357


//  Id pregunta: 5247 Año de creación de pregunta: 2006
 questions[61]= "62)  Si tenemos un web server en la DMZ &iquest;Qu&eacute; puerto t&iacute;picamente debemos abrir en el firewall?";
 choices[61]= new Array();
 choices[61][0] = "El primer puerto libre del firewall";
 choices[61][1] = "El puerto 80";
 choices[61][2] = "El primer puerto libre desde el 80";
 choices[61][3] = "No es necesario abrir puerto alguno";
 answers[61] = 1;
 units[61] = ['120'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5247. ";
 preguntaids[61] = 5247


//  Id pregunta: 1221 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta correcta. En una comunicaci&oacute;n HTTPS, &iquest;qu&eacute; tipo de cifrado se utiliza?";
 choices[62]= new Array();
 choices[62][0] = "Sim&eacute;trico exclusivamente.";
 choices[62][1] = "Asim&eacute;trico exclusivamente.";
 choices[62][2] = "No se utiliza ning&uacute;n cifrado.";
 choices[62][3] = "Tanto el sim&eacute;trico como el asim&eacute;trico.";
 answers[62] = 3;
 units[62] = ['120'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 1221. ";
 preguntaids[62] = 1221


//  Id pregunta: 5134 Año de creación de pregunta: 2003
 questions[63]= "64)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores, normalmente entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[63]= new Array();
 choices[63][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[63][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[63][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[63][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[63] = 0;
 units[63] = ['120'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5134. Junta Andaluc&iacute;a";
 preguntaids[63] = 5134


//  Id pregunta: 6553 Año de creación de pregunta: 2003
 questions[64]= "65)  &iquest;Cual de las siguientes empresas no est&aacute; entre las que desarrollaron originalmente el protocolo WS-Security?";
 choices[64]= new Array();
 choices[64][0] = "IBM";
 choices[64][1] = "Microsoft";
 choices[64][2] = "VeriSign";
 choices[64][3] = "SUN";
 answers[64] = 3;
 units[64] = ['120'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 6553. ";
 preguntaids[64] = 6553


//  Id pregunta: 5654 Año de creación de pregunta: 2007
 questions[65]= "66)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[65]= new Array();
 choices[65][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de la red publica.";
 choices[65][1] = "Efectuar la autentificaci&oacute;n de los usuarios.";
 choices[65][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de la red publica.";
 choices[65][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[65] = 2;
 units[65] = ['119', '120'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5654. ";
 preguntaids[65] = 5654


//  Id pregunta: 7405 Año de creación de pregunta: 2010
 questions[66]= "67)  Un programa que se aloja en el ordenador y permite el acceso a usuarios externos, con el fin de obtener informaci&oacute;n o controlar la m&aacute;quina de forma remota, se denomina:";
 choices[66]= new Array();
 choices[66][0] = "Bot";
 choices[66][1] = "Virus";
 choices[66][2] = "Troyano";
 choices[66][3] = "Gusano";
 answers[66] = 2;
 units[66] = ['120'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7405. Examen TIC B 2009";
 preguntaids[66] = 7405


//  Id pregunta: 4424 Año de creación de pregunta: 2005
 questions[67]= "68)  La intrusi&oacute;n de un caballo de troya (Trojan Horse) en un ordenador puede afectar, en primer lugar a:";
 choices[67]= new Array();
 choices[67][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[67][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[67][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[67][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[67] = 0;
 units[67] = ['120'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4424. ";
 preguntaids[67] = 4424


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


//  Id pregunta: 5646 Año de creación de pregunta: 2007
 questions[69]= "70)  El protocolo SSL (Secure Sockets Layer):";
 choices[69]= new Array();
 choices[69][0] = "Es una capa de seguridad que opera siempre sobre el protocolo UDP.";
 choices[69][1] = "No garantiza la integridad de Ia informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[69][2] = "Proporciona conexiones seguras solo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[69][3] = "Proporciona conexiones seguras sobre una red insegura garantizando, entre otros aspectos, integridad de datos transmitidos, privacidad de Ia conexi&oacute;n y autentificaci&oacute;n del cliente y del servidor.";
 answers[69] = 3;
 units[69] = ['120'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5646. SSL v3 se ha declarado oficialmente obsoleto en la RFC 7568 en favor de TLS 1.2, pero se mantiene la pregunta porque podr&iacute;a esperarse alguna pregunta sobre SSL.";
 preguntaids[69] = 5646


//  Id pregunta: 5352 Año de creación de pregunta: 2006
 questions[70]= "71)  Qu&eacute; ataque es el m&aacute;s efectivo frente a una VPN IPSec";
 choices[70]= new Array();
 choices[70][0] = "Fuerza bruta";
 choices[70][1] = "Hombre en el medio";
 choices[70][2] = "An&aacute;lisis de tr&aacute;fico";
 choices[70][3] = "Replicaci&oacute;n (replay)";
 answers[70] = 1;
 units[70] = ['120'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5352. ";
 preguntaids[70] = 5352


//  Id pregunta: 6889 Año de creación de pregunta: 2010
 questions[71]= "72)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[71]= new Array();
 choices[71][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[71][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[71][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[71][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros.";
 answers[71] = 3;
 units[71] = ['120'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 6889. TIC A 2009";
 preguntaids[71] = 6889


//  Id pregunta: 5245 Año de creación de pregunta: 2006
 questions[72]= "73)  &iquest;Qu&eacute; se suele encontrar en una DMZ?";
 choices[72]= new Array();
 choices[72][0] = "un proxy de correo";
 choices[72][1] = "un cache web";
 choices[72][2] = "un server web";
 choices[72][3] = "todas las anteriores";
 answers[72] = 3;
 units[72] = ['120'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5245. ";
 preguntaids[72] = 5245


//  Id pregunta: 5358 Año de creación de pregunta: 2006
 questions[73]= "74)  Si quiero autenticar a un usuario";
 choices[73]= new Array();
 choices[73][0] = "Le pido su nombre";
 choices[73][1] = "Le pido su DNI";
 choices[73][2] = "Le pido su nombre y lo compruebo en una lista";
 choices[73][3] = "todas las anteriores";
 answers[73] = 1;
 units[73] = ['120'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5358. ";
 preguntaids[73] = 5358


//  Id pregunta: 4393 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes ataques afecta a la disponibilidad de la informaci&oacute;n?:";
 choices[74]= new Array();
 choices[74][0] = "e-mail Spamming";
 choices[74][1] = "DoS (Denial of Service)";
 choices[74][2] = "DDoS (Distributed Denial of Service)";
 choices[74][3] = "Todos los anteriores";
 answers[74] = 3;
 units[74] = ['120'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4393. ";
 preguntaids[74] = 4393


