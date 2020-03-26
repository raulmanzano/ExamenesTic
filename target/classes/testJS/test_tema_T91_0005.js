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
//  Id pregunta: 7525 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia en M&Eacute;TRICA versi&oacute;n 3?";
 choices[0]= new Array();
 choices[0][0] = "ISO/IEC TR 16.502/SPICE.";
 choices[0][1] = "ISO 12.207.";
 choices[0][2] = "IEEE 600.11990.";
 choices[0][3] = "UNE-EN-ISO 9001:2000.";
 answers[0] = 1;
 units[0] = ['91'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 7525. Map 2005";
 preguntaids[0] = 7525


//  Id pregunta: 7982 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes tareas NO se engloba, en M&eacute;trica v3, en la actividad de Planificaci&oacute;n de la Interfaz de Gesti&oacute;n de Proyectos?";
 choices[1]= new Array();
 choices[1][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[1][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[1][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[1][3] = "Planificaci&oacute;n Detallada de las pruebas del Sistema.";
 answers[1] = 3;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7982. Examen TIC A2 2010";
 preguntaids[1] = 7982


//  Id pregunta: 7858 Año de creación de pregunta: 2011
 questions[2]= "3)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[2]= new Array();
 choices[2][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[2][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[2][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[2][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[2] = 2;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7858. Examen TIC A1 2010";
 preguntaids[2] = 7858


//  Id pregunta: 7983 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[3]= new Array();
 choices[3][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[3][1] = "PERT.";
 choices[3][2] = "CPM.";
 choices[3][3] = "El histograma de recursos.";
 answers[3] = 0;
 units[3] = ['91'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 7983. Examen TIC A2 2010";
 preguntaids[3] = 7983


//  Id pregunta: 8889 Año de creación de pregunta: 2013
 questions[4]= "5)  En relaci&oacute;n al proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n (ASI) de M&eacute;trica v.3, un producto de la actividad Establecimiento de Requisitos es:";
 choices[4]= new Array();
 choices[4][0] = "Modelo conceptual de datos.";
 choices[4][1] = "Modelo de casos de uso.";
 choices[4][2] = "Cat&aacute;logo de usuarios.";
 choices[4][3] = "Cat&aacute;logo de excepciones.";
 answers[4] = 1;
 units[4] = ['91'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 8889. Examen AGE TIC A1 2011";
 preguntaids[4] = 8889


//  Id pregunta: 7507 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes interfaces no corresponde a las establecidas por la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[5]= new Array();
 choices[5][0] = "Planificaci&oacute;n.";
 choices[5][1] = "Gesti&oacute;n de proyectos.";
 choices[5][2] = "Aseguramiento de la calidad.";
 choices[5][3] = "Seguridad.";
 answers[5] = 0;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7507. Map 2005";
 preguntaids[5] = 7507


//  Id pregunta: 8888 Año de creación de pregunta: 2013
 questions[6]= "7)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[6]= new Array();
 choices[6][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[6][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[6][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[6][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[6] = 2;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 8888. Examen AGE TIC A1 2011";
 preguntaids[6] = 8888


//  Id pregunta: 7979 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[7]= new Array();
 choices[7][0] = "Perfil Jefe de Proyecto.";
 choices[7][1] = "Perfil Consultor.";
 choices[7][2] = "Perfil Analista.";
 choices[7][3] = "Perfil Programador.";
 answers[7] = 0;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 7979. Examen TIC A2 2010";
 preguntaids[7] = 7979


//  Id pregunta: 9129 Año de creación de pregunta: 2014
 questions[8]= "9)  La tarea de especificaci&oacute;n de necesidades de Migraci&oacute;n en M&eacute;trica v3 se tiene en cuenta en la actividad:";
 choices[8]= new Array();
 choices[8][0] = "Elaboraci&oacute;n del modelo de datos en ASI";
 choices[8][1] = "Dise&ntilde;o de clases en DSI";
 choices[8][2] = "Dise&ntilde;o de la Migraci&oacute;n y carga inicial de datos en DSI";
 choices[8][3] = "A y B son correctas";
 answers[8] = 3;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 9129. Ambas actividades tienen una tarea llamada &quot;Especificaci&oacute;n de necesidades de Migraci&oacute;n y Carga inicial de datos&quot;";
 preguntaids[8] = 9129


//  Id pregunta: 8032 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes herramientas permite realizar pruebas de regresi&oacute;n en el software?";
 choices[9]= new Array();
 choices[9][0] = "Jmeter.";
 choices[9][1] = "Snort.";
 choices[9][2] = "Atrio.";
 choices[9][3] = "JBPM.";
 answers[9] = 0;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 8032. Examen TIC A2 2010";
 preguntaids[9] = 8032


//  Id pregunta: 7980 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Qu&eacute; t&eacute;cnica es utilizada para identificar las dependencias en un proyecto?";
 choices[10]= new Array();
 choices[10][0] = "Los diagramas de Gantt.";
 choices[10][1] = "Program Evaluation &amp; Review Technique.";
 choices[10][2] = "Estructura de Descomposici&oacute;n de Trabajo (WBS).";
 choices[10][3] = "Diagrama de Extrapolaci&oacute;n.";
 answers[10] = 1;
 units[10] = ['91'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 7980. Examen TIC A2 2010";
 preguntaids[10] = 7980


//  Id pregunta: 9109 Año de creación de pregunta: 2014
 questions[11]= "12)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Top-down.";
 choices[11][1] = "Sandwich.";
 choices[11][2] = "Big-Bang";
 choices[11][3] = "Bottom-up.";
 answers[11] = 2;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 9109. Examen TIC A2 2013";
 preguntaids[11] = 9109


//  Id pregunta: 7885 Año de creación de pregunta: 2011
 questions[12]= "13)  En la aprobaci&oacute;n del Plan de Sistemas de Informaci&oacute;n en la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 participan:";
 choices[12]= new Array();
 choices[12][0] = "Comit&eacute; de Direcci&oacute;n y jefe de proyecto del PSI.";
 choices[12][1] = "Comit&eacute; de Direcci&oacute;n, jefe de proyecto y usuarios expertos.";
 choices[12][2] = "Comit&eacute; de Direcci&oacute;n, consultores y jefe de proyecto.";
 choices[12][3] = "Jefe de proyecto, responsable de seguridad y usuarios expertos.";
 answers[12] = 0;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 7885. Examen TIC A1 2010";
 preguntaids[12] = 7885


//  Id pregunta: 7992 Año de creación de pregunta: 2011
 questions[13]= "14)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA 3, en la tarea &quot;Preparaci&oacute;n del Entorno de Construcci&oacute;n&quot; participan:";
 choices[13]= new Array();
 choices[13][0] = "Programadores, T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[13][1] = "T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[13][2] = "Equipo del Proyecto, T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[13][3] = "Programadores, Equipo de Arquitectura, Administradores de Bases de Datos.";
 answers[13] = 2;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 7992. Examen TIC A2 2010";
 preguntaids[13] = 7992


//  Id pregunta: 8203 Año de creación de pregunta: 2011
 questions[14]= "15)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[14]= new Array();
 choices[14][0] = "Actividades de Seguimiento y Control.";
 choices[14][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[14][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[14][3] = "Actividades de Inicio del Proyecto.";
 answers[14] = 1;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 8203. Examen TIC A2 2010 interna";
 preguntaids[14] = 8203


//  Id pregunta: 8003 Año de creación de pregunta: 2011
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de &eacute;stas es una de las funciones del Grupo de Aseguramiento de la Calidad (seg&uacute;n M&eacute;trica v3):";
 choices[15]= new Array();
 choices[15][0] = "Definir los recursos que se necesitan para instalar el sistema.";
 choices[15][1] = "Identificar las posibles desviac&iacute;ones en los est&aacute;ndares aplicados, as&iacute; como en los requisitos y procedimientos especificados.";
 choices[15][2] = "Notificar a los desarrolladores de las anomal&iacute;as encontradas en el proceso de desarrollo.";
 choices[15][3] = "Documentar las pruebas seg&uacute;n el est&aacute;ndar ISO 9000:2000.";
 answers[15] = 1;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 8003. Examen TIC A2 2010";
 preguntaids[15] = 8003


//  Id pregunta: 8201 Año de creación de pregunta: 2011
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes actividades NO pertenece a la Gesti&oacute;n del Proyecto seg&uacute;n M&eacute;trica v3?";
 choices[16]= new Array();
 choices[16][0] = "Identificaci&oacute;n de las Propiedades de Calidad.";
 choices[16][1] = "Planificaci&oacute;n.";
 choices[16][2] = "Cierre del Proyecto.";
 choices[16][3] = "Estimaci&oacute;n de Esfuerzo.";
 answers[16] = 0;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 8201. Examen TIC A2 2010 interna";
 preguntaids[16] = 8201


//  Id pregunta: 8633 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes no es interfaz de M&eacute;trica 3?";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de Configuraci&oacute;n";
 choices[17][1] = "Gesti&oacute;n de Procesos";
 choices[17][2] = "Seguridad";
 choices[17][3] = "Aseguramiento de la Calidad";
 answers[17] = 1;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 8633. ";
 preguntaids[17] = 8633


//  Id pregunta: 8016 Año de creación de pregunta: 2011
 questions[18]= "19)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Mantenimiento adaptativo.";
 choices[18][1] = "Mantenimiento preventivo.";
 choices[18][2] = "Mantenimiento correctivo.";
 choices[18][3] = "Mantenimiento evolutivo.";
 answers[18] = 1;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 8016. Examen TIC A2 2010";
 preguntaids[18] = 8016


//  Id pregunta: 7850 Año de creación de pregunta: 2011
 questions[19]= "20)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[19][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[19][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[19][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[19] = 1;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 7850. Examen TIC A1 2010";
 preguntaids[19] = 7850


//  Id pregunta: 8549 Año de creación de pregunta: 2013
 questions[20]= "21)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v.3, el Plan de Sistemas de Informaci&oacute;n debe tener una perspectiva";
 choices[20]= new Array();
 choices[20][0] = "Exclusivamente estrat&eacute;gica, y no tecnol&oacute;gica";
 choices[20][1] = "Estrat&eacute;gica y operativa, y no tecnolog&iacute;ca";
 choices[20][2] = "Exclusivamente estrat&eacute;gica, y fuertemente tecnol&oacute;gica";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 1;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 8549. ";
 preguntaids[20] = 8549


//  Id pregunta: 8205 Año de creación de pregunta: 2011
 questions[21]= "22)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[21]= new Array();
 choices[21][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[21][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[21][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[21][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[21] = 0;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 8205. Examen TIC A2 2010 interna";
 preguntaids[21] = 8205


//  Id pregunta: 8004 Año de creación de pregunta: 2011
 questions[22]= "23)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[22]= new Array();
 choices[22][0] = "Define su contenido.";
 choices[22][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[22][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[22][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[22] = 2;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 8004. Examen TIC A2 2010";
 preguntaids[22] = 8004


//  Id pregunta: 8217 Año de creación de pregunta: 2011
 questions[23]= "24)  Seg&uacute;n M&eacute;trica v3. &iquest;cu&aacute;l de las siguientes listas esta correctamente ordenada de mayor a menor acoplamiento?";
 choices[23]= new Array();
 choices[23][0] = "De contenido, com&uacute;n, de control, externo, de datos.";
 choices[23][1] = "De datos, de marca, externo, de control, com&uacute;n, de contenido";
 choices[23][2] = "De datos, de marca, de control, externo, com&uacute;n, de contenido";
 choices[23][3] = "De contenido, com&uacute;n, externo, de marca, de datos";
 answers[23] = 3;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 8217. Examen TIC A2 2010 interna";
 preguntaids[23] = 8217


//  Id pregunta: 7744 Año de creación de pregunta: 2010
 questions[24]= "25)  Seg&uacute;n M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes productos NO se obtienen del proceso de an&aacute;lisis de sistemas de informaci&oacute;n (ASI) orientado a objetos?";
 choices[24]= new Array();
 choices[24][0] = "Dise&ntilde;o de clases.";
 choices[24][1] = "Descripci&oacute;n de interfaces entre subsistemas.";
 choices[24][2] = "Modelo de clases de an&aacute;lisis.";
 choices[24][3] = "An&aacute;lisis de la realizaci&oacute;n de los casos de uso.";
 answers[24] = 0;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 7744. ";
 preguntaids[24] = 7744


//  Id pregunta: 7984 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[25]= new Array();
 choices[25][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[25][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[25][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[25][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[25] = 3;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7984. Examen TIC A2 2010";
 preguntaids[25] = 7984


//  Id pregunta: 8635 Año de creación de pregunta: 2013
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[26]= new Array();
 choices[26][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[26][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[26][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[26][3] = "Todos son Procesos Principales";
 answers[26] = 2;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 8635. ";
 preguntaids[26] = 8635


//  Id pregunta: 8333 Año de creación de pregunta: 2011
 questions[27]= "28)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[27]= new Array();
 choices[27][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[27][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[27][2] = "a y b son correctas.";
 choices[27][3] = "Ninguna de las anteriores.";
 answers[27] = 0;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 8333. Examen UPM A2 2011";
 preguntaids[27] = 8333


//  Id pregunta: 7911 Año de creación de pregunta: 2011
 questions[28]= "29)  M&eacute;trica v3 establece cuatro tipos de mantenimiento, &iquest;cu&aacute;l de los siguientes NO es uno de &eacute;llos?";
 choices[28]= new Array();
 choices[28][0] = "Mantenimiento preventivo.";
 choices[28][1] = "Mantenimiento perfectivo.";
 choices[28][2] = "Mantenimiento adaptativo.";
 choices[28][3] = "Mantenimiento correctivo.";
 answers[28] = 0;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 7911. Examen TIC A1 2010";
 preguntaids[28] = 7911


//  Id pregunta: 7795 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?";
 choices[29]= new Array();
 choices[29][0] = "Cubre distintos tipos de desarrollo: &laquo;estructurado&raquo; y &laquo;orientado a objetos&raquo;.";
 choices[29][1] = "En su estructura se distinguen tres procesos principales.";
 choices[29][2] = "Se incluyen Interfaces para aspectos de gesti&oacute;n.";
 choices[29][3] = "El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &laquo;an&aacute;lisis&raquo;, &laquo;dise&ntilde;o&raquo;, &laquo;construcci&oacute;n&raquo;, e &laquo;implantaci&oacute;n y aceptaci&oacute;n&raquo; del sistema.";
 answers[29] = 3;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 7795. ";
 preguntaids[29] = 7795


//  Id pregunta: 8218 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Qu&eacute; perfil es el encargado de la tarea de M&eacute;trica v3 &quot;Definici&oacute;n del Esquema de Formaci&oacute;n&quot;?";
 choices[30]= new Array();
 choices[30][0] = "Analista.";
 choices[30][1] = "Consultor.";
 choices[30][2] = "Analista-programador.";
 choices[30][3] = "Programador.";
 answers[30] = 0;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 8218. Examen TIC A2 2010 interna";
 preguntaids[30] = 8218


//  Id pregunta: 8639 Año de creación de pregunta: 2013
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[31]= new Array();
 choices[31][0] = "Prototipado";
 choices[31][1] = "Normalizaci&oacute;n";
 choices[31][2] = "Diagrama de paquetes";
 choices[31][3] = "Casos de uso";
 answers[31] = 0;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 8639. ";
 preguntaids[31] = 8639


//  Id pregunta: 8634 Año de creación de pregunta: 2013
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes es un Proceso Principal de M&eacute;trica 3?";
 choices[32]= new Array();
 choices[32][0] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[32][1] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[32][2] = "Estudio de Viabilidad del Sistema";
 choices[32][3] = "Ninguno";
 answers[32] = 0;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 8634. ";
 preguntaids[32] = 8634


//  Id pregunta: 8636 Año de creación de pregunta: 2013
 questions[33]= "34)  Seg&uacute;n M&eacute;trica 3, &iquest; cu&aacute;ndo se elaboran los manuales de usuario ?";
 choices[33]= new Array();
 choices[33][0] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[33][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[33][2] = "Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[33][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 answers[33] = 0;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 8636. ";
 preguntaids[33] = 8636


//  Id pregunta: 7986 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[34]= new Array();
 choices[34][0] = "El Diccionario de Datos.";
 choices[34][1] = "El Diagrama de Flujo de Datos.";
 choices[34][2] = "Las especificaciones de procesos.";
 choices[34][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[34] = 3;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 7986. Examen TIC A2 2010";
 preguntaids[34] = 7986


//  Id pregunta: 8034 Año de creación de pregunta: 2011
 questions[35]= "36)  Cuando un sistema se debe modificar para que contemple un cambio en las necesidades de los usuarios, se hace referencia al:";
 choices[35]= new Array();
 choices[35][0] = "Mantenimiento Correctivo.";
 choices[35][1] = "Mantenimiento Evolutivo.";
 choices[35][2] = "Mantenimiento Adaptativo.";
 choices[35][3] = "Mantenimiento Perfectivo.";
 answers[35] = 1;
 units[35] = ['91'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 8034. Examen TIC A2 2010";
 preguntaids[35] = 8034


//  Id pregunta: 8371 Año de creación de pregunta: 2011
 questions[36]= "37)  En la tarea &ldquo;Valoraci&oacute;n de los Sistemas de Informaci&oacute;n actuales&rdquo;, encuadrado en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n, participan seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[36]= new Array();
 choices[36][0] = "Consultores y Consultores Inform&aacute;ticos";
 choices[36][1] = "Consultores y Jefes de Proyecto";
 choices[36][2] = "Consultores Inform&aacute;ticos y Usuarios Expertos";
 choices[36][3] = "Analistas y Jefes de Proyecto";
 answers[36] = 0;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 8371. Analista Ayto. Madrid 2010";
 preguntaids[36] = 8371


//  Id pregunta: 8521 Año de creación de pregunta: 2011
 questions[37]= "38)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[37]= new Array();
 choices[37][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[37][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[37][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos";
 choices[37][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[37] = 1;
 units[37] = ['91'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 8521. ";
 preguntaids[37] = 8521


//  Id pregunta: 8897 Año de creación de pregunta: 2013
 questions[38]= "39)  Aquellas pruebas que tienen como objetivo verificar el funcionamiento global del sistema de informaci&oacute;n completo se denominan:";
 choices[38]= new Array();
 choices[38][0] = "Pruebas unitarias.";
 choices[38][1] = "Pruebas de integraci&oacute;n.";
 choices[38][2] = "Pruebas del sistema.";
 choices[38][3] = "Pruebas de implantaci&oacute;n.";
 answers[38] = 2;
 units[38] = ['91'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 8897. Examen AGE TIC A1 2011";
 preguntaids[38] = 8897


//  Id pregunta: 8222 Año de creación de pregunta: 2011
 questions[39]= "40)  Seg&uacute;n M&eacute;trica v3 &iquest;cu&aacute;l de las siguientes NO es un tipo de relaci&oacute;n del diagrama de clases?";
 choices[39]= new Array();
 choices[39][0] = "Inclusi&oacute;n";
 choices[39][1] = "Agregaci&oacute;n";
 choices[39][2] = "Herencia";
 choices[39][3] = "Composici&oacute;n";
 answers[39] = 0;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 8222. Examen TIC A2 2010 interna";
 preguntaids[39] = 8222


//  Id pregunta: 7878 Año de creación de pregunta: 2011
 questions[40]= "41)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[40]= new Array();
 choices[40][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[40][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas y Operaciones.";
 choices[40][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad, Sistemas y Operaciones.";
 choices[40][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[40] = 0;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 7878. Examen TIC A1 2010";
 preguntaids[40] = 7878


//  Id pregunta: 8386 Año de creación de pregunta: 2011
 questions[41]= "42)  Se&ntilde;ale la respuesta correcta seg&uacute;n M&eacute;trica v3:";
 choices[41]= new Array();
 choices[41][0] = "El c&aacute;lculo de accesos es una t&eacute;cnica";
 choices[41][1] = "La normalizaci&oacute;n es una t&eacute;cnica";
 choices[41][2] = "A y B son pr&aacute;cticas";
 choices[41][3] = "A y B son t&eacute;cnicas";
 answers[41] = 1;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 8386. ";
 preguntaids[41] = 8386


//  Id pregunta: 8131 Año de creación de pregunta: 2011
 questions[42]= "43)  Indicar la respuesta correcta respecto al diagrama de flujo de datos:";
 choices[42]= new Array();
 choices[42][0] = "Un proceso de control puede ser el origen de los datos pero nunca el final de los datos.";
 choices[42][1] = "El flujo de di&aacute;logo se representa por una flecha discontinua que indica la direcci&oacute;n de los datos, y que se etiqueta con un nombre representativo.";
 choices[42][2] = "Un flujo de di&aacute;logo es un flujo entre un proceso y un almac&eacute;n que representa una consulta y una actualizaci&oacute;n.";
 choices[42][3] = "Un proceso de control se encarga de coordinar y sincronizar los accesos a los almacenes de datos.";
 answers[42] = 2;
 units[42] = ['91'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 8131. Examen TIC A2 2010 interna";
 preguntaids[42] = 8131


//  Id pregunta: 8130 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[43]= new Array();
 choices[43][0] = "El Diccionario de Datos.";
 choices[43][1] = "El Diagrama de Flujo de Datos.";
 choices[43][2] = "Las especificaciones de procesos.";
 choices[43][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[43] = 3;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 8130. Examen TIC A2 2010 interna";
 preguntaids[43] = 8130


//  Id pregunta: 7981 Año de creación de pregunta: 2011
 questions[44]= "45)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[44]= new Array();
 choices[44][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[44][1] = "Staffing Size.";
 choices[44][2] = "Catalogaci&oacute;n.";
 choices[44][3] = "Diagrama de Gantt.";
 answers[44] = 2;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 7981. Examen TIC A2 2010";
 preguntaids[44] = 7981


//  Id pregunta: 7540 Año de creación de pregunta: 2010
 questions[45]= "46)  Utilizando la Metodolog&iacute;a M&eacute;trica para la elaboraci&oacute;n de un Plan de Sistemas, dentro de qu&eacute; actividad englobar&iacute;a la tarea de &laquo;Dise&ntilde;o de la Jerarqu&iacute;a de Funciones&raquo;:";
 choices[45]= new Array();
 choices[45][0] = "Actividad 5: Revisi&oacute;n de la situaci&oacute;n actual de los Sistemas de Informaci&oacute;n.";
 choices[45][1] = "Actividad 6: Especificaci&oacute;n de los nuevos sistemas.";
 choices[45][2] = "Actividad 4: Arquitectura de la Informaci&oacute;n.";
 choices[45][3] = "Actividad 2: Identificaci&oacute;n de las necesidades de Informaci&oacute;n de las &aacute;reas afectadas.";
 answers[45] = 2;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7540. Map 2005";
 preguntaids[45] = 7540


//  Id pregunta: 8035 Año de creación de pregunta: 2011
 questions[46]= "47)  Para las pruebas de caja transparente, se&ntilde;ale la opci&oacute;n correcta:";
 choices[46]= new Array();
 choices[46][0] = "Aseguran la ausencia absoluta de defectos.";
 choices[46][1] = "Comprueban la funcionalidad de un programa.";
 choices[46][2] = "Se realizan ignorando completamente la estructura interna de un programa.";
 choices[46][3] = "Exigen el conocimiento de la estructura interna del programa.";
 answers[46] = 3;
 units[46] = ['91'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 8035. Examen TIC A2 2010";
 preguntaids[46] = 8035


//  Id pregunta: 7991 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Qu&eacute; pruebas tienen como objetivo comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados?";
 choices[47]= new Array();
 choices[47][0] = "Pruebas unitarias.";
 choices[47][1] = "Pruebas del Sistema.";
 choices[47][2] = "Pruebas de Implantaci&oacute;n.";
 choices[47][3] = "Pruebas de Regresi&oacute;n.";
 answers[47] = 3;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7991. Examen TIC A2 2010";
 preguntaids[47] = 7991


//  Id pregunta: 7631 Año de creación de pregunta: 2010
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &laquo;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&raquo; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[48]= new Array();
 choices[48][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n.";
 choices[48][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n.";
 choices[48][2] = "Acuerdo de Nivel de Servicio.";
 choices[48][3] = "Plan de Mantenimiento.";
 answers[48] = 0;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 7631. Map 2006";
 preguntaids[48] = 7631


//  Id pregunta: 8185 Año de creación de pregunta: 2011
 questions[49]= "50)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Mantenimiento adaptativo";
 choices[49][1] = "Mantenimiento preventivo";
 choices[49][2] = "Mantenimiento correctivo";
 choices[49][3] = "Mantenimiento evolutivo";
 answers[49] = 1;
 units[49] = ['91'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 8185. Examen TIC A2 2010 interna";
 preguntaids[49] = 8185


//  Id pregunta: 7985 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[50]= new Array();
 choices[50][0] = "Diagrama de Clases.";
 choices[50][1] = "Flujograma de Sistemas.";
 choices[50][2] = "Flujograma de Programas.";
 choices[50][3] = "Diagrama de Flujo de Datos.";
 answers[50] = 2;
 units[50] = ['91'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 7985. Examen TIC A2 2010";
 preguntaids[50] = 7985


//  Id pregunta: 8638 Año de creación de pregunta: 2013
 questions[51]= "52)  &iquest;En qu&eacute; proceso se llevan a cabo las pruebas de sistema?";
 choices[51]= new Array();
 choices[51][0] = "ASI";
 choices[51][1] = "DSI";
 choices[51][2] = "CSI";
 choices[51][3] = "IAS";
 answers[51] = 2;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 8638. ";
 preguntaids[51] = 8638


//  Id pregunta: 8361 Año de creación de pregunta: 2011
 questions[52]= "53)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[52]= new Array();
 choices[52][0] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos";
 choices[52][1] = "Proporcionar flexibilidad al modelo";
 choices[52][2] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones";
 choices[52][3] = "Proporcionar independencia del sistema gestor de base de datos";
 answers[52] = 0;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 8361. Analista Ayto. Madrid 2010";
 preguntaids[52] = 8361


//  Id pregunta: 8188 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Qu&eacute; tipos de mantenimiento contempla M&eacute;trica v3 en su proceso MSI?:";
 choices[53]= new Array();
 choices[53][0] = "Correctivo, evolutivo y adaptativo";
 choices[53][1] = "Correctivo, evolutivo, adaptativo y perfectivo";
 choices[53][2] = "Correctivo y evolutivo";
 choices[53][3] = "Correctivo, evolutivo y perfectivo.";
 answers[53] = 2;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 8188. Examen TIC A2 2010 interna";
 preguntaids[53] = 8188


//  Id pregunta: 8033 Año de creación de pregunta: 2011
 questions[54]= "55)  &iquest;En cual de las siguientes pruebas interviene el usuario final?";
 choices[54]= new Array();
 choices[54][0] = "Pruebas de Caja Blanca.";
 choices[54][1] = "Pruebas de Aceptaci&oacute;n.";
 choices[54][2] = "Pruebas de Implantaci&oacute;n.";
 choices[54][3] = "Pruebas de Regresi&oacute;n.";
 answers[54] = 1;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 8033. Examen TIC A2 2010";
 preguntaids[54] = 8033


//  Id pregunta: 8550 Año de creación de pregunta: 2013
 questions[55]= "56)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[55]= new Array();
 choices[55][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[55][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[55][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[55][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[55] = 3;
 units[55] = ['91'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 8550. ";
 preguntaids[55] = 8550


//  Id pregunta: 8202 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica v3?";
 choices[56]= new Array();
 choices[56][0] = "Perfil Jefe de Proyecto.";
 choices[56][1] = "Perfil Consultor.";
 choices[56][2] = "Perfil Analista.";
 choices[56][3] = "Perfil Programador.";
 answers[56] = 0;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 8202. Examen TIC A2 2010 interna";
 preguntaids[56] = 8202


//  Id pregunta: 7516 Año de creación de pregunta: 2010
 questions[57]= "58)  El &laquo;Desarrollo de Sistemas de Informaci&oacute;n&raquo; en la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 lo constituyen:";
 choices[57]= new Array();
 choices[57][0] = "Tres procesos.";
 choices[57][1] = "Cuatro procesos.";
 choices[57][2] = "Cinco procesos.";
 choices[57][3] = "Seis procesos.";
 answers[57] = 2;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 7516. Map 2005";
 preguntaids[57] = 7516


//  Id pregunta: 8219 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en M&eacute;trica v3. en el proceso de Construcci&oacute;n del sistema?";
 choices[58]= new Array();
 choices[58][0] = "Carga de Datos al entorno de operaci&oacute;n.";
 choices[58][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[58][2] = "Establecimiento del Acuerdo de Nivel de Servicio.";
 choices[58][3] = "Elaboraci&oacute;n del modelo de datos.";
 answers[58] = 1;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 8219. Examen TIC A2 2010 interna";
 preguntaids[58] = 8219


//  Id pregunta: 8637 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest; Qu&eacute; afirmaci&oacute;n sobre M&eacute;trica 3 es falsa ?";
 choices[59]= new Array();
 choices[59][0] = "El mantenimiento Adaptativo no se adapta a las nuevas necesidades del usuario";
 choices[59][1] = "La valoraci&oacute;n de los riesgos de la soluci&oacute;n se lleva a cabo en el Estudio de Viabilidad";
 choices[59][2] = "El cat&aacute;logo de requisitos queda inamovible desde el final del An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[59][3] = "La migraci&oacute;n y carga de datos se tiene en cuenta tanto en el An&aacute;lisis como en el Dise&ntilde;o";
 answers[59] = 2;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 8637. ";
 preguntaids[59] = 8637


//  Id pregunta: 7699 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es un proceso de interfaz de M&eacute;trica v3?";
 choices[60]= new Array();
 choices[60][0] = "Aseguramiento de la calidad.";
 choices[60][1] = "Gesti&oacute;n de proyectos.";
 choices[60][2] = "Gesti&oacute;n de la configuraci&oacute;n.";
 choices[60][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[60] = 3;
 units[60] = ['91'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 7699. Map 2007";
 preguntaids[60] = 7699


//  Id pregunta: 7987 Año de creación de pregunta: 2011
 questions[61]= "62)  &iquest;Qu&eacute; se intenta conseguir al aplicar t&eacute;cnicas de desnormalizaci&oacute;n en algunas tablas en una base de datos que fue normalizada previamente?";
 choices[61]= new Array();
 choices[61][0] = "Optimizar el desempe&ntilde;o de la base de datos.";
 choices[61][1] = "Evitar datos redundantes.";
 choices[61][2] = "Proteger la integridad de los datos.";
 choices[61][3] = "Facilitar el uso al usuano final.";
 answers[61] = 0;
 units[61] = ['91'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 7987. Examen TIC A2 2010";
 preguntaids[61] = 7987


//  Id pregunta: 9084 Año de creación de pregunta: 2014
 questions[62]= "63)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[62]= new Array();
 choices[62][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[62][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[62][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[62][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[62] = 3;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 9084. Examen TIC-A1 2013";
 preguntaids[62] = 9084


//  Id pregunta: 8551 Año de creación de pregunta: 2013
 questions[63]= "64)  En relaci&oacute;n a la elaboraci&oacute;n de un Plan de Sistemas de Informaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "El Comit&eacute; de Direcci&oacute;n realiza la programaci&oacute;n, define la administraci&oacute;n, los procedimientos y la organizaci&oacute;n del trabajo.";
 choices[63][1] = "El equipo de proyecto es la instancia que establece las orientaciones del desarrollo con los controles de su realizaci&oacute;n, la validaci&oacute;n de los trabajos efectuados, y la toma de decisiones al final de cada fase del estudio.";
 choices[63][2] = "Es tarea del Comit&eacute; de Direcci&oacute;n asegurarse de la traslaci&oacute;n de la pol&iacute;tica estrat&eacute;gica de la organizaci&oacute;n al plan estrat&eacute;gico de Sistemas de Informaci&oacute;n y las Comunicaciones";
 choices[63][3] = "Todas las anteriores";
 answers[63] = 2;
 units[63] = ['91'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 8551. ";
 preguntaids[63] = 8551


//  Id pregunta: 7640 Año de creación de pregunta: 2010
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes secuencias de actividades NO se corresponde con una actividad del proceso de elaboraci&oacute;n de un Plan de Sistemas seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[64]= new Array();
 choices[64][0] = "Estudio de informaci&oacute;n relevante.";
 choices[64][1] = "Definici&oacute;n de un Plan de Acci&oacute;n.";
 choices[64][2] = "Definici&oacute;n de un Plan de Riesgo.";
 choices[64][3] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 answers[64] = 2;
 units[64] = ['91'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 7640. Map 2006";
 preguntaids[64] = 7640


//  Id pregunta: 7813 Año de creación de pregunta: 2010
 questions[65]= "66)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &laquo;Retorno de la Inversi&oacute;n&raquo;:";
 choices[65]= new Array();
 choices[65][0] = "Beneficio Neto Anual.";
 choices[65][1] = "Inversi&oacute;n Promedio.";
 choices[65][2] = "Coste desarrollo anualizado.";
 choices[65][3] = "Per&iacute;odo de Amortizaci&oacute;n.";
 answers[65] = 3;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 7813. ";
 preguntaids[65] = 7813


//  Id pregunta: 8327 Año de creación de pregunta: 2011
 questions[66]= "67)  &iquest;Cu&aacute;l de estos procesos de M&eacute;trica 3 contiene actividades diferentes dependiendo de si se trata de un desarrollo estructurado u orientado a objetos?";
 choices[66]= new Array();
 choices[66][0] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 choices[66][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[66][2] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[66][3] = "Ninguno de los anteriores";
 answers[66] = 1;
 units[66] = ['91'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 8327. Examen UPM A2 2011";
 preguntaids[66] = 8327


//  Id pregunta: 8031 Año de creación de pregunta: 2011
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes productos resultan del proceso de Construcci&oacute;n del SI seg&uacute;n M&eacute;trica v3?";
 choices[67]= new Array();
 choices[67][0] = "Cat&aacute;logo de Requisitos.";
 choices[67][1] = "Especificaciones de Construcci&oacute;n del Sistema.";
 choices[67][2] = "Modelo de Datos.";
 choices[67][3] = "Manuales de Usuario.";
 answers[67] = 3;
 units[67] = ['91'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 8031. Examen TIC A2 2010";
 preguntaids[67] = 8031


//  Id pregunta: 8129 Año de creación de pregunta: 2011
 questions[68]= "69)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[68]= new Array();
 choices[68][0] = "Diagrama de Clases.";
 choices[68][1] = "Flujograma de Sistemas.";
 choices[68][2] = "Flujograma de Programas.";
 choices[68][3] = "Diagrama de Flujo de Datos.";
 answers[68] = 2;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 8129. Examen TIC A2 2010 interna";
 preguntaids[68] = 8129


//  Id pregunta: 8214 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Seg&uacute;n M&eacute;trica v3 cu&aacute;l de los siguientes participantes estar&iacute;a encuadrado dentro del perfil &quot;Consultor&quot;?";
 choices[69]= new Array();
 choices[69][0] = "T&eacute;cnico de sistemas.";
 choices[69][1] = "Grupo de Aseguramiento da la Calidad.";
 choices[69][2] = "Equipo de Arquitectura.";
 choices[69][3] = "Administrador de Bases de Datos.";
 answers[69] = 0;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 8214. Examen TIC A2 2010 interna";
 preguntaids[69] = 8214


//  Id pregunta: 7621 Año de creación de pregunta: 2010
 questions[70]= "71)  La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &laquo;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&raquo; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[70]= new Array();
 choices[70][0] = "El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos.";
 choices[70][1] = "Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos.";
 choices[70][2] = "Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos.";
 choices[70][3] = "La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos.";
 answers[70] = 3;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 7621. Map 2006";
 preguntaids[70] = 7621


//  Id pregunta: 8221 Año de creación de pregunta: 2011
 questions[71]= "72)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de las siguientes es una prueba perteneciente a las pruebas del sistema?";
 choices[71]= new Array();
 choices[71][0] = "Pruebas globales.";
 choices[71][1] = "Pruebas Integradas.";
 choices[71][2] = "Pruebas funcionales.";
 choices[71][3] = "Pruebas unitarias.";
 answers[71] = 2;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 8221. Examen TIC A2 2010 interna";
 preguntaids[71] = 8221


//  Id pregunta: 7670 Año de creación de pregunta: 2010
 questions[72]= "73)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &laquo;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&raquo;?";
 choices[72]= new Array();
 choices[72][0] = "Desarrollo de sistemas de informaci&oacute;n.";
 choices[72][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[72][2] = "An&aacute;lisis de sistema de informaci&oacute;n.";
 choices[72][3] = "Mantenimiento de sistemas de informaci&oacute;n.";
 answers[72] = 0;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 7670. Map 2007";
 preguntaids[72] = 7670


//  Id pregunta: 8522 Año de creación de pregunta: 2011
 questions[73]= "74)  C&uacute;al no es un interfaz en M&eacute;trica v3";
 choices[73]= new Array();
 choices[73][0] = "Gesti&oacute;n de la Configuraci&oacute;n";
 choices[73][1] = "Seguridad";
 choices[73][2] = "Gesti&oacute;n del Cambio";
 choices[73][3] = "Aseguramiento de la Calidad";
 answers[73] = 2;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 8522. ";
 preguntaids[73] = 8522


//  Id pregunta: 7486 Año de creación de pregunta: 2010
 questions[74]= "75)  Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a M&Eacute;TRICA v. 3:";
 choices[74]= new Array();
 choices[74][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[74][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[74][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[74][3] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 answers[74] = 0;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7486. Map 2005";
 preguntaids[74] = 7486


