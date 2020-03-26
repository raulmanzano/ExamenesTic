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
//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale la respuesta falsa:";
 choices[0]= new Array();
 choices[0][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[0][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[0][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[0][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[0] = 2;
 units[0] = ['5'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 106. Uni&oacute;n Europea";
 preguntaids[0] = 106


//  Id pregunta: 3551 Año de creación de pregunta: 2004
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos es falsa?";
 choices[1]= new Array();
 choices[1][0] = "Un proceso puede ser tanto origen como final de unos datos";
 choices[1][1] = "Una entidad externa puede aparecer varias veces en un mismo diagrama";
 choices[1][2] = "Los flujos de datos dirigidos a almacenes de datos pueden ser de consulta, de actualizaci&oacute;n y de di&aacute;logo";
 choices[1][3] = "Un almac&eacute;n de datos no puede crear, transformar ni modificar datos";
 answers[1] = 0;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3551. TIC MAP B 2004";
 preguntaids[1] = 3551


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[2]= new Array();
 choices[2][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[2][1] = "Autorizar indultos generales.";
 choices[2][2] = "Sancionar las leyes.";
 choices[2][3] = "Promulgar las leyes.";
 answers[2] = 1;
 units[2] = ['2'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 99. AGE A2 2015";
 preguntaids[2] = 99


//  Id pregunta: 9257 Año de creación de pregunta: 2014
 questions[3]= "4)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[3]= new Array();
 choices[3][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[3][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[3][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[3][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[3] = 2;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9257. Examen TIC A2 2013";
 preguntaids[3] = 9257


//  Id pregunta: 3098 Año de creación de pregunta: 2002
 questions[4]= "5)  Una de las siguientes caracter&iacute;sticas es falsa para los ordenadores RISC. Indicar cu&aacute;l:";
 choices[4]= new Array();
 choices[4][0] = "Consideran m&aacute;s importante la simplicidad en las instrucciones que en la longitud de los programas";
 choices[4][1] = "Las primitivas del ensamblador tienden a ser las mismas que las microinstrucciones";
 choices[4][2] = "Son adecuados para c&aacute;lculos mediante operaciones en coma flotante";
 choices[4][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[4] = 2;
 units[4] = ['49'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3098. ";
 preguntaids[4] = 3098


//  Id pregunta: 5928 Año de creación de pregunta: 2007
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[5]= new Array();
 choices[5][0] = "No precisa se&ntilde;al de reloj externa";
 choices[5][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros";
 choices[5][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas";
 choices[5][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus";
 answers[5] = 1;
 units[5] = ['51'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 5928. ";
 preguntaids[5] = 5928


//  Id pregunta: 6818 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de estas herramientas NO est&aacute; relacionada con la gesti&oacute;n de identidades?";
 choices[6]= new Array();
 choices[6][0] = "Oracle Identity Management";
 choices[6][1] = "BMC Remedy Action Request System";
 choices[6][2] = "IBM Tivoli Identity Manager";
 choices[6][3] = "Novell Nsure";
 answers[6] = 1;
 units[6] = ['123'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 6818. ";
 preguntaids[6] = 6818


//  Id pregunta: 6289 Año de creación de pregunta: 2003
 questions[7]= "8)  El modelo Code and Fix:";
 choices[7]= new Array();
 choices[7][0] = "Modelo b&aacute;sico usado en los primeros tiempos desarrollo de SW compuesto por 2 fases, primero codificar y despu&eacute;s resolver los problemas del c&oacute;digo";
 choices[7][1] = "Tras varios ajustes, el c&oacute;digo se vuelve poco estructurado y los siguientes ajustes son muy costosos.";
 choices[7][2] = "Con frecuencia se ajustaba poco a las necesidades de los usuarios.";
 choices[7][3] = "Todas las anteriores son correctas";
 answers[7] = 3;
 units[7] = ['82'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6289. ";
 preguntaids[7] = 6289


//  Id pregunta: 8736 Año de creación de pregunta: 2013
 questions[8]= "9)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[8]= new Array();
 choices[8][0] = "El RD 2200/1995.";
 choices[8][1] = "El RD 757/1986.";
 choices[8][2] = "La Ley 5/1985.";
 choices[8][3] = "Ninguna, pues no es un organismo p&uacute;blico.";
 answers[8] = 3;
 units[8] = ['48'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 8736. ";
 preguntaids[8] = 8736


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[9]= "10)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[9]= new Array();
 choices[9][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[9][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[9][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[9][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[9] = 2;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[9] = 18


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[10]= "11)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[10]= new Array();
 choices[10][0] = "Fat y Ntfs.";
 choices[10][1] = "Extfat y Fat.";
 choices[10][2] = "Fat y Nfst.";
 choices[10][3] = "ext2fs y Ntfs.";
 answers[10] = 0;
 units[10] = ['58'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 674. Junta de Extremadura A1 2015";
 preguntaids[10] = 674


//  Id pregunta: 978 Año de creación de pregunta: 2016
 questions[11]= "12)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento por parte de los organos jerarquicamente dependientes de las instrucciones u &oacute;rdenes de servicio de los organos administrativos de acuerdo a la ley 40/2015:";
 choices[11]= new Array();
 choices[11][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[11][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[11][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[11][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[11] = 0;
 units[11] = ['4', '7', '8', '9'];
 blocks[11] = ['A1', 'A2'];
 comments[11] = "Id Pregunta: 978. Ley 40/2015";
 preguntaids[11] = 978


//  Id pregunta: 5448 Año de creación de pregunta: 2007
 questions[12]= "13)  En miner&iacute;a de datos, un Esquema Estrella:";
 choices[12]= new Array();
 choices[12][0] = "No tiene en cuenta elementos temporales tales como la fecha asociada a la informaci&oacute;n.";
 choices[12][1] = "Es una forma de representar la arquitectura f&iacute;sica del sistema OLAP.";
 choices[12][2] = "Es una t&eacute;cnica de dise&ntilde;o de bases de datos relacionales que sirve para simular el funcionamiento de bases de datos multidimensionales.";
 choices[12][3] = "Representa la centralizaci&oacute;n de la informaci&oacute;n en un solo SGBD para posibilitar su explotaci&oacute;n ndimensional.";
 answers[12] = 2;
 units[12] = ['72'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 5448. ";
 preguntaids[12] = 5448


//  Id pregunta: 1779 Año de creación de pregunta: 2016
 questions[13]= "14)  En el &aacute;mbito de ITIL, &iquest;cu&aacute;l es otro t&eacute;rmino para el concepto tiempo de disponibilidad (Uptime)?";
 choices[13]= new Array();
 choices[13][0] = "Tiempo Medio entre Fallos (MTBF)";
 choices[13][1] = "Tiempo Medio de Reparaci&oacute;n (MTTR)";
 choices[13][2] = "Tiempo Medio entre Incidentes del Sistema (MTBSI)";
 choices[13][3] = "Relaci&oacute;n entre MTBF y MTBSI";
 answers[13] = 0;
 units[13] = ['101'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 1779. ";
 preguntaids[13] = 1779


//  Id pregunta: 10396 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[14]= new Array();
 choices[14][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[14][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[14][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[14][3] = "Beneficios TIC para la Sociedad UE";
 answers[14] = 0;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 10396. ";
 preguntaids[14] = 10396


//  Id pregunta: 9248 Año de creación de pregunta: 2014
 questions[15]= "16)  Se&ntilde;ale la opci&oacute;n INCORRECTA en relaci&oacute;n con los DFD (Diagrama de Flujos de Datos) y los DE (Diagramas de Estructura), seg&uacute;n M&eacute;trica v3:";
 choices[15]= new Array();
 choices[15][0] = "El objetivo del DFD es la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 choices[15][1] = "En un DFD, los flujos de control representan movimientos de datos con valores s&iacute;ncronos entre procesos de control.";
 choices[15][2] = "Existen dos estrategias para obtener el DE a partir de un DFD, an&aacute;lisis: de transacci&oacute;n y de transformaci&oacute;n. El uso de una de las dos depender&aacute; de los procesos del DFD.";
 choices[15][3] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD existe un proceso que en funci&oacute;n del flujo de llegada, determina la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 answers[15] = 1;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 9248. Examen TIC A2 2013";
 preguntaids[15] = 9248


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[16]= "17)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[16]= new Array();
 choices[16][0] = "El Parlamento Europeo.";
 choices[16][1] = "Todas las respuestas son correctas.";
 choices[16][2] = "La Comisi&oacute;n Europea.";
 choices[16][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[16] = 1;
 units[16] = ['5'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 173. Uni&oacute;n Europea";
 preguntaids[16] = 173


//  Id pregunta: 9939 Año de creación de pregunta: 2015
 questions[17]= "18)  La conexi&oacute;n directa a la Red SARA se proporcionar&aacute; a trav&eacute;s de:";
 choices[17]= new Array();
 choices[17][0] = "Una VPN establecida con cualquiera de los Ministerios.";
 choices[17][1] = "Un &Aacute;rea de Conexi&oacute;n (AC).";
 choices[17][2] = "Un Punto de Presencia situado en el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[17][3] = "Un punto neutro.";
 answers[17] = 1;
 units[17] = ['44'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9939. ";
 preguntaids[17] = 9939


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[18]= "19)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[18]= new Array();
 choices[18][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[18][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[18][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[18][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[18] = 3;
 units[18] = ['14'];
 blocks[18] = ['A3'];
 comments[18] = "Id Pregunta: 363. Pol&iacute;ticas de igualdad";
 preguntaids[18] = 363


//  Id pregunta: 1254 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[19]= new Array();
 choices[19][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[19][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[19][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[19][3] = "Sancionar y publicar las leyes.";
 answers[19] = 2;
 units[19] = ['1'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 1254. ";
 preguntaids[19] = 1254


//  Id pregunta: 897 Año de creación de pregunta: 2016
 questions[20]= "21)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[20]= new Array();
 choices[20][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[20][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[20][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[20][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[20] = 3;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 897. Junta de Extremadura A1 2015";
 preguntaids[20] = 897


//  Id pregunta: 5052 Año de creación de pregunta: 2002
 questions[21]= "22)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[21]= new Array();
 choices[21][0] = "sobre, cabeceras y cuerpo";
 choices[21][1] = "cabeceras, cuerpo y cola";
 choices[21][2] = "sobre, cabeceras, cuerpo y cola";
 choices[21][3] = "cabeceras y cuerpo";
 answers[21] = 0;
 units[21] = ['116'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5052. ";
 preguntaids[21] = 5052


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[22]= new Array();
 choices[22][0] = "El Ministerio de Hacienda.";
 choices[22][1] = "El Ministerio de Econom&iacute;a.";
 choices[22][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[22][3] = "Ninguna de las respuestas es correcta.";
 answers[22] = 2;
 units[22] = ['11'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 286. Presupuestos generales";
 preguntaids[22] = 286


//  Id pregunta: 9439 Año de creación de pregunta: 2014
 questions[23]= "24)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[23]= new Array();
 choices[23][0] = "Fault Mangement";
 choices[23][1] = "Configuration Management";
 choices[23][2] = "Accounting Management";
 choices[23][3] = "Improvement Management";
 answers[23] = 3;
 units[23] = ['105'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9439. ";
 preguntaids[23] = 9439


//  Id pregunta: 5770 Año de creación de pregunta: 2007
 questions[24]= "25)  &iquest;En que lenguaje esta basado XML?";
 choices[24]= new Array();
 choices[24][0] = "HTML";
 choices[24][1] = "XSL";
 choices[24][2] = "SGML";
 choices[24][3] = "XTML";
 answers[24] = 2;
 units[24] = ['74'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 5770. ";
 preguntaids[24] = 5770


//  Id pregunta: 2795 Año de creación de pregunta: 2002
 questions[25]= "26)  El tiempo de latencia en un disco:";
 choices[25]= new Array();
 choices[25][0] = "Tiempo medio necesario para que la informaci&oacute;n pase por debajo de la cabeza de lectura-escritura cuando est&aacute; posicionada sobre la pista adecuada";
 choices[25][1] = "Corresponde al tiempo empleado para realizar la mitad del giro";
 choices[25][2] = "Es equivalente al tiempo de espera";
 choices[25][3] = "Todas las respuestas anteriores son ciertas";
 answers[25] = 3;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2795. ";
 preguntaids[25] = 2795


//  Id pregunta: 1004 Año de creación de pregunta: 2016
 questions[26]= "27)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[26]= new Array();
 choices[26][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[26][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[26][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[26][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[26] = 1;
 units[26] = ['4', '7', '8', '9'];
 blocks[26] = ['A1', 'A2'];
 comments[26] = "Id Pregunta: 1004. Ley 40/2015";
 preguntaids[26] = 1004


//  Id pregunta: 1809 Año de creación de pregunta: 2016
 questions[27]= "28)  Teniendo en cuenta las caracter&iacute;sticas del protocolo XMPP (Extensible Messaging and Presence Protocol), indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[27]= new Array();
 choices[27][0] = "XMPP ha sido formalizado como una tecnolog&iacute;a de mensajer&iacute;a instant&aacute;nea est&aacute;ndar";
 choices[27][1] = "XMPP es totalmente centralizado, para la puesta en marcha de XMPP se requiere obligatoriamente un servidor central";
 choices[27][2] = "XMPP no permite la encriptaci&oacute;n de las comunicaciones";
 choices[27][3] = "XMPP no es extensible, al no permitir crear funcionalidades personalizadas";
 answers[27] = 0;
 units[27] = ['125'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1809. ";
 preguntaids[27] = 1809


//  Id pregunta: 2910 Año de creación de pregunta: 2002
 questions[28]= "29)  Indique la afirmaci&oacute;n falsa, relativa a la arquitectura cliente/servidor:";
 choices[28]= new Array();
 choices[28][0] = "El di&aacute;logo entre cliente y servidor se inicia a requerimiento del servidor";
 choices[28][1] = "El servidor es el equipo que se encarga de suministrar servicios, como consultas a la base de datos, y el cliente es el equipo que muestra y formatea los datos";
 choices[28][2] = "Durante el desarrollo de las aplicaciones que siguen esta estructura, a veces hay que decidir que partes de la aplicaci&oacute;n se ejecutan en el servidor y cu&aacute;les en el cliente";
 choices[28][3] = "Las aplicaciones que se ejecutan en entorno Web siguen esta arquitectura";
 answers[28] = 0;
 units[28] = ['55'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2910. ";
 preguntaids[28] = 2910


//  Id pregunta: 9909 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es considerado un componente de un documento electr&oacute;nico seg&uacute;n la NTI de Documento Electr&oacute;nico?";
 choices[29]= new Array();
 choices[29][0] = "Encabezado.";
 choices[29][1] = "Contenido.";
 choices[29][2] = "Firma electr&oacute;nica.";
 choices[29][3] = "Metadatos.";
 answers[29] = 0;
 units[29] = ['44'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 9909. ";
 preguntaids[29] = 9909


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[30]= new Array();
 choices[30][0] = "Siempre en formato electr&oacute;nico.";
 choices[30][1] = "Siempre en formato papel.";
 choices[30][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[30][3] = "La ley no regula el formato del expediente.";
 answers[30] = 0;
 units[30] = ['7'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 205. Ley 39/2015";
 preguntaids[30] = 205


//  Id pregunta: 3882 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Qu&eacute; sistema de parametrizaci&oacute;n utilizado para la s&iacute;ntesis de voz se conoce tambi&eacute;n como s&iacute;ntesis por reglas?:";
 choices[31]= new Array();
 choices[31][0] = "S&iacute;ntesis a partir de fonemas";
 choices[31][1] = "S&iacute;ntesis a partir de difonemas";
 choices[31][2] = "S&iacute;ntesis a partir de semis&iacute;labas";
 choices[31][3] = "S&iacute;ntesis texto-voz";
 answers[31] = 0;
 units[31] = ['81'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3882. ";
 preguntaids[31] = 3882


//  Id pregunta: 1437 Año de creación de pregunta: 2016
 questions[32]= "33)  A los efectos de la LOPD art&iacute;culo 3, se entienden por datos de car&aacute;cter personal:";
 choices[32]= new Array();
 choices[32][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas o jur&iacute;dicas identificadas.";
 choices[32][1] = "Exclusivamente a informaci&oacute;n relativa a la salud, ideolog&iacute;a, religi&oacute;n, creencias, origen racial o vida sexual de las personas.";
 choices[32][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables.";
 choices[32][3] = "Cualquier informaci&oacute;n sobre las personas, excluidas las de car&aacute;cter pol&iacute;tico, sindical o religioso.";
 answers[32] = 2;
 units[32] = ['35'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 1437. ";
 preguntaids[32] = 1437


//  Id pregunta: 4946 Año de creación de pregunta: 2002
 questions[33]= "34)  Una de las siguientes caracter&iacute;sticas es falsa para la tecnolog&iacute;a GPS. Indicar cu&aacute;l:";
 choices[33]= new Array();
 choices[33][0] = "El sistema lo forma una constelaci&oacute;n de 32 sat&eacute;lites, que orbitan alrededor de la Tierra a 12600 millas, con 5 estaciones fijas de monitorizaci&oacute;n y seguimiento";
 choices[33][1] = "La posici&oacute;n se expresa en latitud y longitud gracias a la triangulaci&oacute;n producida por al menos 4 sat&eacute;lites trabajando simult&aacute;neamente";
 choices[33][2] = "Entre sus aplicaciones principales est&aacute; la gesti&oacute;n de flotas, la provisi&oacute;n de servicios de telefon&iacute;a m&oacute;vil basados en localizaci&oacute;n o las radios privadas y p&uacute;blicas de tipo trunking";
 choices[33][3] = "Es un sistema de origen estadounidense proveniente del campo militar, y la versi&oacute;n de la que puede disponer el gran p&uacute;blico no es tan precisa como la del campo militar";
 answers[33] = 0;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4946. ";
 preguntaids[33] = 4946


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[34]= new Array();
 choices[34][0] = "Dos Cap&iacute;tulos.";
 choices[34][1] = "Tres Cap&iacute;tulos.";
 choices[34][2] = "Un Cap&iacute;tulo.";
 choices[34][3] = "Cuatro Cap&iacute;tulos.";
 answers[34] = 1;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 49. Constituci&oacute;n de 1978";
 preguntaids[34] = 49


//  Id pregunta: 6293 Año de creación de pregunta: 2003
 questions[35]= "36)  El modelo de ciclo de vida en espiral:";
 choices[35]= new Array();
 choices[35][0] = "Es el que mejor se adapta para ser aplicado al software contratado";
 choices[35][1] = "Permite incorporar objetivos de calidad en el desarrollo de productos software";
 choices[35][2] = "No es especialmente adecuado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[35][3] = "Todas las anteriores son correctas";
 answers[35] = 1;
 units[35] = ['82'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6293. ";
 preguntaids[35] = 6293


//  Id pregunta: 10244 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Qu&eacute; RFC contiene la especificaci&oacute;n de HTTP/2?";
 choices[36]= new Array();
 choices[36][0] = "6660";
 choices[36][1] = "6978";
 choices[36][2] = "7540";
 choices[36][3] = "8880";
 answers[36] = 2;
 units[36] = ['74'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10244. Sali&oacute; en octubre 2015 con importantes novedades";
 preguntaids[36] = 10244


//  Id pregunta: 1418 Año de creación de pregunta: 2016
 questions[37]= "38)  El art&iacute;culo 2 de la Constituci&oacute;n Espa&ntilde;ola de 1978, despu&eacute;s de declarar la indisoluble unidad de la Naci&oacute;n espa&ntilde;ola, reconoce y garantiza:";
 choices[37]= new Array();
 choices[37][0] = "El derecho a la autonom&iacute;a de las regiones y naciones que la integran.";
 choices[37][1] = "El derecho a la autonom&iacute;a de las regiones y provincias que la integran.";
 choices[37][2] = "El derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[37][3] = "Ninguna es correcta.";
 answers[37] = 2;
 units[37] = ['1'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 1418. ";
 preguntaids[37] = 1418


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[38]= new Array();
 choices[38][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[38][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[38][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[38][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[38] = 0;
 units[38] = ['14'];
 blocks[38] = ['A3'];
 comments[38] = "Id Pregunta: 373. Pol&iacute;ticas de igualdad";
 preguntaids[38] = 373


//  Id pregunta: 1072 Año de creación de pregunta: 2016
 questions[39]= "40)  La norma ISO 9004 hace referencia a:";
 choices[39]= new Array();
 choices[39][0] = "Recomendaciones para la mejora del desempe&ntilde;o en sistemas de gesti&oacute;n de la calidad.";
 choices[39][1] = "Gu&iacute;a relativa a las auditor&iacute;as de la gesti&oacute;n de la calidad y de la gesti&oacute;n medioambiental.";
 choices[39][2] = "Requisitos de los sistemas de gesti&oacute;n de la calidad.";
 choices[39][3] = "Fundamentos y vocabulario en el &aacute;mbito de los sistemas de gesti&oacute;n de calidad.";
 answers[39] = 0;
 units[39] = ['98'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 1072. ";
 preguntaids[39] = 1072


//  Id pregunta: 1415 Año de creación de pregunta: 2016
 questions[40]= "41)  El d&iacute;a 29 de diciembre del a&ntilde;o 1978, la Constituci&oacute;n Espa&ntilde;ola fue:";
 choices[40]= new Array();
 choices[40][0] = "Sancionada y promulgada por el Rey.";
 choices[40][1] = "Aprobada por los Plenos del Congreso y el Senado.";
 choices[40][2] = "Ratificada mediante refer&eacute;ndum por el pueblo espa&ntilde;ol.";
 choices[40][3] = "Ninguna es correcta.";
 answers[40] = 3;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 1415. ";
 preguntaids[40] = 1415


//  Id pregunta: 6966 Año de creación de pregunta: 2010
 questions[41]= "42)  Respecto a la arquitectura ANSI/SPARC, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[41]= new Array();
 choices[41][0] = "Se definen tres niveles: interno, medio y externo";
 choices[41][1] = "Cada esquema externo describe la parte de la base de datos que interesa a un grupo de usuarios determinado y oculta a ese grupo el resto de la base de datos";
 choices[41][2] = "Es &uacute;til para explicar el concepto de dependencia de datos";
 choices[41][3] = "Existen dos tipos de independencia de datos: b&aacute;sica y completa";
 answers[41] = 1;
 units[41] = ['60'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 6966. TIC-B 2009 bloque desarrollo";
 preguntaids[41] = 6966


//  Id pregunta: 8953 Año de creación de pregunta: 2013
 questions[42]= "43)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[42]= new Array();
 choices[42][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[42][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[42][2] = "Una API de desarrollo en Java";
 choices[42][3] = "Java EE Blueprints no existe";
 answers[42] = 1;
 units[42] = ['64'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8953. ";
 preguntaids[42] = 8953


//  Id pregunta: 2909 Año de creación de pregunta: 2002
 questions[43]= "44)  Indique cu&aacute;l es una ventaja de los applets sobre los scripts:";
 choices[43]= new Array();
 choices[43][0] = "El c&oacute;digo fuente de los applets no es visible";
 choices[43][1] = "Un applet descarga en una sola conexi&oacute;n todos los componentes necesarios";
 choices[43][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 choices[43][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 answers[43] = 2;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2909. ";
 preguntaids[43] = 2909


//  Id pregunta: 8955 Año de creación de pregunta: 2013
 questions[44]= "45)  &iquest;Cu&aacute;l es la API est&aacute;ndar para conectar programas desarrollados en Java con un sistema gestor de base de datos?";
 choices[44]= new Array();
 choices[44][0] = "JAXP";
 choices[44][1] = "StAX";
 choices[44][2] = "JAF";
 choices[44][3] = "JDBC";
 answers[44] = 3;
 units[44] = ['64'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8955. ";
 preguntaids[44] = 8955


//  Id pregunta: 4326 Año de creación de pregunta: 2004
 questions[45]= "46)  &iquest;Cu&aacute;l es el bit del segmento TCP que le indica al receptor que entregue los datos inmediatamente a la aplicaci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "ACK";
 choices[45][1] = "PSH";
 choices[45][2] = "RST";
 choices[45][3] = "PUT";
 answers[45] = 1;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4326. Examen TIC MAP B 2004";
 preguntaids[45] = 4326


//  Id pregunta: 3745 Año de creación de pregunta: 2002
 questions[46]= "47)  Booch, Jacobson y Rumbaugh:";
 choices[46]= new Array();
 choices[46][0] = "crearon C++";
 choices[46][1] = "crearon los diagramas E/R";
 choices[46][2] = "dise&ntilde;aron el primer ordenador que usaba procesamiento real en paralelo";
 choices[46][3] = "crearon UML";
 answers[46] = 3;
 units[46] = ['85'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3745. ";
 preguntaids[46] = 3745


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[47]= "48)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[47]= new Array();
 choices[47][0] = "Al Gobierno.";
 choices[47][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[47][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[47][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[47] = 2;
 units[47] = ['11'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 294. Presupuestos generales";
 preguntaids[47] = 294


//  Id pregunta: 9316 Año de creación de pregunta: 2014
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de conocimiento con licencia de software libre?";
 choices[48]= new Array();
 choices[48][0] = "ATutor";
 choices[48][1] = "Claroline";
 choices[48][2] = "Joomla";
 choices[48][3] = "Moodle";
 answers[48] = 2;
 units[48] = ['70'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9316. ";
 preguntaids[48] = 9316


//  Id pregunta: 5378 Año de creación de pregunta: 2006
 questions[49]= "50)  No es cierto que la herramienta Nagios";
 choices[49]= new Array();
 choices[49][0] = "Puede monitorizar servicios TCP";
 choices[49][1] = "Es una alternativa a Bigbrother";
 choices[49][2] = "Puede utilizar agentes distintos a SNMP";
 choices[49][3] = "Puede ser instalada en Windows";
 answers[49] = 3;
 units[49] = ['114'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5378. ";
 preguntaids[49] = 5378


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[50]= "51)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[50]= new Array();
 choices[50][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[50][1] = "Personas con nacionalidad europea.";
 choices[50][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[50][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[50] = 3;
 units[50] = ['5'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 198. Uni&oacute;n Europea";
 preguntaids[50] = 198


//  Id pregunta: 2285 Año de creación de pregunta: 2002
 questions[51]= "52)  Se entiende por disponibilidad de la informaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "La informaci&oacute;n utilizada ser&aacute; la &uacute;ltima, exacta, autorizada y completa";
 choices[51][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[51][2] = "Aseguramiento de que los usuarios autorizados tienen acceso cuando lo  requieran a la informaci&oacute;n y sus activos asociados.";
 choices[51][3] = "Procedimiento o mecanismo tecnol&oacute;gico que reduce el riesgo.";
 answers[51] = 2;
 units[51] = ['45'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2285. ";
 preguntaids[51] = 2285


//  Id pregunta: 7886 Año de creación de pregunta: 2011
 questions[52]= "53)  En el modelo de referencia de Interconexi&oacute;n de sistemas abiertos (OSI/ISO), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[52]= new Array();
 choices[52][0] = "Las normas de intercomunicaci&oacute;n entre capas constituyen cada protocolo.";
 choices[52][1] = "No todos los nodos participantes en una comunicaci&oacute;n necesitan implementar todas las capas del modelo.";
 choices[52][2] = "Cada entidad del nivel N se comunica directamente con su par.";
 choices[52][3] = "Al especificar cualquier servicio que una capa proporciona, se emplean siempre las primitivas REQUEST, INDICATION, RESPONSE, CONFIRM.";
 answers[52] = 1;
 units[52] = ['105'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 7886. Examen TIC A1 2010";
 preguntaids[52] = 7886


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[53]= "54)  Sobre el Plan Juncker:";
 choices[53]= new Array();
 choices[53][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[53][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[53][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[53][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[53] = 1;
 units[53] = ['5'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 104. Uni&oacute;n Europea";
 preguntaids[53] = 104


//  Id pregunta: 1557 Año de creación de pregunta: 2016
 questions[54]= "55)  En especificaciones de requisitos, la norma IEEE 830-1998 (Recommended Practice for Software Requirements Specifications) establece las caracter&iacute;sticas de una buena especificaci&oacute;n de requisitos:";
 choices[54]= new Array();
 choices[54][0] = "3 caracter&iacute;sticas: Correcta, completa y consistente.";
 choices[54][1] = "6 caracter&iacute;sticas: Correcta, completa, consistente, verificable, modificable y trazable.";
 choices[54][2] = "8 caracter&iacute;sticas: Correcta, no ambigua, completa, consistente, clasificada en rangos de importancia y/o estabilidad, verificable, modificable y trazable.";
 choices[54][3] = "9 caracter&iacute;sticas: Correcta, no ambigua, completa, consistente, clasificados en rangos de importancia y/o estabilidad, verificable, modificable, trazable y consensuada con el usuario.";
 answers[54] = 2;
 units[54] = ['84'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 1557. ";
 preguntaids[54] = 1557


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[55]= new Array();
 choices[55][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[55][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[55][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[55][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[55] = 0;
 units[55] = ['1'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[55] = 69


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[56]= "57)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[56]= new Array();
 choices[56][0] = "Conformidad";
 choices[56][1] = "Responsabilidad";
 choices[56][2] = "Adquisici&oacute;n";
 choices[56][3] = "Desempe&ntilde;o";
 answers[56] = 0;
 units[56] = ['26'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 533. Gobernanza TIC";
 preguntaids[56] = 533


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[57]= new Array();
 choices[57][0] = "La CETIC";
 choices[57][1] = "Los Ministerios";
 choices[57][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[57][3] = "Ninguno de los anteriores";
 answers[57] = 1;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 471. Estrategia TIC";
 preguntaids[57] = 471


//  Id pregunta: 7762 Año de creación de pregunta: 2010
 questions[58]= "59)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[58]= new Array();
 choices[58][0] = "Strategy.";
 choices[58][1] = "State.";
 choices[58][2] = "Observer.";
 choices[58][3] = "Command.";
 answers[58] = 2;
 units[58] = ['89'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 7762. ";
 preguntaids[58] = 7762


//  Id pregunta: 8267 Año de creación de pregunta: 2011
 questions[59]= "60)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[59]= new Array();
 choices[59][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[59][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[59][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[59][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[59] = 0;
 units[59] = ['7'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 8267. Examen TIC A2 2010 interna";
 preguntaids[59] = 8267


//  Id pregunta: 7243 Año de creación de pregunta: 2010
 questions[60]= "61)  Dentro de la gu&iacute;a de servicios ISO 9004, la orientaci&oacute;n para la direcci&oacute;n se basa en distintos principios de gesti&oacute;n";
 choices[60]= new Array();
 choices[60][0] = "Enfoque al cliente";
 choices[60][1] = "Liderazgo";
 choices[60][2] = "Participaci&oacute;n del personal";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = 3;
 units[60] = ['98'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 7243. ";
 preguntaids[60] = 7243


//  Id pregunta: 972 Año de creación de pregunta: 2016
 questions[61]= "62)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[61]= new Array();
 choices[61][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[61][1] = "el C&oacute;digo Civil";
 choices[61][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[61][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[61] = 0;
 units[61] = ['4', '7', '8', '9'];
 blocks[61] = ['A1', 'A2'];
 comments[61] = "Id Pregunta: 972. Ley 40/2015";
 preguntaids[61] = 972


//  Id pregunta: 7574 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[62]= new Array();
 choices[62][0] = "Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo.";
 choices[62][1] = "EUROMARC es la versi&oacute;n europea de dicho formato.";
 choices[62][2] = "Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60.";
 choices[62][3] = "Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic Description).";
 answers[62] = 2;
 units[62] = ['68'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7574. Map 2006";
 preguntaids[62] = 7574


//  Id pregunta: 1451 Año de creación de pregunta: 2016
 questions[63]= "64)  La resistencia, excusa o negativa a la actuaci&oacute;n inspectora de los &oacute;rganos facultados para llevarla a cabo con arreglo a la LSSI art&iacute;culo 38 constituye una infracci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Leve.";
 choices[63][1] = "Grave.";
 choices[63][2] = "Muy grave.";
 choices[63][3] = "No constituye infracci&oacute;n.";
 answers[63] = 1;
 units[63] = ['19'];
 blocks[63] = ['A4'];
 comments[63] = "Id Pregunta: 1451. ";
 preguntaids[63] = 1451


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[64]= "65)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[64][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[64][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[64][3] = "Todas las anteriores son ciertas";
 answers[64] = 3;
 units[64] = ['8'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 262. Ley 39/2015";
 preguntaids[64] = 262


//  Id pregunta: 10215 Año de creación de pregunta: 2015
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano especializado en el control de la Administraci&oacute;n P&uacute;blica?";
 choices[65]= new Array();
 choices[65][0] = "Tribunal de Cuentas";
 choices[65][1] = "IGAE";
 choices[65][2] = "Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 choices[65][3] = "Todos lo son";
 answers[65] = 3;
 units[65] = ['36'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 10215. ";
 preguntaids[65] = 10215


//  Id pregunta: 9901 Año de creación de pregunta: 2015
 questions[66]= "67)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[66]= new Array();
 choices[66][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[66][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[66][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[66][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local, Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[66] = 2;
 units[66] = ['7', '19'];
 blocks[66] = ['A2', 'A4'];
 comments[66] = "Id Pregunta: 9901. ";
 preguntaids[66] = 9901


//  Id pregunta: 3153 Año de creación de pregunta: 2002
 questions[67]= "68)  Un monitor cuya resoluci&oacute;n es de 640 x 480, tiene:";
 choices[67]= new Array();
 choices[67][0] = "480 l&iacute;neas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[67][1] = "640 lineas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[67][2] = "480 pixeles (resoluci&oacute;n horizontal)";
 choices[67][3] = "Ninguna de las anteriores es cierta";
 answers[67] = 0;
 units[67] = ['52'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3153. ";
 preguntaids[67] = 3153


//  Id pregunta: 9022 Año de creación de pregunta: 2014
 questions[68]= "69)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[68]= new Array();
 choices[68][0] = "ReFS";
 choices[68][1] = "NTFS";
 choices[68][2] = "HPFS";
 choices[68][3] = "CSFS";
 answers[68] = 0;
 units[68] = ['58'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 9022. Examen TIC A1 2013";
 preguntaids[68] = 9022


//  Id pregunta: 8190 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia del sistema de almacenamiento RAID 5?";
 choices[69]= new Array();
 choices[69][0] = "La paridad est&aacute; en un disco dedicado";
 choices[69][1] = "La divisi&oacute;n se produce a nivel de bloques";
 choices[69][2] = "Tiene un bajo coste de redundancia";
 choices[69][3] = "Se necesitan al menos 3 discos";
 answers[69] = 0;
 units[69] = ['53'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8190. Examen TIC A2 2010 interna";
 preguntaids[69] = 8190


//  Id pregunta: 9074 Año de creación de pregunta: 2014
 questions[70]= "71)  Las proyecciones (Georreferenciaci&oacute;n Directa):";
 choices[70]= new Array();
 choices[70][0] = "Son proyecciones cil&iacute;ndricas: Proyecci&oacute;n de Mercator, Proyecci&oacute;n de Peter, Proyecci&oacute;n ortogr&aacute;fica y la Proyecci&oacute;n conforme de Lambert.";
 choices[70][1] = "Son proyecciones azimutales: proyecci&oacute;n azimutal, proyecci&oacute;n azimutal de Lambert, proyecci&oacute;n gnom&oacute;nica y proyecci&oacute;n azimutal m&uacute;ltiple.";
 choices[70][2] = "Son proyecciones c&oacute;nicas: proyecci&oacute;n c&oacute;nica simple, proyecci&oacute;n conforme de Lambert y proyecci&oacute;n c&oacute;nica m&uacute;ltiple.";
 choices[70][3] = "Son proyecciones estereogr&aacute;ficas: proyecci&oacute;n estereogr&aacute;fica, proyecci&oacute;n ortogr&aacute;fica, proyecciones modificadas y proyecci&oacute;n conforme gnom&oacute;nica.";
 answers[70] = 2;
 units[70] = ['71'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9074. ";
 preguntaids[70] = 9074


//  Id pregunta: 8329 Año de creación de pregunta: 2011
 questions[71]= "72)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[71]= new Array();
 choices[71][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[71][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[71][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[71][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[71] = 0;
 units[71] = ['63'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8329. Examen UPM A2 2011";
 preguntaids[71] = 8329


//  Id pregunta: 8998 Año de creación de pregunta: 2014
 questions[72]= "73)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[72]= new Array();
 choices[72][0] = "MariaBD";
 choices[72][1] = "Apache Cassandra";
 choices[72][2] = "Heidi";
 choices[72][3] = "Ingres";
 answers[72] = 1;
 units[72] = ['73'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8998. ";
 preguntaids[72] = 8998


//  Id pregunta: 10441 Año de creación de pregunta: 2015
 questions[73]= "74)  En lo Referente a la publicidad de los procedimientos de licitaci&oacute;n de &aacute;mbito estatal, es falso que:";
 choices[73]= new Array();
 choices[73][0] = "En el caso de los procedimientos negociados con publicidad, la publicaci&oacute;n en el perfil del contratante podr&aacute; sustituir a la del BOE.";
 choices[73][1] = "Los contratos no SARA se publican en el BOE y en el Perfil del Contratante.";
 choices[73][2] = "Los contratos SARA se publican en el DOUE, en lugar del BOE, y en el Perfil del Contratante.";
 choices[73][3] = "Ninguna es correcta.";
 answers[73] = 2;
 units[73] = ['37'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 10441. ";
 preguntaids[73] = 10441


//  Id pregunta: 7649 Año de creación de pregunta: 2010
 questions[74]= "75)  Seg&uacute;n el Modelo de Calidad de McCall, el factor &laquo;Correcci&oacute;n&raquo; debe ser tenido en cuenta cuando el producto software se encuentra en la fase de:";
 choices[74]= new Array();
 choices[74][0] = "Construcci&oacute;n.";
 choices[74][1] = "Explotaci&oacute;n.";
 choices[74][2] = "Revisi&oacute;n.";
 choices[74][3] = "Transici&oacute;n.";
 answers[74] = 1;
 units[74] = ['93'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7649. Map 2006";
 preguntaids[74] = 7649


