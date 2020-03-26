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
//  Id pregunta: 2233 Año de creación de pregunta: 2002
 questions[0]= "1)  La LOPD permite a los interesados a los que se soliciten datos personales:";
 choices[0]= new Array();
 choices[0][0] = "Solo consultar sus datos";
 choices[0][1] = "Ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[0][2] = "Ejercitar s&oacute;lo los derechos de rectificaci&oacute;n";
 choices[0][3] = "Ejercitar s&oacute;lo los derechos de cancelaci&oacute;n";
 answers[0] = 1;
 units[0] = ['35'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 2233. ";
 preguntaids[0] = 2233


//  Id pregunta: 2205 Año de creación de pregunta: 2002
 questions[1]= "2)  Indique cu&aacute;l de los siguientes datos sensibles no est&aacute; especialmente protegido por la LOPD 15/99:";
 choices[1]= new Array();
 choices[1][0] = "De salud";
 choices[1][1] = "Administrativos";
 choices[1][2] = "De religi&oacute;n";
 choices[1][3] = "De origen racial";
 answers[1] = 1;
 units[1] = ['35'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2205. ";
 preguntaids[1] = 2205


//  Id pregunta: 2402 Año de creación de pregunta: 2006
 questions[2]= "3)  &iquest;Se pueden tratar datos de fuentes accesibles al p&uacute;blico?";
 choices[2]= new Array();
 choices[2][0] = "Si, ya que as&iacute; lo establece la LOPD";
 choices[2][1] = "No, no est&aacute; permitido por la LOPD";
 choices[2][2] = "Si, cuando se publique el reglamento que lo desarrolle";
 choices[2][3] = "No, ya que no es una fuente de recogida de datos";
 answers[2] = 0;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2402. ";
 preguntaids[2] = 2402


//  Id pregunta: 2230 Año de creación de pregunta: 2002
 questions[3]= "4)  La Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal incluye como posibles sujetos del r&eacute;gimen sancionador:";
 choices[3]= new Array();
 choices[3][0] = "S&oacute;lo al responsable del fichero";
 choices[3][1] = "S&oacute;lo al encargado del tratamiento";
 choices[3][2] = "Al responsable del fichero y al encargado del tratamiento";
 choices[3][3] = "La Ley 15/99 no regula el r&eacute;gimen sancionador";
 answers[3] = 2;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2230. ";
 preguntaids[3] = 2230


//  Id pregunta: 2280 Año de creación de pregunta: 2002
 questions[4]= "5)  Respecto al movimiento internacional de datos, la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal establece:";
 choices[4]= new Array();
 choices[4][0] = "No podr&aacute;n realizarse transferencias de datos personales a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD, salvo que lo autorice el Director de la AEPD";
 choices[4][1] = "Dicha transferencia podr&aacute; realizarse si el destino es un Estado miembro de la Uni&oacute;n Europea con autorizaci&oacute;n del Director de la AEPD";
 choices[4][2] = "S&oacute;lo podr&aacute; realizarse si el destino es un Estado, respecto del cual la Comisi&oacute;n Europea haya declarado que garantiza un nivel de protecci&oacute;n adecuado";
 choices[4][3] = "S&oacute;lo podr&aacute;n realizarse transferencias de datos cuando el Director de la Agencia de Protecci&oacute;n de Datos lo autorice";
 answers[4] = 0;
 units[4] = ['35'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2280. T&iacute;tulo V LO 15/1999  b) falsa, no hace falta autorizaci&oacute;n del Director; c) falsa: no s&oacute;loexiste esa excepci&oacute;n, ver art.34; d) falso; ver excepciones art 34.";
 preguntaids[4] = 2280


//  Id pregunta: 2297 Año de creación de pregunta: 2002
 questions[5]= "6)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son fuentes accesibles al p&uacute;blico:";
 choices[5]= new Array();
 choices[5][0] = "El censo promocional";
 choices[5][1] = "Los repertorios telef&oacute;nicos";
 choices[5][2] = "Los medios de comunicaci&oacute;n";
 choices[5][3] = "Todas las anteriores los son";
 answers[5] = 3;
 units[5] = ['35'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2297. ";
 preguntaids[5] = 2297


//  Id pregunta: 2315 Año de creación de pregunta: 2002
 questions[6]= "7)  En la LOPD, una infracci&oacute;n muy grave es:";
 choices[6]= new Array();
 choices[6][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de la ley";
 choices[6][1] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso y oposici&oacute;n y la negativa a facilitar la informaci&oacute;n que sea solicitada";
 choices[6][2] = "Proceder a la recogida de datos de car&aacute;cter personal sin el consentimiento expreso de las personas afectadas en los casos en que &eacute;ste sea exigible";
 choices[6][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[6] = 3;
 units[6] = ['35'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2315. ";
 preguntaids[6] = 2315


//  Id pregunta: 2229 Año de creación de pregunta: 2002
 questions[7]= "8)  La Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD) tiene por objeto:";
 choices[7]= new Array();
 choices[7][0] = "Garantizar y proteger, en lo que concierne al tratamiento de los datos personales, las libertades p&uacute;blicas y los derechos fundamentales de las personas f&iacute;sicas";
 choices[7][1] = "Proteger el honor y la intimidad personal y familiar";
 choices[7][2] = "Proteger todas las libertades p&uacute;blicas y derechos fundamentales reconocidos en la Constituci&oacute;n espa&ntilde;ola";
 choices[7][3] = "Hacer frente a las amenazas o agresiones contra los derechos y libertades p&uacute;blicas, provenientes del tratamiento automatizado de datos personales";
 answers[7] = 0;
 units[7] = ['35'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2229. ";
 preguntaids[7] = 2229


//  Id pregunta: 2406 Año de creación de pregunta: 2006
 questions[8]= "9)  El art. 11 del Estatuto establece la estructura org&aacute;nica de la Agencia enumerando los siguientes &oacute;rganos:";
 choices[8]= new Array();
 choices[8][0] = "El Director de la Agencia de Protecci&oacute;n de Datos, el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[8][1] = "El Director de la Agencia de Protecci&oacute;n de Datos, el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 choices[8][2] = "El Director de la Agencia de Protecci&oacute;n de Datos, el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[8][3] = "El Director de la Agencia de Protecci&oacute;n de Datos, el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 answers[8] = 0;
 units[8] = ['35'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2406. ";
 preguntaids[8] = 2406


//  Id pregunta: 2396 Año de creación de pregunta: 2006
 questions[9]= "10)  Los ficheros de titularidad p&uacute;blica se encuentran regulados en:";
 choices[9]= new Array();
 choices[9][0] = "En el cap&iacute;tulo I del T&iacute;tulo IV de la LOPD";
 choices[9][1] = "En el cap&iacute;tulo II del T&iacute;tulo IV de la LOPD";
 choices[9][2] = "En el cap&iacute;tulo I del T&iacute;tulo VI de la LOPD";
 choices[9][3] = "En el cap&iacute;tulo II del T&iacute;tulo VI de la LOPD";
 answers[9] = 0;
 units[9] = ['35'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2396. ";
 preguntaids[9] = 2396


//  Id pregunta: 2395 Año de creación de pregunta: 2006
 questions[10]= "11)  Entre las excepciones a la cesi&oacute;n de datos sin necesidad de recabar el consentimiento del interesado no se encuentra de acuerdo al articulo 11 de la LOPD:";
 choices[10]= new Array();
 choices[10][0] = "Las comunicaciones al Defensor del Pueblo";
 choices[10][1] = "Las comunicaciones al Ministerio Fiscal.";
 choices[10][2] = "Las comunicaciones al Consejo de Estado";
 choices[10][3] = "Las comunicaciones al Tribunal de Cuentas, en las materias que tenga atribuidas";
 answers[10] = 2;
 units[10] = ['35'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2395. ";
 preguntaids[10] = 2395


//  Id pregunta: 2295 Año de creación de pregunta: 2002
 questions[11]= "12)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, no ser&aacute; preciso el consentimiento del interesado en la comunicaci&oacute;n de datos a un tercero cuando:";
 choices[11]= new Array();
 choices[11][0] = "Cuando la cesi&oacute;n est&aacute; autorizada por una Ley";
 choices[11][1] = "Cuando la cesi&oacute;n est&aacute; autorizada por un Real Decreto";
 choices[11][2] = "Cuando la comunicaci&oacute;n tenga por destinatario al Presidente del Gobierno";
 choices[11][3] = "Cuando se realice para garantizar el inter&eacute;s general";
 answers[11] = 0;
 units[11] = ['35'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2295. ";
 preguntaids[11] = 2295


//  Id pregunta: 2453 Año de creación de pregunta: 2006
 questions[12]= "13)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y por lo especialmente previsto por la LOPD?";
 choices[12]= new Array();
 choices[12][0] = "Los derivados del Registro Civil";
 choices[12][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada";
 choices[12][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras";
 choices[12][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos";
 answers[12] = 0;
 units[12] = ['35'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 2453. ";
 preguntaids[12] = 2453


//  Id pregunta: 2260 Año de creación de pregunta: 2002
 questions[13]= "14)  Los ficheros automatizados de los que sean titulares las Cortes Generales, el Defensor del Pueblo, el Tribunal de Cuentas, el Consejo General del Poder Judicial y el Tribunal Constitucional , seg&uacute;n la Ley de Protecci&oacute;n de Datos:";
 choices[13]= new Array();
 choices[13][0] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[13][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[13][2] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 choices[13][3] = "No les ser&aacute; de aplicaci&oacute;n lo dispuesto en los T&iacute;tulos VI y VII de la misma";
 answers[13] = 0;
 units[13] = ['35'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2260. ";
 preguntaids[13] = 2260


//  Id pregunta: 2207 Año de creación de pregunta: 2002
 questions[14]= "15)  La Agencia de Protecci&oacute;n de Datos:";
 choices[14]= new Array();
 choices[14][0] = "Es un ente de derecho p&uacute;blico que act&uacute;a con dependencia del Ministerio de Justicia en el ejercicio de sus funciones";
 choices[14][1] = "Es un ente de derecho privado que act&uacute;a en el ejercicio de sus funciones seg&uacute;n lo dispuesto por el Ministerio de Justicia";
 choices[14][2] = "Es un ente de derecho p&uacute;blico que act&uacute;a con plena independencia de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[14][3] = "Ninguna de las anteriores es correcta";
 answers[14] = 2;
 units[14] = ['35'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2207. ";
 preguntaids[14] = 2207


//  Id pregunta: 2296 Año de creación de pregunta: 2002
 questions[15]= "16)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son derechos de los interesados:";
 choices[15]= new Array();
 choices[15][0] = "El Derecho de Consulta al Registro General de Protecci&oacute;n de Datos";
 choices[15][1] = "Los derechos de acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 choices[15][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[15][3] = "ninguna de las anteriores respuestas es correcta";
 answers[15] = 2;
 units[15] = ['35'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 2296. ";
 preguntaids[15] = 2296


//  Id pregunta: 2299 Año de creación de pregunta: 2002
 questions[16]= "17)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[16]= new Array();
 choices[16][0] = "Las copias en formato electr&oacute;nico de las fuentes de acceso p&uacute;blico que se obtengan telem&aacute;ticamente, tendr&aacute;n validez indefinida";
 choices[16][1] = "En las fuentes accesibles al p&uacute;blico editadas en forma de libro o alg&uacute;n otro soporte f&iacute;sico, tal condici&oacute;n se perder&aacute; cuando se publique en formato electr&oacute;nico";
 choices[16][2] = "La ley 15/99 no regula las fuentes de acceso p&uacute;blico";
 choices[16][3] = "Los datos que figuren en las gu&iacute;as de servicios de telecomunicaciones disponibles al p&uacute;blico se regir&aacute;n por su normativa espec&iacute;fica";
 answers[16] = 3;
 units[16] = ['35'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2299. ";
 preguntaids[16] = 2299


//  Id pregunta: 2331 Año de creación de pregunta: 2003
 questions[17]= "18)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/1999 del 13 de Diciembre, para ejercer los derechos de rectificaci&oacute;n y/o cancelaci&oacute;n se necesita:";
 choices[17]= new Array();
 choices[17][0] = "Nada, se ejercen gratuitamente";
 choices[17][1] = "Pagar solo los gastos ocasionados por la rectificaci&oacute;n";
 choices[17][2] = "Se necesita un notario";
 choices[17][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[17] = 0;
 units[17] = ['35'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2331. ";
 preguntaids[17] = 2331


//  Id pregunta: 2304 Año de creación de pregunta: 2002
 questions[18]= "19)  Se&ntilde;ale la opci&oacute;n incorrecta entre las siguientes. La Agencia de Protecci&oacute;n de Datos es:";
 choices[18]= new Array();
 choices[18][0] = "Un Ente de Derecho P&uacute;blico con personalidad jur&iacute;dica propia";
 choices[18][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Administraciones P&uacute;blicas";
 choices[18][2] = "Ejerce sus funciones a trav&eacute;s del Director, cuyos actos ponen fin a la v&iacute;a administrativa";
 choices[18][3] = "Act&uacute;a con plena independencia de las AA.PP.";
 answers[18] = 1;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2304. ";
 preguntaids[18] = 2304


//  Id pregunta: 2404 Año de creación de pregunta: 2006
 questions[19]= "20)  La prestaci&oacute;n de servicios por parte de terceros a las Administraciones P&uacute;blicas, cuando implica un tratamiento de datos (Art. 12 LOPD), exige";
 choices[19]= new Array();
 choices[19][0] = "Cumplir lo dispuesto en la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[19][1] = "Adem&aacute;s de cumplir lo dispuesto en otras leyes, deber&aacute; incorporar los requisitos formales exigibles al encargado del tratamiento";
 choices[19][2] = "Crear una persona jur&iacute;dica distinta sujeto al derecho privado";
 choices[19][3] = "Realizar copias de seguridad de los datos";
 answers[19] = 1;
 units[19] = ['35'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2404. ";
 preguntaids[19] = 2404


//  Id pregunta: 2329 Año de creación de pregunta: 2003
 questions[20]= "21)  &iquest;Qui&eacute;n es responsable de editar el repertorio de los ficheros inscritos en el registro de protecci&oacute;n de datos?";
 choices[20]= new Array();
 choices[20][0] = "Registro General de Protecci&oacute;n de Datos";
 choices[20][1] = "Inspecci&oacute;n de Datos";
 choices[20][2] = "Secretar&iacute;a General";
 choices[20][3] = "Ninguno de los anteriores";
 answers[20] = 2;
 units[20] = ['35'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2329. Pregunta similar a la del ex&aacute;men de SS del 2003. Real Decreto 428/1993";
 preguntaids[20] = 2329


//  Id pregunta: 2273 Año de creación de pregunta: 2002
 questions[21]= "22)  Respecto a la LOPD, no es cierto que:";
 choices[21]= new Array();
 choices[21][0] = "se refiere a tratamiento de datos personales automatizados o no";
 choices[21][1] = "hay medidas de nivel b&aacute;sico, medio, alto y muy alto";
 choices[21][2] = "el cifrado y el mantenimiento de logs de acceso es necesario en el nivel alto";
 choices[21][3] = "debe informarse al ciudadano en la recogida de datos, tanto para formularios en papel como en web";
 answers[21] = 1;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2273. ";
 preguntaids[21] = 2273


//  Id pregunta: 2398 Año de creación de pregunta: 2006
 questions[22]= "23)  Cual de las siguientes fuentes no tiene consideraci&oacute;n de fuente de acceso p&uacute;blico seg&uacute;n la LOPD:";
 choices[22]= new Array();
 choices[22][0] = "El censo promocional.";
 choices[22][1] = "Los repertorios telef&oacute;nicos sin restricciones.";
 choices[22][2] = "Los diarios y boletines oficiales.";
 choices[22][3] = "Medios de comunicaci&oacute;n.";
 answers[22] = 1;
 units[22] = ['35'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2398. En los t&eacute;rminos previstos por su normativa espec&iacute;fica";
 preguntaids[22] = 2398


//  Id pregunta: 2403 Año de creación de pregunta: 2006
 questions[23]= "24)  &iquest;Las cesiones de datos personales entre Administraciones P&uacute;blicas, para el ejercicio de competencias distintas pueden realizarse?";
 choices[23]= new Array();
 choices[23][0] = "En todo caso";
 choices[23][1] = "Cuando lo habilite una norma con rango formal de Ley";
 choices[23][2] = "Basta una autorizaci&oacute;n en una norma reglamentaria";
 choices[23][3] = "Nunca";
 answers[23] = 1;
 units[23] = ['35'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2403. ";
 preguntaids[23] = 2403


//  Id pregunta: 2400 Año de creación de pregunta: 2006
 questions[24]= "25)  Seg&uacute;n lo establecido en la ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal (LOPD). &iquest;Cual de los siguientes son principios de protecci&oacute;n de datos?";
 choices[24]= new Array();
 choices[24][0] = "Calidad de datos y derecho de informaci&oacute;n en la recogida";
 choices[24][1] = "Acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 choices[24][2] = "Acceso y calidad de datos";
 choices[24][3] = "Notificaci&oacute;n de ficheros";
 answers[24] = 0;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2400. ";
 preguntaids[24] = 2400


//  Id pregunta: 2410 Año de creación de pregunta: 2006
 questions[25]= "26)  Cual de los siguientes ficheros debe inscribirse como de nivel de seguridad alto";
 choices[25]= new Array();
 choices[25][0] = "Los ficheros que contengan datos para fines policiales sin consentimiento del afectado.";
 choices[25][1] = "Los ficheros que contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo.";
 choices[25][2] = "Los ficheros que contengan datos relativos a la comisi&oacute;n de infracciones administrativas o penales.";
 choices[25][3] = "No es correcta ninguna de las anteriores.";
 answers[25] = 0;
 units[25] = ['35'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2410. ";
 preguntaids[25] = 2410


//  Id pregunta: 2215 Año de creación de pregunta: 2002
 questions[26]= "27)  La cesi&oacute;n de los datos fuera de los casos en que est&eacute;n permitidas, seg&uacute;n la LOPD es una infracci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "No es infracci&oacute;n";
 choices[26][1] = "Leve";
 choices[26][2] = "Grave";
 choices[26][3] = "Muy grave";
 answers[26] = 3;
 units[26] = ['35'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2215. ";
 preguntaids[26] = 2215


//  Id pregunta: 2259 Año de creación de pregunta: 2002
 questions[27]= "28)  Los ficheros automatizados cuyo objeto sea el almacenamiento de los datos contenidos en los informes personales de calificaci&oacute;n del personal militar profesional , seg&uacute;n la LOPD:";
 choices[27]= new Array();
 choices[27][0] = "No caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[27][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[27][2] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[27][3] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas, y por lo especialmente previsto, en su caso, por la LOPD";
 answers[27] = 3;
 units[27] = ['35'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2259. ";
 preguntaids[27] = 2259


//  Id pregunta: 2294 Año de creación de pregunta: 2002
 questions[28]= "29)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, los datos que hagan referencia al origen racial, a la salud y a la vida sexual:";
 choices[28]= new Array();
 choices[28][0] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando as&iacute; lo disponga una Ley";
 choices[28][1] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando el afectado consienta expresamente";
 choices[28][2] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 choices[28][3] = "No podr&aacute;n ser objeto de tratamiento. Se except&uacute;an los ficheros mantenidos por los partidos pol&iacute;ticos, sindicatos o iglesias.";
 answers[28] = 2;
 units[28] = ['35'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2294. ";
 preguntaids[28] = 2294


//  Id pregunta: 2397 Año de creación de pregunta: 2006
 questions[29]= "30)  Seg&uacute;n el art&iacute;culo 44.3 proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente constituye:";
 choices[29]= new Array();
 choices[29][0] = "no se necesita esperar a dicha publicaci&oacute;n en el BOE";
 choices[29][1] = "una infracci&oacute;n muy grave.";
 choices[29][2] = "una infracci&oacute;n grave.";
 choices[29][3] = "una infracci&oacute;n leve.";
 answers[29] = 2;
 units[29] = ['35'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2397. ";
 preguntaids[29] = 2397


//  Id pregunta: 2203 Año de creación de pregunta: 2002
 questions[30]= "31)  Indique cu&aacute;l de las siguientes afirmaciones sobre la Agencia de Protecci&oacute;n de Datos es falsa de acuerdo con lo establecido en el real Decreto 428/93, de 26 de marzo, por el que se aprueba su Estatuto:";
 choices[30]= new Array();
 choices[30][0] = "Vela por el cumplimiento de la Ley Org&aacute;nica 5/92, de 29 de octubre, de regulaci&oacute;n del tratamiento automatizado de datos de car&aacute;cter personal (hoy d&iacute;a sustituida por la LOPD)";
 choices[30][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Justicia";
 choices[30][2] = "Dictar&aacute; recomendaciones sobre seguridad y control de acceso a ficheros";
 choices[30][3] = "Su Consejo Consultivo es un &oacute;rgano colegiado compuesto por doce miembros que asesora al Director de la Agencia de Protecci&oacute;n de Datos";
 answers[30] = 3;
 units[30] = ['35'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 2203. ";
 preguntaids[30] = 2203


//  Id pregunta: 2246 Año de creación de pregunta: 2002
 questions[31]= "32)  Con car&aacute;cter general, la transferencia de ficheros con datos de car&aacute;cter personal se puede hacer:";
 choices[31]= new Array();
 choices[31][0] = "A cualquier pa&iacute;s europeo y africano";
 choices[31][1] = "S&oacute;lo a Europa y Asia";
 choices[31][2] = "S&oacute;lo dentro de UE";
 choices[31][3] = "Con destino a pa&iacute;ses que proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD";
 answers[31] = 3;
 units[31] = ['35'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 2246. ";
 preguntaids[31] = 2246


//  Id pregunta: 2407 Año de creación de pregunta: 2006
 questions[32]= "33)  Los miembros del Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos desempe&ntilde;ar&aacute;n su cargo:";
 choices[32]= new Array();
 choices[32][0] = "durante seis a&ntilde;os";
 choices[32][1] = "durante cinco a&ntilde;os";
 choices[32][2] = "durante tres a&ntilde;os";
 choices[32][3] = "durante cuatro a&ntilde;os";
 answers[32] = 3;
 units[32] = ['35'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2407. Real Decreto 428/1993";
 preguntaids[32] = 2407


//  Id pregunta: 2234 Año de creación de pregunta: 2009
 questions[33]= "34)  La LOPD se aplicar&aacute; sin especialidad indicada a:";
 choices[33]= new Array();
 choices[33][0] = "Los ficheros que mantengan las personas f&iacute;sicas con fines exclusivamente dom&eacute;sticos o personales";
 choices[33][1] = "A todos aquellos datos de car&aacute;cter personal registrados en cualquier soporte que los haga susceptibles de tratamiento y cualquier modalidad de uso posterior de los mismos";
 choices[33][2] = "Los ficheros regulados por la legislaci&oacute;n electoral o sobre estad&iacute;stica p&uacute;blica";
 choices[33][3] = "Los ficheros derivados de los Registros Civiles";
 answers[33] = 1;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 2234. ";
 preguntaids[33] = 2234


//  Id pregunta: 2314 Año de creación de pregunta: 2002
 questions[34]= "35)  Un ejemplo de infracci&oacute;n grave es:";
 choices[34]= new Array();
 choices[34][0] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos sean recabados del propio interesado.";
 choices[34][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general, publicada en el Bolet&iacute;n Oficial del Estado o diario oficial correspondiente.";
 choices[34][2] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[34][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un requerimiento previo del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[34] = 1;
 units[34] = ['35'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2314. A: Leve; C y D: Muy graves";
 preguntaids[34] = 2314


//  Id pregunta: 2279 Año de creación de pregunta: 2002
 questions[35]= "36)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[35]= new Array();
 choices[35][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[35][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[35][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[35][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[35] = 1;
 units[35] = ['35'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2279. ";
 preguntaids[35] = 2279


//  Id pregunta: 2270 Año de creación de pregunta: 2009
 questions[36]= "37)  Para poder tener un fichero de datos personales en la Administraci&oacute;n P&uacute;blica hace falta:";
 choices[36]= new Array();
 choices[36][0] = "Que su creaci&oacute;n, modificaci&oacute;n o supresi&oacute;n se realice mediante una disposici&oacute;n general publicada en el B.O.E. o en el diario oficial correspondiente";
 choices[36][1] = "Que el correspondiente Director General lo autorice por escrito";
 choices[36][2] = "Que aparezca una disposici&oacute;n general publicada en el Diario de las Comunidades Europeas";
 choices[36][3] = "Que en la normativa de estructura del Departamento o Unidad as&iacute; se establezca";
 answers[36] = 0;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2270. ";
 preguntaids[36] = 2270


//  Id pregunta: 2271 Año de creación de pregunta: 2002
 questions[37]= "38)  Quienes se dediquen a la prestaci&oacute;n de servicios de informaci&oacute;n sobre solvencia patrimonial y el cr&eacute;dito:";
 choices[37]= new Array();
 choices[37][0] = "Podr&aacute;n tratar datos de car&aacute;cter personal relativos al cumplimiento o inclumplimiento de obligaciones dinerarias facilitados por el acreedor o por quien act&uacute;e por su cuenta o inter&eacute;s";
 choices[37][1] = "Exclusivamente podr&aacute;n tratar datos de car&aacute;cter personal obtenidos de los registros y las fuentes accesibles al p&uacute;blico";
 choices[37][2] = "Exclusivamente podr&aacute;n tratar datos de car&aacute;cter personal procedentes de informaciones facilitadas por el interesado o con su consentimiento";
 choices[37][3] = "No podr&aacute;n registrar o ceder datos de car&aacute;cter personal que sean determinantes para enjuiciar la solvencia econ&oacute;mica de los interesados";
 answers[37] = 0;
 units[37] = ['35'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2271. ";
 preguntaids[37] = 2271


//  Id pregunta: 2346 Año de creación de pregunta: 2003
 questions[38]= "39)  Las medidas de seguridad l&oacute;gica para datos de car&aacute;cter personal caracterizadas como de nivel Medio:";
 choices[38]= new Array();
 choices[38][0] = "De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado";
 choices[38][1] = "La identificaci&oacute;n de los soportes se deber&aacute; realizar utilizando sistemas de etiquetado comprensibles y con significado que permitan a los usuarios con acceso autorizado a los citados soportes y documentos identificar su contenido, y que dificulten la identificaci&oacute;n para el resto de personas.";
 choices[38][2] = "El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[38][3] = "Deber&aacute;n establecerse procedimientos de actuaci&oacute;n para la realizaci&oacute;n como m&iacute;nimo semanal de copias de respaldo, salvo que en dicho per&iacute;odo no se hubiera producido ninguna actualizaci&oacute;n de los datos.";
 answers[38] = 2;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2346. ";
 preguntaids[38] = 2346


//  Id pregunta: 2276 Año de creación de pregunta: 2002
 questions[39]= "40)  Respecto a los derechos de rectificaci&oacute;n y cancelaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "El plazo para hacer efectiva la rectificaci&oacute;n o cancelaci&oacute;n solicitada por el afectado, es de 1 a&ntilde;o";
 choices[39][1] = "La cancelaci&oacute;n se ejecutar&aacute; mediante supresi&oacute;n de los datos";
 choices[39][2] = "Los datos cancelados no podr&aacute;n ser conservados en ning&uacute;n caso";
 choices[39][3] = "La cancelaci&oacute;n de los datos se ejecutar&aacute; mediante bloqueo de los datos, conserv&aacute;ndose los mismos &uacute;nicamente a disposici&oacute;n de los Tribunales o de las AAPP";
 answers[39] = 3;
 units[39] = ['35'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2276. ";
 preguntaids[39] = 2276


//  Id pregunta: 2252 Año de creación de pregunta: 2002
 questions[40]= "41)  Las Comunidades Aut&oacute;nomas pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos que:";
 choices[40]= new Array();
 choices[40][0] = "Tendr&aacute;n competencias &uacute;nicamente sobre los ficheros de datos de car&aacute;cter personal, creados o gestionados por las CC.AA.";
 choices[40][1] = "Tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados o gestionados por las CCAA y por la Administraci&oacute;n local de su &aacute;mbito territorial";
 choices[40][2] = "S&oacute;lo tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados por la Administraci&oacute;n local de su &aacute;mbito territorial si lo autoriza el Director de la Agencia de Protecci&oacute;n de Datos";
 choices[40][3] = "Las CCAA no pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos";
 answers[40] = 1;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 2252. ";
 preguntaids[40] = 2252


//  Id pregunta: 2258 Año de creación de pregunta: 2002
 questions[41]= "42)  Los datos de car&aacute;cter personal que hagan referencia al origen racial, a la salud y a la vida sexual s&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando:";
 choices[41]= new Array();
 choices[41][0] = "Cuando lo disponga una Ley";
 choices[41][1] = "Si el afectado consiente expresamente.";
 choices[41][2] = "En los supuestos 'a' o 'b'.";
 choices[41][3] = "Nunca";
 answers[41] = 2;
 units[41] = ['35'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 2258. ";
 preguntaids[41] = 2258


//  Id pregunta: 2277 Año de creación de pregunta: 2002
 questions[42]= "43)  Respecto a los Ficheros y Registros de Poblaci&oacute;n de las Administraciones P&uacute;blicas, la Ley de Protecci&oacute;n de Datos se&ntilde;ala:";
 choices[42]= new Array();
 choices[42][0] = "Para su creaci&oacute;n es necesario el consentimiento del interesado";
 choices[42][1] = "Podr&aacute; solicitar su creaci&oacute;n cualquier persona interesada";
 choices[42][2] = "S&oacute;lo lo puede solicitar la Administraci&oacute;n General del Estado";
 choices[42][3] = "Estar&aacute;n formados con los datos del nombre, apellidos, domicilio, sexo y fecha de nacimiento";
 answers[42] = 3;
 units[42] = ['35'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2277. ";
 preguntaids[42] = 2277


//  Id pregunta: 2206 Año de creación de pregunta: 2009
 questions[43]= "44)  La Agencia de Protecci&oacute;n de Datos depende funcionalmente del:";
 choices[43]= new Array();
 choices[43][0] = "Ministerio de Justicia";
 choices[43][1] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 choices[43][2] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[43][3] = "Es un organismo independiente de cualquier Ministerio";
 answers[43] = 3;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2206. ";
 preguntaids[43] = 2206


//  Id pregunta: 2405 Año de creación de pregunta: 2006
 questions[44]= "45)  La Agencia de Protecci&oacute;n de Datos se rige:";
 choices[44]= new Array();
 choices[44][0] = "Por el T&iacute;tulo V de la LOPD y por el Real Decreto 156/1999, por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[44][1] = "Por el T&iacute;tulo VI de la LOPD y por el Real Decreto 428/1993 por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[44][2] = "Por el T&iacute;tulo V de la LOPD y por el Real Decreto 994/1999 por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[44][3] = "Por el T&iacute;tulo VI de la LOPD y por el Real Decreto 994/1999, por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 answers[44] = 1;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2405. ";
 preguntaids[44] = 2405


//  Id pregunta: 2401 Año de creación de pregunta: 2006
 questions[45]= "46)  Seg&uacute;n lo establecido en la LOPD &iquest;Cual de los siguientes son derechos de las personas?";
 choices[45]= new Array();
 choices[45][0] = "Secreto profesional y control previo de los tratamientos";
 choices[45][1] = "Consentimiento expreso para el tratamiento de datos especialmente protegidos y derecho de Informaci&oacute;n";
 choices[45][2] = "Acceso, rectificaci&oacute;n, cancelaci&oacute;n, oposici&oacute;n e impugnaci&oacute;n";
 choices[45][3] = "Confidencialidad e integridad de la Informaci&oacute;n";
 answers[45] = 2;
 units[45] = ['35'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2401. ";
 preguntaids[45] = 2401


//  Id pregunta: 2372 Año de creación de pregunta: 2004
 questions[46]= "47)  Un fichero automatizado con (DNI, Nombre, Apellidos, Domicilio, Titulaci&oacute;n Acad&eacute;mica, Grado y Tipo de Minusval&iacute;a) requiere medidas de tipo:";
 choices[46]= new Array();
 choices[46][0] = "B&aacute;sico";
 choices[46][1] = "Medio";
 choices[46][2] = "Alto";
 choices[46][3] = "Cr&iacute;tico";
 answers[46] = 2;
 units[46] = ['35'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2372. Junta Andaluc&iacute;a 2002";
 preguntaids[46] = 2372


//  Id pregunta: 2309 Año de creación de pregunta: 2002
 questions[47]= "48)  Si un grupo de personas constituyen una asociaci&oacute;n (por ejemplo de antiguos alumnos, o de padres de alumnos) y recaban informaci&oacute;n de car&aacute;cter personal de sus miembros, almacen&aacute;ndola en un fichero:";
 choices[47]= new Array();
 choices[47][0] = "S&oacute;lo deber&aacute;n registrar el fichero en la Agencia de Protecci&oacute;n de Datos si el contenido de &eacute;stos es lo suficientemente sensible";
 choices[47][1] = "Seg&uacute;n la finalidad para la que se use y seg&uacute;n el tama&ntilde;o de dicho fichero podr&aacute;n estar exentos de de registrar el fichero";
 choices[47][2] = "Tienen que registrar el fichero en la Agencia de Protecci&oacute;n de Datos";
 choices[47][3] = "Deber&iacute;an registrar el fichero, pero dado que la Agencia de Protecci&oacute;n de Datos s&oacute;lo se ocupa en la pr&aacute;ctica de grandes casos de fraude pueden pasar sin ser sancionados sin ning&uacute;n tipo de problema";
 answers[47] = 2;
 units[47] = ['35'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 2309. ";
 preguntaids[47] = 2309


//  Id pregunta: 2237 Año de creación de pregunta: 2009
 questions[48]= "49)  En relaci&oacute;n a los ficheros con datos de car&aacute;cter personal establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada:";
 choices[48]= new Array();
 choices[48][0] = "El responsable del fichero comunicar&aacute; previamente la existencia del mismo, sus caracter&iacute;sticas generales y su finalidad a la AEPD";
 choices[48][1] = "No precisan ser declarados pero s&iacute; ser inscritos en el registro de la agencia de protecci&oacute;n de datos.";
 choices[48][2] = "Se caracterizan como de nivel b&aacute;sico en el RD 1720/2007.";
 choices[48][3] = "Se tratan a todos los efectos como el resto de ficheros de datos de car&aacute;cter personal con las consideraciones introducidas por el RD 1720/2007.";
 answers[48] = 0;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 2237. ";
 preguntaids[48] = 2237


//  Id pregunta: 2244 Año de creación de pregunta: 2002
 questions[49]= "50)  La rectificaci&oacute;n o cancelaci&oacute;n de datos de car&aacute;cter personal se har&aacute; efectiva por el responsable del fichero en un periodo de tiempo siguiente al de recepci&oacute;n de la solicitud. Dicho periodo es de:";
 choices[49]= new Array();
 choices[49][0] = "5 d&iacute;as";
 choices[49][1] = "10 d&iacute;as";
 choices[49][2] = "15 d&iacute;as";
 choices[49][3] = "1 mes";
 answers[49] = 1;
 units[49] = ['35'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2244. ";
 preguntaids[49] = 2244


//  Id pregunta: 2303 Año de creación de pregunta: 2002
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l no es una funci&oacute;n atribuida al Director de la Agencia de Protecci&oacute;n de Datos:";
 choices[50]= new Array();
 choices[50][0] = "Aprobar la Memoria trimestral de la Agencia.";
 choices[50][1] = "Requerir a los responsables de ficheros de titularidad privada a que subsanen deficiencias de los c&oacute;digos tipo";
 choices[50][2] = "Iniciar, impulsar la instrucci&oacute;n y resolver los expedientes sancionadores referentes a los responsables de los ficheros privados.";
 choices[50][3] = "Adoptar las medidas cautelares y provisionales que requiera el ejercicio de la potestad sancionadora de la Agencia con relaci&oacute;n a los responsables de los ficheros privados.";
 answers[50] = 0;
 units[50] = ['35'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2303. Real Decreto 428/1993: La memoria es anual";
 preguntaids[50] = 2303


//  Id pregunta: 2231 Año de creación de pregunta: 2002
 questions[51]= "52)  La Ley Org&aacute;nica de Protecci&oacute;n de Datos de car&aacute;cter personal es la ley:";
 choices[51]= new Array();
 choices[51][0] = "14/1999";
 choices[51][1] = "994/1999";
 choices[51][2] = "15/1999";
 choices[51][3] = "14/1997";
 answers[51] = 2;
 units[51] = ['35'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2231. ";
 preguntaids[51] = 2231


//  Id pregunta: 2247 Año de creación de pregunta: 2009
 questions[52]= "53)  La transferencia internacional de datos de car&aacute;cter personal con destino a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable sin autorizaci&oacute;n del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos salvo en los supuestos en los que conforme a la LOPD y sus disposiciones de desarrollo dicha autorizaci&oacute;n no resulta necesaria, es una infracci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Leve";
 choices[52][1] = "Grave";
 choices[52][2] = "Muy grave";
 choices[52][3] = "No es infracci&oacute;n";
 answers[52] = 2;
 units[52] = ['35'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2247. ";
 preguntaids[52] = 2247


//  Id pregunta: 2336 Año de creación de pregunta: 2003
 questions[53]= "54)  La LOPD, en su art 5 sobre el Derecho de Informaci&oacute;n en la recogida de datos, indica que los interesados han de estar informados de la posibilidad de ejercitar varios derechos sobre sus datos. Indicar la falsa:";
 choices[53]= new Array();
 choices[53][0] = "Acceso";
 choices[53][1] = "Certificaci&oacute;n";
 choices[53][2] = "Rectificaci&oacute;n";
 choices[53][3] = "Cancelaci&oacute;n";
 answers[53] = 1;
 units[53] = ['35'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 2336. ";
 preguntaids[53] = 2336


//  Id pregunta: 2212 Año de creación de pregunta: 2009
 questions[54]= "55)  La calidad de los datos a la que hacen referencia las leyes de protecci&oacute;n de datos no incluye uno de los aspectos siguientes:";
 choices[54]= new Array();
 choices[54][0] = "Tipicidad";
 choices[54][1] = "Veracidad";
 choices[54][2] = "Finalidad";
 choices[54][3] = "Pertinencia";
 answers[54] = 0;
 units[54] = ['35'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2212. ";
 preguntaids[54] = 2212


//  Id pregunta: 2292 Año de creación de pregunta: 2009
 questions[55]= "56)  Seg&uacute;n la LOPD, los datos de car&aacute;cter personal que revelan la ideolog&iacute;a, religi&oacute;n y creencias podr&aacute;n ser objeto de tratamiento automatizado:";
 choices[55]= new Array();
 choices[55][0] = "Con consentimiento expreso del afectado";
 choices[55][1] = "Con consentimiento expreso y por escrito del afectado";
 choices[55][2] = "Nunca podr&aacute; ser objeto de tratamiento automatizado";
 choices[55][3] = "Cuando por razones de inter&eacute;s general as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 answers[55] = 1;
 units[55] = ['35'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2292. ";
 preguntaids[55] = 2292


//  Id pregunta: 2272 Año de creación de pregunta: 2002
 questions[56]= "57)  Referente a la Agencia de Protecci&oacute;n de Datos, no es falso que:";
 choices[56]= new Array();
 choices[56][0] = "El Gobierno pueda cesar discrecionalmente a su Director";
 choices[56][1] = "El Director sea nombrado por su Consejo Consultivo";
 choices[56][2] = "El mandato del Director de la Agencia de Protecci&oacute;n de Datos tendr&aacute; una duraci&oacute;n de seis a&ntilde;os";
 choices[56][3] = "Se caracteriza por su independencia respecto de la Administraci&oacute;n";
 answers[56] = 3;
 units[56] = ['35'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 2272. ";
 preguntaids[56] = 2272


//  Id pregunta: 2301 Año de creación de pregunta: 2002
 questions[57]= "58)  Se&ntilde;alar la opci&oacute;n falsa. Seg&uacute;n la Ley de Protecci&oacute;n de Datos no ser&aacute; necesario el consentimiento del afectado para la cesi&oacute;n de sus datos personales cuando:";
 choices[57]= new Array();
 choices[57][0] = "Hayan sido obtenidos de fuentes accesibles al p&uacute;blico";
 choices[57][1] = "La cesi&oacute;n es a los tribunales en el ejercicio de sus potestades";
 choices[57][2] = "No son utilizados para los fines para los que fueron recabados";
 choices[57][3] = "La cesi&oacute;n es para la realizaci&oacute;n de estudios epidemiol&oacute;gicos";
 answers[57] = 2;
 units[57] = ['35'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2301. ";
 preguntaids[57] = 2301


//  Id pregunta: 2290 Año de creación de pregunta: 2009
 questions[58]= "59)  Seg&uacute;n la Ley org&aacute;nica 15/1999:";
 choices[58]= new Array();
 choices[58][0] = "existen derechos de cancelaci&oacute;n, rectificaci&oacute;n, acceso y oposici&oacute;n, sobre los que se podr&aacute; exigir contraprestaci&oacute;n en los casos que proceda";
 choices[58][1] = "los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haber sido recogidos para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al regimen general de la ley";
 choices[58][2] = "la Agencia de Protecci&oacute;n de Datos es un ente de derecho p&uacute;blico con personalidad jur&iacute;dica propia y que depende de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[58][3] = "Todas las respuestas anteriores son correctas";
 answers[58] = 1;
 units[58] = ['35'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2290. ";
 preguntaids[58] = 2290


//  Id pregunta: 2281 Año de creación de pregunta: 2002
 questions[59]= "60)  Respecto de la Agencia de Protecci&oacute;n de Datos, es falso que:";
 choices[59]= new Array();
 choices[59][0] = "Su consejo consultivo tiene entre sus miembros un Diputado y un Senador";
 choices[59][1] = "Los funcionarios que ejercen funciones inspectoras tienen la consideraci&oacute;n de autoridad p&uacute;blica en el desempe&ntilde;o de sus funciones";
 choices[59][2] = "Los c&oacute;digos tipo deben ser inscritos en el Registro General de Protecci&oacute;n de Datos";
 choices[59][3] = "Es necesaria la autorizaci&oacute;n del Director de la Agencia para toda transferencia internacional de datos de car&aacute;cter personal mediante tratamientos automatizados";
 answers[59] = 3;
 units[59] = ['35'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2281. ";
 preguntaids[59] = 2281


//  Id pregunta: 2409 Año de creación de pregunta: 2006
 questions[60]= "61)  &iquest;De qu&eacute; Ministerio depende jer&aacute;rquicamente la Agencia de Protecci&oacute;n de Datos?";
 choices[60]= new Array();
 choices[60][0] = "Justicia";
 choices[60][1] = "Interior";
 choices[60][2] = "Asuntos Exteriores";
 choices[60][3] = "Ninguna de las anteriores es cierta";
 answers[60] = 3;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2409. ";
 preguntaids[60] = 2409


//  Id pregunta: 2298 Año de creación de pregunta: 2009
 questions[61]= "62)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y el RD 1720/2007, y en relaci&oacute;n con los ficheros de titularidad privada que contengan datos de car&aacute;cter personal:";
 choices[61]= new Array();
 choices[61][0] = "Los ficheros de datos de car&aacute;cter personal de titularidad privada ser&aacute;n notificados a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos por la persona o entidad privada que pretenda crearlos, con car&aacute;cter previo a su creaci&oacute;n";
 choices[61][1] = "La notificaci&oacute;n de un fichero de datos de car&aacute;cter personal es independiente del sistema de tratamiento empleado en su organizaci&oacute;n y del soporte o soportes empleados para el tratamiento de los datos";
 choices[61][2] = "Deber&aacute; notificarse a la Agencia de Protecci&oacute;n de Datos las variaciones que se produzcan con posterioridad a la notificaci&oacute;n de inscripci&oacute;n";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = 3;
 units[61] = ['35'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2298. ";
 preguntaids[61] = 2298


//  Id pregunta: 2368 Año de creación de pregunta: 2004
 questions[62]= "63)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se rige, entro otros, por:";
 choices[62]= new Array();
 choices[62][0] = "El T&iacute;tulo VI de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 choices[62][1] = "El T&iacute;tulo V de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 choices[62][2] = "El T&iacute;tulo V de la LOPD y el RD 994/1999 por el que se aprueba su Estatuto.";
 choices[62][3] = "La Disposici&oacute;n Adicional Tercera de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 answers[62] = 0;
 units[62] = ['35'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 2368. ";
 preguntaids[62] = 2368


//  Id pregunta: 2367 Año de creación de pregunta: 2004
 questions[63]= "64)  La LOPD es FALSO que NO es de aplicaci&oacute;n a:";
 choices[63]= new Array();
 choices[63][0] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[63][1] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada";
 choices[63][2] = "Los ficheros regulados por la legislaci&oacute;n de r&eacute;gimen electoral";
 choices[63][3] = "Los ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 answers[63] = 2;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2367. ";
 preguntaids[63] = 2367


//  Id pregunta: 2330 Año de creación de pregunta: 2003
 questions[64]= "65)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos Personales (LOPD), cu&aacute;l de los siguientes datos es un dato especialmente protegido";
 choices[64]= new Array();
 choices[64][0] = "Sexo";
 choices[64][1] = "Nombre";
 choices[64][2] = "Raza";
 choices[64][3] = "Direcci&oacute;n";
 answers[64] = 2;
 units[64] = ['35'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 2330. ";
 preguntaids[64] = 2330


//  Id pregunta: 2305 Año de creación de pregunta: 2002
 questions[65]= "66)  Ser&aacute; necesario el consentimiento del afectado cuando se trate de datos:";
 choices[65]= new Array();
 choices[65][0] = "Recogidos por las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[65][1] = "Cuando el tratamiento tenga por finalidad proteger un inter&eacute;s vital del interesado del art&iacute;culo 7, apartado 6 de la LOPD";
 choices[65][2] = "Que figuren en fuentes accesibles al p&uacute;blico";
 choices[65][3] = "Ninguna es correcta";
 answers[65] = 3;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2305. ";
 preguntaids[65] = 2305


//  Id pregunta: 2232 Año de creación de pregunta: 2009
 questions[66]= "67)  La LOPD no es de aplicaci&oacute;n a:";
 choices[66]= new Array();
 choices[66][0] = "Los ficheros creados por las fuerzas y cuerpos de seguridad recogidos para fines administrativos";
 choices[66][1] = "Los datos recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones legalmente establecidas";
 choices[66][2] = "Los ficheros automatizados con datos personales de car&aacute;cter tributario";
 choices[66][3] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 answers[66] = 3;
 units[66] = ['35'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2232. ";
 preguntaids[66] = 2232


//  Id pregunta: 2338 Año de creación de pregunta: 2003
 questions[67]= "68)  Se except&uacute;an los derechos de informaci&oacute;n previa, de modo expreso, preciso e inequ&iacute;voco (SE&Ntilde;ALE LA FALSA):";
 choices[67]= new Array();
 choices[67][0] = "Cuando afecte a la defensa nacional";
 choices[67][1] = "A la seguridad p&uacute;blica";
 choices[67][2] = "A la persecuci&oacute;n de infracciones penales o administrativas";
 choices[67][3] = "Cuando no impida ni dificulte el cumplimiento de las funciones de control y verificaci&oacute;n de las Administraciones P&uacute;blicas";
 answers[67] = 3;
 units[67] = ['35'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 2338. ";
 preguntaids[67] = 2338


//  Id pregunta: 2399 Año de creación de pregunta: 2006
 questions[68]= "69)  Uno de estos datos personales no es de los denominados &ldquo;especialmente protegidos&rdquo;";
 choices[68]= new Array();
 choices[68][0] = "Origen racial o &eacute;tnico.";
 choices[68][1] = "Afiliaci&oacute;n sindical";
 choices[68][2] = "Infracciones penales .";
 choices[68][3] = "Vida sexual.";
 answers[68] = 2;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2399. ";
 preguntaids[68] = 2399


//  Id pregunta: 2278 Año de creación de pregunta: 2002
 questions[69]= "70)  Respecto al derecho de acceso, la Ley Org&aacute;nica de Protecci&oacute;n de Datos indica:";
 choices[69]= new Array();
 choices[69][0] = "El interesado tendr&aacute; derecho a solicitar y obtener, previo pago de los gastos incurridos, informaci&oacute;n de sus datos de car&aacute;cter personal sometidos a tratamiento, el origen de dichos datos, as&iacute; como las comunicaciones realizadas o que se prev&eacute;n hacer";
 choices[69][1] = "La informaci&oacute;n podr&aacute; obtenerse mediante la mera consulta de los datos por medio de su visualizaci&oacute;n, o la indicaci&oacute;n de los datos que son objeto de tratamiento mediante escrito, copia o fotocopia, certificada o no, en forma legible e inteligible";
 choices[69][2] = "El derecho de acceso a que se refiere este art&iacute;culo s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a doce meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute;n ejercitarlo cada 6 meses";
 choices[69][3] = "El derecho de acceso s&oacute;lo podr&aacute; ejercerse cuando as&iacute; lo autorice el Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[69] = 1;
 units[69] = ['35'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 2278. ";
 preguntaids[69] = 2278


//  Id pregunta: 2311 Año de creación de pregunta: 2002
 questions[70]= "71)  No son fuentes accesibles al p&uacute;blico, seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[70]= new Array();
 choices[70][0] = "Aquellos ficheros cuya consulta puede ser realizada sin m&aacute;s exigencia que, en su caso, el abono de una contraprestaci&oacute;n";
 choices[70][1] = "El censo promocional";
 choices[70][2] = "Los diarios y boletines oficiales y los medios de comunicaci&oacute;n";
 choices[70][3] = "Revistas cient&iacute;ficas y de difusi&oacute;n";
 answers[70] = 3;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2311. ";
 preguntaids[70] = 2311


//  Id pregunta: 2238 Año de creación de pregunta: 2009
 questions[71]= "72)  Las medidas de seguridad b&aacute;sicas para datos automatizados de car&aacute;cter personal:";
 choices[71]= new Array();
 choices[71][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[71][1] = "La responsabilidad de los registros de acceso est&aacute; bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro est&aacute; activo y que no haya saltos temporales.";
 choices[71][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[71][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos";
 answers[71] = 2;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2238. ";
 preguntaids[71] = 2238


//  Id pregunta: 2293 Año de creación de pregunta: 2002
 questions[72]= "73)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, el derecho de acceso s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a:";
 choices[72]= new Array();
 choices[72][0] = "12 meses";
 choices[72][1] = "6 meses";
 choices[72][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 choices[72][3] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 answers[72] = 3;
 units[72] = ['35'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2293. ";
 preguntaids[72] = 2293


//  Id pregunta: 2408 Año de creación de pregunta: 2006
 questions[73]= "74)  La aprobaci&oacute;n del Estatuto de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se realiz&oacute; a trav&eacute;s de:";
 choices[73]= new Array();
 choices[73][0] = "R.D. 156/1996 de 2 de Febrero.";
 choices[73][1] = "R.D. 428/1993 de 26 de Marzo.";
 choices[73][2] = "La LOFAGE.";
 choices[73][3] = "La Ley 30/1992 de 26 de Noviembre.";
 answers[73] = 1;
 units[73] = ['35'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 2408. ";
 preguntaids[73] = 2408


//  Id pregunta: 2335 Año de creación de pregunta: 2003
 questions[74]= "75)  La Ley Org&aacute;nica 15/1999 establece, en el apartado 2 del art&iacute;culo 22, las condiciones bajo las que las Fuerzas y Cuerpos de Seguridad pueden tratar datos personales con fines policiales sin estar sujetos a la ley:";
 choices[74]= new Array();
 choices[74][0] = "Cuando cuenten con la preceptiva autorizaci&oacute;n del Ministerio del Interior";
 choices[74][1] = "No existen excepciones. Se requiere obligatoriamente el consentimiento expreso del afectado";
 choices[74][2] = "Cuando resulte necesario para la prevenci&oacute;n de un peligro real para la seguridad p&uacute;blica o para la represi&oacute;n de infracciones penales";
 choices[74][3] = "Cuando lo autorice un juez";
 answers[74] = 2;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2335. ";
 preguntaids[74] = 2335


