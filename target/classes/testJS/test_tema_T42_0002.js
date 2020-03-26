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
//  Id pregunta: 10100 Año de creación de pregunta: 2015
 questions[0]= "1)  En el contexto de la web sem&aacute;ntica, se&ntilde;ale la definici&oacute;n correcta de ontolog&iacute;a:";
 choices[0]= new Array();
 choices[0][0] = "Es una especificaci&oacute;n expl&iacute;cita de una conceptualizaci&oacute;n.";
 choices[0][1] = "Es un sistema de clasificaci&oacute;n abierto y/o colaborativo basado en etiquetas.";
 choices[0][2] = "Es un conjunto de nombres en el cual todos los nombres son &uacute;nicos.";
 choices[0][3] = "Es un sistema de clasificaci&oacute;n que permite agrupar un conjunto de elementos dentro de unas categor&iacute;as predefinidas que pueden estar contenidas unas en otras, o relacionadas de cualquier otra manera.";
 answers[0] = 0;
 units[0] = ['42'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 10100. Examen TIC A2 2014";
 preguntaids[0] = 10100


//  Id pregunta: 10307 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Cu&aacute;l no es un principio general del dise&ntilde;o centrado en el usuario de Nielsen?";
 choices[1]= new Array();
 choices[1][0] = "Medida de la satisfacci&oacute;n del usuario";
 choices[1][1] = "Visibilidad del estado del sistema";
 choices[1][2] = "Dise&ntilde;o minimalista";
 choices[1][3] = "Prevenci&oacute;n y ayuda en la recuperaci&oacute;n de errores";
 answers[1] = 0;
 units[1] = ['42'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 10307. ";
 preguntaids[1] = 10307


//  Id pregunta: 10776 Año de creación de pregunta: 2015
 questions[2]= "3)  La pauta WCAG 2.0 de ayuda a la entrada de datos se relaciona con el principio de:";
 choices[2]= new Array();
 choices[2][0] = "Operabilidad";
 choices[2][1] = "Robustez";
 choices[2][2] = "Perceptibilidad";
 choices[2][3] = "Comprensibilidad";
 answers[2] = 3;
 units[2] = ['42'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 10776. ";
 preguntaids[2] = 10776


//  Id pregunta: 10932 Año de creación de pregunta: 2015
 questions[3]= "4)  como se puede asegurar la accesibilidad en los m&oacute;viles?";
 choices[3]= new Array();
 choices[3][0] = "web responsive";
 choices[3][1] = "WPA";
 choices[3][2] = "Web accesibility";
 choices[3][3] = "WSUS";
 answers[3] = 0;
 units[3] = ['42'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 10932. ";
 preguntaids[3] = 10932


//  Id pregunta: 10297 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[4]= new Array();
 choices[4][0] = "La interoperabilidad como cualidad integral";
 choices[4][1] = "Car&aacute;cter multidimensional de la interoperabilidad";
 choices[4][2] = "Enfoque de soluciones multilaterales";
 choices[4][3] = "Todos los anteriores";
 answers[4] = 3;
 units[4] = ['42'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 10297. ";
 preguntaids[4] = 10297


//  Id pregunta: 9621 Año de creación de pregunta: 2014
 questions[5]= "6)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "Para cumplir nivel A, las p&aacute;ginas no pueden contener ning&uacute;n elemento que destelle m&aacute;s de 3 veces por segundo";
 choices[5][1] = "Lo anterior es cierto, pero para nivel AA";
 choices[5][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[5][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que adem&aacute;s el destello debe estar por debajo del umbral de destello general y de rojo";
 answers[5] = 2;
 units[5] = ['42'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 9621. Consultar WCAG Pauta 2.3 Convulsiones";
 preguntaids[5] = 9621


//  Id pregunta: 9622 Año de creación de pregunta: 2014
 questions[6]= "7)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[6]= new Array();
 choices[6][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[6][1] = "La&nbsp;opci&oacute;n a es&nbsp;cierta, pero para nivel A";
 choices[6][2] = "La&nbsp;opci&oacute;n a es&nbsp;cierta, pero para nivel AAA";
 choices[6][3] = "La&nbsp;opci&oacute;n a es&nbsp;cierta, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[6] = 3;
 units[6] = ['42'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 9622. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";
 preguntaids[6] = 9622


//  Id pregunta: 10218 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Cu&aacute;l es la &uacute;nica pauta definida dentro del principio de robustez de las WCAG 2.0?";
 choices[7]= new Array();
 choices[7][0] = "Alternativas textuales";
 choices[7][1] = "Accesible a trav&eacute;s de teclado";
 choices[7][2] = "Compatible";
 choices[7][3] = "Ayuda a la entrada de datos";
 answers[7] = 2;
 units[7] = ['42'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 10218. ";
 preguntaids[7] = 10218


//  Id pregunta: 8545 Año de creación de pregunta: 2013
 questions[8]= "9)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[8]= new Array();
 choices[8][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines.";
 choices[8][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos.";
 choices[8][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0.";
 choices[8][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications.";
 answers[8] = 1;
 units[8] = ['42'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 8545. ";
 preguntaids[8] = 8545


//  Id pregunta: 10939 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es un principio de accesibilidad?";
 choices[9]= new Array();
 choices[9][0] = "robusto";
 choices[9][1] = "operable";
 choices[9][2] = "universal";
 choices[9][3] = "perceptible";
 answers[9] = 2;
 units[9] = ['42'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 10939. ";
 preguntaids[9] = 10939


//  Id pregunta: 9810 Año de creación de pregunta: 2015
 questions[10]= "11)  En materia de accesibilidad, las Administraciones P&uacute;blicas deben cumplir:";
 choices[10]= new Array();
 choices[10][0] = "El Real Decreto 1494/2007";
 choices[10][1] = "Los niveles A y AA de la norma UNE 139803:2012";
 choices[10][2] = "Los niveles A y AA de las WCAG 2.0";
 choices[10][3] = "Todas las anteriores.";
 answers[10] = 3;
 units[10] = ['42'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 9810. ";
 preguntaids[10] = 9810


//  Id pregunta: 10940 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes sistemas no permite una lectura del texto de una p&aacute;gina web?";
 choices[11]= new Array();
 choices[11][0] = "ReadMe";
 choices[11][1] = "ReadSpeaker";
 choices[11][2] = "JAWS";
 choices[11][3] = "WebAnywhere";
 answers[11] = 0;
 units[11] = ['42'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 10940. ";
 preguntaids[11] = 10940


//  Id pregunta: 9123 Año de creación de pregunta: 2014
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[12]= new Array();
 choices[12][0] = "Alternativas textuales.";
 choices[12][1] = "Distinguible.";
 choices[12][2] = "Predecible.";
 choices[12][3] = "Compatible.";
 answers[12] = 2;
 units[12] = ['42'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 9123. Examen TIC A2 2013";
 preguntaids[12] = 9123


//  Id pregunta: 10061 Año de creación de pregunta: 2015
 questions[13]= "14)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[13]= new Array();
 choices[13][0] = "Operable.";
 choices[13][1] = "Perceptible.";
 choices[13][2] = "Robustez.";
 choices[13][3] = "Comprensible.";
 answers[13] = 2;
 units[13] = ['42'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 10061. Examen TIC A2 2014";
 preguntaids[13] = 10061


//  Id pregunta: 8547 Año de creación de pregunta: 2013
 questions[14]= "15)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[14]= new Array();
 choices[14][0] = "Tipograf&iacute;a clara y legible.";
 choices[14][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[14][2] = "Reversibilidad.";
 choices[14][3] = "Confirmaci&oacute;n.";
 answers[14] = 0;
 units[14] = ['42'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 8547. ";
 preguntaids[14] = 8547


//  Id pregunta: 8546 Año de creación de pregunta: 2013
 questions[15]= "16)  &quot;Ayuda a la entrada de datos&quot; es una pauta enmarcada en el principio:";
 choices[15]= new Array();
 choices[15][0] = "Perceptible.";
 choices[15][1] = "Operable.";
 choices[15][2] = "Comprensible.";
 choices[15][3] = "Robusto.";
 answers[15] = 2;
 units[15] = ['42'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 8546. ";
 preguntaids[15] = 8546


//  Id pregunta: 10306 Año de creación de pregunta: 2015
 questions[16]= "17)  Seleccione la opci&oacute;n que no indica un principio o pauta de las WCAG 2.0";
 choices[16]= new Array();
 choices[16][0] = "Comprensibilidad";
 choices[16][1] = "Sencillez";
 choices[16][2] = "Operabilidad";
 choices[16][3] = "Robustez";
 answers[16] = 1;
 units[16] = ['42'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 10306. perceptible, operable, comprensible y robusto";
 preguntaids[16] = 10306


//  Id pregunta: 9624 Año de creación de pregunta: 2014
 questions[17]= "18)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[17]= new Array();
 choices[17][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[17][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[17][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[17][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[17] = 1;
 units[17] = ['42'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9624. Consultar Art. 2 del Real Decreto";
 preguntaids[17] = 9624


//  Id pregunta: 10219 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una pauta del principio de Comprensibilidad de las WCAG 2.0?";
 choices[18]= new Array();
 choices[18][0] = "Navegable";
 choices[18][1] = "Legible y entendible";
 choices[18][2] = "Predecible";
 choices[18][3] = "Ayuda a la entrada de datos";
 answers[18] = 0;
 units[18] = ['42'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 10219. La pauta 'Navegable' pertenece al principio de Operabilidad";
 preguntaids[18] = 10219


//  Id pregunta: 9124 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[19]= new Array();
 choices[19][0] = "Ley 30/92";
 choices[19][1] = "Ley 27/2007";
 choices[19][2] = "Ley 11/2007";
 choices[19][3] = "Ley 34/2002";
 answers[19] = 1;
 units[19] = ['42'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 9124. Examen TIC A2 2013";
 preguntaids[19] = 9124


//  Id pregunta: 10220 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes es un principio de Dise&ntilde;o universal?";
 choices[20]= new Array();
 choices[20][0] = "Cumplimiento de las WCAG 1.0";
 choices[20][1] = "Cumplimiento de las WCAG 2.0";
 choices[20][2] = "Escaso esfuerzo f&iacute;sico";
 choices[20][3] = "Ensayo prueba-error";
 answers[20] = 2;
 units[20] = ['42'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 10220. ";
 preguntaids[20] = 10220


//  Id pregunta: 9623 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[21]= new Array();
 choices[21][0] = "ZEUS";
 choices[21][1] = "HERA";
 choices[21][2] = "BOBBY";
 choices[21][3] = "TAW";
 answers[21] = 0;
 units[21] = ['42'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 9623. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";
 preguntaids[21] = 9623


//  Id pregunta: 10217 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las WCAG 2.0 NO es cierta?";
 choices[22]= new Array();
 choices[22][0] = "Est&aacute;n organizadas en 4 principios";
 choices[22][1] = "Dentro de cada principio se encuentran las pautas de accesibilidad";
 choices[22][2] = "Cada pauta contiene una serie de criterios de conformidad";
 choices[22][3] = "Se definen niveles de prioridad para los diferentes criterios";
 answers[22] = 3;
 units[22] = ['42'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 10217. En las WCAG 2.0 se habla de niveles de conformidad y no de niveles de prioridad";
 preguntaids[22] = 10217


//  Id pregunta: 9625 Año de creación de pregunta: 2014
 questions[23]= "24)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[23]= new Array();
 choices[23][0] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[23][1] = "Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[23][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y y Funci&oacute;n P&uacute;blica";
 choices[23][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[23] = 2;
 units[23] = ['42'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 9625. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";
 preguntaids[23] = 9625


