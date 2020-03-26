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
//  Id pregunta: 1443 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cu&aacute;l de los siguientes datos sensibles NO est&aacute; especialmente protegido por la LOPD en su art&iacute;culo 7:";
 choices[0]= new Array();
 choices[0][0] = "De salud.";
 choices[0][1] = "Administrativos.";
 choices[0][2] = "De religi&oacute;n.";
 choices[0][3] = "De origen racial.";
 answers[0] = 1;
 units[0] = ['35'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 1443. ";
 preguntaids[0] = 1443


//  Id pregunta: 2383 Año de creación de pregunta: 2006
 questions[1]= "2)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[1]= new Array();
 choices[1][0] = "CPM (Critical Path Method).";
 choices[1][1] = "PERT.";
 choices[1][2] = "Diagrama de Gant.";
 choices[1][3] = "PROPS.";
 answers[1] = 0;
 units[1] = ['33'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2383. ";
 preguntaids[1] = 2383


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[2]= "3)  A tenor de lo que expresa la Ley 59/2003 en su art&iacute;culo 31 relativo a infracciones, se&ntilde;ale cu&aacute;l de las siguientes ser&iacute;a considerada muy grave:";
 choices[2]= new Array();
 choices[2][0] = "La falta de constituci&oacute;n por los prestadores que expidan certificados reconocidos de la garant&iacute;a econ&oacute;mica para afrontar el riesgo de la responsabilidad por los da&ntilde;os y perjuicios que pueda ocasionar el uso de los certificados que expidan.";
 choices[2][1] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el prestador de servicios de certificaci&oacute;n haya expedido un certificado reconocido, y que este hecho haya causado da&ntilde;os graves al usuario.";
 choices[2][2] = "El incumplimiento de las resoluciones dictadas por el Ministerio de Ciencia y Tecnolog&iacute;a para asegurar que el prestador de servicios de certificaci&oacute;n se ajuste a esta Ley.";
 choices[2][3] = "La resistencia, obstrucci&oacute;n, excusa o negativa injustificada a la actuaci&oacute;n inspectora de los &oacute;rganos facultados en esta Ley.";
 answers[2] = 1;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 443. AGE A2 2015";
 preguntaids[2] = 443


//  Id pregunta: 8432 Año de creación de pregunta: 2011
 questions[3]= "4)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[3]= new Array();
 choices[3][0] = "El &oacute;rgano titular de la sede";
 choices[3][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[3][2] = "El &oacute;rgano que origine la informaci&oacute;n que se deba incluir en la sede judicial electr&oacute;nica";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = 2;
 units[3] = ['2'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 8432. ";
 preguntaids[3] = 8432


//  Id pregunta: 4256 Año de creación de pregunta: 2006
 questions[4]= "5)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da al liderazgo?";
 choices[4]= new Array();
 choices[4][0] = "15";
 choices[4][1] = "10";
 choices[4][2] = "20";
 choices[4][3] = "9";
 answers[4] = 1;
 units[4] = ['98'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 4256. ";
 preguntaids[4] = 4256


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano de seguimiento y control de los fondos de empleo de &aacute;mbito nacional?";
 choices[5]= new Array();
 choices[5][0] = "El Servicio P&uacute;blico de Empleo Estatal";
 choices[5][1] = "La Inspecci&oacute;n de Trabajo y Seguridad Social";
 choices[5][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[5][3] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 answers[5] = 3;
 units[5] = ['15'];
 blocks[5] = ['A3'];
 comments[5] = "Id Pregunta: 430. Modelo econ&oacute;mico";
 preguntaids[5] = 430


//  Id pregunta: 6641 Año de creación de pregunta: 2009
 questions[6]= "7)  UMTS en su est&aacute;ndar contempla como posibilidades para transmisi&oacute;n d&uacute;plex:";
 choices[6]= new Array();
 choices[6][0] = "CMDA o TDMA";
 choices[6][1] = "FDD o TDD";
 choices[6][2] = "FDMA u OFDMA";
 choices[6][3] = "TCDMA";
 answers[6] = 1;
 units[6] = ['117'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 6641. ";
 preguntaids[6] = 6641


//  Id pregunta: 6468 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;C&uacute;al de los siguientes protocolos de encaminamiento NO es interno?";
 choices[7]= new Array();
 choices[7][0] = "BGP";
 choices[7][1] = "EIGRP";
 choices[7][2] = "OSPF";
 choices[7][3] = "IGRP";
 answers[7] = 0;
 units[7] = ['102'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 6468. ";
 preguntaids[7] = 6468


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[8]= "9)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[8]= new Array();
 choices[8][0] = "Cinco a&ntilde;os.";
 choices[8][1] = "Cuatro a&ntilde;os.";
 choices[8][2] = "Tres a&ntilde;os.";
 choices[8][3] = "Seis meses.";
 answers[8] = 2;
 units[8] = ['5'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 123. Uni&oacute;n Europea";
 preguntaids[8] = 123


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[9]= new Array();
 choices[9][0] = "La Comisi&oacute;n Permanente.";
 choices[9][1] = "El Presidente.";
 choices[9][2] = "El Pleno.";
 choices[9][3] = "El Vicepresidente.";
 answers[9] = 1;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 88. Constituci&oacute;n de 1978";
 preguntaids[9] = 88


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley 39/2015 tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[10]= new Array();
 choices[10][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[10][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[10][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[10][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[10] = 2;
 units[10] = ['7'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 211. Ley 39/2015";
 preguntaids[10] = 211


//  Id pregunta: 3712 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;En qu&eacute; consiste la teor&iacute;a de la Productividad aplicada a la implantaci&oacute;n de la calidad?:";
 choices[11]= new Array();
 choices[11][0] = "Un producto de calidad es m&aacute;s caro de producir";
 choices[11][1] = "Un producto de calidad es m&aacute;s dif&iacute;cil de producir";
 choices[11][2] = "Un producto de calidad es m&aacute;s r&aacute;pido de producir";
 choices[11][3] = "Un producto de calidad es m&aacute;s barato de producir";
 answers[11] = 3;
 units[11] = ['93'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3712. ";
 preguntaids[11] = 3712


//  Id pregunta: 8173 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP?";
 choices[12]= new Array();
 choices[12][0] = "WSDL";
 choices[12][1] = "UDDI";
 choices[12][2] = "XML";
 choices[12][3] = "REST";
 answers[12] = 0;
 units[12] = ['55'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8173. Examen TIC A2 2010 interna";
 preguntaids[12] = 8173


//  Id pregunta: 2138 Año de creación de pregunta: 2004
 questions[13]= "14)  En el caso que se desee caracterizar la carga de un sistema inform&aacute;tico, qu&eacute; par&aacute;metro no se deber&iacute;a tener en cuenta:";
 choices[13]= new Array();
 choices[13][0] = "Tiempo de CPU por trabajo.";
 choices[13][1] = "Tiempo de reflexi&oacute;n del usuario.";
 choices[13][2] = "Memoria necesaria para ejecutar un trabajo.";
 choices[13][3] = "Troughput.";
 answers[13] = 3;
 units[13] = ['39'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2138. ";
 preguntaids[13] = 2138


//  Id pregunta: 4715 Año de creación de pregunta: 2002
 questions[14]= "15)  GPS es:";
 choices[14]= new Array();
 choices[14][0] = "General Packet System, Sistema general de paquetes, protocolo de tipo general del que GPRS (General Packet Radio System) es su particularizaci&oacute;n para las comunicaciones v&iacute;a radio";
 choices[14][1] = "Gaussian Phase Shifting, cambio de fase gaussiano, tipo de modulaci&oacute;n usada com&uacute;nmente en los intercambios de informaci&oacute;n mediante t&eacute;cnicas telem&aacute;ticas";
 choices[14][2] = "Group Pulling System, sistema de ofrecimiento a grupos, muy usado en tecnolog&iacute;as de difusi&oacute;n multimedia (en especial TV digital y canales de internet) para enviar informaci&oacute;n a colectivos";
 choices[14][3] = "Global Positioning System, sistema de posicionamiento global, usado como m&eacute;todo de localizaci&oacute;n v&iacute;a radio y usando sat&eacute;lites para el c&aacute;lculo de las coordenadas";
 answers[14] = 3;
 units[14] = ['117'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4715. ";
 preguntaids[14] = 4715


//  Id pregunta: 2609 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal de un ordenador?:";
 choices[15]= new Array();
 choices[15][0] = "Volatilidad del contenido";
 choices[15][1] = "Tiempo de acceso peque&ntilde;o";
 choices[15][2] = "Direccionabilidad";
 choices[15][3] = "Acceso a trav&eacute;s de canal desde la unidad central de proceso";
 answers[15] = 3;
 units[15] = ['50'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2609. ";
 preguntaids[15] = 2609


//  Id pregunta: 10249 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[16]= new Array();
 choices[16][0] = ".PFX";
 choices[16][1] = ".DER";
 choices[16][2] = ".P7B";
 choices[16][3] = "Todos lo son";
 answers[16] = 3;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10249. ";
 preguntaids[16] = 10249


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[17]= "18)  El pacto fiscal europeo de 2012 incluye:";
 choices[17]= new Array();
 choices[17][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[17][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[17][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[17][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[17] = 0;
 units[17] = ['5'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 102. Uni&oacute;n Europea";
 preguntaids[17] = 102


//  Id pregunta: 4406 Año de creación de pregunta: 2002
 questions[18]= "19)  Dado un cable coaxial de longitud 1 metro, donde se aplica una potencia de 1 mW, y se obtiene en el otro extremo una potencia de salida de 0.1 mW, se puede decir que el cable presenta unas p&eacute;rdidas de:";
 choices[18]= new Array();
 choices[18][0] = "10 dB/m";
 choices[18][1] = "20 dB/m";
 choices[18][2] = "1 dB/m";
 choices[18][3] = "5 dB/m";
 answers[18] = 0;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4406. ";
 preguntaids[18] = 4406


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[19]= "20)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[19]= new Array();
 choices[19][0] = "Municipios, provincias y CCAA.";
 choices[19][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[19][2] = "En CCAA, 50 provincias y municipios.";
 choices[19][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[19] = 2;
 units[19] = ['1'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 85. Constituci&oacute;n de 1978";
 preguntaids[19] = 85


//  Id pregunta: 5025 Año de creación de pregunta: 2002
 questions[20]= "21)  PCM es:";
 choices[20]= new Array();
 choices[20][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[20][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[20][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[20][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[20] = 0;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5025. ";
 preguntaids[20] = 5025


//  Id pregunta: 2372 Año de creación de pregunta: 2004
 questions[21]= "22)  Un fichero automatizado con (DNI, Nombre, Apellidos, Domicilio, Titulaci&oacute;n Acad&eacute;mica, Grado y Tipo de Minusval&iacute;a) requiere medidas de tipo:";
 choices[21]= new Array();
 choices[21][0] = "B&aacute;sico";
 choices[21][1] = "Medio";
 choices[21][2] = "Alto";
 choices[21][3] = "Cr&iacute;tico";
 answers[21] = 2;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2372. Junta Andaluc&iacute;a 2002";
 preguntaids[21] = 2372


//  Id pregunta: 4829 Año de creación de pregunta: 2002
 questions[22]= "23)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[22]= new Array();
 choices[22][0] = "X especifica el n&uacute;mero de servidores.";
 choices[22][1] = "Y especifica la capacidad del sistema.";
 choices[22][2] = "Ninguna de las anteriores es v&aacute;lida.";
 choices[22][3] = "Las respuestas 'a' y 'b' son ciertas.";
 answers[22] = 3;
 units[22] = ['56'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 4829. ";
 preguntaids[22] = 4829


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[23]= "24)  El Tribunal de Justicia est&aacute; formado por:";
 choices[23]= new Array();
 choices[23][0] = "Un Juez de cada Estado miembro.";
 choices[23][1] = "Por dos Jueces de cada Estado miembro.";
 choices[23][2] = "Por veinte Jueces.";
 choices[23][3] = "Por ocho Jueces.";
 answers[23] = 0;
 units[23] = ['5'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 142. Uni&oacute;n Europea";
 preguntaids[23] = 142


//  Id pregunta: 6944 Año de creación de pregunta: 2010
 questions[24]= "25)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[24]= new Array();
 choices[24][0] = "Cada 6 meses";
 choices[24][1] = "Cada a&ntilde;o";
 choices[24][2] = "Cada 2 a&ntilde;os";
 choices[24][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[24] = 3;
 units[24] = ['43'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 6944. ";
 preguntaids[24] = 6944


//  Id pregunta: 4390 Año de creación de pregunta: 2005
 questions[25]= "26)  Al instalar un cortafuegos (firewall) para la protecci&oacute;n de un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[25]= new Array();
 choices[25][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[25][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[25][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[25][3] = "Todas las anteriores";
 answers[25] = 3;
 units[25] = ['119'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4390. Magerit V2";
 preguntaids[25] = 4390


//  Id pregunta: 9433 Año de creación de pregunta: 2014
 questions[26]= "27)  En el encaminamiento por vector-distancia cada router:";
 choices[26]= new Array();
 choices[26][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[26][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[26][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[26][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[26] = 0;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9433. ";
 preguntaids[26] = 9433


//  Id pregunta: 6411 Año de creación de pregunta: 2003
 questions[27]= "28)  Indica cu&aacute;l no es una ventaja de la tecnolog&iacute;a JSF:";
 choices[27]= new Array();
 choices[27][0] = "Ofrece un alto nivel de abstracci&oacute;n en el dise&ntilde;o de la interfaz";
 choices[27][1] = "JSF comparada con otras tecnolog&iacute;as MVC (Spring MVC, Struts, WebWork, Tapestry,&hellip;) est&aacute; mas orientada a componetes y eventos";
 choices[27][2] = "Para el desarrollo de aplicaciones se basa en la implementaci&oacute;n de complejas clases Java";
 choices[27][3] = "Permite la creaci&oacute;n de nuevos componentes graficos o widgets";
 answers[27] = 2;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 6411. ";
 preguntaids[27] = 6411


//  Id pregunta: 7574 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[28]= new Array();
 choices[28][0] = "Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo.";
 choices[28][1] = "EUROMARC es la versi&oacute;n europea de dicho formato.";
 choices[28][2] = "Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60.";
 choices[28][3] = "Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic Description).";
 answers[28] = 2;
 units[28] = ['68'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7574. Map 2006";
 preguntaids[28] = 7574


//  Id pregunta: 8610 Año de creación de pregunta: 2013
 questions[29]= "30)  No es una forma de presentar contenidos en un LMS:";
 choices[29]= new Array();
 choices[29][0] = "Estructura lineal";
 choices[29][1] = "Estructura matricial";
 choices[29][2] = "Estructura jer&aacute;rquica";
 choices[29][3] = "Estructura en red";
 answers[29] = 1;
 units[29] = ['70'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8610. ";
 preguntaids[29] = 8610


//  Id pregunta: 8008 Año de creación de pregunta: 2011
 questions[30]= "31)  Entre las t&eacute;cnicas usadas en miner&iacute;a de datos se encuentran las redes neuronales artificiales, &iquest;cu&aacute;l de los siguientes es uno de sus modelos?";
 choices[30]= new Array();
 choices[30][0] = "Redes de Shelman.";
 choices[30][1] = "Redes de Coperfield.";
 choices[30][2] = "Redes ART.";
 choices[30][3] = "M&aacute;quina de Gauss.";
 answers[30] = 2;
 units[30] = ['72'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8008. Examen TIC A2 2010";
 preguntaids[30] = 8008


//  Id pregunta: 8268 Año de creación de pregunta: 2011
 questions[31]= "32)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[31]= new Array();
 choices[31][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[31][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[31][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[31][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[31] = 1;
 units[31] = ['7'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 8268. Examen TIC A2 2010 interna";
 preguntaids[31] = 8268


//  Id pregunta: 1462 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale c&oacute;mo se clasifica la situaci&oacute;n de dependencia conforme a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[32]= new Array();
 choices[32][0] = "En dos grados, cada uno dividido en dos niveles.";
 choices[32][1] = "En dos grados, cada uno dividido en tres niveles.";
 choices[32][2] = "En tres grados, cada uno dividido en dos niveles.";
 choices[32][3] = "En tres grados, cada uno dividido en tres niveles.";
 answers[32] = 2;
 units[32] = ['14'];
 blocks[32] = ['A3'];
 comments[32] = "Id Pregunta: 1462. ";
 preguntaids[32] = 1462


//  Id pregunta: 6257 Año de creación de pregunta: 2003
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes opciones no es una herramienta de Dise&ntilde;o de Sistemas en Tiempo Real?";
 choices[33]= new Array();
 choices[33][0] = "DARTS.";
 choices[33][1] = "UML - RT.";
 choices[33][2] = "Rational Rose - RT.";
 choices[33][3] = "PERTS.";
 answers[33] = 0;
 units[33] = ['86'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 6257. ";
 preguntaids[33] = 6257


//  Id pregunta: 3091 Año de creación de pregunta: 2002
 questions[34]= "35)  Un sistema SUN:";
 choices[34]= new Array();
 choices[34][0] = "Puede utilizar procesadores Sparc";
 choices[34][1] = "Puede utilizar procesadores MIPS";
 choices[34][2] = "Puede utilizar procesadores Intel";
 choices[34][3] = "A y C son ciertas";
 answers[34] = 3;
 units[34] = ['53'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3091. ";
 preguntaids[34] = 3091


//  Id pregunta: 1350 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; es el Marco Com&uacute;n de Evaluaci&oacute;n (CAF) 2013?";
 choices[35]= new Array();
 choices[35][0] = "CAF ofrece dos sistemas de puntuaci&oacute;n, el cl&aacute;sico y el refinado, solo el primero de ellos est&aacute; fundamentado sobre el Ciclo de Deming.";
 choices[35][1] = "Es uno del los ejes del modelo EFQM.";
 choices[35][2] = "Es una herramienta de gesti&oacute;n de la calidad total, desarrollada por y para el sector p&uacute;blico.";
 choices[35][3] = "Es una autoevaluaci&oacute;n que debe realizar una organizaci&oacute;n conforme a lo que dicta la norma ISO 9000.";
 answers[35] = 2;
 units[35] = ['98'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 1350. ";
 preguntaids[35] = 1350


//  Id pregunta: 8052 Año de creación de pregunta: 2011
 questions[36]= "37)  Indique la respuesta INCORRECTA sobre el protocolo SMB:";
 choices[36]= new Array();
 choices[36][0] = "Protocolo de red que permite compartir archivos e impresoras (entre otras cosas) entre nodos de una red";
 choices[36][1] = "Microsoft a&ntilde;adi&oacute; algunas extensiones al protocolo y lo renombr&oacute; como CIFS (Common Internet File Syslem).";
 choices[36][2] = "Las iniciales SMB responden a Service Message Block";
 choices[36][3] = "SAMBA es una implementaci&oacute;n libre del protocolo para entornos GNU/Linux y Unix.";
 answers[36] = 2;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8052. Examen TIC A2 2010";
 preguntaids[36] = 8052


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[37]= "38)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[37]= new Array();
 choices[37][0] = "Prevenir las conductas discriminatorias.";
 choices[37][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[37][2] = "Todas son correctas.";
 choices[37][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[37] = 2;
 units[37] = ['14'];
 blocks[37] = ['A3'];
 comments[37] = "Id Pregunta: 389. Pol&iacute;ticas de igualdad";
 preguntaids[37] = 389


//  Id pregunta: 4416 Año de creación de pregunta: 2002
 questions[38]= "39)  Indique cu&aacute;l de las opciones refleja m&aacute;s adecuadamente las caracter&iacute;sticas de un cable coaxial:";
 choices[38]= new Array();
 choices[38][0] = "Un cable coaxial es un medio de transmisi&oacute;n constituido por dos hilos conductores aislados entre si y dispuestos de forma paralela a lo largo de todo su recorrido";
 choices[38][1] = "Un cable coaxial est&aacute; constituido por dos hilos conductores paralelos aislados y recubiertos por una l&aacute;mina conductora";
 choices[38][2] = "Un cable coaxial est&aacute; constituido por un hilo conductor central rodeado de una lamina conductora conc&eacute;ntrica con &eacute;l y separado por un medio aislante";
 choices[38][3] = "Un cable coaxial est&aacute; constituido por un conjunto de conductores aislados entre si y torsionados sobre ellos mismos en grupos de cuatro, encerrados todos ellos por una lamina o cubierta conductora";
 answers[38] = 2;
 units[38] = ['104'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4416. ";
 preguntaids[38] = 4416


//  Id pregunta: 4911 Año de creación de pregunta: 2002
 questions[39]= "40)  La recomendaci&oacute;n RFC-1006 define:";
 choices[39]= new Array();
 choices[39][0] = "Funciones de un protocolo de red";
 choices[39][1] = "El protocolo de transporte TCP";
 choices[39][2] = "El protocolo de transporte UDP";
 choices[39][3] = "Protocolo de convergencia de TCP a TP0";
 answers[39] = 3;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4911. ";
 preguntaids[39] = 4911


//  Id pregunta: 8019 Año de creación de pregunta: 2011
 questions[40]= "41)  Dentro de las arquitecturas de almacenamiento, las siglas inglesas SSA responden a:";
 choices[40]= new Array();
 choices[40][0] = "Serialized Storage Area.";
 choices[40][1] = "Serial Storage Area.";
 choices[40][2] = "Serial Storage Architecture.";
 choices[40][3] = "Serialized Storage Architecture.";
 answers[40] = 2;
 units[40] = ['53'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8019. Examen TIC A2 2010";
 preguntaids[40] = 8019


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


//  Id pregunta: 9319 Año de creación de pregunta: 2014
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[42]= new Array();
 choices[42][0] = "Pago mediante cargo en cuenta";
 choices[42][1] = "Pago con tarjeta";
 choices[42][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[42][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[42] = 3;
 units[42] = ['10'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 9319. ";
 preguntaids[42] = 9319


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[43]= "44)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[43]= new Array();
 choices[43][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[43][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[43][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[43][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[43] = 0;
 units[43] = ['7'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 254. Ley 39/2015";
 preguntaids[43] = 254


//  Id pregunta: 10707 Año de creación de pregunta: 2015
 questions[44]= "45)  La RFC del IETF que hace referencia al modelo de directorio LDAP es:";
 choices[44]= new Array();
 choices[44][0] = "RFC 3161";
 choices[44][1] = "RFC 4510";
 choices[44][2] = "RFC 4120";
 choices[44][3] = "RFC 6101";
 answers[44] = 1;
 units[44] = ['77'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10707. ";
 preguntaids[44] = 10707


//  Id pregunta: 8579 Año de creación de pregunta: 2013
 questions[45]= "46)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[45]= new Array();
 choices[45][0] = "Fuertemente acoplados.";
 choices[45][1] = "Muy desacoplados";
 choices[45][2] = "Un procesador no depende de lo que hace otro";
 choices[45][3] = "Todas las respuestas con correctas";
 answers[45] = 0;
 units[45] = ['49'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8579. ";
 preguntaids[45] = 8579


//  Id pregunta: 7379 Año de creación de pregunta: 2010
 questions[46]= "47)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Autoridad de Certificaci&oacute;n";
 choices[46][1] = "Autoridad de Registro";
 choices[46][2] = "Centro de Confianza";
 choices[46][3] = "Autoridad de Revocaci&oacute;n";
 answers[46] = 0;
 units[46] = ['78'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7379. Examen TIC B 2009";
 preguntaids[46] = 7379


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[47]= "48)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Igualdad.";
 choices[47][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[47][2] = "Ambas son correctas.";
 choices[47][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[47] = 1;
 units[47] = ['14'];
 blocks[47] = ['A3'];
 comments[47] = "Id Pregunta: 402. Pol&iacute;ticas de igualdad";
 preguntaids[47] = 402


//  Id pregunta: 7207 Año de creación de pregunta: 2010
 questions[48]= "49)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[48]= new Array();
 choices[48][0] = "Onda de superficie";
 choices[48][1] = "Onda ionosf&eacute;rica";
 choices[48][2] = "Onda espacial";
 choices[48][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[48] = 2;
 units[48] = ['117'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7207. Castilla La Mancha 2009";
 preguntaids[48] = 7207


//  Id pregunta: 10314 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es un derecho de los ciudadanos de acuerdo con la ley 39/2015?";
 choices[49]= new Array();
 choices[49][0] = "A relacionarse directamente con las AAPP.";
 choices[49][1] = "A no aportar datos y documentos que obren en poder de las Administraciones P&uacute;blicas";
 choices[49][2] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicos de los documentos electr&oacute;nicos que formen parte de un expediente por duplicado";
 choices[49][3] = "A elegir en cada momento el canal a trav&eacute;s del cual se relacionen con la Administraci&oacute;n";
 answers[49] = 2;
 units[49] = ['43'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 10314. ";
 preguntaids[49] = 10314


//  Id pregunta: 10458 Año de creación de pregunta: 2015
 questions[50]= "51)  Seleccione la opci&oacute;n correcta m&aacute;s precisa sobre las obligaciones previas a la expedici&oacute;n de certificados reconocidos incluida en la ley de firma electr&oacute;nica:";
 choices[50]= new Array();
 choices[50][0] = "Asegurarse de que el firmante est&aacute; en posesi&oacute;n de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[50][1] = "Asegurarse de que el firmante tiene el control exclusivo sobre el uso de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[50][2] = "La respuesta B) es correcta, la cual fue a&ntilde;adida por la ley 25/2015 de reducci&oacute;n de la carga financiera y otras medidas de orden social, que introduc&iacute;a cambios en la Ley 59/2003 de firma electr&oacute;nica para dar soporte jur&iacute;dico a la denominada firma en la nube.";
 choices[50][3] = "La respuesta A) es correcta, ya que la &uacute;ltima modificaci&oacute;n a la ley de firma electr&oacute;nica fue realizada por  la ley 9/2014 General de Telecomunicaciones, que ampliaba el periodo de validez de los certificados reconocidos a 5 a&ntilde;os.";
 answers[50] = 2;
 units[50] = ['77'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 10458. ";
 preguntaids[50] = 10458


//  Id pregunta: 8974 Año de creación de pregunta: 2013
 questions[51]= "52)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[51]= new Array();
 choices[51][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[51][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[51][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[51][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[51] = 3;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 8974. Examen TIC A1 2011";
 preguntaids[51] = 8974


//  Id pregunta: 6998 Año de creación de pregunta: 2010
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta, de acuerdo con M&eacute;trica 3?";
 choices[52]= new Array();
 choices[52][0] = "El objetivo de la gesti&oacute;n de la configuraci&oacute;n es mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realicen cambios";
 choices[52][1] = "Ejecutables y c&oacute;digo fuente son elementos de configuraci&oacute;n software pero no lo son las especificaciones de requisitos";
 choices[52][2] = "La gesti&oacute;n de configuraci&oacute;n se realiza durante todas las actividades asociadas al desarrollo del sistema, y contin&uacute;a registrando los cambios hasta que &eacute;ste deja de utilizarse";
 choices[52][3] = "La gesti&oacute;n de configuraci&oacute;n aporta informaci&oacute;n precisa para valorar el impacto de los cambios en el mantenimiento correctivo. La gesti&oacute;n de configuraci&oacute;n no contempla el mantenimiento evolutivo";
 answers[52] = 2;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6998. TIC-B 2009 bloque desarrollo";
 preguntaids[52] = 6998


//  Id pregunta: 10392 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[53]= new Array();
 choices[53][0] = "0.05";
 choices[53][1] = "0.01";
 choices[53][2] = "0.1";
 choices[53][3] = "0.2";
 answers[53] = 2;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 10392. ";
 preguntaids[53] = 10392


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta falsa. Seg&uacute;n la Norma t&eacute;cnica de interoperabilidad de reutilizaci&oacute;n de recursos de informaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Se considerar&aacute;n prioritarios los documentos y recursos de mayor relevancia y potencial social y econ&oacute;mico.";
 choices[54][1] = "Los documentos y recursos de informaci&oacute;n reutilizables ser&aacute;n primarios.";
 choices[54][2] = "El nivel granular ser&aacute; el m&aacute;s fino posible.";
 choices[54][3] = "Existir&aacute; una &uacute;nica forma de representaci&oacute;n asociada a cada recurso de informaci&oacute;n de forma que &eacute;ste sea identificado un&iacute;vocamente.";
 answers[54] = 3;
 units[54] = ['43'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 602. NTI";
 preguntaids[54] = 602


//  Id pregunta: 1195 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[55]= new Array();
 choices[55][0] = "RFID";
 choices[55][1] = "RSYNC";
 choices[55][2] = "RMAN";
 choices[55][3] = "RMON";
 answers[55] = 2;
 units[55] = ['60'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1195. ";
 preguntaids[55] = 1195


//  Id pregunta: 9075 Año de creación de pregunta: 2014
 questions[56]= "57)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[56]= new Array();
 choices[56][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[56][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[56][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[56][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[56] = 2;
 units[56] = ['71'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9075. ";
 preguntaids[56] = 9075


//  Id pregunta: 6196 Año de creación de pregunta: 2003
 questions[57]= "58)  La seguridad de los algoritmos de cifrado debe basarse en:";
 choices[57]= new Array();
 choices[57][0] = "Mantener el funcionamiento de los algoritmos en secreto.";
 choices[57][1] = "Utilizar sistemas propietarios.";
 choices[57][2] = "Demostrar su resistencia desde un punto de vista te&oacute;rico y pr&aacute;ctico.";
 choices[57][3] = "Utilizar tarjeta electr&oacute;nica";
 answers[57] = 2;
 units[57] = ['119'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 6196. Examen TIC A Castilla La Mancha 2007";
 preguntaids[57] = 6196


//  Id pregunta: 3442 Año de creación de pregunta: 2006
 questions[58]= "59)  &iquest;Con cu&aacute;l de las siguientes categor&iacute;as de software est&aacute; m&aacute;s relacionado el Business Intelligence?";
 choices[58]= new Array();
 choices[58][0] = "ERP.";
 choices[58][1] = "Datawarehouse y OLAP.";
 choices[58][2] = "Document Management y Content Management.";
 choices[58][3] = "SCM.";
 answers[58] = 1;
 units[58] = ['72'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3442. ";
 preguntaids[58] = 3442


//  Id pregunta: 7315 Año de creación de pregunta: 2010
 questions[59]= "60)  Seg&uacute;n M&eacute;trica el grupo de Aseguramiento de la Calidad participa en el proyecto bajo el perfil de";
 choices[59]= new Array();
 choices[59][0] = "Consultor";
 choices[59][1] = "Analista";
 choices[59][2] = "Calidad";
 choices[59][3] = "Experto";
 answers[59] = 1;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7315. ";
 preguntaids[59] = 7315


//  Id pregunta: 8593 Año de creación de pregunta: 2013
 questions[60]= "61)  &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta respecto a BIOS?";
 choices[60]= new Array();
 choices[60][0] = "Es un software que se almacena en EPROM pero que no se puede considerar b&aacute;sico";
 choices[60][1] = "Se refresca cada vez que arranca el PC";
 choices[60][2] = "Es el primer software que se ejecuta en el proceso de arranque de una placa base";
 choices[60][3] = "No se puede reprogramar";
 answers[60] = 2;
 units[60] = ['56'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8593. ";
 preguntaids[60] = 8593


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[61]= new Array();
 choices[61][0] = "Tiene car&aacute;cter facultativo.";
 choices[61][1] = "Tiene car&aacute;cter potestativo.";
 choices[61][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[61][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[61] = 1;
 units[61] = ['22'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 500. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[61] = 500


//  Id pregunta: 7943 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast?";
 choices[62]= new Array();
 choices[62][0] = "256";
 choices[62][1] = "254";
 choices[62][2] = "30";
 choices[62][3] = "64";
 answers[62] = 1;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7943. Examen TIC A2 2010";
 preguntaids[62] = 7943


//  Id pregunta: 10230 Año de creación de pregunta: 2015
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = "Modelo de Datos a Modelo est&aacute;tico";
 choices[63][1] = "Modelo de Objetos a Modelo funcional";
 choices[63][2] = "Modelo de Procesos a Modelo din&aacute;mico";
 choices[63][3] = "Modelo de Estados a Modelo funcional";
 answers[63] = 0;
 units[63] = ['60'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 10230. ";
 preguntaids[63] = 10230


//  Id pregunta: 7360 Año de creación de pregunta: 2010
 questions[64]= "65)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[64]= new Array();
 choices[64][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[64][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[64][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[64][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[64] = 3;
 units[64] = ['56'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7360. Examen TIC B 2009";
 preguntaids[64] = 7360


//  Id pregunta: 9896 Año de creación de pregunta: 2015
 questions[65]= "66)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[65]= new Array();
 choices[65][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[65][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[65][2] = "Ambas.";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = 2;
 units[65] = ['7', '19'];
 blocks[65] = ['A2', 'A4'];
 comments[65] = "Id Pregunta: 9896. ";
 preguntaids[65] = 9896


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[66]= new Array();
 choices[66][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[66][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[66][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[66][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[66] = 1;
 units[66] = ['14'];
 blocks[66] = ['A3'];
 comments[66] = "Id Pregunta: 355. Estado del Bienestar";
 preguntaids[66] = 355


//  Id pregunta: 1796 Año de creación de pregunta: 2016
 questions[67]= "68)  Al realizar una presentaci&oacute;n telem&aacute;tica en un registro electr&oacute;nico, el registro electr&oacute;nico recibe la documentaci&oacute;n y genera un recibo para el ciudadano. Este recibo va firmado electr&oacute;nicamente por la administraci&oacute;n mediante un certificado de:";
 choices[67]= new Array();
 choices[67][0] = "Sede Electr&oacute;nica";
 choices[67][1] = "Empleado P&uacute;blico";
 choices[67][2] = "De Componente";
 choices[67][3] = "Sello electr&oacute;nico o sello de &oacute;rgano";
 answers[67] = 3;
 units[67] = ['7'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 1796. ";
 preguntaids[67] = 1796


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[68]= "69)  La ley de Okun se refiere a:";
 choices[68]= new Array();
 choices[68][0] = "La relaci&oacute;n emp&iacute;rica entre las variables tasa de desempleo y producci&oacute;n de un pa&iacute;s.";
 choices[68][1] = "La relaci&oacute;n inversa entre la inflaci&oacute;n y el desempleo de un pa&iacute;s.";
 choices[68][2] = "La relaci&oacute;n entre la tasa de desempleo y el n&uacute;mero de vacantes sin cubrir respecto del total de empleos.";
 choices[68][3] = "Las relaciones entre los insumos capital (K), trabajo (L) y tecnolog&iacute;a o productividad total de los factores (PTF)";
 answers[68] = 0;
 units[68] = ['15'];
 blocks[68] = ['A3'];
 comments[68] = "Id Pregunta: 425. Modelo econ&oacute;mico";
 preguntaids[68] = 425


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[69]= "70)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[69]= new Array();
 choices[69][0] = "De los interesados en el procedimiento";
 choices[69][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[69][2] = "Disposiciones generales";
 choices[69][3] = "De los actos administrativos";
 answers[69] = 2;
 units[69] = ['7'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 220. Ley 39/2015";
 preguntaids[69] = 220


//  Id pregunta: 1282 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el Real Decreto 1720/2007, Reglamento de desarrollo de la Ley Organica 15/1999, se aplicar&aacute;n las medidas de seguridad del nivel alto:";
 choices[70]= new Array();
 choices[70][0] = "A los ficheros que contengan o se refieran a datos recabados para fines policiales sin consentimiento de las personas afectadas.";
 choices[70][1] = "A los ficheros que contengan un conjunto de datos de car&aacute;cter personal que permitan evaluar determinados aspectos de la personalidad.";
 choices[70][2] = "A los ficheros de los que sean responsables Administraciones tributarias y se relacionen con el ejercicio de sus potestades tributarias.";
 choices[70][3] = "Los ficheros que contengan datos relativos a la comisi&oacute;n de infracciones administrativas o penales.";
 answers[70] = 0;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 1282. ";
 preguntaids[70] = 1282


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[71]= new Array();
 choices[71][0] = "El estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[71][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[71][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[71][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[71] = 0;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 8. Constituci&oacute;n de 1978";
 preguntaids[71] = 8


//  Id pregunta: 4850 Año de creación de pregunta: 2002
 questions[72]= "73)  En un sistema en el que todos los usuarios necesitan el mismo servicio:";
 choices[72]= new Array();
 choices[72][0] = "Todos los usuarios esperan el mismo tiempo para ser atendidos.";
 choices[72][1] = "El tiempo total de servicio es el mismo y no depende del patr&oacute;n de llegadas.";
 choices[72][2] = "S&oacute;lo se puede acotar el tiempo m&iacute;nimo de espera.";
 choices[72][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[72] = 3;
 units[72] = ['30'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 4850. ";
 preguntaids[72] = 4850


//  Id pregunta: 7273 Año de creación de pregunta: 2010
 questions[73]= "74)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[73]= new Array();
 choices[73][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[73][1] = "La capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[73][2] = "El esquema de codificaci&oacute;n";
 choices[73][3] = "Todas las respuestas anteriores son ciertas";
 answers[73] = 3;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7273. ";
 preguntaids[73] = 7273


//  Id pregunta: 1661 Año de creación de pregunta: 2016
 questions[74]= "75)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica depende de:";
 choices[74]= new Array();
 choices[74][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[74][1] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[74][2] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[74][3] = "Presidencia del Gobierno.";
 answers[74] = 0;
 units[74] = ['7'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 1661. ";
 preguntaids[74] = 1661


