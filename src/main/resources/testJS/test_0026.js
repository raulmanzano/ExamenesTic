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
//  Id pregunta: 5830 Año de creación de pregunta: 2007
 questions[0]= "1)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[0]= new Array();
 choices[0][0] = "Usando XSL";
 choices[0][1] = "Usando un DTD";
 choices[0][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[0][3] = "Usando XSLT";
 answers[0] = 1;
 units[0] = ['74'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 5830. Examen 2006 JCYL";
 preguntaids[0] = 5830


//  Id pregunta: 983 Año de creación de pregunta: 2016
 questions[1]= "2)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "la organizaci&oacute;n central, que integra los Ministerios y los servicios comunes";
 choices[1][1] = "la Organizaci&oacute;n Territorial";
 choices[1][2] = "la Organizaci&oacute;n sectorial";
 choices[1][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[1] = 2;
 units[1] = ['4', '7', '8', '9'];
 blocks[1] = ['A1', 'A2'];
 comments[1] = "Id Pregunta: 983. Ley 40/2015";
 preguntaids[1] = 983


//  Id pregunta: 1422 Año de creación de pregunta: 2016
 questions[2]= "3)  Nadie podr&aacute; ser privado de sus bienes y derechos seg&uacute;n el art&iacute;culo 33 de la Constituci&oacute;n Espa&ntilde;ola de 1978, salvo por causa justificada:";
 choices[2]= new Array();
 choices[2][0] = "De calamidad p&uacute;blica.";
 choices[2][1] = "De grave riesgo.";
 choices[2][2] = "De utilidad p&uacute;blica o inter&eacute;s social.";
 choices[2][3] = "En cualquiera de las situaciones anteriores.";
 answers[2] = 2;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 1422. ";
 preguntaids[2] = 1422


//  Id pregunta: 6627 Año de creación de pregunta: 2009
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes miembros no forma parte el Consejo Consultivo de la A.E.P.D.?";
 choices[3]= new Array();
 choices[3][0] = "Un Diputado, propuesto por el Congreso de los Diputados";
 choices[3][1] = "Un Senador propuesto por el Senado";
 choices[3][2] = "Un miembro de la Real Academia de la Lengua propuesto por la misma";
 choices[3][3] = "Un miembro de la Real Academia de la Historia propuesto por la misma";
 answers[3] = 2;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 6627. ";
 preguntaids[3] = 6627


//  Id pregunta: 4550 Año de creación de pregunta: 2002
 questions[4]= "5)  El est&aacute;ndar de ITU-T Q.931 trata sobre:";
 choices[4]= new Array();
 choices[4][0] = "compresi&oacute;n de datos";
 choices[4][1] = "multiplexaci&oacute;n de conexiones";
 choices[4][2] = "se&ntilde;alizaci&oacute;n";
 choices[4][3] = "codecs de audio y video";
 answers[4] = 2;
 units[4] = ['114'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4550. ";
 preguntaids[4] = 4550


//  Id pregunta: 9447 Año de creación de pregunta: 2010
 questions[5]= "6)  El TS (Transport Stream) en MPEG-2:";
 choices[5]= new Array();
 choices[5][0] = "Su carga &uacute;til est&aacute; formada por paquetes de trenes elementales (Packetized elementary Streams, PES)";
 choices[5][1] = "Su tama&ntilde;o es de 188 bytes";
 choices[5][2] = "Su cabecera es de 4 bytes";
 choices[5][3] = "Todas las anteriores son ciertas";
 answers[5] = 3;
 units[5] = ['115'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9447. ";
 preguntaids[5] = 9447


//  Id pregunta: 4622 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Qu&eacute; organismo se encarga directamente de asignar los puertos en Internet, que son precisos a la hora de especificar los est&aacute;ndares?:";
 choices[6]= new Array();
 choices[6][0] = "IETF";
 choices[6][1] = "IESG";
 choices[6][2] = "ITU-T";
 choices[6][3] = "ICANN";
 answers[6] = 3;
 units[6] = ['103'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4622. ";
 preguntaids[6] = 4622


//  Id pregunta: 8752 Año de creación de pregunta: 2013
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n?";
 choices[7]= new Array();
 choices[7][0] = "Planificaci&oacute;n y supervisi&oacute;n";
 choices[7][1] = "Estudio y evaluaci&oacute;n del sistema de control interno";
 choices[7][2] = "Obtenci&oacute;n de evidencia suficiente y adecuada";
 choices[7][3] = "Todas las anteriores";
 answers[7] = 3;
 units[7] = ['36'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 8752. ";
 preguntaids[7] = 8752


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique la afirmaci&oacute;n correcta sobre la configuraci&oacute;n de almacenamiento RAID 3:";
 choices[8]= new Array();
 choices[8][0] = "Consiste en hacer stripping a nivel de byte m&aacute;s un disco de paridad dedicado.";
 choices[8][1] = "Es la configuraci&oacute;n m&aacute;s utilizada en la pr&aacute;ctica.";
 choices[8][2] = "Distribuye los datos a nivel de bloque.";
 choices[8][3] = "Implementa el mirroring o espejo de discos.";
 answers[8] = 0;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 650. AGE A2 2015";
 preguntaids[8] = 650


//  Id pregunta: 7327 Año de creación de pregunta: 2010
 questions[9]= "10)  En el modelo CMM de Ingenier&iacute;a de Software, dentro del nivel 'Definido' est&aacute;n las &Aacute;reas Clave:";
 choices[9]= new Array();
 choices[9][0] = "Gesti&oacute;n de Requisitos y gestion cuantitativa";
 choices[9][1] = "Gestion de la Calidad y Planificaci&oacute;n del Proyecto";
 choices[9][2] = "Gesti&oacute;n Cuantitativa del Proyecto y Gesti&oacute;n de Calidad del Software";
 choices[9][3] = "Gesti&oacute;n Integrada del Software y Revision entre pares";
 answers[9] = 3;
 units[9] = ['92'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7327. ";
 preguntaids[9] = 7327


//  Id pregunta: 3766 Año de creación de pregunta: 2002
 questions[10]= "11)  DRM es:";
 choices[10]= new Array();
 choices[10][0] = "un sistema de modulaci&oacute;n digital basado en secuencias aleatorias";
 choices[10][1] = "un conjunto de directivas para la investigaci&oacute;n de tecnolog&iacute;as m&oacute;viles";
 choices[10][2] = "un programa de formaci&oacute;n especializado en las relaciones entre directivos";
 choices[10][3] = "una tecnolog&iacute;a para la gesti&oacute;n de los derechos de los contenidos digitales";
 answers[10] = 3;
 units[10] = ['41'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 3766. ";
 preguntaids[10] = 3766


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[11]= new Array();
 choices[11][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[11][1] = "Pasivos financieros y transferencias de capital.";
 choices[11][2] = "Activos financieros y pasivos financieros.";
 choices[11][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[11] = 2;
 units[11] = ['11'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 277. Presupuestos generales";
 preguntaids[11] = 277


//  Id pregunta: 1947 Año de creación de pregunta: 2016
 questions[12]= "13)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &quot;duplicaciones&quot; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[12]= new Array();
 choices[12][0] = "Data Marts";
 choices[12][1] = "Metadata";
 choices[12][2] = "Middleware";
 choices[12][3] = "DataWare";
 answers[12] = 0;
 units[12] = ['72'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1947. ";
 preguntaids[12] = 1947


//  Id pregunta: 8483 Año de creación de pregunta: 2011
 questions[13]= "14)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[13]= new Array();
 choices[13][0] = "El grado de intencionalidad.";
 choices[13][1] = "El volumen de negocio o actividad del infractor.";
 choices[13][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[13][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[13] = 3;
 units[13] = ['35'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 8483. Examen UPM A2 2011";
 preguntaids[13] = 8483


//  Id pregunta: 1867 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;les son en ITIL los tres subprocesos de la Gesti&oacute;n de Capacidad?";
 choices[14]= new Array();
 choices[14][0] = "Gesti&oacute;n de Capacidad del Negocio, Gesti&oacute;n de Capacidad del Servicio y Gesti&oacute;n de Capacidad de los Componentes";
 choices[14][1] = "Gesti&oacute;n de Capacidad de Suplidores, Gesti&oacute;n de Capacidad de Servicios y Gesti&oacute;n de Capacidad de los Componentes";
 choices[14][2] = "Gesti&oacute;n de Capacidad de Suplidores, Gesti&oacute;n de Capacidad de Servicios y Gesti&oacute;n de Capacidad Tecnol&oacute;gica";
 choices[14][3] = "Gesti&oacute;n de Capacidad del Negocio, Gesti&oacute;n de Capacidad Tecnol&oacute;gica y Gesti&oacute;n de Capacidad de los Componentes";
 answers[14] = 0;
 units[14] = ['101'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1867. ";
 preguntaids[14] = 1867


//  Id pregunta: 5948 Año de creación de pregunta: 2007
 questions[15]= "16)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, unaindirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Pararepresentar un fichero de 2 MB:";
 choices[15]= new Array();
 choices[15][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[15][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[15][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[15][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[15] = 0;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 5948. ";
 preguntaids[15] = 5948


//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[16]= "17)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[16]= new Array();
 choices[16][0] = "Firma electr&oacute;nica avanzada";
 choices[16][1] = "Firma electr&oacute;nica reconocida";
 choices[16][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = 1;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[16] = 2483


//  Id pregunta: 10727 Año de creación de pregunta: 2015
 questions[17]= "18)  La licencia de la GNU utilizada espec&iacute;ficamente para licenciar Software en la redes de computadores es:";
 choices[17]= new Array();
 choices[17][0] = "GFDL";
 choices[17][1] = "GPL";
 choices[17][2] = "Affero GPL";
 choices[17][3] = "EUPL";
 answers[17] = 2;
 units[17] = ['66'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10727. ";
 preguntaids[17] = 10727


//  Id pregunta: 1031 Año de creación de pregunta: 2016
 questions[18]= "19)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta en relacion a la competencia de los organos de las administraciones publicas:";
 choices[18]= new Array();
 choices[18][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][3] = "Todas son correctas.";
 answers[18] = 0;
 units[18] = ['4', '7', '8', '9'];
 blocks[18] = ['A1', 'A2'];
 comments[18] = "Id Pregunta: 1031. Ley 40/2015";
 preguntaids[18] = 1031


//  Id pregunta: 7911 Año de creación de pregunta: 2011
 questions[19]= "20)  M&eacute;trica v3 establece cuatro tipos de mantenimiento, &iquest;cu&aacute;l de los siguientes NO es uno de &eacute;llos?";
 choices[19]= new Array();
 choices[19][0] = "Mantenimiento preventivo.";
 choices[19][1] = "Mantenimiento perfectivo.";
 choices[19][2] = "Mantenimiento adaptativo.";
 choices[19][3] = "Mantenimiento correctivo.";
 answers[19] = 0;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 7911. Examen TIC A1 2010";
 preguntaids[19] = 7911


//  Id pregunta: 1151 Año de creación de pregunta: 2016
 questions[20]= "21)  La arquitectura ANSI/SPARC, define los niveles de abstracci&oacute;n para un sistema de administraci&oacute;n de bases de datos. Indicar el nivel INCORRECTO:";
 choices[20]= new Array();
 choices[20][0] = "Nivel f&iacute;sico: define c&oacute;mo se almacenan los datos y los m&eacute;todos de acceso.";
 choices[20][1] = "Nivel conceptual: define c&oacute;mo se organiza la informaci&oacute;n dentro de la base de datos.";
 choices[20][2] = "Nivel contextual: define el formato de los campos.";
 choices[20][3] = "Nivel externo: define las vistas del usuario.";
 answers[20] = 2;
 units[20] = ['61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1151. ";
 preguntaids[20] = 1151


//  Id pregunta: 1011 Año de creación de pregunta: 2016
 questions[21]= "22)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[21]= new Array();
 choices[21][0] = "en cada Comunidad Aut&oacute;noma";
 choices[21][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[21][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[21][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[21] = 1;
 units[21] = ['4', '7', '8', '9'];
 blocks[21] = ['A1', 'A2'];
 comments[21] = "Id Pregunta: 1011. Ley 40/2015";
 preguntaids[21] = 1011


//  Id pregunta: 3374 Año de creación de pregunta: 2006
 questions[22]= "23)  Entre los siguientes, se&ntilde;ale el que no es un sistema de archivos de sistemas operativos de la familia UNIX";
 choices[22]= new Array();
 choices[22][0] = "ZFS";
 choices[22][1] = "XFS";
 choices[22][2] = "CFS";
 choices[22][3] = "NFS";
 answers[22] = 2;
 units[22] = ['57'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3374. CFS es Cluster File System";
 preguntaids[22] = 3374


//  Id pregunta: 9561 Año de creación de pregunta: 2014
 questions[23]= "24)  Ventajas de la representaci&oacute;n del conocimiento mediante reglas. Se&ntilde;ale la falsa";
 choices[23]= new Array();
 choices[23][0] = "Facilidad de representaci&oacute;n";
 choices[23][1] = "Direcci&oacute;n de inferencia prefijada";
 choices[23][2] = "Modularidad";
 choices[23][3] = "Flexibilidad";
 answers[23] = 1;
 units[23] = ['68'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9561. Seg&uacute;n ASTIC: ventajas: facilidad de representaci&oacute;n, modularidad, flexibilidad, eficiencia;  desventajas: direcci&oacute;n de inferencia prefijada, hay dominios de conocimiento que  formulados en reglas dan lugar a bases de conocimiento muy grandes debido  a que el conocimiento se expresa mejor mediante restricciones";
 preguntaids[23] = 9561


//  Id pregunta: 3138 Año de creación de pregunta: 2002
 questions[24]= "25)  La extensi&oacute;n de los documentos de plantillas en MS Word es:";
 choices[24]= new Array();
 choices[24][0] = "Doc";
 choices[24][1] = "Dot";
 choices[24][2] = "Pln";
 choices[24][3] = "Std";
 answers[24] = 1;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3138. ";
 preguntaids[24] = 3138


//  Id pregunta: 10465 Año de creación de pregunta: 2015
 questions[25]= "26)  El 5&ordm; principio de marco de trabajo CobiT v5 establece:";
 choices[25]= new Array();
 choices[25][0] = "Este principio se centra en el Gobierno TI dejando la gesti&oacute;n a otras metodolog&iacute;as como ITIL.";
 choices[25][1] = "Establece una clara distinci&oacute;n entre Gobierno y Gesti&oacute;n.";
 choices[25][2] = "No existe interacci&oacute;n alguna entre Gobierno y Gesti&oacute;n.";
 choices[25][3] = "El Gobierno contiene cuatro dominios, seg&uacute;n las &aacute;reas de responsabilidad de Planificar, Construir, Ejecutar y Supervisar (Plan, Build, Run and Monitor, PBRM).";
 answers[25] = 1;
 units[25] = ['101'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 10465. ";
 preguntaids[25] = 10465


//  Id pregunta: 6252 Año de creación de pregunta: 2003
 questions[26]= "27)  Con respecto a los diccionarios de datos:";
 choices[26]= new Array();
 choices[26][0] = "Los diccionarios Activos permiten que los programadores puedan definir datos dentro sus programas y que estos no est&eacute;n en el diccionario.";
 choices[26][1] = "Los diccionarios Pasivos fuerzan a los programadores a utilizar las definiciones del diccionario.";
 choices[26][2] = "A y B son ciertas";
 choices[26][3] = "A y B son falsas";
 answers[26] = 3;
 units[26] = ['85', '86'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6252. ";
 preguntaids[26] = 6252


//  Id pregunta: 1026 Año de creación de pregunta: 2016
 questions[27]= "28)  La recusaci&oacute;n se plantear&aacute;...";
 choices[27]= new Array();
 choices[27][0] = "S&oacute;lo verbalmente";
 choices[27][1] = "S&oacute;lo por escrito";
 choices[27][2] = "Verbalmente o por escrito";
 choices[27][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[27] = 1;
 units[27] = ['4', '7', '8', '9'];
 blocks[27] = ['A1', 'A2'];
 comments[27] = "Id Pregunta: 1026. Ley 40/2015";
 preguntaids[27] = 1026


//  Id pregunta: 8923 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;Qu&eacute; m&eacute;todos se pueden utilizar para comparar inversiones con diferente duraci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de la cadena de reemplazo";
 choices[28][1] = "M&eacute;todo de la anualidad equivalente y tasa de rendimiento contable";
 choices[28][2] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de comparaci&oacute;n de costes";
 choices[28][3] = "M&eacute;todo del payback y m&eacute;todo de la cadena de reemplazo";
 answers[28] = 0;
 units[28] = ['40'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 8923. ";
 preguntaids[28] = 8923


//  Id pregunta: 9565 Año de creación de pregunta: 2014
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[29]= new Array();
 choices[29][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[29][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[29][2] = "Las neuronas se conectan mediante arcos";
 choices[29][3] = "Las neuronas se agrupan en capas";
 answers[29] = 1;
 units[29] = ['68'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9565. La neurona es el nivel b&aacute;sico de representaci&oacute;n.";
 preguntaids[29] = 9565


//  Id pregunta: 2477 Año de creación de pregunta: 2002
 questions[30]= "31)  El R.D. 209/2003 regula:";
 choices[30]= new Array();
 choices[30][0] = "Los registros telem&aacute;ticos";
 choices[30][1] = "Las notificaciones telem&aacute;ticas";
 choices[30][2] = "La utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[30][3] = "Todas las anteriores son correctas";
 answers[30] = 3;
 units[30] = ['19'];
 blocks[30] = ['A4'];
 comments[30] = "Id Pregunta: 2477. ";
 preguntaids[30] = 2477


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[31]= "32)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[31]= new Array();
 choices[31][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[31][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[31][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[31][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[31] = 0;
 units[31] = ['12'];
 blocks[31] = ['A3'];
 comments[31] = "Id Pregunta: 329. Modelo econ&oacute;mico";
 preguntaids[31] = 329


//  Id pregunta: 3902 Año de creación de pregunta: 2002
 questions[32]= "33)  El tipo de indizaci&oacute;n por descriptores consistente en utilizar t&eacute;cnicas de an&aacute;lisis morfol&oacute;gico y sem&aacute;ntico para captar la estructura del texto, se denomina:";
 choices[32]= new Array();
 choices[32][0] = "M&eacute;todo estad&iacute;stico";
 choices[32][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[32][2] = "M&eacute;todo sint&aacute;ctico";
 choices[32][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[32] = 2;
 units[32] = ['100'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3902. ";
 preguntaids[32] = 3902


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[33]= new Array();
 choices[33][0] = "El Consejo Europeo.";
 choices[33][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[33][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[33][3] = "El Parlamento Europeo.";
 answers[33] = 0;
 units[33] = ['5'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 133. Uni&oacute;n Europea";
 preguntaids[33] = 133


//  Id pregunta: 2177 Año de creación de pregunta: 2002
 questions[34]= "35)  En un gr&aacute;fico PERT los nodos representan:";
 choices[34]= new Array();
 choices[34][0] = "Actividades.";
 choices[34][1] = "Sucesos.";
 choices[34][2] = "El camino cr&iacute;tico.";
 choices[34][3] = "La holgura de una actividad.";
 answers[34] = 1;
 units[34] = ['33'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2177. ";
 preguntaids[34] = 2177


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[35]= new Array();
 choices[35][0] = "Veinte.";
 choices[35][1] = "Quince.";
 choices[35][2] = "Diez.";
 choices[35][3] = "Doce.";
 answers[35] = 0;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 91. Constituci&oacute;n de 1978";
 preguntaids[35] = 91


//  Id pregunta: 6508 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Qu&eacute; es un SOCKS o un FWTK?";
 choices[36]= new Array();
 choices[36][0] = "Son servidores de contrase&ntilde;as y claves que protegen generalmente informaci&oacute;n vital mediante algoritmos de cifrado";
 choices[36][1] = "Servidores de autenticaci&oacute;n y proxy";
 choices[36][2] = "Servidores de nombres";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = 1;
 units[36] = ['119'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 6508. ";
 preguntaids[36] = 6508


//  Id pregunta: 3561 Año de creación de pregunta: 2004
 questions[37]= "38)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[37]= new Array();
 choices[37][0] = "Graphical Interchange Format (GIF)";
 choices[37][1] = "Windows Metafile Format (WMF)";
 choices[37][2] = "Portable Network Graphics (PNG)";
 choices[37][3] = "Windows Bitmap (BMP)";
 answers[37] = 1;
 units[37] = ['80'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3561. TIC MAP B 2004";
 preguntaids[37] = 3561


//  Id pregunta: 1103 Año de creación de pregunta: 2016
 questions[38]= "39)  En la Ley 34/2002, LSSICE, en el art&iacute;culo 41 se establecen las medidas de car&aacute;cter provisional que se pueden adoptar con el fin de asegurar la eficacia de la resoluci&oacute;n que se dicte en relaci&oacute;n con los procedimientos sancionadores iniciados por infracciones graves o muy graves. Se&ntilde;ale cu&aacute;l de las siguientes medidas NO se contempla:";
 choices[38]= new Array();
 choices[38][0] = "Suspensi&oacute;n temporal de la actividad del prestador de servicios y, en su caso, cierre provisional de sus establecimientos.";
 choices[38][1] = "Precinto, dep&oacute;sito o incautaci&oacute;n de registros, soportes y archivos inform&aacute;ticos y de documentos en general, as&iacute; como de aparatos y equipos inform&aacute;ticos de todo tipo.";
 choices[38][2] = "Intervenci&oacute;n provisional de los activos y bienes del prestador de servicios bajo resoluci&oacute;n judicial.";
 choices[38][3] = "Advertir al p&uacute;blico de la existencia de posibles conductas infractoras y de la incoaci&oacute;n del expediente sancionador de que se trate, as&iacute; como de las medidas adoptadas para el cese de dichas conductas.";
 answers[38] = 2;
 units[38] = ['19'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 1103. ";
 preguntaids[38] = 1103


//  Id pregunta: 5074 Año de creación de pregunta: 2002
 questions[39]= "40)  SOAP es:";
 choices[39]= new Array();
 choices[39][0] = "Synchronized Objects Application Protocol, protocolo de aplicaci&oacute;n sincronizada para objetos";
 choices[39][1] = "System Open Access Protocol, protocolo de acceso abierto a sistemas";
 choices[39][2] = "Simple Object Access Protocol, protocolo de acceso simple a objetos";
 choices[39][3] = "SOAP no se corresponde con ningun acr&oacute;nimo aplicable en tecnolog&iacute;a";
 answers[39] = 2;
 units[39] = ['113'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5074. ";
 preguntaids[39] = 5074


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para aquellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un periodo cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[40][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para aquellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un periodo cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[40][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[40][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[40] = 1;
 units[40] = ['14'];
 blocks[40] = ['A3'];
 comments[40] = "Id Pregunta: 357. Estado del Bienestar";
 preguntaids[40] = 357


//  Id pregunta: 6297 Año de creación de pregunta: 2003
 questions[41]= "42)  Indicar la opci&oacute;n incorrecta:";
 choices[41]= new Array();
 choices[41][0] = "El Proceso Unificado Desarrollo Software (PUDS) se compone de fases, iteraciones y ciclos.";
 choices[41][1] = "Las fases del PUDS son iniciaci&oacute;n, elaboraci&oacute;n, construcci&oacute;n y decisi&oacute;n";
 choices[41][2] = "En cada fase hay varias iteraciones. La iteraci&oacute;n produce una versi&oacute;n de un producto entregable que se ir&aacute; incrementando en cada iteraci&oacute;n hasta convertirse producto final";
 choices[41][3] = "El paso a trav&eacute;s de las cuatro fases constituye un ciclo de desarrollo";
 answers[41] = 1;
 units[41] = ['82'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6297. ";
 preguntaids[41] = 6297


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[42]= new Array();
 choices[42][0] = "Crecimiento inteligente.";
 choices[42][1] = "Crecimiento inclusivo.";
 choices[42][2] = "Crecimiento sostenible.";
 choices[42][3] = "Crecimiento integrador.";
 answers[42] = 1;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 105. Uni&oacute;n Europea";
 preguntaids[42] = 105


//  Id pregunta: 1940 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativos escritos en otros lenguajes?";
 choices[43]= new Array();
 choices[43][0] = "RMI";
 choices[43][1] = "JAXP";
 choices[43][2] = "JNOI";
 choices[43][3] = "JNI";
 answers[43] = 3;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 1940. ";
 preguntaids[43] = 1940


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la respuesta falsa";
 choices[44]= new Array();
 choices[44][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[44][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[44][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[44][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[44] = 3;
 units[44] = ['22'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 516. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[44] = 516


//  Id pregunta: 4029 Año de creación de pregunta: 2003
 questions[45]= "46)  El modelado de Procesos de la Organizaci&oacute;n y el Modelo entidad/relaci&oacute;n extendido se utiliza en la siguiente actividad del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n METRICA V3:";
 choices[45]= new Array();
 choices[45][0] = "Estas t&eacute;cnicas no se utilizan en el PSI.";
 choices[45][1] = "PSI6 Dise&ntilde;o de Modelos de Sistemas de Informaci&oacute;n.";
 choices[45][2] = "PSI5 Estudio de los sistemas de Informaci&oacute;n actuales.";
 choices[45][3] = "PSI4 Identificaci&oacute;n de requisitos.";
 answers[45] = 3;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 4029. A eliminar por estar duplicada 10 preguntas m&aacute;s arriba";
 preguntaids[45] = 4029


//  Id pregunta: 9770 Año de creación de pregunta: 2014
 questions[46]= "47)  Los controles compensatorios tienen como objetivo:";
 choices[46]= new Array();
 choices[46][0] = "reducir el riesgo ante una debilidad existente";
 choices[46][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[46][2] = "Solucionar problemas detectados por controles detectivos";
 choices[46][3] = "Reportar errores";
 answers[46] = 0;
 units[46] = ['45', '36'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 9770. Las opciones B, C y D son caracter&iacute;sticas de controles preventivo, correctivo y detectivo respectivamente.";
 preguntaids[46] = 9770


//  Id pregunta: 3308 Año de creación de pregunta: 2004
 questions[47]= "48)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[47]= new Array();
 choices[47][0] = "Advanced Distributed Learning";
 choices[47][1] = "Advanced Distanced Learning";
 choices[47][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = 0;
 units[47] = ['70'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3308. ";
 preguntaids[47] = 3308


//  Id pregunta: 2114 Año de creación de pregunta: 2002
 questions[48]= "49)  El T&iacute;tulo V de la LOPD trata sobre:";
 choices[48]= new Array();
 choices[48][0] = "Principios de la protecci&oacute;n de datos";
 choices[48][1] = "Derechos de las personas";
 choices[48][2] = "Movimiento internacional de datos";
 choices[48][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[48] = 2;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 2114. ";
 preguntaids[48] = 2114


//  Id pregunta: 5011 Año de creación de pregunta: 2002
 questions[49]= "50)  OSA Parlay es:";
 choices[49]= new Array();
 choices[49][0] = "Open Services Architecture, del Parlay Group, arquitectura que pretende establecer una capa de middleware para el desarrollo de aplicaciones est&aacute;ndares comunes para el desarrollo de servicios m&oacute;viles";
 choices[49][1] = "Open Software Association, con sede establecida en Parlay (Texas)";
 choices[49][2] = "Other Specification for Applicatios, un nuevo est&aacute;ndar dise&ntilde;ado por John Parlay (miembro destacado de ITU-T) que pretende establecer una capa universal de aplicaci&oacute;n que a&uacute;ne las capas de aplicaci&oacute;n de OSI y TCP/IP favoreciendo su total compatibilidad";
 choices[49][3] = "OSA Parlay no se corresponde con ning&uacute;n acr&oacute;nimo conocido";
 answers[49] = 0;
 units[49] = ['117'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5011. ";
 preguntaids[49] = 5011


//  Id pregunta: 2342 Año de creación de pregunta: 2003
 questions[50]= "51)  SSD-AAPP es una herramienta para";
 choices[50]= new Array();
 choices[50][0] = "Mejorar el desarrollo de los sistemas de informaci&oacute;n";
 choices[50][1] = "Reducir el gasto de adquisici&oacute;n de equipos inform&aacute;ticos";
 choices[50][2] = "Permitir la implantaci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n y la Comunicaci&oacute;n en la Administraci&oacute;n";
 choices[50][3] = "Permitir al comprador evaluar las ofertas para la adquisici&oacute;n de bienes y servicios inform&aacute;ticos";
 answers[50] = 3;
 units[50] = ['38'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2342. ";
 preguntaids[50] = 2342


//  Id pregunta: 4021 Año de creación de pregunta: 2002
 questions[51]= "52)  El programa IDABC:";
 choices[51]= new Array();
 choices[51][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[51][1] = "Contiene tres directivas";
 choices[51][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[51][3] = "Fue creado antes que el ENS";
 answers[51] = 0;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 4021. ";
 preguntaids[51] = 4021


//  Id pregunta: 969 Año de creación de pregunta: 2016
 questions[52]= "53)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[52]= new Array();
 choices[52][0] = "el Gobierno de la Naci&oacute;n";
 choices[52][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[52][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[52][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[52] = 3;
 units[52] = ['4', '7', '8', '9'];
 blocks[52] = ['A1', 'A2'];
 comments[52] = "Id Pregunta: 969. Ley 40/2015";
 preguntaids[52] = 969


//  Id pregunta: 10508 Año de creación de pregunta: 2015
 questions[53]= "54)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[53]= new Array();
 choices[53][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[53][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[53][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[53][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[53] = 0;
 units[53] = ['77'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10508. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";
 preguntaids[53] = 10508


//  Id pregunta: 8443 Año de creación de pregunta: 2011
 questions[54]= "55)  El manejador de dispositivos es:";
 choices[54]= new Array();
 choices[54][0] = "Un p rograma de usuario final";
 choices[54][1] = "Hardware que controla un dispositivo";
 choices[54][2] = "Software que controla un dispositivo";
 choices[54][3] = "Todas las anteriores son ciertas";
 answers[54] = 2;
 units[54] = ['56'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8443. ";
 preguntaids[54] = 8443


//  Id pregunta: 9183 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[55]= new Array();
 choices[55][0] = "Pettabyte (PB).";
 choices[55][1] = "Terabyte (TB).";
 choices[55][2] = "Yottabyte (YB).";
 choices[55][3] = "Zettabyte (ZB).";
 answers[55] = 2;
 units[55] = ['56'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9183. Examen TIC A2 2013";
 preguntaids[55] = 9183


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[56]= "57)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[56]= new Array();
 choices[56][0] = "Cuatro millones de euros.";
 choices[56][1] = "Seis millones de euros.";
 choices[56][2] = "Siete millones de euros.";
 choices[56][3] = "Cinco millones de euros.";
 answers[56] = 1;
 units[56] = ['11'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 299. Presupuestos generales";
 preguntaids[56] = 299


//  Id pregunta: 3629 Año de creación de pregunta: 2002
 questions[57]= "58)  La principal diferencia entre las bases de datos documentales respecto a las normales como pueden ser bases de datos relacionales es:";
 choices[57]= new Array();
 choices[57][0] = "Pueden crearse &iacute;ndices por cualquier campo que se desee";
 choices[57][1] = "Los indices se almacenan dentro de la base de datos";
 choices[57][2] = "Pueden crease indices de m&aacute;s de una palabra";
 choices[57][3] = "Indexaci&oacute;n de partes del contenido de un campo";
 answers[57] = 3;
 units[57] = ['100'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3629. ";
 preguntaids[57] = 3629


//  Id pregunta: 6438 Año de creación de pregunta: 2003
 questions[58]= "59)  Indicar la respuesta falsa";
 choices[58]= new Array();
 choices[58][0] = "Los niveles del lenguaje son: f&oacute;nico, l&eacute;xico, sint&aacute;ctico y sem&aacute;ntico";
 choices[58][1] = "La se&ntilde;al de voz se puede analizar en dos dominios, el espectral y el temporal";
 choices[58][2] = "La frecuencia fundamental de la voz representa la frecuencia de vibraci&oacute;n de las cuerdas vocales";
 choices[58][3] = "La frecuencia fundamental de la voz masculina es de 120 a 500 Hz y la femenina de 50 a 250 Hz";
 answers[58] = 3;
 units[58] = ['122'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 6438. ";
 preguntaids[58] = 6438


//  Id pregunta: 5889 Año de creación de pregunta: 2007
 questions[59]= "60)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[59]= new Array();
 choices[59][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[59][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[59][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[59][3] = "Todas las anteriores son ciertas";
 answers[59] = 3;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 5889. ";
 preguntaids[59] = 5889


//  Id pregunta: 974 Año de creación de pregunta: 2016
 questions[60]= "61)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[60]= new Array();
 choices[60][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[60][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[60][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[60][3] = "todas son correctas";
 answers[60] = 1;
 units[60] = ['4', '7', '8', '9'];
 blocks[60] = ['A1', 'A2'];
 comments[60] = "Id Pregunta: 974. Ley 40/2015";
 preguntaids[60] = 974


//  Id pregunta: 10302 Año de creación de pregunta: 2015
 questions[61]= "62)  Seleccione la respuesta correcta sobre las estrategias de recuperaci&oacute;n.";
 choices[61]= new Array();
 choices[61][0] = "Los Cold Sites son instalaciones parcialmente configurados, que permiten la recuperaci&oacute;n en menos de una semana.";
 choices[61][1] = "Las instalaciones redundantes permiten una recuperaci&oacute;n inmediata ante una interrupci&oacute;n";
 choices[61][2] = "Los Hot Sites tienen un coste menor que los Cold Sites";
 choices[61][3] = "La configuraci&oacute;n m&aacute;s adecuada para un Warm Site es de mirroring.";
 answers[61] = 1;
 units[61] = ['45'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 10302. ";
 preguntaids[61] = 10302


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[62]= "63)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[62]= new Array();
 choices[62][0] = "61";
 choices[62][1] = "53";
 choices[62][2] = "65";
 choices[62][3] = "67";
 answers[62] = 2;
 units[62] = ['1'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 76. Constituci&oacute;n de 1978";
 preguntaids[62] = 76


//  Id pregunta: 4535 Año de creación de pregunta: 2002
 questions[63]= "64)  El acceso primario de la Red Digital de Servicios Integrados (en las normas europeas) est&aacute; constituido por:";
 choices[63]= new Array();
 choices[63][0] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[63][1] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[63][2] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 choices[63][3] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 answers[63] = 0;
 units[63] = ['114'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4535. ";
 preguntaids[63] = 4535


//  Id pregunta: 3414 Año de creación de pregunta: 2006
 questions[64]= "65)  Se&ntilde;alar cual no es una caracter&iacute;stica de las restricciones";
 choices[64]= new Array();
 choices[64][0] = "Permite sincronizar el comportamiento de los objetos buscando equilibrio entre sus atributos";
 choices[64][1] = "Permiten expresar m&uacute;ltiples relaciones causa-efecto mediante ecuaciones";
 choices[64][2] = "Pueden ser cualitativas (dominios discretos) o num&eacute;ricas.";
 choices[64][3] = "Representan sentencias condicionales donde a partir de antecedentes pueden obtenerse los consecuentes";
 answers[64] = 3;
 units[64] = ['68'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3414. ";
 preguntaids[64] = 3414


//  Id pregunta: 10437 Año de creación de pregunta: 2015
 questions[65]= "66)  Un contrato de colaboraci&oacute;n p&uacute;blico-privada de 134.000 euros estar&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[65]= new Array();
 choices[65][0] = "En todo caso.";
 choices[65][1] = "Depender&aacute; del umbral establecido.";
 choices[65][2] = "S&oacute;lo si es del sector p&uacute;blico estatal.";
 choices[65][3] = "Depende de que los lotes no superen los 80.00 euros.";
 answers[65] = 0;
 units[65] = ['37'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 10437. ";
 preguntaids[65] = 10437


//  Id pregunta: 9484 Año de creación de pregunta: 2014
 questions[66]= "67)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[66]= new Array();
 choices[66][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[66][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[66][2] = "Autenticidad (A) es la prueba de qui&eacute;n es el autor de un dato y garantiza su no repudio";
 choices[66][3] = "Durabilidad (D) es la propiedad que asegura que una vez realizada la operaci&oacute;n, &eacute;sta persistir&aacute; y no se podr&aacute; deshacer aunque falle el sistema y que de esta forma los datos sobrevivan de alguna manera.";
 answers[66] = 3;
 units[66] = ['60'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9484. Atomicidad: Si una operaci&oacute;n consiste en una serie de pasos, todos ellos ocurren o ninguno, es decir, las transacciones son completas. C = Consistencia = Integridad; I= Isolation = Aislamiento= una operaci&oacute;n no afecta a otras; D =durabilidad";
 preguntaids[66] = 9484


//  Id pregunta: 3603 Año de creación de pregunta: 2002
 questions[67]= "68)  La planificaci&oacute;n estrat&eacute;gica responde a las siguientes cuestiones salvo a una, &iquest;cu&aacute;l?:";
 choices[67]= new Array();
 choices[67][0] = "Cu&aacute;l es la posici&oacute;n futura deseable";
 choices[67][1] = "Cu&aacute;l es la situaci&oacute;n actual";
 choices[67][2] = "Cu&aacute;les son los escalones necesarios para pasar de donde estamos a donde deseamos estar";
 choices[67][3] = "Cu&aacute;l es el costo de dichos escalones";
 answers[67] = 3;
 units[67] = ['83'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3603. ";
 preguntaids[67] = 3603


//  Id pregunta: 7478 Año de creación de pregunta: 2010
 questions[68]= "69)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Reusabilidad";
 choices[68][1] = "Encapsulaci&oacute;n.";
 choices[68][2] = "Abstracci&oacute;n";
 choices[68][3] = "Persistencia";
 answers[68] = 3;
 units[68] = ['82'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 7478. Map 2005";
 preguntaids[68] = 7478


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[69]= new Array();
 choices[69][0] = "Reducir el gasto p&uacute;blico.";
 choices[69][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[69][2] = "Reducir el endeudamiento neto.";
 choices[69][3] = "Al Fondo de Contingencia.";
 answers[69] = 2;
 units[69] = ['11'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 325. Presupuestos generales";
 preguntaids[69] = 325


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[70]= "71)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[70]= new Array();
 choices[70][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[70][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[70][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[70][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[70] = 3;
 units[70] = ['11'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 326. Presupuestos generales";
 preguntaids[70] = 326


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[71]= new Array();
 choices[71][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[71][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[71][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[71][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[71] = 1;
 units[71] = ['7'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 251. Ley 39/2015";
 preguntaids[71] = 251


//  Id pregunta: 4392 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes direcciones es v&aacute;lida para un equipo conectado y accesible directamente desde Internet?:";
 choices[72]= new Array();
 choices[72][0] = "256.198.234.12";
 choices[72][1] = "10.128.179.54";
 choices[72][2] = "192.139.234.12";
 choices[72][3] = "127.34.156.0";
 answers[72] = 2;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4392. ";
 preguntaids[72] = 4392


//  Id pregunta: 2598 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el &aacute;lgebra relacional?:";
 choices[73]= new Array();
 choices[73][0] = "El &aacute;lgebra relacional es un lenguaje procedimental";
 choices[73][1] = "Los operadores de selecci&oacute;n, proyecci&oacute;n, uni&oacute;n y diferencia forman un conjunto relacionalmente completo";
 choices[73][2] = "Todos los operadores de consulta son derivables de los operadores fundamentales";
 choices[73][3] = "El &lsquo;join&rsquo; es un operador de compuesto de selecci&oacute;n y proyecci&oacute;n";
 answers[73] = 0;
 units[73] = ['60'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2598. ";
 preguntaids[73] = 2598


//  Id pregunta: 2555 Año de creación de pregunta: 2002
 questions[74]= "75)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[74]= new Array();
 choices[74][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[74][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[74][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[74][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[74] = 0;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 2555. ";
 preguntaids[74] = 2555


