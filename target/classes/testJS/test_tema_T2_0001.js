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
//  Id pregunta: 8434 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[0]= new Array();
 choices[0][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[0][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[0][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[0][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[0] = 2;
 units[0] = ['2'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 8434. ";
 preguntaids[0] = 8434


//  Id pregunta: 8429 Año de creación de pregunta: 2011
 questions[1]= "2)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Los est&aacute;ndares abiertos";
 choices[1][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[1][2] = "Los dos anteriores";
 choices[1][3] = "Los dos primeros y los que determine la autoridad compentente mediante disposici&oacute;n publicada en la sede judicial";
 answers[1] = 2;
 units[1] = ['2'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 8429. ";
 preguntaids[1] = 8429


//  Id pregunta: 8427 Año de creación de pregunta: 2011
 questions[2]= "3)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[2]= new Array();
 choices[2][0] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[2][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[2][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[2][3] = "Todos los anteriores lo son";
 answers[2] = 3;
 units[2] = ['2'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 8427. ";
 preguntaids[2] = 8427


//  Id pregunta: 8428 Año de creación de pregunta: 2011
 questions[3]= "4)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[3]= new Array();
 choices[3][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[3][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[3][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[3][3] = "En uno de los dos";
 answers[3] = 3;
 units[3] = ['2'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 8428. ";
 preguntaids[3] = 8428


//  Id pregunta: 1419 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;De qu&eacute; trata el T&iacute;tulo VI de la Constituci&oacute;n Espa&ntilde;ola de 1978?:";
 choices[4]= new Array();
 choices[4][0] = "Del Gobierno y la Administraci&oacute;n.";
 choices[4][1] = "Del Poder Judicial.";
 choices[4][2] = "Econom&iacute;a y Hacienda.";
 choices[4][3] = "De las Relaciones del Gobierno y las Cortes Generales.";
 answers[4] = 1;
 units[4] = ['2'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 1419. ";
 preguntaids[4] = 1419


//  Id pregunta: 8430 Año de creación de pregunta: 2011
 questions[5]= "6)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[5]= new Array();
 choices[5][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[5][1] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[5][2] = "La Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[5][3] = "Debe disponer de todas las anteriores";
 answers[5] = 0;
 units[5] = ['2'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 8430. ";
 preguntaids[5] = 8430


//  Id pregunta: 8435 Año de creación de pregunta: 2011
 questions[6]= "7)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[6]= new Array();
 choices[6][0] = "Una representaci&oacute;n del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[6][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[6][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[6][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[6] = 0;
 units[6] = ['2'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 8435. ";
 preguntaids[6] = 8435


//  Id pregunta: 8433 Año de creación de pregunta: 2011
 questions[7]= "8)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[7]= new Array();
 choices[7][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[7][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[7][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[7][3] = "Ninguno de los anteriores";
 answers[7] = 2;
 units[7] = ['2'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 8433. ";
 preguntaids[7] = 8433


//  Id pregunta: 8431 Año de creación de pregunta: 2011
 questions[8]= "9)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[8]= new Array();
 choices[8][0] = "Carta de servicios electr&oacute;nicos";
 choices[8][1] = "Carta de servicios";
 choices[8][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[8][3] = "Debe disponer de todos los anteriores";
 answers[8] = 3;
 units[8] = ['2'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 8431. ";
 preguntaids[8] = 8431


//  Id pregunta: 8426 Año de creación de pregunta: 2011
 questions[9]= "10)  Seg&uacute;n la ley 18/2011, las Administraciones competentes en materia de justicia asegurar&aacute;n el acceso de todos los ciudadanos a los servicios electr&oacute;nicos proporcionados en su &aacute;mbito a trav&eacute;s de un sistema de varios canales que cuente, al menos, con ciertos medios. Se&ntilde;ale cual no es uno de ellos.";
 choices[9]= new Array();
 choices[9][0] = "Servicios de atenci&oacute;n telef&oacute;nica";
 choices[9][1] = "Las principales p&aacute;ginas web de la Administraci&oacute;n de Justicia";
 choices[9][2] = "Puntos de informaci&oacute;n electr&oacute;nicos, ubicados en los edificios judiciales";
 choices[9][3] = "Las oficinas de informaci&oacute;n y atenci&oacute;n al p&uacute;blico";
 answers[9] = 1;
 units[9] = ['2'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 8426. ";
 preguntaids[9] = 8426


//  Id pregunta: 8436 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n de la seguridad judicial electr&oacute;nica de acuerdo a la ley 18/2011?";
 choices[10]= new Array();
 choices[10][0] = "Conservaci&oacute;n";
 choices[10][1] = "Confidencialidad";
 choices[10][2] = "Trazabilidad";
 choices[10][3] = "Todas las anteriores lo son";
 answers[10] = 3;
 units[10] = ['2'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 8436. ";
 preguntaids[10] = 8436


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[11]= new Array();
 choices[11][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[11][1] = "Autorizar indultos generales.";
 choices[11][2] = "Sancionar las leyes.";
 choices[11][3] = "Promulgar las leyes.";
 answers[11] = 1;
 units[11] = ['2'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 99. AGE A2 2015";
 preguntaids[11] = 99


//  Id pregunta: 8432 Año de creación de pregunta: 2011
 questions[12]= "13)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[12]= new Array();
 choices[12][0] = "El &oacute;rgano titular de la sede";
 choices[12][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[12][2] = "El &oacute;rgano que origine la informaci&oacute;n que se deba incluir en la sede judicial electr&oacute;nica";
 choices[12][3] = "Ninguno de los anteriores";
 answers[12] = 2;
 units[12] = ['2'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 8432. ";
 preguntaids[12] = 8432


