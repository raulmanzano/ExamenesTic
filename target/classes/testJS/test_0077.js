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
//  Id pregunta: 10789 Año de creación de pregunta: 2015
 questions[0]= "1)  De acuerdo al Real Decreto 806/2014, el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de las contrataciones de bienes y servicios inform&aacute;ticos se emitir&aacute; en el plazo m&aacute;ximo de:";
 choices[0]= new Array();
 choices[0][0] = "Diez d&iacute;as h&aacute;biles posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[0][1] = "Diez d&iacute;as naturales posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[0][2] = "Quince d&iacute;as h&aacute;biles posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[0][3] = "Quince d&iacute;as naturales posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 answers[0] = 0;
 units[0] = ['37'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 10789. ";
 preguntaids[0] = 10789


//  Id pregunta: 9099 Año de creación de pregunta: 2014
 questions[1]= "2)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[1]= new Array();
 choices[1][0] = "48 meses.";
 choices[1][1] = "24 meses.";
 choices[1][2] = "12 meses.";
 choices[1][3] = "6 meses.";
 answers[1] = 2;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 9099. Examen TIC-A1 2013";
 preguntaids[1] = 9099


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[2]= new Array();
 choices[2][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[2][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[2][2] = "Las respuestas a) b) no son correctas.";
 choices[2][3] = "Las respuestas a) y b) son correctas.";
 answers[2] = 3;
 units[2] = ['11'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 298. Presupuestos generales";
 preguntaids[2] = 298


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[3]= "4)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[3]= new Array();
 choices[3][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[3][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[3][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[3][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[3] = 0;
 units[3] = ['11'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 317. Presupuestos generales";
 preguntaids[3] = 317


//  Id pregunta: 10203 Año de creación de pregunta: 2015
 questions[4]= "5)  Se&ntilde;ale la respuesta correcta respecto al modelo de Desarrollo R&aacute;pido de Aplicaciones (RAD) para el desarrollo de nuevas aplicaciones:";
 choices[4]= new Array();
 choices[4][0] = "El RAD no es un modelo adecuado si la nueva aplicaci&oacute;n hace uso de tecnolog&iacute;as nuevas.";
 choices[4][1] = "Aunque un sistema no se pueda modularizar adecuadamente, la construcci&oacute;n de los componentes necesarios para RAD no ser&aacute; problem&aacute;tico.";
 choices[4][2] = "El RAD no es adecuado cuando el software nuevo no requiere un alto grado de interoperatividad con aplicaciones ya existentes.";
 choices[4][3] = "Es un modelo de proceso del desarrollo del software en espiral que enfatiza un ciclo de desarrollo extremadamente corto.";
 answers[4] = 0;
 units[4] = ['82'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10203. Examen TIC A1 2014";
 preguntaids[4] = 10203


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[5]= new Array();
 choices[5][0] = "las personas jur&iacute;dicas";
 choices[5][1] = "las entidades con personalidad jur&iacute;dica";
 choices[5][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[5][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[5] = 1;
 units[5] = ['7'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 245. Ley 39/2015";
 preguntaids[5] = 245


//  Id pregunta: 1319 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale de entre las siguientes, la norma que establece los requisitos para el dise&ntilde;o y desarrollo de la documentaci&oacute;n del software de usuario como parte de los procesos del ciclo de vida:";
 choices[6]= new Array();
 choices[6][0] = "ISO/IEC 26514.";
 choices[6][1] = "ISO 7816.";
 choices[6][2] = "ISO/IEC 12207.";
 choices[6][3] = "ISO 8859.";
 answers[6] = 0;
 units[6] = ['82'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1319. ";
 preguntaids[6] = 1319


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[7]= "8)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[7]= new Array();
 choices[7][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[7][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[7][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[7][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[7] = 2;
 units[7] = ['7'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 249. Ley 39/2015";
 preguntaids[7] = 249


//  Id pregunta: 6114 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&quot;Secure Socket Layer&quot;) es correcta?:";
 choices[8]= new Array();
 choices[8][0] = "S&oacute;lo proporciona servicios de seguridad para el protocolo HTTP (&quot;HyperText Transfer Protocol&quot;)";
 choices[8][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir";
 choices[8][2] = "El protocolo se implementa entre los niveles de Transporte y de Red";
 choices[8][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n";
 answers[8] = 3;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6114. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6114


//  Id pregunta: 1775 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el art. 18 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[9]= new Array();
 choices[9][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de opini&oacute;n de las personas.";
 choices[9][1] = "La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 choices[9][2] = "Se garantiza el secreto inviolable de las comunicaciones postales, telegr&aacute;ficas y telef&oacute;nicas.";
 choices[9][3] = "Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen, salvo resoluci&oacute;n judicial.";
 answers[9] = 1;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 1775. ";
 preguntaids[9] = 1775


//  Id pregunta: 10070 Año de creación de pregunta: 2015
 questions[10]= "11)  En Linux, la primera partici&oacute;n l&oacute;gica en el disco duro maestro IDE del canal primario se identifica con:";
 choices[10]= new Array();
 choices[10][0] = "/dev/sda1";
 choices[10][1] = "/dev/hda1";
 choices[10][2] = "/dev/hda5";
 choices[10][3] = "/dev/hda2";
 answers[10] = 2;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10070. Examen TIC A2 2014";
 preguntaids[10] = 10070


//  Id pregunta: 8500 Año de creación de pregunta: 2011
 questions[11]= "12)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[11]= new Array();
 choices[11][0] = "De baja capacidad y elevado alcance.";
 choices[11][1] = "De alta capacidad y reducido alcance.";
 choices[11][2] = "De alta capacidad y elevado alcance.";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = 2;
 units[11] = ['106'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8500. Teleco Ayto. Madrid 2010";
 preguntaids[11] = 8500


//  Id pregunta: 5892 Año de creación de pregunta: 2007
 questions[12]= "13)  El modelo espiral WinWin define los siguientes hitos en el proceso:";
 choices[12]= new Array();
 choices[12][0] = "Objetivos del ciclo de vida, arquitectura del ciclo de vida y capacidad operativa iniclal.";
 choices[12][1] = "Alcance del sistema y tama&ntilde;o del sistema.";
 choices[12][2] = "Verificaci&oacute;n de requisitos, verificaci&oacute;n de funcionalidades y verificaci&oacute;n de codigo";
 choices[12][3] = "El modelo espiral WinWin no define hitos en el proceso";
 answers[12] = 3;
 units[12] = ['82'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 5892. ";
 preguntaids[12] = 5892


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[13]= "14)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[13]= new Array();
 choices[13][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[13][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[13][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[13][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[13] = 2;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[13] = 18


//  Id pregunta: 4923 Año de creación de pregunta: 2002
 questions[14]= "15)  La tecnolog&iacute;a de red de &aacute;rea local PMD-FDDI:";
 choices[14]= new Array();
 choices[14][0] = "Trabaja a 125 Mhz";
 choices[14][1] = "Utiliza codificaci&oacute;n 4B/5B NRZI";
 choices[14][2] = "Transmite a 100 Mbps";
 choices[14][3] = "Todas las respuestas anteriores son correctas";
 answers[14] = 3;
 units[14] = ['112'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4923. ";
 preguntaids[14] = 4923


//  Id pregunta: 7411 Año de creación de pregunta: 2010
 questions[15]= "16)  Entre las ventajas de la virtualizaci&oacute;n de hardware no se encuentra";
 choices[15]= new Array();
 choices[15][0] = "La reducci&oacute;n de costes de administraci&oacute;n";
 choices[15][1] = "La eficiencia energ&eacute;tica";
 choices[15][2] = "El incremento de rendimiento de las aplicaciones";
 choices[15][3] = "Mayor aprovechamiento de los servidores";
 answers[15] = 2;
 units[15] = ['124'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7411. ";
 preguntaids[15] = 7411


//  Id pregunta: 6825 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Qu&eacute; es CMOT?";
 choices[16]= new Array();
 choices[16][0] = "Significa Common Management Interface Protocol Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[16][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT";
 choices[16][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica";
 choices[16][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[16] = 0;
 units[16] = ['114'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 6825. ";
 preguntaids[16] = 6825


//  Id pregunta: 2261 Año de creación de pregunta: 2002
 questions[17]= "18)  Los mecanismos de salvaguarda, de acuerdo a MAGERIT son:";
 choices[17]= new Array();
 choices[17][0] = "Un dispositivo l&oacute;gico que reduce el riesgo";
 choices[17][1] = "Un dispositivo f&iacute;sico que reduce el riesgo";
 choices[17][2] = "Aquellos que operan de forma preventiva sobre la vulnerabilidad";
 choices[17][3] = "Todas las respuestas anteriores son correctas";
 answers[17] = 3;
 units[17] = ['45'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2261. ";
 preguntaids[17] = 2261


//  Id pregunta: 7318 Año de creación de pregunta: 2010
 questions[18]= "19)  Seg&uacute;n M&eacute;trica la Definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales:";
 choices[18]= new Array();
 choices[18][0] = "Se realiza en el proceso de An&aacute;lisis (ASI), conjuntamente con el Plan de Pruebas";
 choices[18][1] = "Se realiza en el proceso de Dise&ntilde;o (DSI), cuando se establecen los Requisitos de Implantaci&oacute;n";
 choices[18][2] = "Se realiza en el proceso de Construcci&oacute;n (CSI), en paralelo a la ejecuci&oacute;n de las Pruebas del Sistema";
 choices[18][3] = "Se realiza en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n (IAS), antes de las Pruebas de Aceptaci&oacute;n";
 answers[18] = 2;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 7318. ";
 preguntaids[18] = 7318


//  Id pregunta: 6085 Año de creación de pregunta: 2003
 questions[19]= "20)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es undispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[19]= new Array();
 choices[19][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse s&oacute;lo una vez y asegurarrazonablemente su secreto.";
 choices[19][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma ode la propia firma";
 choices[19][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;npor terceros.";
 choices[19][3] = "Que el dispositivo utilizado no alteren los datos o el documento que deba firmarse ni impidan que &eacute;ste semuestre al firmante antes del proceso de firma.";
 answers[19] = 1;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 6085. Examen TIC A1 MAP 2007";
 preguntaids[19] = 6085


//  Id pregunta: 3297 Año de creación de pregunta: 2004
 questions[20]= "21)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[20]= new Array();
 choices[20][0] = "Leve";
 choices[20][1] = "Grave";
 choices[20][2] = "Muy grave";
 choices[20][3] = "No constituye infracci&oacute;n";
 answers[20] = 0;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 3297. ";
 preguntaids[20] = 3297


//  Id pregunta: 1605 Año de creación de pregunta: 2016
 questions[21]= "22)  En el &aacute;mbito de las plataformas .NET, se&ntilde;ale cual de las siguientes afirmaciones es FALSA:";
 choices[21]= new Array();
 choices[21][0] = "En ADO.NET los comandos de datos se usan para empaquetar las instrucciones SQL o los procedimientos almacenados.";
 choices[21][1] = "En ADO.NET no se utiliza XML directamente cuando se trabaja con metadatos.";
 choices[21][2] = "En las aplicaciones Web ASP.NET, los componentes est&aacute;n desconectados entre s&iacute; inherentemente.";
 choices[21][3] = "En ADO.NET, el formato de transferencia de datos es XML.";
 answers[21] = 1;
 units[21] = ['63'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1605. ";
 preguntaids[21] = 1605


//  Id pregunta: 8508 Año de creación de pregunta: 2011
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[22]= new Array();
 choices[22][0] = "Postgres";
 choices[22][1] = "Hibernate";
 choices[22][2] = "TopLink";
 choices[22][3] = "Ibatis";
 answers[22] = 0;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8508. ";
 preguntaids[22] = 8508


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[23]= "24)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[23]= new Array();
 choices[23][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[23][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[23][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[23][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[23] = 1;
 units[23] = ['14'];
 blocks[23] = ['A3'];
 comments[23] = "Id Pregunta: 355. Estado del Bienestar";
 preguntaids[23] = 355


//  Id pregunta: 8527 Año de creación de pregunta: 2014
 questions[24]= "25)  Con respecto a las siguientes siglas:";
 choices[24]= new Array();
 choices[24][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[24][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[24][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[24][3] = "Todas las anteriores";
 answers[24] = 3;
 units[24] = ['108'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8527. ";
 preguntaids[24] = 8527


//  Id pregunta: 6770 Año de creación de pregunta: 2009
 questions[25]= "26)  &iquest;Qu&eacute; es com&uacute;n a todas las tecnolog&iacute;as de virtualizaci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Simulaci&oacute;n del Hardware Completo";
 choices[25][1] = "Simulaci&oacute;n del Sistema Operativo";
 choices[25][2] = "Ocultaci&oacute;n de los detalles t&eacute;cnicos a trav&eacute;s de la encapsulaci&oacute;n";
 choices[25][3] = "Paravirtualizaci&oacute;n, donde se ofrece un API especial que debe usarse modificando el sistema operativo &quot;guest&quot;";
 answers[25] = 2;
 units[25] = ['124'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 6770. ";
 preguntaids[25] = 6770


//  Id pregunta: 9183 Año de creación de pregunta: 2014
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[26]= new Array();
 choices[26][0] = "Pettabyte (PB).";
 choices[26][1] = "Terabyte (TB).";
 choices[26][2] = "Yottabyte (YB).";
 choices[26][3] = "Zettabyte (ZB).";
 answers[26] = 2;
 units[26] = ['56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9183. Examen TIC A2 2013";
 preguntaids[26] = 9183


//  Id pregunta: 10059 Año de creación de pregunta: 2015
 questions[27]= "28)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[27]= new Array();
 choices[27][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[27][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[27][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[27][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[27] = 1;
 units[27] = ['93'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 10059. Examen TIC A2 2014";
 preguntaids[27] = 10059


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[28]= "29)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[28]= new Array();
 choices[28][0] = "SMB3";
 choices[28][1] = "AFP";
 choices[28][2] = "NFS";
 choices[28][3] = "FTP";
 answers[28] = 0;
 units[28] = ['59'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 676. AGE A1 2015";
 preguntaids[28] = 676


//  Id pregunta: 5440 Año de creación de pregunta: 2007
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta respecto a las caracter&iacute;sticas de los puertos USB (Universal Serial Bus)?:";
 choices[29]= new Array();
 choices[29][0] = "Su rendimiento es superior al del puerto de serie, pero inferior al del puerto paralelo";
 choices[29][1] = "Pueden transferir datos a una velocidad de hasta 10Gbps";
 choices[29][2] = "S&oacute;lo permiten conectar 2^6=16 dispositivos a un mismo ordenador.";
 choices[29][3] = "Necesitan que el sistema operativo disponga de una utilidad USBMS (USB Management System).";
 answers[29] = 1;
 units[29] = ['51'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 5440. El est&aacute;ndar USB 3.1 soporta hasta 10 Gbps";
 preguntaids[29] = 5440


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[30]= new Array();
 choices[30][0] = "Ley 50/1997, del Gobierno.";
 choices[30][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[30][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[30][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[30] = 1;
 units[30] = ['11'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 291. Presupuestos generales";
 preguntaids[30] = 291


//  Id pregunta: 3279 Año de creación de pregunta: 2004
 questions[31]= "32)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[31]= new Array();
 choices[31][0] = "Leve";
 choices[31][1] = "Grave";
 choices[31][2] = "Muy grave";
 choices[31][3] = "No constituye infracci&oacute;n";
 answers[31] = 0;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 3279. Ley 34/2002, art&iacute;culo 38";
 preguntaids[31] = 3279


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[32]= new Array();
 choices[32][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[32][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[32][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[32][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[32] = 0;
 units[32] = ['1'];
 blocks[32] = ['A1'];
 comments[32] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[32] = 69


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[33]= new Array();
 choices[33][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[33][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[33][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[33][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[33] = 3;
 units[33] = ['22'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 499. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[33] = 499


//  Id pregunta: 8428 Año de creación de pregunta: 2011
 questions[34]= "35)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[34]= new Array();
 choices[34][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[34][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[34][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[34][3] = "En uno de los dos";
 answers[34] = 3;
 units[34] = ['2'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 8428. ";
 preguntaids[34] = 8428


//  Id pregunta: 4860 Año de creación de pregunta: 2002
 questions[35]= "36)  En una red TCP/IP, la conmutaci&oacute;n de nivel 4:";
 choices[35]= new Array();
 choices[35][0] = "No existe";
 choices[35][1] = "Se realiza mediante el identificador MAC del paquete IP";
 choices[35][2] = "Se realiza mediante el identificador de puerto del paquete IP";
 choices[35][3] = "Se realiza mediante el identificador de la direcci&oacute;n IP";
 answers[35] = 2;
 units[35] = ['105'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4860. ";
 preguntaids[35] = 4860


//  Id pregunta: 1007 Año de creación de pregunta: 2016
 questions[36]= "37)  Los Subdirectores generales:";
 choices[36]= new Array();
 choices[36][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[36][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[36][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[36][3] = "todas son correctas";
 answers[36] = 1;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 1007. Ley 40/2015";
 preguntaids[36] = 1007


//  Id pregunta: 2253 Año de creación de pregunta: 2002
 questions[37]= "38)  Las cuatro etapas del modelo inicial de Nolan son:";
 choices[37]= new Array();
 choices[37][0] = "Iniciaci&oacute;n, contagio, control y madurez";
 choices[37][1] = "Iniciaci&oacute;n, expansi&oacute;n, control y madurez";
 choices[37][2] = "Iniciaci&oacute;n, contagio, formalizaci&oacute;n y madurez";
 choices[37][3] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 answers[37] = 3;
 units[37] = ['24'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2253. ";
 preguntaids[37] = 2253


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[38]= new Array();
 choices[38][0] = "Indirecta.";
 choices[38][1] = "Directa.";
 choices[38][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[38][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[38] = 1;
 units[38] = ['14'];
 blocks[38] = ['A3'];
 comments[38] = "Id Pregunta: 1291. ";
 preguntaids[38] = 1291


//  Id pregunta: 1137 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; interfaces define M&eacute;trica v3?";
 choices[39]= new Array();
 choices[39][0] = "Aseguramiento de la Calidad, Seguridad, Gesti&oacute;n del Mantenimiento y Gesti&oacute;n de Proyectos.";
 choices[39][1] = "Aseguramiento de la Calidad, Gesti&oacute;n del Capital Humano, Seguridad y Gesti&oacute;n de Proyectos.";
 choices[39][2] = "Aseguramiento de la Calidad, Seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos.";
 choices[39][3] = "Seguridad, Mejora Continua, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos.";
 answers[39] = 2;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 1137. ";
 preguntaids[39] = 1137


//  Id pregunta: 1206 Año de creación de pregunta: 2016
 questions[40]= "41)  El est&aacute;ndar conocido como WRAN (Wireless Regional &Aacute;rea Network) pertenece al grupo de trabajo del IEEE:";
 choices[40]= new Array();
 choices[40][0] = "802.19";
 choices[40][1] = "802.2";
 choices[40][2] = "802.21";
 choices[40][3] = "802.22";
 answers[40] = 3;
 units[40] = ['112'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1206. ";
 preguntaids[40] = 1206


//  Id pregunta: 8616 Año de creación de pregunta: 2013
 questions[41]= "42)  Es un estandar en el campo de los Sistemas de Informaci&oacute;n Geogr&aacute;fica referente a los metadatos";
 choices[41]= new Array();
 choices[41][0] = "ISO 19110";
 choices[41][1] = "ISO 19125";
 choices[41][2] = "ISO 19115";
 choices[41][3] = "ISO 19122";
 answers[41] = 2;
 units[41] = ['71'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8616. ";
 preguntaids[41] = 8616


//  Id pregunta: 6124 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[42]= new Array();
 choices[42][0] = "24 meses";
 choices[42][1] = "5 a&ntilde;os";
 choices[42][2] = "30 meses";
 choices[42][3] = "4 a&ntilde;os";
 answers[42] = 1;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 6124. Examen TIC A1 MAP 2007";
 preguntaids[42] = 6124


//  Id pregunta: 9222 Año de creación de pregunta: 2014
 questions[43]= "44)  Atendiendo al RD 4/2010 de 8 de enero por el que se regula el Esquema Nacional deInteroperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la exigencia de que las Administraciones P&uacute;blicas deban usar est&aacute;ndares abiertos y, en su caso, est&aacute;ndares que sean de uso generalizado por los ciudadanos, es un principio de";
 choices[43]= new Array();
 choices[43][0] = "interoperabilidad t&eacute;cnica.";
 choices[43][1] = "interoperabilidad organizativa.";
 choices[43][2] = "gesti&oacute;n de riesgos.";
 choices[43][3] = "auditor&iacute;a de seguridad.";
 answers[43] = 0;
 units[43] = ['43'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 9222. Examen TIC A1 2013";
 preguntaids[43] = 9222


//  Id pregunta: 6222 Año de creación de pregunta: 2003
 questions[44]= "45)  En el modelo de referencia TCP/IP:";
 choices[44]= new Array();
 choices[44][0] = "No se definen las capas de sesi&oacute;n ni de aplicaci&oacute;n.";
 choices[44][1] = "No se definen las capas de red ni de sesi&oacute;n.";
 choices[44][2] = "No se definen las capas de presentaci&oacute;n ni de aplicaci&oacute;n.";
 choices[44][3] = "No se definen las capas de sesi&oacute;n ni de presentaci&oacute;n.";
 answers[44] = 3;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6222. Examen TIC A Castilla La Mancha 2007";
 preguntaids[44] = 6222


//  Id pregunta: 2695 Año de creación de pregunta: 2002
 questions[45]= "46)  Cada vez que un ciudadano utilice su tarjeta criptogr&aacute;fica CERES para firmar documentos que debe entregar a la Administraci&oacute;n, se&ntilde;ale qu&eacute; utilizaci&oacute;n estar&aacute; haciendo de las claves de cifrado:";
 choices[45]= new Array();
 choices[45][0] = "Cifrar&aacute; con su clave p&uacute;blica";
 choices[45][1] = "Cifrar&aacute; con la clave p&uacute;blica de la Administraci&oacute;n";
 choices[45][2] = "Cifrara con el certificado ra&iacute;z de la FNMT";
 choices[45][3] = "Cifrar&aacute; con su clave privada";
 answers[45] = 3;
 units[45] = ['78'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2695. ";
 preguntaids[45] = 2695


//  Id pregunta: 6873 Año de creación de pregunta: 2010
 questions[46]= "47)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[46]= new Array();
 choices[46][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[46][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[46][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[46][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[46] = 1;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 6873. TIC A 2009";
 preguntaids[46] = 6873


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[47]= new Array();
 choices[47][0] = "Publicidad.";
 choices[47][1] = "Constituci&oacute;n.";
 choices[47][2] = "Legalidad.";
 choices[47][3] = "Creaci&oacute;n.";
 answers[47] = 0;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 42. Constituci&oacute;n de 1978";
 preguntaids[47] = 42


//  Id pregunta: 2954 Año de creación de pregunta: 2002
 questions[48]= "49)  La t&eacute;cnica o tecnolog&iacute;a consistente en dise&ntilde;ar dispositivos microelectr&oacute;nicos de peque&ntilde;&iacute;simo tama&ntilde;o para, por ejemplo, introducirlos en el cuerpo humano e imitar el comportamiento de sus c&eacute;lulas, se denomina:";
 choices[48]= new Array();
 choices[48][0] = "Tecnolog&iacute;a milim&eacute;trica";
 choices[48][1] = "Microtecnolog&iacute;a";
 choices[48][2] = "Microb&oacute;tica";
 choices[48][3] = "Nanotecnolog&iacute;a";
 answers[48] = 3;
 units[48] = ['52'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2954. ";
 preguntaids[48] = 2954


//  Id pregunta: 3161 Año de creación de pregunta: 2002
 questions[49]= "50)  El creador de JAVA es:";
 choices[49]= new Array();
 choices[49][0] = "Microsoft";
 choices[49][1] = "IBM";
 choices[49][2] = "SUN Microsystems";
 choices[49][3] = "CERN";
 answers[49] = 2;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3161. ";
 preguntaids[49] = 3161


//  Id pregunta: 1818 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como un modelo de desarrollo de software en el &aacute;mbito de Ingenier&iacute;a de software";
 choices[50]= new Array();
 choices[50][0] = "Modelo incremental.";
 choices[50][1] = "Modelo lineal.";
 choices[50][2] = "Modelo espiral.";
 choices[50][3] = "Modelo relacional.";
 answers[50] = 3;
 units[50] = ['84'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 1818. ";
 preguntaids[50] = 1818


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[51]= new Array();
 choices[51][0] = "El Presidente del Gobierno.";
 choices[51][1] = "El Consejo de Ministros.";
 choices[51][2] = "40 Diputados.";
 choices[51][3] = "El Ministerio Fiscal.";
 answers[51] = 0;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 43. Constituci&oacute;n de 1978";
 preguntaids[51] = 43


//  Id pregunta: 9881 Año de creación de pregunta: 2015
 questions[52]= "53)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[52]= new Array();
 choices[52][0] = "1 de Junio de 2015";
 choices[52][1] = "1 de Julio de 2015";
 choices[52][2] = "2 de Octubre de 2015";
 choices[52][3] = "1 de Noviembre de 2015";
 answers[52] = 2;
 units[52] = ['7', '19'];
 blocks[52] = ['A2', 'A4'];
 comments[52] = "Id Pregunta: 9881. ";
 preguntaids[52] = 9881


//  Id pregunta: 4135 Año de creación de pregunta: 2003
 questions[53]= "54)  Principal inconveniente del teletexto:";
 choices[53]= new Array();
 choices[53][0] = "El juego de colores es reducido.";
 choices[53][1] = "Carece de interactividad real.";
 choices[53][2] = "La resoluci&oacute;n gr&aacute;fica no es buena.";
 choices[53][3] = "Necesita un decodificador caro y voluminoso.";
 answers[53] = 1;
 units[53] = ['80'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 4135. ";
 preguntaids[53] = 4135


//  Id pregunta: 6853 Año de creación de pregunta: 2010
 questions[54]= "55)  La gesti&oacute;n de los recursos humanos del proyecto incluye lo siguiente:";
 choices[54]= new Array();
 choices[54][0] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[54][1] = "Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[54][2] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto.";
 choices[54][3] = "Ninguna de las anteriores.";
 answers[54] = 0;
 units[54] = ['31'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 6853. ";
 preguntaids[54] = 6853


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[55]= new Array();
 choices[55][0] = "Reducir el gasto p&uacute;blico.";
 choices[55][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[55][2] = "Reducir el endeudamiento neto.";
 choices[55][3] = "Al Fondo de Contingencia.";
 answers[55] = 2;
 units[55] = ['11'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 325. Presupuestos generales";
 preguntaids[55] = 325


//  Id pregunta: 8977 Año de creación de pregunta: 2013
 questions[56]= "57)  Los certificados incorporados al DNI-e:";
 choices[56]= new Array();
 choices[56][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[56][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[56][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[56][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL5+ definido en la norma ISO/IEC 15408.";
 answers[56] = 3;
 units[56] = ['19'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 8977. Examen TIC A1 2011";
 preguntaids[56] = 8977


//  Id pregunta: 10833 Año de creación de pregunta: 2015
 questions[57]= "58)  Entre las siguientes afirmaciones sobre el formato JPEG, se&ntilde;ale la incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "Sus siglas vienen de Joint Photography Experts Group";
 choices[57][1] = "Soporta animaciones";
 choices[57][2] = "Es un formato de compresi&oacute;n con p&eacute;rdidas";
 choices[57][3] = "Usa la transformada discreta del coseno (DCT)";
 answers[57] = 1;
 units[57] = ['80'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 10833. ";
 preguntaids[57] = 10833


//  Id pregunta: 7482 Año de creación de pregunta: 2010
 questions[58]= "59)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[58]= new Array();
 choices[58][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[58][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[58][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[58][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[58] = 2;
 units[58] = ['77'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7482. Map 2005";
 preguntaids[58] = 7482


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[59][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[59][2] = "Ambas son correctas.";
 choices[59][3] = "La A y B son incorrectas.";
 answers[59] = 2;
 units[59] = ['14'];
 blocks[59] = ['A3'];
 comments[59] = "Id Pregunta: 397. Pol&iacute;ticas de igualdad";
 preguntaids[59] = 397


//  Id pregunta: 9521 Año de creación de pregunta: 2014
 questions[60]= "61)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[60]= new Array();
 choices[60][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[60][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[60][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[60][3] = "El usuario cierra la ventana del navegador";
 answers[60] = 0;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9521. ";
 preguntaids[60] = 9521


//  Id pregunta: 1184 Año de creación de pregunta: 2016
 questions[61]= "62)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[61]= new Array();
 choices[61][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[61][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[61][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[61][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[61] = 1;
 units[61] = ['93'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 1184. ";
 preguntaids[61] = 1184


//  Id pregunta: 5401 Año de creación de pregunta: 2006
 questions[62]= "63)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera seg&uacute;n el modelo OSI en el nivel de:";
 choices[62]= new Array();
 choices[62][0] = "transporte";
 choices[62][1] = "red";
 choices[62][2] = "f&iacute;sico";
 choices[62][3] = "enlace";
 answers[62] = 1;
 units[62] = ['102'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5401. ";
 preguntaids[62] = 5401


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[63]= new Array();
 choices[63][0] = "Las respuestas a) y b) son correctas.";
 choices[63][1] = "Las respuestas a) y b) no son correctas.";
 choices[63][2] = "Contenido coherente con los planes sectoriales.";
 choices[63][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[63] = 0;
 units[63] = ['11'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 283. Presupuestos generales";
 preguntaids[63] = 283


//  Id pregunta: 9324 Año de creación de pregunta: 2014
 questions[64]= "65)  Desde el punto de vista del &ldquo;Cloud Computing&rdquo;, Gmail es un ejemplo de";
 choices[64]= new Array();
 choices[64][0] = "PaaS (&ldquo;Platform as a Service&rdquo;).";
 choices[64][1] = "CaaS (&ldquo;Communication as a Service&rdquo;).";
 choices[64][2] = "IaaS (&ldquo;Infrastructure as a Service&rdquo;).";
 choices[64][3] = "SaaS (&ldquo;Software as a Service&rdquo;).";
 answers[64] = 3;
 units[64] = ['52'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9324. ";
 preguntaids[64] = 9324


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[65]= "66)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[65]= new Array();
 choices[65][0] = "Est&aacute; desarrollado en Java.";
 choices[65][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[65][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[65][3] = "Todas las afirmaciones son correctas.";
 answers[65] = 2;
 units[65] = ['92'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 839. Integraci&oacute;n continua";
 preguntaids[65] = 839


//  Id pregunta: 9677 Año de creación de pregunta: 2014
 questions[66]= "67)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[66]= new Array();
 choices[66][0] = "XOP XML-binary Optimized Protocol";
 choices[66][1] = "XOP XML-binary Optimized Packaging";
 choices[66][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[66][3] = "REST Represantional State Transfer";
 answers[66] = 2;
 units[66] = ['55'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9677. ";
 preguntaids[66] = 9677


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale cual NO es una de la herramientas colaborativas que ofrece Reunete (servicio de reuniones virtuales de la red SARA)";
 choices[67]= new Array();
 choices[67][0] = "Videoconferencia";
 choices[67][1] = "Palataforma de e-learning";
 choices[67][2] = "almacenamiento, gesti&oacute;n y reproducci&oacute;n de videos bajo demanda por streaming";
 choices[67][3] = "Env&iacute;o y recepci&oacute;n de documentos de gran tama&ntilde;o entre los usuarios de una organizaci&oacute;n como alternativa al correo";
 answers[67] = 3;
 units[67] = ['47'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 626. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[67] = 626


//  Id pregunta: 7179 Año de creación de pregunta: 2010
 questions[68]= "69)  Indique cu&aacute;l NO es una t&eacute;cnica de planificaci&oacute;n temporal:";
 choices[68]= new Array();
 choices[68][0] = "WBS (Work Breakdown Structure)";
 choices[68][1] = "PERT (Program Evaluation and Review Technique)";
 choices[68][2] = "Diagrama de Gantt";
 choices[68][3] = "CPM (Critical Path Method)";
 answers[68] = 0;
 units[68] = ['31'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 7179. Castilla La Mancha 2009";
 preguntaids[68] = 7179


//  Id pregunta: 4792 Año de creación de pregunta: 2002
 questions[69]= "70)  En el modelo OSI un encaminador o router:";
 choices[69]= new Array();
 choices[69][0] = "Trabaja en el nivel 4";
 choices[69][1] = "Trabaja en el nivel 7";
 choices[69][2] = "Trabaja en el nivel 3";
 choices[69][3] = "Trabaja en el nivel 5";
 answers[69] = 2;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4792. ";
 preguntaids[69] = 4792


//  Id pregunta: 5754 Año de creación de pregunta: 2007
 questions[70]= "71)  El modelo COCOMO (COnstructive COst Model):";
 choices[70]= new Array();
 choices[70][0] = "es un m&eacute;todo de medici&oacute;n de Ia funcionalidad de una aplicaci&oacute;n inform&aacute;tica.";
 choices[70][1] = "es un m&eacute;todo de evaluaci&oacute;n del interface de usuario.";
 choices[70][2] = "es un m&eacute;todo basado en estimaciones del numero de l&iacute;neas de c&oacute;digo.";
 choices[70][3] = "es un m&eacute;todo de planificaci&oacute;n del coste y esfuerzo.";
 answers[70] = 2;
 units[70] = ['94'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 5754. ";
 preguntaids[70] = 5754


//  Id pregunta: 10596 Año de creación de pregunta: 2015
 questions[71]= "72)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre gesti&oacute;n de suministradores es incorrecta?";
 choices[71]= new Array();
 choices[71][0] = "La gesti&oacute;n de suministradores negocia acuerdos de nivel operacional (OLA)";
 choices[71][1] = "La gesti&oacute;n de suministradores asegura que los suministradores cumplan con las expectativas del negocio";
 choices[71][2] = "La gesti&oacute;n de suministradores mantiene informaci&oacute;n en un sistema de gesti&oacute;n de suministradores y contratos";
 choices[71][3] = "La gesti&oacute;n de suministradores negocia acuerdos externos para ayudar en la provisi&oacute;n de servicios";
 answers[71] = 0;
 units[71] = ['101'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 10596. ";
 preguntaids[71] = 10596


//  Id pregunta: 2813 Año de creación de pregunta: 2002
 questions[72]= "73)  En el modelo cliente/servidor:";
 choices[72]= new Array();
 choices[72][0] = "Pueden elegirse distintos lenguajes de programaci&oacute;n para cada una de las partes";
 choices[72][1] = "Debe utilizarse siempre SQL para los procesos de tratamiento de datos";
 choices[72][2] = "El lenguaje para la parte cliente, debe permitir caracter&iacute;sticas de orientaci&oacute;n al objeto";
 choices[72][3] = "El lenguaje en el que se programen los procesos a ejecutarse en el cliente determina el que se debe utilizar para programar los procesos de los servidores";
 answers[72] = 0;
 units[72] = ['55'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2813. ";
 preguntaids[72] = 2813


//  Id pregunta: 10712 Año de creación de pregunta: 2015
 questions[73]= "74)  El &aacute;rbol formado por las entradas del directorio en LDAP, se llama:";
 choices[73]= new Array();
 choices[73][0] = "DIT";
 choices[73][1] = "Ltree";
 choices[73][2] = "LDS";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = 0;
 units[73] = ['77'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 10712. ";
 preguntaids[73] = 10712


//  Id pregunta: 9765 Año de creación de pregunta: 2014
 questions[74]= "75)  Cu&aacute;l de los siguientes debe ser el primer paso en una Auditor&iacute;a de Sistemas";
 choices[74]= new Array();
 choices[74][0] = "Crear un diagrama de flujo de las ramas de decisi&oacute;n.";
 choices[74][1] = "Comprender el entorno a estudiar";
 choices[74][2] = "Realizar una evaluaci&oacute;n de riesgos";
 choices[74][3] = "Desarrollar un plan de auditor&iacute;a";
 answers[74] = 1;
 units[74] = ['36'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 9765. Un auditor necesita obtener una comprensi&oacute;n de los procesos antes de crear un diagrama de flujo, evaluar los riesgos o desarrollar un plan de auditor&iacute;a";
 preguntaids[74] = 9765


