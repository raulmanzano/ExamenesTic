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
//  Id pregunta: 5893 Año de creación de pregunta: 2007
 questions[0]= "1)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[0]= new Array();
 choices[0][0] = "1 y 5.";
 choices[0][1] = "1 y 8.";
 choices[0][2] = "0 y 8.";
 choices[0][3] = "0 y 5.";
 answers[0] = 3;
 units[0] = ['33'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 5893. Castilla la Mancha B 2006";
 preguntaids[0] = 5893


//  Id pregunta: 5707 Año de creación de pregunta: 2007
 questions[1]= "2)  En gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n indicar cu&aacute;l de los siguientes diagramas es de red y tiene una representaci&oacute;n gr&aacute;fica m&aacute;s sencilla no incluyendo actividades virtuales.";
 choices[1]= new Array();
 choices[1][0] = "Diagrama PERT (Program Evaluation and Review Technique).";
 choices[1][1] = "Diagrama PDM (Precedence Diagramming Method).";
 choices[1][2] = "Diagrama ADM (Arrow Diagramming Method).";
 choices[1][3] = "Ninguno de los anteriores.";
 answers[1] = 1;
 units[1] = ['33'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 5707. Castilla la Mancha B 2006";
 preguntaids[1] = 5707


//  Id pregunta: 2162 Año de creación de pregunta: 2002
 questions[2]= "3)  En la planificaci&oacute;n de proyectos:";
 choices[2]= new Array();
 choices[2][0] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-) presentan dependencias pero no informaci&oacute;n temporal.";
 choices[2][1] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-) presentan dependencias e informaci&oacute;n temporal.";
 choices[2][2] = "Los gr&aacute;ficos de barras o de Gantt representan las dependencias entre tareas.";
 choices[2][3] = "El camino cr&iacute;tico en un proyecto ha de ser necesariamente &uacute;nico.";
 answers[2] = 0;
 units[2] = ['33'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2162. La informaci&oacute;n temporal puede aparecer pero no siempre aparece";
 preguntaids[2] = 2162


//  Id pregunta: 6176 Año de creación de pregunta: 2003
 questions[3]= "4)  El modelo CMMI:";
 choices[3]= new Array();
 choices[3][0] = "Es una metodolog&iacute;a de desarrollo software.";
 choices[3][1] = "Es una pr&aacute;ctica para estimaci&oacute;n de complejidad de software.";
 choices[3][2] = "Permite obtener un diagn&oacute;stico de la madurez de los procesos relacionados con las tecnolog&iacute;as de la informaci&oacute;n de una organizaci&oacute;n.";
 choices[3][3] = "Permite la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 answers[3] = 2;
 units[3] = ['33'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 6176. Examen TIC A Castilla La Mancha 2007";
 preguntaids[3] = 6176


//  Id pregunta: 2222 Año de creación de pregunta: 2002
 questions[4]= "5)  La duraci&oacute;n total de un proyecto es:";
 choices[4]= new Array();
 choices[4][0] = "La del camino cr&iacute;tico del gr&aacute;fico de PERT.";
 choices[4][1] = "La del camino del gr&aacute;fico de PERT que m&aacute;s tareas realiza.";
 choices[4][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto, como se refleja en el gr&aacute;fico de PERT.";
 choices[4][3] = "La de la tarea cr&iacute;tica, como se refleja en el gr&aacute;fico de PERT.";
 answers[4] = 0;
 units[4] = ['33'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2222. ";
 preguntaids[4] = 2222


//  Id pregunta: 5462 Año de creación de pregunta: 2007
 questions[5]= "6)  Para contemplar la plena ocupaci&oacute;n de todos los recursos, en un diagrama de Gantt:";
 choices[5]= new Array();
 choices[5][0] = "Puede asignarse a un recurso distintas tarea.";
 choices[5][1] = "S&oacute;lo debe asignarse a cada recurso una tarea.";
 choices[5][2] = "Se puede asignar la misma tarea a varios recursos.";
 choices[5][3] = "No es necesario que los trabajos se descompongan hasta la unidad m&iacute;nima de tratamiento.";
 answers[5] = 0;
 units[5] = ['33'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 5462. Map 2005";
 preguntaids[5] = 5462


//  Id pregunta: 5604 Año de creación de pregunta: 2007
 questions[6]= "7)  Dentro de las t&eacute;cnicas de planificaci&oacute;n de proyectos, podr&iacute;amos decir que una actividad es cr&iacute;tica si:";
 choices[6]= new Array();
 choices[6][0] = "No se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar Ia duraci&oacute;n total del proyecto.";
 choices[6][1] = "Es la m&aacute;s corta del proyecto.";
 choices[6][2] = "Indica el fin de Ia fase de verificaci&oacute;n y el inicio de Ia fase de validaci&oacute;n.";
 choices[6][3] = "Requiere el mayor n&uacute;mero de recursos humanos para ser realizada.";
 answers[6] = 0;
 units[6] = ['33'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 5604. Castilla la mancha 2006";
 preguntaids[6] = 5604


//  Id pregunta: 9636 Año de creación de pregunta: 2014
 questions[7]= "8)  &iquest;Qu&eacute; tipos de holguras puede tener una actividad en un proyecto?";
 choices[7]= new Array();
 choices[7][0] = "Dos: Holgura libre y Holgura total";
 choices[7][1] = "Dos: Holgura independiente y holgura dependiente";
 choices[7][2] = "Tres: Holgura libre, Holgura Independiente y Holgura Total";
 choices[7][3] = "Cuatro: Holgura independentiente, holgura de seguridad, holgura libre y holgura total";
 answers[7] = 3;
 units[7] = ['33'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 9636. ";
 preguntaids[7] = 9636


//  Id pregunta: 9334 Año de creación de pregunta: 2014
 questions[8]= "9)  En la direcci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n, es fundamental la gesti&oacute;n del alcance del proyecto. Ello supone";
 choices[8]= new Array();
 choices[8][0] = "estimar la duraci&oacute;n de las actividades.";
 choices[8][1] = "definir la secuencia entre las actividades.";
 choices[8][2] = "asegurar que el proyecto incluya todo el trabajo requerido, y s&oacute;lo el trabajo requerido.";
 choices[8][3] = "preparar el presupuesto de costes.";
 answers[8] = 2;
 units[8] = ['33'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 9334. ";
 preguntaids[8] = 9334


//  Id pregunta: 2163 Año de creación de pregunta: 2002
 questions[9]= "10)  En la planificaci&oacute;n de sistemas, la demanda latente produce:";
 choices[9]= new Array();
 choices[9][0] = "Un crecimiento reprimido.";
 choices[9][1] = "Un crecimiento evolutivo.";
 choices[9][2] = "Un crecimiento gradual.";
 choices[9][3] = "Un crecimiento no gradual.";
 answers[9] = 3;
 units[9] = ['33'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2163. ";
 preguntaids[9] = 2163


//  Id pregunta: 6112 Año de creación de pregunta: 2003
 questions[10]= "11)  En la planificaci&oacute;n de un proyecto representada por un diagrama de Pert, una actividad critica es una actividad:";
 choices[10]= new Array();
 choices[10][0] = "con un alto riesgo de incrementar su duraci&oacute;n";
 choices[10][1] = "con dependencia de otra actividad y de la que depende al menos una actividad";
 choices[10][2] = "en el camino cr&iacute;tico";
 choices[10][3] = "cuya duraci&oacute;n no puede modificarse";
 answers[10] = 2;
 units[10] = ['83', '33'];
 blocks[10] = ['B3', 'B1'];
 comments[10] = "Id Pregunta: 6112. Examen TIC A1 MAP 2007";
 preguntaids[10] = 6112


//  Id pregunta: 1135 Año de creación de pregunta: 2016
 questions[11]= "12)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[11]= new Array();
 choices[11][0] = "Es siempre cero.";
 choices[11][1] = "Es igual a su tiempo early.";
 choices[11][2] = "Es mayor que su tiempo early.";
 choices[11][3] = "Es menor que su tiempo early.";
 answers[11] = 1;
 units[11] = ['33'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 1135. ";
 preguntaids[11] = 1135


//  Id pregunta: 5668 Año de creación de pregunta: 2007
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos se utiliza para determinar la viabilidad del proyecto en el an&aacute;lisis coste-beneficio?";
 choices[12]= new Array();
 choices[12][0] = "Inversi&oacute;n promedio.";
 choices[12][1] = "Coste de desarrollo actualizado.";
 choices[12][2] = "Beneficio neto.";
 choices[12][3] = "Valor actual.";
 answers[12] = 3;
 units[12] = ['33'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 5668. Castilla la Mancha 2006";
 preguntaids[12] = 5668


//  Id pregunta: 6987 Año de creación de pregunta: 2010
 questions[13]= "14)  En el marco de trabajo de la gesti&oacute;n de proyectos no se realiza:";
 choices[13]= new Array();
 choices[13][0] = "Gesti&oacute;n del tiempo.";
 choices[13][1] = "Gesti&oacute;n de la calidad.";
 choices[13][2] = "Gesti&oacute;n del cambio.";
 choices[13][3] = "Gesti&oacute;n de contenidos.";
 answers[13] = 3;
 units[13] = ['33'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 6987. TIC-B 2009 bloque desarrollo";
 preguntaids[13] = 6987


//  Id pregunta: 2383 Año de creación de pregunta: 2006
 questions[14]= "15)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[14]= new Array();
 choices[14][0] = "CPM (Critical Path Method).";
 choices[14][1] = "PERT.";
 choices[14][2] = "Diagrama de Gant.";
 choices[14][3] = "PROPS.";
 answers[14] = 0;
 units[14] = ['33'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2383. ";
 preguntaids[14] = 2383


//  Id pregunta: 6174 Año de creación de pregunta: 2003
 questions[15]= "16)  Cuando en una empresa la forma de desarrollar proyectos (gesti&oacute;n e ingenier&iacute;a) est&aacute; definida, es decir, que est&aacute; establecida, documentada y que existen m&eacute;tricas (obtenci&oacute;n de datos objetivos) para la consecuci&oacute;n de objetivos concretos, seg&uacute;n CMMI est&aacute;:";
 choices[15]= new Array();
 choices[15][0] = "Nivel 1";
 choices[15][1] = "Nivel 2";
 choices[15][2] = "Nivel 3";
 choices[15][3] = "Nivel 4";
 answers[15] = 2;
 units[15] = ['33'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 6174. Examen TIC A Castilla La Mancha 2007";
 preguntaids[15] = 6174


//  Id pregunta: 2177 Año de creación de pregunta: 2002
 questions[16]= "17)  En un gr&aacute;fico PERT los nodos representan:";
 choices[16]= new Array();
 choices[16][0] = "Actividades.";
 choices[16][1] = "Sucesos.";
 choices[16][2] = "El camino cr&iacute;tico.";
 choices[16][3] = "La holgura de una actividad.";
 answers[16] = 1;
 units[16] = ['33'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2177. ";
 preguntaids[16] = 2177


//  Id pregunta: 9635 Año de creación de pregunta: 2014
 questions[17]= "18)  Respecto al m&eacute;todo de crashing en la gesti&oacute;n de proyectos es cierto que:";
 choices[17]= new Array();
 choices[17][0] = "No sirve para acortar la duraci&oacute;n de los proyectos cuando es aplicado a las actividades del camino cr&iacute;tico";
 choices[17][1] = "S&oacute;lo sirve para acortar la duraci&oacute;n de los proyectos si lo aplicamos a alguna de las actividades del camino cr&iacute;tico";
 choices[17][2] = "Acorta el tiempo del proyecto tanto si se aplica a las actividades cr&iacute;ticas como a las que no lo son";
 choices[17][3] = "No tiene nada que ver con la duraci&oacute;n del proyecto sino con la inclusi&oacute;n de recursos por fases";
 answers[17] = 1;
 units[17] = ['33'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9635. ";
 preguntaids[17] = 9635


//  Id pregunta: 2130 Año de creación de pregunta: 2002
 questions[18]= "19)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[18]= new Array();
 choices[18][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[18][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[18][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[18][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[18] = 1;
 units[18] = ['33'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2130. ";
 preguntaids[18] = 2130


//  Id pregunta: 5661 Año de creación de pregunta: 2007
 questions[19]= "20)  Trabajando con un diagrama PERT vemos que se retrasa una etapa no perteneciente al camino critico. Este aumento de duraci&oacute;n, &iquest;retrasar&aacute; la fecha del final del proyecto?";
 choices[19]= new Array();
 choices[19][0] = "Siempre, dado que todo retraso en una etapa afecta a la duraci&oacute;n del proyecto.";
 choices[19][1] = "Nunca, al no pertenecer la etapa al camino cr&iacute;tico.";
 choices[19][2] = "S&oacute;lo si la nueva duraci&oacute;n de la etapa es superior a la duraci&oacute;n de cualquiera de las otras etapas.";
 choices[19][3] = "S&oacute;lo si la nueva duraci&oacute;n convierte en critico el camino al que pertenece la etapa.";
 answers[19] = 3;
 units[19] = ['33'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 5661. Castilla la Mancha 2006";
 preguntaids[19] = 5661


//  Id pregunta: 2137 Año de creación de pregunta: 2004
 questions[20]= "21)  El An&aacute;lisis Coste-Beneficio es una t&eacute;cnica empleada en el estudio de viabilidad de un nuevo sistema de informaci&oacute;n. &iquest;Cu&aacute;l de las siguientes no es una utilidad del An&aacute;lisis Coste-Beneficio?";
 choices[20]= new Array();
 choices[20][0] = "Valorar la necesidad y oportunidad de acometer la realizaci&oacute;n del proyecto.";
 choices[20][1] = "Calcular el punto de amortizaci&oacute;n del proyecto.";
 choices[20][2] = "Seleccionar la alternativa m&aacute;s beneficiosa.";
 choices[20][3] = "Estimar adecuadamente los recursos econ&oacute;micos necesarios.";
 answers[20] = 1;
 units[20] = ['33'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2137. Examen TIC MAP B 2004";
 preguntaids[20] = 2137


//  Id pregunta: 2391 Año de creación de pregunta: 2006
 questions[21]= "22)  Entre las actividades de planificaci&oacute;n de proyectos no se encuentra:";
 choices[21]= new Array();
 choices[21][0] = "An&aacute;lisis operacional.";
 choices[21][1] = "Dise&ntilde;o t&eacute;cnico.";
 choices[21][2] = "An&aacute;lisis de riesgos.";
 choices[21][3] = "Definici&oacute;n de los requerimientos.";
 answers[21] = 1;
 units[21] = ['33'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2391. ";
 preguntaids[21] = 2391


//  Id pregunta: 2136 Año de creación de pregunta: 2004
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[22]= new Array();
 choices[22][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[22][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[22][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[22][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[22] = 2;
 units[22] = ['33'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2136. Examen TIC MAP B 2004";
 preguntaids[22] = 2136


//  Id pregunta: 2164 Año de creación de pregunta: 2002
 questions[23]= "24)  En la planificaci&oacute;n de un proyecto no debemos realizar las siguientes tareas:";
 choices[23]= new Array();
 choices[23][0] = "Definici&oacute;n de los requerimientos";
 choices[23][1] = "Selecci&oacute;n de una metodolog&iacute;a de gesti&oacute;n de proyecto";
 choices[23][2] = "Reclutamiento de personal y asignaci&oacute;n de tareas";
 choices[23][3] = "An&aacute;lisis de riesgos y revisi&oacute;n inicial de seguridad";
 answers[23] = 2;
 units[23] = ['33'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2164. ";
 preguntaids[23] = 2164


//  Id pregunta: 2151 Año de creación de pregunta: 2002
 questions[24]= "25)  En general, lo m&aacute;s &uacute;til en determinadas &aacute;reas de la organizaci&oacute;n altamente normalizadas (ofim&aacute;tica, contabilidad, inventarios,&hellip;) es utilizar:";
 choices[24]= new Array();
 choices[24][0] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia.";
 choices[24][1] = "Aplicaciones a medida realizadas mediante programaci&oacute;n externa.";
 choices[24][2] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia y externa.";
 choices[24][3] = "Aplicaciones est&aacute;ndar o paquetes.";
 answers[24] = 3;
 units[24] = ['33'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2151. ";
 preguntaids[24] = 2151


//  Id pregunta: 2120 Año de creación de pregunta: 2002
 questions[25]= "26)  En cuanto al control de proyectos:";
 choices[25]= new Array();
 choices[25][0] = "El gr&aacute;fico de PERT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[25][1] = "El gr&aacute;fico de GANTT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[25][2] = "El gr&aacute;fico de Gantt consiste en una visualizaci&oacute;n del proyecto basada en las restricciones.";
 choices[25][3] = "Las respuestas 'a' y 'c' son correctas.";
 answers[25] = 1;
 units[25] = ['33'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2120. ";
 preguntaids[25] = 2120


//  Id pregunta: 6980 Año de creación de pregunta: 2010
 questions[26]= "27)  El diagrama de Gantt es una herramienta para:";
 choices[26]= new Array();
 choices[26][0] = "Gesti&oacute;n de los recursos";
 choices[26][1] = "Gesti&oacute;n de la calidad";
 choices[26][2] = "Gesti&oacute;n de los riesgos";
 choices[26][3] = "Generaci&oacute;n de gr&aacute;ficas e informes";
 answers[26] = 0;
 units[26] = ['33'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 6980. TIC-B 2009 bloque desarrollo";
 preguntaids[26] = 6980


//  Id pregunta: 9611 Año de creación de pregunta: 2014
 questions[27]= "28)  Por motivos estrat&eacute;gicos, se acuerda terminar un portal de admnistraci&oacute;n electr&oacute;nica dos meses antes de lo previsto. No hay disponibilidad de m&aacute;s recursos humanos ni de ampliar el horario de trabajo ni de conseguir fondos para contratar personal externo. El Jefe de Proyecto deber&aacute; negociar entonces con el cliente del portal:";
 choices[27]= new Array();
 choices[27][0] = "Una reducci&oacute;n del alcance previsto, eliminando algunas funcionalidades adicionales o no cr&iacute;ticas,  hasta que cuadre en el tiempo previsto.";
 choices[27][1] = "Una demora en el tiempo ya que no se puede acometer sin m&aacute;s recursos la tarea indicada";
 choices[27][2] = "Que el portal se haga usando herramientas de creaci&oacute;n r&aacute;pida de portales electr&oacute;nicos";
 choices[27][3] = "Una disminuci&oacute;n de la calidad, admitiendo una serie de errores motivados por lo acelerado de la entrega";
 answers[27] = 0;
 units[27] = ['33'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 9611. ";
 preguntaids[27] = 9611


//  Id pregunta: 5842 Año de creación de pregunta: 2007
 questions[28]= "29)  &iquest;Cu&aacute;ndo analizar&iacute;amos los recursos de la organizaci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Cuando ejecutemos un desarrollo, para determinar el costo.";
 choices[28][1] = "Al valorar los recursos que se han consumido.";
 choices[28][2] = "Para ver la forma de materializar un desarrollo.";
 choices[28][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica.";
 answers[28] = 3;
 units[28] = ['33'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 5842. Examen 2006 JCYL";
 preguntaids[28] = 5842


//  Id pregunta: 7754 Año de creación de pregunta: 2010
 questions[29]= "30)  Seg&uacute;n el m&eacute;todo del camino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[29]= new Array();
 choices[29][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone de todos los recursos necesarios.";
 choices[29][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[29][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar la duraci&oacute;n total del proyecto.";
 choices[29][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[29] = 3;
 units[29] = ['33'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 7754. ";
 preguntaids[29] = 7754


