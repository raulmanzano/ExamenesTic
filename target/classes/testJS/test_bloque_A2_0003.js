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
//  Id pregunta: 989 Año de creación de pregunta: 2016
 questions[0]= "1)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[0]= new Array();
 choices[0][0] = "los Ministros y los Secretarios de Estado";
 choices[0][1] = "los Subsecretarios y Secretarios generales";
 choices[0][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[0][3] = "los Directores generales";
 answers[0] = 2;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 989. Ley 40/2015";
 preguntaids[0] = 989


//  Id pregunta: 1022 Año de creación de pregunta: 2016
 questions[1]= "2)  Segun la ley 40/2015 podr&aacute;n ordenarle al funcionario que se abstenga de toda intervenci&oacute;n en el expediente por causa de abstenci&oacute;n...";
 choices[1]= new Array();
 choices[1][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[1][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[1][2] = "Los interesados en el procedimiento";
 choices[1][3] = "Las alternativas b) y c) son correctas";
 answers[1] = 1;
 units[1] = ['4', '7', '8', '9'];
 blocks[1] = ['A1', 'A2'];
 comments[1] = "Id Pregunta: 1022. Ley 40/2015";
 preguntaids[1] = 1022


//  Id pregunta: 1026 Año de creación de pregunta: 2016
 questions[2]= "3)  La recusaci&oacute;n se plantear&aacute;...";
 choices[2]= new Array();
 choices[2][0] = "S&oacute;lo verbalmente";
 choices[2][1] = "S&oacute;lo por escrito";
 choices[2][2] = "Verbalmente o por escrito";
 choices[2][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[2] = 1;
 units[2] = ['4', '7', '8', '9'];
 blocks[2] = ['A1', 'A2'];
 comments[2] = "Id Pregunta: 1026. Ley 40/2015";
 preguntaids[2] = 1026


//  Id pregunta: 1033 Año de creación de pregunta: 2016
 questions[3]= "4)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[3]= new Array();
 choices[3][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[3][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[3][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[3][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[3] = 2;
 units[3] = ['4', '7', '8', '9'];
 blocks[3] = ['A1', 'A2'];
 comments[3] = "Id Pregunta: 1033. Ley 40/2015";
 preguntaids[3] = 1033


//  Id pregunta: 985 Año de creación de pregunta: 2016
 questions[4]= "5)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[4]= new Array();
 choices[4][0] = "los Subsecretarios y Secretarios generales";
 choices[4][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[4][2] = "los Secretarios de Estado";
 choices[4][3] = "los Subdirectores generales";
 answers[4] = 2;
 units[4] = ['4', '7', '8', '9'];
 blocks[4] = ['A1', 'A2'];
 comments[4] = "Id Pregunta: 985. Ley 40/2015";
 preguntaids[4] = 985


//  Id pregunta: 1031 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta en relacion a la competencia de los organos de las administraciones publicas:";
 choices[5]= new Array();
 choices[5][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[5][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[5][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[5][3] = "Todas son correctas.";
 answers[5] = 0;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 1031. Ley 40/2015";
 preguntaids[5] = 1031


//  Id pregunta: 1029 Año de creación de pregunta: 2016
 questions[6]= "7)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[6]= new Array();
 choices[6][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[6][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[6][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[6][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[6] = 0;
 units[6] = ['4', '7', '8', '9'];
 blocks[6] = ['A1', 'A2'];
 comments[6] = "Id Pregunta: 1029. Ley 40/2015";
 preguntaids[6] = 1029


//  Id pregunta: 1021 Año de creación de pregunta: 2016
 questions[7]= "8)  De acuerdo a la ley 40/2015 debe abstenerse de intervenir en el procedimiento el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[7]= new Array();
 choices[7][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[7][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[7][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[7][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[7] = 3;
 units[7] = ['4', '7', '8', '9'];
 blocks[7] = ['A1', 'A2'];
 comments[7] = "Id Pregunta: 1021. Ley 40/2015";
 preguntaids[7] = 1021


//  Id pregunta: 987 Año de creación de pregunta: 2016
 questions[8]= "9)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[8]= new Array();
 choices[8][0] = "Subsecretario";
 choices[8][1] = "Subdirector general";
 choices[8][2] = "Secretario de Estado";
 choices[8][3] = "ninguna es correcta";
 answers[8] = 0;
 units[8] = ['4', '7', '8', '9'];
 blocks[8] = ['A1', 'A2'];
 comments[8] = "Id Pregunta: 987. Ley 40/2015";
 preguntaids[8] = 987


//  Id pregunta: 1023 Año de creación de pregunta: 2016
 questions[9]= "10)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[9]= new Array();
 choices[9][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[9][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[9][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[9][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[9] = 0;
 units[9] = ['4', '7', '8', '9'];
 blocks[9] = ['A1', 'A2'];
 comments[9] = "Id Pregunta: 1023. Ley 40/2015";
 preguntaids[9] = 1023


//  Id pregunta: 996 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo al articulo 56 de la ley 40/2015, las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[10]= new Array();
 choices[10][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[10][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[10][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[10][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[10] = 0;
 units[10] = ['4', '7', '8', '9'];
 blocks[10] = ['A1', 'A2'];
 comments[10] = "Id Pregunta: 996. Ley 40/2015";
 preguntaids[10] = 996


//  Id pregunta: 998 Año de creación de pregunta: 2016
 questions[11]= "12)  La Administraci&oacute;n General del Estado se organiza:";
 choices[11]= new Array();
 choices[11][0] = "en Ministerios";
 choices[11][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[11][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[11][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[11] = 1;
 units[11] = ['4', '7', '8', '9'];
 blocks[11] = ['A1', 'A2'];
 comments[11] = "Id Pregunta: 998. Ley 40/2015";
 preguntaids[11] = 998


//  Id pregunta: 1034 Año de creación de pregunta: 2016
 questions[12]= "13)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[12]= new Array();
 choices[12][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[12][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[12][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[12][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[12] = 1;
 units[12] = ['4', '7', '8', '9'];
 blocks[12] = ['A1', 'A2'];
 comments[12] = "Id Pregunta: 1034. Ley 40/2015";
 preguntaids[12] = 1034


//  Id pregunta: 1285 Año de creación de pregunta: 2016
 questions[13]= "14)  De las siguientes opciones se&ntilde;alar cual forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:";
 choices[13]= new Array();
 choices[13][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[13][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[13][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica.";
 choices[13][3] = "Carta de servicios electr&oacute;nicos.";
 answers[13] = 1;
 units[13] = ['7'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 1285. ";
 preguntaids[13] = 1285


//  Id pregunta: 1971 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes NO es un requisito, que debe figurar en la solicitud de iniciaci&oacute;n de un procedimiento administrativo?";
 choices[14]= new Array();
 choices[14][0] = "Hechos, razones y petici&oacute;n en que se concrete con toda claridad la solicitud.";
 choices[14][1] = "&Oacute;rgano, centro o unidad administrativa a la que se dirige.";
 choices[14][2] = "Domicilio profesional a efectos de notificaciones.";
 choices[14][3] = "Firma del solicitante o acreditaci&oacute;n de la autenticidad de su voluntad expresada por cualquier medio.";
 answers[14] = 2;
 units[14] = ['7'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 1971. ";
 preguntaids[14] = 1971


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[15]= "16)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[15]= new Array();
 choices[15][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[15][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[15][2] = "A y B son correctas.";
 choices[15][3] = "A y B son incorrectas.";
 answers[15] = 2;
 units[15] = ['4', '7', '8', '9'];
 blocks[15] = ['A1', 'A2'];
 comments[15] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[15] = 1040


//  Id pregunta: 1008 Año de creación de pregunta: 2016
 questions[16]= "17)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[16]= new Array();
 choices[16][0] = "la capital del pa&iacute;s";
 choices[16][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[16][2] = "cada una de las provincias";
 choices[16][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[16] = 1;
 units[16] = ['4', '7', '8', '9'];
 blocks[16] = ['A1', 'A2'];
 comments[16] = "Id Pregunta: 1008. Ley 40/2015";
 preguntaids[16] = 1008


//  Id pregunta: 995 Año de creación de pregunta: 2016
 questions[17]= "18)  Segun la ley 40/2015 los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[17]= new Array();
 choices[17][0] = "los &oacute;rganos administrativos";
 choices[17][1] = "las entidades dependientes";
 choices[17][2] = "las unidades administrativas";
 choices[17][3] = "los servicios comunes";
 answers[17] = 2;
 units[17] = ['4', '7', '8', '9'];
 blocks[17] = ['A1', 'A2'];
 comments[17] = "Id Pregunta: 995. Ley 40/2015";
 preguntaids[17] = 995


//  Id pregunta: 1014 Año de creación de pregunta: 2016
 questions[18]= "19)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[18][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[18][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[18][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[18] = 0;
 units[18] = ['4', '7', '8', '9'];
 blocks[18] = ['A1', 'A2'];
 comments[18] = "Id Pregunta: 1014. Ley 40/2015";
 preguntaids[18] = 1014


//  Id pregunta: 1025 Año de creación de pregunta: 2016
 questions[19]= "20)  La recusaci&oacute;n se plantea...";
 choices[19]= new Array();
 choices[19][0] = "Antes de iniciado el procedimiento";
 choices[19][1] = "Una vez iniciado el procedimiento";
 choices[19][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[19][3] = "En cualquier momento del procedimiento";
 answers[19] = 3;
 units[19] = ['4', '7', '8', '9'];
 blocks[19] = ['A1', 'A2'];
 comments[19] = "Id Pregunta: 1025. Ley 40/2015";
 preguntaids[19] = 1025


//  Id pregunta: 1006 Año de creación de pregunta: 2016
 questions[20]= "21)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[20]= new Array();
 choices[20][0] = "los Secretarios de Estado";
 choices[20][1] = "los Ministros";
 choices[20][2] = "los Subsecretarios";
 choices[20][3] = "los Secretarios generales";
 answers[20] = 2;
 units[20] = ['4', '7', '8', '9'];
 blocks[20] = ['A1', 'A2'];
 comments[20] = "Id Pregunta: 1006. Ley 40/2015";
 preguntaids[20] = 1006


//  Id pregunta: 1007 Año de creación de pregunta: 2016
 questions[21]= "22)  Los Subdirectores generales:";
 choices[21]= new Array();
 choices[21][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[21][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[21][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[21][3] = "todas son correctas";
 answers[21] = 1;
 units[21] = ['4', '7', '8', '9'];
 blocks[21] = ['A1', 'A2'];
 comments[21] = "Id Pregunta: 1007. Ley 40/2015";
 preguntaids[21] = 1007


//  Id pregunta: 983 Año de creación de pregunta: 2016
 questions[22]= "23)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[22]= new Array();
 choices[22][0] = "la organizaci&oacute;n central, que integra los Ministerios y los servicios comunes";
 choices[22][1] = "la Organizaci&oacute;n Territorial";
 choices[22][2] = "la Organizaci&oacute;n sectorial";
 choices[22][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[22] = 2;
 units[22] = ['4', '7', '8', '9'];
 blocks[22] = ['A1', 'A2'];
 comments[22] = "Id Pregunta: 983. Ley 40/2015";
 preguntaids[22] = 983


//  Id pregunta: 1004 Año de creación de pregunta: 2016
 questions[23]= "24)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[23]= new Array();
 choices[23][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[23][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[23][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[23][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[23] = 1;
 units[23] = ['4', '7', '8', '9'];
 blocks[23] = ['A1', 'A2'];
 comments[23] = "Id Pregunta: 1004. Ley 40/2015";
 preguntaids[23] = 1004


//  Id pregunta: 1024 Año de creación de pregunta: 2016
 questions[24]= "25)  La recusaci&oacute;n pueden promoverla...";
 choices[24]= new Array();
 choices[24][0] = "Cualquier &oacute;rgano";
 choices[24][1] = "El interesado";
 choices[24][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[24][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[24] = 1;
 units[24] = ['4', '7', '8', '9'];
 blocks[24] = ['A1', 'A2'];
 comments[24] = "Id Pregunta: 1024. Ley 40/2015";
 preguntaids[24] = 1024


//  Id pregunta: 988 Año de creación de pregunta: 2016
 questions[25]= "26)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[25]= new Array();
 choices[25][0] = "Subsecretario";
 choices[25][1] = "Subdirector general";
 choices[25][2] = "Secretario de Estado";
 choices[25][3] = "ninguna es correcta";
 answers[25] = 1;
 units[25] = ['4', '7', '8', '9'];
 blocks[25] = ['A1', 'A2'];
 comments[25] = "Id Pregunta: 988. Ley 40/2015";
 preguntaids[25] = 988


//  Id pregunta: 1970 Año de creación de pregunta: 2016
 questions[26]= "27)  Se consideran interesados en el procedimiento administrativo:";
 choices[26]= new Array();
 choices[26][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos y aquellos que, sin haber iniciado el procedimiento tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[26][1] = "Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales, en todo caso.";
 choices[26][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento, en todo caso, antes del tr&aacute;mite de audiencia.";
 choices[26][3] = "A Y C son verdaderas";
 answers[26] = 0;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 1970. ";
 preguntaids[26] = 1970


//  Id pregunta: 986 Año de creación de pregunta: 2016
 questions[27]= "28)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[27]= new Array();
 choices[27][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[27][1] = "los Subdelegados del Gobierno en las provincias";
 choices[27][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[27][3] = "a y b son correctas";
 answers[27] = 3;
 units[27] = ['4', '7', '8', '9'];
 blocks[27] = ['A1', 'A2'];
 comments[27] = "Id Pregunta: 986. Ley 40/2015";
 preguntaids[27] = 986


//  Id pregunta: 1030 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[28]= new Array();
 choices[28][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[28][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[28][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[28][3] = "Todas son correctas.";
 answers[28] = 3;
 units[28] = ['4', '7', '8', '9'];
 blocks[28] = ['A1', 'A2'];
 comments[28] = "Id Pregunta: 1030. Ley 40/2015";
 preguntaids[28] = 1030


//  Id pregunta: 1791 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la respuesta correcta. Con respecto a la Sede Electr&oacute;nica podemos decir qu&eacute;:";
 choices[29]= new Array();
 choices[29][0] = "La Sede Electr&oacute;nica debe estar accesible desde la p&aacute;gina principal de la web institucional de la Administraci&oacute;n P&uacute;blica correspondiente.";
 choices[29][1] = "En una Administraci&oacute;n P&uacute;blica cada &oacute;rgano de direcci&oacute;n (Ministerio, Conseller&iacute;a, Consejer&iacute;a) debe tener su propia sede electr&oacute;nica.";
 choices[29][2] = "Una vez constituida la sede electr&oacute;nica, los tablones de anuncios pueden ser sustituidos o complementados por la publicaci&oacute;n electr&oacute;nica en sede.";
 choices[29][3] = "Debe facilitar informaci&oacute;n de las oficinas de registro y atenci&oacute;n al ciudadano, de los &oacute;rganos de gobierno y el directorio de personal de la Administraci&oacute;n P&uacute;blica.";
 answers[29] = 2;
 units[29] = ['7'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 1791. ";
 preguntaids[29] = 1791


//  Id pregunta: 984 Año de creación de pregunta: 2016
 questions[30]= "31)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[30]= new Array();
 choices[30][0] = "los Subsecretarios y los Secretarios generales";
 choices[30][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[30][2] = "los Secretarios de Estado y los Directores generales";
 choices[30][3] = "los Ministros y los Secretarios de Estado";
 answers[30] = 3;
 units[30] = ['4', '7', '8', '9'];
 blocks[30] = ['A1', 'A2'];
 comments[30] = "Id Pregunta: 984. Ley 40/2015";
 preguntaids[30] = 984


//  Id pregunta: 1286 Año de creación de pregunta: 2016
 questions[31]= "32)  Un ciudadano tiene que iniciar varios procedimientos desde la misma sede electr&oacute;nica, &iquest;en qu&eacute; momento seg&uacute;n el Real Decreto 1671/2009 tiene que otorgar consentimiento para que se puedan recabar los datos o documentos que ya obran en poder de las AAPP?";
 choices[31]= new Array();
 choices[31][0] = "De forma espec&iacute;fica e individualizada para cada procedimiento.";
 choices[31][1] = "Una &uacute;nica vez al configurar su cuenta.";
 choices[31][2] = "Una vez para todos los documentos o datos que est&eacute;n en cada administraci&oacute;n.";
 choices[31][3] = "No es posible otorgar ese consentimiento y tiene que presentar el mismo todos los documentos.";
 answers[31] = 0;
 units[31] = ['7'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 1286. ";
 preguntaids[31] = 1286


//  Id pregunta: 1017 Año de creación de pregunta: 2016
 questions[32]= "33)  Los Delegados del Gobierno en las Comunidades Autonomas (se&ntilde;ala la incorrecta):";
 choices[32]= new Array();
 choices[32][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[32][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[32][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[32][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[32] = 2;
 units[32] = ['4', '7', '8', '9'];
 blocks[32] = ['A1', 'A2'];
 comments[32] = "Id Pregunta: 1017. Ley 40/2015";
 preguntaids[32] = 1017


//  Id pregunta: 1013 Año de creación de pregunta: 2016
 questions[33]= "34)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[33]= new Array();
 choices[33][0] = "por Real Decreto";
 choices[33][1] = "reglamentariamente";
 choices[33][2] = "mediante Ley";
 choices[33][3] = "ninguna es correcta";
 answers[33] = 1;
 units[33] = ['4', '7', '8', '9'];
 blocks[33] = ['A1', 'A2'];
 comments[33] = "Id Pregunta: 1013. Ley 40/2015";
 preguntaids[33] = 1013


//  Id pregunta: 1009 Año de creación de pregunta: 2016
 questions[34]= "35)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[34]= new Array();
 choices[34][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[34][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[34][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[34][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[34] = 2;
 units[34] = ['4', '7', '8', '9'];
 blocks[34] = ['A1', 'A2'];
 comments[34] = "Id Pregunta: 1009. Ley 40/2015";
 preguntaids[34] = 1009


//  Id pregunta: 1972 Año de creación de pregunta: 2016
 questions[35]= "36)  Podr&aacute;n ser medios de prueba en un procedimiento administrativo:";
 choices[35]= new Array();
 choices[35][0] = "Exclusivamente aquellos que se contengan en medios escritos y ordinarios.";
 choices[35][1] = "Los hachos relevantes para la decisi&oacute;n de un procedimiento podr&aacute;n acreditarse por cualquier medio de prueba admisible en derecho.";
 choices[35][2] = "Cualquier hecho acaecido en el procedimiento podr&aacute; acreditarse por un medio da prueba admisible en derecho.";
 choices[35][3] = "Todas las respuestas anteriores son incorrectas.";
 answers[35] = 1;
 units[35] = ['7'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 1972. ";
 preguntaids[35] = 1972


//  Id pregunta: 1037 Año de creación de pregunta: 2016
 questions[36]= "37)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[36]= new Array();
 choices[36][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[36][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[36][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[36][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[36] = 0;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 1037. Ley 40/2015";
 preguntaids[36] = 1037


//  Id pregunta: 999 Año de creación de pregunta: 2016
 questions[37]= "38)  La organizaci&oacute;n en Departamentos ministeriales de la Administracion General del Estado no obsta a la existencia de:";
 choices[37]= new Array();
 choices[37][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[37][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[37][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[37][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[37] = 3;
 units[37] = ['4', '7', '8', '9'];
 blocks[37] = ['A1', 'A2'];
 comments[37] = "Id Pregunta: 999. Ley 40/2015";
 preguntaids[37] = 999


//  Id pregunta: 1028 Año de creación de pregunta: 2016
 questions[38]= "39)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[38]= new Array();
 choices[38][0] = "Cabr&aacute; recurso de alzada";
 choices[38][1] = "Cabr&aacute; el nuevo protesto";
 choices[38][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[38][3] = "No cabr&aacute; recurso alguno";
 answers[38] = 3;
 units[38] = ['4', '7', '8', '9'];
 blocks[38] = ['A1', 'A2'];
 comments[38] = "Id Pregunta: 1028. Ley 40/2015";
 preguntaids[38] = 1028


//  Id pregunta: 1039 Año de creación de pregunta: 2016
 questions[39]= "40)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[39]= new Array();
 choices[39][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[39][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[39][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[39][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[39] = 2;
 units[39] = ['4', '7', '8', '9'];
 blocks[39] = ['A1', 'A2'];
 comments[39] = "Id Pregunta: 1039. Ley 40/2015";
 preguntaids[39] = 1039


//  Id pregunta: 1020 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[40]= new Array();
 choices[40][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[40][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[40][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[40][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[40] = 1;
 units[40] = ['4', '7', '8', '9'];
 blocks[40] = ['A1', 'A2'];
 comments[40] = "Id Pregunta: 1020. Ley 40/2015";
 preguntaids[40] = 1020


//  Id pregunta: 990 Año de creación de pregunta: 2016
 questions[41]= "42)  De acuerdo al articulo 55 de la ley 40/2015, tienen la condici&oacute;n de alto cargo los siguientes organos de la organizacion central de la Administracion general del Estado:";
 choices[41]= new Array();
 choices[41][0] = "los &oacute;rganos superiores";
 choices[41][1] = "los &oacute;rganos superiores y directivos";
 choices[41][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[41][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[41] = 2;
 units[41] = ['4', '7', '8', '9'];
 blocks[41] = ['A1', 'A2'];
 comments[41] = "Id Pregunta: 990. Ley 40/2015";
 preguntaids[41] = 990


//  Id pregunta: 991 Año de creación de pregunta: 2016
 questions[42]= "43)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[42]= new Array();
 choices[42][0] = "un &oacute;rgano superior";
 choices[42][1] = "un &oacute;rgano directivo";
 choices[42][2] = "un &oacute;rgano superior o directivo";
 choices[42][3] = "ninguna es correcta";
 answers[42] = 2;
 units[42] = ['4', '7', '8', '9'];
 blocks[42] = ['A1', 'A2'];
 comments[42] = "Id Pregunta: 991. Ley 40/2015";
 preguntaids[42] = 991


//  Id pregunta: 1043 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la respuesta falsa en relacion a las transmisiones de datos ente Administraciones Publicas (art 155 ley 40/2015):";
 choices[43]= new Array();
 choices[43][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[43][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[43][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[43][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[43] = 2;
 units[43] = ['4', '7', '8', '9'];
 blocks[43] = ['A1', 'A2'];
 comments[43] = "Id Pregunta: 1043. Ley 40/2015";
 preguntaids[43] = 1043


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


//  Id pregunta: 1002 Año de creación de pregunta: 2016
 questions[45]= "46)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[45]= new Array();
 choices[45][0] = "Subgrupo A1";
 choices[45][1] = "Subgrupo A2";
 choices[45][2] = "Subgrupo B";
 choices[45][3] = "Subgrupo C1";
 answers[45] = 0;
 units[45] = ['4', '7', '8', '9'];
 blocks[45] = ['A1', 'A2'];
 comments[45] = "Id Pregunta: 1002. Ley 40/2015";
 preguntaids[45] = 1002


//  Id pregunta: 1011 Año de creación de pregunta: 2016
 questions[46]= "47)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "en cada Comunidad Aut&oacute;noma";
 choices[46][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[46][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[46][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[46] = 1;
 units[46] = ['4', '7', '8', '9'];
 blocks[46] = ['A1', 'A2'];
 comments[46] = "Id Pregunta: 1011. Ley 40/2015";
 preguntaids[46] = 1011


//  Id pregunta: 1016 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a los servicios territoriales es correcto:";
 choices[47]= new Array();
 choices[47][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[47][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[47][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[47][3] = "ninguna es correcta";
 answers[47] = 0;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 1016. Ley 40/2015";
 preguntaids[47] = 1016


//  Id pregunta: 1012 Año de creación de pregunta: 2016
 questions[48]= "49)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[48]= new Array();
 choices[48][0] = "la poblaci&oacute;n del territorio";
 choices[48][1] = "el volumen de gesti&oacute;n";
 choices[48][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[48][3] = "todas son correctas";
 answers[48] = 3;
 units[48] = ['4', '7', '8', '9'];
 blocks[48] = ['A1', 'A2'];
 comments[48] = "Id Pregunta: 1012. Ley 40/2015";
 preguntaids[48] = 1012


//  Id pregunta: 1042 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[49]= new Array();
 choices[49][0] = "Conferencia de Presidentes.";
 choices[49][1] = "Convenios de colaboraci&oacute;n.";
 choices[49][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[49][3] = "Conferencias Sectoriales.";
 answers[49] = 0;
 units[49] = ['4', '7', '8', '9'];
 blocks[49] = ['A1', 'A2'];
 comments[49] = "Id Pregunta: 1042. Ley 40/2015";
 preguntaids[49] = 1042


//  Id pregunta: 1044 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la respuesta correcta:";
 choices[50]= new Array();
 choices[50][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[50][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[50][2] = "A y B son correctas.";
 choices[50][3] = "A y B son falsas.";
 answers[50] = 2;
 units[50] = ['4', '7', '8', '9'];
 blocks[50] = ['A1', 'A2'];
 comments[50] = "Id Pregunta: 1044. Ley 40/2015";
 preguntaids[50] = 1044


//  Id pregunta: 993 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta correcta en relacion a la Ley 40/2015:";
 choices[51]= new Array();
 choices[51][0] = "corresponde a los &oacute;rganos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[51][1] = "corresponde a los organos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[51][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[51][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[51] = 0;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 993. Ley 40/2015";
 preguntaids[51] = 993


//  Id pregunta: 1975 Año de creación de pregunta: 2016
 questions[52]= "53)  Son causas de nulidad de los contratos de las Administraciones P&uacute;blicas:";
 choices[52]= new Array();
 choices[52][0] = "La invalidez de alguno de sus actos preparatorios por concurrir en los mismos alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[52][1] = "La nulidad de un acto que no sea preparatorio del contrato.";
 choices[52][2] = "La invalidez de la adjudicaci&oacute;n por concurrir en la misma alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[52][3] = "Las respuestas a) y c) son correctas.";
 answers[52] = 3;
 units[52] = ['10'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 1975. ";
 preguntaids[52] = 1975


//  Id pregunta: 1019 Año de creación de pregunta: 2016
 questions[53]= "54)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado, la suplencia del Delegado del Gobierno corresponder&aacute; a:";
 choices[53]= new Array();
 choices[53][0] = "el Secretario General";
 choices[53][1] = "el Subdirector General";
 choices[53][2] = "el Secretario de Estado";
 choices[53][3] = "ninguna es correcta";
 answers[53] = 0;
 units[53] = ['4', '7', '8', '9'];
 blocks[53] = ['A1', 'A2'];
 comments[53] = "Id Pregunta: 1019. Ley 40/2015";
 preguntaids[53] = 1019


//  Id pregunta: 1015 Año de creación de pregunta: 2016
 questions[54]= "55)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[54]= new Array();
 choices[54][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[54][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[54][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[54][3] = "ninguna es correcta";
 answers[54] = 2;
 units[54] = ['4', '7', '8', '9'];
 blocks[54] = ['A1', 'A2'];
 comments[54] = "Id Pregunta: 1015. Ley 40/2015";
 preguntaids[54] = 1015


//  Id pregunta: 992 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo a la ley 40/2015, los estatutos de los Organismos p&uacute;blicos son determinados por sus respectivos:";
 choices[55]= new Array();
 choices[55][0] = "&oacute;rganos superiores";
 choices[55][1] = "&oacute;rganos directivos";
 choices[55][2] = "&oacute;rganos superiores y directivos";
 choices[55][3] = "ninguna es correcta";
 answers[55] = 3;
 units[55] = ['4', '7', '8', '9'];
 blocks[55] = ['A1', 'A2'];
 comments[55] = "Id Pregunta: 992. Ley 40/2015";
 preguntaids[55] = 992


//  Id pregunta: 1796 Año de creación de pregunta: 2016
 questions[56]= "57)  Al realizar una presentaci&oacute;n telem&aacute;tica en un registro electr&oacute;nico, el registro electr&oacute;nico recibe la documentaci&oacute;n y genera un recibo para el ciudadano. Este recibo va firmado electr&oacute;nicamente por la administraci&oacute;n mediante un certificado de:";
 choices[56]= new Array();
 choices[56][0] = "Sede Electr&oacute;nica";
 choices[56][1] = "Empleado P&uacute;blico";
 choices[56][2] = "De Componente";
 choices[56][3] = "Sello electr&oacute;nico o sello de &oacute;rgano";
 answers[56] = 3;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 1796. ";
 preguntaids[56] = 1796


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[57]= "58)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[57]= new Array();
 choices[57][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[57][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[57][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[57][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[57] = 2;
 units[57] = ['7'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 1062. ";
 preguntaids[57] = 1062


//  Id pregunta: 1661 Año de creación de pregunta: 2016
 questions[58]= "59)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica depende de:";
 choices[58]= new Array();
 choices[58][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[58][1] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[58][2] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[58][3] = "Presidencia del Gobierno.";
 answers[58] = 0;
 units[58] = ['7'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 1661. ";
 preguntaids[58] = 1661


//  Id pregunta: 1000 Año de creación de pregunta: 2016
 questions[59]= "60)  Los Secretarios generales t&eacute;cnicos:";
 choices[59]= new Array();
 choices[59][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[59][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[59][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[59][3] = "todas son correctas";
 answers[59] = 3;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 1000. Ley 40/2015";
 preguntaids[59] = 1000


//  Id pregunta: 1010 Año de creación de pregunta: 2016
 questions[60]= "61)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[60]= new Array();
 choices[60][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[60][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[60][2] = "el Ministerio del Interior";
 choices[60][3] = "la Administraci&oacute;n General del Estado";
 answers[60] = 0;
 units[60] = ['4', '7', '8', '9'];
 blocks[60] = ['A1', 'A2'];
 comments[60] = "Id Pregunta: 1010. Ley 40/2015";
 preguntaids[60] = 1010


//  Id pregunta: 1045 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[61]= new Array();
 choices[61][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[61][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[61][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[61][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[61] = 0;
 units[61] = ['4', '7', '8', '9'];
 blocks[61] = ['A1', 'A2'];
 comments[61] = "Id Pregunta: 1045. Ley 40/2015";
 preguntaids[61] = 1045


//  Id pregunta: 1001 Año de creación de pregunta: 2016
 questions[62]= "63)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[62]= new Array();
 choices[62][0] = "Director General";
 choices[62][1] = "Secretario general";
 choices[62][2] = "Subdirector general";
 choices[62][3] = "Subsecretario";
 answers[62] = 0;
 units[62] = ['4', '7', '8', '9'];
 blocks[62] = ['A1', 'A2'];
 comments[62] = "Id Pregunta: 1001. Ley 40/2015";
 preguntaids[62] = 1001


//  Id pregunta: 1289 Año de creación de pregunta: 2016
 questions[63]= "64)  EI certificado de sede electr&oacute;nica, seg&uacute;n se establece en el Real Decreto 1671/2009:";
 choices[63]= new Array();
 choices[63][0] = "Identifica la sede y permite la firma electr&oacute;nica de documentos y tramites.";
 choices[63][1] = "Identifica la sede y permite a firma electr&oacute;nica de documentos.";
 choices[63][2] = "Identifica la sede, quedando excluida su aplicaci&oacute;n para la firma electr&oacute;nica de documentos y tramites,";
 choices[63][3] = "Identifica la sede y permite la firma electr&oacute;nica de tr&aacute;mites.";
 answers[63] = 2;
 units[63] = ['7'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 1289. ";
 preguntaids[63] = 1289


//  Id pregunta: 994 Año de creación de pregunta: 2016
 questions[64]= "65)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en la ley 40/2015, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[64]= new Array();
 choices[64][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[64][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[64][2] = "a y b son correctas";
 choices[64][3] = "a y b son incorrectas";
 answers[64] = 2;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 994. Ley 40/2015";
 preguntaids[64] = 994


//  Id pregunta: 1005 Año de creación de pregunta: 2016
 questions[65]= "66)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[65]= new Array();
 choices[65][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[65][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[65][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[65][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[65] = 0;
 units[65] = ['4', '7', '8', '9'];
 blocks[65] = ['A1', 'A2'];
 comments[65] = "Id Pregunta: 1005. Ley 40/2015";
 preguntaids[65] = 1005


//  Id pregunta: 1018 Año de creación de pregunta: 2016
 questions[66]= "67)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[66]= new Array();
 choices[66][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[66][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[66][2] = "el Subdirector General que el Delegado designe";
 choices[66][3] = "el Secretario de Estado";
 answers[66] = 0;
 units[66] = ['4', '7', '8', '9'];
 blocks[66] = ['A1', 'A2'];
 comments[66] = "Id Pregunta: 1018. Ley 40/2015";
 preguntaids[66] = 1018


//  Id pregunta: 1038 Año de creación de pregunta: 2016
 questions[67]= "68)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[67]= new Array();
 choices[67][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano colegiado, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[67][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[67][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[67][3] = "Todas son correctas.";
 answers[67] = 1;
 units[67] = ['4', '7', '8', '9'];
 blocks[67] = ['A1', 'A2'];
 comments[67] = "Id Pregunta: 1038. Ley 40/2015";
 preguntaids[67] = 1038


//  Id pregunta: 1035 Año de creación de pregunta: 2016
 questions[68]= "69)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[68]= new Array();
 choices[68][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[68][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[68][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[68][3] = "Todas son correctas.";
 answers[68] = 3;
 units[68] = ['4', '7', '8', '9'];
 blocks[68] = ['A1', 'A2'];
 comments[68] = "Id Pregunta: 1035. Ley 40/2015";
 preguntaids[68] = 1035


//  Id pregunta: 1027 Año de creación de pregunta: 2016
 questions[69]= "70)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[69]= new Array();
 choices[69][0] = "Un d&iacute;a";
 choices[69][1] = "Dos d&iacute;as";
 choices[69][2] = "Tres d&iacute;as";
 choices[69][3] = "Cuatro d&iacute;as";
 answers[69] = 2;
 units[69] = ['4', '7', '8', '9'];
 blocks[69] = ['A1', 'A2'];
 comments[69] = "Id Pregunta: 1027. Ley 40/2015";
 preguntaids[69] = 1027


//  Id pregunta: 1974 Año de creación de pregunta: 2016
 questions[70]= "71)  Si un interesado quiere presentar una solicitud en el plazo previsto en un procedimiento:";
 choices[70]= new Array();
 choices[70][0] = "Podr&aacute; hacerlo, exclusivamente, en la sede del &oacute;rgano administrativo al que se dirija.";
 choices[70][1] = "Podr&aacute; hacerlo en las representaciones diplom&aacute;ticas u oficinas consulares de Espa&ntilde;a en el extranjero.";
 choices[70][2] = "Podr&aacute; hacerlo en las oficinas de correos en la forma que reglamentariamente se establezca.";
 choices[70][3] = "B Y C son verdaderas.";
 answers[70] = 3;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 1974. ";
 preguntaids[70] = 1974


//  Id pregunta: 1041 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n (articulo 157 de la ley 40/2015):";
 choices[71]= new Array();
 choices[71][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[71][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[71][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[71][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[71] = 1;
 units[71] = ['4', '7', '8', '9'];
 blocks[71] = ['A1', 'A2'];
 comments[71] = "Id Pregunta: 1041. Ley 40/2015";
 preguntaids[71] = 1041


//  Id pregunta: 1036 Año de creación de pregunta: 2016
 questions[72]= "73)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[72]= new Array();
 choices[72][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[72][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[72][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[72][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[72] = 1;
 units[72] = ['4', '7', '8', '9'];
 blocks[72] = ['A1', 'A2'];
 comments[72] = "Id Pregunta: 1036. Ley 40/2015";
 preguntaids[72] = 1036


//  Id pregunta: 997 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a las unidades administrativas del articulo 56 de la Ley 40/2015:";
 choices[73]= new Array();
 choices[73][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[73][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[73][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[73][3] = "ninguna es correcta";
 answers[73] = 1;
 units[73] = ['4', '7', '8', '9'];
 blocks[73] = ['A1', 'A2'];
 comments[73] = "Id Pregunta: 997. Ley 40/2015";
 preguntaids[73] = 997


//  Id pregunta: 1032 Año de creación de pregunta: 2016
 questions[74]= "75)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[74]= new Array();
 choices[74][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[74][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[74][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[74][3] = "Todas son correctas.";
 answers[74] = 3;
 units[74] = ['4', '7', '8', '9'];
 blocks[74] = ['A1', 'A2'];
 comments[74] = "Id Pregunta: 1032. Ley 40/2015";
 preguntaids[74] = 1032


