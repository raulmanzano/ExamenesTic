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
//  Id pregunta: 8457 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[0]= new Array();
 choices[0][0] = "Lisp";
 choices[0][1] = "Perl";
 choices[0][2] = "Php";
 choices[0][3] = "C++";
 answers[0] = 3;
 units[0] = ['87', '88', '89'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 8457. ";
 preguntaids[0] = 8457


//  Id pregunta: 1158 Año de creación de pregunta: 2016
 questions[1]= "2)  Uno de los indicadores que hace patente una escasa calidad de un dise&ntilde;o software es el siguiente:";
 choices[1]= new Array();
 choices[1][0] = "Un alto acoplamiento entre sus m&oacute;dulos.";
 choices[1][1] = "Una alta cohesi&oacute;n entre los elementos de un m&oacute;dulo.";
 choices[1][2] = "No disponer de c&oacute;digo duplicado.";
 choices[1][3] = "No seguir un dise&ntilde;o en cascada.";
 answers[1] = 0;
 units[1] = ['88'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 1158. ";
 preguntaids[1] = 1158


//  Id pregunta: 6356 Año de creación de pregunta: 2003
 questions[2]= "3)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vista de explotaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[2][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[2][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[2][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[2] = 1;
 units[2] = ['88'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 6356. Examen 2006 JCYL";
 preguntaids[2] = 6356


//  Id pregunta: 1156 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes grupos de principios es propio de un buen dise&ntilde;o estructurado?";
 choices[3]= new Array();
 choices[3][0] = "Modularidad, dependencia funcional y principio de caja &quot;blanca&quot;.";
 choices[3][1] = "Modularidad, independencia funcional y principio de caja &quot;blanca&quot;.";
 choices[3][2] = "Modularidad, independencia funcional y principio de caja &quot;negra&quot;.";
 choices[3][3] = "Modularidad, dependencia funcional y principio de caja &quot;negra&quot;.";
 answers[3] = 2;
 units[3] = ['88'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 1156. ";
 preguntaids[3] = 1156


//  Id pregunta: 1495 Año de creación de pregunta: 2016
 questions[4]= "5)  En teor&iacute;a de grafos, &iquest;cu&aacute;l de las siguientes afirmaciones NO es correcta?";
 choices[4]= new Array();
 choices[4][0] = "Un &aacute;rbol de expansi&oacute;n de un grafo conexo es el mayor conjunto de aristas que no contiene ciclos.";
 choices[4][1] = "Un &aacute;rbol de expansi&oacute;n es el m&iacute;nimo conjunto de aristas que conecta todos los v&eacute;rtices.";
 choices[4][2] = "Si se a&ntilde;ade una sola arista a un &aacute;rbol de expansi&oacute;n, se crea un ciclo.";
 choices[4][3] = "El &aacute;rbol de expansi&oacute;n de un grafo conexo es &uacute;nico.";
 answers[4] = 3;
 units[4] = ['88'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 1495. ";
 preguntaids[4] = 1495


//  Id pregunta: 1157 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre cohesi&oacute;n y acoplamiento es correcta?";
 choices[5]= new Array();
 choices[5][0] = "El acoplamiento mide la relaci&oacute;n entre los elementos de un m&oacute;dulo, buscando que sea m&aacute;ximo.";
 choices[5][1] = "La cohesi&oacute;n mide el grado de interdependencia entre m&oacute;dulos, buscando que sea m&iacute;nimo para independizarlos y garantizar su f&aacute;cil mantenibilidad.";
 choices[5][2] = "La cohesi&oacute;n mide la relaci&oacute;n entre los elementos de un m&oacute;dulo. Existen distintos tipos de cohesi&oacute;n: funcional, secuencial, temporal, etc.";
 choices[5][3] = "La cohesi&oacute;n mide la relaci&oacute;n entre los elementos de un m&oacute;dulo. Existen distintos tipos de cohesi&oacute;n: normal, externa, com&uacute;n, etc.";
 answers[5] = 2;
 units[5] = ['88'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 1157. ";
 preguntaids[5] = 1157


//  Id pregunta: 7756 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[6]= new Array();
 choices[6][0] = "Vista de Componentes.";
 choices[6][1] = "Vista de Despliegue.";
 choices[6][2] = "Vista de Casos de Uso.";
 choices[6][3] = "Vista de Flujo de Datos.";
 answers[6] = 3;
 units[6] = ['88'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7756. ";
 preguntaids[6] = 7756


//  Id pregunta: 1700 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO se corresponde con un tipo de acoplamiento entre m&oacute;dulos de un sistema de informaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Por datos.";
 choices[7][1] = "Por control.";
 choices[7][2] = "Por contenido.";
 choices[7][3] = "Por secuencia.";
 answers[7] = 3;
 units[7] = ['88'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 1700. ";
 preguntaids[7] = 1700


//  Id pregunta: 5904 Año de creación de pregunta: 2007
 questions[8]= "9)  &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[8]= new Array();
 choices[8][0] = "Diagramas de casos de uso.";
 choices[8][1] = "Diagramas de estados.";
 choices[8][2] = "Diagramas de interacci&oacute;n.";
 choices[8][3] = "Diagramas de flujo de datos.";
 answers[8] = 2;
 units[8] = ['88'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 5904. examen TIC 2006";
 preguntaids[8] = 5904


