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
//  Id pregunta: 9838 Año de creación de pregunta: 2015
 questions[0]= "1)  BPMN (Business Process Model and Notation)...";
 choices[0]= new Array();
 choices[0][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[0][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[0][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[0][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[0] = 0;
 units[0] = ['86'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 9838. ";
 preguntaids[0] = 9838


//  Id pregunta: 3970 Año de creación de pregunta: 2002
 questions[1]= "2)  Un  m&eacute;todo orientado a los datos es:";
 choices[1]= new Array();
 choices[1][0] = "Diagramas HIPO";
 choices[1][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[1][2] = "Historia de la vida de una entidad";
 choices[1][3] = "Dise&ntilde;o estructurado: Yourdon-Constantine";
 answers[1] = 1;
 units[1] = ['86'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3970. ";
 preguntaids[1] = 3970


//  Id pregunta: 7772 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[2]= new Array();
 choices[2][0] = "BPML.";
 choices[2][1] = "BPEL.";
 choices[2][2] = "BPMN.";
 choices[2][3] = "XPDL.";
 answers[2] = 3;
 units[2] = ['86'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7772. ";
 preguntaids[2] = 7772


//  Id pregunta: 9290 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[3]= new Array();
 choices[3][0] = "La persistencia";
 choices[3][1] = "Los procesos de transformaci&oacute;n.";
 choices[3][2] = "El flujo de la informaci&oacute;n.";
 choices[3][3] = "La herencia";
 answers[3] = 3;
 units[3] = ['85', '86'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 9290. Examen TIC A2 2013. Promocion interna";
 preguntaids[3] = 9290


//  Id pregunta: 5703 Año de creación de pregunta: 2007
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes diagramas no se utiliza en UML?";
 choices[4]= new Array();
 choices[4][0] = "Diagrama de casos de uso";
 choices[4][1] = "Diagrama global de interacciones";
 choices[4][2] = "Diagrama de secuencia";
 choices[4][3] = "Diagrama de flujos de datos";
 answers[4] = 3;
 units[4] = ['85', '86'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 5703. ";
 preguntaids[4] = 5703


//  Id pregunta: 3976 Año de creación de pregunta: 2002
 questions[5]= "6)  Una caracter&iacute;stica de los sistemas en tiempo real es:";
 choices[5]= new Array();
 choices[5][0] = "Gesti&oacute;n de memoria virtual eficiente.";
 choices[5][1] = "Inexistencia de mecanismos de exclusi&oacute;n mutua que retrasen el flujo en &quot;real time&quot;.";
 choices[5][2] = "Sem&aacute;foros para dirigir los procesos.";
 choices[5][3] = "Gesti&oacute;n de los accesos a disco exclusivamente mediante interrupciones.";
 answers[5] = 2;
 units[5] = ['86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3976. ";
 preguntaids[5] = 3976


//  Id pregunta: 6239 Año de creación de pregunta: 2003
 questions[6]= "7)  Los diagramas de estructura resultantes de la aplicaci&oacute;n de la metodolog&iacute;a de Jackson (JSP) se fundamentan en tres estructuras b&aacute;sicas. Indique de las siguientes cu&aacute;l NO es una de las tres estructuras b&aacute;sicas:";
 choices[6]= new Array();
 choices[6][0] = "Exclusi&oacute;n.";
 choices[6][1] = "Secuencia.";
 choices[6][2] = "Repetici&oacute;n.";
 choices[6][3] = "Selecci&oacute;n.";
 answers[6] = 0;
 units[6] = ['86'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 6239. Examen TIC A Castilla La Mancha 2007";
 preguntaids[6] = 6239


//  Id pregunta: 3971 Año de creación de pregunta: 2002
 questions[7]= "8)  Un almac&eacute;n de datos en un DFD&hellip;:";
 choices[7]= new Array();
 choices[7][0] = "No tiene por qu&eacute; equivaler a una tabla";
 choices[7][1] = "Representa una base de datos";
 choices[7][2] = "Es un objeto de tipo dato";
 choices[7][3] = "Se usa tanto como repositorio como en la recogida de basura";
 answers[7] = 0;
 units[7] = ['85', '86'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3971. ";
 preguntaids[7] = 3971


//  Id pregunta: 9419 Año de creación de pregunta: 2014
 questions[8]= "9)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[8]= new Array();
 choices[8][0] = "salida-mecanismo";
 choices[8][1] = "salida-realimentaci&oacute;n";
 choices[8][2] = "control-realimentaci&oacute;n";
 choices[8][3] = "entrada-realimentaci&oacute;n";
 answers[8] = 1;
 units[8] = ['86'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 9419. Existen cinco tipos de interconexiones entre actividades, que son las siguientes: (1)  Control; (2)  Entrada; (3)   Control &ndash; Realimentaci&oacute;n; (4)  Entrada &ndash; Realimentaci&oacute;n; (5)  Salida &ndash; Mecanismo.";
 preguntaids[8] = 9419


//  Id pregunta: 6884 Año de creación de pregunta: 2010
 questions[9]= "10)  Con respecto a BPEL (Business Process Execution Language):";
 choices[9]= new Array();
 choices[9][0] = "Es un lenguaje coreogr&aacute;fico, no de orquestaci&oacute;n.";
 choices[9][1] = "Es un lenguaje de orquestaci&oacute;n, no un lenguaje coreogr&aacute;fico.";
 choices[9][2] = "Fue creado por WfMC.";
 choices[9][3] = "Es un lenguaje de orquestaci&oacute;n y coreogr&aacute;fico creado por OASIS.";
 answers[9] = 1;
 units[9] = ['86'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6884. ";
 preguntaids[9] = 6884


//  Id pregunta: 3928 Año de creación de pregunta: 2002
 questions[10]= "11)  Los Diagramas de Flujo de Datos (DFD) son parte del dise&ntilde;o de sistemas, pero &iquest;de qu&eacute; fase?:";
 choices[10]= new Array();
 choices[10][0] = "Dise&ntilde;o de prototipos";
 choices[10][1] = "Tests finales";
 choices[10][2] = "An&aacute;lisis de requerimientos";
 choices[10][3] = "Ninguno de ellos";
 answers[10] = 2;
 units[10] = ['85', '86'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3928. ";
 preguntaids[10] = 3928


//  Id pregunta: 9289 Año de creación de pregunta: 2014
 questions[11]= "12)  Para las siguientes conexiones entre elementos de un DFD (Diagrama de flujo de datos), NO es posible el flujo:";
 choices[11]= new Array();
 choices[11][0] = "Proceso-Proceso";
 choices[11][1] = "Proceso-Entidad Externa";
 choices[11][2] = "Almac&eacute;n de datos-Almac&eacute;n de datos.";
 choices[11][3] = "Entidad Externa-Proceso";
 answers[11] = 2;
 units[11] = ['85', '86'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 9289. Examen TIC A2 2013. Promocion interna";
 preguntaids[11] = 9289


//  Id pregunta: 7558 Año de creación de pregunta: 2010
 questions[12]= "13)  Indique cu&aacute;l de las siguientes reglas es cierta con respecto al Flujo de Datos, como elemento de un DFD:";
 choices[12]= new Array();
 choices[12][0] = "No puede crear ni destruir los datos.";
 choices[12][1] = "Puede transformar un dato en varios.";
 choices[12][2] = "Activa Procesos.";
 choices[12][3] = "Transforma los flujos de datos de entrada en flujos de salida de datos.";
 answers[12] = 0;
 units[12] = ['86'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 7558. Map 2005";
 preguntaids[12] = 7558


//  Id pregunta: 4168 Año de creación de pregunta: 2006
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[13]= new Array();
 choices[13][0] = "Entidades externas al sistema";
 choices[13][1] = "Bucles";
 choices[13][2] = "Almac&eacute;n de datos";
 choices[13][3] = "Procesos";
 answers[13] = 1;
 units[13] = ['85', '86'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4168. ";
 preguntaids[13] = 4168


//  Id pregunta: 4137 Año de creación de pregunta: 2004
 questions[14]= "15)  Respecto al an&aacute;lisis esencial de Yourdon se puede afirmar que ...";
 choices[14]= new Array();
 choices[14][0] = "Se ha de elaborar un modelo esencial y un modelo de implantaci&oacute;n de usuario";
 choices[14][1] = "El modelo esencial de compone de modelo ambiental y modelo de comportamiento";
 choices[14][2] = "Para describir el modelo de comportamiento se usan DFDs y diagramas E-R";
 choices[14][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[14] = 3;
 units[14] = ['85', '86'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 4137. ";
 preguntaids[14] = 4137


//  Id pregunta: 5572 Año de creación de pregunta: 2007
 questions[15]= "16)  &iquest;Qu&eacute; sentencia JCL (Job Control Language) tiene como funci&oacute;n principal avisar al sistema de que comienza un nuevo trabajo en la corriente de entrada?";
 choices[15]= new Array();
 choices[15][0] = "La sentencia JOB.";
 choices[15][1] = "La sentencia JCLLIB.";
 choices[15][2] = "La sentencia PROC.";
 choices[15][3] = "La sentencia EXEC.";
 answers[15] = 0;
 units[15] = ['86'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 5572. ";
 preguntaids[15] = 5572


//  Id pregunta: 9418 Año de creación de pregunta: 2014
 questions[16]= "17)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[16]= new Array();
 choices[16][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[16][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[16][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[16][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[16] = 1;
 units[16] = ['86'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 9418. ";
 preguntaids[16] = 9418


//  Id pregunta: 4174 Año de creación de pregunta: 2006
 questions[17]= "18)  &iquest;C&oacute;mo se denomina la estrategia para obtener el diagrama de un DFD si existe un proceso que en funcion de un flujo de llegada determina la eleccion de uno o m&aacute;s flujos de informacion?";
 choices[17]= new Array();
 choices[17][0] = "An&aacute;lisis de transacci&oacute;n";
 choices[17][1] = "An&aacute;lisis de Transformaci&oacute;n";
 choices[17][2] = "An&aacute;lisis de flujo";
 choices[17][3] = "An&aacute;lisis de Informaci&oacute;n";
 answers[17] = 0;
 units[17] = ['85', '86'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 4174. ";
 preguntaids[17] = 4174


//  Id pregunta: 6972 Año de creación de pregunta: 2010
 questions[18]= "19)  Respecto a los diagramas de flujo de datos &iquest;Cu&aacute;l de las siguientes es falsa?";
 choices[18]= new Array();
 choices[18][0] = "Un diagrama de flujo de datos se compone de los siguientes elementos: entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[18][1] = "Un proceso como origen de datos puede hacer las funciones de un almacen de datos";
 choices[18][2] = "Los flujos de datos que comunican procesos con almacenes pueden ser de los tipos: consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[18][3] = "Son elementos a&ntilde;adidos al diagrama de flujo de datos para sistemas especiales los procesos de control y flujos de control";
 answers[18] = 1;
 units[18] = ['86'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 6972. TIC-B 2009 bloque desarrollo";
 preguntaids[18] = 6972


//  Id pregunta: 5731 Año de creación de pregunta: 2007
 questions[19]= "20)  En un entorno CASE integrado es correcto afirmar que";
 choices[19]= new Array();
 choices[19][0] = "para la integraci&oacute;n de las herramientas CASE es imprescindible disponer de un SGBD relacional.";
 choices[19][1] = "la arquitectura es de dos capas, la capa de interfaz y la capa de herramientas.";
 choices[19][2] = "el repositorio CASE establece un modelo de datos al que pueden acceder todas las herramientas del entorno.";
 choices[19][3] = "no ofrece ningun beneficio frente a un entorno CASE individual.";
 answers[19] = 2;
 units[19] = ['86'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 5731. ";
 preguntaids[19] = 5731


//  Id pregunta: 3977 Año de creación de pregunta: 2002
 questions[20]= "21)  Una entidad externa en un DFD:";
 choices[20]= new Array();
 choices[20][0] = "No debe figurar en el DFD";
 choices[20][1] = "No se tiene en consideraci&oacute;n";
 choices[20][2] = "Interactua con el sistema";
 choices[20][3] = "Se relaciona con otras entidades externas";
 answers[20] = 2;
 units[20] = ['85', '86'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3977. ";
 preguntaids[20] = 3977


//  Id pregunta: 6886 Año de creación de pregunta: 2010
 questions[21]= "22)  Con respecto a la orquestaci&oacute;n y coreograf&iacute;a de servicios, se&ntilde;ale la respuesta correcta:";
 choices[21]= new Array();
 choices[21][0] = "Un proceso se puede considerar una orquestaci&oacute;n de servicios cuando es controlado totalmente por una &uacute;nica entidad.";
 choices[21][1] = "Un proceso es una coreograf&iacute;a de servicios cuando define las colaboraciones entre cualquier tipo de aplicaciones componentes, independientemente del lenguaje o plataforma en el que est&eacute;n definidas las mismas.";
 choices[21][2] = "A y B son correctas.";
 choices[21][3] = "A y B son incorrectas.";
 answers[21] = 2;
 units[21] = ['86'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6886. ";
 preguntaids[21] = 6886


//  Id pregunta: 7477 Año de creación de pregunta: 2010
 questions[22]= "23)  Indique cu&aacute;l de las siguientes alternativas corresponde a las gu&iacute;as o manuales que componen la publicaci&oacute;n oficial de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3:";
 choices[22]= new Array();
 choices[22][0] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Procedimientos y Herramientas.";
 choices[22][1] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Gu&iacute;a de Procedimientos y Mecanismos.";
 choices[22][2] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Interfaces, T&eacute;cnicas y Pr&aacute;cticas.";
 choices[22][3] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, la Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[22] = 2;
 units[22] = ['86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 7477. Map 2005";
 preguntaids[22] = 7477


//  Id pregunta: 6256 Año de creación de pregunta: 2003
 questions[23]= "24)  A un sistema OLTP (On-line Transaction Processing) se le exige:";
 choices[23]= new Array();
 choices[23][0] = "Ante una transacci&oacute;n abortada, debe consolidar cualquier modificaci&oacute;n que se haya introducido con anterioridad a la interrupci&oacute;n.";
 choices[23][1] = "Los efectos de una transacci&oacute;n no deben ser observables por ninguna otra transacci&oacute;n hasta que la transacci&oacute;n originaria haya concluido.";
 choices[23][2] = "Si una transacci&oacute;n resulta abortada, no debe restituir el anterior estado v&aacute;lido de los datos.";
 choices[23][3] = "Una vez validada una transacci&oacute;n, las modificaciones introducidas en los datos compartidos sobrevivir&aacute;n salvo que se produzcan fallos futuros en el sistema.";
 answers[23] = 1;
 units[23] = ['86'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 6256. ";
 preguntaids[23] = 6256


//  Id pregunta: 3952 Año de creación de pregunta: 2002
 questions[24]= "25)  Respecto a los procesos, en un DFD:";
 choices[24]= new Array();
 choices[24][0] = "Cada proceso debe tener al menos una entrada y una salida";
 choices[24][1] = "Un proceso no puede ser fuente ni sumidero de informaci&oacute;n, s&oacute;lo transformarla";
 choices[24][2] = "Un proceso primitivo es aquel del que derivan en el tiempo otros procesos del sistema";
 choices[24][3] = "Las opciones a) y b) son correctas";
 answers[24] = 3;
 units[24] = ['85', '86'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3952. ";
 preguntaids[24] = 3952


//  Id pregunta: 7993 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[25]= new Array();
 choices[25][0] = "Estereotipos.";
 choices[25][1] = "Valores etiquetados.";
 choices[25][2] = "Artefactos.";
 choices[25][3] = "Restricciones.";
 answers[25] = 2;
 units[25] = ['85', '86'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7993. Examen TIC A2 2010";
 preguntaids[25] = 7993


//  Id pregunta: 4188 Año de creación de pregunta: 2006
 questions[26]= "27)  La base para el an&aacute;lisis de un sistema de tiempo real pasa por:";
 choices[26]= new Array();
 choices[26][0] = "La teor&iacute;a de los sistemas lineales.";
 choices[26][1] = "La especificaci&oacute;n de las pruebas de caja blanca.";
 choices[26][2] = "La sincronizaci&oacute;n.";
 choices[26][3] = "Ninguna de las anteriores.";
 answers[26] = 0;
 units[26] = ['86'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4188. ";
 preguntaids[26] = 4188


//  Id pregunta: 3973 Año de creación de pregunta: 2002
 questions[27]= "28)  Un m&eacute;todo orientado a los procesos es:";
 choices[27]= new Array();
 choices[27][0] = "Modelo Entidad-Relaci&oacute;n";
 choices[27][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[27][2] = "An&aacute;lisis de flujo de datos";
 choices[27][3] = "An&aacute;lisis relacional de datos (COOD)";
 answers[27] = 2;
 units[27] = ['85', '86'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3973. ";
 preguntaids[27] = 3973


//  Id pregunta: 8883 Año de creación de pregunta: 2013
 questions[28]= "29)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[28]= new Array();
 choices[28][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[28][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[28][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[28][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[28] = 3;
 units[28] = ['85', '86'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 8883. Examen AGE TIC A1 2011";
 preguntaids[28] = 8883


//  Id pregunta: 3934 Año de creación de pregunta: 2002
 questions[29]= "30)  Los s&iacute;mbolos &quot;(&quot; y &quot;)&quot; seg&uacute;n la notaci&oacute;n BNF representan, en el diccionario de datos:";
 choices[29]= new Array();
 choices[29][0] = "Iteraci&oacute;n";
 choices[29][1] = "Selecci&oacute;n";
 choices[29][2] = "Composici&oacute;n";
 choices[29][3] = "Opcionalidad";
 answers[29] = 3;
 units[29] = ['85', '86'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 3934. ";
 preguntaids[29] = 3934


//  Id pregunta: 6938 Año de creación de pregunta: 2010
 questions[30]= "31)  Entre las funciones de BPEL no se encuentra:";
 choices[30]= new Array();
 choices[30][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[30][1] = "Definir procesos de negocio.";
 choices[30][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[30][3] = "Orquestar servicios Web.";
 answers[30] = 0;
 units[30] = ['86'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 6938. ";
 preguntaids[30] = 6938


//  Id pregunta: 8374 Año de creación de pregunta: 2011
 questions[31]= "32)  En un DFD es falso que:";
 choices[31]= new Array();
 choices[31][0] = "Los flujos de datos no puede conectar dos almacenes directamente.";
 choices[31][1] = "Los flujos de datos no pueden ser continuos.";
 choices[31][2] = "Los flujos de datos de di&aacute;logo pueden comunicar procesos.";
 choices[31][3] = "Los flujos de datos de consulta parten de almacenes de datos.";
 answers[31] = 1;
 units[31] = ['86'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 8374. Examen UPM A2 2011";
 preguntaids[31] = 8374


//  Id pregunta: 4057 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[32][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[32][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[32][3] = "El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[32] = 2;
 units[32] = ['85', '86'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 4057. ";
 preguntaids[32] = 4057


//  Id pregunta: 3974 Año de creación de pregunta: 2002
 questions[33]= "34)  Un proceso en un DFD&hellip;:";
 choices[33]= new Array();
 choices[33][0] = "Puede descomponerse en otros procesos";
 choices[33][1] = "Siempre tiene un almac&eacute;n de datos asociado";
 choices[33][2] = "Puede estar aislado";
 choices[33][3] = "Puede equivaler a una entidad externa";
 answers[33] = 0;
 units[33] = ['85', '86'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3974. ";
 preguntaids[33] = 3974


//  Id pregunta: 6939 Año de creación de pregunta: 2010
 questions[34]= "35)  XPDL, XML Process Definition Language, dentro de los 5 interfaces que defini&oacute; la WfMC, podr&iacute;a encuadrarse dentro del interfaz n&uacute;mero:";
 choices[34]= new Array();
 choices[34][0] = "1";
 choices[34][1] = "2";
 choices[34][2] = "3";
 choices[34][3] = "4";
 answers[34] = 0;
 units[34] = ['86'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6939. ";
 preguntaids[34] = 6939


//  Id pregunta: 4177 Año de creación de pregunta: 2006
 questions[35]= "36)  En un DFD (Diagrama de Flujos de Datos) el diagrama que se representa mediante las entidades externas de entrada y salida y un solo proceso principal es el:";
 choices[35]= new Array();
 choices[35][0] = "Diagrama de bloques";
 choices[35][1] = "Diagrama de contexto";
 choices[35][2] = "Diagrama de primer nivel";
 choices[35][3] = "Diagrama b&aacute;sico";
 answers[35] = 1;
 units[35] = ['85', '86'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 4177. ";
 preguntaids[35] = 4177


//  Id pregunta: 8320 Año de creación de pregunta: 2011
 questions[36]= "37)  No todos los componentes de un Diagrama de Flujo de Datos (DFD) se pueden conectar mediante flujos de datos &iquest;qu&eacute; conexi&oacute;n de las siguientes est&aacute; permitida?";
 choices[36]= new Array();
 choices[36][0] = "Proceso con proceso";
 choices[36][1] = "Almac&eacute;n con almac&eacute;n";
 choices[36][2] = "Entidad Externa con Almac&eacute;n";
 choices[36][3] = "Entidad Externa con Entidad Externa";
 answers[36] = 0;
 units[36] = ['86'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 8320. Examen UPM A2 2011";
 preguntaids[36] = 8320


//  Id pregunta: 3925 Año de creación de pregunta: 2002
 questions[37]= "38)  Los almacenes de datos, en un DFD:";
 choices[37]= new Array();
 choices[37][0] = "pueden conectarse directamente con los terminadores, sin necesitar procesos intermedios";
 choices[37][1] = "por convenio, si el flujo hacia/desde el almac&eacute;n es etiquetado, se supone que representa a parte del registro";
 choices[37][2] = "aparecen desde el DFD de nivel 0 para dar importancia a los datos sobre los procesos que los manejan";
 choices[37][3] = "son modificados tanto en la lectura como en la escritura de datos";
 answers[37] = 1;
 units[37] = ['85', '86'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3925. ";
 preguntaids[37] = 3925


//  Id pregunta: 6018 Año de creación de pregunta: 2003
 questions[38]= "39)  Indique cual de los siguientes t&eacute;rminos NO corresponde a una metodolog&iacute;a de desarrollo de Sistemas:";
 choices[38]= new Array();
 choices[38][0] = "Metodolog&iacute;a MERISE.";
 choices[38][1] = "Metodolog&iacute;a SSADM.";
 choices[38][2] = "Metodolog&iacute;a METRICA.";
 choices[38][3] = "Metodolog&iacute;a SVOUGH.";
 answers[38] = 3;
 units[38] = ['86'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 6018. TIC B 2007";
 preguntaids[38] = 6018


//  Id pregunta: 9221 Año de creación de pregunta: 2014
 questions[39]= "40)  En el &aacute;mbito del dise&ntilde;o de sistemas software, la inyecci&oacute;n de dependencias";
 choices[39]= new Array();
 choices[39][0] = "aumenta el acoplamiento entre los m&oacute;dulos.";
 choices[39][1] = "es una forma de implementar el patr&oacute;n de Inversi&oacute;n de Control.";
 choices[39][2] = "facilita la detecci&oacute;n de errores (debugging) en tiempo de ejecuci&oacute;n";
 choices[39][3] = "es un patr&oacute;n de ataque que introduce (&ldquo;inyecta&rdquo;) c&oacute;digo malicioso para cambiar el curso de ejecuci&oacute;n.";
 answers[39] = 1;
 units[39] = ['85', '86'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 9221. Examen TIC A1 2013";
 preguntaids[39] = 9221


//  Id pregunta: 6895 Año de creación de pregunta: 2010
 questions[40]= "41)  En un diagrama de flujo de datos:";
 choices[40]= new Array();
 choices[40][0] = "Un almac&eacute;n puede realizar un flujo de datos tanto con otro almac&eacute;n como con un proceso.";
 choices[40][1] = "Un almac&eacute;n puede realizar un flujo de datos tanto con una entidad externa como con un proceso.";
 choices[40][2] = "Un almac&eacute;n s&oacute;lo puede realizar un flujo de datos con un proceso.";
 choices[40][3] = "Un proceso s&oacute;lo puede realizar un flujo de datos con un almac&eacute;n.";
 answers[40] = 2;
 units[40] = ['86'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 6895. TIC A 2009";
 preguntaids[40] = 6895


//  Id pregunta: 7051 Año de creación de pregunta: 2010
 questions[41]= "42)  Es un requisito de un sistema de tiempo real:";
 choices[41]= new Array();
 choices[41][0] = "Predecible.";
 choices[41][1] = "Modular.";
 choices[41][2] = "Sincronizaci&oacute;n y divisi&oacute;n en tareas.";
 choices[41][3] = "Todos lo son.";
 answers[41] = 3;
 units[41] = ['86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 7051. ";
 preguntaids[41] = 7051


//  Id pregunta: 7717 Año de creación de pregunta: 2010
 questions[42]= "43)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta en UML:";
 choices[42]= new Array();
 choices[42][0] = "El diagrama de secuencia es una t&eacute;cnica que muestra la configuraci&oacute;n de los elementos de procesamiento o nodos del sistema y los componentes software, procesos y objetos que se ejecutan sobre ellos.";
 choices[42][1] = "Un diagrama de componentes muestra la interacci&oacute;n (conjunto de mensajes que se intercambian entre los objetos) ordenada en una secuencia de tiempos.";
 choices[42][2] = "Un diagrama de secuencia muestra un grafo de componentes software conectados por relaciones de dependencia.";
 choices[42][3] = "Un diagrama de comunicaci&oacute;n muestra una interacci&oacute;n organizada sobre los objetos, sus enlaces y sus mensajes.";
 answers[42] = 3;
 units[42] = ['86'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 7717. Similar a Map 2007";
 preguntaids[42] = 7717


//  Id pregunta: 3915 Año de creación de pregunta: 2002
 questions[43]= "44)  Las funciones primitivas del modelo l&oacute;gico de procesos:";
 choices[43]= new Array();
 choices[43][0] = "Se pueden descomponer en m&oacute;dulos elementales de proceso";
 choices[43][1] = "Son procesos que no se descomponen m&aacute;s";
 choices[43][2] = "Pueden aparecer en todos los niveles del modelo, incluso en el diagrama de contexto";
 choices[43][3] = "Incluyen s&oacute;lo informaci&oacute;n sobre el modo de acceso a los datos del sistema";
 answers[43] = 1;
 units[43] = ['85', '86'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3915. ";
 preguntaids[43] = 3915


//  Id pregunta: 5684 Año de creación de pregunta: 2007
 questions[44]= "45)  &iquest;Qu&eacute; son las siguientes herramientas comerciales: DESIGNER de Oracle, EASY CASE de Evergreen, PREDICT CASE de Software AG y ROSE de Rational?";
 choices[44]= new Array();
 choices[44][0] = "Herramientas CASE de pruebas y generaci&oacute;n de c&oacute;digo.";
 choices[44][1] = "Herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[44][2] = "Herramientas para la m&eacute;trica de software.";
 choices[44][3] = "Herramientas CASE de an&aacute;lisis y dise&ntilde;o.";
 answers[44] = 3;
 units[44] = ['86'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 5684. ";
 preguntaids[44] = 5684


//  Id pregunta: 3910 Año de creación de pregunta: 2002
 questions[45]= "46)  La t&eacute;cnica conocida como Diagrama de Flujo de Datos, se utiliza:";
 choices[45]= new Array();
 choices[45][0] = "Para modelizaci&oacute;n de funciones";
 choices[45][1] = "S&oacute;lo para modelizaci&oacute;n de sistemas en tiempo real";
 choices[45][2] = "Para modelizaci&oacute;n de datos";
 choices[45][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[45] = 3;
 units[45] = ['85', '86'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3910. ";
 preguntaids[45] = 3910


//  Id pregunta: 6265 Año de creación de pregunta: 2003
 questions[46]= "47)  Cu&aacute;l de las siguientes es una caracter&iacute;stica de las Especificaciones que se obtienen al realizar un An&aacute;lisis estructurado:";
 choices[46]= new Array();
 choices[46][0] = "Redundantes";
 choices[46][1] = "Ambiguas";
 choices[46][2] = "Imposibles de mantener";
 choices[46][3] = "Particionadas";
 answers[46] = 3;
 units[46] = ['85', '86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 6265. ";
 preguntaids[46] = 6265


//  Id pregunta: 3924 Año de creación de pregunta: 2002
 questions[47]= "48)  Los almacenes de datos de un DFD:";
 choices[47]= new Array();
 choices[47][0] = "Representan datos en movimiento";
 choices[47][1] = "Respresentan datos almacenados en dispositivo de acceso r&aacute;pido";
 choices[47][2] = "Comprenden cualquier tipo de almac&eacute;n accesible por odenador ya sea local o remoto";
 choices[47][3] = "Pueden representar un caj&oacute;n de papeles, un archivador manual, un fichero o una base de datos";
 answers[47] = 3;
 units[47] = ['85', '86'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3924. ";
 preguntaids[47] = 3924


//  Id pregunta: 6257 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes opciones no es una herramienta de Dise&ntilde;o de Sistemas en Tiempo Real?";
 choices[48]= new Array();
 choices[48][0] = "DARTS.";
 choices[48][1] = "UML - RT.";
 choices[48][2] = "Rational Rose - RT.";
 choices[48][3] = "PERTS.";
 answers[48] = 0;
 units[48] = ['86'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6257. ";
 preguntaids[48] = 6257


//  Id pregunta: 5561 Año de creación de pregunta: 2007
 questions[49]= "50)  Los dos esquemas empleados en la recuperaci&oacute;n de errores en el procesamiento de transacciones son:";
 choices[49]= new Array();
 choices[49][0] = "Detecci&oacute;n y recuperaci&oacute;n.";
 choices[49][1] = "La prevenci&oacute;n y el ignorarlos.";
 choices[49][2] = "Sem&aacute;foros y monitores.";
 choices[49][3] = "Hacia delante y hacia atr&aacute;s.";
 answers[49] = 3;
 units[49] = ['86'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 5561. ";
 preguntaids[49] = 5561


//  Id pregunta: 3975 Año de creación de pregunta: 2002
 questions[50]= "51)  Un sistema de an&aacute;lisis de sistema en tiempo real puede ser:";
 choices[50]= new Array();
 choices[50][0] = "DOLMEN.";
 choices[50][1] = "DESIGN RT.";
 choices[50][2] = "RT-XML.";
 choices[50][3] = "DARTS.";
 answers[50] = 3;
 units[50] = ['86'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3975. ";
 preguntaids[50] = 3975


//  Id pregunta: 6148 Año de creación de pregunta: 2003
 questions[51]= "52)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?:";
 choices[51]= new Array();
 choices[51][0] = "Entidad externa";
 choices[51][1] = "Proceso";
 choices[51][2] = "Funci&oacute;n";
 choices[51][3] = "Almac&eacute;n de datos";
 answers[51] = 2;
 units[51] = ['85', '86'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 6148. Examen TIC A1 MAP 2007";
 preguntaids[51] = 6148


//  Id pregunta: 7856 Año de creación de pregunta: 2011
 questions[52]= "53)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[52]= new Array();
 choices[52][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[52][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[52][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[52][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[52] = 2;
 units[52] = ['86'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 7856. Examen TIC A1 2010";
 preguntaids[52] = 7856


//  Id pregunta: 9420 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;Qu&eacute; tipo de flujos de datos no existen?";
 choices[53]= new Array();
 choices[53][0] = "Flujos discretos y continuos";
 choices[53][1] = "Flujos de consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[53][2] = "Flujo de control";
 choices[53][3] = "Existen todos los tipos de flujos anteriores";
 answers[53] = 3;
 units[53] = ['86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 9420. ";
 preguntaids[53] = 9420


//  Id pregunta: 3958 Año de creación de pregunta: 2002
 questions[54]= "55)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[54]= new Array();
 choices[54][0] = "El dominio de la informaci&oacute;n";
 choices[54][1] = "La subdivisi&oacute;n del problema";
 choices[54][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[54][3] = "Los tres anteriores";
 answers[54] = 3;
 units[54] = ['84', '85', '86'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3958. ";
 preguntaids[54] = 3958


//  Id pregunta: 6937 Año de creación de pregunta: 2010
 questions[55]= "56)  Indique la afirmaci&oacute;n verdadera";
 choices[55]= new Array();
 choices[55][0] = "El resultado de una modelizaci&oacute;n de procesos en BPMN debe ser expresado en BPML, BPEL o XPDL.";
 choices[55][1] = "El resultado de una modelizaci&oacute;n de procesos en BPML debe ser expresado en BPMN, BPEL o XPDL.";
 choices[55][2] = "El resultado de una modelizaci&oacute;n de procesos en BPEL debe ser expresado en BPML, BPMN o XPDL.";
 choices[55][3] = "El resultado de una modelizaci&oacute;n de procesos en XPDL debe ser expresado en BPML, BPEL o BPMN.";
 answers[55] = 0;
 units[55] = ['86'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 6937. ";
 preguntaids[55] = 6937


//  Id pregunta: 7648 Año de creación de pregunta: 2010
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[56]= new Array();
 choices[56][0] = "Diagrama de actividades.";
 choices[56][1] = "Diagrama de clases.";
 choices[56][2] = "Diagrama de secuencia.";
 choices[56][3] = "Diagrama de frecuencia.";
 answers[56] = 3;
 units[56] = ['86'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 7648. Map 2006";
 preguntaids[56] = 7648


//  Id pregunta: 5640 Año de creación de pregunta: 2007
 questions[57]= "58)  &iquest;Que son el &quot;modelo cebolla&quot; y el &quot;modelo tostadora&quot;?";
 choices[57]= new Array();
 choices[57][0] = "Modelos de ciclo de vida de sistemas de informaci&oacute;n.";
 choices[57][1] = "Modelos de integraci&oacute;n de herramientas CASE.";
 choices[57][2] = "Modelos de diagrama de flujo de datos.";
 choices[57][3] = "Modelos de objetos para sistemas orientados al objeto.";
 answers[57] = 1;
 units[57] = ['86'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 5640. ";
 preguntaids[57] = 5640


//  Id pregunta: 4186 Año de creación de pregunta: 2006
 questions[58]= "59)  Un sistema operativo de tiempo real se caracteriza por:";
 choices[58]= new Array();
 choices[58][0] = "Manejo eficaz de interrupciones.";
 choices[58][1] = "Gesti&oacute;n de memoria real y no virtual.";
 choices[58][2] = "Bloqueo de los procesos cuando est&aacute;n en espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 choices[58][3] = "Todas las anteriores.";
 answers[58] = 3;
 units[58] = ['86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 4186. ";
 preguntaids[58] = 4186


//  Id pregunta: 4176 Año de creación de pregunta: 2006
 questions[59]= "60)  La direcci&oacute;n de los flujos entre almac&eacute;n y proceso en un DFD (Diagrama de Flujos de Datos) puede ser:";
 choices[59]= new Array();
 choices[59][0] = "De consulta";
 choices[59][1] = "De actualizaci&oacute;n";
 choices[59][2] = "De di&aacute;logo";
 choices[59][3] = "Todas las anteriores";
 answers[59] = 3;
 units[59] = ['85', '86'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 4176. ";
 preguntaids[59] = 4176


//  Id pregunta: 6255 Año de creación de pregunta: 2003
 questions[60]= "61)  &iquest;Cu&aacute;les son las caracter&iacute;sticas b&aacute;sicas que definen una transacci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "Atomicidad, Consistencia, Aislamiento y Durabilidad.";
 choices[60][1] = "Atomicidad, Durabilidad, Racionalidad y Consistencia.";
 choices[60][2] = "Autenticaci&oacute;n, Confidencialidad, Integridad y Disponibilidad.";
 choices[60][3] = "Temporalidad, Consistencia, Aislamiento y Atomicidad.";
 answers[60] = 0;
 units[60] = ['86'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 6255. ";
 preguntaids[60] = 6255


//  Id pregunta: 6250 Año de creación de pregunta: 2003
 questions[61]= "62)  Un modelado de un Sistema de Informaci&oacute;n se considera completo si se realiza desde los siguientes puntos de vista:";
 choices[61]= new Array();
 choices[61][0] = "Funcional, Est&aacute;tico y Din&aacute;mico";
 choices[61][1] = "Informaci&oacute;n, Procesos e Interfaces de Usuario";
 choices[61][2] = "Est&aacute;tico, Din&aacute;mico y Relacional";
 choices[61][3] = "Funcional, Informaci&oacute;n y Procesos";
 answers[61] = 0;
 units[61] = ['86'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6250. ";
 preguntaids[61] = 6250


//  Id pregunta: 7848 Año de creación de pregunta: 2011
 questions[62]= "63)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[62]= new Array();
 choices[62][0] = "YAWL.";
 choices[62][1] = "ETL.";
 choices[62][2] = "XPDL.";
 choices[62][3] = "BPEL.";
 answers[62] = 1;
 units[62] = ['86'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 7848. Examen TIC A1 2010";
 preguntaids[62] = 7848


//  Id pregunta: 4165 Año de creación de pregunta: 2006
 questions[63]= "64)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[63]= new Array();
 choices[63][0] = "Pueden ser permanentes o temporales";
 choices[63][1] = "No crean informaci&oacute;n";
 choices[63][2] = "Son accesibles desde entidades externas.";
 choices[63][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[63] = 2;
 units[63] = ['85', '86'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 4165. ";
 preguntaids[63] = 4165


//  Id pregunta: 9413 Año de creación de pregunta: 2014
 questions[64]= "65)  &iquest;Cu&aacute;l es el orden cronol&oacute;gico m&aacute;s acertado?";
 choices[64]= new Array();
 choices[64][0] = "BPM, SOA, EAI, ESB";
 choices[64][1] = "EAI, BPM, SOA, ESB";
 choices[64][2] = "EAI, SOA, BPM, ESB";
 choices[64][3] = "BPM, EAI, SOA, ESB";
 answers[64] = 1;
 units[64] = ['86'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 9413. ";
 preguntaids[64] = 9413


//  Id pregunta: 7577 Año de creación de pregunta: 2010
 questions[65]= "66)  &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[65]= new Array();
 choices[65][0] = "Diagramas de casos de uso.";
 choices[65][1] = "Diagramas de estados.";
 choices[65][2] = "Diagramas de interacci&oacute;n.";
 choices[65][3] = "Diagramas de flujo de datos.";
 answers[65] = 2;
 units[65] = ['86'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 7577. Map 2006";
 preguntaids[65] = 7577


//  Id pregunta: 6252 Año de creación de pregunta: 2003
 questions[66]= "67)  Con respecto a los diccionarios de datos:";
 choices[66]= new Array();
 choices[66][0] = "Los diccionarios Activos permiten que los programadores puedan definir datos dentro sus programas y que estos no est&eacute;n en el diccionario.";
 choices[66][1] = "Los diccionarios Pasivos fuerzan a los programadores a utilizar las definiciones del diccionario.";
 choices[66][2] = "A y B son ciertas";
 choices[66][3] = "A y B son falsas";
 answers[66] = 3;
 units[66] = ['85', '86'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 6252. ";
 preguntaids[66] = 6252


//  Id pregunta: 4169 Año de creación de pregunta: 2006
 questions[67]= "68)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[67]= new Array();
 choices[67][0] = "Caja blanca";
 choices[67][1] = "Caja negra";
 choices[67][2] = "Integraci&oacute;n";
 choices[67][3] = "Aceptaci&oacute;n";
 answers[67] = 0;
 units[67] = ['85', '86'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4169. ";
 preguntaids[67] = 4169


//  Id pregunta: 6251 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no forma parte del conjunto de t&eacute;cnicas del an&aacute;lisis estructurado?";
 choices[68]= new Array();
 choices[68][0] = "Diagrama de Transici&oacute;n de Estados (DTE)";
 choices[68][1] = "Diagrama de Flujos de Datos (DFD)";
 choices[68][2] = "Diagrama de Flujos de Procesos (DFP)";
 choices[68][3] = "Diagrama de Flujos de Control (DFC)";
 answers[68] = 2;
 units[68] = ['85', '86'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6251. ";
 preguntaids[68] = 6251


//  Id pregunta: 4187 Año de creación de pregunta: 2006
 questions[69]= "70)  DARTS es:";
 choices[69]= new Array();
 choices[69][0] = "Un entorno de desarrollo J2EE.";
 choices[69][1] = "Un entorno de desarrollo .NET.";
 choices[69][2] = "Una extensi&oacute;n del An&aacute;lisis y Dise&ntilde;o Estructurados para el dise&ntilde;o de sistemas en tiempo real.";
 choices[69][3] = "Una metodolog&iacute;a para el dise&ntilde;o de Data Marts.";
 answers[69] = 2;
 units[69] = ['86'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 4187. ";
 preguntaids[69] = 4187


//  Id pregunta: 4061 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a las conexiones mediante flujos de datos en un DFD (Diagrama de Flujo de Datos) es correcta?";
 choices[70]= new Array();
 choices[70][0] = "En un DFD los almacenes se pueden conectar con procesos, pero no con otros almacenes ni con entidades externas.";
 choices[70][1] = "En un DFD los almacenes de datos se pueden conectar con procesos, almacenes pero no con entidades externas.";
 choices[70][2] = "En un DFD las entidades externas se pueden conectar con procesos y almacenes y entidades externas.";
 choices[70][3] = "En un DFD las entidades externas se pueden conectar con procesos y con otras entidades externas pero no con almacenes.";
 answers[70] = 0;
 units[70] = ['85', '86'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 4061. ";
 preguntaids[70] = 4061


//  Id pregunta: 4078 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest;Qu&eacute; contendr&aacute; el diagrama de contexto en un DFD?";
 choices[71]= new Array();
 choices[71][0] = "Entidades Extermas, Procesos, Flujos de Datos";
 choices[71][1] = "Almacenes de Datos, Prodesos, Entidades Extrenas.";
 choices[71][2] = "Entidades Externas, Un solo Proceso, Flujos de Datos.";
 choices[71][3] = "Entidades Extermas, Procesos, Flujos de Datos, Almacenes de Datos";
 answers[71] = 2;
 units[71] = ['85', '86'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 4078. EXAMEN CASTILLA LA MANCHA";
 preguntaids[71] = 4078


//  Id pregunta: 6206 Año de creación de pregunta: 2003
 questions[72]= "73)  &iquest;Qu&eacute; tipos de herramientas CASE son las que tienen las capacidades de control de versiones, trazabilidad de requisitos y an&aacute;lisis de impacto?";
 choices[72]= new Array();
 choices[72][0] = "Las herramientas de prueba.";
 choices[72][1] = "Las herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[72][2] = "Las herramientas de an&aacute;lisis y dise&ntilde;o.";
 choices[72][3] = "Las herramientas de pantallas.";
 answers[72] = 1;
 units[72] = ['86'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 6206. Examen TIC A Castilla La Mancha 2007";
 preguntaids[72] = 6206


//  Id pregunta: 4175 Año de creación de pregunta: 2006
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de an&aacute;lisis orientado al flujo de datos?";
 choices[73]= new Array();
 choices[73][0] = "El Diagrama de Flujo de Datos (DFD)";
 choices[73][1] = "El Modelo Entidad/Relaci&oacute;n (E/R) de Peter Chen";
 choices[73][2] = "La Historia de la Vida de las Entidades (HVE)";
 choices[73][3] = "El Diagrama de Estructura de Datos (DED)";
 answers[73] = 0;
 units[73] = ['85', '86'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 4175. ";
 preguntaids[73] = 4175


//  Id pregunta: 6961 Año de creación de pregunta: 2010
 questions[74]= "75)  Respecto a los DFD: &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera?";
 choices[74]= new Array();
 choices[74][0] = "No es necesario que los nombres en los almacenes de datos y los de las entidades coincidan";
 choices[74][1] = "Cada almac&eacute;n de los DFD debe corresponder con una entidad, o una relaci&oacute;n o una combinaci&oacute;n de ambos";
 choices[74][2] = "En el caso de utilizar un &uacute;nico diccionario de datos las entradas deber&aacute;n coincidir";
 choices[74][3] = "Deben existir procesos en el DFD para crear y eliminar ocurrencias de cada una de las entidades del modelo de datos";
 answers[74] = 3;
 units[74] = ['86'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 6961. TIC-B 2009 bloque desarrollo";
 preguntaids[74] = 6961


