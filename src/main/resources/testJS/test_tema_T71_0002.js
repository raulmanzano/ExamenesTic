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
//  Id pregunta: 10476 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Qu&eacute; es un servicio WMTS?";
 choices[0]= new Array();
 choices[0][0] = "Un tipo de recubrimiento SOAP";
 choices[0][1] = "Un servicio de cat&aacute;logo cacheado";
 choices[0][2] = "Un servicio de visualizaci&oacute;n de mapas sin teselas, pero cacheado";
 choices[0][3] = "Un servicio de visualizaci&oacute;n de mapas teselado";
 answers[0] = 3;
 units[0] = ['71'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10476. ";
 preguntaids[0] = 10476


//  Id pregunta: 10473 Año de creación de pregunta: 2015
 questions[1]= "2)  Los servicios WMS de OGC se consideran servicios de:";
 choices[1]= new Array();
 choices[1][0] = "Localizaci&oacute;n";
 choices[1][1] = "Descarga";
 choices[1][2] = "Transformaci&oacute;n";
 choices[1][3] = "Visualizaci&oacute;n";
 answers[1] = 3;
 units[1] = ['71'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10473. ";
 preguntaids[1] = 10473


//  Id pregunta: 10478 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Situar una posici&oacute;n en el mapa empleando una referencia catastral es un ejemplo de?";
 choices[2]= new Array();
 choices[2][0] = "Georreferenciaci&oacute;n directa";
 choices[2][1] = "Sistema de Proyecci&oacute;n (SRS)";
 choices[2][2] = "Georreferenciaci&oacute;n discreta";
 choices[2][3] = "a y c son ciertas";
 answers[2] = 2;
 units[2] = ['71'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 10478. ";
 preguntaids[2] = 10478


//  Id pregunta: 10474 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de informaci&oacute;n geogr&aacute;fica NO corresponde a un servicio de visualizaci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "WFS";
 choices[3][1] = "WMS";
 choices[3][2] = "WMTS";
 choices[3][3] = "WCS";
 answers[3] = 0;
 units[3] = ['71'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10474. ";
 preguntaids[3] = 10474


//  Id pregunta: 10479 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Qu&eacute; se entiende por un SIG dual?";
 choices[4]= new Array();
 choices[4][0] = "El que  mantiene  la  informaci&oacute;n  gr&aacute;fica con una clave identificadora &uacute;nica que sirve  para  realizar  b&uacute;squedas  en  el  SGBD  que  contiene la informaci&oacute;n  alfanum&eacute;rica";
 choices[4][1] = "El que contiene  un  modelo  de  comportamiento  a  lo  largo  del tiempo  para  alg&uacute;n  aspecto  de  la  realidad.";
 choices[4][2] = "El que aplica una concepci&oacute;n orientada  al objeto, en la  que los elementos contengan informaci&oacute;n sobre  sus propiedades, comportamiento etc..";
 choices[4][3] = "El que contempla al mismo tiempo un modelo r&aacute;ster y uno vectorial";
 answers[4] = 0;
 units[4] = ['71'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10479. ";
 preguntaids[4] = 10479


//  Id pregunta: 10475 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;Qu&eacute; es un servicio WPS?";
 choices[5]= new Array();
 choices[5][0] = "Un servicio de descarga de datos vectoriales";
 choices[5][1] = "Un servicio de visualizaci&oacute;n de coberturas r&aacute;ster";
 choices[5][2] = "Un servicio de transformaci&oacute;n";
 choices[5][3] = "No es un tipo de servicio";
 answers[5] = 2;
 units[5] = ['71'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 10475. ";
 preguntaids[5] = 10475


//  Id pregunta: 10472 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes tipos de servicio NO corresponde a un est&aacute;ndar de OGC (Open Geospatial Consortium)?";
 choices[6]= new Array();
 choices[6][0] = "Web Map Service (WMS)";
 choices[6][1] = "Catalogue Service Web (CSW)";
 choices[6][2] = "Tile Map Service (TMS)";
 choices[6][3] = "Web Feature Service (WFS)";
 answers[6] = 2;
 units[6] = ['71'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10472. ";
 preguntaids[6] = 10472


//  Id pregunta: 10477 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Qu&eacute; se entiende por TileMatrixSet en el contexto de la informaci&oacute;n geogr&aacute;fica?";
 choices[7]= new Array();
 choices[7][0] = "Una matriz de puntos de control para registrar una im&aacute;gen r&aacute;ster respecto a otra";
 choices[7][1] = "Un conjunto de rasterizaciones y fragmentaciones de la capa a diferentes escalas predeterminadas para un sistema de referencia y &aacute;mbito concreto";
 choices[7][2] = "Un conjunto de datos de tipo r&aacute;ster en el que el atributo respresentado es la elevaci&oacute;n de los puntos situados en una malla regular";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = 1;
 units[7] = ['71'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 10477. ";
 preguntaids[7] = 10477


//  Id pregunta: 10480 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Para qu&eacute; sirve un servicio SOS del Open Geospatial Consortium (OGC)?";
 choices[8]= new Array();
 choices[8][0] = "Consulta de cat&aacute;logo de metadatos";
 choices[8][1] = "Localizaci&oacute;n de datos vectoriales";
 choices[8][2] = "Presentaci&oacute;n de coberturas r&aacute;ster";
 choices[8][3] = "Consulta de observaciones de sensores";
 answers[8] = 3;
 units[8] = ['71'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10480. ";
 preguntaids[8] = 10480


