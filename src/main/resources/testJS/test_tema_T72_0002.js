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
//  Id pregunta: 6586 Año de creación de pregunta: 2009
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un tipo de modelo de datos multidimensional?";
 choices[0]= new Array();
 choices[0][0] = "HOLAP.";
 choices[0][1] = "DOLAP.";
 choices[0][2] = "MOLAP.";
 choices[0][3] = "ROLAP.";
 answers[0] = 1;
 units[0] = ['72'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6586. ";
 preguntaids[0] = 6586


//  Id pregunta: 7079 Año de creación de pregunta: 2010
 questions[1]= "2)  Para poder realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n es conveniente:";
 choices[1]= new Array();
 choices[1][0] = "Haber definido en el dise&ntilde;o multidimensional jerarqu&iacute;as.";
 choices[1][1] = "No se pueden realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n.";
 choices[1][2] = "Que se disponga del operador GENERALIZATION en el gestor.";
 choices[1][3] = "Si no se dispone del operador de GENERATE no se pueden realizar este tipo de consultas.";
 answers[1] = 0;
 units[1] = ['72'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 7079. ";
 preguntaids[1] = 7079


//  Id pregunta: 8452 Año de creación de pregunta: 2011
 questions[2]= "3)  En los Esquemas de copo de nieve:";
 choices[2]= new Array();
 choices[2][0] = "Existe redundancia.";
 choices[2][1] = "No se ahorra espacio.";
 choices[2][2] = "No existe una tabla de hechos central.";
 choices[2][3] = "Las tablas est&aacute;n normalizadas.";
 answers[2] = 3;
 units[2] = ['72'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8452. ";
 preguntaids[2] = 8452


//  Id pregunta: 9293 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes opciones NO es un operador espec&iacute;fico de un sistema o herramienta OLAP?";
 choices[3]= new Array();
 choices[3][0] = "DRILL";
 choices[3][1] = "POLL";
 choices[3][2] = "PIVOT";
 choices[3][3] = "SLICE &amp; DICE";
 answers[3] = 1;
 units[3] = ['72'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9293. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[3] = 9293


//  Id pregunta: 8039 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[4]= new Array();
 choices[4][0] = "Las redes neuronales.";
 choices[4][1] = "Look and Find.";
 choices[4][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[4][3] = "Las redes bayesianas.";
 answers[4] = 1;
 units[4] = ['68', '72'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8039. Examen TIC A2 2010";
 preguntaids[4] = 8039


//  Id pregunta: 8174 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[5]= new Array();
 choices[5][0] = "SOLAP.";
 choices[5][1] = "DOLAP.";
 choices[5][2] = "WOLAP.";
 choices[5][3] = "RTOLAP.";
 answers[5] = 2;
 units[5] = ['72'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8174. Examen TIC A2 2010 interna";
 preguntaids[5] = 8174


//  Id pregunta: 5908 Año de creación de pregunta: 2007
 questions[6]= "7)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3) de Quinlan:";
 choices[6]= new Array();
 choices[6][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basadosen la entrop&iacute;a";
 choices[6][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizandomecanismos de inducci&oacute;n";
 choices[6][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizandoaprendizaje no supervisado";
 choices[6][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas einclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[6] = 1;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 5908. ";
 preguntaids[6] = 5908


//  Id pregunta: 5448 Año de creación de pregunta: 2007
 questions[7]= "8)  En miner&iacute;a de datos, un Esquema Estrella:";
 choices[7]= new Array();
 choices[7][0] = "No tiene en cuenta elementos temporales tales como la fecha asociada a la informaci&oacute;n.";
 choices[7][1] = "Es una forma de representar la arquitectura f&iacute;sica del sistema OLAP.";
 choices[7][2] = "Es una t&eacute;cnica de dise&ntilde;o de bases de datos relacionales que sirve para simular el funcionamiento de bases de datos multidimensionales.";
 choices[7][3] = "Representa la centralizaci&oacute;n de la informaci&oacute;n en un solo SGBD para posibilitar su explotaci&oacute;n ndimensional.";
 answers[7] = 2;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 5448. ";
 preguntaids[7] = 5448


//  Id pregunta: 6413 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[8]= new Array();
 choices[8][0] = "Utilizan t&eacute;cnicas multidimensionales para la extracci&oacute;n y el an&aacute;lisis de los datos.";
 choices[8][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[8][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[8][3] = "Est&aacute;n pensados para el an&aacute;lisis y actualizaci&oacute;n de los datos de forma r&aacute;pida y jerarquizada.";
 answers[8] = 3;
 units[8] = ['72'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6413. ";
 preguntaids[8] = 6413


//  Id pregunta: 5626 Año de creación de pregunta: 2007
 questions[9]= "10)  Indique cu&aacute;l de las siguientes afirmaciones sobre una base de datos OLAP es cierta:";
 choices[9]= new Array();
 choices[9][0] = "Cada datamart podr&aacute; tener unas medidas y dimensiones propias y diferentes a los dem&aacute;s.";
 choices[9][1] = "Todos los datamart deber&aacute;n tener las mismas medidas y dimensiones.";
 choices[9][2] = "Los datamart no tienen dimensiones.";
 choices[9][3] = "La dimensi&oacute;n de los datamart debe ser &uacute;nica, aunque las medidas pueden variar de unos datamart a otros.";
 answers[9] = 0;
 units[9] = ['72'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 5626. ";
 preguntaids[9] = 5626


//  Id pregunta: 7074 Año de creación de pregunta: 2010
 questions[10]= "11)  Si los datos contienen valores 'NULL' (valores desconocidos) antes de realizar una consulta de data mining:";
 choices[10]= new Array();
 choices[10][0] = "Debo eliminarlos.";
 choices[10][1] = "S&oacute;lo se eliminan si son pocos. Si son muchos se utiliza alguna t&eacute;cnica para predecir el valor de esos nulos y trabajar con las aproximaciones obtenidas.";
 choices[10][2] = "En la fase de preproceso se les asignar&aacute; un valor por defecto.";
 choices[10][3] = "Se asigna el valor de la media multiplicado por 2.";
 answers[10] = 1;
 units[10] = ['72'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7074. ";
 preguntaids[10] = 7074


//  Id pregunta: 7371 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un Data Mart?";
 choices[11]= new Array();
 choices[11][0] = "Especializado en el almacenamiento de los datos de un &aacute;rea de negocio espec&iacute;fica.";
 choices[11][1] = "Debe ser alimentado siempre desde un Data Warehouse.";
 choices[11][2] = "En los Data Mart OLAP la estructura para el an&aacute;lisis de su informaci&oacute;n se basa en los cubos OLAP.";
 choices[11][3] = "En los Data Mart OLTP la estructura para el an&aacute;lisis de su informaci&oacute;n est&aacute; montada sobre una base de datos OLTP, como en el Data Warehouse.";
 answers[11] = 1;
 units[11] = ['72'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7371. Examen TIC B 2009";
 preguntaids[11] = 7371


//  Id pregunta: 7428 Año de creación de pregunta: 2010
 questions[12]= "13)  Indique cu&aacute;l de los siguientes es SW libre para miner&iacute;a de datos:";
 choices[12]= new Array();
 choices[12][0] = "SAS";
 choices[12][1] = "Clementine";
 choices[12][2] = "Weka";
 choices[12][3] = "SPSS";
 answers[12] = 2;
 units[12] = ['72'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 7428. ";
 preguntaids[12] = 7428


//  Id pregunta: 9009 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;C&uacute;al es un m&eacute;todo aceptado de desnormalizaci&oacute;n de bases de datos?";
 choices[13]= new Array();
 choices[13][0] = "Vistas materializadas.";
 choices[13][1] = "Esquemas de copo de nieve.";
 choices[13][2] = "Cubos OLAP.";
 choices[13][3] = "Todos los anteriores.";
 answers[13] = 3;
 units[13] = ['72'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9009. ";
 preguntaids[13] = 9009


//  Id pregunta: 5523 Año de creación de pregunta: 2007
 questions[14]= "15)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[14]= new Array();
 choices[14][0] = "Homogeneidad de datos almacenados.";
 choices[14][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[14][2] = "Total organizaci&oacute;n.";
 choices[14][3] = "Facilidad para responder a consultas complejas.";
 answers[14] = 1;
 units[14] = ['72'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 5523. ";
 preguntaids[14] = 5523


//  Id pregunta: 7078 Año de creación de pregunta: 2010
 questions[15]= "16)  Indique la respuesta correcta:";
 choices[15]= new Array();
 choices[15][0] = "Las consultas de OLAP sin ser consultas de data mining permiten la realizaci&oacute;n de informes para soporte a la toma de decisiones.";
 choices[15][1] = "Todas las consultas de OLAP son tambi&eacute;n consultas de data mining.";
 choices[15][2] = "Las consultas de OLAP s&oacute;lo pueden realizarse si se ha implementado un hipercubo.";
 choices[15][3] = "Todas las respuestas son ciertas.";
 answers[15] = 0;
 units[15] = ['72'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7078. ";
 preguntaids[15] = 7078


//  Id pregunta: 7372 Año de creación de pregunta: 2010
 questions[16]= "17)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[16]= new Array();
 choices[16][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[16][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[16][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[16][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[16] = 2;
 units[16] = ['72'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7372. Examen TIC B 2009";
 preguntaids[16] = 7372


//  Id pregunta: 9079 Año de creación de pregunta: 2014
 questions[17]= "18)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[17][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[17][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[17][3] = "A es falsa.";
 answers[17] = 0;
 units[17] = ['72'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9079. ";
 preguntaids[17] = 9079


//  Id pregunta: 6896 Año de creación de pregunta: 2010
 questions[18]= "19)  La creaci&oacute;n de una vista l&oacute;gica unificada de los datos, a&uacute;n cuando &eacute;stos est&eacute;n dispersos entre varias bases de datos f&iacute;sicas, para as&iacute; disponer de un &uacute;nico modelo de trabajo de los datos de la organizaci&oacute;n, es una manera de definir:";
 choices[18]= new Array();
 choices[18][0] = "Un almac&eacute;n de datos.";
 choices[18][1] = "Un sistema OLAP.";
 choices[18][2] = "Un sistema de informaci&oacute;n a la direcci&oacute;n.";
 choices[18][3] = "Una base de datos.";
 answers[18] = 0;
 units[18] = ['72'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6896. TIC A 2009";
 preguntaids[18] = 6896


//  Id pregunta: 9078 Año de creación de pregunta: 2014
 questions[19]= "20)  Un Datamart:";
 choices[19]= new Array();
 choices[19][0] = "Es una Base de Datos.";
 choices[19][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[19][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[19][3] = "Todas son falsas.";
 answers[19] = 2;
 units[19] = ['72'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9078. ";
 preguntaids[19] = 9078


//  Id pregunta: 5675 Año de creación de pregunta: 2007
 questions[20]= "21)  En relaci&oacute;n con los entornos OLAP, indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[20]= new Array();
 choices[20][0] = "Los sistemas MOLAP son capaces de almacenar mas informaci&oacute;n que los ROLAP.";
 choices[20][1] = "Los sistemas ROLAP son multidimensionales.";
 choices[20][2] = "Los sistemas ROLAP son capaces de almacenar m&aacute;s informaci&oacute;n que los MOLAP.";
 choices[20][3] = "Los sistemas MOLAP son relacionales.";
 answers[20] = 2;
 units[20] = ['72'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5675. ";
 preguntaids[20] = 5675


//  Id pregunta: 7797 Año de creación de pregunta: 2010
 questions[21]= "22)  Un Data Warehouse es:";
 choices[21]= new Array();
 choices[21][0] = "Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[21][1] = "Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[21][2] = "Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[21][3] = "Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[21] = 3;
 units[21] = ['72'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7797. ";
 preguntaids[21] = 7797


//  Id pregunta: 7075 Año de creación de pregunta: 2010
 questions[22]= "23)  A la hora de aplicar m&eacute;todos de data mining:";
 choices[22]= new Array();
 choices[22][0] = "Lo &uacute;nico importante es que se disponga de muchos datos.";
 choices[22][1] = "Debe disponerse de muchos datos residentes en una base de datos relacional.";
 choices[22][2] = "Lo m&aacute;s importante es disponer de una buena herramienta comercial.";
 choices[22][3] = "Los datos deben haber sido preprocesados.";
 answers[22] = 3;
 units[22] = ['72'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7075. ";
 preguntaids[22] = 7075


//  Id pregunta: 8007 Año de creación de pregunta: 2011
 questions[23]= "24)  Entre las t&eacute;cnicas m&aacute;s com&uacute;nmente usadas en Datamining, &iquest;cu&aacute;l de las siguientes clasifica cada registro en un conjunto de datos basado en una combinaci&oacute;n de las clases de los k registros m&aacute;s similares a &eacute;l en un conjunto de datos hist&oacute;ricos (donde k &gt;=1)?";
 choices[23]= new Array();
 choices[23][0] = "Redes neuronales artificiales.";
 choices[23][1] = "&Aacute;rboles de decisi&oacute;n.";
 choices[23][2] = "M&eacute;todo del vecino m&aacute;s cercano.";
 choices[23][3] = "Regla de Inducci&oacute;n.";
 answers[23] = 2;
 units[23] = ['72'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8007. Examen TIC A2 2010";
 preguntaids[23] = 8007


//  Id pregunta: 8422 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[24]= new Array();
 choices[24][0] = "Drill-Across.";
 choices[24][1] = "Drill-In.";
 choices[24][2] = "Roll-Up.";
 choices[24][3] = "Rotaci&oacute;n.";
 answers[24] = 2;
 units[24] = ['72'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8422. Operador Ayto. Madrid 2010";
 preguntaids[24] = 8422


//  Id pregunta: 6414 Año de creación de pregunta: 2003
 questions[25]= "26)  &iquest;Cu&aacute;l es una de las diferencias entre ROLAP y MOLAP?";
 choices[25]= new Array();
 choices[25][0] = "El grado de interactividad.";
 choices[25][1] = "El preprocesado de los datos desde las bases de datos relacionales a la base de datos multidimensional.";
 choices[25][2] = "El soporte de sistemas para la toma de decisiones.";
 choices[25][3] = "La presentaci&oacute;n de vistas de los datos sobre un n&uacute;mero de dimensiones.";
 answers[25] = 1;
 units[25] = ['72'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6414. ";
 preguntaids[25] = 6414


//  Id pregunta: 3452 Año de creación de pregunta: 2006
 questions[26]= "27)  ESTROFA:";
 choices[26]= new Array();
 choices[26][0] = "Especificaciones para el tratamiento de flujos automatizados";
 choices[26][1] = "Elaboradas por la COAXI hoy Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[26][2] = "Elaboradas con el fin de homogeneizar terminolog&iacute;a y asesorar a los compradores p&uacute;blicos a la hora de la adquisici&oacute;n de productos de Data Warehouse";
 choices[26][3] = "Todos los anteriores";
 answers[26] = 0;
 units[26] = ['72'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3452. ";
 preguntaids[26] = 3452


//  Id pregunta: 9127 Año de creación de pregunta: 2014
 questions[27]= "28)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;A qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[27]= new Array();
 choices[27][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[27][1] = "Algoritmos de regresi&oacute;n.";
 choices[27][2] = "Algoritmos de segmentaci&oacute;n.";
 choices[27][3] = "Algoritmos de asociaci&oacute;n.";
 answers[27] = 0;
 units[27] = ['72'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9127. Examen TIC A2 2013";
 preguntaids[27] = 9127


//  Id pregunta: 8177 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes NO es un servidor OLAP?";
 choices[28]= new Array();
 choices[28][0] = "Microstrategy OLAP Services.";
 choices[28][1] = "MDX OLAP server.";
 choices[28][2] = "Oracle Database OLAP.";
 choices[28][3] = "Mondrian OLAP Server.";
 answers[28] = 1;
 units[28] = ['72'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8177. Examen TIC A2 2010 interna";
 preguntaids[28] = 8177


//  Id pregunta: 6993 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas acerca de OLAP es correcta?";
 choices[29]= new Array();
 choices[29][0] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo UPDATE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo DELETE.";
 choices[29][1] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo SELECT, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo INSERT, UPDATE, DELETE.";
 choices[29][2] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo UPDATE.";
 choices[29][3] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo SELECT, INSERT y UPDATE.";
 answers[29] = 1;
 units[29] = ['72'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6993. TIC-B 2009 bloque desarrollo";
 preguntaids[29] = 6993


//  Id pregunta: 9081 Año de creación de pregunta: 2014
 questions[30]= "31)  Un problema del modelo dimensional es:";
 choices[30]= new Array();
 choices[30][0] = "Data Expression.";
 choices[30][1] = "Data Complexity.";
 choices[30][2] = "Data Sparsity.";
 choices[30][3] = "Data Compression.";
 answers[30] = 2;
 units[30] = ['72'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9081. ";
 preguntaids[30] = 9081


//  Id pregunta: 9292 Año de creación de pregunta: 2014
 questions[31]= "32)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[31]= new Array();
 choices[31][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[31][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[31][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[31][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[31] = 2;
 units[31] = ['72'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9292. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[31] = 9292


//  Id pregunta: 6109 Año de creación de pregunta: 2003
 questions[32]= "33)  Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP,etc. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[32]= new Array();
 choices[32][0] = "En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[32][1] = "Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[32][2] = "Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[32][3] = "En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[32] = 3;
 units[32] = ['72'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 6109. Examen TIC A1 MAP 2007";
 preguntaids[32] = 6109


//  Id pregunta: 6008 Año de creación de pregunta: 2003
 questions[33]= "34)  Los algoritmos &ldquo;no supervisados&rdquo; en Miner&iacute;a de Datos:";
 choices[33]= new Array();
 choices[33][0] = "Se llaman tambi&eacute;n 'predictivos'.";
 choices[33][1] = "Utilizan la t&eacute;cnica de '&aacute;rboles de decisi&oacute;n'.";
 choices[33][2] = "Sirven para descubrir patrones y tendencias en los datos actuales.";
 choices[33][3] = "Predicen el valor de un atributo de un conjunto de datos, conocidos otros atributos.";
 answers[33] = 2;
 units[33] = ['72'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 6008. TIC B 2007";
 preguntaids[33] = 6008


//  Id pregunta: 7071 Año de creación de pregunta: 2010
 questions[34]= "35)  Una actualizaci&oacute;n de los datos del Data Warehouse consistir&aacute; b&aacute;sicamente en:";
 choices[34]= new Array();
 choices[34][0] = "Modificar los valores de ciertos registros (tuplas de las relaciones subyacentes).";
 choices[34][1] = "Borrar los registros de tasa de utilizaci&oacute;n baja.";
 choices[34][2] = "Inserci&oacute;n de nuevos datos (que eventualmente diferir&aacute;n de otros ya existentes s&oacute;lo en la marca temporal).";
 choices[34][3] = "Un Data Warehouse no se actualiza pues contiene s&oacute;lo datos hist&oacute;ricos.";
 answers[34] = 2;
 units[34] = ['72'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7071. ";
 preguntaids[34] = 7071


//  Id pregunta: 7664 Año de creación de pregunta: 2010
 questions[35]= "36)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (&laquo;Datawarehouses&raquo;):";
 choices[35]= new Array();
 choices[35][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[35][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[35][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[35][3] = "Son colecciones de datos.";
 answers[35] = 1;
 units[35] = ['72'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7664. Map 2007";
 preguntaids[35] = 7664


//  Id pregunta: 8009 Año de creación de pregunta: 2011
 questions[36]= "37)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[36]= new Array();
 choices[36][0] = "Predicci&oacute;n.";
 choices[36][1] = "Categorizaci&oacute;n.";
 choices[36][2] = "Clustering.";
 choices[36][3] = "Estad&iacute;sticas.";
 answers[36] = 2;
 units[36] = ['72'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8009. Examen TIC A2 2010";
 preguntaids[36] = 8009


//  Id pregunta: 7077 Año de creación de pregunta: 2010
 questions[37]= "38)  En un data warehouse:";
 choices[37]= new Array();
 choices[37][0] = "Jam&aacute;s se debe normalizar ninguna tabla.";
 choices[37][1] = "Es normal que algunas tablas de dimensi&oacute;n se desnormalicen buscando mayor eficiencia.";
 choices[37][2] = "Las tablas se mantienen en la m&aacute;xima forma normal para no perder consistencia dado el alto n&uacute;mero de operaciones de modificaci&oacute;n que se realizan.";
 choices[37][3] = "Todas las respuestas son falsas.";
 answers[37] = 1;
 units[37] = ['72'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7077. ";
 preguntaids[37] = 7077


//  Id pregunta: 6070 Año de creación de pregunta: 2003
 questions[38]= "39)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (Datawarehouses):";
 choices[38]= new Array();
 choices[38][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[38][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[38][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[38][3] = "Son colecciones de datos.";
 answers[38] = 1;
 units[38] = ['72'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6070. Examen TIC A1 MAP 2007";
 preguntaids[38] = 6070


//  Id pregunta: 7697 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[39]= new Array();
 choices[39][0] = "Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[39][1] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[39][2] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[39][3] = "Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[39] = 1;
 units[39] = ['72'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7697. Map 2007";
 preguntaids[39] = 7697


//  Id pregunta: 8089 Año de creación de pregunta: 2011
 questions[40]= "41)  &iquest;Cu&aacute;l de estos benchmarks se emplea para medir la capacidad de OLTP para una determinada configuraci&oacute;n hardware y software?";
 choices[40]= new Array();
 choices[40][0] = "TPC-C.";
 choices[40][1] = "TPC-R.";
 choices[40][2] = "TPC-H.";
 choices[40][3] = "TPC-A.";
 answers[40] = 0;
 units[40] = ['72'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8089. Analista Ayto. Madrid 2010";
 preguntaids[40] = 8089


//  Id pregunta: 5774 Año de creación de pregunta: 2007
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un m&eacute;todo de almacenamiento OLAP.";
 choices[41]= new Array();
 choices[41][0] = "MOLAP.";
 choices[41][1] = "ROLAP.";
 choices[41][2] = "HOLAP.";
 choices[41][3] = "ZOLAP.";
 answers[41] = 3;
 units[41] = ['72'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5774. ";
 preguntaids[41] = 5774


//  Id pregunta: 5676 Año de creación de pregunta: 2007
 questions[42]= "43)  Una herramienta inform&aacute;tica especialmente dise&ntilde;ada para ayudar a los usuarios a trabajar en colaboraci&oacute;n de la forma mas eficaz es";
 choices[42]= new Array();
 choices[42][0] = "Un Data-Warehouse";
 choices[42][1] = "Un Workflow";
 choices[42][2] = "Un Groupware";
 choices[42][3] = "Un OLAP";
 answers[42] = 2;
 units[42] = ['72'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 5676. ";
 preguntaids[42] = 5676


//  Id pregunta: 9080 Año de creación de pregunta: 2014
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[43]= new Array();
 choices[43][0] = "Modelo en estrella.";
 choices[43][1] = "Modelo Copo de nieve.";
 choices[43][2] = "Constelaciones.";
 choices[43][3] = "Todos son modelos dimensionales.";
 answers[43] = 3;
 units[43] = ['72'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9080. ";
 preguntaids[43] = 9080


//  Id pregunta: 5525 Año de creación de pregunta: 2007
 questions[44]= "45)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[44]= new Array();
 choices[44][0] = "De validaci&oacute;n.";
 choices[44][1] = "De verificaci&oacute;n.";
 choices[44][2] = "De descubrimiento.";
 choices[44][3] = "Predictivo.";
 answers[44] = 2;
 units[44] = ['72'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 5525. ";
 preguntaids[44] = 5525


//  Id pregunta: 9077 Año de creación de pregunta: 2014
 questions[45]= "46)  Un almac&eacute;n de datos almacena:";
 choices[45]= new Array();
 choices[45][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[45][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[45][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[45][3] = "B y C son correctas.";
 answers[45] = 3;
 units[45] = ['72'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9077. ";
 preguntaids[45] = 9077


//  Id pregunta: 7174 Año de creación de pregunta: 2010
 questions[46]= "47)  Comparando las dos arquitecturas diferentes para los sistemas OLAP: relacional y multidimensional es cierto que:";
 choices[46]= new Array();
 choices[46][0] = "Los sistemas multidimensionales delegan la informaci&oacute;n entre tiempo de respuesta y el proceso batch al dise&ntilde;o del sistema.";
 choices[46][1] = "Los sistemas multidimensionales generalmente son adecuados para diez o menos dimensiones.";
 choices[46][2] = "Los sistemas multidimensionales soportan an&aacute;lisis OLAP contra grandes vol&uacute;menes de datos elementales.";
 choices[46][3] = "Los sistemas multidimensionales pueden crecer hasta un gran n&uacute;mero de dimensiones.";
 answers[46] = 1;
 units[46] = ['72'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7174. Castilla La Mancha 2009";
 preguntaids[46] = 7174


//  Id pregunta: 7370 Año de creación de pregunta: 2010
 questions[47]= "48)  Los sistemas OLTP se utilizan para:";
 choices[47]= new Array();
 choices[47][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[47][1] = "Generar informes para la direcci&oacute;n.";
 choices[47][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[47][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[47] = 2;
 units[47] = ['72'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 7370. Examen TIC B 2009";
 preguntaids[47] = 7370


//  Id pregunta: 9128 Año de creación de pregunta: 2014
 questions[48]= "49)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[48]= new Array();
 choices[48][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[48][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[48][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[48][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[48] = 0;
 units[48] = ['72'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9128. Examen TIC A2 2013";
 preguntaids[48] = 9128


//  Id pregunta: 7072 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes acciones no se puede considerar del modo de operar del Data Mining?";
 choices[49]= new Array();
 choices[49][0] = "Detectar desviaciones.";
 choices[49][1] = "Crear modelos.";
 choices[49][2] = "Analizar relaciones.";
 choices[49][3] = "Todas son correctas.";
 answers[49] = 3;
 units[49] = ['72'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7072. ";
 preguntaids[49] = 7072


//  Id pregunta: 6412 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[50]= new Array();
 choices[50][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[50][1] = "Utiliza modelos de datos multidimensionales.";
 choices[50][2] = "Recuperan un dato individual con un alto rendimiento.";
 choices[50][3] = "Ofrece ventajas sobre las BBDD Relacionales a la hora de trabajar sobre datos agregados.";
 answers[50] = 2;
 units[50] = ['72'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6412. ";
 preguntaids[50] = 6412


//  Id pregunta: 8175 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes utilidades permite realizar miner&iacute;a de datos?";
 choices[51]= new Array();
 choices[51][0] = "JDataMiner.";
 choices[51][1] = "Cubos OLAP de Excel.";
 choices[51][2] = "VNC.";
 choices[51][3] = "Extract to Learnt by SQLServer.";
 answers[51] = 1;
 units[51] = ['72'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8175. Examen TIC A2 2010 interna";
 preguntaids[51] = 8175


//  Id pregunta: 6004 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Para cu&aacute;les de los siguientes sistemas se debe configurar la base de datos optimizando las inserciones, modificaciones y borrado de datos y asegurando un alto nivel de concurrencia?";
 choices[52]= new Array();
 choices[52][0] = "OLTP (sistemas transaccionales on line).";
 choices[52][1] = "DSS (sistemas de soporte a la decisi&oacute;n).";
 choices[52][2] = "Data Warehouse (almacenes de datos).";
 choices[52][3] = "ERP (sistemas de planificaci&oacute;n de recursos).";
 answers[52] = 0;
 units[52] = ['72', '73'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6004. TIC B 2007";
 preguntaids[52] = 6004


//  Id pregunta: 8328 Año de creación de pregunta: 2011
 questions[53]= "54)  Los procesos de un Data Warehouse son:";
 choices[53]= new Array();
 choices[53][0] = "Elaboraci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[53][1] = "Extracci&oacute;n, elaboraci&oacute;n, carga y explotaci&oacute;n.";
 choices[53][2] = "Extracci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[53][3] = "Extracci&oacute;n, elaboraci&oacute;n, carga y an&aacute;lisis.";
 answers[53] = 1;
 units[53] = ['72'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8328. Examen UPM A2 2011";
 preguntaids[53] = 8328


//  Id pregunta: 6587 Año de creación de pregunta: 2009
 questions[54]= "55)  Referido a OLAP, &iquest;cu&aacute;l es el significado m&aacute;s aproximado de Drill-Across?";
 choices[54]= new Array();
 choices[54][0] = "Navegar hacia un mayor nivel de agregaci&oacute;n.";
 choices[54][1] = "Moverse entre cubos.";
 choices[54][2] = "Descender a un menor nivel de agregaci&oacute;n.";
 choices[54][3] = "Elecci&oacute;n del n&uacute;mero de dimensiones a visualizar.";
 answers[54] = 1;
 units[54] = ['72'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 6587. ";
 preguntaids[54] = 6587


//  Id pregunta: 8008 Año de creación de pregunta: 2011
 questions[55]= "56)  Entre las t&eacute;cnicas usadas en miner&iacute;a de datos se encuentran las redes neuronales artificiales, &iquest;cu&aacute;l de los siguientes es uno de sus modelos?";
 choices[55]= new Array();
 choices[55][0] = "Redes de Shelman.";
 choices[55][1] = "Redes de Coperfield.";
 choices[55][2] = "Redes ART.";
 choices[55][3] = "M&aacute;quina de Gauss.";
 answers[55] = 2;
 units[55] = ['72'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8008. Examen TIC A2 2010";
 preguntaids[55] = 8008


//  Id pregunta: 6100 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[56]= new Array();
 choices[56][0] = "Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[56][1] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[56][2] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[56][3] = "Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[56] = 1;
 units[56] = ['72'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6100. Examen TIC A1 MAP 2007";
 preguntaids[56] = 6100


//  Id pregunta: 8319 Año de creación de pregunta: 2011
 questions[57]= "58)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con:";
 choices[57]= new Array();
 choices[57][0] = "Data Marts.";
 choices[57][1] = "Metadata.";
 choices[57][2] = "Middleware.";
 choices[57][3] = "Cubos OLAP.";
 answers[57] = 0;
 units[57] = ['72'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8319. Examen UPM A2 2011";
 preguntaids[57] = 8319


//  Id pregunta: 6682 Año de creación de pregunta: 2009
 questions[58]= "59)  &iquest;Cual de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[58]= new Array();
 choices[58][0] = "BPML";
 choices[58][1] = "BPEL";
 choices[58][2] = "BPMN";
 choices[58][3] = "XPDL";
 answers[58] = 3;
 units[58] = ['72'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 6682. MAP 2008 A1";
 preguntaids[58] = 6682


//  Id pregunta: 5739 Año de creación de pregunta: 2007
 questions[59]= "60)  &iquest;Qu&eacute; herramienta se utilliza en Reports 2.5 para dise&ntilde;ar las consultas en las que se basa un informe?";
 choices[59]= new Array();
 choices[59][0] = "QUERY MODEL";
 choices[59][1] = "DATA MODEL";
 choices[59][2] = "STRUCT MODEL";
 choices[59][3] = "REPORT MODEL";
 answers[59] = 1;
 units[59] = ['72'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 5739. ";
 preguntaids[59] = 5739


//  Id pregunta: 8344 Año de creación de pregunta: 2011
 questions[60]= "61)  De acuerdo con el modelo de cuadro de mando (Balanced Scorecard) de Kaplan y Nolan, &iquest;cu&aacute;l de las siguientes respuestas ser&iacute;a la correcta?";
 choices[60]= new Array();
 choices[60][0] = "La implantaci&oacute;n de un cuadro de mando se debe realizar estableciendo objetivos que se deben trasladar a indicadores o medidas espec&iacute;ficas.";
 choices[60][1] = "El cuadro de mando permite a los gestores priorizar las expectativas de los clientes sobre la situaci&oacute;n financiera de la organizaci&oacute;n.";
 choices[60][2] = "El cuadro de mando permite a los gestores priorizar la situaci&oacute;n financiera de la organizaci&oacute;n sobre las expectativas de los clientes.";
 choices[60][3] = "El cuadro de mando se establece teniendo en cuenta cinco perspectivas distintas: clientes, accionistas, perspectiva interna de la organizaci&oacute;n, innovaci&oacute;n-aprendizaje y perspectiva financiera.";
 answers[60] = 0;
 units[60] = ['72'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8344. Examen UC3M 2010";
 preguntaids[60] = 8344


//  Id pregunta: 5526 Año de creación de pregunta: 2007
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un operador en el an&aacute;lisis de los almacenes de datos multidimensionales?";
 choices[61]= new Array();
 choices[61][0] = "Duck.";
 choices[61][1] = "Drill.";
 choices[61][2] = "Roll.";
 choices[61][3] = "Slice &amp; dice.";
 answers[61] = 0;
 units[61] = ['72'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 5526. ";
 preguntaids[61] = 5526


//  Id pregunta: 7073 Año de creación de pregunta: 2010
 questions[62]= "63)  Las consultas de data minig se realizan:";
 choices[62]= new Array();
 choices[62][0] = "Sobre las bases de datos de la organizaci&oacute;n.";
 choices[62][1] = "Sobre las bases de datos cuyos datos se han obtenido de las bases de datos operacionales de la organizaci&oacute;n.";
 choices[62][2] = "Sobre cualquier tipo de dato sin necesidad de un preproceso previo.";
 choices[62][3] = "No se realizan sobre bases de datos.";
 answers[62] = 1;
 units[62] = ['72'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7073. ";
 preguntaids[62] = 7073


//  Id pregunta: 6195 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;Cu&aacute;l es el modelo conceptual m&aacute;s extendido para los almacenes de datos?";
 choices[63]= new Array();
 choices[63][0] = "Relacional.";
 choices[63][1] = "Multidimensional.";
 choices[63][2] = "Espacial.";
 choices[63][3] = "Temporal.";
 answers[63] = 1;
 units[63] = ['72'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6195. Examen TIC A Castilla La Mancha 2007";
 preguntaids[63] = 6195


//  Id pregunta: 7706 Año de creación de pregunta: 2010
 questions[64]= "65)  Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP, etc., &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[64]= new Array();
 choices[64][0] = "En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[64][1] = "Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[64][2] = "Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[64][3] = "En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico, lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[64] = 3;
 units[64] = ['72'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7706. Map 2007";
 preguntaids[64] = 7706


//  Id pregunta: 6002 Año de creación de pregunta: 2003
 questions[65]= "66)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &ldquo;duplicaciones&rdquo; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[65]= new Array();
 choices[65][0] = "Data Marts.";
 choices[65][1] = "Metadata.";
 choices[65][2] = "Middleware.";
 choices[65][3] = "Dataware.";
 answers[65] = 0;
 units[65] = ['72'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 6002. TIC B 2007";
 preguntaids[65] = 6002


//  Id pregunta: 5447 Año de creación de pregunta: 2007
 questions[66]= "67)  Los sistemas conocidos como OLTP son utilizados para:";
 choices[66]= new Array();
 choices[66][0] = "Hacer consultas complejas sobre distintas Bases de Datos que se han consolidado en una central.";
 choices[66][1] = "Poder realizar informes a la Direcci&oacute;n.";
 choices[66][2] = "Son sistemas t&iacute;picamente utilizados como Sistemas de Informaci&oacute;n Geogr&aacute;fica.";
 choices[66][3] = "Captura de datos a partir de las operaciones diarias de una organizaci&oacute;n.";
 answers[66] = 3;
 units[66] = ['72'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 5447. ";
 preguntaids[66] = 5447


//  Id pregunta: 7427 Año de creación de pregunta: 2010
 questions[67]= "68)  Un proveedor de SW para miner&iacute;a de datos es:";
 choices[67]= new Array();
 choices[67][0] = "SAS";
 choices[67][1] = "SPSS";
 choices[67][2] = "A y B son correctas.";
 choices[67][3] = "A y B son incorrectas.";
 answers[67] = 2;
 units[67] = ['72'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7427. ";
 preguntaids[67] = 7427


//  Id pregunta: 8325 Año de creación de pregunta: 2011
 questions[68]= "69)  Las extensiones del Data Mining son:";
 choices[68]= new Array();
 choices[68][0] = "Web Mining y Text Mining.";
 choices[68][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[68][2] = "Text Mining e Hipertext Mining.";
 choices[68][3] = "Web Mining e Hipertext Mining.";
 answers[68] = 0;
 units[68] = ['72'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8325. Examen UPM A2 2011";
 preguntaids[68] = 8325


//  Id pregunta: 8086 Año de creación de pregunta: 2011
 questions[69]= "70)  Entre las ventajas de un Datawarehouse NO se encuentra:";
 choices[69]= new Array();
 choices[69][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[69][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[69][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n.";
 choices[69][3] = "Facilitar la implementaci&oacute;n de cuadros de mando.";
 answers[69] = 0;
 units[69] = ['72'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8086. Analista Ayto. Madrid 2010";
 preguntaids[69] = 8086


//  Id pregunta: 5818 Año de creación de pregunta: 2007
 questions[70]= "71)  En el &aacute;mbito de la miner&iacute;a de datos &iquest;c&oacute;mo se llama la herramienta con la que se establecen relaciones entre elementos?";
 choices[70]= new Array();
 choices[70][0] = "Clasificaci&oacute;n.";
 choices[70][1] = "Asociaci&oacute;n.";
 choices[70][2] = "Agrupaci&oacute;n.";
 choices[70][3] = "Secuenciaci&oacute;n.";
 answers[70] = 2;
 units[70] = ['72', '73'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 5818. Examen 2006 JCYL";
 preguntaids[70] = 5818


//  Id pregunta: 8365 Año de creación de pregunta: 2011
 questions[71]= "72)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[71]= new Array();
 choices[71][0] = "Metadata.";
 choices[71][1] = "Data Marts.";
 choices[71][2] = "Data Ware.";
 choices[71][3] = "Data Store.";
 answers[71] = 1;
 units[71] = ['72'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8365. Analista Ayto. Madrid 2010";
 preguntaids[71] = 8365


//  Id pregunta: 7076 Año de creación de pregunta: 2010
 questions[72]= "73)  Si el objetivo al plantear una consulta de data mining es obtener reglas de predicci&oacute;n orientadas a la toma de decisi&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Es indiferente que t&eacute;cnica se utilice.";
 choices[72][1] = "Se debe disponer de una buena herramienta de c&aacute;lculo de asociaciones.";
 choices[72][2] = "Se tiene que distinguir entre la variable que se va a  predecir y las variables que se uilizar&aacute;n para tal predicci&oacute;n.";
 choices[72][3] = "No hay en el estado actual de la tecnolog&iacute;a data mining ning&uacute;n enfoque adecuado para ese problema.";
 answers[72] = 2;
 units[72] = ['72'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7076. ";
 preguntaids[72] = 7076


//  Id pregunta: 3453 Año de creación de pregunta: 2006
 questions[73]= "74)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[73]= new Array();
 choices[73][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[73][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[73][2] = "Facilidades de enrutamiento";
 choices[73][3] = "Todas las anteriores";
 answers[73] = 3;
 units[73] = ['72'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3453. ";
 preguntaids[73] = 3453


//  Id pregunta: 8010 Año de creación de pregunta: 2011
 questions[74]= "75)  Sobre un Data Warehouse con informaci&oacute;n de las ventas nacionales de una compa&ntilde;&iacute;a, se quiere consultar los datos pero a nivel de ventas provinciales. &iquest;Qu&eacute; operaci&oacute;n debemos realizar en el almac&eacute;n de datos para obtener dichos datos?";
 choices[74]= new Array();
 choices[74][0] = "Drill-Down.";
 choices[74][1] = "Slice &amp; Dice.";
 choices[74][2] = "Roll-Up,";
 choices[74][3] = "Drill-Through.";
 answers[74] = 0;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8010. Examen TIC A2 2010";
 preguntaids[74] = 8010


