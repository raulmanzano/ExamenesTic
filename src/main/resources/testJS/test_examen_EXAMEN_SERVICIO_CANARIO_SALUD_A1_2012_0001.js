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
//  Id pregunta: 1913 Año de creación de pregunta: 2016
 questions[0]= "1)  Con respecto a la tecnolog&iacute;a de Jerarqu&iacute;a Digital S&iacute;ncrona (SDH/JDS) &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[0]= new Array();
 choices[0][0] = "Las tramas tributarias de las se&ntilde;ales de I&iacute;nea pueden ser subdivididas para acomodar cargas plesi&oacute;cronas, trafico ATM o unidades de menor orden. Esto supone mezclar trance de distinto tipo dando lugar a redes flexibles.";
 choices[0][1] = "EI procesamiento de la serial se lleva a cabo a nivel de STM-1, con lo que las se&ntilde;ales de velocidades superiores son s&iacute;ncronas entre s&iacute;, y est&aacute;n en fase per ser generadas localmente por cada nodo la red";
 choices[0][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[0][3] = "No sirven para transportar trance de tipo IP";
 answers[0] = 3;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1913. ";
 preguntaids[0] = 1913


//  Id pregunta: 1933 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cuantas son las reglas que seg&uacute;n Codd debe cumplir un sistema verdaderamente relacional?";
 choices[1]= new Array();
 choices[1][0] = "Cinco.";
 choices[1][1] = "Doce.";
 choices[1][2] = "Cuatro.";
 choices[1][3] = "Tres.";
 answers[1] = 1;
 units[1] = ['61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1933. ";
 preguntaids[1] = 1933


//  Id pregunta: 1932 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n correcta acerca de La Forma Normal de Boyce-Codd (FNBC):";
 choices[2]= new Array();
 choices[2][0] = "Requiere que existan dependencias funcionales no triviales de los atributos que no sean un conjunto de la clave candidata.";
 choices[2][1] = "Es una versi&oacute;n ligeramente menos fuerte que la 3FN (Tercera Forma Normal).";
 choices[2][2] = "Una relaci&oacute;n esta en FNBC si esta en 3FN y solo si, todo determinante es una clave candidata.";
 choices[2][3] = "Es una versi&oacute;n ligeramente menos fuerte que la 2FN (Segunda Forma Normal).";
 answers[2] = 2;
 units[2] = ['61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 1932. ";
 preguntaids[2] = 1932


//  Id pregunta: 1894 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[3]= new Array();
 choices[3][0] = "En las Cartas de Servicio que se elaboren, se deben establecer los dispositivos de seguimiento y evaluaci&oacute;n";
 choices[3][1] = "La Calidad Total implica un enfoque que comprende tanto el concepto producto como el concepto servicio, no como elementos independientes.";
 choices[3][2] = "Las Cartas de Servicios expresan un compromiso con los ciudadanos para mejorar la calidad de los servicios";
 choices[3][3] = "Las Cartas de Servicios no tienen la consideraci&oacute;n de documentos oficiales.";
 answers[3] = 3;
 units[3] = ['19'];
 blocks[3] = ['A4'];
 comments[3] = "Id Pregunta: 1894. ";
 preguntaids[3] = 1894


//  Id pregunta: 1942 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[4]= new Array();
 choices[4][0] = "Internet Information Server";
 choices[4][1] = "Weblogic";
 choices[4][2] = "Websphere";
 choices[4][3] = "Apache";
 answers[4] = 3;
 units[4] = ['66'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1942. ";
 preguntaids[4] = 1942


//  Id pregunta: 1931 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale cual de los siguientes niveles NO existe en la definici&oacute;n de niveles de la arquitectura est&aacute;ndar de los SGBD. ANSI1X3/SPARC:";
 choices[5]= new Array();
 choices[5][0] = "Nivel relacional.";
 choices[5][1] = "Nivel conceptual";
 choices[5][2] = "Nivel externo.";
 choices[5][3] = "Nivel interno.";
 answers[5] = 0;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1931. ";
 preguntaids[5] = 1931


//  Id pregunta: 1901 Año de creación de pregunta: 2016
 questions[6]= "7)  EI cableado estructurado de categor&iacute;a 5e:";
 choices[6]= new Array();
 choices[6][0] = "Permite transmisiones a velocidades 1OGbit Ethernet";
 choices[6][1] = "Solo es posible utilizarlo en comunicaciones full-duplex";
 choices[6][2] = "A diferencia de la categor&iacute;a 5, permite la transmisi&oacute;n de paquetes VolP";
 choices[6][3] = "Est&aacute; estandarizado por la norma TIAIEIA-568-B";
 answers[6] = 3;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 1901. ";
 preguntaids[6] = 1901


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


//  Id pregunta: 1877 Año de creación de pregunta: 2016
 questions[8]= "9)  Los algoritmos de clave sim&eacute;trica:";
 choices[8]= new Array();
 choices[8][0] = "Disponen de un par de claves p&uacute;blica/privada";
 choices[8][1] = "Son menos eficientes que los de clave asim&eacute;trica";
 choices[8][2] = "Se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[8][3] = "Tienen una alta velocidad de cifrado y descifrado";
 answers[8] = 3;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1877. ";
 preguntaids[8] = 1877


//  Id pregunta: 1925 Año de creación de pregunta: 2016
 questions[9]= "10)  EI concepto de &quot;Cloud Computing&quot; hace referencia a un modelo de prestaci&oacute;n de servicios en el que:";
 choices[9]= new Array();
 choices[9][0] = "Se aloja un servidor o aplicaci&oacute;n en el edificio de un proveedor";
 choices[9][1] = "EI proveedor de servicios se encarga del alojamiento, gesti&oacute;n y administraci&oacute;n de los servidores y aplicaciones del cliente, pero son personalizadas y no se comparten con otros clientes.";
 choices[9][2] = "Se paga &uacute;nicamente por el consumo de servicios efectuado";
 choices[9][3] = "Se utiliza la capacidad de proceso y computaci&oacute;n libre existente en otros servidores de Internet para efectuar operaciones de c&aacute;lculo.";
 answers[9] = 2;
 units[9] = ['52'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1925. ";
 preguntaids[9] = 1925


//  Id pregunta: 1937 Año de creación de pregunta: 2016
 questions[10]= "11)  De las siguientes cuestiones de la arquitectura .NET indique cual es FALSA.";
 choices[10]= new Array();
 choices[10][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[10][1] = "Las clases ADO.NET permiten acceder a datos.";
 choices[10][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la plataforma.";
 choices[10][3] = "En la arquitectura .NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n";
 answers[10] = 2;
 units[10] = ['63'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1937. ";
 preguntaids[10] = 1937


//  Id pregunta: 1930 Año de creación de pregunta: 2016
 questions[11]= "12)  En el modelo referencial, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[11]= new Array();
 choices[11][0] = "Que todos los datos est&aacute;n referenciados por su clave y &eacute;sta que sea &uacute;nica.";
 choices[11][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[11][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias.";
 choices[11][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[11] = 1;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1930. ";
 preguntaids[11] = 1930


//  Id pregunta: 1924 Año de creación de pregunta: 2016
 questions[12]= "13)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[12]= new Array();
 choices[12][0] = "Conseguir informaci&oacute;n sobre los h&aacute;bitos de navegaci&oacute;n del usuario";
 choices[12][1] = "Enviar c6digo embebido en la pagina HTML que se ejecutara en el cliente";
 choices[12][2] = "La generaci&oacute;n de Pop-ups";
 choices[12][3] = "Contienen tanto c&oacute;digo como datos";
 answers[12] = 0;
 units[12] = ['74'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1924. ";
 preguntaids[12] = 1924


//  Id pregunta: 1897 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; sistema de RAID proporciona protecci&oacute;n contra fallos dobles de discos y contra fallos cuando se est&aacute; reconstruyendo un disco?:";
 choices[13]= new Array();
 choices[13][0] = "RAI3";
 choices[13][1] = "RAI5";
 choices[13][2] = "RAI6";
 choices[13][3] = "RAID 0+1";
 answers[13] = 2;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1897. ";
 preguntaids[13] = 1897


//  Id pregunta: 1893 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n METRICA version 3, el proceso MSI (Mantenimiento de Sistemas de Informaci&oacute;n) solo incluye los mantenimientos:";
 choices[14]= new Array();
 choices[14][0] = "Mantenimiento correctivo y evolutivo";
 choices[14][1] = "Mantenimiento evolutivo y adaptativo";
 choices[14][2] = "Mantenimiento adaptativo y perfectivo";
 choices[14][3] = "Mantenimiento perfectivo y correctivo";
 answers[14] = 0;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1893. ";
 preguntaids[14] = 1893


//  Id pregunta: 1938 Año de creación de pregunta: 2016
 questions[15]= "16)  En el framework .NET, (_que c&oacute;digo se genera como salida del compilador just in time?";
 choices[15]= new Array();
 choices[15][0] = "Bytecode";
 choices[15][1] = "IL (intemediate language)";
 choices[15][2] = "C&oacute;digo m&aacute;quina";
 choices[15][3] = "C&oacute;digo ensamblador";
 answers[15] = 2;
 units[15] = ['63'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1938. ";
 preguntaids[15] = 1938


//  Id pregunta: 1881 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la recomendaci&oacute;n X.509 v3:";
 choices[16]= new Array();
 choices[16][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[16][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[16][2] = "Para su validez, los certificados de atributos deben contener un certificado de clave p&uacute;blica.";
 choices[16][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[16] = 2;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1881. ";
 preguntaids[16] = 1881


//  Id pregunta: 1907 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[17]= new Array();
 choices[17][0] = "La direcci&oacute;n MAC del Router";
 choices[17][1] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destine";
 choices[17][2] = "La direcci&oacute;n IP del sistema final destine";
 choices[17][3] = "La direcci&oacute;n MAC del sistema final destino";
 answers[17] = 0;
 units[17] = ['109'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1907. ";
 preguntaids[17] = 1907


//  Id pregunta: 1936 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale como se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET:";
 choices[18]= new Array();
 choices[18][0] = "CLS";
 choices[18][1] = "MSIL";
 choices[18][2] = "Bytecode";
 choices[18][3] = "JIT";
 answers[18] = 0;
 units[18] = ['63'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1936. ";
 preguntaids[18] = 1936


//  Id pregunta: 1904 Año de creación de pregunta: 2016
 questions[19]= "20)  En el contexto de TCP/IP, &iquest;qu&eacute; se entiende por encapsulamiento?";
 choices[19]= new Array();
 choices[19][0] = "La partici&oacute;n del paquete a enviar en trozos acordes con la Unidad Maxima de Transferencia que soporta la red por la que se va a enviar";
 choices[19][1] = "EI cifrado de las direcciones IP de origen y destino";
 choices[19][2] = "La adici&oacute;n de informaci&oacute;n de control en cada nivel antes de pasarla al nivel inferior.";
 choices[19][3] = "La encriptaci&oacute;n de los octetos de informaci&oacute;n de los paquetes IP.";
 answers[19] = 2;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1904. ";
 preguntaids[19] = 1904


//  Id pregunta: 1909 Año de creación de pregunta: 2016
 questions[20]= "21)  La MTU del enlace es igual al:";
 choices[20]= new Array();
 choices[20][0] = "AI valor de MTU m&aacute;s alto de los posibles a lo largo de una ruta";
 choices[20][1] = "AI valor de MTU m&aacute;s bajo de los posibles a lo largo de una ruta";
 choices[20][2] = "AI valor medio de MTU de los enlaces que intervienen a lo largo de una ruta";
 choices[20][3] = "AI valor que haya sido definido en el PC que inicia la comunicaci&oacute;n";
 answers[20] = 1;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1909. ";
 preguntaids[20] = 1909


//  Id pregunta: 1934 Año de creación de pregunta: 2016
 questions[21]= "22)  El lenguaje de consulta SQL utiliza el comando &quot;GRANT&quot; para:";
 choices[21]= new Array();
 choices[21][0] = "Eliminar una tabla de datos.";
 choices[21][1] = "Dar derechos de acceso a un usuario sobre un objeto de la base de datos.";
 choices[21][2] = "Comparar 16gicamente la condici&oacute;n &quot;mayor que&quot; en dos variables.";
 choices[21][3] = "Crear una vista.";
 answers[21] = 1;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1934. ";
 preguntaids[21] = 1934


//  Id pregunta: 1905 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes protocolos no se ejecuta en el nivel de aplicaci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "RIP, Protocolo de informaci&oacute;n de enrutamiento";
 choices[22][1] = "NFS, sistema de archivos de red";
 choices[22][2] = "ARP, protocolo de resoluci&oacute;n de direcciones";
 choices[22][3] = "FTP, Protocolo de transferencia de Ficheros";
 answers[22] = 2;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1905. ";
 preguntaids[22] = 1905


//  Id pregunta: 1921 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;a qu&eacute; clase corresponde la direcci&oacute;n IP 26.11 0.4.65?";
 choices[23]= new Array();
 choices[23][0] = "A";
 choices[23][1] = "B";
 choices[23][2] = "C";
 choices[23][3] = "Ninguna de las anteriores es correcta.";
 answers[23] = 0;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1921. ";
 preguntaids[23] = 1921


//  Id pregunta: 1910 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[24]= new Array();
 choices[24][0] = "Paquete Unicast es un paquete de datos dirigido a una &uacute;nica estaci&oacute;n";
 choices[24][1] = "Paquete Multicast es un paquete de datos dirigido a un grupo de estaciones, seleccion&aacute;ndose la interfaz m&aacute;s cercana";
 choices[24][2] = "Paquete Broadcast es un paquete de datos dirigido a todas y cada una de las estaciones del segmento local";
 choices[24][3] = "Paquete Anycast es un paquete dirigido a un grupo de estaciones, con la diferencia en que se selecciona una de estas estaciones para ser la destinataria de la informaci&oacute;n";
 answers[24] = 1;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1910. ";
 preguntaids[24] = 1910


//  Id pregunta: 1880 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, en relaci&oacute;n con las Listas de Certificados Revocados (CRL), &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[25]= new Array();
 choices[25][0] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[25][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[25][2] = "Deben actualizarse al menos una vez a la semana.";
 choices[25][3] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 answers[25] = 0;
 units[25] = ['77'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1880. ";
 preguntaids[25] = 1880


//  Id pregunta: 1899 Año de creación de pregunta: 2016
 questions[26]= "27)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia completa, sin marcarlos individualmente como copiados, es una copia de seguridad:";
 choices[26]= new Array();
 choices[26][0] = "Acumulativa";
 choices[26][1] = "Intermedia";
 choices[26][2] = "Incremental";
 choices[26][3] = "Diferencial";
 answers[26] = 3;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1899. ";
 preguntaids[26] = 1899


//  Id pregunta: 1918 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[27]= new Array();
 choices[27][0] = "POP es un protocolo de acceso a correo";
 choices[27][1] = "SMTP es un protocolo de transporte de mensajes";
 choices[27][2] = "IMAP es un protocolo de red de acceso a mensajes electr&oacute;nicos almacenados en un servidor";
 choices[27][3] = "MIME no permite acentos en los mensajes de correo";
 answers[27] = 3;
 units[27] = ['116'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1918. ";
 preguntaids[27] = 1918


//  Id pregunta: 1885 Año de creación de pregunta: 2016
 questions[28]= "29)  En el contexto de seguridad en redes, que se entiende por cortatuegos:";
 choices[28]= new Array();
 choices[28][0] = "Un sistema que separa, en cuanto a seguridad se refiere, una m&aacute;quina o sub red del resto";
 choices[28][1] = "Es un programa que se instala en un anfitri&oacute;n de la red interna para proteger los accesos a la misma.";
 choices[28][2] = "Es un sistema que se instala en la red externa para controlar los accesos a la red interna";
 choices[28][3] = "Es software o dispositivo que realiza una acci&oacute;n en representaci&oacute;n de otro, garantizado as! su seguridad.";
 answers[28] = 0;
 units[28] = ['119'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1885. ";
 preguntaids[28] = 1885


//  Id pregunta: 1912 Año de creación de pregunta: 2016
 questions[29]= "30)  En las redes de comunicaciones basadas en conmutaci&oacute;n de paquetes, la t&eacute;cnica de circuitos virtuales se caracteriza porque:";
 choices[29]= new Array();
 choices[29][0] = "Cada paquete se transporta de forma independiente sin referencia a los precedentes";
 choices[29][1] = "La ruta de origen a destino puede ser diferente, pero los paquetes llegan en orden";
 choices[29][2] = "Se dispone de un circuito dedicado";
 choices[29][3] = "La ruta es para toda la comunicaci&oacute;n";
 answers[29] = 3;
 units[29] = ['102'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1912. ";
 preguntaids[29] = 1912


//  Id pregunta: 1890 Año de creación de pregunta: 2016
 questions[30]= "31)  Se ha decidido establecer un Centro de Atenci&oacute;n de Usuarios (CAU) en la organizaci&oacute;n para atender las necesidades de los usuarios en cuanto a nuevas peticiones y problemas. &iquest;Que NO corresponde a los principios que deben regir dicho CAU?:";
 choices[30]= new Array();
 choices[30][0] = "Documentar las soluciones dadas a las incidencias creadas";
 choices[30][1] = "Generar una base de datos del conocimiento";
 choices[30][2] = "Disponer de un punto de contacto &uacute;nico al usuario final";
 choices[30][3] = "Detectar necesidades de los usuarios";
 answers[30] = 3;
 units[30] = ['101'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1890. ";
 preguntaids[30] = 1890


//  Id pregunta: 1915 Año de creación de pregunta: 2016
 questions[31]= "32)  En relaci&oacute;n al protocolo OSPF";
 choices[31]= new Array();
 choices[31][0] = "Presenta como gran inconveniente el elevado tiempo de convergencia";
 choices[31][1] = "Es un protocolo de tipo vector distancia";
 choices[31][2] = "Solo env&iacute;a actualizaciones cuando hay cambios de topolog&iacute;a.";
 choices[31][3] = "Es un protocolo de rutas est&aacute;ticas";
 answers[31] = 2;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1915. ";
 preguntaids[31] = 1915


//  Id pregunta: 1896 Año de creación de pregunta: 2016
 questions[32]= "33)  En relaci&oacute;n a la norma ISO 9004 &iquest;Qu&eacute; aseveraci&oacute;n es FALSA?:";
 choices[32]= new Array();
 choices[32][0] = "No es certificable";
 choices[32][1] = "Contiene las directrices para la mejora continua del desempe&ntilde;o";
 choices[32][2] = "Est&aacute; basada en un enfoque de procesos";
 choices[32][3] = "Garantiza la gesti&oacute;n de la calidad de los productos";
 answers[32] = 3;
 units[32] = ['98'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1896. ";
 preguntaids[32] = 1896


//  Id pregunta: 1886 Año de creación de pregunta: 2016
 questions[33]= "34)  En criptograf&iacute;a asim&eacute;trica, con que clave cifra un usuario un documento:";
 choices[33]= new Array();
 choices[33][0] = "Con su propia clave privada";
 choices[33][1] = "Con su propia clave p&uacute;blica";
 choices[33][2] = "Con la clave privada del destinatario";
 choices[33][3] = "Con la clave p&uacute;blica del destinatario";
 answers[33] = 3;
 units[33] = ['76'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1886. ";
 preguntaids[33] = 1886


//  Id pregunta: 1908 Año de creación de pregunta: 2016
 questions[34]= "35)  En relaci&oacute;n al protocolo 802.1 Q usado para utilizar de forma transparente el mismo medio f&iacute;sico por m&uacute;ltiples redes, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[34]= new Array();
 choices[34][0] = "Encapsula la trama original";
 choices[34][1] = "A&ntilde;ade nuevos bytes a la cabecera";
 choices[34][2] = "Para establecer un trunking 802.1 q a ambos lados debemos tener la misma VLAN nativa";
 choices[34][3] = "Se precisa realizar un rec&aacute;lculo del campo &quot;FCS&quot;";
 answers[34] = 0;
 units[34] = ['112'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1908. ";
 preguntaids[34] = 1908


//  Id pregunta: 1920 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; funci&oacute;n realiza el splitter en la conexi&oacute;n ADSL?";
 choices[35]= new Array();
 choices[35][0] = "Para discriminar dos bandas de frecuencias";
 choices[35][1] = "Para ecualizar la se&ntilde;al vocal";
 choices[35][2] = "EI splitter solo se utiliza en las conexiones HDSL";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = 0;
 units[35] = ['106'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1920. ";
 preguntaids[35] = 1920


//  Id pregunta: 1941 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; caracter&iacute;sticas tiene el software libre cubierto por la GPL de GNU?";
 choices[36]= new Array();
 choices[36][0] = "Su usa, redistribuci&oacute;n o modificaci&oacute;n est&aacute;n prohibidos, requieren que se solicite una autorizaci&oacute;n.";
 choices[36][1] = "Se convierte en freeware, paquetes que se pueden distribuir pero no modificar.";
 choices[36][2] = "Se puede usar con cualquier prop6sito, adaptarlo a las necesidades, mejorar el programa, distribuir copias y est&aacute; protegido con copylet.";
 choices[36][3] = "Se puede usar con cualquier prop6sito, adaptarlo a las necesidades, mejorar el programa y a partir de aqu&iacute; ya puede ser software privativo.";
 answers[36] = 2;
 units[36] = ['66'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1941. ";
 preguntaids[36] = 1941


//  Id pregunta: 1902 Año de creación de pregunta: 2016
 questions[37]= "38)  Para limitar el impacto negativo del tr&aacute;fico de broadcast, &iquest;Cu&aacute;l de las siguientes medidas NO es v&aacute;lida?:";
 choices[37]= new Array();
 choices[37][0] = "Dividir la red en subredes";
 choices[37][1] = "Implementar dispositivos de capa 3 para la comunicaci&oacute;n entre subredes";
 choices[37][2] = "Dividir la red en VLANs";
 choices[37][3] = "Sustituir Concentrador (hub) por conmutadores (switch)";
 answers[37] = 3;
 units[37] = ['102'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 1902. ";
 preguntaids[37] = 1902


//  Id pregunta: 1916 Año de creación de pregunta: 2016
 questions[38]= "39)  En relaci&oacute;n al protocolo OSPF, &iquest;cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[38]= new Array();
 choices[38][0] = "Divide el &aacute;rea en sistemas aut&oacute;nomos";
 choices[38][1] = "Es un protocolo jer&aacute;rquico";
 choices[38][2] = "Es un protocolo de pasarela interne";
 choices[38][3] = "Es un protocolo din&aacute;mico";
 answers[38] = 0;
 units[38] = ['102'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1916. ";
 preguntaids[38] = 1916


//  Id pregunta: 1914 Año de creación de pregunta: 2016
 questions[39]= "40)  EI protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian trance es:";
 choices[39]= new Array();
 choices[39][0] = "OSPF";
 choices[39][1] = "No es adecuado utilizar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas";
 choices[39][2] = "RIP";
 choices[39][3] = "BGP-4";
 answers[39] = 3;
 units[39] = ['102'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 1914. ";
 preguntaids[39] = 1914


//  Id pregunta: 1879 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de car&aacute;cter Personal, un paciente que solicite el acceso a los datos de car&aacute;cter personal que figuran en su historia cl&iacute;nica:";
 choices[40]= new Array();
 choices[40][0] = "Tendr&aacute; derecho a obtener gratuitamente esta informaci&oacute;n.";
 choices[40][1] = "No tendr&aacute; derecho a acceder a sus datos porque pertenecen al organismo que los trata.";
 choices[40][2] = "Tendr&aacute; derecho a acceder a esta informaci&oacute;n abonando las tasas correspondientes.";
 choices[40][3] = "Tendr&aacute; derecho a acceder a esta informaci&oacute;n &uacute;nicamente si lo solicita por escrito y lo autoriza el responsable de seguridad.";
 answers[40] = 0;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 1879. ";
 preguntaids[40] = 1879


//  Id pregunta: 1875 Año de creación de pregunta: 2016
 questions[41]= "42)  Cu&aacute;l es el uso m&aacute;s generalizado de las funciones irreversibles tipo HASH:";
 choices[41]= new Array();
 choices[41][0] = "Para cifrar y descifrar mensajes";
 choices[41][1] = "Para firma electr&oacute;nica";
 choices[41][2] = "Para garantizar la confidencialidad";
 choices[41][3] = "Para encriptar mensajes";
 answers[41] = 1;
 units[41] = ['76'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1875. ";
 preguntaids[41] = 1875


//  Id pregunta: 1926 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;les de las siguientes NO es una caracter&iacute;stica esencial de los sistemas de altas prestaciones?";
 choices[42]= new Array();
 choices[42][0] = "Arquitectura altamente paralela.";
 choices[42][1] = "Gran capacidad de compute.";
 choices[42][2] = "Tiempo compartido.";
 choices[42][3] = "Elevado coste.";
 answers[42] = 2;
 units[42] = ['49'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1926. ";
 preguntaids[42] = 1926


//  Id pregunta: 1892 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cual de las siguientes alternativas corresponde a los procesos de Desarrollo de Sistemas de Informaci&oacute;n dentro de la metodolog&iacute;a M&eacute;trica v3:";
 choices[43]= new Array();
 choices[43][0] = "Estudio de Viabilidad del Sistema, Construcci&oacute;n del Sistema de Informaci&oacute;n, Mantenimiento del Sistema de Informaci&oacute;n";
 choices[43][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n, Construcci&oacute;n del Sistema de Informaci&oacute;n, Mantenimiento del Sistema de Informaci&oacute;n";
 choices[43][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n, Construcci&oacute;n del Sistema de Informaci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[43][3] = "Estudio de Viabilidad del Sistema, An&aacute;lisis del Sistema de Informaci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[43] = 3;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 1892. ";
 preguntaids[43] = 1892


//  Id pregunta: 1884 Año de creación de pregunta: 2016
 questions[44]= "45)  Cuando se dispone de una tarjeta criptogr&aacute;fica para almacenar la clave privada, &iquest;Cu&aacute;l es el procedimiento m&aacute;s usual para firmar un documento?:";
 choices[44]= new Array();
 choices[44][0] = "Se transfiere a la tarjeta un &quot;hash&quot; del documento a firmar y esta devuelve la firma";
 choices[44][1] = "Se transfiere a la tarjeta el documento a firmar y esta devuelve la firma";
 choices[44][2] = "EI explorador de Internet calcula un &quot;hash&quot; del documento a firmar, obtiene la clave privada de la tarjeta y cifra el &quot;hash&quot; con ella.";
 choices[44][3] = "EI explorador de Internet obtiene la clave privada de la tarjeta, y firma el documento directamente.";
 answers[44] = 0;
 units[44] = ['77'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1884. ";
 preguntaids[44] = 1884


//  Id pregunta: 1889 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es la mejor definici&oacute;n para el concepto de Benchmarking?";
 choices[45]= new Array();
 choices[45][0] = "Proceso para evaluar comparativamente los productos, servicios y procesos de trabajo en organizaciones";
 choices[45][1] = "Procedimiento para la comparaci&oacute;n de precios de los servicios prestados por las organizaciones";
 choices[45][2] = "Proceso para el establecimiento de objetivos de control en el manejo y uso de las TIC";
 choices[45][3] = "Procedimientos para proporcionar la informaci&oacute;n que la empresa requiere para lograr sus objetivos";
 answers[45] = 0;
 units[45] = ['39'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 1889. ";
 preguntaids[45] = 1889


//  Id pregunta: 1871 Año de creación de pregunta: 2016
 questions[46]= "47)  Los tipos de documentos seg&uacute;n XML son:";
 choices[46]= new Array();
 choices[46][0] = "Inv&aacute;lido y v&aacute;lido";
 choices[46][1] = "Inv&aacute;lido y bien formado";
 choices[46][2] = "Inv&aacute;lido, bien formado y v&aacute;lido";
 choices[46][3] = "lnv&aacute;lido, bien formado, v&aacute;lido y completo";
 answers[46] = 2;
 units[46] = ['74'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1871. ";
 preguntaids[46] = 1871


//  Id pregunta: 1873 Año de creación de pregunta: 2016
 questions[47]= "48)  XML:";
 choices[47]= new Array();
 choices[47][0] = "Es un lenguaje de presentaci&oacute;n similar a HTML, pero m&aacute;s avanzado";
 choices[47][1] = "Es similar a HTML pero con orientaci&oacute;n al mundo del dise&ntilde;o dado que permite realizar p&aacute;ginas web m&aacute;s vistosas y din&aacute;micas.";
 choices[47][2] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos.";
 choices[47][3] = "Es un lenguaje para el intercambio de informaci&oacute;n no estructurada entre diferentes plataformas.";
 answers[47] = 2;
 units[47] = ['74'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1873. ";
 preguntaids[47] = 1873


//  Id pregunta: 1869 Año de creación de pregunta: 2016
 questions[48]= "49)  En referencia al lenguaje XML, &iquest;Cu&aacute;l de las siguientes opciones considera correcta?";
 choices[48]= new Array();
 choices[48][0] = "Las hojas de estilo CSS no puede ser utilizadas con HTML";
 choices[48][1] = "XSL puede usarse para transformar datos XML a documentos HTMUCSS en un servidor web";
 choices[48][2] = "CSS puede ejecutar cualquier 16gica basada en los datos";
 choices[48][3] = "XML permite m&aacute;s de un elemenio raiz.";
 answers[48] = 1;
 units[48] = ['74'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1869. ";
 preguntaids[48] = 1869


//  Id pregunta: 1878 Año de creación de pregunta: 2016
 questions[49]= "50)  EI sistema Kerberos de autenticaci&oacute;n y de distribuci&oacute;n de claves de sesi&oacute;n requiere:";
 choices[49]= new Array();
 choices[49][0] = "La existencia de una tercera entidad de confianza centralizada";
 choices[49][1] = "Que cada usuario tenga un par de claves reconocidas: la p&uacute;blica y la privada";
 choices[49][2] = "La existencia de una red de conexi&oacute;n interna total mente segura.";
 choices[49][3] = "Que cada servidor de aplicaciones mantenga claves secretas compartidas con todos los usuarios que Ie puedan solicitar servicios.";
 answers[49] = 0;
 units[49] = ['119'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 1878. ";
 preguntaids[49] = 1878


//  Id pregunta: 1903 Año de creación de pregunta: 2016
 questions[50]= "51)  La cabecera de IPv6, en tsrrninos absolutos, es m&aacute;s grande que la de IPv4:";
 choices[50]= new Array();
 choices[50][0] = "Cierto, porque ocupa el doble de octetos";
 choices[50][1] = "Falso, ya que en IPv6 se ha simplificado el formato de la cabecera";
 choices[50][2] = "Cierto, porque el n&uacute;mero de direcciones pasa de 32 a 128 bits";
 choices[50][3] = "Falso, ya que la cabecera de IPv6 utiliza 8 campos y la de IPv4 utiliza 16 campos.";
 answers[50] = 0;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 1903. ";
 preguntaids[50] = 1903


//  Id pregunta: 1898 Año de creación de pregunta: 2016
 questions[51]= "52)  Para un sistema de almacenamiento de cien unidades de disco, &iquest;Cu&aacute;l de los siguientes ofrece mayor capacidad neta de almacenamiento?: .";
 choices[51]= new Array();
 choices[51][0] = "RAI1";
 choices[51][1] = "RAI5";
 choices[51][2] = "RAI6";
 choices[51][3] = "RAID 0+1";
 answers[51] = 1;
 units[51] = ['53'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1898. ";
 preguntaids[51] = 1898


//  Id pregunta: 1900 Año de creación de pregunta: 2016
 questions[52]= "53)  Los cables de fibra &oacute;ptica utilizados en entornos WAN en enlaces de larga distancia:";
 choices[52]= new Array();
 choices[52][0] = "Suelen ser de tipo multimodo ya que permite transmitir varios haces de luz,";
 choices[52][1] = "Suelen ser de tipo monomodo por la mayor robustez de la libra";
 choices[52][2] = "Suelen ser de tipo monomodo per su menor atenuaci&oacute;n";
 choices[52][3] = "Suelen ser de tipo multimodo por su menor atenuaci&oacute;n";
 answers[52] = 2;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1900. ";
 preguntaids[52] = 1900


//  Id pregunta: 1874 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), cuando el mecanismo de autenticaci&oacute;n de los usuarios autorizados a acceder a la historia cl&iacute;nica se base en la existencia de contrase&ntilde;as exigir&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "Un procedimiento de asignaci&oacute;n, distribuci&oacute;n y almacenamiento que garantice su confidencialidad e integridad.";
 choices[53][1] = "Un procedimiento de asignaci&oacute;n y distribuci&oacute;n que garantice su confidencialidad e integridad.";
 choices[53][2] = "Un procedimiento que auto rice al responsable de seguridad al conocimiento de las contrase&ntilde;as.";
 choices[53][3] = "Un procedimiento que garantice una diligente distribuci&oacute;n y almacenamiento que minimice el tiempo de espera.";
 answers[53] = 0;
 units[53] = ['35'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 1874. ";
 preguntaids[53] = 1874


//  Id pregunta: 1872 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), se podr&aacute;n realizar pruebas anteriores a la implantaci&oacute;n de un sistema de la informaci&oacute;n con datos reales:";
 choices[54]= new Array();
 choices[54][0] = "Si se tratan datos personales con nivel de seguridad b&aacute;sico.";
 choices[54][1] = "Si se asegura el nivel de seguridad correspondiente al tratamiento realizado, se anota su realizaci&oacute;n en el documento de seguridad y se ha realizado previamente una copia de seguridad.";
 choices[54][2] = "Si se asegura el nivel de seguridad correspondiente al tratamiento realizado y se ha recibido aprobaci&oacute;n previa del responsable de seguridad.";
 choices[54][3] = "Todas las anteriores son correctas.";
 answers[54] = 1;
 units[54] = ['35'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 1872. ";
 preguntaids[54] = 1872


//  Id pregunta: 1895 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[55]= new Array();
 choices[55][0] = "EI modelo EFQM de Excelencia punt&uacute;a m&aacute;s los procesos que las pol&iacute;ticas y estrategias";
 choices[55][1] = "En el modelo EFQM de Excelencia, en el apartado de los resultados, solo se tiene en cuenta los beneficios empresariales";
 choices[55][2] = "Uno de los ocho principios en que se basan las normas de la familia ISO 9000:2000 es &quot;el enfoque basado en procesos&rdquo;";
 choices[55][3] = "La ISO 9004:2000 no establece los requisitos que debe cumplir un sistema de calidad de certificaci&oacute;n.";
 answers[55] = 1;
 units[55] = ['98'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1895. ";
 preguntaids[55] = 1895


//  Id pregunta: 1928 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;En qu&eacute; consiste el esquema de paralelizaci&oacute;n SIMD?";
 choices[56]= new Array();
 choices[56][0] = "Los procesadores pueden ejecutar diferentes instrucciones.";
 choices[56][1] = "Los procesadores trabajan sobre diferentes conjuntos de datos.";
 choices[56][2] = "Los procesadores pueden ejecutar diferentes instrucciones y trabajan sobre diferentes conjuntos de datos.";
 choices[56][3] = "Los procesadores trabajan sobre el mismo conjunto de datos.";
 answers[56] = 1;
 units[56] = ['49'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 1928. ";
 preguntaids[56] = 1928


//  Id pregunta: 1940 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativos escritos en otros lenguajes?";
 choices[57]= new Array();
 choices[57][0] = "RMI";
 choices[57][1] = "JAXP";
 choices[57][2] = "JNOI";
 choices[57][3] = "JNI";
 answers[57] = 3;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1940. ";
 preguntaids[57] = 1940


//  Id pregunta: 1906 Año de creación de pregunta: 2016
 questions[58]= "59)  A que se denomina Jitter en una red de comunicaciones sobre la que se soporta VoIP?";
 choices[58]= new Array();
 choices[58][0] = "AI retardo m&aacute;ximo de un paquete IP en una red de comunicaciones";
 choices[58][1] = "A la variaci&oacute;n del retardo de los paquetes en una red de comunicaciones";
 choices[58][2] = "A la supresi&oacute;n de los silencios mediante la no transmisi&oacute;n de paquetes.";
 choices[58][3] = "Ninguno de los anteriores";
 answers[58] = 1;
 units[58] = ['122'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1906. ";
 preguntaids[58] = 1906


//  Id pregunta: 1876 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), la designaci&oacute;n como responsable de seguridad:";
 choices[59]= new Array();
 choices[59][0] = "Implica que asume la responsabilidad que corresponde al responsable del fichero o al encargado de tratamiento.";
 choices[59][1] = "Implica que comparte la responsabilidad que corresponde al responsable del fichero o al encargado de tratamiento.";
 choices[59][2] = "En ning&uacute;n caso supone una exoneraci&oacute;n de la responsabilidad que corresponde al responsable del fichero o al encargado del tratamiento.";
 choices[59][3] = "Siempre debe recaer en el responsable de los sistemas de la informaci&oacute;n.";
 answers[59] = 2;
 units[59] = ['35'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 1876. ";
 preguntaids[59] = 1876


//  Id pregunta: 1923 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes organismos de Internet gestiona la definici&oacute;n de pol&iacute;ticas para la asignaci&oacute;n de nombres simb&oacute;licos o dominios en Internet?:";
 choices[60]= new Array();
 choices[60][0] = "lANA";
 choices[60][1] = "ICANN";
 choices[60][2] = "RIPE";
 choices[60][3] = "IETF";
 answers[60] = 0;
 units[60] = ['103'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1923. ";
 preguntaids[60] = 1923


//  Id pregunta: 1882 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos:";
 choices[61]= new Array();
 choices[61][0] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita en relaci&oacute;n con los datos consignados en papel.";
 choices[61][1] = "Tienen una validez de 6 anos como m&aacute;ximo";
 choices[61][2] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[61][3] = "Solo son validos para las personas jur&iacute;dicas.";
 answers[61] = 2;
 units[61] = ['77'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1882. ";
 preguntaids[61] = 1882


//  Id pregunta: 1870 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), a un fichero que contenga: nombre, apellidos, direcci&oacute;n electr&oacute;nica laboral y tel&eacute;fono profesional, todo ello referido a varios proveedores de un hospital, se Ie deber&aacute;n aplicar:";
 choices[62]= new Array();
 choices[62][0] = "Las medidas de seguridad de nivel b&aacute;sico.";
 choices[62][1] = "Las medidas de seguridad de nivel medio.";
 choices[62][2] = "Las medidas de seguridad de nivel alto.";
 choices[62][3] = "Ninguna de las anteriores de correcta.";
 answers[62] = 3;
 units[62] = ['35'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 1870. ";
 preguntaids[62] = 1870


//  Id pregunta: 1917 Año de creación de pregunta: 2016
 questions[63]= "64)  En relaci&oacute;n con el protocolo SMTP, &iquest;Cu&aacute;l de las siguientes aseveraciones se cumple?:";
 choices[63]= new Array();
 choices[63][0] = "Para leer correo de entrada y componer correo de salida los usuarios utilizan clientes SMTP";
 choices[63][1] = "SMTP es un protocolo no compatible con IPv6";
 choices[63][2] = "Los anfitriones externos, servidores de correo, se ponen en contacto con los anfitriones internos, servidores de correo, a trav&eacute;s de SMTP";
 choices[63][3] = "SMTP es un protocolo de capa de nivel de sesi&oacute;n.";
 answers[63] = 2;
 units[63] = ['116'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1917. ";
 preguntaids[63] = 1917


//  Id pregunta: 1919 Año de creación de pregunta: 2016
 questions[64]= "65)  La banda de 5'47 GHz se utiliza para:";
 choices[64]= new Array();
 choices[64][0] = "Bluetooth";
 choices[64][1] = "Est&aacute; reservada para uso militar";
 choices[64][2] = "WiFi";
 choices[64][3] = "Wimax";
 answers[64] = 3;
 units[64] = ['106'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1919. ";
 preguntaids[64] = 1919


//  Id pregunta: 1911 Año de creación de pregunta: 2016
 questions[65]= "66)  En relaci&oacute;n a la direcci&oacute;n MAC, &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[65]= new Array();
 choices[65][0] = "La direcci&oacute;n MAC contiene el c&oacute;digo de fabricante de 24 bits";
 choices[65][1] = "La direcci&oacute;n MAC contiene el c&oacute;digo de identidad de red de 24 bits";
 choices[65][2] = "Es utilizada en el nivel de enlace de datos de la torre de protocolos OSI";
 choices[65][3] = "La direcci&oacute;n MAC contiene el c&oacute;diqo de serie que es elegido por cada fabricante a su discreci&oacute;n.";
 answers[65] = 1;
 units[65] = ['102'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1911. ";
 preguntaids[65] = 1911


//  Id pregunta: 1935 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; instrucci&oacute;n SQL se utiliza para extraer informaci&oacute;n de la Base de Datos?";
 choices[66]= new Array();
 choices[66][0] = "GET.";
 choices[66][1] = "EXPORT.";
 choices[66][2] = "SELECT.";
 choices[66][3] = "QUERY.";
 answers[66] = 2;
 units[66] = ['61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1935. ";
 preguntaids[66] = 1935


//  Id pregunta: 1939 Año de creación de pregunta: 2016
 questions[67]= "68)  JDBC es:";
 choices[67]= new Array();
 choices[67][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&Iacute;a ODBC.";
 choices[67][1] = "Un API (Application Programming Interface) que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[67][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet.";
 choices[67][3] = "EI est&aacute;ndar ODBC para bases de datos relacionales.";
 answers[67] = 1;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1939. ";
 preguntaids[67] = 1939


//  Id pregunta: 1888 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA, en relaci&oacute;n a los beneficios que aporta la buena Gobernabilidad de las TIC?:";
 choices[68]= new Array();
 choices[68][0] = "Mejora la calidad del servicio";
 choices[68][1] = "Optimiza los costes";
 choices[68][2] = "Mejora la transparencia";
 choices[68][3] = "Reduce los riesgos";
 answers[68] = 2;
 units[68] = ['101'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 1888. ";
 preguntaids[68] = 1888


//  Id pregunta: 1927 Año de creación de pregunta: 2016
 questions[69]= "70)  La funci&oacute;n de un planificador en sistemas de altas prestaciones es:";
 choices[69]= new Array();
 choices[69][0] = "Contabilizar el tiempo consumido por cada proceso.";
 choices[69][1] = "Seleccionar trabajos en funci&oacute;n de su prioridad.";
 choices[69][2] = "Realizar cambios de contexto de los procesos.";
 choices[69][3] = "Asignar la cuota de tiempo de c&aacute;lculo (walltime).";
 answers[69] = 1;
 units[69] = ['49'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1927. ";
 preguntaids[69] = 1927


//  Id pregunta: 1883 Año de creación de pregunta: 2016
 questions[70]= "71)  EI Documento Nacional de Identidad electr&oacute;nico:";
 choices[70]= new Array();
 choices[70][0] = "Acredita electr&oacute;nicamente la identidad personal de su titular y permite la firma electr&oacute;nica de documentos";
 choices[70][1] = "S&oacute;lo se podr&aacute; utilizar para acreditar la identidad de su titular";
 choices[70][2] = "Permitir&aacute; acreditar la identidad de las personas f&iacute;sicas o jur&iacute;dicas";
 choices[70][3] = "Puede almacenar informaci&oacute;n penal y sanitario del titular.";
 answers[70] = 0;
 units[70] = ['78'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1883. ";
 preguntaids[70] = 1883


//  Id pregunta: 1922 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; sentencia de las siguientes es correcta?:";
 choices[71]= new Array();
 choices[71][0] = "Con SSL las cabeceras IP y del nivel de transporte (TCP y UDP) son cifradas y por tanto no accesibles desde la red";
 choices[71][1] = "SSL utiliza &uacute;nicamente sistemas de clave p&uacute;blica para cifrar";
 choices[71][2] = "Para utilizar SSL los routers tienen que ser compatibles con SSL";
 choices[71][3] = "EI servidor en una sesi&oacute;n SSL no tiene por que estar siempre autenticado";
 answers[71] = 3;
 units[71] = ['120'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1922. ";
 preguntaids[71] = 1922


//  Id pregunta: 1891 Año de creación de pregunta: 2016
 questions[72]= "73)  En relaci&oacute;n con las metodolog&iacute;as ligeras de desarrollo de software, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[72]= new Array();
 choices[72][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas";
 choices[72][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio";
 choices[72][2] = "La versi&oacute;n 3 de M&eacute;trica, que soporta tanto desarrollos estructurados como orientado a objetos, es un claro ejemplo de metodolog&iacute;a ligera";
 choices[72][3] = "La metodolog&Iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a ligera";
 answers[72] = 0;
 units[72] = ['84'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 1891. ";
 preguntaids[72] = 1891


//  Id pregunta: 1943 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes componentes forman parte de la suite ofim&aacute;tica libre OpenOffice.org?";
 choices[73]= new Array();
 choices[73][0] = "Todos los mencionados a continuaci&oacute;n.";
 choices[73][1] = "Base.";
 choices[73][2] = "Writer.";
 choices[73][3] = "Math";
 answers[73] = 0;
 units[73] = ['66'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 1943. ";
 preguntaids[73] = 1943


//  Id pregunta: 1887 Año de creación de pregunta: 2016
 questions[74]= "75)  Cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[74]= new Array();
 choices[74][0] = "IPSEC es utilizada para el establecimiento de t&uacute;neles seguros a trav&eacute;s de Internet";
 choices[74][1] = "IPSEC se comporta igual con Ipv4 que con Ipv6";
 choices[74][2] = "Con IPSEC se garantiza la integridad y la autenticidad, siendo la confidencialidad opcional";
 choices[74][3] = "Cada conexi&oacute;n con IPSEC requiere de dos SA para que sea bidireccional";
 answers[74] = 1;
 units[74] = ['119'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1887. ";
 preguntaids[74] = 1887


