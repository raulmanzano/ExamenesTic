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
//  Id pregunta: 9351 Año de creación de pregunta: 2014
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l de las siguientes opciones se ajusta a la siguiente definici&oacute;n: plataforma basada en Java que permite crear rich internet applications (RIA) que se comportan de la misma forma en distintas plataformas:";
 choices[0]= new Array();
 choices[0][0] = "Flex";
 choices[0][1] = "JavaFX";
 choices[0][2] = "AJAX";
 choices[0][3] = "Silverlight";
 answers[0] = 1;
 units[0] = ['64'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9351. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[0] = 9351


//  Id pregunta: 9529 Año de creación de pregunta: 2014
 questions[1]= "2)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:  int [] x = new int[25];";
 choices[1]= new Array();
 choices[1][0] = "x[24] es 0";
 choices[1][1] = "x[24] es indefinido";
 choices[1][2] = "x[25] es 0";
 choices[1][3] = "x[0] es igual a null";
 answers[1] = 0;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9529. ";
 preguntaids[1] = 9529


//  Id pregunta: 9520 Año de creación de pregunta: 2014
 questions[2]= "3)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[2]= new Array();
 choices[2][0] = "GenericServlet";
 choices[2][1] = "ServletConfig";
 choices[2][2] = "ServletContext";
 choices[2][3] = "HttpServletRequest";
 answers[2] = 3;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9520. ";
 preguntaids[2] = 9520


//  Id pregunta: 10421 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de la clase HttpServlet?";
 choices[3]= new Array();
 choices[3][0] = "doGet(). Se ejecuta cuando se recibe una petici&oacute;n HTTP GET.";
 choices[3][1] = "doPush(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUSH.";
 choices[3][2] = "doPost(). Se ejecuta cuando se recibe una petici&oacute;n HTTP POST.";
 choices[3][3] = "doPut(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUT.";
 answers[3] = 1;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10421. ";
 preguntaids[3] = 10421


//  Id pregunta: 9513 Año de creación de pregunta: 2014
 questions[4]= "5)  Para que la siguiente sentencia compile:  float a = 100.21;  I) Necesita hacer un casting a float: float a = (float) 100.21;  II) Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;  III) Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[4]= new Array();
 choices[4][0] = "Compila bien sin cambios";
 choices[4][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[4][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[4][3] = "I), II) y III) son v&aacute;lidas";
 answers[4] = 3;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9513. ";
 preguntaids[4] = 9513


//  Id pregunta: 9829 Año de creación de pregunta: 2015
 questions[5]= "6)  Indique la respuesta incorrecta:";
 choices[5]= new Array();
 choices[5][0] = "Java es independiente de la plataforma.";
 choices[5][1] = "El entorno de ejecuci&oacute;n de Java es el responsable de gestionar el ciclo de vida de los objetos.";
 choices[5][2] = "El Global Interpreter Lock (GIL) permite la concurrencia del lenguaje Java.";
 choices[5][3] = "Un programa desarrollado en Java requiere una m&aacute;quina virtual para ejecutarse.";
 answers[5] = 2;
 units[5] = ['64'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9829. El GIL es un mecanismo de Python. Java s&iacute; es concurrente.";
 preguntaids[5] = 9829


//  Id pregunta: 10048 Año de creación de pregunta: 2015
 questions[6]= "7)  Elija la respuesta correcta respecto Java EE 7:";
 choices[6]= new Array();
 choices[6][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[6][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[6][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[6][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[6] = 2;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10048. Examen TIC A2 2014";
 preguntaids[6] = 10048


//  Id pregunta: 9116 Año de creación de pregunta: 2014
 questions[7]= "8)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[7]= new Array();
 choices[7][0] = "Contexts and Dependency Injection.";
 choices[7][1] = "Common Display Interface.";
 choices[7][2] = "Context-Dependent Interface.";
 choices[7][3] = "Case-Driven Implementation.";
 answers[7] = 0;
 units[7] = ['64'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9116. Examen TIC A2 2013";
 preguntaids[7] = 9116


//  Id pregunta: 8991 Año de creación de pregunta: 2013
 questions[8]= "9)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[8]= new Array();
 choices[8][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller)";
 choices[8][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[8][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[8][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE";
 answers[8] = 0;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8991. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[8] = 8991


//  Id pregunta: 10411 Año de creación de pregunta: 2015
 questions[9]= "10)  En relaci&oacute;n con las interfaces de programaci&oacute;n para crear GUI en Java:";
 choices[9]= new Array();
 choices[9][0] = "La&nbsp;Java Foundation Classes&nbsp;(JFC) es un framework gr&aacute;fico para construir interfaces gr&aacute;ficas de usuario (GUIs)  basadas en&nbsp;Java y est&aacute; compuesto por AWT,Swing&nbsp;y&nbsp;Java 2D.";
 choices[9][1] = "Aunque Swing est&aacute; basado en AWT, se trata de una implementaci&oacute;n de controles gr&aacute;ficos en Java puro.";
 choices[9][2] = "JavaFX, aunque est&aacute; incluido en el JDK/JRE, no est&aacute; basado en ninguna especificaci&oacute;n est&aacute;ndar JSR sino que es un producto de Oracle.";
 choices[9][3] = "Todas las respuestas son verdaderas.";
 answers[9] = 3;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10411. ";
 preguntaids[9] = 10411


//  Id pregunta: 10410 Año de creación de pregunta: 2015
 questions[10]= "11)  El Java Plug-in:";
 choices[10]= new Array();
 choices[10][0] = "Dispone de un panel que permite configurar ciertos aspectos de seguridad y de gesti&oacute;n de certificados, entre otros.";
 choices[10][1] = "Sirve de puente entre los navegadores y los distintos entornos de ejecuci&oacute;n de java (JRE) que se hayan instalado en la m&aacute;quina cliente.";
 choices[10][2] = "Se incluye dentro del JRE.";
 choices[10][3] = "Todas las respuestas son verdaderas.";
 answers[10] = 3;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10410. ";
 preguntaids[10] = 10410


//  Id pregunta: 10425 Año de creación de pregunta: 2015
 questions[11]= "12)  En relaci&oacute;n con las tecnolog&iacute;as JAXP y StAX seleccione la respuesta err&oacute;nea";
 choices[11]= new Array();
 choices[11][0] = "La forma de realizar el parsing es distinta, de tipo push en el caso de StAX frente al tipo pull de SAX.";
 choices[11][1] = "La API JAXP nos facilita el acceso, la generaci&oacute;n, validaci&oacute;n y transformaci&oacute;n de ficheros XML.";
 choices[11][2] = "La API StAX es bidireccional, permitiendo tanto la lectura como la escritura de documentos XML.";
 choices[11][3] = "La API StAX expone m&eacute;todos para el procesamiento de documentos XML de forma iterativa y basada en eventos.";
 answers[11] = 0;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10425. ";
 preguntaids[11] = 10425


//  Id pregunta: 9523 Año de creación de pregunta: 2014
 questions[12]= "13)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[12]= new Array();
 choices[12][0] = "getHeaderValues() of HttpServletRequest";
 choices[12][1] = "getHeaderValue() of ServletRequest";
 choices[12][2] = "getHeader() of HttpServletRequest";
 choices[12][3] = "getHeader() of ServletRequest";
 answers[12] = 2;
 units[12] = ['64'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9523. ";
 preguntaids[12] = 9523


//  Id pregunta: 8962 Año de creación de pregunta: 2013
 questions[13]= "14)  Los EJB de tipo entity pueden ser:";
 choices[13]= new Array();
 choices[13][0] = "De dos tipos: RMP y CMP";
 choices[13][1] = "De dos tipos: BMP y CMP";
 choices[13][2] = "De tres tipos: BMP, CMP y JMP";
 choices[13][3] = "De tres tipos: BMP, CMP y SMP";
 answers[13] = 1;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8962. ";
 preguntaids[13] = 8962


//  Id pregunta: 10426 Año de creación de pregunta: 2015
 questions[14]= "15)  SAAJ son las siglas de un API de Java que significa";
 choices[14]= new Array();
 choices[14][0] = "Service with Attachments API for Java.";
 choices[14][1] = "SOAP without Attachments API for Java.";
 choices[14][2] = "SOAP with Attachments API for Java.";
 choices[14][3] = "El acr&oacute;nimo est&aacute; invertido, realmente es Java Authentication and Authorization Service (JAAS).";
 answers[14] = 2;
 units[14] = ['64'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10426. ";
 preguntaids[14] = 10426


//  Id pregunta: 8964 Año de creación de pregunta: 2013
 questions[15]= "16)  Indique la afirmaci&oacute;n falsa:";
 choices[15]= new Array();
 choices[15][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[15][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[15][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[15][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[15] = 3;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8964. ";
 preguntaids[15] = 8964


//  Id pregunta: 9515 Año de creación de pregunta: 2014
 questions[16]= "17)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[16]= new Array();
 choices[16][0] = "sleep(long msec);";
 choices[16][1] = "start();";
 choices[16][2] = "wait();";
 choices[16][3] = "A y B son correctas.";
 answers[16] = 3;
 units[16] = ['64'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9515. ";
 preguntaids[16] = 9515


//  Id pregunta: 10409 Año de creación de pregunta: 2015
 questions[17]= "18)  Sobre la  tecnolog&iacute;a Java WebStart es cierto que:";
 choices[17]= new Array();
 choices[17][0] = "Permite la  instalaci&oacute;n de la aplicaci&oacute;n pero no su actualizaci&oacute;n.";
 choices[17][1] = "Permite la distribuci&oacute;n de aplicaciones Java sin instalaci&oacute;n adicional y desde cualquier navegador web.";
 choices[17][2] = "Utiliza JNLP (Java LaunchingProtocol) definido en la JSR-56 y basado en XML.";
 choices[17][3] = "Las dos anteriores son ciertas.";
 answers[17] = 3;
 units[17] = ['64'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10409. ";
 preguntaids[17] = 10409


//  Id pregunta: 10422 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes pasos es incorrecto para desplegar un servlet en un servidor web?";
 choices[18]= new Array();
 choices[18][0] = "Indicando en el web.xml la URL a la que responder&aacute; y la clase que lo implementar&aacute;.";
 choices[18][1] = "Implementado la clase del servlet, que implementar&aacute; la interfaz de IhttpServlet.";
 choices[18][2] = "Implementado la clase del servlet, que heredar&aacute; de la clase abstracta HttpServlet.";
 choices[18][3] = "Copiar la clase compilada en el directorio del servidor WEB-INF\classes\.";
 answers[18] = 1;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10422. ";
 preguntaids[18] = 10422


//  Id pregunta: 10049 Año de creación de pregunta: 2015
 questions[19]= "20)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Java BluePrints.";
 choices[19][1] = "Java Specification Request.";
 choices[19][2] = "Java Community Process.";
 choices[19][3] = "Java Pattern Spec.";
 answers[19] = 0;
 units[19] = ['64'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10049. Examen TIC A2 2014";
 preguntaids[19] = 10049


//  Id pregunta: 10047 Año de creación de pregunta: 2015
 questions[20]= "21)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[20]= new Array();
 choices[20][0] = "JSR 342.";
 choices[20][1] = "JSR 366.";
 choices[20][2] = "JSR 324.";
 choices[20][3] = "JSR 224.";
 answers[20] = 0;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10047. Examen TIC A2 2014";
 preguntaids[20] = 10047


//  Id pregunta: 9525 Año de creación de pregunta: 2014
 questions[21]= "22)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[21]= new Array();
 choices[21][0] = "Java Messaging Services (JMS)";
 choices[21][1] = "Java Naming and Directory Interface (JNDI)";
 choices[21][2] = "Remote Method Invocation (RMI)";
 choices[21][3] = "JavaBeans Activation Framework (JMF)";
 answers[21] = 1;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9525. ";
 preguntaids[21] = 9525


//  Id pregunta: 9349 Año de creación de pregunta: 2014
 questions[22]= "23)  Throwable es la superclase de todos los errores y excepciones de Java SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[22]= new Array();
 choices[22][0] = "java.lang";
 choices[22][1] = "java.error";
 choices[22][2] = "java.util";
 choices[22][3] = "Throwable no es una clase, es un interface, y &eacute;ste pertenece al paquete java.io.";
 answers[22] = 0;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9349. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[22] = 9349


//  Id pregunta: 10429 Año de creación de pregunta: 2015
 questions[23]= "24)  Respecto al Framework de Java Struts:";
 choices[23]= new Array();
 choices[23][0] = "El controlador consiste en un servlet llamado ActionServlet.";
 choices[23][1] = "No dispone  de una librer&iacute;a de etiquetas espec&iacute;fica (custom tag library).";
 choices[23][2] = "La &quot;uni&oacute;n&quot; de Struts 1 y JSF ha sido finalmente adoptada como la versi&oacute;n 2.0 de Apache Struts.";
 choices[23][3] = "No soporta internacionalizaci&oacute;n.";
 answers[23] = 0;
 units[23] = ['64'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 10429. ";
 preguntaids[23] = 10429


//  Id pregunta: 10500 Año de creación de pregunta: 2015
 questions[24]= "25)  En cuanto a la utilizaci&oacute;n de web services, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[24]= new Array();
 choices[24][0] = "Los web services en .NET tienen la extensi&oacute;n WSDL";
 choices[24][1] = "El servicio web es descrito mediante un archivo IDL";
 choices[24][2] = "WSDL define el servicio web utilizando IDL";
 choices[24][3] = "XLAN fue definido en los primeros tiempos de desarrollo de web services como est&aacute;ndar abierto de comunicaci&oacute;n entre componentes";
 answers[24] = 2;
 units[24] = ['63', '64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10500. Los web services en .NET tienen la extensi&oacute;n .asmx";
 preguntaids[24] = 10500


//  Id pregunta: 10237 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[25]= new Array();
 choices[25][0] = "5";
 choices[25][1] = "6";
 choices[25][2] = "7";
 choices[25][3] = "8";
 answers[25] = 3;
 units[25] = ['64'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 10237. Viene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";
 preguntaids[25] = 10237


//  Id pregunta: 9512 Año de creación de pregunta: 2014
 questions[26]= "27)  Teniendo las siguientes sentencias, el resultado ser&aacute;:  byte b1 = 126, b2 = 1;  byte b3 = b1 + b2;  System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[26]= new Array();
 choices[26][0] = "127";
 choices[26][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[26][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[26][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[26] = 2;
 units[26] = ['64'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9512. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";
 preguntaids[26] = 9512


//  Id pregunta: 8963 Año de creación de pregunta: 2013
 questions[27]= "28)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[27]= new Array();
 choices[27][0] = "JAXR";
 choices[27][1] = "JAXB";
 choices[27][2] = "JAXP";
 choices[27][3] = "JTA";
 answers[27] = 3;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8963. ";
 preguntaids[27] = 8963


//  Id pregunta: 9517 Año de creación de pregunta: 2014
 questions[28]= "29)  Cuales de los siguientes objetos son interfaces:";
 choices[28]= new Array();
 choices[28][0] = "java.util.List";
 choices[28][1] = "java.util.TreeMap";
 choices[28][2] = "java.util.AbstractList";
 choices[28][3] = "java.util.Collections";
 answers[28] = 0;
 units[28] = ['64'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9517. B,C,D son clases";
 preguntaids[28] = 9517


//  Id pregunta: 10424 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes no es un API de la especificaci&oacute;n J2EE?";
 choices[29]= new Array();
 choices[29][0] = "JNDI.";
 choices[29][1] = "API Java IDL.";
 choices[29][2] = "JTA (Java Transaction API).";
 choices[29][3] = "JMS (Java Mobile Service).";
 answers[29] = 3;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10424. ";
 preguntaids[29] = 10424


//  Id pregunta: 9514 Año de creación de pregunta: 2014
 questions[30]= "31)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[30]= new Array();
 choices[30][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[30][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[30][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[30][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[30] = 1;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9514. ";
 preguntaids[30] = 9514


//  Id pregunta: 10511 Año de creación de pregunta: 2015
 questions[31]= "32)  Una de las siguientes afirmaciones es falsa respecto a las variables est&aacute;ticas en Java";
 choices[31]= new Array();
 choices[31][0] = "Sus valores son compartidos por todos los objetos de la clase";
 choices[31][1] = "Si se invoca desde la clase en la que se encuentra definido, basta con escribir su nombre";
 choices[31][2] = "Si se le invoca desde una clase distinta, debe anteponerse a su nombre, el de la clase en la que se encuentra seguido del operador punto (.) &lt;NombreClase&gt;.variableEstatica";
 choices[31][3] = "Se define mediante el modificador de acceso public";
 answers[31] = 3;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 10511. El identificador que caracteriza a una variable de clase es static y no es considerada de acceso. Las de acceso son: public, private y protected.";
 preguntaids[31] = 10511


//  Id pregunta: 10430 Año de creación de pregunta: 2015
 questions[32]= "33)  Indique la afirmaci&oacute;n falsa sobre el Framework Spring";
 choices[32]= new Array();
 choices[32][0] = "La versi&oacute;n para la plataforma .NET llamada Spring.net.";
 choices[32][1] = "Soporta programaci&oacute;n basada en aspectos (aspect-oriented programming, AOP).";
 choices[32][2] = "Permite la Integraci&oacute;n con frameworks de persistencia como Hibernate.";
 choices[32][3] = "Como framework MVC utiliza Struts.";
 answers[32] = 3;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 10430. ";
 preguntaids[32] = 10430


//  Id pregunta: 10420 Año de creación de pregunta: 2015
 questions[33]= "34)  A partir de que versi&oacute;n adopt&oacute; la antigua Sun Microsystem un cambio en la nomenclatura de las versiones en sus productos Java.";
 choices[33]= new Array();
 choices[33][0] = "Hasta la versi&oacute;n 1.2, siendo la versi&oacute;n 3.0 la primera en numerarse de esta forma.";
 choices[33][1] = "Hasta la versi&oacute;n 1.3, siendo la versi&oacute;n 4.0 la primera en numerarse de esta forma.";
 choices[33][2] = "Hasta la versi&oacute;n 1.4, siendo la versi&oacute;n 5.0 la primera en numerarse de esta forma.";
 choices[33][3] = "El versionado ha sido siempre 1.x.";
 answers[33] = 2;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10420. ";
 preguntaids[33] = 10420


//  Id pregunta: 10408 Año de creación de pregunta: 2015
 questions[34]= "35)  Respecto a los componentes de Java Platform SE cual de las siguientes afirmaciones es falsa:";
 choices[34]= new Array();
 choices[34][0] = "El JDK contiene todos los niveles, incluyendo JRE y adem&aacute;s herramientas como compiladores y depuradores de errores (debuggers).";
 choices[34][1] = "JRE no incluye la JVM.";
 choices[34][2] = "Las Java SE APIs est&aacute;n basadas en especificaciones JSR (Java Specification Request) las cuales son aprobadas dentro del Java CommunityProcess (JCP).";
 choices[34][3] = "La JVM es propiedad de Oracle.";
 answers[34] = 1;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 10408. ";
 preguntaids[34] = 10408


//  Id pregunta: 8965 Año de creación de pregunta: 2013
 questions[35]= "36)  &iquest;Cu&aacute;les de los siguientes no es un framework de desarrollo en Java?";
 choices[35]= new Array();
 choices[35][0] = "Apache Struts";
 choices[35][1] = "Hibernate";
 choices[35][2] = "Tapestry";
 choices[35][3] = "Todos los anteriores son frameworks de desarrollo en Java";
 answers[35] = 3;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8965. ";
 preguntaids[35] = 8965


//  Id pregunta: 10428 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es un framework de desarrollo de aplicaciones web Java?";
 choices[36]= new Array();
 choices[36][0] = "Apache Struts.";
 choices[36][1] = "Spring Framework.";
 choices[36][2] = "Cibernate ORM.";
 choices[36][3] = "Tapestry.";
 answers[36] = 2;
 units[36] = ['64'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10428. ";
 preguntaids[36] = 10428


//  Id pregunta: 10861 Año de creación de pregunta: 2015
 questions[37]= "38)  El JRE no contiene el nivel de:";
 choices[37]= new Array();
 choices[37][0] = "Herramientas de interfaz de usuario";
 choices[37][1] = "Despliegue";
 choices[37][2] = "Librer&iacute;as de integraci&oacute;n";
 choices[37][3] = "Contiene los 3 niveles";
 answers[37] = 3;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10861. ";
 preguntaids[37] = 10861


//  Id pregunta: 10516 Año de creación de pregunta: 2015
 questions[38]= "39)  Las directivas JSP nos permiten configurar alguna informaci&oacute;n que pueda ser usada en nuestra p&aacute;gina JSP. Cu&aacute;l de las siguientes no es una directiva jsp";
 choices[38]= new Array();
 choices[38][0] = "DocRel";
 choices[38][1] = "Page";
 choices[38][2] = "Include";
 choices[38][3] = "Taglib";
 answers[38] = 0;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10516. ";
 preguntaids[38] = 10516


//  Id pregunta: 9510 Año de creación de pregunta: 2014
 questions[39]= "40)  Las variables declaradas en un interface deben ser:";
 choices[39]= new Array();
 choices[39][0] = "public, static y final";
 choices[39][1] = "private static y final";
 choices[39][2] = "S&oacute;lo protected";
 choices[39][3] = "En un interface no se deben incluir variables";
 answers[39] = 0;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9510. ";
 preguntaids[39] = 9510


//  Id pregunta: 10413 Año de creación de pregunta: 2015
 questions[40]= "41)  Indique de los siguientes cual no es un entorno de desarrollo Java.";
 choices[40]= new Array();
 choices[40][0] = "Eclipse.";
 choices[40][1] = "Zend Studio.";
 choices[40][2] = "BlueJ.";
 choices[40][3] = "NetBeans.";
 answers[40] = 1;
 units[40] = ['64'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 10413. ";
 preguntaids[40] = 10413


//  Id pregunta: 9830 Año de creación de pregunta: 2015
 questions[41]= "42)  Se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[41][1] = "Weblogic es un contenedor de servlets.";
 choices[41][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[41][3] = "Spring es un m&oacute;dulo de Java EE.";
 answers[41] = 2;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9830. ";
 preguntaids[41] = 9830


//  Id pregunta: 9519 Año de creación de pregunta: 2014
 questions[42]= "43)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[42]= new Array();
 choices[42][0] = "sendError(int errorCode) de HttpServlet";
 choices[42][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[42][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[42][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[42] = 2;
 units[42] = ['64'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9519. ";
 preguntaids[42] = 9519


//  Id pregunta: 10524 Año de creación de pregunta: 2015
 questions[43]= "44)  De los servicios Java, indique la afirmaci&oacute;n que NO es correcta";
 choices[43]= new Array();
 choices[43][0] = "JPA ha reemplazado a los Entity beans, que desaparecieron en la versi&oacute;n 5 de Java";
 choices[43][1] = "JNI se utiliza para el acceso a directorios";
 choices[43][2] = "JAX-WS hace que la creaci&oacute;n de Web Services en Java sea m&aacute;s sencilla";
 choices[43][3] = "JAXP permite el acceso a ficheros XML";
 answers[43] = 1;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 10524. Es JNDI el que se corresponde con esa descripci&oacute;n";
 preguntaids[43] = 10524


//  Id pregunta: 9531 Año de creación de pregunta: 2014
 questions[44]= "45)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[44]= new Array();
 choices[44][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[44][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[44][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[44][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[44] = 1;
 units[44] = ['64'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9531. ";
 preguntaids[44] = 9531


//  Id pregunta: 10427 Año de creación de pregunta: 2015
 questions[45]= "46)  El fichero Enterprise Archive (.ear) de empaquetado de aplicaciones web.";
 choices[45]= new Array();
 choices[45][0] = "Uno o m&aacute;s ficheros WAR.";
 choices[45][1] = "Uno o m&aacute;s ficheros JAR con las clases de la aplicaci&oacute;n.";
 choices[45][2] = "Un descriptor de despliegue de la aplicaci&oacute;n.";
 choices[45][3] = "Todas las respuestas son correctas.";
 answers[45] = 3;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 10427. ";
 preguntaids[45] = 10427


//  Id pregunta: 9518 Año de creación de pregunta: 2014
 questions[46]= "47)  Se&ntilde;ala el m&eacute;todo que es usado para obtener un par&aacute;metro de inicializaci&oacute;n desde ServletContext:";
 choices[46]= new Array();
 choices[46][0] = "Object getInitParameter(int index)";
 choices[46][1] = "Object getInitParameter(String name)";
 choices[46][2] = "String getInitParameter(String name)";
 choices[46][3] = "String getParameter(String name)";
 answers[46] = 2;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9518. ";
 preguntaids[46] = 9518


//  Id pregunta: 9527 Año de creación de pregunta: 2014
 questions[47]= "48)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[47]= new Array();
 choices[47][0] = "EJB home interface";
 choices[47][1] = "Un componente EJB";
 choices[47][2] = "La API EJB";
 choices[47][3] = "Un objeto interface EJB";
 answers[47] = 0;
 units[47] = ['64'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9527. ";
 preguntaids[47] = 9527


//  Id pregunta: 10182 Año de creación de pregunta: 2015
 questions[48]= "49)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[48]= new Array();
 choices[48][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[48][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[48][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[48][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[48] = 0;
 units[48] = ['64'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 10182. Examen TIC A1 2014";
 preguntaids[48] = 10182


//  Id pregunta: 10423 Año de creación de pregunta: 2015
 questions[49]= "50)  Cu&aacute;l de las siguientes respuestas es cierta sobre la tecnolog&iacute;a Java Server Faces (JSF)?";
 choices[49]= new Array();
 choices[49][0] = "JSF 2.0 est&aacute; definido especificaci&oacute;n Java EE JSR-314.";
 choices[49][1] = "La implementaci&oacute;n de referencia de la especificaci&oacute;n JSF es el proyecto Oracle Mojarra.";
 choices[49][2] = "JSF 2 utiliza Facelets como su sistema de plantillas por defecto.";
 choices[49][3] = "Todas las respuestas son ciertas.";
 answers[49] = 3;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 10423. ";
 preguntaids[49] = 10423


//  Id pregunta: 10183 Año de creación de pregunta: 2015
 questions[50]= "51)  Al desarrollar una aplicaci&oacute;n para Android, respecto al fichero AndroidManifest.xml se&ntilde;ale la respuesta correcta:";
 choices[50]= new Array();
 choices[50][0] = "Debe renombrarse en el momento de la publicaci&oacute;n de la aplicaci&oacute;n en Google Play, con un identificador &uacute;nico.";
 choices[50][1] = "Declara los permisos que debe tener la aplicaci&oacute;n para acceder a las partes protegidas del API.";
 choices[50][2] = "Debe posicionarse en el directorio \etc\manifest.";
 choices[50][3] = "Establece las condiciones legales que el usuario debe aceptar para poder acceder a la aplicaci&oacute;n.";
 answers[50] = 1;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 10183. Examen TIC A1 2014";
 preguntaids[50] = 10183


//  Id pregunta: 9516 Año de creación de pregunta: 2014
 questions[51]= "52)  Se&ntilde;ala las respuestas correctas sobre los objetos java.util.Vector y java.util.Hashtable:";
 choices[51]= new Array();
 choices[51][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[51][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[51][2] = "A y B son ciertas";
 choices[51][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[51] = 2;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9516. ";
 preguntaids[51] = 9516


//  Id pregunta: 9521 Año de creación de pregunta: 2014
 questions[52]= "53)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[52]= new Array();
 choices[52][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[52][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[52][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[52][3] = "El usuario cierra la ventana del navegador";
 answers[52] = 0;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9521. ";
 preguntaids[52] = 9521


//  Id pregunta: 10860 Año de creación de pregunta: 2015
 questions[53]= "54)  En Java, para redirigir la petici&oacute;n a otra p&aacute;gina JSP se utiliza la etiqueta:";
 choices[53]= new Array();
 choices[53][0] = "page";
 choices[53][1] = "forward";
 choices[53][2] = "request";
 choices[53][3] = "pageContext";
 answers[53] = 1;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10860. ";
 preguntaids[53] = 10860


//  Id pregunta: 9350 Año de creación de pregunta: 2014
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[54]= new Array();
 choices[54][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[54][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[54][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[54][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[54] = 0;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9350. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[54] = 9350


//  Id pregunta: 9045 Año de creación de pregunta: 2014
 questions[55]= "56)  El framework de JAVA para desarrollo web se llama:";
 choices[55]= new Array();
 choices[55][0] = "Maverick";
 choices[55][1] = "Mavericks";
 choices[55][2] = "Cocoa";
 choices[55][3] = "Kit Kat";
 answers[55] = 0;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9045. Mavericks es el sistema operativo OS X de Apple";
 preguntaids[55] = 9045


//  Id pregunta: 10859 Año de creación de pregunta: 2015
 questions[56]= "57)  Las gu&iacute;as de mejores pr&aacute;ticas de Java se denominan:";
 choices[56]= new Array();
 choices[56][0] = "Hibernate";
 choices[56][1] = "Spring";
 choices[56][2] = "BluePrints";
 choices[56][3] = "Struts";
 answers[56] = 2;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 10859. ";
 preguntaids[56] = 10859


//  Id pregunta: 8961 Año de creación de pregunta: 2013
 questions[57]= "58)  Respecto a los EJB, indique la afirmaci&oacute;n incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "Son objetos de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida";
 choices[57][1] = "S&oacute;lo existen tres tipos: session, entity y message-driven";
 choices[57][2] = "Se ejecutan en contenedores EJB";
 choices[57][3] = "Los EJB de tipo session pueden ser a su vez SLSB y SFSB";
 answers[57] = 0;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8961. ";
 preguntaids[57] = 8961


//  Id pregunta: 9526 Año de creación de pregunta: 2014
 questions[58]= "59)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[58]= new Array();
 choices[58][0] = "RMI";
 choices[58][1] = "JTS";
 choices[58][2] = "JMAPI";
 choices[58][3] = "JTA";
 answers[58] = 3;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9526. JTA: Java Transaction Api; Remote Method Invocation; Java Topology Suite; Java Messaging Application Programming Interface.";
 preguntaids[58] = 9526


//  Id pregunta: 10066 Año de creación de pregunta: 2015
 questions[59]= "60)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[59]= new Array();
 choices[59][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[59][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[59][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[59][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[59] = 2;
 units[59] = ['64'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 10066. Examen TIC A2 2014";
 preguntaids[59] = 10066


//  Id pregunta: 9115 Año de creación de pregunta: 2014
 questions[60]= "61)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[60]= new Array();
 choices[60][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[60][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[60][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[60][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[60] = 0;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9115. Examen TIC A2 2013";
 preguntaids[60] = 9115


//  Id pregunta: 9354 Año de creación de pregunta: 2014
 questions[61]= "62)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[61]= new Array();
 choices[61][0] = "Joost";
 choices[61][1] = "Netflix";
 choices[61][2] = "Cassandra";
 choices[61][3] = "Hadoop";
 answers[61] = 3;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9354. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[61] = 9354


//  Id pregunta: 9086 Año de creación de pregunta: 2014
 questions[62]= "63)  La programaci&oacute;n funcional limita el uso de";
 choices[62]= new Array();
 choices[62][0] = "estados mutables.";
 choices[62][1] = "expresiones lambda.";
 choices[62][2] = "procedimientos como par&aacute;metros.";
 choices[62][3] = "lenguajes como Erlang, F# o Scala.";
 answers[62] = 0;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9086. Examen TIC-A1 2013";
 preguntaids[62] = 9086


//  Id pregunta: 8992 Año de creación de pregunta: 2013
 questions[63]= "64)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[63]= new Array();
 choices[63][0] = "Capa de cliente";
 choices[63][1] = "Capa de l&oacute;gica de negocio";
 choices[63][2] = "Capa de integraci&oacute;n";
 choices[63][3] = "Capa de sistemas de informaci&oacute;n";
 answers[63] = 3;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8992. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[63] = 8992


//  Id pregunta: 9511 Año de creación de pregunta: 2014
 questions[64]= "65)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:  System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[64]= new Array();
 choices[64][0] = "Da un error de compilaci&oacute;n";
 choices[64][1] = "TRUE";
 choices[64][2] = "FALSE";
 choices[64][3] = "12";
 answers[64] = 1;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9511. ";
 preguntaids[64] = 9511


//  Id pregunta: 9528 Año de creación de pregunta: 2014
 questions[65]= "66)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[65]= new Array();
 choices[65][0] = "next()";
 choices[65][1] = "nextValue()";
 choices[65][2] = "nextToken()";
 choices[65][3] = "Ninguno de los anteriores";
 answers[65] = 2;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9528. ";
 preguntaids[65] = 9528


//  Id pregunta: 10858 Año de creación de pregunta: 2015
 questions[66]= "67)  Los Enterprise Java Beans (EJB) con funcionamiento as&iacute;ncrono son:";
 choices[66]= new Array();
 choices[66][0] = "Message driven beans";
 choices[66][1] = "Session beans";
 choices[66][2] = "Entity beans";
 choices[66][3] = "Todos los anteriores tienen funcionamiento as&iacute;ncrono.";
 answers[66] = 0;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 10858. ";
 preguntaids[66] = 10858


//  Id pregunta: 10239 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;En qu&eacute; patr&oacute;n de dise&ntilde;o est&aacute; basada la arquitectura de Swing?";
 choices[67]= new Array();
 choices[67][0] = "Modelo-Vista-Controlador (MVC)";
 choices[67][1] = "Singleton";
 choices[67][2] = "Observer";
 choices[67][3] = "Facade";
 answers[67] = 0;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 10239. ";
 preguntaids[67] = 10239


//  Id pregunta: 10412 Año de creación de pregunta: 2015
 questions[68]= "69)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[68]= new Array();
 choices[68][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[68][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[68][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[68][3] = "Todas son verdaderas.";
 answers[68] = 3;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 10412. ";
 preguntaids[68] = 10412


//  Id pregunta: 9530 Año de creación de pregunta: 2014
 questions[69]= "70)  En una aplicaci&oacute;n basada en Struts las solicitudes del cliente son interceptadas en primer lugar por:";
 choices[69]= new Array();
 choices[69][0] = "Un servlet que actua como controlador denominado ActionServlet";
 choices[69][1] = "Un JavaBean encargado de procesar la informaci&oacute;n denominado ActionForm";
 choices[69][2] = "Los objetos ActionMapping que analizan la direcci&oacute;n url y procesar la solicitud";
 choices[69][3] = "Un objeto ActionForward que renderiza una p&aacute;gina JSP";
 answers[69] = 0;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9530. ";
 preguntaids[69] = 9530


//  Id pregunta: 10238 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[70]= new Array();
 choices[70][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[70][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[70][2] = "Los 2 respuestas anteriores son correctas";
 choices[70][3] = "Ninguna de las anteriores es correcta";
 answers[70] = 2;
 units[70] = ['64'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 10238. ";
 preguntaids[70] = 10238


//  Id pregunta: 9524 Año de creación de pregunta: 2014
 questions[71]= "72)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[71]= new Array();
 choices[71][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[71][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[71][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[71][3] = "ninguna de las anteriores";
 answers[71] = 0;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9524. ";
 preguntaids[71] = 9524


//  Id pregunta: 10431 Año de creación de pregunta: 2015
 questions[72]= "73)  El framework Hibernate";
 choices[72]= new Array();
 choices[72][0] = "Est&aacute; disponible tambi&eacute;n para&nbsp;.Net&nbsp;con el nombre de&nbsp;NHibernate.";
 choices[72][1] = "Hibernate se distribuye bajo los t&eacute;rminos de la licencia&nbsp;GNU LGPL.";
 choices[72][2] = "Se apoya en Java Reflection API y en la librer&iacute;a de generaci&oacute;n de c&oacute;digo Javassist.";
 choices[72][3] = "Todas las respuestas son correctas.";
 answers[72] = 3;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 10431. ";
 preguntaids[72] = 10431


