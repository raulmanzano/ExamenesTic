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
//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[0]= "1)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[0]= new Array();
 choices[0][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[0][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[0][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[0][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[0] = 0;
 units[0] = ['15'];
 blocks[0] = ['A3'];
 comments[0] = "Id Pregunta: 416. Mercado laboral";
 preguntaids[0] = 416


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[1]= "2)  La ley de Okun se refiere a:";
 choices[1]= new Array();
 choices[1][0] = "La relaci&oacute;n emp&iacute;rica entre las variables tasa de desempleo y producci&oacute;n de un pa&iacute;s.";
 choices[1][1] = "La relaci&oacute;n inversa entre la inflaci&oacute;n y el desempleo de un pa&iacute;s.";
 choices[1][2] = "La relaci&oacute;n entre la tasa de desempleo y el n&uacute;mero de vacantes sin cubrir respecto del total de empleos.";
 choices[1][3] = "Las relaciones entre los insumos capital (K), trabajo (L) y tecnolog&iacute;a o productividad total de los factores (PTF)";
 answers[1] = 0;
 units[1] = ['15'];
 blocks[1] = ['A3'];
 comments[1] = "Id Pregunta: 425. Modelo econ&oacute;mico";
 preguntaids[1] = 425


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[2]= new Array();
 choices[2][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[2][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[2][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[2][3] = "El pago de subsidios a parados";
 answers[2] = 3;
 units[2] = ['15'];
 blocks[2] = ['A3'];
 comments[2] = "Id Pregunta: 421. Mercado laboral";
 preguntaids[2] = 421


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[3]= "4)  La Poblaci&oacute;n Activa incluye a:";
 choices[3]= new Array();
 choices[3][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[3][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[3][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[3][3] = "Todo aquel que desea trabajar";
 answers[3] = 2;
 units[3] = ['15'];
 blocks[3] = ['A3'];
 comments[3] = "Id Pregunta: 415. Mercado laboral";
 preguntaids[3] = 415


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[4]= new Array();
 choices[4][0] = "La Seguridad Social";
 choices[4][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[4][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[4][3] = "El Banco de Espa&ntilde;a";
 answers[4] = 3;
 units[4] = ['15'];
 blocks[4] = ['A3'];
 comments[4] = "Id Pregunta: 418. Mercado laboral";
 preguntaids[4] = 418


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[5]= new Array();
 choices[5][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[5][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[5][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[5][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[5] = 0;
 units[5] = ['15'];
 blocks[5] = ['A3'];
 comments[5] = "Id Pregunta: 422. Mercado laboral";
 preguntaids[5] = 422


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[6]= new Array();
 choices[6][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[6][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[6][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[6][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[6] = 0;
 units[6] = ['15'];
 blocks[6] = ['A3'];
 comments[6] = "Id Pregunta: 419. Mercado laboral";
 preguntaids[6] = 419


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[7]= new Array();
 choices[7][0] = "Anual";
 choices[7][1] = "Mensual";
 choices[7][2] = "Semestral";
 choices[7][3] = "Trimestral";
 answers[7] = 3;
 units[7] = ['15'];
 blocks[7] = ['A3'];
 comments[7] = "Id Pregunta: 424. Mercado laboral";
 preguntaids[7] = 424


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es uno de los Ejes en torno a los cuales se articula La Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo seg&uacute;n el Real Decreto Legislativo 3/2015?";
 choices[8]= new Array();
 choices[8][0] = "Orientaci&oacute;n";
 choices[8][1] = "Empleo p&uacute;blico";
 choices[8][2] = "Formaci&oacute;n";
 choices[8][3] = "Emprendimiento";
 answers[8] = 1;
 units[8] = ['15'];
 blocks[8] = ['A3'];
 comments[8] = "Id Pregunta: 428. Modelo econ&oacute;mico";
 preguntaids[8] = 428


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[9]= "10)  Con respecto a la EPA(Encuesta P&uacute;blica de Empleo) es falso que:";
 choices[9]= new Array();
 choices[9][0] = "La Epa cubre el espacio nacional";
 choices[9][1] = "El periodo de referencia de los resultados de la encuesta es cuatrimestral";
 choices[9][2] = "El INE utiliza la EPA para elaborar sus estad&iacute;sticas relativas al mercado laboral";
 choices[9][3] = "La encuesta va dirigida a poblaci&oacute;n que reside en viviendas familiares, excluy&eacute;ndose hospitales, hoteles, etc&hellip;";
 answers[9] = 1;
 units[9] = ['15'];
 blocks[9] = ['A3'];
 comments[9] = "Id Pregunta: 426. Modelo econ&oacute;mico";
 preguntaids[9] = 426


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[10]= new Array();
 choices[10][0] = "El Tratado de Lisboa";
 choices[10][1] = "El Tratado de Amsterdam";
 choices[10][2] = "El Tratado de Niza";
 choices[10][3] = "El Acta &Uacute;nica Europea";
 answers[10] = 1;
 units[10] = ['15'];
 blocks[10] = ['A3'];
 comments[10] = "Id Pregunta: 420. Mercado laboral";
 preguntaids[10] = 420


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[11]= "12)  No es competencia del Servicio P&uacute;blico de Empleo Estatal";
 choices[11]= new Array();
 choices[11][0] = "Elaborar y elevar al Ministerio de Empleo y Seguridad Social las propuestas normativas de &aacute;mbito estatal en materia de empleo que procedan.";
 choices[11][1] = "Elaborar el proyecto de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo y de los Planes Anuales de Pol&iacute;tica de Empleo en colaboraci&oacute;n con las comunidades aut&oacute;nomas.";
 choices[11][2] = "Gestionar el Observatorio de las Relaciones Laborales del Servicio P&uacute;blico de Empleo Estatal";
 choices[11][3] = "Coordinar las actuaciones conjuntas de los servicios p&uacute;blicos de empleo en el desarrollo del Sistema de Informaci&oacute;n de los Servicios P&uacute;blicos de Empleo.";
 answers[11] = 2;
 units[11] = ['15'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 429. Modelo econ&oacute;mico";
 preguntaids[11] = 429


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el Real Decreto Legislativo 3/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley de Empleo, son instrumentos de coordinaci&oacute;n del Sistema Nacional de Empleo los siguientes. Se&ntilde;ale la falsa:";
 choices[12]= new Array();
 choices[12][0] = "La Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo";
 choices[12][1] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 choices[12][2] = "Los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[12][3] = "El Sistema de Informaci&oacute;n de los Servicios P&uacute;blicos de Empleo";
 answers[12] = 1;
 units[12] = ['15'];
 blocks[12] = ['A3'];
 comments[12] = "Id Pregunta: 427. Modelo econ&oacute;mico";
 preguntaids[12] = 427


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[13]= new Array();
 choices[13][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[13][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[13][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[13][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[13] = 2;
 units[13] = ['15'];
 blocks[13] = ['A3'];
 comments[13] = "Id Pregunta: 423. Mercado laboral";
 preguntaids[13] = 423


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano de seguimiento y control de los fondos de empleo de &aacute;mbito nacional?";
 choices[14]= new Array();
 choices[14][0] = "El Servicio P&uacute;blico de Empleo Estatal";
 choices[14][1] = "La Inspecci&oacute;n de Trabajo y Seguridad Social";
 choices[14][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[14][3] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 answers[14] = 3;
 units[14] = ['15'];
 blocks[14] = ['A3'];
 comments[14] = "Id Pregunta: 430. Modelo econ&oacute;mico";
 preguntaids[14] = 430


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[15]= new Array();
 choices[15][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[15][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[15][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[15][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[15] = 1;
 units[15] = ['15'];
 blocks[15] = ['A3'];
 comments[15] = "Id Pregunta: 417. Mercado laboral";
 preguntaids[15] = 417


