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
//  Id pregunta: 6312 Año de creación de pregunta: 2003
 questions[0]= "1)  Dentro de la serie de normas ISO 9000:2000 NO se encuentra:";
 choices[0]= new Array();
 choices[0][0] = "ISO 9001:2000 Gesti&oacute;n de Calidad. Requisitos";
 choices[0][1] = "ISO 9002:2000. Fundamentos y vocabulario";
 choices[0][2] = "ISO 9004:2000. Recomendaciones para la mejora del desempe&ntilde;o.";
 choices[0][3] = "ISO 19011. Gu&iacute;a relativa gesti&oacute;n de calidad y gesti&oacute;n medioambiental";
 answers[0] = 1;
 units[0] = ['92'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 6312. ";
 preguntaids[0] = 6312


//  Id pregunta: 6471 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo se centra en la mejora de los procesos de desarrollo de aplicaciones?";
 choices[1]= new Array();
 choices[1][0] = "ITIL";
 choices[1][1] = "CMMI";
 choices[1][2] = "COBIT";
 choices[1][3] = "M&Eacute;TRICA";
 answers[1] = 1;
 units[1] = ['101'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 6471. ";
 preguntaids[1] = 6471


//  Id pregunta: 6370 Año de creación de pregunta: 2003
 questions[2]= "3)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar";
 choices[2]= new Array();
 choices[2][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesario ajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos";
 choices[2][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo";
 choices[2][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[2][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n";
 answers[2] = 2;
 units[2] = ['89'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 6370. Examen 2006 JCYL";
 preguntaids[2] = 6370


//  Id pregunta: 6299 Año de creación de pregunta: 2003
 questions[3]= "4)  Se&ntilde;ale la opci&oacute;n incorrecta en relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[3]= new Array();
 choices[3][0] = "Entre las ventajas del DSBC no se encuentra la reducci&oacute;n de tiempos y costes de desarrollo";
 choices[3][1] = "Su enfoque consiste en configurar y especializar componentes de software ya existentes.";
 choices[3][2] = "Estos componentes son los conocidos COTS (Commercial off-the-self)";
 choices[3][3] = "Los productos COTS presentan problemas espec&iacute;ficos como incompatibilidad,falta de fuentes, cambio de versiones o esfuerzo de aprendizaje";
 answers[3] = 0;
 units[3] = ['82'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 6299. ";
 preguntaids[3] = 6299


//  Id pregunta: 6293 Año de creación de pregunta: 2003
 questions[4]= "5)  El modelo de ciclo de vida en espiral:";
 choices[4]= new Array();
 choices[4][0] = "Es el que mejor se adapta para ser aplicado al software contratado";
 choices[4][1] = "Permite incorporar objetivos de calidad en el desarrollo de productos software";
 choices[4][2] = "No es especialmente adecuado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[4][3] = "Todas las anteriores son correctas";
 answers[4] = 1;
 units[4] = ['82'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 6293. ";
 preguntaids[4] = 6293


//  Id pregunta: 6395 Año de creación de pregunta: 2003
 questions[5]= "6)  Que aspecto debe considerarse a la hora de efectuar una planificaci&oacute;n estrat&eacute;gica";
 choices[5]= new Array();
 choices[5][0] = "La misi&oacute;n del negocio";
 choices[5][1] = "La situaci&oacute;n de los competidores";
 choices[5][2] = "Los hitos en el calendario de actuaci&oacute;n";
 choices[5][3] = "Deben considerarse los aspectos anteriores";
 answers[5] = 3;
 units[5] = ['83'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 6395. Examen 2006 JCYL";
 preguntaids[5] = 6395


//  Id pregunta: 6323 Año de creación de pregunta: 2003
 questions[6]= "7)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[6]= new Array();
 choices[6][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[6][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[6][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = 1;
 units[6] = ['93'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 6323. ";
 preguntaids[6] = 6323


//  Id pregunta: 6321 Año de creación de pregunta: 2003
 questions[7]= "8)  Se&ntilde;ale la falsa:";
 choices[7]= new Array();
 choices[7][0] = "Las m&eacute;tricas de complejidad intentan principalmente evaluar la posible mantenibilidad del software.";
 choices[7][1] = "Las t&eacute;cnicas de Halstead y McCabe se engloban dentro de estas m&eacute;tricas.";
 choices[7][2] = "La complejidad ciclom&aacute;tica de McCabe es una medida cualitativa de la complejidad l&oacute;gica de un programa";
 choices[7][3] = "La t&eacute;cnica de Halstead define los token, como la unidad sint&aacute;ctica m&aacute;s elemental distinguible por un compilador.";
 answers[7] = 2;
 units[7] = ['93'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6321. ";
 preguntaids[7] = 6321


//  Id pregunta: 6315 Año de creación de pregunta: 2003
 questions[8]= "9)  Indique cu&aacute;l de las siguientes opciones describe el nivel 2 del modelo CMM";
 choices[8]= new Array();
 choices[8][0] = "No se han definido procesos metodol&oacute;gicos, o si se han definido no se siguen";
 choices[8][1] = "El proceso de software est&aacute; documentado, homogeneizado e integrado en un proceso de software est&aacute;ndar dentro de la organizaci&oacute;n";
 choices[8][2] = "Se establecen pol&iacute;ticas y procedimientos de administraci&oacute;n e implantaci&oacute;n del modelo b&aacute;sico para determinar costos, calendarios y funcionalidades";
 choices[8][3] = "Se recolectan medidas detalladas del proceso de software y de la calidad del producto Ambos son cuantitativamente entendidos y controlados.";
 answers[8] = 2;
 units[8] = ['92'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 6315. ";
 preguntaids[8] = 6315


//  Id pregunta: 6671 Año de creación de pregunta: 2009
 questions[9]= "10)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[9]= new Array();
 choices[9][0] = "Strategy.";
 choices[9][1] = "State.";
 choices[9][2] = "Observer.";
 choices[9][3] = "Command.";
 answers[9] = 2;
 units[9] = ['89'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6671. MAP 2008 A1";
 preguntaids[9] = 6671


//  Id pregunta: 6355 Año de creación de pregunta: 2003
 questions[10]= "11)  La propiedad de un objeto denominada persistencia consiste en";
 choices[10]= new Array();
 choices[10][0] = "Que un objeto ocupa un determinado espacio de memoria y existe durante una cierta cantidad de tiempo. Es un concepto din&aacute;mico. La permanencia del objeto es el tiempo durante el cual se le asigna espacio y permanece accesible en la memoria del ordenador";
 choices[10][1] = "Un objeto ocupa un determinado espacio de memoria durante toda la vida de la aplicaci&oacute;n. La permanencia del objeto es que est&aacute; accesible en la memoria del ordenador";
 choices[10][2] = "Un objeto est&aacute; accesible ocupe o no memoria en el ordenador, el S.O. se encarga de cargar y descargar el objeto de la memoria RAM";
 choices[10][3] = "La persistencia de un objeto consiste en que aunque su instancia haya sido eliminada el objeto sigue accesible";
 answers[10] = 0;
 units[10] = ['82'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 6355. Examen 2006 JCYL";
 preguntaids[10] = 6355


//  Id pregunta: 6307 Año de creación de pregunta: 2003
 questions[11]= "12)  Un Plan de sistemas de Informaci&oacute;n y Comunicaciones se elabora (se&ntilde;ale la falsa):";
 choices[11]= new Array();
 choices[11][0] = "Se elabora a partir de los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[11][1] = "Se recogen las necesidades y requerimientos de los usuarios, en base a procesos de negocio";
 choices[11][2] = "No implica necesariamente el liderazgo del equipo directivo para su &eacute;xito";
 choices[11][3] = "Se valoran los escenarios tecnol&oacute;gicos que aporten el menor riesgo, la mayor protecci&oacute;n de inversiones y los m&aacute;ximos beneficios";
 answers[11] = 2;
 units[11] = ['83'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 6307. ";
 preguntaids[11] = 6307


//  Id pregunta: 6472 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n que utiliza el marco de referencia COBIT?";
 choices[12]= new Array();
 choices[12][0] = "Requisitos de negocio o criterios de informaci&oacute;n";
 choices[12][1] = "Personal de TI";
 choices[12][2] = "Procesos de TI";
 choices[12][3] = "Recursos de TI";
 answers[12] = 1;
 units[12] = ['101'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 6472. ";
 preguntaids[12] = 6472


//  Id pregunta: 6324 Año de creación de pregunta: 2003
 questions[13]= "14)  &iquest;C&oacute;mo se puede determinar en el Plan General de Garant&iacute;a de Calidad (PGGC) el nivel de intensidad que sirve para graduar las funciones de garant&iacute;a de calidad aplicables a un proyecto?";
 choices[13]= new Array();
 choices[13][0] = "No es posible en el PGGC";
 choices[13][1] = "A trav&eacute;s de la determinaci&oacute;n del perfil de riesgos del proyecto.";
 choices[13][2] = "A trav&eacute;s del foco de intensidad y de sus cinco niveles.";
 choices[13][3] = "A trav&eacute;s del foco de inter&eacute;s en garant&iacute;a de calidad y para cada fase y productos asociados con el modelos de desarrollo elegido para el proyecto.";
 answers[13] = 3;
 units[13] = ['93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 6324. ";
 preguntaids[13] = 6324


//  Id pregunta: 6563 Año de creación de pregunta: 2003
 questions[14]= "15)  &iquest;En qu&eacute; consiste el eRecord Management?";
 choices[14]= new Array();
 choices[14][0] = "Gesti&oacute;n de documentos de tipo registro";
 choices[14][1] = "Destrucci&oacute;n controlada de informaci&oacute;n electr&oacute;nica";
 choices[14][2] = "Gesti&oacute;n de documentos importantes para una organizaci&oacute;n";
 choices[14][3] = "Almacenamiento con codificaci&oacute;n sim&eacute;trica de registros";
 answers[14] = 2;
 units[14] = ['99'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 6563. ";
 preguntaids[14] = 6563


//  Id pregunta: 6322 Año de creación de pregunta: 2003
 questions[15]= "16)  El Plan General de Garant&iacute;a de Calidad (PGGC) considera que los tipos de riesgos potenciales de un proyecto son:";
 choices[15]= new Array();
 choices[15][0] = "7";
 choices[15][1] = "5";
 choices[15][2] = "No considera ning&uacute;n tipo de riesgo potencial";
 choices[15][3] = "Depende del proyecto a considerar";
 answers[15] = 0;
 units[15] = ['93'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 6322. ";
 preguntaids[15] = 6322


//  Id pregunta: 6300 Año de creación de pregunta: 2003
 questions[16]= "17)  Sobre la Programaci&oacute;n Extrema:";
 choices[16]= new Array();
 choices[16][0] = "Los proyectos que usan esta metodolog&iacute;a comienzan obteniendo Historias de usuario(User Stories) y desarrollando soluciones (Spike solutions) sobre una arquitectura general de la soluci&oacute;n (Architectural Spike)";
 choices[16][1] = "A partir de aqu&iacute;, se mantiene una reuni&oacute;n a la que acudir&aacute;n clientes/usuarios, desarrolladores y gestores para acordar entre todos lo que se debe hacer";
 choices[16][2] = "Las iteraciones sobre lo que se tiene que hacer generar&aacute;n pruebas que generar&aacute;n m&aacute;s iteraciones sobre el sistema.";
 choices[16][3] = "Todas las anteriores son correctas";
 answers[16] = 3;
 units[16] = ['82'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6300. ";
 preguntaids[16] = 6300


//  Id pregunta: 6473 Año de creación de pregunta: 2003
 questions[17]= "18)  &iquest;Cu&aacute;ntos dominios y procesos forman COBIT?";
 choices[17]= new Array();
 choices[17][0] = "3 dominios y 43 procesos";
 choices[17][1] = "4 dominios y 34 procesos";
 choices[17][2] = "5 dominios y 33 procesos";
 choices[17][3] = "6 dominios y 44 procesos";
 answers[17] = 1;
 units[17] = ['101'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6473. ";
 preguntaids[17] = 6473


//  Id pregunta: 6318 Año de creación de pregunta: 2003
 questions[18]= "19)  Se&ntilde;ale la falsa:";
 choices[18]= new Array();
 choices[18][0] = "GQM, Goal, Question, Metric, es un m&eacute;todo de desarrollo de m&eacute;tricas";
 choices[18][1] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo se emplea como m&eacute;trica de estimaci&oacute;n de proyectos.";
 choices[18][2] = "Cocomo es un modelo de estimaci&oacute;n algor&iacute;tmico propuesto por Boehm que fundamenta su estimaci&oacute;n en el n&uacute;mero de puntos de funci&oacute;n.";
 choices[18][3] = "Cocomo se aplica en tres modelos: b&aacute;sico, intermedio y avanzado. Estos modelos se dividen a su vez en tres modos: org&aacute;nico, semiacoplado y empotrado.";
 answers[18] = 2;
 units[18] = ['93'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 6318. ";
 preguntaids[18] = 6318


//  Id pregunta: 6396 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Cual de los siguientes factores de calidad es el m&aacute;s importante?";
 choices[19]= new Array();
 choices[19][0] = "Oportunidad";
 choices[19][1] = "Correcci&oacute;n";
 choices[19][2] = "Extensibilidad";
 choices[19][3] = "Modularidad";
 answers[19] = 3;
 units[19] = ['93'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 6396. Examen 2006 JCYL";
 preguntaids[19] = 6396


//  Id pregunta: 6295 Año de creación de pregunta: 2003
 questions[20]= "21)  Indicar la opci&oacute;n incorrecta en relaci&oacute;n a los modelos basados en transformaciones:";
 choices[20]= new Array();
 choices[20][0] = "El modelo de transformaci&oacute;n asume la posibilidad de convertir autom&aacute;ticamente una especificaci&oacute;n formal de un producto software en un programa que satisface las especificaciones.";
 choices[20][1] = "Dentro de este tipo de modelos se encuentran los basados en t&eacute;cnicas de cuarta generaci&oacute;n (Roger Pressman) y los basados en modelos de transformaci&oacute;n (Carma McClure)";
 choices[20][2] = "Los que usan t&eacute;cnicas de cuarta generaci&oacute;n (Roger Pressman) se basan en herramientas Case.";
 choices[20][3] = "Las posibilidades de transformaci&oacute;n autom&aacute;ticas s&oacute;lo disponible para productos peque&ntilde;os aplicados a &aacute;reas limitadas";
 answers[20] = 2;
 units[20] = ['82'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 6295. ";
 preguntaids[20] = 6295


//  Id pregunta: 6391 Año de creación de pregunta: 2003
 questions[21]= "22)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[21]= new Array();
 choices[21][0] = "Estudio de Viabilidad del Sistema";
 choices[21][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[21][2] = "Definici&oacute;n del Sistema";
 choices[21][3] = "Estudio del Sistema Actual";
 answers[21] = 0;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6391. Examen 2006 JCYL";
 preguntaids[21] = 6391


//  Id pregunta: 6339 Año de creación de pregunta: 2003
 questions[22]= "23)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en:";
 choices[22]= new Array();
 choices[22][0] = "las frecuencias usadas";
 choices[22][1] = "los adaptadores usados";
 choices[22][2] = "la forma en que la luz entra en la fibra y se refleja dentro del n&uacute;cleo.";
 choices[22][3] = "La fibra multimodo permite por su naturaleza varios modos de instalacion";
 answers[22] = 2;
 units[22] = ['99'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 6339. ";
 preguntaids[22] = 6339


//  Id pregunta: 6442 Año de creación de pregunta: 2003
 questions[23]= "24)  Indicar el gestor de contenidos que no es software libre";
 choices[23]= new Array();
 choices[23][0] = "Open CMS";
 choices[23][1] = "Vignette";
 choices[23][2] = "Zope";
 choices[23][3] = "Alfresco";
 answers[23] = 1;
 units[23] = ['99'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 6442. ";
 preguntaids[23] = 6442


//  Id pregunta: 6313 Año de creación de pregunta: 2003
 questions[24]= "25)  Entre las ventajas destacadas de ISO 9000:2000 NO se encuentra:";
 choices[24]= new Array();
 choices[24][0] = "Proporciona amplia y detallada informaci&oacute;n de c&oacute;mo aplicarlo en empresas de tama&ntilde;o reducido";
 choices[24][1] = "Incrementa oportunidades de negocio en ciertos mercados y aumenta la satisfacci&oacute;n del cliente";
 choices[24][2] = "Reconocimiento y apariencia internacional, marca de reconocido prestigio";
 choices[24][3] = "Libertad de implementaci&oacute;n e interpretaci&oacute;n de los requisitos";
 answers[24] = 0;
 units[24] = ['92'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6313. ";
 preguntaids[24] = 6313


//  Id pregunta: 6309 Año de creación de pregunta: 2003
 questions[25]= "26)  Indicar entre las siguientes, cu&aacute;l no se ajusta a definici&oacute;n de calidad del software";
 choices[25]= new Array();
 choices[25][0] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que se esperan de todo software desarrollado profesionalmente";
 choices[25][1] = "Creaci&oacute;n de productos software que tanto eficaz como eficientemente cumplan las expectativas del usuario";
 choices[25][2] = "La ausencia de errores o defectos, siendo &eacute;stos las desviaciones respecto al comportamiento esperado";
 choices[25][3] = "Todas las anteriores son definiciones de calidad del software";
 answers[25] = 3;
 units[25] = ['92'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 6309. ";
 preguntaids[25] = 6309


//  Id pregunta: 6469 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;Qu&eacute; modelo escoger&iacute;a si tiene como objetivo mejorar el control y la calidad del gobierno de las TI a trav&eacute;s del ciclo completo de la puesta en marcha de aplicaciones?";
 choices[26]= new Array();
 choices[26][0] = "ITIL";
 choices[26][1] = "CMMI";
 choices[26][2] = "COBIT";
 choices[26][3] = "M&Eacute;TRICA";
 answers[26] = 2;
 units[26] = ['101'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6469. ";
 preguntaids[26] = 6469


//  Id pregunta: 6297 Año de creación de pregunta: 2003
 questions[27]= "28)  Indicar la opci&oacute;n incorrecta:";
 choices[27]= new Array();
 choices[27][0] = "El Proceso Unificado Desarrollo Software (PUDS) se compone de fases, iteraciones y ciclos.";
 choices[27][1] = "Las fases del PUDS son iniciaci&oacute;n, elaboraci&oacute;n, construcci&oacute;n y decisi&oacute;n";
 choices[27][2] = "En cada fase hay varias iteraciones. La iteraci&oacute;n produce una versi&oacute;n de un producto entregable que se ir&aacute; incrementando en cada iteraci&oacute;n hasta convertirse producto final";
 choices[27][3] = "El paso a trav&eacute;s de las cuatro fases constituye un ciclo de desarrollo";
 answers[27] = 1;
 units[27] = ['82'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 6297. ";
 preguntaids[27] = 6297


//  Id pregunta: 6384 Año de creación de pregunta: 2003
 questions[28]= "29)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[28]= new Array();
 choices[28][0] = "400 puntos sobre 1000";
 choices[28][1] = "500 puntos sobre 1000";
 choices[28][2] = "700 puntos sobre 1000";
 choices[28][3] = "900 puntos sobre 1000";
 answers[28] = 1;
 units[28] = ['93'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 6384. Examen 2006 JCYL";
 preguntaids[28] = 6384


//  Id pregunta: 6447 Año de creación de pregunta: 2003
 questions[29]= "30)  En la recuperaci&oacute;n de la informaci&oacute;n, los modelos cl&aacute;sicos basados en aproximaciones estad&iacute;sticas son";
 choices[29]= new Array();
 choices[29][0] = "Booleano";
 choices[29][1] = "Vectorial";
 choices[29][2] = "Probabil&iacute;stico";
 choices[29][3] = "Todos los anteriores son modelos cl&aacute;sicos";
 answers[29] = 3;
 units[29] = ['100'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6447. ";
 preguntaids[29] = 6447


//  Id pregunta: 6301 Año de creación de pregunta: 2003
 questions[30]= "31)  Una de las siguientes caracter&iacute;sticas no es propia de la planificaci&oacute;n estrat&eacute;gica:";
 choices[30]= new Array();
 choices[30][0] = "Su alcance, afecta generalmente a toda la organizaci&oacute;n";
 choices[30][1] = "Detalla los recursos para alcanzar las formulaciones fijadas en los planes estrat&eacute;gicos";
 choices[30][2] = "La alta direcci&oacute;n est&aacute; implicada en la planificaci&oacute;n estrat&eacute;gica";
 choices[30][3] = "Proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo objetivos a largo plazo";
 answers[30] = 1;
 units[30] = ['83'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 6301. ";
 preguntaids[30] = 6301


//  Id pregunta: 6390 Año de creación de pregunta: 2003
 questions[31]= "32)  Los resultados del modelo EFQM se eval&uacute;an";
 choices[31]= new Array();
 choices[31][0] = "Respecto a los clientes";
 choices[31][1] = "Respecto a la sociedad";
 choices[31][2] = "Respecto al personal de la empresa";
 choices[31][3] = "Todas las respuestas son correctas";
 answers[31] = 3;
 units[31] = ['93'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6390. Examen 2006 JCYL";
 preguntaids[31] = 6390


//  Id pregunta: 6613 Año de creación de pregunta: 2009
 questions[32]= "33)  &iquest;Cu&aacute;l de estos diagramas de UML no est&aacute; categorizado como un diagrama de comportamiento?";
 choices[32]= new Array();
 choices[32][0] = "Diagrama de interacci&oacute;n.";
 choices[32][1] = "Diagrama de casos de uso.";
 choices[32][2] = "Diagrama de objetos.";
 choices[32][3] = "Diagrama de actividad.";
 answers[32] = 2;
 units[32] = ['85'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6613. ";
 preguntaids[32] = 6613


//  Id pregunta: 6450 Año de creación de pregunta: 2003
 questions[33]= "34)  &iquest;Qu&eacute; directiva transpone la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones?";
 choices[33]= new Array();
 choices[33][0] = "Directiva 2006/24/CE";
 choices[33][1] = "Directiva 1999/93/CE";
 choices[33][2] = "Directiva 95/46/CE";
 choices[33][3] = "Directiva 2000/31/CE";
 answers[33] = 0;
 units[33] = ['100'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 6450. ";
 preguntaids[33] = 6450


//  Id pregunta: 6614 Año de creación de pregunta: 2009
 questions[34]= "35)  &iquest;Cu&aacute;l de estos diagramas no es un diagrama de UML 2.5?";
 choices[34]= new Array();
 choices[34][0] = "Diagrama global de interacci&oacute;n";
 choices[34][1] = "Diagrama de colaboraci&oacute;n";
 choices[34][2] = "Diagrama de estructura compuesta";
 choices[34][3] = "Diagrama de tiempos";
 answers[34] = 1;
 units[34] = ['85'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6614. ";
 preguntaids[34] = 6614


//  Id pregunta: 6304 Año de creación de pregunta: 2003
 questions[35]= "36)  Si una vez determinadas las fortalezas y debilidades, as&iacute; como las amenazas y oportunidades, se define una estrategia defensiva:";
 choices[35]= new Array();
 choices[35][0] = "Significa que la empresa est&aacute; preparada para enfrentarse a las amenazas";
 choices[35][1] = "Significa que la empresa se enfrenta a las amenazas externas sin las fortalezas internas necesarias";
 choices[35][2] = "Significa que la empresa cuenta con las fortalezas internas y adem&aacute;s se le presentan oportunidades externas";
 choices[35][3] = "Significa que a la empresa se le presentan oportunidades pero carece de preparaci&oacute;n para afrontarlas";
 answers[35] = 0;
 units[35] = ['83'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6304. ";
 preguntaids[35] = 6304


//  Id pregunta: 6296 Año de creación de pregunta: 2003
 questions[36]= "37)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al proceso unificado desarrollo de software (PUDS):";
 choices[36]= new Array();
 choices[36][0] = "Plantea un modelo de ciclo de vida iterativo e incremental, centrado en una arquitectura que gu&iacute;a el desarrollo del sistema.";
 choices[36][1] = "PUDS impulsa un control de calidad y una gesti&oacute;n de riesgos objetivos y continua.";
 choices[36][2] = "PUDS se compone de fases, iteraciones y ciclos";
 choices[36][3] = "Todas las anteriores son correctas";
 answers[36] = 3;
 units[36] = ['82'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 6296. ";
 preguntaids[36] = 6296


//  Id pregunta: 6316 Año de creación de pregunta: 2003
 questions[37]= "38)  Acorde al modelo de calidad de McCall NO es un factor de calidad con caracter&iacute;sticas de explotaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Fiabilidad";
 choices[37][1] = "Extensibilidad";
 choices[37][2] = "Correcci&oacute;n";
 choices[37][3] = "Integridad";
 answers[37] = 1;
 units[37] = ['93'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 6316. ";
 preguntaids[37] = 6316


//  Id pregunta: 6451 Año de creación de pregunta: 2003
 questions[38]= "39)  Indicar cu&aacute;l de los siguientes no es un apartado contemplado por los criterios SNC del CSAE para elaborar un plan de contingencias";
 choices[38]= new Array();
 choices[38][0] = "Papeles y responsabilidades de los distintos actores";
 choices[38][1] = "Planificaci&oacute;n de recursos cuando se opera en situaci&oacute;n de contingencia";
 choices[38][2] = "Criterios para el retorno a explotaci&oacute;n normal";
 choices[38][3] = "Todos los anteriores son v&aacute;lidos";
 answers[38] = 3;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 6451. ";
 preguntaids[38] = 6451


//  Id pregunta: 6305 Año de creación de pregunta: 2003
 questions[39]= "40)  Indique la pr&aacute;ctica cuyo objeto es ayudar a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n, facilitando la asignaci&oacute;n de prioridades dentro de ella:";
 choices[39]= new Array();
 choices[39][0] = "Matriz TOWS";
 choices[39][1] = "An&aacute;lisis coste/beneficio";
 choices[39][2] = "Factores cr&iacute;ticos de &eacute;xito";
 choices[39][3] = "An&aacute;lisis de impacto en la organizaci&oacute;n";
 answers[39] = 2;
 units[39] = ['83'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 6305. ";
 preguntaids[39] = 6305


//  Id pregunta: 6367 Año de creación de pregunta: 2003
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[40]= new Array();
 choices[40][0] = "El protocolo IPv6 admite direcciones en IPv4";
 choices[40][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[40][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[40][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[40] = 1;
 units[40] = ['100'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 6367. Examen 2006 JCYL";
 preguntaids[40] = 6367


//  Id pregunta: 6448 Año de creación de pregunta: 2003
 questions[41]= "42)  Indicar la respuesta falsa sobre modelos de recuperaci&oacute;n de informaci&oacute;n";
 choices[41]= new Array();
 choices[41][0] = "En general, el modelo vectorial se comporta peor que el probabil&iacute;stico cuando se usa contra colecciones gen&eacute;ricas de documentos";
 choices[41][1] = "Las redes neuronales son muy &uacute;tiles en un sistema de recuperaci&oacute;n de informaci&oacute;n por su potencia reconociendo patrones";
 choices[41][2] = "Las redes de inferencia y las redes de confianza son modelos basados en redes bayesianas";
 choices[41][3] = "Los modelos estructurados permiten combinar la especificaci&oacute;n de consultas con la informaci&oacute;n de la estructura del documento";
 answers[41] = 0;
 units[41] = ['100'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6448. ";
 preguntaids[41] = 6448


//  Id pregunta: 6319 Año de creación de pregunta: 2003
 questions[42]= "43)  En relaci&oacute;n a Cocomo II:";
 choices[42]= new Array();
 choices[42][0] = "Surge en 1997 para solventar las limitaciones de Cocomo.";
 choices[42][1] = "Propone 3 modelos: Composici&oacute;n de la Aplicaci&oacute;n, Dise&ntilde;o previo y post-arquitectura.";
 choices[42][2] = "El modelo de Composici&oacute;n de la aplicaci&oacute;n se basa en l&iacute;neas de c&oacute;digo.";
 choices[42][3] = "Todas son correctas.";
 answers[42] = 0;
 units[42] = ['93'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 6319. ";
 preguntaids[42] = 6319


//  Id pregunta: 6292 Año de creación de pregunta: 2003
 questions[43]= "44)  No es cierto respecto al prototipado evolutivo:";
 choices[43]= new Array();
 choices[43][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[43][1] = "En este modelo no se asume que los requisitos vayan a cambiar continuamente desde el principio.";
 choices[43][2] = "Se construye una implementaci&oacute;n parcial de los requisitos conocidos, para que el usuario comprenda mejor la totalidad de los requisitos deseados";
 choices[43][3] = "Est&aacute; relacionado con el concepto de Desarrollo R&aacute;pido de Aplicaciones (RAD)";
 answers[43] = 1;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6292. ";
 preguntaids[43] = 6292


//  Id pregunta: 6302 Año de creación de pregunta: 2003
 questions[44]= "45)  Para el desarrollo de una planificaci&oacute;n estrat&eacute;gica se necesita conocer:";
 choices[44]= new Array();
 choices[44][0] = "La misi&oacute;n de la organizaci&oacute;n";
 choices[44][1] = "Puntos d&eacute;biles y fuertes de la organizaci&oacute;n para sacar partido de ello";
 choices[44][2] = "Los clientes, competidores y accionistas";
 choices[44][3] = "Todas las anteriores.";
 answers[44] = 3;
 units[44] = ['83'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 6302. ";
 preguntaids[44] = 6302


//  Id pregunta: 6320 Año de creación de pregunta: 2003
 questions[45]= "46)  La m&eacute;trica BANG:";
 choices[45]= new Array();
 choices[45][0] = "Es una m&eacute;trica de producto propuesta por De Marco, como indicador de funcionalidad entregada al usuario";
 choices[45][1] = "La medici&oacute;n se realiza sobre una especificaci&oacute;n de requisitos documentada mediante an&aacute;lisis estructurado y DFD";
 choices[45][2] = "Para formular esta m&eacute;trica se analizan las m&eacute;tricas primitivas, basadas en los elementos del DFD, del diccionario de datos y del modelo de datos";
 choices[45][3] = "Todas son correctas.";
 answers[45] = 3;
 units[45] = ['93'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6320. ";
 preguntaids[45] = 6320


//  Id pregunta: 6337 Año de creación de pregunta: 2003
 questions[46]= "47)  Indique cu&aacute;l no es una ventaja de la fibra &oacute;ptica frente a los cableados de cobre:";
 choices[46]= new Array();
 choices[46][0] = "Mayor ancho de banda.";
 choices[46][1] = "Inmunidad al ruido electromagn&eacute;tico.";
 choices[46][2] = "Instalaci&oacute;n y conexionado m&aacute;s sencilla.";
 choices[46][3] = "Menor tama&ntilde;o y peso.";
 answers[46] = 2;
 units[46] = ['99'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 6337. ";
 preguntaids[46] = 6337


//  Id pregunta: 6303 Año de creación de pregunta: 2003
 questions[47]= "48)  Respecto al an&aacute;lisis D.A.F.O indique la opci&oacute;n incorrecta";
 choices[47]= new Array();
 choices[47][0] = "Herramienta estrat&eacute;gica por excelencia cuyo objetivo es conocer la situaci&oacute;n real de una organizaci&oacute;n, as&iacute; como los riesgos y oportunidades que le brinda el mercado";
 choices[47][1] = "Tambi&eacute;n llamado Matriz TOWS en terminolog&iacute;a anglosajona";
 choices[47][2] = "Las amenazas y oportunidades corresponden al entorno interno de la organizaci&oacute;n, debiendo &eacute;sta a aprovecharlas o superarlas, anticip&aacute;ndose a las mismas";
 choices[47][3] = "Las fortalezas suponen ventaja competitiva que pueden servir para explotar oportunidades";
 answers[47] = 2;
 units[47] = ['83'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6303. ";
 preguntaids[47] = 6303


//  Id pregunta: 6308 Año de creación de pregunta: 2003
 questions[48]= "49)  Seg&uacute;n Metrica v3, el Plan de Sistemas de Informaci&oacute;n";
 choices[48]= new Array();
 choices[48][0] = "Se compone de 9 actividades, que deben realizarse secuencialmente sin que ninguna de ellas pueda realizarse en paralelo";
 choices[48][1] = "Tiene por objeto obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que responda a los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[48][2] = "Define el programa general de actuaciones para la planificaci&oacute;n del desarrollo de los sistemas de informaci&oacute;n y su presupuestaci&oacute;n";
 choices[48][3] = "Todas las anteriores son correctas";
 answers[48] = 1;
 units[48] = ['83'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6308. ";
 preguntaids[48] = 6308


//  Id pregunta: 6298 Año de creación de pregunta: 2003
 questions[49]= "50)  En relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[49]= new Array();
 choices[49][0] = "Tambi&eacute;n llamado &quot;con reutilizaci&oacute;n&quot;, se ensambla el desarrollo con componentes software ya existentes";
 choices[49][1] = "Es adecuado a tecnolog&iacute;as orientadas a objetos";
 choices[49][2] = "El inconveniente es la excesiva dependencia de la calidad, robustez y flexibilidad de las librer&iacute;as de componentes.";
 choices[49][3] = "Todas las anteriores son correctas";
 answers[49] = 3;
 units[49] = ['82'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 6298. ";
 preguntaids[49] = 6298


//  Id pregunta: 6311 Año de creación de pregunta: 2003
 questions[50]= "51)  Indique la afirmaci&oacute;n falsa relativa al Aseguramiento de la Calidad:";
 choices[50]= new Array();
 choices[50][0] = "Es una de las 4 interfaces definidas en M&eacute;trica v3";
 choices[50][1] = "El objetivo de esta interfaz es proporcionar un marco com&uacute;n de referencia para la definici&oacute;n y puesta marcha planes espec&iacute;ficos de aseguramiento de calidad aplicables a proyectos concretos";
 choices[50][2] = "Sus actividades orientadas a verificar y evaluar la calidad de los productos por un grupo de Aseguramiento de Calidad independiente";
 choices[50][3] = "Estas actividades entran en contradicci&oacute;n con el Plan General de Garant&iacute;a de Calidad (PGGC)";
 answers[50] = 3;
 units[50] = ['92'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 6311. ";
 preguntaids[50] = 6311


//  Id pregunta: 6389 Año de creación de pregunta: 2003
 questions[51]= "52)  Cuando analizar&iacute;amos los recursos de la organizaci&oacute;n";
 choices[51]= new Array();
 choices[51][0] = "Cuando ejecutemos un desarrollo, para determinar el costo";
 choices[51][1] = "Al valorar los recursos que se han consumido";
 choices[51][2] = "Para ver la forma de materializar un desarrollo";
 choices[51][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica";
 answers[51] = 3;
 units[51] = ['83'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 6389. Examen 2006 JCYL";
 preguntaids[51] = 6389


//  Id pregunta: 6401 Año de creación de pregunta: 2003
 questions[52]= "53)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo software en espiral, indicar qu&eacute; es lo que representa la dimensi&oacute;n radial";
 choices[52]= new Array();
 choices[52][0] = "El progreso hecho en completar cada ciclo de la espiral";
 choices[52][1] = "Coste acumulativo en el que se ha incurrido en las etapas realizadas hasta el momento actual";
 choices[52][2] = "El an&aacute;lisis de riesgos";
 choices[52][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[52] = 1;
 units[52] = ['82'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6401. Examen 2006 JCYL";
 preguntaids[52] = 6401


//  Id pregunta: 6664 Año de creación de pregunta: 2009
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[53]= new Array();
 choices[53][0] = "Vista de Componentes.";
 choices[53][1] = "Vista de Despliegue.";
 choices[53][2] = "Vista de Casos de Uso.";
 choices[53][3] = "Vista de Flujo de Datos.";
 answers[53] = 3;
 units[53] = ['89'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 6664. MAP 2008 A1";
 preguntaids[53] = 6664


//  Id pregunta: 6449 Año de creación de pregunta: 2003
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes es un tipo de consulta utilizada para recuperar informaci&oacute;n en la web?";
 choices[54]= new Array();
 choices[54][0] = "Consultas de informaci&oacute;n (informational queries)";
 choices[54][1] = "Consultas transaccionales (transactional queries)";
 choices[54][2] = "Consultas de navegaci&oacute;n (navigational queries)";
 choices[54][3] = "Todas las anteriores son consultas v&aacute;lidas";
 answers[54] = 3;
 units[54] = ['100'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6449. ";
 preguntaids[54] = 6449


//  Id pregunta: 6291 Año de creación de pregunta: 2003
 questions[55]= "56)  Respecto al prototipado r&aacute;pido es incorrecto:";
 choices[55]= new Array();
 choices[55][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[55][1] = "Tambi&eacute;n denominados de usar y tirar, ya que una vez aceptado el prototipo se desecha y se comienza el desarrollo desde cero.";
 choices[55][2] = "Se deben poder construir con facilidad para evaluarlos en una fase temprana del desarrollo";
 choices[55][3] = "Deben ser desarrollados en poco tiempo";
 answers[55] = 0;
 units[55] = ['82'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 6291. ";
 preguntaids[55] = 6291


//  Id pregunta: 6397 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[56]= new Array();
 choices[56][0] = "Liderazgo";
 choices[56][1] = "Oportunidad";
 choices[56][2] = "Satisfacci&oacute;n del cliente";
 choices[56][3] = "Satisfacer los requisitos";
 answers[56] = 0;
 units[56] = ['93'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 6397. Examen 2006 JCYL";
 preguntaids[56] = 6397


//  Id pregunta: 6621 Año de creación de pregunta: 2003
 questions[57]= "58)  Seg&uacute;n Bennet:";
 choices[57]= new Array();
 choices[57][0] = "El mantenimiento perfectivo son las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia.";
 choices[57][1] = "El mantenimiento evolutivo son las incorporaciones, modificaciones y eliminaciones necesarias en un producto software para cubrir la expansi&oacute;n o cambio en las necesidades del usuario.";
 choices[57][2] = "El mantenimiento preventivo es la realizaci&oacute;n del mantenimiento anticip&aacute;ndose a problemas futuros.";
 choices[57][3] = "El mantenimiento adaptativo es consecuencia de los cambios en los requisitos de usuario";
 answers[57] = 2;
 units[57] = ['96'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6621. ";
 preguntaids[57] = 6621


//  Id pregunta: 6317 Año de creación de pregunta: 2003
 questions[58]= "59)  En relaci&oacute;n a las m&eacute;tricas de calidad del Software NO es correcto afirmar:";
 choices[58]= new Array();
 choices[58][0] = "Las m&eacute;tricas se pueden utilizar para evaluar en qu&eacute; grado el software posee las distintas caracter&iacute;sticas que definen la calidad de un producto software.";
 choices[58][1] = "Las m&eacute;tricas se apoyan en 2 tipos de atributos, internos y externos.";
 choices[58][2] = "Los atributos internos son aquellos que se pueden medir en t&eacute;rminos de la propia entidad independientemente de su comportamiento.";
 choices[58][3] = "Las m&eacute;tricas se pueden aplicar s&oacute;lo a una etapa del ciclo de vida del desarrollo del software.";
 answers[58] = 3;
 units[58] = ['93'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6317. ";
 preguntaids[58] = 6317


//  Id pregunta: 6310 Año de creación de pregunta: 2003
 questions[59]= "60)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n a la Ingenier&iacute;a del Software";
 choices[59]= new Array();
 choices[59][0] = "El tipo de actividades que se desarrollan en Ingenier&iacute;a de Software son de desarrollo, control, gesti&oacute;n y aplicaci&oacute;n";
 choices[59][1] = "Surge como respuesta a la crisis del software con los objetivos de conseguir un producto fiable, de alta calidad y bajo coste y conducir un proceso de desarrollo de manera eficiente";
 choices[59][2] = "La ingenier&iacute;a del software es la aplicaci&oacute;n de un enfoque sistem&aacute;tico, disciplinado y cuantificable hacia el desarrollo, operaci&oacute;n y mantenimiento del software";
 choices[59][3] = "La ingenier&iacute;a del software es una tecnolog&iacute;a multicapa constituida por el proceso, los m&eacute;todos y las herramientas";
 answers[59] = 0;
 units[59] = ['92'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 6310. ";
 preguntaids[59] = 6310


//  Id pregunta: 6294 Año de creación de pregunta: 2003
 questions[60]= "61)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al modelo de ciclo de vida en espiral:";
 choices[60]= new Array();
 choices[60][0] = "Fue propuesto por Boehm para solventar los principales problemas de los modelos tradicionales";
 choices[60][1] = "Considera diferentes alternativas para alcanzar los objetivos del proyecto";
 choices[60][2] = "La dimensi&oacute;n radial indica los costes de desarrollo acumulativo";
 choices[60][3] = "Todas las anteriores son correctas";
 answers[60] = 3;
 units[60] = ['82'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 6294. ";
 preguntaids[60] = 6294


//  Id pregunta: 6445 Año de creación de pregunta: 2003
 questions[61]= "62)  En los sistemas de recuperaci&oacute;n de informaci&oacute;n full text &iquest;qu&eacute; operaciones son v&aacute;lidas para reducir el conjunto de palabras clave?";
 choices[61]= new Array();
 choices[61][0] = "Eliminiaci&oacute;n de palabras vac&iacute;as (stop words)";
 choices[61][1] = "Identificaci&oacute;n de la ra&iacute;z gramatical (stemming)";
 choices[61][2] = "Compresi&oacute;n de los conjuntos de palabras obtenidos";
 choices[61][3] = "Todas las anteriores son operaciones v&aacute;lidas";
 answers[61] = 3;
 units[61] = ['100'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6445. ";
 preguntaids[61] = 6445


//  Id pregunta: 6440 Año de creación de pregunta: 2003
 questions[62]= "63)  Indicar la respuesta verdadera";
 choices[62]= new Array();
 choices[62][0] = "En la gesti&oacute;n de contenidos lo m&aacute;s importante es el almacenamiento de los documentos";
 choices[62][1] = "La gesti&oacute;n de contenidos suele estar orientada a la creaci&oacute;n y edici&oacute;n de p&aacute;ginas web";
 choices[62][2] = "Todos los gestores de documentos son tambi&eacute;n gestores de contenidos";
 choices[62][3] = "Los gestores de documentos no est&aacute;n preparados para el manejo de muchos ficheros de gran tama&ntilde;o";
 answers[62] = 1;
 units[62] = ['99'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6440. ";
 preguntaids[62] = 6440


//  Id pregunta: 6659 Año de creación de pregunta: 2009
 questions[63]= "64)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, la complejidad de los procesos elementales transaccionales no se determina utilizando el n&uacute;mero de:";
 choices[63]= new Array();
 choices[63][0] = "DET (Data Element Type)";
 choices[63][1] = "RET (Record Element Type)";
 choices[63][2] = "FTR (File Type Referenced)";
 choices[63][3] = "Todos los anteriores se utilizan";
 answers[63] = 1;
 units[63] = ['94'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 6659. ";
 preguntaids[63] = 6659


//  Id pregunta: 6663 Año de creación de pregunta: 2009
 questions[64]= "65)  Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia";
 choices[64]= new Array();
 choices[64][0] = "Alianzas y recursos";
 choices[64][1] = "Resultados clave";
 choices[64][2] = "Resultados en la sociedad";
 choices[64][3] = "Viabilidad econ&oacute;mica";
 answers[64] = 3;
 units[64] = ['98'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 6663. MAP 2008 A1";
 preguntaids[64] = 6663


//  Id pregunta: 6446 Año de creación de pregunta: 2003
 questions[65]= "66)  &iquest;Cu&aacute;l es la principal l&iacute;nea de trabajo en el campo de la recuperaci&oacute;n de la informaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Aproximaciones sem&aacute;nticas";
 choices[65][1] = "Estad&iacute;sticas";
 choices[65][2] = "Las respuestas a) y b) son verdaderas";
 choices[65][3] = "Las respuestas a) y b) son falsas";
 answers[65] = 2;
 units[65] = ['100'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 6446. ";
 preguntaids[65] = 6446


//  Id pregunta: 6470 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo es la mejora continua de la eficiencia de los servicios y operaciones y la calidad del servicio al cliente?";
 choices[66]= new Array();
 choices[66][0] = "ITIL";
 choices[66][1] = "CMMI";
 choices[66][2] = "COBIT";
 choices[66][3] = "M&Eacute;TRICA";
 answers[66] = 0;
 units[66] = ['101'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 6470. ";
 preguntaids[66] = 6470


//  Id pregunta: 6314 Año de creación de pregunta: 2003
 questions[67]= "68)  Indique la afirmaci&oacute;n FALSA en relaci&oacute;n al modelo CMM:";
 choices[67]= new Array();
 choices[67][0] = "Consta de 5 niveles de madurez";
 choices[67][1] = "Todos los niveles se descomponen en &aacute;reas de procesos clave";
 choices[67][2] = "Las &aacute;reas de procesos clave indican las &aacute;reas que una organizaci&oacute;n debe desarrollar para mejorar su proceso software y alcanzar un nivel de madurez";
 choices[67][3] = "Las &aacute;reas claves del proceso se organizan en caracter&iacute;sticas comunes que indican si la implementaci&oacute;n de un proceso clave es efectiva, repetible y duradera.";
 answers[67] = 1;
 units[67] = ['92'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 6314. ";
 preguntaids[67] = 6314


//  Id pregunta: 6598 Año de creación de pregunta: 2009
 questions[68]= "69)  Indique la afirmaci&oacute;n correcta. Seg&uacute;n M&eacute;trica v 3, en las Relaciones 1:N se propaga el identificador de la entidad de cardinalidad m&aacute;xima 1 a la que es N, teniendo en cuenta que:";
 choices[68]= new Array();
 choices[68][0] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es clave ajena en la tabla a la que se ha propagado.";
 choices[68][1] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es la clave primaria en la tabla a la que se ha propagado.";
 choices[68][2] = "Si la relaci&oacute;n es de dependencia, la clave propagada es la clave ajena.";
 choices[68][3] = "Si la relaci&oacute;n es de dependencia la clave propagada es la clave primaria.";
 answers[68] = 0;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6598. MAP 2008 A2";
 preguntaids[68] = 6598


//  Id pregunta: 6306 Año de creación de pregunta: 2003
 questions[69]= "70)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[69]= new Array();
 choices[69][0] = "Los FCE ayudan a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n";
 choices[69][1] = "Factores de &eacute;xito son los objetivos de la organizaci&oacute;n";
 choices[69][2] = "FCE son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[69][3] = "Para definir los FCE de la organizaci&oacute;n, es necesario que los objetivos de la misma est&eacute;n claramente definidos";
 answers[69] = 1;
 units[69] = ['83'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 6306. ";
 preguntaids[69] = 6306


//  Id pregunta: 6356 Año de creación de pregunta: 2003
 questions[70]= "71)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vista de explotaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[70][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[70][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[70][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[70] = 1;
 units[70] = ['88'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 6356. Examen 2006 JCYL";
 preguntaids[70] = 6356


//  Id pregunta: 6441 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de la gesti&oacute;n documental?";
 choices[71]= new Array();
 choices[71][0] = "Limitaci&oacute;n a un &uacute;nico tipo o formato de documento para cada gestor documental";
 choices[71][1] = "Establecer m&eacute;todos seguros de distribuci&oacute;n de documentos dentro y fuera de la organizaci&oacute;n";
 choices[71][2] = "Compartir documentaci&oacute;n con los distintos  integrantes de un grupo";
 choices[71][3] = "Gestionar gran volumen de registros y recuperarlos en poco tiempo";
 answers[71] = 0;
 units[71] = ['99'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 6441. ";
 preguntaids[71] = 6441


//  Id pregunta: 6385 Año de creación de pregunta: 2003
 questions[72]= "73)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son";
 choices[72]= new Array();
 choices[72][0] = "Eficiencia y fiabilidad";
 choices[72][1] = "Fiabilidad y modularidad";
 choices[72][2] = "Fiabilidad y extensibilidad";
 choices[72][3] = "Correcci&oacute;n y verificabilidad";
 answers[72] = 1;
 units[72] = ['93'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 6385. Examen 2006 JCYL";
 preguntaids[72] = 6385


//  Id pregunta: 6333 Año de creación de pregunta: 2003
 questions[73]= "74)  La utilizaci&oacute;n de caracteres ajenos al alfabeto anglosaj&oacute;n en un nombre de dominio dentro de una red TCP/IP";
 choices[73]= new Array();
 choices[73][0] = "no es posible nunca";
 choices[73][1] = "solo es posible en redes privadas";
 choices[73][2] = "es posible en redes p&uacute;blicas y privadas que implementen la familia de RFCs relativas a los nombres de dominio internacionalizados";
 choices[73][3] = "es una posibilidad desde la creaci&oacute;n de la familia de protocolos pero que no ha sido desarrollada";
 answers[73] = 2;
 units[73] = ['100'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 6333. ";
 preguntaids[73] = 6333


//  Id pregunta: 6649 Año de creación de pregunta: 2009
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?:";
 choices[74]= new Array();
 choices[74][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados.";
 choices[74][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones.";
 choices[74][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad.";
 choices[74][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones.";
 answers[74] = 2;
 units[74] = ['89'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 6649. ";
 preguntaids[74] = 6649


