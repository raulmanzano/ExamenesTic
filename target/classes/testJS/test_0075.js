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
//  Id pregunta: 10520 Año de creación de pregunta: 2015
 questions[0]= "1)  En MPLS, c&oacute;mo se llama el router que no es de frontera";
 choices[0]= new Array();
 choices[0][0] = "LSR";
 choices[0][1] = "LER";
 choices[0][2] = "LSP";
 choices[0][3] = "FEC";
 answers[0] = 0;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10520. ";
 preguntaids[0] = 10520


//  Id pregunta: 2022 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes respuestas referidas a las auditor&iacute;as de control de calidad es cierta?:";
 choices[1]= new Array();
 choices[1][0] = "Es un procedimiento habitual de control de calidad del software";
 choices[1][1] = "Es un procedimiento extraordinario al que se pueden someter los proyectos que tengan especial magnitud";
 choices[1][2] = "Su objetivo es proceder al refinamiento sucesivo en la definici&oacute;n de las especificaciones finales del proyecto";
 choices[1][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[1] = 1;
 units[1] = ['36', '45'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2022. ";
 preguntaids[1] = 2022


//  Id pregunta: 6945 Año de creación de pregunta: 2010
 questions[2]= "3)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones";
 choices[2]= new Array();
 choices[2][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[2][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[2][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[2][3] = "T&eacute;cnica, funcional y organizativa";
 answers[2] = 0;
 units[2] = ['43'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 6945. Art&iacute;culo 6";
 preguntaids[2] = 6945


//  Id pregunta: 9090 Año de creación de pregunta: 2014
 questions[3]= "4)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[3]= new Array();
 choices[3][0] = "MD5 genera un hash de 128 bits.";
 choices[3][1] = "SHA-1 genera un hash de 160 bits.";
 choices[3][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[3][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[3] = 3;
 units[3] = ['76'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9090. Examen TIC-A1 2013";
 preguntaids[3] = 9090


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "14";
 choices[4][1] = "11";
 choices[4][2] = "12";
 choices[4][3] = "15";
 answers[4] = 0;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 465. Estrategia TIC";
 preguntaids[4] = 465


//  Id pregunta: 10538 Año de creación de pregunta: 2015
 questions[5]= "6)  De los perfiles creados por WS-I indique cu&aacute;l no existe";
 choices[5]= new Array();
 choices[5][0] = "WS-I Basic security profile";
 choices[5][1] = "WS-I Reliable secure profile";
 choices[5][2] = "WS-I Extended Reliable profile";
 choices[5][3] = "WS-I Basic profile";
 answers[5] = 2;
 units[5] = ['55'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 10538. ";
 preguntaids[5] = 10538


//  Id pregunta: 10238 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[6]= new Array();
 choices[6][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[6][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[6][2] = "Los 2 respuestas anteriores son correctas";
 choices[6][3] = "Ninguna de las anteriores es correcta";
 answers[6] = 2;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10238. ";
 preguntaids[6] = 10238


//  Id pregunta: 3938 Año de creación de pregunta: 2002
 questions[7]= "8)  No es un &quot;resultado&quot; del modelo EFQM:";
 choices[7]= new Array();
 choices[7][0] = "Resultados en la Sociedad";
 choices[7][1] = "Resultados en las Personas";
 choices[7][2] = "Resultados en los Clientes";
 choices[7][3] = "El manual de calidad de la empresa";
 answers[7] = 3;
 units[7] = ['98'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3938. ";
 preguntaids[7] = 3938


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[8]= new Array();
 choices[8][0] = "Veinticinco.";
 choices[8][1] = "Veintisiete.";
 choices[8][2] = "Veintinueve.";
 choices[8][3] = "Cuarenta y uno.";
 answers[8] = 1;
 units[8] = ['5'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 124. Uni&oacute;n Europea";
 preguntaids[8] = 124


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[9]= new Array();
 choices[9][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[9][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[9][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[9][3] = "todas son correctas";
 answers[9] = 3;
 units[9] = ['7'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 239. Ley 39/2015";
 preguntaids[9] = 239


//  Id pregunta: 9684 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[10]= new Array();
 choices[10][0] = "HTML+Javascript";
 choices[10][1] = "HTML+CSS3+Flash";
 choices[10][2] = "HTML+CSS3+Javascript";
 choices[10][3] = "HTML+CSS3";
 answers[10] = 2;
 units[10] = ['74'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9684. ";
 preguntaids[10] = 9684


//  Id pregunta: 10038 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Tipos Abstractos de Datos (TAD) es correcta?";
 choices[11]= new Array();
 choices[11][0] = "Los TAD describen datos simples abstractos en funci&oacute;n de las operaciones que pueden efectuar, dejando a un lado su implementaci&oacute;n.";
 choices[11][1] = "Las listas son TAD caracterizados por incluir elementos homog&eacute;neos relacionados linealmente, con un antecesor y un sucesor, a excepci&oacute;n del primer y &uacute;ltimo elemento, salvo en el caso de listas circulares.";
 choices[11][2] = "Los &aacute;rboles son TAD en los que cada nodo se caracteriza por su grado de entrada (n&uacute;mero de arcos que llegan al nodo) y su grado de salida (n&uacute;mero de arcos que salen del nodo). Existen &aacute;rboles dirigidos y no dirigidos.";
 choices[11][3] = "Dado un grafo, el orden del mismo es el n&uacute;mero mayor de arcos o aristas de sus nodos.";
 answers[11] = 1;
 units[11] = ['89'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 10038. Examen TIC A2 2014";
 preguntaids[11] = 10038


//  Id pregunta: 5203 Año de creación de pregunta: 2006
 questions[12]= "13)  En las tramas 802.3 el pre&aacute;mbulo est&aacute; formado por:";
 choices[12]= new Array();
 choices[12][0] = "Un patr&oacute;n alternativo de unos y ceros";
 choices[12][1] = "El flag de sincronizaci&oacute;n 01111110";
 choices[12][2] = "El tipo de protocolo de nivel superior";
 choices[12][3] = "El c&oacute;digo de redundancia c&iacute;clica";
 answers[12] = 0;
 units[12] = ['112'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5203. ";
 preguntaids[12] = 5203


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[13]= new Array();
 choices[13][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[13][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[13][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[13][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[13] = 2;
 units[13] = ['11'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 311. Presupuestos generales";
 preguntaids[13] = 311


//  Id pregunta: 10472 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes tipos de servicio NO corresponde a un est&aacute;ndar de OGC (Open Geospatial Consortium)?";
 choices[14]= new Array();
 choices[14][0] = "Web Map Service (WMS)";
 choices[14][1] = "Catalogue Service Web (CSW)";
 choices[14][2] = "Tile Map Service (TMS)";
 choices[14][3] = "Web Feature Service (WFS)";
 answers[14] = 2;
 units[14] = ['71'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10472. ";
 preguntaids[14] = 10472


//  Id pregunta: 3470 Año de creación de pregunta: 2006
 questions[15]= "16)  La firma electr&oacute;nica avanzada es aquella que cumple que:";
 choices[15]= new Array();
 choices[15][0] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n y est&aacute; creada por un dispositivo de control de firma seguro.";
 choices[15][1] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, est&aacute; creada por un dispositivo de control de firma seguro, tiene control exclusivo del firmante al crearla y no est&aacute; vinculada a los datos.";
 choices[15][2] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo del firmante al crearla y est&aacute; vinculada a los datos.";
 choices[15][3] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo de firmante al crearla y est&aacute; basada en un certificado reconocido.";
 answers[15] = 2;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 3470. ";
 preguntaids[15] = 3470


//  Id pregunta: 5163 Año de creación de pregunta: 2003
 questions[16]= "17)  &iquest;Qu&eacute; nivel OSI garantiza la comunicaci&oacute;n extremo a extremo?";
 choices[16]= new Array();
 choices[16][0] = "3";
 choices[16][1] = "4";
 choices[16][2] = "5";
 choices[16][3] = "6";
 answers[16] = 1;
 units[16] = ['108'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5163. ";
 preguntaids[16] = 5163


//  Id pregunta: 2758 Año de creación de pregunta: 2002
 questions[17]= "18)  El Kernel del sistema objetivo del proyecto GNU es:";
 choices[17]= new Array();
 choices[17][0] = "El kernel 'Linux', mantenido por Linus Torvalds";
 choices[17][1] = "El kernel de Minix, de Andrew S. Tanembaum";
 choices[17][2] = "El kernel Hurd";
 choices[17][3] = "Todas son falsas";
 answers[17] = 2;
 units[17] = ['57'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2758. ";
 preguntaids[17] = 2758


//  Id pregunta: 10531 Año de creación de pregunta: 2015
 questions[18]= "19)  Se&ntilde;ale el tipo de proyecto que no est&aacute; entre los contemplados por COCOMO";
 choices[18]= new Array();
 choices[18][0] = "Empotrado";
 choices[18][1] = "Org&aacute;nico";
 choices[18][2] = "Semiacoplado";
 choices[18][3] = "Semiempotrado";
 answers[18] = 3;
 units[18] = ['94'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10531. ";
 preguntaids[18] = 10531


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[19]= new Array();
 choices[19][0] = "De los derechos y deberes fundamentales.";
 choices[19][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[19][2] = "Derechos y libertades.";
 choices[19][3] = "De la Corona.";
 answers[19] = 0;
 units[19] = ['1'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 48. Constituci&oacute;n de 1978";
 preguntaids[19] = 48


//  Id pregunta: 9980 Año de creación de pregunta: 2015
 questions[20]= "21)  Se&ntilde;ale qu&eacute; medida es necesario adoptar en ficheros y tratamientos automatizados para establecer el nivel de seguridad medio seg&uacute;n se establece en el Real Decreto 1720/2007:";
 choices[20]= new Array();
 choices[20][0] = "Control de acceso: Los usuarios tendr&aacute;n acceso &uacute;nicamente a aquellos recursos que precisen para el desarrollo de sus funciones.";
 choices[20][1] = "Identificaci&oacute;n y autenticaci&oacute;n: El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[20][2] = "Telecomunicaciones: La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[20][3] = "Registro de accesos: De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 answers[20] = 1;
 units[20] = ['35'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 9980. Examen TIC A2 2014";
 preguntaids[20] = 9980


//  Id pregunta: 8201 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes actividades NO pertenece a la Gesti&oacute;n del Proyecto seg&uacute;n M&eacute;trica v3?";
 choices[21]= new Array();
 choices[21][0] = "Identificaci&oacute;n de las Propiedades de Calidad.";
 choices[21][1] = "Planificaci&oacute;n.";
 choices[21][2] = "Cierre del Proyecto.";
 choices[21][3] = "Estimaci&oacute;n de Esfuerzo.";
 answers[21] = 0;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 8201. Examen TIC A2 2010 interna";
 preguntaids[21] = 8201


//  Id pregunta: 6282 Año de creación de pregunta: 2007
 questions[22]= "23)  La tarea &quot;Diagn&oacute;stico del Sistema Actual&quot; a qu&eacute; actividad del procesos Planificaci&oacute;n de Sistemas de Informaci&oacute;n pertenece";
 choices[22]= new Array();
 choices[22][0] = "Estudio de la informaci&oacute;n relevante";
 choices[22][1] = "Estudio de los Sistemas de Informaci&oacute;n Actuales";
 choices[22][2] = "Identificaci&oacute;n de Requisitos";
 choices[22][3] = "Dise&ntilde;o del modelo de Sistemas de Informaci&oacute;n";
 answers[22] = 3;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 6282. ";
 preguntaids[22] = 6282


//  Id pregunta: 1024 Año de creación de pregunta: 2016
 questions[23]= "24)  La recusaci&oacute;n pueden promoverla...";
 choices[23]= new Array();
 choices[23][0] = "Cualquier &oacute;rgano";
 choices[23][1] = "El interesado";
 choices[23][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[23][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[23] = 1;
 units[23] = ['4', '7', '8', '9'];
 blocks[23] = ['A1', 'A2'];
 comments[23] = "Id Pregunta: 1024. Ley 40/2015";
 preguntaids[23] = 1024


//  Id pregunta: 4547 Año de creación de pregunta: 2002
 questions[24]= "25)  El est&aacute;ndar 100Base-FX corresponde a:";
 choices[24]= new Array();
 choices[24][0] = "Ethernet con un par extra de hilos";
 choices[24][1] = "Fast Ethernet con cables de fibra &oacute;ptica";
 choices[24][2] = "Fast Ethernet con cableado de par trenzado";
 choices[24][3] = "Ninguno de los anteriores";
 answers[24] = 1;
 units[24] = ['104'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4547. ";
 preguntaids[24] = 4547


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[25]= new Array();
 choices[25][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[25][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[25][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[25][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[25] = 2;
 units[25] = ['7'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 206. Ley 39/2015";
 preguntaids[25] = 206


//  Id pregunta: 8451 Año de creación de pregunta: 2011
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de los siguientes no se corresponde con un est&aacute;ndar de Sistemas Geogr&aacute;ficos de Informaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "ISO 19115.";
 choices[26][1] = "ISO 19130.";
 choices[26][2] = "ISO 19139";
 choices[26][3] = "Todos son est&aacute;ndares de sistemas SIG.";
 answers[26] = 3;
 units[26] = ['71'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8451. ";
 preguntaids[26] = 8451


//  Id pregunta: 10227 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l se corresponde con el nivel alto de planificaci&oacute;n del procesador?";
 choices[27]= new Array();
 choices[27][0] = "Scheduler";
 choices[27][1] = "Planificator";
 choices[27][2] = "High Planificator";
 choices[27][3] = "Dispatcher";
 answers[27] = 0;
 units[27] = ['56'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10227. ";
 preguntaids[27] = 10227


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[28]= "29)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[28]= new Array();
 choices[28][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[28][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[28][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[28][3] = "Todos las anteriores son ciertas.";
 answers[28] = 3;
 units[28] = ['12'];
 blocks[28] = ['A3'];
 comments[28] = "Id Pregunta: 335. Modelo econ&oacute;mico";
 preguntaids[28] = 335


//  Id pregunta: 1449 Año de creación de pregunta: 2016
 questions[29]= "30)  Cu&aacute;l NO es una funci&oacute;n de la Agencia de Protecci&oacute;n de Dato (entendi&eacute;ndose Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos) seg&uacute;n el art&iacute;culo 37 de la LOPD:";
 choices[29]= new Array();
 choices[29][0] = "Velar por el cumplimiento de la legislaci&oacute;n sobre protecci&oacute;n de datos y controlar su aplicaci&oacute;n.";
 choices[29][1] = "Emitir las autorizaciones previstas en la Ley o en sus disposiciones reglamentarias.";
 choices[29][2] = "Ejercer la potestad sancionadora en los t&eacute;rminos previstos.";
 choices[29][3] = "Es el &uacute;nico &oacute;rgano con la potestad de modificar la cuant&iacute;a de las sanciones.";
 answers[29] = 3;
 units[29] = ['35'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 1449. ";
 preguntaids[29] = 1449


//  Id pregunta: 1092 Año de creación de pregunta: 2016
 questions[30]= "31)  Cu&aacute;l de las siguientes afirmaciones relativa a las velocidades m&aacute;ximas est&aacute;ndar de transferencia en conexiones con dispositivos externos es correcta:";
 choices[30]= new Array();
 choices[30][0] = "En Firewire 1600 es 400 MB/s.";
 choices[30][1] = "En USB 1.0 es 1,5 MB/s.";
 choices[30][2] = "En Thunderbolt es 1800 MB/s.";
 choices[30][3] = "En USB 3.0 es 600 MB/s.";
 answers[30] = 3;
 units[30] = ['51'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1092. ";
 preguntaids[30] = 1092


//  Id pregunta: 3947 Año de creación de pregunta: 2002
 questions[31]= "32)  Por configuraci&oacute;n se entiende:";
 choices[31]= new Array();
 choices[31][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema.";
 choices[31][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas.";
 choices[31][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos.";
 choices[31][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior.";
 answers[31] = 2;
 units[31] = ['95'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3947. ";
 preguntaids[31] = 3947


//  Id pregunta: 3472 Año de creación de pregunta: 2006
 questions[32]= "33)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[32]= new Array();
 choices[32][0] = "Por la comisi&oacute;n de infracciones muy graves, se impondr&aacute; al infractor multa de 150.001 a 600.000 euros";
 choices[32][1] = "Por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros";
 choices[32][2] = "Por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = 3;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 3472. Ley 59/2003, art&iacute;culo 32";
 preguntaids[32] = 3472


//  Id pregunta: 10362 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Cu&aacute;les de las siguientes t&eacute;cnicas no suele utilizarse en los sistemas de reconocimiento de habla?";
 choices[33]= new Array();
 choices[33][0] = "Dynamic Time Warping";
 choices[33][1] = "Hidden Markov Model";
 choices[33][2] = "Neural Networks";
 choices[33][3] = "Todas las anteriores se suelen utilizar en los sistemas de reconocimiento de habla";
 answers[33] = 3;
 units[33] = ['80'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10362. ";
 preguntaids[33] = 10362


//  Id pregunta: 10509 Año de creación de pregunta: 2015
 questions[34]= "35)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta en relaci&oacute;n a Magerit";
 choices[34]= new Array();
 choices[34][0] = "En Magerit 3, vulnerabilidad de un activo es la potencialidad o posibilidad de ocurrencia de la materializaci&oacute;n de una amenaza sobre dicho activo";
 choices[34][1] = "Se permite estructurar el conjunto de activos en capas";
 choices[34][2] = "Se consideran activos esenciales, la informaci&oacute;n que se maneja y los servicios prestados";
 choices[34][3] = "Define que los activos est&aacute;n expuestos a amenazas que interesan por su valor";
 answers[34] = 0;
 units[34] = ['45'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 10509. ";
 preguntaids[34] = 10509


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[35]= "36)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[35]= new Array();
 choices[35][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[35][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[35][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[35][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[35] = 3;
 units[35] = ['89'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 814. AGE A1 2015";
 preguntaids[35] = 814


//  Id pregunta: 1352 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique cual de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[36]= new Array();
 choices[36][0] = "Joost";
 choices[36][1] = "Netflix";
 choices[36][2] = "Cassandra";
 choices[36][3] = "Hadoop";
 answers[36] = 3;
 units[36] = ['73'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1352. ";
 preguntaids[36] = 1352


//  Id pregunta: 6644 Año de creación de pregunta: 2009
 questions[37]= "38)  Respecto al &aacute;mbito de actuaci&oacute;n en la Plataforma de validaci&oacute;n y firma electr&oacute;nica, @firma, del Ministerio de Administraciones P&uacute;blicas, se&ntilde;ale la opci&oacute;n correcta:";
 choices[37]= new Array();
 choices[37][0] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[37][1] = "Todas las Administraciones P&uacute;blicas y Organismos asociados.";
 choices[37][2] = "Se except&uacute;an las Entidades Locales, Diputaciones provinciales y Cabildos, que acceden a los servicios proporcionados por las Comunidades Aut&oacute;nomas de su &aacute;mbito territorial.";
 choices[37][3] = "Se ofrecen los servicios de validaci&oacute;n y firma a cualquier organizaci&oacute;n de car&aacute;cter p&uacute;blico y privado";
 answers[37] = 1;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 6644. MAP 2008 A2";
 preguntaids[37] = 6644


//  Id pregunta: 9676 Año de creación de pregunta: 2014
 questions[38]= "39)  &iquest;Cu&aacute;l no es una novedad de HTML 5?";
 choices[38]= new Array();
 choices[38][0] = "Application Cache";
 choices[38][1] = "Elementos sem&aacute;nticos.";
 choices[38][2] = "Web workers";
 choices[38][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[38] = 3;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9676. ";
 preguntaids[38] = 9676


//  Id pregunta: 8377 Año de creación de pregunta: 2011
 questions[39]= "40)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[39]= new Array();
 choices[39][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[39][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[39][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[39][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[39] = 1;
 units[39] = ['60', '61'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8377. Examen UPM A2 2011";
 preguntaids[39] = 8377


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[40]= new Array();
 choices[40][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[40][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[40][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[40][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[40] = 2;
 units[40] = ['7'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 243. Ley 39/2015";
 preguntaids[40] = 243


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Con otra expresi&oacute;n m&aacute;s familiar es com&uacute;nmente conocido el Consejo de la Uni&oacute;n Europea?";
 choices[41]= new Array();
 choices[41][0] = "Parlamento Europeo";
 choices[41][1] = "Consejo de Jefes de Estado";
 choices[41][2] = "Consejo de Jefes de Estado y de Gobierno";
 choices[41][3] = "Consejo de Ministros";
 answers[41] = 3;
 units[41] = ['5'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 180. Uni&oacute;n Europea";
 preguntaids[41] = 180


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[42]= new Array();
 choices[42][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[42][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[42][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[42][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[42] = 3;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 152. Uni&oacute;n Europea";
 preguntaids[42] = 152


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[43]= new Array();
 choices[43][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[43][1] = "Directiva 2004/113/CE del Consejo.";
 choices[43][2] = "Todas son correctas.";
 choices[43][3] = "Todas son falsas.";
 answers[43] = 2;
 units[43] = ['14'];
 blocks[43] = ['A3'];
 comments[43] = "Id Pregunta: 385. Pol&iacute;ticas de igualdad";
 preguntaids[43] = 385


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[44]= "45)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[44]= new Array();
 choices[44][0] = "Interchange of Data between Administrations (IDA)";
 choices[44][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[44][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[44][3] = "Interoperability Electronic European Solution (IEES)";
 answers[44] = 1;
 units[44] = ['43'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 581. AGE A1 2015";
 preguntaids[44] = 581


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[45]= "46)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Acoso sexual.";
 choices[45][1] = "Acoso por raz&oacute;n de sexo.";
 choices[45][2] = "Acoso laboral.";
 choices[45][3] = "Acoso mental.";
 answers[45] = 1;
 units[45] = ['14'];
 blocks[45] = ['A3'];
 comments[45] = "Id Pregunta: 377. Pol&iacute;ticas de igualdad";
 preguntaids[45] = 377


//  Id pregunta: 6593 Año de creación de pregunta: 2009
 questions[46]= "47)  El XSLT transforma:";
 choices[46]= new Array();
 choices[46][0] = "S&oacute;lo de XML a XML";
 choices[46][1] = "De XML a otro documento";
 choices[46][2] = "S&oacute;lo de XML a HTML";
 choices[46][3] = "De un documento a XML";
 answers[46] = 1;
 units[46] = ['74'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 6593. MAP 2008 A1";
 preguntaids[46] = 6593


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[47]= new Array();
 choices[47][0] = "Indirecta.";
 choices[47][1] = "Directa.";
 choices[47][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[47][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[47] = 1;
 units[47] = ['14'];
 blocks[47] = ['A3'];
 comments[47] = "Id Pregunta: 1291. ";
 preguntaids[47] = 1291


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[48]= new Array();
 choices[48][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[48][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[48][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[48][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[48] = 1;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 452. Agenda Digital para Espa&ntilde;a";
 preguntaids[48] = 452


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[49]= "50)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[49]= new Array();
 choices[49][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[49][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[49][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[49][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[49] = 1;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 487. Sociedad de la informaci&oacute;n";
 preguntaids[49] = 487


//  Id pregunta: 5938 Año de creación de pregunta: 2007
 questions[50]= "51)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtualde 2^20 (2 elevado a 20) p&aacute;ginas y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos dep&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[50]= new Array();
 choices[50][0] = "32 kB";
 choices[50][1] = "4 MB";
 choices[50][2] = "1 MB";
 choices[50][3] = "8 kB";
 answers[50] = 0;
 units[50] = ['100'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 5938. ";
 preguntaids[50] = 5938


//  Id pregunta: 10503 Año de creación de pregunta: 2015
 questions[51]= "52)  Se&ntilde;ale el conjunto de conceptos que son introducidos por el Modelo Entidad/Relaci&oacute;n extendido";
 choices[51]= new Array();
 choices[51][0] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e identificaci&oacute;n.";
 choices[51][1] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima y Dependencia en existencia e identificaci&oacute;n.";
 choices[51][2] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e autenticaci&oacute;n.";
 choices[51][3] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima e independencia en existencia e identificaci&oacute;n.";
 answers[51] = 0;
 units[51] = ['85'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 10503. ";
 preguntaids[51] = 10503


//  Id pregunta: 9924 Año de creación de pregunta: 2015
 questions[52]= "53)  Seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre entidades registrales &iquest;En qu&eacute; segmento se situa el idenficador de fichero?";
 choices[52]= new Array();
 choices[52][0] = "De asunto";
 choices[52][1] = "De origen";
 choices[52][2] = "De destino";
 choices[52][3] = "De anexo";
 answers[52] = 3;
 units[52] = ['44'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 9924. ";
 preguntaids[52] = 9924


//  Id pregunta: 9855 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Qu&eacute; es un sistema legacy?";
 choices[53]= new Array();
 choices[53][0] = "Un sistema de informaci&oacute;n que, estando anticuado, contin&uacute;a siendo utilizado.";
 choices[53][1] = "Un sistema de informaci&oacute;n que est&aacute; anticuado y no se utiliza, pero contin&uacute;a instalado en los servidores de la organizaci&oacute;n.";
 choices[53][2] = "Un sistema de informaci&oacute;n de reemplazo para los sistemas anticuados.";
 choices[53][3] = "Un sistema de informaci&oacute;n que, aunque actualizado y sin incidencias, quiere ser evolucionado a otro con m&aacute;s funcionalidades.";
 answers[53] = 0;
 units[53] = ['96'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 9855. ";
 preguntaids[53] = 9855


//  Id pregunta: 8752 Año de creación de pregunta: 2013
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n?";
 choices[54]= new Array();
 choices[54][0] = "Planificaci&oacute;n y supervisi&oacute;n";
 choices[54][1] = "Estudio y evaluaci&oacute;n del sistema de control interno";
 choices[54][2] = "Obtenci&oacute;n de evidencia suficiente y adecuada";
 choices[54][3] = "Todas las anteriores";
 answers[54] = 3;
 units[54] = ['36'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 8752. ";
 preguntaids[54] = 8752


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la respuesta falsa:";
 choices[55]= new Array();
 choices[55][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[55][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[55][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[55][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[55] = 3;
 units[55] = ['5'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 103. Uni&oacute;n Europea";
 preguntaids[55] = 103


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[56]= "57)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[56]= new Array();
 choices[56][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[56][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[56][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[56][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[56] = 0;
 units[56] = ['15'];
 blocks[56] = ['A3'];
 comments[56] = "Id Pregunta: 416. Mercado laboral";
 preguntaids[56] = 416


//  Id pregunta: 1749 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique cu&aacute;l de los siguientes conceptos se corresponde con una primitiva de servicio entre niveles del modelo OSI:";
 choices[57]= new Array();
 choices[57][0] = "RECEIVE";
 choices[57][1] = "INDICATION";
 choices[57][2] = "SEND";
 choices[57][3] = "ECHO";
 answers[57] = 1;
 units[57] = ['105'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1749. ";
 preguntaids[57] = 1749


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[58]= new Array();
 choices[58][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[58][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[58][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[58][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[58] = 2;
 units[58] = ['22'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 502. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[58] = 502


//  Id pregunta: 3752 Año de creación de pregunta: 2002
 questions[59]= "60)  Del modelo clasico de ciclo de vida en cascada puede afirmarse que:";
 choices[59]= new Array();
 choices[59][0] = "El usuario valida el resultado de cada una de las fases";
 choices[59][1] = "Proporciona resultados parciales para validaci&oacute;n de requisitos";
 choices[59][2] = "Est&aacute; regido por la documentaci&oacute;n, que marca la transici&oacute;n entre fases";
 choices[59][3] = "Est&aacute; dirigido por el riesgo";
 answers[59] = 2;
 units[59] = ['82'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3752. ";
 preguntaids[59] = 3752


//  Id pregunta: 2331 Año de creación de pregunta: 2003
 questions[60]= "61)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/1999 del 13 de Diciembre, para ejercer los derechos de rectificaci&oacute;n y/o cancelaci&oacute;n se necesita:";
 choices[60]= new Array();
 choices[60][0] = "Nada, se ejercen gratuitamente";
 choices[60][1] = "Pagar solo los gastos ocasionados por la rectificaci&oacute;n";
 choices[60][2] = "Se necesita un notario";
 choices[60][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[60] = 0;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2331. ";
 preguntaids[60] = 2331


//  Id pregunta: 4233 Año de creación de pregunta: 2006
 questions[61]= "62)  La Teor&iacute;a CALIDAD/COSTE establece que...";
 choices[61]= new Array();
 choices[61][0] = "El coste es constante e independiente de la calidad del Producto.";
 choices[61][1] = "El coste de producci&oacute;n disminuye linealmente con el aumento de calidad.";
 choices[61][2] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad.";
 choices[61][3] = "La relaci&oacute;n entre el coste y la calidad representada gr&aacute;ficamente da lugar a una curva c&oacute;ncava con un m&iacute;nimo.";
 answers[61] = 2;
 units[61] = ['93'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 4233. ";
 preguntaids[61] = 4233


//  Id pregunta: 963 Año de creación de pregunta: 2016
 questions[62]= "63)  El sector p&uacute;blico institucional se integra por:";
 choices[62]= new Array();
 choices[62][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[62][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[62][2] = "las Universidades p&uacute;blicas";
 choices[62][3] = "todas son correctas";
 answers[62] = 3;
 units[62] = ['4', '7', '8', '9'];
 blocks[62] = ['A1', 'A2'];
 comments[62] = "Id Pregunta: 963. Ley 40/2015";
 preguntaids[62] = 963


//  Id pregunta: 8669 Año de creación de pregunta: 2013
 questions[63]= "64)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[63]= new Array();
 choices[63][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[63][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric (red SAN).";
 choices[63][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[63][3] = "Todas son correctas.";
 answers[63] = 3;
 units[63] = ['53'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8669. ";
 preguntaids[63] = 8669


//  Id pregunta: 1378 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[64]= new Array();
 choices[64][0] = "110";
 choices[64][1] = "119";
 choices[64][2] = "161";
 choices[64][3] = "25";
 answers[64] = 2;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1378. ";
 preguntaids[64] = 1378


//  Id pregunta: 6184 Año de creación de pregunta: 2003
 questions[65]= "66)  Las normas internacionales en materia de Seguridad de la informaci&oacute;n las publica:";
 choices[65]= new Array();
 choices[65][0] = "AENOR";
 choices[65][1] = "ISO";
 choices[65][2] = "EIC";
 choices[65][3] = "NIS";
 answers[65] = 1;
 units[65] = ['48'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 6184. Examen TIC A Castilla La Mancha 2007";
 preguntaids[65] = 6184


//  Id pregunta: 4307 Año de creación de pregunta: 2004
 questions[66]= "67)  La tecnolog&iacute;a DCOM toma las siglas de:";
 choices[66]= new Array();
 choices[66][0] = "Distributed Communication Model";
 choices[66][1] = "Development of Concurrent Multisystems";
 choices[66][2] = "Dynamic Component-Oriented Measure";
 choices[66][3] = "Distributed Component Object Model";
 answers[66] = 3;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 4307. ";
 preguntaids[66] = 4307


//  Id pregunta: 5803 Año de creación de pregunta: 2007
 questions[67]= "68)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA";
 choices[67]= new Array();
 choices[67][0] = "7.2Mbps";
 choices[67][1] = "14.4Mbps";
 choices[67][2] = "4.8Mbps";
 choices[67][3] = "10.7Mbps";
 answers[67] = 1;
 units[67] = ['117'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5803. ";
 preguntaids[67] = 5803


//  Id pregunta: 6602 Año de creación de pregunta: 2009
 questions[68]= "69)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[68]= new Array();
 choices[68][0] = "Solamente si es firma reconocida";
 choices[68][1] = "Solamente si es firma cualificada";
 choices[68][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[68][3] = "Ninguna de las anteriores es correcta";
 answers[68] = 2;
 units[68] = ['77'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 6602. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";
 preguntaids[68] = 6602


//  Id pregunta: 3486 Año de creación de pregunta: 2006
 questions[69]= "70)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[69]= new Array();
 choices[69][0] = "Algoritmo de clave secreta";
 choices[69][1] = "Bytecode";
 choices[69][2] = "Esteganograf&iacute;a";
 choices[69][3] = "Dpyware";
 answers[69] = 2;
 units[69] = ['78'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3486. ";
 preguntaids[69] = 3486


//  Id pregunta: 5391 Año de creación de pregunta: 2006
 questions[70]= "71)  Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[70]= new Array();
 choices[70][0] = "jpeg, tiff y spp";
 choices[70][1] = "jpeg, spp y psd";
 choices[70][2] = "jpeg, spp y tiff";
 choices[70][3] = "jpeg, gif y png";
 answers[70] = 3;
 units[70] = ['62'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 5391. ";
 preguntaids[70] = 5391


//  Id pregunta: 9890 Año de creación de pregunta: 2015
 questions[71]= "72)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[71]= new Array();
 choices[71][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[71][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[71][2] = "Ambas";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = 0;
 units[71] = ['7', '19'];
 blocks[71] = ['A2', 'A4'];
 comments[71] = "Id Pregunta: 9890. ";
 preguntaids[71] = 9890


//  Id pregunta: 7230 Año de creación de pregunta: 2010
 questions[72]= "73)  JME es la plataforma dirigida al desarrollo de aplicaciones para dispositivos como tel&eacute;fonos m&oacute;viles o PDAs, y es el acr&oacute;nimo de:";
 choices[72]= new Array();
 choices[72][0] = "Java Mobile Edition";
 choices[72][1] = "Java Micro Edition";
 choices[72][2] = "Java Mobility Edition";
 choices[72][3] = "Java Mobile Enterprise";
 answers[72] = 1;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7230. ";
 preguntaids[72] = 7230


//  Id pregunta: 4910 Año de creación de pregunta: 2002
 questions[73]= "74)  La RDSI (o ISDN):";
 choices[73]= new Array();
 choices[73][0] = "Implementa todas las capas del modelo OSI";
 choices[73][1] = "Implementa los protocolos TCP/IP";
 choices[73][2] = "Tiene un ancho de banda suficiente para la transmisi&oacute;n de v&iacute;deo sin comprimir";
 choices[73][3] = "Tiene un ancho de banda inferior al t&iacute;pico de las redes locales";
 answers[73] = 3;
 units[73] = ['114'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4910. ";
 preguntaids[73] = 4910


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[74]= "75)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[74]= new Array();
 choices[74][0] = "Al Gobierno.";
 choices[74][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[74][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[74][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[74] = 2;
 units[74] = ['11'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 294. Presupuestos generales";
 preguntaids[74] = 294


