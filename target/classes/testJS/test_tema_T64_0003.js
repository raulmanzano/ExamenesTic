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
//  Id pregunta: 8000 Año de creación de pregunta: 2011
 questions[0]= "1)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[0]= new Array();
 choices[0][0] = "Sun Microsystems.";
 choices[0][1] = "Microsoft.";
 choices[0][2] = "Google.";
 choices[0][3] = "IBM.";
 answers[0] = 0;
 units[0] = ['64'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8000. Examen TIC A2 2010";
 preguntaids[0] = 8000


//  Id pregunta: 8447 Año de creación de pregunta: 2011
 questions[1]= "2)  Denttro de Web Sem&aacute;ntica 3.0 &iquest;cu&aacute;l no es un lenguaje de construcci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "SHOE";
 choices[1][1] = "DAML + OIL";
 choices[1][2] = "WDML";
 choices[1][3] = "RDF";
 answers[1] = 2;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8447. ";
 preguntaids[1] = 8447


//  Id pregunta: 8164 Año de creación de pregunta: 2011
 questions[2]= "3)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[2]= new Array();
 choices[2][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[2][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[2][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[2][3] = "No existen los ficheros WAR en J2EE";
 answers[2] = 1;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8164. Examen TIC A2 2010 interna";
 preguntaids[2] = 8164


//  Id pregunta: 6975 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;Cu&aacute;les son las JSRs de las versiones v1 y v2 de la Java Portlet Specification?";
 choices[3]= new Array();
 choices[3][0] = "JSR 186 y JSR 268";
 choices[3][1] = "JSR 618 y JSR 628";
 choices[3][2] = "JSR 681 y JSR 682";
 choices[3][3] = "JSR 168 y JSR 286";
 answers[3] = 3;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6975. ";
 preguntaids[3] = 6975


//  Id pregunta: 7409 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;D&oacute;nde se ejecutan los applets de Java de las p&aacute;ginas web?";
 choices[4]= new Array();
 choices[4][0] = "En el proxy";
 choices[4][1] = "En el servidor de aplicaciones";
 choices[4][2] = "En el servidor web";
 choices[4][3] = "En el navegador del cliente";
 answers[4] = 3;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7409. Examen TIC B 2009";
 preguntaids[4] = 7409


//  Id pregunta: 7932 Año de creación de pregunta: 2011
 questions[5]= "6)  El fichero JAR de una distribuci&oacute;n JAVA , NO contiene:";
 choices[5]= new Array();
 choices[5][0] = "El fichero manifest.mf.";
 choices[5][1] = "Un fichero .class por cada clase compilada.";
 choices[5][2] = "Un fichero .sf por cada fichero firmado de la distribuci&oacute;n.";
 choices[5][3] = "Un fichero .crt con cada certificado digital utilizado para firmar las clases.";
 answers[5] = 3;
 units[5] = ['64'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7932. Examen TIC A1 2010";
 preguntaids[5] = 7932


//  Id pregunta: 7500 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[6]= new Array();
 choices[6][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP.";
 choices[6][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica.";
 choices[6][2] = "Los ficheros con este formato son independientes de la plataforma.";
 choices[6][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los ficheros que contiene.";
 answers[6] = 3;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7500. Map 2005";
 preguntaids[6] = 7500


//  Id pregunta: 8951 Año de creación de pregunta: 2013
 questions[7]= "8)  En el patr&oacute;n MVC, &iquest;d&oacute;nde situar&iacute;amos un contenedor EJB?";
 choices[7]= new Array();
 choices[7][0] = "En el modelo";
 choices[7][1] = "En la vista";
 choices[7][2] = "En el controlador";
 choices[7][3] = "En todos los anteriores";
 answers[7] = 0;
 units[7] = ['64'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8951. ";
 preguntaids[7] = 8951


//  Id pregunta: 7635 Año de creación de pregunta: 2010
 questions[8]= "9)  En el entorno de trabajo necesario para desarrollar applets, el m&eacute;todo init de la clase applet:";
 choices[8]= new Array();
 choices[8][0] = "Es invocado autom&aacute;ticamente despu&eacute;s de que Java llame al m&eacute;todo start.";
 choices[8][1] = "Se utiliza siempre que el applet necesita inicializaci&oacute;n.";
 choices[8][2] = "Es invocado autom&aacute;ticamente cuando el usuario sale de la p&aacute;gina en la que se encuentra el applet.";
 choices[8][3] = "S&oacute;lo es invocado cuando el navegador se cierra normalmente.";
 answers[8] = 1;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7635. Map 2006";
 preguntaids[8] = 7635


//  Id pregunta: 8960 Año de creación de pregunta: 2013
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes directivas JSP no existe?";
 choices[9]= new Array();
 choices[9][0] = "page";
 choices[9][1] = "map";
 choices[9][2] = "taglib";
 choices[9][3] = "include";
 answers[9] = 1;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8960. ";
 preguntaids[9] = 8960


//  Id pregunta: 7665 Año de creación de pregunta: 2010
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativos escritos en otros lenguajes?";
 choices[10]= new Array();
 choices[10][0] = "RMI.";
 choices[10][1] = "JAXP.";
 choices[10][2] = "JNDI.";
 choices[10][3] = "JNI.";
 answers[10] = 3;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7665. Map 2007";
 preguntaids[10] = 7665


//  Id pregunta: 7225 Año de creación de pregunta: 2010
 questions[11]= "12)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[11]= new Array();
 choices[11][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[11][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[11][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases.";
 choices[11][3] = "No se permite herencia m&uacute;ltiple.";
 answers[11] = 2;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7225. ";
 preguntaids[11] = 7225


//  Id pregunta: 8166 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecutan en el servidor?";
 choices[12]= new Array();
 choices[12][0] = "Javascripts";
 choices[12][1] = "Applets";
 choices[12][2] = "JSP";
 choices[12][3] = "VisualScript";
 answers[12] = 2;
 units[12] = ['64'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8166. Examen TIC A2 2010 interna";
 preguntaids[12] = 8166


//  Id pregunta: 8351 Año de creación de pregunta: 2011
 questions[13]= "14)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.5 tenemos:";
 choices[13]= new Array();
 choices[13][0] = "P&aacute;ginas Asp y DLL";
 choices[13][1] = "Applet, Servlets, EJBs";
 choices[13][2] = "Javascript y p&aacute;ginas JSP";
 choices[13][3] = "Componentes COM";
 answers[13] = 1;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8351. Examen UC3M 2010";
 preguntaids[13] = 8351


//  Id pregunta: 8162 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes utilidades permite desarrollar en JAVA?";
 choices[14]= new Array();
 choices[14][0] = "JRE";
 choices[14][1] = "M&aacute;quina Virtual de Java";
 choices[14][2] = "JDK";
 choices[14][3] = "AWT";
 answers[14] = 2;
 units[14] = ['64'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8162. ";
 preguntaids[14] = 8162


//  Id pregunta: 7734 Año de creación de pregunta: 2010
 questions[15]= "16)  En Java 2, el operador &gt;&gt;:";
 choices[15]= new Array();
 choices[15][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas.";
 choices[15][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo).";
 choices[15][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo).";
 choices[15][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos.";
 answers[15] = 2;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7734. ";
 preguntaids[15] = 7734


//  Id pregunta: 7608 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es aplicable en una aplicaci&oacute;n desarrollada con la tecnolog&iacute;a Java Web Start?";
 choices[16]= new Array();
 choices[16][0] = "Permite ejecutar aplicaciones independientemente de cu&aacute;l sea la plataforma cliente.";
 choices[16][1] = "Soporta m&uacute;ltiples versiones de entornos de ejecuci&oacute;n Java en el cliente.";
 choices[16][2] = "Se requiere la firma de las aplicaciones que vayan a ejecutarse en ese entorno para garantizar la seguridad del cliente.";
 choices[16][3] = "La actualizaci&oacute;n de las aplicaciones se hace en el servidor, y el cliente s&oacute;lo precisa descargar los componentes actualizados.";
 answers[16] = 2;
 units[16] = ['64'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7608. Map 2006";
 preguntaids[16] = 7608


//  Id pregunta: 8955 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Cu&aacute;l es la API est&aacute;ndar para conectar programas desarrollados en Java con un sistema gestor de base de datos?";
 choices[17]= new Array();
 choices[17][0] = "JAXP";
 choices[17][1] = "StAX";
 choices[17][2] = "JAF";
 choices[17][3] = "JDBC";
 answers[17] = 3;
 units[17] = ['64'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8955. ";
 preguntaids[17] = 8955


//  Id pregunta: 8354 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[18]= new Array();
 choices[18][0] = "Type 1 JDBC Driver";
 choices[18][1] = "Type 2 JDBC Driver";
 choices[18][2] = "Type 3 JDBC Driver";
 choices[18][3] = "Type 4 JDBC Driver";
 answers[18] = 3;
 units[18] = ['61', '64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8354. Analista Ayto. Madrid 2010";
 preguntaids[18] = 8354


//  Id pregunta: 6995 Año de creación de pregunta: 2010
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes son implementaciones de Java Persistence API?";
 choices[19]= new Array();
 choices[19][0] = "Mediator";
 choices[19][1] = "Composite";
 choices[19][2] = "Facade";
 choices[19][3] = "Kodo";
 answers[19] = 3;
 units[19] = ['64'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 6995. TIC-B 2009 bloque desarrollo";
 preguntaids[19] = 6995


//  Id pregunta: 6959 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[20]= new Array();
 choices[20][0] = "WebLogic";
 choices[20][1] = "WebSphere";
 choices[20][2] = "Apache Tomcat";
 choices[20][3] = "Jboss";
 answers[20] = 2;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6959. TIC-B 2009 bloque desarrollo";
 preguntaids[20] = 6959


//  Id pregunta: 8515 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Qu&eacute; es en java una inner class?";
 choices[21]= new Array();
 choices[21][0] = "Es lo mismo que una clase abstracta";
 choices[21][1] = "Una clase declarada dentro de otra";
 choices[21][2] = "Una clase que no puede ser heredada";
 choices[21][3] = "Ninguno de los anteriores";
 answers[21] = 1;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8515. ";
 preguntaids[21] = 8515


//  Id pregunta: 7229 Año de creación de pregunta: 2010
 questions[22]= "23)  NO es un framework de desarrollo en Java";
 choices[22]= new Array();
 choices[22][0] = "JavaServer Faces";
 choices[22][1] = "Spring";
 choices[22][2] = "Ruby on Rails";
 choices[22][3] = "Maverick";
 answers[22] = 2;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7229. ";
 preguntaids[22] = 7229


//  Id pregunta: 7674 Año de creación de pregunta: 2010
 questions[23]= "24)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[23]= new Array();
 choices[23][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute.";
 choices[23][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentes plataformas.";
 choices[23][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware.";
 choices[23][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &laquo;Java Bytecode&raquo;.";
 answers[23] = 0;
 units[23] = ['64'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7674. Map 2007";
 preguntaids[23] = 7674


//  Id pregunta: 6950 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[24]= new Array();
 choices[24][0] = "Spring Security";
 choices[24][1] = "JSF";
 choices[24][2] = "Struts";
 choices[24][3] = "Jbuilder";
 answers[24] = 0;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 6950. TIC-B 2009 bloque desarrollo";
 preguntaids[24] = 6950


//  Id pregunta: 8277 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes NO es un lenguaje orientado a objetos?";
 choices[25]= new Array();
 choices[25][0] = "Java.";
 choices[25][1] = "C.";
 choices[25][2] = "Smalltalk.";
 choices[25][3] = "Ada.";
 answers[25] = 1;
 units[25] = ['64'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8277. Examen TIC A2 2010 interna";
 preguntaids[25] = 8277


//  Id pregunta: 8423 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes archivos no utiliza el formato de archivo ZIP?";
 choices[26]= new Array();
 choices[26][0] = "WAR";
 choices[26][1] = "EAR";
 choices[26][2] = "JAR";
 choices[26][3] = "Todos los anteriores lo usan";
 answers[26] = 3;
 units[26] = ['64'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8423. ";
 preguntaids[26] = 8423


//  Id pregunta: 7481 Año de creación de pregunta: 2010
 questions[27]= "28)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[27]= new Array();
 choices[27][0] = "Una extensi&oacute;n de Swing.";
 choices[27][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario.";
 choices[27][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent.";
 choices[27][3] = "Una familia de fuentes de caracteres.";
 answers[27] = 1;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7481. Map 2005";
 preguntaids[27] = 7481


//  Id pregunta: 8165 Año de creación de pregunta: 2011
 questions[28]= "29)  La librer&iacute;a Java API for XML Processing (JAXP):";
 choices[28]= new Array();
 choices[28][0] = "Permite tratar documentos XML tanto a trav&eacute;s de! modelo SAX como a trav&eacute;s del modelo DOM.";
 choices[28][1] = "Trabaja &uacute;nicamente con el modelo DOM.";
 choices[28][2] = "No existe tal librer&iacute;a en el lenguaje Java";
 choices[28][3] = "No tiene una Implementaci&oacute;n propia para el parser y obligatoriamente debe utilizar el parser del modelo DOM";
 answers[28] = 0;
 units[28] = ['64'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8165. Examen TIC A2 2010 interna";
 preguntaids[28] = 8165


//  Id pregunta: 7230 Año de creación de pregunta: 2010
 questions[29]= "30)  JME es la plataforma dirigida al desarrollo de aplicaciones para dispositivos como tel&eacute;fonos m&oacute;viles o PDAs, y es el acr&oacute;nimo de:";
 choices[29]= new Array();
 choices[29][0] = "Java Mobile Edition";
 choices[29][1] = "Java Micro Edition";
 choices[29][2] = "Java Mobility Edition";
 choices[29][3] = "Java Mobile Enterprise";
 answers[29] = 1;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7230. ";
 preguntaids[29] = 7230


//  Id pregunta: 7527 Año de creación de pregunta: 2010
 questions[30]= "31)  En JDBC, &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[30]= new Array();
 choices[30][0] = "Driver Tipo 1.";
 choices[30][1] = "Driver Tipo 2.";
 choices[30][2] = "Driver Tipo 3.";
 choices[30][3] = "Driver Tipo 4.";
 answers[30] = 0;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7527. Map 2005";
 preguntaids[30] = 7527


//  Id pregunta: 6733 Año de creación de pregunta: 2009
 questions[31]= "32)  &iquest;Qu&eacute; es JPA?";
 choices[31]= new Array();
 choices[31][0] = "Una tecnolog&iacute;a Java de acceso a bases de datos alternativa a JDBC y con la cu&aacute;l no tiene nada que ver";
 choices[31][1] = "Una tecnolog&iacute;a Java de acceso a bases de datos de mayor nivel que JDBC, en la cu&aacute;l se apoya";
 choices[31][2] = "Es la capa que soporta la portabilidad entre gestores de bases de datos en JDBC";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 1;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 6733. ";
 preguntaids[31] = 6733


//  Id pregunta: 7232 Año de creación de pregunta: 2010
 questions[32]= "33)  El API que permite a los desarrolladores Java generar y recoger mensajes SOAP con ficheros adjuntos es:";
 choices[32]= new Array();
 choices[32][0] = "JAXR";
 choices[32][1] = "JSXA";
 choices[32][2] = "SAAJ";
 choices[32][3] = "SWAJ";
 answers[32] = 2;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7232. ";
 preguntaids[32] = 7232


//  Id pregunta: 7494 Año de creación de pregunta: 2010
 questions[33]= "34)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo .NET:";
 choices[33]= new Array();
 choices[33][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios.";
 choices[33][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes.";
 choices[33][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos.";
 choices[33][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos.";
 answers[33] = 1;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7494. Map 2005";
 preguntaids[33] = 7494


//  Id pregunta: 7910 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;Qu&eacute; m&eacute;todo NO existe en la clase java HttpServlet?:";
 choices[34]= new Array();
 choices[34][0] = "doPut";
 choices[34][1] = "doTrace.";
 choices[34][2] = "doErrorC";
 choices[34][3] = "doOptions.";
 answers[34] = 2;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7910. Examen TIC A1 2010";
 preguntaids[34] = 7910


//  Id pregunta: 6758 Año de creación de pregunta: 2009
 questions[35]= "36)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &quot;applets de Java&quot;?:";
 choices[35]= new Array();
 choices[35][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente";
 choices[35][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &quot;Sandbox&quot;";
 choices[35][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnologia &quot;authenticode&quot;";
 choices[35][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas";
 answers[35] = 1;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6758. MAP 2008 A1";
 preguntaids[35] = 6758


//  Id pregunta: 8952 Año de creación de pregunta: 2013
 questions[36]= "37)  &iquest;En qu&eacute; versi&oacute;n se produjo el cambio de nomenclatura de la plataforma Java, pas&aacute;ndose a denominar Java Platform cuando anteriormente se le denominaba Java 2?";
 choices[36]= new Array();
 choices[36][0] = "Entre la versi&oacute;n 1.1 y 1.2";
 choices[36][1] = "Entre la versi&oacute;n 1.3 y 1.4";
 choices[36][2] = "Entre la versi&oacute;n 1.4 y 5.0";
 choices[36][3] = "La plataforma Java nunca se denomin&oacute; Java 2";
 answers[36] = 2;
 units[36] = ['64'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8952. ";
 preguntaids[36] = 8952


//  Id pregunta: 6974 Año de creación de pregunta: 2010
 questions[37]= "38)  El Java Community Process (JCP) utiliza documentos formales que describen las especificaciones y tecnolog&iacute;as propuestas para que sean a&ntilde;adidas a la plataforma Java. Estos documentos reciben el nombre de:";
 choices[37]= new Array();
 choices[37][0] = "JSR (Java Specification Request)";
 choices[37][1] = "JRS (Java Request Specification)";
 choices[37][2] = "JPS (Java Proposal Specification)";
 choices[37][3] = "JSP (Java Specification Proposal)";
 answers[37] = 0;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 6974. ";
 preguntaids[37] = 6974


//  Id pregunta: 8092 Año de creación de pregunta: 2011
 questions[38]= "39)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[38]= new Array();
 choices[38][0] = "P&aacute;ginas Asp y VBScript";
 choices[38][1] = "Applet, Servlets, EJBs";
 choices[38][2] = "Javascript y p&aacute;ginas JSP";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = 1;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8092. Analista Ayto. Madrid 2010";
 preguntaids[38] = 8092


//  Id pregunta: 8315 Año de creación de pregunta: 2011
 questions[39]= "40)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;c&oacute;mo se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[39]= new Array();
 choices[39][0] = "WT (Window Toolkit)";
 choices[39][1] = "AWT (Abstract Window Toolkit)";
 choices[39][2] = "JWS (Java Window Set)";
 choices[39][3] = "WS (Windows Set)";
 answers[39] = 1;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8315. Examen UPM A2 2011";
 preguntaids[39] = 8315


//  Id pregunta: 7227 Año de creación de pregunta: 2010
 questions[40]= "41)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[40]= new Array();
 choices[40][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[40][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[40][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[40][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[40] = 2;
 units[40] = ['64'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7227. ";
 preguntaids[40] = 7227


//  Id pregunta: 6734 Año de creación de pregunta: 2009
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[41]= new Array();
 choices[41][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[41][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[41][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[41][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[41] = 2;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 6734. ";
 preguntaids[41] = 6734


//  Id pregunta: 7684 Año de creación de pregunta: 2010
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[42]= new Array();
 choices[42][0] = "Es independiente del lenguaje de programaci&oacute;n.";
 choices[42][1] = "Es independiente del sistema operativo.";
 choices[42][2] = "Es independiente de la base de datos.";
 choices[42][3] = "Es un tipo de API.";
 answers[42] = 0;
 units[42] = ['64'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7684. Map 2007";
 preguntaids[42] = 7684


//  Id pregunta: 7231 Año de creación de pregunta: 2010
 questions[43]= "44)  En Java, se&ntilde;ale la afirmaci&oacute;n correcta con respecto a los Enterprise JavaBeans (EJB):";
 choices[43]= new Array();
 choices[43][0] = "Son componentes de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n.";
 choices[43][1] = "Existen dos tipos de Enterprise Beans: Session y entity.";
 choices[43][2] = "Est&aacute;n escritos en XML para permitir su interoperabilidad.";
 choices[43][3] = "En un contenedor EJBs solo puede residir un bean.";
 answers[43] = 0;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7231. ";
 preguntaids[43] = 7231


//  Id pregunta: 8956 Año de creación de pregunta: 2013
 questions[44]= "45)  En relaci&oacute;n a las APIs de Java, indique la afirmaci&oacute;n falsa:";
 choices[44]= new Array();
 choices[44][0] = "JNDI es el API est&aacute;ndar para el acceso a directorios y servicios de nombres";
 choices[44][1] = "JTA permite que los componentes EE gestionen sus propias transacciones";
 choices[44][2] = "Java IDL permite a las aplicaciones Java EE invocar a objetos CORBA";
 choices[44][3] = "JAX-RPC no soporta WSDL";
 answers[44] = 3;
 units[44] = ['64'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8956. ";
 preguntaids[44] = 8956


//  Id pregunta: 7190 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Cu&aacute;l de las plataformas desarrolladas por Java es una plataforma para crear aplicaciones servidor?";
 choices[45]= new Array();
 choices[45][0] = "Plataforma Java Technique Edition (JTE)";
 choices[45][1] = "Plataforma Java  Enterprise Edition (JEE)";
 choices[45][2] = "Plataforma Java Standard Edition (JSE)";
 choices[45][3] = "Plataforma Java Micro Edition (JME)";
 answers[45] = 1;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7190. Castilla La Mancha 2009";
 preguntaids[45] = 7190


//  Id pregunta: 8958 Año de creación de pregunta: 2013
 questions[46]= "47)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos no existe dentro de la clase abstracta HttpServlet?";
 choices[46]= new Array();
 choices[46][0] = "doGet()";
 choices[46][1] = "doDelete()";
 choices[46][2] = "doPut()";
 choices[46][3] = "Todos los m&eacute;todos anteriores existen en el clase HttpServlet";
 answers[46] = 3;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8958. ";
 preguntaids[46] = 8958


//  Id pregunta: 8316 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[47]= new Array();
 choices[47][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[47][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[47][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[47][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[47] = 3;
 units[47] = ['64'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8316. Examen UPM A2 2011";
 preguntaids[47] = 8316


//  Id pregunta: 7785 Año de creación de pregunta: 2010
 questions[48]= "49)  En java, el atributo &laquo;final&raquo; en la declaraci&oacute;n de una variable de una clase significa que:";
 choices[48]= new Array();
 choices[48][0] = "S&oacute;lo las clases de su paquete pueden acceder a ella.";
 choices[48][1] = "S&oacute;lo puede ser escrita una vez y no puede ser reescrita por clases hijas.";
 choices[48][2] = "S&oacute;lo se puede acceder a trav&eacute;s de m&eacute;todos get y set.";
 choices[48][3] = "Que forma parte del interface que implementa la clase.";
 answers[48] = 1;
 units[48] = ['64'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7785. ";
 preguntaids[48] = 7785


//  Id pregunta: 7625 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en J2EE (Java 2 Enterprise Edition)?";
 choices[49]= new Array();
 choices[49][0] = "WAR (Web Archive).";
 choices[49][1] = "EAR (Enterprise Archive).";
 choices[49][2] = "BAR (Bean Archive).";
 choices[49][3] = "JAR (Java Archive).";
 answers[49] = 2;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7625. Map 2006";
 preguntaids[49] = 7625


//  Id pregunta: 8093 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[50]= new Array();
 choices[50][0] = "JNDI";
 choices[50][1] = "JAAS";
 choices[50][2] = "JMS";
 choices[50][3] = "JNI";
 answers[50] = 1;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8093. Analista Ayto. Madrid 2010";
 preguntaids[50] = 8093


//  Id pregunta: 8399 Año de creación de pregunta: 2011
 questions[51]= "52)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[51]= new Array();
 choices[51][0] = "En el navegador del cliente.";
 choices[51][1] = "En el servidor Web.";
 choices[51][2] = "En el proxy.";
 choices[51][3] = "En el servidor de aplicaciones";
 answers[51] = 0;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8399. Operador Ayto. Madrid 2010";
 preguntaids[51] = 8399


//  Id pregunta: 7228 Año de creación de pregunta: 2010
 questions[52]= "53)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[52]= new Array();
 choices[52][0] = "JDI";
 choices[52][1] = "JCI";
 choices[52][2] = "JTEE";
 choices[52][3] = "JNI";
 answers[52] = 3;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7228. ";
 preguntaids[52] = 7228


//  Id pregunta: 6999 Año de creación de pregunta: 2010
 questions[53]= "54)  Uno de los siguientes es un elemento de Java EE:";
 choices[53]= new Array();
 choices[53][0] = "Contenedor HTTP";
 choices[53][1] = "Servidor JDBC";
 choices[53][2] = "Contenedor Enterprise Java Beans";
 choices[53][3] = "Contenedor JDBC";
 answers[53] = 2;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6999. TIC-B 2009 bloque desarrollo";
 preguntaids[53] = 6999


//  Id pregunta: 8508 Año de creación de pregunta: 2011
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[54]= new Array();
 choices[54][0] = "Postgres";
 choices[54][1] = "Hibernate";
 choices[54][2] = "TopLink";
 choices[54][3] = "Ibatis";
 answers[54] = 0;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8508. ";
 preguntaids[54] = 8508


//  Id pregunta: 7191 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes elementos NO est&aacute; incluido en el directorio privado WEB-INF de una aplicaci&oacute;n Web?";
 choices[55]= new Array();
 choices[55][0] = "Un archivo web.xml";
 choices[55][1] = "Un subdirectorio llamado classes";
 choices[55][2] = "Documentos de Microsoft Office";
 choices[55][3] = "Un subdirectorio lib para contener los archivos JAR utilizados por la aplicaci&oacute;n Web";
 answers[55] = 2;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7191. Castilla La Mancha 2009";
 preguntaids[55] = 7191


//  Id pregunta: 8953 Año de creación de pregunta: 2013
 questions[56]= "57)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[56]= new Array();
 choices[56][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[56][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[56][2] = "Una API de desarrollo en Java";
 choices[56][3] = "Java EE Blueprints no existe";
 answers[56] = 1;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8953. ";
 preguntaids[56] = 8953


//  Id pregunta: 7817 Año de creación de pregunta: 2010
 questions[57]= "58)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &laquo;applets de Java&raquo;?";
 choices[57]= new Array();
 choices[57][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente.";
 choices[57][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &laquo;Sandbox&raquo;.";
 choices[57][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnolog&iacute;a &laquo;authenticode&raquo;.";
 choices[57][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas.";
 answers[57] = 1;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7817. ";
 preguntaids[57] = 7817


//  Id pregunta: 8959 Año de creación de pregunta: 2013
 questions[58]= "59)  &iquest;Cu&aacute;l es la estructura est&aacute;ndar de una directiva JSP?";
 choices[58]= new Array();
 choices[58][0] = "&lt;@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[58][1] = "&lt;%@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...%&gt;";
 choices[58][2] = "&lt;!@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[58][3] = "&lt;*@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...*&gt;";
 answers[58] = 1;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8959. ";
 preguntaids[58] = 8959


//  Id pregunta: 7995 Año de creación de pregunta: 2011
 questions[59]= "60)  &iquest;Para que sirve la palabra clave &quot;static&quot; en Java?";
 choices[59]= new Array();
 choices[59][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[59][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[59][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[59][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[59] = 1;
 units[59] = ['64'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7995. Examen TIC A2 2010";
 preguntaids[59] = 7995


//  Id pregunta: 7226 Año de creación de pregunta: 2010
 questions[60]= "61)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[60]= new Array();
 choices[60][0] = "bytecode";
 choices[60][1] = "class";
 choices[60][2] = "jar";
 choices[60][3] = "applet";
 answers[60] = 0;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7226. ";
 preguntaids[60] = 7226


//  Id pregunta: 7504 Año de creación de pregunta: 2010
 questions[61]= "62)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[61]= new Array();
 choices[61][0] = "JavaMicro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java.";
 choices[61][1] = "Los Java Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java.";
 choices[61][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http.";
 choices[61][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet.";
 answers[61] = 2;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7504. Similar a Map 2005";
 preguntaids[61] = 7504


//  Id pregunta: 8516 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[62]= new Array();
 choices[62][0] = "Apache Axis2";
 choices[62][1] = "Hibernate";
 choices[62][2] = "Struts";
 choices[62][3] = "TopLink";
 answers[62] = 0;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8516. ";
 preguntaids[62] = 8516


//  Id pregunta: 6978 Año de creación de pregunta: 2010
 questions[63]= "64)  En relaci&oacute;n a la Java Native Interface, cu&aacute;l de las siguientes opciones es correcta:";
 choices[63]= new Array();
 choices[63][0] = "Todas las aplicaciones y applets pueden invocar la JNI";
 choices[63][1] = "Las aplicaciones pierden una de las caracter&iacute;sticas m&aacute;s importantes que Java le confiere, su portabilidad";
 choices[63][2] = "JNI mantiene la recolecci&oacute;n de basura en el c&oacute;digo incorporado";
 choices[63][3] = "JNI es una API de Java para acceder a servicios de procesos remotos";
 answers[63] = 1;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6978. TIC-B 2009 bloque desarrollo";
 preguntaids[63] = 6978


//  Id pregunta: 8163 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[64]= new Array();
 choices[64][0] = "Apache Tomcat";
 choices[64][1] = "JBOSS";
 choices[64][2] = "WebSphere Application Server";
 choices[64][3] = "Glassfish";
 answers[64] = 0;
 units[64] = ['63', '64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8163. Examen TIC A2 2010 interna";
 preguntaids[64] = 8163


//  Id pregunta: 6893 Año de creación de pregunta: 2010
 questions[65]= "66)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[65]= new Array();
 choices[65][0] = "Un applet.";
 choices[65][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[65][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[65][3] = "Un JavaBean.";
 answers[65] = 1;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 6893. TIC A 2009";
 preguntaids[65] = 6893


//  Id pregunta: 6992 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes APIs de JEE especifica la gesti&oacute;n de transacciones a trav&eacute;s de sistemas distribuidos?";
 choices[66]= new Array();
 choices[66][0] = "JNDE";
 choices[66][1] = "JNI";
 choices[66][2] = "JTA";
 choices[66][3] = "JAX";
 answers[66] = 2;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6992. TIC-B 2009 bloque desarrollo";
 preguntaids[66] = 6992


//  Id pregunta: 8950 Año de creación de pregunta: 2013
 questions[67]= "68)  En el patr&oacute;n MVC:";
 choices[67]= new Array();
 choices[67][0] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[67][1] = "Modelo son los componentes que se encargan de la carga de datos, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[67][2] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz en el servidor y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[67][3] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control del personal que accede al servidor";
 answers[67] = 0;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8950. ";
 preguntaids[67] = 8950


//  Id pregunta: 7725 Año de creación de pregunta: 2010
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java 2?";
 choices[68]= new Array();
 choices[68][0] = "Enteros.";
 choices[68][1] = "Booleanos.";
 choices[68][2] = "Cadenas.";
 choices[68][3] = "Tensores.";
 answers[68] = 3;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7725. Map 2007";
 preguntaids[68] = 7725


//  Id pregunta: 7561 Año de creación de pregunta: 2010
 questions[69]= "70)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[69]= new Array();
 choices[69][0] = "Error y Exception.";
 choices[69][1] = "Error y Catch.";
 choices[69][2] = "Throw y Finally.";
 choices[69][3] = "Error y Throw.";
 answers[69] = 0;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7561. Map 2005";
 preguntaids[69] = 7561


//  Id pregunta: 8169 Año de creación de pregunta: 2011
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO usa JAVA como lenguaje?";
 choices[70]= new Array();
 choices[70][0] = "JavaScript";
 choices[70][1] = "JavaBeans";
 choices[70][2] = "Servlets";
 choices[70][3] = "JSP";
 answers[70] = 0;
 units[70] = ['64'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8169. Examen TIC A2 2010 interna";
 preguntaids[70] = 8169


//  Id pregunta: 8957 Año de creación de pregunta: 2013
 questions[71]= "72)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[71]= new Array();
 choices[71][0] = "Se alojan en un contenedor web";
 choices[71][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[71][2] = "Se pueden invocar desde una URL";
 choices[71][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[71] = 3;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8957. ";
 preguntaids[71] = 8957


//  Id pregunta: 7173 Año de creación de pregunta: 2010
 questions[72]= "73)  Identifique el API de JAVA que facilita el acceso a registros UDDI";
 choices[72]= new Array();
 choices[72][0] = "SAAJ";
 choices[72][1] = "JAXR";
 choices[72][2] = "SOAP";
 choices[72][3] = "StAX";
 answers[72] = 1;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7173. Castilla La Mancha 2009";
 preguntaids[72] = 7173


//  Id pregunta: 8954 Año de creación de pregunta: 2013
 questions[73]= "74)  El lenguaje Java es un lenguaje:";
 choices[73]= new Array();
 choices[73][0] = "De herencia simple";
 choices[73][1] = "De herencia m&uacute;ltiple";
 choices[73][2] = "Que no permite la herencia";
 choices[73][3] = "Todas las anteriores son falsas";
 answers[73] = 0;
 units[73] = ['64'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8954. ";
 preguntaids[73] = 8954


//  Id pregunta: 7552 Año de creación de pregunta: 2010
 questions[74]= "75)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de JME es cierta:";
 choices[74]= new Array();
 choices[74][0] = "Es un subconjunto del paquete Swing de J2E.";
 choices[74][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n.";
 choices[74][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS.";
 choices[74][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos.";
 answers[74] = 3;
 units[74] = ['64'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7552. Similar a Map 2005";
 preguntaids[74] = 7552


