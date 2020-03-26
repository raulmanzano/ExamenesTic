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
//  Id pregunta: 987 Año de creación de pregunta: 2016
 questions[0]= "1)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[0]= new Array();
 choices[0][0] = "Subsecretario";
 choices[0][1] = "Subdirector general";
 choices[0][2] = "Secretario de Estado";
 choices[0][3] = "ninguna es correcta";
 answers[0] = 0;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 987. Ley 40/2015";
 preguntaids[0] = 987


//  Id pregunta: 2559 Año de creación de pregunta: 2009
 questions[1]= "2)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[1]= new Array();
 choices[1][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[1][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[1][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[1][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[1] = 0;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 2559. ";
 preguntaids[1] = 2559


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[2]= new Array();
 choices[2][0] = "Versi&oacute;n digital prioritaria.";
 choices[2][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[2][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[2][3] = "Apertura y transparencia.";
 answers[2] = 0;
 units[2] = ['5'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 109. Uni&oacute;n Europea";
 preguntaids[2] = 109


//  Id pregunta: 2043 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en la comparaci&oacute;n binaria de las alternativas?:";
 choices[3]= new Array();
 choices[3][0] = "Concordancia";
 choices[3][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[3][2] = "Ponderaci&oacute;n lineal";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = 0;
 units[3] = ['38'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2043. ";
 preguntaids[3] = 2043


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[4]= new Array();
 choices[4][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[4][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[4][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[4][3] = "Todas lo son";
 answers[4] = 0;
 units[4] = ['17'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 432. Mercado &Uacute;nico Digital";
 preguntaids[4] = 432


//  Id pregunta: 4445 Año de creación de pregunta: 2002
 questions[5]= "6)  Respecto a los buscadores de internet:";
 choices[5]= new Array();
 choices[5][0] = "los basados en el modelo enciclopedia clasifican las p&aacute;ginas seg&uacute;n su contenido sint&aacute;ctico";
 choices[5][1] = "los basados en palabras clave construyen tablas o &iacute;ndices inversos a partir de las palabras clave de un texto";
 choices[5][2] = "los metabuscadores, al usar varios buscadores simult&aacute;neamente, son mejores que todos los buscadores que usan juntos";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = 1;
 units[5] = ['103'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4445. ";
 preguntaids[5] = 4445


//  Id pregunta: 7946 Año de creación de pregunta: 2011
 questions[6]= "7)  Una direcci&oacute;n IP identifica:";
 choices[6]= new Array();
 choices[6][0] = "Una conexi&oacute;n.";
 choices[6][1] = "Una interfaz de tarjeta de red.";
 choices[6][2] = "Un ordenador.";
 choices[6][3] = "Una aplicaci&oacute;n interactiva.";
 answers[6] = 1;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7946. Examen TIC A2 2010";
 preguntaids[6] = 7946


//  Id pregunta: 2129 Año de creación de pregunta: 2002
 questions[7]= "8)  En el marco de la decisi&oacute;n multicriterio, la normalizaci&oacute;n es el proceso por el que:";
 choices[7]= new Array();
 choices[7][0] = "Se eliminan las alternativas que no intervienen en el c&aacute;lculo";
 choices[7][1] = "Se desactivan aquellos criterios en los que todas las alternativas alcanzan id&eacute;ntica puntuaci&oacute;n";
 choices[7][2] = "Se ajusta la matriz de puntuaciones seg&uacute;n un modelo de referencia";
 choices[7][3] = "Se modifica el contenido de la matriz de puntuaciones para hacer &eacute;sta comparables entre s&iacute;";
 answers[7] = 3;
 units[7] = ['38'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2129. ";
 preguntaids[7] = 2129


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[8]= "9)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[8]= new Array();
 choices[8][0] = "El Presidente y su gabinete.";
 choices[8][1] = "El Presidente y sus Ministros.";
 choices[8][2] = "El Rey y el Presidente.";
 choices[8][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[8] = 3;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 84. Constituci&oacute;n de 1978";
 preguntaids[8] = 84


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[9]= new Array();
 choices[9][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[9][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[9][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[9][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[9] = 1;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7541. Map 2005";
 preguntaids[9] = 7541


//  Id pregunta: 1033 Año de creación de pregunta: 2016
 questions[10]= "11)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[10]= new Array();
 choices[10][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[10][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[10][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[10][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[10] = 2;
 units[10] = ['4', '7', '8', '9'];
 blocks[10] = ['A1', 'A2'];
 comments[10] = "Id Pregunta: 1033. Ley 40/2015";
 preguntaids[10] = 1033


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[11]= new Array();
 choices[11][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[11][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[11][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[11][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[11] = 0;
 units[11] = ['76'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 781. Xunta de Galicia 2015";
 preguntaids[11] = 781


//  Id pregunta: 7090 Año de creación de pregunta: 2010
 questions[12]= "13)  La ley sobre reutilizaci&oacute;n de la informaci&oacute;n  del sector p&uacute;blico es la ley";
 choices[12]= new Array();
 choices[12][0] = "Ley 37/2007";
 choices[12][1] = "Ley 32/2005";
 choices[12][2] = "Ley 25/2007";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = 0;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 7090. Ley 37/2007";
 preguntaids[12] = 7090


//  Id pregunta: 9654 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Existe un Estatuto espec&iacute;fico del personal directivo de la Administraci&oacute;n General del Estado?";
 choices[13]= new Array();
 choices[13][0] = "S&iacute;. El Estatuto B&aacute;sico del Empleado P&uacute;blico.";
 choices[13][1] = "S&iacute;. La Ley de Altos Cargos de la Administraci&oacute;n General del Estado.";
 choices[13][2] = "No. A&uacute;n no se ha desarrollado la previsi&oacute;n del Estatuto B&aacute;sico del Empleado P&uacute;blico a este respecto.";
 choices[13][3] = "No existe, porque no est&aacute; normativamente previsto.";
 answers[13] = 2;
 units[13] = ['28'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 9654. Examen TIC A1 2013";
 preguntaids[13] = 9654


//  Id pregunta: 9599 Año de creación de pregunta: 2014
 questions[14]= "15)  Los conectores LC son:";
 choices[14]= new Array();
 choices[14][0] = "Conectores para PCI.";
 choices[14][1] = "Conectores de par trenzado.";
 choices[14][2] = "Conectores exclusivos para Mainframe.";
 choices[14][3] = "Conectores de fibra &oacute;ptica.";
 answers[14] = 3;
 units[14] = ['104'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9599. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[14] = 9599


//  Id pregunta: 10512 Año de creación de pregunta: 2015
 questions[15]= "16)  La Ley 25/2007, establece las condiciones de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones. De entre los datos que hay que almacenar, no se encuentra:";
 choices[15]= new Array();
 choices[15][0] = "Datos para determinar fecha, hora y duraci&oacute;n de un comunici&oacute;n.";
 choices[15][1] = "Tipo de comunicaci&oacute;n.";
 choices[15][2] = "Datos de llamadas no conectadas";
 choices[15][3] = "Datos de llamadas infructuosas";
 answers[15] = 2;
 units[15] = ['121'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10512. Recogido de la redacci&oacute;n de la propia Ley. &quot;Art&iacute;culo 4. Los datos relativos a las llamadas no conectadas est&aacute;n excluidos de las obligaciones de conservaci&oacute;n contenidas en esta Ley...&quot;";
 preguntaids[15] = 10512


//  Id pregunta: 1848 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento est&aacute; basado en el estado de los enlaces?";
 choices[16]= new Array();
 choices[16][0] = "RIP versi&oacute;n 1";
 choices[16][1] = "OSPF";
 choices[16][2] = "BGP";
 choices[16][3] = "RIP versi&oacute;n 2";
 answers[16] = 1;
 units[16] = ['102'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1848. ";
 preguntaids[16] = 1848


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[17]= "18)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[17]= new Array();
 choices[17][0] = "Discriminaci&oacute;n indirecta.";
 choices[17][1] = "Discriminaci&oacute;n directa.";
 choices[17][2] = "Discriminaci&oacute;n por maternidad.";
 choices[17][3] = "Discriminaci&oacute;n abusiva.";
 answers[17] = 1;
 units[17] = ['14'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 375. Pol&iacute;ticas de igualdad";
 preguntaids[17] = 375


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[18]= "19)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[18]= new Array();
 choices[18][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[18][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[18][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[18][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[18] = 1;
 units[18] = ['7'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 203. Ley 39/2015";
 preguntaids[18] = 203


//  Id pregunta: 1674 Año de creación de pregunta: 2016
 questions[19]= "20)  En la terminolog&iacute;a de recuperaci&oacute;n de sistemas ante desastres, el tiempo que cuantifica la cantidad perdida de datos hasta el momento de la interrupci&oacute;n, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "MTBF (Tiempo Medio Entre Fallos)";
 choices[19][1] = "RPO (Objetivo de Punto de Recuperaci&oacute;n)";
 choices[19][2] = "RTO (Objetivo de Tiempo de Recuperaci&oacute;n)";
 choices[19][3] = "SDO (Objetivo de Entrega del Servicio)";
 answers[19] = 1;
 units[19] = ['45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 1674. ";
 preguntaids[19] = 1674


//  Id pregunta: 7338 Año de creación de pregunta: 2010
 questions[20]= "21)  La principal diferencia entre la t&eacute;cnica de los Puntos de Funci&oacute;n (PF's) y los PF's Mark II es:";
 choices[20]= new Array();
 choices[20][0] = "Los PF's Mark II utilizan el concepto de transacci&oacute;n l&oacute;gica";
 choices[20][1] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros)";
 choices[20][2] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros), m&aacute;s el concepto de transacci&oacute;n l&oacute;gica";
 choices[20][3] = "Los PF's Mark II utilizan 5 elementos (Entradas, Salidas, Consultas, Ficheros e Interfaces)";
 answers[20] = 0;
 units[20] = ['93'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 7338. ";
 preguntaids[20] = 7338


//  Id pregunta: 10608 Año de creación de pregunta: 2015
 questions[21]= "22)  Seg&uacute;n la Ley 9/2014, es un derecho del usuario de teleco:";
 choices[21]= new Array();
 choices[21][0] = "La desconexi&oacute;n de cualquier servicio, previa solicitud.";
 choices[21][1] = "Disponer de un 902 o comunicaci&oacute;n electr&oacute;nica como servicio de atenci&oacute;n al cliente.";
 choices[21][2] = "La continuidad del servicio.";
 choices[21][3] = "A ser informado, pleno pago de la tasa correspondiente, de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 answers[21] = 2;
 units[21] = ['121'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10608. Articulo 47";
 preguntaids[21] = 10608


//  Id pregunta: 7550 Año de creación de pregunta: 2010
 questions[22]= "23)  En la matriz de puntuaci&oacute;n REDER, que es el m&eacute;todo de evaluaci&oacute;n utilizado para puntuar las memorias de las organizaciones que se presentan al Premio Europeo de la Calidad, al subcriterio 7b se le asigna, del total de puntos correspondientes al criterio 7, el:";
 choices[22]= new Array();
 choices[22][0] = "10%.";
 choices[22][1] = "15%.";
 choices[22][2] = "20%.";
 choices[22][3] = "25%.";
 answers[22] = 3;
 units[22] = ['98'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 7550. Map 2005";
 preguntaids[22] = 7550


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[23]= "24)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[23][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[23][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[23][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[23] = 0;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 479. Sociedad de la informaci&oacute;n";
 preguntaids[23] = 479


//  Id pregunta: 6323 Año de creación de pregunta: 2003
 questions[24]= "25)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[24]= new Array();
 choices[24][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[24][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[24][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = 1;
 units[24] = ['93'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6323. ";
 preguntaids[24] = 6323


//  Id pregunta: 3143 Año de creación de pregunta: 2002
 questions[25]= "26)  MPEG es:";
 choices[25]= new Array();
 choices[25][0] = "Mobile Photographs Evolution using GPRS, tecnolog&iacute;a para transmitir fotograf&iacute;as usando un m&oacute;vil GPRS";
 choices[25][1] = "Mobile Protocols Expert Group, grupo de trabajo de ISO experto en la aplicaci&oacute;n de distintos protocolos a la tecnolog&iacute;a inal&aacute;mbrica m&oacute;vil";
 choices[25][2] = "Multimedia Protocols for Evolution of GSM: conjunto de protocolos desarrollados para dispositivos m&oacute;viles que potencian las capacidades multimedia contempladas en la actual GSM";
 choices[25][3] = "Moving Pictures Expert Group, grupo de trabajo de ISO cuya misi&oacute;n es desarrollar est&aacute;ndares de compresi&oacute;n para audio y video";
 answers[25] = 3;
 units[25] = ['62'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3143. ";
 preguntaids[25] = 3143


//  Id pregunta: 2123 Año de creación de pregunta: 2002
 questions[26]= "27)  En el &aacute;rea de los sistemas de informaci&oacute;n, &iquest;cu&aacute;l es el significado de las siglas MIS?:";
 choices[26]= new Array();
 choices[26][0] = "Manufacturing In Sequence";
 choices[26][1] = "Manufacturing Information System";
 choices[26][2] = "Management Information System";
 choices[26][3] = "Modelling Input System";
 answers[26] = 2;
 units[26] = ['24'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2123. ";
 preguntaids[26] = 2123


//  Id pregunta: 2029 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es un organismo nacional para la formulaci&oacute;n de est&aacute;ndares?:";
 choices[27]= new Array();
 choices[27][0] = "ANSI";
 choices[27][1] = "JIS";
 choices[27][2] = "DIN";
 choices[27][3] = "CEN";
 answers[27] = 3;
 units[27] = ['48'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2029. ";
 preguntaids[27] = 2029


//  Id pregunta: 8584 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[28]= new Array();
 choices[28][0] = "ISA";
 choices[28][1] = "HTI";
 choices[28][2] = "PCI";
 choices[28][3] = "AGP";
 answers[28] = 1;
 units[28] = ['56'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8584. ";
 preguntaids[28] = 8584


//  Id pregunta: 9139 Año de creación de pregunta: 2014
 questions[29]= "30)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un perfil participante?";
 choices[29]= new Array();
 choices[29][0] = "Directivo";
 choices[29][1] = "Jefe de Proyecto";
 choices[29][2] = "Consultor";
 choices[29][3] = "Usuario experto";
 answers[29] = 3;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 9139. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el perfil &quot;Directivo&quot;.";
 preguntaids[29] = 9139


//  Id pregunta: 7052 Año de creación de pregunta: 2010
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de dise&ntilde;o de sistemas de tiempo real?";
 choices[30]= new Array();
 choices[30][0] = "Rational Rose-RT.";
 choices[30][1] = "PERTS.";
 choices[30][2] = "TimeWiz.";
 choices[30][3] = "ADA.";
 answers[30] = 3;
 units[30] = ['89'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7052. ";
 preguntaids[30] = 7052


//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[31]= "32)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[31]= new Array();
 choices[31][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[31][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[31][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[31][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[31] = 3;
 units[31] = ['10'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[31] = 9037


//  Id pregunta: 5889 Año de creación de pregunta: 2007
 questions[32]= "33)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[32]= new Array();
 choices[32][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[32][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[32][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[32][3] = "Todas las anteriores son ciertas";
 answers[32] = 3;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 5889. ";
 preguntaids[32] = 5889


//  Id pregunta: 4594 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Entre que dos dispositivos se utiliza el NNI (network node interface)?:";
 choices[33]= new Array();
 choices[33][0] = "Dos switches ATM";
 choices[33][1] = "Dos sistemas finales ATM";
 choices[33][2] = "Un DSU/CSU y un router";
 choices[33][3] = "Un sistema final ATM y un switch";
 answers[33] = 0;
 units[33] = ['107'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4594. ";
 preguntaids[33] = 4594


//  Id pregunta: 9626 Año de creación de pregunta: 2014
 questions[34]= "35)  En relaci&oacute;n con el programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas), se&ntilde;ale la respuesta err&oacute;nea:";
 choices[34]= new Array();
 choices[34][0] = "Abarca el per&iacute;odo 2010-2020";
 choices[34][1] = "Actuaciones destacadas dentro del marco del programa ISA son la red transeuropea sTESTA o el apoyo al proyecto STORK";
 choices[34][2] = "Tiene como &aacute;mbito las administraciones p&uacute;blicas europeas, incluidas las administraciones regionales y locales y las instituciones y &oacute;rganos comunitarios";
 choices[34][3] = "Su base legal se recoge en la Decisi&oacute;n 922/2009/CE";
 answers[34] = 0;
 units[34] = ['43'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 9626. El programa ISA abarca el per&iacute;odo 2010-2015";
 preguntaids[34] = 9626


//  Id pregunta: 1430 Año de creación de pregunta: 2016
 questions[35]= "36)  De conformidad con el art&iacute;culo 59 de la Constituci&oacute;n Espa&ntilde;ola, si no hubiere ninguna persona a quien corresponda la Regencia, &eacute;sta ser&aacute; nombrada por las Cortes Generales, y se compondr&aacute;:";
 choices[35]= new Array();
 choices[35][0] = "De una persona.";
 choices[35][1] = "De tres personas.";
 choices[35][2] = "De cinco personas.";
 choices[35][3] = "De una, tres o cinco personas.";
 answers[35] = 3;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 1430. ";
 preguntaids[35] = 1430


//  Id pregunta: 5852 Año de creación de pregunta: 2007
 questions[36]= "37)  La refactorizaci&oacute;n consiste en:";
 choices[36]= new Array();
 choices[36][0] = "Mejorar el c&oacute;digo fuente.";
 choices[36][1] = "Mejorar el dise&ntilde;o de una aplicaci&oacute;n.";
 choices[36][2] = "Mejorar el mantenimiento del c&oacute;digo fuente.";
 choices[36][3] = "Todas las respuestas anteriores son correctas.";
 answers[36] = 3;
 units[36] = ['97'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 5852. Examen 2006 JCYL";
 preguntaids[36] = 5852


//  Id pregunta: 4880 Año de creación de pregunta: 2002
 questions[37]= "38)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndar 10Base2 es de:";
 choices[37]= new Array();
 choices[37][0] = "100 metros";
 choices[37][1] = "185 metros";
 choices[37][2] = "200 metros";
 choices[37][3] = "500 metros";
 answers[37] = 1;
 units[37] = ['104'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4880. ";
 preguntaids[37] = 4880


//  Id pregunta: 9836 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[38]= new Array();
 choices[38][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[38][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[38][2] = "Externo, interno y conceptual.";
 choices[38][3] = "Externo, interno y l&oacute;gico.";
 answers[38] = 2;
 units[38] = ['60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9836. ";
 preguntaids[38] = 9836


//  Id pregunta: 8350 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[39]= new Array();
 choices[39][0] = "IEEE";
 choices[39][1] = "ISO";
 choices[39][2] = "IEC";
 choices[39][3] = "ANSI";
 answers[39] = 3;
 units[39] = ['48'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 8350. Examen UC3M 2010";
 preguntaids[39] = 8350


//  Id pregunta: 6844 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Qu&eacute; regula la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n)?";
 choices[40]= new Array();
 choices[40][0] = "El acceso a los servicios de telecomunicaci&oacute;n en el interior de los edificios";
 choices[40][1] = "Los servicios de difusi&oacute;n de radio y televisi&oacute;n por cable";
 choices[40][2] = "La consideraci&oacute;n de Internet como servicio universal";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 0;
 units[40] = ['121'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 6844. ";
 preguntaids[40] = 6844


//  Id pregunta: 3037 Año de creación de pregunta: 2009
 questions[41]= "42)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[41]= new Array();
 choices[41][0] = "Actualizaci&oacute;n.";
 choices[41][1] = "Agregaci&oacute;n.";
 choices[41][2] = "Dril-down.";
 choices[41][3] = "Slice-Dice.";
 answers[41] = 0;
 units[41] = ['72', '73'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3037. ";
 preguntaids[41] = 3037


//  Id pregunta: 8700 Año de creación de pregunta: 2013
 questions[42]= "43)  &iquest;Cu&aacute;l es la relaci&oacute;n entre trabajos, procesos, hilos y fibras en Windows?";
 choices[42]= new Array();
 choices[42][0] = "Los trabajos contienen procesos.";
 choices[42][1] = "Los procesos contienen hilos.";
 choices[42][2] = "Los hilos contienen fibras.";
 choices[42][3] = "Todas son correctas.";
 answers[42] = 3;
 units[42] = ['58'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8700. ";
 preguntaids[42] = 8700


//  Id pregunta: 1068 Año de creación de pregunta: 2016
 questions[43]= "44)  En cu&aacute;l de las siguientes combinaciones de topolog&iacute;as de red, un fallo en el cableado de red, impedir&aacute; el funcionamiento de toda ella:";
 choices[43]= new Array();
 choices[43][0] = "Topolog&iacute;a Estrella f&iacute;sica y Mallada l&oacute;gica.";
 choices[43][1] = "Topolog&iacute;a Anillo f&iacute;sica y Bus l&oacute;gica.";
 choices[43][2] = "Topolog&iacute;a Mallada f&iacute;sica y Anillo l&oacute;gica.";
 choices[43][3] = "Topolog&iacute;a Bus f&iacute;sica y Estrella l&oacute;gica.";
 answers[43] = 3;
 units[43] = ['104'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1068. ";
 preguntaids[43] = 1068


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[44]= new Array();
 choices[44][0] = "El Tratado de Lisboa";
 choices[44][1] = "El Tratado de Amsterdam";
 choices[44][2] = "El Tratado de Niza";
 choices[44][3] = "El Acta &Uacute;nica Europea";
 answers[44] = 1;
 units[44] = ['15'];
 blocks[44] = ['A3'];
 comments[44] = "Id Pregunta: 420. Mercado laboral";
 preguntaids[44] = 420


//  Id pregunta: 4636 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n establece la norma 802.11g de comunicaciones inal&aacute;mbricas?:";
 choices[45]= new Array();
 choices[45][0] = "100 Mbps";
 choices[45][1] = "54 Mbps";
 choices[45][2] = "22 Mbps";
 choices[45][3] = "36 Mbps";
 answers[45] = 1;
 units[45] = ['108'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4636. ";
 preguntaids[45] = 4636


//  Id pregunta: 5954 Año de creación de pregunta: 2007
 questions[46]= "47)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, frecuencias o canales radioel&eacute;ctricos no adecuada al correspondiente plan de utilizaci&oacute;n del espectro radioel&eacute;ctrico o al Cuadro Nacional de Atribuci&oacute;n de Frecuencia:";
 choices[46]= new Array();
 choices[46][0] = "Es una infracci&oacute;n muy grave";
 choices[46][1] = "Es una infracci&oacute;n grave";
 choices[46][2] = "Es una infracci&oacute;n leve";
 choices[46][3] = "No es una infracci&oacute;n";
 answers[46] = 0;
 units[46] = ['121'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5954. ";
 preguntaids[46] = 5954


//  Id pregunta: 7203 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[47]= new Array();
 choices[47][0] = "Nessus";
 choices[47][1] = "Snort";
 choices[47][2] = "Nagios";
 choices[47][3] = "NetSaint";
 answers[47] = 1;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 7203. Castilla La Mancha 2009";
 preguntaids[47] = 7203


//  Id pregunta: 9639 Año de creación de pregunta: 2014
 questions[48]= "49)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[48]= new Array();
 choices[48][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[48][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[48][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[48][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[48] = 0;
 units[48] = ['31'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 9639. ";
 preguntaids[48] = 9639


//  Id pregunta: 10933 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;En qu&eacute; medida las entidades privadas tienen que cumplir la Ley de Transparencia?";
 choices[49]= new Array();
 choices[49][0] = "Las entidades privadas que perciban durante el per&iacute;odo de un a&ntilde;o ayudas o subvenciones p&uacute;blicas en una cuant&iacute;a superior a 150.000 euros";
 choices[49][1] = "cuando al menos el 40?% del total de sus ingresos anuales tengan car&aacute;cter de ayuda o subvenci&oacute;n p&uacute;blica, siempre que alcancen como m&iacute;nimo la cantidad de 5.000 euros.";
 choices[49][2] = "No tienen que cumplir la ley de transparencia";
 choices[49][3] = "las cumplir&aacute;n sin ninguna limitaci&oacute;n";
 answers[49] = 1;
 units[49] = ['22'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 10933. ";
 preguntaids[49] = 10933


//  Id pregunta: 10003 Año de creación de pregunta: 2015
 questions[50]= "51)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[50]= new Array();
 choices[50][0] = "WS-Security permite crear servicios web seguros.";
 choices[50][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[50][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[50][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[50] = 3;
 units[50] = ['55'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 10003. Examen TIC A2 2014";
 preguntaids[50] = 10003


//  Id pregunta: 5360 Año de creación de pregunta: 2006
 questions[51]= "52)  Un buen libro de claves podr&iacute;a ser";
 choices[51]= new Array();
 choices[51][0] = "Los n&uacute;meros primos de 128 cifras";
 choices[51][1] = "La gu&iacute;a de Paginas Blancas de Madrid 2005";
 choices[51][2] = "El CD &quot;Hung up&quot; de Madonna";
 choices[51][3] = "todas las anteriores";
 answers[51] = 3;
 units[51] = ['120'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5360. ";
 preguntaids[51] = 5360


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[52]= new Array();
 choices[52][0] = "Tres meses.";
 choices[52][1] = "Nueve meses.";
 choices[52][2] = "Cuatro meses.";
 choices[52][3] = "Seis meses.";
 answers[52] = 0;
 units[52] = ['11'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 285. Presupuestos generales";
 preguntaids[52] = 285


//  Id pregunta: 6904 Año de creación de pregunta: 2010
 questions[53]= "54)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[53]= new Array();
 choices[53][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a asim&eacute;trica.";
 choices[53][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[53][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[53][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[53] = 0;
 units[53] = ['78'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6904. TIC A 2009";
 preguntaids[53] = 6904


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[54]= "55)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Anualmente.";
 choices[54][1] = "Ninguna de las respuestas es correcta.";
 choices[54][2] = "Trimestralmente.";
 choices[54][3] = "Semestralmente.";
 answers[54] = 0;
 units[54] = ['11'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 293. Presupuestos generales";
 preguntaids[54] = 293


//  Id pregunta: 2494 Año de creación de pregunta: 2004
 questions[55]= "56)  En UNIX, &iquest;qu&eacute; elemento traduce los comandos de usuario en instrucciones para el Kernel?";
 choices[55]= new Array();
 choices[55][0] = "Shell";
 choices[55][1] = "Kernel";
 choices[55][2] = "Shell o Kernel, dependiendo de la secuencia de comandos";
 choices[55][3] = "Ninguno de los anteriores";
 answers[55] = 0;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2494. Similar a examen TIC SS A 2003";
 preguntaids[55] = 2494


//  Id pregunta: 8049 Año de creación de pregunta: 2011
 questions[56]= "57)  En los dispositivos tipo esc&aacute;ner, la resoluci&oacute;n interpolada es:";
 choices[56]= new Array();
 choices[56][0] = "Una resoluci&oacute;n calculada que genera nuevos puntos a partir de otros reales m&aacute;s pr&oacute;ximos.";
 choices[56][1] = "La cantidad de puntos individuales de una imagen captada mediante el sensor";
 choices[56][2] = "La empleada por los programas OCR para identificar el texto.";
 choices[56][3] = "La que determina la profundidad del color";
 answers[56] = 0;
 units[56] = ['80', '81'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8049. Examen TIC A2 2010";
 preguntaids[56] = 8049


//  Id pregunta: 8568 Año de creación de pregunta: 2013
 questions[57]= "58)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[57]= new Array();
 choices[57][0] = "Mediante el elemento Assets.";
 choices[57][1] = "Mediante el elemento Permission.";
 choices[57][2] = "Mediante el elemento Constraints.";
 choices[57][3] = "Todas son falsas.";
 answers[57] = 0;
 units[57] = ['41'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 8568. ";
 preguntaids[57] = 8568


//  Id pregunta: 3925 Año de creación de pregunta: 2002
 questions[58]= "59)  Los almacenes de datos, en un DFD:";
 choices[58]= new Array();
 choices[58][0] = "pueden conectarse directamente con los terminadores, sin necesitar procesos intermedios";
 choices[58][1] = "por convenio, si el flujo hacia/desde el almac&eacute;n es etiquetado, se supone que representa a parte del registro";
 choices[58][2] = "aparecen desde el DFD de nivel 0 para dar importancia a los datos sobre los procesos que los manejan";
 choices[58][3] = "son modificados tanto en la lectura como en la escritura de datos";
 answers[58] = 1;
 units[58] = ['85', '86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3925. ";
 preguntaids[58] = 3925


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[59]= new Array();
 choices[59][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[59][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[59][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[59][3] = "todas son correctas";
 answers[59] = 3;
 units[59] = ['7'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 239. Ley 39/2015";
 preguntaids[59] = 239


//  Id pregunta: 6024 Año de creación de pregunta: 2003
 questions[60]= "61)  En el Modelo E/R de Chen del universo de discurso del departamento de RRHH de una cierta organizaci&oacute;n,existe la restricci&oacute;n, en base a un criterio fijado por la Direcci&oacute;n, de que el atributo &ldquo;mes&rdquo; de la entidad&ldquo;vacaciones&rdquo; s&oacute;lo podr&aacute; tomar los valores &lsquo;Junio&rsquo;, &lsquo;Julio&rsquo; y &lsquo;Agosto&rsquo;. Esta restricci&oacute;n o limitaci&oacute;n deintegridad es de tipo:";
 choices[60]= new Array();
 choices[60][0] = "Sint&aacute;ctica.";
 choices[60][1] = "Sem&aacute;ntica estructural.";
 choices[60][2] = "Sem&aacute;ntica de usuario sobre los valores.";
 choices[60][3] = "Sem&aacute;ntica de usuario sobre la asociaci&oacute;n.";
 answers[60] = 2;
 units[60] = ['85'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 6024. TIC B 2007";
 preguntaids[60] = 6024


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[61]= "62)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[61]= new Array();
 choices[61][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[61][1] = "Ninguna de las respuestas es correcta.";
 choices[61][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[61][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[61] = 0;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 154. Uni&oacute;n Europea";
 preguntaids[61] = 154


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[62]= "63)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[62]= new Array();
 choices[62][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[62][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[62][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[62][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[62] = 2;
 units[62] = ['14'];
 blocks[62] = ['A3'];
 comments[62] = "Id Pregunta: 354. Estado del Bienestar";
 preguntaids[62] = 354


//  Id pregunta: 1023 Año de creación de pregunta: 2016
 questions[63]= "64)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[63]= new Array();
 choices[63][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[63][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[63][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[63][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[63] = 0;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 1023. Ley 40/2015";
 preguntaids[63] = 1023


//  Id pregunta: 962 Año de creación de pregunta: 2016
 questions[64]= "65)  La Ley 40/2015 se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[64]= new Array();
 choices[64][0] = "la Administraci&oacute;n General del Estado";
 choices[64][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[64][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[64][3] = "el sector p&uacute;blico y privado institucional";
 answers[64] = 3;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 962. Ley 40/2015";
 preguntaids[64] = 962


//  Id pregunta: 5229 Año de creación de pregunta: 2006
 questions[65]= "66)  La recomendaci&oacute;n ITU-T X-500 tambi&eacute;n se conoce como:";
 choices[65]= new Array();
 choices[65][0] = "ISO/IEC 9459";
 choices[65][1] = "ISO/IEC 9549";
 choices[65][2] = "ISO/IEC 9594";
 choices[65][3] = "ISO/IEC 9495";
 answers[65] = 2;
 units[65] = ['116'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5229. ";
 preguntaids[65] = 5229


//  Id pregunta: 6820 Año de creación de pregunta: 2010
 questions[66]= "67)  En el &aacute;mbito del Single Sign-On, &iquest;c&oacute;mo se denomina a la informaci&oacute;n confidencial agrupada (nombre de usuario, contrase&ntilde;a, etc) que se precisa para acceder a las aplicaciones?";
 choices[66]= new Array();
 choices[66][0] = "Credenciales";
 choices[66][1] = "Federaci&oacute;n";
 choices[66][2] = "Cookies";
 choices[66][3] = "Login";
 answers[66] = 0;
 units[66] = ['123'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 6820. ";
 preguntaids[66] = 6820


//  Id pregunta: 3654 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[67]= new Array();
 choices[67][0] = "Los diagramas de secuencia muestran interacciones entre elementos desde el punto de vista temporal";
 choices[67][1] = "Los diagramas de estados-transiciones visualizan aut&oacute;matas de estados finitos";
 choices[67][2] = "La notaci&oacute;n UML proviene de la fusi&oacute;n de las notaciones Booch, OMT, OOSE y otras";
 choices[67][3] = "Todas las anteriores respuestas son ciertas";
 answers[67] = 3;
 units[67] = ['85'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3654. ";
 preguntaids[67] = 3654


//  Id pregunta: 7515 Año de creación de pregunta: 2010
 questions[68]= "69)  En el dise&ntilde;o estructurado se utiliza el concepto de acoplamiento entre m&oacute;dulos de software. Indique de entre los siguientes tipos de acoplamiento el que corresponde al caso en que la informaci&oacute;n se transmite entre m&oacute;dulos como estructura de datos:";
 choices[68]= new Array();
 choices[68][0] = "Acoplamiento de datos simple.";
 choices[68][1] = "Acoplamiento por estampado.";
 choices[68][2] = "Acoplamiento de control.";
 choices[68][3] = "Acoplamiento externo.";
 answers[68] = 1;
 units[68] = ['89'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 7515. Map 2005";
 preguntaids[68] = 7515


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[69]= "70)  El Presupuesto por programas sirve para saber...";
 choices[69]= new Array();
 choices[69][0] = "En qu&eacute; nos gastamos el dinero";
 choices[69][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[69][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[69][3] = "Qui&eacute;n se gasta el dinero";
 answers[69] = 2;
 units[69] = ['11'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 272. Presupuestos generales";
 preguntaids[69] = 272


//  Id pregunta: 8606 Año de creación de pregunta: 2013
 questions[70]= "71)  Respecto a los LMS, indique la respuesta FALSA:";
 choices[70]= new Array();
 choices[70][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[70][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[70][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[70][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[70] = 1;
 units[70] = ['70'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8606. ";
 preguntaids[70] = 8606


//  Id pregunta: 10942 Año de creación de pregunta: 2015
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[71]= new Array();
 choices[71][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[71][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[71][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[71][3] = "Ninguna es correcta";
 answers[71] = 2;
 units[71] = ['104'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 10942. ";
 preguntaids[71] = 10942


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[72]= "73)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[72]= new Array();
 choices[72][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[72][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[72][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[72][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[72] = 3;
 units[72] = ['101'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 862. AGE A1 2015";
 preguntaids[72] = 862


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[73]= "74)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[73]= new Array();
 choices[73][0] = "Los cr&eacute;ditos";
 choices[73][1] = "Las partidas presupuestarias";
 choices[73][2] = "Los derechos";
 choices[73][3] = "Las obligaciones";
 answers[73] = 3;
 units[73] = ['11'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 270. Presupuestos generales";
 preguntaids[73] = 270


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[74]= "75)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[74]= new Array();
 choices[74][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[74][1] = "Personas con nacionalidad europea.";
 choices[74][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[74][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[74] = 3;
 units[74] = ['5'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 198. Uni&oacute;n Europea";
 preguntaids[74] = 198


