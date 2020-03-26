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
//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[0]= "1)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[0]= new Array();
 choices[0][0] = "Tres a&ntilde;os.";
 choices[0][1] = "Cuatro a&ntilde;os.";
 choices[0][2] = "Cinco a&ntilde;os.";
 choices[0][3] = "Seis a&ntilde;os.";
 answers[0] = 3;
 units[0] = ['5'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 143. Uni&oacute;n Europea";
 preguntaids[0] = 143


//  Id pregunta: 6167 Año de creación de pregunta: 2003
 questions[1]= "2)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Muy grave";
 choices[1][1] = "Grave";
 choices[1][2] = "Leve";
 choices[1][3] = "No est&aacute; tipificado tal importe";
 answers[1] = 1;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 6167. Ley 59/2003, art&iacute;culo 32";
 preguntaids[1] = 6167


//  Id pregunta: 8999 Año de creación de pregunta: 2014
 questions[2]= "3)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[2]= new Array();
 choices[2][0] = "Relacional";
 choices[2][1] = "En red";
 choices[2][2] = "Jer&aacute;rquico";
 choices[2][3] = "Multidimensional";
 answers[2] = 2;
 units[2] = ['60'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8999. ";
 preguntaids[2] = 8999


//  Id pregunta: 10153 Año de creación de pregunta: 2015
 questions[3]= "4)  Los certificados electr&oacute;nicos contenidos en el DNI electr&oacute;nico 3.0 tienen una vigencia de:";
 choices[3]= new Array();
 choices[3][0] = "30 meses.";
 choices[3][1] = "48 meses.";
 choices[3][2] = "60 meses.";
 choices[3][3] = "36 meses.";
 answers[3] = 2;
 units[3] = ['78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10153. Examen TIC A1 2014";
 preguntaids[3] = 10153


//  Id pregunta: 10657 Año de creación de pregunta: 2015
 questions[4]= "5)  Seg&uacute;n la Ley 9/2014, el usuario tiene derecho durante una llamada:";
 choices[4]= new Array();
 choices[4][0] = "A impedir la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea.";
 choices[4][1] = "A impedir la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen.";
 choices[4][2] = "A ambas.";
 choices[4][3] = "A ninguna.";
 answers[4] = 2;
 units[4] = ['121'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10657. ";
 preguntaids[4] = 10657


//  Id pregunta: 9754 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Cu&aacute;l de estos est&aacute;ndares relacionados con Ethernet permite enrutamiento multipath?";
 choices[5]= new Array();
 choices[5][0] = "802.1aq (Shortest Path Bridging)";
 choices[5][1] = "802.D (Spanning Tree Protocol)";
 choices[5][2] = "802.1s, incluido en 802.1Q-2005 (Multiple Spanning Tree Protocol)";
 choices[5][3] = "802.1w (Rapid Spanning Tree Protocol)";
 answers[5] = 0;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9754. Shortest Path Bridging sustituye a los antiguos STP(IEEE 802.1D), RSTP (IEEE 802.1w) y MSTP (IEEE 802.1s) que permit&iacute;an un &uacute;nico camino activo para evitar bucles. SPB permite varios caminos activos lo que posibilita hasta m&aacute;s de 16 millones de VLAN.";
 preguntaids[5] = 9754


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[6]= new Array();
 choices[6][0] = "Nueve.";
 choices[6][1] = "Diez.";
 choices[6][2] = "Siete.";
 choices[6][3] = "Ocho.";
 answers[6] = 3;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 195. Uni&oacute;n Europea";
 preguntaids[6] = 195


//  Id pregunta: 2819 Año de creación de pregunta: 2002
 questions[7]= "8)  En el sistema operativo Unix, las tuberias (pipes) son mecanismos de comunicaci&oacute;n que permiten la transferencia de datos entre dos procesos. &iquest;C&oacute;mo podr&iacute;amos crear una tuber&iacute;a con el nombre TUB?:";
 choices[7]= new Array();
 choices[7][0] = "mknod TUB p";
 choices[7][1] = "En Unix no se puede dar una nombre a una tuber&iacute;a";
 choices[7][2] = "mkp TUB";
 choices[7][3] = "mkpipe TUB";
 answers[7] = 0;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2819. ";
 preguntaids[7] = 2819


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[8]= "9)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[8]= new Array();
 choices[8][0] = "Cuatro millones de euros.";
 choices[8][1] = "Seis millones de euros.";
 choices[8][2] = "Siete millones de euros.";
 choices[8][3] = "Cinco millones de euros.";
 answers[8] = 1;
 units[8] = ['11'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 299. Presupuestos generales";
 preguntaids[8] = 299


//  Id pregunta: 5325 Año de creación de pregunta: 2006
 questions[9]= "10)  El mecanismo usado para garantizar que solo los usuarios autorizados pueden usar o copiar aplicaciones software espec&iacute;ficas se llama";
 choices[9]= new Array();
 choices[9][0] = "informe de an&aacute;lisis de programa autorizado";
 choices[9][1] = "clave";
 choices[9][2] = "acuerdo de nivel de servicio (SLA)";
 choices[9][3] = "dongle";
 answers[9] = 3;
 units[9] = ['41'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 5325. ";
 preguntaids[9] = 5325


//  Id pregunta: 10970 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n la ley 19/2013 de transparencia y en lo relativo al ejercicio del derecho de acceso de la informaci&oacute;n p&uacute;blica, se&ntilde;ale la FALSA:";
 choices[10]= new Array();
 choices[10][0] = "Ser&aacute;n motivadas las resoluciones que denieguen el acceso, las que concedan el acceso parcial o a trav&eacute;s de una modalidad distinta a la solicitada y las que permitan el acceso cuando haya habido oposici&oacute;n de un tercero.";
 choices[10][1] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[10][2] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica no agotan la v&iacute;a administrativa y a&uacute;n son recurribles en alzada ante el Secretario de Estado de Funci&oacute;n P&uacute;blica.";
 choices[10][3] = "El plazo para resolver una solicitud de acceso ser&aacute; de un mes ampliable otro mes si as&iacute; fuera necesario.";
 answers[10] = 2;
 units[10] = ['22'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 10970. ";
 preguntaids[10] = 10970


//  Id pregunta: 10366 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un modelo cl&aacute;sico de recuperaci&oacute;n de informaci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "Probabil&iacute;stico";
 choices[11][1] = "Estructurado";
 choices[11][2] = "Vectorial";
 choices[11][3] = "Booleano";
 answers[11] = 1;
 units[11] = ['100'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 10366. ";
 preguntaids[11] = 10366


//  Id pregunta: 6532 Año de creación de pregunta: 2003
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es err&oacute;nea:";
 choices[12]= new Array();
 choices[12][0] = "Un microcomputador dispone de una CPU basada en un &uacute;nico microprocesador (chip)";
 choices[12][1] = "Un computador &oacute;ptico se basa en las propiedades de la luz para el tratamiento de la informaci&oacute;n";
 choices[12][2] = "Un computador empotrado es un computador de prop&oacute;sito especial, dise&ntilde;ado para llevar a cabo una funci&oacute;n dedicada concreta";
 choices[12][3] = "Un nanocomputador se basa en tecnolog&iacute;a de silicio/semiconductores";
 answers[12] = 3;
 units[12] = ['54'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 6532. ";
 preguntaids[12] = 6532


//  Id pregunta: 1492 Año de creación de pregunta: 2016
 questions[13]= "14)  Una de las siguientes respuestas es FALSA en relaci&oacute;n a un Data Warehouse:";
 choices[13]= new Array();
 choices[13][0] = "No se borran datos.";
 choices[13][1] = "Hay campos que almacenan informaci&oacute;n calculada a partir de los datos iniciales, para facilitar c&aacute;lculos posteriores.";
 choices[13][2] = "Permiten analizar informaci&oacute;n en funci&oacute;n de distintos criterios.";
 choices[13][3] = "Una vez agregados los datos para proporcionar la informaci&oacute;n solicitada se eliminan los datos originales.";
 answers[13] = 3;
 units[13] = ['72'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1492. ";
 preguntaids[13] = 1492


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[14]= "15)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[14]= new Array();
 choices[14][0] = "Son vinculantes solamente.";
 choices[14][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[14][2] = "Son preceptivos y vinculantes.";
 choices[14][3] = "Son preceptivos y no vinculantes.";
 answers[14] = 1;
 units[14] = ['5'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 175. Uni&oacute;n Europea";
 preguntaids[14] = 175


//  Id pregunta: 2422 Año de creación de pregunta: 2006
 questions[15]= "16)  En el proceso de selecci&oacute;n de alternativas en bienes y servicios de Tecnolog&iacute;as de la Informaci&oacute;n, &iquest;cu&aacute;l de los siguientes m&eacute;todos es el m&aacute;s recomendable a efectos de que no se vean favorecidas en exceso las alternativas que son median&iacute;as?";
 choices[15]= new Array();
 choices[15][0] = "El m&eacute;todo de la Ponderaci&oacute;n Lineal.";
 choices[15][1] = "Los m&eacute;todos de Relaciones de Superaci&oacute;n.";
 choices[15][2] = "El m&eacute;todo Lexicogr&aacute;fico.";
 choices[15][3] = "El m&eacute;todo de las Utilidades Relativas.";
 answers[15] = 1;
 units[15] = ['38'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 2422. ";
 preguntaids[15] = 2422


//  Id pregunta: 9960 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Qui&eacute;n dirige a los tres componentes de la Estructura de Ciberseguridad Nacional (el Consejo de Seguridad Nacional; el Comit&eacute; Especializado de Ciberseguridad; el Comit&eacute; Especializado de Situaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "El Presidente del Gobierno.";
 choices[16][1] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[16][2] = "El Ministro de Defensa.";
 choices[16][3] = "El CIO de la AGE.";
 answers[16] = 0;
 units[16] = ['46'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 9960. ";
 preguntaids[16] = 9960


//  Id pregunta: 9968 Año de creación de pregunta: 2015
 questions[17]= "18)  Seg&uacute;n las definiciones establecidas en las gu&iacute;as CCN-STIC &iquest;Qu&eacute; es la &quot;Manifestaci&oacute;n escrita de los &oacute;rganos o entidades de derecho p&uacute;blico, firmada por su responsable, mediante la que se da publicidad que los sistemas a que se refieren cumplen con las exigencias del Esquema Nacional de Seguridad aprobado por Real Decreto 3/2010, de 8 de enero&quot;?";
 choices[17]= new Array();
 choices[17][0] = "Informe de auditor&iacute;a";
 choices[17][1] = "Declaraci&oacute;n de conformidad";
 choices[17][2] = "Aceptaci&oacute;n del esquema de seguridad";
 choices[17][3] = "Formalizaci&oacute;n de la conformidad";
 answers[17] = 1;
 units[17] = ['46'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9968. ";
 preguntaids[17] = 9968


//  Id pregunta: 9889 Año de creación de pregunta: 2015
 questions[18]= "19)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[18]= new Array();
 choices[18][0] = "T&iacute;tulo I";
 choices[18][1] = "T&iacute;tulo II";
 choices[18][2] = "T&iacute;tulo III";
 choices[18][3] = "T&iacute;tulo IV";
 answers[18] = 1;
 units[18] = ['7', '19'];
 blocks[18] = ['A2', 'A4'];
 comments[18] = "Id Pregunta: 9889. ";
 preguntaids[18] = 9889


//  Id pregunta: 8143 Año de creación de pregunta: 2011
 questions[19]= "20)  La Web sem&aacute;ntica pretende dotar a la Web de mayor significado, gracias a una informaci&oacute;n mejor definida. Para ello se utilizan tecnolog&iacute;as como:";
 choices[19]= new Array();
 choices[19][0] = "RTF.";
 choices[19][1] = "RML.";
 choices[19][2] = "OWL.";
 choices[19][3] = "Jabsys.";
 answers[19] = 2;
 units[19] = ['125'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8143. Examen TIC A2 2010 interna";
 preguntaids[19] = 8143


//  Id pregunta: 4487 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de la seguridad en el correo electr&oacute;nico?:";
 choices[20]= new Array();
 choices[20][0] = "Los usuarios MOSS y PEM necesitan certificados X.509";
 choices[20][1] = "PEM requiere que primero se firme el contenido del correo electr&oacute;nico y, a continuaci&oacute;n, se encripte";
 choices[20][2] = "PEM restringe su uso al entorno texto";
 choices[20][3] = "La extension de PEM con MIME se denomina MOSS";
 answers[20] = 0;
 units[20] = ['116'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4487. ";
 preguntaids[20] = 4487


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[21]= "22)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[21]= new Array();
 choices[21][0] = "La Administraci&oacute;n General del Estado";
 choices[21][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[21][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[21][3] = "Todas las Administraciones P&uacute;blicas";
 answers[21] = 1;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[21] = 6948


//  Id pregunta: 1386 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[22]= new Array();
 choices[22][0] = "224.0.0.4";
 choices[22][1] = "224.0.0.5";
 choices[22][2] = "224.0.0.9";
 choices[22][3] = "224.0.0.22";
 answers[22] = 2;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1386. ";
 preguntaids[22] = 1386


//  Id pregunta: 10397 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[23]= new Array();
 choices[23][0] = "Confianza Digital";
 choices[23][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[23][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[23][3] = "Interoperabilidad y normas";
 answers[23] = 3;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 10397. ";
 preguntaids[23] = 10397


//  Id pregunta: 6115 Año de creación de pregunta: 2003
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[24]= new Array();
 choices[24][0] = "RD 153/2005, de 14 de enero";
 choices[24][1] = "RD 1553/2005, de 23 de diciembre";
 choices[24][2] = "RD 1555/2003, de 29 de mayo";
 choices[24][3] = "RD 155/2003, de 15 de septiembre";
 answers[24] = 1;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 6115. Examen TIC A1 MAP 2007";
 preguntaids[24] = 6115


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;alar la respuesta FALSA sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[25]= new Array();
 choices[25][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[25][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[25][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[25][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de la Ley 19/2013. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[25] = 2;
 units[25] = ['22'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 517. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[25] = 517


//  Id pregunta: 2132 Año de creación de pregunta: 2004
 questions[26]= "27)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[26]= new Array();
 choices[26][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[26][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[26][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[26][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[26] = 2;
 units[26] = ['36', '45'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2132. Similar a examen TIC SS A 2003";
 preguntaids[26] = 2132


//  Id pregunta: 4131 Año de creación de pregunta: 2003
 questions[27]= "28)  Los sistemas de recuperaci&oacute;n de informaci&oacute;n llamados de &quot;Lenguaje natural&quot; se basan en la t&eacute;cnica:";
 choices[27]= new Array();
 choices[27][0] = "Hojeo-ojeo.";
 choices[27][1] = "Booleana.";
 choices[27][2] = "Retroalimentaci&oacute;n.";
 choices[27][3] = "De &iacute;ndices invertidos.";
 answers[27] = 3;
 units[27] = ['81'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 4131. ";
 preguntaids[27] = 4131


//  Id pregunta: 8236 Año de creación de pregunta: 2011
 questions[28]= "29)  Con respecto a los est&aacute;ndares de redes inal&aacute;mbricas &iquest;cu&aacute;l de las siguientes combinaciones es correcta?";
 choices[28]= new Array();
 choices[28][0] = "802.11a-2.4Ghz";
 choices[28][1] = "802.11b -2.4Ghz";
 choices[28][2] = "802.11g-5Ghz";
 choices[28][3] = "802.11x-2.4Ghz";
 answers[28] = 1;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8236. Examen UPM A2 2011";
 preguntaids[28] = 8236


//  Id pregunta: 3471 Año de creación de pregunta: 2006
 questions[29]= "30)  De acuerdo con la normativa relativa sobre firma electr&oacute;nica, se&ntilde;ale la falsa:";
 choices[29]= new Array();
 choices[29][0] = "La prestaci&oacute;n de servicios de certificaci&oacute;n no est&aacute; sujeta a autorizaci&oacute;n previa y se realizar&aacute; en r&eacute;gimen de libre competencia";
 choices[29][1] = "El firmante es una persona que posee el dispositivo de creaci&oacute;n de firma y que act&uacute;a en nombre propio o de una persona f&iacute;sica o jur&iacute;dica a la que representa.";
 choices[29][2] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 4 a&ntilde;os";
 choices[29][3] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 5 a&ntilde;os";
 answers[29] = 2;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 3471. ";
 preguntaids[29] = 3471


//  Id pregunta: 3960 Año de creación de pregunta: 2002
 questions[30]= "31)  Se&ntilde;alar la definici&oacute;n falsa sobre las m&eacute;tricas de calidad del software:";
 choices[30]= new Array();
 choices[30][0] = "Las m&eacute;tricas de productividad se centran fundamentalmente en el coste del proceso de la ingenier&iacute;a del software";
 choices[30][1] = "Las m&eacute;tricas de fiabilidad tratan de evaluar si el software producido se ajusta a los requerimientos del usuario";
 choices[30][2] = "Las m&eacute;tricas de los factores de calidad basan su evaluaci&oacute;n en la medida de una relaci&oacute;n de factores denominados de calidad del software";
 choices[30][3] = "La m&eacute;tricas de complejidad se orientan esencialmente a evaluar la facilidad de mantenimiento del software";
 answers[30] = 0;
 units[30] = ['93'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3960. ";
 preguntaids[30] = 3960


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[31]= new Array();
 choices[31][0] = "JAXP";
 choices[31][1] = "JNI";
 choices[31][2] = "JNDI";
 choices[31][3] = "JDBC";
 answers[31] = 1;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 714. AGE A1 2015";
 preguntaids[31] = 714


//  Id pregunta: 2373 Año de creación de pregunta: 2004
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes no es una tarea t&iacute;pica de la auditor&iacute;a inform&aacute;tica?";
 choices[32]= new Array();
 choices[32][0] = "Reorganizaci&oacute;n de los recursos humanos del Departamento de Sistemas de Informaci&oacute;n";
 choices[32][1] = "Revisi&oacute;n de aplicaciones";
 choices[32][2] = "Revisi&oacute;n de instalaciones inform&aacute;ticas";
 choices[32][3] = "Revisi&oacute;n de sistemas bajo desarrollo";
 answers[32] = 0;
 units[32] = ['36'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2373. MAP-B 2004";
 preguntaids[32] = 2373


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[33]= "34)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[33]= new Array();
 choices[33][0] = "Establecer tributos.";
 choices[33][1] = "Desarrollar lo establecido en una Ley.";
 choices[33][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[33][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[33] = 0;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 24. Constituci&oacute;n de 1978";
 preguntaids[33] = 24


//  Id pregunta: 9547 Año de creación de pregunta: 2014
 questions[34]= "35)  Se debe notificar al Registro General de Protecci&oacute;n de Datos";
 choices[34]= new Array();
 choices[34][0] = "Los ficheros de nueva creaci&oacute;n";
 choices[34][1] = "Las modificaciones posteriores en la informaci&oacute;n comunicada en el registro de un fichero";
 choices[34][2] = "La supresi&oacute;n de ficheros previamente registrados";
 choices[34][3] = "Todos ellos";
 answers[34] = 3;
 units[34] = ['35'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 9547. Art&iacute;culos 55.1, 55.2, 58.1 y 58.2 del RD 1720/2007";
 preguntaids[34] = 9547


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[35]= "36)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[35]= new Array();
 choices[35][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[35][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[35][2] = "Al Congreso de los Diputados.";
 choices[35][3] = "Al Gobierno.";
 answers[35] = 3;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 64. Constituci&oacute;n de 1978";
 preguntaids[35] = 64


//  Id pregunta: 8532 Año de creación de pregunta: 2011
 questions[36]= "37)  &iquest;Cual de las siguientes NO es una herramienta de revisi&oacute;n de la accesibilidad?";
 choices[36]= new Array();
 choices[36][0] = "ACCWarning";
 choices[36][1] = "TAW";
 choices[36][2] = "Tenon";
 choices[36][3] = "Wave";
 answers[36] = 0;
 units[36] = ['42'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 8532. ";
 preguntaids[36] = 8532


//  Id pregunta: 7926 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;ade en SNMPv2 con respecto a las de SNMPv1?:";
 choices[37]= new Array();
 choices[37][0] = "Trap.";
 choices[37][1] = "GetResponse.";
 choices[37][2] = "GetBulkRequest.";
 choices[37][3] = "GetNextRequest.";
 answers[37] = 2;
 units[37] = ['112'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7926. Examen TIC A1 2010";
 preguntaids[37] = 7926


//  Id pregunta: 1197 Año de creación de pregunta: 2016
 questions[38]= "39)  De las siguientes tareas a efectuar sobre un servidor de aplicaciones, &iquest;cu&aacute;l se puede encuadrar dentro del mantenimiento preventivo?";
 choices[38]= new Array();
 choices[38][0] = "Limpieza peri&oacute;dica del polvo en la fuente de alimentaci&oacute;n.";
 choices[38][1] = "Sustituci&oacute;n de un disco duro defectuoso.";
 choices[38][2] = "Ampliaci&oacute;n de la RAM del equipo.";
 choices[38][3] = "Actualizaci&oacute;n de la versi&oacute;n del software servidor de aplicaciones.";
 answers[38] = 0;
 units[38] = ['50'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1197. ";
 preguntaids[38] = 1197


//  Id pregunta: 1286 Año de creación de pregunta: 2016
 questions[39]= "40)  Un ciudadano tiene que iniciar varios procedimientos desde la misma sede electr&oacute;nica, &iquest;en qu&eacute; momento seg&uacute;n el Real Decreto 1671/2009 tiene que otorgar consentimiento para que se puedan recabar los datos o documentos que ya obran en poder de las AAPP?";
 choices[39]= new Array();
 choices[39][0] = "De forma espec&iacute;fica e individualizada para cada procedimiento.";
 choices[39][1] = "Una &uacute;nica vez al configurar su cuenta.";
 choices[39][2] = "Una vez para todos los documentos o datos que est&eacute;n en cada administraci&oacute;n.";
 choices[39][3] = "No es posible otorgar ese consentimiento y tiene que presentar el mismo todos los documentos.";
 answers[39] = 0;
 units[39] = ['7'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 1286. ";
 preguntaids[39] = 1286


//  Id pregunta: 8746 Año de creación de pregunta: 2013
 questions[40]= "41)  El riesgo se puede:";
 choices[40]= new Array();
 choices[40][0] = "Eliminar, reducir, asumir o transferir.";
 choices[40][1] = "Eliminar, reducir pero no asegurar.";
 choices[40][2] = "Reducir, asumir, transferir pero nunca se puede eliminar del todo.";
 choices[40][3] = "Eliminar, reducir, asumir, transferir o asegurar.";
 answers[40] = 3;
 units[40] = ['45'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 8746. ";
 preguntaids[40] = 8746


//  Id pregunta: 10247 Año de creación de pregunta: 2015
 questions[41]= "42)  &iquest;Qu&eacute; algoritmo genera un Hash de mayor longitud?";
 choices[41]= new Array();
 choices[41][0] = "MD5";
 choices[41][1] = "SHA-1";
 choices[41][2] = "SHA-384";
 choices[41][3] = "WHIRLPOOL";
 answers[41] = 3;
 units[41] = ['76'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 10247. WHIRLPOOL produce un Hash de 512 bits";
 preguntaids[41] = 10247


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[42]= new Array();
 choices[42][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[42][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[42][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[42][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[42] = 1;
 units[42] = ['11'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 263. Direcci&oacute;n p&uacute;blica";
 preguntaids[42] = 263


//  Id pregunta: 1415 Año de creación de pregunta: 2016
 questions[43]= "44)  El d&iacute;a 29 de diciembre del a&ntilde;o 1978, la Constituci&oacute;n Espa&ntilde;ola fue:";
 choices[43]= new Array();
 choices[43][0] = "Sancionada y promulgada por el Rey.";
 choices[43][1] = "Aprobada por los Plenos del Congreso y el Senado.";
 choices[43][2] = "Ratificada mediante refer&eacute;ndum por el pueblo espa&ntilde;ol.";
 choices[43][3] = "Ninguna es correcta.";
 answers[43] = 3;
 units[43] = ['1'];
 blocks[43] = ['A1'];
 comments[43] = "Id Pregunta: 1415. ";
 preguntaids[43] = 1415


//  Id pregunta: 8070 Año de creación de pregunta: 2011
 questions[44]= "45)  Seg&uacute;n la nueva estrategia para el crecimiento y el empleo Europa 2020, &iquest;Cu&aacute;les de las siguientes prioridades no se encuentra entre las 3 fundamentales definidas en la misma?";
 choices[44]= new Array();
 choices[44][0] = "Crecimiento tecnol&oacute;gico";
 choices[44][1] = "Crecimiento inteligente";
 choices[44][2] = "Crecimiento sostenible";
 choices[44][3] = "Crecimiento integrador";
 answers[44] = 0;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 8070. ";
 preguntaids[44] = 8070


//  Id pregunta: 3777 Año de creación de pregunta: 2002
 questions[45]= "46)  El Diccionario de Datos es utilizado por:";
 choices[45]= new Array();
 choices[45][0] = "El administrador de la base de datos y los programadores";
 choices[45][1] = "Los analistas y los programadores";
 choices[45][2] = "Los usuarios finales de las aplicaciones";
 choices[45][3] = "Los usuarios remotos";
 answers[45] = 0;
 units[45] = ['60', '85', '86'];
 blocks[45] = ['B2', 'B3'];
 comments[45] = "Id Pregunta: 3777. ";
 preguntaids[45] = 3777


//  Id pregunta: 9934 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Qu&eacute; versi&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) se considera como utilizaci&oacute;n de forma general en la NTI de Protocolos de Intermediaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "1";
 choices[46][1] = "2";
 choices[46][2] = "3";
 choices[46][3] = "4";
 answers[46] = 2;
 units[46] = ['44'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 9934. ";
 preguntaids[46] = 9934


//  Id pregunta: 4021 Año de creación de pregunta: 2002
 questions[47]= "48)  El programa IDABC:";
 choices[47]= new Array();
 choices[47][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[47][1] = "Contiene tres directivas";
 choices[47][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[47][3] = "Fue creado antes que el ENS";
 answers[47] = 0;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 4021. ";
 preguntaids[47] = 4021


//  Id pregunta: 4453 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;A qu&eacute; nivel ISO-OSI operan los bridges (puentes)?:";
 choices[48]= new Array();
 choices[48][0] = "A nivel f&iacute;sico";
 choices[48][1] = "A nivel de red";
 choices[48][2] = "A nivel de enlace";
 choices[48][3] = "A nivel de transporte";
 answers[48] = 2;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4453. ";
 preguntaids[48] = 4453


//  Id pregunta: 6609 Año de creación de pregunta: 2009
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[49]= new Array();
 choices[49][0] = "Definici&oacute;n del tipo de contenido";
 choices[49][1] = "Resumen del mensaje";
 choices[49][2] = "Sello de tiempo";
 choices[49][3] = "Atributos identificativos del certificado del firmante";
 answers[49] = 2;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6609. ";
 preguntaids[49] = 6609


//  Id pregunta: 6461 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as permiten la transmisi&oacute;n de datos sobre una infraestructura de fibra &oacute;ptica para una red de &aacute;rea metropolitana?";
 choices[50]= new Array();
 choices[50][0] = "DQDB";
 choices[50][1] = "CDDI";
 choices[50][2] = "HIPPI";
 choices[50][3] = "PDDI";
 answers[50] = 0;
 units[50] = ['112'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 6461. ";
 preguntaids[50] = 6461


//  Id pregunta: 5152 Año de creación de pregunta: 2003
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes sistemas de cableado es conocido como &quot;cheapernet&quot;?";
 choices[51]= new Array();
 choices[51][0] = "El cable coaxial utilizado en el est&aacute;ndar 10Base5";
 choices[51][1] = "El cable coaxial utilizado en el est&aacute;ndar 10Base2";
 choices[51][2] = "El cable UTP de categor&iacute;a 3";
 choices[51][3] = "El cable STP de 150Ohm";
 answers[51] = 1;
 units[51] = ['104'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5152. ";
 preguntaids[51] = 5152


//  Id pregunta: 9232 Año de creación de pregunta: 2014
 questions[52]= "53)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[52]= new Array();
 choices[52][0] = "modelo de valor.";
 choices[52][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[52][2] = "mapa de riesgos.";
 choices[52][3] = "estado de riesgo.";
 answers[52] = 0;
 units[52] = ['45'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 9232. Examen TIC A1 2013";
 preguntaids[52] = 9232


//  Id pregunta: 7785 Año de creación de pregunta: 2010
 questions[53]= "54)  En java, el atributo &laquo;final&raquo; en la declaraci&oacute;n de una variable de una clase significa que:";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo las clases de su paquete pueden acceder a ella.";
 choices[53][1] = "S&oacute;lo puede ser escrita una vez y no puede ser reescrita por clases hijas.";
 choices[53][2] = "S&oacute;lo se puede acceder a trav&eacute;s de m&eacute;todos get y set.";
 choices[53][3] = "Que forma parte del interface que implementa la clase.";
 answers[53] = 1;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7785. ";
 preguntaids[53] = 7785


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[54]= "55)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[54]= new Array();
 choices[54][0] = "la Administraci&oacute;n General del Estado";
 choices[54][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[54][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[54][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[54] = 3;
 units[54] = ['7'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 217. Ley 39/2015";
 preguntaids[54] = 217


//  Id pregunta: 9871 Año de creación de pregunta: 2015
 questions[55]= "56)  El teorema de Nyquist establece que:";
 choices[55]= new Array();
 choices[55][0] = "El n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal no puede ser superior al doble de su ancho de banda.";
 choices[55][1] = "La relaci&oacute;n se&ntilde;al a ruido presente en el medio de transmisi&oacute;n no puede ser superior al doble de su ancho de banda.";
 choices[55][2] = "La eficiencia espectral es la relaci&oacute;n entre la velocidad de transmisi&oacute;n y el n&uacute;mero m&aacute;ximo de baudios que pueden transmitirse.";
 choices[55][3] = "Ninguna de las anteriores.";
 answers[55] = 0;
 units[55] = ['104', '106'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9871. ";
 preguntaids[55] = 9871


//  Id pregunta: 6387 Año de creación de pregunta: 2003
 questions[56]= "57)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos y atributos del directorio activo se encuentra en el";
 choices[56]= new Array();
 choices[56][0] = "Schema Naming Context";
 choices[56][1] = "Active Directory Schema MMC";
 choices[56][2] = "Configuration Naming Context";
 choices[56][3] = "Domain Naming Context";
 answers[56] = 0;
 units[56] = ['78'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6387. Examen 2006 JCYL";
 preguntaids[56] = 6387


//  Id pregunta: 3511 Año de creación de pregunta: 2006
 questions[57]= "58)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[57]= new Array();
 choices[57][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[57][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[57][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[57][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[57] = 1;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 3511. Ley 59/2003, art&iacute;culo 11";
 preguntaids[57] = 3511


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[58]= "59)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[58]= new Array();
 choices[58][0] = "Prevenir las conductas discriminatorias.";
 choices[58][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[58][2] = "Todas son correctas.";
 choices[58][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[58] = 2;
 units[58] = ['14'];
 blocks[58] = ['A3'];
 comments[58] = "Id Pregunta: 389. Pol&iacute;ticas de igualdad";
 preguntaids[58] = 389


//  Id pregunta: 7482 Año de creación de pregunta: 2010
 questions[59]= "60)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[59]= new Array();
 choices[59][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[59][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[59][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[59][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[59] = 2;
 units[59] = ['77'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7482. Map 2005";
 preguntaids[59] = 7482


//  Id pregunta: 4109 Año de creación de pregunta: 2003
 questions[60]= "61)  En los a&ntilde;os cuarenta se descubri&oacute; un instrumento que ayud&oacute; notablemente al an&aacute;lisis de la voz:";
 choices[60]= new Array();
 choices[60][0] = "El espectr&oacute;grafo.";
 choices[60][1] = "El VODER.";
 choices[60][2] = "La m&aacute;quina de Wolfgang Von Kempelen.";
 choices[60][3] = "La m&aacute;quina de Krat-zenstein.";
 answers[60] = 0;
 units[60] = ['81'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 4109. ";
 preguntaids[60] = 4109


//  Id pregunta: 10728 Año de creación de pregunta: 2015
 questions[61]= "62)  Al redistribuir una obra derivada de un programa con licencia GPL, &iquest;cu&aacute;l de los siguientes elementos no es necesario incluir?:";
 choices[61]= new Array();
 choices[61][0] = "La licencia.";
 choices[61][1] = "La lista de modificaciones.";
 choices[61][2] = "El autor de las modificaciones.";
 choices[61][3] = "Es obligatorio incluir todos los anteriores.";
 answers[61] = 3;
 units[61] = ['66'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 10728. ";
 preguntaids[61] = 10728


//  Id pregunta: 3521 Año de creación de pregunta: 2006
 questions[62]= "63)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[62]= new Array();
 choices[62][0] = "Error y Exception";
 choices[62][1] = "Error y Catch";
 choices[62][2] = "Throw y Finally";
 choices[62][3] = "Error y Throw";
 answers[62] = 0;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3521. ";
 preguntaids[62] = 3521


//  Id pregunta: 6082 Año de creación de pregunta: 2003
 questions[63]= "64)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en lanorma del ETSI:";
 choices[63]= new Array();
 choices[63][0] = "ET 301-192";
 choices[63][1] = "ET 202-125";
 choices[63][2] = "ET 125-100";
 choices[63][3] = "ET 100-200";
 answers[63] = 0;
 units[63] = ['107', '108'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 6082. Examen TIC A1 MAP 2007";
 preguntaids[63] = 6082


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[64]= new Array();
 choices[64][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[64][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[64][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[64][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[64] = 2;
 units[64] = ['7'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 208. Ley 39/2015";
 preguntaids[64] = 208


//  Id pregunta: 1070 Año de creación de pregunta: 2016
 questions[65]= "66)  En el entorno de la firma electr&oacute;nica y la identidad electr&oacute;nica, STORK identifica:";
 choices[65]= new Array();
 choices[65][0] = "Un proyecto financiado por la Comisi&oacute;n Europea para establecer la interoperabilidad de las identidades electr&oacute;nicas de los Estados Miembros.";
 choices[65][1] = "A la PKI desplegada por la Comisi&oacute;n Europea para la futura carta de identidad electr&oacute;nica europea.";
 choices[65][2] = "La implementaci&oacute;n opensource realizada por la Comisi&oacute;n Europea de un cliente de firma electr&oacute;nica.";
 choices[65][3] = "El consorcio de fabricantes e industria Europea relacionado con la firma electr&oacute;nica e identidad electr&oacute;nica.";
 answers[65] = 0;
 units[65] = ['77'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1070. ";
 preguntaids[65] = 1070


//  Id pregunta: 10413 Año de creación de pregunta: 2015
 questions[66]= "67)  Indique de los siguientes cual no es un entorno de desarrollo Java.";
 choices[66]= new Array();
 choices[66][0] = "Eclipse.";
 choices[66][1] = "Zend Studio.";
 choices[66][2] = "BlueJ.";
 choices[66][3] = "NetBeans.";
 answers[66] = 1;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 10413. ";
 preguntaids[66] = 10413


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[67]= new Array();
 choices[67][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[67][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[67][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[67][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[67] = 2;
 units[67] = ['22'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 493. AGE A1 2015";
 preguntaids[67] = 493


//  Id pregunta: 1398 Año de creación de pregunta: 2016
 questions[68]= "69)  MPLS (Multi protocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[68]= new Array();
 choices[68][0] = "FEC (Forwarding Equivalent Class).";
 choices[68][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[68][2] = "CIR (Commited Information Rate).";
 choices[68][3] = "MBS (Maximum Burst Size).";
 answers[68] = 0;
 units[68] = ['107'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1398. ";
 preguntaids[68] = 1398


//  Id pregunta: 10641 Año de creación de pregunta: 2015
 questions[69]= "70)  Seg&uacute;n la Ley 9/2014, el Gobierno regular&aacute; las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico, que ser&aacute;n (1) no discriminatorias, (2) proporcionadas, (3) neutrales y (4) transparentes.";
 choices[69]= new Array();
 choices[69][0] = "Son ciertas 1, 2 y 3";
 choices[69][1] = "Son ciertas 1, 2, y 4";
 choices[69][2] = "Son ciertas 1, 3, y 4";
 choices[69][3] = "Son todas ciertas";
 answers[69] = 1;
 units[69] = ['121'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 10641. Articulo 61";
 preguntaids[69] = 10641


//  Id pregunta: 7213 Año de creación de pregunta: 2010
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes es un proyecto de estandarizaci&oacute;n de UNIX?";
 choices[70]= new Array();
 choices[70][0] = "GNU";
 choices[70][1] = "GPL";
 choices[70][2] = "POSIX";
 choices[70][3] = "Emacs";
 answers[70] = 2;
 units[70] = ['57'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7213. ";
 preguntaids[70] = 7213


//  Id pregunta: 5465 Año de creación de pregunta: 2007
 questions[71]= "72)  Si est&aacute; utilizando la t&eacute;cnica de despliegue de la funci&oacute;n calidad (DFC) para traducir las necesidades del cliente en requisitos, el an&aacute;lisis de valor:";
 choices[71]= new Array();
 choices[71][0] = "Se emplea para determinar el valor de cada funci&oacute;n requerida por el sistema.";
 choices[71][1] = "Se lleva a cabo para determinar la prioridad relativa de requisitos";
 choices[71][2] = "Sirve para identificar los acontecimientos que el sistema debe producir y consumir.";
 choices[71][3] = "Examina el comportamiento del sistema dentro del contexto de su entorno.";
 answers[71] = 1;
 units[71] = ['84'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 5465. ";
 preguntaids[71] = 5465


//  Id pregunta: 1984 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura de servicios Web NO es correcta?";
 choices[72]= new Array();
 choices[72][0] = "Es un software que soporta interacciones m&aacute;quina a m&aacute;quina de forma interoperable.";
 choices[72][1] = "Tiene una interfaz descrita en un determinado formato SOAP, con la que se interact&uacute;a mediante el intercambio de mensajes.";
 choices[72][2] = "Posee un servicio de registro donde se publican los formatos de los servicios web a consultar.";
 choices[72][3] = "EI organismo W3C no especifica c&oacute;mo se implementan los servicios web, sino que define modelos conceptuales y principales aspectos a considerar en la utilizaci&oacute;n de servicios web.";
 answers[72] = 1;
 units[72] = ['55'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 1984. ";
 preguntaids[72] = 1984


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[73]= "74)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[73]= new Array();
 choices[73][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[73][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[73][2] = "La protecci&oacute;n del medio ambiente.";
 choices[73][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[73] = 0;
 units[73] = ['22'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 498. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[73] = 498


//  Id pregunta: 8483 Año de creación de pregunta: 2011
 questions[74]= "75)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[74]= new Array();
 choices[74][0] = "El grado de intencionalidad.";
 choices[74][1] = "El volumen de negocio o actividad del infractor.";
 choices[74][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[74][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[74] = 3;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 8483. Examen UPM A2 2011";
 preguntaids[74] = 8483


