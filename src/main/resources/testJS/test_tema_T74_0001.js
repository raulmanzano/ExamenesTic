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
//  Id pregunta: 6007 Año de creación de pregunta: 2003
 questions[0]= "1)  &iquest;Qu&eacute; afirmaci&oacute;n es incorrecta?:";
 choices[0]= new Array();
 choices[0][0] = "WSDL es un documento XML.";
 choices[0][1] = "XML es un est&aacute;ndar W3C.";
 choices[0][2] = "SOAP requiere de HTTP o SMTP como protocolos de transporte.";
 choices[0][3] = "Las PDAs pueden usar Servicios Web.";
 answers[0] = 2;
 units[0] = ['74'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6007. TIC B 2007";
 preguntaids[0] = 6007


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[1]= "2)  En un modelo cliente-servidor de comunicaciones, &iquest;qu&eacute; entendemos por JSON?";
 choices[1]= new Array();
 choices[1][0] = "JavaScript Object Notation: es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos.";
 choices[1][1] = "Java Object Notation: es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las m&aacute;quinas es simple interpretarlo y generarlo.";
 choices[1][2] = "JavaScript Open Notation: es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las m&aacute;quinas es simple interpretarlo y generarlo.";
 choices[1][3] = "Java Open Notation: es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las m&aacute;quinas es simple interpretarlo y generarlo.";
 answers[1] = 0;
 units[1] = ['74'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 768. AGE A2 2015";
 preguntaids[1] = 768


//  Id pregunta: 3112 Año de creación de pregunta: 2002
 questions[2]= "3)  XML:";
 choices[2]= new Array();
 choices[2][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[2][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[2][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[2][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[2] = 1;
 units[2] = ['74'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3112. ";
 preguntaids[2] = 3112


//  Id pregunta: 2652 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[3]= new Array();
 choices[3][0] = "Unicode";
 choices[3][1] = "ITU 396-4";
 choices[3][2] = "ANSI 328";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = 0;
 units[3] = ['74'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2652. ";
 preguntaids[3] = 2652


//  Id pregunta: 5930 Año de creación de pregunta: 2007
 questions[4]= "5)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[4]= new Array();
 choices[4][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[4][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[4][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[4][3] = "XML Schema no tiene tipos predefinidos";
 answers[4] = 1;
 units[4] = ['74'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 5930. ";
 preguntaids[4] = 5930


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[5]= new Array();
 choices[5][0] = "SPARQL";
 choices[5][1] = "UnQL";
 choices[5][2] = "XQUERY";
 choices[5][3] = "RQL";
 answers[5] = 0;
 units[5] = ['74'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 760. AGE A1 2015";
 preguntaids[5] = 760


//  Id pregunta: 1231 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;A qu&eacute; se refiere el t&eacute;rmino mashup?";
 choices[6]= new Array();
 choices[6][0] = "Plataforma de desarrollo Web que define la base de datos (MySQL), el servidor Web (Apache), el sistema operativo (Solaris), y el lenguaje de programaci&oacute;n (Haskell).";
 choices[6][1] = "Peque&ntilde;a secci&oacute;n de la ventana del navegador que muestra un mensaje de texto que se desplaza a trav&eacute;s de la pantalla.";
 choices[6][2] = "Conjunto de t&eacute;cnicas y recomendaciones para conseguir que una p&aacute;gina web aparezca en los primeros resultados de los buscadores para unas determinadas palabras clave (keywords).";
 choices[6][3] = "Aplicaciones web que combinan datos y contenido de distintas fuentes para dar una experiencia de usuario integrada.";
 answers[6] = 3;
 units[6] = ['74'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1231. ";
 preguntaids[6] = 1231


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[7]= "8)  En JavaScript, &iquest;c&oacute;mo se forma la sentencia correcta para eliminar una cookie llamada &quot;_userxmd&quot;?";
 choices[7]= new Array();
 choices[7][0] = "document.cookie = &quot;_userxmd =; expires=Thu, 01 Jan 1970 00:00:00 UTC&quot;;";
 choices[7][1] = "document.cookie = &quot;&quot;";
 choices[7][2] = "document.cookie._userxmd.delete()";
 choices[7][3] = "document.cookie.delete(_userxmd)";
 answers[7] = 0;
 units[7] = ['74'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 769. AGE A2 2015";
 preguntaids[7] = 769


//  Id pregunta: 3254 Año de creación de pregunta: 2003
 questions[8]= "9)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[8]= new Array();
 choices[8][0] = "&lt;/TITLE&gt;";
 choices[8][1] = "&lt;TITLE&gt;";
 choices[8][2] = "/&lt;TITLE&gt;";
 choices[8][3] = "/TITLE";
 answers[8] = 0;
 units[8] = ['74'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3254. ";
 preguntaids[8] = 3254


//  Id pregunta: 3444 Año de creación de pregunta: 2006
 questions[9]= "10)  Se&ntilde;alar la respuesta falsa:";
 choices[9]= new Array();
 choices[9][0] = "HTML es un subconjunto de SGML";
 choices[9][1] = "XHTML es un subconjunto de XML";
 choices[9][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[9][3] = "RTF es un subconjunto de SGML";
 answers[9] = 2;
 units[9] = ['74'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3444. ";
 preguntaids[9] = 3444


//  Id pregunta: 5425 Año de creación de pregunta: 2007
 questions[10]= "11)  &iquest;Para que sirve XPath (XML Path language)?";
 choices[10]= new Array();
 choices[10][0] = "Para identificar(y seleccionar)elementos de un documento XML.";
 choices[10][1] = "Para gestionar claves en XML";
 choices[10][2] = "Para hacer consultas en documentos XML";
 choices[10][3] = "Para definir documentos XML";
 answers[10] = 0;
 units[10] = ['74'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 5425. ";
 preguntaids[10] = 5425


//  Id pregunta: 2488 Año de creación de pregunta: 2004
 questions[11]= "12)  DTD se emplea para:";
 choices[11]= new Array();
 choices[11][0] = "Crear documentos XML bien formados";
 choices[11][1] = "Formatear documentos XML";
 choices[11][2] = "Transformar documentos HTML en XML";
 choices[11][3] = "Validar documentos XML";
 answers[11] = 3;
 units[11] = ['74'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2488. Similar a examen TIC SS A 2004";
 preguntaids[11] = 2488


//  Id pregunta: 1550 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes NO es un m&eacute;todo del objeto XMLHttpRequest de Javascript? Para la respuesta no tenga en cuenta los posibles par&aacute;metros que pueda contener la llamada al mismo.";
 choices[12]= new Array();
 choices[12][0] = "open";
 choices[12][1] = "stop";
 choices[12][2] = "setRequestHeader";
 choices[12][3] = "getAllResponseHeaders";
 answers[12] = 1;
 units[12] = ['74'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1550. ";
 preguntaids[12] = 1550


//  Id pregunta: 1643 Año de creación de pregunta: 2016
 questions[13]= "14)  Uno de los grupos de tecnolog&iacute;as consideradas en el &aacute;mbito de la Web 2.0 es AJAX (Asynchronous JavaScript And XML). Indique cu&aacute;l de las siguientes afirmaciones NO se corresponde con este grupo de tecnolog&iacute;as.";
 choices[13]= new Array();
 choices[13][0] = "Es una t&eacute;cnica de desarrollo web para crear aplicaciones interactivas o RIA (Rich Internet Applications)";
 choices[13][1] = "Estas aplicaciones se ejecutan en el servidor y mantiene comunicaci&oacute;n as&iacute;ncrona con el cliente en segundo plano.";
 choices[13][2] = "En los entornos RIA no se producen recargas de p&aacute;gina, ya que desde el principio se carga toda la aplicaci&oacute;n y s&oacute;lo se produce comunicaci&oacute;n con el servidor cuando se necesitan datos externos como los de una Base de Datos o de otros ficheros externos.";
 choices[13][3] = "Lleva consigo la utilizaci&oacute;n de XHTML (o HTML) y hojas de estilos en cascada (CSS) para el dise&ntilde;o que acompa&ntilde;a a la informaci&oacute;n.";
 answers[13] = 1;
 units[13] = ['74'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1643. ";
 preguntaids[13] = 1643


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[14]= "15)  En HTML5 la API de geolocalizaci&oacute;n se publica a trav&eacute;s del objeto:";
 choices[14]= new Array();
 choices[14][0] = "window.navigator.currentPosition";
 choices[14][1] = "window.navigation.position";
 choices[14][2] = "window.navigator.watchPosition";
 choices[14][3] = "window.navigator.geolocation";
 answers[14] = 3;
 units[14] = ['74'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 764. AGE A2 2015";
 preguntaids[14] = 764


//  Id pregunta: 1817 Año de creación de pregunta: 2016
 questions[15]= "16)  Entre las diferentes caracter&iacute;sticas que tienen las aplicaciones de Internet enriquecidas, indique cu&aacute;l de las siguientes opciones NO es correcta";
 choices[15]= new Array();
 choices[15][0] = "Las aplicaciones de Internet enriquecidas utilizan un navegador web estandarizado para ejecutarse.";
 choices[15][1] = "Las aplicaciones de Internet enriquecidas pueden ser usadas desde cualquier ordenador con conexi&oacute;n a Internet pero con dependencia del sistema operativo que &eacute;ste utilice.";
 choices[15][2] = "Las aplicaciones de Internet enriquecidas utilizan una arquitectura cliente/servidor as&iacute;ncrona.";
 choices[15][3] = "Las aplicaciones de Internet enriquecidas surgen como una combinaci&oacute;n de las ventajas que ofrecen las aplicaciones web y las aplicaciones tradicionales.";
 answers[15] = 1;
 units[15] = ['74'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1817. ";
 preguntaids[15] = 1817


//  Id pregunta: 4661 Año de creación de pregunta: 2002
 questions[16]= "17)  Cuando se emplean tablas en HTML, &iquest;cu&aacute;l es el comando que permite definir nuevas filas de una tabla?:";
 choices[16]= new Array();
 choices[16][0] = "&lt;TD&gt;&hellip;&lt;/TD&gt;";
 choices[16][1] = "&lt;TR&gt;&hellip;&lt;/TR&gt;";
 choices[16][2] = "&lt;TH&gt;&hellip;&lt;/TH&gt;";
 choices[16][3] = "&lt;TF&gt;&hellip;&lt;/TF&gt;";
 answers[16] = 1;
 units[16] = ['74'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 4661. ";
 preguntaids[16] = 4661


//  Id pregunta: 5723 Año de creación de pregunta: 2007
 questions[17]= "18)  En HTML podemos referenciar una marca dentro de un documento con la directiva &lt;A&gt;, indicando el nombre de documento y el nombre de la marca, y separando ambos nombres con el car&aacute;cter:";
 choices[17]= new Array();
 choices[17][0] = "@";
 choices[17][1] = "$";
 choices[17][2] = "&amp;";
 choices[17][3] = "#";
 answers[17] = 3;
 units[17] = ['74'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 5723. ";
 preguntaids[17] = 5723


//  Id pregunta: 1229 Año de creación de pregunta: 2016
 questions[18]= "19)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[18]= new Array();
 choices[18][0] = "OWL";
 choices[18][1] = "RQUERY";
 choices[18][2] = "JQUERY";
 choices[18][3] = "SPARQL";
 answers[18] = 3;
 units[18] = ['74'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1229. ";
 preguntaids[18] = 1229


//  Id pregunta: 2761 Año de creación de pregunta: 2002
 questions[19]= "20)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[19]= new Array();
 choices[19][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[19][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[19][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[19][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[19] = 2;
 units[19] = ['74'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2761. ";
 preguntaids[19] = 2761


//  Id pregunta: 1869 Año de creación de pregunta: 2016
 questions[20]= "21)  En referencia al lenguaje XML, &iquest;Cu&aacute;l de las siguientes opciones considera correcta?";
 choices[20]= new Array();
 choices[20][0] = "Las hojas de estilo CSS no puede ser utilizadas con HTML";
 choices[20][1] = "XSL puede usarse para transformar datos XML a documentos HTMUCSS en un servidor web";
 choices[20][2] = "CSS puede ejecutar cualquier 16gica basada en los datos";
 choices[20][3] = "XML permite m&aacute;s de un elemenio raiz.";
 answers[20] = 1;
 units[20] = ['74'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1869. ";
 preguntaids[20] = 1869


//  Id pregunta: 5321 Año de creación de pregunta: 2006
 questions[21]= "22)  Los elementos XML de tipo y atributo deben tener una identidad &uacute;nica en el &aacute;mbito del";
 choices[21]= new Array();
 choices[21][0] = "servidor o sitio";
 choices[21][1] = "espacio de nombres";
 choices[21][2] = "nombre de dominio";
 choices[21][3] = "nombre de dominio completamente cualificado (FQDM)";
 answers[21] = 1;
 units[21] = ['74'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 5321. ";
 preguntaids[21] = 5321


//  Id pregunta: 2508 Año de creación de pregunta: 2004
 questions[22]= "23)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[22]= new Array();
 choices[22][0] = "DXL (Document eXtended Language)";
 choices[22][1] = "DTD (Document Type Definition)";
 choices[22][2] = "DOM (Document Object Model)";
 choices[22][3] = "DML (Document Markup Language)";
 answers[22] = 1;
 units[22] = ['74'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2508. Examen TIC MAP B 2004";
 preguntaids[22] = 2508


//  Id pregunta: 6059 Año de creación de pregunta: 2003
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no ha sido elaborado por W3C (World Wide Web Consortium)?";
 choices[23]= new Array();
 choices[23][0] = "XML (Extensible Markup Language).";
 choices[23][1] = "SOAP (Simple Object Access Protocol).";
 choices[23][2] = "WAI (Web Accessibility Initiative).";
 choices[23][3] = "SSL (Secure Sockets Layer).";
 answers[23] = 3;
 units[23] = ['74'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 6059. TIC B 2007";
 preguntaids[23] = 6059


//  Id pregunta: 5770 Año de creación de pregunta: 2007
 questions[24]= "25)  &iquest;En que lenguaje esta basado XML?";
 choices[24]= new Array();
 choices[24][0] = "HTML";
 choices[24][1] = "XSL";
 choices[24][2] = "SGML";
 choices[24][3] = "XTML";
 answers[24] = 2;
 units[24] = ['74'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 5770. ";
 preguntaids[24] = 5770


//  Id pregunta: 2976 Año de creación de pregunta: 2002
 questions[25]= "26)  Los documentos &quot;bien formados&quot; en XML:";
 choices[25]= new Array();
 choices[25][0] = "no siguen las reglas de etiquetado de XML pero s&iacute; del DTD";
 choices[25][1] = "siguen las reglas de etiquetado de XML y del DTD";
 choices[25][2] = "no siguen las reglas de etiquetado del DTD pero s&iacute; de XML";
 choices[25][3] = "ninguno de los anteriores";
 answers[25] = 2;
 units[25] = ['74'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2976. ";
 preguntaids[25] = 2976


//  Id pregunta: 1924 Año de creación de pregunta: 2016
 questions[26]= "27)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[26]= new Array();
 choices[26][0] = "Conseguir informaci&oacute;n sobre los h&aacute;bitos de navegaci&oacute;n del usuario";
 choices[26][1] = "Enviar c6digo embebido en la pagina HTML que se ejecutara en el cliente";
 choices[26][2] = "La generaci&oacute;n de Pop-ups";
 choices[26][3] = "Contienen tanto c&oacute;digo como datos";
 answers[26] = 0;
 units[26] = ['74'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1924. ";
 preguntaids[26] = 1924


//  Id pregunta: 1816 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique cu&aacute;l de las siguientes definiciones referidas a la t&eacute;cnica AJAX (Asynchronous JavaScript And XML) es correcta";
 choices[27]= new Array();
 choices[27][0] = "AJAX es una plataforma v&aacute;lida s&oacute;lo para plataformas JEE.";
 choices[27][1] = "AJAX no representa una tecnolog&iacute;a en s&iacute; misma, sino que se trata de la combinaci&oacute;n de un grupo de tecnolog&iacute;as ya existentes.";
 choices[27][2] = "AJAX utiliza siempre el formato XML para la transferencia de datos solicitados al servidor.";
 choices[27][3] = "En las aplicaciones desarrolladas con AJAX no es posible realizar cambios sobre las p&aacute;ginas si no se realiza la recarga de p&aacute;gina.";
 answers[27] = 1;
 units[27] = ['74'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1816. ";
 preguntaids[27] = 1816


//  Id pregunta: 1079 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;C&oacute;mo se puede validar documentos en XML?";
 choices[28]= new Array();
 choices[28][0] = "Usando XSL Schema.";
 choices[28][1] = "Usando XSLT.";
 choices[28][2] = "Usando un Applet de validaci&oacute;n.";
 choices[28][3] = "Usando un DTD.";
 answers[28] = 3;
 units[28] = ['74'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1079. ";
 preguntaids[28] = 1079


//  Id pregunta: 2688 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[29]= new Array();
 choices[29][0] = "HTML es un subconjunto de SGML";
 choices[29][1] = "SGML es un subconjunto de HTML";
 choices[29][2] = "SGML se inspir&oacute; en HTML";
 choices[29][3] = "No tienen relaci&oacute;n";
 answers[29] = 0;
 units[29] = ['74'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2688. ";
 preguntaids[29] = 2688


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[30]= new Array();
 choices[30][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[30][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[30][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[30][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[30] = 1;
 units[30] = ['74'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 761. AGE A1 2015";
 preguntaids[30] = 761


//  Id pregunta: 4928 Año de creación de pregunta: 2002
 questions[31]= "32)  UDDI:";
 choices[31]= new Array();
 choices[31][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[31][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[31][2] = "Significa User Definition Domain  Interface";
 choices[31][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[31] = 3;
 units[31] = ['74'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 4928. ";
 preguntaids[31] = 4928


//  Id pregunta: 1407 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[32]= new Array();
 choices[32][0] = "Web 3.0.";
 choices[32][1] = "Taxonom&iacute;a.";
 choices[32][2] = "Labelling.";
 choices[32][3] = "Folcsonom&iacute;a.";
 answers[32] = 3;
 units[32] = ['74'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1407. ";
 preguntaids[32] = 1407


//  Id pregunta: 2638 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[33]= new Array();
 choices[33][0] = "DOKM";
 choices[33][1] = "DOM";
 choices[33][2] = "JDOC";
 choices[33][3] = "Todas son falsas";
 answers[33] = 1;
 units[33] = ['74'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2638. ";
 preguntaids[33] = 2638


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[34]= "35)  En cu&aacute;l de la siguiente lista de opciones todos los elementos forman parte del paquete PrimitiveTypes de UML 2.5:";
 choices[34]= new Array();
 choices[34][0] = "Tiny, Boolean, String, UnlimitedNatural, Real";
 choices[34][1] = "Integer, Boolean, String, Float, Unreal";
 choices[34][2] = "Integer, Boolean, String, UnlimitedNatural, Real";
 choices[34][3] = "Integer, Array, String, Float, Real";
 answers[34] = 2;
 units[34] = ['74'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 766. AGE A2 2015";
 preguntaids[34] = 766


//  Id pregunta: 5182 Año de creación de pregunta: 2003
 questions[35]= "36)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[35]= new Array();
 choices[35][0] = "UDDI";
 choices[35][1] = "WSDL";
 choices[35][2] = "SOAP";
 choices[35][3] = "JAXP";
 answers[35] = 0;
 units[35] = ['74'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 5182. ";
 preguntaids[35] = 5182


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a estandarizada por el W3C permite la extracci&oacute;n de datos desde documentos XML:";
 choices[36]= new Array();
 choices[36][0] = "XML MyQueryLang.";
 choices[36][1] = "XSQL Language.";
 choices[36][2] = "XML QueryDataSet.";
 choices[36][3] = "Xquery Language.";
 answers[36] = 3;
 units[36] = ['74'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 762. AGE A2 2015";
 preguntaids[36] = 762


//  Id pregunta: 1095 Año de creación de pregunta: 2016
 questions[37]= "38)  AJAX es:";
 choices[37]= new Array();
 choices[37][0] = "Un lenguaje de programaci&oacute;n basado en la codificaci&oacute;n de programas en XML.";
 choices[37][1] = "Una filosof&iacute;a o t&eacute;cnica de desarrollo de aplicaciones web que se apoya, entre otras tecnolog&iacute;as, en XML y JavaScript.";
 choices[37][2] = "Un servidor de aplicaciones Internet desarrollado en Java cuyas p&aacute;ginas web est&aacute;n escritas en XHTML.";
 choices[37][3] = "Una alternativa a SOAP en la descripci&oacute;n de webservices.";
 answers[37] = 1;
 units[37] = ['74'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1095. ";
 preguntaids[37] = 1095


//  Id pregunta: 1539 Año de creación de pregunta: 2016
 questions[38]= "39)  Los controles ActiveX pueden ser escritos:";
 choices[38]= new Array();
 choices[38][0] = "&Uacute;nicamente en Microsoft Visual Basic, al ser tecnolog&iacute;a propietaria.";
 choices[38][1] = "&Uacute;nicamente en Java, dada su enfoque el entorno web reusable.";
 choices[38][2] = "&Uacute;nicamente en C++, para proveer neutralidad tecnol&oacute;gica frente a los modelos J2EE y .Net.";
 choices[38][3] = "En casi todos los lenguajes de programaci&oacute;n, incluyendo Java, C++ y Microsoft Visual Basic.";
 answers[38] = 3;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1539. ";
 preguntaids[38] = 1539


//  Id pregunta: 2749 Año de creación de pregunta: 2002
 questions[39]= "40)  El creador de HTML fue:";
 choices[39]= new Array();
 choices[39][0] = "Tim Berners-Lee";
 choices[39][1] = "Ivar Jacobson";
 choices[39][2] = "Grady Booch";
 choices[39][3] = "Todas son falsas";
 answers[39] = 0;
 units[39] = ['74'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2749. ";
 preguntaids[39] = 2749


//  Id pregunta: 2484 Año de creación de pregunta: 2004
 questions[40]= "41)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[40]= new Array();
 choices[40][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[40][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[40][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[40][3] = "Todas son v&aacute;lidas";
 answers[40] = 3;
 units[40] = ['74'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2484. Similar a examen TIC MAP A 2004. La C no ser&iacute;a v&aacute;lida en HTML 4.0";
 preguntaids[40] = 2484


//  Id pregunta: 1806 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique cu&aacute;l de las siguientes afirmaciones sobre RSS NO es correcta";
 choices[41]= new Array();
 choices[41][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web";
 choices[41][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas web de noticias";
 choices[41][2] = "RSS es parte de la familia de los formatos XML";
 choices[41][3] = "Es un acr&oacute;nimo de Really Simple Syndication";
 answers[41] = 1;
 units[41] = ['74'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1806. ";
 preguntaids[41] = 1806


//  Id pregunta: 1871 Año de creación de pregunta: 2016
 questions[42]= "43)  Los tipos de documentos seg&uacute;n XML son:";
 choices[42]= new Array();
 choices[42][0] = "Inv&aacute;lido y v&aacute;lido";
 choices[42][1] = "Inv&aacute;lido y bien formado";
 choices[42][2] = "Inv&aacute;lido, bien formado y v&aacute;lido";
 choices[42][3] = "lnv&aacute;lido, bien formado, v&aacute;lido y completo";
 answers[42] = 2;
 units[42] = ['74'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1871. ";
 preguntaids[42] = 1871


//  Id pregunta: 2999 Año de creación de pregunta: 2002
 questions[43]= "44)  Para especificar localizadores en XML se usa:";
 choices[43]= new Array();
 choices[43][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[43][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[43][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[43][3] = "ninguno de los anteriores";
 answers[43] = 2;
 units[43] = ['74'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2999. ";
 preguntaids[43] = 2999


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[44]= "45)  Entre las nuevas etiquetas sem&aacute;nticas del HTML5 NO se encuentra:";
 choices[44]= new Array();
 choices[44][0] = "footer";
 choices[44][1] = "nav";
 choices[44][2] = "header";
 choices[44][3] = "strike";
 answers[44] = 3;
 units[44] = ['74'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 763. AGE A2 2015";
 preguntaids[44] = 763


//  Id pregunta: 3167 Año de creación de pregunta: 2002
 questions[45]= "46)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[45]= new Array();
 choices[45][0] = "Es un lenguaje de programaci&oacute;n";
 choices[45][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[45][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[45][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[45] = 0;
 units[45] = ['74'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3167. ";
 preguntaids[45] = 3167


//  Id pregunta: 5830 Año de creación de pregunta: 2007
 questions[46]= "47)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[46]= new Array();
 choices[46][0] = "Usando XSL";
 choices[46][1] = "Usando un DTD";
 choices[46][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[46][3] = "Usando XSLT";
 answers[46] = 1;
 units[46] = ['74'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 5830. Examen 2006 JCYL";
 preguntaids[46] = 5830


//  Id pregunta: 1344 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale cual de las siguientes opciones se ajusta a la siguiente definici&oacute;n: plataforma basada en lava que permite crear rich internet applications (RIA) que se comportan de la misma forma en distintas plataformas:";
 choices[47]= new Array();
 choices[47][0] = "Flex";
 choices[47][1] = "JavaFX";
 choices[47][2] = "AJAX";
 choices[47][3] = "Silverlight";
 answers[47] = 1;
 units[47] = ['74'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1344. ";
 preguntaids[47] = 1344


//  Id pregunta: 1228 Año de creación de pregunta: 2016
 questions[48]= "49)  En un contexto web, &iquest;qu&eacute; significa AJAX?";
 choices[48]= new Array();
 choices[48][0] = "Accelerated JAva eXtensions.";
 choices[48][1] = "Active JSON And XML.";
 choices[48][2] = "Asynchronous JAvaScript eXtensions.";
 choices[48][3] = "Asynchronous JavaScript and XML.";
 answers[48] = 3;
 units[48] = ['74'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1228. ";
 preguntaids[48] = 1228


//  Id pregunta: 5843 Año de creación de pregunta: 2007
 questions[49]= "50)  Cual de las siguientes afirmaciones es correcta cuando hablamos de XML:";
 choices[49]= new Array();
 choices[49][0] = "Cocoon es un parser XML de c&oacute;digo abierto";
 choices[49][1] = "Los parsers XML sin validaci&oacute;n necesitan el dtd asociado al documento xml";
 choices[49][2] = "Xerces es un parser XML basado en java";
 choices[49][3] = "XSLT es un esquema para XML utilizado en lugar de los DTD";
 answers[49] = 2;
 units[49] = ['74'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 5843. Examen 2006 JCYL";
 preguntaids[49] = 5843


//  Id pregunta: 3064 Año de creación de pregunta: 2002
 questions[50]= "51)  Sobre el uso que hacen XML y HTML de etiquetas y atributos:";
 choices[50]= new Array();
 choices[50][0] = "HTML y XML especifican lo que significa cada etiqueta y atributo";
 choices[50][1] = "XML usa las etiquetas s&oacute;lo para delimitar segmentos de datos y deja la interpretaci&oacute;n de los datos a la aplicaci&oacute;n que los lee";
 choices[50][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[50][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[50] = 1;
 units[50] = ['74'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3064. ";
 preguntaids[50] = 3064


//  Id pregunta: 5452 Año de creación de pregunta: 2007
 questions[51]= "52)  Los documentos electr&oacute;nicos conformados de acuerdo con la norma XML utilizan el juego de caracteres:";
 choices[51]= new Array();
 choices[51][0] = "ASCII de 16 bits.";
 choices[51][1] = "ASCII de 8 bits.";
 choices[51][2] = "UNICODE.";
 choices[51][3] = "MIME";
 answers[51] = 2;
 units[51] = ['74'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 5452. ";
 preguntaids[51] = 5452


//  Id pregunta: 2739 Año de creación de pregunta: 2002
 questions[52]= "53)  El acr&oacute;nimo XML corresponde a:";
 choices[52]= new Array();
 choices[52][0] = "Extensible Markup Language";
 choices[52][1] = "Extended Markup Language";
 choices[52][2] = "Expressions Markup Language";
 choices[52][3] = "Extension Markup Language";
 answers[52] = 0;
 units[52] = ['74'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2739. ";
 preguntaids[52] = 2739


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[53]= "54)  En AJAX, el objeto usado para recibir informaci&oacute;n del servidor web es:";
 choices[53]= new Array();
 choices[53][0] = "XMLRequestObject";
 choices[53][1] = "AJAXRequest";
 choices[53][2] = "JSONRequest";
 choices[53][3] = "XMLHttpRequest";
 answers[53] = 3;
 units[53] = ['74'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 771. AGE A2 2015";
 preguntaids[53] = 771


//  Id pregunta: 2932 Año de creación de pregunta: 2002
 questions[54]= "55)  La especificaci&oacute;n XSLT define:";
 choices[54]= new Array();
 choices[54][0] = "El formato de visualizaci&oacute;n de los documentos XML";
 choices[54][1] = "El formato de ordenaci&oacute;n de etiquetas o tags de documentos XML";
 choices[54][2] = "La definici&oacute;n de datos en los documentos XML";
 choices[54][3] = "La estructura de enlace en los documentos XML";
 answers[54] = 0;
 units[54] = ['74'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2932. ";
 preguntaids[54] = 2932


//  Id pregunta: 1873 Año de creación de pregunta: 2016
 questions[55]= "56)  XML:";
 choices[55]= new Array();
 choices[55][0] = "Es un lenguaje de presentaci&oacute;n similar a HTML, pero m&aacute;s avanzado";
 choices[55][1] = "Es similar a HTML pero con orientaci&oacute;n al mundo del dise&ntilde;o dado que permite realizar p&aacute;ginas web m&aacute;s vistosas y din&aacute;micas.";
 choices[55][2] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos.";
 choices[55][3] = "Es un lenguaje para el intercambio de informaci&oacute;n no estructurada entre diferentes plataformas.";
 answers[55] = 2;
 units[55] = ['74'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1873. ";
 preguntaids[55] = 1873


//  Id pregunta: 5921 Año de creación de pregunta: 2007
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language ) NO escierta?";
 choices[56]= new Array();
 choices[56][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas";
 choices[56][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML";
 choices[56][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, encuyo caso pueden omitirse";
 choices[56][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM(Document Object Model) o en XML-DOM";
 answers[56] = 2;
 units[56] = ['74'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 5921. ";
 preguntaids[56] = 5921


//  Id pregunta: 1296 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale, de los siguientes, el sistema de ejecuci&oacute;n multi plataforma desarrollado por Adobe para crear aplicaciones RIA que se pueden ejecutar como aplicaciones de escritorio o de dispositivos m&oacute;viles:";
 choices[57]= new Array();
 choices[57][0] = "Android SDK";
 choices[57][1] = "Mahout";
 choices[57][2] = "InDesign";
 choices[57][3] = "AIR";
 answers[57] = 3;
 units[57] = ['74'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1296. ";
 preguntaids[57] = 1296


//  Id pregunta: 1177 Año de creación de pregunta: 2016
 questions[58]= "59)  En una aplicaci&oacute;n web que tiene un formulario en el que se solicita al usuario el NIF y se desea controlar que la letra del NIF introducida por el usuario sea la correcta, &iquest;se podr&iacute;a usar JavaScript para hacer ese control?";
 choices[58]= new Array();
 choices[58][0] = "No, se necesita acceso a la base de datos de NIFs del servidor.";
 choices[58][1] = "Si, es un control que se puede hacer de forma local sin acceder al servidor.";
 choices[58][2] = "No, se necesita un applet de Java para realizar esa operaci&oacute;n.";
 choices[58][3] = "Si, JavaScript permite hacer el c&aacute;lculo en el servidor mediante una petici&oacute;n HTTP, aunque no hacer el c&aacute;lculo localmente.";
 answers[58] = 1;
 units[58] = ['74'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1177. ";
 preguntaids[58] = 1177


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[59]= "60)  El motor de JavaScript desarrollado en Java por Oracle, integrado con el JDK versi&oacute;n 8 se llama:";
 choices[59]= new Array();
 choices[59][0] = "Rhino.";
 choices[59][1] = "Nashorn.";
 choices[59][2] = "Bootstrap.";
 choices[59][3] = "Backbone JS.";
 answers[59] = 1;
 units[59] = ['74'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 767. AGE A2 2015";
 preguntaids[59] = 767


//  Id pregunta: 1761 Año de creación de pregunta: 2016
 questions[60]= "61)  Cu&aacute;l de las siguientes especificaciones de Internet y XML ha sido publicada en el seno del Consorcio OASIS:";
 choices[60]= new Array();
 choices[60][0] = "UBL (Universal Business Language)";
 choices[60][1] = "XHTML (eXtensible Hypertext Markup Language)";
 choices[60][2] = "OWL (Web Ontology Language)";
 choices[60][3] = "XPointer (XML Pointer Language)";
 answers[60] = 0;
 units[60] = ['74'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1761. ";
 preguntaids[60] = 1761


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique cu&aacute;l de los siguientes es un valor JSON v&aacute;lido:";
 choices[61]= new Array();
 choices[61][0] = "hola'";
 choices[61][1] = "null";
 choices[61][2] = "nombre : juan";
 choices[61][3] = "nombre : &quot;juan&quot;";
 answers[61] = 1;
 units[61] = ['74'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 770. AGE A2 2015";
 preguntaids[61] = 770


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[62]= "63)  En relaci&oacute;n a UTF-8, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[62]= new Array();
 choices[62][0] = "Siempre utiliza un solo byte (8 bits) para cada caracter UNICODE.";
 choices[62][1] = "S&oacute;lo puede representar los caracteres del idioma ingl&eacute;s.";
 choices[62][2] = "Una cadena de texto en UTF-8 siempre ocupa m&aacute;s que en ASCII.";
 choices[62][3] = "Un caracter puede estar representado por entre uno y cuatro bytes.";
 answers[62] = 3;
 units[62] = ['74'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 765. AGE A2 2015";
 preguntaids[62] = 765


//  Id pregunta: 3016 Año de creación de pregunta: 2002
 questions[63]= "64)  Respecto a los DTDs es falso que:";
 choices[63]= new Array();
 choices[63][0] = "est&aacute;n escritos en una sintaxis diferente de XML";
 choices[63][1] = "representan la &uacute;nica manera de definir un documento XML, y su ausencia implica que la definici&oacute;n del documento se saca del contexto";
 choices[63][2] = "no son obligatorios, y los documentos XML correctos pero sin DTD se denominan &quot;bien formados&quot;";
 choices[63][3] = "est&aacute;n muy extendidos y existen muchas herramientas y expertos en su utilizaci&oacute;n y desarrollo";
 answers[63] = 1;
 units[63] = ['74'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3016. ";
 preguntaids[63] = 3016


//  Id pregunta: 2948 Año de creación de pregunta: 2002
 questions[64]= "65)  La principal diferencia entre HTML y XML es que:";
 choices[64]= new Array();
 choices[64][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[64][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[64][2] = "XML es un subconjunto de HTML";
 choices[64][3] = "B y C son ciertas";
 answers[64] = 1;
 units[64] = ['74'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2948. ";
 preguntaids[64] = 2948


//  Id pregunta: 1814 Año de creación de pregunta: 2016
 questions[65]= "66)  La arquitectura de una Aplicaci&oacute;n Web H&iacute;brida (Mashup) est&aacute; compuesta por diferentes partes. Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de esas partes.";
 choices[65]= new Array();
 choices[65][0] = "Sitio web";
 choices[65][1] = "Interface de usuario";
 choices[65][2] = "Servidor de aplicaciones";
 choices[65][3] = "Proveedor de contenidos";
 answers[65] = 2;
 units[65] = ['74'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1814. ";
 preguntaids[65] = 1814


//  Id pregunta: 5319 Año de creación de pregunta: 2006
 questions[66]= "67)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[66]= new Array();
 choices[66][0] = "XML";
 choices[66][1] = "Xerces";
 choices[66][2] = "UDDI";
 choices[66][3] = "WSDL";
 answers[66] = 3;
 units[66] = ['74'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 5319. ";
 preguntaids[66] = 5319


//  Id pregunta: 5530 Año de creación de pregunta: 2007
 questions[67]= "68)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[67]= new Array();
 choices[67][0] = "&lt;table&gt;";
 choices[67][1] = "&lt;tr&gt;";
 choices[67][2] = "&lt;th&gt;";
 choices[67][3] = "&lt;td&gt;";
 answers[67] = 3;
 units[67] = ['74'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 5530. ";
 preguntaids[67] = 5530


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[68]= "69)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[68]= new Array();
 choices[68][0] = "Entradas (entities).";
 choices[68][1] = "Atributos (attribs).";
 choices[68][2] = "M&oacute;dulos (modules).";
 choices[68][3] = "Objetos (objects).";
 answers[68] = 0;
 units[68] = ['74'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 772. Junta de Extremadura A1 2015";
 preguntaids[68] = 772


//  Id pregunta: 1807 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;En qu&eacute; consiste el podcasting?";
 choices[69]= new Array();
 choices[69][0] = "Se trata de un formato XML para sindicar o compartir contenido en la web. Se utiliza para difundir informaci&oacute;n actualizada frecuentemente a usuarios que se han suscrito a la fuente de contenidos.";
 choices[69][1] = "Creaci&oacute;n de sitios web cuyas p&aacute;ginas pueden ser editadas por m&uacute;ltiples voluntarios a trav&eacute;s del navegador web. Los usuarios pueden crear, modificar o borrar un mismo texto que comparten.";
 choices[69][2] = "Comunidad cuyos v&iacute;nculos, interacciones y relaciones tienen lugar no en un espacio f&iacute;sico sino en un espacio virtual como Internet.";
 choices[69][3] = "Distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo, que puede incluir texto como subt&iacute;tulos y notas) mediante un sistema de redifusi&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 answers[69] = 3;
 units[69] = ['74'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1807. ";
 preguntaids[69] = 1807


//  Id pregunta: 2485 Año de creación de pregunta: 2004
 questions[70]= "71)  Un documento XML con DTD es:";
 choices[70]= new Array();
 choices[70][0] = "v&aacute;lido";
 choices[70][1] = "inv&aacute;lido";
 choices[70][2] = "bien formado";
 choices[70][3] = "conformado";
 answers[70] = 0;
 units[70] = ['74'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2485. Similar a examen TIC MAP A 2004";
 preguntaids[70] = 2485


//  Id pregunta: 1182 Año de creación de pregunta: 2016
 questions[71]= "72)  El lenguaje de consulta que nos proporciona los medios para extraer y manipular informaci&oacute;n en documentos o, de cualquier fuente de datos XML, y que utiliza expresiones XPath para acceder a determinadas partes del documento XML se denomina:";
 choices[71]= new Array();
 choices[71][0] = "X-Ask";
 choices[71][1] = "XInclude";
 choices[71][2] = "XLink";
 choices[71][3] = "XQuery";
 answers[71] = 3;
 units[71] = ['74'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1182. ";
 preguntaids[71] = 1182


//  Id pregunta: 4838 Año de creación de pregunta: 2002
 questions[72]= "73)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[72]= new Array();
 choices[72][0] = "Services Oriented Architecture Protocol";
 choices[72][1] = "Simple Object Access Protocol";
 choices[72][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[72][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[72] = 1;
 units[72] = ['74'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 4838. ";
 preguntaids[72] = 4838


//  Id pregunta: 2617 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[73]= new Array();
 choices[73][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[73][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[73][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[73][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[73] = 0;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2617. Es Wireless Markup Language";
 preguntaids[73] = 2617


//  Id pregunta: 6130 Año de creación de pregunta: 2003
 questions[74]= "75)  RDF (Resource Description Framework) es un:";
 choices[74]= new Array();
 choices[74][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la Web";
 choices[74][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos";
 choices[74][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles";
 choices[74][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n";
 answers[74] = 0;
 units[74] = ['74'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6130. Examen TIC A1 MAP 2007";
 preguntaids[74] = 6130


