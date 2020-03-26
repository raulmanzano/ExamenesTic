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
//  Id pregunta: 2503 Año de creación de pregunta: 2004
 questions[0]= "1)  En la evoluci&oacute;n del Sistema Operativo Unix, a partir de los a&ntilde;os 70, surgieron diferentes variantes. &iquest;Cu&aacute;l de los siguientes sistemas no se corresponde con una de esas variantes?";
 choices[0]= new Array();
 choices[0][0] = "BSD";
 choices[0][1] = "MULTICS";
 choices[0][2] = "XENIX";
 choices[0][3] = "Sun OS";
 answers[0] = 1;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2503. Examen TIC MAP B 2004";
 preguntaids[0] = 2503


//  Id pregunta: 8422 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[1]= new Array();
 choices[1][0] = "Drill-Across.";
 choices[1][1] = "Drill-In.";
 choices[1][2] = "Roll-Up.";
 choices[1][3] = "Rotaci&oacute;n.";
 answers[1] = 2;
 units[1] = ['72'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8422. Operador Ayto. Madrid 2010";
 preguntaids[1] = 8422


//  Id pregunta: 1017 Año de creación de pregunta: 2016
 questions[2]= "3)  Los Delegados del Gobierno en las Comunidades Autonomas (se&ntilde;ala la incorrecta):";
 choices[2]= new Array();
 choices[2][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[2][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[2][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[2][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[2] = 2;
 units[2] = ['4', '7', '8', '9'];
 blocks[2] = ['A1', 'A2'];
 comments[2] = "Id Pregunta: 1017. Ley 40/2015";
 preguntaids[2] = 1017


//  Id pregunta: 10447 Año de creación de pregunta: 2015
 questions[3]= "4)  Entre los requisitos de la firma electr&oacute;nica avanzada no se encuentra:";
 choices[3]= new Array();
 choices[3][0] = "Que est&eacute; vinculada al firmante de manera &uacute;nica y permita su identificaci&oacute;n.";
 choices[3][1] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, con un alto nivel de confianza, bajo su control exclusivo.";
 choices[3][2] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, siempre bajo su control exclusivo.";
 choices[3][3] = "Que est&eacute; vinculada con los datos firmados de modo que detecte cualquier modificaci&oacute;n ulterior.";
 answers[3] = 2;
 units[3] = ['77'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10447. ";
 preguntaids[3] = 10447


//  Id pregunta: 1641 Año de creación de pregunta: 2016
 questions[4]= "5)  Las funciones &quot;hash&quot; en los procesos de firma electr&oacute;nica se emplean para:";
 choices[4]= new Array();
 choices[4][0] = "Garantizar la integridad de lo firmado.";
 choices[4][1] = "Asegurar la confidencialidad de lo firmado.";
 choices[4][2] = "Autenticar al firmante.";
 choices[4][3] = "Asegurar el no repudio del firmante.";
 answers[4] = 0;
 units[4] = ['76'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1641. ";
 preguntaids[4] = 1641


//  Id pregunta: 7305 Año de creación de pregunta: 2010
 questions[5]= "6)  Indicar cual de las siguientes opciones NO es un contrato de suministro:";
 choices[5]= new Array();
 choices[5][0] = "La compra de un ERP";
 choices[5][1] = "El mantenimiento de las licencias del SGBD";
 choices[5][2] = "El mantenimiento de la aplicaci&oacute;n que usa el SGBD";
 choices[5][3] = "El alquiler del sistema de telecomunicaciones";
 answers[5] = 2;
 units[5] = ['37'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 7305. ";
 preguntaids[5] = 7305


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[6]= "7)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[6]= new Array();
 choices[6][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[6][1] = "Ninguna de las respuestas es correcta.";
 choices[6][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[6][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[6] = 0;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 154. Uni&oacute;n Europea";
 preguntaids[6] = 154


//  Id pregunta: 10807 Año de creación de pregunta: 2015
 questions[7]= "8)  Un ejemplo de cliente de correo electr&oacute;nico de SW libre es:";
 choices[7]= new Array();
 choices[7][0] = "Amarok";
 choices[7][1] = "Firefox";
 choices[7][2] = "KeePass";
 choices[7][3] = "Thunderbird";
 answers[7] = 3;
 units[7] = ['66'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 10807. ";
 preguntaids[7] = 10807


//  Id pregunta: 2480 Año de creación de pregunta: 2004
 questions[8]= "9)  Un sistema multiproceso NUMA se diferencia de uno SMP en:";
 choices[8]= new Array();
 choices[8][0] = "Su menor escalabilidad.";
 choices[8][1] = "Su utilizaci&oacute;n de una red de &aacute;rea local en lugar de un bus para la comunicaci&oacute;n entre CPU's.";
 choices[8][2] = "Su utilizaci&oacute;n de m&aacute;s de un bus para comunicar CPU's y memoria.";
 choices[8][3] = "Su falta de mecanismos de coherencia de cache.";
 answers[8] = 2;
 units[8] = ['49'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2480. ";
 preguntaids[8] = 2480


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[9]= new Array();
 choices[9][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[9][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[9][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[9][3] = "Todos los anteriores";
 answers[9] = 3;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 467. Estrategia TIC";
 preguntaids[9] = 467


//  Id pregunta: 4757 Año de creación de pregunta: 2002
 questions[10]= "11)  El puerto com&uacute;nmente utilizado para aplicaciones de correo electr&oacute;nico es (SMTP) el:";
 choices[10]= new Array();
 choices[10][0] = "80";
 choices[10][1] = "25";
 choices[10][2] = "53";
 choices[10][3] = "21";
 answers[10] = 1;
 units[10] = ['116'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4757. ";
 preguntaids[10] = 4757


//  Id pregunta: 10330 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes no es una Shell de Linux?";
 choices[11]= new Array();
 choices[11][0] = "Shell X";
 choices[11][1] = "Shell de Korn";
 choices[11][2] = "Shell de Bourne";
 choices[11][3] = "Shell C";
 answers[11] = 0;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10330. ";
 preguntaids[11] = 10330


//  Id pregunta: 8225 Año de creación de pregunta: 2011
 questions[12]= "13)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[12]= new Array();
 choices[12][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[12][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[12][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[12][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[12] = 3;
 units[12] = ['106'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8225. Examen UPM A2 2011";
 preguntaids[12] = 8225


//  Id pregunta: 4592 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;En qu&eacute; consiste la funci&oacute;n de filtrado en un bridge?:";
 choices[13]= new Array();
 choices[13][0] = "Permitir el paso de determinadas frecuencias &uacute;nicamente";
 choices[13][1] = "Eliminaci&oacute;n de las tramas err&oacute;neas";
 choices[13][2] = "Separaci&oacute;n del tr&aacute;fico de dos subredes";
 choices[13][3] = "Los bridges (puentes) no tienen capacidad de filtrado, ya que operan al nivel de enlace";
 answers[13] = 2;
 units[13] = ['102'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4592. ";
 preguntaids[13] = 4592


//  Id pregunta: 8078 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[14]= new Array();
 choices[14][0] = "FTP.";
 choices[14][1] = "TFTP.";
 choices[14][2] = "DNS.";
 choices[14][3] = "Ninguno de los anteriores.";
 answers[14] = 2;
 units[14] = ['105', '109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8078. Analista Ayto. Madrid 2010";
 preguntaids[14] = 8078


//  Id pregunta: 3342 Año de creación de pregunta: 2004
 questions[15]= "16)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[15]= new Array();
 choices[15][0] = "Infracci&oacute;n muy grave";
 choices[15][1] = "Infracci&oacute;n grave";
 choices[15][2] = "Infracci&oacute;n leve";
 choices[15][3] = "No se considera infracci&oacute;n";
 answers[15] = 1;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 3342. Ley 34/2002, art&iacute;culo 38";
 preguntaids[15] = 3342


//  Id pregunta: 8473 Año de creación de pregunta: 2011
 questions[16]= "17)  El est&aacute;ndar de telefon&iacute;a m&oacute;vil LTE (Long Term Evolution), emplea";
 choices[16]= new Array();
 choices[16][0] = "MIMO";
 choices[16][1] = "FDD";
 choices[16][2] = "TDD";
 choices[16][3] = "Todas las anteriores";
 answers[16] = 3;
 units[16] = ['106'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8473. ";
 preguntaids[16] = 8473


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[17]= "18)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[17]= new Array();
 choices[17][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[17][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[17][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[17][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[17] = 0;
 units[17] = ['15'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 416. Mercado laboral";
 preguntaids[17] = 416


//  Id pregunta: 1415 Año de creación de pregunta: 2016
 questions[18]= "19)  El d&iacute;a 29 de diciembre del a&ntilde;o 1978, la Constituci&oacute;n Espa&ntilde;ola fue:";
 choices[18]= new Array();
 choices[18][0] = "Sancionada y promulgada por el Rey.";
 choices[18][1] = "Aprobada por los Plenos del Congreso y el Senado.";
 choices[18][2] = "Ratificada mediante refer&eacute;ndum por el pueblo espa&ntilde;ol.";
 choices[18][3] = "Ninguna es correcta.";
 answers[18] = 3;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 1415. ";
 preguntaids[18] = 1415


//  Id pregunta: 5192 Año de creación de pregunta: 2006
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes productos o marcas comerciales esta relacionado con un Buscador / Indexador?";
 choices[19]= new Array();
 choices[19][0] = "Verity";
 choices[19][1] = "Lucene";
 choices[19][2] = "Los dos anteriores";
 choices[19][3] = "Ninguno de los anteriores";
 answers[19] = 2;
 units[19] = ['103'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5192. ";
 preguntaids[19] = 5192


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[20]= new Array();
 choices[20][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[20][1] = "La delimitaci&oacute;n de su territorio.";
 choices[20][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[20][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[20] = 2;
 units[20] = ['1'];
 blocks[20] = ['A1'];
 comments[20] = "Id Pregunta: 58. Constituci&oacute;n de 1978";
 preguntaids[20] = 58


//  Id pregunta: 4666 Año de creación de pregunta: 2002
 questions[21]= "22)  De los cuatro octetos que forman una direcci&oacute;n del protocolo IP indicar en qu&eacute; clase de red se utiliza un octeto para los n&uacute;meros de host:";
 choices[21]= new Array();
 choices[21][0] = "Clase B";
 choices[21][1] = "Clase D";
 choices[21][2] = "Clase A";
 choices[21][3] = "Clase C";
 answers[21] = 3;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4666. ";
 preguntaids[21] = 4666


//  Id pregunta: 8747 Año de creación de pregunta: 2013
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un tipo de control?.";
 choices[22]= new Array();
 choices[22][0] = "Preventivo.";
 choices[22][1] = "Detectivo.";
 choices[22][2] = "Cognitivo.";
 choices[22][3] = "Todos los anteriores lo son.";
 answers[22] = 2;
 units[22] = ['45'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 8747. ";
 preguntaids[22] = 8747


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[23]= new Array();
 choices[23][0] = "La CETIC";
 choices[23][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[23][2] = "La DTIC";
 choices[23][3] = "El MHFP";
 answers[23] = 0;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 468. Estrategia TIC";
 preguntaids[23] = 468


//  Id pregunta: 9286 Año de creación de pregunta: 2014
 questions[24]= "25)  La actividad EVS-GC 1 de la interface de Gesti&oacute;n de la Configuraci&oacute;n (GC) de M&eacute;trica v3 recibe entre sus entradas un producto resultante de la actividad:";
 choices[24]= new Array();
 choices[24][0] = "EVS 4 - Estudio de Alternativas de Soluci&oacute;n";
 choices[24][1] = "EVS 5 - Valoraci&oacute;n de las Alternativas.";
 choices[24][2] = "EVS 3 - Definici&oacute;n de Requisitos del Sistema.";
 choices[24][3] = "EVS 1 - Establecimiento del Alcance del Sistema.";
 answers[24] = 2;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 9286. Examen TIC A2 2013. Promocion interna";
 preguntaids[24] = 9286


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[25]= "26)  La Poblaci&oacute;n Activa incluye a:";
 choices[25]= new Array();
 choices[25][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[25][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[25][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[25][3] = "Todo aquel que desea trabajar";
 answers[25] = 2;
 units[25] = ['15'];
 blocks[25] = ['A3'];
 comments[25] = "Id Pregunta: 415. Mercado laboral";
 preguntaids[25] = 415


//  Id pregunta: 5797 Año de creación de pregunta: 2007
 questions[26]= "27)  Los identificadores VPI/VCI tienen significado";
 choices[26]= new Array();
 choices[26][0] = "global para toda la red";
 choices[26][1] = "para cada conexi&oacute;n";
 choices[26][2] = "para cada enlace";
 choices[26][3] = "solo entre el terminal y el switch ATM";
 answers[26] = 2;
 units[26] = ['107'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5797. ";
 preguntaids[26] = 5797


//  Id pregunta: 6766 Año de creación de pregunta: 2009
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de un sistema de gesti&oacute;n de identidades respecto de la gesti&oacute;n de usuarios tradicional?";
 choices[27]= new Array();
 choices[27][0] = "Proporciona un punto &uacute;nico de provisi&oacute;n de usuarios para todos los sistemas de la organizaci&oacute;n";
 choices[27][1] = "Sincronizaci&oacute;n entre sistemas";
 choices[27][2] = "No existe una gesti&oacute;n centralizada del ciclo de vida de los usuarios";
 choices[27][3] = "Unificaci&oacute;n de contrase&ntilde;as en recursos";
 answers[27] = 2;
 units[27] = ['123'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 6766. ";
 preguntaids[27] = 6766


//  Id pregunta: 6274 Año de creación de pregunta: 2003
 questions[28]= "29)  En el proceso de reconocimiento de la voz, la fase en la que la informaci&oacute;n es grabada en formato digital es:";
 choices[28]= new Array();
 choices[28][0] = "Captura de la informaci&oacute;n";
 choices[28][1] = "Segmentaci&oacute;n y an&aacute;lisis de la se&ntilde;al";
 choices[28][2] = "Adaptaci&oacute;n al entorno";
 choices[28][3] = "Generar patrones";
 answers[28] = 0;
 units[28] = ['81'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 6274. ";
 preguntaids[28] = 6274


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[29]= "30)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[29]= new Array();
 choices[29][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[29][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[29][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[29][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[29] = 0;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[29] = 97


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[30]= "31)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[30]= new Array();
 choices[30][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[30][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[30][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[30][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[30] = 2;
 units[30] = ['47'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 620. AGE A1 2015";
 preguntaids[30] = 620


//  Id pregunta: 8124 Año de creación de pregunta: 2011
 questions[31]= "32)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "ISO/lEC 13335-2.";
 choices[31][1] = "ISO/lEC 27002:2013.";
 choices[31][2] = "UNE 71502:2004.";
 choices[31][3] = "ISO 10646.";
 answers[31] = 1;
 units[31] = ['119'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 8124. Examen TIC A2 2010";
 preguntaids[31] = 8124


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[32]= "33)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[32]= new Array();
 choices[32][0] = "apud acta";
 choices[32][1] = "presencialmente";
 choices[32][2] = "electr&oacute;nicamente";
 choices[32][3] = "todas son correctas";
 answers[32] = 3;
 units[32] = ['7'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 235. Ley 39/2015";
 preguntaids[32] = 235


//  Id pregunta: 6949 Año de creación de pregunta: 2010
 questions[33]= "34)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[33]= new Array();
 choices[33][0] = "Sello electr&oacute;nico";
 choices[33][1] = "DNI electr&oacute;nico";
 choices[33][2] = "Certificado de empleado p&uacute;blico";
 choices[33][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[33] = 0;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 6949. Articulo 21 RD 1671/2009";
 preguntaids[33] = 6949


//  Id pregunta: 6645 Año de creación de pregunta: 2009
 questions[34]= "35)  Indique cuales son las funciones fundamentales de la Comisi&oacute;n Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[34]= new Array();
 choices[34][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas. Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a. Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[34][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[34][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[34][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[34] = 0;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 6645. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[34] = 6645


//  Id pregunta: 5260 Año de creación de pregunta: 2006
 questions[35]= "36)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[35]= new Array();
 choices[35][0] = "La convergencia de las redes de voz y datos";
 choices[35][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[35][2] = "Ninguna de las anteriores";
 choices[35][3] = "tanto la opci&oacute;n a como la b";
 answers[35] = 3;
 units[35] = ['102', '107', '108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5260. ";
 preguntaids[35] = 5260


//  Id pregunta: 7366 Año de creación de pregunta: 2010
 questions[36]= "37)  En una aplicaci&oacute;n desarrollada para el entorno WINDOWS, la posibilidad de cambiar de base de datos relacional a la que se accede sin tener que modificar la aplicaci&oacute;n, est&aacute; garantizada por la utilizaci&oacute;n de";
 choices[36]= new Array();
 choices[36][0] = "Drivers ODBC";
 choices[36][1] = "La tecnolog&iacute;a COM";
 choices[36][2] = "Librer&iacute;as de carga din&aacute;mica (DLL)";
 choices[36][3] = "El API adecuado";
 answers[36] = 0;
 units[36] = ['58'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 7366. Examen TIC B 2009";
 preguntaids[36] = 7366


//  Id pregunta: 5954 Año de creación de pregunta: 2007
 questions[37]= "38)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, frecuencias o canales radioel&eacute;ctricos no adecuada al correspondiente plan de utilizaci&oacute;n del espectro radioel&eacute;ctrico o al Cuadro Nacional de Atribuci&oacute;n de Frecuencia:";
 choices[37]= new Array();
 choices[37][0] = "Es una infracci&oacute;n muy grave";
 choices[37][1] = "Es una infracci&oacute;n grave";
 choices[37][2] = "Es una infracci&oacute;n leve";
 choices[37][3] = "No es una infracci&oacute;n";
 answers[37] = 0;
 units[37] = ['121'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5954. ";
 preguntaids[37] = 5954


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[38]= new Array();
 choices[38][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[38][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[38][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[38][3] = "Sancionar y publicar las leyes.";
 answers[38] = 2;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 72. Constituci&oacute;n de 1978";
 preguntaids[38] = 72


//  Id pregunta: 1707 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique en qu&eacute; procesos de M&eacute;trica v.3, NO se llevan a cabo actividades relacionadas con la interfaz de Gesti&oacute;n de Configuraci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Estudio de viabilidad del sistema.";
 choices[39][1] = "Construcci&oacute;n del sistema de informaci&oacute;n.";
 choices[39][2] = "Mantenimiento de sistemas de informaci&oacute;n.";
 choices[39][3] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 answers[39] = 3;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 1707. ";
 preguntaids[39] = 1707


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[40]= "41)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[40]= new Array();
 choices[40][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[40][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[40][2] = "a y b son correctas";
 choices[40][3] = "a y b son incorrectas";
 answers[40] = 0;
 units[40] = ['7'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 247. Ley 39/2015";
 preguntaids[40] = 247


//  Id pregunta: 1008 Año de creación de pregunta: 2016
 questions[41]= "42)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[41]= new Array();
 choices[41][0] = "la capital del pa&iacute;s";
 choices[41][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[41][2] = "cada una de las provincias";
 choices[41][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[41] = 1;
 units[41] = ['4', '7', '8', '9'];
 blocks[41] = ['A1', 'A2'];
 comments[41] = "Id Pregunta: 1008. Ley 40/2015";
 preguntaids[41] = 1008


//  Id pregunta: 8725 Año de creación de pregunta: 2013
 questions[42]= "43)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[42]= new Array();
 choices[42][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[42][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado";
 choices[42][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[42][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[42] = 3;
 units[42] = ['50'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8725. Examen TICA2-2011";
 preguntaids[42] = 8725


//  Id pregunta: 8191 Año de creación de pregunta: 2011
 questions[43]= "44)  Se&ntilde;ale la respuesta correcta respecto a las cintas Ultrium LTO:";
 choices[43]= new Array();
 choices[43][0] = "Tienen un formato propietario";
 choices[43][1] = "Los lectores son compatibles con las cintas AIT de Sony.";
 choices[43][2] = "En su versi&oacute;n LTO 5. alcanza capacidades sin compresi&oacute;n de hasta 1,4 TB.";
 choices[43][3] = "No permiten ning&uacute;n tipo de cifrado.";
 answers[43] = 2;
 units[43] = ['53'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8191. Examen TIC A2 2010 interna";
 preguntaids[43] = 8191


//  Id pregunta: 7708 Año de creación de pregunta: 2010
 questions[44]= "45)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[44]= new Array();
 choices[44][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la clave primaria de otra relaci&oacute;n.";
 choices[44][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla.";
 choices[44][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas.";
 choices[44][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena pueden ser nulos.";
 answers[44] = 3;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7708. Map 2007";
 preguntaids[44] = 7708


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[45]= new Array();
 choices[45][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[45][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[45][2] = "Apertura al exterior";
 choices[45][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[45] = 0;
 units[45] = ['17'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 437. Mercado &Uacute;nico Digital";
 preguntaids[45] = 437


//  Id pregunta: 4270 Año de creación de pregunta: 2006
 questions[46]= "47)  Entre las fases de publicaci&oacute;n de un contenido no se encuentra";
 choices[46]= new Array();
 choices[46][0] = "Categorizaci&oacute;n";
 choices[46][1] = "Composici&oacute;n";
 choices[46][2] = "Difusi&oacute;n";
 choices[46][3] = "Normalizaci&oacute;n";
 answers[46] = 3;
 units[46] = ['99'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 4270. ";
 preguntaids[46] = 4270


//  Id pregunta: 3544 Año de creación de pregunta: 2004
 questions[47]= "48)  Se desea desarrollar un proyecto con programaci&oacute;n orientada a objetos en el que va a ser necesario utilizar herencia m&uacute;ltiple. &iquest;Qu&eacute; lenguaje no vamos a poder usar?";
 choices[47]= new Array();
 choices[47][0] = "Python.";
 choices[47][1] = "C++.";
 choices[47][2] = "Eiffel.";
 choices[47][3] = "Smalltalk.";
 answers[47] = 3;
 units[47] = ['89'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3544. Similar a examen TIC MAP A 2004";
 preguntaids[47] = 3544


//  Id pregunta: 2030 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Cu&aacute;les son los instrumentos b&aacute;sicos de un sistema de ayuda a la decisi&oacute;n orientado a datos?:";
 choices[48]= new Array();
 choices[48][0] = "Consultas predefinidas, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[48][1] = "Informes resumen, consultas predefinidas, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[48][2] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y Consultas predefinidas";
 choices[48][3] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 answers[48] = 3;
 units[48] = ['24'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 2030. ";
 preguntaids[48] = 2030


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[49]= "50)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[49]= new Array();
 choices[49][0] = "Medidas de igualdad.";
 choices[49][1] = "Objetivos de igualdad.";
 choices[49][2] = "Ambas son correctas.";
 choices[49][3] = "A y B son incorrectas.";
 answers[49] = 2;
 units[49] = ['14'];
 blocks[49] = ['A3'];
 comments[49] = "Id Pregunta: 383. Pol&iacute;ticas de igualdad";
 preguntaids[49] = 383


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[50]= "51)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Anualmente.";
 choices[50][1] = "Ninguna de las respuestas es correcta.";
 choices[50][2] = "Trimestralmente.";
 choices[50][3] = "Semestralmente.";
 answers[50] = 0;
 units[50] = ['11'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 293. Presupuestos generales";
 preguntaids[50] = 293


//  Id pregunta: 7942 Año de creación de pregunta: 2011
 questions[51]= "52)  El protocolo FTP es un protocolo:";
 choices[51]= new Array();
 choices[51][0] = "Seguro.";
 choices[51][1] = "Orientado a conexi&oacute;n.";
 choices[51][2] = "De nivel de enlace.";
 choices[51][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red.";
 answers[51] = 1;
 units[51] = ['103'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7942. Examen TIC A2 2010";
 preguntaids[51] = 7942


//  Id pregunta: 9455 Año de creación de pregunta: 2014
 questions[52]= "53)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[52]= new Array();
 choices[52][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[52][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[52][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[52][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[52] = 1;
 units[52] = ['7'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 9455. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[52] = 9455


//  Id pregunta: 6548 Año de creación de pregunta: 2009
 questions[53]= "54)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "son derechos independientes, de tal forma que no puede entenderse que el ejercicio de ninguno de ellos sea requisito previo para el ejercicio de otro";
 choices[53][1] = "son derechos dependientes, por lo que debe entenderse la necesidad de establecer un orden entre estos para su ejercicio";
 choices[53][2] = "son derechos dependientes, por lo que deben ejercerse es el oreden citado (acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n)";
 choices[53][3] = "El RD 1720/2007 no trata de estos derechos";
 answers[53] = 0;
 units[53] = ['35'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 6548. ";
 preguntaids[53] = 6548


//  Id pregunta: 8682 Año de creación de pregunta: 2013
 questions[54]= "55)  &iquest;Qu&eacute; es IPL (Initial Program Load)?";
 choices[54]= new Array();
 choices[54][0] = "Es el equivalente al Boot en z/OS";
 choices[54][1] = "El primer programa que se ejecuta cuando se hace un TSO logon.";
 choices[54][2] = "Carga de programa en modo batch en z/OS.";
 choices[54][3] = "Ninguna es correcta.";
 answers[54] = 0;
 units[54] = ['56'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8682. ";
 preguntaids[54] = 8682


//  Id pregunta: 3963 Año de creación de pregunta: 2002
 questions[55]= "56)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;Las relaciones de un diagrama de clases pueden ser&quot;:";
 choices[55]= new Array();
 choices[55][0] = "Agregaci&oacute;n.";
 choices[55][1] = "Coherencia.";
 choices[55][2] = "Herencia.";
 choices[55][3] = "Dependencia.";
 answers[55] = 1;
 units[55] = ['85', '89'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3963. ";
 preguntaids[55] = 3963


//  Id pregunta: 2257 Año de creación de pregunta: 2002
 questions[56]= "57)  Le han encargado realizar una auditor&iacute;a inform&aacute;tica de un centro de proceso de datos en el que, entre otros, se procesan datos fiscales de todas las empresas espa&ntilde;olas. Indique que recomendar&iacute;a solucionar con m&aacute;s urgencia:";
 choices[56]= new Array();
 choices[56][0] = "Las aplicaciones inform&aacute;ticas est&aacute;n insuficientemente documentadas";
 choices[56][1] = "Los equipos no est&aacute;n alimentados con fuentes de alimenta ininterrumpida (U.P.S.)";
 choices[56][2] = "Las copias de seguridad en cinta se guardan junto con las cintas de datos";
 choices[56][3] = "El equipamiento utilizado no responde a la filosof&iacute;a de 'sistemas abiertos'";
 answers[56] = 2;
 units[56] = ['36'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 2257. ";
 preguntaids[56] = 2257


//  Id pregunta: 6541 Año de creación de pregunta: 2003
 questions[57]= "58)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n, en un lugar diferente de aquel en que se encuentran los equipos inform&aacute;ticas que los tratan:";
 choices[57]= new Array();
 choices[57][0] = "nivel b&aacute;sico";
 choices[57][1] = "nivel medio";
 choices[57][2] = "nivel alto";
 choices[57][3] = "En ningun caso";
 answers[57] = 2;
 units[57] = ['35'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 6541. ";
 preguntaids[57] = 6541


//  Id pregunta: 9161 Año de creación de pregunta: 2014
 questions[58]= "59)  Cual de los siguientes NO es un elemento VoiceXML 2.0:";
 choices[58]= new Array();
 choices[58][0] = "&lt;input&gt;";
 choices[58][1] = "&lt;transfer&gt;";
 choices[58][2] = "&lt;object&gt;";
 choices[58][3] = "&lt;log&gt;";
 answers[58] = 0;
 units[58] = ['81'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9161. Examen TIC A2 2013";
 preguntaids[58] = 9161


//  Id pregunta: 8974 Año de creación de pregunta: 2013
 questions[59]= "60)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[59]= new Array();
 choices[59][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[59][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[59][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[59][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[59] = 3;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 8974. Examen TIC A1 2011";
 preguntaids[59] = 8974


//  Id pregunta: 10012 Año de creación de pregunta: 2015
 questions[60]= "61)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[60]= new Array();
 choices[60][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[60][1] = "Estructura de respuesta a incidentes.";
 choices[60][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[60][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[60] = 1;
 units[60] = ['36', '45'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 10012. Examen TIC A2 2014";
 preguntaids[60] = 10012


//  Id pregunta: 6073 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?:";
 choices[61]= new Array();
 choices[61][0] = "ADSL";
 choices[61][1] = "Grupos noticias (news)";
 choices[61][2] = "FTP";
 choices[61][3] = "IRC";
 answers[61] = 0;
 units[61] = ['103'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6073. Examen TIC A1 MAP 2007";
 preguntaids[61] = 6073


//  Id pregunta: 6775 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;Qu&eacute; elemento NO forma parte del modelo EFQM de excelencia?";
 choices[62]= new Array();
 choices[62][0] = "Procesos";
 choices[62][1] = "Personas";
 choices[62][2] = "Resultados en los clientes";
 choices[62][3] = "Resultados en los proveedores";
 answers[62] = 3;
 units[62] = ['98'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6775. Castilla La Mancha 2009";
 preguntaids[62] = 6775


//  Id pregunta: 3413 Año de creación de pregunta: 2006
 questions[63]= "64)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas...";
 choices[63]= new Array();
 choices[63][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[63][1] = "Utilizan slots donde cada slot se corresponde con una idea";
 choices[63][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[63][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[63] = 0;
 units[63] = ['68'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3413. ";
 preguntaids[63] = 3413


//  Id pregunta: 7657 Año de creación de pregunta: 2010
 questions[64]= "65)  Los casos de uso son una t&eacute;cnica eficaz para la determinaci&oacute;n de necesidades. &Eacute;stos fueron creados por:";
 choices[64]= new Array();
 choices[64][0] = "Warnier-Orr.";
 choices[64][1] = "Rumbaugh.";
 choices[64][2] = "Jacobson.";
 choices[64][3] = "Booch.";
 answers[64] = 2;
 units[64] = ['84'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 7657. Map 2006";
 preguntaids[64] = 7657


//  Id pregunta: 9112 Año de creación de pregunta: 2014
 questions[65]= "66)  Indique la sentencia correcta respecto al an&aacute;lisis del factor dolor (Pain Value Analysis), es una t&eacute;cnica:";
 choices[65]= new Array();
 choices[65][0] = "Para ayudar a identificar el impacto en el negocio de uno o m&aacute;s problemas.";
 choices[65][1] = "Para calcular el l&iacute;mite m&aacute;ximo de usuarios que el sistema es capaz de gestionar, teniendo en cuenta la capacidad del hardware y el n&uacute;mero de peticiones de cada usuario.";
 choices[65][2] = "Para la asignaci&oacute;n de prioridades a diferentes actividades, dice que el 80% del valor de una actividad es generado por el 20% del esfuerzo.";
 choices[65][3] = "Acu&ntilde;ada en los a&ntilde;os 80, cuya finalidad era calcular la capacidad f&iacute;sica de los usuarios del sistema inform&aacute;tico.";
 answers[65] = 0;
 units[65] = ['36'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 9112. Examen TIC A2 2013";
 preguntaids[65] = 9112


//  Id pregunta: 4671 Año de creación de pregunta: 2002
 questions[66]= "67)  Del protocolo IKE de IPSec podemos decir:";
 choices[66]= new Array();
 choices[66][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[66][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[66][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[66][3] = "nada de lo anterior es cierto";
 answers[66] = 0;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4671. Consultar rfc 2409";
 preguntaids[66] = 4671


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[67][1] = "Auditor&iacute;a operativa.";
 choices[67][2] = "Auditor&iacute;a de cumplimiento.";
 choices[67][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[67] = 2;
 units[67] = ['11'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 290. Presupuestos generales";
 preguntaids[67] = 290


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[68]= "69)  Son proyectos de Apache relacionados con Big Data:";
 choices[68]= new Array();
 choices[68][0] = "Hadoop";
 choices[68][1] = "Spark";
 choices[68][2] = "A) y B)";
 choices[68][3] = "Niguno de los anteriores";
 answers[68] = 2;
 units[68] = ['73'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 748. Big Data y NoSQL";
 preguntaids[68] = 748


//  Id pregunta: 6306 Año de creación de pregunta: 2003
 questions[69]= "70)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[69]= new Array();
 choices[69][0] = "Los FCE ayudan a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n";
 choices[69][1] = "Factores de &eacute;xito son los objetivos de la organizaci&oacute;n";
 choices[69][2] = "FCE son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[69][3] = "Para definir los FCE de la organizaci&oacute;n, es necesario que los objetivos de la misma est&eacute;n claramente definidos";
 answers[69] = 1;
 units[69] = ['83'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 6306. ";
 preguntaids[69] = 6306


//  Id pregunta: 4015 Año de creación de pregunta: 2002
 questions[70]= "71)  Una m&aacute;scara en tratamiento digital de im&aacute;genes es:";
 choices[70]= new Array();
 choices[70][0] = "Una matriz num&eacute;rica que se usa para ir haciendo operaciones aritm&eacute;ticas sobre cada uno de los distintos p&iacute;xeles de la imagen, provocando un cambio en los valores de los p&iacute;xeles de la imagen tratada";
 choices[70][1] = "Una zona de la imagen donde no var&iacute;an sus propiedades de color, brillo ni saturaci&oacute;n";
 choices[70][2] = "Una herramienta para poder colorear por capas en los programas ofim&aacute;ticos de tratamiento de im&aacute;genes";
 choices[70][3] = "Nada de lo anterior";
 answers[70] = 0;
 units[70] = ['80'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 4015. ";
 preguntaids[70] = 4015


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[71][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[71][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[71][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[71] = 1;
 units[71] = ['7'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 210. Ley 39/2015";
 preguntaids[71] = 210


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[72]= new Array();
 choices[72][0] = "El 2 de Octubre de 2015";
 choices[72][1] = "El 15 de Septiembre de 2015";
 choices[72][2] = "El 1 de Octubre de 2015";
 choices[72][3] = "El 5 de Octubre de 2015";
 answers[72] = 0;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 455. Estrategia TIC";
 preguntaids[72] = 455


//  Id pregunta: 996 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo al articulo 56 de la ley 40/2015, las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[73]= new Array();
 choices[73][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[73][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[73][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[73][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[73] = 0;
 units[73] = ['4', '7', '8', '9'];
 blocks[73] = ['A1', 'A2'];
 comments[73] = "Id Pregunta: 996. Ley 40/2015";
 preguntaids[73] = 996


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[74]= "75)  El comando en Linux que muestra los usuarios conectados al sistema y el tiempo de conexi&oacute;n es:";
 choices[74]= new Array();
 choices[74][0] = "wall";
 choices[74][1] = "wc";
 choices[74][2] = "whereis";
 choices[74][3] = "who";
 answers[74] = 3;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 666. AGE A2 2015";
 preguntaids[74] = 666


