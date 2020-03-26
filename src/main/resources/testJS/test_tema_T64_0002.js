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
//  Id pregunta: 3403 Año de creación de pregunta: 2006
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[0]= new Array();
 choices[0][0] = "Tomcat";
 choices[0][1] = "Geronimo";
 choices[0][2] = "JBoss";
 choices[0][3] = "Los 3 lo son";
 answers[0] = 0;
 units[0] = ['64'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3403. De la especificaci&oacute;n JEE, Tomcat no cumple la especificaci&oacute;n EJB, solo servlets.";
 preguntaids[0] = 3403


//  Id pregunta: 6408 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[1]= new Array();
 choices[1][0] = "EJB Container y Web Container";
 choices[1][1] = "EJB Container, Web Container y Application Client Container";
 choices[1][2] = "b) y Applet Container";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = 2;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 6408. ";
 preguntaids[1] = 6408


//  Id pregunta: 5108 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es un tipo de componente Java?:";
 choices[2]= new Array();
 choices[2][0] = "Enterprise Java Beans (EJB).";
 choices[2][1] = "Servlets.";
 choices[2][2] = "Java Platform Enterprise Edition (J2EE).";
 choices[2][3] = "JavaServer Pages (JSP).";
 answers[2] = 2;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 5108. Junta Andaluc&iacute;a";
 preguntaids[2] = 5108


//  Id pregunta: 3392 Año de creación de pregunta: 2006
 questions[3]= "4)  &iquest;C&oacute;mo se denominan en Java EE los componentes de negocio en el entorno servidor?";
 choices[3]= new Array();
 choices[3][0] = "Applet";
 choices[3][1] = "EJB";
 choices[3][2] = "DCOM+";
 choices[3][3] = "JSP";
 answers[3] = 1;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3392. ";
 preguntaids[3] = 3392


//  Id pregunta: 5946 Año de creación de pregunta: 2007
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[4]= new Array();
 choices[4][0] = "WAR (Web Archive)";
 choices[4][1] = "EAR (Enterprise Archive)";
 choices[4][2] = "BAR (Bean Archive)";
 choices[4][3] = "JAR (Java Archive)";
 answers[4] = 2;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 5946. ";
 preguntaids[4] = 5946


//  Id pregunta: 3396 Año de creación de pregunta: 2006
 questions[5]= "6)  Respecto a JNI";
 choices[5]= new Array();
 choices[5][0] = "Se sigue conservando la portabilidad universal";
 choices[5][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[5][2] = "Permite utilizar clases java desde aplicaciones nativas.";
 choices[5][3] = "B y C son correctas";
 answers[5] = 3;
 units[5] = ['64'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3396. ";
 preguntaids[5] = 3396


//  Id pregunta: 5737 Año de creación de pregunta: 2007
 questions[6]= "7)  &iquest;Qu&eacute; tipos de directivas pueden utilizarse en las p&aacute;ginas JSP?";
 choices[6]= new Array();
 choices[6][0] = "impl&iacute;citas y explicitas";
 choices[6][1] = "page, include y taglib, entre otras";
 choices[6][2] = "request, response, pageContext y session";
 choices[6][3] = "declarativas, scriptlets y de expresi&oacute;n.";
 answers[6] = 1;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 5737. ";
 preguntaids[6] = 5737


//  Id pregunta: 6728 Año de creación de pregunta: 2009
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[7]= new Array();
 choices[7][0] = "JSTL";
 choices[7][1] = "JavaScript";
 choices[7][2] = "JNDI";
 choices[7][3] = "JavaCard";
 answers[7] = 1;
 units[7] = ['64'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 6728. ";
 preguntaids[7] = 6728


//  Id pregunta: 6725 Año de creación de pregunta: 2009
 questions[8]= "9)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[8]= new Array();
 choices[8][0] = "RMI";
 choices[8][1] = "JNI";
 choices[8][2] = "JDBC";
 choices[8][3] = "JRM";
 answers[8] = 0;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6725. ";
 preguntaids[8] = 6725


//  Id pregunta: 5815 Año de creación de pregunta: 2007
 questions[9]= "10)  La API JDBC se utiliza:";
 choices[9]= new Array();
 choices[9][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[9][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[9][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[9][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[9] = 0;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 5815. Examen 2006 JCYL";
 preguntaids[9] = 5815


//  Id pregunta: 4307 Año de creación de pregunta: 2004
 questions[10]= "11)  La tecnolog&iacute;a DCOM toma las siglas de:";
 choices[10]= new Array();
 choices[10][0] = "Distributed Communication Model";
 choices[10][1] = "Development of Concurrent Multisystems";
 choices[10][2] = "Dynamic Component-Oriented Measure";
 choices[10][3] = "Distributed Component Object Model";
 answers[10] = 3;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 4307. ";
 preguntaids[10] = 4307


//  Id pregunta: 6036 Año de creación de pregunta: 2003
 questions[11]= "12)  Indique el API (Application Programming Interface) de JAVA que facilita el acceso a registros UDDI(Universal Description, Discovery and Integration):";
 choices[11]= new Array();
 choices[11][0] = "SAAJ";
 choices[11][1] = "JAXR";
 choices[11][2] = "SOAP";
 choices[11][3] = "STAX";
 answers[11] = 1;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 6036. TIC B 2007";
 preguntaids[11] = 6036


//  Id pregunta: 5291 Año de creación de pregunta: 2006
 questions[12]= "13)  A la hora de empaquetar aplicaciones J2EE utilizaremos";
 choices[12]= new Array();
 choices[12][0] = ".jar";
 choices[12][1] = ".jar y .war dependiendo del contenido y recursos que utilicemos";
 choices[12][2] = "b) es correcta y adem&aacute;s .ear, aunque fundamentalmente se restringe para los EJBs";
 choices[12][3] = "El empaquetamiento no se determina en J2EE";
 answers[12] = 2;
 units[12] = ['64'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 5291. ";
 preguntaids[12] = 5291


//  Id pregunta: 5672 Año de creación de pregunta: 2007
 questions[13]= "14)  El tipo FLOAT definido por la clase Types de JDBC corresponde al tipo JAVA:";
 choices[13]= new Array();
 choices[13][0] = "double";
 choices[13][1] = "int";
 choices[13][2] = "byte[]";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = 0;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5672. ";
 preguntaids[13] = 5672


//  Id pregunta: 5524 Año de creación de pregunta: 2015
 questions[14]= "15)  JDBC es:";
 choices[14]= new Array();
 choices[14][0] = "Un estandar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&iacute;a ODBC.";
 choices[14][1] = "Un driver que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[14][2] = "Una API que permite la ejecuci&oacute;n de operaciones sobre una base de datos mediante lenguaje Java.";
 choices[14][3] = "El estandar ODBC para bases de datos relacionales.";
 answers[14] = 2;
 units[14] = ['64'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 5524. La A no es, porque podr&iacute;a no usar ODBC intermedio.";
 preguntaids[14] = 5524


//  Id pregunta: 5286 Año de creación de pregunta: 2006
 questions[15]= "16)  &iquest;Qu&eacute; tecnolog&iacute;a es util para crear interfaces de usuario?";
 choices[15]= new Array();
 choices[15][0] = "JSF";
 choices[15][1] = "AJAX";
 choices[15][2] = "Ambas son utiles para crear interface de usuario";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = 2;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 5286. ";
 preguntaids[15] = 5286


//  Id pregunta: 6127 Año de creación de pregunta: 2003
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java?:";
 choices[16]= new Array();
 choices[16][0] = "Enteros";
 choices[16][1] = "Booleanos";
 choices[16][2] = "Cadenas";
 choices[16][3] = "Tensores";
 answers[16] = 3;
 units[16] = ['64'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 6127. Examen TIC A1 MAP 2007";
 preguntaids[16] = 6127


//  Id pregunta: 3521 Año de creación de pregunta: 2006
 questions[17]= "18)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[17]= new Array();
 choices[17][0] = "Error y Exception";
 choices[17][1] = "Error y Catch";
 choices[17][2] = "Throw y Finally";
 choices[17][3] = "Error y Throw";
 answers[17] = 0;
 units[17] = ['64'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3521. ";
 preguntaids[17] = 3521


//  Id pregunta: 6219 Año de creación de pregunta: 2003
 questions[18]= "19)  De los siguientes enunciados indique cu&aacute;l es FALSO:";
 choices[18]= new Array();
 choices[18][0] = "Los servlets JAVA permiten que la l&oacute;gica de apliaci&oacute;n sea integrada en el proceso de solicitudes y respuestas HTTP.";
 choices[18][1] = "Los servlets JAVA son programas peque&ntilde;os de lado servidor independientes de la plataforma.";
 choices[18][2] = "Los servlets JAVA ampl&iacute;an program&aacute;ticamente la funcionalidad del servidor Web.";
 choices[18][3] = "Los servlets JAVA son programas que ampl&iacute;an la funcionalidad del cliente Web y que dependen de la plataforma.";
 answers[18] = 3;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6219. Examen TIC A Castilla La Mancha 2007";
 preguntaids[18] = 6219


//  Id pregunta: 6038 Año de creación de pregunta: 2003
 questions[19]= "20)  Seg&uacute;n JAVA EE 5, &iquest;qu&eacute; tipo de Enterprise Bean puede recibir mensajes JMS (Java Message Service)?:";
 choices[19]= new Array();
 choices[19][0] = "Message-Driven Bean.";
 choices[19][1] = "Stateful Session Bean.";
 choices[19][2] = "Stateless Session Bean.";
 choices[19][3] = "Message-Oriented Bean.";
 answers[19] = 0;
 units[19] = ['64'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 6038. TIC B 2007";
 preguntaids[19] = 6038


//  Id pregunta: 5290 Año de creación de pregunta: 2006
 questions[20]= "21)  Un servlet de Java tiene como principales caracter&iacute;sticas (se&ntilde;ale la falsa)";
 choices[20]= new Array();
 choices[20][0] = "su instalaci&oacute;n, gesti&oacute;n y ejecuci&oacute;n se realiza en un componente denominado contenedor";
 choices[20][1] = "requieren escaso c&oacute;digo para conseguir un nivel aceptable de presentaci&oacute;n, por lo cual han desplazado en parte a los JSPs";
 choices[20][2] = "Heredan de la clase abstracta HttpServlet";
 choices[20][3] = "Son todas correctas";
 answers[20] = 1;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5290. ";
 preguntaids[20] = 5290


//  Id pregunta: 6426 Año de creación de pregunta: 2003
 questions[21]= "22)  Indique cu&aacute;l de los siguientes es un framework de c&oacute;digo abierto que se ocupa de la capa de persistencia entre la l&oacute;gica de negocio y la base de datos:";
 choices[21]= new Array();
 choices[21][0] = "iBATIS";
 choices[21][1] = "JAVA SERVER FACES";
 choices[21][2] = "TAPESTRY";
 choices[21][3] = "STRUTS";
 answers[21] = 0;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 6426. ";
 preguntaids[21] = 6426


//  Id pregunta: 6123 Año de creación de pregunta: 2003
 questions[22]= "23)  Indique cu&aacute;l de los siguientes NO es un tipo de EJB (&quot;Enterprise Java Beans&quot;) en J2EE 1.4:";
 choices[22]= new Array();
 choices[22][0] = "Beans de entidad";
 choices[22][1] = "Beans de aplicaci&oacute;n";
 choices[22][2] = "Beans de sesi&oacute;n";
 choices[22][3] = "Beans orientados a mensajes";
 answers[22] = 1;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6123. Examen TIC A1 MAP 2007";
 preguntaids[22] = 6123


//  Id pregunta: 6726 Año de creación de pregunta: 2009
 questions[23]= "24)  &iquest;Qu&eacute; es JNDI?";
 choices[23]= new Array();
 choices[23][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[23][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[23][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 0;
 units[23] = ['64'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 6726. ";
 preguntaids[23] = 6726


//  Id pregunta: 6407 Año de creación de pregunta: 2003
 questions[24]= "25)  Los archivos EAR, seg&uacute;n la tecnolog&iacute;a Java EE:";
 choices[24]= new Array();
 choices[24][0] = "C&oacute;mprime s&oacute;lo archivos .class";
 choices[24][1] = "Son un tipo de archivo JAR";
 choices[24][2] = "No existen tales archivos. S&oacute;lo hay archivos WAR";
 choices[24][3] = "Es un empaquetado de archivos XML";
 answers[24] = 1;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 6407. ";
 preguntaids[24] = 6407


//  Id pregunta: 6088 Año de creación de pregunta: 2003
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[25]= new Array();
 choices[25][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[25][1] = "Es independiente del sistema operativo";
 choices[25][2] = "Es independiente de la base de datos";
 choices[25][3] = "Es un tipo de API";
 answers[25] = 0;
 units[25] = ['64'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6088. Examen TIC A1 MAP 2007";
 preguntaids[25] = 6088


//  Id pregunta: 5308 Año de creación de pregunta: 2006
 questions[26]= "27)  El servicio que copia las p&aacute;ginas de un sitio web a servidores dispersos geogr&aacute;ficamente pafa agilizar la entrega al usuario se llama";
 choices[26]= new Array();
 choices[26][0] = "procesamiento distribuido";
 choices[26][1] = "multicast";
 choices[26][2] = "cluster";
 choices[26][3] = "entrega de contenido";
 answers[26] = 3;
 units[26] = ['64'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 5308. ";
 preguntaids[26] = 5308


//  Id pregunta: 5736 Año de creación de pregunta: 2007
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes opciones NO es un contenedor para la arquitectura J2EE?";
 choices[27]= new Array();
 choices[27][0] = "contenedor web";
 choices[27][1] = "contenedor EJB";
 choices[27][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[27][3] = "contenedor de base de datos";
 answers[27] = 3;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 5736. ";
 preguntaids[27] = 5736


//  Id pregunta: 5722 Año de creación de pregunta: 2007
 questions[28]= "29)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[28]= new Array();
 choices[28][0] = "2";
 choices[28][1] = "3";
 choices[28][2] = "4";
 choices[28][3] = "tantos como SGBD's";
 answers[28] = 2;
 units[28] = ['64'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 5722. ";
 preguntaids[28] = 5722


//  Id pregunta: 4315 Año de creación de pregunta: 2004
 questions[29]= "30)  La plataforma Java que se utiliza para el desarrollo de aplicaciones para PDA es:";
 choices[29]= new Array();
 choices[29][0] = "Micro Edition";
 choices[29][1] = "Standard Edition";
 choices[29][2] = "Enterprise Edition";
 choices[29][3] = "Cualquiera de ellas indistintamente dada su portabilidad";
 answers[29] = 0;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 4315. Similar a examen TIC MAP A 2004";
 preguntaids[29] = 4315


//  Id pregunta: 6410 Año de creación de pregunta: 2003
 questions[30]= "31)  Es posible que cada programador defina sus librer&iacute;as de etiquetas JSP mediante:";
 choices[30]= new Array();
 choices[30][0] = "La extensi&oacute;n de  la clase Servlet";
 choices[30][1] = "La especificaci&oacute;n JSTL";
 choices[30][2] = "El uso de scriptlets";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = 1;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 6410. ";
 preguntaids[30] = 6410


//  Id pregunta: 6376 Año de creación de pregunta: 2003
 questions[31]= "32)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque";
 choices[31]= new Array();
 choices[31][0] = "el lenguaje Java se deriva de C++.";
 choices[31][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[31][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[31][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[31] = 1;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 6376. Examen 2006 JCYL";
 preguntaids[31] = 6376


//  Id pregunta: 5285 Año de creación de pregunta: 2006
 questions[32]= "33)  &iquest;En que se basa AJAX?";
 choices[32]= new Array();
 choices[32][0] = "En JavaScript";
 choices[32][1] = "En Java";
 choices[32][2] = "En JSP";
 choices[32][3] = "En JSF";
 answers[32] = 0;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 5285. ";
 preguntaids[32] = 5285


//  Id pregunta: 5396 Año de creación de pregunta: 2006
 questions[33]= "34)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[33]= new Array();
 choices[33][0] = "Java 2 Micro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java";
 choices[33][1] = "Los Java 2 Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java";
 choices[33][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http";
 choices[33][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet";
 answers[33] = 2;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5396. ";
 preguntaids[33] = 5396


//  Id pregunta: 5689 Año de creación de pregunta: 2007
 questions[34]= "35)  En java, &iquest;c&oacute;mo se hace referencia al objeto actual sobre el que ha sido llamado el m&eacute;todo que se esta ejecutando?";
 choices[34]= new Array();
 choices[34][0] = "Con la referencia this.";
 choices[34][1] = "Con la referencia null.";
 choices[34][2] = "No es posible.";
 choices[34][3] = "Invocando el m&eacute;todo get.";
 answers[34] = 0;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5689. ";
 preguntaids[34] = 5689


//  Id pregunta: 6724 Año de creación de pregunta: 2009
 questions[35]= "36)  &iquest;Cu&aacute;les de los siguientes elementos no pueden ser miembros de una clase en Java SE 5?";
 choices[35]= new Array();
 choices[35][0] = "Variables de instancia y de clase";
 choices[35][1] = "M&eacute;todos";
 choices[35][2] = "Otras clases (clases internas)";
 choices[35][3] = "Todas las anteriores son ciertas";
 answers[35] = 3;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6724. ";
 preguntaids[35] = 6724


//  Id pregunta: 6406 Año de creación de pregunta: 2003
 questions[36]= "37)  SWT (Standard Widget Toolkit)";
 choices[36]= new Array();
 choices[36][0] = "El rendimiento de la librer&iacute;a AWT es mejor que la de SWT";
 choices[36][1] = "Es una librer&iacute;a que proporciona funcionalidades de componentes gr&aacute;ficos  para la plataforma Eclipse.";
 choices[36][2] = "a y b son ciertas";
 choices[36][3] = "Se ha desarrollado puramente en Java";
 answers[36] = 1;
 units[36] = ['64'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 6406. ";
 preguntaids[36] = 6406


//  Id pregunta: 3394 Año de creación de pregunta: 2006
 questions[37]= "38)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[37]= new Array();
 choices[37][0] = "Superset o superconjunto.";
 choices[37][1] = "Package o paquete.";
 choices[37][2] = "Superclass o Superclase.";
 choices[37][3] = "Colection o Colecci&oacute;n.";
 answers[37] = 1;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3394. ";
 preguntaids[37] = 3394


//  Id pregunta: 3395 Año de creación de pregunta: 2006
 questions[38]= "39)  Respecto al empaquetado de aplicaciones en JAVA";
 choices[38]= new Array();
 choices[38][0] = "Utiliza el algoritmo de compresi&oacute;n LZW";
 choices[38][1] = "Para facilitar el control y orden de todos estos ficheros es para lo que se han definido los ficheros JAR";
 choices[38][2] = "Un fichero JAR puede incluir un subdirectorio de metainformaci&oacute;n llamado META-INF";
 choices[38][3] = "Todas son correctas";
 answers[38] = 3;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3395. ";
 preguntaids[38] = 3395


//  Id pregunta: 6732 Año de creación de pregunta: 2009
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes corresponde a una tecnolog&iacute;a Java para acceder a bases de datos relacionales?";
 choices[39]= new Array();
 choices[39][0] = "JRDB";
 choices[39][1] = "JPA";
 choices[39][2] = "ORM";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = 1;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 6732. ";
 preguntaids[39] = 6732


//  Id pregunta: 4336 Año de creación de pregunta: 2004
 questions[40]= "41)  El componente de servidor J2EE de uso m&aacute;s apropiado para mantener una conversaci&oacute;n con un cliente es un EJB del tipo ...";
 choices[40]= new Array();
 choices[40][0] = "Stateless Session Bean";
 choices[40][1] = "Message Driven Bean";
 choices[40][2] = "Entity Bean con persistencia BMP";
 choices[40][3] = "Stateful Session Bean";
 answers[40] = 3;
 units[40] = ['64'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 4336. ";
 preguntaids[40] = 4336


//  Id pregunta: 5549 Año de creación de pregunta: 2007
 questions[41]= "42)  J2EE es:";
 choices[41]= new Array();
 choices[41][0] = "Un producto.";
 choices[41][1] = "Un servicio.";
 choices[41][2] = "Un estandar.";
 choices[41][3] = "Un entorno de desarrollo.";
 answers[41] = 2;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5549. Es una especificaci&oacute;n que es est&aacute;ndar.";
 preguntaids[41] = 5549


//  Id pregunta: 5752 Año de creación de pregunta: 2007
 questions[42]= "43)  El driver JDBC-ODBC bridge, se utiliza";
 choices[42]= new Array();
 choices[42][0] = "cuando no existen drivers JDBC nativos.";
 choices[42][1] = "Para garantizar el &eacute;xito de los accesos a la BD.";
 choices[42][2] = "como variable de Ia tecnolog&iacute;a ODBC.";
 choices[42][3] = "para implementar operaciones ODBC, traduci&eacute;ndolas en operaciones JDBC";
 answers[42] = 0;
 units[42] = ['64'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 5752. ";
 preguntaids[42] = 5752


//  Id pregunta: 6554 Año de creación de pregunta: 2003
 questions[43]= "44)  Cual de los siguientes no ser&iacute;a un patr&oacute;n de dise&ntilde;o J2EE";
 choices[43]= new Array();
 choices[43][0] = "abstraction inversion";
 choices[43][1] = "session fa&Ccedil;ade";
 choices[43][2] = "model view controler";
 choices[43][3] = "Data Access Objects";
 answers[43] = 0;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6554. ";
 preguntaids[43] = 6554


//  Id pregunta: 5164 Año de creación de pregunta: 2003
 questions[44]= "45)  Con la API de Servlet con respecto a cookies se puede:";
 choices[44]= new Array();
 choices[44][0] = "S&oacute;lo se pueden leer cookies";
 choices[44][1] = "S&oacute;lo se pueden leer y especificar atributos de cookie pero no crear cookies";
 choices[44][2] = "Se pueden crear cookies";
 choices[44][3] = "S&oacute;lo se pueden situar los Cookies en las cabeceras de respuesta al cliente";
 answers[44] = 2;
 units[44] = ['64'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 5164. ";
 preguntaids[44] = 5164


//  Id pregunta: 5721 Año de creación de pregunta: 2007
 questions[45]= "46)  Para hacer una llamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;qu&eacute; m&eacute;todo deberemos invocar?:";
 choices[45]= new Array();
 choices[45][0] = "execute";
 choices[45][1] = "executeQuery";
 choices[45][2] = "executeProcedure";
 choices[45][3] = "executeUpdate";
 answers[45] = 0;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 5721. ";
 preguntaids[45] = 5721


//  Id pregunta: 5789 Año de creación de pregunta: 2007
 questions[46]= "47)  Una vez inicializada una aplicaci&oacute;n forms Builder preparada para Web , &iquest;que m&eacute;todos hacen posible transferir, desde el servidor de aplicaci&oacute;n al navegador del usuario, archivos de clase Java adicionales a medida que sean necesarios?";
 choices[46]= new Array();
 choices[46][0] = "tiempo real y diferido.";
 choices[46][1] = "incremental y decremental.";
 choices[46][2] = "incremental y Bundled.";
 choices[46][3] = "los archivos de clases java se transfieren solo al inicio de la aplicaci&oacute;n junto con el cliente Forms.";
 answers[46] = 2;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 5789. ";
 preguntaids[46] = 5789


//  Id pregunta: 5287 Año de creación de pregunta: 2006
 questions[47]= "48)  Con que tecnolog&iacute;a se relaciona el Bytecode";
 choices[47]= new Array();
 choices[47][0] = "Java";
 choices[47][1] = ".Net";
 choices[47][2] = "Java Script";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = 0;
 units[47] = ['64'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 5287. ";
 preguntaids[47] = 5287


//  Id pregunta: 6411 Año de creación de pregunta: 2003
 questions[48]= "49)  Indica cu&aacute;l no es una ventaja de la tecnolog&iacute;a JSF:";
 choices[48]= new Array();
 choices[48][0] = "Ofrece un alto nivel de abstracci&oacute;n en el dise&ntilde;o de la interfaz";
 choices[48][1] = "JSF comparada con otras tecnolog&iacute;as MVC (Spring MVC, Struts, WebWork, Tapestry,&hellip;) est&aacute; mas orientada a componetes y eventos";
 choices[48][2] = "Para el desarrollo de aplicaciones se basa en la implementaci&oacute;n de complejas clases Java";
 choices[48][3] = "Permite la creaci&oacute;n de nuevos componentes graficos o widgets";
 answers[48] = 2;
 units[48] = ['64'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6411. ";
 preguntaids[48] = 6411


//  Id pregunta: 5831 Año de creación de pregunta: 2007
 questions[49]= "50)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque&hellip;";
 choices[49]= new Array();
 choices[49][0] = "el lenguaje Java se deriva de C++.";
 choices[49][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[49][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[49][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[49] = 1;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 5831. Examen 2006 JCYL";
 preguntaids[49] = 5831


//  Id pregunta: 3397 Año de creación de pregunta: 2006
 questions[50]= "51)  &iquest;Qu&eacute; es un fichero JAR?";
 choices[50]= new Array();
 choices[50][0] = "Es el fichero que proporciona el entorno de ejecuci&oacute;n de java,  as&iacute; como una API gr&aacute;fica para el desarrollo de aplicaciones y applets.";
 choices[50][1] = "Es el fichero que empaqueta el entorno de ejecuci&oacute;n de java.";
 choices[50][2] = "Es el fichero que contiene el c&oacute;digo intermedio de java.";
 choices[50][3] = "Es un fichero en el que se re&uacute;nen las clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n de un applet o una aplicaci&oacute;n Java.";
 answers[50] = 3;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3397. ";
 preguntaids[50] = 3397


//  Id pregunta: 5176 Año de creación de pregunta: 2003
 questions[51]= "52)  La depuraci&oacute;n (debug) de resultados intermedios durante la ejecuci&oacute;n de trabajos java:";
 choices[51]= new Array();
 choices[51][0] = "S&oacute;lo se permite desde la m&aacute;quina donde se ejecuta";
 choices[51][1] = "No se permite la ejecuci&oacute;n de paradas intermedias";
 choices[51][2] = "Hay una arquitectura que incluye depuraci&oacute;n en remoto";
 choices[51][3] = "No tiene sentido la depuraci&oacute;n en remoto";
 answers[51] = 2;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 5176. ";
 preguntaids[51] = 5176


//  Id pregunta: 6071 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativosescritos en otros lenguajes?:";
 choices[52]= new Array();
 choices[52][0] = "RMI";
 choices[52][1] = "JAXP";
 choices[52][2] = "JNDI";
 choices[52][3] = "JNI";
 answers[52] = 3;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6071. Examen TIC A1 MAP 2007";
 preguntaids[52] = 6071


//  Id pregunta: 6190 Año de creación de pregunta: 2003
 questions[53]= "54)  &iquest;Qu&eacute; tipo de driver JDBC es aquel que convierte las llamadas JDBC a llamadas nativas de la base de datos?";
 choices[53]= new Array();
 choices[53][0] = "Tipo 1";
 choices[53][1] = "Tipo 2";
 choices[53][2] = "Tipo 3";
 choices[53][3] = "Tipo 4";
 answers[53] = 1;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6190. Examen TIC A Castilla La Mancha 2007";
 preguntaids[53] = 6190


//  Id pregunta: 5423 Año de creación de pregunta: 2007
 questions[54]= "55)  Indique que significan las siglas POJO";
 choices[54]= new Array();
 choices[54][0] = "Plain Over Java Objects";
 choices[54][1] = "Plain Old JavaBean Objects";
 choices[54][2] = "Plain Old Java Objects";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = 2;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 5423. ";
 preguntaids[54] = 5423


//  Id pregunta: 6078 Año de creación de pregunta: 2003
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[55]= new Array();
 choices[55][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute";
 choices[55][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentesplataformas";
 choices[55][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware";
 choices[55][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &quot;Java Bytecode&quot;";
 answers[55] = 0;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 6078. Examen TIC A1 MAP 2007";
 preguntaids[55] = 6078


//  Id pregunta: 5643 Año de creación de pregunta: 2007
 questions[56]= "57)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[56]= new Array();
 choices[56][0] = "java.lang";
 choices[56][1] = "java.beans";
 choices[56][2] = "java.sql";
 choices[56][3] = "java.util";
 answers[56] = 0;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 5643. ";
 preguntaids[56] = 5643


//  Id pregunta: 6731 Año de creación de pregunta: 2009
 questions[57]= "58)  &iquest;Qu&eacute; tecnolog&iacute;a de las siguientes es m&aacute;s adecuada para generar contenido HTML din&aacute;mico en una aplicaci&oacute;n Java EE?";
 choices[57]= new Array();
 choices[57][0] = "Servlets";
 choices[57][1] = "JSP";
 choices[57][2] = "JNI";
 choices[57][3] = "JAXP";
 answers[57] = 1;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6731. ";
 preguntaids[57] = 6731


//  Id pregunta: 6137 Año de creación de pregunta: 2003
 questions[58]= "59)  En Java 2 el operador &gt;&gt;:";
 choices[58]= new Array();
 choices[58][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas";
 choices[58][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo)";
 choices[58][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo)";
 choices[58][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos";
 answers[58] = 2;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 6137. Examen TIC A1 MAP 2007";
 preguntaids[58] = 6137


//  Id pregunta: 5289 Año de creación de pregunta: 2006
 questions[59]= "60)  El Patr&oacute;n MVC";
 choices[59]= new Array();
 choices[59][0] = "Hace referencia al Modelo Vista Componente";
 choices[59][1] = "minimiza el acoplamiento entre los componentes de distintas capas";
 choices[59][2] = "El Modelo se encarga de la presentaci&oacute;n al usuario";
 choices[59][3] = "Todas son incorrectas";
 answers[59] = 1;
 units[59] = ['64'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 5289. ";
 preguntaids[59] = 5289


//  Id pregunta: 5392 Año de creación de pregunta: 2006
 questions[60]= "61)  El t&eacute;rmino JigSaw se refiere a:";
 choices[60]= new Array();
 choices[60][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor";
 choices[60][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos";
 choices[60][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse";
 choices[60][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos";
 answers[60] = 0;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 5392. ";
 preguntaids[60] = 5392


//  Id pregunta: 6730 Año de creación de pregunta: 2009
 questions[61]= "62)  &iquest;Qu&eacute; tecnolog&iacute;as podemos utilizar, entre otras, para evitar utilizar c&oacute;digo Java en las p&aacute;ginas JSP?";
 choices[61]= new Array();
 choices[61][0] = "JSTL y EL";
 choices[61][1] = "Scriptlets";
 choices[61][2] = "JavaScript";
 choices[61][3] = "No es posible hacer tal cosa; toda p&aacute;gina JSP debe contener algo de c&oacute;digo Java";
 answers[61] = 0;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 6730. ";
 preguntaids[61] = 6730


//  Id pregunta: 6555 Año de creación de pregunta: 2003
 questions[62]= "63)  En una arquitectura Java EE, &iquest;d&oacute;nde situar&iacute;a un JSP?";
 choices[62]= new Array();
 choices[62][0] = "En el servidor web";
 choices[62][1] = "En el contenedor web";
 choices[62][2] = "En el contenedor de EJBs";
 choices[62][3] = "En el navegador Web";
 answers[62] = 1;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 6555. ";
 preguntaids[62] = 6555


//  Id pregunta: 6729 Año de creación de pregunta: 2009
 questions[63]= "64)  &iquest;C&oacute;mo se denominan los elementos que permiten insertar c&oacute;digo Java arbitrario en una p&aacute;gina JSP?";
 choices[63]= new Array();
 choices[63][0] = "Applets";
 choices[63][1] = "Codelets";
 choices[63][2] = "Scriptlets";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = 2;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6729. ";
 preguntaids[63] = 6729


//  Id pregunta: 6409 Año de creación de pregunta: 2003
 questions[64]= "65)  Indica la afirmaci&oacute;n correcta sobre la tecnolog&iacute;a JavaServer Faces:";
 choices[64]= new Array();
 choices[64][0] = "Ha quedado obsoleta por el framework Spring";
 choices[64][1] = "Es la nueva API Java para desarrollo de transacciones distribuidas";
 choices[64][2] = "Es una novedad del Java 2";
 choices[64][3] = "Es un framework de la capa de presentaci&oacute;n para desarrollo de aplicaciones Web";
 answers[64] = 3;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 6409. ";
 preguntaids[64] = 6409


//  Id pregunta: 5965 Año de creación de pregunta: 2007
 questions[65]= "66)  El atributo de posicionamiento de un applet &quot;absbottom&quot;:";
 choices[65]= new Array();
 choices[65][0] = "Coloca el applet en el margen izquierdo de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado asu derecha";
 choices[65][1] = "Coloca el applet en el margen derecho de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a suizquierda";
 choices[65][2] = "Coloca la parte inferior del applet coincidiendo con el centro de la l&iacute;nea actual";
 choices[65][3] = "Coloca la parte superior del applet coincidiendo con la parte superior del texto en la l&iacute;nea actual";
 answers[65] = 2;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 5965. ";
 preguntaids[65] = 5965


//  Id pregunta: 6690 Año de creación de pregunta: 2009
 questions[66]= "67)  En java, el atributo &quot;final&quot; en la declaraci&oacute;n de una variable de una clase significa que:";
 choices[66]= new Array();
 choices[66][0] = "S&oacute;lo las clases de su paquete pueden acceder a ella";
 choices[66][1] = "S&oacute;lo puede ser escrita una vez y no puede ser reescrita por clases hijas";
 choices[66][2] = "S&oacute;lo se puede acceder a trav&eacute;s de m&eacute;todos get y set";
 choices[66][3] = "Que forma parte del interface que implementa la clase";
 answers[66] = 1;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6690. ";
 preguntaids[66] = 6690


//  Id pregunta: 5175 Año de creación de pregunta: 2003
 questions[67]= "68)  Indicar la afirmaci&oacute;n falsa";
 choices[67]= new Array();
 choices[67][0] = "Los Servicios Web son m&aacute;s simples que la arquitectura CORBA";
 choices[67][1] = "Es muy dif&iacute;cil hacer interactuar una plataforma en COMcon otra en CORBA";
 choices[67][2] = "No es posible  que un  objeto CORBA  se  comunique  con un  objeto  JavaRMI,";
 choices[67][3] = "CORBA tiene m&uacute;ltiples implementaciones";
 answers[67] = 2;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 5175. ";
 preguntaids[67] = 5175


//  Id pregunta: 5417 Año de creación de pregunta: 2007
 questions[68]= "69)  &iquest;Cu&aacute;l es el nombre del paquete open source Java que se utiliza para la generaci&oacute;n de informes?";
 choices[68]= new Array();
 choices[68][0] = "iReport";
 choices[68][1] = "SaintReport";
 choices[68][2] = "JasperReports";
 choices[68][3] = "xStream";
 answers[68] = 2;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 5417. ";
 preguntaids[68] = 5417


//  Id pregunta: 3393 Año de creación de pregunta: 2006
 questions[69]= "70)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[69]= new Array();
 choices[69][0] = "extern";
 choices[69][1] = "private";
 choices[69][2] = "final";
 choices[69][3] = "static";
 answers[69] = 3;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3393. ";
 preguntaids[69] = 3393


//  Id pregunta: 5288 Año de creación de pregunta: 2006
 questions[70]= "71)  Con que tecnolog&iacute;a no se puede implementar una arquitectura SOA";
 choices[70]= new Array();
 choices[70][0] = "J2EE";
 choices[70][1] = ".Net";
 choices[70][2] = "Software Libre";
 choices[70][3] = "Se puede con todas las anteriores";
 answers[70] = 3;
 units[70] = ['64'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 5288. ";
 preguntaids[70] = 5288


//  Id pregunta: 4931 Año de creación de pregunta: 2002
 questions[71]= "72)  Un applet de Java es:";
 choices[71]= new Array();
 choices[71][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[71][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[71][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[71][3] = "Un programa Java que accede a una base de datos relacional";
 answers[71] = 2;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 4931. ";
 preguntaids[71] = 4931


//  Id pregunta: 3501 Año de creación de pregunta: 2006
 questions[72]= "73)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[72]= new Array();
 choices[72][0] = "Una extensi&oacute;n de Swing";
 choices[72][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[72][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[72][3] = "Una familia de fuentes de caracteres";
 answers[72] = 1;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3501. ";
 preguntaids[72] = 3501


//  Id pregunta: 6727 Año de creación de pregunta: 2009
 questions[73]= "74)  &iquest;Qu&eacute; es JNI?";
 choices[73]= new Array();
 choices[73][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[73][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[73][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = 1;
 units[73] = ['64'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 6727. ";
 preguntaids[73] = 6727


//  Id pregunta: 5955 Año de creación de pregunta: 2007
 questions[74]= "75)  En el entorno de trabajo necesario para desarrollar applets, el m&eacute;todo init de la clase Applet:";
 choices[74]= new Array();
 choices[74][0] = "Es invocado autom&aacute;ticamente despu&eacute;s de que Java llame al m&eacute;todo start";
 choices[74][1] = "Se utiliza siempre que el applet necesita inicializaci&oacute;n";
 choices[74][2] = "Es invocado autom&aacute;ticamente cuando el usuario sale de la p&aacute;gina en la que se encuentra el applet";
 choices[74][3] = "S&oacute;lo es invocado cuando el navegador se cierra normalmente";
 answers[74] = 1;
 units[74] = ['64'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 5955. ";
 preguntaids[74] = 5955


