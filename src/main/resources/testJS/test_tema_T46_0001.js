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
//  Id pregunta: 9457 Año de creación de pregunta: 2014
 questions[0]= "1)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[0]= new Array();
 choices[0][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella.";
 choices[0][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[0][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[0][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad.";
 answers[0] = 3;
 units[0] = ['46'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 9457. El registro de actividad se aplica desde el nivel BAJO";
 preguntaids[0] = 9457


//  Id pregunta: 8438 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes medidas se debe aplicar en un sistema de informaci&oacute;n de categor&iacute;a alta seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[1]= new Array();
 choices[1][0] = "Previsi&oacute;n de la provisi&oacute;n del servicio por medios alternativos en caso de indisponibilidad del servicio contratado";
 choices[1][1] = "Asignar un identificador singular para cada entidad que accede al sistema";
 choices[1][2] = "Cifrado de la  informaci&oacute;n tanto durante su almacenamiento como durante su transmisi&oacute;n";
 choices[1][3] = "Todas las anteriores";
 answers[1] = 1;
 units[1] = ['46'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 8438. ";
 preguntaids[1] = 8438


//  Id pregunta: 8062 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes responsables no aparece definido en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[2]= new Array();
 choices[2][0] = "Responsable del fichero";
 choices[2][1] = "Responsable de la informaci&oacute;n";
 choices[2][2] = "Responsable del servicio";
 choices[2][3] = "Responsable de seguridad";
 answers[2] = 0;
 units[2] = ['46'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 8062. El responsable del fichero es un concepto relacionado con la LOPD.";
 preguntaids[2] = 8062


//  Id pregunta: 8065 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[3]= new Array();
 choices[3][0] = "Medidas de protecci&oacute;n";
 choices[3][1] = "Marco organizativo";
 choices[3][2] = "Marco operacional";
 choices[3][3] = "Marco tecnol&oacute;gico";
 answers[3] = 3;
 units[3] = ['46'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 8065. ";
 preguntaids[3] = 8065


//  Id pregunta: 1784 Año de creación de pregunta: 2016
 questions[4]= "5)  En el contexto del Real Decreto 3/2010, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, en las decisiones en materia de seguridad deber&aacute;n tenerse en cuenta una serie de principios b&aacute;sicos. Indique cu&aacute;les son los principios b&aacute;sicos contemplados en el Esquema Nacional de Seguridad (ENS):";
 choices[4]= new Array();
 choices[4][0] = "&ldquo;Seguridad integral&rdquo;, &ldquo;Gesti&oacute;n de riesgos&rdquo;, &ldquo;Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n&rdquo;, &ldquo;L&iacute;neas de defensa&rdquo;, &ldquo;Reevaluaci&oacute;n peri&oacute;dica&rdquo;, &ldquo;Funci&oacute;n diferenciada&rdquo;.";
 choices[4][1] = "&ldquo;An&aacute;lisis y gesti&oacute;n de los riesgos&rdquo;, &ldquo;Gesti&oacute;n de personal&rdquo;, &ldquo;Profesionalidad&rdquo;, &ldquo;Seguridad por defecto&rdquo;, &ldquo;Integridad y actualizaci&oacute;n del sistema&rdquo;, &ldquo;Continuidad de la Actividad&rdquo;.";
 choices[4][2] = "&ldquo;Mecanismos de control&rdquo;, &ldquo;Actualizaci&oacute;n permanente&rdquo;, &ldquo;Formaci&oacute;n&rdquo;, &ldquo;Ciclo de vida de servicios y sistemas&rdquo;, &ldquo;Auditor&iacute;as&rdquo;.";
 choices[4][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[4] = 0;
 units[4] = ['46'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 1784. ";
 preguntaids[4] = 1784


//  Id pregunta: 10689 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes NO es un requisito m&iacute;nimo de seguridad seg&uacute;n el art&iacute;culo 11 del Esquema Nacional de Seguridad?";
 choices[5]= new Array();
 choices[5][0] = "L&iacute;neas de defensa.";
 choices[5][1] = "Profesionalidad.";
 choices[5][2] = "An&aacute;lisis y Gesti&oacute;n de Riesgos.";
 choices[5][3] = "Seguridad por defecto.";
 answers[5] = 0;
 units[5] = ['46'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 10689. L&iacute;neas de Defensa es un Principio B&aacute;sico de la Seguridad. Profesionalidad es un Requisito m&iacute;nimo introducido por el RD 951/2015 que modifica el ENS.";
 preguntaids[5] = 10689


//  Id pregunta: 10692 Año de creación de pregunta: 2015
 questions[6]= "7)  Seg&uacute;n el Esquema Nacional de Seguridad, la tarea de elaboraci&oacute;n de un Perfil General del Estado de la Seguridad en las Administraciones p&uacute;blicas es competencia de:";
 choices[6]= new Array();
 choices[6][0] = "Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[6][1] = "Centro Criptol&oacute;gico Nacional";
 choices[6][2] = "INCIBE";
 choices[6][3] = "Consejo de Ministros";
 answers[6] = 0;
 units[6] = ['46'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 10692. RD 951/2015 que modifica el art&iacute;culo 35 del ENS.";
 preguntaids[6] = 10692


//  Id pregunta: 10690 Año de creación de pregunta: 2015
 questions[7]= "8)  Seg&uacute;n el Esquema Nacional de Seguridad, las Instrucciones T&eacute;cnicas de Seguridad";
 choices[7]= new Array();
 choices[7][0] = "Son aspectos que pueden ser aplicados por parte de las Administraciones p&uacute;blicas";
 choices[7][1] = "Son aspectos que obligatoriamente deben ser aplicados por parte de las Administraciones P&uacute;blicas";
 choices[7][2] = "Algunas Instrucciones de Seguridad son de aplicaci&oacute;n preceptiva y otras de aplicaci&oacute;n facultativa.";
 choices[7][3] = "Ninguna de las anteriores.";
 answers[7] = 1;
 units[7] = ['46'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 10690. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";
 preguntaids[7] = 10690


//  Id pregunta: 1108 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el Esquema Nacional de Seguridad (ENS), Real Decreto 3/2010, en lo relativo a la auditor&iacute;a:";
 choices[8]= new Array();
 choices[8][0] = "Los sistemas de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, o inferior, no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema de informaci&oacute;n, o en quien este delegue.";
 choices[8][1] = "Los sistemas de informaci&oacute;n de categor&iacute;a MEDIA no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema de informaci&oacute;n, o en quien &eacute;ste delegue.";
 choices[8][2] = "Los sistemas de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, o inferior, no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada en cualquier caso por personal de seguridad ajeno al que administra el sistema de informaci&oacute;n.";
 choices[8][3] = "El ENS no considera suficiente una autoevaluaci&oacute;n en ning&uacute;n sistema de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, MEDIA o ALTA.";
 answers[8] = 0;
 units[8] = ['46'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 1108. ";
 preguntaids[8] = 1108


//  Id pregunta: 7101 Año de creación de pregunta: 2010
 questions[9]= "10)  Se&ntilde;ale la sentencia correcta, en relaci&oacute;n a la seguridad por defecto definida en el Esquema Nacional de Seguridad:";
 choices[9]= new Array();
 choices[9][0] = "En un sistema de explotaci&oacute;n se eliminar&aacute;n o desactivar&aacute;n, mediante el control de la configuraci&oacute;n, las funciones que no sean de inter&eacute;s, sean innecesarias e, incluso, aquellas que sean inadecuadas al fin que se persigue.";
 choices[9][1] = "El sistema proporcionar&aacute; la funcionalidad requerida para que la organizaci&oacute;n alcance sus objetivos, proveyendo toda funcionalidad adicional posible.";
 choices[9][2] = "Las funciones de operaci&oacute;n, administraci&oacute;n y registro de actividad ser&aacute;n las m&aacute;ximas posibles, y se asegurar&aacute; que s&oacute;lo son accesibles por las personas, o desde emplazamientos o equipos, autorizados, pudiendo exigirse en su caso restricciones de horario y puntos de acceso facultados.";
 choices[9][3] = "Todas las anteriores";
 answers[9] = 0;
 units[9] = ['46'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 7101. Art&iacute;culo 19 ENS";
 preguntaids[9] = 7101


//  Id pregunta: 8512 Año de creación de pregunta: 2011
 questions[10]= "11)  Indique cu&aacute;l no es un principios b&aacute;sico seg&uacute;n el RD 3/2010.";
 choices[10]= new Array();
 choices[10][0] = "Prevenci&oacute;n, reactivaci&oacute;n y revisi&oacute;n";
 choices[10][1] = "Seguridad Integral";
 choices[10][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[10][3] = "L&iacute;neas de defensa";
 answers[10] = 0;
 units[10] = ['46'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 8512. ";
 preguntaids[10] = 8512


//  Id pregunta: 9710 Año de creación de pregunta: 2014
 questions[11]= "12)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la Red SARA. &iquest;Cual de los siguientes no es un tipo de Punto de Presencia?";
 choices[11]= new Array();
 choices[11][0] = "Area de Conexi&oacute;n de la AEAT";
 choices[11][1] = "Red sTESTA";
 choices[11][2] = "Ventanilla Unica empresarial de Melilla";
 choices[11][3] = "Banco de Espa&ntilde;a";
 answers[11] = 2;
 units[11] = ['46'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 9710. Punto II.1.2 de la NTI de Requisitos de conexi&oacute;n a red sara. Las Ventanillas Unicas son tipos de PdP, pero la Ventanilla Unica de Melilla es un PdP dentro de ese tipo y no un tipo.";
 preguntaids[11] = 9710


//  Id pregunta: 9965 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l es la gu&iacute;a referente al Plan de Adecuaci&oacute;n del Esquema Nacional de Seguridad?";
 choices[12]= new Array();
 choices[12][0] = "CCN-STIC-803";
 choices[12][1] = "CCN-STIC-805";
 choices[12][2] = "CCN-STIC-806";
 choices[12][3] = "CCN-STIC-807";
 answers[12] = 2;
 units[12] = ['46'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 9965. ";
 preguntaids[12] = 9965


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n se establece en el Real Decreto 3/2010, &iquest;qu&eacute; &oacute;rgano recoger&aacute; la informaci&oacute;n que permita elaborar un perfil general del estado de la seguridad en las Administraciones P&uacute;blicas?";
 choices[13]= new Array();
 choices[13][0] = "El Centro Criptol&oacute;gico Nacional.";
 choices[13][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[13][2] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica.";
 choices[13][3] = "La Comisi&oacute;n Interministerial de Administraci&oacute;n Electr&oacute;nica.";
 answers[13] = 2;
 units[13] = ['46'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 617. AGE A2 2015";
 preguntaids[13] = 617


//  Id pregunta: 9959 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l no es una l&iacute;nea de acci&oacute;n de la Estrategia de Ciberseguridad Nacional?";
 choices[14]= new Array();
 choices[14][0] = "Capacidad de prevenci&oacute;n, detecci&oacute;n, respuesta y recuperaci&oacute;n ante las ciberamenazas.";
 choices[14][1] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Administraciones P&uacute;blicas.";
 choices[14][2] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Infraestructuras Cr&iacute;ticas.";
 choices[14][3] = "Colaboraci&oacute;n con las entidades privadas para establecer un marco de seguridad nacional.";
 answers[14] = 3;
 units[14] = ['46'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 9959. ";
 preguntaids[14] = 9959


//  Id pregunta: 9968 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n las definiciones establecidas en las gu&iacute;as CCN-STIC &iquest;Qu&eacute; es la &quot;Manifestaci&oacute;n escrita de los &oacute;rganos o entidades de derecho p&uacute;blico, firmada por su responsable, mediante la que se da publicidad que los sistemas a que se refieren cumplen con las exigencias del Esquema Nacional de Seguridad aprobado por Real Decreto 3/2010, de 8 de enero&quot;?";
 choices[15]= new Array();
 choices[15][0] = "Informe de auditor&iacute;a";
 choices[15][1] = "Declaraci&oacute;n de conformidad";
 choices[15][2] = "Aceptaci&oacute;n del esquema de seguridad";
 choices[15][3] = "Formalizaci&oacute;n de la conformidad";
 answers[15] = 1;
 units[15] = ['46'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 9968. ";
 preguntaids[15] = 9968


//  Id pregunta: 9964 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;l es la gu&iacute;a referente a Auditor&iacute;a del Esquema Nacional de Seguridad?";
 choices[16]= new Array();
 choices[16][0] = "CCN-STIC-801";
 choices[16][1] = "CCN-STIC-802";
 choices[16][2] = "CCN-STIC-803";
 choices[16][3] = "CCN-STIC-804";
 answers[16] = 1;
 units[16] = ['46'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 9964. ";
 preguntaids[16] = 9964


//  Id pregunta: 7100 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un requisito m&iacute;nimo de seguridad de los definidos en el Esquema Nacional de Seguridad?";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de personal.";
 choices[17][1] = "Integridad y actualizaci&oacute;n del sistema.";
 choices[17][2] = "Prevenci&oacute;n ante la continuidad de la actividad.";
 choices[17][3] = "Incidentes de seguridad.";
 answers[17] = 2;
 units[17] = ['46'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 7100. Art&iacute;culo 11 ENS";
 preguntaids[17] = 7100


//  Id pregunta: 7097 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes es un principio del Esquema Nacional de Seguridad?";
 choices[18]= new Array();
 choices[18][0] = "Enfoque de soluciones de seguridad multilaterales";
 choices[18][1] = "Car&aacute;cter multidimensional de la seguridad";
 choices[18][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[18][3] = "Todos los anteriores";
 answers[18] = 2;
 units[18] = ['46'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 7097. Art&iacute;culo 4 ENS";
 preguntaids[18] = 7097


//  Id pregunta: 6118 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;En cu&aacute;l de los siguientes modelos para el desarrollo de aplicaciones distribuidas o en red seg&uacute;n el modelo cliente/servidor,esta encuadrado COM+ (Common Object Model Plus)?:";
 choices[19]= new Array();
 choices[19][0] = "Modelos basados en llamadas a funciones (sockets)";
 choices[19][1] = "Modelos basados en llamadas a procedimientos remotos (RPC)";
 choices[19][2] = "Modelos basados en llamadas a objetos distribuidos";
 choices[19][3] = "Modelos basados en agentes m&oacute;viles";
 answers[19] = 2;
 units[19] = ['46'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 6118. Examen TIC A1 MAP 2007";
 preguntaids[19] = 6118


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[20]= new Array();
 choices[20][0] = "Categor&iacute;a b&aacute;sica";
 choices[20][1] = "Categor&iacute;a media";
 choices[20][2] = "Categor&iacute;a alta";
 choices[20][3] = "Categor&iacute;a media y alta";
 answers[20] = 2;
 units[20] = ['46'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 616. AGE A1 2015";
 preguntaids[20] = 616


//  Id pregunta: 7096 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Seguridad?";
 choices[21]= new Array();
 choices[21][0] = "RD 4/2010";
 choices[21][1] = "RD 40/2010";
 choices[21][2] = "RD 4/2009";
 choices[21][3] = "RD 3/2010";
 answers[21] = 3;
 units[21] = ['46'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 7096. ";
 preguntaids[21] = 7096


//  Id pregunta: 6943 Año de creación de pregunta: 2010
 questions[22]= "23)  El Esquema Nacional de Seguridad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[22]= new Array();
 choices[22][0] = "Cada 6 meses";
 choices[22][1] = "Cada a&ntilde;o";
 choices[22][2] = "Cada 2 a&ntilde;os";
 choices[22][3] = "El Esquema Nacional de Seguridad no especifica nada respecto a auditor&iacute;as";
 answers[22] = 2;
 units[22] = ['46'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 6943. Art&iacute;culo 34.";
 preguntaids[22] = 6943


//  Id pregunta: 1832 Año de creación de pregunta: 2016
 questions[23]= "24)  Dentro de la familia de est&aacute;ndares ISO 27000, &iquest;qu&eacute; norma se encarga de ayudar a las organizaciones a medir, a informar y, por lo tanto, a mejorar sistem&aacute;ticamente la eficacia de su Sistema de Informaci&oacute;n de Gesti&oacute;n de la Seguridad (SGSI)?";
 choices[23]= new Array();
 choices[23][0] = "ISO 27001";
 choices[23][1] = "ISO 27002";
 choices[23][2] = "ISO 27003";
 choices[23][3] = "ISO 27004";
 answers[23] = 3;
 units[23] = ['46'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 1832. ";
 preguntaids[23] = 1832


//  Id pregunta: 7098 Año de creación de pregunta: 2010
 questions[24]= "25)  De acuerdo con el Esquema Nacional de Seguridad, el sistema ha de disponer de una estrategia de protecci&oacute;n constituida por m&uacute;ltiples capas de seguridad, dispuesta de forma que, cuando una de las capas falle, permita:";
 choices[24]= new Array();
 choices[24][0] = "Ganar tiempo para una reacci&oacute;n adecuada frente a los incidentes que no han podido evitarse.";
 choices[24][1] = "Reducir la probabilidad de que el sistema sea comprometido en su conjunto.";
 choices[24][2] = "Minimizar el impacto final sobre el mismo.";
 choices[24][3] = "Todas las anteriores";
 answers[24] = 3;
 units[24] = ['46'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 7098. Art&iacute;culo 8 ENS";
 preguntaids[24] = 7098


//  Id pregunta: 9792 Año de creación de pregunta: 2015
 questions[25]= "26)  El empleo de algoritmos de firma electr&oacute;nica acreditados por el Centro Criptol&oacute;gico Nacional:";
 choices[25]= new Array();
 choices[25][0] = "Es una medida del Esquema Nacional de Seguridad para la dimensi&oacute;n de confidencialidad.";
 choices[25][1] = "Es una medida de nivel medio del Esquema Nacional de Seguridad.";
 choices[25][2] = "Es una recomendaci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[25][3] = "Ninguna de las anteriores.";
 answers[25] = 1;
 units[25] = ['46'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 9792. ENS, Anexo II (5.7.4 Firma electr&oacute;nica [mp.info.4])";
 preguntaids[25] = 9792


//  Id pregunta: 10213 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Cu&aacute;ntos anexos incluye el RD 3/2010 (ENS)?";
 choices[26]= new Array();
 choices[26][0] = "Ninguno";
 choices[26][1] = "1";
 choices[26][2] = "2";
 choices[26][3] = "5";
 answers[26] = 3;
 units[26] = ['46'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 10213. ";
 preguntaids[26] = 10213


//  Id pregunta: 1290 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n se establece en el Esquema Nacional de Seguridad (ENS) se&ntilde;ale cual NO es un principio b&aacute;sico en las decisiones en materia de seguridad:";
 choices[27]= new Array();
 choices[27][0] = "Funci&oacute;n diferenciada.";
 choices[27][1] = "Enfoque de soluciones multilaterales.";
 choices[27][2] = "Gesti&oacute;n de riesgos.";
 choices[27][3] = "L&iacute;neas de defensa.";
 answers[27] = 1;
 units[27] = ['46'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 1290. ";
 preguntaids[27] = 1290


//  Id pregunta: 10299 Año de creación de pregunta: 2015
 questions[28]= "29)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[28]= new Array();
 choices[28][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[28][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[28][2] = "Las respuestas a) y b) son falsas";
 choices[28][3] = "Las respuestas a) y b) son verdaderas";
 answers[28] = 3;
 units[28] = ['46'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 10299. ";
 preguntaids[28] = 10299


//  Id pregunta: 7908 Año de creación de pregunta: 2011
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[29]= new Array();
 choices[29][0] = "Funci&oacute;n diferenciada.";
 choices[29][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[29][2] = "L&iacute;neas de defensa.";
 choices[29][3] = "Continuidad de la actividad.";
 answers[29] = 3;
 units[29] = ['46'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 7908. Examen TIC A1 2010";
 preguntaids[29] = 7908


//  Id pregunta: 9958 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Cu&aacute;l es el objetivo global de la Estrategia de Ciberseguridad Nacional?";
 choices[30]= new Array();
 choices[30][0] = "Lograr que Espa&ntilde;a haga un uso seguro de los Sistemas de Informaci&oacute;n y Telecomunicaciones, fortaleciendo las capacidades de prevenci&oacute;n, defensa, detecci&oacute;n, y respuesta a los ciberataques.";
 choices[30][1] = "Garantizar que los Sistemas de Informaci&oacute;n y Telecomunicaciones que utilizan las Administraciones P&uacute;blicas poseen el adecuado nivel de ciberseguridad y resiliencia.";
 choices[30][2] = "Potenciar las capacidades de prevenci&oacute;n, detecci&oacute;n, reacci&oacute;n, an&aacute;lisis, recuperaci&oacute;n, respuesta, investigaci&oacute;n y coordinaci&oacute;n frente a las actividades del terrorismo y la delincuencia en el ciberespacio.";
 choices[30][3] = "Alcanzar y mantener los conocimientos, habilidades, experiencia y capacidades tecnol&oacute;gicas que necesita Espa&ntilde;a para sustentar todos los objetivos de  ciberseguridad.";
 answers[30] = 0;
 units[30] = ['46'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 9958. ";
 preguntaids[30] = 9958


//  Id pregunta: 10308 Año de creación de pregunta: 2015
 questions[31]= "32)  Seleccione la opci&oacute;n verdadera";
 choices[31]= new Array();
 choices[31][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[31][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[31][2] = "ACCEDA permite crear un registro en la nube";
 choices[31][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[31] = 0;
 units[31] = ['46'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 10308. Geiser es una soluci&oacute;n de registro integral";
 preguntaids[31] = 10308


//  Id pregunta: 10309 Año de creación de pregunta: 2015
 questions[32]= "33)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[32]= new Array();
 choices[32][0] = "Organismo p&uacute;blicos";
 choices[32][1] = "Ministerios";
 choices[32][2] = "Comunidades Aut&oacute;nomas";
 choices[32][3] = "Todas las anteriores";
 answers[32] = 3;
 units[32] = ['46'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 10309. ";
 preguntaids[32] = 10309


//  Id pregunta: 10975 Año de creación de pregunta: 2015
 questions[33]= "34)  Seg&uacute;n la gu&iacute;a CCN-STIC-827 Gesti&oacute;n y uso de dispositivos m&oacute;viles:";
 choices[33]= new Array();
 choices[33][0] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse mediante el env&iacute;o de mensajes SMS reconocibles por el software propietario de la marca instalado en el dispositivo o el Sistema Operativo.";
 choices[33][1] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse aplicando Mobile Device Management (MDM) con un producto de terceros.";
 choices[33][2] = "Mobile Application Management (MAM) se dirige a gestionar una o varias aplicaciones espec&iacute;ficas dentro de cada dispositivo m&oacute;vil, en vez de gestionar la totalidad del dispositivo.";
 choices[33][3] = "Todas las anteriores son correctas.";
 answers[33] = 3;
 units[33] = ['46'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 10975. ";
 preguntaids[33] = 10975


//  Id pregunta: 10310 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Estar conectado a Red SARA.";
 choices[34][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[34][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[34][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[34] = 1;
 units[34] = ['46'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 10310. ";
 preguntaids[34] = 10310


//  Id pregunta: 9986 Año de creación de pregunta: 2015
 questions[35]= "36)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[35]= new Array();
 choices[35][0] = "Confidencialidad.";
 choices[35][1] = "Integridad.";
 choices[35][2] = "Autenticidad.";
 choices[35][3] = "Trazabilidad.";
 answers[35] = 3;
 units[35] = ['46'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 9986. Examen TIC A2 2014";
 preguntaids[35] = 9986


//  Id pregunta: 7099 Año de creación de pregunta: 2010
 questions[36]= "37)  El Esquema Nacional de Seguridad establece que las l&iacute;neas de defensa han de estar constituidas por medidas de distinto tipo, &iquest;Cu&aacute;l de las siguientes no es una de ellos?";
 choices[36]= new Array();
 choices[36][0] = "Organizativa";
 choices[36][1] = "Sem&aacute;ntica";
 choices[36][2] = "L&oacute;gica";
 choices[36][3] = "F&iacute;sica";
 answers[36] = 1;
 units[36] = ['46'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 7099. Art&iacute;culo 8 ENS";
 preguntaids[36] = 7099


//  Id pregunta: 10976 Año de creación de pregunta: 2015
 questions[37]= "38)  Seg&uacute;n la gu&iacute;a CCN-STIC-827 Gesti&oacute;n y uso de dispositivos m&oacute;viles, se&ntilde;ale la INCORRECTA:";
 choices[37]= new Array();
 choices[37][0] = "La autenticaci&oacute;n del usuario se realizar&aacute; con una contrase&ntilde;a/pin del dispositivo y/u otro tipo de autenticaci&oacute;n antes de acceder a los recursos del organismo.";
 choices[37][1] = "Los dispositivos deben bloquearse autom&aacute;ticamente despu&eacute;s de un determinado periodo de inactividad.";
 choices[37][2] = "El uso de un modelo BYOD (Bring Your Own Device) est&aacute; intensamente desaconsejado.";
 choices[37][3] = "Bajo la potestad del administrador de seguridad, podr&aacute; bloquearse de forma remota el dispositivo si se sospecha que ha podido ser dejado en un estado no seguro o en una ubicaci&oacute;n no segura.";
 answers[37] = 2;
 units[37] = ['46'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 10976. ";
 preguntaids[37] = 10976


//  Id pregunta: 7104 Año de creación de pregunta: 2010
 questions[38]= "39)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[38]= new Array();
 choices[38][0] = "Bajo, Medio o Alto";
 choices[38][1] = "Limitado, Grave o Muy Grave";
 choices[38][2] = "B&aacute;sico, Medio o Alto";
 choices[38][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[38] = 0;
 units[38] = ['46'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 7104. Anexo I ENS. Y las categor&iacute;as pueden ser b&aacute;sica, media o alta.";
 preguntaids[38] = 7104


//  Id pregunta: 8270 Año de creación de pregunta: 2011
 questions[39]= "40)  El Real Decreto 3/2010, de 8 de enero, regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica. En el mismo, la seguridad se entender&aacute; como:";
 choices[39]= new Array();
 choices[39][0] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, contemplando exclusivamente elementos t&eacute;cnicos";
 choices[39][1] = "Un proceso integral te&oacute;rico que comprende &uacute;nicamente tas medidas de prevenci&oacute;n y detecci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de correcci&oacute;n, a implantar particularmente en cada caso.";
 choices[39][2] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, que comprende &uacute;nicamente las medidas concretas de detecci&oacute;n y correcci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de prevenci&oacute;n, como propias de cada caso particular";
 choices[39][3] = "Un proceso integral constituido por elementos t&eacute;cnicos, humanos, materiales y organizativos";
 answers[39] = 3;
 units[39] = ['46'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 8270. Examen TIC A2 2010 interna";
 preguntaids[39] = 8270


//  Id pregunta: 9966 Año de creación de pregunta: 2015
 questions[40]= "41)  &iquest;Qu&eacute; serie CCN-STIC establece las pol&iacute;ticas y procedimientos adecuados para la implementaci&oacute;n de las medidas contempladas en el Esquema Nacional de Seguridad?";
 choices[40]= new Array();
 choices[40][0] = "500";
 choices[40][1] = "600";
 choices[40][2] = "700";
 choices[40][3] = "800";
 answers[40] = 3;
 units[40] = ['46'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 9966. ";
 preguntaids[40] = 9966


//  Id pregunta: 10682 Año de creación de pregunta: 2015
 questions[41]= "42)  &iquest;Qu&eacute; norma del CCN hace referencia a la criptograf&iacute;a de empleo en el Esquema Nacional de Seguridad?";
 choices[41]= new Array();
 choices[41][0] = "CCN-STIC-802";
 choices[41][1] = "CCN-STIC-403";
 choices[41][2] = "CCN-STIC-807";
 choices[41][3] = "CCN-STIC-823";
 answers[41] = 2;
 units[41] = ['46'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 10682. ";
 preguntaids[41] = 10682


//  Id pregunta: 9957 Año de creación de pregunta: 2015
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un principio rector de la Estrategia de Ciberseguridad Nacional?";
 choices[42]= new Array();
 choices[42][0] = "Liderazgo internacional y coordinaci&oacute;n de esfuerzos";
 choices[42][1] = "Responsabilidad compartida";
 choices[42][2] = "Proporcionalidad, racionalidad y eficacia";
 choices[42][3] = "Cooperaci&oacute;n Internacional";
 answers[42] = 0;
 units[42] = ['46'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 9957. ";
 preguntaids[42] = 9957


//  Id pregunta: 8440 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[43]= new Array();
 choices[43][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[43][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[43][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[43][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[43] = 1;
 units[43] = ['46'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 8440. ";
 preguntaids[43] = 8440


//  Id pregunta: 9962 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;C&oacute;mo se denomina la Comisi&oacute;n Delegada del Gobierno para la Seguridad Nacional que asiste al Presidente del Gobierno en la direcci&oacute;n de la Pol&iacute;tica de Seguridad Nacional?";
 choices[44]= new Array();
 choices[44][0] = "El Consejo de Seguridad Nacional.";
 choices[44][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[44][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[44][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[44] = 0;
 units[44] = ['46'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 9962. ";
 preguntaids[44] = 9962


//  Id pregunta: 1288 Año de creación de pregunta: 2016
 questions[45]= "46)  Indica cual de las siguientes NO es una &quot;dimensi&oacute;n de la seguridad&quot; a tener en cuenta para establecer la categor&iacute;a del sistema, seg&uacute;n lo especificado en el Anexo I del Esquema Nacional de Seguridad (Real Decreto 3/2010):";
 choices[45]= new Array();
 choices[45][0] = "Disponibilidad (D).";
 choices[45][1] = "Trazabilidad (T).";
 choices[45][2] = "Autenticidad (A).";
 choices[45][3] = "Conservaci&oacute;n (C).";
 answers[45] = 3;
 units[45] = ['46'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 1288. ";
 preguntaids[45] = 1288


//  Id pregunta: 7105 Año de creación de pregunta: 2010
 questions[46]= "47)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[46]= new Array();
 choices[46][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[46][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[46][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[46][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[46] = 2;
 units[46] = ['46'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 7105. Anexo I ENS";
 preguntaids[46] = 7105


//  Id pregunta: 9961 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes no se incluye en la Estructura Org&aacute;nica definida en la Estrategia de Ciberseguridad Nacional?";
 choices[47]= new Array();
 choices[47][0] = "El Consejo de Seguridad Nacional.";
 choices[47][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[47][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[47][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[47] = 3;
 units[47] = ['46'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 9961. ";
 preguntaids[47] = 9961


//  Id pregunta: 9218 Año de creación de pregunta: 2014
 questions[48]= "49)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[48]= new Array();
 choices[48][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[48][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[48][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[48][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[48] = 1;
 units[48] = ['46'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 9218. Examen TIC A1 2013";
 preguntaids[48] = 9218


//  Id pregunta: 4538 Año de creación de pregunta: 2002
 questions[49]= "50)  La anchura est&aacute;ndar de un rack es:";
 choices[49]= new Array();
 choices[49][0] = "11 pulgadas";
 choices[49][1] = "25 pulgadas";
 choices[49][2] = "19 pulgadas";
 choices[49][3] = "15 pulgadas";
 answers[49] = 2;
 units[49] = ['46'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 4538. ";
 preguntaids[49] = 4538


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[50]= new Array();
 choices[50][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[50][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[50][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[50][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[50] = 0;
 units[50] = ['46'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 619. Junta de Extremadura A1 2015";
 preguntaids[50] = 619


//  Id pregunta: 8439 Año de creación de pregunta: 2011
 questions[51]= "52)  Seg&uacute;n el Esquema Nacional de Seguridad, la medida de seguridad &quot;op.exp.8 Registro de la actividad de los usuarios&quot; aplica en la categor&iacute;a...";
 choices[51]= new Array();
 choices[51][0] = "Solo en la categor&iacute;a del sistema &quot;alta&quot;";
 choices[51][1] = "Esta medida de seguridad aplica cuando as&iacute; lo decida el responsable de los servidores";
 choices[51][2] = "Baja, media y alta de la dimensi&oacute;n &quot;trazabilidad&quot;";
 choices[51][3] = "En todos los casos anteriores";
 answers[51] = 2;
 units[51] = ['46'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 8439. ";
 preguntaids[51] = 8439


//  Id pregunta: 10691 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes aspectos NO est&aacute; recogido como una Instrucci&oacute;n T&eacute;cnica de Seguridad seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[52]= new Array();
 choices[52][0] = "Informe de Estado de Seguridad";
 choices[52][1] = "Auditor&iacute;a de Seguridad";
 choices[52][2] = "Interconexi&oacute;n en el Esquema Nacional de Seguridad";
 choices[52][3] = "Protocolo de Comunicaciones Seguras";
 answers[52] = 3;
 units[52] = ['46'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 10691. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";
 preguntaids[52] = 10691


//  Id pregunta: 10931 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Qu&eacute; dimensi&oacute;n de seguridad es obligatoria de evaluar para el responsable del servicio?";
 choices[53]= new Array();
 choices[53][0] = "autenticacion";
 choices[53][1] = "trazabilidad";
 choices[53][2] = "integridad";
 choices[53][3] = "disponibilidad";
 answers[53] = 3;
 units[53] = ['46'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 10931. ";
 preguntaids[53] = 10931


//  Id pregunta: 1831 Año de creación de pregunta: 2016
 questions[54]= "55)  El contenido de la norma ISO 27001 se divide en secciones, &iquest;cu&aacute;l de las siguientes NO se corresponde con una secci&oacute;n de la misma?";
 choices[54]= new Array();
 choices[54][0] = "Mejora del SGSI";
 choices[54][1] = "Auditor&iacute;as internas";
 choices[54][2] = "Responsabilidad de la Direcci&oacute;n";
 choices[54][3] = "Plan de seguridad";
 answers[54] = 3;
 units[54] = ['46'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 1831. ";
 preguntaids[54] = 1831


//  Id pregunta: 1112 Año de creación de pregunta: 2016
 questions[55]= "56)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[55]= new Array();
 choices[55][0] = "Confidencialidad.";
 choices[55][1] = "Integridad.";
 choices[55][2] = "Autenticidad.";
 choices[55][3] = "Trazabilidad.";
 answers[55] = 3;
 units[55] = ['46'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 1112. ";
 preguntaids[55] = 1112


//  Id pregunta: 9711 Año de creación de pregunta: 2014
 questions[56]= "57)  &iquest;Cual de los siguientes no es un servicio prestado por Red SARA?";
 choices[56]= new Array();
 choices[56][0] = "DNS";
 choices[56][1] = "SMTP";
 choices[56][2] = "SNMP";
 choices[56][3] = "NTP";
 answers[56] = 2;
 units[56] = ['46'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 9711. Punto III.1.3 de la NTI de Requisitos de conexi&oacute;n a Red SARA";
 preguntaids[56] = 9711


//  Id pregunta: 9956 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Estrategia de Ciberseguridad Nacional?";
 choices[57]= new Array();
 choices[57][0] = "2011";
 choices[57][1] = "2012";
 choices[57][2] = "2013";
 choices[57][3] = "2014";
 answers[57] = 2;
 units[57] = ['46'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 9956. ";
 preguntaids[57] = 9956


//  Id pregunta: 9963 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;En cu&aacute;l de los siguientes pueden participar actores del sector privado?";
 choices[58]= new Array();
 choices[58][0] = "El Consejo de Seguridad Nacional.";
 choices[58][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[58][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[58][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[58] = 1;
 units[58] = ['46'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 9963. ";
 preguntaids[58] = 9963


//  Id pregunta: 9967 Año de creación de pregunta: 2015
 questions[59]= "60)  &iquest;Qu&eacute; serie CCN-STIC constituye un conjunto de normas desarrolladas para entornos basados en el sistema operativo Windows de Microsoft?";
 choices[59]= new Array();
 choices[59][0] = "500";
 choices[59][1] = "600";
 choices[59][2] = "700";
 choices[59][3] = "400";
 answers[59] = 0;
 units[59] = ['46'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 9967. ";
 preguntaids[59] = 9967


//  Id pregunta: 7102 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes sistemas NO tiene la consideraci&oacute;n de entorno inseguro, de acuerdo con el Esquema Nacional de Seguridad?";
 choices[60]= new Array();
 choices[60][0] = "Equipos port&aacute;tiles";
 choices[60][1] = "Comunicaciones sobre redes inal&aacute;mbricas, incluso cuando la comunicaci&oacute;n se realice con cifrado fuerte";
 choices[60][2] = "Asistentes personales (PDA)";
 choices[60][3] = "Dispositivos perif&eacute;ricos";
 answers[60] = 1;
 units[60] = ['46'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 7102. Art&iacute;culo 21 ENS";
 preguntaids[60] = 7102


//  Id pregunta: 10974 Año de creación de pregunta: 2015
 questions[61]= "62)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una gu&iacute;a CCN-STIC:";
 choices[61]= new Array();
 choices[61][0] = "CCN-STIC-804 - Medidas de implantaci&oacute;n del Esquema Nacional de Seguridad";
 choices[61][1] = "CCN-STIC-820 - Protecci&oacute;n Contra Denegaci&oacute;n de Servicio";
 choices[61][2] = "CCN-STIC-823 - Seguridad en entornos Cloud";
 choices[61][3] = "CCN-STIC-830 - Medidas de seguridad en el puesto de trabajo (entorno ofim&aacute;tico).";
 answers[61] = 3;
 units[61] = ['46'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 10974. ";
 preguntaids[61] = 10974


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes es un requisito m&iacute;nimo de seguridad seg&uacute;n el art&iacute;culo 11 del Esquema Nacional de Seguridad?";
 choices[62]= new Array();
 choices[62][0] = "L&iacute;neas de defensa.";
 choices[62][1] = "An&aacute;lisis y gesti&oacute;n de los riesgos.";
 choices[62][2] = "Seguridad integral.";
 choices[62][3] = "Detecci&oacute;n ante otros sistemas de informaci&oacute;n interconectados.";
 answers[62] = 1;
 units[62] = ['46'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 618. AGE A2 2015";
 preguntaids[62] = 618


//  Id pregunta: 7103 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;Cada cu&aacute;nto tiempo ser&aacute;n objeto de una auditor&iacute;a regular ordinaria los sistemas de informaci&oacute;n a los que se refiere el Esquema Nacional de Seguridad?";
 choices[63]= new Array();
 choices[63][0] = "Cada dos a&ntilde;os";
 choices[63][1] = "Al menos, cada dos a&ntilde;os";
 choices[63][2] = "Cada a&ntilde;o";
 choices[63][3] = "Al menos, una vez al a&ntilde;o";
 answers[63] = 1;
 units[63] = ['46'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 7103. Art&iacute;culo 34 ENS. Anexo III: para los sistemas de categor&iacute;a B&Aacute;SICA, bastar&aacute; una autoevaluaci&oacute;n.";
 preguntaids[63] = 7103


//  Id pregunta: 1260 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique la opci&oacute;n INCORRECTA en relaci&oacute;n con el Esquema Nacional de Seguridad (ENS):";
 choices[64]= new Array();
 choices[64][0] = "Los sistemas de informaci&oacute;n a los que se refiere el ENS ser&aacute;n objeto de una auditor&iacute;a regular ordinaria, al menos cada dos a&ntilde;os, que verifique el cumplimiento de los requerimientos expuestos en el ENS.";
 choices[64][1] = "Gesti&oacute;n de riesgos, funci&oacute;n diferenciada y reevaluaci&oacute;n peri&oacute;dica son 3 de los principios b&aacute;sicos que deber&aacute;n tenerse en cuenta en las decisiones en materia de seguridad.";
 choices[64][2] = "El Instituto Nacional de las Tecnolog&iacute;as de la Informaci&oacute;n (INTECO), en el ejercicio de sus competencias, elaborar&aacute; y difundir&aacute; las correspondientes gu&iacute;as de la seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[64][3] = "Si a los 12 meses de la entrada en vigor del ENS hubiera circunstancias que impidan la plena aplicaci&oacute;n de lo exigido en el mismo, se dispondr&aacute; de un plan de adecuaci&oacute;n que marque los plazos de ejecuci&oacute;n, los cuales, en ning&uacute;n caso, ser&aacute;n superiores a 48 meses desde la entrada en vigor.";
 answers[64] = 2;
 units[64] = ['46'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 1260. ";
 preguntaids[64] = 1260


//  Id pregunta: 7106 Año de creación de pregunta: 2010
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un grupo de medidas de seguridad de los establecidos en el Esquema Nacional de Seguridad?";
 choices[65]= new Array();
 choices[65][0] = "Marco de gesti&oacute;n";
 choices[65][1] = "Marco organizativo";
 choices[65][2] = "Marco operacional";
 choices[65][3] = "Medidas de protecci&oacute;n";
 answers[65] = 0;
 units[65] = ['46'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 7106. Anexo II ENS";
 preguntaids[65] = 7106


//  Id pregunta: 9960 Año de creación de pregunta: 2015
 questions[66]= "67)  &iquest;Qui&eacute;n dirige a los tres componentes de la Estructura de Ciberseguridad Nacional (el Consejo de Seguridad Nacional; el Comit&eacute; Especializado de Ciberseguridad; el Comit&eacute; Especializado de Situaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "El Presidente del Gobierno.";
 choices[66][1] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[66][2] = "El Ministro de Defensa.";
 choices[66][3] = "El CIO de la AGE.";
 answers[66] = 0;
 units[66] = ['46'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 9960. ";
 preguntaids[66] = 9960


//  Id pregunta: 8063 Año de creación de pregunta: 2011
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[67]= new Array();
 choices[67][0] = "Seguridad transversal";
 choices[67][1] = "Gesti&oacute;n de riesgos";
 choices[67][2] = "L&iacute;neas de defensa";
 choices[67][3] = "Funci&oacute;n diferenciada";
 answers[67] = 0;
 units[67] = ['46'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 8063. ";
 preguntaids[67] = 8063


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[68]= new Array();
 choices[68][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[68][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[68][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[68][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[68] = 3;
 units[68] = ['46'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 615. AGE A1 2015";
 preguntaids[68] = 615


//  Id pregunta: 10781 Año de creación de pregunta: 2015
 questions[69]= "70)  La protecci&oacute;n contra Denegaci&oacute;n de servicio se recoge en la Gu&iacute; CCN-STIC:";
 choices[69]= new Array();
 choices[69][0] = "828";
 choices[69][1] = "817";
 choices[69][2] = "820";
 choices[69][3] = "823";
 answers[69] = 2;
 units[69] = ['46'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 10781. ";
 preguntaids[69] = 10781


//  Id pregunta: 8064 Año de creación de pregunta: 2011
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes principios no aparece como b&aacute;sico en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[70]= new Array();
 choices[70][0] = "Seguridad integral";
 choices[70][1] = "An&aacute;lisis de riesgos";
 choices[70][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[70][3] = "Funci&oacute;n diferenciada";
 answers[70] = 1;
 units[70] = ['46'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 8064. El principio es gesti&oacute;n de riesgos, no an&aacute;lisis de riesgos.";
 preguntaids[70] = 8064


