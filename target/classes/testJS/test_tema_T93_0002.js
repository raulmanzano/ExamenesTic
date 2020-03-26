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
//  Id pregunta: 4232 Año de creación de pregunta: 2006
 questions[0]= "1)  Los criterios relacionados con la Reusabilidad son:";
 choices[0]= new Array();
 choices[0][0] = "Generalidad, Modularidad, Autodescriptivo, Independencia entornos HW y SW.";
 choices[0][1] = "Expandibilidad, Generalidad, Autodescriptivo, Modularidad.";
 choices[0][2] = "Generalidad, Modularidad, Autodescriptivo, Simplicidad.";
 choices[0][3] = "Expandibilidad, Generalidad, Autodescriptivo, Instrumentaci&oacute;n.";
 answers[0] = 0;
 units[0] = ['93'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 4232. ";
 preguntaids[0] = 4232


//  Id pregunta: 4070 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Cu&aacute;l no es un factor de calidad seg&uacute;n Mc Call?";
 choices[1]= new Array();
 choices[1][0] = "Fiabilidad";
 choices[1][1] = "Coste";
 choices[1][2] = "Facilidad de mantenimiento";
 choices[1][3] = "Seguridad";
 answers[1] = 1;
 units[1] = ['92', '93'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 4070. ";
 preguntaids[1] = 4070


//  Id pregunta: 7339 Año de creación de pregunta: 2010
 questions[2]= "3)  Dentro de las t&eacute;cnicas para medir la complejidad del software NO se encuentra:";
 choices[2]= new Array();
 choices[2][0] = "La t&eacute;cnica de McCabe";
 choices[2][1] = "La t&eacute;cnica de McCall";
 choices[2][2] = "La t&eacute;cnica de Halstead";
 choices[2][3] = "La t&eacute;cnica de Bang";
 answers[2] = 1;
 units[2] = ['93'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7339. ";
 preguntaids[2] = 7339


//  Id pregunta: 5574 Año de creación de pregunta: 2007
 questions[3]= "4)  Los requisitos que debe cumplir un sistema para evitar que sus errores de funcionamiento tengan consecuencias en las personas o equipos, se denominan requisitos de:";
 choices[3]= new Array();
 choices[3][0] = "Fiabilidad.";
 choices[3][1] = "Operaci&oacute;n.";
 choices[3][2] = "Salvaguarda.";
 choices[3][3] = "Verificaci&oacute;n.";
 answers[3] = 0;
 units[3] = ['93'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 5574. ";
 preguntaids[3] = 5574


//  Id pregunta: 6384 Año de creación de pregunta: 2003
 questions[4]= "5)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[4]= new Array();
 choices[4][0] = "400 puntos sobre 1000";
 choices[4][1] = "500 puntos sobre 1000";
 choices[4][2] = "700 puntos sobre 1000";
 choices[4][3] = "900 puntos sobre 1000";
 answers[4] = 1;
 units[4] = ['93'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 6384. Examen 2006 JCYL";
 preguntaids[4] = 6384


//  Id pregunta: 7334 Año de creación de pregunta: 2010
 questions[5]= "6)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[5]= new Array();
 choices[5][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[5][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[5][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[5][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[5] = 1;
 units[5] = ['93'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7334. ";
 preguntaids[5] = 7334


//  Id pregunta: 7610 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes es una m&eacute;trica de productividad en la generaci&oacute;n de software seg&uacute;n Pressman?";
 choices[6]= new Array();
 choices[6][0] = "N&uacute;meros de defectos por miles de l&iacute;neas de c&oacute;digo.";
 choices[6][1] = "Tiempo medio de cambio.";
 choices[6][2] = "Puntos de funci&oacute;n.";
 choices[6][3] = "N&uacute;mero de p&eacute;rdidas de integridad.";
 answers[6] = 2;
 units[6] = ['93'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7610. Map 2006";
 preguntaids[6] = 7610


//  Id pregunta: 7641 Año de creación de pregunta: 2010
 questions[7]= "8)  En relaci&oacute;n a las m&eacute;tricas y evaluaci&oacute;n de la Calidad del software, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[7]= new Array();
 choices[7][0] = "La t&eacute;cnica de Halstead es una m&eacute;trica de la fiabilidad del software.";
 choices[7][1] = "Las m&eacute;tricas de complejidad eval&uacute;an la facilidad de mantenimiento del software.";
 choices[7][2] = "El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de productividad del software.";
 choices[7][3] = "COCOMO (Constructive Cost Model) es un modelo de estimaci&oacute;n algor&iacute;tmico.";
 answers[7] = 0;
 units[7] = ['93'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 7641. Map 2006";
 preguntaids[7] = 7641


//  Id pregunta: 4236 Año de creación de pregunta: 2006
 questions[8]= "9)  El modelo de calidad EFQM";
 choices[8]= new Array();
 choices[8][0] = "Considera 8 criterios y 30 subcriterios";
 choices[8][1] = "Considera 9 criterios y 32 subcriterios";
 choices[8][2] = "Considera 9 criterios y 40 subcriterios";
 choices[8][3] = "El modelo de calidad EFQM no considera criterios sino factores";
 answers[8] = 1;
 units[8] = ['93'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 4236. ";
 preguntaids[8] = 4236


//  Id pregunta: 6320 Año de creación de pregunta: 2003
 questions[9]= "10)  La m&eacute;trica BANG:";
 choices[9]= new Array();
 choices[9][0] = "Es una m&eacute;trica de producto propuesta por De Marco, como indicador de funcionalidad entregada al usuario";
 choices[9][1] = "La medici&oacute;n se realiza sobre una especificaci&oacute;n de requisitos documentada mediante an&aacute;lisis estructurado y DFD";
 choices[9][2] = "Para formular esta m&eacute;trica se analizan las m&eacute;tricas primitivas, basadas en los elementos del DFD, del diccionario de datos y del modelo de datos";
 choices[9][3] = "Todas son correctas.";
 answers[9] = 3;
 units[9] = ['93'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6320. ";
 preguntaids[9] = 6320


//  Id pregunta: 5551 Año de creación de pregunta: 2007
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad, seg&uacute;n el modelo de McCall?";
 choices[10]= new Array();
 choices[10][0] = "Integridad.";
 choices[10][1] = "Completitud.";
 choices[10][2] = "Fiabilidad.";
 choices[10][3] = "Facilidad de mantenimiento.";
 answers[10] = 1;
 units[10] = ['93'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 5551. ";
 preguntaids[10] = 5551


//  Id pregunta: 4126 Año de creación de pregunta: 2004
 questions[11]= "12)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[11]= new Array();
 choices[11][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[11][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[11][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = 0;
 units[11] = ['92', '93'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4126. ";
 preguntaids[11] = 4126


//  Id pregunta: 4071 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;C&uacute;al NO es un factor de McCall de revisi&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "Flexibilidad";
 choices[12][1] = "Usabilidad";
 choices[12][2] = "Verificabilidad";
 choices[12][3] = "Mantenibilidad";
 answers[12] = 1;
 units[12] = ['92', '93'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 4071. ";
 preguntaids[12] = 4071


//  Id pregunta: 6397 Año de creación de pregunta: 2003
 questions[13]= "14)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[13]= new Array();
 choices[13][0] = "Liderazgo";
 choices[13][1] = "Oportunidad";
 choices[13][2] = "Satisfacci&oacute;n del cliente";
 choices[13][3] = "Satisfacer los requisitos";
 answers[13] = 0;
 units[13] = ['93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 6397. Examen 2006 JCYL";
 preguntaids[13] = 6397


//  Id pregunta: 5473 Año de creación de pregunta: 2007
 questions[14]= "15)  Se denomina &ldquo;Partici&oacute;n equivalente&rdquo; a:";
 choices[14]= new Array();
 choices[14][0] = "Una t&eacute;cnica de programaci&oacute;n modular donde el dominio de la aplicaci&oacute;n se subdivide en &aacute;reas funcionales de aproximadamente el mismo tama&ntilde;o";
 choices[14][1] = "Una t&eacute;cnica de pruebas de &ldquo;caja negra&rdquo; que divide el dominio de un programa en clases de datos de las que se pueden derivar casos de prueba.";
 choices[14][2] = "Una t&eacute;cnica de dise&ntilde;o orientado a objetos para mejorar la estructura de los programas reemplazando la herencia con mecanismos de delegaci&oacute;n.";
 choices[14][3] = "Una t&eacute;cnica de gesti&oacute;n del desarrollo de proyectos para la atribuci&oacute;n de la responsabilidad sobre las pruebas de la aplicaci&oacute;n";
 answers[14] = 1;
 units[14] = ['93'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 5473. ";
 preguntaids[14] = 5473


//  Id pregunta: 7183 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;En que t&eacute;cnica  de pruebas del software se utiliza la complejidad ciclom&aacute;tica?";
 choices[15]= new Array();
 choices[15][0] = "Prueba de caja negra";
 choices[15][1] = "Prueba del camino b&aacute;sico";
 choices[15][2] = "Prueba de la partici&oacute;n equivalente";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = 1;
 units[15] = ['93'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7183. Castilla La Mancha 2009";
 preguntaids[15] = 7183


//  Id pregunta: 5961 Año de creación de pregunta: 2007
 questions[16]= "17)  En relaci&oacute;n a las m&eacute;tricas y evaluaci&oacute;n de la Calidad del software, &iquest;cu&aacute;l de las siguientes afirmaciones NO escierta?";
 choices[16]= new Array();
 choices[16][0] = "La t&eacute;cnica de Halstead es una m&eacute;trica de la fiabilidad del software";
 choices[16][1] = "Las m&eacute;tricas de complejidad eval&uacute;an la facilidad de mantenimiento del software";
 choices[16][2] = "El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de productividad del software";
 choices[16][3] = "COCOMO (Constructive Cost Model) es un modelo de estimaci&oacute;n algor&iacute;tmico";
 answers[16] = 0;
 units[16] = ['93'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 5961. ";
 preguntaids[16] = 5961


//  Id pregunta: 7338 Año de creación de pregunta: 2010
 questions[17]= "18)  La principal diferencia entre la t&eacute;cnica de los Puntos de Funci&oacute;n (PF's) y los PF's Mark II es:";
 choices[17]= new Array();
 choices[17][0] = "Los PF's Mark II utilizan el concepto de transacci&oacute;n l&oacute;gica";
 choices[17][1] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros)";
 choices[17][2] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros), m&aacute;s el concepto de transacci&oacute;n l&oacute;gica";
 choices[17][3] = "Los PF's Mark II utilizan 5 elementos (Entradas, Salidas, Consultas, Ficheros e Interfaces)";
 answers[17] = 0;
 units[17] = ['93'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 7338. ";
 preguntaids[17] = 7338


//  Id pregunta: 7335 Año de creación de pregunta: 2010
 questions[18]= "19)  En el modelo COCOMO un proyecto semiacoplado hace referencia a:";
 choices[18]= new Array();
 choices[18][0] = "Aquel en el que el esfuerzo y el coste del proyecto se calcula en funci&oacute;n de las LOC y adem&aacute;s a&ntilde;ade una evaluaci&oacute;n subjetiva";
 choices[18][1] = "Proyectos peque&ntilde;os y sencillos con un equipo de trabajo estable, con buena experiencia y que cuenten con unos requerimientos poco r&iacute;gidos";
 choices[18][2] = "Proyectos de complejidad media, equipos con distintos niveles de experiencia y dentro de un software con terminales y bases de datos";
 choices[18][3] = "Proyectos que deban desarrollarse para ser acoplados en un hardware y software estricto y con restricciones operativas";
 answers[18] = 2;
 units[18] = ['93'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 7335. ";
 preguntaids[18] = 7335


//  Id pregunta: 6322 Año de creación de pregunta: 2003
 questions[19]= "20)  El Plan General de Garant&iacute;a de Calidad (PGGC) considera que los tipos de riesgos potenciales de un proyecto son:";
 choices[19]= new Array();
 choices[19][0] = "7";
 choices[19][1] = "5";
 choices[19][2] = "No considera ning&uacute;n tipo de riesgo potencial";
 choices[19][3] = "Depende del proyecto a considerar";
 answers[19] = 0;
 units[19] = ['93'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 6322. ";
 preguntaids[19] = 6322


//  Id pregunta: 5971 Año de creación de pregunta: 2007
 questions[20]= "21)  Seg&uacute;n el Modelo de Calidad de McCall, el factor &quot;Correcci&oacute;n&quot; debe ser tenido en cuenta cuando el productosoftware se encuentra en la fase de:";
 choices[20]= new Array();
 choices[20][0] = "Construcci&oacute;n";
 choices[20][1] = "Explotaci&oacute;n";
 choices[20][2] = "Revisi&oacute;n";
 choices[20][3] = "Transici&oacute;n";
 answers[20] = 1;
 units[20] = ['93'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 5971. ";
 preguntaids[20] = 5971


//  Id pregunta: 6318 Año de creación de pregunta: 2003
 questions[21]= "22)  Se&ntilde;ale la falsa:";
 choices[21]= new Array();
 choices[21][0] = "GQM, Goal, Question, Metric, es un m&eacute;todo de desarrollo de m&eacute;tricas";
 choices[21][1] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo se emplea como m&eacute;trica de estimaci&oacute;n de proyectos.";
 choices[21][2] = "Cocomo es un modelo de estimaci&oacute;n algor&iacute;tmico propuesto por Boehm que fundamenta su estimaci&oacute;n en el n&uacute;mero de puntos de funci&oacute;n.";
 choices[21][3] = "Cocomo se aplica en tres modelos: b&aacute;sico, intermedio y avanzado. Estos modelos se dividen a su vez en tres modos: org&aacute;nico, semiacoplado y empotrado.";
 answers[21] = 2;
 units[21] = ['93'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6318. ";
 preguntaids[21] = 6318


//  Id pregunta: 10060 Año de creación de pregunta: 2015
 questions[22]= "23)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[22]= new Array();
 choices[22][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[22][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[22][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[22][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[22] = 1;
 units[22] = ['93'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10060. Examen TIC A2 2014";
 preguntaids[22] = 10060


//  Id pregunta: 10869 Año de creación de pregunta: 2015
 questions[23]= "24)  En el modelo COCOMO, los CDA (Cost Driven Attributes) se utilizan en el modelo:";
 choices[23]= new Array();
 choices[23][0] = "B&aacute;sico";
 choices[23][1] = "Intermedio";
 choices[23][2] = "Avanzado";
 choices[23][3] = "b) y c) son correctos";
 answers[23] = 3;
 units[23] = ['93'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10869. ";
 preguntaids[23] = 10869


//  Id pregunta: 6963 Año de creación de pregunta: 2010
 questions[24]= "25)  Se&ntilde;ale la sentencia correcta:";
 choices[24]= new Array();
 choices[24][0] = "La complejidad ciclom&aacute;tica es una m&eacute;trica del software que proporciona una medici&oacute;n cualitativa de la complejidad l&oacute;gica de un programa";
 choices[24][1] = "Si se usa la complejidad ciclom&aacute;tica en el contexto del m&eacute;todo de prueba del camino b&aacute;sico, el valor calculado como complejidad ciclom&aacute;tica define el n&uacute;mero de caminos dependientes del conjunto b&aacute;sico de un programa";
 choices[24][2] = "En las pruebas del camino b&aacute;sico, los casos de prueba obtenidos del conjunto b&aacute;sico garantizan que durante la prueba se ejecuta una sola vez cada sentencia del programa";
 choices[24][3] = "Dentro de la prueba del camino b&aacute;sico, un camino independiente est&aacute; constituido por lo menos por una arista que no haya sido recorrida anteriormente a la definici&oacute;n del camino";
 answers[24] = 3;
 units[24] = ['93'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6963. TIC-B 2009 bloque desarrollo";
 preguntaids[24] = 6963


//  Id pregunta: 5638 Año de creación de pregunta: 2007
 questions[25]= "26)  Dentro de las m&eacute;tricas de software basadas en el texto del c&oacute;digo, &iquest;cuales son las cuatro cantidades b&aacute;sicas?";
 choices[25]= new Array();
 choices[25][0] = "El numero de tipos de operandos (datos, variables, etc.), el numero de ocurrencias de los mismos, el numero de tipos de operadores (instrucciones, funciones, etc.) y el numero de ocurrencias de los mismos.";
 choices[25][1] = "El control intramodular, el grafo de control, Ia arquitectura de m&oacute;dulos y los diagramas de estructuras.";
 choices[25][2] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo, el n&uacute;mero de sentencias o instrucciones completas, el n&uacute;mero de variables, el n&uacute;mero de operaciones aritm&eacute;ticas.";
 choices[25][3] = "El n&uacute;mero de flujos que terminan en un determinado modulo, el numero de estructuras de datos de las cuales el modulo extrae informaci&oacute;n, el numero de flujos que salen de un determinado modulo y el numero de estructuras de datos que actualiza el modulo.";
 answers[25] = 0;
 units[25] = ['93'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 5638. ";
 preguntaids[25] = 5638


//  Id pregunta: 9664 Año de creación de pregunta: 2014
 questions[26]= "27)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para";
 choices[26]= new Array();
 choices[26][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles.";
 choices[26][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[26][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[26][3] = "detectar errores de condiciones de carrera (race condition bugs).";
 answers[26] = 3;
 units[26] = ['93'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 9664. Examen TIC A1 2013";
 preguntaids[26] = 9664


//  Id pregunta: 10736 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es un modelo de calidad del Software?";
 choices[27]= new Array();
 choices[27][0] = "GCAL de SISDEL";
 choices[27][1] = "FURPS";
 choices[27][2] = "ISO 9126-1";
 choices[27][3] = "Todos los anteriores son modelos de calidad del Software.";
 answers[27] = 0;
 units[27] = ['93'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 10736. ";
 preguntaids[27] = 10736


//  Id pregunta: 6317 Año de creación de pregunta: 2003
 questions[28]= "29)  En relaci&oacute;n a las m&eacute;tricas de calidad del Software NO es correcto afirmar:";
 choices[28]= new Array();
 choices[28][0] = "Las m&eacute;tricas se pueden utilizar para evaluar en qu&eacute; grado el software posee las distintas caracter&iacute;sticas que definen la calidad de un producto software.";
 choices[28][1] = "Las m&eacute;tricas se apoyan en 2 tipos de atributos, internos y externos.";
 choices[28][2] = "Los atributos internos son aquellos que se pueden medir en t&eacute;rminos de la propia entidad independientemente de su comportamiento.";
 choices[28][3] = "Las m&eacute;tricas se pueden aplicar s&oacute;lo a una etapa del ciclo de vida del desarrollo del software.";
 answers[28] = 3;
 units[28] = ['93'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 6317. ";
 preguntaids[28] = 6317


//  Id pregunta: 6316 Año de creación de pregunta: 2003
 questions[29]= "30)  Acorde al modelo de calidad de McCall NO es un factor de calidad con caracter&iacute;sticas de explotaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Fiabilidad";
 choices[29][1] = "Extensibilidad";
 choices[29][2] = "Correcci&oacute;n";
 choices[29][3] = "Integridad";
 answers[29] = 1;
 units[29] = ['93'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6316. ";
 preguntaids[29] = 6316


//  Id pregunta: 5537 Año de creación de pregunta: 2007
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de calidad CMM (Capacity Mature Model)?";
 choices[30]= new Array();
 choices[30][0] = "Inicial";
 choices[30][1] = "Administrado";
 choices[30][2] = "Definido";
 choices[30][3] = "Ideal";
 answers[30] = 3;
 units[30] = ['93'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 5537. ";
 preguntaids[30] = 5537


//  Id pregunta: 4238 Año de creación de pregunta: 2006
 questions[31]= "32)  Cual de las siguientes no es una forma de autoevaluaci&oacute;n seg&uacute;n el EFQM";
 choices[31]= new Array();
 choices[31][0] = "Simulaci&oacute;n de presentaci&oacute;n al Premio";
 choices[31][1] = "Por formularios";
 choices[31][2] = "Por cuestionarios de autoevaluaci&oacute;n";
 choices[31][3] = "Todas son correctas";
 answers[31] = 3;
 units[31] = ['93'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 4238. ";
 preguntaids[31] = 4238


//  Id pregunta: 4233 Año de creación de pregunta: 2006
 questions[32]= "33)  La Teor&iacute;a CALIDAD/COSTE establece que...";
 choices[32]= new Array();
 choices[32][0] = "El coste es constante e independiente de la calidad del Producto.";
 choices[32][1] = "El coste de producci&oacute;n disminuye linealmente con el aumento de calidad.";
 choices[32][2] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad.";
 choices[32][3] = "La relaci&oacute;n entre el coste y la calidad representada gr&aacute;ficamente da lugar a una curva c&oacute;ncava con un m&iacute;nimo.";
 answers[32] = 2;
 units[32] = ['93'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 4233. ";
 preguntaids[32] = 4233


//  Id pregunta: 4035 Año de creación de pregunta: 2004
 questions[33]= "34)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[33]= new Array();
 choices[33][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[33][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[33][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[33][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[33] = 2;
 units[33] = ['92', '93'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 4035. ";
 preguntaids[33] = 4035


//  Id pregunta: 4235 Año de creación de pregunta: 2006
 questions[34]= "35)  Est&aacute;dares de Calidad de M&eacute;trica v3";
 choices[34]= new Array();
 choices[34][0] = "Norma ISO 9001";
 choices[34][1] = "norma ISO 9000-2003";
 choices[34][2] = "normas ISO 9000-2000 y norma ISO 9001-2000";
 choices[34][3] = "norma ISO 9000-2001";
 answers[34] = 2;
 units[34] = ['93'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 4235. ";
 preguntaids[34] = 4235


//  Id pregunta: 7336 Año de creación de pregunta: 2010
 questions[35]= "36)  El modelo COCOMO II propone los modelos:";
 choices[35]= new Array();
 choices[35][0] = "Modelo de Composici&oacute;n de la Aplicaci&oacute;n, Dise&ntilde;o Preliminar y Modelo Post-Arquitectura";
 choices[35][1] = "Modelo de Composici&oacute;n de la Aplicaci&oacute;n y Dise&ntilde;o Preliminar";
 choices[35][2] = "Modelo Org&aacute;nico y Semiacoplado";
 choices[35][3] = "Modelo Org&aacute;nico, Semiacoplado y Empotrado";
 answers[35] = 0;
 units[35] = ['93'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 7336. ";
 preguntaids[35] = 7336


//  Id pregunta: 6396 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Cual de los siguientes factores de calidad es el m&aacute;s importante?";
 choices[36]= new Array();
 choices[36][0] = "Oportunidad";
 choices[36][1] = "Correcci&oacute;n";
 choices[36][2] = "Extensibilidad";
 choices[36][3] = "Modularidad";
 answers[36] = 3;
 units[36] = ['93'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 6396. Examen 2006 JCYL";
 preguntaids[36] = 6396


//  Id pregunta: 6324 Año de creación de pregunta: 2003
 questions[37]= "38)  &iquest;C&oacute;mo se puede determinar en el Plan General de Garant&iacute;a de Calidad (PGGC) el nivel de intensidad que sirve para graduar las funciones de garant&iacute;a de calidad aplicables a un proyecto?";
 choices[37]= new Array();
 choices[37][0] = "No es posible en el PGGC";
 choices[37][1] = "A trav&eacute;s de la determinaci&oacute;n del perfil de riesgos del proyecto.";
 choices[37][2] = "A trav&eacute;s del foco de intensidad y de sus cinco niveles.";
 choices[37][3] = "A trav&eacute;s del foco de inter&eacute;s en garant&iacute;a de calidad y para cada fase y productos asociados con el modelos de desarrollo elegido para el proyecto.";
 answers[37] = 3;
 units[37] = ['93'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 6324. ";
 preguntaids[37] = 6324


//  Id pregunta: 10735 Año de creación de pregunta: 2015
 questions[38]= "39)  Seg&uacute;n el modelo de McCall de calidad, &iquest;Cu&aacute;l de los siguientes factores NO hace referencia a la facilidad de conversi&oacute;n del software?";
 choices[38]= new Array();
 choices[38][0] = "Interoperabilidad";
 choices[38][1] = "Reusabilidad";
 choices[38][2] = "Flexibilidad";
 choices[38][3] = "Portabilidad";
 answers[38] = 2;
 units[38] = ['93'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 10735. ";
 preguntaids[38] = 10735


//  Id pregunta: 7337 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta cuando hablamos de la m&eacute;trica de Puntos de Funci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "Se usa para estimar el tama&ntilde;o del software que se va a desarrollar";
 choices[39][1] = "Mide la funcionalidad entregada indepedientemente de la tecnologia";
 choices[39][2] = "Ve la aplicaci&oacute;n como una caja negra";
 choices[39][3] = "Fue propuesta por Tom De Marco";
 answers[39] = 3;
 units[39] = ['93'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7337. ";
 preguntaids[39] = 7337


//  Id pregunta: 7598 Año de creación de pregunta: 2010
 questions[40]= "41)  Seg&uacute;n la norma espa&ntilde;ola UNE 66-904, que recoge los costes totales de calidad, el &laquo;coste resultante de un bien o servicio que no cumple los requisitos de calidad, y cuyo fallo se pone de manifiesto antes de su entrega&raquo;, es un:";
 choices[40]= new Array();
 choices[40][0] = "Costes de prevenci&oacute;n";
 choices[40][1] = "Coste de fallos internos";
 choices[40][2] = "Coste de evaluaci&oacute;n";
 choices[40][3] = "Coste de fallos externos";
 answers[40] = 2;
 units[40] = ['93'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 7598. Map 2006";
 preguntaids[40] = 7598


//  Id pregunta: 10059 Año de creación de pregunta: 2015
 questions[41]= "42)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[41]= new Array();
 choices[41][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[41][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[41][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[41][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[41] = 1;
 units[41] = ['93'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 10059. Examen TIC A2 2014";
 preguntaids[41] = 10059


//  Id pregunta: 6271 Año de creación de pregunta: 2003
 questions[42]= "43)  En el modelo de calidad del software de McCall, cu&aacute;l de los siguientes es un factor de explotaci&oacute;n u operaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Mantenibilidad";
 choices[42][1] = "Flexibilidad";
 choices[42][2] = "Usabilidad";
 choices[42][3] = "Reusabilidad";
 answers[42] = 2;
 units[42] = ['93'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 6271. ";
 preguntaids[42] = 6271


//  Id pregunta: 7340 Año de creación de pregunta: 2010
 questions[43]= "44)  En un sistema Orientado a Objetos, cu&aacute;l de las siguientes NO es una m&eacute;trica para evaluar la calidad del dise&ntilde;o?";
 choices[43]= new Array();
 choices[43][0] = "M&eacute;tricas de Booch";
 choices[43][1] = "M&eacute;tricas MDOO";
 choices[43][2] = "M&eacute;tricas de Lorenz y Kidd";
 choices[43][3] = "M&eacute;tricas de Chidamber y Kemerer";
 answers[43] = 0;
 units[43] = ['93'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 7340. ";
 preguntaids[43] = 7340


//  Id pregunta: 4036 Año de creación de pregunta: 2004
 questions[44]= "45)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[44]= new Array();
 choices[44][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[44][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[44][2] = "El coste es constante e independiente de la calidad del producto";
 choices[44][3] = "Ninguna de ellas";
 answers[44] = 0;
 units[44] = ['92', '93'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 4036. ";
 preguntaids[44] = 4036


//  Id pregunta: 5837 Año de creación de pregunta: 2007
 questions[45]= "46)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son:";
 choices[45]= new Array();
 choices[45][0] = "Eficiencia y fiabilidad";
 choices[45][1] = "Fiabilidad y modularidad";
 choices[45][2] = "Fiabilidad y extensibilidad";
 choices[45][3] = "Correcci&oacute;n y verificabilidad";
 answers[45] = 1;
 units[45] = ['93'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 5837. Examen 2006 JCYL";
 preguntaids[45] = 5837


//  Id pregunta: 4230 Año de creación de pregunta: 2006
 questions[46]= "47)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[46]= new Array();
 choices[46][0] = "Productividad";
 choices[46][1] = "Fiabilidad";
 choices[46][2] = "Factores de calidad";
 choices[46][3] = "Complejidad";
 answers[46] = 1;
 units[46] = ['93'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 4230. ";
 preguntaids[46] = 4230


//  Id pregunta: 4237 Año de creación de pregunta: 2006
 questions[47]= "48)  En el modelo EFQM la suma de puntuaci&oacute;n m&aacute;xima de todos los criterios es 1000. &iquest;C&uacute;al de los siguientes criterios da m&aacute;s puntuaci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = "Impacto social";
 choices[47][1] = "Resultado global del negocio";
 choices[47][2] = "Satisfacci&oacute;n de los clientes";
 choices[47][3] = "Procesos";
 answers[47] = 2;
 units[47] = ['93'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 4237. ";
 preguntaids[47] = 4237


//  Id pregunta: 4231 Año de creación de pregunta: 2006
 questions[48]= "49)  La Precisi&oacute;n es un criterio relacionado con:";
 choices[48]= new Array();
 choices[48][0] = "La Usabilidad.";
 choices[48][1] = "La Correcci&oacute;n.";
 choices[48][2] = "La Eficiencia.";
 choices[48][3] = "La Fiabilidad.";
 answers[48] = 3;
 units[48] = ['93'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 4231. ";
 preguntaids[48] = 4231


//  Id pregunta: 6385 Año de creación de pregunta: 2003
 questions[49]= "50)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son";
 choices[49]= new Array();
 choices[49][0] = "Eficiencia y fiabilidad";
 choices[49][1] = "Fiabilidad y modularidad";
 choices[49][2] = "Fiabilidad y extensibilidad";
 choices[49][3] = "Correcci&oacute;n y verificabilidad";
 answers[49] = 1;
 units[49] = ['93'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 6385. Examen 2006 JCYL";
 preguntaids[49] = 6385


//  Id pregunta: 8787 Año de creación de pregunta: 2013
 questions[50]= "51)  La t&eacute;cnica de McCabe permite medir:";
 choices[50]= new Array();
 choices[50][0] = "La productividad del software";
 choices[50][1] = "La complejidad del software";
 choices[50][2] = "La fiabilidad del software";
 choices[50][3] = "Ninguna de las tres";
 answers[50] = 1;
 units[50] = ['93'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 8787. ";
 preguntaids[50] = 8787


//  Id pregunta: 4234 Año de creación de pregunta: 2006
 questions[51]= "52)  Las Pruebas modulares en SW se pueden realizar";
 choices[51]= new Array();
 choices[51][0] = "Top-down, o de arriba abajo";
 choices[51][1] = "Bottom-up, o de abajo a arriba";
 choices[51][2] = "a) y b) son correctas";
 choices[51][3] = "Ninguna de las anteriores definiciones es correcta";
 answers[51] = 3;
 units[51] = ['93'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 4234. ";
 preguntaids[51] = 4234


//  Id pregunta: 7649 Año de creación de pregunta: 2010
 questions[52]= "53)  Seg&uacute;n el Modelo de Calidad de McCall, el factor &laquo;Correcci&oacute;n&raquo; debe ser tenido en cuenta cuando el producto software se encuentra en la fase de:";
 choices[52]= new Array();
 choices[52][0] = "Construcci&oacute;n.";
 choices[52][1] = "Explotaci&oacute;n.";
 choices[52][2] = "Revisi&oacute;n.";
 choices[52][3] = "Transici&oacute;n.";
 answers[52] = 1;
 units[52] = ['93'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 7649. Map 2006";
 preguntaids[52] = 7649


//  Id pregunta: 8459 Año de creación de pregunta: 2011
 questions[53]= "54)  Entre las m&eacute;tricas de Calidad para sistemas orientados a objetos se encuentran MOOD &iquest;cu&aacute;l de los siguientes no es un factor que la compongan?";
 choices[53]= new Array();
 choices[53][0] = "Factor de polimorfismo";
 choices[53][1] = "Factor de acoplamiento";
 choices[53][2] = "Factor de herencia de m&eacute;todos";
 choices[53][3] = "Factor de cohesi&oacute;n";
 answers[53] = 3;
 units[53] = ['93'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 8459. ";
 preguntaids[53] = 8459


//  Id pregunta: 10358 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un modo de COCOMO (Constructive Cost Model) para estimar el n&uacute;mero de instrucciones de c&oacute;digo fuente seg&uacute;n el entorno de aplicaci&oacute;n que se utiliza?";
 choices[54]= new Array();
 choices[54][0] = "Org&aacute;nico";
 choices[54][1] = "Acoplado";
 choices[54][2] = "Semiacoplado";
 choices[54][3] = "Empotrado";
 answers[54] = 1;
 units[54] = ['93'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 10358. ";
 preguntaids[54] = 10358


//  Id pregunta: 6321 Año de creación de pregunta: 2003
 questions[55]= "56)  Se&ntilde;ale la falsa:";
 choices[55]= new Array();
 choices[55][0] = "Las m&eacute;tricas de complejidad intentan principalmente evaluar la posible mantenibilidad del software.";
 choices[55][1] = "Las t&eacute;cnicas de Halstead y McCabe se engloban dentro de estas m&eacute;tricas.";
 choices[55][2] = "La complejidad ciclom&aacute;tica de McCabe es una medida cualitativa de la complejidad l&oacute;gica de un programa";
 choices[55][3] = "La t&eacute;cnica de Halstead define los token, como la unidad sint&aacute;ctica m&aacute;s elemental distinguible por un compilador.";
 answers[55] = 2;
 units[55] = ['93'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 6321. ";
 preguntaids[55] = 6321


//  Id pregunta: 8005 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[56]= new Array();
 choices[56][0] = "Accesibilidad";
 choices[56][1] = "Correcci&oacute;n";
 choices[56][2] = "Reusabilidad";
 choices[56][3] = "Interoperabilidad";
 answers[56] = 0;
 units[56] = ['92', '93'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 8005. Examen TIC A2 2010";
 preguntaids[56] = 8005


//  Id pregunta: 10057 Año de creación de pregunta: 2015
 questions[57]= "58)  Se&ntilde;ale c&oacute;mo se clasifican los niveles en las organizaciones seg&uacute;n se establece en el Modelo de Madurez de la Ingenier&iacute;a del Software ISO/IEC 15504-SPICE para la evaluaci&oacute;n y mejora de las organizaciones, en la representaci&oacute;n continua del modelo que mide la capacidad:";
 choices[57]= new Array();
 choices[57][0] = "En 6 niveles, desde el cero al cinco.";
 choices[57][1] = "En 5 niveles, desde el uno al cinco.";
 choices[57][2] = "En 6 niveles, desde el uno al seis.";
 choices[57][3] = "En 5 niveles, desde el cero al cuatro.";
 answers[57] = 0;
 units[57] = ['93'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10057. Examen TIC A2 2014";
 preguntaids[57] = 10057


//  Id pregunta: 4092 Año de creación de pregunta: 2003
 questions[58]= "59)  La actividad DSI-CAL2 se denomina";
 choices[58]= new Array();
 choices[58][0] = "Revisi&oacute;n de la especificaci&oacute;n t&eacute;cnica del plan de prueba";
 choices[58][1] = "Revisi&oacute;n de la verificaci&oacute;n de la arquitectura del sistema";
 choices[58][2] = "Revisi&oacute;n de los requisitos de implantaci&oacute;n";
 choices[58][3] = "ninguna es cirrecta";
 answers[58] = 0;
 units[58] = ['92', '93'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 4092. ";
 preguntaids[58] = 4092


//  Id pregunta: 7333 Año de creación de pregunta: 2010
 questions[59]= "60)  Entre los distintos modelos de calidad NO se encuentra:";
 choices[59]= new Array();
 choices[59][0] = "FURPS (Funcionality, Usability, Reliability, Performance, Supportability)";
 choices[59][1] = "McCall";
 choices[59][2] = "EFQM (European Foundation for Quality Management)";
 choices[59][3] = "EQAM (European Quality Assurance Method)";
 answers[59] = 3;
 units[59] = ['93'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7333. ";
 preguntaids[59] = 7333


//  Id pregunta: 4069 Año de creación de pregunta: 2003
 questions[60]= "61)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de 11 aristas y 9 nodos?";
 choices[60]= new Array();
 choices[60][0] = "6";
 choices[60][1] = "12";
 choices[60][2] = "8";
 choices[60][3] = "4";
 answers[60] = 3;
 units[60] = ['93'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 4069. ";
 preguntaids[60] = 4069


//  Id pregunta: 4125 Año de creación de pregunta: 2004
 questions[61]= "62)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[61]= new Array();
 choices[61][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[61][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[61][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 2;
 units[61] = ['92', '93'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 4125. ";
 preguntaids[61] = 4125


//  Id pregunta: 6390 Año de creación de pregunta: 2003
 questions[62]= "63)  Los resultados del modelo EFQM se eval&uacute;an";
 choices[62]= new Array();
 choices[62][0] = "Respecto a los clientes";
 choices[62][1] = "Respecto a la sociedad";
 choices[62][2] = "Respecto al personal de la empresa";
 choices[62][3] = "Todas las respuestas son correctas";
 answers[62] = 3;
 units[62] = ['93'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6390. Examen 2006 JCYL";
 preguntaids[62] = 6390


//  Id pregunta: 5811 Año de creación de pregunta: 2007
 questions[63]= "64)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vistade explotaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[63][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[63][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[63][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[63] = 1;
 units[63] = ['93'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 5811. Examen 2006 JCYL";
 preguntaids[63] = 5811


//  Id pregunta: 6319 Año de creación de pregunta: 2003
 questions[64]= "65)  En relaci&oacute;n a Cocomo II:";
 choices[64]= new Array();
 choices[64][0] = "Surge en 1997 para solventar las limitaciones de Cocomo.";
 choices[64][1] = "Propone 3 modelos: Composici&oacute;n de la Aplicaci&oacute;n, Dise&ntilde;o previo y post-arquitectura.";
 choices[64][2] = "El modelo de Composici&oacute;n de la aplicaci&oacute;n se basa en l&iacute;neas de c&oacute;digo.";
 choices[64][3] = "Todas son correctas.";
 answers[64] = 0;
 units[64] = ['93'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 6319. ";
 preguntaids[64] = 6319


//  Id pregunta: 6323 Año de creación de pregunta: 2003
 questions[65]= "66)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[65]= new Array();
 choices[65][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[65][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[65][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = 1;
 units[65] = ['93'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 6323. ";
 preguntaids[65] = 6323


