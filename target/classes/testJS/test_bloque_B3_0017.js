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
//  Id pregunta: 6241 Año de creación de pregunta: 2003
 questions[0]= "1)  &iquest;Cu&aacute;l no es, seg&uacute;n Pressman, en el modelo de especificaciones de requisitos software, uno de los objetivos a cumplir?";
 choices[0]= new Array();
 choices[0][0] = "Describir lo que el cliente quiere.";
 choices[0][1] = "Determinar, junto con el cliente, la tecnolog&iacute;a a utilizar";
 choices[0][2] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o de software";
 choices[0][3] = "Definir un conjunto de requisitos que una vez el sistema construido se puedan validar";
 answers[0] = 1;
 units[0] = ['84'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 6241. ";
 preguntaids[0] = 6241


//  Id pregunta: 6261 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de la t&eacute;cnica del prototipado?";
 choices[1]= new Array();
 choices[1][0] = "Hace part&iacute;cipes a los usuarios del desarrollo";
 choices[1][1] = "Facilita la continua revisi&oacute;n del sistema por parte de los usuarios";
 choices[1][2] = "Desemboca en sistemas muy flexibles a cambios posteriores";
 choices[1][3] = "En general, reduce el tiempo de los desarrollos posteriores";
 answers[1] = 2;
 units[1] = ['90'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 6261. ";
 preguntaids[1] = 6261


//  Id pregunta: 6246 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes opciones no es una metodolog&iacute;a estructurada orientada a procesos?";
 choices[2]= new Array();
 choices[2][0] = "DeMarco";
 choices[2][1] = "Gane &amp; Sarson";
 choices[2][2] = "Yourdon / Constantine";
 choices[2][3] = "Warnier-Orr";
 answers[2] = 3;
 units[2] = ['84'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 6246. ";
 preguntaids[2] = 6246


//  Id pregunta: 6213 Año de creación de pregunta: 2003
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas se utilizan en la actividad ASI 7 (Elaboraci&oacute;n del Modelo de Procesos) seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3?";
 choices[3]= new Array();
 choices[3][0] = "Diagrama de Flujo de Datos y Matricial.";
 choices[3][1] = "Casos de Uso y Catalogaci&oacute;n.";
 choices[3][2] = "Normalizaci&oacute;n y Prototipado.";
 choices[3][3] = "C&aacute;lculo de Accesos L&oacute;gicos y Diagrama de Clases.";
 answers[3] = 0;
 units[3] = ['91'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 6213. Examen TIC A Castilla La Mancha 2007";
 preguntaids[3] = 6213


//  Id pregunta: 6247 Año de creación de pregunta: 2003
 questions[4]= "5)  En el modelo E/R, las entidades d&eacute;biles:";
 choices[4]= new Array();
 choices[4][0] = "Dependen de la existencia de otro tipo de entidad";
 choices[4][1] = "S&oacute;lo pueden tener un &uacute;nico atributo de clave propio";
 choices[4][2] = "Tienen atributos de clave propios, pero coinciden con los de la entidad fuerte de la que dependen";
 choices[4][3] = "Se representan mediante un rect&aacute;ngulo de trazo discontinuo";
 answers[4] = 0;
 units[4] = ['85'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 6247. ";
 preguntaids[4] = 6247


//  Id pregunta: 6250 Año de creación de pregunta: 2003
 questions[5]= "6)  Un modelado de un Sistema de Informaci&oacute;n se considera completo si se realiza desde los siguientes puntos de vista:";
 choices[5]= new Array();
 choices[5][0] = "Funcional, Est&aacute;tico y Din&aacute;mico";
 choices[5][1] = "Informaci&oacute;n, Procesos e Interfaces de Usuario";
 choices[5][2] = "Est&aacute;tico, Din&aacute;mico y Relacional";
 choices[5][3] = "Funcional, Informaci&oacute;n y Procesos";
 answers[5] = 0;
 units[5] = ['86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 6250. ";
 preguntaids[5] = 6250


//  Id pregunta: 6260 Año de creación de pregunta: 2003
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[6]= new Array();
 choices[6][0] = "El fan-out de un m&oacute;dulo es usado como medida de complejidad.";
 choices[6][1] = "El fan-out es el n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 choices[6][2] = "El fan-out de un m&oacute;dulo es una medida de reusabilidad.";
 choices[6][3] = "Todas las anteriores son ciertas.";
 answers[6] = 0;
 units[6] = ['89'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 6260. ";
 preguntaids[6] = 6260


//  Id pregunta: 6288 Año de creación de pregunta: 2003
 questions[7]= "8)  En relaci&oacute;n al modelo de ciclo de vida de un sistema de informaci&oacute;n NO se puede afirmar:";
 choices[7]= new Array();
 choices[7][0] = "Es el conjunto etapas por las que atraviesa el sistema desde su concepci&oacute;n hasta su retirada del servicio";
 choices[7][1] = "Los modelos de ciclo de vida tradicionales, entre los que se engloban el modelo en cascada y los basados en prototipos, son los de m&aacute;s amplia utilizaci&oacute;n";
 choices[7][2] = "Los modelos de ciclo vida basados en transformaciones se adaptan bien a cualquier proyecto.";
 choices[7][3] = "En la pr&aacute;ctica no se suelen seguir modelos en forma pura, sino los que de acuerdo a las peculiaridades del sistema y la experiencia del jefe proyecto se pueden incorporar aspectos de otros modelos.";
 answers[7] = 2;
 units[7] = ['82'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6288. ";
 preguntaids[7] = 6288


//  Id pregunta: 6147 Año de creación de pregunta: 2003
 questions[8]= "9)  Seg&uacute;n M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes productos NO se obtienen del proceso de an&aacute;lisis de sistemas de informaci&oacute;n (ASI) orientado a objetos?:";
 choices[8]= new Array();
 choices[8][0] = "Dise&ntilde;o de clases";
 choices[8][1] = "Descripci&oacute;n de interfaces entre subsistemas";
 choices[8][2] = "Modelo de clases de an&aacute;lisis";
 choices[8][3] = "An&aacute;lisis de la realizaci&oacute;n de los casos de uso";
 answers[8] = 0;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 6147. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6147


//  Id pregunta: 6263 Año de creación de pregunta: 2003
 questions[9]= "10)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[9]= new Array();
 choices[9][0] = "Debilidades";
 choices[9][1] = "Amenazas";
 choices[9][2] = "Fortalezas";
 choices[9][3] = "Oportunidades";
 answers[9] = 3;
 units[9] = ['83'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6263. ";
 preguntaids[9] = 6263


//  Id pregunta: 6203 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;En qu&eacute; modelo de ciclo de vida cada ciclo comienza identificando los objetivos, las alternativas y las restricciones del ciclo?";
 choices[10]= new Array();
 choices[10][0] = "Modelo incremental.";
 choices[10][1] = "Modelo en espiral.";
 choices[10][2] = "Modelo en cascada.";
 choices[10][3] = "Modelo fuente.";
 answers[10] = 1;
 units[10] = ['82'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 6203. Examen TIC A Castilla La Mancha 2007";
 preguntaids[10] = 6203


//  Id pregunta: 6239 Año de creación de pregunta: 2003
 questions[11]= "12)  Los diagramas de estructura resultantes de la aplicaci&oacute;n de la metodolog&iacute;a de Jackson (JSP) se fundamentan en tres estructuras b&aacute;sicas. Indique de las siguientes cu&aacute;l NO es una de las tres estructuras b&aacute;sicas:";
 choices[11]= new Array();
 choices[11][0] = "Exclusi&oacute;n.";
 choices[11][1] = "Secuencia.";
 choices[11][2] = "Repetici&oacute;n.";
 choices[11][3] = "Selecci&oacute;n.";
 answers[11] = 0;
 units[11] = ['86'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 6239. Examen TIC A Castilla La Mancha 2007";
 preguntaids[11] = 6239


//  Id pregunta: 6211 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Cu&aacute;l es el orden correcto en el que se realizan los pasos en un proceso de reingenier&iacute;a?";
 choices[12]= new Array();
 choices[12][0] = "Ingenier&iacute;a directa, ingenier&iacute;a inversa, an&aacute;lisis de c&oacute;digo, redise&ntilde;o y restructuraci&oacute;n.";
 choices[12][1] = "An&aacute;lisis de c&oacute;digo, redise&ntilde;o, ingenier&iacute;a inversa, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[12][2] = "An&aacute;lisis de c&oacute;digo, ingenier&iacute;a inversa, redise&ntilde;o, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[12][3] = "An&aacute;lisis de c&oacute;digo, reestructuraci&oacute;n, ingenier&iacute;a inversa, redise&ntilde;o e ingenier&iacute;a directa.";
 answers[12] = 3;
 units[12] = ['96'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 6211. Examen TIC A Castilla La Mancha 2007";
 preguntaids[12] = 6211


//  Id pregunta: 6284 Año de creación de pregunta: 2007
 questions[13]= "14)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[13]= new Array();
 choices[13][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[13][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[13][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[13][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[13] = 1;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 6284. ";
 preguntaids[13] = 6284


//  Id pregunta: 6251 Año de creación de pregunta: 2003
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no forma parte del conjunto de t&eacute;cnicas del an&aacute;lisis estructurado?";
 choices[14]= new Array();
 choices[14][0] = "Diagrama de Transici&oacute;n de Estados (DTE)";
 choices[14][1] = "Diagrama de Flujos de Datos (DFD)";
 choices[14][2] = "Diagrama de Flujos de Procesos (DFP)";
 choices[14][3] = "Diagrama de Flujos de Control (DFC)";
 answers[14] = 2;
 units[14] = ['85', '86'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 6251. ";
 preguntaids[14] = 6251


//  Id pregunta: 6217 Año de creación de pregunta: 2003
 questions[15]= "16)  En un dise&ntilde;o de Software es deseable que exista entre los distintos m&oacute;dulos que lo componen:";
 choices[15]= new Array();
 choices[15][0] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&aacute;xima.";
 choices[15][1] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&iacute;nima.";
 choices[15][2] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&aacute;xima.";
 choices[15][3] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&iacute;nima.";
 answers[15] = 2;
 units[15] = ['89'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 6217. Examen TIC A Castilla La Mancha 2007";
 preguntaids[15] = 6217


//  Id pregunta: 6244 Año de creación de pregunta: 2003
 questions[16]= "17)  &iquest;Cu&aacute;les son los requisitos, seg&uacute;n Dorfman, que debe cumplir una Metodolog&iacute;a?";
 choices[16]= new Array();
 choices[16][0] = "Documentada, Repetitiva, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[16][1] = "Documentada, Repetible, Ense&ntilde;able, Flexible, Validada y Apropiada";
 choices[16][2] = "Documentada, Repetible, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[16][3] = "Documentada, Repetible, Extensa, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 answers[16] = 2;
 units[16] = ['84'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6244. ";
 preguntaids[16] = 6244


//  Id pregunta: 6267 Año de creación de pregunta: 2003
 questions[17]= "18)  Dentro de los distintos elementos de UML, &iquest;cu&aacute;l de los siguientes es un elemento estructural?";
 choices[17]= new Array();
 choices[17][0] = "Clase.";
 choices[17][1] = "Interacci&oacute;n.";
 choices[17][2] = "M&aacute;quina de estados.";
 choices[17][3] = "Paquete.";
 answers[17] = 0;
 units[17] = ['89'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6267. ";
 preguntaids[17] = 6267


//  Id pregunta: 6265 Año de creación de pregunta: 2003
 questions[18]= "19)  Cu&aacute;l de las siguientes es una caracter&iacute;stica de las Especificaciones que se obtienen al realizar un An&aacute;lisis estructurado:";
 choices[18]= new Array();
 choices[18][0] = "Redundantes";
 choices[18][1] = "Ambiguas";
 choices[18][2] = "Imposibles de mantener";
 choices[18][3] = "Particionadas";
 answers[18] = 3;
 units[18] = ['85', '86'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 6265. ";
 preguntaids[18] = 6265


//  Id pregunta: 6286 Año de creación de pregunta: 2007
 questions[19]= "20)  Cu&aacute;l de las siguientes actividades no pertenece al proceso Mantenimiento de Sistema de Informaci&oacute;n";
 choices[19]= new Array();
 choices[19][0] = "Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[19][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[19][2] = "Registro de la petici&oacute;n";
 choices[19][3] = "Planificaci&oacute;n de la petici&oacute;n";
 answers[19] = 3;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 6286. ";
 preguntaids[19] = 6286


//  Id pregunta: 6280 Año de creación de pregunta: 2007
 questions[20]= "21)  En qu&eacute; proceso no se utiliza la t&eacute;cnica de Diagrama de Clases";
 choices[20]= new Array();
 choices[20][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[20][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[20][2] = "Estudio de Viabilidad del Sistema";
 choices[20][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 answers[20] = 3;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 6280. ";
 preguntaids[20] = 6280


//  Id pregunta: 6204 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Qu&eacute; es un diagrama de Gantt?";
 choices[21]= new Array();
 choices[21][0] = "Es un diagrama de barras en forma de tabla donde se hace una referencia cruzada entre las tareas y los tiempos de duraci&oacute;n de las mismas.";
 choices[21][1] = "Es un cuadro o tabla formado por dos columnas, en la primera se se&ntilde;alan las actividades y en la segunda se indican las fechas de finalizaci&oacute;n.";
 choices[21][2] = "Partiendo de la descomposici&oacute;n de un proyecto en actividades, estas ocurren entre dos sucesos. Se representa mediante un grafo en donde las actividades se reflejan mediante arcos y los sucesos mediante v&eacute;rtices.";
 choices[21][3] = "Es una matriz de referencias cruzadas entre los miembros del equipo de proyecto y su dedicaci&oacute;n al proyecto.";
 answers[21] = 0;
 units[21] = ['83'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6204. Examen TIC A Castilla La Mancha 2007";
 preguntaids[21] = 6204


//  Id pregunta: 6277 Año de creación de pregunta: 2007
 questions[22]= "23)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[22]= new Array();
 choices[22][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[22][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[22][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[22][3] = "Especificaciones de Implantaci&oacute;n";
 answers[22] = 2;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 6277. ";
 preguntaids[22] = 6277


//  Id pregunta: 6209 Año de creación de pregunta: 2003
 questions[23]= "24)  Indique la secuencia correcta de actividades en que se divide el proceso de Mantenimiento del Sistema de Informaci&oacute;n de M&eacute;trica V3:";
 choices[23]= new Array();
 choices[23][0] = "An&aacute;lisis de la Petici&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[23][1] = "An&aacute;lisis de la Petici&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n.";
 choices[23][2] = "Registro de la Petici&oacute;n -&gt; An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n &gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[23][3] = "An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n.";
 answers[23] = 2;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 6209. Examen TIC A Castilla La Mancha 2007";
 preguntaids[23] = 6209


//  Id pregunta: 6272 Año de creación de pregunta: 2003
 questions[24]= "25)  Entre los beneficios del Ajuste Dimensional encontramos:";
 choices[24]= new Array();
 choices[24][0] = "Mayores costes.";
 choices[24][1] = "Tiempo de respuesta inconsistente.";
 choices[24][2] = "Integridad de datos.";
 choices[24][3] = "Interfaz de usuario m&aacute;s compleja.";
 answers[24] = 2;
 units[24] = ['95'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6272. ";
 preguntaids[24] = 6272


//  Id pregunta: 6285 Año de creación de pregunta: 2007
 questions[25]= "26)  La actividad &quot;Especificaci&oacute;n detallada del plan de aseguramiento de calidad&quot; en qu&eacute; proceso se realiza";
 choices[25]= new Array();
 choices[25][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[25][1] = "Estudio de Viabilidad del Sistema";
 choices[25][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[25][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[25] = 0;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 6285. ";
 preguntaids[25] = 6285


//  Id pregunta: 6243 Año de creación de pregunta: 2003
 questions[26]= "27)  La t&eacute;cnica PIECES define las categor&iacute;as que deben estudiar conjuntamente el analista y el usuario. &iquest;Cu&aacute;l no es un conjunto valido de categor&iacute;as seg&uacute;n PIECES?";
 choices[26]= new Array();
 choices[26][0] = "Rendimiento, Econom&iacute;a y Control";
 choices[26][1] = "Control, Eficiencia y Servicios";
 choices[26][2] = "Informaci&oacute;n, Eficiencia y Servicios";
 choices[26][3] = "Informaci&oacute;n, Precio y Rendimiento";
 answers[26] = 3;
 units[26] = ['84'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6243. ";
 preguntaids[26] = 6243


//  Id pregunta: 6258 Año de creación de pregunta: 2003
 questions[27]= "28)  En los diagramas de estructura, pertenecientes al dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes opciones no es un tipo de cupla (comunicaci&oacute;n entre m&oacute;dulos)?";
 choices[27]= new Array();
 choices[27][0] = "Cupla de Datos.";
 choices[27][1] = "Cupla de Funciones.";
 choices[27][2] = "Cupla Modificada.";
 choices[27][3] = "Cupla de Resultados.";
 answers[27] = 1;
 units[27] = ['89'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 6258. ";
 preguntaids[27] = 6258


//  Id pregunta: 6212 Año de creación de pregunta: 2003
 questions[28]= "29)  Seg&uacute;n M&eacute;trica V3, &iquest;Cu&aacute;l de los siguientes procesos NO est&aacute; incluido en el proceso de Desarrollo de Sistemas de Informaci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[28][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[28][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[28][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[28] = 2;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 6212. Examen TIC A Castilla La Mancha 2007";
 preguntaids[28] = 6212


//  Id pregunta: 6283 Año de creación de pregunta: 2007
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de los siguientes elementos es una pr&aacute;ctica utilizada en m&eacute;trica 3";
 choices[29]= new Array();
 choices[29][0] = "Diagrama de Clases";
 choices[29][1] = "Diagrama de Componentes";
 choices[29][2] = "Revisi&oacute;n T&eacute;cnica";
 choices[29][3] = "Normalizaci&oacute;n";
 answers[29] = 2;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6283. ";
 preguntaids[29] = 6283


//  Id pregunta: 6275 Año de creación de pregunta: 2003
 questions[30]= "31)  Marcar la opci&oacute;n incorrecta. El tesauro o diccionario de descriptores es un conjunto predefinido de palabras claves que muestran las siguientes relaciones:";
 choices[30]= new Array();
 choices[30][0] = "Relaciones de equivalencia o preferencia";
 choices[30][1] = "Relaciones jer&aacute;rquicas";
 choices[30][2] = "Relaciones asociativas o de afinidad";
 choices[30][3] = "Relaciones instrumentales";
 answers[30] = 3;
 units[30] = ['100'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 6275. ";
 preguntaids[30] = 6275


//  Id pregunta: 6155 Año de creación de pregunta: 2003
 questions[31]= "32)  En el modelo COCOMO, la estimaci&oacute;n del esfuerzo anual b&aacute;sico para el mantenimiento de los sistemas de informaci&oacute;n, (MM)am, conocido el esfuerzo estimado de desarrollo, (MM)d, es:";
 choices[31]= new Array();
 choices[31][0] = "(MM)am =1.8 (DSI) (MM)d";
 choices[31][1] = "(MM)am =2.0 (ADF) (MM)d";
 choices[31][2] = "(MM)am = 3.2(FSP) (MM)d";
 choices[31][3] = "(MM)am = 1.0 (ACT) (MM)d";
 answers[31] = 3;
 units[31] = ['94'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6155. Examen TIC A1 MAP 2007";
 preguntaids[31] = 6155


//  Id pregunta: 6245 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de Desarrollo Orientada a Objetos?";
 choices[32]= new Array();
 choices[32][0] = "Merise";
 choices[32][1] = "Booch";
 choices[32][2] = "OMT";
 choices[32][3] = "RUP";
 answers[32] = 0;
 units[32] = ['84'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6245. ";
 preguntaids[32] = 6245


//  Id pregunta: 6279 Año de creación de pregunta: 2007
 questions[33]= "34)  En qu&eacute; actividad de proceso An&aacute;lisis del Sistema de Informaci&oacute;n participan los &quot;Usuarios expertos&quot;";
 choices[33]= new Array();
 choices[33][0] = "Elaboraci&oacute;n del modelo de procesos";
 choices[33][1] = "Elaboraci&oacute;n del modelo de datos";
 choices[33][2] = "An&aacute;lisis de los casos de uso";
 choices[33][3] = "Definici&oacute;n del sistema";
 answers[33] = 1;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 6279. ";
 preguntaids[33] = 6279


//  Id pregunta: 6210 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[34]= new Array();
 choices[34][0] = "La prueba funcional o de caja negra se centra en el estudio de la especificaci&oacute;n del hardware.";
 choices[34][1] = "Una prueba funcional bien elegida es la que reduce el n&uacute;mero de otros casos necesarios para que la prueba sea razonable.";
 choices[34][2] = "En la prueba funcional debemos ejecutar todas las posibilidades de funcionamiento y todas las combinaciones de entradas y salidas.";
 choices[34][3] = "La prueba funcional nunca se fija en las entradas ni en las salidas, sino en el funcionamiento interno del programa.";
 answers[34] = 1;
 units[34] = ['84'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6210. Examen TIC A Castilla La Mancha 2007";
 preguntaids[34] = 6210


//  Id pregunta: 6128 Año de creación de pregunta: 2003
 questions[35]= "36)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[35]= new Array();
 choices[35][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 choices[35][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n";
 choices[35][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de ejecuci&oacute;n";
 choices[35][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 answers[35] = 2;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6128. Examen TIC A1 MAP 2007";
 preguntaids[35] = 6128


//  Id pregunta: 6289 Año de creación de pregunta: 2003
 questions[36]= "37)  El modelo Code and Fix:";
 choices[36]= new Array();
 choices[36][0] = "Modelo b&aacute;sico usado en los primeros tiempos desarrollo de SW compuesto por 2 fases, primero codificar y despu&eacute;s resolver los problemas del c&oacute;digo";
 choices[36][1] = "Tras varios ajustes, el c&oacute;digo se vuelve poco estructurado y los siguientes ajustes son muy costosos.";
 choices[36][2] = "Con frecuencia se ajustaba poco a las necesidades de los usuarios.";
 choices[36][3] = "Todas las anteriores son correctas";
 answers[36] = 3;
 units[36] = ['82'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 6289. ";
 preguntaids[36] = 6289


//  Id pregunta: 6257 Año de creación de pregunta: 2003
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes opciones no es una herramienta de Dise&ntilde;o de Sistemas en Tiempo Real?";
 choices[37]= new Array();
 choices[37][0] = "DARTS.";
 choices[37][1] = "UML - RT.";
 choices[37][2] = "Rational Rose - RT.";
 choices[37][3] = "PERTS.";
 answers[37] = 0;
 units[37] = ['86'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 6257. ";
 preguntaids[37] = 6257


//  Id pregunta: 6253 Año de creación de pregunta: 2003
 questions[38]= "39)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[38]= new Array();
 choices[38][0] = "Estado, Comportamiento e Identidad";
 choices[38][1] = "Comportamiento, Identidad y Relaciones";
 choices[38][2] = "Estado, Identidad y Relaciones";
 choices[38][3] = "Todas son falsas";
 answers[38] = 0;
 units[38] = ['85'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 6253. ";
 preguntaids[38] = 6253


//  Id pregunta: 6216 Año de creación de pregunta: 2003
 questions[39]= "40)  En un DFD, &iquest;Cu&aacute;l es la diferencia entre un digrama de contexto y un diagrama de nivel 0?";
 choices[39]= new Array();
 choices[39][0] = "El diagrama de contexto no pertenece al DFD sino que es previo al mismo, el cual comienza con el diagrama de nivel 1.";
 choices[39][1] = "El diagrama de nivel 0 no existe, ya que los niveles empiezan en el 1, con lo cual no tiene sentido la comparaci&oacute;n.";
 choices[39][2] = "La &uacute;nica diferencia entre un diagrama de contexto y un diagrama de nivel 0 es que &eacute;ste &uacute;ltimo carece de entidades externas.";
 choices[39][3] = "No hay ninguna diferencia entre ambos pues se llama diagrama de contexto al diagrama de nivel 0 de un DFD.";
 answers[39] = 3;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 6216. Examen TIC A Castilla La Mancha 2007";
 preguntaids[39] = 6216


//  Id pregunta: 6282 Año de creación de pregunta: 2007
 questions[40]= "41)  La tarea &quot;Diagn&oacute;stico del Sistema Actual&quot; a qu&eacute; actividad del procesos Planificaci&oacute;n de Sistemas de Informaci&oacute;n pertenece";
 choices[40]= new Array();
 choices[40][0] = "Estudio de la informaci&oacute;n relevante";
 choices[40][1] = "Estudio de los Sistemas de Informaci&oacute;n Actuales";
 choices[40][2] = "Identificaci&oacute;n de Requisitos";
 choices[40][3] = "Dise&ntilde;o del modelo de Sistemas de Informaci&oacute;n";
 answers[40] = 3;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 6282. ";
 preguntaids[40] = 6282


//  Id pregunta: 6269 Año de creación de pregunta: 2003
 questions[41]= "42)  En M&eacute;trica v.3 la actividad &ldquo;Revisi&oacute;n de la formaci&oacute;n a usuarios finales&rdquo; del Aseguramiento de la Calidad corresponde al proceso:";
 choices[41]= new Array();
 choices[41][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[41][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[41][2] = "Implantaci&oacute;n y aceptaci&oacute;n del Sistema";
 choices[41][3] = "Mantenimiento del Sistema de informaci&oacute;n";
 answers[41] = 1;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6269. ";
 preguntaids[41] = 6269


//  Id pregunta: 6248 Año de creación de pregunta: 2003
 questions[42]= "43)  En el modelo E/R, las relaciones d&eacute;biles:";
 choices[42]= new Array();
 choices[42][0] = "Relacionan una entidad fuerte con dos o m&aacute;s entidades, fuertes o d&eacute;biles";
 choices[42][1] = "Relacionan dos entidades d&eacute;biles";
 choices[42][2] = "Relacionan una entidad d&eacute;bil con una fuerte";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 2;
 units[42] = ['85'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 6248. ";
 preguntaids[42] = 6248


//  Id pregunta: 6270 Año de creación de pregunta: 2003
 questions[43]= "44)  Los costes de calidad se pueden dividir en costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos. Entre los costes de prevenci&oacute;n se incluyen:";
 choices[43]= new Array();
 choices[43][0] = "Planificaci&oacute;n de la calidad";
 choices[43][1] = "Calibrado y mantenimiento del equipo";
 choices[43][2] = "Reparaci&oacute;n";
 choices[43][3] = "An&aacute;lisis de las modalidades de fallos";
 answers[43] = 0;
 units[43] = ['92'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6270. ";
 preguntaids[43] = 6270


//  Id pregunta: 6156 Año de creación de pregunta: 2003
 questions[44]= "45)  &iquest;Qu&eacute; propiedad no es inherente a la orientaci&oacute;n a objetos?";
 choices[44]= new Array();
 choices[44][0] = "Polimorfismo.";
 choices[44][1] = "Volatilidad.";
 choices[44][2] = "Herencia.";
 choices[44][3] = "Encapsulaci&oacute;n.";
 answers[44] = 1;
 units[44] = ['89'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 6156. Examen TIC A1 MAP 2007";
 preguntaids[44] = 6156


//  Id pregunta: 6264 Año de creación de pregunta: 2003
 questions[45]= "46)  Cu&aacute;l de las siguientes no se considera una regla b&aacute;sica en las reuniones de Brainstorming:";
 choices[45]= new Array();
 choices[45][0] = "Ninguna cr&iacute;tica";
 choices[45][1] = "Ser convencional";
 choices[45][2] = "Cuantas m&aacute;s ideas mejor";
 choices[45][3] = "Apoyarse en otras ideas";
 answers[45] = 1;
 units[45] = ['84'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6264. ";
 preguntaids[45] = 6264


//  Id pregunta: 6259 Año de creación de pregunta: 2003
 questions[46]= "47)  El acoplamiento por estampado implica:";
 choices[46]= new Array();
 choices[46][0] = "Comunicaci&oacute;n entre dos m&oacute;dulos a trav&eacute;s de un tercer m&oacute;dulo intermedio.";
 choices[46][1] = "El aislamiento de los m&oacute;dulos respecto de una estructura de datos reservada.";
 choices[46][2] = "Comunicaci&oacute;n entre m&oacute;dulos haciendo referencia a la misma estructura de datos.";
 choices[46][3] = "Ninguna de las anteriores es correcta.";
 answers[46] = 2;
 units[46] = ['89'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 6259. ";
 preguntaids[46] = 6259


//  Id pregunta: 6268 Año de creación de pregunta: 2003
 questions[47]= "48)  &iquest;Cual de las siguientes no se considera un beneficio de construir prototipos en el proceso del software?";
 choices[47]= new Array();
 choices[47][0] = "Mejora en la usabilidad del sistema";
 choices[47][1] = "Aumento del esfuerzo de desarrollo";
 choices[47][2] = "Mejora en la calidad del dise&ntilde;o";
 choices[47][3] = "Mejor acoplamiento entre el sistema y las necesidades del usuario";
 answers[47] = 1;
 units[47] = ['90'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6268. ";
 preguntaids[47] = 6268


//  Id pregunta: 6157 Año de creación de pregunta: 2003
 questions[48]= "49)  Seg&uacute;n el m&eacute;todo del c&aacute;mino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[48]= new Array();
 choices[48][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone de todos los recursos necesarios";
 choices[48][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[48][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar la duraci&oacute;n total del proyecto.";
 choices[48][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[48] = 3;
 units[48] = ['83'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6157. Examen TIC A1 MAP 2007";
 preguntaids[48] = 6157


//  Id pregunta: 6215 Año de creación de pregunta: 2003
 questions[49]= "50)  Las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en tres grupos: Actividades de Inicio de Proyecto (GPI), Actividades de Seguimiento y Control (GPS) y Actividades de Finalizaci&oacute;n del Proyecto. &iquest;Qu&eacute; actividades est&aacute;n dentro del grupo GPI?";
 choices[49]= new Array();
 choices[49][0] = "Asignaci&oacute;n detallada de tareas y Comunicaci&oacute;n al equipo del proyecto.";
 choices[49][1] = "Estimaci&oacute;n del Esfuerzo y Planificaci&oacute;n del Proyecto.";
 choices[49][2] = "Petici&oacute;n de Cambios de Requisitos y Estimaci&oacute;n del Esfuerzo y Planificaci&oacute;n de la Soluci&oacute;n.";
 choices[49][3] = "Actualizaci&oacute;n de la Planificaci&oacute;n y Reuniones de Seguimiento.";
 answers[49] = 1;
 units[49] = ['91'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 6215. Examen TIC A Castilla La Mancha 2007";
 preguntaids[49] = 6215


//  Id pregunta: 6255 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Cu&aacute;les son las caracter&iacute;sticas b&aacute;sicas que definen una transacci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "Atomicidad, Consistencia, Aislamiento y Durabilidad.";
 choices[50][1] = "Atomicidad, Durabilidad, Racionalidad y Consistencia.";
 choices[50][2] = "Autenticaci&oacute;n, Confidencialidad, Integridad y Disponibilidad.";
 choices[50][3] = "Temporalidad, Consistencia, Aislamiento y Atomicidad.";
 answers[50] = 0;
 units[50] = ['86'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 6255. ";
 preguntaids[50] = 6255


//  Id pregunta: 6214 Año de creación de pregunta: 2003
 questions[51]= "52)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Aseguramiento de la Calidad.";
 choices[51][1] = "Seguridad.";
 choices[51][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[51][3] = "Gesti&oacute;n de Proyectos.";
 answers[51] = 3;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 6214. Examen TIC A Castilla La Mancha 2007";
 preguntaids[51] = 6214


//  Id pregunta: 6173 Año de creación de pregunta: 2003
 questions[52]= "53)  Cu&aacute;l de los siguientes es un modelo de estimaci&oacute;n de proyectos software:";
 choices[52]= new Array();
 choices[52][0] = "CMMI";
 choices[52][1] = "COCOMO";
 choices[52][2] = "M&eacute;todo de Cox";
 choices[52][3] = "El plan de SQA";
 answers[52] = 1;
 units[52] = ['94'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6173. Examen TIC A Castilla La Mancha 2007";
 preguntaids[52] = 6173


//  Id pregunta: 6254 Año de creación de pregunta: 2003
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[53]= new Array();
 choices[53][0] = "RMI";
 choices[53][1] = "JINI";
 choices[53][2] = "EJB";
 choices[53][3] = "CORBA";
 answers[53] = 3;
 units[53] = ['85'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 6254. ";
 preguntaids[53] = 6254


//  Id pregunta: 6290 Año de creación de pregunta: 2003
 questions[54]= "55)  El m&aacute;ximo n&uacute;mero de fases permitidas en el modelo de ciclo de vida en cascada es:";
 choices[54]= new Array();
 choices[54][0] = "5";
 choices[54][1] = "7";
 choices[54][2] = "9";
 choices[54][3] = "En realidad, el n&uacute;mero de fases es irrelevante, lo que caracteriza al modelo es la secuencialidad entre &eacute;stas.";
 answers[54] = 3;
 units[54] = ['82'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6290. ";
 preguntaids[54] = 6290


//  Id pregunta: 6273 Año de creación de pregunta: 2003
 questions[55]= "56)  En el modelo EFQM:";
 choices[55]= new Array();
 choices[55][0] = "El subcriterio 6A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[55][1] = "El subcriterio 6B tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[55][2] = "El subcriterio 7A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[55][3] = "El subcriterio 7B tiene un peso del 75% del total de los puntos del criterio 6";
 answers[55] = 1;
 units[55] = ['98'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 6273. ";
 preguntaids[55] = 6273


//  Id pregunta: 6287 Año de creación de pregunta: 2003
 questions[56]= "57)  Todo ciclo de vida debe cubrir unos objetivos b&aacute;sicos. Indicar la FALSA:";
 choices[56]= new Array();
 choices[56][0] = "Definir las actividades a realizar y el orden";
 choices[56][1] = "Definir las t&eacute;cnicas a utilizar para la realizaci&oacute;n de las actividades";
 choices[56][2] = "Asegurar la consistencia con el resto de sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 choices[56][3] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto.";
 answers[56] = 1;
 units[56] = ['82'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 6287. ";
 preguntaids[56] = 6287


//  Id pregunta: 6218 Año de creación de pregunta: 2003
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[57]= new Array();
 choices[57][0] = "Interrelaciones";
 choices[57][1] = "Sometimiento";
 choices[57][2] = "Generalizaci&oacute;n";
 choices[57][3] = "Agregaci&oacute;n";
 answers[57] = 1;
 units[57] = ['85'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6218. Examen TIC A Castilla La Mancha 2007";
 preguntaids[57] = 6218


//  Id pregunta: 6249 Año de creación de pregunta: 2003
 questions[58]= "59)  Se&ntilde;ale la respuesta verdadera con respecto a los atributos en el modelo E/R:";
 choices[58]= new Array();
 choices[58][0] = "Cada atributo toma valores de un dominio diferenciado y no compartido";
 choices[58][1] = "Al atributo que identifica un&iacute;vocamente cada una de las ocurrencias de la entidad principal se le denomina atributo fuerte";
 choices[58][2] = "Existen atributos simples, mixtos y compuestos";
 choices[58][3] = "Existen atributos monovalorados y multivalorados";
 answers[58] = 3;
 units[58] = ['85'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6249. ";
 preguntaids[58] = 6249


//  Id pregunta: 6278 Año de creación de pregunta: 2007
 questions[59]= "60)  En qu&eacute; proceso se obtiene el producto &quot;Requisitos de Implantaci&oacute;n&quot;";
 choices[59]= new Array();
 choices[59][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[59][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[59][2] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[59][3] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 answers[59] = 0;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 6278. ";
 preguntaids[59] = 6278


//  Id pregunta: 6148 Año de creación de pregunta: 2003
 questions[60]= "61)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?:";
 choices[60]= new Array();
 choices[60][0] = "Entidad externa";
 choices[60][1] = "Proceso";
 choices[60][2] = "Funci&oacute;n";
 choices[60][3] = "Almac&eacute;n de datos";
 answers[60] = 2;
 units[60] = ['85', '86'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 6148. Examen TIC A1 MAP 2007";
 preguntaids[60] = 6148


//  Id pregunta: 6252 Año de creación de pregunta: 2003
 questions[61]= "62)  Con respecto a los diccionarios de datos:";
 choices[61]= new Array();
 choices[61][0] = "Los diccionarios Activos permiten que los programadores puedan definir datos dentro sus programas y que estos no est&eacute;n en el diccionario.";
 choices[61][1] = "Los diccionarios Pasivos fuerzan a los programadores a utilizar las definiciones del diccionario.";
 choices[61][2] = "A y B son ciertas";
 choices[61][3] = "A y B son falsas";
 answers[61] = 3;
 units[61] = ['85', '86'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6252. ";
 preguntaids[61] = 6252


//  Id pregunta: 6208 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest;Cu&aacute;l es el objetivo de la Gesti&oacute;n de Configuraci&oacute;n del Software?";
 choices[62]= new Array();
 choices[62][0] = "Gestionar de forma autom&aacute;tica la creaci&oacute;n, modificaci&oacute;n y borrado de usuarios en un sistema de informaci&oacute;n.";
 choices[62][1] = "Mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realizan cambios incontrolados.";
 choices[62][2] = "Permitir que los programadores de un sistema de informaci&oacute;n conozcan en todo momento los cambios de la configuraci&oacute;n f&iacute;sica que se vaya produciendo a nivel de sistema operativo.";
 choices[62][3] = "Permitir gestionar los recursos que se deidcan a cada tarea de desarrollo de los distintos m&oacute;dulos del sistema.";
 answers[62] = 1;
 units[62] = ['84'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6208. Examen TIC A Castilla La Mancha 2007";
 preguntaids[62] = 6208


//  Id pregunta: 6256 Año de creación de pregunta: 2003
 questions[63]= "64)  A un sistema OLTP (On-line Transaction Processing) se le exige:";
 choices[63]= new Array();
 choices[63][0] = "Ante una transacci&oacute;n abortada, debe consolidar cualquier modificaci&oacute;n que se haya introducido con anterioridad a la interrupci&oacute;n.";
 choices[63][1] = "Los efectos de una transacci&oacute;n no deben ser observables por ninguna otra transacci&oacute;n hasta que la transacci&oacute;n originaria haya concluido.";
 choices[63][2] = "Si una transacci&oacute;n resulta abortada, no debe restituir el anterior estado v&aacute;lido de los datos.";
 choices[63][3] = "Una vez validada una transacci&oacute;n, las modificaciones introducidas en los datos compartidos sobrevivir&aacute;n salvo que se produzcan fallos futuros en el sistema.";
 answers[63] = 1;
 units[63] = ['86'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 6256. ";
 preguntaids[63] = 6256


//  Id pregunta: 6262 Año de creación de pregunta: 2003
 questions[64]= "65)  No se considera una t&eacute;cnica o herramienta para la creaci&oacute;n de prototipos:";
 choices[64]= new Array();
 choices[64][0] = "T&eacute;cnicas de Cuarta Generaci&oacute;n";
 choices[64][1] = "Componentes de Software Reutilizables";
 choices[64][2] = "Modelado L&oacute;gico de Datos";
 choices[64][3] = "Especificaciones Formales y Entornos para Prototipos";
 answers[64] = 2;
 units[64] = ['90'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 6262. ";
 preguntaids[64] = 6262


//  Id pregunta: 6138 Año de creación de pregunta: 2003
 questions[65]= "66)  Se&ntilde;ale cual de los siguientes NO es un modelo de ciclo de vida del software:";
 choices[65]= new Array();
 choices[65][0] = "Cascada";
 choices[65][1] = "Espiral";
 choices[65][2] = "Prototipado";
 choices[65][3] = "Escalera";
 answers[65] = 3;
 units[65] = ['82'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 6138. Examen TIC A1 MAP 2007";
 preguntaids[65] = 6138


//  Id pregunta: 6175 Año de creación de pregunta: 2003
 questions[66]= "67)  La norma ISO 9001 cuando se desarrolla, implementa y mejora la eficacia de un sistema de gesti&oacute;n de calidad promueve un enfoque:";
 choices[66]= new Array();
 choices[66][0] = "Basado en procesos.";
 choices[66][1] = "Basado en tareas.";
 choices[66][2] = "Basado en el usuario.";
 choices[66][3] = "Basado en recursos.";
 answers[66] = 0;
 units[66] = ['92'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 6175. Examen TIC A Castilla La Mancha 2007";
 preguntaids[66] = 6175


//  Id pregunta: 6206 Año de creación de pregunta: 2003
 questions[67]= "68)  &iquest;Qu&eacute; tipos de herramientas CASE son las que tienen las capacidades de control de versiones, trazabilidad de requisitos y an&aacute;lisis de impacto?";
 choices[67]= new Array();
 choices[67][0] = "Las herramientas de prueba.";
 choices[67][1] = "Las herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[67][2] = "Las herramientas de an&aacute;lisis y dise&ntilde;o.";
 choices[67][3] = "Las herramientas de pantallas.";
 answers[67] = 1;
 units[67] = ['86'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 6206. Examen TIC A Castilla La Mancha 2007";
 preguntaids[67] = 6206


//  Id pregunta: 6242 Año de creación de pregunta: 2003
 questions[68]= "69)  En lo referente a las t&eacute;cnicas de sesiones JAD y JRP. Es cierto que:";
 choices[68]= new Array();
 choices[68][0] = "Son t&eacute;cnicas que promueven la cooperaci&oacute;n entre los usuarios y los desarrolladores para lograr que ambas partes compartan una visi&oacute;n com&uacute;n";
 choices[68][1] = "JRP se usa para el dise&ntilde;o conjunto de aplicaciones";
 choices[68][2] = "JAD se usa para la planificaci&oacute;n de requisitos";
 choices[68][3] = "Todas son ciertas";
 answers[68] = 0;
 units[68] = ['84'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6242. ";
 preguntaids[68] = 6242


//  Id pregunta: 6205 Año de creación de pregunta: 2003
 questions[69]= "70)  Indique cu&aacute;l de las siguientes afirmaciones sobre el m&eacute;todo de planificaci&oacute;n PERT (Program Evaluation and Review Technique) es FALSA:";
 choices[69]= new Array();
 choices[69][0] = "El m&eacute;todo PERT parte de la descomposici&oacute;n del proyecto en una serie de obras parciales o actividades.";
 choices[69][1] = "Para representar las diferentes actividades en que se descompone un proyecto, as&iacute; como sus correspondientes sucesos, se utiliza una estructura de grafo. Los arcos del grafo representan las actividades y los v&eacute;rtices los sucesos.";
 choices[69][2] = "Es la forma habitual de presentar el plan de ejecuci&oacute;n de un proyecto, recogiendo en las filas la relaci&oacute;n de actividades a realizar y en las columnas la escala de tiempos que se est&aacute; manejando.";
 choices[69][3] = "Un suceso es un acontecimiento, un punto en el tiempo, una fecha en el calendario. El suceso no consume recursos, s&oacute;lo indica el principio o el fin de una actividad o de un conjunto de actividades.";
 answers[69] = 2;
 units[69] = ['83'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 6205. Examen TIC A Castilla La Mancha 2007";
 preguntaids[69] = 6205


//  Id pregunta: 6271 Año de creación de pregunta: 2003
 questions[70]= "71)  En el modelo de calidad del software de McCall, cu&aacute;l de los siguientes es un factor de explotaci&oacute;n u operaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Mantenibilidad";
 choices[70][1] = "Flexibilidad";
 choices[70][2] = "Usabilidad";
 choices[70][3] = "Reusabilidad";
 answers[70] = 2;
 units[70] = ['93'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 6271. ";
 preguntaids[70] = 6271


//  Id pregunta: 6202 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida no permite aprovechar las ventajas de la tecnolog&iacute;a de objetos?";
 choices[71]= new Array();
 choices[71][0] = "Modelo de agrupamiento.";
 choices[71][1] = "Modelo de cascada";
 choices[71][2] = "Modelo fuente";
 choices[71][3] = "Modelo remolino.";
 answers[71] = 1;
 units[71] = ['82'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 6202. Examen TIC A Castilla La Mancha 2007";
 preguntaids[71] = 6202


//  Id pregunta: 6207 Año de creación de pregunta: 2003
 questions[72]= "73)  Seg&uacute;n M&eacute;trica V3, &iquest;dentro de qu&eacute; perfil de participantes se encuentra recogido el Grupo de Aseguramiento de Calidad?";
 choices[72]= new Array();
 choices[72][0] = "Jefe de Proyecto.";
 choices[72][1] = "Programador.";
 choices[72][2] = "Analista.";
 choices[72][3] = "Consultor.";
 answers[72] = 2;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 6207. Examen TIC A Castilla La Mancha 2007";
 preguntaids[72] = 6207


//  Id pregunta: 6266 Año de creación de pregunta: 2003
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de los Lenguajes Orientados a Objetos?";
 choices[73]= new Array();
 choices[73][0] = "Tipificaci&oacute;n fuerte";
 choices[73][1] = "Paso de mensajes";
 choices[73][2] = "Monotarea";
 choices[73][3] = "Manejo de excepciones";
 answers[73] = 2;
 units[73] = ['85'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 6266. ";
 preguntaids[73] = 6266


//  Id pregunta: 6281 Año de creación de pregunta: 2007
 questions[74]= "75)  En qu&eacute; proceso se realiza la actividad de seguridad Selecci&oacute;n del Equipo de Seguridad";
 choices[74]= new Array();
 choices[74][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[74][1] = "Estudio de Viabilidad del Sistema";
 choices[74][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[74][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[74] = 1;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 6281. ";
 preguntaids[74] = 6281


