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
//  Id pregunta: 6034 Año de creación de pregunta: 2003
 questions[0]= "1)  Despu&eacute;s de un cambio en un sistema de informaci&oacute;n, &iquest;qu&eacute; pruebas es necesario realizar para comprobar que los cambios realizados no han afectado a otros componentes no modificados?:";
 choices[0]= new Array();
 choices[0][0] = "Pruebas de implantaci&oacute;n.";
 choices[0][1] = "Pruebas de sostenibilidad.";
 choices[0][2] = "Pruebas de regresi&oacute;n.";
 choices[0][3] = "Pruebas del sistema.";
 answers[0] = 2;
 units[0] = ['92'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 6034. TIC B 2007";
 preguntaids[0] = 6034


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[1]= new Array();
 choices[1][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[1][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[1][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[1][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[1] = 1;
 units[1] = ['92'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 846. Integraci&oacute;n continua";
 preguntaids[1] = 846


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[2]= "3)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[2]= new Array();
 choices[2][0] = "Est&aacute; desarrollado en Java.";
 choices[2][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[2][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[2][3] = "Todas las afirmaciones son correctas.";
 answers[2] = 2;
 units[2] = ['92'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 839. Integraci&oacute;n continua";
 preguntaids[2] = 839


//  Id pregunta: 5558 Año de creación de pregunta: 2007
 questions[3]= "4)  El repositorio com&uacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Agrupa un conjunto de herramientas de desarrollo.";
 choices[3][1] = "Forma un banco de trabajo.";
 choices[3][2] = "Organiza un entorno de desarrollo.";
 choices[3][3] = "Es un manejador de versiones.";
 answers[3] = 2;
 units[3] = ['92'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 5558. ";
 preguntaids[3] = 5558


//  Id pregunta: 3878 Año de creación de pregunta: 2002
 questions[4]= "5)  La necesidad b&aacute;sica de la garant&iacute;a de calidad:";
 choices[4]= new Array();
 choices[4][0] = "Est&aacute; relacionada con el potencial de errores o defectos latentes en el producto software";
 choices[4][1] = "Est&aacute; relacionada con la necesidad de abaratar costes";
 choices[4][2] = "Est&aacute; relacionada con la disfunci&oacute;n recurrente";
 choices[4][3] = "Est&aacute; relacionada con la ley de Markov";
 answers[4] = 0;
 units[4] = ['92'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3878. ";
 preguntaids[4] = 3878


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes herramientas NO se emplea para realizar pruebas de carga?";
 choices[5]= new Array();
 choices[5][0] = "Loadrunner.";
 choices[5][1] = "Jmeter.";
 choices[5][2] = "Webserver Stress Tool.";
 choices[5][3] = "Apache Turbine.";
 answers[5] = 3;
 units[5] = ['92'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 832. AGE A2 2015";
 preguntaids[5] = 832


//  Id pregunta: 5655 Año de creación de pregunta: 2007
 questions[6]= "7)  &iquest;Que nivel del modelo CMMi se caracteriza porque el proceso de software para las actividades administrativas y t&eacute;cnicas est&aacute; documentado, homogeneizado e integrado?";
 choices[6]= new Array();
 choices[6][0] = "Nivel 2 (Gestionado)";
 choices[6][1] = "Nivel 3 (Definido)";
 choices[6][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[6][3] = "Nivel 5 (Optimizado)";
 answers[6] = 1;
 units[6] = ['92'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 5655. ";
 preguntaids[6] = 5655


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[7]= "8)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[7]= new Array();
 choices[7][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[7][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[7][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[7][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[7] = 1;
 units[7] = ['92'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 845. Integraci&oacute;n continua";
 preguntaids[7] = 845


//  Id pregunta: 3954 Año de creación de pregunta: 2002
 questions[8]= "9)  Respecto de la 'calidad del software' vs 'costes de implantaci&oacute;n' existen teor&iacute;as como:";
 choices[8]= new Array();
 choices[8][0] = "Teor&iacute;a libre : el coste es constante e independiente de la calidad del producto";
 choices[8][1] = "Teor&iacute;a de la productividad: un producto de calidad es m&aacute;s barato de producir, consecuentemente el coste disminuye exponencialmente con el aumento de calidad";
 choices[8][2] = "Teor&iacute;a de calidad/coste: el coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[8][3] = "Las 3 teor&iacute;as anteriores existen";
 answers[8] = 3;
 units[8] = ['92', '93'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3954. ";
 preguntaids[8] = 3954


//  Id pregunta: 4019 Año de creación de pregunta: 2004
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[9]= new Array();
 choices[9][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[9][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[9][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[9][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[9] = 2;
 units[9] = ['92', '93', '98'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 4019. Pregunta Junta Andalucia - A";
 preguntaids[9] = 4019


//  Id pregunta: 6175 Año de creación de pregunta: 2003
 questions[10]= "11)  La norma ISO 9001 cuando se desarrolla, implementa y mejora la eficacia de un sistema de gesti&oacute;n de calidad promueve un enfoque:";
 choices[10]= new Array();
 choices[10][0] = "Basado en procesos.";
 choices[10][1] = "Basado en tareas.";
 choices[10][2] = "Basado en el usuario.";
 choices[10][3] = "Basado en recursos.";
 answers[10] = 0;
 units[10] = ['92'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 6175. Examen TIC A Castilla La Mancha 2007";
 preguntaids[10] = 6175


//  Id pregunta: 5476 Año de creación de pregunta: 2007
 questions[11]= "12)  Durante el desarrollo de un proyecto de software se han detectado dos defectos similares. Uno de ellos se detect&oacute; en la fase de especificaci&oacute;n de requisitos, y el otro en la fase de implementaci&oacute;n. &iquest;Cu&aacute;l de las siguientes afirmaciones sobre este escenario es m&aacute;s probablemente cierta?:";
 choices[11]= new Array();
 choices[11][0] = "El defecto m&aacute;s costoso de corregir ser&aacute; el detectado en la fase de especificaci&oacute;n de requisitos.";
 choices[11][1] = "El defecto m&aacute;s costoso de corregir ser&aacute; el detectado en la fase de implementaci&oacute;n.";
 choices[11][2] = "El coste de corregir ambos defectos ser&aacute; aproximadamente el mismo.";
 choices[11][3] = "No existe relaci&oacute;n entre la fase en la que se detecta un defecto y el coste de su correcci&oacute;n.";
 answers[11] = 1;
 units[11] = ['92'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 5476. ";
 preguntaids[11] = 5476


//  Id pregunta: 4229 Año de creación de pregunta: 2006
 questions[12]= "13)  En el control de calidad del SW se consideran m&eacute;todos de an&aacute;lisis est&aacute;ticos";
 choices[12]= new Array();
 choices[12][0] = "Las Auditor&iacute;as";
 choices[12][1] = "Las Auditor&iacute;as y revisiones";
 choices[12][2] = "La Verificaci&oacute;n formal";
 choices[12][3] = "Todos son m&eacute;todos de an&aacute;lisis est&aacute;ticos";
 answers[12] = 3;
 units[12] = ['92'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 4229. ";
 preguntaids[12] = 4229


//  Id pregunta: 4035 Año de creación de pregunta: 2004
 questions[13]= "14)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[13]= new Array();
 choices[13][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[13][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[13][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[13][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[13] = 2;
 units[13] = ['92', '93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4035. ";
 preguntaids[13] = 4035


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto a SonarQube, se&ntilde;ale la opci&oacute;n FALSA:";
 choices[14]= new Array();
 choices[14][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[14][1] = "Anteriormente se denominaba Sonar.";
 choices[14][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[14][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[14] = 2;
 units[14] = ['92'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 833. Integraci&oacute;n continua";
 preguntaids[14] = 833


//  Id pregunta: 4027 Año de creación de pregunta: 2004
 questions[15]= "16)  &iquest;Qu&eacute; es el Modelo CMM (Modelo de madurez de la capacidad de proceso de software)?";
 choices[15]= new Array();
 choices[15][0] = "Metodolog&iacute;a de dise&ntilde;o de omponentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[15][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[15][2] = "Modelo organizativo para el dise&ntilde;o software de macroensamblares cruzados";
 choices[15][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[15] = 3;
 units[15] = ['92', '93', '98'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 4027. Pregunta Junta Andalucia - A";
 preguntaids[15] = 4027


//  Id pregunta: 5708 Año de creación de pregunta: 2007
 questions[16]= "17)  En CMMi, la Process Area (PA) de Gesti&oacute;n de Riesgos (Risk Management) corresponde al Nivel";
 choices[16]= new Array();
 choices[16][0] = "Nivel 2 (Gestionado)";
 choices[16][1] = "Nivel 3 (Definido)";
 choices[16][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[16][3] = "Nivel 5 (Optimizado)";
 answers[16] = 1;
 units[16] = ['92'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 5708. ";
 preguntaids[16] = 5708


//  Id pregunta: 3922 Año de creación de pregunta: 2002
 questions[17]= "18)  Las series ISO-9000, desde el punto de vista de su &aacute;mbito, podr&iacute;an calificarse como:";
 choices[17]= new Array();
 choices[17][0] = "Certificaci&oacute;n de producto";
 choices[17][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[17][2] = "Total Quality Management";
 choices[17][3] = "Ninguno de los anteriores";
 answers[17] = 1;
 units[17] = ['92'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3922. ";
 preguntaids[17] = 3922


//  Id pregunta: 4092 Año de creación de pregunta: 2003
 questions[18]= "19)  La actividad DSI-CAL2 se denomina";
 choices[18]= new Array();
 choices[18][0] = "Revisi&oacute;n de la especificaci&oacute;n t&eacute;cnica del plan de prueba";
 choices[18][1] = "Revisi&oacute;n de la verificaci&oacute;n de la arquitectura del sistema";
 choices[18][2] = "Revisi&oacute;n de los requisitos de implantaci&oacute;n";
 choices[18][3] = "ninguna es cirrecta";
 answers[18] = 0;
 units[18] = ['92', '93'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 4092. ";
 preguntaids[18] = 4092


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[19]= "20)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[19]= new Array();
 choices[19][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[19][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[19][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[19][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[19] = 0;
 units[19] = ['92'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 836. Integraci&oacute;n continua";
 preguntaids[19] = 836


//  Id pregunta: 6032 Año de creación de pregunta: 2003
 questions[20]= "21)  En el desarrollo de software, las pruebas &ldquo;alfa&rdquo; se pueden considerar:";
 choices[20]= new Array();
 choices[20][0] = "Pruebas de caja negra.";
 choices[20][1] = "Pruebas de caja transparente.";
 choices[20][2] = "Pruebas de recuperaci&oacute;n.";
 choices[20][3] = "Pruebas de seguridad.";
 answers[20] = 0;
 units[20] = ['92'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 6032. TIC B 2007";
 preguntaids[20] = 6032


//  Id pregunta: 1600 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de estas estrategias NO es t&iacute;pica de las pruebas de caja negra?";
 choices[21]= new Array();
 choices[21][0] = "El cubrimiento l&oacute;gico";
 choices[21][1] = "La partici&oacute;n en clases de equivalencia";
 choices[21][2] = "El an&aacute;lisis de valores l&iacute;mite";
 choices[21][3] = "La comparaci&oacute;n de versiones";
 answers[21] = 0;
 units[21] = ['92'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 1600. ";
 preguntaids[21] = 1600


//  Id pregunta: 1159 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes es considerada una prueba de caja negra?";
 choices[22]= new Array();
 choices[22][0] = "Prueba del camino b&aacute;sico.";
 choices[22][1] = "Prueba de bucles.";
 choices[22][2] = "Prueba de partici&oacute;n equivalente.";
 choices[22][3] = "Pruebas de flujo de datos.";
 answers[22] = 2;
 units[22] = ['92'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1159. ";
 preguntaids[22] = 1159


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[23]= new Array();
 choices[23][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[23][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[23][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[23][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[23] = 1;
 units[23] = ['92'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 834. Integraci&oacute;n continua";
 preguntaids[23] = 834


//  Id pregunta: 1163 Año de creación de pregunta: 2016
 questions[24]= "25)  El tipo de prueba BigBang es de tipo:";
 choices[24]= new Array();
 choices[24][0] = "Prueba de sistema.";
 choices[24][1] = "Prueba de aceptaci&oacute;n.";
 choices[24][2] = "Prueba de rendimiento.";
 choices[24][3] = "Prueba de integraci&oacute;n.";
 answers[24] = 3;
 units[24] = ['92'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 1163. ";
 preguntaids[24] = 1163


//  Id pregunta: 1704 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale c&oacute;mo se denominan Las pruebas que tienen por objeto comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n NO introduce un comportamiento no deseado o err&oacute;neo adicional en otros componentes no modificados:";
 choices[25]= new Array();
 choices[25][0] = "De operaci&oacute;n.";
 choices[25][1] = "De entorno.";
 choices[25][2] = "De regresi&oacute;n.";
 choices[25][3] = "De disponibilidad de datos.";
 answers[25] = 2;
 units[25] = ['92'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 1704. ";
 preguntaids[25] = 1704


//  Id pregunta: 3710 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;ndo debe aplicarse un plan de garant&iacute;a de calidad?:";
 choices[26]= new Array();
 choices[26][0] = "En casos de proyectos de gran envergadura";
 choices[26][1] = "Cuando sea rentable econ&oacute;micamente";
 choices[26][2] = "Cuando el cliente as&iacute; lo solicite";
 choices[26][3] = "Cuando el coste de no aplicarlo sea mayor que el de aplicarlo";
 answers[26] = 3;
 units[26] = ['92'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3710. ";
 preguntaids[26] = 3710


//  Id pregunta: 5607 Año de creación de pregunta: 2007
 questions[27]= "28)  Indique el apartado que no debe incluir necesariamente el manual de calidad que Ia organizaci&oacute;n debe establecer y mantener, seg&uacute;n la norma ISO 9001.";
 choices[27]= new Array();
 choices[27][0] = "Las declaraciones documentadas de la pol&iacute;tica de calidad y de objetivos de la calidad.";
 choices[27][1] = "El alcance del sistema de gesti&oacute;n de calidad.";
 choices[27][2] = "Los procedimientos documentados establecidos para el sistema de gesti&oacute;n de calidad.";
 choices[27][3] = "La descripci&oacute;n de Ia interacci&oacute;n entre los procesos del sistema de gesti&oacute;n de calidad.";
 answers[27] = 0;
 units[27] = ['92'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 5607. ";
 preguntaids[27] = 5607


//  Id pregunta: 5547 Año de creación de pregunta: 2007
 questions[28]= "29)  Cu&aacute;les de las siguientes pruebas no responde al tipo de prueba de caja negra?";
 choices[28]= new Array();
 choices[28][0] = "Particiones de equivalencia.";
 choices[28][1] = "Pruebas de comparaci&oacute;n.";
 choices[28][2] = "Prueba del camino b&aacute;sico.";
 choices[28][3] = "Pruebas de datos imposibles.";
 answers[28] = 2;
 units[28] = ['92'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 5547. ";
 preguntaids[28] = 5547


//  Id pregunta: 4036 Año de creación de pregunta: 2004
 questions[29]= "30)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[29]= new Array();
 choices[29][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[29][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[29][2] = "El coste es constante e independiente de la calidad del producto";
 choices[29][3] = "Ninguna de ellas";
 answers[29] = 0;
 units[29] = ['92', '93'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 4036. ";
 preguntaids[29] = 4036


//  Id pregunta: 1336 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Top-down.";
 choices[30][1] = "Sandwich.";
 choices[30][2] = "Big-Bang.";
 choices[30][3] = "Bottom-up.";
 answers[30] = 2;
 units[30] = ['92'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1336. ";
 preguntaids[30] = 1336


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[31]= new Array();
 choices[31][0] = "JUnit, Artifactory y SonarQube";
 choices[31][1] = "JUnit, Artifactory y Selenium";
 choices[31][2] = "JUnit, SonarQube y Selenium";
 choices[31][3] = "ArtiFactory, SonarQube y Selenium";
 answers[31] = 2;
 units[31] = ['92'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 829. AGE A1 2015";
 preguntaids[31] = 829


//  Id pregunta: 4227 Año de creación de pregunta: 2006
 questions[32]= "33)  El conjunto de tareas a realizar para asegurar la calidad de un producto software se conoce como:";
 choices[32]= new Array();
 choices[32][0] = "Control de Calidad";
 choices[32][1] = "Modelo de Calidad";
 choices[32][2] = "Plan General de Calidad";
 choices[32][3] = "Garant&iacute;a de Calidad";
 answers[32] = 3;
 units[32] = ['92'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 4227. ";
 preguntaids[32] = 4227


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes es un framework de pruebas para JavaScript?";
 choices[33]= new Array();
 choices[33][0] = "ScriptTester.";
 choices[33][1] = "Jspector.";
 choices[33][2] = "JavaTester.";
 choices[33][3] = "Qunit.";
 answers[33] = 3;
 units[33] = ['92'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 830. AGE A2 2015";
 preguntaids[33] = 830


//  Id pregunta: 1160 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes informaciones sobre la fase de pruebas del software es correcta?";
 choices[34]= new Array();
 choices[34][0] = "Las pruebas de integraci&oacute;n bottom-up necesitan m&oacute;dulos auxiliares que sustituyan a los m&oacute;dulos que son llamados por otros de m&aacute;s alto nivel.";
 choices[34][1] = "Las pruebas de integraci&oacute;n top-down necesitan m&oacute;dulos conductores (drivers) que simulen las llamadas a los m&oacute;dulos que se est&aacute;n probando.";
 choices[34][2] = "Las pruebas funcionales o de caja negra permiten comprobar el correcto funcionamiento de los componentes del sistema analizando entradas y salidas y verificando exclusivamente el resultado.";
 choices[34][3] = "Las pruebas estructurales o de caja blanca permiten comprobar el correcto funcionamiento de los componentes del sistema analizando entradas y salidas y verificando exclusivamente el resultado.";
 answers[34] = 2;
 units[34] = ['92'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 1160. ";
 preguntaids[34] = 1160


//  Id pregunta: 4125 Año de creación de pregunta: 2004
 questions[35]= "36)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[35]= new Array();
 choices[35][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[35][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[35][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = 2;
 units[35] = ['92', '93'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 4125. ";
 preguntaids[35] = 4125


//  Id pregunta: 3685 Año de creación de pregunta: 2002
 questions[36]= "37)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[36]= new Array();
 choices[36][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[36][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[36][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[36][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[36] = 3;
 units[36] = ['92'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3685. ";
 preguntaids[36] = 3685


//  Id pregunta: 5556 Año de creación de pregunta: 2007
 questions[37]= "38)  Las pruebas alfa:";
 choices[37]= new Array();
 choices[37][0] = "Son pruebas de integraci&oacute;n.";
 choices[37][1] = "Son pruebas de caja transparente";
 choices[37][2] = "Comprueban todo el espacio de ejecuci&oacute;n de un programa.";
 choices[37][3] = "Estiman el porcentaje de errores no detectados.";
 answers[37] = 2;
 units[37] = ['92'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 5556. ";
 preguntaids[37] = 5556


//  Id pregunta: 4026 Año de creación de pregunta: 2004
 questions[38]= "39)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[38]= new Array();
 choices[38][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[38][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[38][2] = "Todas son correctas";
 choices[38][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[38] = 0;
 units[38] = ['92', '93', '98'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4026. ";
 preguntaids[38] = 4026


//  Id pregunta: 4228 Año de creación de pregunta: 2006
 questions[39]= "40)  En el modelo de McCall. Cu&aacute;l de los siguientes elementos no se considera un factor de calidad";
 choices[39]= new Array();
 choices[39][0] = "Reusabilidad";
 choices[39][1] = "Modularidad";
 choices[39][2] = "Flexibilidad";
 choices[39][3] = "Eficiencia";
 answers[39] = 1;
 units[39] = ['92'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 4228. ";
 preguntaids[39] = 4228


//  Id pregunta: 1162 Año de creación de pregunta: 2016
 questions[40]= "41)  En relaci&oacute;n a pruebas de integridad de software, si hablamos de integraci&oacute;n tipo sandwich nos referimos a que:";
 choices[40]= new Array();
 choices[40][0] = "Los m&oacute;dulos se integran en grupos que constituyen una funcionalidad identificada.";
 choices[40][1] = "Se identifica el nivel de riesgo asociado a cada m&oacute;dulo, los de riesgo alto se integran primero y los de menor riesgo se integran m&aacute;s tarde.";
 choices[40][2] = "A medida que se integran los m&oacute;dulos, se realizan pruebas para capturar y corregir nuevos errores, es decir, empezando por los componentes que llaman a otros componentes.";
 choices[40][3] = "Primero se integran los m&oacute;dulos de alto nivel y de control. Despu&eacute;s, los m&oacute;dulos de bajo nivel. La integraci&oacute;n de los m&oacute;dulos de nivel intermedio se hace al final.";
 answers[40] = 3;
 units[40] = ['92'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1162. ";
 preguntaids[40] = 1162


//  Id pregunta: 3930 Año de creación de pregunta: 2002
 questions[41]= "42)  Los elementos que determinan o componen la calidad del software son los siguientes:";
 choices[41]= new Array();
 choices[41][0] = "Factores externos o de usuarios relativos al comportamiento actual del software, a la facilidad de cambio y a su facilidad de conversi&oacute;n";
 choices[41][1] = "Criterios internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[41][2] = "M&eacute;tricas de cuantificaci&oacute;n de criterios y factores";
 choices[41][3] = "Todos los anteriores";
 answers[41] = 3;
 units[41] = ['92', '93'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3930. ";
 preguntaids[41] = 3930


//  Id pregunta: 3948 Año de creación de pregunta: 2002
 questions[42]= "43)  Por sistema de garant&iacute;a de calidad se entiende:";
 choices[42]= new Array();
 choices[42][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[42][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[42][2] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 choices[42][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior";
 answers[42] = 2;
 units[42] = ['92'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3948. ";
 preguntaids[42] = 3948


//  Id pregunta: 3847 Año de creación de pregunta: 2002
 questions[43]= "44)  Entre los factores de calidad del software que McCall identific&oacute; para la fase de explotaci&oacute;n podemos destacar:";
 choices[43]= new Array();
 choices[43][0] = "Fiabilidad, correcci&oacute;n, integridad, eficiencia y usabilidad";
 choices[43][1] = "Fiabilidad, flexibilidad y portabilidad";
 choices[43][2] = "Mantenibilidad, seguridad, flexibilidad y eficiencia";
 choices[43][3] = "Todos los anteriores";
 answers[43] = 0;
 units[43] = ['92', '93'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3847. ";
 preguntaids[43] = 3847


//  Id pregunta: 3935 Año de creación de pregunta: 2002
 questions[44]= "45)  McCall, en su modelo de calidad del software, define 11 factores. &iquest;Con cu&aacute;l de ellos se asocia el coste de modificaci&oacute;n de un producto?:";
 choices[44]= new Array();
 choices[44][0] = "Fiabilidad";
 choices[44][1] = "Reusabilidad";
 choices[44][2] = "Flexibilidad";
 choices[44][3] = "Facilidad de prueba";
 answers[44] = 2;
 units[44] = ['92', '93'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3935. ";
 preguntaids[44] = 3935


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[45]= "46)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[45]= new Array();
 choices[45][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[45][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[45][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[45][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[45] = 1;
 units[45] = ['92'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 844. Integraci&oacute;n continua";
 preguntaids[45] = 844


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[46]= new Array();
 choices[46][0] = "Selenium";
 choices[46][1] = "JUnit";
 choices[46][2] = "Jenkins";
 choices[46][3] = "JMeter";
 answers[46] = 2;
 units[46] = ['92'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 843. Integraci&oacute;n continua";
 preguntaids[46] = 843


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[47]= new Array();
 choices[47][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[47][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[47][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[47][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[47] = 1;
 units[47] = ['92'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 838. Integraci&oacute;n continua";
 preguntaids[47] = 838


//  Id pregunta: 4226 Año de creación de pregunta: 2006
 questions[48]= "49)  Elementos de un modelo de calidad del SW son:";
 choices[48]= new Array();
 choices[48][0] = "Procedimientos, criterios y m&eacute;tricas de calidad";
 choices[48][1] = "Sistema de calidad, factores y m&eacute;tricas";
 choices[48][2] = "Factores y criterios de calidad";
 choices[48][3] = "Factores, criterios y m&eacute;tricas";
 answers[48] = 3;
 units[48] = ['92'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 4226. ";
 preguntaids[48] = 4226


//  Id pregunta: 4034 Año de creación de pregunta: 2004
 questions[49]= "50)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[49]= new Array();
 choices[49][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[49][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[49][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[49][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[49] = 2;
 units[49] = ['92', '93'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 4034. ";
 preguntaids[49] = 4034


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[50]= new Array();
 choices[50][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[50][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[50][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[50][3] = "Ninguna de las anteriores.";
 answers[50] = 1;
 units[50] = ['92'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 841. Integraci&oacute;n continua";
 preguntaids[50] = 841


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[51]= "52)  La norma internacional cuyo objetivo es crear un est&aacute;ndar sobre pruebas de software que recoja y estandarice vocabulario, procesos, t&eacute;cnicas de documentaci&oacute;n, etc. del ciclo de vida de las pruebas es:";
 choices[51]= new Array();
 choices[51][0] = "ISO/IEC 25000";
 choices[51][1] = "ISO/IEC 829";
 choices[51][2] = "ISO/IEC/IEEE 29119";
 choices[51][3] = "ISO/IEC 9126";
 answers[51] = 2;
 units[51] = ['92'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 831. AGE A2 2015";
 preguntaids[51] = 831


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[52]= new Array();
 choices[52][0] = "Jenkins";
 choices[52][1] = "Hudson";
 choices[52][2] = "SonarQube";
 choices[52][3] = "Todas lo son";
 answers[52] = 3;
 units[52] = ['92'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 835. Integraci&oacute;n continua";
 preguntaids[52] = 835


//  Id pregunta: 3957 Año de creación de pregunta: 2002
 questions[53]= "54)  Seg&uacute;n los estudios de calidad, &iquest;en qu&eacute; fase del desarrollo los errores son m&aacute;s costosos si no han sido detectados una vez finalizado el proyecto?:";
 choices[53]= new Array();
 choices[53][0] = "Especificaci&oacute;n";
 choices[53][1] = "Dise&ntilde;o";
 choices[53][2] = "Codificaci&oacute;n";
 choices[53][3] = "Otros";
 answers[53] = 0;
 units[53] = ['92'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3957. ";
 preguntaids[53] = 3957


//  Id pregunta: 4071 Año de creación de pregunta: 2003
 questions[54]= "55)  &iquest;C&uacute;al NO es un factor de McCall de revisi&oacute;n?";
 choices[54]= new Array();
 choices[54][0] = "Flexibilidad";
 choices[54][1] = "Usabilidad";
 choices[54][2] = "Verificabilidad";
 choices[54][3] = "Mantenibilidad";
 answers[54] = 1;
 units[54] = ['92', '93'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 4071. ";
 preguntaids[54] = 4071


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[55]= "56)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[55]= new Array();
 choices[55][0] = "Mercurial, Git y Apache Subversion.";
 choices[55][1] = "Gimp, Mercurial y Git.";
 choices[55][2] = "RedMine, Planner y OpenProj.";
 choices[55][3] = "Cassandra, Git y REDIS.";
 answers[55] = 0;
 units[55] = ['92'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 847. TAI 2016.";
 preguntaids[55] = 847


//  Id pregunta: 4126 Año de creación de pregunta: 2004
 questions[56]= "57)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[56]= new Array();
 choices[56][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[56][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[56][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 0;
 units[56] = ['92', '93'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4126. ";
 preguntaids[56] = 4126


//  Id pregunta: 3702 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes tipos de prueba es de caja blanca?:";
 choices[57]= new Array();
 choices[57][0] = "An&aacute;lisis de valores l&iacute;mite de entrada";
 choices[57][1] = "Prueba de bucles";
 choices[57][2] = "Pruebas de comparaci&oacute;n";
 choices[57][3] = "Pruebas basadas en grafos";
 answers[57] = 1;
 units[57] = ['92'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3702. ";
 preguntaids[57] = 3702


//  Id pregunta: 4041 Año de creación de pregunta: 2003
 questions[58]= "59)  &iquest;Qu&eacute; es el Modelo CMM (modelo de madurez de la capacidad de proceso de software)?:";
 choices[58]= new Array();
 choices[58][0] = "Metodolog&iacute;a de dise&ntilde;o de componentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[58][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[58][2] = "Modelo organizativo para el dise&ntilde;o software de macroensambladores cruzados.";
 choices[58][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[58] = 3;
 units[58] = ['92'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 4041. Junta Andaluc&iacute;a";
 preguntaids[58] = 4041


//  Id pregunta: 3578 Año de creación de pregunta: 2004
 questions[59]= "60)  Una Organizaci&oacute;n que este en el nivel 1 (Inicial) del Modelo de Capacidad de Madurez (CMM: Computer Capability Model) en el desarrollo del software, est&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "En una fase preliminar de determinaci&oacute;n de la viabilidad del proyecto";
 choices[59][1] = "En una situaci&oacute;n donde el proyecto esta conforme a sus especificaciones originales y no ha sufrido todav&iacute;a modificaciones";
 choices[59][2] = "En una situaci&oacute;n ideal, con altos estandares de gesti&oacute;n y calidad implementados";
 choices[59][3] = "En una situaci&oacute;n en la que no se hace ning&uacute;n esfuerzo en la garant&iacute;a de calidad y gesti&oacute;n de proyectos";
 answers[59] = 3;
 units[59] = ['92'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3578. Pregunta TIC-B 2003";
 preguntaids[59] = 3578


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[60]= "61)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[60]= new Array();
 choices[60][0] = "Programaci&oacute;n estructurada.";
 choices[60][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[60][2] = "Programaci&oacute;n extrema.";
 choices[60][3] = "Programaci&oacute;n Espuria.";
 answers[60] = 2;
 units[60] = ['92'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 837. Integraci&oacute;n continua";
 preguntaids[60] = 837


//  Id pregunta: 1828 Año de creación de pregunta: 2016
 questions[61]= "62)  Teniendo en cuenta que las cajas negras son un tipo de prueba de software, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[61]= new Array();
 choices[61][0] = "Las cajas negras son un tipo de pruebas de software que se hacen sobre las funciones internas de un m&oacute;dulo.";
 choices[61][1] = "Las cajas negras son un tipo de pruebas de software que dan m&aacute;s importancia al funcionamiento interno que a las entradas y salidas.";
 choices[61][2] = "Las cajas negras son un tipo de pruebas de software que se ocupan de probar si se cumplen los requisitos funcionales de la aplicaci&oacute;n.";
 choices[61][3] = "Ninguna de las opciones es correcta.";
 answers[61] = 2;
 units[61] = ['92'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 1828. ";
 preguntaids[61] = 1828


//  Id pregunta: 4031 Año de creación de pregunta: 2003
 questions[62]= "63)  El denominado &quot; principio de Pareto&quot; empleado frecuentemente en el enfoque estad&iacute;stico de Garant&iacute;a de Calidad en desarrollo del SW establece que:";
 choices[62]= new Array();
 choices[62][0] = "El n&uacute;mero de defectos del SW crece exponencialmente con el n&uacute;mero de niveles jer&aacute;rquicos presentes en el equipo de desarrollo";
 choices[62][1] = "El 80% de los defectos tienen su origen com&uacute;n en el 20% de los factores causantes";
 choices[62][2] = "Cuando un buen programador es ascendido a analista la tasa de errores se duplica, con un nivel de confianza del 95%";
 choices[62][3] = "Para una complejidad dda en un proyecto inform&aacute;tico el n&uacute;mero de errores se duplica cada per&iacute;odo de 18 meses o fracci&oacute;n";
 answers[62] = 1;
 units[62] = ['92', '93', '98'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 4031. ";
 preguntaids[62] = 4031


//  Id pregunta: 1358 Año de creación de pregunta: 2016
 questions[63]= "64)  Cuando se habla de las pruebas de regresi&oacute;n en el contexto de la calidad del software, &iquest;qu&eacute; tipo de fallo (bug) es un fallo de regresi&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = "EI que parece arreglarse espont&aacute;neamente y que posteriormente no es posible determinar el origen del mismo.";
 choices[63][1] = "Todos aquellos que son de tipo l&oacute;gico y que edemas consistan bien en un bucle infinito, bien en una lIamada recursiva infinita.";
 choices[63][2] = "Todos aquellos derivados de problemas de concurrencia entre diferentes hilos accediendo a un mismo recurso: condiciones de carrera, deadlocks, etc.";
 choices[63][3] = "Aquel que inicialmente no existe o no se manifiesta, pero que aparece al introducir otros cambios en el programa o arreglar otro fallo en el, o tras ocurrir un evento externo dado.";
 answers[63] = 3;
 units[63] = ['92'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 1358. ";
 preguntaids[63] = 1358


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[64]= new Array();
 choices[64][0] = "CVS";
 choices[64][1] = "SVN";
 choices[64][2] = "Team Foundation Server";
 choices[64][3] = "Apache Tomcat";
 answers[64] = 3;
 units[64] = ['92'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 842. Integraci&oacute;n continua";
 preguntaids[64] = 842


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; es SonarQube?";
 choices[65]= new Array();
 choices[65][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[65][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[65][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[65][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[65] = 2;
 units[65] = ['92'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 840. Integraci&oacute;n continua";
 preguntaids[65] = 840


//  Id pregunta: 1487 Año de creación de pregunta: 2016
 questions[66]= "67)  Los usuarios de una aplicaci&oacute;n piden modificaciones sobre &eacute;sta que afectan al m&oacute;dulo de pagos. Una vez realizados los cambios se realizan pruebas para comprobar que no ha afectado al m&oacute;dulo de RRHH que no ha sido modificado. &iquest;De qu&eacute; tipo de pruebas estamos hablando?";
 choices[66]= new Array();
 choices[66][0] = "Unitarias.";
 choices[66][1] = "Sistemas.";
 choices[66][2] = "Aceptaci&oacute;n.";
 choices[66][3] = "Regresi&oacute;n.";
 answers[66] = 3;
 units[66] = ['92'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 1487. ";
 preguntaids[66] = 1487


//  Id pregunta: 4225 Año de creación de pregunta: 2006
 questions[67]= "68)  La norma ISO 9001";
 choices[67]= new Array();
 choices[67][0] = "Est&aacute; reservada para aquellas empresas que tengan dise&ntilde;o o desarrollo de servicios.";
 choices[67][1] = "Contiene 25 puntos que describen los requisitos que deben implantarse en una empresa para asegurar que cumple con una norma de calidad predefinida.";
 choices[67][2] = "Es la menos exigente de las opciones de la ISO 9000.";
 choices[67][3] = "Se diferencia de la ISO 9002 en que no contiene los puntos concernientes a Dise&ntilde;o, Compras, Control de procesos y Postventa.";
 answers[67] = 0;
 units[67] = ['92'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4225. ";
 preguntaids[67] = 4225


//  Id pregunta: 5606 Año de creación de pregunta: 2007
 questions[68]= "69)  El modelo CMMi , en su modo Staged establece 5 niveles de madurez. Indique el orden correcto de menor a mayor madurez:";
 choices[68]= new Array();
 choices[68][0] = "Performed, Managed, Defined, Quantitatively Managed, Optimizing";
 choices[68][1] = "Performed, Optimizing, Managed, Defined, Quantitatively Managed";
 choices[68][2] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 choices[68][3] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 answers[68] = 0;
 units[68] = ['92'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 5606. ";
 preguntaids[68] = 5606


//  Id pregunta: 3879 Año de creación de pregunta: 2002
 questions[69]= "70)  La norma ISO 9000-3:";
 choices[69]= new Array();
 choices[69][0] = "Establece el certificado de conformidad del producto";
 choices[69][1] = "Asegura la calidad del certificado";
 choices[69][2] = "Es la especificaci&oacute;n de la ISO 9000 para sistemas y tecnolog&iacute;as de la informaci&oacute;n";
 choices[69][3] = "Certifica las auditor&iacute;as realizadas";
 answers[69] = 2;
 units[69] = ['92'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3879. ";
 preguntaids[69] = 3879


//  Id pregunta: 3860 Año de creación de pregunta: 2002
 questions[70]= "71)  Indicar aquella que no es una tarea del departamento de calidad:";
 choices[70]= new Array();
 choices[70][0] = "Desarrollo de pol&iacute;ticas, procedimientos y normas";
 choices[70][1] = "Certificaci&oacute;n y prueba del software";
 choices[70][2] = "Planificar la estrategia de la organizaci&oacute;n";
 choices[70][3] = "Auditor&iacute;as, revisiones e inspecciones";
 answers[70] = 2;
 units[70] = ['92', '93'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3860. ";
 preguntaids[70] = 3860


//  Id pregunta: 6016 Año de creación de pregunta: 2003
 questions[71]= "72)  &Aacute;lvaro est&aacute; iniciando las tareas de planificaci&oacute;n de un nuevo proyecto software, y ha efectuado unos c&aacute;lculos previos de &ldquo;puntos de funci&oacute;n&rdquo;. La t&eacute;cnica de Puntos de Funci&oacute;n es una t&eacute;cnica indirecta para determinar:";
 choices[71]= new Array();
 choices[71][0] = "La calidad de una aplicaci&oacute;n software y la tasa de errores prevista.";
 choices[71][1] = "La dimensi&oacute;n de un proyecto inform&aacute;tico y su probable coste.";
 choices[71][2] = "La usabilidad de un interfaz y la previsi&oacute;n de errores de usuario.";
 choices[71][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n.";
 answers[71] = 1;
 units[71] = ['92'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 6016. TIC B 2007";
 preguntaids[71] = 6016


//  Id pregunta: 1164 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a las pruebas de integraci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Pueden ser de caja blanca o de caja negra.";
 choices[72][1] = "Uno de sus objetivos es comprobar que los cambios introducidos sobre un componente no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados.";
 choices[72][2] = "Dan una visi&oacute;n muy similar a su comportamiento en el entorno de producci&oacute;n.";
 choices[72][3] = "Sus tipos fundamentales son incremental y no incremental.";
 answers[72] = 3;
 units[72] = ['92'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 1164. ";
 preguntaids[72] = 1164


//  Id pregunta: 1272 Año de creación de pregunta: 2016
 questions[73]= "74)  Las Pruebas de caja blanca NO dan cobertura de:";
 choices[73]= new Array();
 choices[73][0] = "Segmentos y ramas.";
 choices[73][1] = "Condici&oacute;n / decisi&oacute;n.";
 choices[73][2] = "Bucles.";
 choices[73][3] = "Texto.";
 answers[73] = 3;
 units[73] = ['92'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1272. ";
 preguntaids[73] = 1272


//  Id pregunta: 4070 Año de creación de pregunta: 2003
 questions[74]= "75)  &iquest;Cu&aacute;l no es un factor de calidad seg&uacute;n Mc Call?";
 choices[74]= new Array();
 choices[74][0] = "Fiabilidad";
 choices[74][1] = "Coste";
 choices[74][2] = "Facilidad de mantenimiento";
 choices[74][3] = "Seguridad";
 answers[74] = 1;
 units[74] = ['92', '93'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 4070. ";
 preguntaids[74] = 4070


