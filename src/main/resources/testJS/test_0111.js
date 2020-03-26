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
//  Id pregunta: 10810 Año de creación de pregunta: 2015
 questions[0]= "1)  Se&ntilde;ale la respuesta incorrecta con respecto a los MOOC:";
 choices[0]= new Array();
 choices[0][0] = "Son similar a cualquier curso en l&iacute;nea.";
 choices[0][1] = "El n&uacute;mero de participantes es ilimitado.";
 choices[0][2] = "MOOC son las siglas de Masive Open Online Course.";
 choices[0][3] = "Se basan en la interacci&oacute;n social.";
 answers[0] = 0;
 units[0] = ['70'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10810. ";
 preguntaids[0] = 10810


//  Id pregunta: 8977 Año de creación de pregunta: 2013
 questions[1]= "2)  Los certificados incorporados al DNI-e:";
 choices[1]= new Array();
 choices[1][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[1][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[1][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[1][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL5+ definido en la norma ISO/IEC 15408.";
 answers[1] = 3;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 8977. Examen TIC A1 2011";
 preguntaids[1] = 8977


//  Id pregunta: 3170 Año de creación de pregunta: 2002
 questions[2]= "3)  La Ley de Servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Ley 34/2002:";
 choices[2]= new Array();
 choices[2][0] = "Favorece la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica, al asegurar la equivalencia entre los documentos en soporte papel y los documentos electr&oacute;nicos";
 choices[2][1] = "Es una ley pionera, pues se adelant&oacute; en varios meses a la directiva sobre el comercio electr&oacute;nico";
 choices[2][2] = "No incluye previsiones orientadas a hacer efectiva la accesibilidad de las personas con discapacidad a la informaci&oacute;n proporcionada por medios electr&oacute;nicos, remiti&eacute;ndose al desarrollo normativo posterior";
 choices[2][3] = "Prohibe expresamente el env&iacute;o por correo u otras v&iacute;as de comunicaci&oacute;n electr&oacute;nica equivalente de comunicaciones comerciales, para evitar el spamming";
 answers[2] = 0;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 3170. ";
 preguntaids[2] = 3170


//  Id pregunta: 2804 Año de creación de pregunta: 2002
 questions[3]= "4)  En el campo de la integraci&oacute;n de los sistemas expertos:";
 choices[3]= new Array();
 choices[3][0] = "Los gestores inteligentes de bases de datos modelizan las descripciones funcionales de los procesos inferenciales b&aacute;sicos";
 choices[3][1] = "Las arquitecturas de sistemas de gesti&oacute;n de bases de datos se pueden optimizar incorporando m&oacute;dulos de optimizaci&oacute;n basados en t&eacute;cnicas heur&iacute;sticas de inteligencia artificial";
 choices[3][2] = "Un sistema de gesti&oacute;n de bases de datos deductivo es aqu&eacute;l en que los criterios de selecci&oacute;n pueden deducirse directamente de las restricciones de integridad";
 choices[3][3] = "Para la formalizaci&oacute;n de sistemas deductivos de bases de datos nunca se utilizan las t&eacute;cnicas de deducci&oacute;n autom&aacute;tica de la l&oacute;gica de primer orden";
 answers[3] = 1;
 units[3] = ['67'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2804. ";
 preguntaids[3] = 2804


//  Id pregunta: 3182 Año de creación de pregunta: 2003
 questions[4]= "5)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Una persona f&iacute;sica";
 choices[4][1] = "Una persona jur&iacute;dica";
 choices[4][2] = "Ambas";
 choices[4][3] = "S&oacute;lo el Estado";
 answers[4] = 2;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 3182. Ley 59/2003, art&iacute;culo 2.2";
 preguntaids[4] = 3182


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[5]= "6)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[5]= new Array();
 choices[5][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[5][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[5][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[5][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[5] = 3;
 units[5] = ['12'];
 blocks[5] = ['A3'];
 comments[5] = "Id Pregunta: 328. Modelo econ&oacute;mico";
 preguntaids[5] = 328


//  Id pregunta: 7000 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[6]= new Array();
 choices[6][0] = "Las pruebas de caja blanca se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[6][1] = "Las pruebas de caja blanca son pruebas de Sistema";
 choices[6][2] = "Las pruebas de caja negra se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[6][3] = "Las pruebas de caja negra son pruebas de Regresi&oacute;n";
 answers[6] = 0;
 units[6] = ['92'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7000. TIC-B 2009 bloque desarrollo";
 preguntaids[6] = 7000


//  Id pregunta: 4687 Año de creación de pregunta: 2002
 questions[7]= "8)  El middleware puede definirse como un m&oacute;dulo intermedio que act&uacute;a como conductor entre dos m&oacute;dulos de software.  A este respecto, tambi&eacute;n se puede afirmar que:";
 choices[7]= new Array();
 choices[7][0] = "En una aplicaci&oacute;n cliente/servidor, el middleware permite independizar los procesos cliente y servidor";
 choices[7][1] = "La utilizaci&oacute;n del middleware en lugar de utilizar drectamente las APIs del sistema operativo, hace que en muchas ocasiones se pierda 'potencia'";
 choices[7][2] = "En t&eacute;minos de programaci&oacute;n orientada a objetos, el middleware identifica diferentes objetos y conoce las propiedades que tienen asociadas, por lo que puede responder a peticiones referentes a los mismos";
 choices[7][3] = "Todas las respuestas anteriores son correctas";
 answers[7] = 3;
 units[7] = ['113'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4687. ";
 preguntaids[7] = 4687


//  Id pregunta: 975 Año de creación de pregunta: 2016
 questions[8]= "9)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[8]= new Array();
 choices[8][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[8][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[8][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[8][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[8] = 0;
 units[8] = ['4', '7', '8', '9'];
 blocks[8] = ['A1', 'A2'];
 comments[8] = "Id Pregunta: 975. Ley 40/2015";
 preguntaids[8] = 975


//  Id pregunta: 5150 Año de creación de pregunta: 2003
 questions[9]= "10)  &iquest;Con qu&eacute; est&aacute; relacionado CSMA/CD?";
 choices[9]= new Array();
 choices[9][0] = "802.4";
 choices[9][1] = "802.3";
 choices[9][2] = "802.5";
 choices[9][3] = "802.6";
 answers[9] = 1;
 units[9] = ['107'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5150. ";
 preguntaids[9] = 5150


//  Id pregunta: 8434 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[10]= new Array();
 choices[10][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[10][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[10][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[10][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[10] = 2;
 units[10] = ['2'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 8434. ";
 preguntaids[10] = 8434


//  Id pregunta: 9898 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Qu&eacute; Ley establece el Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas?";
 choices[11]= new Array();
 choices[11][0] = "Ley 40/2015.";
 choices[11][1] = "Ley 40/2014.";
 choices[11][2] = "Ley 39/2015.";
 choices[11][3] = "Ley 41/2015.";
 answers[11] = 2;
 units[11] = ['7', '19'];
 blocks[11] = ['A2', 'A4'];
 comments[11] = "Id Pregunta: 9898. ";
 preguntaids[11] = 9898


//  Id pregunta: 1471 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;C&oacute;mo se llama la tecnolog&iacute;a de E/S incorporada en 2011 por Apple a sus nuevos iMac o MacBook Pro y que tiene una velocidad superior a FireWire 800 y USB 2.0?";
 choices[12]= new Array();
 choices[12][0] = "Thunderbolt.";
 choices[12][1] = "Lightningbolt.";
 choices[12][2] = "Applebolt.";
 choices[12][3] = "Strikingbolt.";
 answers[12] = 0;
 units[12] = ['59'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1471. ";
 preguntaids[12] = 1471


//  Id pregunta: 6495 Año de creación de pregunta: 2003
 questions[13]= "14)  Indique cu&aacute;l no es un procedimiento o faceta procedural de los slots en marcos";
 choices[13]= new Array();
 choices[13][0] = "if asked";
 choices[13][1] = "if needed";
 choices[13][2] = "if required";
 choices[13][3] = "if added";
 answers[13] = 0;
 units[13] = ['67'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6495. ";
 preguntaids[13] = 6495


//  Id pregunta: 5478 Año de creación de pregunta: 2007
 questions[14]= "15)  Indique la respuesta incorrecta. La utilizaci&oacute;n de &ldquo;web farms&rdquo; o granjas de servidores:";
 choices[14]= new Array();
 choices[14][0] = "Libera al usuario final de tener que saber qu&eacute; servidor est&aacute; procesando su petici&oacute;n.";
 choices[14][1] = "Reduce el riesgo de errores de operaciones, con el resultado de que los usuarios finales ven mejorada la fiabilidad y una mayor disponibilidad del sistema.";
 choices[14][2] = "Simplifica notablemente la gesti&oacute;n del sistema; las acciones que afectan a m&uacute;ltiples recursos pueden ser llevadas a cabo con un &uacute;nico comando, mientras que los recursos est&aacute; repartidos entre los m&uacute;ltiples sistemas en diferentes m&aacute;quinas.";
 choices[14][3] = "Minimiza el coste de una instalaci&oacute;n web.";
 answers[14] = 3;
 units[14] = ['54'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 5478. ";
 preguntaids[14] = 5478


//  Id pregunta: 8435 Año de creación de pregunta: 2011
 questions[15]= "16)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[15]= new Array();
 choices[15][0] = "Una representaci&oacute;n del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[15][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[15][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[15][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[15] = 0;
 units[15] = ['2'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 8435. ";
 preguntaids[15] = 8435


//  Id pregunta: 6042 Año de creación de pregunta: 2003
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[16]= new Array();
 choices[16][0] = "PostgreSQL.";
 choices[16][1] = "Gentoo.";
 choices[16][2] = "UbuntuBD.";
 choices[16][3] = "SQLCentos.";
 answers[16] = 0;
 units[16] = ['60'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 6042. TIC B 2007";
 preguntaids[16] = 6042


//  Id pregunta: 880 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[17]= new Array();
 choices[17][0] = "Nivel 7 - MPLS.";
 choices[17][1] = "Nivel 3 - RARP.";
 choices[17][2] = "Nivel 2 - HDLC.";
 choices[17][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[17] = 2;
 units[17] = ['105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 880. AGE A1 2015";
 preguntaids[17] = 880


//  Id pregunta: 1452 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la LSSI en su anexo de definiciones?";
 choices[18]= new Array();
 choices[18][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica.";
 choices[18][1] = "El v&iacute;deo bajo demanda.";
 choices[18][2] = "El teletexto televisivo.";
 choices[18][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos.";
 answers[18] = 2;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 1452. ";
 preguntaids[18] = 1452


//  Id pregunta: 7870 Año de creación de pregunta: 2011
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l NO es uno de los conjuntos de metadatos que manejan los SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica):";
 choices[19]= new Array();
 choices[19][0] = "Metadatos de explotaci&oacute;n.";
 choices[19][1] = "Metadatos de descubrimiento.";
 choices[19][2] = "Metadatos de exploraci&oacute;n.";
 choices[19][3] = "Metadatos de representaci&oacute;n.";
 answers[19] = 3;
 units[19] = ['71'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7870. Examen TIC A1 2010";
 preguntaids[19] = 7870


//  Id pregunta: 7269 Año de creación de pregunta: 2010
 questions[20]= "21)  GSM se caracteriza por";
 choices[20]= new Array();
 choices[20][0] = "Enlace ascendente 880-905 MHz";
 choices[20][1] = "Enlace ascendente 890-915 MHz";
 choices[20][2] = "Enlace descendente 890-915 MHz";
 choices[20][3] = "Todas las respuestas anteriores son incorrectos";
 answers[20] = 1;
 units[20] = ['117'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7269. ";
 preguntaids[20] = 7269


//  Id pregunta: 2212 Año de creación de pregunta: 2009
 questions[21]= "22)  La calidad de los datos a la que hacen referencia las leyes de protecci&oacute;n de datos no incluye uno de los aspectos siguientes:";
 choices[21]= new Array();
 choices[21][0] = "Tipicidad";
 choices[21][1] = "Veracidad";
 choices[21][2] = "Finalidad";
 choices[21][3] = "Pertinencia";
 answers[21] = 0;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2212. ";
 preguntaids[21] = 2212


//  Id pregunta: 4520 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes topolog&iacute;as tiene un mayor nivel de seguridad?:";
 choices[22]= new Array();
 choices[22][0] = "Bus";
 choices[22][1] = "Anillo";
 choices[22][2] = "Estrella";
 choices[22][3] = "Las 3 anteriores topolog&iacute;as tienen un nivel de seguridad similar";
 answers[22] = 2;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4520. ";
 preguntaids[22] = 4520


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[23]= "24)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[23]= new Array();
 choices[23][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[23][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[23][2] = "A y B son correctas.";
 choices[23][3] = "A y B son incorrectas.";
 answers[23] = 2;
 units[23] = ['4', '7', '8', '9'];
 blocks[23] = ['A1', 'A2'];
 comments[23] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[23] = 1040


//  Id pregunta: 4589 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;En qu&eacute; bandas de frecuencias se han concedido licencias LMDS en Espa&ntilde;a?:";
 choices[24]= new Array();
 choices[24][0] = "450 y 900 MHz";
 choices[24][1] = "450 y 900 GHz";
 choices[24][2] = "3,5 y 26 MHz";
 choices[24][3] = "3,5 y 26 GHz";
 answers[24] = 3;
 units[24] = ['107'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4589. ";
 preguntaids[24] = 4589


//  Id pregunta: 1990 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique cual de las siguientes respuestas es FALSA. En los sistemas operativos, dentro del &aacute;mbito de las pol&iacute;ticas de planificaci&oacute;n de CPU, se debe mantener un equilibrio para conseguir:";
 choices[25]= new Array();
 choices[25][0] = "Bajo tiempo de respuesta per tarea";
 choices[25][1] = "Alta productividad para tareas que se ejecutan en segundo plano";
 choices[25][2] = "Inanici&oacute;n de los procesos";
 choices[25][3] = "Respetar la prioridad de los procesos.";
 answers[25] = 2;
 units[25] = ['56'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1990. ";
 preguntaids[25] = 1990


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[26]= "27)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Incremental, diferencial, completa";
 choices[26][1] = "Completa, incremental, diferencial";
 choices[26][2] = "Completa, diferencial, incremental";
 choices[26][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[26] = 0;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 648. AGE A1 2015";
 preguntaids[26] = 648


//  Id pregunta: 4123 Año de creación de pregunta: 2003
 questions[27]= "28)  Teniendo en cuenta la agudeza visual humana y la unidad m&iacute;nima de resoluci&oacute;n, los procesos de tratamiento digital de imagen deber&iacute;an llevarse a cabo entre:";
 choices[27]= new Array();
 choices[27][0] = "25 &micro;m y 100 &micro;m.";
 choices[27][1] = "0,4 &micro;m y 0,7 &micro;m.";
 choices[27][2] = "0,3 &micro;m y 1 mm.";
 choices[27][3] = "Ninguna de las anteriores.";
 answers[27] = 0;
 units[27] = ['80'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 4123. ";
 preguntaids[27] = 4123


//  Id pregunta: 5674 Año de creación de pregunta: 2007
 questions[28]= "29)  &iquest;Qu&eacute; es un almac&eacute;n de datos?";
 choices[28]= new Array();
 choices[28][0] = "Un sistema de almacenamiento masivo en discos RAID.";
 choices[28][1] = "Una base de datos OLTP.";
 choices[28][2] = "Un repositorio de informaci&oacute;n recopilada de distintas fuentes.";
 choices[28][3] = "Un sistema de almacenamiento innovador que viene integrado en el paquete de Suse&shy;Linux.";
 answers[28] = 2;
 units[28] = ['85'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 5674. ";
 preguntaids[28] = 5674


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[29]= "30)  El Parlamento Europeo celebrar&aacute;:";
 choices[29]= new Array();
 choices[29][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[29][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[29][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[29][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[29] = 0;
 units[29] = ['5'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 112. Uni&oacute;n Europea";
 preguntaids[29] = 112


//  Id pregunta: 7630 Año de creación de pregunta: 2010
 questions[30]= "31)  El modelo ITIL (Information Technology Infrastructure Library) se utiliza para identificar y administrar los servicios de tecnolog&iacute;as de la informaci&oacute;n que presta una organizaci&oacute;n. &iquest;Cu&aacute;l de los siguientes NO forma parte del conjunto de procesos y funciones identificados por ITIL?";
 choices[30]= new Array();
 choices[30][0] = "Gesti&oacute;n de incidencias.";
 choices[30][1] = "Gesti&oacute;n de la seguridad TI";
 choices[30][2] = "Gesti&oacute;n de aplicaciones.";
 choices[30][3] = "Desarrollo de aplicaciones.";
 answers[30] = 3;
 units[30] = ['101'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7630. Similar a Map 2006";
 preguntaids[30] = 7630


//  Id pregunta: 5654 Año de creación de pregunta: 2007
 questions[31]= "32)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[31]= new Array();
 choices[31][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de la red publica.";
 choices[31][1] = "Efectuar la autentificaci&oacute;n de los usuarios.";
 choices[31][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de la red publica.";
 choices[31][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[31] = 2;
 units[31] = ['119', '120'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5654. ";
 preguntaids[31] = 5654


//  Id pregunta: 3827 Año de creación de pregunta: 2002
 questions[32]= "33)  En los modelos orientados a objeto, un m&eacute;todo:";
 choices[32]= new Array();
 choices[32][0] = "Es una implementaci&oacute;n espec&iacute;fica de una operaci&oacute;n en una determinada clase";
 choices[32][1] = "Es la implementaci&oacute;n de un operador, independientemente de la clase a la que se aplica";
 choices[32][2] = "Es la implementaci&oacute;n sistem&aacute;tica del mecanismo de herencia";
 choices[32][3] = "Es un procedimiento sistem&aacute;tico para el dise&ntilde;o del sistema";
 answers[32] = 0;
 units[32] = ['85'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3827. ";
 preguntaids[32] = 3827


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[33]= new Array();
 choices[33][0] = "El Ministro de Econom&iacute;a.";
 choices[33][1] = "El Gobierno.";
 choices[33][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[33][3] = "El Presidente del Gobierno.";
 answers[33] = 1;
 units[33] = ['11'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 288. Presupuestos generales";
 preguntaids[33] = 288


//  Id pregunta: 10842 Año de creación de pregunta: 2015
 questions[34]= "35)  Una trama STM-4 tiene una capacidad de:";
 choices[34]= new Array();
 choices[34][0] = "155 Mbps";
 choices[34][1] = "622 Mbps";
 choices[34][2] = "2,5 Gbps";
 choices[34][3] = "10 Gbps";
 answers[34] = 1;
 units[34] = ['112'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10842. ";
 preguntaids[34] = 10842


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[35]= "36)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[35][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[35][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[35][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[35] = 1;
 units[35] = ['7'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 1995. ";
 preguntaids[35] = 1995


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a estandarizada por el W3C permite la extracci&oacute;n de datos desde documentos XML:";
 choices[36]= new Array();
 choices[36][0] = "XML MyQueryLang.";
 choices[36][1] = "XSQL Language.";
 choices[36][2] = "XML QueryDataSet.";
 choices[36][3] = "Xquery Language.";
 answers[36] = 3;
 units[36] = ['74'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 762. AGE A2 2015";
 preguntaids[36] = 762


//  Id pregunta: 4838 Año de creación de pregunta: 2002
 questions[37]= "38)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[37]= new Array();
 choices[37][0] = "Services Oriented Architecture Protocol";
 choices[37][1] = "Simple Object Access Protocol";
 choices[37][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[37][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[37] = 1;
 units[37] = ['74'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 4838. ";
 preguntaids[37] = 4838


//  Id pregunta: 5826 Año de creación de pregunta: 2007
 questions[38]= "39)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[38]= new Array();
 choices[38][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[38][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones.";
 choices[38][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[38][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[38] = 2;
 units[38] = ['24'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 5826. Examen 2006 JCYL";
 preguntaids[38] = 5826


//  Id pregunta: 3184 Año de creación de pregunta: 2003
 questions[39]= "40)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[39]= new Array();
 choices[39][0] = "Formato de certificado digital";
 choices[39][1] = "Formato de sobre digital";
 choices[39][2] = "Cifrado con clave privada";
 choices[39][3] = "Sintaxis de la clave privada";
 answers[39] = 1;
 units[39] = ['78'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3184. ";
 preguntaids[39] = 3184


//  Id pregunta: 3164 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[40]= new Array();
 choices[40][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[40][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[40][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[40][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[40] = 0;
 units[40] = ['19'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 3164. Ley 34/2002, art&iacute;culo 21";
 preguntaids[40] = 3164


//  Id pregunta: 1679 Año de creación de pregunta: 2016
 questions[41]= "42)  En la teor&iacute;a de Decisi&oacute;n Multicriterio Discreta (DMD), el m&eacute;todo de ordenaci&oacute;n de alternativas Promethee se encuadra en la tipolog&iacute;a:";
 choices[41]= new Array();
 choices[41][0] = "De relaciones de superaci&oacute;n";
 choices[41][1] = "De ponderaci&oacute;n lineal";
 choices[41][2] = "Lexicogr&aacute;fico";
 choices[41][3] = "De concordancia";
 answers[41] = 0;
 units[41] = ['38'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 1679. ";
 preguntaids[41] = 1679


//  Id pregunta: 1631 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Es posible que en una misma sesi&oacute;n/aplicaci&oacute;n sobre Internet se utilicen simult&aacute;neamente los protocolos de seguridad IPSec y SSL?";
 choices[42]= new Array();
 choices[42][0] = "No, se debe elegir en la implementaci&oacute;n de la aplicaci&oacute;n una de las dos, pues trabajan en el mismo nivel.";
 choices[42][1] = "No, se debe elegir en la implementaci&oacute;n de la aplicaci&oacute;n una de las dos, pues son incompatibles a nivel de socket.";
 choices[42][2] = "S&iacute;, no debe presentar especiales problemas.";
 choices[42][3] = "S&iacute;, pero necesita una adaptaci&oacute;n especial para que no se produzca una transposici&oacute;n de claves.";
 answers[42] = 2;
 units[42] = ['120'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1631. ";
 preguntaids[42] = 1631


//  Id pregunta: 5853 Año de creación de pregunta: 2007
 questions[43]= "44)  Firmar un mensaje electr&oacute;nico";
 choices[43]= new Array();
 choices[43][0] = "Es lo mismo que cifrarlo";
 choices[43][1] = "Garantiza la confidencialidad";
 choices[43][2] = "Es lo mismo que codificarlo";
 choices[43][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[43] = 3;
 units[43] = ['76'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 5853. Examen 2006 JCYL";
 preguntaids[43] = 5853


//  Id pregunta: 7721 Año de creación de pregunta: 2010
 questions[44]= "45)  &iquest;Cu&aacute;l es el per&iacute;odo m&aacute;ximo de validez de los certificados del DNIe?";
 choices[44]= new Array();
 choices[44][0] = "24 meses.";
 choices[44][1] = "5 a&ntilde;os.";
 choices[44][2] = "30 meses.";
 choices[44][3] = "4 a&ntilde;os.";
 answers[44] = 1;
 units[44] = ['78'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7721. Similar a Map 2007";
 preguntaids[44] = 7721


//  Id pregunta: 10387 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[45]= new Array();
 choices[45][0] = "Crecimiento inteligente";
 choices[45][1] = "Crecimiento sostenible";
 choices[45][2] = "Crecimiento integrador";
 choices[45][3] = "Todas las anteriores";
 answers[45] = 3;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 10387. ";
 preguntaids[45] = 10387


//  Id pregunta: 1982 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique cu&aacute;l de las siguientes afirmaciones, relativas a sistemas distribuidos, NO es correcta:";
 choices[46]= new Array();
 choices[46][0] = "En el caso de que un nodo del sistema fallara, los dem&aacute;s podr&iacute;an continuar ejecutando sus acciones";
 choices[46][1] = "Una vez ejecutados distintos trabajos en distintos nodos del sistema, hay que conocer en qu&eacute; orden se han ejecutado estos.";
 choices[46][2] = "Dan una visi&oacute;n al usuario de sistemas aut&oacute;nomos independientes.";
 choices[46][3] = "Tanto las arquitecturas como los sistemas operativos no tienen por qu&eacute; ser iguales";
 answers[46] = 2;
 units[46] = ['55'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1982. ";
 preguntaids[46] = 1982


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[47]= "48)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[47]= new Array();
 choices[47][0] = "El presidente de las Cortes Generales.";
 choices[47][1] = "El Presidente del Gobierno.";
 choices[47][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[47][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[47] = 3;
 units[47] = ['11'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 318. Presupuestos generales";
 preguntaids[47] = 318


//  Id pregunta: 6403 Año de creación de pregunta: 2003
 questions[48]= "49)  Qu&eacute; le ocurre a una transacci&oacute;n si recupera todos los datos que satisfacen una condici&oacute;n y despu&eacute;s otra transacci&oacute;n incorpora nuevos datos que satisfacen dicha condici&oacute;n, cuando repite la lectura inicial";
 choices[48]= new Array();
 choices[48][0] = "Nada";
 choices[48][1] = "Una lectura sucia";
 choices[48][2] = "Una lectura fantasma";
 choices[48][3] = "Una escritura sucia";
 answers[48] = 2;
 units[48] = ['61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6403. ";
 preguntaids[48] = 6403


//  Id pregunta: 10595 Año de creación de pregunta: 2015
 questions[49]= "50)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la descripci&oacute;n correcta de las cuatro Ps del Dise&ntilde;o del Servicio?";
 choices[49]= new Array();
 choices[49][0] = "Un proceso de cuatro pasos para el dise&ntilde;o de una gesti&oacute;n del servicio efectiva";
 choices[49][1] = "Una definici&oacute;n del personal y los productos requeridos para un dise&ntilde;o exitoso";
 choices[49][2] = "Una serie de preguntas que deben hacerse cuando se revisan las especificaciones de dise&ntilde;o";
 choices[49][3] = "Cuatro &aacute;reas principales que deben ser consideradas durante el Dise&ntilde;o del Servicio";
 answers[49] = 3;
 units[49] = ['101'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 10595. ";
 preguntaids[49] = 10595


//  Id pregunta: 10936 Año de creación de pregunta: 2015
 questions[50]= "51)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[50]= new Array();
 choices[50][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[50][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[50][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[50][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[50] = 3;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 10936. ";
 preguntaids[50] = 10936


//  Id pregunta: 6976 Año de creación de pregunta: 2010
 questions[51]= "52)  &iquest;Cu&aacute;l se las siguientes afirmaciones es incorrecta?";
 choices[51]= new Array();
 choices[51][0] = "Polimorfismo: distintas instancias del mismo tipo interpretan un mismo mensaje de distinta forma";
 choices[51][1] = "En el caso de enlace din&aacute;mico, la llamada al m&eacute;todo se resuelve en tiempo de ejecuci&oacute;n";
 choices[51][2] = "Se pueden crear instancias de una clase abstracta";
 choices[51][3] = "Un enlace est&aacute;tico se resuelve en tiempo de compilaci&oacute;n";
 answers[51] = 2;
 units[51] = ['85'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 6976. TIC-B 2009 bloque desarrollo";
 preguntaids[51] = 6976


//  Id pregunta: 7711 Año de creación de pregunta: 2010
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&laquo;Secure Socket Layer&raquo;) es correcta?";
 choices[52]= new Array();
 choices[52][0] = "Solo proporciona servicios de seguridad para el protocolo HTTP (&laquo;HyperText Transfer Protocol&raquo;).";
 choices[52][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir.";
 choices[52][2] = "El protocolo se implementa entre los niveles de Transporte y de Red.";
 choices[52][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n.";
 answers[52] = 3;
 units[52] = ['119'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 7711. Map 2007";
 preguntaids[52] = 7711


//  Id pregunta: 3471 Año de creación de pregunta: 2006
 questions[53]= "54)  De acuerdo con la normativa relativa sobre firma electr&oacute;nica, se&ntilde;ale la falsa:";
 choices[53]= new Array();
 choices[53][0] = "La prestaci&oacute;n de servicios de certificaci&oacute;n no est&aacute; sujeta a autorizaci&oacute;n previa y se realizar&aacute; en r&eacute;gimen de libre competencia";
 choices[53][1] = "El firmante es una persona que posee el dispositivo de creaci&oacute;n de firma y que act&uacute;a en nombre propio o de una persona f&iacute;sica o jur&iacute;dica a la que representa.";
 choices[53][2] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 4 a&ntilde;os";
 choices[53][3] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 5 a&ntilde;os";
 answers[53] = 2;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 3471. ";
 preguntaids[53] = 3471


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[54]= new Array();
 choices[54][0] = "Al Consejo Europeo.";
 choices[54][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[54][2] = "A la Comisi&oacute;n Europea.";
 choices[54][3] = "Al Parlamento Europeo.";
 answers[54] = 2;
 units[54] = ['5'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 118. Uni&oacute;n Europea";
 preguntaids[54] = 118


//  Id pregunta: 1481 Año de creación de pregunta: 2016
 questions[55]= "56)  El API de java utilizado para mapear XML&acute;s desde y hacia clases JAVA es:";
 choices[55]= new Array();
 choices[55][0] = "JAXP.";
 choices[55][1] = "JAXS.";
 choices[55][2] = "JAXB.";
 choices[55][3] = "WSDL.";
 answers[55] = 2;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1481. ";
 preguntaids[55] = 1481


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[56]= "57)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[56]= new Array();
 choices[56][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[56][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[56][2] = "Absoluta frente a cualquier otro gasto.";
 choices[56][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[56] = 2;
 units[56] = ['11'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 327. Presupuestos generales";
 preguntaids[56] = 327


//  Id pregunta: 8980 Año de creación de pregunta: 2013
 questions[57]= "58)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[57]= new Array();
 choices[57][0] = "Grupos de consumidores o usuarios afectados";
 choices[57][1] = "El Ministerio Fiscal";
 choices[57][2] = "El Instituto Nacional de Consumo";
 choices[57][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[57] = 3;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 8980. Ley 34/2002, art&iacute;culo 31";
 preguntaids[57] = 8980


//  Id pregunta: 8974 Año de creación de pregunta: 2013
 questions[58]= "59)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[58]= new Array();
 choices[58][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[58][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[58][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[58][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[58] = 3;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 8974. Examen TIC A1 2011";
 preguntaids[58] = 8974


//  Id pregunta: 8823 Año de creación de pregunta: 2013
 questions[59]= "60)  En la Teor&iacute;a Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo obtiene como resultado un subconjunto de alternativas aceptables";
 choices[59]= new Array();
 choices[59][0] = "M&eacute;todos de concordancia";
 choices[59][1] = "M&eacute;todos basados en permutaciones";
 choices[59][2] = "M&eacute;todos basados en la ponderaci&oacute;n lineal";
 choices[59][3] = "M&eacute;todo T.O.P.S.I.S.";
 answers[59] = 0;
 units[59] = ['38'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 8823. ";
 preguntaids[59] = 8823


//  Id pregunta: 8778 Año de creación de pregunta: 2013
 questions[60]= "61)  Acerca de las ventanas de transmisi&oacute;n en las fibras &oacute;pticas, se puede afirmar:";
 choices[60]= new Array();
 choices[60][0] = "Son provocadas por la presencia del ion hidroxilo OH-";
 choices[60][1] = "La m&aacute;s amplia es la primera ventana, entre los 0,8 y 0,9 micras";
 choices[60][2] = "Alrededor de los 1550 nm existe una ventana de transmisi&oacute;n.";
 choices[60][3] = "La tercera ventana obliga a usar transmisiones monomodo";
 answers[60] = 2;
 units[60] = ['106'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 8778. ";
 preguntaids[60] = 8778


//  Id pregunta: 9923 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[61]= new Array();
 choices[61][0] = "HTML";
 choices[61][1] = "PDF";
 choices[61][2] = "XML";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 2;
 units[61] = ['44'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 9923. ";
 preguntaids[61] = 9923


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[62]= new Array();
 choices[62][0] = "El Consejo Europeo.";
 choices[62][1] = "El Parlamento Europeo.";
 choices[62][2] = "El Consejo.";
 choices[62][3] = "La Comisi&oacute;n.";
 answers[62] = 3;
 units[62] = ['5'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 184. Uni&oacute;n Europea";
 preguntaids[62] = 184


//  Id pregunta: 6167 Año de creación de pregunta: 2003
 questions[63]= "64)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Muy grave";
 choices[63][1] = "Grave";
 choices[63][2] = "Leve";
 choices[63][3] = "No est&aacute; tipificado tal importe";
 answers[63] = 1;
 units[63] = ['19'];
 blocks[63] = ['A4'];
 comments[63] = "Id Pregunta: 6167. Ley 59/2003, art&iacute;culo 32";
 preguntaids[63] = 6167


//  Id pregunta: 7204 Año de creación de pregunta: 2010
 questions[64]= "65)  &iquest;Qu&eacute; comandos se usan en POP3 para descargarse y borrar los dos primeros mensajes del buz&oacute;n de correo?";
 choices[64]= new Array();
 choices[64][0] = "RETR 1 DELE 1 RETR 2 DELE 2";
 choices[64][1] = "RETE 1,2 DELE 1,2";
 choices[64][2] = "RETR 1-2 DELE 1-2";
 choices[64][3] = "RETR 1 RETR 2";
 answers[64] = 0;
 units[64] = ['116'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 7204. Castilla La Mancha 2009";
 preguntaids[64] = 7204


//  Id pregunta: 7160 Año de creación de pregunta: 2010
 questions[65]= "66)  Cuando se transforma un modelo E/R a modelo relacional las relaciones 1:N:";
 choices[65]= new Array();
 choices[65][0] = "Se transforman por el mecanismo de propagaci&oacute;n de clave ajena.";
 choices[65][1] = "Generan una tabla igual que una relaci&oacute;n N:M.";
 choices[65][2] = "Dependiendo del tipo de consultas posteriores se genera o no la tabla.";
 choices[65][3] = "Si el volumen de datos es muy grande se genera la tabla.";
 answers[65] = 0;
 units[65] = ['85'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 7160. ";
 preguntaids[65] = 7160


//  Id pregunta: 10689 Año de creación de pregunta: 2015
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes NO es un requisito m&iacute;nimo de seguridad seg&uacute;n el art&iacute;culo 11 del Esquema Nacional de Seguridad?";
 choices[66]= new Array();
 choices[66][0] = "L&iacute;neas de defensa.";
 choices[66][1] = "Profesionalidad.";
 choices[66][2] = "An&aacute;lisis y Gesti&oacute;n de Riesgos.";
 choices[66][3] = "Seguridad por defecto.";
 answers[66] = 0;
 units[66] = ['46'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 10689. L&iacute;neas de Defensa es un Principio B&aacute;sico de la Seguridad. Profesionalidad es un Requisito m&iacute;nimo introducido por el RD 951/2015 que modifica el ENS.";
 preguntaids[66] = 10689


//  Id pregunta: 10225 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Cu&aacute;l es una plataforma pionera de software abierto que permite el desarrollo de clouds privados de infraestructuras como servicio (IaaS)?";
 choices[67]= new Array();
 choices[67][0] = "VMWARE";
 choices[67][1] = "EUCALYPTUS";
 choices[67][2] = "LYRIUS";
 choices[67][3] = "AMAPOLUS";
 answers[67] = 1;
 units[67] = ['52'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 10225. Adquirida en 2015 por HPE";
 preguntaids[67] = 10225


//  Id pregunta: 8040 Año de creación de pregunta: 2011
 questions[68]= "69)  &iquest;Qu&eacute; tipo de nodo de control se emplea en un diagrama de actividades de UML 2.0 para indicar la sincronizaci&oacute;n de varios flujos concurrentes en uno solo?";
 choices[68]= new Array();
 choices[68][0] = "Divisi&oacute;n (fork node).";
 choices[68][1] = "Bifurcaci&oacute;n (decision node).";
 choices[68][2] = "Fusi&oacute;n (merge node).";
 choices[68][3] = "Union (join node).";
 answers[68] = 3;
 units[68] = ['89'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 8040. Examen TIC A2 2010";
 preguntaids[68] = 8040


//  Id pregunta: 7666 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?";
 choices[69]= new Array();
 choices[69][0] = "WSDL.";
 choices[69][1] = "SOAP.";
 choices[69][2] = "UDDI.";
 choices[69][3] = "XHTML.";
 answers[69] = 2;
 units[69] = ['74'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7666. Similar a Map 2007";
 preguntaids[69] = 7666


//  Id pregunta: 3076 Año de creación de pregunta: 2002
 questions[70]= "71)  Un ordenador con multiprocesamiento sim&eacute;trico (SMP). Dentro de la clasificaci&oacute;n de M.J. Flinn se clasificar&iacute;a como:";
 choices[70]= new Array();
 choices[70][0] = "SISD";
 choices[70][1] = "MIMD";
 choices[70][2] = "MISD";
 choices[70][3] = "SIMD";
 answers[70] = 1;
 units[70] = ['49'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3076. ";
 preguntaids[70] = 3076


//  Id pregunta: 6549 Año de creación de pregunta: 2009
 questions[71]= "72)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "son personal&iacute;simos y ser&aacute;n ejercidos por el afectado";
 choices[71][1] = "son personal&iacute;simos y ser&aacute;n ejercidos por el afectado o un familiar directo";
 choices[71][2] = "son universales y ser&aacute;n ejercidos por cualquier ciudadano";
 choices[71][3] = "no existen como tales derechos";
 answers[71] = 0;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 6549. ";
 preguntaids[71] = 6549


//  Id pregunta: 5120 Año de creación de pregunta: 2003
 questions[72]= "73)  En el modelo OSI de 7 capas, la capa 2 de Enlace de Datos cuenta con protocolos est&aacute;ndares como:";
 choices[72]= new Array();
 choices[72][0] = "HDLC, LAPB y LAPD.";
 choices[72][1] = "SDLC, LAPB e ICMP.";
 choices[72][2] = "LAPB, LAPD y LAPH.";
 choices[72][3] = "HDLC, LAPB e ICMP.";
 answers[72] = 0;
 units[72] = ['105'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5120. Junta Andaluc&iacute;a";
 preguntaids[72] = 5120


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[73]= new Array();
 choices[73][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[73][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[73][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[73][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[73] = 3;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 481. Sociedad de la informaci&oacute;n";
 preguntaids[73] = 481


//  Id pregunta: 7187 Año de creación de pregunta: 2010
 questions[74]= "75)  Indique cu&aacute;l de los siguientes enunciados sobre principios y conceptos fundamentales del Dise&ntilde;o del Software es FALSO:";
 choices[74]= new Array();
 choices[74][0] = "Los principios del dise&ntilde;o s&oacute;lo sirven de gu&iacute;a al ingeniero del software al principio del proceso de dise&ntilde;o. Los conceptos de dise&ntilde;o no proporcionan los criterios b&aacute;sicos para la calidad del dise&ntilde;o.";
 choices[74][1] = "La modularidad (tanto en el programa como en los datos) y el concepto de abstracci&oacute;n permiten que el dise&ntilde;ador simplifique y reutilice los componentes del software.";
 choices[74][2] = "El refinamiento proporciona un mecanismo para representar sucesivas capas de datos funcionales.";
 choices[74][3] = "La ocultaci&oacute;n de informaci&oacute;n y la independencia funcional proporcionan la heur&iacute;stica para conseguir una modularidad efectiva.";
 answers[74] = 0;
 units[74] = ['89'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7187. Castilla La Mancha 2009";
 preguntaids[74] = 7187


