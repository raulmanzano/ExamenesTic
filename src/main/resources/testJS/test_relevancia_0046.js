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
//  Id pregunta: 4327 Año de creación de pregunta: 2004
 questions[0]= "1)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderso con su router por defecto:";
 choices[0]= new Array();
 choices[0][0] = "10.2.40.64";
 choices[0][1] = "10.2.41.45";
 choices[0][2] = "10.2.40.63";
 choices[0][3] = "10.2.40.1";
 answers[0] = 3;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4327. Examen TIC MAP B 2004";
 preguntaids[0] = 4327


//  Id pregunta: 965 Año de creación de pregunta: 2016
 questions[1]= "2)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "la Administraci&oacute;n General del Estado";
 choices[1][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[1][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[1][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[1] = 3;
 units[1] = ['4', '7', '8', '9'];
 blocks[1] = ['A1', 'A2'];
 comments[1] = "Id Pregunta: 965. Ley 40/2015";
 preguntaids[1] = 965


//  Id pregunta: 6398 Año de creación de pregunta: 2003
 questions[2]= "3)  El modelo de desarrollo conocido como el bazar";
 choices[2]= new Array();
 choices[2][0] = "Fue promulgado por Linus Torvald";
 choices[2][1] = "No se aplica a desarrollos comerciales";
 choices[2][2] = "Se basa en la metodolog&iacute;a Extreme Programming";
 choices[2][3] = "Todas las respuestas anteriores son incorrectas";
 answers[2] = 3;
 units[2] = ['66'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6398. Examen 2006 JCYL";
 preguntaids[2] = 6398


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[3]= "4)  La iniciativa legislativa corresponde:";
 choices[3]= new Array();
 choices[3][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[3][1] = "Al rey y al Gobierno.";
 choices[3][2] = "Al Congreso, al Senado y al Rey.";
 choices[3][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[3] = 3;
 units[3] = ['1'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 86. Constituci&oacute;n de 1978";
 preguntaids[3] = 86


//  Id pregunta: 10382 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes es un protocolo de autenticaci&oacute;n PPP (Point to Point)?";
 choices[4]= new Array();
 choices[4][0] = "RADIUS &ndash; Remote Authentication Dial In User Service";
 choices[4][1] = "Kerberos";
 choices[4][2] = "CHAP Challenge Handshake Authentication Protocol";
 choices[4][3] = "Todos los anteriores";
 answers[4] = 2;
 units[4] = ['119'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10382. ";
 preguntaids[4] = 10382


//  Id pregunta: 3817 Año de creación de pregunta: 2002
 questions[5]= "6)  En la t&eacute;cnica de estimaci&oacute;n COCOMO cl&aacute;sico, el modelo Intermedio:";
 choices[5]= new Array();
 choices[5][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[5][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[5][2] = "Considera que el impacto de los factores de influencia depende de la fase de desarrollo";
 choices[5][3] = "Nada de lo anterior es correcto";
 answers[5] = 1;
 units[5] = ['94'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3817. ";
 preguntaids[5] = 3817


//  Id pregunta: 1335 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[6]= new Array();
 choices[6][0] = "ISO/IEC 26300:2006";
 choices[6][1] = "RFC 2373";
 choices[6][2] = "ISO/IEC 9899:1999";
 choices[6][3] = "ISO 9000";
 answers[6] = 0;
 units[6] = ['66'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1335. ";
 preguntaids[6] = 1335


//  Id pregunta: 4956 Año de creación de pregunta: 2002
 questions[7]= "8)  La velocidad de transmisi&oacute;n que se puede alcanzar con tecnolog&iacute;a Bluetooth versi&oacute;n 5 es de:";
 choices[7]= new Array();
 choices[7][0] = "25 Mbit/s";
 choices[7][1] = "50 Mbit/s";
 choices[7][2] = "12 Mbit/s";
 choices[7][3] = "6 Mbit/s";
 answers[7] = 1;
 units[7] = ['108'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4956. ";
 preguntaids[7] = 4956


//  Id pregunta: 8057 Año de creación de pregunta: 2011
 questions[8]= "9)  Se dice que un SGBD cumple el ACID test si observa las propiedades de:";
 choices[8]= new Array();
 choices[8][0] = "(A)tomicidad, (C)onsistencia, (I)ntegridad y (D)urabilidad";
 choices[8][1] = "(A)tomicidad, (C)onfidencialidad, (I)ntegridad y (D)urabilidad";
 choices[8][2] = "(A)tomicidad, (C)onfidencialidad, a(I)slamiento y (D)urabilidad";
 choices[8][3] = "(A)tomicidad, (C)onsistencia, a(I)slamiento y (D)urabilidad";
 answers[8] = 3;
 units[8] = ['60'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8057. Examen TIC A2 2010";
 preguntaids[8] = 8057


//  Id pregunta: 10556 Año de creación de pregunta: 2015
 questions[9]= "10)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[9]= new Array();
 choices[9][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[9][1] = "De tecnolog&iacute;a y de servicios";
 choices[9][2] = "De servicios y de personas";
 choices[9][3] = "De servicios y de procesos";
 answers[9] = 0;
 units[9] = ['101'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10556. ";
 preguntaids[9] = 10556


//  Id pregunta: 10850 Año de creación de pregunta: 2015
 questions[10]= "11)  De acuerdo a la Ley 9/2014, General de Telecomunicaciones, los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico con limitaci&oacute;n de n&uacute;mero:";
 choices[10]= new Array();
 choices[10][0] = "Se otorgar&aacute;n, por un per&iacute;odo que finalizar&aacute; el 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia, sin perjuicio de su posible renovaci&oacute;n.";
 choices[10][1] = "Se otorgar&aacute;n, por un per&iacute;odo que finalizar&aacute; el 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia, sin posibilidad de renovaci&oacute;n.";
 choices[10][2] = "Tendr&aacute;n la duraci&oacute;n prevista en los correspondientes procedimientos de licitaci&oacute;n, con un m&aacute;ximo de veinte a&ntilde;os, incluyendo pr&oacute;rrogas, sin posibilidad de renovaci&oacute;n autom&aacute;tica.";
 choices[10][3] = "Tendr&aacute;n la duraci&oacute;n prevista en los correspondientes procedimientos de licitaci&oacute;n, con un m&aacute;ximo de veinte a&ntilde;os, salvo pr&oacute;rrogas, sin posibilidad de renovaci&oacute;n autom&aacute;tica.";
 answers[10] = 2;
 units[10] = ['121'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10850. ";
 preguntaids[10] = 10850


//  Id pregunta: 9732 Año de creación de pregunta: 2014
 questions[11]= "12)  En relaci&oacute;n al uso del dominio p&uacute;blico radioel&eacute;ctrico, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[11]= new Array();
 choices[11][0] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico no precisar&aacute; de ning&uacute;n t&iacute;tulo habilitante";
 choices[11][1] = "El uso especial del dominio p&uacute;blico radioel&eacute;ctrico precisar&aacute; de una autorizaci&oacute;n general.";
 choices[11][2] = "El derecho de uso especial por radioaficionados u otros sin contenido econ&oacute;mico no precisar&aacute; de t&iacute;tulo habilitante";
 choices[11][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico requerir&aacute; de una concesi&oacute;n administrativa";
 answers[11] = 2;
 units[11] = ['121'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9732. ";
 preguntaids[11] = 9732


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es registro de funcionarios habilitados?";
 choices[12]= new Array();
 choices[12][0] = "@podera";
 choices[12][1] = "Habilit@";
 choices[12][2] = "Representa";
 choices[12][3] = "Autentica";
 answers[12] = 1;
 units[12] = ['47'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 630. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[12] = 630


//  Id pregunta: 9912 Año de creación de pregunta: 2015
 questions[13]= "14)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[13]= new Array();
 choices[13][0] = "No se pueden incluir metadatos complementarios.";
 choices[13][1] = "Se pueden incluir metadatos complementarios.";
 choices[13][2] = "Se pueden incluir metadatos complementarios &uacute;nicamente en caso de intercambio de dichos expedientes.";
 choices[13][3] = "Se pueden incluir metadatos complementarios &uacute;nicamente para facilitar el almacenamiento de los expedientes.";
 answers[13] = 1;
 units[13] = ['44'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 9912. ";
 preguntaids[13] = 9912


//  Id pregunta: 10878 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cuantos host puede poseer una red /30?";
 choices[14]= new Array();
 choices[14][0] = "1";
 choices[14][1] = "6";
 choices[14][2] = "2";
 choices[14][3] = "4";
 answers[14] = 2;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10878. ";
 preguntaids[14] = 10878


//  Id pregunta: 5683 Año de creación de pregunta: 2007
 questions[15]= "16)  &iquest;Cu&aacute;l es el tipo de mantenimiento que supone un conjunto de actividades para facilitar el mantenimiento futuro del sistema?";
 choices[15]= new Array();
 choices[15][0] = "Mantenimiento perfectivo.";
 choices[15][1] = "Mantenimiento adaptativo.";
 choices[15][2] = "Mantenimiento correctivo.";
 choices[15][3] = "Mantenimiento preventivo.";
 answers[15] = 3;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 5683. ";
 preguntaids[15] = 5683


//  Id pregunta: 5798 Año de creación de pregunta: 2007
 questions[16]= "17)  Un detector de intrusiones act&uacute;a a:";
 choices[16]= new Array();
 choices[16][0] = "nivel f&iacute;sico";
 choices[16][1] = "nivel de enlace";
 choices[16][2] = "nivel de red";
 choices[16][3] = "nivel de aplicaci&oacute;n";
 answers[16] = 3;
 units[16] = ['119', '120'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5798. ";
 preguntaids[16] = 5798


//  Id pregunta: 1152 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale en qu&eacute; nivel de aislamiento definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[17]= new Array();
 choices[17][0] = "Serializable.";
 choices[17][1] = "Repeatable Read (lecturas repetibles).";
 choices[17][2] = "Read Committed (lecturas comprometidas).";
 choices[17][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[17] = 3;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1152. ";
 preguntaids[17] = 1152


//  Id pregunta: 10177 Año de creación de pregunta: 2015
 questions[18]= "19)  De la Red SARA (Sistemas de Aplicaciones y Redes para las Administraciones) podemos afirmar que:";
 choices[18]= new Array();
 choices[18][0] = "Permite acceder a la plataforma de validaci&oacute;n de firma electr&oacute;nica @firma.";
 choices[18][1] = "No admite IPv6. Tampoco admite tr&aacute;fico cifrado.";
 choices[18][2] = "Su implantaci&oacute;n se establece como una recomendaci&oacute;n en el art&iacute;culo 155 de la Ley 40/2015";
 choices[18][3] = "A&uacute;n se encuentra en fase beta y no se encuentra afectada por el ENS (Esquema Nacional de Seguridad).";
 answers[18] = 0;
 units[18] = ['47'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 10177. Examen TIC A1 2014";
 preguntaids[18] = 10177


//  Id pregunta: 5885 Año de creación de pregunta: 2007
 questions[19]= "20)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, la gesti&oacute;n y control de los planes nacionales de numeraci&oacute;n corresponde a";
 choices[19]= new Array();
 choices[19][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[19][1] = "El Ministerio de Energia, Turismo y Agenda Digital";
 choices[19][2] = "El Gobierno";
 choices[19][3] = "La Agencia Estatal de Radiocomunicaciones";
 answers[19] = 1;
 units[19] = ['121'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5885. Nuevo Real Decreto 424/2016 (de estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales), asume las funciones del antiguo MINETUR";
 preguntaids[19] = 5885


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[20]= "21)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[20]= new Array();
 choices[20][0] = "Al Presidente del Gobierno.";
 choices[20][1] = "A las Cortes Generales";
 choices[20][2] = "A los electores.";
 choices[20][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[20] = 3;
 units[20] = ['1'];
 blocks[20] = ['A1'];
 comments[20] = "Id Pregunta: 23. Constituci&oacute;n de 1978";
 preguntaids[20] = 23


//  Id pregunta: 9213 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;A qui&eacute;n corresponde la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n de acuerdo a la Ley 9/2014, General de Telecomunicaciones?";
 choices[21]= new Array();
 choices[21][0] = "Al Gobierno.";
 choices[21][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[21][2] = "Al Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[21][3] = "A la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 answers[21] = 0;
 units[21] = ['121'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 9213. Examen TIC A1 2013";
 preguntaids[21] = 9213


//  Id pregunta: 5249 Año de creación de pregunta: 2006
 questions[22]= "23)  En referencia a las amenazas que afectan a la seguridad en las redes de comunicaciones, se&ntilde;ale la respuesta incorrecta";
 choices[22]= new Array();
 choices[22][0] = "La interrupci&oacute;n puede ser tanto f&iacute;sica como l&oacute;gica";
 choices[22][1] = "El llamado sniffing es un tipo de intercepci&oacute;n";
 choices[22][2] = "Los ataques de tipo pasivo son f&aacute;ciles de detectar";
 choices[22][3] = "Los ataques pueden ser activos y pasivos";
 answers[22] = 2;
 units[22] = ['120'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5249. ";
 preguntaids[22] = 5249


//  Id pregunta: 1145 Año de creación de pregunta: 2016
 questions[23]= "24)  En cuanto a las sesiones JAD (Joint Application Design), definidas seg&uacute;n M&eacute;trica V3, se&ntilde;ale la respuesta verdadera:";
 choices[23]= new Array();
 choices[23][0] = "Tienen como objetivo potenciar la participaci&oacute;n activa de la alta direcci&oacute;n.";
 choices[23][1] = "Uno de los perfiles implicados es el de Consultor.";
 choices[23][2] = "La informaci&oacute;n de salida depender&aacute; de la actividad del Plan de sistemas de Informaci&oacute;n.";
 choices[23][3] = "Se involucra a los usuarios principalmente en la especificaci&oacute;n de requisitos del sistema y en la validaci&oacute;n de prototipos.";
 answers[23] = 3;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 1145. ";
 preguntaids[23] = 1145


//  Id pregunta: 3601 Año de creación de pregunta: 2004
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[24]= new Array();
 choices[24][0] = "Integridad";
 choices[24][1] = "Sencillez";
 choices[24][2] = "Mantenibilidad";
 choices[24][3] = "Portabilidad";
 answers[24] = 1;
 units[24] = ['93'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3601. ";
 preguntaids[24] = 3601


//  Id pregunta: 1225 Año de creación de pregunta: 2016
 questions[25]= "26)  SHA-1 produce un valor hash de:";
 choices[25]= new Array();
 choices[25][0] = "20 bytes.";
 choices[25][1] = "33 bytes.";
 choices[25][2] = "256 y 512 bits, respectivamente.";
 choices[25][3] = "256 bits.";
 answers[25] = 0;
 units[25] = ['76'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1225. ";
 preguntaids[25] = 1225


//  Id pregunta: 2986 Año de creación de pregunta: 2002
 questions[26]= "27)  Los tipos de an&aacute;lisis desarrollados en Data Mining se dividen com&uacute;nmente en:";
 choices[26]= new Array();
 choices[26][0] = "Sint&aacute;ctico y sem&aacute;ntico.";
 choices[26][1] = "Estad&iacute;stico y de calidad.";
 choices[26][2] = "Gr&aacute;fico y textual.";
 choices[26][3] = "Supervisado y no supervisado.";
 answers[26] = 3;
 units[26] = ['72', '73'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2986. ";
 preguntaids[26] = 2986


//  Id pregunta: 2047 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Qu&eacute; par&aacute;metro no interviene directamente en evaluar el rendimiento de un sistema?:";
 choices[27]= new Array();
 choices[27][0] = "Tiempo de respuesta";
 choices[27][1] = "Productividad o throughput";
 choices[27][2] = "Tipo de procesador";
 choices[27][3] = "Tasa de utilizaci&oacute;n de CPU";
 answers[27] = 2;
 units[27] = ['39'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2047. ";
 preguntaids[27] = 2047


//  Id pregunta: 6042 Año de creación de pregunta: 2003
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[28]= new Array();
 choices[28][0] = "PostgreSQL.";
 choices[28][1] = "Gentoo.";
 choices[28][2] = "UbuntuBD.";
 choices[28][3] = "SQLCentos.";
 answers[28] = 0;
 units[28] = ['60'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 6042. TIC B 2007";
 preguntaids[28] = 6042


//  Id pregunta: 6191 Año de creación de pregunta: 2003
 questions[29]= "30)  Una obra bajo licencia Creative Commons:";
 choices[29]= new Array();
 choices[29][0] = "No tiene copyright";
 choices[29][1] = "Otorga todos los derechos a terceras personas";
 choices[29][2] = "Ofrecen derechos a terceras personas bajo ciertas condiciones.";
 choices[29][3] = "No ofrecen ning&uacute;n derecho a terceras personas.";
 answers[29] = 2;
 units[29] = ['41'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 6191. Examen TIC A Castilla La Mancha 2007";
 preguntaids[29] = 6191


//  Id pregunta: 1006 Año de creación de pregunta: 2016
 questions[30]= "31)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[30]= new Array();
 choices[30][0] = "los Secretarios de Estado";
 choices[30][1] = "los Ministros";
 choices[30][2] = "los Subsecretarios";
 choices[30][3] = "los Secretarios generales";
 answers[30] = 2;
 units[30] = ['4', '7', '8', '9'];
 blocks[30] = ['A1', 'A2'];
 comments[30] = "Id Pregunta: 1006. Ley 40/2015";
 preguntaids[30] = 1006


//  Id pregunta: 6506 Año de creación de pregunta: 2003
 questions[31]= "32)  Se entiende por seguridad de los sistemas de informaci&oacute;n al conjunto de funciones, servicios y mecanismos que permitan garantizar las siguientes premisas:";
 choices[31]= new Array();
 choices[31][0] = "Autenticaci&oacute;n, confidenciabilidad, accesibilidad, servicios de no-repudiaci&oacute;n";
 choices[31][1] = "Accesibilidad, servicios de no-repudiaci&oacute;n, integridad, disponibilidad";
 choices[31][2] = "Integridad, confidencialidad, disponibilidad, servicios de no-repudiaci&oacute;n";
 choices[31][3] = "Autenticacion, confidencialidad, integridad, disponibilidad";
 answers[31] = 3;
 units[31] = ['119'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6506. ";
 preguntaids[31] = 6506


//  Id pregunta: 1825 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l es la opci&oacute;n correcta que representa el proceso de M&eacute;trica 3 donde se realiza la actividad de Valoraci&oacute;n de Alternativas";
 choices[32]= new Array();
 choices[32][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[32][1] = "An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[32][2] = "Estudio de la Viabilidad del Sistema";
 choices[32][3] = "Mantenimiento del Sistema";
 answers[32] = 2;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1825. ";
 preguntaids[32] = 1825


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[33]= new Array();
 choices[33][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[33][1] = "El responsable de la custodia de los datos enviados.";
 choices[33][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[33][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[33] = 3;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 563. Junta de Extremadura A1 2015";
 preguntaids[33] = 563


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l es el orden correcto de los niveles de prioridad del mensaje de la librer&iacute;a log4j de Apache Software Foundation?";
 choices[34]= new Array();
 choices[34][0] = "ERROR, FATAL, INFO, WARN, DEBUG Y TRACE.";
 choices[34][1] = "ERROR, FATAL, INFO, WARN, TRACE y DEBUG.";
 choices[34][2] = "FATAL, ERROR, WARN, INFO, DEBUG Y TRACE.";
 choices[34][3] = "FATAL, ERROR, WARN, INFO, TRACE Y DEBUG.";
 answers[34] = 2;
 units[34] = ['62'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 704. AGE A2 2015";
 preguntaids[34] = 704


//  Id pregunta: 5326 Año de creación de pregunta: 2006
 questions[35]= "36)  El estandar de seguridad ubicado en la capa de procesamiento de paquetes en lugar de en la capa de aplicaci&oacute;n se llama";
 choices[35]= new Array();
 choices[35][0] = "SSL";
 choices[35][1] = "HTTPS";
 choices[35][2] = "FTP pasivo";
 choices[35][3] = "IPSec";
 answers[35] = 3;
 units[35] = ['120'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5326. ";
 preguntaids[35] = 5326


//  Id pregunta: 2967 Año de creación de pregunta: 2002
 questions[36]= "37)  Las principales caracter&iacute;sticas de un almac&eacute;n de datos son:";
 choices[36]= new Array();
 choices[36][0] = "Organizado en torno a procesos, integrado, inpendiente del tiempo, no volatil";
 choices[36][1] = "Organizado en torno a temas, integrado, independiente del tiempo, volatil";
 choices[36][2] = "Organizado en torno a temas, integrado, dependiente del tiempo, no volatil";
 choices[36][3] = "Organizado en torno a procesos, integrado, dependiente del tiempo, volatil";
 answers[36] = 2;
 units[36] = ['72', '73'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2967. ";
 preguntaids[36] = 2967


//  Id pregunta: 10016 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[37]= new Array();
 choices[37][0] = "EUPL";
 choices[37][1] = "GPL";
 choices[37][2] = "LGPL";
 choices[37][3] = "BSD";
 answers[37] = 3;
 units[37] = ['66'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10016. Examen TIC A2 2014";
 preguntaids[37] = 10016


//  Id pregunta: 6795 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;En cu&aacute;l de los siguientes componentes de XML se define la estructura de los datos que va a contener un formulario XML?";
 choices[38]= new Array();
 choices[38][0] = "Manifiestos (XSF).";
 choices[38][1] = "Vistas (XLS).";
 choices[38][2] = "Esquemas (XSD).";
 choices[38][3] = "Datos (XML).";
 answers[38] = 2;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6795. TIC A 2009";
 preguntaids[38] = 6795


//  Id pregunta: 3017 Año de creación de pregunta: 2002
 questions[39]= "40)  Respecto al algoritmo RSA:";
 choices[39]= new Array();
 choices[39][0] = "Reduce el problema de la distribuci&oacute;n de claves respecto a los criptosistemas cl&aacute;sicos";
 choices[39][1] = "Pertenece a la categor&iacute;a de criptosistemas sim&eacute;tricos";
 choices[39][2] = "Se basa en la utilizaci&oacute;n de grandes series de n&uacute;meros primos de tama&ntilde;o peque&ntilde;o";
 choices[39][3] = "Se basa en la transposici&oacute;n y sustituci&oacute;n de s&iacute;mbolos a trav&eacute;s de m&uacute;ltiples iteraciones";
 answers[39] = 0;
 units[39] = ['76'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3017. ";
 preguntaids[39] = 3017


//  Id pregunta: 7347 Año de creación de pregunta: 2010
 questions[40]= "41)  En el modelo COCOMO 2000 surgido como evoluci&oacute;n de COCOMO, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[40]= new Array();
 choices[40][0] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[40][1] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: incluye el uso de prototipos";
 choices[40][2] = "Modelo de Dise&ntilde;o Preliminar: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[40][3] = "Modelo de Dise&ntilde;o Preliminar: incluye el uso de prototipos";
 answers[40] = 1;
 units[40] = ['94'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 7347. ";
 preguntaids[40] = 7347


//  Id pregunta: 8225 Año de creación de pregunta: 2011
 questions[41]= "42)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[41]= new Array();
 choices[41][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[41][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[41][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[41][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[41] = 3;
 units[41] = ['106'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8225. Examen UPM A2 2011";
 preguntaids[41] = 8225


//  Id pregunta: 5009 Año de creación de pregunta: 2002
 questions[42]= "43)  Nombre y caracter&iacute;sticas del mecanismo de encriptado y autenticaci&oacute;n especificado en el est&aacute;ndar 802.11:";
 choices[42]= new Array();
 choices[42][0] = "WAP, con clave de hasta 40 bits";
 choices[42][1] = "WEP, con clave de hasta 40 bits";
 choices[42][2] = "WEP, con clave de hasta 128 bits";
 choices[42][3] = "WTLS, con clave de hasta 128 bits";
 answers[42] = 2;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5009. ";
 preguntaids[42] = 5009


//  Id pregunta: 4035 Año de creación de pregunta: 2004
 questions[43]= "44)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[43]= new Array();
 choices[43][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[43][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[43][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[43][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[43] = 2;
 units[43] = ['92', '93'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 4035. ";
 preguntaids[43] = 4035


//  Id pregunta: 9604 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[44]= new Array();
 choices[44][0] = "110";
 choices[44][1] = "119";
 choices[44][2] = "161";
 choices[44][3] = "25";
 answers[44] = 2;
 units[44] = ['114'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 9604. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[44] = 9604


//  Id pregunta: 2091 Año de creación de pregunta: 2009
 questions[45]= "46)  El derecho de informaci&oacute;n en la recogida de datos define la informaci&oacute;n que, obligatoriamente y con car&aacute;cter previo, se debe comunicar al afectado al que se le requiera para suministrar cualquier dato personal. Entre dicha informaci&oacute;n consta:";
 choices[45]= new Array();
 choices[45][0] = "El car&aacute;cter voluntario u obligatorio de las respuestas y de las consecuencias de la negativa a proporcionarlas";
 choices[45][1] = "El plazo de almacenamiento de la informaci&oacute;n";
 choices[45][2] = "El n&uacute;mero de cesiones que se van a realizar";
 choices[45][3] = "S&oacute;lo es necesario comunicar al afectado que se va a crear el fichero";
 answers[45] = 0;
 units[45] = ['35'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2091. ";
 preguntaids[45] = 2091


//  Id pregunta: 1093 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique la frase acertada sobre la gesti&oacute;n de procesos en los sistemas UNIX.";
 choices[46]= new Array();
 choices[46][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits,";
 choices[46][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes.";
 choices[46][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[46][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta.";
 answers[46] = 1;
 units[46] = ['57'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1093. ";
 preguntaids[46] = 1093


//  Id pregunta: 4033 Año de creación de pregunta: 2004
 questions[47]= "48)  El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de evaluaci&oacute;n de la calidad del software del tipo:";
 choices[47]= new Array();
 choices[47][0] = "Metrica de Fiabilidad";
 choices[47][1] = "Metrica de los Factores de calidad";
 choices[47][2] = "Metrica de Complejidad";
 choices[47][3] = "Ninguna de ellas";
 answers[47] = 3;
 units[47] = ['94'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 4033. ";
 preguntaids[47] = 4033


//  Id pregunta: 1896 Año de creación de pregunta: 2016
 questions[48]= "49)  En relaci&oacute;n a la norma ISO 9004 &iquest;Qu&eacute; aseveraci&oacute;n es FALSA?:";
 choices[48]= new Array();
 choices[48][0] = "No es certificable";
 choices[48][1] = "Contiene las directrices para la mejora continua del desempe&ntilde;o";
 choices[48][2] = "Est&aacute; basada en un enfoque de procesos";
 choices[48][3] = "Garantiza la gesti&oacute;n de la calidad de los productos";
 answers[48] = 3;
 units[48] = ['98'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 1896. ";
 preguntaids[48] = 1896


//  Id pregunta: 7256 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;C&oacute;mo se utiliza un protocolo reto/respuesta con una implementaci&oacute;n con un dispositivo de tokens?";
 choices[49]= new Array();
 choices[49][0] = "Este protocolo no se usa, se usa la criptograf&iacute;a";
 choices[49][1] = "El servicio de autenticaci&oacute;n genera un reto y el dispositivo inteligente genera una respuesta basado en el reto";
 choices[49][2] = "El dispositivo pide el usuario y la contrase&ntilde;a";
 choices[49][3] = "El dispositivo compara la contrase&ntilde;a del usuario contra una base de datos de credenciales";
 answers[49] = 1;
 units[49] = ['119'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 7256. ";
 preguntaids[49] = 7256


//  Id pregunta: 9067 Año de creación de pregunta: 2014
 questions[50]= "51)  Se&ntilde;ale la respuesta correcta:";
 choices[50]= new Array();
 choices[50][0] = "La altitud es la distancia vertical desde un punto de referencia de la superficie terrestre.";
 choices[50][1] = "La altura es la distancia vertical a un origen determinado, considerado como nivel 0.";
 choices[50][2] = "La longitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 choices[50][3] = "La latitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 answers[50] = 3;
 units[50] = ['71'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9067. ";
 preguntaids[50] = 9067


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[51]= "52)  Es falso que:";
 choices[51]= new Array();
 choices[51][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[51][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[51][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[51][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[51] = 1;
 units[51] = ['20'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 491. Direcci&oacute;n p&uacute;blica";
 preguntaids[51] = 491


//  Id pregunta: 6881 Año de creación de pregunta: 2010
 questions[52]= "53)  La planificaci&oacute;n de las redes radioel&eacute;ctricas:";
 choices[52]= new Array();
 choices[52][0] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n a la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[52][1] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n al Ayuntamiento correspondiente.";
 choices[52][2] = "La realiza la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de no causar interferencias entre diferentes servicios.";
 choices[52][3] = "Se realiza en comisi&oacute;n paritaria entre el operador y la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de evitar interferencias entre diferentes servicios.";
 answers[52] = 0;
 units[52] = ['121'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 6881. TIC A 2009";
 preguntaids[52] = 6881


//  Id pregunta: 999 Año de creación de pregunta: 2016
 questions[53]= "54)  La organizaci&oacute;n en Departamentos ministeriales de la Administracion General del Estado no obsta a la existencia de:";
 choices[53]= new Array();
 choices[53][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[53][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[53][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[53][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[53] = 3;
 units[53] = ['4', '7', '8', '9'];
 blocks[53] = ['A1', 'A2'];
 comments[53] = "Id Pregunta: 999. Ley 40/2015";
 preguntaids[53] = 999


//  Id pregunta: 9834 Año de creación de pregunta: 2015
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "Un proceso es equivalente a un hilo de ejecuci&oacute;n.";
 choices[54][1] = "Los hilos no pueden compartir entre ellos datos o espacios de direcciones.";
 choices[54][2] = "Se tarda m&aacute;s en eliminar un hilo que un proceso.";
 choices[54][3] = "Tanto los procesos como los hilos pueden crear sus propios hijos.";
 answers[54] = 3;
 units[54] = ['56'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9834. ";
 preguntaids[54] = 9834


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[55]= new Array();
 choices[55][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[55][1] = "De nivel alto.";
 choices[55][2] = "De nivel medio y nivel alto.";
 choices[55][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[55] = 3;
 units[55] = ['35'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 564. Junta de Extremadura A1 2015";
 preguntaids[55] = 564


//  Id pregunta: 4537 Año de creación de pregunta: 2002
 questions[56]= "57)  El algoritmo conocido como Spanning Tree Algorithm se usa:";
 choices[56]= new Array();
 choices[56][0] = "Para optimizar los caminos usados en redes complejas con routers";
 choices[56][1] = "Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos";
 choices[56][2] = "Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla";
 choices[56][3] = "Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estaci&oacute;n no conteste (puede estar apagada o estropeada)";
 answers[56] = 1;
 units[56] = ['102'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4537. ";
 preguntaids[56] = 4537


//  Id pregunta: 8827 Año de creación de pregunta: 2013
 questions[57]= "58)  &iquest;De qu&eacute; est&aacute;ndar se estar&iacute;a hablando si se menciona una Interfaz aerea avanzada con velocidades de transmisi&oacute;n de 100 Mbps para dispositivos fijos y 1 Gbps para dispositivos m&oacute;viles?";
 choices[57]= new Array();
 choices[57][0] = "802.16e";
 choices[57][1] = "802.11-2012";
 choices[57][2] = "802.16m";
 choices[57][3] = "802.11ac";
 answers[57] = 2;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 8827. ";
 preguntaids[57] = 8827


//  Id pregunta: 7240 Año de creación de pregunta: 2010
 questions[58]= "59)  La Resoluci&oacute;n del 6 de Febrero de 2006 sobre calidad de los servicios en la Administraci&oacute;n, fija distintos programas de actuaci&oacute;n, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[58]= new Array();
 choices[58][0] = "Programa de Cartas de Servicio";
 choices[58][1] = "Programa de Evaluaci&oacute;n de la calidad de las organizaciones";
 choices[58][2] = "Programa de Quejas y Sugerencias";
 choices[58][3] = "Programa de Implantaci&oacute;n de la Calidad";
 answers[58] = 3;
 units[58] = ['92'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 7240. ";
 preguntaids[58] = 7240


//  Id pregunta: 10671 Año de creación de pregunta: 2015
 questions[59]= "60)  Seg&uacute;n el art&iacute;culo 47 de la Ley 9/2014, NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas:";
 choices[59]= new Array();
 choices[59][0] = "Derecho a continuidad del servicio.";
 choices[59][1] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[59][2] = "Derecho a la informaci&oacute;n, que deber&aacute; ser veraz, eficaz, suficiente, transparente, comparable sobre los servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico.";
 choices[59][3] = "Todos son derechos espec&iacute;ficos de los usuarios finales.";
 answers[59] = 3;
 units[59] = ['121'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 10671. ";
 preguntaids[59] = 10671


//  Id pregunta: 1880 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, en relaci&oacute;n con las Listas de Certificados Revocados (CRL), &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[60]= new Array();
 choices[60][0] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[60][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[60][2] = "Deben actualizarse al menos una vez a la semana.";
 choices[60][3] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 answers[60] = 0;
 units[60] = ['77'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1880. ";
 preguntaids[60] = 1880


//  Id pregunta: 10632 Año de creación de pregunta: 2015
 questions[61]= "62)  Seg&uacute;n la Ley 9/2014, los abonados podr&aacute;n conservar los n&uacute;meros que les hayan sido asignados:";
 choices[61]= new Array();
 choices[61][0] = "Siempre que se mantenga el mismo operador.";
 choices[61][1] = "Sin ning&uacute;n requisito previo.";
 choices[61][2] = "Previa solicitud.";
 choices[61][3] = "Seg&uacute;n fije la CNMC mediante resoluci&oacute;n.";
 answers[61] = 2;
 units[61] = ['121'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10632. Articulo 21";
 preguntaids[61] = 10632


//  Id pregunta: 3689 Año de creación de pregunta: 2002
 questions[62]= "63)  Indique la afirmaci&oacute;n falsa:";
 choices[62]= new Array();
 choices[62][0] = "El modelado entidad-relaci&oacute;n es una t&eacute;cnica para el modelado de datos";
 choices[62][1] = "Las redes de Petri son una t&eacute;cnica orientada a objetos";
 choices[62][2] = "El diagrama de flujo de datos es una t&eacute;cnica orientada a los datos";
 choices[62][3] = "El diagrama de clases es una t&eacute;cnica orientada a objetos";
 answers[62] = 2;
 units[62] = ['85', '86'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3689. ";
 preguntaids[62] = 3689


//  Id pregunta: 1003 Año de creación de pregunta: 2016
 questions[63]= "64)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[63]= new Array();
 choices[63][0] = "los Secretarios generales t&eacute;cnicos";
 choices[63][1] = "los Directores generales";
 choices[63][2] = "los Secretarios generales";
 choices[63][3] = "los Subsecretarios";
 answers[63] = 1;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 1003. Ley 40/2015";
 preguntaids[63] = 1003


//  Id pregunta: 10849 Año de creación de pregunta: 2015
 questions[64]= "65)  El incumplimiento por los operadores, o por los propietarios de los correspondientes recursos asociados, de las obligaciones establecidas para la utilizaci&oacute;n compartida de los tramos finales de las redes de acceso, se recoge en la Ley 9/2014, General de Telecomunicaciones como una infracci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Leve";
 choices[64][1] = "Grave";
 choices[64][2] = "Muy grave";
 choices[64][3] = "Dicha infracci&oacute;n no se encuentra recogida en la Ley 9/2014.";
 answers[64] = 1;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 10849. ";
 preguntaids[64] = 10849


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; facilita un ORM?";
 choices[65]= new Array();
 choices[65][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[65][1] = "Conversi&oacute;n de objetos a documentos";
 choices[65][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[65][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[65] = 0;
 units[65] = ['62'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 698. AGE A1 2015";
 preguntaids[65] = 698


//  Id pregunta: 8962 Año de creación de pregunta: 2013
 questions[66]= "67)  Los EJB de tipo entity pueden ser:";
 choices[66]= new Array();
 choices[66][0] = "De dos tipos: RMP y CMP";
 choices[66][1] = "De dos tipos: BMP y CMP";
 choices[66][2] = "De tres tipos: BMP, CMP y JMP";
 choices[66][3] = "De tres tipos: BMP, CMP y SMP";
 answers[66] = 1;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8962. ";
 preguntaids[66] = 8962


//  Id pregunta: 4253 Año de creación de pregunta: 2006
 questions[67]= "68)  El proceso que va desde un alto nivel de abstracci&oacute;n hasta la propia implementaci&oacute;n f&iacute;sica del sistema se conoce como:";
 choices[67]= new Array();
 choices[67][0] = "Ingenier&iacute;a inversa.";
 choices[67][1] = "Reestructuraci&oacute;n.";
 choices[67][2] = "Ingenier&iacute;a hacia delante.";
 choices[67][3] = "Reingenier&iacute;a.";
 answers[67] = 2;
 units[67] = ['96', '97'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4253. ";
 preguntaids[67] = 4253


//  Id pregunta: 1090 Año de creación de pregunta: 2016
 questions[68]= "69)  De conformidad a lo previsto en el art&iacute;culo 22 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[68]= new Array();
 choices[68][0] = "Los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haberse recogido para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al r&eacute;gimen general de la Ley Org&aacute;nica citada.";
 choices[68][1] = "La recogida y tratamiento de datos de car&aacute;cter personal obtenidos durante una actuaci&oacute;n de las Fuerzas y Cuerpos de Seguridad podr&aacute;n incluirse, previa autorizaci&oacute;n del Consejo General del Poder Judicial, en todos los ficheros de titularidad p&uacute;blica.";
 choices[68][2] = "Los ficheros creados por las Fuerzas y Cuerpos de Seguridad, ya sea con fines administrativos o policiales, se rigen por las previsiones contenidas en la Ley Org&aacute;nica 2/2006, de 13 de marzo, de Fuerzas y Cuerpos de Seguridad del Estado.";
 choices[68][3] = "En ning&uacute;n caso pueden ser tratados los datos de car&aacute;cter personal creados por las Fuerzas y Cuerpos de Seguridad del Estado para fines administrativos.";
 answers[68] = 0;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 1090. ";
 preguntaids[68] = 1090


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[69]= "70)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[69]= new Array();
 choices[69][0] = "Seis a&ntilde;os.";
 choices[69][1] = "Cinco a&ntilde;os.";
 choices[69][2] = "Cuatro a&ntilde;os.";
 choices[69][3] = "Ocho a&ntilde;os.";
 answers[69] = 1;
 units[69] = ['5'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 128. Uni&oacute;n Europea";
 preguntaids[69] = 128


//  Id pregunta: 5380 Año de creación de pregunta: 2006
 questions[70]= "71)  El estandar 802.11i se centra en";
 choices[70]= new Array();
 choices[70][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[70][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[70][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[70][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[70] = 1;
 units[70] = ['108'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5380. ";
 preguntaids[70] = 5380


//  Id pregunta: 1872 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), se podr&aacute;n realizar pruebas anteriores a la implantaci&oacute;n de un sistema de la informaci&oacute;n con datos reales:";
 choices[71]= new Array();
 choices[71][0] = "Si se tratan datos personales con nivel de seguridad b&aacute;sico.";
 choices[71][1] = "Si se asegura el nivel de seguridad correspondiente al tratamiento realizado, se anota su realizaci&oacute;n en el documento de seguridad y se ha realizado previamente una copia de seguridad.";
 choices[71][2] = "Si se asegura el nivel de seguridad correspondiente al tratamiento realizado y se ha recibido aprobaci&oacute;n previa del responsable de seguridad.";
 choices[71][3] = "Todas las anteriores son correctas.";
 answers[71] = 1;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 1872. ";
 preguntaids[71] = 1872


//  Id pregunta: 6515 Año de creación de pregunta: 2003
 questions[72]= "73)  En un sistema operativo UNIX queremos que un fichero pueda ser actualizado &uacute;nicamente por su propietario y por los usuarios que pertenecen al mismo grupo que el propietario. Indicar cuales ser&iacute;an los permisos adecuados:";
 choices[72]= new Array();
 choices[72][0] = "755";
 choices[72][1] = "740";
 choices[72][2] = "760";
 choices[72][3] = "777";
 answers[72] = 2;
 units[72] = ['57'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 6515. ";
 preguntaids[72] = 6515


//  Id pregunta: 6412 Año de creación de pregunta: 2003
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[73]= new Array();
 choices[73][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[73][1] = "Utiliza modelos de datos multidimensionales.";
 choices[73][2] = "Recuperan un dato individual con un alto rendimiento.";
 choices[73][3] = "Ofrece ventajas sobre las BBDD Relacionales a la hora de trabajar sobre datos agregados.";
 answers[73] = 2;
 units[73] = ['72'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 6412. ";
 preguntaids[73] = 6412


//  Id pregunta: 1400 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique la respuesta FALSA, respecto al protocolo IPSEC:";
 choices[74]= new Array();
 choices[74][0] = "EI protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[74][1] = "EI protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[74][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[74][3] = "IPSEC ESP es incompatible con el modo transporte, solo se puede utilizar en modo t&uacute;nel.";
 answers[74] = 3;
 units[74] = ['119'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1400. ";
 preguntaids[74] = 1400


