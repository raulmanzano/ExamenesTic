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
//  Id pregunta: 8746 Año de creación de pregunta: 2013
 questions[0]= "1)  El riesgo se puede:";
 choices[0]= new Array();
 choices[0][0] = "Eliminar, reducir, asumir o transferir.";
 choices[0][1] = "Eliminar, reducir pero no asegurar.";
 choices[0][2] = "Reducir, asumir, transferir pero nunca se puede eliminar del todo.";
 choices[0][3] = "Eliminar, reducir, asumir, transferir o asegurar.";
 answers[0] = 3;
 units[0] = ['45'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 8746. ";
 preguntaids[0] = 8746


//  Id pregunta: 5366 Año de creación de pregunta: 2006
 questions[1]= "2)  Con el termino &quot;ventana de backup&quot; se define";
 choices[1]= new Array();
 choices[1][0] = "El espacio m&aacute;ximo disponible para un posible backup, dependiente de la capacidad de las cintas utilizadas";
 choices[1][1] = "La m&aacute;xima velocidad de transferencia de la cinta, que determina la duraci&oacute;n del mismo.";
 choices[1][2] = "El ancho de banda de la red de backup, que determina la duraci&oacute;n del mismo.";
 choices[1][3] = "El periodo de inactividad del sistema, que define el tiempo m&aacute;ximo disponible para realizar el backup.";
 answers[1] = 3;
 units[1] = ['45'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 5366. ";
 preguntaids[1] = 5366


//  Id pregunta: 8114 Año de creación de pregunta: 2011
 questions[2]= "3)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[2]= new Array();
 choices[2][0] = "Gesti&oacute;n de riesgos.";
 choices[2][1] = "An&aacute;lisis de salvaguardias.";
 choices[2][2] = "An&aacute;lisis de riesgos.";
 choices[2][3] = "Gesti&oacute;n de salvaguardias.";
 answers[2] = 2;
 units[2] = ['45'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 8114. Examen TIC A2 2010 interna";
 preguntaids[2] = 8114


//  Id pregunta: 9763 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[3]= new Array();
 choices[3][0] = "Escaneo de iris y de huella dactilar";
 choices[3][1] = "Identificador de usuario y sistema GPS";
 choices[3][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[3][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[3] = 2;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 9763. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";
 preguntaids[3] = 9763


//  Id pregunta: 9760 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[4]= new Array();
 choices[4][0] = "Robo de los datos desde el cliente";
 choices[4][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red";
 choices[4][2] = "Un troyano en el navegador";
 choices[4][3] = "Escuchas ilegales en la red";
 answers[4] = 2;
 units[4] = ['45'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9760. ";
 preguntaids[4] = 9760


//  Id pregunta: 8741 Año de creación de pregunta: 2013
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes no es una clave para asegurar la eficacia de los planes de continuidad seg&uacute;n la norma ISO 17799?";
 choices[5]= new Array();
 choices[5][0] = "Probar las copias de seguridad.";
 choices[5][1] = "Separaci&oacute;n l&oacute;gica de las copias de seguridad.";
 choices[5][2] = "No descartar amenazas.";
 choices[5][3] = "La ISO 17799 no define claves sino dominios de control.";
 answers[5] = 1;
 units[5] = ['45'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 8741. ";
 preguntaids[5] = 8741


//  Id pregunta: 8750 Año de creación de pregunta: 2013
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es un requerimiento general de la labor de un auditor?";
 choices[6]= new Array();
 choices[6][0] = "Proporcionar una garant&iacute;a razonable de que se alcanzan los objetivos de control";
 choices[6][1] = "Supervisar que la Direcci&oacute;n aborda obligatoriamente las acciones recomendadas";
 choices[6][2] = "Identificar si existen debilidades significativas en los controles";
 choices[6][3] = "Sustanciar el riesgo que puede estar asociado a las debilidades identificadas";
 answers[6] = 1;
 units[6] = ['45'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 8750. ";
 preguntaids[6] = 8750


//  Id pregunta: 6361 Año de creación de pregunta: 2003
 questions[7]= "8)  Defina Throughput";
 choices[7]= new Array();
 choices[7][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 choices[7][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 choices[7][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajos por hora o transacciones por segundo)";
 choices[7][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 answers[7] = 0;
 units[7] = ['45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 6361. Examen 2006 JCYL";
 preguntaids[7] = 6361


//  Id pregunta: 6781 Año de creación de pregunta: 2010
 questions[8]= "9)  En MAGERIT &iquest;cu&aacute;l de las siguientes opciones NO es cierta?";
 choices[8]= new Array();
 choices[8][0] = "Riesgo es la posibilidad de que suceda un da&ntilde;o o perjuicio";
 choices[8][1] = "Impacto es el evento que puede desencadenar un incidente en la organizaci&oacute;n";
 choices[8][2] = "Existen tres submodelos: elementos, eventos y procesos";
 choices[8][3] = "La informaci&oacute;n es un activo";
 answers[8] = 1;
 units[8] = ['45'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 6781. Castilla La Mancha 2009";
 preguntaids[8] = 6781


//  Id pregunta: 5664 Año de creación de pregunta: 2007
 questions[9]= "10)  &iquest;A qu&eacute; se denomina riesgo en MAGERIT version 3?";
 choices[9]= new Array();
 choices[9][0] = "A la medida del da&ntilde;o probable sobre un sistema.";
 choices[9][1] = "Al suceso que puede afectar a un activo y causarle un da&ntilde;o.";
 choices[9][2] = "A la medida del da&ntilde;o sobre un activo derivado de la materializaci&oacute;n de una amenaza.";
 choices[9][3] = "Al recurso del sistema de informaci&oacute;n expuesto a un ataque.";
 answers[9] = 0;
 units[9] = ['45'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 5664. ";
 preguntaids[9] = 5664


//  Id pregunta: 9770 Año de creación de pregunta: 2014
 questions[10]= "11)  Los controles compensatorios tienen como objetivo:";
 choices[10]= new Array();
 choices[10][0] = "reducir el riesgo ante una debilidad existente";
 choices[10][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[10][2] = "Solucionar problemas detectados por controles detectivos";
 choices[10][3] = "Reportar errores";
 answers[10] = 0;
 units[10] = ['45', '36'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 9770. Las opciones B, C y D son caracter&iacute;sticas de controles preventivo, correctivo y detectivo respectivamente.";
 preguntaids[10] = 9770


//  Id pregunta: 8745 Año de creación de pregunta: 2013
 questions[11]= "12)  En cuanto a la dependencia entre activos, a la hora de evaluar riesgos:";
 choices[11]= new Array();
 choices[11][0] = "La seguridad del activo superior depende de la del inferior.";
 choices[11][1] = "El activo superior puede ser atacado a trav&eacute;s del inferior.";
 choices[11][2] = "La relaci&oacute;n indica que el activo inferior es necesario para que el superior funcione.";
 choices[11][3] = "La a) y la b) son correctas.";
 answers[11] = 3;
 units[11] = ['45'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 8745. ";
 preguntaids[11] = 8745


//  Id pregunta: 5482 Año de creación de pregunta: 2007
 questions[12]= "13)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[12]= new Array();
 choices[12][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[12][1] = "Autenticaci&oacute;n, confidencialidad, integridad, disponibilidad y trazabilidad";
 choices[12][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[12][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[12] = 1;
 units[12] = ['45'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 5482. ";
 preguntaids[12] = 5482


//  Id pregunta: 6178 Año de creación de pregunta: 2003
 questions[13]= "14)  Seg&uacute;n Magerit V3, todas las dimensiones de la Seguridad son:";
 choices[13]= new Array();
 choices[13][0] = "Disponibilidad, integridad y confidencialidad.";
 choices[13][1] = "Disponibilidad, integridad, confidencialidad, trazabilidad y autenticidad.";
 choices[13][2] = "Disponibilidad, integridad, confidencialidad y auditabilidad.";
 choices[13][3] = "Disponibilidad e integridad.";
 answers[13] = 1;
 units[13] = ['45'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 6178. Examen TIC A Castilla La Mancha 2007";
 preguntaids[13] = 6178


//  Id pregunta: 9775 Año de creación de pregunta: 2014
 questions[14]= "15)  El volumen de datos en riesgo de p&eacute;rdida que la organizaci&oacute;n considera tolerable es:";
 choices[14]= new Array();
 choices[14][0] = "RPO (Recovery Point Objective)";
 choices[14][1] = "RTO (Recovery Time Objective)";
 choices[14][2] = "DRP (Disater Recovery Plan)";
 choices[14][3] = "Business Impact Analysis (BIA)";
 answers[14] = 0;
 units[14] = ['45'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 9775. ";
 preguntaids[14] = 9775


//  Id pregunta: 7836 Año de creación de pregunta: 2010
 questions[15]= "16)  Indique la respuesta INCORRECTA:";
 choices[15]= new Array();
 choices[15][0] = "Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[15][1] = "El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos.";
 choices[15][2] = "Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general.";
 choices[15][3] = "Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 -C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n-.";
 answers[15] = 1;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 7836. ";
 preguntaids[15] = 7836


//  Id pregunta: 8738 Año de creación de pregunta: 2013
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes situaciones NO puede considerarse un incidente?";
 choices[16]= new Array();
 choices[16][0] = "Fallo hardware.";
 choices[16][1] = "Un usuario no autorizado de la cuenta de un usuario.";
 choices[16][2] = "Un evento cuyo impacto no genere una interrupci&oacute;n prolongada del servicio.";
 choices[16][3] = "Todos los anteriores se considerar&iacute;an incidentes.";
 answers[16] = 3;
 units[16] = ['45'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 8738. ";
 preguntaids[16] = 8738


//  Id pregunta: 9232 Año de creación de pregunta: 2014
 questions[17]= "18)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[17]= new Array();
 choices[17][0] = "modelo de valor.";
 choices[17][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[17][2] = "mapa de riesgos.";
 choices[17][3] = "estado de riesgo.";
 answers[17] = 0;
 units[17] = ['45'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9232. Examen TIC A1 2013";
 preguntaids[17] = 9232


//  Id pregunta: 9772 Año de creación de pregunta: 2014
 questions[18]= "19)  Los controles detectivos tienen como objeto:";
 choices[18]= new Array();
 choices[18][0] = "reducir el riesgo ante una debilidad existente";
 choices[18][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[18][2] = "Solucionar problemas detectados por controles detectivos";
 choices[18][3] = "Reportar errores";
 answers[18] = 3;
 units[18] = ['45', '36'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 9772. ";
 preguntaids[18] = 9772


//  Id pregunta: 8743 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;Cu&aacute;les son las dimensiones de seguridad seg&uacute;n CobiT?.";
 choices[19]= new Array();
 choices[19][0] = "Confidencialidad, Disponibilidad, Integridad y Autenticidad.";
 choices[19][1] = "Confidencialidad, Integridad y Disponibilidad.";
 choices[19][2] = "Confidencialidad, Integridad, Disponibilidad y Autenticaci&oacute;n.";
 choices[19][3] = "Confidencialidad, Integridad, Disponibilidad e Interoperabilidad.";
 answers[19] = 1;
 units[19] = ['45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 8743. ";
 preguntaids[19] = 8743


//  Id pregunta: 9771 Año de creación de pregunta: 2014
 questions[20]= "21)  Los controles preventivos tienen como objeto:";
 choices[20]= new Array();
 choices[20][0] = "reducir el riesgo ante una debilidad existente";
 choices[20][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[20][2] = "Solucionar problemas detectados por controles detectivos";
 choices[20][3] = "Reportar errores";
 answers[20] = 1;
 units[20] = ['45', '36'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 9771. ";
 preguntaids[20] = 9771


//  Id pregunta: 5761 Año de creación de pregunta: 2007
 questions[21]= "22)  &iquest;Cual de los siguientes conceptos NO es un elemento b&aacute;sico de Magerit?";
 choices[21]= new Array();
 choices[21][0] = "activo";
 choices[21][1] = "salvaguarda";
 choices[21][2] = "amenaza";
 choices[21][3] = "vulnerabilidad";
 answers[21] = 3;
 units[21] = ['45'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 5761. ";
 preguntaids[21] = 5761


//  Id pregunta: 9773 Año de creación de pregunta: 2014
 questions[22]= "23)  Los controles correctivos tienen como objeto:";
 choices[22]= new Array();
 choices[22][0] = "reducir el riesgo ante una debilidad existente";
 choices[22][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[22][2] = "Solucionar problemas detectados por controles detectivos";
 choices[22][3] = "Reportar errores";
 answers[22] = 2;
 units[22] = ['45', '36'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 9773. ";
 preguntaids[22] = 9773


//  Id pregunta: 9111 Año de creación de pregunta: 2014
 questions[23]= "24)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[23]= new Array();
 choices[23][0] = "MTBF";
 choices[23][1] = "MTBR";
 choices[23][2] = "MTTR";
 choices[23][3] = "MTTF";
 answers[23] = 2;
 units[23] = ['45'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 9111. Examen TIC A2 2013";
 preguntaids[23] = 9111


//  Id pregunta: 8747 Año de creación de pregunta: 2013
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un tipo de control?.";
 choices[24]= new Array();
 choices[24][0] = "Preventivo.";
 choices[24][1] = "Detectivo.";
 choices[24][2] = "Cognitivo.";
 choices[24][3] = "Todos los anteriores lo son.";
 answers[24] = 2;
 units[24] = ['45'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 8747. ";
 preguntaids[24] = 8747


//  Id pregunta: 8300 Año de creación de pregunta: 2011
 questions[25]= "26)  MAGERIT es";
 choices[25]= new Array();
 choices[25][0] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de riesgos de sistemas de informaci&oacute;n.";
 choices[25][1] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de centros de recuperaci&oacute;n de desastres de sistemas de informaci&oacute;n.";
 choices[25][2] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de sistemas de archivo de sistemas de informaci&oacute;n.";
 choices[25][3] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de evaluaci&oacute;n de rendimiento de sistemas de informaci&oacute;n.";
 answers[25] = 0;
 units[25] = ['45'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 8300. Examen UPM A2 2011";
 preguntaids[25] = 8300


//  Id pregunta: 9102 Año de creación de pregunta: 2014
 questions[26]= "27)  Atendiendo al est&aacute;ndar ISO 22301 en un Plan de Recuperaci&oacute;n ante Desastres, el Objetivo de Punto de Recuperaci&oacute;n (Recovery Point Objective RPO) es";
 choices[26]= new Array();
 choices[26][0] = "el nivel de servicios a proporcionar en modo alterno hasta que se recupere la situaci&oacute;n normal.";
 choices[26][1] = "el tiempo que la organizaci&oacute;n puede soportar desde que se produce el fallo hasta que se recuperan los servicios cr&iacute;ticos.";
 choices[26][2] = "el tiempo m&aacute;ximo tolerable de interrupci&oacute;n.";
 choices[26][3] = "la p&eacute;rdida m&aacute;xima de datos tolerable en caso de interrupci&oacute;n.";
 answers[26] = 3;
 units[26] = ['45'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 9102. Examen TIC-A1 2013";
 preguntaids[26] = 9102


//  Id pregunta: 6177 Año de creación de pregunta: 2003
 questions[27]= "28)  Indique cu&aacute;l es la norma espa&ntilde;ola en base a la cual se certifica un Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "ISO/IEC TR 13335";
 choices[27][1] = "UNE 71501 IN";
 choices[27][2] = "UNE-ISO/EIC 17799:2002";
 choices[27][3] = "UNE-ISO/IEC 27001:2007";
 answers[27] = 3;
 units[27] = ['45'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 6177. Examen TIC A Castilla La Mancha 2007";
 preguntaids[27] = 6177


//  Id pregunta: 9762 Año de creación de pregunta: 2014
 questions[28]= "29)  La evaluaci&oacute;n del riesgo es:";
 choices[28]= new Array();
 choices[28][0] = "subjetiva";
 choices[28][1] = "objetiva";
 choices[28][2] = "Matem&aacute;tica";
 choices[28][3] = "Estad&iacute;stica";
 answers[28] = 0;
 units[28] = ['45'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 9762. Todas las metodolog&iacute;as de evaluaci&oacute;n de riesgos se basan en juicios subjetivos en alg&uacute;n momento en el proceso (por ej, para asignar ponderaciones a los distintos par&aacute;metros)";
 preguntaids[28] = 9762


//  Id pregunta: 5493 Año de creación de pregunta: 2007
 questions[29]= "30)  Un centro alternativo de tratamiento de la informaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Debe ser identificable desde el exterior, para que sea f&aacute;cilmente localizado en caso de emergencia.";
 choices[29][1] = "Debe tener las mismas restricciones de acceso f&iacute;sico que la instalaci&oacute;n principal.";
 choices[29][2] = "Debe estar ubicado en las proximidades de la instalaci&oacute;n principal, as&iacute; se puede poner en operaci&oacute;n inmediatamente.";
 choices[29][3] = "No necesita disponer del mismo nivel de supervisi&oacute;n ni controles ambientales que la instalaci&oacute;n principal, porque los costes ser&iacute;an prohibitivos.";
 answers[29] = 1;
 units[29] = ['45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 5493. ";
 preguntaids[29] = 5493


//  Id pregunta: 8739 Año de creación de pregunta: 2013
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es un dominio de control a contemplar en el Plan de Continuidad, seg&uacute;n lo establecido por la norma ISO 17799?";
 choices[30]= new Array();
 choices[30][0] = "Clasificaci&oacute;n y control de activos.";
 choices[30][1] = "Est&aacute;ndar de seguridad.";
 choices[30][2] = "Conformidad";
 choices[30][3] = "Desarrollo y mantenimiento de sistemas.";
 answers[30] = 1;
 units[30] = ['45'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 8739. ";
 preguntaids[30] = 8739


//  Id pregunta: 9781 Año de creación de pregunta: 2014
 questions[31]= "32)  En el transcurso de una auditor&iacute;a inform&aacute;tica, uno de los auditores descubre que existe un incumplimiento grave en un control inform&aacute;tico que podr&iacute;a llevar a la realizaci&oacute;n de un fraude importante por parte de un grupo de empleados, con p&eacute;rdidas econ&oacute;micas y de imagen para la empresa auditada. El auditor debe:";
 choices[31]= new Array();
 choices[31][0] = "Reunir todas las evidencias de esta deficiencia grave y convocar una reuni&oacute;n urgente con los responsables de la empresa para que conozcan este hecho y puedan tomar medidas preventivas.";
 choices[31][1] = "Contactar al grupo de empleados que pueden cometer el fraude y advertirles de lo descubierto para que no comentan el posible fraude.";
 choices[31][2] = "Reunir todas las pruebas y exponerlas todas juntas en el informe al final de la auditor&iacute;a, aunque dicho informe se entregue con posterioridad de la posibilidad de realizaci&oacute;n del fraude, ya que una auditor&iacute;a no debe interrumpirse por ninguna causa.";
 choices[31][3] = "Llamar a ISACA para informar de que se ha producido una violaci&oacute;n del c&oacute;digo &eacute;tico de conducta que se propone en COSO (Marco de Gobierno Corporativo)";
 answers[31] = 0;
 units[31] = ['36', '45'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 9781. ";
 preguntaids[31] = 9781


//  Id pregunta: 6392 Año de creación de pregunta: 2003
 questions[32]= "33)  Cual de los siguientes no es un activo en Magerit";
 choices[32]= new Array();
 choices[32][0] = "www";
 choices[32][1] = "url";
 choices[32][2] = "anon";
 choices[32][3] = "edi";
 answers[32] = 1;
 units[32] = ['45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 6392. Examen 2006 JCYL";
 preguntaids[32] = 6392


//  Id pregunta: 6700 Año de creación de pregunta: 2009
 questions[33]= "34)  Indique la respuesta INCORRECTA:";
 choices[33]= new Array();
 choices[33][0] = "Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[33][1] = "El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos";
 choices[33][2] = "Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general";
 choices[33][3] = "Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 - C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n -";
 answers[33] = 1;
 units[33] = ['45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 6700. MAP 2008 A1";
 preguntaids[33] = 6700


//  Id pregunta: 6780 Año de creación de pregunta: 2010
 questions[34]= "35)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[34]= new Array();
 choices[34][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[34][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[34][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[34][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[34] = 2;
 units[34] = ['45'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 6780. Castilla La Mancha 2009";
 preguntaids[34] = 6780


//  Id pregunta: 5484 Año de creación de pregunta: 2007
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes elementos se pueden anexar a archivos como una protecci&oacute;n contra los virus?";
 choices[35]= new Array();
 choices[35][0] = "Bloqueadores de conducta.";
 choices[35][1] = "Verificadores de redundancia c&iacute;clica (CRC)";
 choices[35][2] = "Inmunizadores.";
 choices[35][3] = "Monitores activos.";
 answers[35] = 2;
 units[35] = ['45'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 5484. ";
 preguntaids[35] = 5484


//  Id pregunta: 9778 Año de creación de pregunta: 2014
 questions[36]= "37)  Una de las diferencias entre un Plan de Recuperaci&oacute;n ante desastres (PRD o DRP en ingl&eacute;s) y un Plan de Contingencia es que:";
 choices[36]= new Array();
 choices[36][0] = "El PRD debe ser realizado antes que el Plan de Contingencia";
 choices[36][1] = "El Plan de Contingencia debe ser realizado antes que el PRD";
 choices[36][2] = "El Plan de Contingencia realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el PRD, en paralelo al Plan de Contingencia, trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 choices[36][3] = "El PRD realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el Plan de Contingencia trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 answers[36] = 2;
 units[36] = ['45'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 9778. ";
 preguntaids[36] = 9778


//  Id pregunta: 6043 Año de creación de pregunta: 2003
 questions[37]= "38)  Seg&uacute;n la metodolog&iacute;a Magerit versi&oacute;n 3 (y 2), el riesgo remanente en el sistema tras la implantaci&oacute;n de lassalvaguardas determinadas en el plan de seguridad de la informaci&oacute;n se denomina:";
 choices[37]= new Array();
 choices[37][0] = "Riesgo retenido.";
 choices[37][1] = "Riesgo acumulado.";
 choices[37][2] = "Riesgo residual.";
 choices[37][3] = "Riesgo supervisado.";
 answers[37] = 2;
 units[37] = ['45'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 6043. TIC B 2007";
 preguntaids[37] = 6043


//  Id pregunta: 6874 Año de creación de pregunta: 2010
 questions[38]= "39)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v3:";
 choices[38]= new Array();
 choices[38][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos derivados del uso de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones (TIC).";
 choices[38][1] = "Ayudar a descubrir y planificar el tratamiento oportuno para mantener los riesgos bajo control.";
 choices[38][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[38][3] = "Preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n, seg&uacute;n corresponda en cada caso.";
 answers[38] = 2;
 units[38] = ['45'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 6874. TIC A 2009";
 preguntaids[38] = 6874


//  Id pregunta: 6095 Año de creación de pregunta: 2003
 questions[39]= "40)  La norma ISO 27002 recoge:";
 choices[39]= new Array();
 choices[39][0] = "Buenas pr&aacute;ticas para la gesti&oacute;n de la seguridad de la informaci&oacute;n";
 choices[39][1] = "La reglamentaci&oacute;n de interconexi&oacute;n segura de redes inal&aacute;mbricas (WIFI)";
 choices[39][2] = "Normativa aplicable para el desarrollo de aplicaciones militares";
 choices[39][3] = "Est&aacute;ndares de desarrollo de aplicaciones de uso dual (civil y militar)";
 answers[39] = 0;
 units[39] = ['45'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 6095. Examen TIC A1 MAP 2007";
 preguntaids[39] = 6095


//  Id pregunta: 6179 Año de creación de pregunta: 2003
 questions[40]= "41)  Seg&uacute;n Magerit V3, la relaci&oacute;n de amenazas a las que est&aacute;n expuestas los activos se llama:";
 choices[40]= new Array();
 choices[40][0] = "Modelo de amenazas";
 choices[40][1] = "Informe de suficiencias.";
 choices[40][2] = "Mapa de riesgos.";
 choices[40][3] = "Listado de vulnerabilidades.";
 answers[40] = 2;
 units[40] = ['45'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 6179. Examen TIC A Castilla La Mancha 2007";
 preguntaids[40] = 6179


//  Id pregunta: 9779 Año de creación de pregunta: 2014
 questions[41]= "42)  La probabilidad de explosi&oacute;n por escape de gas en una f&aacute;brica es de 0'0001. Si llega a producirse se sabe que morir&aacute;n al menos diez empleados y se producir&aacute;n p&eacute;rdidas materiales por al menos de 100 millones de euros. &iquest;Cu&aacute;l es riesgo cuantitativo asociado a la amenaza de explosi&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "10000 euros";
 choices[41][1] = "100 millones de euros";
 choices[41][2] = "No se puede valorar porque la p&eacute;rdida de vidas humanas no es cuantificable (salvo para las compa&ntilde;&iacute;as de seguros)";
 choices[41][3] = "Muy alto";
 answers[41] = 2;
 units[41] = ['45'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 9779. ";
 preguntaids[41] = 9779


//  Id pregunta: 7692 Año de creación de pregunta: 2010
 questions[42]= "43)  La norma ISO 27002 recoge:";
 choices[42]= new Array();
 choices[42][0] = "Buenas pr&aacute;ticas para la gesti&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[42][1] = "La reglamentaci&oacute;n de interconexi&oacute;n segura de redes inal&aacute;mbricas (WIFI).";
 choices[42][2] = "Normativa aplicable para el desarrollo de aplicaciones militares.";
 choices[42][3] = "Est&aacute;ndares de desarrollo de aplicaciones de uso dual (civil y militar).";
 answers[42] = 0;
 units[42] = ['45'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 7692. Similar a Map 2007";
 preguntaids[42] = 7692


//  Id pregunta: 5565 Año de creación de pregunta: 2007
 questions[43]= "44)  Un evento con consecuencias en detrimento de la seguridad del sistema de informaci&oacute;n se denomina, seg&uacute;n Magerit v.3:";
 choices[43]= new Array();
 choices[43][0] = "Incidente";
 choices[43][1] = "Incidencia";
 choices[43][2] = "Contingencia";
 choices[43][3] = "Impacto";
 answers[43] = 0;
 units[43] = ['45'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 5565. ";
 preguntaids[43] = 5565


//  Id pregunta: 6400 Año de creación de pregunta: 2003
 questions[44]= "45)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[44]= new Array();
 choices[44][0] = "An&aacute;lisis de riesgos";
 choices[44][1] = "An&aacute;lisis de impacto";
 choices[44][2] = "Disponibilidad";
 choices[44][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[44] = 1;
 units[44] = ['45'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 6400. Examen 2006 JCYL";
 preguntaids[44] = 6400


//  Id pregunta: 8740 Año de creación de pregunta: 2013
 questions[45]= "46)  El dominio de control &quot;Seguridad ligada al personal&quot; se corresponde con la dimensi&oacute;n de seguridad:";
 choices[45]= new Array();
 choices[45][0] = "Organizativa.";
 choices[45][1] = "L&oacute;gica";
 choices[45][2] = "F&iacute;sica";
 choices[45][3] = "Legal";
 answers[45] = 0;
 units[45] = ['45'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 8740. ";
 preguntaids[45] = 8740


//  Id pregunta: 8087 Año de creación de pregunta: 2011
 questions[46]= "47)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastres se le denomina:";
 choices[46]= new Array();
 choices[46][0] = "RTO";
 choices[46][1] = "RPO";
 choices[46][2] = "SDO";
 choices[46][3] = "RDO";
 answers[46] = 1;
 units[46] = ['45'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 8087. Analista Ayto. Madrid 2010";
 preguntaids[46] = 8087


//  Id pregunta: 9758 Año de creación de pregunta: 2014
 questions[47]= "48)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[47]= new Array();
 choices[47][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[47][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[47][2] = "Determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[47][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[47] = 0;
 units[47] = ['45'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 9758. ";
 preguntaids[47] = 9758


//  Id pregunta: 9774 Año de creación de pregunta: 2014
 questions[48]= "49)  Para desarrollar un plan de continuidad de negocio de &eacute;xito es fundamental la participaci&oacute;n del usuario final durante el proceso de:";
 choices[48]= new Array();
 choices[48][0] = "Estrategias de recuperaci&oacute;n";
 choices[48][1] = "Desarrollo del plan detallado";
 choices[48][2] = "An&aacute;lisis de impacto al negocio (BIA)";
 choices[48][3] = "Mantenimiento y pruebas";
 answers[48] = 2;
 units[48] = ['45'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 9774. Durante el BIA se debe entender y conocer las necesidades del negocio, sus operaciones y el impacto en el negocio ante un desastre";
 preguntaids[48] = 9774


//  Id pregunta: 8356 Año de creación de pregunta: 2011
 questions[49]= "50)  En relacion con la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n (MAGERIT). Se&ntilde;ale cual de las opciones siguientes NO es correcta.";
 choices[49]= new Array();
 choices[49][0] = "MAGERIT figura en el inventario de m&eacute;todos de an&aacute;lisis y gesti&oacute;n de riesgos de ENISA (European Network and Information Security Agency)";
 choices[49][1] = "El modelo normativo de MAGERIT se apoya en tres submodelos: an&aacute;lisis, gesti&oacute;n y procesos.";
 choices[49][2] = "Uno de los objetivos de MAGERIT consiste en preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n";
 choices[49][3] = "PILAR es una herramienta que implementa la metodolog&iacute;a MAGERIT de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[49] = 1;
 units[49] = ['45'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 8356. Analista Ayto. Madrid 2010";
 preguntaids[49] = 8356


//  Id pregunta: 8742 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;En qu&eacute; se diferencia el Plan de Continuidad de Negocio y el Plan de Recuperaci&oacute;n ante Desastres?";
 choices[50]= new Array();
 choices[50][0] = "No existe ninguna diferencia, son t&eacute;rminos equivalentes.";
 choices[50][1] = "El Plan de Continuidad de Negocio se centra en la parte reactiva de las TIC mientras que el de Recuperaci&oacute;n ante Desastres afecta a todos los departamentos de la organizaci&oacute;n.";
 choices[50][2] = "El Plan de Recuperaci&oacute;n ante Desastres se centra en la parte reactiva y es un subconjunto del Plan de Continuidad de Negocio.";
 choices[50][3] = "Ninguna de las anteriores.";
 answers[50] = 2;
 units[50] = ['45'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 8742. ";
 preguntaids[50] = 8742


//  Id pregunta: 9764 Año de creación de pregunta: 2014
 questions[51]= "52)  Cuando una metodolog&iacute;a de ciclo de vida de desarrollo de sistemas es inadecuada, el riesgo m&aacute;s serio del nuevo sistema ser&aacute;:";
 choices[51]= new Array();
 choices[51][0] = "Se completar&aacute; tarde";
 choices[51][1] = "Superar&aacute; las estimaciones de coste";
 choices[51][2] = "No cumplir&aacute; con las necesidades de negocio y de los usuarios";
 choices[51][3] = "Ser&aacute; incompatible con los sistemas existentes";
 answers[51] = 2;
 units[51] = ['45'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 9764. Aunque todas las respuestas son riesgos, lo primero y m&aacute;s perjudicial es que el sistema no cumplir&aacute; con las necesidades de los usuarios y del negocio.";
 preguntaids[51] = 9764


//  Id pregunta: 5438 Año de creación de pregunta: 2007
 questions[52]= "53)  Indique cu&aacute;l de los siguientes est&aacute;ndares se aplica a la seguridad de los sistemas inform&aacute;ticos";
 choices[52]= new Array();
 choices[52][0] = "ISO 12207";
 choices[52][1] = "ISO 2167";
 choices[52][2] = "ISO 27002";
 choices[52][3] = "ISO 9004";
 answers[52] = 2;
 units[52] = ['45'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 5438. ";
 preguntaids[52] = 5438


//  Id pregunta: 7502 Año de creación de pregunta: 2010
 questions[53]= "54)  Se&ntilde;ale cu&aacute;l de las siguientes normas se debe tener en cuenta en el &Aacute;rea de Seguridad de una organizaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "ISO 19799.";
 choices[53][1] = "ISO 14508 sobre perfiles de protecci&oacute;n.";
 choices[53][2] = "ISO 14848.";
 choices[53][3] = "ISO 27002.";
 answers[53] = 3;
 units[53] = ['45'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 7502. Similar a Map 2005";
 preguntaids[53] = 7502


//  Id pregunta: 5854 Año de creación de pregunta: 2007
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP (Symmetric Multiprocessing) y MPP(Massively Paralleling Multiprocessing) es falsa?";
 choices[54]= new Array();
 choices[54][0] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido ensegmentos que se comuniquen entre s&iacute;.";
 choices[54][1] = "MPP no sufre cuello de botella que sufre SMP en el acceso a memoria";
 choices[54][2] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[54][3] = "Un cluster esta compuesto por dos o m&aacute;s ordenadores que se comportan como una sola m&aacute;quina";
 answers[54] = 2;
 units[54] = ['45'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 5854. Examen 2006 JCYL";
 preguntaids[54] = 5854


//  Id pregunta: 5608 Año de creación de pregunta: 2007
 questions[55]= "56)  Seg&uacute;n la norma ISO/IEC 27002, el aseguramiento de que los usuarios autorizados tienen acceso cuando lo requieran a la informaci&oacute;n y sus activos asociados, es el concepto de:";
 choices[55]= new Array();
 choices[55][0] = "Seguridad.";
 choices[55][1] = "Integridad.";
 choices[55][2] = "Disponibilidad.";
 choices[55][3] = "Confidencialidad.";
 answers[55] = 2;
 units[55] = ['45'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 5608. ";
 preguntaids[55] = 5608


//  Id pregunta: 5364 Año de creación de pregunta: 2006
 questions[56]= "57)  Caso de utilizar un &uacute;nico m&eacute;todo, se economizan cintas con backups de tipo";
 choices[56]= new Array();
 choices[56][0] = "Completo";
 choices[56][1] = "Diferencial";
 choices[56][2] = "Incremental";
 choices[56][3] = "Es indiferente";
 answers[56] = 2;
 units[56] = ['45'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 5364. ";
 preguntaids[56] = 5364


//  Id pregunta: 5365 Año de creación de pregunta: 2006
 questions[57]= "58)  Caso de utilizar un &uacute;nico m&eacute;todo, se economiza tiempo de restauraci&oacute;n con backups de tipo";
 choices[57]= new Array();
 choices[57][0] = "Completo";
 choices[57][1] = "Diferencial";
 choices[57][2] = "Incremental";
 choices[57][3] = "Es indiferente";
 answers[57] = 0;
 units[57] = ['45'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 5365. ";
 preguntaids[57] = 5365


//  Id pregunta: 7777 Año de creación de pregunta: 2010
 questions[58]= "59)  Seg&uacute;n Magerit versi&oacute;n 3 en un proyecto de an&aacute;lisis de gesti&oacute;n de riesgos, qu&eacute; producto de salida de los citados a continuaci&oacute;n NO se genera en la tarea de Planificaci&oacute;n del proyecto:";
 choices[58]= new Array();
 choices[58][0] = "Relaci&oacute;n de participantes en los grupos de interlocutores.";
 choices[58][1] = "Plan de entrevistas.";
 choices[58][2] = "Informe de recursos necesarios.";
 choices[58][3] = "Especificaci&oacute;n detallada de los objetivos del proyecto.";
 answers[58] = 3;
 units[58] = ['45'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 7777. ";
 preguntaids[58] = 7777


//  Id pregunta: 5601 Año de creación de pregunta: 2007
 questions[59]= "60)  Se&ntilde;ale la que no sea una de las t&eacute;cnicas especificas para el an&aacute;lisis de riesgos que establece MAGERIT.";
 choices[59]= new Array();
 choices[59][0] = "An&aacute;lisis de procesos.";
 choices[59][1] = "An&aacute;lisis mediante tablas.";
 choices[59][2] = "An&aacute;lisis algor&iacute;tmico.";
 choices[59][3] = "&Aacute;rboles de ataque.";
 answers[59] = 0;
 units[59] = ['45'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 5601. ";
 preguntaids[59] = 5601


//  Id pregunta: 9777 Año de creación de pregunta: 2014
 questions[60]= "61)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[60]= new Array();
 choices[60][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[60][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[60][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[60][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[60] = 0;
 units[60] = ['45'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 9777. ";
 preguntaids[60] = 9777


//  Id pregunta: 8748 Año de creación de pregunta: 2013
 questions[61]= "62)  Entre las tareas del auditor no se incluye:";
 choices[61]= new Array();
 choices[61][0] = "Comprender y evaluar la metodolog&iacute;a seguida en el proceso de desarrollo";
 choices[61][1] = "Identificar las fases de la metodolog&iacute;a de desarrollo";
 choices[61][2] = "Revisar el cumplimiento de est&aacute;ndares y normas de control interno";
 choices[61][3] = "Desarrollar e implantar los cambios necesarios para el cumplimiento con est&aacute;ndares y normas";
 answers[61] = 3;
 units[61] = ['45'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 8748. ";
 preguntaids[61] = 8748


//  Id pregunta: 6045 Año de creación de pregunta: 2003
 questions[62]= "63)  En la ejecuci&oacute;n de un proyecto de auditor&iacute;a inform&aacute;tica sobre un sistema de informaci&oacute;n, el uso de procedimientos estad&iacute;sticos de muestreo ayudar&aacute; a minimizar el riesgo:";
 choices[62]= new Array();
 choices[62][0] = "De muestreo.";
 choices[62][1] = "De detecci&oacute;n.";
 choices[62][2] = "Inherente.";
 choices[62][3] = "De control.";
 answers[62] = 1;
 units[62] = ['45'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 6045. TIC B 2007";
 preguntaids[62] = 6045


//  Id pregunta: 6046 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;Cu&aacute;l de estas medidas de seguridad de las instalaciones contra incendios en los centro de proceso de datos no es adecuada?:";
 choices[63]= new Array();
 choices[63][0] = "Utilizaci&oacute;n de tabicados de hormig&oacute;n en su construcci&oacute;n.";
 choices[63][1] = "Utilizaci&oacute;n de un mecanismo para cortar la alimentaci&oacute;n el&eacute;ctrica.";
 choices[63][2] = "Utilizaci&oacute;n de agentes extintores como el gas HAL&Oacute;N.";
 choices[63][3] = "Utilizaci&oacute;n de contenedores de papel con tapa met&aacute;lica que cierre autom&aacute;ticamente.";
 answers[63] = 2;
 units[63] = ['45'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 6046. TIC B 2007";
 preguntaids[63] = 6046


//  Id pregunta: 5363 Año de creación de pregunta: 2006
 questions[64]= "65)  Un sitio frio de respaldo se caracteriza por";
 choices[64]= new Array();
 choices[64][0] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[64][1] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[64][2] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[64][3] = "ninguna de las anteriores";
 answers[64] = 0;
 units[64] = ['45'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 5363. ";
 preguntaids[64] = 5363


//  Id pregunta: 5760 Año de creación de pregunta: 2007
 questions[65]= "66)  Seg&uacute;n la Norma UNE-ISO/IEC 27002:2009 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[65]= new Array();
 choices[65][0] = "seguridad de los servicios de red";
 choices[65][1] = "sincronizaci&oacute;n de relojes";
 choices[65][2] = "responsabilidades del usuario";
 choices[65][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[65] = 3;
 units[65] = ['45'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 5760. ";
 preguntaids[65] = 5760


//  Id pregunta: 8749 Año de creación de pregunta: 2013
 questions[66]= "67)  ISACA:";
 choices[66]= new Array();
 choices[66][0] = "Es la Information Security Audit and Control Association";
 choices[66][1] = "Posee una metodolog&iacute;a basada en COBIT, de cara a obtener los controles a aplicar durante la auditor&iacute;a y en CMMI, de cara a obtener un modelo de desarrollo sobre el que basarse para auditar el existente";
 choices[66][2] = "Posee una metodolog&iacute;a propia, que no se basa ni en COBIT ni en CMMI";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = 3;
 units[66] = ['45'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 8749. ";
 preguntaids[66] = 8749


//  Id pregunta: 5609 Año de creación de pregunta: 2007
 questions[67]= "68)  Cual es el nombre con que se conoce en MAGERIT versi&oacute;n 3 a la persona de la organizaci&oacute;n, con buen conocimiento de personas y unidades implicadas en el proyecto de An&aacute;lisis de Gesti&oacute;n de Riesgos, que tiene la capacidad para conectar al equipo de proyecto con el grupo de usuarios?";
 choices[67]= new Array();
 choices[67][0] = "Promotor";
 choices[67][1] = "Enlace operacional";
 choices[67][2] = "Director de proyecto";
 choices[67][3] = "Responsable de servicios internos";
 answers[67] = 1;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 5609. ";
 preguntaids[67] = 5609


//  Id pregunta: 5857 Año de creación de pregunta: 2007
 questions[68]= "69)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[68]= new Array();
 choices[68][0] = "An&aacute;lisis de riesgos";
 choices[68][1] = "An&aacute;lisis de impacto";
 choices[68][2] = "Disponibilidad";
 choices[68][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[68] = 1;
 units[68] = ['45'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 5857. Examen 2006 JCYL";
 preguntaids[68] = 5857


//  Id pregunta: 8115 Año de creación de pregunta: 2011
 questions[69]= "70)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[69]= new Array();
 choices[69][0] = "Debe disponer de puertas de acceso grandes.";
 choices[69][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[69][2] = "Debe evitar tener ventanas.";
 choices[69][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[69] = 1;
 units[69] = ['45'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 8115. Examen TIC A2 2010";
 preguntaids[69] = 8115


//  Id pregunta: 5710 Año de creación de pregunta: 2007
 questions[70]= "71)  Seg&uacute;n Magerit, el conjunto de programas de seguridad que permite materializar las decisiones de gesti&oacute;n de riesgos es el";
 choices[70]= new Array();
 choices[70][0] = "mapa de riesgos";
 choices[70][1] = "informe de insuficiencias";
 choices[70][2] = "cuadro de mando";
 choices[70][3] = "plan de seguridad";
 answers[70] = 3;
 units[70] = ['45'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 5710. ";
 preguntaids[70] = 5710


//  Id pregunta: 5847 Año de creación de pregunta: 2007
 questions[71]= "72)  Cual de los siguientes no es un activo en Magerit:";
 choices[71]= new Array();
 choices[71][0] = "www";
 choices[71][1] = "url";
 choices[71][2] = "anon";
 choices[71][3] = "edi";
 answers[71] = 1;
 units[71] = ['45'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 5847. Examen 2006 JCYL";
 preguntaids[71] = 5847


//  Id pregunta: 5483 Año de creación de pregunta: 2007
 questions[72]= "73)  Un sistema de supresi&oacute;n de incendios de &ldquo;tuber&iacute;a seca&rdquo; (dry-pipe) es un sistema que usa:";
 choices[72]= new Array();
 choices[72][0] = "Agua, pero en el cual el agua no entra a las tuber&iacute;as hasta que se haya detectado un incendio.";
 choices[72][1] = "Agua, pero en el cual las tuber&iacute;as est&aacute;n revestidas de selladores especiales a prueba de agua.";
 choices[72][2] = "Di&oacute;xido de carbono en lugar de agua.";
 choices[72][3] = "Halon en lugar de agua.";
 answers[72] = 0;
 units[72] = ['45'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 5483. ";
 preguntaids[72] = 5483


//  Id pregunta: 5492 Año de creación de pregunta: 2007
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un elemento relativo a las pruebas del plan de continuidad de una instalaci&oacute;n inform&aacute;tica?";
 choices[73]= new Array();
 choices[73][0] = "Evaluaci&oacute;n del personal involucrado en el ejercicio.";
 choices[73][1] = "Evaluaci&oacute;n de la coordinaci&oacute;n entre el equipo del plan y los proveedores externos.";
 choices[73][2] = "Evaluaci&oacute;n de la capacidad de recuperaci&oacute;n de procesos y datos vitales.";
 choices[73][3] = "Evaluaci&oacute;n de la posibilidad de establecer un acuerdo rec&iacute;proco de respaldo.";
 answers[73] = 3;
 units[73] = ['45'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 5492. ";
 preguntaids[73] = 5492


//  Id pregunta: 5566 Año de creación de pregunta: 2007
 questions[74]= "75)  Seg&uacute;n Magerit v.3 los elementos del an&aacute;lisis de riesgos son:";
 choices[74]= new Array();
 choices[74][0] = "Impacto, riesgos calculados y riesgos intr&iacute;nsecos.";
 choices[74][1] = "Activos, amenazas y salvaguardas.";
 choices[74][2] = "Vulnerabilidades, riesgos e impacto.";
 choices[74][3] = "Entorno, sistema de informaci&oacute;n, informaci&oacute;n, funciones y otros.";
 answers[74] = 1;
 units[74] = ['45'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 5566. ";
 preguntaids[74] = 5566


