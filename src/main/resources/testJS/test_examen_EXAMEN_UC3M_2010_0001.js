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
//  Id pregunta: 8347 Año de creación de pregunta: 2011
 questions[0]= "1)  En el modelo EFQM (European Foundation Quality Management) se identifican una serie de elementos que son la base para la Gesti&oacute;n de Calidad Total dentro de las organizaciones y que se agrupan en dos grandes bloques:";
 choices[0]= new Array();
 choices[0][0] = "Agentes y Acciones";
 choices[0][1] = "Agentes y Niveles de Satisfacci&oacute;n";
 choices[0][2] = "Agentes y Resultados";
 choices[0][3] = "Resultados y Acciones";
 answers[0] = 2;
 units[0] = ['98'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 8347. Examen UC3M 2010";
 preguntaids[0] = 8347


//  Id pregunta: 8350 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[1]= new Array();
 choices[1][0] = "IEEE";
 choices[1][1] = "ISO";
 choices[1][2] = "IEC";
 choices[1][3] = "ANSI";
 answers[1] = 3;
 units[1] = ['48'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 8350. Examen UC3M 2010";
 preguntaids[1] = 8350


//  Id pregunta: 8336 Año de creación de pregunta: 2011
 questions[2]= "3)  Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[2]= new Array();
 choices[2][0] = "Un algoritmo";
 choices[2][1] = "Un m&eacute;todo";
 choices[2][2] = "Un programa de ordenador";
 choices[2][3] = "Un procedimiento";
 answers[2] = 2;
 units[2] = ['41'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 8336. Examen UC3M 2010";
 preguntaids[2] = 8336


//  Id pregunta: 8339 Año de creación de pregunta: 2011
 questions[3]= "4)  En la arquitectura orientada a servicios, el est&aacute;ndar WSRP:";
 choices[3]= new Array();
 choices[3][0] = "Web Service for Remote Process, es utilizado para integrar servicios web con aplicaciones de las que necesiten datos para ejecutar su funcionalidad.";
 choices[3][1] = "Web Service for Remote Portlets, es utilizado para potenciar el uso de Servicios Web por la interfaz de aplicaci&oacute;n";
 choices[3][2] = "Web Service for Resource Planning, es utilizado para su integraci&oacute;n con los ERP de la organizaci&oacute;n";
 choices[3][3] = "Web Service for Redirect Processing, es utilizado para recoger cierta funcionalidad de otro Servicio Web necesaria para completar la suya";
 answers[3] = 1;
 units[3] = ['62'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8339. Examen UC3M 2010";
 preguntaids[3] = 8339


//  Id pregunta: 8351 Año de creación de pregunta: 2011
 questions[4]= "5)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.5 tenemos:";
 choices[4]= new Array();
 choices[4][0] = "P&aacute;ginas Asp y DLL";
 choices[4][1] = "Applet, Servlets, EJBs";
 choices[4][2] = "Javascript y p&aacute;ginas JSP";
 choices[4][3] = "Componentes COM";
 answers[4] = 1;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8351. Examen UC3M 2010";
 preguntaids[4] = 8351


//  Id pregunta: 8346 Año de creación de pregunta: 2011
 questions[5]= "6)  En los sistemas de colaboraci&oacute;n s&iacute;ncronos:";
 choices[5]= new Array();
 choices[5][0] = "No es posible utilizar la tecnolog&iacute;a multicast";
 choices[5][1] = "Todos est&aacute;n basados en interfaces WWW";
 choices[5][2] = "Se ampl&iacute;an las funcionalidades de los sistemas de videoconferencia cl&aacute;sicos.";
 choices[5][3] = "Su est&aacute;ndar viene definido por el W3C";
 answers[5] = 2;
 units[5] = ['122'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8346. Examen UC3M 2010";
 preguntaids[5] = 8346


//  Id pregunta: 8341 Año de creación de pregunta: 2011
 questions[6]= "7)  Se&ntilde;ale la respuesta correcta con relaci&oacute;n a lTIL (IT Infrastructure Library):";
 choices[6]= new Array();
 choices[6][0] = "La gesti&oacute;n de problemas busca solucionar lo m&aacute;s r&aacute;pido posible las incidencias y restablecer el servicio lo antes posible";
 choices[6][1] = "La gesti&oacute;n de la configuraci&oacute;n tiene como &uacute;nico objetivo el control del hardware inform&aacute;tico existente en la organizaci&oacute;n";
 choices[6][2] = "La gesti&oacute;n de versiones se encarga de controlar todas las versiones, tanto hardware como software, involucrados en el sistema de explotaci&oacute;n";
 choices[6][3] = "No es necesario analizar el impacto de la introducci&oacute;n de cambios en los sistemas inform&aacute;ticos, sino que se deben realizar lo m&aacute;s r&aacute;pido posible para evitar incidencias en los sistemas (gesti&oacute;n de cambios).";
 answers[6] = 2;
 units[6] = ['101'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 8341. Examen UC3M 2010";
 preguntaids[6] = 8341


//  Id pregunta: 8337 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Qu&eacute; tipo de filtro se emplea en im&aacute;genes digitales para detectar bordes?";
 choices[7]= new Array();
 choices[7][0] = "Filtro paso bajo";
 choices[7][1] = "Filtro paso alto";
 choices[7][2] = "Filtro de mediana";
 choices[7][3] = "Filtro de la moda";
 answers[7] = 1;
 units[7] = ['80'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8337. Examen UC3M 2010";
 preguntaids[7] = 8337


//  Id pregunta: 8340 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Qu&eacute; debe incluir el gobierno de las TIC?:";
 choices[8]= new Array();
 choices[8][0] = "Alineaci&oacute;n entre la estrategia de la organizaci&oacute;n y las TIC";
 choices[8][1] = "Gesti&oacute;n del riesgo";
 choices[8][2] = "Gesti&oacute;n de los recursos TIC y la utilizaci&oacute;n &oacute;ptima de los mismos";
 choices[8][3] = "Todas las respuestas son correctas.";
 answers[8] = 3;
 units[8] = ['101'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 8340. Examen UC3M 2010";
 preguntaids[8] = 8340


//  Id pregunta: 8349 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[9]= new Array();
 choices[9][0] = "EDGE";
 choices[9][1] = "HSDPA";
 choices[9][2] = "UMTS/3G";
 choices[9][3] = "GPRS";
 answers[9] = 1;
 units[9] = ['117'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8349. Examen UC3M 2010";
 preguntaids[9] = 8349


//  Id pregunta: 8342 Año de creación de pregunta: 2011
 questions[10]= "11)  Los conceptos de switch zoning y LUN masking en una red de almacenamiento FC (Fiber Channel)";
 choices[10]= new Array();
 choices[10][0] = "Permiten restringir la conectividad de red entre clientes FC, y gestionar su m&aacute;scara de red din&aacute;micamente";
 choices[10][1] = "Son utilizados en la administraci&oacute;n de rob&oacute;ticas LTO para copias de seguridad de los discos virtuales";
 choices[10][2] = "Permiten al administrador restringir la visibilidad entre clientes por puerto o WWN, as&iacute; como el acceso a un disco virtual";
 choices[10][3] = "Ambos conceptos son incompatibles en una red FC";
 answers[10] = 2;
 units[10] = ['53'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8342. Examen UC3M 2010";
 preguntaids[10] = 8342


//  Id pregunta: 8344 Año de creación de pregunta: 2011
 questions[11]= "12)  De acuerdo con el modelo de cuadro de mando (Balanced Scorecard) de Kaplan y Nolan, &iquest;cu&aacute;l de las siguientes respuestas ser&iacute;a la correcta?";
 choices[11]= new Array();
 choices[11][0] = "La implantaci&oacute;n de un cuadro de mando se debe realizar estableciendo objetivos que se deben trasladar a indicadores o medidas espec&iacute;ficas.";
 choices[11][1] = "El cuadro de mando permite a los gestores priorizar las expectativas de los clientes sobre la situaci&oacute;n financiera de la organizaci&oacute;n.";
 choices[11][2] = "El cuadro de mando permite a los gestores priorizar la situaci&oacute;n financiera de la organizaci&oacute;n sobre las expectativas de los clientes.";
 choices[11][3] = "El cuadro de mando se establece teniendo en cuenta cinco perspectivas distintas: clientes, accionistas, perspectiva interna de la organizaci&oacute;n, innovaci&oacute;n-aprendizaje y perspectiva financiera.";
 answers[11] = 0;
 units[11] = ['72'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8344. Examen UC3M 2010";
 preguntaids[11] = 8344


//  Id pregunta: 8338 Año de creación de pregunta: 2011
 questions[12]= "13)  Si hablamos de virtualizaci&oacute;n &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[12]= new Array();
 choices[12][0] = "La virtualizaci&oacute;n del sistema operativo ofrece un conjunto de librer&iacute;as que hace que las aplicaciones que se ejecutan aparenten que lo hacen en una m&aacute;quina dedicada";
 choices[12][1] = "La virtualizaci&oacute;n del sistema operativo es la mejor soluci&oacute;n para configuraciones heterog&eacute;neas";
 choices[12][2] = "La virtualizaci&oacute;n del sistema operativo hace que las aplicaciones funcionen siempre igual de r&aacute;pido que en el mismo sistema dedicado";
 choices[12][3] = "En emulaci&oacute;n hardware o VMM las aplicaciones no pueden migrarse entre m&aacute;quinas diferentes";
 answers[12] = 0;
 units[12] = ['124'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8338. Examen UC3M 2010";
 preguntaids[12] = 8338


//  Id pregunta: 8343 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Qu&eacute; est&aacute;ndar debe de cumplir un sistema de videoconferencia H.323 para poder compartir datos?";
 choices[13]= new Array();
 choices[13][0] = "H.239";
 choices[13][1] = "H.264";
 choices[13][2] = "H.263";
 choices[13][3] = "H.240";
 answers[13] = 0;
 units[13] = ['122'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8343. Examen UC3M 2010";
 preguntaids[13] = 8343


//  Id pregunta: 8348 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Con qu&eacute; campo de la inform&aacute;tica se relaciona SHA-2?";
 choices[14]= new Array();
 choices[14][0] = "Data Mining";
 choices[14][1] = "La Criptograf&iacute;a";
 choices[14][2] = "El e-learning";
 choices[14][3] = "La gesti&oacute;n de versiones";
 answers[14] = 1;
 units[14] = ['77'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8348. Examen UC3M 2010";
 preguntaids[14] = 8348


//  Id pregunta: 8345 Año de creación de pregunta: 2011
 questions[15]= "16)  Se entiende por SSO";
 choices[15]= new Array();
 choices[15][0] = "Un procedimiento de autenticaci&oacute;n que permite acceder a diversos recursos inform&aacute;ticos utilizando una &uacute;nica identificaci&oacute;n";
 choices[15][1] = "Un sistema basado el claves SSL para la gesti&oacute;n remota de claves sim&eacute;tricas";
 choices[15][2] = "Un sistema de gesti&oacute;n y almacenamiento de claves fraccionadas con coherencia asim&eacute;trica";
 choices[15][3] = "Un procedimiento de comunicaciones seguras entre objetos basado en sockets";
 answers[15] = 0;
 units[15] = ['123'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8345. Examen UC3M 2010";
 preguntaids[15] = 8345


