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
//  Id pregunta: 6624 Año de creación de pregunta: 2009
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[0]= new Array();
 choices[0][0] = "TOPSIS";
 choices[0][1] = "PROMETHEE";
 choices[0][2] = "ELECTRE";
 choices[0][3] = "QUALIFLEX";
 answers[0] = 3;
 units[0] = ['38'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 6624. ";
 preguntaids[0] = 6624


//  Id pregunta: 7882 Año de creación de pregunta: 2011
 questions[1]= "2)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo Delphi.";
 choices[1][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[1][2] = "M&eacute;todo de Saaty.";
 choices[1][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[1] = 3;
 units[1] = ['38'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 7882. Examen TIC A1 2010";
 preguntaids[1] = 7882


//  Id pregunta: 2044 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[2]= new Array();
 choices[2][0] = "M&eacute;todo promethee";
 choices[2][1] = "Utilidad multiatributo";
 choices[2][2] = "Permutaci&oacute;n";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = 3;
 units[2] = ['38'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2044. ";
 preguntaids[2] = 2044


//  Id pregunta: 2420 Año de creación de pregunta: 2006
 questions[3]= "4)  Los m&eacute;todos especialmente adecuados para problemas de DMD en los que como resultado se busque o sea suficiente obtener un subconjunto de alternativas aceptables son:";
 choices[3]= new Array();
 choices[3][0] = "m&eacute;todos de concordancia";
 choices[3][1] = "m&eacute;todos de permutaci&oacute;n";
 choices[3][2] = "metodos lexicogr&aacute;ficos";
 choices[3][3] = "m&eacute;todos de la entrop&iacute;a";
 answers[3] = 0;
 units[3] = ['38'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2420. ";
 preguntaids[3] = 2420


//  Id pregunta: 2084 Año de creación de pregunta: 2002
 questions[4]= "5)  El m&eacute;todo de ordenaci&oacute;n de alternativas que incorpora la posibilidad de valorar el riesgo y la incertidumbre es:";
 choices[4]= new Array();
 choices[4][0] = "El m&eacute;todo Promethee";
 choices[4][1] = "Utilidad multiatributo";
 choices[4][2] = "El m&eacute;todo de permutaci&oacute;n";
 choices[4][3] = "Ninguno de los restantes";
 answers[4] = 1;
 units[4] = ['38'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2084. ";
 preguntaids[4] = 2084


//  Id pregunta: 7471 Año de creación de pregunta: 2010
 questions[5]= "6)  Se&ntilde;ale la CORRECTA:";
 choices[5]= new Array();
 choices[5][0] = "En un criterio a minimizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[5][1] = "En un criterio a maximizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[5][2] = "Es obligatorio establecer un umbral de saciedad";
 choices[5][3] = "Todas son INCORRECTAS";
 answers[5] = 0;
 units[5] = ['38'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 7471. ";
 preguntaids[5] = 7471


//  Id pregunta: 2455 Año de creación de pregunta: 2006
 questions[6]= "7)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos,  el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[6]= new Array();
 choices[6][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[6][1] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[6][2] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[6][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 answers[6] = 2;
 units[6] = ['38'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2455. ";
 preguntaids[6] = 2455


//  Id pregunta: 2421 Año de creación de pregunta: 2006
 questions[7]= "8)  El m&eacute;todo en el que con criterios el decisor estima una matriz (nxn) A=(a,), donde a es la medida subjetiva de la importancia relativa del criterio i frente al j en una escala normalizada de 1 (igual de importante) a 9 (absolutamente m&aacute;s importante) es:";
 choices[7]= new Array();
 choices[7][0] = "m&eacute;todo Delphi";
 choices[7][1] = "m&eacute;todo de las utilidades relativas";
 choices[7][2] = "m&eacute;todo de la entrop&iacute;a";
 choices[7][3] = "AHP (Analytic Hierarchy Process)";
 answers[7] = 3;
 units[7] = ['38'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2421. ";
 preguntaids[7] = 2421


//  Id pregunta: 2262 Año de creación de pregunta: 2002
 questions[8]= "9)  Los m&eacute;todos m&aacute;s usuales para ordenar alternativas, seg&uacute;n la teor&iacute;a de la decisi&oacute;n multicriterio discreta son (se&ntilde;alar la falsa):";
 choices[8]= new Array();
 choices[8][0] = "M&eacute;todos UMA";
 choices[8][1] = "M&eacute;todo de ponderaci&oacute;n lineal";
 choices[8][2] = "M&eacute;todo Rusp";
 choices[8][3] = "M&eacute;todo lexicogr&aacute;fico";
 answers[8] = 2;
 units[8] = ['38'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2262. ";
 preguntaids[8] = 2262


//  Id pregunta: 5579 Año de creación de pregunta: 2007
 questions[9]= "10)  En el m&eacute;todo TOPSIS de decisi&oacute;n entre alternativas...";
 choices[9]= new Array();
 choices[9][0] = "La alternativa seleccionada debe ser aqu&eacute;lla que est&eacute; lo m&aacute;s cerca posible de la soluci&oacute;n ideal positiva y lo m&aacute;s lejos posible de la soluci&oacute;n ideal negativa.";
 choices[9][1] = "La idea es comparar cada permutaci&oacute;n posible de alternativas con la informaci&oacute;n ordinal de evaluaciones que aporta para cada criterio la matriz de decisi&oacute;n.";
 choices[9][2] = "En cada comparaci&oacute;n se asocia: &iacute;ndice de concordancia (mide argumentos a favor de la alternativa) e &iacute;ndice de discordancia (mide argumentos en contra).";
 choices[9][3] = "Se ignora la cuant&iacute;a de la diferencia entre alternativas para cada criterio, s&oacute;lo se&ntilde;ala si existe o no, y considera la importancia del criterio para el decisor.";
 answers[9] = 0;
 units[9] = ['38'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 5579. ";
 preguntaids[9] = 5579


//  Id pregunta: 7874 Año de creación de pregunta: 2011
 questions[10]= "11)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 10. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[10]= new Array();
 choices[10][0] = "0,5 ; 0,7 ; 1";
 choices[10][1] = "0,227 ; 0,318 ; 0,454";
 choices[10][2] = "0; 0,4; 1";
 choices[10][3] = "1 ; 1,4 ; 2";
 answers[10] = 2;
 units[10] = ['38'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 7874. Examen TIC A1 2010";
 preguntaids[10] = 7874


//  Id pregunta: 2449 Año de creación de pregunta: 2006
 questions[11]= "12)  El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[11]= new Array();
 choices[11][0] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones";
 choices[11][1] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del cat&aacute;logo de bienes y servicios de contrataci&oacute;n centralizada";
 choices[11][2] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica";
 choices[11][3] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado sin publicidad";
 answers[11] = 2;
 units[11] = ['38'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2449. ";
 preguntaids[11] = 2449


//  Id pregunta: 8823 Año de creación de pregunta: 2013
 questions[12]= "13)  En la Teor&iacute;a Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo obtiene como resultado un subconjunto de alternativas aceptables";
 choices[12]= new Array();
 choices[12][0] = "M&eacute;todos de concordancia";
 choices[12][1] = "M&eacute;todos basados en permutaciones";
 choices[12][2] = "M&eacute;todos basados en la ponderaci&oacute;n lineal";
 choices[12][3] = "M&eacute;todo T.O.P.S.I.S.";
 answers[12] = 0;
 units[12] = ['38'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 8823. ";
 preguntaids[12] = 8823


//  Id pregunta: 2043 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en la comparaci&oacute;n binaria de las alternativas?:";
 choices[13]= new Array();
 choices[13][0] = "Concordancia";
 choices[13][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[13][2] = "Ponderaci&oacute;n lineal";
 choices[13][3] = "Ninguno de los anteriores";
 answers[13] = 0;
 units[13] = ['38'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2043. ";
 preguntaids[13] = 2043


//  Id pregunta: 2129 Año de creación de pregunta: 2002
 questions[14]= "15)  En el marco de la decisi&oacute;n multicriterio, la normalizaci&oacute;n es el proceso por el que:";
 choices[14]= new Array();
 choices[14][0] = "Se eliminan las alternativas que no intervienen en el c&aacute;lculo";
 choices[14][1] = "Se desactivan aquellos criterios en los que todas las alternativas alcanzan id&eacute;ntica puntuaci&oacute;n";
 choices[14][2] = "Se ajusta la matriz de puntuaciones seg&uacute;n un modelo de referencia";
 choices[14][3] = "Se modifica el contenido de la matriz de puntuaciones para hacer &eacute;sta comparables entre s&iacute;";
 answers[14] = 3;
 units[14] = ['38'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2129. ";
 preguntaids[14] = 2129


//  Id pregunta: 8394 Año de creación de pregunta: 2011
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas:";
 choices[15]= new Array();
 choices[15][0] = "M&eacute;todo de la ponderaci&oacute;n lineal";
 choices[15][1] = "M&eacute;todo de TOPSIS";
 choices[15][2] = "M&eacute;todo Delphi";
 choices[15][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[15] = 2;
 units[15] = ['38'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 8394. ";
 preguntaids[15] = 8394


//  Id pregunta: 5437 Año de creación de pregunta: 2007
 questions[16]= "17)  Indique cu&aacute;l de los siguientes criterios pondera la situaci&oacute;n m&aacute;s optimista con la m&aacute;s pesimista mediante un factor alfa:";
 choices[16]= new Array();
 choices[16][0] = "Criterio de Laplace";
 choices[16][1] = "Criterio de Wald";
 choices[16][2] = "Criterio de Savage";
 choices[16][3] = "Criterio de Hurwicz";
 answers[16] = 3;
 units[16] = ['38'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 5437. ";
 preguntaids[16] = 5437


//  Id pregunta: 1136 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ala la respuesta INCORRECTA en relaci&oacute;n con el m&eacute;todo Delphi:";
 choices[17]= new Array();
 choices[17][0] = "Barry Boehm y John A. Farquhar originaron la variante del m&eacute;todo Delphi denominada de &quot;banda ancha&quot; (wideband).";
 choices[17][1] = "En el m&eacute;todo Delphi tradicional los expertos rellenan un impreso de manera an&oacute;nima, pueden hacer preguntas al coordinador pero no entre ellos.";
 choices[17][2] = "En la variaci&oacute;n &quot;banda ancha&quot; no es necesario que los participantes se re&uacute;nan con el coordinador.";
 choices[17][3] = "En el m&eacute;todo tradicional el coordinador ofrece a cada experto el valor medio de las opiniones recogidas y pide una nueva estimaci&oacute;n an&oacute;nima indicando las razones de las posibles modificaciones.";
 answers[17] = 2;
 units[17] = ['38'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 1136. ";
 preguntaids[17] = 1136


//  Id pregunta: 2240 Año de creación de pregunta: 2004
 questions[18]= "19)  En la Teor&iacute;a de Decisi&oacute;n Multicriterio Discreta (DMD), la normalizaci&oacute;n de puntuaciones:";
 choices[18]= new Array();
 choices[18][0] = "Homogeiniza las puntuaciones a una escala com&uacute;n (0,1)";
 choices[18][1] = "Permite la comparaci&oacute;n de criterios no homog&eacute;neos, medidos con unidades distintas y de distinto tipo (cuantitativos y cualitativos)";
 choices[18][2] = "Permite comparar criterio de sentido diferente (m&aacute;ximo, m&iacute;nimo)";
 choices[18][3] = "Todas las respuestas son correctas";
 answers[18] = 3;
 units[18] = ['38'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2240. ";
 preguntaids[18] = 2240


//  Id pregunta: 8822 Año de creación de pregunta: 2013
 questions[19]= "20)  En la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo no es de asignaci&oacute;n de pesos a los criterios:";
 choices[19]= new Array();
 choices[19][0] = "DELPHI";
 choices[19][1] = "Entrop&iacute;a";
 choices[19][2] = "SAATY";
 choices[19][3] = "PROMETHEE";
 answers[19] = 3;
 units[19] = ['38'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 8822. ";
 preguntaids[19] = 8822


//  Id pregunta: 2100 Año de creación de pregunta: 2002
 questions[20]= "21)  El m&eacute;todo Promethee:";
 choices[20]= new Array();
 choices[20][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[20][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[20][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[20][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[20] = 0;
 units[20] = ['38'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2100. ";
 preguntaids[20] = 2100


//  Id pregunta: 2040 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas compara cada permutaci&oacute;n posible de las alternativas, con la informaci&oacute;n que aporta para cada criterio la matriz de decisi&oacute;n?:";
 choices[21]= new Array();
 choices[21][0] = "M&eacute;todo Promethee";
 choices[21][1] = "Utilidad multiatributo";
 choices[21][2] = "Permutaci&oacute;n";
 choices[21][3] = "Ninguno de los anteriores";
 answers[21] = 3;
 units[21] = ['38'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2040. ";
 preguntaids[21] = 2040


//  Id pregunta: 2419 Año de creación de pregunta: 2006
 questions[22]= "23)  En teor&iacute;a de la decisi&oacute;n multicriterio discreta (DMD), el m&eacute;todo QUALIFLEX se basa en:";
 choices[22]= new Array();
 choices[22][0] = "evaluaciones cardinales y pesos cardinales";
 choices[22][1] = "evaluaciones ordinales y pesos cardinales";
 choices[22][2] = "evaluaciones ordinales y pesos ordinales";
 choices[22][3] = "evaluaciones cardinales y pesos ordinales";
 answers[22] = 1;
 units[22] = ['38'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2419. ";
 preguntaids[22] = 2419


//  Id pregunta: 2042 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas incorpora la posibilidad de valorar el riesgo y la incertidumbre?:";
 choices[23]= new Array();
 choices[23][0] = "M&eacute;todo Promethee";
 choices[23][1] = "Utilidad multiatributo";
 choices[23][2] = "Permutaci&oacute;n";
 choices[23][3] = "Ninguno de los anteriores";
 answers[23] = 1;
 units[23] = ['38'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2042. ";
 preguntaids[23] = 2042


//  Id pregunta: 9326 Año de creación de pregunta: 2014
 questions[24]= "25)  En el &aacute;mbito de la teor&iacute;a de la decisi&oacute;n multicriterio discreta, &iquest;qu&eacute; m&eacute;todo deordenaci&oacute;n de alternativas se caracteriza por elegir en primer lugar la alternativa que tiene el mejor valor en el criterio de mayor peso?";
 choices[24]= new Array();
 choices[24][0] = "El m&eacute;todo PROMETHEE.";
 choices[24][1] = "El m&eacute;todo lexicogr&aacute;fico.";
 choices[24][2] = "El m&eacute;todo de la ponderaci&oacute;n lineal.";
 choices[24][3] = "El m&eacute;todo ELECTRE.";
 answers[24] = 1;
 units[24] = ['38'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 9326. ";
 preguntaids[24] = 9326


//  Id pregunta: 2166 Año de creación de pregunta: 2002
 questions[25]= "26)  En la teor&iacute;a de la decisi&oacute;n multicriterio, un criterio es:";
 choices[25]= new Array();
 choices[25][0] = "Las diversas opciones entre las que queremos seleccionar una";
 choices[25][1] = "Aspectos que nos interesan de cada opci&oacute;n";
 choices[25][2] = "Las evaluaciones que damos a cada opci&oacute;n";
 choices[25][3] = "La importancia que le damos a cada aspecto seg&uacute;n nuestro criterio";
 answers[25] = 1;
 units[25] = ['38'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2166. ";
 preguntaids[25] = 2166


//  Id pregunta: 8825 Año de creación de pregunta: 2013
 questions[26]= "27)  &iquest;Qu&eacute; m&eacute;todo de decisi&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[26]= new Array();
 choices[26][0] = "ELECTRE";
 choices[26][1] = "PROMETHEE";
 choices[26][2] = "TOPSIS";
 choices[26][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[26] = 0;
 units[26] = ['38'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 8825. ";
 preguntaids[26] = 8825


//  Id pregunta: 9508 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta es m&aacute;s adecuado cuando se trata de obtener un subconjunto de alternativas aceptables?";
 choices[27]= new Array();
 choices[27][0] = "El m&eacute;todo de la Utilidad Multiatributo";
 choices[27][1] = "Los m&eacute;todos de concordancia";
 choices[27][2] = "Los m&eacute;todos basados en permutaciones";
 choices[27][3] = "El m&eacute;todo de la Programaci&oacute;n compromiso";
 answers[27] = 1;
 units[27] = ['38'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 9508. ";
 preguntaids[27] = 9508


//  Id pregunta: 7701 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSDAAPP v.3.0?";
 choices[28]= new Array();
 choices[28][0] = "Ponderaci&oacute;n Lineal.";
 choices[28][1] = "Permutaci&oacute;n.";
 choices[28][2] = "Prometh&eacute;e.";
 choices[28][3] = "Distancia al Ideal (TOPSIS).";
 answers[28] = 1;
 units[28] = ['38'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 7701. Map 2007";
 preguntaids[28] = 7701


//  Id pregunta: 6623 Año de creación de pregunta: 2009
 questions[29]= "30)  &iquest;A cu&aacute;l de las siguientes categor&iacute;as de m&eacute;todos de ordenaci&oacute;n de alternativas pertenece el m&eacute;todo PROMETHEE?";
 choices[29]= new Array();
 choices[29][0] = "Concordancia";
 choices[29][1] = "Permutaciones";
 choices[29][2] = "Relaciones de superaci&oacute;n";
 choices[29][3] = "Ponderaci&oacute;n lineal";
 answers[29] = 2;
 units[29] = ['38'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 6623. ";
 preguntaids[29] = 6623


//  Id pregunta: 6622 Año de creación de pregunta: 2009
 questions[30]= "31)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos de normalizaci&oacute;n de puntuaciones no mantiene la proporcionalidad entre puntuaciones directas y normalizadas?";
 choices[30]= new Array();
 choices[30][0] = "Fracci&oacute;n del ideal";
 choices[30][1] = "Fracci&oacute;n de la suma";
 choices[30][2] = "Fracci&oacute;n del m&aacute;ximo";
 choices[30][3] = "Todas las anteriores mantienen la proporcionalidad";
 answers[30] = 0;
 units[30] = ['38'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 6622. ";
 preguntaids[30] = 6622


//  Id pregunta: 7822 Año de creación de pregunta: 2010
 questions[31]= "32)  El m&eacute;todo de Saaty o AHP:";
 choices[31]= new Array();
 choices[31][0] = "Es relativo a accesibilidad web.";
 choices[31][1] = "Es relativo a la decisi&oacute;n multicriterio.";
 choices[31][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n.";
 choices[31][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo.";
 answers[31] = 1;
 units[31] = ['38'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 7822. ";
 preguntaids[31] = 7822


//  Id pregunta: 8821 Año de creación de pregunta: 2013
 questions[32]= "33)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[32]= new Array();
 choices[32][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[32][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[32][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[32][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[32] = 2;
 units[32] = ['38'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 8821. ";
 preguntaids[32] = 8821


//  Id pregunta: 9509 Año de creación de pregunta: 2014
 questions[33]= "34)  Tres alternativas A, B y C han obtenido respectivamente las puntuaciones directas 300, 450 y 250 respecto de un criterio. Seg&uacute;n el m&eacute;todo de fracci&oacute;n del ideal, &iquest;qu&eacute; puntuaci&oacute;n normalizada corresponde a la alternativa A?";
 choices[33]= new Array();
 choices[33][0] = "0,25 puntos";
 choices[33][1] = "0,75 puntos";
 choices[33][2] = "0,33 puntos";
 choices[33][3] = "0,66 puntos";
 answers[33] = 0;
 units[33] = ['38'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 9509. Puntuaci&oacute;n normalizada por factor del ideal = (puntuacion - puntuacion_min) / (puntuacion_max - puntuacion_min) = (300 - 250) / (450 - 250) = 0,25";
 preguntaids[33] = 9509


//  Id pregunta: 6894 Año de creación de pregunta: 2010
 questions[34]= "35)  Cuando puntuamos criterios de diferentes alternativas y nos referimos al umbral de saciedad, entendemos por tal:";
 choices[34]= new Array();
 choices[34][0] = "El valor que debe cumplir la puntuaci&oacute;n de un criterio para ser considerado aceptable. por tanto es el m&iacute;nimo exigido.";
 choices[34][1] = "El valor de un criterio a partir del cual no se obtiene una utilidad adicional, por lo que su exceso no es tenido en cuenta.";
 choices[34][2] = "Un valor ordinal definido por el evaluador conforme a una escala subjetiva.";
 choices[34][3] = "Un m&eacute;todo de limitaci&oacute;n de la asignaci&oacute;n de puntuaciones mediante entrop&iacute;a. Se dice entonces que el criterio est&aacute; saciado.";
 answers[34] = 1;
 units[34] = ['38'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 6894. TIC A 2009";
 preguntaids[34] = 6894


//  Id pregunta: 2126 Año de creación de pregunta: 2002
 questions[35]= "36)  En el contexto de la ordenaci&oacute;n de alternativas en la teor&iacute;a de la DMD, el m&eacute;todo Promethee:";
 choices[35]= new Array();
 choices[35][0] = "S&oacute;lo tiene en cuenta los criterios de mayor peso";
 choices[35][1] = "Se basa en las comparaciones binarias de alternativas";
 choices[35][2] = "Utiliza el c&aacute;lculo de relaciones de superaci&oacute;n entre alternativas";
 choices[35][3] = "Es la generalizaci&oacute;n del m&eacute;todo de la ponderaci&oacute;n lineal";
 answers[35] = 2;
 units[35] = ['38'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2126. ";
 preguntaids[35] = 2126


//  Id pregunta: 2045 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas utiliza &uacute;nicamente la componente subjetiva del decisor?:";
 choices[36]= new Array();
 choices[36][0] = "Concordancia";
 choices[36][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[36][2] = "Ponderaci&oacute;n lineal";
 choices[36][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[36] = 3;
 units[36] = ['38'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2045. ";
 preguntaids[36] = 2045


//  Id pregunta: 8393 Año de creación de pregunta: 2011
 questions[37]= "38)  Se&ntilde;ale la respuesta correcta relativa a m&eacute;todos de asignaci&oacute;n de pesos a los criterios:";
 choices[37]= new Array();
 choices[37][0] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[37][1] = "El m&eacute;todo de las Utilidades Relativas es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo de AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[37][2] = "Tanto el m&eacute;todo de las Utilidades Relativas como el m&eacute;todo AHP son m&eacute;todos de asignaci&oacute;n directa";
 choices[37][3] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 answers[37] = 3;
 units[37] = ['38'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 8393. ";
 preguntaids[37] = 8393


//  Id pregunta: 8824 Año de creación de pregunta: 2013
 questions[38]= "39)  &iquest;Qu&eacute; m&eacute;todo de asignaci&oacute;n de pesos no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[38]= new Array();
 choices[38][0] = "Asignaci&oacute;n directa";
 choices[38][1] = "Entrop&iacute;a";
 choices[38][2] = "SAATY";
 choices[38][3] = "La herramienta SSD-AAPP soporta todos los m&eacute;todos anteriores de asignaci&oacute;n de pesos";
 answers[38] = 3;
 units[38] = ['38'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 8824. ";
 preguntaids[38] = 8824


//  Id pregunta: 2099 Año de creación de pregunta: 2002
 questions[39]= "40)  El la teor&iacute;a de la decisi&oacute;n multicriterio discreta, para el problema de la asignaci&oacute;n de pesos a criterios pueden utilizarse, entre otros, los m&eacute;todos:";
 choices[39]= new Array();
 choices[39][0] = "Lexicogr&aacute;fico y Promethee";
 choices[39][1] = "El m&eacute;todo de ponderaci&oacute;n lineal";
 choices[39][2] = "El m&eacute;todo Delphi y el de la entrop&iacute;a";
 choices[39][3] = "El m&eacute;todo de ponderaci&oacute;n";
 answers[39] = 2;
 units[39] = ['38'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2099. ";
 preguntaids[39] = 2099


//  Id pregunta: 7469 Año de creación de pregunta: 2010
 questions[40]= "41)  En la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de asignaci&oacute;n de pesos?";
 choices[40]= new Array();
 choices[40][0] = "Delphi";
 choices[40][1] = "Promethee";
 choices[40][2] = "Electre";
 choices[40][3] = "Qualiflex";
 answers[40] = 0;
 units[40] = ['38'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 7469. ";
 preguntaids[40] = 7469


//  Id pregunta: 2236 Año de creación de pregunta: 2004
 questions[41]= "42)  Cuando utilizamos las siglas SSD-AAPP, nos estamos refiriendo a:";
 choices[41]= new Array();
 choices[41][0] = "Un sistema de informaci&oacute;n dedicado al an&aacute;lisis de redes de comunicaciones.";
 choices[41][1] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para ayudar a la elecci&oacute;n en la contrataci&oacute;n de bienes o servicios inform&aacute;ticos.";
 choices[41][2] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para decidir si debemos contratar un desarrollo a una empresa externa o hacerlo con medios propios.";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = 1;
 units[41] = ['38'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 2236. ";
 preguntaids[41] = 2236


//  Id pregunta: 6104 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;Cual de los siguientes es el m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.4.01?";
 choices[42]= new Array();
 choices[42][0] = "Ponderaci&oacute;n Lineal";
 choices[42][1] = "Permutaci&oacute;n";
 choices[42][2] = "Prometh&eacute;e";
 choices[42][3] = "Distancia al Ideal (TOPSIS)";
 answers[42] = 0;
 units[42] = ['38'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 6104. Examen TIC A1 MAP 2007";
 preguntaids[42] = 6104


//  Id pregunta: 1997 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes es una herramienta inform&aacute;tica de apoyo a los compradores p&uacute;blicos?";
 choices[43]= new Array();
 choices[43][0] = "PROS@.";
 choices[43][1] = "ISTMO.";
 choices[43][2] = "SSD-AAPP.";
 choices[43][3] = "Ninguna de las anteriores.";
 answers[43] = 2;
 units[43] = ['38'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 1997. ";
 preguntaids[43] = 1997


//  Id pregunta: 2076 Año de creación de pregunta: 2002
 questions[44]= "45)  De las siguientes afirmaciones referentes al m&eacute;todo lexicogr&aacute;fico de ordenaci&oacute;n de alternativas, indique cu&aacute;l es m&aacute;s correcta:";
 choices[44]= new Array();
 choices[44][0] = "El m&eacute;todo lexicogr&aacute;fico tiene como inconveniente que no utiliza toda la informaci&oacute;n disponible";
 choices[44][1] = "El m&eacute;todo lexicogr&aacute;fico requiere comparabilidad intercriterios";
 choices[44][2] = "El m&eacute;todo lexicogr&aacute;fico da como resultado un preorden parcial de las alternativas, pudiendo quedar alternativas declaradas como incomparables";
 choices[44][3] = "Todas las respuestas anteriores son ciertas";
 answers[44] = 0;
 units[44] = ['38'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2076. ";
 preguntaids[44] = 2076


//  Id pregunta: 2079 Año de creación de pregunta: 2002
 questions[45]= "46)  Dentro de la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de la entrop&iacute;a se utiliza para:";
 choices[45]= new Array();
 choices[45][0] = "Asignar un peso a cada alternativa";
 choices[45][1] = "Normalizar las puntuaciones brutas otorgadas";
 choices[45][2] = "Ordenar las alternativas";
 choices[45][3] = "Suavizar la subjetividad del m&eacute;todo directo de asignaci&oacute;n de pesos";
 answers[45] = 3;
 units[45] = ['38'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2079. ";
 preguntaids[45] = 2079


//  Id pregunta: 2041 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas ignora la cuant&iacute;a de la diferencia y s&oacute;lo se&ntilde;ala si existe o no?:";
 choices[46]= new Array();
 choices[46][0] = "M&eacute;todo Promethee";
 choices[46][1] = "Utilidad multiatributo";
 choices[46][2] = "Permutaci&oacute;n";
 choices[46][3] = "Ninguno de los anteriores";
 answers[46] = 0;
 units[46] = ['38'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2041. ";
 preguntaids[46] = 2041


//  Id pregunta: 1679 Año de creación de pregunta: 2016
 questions[47]= "48)  En la teor&iacute;a de Decisi&oacute;n Multicriterio Discreta (DMD), el m&eacute;todo de ordenaci&oacute;n de alternativas Promethee se encuadra en la tipolog&iacute;a:";
 choices[47]= new Array();
 choices[47][0] = "De relaciones de superaci&oacute;n";
 choices[47][1] = "De ponderaci&oacute;n lineal";
 choices[47][2] = "Lexicogr&aacute;fico";
 choices[47][3] = "De concordancia";
 answers[47] = 0;
 units[47] = ['38'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 1679. ";
 preguntaids[47] = 1679


//  Id pregunta: 2146 Año de creación de pregunta: 2004
 questions[48]= "49)  La teor&iacute;a de la decisi&oacute;n multicriterio discreta";
 choices[48]= new Array();
 choices[48][0] = "tiene problemas con una incorrecta asignaci&oacute;n de pesos";
 choices[48][1] = "es usada en la elecci&oacute;n de contratos por parte de la administraci&oacute;n en ocasiones";
 choices[48][2] = "la normalizaci&oacute;n de las puntuaciones puede hacer perder la proporcionalidad";
 choices[48][3] = "todas las anteriores";
 answers[48] = 3;
 units[48] = ['38'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 2146. ";
 preguntaids[48] = 2146


//  Id pregunta: 2028 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la ordenaci&oacute;n de alternativas en la selecci&oacute;n de bienes y servicios?:";
 choices[49]= new Array();
 choices[49][0] = "M&eacute;todo lexicogr&aacute;fico";
 choices[49][1] = "M&eacute;todo de Promethee";
 choices[49][2] = "M&eacute;todo Qualiflex";
 choices[49][3] = "M&eacute;todo heur&iacute;stico";
 answers[49] = 3;
 units[49] = ['38'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2028. ";
 preguntaids[49] = 2028


//  Id pregunta: 10775 Año de creación de pregunta: 2015
 questions[50]= "51)  El m&eacute;todo de normalizaci&oacute;n de puntuaciones que asigna 1 a la puntuaci&oacute;n m&aacute;s alta y que no mantiene la proporcionalidad es:";
 choices[50]= new Array();
 choices[50][0] = "Fracci&oacute;n de la suma";
 choices[50][1] = "Fracci&oacute;n del m&aacute;ximo";
 choices[50][2] = "Fracci&oacute;n del ideal";
 choices[50][3] = "Todas las anteriores son falsas";
 answers[50] = 2;
 units[50] = ['38'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 10775. ";
 preguntaids[50] = 10775


//  Id pregunta: 6672 Año de creación de pregunta: 2009
 questions[51]= "52)  Las caracter&iacute;sticas del m&eacute;todo Delphi son";
 choices[51]= new Array();
 choices[51][0] = "Confidencialidad, integridad del grupo y disponibilidad";
 choices[51][1] = "Anonimato, realimentaci&oacute;n controlada y respuesta del grupo de forma estad&iacute;stica";
 choices[51][2] = "Criticidad, autenticaci&oacute;n del grupo y consistencia";
 choices[51][3] = "Convergencia, coherencia del grupo y salvaguarda";
 answers[51] = 1;
 units[51] = ['38'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 6672. MAP 2008 A1";
 preguntaids[51] = 6672


//  Id pregunta: 2039 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas atiende &uacute;nicamente al criterio de mayor peso y mayor puntuaci&oacute;n, resolviendo los empates con el siguiente de mayor peso?:";
 choices[52]= new Array();
 choices[52][0] = "Concordancia";
 choices[52][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[52][2] = "Ponderaci&oacute;n lineal";
 choices[52][3] = "Ninguno de los anteriores";
 answers[52] = 1;
 units[52] = ['38'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2039. ";
 preguntaids[52] = 2039


//  Id pregunta: 7792 Año de creación de pregunta: 2010
 questions[53]= "54)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[53]= new Array();
 choices[53][0] = "Puntuaciones normalizadas.";
 choices[53][1] = "Factor de ponderaci&oacute;n de los criterios.";
 choices[53][2] = "Coeficiente de concordancia.";
 choices[53][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n.";
 answers[53] = 2;
 units[53] = ['38'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 7792. ";
 preguntaids[53] = 7792


//  Id pregunta: 7530 Año de creación de pregunta: 2010
 questions[54]= "55)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos, el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[54]= new Array();
 choices[54][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[54][1] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[54][2] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[54][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 answers[54] = 2;
 units[54] = ['38'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 7530. Map 2005";
 preguntaids[54] = 7530


//  Id pregunta: 2188 Año de creación de pregunta: 2002
 questions[55]= "56)  Entre los m&eacute;todos utilizados para la selecci&oacute;n de bienes y servicios:";
 choices[55]= new Array();
 choices[55][0] = "En general se considera que a mayor entrop&iacute;a, mayor informaci&oacute;n, puesto que las puntuaciones est&aacute;n m&aacute;s ordenadas";
 choices[55][1] = "La normalizaci&oacute;n de las puntuaciones suele ser necesaria para considerarlas a todas sobre la misma escala y para simplificar los c&aacute;lculos";
 choices[55][2] = "En el m&eacute;todo de permutaci&oacute;n, se exigen solamente las evaluaciones cardinales y los pesos ordinales";
 choices[55][3] = "Todas las respuestas anteriores son correctas";
 answers[55] = 1;
 units[55] = ['38'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2188. ";
 preguntaids[55] = 2188


//  Id pregunta: 7691 Año de creación de pregunta: 2010
 questions[56]= "57)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0, el umbral de saciedad m&aacute;ximo para un criterio:";
 choices[56]= new Array();
 choices[56][0] = "Indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa para ese criterio para que pueda ser considerada.";
 choices[56][1] = "Indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa para ese criterio para que pueda ser considerada.";
 choices[56][2] = "Indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en la puntuaci&oacute;n obtenida.";
 choices[56][3] = "Indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio.";
 answers[56] = 2;
 units[56] = ['38'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 7691. Map 2007";
 preguntaids[56] = 7691


//  Id pregunta: 7470 Año de creación de pregunta: 2010
 questions[57]= "58)  Si para un determinado criterio, el decisor establece como umbral de saciedad 50 y como nivel de satisfacci&oacute;n 10:";
 choices[57]= new Array();
 choices[57][0] = "No ser&aacute;n tenidas en cuenta las ofertas que ofrezcan menos de 50";
 choices[57][1] = "Solo ser&aacute;n tenidas en cuenta las ofertas est&eacute;n entre 10 y 50";
 choices[57][2] = "Es un criterio a minimizar";
 choices[57][3] = "Una oferta que ofrezca 50 y otra que ofrezca 60 tendr&aacute;n la misma puntuaci&oacute;n en ese criterio";
 answers[57] = 3;
 units[57] = ['38'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 7470. ";
 preguntaids[57] = 7470


//  Id pregunta: 9507 Año de creación de pregunta: 2014
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta est&aacute; basado en relaciones de superaci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "M&eacute;todo PROMETHEE";
 choices[58][1] = "M&eacute;todo T.O.P.S.I.S. o de la programaci&oacute;n compromiso";
 choices[58][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[58][3] = "M&eacute;todo de la ponderaci&oacute;n lineal con &iacute;ndices econ&oacute;micos";
 answers[58] = 0;
 units[58] = ['38'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 9507. ";
 preguntaids[58] = 9507


//  Id pregunta: 2032 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;ndo podr&iacute;a utilizarse, en un proceso de decisi&oacute;n multicriterio discreta, el c&aacute;lculo de pesos por el m&eacute;todo de la entrop&iacute;a?:";
 choices[59]= new Array();
 choices[59][0] = "Cuando no se disponga previamente de la puntuaci&oacute;n de las alternativas para cada criterio";
 choices[59][1] = "Cuando el decisor quiera minimizar la subjetividad en la asignaci&oacute;n de pesos";
 choices[59][2] = "Cuando, tras la normalizaci&oacute;n, exista alguna puntuaci&oacute;n nula en alguno de los criterios";
 choices[59][3] = "Cuando el decisor quiera comparar los criterios de dos en dos para fijar mejor su jerarqu&iacute;a";
 answers[59] = 1;
 units[59] = ['38'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2032. ";
 preguntaids[59] = 2032


//  Id pregunta: 2422 Año de creación de pregunta: 2006
 questions[60]= "61)  En el proceso de selecci&oacute;n de alternativas en bienes y servicios de Tecnolog&iacute;as de la Informaci&oacute;n, &iquest;cu&aacute;l de los siguientes m&eacute;todos es el m&aacute;s recomendable a efectos de que no se vean favorecidas en exceso las alternativas que son median&iacute;as?";
 choices[60]= new Array();
 choices[60][0] = "El m&eacute;todo de la Ponderaci&oacute;n Lineal.";
 choices[60][1] = "Los m&eacute;todos de Relaciones de Superaci&oacute;n.";
 choices[60][2] = "El m&eacute;todo Lexicogr&aacute;fico.";
 choices[60][3] = "El m&eacute;todo de las Utilidades Relativas.";
 answers[60] = 1;
 units[60] = ['38'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2422. ";
 preguntaids[60] = 2422


//  Id pregunta: 10550 Año de creación de pregunta: 2015
 questions[61]= "62)  Se&ntilde;ale cu&aacute;l de las siguientes opciones contiene m&eacute;todos de asignaci&oacute;n de pesos en la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta";
 choices[61]= new Array();
 choices[61][0] = "Delphi, Utilidades relativas, UMA, Entrop&iacute;a";
 choices[61][1] = "Delphi, Utilidades relativas, AHP, Entrop&iacute;a";
 choices[61][2] = "Delphi, Utilidades relativas, Electre, Entrop&iacute;a";
 choices[61][3] = "Delphi, Utilidades relativas, Electre, TOPSIS";
 answers[61] = 1;
 units[61] = ['38'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 10550. ";
 preguntaids[61] = 10550


//  Id pregunta: 6720 Año de creación de pregunta: 2009
 questions[62]= "63)  El m&eacute;todo de Saaty &oacute; AHP:";
 choices[62]= new Array();
 choices[62][0] = "Es relativo a accesibilidad web";
 choices[62][1] = "Es relativo a la decisi&oacute;n multicriterio";
 choices[62][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n";
 choices[62][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo";
 answers[62] = 1;
 units[62] = ['38'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 6720. MAP 2008 A1";
 preguntaids[62] = 6720


//  Id pregunta: 2342 Año de creación de pregunta: 2003
 questions[63]= "64)  SSD-AAPP es una herramienta para";
 choices[63]= new Array();
 choices[63][0] = "Mejorar el desarrollo de los sistemas de informaci&oacute;n";
 choices[63][1] = "Reducir el gasto de adquisici&oacute;n de equipos inform&aacute;ticos";
 choices[63][2] = "Permitir la implantaci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n y la Comunicaci&oacute;n en la Administraci&oacute;n";
 choices[63][3] = "Permitir al comprador evaluar las ofertas para la adquisici&oacute;n de bienes y servicios inform&aacute;ticos";
 answers[63] = 3;
 units[63] = ['38'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2342. ";
 preguntaids[63] = 2342


//  Id pregunta: 6735 Año de creación de pregunta: 2009
 questions[64]= "65)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[64]= new Array();
 choices[64][0] = "Puntuaciones normalizadas";
 choices[64][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[64][2] = "Coeficiente de concordancia";
 choices[64][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[64] = 2;
 units[64] = ['38'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 6735. MAP 2008 A1";
 preguntaids[64] = 6735


