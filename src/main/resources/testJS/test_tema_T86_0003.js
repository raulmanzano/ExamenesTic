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
//  Id pregunta: 9849 Año de creación de pregunta: 2015
 questions[0]= "1)  Indique cu&aacute;l de &eacute;stas no es una herramienta BPM:";
 choices[0]= new Array();
 choices[0][0] = "Intalio";
 choices[0][1] = "Scrum";
 choices[0][2] = "Tibco";
 choices[0][3] = "Adonis";
 answers[0] = 1;
 units[0] = ['86'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 9849. ";
 preguntaids[0] = 9849


//  Id pregunta: 10065 Año de creación de pregunta: 2015
 questions[1]= "2)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[1][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[1][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[1][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[1] = 1;
 units[1] = ['91', '85', '86'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 10065. Examen TIC A2 2014";
 preguntaids[1] = 10065


//  Id pregunta: 10140 Año de creación de pregunta: 2015
 questions[2]= "3)  Respecto a los diagramas de flujos de datos, se&ntilde;ale la respuesta correcta:";
 choices[2]= new Array();
 choices[2][0] = "Proporcionan un mecanismo para el modelado funcional, no siendo necesario considerar el flujo de informaci&oacute;n.";
 choices[2][1] = "Por s&iacute; solos, son una herramienta suficiente para describir los requisitos del software.";
 choices[2][2] = "En los sucesivos niveles de detalle es necesario mantener la continuidad del flujo de informaci&oacute;n.";
 choices[2][3] = "No son una herramienta v&aacute;lida para sistemas de tiempo real.";
 answers[2] = 2;
 units[2] = ['86'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 10140. Examen TIC A1 2014";
 preguntaids[2] = 10140


//  Id pregunta: 10730 Año de creación de pregunta: 2015
 questions[3]= "4)  Seg&uacute;n la metodolog&iacute;a m&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes funciones NO le corresponde al Jefe de Proyecto?";
 choices[3]= new Array();
 choices[3][0] = "Seleccionar la estrategia de desarrollo (modelo de ciclo de vida) y determinar los procesos, actividades y tareas que integran el proyecto (mapa de actividades).";
 choices[3][1] = "Ofrecer una opini&oacute;n experta relativa a los requisitos del negocio, t&eacute;cnicos y de usuario que han de tenerse en cuenta en el desarrollo del sistema de informaci&oacute;n.";
 choices[3][2] = "Estimar el esfuerzo necesario para llevar a cabo el proyecto.";
 choices[3][3] = "Le corresponden todas las funciones anteriores.";
 answers[3] = 1;
 units[3] = ['86'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 10730. La B, son funciones propias del perfil consultor.";
 preguntaids[3] = 10730


//  Id pregunta: 10822 Año de creación de pregunta: 2015
 questions[4]= "5)  El nivel 2 de un DFD se conoce como:";
 choices[4]= new Array();
 choices[4][0] = "Diagrama de expansi&oacute;n";
 choices[4][1] = "Diagrama de paquetes";
 choices[4][2] = "Diagrama de nivel superior";
 choices[4][3] = "Diagrama de contexto";
 answers[4] = 0;
 units[4] = ['86'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10822. ";
 preguntaids[4] = 10822


//  Id pregunta: 10354 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;Qu&eacute; caracter&iacute;sticas deben tener las transacciones para realizarse r&aacute;pidamente y con riesgos m&iacute;nimos?";
 choices[5]= new Array();
 choices[5][0] = "Atomicidad, Coherencia, Independencia, Durabilidad";
 choices[5][1] = "Atomicidad, Consistencia, Aislamiento, Durabilidad";
 choices[5][2] = "Atomicidad, Consistencia, Independencia, Durabilidad";
 choices[5][3] = "Atomicidad, Coherencia, Aislamiento, Durabilidad";
 answers[5] = 1;
 units[5] = ['86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 10354. Atomicity, Consistency Isolation, Durability (ACID)";
 preguntaids[5] = 10354


//  Id pregunta: 10033 Año de creación de pregunta: 2015
 questions[6]= "7)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[6]= new Array();
 choices[6][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[6][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[6][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[6][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[6] = 1;
 units[6] = ['91', '86'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 10033. Examen TIC A2 2014";
 preguntaids[6] = 10033


//  Id pregunta: 10031 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos (DFD) es correcta?";
 choices[7]= new Array();
 choices[7][0] = "Son elementos propios de este diagrama: entidades externas, procesos, almacenes de datos y flujos de datos.";
 choices[7][1] = "Son elementos propios de este diagrama: entidades, atributos, relaciones y jerarqu&iacute;as.";
 choices[7][2] = "Son elementos propios de este diagrama: diccionarios de datos, m&oacute;dulos, procesos y flujos.";
 choices[7][3] = "Se trata de una t&eacute;cnica que se emplea en la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI) de M&eacute;trica v3.";
 answers[7] = 0;
 units[7] = ['86'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10031. Examen TIC A2 2014";
 preguntaids[7] = 10031


