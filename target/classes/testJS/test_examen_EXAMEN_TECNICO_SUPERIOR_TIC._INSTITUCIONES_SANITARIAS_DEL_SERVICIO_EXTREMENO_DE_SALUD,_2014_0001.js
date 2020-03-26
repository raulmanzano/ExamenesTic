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
//  Id pregunta: 10716 Año de creación de pregunta: 2015
 questions[0]= "1)  En un entorno de computaci&oacute;n Grid, &iquest;qu&eacute; nombre reciben las agrupaciones din&aacute;micas de diferentes organizaciones f&iacute;sicas o individuos que comparten recursos y colaboran con el fin de lograr un objetivo com&uacute;n?";
 choices[0]= new Array();
 choices[0][0] = "Virtual Organizations (VO).";
 choices[0][1] = "Grid Domain Resources (GDR)";
 choices[0][2] = "Domain Group Policy (DGP).";
 choices[0][3] = "Organization Resource Group (ORG)";
 answers[0] = 0;
 units[0] = ['49'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10716. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[0] = 10716


//  Id pregunta: 10717 Año de creación de pregunta: 2015
 questions[1]= "2)  Seleccione el fichero de Linux que contiene las direcciones de los servidores DNS necesarios para la navegaci&oacute;n por Internet.";
 choices[1]= new Array();
 choices[1][0] = "crontab";
 choices[1][1] = "interfaces";
 choices[1][2] = "resolv.conf";
 choices[1][3] = "dns.conf";
 answers[1] = 2;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10717. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[1] = 10717


//  Id pregunta: 9210 Año de creación de pregunta: 2014
 questions[2]= "3)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[2]= new Array();
 choices[2][0] = "Spoofing.";
 choices[2][1] = "Man in the middle.";
 choices[2][2] = "Denial of Service.";
 choices[2][3] = "Flooding.";
 answers[2] = 2;
 units[2] = ['119'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9210. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[2] = 9210


//  Id pregunta: 9292 Año de creación de pregunta: 2014
 questions[3]= "4)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[3]= new Array();
 choices[3][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[3][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[3][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[3][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[3] = 2;
 units[3] = ['72'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9292. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[3] = 9292


//  Id pregunta: 9294 Año de creación de pregunta: 2014
 questions[4]= "5)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[4]= new Array();
 choices[4][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[4][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[4][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[4][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[4] = 3;
 units[4] = ['63'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9294. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[4] = 9294


//  Id pregunta: 9296 Año de creación de pregunta: 2014
 questions[5]= "6)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[5]= new Array();
 choices[5][0] = "System Data Type (SDT)";
 choices[5][1] = "Common Type System (CTS)";
 choices[5][2] = "Common Data Integration (CDI)";
 choices[5][3] = "Data Type Core (DTC)";
 answers[5] = 1;
 units[5] = ['63'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9296. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[5] = 9296


//  Id pregunta: 9298 Año de creación de pregunta: 2014
 questions[6]= "7)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Data Warehouse.";
 choices[6][1] = "OLAP";
 choices[6][2] = "Data Mart.";
 choices[6][3] = "Data Mining.";
 answers[6] = 2;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9298. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[6] = 9298


//  Id pregunta: 9300 Año de creación de pregunta: 2014
 questions[7]= "8)  El Servicio de Representaci&oacute;n de Workflow (Workflow Enactment Service) seg&uacute;n la Workflow Management Coalition (WfMC) se encarga de:";
 choices[7]= new Array();
 choices[7][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos,secuencia de actividades, a&ntilde;adir elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[7][1] = "El modelado y dise&ntilde;o de los procesos, el cual puede ser interpretado en tiempo de ejecuci&oacute;n por el o los motores de Workflow.";
 choices[7][2] = "La definici&oacute;n de los mecanismos requeridos por los desarrolladores de productos Workflow para implementar la comunicaci&oacute;n de un motor Workflow con otros.";
 choices[7][3] = "La interacci&oacute;n entre los participantes del flujo de trabajo y el servicio de lanzamiento de flujo de trabajo";
 answers[7] = 0;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9300. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[7] = 9300


//  Id pregunta: 10719 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud?";
 choices[8]= new Array();
 choices[8][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[8][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[8][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[8][3] = "Todas las respuestas anteriores son ciertas.";
 answers[8] = 3;
 units[8] = ['52'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10719. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[8] = 10719


//  Id pregunta: 9302 Año de creación de pregunta: 2014
 questions[9]= "10)  En el &aacute;mbito de SAP ERP, los infotipos son:";
 choices[9]= new Array();
 choices[9][0] = "Objetos de C&aacute;lculo de n&oacute;mina y de Gesti&oacute;n de personal utilizados para distinguir entre importes monetarios.";
 choices[9][1] = "Unidades de tiempo que se utilizan de modos diferentes para calcular la remuneraci&oacute;n del empleado.";
 choices[9][2] = "Unidades de informaci&oacute;n en el sistema de Gesti&oacute;n de personal.";
 choices[9][3] = "T&eacute;cnicas provistas por SAP para el ingreso masivo de informaci&oacute;n";
 answers[9] = 2;
 units[9] = ['69'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9302. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[9] = 9302


//  Id pregunta: 9293 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes opciones NO es un operador espec&iacute;fico de un sistema o herramienta OLAP?";
 choices[10]= new Array();
 choices[10][0] = "DRILL";
 choices[10][1] = "POLL";
 choices[10][2] = "PIVOT";
 choices[10][3] = "SLICE &amp; DICE";
 answers[10] = 1;
 units[10] = ['72'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9293. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[10] = 9293


//  Id pregunta: 9299 Año de creación de pregunta: 2014
 questions[11]= "12)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[11]= new Array();
 choices[11][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[11][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[11][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[11][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[11] = 3;
 units[11] = ['72'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9299. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[11] = 9299


//  Id pregunta: 9301 Año de creación de pregunta: 2014
 questions[12]= "13)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[12]= new Array();
 choices[12][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[12][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[12][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[12][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[12] = 3;
 units[12] = ['72'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9301. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[12] = 9301


//  Id pregunta: 10718 Año de creación de pregunta: 2015
 questions[13]= "14)  Las distribuciones Debian o Ubuntu, entre otras, permiten instalar habitualmente nuevas utilidades a partir de ficheros .deb. Indique cu&aacute;l de las siguientes sentencias Linux es incorrecta:";
 choices[13]= new Array();
 choices[13][0] = "apt-update";
 choices[13][1] = "dpkg-reconfigure";
 choices[13][2] = "apt-cache search xorg";
 choices[13][3] = "dpkg";
 answers[13] = 0;
 units[13] = ['57'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10718. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[13] = 10718


//  Id pregunta: 9206 Año de creación de pregunta: 2014
 questions[14]= "15)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[14]= new Array();
 choices[14][0] = "Certificado de autenticaci&oacute;n";
 choices[14][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[14][2] = "Claves Diffie-Hellman.";
 choices[14][3] = "Certificados X-509 de componente.";
 answers[14] = 1;
 units[14] = ['119'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9206. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[14] = 9206


//  Id pregunta: 9291 Año de creación de pregunta: 2014
 questions[15]= "16)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[15]= new Array();
 choices[15][0] = "InProc";
 choices[15][1] = "StateServer";
 choices[15][2] = "ClusterServer";
 choices[15][3] = "SqlServer";
 answers[15] = 2;
 units[15] = ['63'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9291. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[15] = 9291


//  Id pregunta: 10715 Año de creación de pregunta: 2015
 questions[16]= "17)  La arquitectura de un sistema de Grid Computing est&aacute; formada por las siguientes capas o niveles.";
 choices[16]= new Array();
 choices[16][0] = "Persistence Layer, Data Layer, Logic Layer (Business Layer), Service Layer y Presentation Layer";
 choices[16][1] = "Fabric Layer, Connectivity Layer, Resource Layer, Collective Layer y Applications Layer.";
 choices[16][2] = "Provider Layer, Communicator Layer, Mediator Layer, Coordinator Layer y Presenter Layer.";
 choices[16][3] = "Transport Layer, Security Layer, Transaction Layer, Session Layer y Application Layer.";
 answers[16] = 1;
 units[16] = ['49'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10715. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[16] = 10715


//  Id pregunta: 9295 Año de creación de pregunta: 2014
 questions[17]= "18)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[17]= new Array();
 choices[17][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[17][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[17][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[17][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[17] = 3;
 units[17] = ['72'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9295. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[17] = 9295


//  Id pregunta: 9204 Año de creación de pregunta: 2014
 questions[18]= "19)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[18]= new Array();
 choices[18][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[18][1] = "Persona que accede a datos no autorizados.";
 choices[18][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[18][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[18] = 0;
 units[18] = ['119'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9204. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[18] = 9204


//  Id pregunta: 9303 Año de creación de pregunta: 2014
 questions[19]= "20)  En el &aacute;mbito de SAP ERP, un Centro de Coste o CeCo:";
 choices[19]= new Array();
 choices[19][0] = "Es la unidad organizativa, dentro de una sociedad CO, que representa un emplazamiento claramente delimitado donde se producen costes.";
 choices[19][1] = "Corresponde a una posici&oacute;n en el plan de cuentas relevante para el coste.";
 choices[19][2] = "Es el nivel jer&aacute;rquico m&aacute;s alto en el Sistema SAP.";
 choices[19][3] = "Es una lista de todas las cuentas de mayor utilizadas por una o varias sociedades.";
 answers[19] = 0;
 units[19] = ['69'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9303. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[19] = 9303


//  Id pregunta: 9205 Año de creación de pregunta: 2014
 questions[20]= "21)  Si el usuario A desea enviar un documento firmado digitalmente por &eacute;l al usuario B:";
 choices[20]= new Array();
 choices[20][0] = "El usuario A debe enviar el documento acompa&ntilde;ado del documento cifrado con la clave p&uacute;blica de B.";
 choices[20][1] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave p&uacute;blica de B.";
 choices[20][2] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave privada de A.";
 choices[20][3] = "El usuario A debe enviar el documento cifrado con la clave p&uacute;blica de B acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y todo cifrado con la clave privada de A.";
 answers[20] = 2;
 units[20] = ['119'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9205. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[20] = 9205


//  Id pregunta: 9297 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[21]= new Array();
 choices[21][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[21][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[21][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[21][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[21] = 3;
 units[21] = ['63'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9297. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[21] = 9297


