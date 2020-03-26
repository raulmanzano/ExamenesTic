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
//  Id pregunta: 8556 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[0]= new Array();
 choices[0][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[0][1] = "A traves de la ley de patentes";
 choices[0][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[0][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[0] = 3;
 units[0] = ['41'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 8556. ";
 preguntaids[0] = 8556


//  Id pregunta: 8555 Año de creación de pregunta: 2013
 questions[1]= "2)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[1]= new Array();
 choices[1][0] = "Estar documentado correctamente";
 choices[1][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[1][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[1][3] = "Ser original";
 answers[1] = 3;
 units[1] = ['41'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 8555. ";
 preguntaids[1] = 8555


//  Id pregunta: 8336 Año de creación de pregunta: 2011
 questions[2]= "3)  Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[2]= new Array();
 choices[2][0] = "Un algoritmo";
 choices[2][1] = "Un m&eacute;todo";
 choices[2][2] = "Un programa de ordenador";
 choices[2][3] = "Un procedimiento";
 answers[2] = 2;
 units[2] = ['41'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 8336. Examen UC3M 2010";
 preguntaids[2] = 8336


//  Id pregunta: 8559 Año de creación de pregunta: 2013
 questions[3]= "4)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[3]= new Array();
 choices[3][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[3][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[3][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[3][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[3] = 2;
 units[3] = ['41'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 8559. ";
 preguntaids[3] = 8559


//  Id pregunta: 8398 Año de creación de pregunta: 2011
 questions[4]= "5)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[4]= new Array();
 choices[4][0] = "El padr&oacute;n municipal.";
 choices[4][1] = "Los diarios oficiales.";
 choices[4][2] = "El censo promocional.";
 choices[4][3] = "Los medios de comunicaci&oacute;n";
 answers[4] = 0;
 units[4] = ['35'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 8398. Operador Ayto. Madrid 2010";
 preguntaids[4] = 8398


//  Id pregunta: 8439 Año de creación de pregunta: 2011
 questions[5]= "6)  Seg&uacute;n el Esquema Nacional de Seguridad, la medida de seguridad &quot;op.exp.8 Registro de la actividad de los usuarios&quot; aplica en la categor&iacute;a...";
 choices[5]= new Array();
 choices[5][0] = "Solo en la categor&iacute;a del sistema &quot;alta&quot;";
 choices[5][1] = "Esta medida de seguridad aplica cuando as&iacute; lo decida el responsable de los servidores";
 choices[5][2] = "Baja, media y alta de la dimensi&oacute;n &quot;trazabilidad&quot;";
 choices[5][3] = "En todos los casos anteriores";
 answers[5] = 2;
 units[5] = ['46'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 8439. ";
 preguntaids[5] = 8439


//  Id pregunta: 8484 Año de creación de pregunta: 2011
 questions[6]= "7)  Seg&uacute;n la LOPD, el &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada en el caso de que se trate, en los siguientes supuestos:";
 choices[6]= new Array();
 choices[6][0] = "Cuando pueda apreciarse que la conducta del afectado ha podido inducir a la comisi&oacute;n de la infracci&oacute;n.";
 choices[6][1] = "Cuando se haya producido un proceso de fusi&oacute;n por absorci&oacute;n y la infracci&oacute;n fuese anterior a dicho proceso, no siendo imputable a la entidad absorbente.";
 choices[6][2] = "Cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[6][3] = "Todos los anteriores";
 answers[6] = 3;
 units[6] = ['35'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 8484. ";
 preguntaids[6] = 8484


//  Id pregunta: 8536 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una infracci&oacute;n grave seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[7]= new Array();
 choices[7][0] = "No remitir a la Agencia de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo";
 choices[7][1] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal por parte del responsable del fichero";
 choices[7][2] = "La obstrucci&oacute;n al ejercicio de la funci&oacute;n inspectora";
 choices[7][3] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos no hayan sido recabados del propio interesado";
 answers[7] = 0;
 units[7] = ['35'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 8536. ";
 preguntaids[7] = 8536


//  Id pregunta: 8568 Año de creación de pregunta: 2013
 questions[8]= "9)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[8]= new Array();
 choices[8][0] = "Mediante el elemento Assets.";
 choices[8][1] = "Mediante el elemento Permission.";
 choices[8][2] = "Mediante el elemento Constraints.";
 choices[8][3] = "Todas son falsas.";
 answers[8] = 0;
 units[8] = ['41'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 8568. ";
 preguntaids[8] = 8568


//  Id pregunta: 8540 Año de creación de pregunta: 2011
 questions[9]= "10)  De acuerdo a la normativa de protecci&oacute;n de datos de car&aacute;cter personal, la potestad del &oacute;rgano sancionador de inmovilizaci&oacute;n de ficheros";
 choices[9]= new Array();
 choices[9][0] = "Se podr&aacute; ejercer s&oacute;lo en supuestos constitutivos de infracci&oacute;n muy grave";
 choices[9][1] = "Se podr&aacute; ejercer en ciertos supuestos constitutivos de infracci&oacute;n grave o muy grave";
 choices[9][2] = "Siempre la puede ejercer el &oacute;rgano sancionador, mediante resoluci&oacute;n motivada";
 choices[9][3] = "La ley 2/2011 de Econom&iacute;a Sostenible elimina la potestad inmovilizadora";
 answers[9] = 1;
 units[9] = ['35'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 8540. ";
 preguntaids[9] = 8540


//  Id pregunta: 8440 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[10]= new Array();
 choices[10][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[10][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[10][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[10][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[10] = 1;
 units[10] = ['46'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 8440. ";
 preguntaids[10] = 8440


//  Id pregunta: 8545 Año de creación de pregunta: 2013
 questions[11]= "12)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[11]= new Array();
 choices[11][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines.";
 choices[11][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos.";
 choices[11][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0.";
 choices[11][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications.";
 answers[11] = 1;
 units[11] = ['42'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 8545. ";
 preguntaids[11] = 8545


//  Id pregunta: 8300 Año de creación de pregunta: 2011
 questions[12]= "13)  MAGERIT es";
 choices[12]= new Array();
 choices[12][0] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de riesgos de sistemas de informaci&oacute;n.";
 choices[12][1] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de centros de recuperaci&oacute;n de desastres de sistemas de informaci&oacute;n.";
 choices[12][2] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de sistemas de archivo de sistemas de informaci&oacute;n.";
 choices[12][3] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de evaluaci&oacute;n de rendimiento de sistemas de informaci&oacute;n.";
 answers[12] = 0;
 units[12] = ['45'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 8300. Examen UPM A2 2011";
 preguntaids[12] = 8300


//  Id pregunta: 8392 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Cu&aacute;l es la norma europea vigente relativa al tratamiento de los datos personales (a partir del 25 de Mayo de 2018)?";
 choices[13]= new Array();
 choices[13][0] = "Reglamento 679/2015";
 choices[13][1] = "Directiva 2006/24/CE";
 choices[13][2] = "Directiva 2002/58/CE";
 choices[13][3] = "Directiva 95/46/CE";
 answers[13] = 0;
 units[13] = ['35'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 8392. ";
 preguntaids[13] = 8392


//  Id pregunta: 8453 Año de creación de pregunta: 2011
 questions[14]= "15)  Uno de los instrumentos b&aacute;sicos de los Decision Support Systems orientados a modelos es:";
 choices[14]= new Array();
 choices[14][0] = "Procesos prueba-error.";
 choices[14][1] = "Informes resumen.";
 choices[14][2] = "Informes de excepci&oacute;n.";
 choices[14][3] = "Consultas ad-hoc.";
 answers[14] = 0;
 units[14] = ['29'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 8453. ";
 preguntaids[14] = 8453


//  Id pregunta: 8483 Año de creación de pregunta: 2011
 questions[15]= "16)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[15]= new Array();
 choices[15][0] = "El grado de intencionalidad.";
 choices[15][1] = "El volumen de negocio o actividad del infractor.";
 choices[15][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[15][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[15] = 3;
 units[15] = ['35'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 8483. Examen UPM A2 2011";
 preguntaids[15] = 8483


//  Id pregunta: 8296 Año de creación de pregunta: 2011
 questions[16]= "17)  El art&iacute;culo 3 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, define como datos de car&aacute;cter personal:";
 choices[16]= new Array();
 choices[16][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o no.";
 choices[16][1] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas y jur&iacute;dicas.";
 choices[16][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables.";
 choices[16][3] = "Cualquier informaci&oacute;n concerniente a personas identificadas.";
 answers[16] = 2;
 units[16] = ['35'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 8296. Examen UPM A2 2011";
 preguntaids[16] = 8296


//  Id pregunta: 8557 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[17]= new Array();
 choices[17][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[17][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[17][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[17][3] = "Todas las anteriores son falsas";
 answers[17] = 3;
 units[17] = ['41'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 8557. ";
 preguntaids[17] = 8557


//  Id pregunta: 8298 Año de creación de pregunta: 2011
 questions[18]= "19)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[18]= new Array();
 choices[18][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[18][1] = "En el Registro Civil.";
 choices[18][2] = "En el Registro Mercantil.";
 choices[18][3] = "En el Registro General del Ministerio de Justicia.";
 answers[18] = 0;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 8298. Examen UPM A2 2011";
 preguntaids[18] = 8298


//  Id pregunta: 8523 Año de creación de pregunta: 2011
 questions[19]= "20)  Cu&aacute;l no es un derecho de las personas seg&uacute;n la LOPD";
 choices[19]= new Array();
 choices[19][0] = "Impugnaci&oacute;n de valoraciones";
 choices[19][1] = "Derecho de acceso";
 choices[19][2] = "Derecho a cobrar dinero por el tratamiento de sus datos";
 choices[19][3] = "Derecho de rectificaci&oacute;n";
 answers[19] = 2;
 units[19] = ['35'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 8523. ";
 preguntaids[19] = 8523


//  Id pregunta: 8643 Año de creación de pregunta: 2013
 questions[20]= "21)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[20]= new Array();
 choices[20][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[20][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[20][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[20][3] = "Todas las anteriores son falsas";
 answers[20] = 3;
 units[20] = ['41'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 8643. ";
 preguntaids[20] = 8643


//  Id pregunta: 8560 Año de creación de pregunta: 2013
 questions[21]= "22)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[21]= new Array();
 choices[21][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[21][1] = "En todo caso los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[21][2] = "Los derechos morales pertenecen al trabajador";
 choices[21][3] = "Los derechos morales pertenecen al empresario";
 answers[21] = 2;
 units[21] = ['41'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 8560. ";
 preguntaids[21] = 8560


//  Id pregunta: 8640 Año de creación de pregunta: 2013
 questions[22]= "23)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[22]= new Array();
 choices[22][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[22][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[22][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[22][3] = "Mediante la Ley de Patentes";
 answers[22] = 1;
 units[22] = ['41'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 8640. ";
 preguntaids[22] = 8640


//  Id pregunta: 8543 Año de creación de pregunta: 2013
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a las normas WCAG 2.0:";
 choices[23]= new Array();
 choices[23][0] = "Una de las mejoras respecto a WCAG 1.0 es la posibilidad de evaluarlas de manera autom&aacute;tica.";
 choices[23][1] = "En Espa&ntilde;a se incorporan mediante la norma UNE 139803.";
 choices[23][2] = "Constan de 14 pautas.";
 choices[23][3] = "La pauta Adaptable dentro del principio Perceptible se refiere a &quot;Contenido presentado de diferentes formas sin perder informaci&oacute;n o estructura&quot;.";
 answers[23] = 2;
 units[23] = ['42'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 8543. ";
 preguntaids[23] = 8543


//  Id pregunta: 8350 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[24]= new Array();
 choices[24][0] = "IEEE";
 choices[24][1] = "ISO";
 choices[24][2] = "IEC";
 choices[24][3] = "ANSI";
 answers[24] = 3;
 units[24] = ['48'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 8350. Examen UC3M 2010";
 preguntaids[24] = 8350


//  Id pregunta: 8318 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;Cu&aacute;l es el comit&eacute; del W3C encargado de promover y estandarizar la accesibilidad Web?";
 choices[25]= new Array();
 choices[25][0] = "WAI";
 choices[25][1] = "WCAG";
 choices[25][2] = "ATAG";
 choices[25][3] = "UAAG";
 answers[25] = 0;
 units[25] = ['42'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 8318. Examen UPM A2 2011";
 preguntaids[25] = 8318


//  Id pregunta: 8642 Año de creación de pregunta: 2013
 questions[26]= "27)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[26]= new Array();
 choices[26][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[26][1] = "A traves de la ley de patentes";
 choices[26][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[26][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[26] = 3;
 units[26] = ['41'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 8642. ";
 preguntaids[26] = 8642


//  Id pregunta: 8563 Año de creación de pregunta: 2013
 questions[27]= "28)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[27]= new Array();
 choices[27][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[27][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[27][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[27][3] = "Todas las anteriores son verdaderas.";
 answers[27] = 3;
 units[27] = ['41'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 8563. ";
 preguntaids[27] = 8563


//  Id pregunta: 8647 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[28]= new Array();
 choices[28][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[28][1] = "Si, como obra literaria.";
 choices[28][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[28][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[28] = 3;
 units[28] = ['41'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 8647. ";
 preguntaids[28] = 8647


//  Id pregunta: 8461 Año de creación de pregunta: 2011
 questions[29]= "30)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[29]= new Array();
 choices[29][0] = "...gasto alguno para el afectado&rdquo;";
 choices[29][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[29][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[29][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[29] = 2;
 units[29] = ['35'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 8461. ";
 preguntaids[29] = 8461


//  Id pregunta: 8646 Año de creación de pregunta: 2013
 questions[30]= "31)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[30]= new Array();
 choices[30][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[30][1] = "En todo caso, los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[30][2] = "Los derechos morales pertenecen al trabajador";
 choices[30][3] = "Los derechos morales pertenecen al empresario";
 answers[30] = 2;
 units[30] = ['41'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 8646. ";
 preguntaids[30] = 8646


//  Id pregunta: 8566 Año de creación de pregunta: 2013
 questions[31]= "32)  &iquest;De los siguientes cual no forma parte del ciclo de vida de los derechos digitales?";
 choices[31]= new Array();
 choices[31][0] = "Empaquetado.";
 choices[31][1] = "Envio.";
 choices[31][2] = "Protecci&oacute;n y venta.";
 choices[31][3] = "Consumo.";
 answers[31] = 1;
 units[31] = ['41'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 8566. ";
 preguntaids[31] = 8566


//  Id pregunta: 8532 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;Cual de las siguientes NO es una herramienta de revisi&oacute;n de la accesibilidad?";
 choices[32]= new Array();
 choices[32][0] = "ACCWarning";
 choices[32][1] = "TAW";
 choices[32][2] = "Tenon";
 choices[32][3] = "Wave";
 answers[32] = 0;
 units[32] = ['42'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 8532. ";
 preguntaids[32] = 8532


//  Id pregunta: 8564 Año de creación de pregunta: 2013
 questions[33]= "34)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[33]= new Array();
 choices[33][0] = "No se pueden realizar copias de seguridad.";
 choices[33][1] = "La ley premite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[33][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[33][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[33] = 1;
 units[33] = ['41'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 8564. ";
 preguntaids[33] = 8564


//  Id pregunta: 8379 Año de creación de pregunta: 2011
 questions[34]= "35)  La garant&iacute;a provisional, seg&uacute;n el TRLCSP 3/2011:";
 choices[34]= new Array();
 choices[34][0] = "Es potestativa para el &oacute;rgano de contrataci&oacute;n";
 choices[34][1] = "Con car&aacute;cter general se exige a los adjudicatarios de los contratos administrativos.";
 choices[34][2] = "El &oacute;rgano de contrataci&oacute;n podr&aacute; eximir al adjudicatario de la obligaci&oacute;n de constituir la garant&iacute;a&nbsp;provisional";
 choices[34][3] = "Su importe no podr&aacute; ser superior al 5% del presupuesto del contrato";
 answers[34] = 0;
 units[34] = ['37'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 8379. Examen UPM A2 2011";
 preguntaids[34] = 8379


//  Id pregunta: 8645 Año de creación de pregunta: 2013
 questions[35]= "36)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[35]= new Array();
 choices[35][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[35][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[35][2] = "toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[35][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[35] = 2;
 units[35] = ['41'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 8645. ";
 preguntaids[35] = 8645


//  Id pregunta: 8297 Año de creación de pregunta: 2011
 questions[36]= "37)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, se considera cesi&oacute;n o comunicaci&oacute;n de datos:";
 choices[36]= new Array();
 choices[36][0] = "Toda manifestaci&oacute;n de voluntad, libre inequ&iacute;voca, espec&iacute;fica e informada, mediante la cual el interesado comunique datos.";
 choices[36][1] = "Toda revelaci&oacute;n de datos realizada a una persona distinta del interesado.";
 choices[36][2] = "Toda revelaci&oacute;n electr&oacute;nica de datos realizada a otra persona distinta de la que los posee.";
 choices[36][3] = "Toda transferencia electr&oacute;nica de datos realizada a una persona distinta del interesado.";
 answers[36] = 1;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 8297. Examen UPM A2 2011";
 preguntaids[36] = 8297


//  Id pregunta: 8530 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cual de los siguientes NO es un principio del dise&ntilde;o universal ?";
 choices[37]= new Array();
 choices[37][0] = "Escaso esfuerzo f&iacute;sico";
 choices[37][1] = "Simple e intuitivo.";
 choices[37][2] = "Informaci&oacute;n f&aacute;cil de percibir";
 choices[37][3] = "universalidad";
 answers[37] = 3;
 units[37] = ['42'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 8530. ";
 preguntaids[37] = 8530


//  Id pregunta: 8531 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;Cual de las siguientes ISO tiene definici&oacute;n de usabilidad?";
 choices[38]= new Array();
 choices[38][0] = "ISO/IEC 9126";
 choices[38][1] = "ISO/IEC 9241";
 choices[38][2] = "Las dos anteriores";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = 2;
 units[38] = ['42'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 8531. ";
 preguntaids[38] = 8531


//  Id pregunta: 8544 Año de creación de pregunta: 2013
 questions[39]= "40)  &iquest;Cual de las siguientes no se corresponde con una gu&iacute;a de accesibilidad WAI?";
 choices[39]= new Array();
 choices[39][0] = "ATAG";
 choices[39][1] = "UAAG";
 choices[39][2] = "WAI-ARIA";
 choices[39][3] = "FAAG";
 answers[39] = 3;
 units[39] = ['42'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 8544. ";
 preguntaids[39] = 8544


//  Id pregunta: 8514 Año de creación de pregunta: 2011
 questions[40]= "41)  Indique la pareja correcta principio-directriz seg&uacute;n la norma WCAG 2.0";
 choices[40]= new Array();
 choices[40][0] = "Perceptible-Teclado accesible";
 choices[40][1] = "Operable-Texto alternativo";
 choices[40][2] = "Comprensible-Asistencia a la entrada de datos";
 choices[40][3] = "Robustez-Adaptable";
 answers[40] = 2;
 units[40] = ['42'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 8514. ";
 preguntaids[40] = 8514


//  Id pregunta: 8648 Año de creación de pregunta: 2013
 questions[41]= "42)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[41]= new Array();
 choices[41][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[41][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[41][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[41][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[41] = 1;
 units[41] = ['41'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 8648. ";
 preguntaids[41] = 8648


//  Id pregunta: 8394 Año de creación de pregunta: 2011
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas:";
 choices[42]= new Array();
 choices[42][0] = "M&eacute;todo de la ponderaci&oacute;n lineal";
 choices[42][1] = "M&eacute;todo de TOPSIS";
 choices[42][2] = "M&eacute;todo Delphi";
 choices[42][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[42] = 2;
 units[42] = ['38'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 8394. ";
 preguntaids[42] = 8394


//  Id pregunta: 8539 Año de creación de pregunta: 2011
 questions[43]= "44)  Seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal, las infracciones leves ser&aacute;n sancionadas con multas de:";
 choices[43]= new Array();
 choices[43][0] = "601,01 a 60.101,21 euros";
 choices[43][1] = "901,01 a 60.101,21 euros";
 choices[43][2] = "600 a 40.000 euros";
 choices[43][3] = "900 a 40.000 euros";
 answers[43] = 3;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 8539. ";
 preguntaids[43] = 8539


//  Id pregunta: 8512 Año de creación de pregunta: 2011
 questions[44]= "45)  Indique cu&aacute;l no es un principios b&aacute;sico seg&uacute;n el RD 3/2010.";
 choices[44]= new Array();
 choices[44][0] = "Prevenci&oacute;n, reactivaci&oacute;n y revisi&oacute;n";
 choices[44][1] = "Seguridad Integral";
 choices[44][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[44][3] = "L&iacute;neas de defensa";
 answers[44] = 0;
 units[44] = ['46'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 8512. ";
 preguntaids[44] = 8512


//  Id pregunta: 8558 Año de creación de pregunta: 2013
 questions[45]= "46)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[45]= new Array();
 choices[45][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[45][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[45][2] = "Si, en todos los casos";
 choices[45][3] = "Todas las anteriores son falsas";
 answers[45] = 2;
 units[45] = ['41'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 8558. ";
 preguntaids[45] = 8558


//  Id pregunta: 8437 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[46]= new Array();
 choices[46][0] = "Enfoque de soluciones multilaterales";
 choices[46][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[46][2] = "Interoperabilidad sem&aacute;ntica";
 choices[46][3] = "Ninguno de los anteriores";
 answers[46] = 0;
 units[46] = ['43'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 8437. ";
 preguntaids[46] = 8437


//  Id pregunta: 8567 Año de creación de pregunta: 2013
 questions[47]= "48)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[47]= new Array();
 choices[47][0] = "Assets.";
 choices[47][1] = "Rights.";
 choices[47][2] = "Resources.";
 choices[47][3] = "Parties.";
 answers[47] = 2;
 units[47] = ['41'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 8567. ";
 preguntaids[47] = 8567


//  Id pregunta: 8562 Año de creación de pregunta: 2013
 questions[48]= "49)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[48]= new Array();
 choices[48][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[48][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[48][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[48][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[48] = 1;
 units[48] = ['41'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 8562. ";
 preguntaids[48] = 8562


//  Id pregunta: 8438 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes medidas se debe aplicar en un sistema de informaci&oacute;n de categor&iacute;a alta seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[49]= new Array();
 choices[49][0] = "Previsi&oacute;n de la provisi&oacute;n del servicio por medios alternativos en caso de indisponibilidad del servicio contratado";
 choices[49][1] = "Asignar un identificador singular para cada entidad que accede al sistema";
 choices[49][2] = "Cifrado de la  informaci&oacute;n tanto durante su almacenamiento como durante su transmisi&oacute;n";
 choices[49][3] = "Todas las anteriores";
 answers[49] = 1;
 units[49] = ['46'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 8438. ";
 preguntaids[49] = 8438


//  Id pregunta: 8570 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[50]= new Array();
 choices[50][0] = "XcML";
 choices[50][1] = "XrML";
 choices[50][2] = "XMCL";
 choices[50][3] = "XsML";
 answers[50] = 1;
 units[50] = ['41'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 8570. ";
 preguntaids[50] = 8570


//  Id pregunta: 8554 Año de creación de pregunta: 2013
 questions[51]= "52)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[51]= new Array();
 choices[51][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[51][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[51][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[51][3] = "Mediante la Ley de Patentes";
 answers[51] = 1;
 units[51] = ['41'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 8554. ";
 preguntaids[51] = 8554


//  Id pregunta: 8561 Año de creación de pregunta: 2013
 questions[52]= "53)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[52]= new Array();
 choices[52][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[52][1] = "Si, como obra literaria.";
 choices[52][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[52][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[52] = 3;
 units[52] = ['41'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 8561. ";
 preguntaids[52] = 8561


//  Id pregunta: 8541 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el expediente electr&oacute;nico es FALSO seg&uacute;n el RD 1671/2009?";
 choices[53]= new Array();
 choices[53][0] = "Los expedientes electr&oacute;nicos podr&aacute;n incluir otros expedientes electr&oacute;nicos";
 choices[53][1] = "Los documentos que lo conforman deber&aacute;n en todo caso estar incluidos tando en el &iacute;ndice electr&oacute;nico como en el expediente.";
 choices[53][2] = "La estructura y formato de los expedientes de los expedientes electr&oacute;nicos se ajustar&aacute;n a lo que diga el Esquema Nacional de Interoperabilidad";
 choices[53][3] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n";
 answers[53] = 1;
 units[53] = ['43'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 8541. ";
 preguntaids[53] = 8541


//  Id pregunta: 8547 Año de creación de pregunta: 2013
 questions[54]= "55)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[54]= new Array();
 choices[54][0] = "Tipograf&iacute;a clara y legible.";
 choices[54][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[54][2] = "Reversibilidad.";
 choices[54][3] = "Confirmaci&oacute;n.";
 answers[54] = 0;
 units[54] = ['42'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 8547. ";
 preguntaids[54] = 8547


//  Id pregunta: 8546 Año de creación de pregunta: 2013
 questions[55]= "56)  &quot;Ayuda a la entrada de datos&quot; es una pauta enmarcada en el principio:";
 choices[55]= new Array();
 choices[55][0] = "Perceptible.";
 choices[55][1] = "Operable.";
 choices[55][2] = "Comprensible.";
 choices[55][3] = "Robusto.";
 answers[55] = 2;
 units[55] = ['42'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 8546. ";
 preguntaids[55] = 8546


//  Id pregunta: 8393 Año de creación de pregunta: 2011
 questions[56]= "57)  Se&ntilde;ale la respuesta correcta relativa a m&eacute;todos de asignaci&oacute;n de pesos a los criterios:";
 choices[56]= new Array();
 choices[56][0] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[56][1] = "El m&eacute;todo de las Utilidades Relativas es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo de AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[56][2] = "Tanto el m&eacute;todo de las Utilidades Relativas como el m&eacute;todo AHP son m&eacute;todos de asignaci&oacute;n directa";
 choices[56][3] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 answers[56] = 3;
 units[56] = ['38'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 8393. ";
 preguntaids[56] = 8393


//  Id pregunta: 8542 Año de creación de pregunta: 2011
 questions[57]= "58)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos";
 choices[57]= new Array();
 choices[57][0] = "N&uacute;mero de entrada de registro";
 choices[57][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n y notificaci&oacute;n del procedimiento";
 choices[57][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada";
 choices[57][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico";
 answers[57] = 3;
 units[57] = ['43'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 8542. ";
 preguntaids[57] = 8542


//  Id pregunta: 8262 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes es una funci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos, seg&uacute;n lo establecido en la LOPD?";
 choices[58]= new Array();
 choices[58][0] = "Redactar una memoria anual y remitirla al Ministerio del Interior";
 choices[58][1] = "Proporcionar aplicaciones inform&aacute;ticas para la gesti&oacute;n de datos de car&aacute;cter personal.";
 choices[58][2] = "Investigar posibles incumplimientos de la LOPD e informar a la autoridad con potestad sancionadora, seg&uacute;n el caso";
 choices[58][3] = "Redactar una memoria anual y remitirla al Ministerio de Justicia";
 answers[58] = 3;
 units[58] = ['35'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 8262. Examen TIC A2 2010 interna";
 preguntaids[58] = 8262


//  Id pregunta: 8529 Año de creación de pregunta: 2011
 questions[59]= "60)  &iquest;Cual de las siguientes NO es una actividad del estadard ISO 13407?";
 choices[59]= new Array();
 choices[59][0] = "Identificaci&oacute;n de la necesidad de dise&ntilde;o no centrado en el humano";
 choices[59][1] = "Evaluaci&oacute;n de los dise&ntilde;os frente a los requisitos";
 choices[59][2] = "Producci&oacute;n de soluciones de dise&ntilde;o";
 choices[59][3] = "Entender y especificar el contexto de uso.";
 answers[59] = 0;
 units[59] = ['42'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 8529. ";
 preguntaids[59] = 8529


//  Id pregunta: 8397 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;les de los siguientes tipos de ficheros est&aacute;n amparados por la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?:";
 choices[60]= new Array();
 choices[60][0] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[60][1] = "El fichero de clientes de una empresa de telecomunicaciones que da servicio de telefon&iacute;a y acceso a Internet.";
 choices[60][2] = "Los ficheros mantenidos por personas f&iacute;sicas a t&iacute;tulo exclusivamente personal o dom&eacute;stico.";
 choices[60][3] = "Ninguno de los anteriores";
 answers[60] = 1;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 8397. ";
 preguntaids[60] = 8397


//  Id pregunta: 8460 Año de creación de pregunta: 2011
 questions[61]= "62)  Seg&uacute;n las definiciones incluidas en el art. 5 del R.D. 1720/2007, &ldquo;la persona f&iacute;sica o jur&iacute;dica, p&uacute;blica o privada u &oacute;rgano administrativo, al que se revelen los datos&rdquo; es:";
 choices[61]= new Array();
 choices[61][0] = "Encargado del tratamiento";
 choices[61][1] = "Destinatario o cesionario";
 choices[61][2] = "Afectado o interesado";
 choices[61][3] = "Tercero";
 answers[61] = 1;
 units[61] = ['35'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 8460. ";
 preguntaids[61] = 8460


//  Id pregunta: 8649 Año de creación de pregunta: 2013
 questions[62]= "63)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[62]= new Array();
 choices[62][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[62][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[62][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[62][3] = "Todas las anteriores son verdaderas.";
 answers[62] = 3;
 units[62] = ['41'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 8649. ";
 preguntaids[62] = 8649


//  Id pregunta: 8537 Año de creación de pregunta: 2011
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[63]= new Array();
 choices[63][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[63][1] = "El impedimento o la obstaculizaci&oacute;n de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[63][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[63][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[63] = 2;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 8537. ";
 preguntaids[63] = 8537


//  Id pregunta: 8475 Año de creación de pregunta: 2011
 questions[64]= "65)  La Ley 2/2011 de Econom&iacute;a Sostenible modific&oacute; las cuant&iacute;as de las sanciones fijadas en la LOPD &iquest;C&oacute;mo?";
 choices[64]= new Array();
 choices[64][0] = "Ha aumentado todas";
 choices[64][1] = "Ha disminuido todas";
 choices[64][2] = "Ha disminuido la m&iacute;nima y aumentado la m&aacute;xima";
 choices[64][3] = "Ha aumentado la m&iacute;nima y disminuido la m&aacute;xima";
 answers[64] = 3;
 units[64] = ['35'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 8475. ";
 preguntaids[64] = 8475


//  Id pregunta: 8644 Año de creación de pregunta: 2013
 questions[65]= "66)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[65]= new Array();
 choices[65][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[65][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[65][2] = "Si, en todos los casos";
 choices[65][3] = "Todas las anteriores son falsas";
 answers[65] = 2;
 units[65] = ['41'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 8644. ";
 preguntaids[65] = 8644


//  Id pregunta: 8270 Año de creación de pregunta: 2011
 questions[66]= "67)  El Real Decreto 3/2010, de 8 de enero, regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica. En el mismo, la seguridad se entender&aacute; como:";
 choices[66]= new Array();
 choices[66][0] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, contemplando exclusivamente elementos t&eacute;cnicos";
 choices[66][1] = "Un proceso integral te&oacute;rico que comprende &uacute;nicamente tas medidas de prevenci&oacute;n y detecci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de correcci&oacute;n, a implantar particularmente en cada caso.";
 choices[66][2] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, que comprende &uacute;nicamente las medidas concretas de detecci&oacute;n y correcci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de prevenci&oacute;n, como propias de cada caso particular";
 choices[66][3] = "Un proceso integral constituido por elementos t&eacute;cnicos, humanos, materiales y organizativos";
 answers[66] = 3;
 units[66] = ['46'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 8270. Examen TIC A2 2010 interna";
 preguntaids[66] = 8270


//  Id pregunta: 8569 Año de creación de pregunta: 2013
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[67]= new Array();
 choices[67][0] = "Huella sim&eacute;trica.";
 choices[67][1] = "Huella asim&eacute;trica.";
 choices[67][2] = "Huella an&oacute;nima.";
 choices[67][3] = "Todas las anteriores son verdaderas.";
 answers[67] = 3;
 units[67] = ['41'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 8569. ";
 preguntaids[67] = 8569


//  Id pregunta: 8538 Año de creación de pregunta: 2011
 questions[68]= "69)  De acuedo a la ley 15/1999, la transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de la ley (Acceso a los datos por cuenta de terceros) se considerar&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Infracci&oacute;n leve";
 choices[68][1] = "Infracci&oacute;n grave";
 choices[68][2] = "Infracci&oacute;n muy grave";
 choices[68][3] = "No se considerar&aacute; infracci&oacute;n";
 answers[68] = 0;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 8538. ";
 preguntaids[68] = 8538


//  Id pregunta: 8641 Año de creación de pregunta: 2013
 questions[69]= "70)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[69]= new Array();
 choices[69][0] = "Estar documentado correctamente";
 choices[69][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[69][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[69][3] = "Ser original";
 answers[69] = 3;
 units[69] = ['41'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 8641. ";
 preguntaids[69] = 8641


//  Id pregunta: 8356 Año de creación de pregunta: 2011
 questions[70]= "71)  En relacion con la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n (MAGERIT). Se&ntilde;ale cual de las opciones siguientes NO es correcta.";
 choices[70]= new Array();
 choices[70][0] = "MAGERIT figura en el inventario de m&eacute;todos de an&aacute;lisis y gesti&oacute;n de riesgos de ENISA (European Network and Information Security Agency)";
 choices[70][1] = "El modelo normativo de MAGERIT se apoya en tres submodelos: an&aacute;lisis, gesti&oacute;n y procesos.";
 choices[70][2] = "Uno de los objetivos de MAGERIT consiste en preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n";
 choices[70][3] = "PILAR es una herramienta que implementa la metodolog&iacute;a MAGERIT de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[70] = 1;
 units[70] = ['45'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 8356. Analista Ayto. Madrid 2010";
 preguntaids[70] = 8356


//  Id pregunta: 8486 Año de creación de pregunta: 2011
 questions[71]= "72)  NO es una infracci&oacute;n leve seg&uacute;n la LOPD:";
 choices[71]= new Array();
 choices[71][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de esta Ley, salvo que constituya infracci&oacute;n grave.";
 choices[71][1] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos.";
 choices[71][2] = "La transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de esta Ley.";
 choices[71][3] = "No remitir a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo.";
 answers[71] = 0;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 8486. ";
 preguntaids[71] = 8486


//  Id pregunta: 8565 Año de creación de pregunta: 2013
 questions[72]= "73)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[72]= new Array();
 choices[72][0] = "Principal.";
 choices[72][1] = "Right.";
 choices[72][2] = "Resource.";
 choices[72][3] = "Constraints.";
 answers[72] = 3;
 units[72] = ['41'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 8565. ";
 preguntaids[72] = 8565


//  Id pregunta: 8409 Año de creación de pregunta: 2011
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes no es una funci&oacute;n del Administrador de la Base de Datos (DBA)?:";
 choices[73]= new Array();
 choices[73][0] = "Realizar el modelo Entidad/Relaci&oacute;n que defina la estructura de los datos.";
 choices[73][1] = "Monitorizaci&oacute;n del rendimiento de la base de datos.";
 choices[73][2] = "Balance de la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento.";
 choices[73][3] = "Gestionar los usuarios y los permisos de acceso a la base da datos";
 answers[73] = 0;
 units[73] = ['30'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 8409. ";
 preguntaids[73] = 8409


//  Id pregunta: 8485 Año de creación de pregunta: 2011
 questions[74]= "75)  No es una infracci&oacute;n grave seg&uacute;n la LOPD:";
 choices[74]= new Array();
 choices[74][0] = "El incumplimiento de los restantes deberes de notificaci&oacute;n o requerimiento al afectado impuestos por esta Ley y sus disposiciones de desarrollo.";
 choices[74][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad privada o iniciar la recogida de datos de car&aacute;cter personal para los mismos con finalidades distintas de las queconstituyen el objeto leg&iacute;timo de la empresa o entidad.";
 choices[74][2] = "Mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen.";
 choices[74][3] = "Tratar datos de car&aacute;cter personal sin recabar el consentimiento de las personas afectadas, cuando el mismo sea necesario conforme a lo dispuesto en esta Ley y sus disposiciones de desarrollo.";
 answers[74] = 1;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 8485. ";
 preguntaids[74] = 8485


