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
//  Id pregunta: 1003 Año de creación de pregunta: 2016
 questions[0]= "1)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[0]= new Array();
 choices[0][0] = "los Secretarios generales t&eacute;cnicos";
 choices[0][1] = "los Directores generales";
 choices[0][2] = "los Secretarios generales";
 choices[0][3] = "los Subsecretarios";
 answers[0] = 1;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 1003. Ley 40/2015";
 preguntaids[0] = 1003


//  Id pregunta: 7181 Año de creación de pregunta: 2010
 questions[1]= "2)  Seg&uacute;n el interfaz de Aseguramiento de la Calidad de M&eacute;trica v3, el establecimiento del Plan de Aseguramiento de la Calidad debe comenzar en el proceso:";
 choices[1]= new Array();
 choices[1][0] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[1][1] = "Estudio de Viabilidad del Sistema";
 choices[1][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[1][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[1] = 1;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7181. Castilla La Mancha 2009";
 preguntaids[1] = 7181


//  Id pregunta: 7988 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[2]= new Array();
 choices[2][0] = "Merge sort.";
 choices[2][1] = "Bubble sort.";
 choices[2][2] = "Quicksort.";
 choices[2][3] = "Insertion sort.";
 answers[2] = 2;
 units[2] = ['100'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7988. Examen TIC A2 2010";
 preguntaids[2] = 7988


//  Id pregunta: 7407 Año de creación de pregunta: 2010
 questions[3]= "4)  Los cortafuegos de filtrado de paquetes:";
 choices[3]= new Array();
 choices[3][0] = "Funcionan a nivel de red";
 choices[3][1] = "Funcionan a a nivel de aplicaci&oacute;n";
 choices[3][2] = "Funcionan a nivel de enlace";
 choices[3][3] = "Funcionan a nivel de sesi&oacute;n";
 answers[3] = 0;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 7407. Examen TIC B 2009";
 preguntaids[3] = 7407


//  Id pregunta: 4664 Año de creación de pregunta: 2002
 questions[4]= "5)  De las siguientes direcciones IP para Internet s&oacute;lo una puede asignarse de forma correcta seg&uacute;n las normas que regulan el formato de estas direcciones:";
 choices[4]= new Array();
 choices[4][0] = "1";
 choices[4][1] = "198.70.8.255";
 choices[4][2] = "64.3.53.255";
 choices[4][3] = "640.13.53.40";
 answers[4] = 2;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4664. ";
 preguntaids[4] = 4664


//  Id pregunta: 9850 Año de creación de pregunta: 2015
 questions[5]= "6)  Las fases por ciclo en el Modelo de Ciclo de Vida en espiral son:";
 choices[5]= new Array();
 choices[5][0] = "Planificaci&oacute;n, An&aacute;lisis de Riesgos, Ingenier&iacute;a y Evaluaci&oacute;n.";
 choices[5][1] = "Planificaci&oacute;n, Dise&ntilde;o, Codificaci&oacute;n e Integraci&oacute;n.";
 choices[5][2] = "Construcci&oacute;n y Transici&oacute;n.";
 choices[5][3] = "Adaptaci&oacute;n, Composici&oacute;n y Reemplazo.";
 answers[5] = 0;
 units[5] = ['82'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 9850. ";
 preguntaids[5] = 9850


//  Id pregunta: 9971 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Qu&eacute; car&aacute;cter tiene el informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "Preceptivo";
 choices[6][1] = "Potestativo";
 choices[6][2] = "Informativo";
 choices[6][3] = "Recomendaci&oacute;n";
 answers[6] = 0;
 units[6] = ['26'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 9971. ";
 preguntaids[6] = 9971


//  Id pregunta: 5722 Año de creación de pregunta: 2007
 questions[7]= "8)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[7]= new Array();
 choices[7][0] = "2";
 choices[7][1] = "3";
 choices[7][2] = "4";
 choices[7][3] = "tantos como SGBD's";
 answers[7] = 2;
 units[7] = ['64'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 5722. ";
 preguntaids[7] = 5722


//  Id pregunta: 7012 Año de creación de pregunta: 2010
 questions[8]= "9)  Cual de los siguientes enunciados no pertenece al c&oacute;digo &eacute;tico definido para los perfiles de auditor por la ISACA.";
 choices[8]= new Array();
 choices[8][0] = "Apoyar la implantaci&oacute;n y estimular el cumplimiento de est&aacute;ndares, procedimientos y controles apropiados en los sistemas de informaci&oacute;n.";
 choices[8][1] = "Mantener la protecci&oacute;n de la intimidad y la confidencialidad de la informaci&oacute;n a la que se tenga  acceso, dentro del marco de la Directiva Europea en materia de protecci&oacute;n de datos de car&aacute;cter personal (transpuesta en Espa&ntilde;a a trav&eacute;s de la Ley Org&aacute;nica 15/1999).";
 choices[8][2] = "Apoyar la formaci&oacute;n profesional de las partes leg&iacute;timamente interesadas, mejorando su comprensi&oacute;n de la seguridad y control de los sistemas de informaci&oacute;n.";
 choices[8][3] = "Informar a las partes apropiadas de los resultados del trabajo realizado, revelando todos los hechos significativos que obren en su conocimiento.";
 answers[8] = 1;
 units[8] = ['36'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 7012. ";
 preguntaids[8] = 7012


//  Id pregunta: 3141 Año de creación de pregunta: 2002
 questions[9]= "10)  Los perif&eacute;ricos conocidos como &quot;Pen-drive&quot; son:";
 choices[9]= new Array();
 choices[9][0] = "Unidades del tama&ntilde;o de un bol&iacute;grafo o un mechero que permiten aumentar la memoria RAM del ordenador o bien a&ntilde;adir un nuevo disco duro port&aacute;til y extra&iacute;ble";
 choices[9][1] = "L&aacute;pices &oacute;pticos que permiten dibujar en tabletas digitalizadoras y pantallas t&aacute;ctiles";
 choices[9][2] = "Esc&aacute;neres de mano de alta precisi&oacute;n";
 choices[9][3] = "Lectores de c&oacute;digos de barras de &uacute;ltima generaci&oacute;n";
 answers[9] = 0;
 units[9] = ['52'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3141. ";
 preguntaids[9] = 3141


//  Id pregunta: 5172 Año de creación de pregunta: 2003
 questions[10]= "11)  En telefon&iacute;a movil GSM qu&eacute; dos bases de datos se utilizan para guardar datos del cliente";
 choices[10]= new Array();
 choices[10][0] = "VLR y HLR";
 choices[10][1] = "MSC y VLR";
 choices[10][2] = "NMC y OMC";
 choices[10][3] = "GMSC y NMC";
 answers[10] = 0;
 units[10] = ['117'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5172. ";
 preguntaids[10] = 5172


//  Id pregunta: 2855 Año de creación de pregunta: 2002
 questions[11]= "12)  En un desplazamiento c&iacute;clico a la izquierda de un bit, el contenido de &quot;100101&quot; se modifica en:";
 choices[11]= new Array();
 choices[11][0] = "&ldquo;110010&rdquo;.";
 choices[11][1] = "&quot;1010&rdquo;.";
 choices[11][2] = "&ldquo;110011&rdquo;.";
 choices[11][3] = "&ldquo;1011&rdquo;.";
 answers[11] = 3;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 2855. ";
 preguntaids[11] = 2855


//  Id pregunta: 6133 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Qu&eacute; tipos de certificado est&aacute;n incluidos en el DNIe?:";
 choices[12]= new Array();
 choices[12][0] = "Autenticaci&oacute;n y firma";
 choices[12][1] = "Cifrado y firma";
 choices[12][2] = "Firma";
 choices[12][3] = "Cifrado, firma y autenticaci&oacute;n";
 answers[12] = 3;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 6133. Examen TIC A1 MAP 2007";
 preguntaids[12] = 6133


//  Id pregunta: 1278 Año de creación de pregunta: 2016
 questions[13]= "14)  Conforme a la Ley 59/2003, de Firma electr&oacute;nica, el prestador de servicios de certificaci&oacute;n que vaya a cesar en su actividad deber&aacute; comunicarlo a los firmantes que utilicen los certificados electr&oacute;nicos que haya expedido as&iacute; como a los solicitantes de certificados expedidos a favor de personas jur&iacute;dicas, con una antelaci&oacute;n al cese efectivo de la actividad, como m&iacute;nimo de:";
 choices[13]= new Array();
 choices[13][0] = "AI menos seis meses.";
 choices[13][1] = "Un a&ntilde;o natural.";
 choices[13][2] = "AI menos dos meses.";
 choices[13][3] = "AI menos dos semanas.";
 answers[13] = 2;
 units[13] = ['77'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1278. ";
 preguntaids[13] = 1278


//  Id pregunta: 7415 Año de creación de pregunta: 2010
 questions[14]= "15)  VMWare es un software de virtualiaci&oacute;n de";
 choices[14]= new Array();
 choices[14][0] = "Sistema operativo";
 choices[14][1] = "Red";
 choices[14][2] = "Paravirtualizaci&oacute;n";
 choices[14][3] = "Hardware";
 answers[14] = 3;
 units[14] = ['124'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 7415. ";
 preguntaids[14] = 7415


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[15]= "16)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[15]= new Array();
 choices[15][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[15][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[15][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[15][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[15] = 3;
 units[15] = ['1'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 25. Constituci&oacute;n de 1978";
 preguntaids[15] = 25


//  Id pregunta: 6615 Año de creación de pregunta: 2009
 questions[16]= "17)  En el contexto de la Inteligencia Artifical, &iquest;cu&aacute;l de los siguientes es un tipo de Red Neuronal?";
 choices[16]= new Array();
 choices[16][0] = "Fenomenol&oacute;gica";
 choices[16][1] = "Facial";
 choices[16][2] = "De Bradley";
 choices[16][3] = "Perceptr&oacute;n";
 answers[16] = 3;
 units[16] = ['67'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 6615. ";
 preguntaids[16] = 6615


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[17]= "18)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[17]= new Array();
 choices[17][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[17][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[17][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[17][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[17] = 3;
 units[17] = ['1'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 77. Constituci&oacute;n de 1978";
 preguntaids[17] = 77


//  Id pregunta: 6709 Año de creación de pregunta: 2009
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes apartados NO es una t&eacute;cnica utilizada en reconocimiento de voz?";
 choices[18]= new Array();
 choices[18][0] = "Modelos de Markov";
 choices[18][1] = "Redes Neuronales";
 choices[18][2] = "DTW (Dynamic Time Warping)";
 choices[18][3] = "OSR (Online Speech Recognition)";
 answers[18] = 3;
 units[18] = ['81'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6709. MAP 2008 A1";
 preguntaids[18] = 6709


//  Id pregunta: 2559 Año de creación de pregunta: 2009
 questions[19]= "20)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[19]= new Array();
 choices[19][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[19][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[19][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[19][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[19] = 0;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 2559. ";
 preguntaids[19] = 2559


//  Id pregunta: 10124 Año de creación de pregunta: 2015
 questions[20]= "21)  Respecto a la Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, se&ntilde;ale la respuesta correcta:";
 choices[20]= new Array();
 choices[20][0] = "Las personas jur&iacute;dicas son las &uacute;nicas que pueden hacer uso de los datos generados y custodiados por los organismos del sector p&uacute;blico.";
 choices[20][1] = "La reutilizaci&oacute;n supone actividades como la copia, difusi&oacute;n, reordenaci&oacute;n y combinaci&oacute;n de la informaci&oacute;n siempre que sea con fines no comerciales.";
 choices[20][2] = "El sitio web datos.gob.es es el portal de car&aacute;cter nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica del Sector P&uacute;blico.";
 choices[20][3] = "Los documentos y recursos de informaci&oacute;n reutilizables puestos a disposici&oacute;n p&uacute;blica utilizar&aacute;n est&aacute;ndares abiertos y est&aacute;ndares propietarios indistintamente.";
 answers[20] = 2;
 units[20] = ['27'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 10124. Examen TIC A1 2014";
 preguntaids[20] = 10124


//  Id pregunta: 4573 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l es la relaci&oacute;n entre IMT-2000 y UMTS?:";
 choices[21]= new Array();
 choices[21][0] = "Es el mismo sistema";
 choices[21][1] = "UMTS forma parte de la familia IMT-2000";
 choices[21][2] = "IMT-2000 forma parte de la familia UMTS";
 choices[21][3] = "Son est&aacute;ndares diferentes";
 answers[21] = 1;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4573. ";
 preguntaids[21] = 4573


//  Id pregunta: 9796 Año de creación de pregunta: 2015
 questions[22]= "23)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[22]= new Array();
 choices[22][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[22][1] = "Informado, sostenible y solidario.";
 choices[22][2] = "Inteligente, sostenible e integrador.";
 choices[22][3] = "Arm&oacute;nico, estable y social.";
 answers[22] = 2;
 units[22] = ['19'];
 blocks[22] = ['A4'];
 comments[22] = "Id Pregunta: 9796. ";
 preguntaids[22] = 9796


//  Id pregunta: 4629 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Qu&eacute; se entiende por 'modem de cable'?:";
 choices[23]= new Array();
 choices[23][0] = "A un cable inversor utilizado para la conexi&oacute;n entre dos dispositivos por el puerto serie";
 choices[23][1] = "A un cable utilizado para unir dos PCs por el puerto paralelo";
 choices[23][2] = "A un dispositivo que permite la transmisi&oacute;n de datos a alta velocidad a trav&eacute;s de una red de cable";
 choices[23][3] = "A un modem que no necesita fuente de alimentaci&oacute;n y que es del tama&ntilde;o de una 'caja de cerillas' que pr&aacute;cticamente que embutido en un cable";
 answers[23] = 2;
 units[23] = ['115'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4629. ";
 preguntaids[23] = 4629


//  Id pregunta: 2079 Año de creación de pregunta: 2002
 questions[24]= "25)  Dentro de la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de la entrop&iacute;a se utiliza para:";
 choices[24]= new Array();
 choices[24][0] = "Asignar un peso a cada alternativa";
 choices[24][1] = "Normalizar las puntuaciones brutas otorgadas";
 choices[24][2] = "Ordenar las alternativas";
 choices[24][3] = "Suavizar la subjetividad del m&eacute;todo directo de asignaci&oacute;n de pesos";
 answers[24] = 3;
 units[24] = ['38'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2079. ";
 preguntaids[24] = 2079


//  Id pregunta: 1012 Año de creación de pregunta: 2016
 questions[25]= "26)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[25]= new Array();
 choices[25][0] = "la poblaci&oacute;n del territorio";
 choices[25][1] = "el volumen de gesti&oacute;n";
 choices[25][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[25][3] = "todas son correctas";
 answers[25] = 3;
 units[25] = ['4', '7', '8', '9'];
 blocks[25] = ['A1', 'A2'];
 comments[25] = "Id Pregunta: 1012. Ley 40/2015";
 preguntaids[25] = 1012


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[26]= new Array();
 choices[26][0] = "Siempre en formato electr&oacute;nico.";
 choices[26][1] = "Siempre en formato papel.";
 choices[26][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[26][3] = "La ley no regula el formato del expediente.";
 answers[26] = 0;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 205. Ley 39/2015";
 preguntaids[26] = 205


//  Id pregunta: 4861 Año de creación de pregunta: 2002
 questions[27]= "28)  En X.400, &iquest;cu&aacute;les son las partes que definen un dominio de gesti&oacute;n?:";
 choices[27]= new Array();
 choices[27][0] = "Un PRMD y un IPM";
 choices[27][1] = "Un AU y un ADMD";
 choices[27][2] = "Un MTA y opcionalmente UA's, MS's y AU's";
 choices[27][3] = "Un AU y un PRMD";
 answers[27] = 1;
 units[27] = ['116'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4861. ";
 preguntaids[27] = 4861


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[28]= new Array();
 choices[28][0] = "Varios namenodes y varios datanodes por cluster";
 choices[28][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[28][2] = "1 namenode y varios datanodes por cluster";
 choices[28][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[28] = 2;
 units[28] = ['73'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 759. Big Data y NoSQL";
 preguntaids[28] = 759


//  Id pregunta: 1035 Año de creación de pregunta: 2016
 questions[29]= "30)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[29]= new Array();
 choices[29][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[29][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[29][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[29][3] = "Todas son correctas.";
 answers[29] = 3;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 1035. Ley 40/2015";
 preguntaids[29] = 1035


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[30]= "31)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[30]= new Array();
 choices[30][0] = "De las disposiciones favorables.";
 choices[30][1] = "De las disposiciones sancionadoras no favorables.";
 choices[30][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[30][3] = "Las respuestas b) y c) son correctas.";
 answers[30] = 3;
 units[30] = ['1'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 79. Constituci&oacute;n de 1978";
 preguntaids[30] = 79


//  Id pregunta: 10471 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;En el contexto de los Sistemas de Informaci&oacute;n Geogr&aacute;fica &iquest;cu&aacute;l de los siguientes usos ser&iacute;a un mashup?";
 choices[31]= new Array();
 choices[31][0] = "B&uacute;squeda de una direcci&oacute;n (geocodificaci&oacute;n directa)";
 choices[31][1] = "Carga de una capa WMS externa usando la API de OpenLayers";
 choices[31][2] = "Descarga de datos vectoriales en GML o KML";
 choices[31][3] = "Todas las anteriores";
 answers[31] = 1;
 units[31] = ['71'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 10471. ";
 preguntaids[31] = 10471


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale cu&aacute;l de las siguientes sentencias se cataloga dentro del lenguaje SQL como sentencia de DCL:";
 choices[32]= new Array();
 choices[32][0] = "REVOKE";
 choices[32][1] = "CREATE";
 choices[32][2] = "DELETE";
 choices[32][3] = "SELECT";
 answers[32] = 0;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 688. AGE A2 2015";
 preguntaids[32] = 688


//  Id pregunta: 10049 Año de creación de pregunta: 2015
 questions[33]= "34)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Java BluePrints.";
 choices[33][1] = "Java Specification Request.";
 choices[33][2] = "Java Community Process.";
 choices[33][3] = "Java Pattern Spec.";
 answers[33] = 0;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10049. Examen TIC A2 2014";
 preguntaids[33] = 10049


//  Id pregunta: 7800 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l es la topolog&iacute;a de red implementada en la arquitectura Bluetooth Low Energy (BLE)?";
 choices[34]= new Array();
 choices[34][0] = "Piconet";
 choices[34][1] = "Scatternet";
 choices[34][2] = "Star-Bus";
 choices[34][3] = "Full-Mesh";
 answers[34] = 2;
 units[34] = ['108'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 7800. ";
 preguntaids[34] = 7800


//  Id pregunta: 10857 Año de creación de pregunta: 2015
 questions[35]= "36)  Con respecto a WCF, se&ntilde;ale la incorrecta:";
 choices[35]= new Array();
 choices[35][0] = "Los servicios WCF pueden ejecutarse sobre TCP.";
 choices[35][1] = "WCF son las siglas de Windows Communication Foundation.";
 choices[35][2] = "WCF usa siempre SOAP.";
 choices[35][3] = "Las tres anteriores son ciertas.";
 answers[35] = 2;
 units[35] = ['63'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10857. ";
 preguntaids[35] = 10857


//  Id pregunta: 7389 Año de creación de pregunta: 2010
 questions[36]= "37)  El protocolo FTP es un protocolo:";
 choices[36]= new Array();
 choices[36][0] = "Seguro";
 choices[36][1] = "No orientado a conexi&oacute;n";
 choices[36][2] = "De nivel de aplicaci&oacute;n";
 choices[36][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[36] = 2;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7389. Examen TIC B 2009";
 preguntaids[36] = 7389


//  Id pregunta: 1027 Año de creación de pregunta: 2016
 questions[37]= "38)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[37]= new Array();
 choices[37][0] = "Un d&iacute;a";
 choices[37][1] = "Dos d&iacute;as";
 choices[37][2] = "Tres d&iacute;as";
 choices[37][3] = "Cuatro d&iacute;as";
 answers[37] = 2;
 units[37] = ['4', '7', '8', '9'];
 blocks[37] = ['A1', 'A2'];
 comments[37] = "Id Pregunta: 1027. Ley 40/2015";
 preguntaids[37] = 1027


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Nacional de la Mujer.";
 choices[38][1] = "El Consejo de la Mujer.";
 choices[38][2] = "El Instituto de la Mujer.";
 choices[38][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[38] = 3;
 units[38] = ['14'];
 blocks[38] = ['A3'];
 comments[38] = "Id Pregunta: 371. Pol&iacute;ticas de igualdad";
 preguntaids[38] = 371


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[39]= "40)  La estructura econ&oacute;mica espa&ntilde;ola es aproximadamente la siguiente:";
 choices[39]= new Array();
 choices[39][0] = "Sector primario (5-10%) Sector industrial(25-30%) Sector servicios(60-65%)";
 choices[39][1] = "Sector primario (3-5%) Sector industrial(15-20%) Sector servicios(65-75%)";
 choices[39][2] = "Sector primario (10-15%) Sector industrial(15-20%) Sector servicios(50-60%)";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = 1;
 units[39] = ['12'];
 blocks[39] = ['A3'];
 comments[39] = "Id Pregunta: 350. Modelo econ&oacute;mico";
 preguntaids[39] = 350


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[40]= "41)  En el lenguaje de modelado UML :";
 choices[40]= new Array();
 choices[40][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[40][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[40][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[40][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[40] = 2;
 units[40] = ['89'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 813. AGE A1 2015";
 preguntaids[40] = 813


//  Id pregunta: 3342 Año de creación de pregunta: 2004
 questions[41]= "42)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[41]= new Array();
 choices[41][0] = "Infracci&oacute;n muy grave";
 choices[41][1] = "Infracci&oacute;n grave";
 choices[41][2] = "Infracci&oacute;n leve";
 choices[41][3] = "No se considera infracci&oacute;n";
 answers[41] = 1;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 3342. Ley 34/2002, art&iacute;culo 38";
 preguntaids[41] = 3342


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[42]= "43)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[42]= new Array();
 choices[42][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[42][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[42][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[42][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[42] = 3;
 units[42] = ['22'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 514. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[42] = 514


//  Id pregunta: 3048 Año de creación de pregunta: 2002
 questions[43]= "44)  Se&ntilde;ale la respuesta falsa. El sistema de ficheros en Unix:";
 choices[43]= new Array();
 choices[43][0] = "Est&aacute; formado por i-nodos";
 choices[43][1] = "Se utiliza para acceder a los perif&eacute;ricos";
 choices[43][2] = "Tiene una estructura no basada en jerarqu&iacute;as";
 choices[43][3] = "Est&aacute; basado en listas enlazadas, con varios niveles de indireccion";
 answers[43] = 2;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3048. ";
 preguntaids[43] = 3048


//  Id pregunta: 7118 Año de creación de pregunta: 2010
 questions[44]= "45)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[44]= new Array();
 choices[44][0] = "No";
 choices[44][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[44][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[44][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[44] = 2;
 units[44] = ['7'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 7118. Art&iacute;culo 3.3 RD 1671/2009";
 preguntaids[44] = 7118


//  Id pregunta: 5865 Año de creación de pregunta: 2007
 questions[45]= "46)  &iquest;Cu&aacute;l es el est&aacute;ndar en gesti&oacute;n de servicios de TI compatible con ITIL (IT Infrastructure Library)?";
 choices[45]= new Array();
 choices[45][0] = "ISO/IEC 20000";
 choices[45][1] = "ISO/IEC 6592";
 choices[45][2] = "ETSI TS 125 308";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = 0;
 units[45] = ['101'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 5865. ";
 preguntaids[45] = 5865


//  Id pregunta: 2774 Año de creación de pregunta: 2002
 questions[46]= "47)  El modo de ejecuci&oacute;n menos privilegiado de un procesador es conocido como:";
 choices[46]= new Array();
 choices[46][0] = "Modo del sistema";
 choices[46][1] = "Modo de usuario";
 choices[46][2] = "Modo de control";
 choices[46][3] = "Modo del n&uacute;cleo";
 answers[46] = 1;
 units[46] = ['56'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2774. ";
 preguntaids[46] = 2774


//  Id pregunta: 2473 Año de creación de pregunta: 2002
 questions[47]= "48)  De acuerdo con la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, la prestaci&oacute;n de servicios de la sociedad de la informaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[47][1] = "No estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[47][2] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la salud";
 choices[47][3] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la juventud y la infancia";
 answers[47] = 1;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 2473. Ley 34/2002, art&iacute;culo 6";
 preguntaids[47] = 2473


//  Id pregunta: 5867 Año de creación de pregunta: 2007
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes no es una directriz de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[48]= new Array();
 choices[48][0] = "Asegure el control del usuario de los cambios de contenido que dependen del tiempo";
 choices[48][1] = "Utilice soluciones provisionales";
 choices[48][2] = "Aseg&uacute;rese de que los documentos son claros y simples";
 choices[48][3] = "Todas lo son";
 answers[48] = 3;
 units[48] = ['42'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 5867. ";
 preguntaids[48] = 5867


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[49]= "50)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[49]= new Array();
 choices[49][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[49][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[49][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[49][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[49] = 2;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 160. Uni&oacute;n Europea";
 preguntaids[49] = 160


//  Id pregunta: 10155 Año de creación de pregunta: 2015
 questions[50]= "51)  El Centro de Informaci&oacute;n y Red de Creaci&oacute;n de Empresas (CIRCE), gestionado por el Ministerio de Industria, Energ&iacute;a y Turismo:";
 choices[50]= new Array();
 choices[50][0] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de todas las empresas que vayan a ejercer su actividad en el territorio nacional.";
 choices[50][1] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de apoderamiento y gestiones notariales necesarias para la puesta en marcha de las empresas.";
 choices[50][2] = "Permite realizar de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de Sociedades Limitada Nueva Empresa (SLNE), Sociedades de Responsabilidad Limitada (SRL o SL), o Empresarios Individuales (Aut&oacute;nomos).";
 choices[50][3] = "Es una plataforma para la informaci&oacute;n del emprendedor que se utiliza en los Puntos de Atenci&oacute;n al Emprendedor (PAEs), no permitiendo la realizaci&oacute;n de tr&aacute;mites online.";
 answers[50] = 2;
 units[50] = ['19'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 10155. Examen TIC A1 2014";
 preguntaids[50] = 10155


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[51]= new Array();
 choices[51][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[51][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[51][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[51][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[51] = 1;
 units[51] = ['5'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 114. Uni&oacute;n Europea";
 preguntaids[51] = 114


//  Id pregunta: 5082 Año de creación de pregunta: 2002
 questions[52]= "53)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?:";
 choices[52]= new Array();
 choices[52][0] = "No me afecta para nada";
 choices[52][1] = "La LSSI es aplicable";
 choices[52][2] = "S&oacute;lo para la publicidad";
 choices[52][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[52] = 1;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 5082. ";
 preguntaids[52] = 5082


//  Id pregunta: 10081 Año de creación de pregunta: 2015
 questions[53]= "54)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[53]= new Array();
 choices[53][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[53][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[53][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[53][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[53] = 2;
 units[53] = ['105'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 10081. Examen TIC A2 2014";
 preguntaids[53] = 10081


//  Id pregunta: 6016 Año de creación de pregunta: 2003
 questions[54]= "55)  &Aacute;lvaro est&aacute; iniciando las tareas de planificaci&oacute;n de un nuevo proyecto software, y ha efectuado unos c&aacute;lculos previos de &ldquo;puntos de funci&oacute;n&rdquo;. La t&eacute;cnica de Puntos de Funci&oacute;n es una t&eacute;cnica indirecta para determinar:";
 choices[54]= new Array();
 choices[54][0] = "La calidad de una aplicaci&oacute;n software y la tasa de errores prevista.";
 choices[54][1] = "La dimensi&oacute;n de un proyecto inform&aacute;tico y su probable coste.";
 choices[54][2] = "La usabilidad de un interfaz y la previsi&oacute;n de errores de usuario.";
 choices[54][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n.";
 answers[54] = 1;
 units[54] = ['92'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6016. TIC B 2007";
 preguntaids[54] = 6016


//  Id pregunta: 2318 Año de creación de pregunta: 2002
 questions[55]= "56)  Uno de los principales impulsores del concepto de organizaci&oacute;n basada en la informaci&oacute;n ha sido:";
 choices[55]= new Array();
 choices[55][0] = "Elton Mayo";
 choices[55][1] = "Peter Drucker";
 choices[55][2] = "Lynda Applegate";
 choices[55][3] = "Pigrogine";
 answers[55] = 1;
 units[55] = ['25'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2318. ";
 preguntaids[55] = 2318


//  Id pregunta: 4834 Año de creación de pregunta: 2002
 questions[56]= "57)  En relaci&oacute;n con la prestaci&oacute;n de servicios de telecomunicaciones en Espa&ntilde;a, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[56]= new Array();
 choices[56][0] = "Est&aacute; liberalizada la provisi&oacute;n de servicios, pero no la instalaci&oacute;n de redes de telecomunicaci&oacute;n";
 choices[56][1] = "S&oacute;lo est&aacute;n liberalizadas las comunicaciones telef&oacute;nicas y el acceso a internet";
 choices[56][2] = "S&oacute;lo Telef&oacute;nica de Espa&ntilde;a, Jazztel y Ono est&aacute;n autorizadas a alquilar circuitos punto a punto";
 choices[56][3] = "La instalaci&oacute;n y explotaci&oacute;n de redes y la provisi&oacute;n de servicios de telecomunicaciones est&aacute;n liberalizados";
 answers[56] = 3;
 units[56] = ['121'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4834. ";
 preguntaids[56] = 4834


//  Id pregunta: 5468 Año de creación de pregunta: 2007
 questions[57]= "58)  Una vez obtenido el Diagrama de Flujo de Datos y el Modelo L&oacute;gico Normalizado, se debe comprobar que:";
 choices[57]= new Array();
 choices[57][0] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una y s&oacute;lo una entidad del Modelo L&oacute;gico Normalizado";
 choices[57][1] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una o varias entidades del Modelo L&oacute;gico Normalizado";
 choices[57][2] = "Cada entidad del Modelo L&oacute;gico Normalizado se corresponde con uno o varios almacenes del Diagrama de Flujo de Datos";
 choices[57][3] = "Cada flujo del Diagrama de Flujo de Datos se almacena en una o varias entidades del Modelo L&oacute;gico Normalizado.";
 answers[57] = 1;
 units[57] = ['85'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 5468. ";
 preguntaids[57] = 5468


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[58]= "59)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[58]= new Array();
 choices[58][0] = "Principio de transparencia.";
 choices[58][1] = "Principio de cooperaci&oacute;n.";
 choices[58][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[58][3] = "Principio de lealtad institucional.";
 answers[58] = 1;
 units[58] = ['11'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 320. Presupuestos generales";
 preguntaids[58] = 320


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[59]= new Array();
 choices[59][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[59][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[59][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[59][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[59] = 2;
 units[59] = ['85'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 806. Junta de Extremadura A1 2015";
 preguntaids[59] = 806


//  Id pregunta: 6844 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Qu&eacute; regula la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n)?";
 choices[60]= new Array();
 choices[60][0] = "El acceso a los servicios de telecomunicaci&oacute;n en el interior de los edificios";
 choices[60][1] = "Los servicios de difusi&oacute;n de radio y televisi&oacute;n por cable";
 choices[60][2] = "La consideraci&oacute;n de Internet como servicio universal";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = 0;
 units[60] = ['121'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 6844. ";
 preguntaids[60] = 6844


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[61]= "62)  A tenor de lo que expresa la Ley 59/2003 en su art&iacute;culo 31 relativo a infracciones, se&ntilde;ale cu&aacute;l de las siguientes ser&iacute;a considerada muy grave:";
 choices[61]= new Array();
 choices[61][0] = "La falta de constituci&oacute;n por los prestadores que expidan certificados reconocidos de la garant&iacute;a econ&oacute;mica para afrontar el riesgo de la responsabilidad por los da&ntilde;os y perjuicios que pueda ocasionar el uso de los certificados que expidan.";
 choices[61][1] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el prestador de servicios de certificaci&oacute;n haya expedido un certificado reconocido, y que este hecho haya causado da&ntilde;os graves al usuario.";
 choices[61][2] = "El incumplimiento de las resoluciones dictadas por el Ministerio de Ciencia y Tecnolog&iacute;a para asegurar que el prestador de servicios de certificaci&oacute;n se ajuste a esta Ley.";
 choices[61][3] = "La resistencia, obstrucci&oacute;n, excusa o negativa injustificada a la actuaci&oacute;n inspectora de los &oacute;rganos facultados en esta Ley.";
 answers[61] = 1;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 443. AGE A2 2015";
 preguntaids[61] = 443


//  Id pregunta: 9767 Año de creación de pregunta: 2014
 questions[62]= "63)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[62]= new Array();
 choices[62][0] = "v4";
 choices[62][1] = "V4.1";
 choices[62][2] = "v5";
 choices[62][3] = "v6";
 answers[62] = 2;
 units[62] = ['36'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 9767. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";
 preguntaids[62] = 9767


//  Id pregunta: 4230 Año de creación de pregunta: 2006
 questions[63]= "64)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[63]= new Array();
 choices[63][0] = "Productividad";
 choices[63][1] = "Fiabilidad";
 choices[63][2] = "Factores de calidad";
 choices[63][3] = "Complejidad";
 answers[63] = 1;
 units[63] = ['93'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 4230. ";
 preguntaids[63] = 4230


//  Id pregunta: 1374 Año de creación de pregunta: 2016
 questions[64]= "65)  Los conectores LC son:";
 choices[64]= new Array();
 choices[64][0] = "Conectores para Pcr.";
 choices[64][1] = "Conectores de par trenzado.";
 choices[64][2] = "Conectores exclusivos para Mainframe.";
 choices[64][3] = "Par trenzado.";
 answers[64] = 3;
 units[64] = ['51'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1374. ";
 preguntaids[64] = 1374


//  Id pregunta: 6613 Año de creación de pregunta: 2009
 questions[65]= "66)  &iquest;Cu&aacute;l de estos diagramas de UML no est&aacute; categorizado como un diagrama de comportamiento?";
 choices[65]= new Array();
 choices[65][0] = "Diagrama de interacci&oacute;n.";
 choices[65][1] = "Diagrama de casos de uso.";
 choices[65][2] = "Diagrama de objetos.";
 choices[65][3] = "Diagrama de actividad.";
 answers[65] = 2;
 units[65] = ['85'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 6613. ";
 preguntaids[65] = 6613


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[66]= "67)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[66]= new Array();
 choices[66][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[66][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[66][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[66][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[66] = 2;
 units[66] = ['12'];
 blocks[66] = ['A3'];
 comments[66] = "Id Pregunta: 332. Modelo econ&oacute;mico";
 preguntaids[66] = 332


//  Id pregunta: 10802 Año de creación de pregunta: 2015
 questions[67]= "68)  En SQL, para borrar los datos de una tabla pero seguir conserv&aacute;ndola se emplea:";
 choices[67]= new Array();
 choices[67][0] = "DROP TABLE";
 choices[67][1] = "TRUNCATE TABLE";
 choices[67][2] = "DELETE TABLE";
 choices[67][3] = "MODIFY TABLE";
 answers[67] = 1;
 units[67] = ['61'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 10802. ";
 preguntaids[67] = 10802


//  Id pregunta: 8674 Año de creación de pregunta: 2013
 questions[68]= "69)  &iquest;Cu&aacute;les son los modelos m&aacute;s habituales de Sistemas Distribuidos?";
 choices[68]= new Array();
 choices[68][0] = "Cliente/Servidor";
 choices[68][1] = "Proxy/Cach&eacute;";
 choices[68][2] = "Modelo Peer to Peer";
 choices[68][3] = "Los anteriores y otros modelos como c&oacute;digo M&oacute;vil, Agente M&oacute;vil y Clientes ligeros";
 answers[68] = 3;
 units[68] = ['55'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8674. ";
 preguntaids[68] = 8674


//  Id pregunta: 6611 Año de creación de pregunta: 2009
 questions[69]= "70)  &iquest;Qu&eacute; longitudes de clave tienen las diferentes versiones del algoritmo AES reconocidas oficialmente por el NIST?";
 choices[69]= new Array();
 choices[69][0] = "64, 128, 256 bits";
 choices[69][1] = "128, 192, 256 bits";
 choices[69][2] = "128, 256, 512 bits";
 choices[69][3] = "128, 256, 384 bits";
 answers[69] = 1;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 6611. ";
 preguntaids[69] = 6611


//  Id pregunta: 9895 Año de creación de pregunta: 2015
 questions[70]= "71)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[70]= new Array();
 choices[70][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[70][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[70][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y desistir de acciones.";
 choices[70][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[70] = 1;
 units[70] = ['7', '19'];
 blocks[70] = ['A2', 'A4'];
 comments[70] = "Id Pregunta: 9895. ";
 preguntaids[70] = 9895


//  Id pregunta: 5800 Año de creación de pregunta: 2007
 questions[71]= "72)  Con independencia de lo establecido sobre la validez del documento nacional de identidad, la vigencia de los certificados electr&oacute;nicos reconocidos incorporados al mismo no podr&aacute; ser superior a:";
 choices[71]= new Array();
 choices[71][0] = "2 a&ntilde;os";
 choices[71][1] = "36 meses";
 choices[71][2] = "5 a&ntilde;os";
 choices[71][3] = "12 meses";
 answers[71] = 2;
 units[71] = ['77'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 5800. Real Decreto 414/2015, de 29 de mayo que modifica el apartado 1 del art&iacute;culo 12 (Validez de los Certificados electr&oacute;nicos) del Real Decreto 1553/200";
 preguntaids[71] = 5800


//  Id pregunta: 6235 Año de creación de pregunta: 2003
 questions[72]= "73)  El transporte de voz en tiempo real a trav&eacute;s de redes IP se efect&uacute;a por medio de los protocolos:";
 choices[72]= new Array();
 choices[72][0] = "MPLS sobre UDP";
 choices[72][1] = "RVSP";
 choices[72][2] = "RTP sobre TCP";
 choices[72][3] = "RTP sobre UDP";
 answers[72] = 3;
 units[72] = ['110'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 6235. Examen TIC A Castilla La Mancha 2007";
 preguntaids[72] = 6235


//  Id pregunta: 7324 Año de creación de pregunta: 2010
 questions[73]= "74)  CMM en el campo de la ingenier&iacute;a y calidad del software son las siglas de:";
 choices[73]= new Array();
 choices[73][0] = "Capacity Maturity Model";
 choices[73][1] = "Capability Maturity Model";
 choices[73][2] = "Capacity Management Model";
 choices[73][3] = "Capability Management Model";
 answers[73] = 1;
 units[73] = ['92'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 7324. ";
 preguntaids[73] = 7324


//  Id pregunta: 6064 Año de creación de pregunta: 2003
 questions[74]= "75)  Una caracter&iacute;stica de la tecnolog&iacute;a HSDPA (High Speed Downlink Packet Access) es:";
 choices[74]= new Array();
 choices[74][0] = "Adaptaci&oacute;n r&aacute;pida del enlace. La velocidad de transmisi&oacute;n de datos var&iacute;a de forma r&aacute;pida seg&uacute;n las condicionesdel canal de radio.";
 choices[74][1] = "Transmisi&oacute;n en canal no compartido. Se introduce un nuevo canal de transporte en el enlace descendentedenominado HS-DSCH (High-Speed Downlink Shared Channel).";
 choices[74][2] = "Los datos que se reciben de forma err&oacute;nea, debido a las condiciones de propagaci&oacute;n, no hay que solicitarlos denuevo al transmisor para su correcci&oacute;n.";
 choices[74][3] = "La modulaci&oacute;n normalmente empleada es 4-QAM.";
 answers[74] = 0;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 6064. TIC B 2007";
 preguntaids[74] = 6064


