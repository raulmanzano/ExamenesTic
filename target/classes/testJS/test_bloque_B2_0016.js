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
//  Id pregunta: 3168 Año de creación de pregunta: 2002
 questions[0]= "1)  La aplicaci&oacute;n que permite conocer si un sistema est&aacute; accesible es:";
 choices[0]= new Array();
 choices[0][0] = "traceroute";
 choices[0][1] = "ping";
 choices[0][2] = "wake";
 choices[0][3] = "setup";
 answers[0] = 1;
 units[0] = ['56'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3168. ";
 preguntaids[0] = 3168


//  Id pregunta: 3188 Año de creación de pregunta: 2003
 questions[1]= "2)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[1]= new Array();
 choices[1][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[1][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[1][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[1][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[1] = 3;
 units[1] = ['61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3188. Junta Andaluc&iacute;a";
 preguntaids[1] = 3188


//  Id pregunta: 3199 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest; Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux ?";
 choices[2]= new Array();
 choices[2][0] = "Debian";
 choices[2][1] = "Gentoo";
 choices[2][2] = "Max";
 choices[2][3] = "FreeBSD";
 answers[2] = 3;
 units[2] = ['66'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3199. ";
 preguntaids[2] = 3199


//  Id pregunta: 3180 Año de creación de pregunta: 2002
 questions[3]= "4)  Respecto al funcionamiento de USB, es falso que:";
 choices[3]= new Array();
 choices[3][0] = "no necesita drivers espec&iacute;ficos para configurar los dispositivos a &eacute;l conectados";
 choices[3][1] = "el ordenador identifica autom&aacute;ticamente el dispositivo que se conecta mientras opera &quot;en caliente&quot;";
 choices[3][2] = "La informaci&oacute;n se transmite de forma no balanceada, con la informaci&oacute;n y el control de sincronizaci&oacute;n en se&ntilde;ales separadas";
 choices[3][3] = "USB 1.1 puede funcionar a 1.5 Mbps y 12 Mbps, y USB 2.0, a 480 Mbps";
 answers[3] = 2;
 units[3] = ['52'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3180. ";
 preguntaids[3] = 3180


//  Id pregunta: 3184 Año de creación de pregunta: 2003
 questions[4]= "5)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[4]= new Array();
 choices[4][0] = "Formato de certificado digital";
 choices[4][1] = "Formato de sobre digital";
 choices[4][2] = "Cifrado con clave privada";
 choices[4][3] = "Sintaxis de la clave privada";
 answers[4] = 1;
 units[4] = ['78'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3184. ";
 preguntaids[4] = 3184


//  Id pregunta: 3221 Año de creación de pregunta: 2003
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes operaciones l&oacute;gicas es incorrecta?:";
 choices[5]= new Array();
 choices[5][0] = "complementario de (A+B) = complementario (A) . complementario (B)";
 choices[5][1] = "complementario de (A.B) = complementario (A) + complementario (B)";
 choices[5][2] = "complementario de (A . A) = complementario (A)";
 choices[5][3] = "doble complementario (A) = A";
 answers[5] = 2;
 units[5] = ['52'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3221. Junta Andaluc&iacute;a";
 preguntaids[5] = 3221


//  Id pregunta: 3223 Año de creación de pregunta: 2003
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes algoritmos no es de criptograf&iacute;a sim&eacute;trica de flujos?";
 choices[6]= new Array();
 choices[6][0] = "WAKE";
 choices[6][1] = "RC-4";
 choices[6][2] = "SEAL";
 choices[6][3] = "MD5";
 answers[6] = 3;
 units[6] = ['76'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3223. ";
 preguntaids[6] = 3223


//  Id pregunta: 3202 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest; Cu&aacute;l de los siguientes t&eacute;rminos no est&aacute; relacionado con un directorio LDAP ?";
 choices[7]= new Array();
 choices[7][0] = "DIT";
 choices[7][1] = "WMI";
 choices[7][2] = "DN";
 choices[7][3] = "RDN";
 answers[7] = 1;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3202. ";
 preguntaids[7] = 3202


//  Id pregunta: 3220 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica utilizada para el c&aacute;lculo de una funci&oacute;n de correspondencia que asigna a los bloques de la memoria principal posiciones definidas en la memoria cach&eacute;?:";
 choices[8]= new Array();
 choices[8][0] = "Directa.";
 choices[8][1] = "Totalmente asociativa.";
 choices[8][2] = "Asociativa por conjuntos.";
 choices[8][3] = "Suprayectiva.";
 answers[8] = 3;
 units[8] = ['56'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3220. Junta Andaluc&iacute;a";
 preguntaids[8] = 3220


//  Id pregunta: 3228 Año de creación de pregunta: 2003
 questions[9]= "10)  &iquest;Cu&aacute;l de los soportes que se indican a continuaci&oacute;n tiene una capacidad m&aacute;xima de 18 gigaoctetos en 2 capas y 2 caras?:";
 choices[9]= new Array();
 choices[9][0] = "DVD-R.";
 choices[9][1] = "DVD+R.";
 choices[9][2] = "DVD-ROM.";
 choices[9][3] = "DVD-RAM.";
 answers[9] = 2;
 units[9] = ['53'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3228. Junta Andaluc&iacute;a";
 preguntaids[9] = 3228


//  Id pregunta: 3231 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;Cu&aacute;l no es una caracter&iacute;stica esencial del Datawarehouse?";
 choices[10]= new Array();
 choices[10][0] = "Orientado por temas";
 choices[10][1] = "Independiente del tiempo";
 choices[10][2] = "No vol&aacute;til";
 choices[10][3] = "Integrado";
 answers[10] = 1;
 units[10] = ['72'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3231. ";
 preguntaids[10] = 3231


//  Id pregunta: 3219 Año de creación de pregunta: 2003
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes no es una propiedad que debe cumplir una funci&oacute;n resumen (hash) ?";
 choices[11]= new Array();
 choices[11][0] = "Resistencia a la preimagen";
 choices[11][1] = "Resistencia a la colisi&oacute;n Fuerte";
 choices[11][2] = "Resistencia a la colisi&oacute;n Suave";
 choices[11][3] = "Resistencia a la no colisi&oacute;n";
 answers[11] = 3;
 units[11] = ['76'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3219. ";
 preguntaids[11] = 3219


//  Id pregunta: 3181 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Qu&eacute; tecnolog&iacute;a sustituy&oacute; a DES tras su ruptura?";
 choices[12]= new Array();
 choices[12][0] = "Rijndael";
 choices[12][1] = "RC-4";
 choices[12][2] = "MD5";
 choices[12][3] = "SEAL";
 answers[12] = 0;
 units[12] = ['76'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3181. ";
 preguntaids[12] = 3181


//  Id pregunta: 3189 Año de creación de pregunta: 2003
 questions[13]= "14)  C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU";
 choices[13]= new Array();
 choices[13][0] = "MPL";
 choices[13][1] = "BSD";
 choices[13][2] = "GPL";
 choices[13][3] = "PPL";
 answers[13] = 2;
 units[13] = ['66'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3189. EXAMEN CASTILLA LA MANCHA";
 preguntaids[13] = 3189


//  Id pregunta: 3173 Año de creación de pregunta: 2002
 questions[14]= "15)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID-3 se caracterizan por:";
 choices[14]= new Array();
 choices[14][0] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad en un disco dedicado";
 choices[14][1] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad distribuido";
 choices[14][2] = "Garantizar la disponibilidad de los datos mediante la redundancia completa en discos espejo";
 choices[14][3] = "Garantizar la disponibilidad de los datos mediante el control de paridad redundante";
 answers[14] = 0;
 units[14] = ['53'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3173. ";
 preguntaids[14] = 3173


//  Id pregunta: 3201 Año de creación de pregunta: 2003
 questions[15]= "16)  &iquest; Cu&aacute;l de los siguientes no es un SGBD del tipo open source ?";
 choices[15]= new Array();
 choices[15][0] = "MySql";
 choices[15][1] = "PostgreSQL";
 choices[15][2] = "SQLite";
 choices[15][3] = "Zope";
 answers[15] = 3;
 units[15] = ['66'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3201. ";
 preguntaids[15] = 3201


//  Id pregunta: 3196 Año de creación de pregunta: 2003
 questions[16]= "17)  El Standard IEEE 1387.2-1995: Software Administration, define el est&aacute;ndar POSIX-7.2:";
 choices[16]= new Array();
 choices[16][0] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas pero no en entornos heterog&eacute;neos.";
 choices[16][1] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas o en entornos heterog&eacute;neos.";
 choices[16][2] = "POSIX (Portable Operating System Interface) es un grupo de interfaces est&aacute;ndares de sistema operativo, y la 7.2 esta dise&ntilde;ada espec&iacute;ficamente para soportar la portabilidad de aplicaciones en c&oacute;digo fuente.";
 choices[16][3] = "Este est&aacute;ndar provee un entorno de computaci&oacute;n en el cual las aplicaciones pueden ser portadas a todos los productos certificados, que pueden ser de distintos proveedores. Contiene est&aacute;ndares para el sistema operativo, protocolos de red, lenguajes de p";
 answers[16] = 1;
 units[16] = ['57'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3196. Junta Andaluc&iacute;a";
 preguntaids[16] = 3196


//  Id pregunta: 3149 Año de creación de pregunta: 2002
 questions[17]= "18)  Se entiende por red de almacenamiento (Storage Area Network):";
 choices[17]= new Array();
 choices[17][0] = "El conjunto de ficheros y bases de datos interconectados por una red de area local";
 choices[17][1] = "Un sistema de ordenadores conectados por una WAN que permite el acceso mutuo a sus bases de datos";
 choices[17][2] = "Un sistema de comunicaciones que cuenta con cierta capacidad de memoria en sus encaminadores";
 choices[17][3] = "Un sistema que contempla el almacenamiento de datos e informaciones como un conjunto virtual embebido en una red de comunicaci&oacute;n";
 answers[17] = 3;
 units[17] = ['53'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3149. ";
 preguntaids[17] = 3149


//  Id pregunta: 3229 Año de creación de pregunta: 2009
 questions[18]= "19)  &iquest;C&uacute;al es la afirmaci&oacute;n falsa si hablamos de LDAP?";
 choices[18]= new Array();
 choices[18][0] = "Usa TCP/IP";
 choices[18][1] = "Reemplaza a X.500";
 choices[18][2] = "El protocolo usa ASN.1 y los mensajes se codifican y transmiten usando BER";
 choices[18][3] = "Permite la operaci&oacute;n MODIFY";
 answers[18] = 1;
 units[18] = ['78'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3229. RFC 4511";
 preguntaids[18] = 3229


//  Id pregunta: 3205 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest; Cu&aacute;l no es una aplicaci&oacute;n de LDAP ?";
 choices[19]= new Array();
 choices[19][0] = "Gesti&oacute;n de configuraci&oacute;n";
 choices[19][1] = "Seguridad";
 choices[19][2] = "Correo Electr&oacute;nico";
 choices[19][3] = "Transmisi&oacute;n de ficheros";
 answers[19] = 3;
 units[19] = ['77'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3205. ";
 preguntaids[19] = 3205


//  Id pregunta: 3153 Año de creación de pregunta: 2002
 questions[20]= "21)  Un monitor cuya resoluci&oacute;n es de 640 x 480, tiene:";
 choices[20]= new Array();
 choices[20][0] = "480 l&iacute;neas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[20][1] = "640 lineas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[20][2] = "480 pixeles (resoluci&oacute;n horizontal)";
 choices[20][3] = "Ninguna de las anteriores es cierta";
 answers[20] = 0;
 units[20] = ['52'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3153. ";
 preguntaids[20] = 3153


//  Id pregunta: 3156 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[21]= new Array();
 choices[21][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[21][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[21][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[21][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[21] = 2;
 units[21] = ['63'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3156. ";
 preguntaids[21] = 3156


//  Id pregunta: 3187 Año de creación de pregunta: 2003
 questions[22]= "23)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[22]= new Array();
 choices[22][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[22][1] = "Puede incluir un subdirectorio META-INF";
 choices[22][2] = "Puede incluir un fichero MANIFEST.MF";
 choices[22][3] = "Puede incluir clases e im&aacute;genes pero no sonidos";
 answers[22] = 3;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3187. ";
 preguntaids[22] = 3187


//  Id pregunta: 3191 Año de creación de pregunta: 2003
 questions[23]= "24)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[23]= new Array();
 choices[23][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[23][1] = "es un sistema operativo compatible con UNIX";
 choices[23][2] = "es un software libre";
 choices[23][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[23] = 0;
 units[23] = ['66'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3191. EXAMEN CASTILLA LA MANCHA";
 preguntaids[23] = 3191


//  Id pregunta: 3161 Año de creación de pregunta: 2002
 questions[24]= "25)  El creador de JAVA es:";
 choices[24]= new Array();
 choices[24][0] = "Microsoft";
 choices[24][1] = "IBM";
 choices[24][2] = "SUN Microsystems";
 choices[24][3] = "CERN";
 answers[24] = 2;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3161. ";
 preguntaids[24] = 3161


//  Id pregunta: 3226 Año de creación de pregunta: 2003
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; al margen de la teor&iacute;a de la conmutaci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Obtener los circuitos l&oacute;gicos que representan a las diferentes funciones booleanas.";
 choices[25][1] = "Obtener el circuito de coste m&iacute;nimo.";
 choices[25][2] = "Obtener en un tiempo aceptable un circuito que reproduzca la funci&oacute;n booleana adecuada.";
 choices[25][3] = "Dise&ntilde;ar los circuitos que permitan la transmisi&oacute;n de los datos hasta un receptor situado a una cierta distancia.";
 answers[25] = 3;
 units[25] = ['52'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3226. Junta Andaluc&iacute;a";
 preguntaids[25] = 3226


//  Id pregunta: 3192 Año de creación de pregunta: 2003
 questions[26]= "27)  Dentro de las t&eacute;cnicas de representaci&oacute;n del conocimiento indicar a que modelo pertenecen los algoritmos gen&eacute;ticos";
 choices[26]= new Array();
 choices[26][0] = "Modelo Simb&oacute;lico";
 choices[26][1] = "Modelo de conocimiento profundo";
 choices[26][2] = "Modelo Param&eacute;trico";
 choices[26][3] = "Razonamiento multinivel";
 answers[26] = 2;
 units[26] = ['68'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3192. ";
 preguntaids[26] = 3192


//  Id pregunta: 3230 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[27]= new Array();
 choices[27][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[27][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[27][2] = "Dos mensajes parecidos producen huellas digitales diferentes";
 choices[27][3] = "La funci&oacute;n hash es reversible";
 answers[27] = 3;
 units[27] = ['77'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3230. ";
 preguntaids[27] = 3230


//  Id pregunta: 3177 Año de creación de pregunta: 2002
 questions[28]= "29)  RAID significa:";
 choices[28]= new Array();
 choices[28][0] = "Random Access Internet Devices, dispositivos de acceso aleatorio a internet, un tipo de m&oacute;dem que optimiza la velocidad de acceso";
 choices[28][1] = "RAdio Identification and Detection, Identificaci&oacute;n y Detecci&oacute;n por Radio, tecnolog&iacute;a basada en las propiedades de las ondas de radio para detectar cuerpos y objetos quietos o en movimiento";
 choices[28][2] = "Redundant Array of Inexpensive Disks, matriz redundante de discos baratos, tecnolog&iacute;a para tener redundancia en el almacenamiento de datos evitando as&iacute; p&eacute;rdida accidental o intencionada de informaci&oacute;n";
 choices[28][3] = "Redes de Acceso Inal&aacute;mbrico por Diversidad, tecnolog&iacute;a que usa la diversidad (dispersi&oacute;n de la onda en varios rayos) de la transmisi&oacute;n de ondas de radio para aumentar la potencia de transmisi&oacute;n de datos en comunicaciones inal&aacute;mbricas de datos";
 answers[28] = 2;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3177. ";
 preguntaids[28] = 3177


//  Id pregunta: 3214 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Cu&aacute;l de estos procesadores de 64 bits usa la t&eacute;cnica EPIC (&quot;Explicity Parallel Instruction Computing&quot;)?:";
 choices[29]= new Array();
 choices[29][0] = "PowerPC.";
 choices[29][1] = "Alpha.";
 choices[29][2] = "Ultrasparc.";
 choices[29][3] = "Itanium.";
 answers[29] = 3;
 units[29] = ['52'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3214. Junta Andaluc&iacute;a";
 preguntaids[29] = 3214


//  Id pregunta: 3225 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[30]= new Array();
 choices[30][0] = "Scfw";
 choices[30][1] = "MultOs";
 choices[30][2] = "Java Card";
 choices[30][3] = "Open Card";
 answers[30] = 3;
 units[30] = ['78'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3225. ";
 preguntaids[30] = 3225


//  Id pregunta: 3172 Año de creación de pregunta: 2002
 questions[31]= "32)  La utilidad &quot;ping&quot;:";
 choices[31]= new Array();
 choices[31][0] = "Se basa en los comandos &quot;echo request&quot; y &quot;echo reply&quot; del protocolo ICMP";
 choices[31][1] = "Se basa en el protocolo PING";
 choices[31][2] = "Se basa en el protocolo UDP";
 choices[31][3] = "Se basa en el protocolo TCP";
 answers[31] = 0;
 units[31] = ['56'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3172. ";
 preguntaids[31] = 3172


//  Id pregunta: 3183 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Se pueden ejecutar programas MS Windows bajo un entorno Linux?";
 choices[32]= new Array();
 choices[32][0] = "Nunca";
 choices[32][1] = "De forma nativa, linux es compatible binario con MS Windows";
 choices[32][2] = "S&iacute;, a trav&eacute;s de programas espec&iacute;fico para ello";
 choices[32][3] = "S&iacute;, a trav&eacute;s del comando SMB";
 answers[32] = 2;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3183. EXAMEN CASTILLA LA MANCHA";
 preguntaids[32] = 3183


//  Id pregunta: 3186 Año de creación de pregunta: 2003
 questions[33]= "34)  Al objeto de una base de datos ORACLE que tiene como funci&oacute;n establecer una referencia a datos almacenados en otra base de datos, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "&Iacute;ndice no &uacute;nico.";
 choices[33][1] = "Vista.";
 choices[33][2] = "Database link.";
 choices[33][3] = "Clustered Cable.";
 answers[33] = 2;
 units[33] = ['61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3186. Junta Andaluc&iacute;a";
 preguntaids[33] = 3186


//  Id pregunta: 3209 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest; Qu&eacute; es SAS ?";
 choices[34]= new Array();
 choices[34][0] = "Serial Attached SCSI";
 choices[34][1] = "Serial ATA";
 choices[34][2] = "Small Computer Systems Interface";
 choices[34][3] = "Un paquete estad&iacute;stico";
 answers[34] = 0;
 units[34] = ['52'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3209. ";
 preguntaids[34] = 3209


//  Id pregunta: 3234 Año de creación de pregunta: 2013
 questions[35]= "36)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[35]= new Array();
 choices[35][0] = "63";
 choices[35][1] = "127";
 choices[35][2] = "256";
 choices[35][3] = "1024";
 answers[35] = 1;
 units[35] = ['52'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3234. Similar Junta Andaluc&iacute;a";
 preguntaids[35] = 3234


//  Id pregunta: 3174 Año de creación de pregunta: 2002
 questions[36]= "37)  Los procesos en UNIX que est&aacute;n en ejecuci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Tienen que residir en memoria";
 choices[36][1] = "Pueden tener p&aacute;ginas en memoria y p&aacute;ginas en disco";
 choices[36][2] = "Tienen que estar en memoria aun cuando no se est&eacute;n ejecutando";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = 1;
 units[36] = ['57'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3174. ";
 preguntaids[36] = 3174


//  Id pregunta: 3190 Año de creación de pregunta: 2003
 questions[37]= "38)  Con las memorias DDR-SDRAM podernos obtener una velocidad equivalente a la obtenida con:";
 choices[37]= new Array();
 choices[37][0] = "pc66.";
 choices[37][1] = "pc100.";
 choices[37][2] = "pc133.";
 choices[37][3] = "multiplo (x2) de pc66, pc100 o pc133.";
 answers[37] = 3;
 units[37] = ['52'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3190. Junta Andaluc&iacute;a";
 preguntaids[37] = 3190


//  Id pregunta: 3171 Año de creación de pregunta: 2002
 questions[38]= "39)  Un PDA:";
 choices[38]= new Array();
 choices[38][0] = "No permite la navegaci&oacute;n en Internet";
 choices[38][1] = "No puede conectarse a un PC";
 choices[38][2] = "Puede llevar instalado Windows";
 choices[38][3] = "Todas las anteriores son ciertas";
 answers[38] = 2;
 units[38] = ['52'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3171. ";
 preguntaids[38] = 3171


//  Id pregunta: 3207 Año de creación de pregunta: 2003
 questions[39]= "40)  &iquest;Qu&eacute; es MOSIX?";
 choices[39]= new Array();
 choices[39][0] = "MOSIX es un conjunto de herramientas especialmente desarrolladas para la construcci&oacute;n de clusters Linux basados en el procesador x86";
 choices[39][1] = "MOSIX es un conjunto de herramientas especialmente desarrolladas para la construcci&oacute;n de clusters Unix";
 choices[39][2] = "MOSIX es un conjunto de herramientas especialmente desarrolladas para la construcci&oacute;n de clusters Linux";
 choices[39][3] = "MOSIX es un conjunto de herramientas especialmente desarrolladas para la construcci&oacute;n de clusters Unix basados en el procesador x86";
 answers[39] = 0;
 units[39] = ['49'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3207. ";
 preguntaids[39] = 3207


//  Id pregunta: 3227 Año de creación de pregunta: 2003
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[40]= new Array();
 choices[40][0] = "La clave p&uacute;blica del titular.";
 choices[40][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[40][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[40][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[40] = 2;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3227. Junta Andaluc&iacute;a";
 preguntaids[40] = 3227


//  Id pregunta: 3176 Año de creación de pregunta: 2002
 questions[41]= "42)  Para una corporaci&oacute;n bancaria con un potente mainframe el principal cuello de botella suele ser:";
 choices[41]= new Array();
 choices[41][0] = "Los canales de comunicaciones";
 choices[41][1] = "La memoria del sistema central";
 choices[41][2] = "La velocidad de acceso a los datos";
 choices[41][3] = "La velocidad de los operadores humanos que introducen la informaci&oacute;n";
 answers[41] = 2;
 units[41] = ['50'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3176. ";
 preguntaids[41] = 3176


//  Id pregunta: 3224 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes bloques b&aacute;sicos no forma parte de la Unidad de Control?:";
 choices[42]= new Array();
 choices[42][0] = "Registro de memorizaci&oacute;n del estado presente.";
 choices[42][1] = "Bloque de calculo del pr&oacute;ximo estado.";
 choices[42][2] = "Bloque de calculo de la salida (micro&oacute;rdenes enviadas a la unidad de procesamiento).";
 choices[42][3] = "Bloque temporizador.";
 answers[42] = 3;
 units[42] = ['52'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3224. Junta Andaluc&iacute;a";
 preguntaids[42] = 3224


//  Id pregunta: 3193 Año de creación de pregunta: 2003
 questions[43]= "44)  Dentro del &aacute;lgebra relacional, &iquest;qu&eacute; definici&oacute;n corresponde con la Uni&oacute;n Natural?";
 choices[43]= new Array();
 choices[43][0] = "Si X es un subconjunto de atributos de la relaci&oacute;n R, entonces la uni&oacute;n natural de R es la relaci&oacute;n formada por las columnas de R correspondientes a los atributos de X.";
 choices[43][1] = "La uni&oacute;n natural de dos relaciones R y S es el conjunto formado por todas las tuplas de R que no est&aacute;n en S. Este operador s&oacute;lo se puede aplicar a relaciones del mismo grado y con los mismos atributos.";
 choices[43][2] = "La uni&oacute;n natural de dos relaciones R y S, de grados m y n respectivamente es el conjunto formado por todas las posibles tuplas (mxn tuplas) de m+n elementos en las que los m primeros son de R y los n restantes pertenecen a S.";
 choices[43][3] = "Ninguna de las definiciones anteriores corresponde con la uni&oacute;n natural.";
 answers[43] = 3;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3193. ";
 preguntaids[43] = 3193


//  Id pregunta: 3154 Año de creación de pregunta: 2002
 questions[44]= "45)  Un monitor de 20 pulgadas efectivas y de 1600 x 1200 puntos con 256 tonos de grises produce una resoluci&oacute;n de:";
 choices[44]= new Array();
 choices[44][0] = "300 dpi";
 choices[44][1] = "30 dpi";
 choices[44][2] = "100 dpi";
 choices[44][3] = "50 dpi";
 answers[44] = 2;
 units[44] = ['52'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3154. ";
 preguntaids[44] = 3154


//  Id pregunta: 3232 Año de creación de pregunta: 2003
 questions[45]= "46)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[45]= new Array();
 choices[45][0] = "Enrutamiento";
 choices[45][1] = "Asignaci&oacute;n de responsabilidades";
 choices[45][2] = "Generaci&oacute;n de formularios";
 choices[45][3] = "Gesti&oacute;n de procedimiento";
 answers[45] = 2;
 units[45] = ['72'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3232. ";
 preguntaids[45] = 3232


//  Id pregunta: 3211 Año de creación de pregunta: 2003
 questions[46]= "47)  &iquest; Qu&eacute; escritorio de software libre utiliza CORBA como mecanismo de IPC ?";
 choices[46]= new Array();
 choices[46][0] = "KDE";
 choices[46][1] = "GNOME";
 choices[46][2] = "ambos";
 choices[46][3] = "Ninguno de los 2";
 answers[46] = 1;
 units[46] = ['57'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3211. ";
 preguntaids[46] = 3211


//  Id pregunta: 3194 Año de creación de pregunta: 2003
 questions[47]= "48)  El comando de SQL ' DELETE', &iquest;qu&eacute; hace?";
 choices[47]= new Array();
 choices[47][0] = "Borra una tabla determinada.";
 choices[47][1] = "Borra un &iacute;ndice de una tabla.";
 choices[47][2] = "Borra valores de una tabla.";
 choices[47][3] = "Borra tanto valores de una tabla, la tabla entera como &iacute;ndices de una tabla seg&uacute;n sea la sintaxis de la sentencia SQL.";
 answers[47] = 2;
 units[47] = ['61'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3194. ";
 preguntaids[47] = 3194


//  Id pregunta: 3233 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Cu&aacute;l no es un modelo de extracci&oacute;n de datos en miner&iacute;a de datos?";
 choices[48]= new Array();
 choices[48][0] = "De verificaci&oacute;n.";
 choices[48][1] = "De descubrimiento.";
 choices[48][2] = "Jer&aacute;rquico.";
 choices[48][3] = "Predictivo.";
 answers[48] = 2;
 units[48] = ['72'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3233. ";
 preguntaids[48] = 3233


//  Id pregunta: 3204 Año de creación de pregunta: 2003
 questions[49]= "50)  &iquest;Cu&aacute;l es la diferencia entre MPP y SMP?";
 choices[49]= new Array();
 choices[49][0] = "En SMP todas las CPU comparten la misma memoria mientras en MPP cada CPU tiene su propia memoria.";
 choices[49][1] = "En MPP todas las CPU comparten la misma memoria mientras en SMP cada CPU tiene su propia memoria.";
 choices[49][2] = "No hay ninguna diferencia ambas arquitecturas son iguales";
 choices[49][3] = "SMP se utiliza en mainframes mientras que MPP se utiliza en supercomputadores";
 answers[49] = 0;
 units[49] = ['49'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3204. ";
 preguntaids[49] = 3204


//  Id pregunta: 3157 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera respecto a la criptograf&iacute;a?:";
 choices[50]= new Array();
 choices[50][0] = "Los algoritmos &quot;stream&quot; son los mas rapidos";
 choices[50][1] = "Los algoritmos &quot;stream&quot; y &quot;block&quot; son equiparables";
 choices[50][2] = "La velocidad no tiene ninguna correlaci&oacute;n con la longitud de clave";
 choices[50][3] = "3DES es m&aacute;s seguro y lento que DES";
 answers[50] = 1;
 units[50] = ['77'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3157. ";
 preguntaids[50] = 3157


//  Id pregunta: 3195 Año de creación de pregunta: 2003
 questions[51]= "52)  El sistema GPS (Global Positioning System), &iquest;de cu&aacute;ntos sat&eacute;lites operativos se compone?";
 choices[51]= new Array();
 choices[51][0] = "16";
 choices[51][1] = "24";
 choices[51][2] = "32";
 choices[51][3] = "64";
 answers[51] = 1;
 units[51] = ['71'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3195. Junta Andaluc&iacute;a";
 preguntaids[51] = 3195


//  Id pregunta: 3162 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Cu&aacute;ntos niveles RAID est&aacute;ndar existen?:";
 choices[52]= new Array();
 choices[52][0] = "4";
 choices[52][1] = "5";
 choices[52][2] = "6";
 choices[52][3] = "7";
 answers[52] = 3;
 units[52] = ['53'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3162. ";
 preguntaids[52] = 3162


//  Id pregunta: 3151 Año de creación de pregunta: 2002
 questions[53]= "54)  Suponiendo una densidad de grabaci&oacute;n lineal d = 10000 bits/cm, un radio R = 5 cm, una velocidad de giro de 3600 rpm y utilizaci&oacute;n de bits de paridad, la velocidad de transferencia es de:";
 choices[53]= new Array();
 choices[53][0] = "0.2 Mbytes/s";
 choices[53][1] = "10 Mbytes/s";
 choices[53][2] = "2.1 Mbytes/s";
 choices[53][3] = "18.9 Mbytes/s";
 answers[53] = 2;
 units[53] = ['53'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3151. ";
 preguntaids[53] = 3151


//  Id pregunta: 3208 Año de creación de pregunta: 2003
 questions[54]= "55)  &iquest;Qu&eacute; es NUMA?";
 choices[54]= new Array();
 choices[54][0] = "Non-Uniform Memory Access";
 choices[54][1] = "Un nuevo procesador RISC";
 choices[54][2] = "Un nuevo procesador CISC";
 choices[54][3] = "Tipo de arquitectura de proceso paralelo en el que cada procesador comparte una zona de memoria";
 answers[54] = 0;
 units[54] = ['49'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3208. ";
 preguntaids[54] = 3208


//  Id pregunta: 3213 Año de creación de pregunta: 2003
 questions[55]= "56)  &iquest;Cu&aacute;l de estas afirmaciones es falsa con respecto al concepto transacci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "Todas las operaciones que constituyen una transacci&oacute;n se ejecutan en su totalidad o no se ejecutan en absoluto, es decir constituyen una unidad at&oacute;mica e indivisible.";
 choices[55][1] = "Si la transacci&oacute;n debe ejecutarse en varios servidores y uno de ellos sufre una aver&iacute;a, las transacciones efectuadas en el resto de servidores no tendr&aacute;n efecto al objeto de asegurar la sincronizaci&oacute;n e integridad de los datos.";
 choices[55][2] = "El procedimiento de transacciones de &lsquo;two phase commit&rsquo; consta de una 1&ordf; fase de verificaci&oacute;n de la correcta terminaci&oacute;n de la transacci&oacute;n en cada uno de los sistemas participantes y una 2&ordf; fase de ejecuci&oacute;n o cancelaci&oacute;n de dicha transacci&oacute;n.";
 choices[55][3] = "El procesamiento de transacciones solo puede hacerse en modo no orientado a la conexi&oacute;n, nunca en modo interactivo.";
 answers[55] = 3;
 units[55] = ['59'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3213. ";
 preguntaids[55] = 3213


//  Id pregunta: 3150 Año de creación de pregunta: 2002
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de los siguientes es un principio de dise&ntilde;o RISC:";
 choices[56]= new Array();
 choices[56][0] = "Un amplio juego de instrucciones facilita el dise&ntilde;o de compiladores";
 choices[56][1] = "El modelo de ejecuci&oacute;n de pila es superior al de registros";
 choices[56][2] = "Los juegos de instrucciones amplios reducen el tama&ntilde;o de los programas";
 choices[56][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[56] = 3;
 units[56] = ['50'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3150. ";
 preguntaids[56] = 3150


//  Id pregunta: 3218 Año de creación de pregunta: 2003
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[57]= new Array();
 choices[57][0] = "Redistribuci&oacute;n libre.";
 choices[57][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[57][2] = "Derecho de modificaci&oacute;n.";
 choices[57][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[57] = 3;
 units[57] = ['66'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3218. Junta Andaluc&iacute;a";
 preguntaids[57] = 3218


//  Id pregunta: 3148 Año de creación de pregunta: 2002
 questions[58]= "59)  Se dice que el conjunto de instrucciones que ejecuta un procesador deber ser completo, es decir:";
 choices[58]= new Array();
 choices[58][0] = "Debe contener un gran n&uacute;mero de instrucciones";
 choices[58][1] = "Debe ser un conjunto de instrucciones muy potentes";
 choices[58][2] = "Debe permitir calcular cualquier tarea computable en un tiempo finito";
 choices[58][3] = "Debe realizar c&aacute;lculos a altas velocidades";
 answers[58] = 2;
 units[58] = ['59'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3148. ";
 preguntaids[58] = 3148


//  Id pregunta: 3147 Año de creación de pregunta: 2002
 questions[59]= "60)  SCSI responde a las siglas de:";
 choices[59]= new Array();
 choices[59][0] = "Smart Computer System Interface, Interfaz elegante para sistemas de computadora";
 choices[59][1] = "Small Computer System Interface, Interfaz para peque&ntilde;os sistemas de computadora";
 choices[59][2] = "Synchonized Computer Serial Interface, Interfaz serie para ordenadores sincronizados";
 choices[59][3] = "Superb Computation Scale- Integration, escala de integraci&oacute;n para computaci&oacute;n s&uacute;per";
 answers[59] = 1;
 units[59] = ['53'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3147. ";
 preguntaids[59] = 3147


//  Id pregunta: 3175 Año de creación de pregunta: 2002
 questions[60]= "61)  Los servicios que ofrece el protocolo SET (Secure Electronico Transaction) son:";
 choices[60]= new Array();
 choices[60][0] = "Autenticaci&oacute;n, disponibilidad, integridad y gesti&oacute;n de pago";
 choices[60][1] = "Autenticaci&oacute;n, confidencialidad, integridad y gesti&oacute;n de pago";
 choices[60][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n y gesti&oacute;n de pago";
 choices[60][3] = "Autenticaci&oacute;n, integridad, disponibilidad y confidencialidad";
 answers[60] = 1;
 units[60] = ['75'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3175. ";
 preguntaids[60] = 3175


//  Id pregunta: 3206 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest; Cu&aacute;l se utiliza para compartir recursos desde un sistema tipo Unix a equipos Windows utilizando el protocolo SMB ?";
 choices[61]= new Array();
 choices[61][0] = "NFS";
 choices[61][1] = "Samba";
 choices[61][2] = "Cualquiera de los 2 indistintamente";
 choices[61][3] = "Ninguno de los 2";
 answers[61] = 1;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3206. ";
 preguntaids[61] = 3206


//  Id pregunta: 3200 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest; Cu&aacute;l de las siguientes no es una herramienta de copia remota de ficheros ?";
 choices[62]= new Array();
 choices[62][0] = "rcp";
 choices[62][1] = "rsync";
 choices[62][2] = "ftp";
 choices[62][3] = "vtam";
 answers[62] = 3;
 units[62] = ['57'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3200. ";
 preguntaids[62] = 3200


//  Id pregunta: 3222 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;C&uacute;al de los modelos de datos de Sistemas de Informaci&oacute;n Geogr&aacute;fica es m&aacute;s adecuado para representar l&iacute;neas con precisi&oacute;n y superficies rellenas?";
 choices[63]= new Array();
 choices[63][0] = "Modelo R&aacute;ster.";
 choices[63][1] = "Modelo Vectorial.";
 choices[63][2] = "Modelo R&aacute;ster y Modelo Vectorial.";
 choices[63][3] = "El modelo R&aacute;ster para l&iacute;neas y el modelo Vectorial para superficies.";
 answers[63] = 2;
 units[63] = ['71'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3222. ";
 preguntaids[63] = 3222


//  Id pregunta: 3217 Año de creación de pregunta: 2003
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[64]= new Array();
 choices[64][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[64][1] = "Alta volatilidad de los datos.";
 choices[64][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[64][3] = "Integraci&oacute;n del formato de los datos.";
 answers[64] = 1;
 units[64] = ['72'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3217. Junta Andaluc&iacute;a";
 preguntaids[64] = 3217


//  Id pregunta: 3160 Año de creación de pregunta: 2002
 questions[65]= "66)  El conocido est&aacute;ndar FireWire es el est&aacute;ndar IEEE:";
 choices[65]= new Array();
 choices[65][0] = "1284";
 choices[65][1] = "1394";
 choices[65][2] = "1384";
 choices[65][3] = "1294";
 answers[65] = 1;
 units[65] = ['52'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3160. ";
 preguntaids[65] = 3160


//  Id pregunta: 3215 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Cu&aacute;l de estos tipos NO es un tipo de middleware?";
 choices[66]= new Array();
 choices[66][0] = "RPC.";
 choices[66][1] = "X-500.";
 choices[66][2] = "ORB.";
 choices[66][3] = "Conversaciones o di&aacute;logos continuos entre dos o m&aacute;s sistemas sobre una conexi&oacute;n l&oacute;gica.";
 answers[66] = 1;
 units[66] = ['77'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3215. ";
 preguntaids[66] = 3215


//  Id pregunta: 3155 Año de creación de pregunta: 2002
 questions[67]= "68)  Una de las siguientes no es una caracter&iacute;stica que deba reunir un interfaz:";
 choices[67]= new Array();
 choices[67][0] = "Consistencia";
 choices[67][1] = "Naturalidad";
 choices[67][2] = "Obviedad";
 choices[67][3] = "Facilidad de uso y aprendizaje";
 answers[67] = 2;
 units[67] = ['52'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3155. ";
 preguntaids[67] = 3155


//  Id pregunta: 3212 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;C&oacute;mo se crea un &iacute;ndice para una tabla?";
 choices[68]= new Array();
 choices[68][0] = "Se crea siempre en la misma sentencia en que se crea la tabla.";
 choices[68][1] = "Se crea siempre autom&aacute;ticamente sobre la clave primaria al crear la tabla.";
 choices[68][2] = "Con CREATE INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 choices[68][3] = "Con INSERT INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 answers[68] = 2;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3212. ";
 preguntaids[68] = 3212


//  Id pregunta: 3216 Año de creación de pregunta: 2003
 questions[69]= "70)  &iquest;C&uacute;al de las siguientes afirmaciones sobre OLAP es falsa?";
 choices[69]= new Array();
 choices[69][0] = "Pueden presentar vistas de un n&uacute;mero reducido de dimensiones elegido por el usuario.";
 choices[69][1] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 choices[69][2] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[69][3] = "No pueden existir bases de datos OLAP relacionales.";
 answers[69] = 3;
 units[69] = ['72'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3216. ";
 preguntaids[69] = 3216


//  Id pregunta: 3203 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest; Cu&aacute;l es el t&eacute;rmino con el que se denomina la personalizaci&oacute;n en apariencia y prestaciones de un ordenador ?";
 choices[70]= new Array();
 choices[70][0] = "Mobbing";
 choices[70][1] = "e-learning";
 choices[70][2] = "Modding";
 choices[70][3] = "customizing";
 answers[70] = 2;
 units[70] = ['53'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3203. ";
 preguntaids[70] = 3203


//  Id pregunta: 3167 Año de creación de pregunta: 2002
 questions[71]= "72)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[71]= new Array();
 choices[71][0] = "Es un lenguaje de programaci&oacute;n";
 choices[71][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[71][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[71][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[71] = 0;
 units[71] = ['74'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3167. ";
 preguntaids[71] = 3167


//  Id pregunta: 3185 Año de creación de pregunta: 2003
 questions[72]= "73)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Procedimiento";
 choices[72][1] = "Producto.";
 choices[72][2] = "Secuencia.";
 choices[72][3] = "Segmento.";
 answers[72] = 0;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3185. Junta Andaluc&iacute;a";
 preguntaids[72] = 3185


//  Id pregunta: 3179 Año de creación de pregunta: 2002
 questions[73]= "74)  Respecto a RAID, una de las siguientes afirmaciones es falsa:";
 choices[73]= new Array();
 choices[73][0] = "RAID 0 no ofrece protecci&oacute;n de datos, s&oacute;lo mejora el tiempo de acceso";
 choices[73][1] = "RAID 2 es similar al RAID 1 pero a&ntilde;adiendo redundancia";
 choices[73][2] = "RAID 5 es el m&aacute;s generalizado por su equilibrio de resultados";
 choices[73][3] = "RAID 4 es similar a RAID 0 pero con correcci&oacute;n de errores";
 answers[73] = 1;
 units[73] = ['53'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3179. ";
 preguntaids[73] = 3179


//  Id pregunta: 3152 Año de creación de pregunta: 2002
 questions[74]= "75)  Un dispositivo multifunci&oacute;n, aplicado a la ofim&aacute;tica, dispone habitualmente de las siguientes funciones:";
 choices[74]= new Array();
 choices[74][0] = "Tableta digitalizadora, l&aacute;piz &oacute;ptico y lector de tarjetas de fotograf&iacute;a digital";
 choices[74][1] = "Impresora, esc&aacute;ner, fax, copiadora";
 choices[74][2] = "Todas las anteriores";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = 1;
 units[74] = ['52'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3152. ";
 preguntaids[74] = 3152


