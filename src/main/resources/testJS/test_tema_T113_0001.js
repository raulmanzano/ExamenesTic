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
//  Id pregunta: 4415 Año de creación de pregunta: 2002
 questions[0]= "1)  En una arquitectura de tres capas el acceso a los datos corresponde a la capa de:";
 choices[0]= new Array();
 choices[0][0] = "Presentaci&oacute;n";
 choices[0][1] = "Aplicaci&oacute;n";
 choices[0][2] = "Datos";
 choices[0][3] = "En realidad las tres capas manipulan los datos";
 answers[0] = 2;
 units[0] = ['113'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4415. ";
 preguntaids[0] = 4415


//  Id pregunta: 6789 Año de creación de pregunta: 2010
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[1]= new Array();
 choices[1][0] = "Internet Information Server.";
 choices[1][1] = "Weblogic.";
 choices[1][2] = "Websphere.";
 choices[1][3] = "Apache.";
 answers[1] = 3;
 units[1] = ['113'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 6789. TIC A 2009";
 preguntaids[1] = 6789


//  Id pregunta: 5056 Año de creación de pregunta: 2002
 questions[2]= "3)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos realiza asignaci&oacute;n din&aacute;mica de direcciones IP:";
 choices[2]= new Array();
 choices[2][0] = "TCP";
 choices[2][1] = "DNS";
 choices[2][2] = "WINS";
 choices[2][3] = "DHCP";
 answers[2] = 3;
 units[2] = ['113'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5056. ";
 preguntaids[2] = 5056


//  Id pregunta: 4306 Año de creación de pregunta: 2004
 questions[3]= "4)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[3]= new Array();
 choices[3][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[3][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[3][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[3][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[3] = 2;
 units[3] = ['113'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4306. ";
 preguntaids[3] = 4306


//  Id pregunta: 9119 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[4]= new Array();
 choices[4][0] = "Model View Controller.";
 choices[4][1] = "Multiple Views Canvas.";
 choices[4][2] = "Mobile Video Compatible.";
 choices[4][3] = "Mobile View Connector.";
 answers[4] = 0;
 units[4] = ['113'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9119. Examen TIC A2 2013";
 preguntaids[4] = 9119


//  Id pregunta: 5074 Año de creación de pregunta: 2002
 questions[5]= "6)  SOAP es:";
 choices[5]= new Array();
 choices[5][0] = "Synchronized Objects Application Protocol, protocolo de aplicaci&oacute;n sincronizada para objetos";
 choices[5][1] = "System Open Access Protocol, protocolo de acceso abierto a sistemas";
 choices[5][2] = "Simple Object Access Protocol, protocolo de acceso simple a objetos";
 choices[5][3] = "SOAP no se corresponde con ningun acr&oacute;nimo aplicable en tecnolog&iacute;a";
 answers[5] = 2;
 units[5] = ['113'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5074. ";
 preguntaids[5] = 5074


//  Id pregunta: 5104 Año de creación de pregunta: 2004
 questions[6]= "7)  HTML";
 choices[6]= new Array();
 choices[6][0] = "Define reglas para el intercambio de mensajes";
 choices[6][1] = "Permite incorporar plantillas XSL";
 choices[6][2] = "Es un lenguaje que describe c&oacute;mo se formatean los mensajes";
 choices[6][3] = "Todas son ciertas";
 answers[6] = 2;
 units[6] = ['113'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5104. ";
 preguntaids[6] = 5104


//  Id pregunta: 4401 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[7]= new Array();
 choices[7][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[7][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[7][2] = "No hay diferencia; es lo mismo";
 choices[7][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[7] = 3;
 units[7] = ['113'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4401. ";
 preguntaids[7] = 4401


//  Id pregunta: 5276 Año de creación de pregunta: 2006
 questions[8]= "9)  Un proxy o apoderado permite";
 choices[8]= new Array();
 choices[8][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[8][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[8][2] = "traducir las direcciones internas a externas y viceversa";
 choices[8][3] = "Todas las respuestas son correctas";
 answers[8] = 3;
 units[8] = ['113'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 5276. ";
 preguntaids[8] = 5276


//  Id pregunta: 6810 Año de creación de pregunta: 2010
 questions[9]= "10)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[9]= new Array();
 choices[9][0] = "Extraer la direcci&oacute;n de correo de un usuario.";
 choices[9][1] = "Relacionar sucesivas conexiones de un cliente.";
 choices[9][2] = "Enviar un objeto al cliente cuando su copia cach&eacute; est&aacute; obsoleta.";
 choices[9][3] = "Enviar c&oacute;digo embebido en la p&aacute;gina HTML que se ejecutar&aacute; en el cliente.";
 answers[9] = 1;
 units[9] = ['113'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6810. TIC A 2009";
 preguntaids[9] = 6810


//  Id pregunta: 10517 Año de creación de pregunta: 2015
 questions[10]= "11)  Qu&eacute; tipo de registro se corresponde DNS, se corresponde con esta definici&oacute;n: &quot;Este registro se usa en IPv6 para traducirnombres de hosts a direcciones IPv6.&quot;";
 choices[10]= new Array();
 choices[10][0] = "Tipo A";
 choices[10][1] = "Tipo AAAA";
 choices[10][2] = "Tipo CNAME";
 choices[10][3] = "Tipo NS";
 answers[10] = 1;
 units[10] = ['113'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10517. ";
 preguntaids[10] = 10517


//  Id pregunta: 5098 Año de creación de pregunta: 2004
 questions[11]= "12)  El protocolo HTTP";
 choices[11]= new Array();
 choices[11][0] = "Obliga a los servidores a escuchar en el puerto 80";
 choices[11][1] = "Utiliza el formato MIME para las respuestas";
 choices[11][2] = "Utiliza DNS y TCP para establecer la conexi&oacute;n con el servidor";
 choices[11][3] = "Est&aacute; basado en los comandos de Un&iacute;x";
 answers[11] = 1;
 units[11] = ['113'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5098. ";
 preguntaids[11] = 5098


//  Id pregunta: 5343 Año de creación de pregunta: 2006
 questions[12]= "13)  Capacidad que permite la descarga de actualizaciones software o bien la reconfiguraci&oacute;n de ordenadores por la noche, cuando normalmente est&aacute;n apagados";
 choices[12]= new Array();
 choices[12][0] = "firmware";
 choices[12][1] = "teclado virtual";
 choices[12][2] = "despertar remoto (remote wakeup)";
 choices[12][3] = "Autocomprobaci&oacute;n de arranque (Power-On Self-Test)";
 answers[12] = 2;
 units[12] = ['113'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5343. ";
 preguntaids[12] = 5343


//  Id pregunta: 4643 Año de creación de pregunta: 2002
 questions[13]= "14)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[13]= new Array();
 choices[13][0] = "applet";
 choices[13][1] = "cookie";
 choices[13][2] = "socket";
 choices[13][3] = "control activeX";
 answers[13] = 1;
 units[13] = ['113'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4643. ";
 preguntaids[13] = 4643


//  Id pregunta: 10201 Año de creación de pregunta: 2015
 questions[14]= "15)  Respecto a la intranet de un ministerio se&ntilde;ale la respuesta correcta:";
 choices[14]= new Array();
 choices[14][0] = "No puede estar conectada a la Red Sara, para evitar fugas de informaci&oacute;n.";
 choices[14][1] = "Se incluye dentro de la zona desmilitarizada p&uacute;blica (DMZ), para garantizar el acceso por teletrabajo.";
 choices[14][2] = "No podr&aacute; usar un nombre interno como ministerio.age en su certificado SSL a partir de 2016.";
 choices[14][3] = "Debe usar el direccionamiento privado 10.0.0.0/24, 192.168.0.0/16 y 172.16.0.0/16.";
 answers[14] = 2;
 units[14] = ['113'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10201. Examen TIC A1 2014";
 preguntaids[14] = 10201


//  Id pregunta: 4552 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes conceptos no aporta seguridad a una intranet?:";
 choices[15]= new Array();
 choices[15][0] = "Spoofing";
 choices[15][1] = "Firewalls";
 choices[15][2] = "NAT";
 choices[15][3] = "Proxy";
 answers[15] = 0;
 units[15] = ['113'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4552. ";
 preguntaids[15] = 4552


//  Id pregunta: 4641 Año de creación de pregunta: 2002
 questions[16]= "17)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[16]= new Array();
 choices[16][0] = "registro de incidencias";
 choices[16][1] = "fichero de log";
 choices[16][2] = "lista de errores";
 choices[16][3] = "fichero de registros";
 answers[16] = 1;
 units[16] = ['113'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4641. ";
 preguntaids[16] = 4641


//  Id pregunta: 10518 Año de creación de pregunta: 2015
 questions[17]= "18)  De las siguientes definiciones, seleccione la correcta para la definici&oacute;n de ARP";
 choices[17]= new Array();
 choices[17][0] = "Es un protocolo de nivel de enlace responsable de encontrar la direcci&oacute;n hardware (MAC)";
 choices[17][1] = "Es un protocolo de nivel de RED responsable de encontrar la direcci&oacute;n hardware (MAC)";
 choices[17][2] = "Es un protocolo de nivel de enlace responsable de encontrar la direcci&oacute;n de red (IP)";
 choices[17][3] = "Es un protocolo de nivel de red responsable de encontrar la direcci&oacute;n de red (IP)";
 answers[17] = 0;
 units[17] = ['113'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 10518. ";
 preguntaids[17] = 10518


//  Id pregunta: 5271 Año de creación de pregunta: 2006
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?";
 choices[18]= new Array();
 choices[18][0] = "El modelo en dos capas no permite la distribuci&oacute;n en dos capas diferentes el interfaz de usuario y la l&oacute;gica de negocio";
 choices[18][1] = "El modelo en 3 capas permite situar en una capa separada los datos";
 choices[18][2] = "El modelo en 3 capas permite una mayor seguridad que el modelo en 2 capas";
 choices[18][3] = "El modelo en 2 capas permite separar en una capa separada los datos";
 answers[18] = 0;
 units[18] = ['113'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5271. ";
 preguntaids[18] = 5271


//  Id pregunta: 5075 Año de creación de pregunta: 2002
 questions[19]= "20)  SOAP:";
 choices[19]= new Array();
 choices[19][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[19][1] = "Fue propuesta originalmente por Microsoft";
 choices[19][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[19][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[19] = 3;
 units[19] = ['113'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5075. ";
 preguntaids[19] = 5075


//  Id pregunta: 8109 Año de creación de pregunta: 2011
 questions[20]= "21)  &iquest;Qu&eacute; es una DMZ o zona desmilitarizada?";
 choices[20]= new Array();
 choices[20][0] = "Es una subred perimetral aislada por cortafuegos aunque visible desde Internet.";
 choices[20][1] = "a) Es una subred libre de ataques externos, donde residen -entre otros- servidores con bases de datos criticas.";
 choices[20][2] = "Es una subred desde la que se permiten conexiones a la red interna, por estar la primera desmilitarizada.";
 choices[20][3] = "Es un tipo de honeypot.";
 answers[20] = 0;
 units[20] = ['113'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8109. Examen TIC A2 2010 interna";
 preguntaids[20] = 8109


//  Id pregunta: 5013 Año de creación de pregunta: 2002
 questions[21]= "22)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[21]= new Array();
 choices[21][0] = "El acceso telef&oacute;nico conmutado";
 choices[21][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[21][2] = "Utilizar l&iacute;neas privadas";
 choices[21][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[21] = 1;
 units[21] = ['113'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5013. ";
 preguntaids[21] = 5013


//  Id pregunta: 5112 Año de creación de pregunta: 2003
 questions[22]= "23)  &iquest;De qu&eacute; manera se puede balancear una granja de servidores?";
 choices[22]= new Array();
 choices[22][0] = "Se puede utilizar un balanceador hardware si hay comunicaci&oacute;n entre los nodos de la granja";
 choices[22][1] = "Se puede utilizar  un software cargado en cada nodo para repartir la carga entre los mismos";
 choices[22][2] = "Se puede hacer el balanceo con un balanceador hardware como con un balanceador software";
 choices[22][3] = "Ninguna de las respuestas es cierta";
 answers[22] = 2;
 units[22] = ['113'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5112. ";
 preguntaids[22] = 5112


//  Id pregunta: 9879 Año de creación de pregunta: 2015
 questions[23]= "24)  En una granja de servidores:";
 choices[23]= new Array();
 choices[23][0] = "Los servidores suelen estar en localizaciones distintas.";
 choices[23][1] = "Los servidores se reparten las tareas que podr&iacute;a ejecutar un solo servidor.";
 choices[23][2] = "Suelen haber equipos de respaldo (backup)";
 choices[23][3] = "Ninguna de las anteriores.";
 answers[23] = 2;
 units[23] = ['113'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9879. ";
 preguntaids[23] = 9879


//  Id pregunta: 4544 Año de creación de pregunta: 2002
 questions[24]= "25)  El entorno que utiliza un teletrabajador para conectarse con su empresa a trav&eacute;s de internet se denomina:";
 choices[24]= new Array();
 choices[24][0] = "intranet";
 choices[24][1] = "collaboration-net";
 choices[24][2] = "teleworking-net";
 choices[24][3] = "extranet";
 answers[24] = 3;
 units[24] = ['113'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4544. ";
 preguntaids[24] = 4544


//  Id pregunta: 5272 Año de creación de pregunta: 2006
 questions[25]= "26)  La red externa a la que se conecta el departamento de compras para comunicarse con sus proveedores se llama";
 choices[25]= new Array();
 choices[25][0] = "Intranet";
 choices[25][1] = "inter-intranet";
 choices[25][2] = "extranet abierta";
 choices[25][3] = "extranet";
 answers[25] = 3;
 units[25] = ['113'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5272. ";
 preguntaids[25] = 5272


//  Id pregunta: 5346 Año de creación de pregunta: 2006
 questions[26]= "27)  Que mecanismo proporciona seguridad a DNS";
 choices[26]= new Array();
 choices[26][0] = "Un par nombre/contrase&ntilde;a";
 choices[26][1] = "Un directorio TFTP";
 choices[26][2] = "Un nombre de dominio";
 choices[26][3] = "ninguna de las anteriores";
 answers[26] = 0;
 units[26] = ['113'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5346. ";
 preguntaids[26] = 5346


//  Id pregunta: 5273 Año de creación de pregunta: 2006
 questions[27]= "28)  &iquest;Es posible distribuir en una granja de servidores la l&oacute;gica de negocio de una empresa?";
 choices[27]= new Array();
 choices[27][0] = "Si utilizando .Net";
 choices[27][1] = "Si utilizando J2EE";
 choices[27][2] = "Si usando software libre";
 choices[27][3] = "todas las anteriores son ciertas";
 answers[27] = 3;
 units[27] = ['113'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5273. ";
 preguntaids[27] = 5273


//  Id pregunta: 5103 Año de creación de pregunta: 2004
 questions[28]= "29)  Qu&eacute; es falso respecto a XHTML";
 choices[28]= new Array();
 choices[28][0] = "Obliga a anidar las etiquetas adecuadamente";
 choices[28][1] = "Se adapta mejor a los navegadores m&aacute;s avanzados";
 choices[28][2] = "Obliga a encerrar entre comillas los valores de los atributos";
 choices[28][3] = "Cada documento tiene que especificar su tipo";
 answers[28] = 1;
 units[28] = ['113'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5103. ";
 preguntaids[28] = 5103


//  Id pregunta: 5327 Año de creación de pregunta: 2006
 questions[29]= "30)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[29]= new Array();
 choices[29][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[29][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[29][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[29][3] = "Barrido ICMP (ICMP Scanning)";
 answers[29] = 2;
 units[29] = ['113'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5327. ";
 preguntaids[29] = 5327


//  Id pregunta: 4721 Año de creación de pregunta: 2002
 questions[30]= "31)  Indicar cu&aacute;l de los siguientes equipos no deber&iacute;a colocarse en una DMZ:";
 choices[30]= new Array();
 choices[30][0] = "Bastion host";
 choices[30][1] = "Servidor Web";
 choices[30][2] = "Servidor FTP";
 choices[30][3] = "Servidor de aplicaciones";
 answers[30] = 3;
 units[30] = ['113'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4721. ";
 preguntaids[30] = 4721


//  Id pregunta: 6942 Año de creación de pregunta: 2010
 questions[31]= "32)  Indique, cu&aacute;l de los siguientes elementos no forma parte de una Intranet:";
 choices[31]= new Array();
 choices[31][0] = "Nomina del personal.";
 choices[31][1] = "Tabl&oacute;n de Anuncios.";
 choices[31][2] = "Motor de b&uacute;squeda de documentaci&oacute;n.";
 choices[31][3] = "Procesador de Textos.";
 answers[31] = 3;
 units[31] = ['113'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6942. ";
 preguntaids[31] = 6942


//  Id pregunta: 4687 Año de creación de pregunta: 2002
 questions[32]= "33)  El middleware puede definirse como un m&oacute;dulo intermedio que act&uacute;a como conductor entre dos m&oacute;dulos de software.  A este respecto, tambi&eacute;n se puede afirmar que:";
 choices[32]= new Array();
 choices[32][0] = "En una aplicaci&oacute;n cliente/servidor, el middleware permite independizar los procesos cliente y servidor";
 choices[32][1] = "La utilizaci&oacute;n del middleware en lugar de utilizar drectamente las APIs del sistema operativo, hace que en muchas ocasiones se pierda 'potencia'";
 choices[32][2] = "En t&eacute;minos de programaci&oacute;n orientada a objetos, el middleware identifica diferentes objetos y conoce las propiedades que tienen asociadas, por lo que puede responder a peticiones referentes a los mismos";
 choices[32][3] = "Todas las respuestas anteriores son correctas";
 answers[32] = 3;
 units[32] = ['113'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4687. ";
 preguntaids[32] = 4687


//  Id pregunta: 5275 Año de creación de pregunta: 2006
 questions[33]= "34)  El teletrabajo por parte de un empleado de una empresa requiere un acceso";
 choices[33]= new Array();
 choices[33][0] = "a trav&eacute;s de su extranet, con los mecanismos de seguridad adecuados";
 choices[33][1] = "a su DMZ";
 choices[33][2] = "a su intranet";
 choices[33][3] = "requiere el establecimiento de un servidor VPN en el hogar del empleado";
 answers[33] = 2;
 units[33] = ['113'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5275. ";
 preguntaids[33] = 5275


//  Id pregunta: 5277 Año de creación de pregunta: 2006
 questions[34]= "35)  El protocolo y puerto empleado para la transferencia de p&aacute;ginas web es";
 choices[34]= new Array();
 choices[34][0] = "html y 80";
 choices[34][1] = "http y 80";
 choices[34][2] = "http y 8080";
 choices[34][3] = "ftp y 80";
 answers[34] = 1;
 units[34] = ['113'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5277. ";
 preguntaids[34] = 5277


//  Id pregunta: 1812 Año de creación de pregunta: 2016
 questions[35]= "36)  Uno de los componentes de una granja de servidores son los monitores transaccionales que tienen como funci&oacute;n realizar la gesti&oacute;n de transacciones. Indique cu&aacute;l de las siguientes opciones es correcta como una de las partes que interviene en dicha gesti&oacute;n de transacciones:";
 choices[35]= new Array();
 choices[35][0] = "Gestor de aplicaci&oacute;n";
 choices[35][1] = "Gestor de servicio";
 choices[35][2] = "Gestor de registro";
 choices[35][3] = "Gestor de sesi&oacute;n";
 answers[35] = 2;
 units[35] = ['113'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1812. ";
 preguntaids[35] = 1812


//  Id pregunta: 5116 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Qu&eacute; significa aplicaciones de tres niveles en la arquitectura Cliente/Servidor?";
 choices[36]= new Array();
 choices[36][0] = "La l&oacute;gica de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de datos se pueden distribuir entre los m&uacute;ltiples procesadores de la red.";
 choices[36][1] = "Los servicios de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y el acceso a datos se ejecutan en la estaci&oacute;n cliente mientras que la base de datos est&aacute; situada f&iacute;sicamente en el servidor.";
 choices[36][2] = "La gesti&oacute;n de datos, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de presentaci&oacute;n se encuentran en el servidor mientras que los servicios de presentaci&oacute;n se hallan en el cliente.";
 choices[36][3] = "En una arquitectura Cliente/Servidor no existen aplicaciones a tres niveles.";
 answers[36] = 0;
 units[36] = ['113'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5116. ";
 preguntaids[36] = 5116


//  Id pregunta: 5270 Año de creación de pregunta: 2006
 questions[37]= "38)  &iquest;Qu&eacute; beneficios puede tener la distribuci&oacute;n del software en varias maquinas ?";
 choices[37]= new Array();
 choices[37][0] = "Normalmente no presenta beneficios pero en algunas ocasiones es necesario";
 choices[37][1] = "Nunca tiene beneficios";
 choices[37][2] = "Es m&aacute;s optimo que los sistemas SMP";
 choices[37][3] = "Mayor disponibilidad";
 answers[37] = 3;
 units[37] = ['113'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5270. ";
 preguntaids[37] = 5270


//  Id pregunta: 4925 Año de creación de pregunta: 2002
 questions[38]= "39)  La tecnolog&iacute;a PUSH permite:";
 choices[38]= new Array();
 choices[38][0] = "Proteger la informaci&oacute;n mediante cifrado de la misma";
 choices[38][1] = "Establecer una conexi&oacute;n con un ordenador remoto";
 choices[38][2] = "Encaminar los datagramas a su destino";
 choices[38][3] = "Envio de informacion del servidor al cliente, sin requerir petici&oacute;n expresa";
 answers[38] = 3;
 units[38] = ['113'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4925. ";
 preguntaids[38] = 4925


//  Id pregunta: 4420 Año de creación de pregunta: 2002
 questions[39]= "40)  La arquitectura Internet en tres capas diferencia:";
 choices[39]= new Array();
 choices[39][0] = "Nivel de presentaci&oacute;n, de aplicaci&oacute;n y de datos";
 choices[39][1] = "Nivel de navegador, de aplicaci&oacute;n y de datos";
 choices[39][2] = "Nivel de cliente, de servidor  y de navegador";
 choices[39][3] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;c&rsquo; son falsas";
 answers[39] = 0;
 units[39] = ['113'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4420. ";
 preguntaids[39] = 4420


//  Id pregunta: 4503 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes dispositivos permite a una Intranet, cuyas m&aacute;quinas tienen direcciones IP no legales, conectarse con Internet y hacerlo adem&aacute;s de forma selectiva seg&uacute;n una lista de URLs autorizadas?:";
 choices[40]= new Array();
 choices[40][0] = "Un servidor FTP";
 choices[40][1] = "Un servidor WEB";
 choices[40][2] = "Un router";
 choices[40][3] = "Un proxy";
 answers[40] = 3;
 units[40] = ['113'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4503. ";
 preguntaids[40] = 4503


//  Id pregunta: 6194 Año de creación de pregunta: 2003
 questions[41]= "42)  &iquest;Qu&eacute; son los servicios web?";
 choices[41]= new Array();
 choices[41][0] = "Son los servicios POST y GET de petici&oacute;n de datos mediante formlarios web bajo el protocolo de aplicaci&oacute;n de HTTP";
 choices[41][1] = "Son los servicios de petici&oacute;n de p&aacute;ginas atendidos por un servidor web";
 choices[41][2] = "Una soluci&oacute;n a los problemas de comunicaci&oacute;n entre aplicaciones en la inform&aacute;tica";
 choices[41][3] = "Son los servicios multimedia ofrecido por los nuevos portales web.";
 answers[41] = 2;
 units[41] = ['113'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6194. Examen TIC A Castilla La Mancha 2007";
 preguntaids[41] = 6194


