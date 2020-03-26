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
//  Id pregunta: 2102 Año de creación de pregunta: 2002
 questions[0]= "1)  El Modelo de Referencia para la Interconexi&oacute;n de Sistemas Abiertos queda especificado en la norma ISO:";
 choices[0]= new Array();
 choices[0][0] = "ISO 7498";
 choices[0][1] = "ISO 9735";
 choices[0][2] = "ISO 9075";
 choices[0][3] = "ISO 9945-1";
 answers[0] = 0;
 units[0] = ['43'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 2102. ";
 preguntaids[0] = 2102


//  Id pregunta: 2100 Año de creación de pregunta: 2002
 questions[1]= "2)  El m&eacute;todo Promethee:";
 choices[1]= new Array();
 choices[1][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[1][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[1][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[1][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[1] = 0;
 units[1] = ['38'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2100. ";
 preguntaids[1] = 2100


//  Id pregunta: 2124 Año de creación de pregunta: 2002
 questions[2]= "3)  En el contexto de la capacidad y rendimiento de los sistemas:";
 choices[2]= new Array();
 choices[2][0] = "El equipo encargado de la gesti&oacute;n de capacidad estar&aacute; formado &uacute;nica y exclusivamente por usuarios muy experimentados en el negocio de la organizaci&oacute;n";
 choices[2][1] = "Una vez obtenido el visto bueno de la direcci&oacute;n al plan de desarrollo e implantaci&oacute;n, se deber&aacute; abordar el estudio de viabilidad";
 choices[2][2] = "El equipo encargado de la gesti&oacute;n de capacidad debe ser permanente en el tiempo";
 choices[2][3] = "Como consecuencia del abaratamiento de los equipos f&iacute;sicos la gesti&oacute;n de capacidad y del rendimiento es trivial";
 answers[2] = 2;
 units[2] = ['39'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2124. ";
 preguntaids[2] = 2124


//  Id pregunta: 2130 Año de creación de pregunta: 2002
 questions[3]= "4)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[3]= new Array();
 choices[3][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[3][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[3][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[3][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[3] = 1;
 units[3] = ['33'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2130. ";
 preguntaids[3] = 2130


//  Id pregunta: 2131 Año de creación de pregunta: 2004
 questions[4]= "5)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[4]= new Array();
 choices[4][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[4][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[4][2] = "Evaluaci&oacute;n de riesgos";
 choices[4][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[4] = 0;
 units[4] = ['36', '45'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2131. Similar a examen TIC SS A 2003";
 preguntaids[4] = 2131


//  Id pregunta: 2079 Año de creación de pregunta: 2002
 questions[5]= "6)  Dentro de la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de la entrop&iacute;a se utiliza para:";
 choices[5]= new Array();
 choices[5][0] = "Asignar un peso a cada alternativa";
 choices[5][1] = "Normalizar las puntuaciones brutas otorgadas";
 choices[5][2] = "Ordenar las alternativas";
 choices[5][3] = "Suavizar la subjetividad del m&eacute;todo directo de asignaci&oacute;n de pesos";
 answers[5] = 3;
 units[5] = ['38'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2079. ";
 preguntaids[5] = 2079


//  Id pregunta: 2078 Año de creación de pregunta: 2002
 questions[6]= "7)  Dentro de la estructura administrativa de normalizaci&oacute;n comunitaria, el organismo responsable para las telecomunicaciones es:";
 choices[6]= new Array();
 choices[6][0] = "CEN";
 choices[6][1] = "CENELEC";
 choices[6][2] = "ETSI";
 choices[6][3] = "ECMA";
 answers[6] = 2;
 units[6] = ['48'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2078. ";
 preguntaids[6] = 2078


//  Id pregunta: 2068 Año de creación de pregunta: 2002
 questions[7]= "8)  Con el 20% del esfuerzo se resuelven el 80% de los problemas de una organizaci&oacute;n, y con el restante 80% del esfuerzo se resuelven el restante 20 % de los problemas seg&uacute;n la:";
 choices[7]= new Array();
 choices[7][0] = "Ley de Parkinson";
 choices[7][1] = "Ley de Fink";
 choices[7][2] = "Ley de Murphy";
 choices[7][3] = "Ley de Pareto";
 answers[7] = 3;
 units[7] = ['29'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2068. ";
 preguntaids[7] = 2068


//  Id pregunta: 2095 Año de creación de pregunta: 2002
 questions[8]= "9)  El establecimiento de un mecanismo que permita la identificaci&oacute;n de forma inequ&iacute;voca y personalizada de todo aquel usuario que intente acceder al sistema de informaci&oacute;n y la verificaci&oacute;n de que est&aacute; autorizado, es una medida de nivel:";
 choices[8]= new Array();
 choices[8][0] = "B&aacute;sico";
 choices[8][1] = "Medio";
 choices[8][2] = "Alto";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = 0;
 units[8] = ['35'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2095. ";
 preguntaids[8] = 2095


//  Id pregunta: 2113 Año de creación de pregunta: 2002
 questions[9]= "10)  El T&iacute;tulo II de la LOPD trata sobre:";
 choices[9]= new Array();
 choices[9][0] = "Principios de la protecci&oacute;n de datos";
 choices[9][1] = "Derechos de las personas";
 choices[9][2] = "Movimiento internacional de datos";
 choices[9][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[9] = 0;
 units[9] = ['35'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2113. ";
 preguntaids[9] = 2113


//  Id pregunta: 2134 Año de creación de pregunta: 2004
 questions[10]= "11)  En relaci&oacute;n a la protecci&oacute;n jur&iacute;dica de los programas de ordenador se&ntilde;arlar la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "Est&aacute; protegidos mediante los derechos de autor cualquier forma de expresi&oacute;n de un programa de ordenador, salvo aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 choices[10][1] = "Est&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se base un programa, incluidos los que sirven de fundamento a sus interfaces";
 choices[10][2] = "La primera venta de una copia de un programa por el titular de los derechos o con su consentimiento, agotar&aacute; el derecho de distribuci&oacute;n de dicha copia";
 choices[10][3] = "La duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute;: para una persona natural toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte; para una persona jur&iacute;dica 70 a&ntilde;os";
 answers[10] = 1;
 units[10] = ['41'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2134. Similar a examen TIC SS A 2003";
 preguntaids[10] = 2134


//  Id pregunta: 2092 Año de creación de pregunta: 2002
 questions[11]= "12)  El director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos tiene la consideraci&oacute;n de alto cargo. Se nombra mediante Real Decreto por un periodo de:";
 choices[11]= new Array();
 choices[11][0] = "4 a&ntilde;os";
 choices[11][1] = "5 a&ntilde;os";
 choices[11][2] = "6 a&ntilde;os";
 choices[11][3] = "Ninguno de los anteriores";
 answers[11] = 0;
 units[11] = ['35'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2092. ";
 preguntaids[11] = 2092


//  Id pregunta: 2067 Año de creación de pregunta: 2002
 questions[12]= "13)  Analizariamos los recursos de la organizaci&oacute;n...";
 choices[12]= new Array();
 choices[12][0] = "Cuando quisi&eacute;ramos realizar una programaci&oacute;n estrat&eacute;gica";
 choices[12][1] = "En la organizaci&oacute;n, para ver la forma de materializar la programaci&oacute;n";
 choices[12][2] = "Cuando ejecut&aacute;ramos una programaci&oacute;n, para determinar el costo";
 choices[12][3] = "Al realizar una valoraci&oacute;n de los que se ha consumido";
 answers[12] = 0;
 units[12] = ['36', '45'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 2067. ";
 preguntaids[12] = 2067


//  Id pregunta: 2080 Año de creación de pregunta: 2002
 questions[13]= "14)  Dentro de los objetivos que se fijar&iacute;a una auditor&iacute;a sobre el grado de adecuaci&oacute;n de las herramientas de software utilizadas a la informaci&oacute;n gestionada, &iquest;cu&aacute;l de los siguientes considera que no ser&iacute;a relevante obtener del estudio?:";
 choices[13]= new Array();
 choices[13][0] = "Fiabilidad t&eacute;cnica";
 choices[13][1] = "Cambio del modelo de datos utilizados";
 choices[13][2] = "Estudio de opini&oacute;n de los usuarios";
 choices[13][3] = "Facilidad de mantenimiento y expansi&oacute;n";
 answers[13] = 1;
 units[13] = ['36', '45'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2080. ";
 preguntaids[13] = 2080


//  Id pregunta: 2135 Año de creación de pregunta: 2004
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponde con una soluci&oacute;n ERP (Enterprise Resource Planning)?";
 choices[14]= new Array();
 choices[14][0] = "Alto grado de modularidad";
 choices[14][1] = "Homogeneizaci&oacute;n de Procesos Corporativos";
 choices[14][2] = "Facilidad de implementaci&oacute;n en corto plazo";
 choices[14][3] = "Integraci&oacute;n total de &aacute;reas organizativas";
 answers[14] = 2;
 units[14] = ['24'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2135. Examen TIC MAP B 2004";
 preguntaids[14] = 2135


//  Id pregunta: 2066 Año de creación de pregunta: 2002
 questions[15]= "16)  En relaci&oacute;n con los sistemas abiertos, las caracter&iacute;sticas t&eacute;cnicas m&aacute;s comunmente citadas son:";
 choices[15]= new Array();
 choices[15][0] = "Interoperabilidad, consistencia y escalabilidad";
 choices[15][1] = "Interoperabilidad, conectividad e integrabilidad";
 choices[15][2] = "Consistencia, portabilidad e integrabilidad";
 choices[15][3] = "Interoperabilidad, portabilidad y escalabilidad";
 answers[15] = 3;
 units[15] = ['43'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 2066. ";
 preguntaids[15] = 2066


//  Id pregunta: 2108 Año de creación de pregunta: 2002
 questions[16]= "17)  El punto que centraliza las comunicaciones de los usuarios con Sistemas de Informaci&oacute;n suele denominarse:";
 choices[16]= new Array();
 choices[16][0] = "Centro de control de red";
 choices[16][1] = "Help desk";
 choices[16][2] = "Centro de contingencias";
 choices[16][3] = "Soporte de teleproceso";
 answers[16] = 1;
 units[16] = ['30'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2108. ";
 preguntaids[16] = 2108


//  Id pregunta: 2129 Año de creación de pregunta: 2002
 questions[17]= "18)  En el marco de la decisi&oacute;n multicriterio, la normalizaci&oacute;n es el proceso por el que:";
 choices[17]= new Array();
 choices[17][0] = "Se eliminan las alternativas que no intervienen en el c&aacute;lculo";
 choices[17][1] = "Se desactivan aquellos criterios en los que todas las alternativas alcanzan id&eacute;ntica puntuaci&oacute;n";
 choices[17][2] = "Se ajusta la matriz de puntuaciones seg&uacute;n un modelo de referencia";
 choices[17][3] = "Se modifica el contenido de la matriz de puntuaciones para hacer &eacute;sta comparables entre s&iacute;";
 answers[17] = 3;
 units[17] = ['38'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2129. ";
 preguntaids[17] = 2129


//  Id pregunta: 2105 Año de creación de pregunta: 2002
 questions[18]= "19)  El nivel de adecuaci&oacute;n AA indica:";
 choices[18]= new Array();
 choices[18][0] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1";
 choices[18][1] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1 y 2";
 choices[18][2] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2 y 3";
 choices[18][3] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2, 3 y 4";
 answers[18] = 1;
 units[18] = ['42'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2105. ";
 preguntaids[18] = 2105


//  Id pregunta: 2070 Año de creación de pregunta: 2002
 questions[19]= "20)  Cuando hablamos de un nuevo tipo de trabajo en las organizaciones basadas en la informaci&oacute;n, nos referimos a:";
 choices[19]= new Array();
 choices[19][0] = "Disminuci&oacute;n de la presi&oacute;n sobre el trabajador y aumento sobre los sistemas de informaci&oacute;n";
 choices[19][1] = "Necesidad de un trabajador m&aacute;s inteligente pues necesita establecer conexiones entre los s&iacute;mbolos y la realidad";
 choices[19][2] = "Aumento de la conexi&oacute;n del trabajador con el mundo exterior lejano a &eacute;l, gracias a las redes internacionales de ordenadores";
 choices[19][3] = "Aumento de la satisfacci&oacute;n del trabajador que observa la capacidad de producci&oacute;n que tiene el simple hecho de pulsar una tecla del ordenador";
 answers[19] = 1;
 units[19] = ['25'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2070. ";
 preguntaids[19] = 2070


//  Id pregunta: 2074 Año de creación de pregunta: 2002
 questions[20]= "21)  De acuerdo con la Ley de Protecci&oacute;n de Datos, el Registro General de Protecci&oacute;n de Datos es un &oacute;rgano integrado en la Agencia de Protecci&oacute;n de Datos y ser&aacute;n objeto de inscripci&oacute;n en &eacute;l:";
 choices[20]= new Array();
 choices[20][0] = "Los ficheros de los que sean titulares las Administraciones P&uacute;blicas";
 choices[20][1] = "Los ficheros de titularidad privada";
 choices[20][2] = "Los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[20][3] = "Todas las afirmaciones son correctas";
 answers[20] = 3;
 units[20] = ['35'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2074. ";
 preguntaids[20] = 2074


//  Id pregunta: 2088 Año de creación de pregunta: 2002
 questions[21]= "22)  El benchmark es adecuado cuando:";
 choices[21]= new Array();
 choices[21][0] = "Vamos a adquirir aplicaciones a medida";
 choices[21][1] = "Los entornos de las diversas opciones difieren";
 choices[21][2] = "Queremos desarrollar un proyecto innovador";
 choices[21][3] = "Queremos comparar el rendimiento de un sistema respecto al de otros";
 answers[21] = 3;
 units[21] = ['39'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2088. ";
 preguntaids[21] = 2088


//  Id pregunta: 2132 Año de creación de pregunta: 2004
 questions[22]= "23)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[22]= new Array();
 choices[22][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[22][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[22][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[22][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[22] = 2;
 units[22] = ['36', '45'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2132. Similar a examen TIC SS A 2003";
 preguntaids[22] = 2132


//  Id pregunta: 2123 Año de creación de pregunta: 2002
 questions[23]= "24)  En el &aacute;rea de los sistemas de informaci&oacute;n, &iquest;cu&aacute;l es el significado de las siglas MIS?:";
 choices[23]= new Array();
 choices[23][0] = "Manufacturing In Sequence";
 choices[23][1] = "Manufacturing Information System";
 choices[23][2] = "Management Information System";
 choices[23][3] = "Modelling Input System";
 answers[23] = 2;
 units[23] = ['24'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2123. ";
 preguntaids[23] = 2123


//  Id pregunta: 2091 Año de creación de pregunta: 2009
 questions[24]= "25)  El derecho de informaci&oacute;n en la recogida de datos define la informaci&oacute;n que, obligatoriamente y con car&aacute;cter previo, se debe comunicar al afectado al que se le requiera para suministrar cualquier dato personal. Entre dicha informaci&oacute;n consta:";
 choices[24]= new Array();
 choices[24][0] = "El car&aacute;cter voluntario u obligatorio de las respuestas y de las consecuencias de la negativa a proporcionarlas";
 choices[24][1] = "El plazo de almacenamiento de la informaci&oacute;n";
 choices[24][2] = "El n&uacute;mero de cesiones que se van a realizar";
 choices[24][3] = "S&oacute;lo es necesario comunicar al afectado que se va a crear el fichero";
 answers[24] = 0;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2091. ";
 preguntaids[24] = 2091


//  Id pregunta: 2115 Año de creación de pregunta: 2002
 questions[25]= "26)  El T&iacute;tulo VI de la LOPD trata sobre:";
 choices[25]= new Array();
 choices[25][0] = "Principios de la protecci&oacute;n de datos";
 choices[25][1] = "Derechos de las personas";
 choices[25][2] = "Movimiento internacional de datos";
 choices[25][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[25] = 3;
 units[25] = ['35'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2115. ";
 preguntaids[25] = 2115


//  Id pregunta: 2085 Año de creación de pregunta: 2002
 questions[26]= "27)  El American National Standard Institute (ANSI):";
 choices[26]= new Array();
 choices[26][0] = "Es el representante en EE.UU. de la ISO";
 choices[26][1] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[26][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[26][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[26] = 0;
 units[26] = ['48'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2085. ";
 preguntaids[26] = 2085


//  Id pregunta: 2072 Año de creación de pregunta: 2002
 questions[27]= "28)  Cuando una certificaci&oacute;n es realizada por un organismo de la Administraci&oacute;n, aquella se denomina:";
 choices[27]= new Array();
 choices[27][0] = "Prueba de conformidad";
 choices[27][1] = "Normalizaci&oacute;n";
 choices[27][2] = "Homologaci&oacute;n";
 choices[27][3] = "Especificaci&oacute;n";
 answers[27] = 2;
 units[27] = ['48'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2072. ";
 preguntaids[27] = 2072


//  Id pregunta: 2112 Año de creación de pregunta: 2002
 questions[28]= "29)  El sistema de informaci&oacute;n integrado en una organizaci&oacute;n debe tener unos objetivos. &iquest;Cu&aacute;l no ser&iacute;a exactamente uno de ellos?:";
 choices[28]= new Array();
 choices[28][0] = "Suministrar datos a los distintos niveles de la direcci&oacute;n";
 choices[28][1] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[28][2] = "Extraer ventajas competitivas de su entorno";
 choices[28][3] = "Ayudar a determinar los objetivos de la organizaci&oacute;n";
 answers[28] = 3;
 units[28] = ['24'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2112. ";
 preguntaids[28] = 2112


//  Id pregunta: 2109 Año de creación de pregunta: 2009
 questions[29]= "30)  El Registro General de Protecci&oacute;n de Datos:";
 choices[29]= new Array();
 choices[29][0] = "Inscribe de oficio las autorizaciones de transferencias internacionales de datos";
 choices[29][1] = "Da libre acceso a los ficheros de datos personales";
 choices[29][2] = "Inscribe &uacute;nicamente los ficheros automatizados de las AAPP";
 choices[29][3] = "Es el &Oacute;rgano ante el que se ejerce el derecho de informaci&oacute;n, acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 answers[29] = 0;
 units[29] = ['35'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2109. ";
 preguntaids[29] = 2109


//  Id pregunta: 2110 Año de creación de pregunta: 2002
 questions[30]= "31)  El representante de Estados Unidos en la ISO es:";
 choices[30]= new Array();
 choices[30][0] = "AENOR";
 choices[30][1] = "BSI";
 choices[30][2] = "IEEE";
 choices[30][3] = "ANSI";
 answers[30] = 3;
 units[30] = ['48'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 2110. ";
 preguntaids[30] = 2110


//  Id pregunta: 2101 Año de creación de pregunta: 2002
 questions[31]= "32)  El modelo de Nolan de cuatro etapas si lo representamos gr&aacute;ficamente tiene forma de:";
 choices[31]= new Array();
 choices[31][0] = "s";
 choices[31][1] = "n";
 choices[31][2] = "u";
 choices[31][3] = "z";
 answers[31] = 0;
 units[31] = ['24'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 2101. ";
 preguntaids[31] = 2101


//  Id pregunta: 2136 Año de creación de pregunta: 2004
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[32]= new Array();
 choices[32][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[32][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[32][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[32][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[32] = 2;
 units[32] = ['33'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2136. Examen TIC MAP B 2004";
 preguntaids[32] = 2136


//  Id pregunta: 2107 Año de creación de pregunta: 2002
 questions[33]= "34)  El porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Overlap";
 choices[33][1] = "Swaping";
 choices[33][2] = "Throughput";
 choices[33][3] = "Overhead";
 answers[33] = 3;
 units[33] = ['39'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 2107. ";
 preguntaids[33] = 2107


//  Id pregunta: 2084 Año de creación de pregunta: 2002
 questions[34]= "35)  El m&eacute;todo de ordenaci&oacute;n de alternativas que incorpora la posibilidad de valorar el riesgo y la incertidumbre es:";
 choices[34]= new Array();
 choices[34][0] = "El m&eacute;todo Promethee";
 choices[34][1] = "Utilidad multiatributo";
 choices[34][2] = "El m&eacute;todo de permutaci&oacute;n";
 choices[34][3] = "Ninguno de los restantes";
 answers[34] = 1;
 units[34] = ['38'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2084. ";
 preguntaids[34] = 2084


//  Id pregunta: 2089 Año de creación de pregunta: 2002
 questions[35]= "36)  El conjunto de t&eacute;cnicas y procedimientos que garantizan la disponibilidad de la informaci&oacute;n, la integridad del sistema y la confidencialidad, son propias de:";
 choices[35]= new Array();
 choices[35][0] = "Una auditor&iacute;a inform&aacute;tica";
 choices[35][1] = "Un plan de contingencia";
 choices[35][2] = "La seguridad inform&aacute;tica";
 choices[35][3] = "Una planificaci&oacute;n estrat&eacute;gica";
 answers[35] = 2;
 units[35] = ['36', '45'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2089. ";
 preguntaids[35] = 2089


//  Id pregunta: 2125 Año de creación de pregunta: 2002
 questions[36]= "37)  En el contexto de la normalizaci&oacute;n, pruebas de conformidad y certificaciones, determine cu&aacute;l de las siguientes sentencias es falsa:";
 choices[36]= new Array();
 choices[36][0] = "Las pruebas de conformidad tienen que ser realizadas por un laboratorio independiente";
 choices[36][1] = "Certificaci&oacute;n y homologaci&oacute;n son conceptos equivalentes";
 choices[36][2] = "Una norma es una especificaci&oacute;n t&eacute;cnica aprobada por un organismo autorizado de normalizaci&oacute;n y cuyo cumplimiento no es obligatorio";
 choices[36][3] = "Normalizaci&oacute;n es un conjunto de actividades entre las que se incluyen los m&eacute;todos de medida relativos a las normas";
 answers[36] = 0;
 units[36] = ['48'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2125. ";
 preguntaids[36] = 2125


//  Id pregunta: 2140 Año de creación de pregunta: 2004
 questions[37]= "38)  El t&eacute;rmino COBIT es un acr&oacute;nimo angl&oacute;fono que procede de los siguientes t&eacute;rminos, o significa lo siguiente en el idioma ingl&eacute;s:";
 choices[37]= new Array();
 choices[37][0] = "Computer Building Information Technology";
 choices[37][1] = "Computational Binary Translation";
 choices[37][2] = "Control Objetives for Information and Related Technology";
 choices[37][3] = "Committee of Business Information Technique";
 answers[37] = 2;
 units[37] = ['24'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2140. Examen TIC MAP B 2004";
 preguntaids[37] = 2140


//  Id pregunta: 2127 Año de creación de pregunta: 2002
 questions[38]= "39)  En el control de integridad de los datos no entra el control de:";
 choices[38]= new Array();
 choices[38][0] = "Fallos en la disponibilidad de los datos";
 choices[38][1] = "La p&eacute;rdida de los datos";
 choices[38][2] = "Duplicaciones de datos";
 choices[38][3] = "Alteraci&oacute;n del significado de los datos";
 answers[38] = 0;
 units[38] = ['24'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2127. ";
 preguntaids[38] = 2127


//  Id pregunta: 2119 Año de creación de pregunta: 2002
 questions[39]= "40)  En cuanto a las sanciones a aplicar por incumpimiento de la LOPD y las medidas de protecci&oacute;n asociadas:";
 choices[39]= new Array();
 choices[39][0] = "La prescripci&oacute;n de las sanciones es de 2 a&ntilde;os para sanciones leves, 3 para las graves y 4 para las muy graves";
 choices[39][1] = "Las infracciones muy graves ser&aacute;n sancionadas con multa de 300.001 a 600.000 euros.";
 choices[39][2] = "En ning&uacute;n caso se deber&aacute;n inmovilizar ni destruir los ficheros causantes de la sanci&oacute;n";
 choices[39][3] = "La cuant&iacute;a de la sanci&oacute;n est&aacute; prefijada, no depende de factores como el volumen de informaci&oacute;n, los derechos personales afectados, los beneficios obtenidos o la reincidencia";
 answers[39] = 1;
 units[39] = ['35'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2119. ";
 preguntaids[39] = 2119


//  Id pregunta: 2075 Año de creación de pregunta: 2002
 questions[40]= "41)  De acuerdo con la Ley de Protecci&oacute;n de Datos, mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen, es una infracci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Leve";
 choices[40][1] = "Grave";
 choices[40][2] = "Muy grave";
 choices[40][3] = "No es infracci&oacute;n";
 answers[40] = 1;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 2075. ";
 preguntaids[40] = 2075


//  Id pregunta: 2086 Año de creación de pregunta: 2002
 questions[41]= "42)  El an&aacute;lisis DAFO mide en una empresa:";
 choices[41]= new Array();
 choices[41][0] = "Decisiones, An&aacute;lisis, Fuerzas, Oportunidades";
 choices[41][1] = "Debilidades, Adaptaciones, Fallos, Opciones";
 choices[41][2] = "Decisiones, Amenazas, Fallos, Oportunidades";
 choices[41][3] = "Debilidades, Amenazas, Fuerzas, Oportunidades";
 answers[41] = 3;
 units[41] = ['25'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 2086. ";
 preguntaids[41] = 2086


//  Id pregunta: 2090 Año de creación de pregunta: 2002
 questions[42]= "43)  El Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos:";
 choices[42]= new Array();
 choices[42][0] = "Es un &oacute;rgano colegiado de asesoramiento del Director de la Agencia";
 choices[42][1] = "Emite informes en todas las cuestiones que le somete el Director";
 choices[42][2] = "Formula propuestas en temas relacionados con las competencias de la Agencia";
 choices[42][3] = "Todas son correctas";
 answers[42] = 3;
 units[42] = ['35'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2090. ";
 preguntaids[42] = 2090


//  Id pregunta: 2087 Año de creación de pregunta: 2002
 questions[43]= "44)  El art&iacute;culo 18.4 de la Constituci&oacute;n dice que:";
 choices[43]= new Array();
 choices[43][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos";
 choices[43][1] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[43][2] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros inform&aacute;ticos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[43][3] = "Los tratados internacionales v&aacute;lidamente celebrados, una vez publicados oficialmente en Espa&ntilde;a, formar&aacute;n parte del ordenamiento interno";
 answers[43] = 0;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2087. ";
 preguntaids[43] = 2087


//  Id pregunta: 2133 Año de creación de pregunta: 2004
 questions[44]= "45)  En la Metodolog&iacute;a MAGERIT, el evento que pueden desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales en sus activos, se denomina:";
 choices[44]= new Array();
 choices[44][0] = "Impacto";
 choices[44][1] = "Vulnerabilidad";
 choices[44][2] = "Amenaza";
 choices[44][3] = "Riesgo";
 answers[44] = 2;
 units[44] = ['45'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2133. Similar a examen TIC SS A 2003";
 preguntaids[44] = 2133


//  Id pregunta: 2122 Año de creación de pregunta: 2002
 questions[45]= "46)  En el &aacute;mbito de la normalizaci&oacute;n comunitaria, las siglas CEPT corresponden a:";
 choices[45]= new Array();
 choices[45][0] = "El Comit&eacute; europeo de normalizaci&oacute;n";
 choices[45][1] = "El Comit&eacute; europeo de electrotecnia";
 choices[45][2] = "La Confederaci&oacute;n europea de Administraciones de correos y telecomunicaciones";
 choices[45][3] = "La Confederaci&oacute;n de Asociaciones de usuariios de ordenadores";
 answers[45] = 2;
 units[45] = ['48'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2122. ";
 preguntaids[45] = 2122


//  Id pregunta: 2103 Año de creación de pregunta: 2002
 questions[46]= "47)  El modelo modificado en 6 etapas de Nolan:";
 choices[46]= new Array();
 choices[46][0] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[46][1] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, almacenamiento de datos y madurez";
 choices[46][2] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[46][3] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, almacenamiento de datos y madurez";
 answers[46] = 2;
 units[46] = ['25'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2103. ";
 preguntaids[46] = 2103


//  Id pregunta: 2093 Año de creación de pregunta: 2009
 questions[47]= "48)  El Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[47]= new Array();
 choices[47][0] = "Es nombrado por las Cortes Generales";
 choices[47][1] = "No puede ser cesado antes de la finalizaci&oacute;n de su mandato";
 choices[47][2] = "Ostenta el rango de Subsecretario";
 choices[47][3] = "Tiene una mandato de 6 a&ntilde;os";
 answers[47] = 2;
 units[47] = ['35'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 2093. ";
 preguntaids[47] = 2093


//  Id pregunta: 2097 Año de creación de pregunta: 2002
 questions[48]= "49)  El estudio de la informaci&oacute;n, su calidad, flujo y seguridad es caracter&iacute;stico de:";
 choices[48]= new Array();
 choices[48][0] = "La auditor&iacute;a inform&aacute;tica";
 choices[48][1] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[48][2] = "La planificaci&oacute;n de capacidad del sistema";
 choices[48][3] = "Las t&eacute;cnicas de control de proyectos";
 answers[48] = 0;
 units[48] = ['36', '45'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 2097. ";
 preguntaids[48] = 2097


//  Id pregunta: 2111 Año de creación de pregunta: 2002
 questions[49]= "50)  El siguiente punto de verificaci&oacute;n de WAI (en la norma WCAG 1.0): &quot;Hasta que las aplicaciones de usuario permitan controlarlo, evite provocar parpadeo en la pantalla&quot;, &iquest;a qu&eacute; nivel de prioridad pertenece?:";
 choices[49]= new Array();
 choices[49][0] = "1";
 choices[49][1] = "2";
 choices[49][2] = "3";
 choices[49][3] = "no es ning&uacute;n punto de verificaci&oacute;n contemplado en WAI";
 answers[49] = 0;
 units[49] = ['42'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2111. ";
 preguntaids[49] = 2111


//  Id pregunta: 2118 Año de creación de pregunta: 2002
 questions[50]= "51)  En auditor&iacute;a inform&aacute;tica, los controles de salida contienen, entre otros, a:";
 choices[50]= new Array();
 choices[50][0] = "Registro y almacenamiento de formularios negociables";
 choices[50][1] = "Autorizaci&oacute;n de la distribuci&oacute;n";
 choices[50][2] = "Balanceo y conciliaci&oacute;n";
 choices[50][3] = "Todas las anteriores";
 answers[50] = 3;
 units[50] = ['36', '45'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2118. ";
 preguntaids[50] = 2118


//  Id pregunta: 2117 Año de creación de pregunta: 2002
 questions[51]= "52)  En auditor&iacute;a inform&aacute;tica, el objeto de una &quot;prueba de cumplimiento&quot; es:";
 choices[51]= new Array();
 choices[51][0] = "Verificar el cumplimiento de la legislaci&oacute;n y la normativa vigente en las operaciones de un sistema de informaci&oacute;n, especialmente en el cap&iacute;tulo de compras y gesti&oacute;n de personal";
 choices[51][1] = "Sustanciar la probabilidad de que los objetivos de control no se alcancen";
 choices[51][2] = "Determinar si los controles se est&aacute;n aplicando de la forma descrita en la documentaci&oacute;n o de la forma descrita por el usuario o directivo";
 choices[51][3] = "Verificar que todos los usuarios se adhieren voluntaria u obligatoriamente a la pol&iacute;tica sobre usos de recursos inform&aacute;ticos implantada por la Direcci&oacute;n";
 answers[51] = 2;
 units[51] = ['36', '45'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2117. ";
 preguntaids[51] = 2117


//  Id pregunta: 2083 Año de creación de pregunta: 2002
 questions[52]= "53)  EIA es una organizaci&oacute;n que:";
 choices[52]= new Array();
 choices[52][0] = "Elabor&oacute; el est&aacute;ndar EIA232 (o RS-232)";
 choices[52][1] = "Es una asociaci&oacute;n europea de industrias electr&oacute;nicas";
 choices[52][2] = "Significa Electronic International Association";
 choices[52][3] = "Est&aacute; dedicada al desarrollo de est&aacute;ndares en Europa que se aplican a las tecnolog&iacute;as de ordenadores y telecomunicaciones";
 answers[52] = 0;
 units[52] = ['48'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2083. ";
 preguntaids[52] = 2083


//  Id pregunta: 2141 Año de creación de pregunta: 2004
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[53]= new Array();
 choices[53][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[53][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[53][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[53][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[53] = 2;
 units[53] = ['45'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 2141. Examen TIC MAP B 2004";
 preguntaids[53] = 2141


//  Id pregunta: 2116 Año de creación de pregunta: 2002
 questions[54]= "55)  El valor econ&oacute;mico del producto software en sistemas complejos es:";
 choices[54]= new Array();
 choices[54][0] = "Despreciable, ya que el proveedor suele regalarlo con el hardware";
 choices[54][1] = "Independiente del n&uacute;mero de usuarios";
 choices[54][2] = "Generalmente mayor que el del producto hardware";
 choices[54][3] = "Menor que su coste de mantenimiento anual";
 answers[54] = 2;
 units[54] = ['39'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2116. ";
 preguntaids[54] = 2116


//  Id pregunta: 2094 Año de creación de pregunta: 2002
 questions[55]= "56)  El dominio de la informaci&oacute;n se articula en tres grandes partes:";
 choices[55]= new Array();
 choices[55][0] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, estructura de la informaci&oacute;n";
 choices[55][1] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[55][2] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[55][3] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, estructura de la informaci&oacute;n";
 answers[55] = 3;
 units[55] = ['24'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2094. ";
 preguntaids[55] = 2094


//  Id pregunta: 2114 Año de creación de pregunta: 2002
 questions[56]= "57)  El T&iacute;tulo V de la LOPD trata sobre:";
 choices[56]= new Array();
 choices[56][0] = "Principios de la protecci&oacute;n de datos";
 choices[56][1] = "Derechos de las personas";
 choices[56][2] = "Movimiento internacional de datos";
 choices[56][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[56] = 2;
 units[56] = ['35'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 2114. ";
 preguntaids[56] = 2114


//  Id pregunta: 2099 Año de creación de pregunta: 2002
 questions[57]= "58)  El la teor&iacute;a de la decisi&oacute;n multicriterio discreta, para el problema de la asignaci&oacute;n de pesos a criterios pueden utilizarse, entre otros, los m&eacute;todos:";
 choices[57]= new Array();
 choices[57][0] = "Lexicogr&aacute;fico y Promethee";
 choices[57][1] = "El m&eacute;todo de ponderaci&oacute;n lineal";
 choices[57][2] = "El m&eacute;todo Delphi y el de la entrop&iacute;a";
 choices[57][3] = "El m&eacute;todo de ponderaci&oacute;n";
 answers[57] = 2;
 units[57] = ['38'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2099. ";
 preguntaids[57] = 2099


//  Id pregunta: 2106 Año de creación de pregunta: 2002
 questions[58]= "59)  El objetivo fundamental de un sistema de informaci&oacute;n para la alta direcci&oacute;n de una organizaci&oacute;n debe ser:";
 choices[58]= new Array();
 choices[58][0] = "Conseguir que los directivos de la misma logren acceder a toda la informaci&oacute;n contenida en las bases de datos de la organizaci&oacute;n";
 choices[58][1] = "Poner a disposici&oacute;n de los directivos herramientas de investigaci&oacute;n operativa que permitan simular problemas relacionados con el sector a que pertenezca la empresa a partir de datos obtenidos de otras empresas";
 choices[58][2] = "Lograr un subproducto del sistema de informaci&oacute;n corporativo e integrado con &eacute;ste, susceptible de ser tratado con herramientas de simulaci&oacute;n";
 choices[58][3] = "Elaborar los procesos batch necesarios que cubran el nivel de informaci&oacute;n desagregada fijado por la direcci&oacute;n";
 answers[58] = 2;
 units[58] = ['24'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2106. ";
 preguntaids[58] = 2106


//  Id pregunta: 2126 Año de creación de pregunta: 2002
 questions[59]= "60)  En el contexto de la ordenaci&oacute;n de alternativas en la teor&iacute;a de la DMD, el m&eacute;todo Promethee:";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo tiene en cuenta los criterios de mayor peso";
 choices[59][1] = "Se basa en las comparaciones binarias de alternativas";
 choices[59][2] = "Utiliza el c&aacute;lculo de relaciones de superaci&oacute;n entre alternativas";
 choices[59][3] = "Es la generalizaci&oacute;n del m&eacute;todo de la ponderaci&oacute;n lineal";
 answers[59] = 2;
 units[59] = ['38'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2126. ";
 preguntaids[59] = 2126


//  Id pregunta: 2076 Año de creación de pregunta: 2002
 questions[60]= "61)  De las siguientes afirmaciones referentes al m&eacute;todo lexicogr&aacute;fico de ordenaci&oacute;n de alternativas, indique cu&aacute;l es m&aacute;s correcta:";
 choices[60]= new Array();
 choices[60][0] = "El m&eacute;todo lexicogr&aacute;fico tiene como inconveniente que no utiliza toda la informaci&oacute;n disponible";
 choices[60][1] = "El m&eacute;todo lexicogr&aacute;fico requiere comparabilidad intercriterios";
 choices[60][2] = "El m&eacute;todo lexicogr&aacute;fico da como resultado un preorden parcial de las alternativas, pudiendo quedar alternativas declaradas como incomparables";
 choices[60][3] = "Todas las respuestas anteriores son ciertas";
 answers[60] = 0;
 units[60] = ['38'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2076. ";
 preguntaids[60] = 2076


//  Id pregunta: 2121 Año de creación de pregunta: 2002
 questions[61]= "62)  En el &aacute;mbito de la auditor&iacute;a de eficiencia, &eacute;sta es m&aacute;xima&hellip;:";
 choices[61]= new Array();
 choices[61][0] = "Cuando los costes de desarrollo, mantenimiento y operaci&oacute;n del sistema son los m&aacute;s bajos posiles";
 choices[61][1] = "Cuando se cumplen todos los requisitos de los usuarios y los objetivos del organismo";
 choices[61][2] = "Cuando el personal de sistemas de informaci&oacute;n trabaja con la m&aacute;xima diligencia";
 choices[61][3] = "Cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[61] = 3;
 units[61] = ['36', '45'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2121. ";
 preguntaids[61] = 2121


//  Id pregunta: 2128 Año de creación de pregunta: 2002
 questions[62]= "63)  En el estudio de la capacidad de los sistemas de informaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "La demanda latente es el trabajo frenado por la falta de recursos";
 choices[62][1] = "La teor&iacute;a de colas es un m&eacute;todo emp&iacute;rico, no matem&aacute;tico";
 choices[62][2] = "La frecuencia de swapping es el n&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo en un sistema de memoria virtual paginada";
 choices[62][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[62] = 0;
 units[62] = ['39'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 2128. ";
 preguntaids[62] = 2128


//  Id pregunta: 2071 Año de creación de pregunta: 2002
 questions[63]= "64)  Si la transmisi&oacute;n de datos de car. personal por una red tiene que cifrar los datos o utilizar mecanismos para garantizar que dicha informaci&oacute;n no sea inteligible ni manipulable por terceros, estamos aplicando medidas de tipo:";
 choices[63]= new Array();
 choices[63][0] = "B&aacute;sico";
 choices[63][1] = "Medio";
 choices[63][2] = "Alto";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = 2;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2071. ";
 preguntaids[63] = 2071


//  Id pregunta: 2138 Año de creación de pregunta: 2004
 questions[64]= "65)  En el caso que se desee caracterizar la carga de un sistema inform&aacute;tico, qu&eacute; par&aacute;metro no se deber&iacute;a tener en cuenta:";
 choices[64]= new Array();
 choices[64][0] = "Tiempo de CPU por trabajo.";
 choices[64][1] = "Tiempo de reflexi&oacute;n del usuario.";
 choices[64][2] = "Memoria necesaria para ejecutar un trabajo.";
 choices[64][3] = "Troughput.";
 answers[64] = 3;
 units[64] = ['39'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 2138. ";
 preguntaids[64] = 2138


//  Id pregunta: 2082 Año de creación de pregunta: 2002
 questions[65]= "66)  Desde el punto de vista de un auditor de seguridad indique cu&aacute;l de las siguientes premisas, sobre control interno de acceso l&oacute;gico, es inadecuada:";
 choices[65]= new Array();
 choices[65][0] = "El sistema debe obligar al usuario a cambiar de contrase&ntilde;a cada cierto tiempo";
 choices[65][1] = "El registro o log de acceso al sistema puede desactivarse a petici&oacute;n del responsable de seguridad";
 choices[65][2] = "Es conveniente que la autenticaci&oacute;n de entrada al sistema se haga una &uacute;nica vez";
 choices[65][3] = "El sistema debe rechazar el acceso a los usuarios despu&eacute;s de una serie de intentos fallidos";
 answers[65] = 1;
 units[65] = ['36', '45'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2082. ";
 preguntaids[65] = 2082


//  Id pregunta: 2137 Año de creación de pregunta: 2004
 questions[66]= "67)  El An&aacute;lisis Coste-Beneficio es una t&eacute;cnica empleada en el estudio de viabilidad de un nuevo sistema de informaci&oacute;n. &iquest;Cu&aacute;l de las siguientes no es una utilidad del An&aacute;lisis Coste-Beneficio?";
 choices[66]= new Array();
 choices[66][0] = "Valorar la necesidad y oportunidad de acometer la realizaci&oacute;n del proyecto.";
 choices[66][1] = "Calcular el punto de amortizaci&oacute;n del proyecto.";
 choices[66][2] = "Seleccionar la alternativa m&aacute;s beneficiosa.";
 choices[66][3] = "Estimar adecuadamente los recursos econ&oacute;micos necesarios.";
 answers[66] = 1;
 units[66] = ['33'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2137. Examen TIC MAP B 2004";
 preguntaids[66] = 2137


//  Id pregunta: 2065 Año de creación de pregunta: 2002
 questions[67]= "68)  En relaci&oacute;n con los sistemas abiertos, indique la afirmaci&oacute;n que no es correcta:";
 choices[67]= new Array();
 choices[67][0] = "Los sistemas abiertos son aqu&eacute;llos cuyas especificaciones est&aacute;n aprobadas por organismos independientes de normalizaci&oacute;n";
 choices[67][1] = "En lo tocante a sistemas operativos, sistema abierto es sin&oacute;nimo de Unix";
 choices[67][2] = "Sistemas abiertos son aqu&eacute;llos que pueden ser adquiridos de fuentes distintas en un mercado competitivo";
 choices[67][3] = "Un sistema definido como abierto es capaz de interconectarse con otro de acuerdo con unas normas establecidas";
 answers[67] = 1;
 units[67] = ['43'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 2065. ";
 preguntaids[67] = 2065


//  Id pregunta: 2096 Año de creación de pregunta: 2002
 questions[68]= "69)  El est&aacute;ndar POSIX se corresponde con la norma internacional:";
 choices[68]= new Array();
 choices[68][0] = "ISO 9945-1";
 choices[68][1] = "IEEE 1033.1";
 choices[68][2] = "OSF 99945-1";
 choices[68][3] = "ISO 1003-1";
 answers[68] = 0;
 units[68] = ['48'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2096. ";
 preguntaids[68] = 2096


//  Id pregunta: 2120 Año de creación de pregunta: 2002
 questions[69]= "70)  En cuanto al control de proyectos:";
 choices[69]= new Array();
 choices[69][0] = "El gr&aacute;fico de PERT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[69][1] = "El gr&aacute;fico de GANTT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[69][2] = "El gr&aacute;fico de Gantt consiste en una visualizaci&oacute;n del proyecto basada en las restricciones.";
 choices[69][3] = "Las respuestas 'a' y 'c' son correctas.";
 answers[69] = 1;
 units[69] = ['33'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 2120. ";
 preguntaids[69] = 2120


//  Id pregunta: 2077 Año de creación de pregunta: 2002
 questions[70]= "71)  De las siguientes estructuras organizativas de un departamento de sistemas de informaci&oacute;n se&ntilde;ale la que considere m&aacute;s correcta:";
 choices[70]= new Array();
 choices[70][0] = "Establecer una estructura funcional en el departamento de sistemas y una sectorial en el de desarrollo";
 choices[70][1] = "Establecer una estructura sectorial en sistemas y una matricial en desarrollo";
 choices[70][2] = "Establecer una estructura matricial en sistemas y una matricial en desarrollo";
 choices[70][3] = "Establecer una estructura matricial en sistemas y una por proyectos en desarrollo";
 answers[70] = 0;
 units[70] = ['25'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2077. ";
 preguntaids[70] = 2077


//  Id pregunta: 2139 Año de creación de pregunta: 2004
 questions[71]= "72)  El t&eacute;rmino MAGERIT es un acr&oacute;nimo que procede de los siguientes t&eacute;rminos, o significa lo siguiente:";
 choices[71]= new Array();
 choices[71][0] = "Mercado Abierto y Gratuito a la Exportaci&oacute;n de Recursos Inform&aacute;ticos y de Telecomunicaciones";
 choices[71][1] = "Sistema Inform&aacute;tico propio, financiado y desarrollado por la Comunidad Aut&oacute;noma de Madrid (de aqu&iacute; el nombre de: &quot;Magerit&quot;)";
 choices[71][2] = "Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n";
 choices[71][3] = "Methot Aid for Gradual Employ Resource of Information Technology";
 answers[71] = 2;
 units[71] = ['45'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2139. Examen TIC MAP B 2004";
 preguntaids[71] = 2139


//  Id pregunta: 2104 Año de creación de pregunta: 2002
 questions[72]= "73)  El modelo orientado a los tratamientos:";
 choices[72]= new Array();
 choices[72][0] = "Trata de identificar las funciones a desarrollar por el sistema de informaci&oacute;n";
 choices[72][1] = "Trata de identificar la evoluci&oacute;n de la vida de las entidades";
 choices[72][2] = "Trata de identificar las funciones a desarrollar por el sistema inform&aacute;tico";
 choices[72][3] = "Trata de identificar la evoluci&oacute;n de la vida del sistema";
 answers[72] = 0;
 units[72] = ['24'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2104. ";
 preguntaids[72] = 2104


//  Id pregunta: 2098 Año de creación de pregunta: 2002
 questions[73]= "74)  El instituto ANSI tiene homologados, desde hace tiempo, diversos lenguajes, entre los que no se encuentra el:";
 choices[73]= new Array();
 choices[73][0] = "COBOL";
 choices[73][1] = "PROLOG";
 choices[73][2] = "FORTRAN";
 choices[73][3] = "C";
 answers[73] = 2;
 units[73] = ['48'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 2098. Todos estan ya homologados, pero FORTRAN fue el ultimo en 2007";
 preguntaids[73] = 2098


//  Id pregunta: 2073 Año de creación de pregunta: 2002
 questions[74]= "75)  De acuerdo a la Decisi&oacute;n 87/95/CEE del Consejo de las CC.EE., &iquest;en qu&eacute; circunstancias excepcionales el sector p&uacute;blico puede adquirir bienes y servicios relativos al campo de las TIC utilizando especificaciones no normalizadas?:";
 choices[74]= new Array();
 choices[74][0] = "Continuidad de funcionamiento";
 choices[74][1] = "Innovaci&oacute;n";
 choices[74][2] = "Coste excesivo";
 choices[74][3] = "Todas las anteriores";
 answers[74] = 3;
 units[74] = ['43'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2073. ";
 preguntaids[74] = 2073


