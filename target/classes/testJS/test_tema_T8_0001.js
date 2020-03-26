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
//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[0]= "1)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[0]= new Array();
 choices[0][0] = "De un mes si el acto fuera presunto";
 choices[0][1] = "De un mes si el acto fuera expreso";
 choices[0][2] = "De un mes en cualquier caso";
 choices[0][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[0] = 1;
 units[0] = ['8'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 259. Ley 39/2015";
 preguntaids[0] = 259


//  Id pregunta: 1000 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Secretarios generales t&eacute;cnicos:";
 choices[1]= new Array();
 choices[1][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[1][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[1][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[1][3] = "todas son correctas";
 answers[1] = 3;
 units[1] = ['4', '7', '8', '9'];
 blocks[1] = ['A1', 'A2'];
 comments[1] = "Id Pregunta: 1000. Ley 40/2015";
 preguntaids[1] = 1000


//  Id pregunta: 986 Año de creación de pregunta: 2016
 questions[2]= "3)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[2]= new Array();
 choices[2][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[2][1] = "los Subdelegados del Gobierno en las provincias";
 choices[2][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[2][3] = "a y b son correctas";
 answers[2] = 3;
 units[2] = ['4', '7', '8', '9'];
 blocks[2] = ['A1', 'A2'];
 comments[2] = "Id Pregunta: 986. Ley 40/2015";
 preguntaids[2] = 986


//  Id pregunta: 1021 Año de creación de pregunta: 2016
 questions[3]= "4)  De acuerdo a la ley 40/2015 debe abstenerse de intervenir en el procedimiento el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[3]= new Array();
 choices[3][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[3][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[3][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[3][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[3] = 3;
 units[3] = ['4', '7', '8', '9'];
 blocks[3] = ['A1', 'A2'];
 comments[3] = "Id Pregunta: 1021. Ley 40/2015";
 preguntaids[3] = 1021


//  Id pregunta: 998 Año de creación de pregunta: 2016
 questions[4]= "5)  La Administraci&oacute;n General del Estado se organiza:";
 choices[4]= new Array();
 choices[4][0] = "en Ministerios";
 choices[4][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[4][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[4][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[4] = 1;
 units[4] = ['4', '7', '8', '9'];
 blocks[4] = ['A1', 'A2'];
 comments[4] = "Id Pregunta: 998. Ley 40/2015";
 preguntaids[4] = 998


//  Id pregunta: 983 Año de creación de pregunta: 2016
 questions[5]= "6)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[5]= new Array();
 choices[5][0] = "la organizaci&oacute;n central, que integra los Ministerios y los servicios comunes";
 choices[5][1] = "la Organizaci&oacute;n Territorial";
 choices[5][2] = "la Organizaci&oacute;n sectorial";
 choices[5][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[5] = 2;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 983. Ley 40/2015";
 preguntaids[5] = 983


//  Id pregunta: 970 Año de creación de pregunta: 2016
 questions[6]= "7)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[6]= new Array();
 choices[6][0] = "personalidad jur&iacute;dica propia";
 choices[6][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[6][2] = "personalidad jur&iacute;dica plena";
 choices[6][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[6] = 1;
 units[6] = ['4', '7', '8', '9'];
 blocks[6] = ['A1', 'A2'];
 comments[6] = "Id Pregunta: 970. Ley 40/2015";
 preguntaids[6] = 970


//  Id pregunta: 968 Año de creación de pregunta: 2016
 questions[7]= "8)  Las Administraciones P&uacute;blicas:";
 choices[7]= new Array();
 choices[7][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[7][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[7][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[7][3] = "todas son correctas";
 answers[7] = 1;
 units[7] = ['4', '7', '8', '9'];
 blocks[7] = ['A1', 'A2'];
 comments[7] = "Id Pregunta: 968. Ley 40/2015";
 preguntaids[7] = 968


//  Id pregunta: 961 Año de creación de pregunta: 2016
 questions[8]= "9)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[8]= new Array();
 choices[8][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[8][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[8][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[8][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[8] = 2;
 units[8] = ['4', '7', '8', '9'];
 blocks[8] = ['A1', 'A2'];
 comments[8] = "Id Pregunta: 961. Ley 40/2015";
 preguntaids[8] = 961


//  Id pregunta: 963 Año de creación de pregunta: 2016
 questions[9]= "10)  El sector p&uacute;blico institucional se integra por:";
 choices[9]= new Array();
 choices[9][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[9][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[9][2] = "las Universidades p&uacute;blicas";
 choices[9][3] = "todas son correctas";
 answers[9] = 3;
 units[9] = ['4', '7', '8', '9'];
 blocks[9] = ['A1', 'A2'];
 comments[9] = "Id Pregunta: 963. Ley 40/2015";
 preguntaids[9] = 963


//  Id pregunta: 1025 Año de creación de pregunta: 2016
 questions[10]= "11)  La recusaci&oacute;n se plantea...";
 choices[10]= new Array();
 choices[10][0] = "Antes de iniciado el procedimiento";
 choices[10][1] = "Una vez iniciado el procedimiento";
 choices[10][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[10][3] = "En cualquier momento del procedimiento";
 answers[10] = 3;
 units[10] = ['4', '7', '8', '9'];
 blocks[10] = ['A1', 'A2'];
 comments[10] = "Id Pregunta: 1025. Ley 40/2015";
 preguntaids[10] = 1025


//  Id pregunta: 1013 Año de creación de pregunta: 2016
 questions[11]= "12)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[11]= new Array();
 choices[11][0] = "por Real Decreto";
 choices[11][1] = "reglamentariamente";
 choices[11][2] = "mediante Ley";
 choices[11][3] = "ninguna es correcta";
 answers[11] = 1;
 units[11] = ['4', '7', '8', '9'];
 blocks[11] = ['A1', 'A2'];
 comments[11] = "Id Pregunta: 1013. Ley 40/2015";
 preguntaids[11] = 1013


//  Id pregunta: 991 Año de creación de pregunta: 2016
 questions[12]= "13)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[12]= new Array();
 choices[12][0] = "un &oacute;rgano superior";
 choices[12][1] = "un &oacute;rgano directivo";
 choices[12][2] = "un &oacute;rgano superior o directivo";
 choices[12][3] = "ninguna es correcta";
 answers[12] = 2;
 units[12] = ['4', '7', '8', '9'];
 blocks[12] = ['A1', 'A2'];
 comments[12] = "Id Pregunta: 991. Ley 40/2015";
 preguntaids[12] = 991


//  Id pregunta: 977 Año de creación de pregunta: 2016
 questions[13]= "14)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[13]= new Array();
 choices[13][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[13][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[13][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[13][3] = "todas son correctas";
 answers[13] = 3;
 units[13] = ['4', '7', '8', '9'];
 blocks[13] = ['A1', 'A2'];
 comments[13] = "Id Pregunta: 977. Ley 40/2015";
 preguntaids[13] = 977


//  Id pregunta: 972 Año de creación de pregunta: 2016
 questions[14]= "15)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[14]= new Array();
 choices[14][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[14][1] = "el C&oacute;digo Civil";
 choices[14][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[14][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[14] = 0;
 units[14] = ['4', '7', '8', '9'];
 blocks[14] = ['A1', 'A2'];
 comments[14] = "Id Pregunta: 972. Ley 40/2015";
 preguntaids[14] = 972


//  Id pregunta: 979 Año de creación de pregunta: 2016
 questions[15]= "16)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[15]= new Array();
 choices[15][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[15][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[15][2] = "a y b son correctas";
 choices[15][3] = "a y b son incorrectas";
 answers[15] = 2;
 units[15] = ['4', '7', '8', '9'];
 blocks[15] = ['A1', 'A2'];
 comments[15] = "Id Pregunta: 979. Ley 40/2015";
 preguntaids[15] = 979


//  Id pregunta: 1009 Año de creación de pregunta: 2016
 questions[16]= "17)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[16]= new Array();
 choices[16][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[16][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[16][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[16][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[16] = 2;
 units[16] = ['4', '7', '8', '9'];
 blocks[16] = ['A1', 'A2'];
 comments[16] = "Id Pregunta: 1009. Ley 40/2015";
 preguntaids[16] = 1009


//  Id pregunta: 988 Año de creación de pregunta: 2016
 questions[17]= "18)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[17]= new Array();
 choices[17][0] = "Subsecretario";
 choices[17][1] = "Subdirector general";
 choices[17][2] = "Secretario de Estado";
 choices[17][3] = "ninguna es correcta";
 answers[17] = 1;
 units[17] = ['4', '7', '8', '9'];
 blocks[17] = ['A1', 'A2'];
 comments[17] = "Id Pregunta: 988. Ley 40/2015";
 preguntaids[17] = 988


//  Id pregunta: 1010 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[18]= new Array();
 choices[18][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[18][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[18][2] = "el Ministerio del Interior";
 choices[18][3] = "la Administraci&oacute;n General del Estado";
 answers[18] = 0;
 units[18] = ['4', '7', '8', '9'];
 blocks[18] = ['A1', 'A2'];
 comments[18] = "Id Pregunta: 1010. Ley 40/2015";
 preguntaids[18] = 1010


//  Id pregunta: 987 Año de creación de pregunta: 2016
 questions[19]= "20)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[19]= new Array();
 choices[19][0] = "Subsecretario";
 choices[19][1] = "Subdirector general";
 choices[19][2] = "Secretario de Estado";
 choices[19][3] = "ninguna es correcta";
 answers[19] = 0;
 units[19] = ['4', '7', '8', '9'];
 blocks[19] = ['A1', 'A2'];
 comments[19] = "Id Pregunta: 987. Ley 40/2015";
 preguntaids[19] = 987


//  Id pregunta: 976 Año de creación de pregunta: 2016
 questions[20]= "21)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[20]= new Array();
 choices[20][0] = "circulares";
 choices[20][1] = "reglamentos internos";
 choices[20][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[20][3] = "disposiciones de car&aacute;cter general";
 answers[20] = 2;
 units[20] = ['4', '7', '8', '9'];
 blocks[20] = ['A1', 'A2'];
 comments[20] = "Id Pregunta: 976. Ley 40/2015";
 preguntaids[20] = 976


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[21]= "22)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[21]= new Array();
 choices[21][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[21][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[21][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[21][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[21] = 2;
 units[21] = ['8'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 260. Ley 39/2015";
 preguntaids[21] = 260


//  Id pregunta: 962 Año de creación de pregunta: 2016
 questions[22]= "23)  La Ley 40/2015 se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[22]= new Array();
 choices[22][0] = "la Administraci&oacute;n General del Estado";
 choices[22][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[22][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[22][3] = "el sector p&uacute;blico y privado institucional";
 answers[22] = 3;
 units[22] = ['4', '7', '8', '9'];
 blocks[22] = ['A1', 'A2'];
 comments[22] = "Id Pregunta: 962. Ley 40/2015";
 preguntaids[22] = 962


//  Id pregunta: 1011 Año de creación de pregunta: 2016
 questions[23]= "24)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[23]= new Array();
 choices[23][0] = "en cada Comunidad Aut&oacute;noma";
 choices[23][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[23][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[23][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[23] = 1;
 units[23] = ['4', '7', '8', '9'];
 blocks[23] = ['A1', 'A2'];
 comments[23] = "Id Pregunta: 1011. Ley 40/2015";
 preguntaids[23] = 1011


//  Id pregunta: 1027 Año de creación de pregunta: 2016
 questions[24]= "25)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[24]= new Array();
 choices[24][0] = "Un d&iacute;a";
 choices[24][1] = "Dos d&iacute;as";
 choices[24][2] = "Tres d&iacute;as";
 choices[24][3] = "Cuatro d&iacute;as";
 answers[24] = 2;
 units[24] = ['4', '7', '8', '9'];
 blocks[24] = ['A1', 'A2'];
 comments[24] = "Id Pregunta: 1027. Ley 40/2015";
 preguntaids[24] = 1027


//  Id pregunta: 1023 Año de creación de pregunta: 2016
 questions[25]= "26)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[25]= new Array();
 choices[25][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[25][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[25][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[25][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[25] = 0;
 units[25] = ['4', '7', '8', '9'];
 blocks[25] = ['A1', 'A2'];
 comments[25] = "Id Pregunta: 1023. Ley 40/2015";
 preguntaids[25] = 1023


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[26]= "27)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[26][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[26][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[26][3] = "Todas las anteriores son ciertas";
 answers[26] = 3;
 units[26] = ['8'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 262. Ley 39/2015";
 preguntaids[26] = 262


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[27]= "28)  Sobre el recurso de reposici&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[27][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[27][2] = "Ha desaparecido en la Ley 39/2015";
 choices[27][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[27] = 0;
 units[27] = ['8'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 261. Ley 39/2015";
 preguntaids[27] = 261


//  Id pregunta: 990 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo al articulo 55 de la ley 40/2015, tienen la condici&oacute;n de alto cargo los siguientes organos de la organizacion central de la Administracion general del Estado:";
 choices[28]= new Array();
 choices[28][0] = "los &oacute;rganos superiores";
 choices[28][1] = "los &oacute;rganos superiores y directivos";
 choices[28][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[28][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[28] = 2;
 units[28] = ['4', '7', '8', '9'];
 blocks[28] = ['A1', 'A2'];
 comments[28] = "Id Pregunta: 990. Ley 40/2015";
 preguntaids[28] = 990


//  Id pregunta: 1015 Año de creación de pregunta: 2016
 questions[29]= "30)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[29]= new Array();
 choices[29][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[29][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[29][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[29][3] = "ninguna es correcta";
 answers[29] = 2;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 1015. Ley 40/2015";
 preguntaids[29] = 1015


//  Id pregunta: 1002 Año de creación de pregunta: 2016
 questions[30]= "31)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[30]= new Array();
 choices[30][0] = "Subgrupo A1";
 choices[30][1] = "Subgrupo A2";
 choices[30][2] = "Subgrupo B";
 choices[30][3] = "Subgrupo C1";
 answers[30] = 0;
 units[30] = ['4', '7', '8', '9'];
 blocks[30] = ['A1', 'A2'];
 comments[30] = "Id Pregunta: 1002. Ley 40/2015";
 preguntaids[30] = 1002


//  Id pregunta: 975 Año de creación de pregunta: 2016
 questions[31]= "32)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[31][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[31][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[31][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[31] = 0;
 units[31] = ['4', '7', '8', '9'];
 blocks[31] = ['A1', 'A2'];
 comments[31] = "Id Pregunta: 975. Ley 40/2015";
 preguntaids[31] = 975


//  Id pregunta: 1018 Año de creación de pregunta: 2016
 questions[32]= "33)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[32]= new Array();
 choices[32][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[32][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[32][2] = "el Subdirector General que el Delegado designe";
 choices[32][3] = "el Secretario de Estado";
 answers[32] = 0;
 units[32] = ['4', '7', '8', '9'];
 blocks[32] = ['A1', 'A2'];
 comments[32] = "Id Pregunta: 1018. Ley 40/2015";
 preguntaids[32] = 1018


//  Id pregunta: 1005 Año de creación de pregunta: 2016
 questions[33]= "34)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[33]= new Array();
 choices[33][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[33][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[33][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[33][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[33] = 0;
 units[33] = ['4', '7', '8', '9'];
 blocks[33] = ['A1', 'A2'];
 comments[33] = "Id Pregunta: 1005. Ley 40/2015";
 preguntaids[33] = 1005


//  Id pregunta: 1019 Año de creación de pregunta: 2016
 questions[34]= "35)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado, la suplencia del Delegado del Gobierno corresponder&aacute; a:";
 choices[34]= new Array();
 choices[34][0] = "el Secretario General";
 choices[34][1] = "el Subdirector General";
 choices[34][2] = "el Secretario de Estado";
 choices[34][3] = "ninguna es correcta";
 answers[34] = 0;
 units[34] = ['4', '7', '8', '9'];
 blocks[34] = ['A1', 'A2'];
 comments[34] = "Id Pregunta: 1019. Ley 40/2015";
 preguntaids[34] = 1019


//  Id pregunta: 978 Año de creación de pregunta: 2016
 questions[35]= "36)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento por parte de los organos jerarquicamente dependientes de las instrucciones u &oacute;rdenes de servicio de los organos administrativos de acuerdo a la ley 40/2015:";
 choices[35]= new Array();
 choices[35][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[35][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[35][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[35][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[35] = 0;
 units[35] = ['4', '7', '8', '9'];
 blocks[35] = ['A1', 'A2'];
 comments[35] = "Id Pregunta: 978. Ley 40/2015";
 preguntaids[35] = 978


//  Id pregunta: 1012 Año de creación de pregunta: 2016
 questions[36]= "37)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[36]= new Array();
 choices[36][0] = "la poblaci&oacute;n del territorio";
 choices[36][1] = "el volumen de gesti&oacute;n";
 choices[36][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[36][3] = "todas son correctas";
 answers[36] = 3;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 1012. Ley 40/2015";
 preguntaids[36] = 1012


//  Id pregunta: 967 Año de creación de pregunta: 2016
 questions[37]= "38)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[37]= new Array();
 choices[37][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[37][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[37][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[37][3] = "todas son correctas";
 answers[37] = 3;
 units[37] = ['4', '7', '8', '9'];
 blocks[37] = ['A1', 'A2'];
 comments[37] = "Id Pregunta: 967. Ley 40/2015";
 preguntaids[37] = 967


//  Id pregunta: 1022 Año de creación de pregunta: 2016
 questions[38]= "39)  Segun la ley 40/2015 podr&aacute;n ordenarle al funcionario que se abstenga de toda intervenci&oacute;n en el expediente por causa de abstenci&oacute;n...";
 choices[38]= new Array();
 choices[38][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[38][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[38][2] = "Los interesados en el procedimiento";
 choices[38][3] = "Las alternativas b) y c) son correctas";
 answers[38] = 1;
 units[38] = ['4', '7', '8', '9'];
 blocks[38] = ['A1', 'A2'];
 comments[38] = "Id Pregunta: 1022. Ley 40/2015";
 preguntaids[38] = 1022


//  Id pregunta: 974 Año de creación de pregunta: 2016
 questions[39]= "40)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[39]= new Array();
 choices[39][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[39][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[39][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[39][3] = "todas son correctas";
 answers[39] = 1;
 units[39] = ['4', '7', '8', '9'];
 blocks[39] = ['A1', 'A2'];
 comments[39] = "Id Pregunta: 974. Ley 40/2015";
 preguntaids[39] = 974


//  Id pregunta: 985 Año de creación de pregunta: 2016
 questions[40]= "41)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[40]= new Array();
 choices[40][0] = "los Subsecretarios y Secretarios generales";
 choices[40][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[40][2] = "los Secretarios de Estado";
 choices[40][3] = "los Subdirectores generales";
 answers[40] = 2;
 units[40] = ['4', '7', '8', '9'];
 blocks[40] = ['A1', 'A2'];
 comments[40] = "Id Pregunta: 985. Ley 40/2015";
 preguntaids[40] = 985


//  Id pregunta: 969 Año de creación de pregunta: 2016
 questions[41]= "42)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[41]= new Array();
 choices[41][0] = "el Gobierno de la Naci&oacute;n";
 choices[41][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[41][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[41][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[41] = 3;
 units[41] = ['4', '7', '8', '9'];
 blocks[41] = ['A1', 'A2'];
 comments[41] = "Id Pregunta: 969. Ley 40/2015";
 preguntaids[41] = 969


//  Id pregunta: 989 Año de creación de pregunta: 2016
 questions[42]= "43)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[42]= new Array();
 choices[42][0] = "los Ministros y los Secretarios de Estado";
 choices[42][1] = "los Subsecretarios y Secretarios generales";
 choices[42][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[42][3] = "los Directores generales";
 answers[42] = 2;
 units[42] = ['4', '7', '8', '9'];
 blocks[42] = ['A1', 'A2'];
 comments[42] = "Id Pregunta: 989. Ley 40/2015";
 preguntaids[42] = 989


//  Id pregunta: 982 Año de creación de pregunta: 2016
 questions[43]= "44)  El articulo 55 de la ley 40/2015 se&ntilde;ala que salvo las excepciones previstas por esta ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[43]= new Array();
 choices[43][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[43][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[43][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[43][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[43] = 0;
 units[43] = ['4', '7', '8', '9'];
 blocks[43] = ['A1', 'A2'];
 comments[43] = "Id Pregunta: 982. Ley 40/2015";
 preguntaids[43] = 982


//  Id pregunta: 1003 Año de creación de pregunta: 2016
 questions[44]= "45)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[44]= new Array();
 choices[44][0] = "los Secretarios generales t&eacute;cnicos";
 choices[44][1] = "los Directores generales";
 choices[44][2] = "los Secretarios generales";
 choices[44][3] = "los Subsecretarios";
 answers[44] = 1;
 units[44] = ['4', '7', '8', '9'];
 blocks[44] = ['A1', 'A2'];
 comments[44] = "Id Pregunta: 1003. Ley 40/2015";
 preguntaids[44] = 1003


//  Id pregunta: 995 Año de creación de pregunta: 2016
 questions[45]= "46)  Segun la ley 40/2015 los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[45]= new Array();
 choices[45][0] = "los &oacute;rganos administrativos";
 choices[45][1] = "las entidades dependientes";
 choices[45][2] = "las unidades administrativas";
 choices[45][3] = "los servicios comunes";
 answers[45] = 2;
 units[45] = ['4', '7', '8', '9'];
 blocks[45] = ['A1', 'A2'];
 comments[45] = "Id Pregunta: 995. Ley 40/2015";
 preguntaids[45] = 995


//  Id pregunta: 1020 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[46]= new Array();
 choices[46][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[46][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[46][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[46][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[46] = 1;
 units[46] = ['4', '7', '8', '9'];
 blocks[46] = ['A1', 'A2'];
 comments[46] = "Id Pregunta: 1020. Ley 40/2015";
 preguntaids[46] = 1020


//  Id pregunta: 971 Año de creación de pregunta: 2016
 questions[47]= "48)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[47]= new Array();
 choices[47][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[47][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[47][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[47][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[47] = 2;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 971. Ley 40/2015";
 preguntaids[47] = 971


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[48]= "49)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[48]= new Array();
 choices[48][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[48][1] = "Tratarse de un acto no susceptible de recurso";
 choices[48][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[48][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[48] = 2;
 units[48] = ['8'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 257. Ley 39/2015";
 preguntaids[48] = 257


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[49]= "50)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[49]= new Array();
 choices[49][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[49][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[49][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[49][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[49] = 0;
 units[49] = ['8'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 256. Ley 39/2015";
 preguntaids[49] = 256


//  Id pregunta: 1026 Año de creación de pregunta: 2016
 questions[50]= "51)  La recusaci&oacute;n se plantear&aacute;...";
 choices[50]= new Array();
 choices[50][0] = "S&oacute;lo verbalmente";
 choices[50][1] = "S&oacute;lo por escrito";
 choices[50][2] = "Verbalmente o por escrito";
 choices[50][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[50] = 1;
 units[50] = ['4', '7', '8', '9'];
 blocks[50] = ['A1', 'A2'];
 comments[50] = "Id Pregunta: 1026. Ley 40/2015";
 preguntaids[50] = 1026


//  Id pregunta: 1006 Año de creación de pregunta: 2016
 questions[51]= "52)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[51]= new Array();
 choices[51][0] = "los Secretarios de Estado";
 choices[51][1] = "los Ministros";
 choices[51][2] = "los Subsecretarios";
 choices[51][3] = "los Secretarios generales";
 answers[51] = 2;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 1006. Ley 40/2015";
 preguntaids[51] = 1006


//  Id pregunta: 984 Año de creación de pregunta: 2016
 questions[52]= "53)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[52]= new Array();
 choices[52][0] = "los Subsecretarios y los Secretarios generales";
 choices[52][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[52][2] = "los Secretarios de Estado y los Directores generales";
 choices[52][3] = "los Ministros y los Secretarios de Estado";
 answers[52] = 3;
 units[52] = ['4', '7', '8', '9'];
 blocks[52] = ['A1', 'A2'];
 comments[52] = "Id Pregunta: 984. Ley 40/2015";
 preguntaids[52] = 984


//  Id pregunta: 997 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a las unidades administrativas del articulo 56 de la Ley 40/2015:";
 choices[53]= new Array();
 choices[53][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[53][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[53][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[53][3] = "ninguna es correcta";
 answers[53] = 1;
 units[53] = ['4', '7', '8', '9'];
 blocks[53] = ['A1', 'A2'];
 comments[53] = "Id Pregunta: 997. Ley 40/2015";
 preguntaids[53] = 997


//  Id pregunta: 1007 Año de creación de pregunta: 2016
 questions[54]= "55)  Los Subdirectores generales:";
 choices[54]= new Array();
 choices[54][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[54][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[54][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[54][3] = "todas son correctas";
 answers[54] = 1;
 units[54] = ['4', '7', '8', '9'];
 blocks[54] = ['A1', 'A2'];
 comments[54] = "Id Pregunta: 1007. Ley 40/2015";
 preguntaids[54] = 1007


//  Id pregunta: 981 Año de creación de pregunta: 2016
 questions[55]= "56)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n segun la ley 40/2015 a:";
 choices[55]= new Array();
 choices[55][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[55][1] = "el Consejo de Estado";
 choices[55][2] = "el Congreso";
 choices[55][3] = "las Cortes Generales";
 answers[55] = 0;
 units[55] = ['4', '7', '8', '9'];
 blocks[55] = ['A1', 'A2'];
 comments[55] = "Id Pregunta: 981. Ley 40/2015";
 preguntaids[55] = 981


//  Id pregunta: 992 Año de creación de pregunta: 2016
 questions[56]= "57)  De acuerdo a la ley 40/2015, los estatutos de los Organismos p&uacute;blicos son determinados por sus respectivos:";
 choices[56]= new Array();
 choices[56][0] = "&oacute;rganos superiores";
 choices[56][1] = "&oacute;rganos directivos";
 choices[56][2] = "&oacute;rganos superiores y directivos";
 choices[56][3] = "ninguna es correcta";
 answers[56] = 3;
 units[56] = ['4', '7', '8', '9'];
 blocks[56] = ['A1', 'A2'];
 comments[56] = "Id Pregunta: 992. Ley 40/2015";
 preguntaids[56] = 992


//  Id pregunta: 999 Año de creación de pregunta: 2016
 questions[57]= "58)  La organizaci&oacute;n en Departamentos ministeriales de la Administracion General del Estado no obsta a la existencia de:";
 choices[57]= new Array();
 choices[57][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[57][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[57][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[57][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[57] = 3;
 units[57] = ['4', '7', '8', '9'];
 blocks[57] = ['A1', 'A2'];
 comments[57] = "Id Pregunta: 999. Ley 40/2015";
 preguntaids[57] = 999


//  Id pregunta: 1008 Año de creación de pregunta: 2016
 questions[58]= "59)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[58]= new Array();
 choices[58][0] = "la capital del pa&iacute;s";
 choices[58][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[58][2] = "cada una de las provincias";
 choices[58][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[58] = 1;
 units[58] = ['4', '7', '8', '9'];
 blocks[58] = ['A1', 'A2'];
 comments[58] = "Id Pregunta: 1008. Ley 40/2015";
 preguntaids[58] = 1008


//  Id pregunta: 964 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[59]= new Array();
 choices[59][0] = "las previsiones de la ley 40/2015 y supletoriamente por su normativa espec&iacute;fica";
 choices[59][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la ley 40/2015";
 choices[59][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[59][3] = "exclusivamente por las previsiones de la ley 40/2015";
 answers[59] = 1;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 964. Ley 40/2015";
 preguntaids[59] = 964


//  Id pregunta: 965 Año de creación de pregunta: 2016
 questions[60]= "61)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[60]= new Array();
 choices[60][0] = "la Administraci&oacute;n General del Estado";
 choices[60][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[60][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[60][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[60] = 3;
 units[60] = ['4', '7', '8', '9'];
 blocks[60] = ['A1', 'A2'];
 comments[60] = "Id Pregunta: 965. Ley 40/2015";
 preguntaids[60] = 965


//  Id pregunta: 1016 Año de creación de pregunta: 2016
 questions[61]= "62)  Respecto a los servicios territoriales es correcto:";
 choices[61]= new Array();
 choices[61][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[61][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[61][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[61][3] = "ninguna es correcta";
 answers[61] = 0;
 units[61] = ['4', '7', '8', '9'];
 blocks[61] = ['A1', 'A2'];
 comments[61] = "Id Pregunta: 1016. Ley 40/2015";
 preguntaids[61] = 1016


//  Id pregunta: 1024 Año de creación de pregunta: 2016
 questions[62]= "63)  La recusaci&oacute;n pueden promoverla...";
 choices[62]= new Array();
 choices[62][0] = "Cualquier &oacute;rgano";
 choices[62][1] = "El interesado";
 choices[62][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[62][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[62] = 1;
 units[62] = ['4', '7', '8', '9'];
 blocks[62] = ['A1', 'A2'];
 comments[62] = "Id Pregunta: 1024. Ley 40/2015";
 preguntaids[62] = 1024


//  Id pregunta: 1001 Año de creación de pregunta: 2016
 questions[63]= "64)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[63]= new Array();
 choices[63][0] = "Director General";
 choices[63][1] = "Secretario general";
 choices[63][2] = "Subdirector general";
 choices[63][3] = "Subsecretario";
 answers[63] = 0;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 1001. Ley 40/2015";
 preguntaids[63] = 1001


//  Id pregunta: 1004 Año de creación de pregunta: 2016
 questions[64]= "65)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[64]= new Array();
 choices[64][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[64][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[64][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[64][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[64] = 1;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 1004. Ley 40/2015";
 preguntaids[64] = 1004


//  Id pregunta: 966 Año de creación de pregunta: 2016
 questions[65]= "66)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[65]= new Array();
 choices[65][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[65][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[65][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[65][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[65] = 2;
 units[65] = ['4', '7', '8', '9'];
 blocks[65] = ['A1', 'A2'];
 comments[65] = "Id Pregunta: 966. Ley 40/2015";
 preguntaids[65] = 966


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[66]= "67)  El recurso de alzada puede interponerse:";
 choices[66]= new Array();
 choices[66][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[66][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[66][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[66][3] = "Ante el Defensor del Pueblo";
 answers[66] = 1;
 units[66] = ['8'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 258. Ley 39/2015";
 preguntaids[66] = 258


//  Id pregunta: 980 Año de creación de pregunta: 2016
 questions[67]= "68)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3 de la ley 40/2015, as&iacute; como los de:";
 choices[67]= new Array();
 choices[67][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[67][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[67][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[67][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[67] = 2;
 units[67] = ['4', '7', '8', '9'];
 blocks[67] = ['A1', 'A2'];
 comments[67] = "Id Pregunta: 980. Ley 40/2015";
 preguntaids[67] = 980


//  Id pregunta: 973 Año de creación de pregunta: 2016
 questions[68]= "69)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[68]= new Array();
 choices[68][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[68][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[68][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[68][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[68] = 3;
 units[68] = ['4', '7', '8', '9'];
 blocks[68] = ['A1', 'A2'];
 comments[68] = "Id Pregunta: 973. Ley 40/2015";
 preguntaids[68] = 973


//  Id pregunta: 1017 Año de creación de pregunta: 2016
 questions[69]= "70)  Los Delegados del Gobierno en las Comunidades Autonomas (se&ntilde;ala la incorrecta):";
 choices[69]= new Array();
 choices[69][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[69][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[69][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[69][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[69] = 2;
 units[69] = ['4', '7', '8', '9'];
 blocks[69] = ['A1', 'A2'];
 comments[69] = "Id Pregunta: 1017. Ley 40/2015";
 preguntaids[69] = 1017


//  Id pregunta: 994 Año de creación de pregunta: 2016
 questions[70]= "71)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en la ley 40/2015, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[70]= new Array();
 choices[70][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[70][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[70][2] = "a y b son correctas";
 choices[70][3] = "a y b son incorrectas";
 answers[70] = 2;
 units[70] = ['4', '7', '8', '9'];
 blocks[70] = ['A1', 'A2'];
 comments[70] = "Id Pregunta: 994. Ley 40/2015";
 preguntaids[70] = 994


//  Id pregunta: 1028 Año de creación de pregunta: 2016
 questions[71]= "72)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[71]= new Array();
 choices[71][0] = "Cabr&aacute; recurso de alzada";
 choices[71][1] = "Cabr&aacute; el nuevo protesto";
 choices[71][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[71][3] = "No cabr&aacute; recurso alguno";
 answers[71] = 3;
 units[71] = ['4', '7', '8', '9'];
 blocks[71] = ['A1', 'A2'];
 comments[71] = "Id Pregunta: 1028. Ley 40/2015";
 preguntaids[71] = 1028


//  Id pregunta: 996 Año de creación de pregunta: 2016
 questions[72]= "73)  De acuerdo al articulo 56 de la ley 40/2015, las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[72]= new Array();
 choices[72][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[72][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[72][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[72][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[72] = 0;
 units[72] = ['4', '7', '8', '9'];
 blocks[72] = ['A1', 'A2'];
 comments[72] = "Id Pregunta: 996. Ley 40/2015";
 preguntaids[72] = 996


//  Id pregunta: 993 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la respuesta correcta en relacion a la Ley 40/2015:";
 choices[73]= new Array();
 choices[73][0] = "corresponde a los &oacute;rganos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[73][1] = "corresponde a los organos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[73][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[73][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[73] = 0;
 units[73] = ['4', '7', '8', '9'];
 blocks[73] = ['A1', 'A2'];
 comments[73] = "Id Pregunta: 993. Ley 40/2015";
 preguntaids[73] = 993


//  Id pregunta: 1014 Año de creación de pregunta: 2016
 questions[74]= "75)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[74]= new Array();
 choices[74][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[74][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[74][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[74][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[74] = 0;
 units[74] = ['4', '7', '8', '9'];
 blocks[74] = ['A1', 'A2'];
 comments[74] = "Id Pregunta: 1014. Ley 40/2015";
 preguntaids[74] = 1014


