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
//  Id pregunta: 7249 Año de creación de pregunta: 2010
 questions[0]= "1)  Una tarjeta de memoria";
 choices[0]= new Array();
 choices[0][0] = "Puede procesar informaci&oacute;n";
 choices[0][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[0][2] = "Nunca puede procesar informaci&oacute;n";
 choices[0][3] = "Son un tipo de tarjeta inteligente";
 answers[0] = 2;
 units[0] = ['119'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7249. ";
 preguntaids[0] = 7249


//  Id pregunta: 8264 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[1]= new Array();
 choices[1][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[1][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[1][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[1][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[1] = 1;
 units[1] = ['7'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 8264. Examen TIC A2 2010 interna";
 preguntaids[1] = 8264


//  Id pregunta: 4117 Año de creación de pregunta: 2003
 questions[2]= "3)  Gesti&oacute;n de documentos y gesti&oacute;n de contenidos:";
 choices[2]= new Array();
 choices[2][0] = "Son la misma cosa.";
 choices[2][1] = "S&oacute;lo se diferencian en la tecnolog&iacute;a utilizada.";
 choices[2][2] = "En la gesti&oacute;n de documentos se suele presentar el documento en su formato original, mientras que en la gesti&oacute;n de contenidos se orienta hacia la creaci&oacute;n y edici&oacute;n din&aacute;mica de p&aacute;ginas.";
 choices[2][3] = "La gesti&oacute;n de contenidos es m&aacute;s reciente y suele estar enfocada hacia flujos de trabajo.";
 answers[2] = 2;
 units[2] = ['99'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 4117. ";
 preguntaids[2] = 4117


//  Id pregunta: 8341 Año de creación de pregunta: 2011
 questions[3]= "4)  Se&ntilde;ale la respuesta correcta con relaci&oacute;n a lTIL (IT Infrastructure Library):";
 choices[3]= new Array();
 choices[3][0] = "La gesti&oacute;n de problemas busca solucionar lo m&aacute;s r&aacute;pido posible las incidencias y restablecer el servicio lo antes posible";
 choices[3][1] = "La gesti&oacute;n de la configuraci&oacute;n tiene como &uacute;nico objetivo el control del hardware inform&aacute;tico existente en la organizaci&oacute;n";
 choices[3][2] = "La gesti&oacute;n de versiones se encarga de controlar todas las versiones, tanto hardware como software, involucrados en el sistema de explotaci&oacute;n";
 choices[3][3] = "No es necesario analizar el impacto de la introducci&oacute;n de cambios en los sistemas inform&aacute;ticos, sino que se deben realizar lo m&aacute;s r&aacute;pido posible para evitar incidencias en los sistemas (gesti&oacute;n de cambios).";
 answers[3] = 2;
 units[3] = ['101'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 8341. Examen UC3M 2010";
 preguntaids[3] = 8341


//  Id pregunta: 5110 Año de creación de pregunta: 2004
 questions[4]= "5)  El protocolo SMTP";
 choices[4]= new Array();
 choices[4][0] = "Define el formato de los mensajes";
 choices[4][1] = "Define la transferencia de mensajes";
 choices[4][2] = "Pone limitaciones al formato del mensaje";
 choices[4][3] = "b y c son ciertas";
 answers[4] = 3;
 units[4] = ['116'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5110. ";
 preguntaids[4] = 5110


//  Id pregunta: 1080 Año de creación de pregunta: 2016
 questions[5]= "6)  En el contexto de los sistemas Datawarehouse y DataMart seleccione la frase correcta.";
 choices[5]= new Array();
 choices[5][0] = "El an&aacute;lisis dimensional de los datos corporativos mediante t&eacute;cnicas de OLAP no puede implementarse sobre bases de datos relacionales.";
 choices[5][1] = "Las bases de datos relacionales incorporan de manera estructural la jerarqu&iacute;a entre sucesivos niveles de una dimensi&oacute;n.";
 choices[5][2] = "Los modelos en copo de nieve utilizan tablas de hechos y tablas de dimensiones para el an&aacute;lisis de los datos corporativos.";
 choices[5][3] = "Los almacenes de datos departamentales (DataMart), a diferencia de los almacenes corporativos (Datawarehouse), no requieren procesos previos de ETL (extracci&oacute;n, transformaci&oacute;n y carga).";
 answers[5] = 2;
 units[5] = ['72'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1080. ";
 preguntaids[5] = 1080


//  Id pregunta: 89 Año de creación de pregunta: 2016
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


//  Id pregunta: 1002 Año de creación de pregunta: 2016
 questions[7]= "8)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[7]= new Array();
 choices[7][0] = "Subgrupo A1";
 choices[7][1] = "Subgrupo A2";
 choices[7][2] = "Subgrupo B";
 choices[7][3] = "Subgrupo C1";
 answers[7] = 0;
 units[7] = ['4', '7', '8', '9'];
 blocks[7] = ['A1', 'A2'];
 comments[7] = "Id Pregunta: 1002. Ley 40/2015";
 preguntaids[7] = 1002


//  Id pregunta: 10677 Año de creación de pregunta: 2015
 questions[8]= "9)  Seg&uacute;n el art&iacute;culo 26 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas Ley 39/2015 respecto a la validez de documentos electr&oacute;nicos administrativos, es FALSO que";
 choices[8]= new Array();
 choices[8][0] = "Deber&aacute;n contener informaci&oacute;n de cualquier naturaleza archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[8][1] = "Deber&aacute;n incorporar metadatos m&iacute;nimos exigidos.";
 choices[8][2] = "Deber&aacute;n incorporar una referencia temporal del momento en que han sido emitidos.";
 choices[8][3] = "Deber&aacute;n incorporar firma electr&oacute;nica aquellos documentos electr&oacute;nicos que sean publicados por las AA.PP con car&aacute;cter meramente informativo.";
 answers[8] = 3;
 units[8] = ['7'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 10677. ";
 preguntaids[8] = 10677


//  Id pregunta: 3302 Año de creación de pregunta: 2004
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la configuraci&oacute;n de discos RAID 5 son ciertas?";
 choices[9]= new Array();
 choices[9][0] = "Existe un disco de paridad dedicado";
 choices[9][1] = "La paridad de calcula bas&aacute;ndose en la operaci&oacute;n l&oacute;gica XOR";
 choices[9][2] = "Es la configuraci&oacute;n id&oacute;nea para aplicaciones de alta transferencia de datos";
 choices[9][3] = "Todas las anteriores son ciertas";
 answers[9] = 1;
 units[9] = ['53'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3302. ";
 preguntaids[9] = 3302


//  Id pregunta: 1429 Año de creación de pregunta: 2016
 questions[10]= "11)  Las funciones, principios b&aacute;sicos de actuaci&oacute;n y estatutos de las Fuerzas y Cuerpos de seguridad ser&aacute;n determinados, seg&uacute;n el art&iacute;culo 104 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[10]= new Array();
 choices[10][0] = "Por una Ley org&aacute;nica.";
 choices[10][1] = "Por un Decreto-ley.";
 choices[10][2] = "Por un Real Decreto.";
 choices[10][3] = "Por un Reglamento interno de funcionamiento.";
 answers[10] = 0;
 units[10] = ['1'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 1429. ";
 preguntaids[10] = 1429


//  Id pregunta: 9874 Año de creación de pregunta: 2015
 questions[11]= "12)  Polycom, Radvision y Lifesize son:";
 choices[11]= new Array();
 choices[11][0] = "Sistemas de videoconferencia";
 choices[11][1] = "Sistemas de telefon&iacute;a";
 choices[11][2] = "Conectores RDSI";
 choices[11][3] = "C&oacute;decs de video.";
 answers[11] = 0;
 units[11] = ['122'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9874. ";
 preguntaids[11] = 9874


//  Id pregunta: 2042 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas incorpora la posibilidad de valorar el riesgo y la incertidumbre?:";
 choices[12]= new Array();
 choices[12][0] = "M&eacute;todo Promethee";
 choices[12][1] = "Utilidad multiatributo";
 choices[12][2] = "Permutaci&oacute;n";
 choices[12][3] = "Ninguno de los anteriores";
 answers[12] = 1;
 units[12] = ['38'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 2042. ";
 preguntaids[12] = 2042


//  Id pregunta: 9400 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[13]= new Array();
 choices[13][0] = "100 a 224 MHz";
 choices[13][1] = "225 a 356 MHz";
 choices[13][2] = "470 a 862 MHz";
 choices[13][3] = "470 a 758 MHz";
 answers[13] = 3;
 units[13] = ['115'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9400. Examen TIC A2  2013";
 preguntaids[13] = 9400


//  Id pregunta: 10934 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[14]= new Array();
 choices[14][0] = "representante del Tribunal de Cuentas";
 choices[14][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[14][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[14][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[14] = 2;
 units[14] = ['22'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 10934. ";
 preguntaids[14] = 10934


//  Id pregunta: 5047 Año de creación de pregunta: 2002
 questions[15]= "16)  Se entiende por firma electr&oacute;nica avanzada:";
 choices[15]= new Array();
 choices[15][0] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste mantiene bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 choices[15][1] = "Conjunto de datos, en forma electr&oacute;nica, anejos a otros datos electr&oacute;nicos o asociados funcionalmente a ellos, como medio para identificar formalmente al autor del documento que la recoge";
 choices[15][2] = "Certificaci&oacute;n electr&oacute;nica que vincula unos datos de verificaci&oacute;n de firma a un signatario y confirma su identidad";
 choices[15][3] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste puede utilizar, con un alto nivel de confianza, bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 answers[15] = 3;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 5047. Ley 25/2015. Disposici&oacute;n Final Cuarta. Modificaci&oacute;n de la Ley 59/2003";
 preguntaids[15] = 5047


//  Id pregunta: 10201 Año de creación de pregunta: 2015
 questions[16]= "17)  Respecto a la intranet de un ministerio se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "No puede estar conectada a la Red Sara, para evitar fugas de informaci&oacute;n.";
 choices[16][1] = "Se incluye dentro de la zona desmilitarizada p&uacute;blica (DMZ), para garantizar el acceso por teletrabajo.";
 choices[16][2] = "No podr&aacute; usar un nombre interno como ministerio.age en su certificado SSL a partir de 2016.";
 choices[16][3] = "Debe usar el direccionamiento privado 10.0.0.0/24, 192.168.0.0/16 y 172.16.0.0/16.";
 answers[16] = 2;
 units[16] = ['113'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 10201. Examen TIC A1 2014";
 preguntaids[16] = 10201


//  Id pregunta: 969 Año de creación de pregunta: 2016
 questions[17]= "18)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[17]= new Array();
 choices[17][0] = "el Gobierno de la Naci&oacute;n";
 choices[17][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[17][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[17][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[17] = 3;
 units[17] = ['4', '7', '8', '9'];
 blocks[17] = ['A1', 'A2'];
 comments[17] = "Id Pregunta: 969. Ley 40/2015";
 preguntaids[17] = 969


//  Id pregunta: 10972 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n la ley 19/2013 de transparencia, y en lo referente a la composici&oacute;n de la Comisi&oacute;n de Transparencia y Buen Gobierno, se&ntilde;ale la FALSA:";
 choices[18]= new Array();
 choices[18][0] = "Un Senador";
 choices[18][1] = "Un representante de la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[18][2] = "Un representante de la Autoridad Independiente de Responsabilidad Fiscal";
 choices[18][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[18] = 1;
 units[18] = ['22'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 10972. ";
 preguntaids[18] = 10972


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[19]= new Array();
 choices[19][0] = "El 5 de Octubre de 2015";
 choices[19][1] = "El 15 de Octubre de 2015";
 choices[19][2] = "El 15 de Septiembre de 2015";
 choices[19][3] = "El 2 de Octubre de 2015";
 answers[19] = 2;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 459. Estrategia TIC";
 preguntaids[19] = 459


//  Id pregunta: 3440 Año de creación de pregunta: 2006
 questions[20]= "21)  Las tablas primarias en el modelo dimensional de un Datawarehouse y que contienen los valores y metricas se conocen como:";
 choices[20]= new Array();
 choices[20][0] = "Tablas de dimensiones.";
 choices[20][1] = "Tablas maestras.";
 choices[20][2] = "Tablas de hechos.";
 choices[20][3] = "Tablas externas.";
 answers[20] = 2;
 units[20] = ['72'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3440. ";
 preguntaids[20] = 3440


//  Id pregunta: 4554 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares define un anillo l&oacute;gico sobre un bus f&iacute;sico?:";
 choices[21]= new Array();
 choices[21][0] = "802.2";
 choices[21][1] = "802.3";
 choices[21][2] = "802.4";
 choices[21][3] = "802.5";
 answers[21] = 2;
 units[21] = ['112'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4554. ";
 preguntaids[21] = 4554


//  Id pregunta: 8004 Año de creación de pregunta: 2011
 questions[22]= "23)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[22]= new Array();
 choices[22][0] = "Define su contenido.";
 choices[22][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[22][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[22][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[22] = 2;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 8004. Examen TIC A2 2010";
 preguntaids[22] = 8004


//  Id pregunta: 5932 Año de creación de pregunta: 2007
 questions[23]= "24)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[23]= new Array();
 choices[23][0] = "Acoplamiento de control.";
 choices[23][1] = "Acoplamiento por estampado.";
 choices[23][2] = "Acoplamiento por contenido.";
 choices[23][3] = "Acoplamiento externo.";
 answers[23] = 2;
 units[23] = ['89'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 5932. examen TIC 2006";
 preguntaids[23] = 5932


//  Id pregunta: 3297 Año de creación de pregunta: 2004
 questions[24]= "25)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[24]= new Array();
 choices[24][0] = "Leve";
 choices[24][1] = "Grave";
 choices[24][2] = "Muy grave";
 choices[24][3] = "No constituye infracci&oacute;n";
 answers[24] = 0;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 3297. ";
 preguntaids[24] = 3297


//  Id pregunta: 5319 Año de creación de pregunta: 2006
 questions[25]= "26)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[25]= new Array();
 choices[25][0] = "XML";
 choices[25][1] = "Xerces";
 choices[25][2] = "UDDI";
 choices[25][3] = "WSDL";
 answers[25] = 3;
 units[25] = ['74'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 5319. ";
 preguntaids[25] = 5319


//  Id pregunta: 10914 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[26]= new Array();
 choices[26][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[26][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[26][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[26][3] = "Se trata de una suite propietaria";
 answers[26] = 1;
 units[26] = ['119'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 10914. ";
 preguntaids[26] = 10914


//  Id pregunta: 8751 Año de creación de pregunta: 2013
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes no es una de las cinco funciones de la auditor&iacute;a inform&aacute;tica?";
 choices[27]= new Array();
 choices[27][0] = "Velar por la eficacia y eficiencia del sistema inform&aacute;tico";
 choices[27][1] = "Verificar el cumplimiento de las normas y est&aacute;ndares vigentes en la organizaci&oacute;n";
 choices[27][2] = "Verificar la calidad de los sistemas de informaci&oacute;n, y proponer e implantar mejoras en los mismos";
 choices[27][3] = "Supervisar los mecanismos de control interno";
 answers[27] = 2;
 units[27] = ['36'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 8751. ";
 preguntaids[27] = 8751


//  Id pregunta: 2488 Año de creación de pregunta: 2004
 questions[28]= "29)  DTD se emplea para:";
 choices[28]= new Array();
 choices[28][0] = "Crear documentos XML bien formados";
 choices[28][1] = "Formatear documentos XML";
 choices[28][2] = "Transformar documentos HTML en XML";
 choices[28][3] = "Validar documentos XML";
 answers[28] = 3;
 units[28] = ['74'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2488. Similar a examen TIC SS A 2004";
 preguntaids[28] = 2488


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique cu&aacute;l de los siguientes es un valor JSON v&aacute;lido:";
 choices[29]= new Array();
 choices[29][0] = "hola'";
 choices[29][1] = "null";
 choices[29][2] = "nombre : juan";
 choices[29][3] = "nombre : &quot;juan&quot;";
 answers[29] = 1;
 units[29] = ['74'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 770. AGE A2 2015";
 preguntaids[29] = 770


//  Id pregunta: 5392 Año de creación de pregunta: 2006
 questions[30]= "31)  El t&eacute;rmino JigSaw se refiere a:";
 choices[30]= new Array();
 choices[30][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor";
 choices[30][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos";
 choices[30][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse";
 choices[30][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos";
 answers[30] = 0;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5392. ";
 preguntaids[30] = 5392


//  Id pregunta: 1744 Año de creación de pregunta: 2016
 questions[31]= "32)  Una Unidad de Acceso Multiestaci&oacute;n o MAU es un dispositivo que administra la comunicaci&oacute;n entre los equipos conectados a una red de topolog&iacute;a:";
 choices[31]= new Array();
 choices[31][0] = "En anillo";
 choices[31][1] = "En Bus";
 choices[31][2] = "En Estrella";
 choices[31][3] = "En Bucle";
 answers[31] = 0;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1744. ";
 preguntaids[31] = 1744


//  Id pregunta: 7605 Año de creación de pregunta: 2010
 questions[32]= "33)  En una aplicaci&oacute;n sobre Arquitectura de tres capas, &iquest;d&oacute;nde se encuentran ubicadas las reglas de negocio?";
 choices[32]= new Array();
 choices[32][0] = "En el servidor de aplicaciones.";
 choices[32][1] = "En el servidor de datos.";
 choices[32][2] = "En el cliente.";
 choices[32][3] = "En el servidor http/ssl (Hipertext Transfer Protocol/Secure Sockets Layer).";
 answers[32] = 0;
 units[32] = ['62'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7605. Map 2006";
 preguntaids[32] = 7605


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[33]= "34)  El plan nacional de ciudades inteligentes...";
 choices[33]= new Array();
 choices[33][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[33][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[33][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[33][3] = "No existe";
 answers[33] = 1;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 453. Ciudades Inteligentes";
 preguntaids[33] = 453


//  Id pregunta: 3359 Año de creación de pregunta: 2006
 questions[34]= "35)  Un sistema multiusuario es:";
 choices[34]= new Array();
 choices[34][0] = "Un sistema que posee varias CPUs y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[34][1] = "Un sistema que posee una sola CPU y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[34][2] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero concurrente de usuarios";
 choices[34][3] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero no concurrente de usuarios";
 answers[34] = 2;
 units[34] = ['50'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3359. ";
 preguntaids[34] = 3359


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[35]= "36)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[35][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[35][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[35][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[35] = 2;
 units[35] = ['83'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 799. AGE A1 2015";
 preguntaids[35] = 799


//  Id pregunta: 2350 Año de creación de pregunta: 2004
 questions[36]= "37)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[36]= new Array();
 choices[36][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[36][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[36][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[36][3] = "Todas";
 answers[36] = 3;
 units[36] = ['36'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2350. ";
 preguntaids[36] = 2350


//  Id pregunta: 8267 Año de creación de pregunta: 2011
 questions[37]= "38)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[37]= new Array();
 choices[37][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[37][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[37][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[37][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[37] = 0;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 8267. Examen TIC A2 2010 interna";
 preguntaids[37] = 8267


//  Id pregunta: 2790 Año de creación de pregunta: 2002
 questions[38]= "39)  El sistema de encriptaci&oacute;n RSA (Rivest, Shamir y Adleman, 1978)&hellip;:";
 choices[38]= new Array();
 choices[38][0] = "El receptor del mensaje debe conocer la clave p&uacute;blica para descifrarlo";
 choices[38][1] = "Se basa en la seguridad que confiere la dificultad de factorizar n&uacute;meros grandes";
 choices[38][2] = "Es un sistema de encriptaci&oacute;n sim&eacute;trico";
 choices[38][3] = "Garantiza la seguridad a&uacute;n utilizando n&uacute;meros primos de menos de veinte cifras";
 answers[38] = 1;
 units[38] = ['76'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2790. ";
 preguntaids[38] = 2790


//  Id pregunta: 6990 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes es una propiedad del modelo conceptual?";
 choices[39]= new Array();
 choices[39][0] = "Complejo";
 choices[39][1] = "M&aacute;ximo";
 choices[39][2] = "Expl&iacute;cito en todas sus restricciones";
 choices[39][3] = "Informal";
 answers[39] = 2;
 units[39] = ['60'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 6990. TIC-B 2009 bloque desarrollo";
 preguntaids[39] = 6990


//  Id pregunta: 2783 Año de creación de pregunta: 2002
 questions[40]= "41)  El protocolo de acceso al directorio en X.500 es:";
 choices[40]= new Array();
 choices[40][0] = "TCP/IP";
 choices[40][1] = "LDAP";
 choices[40][2] = "IMAP";
 choices[40][3] = "DAP";
 answers[40] = 3;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2783. ";
 preguntaids[40] = 2783


//  Id pregunta: 8905 Año de creación de pregunta: 2013
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes diagramas no se usan en UML 2.0?";
 choices[41]= new Array();
 choices[41][0] = "Diagrama de secuencia.";
 choices[41][1] = "Diagrama de comunicaci&oacute;n.";
 choices[41][2] = "Diagrama de transici&oacute;n de estados.";
 choices[41][3] = "Diagrama de elementos.";
 answers[41] = 3;
 units[41] = ['89'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 8905. ";
 preguntaids[41] = 8905


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[42]= new Array();
 choices[42][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[42][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[42][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[42][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[42] = 0;
 units[42] = ['1'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[42] = 69


//  Id pregunta: 3806 Año de creación de pregunta: 2002
 questions[43]= "44)  En el modelo de ciclo de vida en espiral, cada ciclo de la espiral comienza con la etapa de:";
 choices[43]= new Array();
 choices[43][0] = "Planificaci&oacute;n";
 choices[43][1] = "An&aacute;lisis de riesgos";
 choices[43][2] = "Desarrollo del prototipo";
 choices[43][3] = "Evaluaci&oacute;n";
 answers[43] = 0;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3806. ";
 preguntaids[43] = 3806


//  Id pregunta: 9133 Año de creación de pregunta: 2014
 questions[44]= "45)  La garant&iacute;a global, seg&uacute;n el RD Legislativo 3/2011:";
 choices[44]= new Array();
 choices[44][0] = "No podr&aacute; superar el 10% del importe de adjudicaci&oacute;n del contrato.";
 choices[44][1] = "Es obligatoria.";
 choices[44][2] = "Se deposita s&oacute;lo una vez y sirve para varias contrataciones.";
 choices[44][3] = "No existe.";
 answers[44] = 2;
 units[44] = ['10'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 9133. Art. 98 RD Legislativo 3/2011";
 preguntaids[44] = 9133


//  Id pregunta: 1614 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale qu&eacute; lenguaje es el que incluye las operaciones de creaci&oacute;n, modificaci&oacute;n y eliminaci&oacute;n de las estructuras de la base:";
 choices[45]= new Array();
 choices[45][0] = "DDL";
 choices[45][1] = "DML";
 choices[45][2] = "DLC";
 choices[45][3] = "TCL";
 answers[45] = 0;
 units[45] = ['61'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1614. ";
 preguntaids[45] = 1614


//  Id pregunta: 1993 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes NO es una topolog&iacute;a f&iacute;sica de las redes de almacenamiento SAN?";
 choices[46]= new Array();
 choices[46][0] = "Estrella.";
 choices[46][1] = "Anillo.";
 choices[46][2] = "Malla.";
 choices[46][3] = "Jer&aacute;rquica";
 answers[46] = 3;
 units[46] = ['53'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1993. ";
 preguntaids[46] = 1993


//  Id pregunta: 6503 Año de creación de pregunta: 2003
 questions[47]= "48)  El protocolo SMTP es estrictamente el est&aacute;ndar";
 choices[47]= new Array();
 choices[47][0] = "STD 11 que describe el formato de los mensajes de correos";
 choices[47][1] = "El STD 10 que especifica el protocolo concreto para el enviio de correo entre dos &quot;hosts&quot; TCP/IP";
 choices[47][2] = "El STD 12 para el intercambio de correo entre dos ordenadores";
 choices[47][3] = "STD 10 para describir el procedimineto de enrutado de los mensajes que se basa en el sistema de nombres de dominio";
 answers[47] = 1;
 units[47] = ['116'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6503. ";
 preguntaids[47] = 6503


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[48]= "49)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[48]= new Array();
 choices[48][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[48][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[48][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[48][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[48] = 1;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 485. Sociedad de la informaci&oacute;n";
 preguntaids[48] = 485


//  Id pregunta: 2385 Año de creación de pregunta: 2006
 questions[49]= "50)  Desde el punto de vista funcional la organizaci&oacute;n reticular se caracteriza por";
 choices[49]= new Array();
 choices[49][0] = "prescindir casi  totalmente de los formalismos.";
 choices[49][1] = "Las  comunicaciones son de todos con todos, sobre todo por niveles.";
 choices[49][2] = "Las comunicaciones suelen estar muy formalizadas y documentadas de  acuerdo a normas estrictas.";
 choices[49][3] = "La mayor&iacute;a de las comunicaciones, por no decir todas, se producen de jefe a subordinados";
 answers[49] = 1;
 units[49] = ['30'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2385. ";
 preguntaids[49] = 2385


//  Id pregunta: 7269 Año de creación de pregunta: 2010
 questions[50]= "51)  GSM se caracteriza por";
 choices[50]= new Array();
 choices[50][0] = "Enlace ascendente 880-905 MHz";
 choices[50][1] = "Enlace ascendente 890-915 MHz";
 choices[50][2] = "Enlace descendente 890-915 MHz";
 choices[50][3] = "Todas las respuestas anteriores son incorrectos";
 answers[50] = 1;
 units[50] = ['117'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7269. ";
 preguntaids[50] = 7269


//  Id pregunta: 981 Año de creación de pregunta: 2016
 questions[51]= "52)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n segun la ley 40/2015 a:";
 choices[51]= new Array();
 choices[51][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[51][1] = "el Consejo de Estado";
 choices[51][2] = "el Congreso";
 choices[51][3] = "las Cortes Generales";
 answers[51] = 0;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 981. Ley 40/2015";
 preguntaids[51] = 981


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[52]= new Array();
 choices[52][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[52][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[52][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[52][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[52] = 1;
 units[52] = ['1'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 3. Constituci&oacute;n de 1978";
 preguntaids[52] = 3


//  Id pregunta: 3781 Año de creación de pregunta: 2002
 questions[53]= "54)  El Lenguaje de Definici&oacute;n de Datos (LDD) describe:";
 choices[53]= new Array();
 choices[53][0] = "Las propiedades din&aacute;micas de las entidades";
 choices[53][1] = "Las propiedades est&aacute;ticas de las entidades";
 choices[53][2] = "Los dos tipos de propiedades, es indiferente";
 choices[53][3] = "No define propiedades, define comportamientos";
 answers[53] = 1;
 units[53] = ['60'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3781. ";
 preguntaids[53] = 3781


//  Id pregunta: 9135 Año de creación de pregunta: 2014
 questions[54]= "55)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[54]= new Array();
 choices[54][0] = "CONECTA-PATRIMONIO";
 choices[54][1] = "PITER";
 choices[54][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[54][3] = "No existe tal aplicaci&oacute;n";
 answers[54] = 2;
 units[54] = ['37'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 9135. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";
 preguntaids[54] = 9135


//  Id pregunta: 999 Año de creación de pregunta: 2016
 questions[55]= "56)  La organizaci&oacute;n en Departamentos ministeriales de la Administracion General del Estado no obsta a la existencia de:";
 choices[55]= new Array();
 choices[55][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[55][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[55][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[55][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[55] = 3;
 units[55] = ['4', '7', '8', '9'];
 blocks[55] = ['A1', 'A2'];
 comments[55] = "Id Pregunta: 999. Ley 40/2015";
 preguntaids[55] = 999


//  Id pregunta: 1116 Año de creación de pregunta: 2016
 questions[56]= "57)  La arquitectura GRID est&aacute; compuesta por capas. La capa m&aacute;s baja y donde se encuentran los recursos computacionales y de almacenamiento que ser&aacute;n compartidos por los protocolos grid se denomina:";
 choices[56]= new Array();
 choices[56][0] = "Fabric.";
 choices[56][1] = "Connectivity.";
 choices[56][2] = "Resource.";
 choices[56][3] = "Collective.";
 answers[56] = 0;
 units[56] = ['49'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 1116. ";
 preguntaids[56] = 1116


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[57]= "58)  En relaci&oacute;n a la receta electr&oacute;nica, los tratamientos prescritos al paciente en receta m&eacute;dica electr&oacute;nica podr&aacute;n ser dispensados:";
 choices[57]= new Array();
 choices[57][0] = "En cualquier oficina de farmacia del territorio nacional.";
 choices[57][1] = "S&oacute;lo en oficinas de farmacia de la Comunidad Aut&oacute;noma donde se haya expedido la receta m&eacute;dica electr&oacute;nica.";
 choices[57][2] = "S&oacute;lo en los servicios de farmacia de los centros de salud y estructuras de atenci&oacute;n primaria de todo el territorio SNS.";
 choices[57][3] = "En todo el territorio nacional y pa&iacute;ses de la Uni&oacute;n Europea (UE) acogidos a la directiva Common Right Export Health a trav&eacute;s del nodo del SNS.";
 answers[57] = 3;
 units[57] = ['14'];
 blocks[57] = ['A3'];
 comments[57] = "Id Pregunta: 361. Modelo econ&oacute;mico";
 preguntaids[57] = 361


//  Id pregunta: 2854 Año de creación de pregunta: 2002
 questions[58]= "59)  En sistemas Windows 200x, &iquest;cu&aacute;l es el API nativo de Microsoft que permite programar contra los servicios de Active Directory?:";
 choices[58]= new Array();
 choices[58][0] = "X.500";
 choices[58][1] = "ADSI";
 choices[58][2] = "LDAP";
 choices[58][3] = "Todas son falsas";
 answers[58] = 1;
 units[58] = ['58'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2854. ";
 preguntaids[58] = 2854


//  Id pregunta: 3909 Año de creación de pregunta: 2002
 questions[59]= "60)  Indicar a qu&eacute; corresponde la siguiente definici&oacute;n propuesta por el IEEE dentro del &aacute;mbito de la reingenier&iacute;a e ingenier&iacute;a inversa: &quot;la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento&quot;";
 choices[59]= new Array();
 choices[59][0] = "Ingenier&iacute;a inversa";
 choices[59][1] = "Reestructuraci&oacute;n";
 choices[59][2] = "Reingenier&iacute;a";
 choices[59][3] = "Ingenier&iacute;a hacia delante";
 answers[59] = 1;
 units[59] = ['97'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3909. ";
 preguntaids[59] = 3909


//  Id pregunta: 6117 Año de creación de pregunta: 2003
 questions[60]= "61)  Seg&uacute;n el est&aacute;ndar ISO 7816-2 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientescontactos se utiliza para la se&ntilde;al de reloj?:";
 choices[60]= new Array();
 choices[60][0] = "C2";
 choices[60][1] = "C3";
 choices[60][2] = "C5";
 choices[60][3] = "C6";
 answers[60] = 1;
 units[60] = ['78'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6117. Examen TIC A1 MAP 2007";
 preguntaids[60] = 6117


//  Id pregunta: 3279 Año de creación de pregunta: 2004
 questions[61]= "62)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[61]= new Array();
 choices[61][0] = "Leve";
 choices[61][1] = "Grave";
 choices[61][2] = "Muy grave";
 choices[61][3] = "No constituye infracci&oacute;n";
 answers[61] = 0;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 3279. Ley 34/2002, art&iacute;culo 38";
 preguntaids[61] = 3279


//  Id pregunta: 6375 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es la declaraci&oacute;n correcta de la versi&oacute;n de XML?";
 choices[62]= new Array();
 choices[62][0] = "&lt;xml version=&quot;1.0&quot; /&gt;";
 choices[62][1] = "&lt;?xml version=&quot;1.0&quot; /&gt;";
 choices[62][2] = "&lt;?xml version=&quot;1.0&quot;?&gt;";
 choices[62][3] = "&lt;?xml version=&quot;1.0&quot;?/&gt;";
 answers[62] = 2;
 units[62] = ['74'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 6375. Examen 2006 JCYL";
 preguntaids[62] = 6375


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[63][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[63][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[63][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[63] = 2;
 units[63] = ['22'];
 blocks[63] = ['A4'];
 comments[63] = "Id Pregunta: 515. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[63] = 515


//  Id pregunta: 960 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[64]= new Array();
 choices[64][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[64][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[64][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[64][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[64] = 3;
 units[64] = ['34', '84'];
 blocks[64] = ['B1', 'B3'];
 comments[64] = "Id Pregunta: 960. Metodologias &aacute;giles";
 preguntaids[64] = 960


//  Id pregunta: 8724 Año de creación de pregunta: 2013
 questions[65]= "66)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores.";
 choices[65]= new Array();
 choices[65][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga.";
 choices[65][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[65][2] = "El balanceo de carga solo puede implementarse por software.";
 choices[65][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos.";
 answers[65] = 2;
 units[65] = ['54'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8724. Examen TICA2-2011";
 preguntaids[65] = 8724


//  Id pregunta: 7645 Año de creación de pregunta: 2010
 questions[66]= "67)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, en lo referente al software, establece sobre la creaci&oacute;n de programas de ordenador por trabajadores asalariados en el ejercicio de sus funciones en la empresa que:";
 choices[66]= new Array();
 choices[66][0] = "No son titulares de los derechos de explotaci&oacute;n del programa, ni del c&oacute;digo fuente, ni del objeto, salvo pacto en contrario con la empresa.";
 choices[66][1] = "Son titulares siempre de los derechos de explotaci&oacute;n del c&oacute;digo fuente del programa, no as&iacute; del c&oacute;digo objeto, que necesariamente se habr&aacute; probado y validado en los sistemas inform&aacute;ticos de la empresa.";
 choices[66][2] = "Siempre son titulares tanto del c&oacute;digo fuente como del objeto, as&iacute; como de toda la documentaci&oacute;n preparatoria que hayan generado durante su trabajo de creaci&oacute;n, el empresario tendr&aacute; derecho en todo caso a disponer de una copia de todo el software para su explotaci&oacute;n comercial.";
 choices[66][3] = "El &uacute;nico y exclusivo titular de los derechos de explotaci&oacute;n del programa de ordenador creado es el empresario, en toda circunstancia legal.";
 answers[66] = 0;
 units[66] = ['41'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 7645. Map 2006";
 preguntaids[66] = 7645


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[67]= "68)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[67]= new Array();
 choices[67][0] = "P&uacute;blica.";
 choices[67][1] = "Privada.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[67] = 0;
 units[67] = ['14'];
 blocks[67] = ['A3'];
 comments[67] = "Id Pregunta: 399. Pol&iacute;ticas de igualdad";
 preguntaids[67] = 399


//  Id pregunta: 3934 Año de creación de pregunta: 2002
 questions[68]= "69)  Los s&iacute;mbolos &quot;(&quot; y &quot;)&quot; seg&uacute;n la notaci&oacute;n BNF representan, en el diccionario de datos:";
 choices[68]= new Array();
 choices[68][0] = "Iteraci&oacute;n";
 choices[68][1] = "Selecci&oacute;n";
 choices[68][2] = "Composici&oacute;n";
 choices[68][3] = "Opcionalidad";
 answers[68] = 3;
 units[68] = ['85', '86'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3934. ";
 preguntaids[68] = 3934


//  Id pregunta: 7120 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;C&uacute;al de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?";
 choices[69]= new Array();
 choices[69][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[69][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[69][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[69][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[69] = 3;
 units[69] = ['7'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 7120. Art&iacute;culo 6 RD 1671/2009";
 preguntaids[69] = 7120


//  Id pregunta: 7927 Año de creación de pregunta: 2011
 questions[70]= "71)  Si ejecutamos el comando telnet para acceder a un servidor que tenga configurado lo necesario, &iquest;Cu&aacute;l de las afirmaciones es correcta?:";
 choices[70]= new Array();
 choices[70][0] = "S&oacute;lo podemos conectarnos al &quot;well-known port&quot; 23 (telnet).";
 choices[70][1] = "Accediendo al puerto 25 (smtp) ser&iacute;a posible enviar e-mails.";
 choices[70][2] = "Accediendo al puerto 22 (ssh) es posible securizar la comunicaci&oacute;n.";
 choices[70][3] = "Accediendo a cualquier puerto diferente del 23 el servidor reconoce el protocolo y redirige la comunicaci&oacute;n al puerto 23(telnet).";
 answers[70] = 1;
 units[70] = ['103'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 7927. Examen TIC A1 2010";
 preguntaids[70] = 7927


//  Id pregunta: 4428 Año de creación de pregunta: 2002
 questions[71]= "72)  Los objetos que intervienen en la capa de aplicaci&oacute;n se denominan:";
 choices[71]= new Array();
 choices[71][0] = "Objetos de aplicaci&oacute;n";
 choices[71][1] = "Objetos de negocio";
 choices[71][2] = "Objetos distribuidos";
 choices[71][3] = "Objetos de servidor";
 answers[71] = 1;
 units[71] = ['62'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 4428. ";
 preguntaids[71] = 4428


//  Id pregunta: 7540 Año de creación de pregunta: 2010
 questions[72]= "73)  Utilizando la Metodolog&iacute;a M&eacute;trica para la elaboraci&oacute;n de un Plan de Sistemas, dentro de qu&eacute; actividad englobar&iacute;a la tarea de &laquo;Dise&ntilde;o de la Jerarqu&iacute;a de Funciones&raquo;:";
 choices[72]= new Array();
 choices[72][0] = "Actividad 5: Revisi&oacute;n de la situaci&oacute;n actual de los Sistemas de Informaci&oacute;n.";
 choices[72][1] = "Actividad 6: Especificaci&oacute;n de los nuevos sistemas.";
 choices[72][2] = "Actividad 4: Arquitectura de la Informaci&oacute;n.";
 choices[72][3] = "Actividad 2: Identificaci&oacute;n de las necesidades de Informaci&oacute;n de las &aacute;reas afectadas.";
 answers[72] = 2;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 7540. Map 2005";
 preguntaids[72] = 7540


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[73]= new Array();
 choices[73][0] = "Tres meses.";
 choices[73][1] = "Nueve meses.";
 choices[73][2] = "Cuatro meses.";
 choices[73][3] = "Seis meses.";
 answers[73] = 0;
 units[73] = ['11'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 285. Presupuestos generales";
 preguntaids[73] = 285


//  Id pregunta: 2328 Año de creación de pregunta: 2003
 questions[74]= "75)  &iquest;C&uacute;antos niveles de evaluaci&oacute;n est&aacute;n contemplados en los Criterios Comunes?";
 choices[74]= new Array();
 choices[74][0] = "Siete";
 choices[74][1] = "Son los mismos que los de ITSEC";
 choices[74][2] = "Cinco";
 choices[74][3] = "Seis";
 answers[74] = 0;
 units[74] = ['36'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2328. EAL 1-7";
 preguntaids[74] = 2328


