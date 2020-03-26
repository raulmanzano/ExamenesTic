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
//  Id pregunta: 5229 Año de creación de pregunta: 2006
 questions[0]= "1)  La recomendaci&oacute;n ITU-T X-500 tambi&eacute;n se conoce como:";
 choices[0]= new Array();
 choices[0][0] = "ISO/IEC 9459";
 choices[0][1] = "ISO/IEC 9549";
 choices[0][2] = "ISO/IEC 9594";
 choices[0][3] = "ISO/IEC 9495";
 answers[0] = 2;
 units[0] = ['116'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5229. ";
 preguntaids[0] = 5229


//  Id pregunta: 7782 Año de creación de pregunta: 2010
 questions[1]= "2)  Respecto al correo electr&oacute;nico, &iquest;qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[1]= new Array();
 choices[1][0] = "IMAP es un protocolo de env&iacute;o de correo.";
 choices[1][1] = "POP es un protocolo de acceso a correo.";
 choices[1][2] = "SMTP es un protocolo de transporte de mensajes.";
 choices[1][3] = "MIME permite acentos en los mensajes de correo.";
 answers[1] = 0;
 units[1] = ['116'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7782. ";
 preguntaids[1] = 7782


//  Id pregunta: 4373 Año de creación de pregunta: 2004
 questions[2]= "3)  &iquest;Es admisible cierto grado de inconsistencia temporal en la informaci&oacute;n dado sistemas como X.500 o LDAP?";
 choices[2]= new Array();
 choices[2][0] = "S&iacute;";
 choices[2][1] = "No";
 choices[2][2] = "S&iacute;, pero s&oacute;lo para LDAP";
 choices[2][3] = "ninguna de las anteriores";
 answers[2] = 0;
 units[2] = ['116'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4373. ";
 preguntaids[2] = 4373


//  Id pregunta: 4562 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes protocolos de los est&aacute;ndares X.400 hace referencia a las comunicaciones entre agente de usuario, y es conocido como IPM (InterPersonal Messaging)?:";
 choices[3]= new Array();
 choices[3][0] = "P1";
 choices[3][1] = "P2";
 choices[3][2] = "P3";
 choices[3][3] = "P7";
 answers[3] = 1;
 units[3] = ['116'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4562. ";
 preguntaids[3] = 4562


//  Id pregunta: 5188 Año de creación de pregunta: 2003
 questions[4]= "5)  Un registro MX en un servidor DNS, &iquest; a qu&eacute; hace referencia?";
 choices[4]= new Array();
 choices[4][0] = "al servidor DNS principal";
 choices[4][1] = "al servidor web asociado al dominio";
 choices[4][2] = "al servidor de correo asociado al dominio";
 choices[4][3] = "al servidor seguro asociado al dominio";
 answers[4] = 2;
 units[4] = ['116'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5188. EXAMEN CASTILLA LA MANCHA";
 preguntaids[4] = 5188


//  Id pregunta: 907 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de registro DNS v&aacute;lido?";
 choices[5]= new Array();
 choices[5][0] = "MX";
 choices[5][1] = "SOA";
 choices[5][2] = "PTR";
 choices[5][3] = "AAA";
 answers[5] = 3;
 units[5] = ['116'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 907. AGE A2 2015";
 preguntaids[5] = 907


//  Id pregunta: 4600 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Qu&eacute; define la norma X.400?:";
 choices[6]= new Array();
 choices[6][0] = "Sistema de tratamiento de alarmas";
 choices[6][1] = "Sistema de tratamiento de mensajes";
 choices[6][2] = "Sistema de transferencia de ficheros";
 choices[6][3] = "Sistema de gesti&oacute;n de red";
 answers[6] = 1;
 units[6] = ['116'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4600. ";
 preguntaids[6] = 4600


//  Id pregunta: 5347 Año de creación de pregunta: 2006
 questions[7]= "8)  Para que se usa el comando HELO en SMTP";
 choices[7]= new Array();
 choices[7][0] = "Para autenticar los clientes SMTP";
 choices[7][1] = "Para identificar los clientes SMTP";
 choices[7][2] = "Este comando no forma parte de SMTP";
 choices[7][3] = "El comando HELO es usado en SNMP (no en SMTP)";
 answers[7] = 1;
 units[7] = ['116'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5347. ";
 preguntaids[7] = 5347


//  Id pregunta: 1917 Año de creación de pregunta: 2016
 questions[8]= "9)  En relaci&oacute;n con el protocolo SMTP, &iquest;Cu&aacute;l de las siguientes aseveraciones se cumple?:";
 choices[8]= new Array();
 choices[8][0] = "Para leer correo de entrada y componer correo de salida los usuarios utilizan clientes SMTP";
 choices[8][1] = "SMTP es un protocolo no compatible con IPv6";
 choices[8][2] = "Los anfitriones externos, servidores de correo, se ponen en contacto con los anfitriones internos, servidores de correo, a trav&eacute;s de SMTP";
 choices[8][3] = "SMTP es un protocolo de capa de nivel de sesi&oacute;n.";
 answers[8] = 2;
 units[8] = ['116'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1917. ";
 preguntaids[8] = 1917


//  Id pregunta: 6941 Año de creación de pregunta: 2010
 questions[9]= "10)  Indique, cual de entre los siguientes elementos de un sistema de correo X.400 se corresponde con un servidor de correo:";
 choices[9]= new Array();
 choices[9][0] = "UA.";
 choices[9][1] = "MTA.";
 choices[9][2] = "GW.";
 choices[9][3] = "MS.";
 answers[9] = 1;
 units[9] = ['116'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6941. ";
 preguntaids[9] = 6941


//  Id pregunta: 4408 Año de creación de pregunta: 2002
 questions[10]= "11)  Dentro de la norma X.400, &iquest; qu&eacute; se entiende por Agente de Usuario (UA)?:";
 choices[10]= new Array();
 choices[10][0] = "El usuario que puede ser una persona o programa de aplicaci&oacute;n";
 choices[10][1] = "Agente que almacena y retransmite los mensajes destinados a un usuario";
 choices[10][2] = "Agente que enruta los mensajes.";
 choices[10][3] = "Proceso de aplicaci&oacute;n que interactua con el sistema de transferencia de mensajes";
 answers[10] = 3;
 units[10] = ['116'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4408. ";
 preguntaids[10] = 4408


//  Id pregunta: 5049 Año de creación de pregunta: 2002
 questions[11]= "12)  Seg&uacute;n la norma X.400, &iquest;de cu&aacute;ntas partes consta un mensaje interpersonal (IM)?:";
 choices[11]= new Array();
 choices[11][0] = "Una";
 choices[11][1] = "Dos";
 choices[11][2] = "Tres";
 choices[11][3] = "Tantas como tipos de informaci&oacute;n contenga el mensaje";
 answers[11] = 1;
 units[11] = ['116'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5049. ";
 preguntaids[11] = 5049


//  Id pregunta: 4612 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Qu&eacute; estandariza el est&aacute;ndar MIME?:";
 choices[12]= new Array();
 choices[12][0] = "Protocolo de acceso al correo electr&oacute;nico";
 choices[12][1] = "Seguridad en Sistemas de correo electr&oacute;nico";
 choices[12][2] = "Transferencia de documentos multimedia a trav&eacute;s de correo electr&oacute;nico";
 choices[12][3] = "Agenda de direcciones de correo electr&oacute;nico";
 answers[12] = 2;
 units[12] = ['116'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4612. ";
 preguntaids[12] = 4612


//  Id pregunta: 4365 Año de creación de pregunta: 2004
 questions[13]= "14)  LDAP ( Lightweght Directory Access Protocol):";
 choices[13]= new Array();
 choices[13][0] = "Surge como evoluci&oacute;n del protocolo DAP  (Directory Access Protocol). LDAP es un protocolo a nivel de aplicaci&oacute;n, por lo que tanto el cliente como el servidor deben implementar completamente la torre de protocolos OSI";
 choices[13][1] = "Surge como alternativa al DAP y utiliza TCP/IP en lugar de los protocolos OSI, lo cu&aacute;l es una ventaja ya que TCP/IP requiere menos recursos y est&aacute; m&aacute;s disponible, especialmente en ordenadores de sobremesa.";
 choices[13][2] = "Abandona el modelo cliente/servidor de implementaci&oacute;n, de modo que una aplicaci&oacute;n que desea acceder al directorio lo hace directamente contra la base de datos cuyo esquema est&aacute; disponible (ISO 9594)";
 choices[13][3] = "Es un servicio de directorio centralizado frente a los modelos distribuidos donde los datos podr&iacute;an estar fraccionados y/o replicados. As&iacute; pues con LDAP un &uacute;nico servidor da todo el servicio de directorio respondiendo a todas las consultas de los clientes";
 answers[13] = 1;
 units[13] = ['116'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4365. ";
 preguntaids[13] = 4365


//  Id pregunta: 4674 Año de creación de pregunta: 2002
 questions[14]= "15)  Dentro de las normas X.400, &iquest;a qu&eacute; corresponde el protocolo P2?:";
 choices[14]= new Array();
 choices[14][0] = "Es el protocolo que se establece entre dos agentes de transferencia de mensajes";
 choices[14][1] = "Es el protocolo que se establece entre el agente de usuario y el agente de transferencia de mensajes";
 choices[14][2] = "Es el protocolo que se establece entre dos agentes de usuario";
 choices[14][3] = "Es el protocolo que se establece entre el agente de usuario y el almacen de mensajes";
 answers[14] = 2;
 units[14] = ['116'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4674. ";
 preguntaids[14] = 4674


//  Id pregunta: 4549 Año de creación de pregunta: 2002
 questions[15]= "16)  El est&aacute;ndar de correo electr&oacute;nico desarrollado por ITU-T dentro de OSI es:";
 choices[15]= new Array();
 choices[15][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[15][1] = "MHS - X.400 (Message Handling System)";
 choices[15][2] = "PEM (Private Enhanced Mail)";
 choices[15][3] = "MIME (Multipurpose Internet Mail Extension)";
 answers[15] = 1;
 units[15] = ['116'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4549. ";
 preguntaids[15] = 4549


//  Id pregunta: 6503 Año de creación de pregunta: 2003
 questions[16]= "17)  El protocolo SMTP es estrictamente el est&aacute;ndar";
 choices[16]= new Array();
 choices[16][0] = "STD 11 que describe el formato de los mensajes de correos";
 choices[16][1] = "El STD 10 que especifica el protocolo concreto para el enviio de correo entre dos &quot;hosts&quot; TCP/IP";
 choices[16][2] = "El STD 12 para el intercambio de correo entre dos ordenadores";
 choices[16][3] = "STD 10 para describir el procedimineto de enrutado de los mensajes que se basa en el sistema de nombres de dominio";
 answers[16] = 1;
 units[16] = ['116'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 6503. ";
 preguntaids[16] = 6503


//  Id pregunta: 5274 Año de creación de pregunta: 2006
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes puede ser una alternativa a EJB?";
 choices[17]= new Array();
 choices[17][0] = "Hibernate";
 choices[17][1] = "JDBC";
 choices[17][2] = "Ninguna de las anteriores";
 choices[17][3] = "la opci&oacute;n a) y b)";
 answers[17] = 3;
 units[17] = ['116'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5274. ";
 preguntaids[17] = 5274


//  Id pregunta: 5107 Año de creación de pregunta: 2004
 questions[18]= "19)  &iquest;Qu&eacute; es cierto respecto al protocolo POP3?";
 choices[18]= new Array();
 choices[18][0] = "Utiliza el protocolo TCP";
 choices[18][1] = "Utiliza servicios de DNS";
 choices[18][2] = "Permite eliminar los mensajes del buz&oacute;n";
 choices[18][3] = "A y C son ciertas";
 answers[18] = 3;
 units[18] = ['116'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5107. ";
 preguntaids[18] = 5107


//  Id pregunta: 5227 Año de creación de pregunta: 2006
 questions[19]= "20)  &iquest;Qu&eacute; recomendaci&oacute;n del mundo Internet define el formato de los mensajes de correo electr&oacute;nico?";
 choices[19]= new Array();
 choices[19][0] = "RFC 821";
 choices[19][1] = "RFC 820";
 choices[19][2] = "RFC 822";
 choices[19][3] = "RFC 823";
 answers[19] = 2;
 units[19] = ['116'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5227. ";
 preguntaids[19] = 5227


//  Id pregunta: 4338 Año de creación de pregunta: 2004
 questions[20]= "21)  &iquest;Cu&aacute;les de los siguientes mecanismos no sirve para garantizar la privacidad de las comunicaciones por correo electr&oacute;nico?";
 choices[20]= new Array();
 choices[20][0] = "GPG";
 choices[20][1] = "PGP";
 choices[20][2] = "S/MIME";
 choices[20][3] = "Todos los anteriores valen";
 answers[20] = 3;
 units[20] = ['116'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4338. ";
 preguntaids[20] = 4338


//  Id pregunta: 1918 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[21]= new Array();
 choices[21][0] = "POP es un protocolo de acceso a correo";
 choices[21][1] = "SMTP es un protocolo de transporte de mensajes";
 choices[21][2] = "IMAP es un protocolo de red de acceso a mensajes electr&oacute;nicos almacenados en un servidor";
 choices[21][3] = "MIME no permite acentos en los mensajes de correo";
 answers[21] = 3;
 units[21] = ['116'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1918. ";
 preguntaids[21] = 1918


//  Id pregunta: 5223 Año de creación de pregunta: 2006
 questions[22]= "23)  Con respecto al est&aacute;ndar de servicios de directorio X500 , el protocolo utilizado para intercambiar informaci&oacute;n administrativa entre dos DSA&rsquo;s (Directory Service Agent) se denomina:";
 choices[22]= new Array();
 choices[22][0] = "DMO";
 choices[22][1] = "DOP";
 choices[22][2] = "DMD";
 choices[22][3] = "DISP";
 answers[22] = 1;
 units[22] = ['116'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5223. ";
 preguntaids[22] = 5223


//  Id pregunta: 7398 Año de creación de pregunta: 2010
 questions[23]= "24)  La diferencia entre los protocolos POP  e IMAP es que:";
 choices[23]= new Array();
 choices[23][0] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de recepci&oacute;n";
 choices[23][1] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de env&iacute;o y recepci&oacute;n";
 choices[23][2] = "Uno establece una comunicaci&oacute;n bidireccional y el otro no";
 choices[23][3] = "La capa de ubicaci&oacute;n de cada uno de ellos en el modelo TCP/IP es distinta";
 answers[23] = 2;
 units[23] = ['116'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7398. Examen TIC B 2009";
 preguntaids[23] = 7398


//  Id pregunta: 5224 Año de creación de pregunta: 2006
 questions[24]= "25)  En el protocolo de correo electr&oacute;nico SMTP, el formato de las cabeceras sigue el est&aacute;ndar RFC-822. Indique cu&aacute;l es la notaci&oacute;n empleada en la escritura de las cabeceras de acuerdo con dicho est&aacute;ndar RFC-822:";
 choices[24]= new Array();
 choices[24][0] = "ASCII";
 choices[24][1] = "ASN.1";
 choices[24][2] = "Base 64";
 choices[24][3] = "BNF";
 answers[24] = 3;
 units[24] = ['116'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5224. ";
 preguntaids[24] = 5224


//  Id pregunta: 4848 Año de creación de pregunta: 2002
 questions[25]= "26)  En un mensaje de correo electr&oacute;nico cifrado, seg&uacute;n el protocolo S-MIME,  se reciben cifrados:";
 choices[25]= new Array();
 choices[25][0] = "La direcci&oacute;n de correo electr&oacute;nico del destinatario y la direcci&oacute;n de correo electr&oacute;nico del remitente";
 choices[25][1] = "El cuerpo del mensaje y sus archivos adjuntos";
 choices[25][2] = "La &quot;traza&quot; del mensaje (servidores SMTP por los que ha sido encaminado)";
 choices[25][3] = "El asunto del mensaje, el tipo de contenido y la fecha";
 answers[25] = 1;
 units[25] = ['116'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4848. ";
 preguntaids[25] = 4848


//  Id pregunta: 7397 Año de creación de pregunta: 2010
 questions[26]= "27)  En un servidor DNS, un registro MX hace referencia a:";
 choices[26]= new Array();
 choices[26][0] = "Un servidor web";
 choices[26][1] = "Un servidor de correo";
 choices[26][2] = "Un servidor seguro";
 choices[26][3] = "El servidor DNS principal";
 answers[26] = 1;
 units[26] = ['116'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 7397. Examen TIC B 2009";
 preguntaids[26] = 7397


//  Id pregunta: 4310 Año de creación de pregunta: 2004
 questions[27]= "28)  &iquest;Qu&eacute; protocolo de correo permite acceder al correo electr&oacute;nico, manteniendo los mensajes en el servidor, de forma que pueda accederse al correo desde distintos terminales?";
 choices[27]= new Array();
 choices[27][0] = "POP-3";
 choices[27][1] = "SMTP";
 choices[27][2] = "IMAP";
 choices[27][3] = "MIME";
 answers[27] = 2;
 units[27] = ['116'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4310. Similar a examen TIC MAP A 2004";
 preguntaids[27] = 4310


//  Id pregunta: 2667 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Qu&eacute; define la norma X.500?:";
 choices[28]= new Array();
 choices[28][0] = "Servicio de directorio";
 choices[28][1] = "Sistema de tratamiento de mensajes";
 choices[28][2] = "Servicio de transferencia de ficheros";
 choices[28][3] = "Sistema de gesti&oacute;n de red";
 answers[28] = 0;
 units[28] = ['116'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 2667. ";
 preguntaids[28] = 2667


//  Id pregunta: 6058 Año de creación de pregunta: 2003
 questions[29]= "30)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con SMTP (Simple Mail Transfer Protocol), definido en la RFC821:";
 choices[29]= new Array();
 choices[29][0] = "Puede transmitir ficheros ejecutables y objetos binarios en general.";
 choices[29][1] = "Se crea para superar las deficiencias de MIME (Multipurpose Internet Mail Extensi&oacute;n).";
 choices[29][2] = "Se limita a caracteres ASCII de 7 bits.";
 choices[29][3] = "Es un protocolo de nivel de Presentaci&oacute;n del modelo OSI.";
 answers[29] = 2;
 units[29] = ['116'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 6058. TIC B 2007";
 preguntaids[29] = 6058


//  Id pregunta: 5225 Año de creación de pregunta: 2006
 questions[30]= "31)  &iquest;En qu&eacute; RFC se encuentra definido el protocolo SMTP (&quot;Simple Mail Transfer Protocol&quot;)?";
 choices[30]= new Array();
 choices[30][0] = "RFC 821";
 choices[30][1] = "RFC 820";
 choices[30][2] = "RFC 823";
 choices[30][3] = "RFC 822";
 answers[30] = 0;
 units[30] = ['116'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5225. ";
 preguntaids[30] = 5225


//  Id pregunta: 4342 Año de creación de pregunta: 2004
 questions[31]= "32)  X.500 se constituye como un estandar de servicios de directorio electr&oacute;nico con caracter&iacute;sticas de:";
 choices[31]= new Array();
 choices[31][0] = "Actualizaci&oacute;n";
 choices[31][1] = "Acceso y actualizaci&oacute;n";
 choices[31][2] = "Modificaci&oacute;n";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 1;
 units[31] = ['116'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4342. Examen Julio 2003";
 preguntaids[31] = 4342


//  Id pregunta: 5331 Año de creación de pregunta: 2006
 questions[32]= "33)  La principal diferencia entre S/MIME y PGP es";
 choices[32]= new Array();
 choices[32][0] = "PGP es software libre";
 choices[32][1] = "S/MIME requiere SSL";
 choices[32][2] = "PGP no se puede usar en un servicio de env&iacute;o de correo SMTP";
 choices[32][3] = "S/MIME requiere certificados digitales";
 answers[32] = 3;
 units[32] = ['116'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5331. ";
 preguntaids[32] = 5331


//  Id pregunta: 6340 Año de creación de pregunta: 2003
 questions[33]= "34)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ...";
 choices[33]= new Array();
 choices[33][0] = "el servidor tiene un built-in de JVM.";
 choices[33][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente.";
 choices[33][2] = "el navegador tiene un built-in de JVM.";
 choices[33][3] = "los applets no necesitan una JVM.";
 answers[33] = 2;
 units[33] = ['116'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 6340. ";
 preguntaids[33] = 6340


//  Id pregunta: 5110 Año de creación de pregunta: 2004
 questions[34]= "35)  El protocolo SMTP";
 choices[34]= new Array();
 choices[34][0] = "Define el formato de los mensajes";
 choices[34][1] = "Define la transferencia de mensajes";
 choices[34][2] = "Pone limitaciones al formato del mensaje";
 choices[34][3] = "b y c son ciertas";
 answers[34] = 3;
 units[34] = ['116'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5110. ";
 preguntaids[34] = 5110


//  Id pregunta: 909 Año de creación de pregunta: 2016
 questions[35]= "36)  El conjunto de protocolos est&aacute;ndares adoptados por el Internet Architecture Board (IAB), para proporcionar seguridad al correo electr&oacute;nico sobre Internet se denomina:";
 choices[35]= new Array();
 choices[35][0] = "PEM";
 choices[35][1] = "CMS";
 choices[35][2] = "PGP";
 choices[35][3] = "S/MIME";
 answers[35] = 0;
 units[35] = ['116'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 909. AGE A2 2015";
 preguntaids[35] = 909


//  Id pregunta: 4489 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto del correo electr&oacute;nico?:";
 choices[36]= new Array();
 choices[36][0] = "Seg&uacute;n MIME los textos se codifican en 7 bits";
 choices[36][1] = "MIME puede encapsular datos EDI";
 choices[36][2] = "SMTP no soporta servicios de seguridad";
 choices[36][3] = "MIME proporciona seguridad";
 answers[36] = 3;
 units[36] = ['116'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4489. ";
 preguntaids[36] = 4489


//  Id pregunta: 7937 Año de creación de pregunta: 2011
 questions[37]= "38)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[37]= new Array();
 choices[37][0] = "No admite TCP/IP.";
 choices[37][1] = "No es un protocolo abierto.";
 choices[37][2] = "No requiere X.500.";
 choices[37][3] = "Ninguna de las anteriores es correcta.";
 answers[37] = 2;
 units[37] = ['116'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7937. Examen TIC A2 2010";
 preguntaids[37] = 7937


//  Id pregunta: 4442 Año de creación de pregunta: 2002
 questions[38]= "39)  Correo electr&oacute;nico, compartici&oacute;n de documentos FTP y/o WWW, directorio, agenda, listas de tareas&hellip; Todos ellos son:";
 choices[38]= new Array();
 choices[38][0] = "herramientas groupware s&iacute;ncronas";
 choices[38][1] = "protocolos y aplicaciones TCP/IP";
 choices[38][2] = "herramientas groupware as&iacute;ncronas";
 choices[38][3] = "aplicaciones ofim&aacute;ticas instaladas por defecto en cualquier PDA";
 answers[38] = 2;
 units[38] = ['116'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4442. ";
 preguntaids[38] = 4442


//  Id pregunta: 6362 Año de creación de pregunta: 2003
 questions[39]= "40)  La API JDBC se utiliza:";
 choices[39]= new Array();
 choices[39][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n se pueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones que soporta un SGBD relacional";
 choices[39][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional.";
 choices[39][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas a procedimientos almacenados no est&aacute;n soportados.";
 choices[39][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas de las funciones que soporta un SGBD relacional.";
 answers[39] = 0;
 units[39] = ['116'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 6362. Examen 2006 JCYL";
 preguntaids[39] = 6362


//  Id pregunta: 5007 Año de creación de pregunta: 2002
 questions[40]= "41)  MIME responde por:";
 choices[40]= new Array();
 choices[40][0] = "Multimedia Internet Mail Extensions";
 choices[40][1] = "Multimedia Information Mail Extensions";
 choices[40][2] = "Multipurpose Internet Mail Extensions";
 choices[40][3] = "Multipurpose Information Mail Extensions";
 answers[40] = 2;
 units[40] = ['116'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5007. ";
 preguntaids[40] = 5007


//  Id pregunta: 6502 Año de creación de pregunta: 2003
 questions[41]= "42)  Los mensajes MPDU en X.400 puedes ser:";
 choices[41]= new Array();
 choices[41][0] = "Sondas, Informes y los propios mensajes";
 choices[41][1] = "Sondas, Notificaciones, mensajes de control y el propio mensaje";
 choices[41][2] = "Notificaciones, Informes de entrega y los propios mensajes";
 choices[41][3] = "Solo los propios mensajes denominados IPM";
 answers[41] = 0;
 units[41] = ['116'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6502. ";
 preguntaids[41] = 6502


//  Id pregunta: 6342 Año de creación de pregunta: 2003
 questions[42]= "43)  Indique cu&aacute;l de las siguientes opciones no se relaciona con un desarrollo JAVA:";
 choices[42]= new Array();
 choices[42][0] = "Hibernate";
 choices[42][1] = "Biztalk";
 choices[42][2] = "Java Server Faces";
 choices[42][3] = "Spring";
 answers[42] = 1;
 units[42] = ['116'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 6342. ";
 preguntaids[42] = 6342


//  Id pregunta: 6660 Año de creación de pregunta: 2009
 questions[43]= "44)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &quot; Domain Name System&quot;):";
 choices[43]= new Array();
 choices[43][0] = "HINFO &quot;Host Information&quot;";
 choices[43][1] = "SOA &quot; Start Of Authority&quot;";
 choices[43][2] = "TTL &quot;Time-To- Live&quot;";
 choices[43][3] = "WKS &quot;Well-Now-Services&quot;";
 answers[43] = 2;
 units[43] = ['116'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 6660. MAP 2008 A1";
 preguntaids[43] = 6660


//  Id pregunta: 6504 Año de creación de pregunta: 2003
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes conceptos se definen en X.500?";
 choices[44]= new Array();
 choices[44][0] = "DIB, que se comunica con el DSA utilizando el protocolo DAP. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. DMO que gestiona un dominio DMD";
 choices[44][1] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DIT, donde se almacena la informaci&oacute;n en un directorio X.500. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's.";
 choices[44][2] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DAP, que es el protocolo utilizado por un DUA para comunicarse con un DSA. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's.";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = 2;
 units[44] = ['116'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6504. ";
 preguntaids[44] = 6504


//  Id pregunta: 7204 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Qu&eacute; comandos se usan en POP3 para descargarse y borrar los dos primeros mensajes del buz&oacute;n de correo?";
 choices[45]= new Array();
 choices[45][0] = "RETR 1 DELE 1 RETR 2 DELE 2";
 choices[45][1] = "RETE 1,2 DELE 1,2";
 choices[45][2] = "RETR 1-2 DELE 1-2";
 choices[45][3] = "RETR 1 RETR 2";
 answers[45] = 0;
 units[45] = ['116'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 7204. Castilla La Mancha 2009";
 preguntaids[45] = 7204


//  Id pregunta: 6940 Año de creación de pregunta: 2010
 questions[46]= "47)  Indique la afirmaci&oacute;n falsa sobre los sistemas de correo electr&oacute;nico SMTP:";
 choices[46]= new Array();
 choices[46][0] = "Es posible establecer DNS blacklist y whitelist en el cliente de correo y/o en el servidor.";
 choices[46][1] = "SMTP permite enviar mensajes codificados seg&uacute;n ASCII de 7 bits y longitud m&aacute;xima de 1000 caracteres.";
 choices[46][2] = "La cabecera MIME-Version debe contener el valor 2.0";
 choices[46][3] = "La cabecera de un mensaje de correo SMTP se especifica en la RFC 822.";
 answers[46] = 2;
 units[46] = ['116'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 6940. ";
 preguntaids[46] = 6940


//  Id pregunta: 4417 Año de creación de pregunta: 2002
 questions[47]= "48)  Indique la afirmaci&oacute;n incorrecta respecto al correo electr&oacute;nico:";
 choices[47]= new Array();
 choices[47][0] = "Los mensajes se pueden recibir aunque el equipo est&eacute; desconectado";
 choices[47][1] = "No es necesaria la conexi&oacute;n directa emisor-receptor";
 choices[47][2] = "No permite enviar fax";
 choices[47][3] = "Todos los sistemas de correo electr&oacute;nico que cumplan las recomendaciones X.400 de la ITU-T pueden interconectarse a trav&eacute;s de la mensajer&iacute;a p&uacute;blica";
 answers[47] = 2;
 units[47] = ['116'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4417. ";
 preguntaids[47] = 4417


//  Id pregunta: 5222 Año de creación de pregunta: 2006
 questions[48]= "49)  En el est&aacute;ndar de mensajer&iacute;a X400, el protocolo utilizado para la comunicaci&oacute;n entre el agente de transferencia de mensajes (MTA) y el agente de usuario (UA) se denomina:";
 choices[48]= new Array();
 choices[48][0] = "P1";
 choices[48][1] = "P2";
 choices[48][2] = "P3";
 choices[48][3] = "P7";
 answers[48] = 2;
 units[48] = ['116'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5222. ";
 preguntaids[48] = 5222


//  Id pregunta: 4364 Año de creación de pregunta: 2004
 questions[49]= "50)  En 1988, la CCITT cre&oacute; el est&aacute;ndar X.500, sobre servicios de directorio que, posteriormente, fue adoptado por la ISO. El est&aacute;ndar X.500 organiza las entradas en el directorio de manera:";
 choices[49]= new Array();
 choices[49][0] = "Asociativa";
 choices[49][1] = "Jer&aacute;rquica";
 choices[49][2] = "En estrella";
 choices[49][3] = "Como una pila FIFO";
 answers[49] = 1;
 units[49] = ['116'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4364. ";
 preguntaids[49] = 4364


//  Id pregunta: 4556 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no pertenece al  est&aacute;ndar de correo electr&oacute;nico X.400?:";
 choices[50]= new Array();
 choices[50][0] = "Agente de usuario";
 choices[50][1] = "Agente de transferencia de mensajes";
 choices[50][2] = "Agente de usuario remoto";
 choices[50][3] = "Agente de correo extendido";
 answers[50] = 3;
 units[50] = ['116'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4556. ";
 preguntaids[50] = 4556


//  Id pregunta: 5320 Año de creación de pregunta: 2006
 questions[51]= "52)  Servicio de directorio y registro de nombres basado en Java";
 choices[51]= new Array();
 choices[51][0] = "JNDI";
 choices[51][1] = "UDDI";
 choices[51][2] = "JINI";
 choices[51][3] = "LDAP";
 answers[51] = 0;
 units[51] = ['116'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5320. ";
 preguntaids[51] = 5320


//  Id pregunta: 5052 Año de creación de pregunta: 2002
 questions[52]= "53)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[52]= new Array();
 choices[52][0] = "sobre, cabeceras y cuerpo";
 choices[52][1] = "cabeceras, cuerpo y cola";
 choices[52][2] = "sobre, cabeceras, cuerpo y cola";
 choices[52][3] = "cabeceras y cuerpo";
 answers[52] = 0;
 units[52] = ['116'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5052. ";
 preguntaids[52] = 5052


//  Id pregunta: 7842 Año de creación de pregunta: 2011
 questions[53]= "54)  En el marco de los servicios de Directorio, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[53]= new Array();
 choices[53][0] = "El est&aacute;ndar X.500 define cuatro clases de objetos que pueden ser representados en el directorio y que se codifican utilizando la notaci&oacute;n ASN.1.";
 choices[53][1] = "El protocolo LDAP, para el acceso a directorios X.500, es una evoluci&oacute;n de DAP, que soporta OSI y TCP/IP.";
 choices[53][2] = "En su versi&oacute;n 2, LDAP incorpora la posibilidad de acceso an&oacute;nimo y la de acceso cifrado.";
 choices[53][3] = "La operaci&oacute;n de a&ntilde;adir una entrada a un directorio, s&oacute;lo requiere que el nombre distinguido (DN) de la entrada a a&ntilde;adir,no exista previamente en &eacute;l.";
 answers[53] = 0;
 units[53] = ['116'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7842. Examen TIC A1 2010";
 preguntaids[53] = 7842


//  Id pregunta: 4900 Año de creación de pregunta: 2002
 questions[54]= "55)  La norma X400 de la ITU-T se refiere a:";
 choices[54]= new Array();
 choices[54][0] = "Servicios de directorio";
 choices[54][1] = "Correo electr&oacute;nico";
 choices[54][2] = "Interfaz RS-232";
 choices[54][3] = "Interfaz de comunicaci&oacute;n de paquetes";
 answers[54] = 1;
 units[54] = ['116'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4900. ";
 preguntaids[54] = 4900


//  Id pregunta: 4450 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar IMAP-4?:";
 choices[55]= new Array();
 choices[55][0] = "Correo electr&oacute;nico";
 choices[55][1] = "Compresi&oacute;n de datos";
 choices[55][2] = "Directorio electr&oacute;nico";
 choices[55][3] = "Protocolo de transporte OSI";
 answers[55] = 0;
 units[55] = ['116'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4450. ";
 preguntaids[55] = 4450


//  Id pregunta: 5105 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes series no es congruente?:";
 choices[56]= new Array();
 choices[56][0] = "http, https.";
 choices[56][1] = "smtp, pop-3, mime.";
 choices[56][2] = "xml, xsl, xjar.";
 choices[56][3] = "direcci&oacute;n IP, m&aacute;scara, dominio.";
 answers[56] = 2;
 units[56] = ['116'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5105. Junta Andaluc&iacute;a";
 preguntaids[56] = 5105


//  Id pregunta: 5226 Año de creación de pregunta: 2006
 questions[57]= "58)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar TCP que usa el protocolo IMAP (&quot;Interactive Mail Access Protocol&quot;)?";
 choices[57]= new Array();
 choices[57][0] = "110";
 choices[57][1] = "25";
 choices[57][2] = "143";
 choices[57][3] = "21";
 answers[57] = 2;
 units[57] = ['116'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5226. ";
 preguntaids[57] = 5226


//  Id pregunta: 4427 Año de creación de pregunta: 2002
 questions[58]= "59)  Las siglas ADMD y PRMD se usan dentro la norma X.400 refiri&eacute;ndose a:";
 choices[58]= new Array();
 choices[58][0] = "Estas siglas no se usan en dicha norma";
 choices[58][1] = "Dominios p&uacute;blicos o privados";
 choices[58][2] = "Administraci&oacute;n y privacidad de los datos";
 choices[58][3] = "Ninguna de las respuestas anteriores";
 answers[58] = 1;
 units[58] = ['116'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4427. ";
 preguntaids[58] = 4427


//  Id pregunta: 908 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con el n&uacute;mero de puerto tcp 'bien conocido' para poder usar servicio de correo saliente POP3 sobre SSL (pop3s)?";
 choices[59]= new Array();
 choices[59][0] = "295";
 choices[59][1] = "995";
 choices[59][2] = "445";
 choices[59][3] = "725";
 answers[59] = 1;
 units[59] = ['116'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 908. AGE A2 2015";
 preguntaids[59] = 908


//  Id pregunta: 2640 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Cu&aacute;l es el sistema de mensajer&iacute;a t&iacute;pico de los sistemas Unix?:";
 choices[60]= new Array();
 choices[60][0] = "Exchange";
 choices[60][1] = "Sendmail";
 choices[60][2] = "Memo";
 choices[60][3] = "Groupwise";
 answers[60] = 1;
 units[60] = ['57', '116'];
 blocks[60] = ['B2', 'B4'];
 comments[60] = "Id Pregunta: 2640. ";
 preguntaids[60] = 2640


//  Id pregunta: 5187 Año de creación de pregunta: 2003
 questions[61]= "62)  Un &quot;proxy&quot; o apoderado de HTTP empleado para la conexi&oacute;n de usuarios de una organizaci&oacute;n a Internet:";
 choices[61]= new Array();
 choices[61][0] = "S&oacute;lo permite controlar qui&eacute;nes pueden acceder y a qu&eacute; servidores";
 choices[61][1] = "Es un elemento de seguridad";
 choices[61][2] = "Esencialmente sirve para mejorar los tiempos de acceso a Internet";
 choices[61][3] = "No es &uacute;til si ya se tiene un filtro de paquetes en el acceso a Internet";
 answers[61] = 1;
 units[61] = ['116'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5187. ";
 preguntaids[61] = 5187


//  Id pregunta: 4396 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes protocolos de internet relacionados con el correo electr&oacute;nico permite descargar selectivamente los mensajes de entrada del servidor de correo?:";
 choices[62]= new Array();
 choices[62][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[62][1] = "POP3 (Post Office Protocol versi&oacute;n 3)";
 choices[62][2] = "IMAP4 (Internet Message Access Protocol versi&oacute;n 4)";
 choices[62][3] = "S/MIME (Secure Multipurpose Internet Mail Extensions)";
 answers[62] = 2;
 units[62] = ['116'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4396. ";
 preguntaids[62] = 4396


//  Id pregunta: 5228 Año de creación de pregunta: 2006
 questions[63]= "64)  Indique la afirmaci&oacute;n correcta sobre los servicios de directorio:";
 choices[63]= new Array();
 choices[63][0] = "X.500 y LDAP codifican la informaci&oacute;n en ASN.1";
 choices[63][1] = "X.500 codifica la informaci&oacute;n en ASN.1 mientras que LDAP usa cadenas de caracteres";
 choices[63][2] = "LDAP codifica la informaci&oacute;n en ASN.1 mientras X.500 usa cadenas de caracteres";
 choices[63][3] = "X.500 y LDAP usan cadenas de caracteres para codificar la informaci&oacute;n";
 answers[63] = 1;
 units[63] = ['116'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5228. ";
 preguntaids[63] = 5228


//  Id pregunta: 4757 Año de creación de pregunta: 2002
 questions[64]= "65)  El puerto com&uacute;nmente utilizado para aplicaciones de correo electr&oacute;nico es (SMTP) el:";
 choices[64]= new Array();
 choices[64][0] = "80";
 choices[64][1] = "25";
 choices[64][2] = "53";
 choices[64][3] = "21";
 answers[64] = 1;
 units[64] = ['116'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4757. ";
 preguntaids[64] = 4757


//  Id pregunta: 4646 Año de creación de pregunta: 2002
 questions[65]= "66)  Bajo el protocolo PEM:";
 choices[65]= new Array();
 choices[65][0] = "Se distinguen 3 tipos de mensajes";
 choices[65][1] = "Un mensaje MIC-CLEAR soporta confidencialidad";
 choices[65][2] = "Un mensaje MIC-Only solo envia la cabecera";
 choices[65][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[65] = 0;
 units[65] = ['116'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4646. ";
 preguntaids[65] = 4646


//  Id pregunta: 4563 Año de creación de pregunta: 2002
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes protocolos de servicios de Internet corresponde al que se encarga de recoger el correo del buz&oacute;n de usuario de la m&aacute;quina servidora y lo trae a un directorio del disco duro del PC del usuario?:";
 choices[66]= new Array();
 choices[66][0] = "POP3";
 choices[66][1] = "SMTP";
 choices[66][2] = "X.400";
 choices[66][3] = "MIME";
 answers[66] = 0;
 units[66] = ['116'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4563. ";
 preguntaids[66] = 4563


//  Id pregunta: 5028 Año de creación de pregunta: 2002
 questions[67]= "68)  POP e IMAP son:";
 choices[67]= new Array();
 choices[67][0] = "protocolos de entrega de correo para servidores";
 choices[67][1] = "protocolos de acceso al correo para clientes";
 choices[67][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[67][3] = "las respuestas a) y b) son correctas";
 answers[67] = 1;
 units[67] = ['116'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5028. ";
 preguntaids[67] = 5028


//  Id pregunta: 5376 Año de creación de pregunta: 2006
 questions[68]= "69)  Pueden encontrarse registros SOA, NS, CNAME, MX, etc. en el contexto de";
 choices[68]= new Array();
 choices[68][0] = "Un Servicio Web";
 choices[68][1] = "Una Arquitectura Orientada a Servicios (SOA)";
 choices[68][2] = "Un servidor DNS";
 choices[68][3] = "Unos identificadores XML de un servicio RSS";
 answers[68] = 2;
 units[68] = ['116'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5376. ";
 preguntaids[68] = 5376


//  Id pregunta: 4761 Año de creación de pregunta: 2002
 questions[69]= "70)  El servicio de directorio definido por la ITU-T:";
 choices[69]= new Array();
 choices[69][0] = "Se incluye en casi todos los sistemas de correo electr&oacute;nico para consultar las direcciones de los usuarios existentes en la red";
 choices[69][1] = "Se especifica en el est&aacute;ndar X.600 del ITU";
 choices[69][2] = "Es soportado por un sistema de ficheros en red";
 choices[69][3] = "Se ha definido como un conjunto de modelos, servicios y protocolos accesibles a nivel mundial en forma independiente de la aplicaci&oacute;n";
 answers[69] = 3;
 units[69] = ['116'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4761. ";
 preguntaids[69] = 4761


//  Id pregunta: 6345 Año de creación de pregunta: 2003
 questions[70]= "71)  Indique cu&aacute;l de las siguientes tecnolog&iacute;as JAVA puede utilizarse para invocar dentro de una aplicaci&oacute;n a un parser DOM:";
 choices[70]= new Array();
 choices[70][0] = "JAX-RPC";
 choices[70][1] = "SAAJ";
 choices[70][2] = "JAXR";
 choices[70][3] = "JAXP";
 answers[70] = 3;
 units[70] = ['116'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 6345. ";
 preguntaids[70] = 6345


//  Id pregunta: 3073 Año de creación de pregunta: 2002
 questions[71]= "72)  Un servicio de directorio:";
 choices[71]= new Array();
 choices[71][0] = "Es una base de datos, orientada a consulta, con replicaci&oacute;n, y estructura jer&aacute;rquica";
 choices[71][1] = "Puede ser utilizado como un repositorio para guardar la informaci&oacute;n de los usuarios";
 choices[71][2] = "Puede ser utilizado como medio de autenticaci&oacute;n en sistemas heterogeneos";
 choices[71][3] = "Todas las respuestas anteriores son ciertas";
 answers[71] = 3;
 units[71] = ['116'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 3073. ";
 preguntaids[71] = 3073


//  Id pregunta: 4487 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de la seguridad en el correo electr&oacute;nico?:";
 choices[72]= new Array();
 choices[72][0] = "Los usuarios MOSS y PEM necesitan certificados X.509";
 choices[72][1] = "PEM requiere que primero se firme el contenido del correo electr&oacute;nico y, a continuaci&oacute;n, se encripte";
 choices[72][2] = "PEM restringe su uso al entorno texto";
 choices[72][3] = "La extension de PEM con MIME se denomina MOSS";
 answers[72] = 0;
 units[72] = ['116'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4487. ";
 preguntaids[72] = 4487


//  Id pregunta: 4861 Año de creación de pregunta: 2002
 questions[73]= "74)  En X.400, &iquest;cu&aacute;les son las partes que definen un dominio de gesti&oacute;n?:";
 choices[73]= new Array();
 choices[73][0] = "Un PRMD y un IPM";
 choices[73][1] = "Un AU y un ADMD";
 choices[73][2] = "Un MTA y opcionalmente UA's, MS's y AU's";
 choices[73][3] = "Un AU y un PRMD";
 answers[73] = 1;
 units[73] = ['116'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4861. ";
 preguntaids[73] = 4861


//  Id pregunta: 6687 Año de creación de pregunta: 2009
 questions[74]= "75)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[74]= new Array();
 choices[74][0] = "IMAP es un protocolo de env&iacute;o de correo";
 choices[74][1] = "POP es un protocolo de acceso a correo";
 choices[74][2] = "SMTP es un protocolo de transporte de mensajes";
 choices[74][3] = "MIME permite acentos en los mensajes de correo";
 answers[74] = 0;
 units[74] = ['116'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 6687. ";
 preguntaids[74] = 6687


