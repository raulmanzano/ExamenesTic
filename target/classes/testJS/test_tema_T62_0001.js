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
//  Id pregunta: 7605 Año de creación de pregunta: 2010
 questions[0]= "1)  En una aplicaci&oacute;n sobre Arquitectura de tres capas, &iquest;d&oacute;nde se encuentran ubicadas las reglas de negocio?";
 choices[0]= new Array();
 choices[0][0] = "En el servidor de aplicaciones.";
 choices[0][1] = "En el servidor de datos.";
 choices[0][2] = "En el cliente.";
 choices[0][3] = "En el servidor http/ssl (Hipertext Transfer Protocol/Secure Sockets Layer).";
 answers[0] = 0;
 units[0] = ['62'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7605. Map 2006";
 preguntaids[0] = 7605


//  Id pregunta: 8373 Año de creación de pregunta: 2011
 questions[1]= "2)  Respecto a AJAX es falso que:";
 choices[1]= new Array();
 choices[1][0] = "Reduce el volumen de informaci&oacute;n a intercambiar entre el cliente y el servidor frente al empleo del refresco de p&aacute;gina completa.";
 choices[1][1] = "No se puede emplear para desarrollar aplicaciones RIA.";
 choices[1][2] = "Existen m&uacute;ltiples liber&iacute;as para simplificar el desarrollo con AJAX.";
 choices[1][3] = "Son las siglas de Asynchronous JavaScript And XML.";
 answers[1] = 1;
 units[1] = ['62'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8373. Analista Ayto. Madrid 2010";
 preguntaids[1] = 8373


//  Id pregunta: 8949 Año de creación de pregunta: 2013
 questions[2]= "3)  &iquest;Cu&aacute;les de los siguientes no es un formato de sonido?";
 choices[2]= new Array();
 choices[2][0] = "MIDI";
 choices[2][1] = "Ogg Vorbis 1.0";
 choices[2][2] = "WAV";
 choices[2][3] = "VRML";
 answers[2] = 3;
 units[2] = ['62'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8949. ";
 preguntaids[2] = 8949


//  Id pregunta: 5278 Año de creación de pregunta: 2006
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes software no funciona actualmente sobre Linux?";
 choices[3]= new Array();
 choices[3][0] = "PHP";
 choices[3][1] = "Java";
 choices[3][2] = "Lucene";
 choices[3][3] = "Jscript";
 answers[3] = 3;
 units[3] = ['62'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5278. ";
 preguntaids[3] = 5278


//  Id pregunta: 4395 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de scripting?:";
 choices[4]= new Array();
 choices[4][0] = "JavaScript";
 choices[4][1] = "Jscript";
 choices[4][2] = "VBScript";
 choices[4][3] = "XMLScript";
 answers[4] = 3;
 units[4] = ['62'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 4395. ";
 preguntaids[4] = 4395


//  Id pregunta: 8939 Año de creación de pregunta: 2013
 questions[5]= "6)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a Javascript:";
 choices[5]= new Array();
 choices[5][0] = "Es un extensi&oacute;n de Java";
 choices[5][1] = "Es un extensi&oacute;n de HTML";
 choices[5][2] = "Es un lenguaje interpretado";
 choices[5][3] = "El int&eacute;rprete de JavaScript se basa en el est&aacute;ndar ECMAScript";
 answers[5] = 0;
 units[5] = ['62'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8939. ";
 preguntaids[5] = 8939


//  Id pregunta: 9608 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Cual no es una funci&oacute;n del servidor de aplicaciones?";
 choices[6]= new Array();
 choices[6][0] = "Multiplexar accesos a la base de datos mediante el gestor transaccional";
 choices[6][1] = "Aislar la l&oacute;gica de negocio de la capa de persistencia";
 choices[6][2] = "Reutilizar objetos de aplicaciones de departamentos distintos";
 choices[6][3] = "Adecuar los mapeos objeto-relacionales a las particularidades del diccionario de datos";
 answers[6] = 3;
 units[6] = ['62'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9608. ";
 preguntaids[6] = 9608


//  Id pregunta: 8942 Año de creación de pregunta: 2013
 questions[7]= "8)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a PerlScript:";
 choices[7]= new Array();
 choices[7][0] = "No se permite su uso en el servidor";
 choices[7][1] = "Es un lenguaje orientado al entorno Microsoft";
 choices[7][2] = "Es un lenguaje de scripting";
 choices[7][3] = "Permite el uso de PERL en los scripts web del cliente";
 answers[7] = 0;
 units[7] = ['62'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8942. ";
 preguntaids[7] = 8942


//  Id pregunta: 8936 Año de creación de pregunta: 2013
 questions[8]= "9)  En una arquitectura de tres niveles, &iquest;en qu&eacute; nivel se procesa la l&oacute;gica de la aplicaci&oacute;n?";
 choices[8]= new Array();
 choices[8][0] = "Nivel de aplicaci&oacute;n";
 choices[8][1] = "Nivel de presentaci&oacute;n";
 choices[8][2] = "Nivel de datos";
 choices[8][3] = "Nivel de usuario";
 answers[8] = 0;
 units[8] = ['62'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8936. ";
 preguntaids[8] = 8936


//  Id pregunta: 4410 Año de creación de pregunta: 2002
 questions[9]= "10)  En ASP, &iquest;qu&eacute; objeto se utiliza para compartir informaci&oacute;n entre todos los usuarios de una aplicaci&oacute;n?:";
 choices[9]= new Array();
 choices[9][0] = "Application";
 choices[9][1] = "Request";
 choices[9][2] = "Server";
 choices[9][3] = "Session";
 answers[9] = 0;
 units[9] = ['62'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 4410. ";
 preguntaids[9] = 4410


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[10]= "11)  Un wireframe es:";
 choices[10]= new Array();
 choices[10][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[10][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[10][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[10][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[10] = 3;
 units[10] = ['62'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 695. AGE A1 2015";
 preguntaids[10] = 695


//  Id pregunta: 9869 Año de creación de pregunta: 2015
 questions[11]= "12)  Indique la afirmaci&oacute;n incorrecta:";
 choices[11]= new Array();
 choices[11][0] = "JavaScript es orientado a objetos.";
 choices[11][1] = "JavaScript no puede ejecutarse en el lado del servidor.";
 choices[11][2] = "Para interactuar con una p&aacute;gina web, JavaScript utiliza una implementaci&oacute;n de DOM (Document Object Model).";
 choices[11][3] = "La tecnolog&iacute;a AJAX utiliza JavaScript de forma as&iacute;ncrona.";
 answers[11] = 1;
 units[11] = ['62'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9869. ";
 preguntaids[11] = 9869


//  Id pregunta: 10752 Año de creación de pregunta: 2015
 questions[12]= "13)  De los siguientes tipos de middlewares, &iquest;Cu&aacute;l de ellos permite de manera m&aacute;s sencilla la transformaci&oacute;n de mensajes, conversi&oacute;n de protocolos y enrutamiento de servicios, desde una perspectiva de red WAN?";
 choices[12]= new Array();
 choices[12][0] = "Estaci&oacute;n de Mensajer&iacute;a";
 choices[12][1] = "Motor de Integraci&oacute;n";
 choices[12][2] = "Cliente-Servidor";
 choices[12][3] = "ESB";
 answers[12] = 3;
 units[12] = ['62'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10752. ";
 preguntaids[12] = 10752


//  Id pregunta: 7644 Año de creación de pregunta: 2010
 questions[13]= "14)  El atributo de posicionamiento de un applet &laquo;absbottom&raquo;:";
 choices[13]= new Array();
 choices[13][0] = "Coloca el applet en el margen izquierdo de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a su derecha.";
 choices[13][1] = "Coloca el applet en el margen derecho de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a su izquierda.";
 choices[13][2] = "Coloca la parte inferior del applet coincidiendo con el centro de la l&iacute;nea actual.";
 choices[13][3] = "Coloca la parte superior del applet coincidiendo con la parte superior del texto en la l&iacute;nea actual.";
 answers[13] = 2;
 units[13] = ['62'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7644. Map 2006";
 preguntaids[13] = 7644


//  Id pregunta: 9870 Año de creación de pregunta: 2015
 questions[14]= "15)  Indique la afirmaci&oacute;n incorrecta:";
 choices[14]= new Array();
 choices[14][0] = "ActiveX es una evoluci&oacute;n de las tecnolog&iacute;as Component Object Model (COM) y Object Linking and Embedding (OLE).";
 choices[14][1] = "La tecnolog&iacute;a ActiveX est&aacute; limitada al sistema operativo Windows.";
 choices[14][2] = "Para introducir un control ActiveX en una p&aacute;gina HTML es necesario utilizar la etiqueta &lt;object&gt;";
 choices[14][3] = "Todas las anteriores son correctas.";
 answers[14] = 1;
 units[14] = ['62'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9870. ";
 preguntaids[14] = 9870


//  Id pregunta: 5114 Año de creación de pregunta: 2003
 questions[15]= "16)  &iquest;Qu&eacute; es JavaScript?";
 choices[15]= new Array();
 choices[15][0] = "Un lenguaje de validaci&oacute;n de formularios en p&aacute;ginas Web";
 choices[15][1] = "Es una implementaci&oacute;n del ECMA 262";
 choices[15][2] = "Es un lenguaje Java reducido para Internet que sustituye a CGI";
 choices[15][3] = "Es un lenguaje que soporta objetos y funciones, pero no clases de objetos ni herencias entre ellos";
 answers[15] = 3;
 units[15] = ['62'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 5114. ";
 preguntaids[15] = 5114


//  Id pregunta: 9606 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;Cual lenguage escoger&iacute;a para desarrollar la capa de presentaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Pl/sql";
 choices[16][1] = "Queryscript";
 choices[16][2] = "Jquery";
 choices[16][3] = "PyScripter";
 answers[16] = 2;
 units[16] = ['62'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9606. PyScripter es un entorno de desarrollo, no un lenguaje";
 preguntaids[16] = 9606


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[17]= new Array();
 choices[17][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[17][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[17][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[17][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[17] = 0;
 units[17] = ['62'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 696. AGE A1 2015";
 preguntaids[17] = 696


//  Id pregunta: 7480 Año de creación de pregunta: 2010
 questions[18]= "19)  El entorno de escritorio KDE:";
 choices[18]= new Array();
 choices[18][0] = "Utiliza como gestor de ventanas uno propio.";
 choices[18][1] = "No posee gestor de ventanas propio.";
 choices[18][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA.";
 choices[18][3] = "No proporciona distintas configuraciones para distintos idiomas.";
 answers[18] = 0;
 units[18] = ['62'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7480. Map 2005";
 preguntaids[18] = 7480


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[19]= "20)  La suite de herramientas de desarrollo para el dise&ntilde;o multidispositivo puesta a disposici&oacute;n de los desarroladores web por Google, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Chrome DevTools.";
 choices[19][1] = "Web Starter Kit.";
 choices[19][2] = "Java Web Start.";
 choices[19][3] = "Material Design.";
 answers[19] = 1;
 units[19] = ['62'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 699. AGE A2 2015";
 preguntaids[19] = 699


//  Id pregunta: 9609 Año de creación de pregunta: 2014
 questions[20]= "21)  &iquest;Cual no es un lenguaje de scripting?";
 choices[20]= new Array();
 choices[20][0] = "JScript";
 choices[20][1] = "Node.js";
 choices[20][2] = "Groovy";
 choices[20][3] = "Hack";
 answers[20] = 1;
 units[20] = ['62'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9609. Node.js es un entorno de desarrollo, no un lenguaje";
 preguntaids[20] = 9609


//  Id pregunta: 8948 Año de creación de pregunta: 2013
 questions[21]= "22)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[21]= new Array();
 choices[21][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[21][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[21][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[21][3] = "Todas las anteriores son falsas";
 answers[21] = 0;
 units[21] = ['62'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8948. ";
 preguntaids[21] = 8948


//  Id pregunta: 10102 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;A qu&eacute; se refiere el t&eacute;rmino mashup?";
 choices[22]= new Array();
 choices[22][0] = "Plataforma de desarrollo Web que define la base de datos (MySQL), el servidor Web (Apache), el sistema operativo (Solaris), y el lenguaje de programaci&oacute;n (Haskell).";
 choices[22][1] = "Peque&ntilde;a secci&oacute;n de la ventana del navegador que muestra un mensaje de texto que se desplaza a trav&eacute;s de la pantalla.";
 choices[22][2] = "Conjunto de t&eacute;cnicas y recomendaciones para conseguir que una p&aacute;gina web aparezca en los primeros resultados de los buscadores para unas determinadas palabras clave (keywords).";
 choices[22][3] = "Aplicaciones web que combinan datos y contenido de distintas fuentes para dar una experiencia de usuario integrada.";
 answers[22] = 3;
 units[22] = ['62'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10102. Examen TIC A2 2014";
 preguntaids[22] = 10102


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas corresponde con un framework de desarrollo espec&iacute;fico para implementaci&oacute;n de la l&oacute;gica de negocio en una aplicaci&oacute;n web multicapa:";
 choices[23]= new Array();
 choices[23][0] = "Qbates";
 choices[23][1] = "Mybatis";
 choices[23][2] = "Spring";
 choices[23][3] = "JSF";
 answers[23] = 2;
 units[23] = ['62'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 701. AGE A2 2015";
 preguntaids[23] = 701


//  Id pregunta: 5101 Año de creación de pregunta: 2004
 questions[24]= "25)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el servidor";
 choices[24]= new Array();
 choices[24][0] = "JavaScript";
 choices[24][1] = "CGI";
 choices[24][2] = "JSP";
 choices[24][3] = "ASP";
 answers[24] = 0;
 units[24] = ['62'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 5101. ";
 preguntaids[24] = 5101


//  Id pregunta: 9610 Año de creación de pregunta: 2014
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[25]= new Array();
 choices[25][0] = "El servidor puede alojar un interprete de scripting";
 choices[25][1] = "El cliente puede alojar un interprerte de scripting";
 choices[25][2] = "Para usar el driver JDBC se necesita descargar un plug-in proporcionado por cada fabricante";
 choices[25][3] = "Un script del lado del cliente no puede solicitarle al servidor su certificado para establecer un canal autenticado bidireccionalmente";
 answers[25] = 2;
 units[25] = ['62'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9610. ";
 preguntaids[25] = 9610


//  Id pregunta: 6425 Año de creación de pregunta: 2003
 questions[26]= "27)  Indique cu&aacute;l de los siguientes no es un servidor de aplicaciones para servicios web:";
 choices[26]= new Array();
 choices[26][0] = "JONAS";
 choices[26][1] = "XIMDEX";
 choices[26][2] = "WEBSPHERE";
 choices[26][3] = "WEBLOGIC";
 answers[26] = 1;
 units[26] = ['62'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 6425. ";
 preguntaids[26] = 6425


//  Id pregunta: 4391 Año de creación de pregunta: 2002
 questions[27]= "28)  ASP significa:";
 choices[27]= new Array();
 choices[27][0] = "Application Service Provider";
 choices[27][1] = "Active Server Pages";
 choices[27][2] = "Las 2 respuestas anteriores son correctas";
 choices[27][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[27] = 2;
 units[27] = ['62'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 4391. ";
 preguntaids[27] = 4391


//  Id pregunta: 4394 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes componentes de software no forma parte del servidor de aplicaciones en una arquitectura a tres capas?:";
 choices[28]= new Array();
 choices[28][0] = "P&aacute;ginas din&aacute;micas";
 choices[28][1] = "Java Virtual Machine";
 choices[28][2] = "Navegador Web";
 choices[28][3] = "Int&eacute;rprete de Scripting";
 answers[28] = 2;
 units[28] = ['62'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 4394. ";
 preguntaids[28] = 4394


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes es un framework RESTful que fomenta el dise&ntilde;o web multidispositivo incluyendo dispositivos m&oacute;viles?";
 choices[29]= new Array();
 choices[29][0] = "iBATIS";
 choices[29][1] = "Batik";
 choices[29][2] = "Web API";
 choices[29][3] = "Apache JAMES";
 answers[29] = 2;
 units[29] = ['62'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 700. AGE A2 2015";
 preguntaids[29] = 700


//  Id pregunta: 7815 Año de creación de pregunta: 2010
 questions[30]= "31)  Indique qui&eacute;n desarroll&oacute; el lenguaje JavaScript:";
 choices[30]= new Array();
 choices[30][0] = "Microsoft.";
 choices[30][1] = "SUN.";
 choices[30][2] = "Netscape.";
 choices[30][3] = "W3C.";
 answers[30] = 2;
 units[30] = ['62'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7815. ";
 preguntaids[30] = 7815


//  Id pregunta: 4388 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Qu&eacute; son dentro del entorno de aplicaciones basadas en arquitectura Internet los plug-ins?:";
 choices[31]= new Array();
 choices[31][0] = "Programas que desarrolla el usuario para personalizar el acceso a la informaci&oacute;n del servidor";
 choices[31][1] = "Programas que se agregan al navegador e interact&uacute;an con &eacute;l, con las p&aacute;ginas web y con los recursos locales";
 choices[31][2] = "Posibilidad de a&ntilde;adir nuevo hardware a trav&eacute;s del navegador de manera autom&aacute;tica";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 1;
 units[31] = ['62'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 4388. ";
 preguntaids[31] = 4388


//  Id pregunta: 2540 Año de creación de pregunta: 2004
 questions[32]= "33)  Con respecto a las tecnolog&iacute;as de desarrollo web:";
 choices[32]= new Array();
 choices[32][0] = "IIS act&uacute;a como servidor web de Microsoft";
 choices[32][1] = "No se puede acceder a una base de datos Oracle desde un entorno Microsoft";
 choices[32][2] = "Las p&aacute;ginas ASP suelen funcionar sobre servidores Apache";
 choices[32][3] = "SQL Server suele estar asociado a la tecnolog&iacute;a PHP";
 answers[32] = 0;
 units[32] = ['62'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2540. ";
 preguntaids[32] = 2540


//  Id pregunta: 5115 Año de creación de pregunta: 2003
 questions[33]= "34)  &iquest;Qu&eacute; es Javascript7:";
 choices[33]= new Array();
 choices[33][0] = "Un compilador de Java.";
 choices[33][1] = "Un generador de applets Java";
 choices[33][2] = "Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[33][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[33] = 3;
 units[33] = ['62'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5115. Junta Andaluc&iacute;a";
 preguntaids[33] = 5115


//  Id pregunta: 3143 Año de creación de pregunta: 2002
 questions[34]= "35)  MPEG es:";
 choices[34]= new Array();
 choices[34][0] = "Mobile Photographs Evolution using GPRS, tecnolog&iacute;a para transmitir fotograf&iacute;as usando un m&oacute;vil GPRS";
 choices[34][1] = "Mobile Protocols Expert Group, grupo de trabajo de ISO experto en la aplicaci&oacute;n de distintos protocolos a la tecnolog&iacute;a inal&aacute;mbrica m&oacute;vil";
 choices[34][2] = "Multimedia Protocols for Evolution of GSM: conjunto de protocolos desarrollados para dispositivos m&oacute;viles que potencian las capacidades multimedia contempladas en la actual GSM";
 choices[34][3] = "Moving Pictures Expert Group, grupo de trabajo de ISO cuya misi&oacute;n es desarrollar est&aacute;ndares de compresi&oacute;n para audio y video";
 answers[34] = 3;
 units[34] = ['62'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3143. ";
 preguntaids[34] = 3143


//  Id pregunta: 8945 Año de creación de pregunta: 2013
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes elementos no es un plugin?";
 choices[35]= new Array();
 choices[35][0] = "Lector Acrobat de Adobe";
 choices[35][1] = "Quicktime de Apple";
 choices[35][2] = "Cosmoplayer de Platinum";
 choices[35][3] = "Todos los anteriores son plugins";
 answers[35] = 3;
 units[35] = ['62'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8945. ";
 preguntaids[35] = 8945


//  Id pregunta: 5279 Año de creación de pregunta: 2006
 questions[36]= "37)  El formato para im&aacute;genes GIF";
 choices[36]= new Array();
 choices[36][0] = "Se basa en un algoritmo de compresi&oacute;n patentado, lo que te&oacute;ricamente limita su uso";
 choices[36][1] = "Significa Graphic Interleaved Format (Formato Gr&aacute;fico Entrelazado)";
 choices[36][2] = "Fue creado por Microsoft";
 choices[36][3] = "Ninguna de las anteriores es correcta";
 answers[36] = 0;
 units[36] = ['62'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5279. ";
 preguntaids[36] = 5279


//  Id pregunta: 4309 Año de creación de pregunta: 2004
 questions[37]= "38)  ECMAscript, con cu&aacute;l de los siguientes lenguajes de script se relaciona:";
 choices[37]= new Array();
 choices[37][0] = "JavaScript";
 choices[37][1] = "VBScript";
 choices[37][2] = "Jscript";
 choices[37][3] = "Perlscript";
 answers[37] = 0;
 units[37] = ['62'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 4309. Similar a examen TIC MAP A 2004";
 preguntaids[37] = 4309


//  Id pregunta: 8323 Año de creación de pregunta: 2011
 questions[38]= "39)  El objeto anchor de Javascript indica...";
 choices[38]= new Array();
 choices[38][0] = "Los enlaces internos del documento";
 choices[38][1] = "Los v&iacute;nculos externos del documento";
 choices[38][2] = "Array con todas las anclas del documento";
 choices[38][3] = "El ancho m&aacute;ximo de los elementos de un formulario";
 answers[38] = 0;
 units[38] = ['62'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8323. Examen UPM A2 2011";
 preguntaids[38] = 8323


//  Id pregunta: 5418 Año de creación de pregunta: 2007
 questions[39]= "40)  Indique que significan las siglas AJAX";
 choices[39]= new Array();
 choices[39][0] = "Asynchronous Java And  XML";
 choices[39][1] = "Asynchronous JavaScript And  XML";
 choices[39][2] = "Asynchronous JavaScript And  XSL";
 choices[39][3] = "Advanced JavaScript And  XML";
 answers[39] = 1;
 units[39] = ['62'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 5418. ";
 preguntaids[39] = 5418


//  Id pregunta: 5184 Año de creación de pregunta: 2003
 questions[40]= "41)  Respecto de Java y JavaScript se puede decir";
 choices[40]= new Array();
 choices[40][0] = "Los dos son lenguajes interpretados";
 choices[40][1] = "Java es compilado en tiempo de ejecuci&oacute;n y JavaScript interpretado";
 choices[40][2] = "JavaScript es compilado en tiempo de ejecuci&oacute;n y Java interpretado";
 choices[40][3] = "Ambos son compilados";
 answers[40] = 1;
 units[40] = ['62'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 5184. ";
 preguntaids[40] = 5184


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[41]= "42)  Un archivo .ocx es un:";
 choices[41]= new Array();
 choices[41][0] = "archivo de almacenamiento flash.";
 choices[41][1] = "control de ActiveX.";
 choices[41][2] = "tipo de librer&iacute;as de enlace din&aacute;mico compilado exclusivo de arquitecturas de 64 bits.";
 choices[41][3] = "archivo que contiene im&aacute;genes procedentes de una digitalizaci&oacute;n.";
 answers[41] = 1;
 units[41] = ['62'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 702. AGE A2 2015";
 preguntaids[41] = 702


//  Id pregunta: 8943 Año de creación de pregunta: 2013
 questions[42]= "43)  Indica la afirmaci&oacute;n verdadera con respecto a los applets:";
 choices[42]= new Array();
 choices[42][0] = "Se descargan como documentos HTML y se ejecutan en el cliente";
 choices[42][1] = "El usuario no permite el acceso a los recursos locales por el s&oacute;lo hecho de aceptar un applet";
 choices[42][2] = "Se ejecutan en un componente independiente del navegador";
 choices[42][3] = "Todas las anteriores son ciertas";
 answers[42] = 3;
 units[42] = ['62'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8943. ";
 preguntaids[42] = 8943


//  Id pregunta: 8946 Año de creación de pregunta: 2013
 questions[43]= "44)  Cosmoplayer de Platinum:";
 choices[43]= new Array();
 choices[43][0] = "Es un plugin que reproduce sonidos";
 choices[43][1] = "Es un plugin que reproduce pel&iacute;culas";
 choices[43][2] = "Es un plugin que reproduce documentos VRML (formato de realidad virtual)";
 choices[43][3] = "Ninguna de las anteriores es correcta";
 answers[43] = 2;
 units[43] = ['62'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8946. ";
 preguntaids[43] = 8946


//  Id pregunta: 5391 Año de creación de pregunta: 2006
 questions[44]= "45)  Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[44]= new Array();
 choices[44][0] = "jpeg, tiff y spp";
 choices[44][1] = "jpeg, spp y psd";
 choices[44][2] = "jpeg, spp y tiff";
 choices[44][3] = "jpeg, gif y png";
 answers[44] = 3;
 units[44] = ['62'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 5391. ";
 preguntaids[44] = 5391


//  Id pregunta: 8938 Año de creación de pregunta: 2013
 questions[45]= "46)  &iquest;Cu&aacute;les de los siguientes no es un lenguaje de scripting?";
 choices[45]= new Array();
 choices[45][0] = "Javascript";
 choices[45][1] = "JEScript";
 choices[45][2] = "PerlScript";
 choices[45][3] = "VBScript";
 answers[45] = 1;
 units[45] = ['62'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8938. ";
 preguntaids[45] = 8938


//  Id pregunta: 4851 Año de creación de pregunta: 2002
 questions[46]= "47)  En una arquitectura de tres capas donde se establecen las reglas del negocio, se corresponde a la capa de:";
 choices[46]= new Array();
 choices[46][0] = "Presentaci&oacute;n";
 choices[46][1] = "L&oacute;gica de negocio";
 choices[46][2] = "Datos";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = 1;
 units[46] = ['62'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 4851. ";
 preguntaids[46] = 4851


//  Id pregunta: 5100 Año de creación de pregunta: 2004
 questions[47]= "48)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el cliente";
 choices[47]= new Array();
 choices[47][0] = "Applets";
 choices[47][1] = "JavaScript";
 choices[47][2] = "ActiveX";
 choices[47][3] = "CGI";
 answers[47] = 3;
 units[47] = ['62'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 5100. ";
 preguntaids[47] = 5100


//  Id pregunta: 7873 Año de creación de pregunta: 2011
 questions[48]= "49)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que:";
 choices[48]= new Array();
 choices[48][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente.";
 choices[48][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form.";
 choices[48][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n.";
 choices[48][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[48] = 0;
 units[48] = ['62'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7873. Examen TIC A1 2010";
 preguntaids[48] = 7873


//  Id pregunta: 5414 Año de creación de pregunta: 2006
 questions[49]= "50)  Cuando un navegador se conecta por primera vez a un servidor Web que usa cookies permanentes para identificaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "El navegador env&iacute;a al servidor, junto a la primera petici&oacute;n, una cookie con un n&uacute;mero identificativo generado por el navegador";
 choices[49][1] = "El servidor cuando entrega la primera p&aacute;gina html al navegador, escribe tambi&eacute;n una cookie en el disco del equipo del navegador";
 choices[49][2] = "El navegador, cuando recibe por primera vez una  p&aacute;gina del servidor, escribe en el disco de su equipo una cookie con el n&uacute;mero de identificaci&oacute;n enviado por el servidor";
 choices[49][3] = "La almacena en la cach&eacute; del navegador por ser una cookie permanente";
 answers[49] = 2;
 units[49] = ['62'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 5414. ";
 preguntaids[49] = 5414


//  Id pregunta: 8941 Año de creación de pregunta: 2013
 questions[50]= "51)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a VBScript:";
 choices[50]= new Array();
 choices[50][0] = "Es una tecnolog&iacute;a abierta";
 choices[50][1] = "Genera ficheros con extensi&oacute;n .vbs";
 choices[50][2] = "Se comunica con las aplicaciones principales mediante ActiveX Scripting";
 choices[50][3] = "Dispone de mayor funcionalidad que JavaScript";
 answers[50] = 0;
 units[50] = ['62'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8941. ";
 preguntaids[50] = 8941


//  Id pregunta: 8002 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecuta en el servidor?";
 choices[51]= new Array();
 choices[51][0] = "JavaScript";
 choices[51][1] = "Applets";
 choices[51][2] = "JSP";
 choices[51][3] = "VisualScript";
 answers[51] = 2;
 units[51] = ['62'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8002. Examen TIC A2 2010";
 preguntaids[51] = 8002


//  Id pregunta: 6060 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes acciones no es necesaria para sindicar un documento de nuestra web mediante RSS?:";
 choices[52]= new Array();
 choices[52][0] = "Crear un documento RSS y guardarlo con una extensi&oacute;n .xml.";
 choices[52][1] = "Cargar el documento en nuestro sitio web.";
 choices[52][2] = "Registrase (web y documento) en un agregador RSS.";
 choices[52][3] = "Pagar el canon de registro a Red.Es.";
 answers[52] = 3;
 units[52] = ['62'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6060. TIC B 2007";
 preguntaids[52] = 6060


//  Id pregunta: 6983 Año de creación de pregunta: 2010
 questions[53]= "54)  Con respecto a MNG, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "Existen tres versiones de MNG de complejidad reducida: MNG-LC (baja complejidad),  MNG-VLC (complejidad muy baja) y MNG-RVLC (complejidad realmente muy baja).";
 choices[53][1] = "Es un formato de fichero, libre de derechos, para im&aacute;genes animadas, fuertemente vinculado a PNG.";
 choices[53][2] = "No est&aacute; soportado por el navegador Konqueror.";
 choices[53][3] = "Todas las anteriores respuestas son incorrectas.";
 answers[53] = 1;
 units[53] = ['62'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6983. ";
 preguntaids[53] = 6983


//  Id pregunta: 8940 Año de creación de pregunta: 2013
 questions[54]= "55)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a JScript:";
 choices[54]= new Array();
 choices[54][0] = "Es una implementaci&oacute;n de Microsoft del est&aacute;ndar ECMAScript";
 choices[54][1] = "Es necesario declarar los tipos de datos";
 choices[54][2] = "Es sensible a las may&uacute;sculas y min&uacute;sculas para los nombres de funci&oacute;n";
 choices[54][3] = "Es un lenguaje interpretado y basado en objetos";
 answers[54] = 1;
 units[54] = ['62'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8940. ";
 preguntaids[54] = 8940


//  Id pregunta: 10188 Año de creación de pregunta: 2015
 questions[55]= "56)  Respecto a los formatos de ficheros de im&aacute;genes, se&ntilde;ale la respuesta correcta:";
 choices[55]= new Array();
 choices[55][0] = "El formato de ficheros GIF utiliza un algoritmo de compresi&oacute;n sin p&eacute;rdidas hasta los 256 colores.";
 choices[55][1] = "El formato BMP es el formato t&iacute;pico usado por el sistema operativo Linux.";
 choices[55][2] = "Los archivos RAW son compatibles con los formatos TIFF y JPEG.";
 choices[55][3] = "El formato WMK es el m&aacute;s utilizado para los sistemas de grabaci&oacute;n de video.";
 answers[55] = 0;
 units[55] = ['62'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 10188. Examen TIC A1 2014";
 preguntaids[55] = 10188


//  Id pregunta: 8944 Año de creación de pregunta: 2013
 questions[56]= "57)  Indica la afirmaci&oacute;n verdadera con respecto a los controles ActiveX:";
 choices[56]= new Array();
 choices[56][0] = "Permiten que los componentes software interact&uacute;en entre s&iacute; en un entorno de red, independientemente del lenguaje en el que han sido programados";
 choices[56][1] = "Se pueden escribir en Java, C++, VB, etc";
 choices[56][2] = "Internet Explorer soporta ActiveX de forma nativa";
 choices[56][3] = "Todas las anteriores son ciertas";
 answers[56] = 3;
 units[56] = ['62'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8944. ";
 preguntaids[56] = 8944


//  Id pregunta: 5395 Año de creación de pregunta: 2006
 questions[57]= "58)  En el formato gr&aacute;fico JPEG &iquest;Cu&aacute;l de estas opciones no es verdadera?";
 choices[57]= new Array();
 choices[57][0] = "Permite seleccionar la mayor o menor p&eacute;rdida de calidad en la compresi&oacute;n";
 choices[57][1] = "Usa el mismo algoritmo de compresi&oacute;n que el ZIP";
 choices[57][2] = "Su nombre oficial es ISO/IEC IS 10918";
 choices[57][3] = "La &uacute;ltima versi&oacute;n es JPEG 2000";
 answers[57] = 1;
 units[57] = ['62'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 5395. ";
 preguntaids[57] = 5395


//  Id pregunta: 4428 Año de creación de pregunta: 2002
 questions[58]= "59)  Los objetos que intervienen en la capa de aplicaci&oacute;n se denominan:";
 choices[58]= new Array();
 choices[58][0] = "Objetos de aplicaci&oacute;n";
 choices[58][1] = "Objetos de negocio";
 choices[58][2] = "Objetos distribuidos";
 choices[58][3] = "Objetos de servidor";
 answers[58] = 1;
 units[58] = ['62'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 4428. ";
 preguntaids[58] = 4428


//  Id pregunta: 8339 Año de creación de pregunta: 2011
 questions[59]= "60)  En la arquitectura orientada a servicios, el est&aacute;ndar WSRP:";
 choices[59]= new Array();
 choices[59][0] = "Web Service for Remote Process, es utilizado para integrar servicios web con aplicaciones de las que necesiten datos para ejecutar su funcionalidad.";
 choices[59][1] = "Web Service for Remote Portlets, es utilizado para potenciar el uso de Servicios Web por la interfaz de aplicaci&oacute;n";
 choices[59][2] = "Web Service for Resource Planning, es utilizado para su integraci&oacute;n con los ERP de la organizaci&oacute;n";
 choices[59][3] = "Web Service for Redirect Processing, es utilizado para recoger cierta funcionalidad de otro Servicio Web necesaria para completar la suya";
 answers[59] = 1;
 units[59] = ['62'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8339. Examen UC3M 2010";
 preguntaids[59] = 8339


//  Id pregunta: 6596 Año de creación de pregunta: 2009
 questions[60]= "61)  Indique qui&eacute;n desarroll&oacute; el lenguaje JavaScript";
 choices[60]= new Array();
 choices[60][0] = "Microsoft";
 choices[60][1] = "SUN";
 choices[60][2] = "Netscape";
 choices[60][3] = "W3C";
 answers[60] = 2;
 units[60] = ['62'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6596. MAP 2008 A1";
 preguntaids[60] = 6596


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[61]= "62)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[61]= new Array();
 choices[61][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[61][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[61][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[61][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[61] = 3;
 units[61] = ['62'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 697. AGE A1 2015";
 preguntaids[61] = 697


//  Id pregunta: 5929 Año de creación de pregunta: 2007
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es aplicable en una aplicaci&oacute;n desarrollada con la tecnolog&iacute;a Java WebStart?";
 choices[62]= new Array();
 choices[62][0] = "Permite ejecutar aplicaciones independientemente de cual sea la plataforma cliente";
 choices[62][1] = "Soporta m&uacute;ltiples versiones de entornos de ejecuci&oacute;n Java en el cliente";
 choices[62][2] = "Se requiere la firma de las aplicaciones que vayan a ejecutarse en ese entorno para garantizar la seguridaddel cliente";
 choices[62][3] = "La actualizaci&oacute;n de las aplicaciones se hace en el servidor, y el cliente s&oacute;lo precisa descargar loscomponentes actualizados";
 answers[62] = 2;
 units[62] = ['62'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 5929. ";
 preguntaids[62] = 5929


//  Id pregunta: 5952 Año de creación de pregunta: 2007
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (JointPhotographic Experts Group)?";
 choices[63]= new Array();
 choices[63][0] = "B&aacute;sico/secuencial";
 choices[63][1] = "Jer&aacute;rquico";
 choices[63][2] = "Progresivo";
 choices[63][3] = "Conjugado modificado";
 answers[63] = 3;
 units[63] = ['62'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 5952. ";
 preguntaids[63] = 5952


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l es el orden correcto de los niveles de prioridad del mensaje de la librer&iacute;a log4j de Apache Software Foundation?";
 choices[64]= new Array();
 choices[64][0] = "ERROR, FATAL, INFO, WARN, DEBUG Y TRACE.";
 choices[64][1] = "ERROR, FATAL, INFO, WARN, TRACE y DEBUG.";
 choices[64][2] = "FATAL, ERROR, WARN, INFO, DEBUG Y TRACE.";
 choices[64][3] = "FATAL, ERROR, WARN, INFO, TRACE Y DEBUG.";
 answers[64] = 2;
 units[64] = ['62'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 704. AGE A2 2015";
 preguntaids[64] = 704


//  Id pregunta: 8937 Año de creación de pregunta: 2013
 questions[65]= "66)  El cliente web:";
 choices[65]= new Array();
 choices[65][0] = "Puede realizar peticiones HTTP al servidor web";
 choices[65][1] = "Dispone de un int&eacute;rprete de scripting";
 choices[65][2] = "Puede tener plugins instalados";
 choices[65][3] = "Todas las anteriores son ciertas";
 answers[65] = 3;
 units[65] = ['62'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8937. ";
 preguntaids[65] = 8937


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; facilita un ORM?";
 choices[66]= new Array();
 choices[66][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[66][1] = "Conversi&oacute;n de objetos a documentos";
 choices[66][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[66][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[66] = 0;
 units[66] = ['62'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 698. AGE A1 2015";
 preguntaids[66] = 698


//  Id pregunta: 6973 Año de creación de pregunta: 2010
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica com&uacute;n a Portlets y Servlets?:";
 choices[67]= new Array();
 choices[67][0] = "Generan contenido din&aacute;micamente.";
 choices[67][1] = "Son manejados por un contenedor especializado.";
 choices[67][2] = "Est&aacute;n asociados directamente a una URL.";
 choices[67][3] = "Su ciclo de vida es controlado por el contenedor.";
 answers[67] = 2;
 units[67] = ['62'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 6973. ";
 preguntaids[67] = 6973


//  Id pregunta: 2917 Año de creación de pregunta: 2002
 questions[68]= "69)  Javascript:";
 choices[68]= new Array();
 choices[68][0] = "Es una evoluci&oacute;n de Java, dise&ntilde;ada por Sun Microsystems, como lenguaje de script para el cliente";
 choices[68][1] = "Permite el acceso a bases de datos en el lado del cliente";
 choices[68][2] = "Es una evoluci&oacute;n de LiveScript";
 choices[68][3] = "Se utiliza para programar Applets en el cliente";
 answers[68] = 2;
 units[68] = ['62'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2917. ";
 preguntaids[68] = 2917


//  Id pregunta: 10195 Año de creación de pregunta: 2015
 questions[69]= "70)  En relaci&oacute;n con jquery, se&ntilde;ale la respuesta correcta:";
 choices[69]= new Array();
 choices[69][0] = "Es una biblioteca disponible en Java 6 y 7 que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[69][1] = "Es una biblioteca de Javascript para simplificar la interacci&oacute;n con p&aacute;ginas web.";
 choices[69][2] = "Es un est&aacute;ndar abierto que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[69][3] = "Es una biblioteca para el acceso a almacenes de datos y big data, que permite la interacci&oacute;n del usuario final con los datos agregados y de detalle.";
 answers[69] = 1;
 units[69] = ['62'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 10195. Examen TIC A1 2014";
 preguntaids[69] = 10195


//  Id pregunta: 10172 Año de creación de pregunta: 2015
 questions[70]= "71)  Respecto a JSON (JavaScript Object Notation - Notaci&oacute;n de Objetos de JavaScript), se&ntilde;ale la respuesta correcta:";
 choices[70]= new Array();
 choices[70][0] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto solo entre aplicaciones JavaScript.";
 choices[70][1] = "Al igual que XML, permite el intercambio de datos en un formato de texto, tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[70][2] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[70][3] = "Al igual que XML, permite el intercambio de datos en un formato de texto, solo entre aplicaciones JavaScript.";
 answers[70] = 1;
 units[70] = ['62'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 10172. Examen TIC A1 2014";
 preguntaids[70] = 10172


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[71]= "72)  En el &aacute;mbito de las bases de datos Oracle, ANALYZE:";
 choices[71]= new Array();
 choices[71][0] = "Recopila estad&iacute;sticas acerca de los objetos del esquema usados por el optimizador.";
 choices[71][1] = "Es una herramienta de la base de datos con la que se realiza el an&aacute;lisis del modelo de datos.";
 choices[71][2] = "Es una herramienta de la base de datos con la que se realiza el dise&ntilde;o del modelo de datos.";
 choices[71][3] = "Es una vista ordinaria.";
 answers[71] = 0;
 units[71] = ['62'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 703. AGE A2 2015";
 preguntaids[71] = 703


//  Id pregunta: 8947 Año de creación de pregunta: 2013
 questions[72]= "73)  Respecto al formato de im&aacute;genes GIF, indique la afirmaci&oacute;n falsa:";
 choices[72]= new Array();
 choices[72][0] = "Utiliza el algoritmo de compresi&oacute;n patentado LZW";
 choices[72][1] = "Fue creado en 1987 por Apple";
 choices[72][2] = "Fue creado en 1987 por Compuserve";
 choices[72][3] = "La paleta de color soporta hasta 256 colores";
 answers[72] = 1;
 units[72] = ['62'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8947. ";
 preguntaids[72] = 8947


//  Id pregunta: 9607 Año de creación de pregunta: 2014
 questions[73]= "74)  No es una ventaja de la capa de aplicaci&oacute;n";
 choices[73]= new Array();
 choices[73][0] = "Compartici&oacute;n de objetos";
 choices[73][1] = "Independencia de la arquitectura de almacenamiento";
 choices[73][2] = "Redistribuci&oacute;n autom&aacute;tica de versiones firmadas";
 choices[73][3] = "Escalabilidad horizontal";
 answers[73] = 2;
 units[73] = ['62'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 9607. ";
 preguntaids[73] = 9607


