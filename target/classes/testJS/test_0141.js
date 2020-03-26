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
//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n:";
 choices[0]= new Array();
 choices[0][0] = "verbalmente";
 choices[0][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[0][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[0][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[0] = 2;
 units[0] = ['7'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 250. Ley 39/2015";
 preguntaids[0] = 250


//  Id pregunta: 6917 Año de creación de pregunta: 2010
 questions[1]= "2)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[1]= new Array();
 choices[1][0] = "SAMBA";
 choices[1][1] = "CIFS";
 choices[1][2] = "MSRPC";
 choices[1][3] = "Ninguna de las anteriores.";
 answers[1] = 1;
 units[1] = ['103'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 6917. ";
 preguntaids[1] = 6917


//  Id pregunta: 7003 Año de creación de pregunta: 2010
 questions[2]= "3)  Una de las tareas de los Analistas en la gesti&oacute;n del proceso de desarrollo es:";
 choices[2]= new Array();
 choices[2][0] = "Dar seguimiento al plan de trabajo y corregir las desviaciones a tiempo";
 choices[2][1] = "Construir el c&oacute;digo que dar&aacute; lugar al producto resultante";
 choices[2][2] = "Fijar el calendario de hitos y entregas";
 choices[2][3] = "Mantener entrevistas y sesiones de trabajo con los responsables de la organizaci&oacute;n y los usuarios";
 answers[2] = 3;
 units[2] = ['84'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7003. TIC-B 2009 bloque desarrollo";
 preguntaids[2] = 7003


//  Id pregunta: 4329 Año de creación de pregunta: 2004
 questions[3]= "4)  LMDS";
 choices[3]= new Array();
 choices[3][0] = "Usa el ancho de banda de forma sim&eacute;trica para los canales de subida y bajada";
 choices[3][1] = "Utiliza para transmitir una frecuencia de 10 Gz";
 choices[3][2] = "Reserva un ancho de banda de 3,1 Gz";
 choices[3][3] = "Ofrece un servicio de bucle local a los usuarios";
 answers[3] = 3;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4329. ";
 preguntaids[3] = 4329


//  Id pregunta: 6168 Año de creación de pregunta: 2003
 questions[4]= "5)  &iquest;Qu&eacute; actividades econ&oacute;micas NO caen dentro del &aacute;mbito de la directiva 2000/31/CE?";
 choices[4]= new Array();
 choices[4][0] = "La radiodifusi&oacute;n de televisi&oacute;n o de radio";
 choices[4][1] = "Los servicios de transmisi&oacute;n de informaci&oacute;n a trav&eacute;s de una red de comunicaci&oacute;n";
 choices[4][2] = "La venta de mercanc&iacute;as en l&iacute;nea";
 choices[4][3] = "El env&iacute;o de comunicaciones comerciales por correo electr&oacute;nico";
 answers[4] = 0;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 6168. Directiva 200/31/CE, consideraci&oacute;n 18)";
 preguntaids[4] = 6168


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[5]= new Array();
 choices[5][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[5][1] = "Implantar el mercado general europeo";
 choices[5][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[5][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[5] = 1;
 units[5] = ['19'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 448. Agenda Digital Europea";
 preguntaids[5] = 448


//  Id pregunta: 10003 Año de creación de pregunta: 2015
 questions[6]= "7)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[6]= new Array();
 choices[6][0] = "WS-Security permite crear servicios web seguros.";
 choices[6][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[6][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[6][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[6] = 3;
 units[6] = ['55'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10003. Examen TIC A2 2014";
 preguntaids[6] = 10003


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[7]= "8)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[7]= new Array();
 choices[7][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[7][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[7][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[7][3] = "todas son correctas";
 answers[7] = 3;
 units[7] = ['7'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 248. Ley 39/2015";
 preguntaids[7] = 248


//  Id pregunta: 4311 Año de creación de pregunta: 2004
 questions[8]= "9)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[8]= new Array();
 choices[8][0] = "1000BaseT";
 choices[8][1] = "1000BaseSX";
 choices[8][2] = "1000BaseLx";
 choices[8][3] = "1000BaseCX";
 answers[8] = 3;
 units[8] = ['104'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4311. Similar a examen TIC MAP A 2004";
 preguntaids[8] = 4311


//  Id pregunta: 7596 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar las especificaciones de est&aacute;ndares en Internet?";
 choices[9]= new Array();
 choices[9][0] = "IESG (Internet Engineering Steering Group).";
 choices[9][1] = "IETF (Internet Engineering Task Force).";
 choices[9][2] = "IAB (Internet Architecture Board).";
 choices[9][3] = "IANA (Internet Assigned Number Authority).";
 answers[9] = 1;
 units[9] = ['48'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 7596. Map 2006";
 preguntaids[9] = 7596


//  Id pregunta: 3129 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;En qu&eacute; se basa la acci&oacute;n de comprimir las im&aacute;genes para almacenarlas o transmitirlas v&iacute;a red de &aacute;rea local o v&iacute;a teleproceso?:";
 choices[10]= new Array();
 choices[10][0] = "En la codificaci&oacute;n progresiva";
 choices[10][1] = "En la modulaci&oacute;n codificada";
 choices[10][2] = "En la codificaci&oacute;n de la informaci&oacute;n";
 choices[10][3] = "En el filtrado de frecuencias";
 answers[10] = 2;
 units[10] = ['53'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3129. ";
 preguntaids[10] = 3129


//  Id pregunta: 1696 Año de creación de pregunta: 2016
 questions[11]= "12)  En &aacute;lgebra relacional, la operaci&oacute;n realizada a partir de dos tablas T1 y T2, tal que la resultante de una relaci&oacute;n es de grado g1+g2 constituida por todas las combinaciones de tuplas completas de T1 con las completas de T2, se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Uni&oacute;n";
 choices[11][1] = "Producto cartesiano";
 choices[11][2] = "Intersecci&oacute;n";
 choices[11][3] = "Join";
 answers[11] = 1;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1696. ";
 preguntaids[11] = 1696


//  Id pregunta: 10636 Año de creación de pregunta: 2015
 questions[12]= "13)  Seg&uacute;n la Ley 9/2014, el otorgamiento de los derechos de uso de los recursos de numeraci&oacute;n, direccionamiento y denominaci&oacute;n corresponden a:";
 choices[12]= new Array();
 choices[12][0] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[12][1] = "CNMC.";
 choices[12][2] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[12][3] = "ORECE.";
 answers[12] = 0;
 units[12] = ['121'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10636. Articulo 19";
 preguntaids[12] = 10636


//  Id pregunta: 10270 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;A cual de las siguientes &aacute;reas debe la tecnolog&iacute;a ayudar a dar soporte durante la fase de Dise&ntilde;o del Servicio en el ciclo de Vida del Servicio?";
 choices[13]= new Array();
 choices[13][0] = "Dise&ntilde;o de hardware y software";
 choices[13][1] = "Dise&ntilde;o del entorno y dise&ntilde;o de los procesos";
 choices[13][2] = "Dise&ntilde;o de datos";
 choices[13][3] = "Todas ellas";
 answers[13] = 3;
 units[13] = ['101'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 10270. ITIL v3";
 preguntaids[13] = 10270


//  Id pregunta: 1777 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes es un objetivo de la gesti&oacute;n de riesgos?";
 choices[14]= new Array();
 choices[14][0] = "Aumentar el presupuesto de seguridad de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[14][1] = "Transparencia hacia la empresa de los riesgos significativos";
 choices[14][2] = "Conocimiento de las &uacute;ltimas herramientas en materia de seguridad";
 choices[14][3] = "Conducir un an&aacute;lisis de riesgo detallado";
 answers[14] = 1;
 units[14] = ['45'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 1777. ";
 preguntaids[14] = 1777


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[15]= "16)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[15]= new Array();
 choices[15][0] = "El Presidente del Consejo Europeo.";
 choices[15][1] = "La Comisi&oacute;n.";
 choices[15][2] = "El Consejo.";
 choices[15][3] = "El Parlamento Europeo.";
 answers[15] = 2;
 units[15] = ['5'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 148. Uni&oacute;n Europea";
 preguntaids[15] = 148


//  Id pregunta: 7086 Año de creación de pregunta: 2010
 questions[16]= "17)  Identifique cu&aacute;l de los siguientes no es uno de los siete principios de la Web 2.0";
 choices[16]= new Array();
 choices[16][0] = "World Wide Web como plataforma de trabajo";
 choices[16][1] = "Las experiencias enriquecedoras de los usuarios";
 choices[16][2] = "El fin del ciclo de las actualizaciones de versiones del software.";
 choices[16][3] = "El software limitado a un solo dispositivo.";
 answers[16] = 3;
 units[16] = ['125'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7086. ";
 preguntaids[16] = 7086


//  Id pregunta: 5657 Año de creación de pregunta: 2007
 questions[17]= "18)  Una caracter&iacute;stica fundamental de XML signature es que:";
 choices[17]= new Array();
 choices[17][0] = "Puede firmar parte o la totalidad de un documento XML";
 choices[17][1] = "Puede firmar un documento RTF y convertirlo en un documento XML.";
 choices[17][2] = "Solo puede firmar un documento XML completo.";
 choices[17][3] = "Solo puede firmar documentos RTF.";
 answers[17] = 0;
 units[17] = ['119'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5657. ";
 preguntaids[17] = 5657


//  Id pregunta: 3103 Año de creación de pregunta: 2002
 questions[18]= "19)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[18]= new Array();
 choices[18][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[18][1] = "No contiene claves dependientes de otra extranjera";
 choices[18][2] = "La clave extranjera est&aacute; normalizada";
 choices[18][3] = "No contiene grupos repetitivos";
 answers[18] = 3;
 units[18] = ['61'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3103. ";
 preguntaids[18] = 3103


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique el producto de Microsoft que permite la administraci&oacute;n de Ia configuraci&oacute;n del cumplimiento y la administraci&oacute;n integral de activos de servidores, equipos de escritorio, port&aacute;tiles y dispositivos m&oacute;viles:";
 choices[19]= new Array();
 choices[19][0] = "System Center Data Protection Manager.";
 choices[19][1] = "System Center App Controller.";
 choices[19][2] = "System Center Configuration Manager.";
 choices[19][3] = "System Center Orchestrator.";
 answers[19] = 2;
 units[19] = ['58'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 672. AGE A2 2015";
 preguntaids[19] = 672


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[20]= "21)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[20]= new Array();
 choices[20][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[20][1] = "Ninguna de las respuestas es correcta.";
 choices[20][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[20][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[20] = 0;
 units[20] = ['5'];
 blocks[20] = ['A1'];
 comments[20] = "Id Pregunta: 154. Uni&oacute;n Europea";
 preguntaids[20] = 154


//  Id pregunta: 8301 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;En qu&eacute; sentencia de SQL, OLAP proporciona mayor velocidad de procesamiento?";
 choices[21]= new Array();
 choices[21][0] = "INSERT";
 choices[21][1] = "UPDATE";
 choices[21][2] = "DELETE";
 choices[21][3] = "SELECT";
 answers[21] = 3;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8301. Examen UPM A2 2011";
 preguntaids[21] = 8301


//  Id pregunta: 9759 Año de creación de pregunta: 2014
 questions[22]= "23)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si:";
 choices[22]= new Array();
 choices[22][0] = "Realizan una revisi&oacute;n del desarrollo del sistema";
 choices[22][1] = "Recomiendan medidas de mejora";
 choices[22][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n";
 choices[22][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[22] = 3;
 units[22] = ['36'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 9759. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema.";
 preguntaids[22] = 9759


//  Id pregunta: 8011 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[23]= new Array();
 choices[23][0] = "1992";
 choices[23][1] = "2008";
 choices[23][2] = "2011";
 choices[23][3] = "2012";
 answers[23] = 2;
 units[23] = ['60'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8011. Examen TIC A2 2010";
 preguntaids[23] = 8011


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[24]= "25)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[24]= new Array();
 choices[24][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[24][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[24][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[24][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[24] = 0;
 units[24] = ['12'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 329. Modelo econ&oacute;mico";
 preguntaids[24] = 329


//  Id pregunta: 4671 Año de creación de pregunta: 2002
 questions[25]= "26)  Del protocolo IKE de IPSec podemos decir:";
 choices[25]= new Array();
 choices[25][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[25][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[25][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[25][3] = "nada de lo anterior es cierto";
 answers[25] = 0;
 units[25] = ['119'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4671. Consultar rfc 2409";
 preguntaids[25] = 4671


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[26]= "27)  El grado de autoabastecimiento espa&ntilde;ol energ&eacute;tico se sit&uacute;a en torno a:";
 choices[26]= new Array();
 choices[26][0] = "10%";
 choices[26][1] = "25%";
 choices[26][2] = "45%";
 choices[26][3] = "60%";
 answers[26] = 1;
 units[26] = ['12'];
 blocks[26] = ['A3'];
 comments[26] = "Id Pregunta: 351. Modelo econ&oacute;mico";
 preguntaids[26] = 351


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[27]= new Array();
 choices[27][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[27][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[27][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[27][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[27] = 0;
 units[27] = ['48'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 639. AGE A1 2015";
 preguntaids[27] = 639


//  Id pregunta: 1042 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[28]= new Array();
 choices[28][0] = "Conferencia de Presidentes.";
 choices[28][1] = "Convenios de colaboraci&oacute;n.";
 choices[28][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[28][3] = "Conferencias Sectoriales.";
 answers[28] = 0;
 units[28] = ['4', '7', '8', '9'];
 blocks[28] = ['A1', 'A2'];
 comments[28] = "Id Pregunta: 1042. Ley 40/2015";
 preguntaids[28] = 1042


//  Id pregunta: 8263 Año de creación de pregunta: 2011
 questions[29]= "30)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[29]= new Array();
 choices[29][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[29][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[29][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[29][3] = "39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas";
 answers[29] = 1;
 units[29] = ['10'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 8263. Examen TIC A2 2010 interna";
 preguntaids[29] = 8263


//  Id pregunta: 1658 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[30]= new Array();
 choices[30][0] = "Ley Org&aacute;nica.";
 choices[30][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[30][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[30][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[30] = 2;
 units[30] = ['1'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 1658. ";
 preguntaids[30] = 1658


//  Id pregunta: 9620 Año de creación de pregunta: 2014
 questions[31]= "32)  En relaci&oacute;n con el mecanismo de protecci&oacute;n de derechos de autor por huella digital, &iquest;c&oacute;mo se consigue que los datos del usuario que ha adquirido los derechos de uso del objeto no sean conocidos por el vendedor?";
 choices[31]= new Array();
 choices[31][0] = "Mediante el uso de https para asegurar la privacidad de la comunicaci&oacute;n";
 choices[31][1] = "Mediante el uso de un sistema de huella digital asim&eacute;trica, que emplea criptograf&iacute;a asim&eacute;trica";
 choices[31][2] = "Mediante el uso de un sistema de huella digital an&oacute;nima, utilizando un tercero de confianza que conoce tanto la identidad del comprador como del vendedor";
 choices[31][3] = "No es posible, el vendedor debe conocer los datos del comprador para poder transmitirle los derechos de uso del objeto";
 answers[31] = 2;
 units[31] = ['41'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 9620. La huella digital es un mecanismo para defender los derechos de autor y combatir la copia no autorizada de contenidos que consiste en introducir una serie de bits imperceptibles sobre un producto de soporte electr&oacute;nico (CD-ROM, DVD.)";
 preguntaids[31] = 9620


//  Id pregunta: 6587 Año de creación de pregunta: 2009
 questions[32]= "33)  Referido a OLAP, &iquest;cu&aacute;l es el significado m&aacute;s aproximado de Drill-Across?";
 choices[32]= new Array();
 choices[32][0] = "Navegar hacia un mayor nivel de agregaci&oacute;n.";
 choices[32][1] = "Moverse entre cubos.";
 choices[32][2] = "Descender a un menor nivel de agregaci&oacute;n.";
 choices[32][3] = "Elecci&oacute;n del n&uacute;mero de dimensiones a visualizar.";
 answers[32] = 1;
 units[32] = ['72'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 6587. ";
 preguntaids[32] = 6587


//  Id pregunta: 1227 Año de creación de pregunta: 2016
 questions[33]= "34)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Screened Subnet.";
 choices[33][1] = "Dual-Homed Host.";
 choices[33][2] = "Router-Homed Host.";
 choices[33][3] = "Screened Host.";
 answers[33] = 3;
 units[33] = ['119'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1227. ";
 preguntaids[33] = 1227


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[34]= "35)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[34][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[34][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[34][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[34] = 2;
 units[34] = ['53'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 647. AGE A1 2015";
 preguntaids[34] = 647


//  Id pregunta: 1628 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la afirmaci&oacute;n correcta. TCP es:";
 choices[35]= new Array();
 choices[35][0] = "Un protocolo de la capa de transporte orientado a conexi&oacute;n.";
 choices[35][1] = "Un protocolo de la capa de transporte no orientado a conexi&oacute;n.";
 choices[35][2] = "Un protocolo de las capas de enlace y red que puede detectar y compensar paquetes perdidos o datos alterados.";
 choices[35][3] = "Un protocolo de la capa de transporte orientado fundamentalmente a regular el flujo de transmisi&oacute;n para no saturar a los receptores m&aacute;s lentos.";
 answers[35] = 0;
 units[35] = ['109'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1628. ";
 preguntaids[35] = 1628


//  Id pregunta: 10542 Año de creación de pregunta: 2015
 questions[36]= "37)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[36]= new Array();
 choices[36][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[36][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[36][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[36][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[36] = 0;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 10542. ";
 preguntaids[36] = 10542


//  Id pregunta: 2474 Año de creación de pregunta: 2009
 questions[37]= "38)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[37]= new Array();
 choices[37][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[37][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[37][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, los proveedores de Acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos";
 choices[37][3] = "las respuestas 'a' y 'b' son correctas";
 answers[37] = 0;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 2474. ";
 preguntaids[37] = 2474


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[38]= new Array();
 choices[38][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[38][1] = "Entrada en la Uni&oacute;n Europea";
 choices[38][2] = "Pactos de la Moncloa";
 choices[38][3] = "Ingreso en la ONU";
 answers[38] = 3;
 units[38] = ['12'];
 blocks[38] = ['A3'];
 comments[38] = "Id Pregunta: 347. Modelo econ&oacute;mico";
 preguntaids[38] = 347


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[39]= "40)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[39]= new Array();
 choices[39][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[39][1] = "garantizar la conservaci&oacute;n del documento";
 choices[39][2] = "garantizar la autenticidad del documento";
 choices[39][3] = "garantizar la integridad del documento";
 answers[39] = 0;
 units[39] = ['7'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 246. Ley 39/2015";
 preguntaids[39] = 246


//  Id pregunta: 1920 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; funci&oacute;n realiza el splitter en la conexi&oacute;n ADSL?";
 choices[40]= new Array();
 choices[40][0] = "Para discriminar dos bandas de frecuencias";
 choices[40][1] = "Para ecualizar la se&ntilde;al vocal";
 choices[40][2] = "EI splitter solo se utiliza en las conexiones HDSL";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 0;
 units[40] = ['106'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1920. ";
 preguntaids[40] = 1920


//  Id pregunta: 7794 Año de creación de pregunta: 2010
 questions[41]= "42)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[41]= new Array();
 choices[41][0] = "GPRS.";
 choices[41][1] = "UMTS.";
 choices[41][2] = "GSM.";
 choices[41][3] = "DECT.";
 answers[41] = 1;
 units[41] = ['117'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7794. ";
 preguntaids[41] = 7794


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[42]= "43)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[42]= new Array();
 choices[42][0] = "El Tratado de Maastrich.";
 choices[42][1] = "El Tratado de Amsterdam.";
 choices[42][2] = "El Tratado de Par&iacute;s.";
 choices[42][3] = "El Tratado de Roma.";
 answers[42] = 3;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 162. Uni&oacute;n Europea";
 preguntaids[42] = 162


//  Id pregunta: 6297 Año de creación de pregunta: 2003
 questions[43]= "44)  Indicar la opci&oacute;n incorrecta:";
 choices[43]= new Array();
 choices[43][0] = "El Proceso Unificado Desarrollo Software (PUDS) se compone de fases, iteraciones y ciclos.";
 choices[43][1] = "Las fases del PUDS son iniciaci&oacute;n, elaboraci&oacute;n, construcci&oacute;n y decisi&oacute;n";
 choices[43][2] = "En cada fase hay varias iteraciones. La iteraci&oacute;n produce una versi&oacute;n de un producto entregable que se ir&aacute; incrementando en cada iteraci&oacute;n hasta convertirse producto final";
 choices[43][3] = "El paso a trav&eacute;s de las cuatro fases constituye un ciclo de desarrollo";
 answers[43] = 1;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6297. ";
 preguntaids[43] = 6297


//  Id pregunta: 6486 Año de creación de pregunta: 2003
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes entidades no est&aacute; sometida al RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[44]= new Array();
 choices[44][0] = "Entidades Locales";
 choices[44][1] = "Fundaciones p&uacute;blicas";
 choices[44][2] = "Mutuas de Accidentes de Trabajo y Enfermedades Profesionales de la Seguridad Social";
 choices[44][3] = "Todas las entidades anteriores est&aacute;n sometidas al RD Legislativo 3/2011.";
 answers[44] = 3;
 units[44] = ['37'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 6486. ";
 preguntaids[44] = 6486


//  Id pregunta: 8373 Año de creación de pregunta: 2011
 questions[45]= "46)  Respecto a AJAX es falso que:";
 choices[45]= new Array();
 choices[45][0] = "Reduce el volumen de informaci&oacute;n a intercambiar entre el cliente y el servidor frente al empleo del refresco de p&aacute;gina completa.";
 choices[45][1] = "No se puede emplear para desarrollar aplicaciones RIA.";
 choices[45][2] = "Existen m&uacute;ltiples liber&iacute;as para simplificar el desarrollo con AJAX.";
 choices[45][3] = "Son las siglas de Asynchronous JavaScript And XML.";
 answers[45] = 1;
 units[45] = ['62'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8373. Analista Ayto. Madrid 2010";
 preguntaids[45] = 8373


//  Id pregunta: 8870 Año de creación de pregunta: 2013
 questions[46]= "47)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros:";
 choices[46]= new Array();
 choices[46][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[46][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[46][2] = "Puede ser de cualquier nacionalidad";
 choices[46][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[46] = 3;
 units[46] = ['121'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8870. ";
 preguntaids[46] = 8870


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[47]= new Array();
 choices[47][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[47][1] = "Autorizar indultos generales.";
 choices[47][2] = "Sancionar las leyes.";
 choices[47][3] = "Promulgar las leyes.";
 answers[47] = 1;
 units[47] = ['2'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 99. AGE A2 2015";
 preguntaids[47] = 99


//  Id pregunta: 6655 Año de creación de pregunta: 2009
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes procedimientos de adjudicaci&oacute;n NO se contempla en el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico?";
 choices[48]= new Array();
 choices[48][0] = "Negociado";
 choices[48][1] = "Abierto";
 choices[48][2] = "Restringido";
 choices[48][3] = "Concurso";
 answers[48] = 3;
 units[48] = ['37'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 6655. El concurso no es un procedimiento de adjudicaci&oacute;n.";
 preguntaids[48] = 6655


//  Id pregunta: 4639 Año de creación de pregunta: 2002
 questions[49]= "50)  10BaseT es:";
 choices[49]= new Array();
 choices[49][0] = "Un tipo de modem primario";
 choices[49][1] = "Una variante del est&aacute;ndar IEEE 802.3 para trabajar sobre pares trenzados";
 choices[49][2] = "Un m&eacute;todo de acceso en contenci&oacute;n";
 choices[49][3] = "Un m&eacute;todo de acceso por paso de testigo";
 answers[49] = 1;
 units[49] = ['104'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4639. ";
 preguntaids[49] = 4639


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[50]= new Array();
 choices[50][0] = "Tiene car&aacute;cter facultativo.";
 choices[50][1] = "Tiene car&aacute;cter potestativo.";
 choices[50][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[50][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[50] = 1;
 units[50] = ['22'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 500. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[50] = 500


//  Id pregunta: 10822 Año de creación de pregunta: 2015
 questions[51]= "52)  El nivel 2 de un DFD se conoce como:";
 choices[51]= new Array();
 choices[51][0] = "Diagrama de expansi&oacute;n";
 choices[51][1] = "Diagrama de paquetes";
 choices[51][2] = "Diagrama de nivel superior";
 choices[51][3] = "Diagrama de contexto";
 answers[51] = 0;
 units[51] = ['86'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 10822. ";
 preguntaids[51] = 10822


//  Id pregunta: 4992 Año de creación de pregunta: 2002
 questions[52]= "53)  Los problemas principales de IPv4 que hacen necesario IPv6 son:";
 choices[52]= new Array();
 choices[52][0] = "los relativos a la escasez de direcciones";
 choices[52][1] = "los relativos al tama&ntilde;o de las tablas de encaminamiento";
 choices[52][2] = "los relativos a la calidad de servicio";
 choices[52][3] = "todos los anteriores";
 answers[52] = 3;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4992. ";
 preguntaids[52] = 4992


//  Id pregunta: 8143 Año de creación de pregunta: 2011
 questions[53]= "54)  La Web sem&aacute;ntica pretende dotar a la Web de mayor significado, gracias a una informaci&oacute;n mejor definida. Para ello se utilizan tecnolog&iacute;as como:";
 choices[53]= new Array();
 choices[53][0] = "RTF.";
 choices[53][1] = "RML.";
 choices[53][2] = "OWL.";
 choices[53][3] = "Jabsys.";
 answers[53] = 2;
 units[53] = ['125'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8143. Examen TIC A2 2010 interna";
 preguntaids[53] = 8143


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[54]= new Array();
 choices[54][0] = "El Presidente del Senado.";
 choices[54][1] = "El Defensor del Pueblo.";
 choices[54][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[54][3] = "El Presidente del Gobierno.";
 answers[54] = 0;
 units[54] = ['1'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 62. Constituci&oacute;n de 1978";
 preguntaids[54] = 62


//  Id pregunta: 1117 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; relacionado con el sistema de archivos distribuido Lustre:";
 choices[55]= new Array();
 choices[55][0] = "DSS (Distributed Storage Server).";
 choices[55][1] = "OST (Object Storage Target).";
 choices[55][2] = "OSS (Object Storage Server).";
 choices[55][3] = "MDS (MetaData Server).";
 answers[55] = 0;
 units[55] = ['53'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1117. ";
 preguntaids[55] = 1117


//  Id pregunta: 10279 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;Cu&aacute;l es la principal raz&oacute;n para establecer una L&iacute;nea Base (Baseline)?";
 choices[56]= new Array();
 choices[56][0] = "Estandarizar la operaci&oacute;n";
 choices[56][1] = "Conocer el coste de los servicios proporcionados";
 choices[56][2] = "Para que los roles y responsabilidades sean claras";
 choices[56][3] = "Para comparaciones posteriores";
 answers[56] = 3;
 units[56] = ['101'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 10279. ";
 preguntaids[56] = 10279


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[57]= "58)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[57]= new Array();
 choices[57][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[57][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[57][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[57][3] = "ratificados por Espa&ntilde;a y publicadas en el BOE, no son fuente de derecho.";
 answers[57] = 2;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 13. Constituci&oacute;n de 1978";
 preguntaids[57] = 13


//  Id pregunta: 5917 Año de creación de pregunta: 2007
 questions[58]= "59)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[58]= new Array();
 choices[58][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[58][1] = "Las comunicaciones comerciales";
 choices[58][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[58][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[58] = 0;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 5917. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";
 preguntaids[58] = 5917


//  Id pregunta: 7138 Año de creación de pregunta: 2010
 questions[59]= "60)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[59]= new Array();
 choices[59][0] = "150.001 hasta 600.000 euros";
 choices[59][1] = "150.001 hasta 300.000 euros";
 choices[59][2] = "300.001 hasta 600.000 euros";
 choices[59][3] = "600.001 hasta 1,000.000 euros";
 answers[59] = 0;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 7138. Ley 34/2002, art&iacute;culo 39";
 preguntaids[59] = 7138


//  Id pregunta: 1393 Año de creación de pregunta: 2016
 questions[60]= "61)  EI est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?";
 choices[60]= new Array();
 choices[60][0] = "Tier 5";
 choices[60][1] = "Tier 4";
 choices[60][2] = "Tier 3";
 choices[60][3] = "Tier 0";
 answers[60] = 1;
 units[60] = ['104'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1393. ";
 preguntaids[60] = 1393


//  Id pregunta: 6764 Año de creación de pregunta: 2009
 questions[61]= "62)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[61]= new Array();
 choices[61][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursos del mismo";
 choices[61][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permite compartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes";
 choices[61][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemas operativos en una m&aacute;quina";
 choices[61][3] = "Es un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de la Virtualization API Standard que realizan los sistemas operativos hu&eacute;spedes";
 answers[61] = 2;
 units[61] = ['124'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6764. ";
 preguntaids[61] = 6764


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[62]= new Array();
 choices[62][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[62][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[62][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[62][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[62] = 1;
 units[62] = ['7'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 252. Ley 39/2015";
 preguntaids[62] = 252


//  Id pregunta: 2306 Año de creación de pregunta: 2002
 questions[63]= "64)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(2,4,6); B( 6,15,30); y C (4,7,16); la duraci&oacute;n prevista del proyecto ser&aacute;:( Nota ActividadX(tpo_optimista, tpo_m&aacute;sProbable, tpo_pesimista))";
 choices[63]= new Array();
 choices[63][0] = "26";
 choices[63][1] = "31";
 choices[63][2] = "28";
 choices[63][3] = "25";
 answers[63] = 2;
 units[63] = ['31'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2306. DURACI&Oacute;N= (tpo_optimista + tpo_pesimista + 4*tpo_probable)/6";
 preguntaids[63] = 2306


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[64]= new Array();
 choices[64][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[64][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[64][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[64][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[64] = 0;
 units[64] = ['14'];
 blocks[64] = ['A3'];
 comments[64] = "Id Pregunta: 365. Pol&iacute;ticas de igualdad";
 preguntaids[64] = 365


//  Id pregunta: 5667 Año de creación de pregunta: 2007
 questions[65]= "66)  Un organismo europeo de normalizaci&oacute;n, tiene como misi&oacute;n producir normas de telecomunicaciones para hoy y para el futuro. Sus siglas son:";
 choices[65]= new Array();
 choices[65][0] = "ETSI";
 choices[65][1] = "CEN";
 choices[65][2] = "CENELEC";
 choices[65][3] = "CEPT";
 answers[65] = 0;
 units[65] = ['48'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 5667. ";
 preguntaids[65] = 5667


//  Id pregunta: 3063 Año de creación de pregunta: 2002
 questions[66]= "67)  Si una relaci&oacute;n no posee grupos repetitivos y cada atributo que no pertenezca a la clave es identificado &uacute;nicamente y de forma total por la clave se dice que est&aacute; en:";
 choices[66]= new Array();
 choices[66][0] = "Primera forma normal";
 choices[66][1] = "Segunda forma normal";
 choices[66][2] = "Tercera forma normal";
 choices[66][3] = "Forma normal de Boyce-Codd";
 answers[66] = 1;
 units[66] = ['61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3063. ";
 preguntaids[66] = 3063


//  Id pregunta: 2508 Año de creación de pregunta: 2004
 questions[67]= "68)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[67]= new Array();
 choices[67][0] = "DXL (Document eXtended Language)";
 choices[67][1] = "DTD (Document Type Definition)";
 choices[67][2] = "DOM (Document Object Model)";
 choices[67][3] = "DML (Document Markup Language)";
 answers[67] = 1;
 units[67] = ['74'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2508. Examen TIC MAP B 2004";
 preguntaids[67] = 2508


//  Id pregunta: 3258 Año de creación de pregunta: 2003
 questions[68]= "69)  En que tres bibliotecas esta basado GTK+";
 choices[68]= new Array();
 choices[68][0] = "Bonobo, Nautilus, ATK";
 choices[68][1] = "Gnome-db/libgda";
 choices[68][2] = "Glib, Pango, ATK";
 choices[68][3] = "BCEL, Log4j";
 answers[68] = 2;
 units[68] = ['66'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3258. ";
 preguntaids[68] = 3258


//  Id pregunta: 10543 Año de creación de pregunta: 2015
 questions[69]= "70)  Qu&eacute; roles est&aacute;n sujetos al r&eacute;gimen sancionador de la Ley Org&aacute;nica de Protecci&oacute;n de DAtos";
 choices[69]= new Array();
 choices[69][0] = "Responsable del tratamiento";
 choices[69][1] = "Responsable del fichero";
 choices[69][2] = "Ambos";
 choices[69][3] = "Ninguno";
 answers[69] = 2;
 units[69] = ['35'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 10543. ";
 preguntaids[69] = 10543


//  Id pregunta: 3413 Año de creación de pregunta: 2006
 questions[70]= "71)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas...";
 choices[70]= new Array();
 choices[70][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[70][1] = "Utilizan slots donde cada slot se corresponde con una idea";
 choices[70][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[70][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[70] = 0;
 units[70] = ['68'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3413. ";
 preguntaids[70] = 3413


//  Id pregunta: 5482 Año de creación de pregunta: 2007
 questions[71]= "72)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[71]= new Array();
 choices[71][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[71][1] = "Autenticaci&oacute;n, confidencialidad, integridad, disponibilidad y trazabilidad";
 choices[71][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[71][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[71] = 1;
 units[71] = ['45'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 5482. ";
 preguntaids[71] = 5482


//  Id pregunta: 4991 Año de creación de pregunta: 2002
 questions[72]= "73)  Los prestadores de servicios de la sociedad de la informaci&oacute;n, seg&uacute;n la Ley 34/2002, tienen obligaci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "De comunicar a la Agencia de Protecci&oacute;n de Datos peri&oacute;dicamente los datos de tr&aacute;fico relativos a comunicaciones electr&oacute;nicas";
 choices[72][1] = "De comunicar al Registro de la Propiedad y a la Conserjer&iacute;a de Administraciones P&uacute;blicas su nombre de dominio y direcci&oacute;n de internet";
 choices[72][2] = "De mantener datos para su utilizaci&oacute;n en el marco de una investigaci&oacute;n criminal o para la salvaguarda de la seguridad p&uacute;blica y la defensa nacional sin sujeci&oacute;n a lo dispuesto en la normativa sobre protecci&oacute;n de datos personales";
 choices[72][3] = "De almacenar los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un periodo m&aacute;ximo de 12 meses";
 answers[72] = 3;
 units[72] = ['121'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4991. ";
 preguntaids[72] = 4991


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[73]= new Array();
 choices[73][0] = "A los cinco a&ntilde;os.";
 choices[73][1] = "A los dos a&ntilde;os.";
 choices[73][2] = "A los tres a&ntilde;os.";
 choices[73][3] = "A los cuatro a&ntilde;os.";
 answers[73] = 0;
 units[73] = ['11'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 308. Presupuestos generales";
 preguntaids[73] = 308


//  Id pregunta: 10197 Año de creación de pregunta: 2015
 questions[74]= "75)  &iquest;En qu&eacute; circunstancias los prestadores de servicios de la sociedad de la informaci&oacute;n no son responsables por la informaci&oacute;n que proporcionen a los destinatarios de sus servicios?";
 choices[74]= new Array();
 choices[74][0] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite actu&eacute; bajo la direcci&oacute;n, autoridad o control del prestador que facilite la localizaci&oacute;n de esos contenidos.";
 choices[74][1] = "Siempre que tengan conocimiento de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n y aleguen la imposibilidad de suprimir o inutilizar el enlace.";
 choices[74][2] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite desconozca el contenido il&iacute;cito de dicha informaci&oacute;n.";
 choices[74][3] = "Siempre que no tengan conocimiento efectivo de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n o si lo tienen, act&uacute;en de forma diligente para suprimir o inutilizar el enlace.";
 answers[74] = 3;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 10197. Examen TIC A1 2014";
 preguntaids[74] = 10197


