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
//  Id pregunta: 125 A�o de creaci�n de pregunta: 2016
 questions[0]= "1)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[0]= new Array();
 choices[0][0] = "Cinco a&ntilde;os.";
 choices[0][1] = "Seis a&ntilde;os.";
 choices[0][2] = "Cuatro a&ntilde;os.";
 choices[0][3] = "Tres a&ntilde;os.";
 answers[0] = 0;
 units[0] = ['5'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 125. Uni&oacute;n Europea";
 preguntaids[0] = 125


//  Id pregunta: 133 A�o de creaci�n de pregunta: 2016
 questions[1]= "2)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[1]= new Array();
 choices[1][0] = "El Consejo Europeo.";
 choices[1][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[1][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[1][3] = "El Parlamento Europeo.";
 answers[1] = 0;
 units[1] = ['5'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 133. Uni&oacute;n Europea";
 preguntaids[1] = 133


//  Id pregunta: 81 A�o de creaci�n de pregunta: 2016
 questions[2]= "3)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[2]= new Array();
 choices[2][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[2][1] = "La libertad sexual y religiosa.";
 choices[2][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[2][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[2] = 0;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 81. Constituci&oacute;n de 1978";
 preguntaids[2] = 81


//  Id pregunta: 148 A�o de creaci�n de pregunta: 2016
 questions[3]= "4)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[3]= new Array();
 choices[3][0] = "El Presidente del Consejo Europeo.";
 choices[3][1] = "La Comisi&oacute;n.";
 choices[3][2] = "El Consejo.";
 choices[3][3] = "El Parlamento Europeo.";
 answers[3] = 2;
 units[3] = ['5'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 148. Uni&oacute;n Europea";
 preguntaids[3] = 148


//  Id pregunta: 100 A�o de creaci�n de pregunta: 2016
 questions[4]= "5)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[4]= new Array();
 choices[4][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a.";
 choices[4][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[4][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a en tanto no hayan pasado a formar parte del ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[4][3] = "ratificados por Espa&ntilde;a y publicadas en el BOE, no son fuente del derecho.";
 answers[4] = 2;
 units[4] = ['5'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 100. AGE A2 2015";
 preguntaids[4] = 100


//  Id pregunta: 97 A�o de creaci�n de pregunta: 2016
 questions[5]= "6)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[5][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[5][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[5][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[5] = 0;
 units[5] = ['1'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[5] = 97


//  Id pregunta: 89 A�o de creaci�n de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[6]= new Array();
 choices[6][0] = "Constitucional.";
 choices[6][1] = "Penal.";
 choices[6][2] = "Militar.";
 choices[6][3] = "Tribunales consuetudinarios.";
 answers[6] = 1;
 units[6] = ['1'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 89. Constituci&oacute;n de 1978";
 preguntaids[6] = 89


//  Id pregunta: 132 A�o de creaci�n de pregunta: 2016
 questions[7]= "8)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[7]= new Array();
 choices[7][0] = "Por unanimidad.";
 choices[7][1] = "Por mayor&iacute;a cualificada.";
 choices[7][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[7][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[7] = 3;
 units[7] = ['5'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 132. Uni&oacute;n Europea";
 preguntaids[7] = 132


//  Id pregunta: 127 A�o de creaci�n de pregunta: 2016
 questions[8]= "9)  Componen la Comisi&oacute;n Europea:";
 choices[8]= new Array();
 choices[8][0] = "Un Comisario por cada Estado miembro.";
 choices[8][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[8][2] = "Dos Comisarios por cada Estado miembro.";
 choices[8][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[8] = 0;
 units[8] = ['5'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 127. Uni&oacute;n Europea";
 preguntaids[8] = 127


//  Id pregunta: 122 A�o de creaci�n de pregunta: 2016
 questions[9]= "10)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[9]= new Array();
 choices[9][0] = "Los propios miembros del Tribunal.";
 choices[9][1] = "El Consejo de Europa.";
 choices[9][2] = "El Consejo Europeo.";
 choices[9][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[9] = 0;
 units[9] = ['5'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 122. Uni&oacute;n Europea";
 preguntaids[9] = 122


//  Id pregunta: 147 A�o de creaci�n de pregunta: 2016
 questions[10]= "11)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[10]= new Array();
 choices[10][0] = "X.";
 choices[10][1] = "XIX.";
 choices[10][2] = "XV.";
 choices[10][3] = "XIII.";
 answers[10] = 1;
 units[10] = ['5'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 147. Uni&oacute;n Europea";
 preguntaids[10] = 147


//  Id pregunta: 117 A�o de creaci�n de pregunta: 2016
 questions[11]= "12)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[11]= new Array();
 choices[11][0] = "Estrasburgo.";
 choices[11][1] = "Bruselas.";
 choices[11][2] = "Luxemburgo.";
 choices[11][3] = "Holanda.";
 answers[11] = 2;
 units[11] = ['5'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 117. Uni&oacute;n Europea";
 preguntaids[11] = 117


//  Id pregunta: 110 A�o de creaci�n de pregunta: 2016
 questions[12]= "13)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[12]= new Array();
 choices[12][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[12][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[12][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[12][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[12] = 2;
 units[12] = ['5'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 110. Uni&oacute;n Europea";
 preguntaids[12] = 110


//  Id pregunta: 90 A�o de creaci�n de pregunta: 2016
 questions[13]= "14)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[13]= new Array();
 choices[13][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[13][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[13][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[13][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[13] = 2;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 90. Constituci&oacute;n de 1978";
 preguntaids[13] = 90


//  Id pregunta: 138 A�o de creaci�n de pregunta: 2016
 questions[14]= "15)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[14]= new Array();
 choices[14][0] = "Consejos y Servicios.";
 choices[14][1] = "Servicios permanentes y no permanentes.";
 choices[14][2] = "Direcciones Generales.";
 choices[14][3] = "Direcciones ministeriales.";
 answers[14] = 2;
 units[14] = ['5'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 138. Uni&oacute;n Europea";
 preguntaids[14] = 138


//  Id pregunta: 142 A�o de creaci�n de pregunta: 2016
 questions[15]= "16)  El Tribunal de Justicia est&aacute; formado por:";
 choices[15]= new Array();
 choices[15][0] = "Un Juez de cada Estado miembro.";
 choices[15][1] = "Por dos Jueces de cada Estado miembro.";
 choices[15][2] = "Por veinte Jueces.";
 choices[15][3] = "Por ocho Jueces.";
 answers[15] = 0;
 units[15] = ['5'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 142. Uni&oacute;n Europea";
 preguntaids[15] = 142


//  Id pregunta: 86 A�o de creaci�n de pregunta: 2016
 questions[16]= "17)  La iniciativa legislativa corresponde:";
 choices[16]= new Array();
 choices[16][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[16][1] = "Al rey y al Gobierno.";
 choices[16][2] = "Al Congreso, al Senado y al Rey.";
 choices[16][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[16] = 3;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 86. Constituci&oacute;n de 1978";
 preguntaids[16] = 86


//  Id pregunta: 136 A�o de creaci�n de pregunta: 2016
 questions[17]= "18)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[17]= new Array();
 choices[17][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[17][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[17][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[17][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[17] = 1;
 units[17] = ['5'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 136. Uni&oacute;n Europea";
 preguntaids[17] = 136


//  Id pregunta: 83 A�o de creaci�n de pregunta: 2016
 questions[18]= "19)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[18]= new Array();
 choices[18][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[18][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[18][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[18][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[18] = 2;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 83. Constituci&oacute;n de 1978";
 preguntaids[18] = 83


//  Id pregunta: 114 A�o de creaci�n de pregunta: 2016
 questions[19]= "20)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[19]= new Array();
 choices[19][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[19][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[19][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[19][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[19] = 1;
 units[19] = ['5'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 114. Uni&oacute;n Europea";
 preguntaids[19] = 114


//  Id pregunta: 143 A�o de creaci�n de pregunta: 2016
 questions[20]= "21)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[20]= new Array();
 choices[20][0] = "Tres a&ntilde;os.";
 choices[20][1] = "Cuatro a&ntilde;os.";
 choices[20][2] = "Cinco a&ntilde;os.";
 choices[20][3] = "Seis a&ntilde;os.";
 answers[20] = 3;
 units[20] = ['5'];
 blocks[20] = ['A1'];
 comments[20] = "Id Pregunta: 143. Uni&oacute;n Europea";
 preguntaids[20] = 143


//  Id pregunta: 109 A�o de creaci�n de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[21]= new Array();
 choices[21][0] = "Versi&oacute;n digital prioritaria.";
 choices[21][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[21][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[21][3] = "Apertura y transparencia.";
 answers[21] = 0;
 units[21] = ['5'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 109. Uni&oacute;n Europea";
 preguntaids[21] = 109


//  Id pregunta: 118 A�o de creaci�n de pregunta: 2016
 questions[22]= "23)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[22]= new Array();
 choices[22][0] = "Al Consejo Europeo.";
 choices[22][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[22][2] = "A la Comisi&oacute;n Europea.";
 choices[22][3] = "Al Parlamento Europeo.";
 answers[22] = 2;
 units[22] = ['5'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 118. Uni&oacute;n Europea";
 preguntaids[22] = 118


//  Id pregunta: 105 A�o de creaci�n de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[23]= new Array();
 choices[23][0] = "Crecimiento inteligente.";
 choices[23][1] = "Crecimiento inclusivo.";
 choices[23][2] = "Crecimiento sostenible.";
 choices[23][3] = "Crecimiento integrador.";
 answers[23] = 1;
 units[23] = ['5'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 105. Uni&oacute;n Europea";
 preguntaids[23] = 105


//  Id pregunta: 85 A�o de creaci�n de pregunta: 2016
 questions[24]= "25)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[24]= new Array();
 choices[24][0] = "Municipios, provincias y CCAA.";
 choices[24][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[24][2] = "En CCAA, 50 provincias y municipios.";
 choices[24][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[24] = 2;
 units[24] = ['1'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 85. Constituci&oacute;n de 1978";
 preguntaids[24] = 85


//  Id pregunta: 102 A�o de creaci�n de pregunta: 2016
 questions[25]= "26)  El pacto fiscal europeo de 2012 incluye:";
 choices[25]= new Array();
 choices[25][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[25][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[25][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[25][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[25] = 0;
 units[25] = ['5'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 102. Uni&oacute;n Europea";
 preguntaids[25] = 102


//  Id pregunta: 91 A�o de creaci�n de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[26]= new Array();
 choices[26][0] = "Veinte.";
 choices[26][1] = "Quince.";
 choices[26][2] = "Diez.";
 choices[26][3] = "Doce.";
 answers[26] = 0;
 units[26] = ['1'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 91. Constituci&oacute;n de 1978";
 preguntaids[26] = 91


//  Id pregunta: 116 A�o de creaci�n de pregunta: 2016
 questions[27]= "28)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[27]= new Array();
 choices[27][0] = "Al Consejo Europeo.";
 choices[27][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[27][2] = "A la Comisi&oacute;n Europea.";
 choices[27][3] = "Al Parlamento Europeo.";
 answers[27] = 2;
 units[27] = ['5'];
 blocks[27] = ['A1'];
 comments[27] = "Id Pregunta: 116. Uni&oacute;n Europea";
 preguntaids[27] = 116


//  Id pregunta: 79 A�o de creaci�n de pregunta: 2016
 questions[28]= "29)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[28]= new Array();
 choices[28][0] = "De las disposiciones favorables.";
 choices[28][1] = "De las disposiciones sancionadoras no favorables.";
 choices[28][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[28][3] = "Las respuestas b) y c) son correctas.";
 answers[28] = 3;
 units[28] = ['1'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 79. Constituci&oacute;n de 1978";
 preguntaids[28] = 79


//  Id pregunta: 95 A�o de creaci�n de pregunta: 2016
 questions[29]= "30)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[29]= new Array();
 choices[29][0] = "Cuatro.";
 choices[29][1] = "Una.";
 choices[29][2] = "Cinco.";
 choices[29][3] = "Nueve.";
 answers[29] = 0;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 95. Constituci&oacute;n de 1978";
 preguntaids[29] = 95


//  Id pregunta: 139 A�o de creaci�n de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[30]= new Array();
 choices[30][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[30][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[30][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[30][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[30] = 0;
 units[30] = ['5'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 139. Uni&oacute;n Europea";
 preguntaids[30] = 139


//  Id pregunta: 145 A�o de creaci�n de pregunta: 2016
 questions[31]= "32)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[31]= new Array();
 choices[31][0] = "Veinticinco.";
 choices[31][1] = "Veintiuno.";
 choices[31][2] = "Dieciocho.";
 choices[31][3] = "Diecinueve.";
 answers[31] = 0;
 units[31] = ['5'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 145. Uni&oacute;n Europea";
 preguntaids[31] = 145


//  Id pregunta: 123 A�o de creaci�n de pregunta: 2016
 questions[32]= "33)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[32]= new Array();
 choices[32][0] = "Cinco a&ntilde;os.";
 choices[32][1] = "Cuatro a&ntilde;os.";
 choices[32][2] = "Tres a&ntilde;os.";
 choices[32][3] = "Seis meses.";
 answers[32] = 2;
 units[32] = ['5'];
 blocks[32] = ['A1'];
 comments[32] = "Id Pregunta: 123. Uni&oacute;n Europea";
 preguntaids[32] = 123


//  Id pregunta: 144 A�o de creaci�n de pregunta: 2016
 questions[33]= "34)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[33]= new Array();
 choices[33][0] = "Tres a&ntilde;os.";
 choices[33][1] = "Cuatro a&ntilde;os.";
 choices[33][2] = "Cinco a&ntilde;os.";
 choices[33][3] = "Seis a&ntilde;os.";
 answers[33] = 0;
 units[33] = ['5'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 144. Uni&oacute;n Europea";
 preguntaids[33] = 144


//  Id pregunta: 111 A�o de creaci�n de pregunta: 2016
 questions[34]= "35)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[34]= new Array();
 choices[34][0] = "Tres a&ntilde;os.";
 choices[34][1] = "Dos a&ntilde;os y medio.";
 choices[34][2] = "Cinco a&ntilde;os.";
 choices[34][3] = "Seis a&ntilde;os.";
 answers[34] = 2;
 units[34] = ['5'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 111. Uni&oacute;n Europea";
 preguntaids[34] = 111


//  Id pregunta: 115 A�o de creaci�n de pregunta: 2016
 questions[35]= "36)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[35]= new Array();
 choices[35][0] = "Estrasburgo.";
 choices[35][1] = "Bruselas.";
 choices[35][2] = "Luxemburgo.";
 choices[35][3] = "Holanda.";
 answers[35] = 0;
 units[35] = ['5'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 115. Uni&oacute;n Europea";
 preguntaids[35] = 115


//  Id pregunta: 84 A�o de creaci�n de pregunta: 2016
 questions[36]= "37)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[36]= new Array();
 choices[36][0] = "El Presidente y su gabinete.";
 choices[36][1] = "El Presidente y sus Ministros.";
 choices[36][2] = "El Rey y el Presidente.";
 choices[36][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[36] = 3;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 84. Constituci&oacute;n de 1978";
 preguntaids[36] = 84


//  Id pregunta: 121 A�o de creaci�n de pregunta: 2016
 questions[37]= "38)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[37]= new Array();
 choices[37][0] = "La Comisi&oacute;n.";
 choices[37][1] = "El Consejo de Europa.";
 choices[37][2] = "El Consejo Europeo.";
 choices[37][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[37] = 3;
 units[37] = ['5'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 121. Uni&oacute;n Europea";
 preguntaids[37] = 121


//  Id pregunta: 108 A�o de creaci�n de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[38]= new Array();
 choices[38][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[38][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[38][2] = "Iniciativa europea de libre flujo de datos.";
 choices[38][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[38] = 2;
 units[38] = ['5'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 108. Uni&oacute;n Europea";
 preguntaids[38] = 108


//  Id pregunta: 106 A�o de creaci�n de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta falsa:";
 choices[39]= new Array();
 choices[39][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[39][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[39][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[39][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[39] = 2;
 units[39] = ['5'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 106. Uni&oacute;n Europea";
 preguntaids[39] = 106


//  Id pregunta: 96 A�o de creaci�n de pregunta: 2016
 questions[40]= "41)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[40]= new Array();
 choices[40][0] = "Diez art&iacute;culos.";
 choices[40][1] = "Nueve art&iacute;culos.";
 choices[40][2] = "Once art&iacute;culos.";
 choices[40][3] = "Ocho art&iacute;culos.";
 answers[40] = 0;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 96. Constituci&oacute;n de 1978";
 preguntaids[40] = 96


//  Id pregunta: 76 A�o de creaci�n de pregunta: 2016
 questions[41]= "42)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[41]= new Array();
 choices[41][0] = "61";
 choices[41][1] = "53";
 choices[41][2] = "65";
 choices[41][3] = "67";
 answers[41] = 2;
 units[41] = ['1'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 76. Constituci&oacute;n de 1978";
 preguntaids[41] = 76


//  Id pregunta: 130 A�o de creaci�n de pregunta: 2016
 questions[42]= "43)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[42]= new Array();
 choices[42][0] = "La Comisi&oacute;n Europea.";
 choices[42][1] = "El Consejo Europeo.";
 choices[42][2] = "El Consejo de Europa.";
 choices[42][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[42] = 0;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[42] = 130


//  Id pregunta: 99 A�o de creaci�n de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[43]= new Array();
 choices[43][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[43][1] = "Autorizar indultos generales.";
 choices[43][2] = "Sancionar las leyes.";
 choices[43][3] = "Promulgar las leyes.";
 answers[43] = 1;
 units[43] = ['2'];
 blocks[43] = ['A1'];
 comments[43] = "Id Pregunta: 99. AGE A2 2015";
 preguntaids[43] = 99


//  Id pregunta: 103 A�o de creaci�n de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la respuesta falsa:";
 choices[44]= new Array();
 choices[44][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[44][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[44][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[44][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[44] = 3;
 units[44] = ['5'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 103. Uni&oacute;n Europea";
 preguntaids[44] = 103


//  Id pregunta: 140 A�o de creaci�n de pregunta: 2016
 questions[45]= "46)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[45]= new Array();
 choices[45][0] = "Al Consejo Europeo.";
 choices[45][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[45][2] = "A la Comisi&oacute;n Europea.";
 choices[45][3] = "Al Parlamento Europeo.";
 answers[45] = 2;
 units[45] = ['5'];
 blocks[45] = ['A1'];
 comments[45] = "Id Pregunta: 140. Uni&oacute;n Europea";
 preguntaids[45] = 140


//  Id pregunta: 77 A�o de creaci�n de pregunta: 2016
 questions[46]= "47)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[46]= new Array();
 choices[46][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[46][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[46][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[46][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[46] = 3;
 units[46] = ['1'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 77. Constituci&oacute;n de 1978";
 preguntaids[46] = 77


//  Id pregunta: 112 A�o de creaci�n de pregunta: 2016
 questions[47]= "48)  El Parlamento Europeo celebrar&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[47][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[47][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[47][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[47] = 0;
 units[47] = ['5'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 112. Uni&oacute;n Europea";
 preguntaids[47] = 112


//  Id pregunta: 134 A�o de creaci�n de pregunta: 2016
 questions[48]= "49)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[48]= new Array();
 choices[48][0] = "Al Consejo Europeo.";
 choices[48][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[48][2] = "A la Comisi&oacute;n Europea.";
 choices[48][3] = "Al Parlamento Europeo.";
 answers[48] = 2;
 units[48] = ['5'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 134. Uni&oacute;n Europea";
 preguntaids[48] = 134


//  Id pregunta: 107 A�o de creaci�n de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[49]= new Array();
 choices[49][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[49][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[49][2] = "la falta de interoperabilidad.";
 choices[49][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[49] = 1;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 107. Uni&oacute;n Europea";
 preguntaids[49] = 107


//  Id pregunta: 92 A�o de creaci�n de pregunta: 2016
 questions[50]= "51)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[50]= new Array();
 choices[50][0] = "El Presidente del Senado";
 choices[50][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[50][2] = "El Presidente del Gobierno";
 choices[50][3] = "El Presidente de las Cortes Generales";
 answers[50] = 2;
 units[50] = ['1'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 92. Constituci&oacute;n de 1978";
 preguntaids[50] = 92


//  Id pregunta: 87 A�o de creaci�n de pregunta: 2016
 questions[51]= "52)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[51]= new Array();
 choices[51][0] = "117.5";
 choices[51][1] = "117.1";
 choices[51][2] = "116";
 choices[51][3] = "15";
 answers[51] = 0;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 87. Constituci&oacute;n de 1978";
 preguntaids[51] = 87


//  Id pregunta: 137 A�o de creaci�n de pregunta: 2016
 questions[52]= "53)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[52]= new Array();
 choices[52][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[52][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[52][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[52][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[52] = 3;
 units[52] = ['5'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 137. Uni&oacute;n Europea";
 preguntaids[52] = 137


//  Id pregunta: 93 A�o de creaci�n de pregunta: 2016
 questions[53]= "54)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[53]= new Array();
 choices[53][0] = "El Segundo.";
 choices[53][1] = "El Primero.";
 choices[53][2] = "El Preliminar.";
 choices[53][3] = "El Tercero.";
 answers[53] = 2;
 units[53] = ['1'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 93. Constituci&oacute;n de 1978";
 preguntaids[53] = 93


//  Id pregunta: 135 A�o de creaci�n de pregunta: 2016
 questions[54]= "55)  El Colegio de Comisarios se re&uacute;ne:";
 choices[54]= new Array();
 choices[54][0] = "Una vez por semana.";
 choices[54][1] = "Una vez al mes.";
 choices[54][2] = "Dos veces en semana.";
 choices[54][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[54] = 0;
 units[54] = ['5'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 135. Uni&oacute;n Europea";
 preguntaids[54] = 135


//  Id pregunta: 128 A�o de creaci�n de pregunta: 2016
 questions[55]= "56)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[55]= new Array();
 choices[55][0] = "Seis a&ntilde;os.";
 choices[55][1] = "Cinco a&ntilde;os.";
 choices[55][2] = "Cuatro a&ntilde;os.";
 choices[55][3] = "Ocho a&ntilde;os.";
 answers[55] = 1;
 units[55] = ['5'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 128. Uni&oacute;n Europea";
 preguntaids[55] = 128


//  Id pregunta: 129 A�o de creaci�n de pregunta: 2016
 questions[56]= "57)  El Tribunal de Justicia se cre&oacute; en:";
 choices[56]= new Array();
 choices[56][0] = "El Tratado de la CECA.";
 choices[56][1] = "El Tratado de Niza.";
 choices[56][2] = "El Tratado de &Aacute;msterdam.";
 choices[56][3] = "El Tratado de Lisboa.";
 answers[56] = 0;
 units[56] = ['5'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 129. Uni&oacute;n Europea";
 preguntaids[56] = 129


//  Id pregunta: 80 A�o de creaci�n de pregunta: 2016
 questions[57]= "58)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[57]= new Array();
 choices[57][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[57][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[57][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[57][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[57] = 3;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 80. Constituci&oacute;n de 1978";
 preguntaids[57] = 80


//  Id pregunta: 149 A�o de creaci�n de pregunta: 2016
 questions[58]= "59)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[58]= new Array();
 choices[58][0] = "Acuerdos cualificados.";
 choices[58][1] = "Acuerdos ponderados.";
 choices[58][2] = "Valoraci&oacute;n de los votos.";
 choices[58][3] = "Ponderaci&oacute;n de los votos.";
 answers[58] = 3;
 units[58] = ['5'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 149. Uni&oacute;n Europea";
 preguntaids[58] = 149


//  Id pregunta: 101 A�o de creaci�n de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la respuesta correcta:";
 choices[59]= new Array();
 choices[59][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[59][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[59][2] = "Las respuestas A y B son correctas.";
 choices[59][3] = "Las respuestas A y B son falsas.";
 answers[59] = 2;
 units[59] = ['5'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 101. Uni&oacute;n Europea";
 preguntaids[59] = 101


//  Id pregunta: 82 A�o de creaci�n de pregunta: 2016
 questions[60]= "61)  La soberan&iacute;a nacional reside en:";
 choices[60]= new Array();
 choices[60][0] = "el Parlamento nacional.";
 choices[60][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[60][2] = "el pueblo espa&ntilde;ol.";
 choices[60][3] = "el Congreso y el Senado.";
 answers[60] = 2;
 units[60] = ['1'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[60] = 82


//  Id pregunta: 131 A�o de creaci�n de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[61]= new Array();
 choices[61][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[61][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[61][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[61][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[61] = 2;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 131. Uni&oacute;n Europea";
 preguntaids[61] = 131


//  Id pregunta: 146 A�o de creaci�n de pregunta: 2016
 questions[62]= "63)  La Mesa del Parlamento europeo estar&aacute; compuesta por:";
 choices[62]= new Array();
 choices[62][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[62][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[62][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[62][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[62] = 3;
 units[62] = ['5'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 146. Uni&oacute;n Europea";
 preguntaids[62] = 146


//  Id pregunta: 120 A�o de creaci�n de pregunta: 2016
 questions[63]= "64)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[63]= new Array();
 choices[63][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[63][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[63][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[63][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[63] = 1;
 units[63] = ['5'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 120. Uni&oacute;n Europea";
 preguntaids[63] = 120


//  Id pregunta: 75 A�o de creaci�n de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[64]= new Array();
 choices[64][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[64][1] = "Por Orden Ministerial.";
 choices[64][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[64][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[64] = 0;
 units[64] = ['1'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 75. Constituci&oacute;n de 1978";
 preguntaids[64] = 75


//  Id pregunta: 94 A�o de creaci�n de pregunta: 2016
 questions[65]= "66)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[65]= new Array();
 choices[65][0] = "Los Derechos y Deberes fundamentales.";
 choices[65][1] = "La Corona.";
 choices[65][2] = "El Poder Judicial.";
 choices[65][3] = "Las Cortes Generales.";
 answers[65] = 0;
 units[65] = ['1'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 94. Constituci&oacute;n de 1978";
 preguntaids[65] = 94


//  Id pregunta: 141 A�o de creaci�n de pregunta: 2016
 questions[66]= "67)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[66]= new Array();
 choices[66][0] = "Cincuenta y cuatro.";
 choices[66][1] = "Cincuenta.";
 choices[66][2] = "Cincuenta y cinco.";
 choices[66][3] = "Cincuenta y dos.";
 answers[66] = 0;
 units[66] = ['5'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 141. Uni&oacute;n Europea";
 preguntaids[66] = 141


//  Id pregunta: 124 A�o de creaci�n de pregunta: 2016
 questions[67]= "68)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[67]= new Array();
 choices[67][0] = "Veinticinco.";
 choices[67][1] = "Veintisiete.";
 choices[67][2] = "Veintinueve.";
 choices[67][3] = "Cuarenta y uno.";
 answers[67] = 1;
 units[67] = ['5'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 124. Uni&oacute;n Europea";
 preguntaids[67] = 124


//  Id pregunta: 98 A�o de creaci�n de pregunta: 2016
 questions[68]= "69)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[68]= new Array();
 choices[68][0] = "Ley org&aacute;nica.";
 choices[68][1] = "Ley ordinaria.";
 choices[68][2] = "Ley de bases.";
 choices[68][3] = "Ley marco.";
 answers[68] = 2;
 units[68] = ['1'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 98. Constituci&oacute;n de 1978";
 preguntaids[68] = 98


//  Id pregunta: 104 A�o de creaci�n de pregunta: 2016
 questions[69]= "70)  Sobre el Plan Juncker:";
 choices[69]= new Array();
 choices[69][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[69][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[69][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[69][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[69] = 1;
 units[69] = ['5'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 104. Uni&oacute;n Europea";
 preguntaids[69] = 104


//  Id pregunta: 88 A�o de creaci�n de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[70]= new Array();
 choices[70][0] = "La Comisi&oacute;n Permanente.";
 choices[70][1] = "El Presidente.";
 choices[70][2] = "El Pleno.";
 choices[70][3] = "El Vicepresidente.";
 answers[70] = 1;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 88. Constituci&oacute;n de 1978";
 preguntaids[70] = 88


//  Id pregunta: 78 A�o de creaci�n de pregunta: 2016
 questions[71]= "72)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[71]= new Array();
 choices[71][0] = "Rey.";
 choices[71][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[71][2] = "Constituci&oacute;n.";
 choices[71][3] = "Pueblo.";
 answers[71] = 3;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 78. Constituci&oacute;n de 1978";
 preguntaids[71] = 78


//  Id pregunta: 119 A�o de creaci�n de pregunta: 2016
 questions[72]= "73)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[72]= new Array();
 choices[72][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[72][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[72][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[72][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[72] = 1;
 units[72] = ['5'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 119. Uni&oacute;n Europea";
 preguntaids[72] = 119


//  Id pregunta: 113 A�o de creaci�n de pregunta: 2016
 questions[73]= "74)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[73]= new Array();
 choices[73][0] = "Tres a&ntilde;os.";
 choices[73][1] = "Dos a&ntilde;os y medio.";
 choices[73][2] = "Cinco a&ntilde;os.";
 choices[73][3] = "Seis a&ntilde;os.";
 answers[73] = 3;
 units[73] = ['5'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 113. Uni&oacute;n Europea";
 preguntaids[73] = 113


//  Id pregunta: 126 A�o de creaci�n de pregunta: 2016
 questions[74]= "75)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[74]= new Array();
 choices[74][0] = "Estrasburgo.";
 choices[74][1] = "Bruselas.";
 choices[74][2] = "Luxemburgo.";
 choices[74][3] = "Par&iacute;s.";
 answers[74] = 1;
 units[74] = ['5'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 126. Uni&oacute;n Europea";
 preguntaids[74] = 126


