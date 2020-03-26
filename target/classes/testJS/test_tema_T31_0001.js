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
//  Id pregunta: 2369 Año de creación de pregunta: 2004
 questions[0]= "1)  El presupuesto de un proyecto inform&aacute;tico nunca se calcula en base a:";
 choices[0]= new Array();
 choices[0][0] = "Aproximaciones lineales de proyectos diferentes";
 choices[0][1] = "Proyectos similares previos abordados por la organizaci&oacute;n";
 choices[0][2] = "Consultas a empresas significativas del mercado";
 choices[0][3] = "Costes separados de inversi&oacute;n en m&aacute;quinas, licencias de software y meses/hombre";
 answers[0] = 0;
 units[0] = ['31'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 2369. MAP-B 2003";
 preguntaids[0] = 2369


//  Id pregunta: 1476 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas NO se emplea en la planificaci&oacute;n de un sistema de la informaci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo PERT.";
 choices[1][1] = "Diagrama de Extrapolaci&oacute;n.";
 choices[1][2] = "M&eacute;todo CPM.";
 choices[1][3] = "Diagrama de Gantt.";
 answers[1] = 1;
 units[1] = ['31'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 1476. ";
 preguntaids[1] = 1476


//  Id pregunta: 8204 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[2]= new Array();
 choices[2][0] = "Diagrama de Extrapolaci&oacute;n";
 choices[2][1] = "PERT";
 choices[2][2] = "CPM";
 choices[2][3] = "El histograma de recursos";
 answers[2] = 0;
 units[2] = ['31'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 8204. Examen TIC A2 2010 interna";
 preguntaids[2] = 8204


//  Id pregunta: 9638 Año de creación de pregunta: 2014
 questions[3]= "4)  En relaci&oacute;n con los acuerdos de nivel de servicio, los m&aacute;s importante de cara al seguimiento de los contratos que subscribe la Administraci&oacute;n con los contratistas es que:";
 choices[3]= new Array();
 choices[3][0] = "Los Sindicatos revisen las cla&uacute;sulas del ANS";
 choices[3][1] = "El Contratista proporcione informaci&oacute;n mensual sobre las m&eacute;tricas del ANS";
 choices[3][2] = "Se imponga penalizaciones ejemplares cuando se detecte un incumplimiento en el ANS";
 choices[3][3] = "La Administraci&oacute;n disponga de m&eacute;tricas sobre los puntos acordados en el ANS que puedan ser evaluadas sin la intervenci&oacute;n del propio contratista, para evitar el fraude en dichas evaluaciones";
 answers[3] = 3;
 units[3] = ['31'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 9638. ";
 preguntaids[3] = 9638


//  Id pregunta: 9640 Año de creación de pregunta: 2014
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de los siguientes no puede considerarse un riesgo que puede limitar el &eacute;xito un proyecto de ingenier&iacute;a de software:";
 choices[4]= new Array();
 choices[4][0] = "Excesiva rotaci&oacute;n de personal en la division encargada del desarrollo";
 choices[4][1] = "Al servidor de Eclipse le falta un parche de seguridad y pueden atacarlo";
 choices[4][2] = "El cliente no habla nuestro idioma ni el ingl&eacute;s y tenemos un traductor no muy experto, a menudo hay confusi&oacute;n entre lo que nos pide y lo que entendemos.";
 choices[4][3] = "Se va a usar una tecnolog&iacute;a de desarrollo de la que apenas haya conocimiento y referencia de proyectos exitosos con la misma";
 answers[4] = 1;
 units[4] = ['31'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9640. ";
 preguntaids[4] = 9640


//  Id pregunta: 6911 Año de creación de pregunta: 2010
 questions[5]= "6)  El ADM (M&eacute;todo de diagramaci&oacute;n con flechas):";
 choices[5]= new Array();
 choices[5][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza casillas o rect&aacute;ngulos, denominados nodos, para representar actividades, que se conectan con flechas que muestran las dependencias.";
 choices[5][1] = "A y C son correctas.";
 choices[5][2] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza flechas para representar las actividades, que se conectan en nodos para mostrar sus dependencias.";
 choices[5][3] = "Ninguna de las anteriores es correcta";
 answers[5] = 2;
 units[5] = ['31'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 6911. ";
 preguntaids[5] = 6911


//  Id pregunta: 1776 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique cu&aacute;l de las siguientes es una raz&oacute;n com&uacute;n por la que los proyectos se exceden en presupuesto o en fechas:";
 choices[6]= new Array();
 choices[6][0] = "Coste de los especialistas de Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[6][1] = "Indisponibilidad de la &uacute;ltima tecnolog&iacute;a.";
 choices[6][2] = "Subestimaci&oacute;n del esfuerzo requerido.";
 choices[6][3] = "Falta de automatizaci&oacute;n de las herramientas de desarrollo.";
 answers[6] = 2;
 units[6] = ['31'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 1776. ";
 preguntaids[6] = 1776


//  Id pregunta: 2307 Año de creación de pregunta: 2002
 questions[7]= "8)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(3,12,21) y B( 6,15,30), la desviaci&oacute;n critica del proyecto ser&aacute;: ( Nota ActividadX(tpo_optimista, tpo_m&aacute;sProbable, tpo_pesimista))";
 choices[7]= new Array();
 choices[7][0] = "9";
 choices[7][1] = "5";
 choices[7][2] = "7";
 choices[7][3] = "4";
 answers[7] = 2;
 units[7] = ['31'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2307. DESVIACI&Oacute;N=(tpo_pesimista - tpo_optimista)/6";
 preguntaids[7] = 2307


//  Id pregunta: 2168 Año de creación de pregunta: 2002
 questions[8]= "9)  En las estrategias de negociaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "La estrategia de ganar-ganar es la que por lo general deja m&aacute;s satisfechos a las 2 partes";
 choices[8][1] = "La estrategia de perder-perder suele llevar a un equilibrio inestable que provoca que tarde o temprano tenga que volverse a retomar la negociaci&oacute;n";
 choices[8][2] = "Las 2 respuestas anteriores son correctas";
 choices[8][3] = "Ninguna de las respuestas anteriores son correctas";
 answers[8] = 2;
 units[8] = ['31'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2168. ";
 preguntaids[8] = 2168


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[9]= "10)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[9]= new Array();
 choices[9][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[9][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[9][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[9][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[9] = 0;
 units[9] = ['31'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 551. AGE A1 2015";
 preguntaids[9] = 551


//  Id pregunta: 2319 Año de creación de pregunta: 2002
 questions[10]= "11)  Utilizando el m&eacute;todo PERT y suponiendo un proyecto con una actividad con una duraci&oacute;n estimada optimista de 8 d&iacute;as, pesimista de 16 d&iacute;as y m&aacute;s probable de 9 d&iacute;as, &iquest;cu&aacute;l es el tiempo PERT o duraci&oacute;n esperada de dicha actividad?:";
 choices[10]= new Array();
 choices[10][0] = "12";
 choices[10][1] = "11";
 choices[10][2] = "10";
 choices[10][3] = "9";
 answers[10] = 2;
 units[10] = ['31'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2319. ";
 preguntaids[10] = 2319


//  Id pregunta: 6853 Año de creación de pregunta: 2010
 questions[11]= "12)  La gesti&oacute;n de los recursos humanos del proyecto incluye lo siguiente:";
 choices[11]= new Array();
 choices[11][0] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[11][1] = "Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[11][2] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto.";
 choices[11][3] = "Ninguna de las anteriores.";
 answers[11] = 0;
 units[11] = ['31'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 6853. ";
 preguntaids[11] = 6853


//  Id pregunta: 2149 Año de creación de pregunta: 2002
 questions[12]= "13)  En esencia, la partici&oacute;n descompone un problema en sus partes constituyentes:";
 choices[12]= new Array();
 choices[12][0] = "Incrementando los detalles, movi&eacute;ndonos verticalmente en la jerarqu&iacute;a";
 choices[12][1] = "Descomponiendo funcionalmente el problema, movi&eacute;ndonos horizontalmente en la jerarqu&iacute;a";
 choices[12][2] = "Las dos primeras respuestas son ciertas";
 choices[12][3] = "Las dos primeras respuestas son falsas";
 answers[12] = 2;
 units[12] = ['31'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 2149. ";
 preguntaids[12] = 2149


//  Id pregunta: 2256 Año de creación de pregunta: 2002
 questions[13]= "14)  Las t&eacute;cnicas de Gantt y Pert ayudan a:";
 choices[13]= new Array();
 choices[13][0] = "Fijar la duraci&oacute;n de cada etapa";
 choices[13][1] = "Estimar cu&aacute;l ser&aacute; la tarea cr&iacute;tica de un proyecto";
 choices[13][2] = "Estimar la duraci&oacute;n de un proyecto";
 choices[13][3] = "Estimar el costo de cada etapa";
 answers[13] = 2;
 units[13] = ['31'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2256. ";
 preguntaids[13] = 2256


//  Id pregunta: 10292 Año de creación de pregunta: 2015
 questions[14]= "15)  Las dependencias entre actividades en gesti&oacute;n de proyectos pueden ser (Seleccione la verdadera):";
 choices[14]= new Array();
 choices[14][0] = "Obligatorias y discrecionales";
 choices[14][1] = "Obligatorias, discrecionales y externas";
 choices[14][2] = "Obligatorias, discrecionales, externas e internas";
 choices[14][3] = "Obligatorias, discrecionales, externas, internas y sincronizadas.";
 answers[14] = 1;
 units[14] = ['31'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 10292. ";
 preguntaids[14] = 10292


//  Id pregunta: 10150 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;C&uacute;al de las siguientes opciones NO es un sistema de control de versiones?";
 choices[15]= new Array();
 choices[15][0] = "Subversion.";
 choices[15][1] = "Git";
 choices[15][2] = "Ruby.";
 choices[15][3] = "SourceSafe.";
 answers[15] = 2;
 units[15] = ['31'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 10150. Examen TIC A1 2014";
 preguntaids[15] = 10150


//  Id pregunta: 7179 Año de creación de pregunta: 2010
 questions[16]= "17)  Indique cu&aacute;l NO es una t&eacute;cnica de planificaci&oacute;n temporal:";
 choices[16]= new Array();
 choices[16][0] = "WBS (Work Breakdown Structure)";
 choices[16][1] = "PERT (Program Evaluation and Review Technique)";
 choices[16][2] = "Diagrama de Gantt";
 choices[16][3] = "CPM (Critical Path Method)";
 answers[16] = 0;
 units[16] = ['31'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 7179. Castilla La Mancha 2009";
 preguntaids[16] = 7179


//  Id pregunta: 6848 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Cu&aacute;les son los subsistemas que integran fundamentalmente la direcci&oacute;n de proyectos?";
 choices[17]= new Array();
 choices[17][0] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a, y cultura de la empresa.";
 choices[17][1] = "Planificaci&oacute;n, Organizaci&oacute;n, Control, Documentaci&oacute;n, Tecnolog&iacute;a y Cultura de la Empresa.";
 choices[17][2] = "Planificaci&oacute;n, gesti&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 choices[17][3] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 answers[17] = 0;
 units[17] = ['31'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 6848. ";
 preguntaids[17] = 6848


//  Id pregunta: 2310 Año de creación de pregunta: 2002
 questions[18]= "19)  Si una tarea dentro de un diagrama PERT excede su duraci&oacute;n en un tiempo:";
 choices[18]= new Array();
 choices[18][0] = "La duraci&oacute;n del camino cr&iacute;tico no variar&aacute;";
 choices[18][1] = "La duraci&oacute;n del camino cr&iacute;tico variar&aacute; en la misma magnitud";
 choices[18][2] = "No se puede afirmar qu&eacute; ocurrir&aacute; con la duraci&oacute;n del camino cr&iacute;tico";
 choices[18][3] = "Se necesita que otra tarea disminuya su duraci&oacute;n en la misma magnitud para que la duracci&oacute;n del proyecto no varie";
 answers[18] = 2;
 units[18] = ['31'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2310. ";
 preguntaids[18] = 2310


//  Id pregunta: 2393 Año de creación de pregunta: 2006
 questions[19]= "20)  El retraso de una actividad:";
 choices[19]= new Array();
 choices[19][0] = "supone un retraso siempre en el proyecto";
 choices[19][1] = "supondr&aacute; un retraso si no pertenece al camino cr&iacute;tico";
 choices[19][2] = "no supone retraso alguno si no pertenece al camino critico y la actividad no pasa a formar parte de este al alargar su duraci&oacute;n";
 choices[19][3] = "no supone retraso nunca";
 answers[19] = 2;
 units[19] = ['31'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2393. ";
 preguntaids[19] = 2393


//  Id pregunta: 2392 Año de creación de pregunta: 2006
 questions[20]= "21)  Entre las t&eacute;cnicas de control del avance de los proyectos cabe citar:";
 choices[20]= new Array();
 choices[20][0] = "Informes de avance peri&oacute;dicos";
 choices[20][1] = "Puntos de control al final de cada etapa";
 choices[20][2] = "a) y b) son ciertas";
 choices[20][3] = "a) y b) son falsas";
 answers[20] = 2;
 units[20] = ['31'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2392. ";
 preguntaids[20] = 2392


//  Id pregunta: 6359 Año de creación de pregunta: 2003
 questions[21]= "22)  &Eacute;tica del Auditor. Cuatro afirmaciones.- El Auditor sirve con diligencia, lealtad y honradez los intereses de empleados, accionistas, clientes y p&uacute;blico en general. No participar&aacute; en ninguna actividad ilegal o impropia- Garantiza la confidencialidad de la informaci&oacute;n obtenida en el ejercicio de sus funciones. No la usar&aacute; en beneficio propio, ni dejar&aacute; que llegue a terceros.- Evita actividades que pongan en entredicho su independencia.- Fomenta la formaci&oacute;n de los directivos de la empresa, sus clientes, incluso del p&uacute;blico en general, para que sepan de que va la Auditor&iacute;a y los Sistemas de Informaci&oacute;n";
 choices[21]= new Array();
 choices[21][0] = "Las tres primeras afirmaciones son correctas, la cuarta no";
 choices[21][1] = "Todas son correctas";
 choices[21][2] = "La cuarta es correcta, las otras tres son afirmaciones obvias";
 choices[21][3] = "Son correctas, pero de ellas no se desprende nada pr&aacute;ctico";
 answers[21] = 1;
 units[21] = ['31'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 6359. Examen 2006 JCYL";
 preguntaids[21] = 6359


//  Id pregunta: 7554 Año de creación de pregunta: 2010
 questions[22]= "23)  En su libro &laquo;La estructura de las organizaciones&raquo; Mintzberg describe las organizaciones matriciales y se&ntilde;ala diversos factores que las identifican. &iquest;Cu&aacute;l de los siguientes no corresponde a estos factores?";
 choices[22]= new Array();
 choices[22][0] = "Elevada tendencia a disgregar a los especialistas en unidades funcionales en lo que corresponde a asuntos internos.";
 choices[22][1] = "Estructura sumamente org&aacute;nica con escasa formalizaci&oacute;n del comportamiento.";
 choices[22][2] = "Elevada especializaci&oacute;n del puesto basada en una preparaci&oacute;n formal.";
 choices[22][3] = "Uso de dispositivos de enlace para fomentar la adaptaci&oacute;n mutua.";
 answers[22] = 0;
 units[22] = ['31'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 7554. Map 2005";
 preguntaids[22] = 7554


//  Id pregunta: 5755 Año de creación de pregunta: 2007
 questions[23]= "24)  &iquest;Cual de las siguientes t&eacute;cnicas NO es de gesti&oacute;n de proyectos?";
 choices[23]= new Array();
 choices[23][0] = "m&eacute;todo MARKII para el An&aacute;lisis de los Puntos Funci&oacute;n";
 choices[23][1] = "Diagrama de extrapolaci&oacute;n";
 choices[23][2] = "staffing size";
 choices[23][3] = "Joint Requirements Planning";
 answers[23] = 3;
 units[23] = ['31'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 5755. ";
 preguntaids[23] = 5755


//  Id pregunta: 2306 Año de creación de pregunta: 2002
 questions[24]= "25)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(2,4,6); B( 6,15,30); y C (4,7,16); la duraci&oacute;n prevista del proyecto ser&aacute;:( Nota ActividadX(tpo_optimista, tpo_m&aacute;sProbable, tpo_pesimista))";
 choices[24]= new Array();
 choices[24][0] = "26";
 choices[24][1] = "31";
 choices[24][2] = "28";
 choices[24][3] = "25";
 answers[24] = 2;
 units[24] = ['31'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2306. DURACI&Oacute;N= (tpo_optimista + tpo_pesimista + 4*tpo_probable)/6";
 preguntaids[24] = 2306


//  Id pregunta: 6910 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;En el PDM (Precedence Diagramming Method), cu&aacute;l es el tipo de relaci&oacute;n de precedencia m&aacute;s comunmente utilizado?";
 choices[25]= new Array();
 choices[25][0] = "Inicio a fin";
 choices[25][1] = "Final a inicio";
 choices[25][2] = "Final a final";
 choices[25][3] = "Inicio a inicio";
 answers[25] = 1;
 units[25] = ['31'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 6910. ";
 preguntaids[25] = 6910


//  Id pregunta: 2355 Año de creación de pregunta: 2004
 questions[26]= "27)  &iquest;Cu&aacute;l es la variable m&aacute;s importante en un modelo PERT?";
 choices[26]= new Array();
 choices[26][0] = "riesgo";
 choices[26][1] = "coste";
 choices[26][2] = "impacto";
 choices[26][3] = "tiempo";
 answers[26] = 3;
 units[26] = ['31'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2355. ";
 preguntaids[26] = 2355


//  Id pregunta: 6358 Año de creación de pregunta: 2003
 questions[27]= "28)  A ra&iacute;z del esc&aacute;ndalo ENRON se vio el problema de que la misma empresa realizara la Auditor&iacute;a y Consultor&iacute;a. Los Auditores a veces no &quot;contaban&quot; todo lo que ve&iacute;an porque las situaciones con las que se encontraban hab&iacute;an sido fruto del trabajo de sus compa&ntilde;eros consultores. La diferencia entre auditor y consultor era de lo m&aacute;s difuso (A veces eran los mismos). Cual de estas cuatro tesis es la correcta:";
 choices[27]= new Array();
 choices[27][0] = "En la Auditor&iacute;a Inform&aacute;tica el inter&eacute;s del cliente no es objeto del informe. Estamos hablando de una revisi&oacute;n, an&aacute;lisis, evaluaci&oacute;n orientada a describir una situaci&oacute;n. Es l&iacute;cito realizar una Auditor&iacute;a Inform&aacute;tica pensando en la Consultor&iacute;a que va a venir puesto que la detecci&oacute;n de un problema es la antesala de una propuesta de soluci&oacute;n";
 choices[27][1] = "En la Auditor&iacute;a Inform&aacute;tica hay que anteponer el inter&eacute;s del cliente al de los consultores. Una Auditor&iacute;a Inform&aacute;tica emite un informe escrito que resume una situaci&oacute;n desde un punto de vista independiente. No obstante las empresas son entes flexibles, por lo que la Auditor&iacute;a no debe cargar las tintas en problemas sencillos que se pueden arreglar con sencillas consultor&iacute;as hechas por los mismos auditores.";
 choices[27][2] = "En la Auditor&iacute;a Inform&aacute;tica hay que anteponer el inter&eacute;s del cliente al de los consultores. Una Auditor&iacute;a Inform&aacute;tica emite un informe escrito que resume una situaci&oacute;n desde un punto de vista independiente, mientras que una Consultor&iacute;a suele requerir mayor pronunciamiento y mejor definici&oacute;n de las soluciones.";
 choices[27][3] = "Auditor&iacute;a y Consultor&iacute;a deben estar perfectamente divididos, deben llevarla diferentes empresas y diferentes personas";
 answers[27] = 2;
 units[27] = ['31'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 6358. Examen 2006 JCYL";
 preguntaids[27] = 6358


//  Id pregunta: 2169 Año de creación de pregunta: 2002
 questions[28]= "29)  En las t&eacute;cnicas de negociaci&oacute;n y de resoluci&oacute;n de conflictos, el 'empowerment' consiste en:";
 choices[28]= new Array();
 choices[28][0] = "Potenciar el di&aacute;logo con reuniones peri&oacute;dicas";
 choices[28][1] = "Establecer una pauta a seguir como norma general indiscutible";
 choices[28][2] = "Dar poder a los subordinados para que se impliquen en la organizaci&oacute;n";
 choices[28][3] = "Nada de lo anterior es correcto";
 answers[28] = 2;
 units[28] = ['31'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2169. ";
 preguntaids[28] = 2169


//  Id pregunta: 10732 Año de creación de pregunta: 2015
 questions[29]= "30)  En relaci&oacute;n con las t&eacute;cnicas de planificaci&oacute;n de proyectos se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[29]= new Array();
 choices[29][0] = "Una diferencia entre PERT y CPM es que este &uacute;ltimo considera que los tiempos de las actividades se conocen en forma determin&iacute;stica y se pueden variar cambiando el nivel de recursos utilizados.";
 choices[29][1] = "PERT considera que cuando el n&uacute;mero de actividades de un proyecto es lo suficientemente elevado, la duraci&oacute;n del proyecto es una variable aleatoria que converge en una distribuci&oacute;n Normal.";
 choices[29][2] = "El diagrama de GANTT realiza la planificaci&oacute;n y la programaci&oacute;n al mismo tiempo.";
 choices[29][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[29] = 3;
 units[29] = ['31'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 10732. ";
 preguntaids[29] = 10732


//  Id pregunta: 10733 Año de creación de pregunta: 2015
 questions[30]= "31)  La duraci&oacute;n del camino m&aacute;s corto que hay desde el suceso inicial de un proyecto hasta el suceso &quot;n&quot; que se est&aacute; considerando es:";
 choices[30]= new Array();
 choices[30][0] = "EARLY del suceso &quot;n&quot;";
 choices[30][1] = "LAST del suceso &quot;n&quot;";
 choices[30][2] = "Tiempo de inicio del suceso &quot;n&quot;";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = 3;
 units[30] = ['31'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 10733. Conceptos PERT";
 preguntaids[30] = 10733


//  Id pregunta: 6850 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;En qu&eacute; fase del proyecto es mayor el nivel de coste y de personal?";
 choices[31]= new Array();
 choices[31][0] = "Al inicio del proyecto.";
 choices[31][1] = "Al final del proyecto.";
 choices[31][2] = "En las fases intermedias del proyecto.";
 choices[31][3] = "Tanto el coste como el personal debe ser homog&eacute;neo a lo largo del proyecto.";
 answers[31] = 2;
 units[31] = ['31'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 6850. ";
 preguntaids[31] = 6850


//  Id pregunta: 9639 Año de creación de pregunta: 2014
 questions[32]= "33)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[32]= new Array();
 choices[32][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[32][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[32][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[32][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[32] = 0;
 units[32] = ['31'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 9639. ";
 preguntaids[32] = 9639


//  Id pregunta: 9809 Año de creación de pregunta: 2015
 questions[33]= "34)  La creaci&oacute;n de una Estructura de Desglose del Trabajo (EDT) forma parte de:";
 choices[33]= new Array();
 choices[33][0] = "La gesti&oacute;n de tiempo del proyecto.";
 choices[33][1] = "La organizaci&oacute;n y definici&oacute;n del alcance total del proyecto.";
 choices[33][2] = "La gesti&oacute;n de riesgos del proyecto.";
 choices[33][3] = "La gesti&oacute;n de costes del proyecto.";
 answers[33] = 1;
 units[33] = ['31'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 9809. ";
 preguntaids[33] = 9809


//  Id pregunta: 10291 Año de creación de pregunta: 2015
 questions[34]= "35)  Seleccione la respuesta falsa respecto al m&eacute;todo de Diagramaci&oacute;n con Flechas (ADM)";
 choices[34]= new Array();
 choices[34][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma de un proyecto";
 choices[34][1] = "Utiliza Flechas para representar las actividades que se conectan en nodos";
 choices[34][2] = "Todas las actividades tienen que tener un valor de duraci&oacute;n mayor que cero";
 choices[34][3] = "Permite planificar qu&eacute; actividades dependen de la finalizaci&oacute;n de otras en un proyecto.";
 answers[34] = 2;
 units[34] = ['31'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 10291. ";
 preguntaids[34] = 10291


//  Id pregunta: 7709 Año de creación de pregunta: 2010
 questions[35]= "36)  En la planificaci&oacute;n de un proyecto representada por un diagrama de Pert, una actividad cr&iacute;tica es una actividad:";
 choices[35]= new Array();
 choices[35][0] = "Con un alto riesgo de incrementar su duraci&oacute;n.";
 choices[35][1] = "Con dependencia de otra actividad y de la que depende al menos una actividad.";
 choices[35][2] = "En el camino cr&iacute;tico.";
 choices[35][3] = "Cuya duraci&oacute;n no puede modificarse.";
 answers[35] = 2;
 units[35] = ['31'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 7709. Map 2007";
 preguntaids[35] = 7709


//  Id pregunta: 10731 Año de creación de pregunta: 2015
 questions[36]= "37)  Dada la actividad A(4,7,16) de un proyecto, se puede afirmar.";
 choices[36]= new Array();
 choices[36][0] = "Su duraci&oacute;n es de 8 d&iacute;as.";
 choices[36][1] = "Su holgura total es de 12.";
 choices[36][2] = "Su varianza es 2.";
 choices[36][3] = "Son correctas la a) y la c)";
 answers[36] = 0;
 units[36] = ['31'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 10731. Conceptos PERT";
 preguntaids[36] = 10731


//  Id pregunta: 10290 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de Capacidad y Madurez (CMM)?";
 choices[37]= new Array();
 choices[37][0] = "Repetible";
 choices[37][1] = "Verificado";
 choices[37][2] = "Gestionado";
 choices[37][3] = "Optimizado";
 answers[37] = 1;
 units[37] = ['31'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 10290. ";
 preguntaids[37] = 10290


//  Id pregunta: 2353 Año de creación de pregunta: 2003
 questions[38]= "39)  Los diagramas de Gantt o de tiempo son una t&eacute;cnica de:";
 choices[38]= new Array();
 choices[38][0] = "Gesti&oacute;n de proyectos";
 choices[38][1] = "Programaci&oacute;n orientada a objetos";
 choices[38][2] = "An&aacute;lisis diferencial de aplicaciones";
 choices[38][3] = "Programaci&oacute;n estructurada";
 answers[38] = 0;
 units[38] = ['31'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2353. ";
 preguntaids[38] = 2353


//  Id pregunta: 6913 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;C&oacute;mo se representan las relaciones &quot;ficticias&quot; en el M&eacute;todo de Diagramaci&oacute;n por Flechas (ADM)?";
 choices[39]= new Array();
 choices[39][0] = "Mediante una l&iacute;nea de puntos";
 choices[39][1] = "En ADM no existe el concepto de relaciones &quot;ficticias&quot;";
 choices[39][2] = "Mediante una flecha convexa";
 choices[39][3] = "Mediante una flecha c&oacute;ncava";
 answers[39] = 0;
 units[39] = ['31'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 6913. ";
 preguntaids[39] = 6913


//  Id pregunta: 8213 Año de creación de pregunta: 2011
 questions[40]= "41)  Indique cu&aacute;l es la respuesta correcta con respecto a los diagramas PERT:";
 choices[40]= new Array();
 choices[40][0] = "Los arcos del grafo representan los sucesos, y los v&eacute;rtices las actividades.";
 choices[40][1] = "En la matriz de encadenamientos aquellas columnas en las que no aparece ninguna X indican las actividades que no tienen ninguna actividad siguiente, es decir, aquellas actividades cuyo suceso final coincide con el suceso fin del proyecto.";
 choices[40][2] = "El cuadro de prelaciones est&eacute; formado por tres columnas En la primera columna est&aacute;n representadas todas las actividades en que se ha descompuesto el proyecto. En la segunda columna figuran las actividades precedentes de su hom&oacute;loga en la primera columna y en la &uacute;ltima columna se muestran las actividades posteriores.";
 choices[40][3] = "La matriz de encadenamientos consiste en una matriz cuadrada cuya dimensi&oacute;n es igual al n&uacute;mero de sucesos en que se ha descompuesto el proyecto.";
 answers[40] = 1;
 units[40] = ['31'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 8213. Examen TIC A2 2010 interna";
 preguntaids[40] = 8213


//  Id pregunta: 6357 Año de creación de pregunta: 2003
 questions[41]= "42)  La implantaci&oacute;n de controles es en &uacute;ltima instancia una responsabilidad de la direcci&oacute;n, si bien cada directivo en su &aacute;rea es corresponsable de la existencia de controles a su nivel. Luego la diferencia entre control y auditoria interna es:";
 choices[41]= new Array();
 choices[41][0] = "El control en inform&aacute;tica lo realizan los supervisores a diferentes niveles, Jefe de Servicio, Jefe de Proyecto, Jefe de Explotaci&oacute;n, mientras que los Auditores Internos deben asumir un papel bastante ingrato como es el de verificar si los trabajadores act&uacute;an de acuerdo a los est&aacute;ndares de explotaci&oacute;n y desarrollo.";
 choices[41][1] = "El control en inform&aacute;tica lo realizan supervisores nombrados por el jefe de Servicio al efecto, mientras que los Auditores internos realizan inspecciones sorpresa para ver si existen controles eficaces";
 choices[41][2] = "El control en inform&aacute;tica lo realizan los supervisores a diferentes niveles, Jefe de Servicio, Jefe de Proyecto, Jefe de Explotaci&oacute;n, mientras que los Auditores internos verifican la existencia de controles adecuados adem&aacute;s de su eficiencia";
 choices[41][3] = "El control en inform&aacute;tica no es absolutamente necesario. Las funciones de cada empleado p&uacute;blico est&aacute;n en la RPT. Cada cierto tiempo se recomienda que un Auditor Interno un informe con las propuestas pertinentes para mejorar";
 answers[41] = 2;
 units[41] = ['31'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 6357. Examen 2006 JCYL";
 preguntaids[41] = 6357


//  Id pregunta: 2300 Año de creación de pregunta: 2002
 questions[42]= "43)  Se&ntilde;alar la afirmaci&oacute;n incorrecta respecto al control de proyectos:";
 choices[42]= new Array();
 choices[42][0] = "El diagrama de PERT permite evaluar el retraso de un proyecto";
 choices[42][1] = "Un retraso en la fecha de finalizaci&oacute;n de una etapa provoca un retraso de la fecha final del proyecto";
 choices[42][2] = "La fecha de finalizaci&oacute;n del proyecto se ve afectada por las fechas de finalizaci&oacute;n de las etapas que constituyen el camino cr&iacute;tico";
 choices[42][3] = "La duraci&oacute;n total del proyecto viene determinada por el camino cr&iacute;tico";
 answers[42] = 1;
 units[42] = ['31'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2300. ";
 preguntaids[42] = 2300


//  Id pregunta: 2334 Año de creación de pregunta: 2003
 questions[43]= "44)  En la planificaci&oacute;n de un Proyecto lo cierto es";
 choices[43]= new Array();
 choices[43][0] = "El diagrama de Gantt expresa el camino cr&iacute;tico";
 choices[43][1] = "Una tarea no perteneciente al camino cr&iacute;tico puede retrasar la finalizaci&oacute;n del proyecto";
 choices[43][2] = "En el diagrama de PERT los arcos no son dirigidos";
 choices[43][3] = "El gr&aacute;fico de Gantt se basa en la representaci&oacute;n de restricciones";
 answers[43] = 1;
 units[43] = ['31'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2334. ";
 preguntaids[43] = 2334


//  Id pregunta: 9637 Año de creación de pregunta: 2014
 questions[44]= "45)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a retrasar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[44]= new Array();
 choices[44][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[44][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[44][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[44][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[44] = 3;
 units[44] = ['31'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 9637. ";
 preguntaids[44] = 9637


//  Id pregunta: 10026 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[45]= new Array();
 choices[45][0] = "Regla del 80-20.";
 choices[45][1] = "Regla del 30-40-30.";
 choices[45][2] = "Regla del 40-20-40.";
 choices[45][3] = "Regla del 20-60-20.";
 answers[45] = 2;
 units[45] = ['31', '94'];
 blocks[45] = ['B1', 'B3'];
 comments[45] = "Id Pregunta: 10026. Examen TIC A2 2014";
 preguntaids[45] = 10026


//  Id pregunta: 2265 Año de creación de pregunta: 2002
 questions[46]= "47)  No es cierto respecto a las t&eacute;cnicas PERT que:";
 choices[46]= new Array();
 choices[46][0] = "fueron desarrolladas a finales de los 50s para el programa I+D de los misiles bal&iacute;siticos Polaris";
 choices[46][1] = "permiten representar tanto las dependencias entre tareas como las escalas temporales de las mismas";
 choices[46][2] = "est&aacute;n muy orientadas al plazo de ejecuci&oacute;n, con poca consideraci&oacute;n al coste";
 choices[46][3] = "est&aacute;n orientadas a los sucesos o eventos, y normalmente trabajan con distribuciones de probabilidad para las duraciones";
 answers[46] = 1;
 units[46] = ['31'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2265. ";
 preguntaids[46] = 2265


//  Id pregunta: 6852 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes NO es una salida del proceso de Selecci&oacute;n de Vendedores dentro de la Gesti&oacute;n de las Adquisiciones del Proyecto?";
 choices[47]= new Array();
 choices[47][0] = "Contrato.";
 choices[47][1] = "Plan de gesti&oacute;n del contrato.";
 choices[47][2] = "Disponibilidad de recursos.";
 choices[47][3] = "Lista de vendedores calificados.";
 answers[47] = 3;
 units[47] = ['31'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 6852. ";
 preguntaids[47] = 6852


//  Id pregunta: 2312 Año de creación de pregunta: 2002
 questions[48]= "49)  Supongamos que en un proyecto representado mediante un diagrama PERT una de las actividades sufre un retraso con respecto a la duraci&oacute;n inicialmente programada En tal caso:";
 choices[48]= new Array();
 choices[48][0] = "Se incrementa la duraci&oacute;n del camino cr&iacute;tico";
 choices[48][1] = "El camino cr&iacute;tico seguir&aacute; siendo el mismo";
 choices[48][2] = "La fecha de finalizaci&oacute;n prevista podr&aacute; mantenerse s&oacute;lo si otra actividad ve acortada su duraci&oacute;n";
 choices[48][3] = "No se puede afirmar con seguridad que le suceder&aacute; al camino cr&iacute;tico";
 answers[48] = 3;
 units[48] = ['31'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 2312. ";
 preguntaids[48] = 2312


//  Id pregunta: 6851 Año de creación de pregunta: 2010
 questions[49]= "50)  Los procesos de Gesti&oacute;n de las Comunicaciones del Proyecto incluyen lo siguiente:";
 choices[49]= new Array();
 choices[49][0] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones, Informar del Rendimiento y Gestionar a los interesados.";
 choices[49][1] = "Planificaci&oacute;n de las Comunicaciones, Distribuci&oacute;n de la Informaci&oacute;n, Informar del Rendimiento y Gestionar a los Interesados.";
 choices[49][2] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones y Desarrollo de las Comunicaciones.";
 choices[49][3] = "An&aacute;lisis de las Comunicaciones y Dise&ntilde;o de las Comunicaciones.";
 answers[49] = 1;
 units[49] = ['31'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 6851. ";
 preguntaids[49] = 6851


//  Id pregunta: 6912 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Qu&eacute; tipo de dependencias utiliza el m&eacute;todo ADM?";
 choices[50]= new Array();
 choices[50][0] = "Utiliza dependencias inicio a final y final a inicio.";
 choices[50][1] = "S&oacute;lo utiliza dependencias de inicio a final.";
 choices[50][2] = "S&oacute;lo utiliza dependencias de final a inicio.";
 choices[50][3] = "S&oacute;lo utiliza dependencias final a final.";
 answers[50] = 2;
 units[50] = ['31'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 6912. ";
 preguntaids[50] = 6912


//  Id pregunta: 10024 Año de creación de pregunta: 2015
 questions[51]= "52)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[51]= new Array();
 choices[51][0] = "Es siempre cero.";
 choices[51][1] = "Es igual a su tiempo early.";
 choices[51][2] = "Es mayor que su tiempo early.";
 choices[51][3] = "Es menor que su tiempo early.";
 answers[51] = 1;
 units[51] = ['31'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 10024. Examen TIC A2 2014";
 preguntaids[51] = 10024


//  Id pregunta: 2394 Año de creación de pregunta: 2006
 questions[52]= "53)  La duraci&oacute;n total de un proyecto es:";
 choices[52]= new Array();
 choices[52][0] = "La del camino del gr&aacute;fico de Pert que m&aacute;s tareas realiza";
 choices[52][1] = "La de la tarea cr&iacute;tica";
 choices[52][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto";
 choices[52][3] = "la del camino critico en el gr&aacute;fico de Pert";
 answers[52] = 3;
 units[52] = ['31'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2394. ";
 preguntaids[52] = 2394


//  Id pregunta: 10075 Año de creación de pregunta: 2015
 questions[53]= "54)  Se&ntilde;ale de los siguientes cu&aacute;l NO es un cliente Subversion para control de versiones:";
 choices[53]= new Array();
 choices[53][0] = "TortoiseCVS";
 choices[53][1] = "Subversive";
 choices[53][2] = "Sventon";
 choices[53][3] = "Subclipse";
 answers[53] = 0;
 units[53] = ['31'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 10075. Examen TIC A2 2014";
 preguntaids[53] = 10075


//  Id pregunta: 7763 Año de creación de pregunta: 2010
 questions[54]= "55)  Las caracter&iacute;sticas del m&eacute;todo Delphi son:";
 choices[54]= new Array();
 choices[54][0] = "Confidencialidad, integridad del grupo y disponibilidad.";
 choices[54][1] = "Anonimato, realimentaci&oacute;n controlada y respuesta del grupo de forma estad&iacute;stica.";
 choices[54][2] = "Criticidad, autenticaci&oacute;n del grupo y consistencia.";
 choices[54][3] = "Convergencia, coherencia del grupo y salvaguarda.";
 answers[54] = 1;
 units[54] = ['31'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 7763. ";
 preguntaids[54] = 7763


//  Id pregunta: 2359 Año de creación de pregunta: 2004
 questions[55]= "56)  En metodolog&iacute;a PERT, la cantidad de unidades de tiempo en exceso para la realizaci&oacute;n de una tarea suponiendo que comienzan y terminan en las &uacute;ltimas fechas permisibles se llama ...";
 choices[55]= new Array();
 choices[55][0] = "Holgura condicionada";
 choices[55][1] = "Holgura independiente";
 choices[55][2] = "Holgura libre";
 choices[55][3] = "Holgura total";
 answers[55] = 0;
 units[55] = ['31'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2359. Holgura total: last(p)-early(m)-Dmp; Holgura libre: early(p)-early(m)-Dmp; Holgura independiente: early(p)-last(m)-Dmp; Holgura condicionada: early(p)- early(m)- Dmp";
 preguntaids[55] = 2359


