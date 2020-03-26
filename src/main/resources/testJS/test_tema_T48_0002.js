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
//  Id pregunta: 9633 Año de creación de pregunta: 2014
 questions[0]= "1)  Entre los documentos generados por ISO, aquellos que recogen informaci&oacute;n que no aparece en los Est&aacute;ndares Internacionales reciben el nombre de&hellip;";
 choices[0]= new Array();
 choices[0][0] = "Technical Especifications";
 choices[0][1] = "Technical Reports";
 choices[0][2] = "Technical Corrigendum";
 choices[0][3] = "Gu&iacute;as ISO";
 answers[0] = 1;
 units[0] = ['48'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 9633. http://www.iso.org/iso/home/standards_development/deliverables-all.htm?type=tr";
 preguntaids[0] = 9633


//  Id pregunta: 7453 Año de creación de pregunta: 2010
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes organizaciones espa&ntilde;olas no es miembro de ETSI?";
 choices[1]= new Array();
 choices[1][0] = "AENOR";
 choices[1][1] = "TELEFONICA S.A.";
 choices[1][2] = "UNIVERSIDAD AUT&Oacute;NOMA DE MADRID";
 choices[1][3] = "Ministerio de Energia, Turismo y Agenda Digital.";
 answers[1] = 0;
 units[1] = ['48'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 7453. http://portal.etsi.org/Portal_IntegrateAppli/QueryResult.asp?Alone=1&amp;SortBy=&amp;SortDirection=&amp;Param=#";
 preguntaids[1] = 7453


//  Id pregunta: 7801 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[2]= new Array();
 choices[2][0] = "Miembros Plenos.";
 choices[2][1] = "Miembros Coordinadores.";
 choices[2][2] = "Miembros Asociados.";
 choices[2][3] = "Miembros Consejeros.";
 answers[2] = 1;
 units[2] = ['48'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 7801. ";
 preguntaids[2] = 7801


//  Id pregunta: 10693 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Cu&aacute;les de los siguientes NO es un documento emitido por el European Telecomunication Standard Institute (ETSI)?";
 choices[3]= new Array();
 choices[3][0] = "ENV, normas experimentales";
 choices[3][1] = "ES, Normas ETSI";
 choices[3][2] = "IT, Industrial Agreement";
 choices[3][3] = "HS, Normas armonizadas";
 answers[3] = 2;
 units[3] = ['48'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 10693. ";
 preguntaids[3] = 10693


//  Id pregunta: 8350 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[4]= new Array();
 choices[4][0] = "IEEE";
 choices[4][1] = "ISO";
 choices[4][2] = "IEC";
 choices[4][3] = "ANSI";
 answers[4] = 3;
 units[4] = ['48'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 8350. Examen UC3M 2010";
 preguntaids[4] = 8350


//  Id pregunta: 7452 Año de creación de pregunta: 2010
 questions[5]= "6)  Las RFC (Request for Comments) son publicadas por";
 choices[5]= new Array();
 choices[5][0] = "W3C";
 choices[5][1] = "IEEE";
 choices[5][2] = "IETF";
 choices[5][3] = "IEC";
 answers[5] = 2;
 units[5] = ['48'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 7452. ";
 preguntaids[5] = 7452


//  Id pregunta: 10321 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "CEN";
 choices[6][1] = "UNE";
 choices[6][2] = "CENELEC";
 choices[6][3] = "ETSI";
 answers[6] = 1;
 units[6] = ['48'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 10321. ";
 preguntaids[6] = 10321


//  Id pregunta: 8737 Año de creación de pregunta: 2013
 questions[7]= "8)  &iquest;A qu&eacute; norma ISO corresponde el est&aacute;ndar del ITU X.200?";
 choices[7]= new Array();
 choices[7][0] = "ISO 9945";
 choices[7][1] = "ISO 7498";
 choices[7][2] = "ISO 9126";
 choices[7][3] = "ISO 15408";
 answers[7] = 1;
 units[7] = ['48'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 8737. ";
 preguntaids[7] = 8737


//  Id pregunta: 10222 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes se corresponde con el Comit&eacute; T&eacute;cnico en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n dentro de ISO?";
 choices[8]= new Array();
 choices[8][0] = "ISO/TC 1";
 choices[8][1] = "ISO/TC 2";
 choices[8][2] = "ISO/IEC JTC 1";
 choices[8][3] = "ISO/IEC JPC 2";
 answers[8] = 2;
 units[8] = ['48'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 10222. ";
 preguntaids[8] = 10222


//  Id pregunta: 7451 Año de creación de pregunta: 2010
 questions[9]= "10)  La International Telecommunication Union (ITU)  es el organismo especializado de la Organizaci&oacute;n de las Naciones Unidas encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Se divide en varios sectores, el correspondiente a Telecomunicaciones se denomina:";
 choices[9]= new Array();
 choices[9][0] = "ITU-T";
 choices[9][1] = "ITU-R";
 choices[9][2] = "ITU-D";
 choices[9][3] = "ITU-C";
 answers[9] = 0;
 units[9] = ['48'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 7451. ";
 preguntaids[9] = 7451


//  Id pregunta: 10780 Año de creación de pregunta: 2015
 questions[10]= "11)  Las RFCs son publicadas por:";
 choices[10]= new Array();
 choices[10][0] = "ITU";
 choices[10][1] = "W3C";
 choices[10][2] = "IAB";
 choices[10][3] = "IETF";
 answers[10] = 3;
 units[10] = ['48'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 10780. ";
 preguntaids[10] = 10780


//  Id pregunta: 10694 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes NO es un Comit&eacute; creado en el seno de la International Standards Organization (ISO)?";
 choices[11]= new Array();
 choices[11][0] = "DEVCO, Comit&eacute; de Desarrollo";
 choices[11][1] = "COPOLCO, Comit&eacute; de pol&iacute;ticas en materia de consumo";
 choices[11][2] = "QUALCO, Comit&eacute; de calidad";
 choices[11][3] = "CASCO, Comit&eacute; de evaluaci&oacute;n de la conformidad";
 answers[11] = 2;
 units[11] = ['48'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 10694. ";
 preguntaids[11] = 10694


//  Id pregunta: 10221 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Es AENOR un miembro de ISO?";
 choices[12]= new Array();
 choices[12][0] = "No";
 choices[12][1] = "S&iacute;, es miembro nato";
 choices[12][2] = "Si, es miembro suscrito";
 choices[12][3] = "No, pero tiene previsto incorporarse en 2017";
 answers[12] = 1;
 units[12] = ['48'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 10221. ";
 preguntaids[12] = 10221


//  Id pregunta: 7579 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Qu&eacute; tipo de documento NO es publicado por el Instituto Europeo de Normas de Telecomunicaciones (ETSI)?";
 choices[13]= new Array();
 choices[13][0] = "Gu&iacute;a ETSI.";
 choices[13][1] = "Norma ETSI.";
 choices[13][2] = "Recomendaci&oacute;n ETSI.";
 choices[13][3] = "Especificaci&oacute;n t&eacute;cnica ETSI.";
 answers[13] = 2;
 units[13] = ['48'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 7579. Map 2006";
 preguntaids[13] = 7579


//  Id pregunta: 9806 Año de creación de pregunta: 2015
 questions[14]= "15)  La ISO publica:";
 choices[14]= new Array();
 choices[14][0] = "Informes T&eacute;cnicos y Gu&iacute;as ISO.";
 choices[14][1] = "Especificaciones Internacionales y Memor&aacute;ndum de errores.";
 choices[14][2] = "A y B son correctas.";
 choices[14][3] = "La ISO no publica ning&uacute;n documento, s&oacute;lo certifica est&aacute;ndares de otras organizaciones.";
 answers[14] = 0;
 units[14] = ['48'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 9806. S&iacute; publica Technical Reports e ISO Guides. Pero no publica Especificaciones Internacionales sino Technical Specifications o Publicly Available Specifications. Tampoco publica Memor&aacute;ndums de Errores sino Correcciones T&eacute;cnicas (Technical Corrigendum).";
 preguntaids[14] = 9806


//  Id pregunta: 7447 Año de creación de pregunta: 2010
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n VERDADERA con respecto a AENOR:";
 choices[15]= new Array();
 choices[15][0] = "Es una Entidad P&uacute;blica Empresarial";
 choices[15][1] = "No tiene &aacute;nimo de lucro";
 choices[15][2] = "Depende org&aacute;nicamente de la Secretar&iacute;a de Estado de Telecomunicaciones y para la sociedad de la Informaci&oacute;n";
 choices[15][3] = "Est&aacute; reconocida como organismo de normalizaci&oacute;n y para actuar como entidad de certificaci&oacute;n por el Real Decreto 200/1995";
 answers[15] = 1;
 units[15] = ['48'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 7447. www.aenor.es";
 preguntaids[15] = 7447


//  Id pregunta: 7955 Año de creación de pregunta: 2011
 questions[16]= "17)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet?";
 choices[16]= new Array();
 choices[16][0] = "IETF.";
 choices[16][1] = "ICANN.";
 choices[16][2] = "IAB.";
 choices[16][3] = "IRTF.";
 answers[16] = 2;
 units[16] = ['48', '103'];
 blocks[16] = ['B1', 'B4'];
 comments[16] = "Id Pregunta: 7955. Examen TIC A2 2010";
 preguntaids[16] = 7955


//  Id pregunta: 10223 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Cu&aacute;l es la Asociaci&oacute;n Europea de Fabricantes de Ordenadores?";
 choices[17]= new Array();
 choices[17][0] = "ETSI";
 choices[17][1] = "CECUA";
 choices[17][2] = "ECMA";
 choices[17][3] = "ECTA";
 answers[17] = 2;
 units[17] = ['48'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 10223. European Computer Manufacturing Association";
 preguntaids[17] = 10223


//  Id pregunta: 8736 Año de creación de pregunta: 2013
 questions[18]= "19)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[18]= new Array();
 choices[18][0] = "El RD 2200/1995.";
 choices[18][1] = "El RD 757/1986.";
 choices[18][2] = "La Ley 5/1985.";
 choices[18][3] = "Ninguna, pues no es un organismo p&uacute;blico.";
 answers[18] = 3;
 units[18] = ['48'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 8736. ";
 preguntaids[18] = 8736


//  Id pregunta: 7454 Año de creación de pregunta: 2010
 questions[19]= "20)  Es un organismo europeo de normalizaci&oacute;n, de acuerdo a la Directiva 98/34/CE";
 choices[19]= new Array();
 choices[19][0] = "CEN";
 choices[19][1] = "ICANN";
 choices[19][2] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 choices[19][3] = "GNU";
 answers[19] = 0;
 units[19] = ['48'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 7454. ";
 preguntaids[19] = 7454


//  Id pregunta: 7450 Año de creación de pregunta: 2010
 questions[20]= "21)  El WSC (World Standards Cooperation) est&aacute; formado por";
 choices[20]= new Array();
 choices[20][0] = "ISO/IEC/W3C";
 choices[20][1] = "ISO/CEN";
 choices[20][2] = "CEN/CENELEC/ETSI";
 choices[20][3] = "ISO/IEC/ITU-T";
 answers[20] = 3;
 units[20] = ['48'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 7450. http://www.worldstandardscooperation.org/about/";
 preguntaids[20] = 7450


//  Id pregunta: 9634 Año de creación de pregunta: 2014
 questions[21]= "22)  En relaci&oacute;n con IEC (International Electrotechnical Commission), se&ntilde;ale la respuesta incorrecta:";
 choices[21]= new Array();
 choices[21][0] = "El equivalente europeo es CENELEC (Comit&eacute; Europeo de Normalizaci&oacute;n Electrot&eacute;cnica)";
 choices[21][1] = "La representaci&oacute;n espa&ntilde;ola como miembro de pleno derecho recae en AENOR";
 choices[21][2] = "Elabora normas a nivel t&eacute;cnico en materia el&eacute;ctrica y electrot&eacute;cnica";
 choices[21][3] = "Las normas elaboradas por el CENELEC se denominan CEN";
 answers[21] = 3;
 units[21] = ['48'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 9634. Las normas elaboradas por el CENELEC se denominan EN (Norma Europea)";
 preguntaids[21] = 9634


//  Id pregunta: 10142 Año de creación de pregunta: 2015
 questions[22]= "23)  La Entidad AENOR:";
 choices[22]= new Array();
 choices[22][0] = "Es una entidad p&uacute;blica que elabora normas t&eacute;cnicas espa&ntilde;olas, impulsando la aportaci&oacute;n nacional en la elaboraci&oacute;n de normas europeas e internacionales.";
 choices[22][1] = "Desarrolla actividades de normalizaci&oacute;n y certificaci&oacute;n (N+C) exclusivamente en el &aacute;mbito del sector p&uacute;blico.";
 choices[22][2] = "Es una entidad espa&ntilde;ola, privada, independiente, sin &aacute;nimo de lucro, que certifica productos, servicios y empresas (sistemas).";
 choices[22][3] = "Es la entidad p&uacute;blica internacional responsable de la elaboraci&oacute;n de los est&aacute;ndares ISO/IEC.";
 answers[22] = 2;
 units[22] = ['48'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 10142. Examen TIC A1 2014";
 preguntaids[22] = 10142


//  Id pregunta: 7787 Año de creación de pregunta: 2010
 questions[23]= "24)  El JTC es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[23]= new Array();
 choices[23][0] = "CEN y CENELEC.";
 choices[23][1] = "ISO e IEC.";
 choices[23][2] = "CEN y ETSI.";
 choices[23][3] = "ISO y CIE.";
 answers[23] = 1;
 units[23] = ['48'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 7787. ";
 preguntaids[23] = 7787


//  Id pregunta: 9631 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[24]= new Array();
 choices[24][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 choices[24][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[24][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[24][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital y AENOR";
 answers[24] = 1;
 units[24] = ['48'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 9631. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo.";
 preguntaids[24] = 9631


//  Id pregunta: 9336 Año de creación de pregunta: 2014
 questions[25]= "26)  Los RFC de la IETF son";
 choices[25]= new Array();
 choices[25][0] = "peticiones de cambio (Request for Change) que proponen mejoras sobre protocolos en funcionamiento en Internet.";
 choices[25][1] = "notas t&eacute;cnicas que describen los protocolos utilizados en Internet.";
 choices[25][2] = "peticiones de comentarios a la comunidad de internautas sobre temas relacionados con Internet.";
 choices[25][3] = "las especificaciones formales de los protocolos para comunicaci&oacute;n remota (Remote Function Call).";
 answers[25] = 1;
 units[25] = ['48'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 9336. ";
 preguntaids[25] = 9336


//  Id pregunta: 7448 Año de creación de pregunta: 2010
 questions[26]= "27)  &iquest;Qu&eacute; tipos de miembro tiene AENOR?";
 choices[26]= new Array();
 choices[26][0] = "Natos, Corporativos, Adheridos y de Honor";
 choices[26][1] = "Adheridos, de Pleno Derecho y Suscritos";
 choices[26][2] = "Correspondientes, Individuales, Corporativos y de Honor";
 choices[26][3] = "Corporativos, Adheridos, Individuales y de Honor";
 answers[26] = 3;
 units[26] = ['48'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 7448. www.aenor.es";
 preguntaids[26] = 7448


//  Id pregunta: 9649 Año de creación de pregunta: 2014
 questions[27]= "28)  Indique cu&aacute;l de los siguientes es un organismo europeo de normalizaci&oacute;n.";
 choices[27]= new Array();
 choices[27][0] = "CENELEC";
 choices[27][1] = "IEC";
 choices[27][2] = "ISO";
 choices[27][3] = "IEEE";
 answers[27] = 0;
 units[27] = ['48'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 9649. Examen TIC A1 2013";
 preguntaids[27] = 9649


//  Id pregunta: 9632 Año de creación de pregunta: 2014
 questions[28]= "29)  Dentro de las recomendaciones de la UIT-T (Uni&oacute;n Internacional de Telecomunicaciones), se&ntilde;ale la correspondencia incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "Serie V: Comunicaci&oacute;n de datos por la red telef&oacute;nica";
 choices[28][1] = "Serie X: Redes de datos, comunicaciones de sistemas abiertos y seguridad";
 choices[28][2] = "Serie E: Sistemas y medios de transmisi&oacute;n, sistemas y redes digitales";
 choices[28][3] = "Serie I: Red digital de servicios integrados";
 answers[28] = 2;
 units[28] = ['48'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 9632. Serie E: Explotaci&oacute;n general de la red, servicio telef&oacute;nico, explotaci&oacute;n del servicio y factores humanos";
 preguntaids[28] = 9632


//  Id pregunta: 7710 Año de creación de pregunta: 2010
 questions[29]= "30)  Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[29]= new Array();
 choices[29][0] = "Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[29][1] = "Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos.";
 choices[29][2] = "Serie D &ndash; orientadas a la transmisi&oacute;n de documentos.";
 choices[29][3] = "Serie I &ndash; red digital de servicios integrados.";
 answers[29] = 3;
 units[29] = ['48'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 7710. Map 2007";
 preguntaids[29] = 7710


//  Id pregunta: 7596 Año de creación de pregunta: 2010
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar las especificaciones de est&aacute;ndares en Internet?";
 choices[30]= new Array();
 choices[30][0] = "IESG (Internet Engineering Steering Group).";
 choices[30][1] = "IETF (Internet Engineering Task Force).";
 choices[30][2] = "IAB (Internet Architecture Board).";
 choices[30][3] = "IANA (Internet Assigned Number Authority).";
 answers[30] = 1;
 units[30] = ['48'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 7596. Map 2006";
 preguntaids[30] = 7596


//  Id pregunta: 7449 Año de creación de pregunta: 2010
 questions[31]= "32)  Entre los documentos publicados por ISO NO se encuentra:";
 choices[31]= new Array();
 choices[31][0] = "Est&aacute;ndares Internacionales";
 choices[31][1] = "Informes T&eacute;cnicos";
 choices[31][2] = "Recomendaciones";
 choices[31][3] = "Gu&iacute;as ISO";
 answers[31] = 2;
 units[31] = ['48'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 7449. ";
 preguntaids[31] = 7449


