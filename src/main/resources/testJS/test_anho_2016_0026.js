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
//  Id pregunta: 1938 Año de creación de pregunta: 2016
 questions[0]= "1)  En el framework .NET, (_que c&oacute;digo se genera como salida del compilador just in time?";
 choices[0]= new Array();
 choices[0][0] = "Bytecode";
 choices[0][1] = "IL (intemediate language)";
 choices[0][2] = "C&oacute;digo m&aacute;quina";
 choices[0][3] = "C&oacute;digo ensamblador";
 answers[0] = 2;
 units[0] = ['63'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1938. ";
 preguntaids[0] = 1938


//  Id pregunta: 1911 Año de creación de pregunta: 2016
 questions[1]= "2)  En relaci&oacute;n a la direcci&oacute;n MAC, &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[1]= new Array();
 choices[1][0] = "La direcci&oacute;n MAC contiene el c&oacute;digo de fabricante de 24 bits";
 choices[1][1] = "La direcci&oacute;n MAC contiene el c&oacute;digo de identidad de red de 24 bits";
 choices[1][2] = "Es utilizada en el nivel de enlace de datos de la torre de protocolos OSI";
 choices[1][3] = "La direcci&oacute;n MAC contiene el c&oacute;diqo de serie que es elegido por cada fabricante a su discreci&oacute;n.";
 answers[1] = 1;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1911. ";
 preguntaids[1] = 1911


//  Id pregunta: 1912 Año de creación de pregunta: 2016
 questions[2]= "3)  En las redes de comunicaciones basadas en conmutaci&oacute;n de paquetes, la t&eacute;cnica de circuitos virtuales se caracteriza porque:";
 choices[2]= new Array();
 choices[2][0] = "Cada paquete se transporta de forma independiente sin referencia a los precedentes";
 choices[2][1] = "La ruta de origen a destino puede ser diferente, pero los paquetes llegan en orden";
 choices[2][2] = "Se dispone de un circuito dedicado";
 choices[2][3] = "La ruta es para toda la comunicaci&oacute;n";
 answers[2] = 3;
 units[2] = ['102'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1912. ";
 preguntaids[2] = 1912


//  Id pregunta: 1930 Año de creación de pregunta: 2016
 questions[3]= "4)  En el modelo referencial, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[3]= new Array();
 choices[3][0] = "Que todos los datos est&aacute;n referenciados por su clave y &eacute;sta que sea &uacute;nica.";
 choices[3][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[3][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias.";
 choices[3][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[3] = 1;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1930. ";
 preguntaids[3] = 1930


//  Id pregunta: 1940 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativos escritos en otros lenguajes?";
 choices[4]= new Array();
 choices[4][0] = "RMI";
 choices[4][1] = "JAXP";
 choices[4][2] = "JNOI";
 choices[4][3] = "JNI";
 answers[4] = 3;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1940. ";
 preguntaids[4] = 1940


//  Id pregunta: 1928 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;En qu&eacute; consiste el esquema de paralelizaci&oacute;n SIMD?";
 choices[5]= new Array();
 choices[5][0] = "Los procesadores pueden ejecutar diferentes instrucciones.";
 choices[5][1] = "Los procesadores trabajan sobre diferentes conjuntos de datos.";
 choices[5][2] = "Los procesadores pueden ejecutar diferentes instrucciones y trabajan sobre diferentes conjuntos de datos.";
 choices[5][3] = "Los procesadores trabajan sobre el mismo conjunto de datos.";
 answers[5] = 1;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1928. ";
 preguntaids[5] = 1928


//  Id pregunta: 1881 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la recomendaci&oacute;n X.509 v3:";
 choices[6]= new Array();
 choices[6][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[6][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[6][2] = "Para su validez, los certificados de atributos deben contener un certificado de clave p&uacute;blica.";
 choices[6][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[6] = 2;
 units[6] = ['77'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1881. ";
 preguntaids[6] = 1881


//  Id pregunta: 1929 Año de creación de pregunta: 2016
 questions[7]= "8)  EI m&oacute;dulo de un Sistema de Gesti&oacute;n de Base Datos que controla que las operaciones satisfagan las restricciones de integridad es:";
 choices[7]= new Array();
 choices[7][0] = "Procesador de consultas.";
 choices[7][1] = "Compilador del Lenguaje de Definici&oacute;n de Datos.";
 choices[7][2] = "Gestor del diccionario.";
 choices[7][3] = "Gestor de la base de datos.";
 answers[7] = 3;
 units[7] = ['60'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1929. ";
 preguntaids[7] = 1929


//  Id pregunta: 1945 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;De las siguientes cuestiones sobre Ingenier&iacute;a del conocimiento indique cual es FALSA:";
 choices[8]= new Array();
 choices[8][0] = "EI conocimiento puede representarse de forma procedimental.";
 choices[8][1] = "Un sistema experto tiene dos componentes: la base de conocimiento y el motor de inferencia.";
 choices[8][2] = "Mediante lenguajes de prop&oacute;sito general como C o Java podemos construir Sistemas Expertos.";
 choices[8][3] = "Un marco representa un conjunto de conceptos relacionados.";
 answers[8] = 3;
 units[8] = ['68'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1945. ";
 preguntaids[8] = 1945


//  Id pregunta: 1884 Año de creación de pregunta: 2016
 questions[9]= "10)  Cuando se dispone de una tarjeta criptogr&aacute;fica para almacenar la clave privada, &iquest;Cu&aacute;l es el procedimiento m&aacute;s usual para firmar un documento?:";
 choices[9]= new Array();
 choices[9][0] = "Se transfiere a la tarjeta un &quot;hash&quot; del documento a firmar y esta devuelve la firma";
 choices[9][1] = "Se transfiere a la tarjeta el documento a firmar y esta devuelve la firma";
 choices[9][2] = "EI explorador de Internet calcula un &quot;hash&quot; del documento a firmar, obtiene la clave privada de la tarjeta y cifra el &quot;hash&quot; con ella.";
 choices[9][3] = "EI explorador de Internet obtiene la clave privada de la tarjeta, y firma el documento directamente.";
 answers[9] = 0;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1884. ";
 preguntaids[9] = 1884


//  Id pregunta: 1883 Año de creación de pregunta: 2016
 questions[10]= "11)  EI Documento Nacional de Identidad electr&oacute;nico:";
 choices[10]= new Array();
 choices[10][0] = "Acredita electr&oacute;nicamente la identidad personal de su titular y permite la firma electr&oacute;nica de documentos";
 choices[10][1] = "S&oacute;lo se podr&aacute; utilizar para acreditar la identidad de su titular";
 choices[10][2] = "Permitir&aacute; acreditar la identidad de las personas f&iacute;sicas o jur&iacute;dicas";
 choices[10][3] = "Puede almacenar informaci&oacute;n penal y sanitario del titular.";
 answers[10] = 0;
 units[10] = ['78'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1883. ";
 preguntaids[10] = 1883


//  Id pregunta: 1935 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; instrucci&oacute;n SQL se utiliza para extraer informaci&oacute;n de la Base de Datos?";
 choices[11]= new Array();
 choices[11][0] = "GET.";
 choices[11][1] = "EXPORT.";
 choices[11][2] = "SELECT.";
 choices[11][3] = "QUERY.";
 answers[11] = 2;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1935. ";
 preguntaids[11] = 1935


//  Id pregunta: 1937 Año de creación de pregunta: 2016
 questions[12]= "13)  De las siguientes cuestiones de la arquitectura .NET indique cual es FALSA.";
 choices[12]= new Array();
 choices[12][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[12][1] = "Las clases ADO.NET permiten acceder a datos.";
 choices[12][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la plataforma.";
 choices[12][3] = "En la arquitectura .NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n";
 answers[12] = 2;
 units[12] = ['63'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1937. ";
 preguntaids[12] = 1937


//  Id pregunta: 1941 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; caracter&iacute;sticas tiene el software libre cubierto por la GPL de GNU?";
 choices[13]= new Array();
 choices[13][0] = "Su usa, redistribuci&oacute;n o modificaci&oacute;n est&aacute;n prohibidos, requieren que se solicite una autorizaci&oacute;n.";
 choices[13][1] = "Se convierte en freeware, paquetes que se pueden distribuir pero no modificar.";
 choices[13][2] = "Se puede usar con cualquier prop6sito, adaptarlo a las necesidades, mejorar el programa, distribuir copias y est&aacute; protegido con copylet.";
 choices[13][3] = "Se puede usar con cualquier prop6sito, adaptarlo a las necesidades, mejorar el programa y a partir de aqu&iacute; ya puede ser software privativo.";
 answers[13] = 2;
 units[13] = ['66'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1941. ";
 preguntaids[13] = 1941


//  Id pregunta: 1914 Año de creación de pregunta: 2016
 questions[14]= "15)  EI protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian trance es:";
 choices[14]= new Array();
 choices[14][0] = "OSPF";
 choices[14][1] = "No es adecuado utilizar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas";
 choices[14][2] = "RIP";
 choices[14][3] = "BGP-4";
 answers[14] = 3;
 units[14] = ['102'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1914. ";
 preguntaids[14] = 1914


//  Id pregunta: 1932 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n correcta acerca de La Forma Normal de Boyce-Codd (FNBC):";
 choices[15]= new Array();
 choices[15][0] = "Requiere que existan dependencias funcionales no triviales de los atributos que no sean un conjunto de la clave candidata.";
 choices[15][1] = "Es una versi&oacute;n ligeramente menos fuerte que la 3FN (Tercera Forma Normal).";
 choices[15][2] = "Una relaci&oacute;n esta en FNBC si esta en 3FN y solo si, todo determinante es una clave candidata.";
 choices[15][3] = "Es una versi&oacute;n ligeramente menos fuerte que la 2FN (Segunda Forma Normal).";
 answers[15] = 2;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1932. ";
 preguntaids[15] = 1932


//  Id pregunta: 1897 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; sistema de RAID proporciona protecci&oacute;n contra fallos dobles de discos y contra fallos cuando se est&aacute; reconstruyendo un disco?:";
 choices[16]= new Array();
 choices[16][0] = "RAI3";
 choices[16][1] = "RAI5";
 choices[16][2] = "RAI6";
 choices[16][3] = "RAID 0+1";
 answers[16] = 2;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1897. ";
 preguntaids[16] = 1897


//  Id pregunta: 1901 Año de creación de pregunta: 2016
 questions[17]= "18)  EI cableado estructurado de categor&iacute;a 5e:";
 choices[17]= new Array();
 choices[17][0] = "Permite transmisiones a velocidades 1OGbit Ethernet";
 choices[17][1] = "Solo es posible utilizarlo en comunicaciones full-duplex";
 choices[17][2] = "A diferencia de la categor&iacute;a 5, permite la transmisi&oacute;n de paquetes VolP";
 choices[17][3] = "Est&aacute; estandarizado por la norma TIAIEIA-568-B";
 answers[17] = 3;
 units[17] = ['104'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1901. ";
 preguntaids[17] = 1901


//  Id pregunta: 1910 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[18]= new Array();
 choices[18][0] = "Paquete Unicast es un paquete de datos dirigido a una &uacute;nica estaci&oacute;n";
 choices[18][1] = "Paquete Multicast es un paquete de datos dirigido a un grupo de estaciones, seleccion&aacute;ndose la interfaz m&aacute;s cercana";
 choices[18][2] = "Paquete Broadcast es un paquete de datos dirigido a todas y cada una de las estaciones del segmento local";
 choices[18][3] = "Paquete Anycast es un paquete dirigido a un grupo de estaciones, con la diferencia en que se selecciona una de estas estaciones para ser la destinataria de la informaci&oacute;n";
 answers[18] = 1;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1910. ";
 preguntaids[18] = 1910


//  Id pregunta: 1933 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cuantas son las reglas que seg&uacute;n Codd debe cumplir un sistema verdaderamente relacional?";
 choices[19]= new Array();
 choices[19][0] = "Cinco.";
 choices[19][1] = "Doce.";
 choices[19][2] = "Cuatro.";
 choices[19][3] = "Tres.";
 answers[19] = 1;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1933. ";
 preguntaids[19] = 1933


//  Id pregunta: 1924 Año de creación de pregunta: 2016
 questions[20]= "21)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[20]= new Array();
 choices[20][0] = "Conseguir informaci&oacute;n sobre los h&aacute;bitos de navegaci&oacute;n del usuario";
 choices[20][1] = "Enviar c6digo embebido en la pagina HTML que se ejecutara en el cliente";
 choices[20][2] = "La generaci&oacute;n de Pop-ups";
 choices[20][3] = "Contienen tanto c&oacute;digo como datos";
 answers[20] = 0;
 units[20] = ['74'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1924. ";
 preguntaids[20] = 1924


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


//  Id pregunta: 1917 Año de creación de pregunta: 2016
 questions[22]= "23)  En relaci&oacute;n con el protocolo SMTP, &iquest;Cu&aacute;l de las siguientes aseveraciones se cumple?:";
 choices[22]= new Array();
 choices[22][0] = "Para leer correo de entrada y componer correo de salida los usuarios utilizan clientes SMTP";
 choices[22][1] = "SMTP es un protocolo no compatible con IPv6";
 choices[22][2] = "Los anfitriones externos, servidores de correo, se ponen en contacto con los anfitriones internos, servidores de correo, a trav&eacute;s de SMTP";
 choices[22][3] = "SMTP es un protocolo de capa de nivel de sesi&oacute;n.";
 answers[22] = 2;
 units[22] = ['116'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1917. ";
 preguntaids[22] = 1917


//  Id pregunta: 1947 Año de creación de pregunta: 2016
 questions[23]= "24)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &quot;duplicaciones&quot; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[23]= new Array();
 choices[23][0] = "Data Marts";
 choices[23][1] = "Metadata";
 choices[23][2] = "Middleware";
 choices[23][3] = "DataWare";
 answers[23] = 0;
 units[23] = ['72'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1947. ";
 preguntaids[23] = 1947


//  Id pregunta: 1887 Año de creación de pregunta: 2016
 questions[24]= "25)  Cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[24]= new Array();
 choices[24][0] = "IPSEC es utilizada para el establecimiento de t&uacute;neles seguros a trav&eacute;s de Internet";
 choices[24][1] = "IPSEC se comporta igual con Ipv4 que con Ipv6";
 choices[24][2] = "Con IPSEC se garantiza la integridad y la autenticidad, siendo la confidencialidad opcional";
 choices[24][3] = "Cada conexi&oacute;n con IPSEC requiere de dos SA para que sea bidireccional";
 answers[24] = 1;
 units[24] = ['119'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1887. ";
 preguntaids[24] = 1887


//  Id pregunta: 1875 Año de creación de pregunta: 2016
 questions[25]= "26)  Cu&aacute;l es el uso m&aacute;s generalizado de las funciones irreversibles tipo HASH:";
 choices[25]= new Array();
 choices[25][0] = "Para cifrar y descifrar mensajes";
 choices[25][1] = "Para firma electr&oacute;nica";
 choices[25][2] = "Para garantizar la confidencialidad";
 choices[25][3] = "Para encriptar mensajes";
 answers[25] = 1;
 units[25] = ['76'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1875. ";
 preguntaids[25] = 1875


//  Id pregunta: 1908 Año de creación de pregunta: 2016
 questions[26]= "27)  En relaci&oacute;n al protocolo 802.1 Q usado para utilizar de forma transparente el mismo medio f&iacute;sico por m&uacute;ltiples redes, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[26]= new Array();
 choices[26][0] = "Encapsula la trama original";
 choices[26][1] = "A&ntilde;ade nuevos bytes a la cabecera";
 choices[26][2] = "Para establecer un trunking 802.1 q a ambos lados debemos tener la misma VLAN nativa";
 choices[26][3] = "Se precisa realizar un rec&aacute;lculo del campo &quot;FCS&quot;";
 answers[26] = 0;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1908. ";
 preguntaids[26] = 1908


//  Id pregunta: 1907 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[27]= new Array();
 choices[27][0] = "La direcci&oacute;n MAC del Router";
 choices[27][1] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destine";
 choices[27][2] = "La direcci&oacute;n IP del sistema final destine";
 choices[27][3] = "La direcci&oacute;n MAC del sistema final destino";
 answers[27] = 0;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1907. ";
 preguntaids[27] = 1907


//  Id pregunta: 1915 Año de creación de pregunta: 2016
 questions[28]= "29)  En relaci&oacute;n al protocolo OSPF";
 choices[28]= new Array();
 choices[28][0] = "Presenta como gran inconveniente el elevado tiempo de convergencia";
 choices[28][1] = "Es un protocolo de tipo vector distancia";
 choices[28][2] = "Solo env&iacute;a actualizaciones cuando hay cambios de topolog&iacute;a.";
 choices[28][3] = "Es un protocolo de rutas est&aacute;ticas";
 answers[28] = 2;
 units[28] = ['102'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1915. ";
 preguntaids[28] = 1915


//  Id pregunta: 1902 Año de creación de pregunta: 2016
 questions[29]= "30)  Para limitar el impacto negativo del tr&aacute;fico de broadcast, &iquest;Cu&aacute;l de las siguientes medidas NO es v&aacute;lida?:";
 choices[29]= new Array();
 choices[29][0] = "Dividir la red en subredes";
 choices[29][1] = "Implementar dispositivos de capa 3 para la comunicaci&oacute;n entre subredes";
 choices[29][2] = "Dividir la red en VLANs";
 choices[29][3] = "Sustituir Concentrador (hub) por conmutadores (switch)";
 answers[29] = 3;
 units[29] = ['102'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1902. ";
 preguntaids[29] = 1902


//  Id pregunta: 1943 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes componentes forman parte de la suite ofim&aacute;tica libre OpenOffice.org?";
 choices[30]= new Array();
 choices[30][0] = "Todos los mencionados a continuaci&oacute;n.";
 choices[30][1] = "Base.";
 choices[30][2] = "Writer.";
 choices[30][3] = "Math";
 answers[30] = 0;
 units[30] = ['66'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1943. ";
 preguntaids[30] = 1943


//  Id pregunta: 1922 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; sentencia de las siguientes es correcta?:";
 choices[31]= new Array();
 choices[31][0] = "Con SSL las cabeceras IP y del nivel de transporte (TCP y UDP) son cifradas y por tanto no accesibles desde la red";
 choices[31][1] = "SSL utiliza &uacute;nicamente sistemas de clave p&uacute;blica para cifrar";
 choices[31][2] = "Para utilizar SSL los routers tienen que ser compatibles con SSL";
 choices[31][3] = "EI servidor en una sesi&oacute;n SSL no tiene por que estar siempre autenticado";
 answers[31] = 3;
 units[31] = ['120'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1922. ";
 preguntaids[31] = 1922


//  Id pregunta: 1878 Año de creación de pregunta: 2016
 questions[32]= "33)  EI sistema Kerberos de autenticaci&oacute;n y de distribuci&oacute;n de claves de sesi&oacute;n requiere:";
 choices[32]= new Array();
 choices[32][0] = "La existencia de una tercera entidad de confianza centralizada";
 choices[32][1] = "Que cada usuario tenga un par de claves reconocidas: la p&uacute;blica y la privada";
 choices[32][2] = "La existencia de una red de conexi&oacute;n interna total mente segura.";
 choices[32][3] = "Que cada servidor de aplicaciones mantenga claves secretas compartidas con todos los usuarios que Ie puedan solicitar servicios.";
 answers[32] = 0;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1878. ";
 preguntaids[32] = 1878


//  Id pregunta: 1880 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, en relaci&oacute;n con las Listas de Certificados Revocados (CRL), &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[33]= new Array();
 choices[33][0] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[33][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[33][2] = "Deben actualizarse al menos una vez a la semana.";
 choices[33][3] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 answers[33] = 0;
 units[33] = ['77'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1880. ";
 preguntaids[33] = 1880


//  Id pregunta: 1934 Año de creación de pregunta: 2016
 questions[34]= "35)  El lenguaje de consulta SQL utiliza el comando &quot;GRANT&quot; para:";
 choices[34]= new Array();
 choices[34][0] = "Eliminar una tabla de datos.";
 choices[34][1] = "Dar derechos de acceso a un usuario sobre un objeto de la base de datos.";
 choices[34][2] = "Comparar 16gicamente la condici&oacute;n &quot;mayor que&quot; en dos variables.";
 choices[34][3] = "Crear una vista.";
 answers[34] = 1;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1934. ";
 preguntaids[34] = 1934


//  Id pregunta: 1896 Año de creación de pregunta: 2016
 questions[35]= "36)  En relaci&oacute;n a la norma ISO 9004 &iquest;Qu&eacute; aseveraci&oacute;n es FALSA?:";
 choices[35]= new Array();
 choices[35][0] = "No es certificable";
 choices[35][1] = "Contiene las directrices para la mejora continua del desempe&ntilde;o";
 choices[35][2] = "Est&aacute; basada en un enfoque de procesos";
 choices[35][3] = "Garantiza la gesti&oacute;n de la calidad de los productos";
 answers[35] = 3;
 units[35] = ['98'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 1896. ";
 preguntaids[35] = 1896


//  Id pregunta: 1946 Año de creación de pregunta: 2016
 questions[36]= "37)  Las herramientas de miner&iacute;a de datos:";
 choices[36]= new Array();
 choices[36][0] = "Se utilizan en entornos altamente transaccionales.";
 choices[36][1] = "Emplean m&eacute;todos de b&uacute;squeda por asociaciones, secuencias, clasificaciones, pron&oacute;sticos, y/o agrupamientos.";
 choices[36][2] = "Trabajan exclusivamente con bases de datos Oracle y Adabas.";
 choices[36][3] = "Se denominan tambi&eacute;n sistemas OLTP.";
 answers[36] = 1;
 units[36] = ['72'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1946. ";
 preguntaids[36] = 1946


//  Id pregunta: 1892 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique cual de las siguientes alternativas corresponde a los procesos de Desarrollo de Sistemas de Informaci&oacute;n dentro de la metodolog&iacute;a M&eacute;trica v3:";
 choices[37]= new Array();
 choices[37][0] = "Estudio de Viabilidad del Sistema, Construcci&oacute;n del Sistema de Informaci&oacute;n, Mantenimiento del Sistema de Informaci&oacute;n";
 choices[37][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n, Construcci&oacute;n del Sistema de Informaci&oacute;n, Mantenimiento del Sistema de Informaci&oacute;n";
 choices[37][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n, Construcci&oacute;n del Sistema de Informaci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[37][3] = "Estudio de Viabilidad del Sistema, An&aacute;lisis del Sistema de Informaci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[37] = 3;
 units[37] = ['91'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 1892. ";
 preguntaids[37] = 1892


//  Id pregunta: 1948 Año de creación de pregunta: 2016
 questions[38]= "39)  EI desarrollo de software basado en componentes:";
 choices[38]= new Array();
 choices[38][0] = "Reutiliza software ya existente";
 choices[38][1] = "Es el utilizado en el prototipado evolutivo";
 choices[38][2] = "Convierte automaticamente una especificaci&oacute;n formal en un programa";
 choices[38][3] = "Ninguna de las respuestas anteriores es valida";
 answers[38] = 0;
 units[38] = ['83'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 1948. ";
 preguntaids[38] = 1948


//  Id pregunta: 1898 Año de creación de pregunta: 2016
 questions[39]= "40)  Para un sistema de almacenamiento de cien unidades de disco, &iquest;Cu&aacute;l de los siguientes ofrece mayor capacidad neta de almacenamiento?: .";
 choices[39]= new Array();
 choices[39][0] = "RAI1";
 choices[39][1] = "RAI5";
 choices[39][2] = "RAI6";
 choices[39][3] = "RAID 0+1";
 answers[39] = 1;
 units[39] = ['53'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1898. ";
 preguntaids[39] = 1898


//  Id pregunta: 1882 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos:";
 choices[40]= new Array();
 choices[40][0] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita en relaci&oacute;n con los datos consignados en papel.";
 choices[40][1] = "Tienen una validez de 6 anos como m&aacute;ximo";
 choices[40][2] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[40][3] = "Solo son validos para las personas jur&iacute;dicas.";
 answers[40] = 2;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1882. ";
 preguntaids[40] = 1882


//  Id pregunta: 1899 Año de creación de pregunta: 2016
 questions[41]= "42)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia completa, sin marcarlos individualmente como copiados, es una copia de seguridad:";
 choices[41]= new Array();
 choices[41][0] = "Acumulativa";
 choices[41][1] = "Intermedia";
 choices[41][2] = "Incremental";
 choices[41][3] = "Diferencial";
 answers[41] = 3;
 units[41] = ['53'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1899. ";
 preguntaids[41] = 1899


//  Id pregunta: 1920 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; funci&oacute;n realiza el splitter en la conexi&oacute;n ADSL?";
 choices[42]= new Array();
 choices[42][0] = "Para discriminar dos bandas de frecuencias";
 choices[42][1] = "Para ecualizar la se&ntilde;al vocal";
 choices[42][2] = "EI splitter solo se utiliza en las conexiones HDSL";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 0;
 units[42] = ['106'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1920. ";
 preguntaids[42] = 1920


//  Id pregunta: 1939 Año de creación de pregunta: 2016
 questions[43]= "44)  JDBC es:";
 choices[43]= new Array();
 choices[43][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&Iacute;a ODBC.";
 choices[43][1] = "Un API (Application Programming Interface) que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[43][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet.";
 choices[43][3] = "EI est&aacute;ndar ODBC para bases de datos relacionales.";
 answers[43] = 1;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 1939. ";
 preguntaids[43] = 1939


//  Id pregunta: 1942 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[44]= new Array();
 choices[44][0] = "Internet Information Server";
 choices[44][1] = "Weblogic";
 choices[44][2] = "Websphere";
 choices[44][3] = "Apache";
 answers[44] = 3;
 units[44] = ['66'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1942. ";
 preguntaids[44] = 1942


//  Id pregunta: 1927 Año de creación de pregunta: 2016
 questions[45]= "46)  La funci&oacute;n de un planificador en sistemas de altas prestaciones es:";
 choices[45]= new Array();
 choices[45][0] = "Contabilizar el tiempo consumido por cada proceso.";
 choices[45][1] = "Seleccionar trabajos en funci&oacute;n de su prioridad.";
 choices[45][2] = "Realizar cambios de contexto de los procesos.";
 choices[45][3] = "Asignar la cuota de tiempo de c&aacute;lculo (walltime).";
 answers[45] = 1;
 units[45] = ['49'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1927. ";
 preguntaids[45] = 1927


//  Id pregunta: 1926 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;les de las siguientes NO es una caracter&iacute;stica esencial de los sistemas de altas prestaciones?";
 choices[46]= new Array();
 choices[46][0] = "Arquitectura altamente paralela.";
 choices[46][1] = "Gran capacidad de compute.";
 choices[46][2] = "Tiempo compartido.";
 choices[46][3] = "Elevado coste.";
 answers[46] = 2;
 units[46] = ['49'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1926. ";
 preguntaids[46] = 1926


//  Id pregunta: 1885 Año de creación de pregunta: 2016
 questions[47]= "48)  En el contexto de seguridad en redes, que se entiende por cortatuegos:";
 choices[47]= new Array();
 choices[47][0] = "Un sistema que separa, en cuanto a seguridad se refiere, una m&aacute;quina o sub red del resto";
 choices[47][1] = "Es un programa que se instala en un anfitri&oacute;n de la red interna para proteger los accesos a la misma.";
 choices[47][2] = "Es un sistema que se instala en la red externa para controlar los accesos a la red interna";
 choices[47][3] = "Es software o dispositivo que realiza una acci&oacute;n en representaci&oacute;n de otro, garantizado as! su seguridad.";
 answers[47] = 0;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1885. ";
 preguntaids[47] = 1885


//  Id pregunta: 1893 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n METRICA version 3, el proceso MSI (Mantenimiento de Sistemas de Informaci&oacute;n) solo incluye los mantenimientos:";
 choices[48]= new Array();
 choices[48][0] = "Mantenimiento correctivo y evolutivo";
 choices[48][1] = "Mantenimiento evolutivo y adaptativo";
 choices[48][2] = "Mantenimiento adaptativo y perfectivo";
 choices[48][3] = "Mantenimiento perfectivo y correctivo";
 answers[48] = 0;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 1893. ";
 preguntaids[48] = 1893


//  Id pregunta: 1877 Año de creación de pregunta: 2016
 questions[49]= "50)  Los algoritmos de clave sim&eacute;trica:";
 choices[49]= new Array();
 choices[49][0] = "Disponen de un par de claves p&uacute;blica/privada";
 choices[49][1] = "Son menos eficientes que los de clave asim&eacute;trica";
 choices[49][2] = "Se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[49][3] = "Tienen una alta velocidad de cifrado y descifrado";
 answers[49] = 3;
 units[49] = ['76'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1877. ";
 preguntaids[49] = 1877


//  Id pregunta: 1921 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;a qu&eacute; clase corresponde la direcci&oacute;n IP 26.11 0.4.65?";
 choices[50]= new Array();
 choices[50][0] = "A";
 choices[50][1] = "B";
 choices[50][2] = "C";
 choices[50][3] = "Ninguna de las anteriores es correcta.";
 answers[50] = 0;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 1921. ";
 preguntaids[50] = 1921


//  Id pregunta: 1949 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes NO es una metodolog&iacute;a de desarrollo de sistemas";
 choices[51]= new Array();
 choices[51][0] = "Blister";
 choices[51][1] = "Yourdon-Coad.";
 choices[51][2] = "Berard.";
 choices[51][3] = "Martin y Odell.";
 answers[51] = 0;
 units[51] = ['84'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 1949. ";
 preguntaids[51] = 1949


//  Id pregunta: 1905 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes protocolos no se ejecuta en el nivel de aplicaci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "RIP, Protocolo de informaci&oacute;n de enrutamiento";
 choices[52][1] = "NFS, sistema de archivos de red";
 choices[52][2] = "ARP, protocolo de resoluci&oacute;n de direcciones";
 choices[52][3] = "FTP, Protocolo de transferencia de Ficheros";
 answers[52] = 2;
 units[52] = ['102'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1905. ";
 preguntaids[52] = 1905


//  Id pregunta: 1936 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale como se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET:";
 choices[53]= new Array();
 choices[53][0] = "CLS";
 choices[53][1] = "MSIL";
 choices[53][2] = "Bytecode";
 choices[53][3] = "JIT";
 answers[53] = 0;
 units[53] = ['63'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1936. ";
 preguntaids[53] = 1936


//  Id pregunta: 1889 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es la mejor definici&oacute;n para el concepto de Benchmarking?";
 choices[54]= new Array();
 choices[54][0] = "Proceso para evaluar comparativamente los productos, servicios y procesos de trabajo en organizaciones";
 choices[54][1] = "Procedimiento para la comparaci&oacute;n de precios de los servicios prestados por las organizaciones";
 choices[54][2] = "Proceso para el establecimiento de objetivos de control en el manejo y uso de las TIC";
 choices[54][3] = "Procedimientos para proporcionar la informaci&oacute;n que la empresa requiere para lograr sus objetivos";
 answers[54] = 0;
 units[54] = ['39'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 1889. ";
 preguntaids[54] = 1889


//  Id pregunta: 1891 Año de creación de pregunta: 2016
 questions[55]= "56)  En relaci&oacute;n con las metodolog&iacute;as ligeras de desarrollo de software, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[55]= new Array();
 choices[55][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas";
 choices[55][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio";
 choices[55][2] = "La versi&oacute;n 3 de M&eacute;trica, que soporta tanto desarrollos estructurados como orientado a objetos, es un claro ejemplo de metodolog&iacute;a ligera";
 choices[55][3] = "La metodolog&Iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a ligera";
 answers[55] = 0;
 units[55] = ['84'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1891. ";
 preguntaids[55] = 1891


//  Id pregunta: 1904 Año de creación de pregunta: 2016
 questions[56]= "57)  En el contexto de TCP/IP, &iquest;qu&eacute; se entiende por encapsulamiento?";
 choices[56]= new Array();
 choices[56][0] = "La partici&oacute;n del paquete a enviar en trozos acordes con la Unidad Maxima de Transferencia que soporta la red por la que se va a enviar";
 choices[56][1] = "EI cifrado de las direcciones IP de origen y destino";
 choices[56][2] = "La adici&oacute;n de informaci&oacute;n de control en cada nivel antes de pasarla al nivel inferior.";
 choices[56][3] = "La encriptaci&oacute;n de los octetos de informaci&oacute;n de los paquetes IP.";
 answers[56] = 2;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1904. ";
 preguntaids[56] = 1904


//  Id pregunta: 1923 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes organismos de Internet gestiona la definici&oacute;n de pol&iacute;ticas para la asignaci&oacute;n de nombres simb&oacute;licos o dominios en Internet?:";
 choices[57]= new Array();
 choices[57][0] = "lANA";
 choices[57][1] = "ICANN";
 choices[57][2] = "RIPE";
 choices[57][3] = "IETF";
 answers[57] = 0;
 units[57] = ['103'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1923. ";
 preguntaids[57] = 1923


//  Id pregunta: 1900 Año de creación de pregunta: 2016
 questions[58]= "59)  Los cables de fibra &oacute;ptica utilizados en entornos WAN en enlaces de larga distancia:";
 choices[58]= new Array();
 choices[58][0] = "Suelen ser de tipo multimodo ya que permite transmitir varios haces de luz,";
 choices[58][1] = "Suelen ser de tipo monomodo por la mayor robustez de la libra";
 choices[58][2] = "Suelen ser de tipo monomodo per su menor atenuaci&oacute;n";
 choices[58][3] = "Suelen ser de tipo multimodo por su menor atenuaci&oacute;n";
 answers[58] = 2;
 units[58] = ['104'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1900. ";
 preguntaids[58] = 1900


//  Id pregunta: 1916 Año de creación de pregunta: 2016
 questions[59]= "60)  En relaci&oacute;n al protocolo OSPF, &iquest;cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[59]= new Array();
 choices[59][0] = "Divide el &aacute;rea en sistemas aut&oacute;nomos";
 choices[59][1] = "Es un protocolo jer&aacute;rquico";
 choices[59][2] = "Es un protocolo de pasarela interne";
 choices[59][3] = "Es un protocolo din&aacute;mico";
 answers[59] = 0;
 units[59] = ['102'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 1916. ";
 preguntaids[59] = 1916


//  Id pregunta: 1890 Año de creación de pregunta: 2016
 questions[60]= "61)  Se ha decidido establecer un Centro de Atenci&oacute;n de Usuarios (CAU) en la organizaci&oacute;n para atender las necesidades de los usuarios en cuanto a nuevas peticiones y problemas. &iquest;Que NO corresponde a los principios que deben regir dicho CAU?:";
 choices[60]= new Array();
 choices[60][0] = "Documentar las soluciones dadas a las incidencias creadas";
 choices[60][1] = "Generar una base de datos del conocimiento";
 choices[60][2] = "Disponer de un punto de contacto &uacute;nico al usuario final";
 choices[60][3] = "Detectar necesidades de los usuarios";
 answers[60] = 3;
 units[60] = ['101'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 1890. ";
 preguntaids[60] = 1890


//  Id pregunta: 1913 Año de creación de pregunta: 2016
 questions[61]= "62)  Con respecto a la tecnolog&iacute;a de Jerarqu&iacute;a Digital S&iacute;ncrona (SDH/JDS) &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[61]= new Array();
 choices[61][0] = "Las tramas tributarias de las se&ntilde;ales de I&iacute;nea pueden ser subdivididas para acomodar cargas plesi&oacute;cronas, trafico ATM o unidades de menor orden. Esto supone mezclar trance de distinto tipo dando lugar a redes flexibles.";
 choices[61][1] = "EI procesamiento de la serial se lleva a cabo a nivel de STM-1, con lo que las se&ntilde;ales de velocidades superiores son s&iacute;ncronas entre s&iacute;, y est&aacute;n en fase per ser generadas localmente por cada nodo la red";
 choices[61][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[61][3] = "No sirven para transportar trance de tipo IP";
 answers[61] = 3;
 units[61] = ['107'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1913. ";
 preguntaids[61] = 1913


//  Id pregunta: 1931 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale cual de los siguientes niveles NO existe en la definici&oacute;n de niveles de la arquitectura est&aacute;ndar de los SGBD. ANSI1X3/SPARC:";
 choices[62]= new Array();
 choices[62][0] = "Nivel relacional.";
 choices[62][1] = "Nivel conceptual";
 choices[62][2] = "Nivel externo.";
 choices[62][3] = "Nivel interno.";
 answers[62] = 0;
 units[62] = ['61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 1931. ";
 preguntaids[62] = 1931


//  Id pregunta: 1886 Año de creación de pregunta: 2016
 questions[63]= "64)  En criptograf&iacute;a asim&eacute;trica, con que clave cifra un usuario un documento:";
 choices[63]= new Array();
 choices[63][0] = "Con su propia clave privada";
 choices[63][1] = "Con su propia clave p&uacute;blica";
 choices[63][2] = "Con la clave privada del destinatario";
 choices[63][3] = "Con la clave p&uacute;blica del destinatario";
 answers[63] = 3;
 units[63] = ['76'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1886. ";
 preguntaids[63] = 1886


//  Id pregunta: 1906 Año de creación de pregunta: 2016
 questions[64]= "65)  A que se denomina Jitter en una red de comunicaciones sobre la que se soporta VoIP?";
 choices[64]= new Array();
 choices[64][0] = "AI retardo m&aacute;ximo de un paquete IP en una red de comunicaciones";
 choices[64][1] = "A la variaci&oacute;n del retardo de los paquetes en una red de comunicaciones";
 choices[64][2] = "A la supresi&oacute;n de los silencios mediante la no transmisi&oacute;n de paquetes.";
 choices[64][3] = "Ninguno de los anteriores";
 answers[64] = 1;
 units[64] = ['122'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1906. ";
 preguntaids[64] = 1906


//  Id pregunta: 1919 Año de creación de pregunta: 2016
 questions[65]= "66)  La banda de 5'47 GHz se utiliza para:";
 choices[65]= new Array();
 choices[65][0] = "Bluetooth";
 choices[65][1] = "Est&aacute; reservada para uso militar";
 choices[65][2] = "WiFi";
 choices[65][3] = "Wimax";
 answers[65] = 3;
 units[65] = ['106'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1919. ";
 preguntaids[65] = 1919


//  Id pregunta: 1925 Año de creación de pregunta: 2016
 questions[66]= "67)  EI concepto de &quot;Cloud Computing&quot; hace referencia a un modelo de prestaci&oacute;n de servicios en el que:";
 choices[66]= new Array();
 choices[66][0] = "Se aloja un servidor o aplicaci&oacute;n en el edificio de un proveedor";
 choices[66][1] = "EI proveedor de servicios se encarga del alojamiento, gesti&oacute;n y administraci&oacute;n de los servidores y aplicaciones del cliente, pero son personalizadas y no se comparten con otros clientes.";
 choices[66][2] = "Se paga &uacute;nicamente por el consumo de servicios efectuado";
 choices[66][3] = "Se utiliza la capacidad de proceso y computaci&oacute;n libre existente en otros servidores de Internet para efectuar operaciones de c&aacute;lculo.";
 answers[66] = 2;
 units[66] = ['52'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1925. ";
 preguntaids[66] = 1925


//  Id pregunta: 1895 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[67]= new Array();
 choices[67][0] = "EI modelo EFQM de Excelencia punt&uacute;a m&aacute;s los procesos que las pol&iacute;ticas y estrategias";
 choices[67][1] = "En el modelo EFQM de Excelencia, en el apartado de los resultados, solo se tiene en cuenta los beneficios empresariales";
 choices[67][2] = "Uno de los ocho principios en que se basan las normas de la familia ISO 9000:2000 es &quot;el enfoque basado en procesos&rdquo;";
 choices[67][3] = "La ISO 9004:2000 no establece los requisitos que debe cumplir un sistema de calidad de certificaci&oacute;n.";
 answers[67] = 1;
 units[67] = ['98'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 1895. ";
 preguntaids[67] = 1895


//  Id pregunta: 1903 Año de creación de pregunta: 2016
 questions[68]= "69)  La cabecera de IPv6, en tsrrninos absolutos, es m&aacute;s grande que la de IPv4:";
 choices[68]= new Array();
 choices[68][0] = "Cierto, porque ocupa el doble de octetos";
 choices[68][1] = "Falso, ya que en IPv6 se ha simplificado el formato de la cabecera";
 choices[68][2] = "Cierto, porque el n&uacute;mero de direcciones pasa de 32 a 128 bits";
 choices[68][3] = "Falso, ya que la cabecera de IPv6 utiliza 8 campos y la de IPv4 utiliza 16 campos.";
 answers[68] = 0;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1903. ";
 preguntaids[68] = 1903


//  Id pregunta: 1888 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA, en relaci&oacute;n a los beneficios que aporta la buena Gobernabilidad de las TIC?:";
 choices[69]= new Array();
 choices[69][0] = "Mejora la calidad del servicio";
 choices[69][1] = "Optimiza los costes";
 choices[69][2] = "Mejora la transparencia";
 choices[69][3] = "Reduce los riesgos";
 answers[69] = 2;
 units[69] = ['101'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 1888. ";
 preguntaids[69] = 1888


//  Id pregunta: 1944 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos NO es un m&eacute;todo de representaci&oacute;n simb&oacute;lica del conocimiento?";
 choices[70]= new Array();
 choices[70][0] = "Redes sem&aacute;nticas";
 choices[70][1] = "Redes Neuronales";
 choices[70][2] = "Marcos";
 choices[70][3] = "Reglas";
 answers[70] = 1;
 units[70] = ['68'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1944. ";
 preguntaids[70] = 1944


//  Id pregunta: 1876 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo con el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), la designaci&oacute;n como responsable de seguridad:";
 choices[71]= new Array();
 choices[71][0] = "Implica que asume la responsabilidad que corresponde al responsable del fichero o al encargado de tratamiento.";
 choices[71][1] = "Implica que comparte la responsabilidad que corresponde al responsable del fichero o al encargado de tratamiento.";
 choices[71][2] = "En ning&uacute;n caso supone una exoneraci&oacute;n de la responsabilidad que corresponde al responsable del fichero o al encargado del tratamiento.";
 choices[71][3] = "Siempre debe recaer en el responsable de los sistemas de la informaci&oacute;n.";
 answers[71] = 2;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 1876. ";
 preguntaids[71] = 1876


//  Id pregunta: 1909 Año de creación de pregunta: 2016
 questions[72]= "73)  La MTU del enlace es igual al:";
 choices[72]= new Array();
 choices[72][0] = "AI valor de MTU m&aacute;s alto de los posibles a lo largo de una ruta";
 choices[72][1] = "AI valor de MTU m&aacute;s bajo de los posibles a lo largo de una ruta";
 choices[72][2] = "AI valor medio de MTU de los enlaces que intervienen a lo largo de una ruta";
 choices[72][3] = "AI valor que haya sido definido en el PC que inicia la comunicaci&oacute;n";
 answers[72] = 1;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1909. ";
 preguntaids[72] = 1909


//  Id pregunta: 1894 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[73]= new Array();
 choices[73][0] = "En las Cartas de Servicio que se elaboren, se deben establecer los dispositivos de seguimiento y evaluaci&oacute;n";
 choices[73][1] = "La Calidad Total implica un enfoque que comprende tanto el concepto producto como el concepto servicio, no como elementos independientes.";
 choices[73][2] = "Las Cartas de Servicios expresan un compromiso con los ciudadanos para mejorar la calidad de los servicios";
 choices[73][3] = "Las Cartas de Servicios no tienen la consideraci&oacute;n de documentos oficiales.";
 answers[73] = 3;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 1894. ";
 preguntaids[73] = 1894


//  Id pregunta: 1879 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de car&aacute;cter Personal, un paciente que solicite el acceso a los datos de car&aacute;cter personal que figuran en su historia cl&iacute;nica:";
 choices[74]= new Array();
 choices[74][0] = "Tendr&aacute; derecho a obtener gratuitamente esta informaci&oacute;n.";
 choices[74][1] = "No tendr&aacute; derecho a acceder a sus datos porque pertenecen al organismo que los trata.";
 choices[74][2] = "Tendr&aacute; derecho a acceder a esta informaci&oacute;n abonando las tasas correspondientes.";
 choices[74][3] = "Tendr&aacute; derecho a acceder a esta informaci&oacute;n &uacute;nicamente si lo solicita por escrito y lo autoriza el responsable de seguridad.";
 answers[74] = 0;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 1879. ";
 preguntaids[74] = 1879


