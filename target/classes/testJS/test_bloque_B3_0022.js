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
//  Id pregunta: 7762 Año de creación de pregunta: 2010
 questions[0]= "1)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[0]= new Array();
 choices[0][0] = "Strategy.";
 choices[0][1] = "State.";
 choices[0][2] = "Observer.";
 choices[0][3] = "Command.";
 answers[0] = 2;
 units[0] = ['89'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 7762. ";
 preguntaids[0] = 7762


//  Id pregunta: 7612 Año de creación de pregunta: 2010
 questions[1]= "2)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &laquo;Gesti&oacute;n de la Tecnolog&iacute;a&raquo; pertenece al criterio:";
 choices[1]= new Array();
 choices[1][0] = "Alianzas y recursos.";
 choices[1][1] = "Pol&iacute;tica y estrategia.";
 choices[1][2] = "Procesos.";
 choices[1][3] = "Resultados clave.";
 answers[1] = 0;
 units[1] = ['98'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7612. Map 2006";
 preguntaids[1] = 7612


//  Id pregunta: 7669 Año de creación de pregunta: 2010
 questions[2]= "3)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[2]= new Array();
 choices[2][0] = "Polimorfismo.";
 choices[2][1] = "Herencia.";
 choices[2][2] = "Reusabilidad.";
 choices[2][3] = "Encapsulaci&oacute;n.";
 answers[2] = 3;
 units[2] = ['85'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7669. Map 2007";
 preguntaids[2] = 7669


//  Id pregunta: 7976 Año de creación de pregunta: 2011
 questions[3]= "4)  Si hablamos del control automatizado de documentos electr&oacute;nicos a trav&eacute;s de su ciclo de vida completo en una organizaci&oacute;n, desde su creaci&oacute;n inidal hasta su archivado final, estamos hablando de:";
 choices[3]= new Array();
 choices[3][0] = "Desarrollo de software";
 choices[3][1] = "Gesti&oacute;n documental";
 choices[3][2] = "Sistemas gestores de base de datos";
 choices[3][3] = "Sistemas de soporte a la decisi&oacute;n";
 answers[3] = 1;
 units[3] = ['99'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 7976. Examen TIC A2 2010";
 preguntaids[3] = 7976


//  Id pregunta: 7689 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Entradas.";
 choices[4][1] = "Salidas.";
 choices[4][2] = "Consultas.";
 choices[4][3] = "Usuarios.";
 answers[4] = 3;
 units[4] = ['94'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 7689. Map 2007";
 preguntaids[4] = 7689


//  Id pregunta: 7983 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[5]= new Array();
 choices[5][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[5][1] = "PERT.";
 choices[5][2] = "CPM.";
 choices[5][3] = "El histograma de recursos.";
 answers[5] = 0;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7983. Examen TIC A2 2010";
 preguntaids[5] = 7983


//  Id pregunta: 7876 Año de creación de pregunta: 2011
 questions[6]= "7)  Seg&uacute;n Pressman, una revisi&oacute;n t&eacute;cnica formal es:";
 choices[6]= new Array();
 choices[6][0] = "Una reuni&oacute;n.";
 choices[6][1] = "Un producto del desarrollo.";
 choices[6][2] = "Un documento.";
 choices[6][3] = "La aceptaci&oacute;n del sistema.";
 answers[6] = 0;
 units[6] = ['84'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7876. Examen TIC A1 2010";
 preguntaids[6] = 7876


//  Id pregunta: 7858 Año de creación de pregunta: 2011
 questions[7]= "8)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[7]= new Array();
 choices[7][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[7][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[7][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[7][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[7] = 2;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 7858. Examen TIC A1 2010";
 preguntaids[7] = 7858


//  Id pregunta: 7753 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Qu&eacute; propiedad no es inherente a la orientaci&oacute;n a objetos?";
 choices[8]= new Array();
 choices[8][0] = "Polimorfismo.";
 choices[8][1] = "Volatilidad.";
 choices[8][2] = "Herencia.";
 choices[8][3] = "Encapsulaci&oacute;n.";
 answers[8] = 1;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7753. ";
 preguntaids[8] = 7753


//  Id pregunta: 7978 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil de desarrollo?";
 choices[9]= new Array();
 choices[9][0] = "Programaci&oacute;n Extrema (XP).";
 choices[9][1] = "SCRUM.";
 choices[9][2] = "RDS.";
 choices[9][3] = "Feature-Driven Development (FDD).";
 answers[9] = 2;
 units[9] = ['84'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7978. Examen TIC A2 2010";
 preguntaids[9] = 7978


//  Id pregunta: 7649 Año de creación de pregunta: 2010
 questions[10]= "11)  Seg&uacute;n el Modelo de Calidad de McCall, el factor &laquo;Correcci&oacute;n&raquo; debe ser tenido en cuenta cuando el producto software se encuentra en la fase de:";
 choices[10]= new Array();
 choices[10][0] = "Construcci&oacute;n.";
 choices[10][1] = "Explotaci&oacute;n.";
 choices[10][2] = "Revisi&oacute;n.";
 choices[10][3] = "Transici&oacute;n.";
 answers[10] = 1;
 units[10] = ['93'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 7649. Map 2006";
 preguntaids[10] = 7649


//  Id pregunta: 7744 Año de creación de pregunta: 2010
 questions[11]= "12)  Seg&uacute;n M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes productos NO se obtienen del proceso de an&aacute;lisis de sistemas de informaci&oacute;n (ASI) orientado a objetos?";
 choices[11]= new Array();
 choices[11][0] = "Dise&ntilde;o de clases.";
 choices[11][1] = "Descripci&oacute;n de interfaces entre subsistemas.";
 choices[11][2] = "Modelo de clases de an&aacute;lisis.";
 choices[11][3] = "An&aacute;lisis de la realizaci&oacute;n de los casos de uso.";
 answers[11] = 0;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 7744. ";
 preguntaids[11] = 7744


//  Id pregunta: 7682 Año de creación de pregunta: 2010
 questions[12]= "13)  Seg&uacute;n Cobit, en un proceso de auditor&iacute;a un objetivo de control en TI se define como:";
 choices[12]= new Array();
 choices[12][0] = "Los soportes inform&aacute;ticos y sus sistemas de backup.";
 choices[12][1] = "El resultado deseado implementando procedimientos de control en una actividad de TI particular.";
 choices[12][2] = "La compatibilidad del software.";
 choices[12][3] = "El tiempo medio entre fallos de los sistemas de TI.";
 answers[12] = 1;
 units[12] = ['101'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 7682. Map 2007";
 preguntaids[12] = 7682


//  Id pregunta: 7772 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[13]= new Array();
 choices[13][0] = "BPML.";
 choices[13][1] = "BPEL.";
 choices[13][2] = "BPMN.";
 choices[13][3] = "XPDL.";
 answers[13] = 3;
 units[13] = ['86'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 7772. ";
 preguntaids[13] = 7772


//  Id pregunta: 7981 Año de creación de pregunta: 2011
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[14]= new Array();
 choices[14][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[14][1] = "Staffing Size.";
 choices[14][2] = "Catalogaci&oacute;n.";
 choices[14][3] = "Diagrama de Gantt.";
 answers[14] = 2;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 7981. Examen TIC A2 2010";
 preguntaids[14] = 7981


//  Id pregunta: 7606 Año de creación de pregunta: 2010
 questions[15]= "16)  El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de las TIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &laquo;Gesti&oacute;n de la Calidad&raquo; se encuentra definido en el dominio de:";
 choices[15]= new Array();
 choices[15][0] = "Alinear, Planificar y Organizar";
 choices[15][1] = "Construir, Adquirir e Implementar";
 choices[15][2] = "Entregar, dar Servicio y Soporte.";
 choices[15][3] = "Supervisar, Evaluar y Valorar";
 answers[15] = 0;
 units[15] = ['101'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7606. Similar a Map 2006";
 preguntaids[15] = 7606


//  Id pregunta: 7699 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un proceso de interfaz de M&eacute;trica v3?";
 choices[16]= new Array();
 choices[16][0] = "Aseguramiento de la calidad.";
 choices[16][1] = "Gesti&oacute;n de proyectos.";
 choices[16][2] = "Gesti&oacute;n de la configuraci&oacute;n.";
 choices[16][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[16] = 3;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 7699. Map 2007";
 preguntaids[16] = 7699


//  Id pregunta: 7767 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA , en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[17]= new Array();
 choices[17][0] = "Se utiliza, en general, para la autoevaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora.";
 choices[17][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea.";
 choices[17][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados.";
 choices[17][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo.";
 answers[17] = 1;
 units[17] = ['98'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 7767. ";
 preguntaids[17] = 7767


//  Id pregunta: 7977 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Con qu&eacute; nombre se conoce a las herramientas CASE adaptables que permiten la definici&oacute;n de nuestra propia t&eacute;cnica de modelado,pudiendo definir nuestros propios elementos y s&iacute;mbolos de las notaciones a utilizar?";
 choices[18]= new Array();
 choices[18][0] = "Upper CASE (U-CASE)";
 choices[18][1] = "MetaCASE";
 choices[18][2] = "CAST (Computer-Aided Software Testing)";
 choices[18][3] = "IPSE (Integrated Programming Support Environment)";
 answers[18] = 1;
 units[18] = ['97'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 7977. Examen TIC A2 2010";
 preguntaids[18] = 7977


//  Id pregunta: 7765 Año de creación de pregunta: 2010
 questions[19]= "20)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &laquo;Manifiesto &Aacute;gil&raquo; (Manifiesto por el Desarrollo &Aacute;gil de Software)?";
 choices[19]= new Array();
 choices[19][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas.";
 choices[19][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los per&iacute;odos m&aacute;s cortos posibles.";
 choices[19][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se autoorganizan.";
 choices[19][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara.";
 answers[19] = 0;
 units[19] = ['84'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 7765. ";
 preguntaids[19] = 7765


//  Id pregunta: 7813 Año de creación de pregunta: 2010
 questions[20]= "21)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &laquo;Retorno de la Inversi&oacute;n&raquo;:";
 choices[20]= new Array();
 choices[20][0] = "Beneficio Neto Anual.";
 choices[20][1] = "Inversi&oacute;n Promedio.";
 choices[20][2] = "Coste desarrollo anualizado.";
 choices[20][3] = "Per&iacute;odo de Amortizaci&oacute;n.";
 answers[20] = 3;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 7813. ";
 preguntaids[20] = 7813


//  Id pregunta: 7745 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?";
 choices[21]= new Array();
 choices[21][0] = "Entidad externa.";
 choices[21][1] = "Proceso.";
 choices[21][2] = "Funci&oacute;n.";
 choices[21][3] = "Almac&eacute;n de datos.";
 answers[21] = 2;
 units[21] = ['89'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 7745. ";
 preguntaids[21] = 7745


//  Id pregunta: 7864 Año de creación de pregunta: 2011
 questions[22]= "23)  Las certificaciones ITIL:";
 choices[22]= new Array();
 choices[22][0] = "Se pueden obtener tanto por personas como por organizaciones.";
 choices[22][1] = "S&oacute;lo se pueden obtener por organizaciones y no por personas.";
 choices[22][2] = "S&oacute;lo se pueden obtener por personas y no por organizaciones.";
 choices[22][3] = "No existen certificaciones ITIL.";
 answers[22] = 2;
 units[22] = ['101'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 7864. Examen TIC A1 2010";
 preguntaids[22] = 7864


//  Id pregunta: 7979 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[23]= new Array();
 choices[23][0] = "Perfil Jefe de Proyecto.";
 choices[23][1] = "Perfil Consultor.";
 choices[23][2] = "Perfil Analista.";
 choices[23][3] = "Perfil Programador.";
 answers[23] = 0;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 7979. Examen TIC A2 2010";
 preguntaids[23] = 7979


//  Id pregunta: 7848 Año de creación de pregunta: 2011
 questions[24]= "25)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[24]= new Array();
 choices[24][0] = "YAWL.";
 choices[24][1] = "ETL.";
 choices[24][2] = "XPDL.";
 choices[24][3] = "BPEL.";
 answers[24] = 1;
 units[24] = ['86'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 7848. Examen TIC A1 2010";
 preguntaids[24] = 7848


//  Id pregunta: 7752 Año de creación de pregunta: 2010
 questions[25]= "26)  En el modelo COCOMO, la estimaci&oacute;n del esfuerzo anual b&aacute;sico para el mantenimiento de los sistemas de informaci&oacute;n, (MM)am, conocido el esfuerzo estimado de desarrollo, (MM)d, es:";
 choices[25]= new Array();
 choices[25][0] = "(MM)am = 1.8 (DSI) (MM)d.";
 choices[25][1] = "(MM)am = 2.0 (ADF) (MM)d.";
 choices[25][2] = "(MM)am = 3.2 (FSP) (MM)d.";
 choices[25][3] = "(MM)am = 1.0 (ACT) (MM)d.";
 answers[25] = 3;
 units[25] = ['94'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7752. ";
 preguntaids[25] = 7752


//  Id pregunta: 7982 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes tareas NO se engloba, en M&eacute;trica v3, en la actividad de Planificaci&oacute;n de la Interfaz de Gesti&oacute;n de Proyectos?";
 choices[26]= new Array();
 choices[26][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[26][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[26][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[26][3] = "Planificaci&oacute;n Detallada de las pruebas del Sistema.";
 answers[26] = 3;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 7982. Examen TIC A2 2010";
 preguntaids[26] = 7982


//  Id pregunta: 7856 Año de creación de pregunta: 2011
 questions[27]= "28)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[27]= new Array();
 choices[27][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[27][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[27][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[27][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[27] = 2;
 units[27] = ['86'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 7856. Examen TIC A1 2010";
 preguntaids[27] = 7856


//  Id pregunta: 7598 Año de creación de pregunta: 2010
 questions[28]= "29)  Seg&uacute;n la norma espa&ntilde;ola UNE 66-904, que recoge los costes totales de calidad, el &laquo;coste resultante de un bien o servicio que no cumple los requisitos de calidad, y cuyo fallo se pone de manifiesto antes de su entrega&raquo;, es un:";
 choices[28]= new Array();
 choices[28][0] = "Costes de prevenci&oacute;n";
 choices[28][1] = "Coste de fallos internos";
 choices[28][2] = "Coste de evaluaci&oacute;n";
 choices[28][3] = "Coste de fallos externos";
 answers[28] = 2;
 units[28] = ['93'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 7598. Map 2006";
 preguntaids[28] = 7598


//  Id pregunta: 7850 Año de creación de pregunta: 2011
 questions[29]= "30)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[29][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[29][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[29][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[29] = 1;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 7850. Examen TIC A1 2010";
 preguntaids[29] = 7850


//  Id pregunta: 7641 Año de creación de pregunta: 2010
 questions[30]= "31)  En relaci&oacute;n a las m&eacute;tricas y evaluaci&oacute;n de la Calidad del software, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[30]= new Array();
 choices[30][0] = "La t&eacute;cnica de Halstead es una m&eacute;trica de la fiabilidad del software.";
 choices[30][1] = "Las m&eacute;tricas de complejidad eval&uacute;an la facilidad de mantenimiento del software.";
 choices[30][2] = "El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de productividad del software.";
 choices[30][3] = "COCOMO (Constructive Cost Model) es un modelo de estimaci&oacute;n algor&iacute;tmico.";
 answers[30] = 0;
 units[30] = ['93'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7641. Map 2006";
 preguntaids[30] = 7641


//  Id pregunta: 7726 Año de creación de pregunta: 2010
 questions[31]= "32)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[31]= new Array();
 choices[31][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n.";
 choices[31][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n.";
 choices[31][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realiza en tiempo de ejecuci&oacute;n.";
 choices[31][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realiza en tiempo de compilaci&oacute;n.";
 answers[31] = 2;
 units[31] = ['85'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 7726. Map 2007";
 preguntaids[31] = 7726


//  Id pregunta: 7857 Año de creación de pregunta: 2011
 questions[32]= "33)  El manifiesto por un desarrollo de software &aacute;gil (Manifesto for Agile Software Development) da m&aacute;s valor a:";
 choices[32]= new Array();
 choices[32][0] = "Los individuos y sus interacciones que a los procesos y herramientas.";
 choices[32][1] = "Una documentaci&oacute;n completa que a software que funcione.";
 choices[32][2] = "La negociaci&oacute;n contractual que a la colaboraci&oacute;n con los usuarios.";
 choices[32][3] = "Seguir una planificaci&oacute;n que a adaptarse al cambio.";
 answers[32] = 0;
 units[32] = ['84'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 7857. Examen TIC A1 2010";
 preguntaids[32] = 7857


//  Id pregunta: 7621 Año de creación de pregunta: 2010
 questions[33]= "34)  La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &laquo;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&raquo; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[33]= new Array();
 choices[33][0] = "El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos.";
 choices[33][1] = "Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos.";
 choices[33][2] = "Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos.";
 choices[33][3] = "La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos.";
 answers[33] = 3;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 7621. Map 2006";
 preguntaids[33] = 7621


//  Id pregunta: 7872 Año de creación de pregunta: 2011
 questions[34]= "35)  En ITIL v.3, &iquest;cu&aacute;l de los siguientes procesos y actividades NO corresponde a la estrategia de servicios?:";
 choices[34]= new Array();
 choices[34][0] = "Gesti&oacute;n financiera.";
 choices[34][1] = "Gesti&oacute;n del portfolio de servicios.";
 choices[34][2] = "Gesti&oacute;n de la demanda.";
 choices[34][3] = "Gesti&oacute;n del cat&aacute;logo de servicios.";
 answers[34] = 3;
 units[34] = ['101'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 7872. Examen TIC A1 2010";
 preguntaids[34] = 7872


//  Id pregunta: 7657 Año de creación de pregunta: 2010
 questions[35]= "36)  Los casos de uso son una t&eacute;cnica eficaz para la determinaci&oacute;n de necesidades. &Eacute;stos fueron creados por:";
 choices[35]= new Array();
 choices[35][0] = "Warnier-Orr.";
 choices[35][1] = "Rumbaugh.";
 choices[35][2] = "Jacobson.";
 choices[35][3] = "Booch.";
 answers[35] = 2;
 units[35] = ['84'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 7657. Map 2006";
 preguntaids[35] = 7657


//  Id pregunta: 7795 Año de creación de pregunta: 2010
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?";
 choices[36]= new Array();
 choices[36][0] = "Cubre distintos tipos de desarrollo: &laquo;estructurado&raquo; y &laquo;orientado a objetos&raquo;.";
 choices[36][1] = "En su estructura se distinguen tres procesos principales.";
 choices[36][2] = "Se incluyen Interfaces para aspectos de gesti&oacute;n.";
 choices[36][3] = "El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &laquo;an&aacute;lisis&raquo;, &laquo;dise&ntilde;o&raquo;, &laquo;construcci&oacute;n&raquo;, e &laquo;implantaci&oacute;n y aceptaci&oacute;n&raquo; del sistema.";
 answers[36] = 3;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 7795. ";
 preguntaids[36] = 7795


//  Id pregunta: 7868 Año de creación de pregunta: 2011
 questions[37]= "38)  seg&uacute;n el CMMI v1.2 (Capability Maturity Model Integration, en espa&ntilde;ol Modelo Integrado de Capacidad y Madurez), una organizaci&oacute;n en la que en la que los procesos est&aacute;n definidos y son gestionados cuantitativamente, y en la que se establecen m&eacute;tricas de calidad para la gesti&oacute;n y rendimiento de dichos procesos, se encuentra en el nivel de capacidad:";
 choices[37]= new Array();
 choices[37][0] = "Nivel 1.";
 choices[37][1] = "Nivel 2.";
 choices[37][2] = "Nivel 3.";
 choices[37][3] = "Nivel 4.";
 answers[37] = 3;
 units[37] = ['92'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 7868. Examen TIC A1 2010";
 preguntaids[37] = 7868


//  Id pregunta: 7611 Año de creación de pregunta: 2010
 questions[38]= "39)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[38]= new Array();
 choices[38][0] = "Acoplamiento de control.";
 choices[38][1] = "Acoplamiento por estampado.";
 choices[38][2] = "Acoplamiento por contenido.";
 choices[38][3] = "Acoplamiento externo.";
 answers[38] = 2;
 units[38] = ['85'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 7611. Map 2006";
 preguntaids[38] = 7611


//  Id pregunta: 7911 Año de creación de pregunta: 2011
 questions[39]= "40)  M&eacute;trica v3 establece cuatro tipos de mantenimiento, &iquest;cu&aacute;l de los siguientes NO es uno de &eacute;llos?";
 choices[39]= new Array();
 choices[39][0] = "Mantenimiento preventivo.";
 choices[39][1] = "Mantenimiento perfectivo.";
 choices[39][2] = "Mantenimiento adaptativo.";
 choices[39][3] = "Mantenimiento correctivo.";
 answers[39] = 0;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7911. Examen TIC A1 2010";
 preguntaids[39] = 7911


//  Id pregunta: 7784 Año de creación de pregunta: 2010
 questions[40]= "41)  Con respecto a ITIL, el proceso &laquo;Configuration Management&raquo; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en qu&eacute; fase de las citadas seguidamente est&aacute; incluido?";
 choices[40]= new Array();
 choices[40][0] = "Dise&ntilde;o.";
 choices[40][1] = "Operaci&oacute;n.";
 choices[40][2] = "Transici&oacute;n.";
 choices[40][3] = "Mejora continua.";
 answers[40] = 2;
 units[40] = ['101'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 7784. ";
 preguntaids[40] = 7784


//  Id pregunta: 7620 Año de creación de pregunta: 2010
 questions[41]= "42)  El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neas de c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes 4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en el c&oacute;digo C el ratio es 128 LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[41]= new Array();
 choices[41][0] = "148";
 choices[41][1] = "250";
 choices[41][2] = "460";
 choices[41][3] = "210";
 answers[41] = 2;
 units[41] = ['94'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 7620. Map 2006";
 preguntaids[41] = 7620


//  Id pregunta: 7891 Año de creación de pregunta: 2011
 questions[42]= "43)  El est&aacute;ndar internacional que m&aacute;s se asemeja a las gu&iacute;as de buenas pr&aacute;cticas ITIL es el:";
 choices[42]= new Array();
 choices[42][0] = "IS0 9000.";
 choices[42][1] = "ISO 20000.";
 choices[42][2] = "ISO 27001.";
 choices[42][3] = "ISO 27000.";
 answers[42] = 1;
 units[42] = ['101'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 7891. Examen TIC A1 2010";
 preguntaids[42] = 7891


//  Id pregunta: 7630 Año de creación de pregunta: 2010
 questions[43]= "44)  El modelo ITIL (Information Technology Infrastructure Library) se utiliza para identificar y administrar los servicios de tecnolog&iacute;as de la informaci&oacute;n que presta una organizaci&oacute;n. &iquest;Cu&aacute;l de los siguientes NO forma parte del conjunto de procesos y funciones identificados por ITIL?";
 choices[43]= new Array();
 choices[43][0] = "Gesti&oacute;n de incidencias.";
 choices[43][1] = "Gesti&oacute;n de la seguridad TI";
 choices[43][2] = "Gesti&oacute;n de aplicaciones.";
 choices[43][3] = "Desarrollo de aplicaciones.";
 answers[43] = 3;
 units[43] = ['101'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 7630. Similar a Map 2006";
 preguntaids[43] = 7630


//  Id pregunta: 7631 Año de creación de pregunta: 2010
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &laquo;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&raquo; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[44]= new Array();
 choices[44][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n.";
 choices[44][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n.";
 choices[44][2] = "Acuerdo de Nivel de Servicio.";
 choices[44][3] = "Plan de Mantenimiento.";
 answers[44] = 0;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 7631. Map 2006";
 preguntaids[44] = 7631


//  Id pregunta: 7601 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Qu&eacute; elementos de los siguientes pueden aparecer en un diagrama de Casos de Uso con la notaci&oacute;n de UML (Unified Modeling Language)?";
 choices[45]= new Array();
 choices[45][0] = "Objetos, casos de uso y actividades.";
 choices[45][1] = "Actores, objetos y relaciones.";
 choices[45][2] = "Casos de uso, actores y relaciones.";
 choices[45][3] = "Actores, casos de uso y actividades.";
 answers[45] = 2;
 units[45] = ['84'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7601. Map 2006";
 preguntaids[45] = 7601


//  Id pregunta: 7980 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;Qu&eacute; t&eacute;cnica es utilizada para identificar las dependencias en un proyecto?";
 choices[46]= new Array();
 choices[46][0] = "Los diagramas de Gantt.";
 choices[46][1] = "Program Evaluation &amp; Review Technique.";
 choices[46][2] = "Estructura de Descomposici&oacute;n de Trabajo (WBS).";
 choices[46][3] = "Diagrama de Extrapolaci&oacute;n.";
 answers[46] = 1;
 units[46] = ['91'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 7980. Examen TIC A2 2010";
 preguntaids[46] = 7980


//  Id pregunta: 7756 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[47]= new Array();
 choices[47][0] = "Vista de Componentes.";
 choices[47][1] = "Vista de Despliegue.";
 choices[47][2] = "Vista de Casos de Uso.";
 choices[47][3] = "Vista de Flujo de Datos.";
 answers[47] = 3;
 units[47] = ['88'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7756. ";
 preguntaids[47] = 7756


//  Id pregunta: 7904 Año de creación de pregunta: 2011
 questions[48]= "49)  En el desarrollo de software &aacute;gil (Agile) se usan los siguientes niveles de planificaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Planificaci&oacute;n de entregas, planificaci&oacute;n de iteraciones o sprints y planificaci&oacute;n diaria.";
 choices[48][1] = "Planificaci&oacute;n estrat&eacute;gica y planifiaci&oacute;n semanal.";
 choices[48][2] = "Planificaci&oacute;n de iteraciones o sprints, planificaci&oacute;n de hitos de cada iteraci&oacute;n o sprint y planificaci&oacute;n semanal.";
 choices[48][3] = "Planificaci&oacute;n estrat&eacute;gica, planificaci&oacute;n de recursos y planificaci&oacute;n de entregas.";
 answers[48] = 0;
 units[48] = ['84'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 7904. Examen TIC A1 2010";
 preguntaids[48] = 7904


//  Id pregunta: 7735 Año de creación de pregunta: 2010
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un modelo de ciclo de vida del software:";
 choices[49]= new Array();
 choices[49][0] = "Cascada.";
 choices[49][1] = "Espiral.";
 choices[49][2] = "Prototipado.";
 choices[49][3] = "Escalera.";
 answers[49] = 3;
 units[49] = ['82'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 7735. ";
 preguntaids[49] = 7735


//  Id pregunta: 7640 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes secuencias de actividades NO se corresponde con una actividad del proceso de elaboraci&oacute;n de un Plan de Sistemas seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[50]= new Array();
 choices[50][0] = "Estudio de informaci&oacute;n relevante.";
 choices[50][1] = "Definici&oacute;n de un Plan de Acci&oacute;n.";
 choices[50][2] = "Definici&oacute;n de un Plan de Riesgo.";
 choices[50][3] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 answers[50] = 2;
 units[50] = ['91'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 7640. Map 2006";
 preguntaids[50] = 7640


//  Id pregunta: 7593 Año de creación de pregunta: 2010
 questions[51]= "52)  De acuerdo al apartado quinto de la Resoluci&oacute;n de 6 de febrero de 2006, de la Secretar&iacute;a General para la Administraci&oacute;n P&uacute;blica, por la que se aprueban directrices para el desarrollo de los programas del marco general para la mejora de la calidad, &iquest;cu&aacute;l de los siguientes es un modelo de gesti&oacute;n de calidad reconocido en la adaptaci&oacute;n realizada por el Ministerio de Administraciones P&uacute;blicas?";
 choices[51]= new Array();
 choices[51][0] = "ISO 9004:2000 de Calidad Estructural.";
 choices[51][1] = "UNE 7128-32 para la Gesti&oacute;n Continua de la Calidad.";
 choices[51][2] = "EFQM (European Foundation for Quality Management) de Excelencia.";
 choices[51][3] = "DEMING de Calidad Total.";
 answers[51] = 2;
 units[51] = ['98'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 7593. Map 2006";
 preguntaids[51] = 7593


//  Id pregunta: 7717 Año de creación de pregunta: 2010
 questions[52]= "53)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta en UML:";
 choices[52]= new Array();
 choices[52][0] = "El diagrama de secuencia es una t&eacute;cnica que muestra la configuraci&oacute;n de los elementos de procesamiento o nodos del sistema y los componentes software, procesos y objetos que se ejecutan sobre ellos.";
 choices[52][1] = "Un diagrama de componentes muestra la interacci&oacute;n (conjunto de mensajes que se intercambian entre los objetos) ordenada en una secuencia de tiempos.";
 choices[52][2] = "Un diagrama de secuencia muestra un grafo de componentes software conectados por relaciones de dependencia.";
 choices[52][3] = "Un diagrama de comunicaci&oacute;n muestra una interacci&oacute;n organizada sobre los objetos, sus enlaces y sus mensajes.";
 answers[52] = 3;
 units[52] = ['86'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 7717. Similar a Map 2007";
 preguntaids[52] = 7717


//  Id pregunta: 7610 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes es una m&eacute;trica de productividad en la generaci&oacute;n de software seg&uacute;n Pressman?";
 choices[53]= new Array();
 choices[53][0] = "N&uacute;meros de defectos por miles de l&iacute;neas de c&oacute;digo.";
 choices[53][1] = "Tiempo medio de cambio.";
 choices[53][2] = "Puntos de funci&oacute;n.";
 choices[53][3] = "N&uacute;mero de p&eacute;rdidas de integridad.";
 answers[53] = 2;
 units[53] = ['93'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 7610. Map 2006";
 preguntaids[53] = 7610


//  Id pregunta: 7671 Año de creación de pregunta: 2010
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios incluidos en el Manifiesto de Desarrollo &Aacute;gil de Software (&laquo;Manifesto for Agile Software Development&raquo;)?";
 choices[54]= new Array();
 choices[54][0] = "Aceptamos requisitos cambiantes solo en las primeras etapas del desarrollo.";
 choices[54][1] = "Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[54][2] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los per&iacute;odos m&aacute;s cortos posibles.";
 choices[54][3] = "Los responsables de negocio y los desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.";
 answers[54] = 0;
 units[54] = ['84'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 7671. Map 2007";
 preguntaids[54] = 7671


//  Id pregunta: 7652 Año de creación de pregunta: 2010
 questions[55]= "56)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[55]= new Array();
 choices[55][0] = "Ingenier&iacute;a Inversa de procesos.";
 choices[55][1] = "Reestructuraci&oacute;n del software.";
 choices[55][2] = "Ingenier&iacute;a de la Integraci&oacute;n de m&oacute;dulos.";
 choices[55][3] = "Ingenier&iacute;a Avanzada.";
 answers[55] = 1;
 units[55] = ['87'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 7652. Map 2006";
 preguntaids[55] = 7652


//  Id pregunta: 7878 Año de creación de pregunta: 2011
 questions[56]= "57)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[56]= new Array();
 choices[56][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[56][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas y Operaciones.";
 choices[56][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad, Sistemas y Operaciones.";
 choices[56][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[56] = 0;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 7878. Examen TIC A1 2010";
 preguntaids[56] = 7878


//  Id pregunta: 7658 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes par&aacute;metros NO forma parte de la ecuaci&oacute;n del software de Putnam para la estimaci&oacute;n del esfuerzo de un proyecto software?";
 choices[57]= new Array();
 choices[57][0] = "Casos de uso.";
 choices[57][1] = "L&iacute;neas de c&oacute;digo.";
 choices[57][2] = "Duraci&oacute;n del proyecto.";
 choices[57][3] = "Par&aacute;metro de productividad.";
 answers[57] = 0;
 units[57] = ['94'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 7658. Map 2006";
 preguntaids[57] = 7658


//  Id pregunta: 7592 Año de creación de pregunta: 2010
 questions[58]= "59)  Dentro de la orientaci&oacute;n a objetos, &iquest;qu&eacute; t&eacute;rmino expresa que los datos de un objeto s&oacute;lo pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos?";
 choices[58]= new Array();
 choices[58][0] = "Reusabilidad.";
 choices[58][1] = "Encapsulaci&oacute;n.";
 choices[58][2] = "Persistencia.";
 choices[58][3] = "Herencia.";
 answers[58] = 1;
 units[58] = ['85'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 7592. Map 2006";
 preguntaids[58] = 7592


//  Id pregunta: 7679 Año de creación de pregunta: 2010
 questions[59]= "60)  En el proceso RUP (&laquo;Rational Unified Process&raquo;):";
 choices[59]= new Array();
 choices[59][0] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de actividades, productos intermedios, perfiles de trabajo o roles y flujos de trabajo.";
 choices[59][1] = "La dimensi&oacute;n est&aacute;tica del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos.";
 choices[59][2] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos.";
 choices[59][3] = "En la dimensi&oacute;n est&aacute;tica, cada ciclo se compone de cuatro fases secuenciales (comienzo, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n).";
 answers[59] = 2;
 units[59] = ['84'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7679. Map 2007";
 preguntaids[59] = 7679


//  Id pregunta: 7780 Año de creación de pregunta: 2010
 questions[60]= "61)  Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia:";
 choices[60]= new Array();
 choices[60][0] = "Alianzas y recursos.";
 choices[60][1] = "Liderazgo.";
 choices[60][2] = "Resultados en la sociedad.";
 choices[60][3] = "Viabilidad econ&oacute;mica.";
 answers[60] = 3;
 units[60] = ['98'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 7780. ";
 preguntaids[60] = 7780


//  Id pregunta: 7796 Año de creación de pregunta: 2010
 questions[61]= "62)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[61]= new Array();
 choices[61][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n.";
 choices[61][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n.";
 choices[61][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n.";
 choices[61][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n.";
 answers[61] = 1;
 units[61] = ['101'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 7796. ";
 preguntaids[61] = 7796


//  Id pregunta: 7861 Año de creación de pregunta: 2011
 questions[62]= "63)  Seg&uacute;n el m&eacute;todo de puntos funci&oacute;n de Albrecht, marque la respuesta correcta para el valor de PFA (Puntos de Funci&oacute;n Ajustados), si PFNA (Puntos de Funci&oacute;n No Ajustados) y SVA (Suma de los Valores de los 14 Atributos o caracter&iacute;sticas generales del sistema) valen respectivamente 100 y 65:";
 choices[62]= new Array();
 choices[62][0] = "165";
 choices[62][1] = "120";
 choices[62][2] = "SVA no puede tener un valor superior a 50.";
 choices[62][3] = "130";
 answers[62] = 3;
 units[62] = ['94'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 7861. Examen TIC A1 2010";
 preguntaids[62] = 7861


//  Id pregunta: 7897 Año de creación de pregunta: 2011
 questions[63]= "64)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[63]= new Array();
 choices[63][0] = "Herencia.";
 choices[63][1] = "Extensibilidad.";
 choices[63][2] = "Sobrecarga.";
 choices[63][3] = "Polimorfismo.";
 answers[63] = 3;
 units[63] = ['85'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 7897. Examen TIC A1 2010";
 preguntaids[63] = 7897


//  Id pregunta: 7840 Año de creación de pregunta: 2010
 questions[64]= "65)  En el &aacute;mbito de los patrones de dise&ntilde;o, &iquest;qu&eacute; es un singleton?";
 choices[64]= new Array();
 choices[64][0] = "Un objeto del que obtenemos referencias a otros.";
 choices[64][1] = "Un objeto que adapta las llamadas a otro y act&uacute;a como intermediario.";
 choices[64][2] = "Un objeto del que s&oacute;lo existe una instancia.";
 choices[64][3] = "Una clase que no se puede instanciar.";
 answers[64] = 2;
 units[64] = ['89'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 7840. ";
 preguntaids[64] = 7840


//  Id pregunta: 7670 Año de creación de pregunta: 2010
 questions[65]= "66)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &laquo;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&raquo;?";
 choices[65]= new Array();
 choices[65][0] = "Desarrollo de sistemas de informaci&oacute;n.";
 choices[65][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[65][2] = "An&aacute;lisis de sistema de informaci&oacute;n.";
 choices[65][3] = "Mantenimiento de sistemas de informaci&oacute;n.";
 answers[65] = 0;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 7670. Map 2007";
 preguntaids[65] = 7670


//  Id pregunta: 7885 Año de creación de pregunta: 2011
 questions[66]= "67)  En la aprobaci&oacute;n del Plan de Sistemas de Informaci&oacute;n en la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 participan:";
 choices[66]= new Array();
 choices[66][0] = "Comit&eacute; de Direcci&oacute;n y jefe de proyecto del PSI.";
 choices[66][1] = "Comit&eacute; de Direcci&oacute;n, jefe de proyecto y usuarios expertos.";
 choices[66][2] = "Comit&eacute; de Direcci&oacute;n, consultores y jefe de proyecto.";
 choices[66][3] = "Jefe de proyecto, responsable de seguridad y usuarios expertos.";
 answers[66] = 0;
 units[66] = ['91'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 7885. Examen TIC A1 2010";
 preguntaids[66] = 7885


//  Id pregunta: 7901 Año de creación de pregunta: 2011
 questions[67]= "68)  De acuerdo al Est&aacute;ndar ISO 12207 de procesos del ciclo de vida del software:";
 choices[67]= new Array();
 choices[67][0] = "Existe un proceso espec&iacute;fico para la adaptaci&oacute;n del resto de procesos.";
 choices[67][1] = "Para cumplir con el estandar es necesario adaptar los procesos a las circunstancias particulares de cada organizaci&oacute;n o proyecto.";
 choices[67][2] = "Se puede utilizar cualquier proceso de adaptaci&oacute;n, siempre y cuando est&eacute; justificado y documentado.";
 choices[67][3] = "No hay una categor&iacute;a espec&iacute;fica de &quot;cumplimiento adaptado&quot;.";
 answers[67] = 0;
 units[67] = ['82'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 7901. Examen TIC A1 2010";
 preguntaids[67] = 7901


//  Id pregunta: 7895 Año de creación de pregunta: 2011
 questions[68]= "69)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[68]= new Array();
 choices[68][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[68][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[68][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[68][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[68] = 1;
 units[68] = ['98'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 7895. Examen TIC A1 2010";
 preguntaids[68] = 7895


//  Id pregunta: 7854 Año de creación de pregunta: 2011
 questions[69]= "70)  Referente al protocolo Internet Protocol versi&oacute;n 4 (IPv4), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[69]= new Array();
 choices[69][0] = "S&oacute;lo permite identificar hasta 256 protocolos para la parte de datos del datagrama.";
 choices[69][1] = "No permite volver a fragmentar un datagrama ya fragmentado (pues la fragmentaci&oacute;n se indica con el bit MF).";
 choices[69][2] = "La unidad de transferencia m&aacute;xima o Maximun Transmission Unit (MTU) es siempre de 65.535 bytes.";
 choices[69][3] = "Si los datagramas han sido fragmentados, al pasar a una red que puede manejar un PDU m&aacute;ximo mayor que la red de origen, previamente a ser reenviados, los fragmentos deben ser reensamblados.";
 answers[69] = 0;
 units[69] = ['100'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 7854. Examen TIC A1 2010";
 preguntaids[69] = 7854


//  Id pregunta: 7648 Año de creación de pregunta: 2010
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[70]= new Array();
 choices[70][0] = "Diagrama de actividades.";
 choices[70][1] = "Diagrama de clases.";
 choices[70][2] = "Diagrama de secuencia.";
 choices[70][3] = "Diagrama de frecuencia.";
 answers[70] = 3;
 units[70] = ['86'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 7648. Map 2006";
 preguntaids[70] = 7648


//  Id pregunta: 7702 Año de creación de pregunta: 2010
 questions[71]= "72)  El CMM-CMMI es:";
 choices[71]= new Array();
 choices[71][0] = "Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;n en centros de proceso de datos.";
 choices[71][1] = "Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos.";
 choices[71][2] = "Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[71][3] = "Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[71] = 2;
 units[71] = ['92'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 7702. Map 2007";
 preguntaids[71] = 7702


//  Id pregunta: 7799 Año de creación de pregunta: 2010
 questions[72]= "73)  &iquest;En cu&aacute;l de las siguientes metodolog&iacute;as de desarrollo de software NO se utilizan Diagramas de Flujo de Datos?";
 choices[72]= new Array();
 choices[72][0] = "De Marco.";
 choices[72][1] = "Jackson.";
 choices[72][2] = "Gane &amp; Sarson.";
 choices[72][3] = "Yourdon/Constantine.";
 answers[72] = 1;
 units[72] = ['84'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 7799. ";
 preguntaids[72] = 7799


//  Id pregunta: 7602 Año de creación de pregunta: 2010
 questions[73]= "74)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, &iquest;c&oacute;mo se punt&uacute;a el subcriterio 9b, &laquo;Indicadores Clave del Rendimiento de la Organizaci&oacute;n&raquo;, en el proceso de autoevaluaci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "Entre 0 y 100 y se multiplica por 0,50.";
 choices[73][1] = "Entre 0 y 100 y se multiplica por 0,25.";
 choices[73][2] = "Entre 0 y 50 y se multiplica por 0,50.";
 choices[73][3] = "Entre 0 y 50 y se multiplica por 0,25.";
 answers[73] = 0;
 units[73] = ['98'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 7602. Map 2006";
 preguntaids[73] = 7602


//  Id pregunta: 7700 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ITIL (Information Technology Infrastructure Library) es cierta?";
 choices[74]= new Array();
 choices[74][0] = "ITIL es una Biblioteca de Infraestructura de Tecnolog&iacute;as de la Informaci&oacute;n que se ha convertido en el est&aacute;ndar mundial de facto en la Gesti&oacute;n de Servicios Inform&aacute;ticos.";
 choices[74][1] = "ITIL es una iniciativa de la Comisi&oacute;n Europea cuyo objetivo es la elaboraci&oacute;n de una definici&oacute;n de la estructura organizacional de una organizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[74][2] = "La fundaci&oacute;n holandesa &laquo;Exameninstituut voor Informatica&raquo; (EXIN) y la inglesa &laquo;Information Systems Examination Board&raquo; (ISEB) han desarrollado juntas la &uacute;ltima versi&oacute;n de ITIL.";
 choices[74][3] = "ITIL es una metodolog&iacute;a para la Gesti&oacute;n de Servicios Inform&aacute;ticos que no tiene aplicaci&oacute;n en la Administraci&oacute;n P&uacute;blica.";
 answers[74] = 0;
 units[74] = ['101'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7700. Map 2007";
 preguntaids[74] = 7700


