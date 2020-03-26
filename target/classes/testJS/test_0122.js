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
//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[0]= "1)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para aquellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un periodo cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[0][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para aquellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un periodo cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[0][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[0][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[0] = 1;
 units[0] = ['14'];
 blocks[0] = ['A3'];
 comments[0] = "Id Pregunta: 357. Estado del Bienestar";
 preguntaids[0] = 357


//  Id pregunta: 5489 Año de creación de pregunta: 2007
 questions[1]= "2)  Entre las capacidades que deben ser consideradas por el Administrador de una base de datos para evaluar la seguridad e integridad de los datos de un SGBD, no se encuentra...";
 choices[1]= new Array();
 choices[1][0] = "Control de concurrencia";
 choices[1][1] = "Control de herencia.";
 choices[1][2] = "Control de acceso.";
 choices[1][3] = "Las facilidades de cifrado.";
 answers[1] = 1;
 units[1] = ['60'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 5489. ";
 preguntaids[1] = 5489


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[2]= new Array();
 choices[2][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[2][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[2][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[2][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[2] = 3;
 units[2] = ['5'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 152. Uni&oacute;n Europea";
 preguntaids[2] = 152


//  Id pregunta: 8238 Año de creación de pregunta: 2011
 questions[3]= "4)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[3]= new Array();
 choices[3][0] = "Es el elemento que conmuta etiquetas.";
 choices[3][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[3][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[3][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[3] = 0;
 units[3] = ['107'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8238. Examen UPM A2 2011";
 preguntaids[3] = 8238


//  Id pregunta: 7001 Año de creación de pregunta: 2010
 questions[4]= "5)  El algoritmo ID3 es una t&eacute;cnica de miner&iacute;a de datos que se clasifica en el grupo de:";
 choices[4]= new Array();
 choices[4][0] = "Los m&oacute;delos estad&iacute;sticos";
 choices[4][1] = "Agrupamiento";
 choices[4][2] = "Los &aacute;rboles de decisi&oacute;n";
 choices[4][3] = "Las redes neuronales";
 answers[4] = 2;
 units[4] = ['67'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7001. TIC-B 2009 bloque desarrollo";
 preguntaids[4] = 7001


//  Id pregunta: 6318 Año de creación de pregunta: 2003
 questions[5]= "6)  Se&ntilde;ale la falsa:";
 choices[5]= new Array();
 choices[5][0] = "GQM, Goal, Question, Metric, es un m&eacute;todo de desarrollo de m&eacute;tricas";
 choices[5][1] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo se emplea como m&eacute;trica de estimaci&oacute;n de proyectos.";
 choices[5][2] = "Cocomo es un modelo de estimaci&oacute;n algor&iacute;tmico propuesto por Boehm que fundamenta su estimaci&oacute;n en el n&uacute;mero de puntos de funci&oacute;n.";
 choices[5][3] = "Cocomo se aplica en tres modelos: b&aacute;sico, intermedio y avanzado. Estos modelos se dividen a su vez en tres modos: org&aacute;nico, semiacoplado y empotrado.";
 answers[5] = 2;
 units[5] = ['93'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 6318. ";
 preguntaids[5] = 6318


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[6]= "7)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[6]= new Array();
 choices[6][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[6][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[6][2] = "Cinco a&ntilde;os.";
 choices[6][3] = "Ninguna es correcta.";
 answers[6] = 2;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 166. Uni&oacute;n Europea";
 preguntaids[6] = 166


//  Id pregunta: 4306 Año de creación de pregunta: 2004
 questions[7]= "8)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[7]= new Array();
 choices[7][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[7][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[7][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[7][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[7] = 2;
 units[7] = ['113'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4306. ";
 preguntaids[7] = 4306


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[8]= new Array();
 choices[8][0] = "De los derechos y deberes fundamentales.";
 choices[8][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[8][2] = "Derechos y libertades.";
 choices[8][3] = "De la Corona.";
 answers[8] = 2;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 74. Constituci&oacute;n de 1978";
 preguntaids[8] = 74


//  Id pregunta: 4540 Año de creación de pregunta: 2002
 questions[9]= "10)  El cable de par trenzado no apantallado, categor&iacute;a 5, de 2 pares:";
 choices[9]= new Array();
 choices[9][0] = "Soporta hasta 10 Mbps";
 choices[9][1] = "Soporta hasta 20 Mbps";
 choices[9][2] = "Soporta hasta 100 Mbps";
 choices[9][3] = "Soporta hasta 5 Mbps";
 answers[9] = 2;
 units[9] = ['104'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4540. ";
 preguntaids[9] = 4540


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[10]= "11)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[10]= new Array();
 choices[10][0] = "Alrededor de un 26% del PIB";
 choices[10][1] = "Alrededor de un 11% del PIB";
 choices[10][2] = "Alrededor de un 34% del PIB";
 choices[10][3] = "Alrededor de un 7% del PIB";
 answers[10] = 1;
 units[10] = ['12'];
 blocks[10] = ['A3'];
 comments[10] = "Id Pregunta: 344. Modelo econ&oacute;mico";
 preguntaids[10] = 344


//  Id pregunta: 7422 Año de creación de pregunta: 2010
 questions[11]= "12)  La t&eacute;cnica de  virtualizaci&oacute;n de infraestructura TIC denominada paravirtualizaci&oacute;n, pone &eacute;nfasis (comparado con la virtualizaci&oacute;n normal) en:";
 choices[11]= new Array();
 choices[11][0] = "Compatibilidad e interoperabilidad";
 choices[11][1] = "Rendimiento";
 choices[11][2] = "Costes";
 choices[11][3] = "Inteligencia artificial";
 answers[11] = 1;
 units[11] = ['124'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 7422. Examen TIC B 2009";
 preguntaids[11] = 7422


//  Id pregunta: 8972 Año de creación de pregunta: 2013
 questions[12]= "13)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[12]= new Array();
 choices[12][0] = "Ancho de banda";
 choices[12][1] = "Jitter o variaci&oacute;n de retardo";
 choices[12][2] = "Eco";
 choices[12][3] = "Todas las respuestas anteriores son correctas";
 answers[12] = 3;
 units[12] = ['122'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8972. ";
 preguntaids[12] = 8972


//  Id pregunta: 4149 Año de creación de pregunta: 2004
 questions[13]= "14)  Comparando Java y C++, indique la afirmaci&oacute;n Incorrecta";
 choices[13]= new Array();
 choices[13][0] = "Java es debilmente tipado y C++ es fuertemente tipado";
 choices[13][1] = "Java es altamente portable y C++ tiene aspectos no portables";
 choices[13][2] = "Java es interpretado y C++ es compilado";
 choices[13][3] = "Java no tiene herencia multiple y C++ si";
 answers[13] = 0;
 units[13] = ['85'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4149. ";
 preguntaids[13] = 4149


//  Id pregunta: 5451 Año de creación de pregunta: 2007
 questions[14]= "15)  &iquest;Qu&eacute; s&iacute;mbolo es utilizado para direccionar el resultado de la ejecuci&oacute;n de un comando del sistema operativo Unix sustituyendo el contenido de un fichero?";
 choices[14]= new Array();
 choices[14][0] = "&lt;";
 choices[14][1] = "&gt;";
 choices[14][2] = "&lt;&lt;";
 choices[14][3] = "&gt;&gt;";
 answers[14] = 1;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 5451. ";
 preguntaids[14] = 5451


//  Id pregunta: 1445 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la LOPD articulo 38, qui&eacute;n NO es miembro del Consejo Consultivo:";
 choices[15]= new Array();
 choices[15][0] = "Un Diputado.";
 choices[15][1] = "Un Senador.";
 choices[15][2] = "El Defensor del Pueblo.";
 choices[15][3] = "Un experto en la materia.";
 answers[15] = 2;
 units[15] = ['35'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 1445. ";
 preguntaids[15] = 1445


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[16]= new Array();
 choices[16][0] = "Por Real Decreto.";
 choices[16][1] = "Por Orden del Ministerio del Interior.";
 choices[16][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[16][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[16] = 2;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 60. Constituci&oacute;n de 1978";
 preguntaids[16] = 60


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[17]= "18)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Acoso sexual.";
 choices[17][1] = "Acoso por raz&oacute;n de sexo.";
 choices[17][2] = "Acoso laboral.";
 choices[17][3] = "Acoso mental.";
 answers[17] = 1;
 units[17] = ['14'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 377. Pol&iacute;ticas de igualdad";
 preguntaids[17] = 377


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[18][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[18][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[18][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[18] = 1;
 units[18] = ['7'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 251. Ley 39/2015";
 preguntaids[18] = 251


//  Id pregunta: 2090 Año de creación de pregunta: 2002
 questions[19]= "20)  El Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos:";
 choices[19]= new Array();
 choices[19][0] = "Es un &oacute;rgano colegiado de asesoramiento del Director de la Agencia";
 choices[19][1] = "Emite informes en todas las cuestiones que le somete el Director";
 choices[19][2] = "Formula propuestas en temas relacionados con las competencias de la Agencia";
 choices[19][3] = "Todas son correctas";
 answers[19] = 3;
 units[19] = ['35'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2090. ";
 preguntaids[19] = 2090


//  Id pregunta: 2111 Año de creación de pregunta: 2002
 questions[20]= "21)  El siguiente punto de verificaci&oacute;n de WAI (en la norma WCAG 1.0): &quot;Hasta que las aplicaciones de usuario permitan controlarlo, evite provocar parpadeo en la pantalla&quot;, &iquest;a qu&eacute; nivel de prioridad pertenece?:";
 choices[20]= new Array();
 choices[20][0] = "1";
 choices[20][1] = "2";
 choices[20][2] = "3";
 choices[20][3] = "no es ning&uacute;n punto de verificaci&oacute;n contemplado en WAI";
 answers[20] = 0;
 units[20] = ['42'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2111. ";
 preguntaids[20] = 2111


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[21]= new Array();
 choices[21][0] = "Flexibilidad para variar el servicio o producto";
 choices[21][1] = "Eliminar desperdicios";
 choices[21][2] = "Decidir lo m&aacute;s tarde posible";
 choices[21][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[21] = 0;
 units[21] = ['34'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 556. Metodologias Lean";
 preguntaids[21] = 556


//  Id pregunta: 6939 Año de creación de pregunta: 2010
 questions[22]= "23)  XPDL, XML Process Definition Language, dentro de los 5 interfaces que defini&oacute; la WfMC, podr&iacute;a encuadrarse dentro del interfaz n&uacute;mero:";
 choices[22]= new Array();
 choices[22][0] = "1";
 choices[22][1] = "2";
 choices[22][2] = "3";
 choices[22][3] = "4";
 answers[22] = 0;
 units[22] = ['86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 6939. ";
 preguntaids[22] = 6939


//  Id pregunta: 10132 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n lo dispuesto en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales (SICRES 3.0) es correcto que:";
 choices[23]= new Array();
 choices[23][0] = "El segmento &quot;de internos y control&quot; contiene informaci&oacute;n sobre si el asiento registral incluye documentaci&oacute;n f&iacute;sica requerida para el tr&aacute;mite del procedimiento.";
 choices[23][1] = "El c&oacute;digo de la Entidad Registral de Destino debe incluir un prefijo que identifique al Ministerio (MXX-YYYY), seg&uacute;n se establece en la codificaci&oacute;n de organismos del Directorio Com&uacute;n.";
 choices[23][2] = "El segmento &quot;de anexo&quot; es obligatorio y puede declararse de forma m&uacute;ltiple.";
 choices[23][3] = "En el segmento &quot;de internos y de control&quot; se incluye la firma del documento anexo, como un campo obligatorio.";
 answers[23] = 0;
 units[23] = ['44'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 10132. Examen TIC A1 2014";
 preguntaids[23] = 10132


//  Id pregunta: 4992 Año de creación de pregunta: 2002
 questions[24]= "25)  Los problemas principales de IPv4 que hacen necesario IPv6 son:";
 choices[24]= new Array();
 choices[24][0] = "los relativos a la escasez de direcciones";
 choices[24][1] = "los relativos al tama&ntilde;o de las tablas de encaminamiento";
 choices[24][2] = "los relativos a la calidad de servicio";
 choices[24][3] = "todos los anteriores";
 answers[24] = 3;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4992. ";
 preguntaids[24] = 4992


//  Id pregunta: 5383 Año de creación de pregunta: 2006
 questions[25]= "26)  Estandar que permite redes inal&aacute;mbricas con frecuencias de 2.4 GHz.";
 choices[25]= new Array();
 choices[25][0] = "802.11a";
 choices[25][1] = "802.11b";
 choices[25][2] = "802.11g";
 choices[25][3] = "B y C son correctas";
 answers[25] = 3;
 units[25] = ['108'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5383. ";
 preguntaids[25] = 5383


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[26]= new Array();
 choices[26][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[26][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[26][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[26][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[26] = 0;
 units[26] = ['11'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 300. Presupuestos generales";
 preguntaids[26] = 300


//  Id pregunta: 3663 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica com&uacute;n de las metodolog&iacute;as de desarrollo de equipos l&oacute;gicos?:";
 choices[27]= new Array();
 choices[27][0] = "Uso de las t&eacute;cnicas gr&aacute;ficas";
 choices[27][1] = "Orden y coherencia";
 choices[27][2] = "Pruebas de aceptaci&oacute;n";
 choices[27][3] = "Diccionario de datos";
 answers[27] = 2;
 units[27] = ['84', '86'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3663. ";
 preguntaids[27] = 3663


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[28]= "29)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[28]= new Array();
 choices[28][0] = "Unidad de igualdad.";
 choices[28][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[28][2] = "Ninguna de las anteriores.";
 choices[28][3] = "A y B son correctas.";
 answers[28] = 1;
 units[28] = ['14'];
 blocks[28] = ['A3'];
 comments[28] = "Id Pregunta: 413. Pol&iacute;ticas de igualdad";
 preguntaids[28] = 413


//  Id pregunta: 4463 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;C&oacute;mo se denominan los 2 modos de utilizaci&oacute;n de IPSec?";
 choices[29]= new Array();
 choices[29][0] = "balanceado y no balanceado";
 choices[29][1] = "t&uacute;nel y abierto";
 choices[29][2] = "datagrama y transporte";
 choices[29][3] = "transporte y t&uacute;nel";
 answers[29] = 3;
 units[29] = ['119'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4463. ";
 preguntaids[29] = 4463


//  Id pregunta: 5889 Año de creación de pregunta: 2007
 questions[30]= "31)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[30]= new Array();
 choices[30][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[30][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[30][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[30][3] = "Todas las anteriores son ciertas";
 answers[30] = 3;
 units[30] = ['19'];
 blocks[30] = ['A4'];
 comments[30] = "Id Pregunta: 5889. ";
 preguntaids[30] = 5889


//  Id pregunta: 2399 Año de creación de pregunta: 2006
 questions[31]= "32)  Uno de estos datos personales no es de los denominados &ldquo;especialmente protegidos&rdquo;";
 choices[31]= new Array();
 choices[31][0] = "Origen racial o &eacute;tnico.";
 choices[31][1] = "Afiliaci&oacute;n sindical";
 choices[31][2] = "Infracciones penales .";
 choices[31][3] = "Vida sexual.";
 answers[31] = 2;
 units[31] = ['35'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 2399. ";
 preguntaids[31] = 2399


//  Id pregunta: 4367 Año de creación de pregunta: 2004
 questions[32]= "33)  Dentro de la familia de protocolos TCP/IP hay algunos que se definen como no fiables en el sentido de que no aseguran la recepci&oacute;n final en el equipo destinatario de la informaci&oacute;n. De los siguientes indique cu&aacute;l es un protocolo fiable:";
 choices[32]= new Array();
 choices[32][0] = "IP";
 choices[32][1] = "UDP";
 choices[32][2] = "TCP";
 choices[32][3] = "FDDI";
 answers[32] = 2;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4367. ";
 preguntaids[32] = 4367


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[33]= "34)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[33]= new Array();
 choices[33][0] = "P&uacute;blica.";
 choices[33][1] = "Privada.";
 choices[33][2] = "Ambas son correctas.";
 choices[33][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[33] = 0;
 units[33] = ['14'];
 blocks[33] = ['A3'];
 comments[33] = "Id Pregunta: 399. Pol&iacute;ticas de igualdad";
 preguntaids[33] = 399


//  Id pregunta: 1044 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la respuesta correcta:";
 choices[34]= new Array();
 choices[34][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[34][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[34][2] = "A y B son correctas.";
 choices[34][3] = "A y B son falsas.";
 answers[34] = 2;
 units[34] = ['4', '7', '8', '9'];
 blocks[34] = ['A1', 'A2'];
 comments[34] = "Id Pregunta: 1044. Ley 40/2015";
 preguntaids[34] = 1044


//  Id pregunta: 6049 Año de creación de pregunta: 2003
 questions[35]= "36)  &iquest;Qu&eacute; tecnolog&iacute;a encaminada a proteger la propiedad intelectual en Internet habilita la gesti&oacute;n de loscontenidos en medios digitales a los usuarios identificados que tienen unos derechos determinados y les permiteusar un contenido codificado especialmente para &eacute;l?:";
 choices[35]= new Array();
 choices[35][0] = "Digital Rights Management (DRM).";
 choices[35][1] = "Marcas de agua.";
 choices[35][2] = "Los patrones.";
 choices[35][3] = "Technical Protection Measures (TPM).";
 answers[35] = 0;
 units[35] = ['41'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 6049. TIC B 2007";
 preguntaids[35] = 6049


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[36]= "37)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[36]= new Array();
 choices[36][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[36][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[36][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[36][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[36] = 2;
 units[36] = ['5'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 160. Uni&oacute;n Europea";
 preguntaids[36] = 160


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[37]= "38)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[37]= new Array();
 choices[37][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[37][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[37][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[37][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[37] = 1;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 238. Ley 39/2015";
 preguntaids[37] = 238


//  Id pregunta: 9753 Año de creación de pregunta: 2014
 questions[38]= "39)  &iquest;Qu&eacute; cabeceras del datagrama IP son revisadas por los routers intermedios en IPv6?";
 choices[38]= new Array();
 choices[38][0] = "Todas las cabeceras";
 choices[38][1] = "Ninguna";
 choices[38][2] = "Todas las cabeceras menos las opcionales";
 choices[38][3] = "La cabecera hop-to-hop y el resto de cabeceras menos las cabeceras opcionales";
 answers[38] = 3;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9753. ";
 preguntaids[38] = 9753


//  Id pregunta: 5475 Año de creación de pregunta: 2007
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[39]= new Array();
 choices[39][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[39][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[39][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[39][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[39] = 0;
 units[39] = ['63'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 5475. ";
 preguntaids[39] = 5475


//  Id pregunta: 2315 Año de creación de pregunta: 2002
 questions[40]= "41)  En la LOPD, una infracci&oacute;n muy grave es:";
 choices[40]= new Array();
 choices[40][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de la ley";
 choices[40][1] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso y oposici&oacute;n y la negativa a facilitar la informaci&oacute;n que sea solicitada";
 choices[40][2] = "Proceder a la recogida de datos de car&aacute;cter personal sin el consentimiento expreso de las personas afectadas en los casos en que &eacute;ste sea exigible";
 choices[40][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[40] = 3;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 2315. ";
 preguntaids[40] = 2315


//  Id pregunta: 8695 Año de creación de pregunta: 2013
 questions[41]= "42)  &iquest;Qu&eacute; interfaces admit&iacute;a NT?";
 choices[41]= new Array();
 choices[41][0] = "OS/2";
 choices[41][1] = "POSIX";
 choices[41][2] = "OS/2, POSIX y Win32.";
 choices[41][3] = "Aunque admit&iacute;a OS/2, todav&iacute;a se sigue utilizando en Windows XP.";
 answers[41] = 2;
 units[41] = ['58'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8695. ";
 preguntaids[41] = 8695


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[42]= "43)  El m&eacute;todo utilizado en el mantenimiento de software consistente en el examen y modificaci&oacute;n de un sistema para reconstruirlo de una nueva forma es:";
 choices[42]= new Array();
 choices[42][0] = "Ingenier&iacute;a inversa.";
 choices[42][1] = "Reestructuraci&oacute;n software.";
 choices[42][2] = "Reingenier&iacute;a.";
 choices[42][3] = "Transformaci&oacute;n de programas.";
 answers[42] = 2;
 units[42] = ['97'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 855. AGE A2 2015";
 preguntaids[42] = 855


//  Id pregunta: 7024 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[43]= new Array();
 choices[43][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[43][1] = "An&aacute;lisis DAFO";
 choices[43][2] = "Aprendizaje organizativo";
 choices[43][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[43] = 1;
 units[43] = ['83'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 7024. ";
 preguntaids[43] = 7024


//  Id pregunta: 3997 Año de creación de pregunta: 2002
 questions[44]= "45)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias correctas obtenidas y el n&uacute;mero total de documentos recuperados, se denomina:";
 choices[44]= new Array();
 choices[44][0] = "&Iacute;ndice de retorno";
 choices[44][1] = "&Iacute;ndice de exactitud";
 choices[44][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[44][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[44] = 2;
 units[44] = ['100'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3997. ";
 preguntaids[44] = 3997


//  Id pregunta: 8660 Año de creación de pregunta: 2013
 questions[45]= "46)  Con relaci&oacute;n a las topolog&iacute;as SAN de fibra &oacute;ptica bucle arbitrado y estructura conmutada es cierto que&hellip;";
 choices[45]= new Array();
 choices[45][0] = "Mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[45][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[45][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[45][3] = "Bucle arbitrado y red conmutada no son topolog&iacute;as v&aacute;lidas.";
 answers[45] = 2;
 units[45] = ['53'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8660. ";
 preguntaids[45] = 8660


//  Id pregunta: 6340 Año de creación de pregunta: 2003
 questions[46]= "47)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ...";
 choices[46]= new Array();
 choices[46][0] = "el servidor tiene un built-in de JVM.";
 choices[46][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente.";
 choices[46][2] = "el navegador tiene un built-in de JVM.";
 choices[46][3] = "los applets no necesitan una JVM.";
 answers[46] = 2;
 units[46] = ['116'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 6340. ";
 preguntaids[46] = 6340


//  Id pregunta: 1027 Año de creación de pregunta: 2016
 questions[47]= "48)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[47]= new Array();
 choices[47][0] = "Un d&iacute;a";
 choices[47][1] = "Dos d&iacute;as";
 choices[47][2] = "Tres d&iacute;as";
 choices[47][3] = "Cuatro d&iacute;as";
 answers[47] = 2;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 1027. Ley 40/2015";
 preguntaids[47] = 1027


//  Id pregunta: 6556 Año de creación de pregunta: 2003
 questions[48]= "49)  Indique la respuesta incorrecta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[48]= new Array();
 choices[48][0] = "El modelo de datos de Active Directory deriva del modelo de datos X.500";
 choices[48][1] = "Active Directory utiliza DNS como servicio de ubicaci&oacute;n";
 choices[48][2] = "El identificador &uacute;nico global de objetos, GUID, es un n&uacute;mero de 64 bitsdel que se garantiza su unicidad, y que se asigna a los objetos cuando secrean.";
 choices[48][3] = "En la lista de protocolos compatibles se incluye LDAP, en sus versiones 2 y 3.";
 answers[48] = 2;
 units[48] = ['77'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6556. ";
 preguntaids[48] = 6556


//  Id pregunta: 2480 Año de creación de pregunta: 2004
 questions[49]= "50)  Un sistema multiproceso NUMA se diferencia de uno SMP en:";
 choices[49]= new Array();
 choices[49][0] = "Su menor escalabilidad.";
 choices[49][1] = "Su utilizaci&oacute;n de una red de &aacute;rea local en lugar de un bus para la comunicaci&oacute;n entre CPU's.";
 choices[49][2] = "Su utilizaci&oacute;n de m&aacute;s de un bus para comunicar CPU's y memoria.";
 choices[49][3] = "Su falta de mecanismos de coherencia de cache.";
 answers[49] = 2;
 units[49] = ['49'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2480. ";
 preguntaids[49] = 2480


//  Id pregunta: 1124 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes NO es una distribuci&oacute;n LINUX?";
 choices[50]= new Array();
 choices[50][0] = "Fedora.";
 choices[50][1] = "Mandriva.";
 choices[50][2] = "Solaris.";
 choices[50][3] = "Ubuntu.";
 answers[50] = 2;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1124. ";
 preguntaids[50] = 1124


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[51]= "52)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[51]= new Array();
 choices[51][0] = "El derecho a un permiso.";
 choices[51][1] = "Una prestaci&oacute;n por paternidad.";
 choices[51][2] = "Ambas son correctas.";
 choices[51][3] = "18 d&iacute;as de permiso.";
 answers[51] = 2;
 units[51] = ['14'];
 blocks[51] = ['A3'];
 comments[51] = "Id Pregunta: 403. Pol&iacute;ticas de igualdad";
 preguntaids[51] = 403


//  Id pregunta: 7229 Año de creación de pregunta: 2010
 questions[52]= "53)  NO es un framework de desarrollo en Java";
 choices[52]= new Array();
 choices[52][0] = "JavaServer Faces";
 choices[52][1] = "Spring";
 choices[52][2] = "Ruby on Rails";
 choices[52][3] = "Maverick";
 answers[52] = 2;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7229. ";
 preguntaids[52] = 7229


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[53]= "54)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[53]= new Array();
 choices[53][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[53][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[53][2] = "Veintiocho Jueces y ocho Abogados Generales.";
 choices[53][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[53] = 2;
 units[53] = ['5'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 174. Uni&oacute;n Europea";
 preguntaids[53] = 174


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[54]= "55)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[54]= new Array();
 choices[54][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[54][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[54][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[54][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[54] = 1;
 units[54] = ['7'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 210. Ley 39/2015";
 preguntaids[54] = 210


//  Id pregunta: 7109 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes sentencias corresponde con la definici&oacute;n de Interoperabilidad Sem&aacute;ntica dada por el Esquema Nacional de Interoperabilidad?";
 choices[55]= new Array();
 choices[55][0] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[55][1] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[55][2] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[55][3] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[55] = 1;
 units[55] = ['43'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 7109. Anexo ENI";
 preguntaids[55] = 7109


//  Id pregunta: 6615 Año de creación de pregunta: 2009
 questions[56]= "57)  En el contexto de la Inteligencia Artifical, &iquest;cu&aacute;l de los siguientes es un tipo de Red Neuronal?";
 choices[56]= new Array();
 choices[56][0] = "Fenomenol&oacute;gica";
 choices[56][1] = "Facial";
 choices[56][2] = "De Bradley";
 choices[56][3] = "Perceptr&oacute;n";
 answers[56] = 3;
 units[56] = ['67'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6615. ";
 preguntaids[56] = 6615


//  Id pregunta: 5698 Año de creación de pregunta: 2007
 questions[57]= "58)  El sistema de radiodifusi&oacute;n digital de audio (DAB) emplea bloques de frecuencia cuyo ancho de banda es de:";
 choices[57]= new Array();
 choices[57][0] = "200 KHz.";
 choices[57][1] = "1,536 MHz.";
 choices[57][2] = "8 MHz.";
 choices[57][3] = "4,567 MHz";
 answers[57] = 1;
 units[57] = ['115'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5698. ";
 preguntaids[57] = 5698


//  Id pregunta: 8381 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;Qu&eacute; Informaci&oacute;n contiene una SIM?";
 choices[58]= new Array();
 choices[58][0] = "IMSI";
 choices[58][1] = "PIN";
 choices[58][2] = "OMC";
 choices[58][3] = "La respuesta A y B son correctas";
 answers[58] = 3;
 units[58] = ['117'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 8381. ";
 preguntaids[58] = 8381


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[59]= new Array();
 choices[59][0] = "Art. 13, L.O.3/2007.";
 choices[59][1] = "Art. 14, L.O.3/2007.";
 choices[59][2] = "Art. 11, L.O.3/2007.";
 choices[59][3] = "Ninguna es correcta.";
 answers[59] = 2;
 units[59] = ['14'];
 blocks[59] = ['A3'];
 comments[59] = "Id Pregunta: 378. Pol&iacute;ticas de igualdad";
 preguntaids[59] = 378


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[60]= new Array();
 choices[60][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[60][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[60][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[60][3] = "Sancionar y publicar las leyes.";
 answers[60] = 2;
 units[60] = ['1'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 72. Constituci&oacute;n de 1978";
 preguntaids[60] = 72


//  Id pregunta: 9923 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[61]= new Array();
 choices[61][0] = "HTML";
 choices[61][1] = "PDF";
 choices[61][2] = "XML";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 2;
 units[61] = ['44'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 9923. ";
 preguntaids[61] = 9923


//  Id pregunta: 4350 Año de creación de pregunta: 2004
 questions[62]= "63)  Los bridges:";
 choices[62]= new Array();
 choices[62][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[62][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[62][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[62][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[62] = 3;
 units[62] = ['102'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4350. ";
 preguntaids[62] = 4350


//  Id pregunta: 4288 Año de creación de pregunta: 2005
 questions[63]= "64)  La red SARA (Intranet Administrativa) no tiene entre sus principales objetivos:";
 choices[63]= new Array();
 choices[63][0] = "Ser un &uacute;nico punto de conexi&oacute;n con las Comunidades Aut&oacute;nomas";
 choices[63][1] = "Conectar con la Uni&oacute;n Europea a trav&eacute;s de TESTA e IDA";
 choices[63][2] = "Conectar todos los edificios de la Administraci&oacute;n General del Estado";
 choices[63][3] = "Ser de utilidad en la implantaci&oacute;n de aplicaciones horizontales";
 answers[63] = 2;
 units[63] = ['114'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4288. ";
 preguntaids[63] = 4288


//  Id pregunta: 3838 Año de creación de pregunta: 2002
 questions[64]= "65)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo de software en espiral, indicar que es lo que representa la dimensi&oacute;n radial:";
 choices[64]= new Array();
 choices[64][0] = "Los costes de desarrollo acumulativos";
 choices[64][1] = "El progreso hecho en cumplimentar cada desarrollo en espiral";
 choices[64][2] = "El an&aacute;lisis de riesgos";
 choices[64][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[64] = 0;
 units[64] = ['82'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3838. ";
 preguntaids[64] = 3838


//  Id pregunta: 3941 Año de creación de pregunta: 2002
 questions[65]= "66)  No es un tipo de prueba:";
 choices[65]= new Array();
 choices[65][0] = "Pruebas individuales";
 choices[65][1] = "Pruebas unitarias";
 choices[65][2] = "Pruebas de Aceptaci&oacute;n";
 choices[65][3] = "Pruebas de Regresi&oacute;n";
 answers[65] = 0;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 3941. ";
 preguntaids[65] = 3941


//  Id pregunta: 915 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[66]= new Array();
 choices[66][0] = "DoS";
 choices[66][1] = "Phishing";
 choices[66][2] = "Sniffing";
 choices[66][3] = "Spoofing";
 answers[66] = 3;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 915. AGE A1 2015";
 preguntaids[66] = 915


//  Id pregunta: 1415 Año de creación de pregunta: 2016
 questions[67]= "68)  El d&iacute;a 29 de diciembre del a&ntilde;o 1978, la Constituci&oacute;n Espa&ntilde;ola fue:";
 choices[67]= new Array();
 choices[67][0] = "Sancionada y promulgada por el Rey.";
 choices[67][1] = "Aprobada por los Plenos del Congreso y el Senado.";
 choices[67][2] = "Ratificada mediante refer&eacute;ndum por el pueblo espa&ntilde;ol.";
 choices[67][3] = "Ninguna es correcta.";
 answers[67] = 3;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 1415. ";
 preguntaids[67] = 1415


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[68]= new Array();
 choices[68][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[68][1] = "Autorizar indultos generales.";
 choices[68][2] = "Sancionar las leyes.";
 choices[68][3] = "Promulgar las leyes.";
 answers[68] = 1;
 units[68] = ['1'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 12. Constituci&oacute;n de 1978";
 preguntaids[68] = 12


//  Id pregunta: 4680 Año de creación de pregunta: 2002
 questions[69]= "70)  El est&aacute;ndar ITU-T para audio digital no comprimido en el sonido telef&oacute;nico es:";
 choices[69]= new Array();
 choices[69][0] = "Q.932";
 choices[69][1] = "G.722";
 choices[69][2] = "G.711";
 choices[69][3] = "Q.931";
 answers[69] = 2;
 units[69] = ['117'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4680. ";
 preguntaids[69] = 4680


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[70]= "71)  La partida presupuestaria es equivalente a...";
 choices[70]= new Array();
 choices[70][0] = "El sujeto que realiza el gasto";
 choices[70][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[70][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[70][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[70] = 3;
 units[70] = ['11'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 266. Presupuestos generales";
 preguntaids[70] = 266


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[71]= new Array();
 choices[71][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[71][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[71][2] = "Apertura al exterior";
 choices[71][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[71] = 0;
 units[71] = ['17'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 437. Mercado &Uacute;nico Digital";
 preguntaids[71] = 437


//  Id pregunta: 9667 Año de creación de pregunta: 2014
 questions[72]= "73)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen";
 choices[72]= new Array();
 choices[72][0] = "TIFF.";
 choices[72][1] = "GIF.";
 choices[72][2] = "PNG.";
 choices[72][3] = "JPEG.";
 answers[72] = 2;
 units[72] = ['80'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9667. Examen TIC A1 2013";
 preguntaids[72] = 9667


//  Id pregunta: 4691 Año de creación de pregunta: 2002
 questions[73]= "74)  El nivel 5 de OSI:";
 choices[73]= new Array();
 choices[73][0] = "Tiene como principal funci&oacute;n el control de la subred de comunicaciones";
 choices[73][1] = "Tiene como objetivo el ofrecer un servicio para que dos entidades puedan organizar y sincronizar su di&aacute;logo";
 choices[73][2] = "Realiza funciones de encaminamiento de la informaci&oacute;n";
 choices[73][3] = "Se subdivide en dos subniveles (LLC y MAC)";
 answers[73] = 1;
 units[73] = ['105'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4691. ";
 preguntaids[73] = 4691


//  Id pregunta: 1918 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[74]= new Array();
 choices[74][0] = "POP es un protocolo de acceso a correo";
 choices[74][1] = "SMTP es un protocolo de transporte de mensajes";
 choices[74][2] = "IMAP es un protocolo de red de acceso a mensajes electr&oacute;nicos almacenados en un servidor";
 choices[74][3] = "MIME no permite acentos en los mensajes de correo";
 answers[74] = 3;
 units[74] = ['116'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1918. ";
 preguntaids[74] = 1918


