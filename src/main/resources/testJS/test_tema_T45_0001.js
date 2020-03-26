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
//  Id pregunta: 4294 Año de creación de pregunta: 2002
 questions[0]= "1)  Como medidas de tipo f&iacute;sico, en seguridad inform&aacute;tica, podemos hablar de:";
 choices[0]= new Array();
 choices[0][0] = "Seguridad de datos y de software";
 choices[0][1] = "Seguridad organizativo-administrativa y de software";
 choices[0][2] = "Seguridad de hardware y de datos";
 choices[0][3] = "Adecuaci&oacute;n de locales y seguridad de accesos";
 answers[0] = 3;
 units[0] = ['45'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 4294. ";
 preguntaids[0] = 4294


//  Id pregunta: 2182 Año de creación de pregunta: 2002
 questions[1]= "2)  En una auditor&iacute;a de un sistema EDI, &iquest;cu&aacute;les son las principales &aacute;reas de revisi&oacute;n y evaluaci&oacute;n, en las que los auditores y el personal especializado de soporte deben centrarse?:";
 choices[1]= new Array();
 choices[1][0] = "Conocimiento del negocio, evaluaci&oacute;n de controles y pruebas";
 choices[1][1] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de los controles generales, evaluaci&oacute;n de los controles de operaci&oacute;n, pruebas, uso de herramientas asistidas por ordenador (CAAT)";
 choices[1][2] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de controles y pruebas";
 choices[1][3] = "Conocimiento del negocio, controles administrativos y de gesti&oacute;n, evaluaci&oacute;n del riesgo, evaluaci&oacute;n del los controles de operci&oacute;n, pruebas y uso de herramientas asistidas por ordenador (CAAT)";
 answers[1] = 1;
 units[1] = ['36', '45'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2182. ";
 preguntaids[1] = 2182


//  Id pregunta: 2147 Año de creación de pregunta: 2004
 questions[2]= "3)  Para el an&aacute;lisis de la gesti&oacute;n de riesgos:";
 choices[2]= new Array();
 choices[2][0] = "usaremos el proyecto MABER de la administraci&oacute;n";
 choices[2][1] = "seguiremos las recomendaciones de la herramienta NEDAES";
 choices[2][2] = "utilizaremos las bases sentadas por ESTROFA";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = 3;
 units[2] = ['45'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2147. ";
 preguntaids[2] = 2147


//  Id pregunta: 4296 Año de creación de pregunta: 2002
 questions[3]= "4)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[3]= new Array();
 choices[3][0] = "Amenazas";
 choices[3][1] = "Vulnerabilidad";
 choices[3][2] = "Impacto";
 choices[3][3] = "Riesgo";
 answers[3] = 2;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 4296. ";
 preguntaids[3] = 4296


//  Id pregunta: 1731 Año de creación de pregunta: 2016
 questions[4]= "5)  La planificaci&oacute;n de las copias de seguridad vendr&aacute; derivada de un estudio previo de an&aacute;lisis y gesti&oacute;n de riesgos basado en una metodolog&iacute;a. Indicar la metodolog&iacute;a elaborada por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica que se deber&iacute;a emplear para este estudio:";
 choices[4]= new Array();
 choices[4][0] = "SOROLLA";
 choices[4][1] = "MAGERIT";
 choices[4][2] = "NEDAES";
 choices[4][3] = "BADARAL";
 answers[4] = 1;
 units[4] = ['45'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 1731. ";
 preguntaids[4] = 1731


//  Id pregunta: 5361 Año de creación de pregunta: 2006
 questions[5]= "6)  La primera tarea a realizar en un plan de continuidad de negocio es";
 choices[5]= new Array();
 choices[5][0] = "Duplicar los equipos cr&iacute;ticos";
 choices[5][1] = "Hacer una copia de seguridad de todos los datos";
 choices[5][2] = "Realizar un an&aacute;lisis de la criticidad de los diferentes recursos ante posibles situaciones de emergencia";
 choices[5][3] = "Evaluar la habilidad del personal para responder adecuadamente a situaciones de emergencia";
 answers[5] = 2;
 units[5] = ['45'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 5361. ";
 preguntaids[5] = 5361


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[6]= "7)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[6]= new Array();
 choices[6][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[6][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[6][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[6][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[6] = 0;
 units[6] = ['45'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 614. Xunta de Galicia 2015";
 preguntaids[6] = 614


//  Id pregunta: 2415 Año de creación de pregunta: 2006
 questions[7]= "8)  Las medidas de seguridad necesarias para restaurar el servicio de forma r&aacute;pida, eficiente y con el menor costo y p&eacute;rdidas posibles se incluyen en:";
 choices[7]= new Array();
 choices[7][0] = "Plan de Recuperaci&oacute;n de Desastres";
 choices[7][1] = "Plan estrat&eacute;gico";
 choices[7][2] = "Plan de sistemas";
 choices[7][3] = "Plan de seguridad fisica";
 answers[7] = 0;
 units[7] = ['45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2415. ";
 preguntaids[7] = 2415


//  Id pregunta: 2286 Año de creación de pregunta: 2002
 questions[8]= "9)  Se entiende por integridad de la informaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Propiedad o caracter&iacute;stica consistente en que el activo no ha sido alterado  de manera no autorizada.";
 choices[8][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[8][2] = "Disposici&oacute;n de los servicios a ser usados cuando sea necesario";
 choices[8][3] = "Caracter&iacute;stica que previene contra la denegaci&oacute;n no autorizada de acceso  a activos del dominio.";
 answers[8] = 0;
 units[8] = ['45'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2286. ";
 preguntaids[8] = 2286


//  Id pregunta: 2026 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes elementos no se considera un activo de una organizaci&oacute;n?";
 choices[9]= new Array();
 choices[9][0] = "Recursos f&iacute;sicos: equipos, sistemas, cableado&hellip;";
 choices[9][1] = "Utilizaci&oacute;n de recursos: uso de CPU, de ancho de banda, de disco duro&hellip;";
 choices[9][2] = "Imagen y reputaci&oacute;n p&uacute;blica y profesional de la empresa y sus empleados";
 choices[9][3] = "Todos los anteriores son activos de una organizaci&oacute;n";
 answers[9] = 3;
 units[9] = ['45'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2026. ";
 preguntaids[9] = 2026


//  Id pregunta: 2118 Año de creación de pregunta: 2002
 questions[10]= "11)  En auditor&iacute;a inform&aacute;tica, los controles de salida contienen, entre otros, a:";
 choices[10]= new Array();
 choices[10][0] = "Registro y almacenamiento de formularios negociables";
 choices[10][1] = "Autorizaci&oacute;n de la distribuci&oacute;n";
 choices[10][2] = "Balanceo y conciliaci&oacute;n";
 choices[10][3] = "Todas las anteriores";
 answers[10] = 3;
 units[10] = ['36', '45'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2118. ";
 preguntaids[10] = 2118


//  Id pregunta: 5345 Año de creación de pregunta: 2006
 questions[11]= "12)  Metodolog&iacute;a administrativa de gesti&oacute;n de sistemas que establece procedimientos para la gesti&oacute;n de situaciones futuras probables";
 choices[11]= new Array();
 choices[11][0] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 choices[11][1] = "Gesti&oacute;n basada en pol&iacute;ticas";
 choices[11][2] = "Tecnolog&iacute;a adaptativa";
 choices[11][3] = "Acuerdo de nivel de servicio (SLA)";
 answers[11] = 1;
 units[11] = ['45'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 5345. ";
 preguntaids[11] = 5345


//  Id pregunta: 2287 Año de creación de pregunta: 2002
 questions[12]= "13)  Seguridad es la capacidad de las redes o de los sistemas de informaci&oacute;n para resistir, con un determinado  nivel de confianza,  los  accidentes  o acciones  il&iacute;citas o  malintencionadas  que  comprometan&hellip;";
 choices[12]= new Array();
 choices[12][0] = "La disponibilidad de la informaci&oacute;n, la exactitud de la informaci&oacute;n y la confidencialidad de los datos";
 choices[12][1] = "La exactitud de la informaci&oacute;n, la integridad del sistema y la confidencialidad de los datos";
 choices[12][2] = "La disponibilidad, autenticidad, integridad y confidencialidad de los datos almacenados o transmitidos.";
 choices[12][3] = "La disponibilidad de la informaci&oacute;n, la integridad del sistema, la exactitud y autenticidad de la informaci&oacute;n";
 answers[12] = 2;
 units[12] = ['45'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 2287. ";
 preguntaids[12] = 2287


//  Id pregunta: 2208 Año de creación de pregunta: 2002
 questions[13]= "14)  La auditor&iacute;a de sistemas de informaci&oacute;n se puede considerar como:";
 choices[13]= new Array();
 choices[13][0] = "Una auditor&iacute;a de eficiencia";
 choices[13][1] = "Una auditor&iacute;a de eficacia";
 choices[13][2] = "Una auditor&iacute;a operativa";
 choices[13][3] = "Una auditor&iacute;a de legalidad";
 answers[13] = 2;
 units[13] = ['36', '45'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2208. ";
 preguntaids[13] = 2208


//  Id pregunta: 2067 Año de creación de pregunta: 2002
 questions[14]= "15)  Analizariamos los recursos de la organizaci&oacute;n...";
 choices[14]= new Array();
 choices[14][0] = "Cuando quisi&eacute;ramos realizar una programaci&oacute;n estrat&eacute;gica";
 choices[14][1] = "En la organizaci&oacute;n, para ver la forma de materializar la programaci&oacute;n";
 choices[14][2] = "Cuando ejecut&aacute;ramos una programaci&oacute;n, para determinar el costo";
 choices[14][3] = "Al realizar una valoraci&oacute;n de los que se ha consumido";
 answers[14] = 0;
 units[14] = ['36', '45'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2067. ";
 preguntaids[14] = 2067


//  Id pregunta: 1674 Año de creación de pregunta: 2016
 questions[15]= "16)  En la terminolog&iacute;a de recuperaci&oacute;n de sistemas ante desastres, el tiempo que cuantifica la cantidad perdida de datos hasta el momento de la interrupci&oacute;n, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "MTBF (Tiempo Medio Entre Fallos)";
 choices[15][1] = "RPO (Objetivo de Punto de Recuperaci&oacute;n)";
 choices[15][2] = "RTO (Objetivo de Tiempo de Recuperaci&oacute;n)";
 choices[15][3] = "SDO (Objetivo de Entrega del Servicio)";
 answers[15] = 1;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 1674. ";
 preguntaids[15] = 1674


//  Id pregunta: 2202 Año de creación de pregunta: 2002
 questions[16]= "17)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a la gesti&oacute;n de incidencias y aver&iacute;as:";
 choices[16]= new Array();
 choices[16][0] = "Las herramientas de gesti&oacute;n de incidencias deben estar integradas con el inventario";
 choices[16][1] = "La eficiencia del sistema es funci&oacute;n directa del n&uacute;mero de terminales telef&oacute;nicos";
 choices[16][2] = "Las llamadas de aver&iacute;as deben encaminarse autom&aacute;ticamente al suministrador";
 choices[16][3] = "Los operadores deben ser expertos en mantenimiento hardware";
 answers[16] = 0;
 units[16] = ['45'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2202. ";
 preguntaids[16] = 2202


//  Id pregunta: 2139 Año de creación de pregunta: 2004
 questions[17]= "18)  El t&eacute;rmino MAGERIT es un acr&oacute;nimo que procede de los siguientes t&eacute;rminos, o significa lo siguiente:";
 choices[17]= new Array();
 choices[17][0] = "Mercado Abierto y Gratuito a la Exportaci&oacute;n de Recursos Inform&aacute;ticos y de Telecomunicaciones";
 choices[17][1] = "Sistema Inform&aacute;tico propio, financiado y desarrollado por la Comunidad Aut&oacute;noma de Madrid (de aqu&iacute; el nombre de: &quot;Magerit&quot;)";
 choices[17][2] = "Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n";
 choices[17][3] = "Methot Aid for Gradual Employ Resource of Information Technology";
 answers[17] = 2;
 units[17] = ['45'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2139. Examen TIC MAP B 2004";
 preguntaids[17] = 2139


//  Id pregunta: 2219 Año de creación de pregunta: 2002
 questions[18]= "19)  La determinaci&oacute;n del nivel aceptable de seguridad corresponde a una pol&iacute;tica de:";
 choices[18]= new Array();
 choices[18][0] = "Aceptar el riesgo";
 choices[18][1] = "Evitar el riesgo";
 choices[18][2] = "Traspasar el riesgo";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = 1;
 units[18] = ['45'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2219. ";
 preguntaids[18] = 2219


//  Id pregunta: 5344 Año de creación de pregunta: 2006
 questions[19]= "20)  Documento que indica por escrito como una organizaci&oacute;n planea proteger los recursos f&iacute;sicos e inform&aacute;ticos";
 choices[19]= new Array();
 choices[19][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[19][1] = "Pol&iacute;tica de Seguridad";
 choices[19][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[19][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[19] = 1;
 units[19] = ['45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 5344. ";
 preguntaids[19] = 5344


//  Id pregunta: 2285 Año de creación de pregunta: 2002
 questions[20]= "21)  Se entiende por disponibilidad de la informaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "La informaci&oacute;n utilizada ser&aacute; la &uacute;ltima, exacta, autorizada y completa";
 choices[20][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[20][2] = "Aseguramiento de que los usuarios autorizados tienen acceso cuando lo  requieran a la informaci&oacute;n y sus activos asociados.";
 choices[20][3] = "Procedimiento o mecanismo tecnol&oacute;gico que reduce el riesgo.";
 answers[20] = 2;
 units[20] = ['45'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2285. ";
 preguntaids[20] = 2285


//  Id pregunta: 2171 Año de creación de pregunta: 2002
 questions[21]= "22)  En relaci&oacute;n con la auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[21]= new Array();
 choices[21][0] = "Al contrario de lo que ocurre en el sector privado, en el sector p&uacute;blico es muy sencillo realizar comparaciones entre los distintos servicios y administraciones p&uacute;blicas";
 choices[21][1] = "La auditor&iacute;a de econom&iacute;a consiste en medir los costes de desarrollo, mantenimiento y operaci&oacute;n de un sistema de informaci&oacute;n, incluyendo equipos y personal";
 choices[21][2] = "La auditor&iacute;a de eficacia es una medida de la correcta utilizaci&oacute;n de los equipos, instalaciones y personal que participan en el sistema de informaci&oacute;n. Es una medida de la calidad t&eacute;cnica del sistema de informaci&oacute;n";
 choices[21][3] = "La eficiencia se eval&uacute;a determinando si los requisitos del dise&ntilde;o se han cumplido y los usuarios est&aacute;n satisfechos con el sistema";
 answers[21] = 1;
 units[21] = ['36', '45'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2171. ";
 preguntaids[21] = 2171


//  Id pregunta: 2264 Año de creación de pregunta: 2002
 questions[22]= "23)  MAGERIT:";
 choices[22]= new Array();
 choices[22][0] = "Es una metodolog&iacute;a de an&aacute;lisis de riesgos";
 choices[22][1] = "Es una metodolog&iacute;a de gesti&oacute;n de riesgos";
 choices[22][2] = "Es una metodolog&iacute;a de gesti&oacute;n de proyectos";
 choices[22][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[22] = 3;
 units[22] = ['45'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2264. ";
 preguntaids[22] = 2264


//  Id pregunta: 2133 Año de creación de pregunta: 2004
 questions[23]= "24)  En la Metodolog&iacute;a MAGERIT, el evento que pueden desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales en sus activos, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Impacto";
 choices[23][1] = "Vulnerabilidad";
 choices[23][2] = "Amenaza";
 choices[23][3] = "Riesgo";
 answers[23] = 2;
 units[23] = ['45'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2133. Similar a examen TIC SS A 2003";
 preguntaids[23] = 2133


//  Id pregunta: 2022 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes respuestas referidas a las auditor&iacute;as de control de calidad es cierta?:";
 choices[24]= new Array();
 choices[24][0] = "Es un procedimiento habitual de control de calidad del software";
 choices[24][1] = "Es un procedimiento extraordinario al que se pueden someter los proyectos que tengan especial magnitud";
 choices[24][2] = "Su objetivo es proceder al refinamiento sucesivo en la definici&oacute;n de las especificaciones finales del proyecto";
 choices[24][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[24] = 1;
 units[24] = ['36', '45'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2022. ";
 preguntaids[24] = 2022


//  Id pregunta: 2175 Año de creación de pregunta: 2002
 questions[25]= "26)  En un An&aacute;lisis de Criticidad los elementos cr&iacute;ticos de un Sistema se clasifican seg&uacute;n:";
 choices[25]= new Array();
 choices[25][0] = "La probabilidad de mal funcionamiento de uno de ellos";
 choices[25][1] = "La estimaci&oacute;n de los costes de los da&ntilde;os derivados de su mal funcionamiento";
 choices[25][2] = "El tiempo durante el cu&aacute;l se puede asumir su carencia o mal funcionamiento";
 choices[25][3] = "El n&uacute;mero de elementos alternativos a cada elemento cr&iacute;tico";
 answers[25] = 2;
 units[25] = ['45'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2175. ";
 preguntaids[25] = 2175


//  Id pregunta: 2266 Año de creación de pregunta: 2002
 questions[26]= "27)  Para determinar el nivel aceptable de seguridad hay que llegar a un equilibrio entre:";
 choices[26]= new Array();
 choices[26][0] = "El coste de los da&ntilde;os versus el coste de sus consecuencias";
 choices[26][1] = "El coste de las medidas de seguridad versus el presupuesto disponible";
 choices[26][2] = "Los costes y la probabilidad de los da&ntilde;os versus el coste de las medidas y seguridad para evitarlos";
 choices[26][3] = "El coste de los da&ntilde;os versus los da&ntilde;os que somos capaces de aceptar";
 answers[26] = 2;
 units[26] = ['45'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2266. ";
 preguntaids[26] = 2266


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[27]= new Array();
 choices[27][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[27][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[27][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[27][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[27] = 0;
 units[27] = ['45'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 613. Junta de Extremadura A1 2015";
 preguntaids[27] = 613


//  Id pregunta: 2184 Año de creación de pregunta: 2002
 questions[28]= "29)  Entre las alternativas al HALON 1301 no se encuentra:";
 choices[28]= new Array();
 choices[28][0] = "FM-200";
 choices[28][1] = "Argonite";
 choices[28][2] = "Antifire";
 choices[28][3] = "Argonfire";
 answers[28] = 2;
 units[28] = ['45'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2184. ";
 preguntaids[28] = 2184


//  Id pregunta: 2015 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de la auditor&iacute;a inform&aacute;tica es falsa?:";
 choices[29]= new Array();
 choices[29][0] = "La finalidad de la auditor&iacute;a inform&aacute;tica es emitir un juicio acerca del estado de los sistemas";
 choices[29][1] = "La auditor&iacute;a inform&aacute;tica llega siempre a una valoraci&oacute;n o diagn&oacute;stico final, positivo o negativo";
 choices[29][2] = "La auditor&iacute;a inform&aacute;tica propone acciones a realizar";
 choices[29][3] = "La auditor&iacute;a inform&aacute;tica analiza tanto la infraestructura f&iacute;sica y l&oacute;gica como la estructura organizativa";
 answers[29] = 1;
 units[29] = ['36', '45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2015. ";
 preguntaids[29] = 2015


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[30]= "31)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[30][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[30][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[30][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[30] = 0;
 units[30] = ['45'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 609. Integraci&oacute;n continua";
 preguntaids[30] = 609


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[31][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[31][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[31][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[31] = 0;
 units[31] = ['45'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 612. Junta de Extremadura A1 2015";
 preguntaids[31] = 612


//  Id pregunta: 2016 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a la auditor&iacute;a?:";
 choices[32]= new Array();
 choices[32][0] = "Independientemente del tipo de auditor&iacute;a inform&aacute;tica que pretenda realizarse, la finalidad &uacute;ltima es emitir un juicio acerca del estado de los sistemas";
 choices[32][1] = "Del fin de la auditor&iacute;a habr&aacute;n de obtenerse los medios y las acciones de investigaci&oacute;n que se estimen necesarios para su consecuci&oacute;n";
 choices[32][2] = "La auditor&iacute;a siempre recomendar&aacute; la toma de acciones correctivas, independientemente del examen de situaci&oacute;n realizado";
 choices[32][3] = "Cuando la tarea del auditor sea muy compleja, se llevar&aacute; a cabo una divisi&oacute;n de funciones de forma arborescente";
 answers[32] = 2;
 units[32] = ['36', '45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2016. ";
 preguntaids[32] = 2016


//  Id pregunta: 2121 Año de creación de pregunta: 2002
 questions[33]= "34)  En el &aacute;mbito de la auditor&iacute;a de eficiencia, &eacute;sta es m&aacute;xima&hellip;:";
 choices[33]= new Array();
 choices[33][0] = "Cuando los costes de desarrollo, mantenimiento y operaci&oacute;n del sistema son los m&aacute;s bajos posiles";
 choices[33][1] = "Cuando se cumplen todos los requisitos de los usuarios y los objetivos del organismo";
 choices[33][2] = "Cuando el personal de sistemas de informaci&oacute;n trabaja con la m&aacute;xima diligencia";
 choices[33][3] = "Cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[33] = 3;
 units[33] = ['36', '45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 2121. ";
 preguntaids[33] = 2121


//  Id pregunta: 2181 Año de creación de pregunta: 2002
 questions[34]= "35)  En una auditor&iacute;a de comunicaciones al realizar un an&aacute;lisis detallado de los costes operativos, no ser&aacute; relevante considerar:";
 choices[34]= new Array();
 choices[34][0] = "Volumen de datos transmitidos";
 choices[34][1] = "Tiempos de duraci&oacute;n de conexi&oacute;n";
 choices[34][2] = "Protocolo de comunicaci&oacute;n";
 choices[34][3] = "Facilidades est&aacute;ticas y din&aacute;micas de conexi&oacute;n";
 answers[34] = 2;
 units[34] = ['36', '45'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2181. ";
 preguntaids[34] = 2181


//  Id pregunta: 2322 Año de creación de pregunta: 2002
 questions[35]= "36)  Un plan de contingencia corresponde a:";
 choices[35]= new Array();
 choices[35][0] = "Evitar el riesgo de da&ntilde;os";
 choices[35][1] = "Minimizar los da&ntilde;os producidos";
 choices[35][2] = "Planificar las situaciones de emergencia";
 choices[35][3] = "Establecer medidas de recuperaci&oacute;n";
 answers[35] = 1;
 units[35] = ['45'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2322. ";
 preguntaids[35] = 2322


//  Id pregunta: 2170 Año de creación de pregunta: 2002
 questions[36]= "37)  En los conceptos principales de la seguridad inform&aacute;tica no es cierto que:";
 choices[36]= new Array();
 choices[36][0] = "los da&ntilde;os sobre los activos producen impactos";
 choices[36][1] = "los impactos son materializaciones de las amenazas sobre los activos";
 choices[36][2] = "las salvaguardas ofrecen medidas curativas sobre los impactos, y preventivas sobre las vulnerabilidades";
 choices[36][3] = "los riesgos son las frecuencias con las que se pueden producir las amenazas sobre los activos";
 answers[36] = 3;
 units[36] = ['45'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2170. ";
 preguntaids[36] = 2170


//  Id pregunta: 2251 Año de creación de pregunta: 2002
 questions[37]= "38)  La vulnerabilidad es, de acuerdo a MAGERIT:";
 choices[37]= new Array();
 choices[37][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente (lo que podr&iacute;a pasar)";
 choices[37][1] = "Causa potencial de un incidente que puede causar da&ntilde;os a un sistema de informaci&oacute;n o a una   organizaci&oacute;n.";
 choices[37][2] = "Estimaci&oacute;n del grado de exposici&oacute;n a que una amenaza se materialice sobre uno o m&aacute;s activos  causando  da&ntilde;os o perjuicios  a la Organizaci&oacute;n.";
 choices[37][3] = "Ausencias  o ineficacias  de  las salvaguardas  pertinentes  para  salvaguardar  el valor propio  o acumulado  sobre un  activo";
 answers[37] = 3;
 units[37] = ['45'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2251. A: impacto; B: amenaza; C: riesgo";
 preguntaids[37] = 2251


//  Id pregunta: 4299 Año de creación de pregunta: 2009
 questions[38]= "39)  El riesgo es, de acuerdo a MAGERIT V2:";
 choices[38]= new Array();
 choices[38][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[38][1] = "Resultado de una agresi&oacute;n";
 choices[38][2] = "Posibilidad de ocurrencia de un incidente";
 choices[38][3] = "el impacto ponderado con la tasa de ocurrencia (o expectativa de materializaci&oacute;n) de la amenaza";
 answers[38] = 3;
 units[38] = ['45'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 4299. ";
 preguntaids[38] = 4299


//  Id pregunta: 2185 Año de creación de pregunta: 2002
 questions[39]= "40)  Entre las funciones de un auditor inform&aacute;tico est&aacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Revisi&oacute;n de sistemas bajo desarrollo, instalaciones inform&aacute;ticas y aplicaciones";
 choices[39][1] = "Soporte a auditores no inform&aacute;ticos";
 choices[39][2] = "La a) y la b) son correctas";
 choices[39][3] = "La a) y la b) son incorrectas";
 answers[39] = 2;
 units[39] = ['36', '45'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2185. ";
 preguntaids[39] = 2185


//  Id pregunta: 4022 Año de creación de pregunta: 2002
 questions[40]= "41)  La cintoteca o armario ign&iacute;fugo debe colocarse en:";
 choices[40]= new Array();
 choices[40][0] = "El sotano";
 choices[40][1] = "Un sitio estable desde el punto de vista metereologico";
 choices[40][2] = "Pegado a la estructura del edificio";
 choices[40][3] = "No hace falta tener cuidado con su localizacion";
 answers[40] = 2;
 units[40] = ['45'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 4022. ";
 preguntaids[40] = 4022


//  Id pregunta: 2466 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no se considera un riesgo de origen accidental?:";
 choices[41]= new Array();
 choices[41][0] = "Huelga del personal";
 choices[41][1] = "Errores en la utilizaci&oacute;n de los datos";
 choices[41][2] = "Aver&iacute;as en las instalaciones el&eacute;ctricas";
 choices[41][3] = "Interrupci&oacute;n de suministro de energ&iacute;a";
 answers[41] = 0;
 units[41] = ['45'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 2466. ";
 preguntaids[41] = 2466


//  Id pregunta: 2142 Año de creación de pregunta: 2004
 questions[42]= "43)  La seguridad f&iacute;sica de los sitemas de informaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Debido a la segregaci&oacute;n de tareas, es labor exclusiva de los guardias de seguridad";
 choices[42][1] = "Debe alcanzar tambi&eacute;n a los equipos que est&eacute;n fuera de los locales de la Organizaci&oacute;n (equipos en teletrabajo, port&aacute;tiles, PDAs, etc.)";
 choices[42][2] = "Es una preocupaci&oacute;n que se evita al externalizar las funciones de explotaci&oacute;n del sistema de informaci&oacute;n";
 choices[42][3] = "Es notablemente superior en aquellas Organizaciones que disponen de s&oacute;tanos bunkerizados";
 answers[42] = 1;
 units[42] = ['45'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2142. Examen TIC MAP B 2004";
 preguntaids[42] = 2142


//  Id pregunta: 2414 Año de creación de pregunta: 2006
 questions[43]= "44)  Entre los controles de acceso l&oacute;gico no se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Identificaci&oacute;n de las rutas de acceso l&oacute;gico.";
 choices[43][1] = "Prueba de los controles de acceso l&oacute;gico.";
 choices[43][2] = "Evaluaci&oacute;n de amenazas de acceso l&oacute;gico.";
 choices[43][3] = "Evaluaci&oacute;n del almacenamiento en el Centro de respaldo.";
 answers[43] = 3;
 units[43] = ['45'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2414. ";
 preguntaids[43] = 2414


//  Id pregunta: 2141 Año de creación de pregunta: 2004
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[44][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[44][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[44][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[44] = 2;
 units[44] = ['45'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2141. Examen TIC MAP B 2004";
 preguntaids[44] = 2141


//  Id pregunta: 4295 Año de creación de pregunta: 2002
 questions[45]= "46)  Con respecto a almacenamiento de copias de seguridad, &iquest;qu&eacute; garant&iacute;as nos ofrece un armario de protecci&oacute;n combinada?:";
 choices[45]= new Array();
 choices[45][0] = "Su misi&oacute;n principal es proteger del fuego y electromagnetismo";
 choices[45][1] = "Su misi&oacute;n principal es proteger del agua y del fuego";
 choices[45][2] = "Su misi&oacute;n principal es proteger de radiaciones electricas";
 choices[45][3] = "Ninguna de las anteriores es correcta";
 answers[45] = 0;
 units[45] = ['45'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 4295. ";
 preguntaids[45] = 4295


//  Id pregunta: 2097 Año de creación de pregunta: 2002
 questions[46]= "47)  El estudio de la informaci&oacute;n, su calidad, flujo y seguridad es caracter&iacute;stico de:";
 choices[46]= new Array();
 choices[46][0] = "La auditor&iacute;a inform&aacute;tica";
 choices[46][1] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[46][2] = "La planificaci&oacute;n de capacidad del sistema";
 choices[46][3] = "Las t&eacute;cnicas de control de proyectos";
 answers[46] = 0;
 units[46] = ['36', '45'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2097. ";
 preguntaids[46] = 2097


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[47]= new Array();
 choices[47][0] = "Estimaci&oacute;n del riesgo";
 choices[47][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[47][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[47][3] = "Mapa de riesgos";
 answers[47] = 3;
 units[47] = ['45'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 608. AGE A1 2015";
 preguntaids[47] = 608


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[48]= "49)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[48]= new Array();
 choices[48][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[48][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[48][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[48][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[48] = 2;
 units[48] = ['45'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[48] = 611


//  Id pregunta: 5362 Año de creación de pregunta: 2006
 questions[49]= "50)  Un sitio caliente de respaldo se caracteriza por";
 choices[49]= new Array();
 choices[49][0] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[49][1] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[49][2] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[49][3] = "La A y la B";
 answers[49] = 3;
 units[49] = ['45'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 5362. ";
 preguntaids[49] = 5362


//  Id pregunta: 2014 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las actuaciones siguientes corresponde a una auditor&iacute;a inform&aacute;tica?:";
 choices[50]= new Array();
 choices[50][0] = "Recomendar situaciones";
 choices[50][1] = "Planes estrat&eacute;gicos de seguridad";
 choices[50][2] = "Planes de aseguramiento de calidad";
 choices[50][3] = "Reorganizaci&oacute;n de los recursos humanos del departamento inform&aacute;tico";
 answers[50] = 0;
 units[50] = ['36', '45'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2014. ";
 preguntaids[50] = 2014


//  Id pregunta: 2418 Año de creación de pregunta: 2006
 questions[51]= "52)  Los criterios comunes (criterios de evaluaci&oacute;n unificados para la seguridad de los productos IT) se corresponden con la norma:";
 choices[51]= new Array();
 choices[51][0] = "ISO 15408";
 choices[51][1] = "ANSI 14508";
 choices[51][2] = "CEN 15408";
 choices[51][3] = "IEEE 14508";
 answers[51] = 0;
 units[51] = ['45'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2418. ";
 preguntaids[51] = 2418


//  Id pregunta: 1998 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no se considera un motivo para ordenar una auditor&iacute;a?:";
 choices[52]= new Array();
 choices[52][0] = "Para determinar el origen del malfuncionamiento de una aplicaci&oacute;n";
 choices[52][1] = "Para determinar el estado del sistema ante un cambio importante";
 choices[52][2] = "Para determinar cual es el motivo del malfuncionamiento del sistema";
 choices[52][3] = "Para determinar si los proyectos transcurren seg&uacute;n lo establecido, en cuanto a recursos, objetivos etc";
 answers[52] = 0;
 units[52] = ['36', '45'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 1998. ";
 preguntaids[52] = 1998


//  Id pregunta: 1777 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes es un objetivo de la gesti&oacute;n de riesgos?";
 choices[53]= new Array();
 choices[53][0] = "Aumentar el presupuesto de seguridad de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[53][1] = "Transparencia hacia la empresa de los riesgos significativos";
 choices[53][2] = "Conocimiento de las &uacute;ltimas herramientas en materia de seguridad";
 choices[53][3] = "Conducir un an&aacute;lisis de riesgo detallado";
 answers[53] = 1;
 units[53] = ['45'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 1777. ";
 preguntaids[53] = 1777


//  Id pregunta: 2117 Año de creación de pregunta: 2002
 questions[54]= "55)  En auditor&iacute;a inform&aacute;tica, el objeto de una &quot;prueba de cumplimiento&quot; es:";
 choices[54]= new Array();
 choices[54][0] = "Verificar el cumplimiento de la legislaci&oacute;n y la normativa vigente en las operaciones de un sistema de informaci&oacute;n, especialmente en el cap&iacute;tulo de compras y gesti&oacute;n de personal";
 choices[54][1] = "Sustanciar la probabilidad de que los objetivos de control no se alcancen";
 choices[54][2] = "Determinar si los controles se est&aacute;n aplicando de la forma descrita en la documentaci&oacute;n o de la forma descrita por el usuario o directivo";
 choices[54][3] = "Verificar que todos los usuarios se adhieren voluntaria u obligatoriamente a la pol&iacute;tica sobre usos de recursos inform&aacute;ticos implantada por la Direcci&oacute;n";
 answers[54] = 2;
 units[54] = ['36', '45'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2117. ";
 preguntaids[54] = 2117


//  Id pregunta: 2080 Año de creación de pregunta: 2002
 questions[55]= "56)  Dentro de los objetivos que se fijar&iacute;a una auditor&iacute;a sobre el grado de adecuaci&oacute;n de las herramientas de software utilizadas a la informaci&oacute;n gestionada, &iquest;cu&aacute;l de los siguientes considera que no ser&iacute;a relevante obtener del estudio?:";
 choices[55]= new Array();
 choices[55][0] = "Fiabilidad t&eacute;cnica";
 choices[55][1] = "Cambio del modelo de datos utilizados";
 choices[55][2] = "Estudio de opini&oacute;n de los usuarios";
 choices[55][3] = "Facilidad de mantenimiento y expansi&oacute;n";
 answers[55] = 1;
 units[55] = ['36', '45'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2080. ";
 preguntaids[55] = 2080


//  Id pregunta: 2082 Año de creación de pregunta: 2002
 questions[56]= "57)  Desde el punto de vista de un auditor de seguridad indique cu&aacute;l de las siguientes premisas, sobre control interno de acceso l&oacute;gico, es inadecuada:";
 choices[56]= new Array();
 choices[56][0] = "El sistema debe obligar al usuario a cambiar de contrase&ntilde;a cada cierto tiempo";
 choices[56][1] = "El registro o log de acceso al sistema puede desactivarse a petici&oacute;n del responsable de seguridad";
 choices[56][2] = "Es conveniente que la autenticaci&oacute;n de entrada al sistema se haga una &uacute;nica vez";
 choices[56][3] = "El sistema debe rechazar el acceso a los usuarios despu&eacute;s de una serie de intentos fallidos";
 answers[56] = 1;
 units[56] = ['36', '45'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 2082. ";
 preguntaids[56] = 2082


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[57]= "58)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[57]= new Array();
 choices[57][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[57][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[57][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[57][3] = "Todas las respuestas anteriores son correctas.";
 answers[57] = 0;
 units[57] = ['45'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 610. Junta de Extremadura A1 2015";
 preguntaids[57] = 610


//  Id pregunta: 2131 Año de creación de pregunta: 2004
 questions[58]= "59)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[58]= new Array();
 choices[58][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[58][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[58][2] = "Evaluaci&oacute;n de riesgos";
 choices[58][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[58] = 0;
 units[58] = ['36', '45'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2131. Similar a examen TIC SS A 2003";
 preguntaids[58] = 2131


//  Id pregunta: 4291 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de MAGERIT?:";
 choices[59]= new Array();
 choices[59][0] = "MAGERIT es un &oacute;rgano encargado de establecer la pol&iacute;tica de seguridad de los sistemas de informaci&oacute;n en las Administraciones P&uacute;blicas";
 choices[59][1] = "MAGERIT es una metodolog&iacute;a para an&aacute;lisis y gesti&oacute;n de riesgos de los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas";
 choices[59][2] = "MAGERIT defiende que la seguridad debe ser independiente del medio";
 choices[59][3] = "El objetivo de MAGERIT es conseguir la confianza en la utilizaci&oacute;n de t&eacute;cnicas inform&aacute;ticas y telem&aacute;ticas";
 answers[59] = 0;
 units[59] = ['45'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 4291. ";
 preguntaids[59] = 4291


//  Id pregunta: 2160 Año de creación de pregunta: 2002
 questions[60]= "61)  En la metodolog&iacute;a MAGERIT, la actividad &quot;Interpretaci&oacute;n del Riesgo&quot; corresponde a la etapa de:";
 choices[60]= new Array();
 choices[60][0] = "Planificaci&oacute;n";
 choices[60][1] = "An&aacute;lisis de riesgos";
 choices[60][2] = "Gesti&oacute;n de riesgos";
 choices[60][3] = "Selecci&oacute;n de salvaguardas";
 answers[60] = 2;
 units[60] = ['45'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2160. ";
 preguntaids[60] = 2160


//  Id pregunta: 2161 Año de creación de pregunta: 2002
 questions[61]= "62)  En la metodolog&iacute;a MAGERIT, se define vulnerabilidad como:";
 choices[61]= new Array();
 choices[61][0] = "El da&ntilde;o producido a la organizaci&oacute;n por un posible incidente";
 choices[61][1] = "La posibilidad de que se produzca un impacto dado en la organizaci&oacute;n";
 choices[61][2] = "Cualquier activo del sistema";
 choices[61][3] = "La posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo";
 answers[61] = 3;
 units[61] = ['45'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2161. ";
 preguntaids[61] = 2161


//  Id pregunta: 2089 Año de creación de pregunta: 2002
 questions[62]= "63)  El conjunto de t&eacute;cnicas y procedimientos que garantizan la disponibilidad de la informaci&oacute;n, la integridad del sistema y la confidencialidad, son propias de:";
 choices[62]= new Array();
 choices[62][0] = "Una auditor&iacute;a inform&aacute;tica";
 choices[62][1] = "Un plan de contingencia";
 choices[62][2] = "La seguridad inform&aacute;tica";
 choices[62][3] = "Una planificaci&oacute;n estrat&eacute;gica";
 answers[62] = 2;
 units[62] = ['36', '45'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 2089. ";
 preguntaids[62] = 2089


//  Id pregunta: 2159 Año de creación de pregunta: 2007
 questions[63]= "64)  La metodolog&iacute;a MAGERIT:";
 choices[63]= new Array();
 choices[63][0] = "Se apoya en tres submodelos: submodelo de elementos, submodelo de eventos y submodelo de procesos.";
 choices[63][1] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Activos y Gu&iacute;a de T&eacute;cnicas";
 choices[63][2] = "MAGERIT es una metodolog&iacute;a de car&aacute;cter p&uacute;blico, perteneciente al Ministerio de Administraciones P&uacute;blicas. Su utilizaci&oacute;n requiere autorizaci&oacute;n previa del MAP";
 choices[63][3] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Elementos y Gu&iacute;a de T&eacute;cnicas";
 answers[63] = 3;
 units[63] = ['45'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2159. ";
 preguntaids[63] = 2159


//  Id pregunta: 2174 Año de creación de pregunta: 2002
 questions[64]= "65)  En temas de seguridad inform&aacute;tica, una de las siguientes afirmaciones es falsa:";
 choices[64]= new Array();
 choices[64][0] = "La prioridad de actuaci&oacute;n viene dada por el producto impacto x vulnerabilidad";
 choices[64][1] = "Los costes de seguridad se clasifican en directos (inversiones en equipos, mantenimiento, personal de seguridad) e indirectos (dificultad de uso, restricciones de servicios, reducci&oacute;n de prestaciones)";
 choices[64][2] = "La pol&iacute;tica de seguridad es un documento oficial de la organizaci&oacute;n de car&aacute;cter confidencial";
 choices[64][3] = "El punto de equilibrio financiero ser&aacute; el que represente el coste m&iacute;nimo sumando el coste de seguridad y el de p&eacute;rdidas por incidentes o materializaciones de amenazas";
 answers[64] = 2;
 units[64] = ['45'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 2174. ";
 preguntaids[64] = 2174


//  Id pregunta: 2261 Año de creación de pregunta: 2002
 questions[65]= "66)  Los mecanismos de salvaguarda, de acuerdo a MAGERIT son:";
 choices[65]= new Array();
 choices[65][0] = "Un dispositivo l&oacute;gico que reduce el riesgo";
 choices[65][1] = "Un dispositivo f&iacute;sico que reduce el riesgo";
 choices[65][2] = "Aquellos que operan de forma preventiva sobre la vulnerabilidad";
 choices[65][3] = "Todas las respuestas anteriores son correctas";
 answers[65] = 3;
 units[65] = ['45'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2261. ";
 preguntaids[65] = 2261


//  Id pregunta: 2132 Año de creación de pregunta: 2004
 questions[66]= "67)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[66]= new Array();
 choices[66][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[66][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[66][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[66][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[66] = 2;
 units[66] = ['36', '45'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2132. Similar a examen TIC SS A 2003";
 preguntaids[66] = 2132


//  Id pregunta: 2198 Año de creación de pregunta: 2007
 questions[67]= "68)  Indicar la afirmaci&oacute;n correcta sobre MAGERIT:";
 choices[67]= new Array();
 choices[67][0] = "Magerit se ha estructurado en tres libros: &quot;M&eacute;todo&quot;, &quot;Cat&aacute;logo de Elementos&quot; y &quot;Gu&iacute;a de T&eacute;cnicas&quot;";
 choices[67][1] = "la metodolog&iacute;a se describe desde tres &aacute;ngulos";
 choices[67][2] = "Entre t&eacute;cnicas descritas en la Gu&iacute;a de T&eacute;cnicas se encuentra: el an&aacute;lisis mediante tablas, an&aacute;lisis algor&iacute;tmico, &aacute;rboles de ataque, y la valoraci&oacute;n Delphi.";
 choices[67][3] = "Las tres anteriores son correctas";
 answers[67] = 3;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 2198. ";
 preguntaids[67] = 2198


//  Id pregunta: 2143 Año de creación de pregunta: 2004
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes no es una fase en un proceso de auditor&iacute;a de la gesti&oacute;n de la seguridad inform&aacute;tica de una instalaci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "Evaluaci&oacute;n de la adecuaci&oacute;n de los controles establecidos";
 choices[68][1] = "Realizaci&oacute;n de entrevistas a usuarios";
 choices[68][2] = "Adquisici&oacute;n del conocimiento necesario mediante la identificaci&oacute;n y documentaci&oacute;n del entorno y de la gesti&oacute;n";
 choices[68][3] = "Ejecuci&oacute;n de pruebas sustantivas";
 answers[68] = 3;
 units[68] = ['45'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2143. Examen TIC MAP B 2004";
 preguntaids[68] = 2143


//  Id pregunta: 3953 Año de creación de pregunta: 2002
 questions[69]= "70)  Respecto al an&aacute;lisis y gesti&oacute;n en un proyecto inform&aacute;tico, indique cual de las siguientes afirmaciones es correcta:";
 choices[69]= new Array();
 choices[69][0] = "Las medidas preventivas est&aacute;n encaminadas a reducir los da&ntilde;os que puedan causar determinados incidentes";
 choices[69][1] = "El plan de contingencia contendr&aacute; las medidas preventivas adoptadas";
 choices[69][2] = "El plan de emergencia recoge las normas de actuaci&oacute;n durante o inmediatamente despu&eacute;s de cada fallo o da&ntilde;o";
 choices[69][3] = "Las medidas de correci&oacute;n van encaminadas a reducir la probabilidad de ocurrencia de incidentes";
 answers[69] = 2;
 units[69] = ['45'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 3953. ";
 preguntaids[69] = 3953


//  Id pregunta: 4297 Año de creación de pregunta: 2009
 questions[70]= "71)  El impacto es, de acuerdo a MAGERIT v2:";
 choices[70]= new Array();
 choices[70][0] = "Da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza";
 choices[70][1] = "Lo que podr&iacute;a pasar";
 choices[70][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[70][3] = "Lo que probablemente pase";
 answers[70] = 2;
 units[70] = ['45'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 4297. ";
 preguntaids[70] = 4297


//  Id pregunta: 5312 Año de creación de pregunta: 2006
 questions[71]= "72)  Un protocolo usado espec&iacute;ficamente para controlar el backup de datos entre el almacenamiento primario y el centro de respaldo es";
 choices[71]= new Array();
 choices[71][0] = "Common Management Information Protocol (CMIP)";
 choices[71][1] = "Network Data Management Protocol (NDMP)";
 choices[71][2] = "Point-to-Point Protocol (PPP)";
 choices[71][3] = "Bootstrap Protocol (BOOTP)";
 answers[71] = 1;
 units[71] = ['45'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 5312. ";
 preguntaids[71] = 5312


//  Id pregunta: 1671 Año de creación de pregunta: 2016
 questions[72]= "73)  La Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n, MAGERIT, establece unas dimensiones de valoraci&oacute;n de activos. Determine cu&aacute;l de las siguientes respuestas es correcta:";
 choices[72]= new Array();
 choices[72][0] = "Disponibilidad, integridad de los datos y confidencialidad de los datos.";
 choices[72][1] = "Disponibilidad, integridad de los datos, confidencialidad de los datos, eficacia y eficiencia.";
 choices[72][2] = "Eficacia, eficiencia, disponibilidad, integridad, confidencialidad, conformidad y fiabilidad.";
 choices[72][3] = "Disponibilidad, integridad de los datos, confidencialidad de los datos, autenticidad de los usuarios del servicio, autenticidad del origen de los datos, trazabilidad del servicio, trazabilidad de los datos.";
 answers[72] = 3;
 units[72] = ['45'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 1671. ";
 preguntaids[72] = 1671


//  Id pregunta: 2413 Año de creación de pregunta: 2006
 questions[73]= "74)  El Plan de Contingencias:";
 choices[73]= new Array();
 choices[73][0] = "implica un an&aacute;lisis de los posibles riesgos";
 choices[73][1] = "debe incluir un Plan de Recuperaci&oacute;n de Desastres";
 choices[73][2] = "las dos primeras son ciertas";
 choices[73][3] = "las dos primeras son falsas";
 answers[73] = 2;
 units[73] = ['45'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 2413. ";
 preguntaids[73] = 2413


//  Id pregunta: 2027 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es un control de entrada de datos en una Revisi&oacute;n de Controles de Aplicaci&oacute;n en una auditor&iacute;a inform&aacute;tica?:";
 choices[74]= new Array();
 choices[74][0] = "Controles por lote y balanceo";
 choices[74][1] = "Validaci&oacute;n y edici&oacute;n de datos";
 choices[74][2] = "Balanceo y conciliaci&oacute;n";
 choices[74][3] = "Autorizaci&oacute;n de ingreso";
 answers[74] = 2;
 units[74] = ['36', '45'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2027. ";
 preguntaids[74] = 2027


