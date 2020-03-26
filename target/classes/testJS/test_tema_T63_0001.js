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
//  Id pregunta: 2743 Año de creación de pregunta: 2002
 questions[0]= "1)  El CLR de Microsoft.net es:";
 choices[0]= new Array();
 choices[0][0] = "Una librer&iacute;a para acceso a base de datos heterogeneas, empleando ADO.NET";
 choices[0][1] = "El encargado de compilar a un CIL (Common Intermediate Language)";
 choices[0][2] = "Una nueva estrategia de Microsoft, que defiende &quot;cero fallos&quot; en sus pr&oacute;ximos desarrollos software";
 choices[0][3] = "El mecanismo que se utiliza para enviar las peticiones SOAP a los servidores de aplicaciones remotos";
 answers[0] = 1;
 units[0] = ['63'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2743. ";
 preguntaids[0] = 2743


//  Id pregunta: 1172 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; funci&oacute;n tiene la tecnolog&iacute;a Entity Framework de .Net?";
 choices[1]= new Array();
 choices[1][0] = "Realiza mapeos entre clases y bases de datos relacionales (ORM, Object-Relational Mapping).";
 choices[1][1] = "Permite realizar mapeos entre XML y clases (XSDS, XML Serializer-DeSerializer).";
 choices[1][2] = "Permite exponer objetos para que sean accedidos remotamente, como CORBA o DCOM.";
 choices[1][3] = "Realiza una adaptaci&oacute;n entre clases de .Net y otros lenguajes, permitiendo acceso transparente.";
 answers[1] = 0;
 units[1] = ['63'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1172. ";
 preguntaids[1] = 1172


//  Id pregunta: 2685 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Qu&eacute; indica la directiva #pragma en lenguaje C?:";
 choices[2]= new Array();
 choices[2][0] = "Le indica al compilador que genere un mensaje de error si llega a ese punto del c&oacute;digo";
 choices[2][1] = "Es un #include condicional";
 choices[2][2] = "Permite al implementador del compilador definir otras instrucciones de preprocesamiento para el compilador";
 choices[2][3] = "Nada de lo anterior es correcto";
 answers[2] = 2;
 units[2] = ['63'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2685. ";
 preguntaids[2] = 2685


//  Id pregunta: 5282 Año de creación de pregunta: 2006
 questions[3]= "4)  En .NET el c&oacute;digo fuente se compila a un lenguaje intermedio";
 choices[3]= new Array();
 choices[3][0] = "que se llama Bytecode, igual que en Jaba";
 choices[3][1] = "denominado IL, Lenguaje intermedio";
 choices[3][2] = "No se compila, sino que el c&oacute;digo es interpretado directamente por un int&eacute;rprete CLR";
 choices[3][3] = "que depende de la m&aacute;quina en la que se va a ejecutar";
 answers[3] = 1;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5282. ";
 preguntaids[3] = 5282


//  Id pregunta: 7438 Año de creación de pregunta: 2010
 questions[4]= "5)  Cu&aacute;l de las siguientes afirmaciones sobre Visual Studio .NET no es cierta:";
 choices[4]= new Array();
 choices[4][0] = "Es un IDE (Entorno Integrado de Desarrollo) desarrollado por Microsoft";
 choices[4][1] = "Permite la programaci&oacute;n WYSIWYG (What You See Is What You Get)";
 choices[4][2] = "Los programas desarrollados con Visual Studio .NET &uacute;nicamente pueden usar SQL Server para el almacenamiento de datos";
 choices[4][3] = "Las versiones Express Editions se ofrecen gratuitamente";
 answers[4] = 2;
 units[4] = ['63'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7438. ";
 preguntaids[4] = 7438


//  Id pregunta: 3388 Año de creación de pregunta: 2006
 questions[5]= "6)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[5]= new Array();
 choices[5][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[5][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[5][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[5][3] = "Programa de dibujo";
 answers[5] = 0;
 units[5] = ['63'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3388. ";
 preguntaids[5] = 3388


//  Id pregunta: 5280 Año de creación de pregunta: 2006
 questions[6]= "7)  Cual es el equivalente en .Net de los JSP de J2EE";
 choices[6]= new Array();
 choices[6][0] = "ASP.Net";
 choices[6][1] = "ASP.com";
 choices[6][2] = "ASP.org";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = 0;
 units[6] = ['63'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 5280. ";
 preguntaids[6] = 5280


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[7]= "8)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[7]= new Array();
 choices[7][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[7][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[7][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[7][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[7] = 1;
 units[7] = ['63'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 705. AGE A1 2015";
 preguntaids[7] = 705


//  Id pregunta: 6639 Año de creación de pregunta: 2009
 questions[8]= "9)  En el framework .NET, &iquest;qu&eacute; c&oacute;digo se genera como salida del compilador just in time?";
 choices[8]= new Array();
 choices[8][0] = "Bytecode";
 choices[8][1] = "IL (intemediate language)";
 choices[8][2] = "C&oacute;digo m&aacute;quina";
 choices[8][3] = "C&oacute;digo ensamblador";
 answers[8] = 2;
 units[8] = ['63'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6639. MAP 2008 A2";
 preguntaids[8] = 6639


//  Id pregunta: 6897 Año de creación de pregunta: 2010
 questions[9]= "10)  ADO.NET es:";
 choices[9]= new Array();
 choices[9][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[9][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[9][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[9][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[9] = 2;
 units[9] = ['63'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 6897. TIC A 2009";
 preguntaids[9] = 6897


//  Id pregunta: 6404 Año de creación de pregunta: 2003
 questions[10]= "11)  Respecto al DataSet de ADO.NET, se&ntilde;ala la falsa";
 choices[10]= new Array();
 choices[10][0] = "se puedeutilizar con m&uacute;ltiples y distintos or&iacute;genes, excepto XML, que es su principal carencia";
 choices[10][1] = "Se compone de uno o mas DataTable";
 choices[10][2] = "Reproduce los elementos propios de un modelo de datos relacional";
 choices[10][3] = "est&aacute; expresamente dise&ntilde;ado para el acceso adatos independientemente del origen de datos.";
 answers[10] = 0;
 units[10] = ['63'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 6404. ";
 preguntaids[10] = 6404


//  Id pregunta: 1337 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale de entre los siguientes cual NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[11]= new Array();
 choices[11][0] = "xUnit";
 choices[11][1] = "xUnit.net";
 choices[11][2] = "NUnit";
 choices[11][3] = "csUnit";
 answers[11] = 0;
 units[11] = ['63'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1337. ";
 preguntaids[11] = 1337


//  Id pregunta: 3390 Año de creación de pregunta: 2006
 questions[12]= "13)  En el entorno Microsoft.NET:";
 choices[12]= new Array();
 choices[12][0] = "MS SQL Server Compact es una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[12][1] = "MS Web Deploy 3.5 es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[12][2] = "BizTalk Server es un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[12][3] = "Todas son correctas";
 answers[12] = 3;
 units[12] = ['63'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3390. ";
 preguntaids[12] = 3390


//  Id pregunta: 5550 Año de creación de pregunta: 2007
 questions[13]= "14)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[13]= new Array();
 choices[13][0] = "Java";
 choices[13][1] = "C#";
 choices[13][2] = "Visual Basic";
 choices[13][3] = "C++";
 answers[13] = 0;
 units[13] = ['63'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5550. ";
 preguntaids[13] = 5550


//  Id pregunta: 4411 Año de creación de pregunta: 2002
 questions[14]= "15)  En las Active Server Pages de Microsoft IIS:";
 choices[14]= new Array();
 choices[14][0] = "Las p&aacute;ginas ASP son ficheros de texto, con c&oacute;digo VBScript o JScript, que es Interpretado";
 choices[14][1] = "Las p&aacute;ginas ASPX son ficheros compilados con c&oacute;digo de lenguajes Microsoft.NET";
 choices[14][2] = "Las p&aacute;ginas CFM son p&aacute;ginas con c&oacute;digo C, interpretado";
 choices[14][3] = "A y B son ciertas";
 answers[14] = 3;
 units[14] = ['63'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 4411. ";
 preguntaids[14] = 4411


//  Id pregunta: 1052 Año de creación de pregunta: 2016
 questions[15]= "16)  El entorno donde se ejecutan todas las aplicaciones .NET se llama:";
 choices[15]= new Array();
 choices[15][0] = "Swing";
 choices[15][1] = "ASP.NET";
 choices[15][2] = "ECLIPSE";
 choices[15][3] = "CLR";
 answers[15] = 3;
 units[15] = ['63'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1052. ";
 preguntaids[15] = 1052


//  Id pregunta: 4934 Año de creación de pregunta: 2002
 questions[16]= "17)  Un control Active X:";
 choices[16]= new Array();
 choices[16][0] = "S&oacute;lo se pueden escribir en Java";
 choices[16][1] = "S&oacute;lo se pueden ejecutar en sistemas Windows";
 choices[16][2] = "S&oacute;lo pueden acceder a funciones dentro del contenedor en el que se ejecutan";
 choices[16][3] = "S&oacute;lo se pueden escribir en C/C++";
 answers[16] = 1;
 units[16] = ['63'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 4934. ";
 preguntaids[16] = 4934


//  Id pregunta: 1349 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[17]= new Array();
 choices[17][0] = "Model View Controlar.";
 choices[17][1] = "Multiple Views canvas.";
 choices[17][2] = "Mobile Video Compatible.";
 choices[17][3] = "Mobile View Connector.";
 answers[17] = 0;
 units[17] = ['63'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1349. ";
 preguntaids[17] = 1349


//  Id pregunta: 1469 Año de creación de pregunta: 2016
 questions[18]= "19)  Dentro de la arquitectura de desarrollo .NET de Microsoft, el n&uacute;cleo del Framework se denomina:";
 choices[18]= new Array();
 choices[18][0] = "MSIL";
 choices[18][1] = "Bytecode";
 choices[18][2] = "CIL";
 choices[18][3] = "CLR";
 answers[18] = 3;
 units[18] = ['63'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1469. ";
 preguntaids[18] = 1469


//  Id pregunta: 3156 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[19]= new Array();
 choices[19][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[19][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[19][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[19][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[19] = 2;
 units[19] = ['63'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3156. ";
 preguntaids[19] = 3156


//  Id pregunta: 5533 Año de creación de pregunta: 2007
 questions[20]= "21)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[20]= new Array();
 choices[20][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[20][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[20][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[20][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[20] = 3;
 units[20] = ['63'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5533. ";
 preguntaids[20] = 5533


//  Id pregunta: 6635 Año de creación de pregunta: 2009
 questions[21]= "22)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[21]= new Array();
 choices[21][0] = "CLS";
 choices[21][1] = "MSIL";
 choices[21][2] = "Bytecode";
 choices[21][3] = "JIT";
 answers[21] = 0;
 units[21] = ['63'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 6635. MAP 2008 A2";
 preguntaids[21] = 6635


//  Id pregunta: 6638 Año de creación de pregunta: 2009
 questions[22]= "23)  De las siguientes cuestiones de la arquitectura .NET indique cu&aacute;l es FALSA.";
 choices[22]= new Array();
 choices[22][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[22][1] = "Las clases ADO.NET permiten a los desarrolladores interaccionar con los datos, como si fueran XML, a trav&eacute;s de las interfaces de OLE DB, ODBC y SQL Server";
 choices[22][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la platafoma.";
 choices[22][3] = "En la arquitectura . NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n.";
 answers[22] = 2;
 units[22] = ['63'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6638. MAP 2008 A2";
 preguntaids[22] = 6638


//  Id pregunta: 1938 Año de creación de pregunta: 2016
 questions[23]= "24)  En el framework .NET, (_que c&oacute;digo se genera como salida del compilador just in time?";
 choices[23]= new Array();
 choices[23][0] = "Bytecode";
 choices[23][1] = "IL (intemediate language)";
 choices[23][2] = "C&oacute;digo m&aacute;quina";
 choices[23][3] = "C&oacute;digo ensamblador";
 answers[23] = 2;
 units[23] = ['63'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1938. ";
 preguntaids[23] = 1938


//  Id pregunta: 6986 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;C&oacute;mo se denominan las interfaces de servicio de la implementaci&oacute;n del servicio de directorio de Microsoft en una red distribuida de computadores?";
 choices[24]= new Array();
 choices[24][0] = "ADSI";
 choices[24][1] = "LDAP";
 choices[24][2] = "AD";
 choices[24][3] = "ADIS";
 answers[24] = 0;
 units[24] = ['63'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 6986. ";
 preguntaids[24] = 6986


//  Id pregunta: 6985 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;Cu&aacute;l es el objetivo del Proyecto Mono de Ximian, actualmente impulsado por Novell?";
 choices[25]= new Array();
 choices[25][0] = "Crear una versi&oacute;n Java compatible con el Sistema Operativo GNU/Linux.";
 choices[25][1] = "Crear un Office open source, compatible con el Office de Microsoft.";
 choices[25][2] = "Crear un grupo de herramientas libres, basadas en GNU/Linux y compatibles con .NET seg&uacute;n lo especificado por el ECMA.";
 choices[25][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[25] = 2;
 units[25] = ['63'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6985. ";
 preguntaids[25] = 6985


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[26]= "27)  En ASP.NET MVC &iquest;cu&aacute;l de los siguientes es un nombre de controlador v&aacute;lido?";
 choices[26]= new Array();
 choices[26][0] = "Servicios.";
 choices[26][1] = "ServiciosController.";
 choices[26][2] = "ServiciosActionListener.";
 choices[26][3] = "Cualquiera de los tres es v&aacute;lido. Basta con que est&eacute; en la carpeta de controllers.";
 answers[26] = 1;
 units[26] = ['63'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 706. AGE A2 2015";
 preguntaids[26] = 706


//  Id pregunta: 7435 Año de creación de pregunta: 2010
 questions[27]= "28)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[27]= new Array();
 choices[27][0] = "MSIL";
 choices[27][1] = "JVM";
 choices[27][2] = "Biblioteca de Clases Base o BCL";
 choices[27][3] = "CLR (Common Language Runtime)";
 answers[27] = 1;
 units[27] = ['63'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7435. ";
 preguntaids[27] = 7435


//  Id pregunta: 5398 Año de creación de pregunta: 2006
 questions[28]= "29)  El entorno Microsoft, WebDAV";
 choices[28]= new Array();
 choices[28][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[28][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[28][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[28][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[28] = 1;
 units[28] = ['63'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 5398. ";
 preguntaids[28] = 5398


//  Id pregunta: 3079 Año de creación de pregunta: 2002
 questions[29]= "30)  Un proveedor de servicios OLE DB es:";
 choices[29]= new Array();
 choices[29][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[29][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[29][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[29][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[29] = 0;
 units[29] = ['63'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3079. ";
 preguntaids[29] = 3079


//  Id pregunta: 5840 Año de creación de pregunta: 2007
 questions[30]= "31)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[30]= new Array();
 choices[30][0] = "Schema Naming Context";
 choices[30][1] = "Active Directory Schema MMC";
 choices[30][2] = "Configuration Naming Context";
 choices[30][3] = "Domain Naming Context";
 answers[30] = 0;
 units[30] = ['63'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5840. Examen 2006 JCYL";
 preguntaids[30] = 5840


//  Id pregunta: 3387 Año de creación de pregunta: 2006
 questions[31]= "32)  &iquest;Qu&eacute; es el CLR?";
 choices[31]= new Array();
 choices[31][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[31][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[31][2] = "Una biblioteca de clases de objetos";
 choices[31][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[31] = 1;
 units[31] = ['63'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3387. ";
 preguntaids[31] = 3387


//  Id pregunta: 1549 Año de creación de pregunta: 2016
 questions[32]= "33)  LINQ es una extensi&oacute;n al framework de la plataforma .NET. &iquest;Qu&eacute; funcionalidad a&ntilde;ade este componente?";
 choices[32]= new Array();
 choices[32][0] = "A&ntilde;ade una capa de seguridad al runtime, centralizadas en una clase proveedora externa al programa en ejecuci&oacute;n.";
 choices[32][1] = "Permite la encapsulaci&oacute;n autom&aacute;tica de objetos COM a objetos del runtime, permitiendo su manipulaci&oacute;n de manera natural.";
 choices[32][2] = "Hace posible la Programaci&oacute;n Orientada a Aspectos, exponiendo los &quot;concerns&quot; definidos a todas las capas de la aplicaci&oacute;n.";
 choices[32][3] = "Permite efectuar nativamente en el lenguaje de programaci&oacute;n consultas a bases de datos relacionales y otras fuentes.";
 answers[32] = 3;
 units[32] = ['63'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1549. ";
 preguntaids[32] = 1549


//  Id pregunta: 1491 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes modelos de programaci&oacute;n de .Net est&aacute; orientado a la implementaci&oacute;n de aplicaciones orientadas a servicios?";
 choices[33]= new Array();
 choices[33][0] = "Windows Services Foundation.";
 choices[33][1] = "Windows Communication Foundation.";
 choices[33][2] = "Windows Network Foundation.";
 choices[33][3] = "ASP.Net.";
 answers[33] = 1;
 units[33] = ['63'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1491. ";
 preguntaids[33] = 1491


//  Id pregunta: 6634 Año de creación de pregunta: 2009
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes apartados NO es un grupo clave de la biblioteca de clases base en .NET?";
 choices[34]= new Array();
 choices[34][0] = "Windows Presentation Foundation";
 choices[34][1] = "ASP.NET";
 choices[34][2] = "ADO.NET";
 choices[34][3] = "ACY.NET";
 answers[34] = 3;
 units[34] = ['63'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 6634. MAP 2008 A1";
 preguntaids[34] = 6634


//  Id pregunta: 2530 Año de creación de pregunta: 2004
 questions[35]= "36)  Indicar la afirmaci&oacute;n INCORRECTA respecto MS ASP.NET";
 choices[35]= new Array();
 choices[35][0] = "ASP.NET puede utilizar cualquier lenguaje de programaci&oacute;n soportado por .NET";
 choices[35][1] = "Es compatible con p&aacute;ginas ASP existentes";
 choices[35][2] = "Necesita el .NET Framework para su ejecuci&oacute;n";
 choices[35][3] = "Se puede utilizar con servidores web que no sean IIS, como Apache o nginx";
 answers[35] = 3;
 units[35] = ['63'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2530. ";
 preguntaids[35] = 2530


//  Id pregunta: 5645 Año de creación de pregunta: 2007
 questions[36]= "37)  &iquest;Cual de las siguientes sentencias es falsa?";
 choices[36]= new Array();
 choices[36][0] = "Una aplicaci&oacute;n ASP.NET se corresponde con un directorio virtual y todos los objetos ASP.NET incluidos en el mismo directorio virtual constituyen una aplicaci&oacute;n ASP.NET";
 choices[36][1] = "ADO.NET es el servicio de acceso a datos asociado a ASP.NET";
 choices[36][2] = "ASP.NET ofrece dos grupos de controles: controles Web y controles HTML";
 choices[36][3] = "Un formulario ASP.NET es un archivo HTML que se guarda en un fichero con extensi&oacute;n .net";
 answers[36] = 3;
 units[36] = ['63'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5645. ";
 preguntaids[36] = 5645


//  Id pregunta: 1494 Año de creación de pregunta: 2016
 questions[37]= "38)  En el &aacute;mbito de la tecnolog&iacute;a ADO.NET, indique qu&eacute; est&aacute; definiendo la siguiente sentencia: &quot;Es una representaci&oacute;n de datos residente en memoria que proporciona un modelo de programaci&oacute;n relacional coherente independientemente del origen de datos que contiene&quot;:";
 choices[37]= new Array();
 choices[37][0] = "DataSet";
 choices[37][1] = "DataView";
 choices[37][2] = "ADOMapper";
 choices[37][3] = "DataModel";
 answers[37] = 0;
 units[37] = ['63'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1494. ";
 preguntaids[37] = 1494


//  Id pregunta: 1482 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la plataforma .NET es verdadera?";
 choices[38]= new Array();
 choices[38][0] = "Es multilenguaje.";
 choices[38][1] = "Los programas desarrollados en .NET se compilan en lenguaje maquina.";
 choices[38][2] = "Mono es una implementaci&oacute;n no oficial de .NET para el sistema operativo Mac OS X.";
 choices[38][3] = "Eclipse es uno de los IDEs m&aacute;s populares y utilizados en la plataforma .NET.";
 answers[38] = 0;
 units[38] = ['63'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1482. ";
 preguntaids[38] = 1482


//  Id pregunta: 6637 Año de creación de pregunta: 2009
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes objetos no forma parte del proveedor de datos del modelo de objetos ADO.NET?";
 choices[39]= new Array();
 choices[39][0] = "Connection.";
 choices[39][1] = "Command.";
 choices[39][2] = "DataAdapter.";
 choices[39][3] = "DataSet.";
 answers[39] = 3;
 units[39] = ['63'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 6637. MAP 2008 A2";
 preguntaids[39] = 6637


//  Id pregunta: 5936 Año de creación de pregunta: 2007
 questions[40]= "41)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[40]= new Array();
 choices[40][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &quot;Permitir ordenaci&oacute;n&quot; en elGenerador de propiedades y generar una rutina de tratamiento del evento SortCommand";
 choices[40][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculadospor cada control en las plantillas del control DataList";
 choices[40][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador depropiedades";
 choices[40][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del controlDataGrid";
 answers[40] = 2;
 units[40] = ['63'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 5936. ";
 preguntaids[40] = 5936


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[41]= "42)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[41]= new Array();
 choices[41][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[41][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[41][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[41][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[41] = 1;
 units[41] = ['63'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 708. Junta de Extremadura A1 2015";
 preguntaids[41] = 708


//  Id pregunta: 5644 Año de creación de pregunta: 2007
 questions[42]= "43)  Si consideramos el framework .Net &iquest;Que entender&iacute;amos por CTS (Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[42]= new Array();
 choices[42][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[42][1] = "Es un sistema tipificado de Software";
 choices[42][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 0;
 units[42] = ['63'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 5644. ";
 preguntaids[42] = 5644


//  Id pregunta: 2698 Año de creación de pregunta: 2002
 questions[43]= "44)  COM:";
 choices[43]= new Array();
 choices[43][0] = "Es la extensi&oacute;n del sistema MS/DOS ligada a ejecutables de menos de 64 Kb";
 choices[43][1] = "Es el TLD asociado a organizaciones comerciales de EEUU";
 choices[43][2] = "Son las siglas de Component Object Model, arquitectura de desarrollo de Microsoft, previa a .NET";
 choices[43][3] = "Todas las respuestas anteriores son ciertas";
 answers[43] = 3;
 units[43] = ['63'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2698. ";
 preguntaids[43] = 2698


//  Id pregunta: 3289 Año de creación de pregunta: 2003
 questions[44]= "45)  Un debugger (depurador) de programas :";
 choices[44]= new Array();
 choices[44][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[44][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[44][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[44][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[44] = 1;
 units[44] = ['63'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3289. ";
 preguntaids[44] = 3289


//  Id pregunta: 6636 Año de creación de pregunta: 2009
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de los siguientes objetos forma parte de los componentes proveedores de datos .NET Framework de ADO.NET";
 choices[45]= new Array();
 choices[45][0] = "DataSet";
 choices[45][1] = "DataTable";
 choices[45][2] = "DataAdapter";
 choices[45][3] = "RecordSet";
 answers[45] = 2;
 units[45] = ['63'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 6636. MAP 2008 A2";
 preguntaids[45] = 6636


//  Id pregunta: 1174 Año de creación de pregunta: 2016
 questions[46]= "47)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[46]= new Array();
 choices[46][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[46][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[46][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[46][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[46] = 3;
 units[46] = ['63'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1174. ";
 preguntaids[46] = 1174


//  Id pregunta: 1605 Año de creación de pregunta: 2016
 questions[47]= "48)  En el &aacute;mbito de las plataformas .NET, se&ntilde;ale cual de las siguientes afirmaciones es FALSA:";
 choices[47]= new Array();
 choices[47][0] = "En ADO.NET los comandos de datos se usan para empaquetar las instrucciones SQL o los procedimientos almacenados.";
 choices[47][1] = "En ADO.NET no se utiliza XML directamente cuando se trabaja con metadatos.";
 choices[47][2] = "En las aplicaciones Web ASP.NET, los componentes est&aacute;n desconectados entre s&iacute; inherentemente.";
 choices[47][3] = "En ADO.NET, el formato de transferencia de datos es XML.";
 answers[47] = 1;
 units[47] = ['63'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1605. ";
 preguntaids[47] = 1605


//  Id pregunta: 1306 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Con que directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[48]= new Array();
 choices[48][0] = "Master";
 choices[48][1] = "MasterPage";
 choices[48][2] = "Master.Page";
 choices[48][3] = "Page";
 answers[48] = 0;
 units[48] = ['63'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1306. ";
 preguntaids[48] = 1306


//  Id pregunta: 1668 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[49]= new Array();
 choices[49][0] = "CLS";
 choices[49][1] = "MSIL";
 choices[49][2] = "Bytecode";
 choices[49][3] = "JIT";
 answers[49] = 0;
 units[49] = ['63'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1668. ";
 preguntaids[49] = 1668


//  Id pregunta: 2535 Año de creación de pregunta: 2004
 questions[50]= "51)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[50]= new Array();
 choices[50][0] = "ODBC";
 choices[50][1] = "ADO";
 choices[50][2] = "OLE DB";
 choices[50][3] = "Cualquiera de los anteriores";
 answers[50] = 3;
 units[50] = ['63'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2535. ";
 preguntaids[50] = 2535


//  Id pregunta: 1171 Año de creación de pregunta: 2016
 questions[51]= "52)  En la plataforma Microsoft .NET, el encargado de transformar el c&oacute;digo intermedio a c&oacute;digo m&aacute;quina se denomina:";
 choices[51]= new Array();
 choices[51][0] = "ByteCode.";
 choices[51][1] = "Empaquetador COM.";
 choices[51][2] = "CIL.";
 choices[51][3] = "CLR.";
 answers[51] = 3;
 units[51] = ['63'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1171. ";
 preguntaids[51] = 1171


//  Id pregunta: 7434 Año de creación de pregunta: 2010
 questions[52]= "53)  Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de acceso a datos de Microsoft:";
 choices[52]= new Array();
 choices[52][0] = "ADO.NET";
 choices[52][1] = "OLEDB";
 choices[52][2] = "DEA";
 choices[52][3] = "DAO";
 answers[52] = 2;
 units[52] = ['63'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7434. ";
 preguntaids[52] = 7434


//  Id pregunta: 1937 Año de creación de pregunta: 2016
 questions[53]= "54)  De las siguientes cuestiones de la arquitectura .NET indique cual es FALSA.";
 choices[53]= new Array();
 choices[53][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[53][1] = "Las clases ADO.NET permiten acceder a datos.";
 choices[53][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la plataforma.";
 choices[53][3] = "En la arquitectura .NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n";
 answers[53] = 2;
 units[53] = ['63'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1937. ";
 preguntaids[53] = 1937


//  Id pregunta: 3389 Año de creación de pregunta: 2006
 questions[54]= "55)  En la arquitectura de la plataforma .NET";
 choices[54]= new Array();
 choices[54][0] = "CLR es el entorno de ejecuci&oacute;n para .NET";
 choices[54][1] = "CLS define las reglas que debe cumplir todo lenguaje que quiera trabajar con .NET.";
 choices[54][2] = "WebForms se utiliza para el desarrollo de aplicaciones dirigidas a Internet";
 choices[54][3] = "Todas son correctas";
 answers[54] = 3;
 units[54] = ['63'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3389. ";
 preguntaids[54] = 3389


//  Id pregunta: 1483 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;C&oacute;mo se llama el conjunto de bibliotecas utilizadas en programaci&oacute;n para hacer pruebas unitarias de aplicaciones en el entorno .NET?";
 choices[55]= new Array();
 choices[55][0] = "NetProof";
 choices[55][1] = "JUnit";
 choices[55][2] = "Nunit";
 choices[55][3] = "Jproof";
 answers[55] = 2;
 units[55] = ['63'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1483. ";
 preguntaids[55] = 1483


//  Id pregunta: 6405 Año de creación de pregunta: 2003
 questions[56]= "57)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[56]= new Array();
 choices[56][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[56][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[56][2] = "Es la especificacion del framework .NET";
 choices[56][3] = "Todas son falsas";
 answers[56] = 1;
 units[56] = ['63'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6405. ";
 preguntaids[56] = 6405


//  Id pregunta: 6220 Año de creación de pregunta: 2003
 questions[57]= "58)  &iquest;Cu&aacute;les son los componentes primordiales de .NET Framework?";
 choices[57]= new Array();
 choices[57][0] = "ASP.net y ADO.net";
 choices[57][1] = "Common Language Runtime (CLR) y Clases Framework";
 choices[57][2] = "Common Language Specification (CLS) y Polimorfismo.";
 choices[57][3] = "Hypertext Markup Language (HTML) y Unified Modeling Language (UML)";
 answers[57] = 1;
 units[57] = ['63'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6220. Examen TIC A Castilla La Mancha 2007";
 preguntaids[57] = 6220


//  Id pregunta: 5475 Año de creación de pregunta: 2007
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[58]= new Array();
 choices[58][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[58][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[58][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[58][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[58] = 0;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 5475. ";
 preguntaids[58] = 5475


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la respuesta INCORRECTA en relaci&oacute;n a la tecnolog&iacute;a LINQ to DataSet:";
 choices[59]= new Array();
 choices[59][0] = "No se pueden utilizar las colecciones de objeto IEnumerable, debido a su incompatibilidad con IEnumerable&lt;T&gt;.";
 choices[59][1] = "Facilita y acelera las consultas en datos almacenados en cach&eacute; en un objeto DataSet.";
 choices[59][2] = "LINQ proviene de Language-Integrated Query.";
 choices[59][3] = "Es una innovaci&oacute;n introducida en Visual Studio 2008 y .NET Framework versi&oacute;n 3.5.";
 answers[59] = 0;
 units[59] = ['63'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 707. AGE A2 2015";
 preguntaids[59] = 707


//  Id pregunta: 7192 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Qu&eacute; componentes incluye la .net framework class library?";
 choices[60]= new Array();
 choices[60][0] = "Common language runtime (CLR) and the .NET framework class library";
 choices[60][1] = "ADO.NET, ASP.NET, Windows Forms, and Windows Presentation Foundation (WPF)";
 choices[60][2] = "ASP.NET applications, Web Forms and Web Services";
 choices[60][3] = "Windows Presentation Foundation (WPF), ASP.NET Portal, Windows Form Portal";
 answers[60] = 1;
 units[60] = ['63'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7192. Castilla La Mancha 2009";
 preguntaids[60] = 7192


//  Id pregunta: 7436 Año de creación de pregunta: 2010
 questions[61]= "62)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[61]= new Array();
 choices[61][0] = "COBOL";
 choices[61][1] = "Fortran";
 choices[61][2] = "Delphi";
 choices[61][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[61] = 3;
 units[61] = ['63'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7436. ";
 preguntaids[61] = 7436


//  Id pregunta: 3515 Año de creación de pregunta: 2006
 questions[62]= "63)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[62]= new Array();
 choices[62][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios";
 choices[62][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n";
 choices[62][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows";
 choices[62][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0";
 answers[62] = 1;
 units[62] = ['63'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3515. ";
 preguntaids[62] = 3515


//  Id pregunta: 7437 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[63]= new Array();
 choices[63][0] = "Active Server Pages";
 choices[63][1] = "Active Side Pages";
 choices[63][2] = "Archive Server Pages";
 choices[63][3] = "Archive Side Pages";
 answers[63] = 0;
 units[63] = ['63'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7437. ";
 preguntaids[63] = 7437


//  Id pregunta: 5281 Año de creación de pregunta: 2006
 questions[64]= "65)  Cuando hablamos de tecnolog&iacute;a .NET, los interfaces de servicios";
 choices[64]= new Array();
 choices[64][0] = "Se denominan tambi&eacute;n fachadas empresariales";
 choices[64][1] = "permiten exponer el acceso a los datos como un servicio";
 choices[64][2] = "Interaccionan directamente con el usuario";
 choices[64][3] = "Ninguna de las anteriores es correcta";
 answers[64] = 0;
 units[64] = ['63'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 5281. ";
 preguntaids[64] = 5281


//  Id pregunta: 2567 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows?";
 choices[65]= new Array();
 choices[65][0] = "ASP.NET";
 choices[65][1] = "PHP";
 choices[65][2] = "Java EE (Servlets)";
 choices[65][3] = "Todas son v&aacute;lidas";
 answers[65] = 3;
 units[65] = ['63'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2567. ";
 preguntaids[65] = 2567


//  Id pregunta: 6633 Año de creación de pregunta: 2009
 questions[66]= "67)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[66]= new Array();
 choices[66][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[66][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[66][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[66][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[66] = 1;
 units[66] = ['63'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6633. MAP 2008 A1";
 preguntaids[66] = 6633


//  Id pregunta: 1936 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale como se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET:";
 choices[67]= new Array();
 choices[67][0] = "CLS";
 choices[67][1] = "MSIL";
 choices[67][2] = "Bytecode";
 choices[67][3] = "JIT";
 answers[67] = 0;
 units[67] = ['63'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1936. ";
 preguntaids[67] = 1936


//  Id pregunta: 6984 Año de creación de pregunta: 2010
 questions[68]= "69)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[68]= new Array();
 choices[68][0] = "CIL";
 choices[68][1] = "CLI";
 choices[68][2] = "JIT";
 choices[68][3] = "CLR";
 answers[68] = 0;
 units[68] = ['63'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 6984. ";
 preguntaids[68] = 6984


//  Id pregunta: 3503 Año de creación de pregunta: 2006
 questions[69]= "70)  La palabra clave de Visual Basic.NET &quot;overrides&quot; se utiliza para:";
 choices[69]= new Array();
 choices[69][0] = "Heredar todos los miembros no privados de la clase base";
 choices[69][1] = "Especificar qu&eacute; clase no se puede utilizar como clase base";
 choices[69][2] = "Indicar que el procedimiento reemplaza un procedimiento de la clase base";
 choices[69][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase";
 answers[69] = 2;
 units[69] = ['63'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3503. ";
 preguntaids[69] = 3503


//  Id pregunta: 1347 Año de creación de pregunta: 2016
 questions[70]= "71)  EI Entity Framework es:";
 choices[70]= new Array();
 choices[70][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[70][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[70][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[70][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[70] = 0;
 units[70] = ['63'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1347. ";
 preguntaids[70] = 1347


//  Id pregunta: 3097 Año de creación de pregunta: 2002
 questions[71]= "72)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[71]= new Array();
 choices[71][0] = "ODBC";
 choices[71][1] = "Visual Basic";
 choices[71][2] = "DCOM";
 choices[71][3] = "DNA";
 answers[71] = 2;
 units[71] = ['63'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3097. ";
 preguntaids[71] = 3097


//  Id pregunta: 3331 Año de creación de pregunta: 2004
 questions[72]= "73)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[72]= new Array();
 choices[72][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[72][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[72][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[72][3] = "Todas son ciertas";
 answers[72] = 3;
 units[72] = ['63'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3331. ";
 preguntaids[72] = 3331


//  Id pregunta: 5393 Año de creación de pregunta: 2006
 questions[73]= "74)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo .NET";
 choices[73]= new Array();
 choices[73][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[73][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[73][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[73][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[73] = 1;
 units[73] = ['63'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 5393. ";
 preguntaids[73] = 5393


//  Id pregunta: 1175 Año de creación de pregunta: 2016
 questions[74]= "75)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[74]= new Array();
 choices[74][0] = "EntityConnection.";
 choices[74][1] = "SqlConnection.";
 choices[74][2] = "SqlCeConnection.";
 choices[74][3] = "OleOdbcConnection.";
 answers[74] = 3;
 units[74] = ['63'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1175. ";
 preguntaids[74] = 1175


