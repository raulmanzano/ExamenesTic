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
//  Id pregunta: 7534 Año de creación de pregunta: 2010
 questions[0]= "1)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[0]= new Array();
 choices[0][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios.";
 choices[0][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n.";
 choices[0][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows.";
 choices[0][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0.";
 answers[0] = 1;
 units[0] = ['63'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7534. Map 2005";
 preguntaids[0] = 7534


//  Id pregunta: 7999 Año de creación de pregunta: 2011
 questions[1]= "2)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[1]= new Array();
 choices[1][0] = "App_Data.";
 choices[1][1] = "Bin.";
 choices[1][2] = "App_WebReferences";
 choices[1][3] = "Compilation";
 answers[1] = 1;
 units[1] = ['63', '124'];
 blocks[1] = ['B2', 'B4'];
 comments[1] = "Id Pregunta: 7999. Examen TIC A2 2010";
 preguntaids[1] = 7999


//  Id pregunta: 7818 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes apartados NO es uno de los componentes base de la arquitectura .NET?";
 choices[2]= new Array();
 choices[2][0] = "Windows Forms.";
 choices[2][1] = "ASP.NET.";
 choices[2][2] = "ADO.NET.";
 choices[2][3] = "ACY.NET.";
 answers[2] = 3;
 units[2] = ['63'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7818. ";
 preguntaids[2] = 7818


//  Id pregunta: 10417 Año de creación de pregunta: 2015
 questions[3]= "4)  En el Framework de .NET, los servicios web:";
 choices[3]= new Array();
 choices[3][0] = "Se definen en ficheros de extensi&oacute;n .asmx incluyendo la directiva WebService.";
 choices[3][1] = "ASP.NET no se puede integrar f&aacute;cilmente con tecnolog&iacute;as como AJAX para construir aplicaciones RIA.";
 choices[3][2] = "Los servicios Web WCF pueden ser SOAP o REST, aunque no soportan un formato no XML como JSON.";
 choices[3][3] = "Los servicios WCF (Windows Communication Foundation) siempre se ejecutan directamente sobre TCP.";
 answers[3] = 0;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10417. ";
 preguntaids[3] = 10417


//  Id pregunta: 8322 Año de creación de pregunta: 2011
 questions[4]= "5)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[4]= new Array();
 choices[4][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[4][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[4][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[4][3] = "Todas las anteriores son falsas";
 answers[4] = 0;
 units[4] = ['63'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8322. Examen UPM A2 2011";
 preguntaids[4] = 8322


//  Id pregunta: 8168 Año de creación de pregunta: 2011
 questions[5]= "6)  Si queremos almacenar unas tablas de la base de datos y sus relaciones en memoria para operar con ellas, &iquest;cual de los siguientes objetos de .NET usar&iacute;a?";
 choices[5]= new Array();
 choices[5][0] = "DataTableRelation";
 choices[5][1] = "DataView";
 choices[5][2] = "DataTable";
 choices[5][3] = "DataSet";
 answers[5] = 3;
 units[5] = ['63'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8168. Examen TIC A2 2010 interna";
 preguntaids[5] = 8168


//  Id pregunta: 10419 Año de creación de pregunta: 2015
 questions[6]= "7)  En que capa del patr&oacute;n MVC es com&uacute;n el uso del patr&oacute;n DAO";
 choices[6]= new Array();
 choices[6][0] = "En el modelo.";
 choices[6][1] = "En el vista.";
 choices[6][2] = "En el controlador.";
 choices[6][3] = "No se usan simult&aacute;neamente.";
 answers[6] = 2;
 units[6] = ['63'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10419. ";
 preguntaids[6] = 10419


//  Id pregunta: 9828 Año de creación de pregunta: 2015
 questions[7]= "8)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[7]= new Array();
 choices[7][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[7][1] = "Sitio web din&aacute;mico.";
 choices[7][2] = "Una plataforma de e-learning.";
 choices[7][3] = "Todas las anteriores.";
 answers[7] = 3;
 units[7] = ['63'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9828. ";
 preguntaids[7] = 9828


//  Id pregunta: 7994 Año de creación de pregunta: 2011
 questions[8]= "9)  Dentro de los productos que engloba la plataforma .NET, las funciones de un servidor web las realiza:";
 choices[8]= new Array();
 choices[8][0] = "IIS (Internet Information Services)";
 choices[8][1] = "Apache";
 choices[8][2] = "Joomla";
 choices[8][3] = "Microsoft Web Server";
 answers[8] = 0;
 units[8] = ['63'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7994. Examen TIC A2 2010";
 preguntaids[8] = 7994


//  Id pregunta: 9042 Año de creación de pregunta: 2014
 questions[9]= "10)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[9]= new Array();
 choices[9][0] = "MSIL";
 choices[9][1] = "CIL";
 choices[9][2] = "CLS";
 choices[9][3] = "Bytecode";
 answers[9] = 1;
 units[9] = ['63'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9042. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";
 preguntaids[9] = 9042


//  Id pregunta: 9873 Año de creación de pregunta: 2015
 questions[10]= "11)  La licencia del framework .NET es:";
 choices[10]= new Array();
 choices[10][0] = "Propietaria";
 choices[10][1] = "Comercial";
 choices[10][2] = "Open Source (MIT)";
 choices[10][3] = "Mixta";
 answers[10] = 2;
 units[10] = ['63'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9873. MIT License desde 2014";
 preguntaids[10] = 9873


//  Id pregunta: 9307 Año de creación de pregunta: 2014
 questions[11]= "12)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[11]= new Array();
 choices[11][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir acceder a los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[11][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir acceder a los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[11][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[11][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[11] = 0;
 units[11] = ['63'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9307. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[11] = 9307


//  Id pregunta: 7998 Año de creación de pregunta: 2011
 questions[12]= "13)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[12]= new Array();
 choices[12][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[12][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[12][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[12][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[12] = 0;
 units[12] = ['63', '124'];
 blocks[12] = ['B2', 'B4'];
 comments[12] = "Id Pregunta: 7998. Examen TIC A2 2010";
 preguntaids[12] = 7998


//  Id pregunta: 10416 Año de creación de pregunta: 2015
 questions[13]= "14)  La tecnolog&iacute;a LINQ en el Framework .NET:";
 choices[13]= new Array();
 choices[13][0] = "Es el acr&oacute;nimo&nbsp;de Language Integrated Query.";
 choices[13][1] = "Permite realizar consultas a distintas fuentes de datos.";
 choices[13][2] = "No es compatible con ADO.NET Entity Framework.";
 choices[13][3] = "A) y B) son correctas.";
 answers[13] = 0;
 units[13] = ['63'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10416. ";
 preguntaids[13] = 10416


//  Id pregunta: 7814 Año de creación de pregunta: 2010
 questions[14]= "15)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[14]= new Array();
 choices[14][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden.";
 choices[14][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime.";
 choices[14][2] = ".NET Framework 4.6 ya est&aacute; disponible en la Web de Microsoft.";
 choices[14][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes.";
 answers[14] = 1;
 units[14] = ['63'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7814. ";
 preguntaids[14] = 7814


//  Id pregunta: 7542 Año de creación de pregunta: 2010
 questions[15]= "16)  En el entrono de desarrollo .NET, el t&eacute;rmino CLR se refiere a:";
 choices[15]= new Array();
 choices[15][0] = "Un entorno en tiempo de ejecuci&oacute;n que ejecuta el c&oacute;digo y proporciona servicios proporcionado por .NET framework.";
 choices[15][1] = "La biblioteca de clases del entorno .NET Framework.";
 choices[15][2] = "Un modelo de programaci&oacute;n para la creaci&oacute;n de aplicaciones Web.";
 choices[15][3] = "Un controlador para eventos de nivel de aplicaci&oacute;n.";
 answers[15] = 0;
 units[15] = ['63'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7542. Map 2005.  http://www.insht.es/InshtWeb/Contenidos/Normativa/GuiasTecnicas/Ficheros/pantallas.pdf";
 preguntaids[15] = 7542


//  Id pregunta: 10159 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[16]= new Array();
 choices[16][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[16][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[16][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[16][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[16] = 1;
 units[16] = ['63'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10159. Examen TIC A1 2014";
 preguntaids[16] = 10159


//  Id pregunta: 10418 Año de creación de pregunta: 2015
 questions[17]= "18)  En ADO.NET:";
 choices[17]= new Array();
 choices[17][0] = "Cualquier fuente de datos debe ser convertida a XML para ser accesible por Dataset";
 choices[17][1] = "DataReader proporciona un puente entre el objeto DataSet y el origen de datos.";
 choices[17][2] = "El DataSet contiene una colecci&oacute;n de uno o m&aacute;s objetos DataTable, formados por filas y columnas de datos pero sin incluir informaci&oacute;n de restricciones ni claves externas.";
 choices[17][3] = "ADO.NET Entity es un tipo de framework ORM.";
 answers[17] = 3;
 units[17] = ['63'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10418. ";
 preguntaids[17] = 10418


//  Id pregunta: 10415 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Cu&aacute;l es el nombre de la biblioteca de clases del Framework de .NET?";
 choices[18]= new Array();
 choices[18][0] = "FCL";
 choices[18][1] = "CLR";
 choices[18][2] = "CLS";
 choices[18][3] = "JIT";
 answers[18] = 0;
 units[18] = ['63'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10415. ";
 preguntaids[18] = 10415


//  Id pregunta: 7488 Año de creación de pregunta: 2010
 questions[19]= "20)  La palabra clave de Visual Basic.NET &laquo;overrides&raquo; se utiliza para:";
 choices[19]= new Array();
 choices[19][0] = "Heredar todos los miembros no privados de la clase espec&iacute;fica.";
 choices[19][1] = "Especificar qu&eacute; clase no se puede utilizar como clase b&aacute;sica.";
 choices[19][2] = "Indicar que el procedimiento anula un procedimiento de la clase b&aacute;sica.";
 choices[19][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase.";
 answers[19] = 2;
 units[19] = ['63'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7488. Map 2005";
 preguntaids[19] = 7488


//  Id pregunta: 9291 Año de creación de pregunta: 2014
 questions[20]= "21)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[20]= new Array();
 choices[20][0] = "InProc";
 choices[20][1] = "StateServer";
 choices[20][2] = "ClusterServer";
 choices[20][3] = "SqlServer";
 answers[20] = 2;
 units[20] = ['63'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9291. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[20] = 9291


//  Id pregunta: 10723 Año de creación de pregunta: 2015
 questions[21]= "22)  En .NET, la biblioteca de clases";
 choices[21]= new Array();
 choices[21][0] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio.";
 choices[21][1] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio y acceso a datos.";
 choices[21][2] = "Es &uacute;nica para todos los lenguajes de la plataforma.";
 choices[21][3] = "Todas las anteriores son falsas.";
 answers[21] = 2;
 units[21] = ['63'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10723. ";
 preguntaids[21] = 10723


//  Id pregunta: 8324 Año de creación de pregunta: 2011
 questions[22]= "23)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[22]= new Array();
 choices[22][0] = "&lt;% y %&gt;";
 choices[22][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[22][2] = "&lt;!- --&gt;";
 choices[22][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[22] = 0;
 units[22] = ['63'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8324. Examen UPM A2 2011";
 preguntaids[22] = 8324


//  Id pregunta: 9312 Año de creación de pregunta: 2014
 questions[23]= "24)  &iquest;Para qu&eacute; se usa el framework ASP.NET?";
 choices[23]= new Array();
 choices[23][0] = "Para construir aplicaciones y servicios Web";
 choices[23][1] = "Para conectar las aplicaciones a la base de datos";
 choices[23][2] = "Para construir la interface de usuario";
 choices[23][3] = "Para conectar los programas";
 answers[23] = 0;
 units[23] = ['63'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9312. Examen TIC A2 UPM 2010";
 preguntaids[23] = 9312


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


//  Id pregunta: 7996 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[25]= new Array();
 choices[25][0] = "Unity Application Block,";
 choices[25][1] = "Logging Application Block.";
 choices[25][2] = "Ajax Control Toolkit";
 choices[25][3] = "Cached XML Data Mapper";
 answers[25] = 0;
 units[25] = ['63', '124'];
 blocks[25] = ['B2', 'B4'];
 comments[25] = "Id Pregunta: 7996. Examen TIC A2 2010";
 preguntaids[25] = 7996


//  Id pregunta: 10856 Año de creación de pregunta: 2015
 questions[26]= "27)  POCO son las siglas de:";
 choices[26]= new Array();
 choices[26][0] = "Plain Old CLR Object";
 choices[26][1] = "Plain Old Class Object";
 choices[26][2] = "Plain Old COM Object";
 choices[26][3] = "Plain Old Connection Object";
 answers[26] = 0;
 units[26] = ['63'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 10856. ";
 preguntaids[26] = 10856


//  Id pregunta: 8163 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[27]= new Array();
 choices[27][0] = "Apache Tomcat";
 choices[27][1] = "JBOSS";
 choices[27][2] = "WebSphere Application Server";
 choices[27][3] = "Glassfish";
 answers[27] = 0;
 units[27] = ['63', '64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8163. Examen TIC A2 2010 interna";
 preguntaids[27] = 8163


//  Id pregunta: 8170 Año de creación de pregunta: 2011
 questions[28]= "29)  Indique cual de las siguientes definiciones se corresponde con Biztalk:";
 choices[28]= new Array();
 choices[28][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software";
 choices[28][1] = "Es una librer&iacute;a de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[28][2] = "Es un servidor web de NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[28][3] = "Es un componente que pertenece a! CLR de NET que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[28] = 0;
 units[28] = ['63'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8170. Examen TIC A2 2010 interna";
 preguntaids[28] = 8170


//  Id pregunta: 10724 Año de creación de pregunta: 2015
 questions[29]= "30)  Se&ntilde;ale la respuesta correcta relativa a la seguridad en la parte de interfaz de usuario.";
 choices[29]= new Array();
 choices[29][0] = "Con Windows forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en roles.";
 choices[29][1] = "Con Web forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en c&oacute;digo";
 choices[29][2] = "Con Web forms se tiene en cuenta la seguridad basada en roles y en c&oacute;digo.";
 choices[29][3] = "Todas las anteriores son falsas.";
 answers[29] = 3;
 units[29] = ['63'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10724. ";
 preguntaids[29] = 10724


//  Id pregunta: 9294 Año de creación de pregunta: 2014
 questions[30]= "31)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[30]= new Array();
 choices[30][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[30][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[30][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[30][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[30] = 3;
 units[30] = ['63'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9294. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[30] = 9294


//  Id pregunta: 9152 Año de creación de pregunta: 2014
 questions[31]= "32)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[31]= new Array();
 choices[31][0] = "Master";
 choices[31][1] = "MasterPage";
 choices[31][2] = "Master.Page";
 choices[31][3] = "Page";
 answers[31] = 0;
 units[31] = ['63'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9152. Examen TIC A2 2013";
 preguntaids[31] = 9152


//  Id pregunta: 10051 Año de creación de pregunta: 2015
 questions[32]= "33)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[32]= new Array();
 choices[32][0] = "Bajoo.";
 choices[32][1] = "Azure.";
 choices[32][2] = "Heroku.";
 choices[32][3] = "Adrive.";
 answers[32] = 1;
 units[32] = ['63'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 10051. Examen TIC A2 2014";
 preguntaids[32] = 10051


//  Id pregunta: 7615 Año de creación de pregunta: 2010
 questions[33]= "34)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[33]= new Array();
 choices[33][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &laquo;Permitir ordenaci&oacute;n&raquo; en el Generador de propiedades y generar una rutina de tratamiento del evento SortCommand.";
 choices[33][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculados por cada control en las plantillas del control DataList.";
 choices[33][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador de propiedades.";
 choices[33][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del control DataGrid.";
 answers[33] = 2;
 units[33] = ['63'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7615. Map 2006";
 preguntaids[33] = 7615


//  Id pregunta: 8167 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[34]= new Array();
 choices[34][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[34][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[34][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[34][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[34] = 2;
 units[34] = ['63'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8167. Examen TIC A2 2010 interna";
 preguntaids[34] = 8167


//  Id pregunta: 7508 Año de creación de pregunta: 2010
 questions[35]= "36)  El entorno Microsoft, WebDAV:";
 choices[35]= new Array();
 choices[35][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio.";
 choices[35][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e Intranets.";
 choices[35][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red.";
 choices[35][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos.";
 answers[35] = 1;
 units[35] = ['63'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7508. Map 2005";
 preguntaids[35] = 7508


//  Id pregunta: 8329 Año de creación de pregunta: 2011
 questions[36]= "37)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[36]= new Array();
 choices[36][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[36][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[36][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[36][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[36] = 0;
 units[36] = ['63'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8329. Examen UPM A2 2011";
 preguntaids[36] = 8329


//  Id pregunta: 8330 Año de creación de pregunta: 2011
 questions[37]= "38)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[37]= new Array();
 choices[37][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[37][1] = "S&oacute;lo es compatible con el servidor IIS (Internet Information Server)";
 choices[37][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[37][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[37] = 0;
 units[37] = ['63'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8330. Examen UPM A2 2011";
 preguntaids[37] = 8330


//  Id pregunta: 8990 Año de creación de pregunta: 2013
 questions[38]= "39)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[38]= new Array();
 choices[38][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[38][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[38][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[38][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[38] = 0;
 units[38] = ['63'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8990. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[38] = 8990


//  Id pregunta: 10722 Año de creación de pregunta: 2015
 questions[39]= "40)  Entre las ventajas de los ensamblados en .NET, en relaci&oacute;n a las distintas versiones de una aplicaci&oacute;n, se puede citar:";
 choices[39]= new Array();
 choices[39][0] = "No existe ninguna ventaja con respecto a las versiones previas";
 choices[39][1] = "Se facilitan utilidades para poder instalar y desinstalar del registro los ensamblados.";
 choices[39][2] = "El CRL proporciona en tiempo de ejecuci&oacute;n, informaci&oacute;n sobre las incompatibilidades entre las distintas versiones de los ensamblados.";
 choices[39][3] = "Ninguna de las anteriores es cierta.";
 answers[39] = 3;
 units[39] = ['63'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 10722. ";
 preguntaids[39] = 10722


//  Id pregunta: 9297 Año de creación de pregunta: 2014
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[40]= new Array();
 choices[40][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[40][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[40][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[40][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[40] = 3;
 units[40] = ['63'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9297. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[40] = 9297


//  Id pregunta: 9310 Año de creación de pregunta: 2014
 questions[41]= "42)  En el desarrollo de aplicaciones en .NET Framework disponemos de un Garbage Collector (recolector de basura). Indique cu&aacute;l de las siguientes afirmaciones es FALSA";
 choices[41]= new Array();
 choices[41][0] = "La liberaci&oacute;n de un objeto en memoria es perfectamente posible sin intervenci&oacute;n expl&iacute;cita por parte del usuario";
 choices[41][1] = "Para la liberaci&oacute;n expl&iacute;cita de memoria existen m&eacute;todos de finalizaci&oacute;n como Finalize() y Dispose()";
 choices[41][2] = "Se suele utilizar Dispose() cuando el objeto no se va a utilizar m&aacute;s definitivamente";
 choices[41][3] = "Si se invoca expl&iacute;citamente el m&eacute;todo Dispose() de un objeto, este ser&aacute; liberado inmediatamente";
 answers[41] = 3;
 units[41] = ['63'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9310. Examen TIC A2, Xunta de Galicia 2011";
 preguntaids[41] = 9310


//  Id pregunta: 9353 Año de creación de pregunta: 2014
 questions[42]= "43)  Elija la respuesta correcta:";
 choices[42]= new Array();
 choices[42][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[42][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[42][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[42][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[42] = 0;
 units[42] = ['63'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9353. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[42] = 9353


//  Id pregunta: 8993 Año de creación de pregunta: 2013
 questions[43]= "44)  En el desarrollo de aplicaciones en .NET Framework, &iquest;cu&aacute;l de los siguientes no es un componente del marco .NET Framework?";
 choices[43]= new Array();
 choices[43][0] = "El entorno de ejecuci&oacute;n de lenguaje com&uacute;n (CLR)";
 choices[43][1] = "La biblioteca de clases base (.NET Framework Base Classes)";
 choices[43][2] = "El lenguaje de definici&oacute;n de la interfaz (IDL)";
 choices[43][3] = "El motor de generaci&oacute;n de la interfaz de usuario";
 answers[43] = 2;
 units[43] = ['63'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8993. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[43] = 8993


//  Id pregunta: 10052 Año de creación de pregunta: 2015
 questions[44]= "45)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[44]= new Array();
 choices[44][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[44][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[44][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[44][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[44] = 3;
 units[44] = ['63'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10052. Examen TIC A2 2014";
 preguntaids[44] = 10052


//  Id pregunta: 9352 Año de creación de pregunta: 2014
 questions[45]= "46)  El Entity Framework es:";
 choices[45]= new Array();
 choices[45][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[45][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[45][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[45][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[45] = 0;
 units[45] = ['63'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9352. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[45] = 9352


//  Id pregunta: 9314 Año de creación de pregunta: 2014
 questions[46]= "47)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[46]= new Array();
 choices[46][0] = "&lt;% y %&gt;";
 choices[46][1] = "&lt;SCRIPT LANGUAGE=ASPScript&gt;&lt;/SCRIPT&gt;";
 choices[46][2] = "&lt;!-- --&gt;";
 choices[46][3] = "Los comandos ASP no se mezclan en el mismo archivo que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[46] = 0;
 units[46] = ['63'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9314. Examen TIC A2 UPM 2010";
 preguntaids[46] = 9314


//  Id pregunta: 9315 Año de creación de pregunta: 2014
 questions[47]= "48)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[47]= new Array();
 choices[47][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[47][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[47][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[47][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[47] = 1;
 units[47] = ['63'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9315. Examen Servicio Salud C&aacute;ntabro 2011";
 preguntaids[47] = 9315


//  Id pregunta: 10414 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de Microsoft .NET?";
 choices[48]= new Array();
 choices[48][0] = "Servicios: ASP.NET y WCF.";
 choices[48][1] = "Aplicaciones de escritorio: WinForms, WPF.";
 choices[48][2] = "Aplicaciones para dispositivos m&oacute;viles: Silverlait, WinFX.";
 choices[48][3] = "Aplicaciones en la nube: Azure.";
 answers[48] = 2;
 units[48] = ['63'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 10414. ";
 preguntaids[48] = 10414


//  Id pregunta: 9332 Año de creación de pregunta: 2014
 questions[49]= "50)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[49]= new Array();
 choices[49][0] = "permite trabajar desconectado del origen de datos.";
 choices[49][1] = "no se integra con XML.";
 choices[49][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[49][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[49] = 0;
 units[49] = ['63'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9332. ";
 preguntaids[49] = 9332


//  Id pregunta: 9313 Año de creación de pregunta: 2014
 questions[50]= "51)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[50]= new Array();
 choices[50][0] = "CLRUN";
 choices[50][1] = "CLRNET";
 choices[50][2] = "COLR";
 choices[50][3] = "CLR";
 answers[50] = 3;
 units[50] = ['63'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9313. Examen TIC A2 UPM 2010";
 preguntaids[50] = 9313


//  Id pregunta: 10176 Año de creación de pregunta: 2015
 questions[51]= "52)  LINQ (Language-Integrated Query) es:";
 choices[51]= new Array();
 choices[51][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[51][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[51][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[51][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[51] = 2;
 units[51] = ['63'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 10176. Examen TIC A1 2014";
 preguntaids[51] = 10176


//  Id pregunta: 9345 Año de creación de pregunta: 2014
 questions[52]= "53)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[52]= new Array();
 choices[52][0] = "xUnit";
 choices[52][1] = "xUnit.net";
 choices[52][2] = "NUnit";
 choices[52][3] = "csUnit";
 answers[52] = 0;
 units[52] = ['63'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9345. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[52] = 9345


//  Id pregunta: 10857 Año de creación de pregunta: 2015
 questions[53]= "54)  Con respecto a WCF, se&ntilde;ale la incorrecta:";
 choices[53]= new Array();
 choices[53][0] = "Los servicios WCF pueden ejecutarse sobre TCP.";
 choices[53][1] = "WCF son las siglas de Windows Communication Foundation.";
 choices[53][2] = "WCF usa siempre SOAP.";
 choices[53][3] = "Las tres anteriores son ciertas.";
 answers[53] = 2;
 units[53] = ['63'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10857. ";
 preguntaids[53] = 10857


//  Id pregunta: 8312 Año de creación de pregunta: 2011
 questions[54]= "55)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[54]= new Array();
 choices[54][0] = "Para construir aplicaciones y servicios Web";
 choices[54][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[54][2] = "Para construir la interface del usuario";
 choices[54][3] = "Para conectar los programas";
 answers[54] = 0;
 units[54] = ['63'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8312. Examen UPM A2 2011";
 preguntaids[54] = 8312


//  Id pregunta: 9117 Año de creación de pregunta: 2014
 questions[55]= "56)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[55]= new Array();
 choices[55][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[55][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[55][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[55][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[55] = 3;
 units[55] = ['63'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9117. Examen TIC A2 2013";
 preguntaids[55] = 9117


//  Id pregunta: 8313 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[56]= new Array();
 choices[56][0] = "CLRUN";
 choices[56][1] = "CLRNET";
 choices[56][2] = "COLR";
 choices[56][3] = "CLR";
 answers[56] = 3;
 units[56] = ['63'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8313. Examen UPM A2 2011";
 preguntaids[56] = 8313


//  Id pregunta: 10050 Año de creación de pregunta: 2015
 questions[57]= "58)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[57]= new Array();
 choices[57][0] = "EntityConnection.";
 choices[57][1] = "SqlConnection.";
 choices[57][2] = "SqlCeConnection.";
 choices[57][3] = "OleOdbcConnection.";
 answers[57] = 3;
 units[57] = ['63'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 10050. Examen TIC A2 2014";
 preguntaids[57] = 10050


//  Id pregunta: 9296 Año de creación de pregunta: 2014
 questions[58]= "59)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[58]= new Array();
 choices[58][0] = "System Data Type (SDT)";
 choices[58][1] = "Common Type System (CTS)";
 choices[58][2] = "Common Data Integration (CDI)";
 choices[58][3] = "Data Type Core (DTC)";
 answers[58] = 1;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9296. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[58] = 9296


//  Id pregunta: 7875 Año de creación de pregunta: 2011
 questions[59]= "60)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net:";
 choices[59]= new Array();
 choices[59][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos.";
 choices[59][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n.";
 choices[59][2] = "No dispone de clases para la gesti&oacute;n de la seguridad.";
 choices[59][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador.";
 answers[59] = 2;
 units[59] = ['63'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7875. Examen TIC A1 2010";
 preguntaids[59] = 7875


