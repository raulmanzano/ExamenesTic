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
//  Id pregunta: 9773 Año de creación de pregunta: 2014
 questions[0]= "1)  Los controles correctivos tienen como objeto:";
 choices[0]= new Array();
 choices[0][0] = "reducir el riesgo ante una debilidad existente";
 choices[0][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[0][2] = "Solucionar problemas detectados por controles detectivos";
 choices[0][3] = "Reportar errores";
 answers[0] = 2;
 units[0] = ['45', '36'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 9773. ";
 preguntaids[0] = 9773


//  Id pregunta: 9767 Año de creación de pregunta: 2014
 questions[1]= "2)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[1]= new Array();
 choices[1][0] = "v4";
 choices[1][1] = "V4.1";
 choices[1][2] = "v5";
 choices[1][3] = "v6";
 answers[1] = 2;
 units[1] = ['36'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 9767. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";
 preguntaids[1] = 9767


//  Id pregunta: 9775 Año de creación de pregunta: 2014
 questions[2]= "3)  El volumen de datos en riesgo de p&eacute;rdida que la organizaci&oacute;n considera tolerable es:";
 choices[2]= new Array();
 choices[2][0] = "RPO (Recovery Point Objective)";
 choices[2][1] = "RTO (Recovery Time Objective)";
 choices[2][2] = "DRP (Disater Recovery Plan)";
 choices[2][3] = "Business Impact Analysis (BIA)";
 answers[2] = 0;
 units[2] = ['45'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9775. ";
 preguntaids[2] = 9775


//  Id pregunta: 9776 Año de creación de pregunta: 2014
 questions[3]= "4)  Seg&uacute;n ITIL un instrumento de gesti&oacute;n para el buen gobierno de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones en el dominio del soporte y el desempe&ntilde;o es:";
 choices[3]= new Array();
 choices[3][0] = "Plan de Continuidad de Negocio";
 choices[3][1] = "Plan de contingencia";
 choices[3][2] = "Plan de Recuperaci&oacute;n ante Desastres";
 choices[3][3] = "Plan de pruebas";
 answers[3] = 1;
 units[3] = ['101'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 9776. ";
 preguntaids[3] = 9776


//  Id pregunta: 9759 Año de creación de pregunta: 2014
 questions[4]= "5)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si:";
 choices[4]= new Array();
 choices[4][0] = "Realizan una revisi&oacute;n del desarrollo del sistema";
 choices[4][1] = "Recomiendan medidas de mejora";
 choices[4][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n";
 choices[4][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[4] = 3;
 units[4] = ['36'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9759. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema.";
 preguntaids[4] = 9759


//  Id pregunta: 9770 Año de creación de pregunta: 2014
 questions[5]= "6)  Los controles compensatorios tienen como objetivo:";
 choices[5]= new Array();
 choices[5][0] = "reducir el riesgo ante una debilidad existente";
 choices[5][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[5][2] = "Solucionar problemas detectados por controles detectivos";
 choices[5][3] = "Reportar errores";
 answers[5] = 0;
 units[5] = ['45', '36'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 9770. Las opciones B, C y D son caracter&iacute;sticas de controles preventivo, correctivo y detectivo respectivamente.";
 preguntaids[5] = 9770


//  Id pregunta: 9769 Año de creación de pregunta: 2014
 questions[6]= "7)  Cual de los siguientes no es un principio de COBIT5";
 choices[6]= new Array();
 choices[6][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[6][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[6][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[6][3] = "Aplicar un solo marco integrado";
 answers[6] = 1;
 units[6] = ['101'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 9769. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";
 preguntaids[6] = 9769


//  Id pregunta: 9777 Año de creación de pregunta: 2014
 questions[7]= "8)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[7]= new Array();
 choices[7][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[7][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[7][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[7][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[7] = 0;
 units[7] = ['45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 9777. ";
 preguntaids[7] = 9777


//  Id pregunta: 9758 Año de creación de pregunta: 2014
 questions[8]= "9)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[8]= new Array();
 choices[8][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[8][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[8][2] = "Determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[8][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[8] = 0;
 units[8] = ['45'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 9758. ";
 preguntaids[8] = 9758


//  Id pregunta: 9757 Año de creación de pregunta: 2014
 questions[9]= "10)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[9]= new Array();
 choices[9][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[9][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[9][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[9][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[9] = 2;
 units[9] = ['121'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9757. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";
 preguntaids[9] = 9757


//  Id pregunta: 9763 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[10]= new Array();
 choices[10][0] = "Escaneo de iris y de huella dactilar";
 choices[10][1] = "Identificador de usuario y sistema GPS";
 choices[10][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[10][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[10] = 2;
 units[10] = ['45'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 9763. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";
 preguntaids[10] = 9763


//  Id pregunta: 9756 Año de creación de pregunta: 2014
 questions[11]= "12)  Europa 2020...";
 choices[11]= new Array();
 choices[11][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[11][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[11][2] = "A y B son correctas";
 choices[11][3] = "Todas son incorrectas";
 answers[11] = 2;
 units[11] = ['121'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9756. ";
 preguntaids[11] = 9756


//  Id pregunta: 9755 Año de creación de pregunta: 2014
 questions[12]= "13)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[12]= new Array();
 choices[12][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[12][1] = "25% de hogares conectados a redes NGA";
 choices[12][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[12][3] = "Todas las anteriores";
 answers[12] = 3;
 units[12] = ['121'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9755. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";
 preguntaids[12] = 9755


//  Id pregunta: 9771 Año de creación de pregunta: 2014
 questions[13]= "14)  Los controles preventivos tienen como objeto:";
 choices[13]= new Array();
 choices[13][0] = "reducir el riesgo ante una debilidad existente";
 choices[13][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[13][2] = "Solucionar problemas detectados por controles detectivos";
 choices[13][3] = "Reportar errores";
 answers[13] = 1;
 units[13] = ['45', '36'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 9771. ";
 preguntaids[13] = 9771


//  Id pregunta: 9765 Año de creación de pregunta: 2014
 questions[14]= "15)  Cu&aacute;l de los siguientes debe ser el primer paso en una Auditor&iacute;a de Sistemas";
 choices[14]= new Array();
 choices[14][0] = "Crear un diagrama de flujo de las ramas de decisi&oacute;n.";
 choices[14][1] = "Comprender el entorno a estudiar";
 choices[14][2] = "Realizar una evaluaci&oacute;n de riesgos";
 choices[14][3] = "Desarrollar un plan de auditor&iacute;a";
 answers[14] = 1;
 units[14] = ['36'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 9765. Un auditor necesita obtener una comprensi&oacute;n de los procesos antes de crear un diagrama de flujo, evaluar los riesgos o desarrollar un plan de auditor&iacute;a";
 preguntaids[14] = 9765


//  Id pregunta: 9762 Año de creación de pregunta: 2014
 questions[15]= "16)  La evaluaci&oacute;n del riesgo es:";
 choices[15]= new Array();
 choices[15][0] = "subjetiva";
 choices[15][1] = "objetiva";
 choices[15][2] = "Matem&aacute;tica";
 choices[15][3] = "Estad&iacute;stica";
 answers[15] = 0;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 9762. Todas las metodolog&iacute;as de evaluaci&oacute;n de riesgos se basan en juicios subjetivos en alg&uacute;n momento en el proceso (por ej, para asignar ponderaciones a los distintos par&aacute;metros)";
 preguntaids[15] = 9762


//  Id pregunta: 9772 Año de creación de pregunta: 2014
 questions[16]= "17)  Los controles detectivos tienen como objeto:";
 choices[16]= new Array();
 choices[16][0] = "reducir el riesgo ante una debilidad existente";
 choices[16][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[16][2] = "Solucionar problemas detectados por controles detectivos";
 choices[16][3] = "Reportar errores";
 answers[16] = 3;
 units[16] = ['45', '36'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 9772. ";
 preguntaids[16] = 9772


//  Id pregunta: 9760 Año de creación de pregunta: 2014
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[17]= new Array();
 choices[17][0] = "Robo de los datos desde el cliente";
 choices[17][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red";
 choices[17][2] = "Un troyano en el navegador";
 choices[17][3] = "Escuchas ilegales en la red";
 answers[17] = 2;
 units[17] = ['45'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9760. ";
 preguntaids[17] = 9760


//  Id pregunta: 9764 Año de creación de pregunta: 2014
 questions[18]= "19)  Cuando una metodolog&iacute;a de ciclo de vida de desarrollo de sistemas es inadecuada, el riesgo m&aacute;s serio del nuevo sistema ser&aacute;:";
 choices[18]= new Array();
 choices[18][0] = "Se completar&aacute; tarde";
 choices[18][1] = "Superar&aacute; las estimaciones de coste";
 choices[18][2] = "No cumplir&aacute; con las necesidades de negocio y de los usuarios";
 choices[18][3] = "Ser&aacute; incompatible con los sistemas existentes";
 answers[18] = 2;
 units[18] = ['45'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 9764. Aunque todas las respuestas son riesgos, lo primero y m&aacute;s perjudicial es que el sistema no cumplir&aacute; con las necesidades de los usuarios y del negocio.";
 preguntaids[18] = 9764


//  Id pregunta: 9778 Año de creación de pregunta: 2014
 questions[19]= "20)  Una de las diferencias entre un Plan de Recuperaci&oacute;n ante desastres (PRD o DRP en ingl&eacute;s) y un Plan de Contingencia es que:";
 choices[19]= new Array();
 choices[19][0] = "El PRD debe ser realizado antes que el Plan de Contingencia";
 choices[19][1] = "El Plan de Contingencia debe ser realizado antes que el PRD";
 choices[19][2] = "El Plan de Contingencia realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el PRD, en paralelo al Plan de Contingencia, trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 choices[19][3] = "El PRD realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el Plan de Contingencia trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 answers[19] = 2;
 units[19] = ['45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 9778. ";
 preguntaids[19] = 9778


//  Id pregunta: 9780 Año de creación de pregunta: 2014
 questions[20]= "21)  La auditor&iacute;a bienal de cumplimiento de la LOPD y la realizaci&oacute;n de pruebas de hacking &eacute;tico tienen las siguientes similitudes y diferencias, marcar la respuesta verdadera";
 choices[20]= new Array();
 choices[20][0] = "El hacking &eacute;tico no es una herramienta de auditor&iacute;a ya que lo realizan los hackers solamente, mientras que la auditor&iacute;a LOPD lo realizan siempre juristas o personal de perfil TAC";
 choices[20][1] = "El hacking &eacute;tico es una t&eacute;cnica para probar los controles de seguridad de las aplicaciones y sirve para que un auditor de seguridad IT pueda encontrar deficiencias. Si la aplicaci&oacute;n maneja datos LOPD, la informaci&oacute;n del estado de estos controles puede servir de apoyo a la auditor&iacute;a de cumplimiento del reglamento asociado a la LOPD que tambi&eacute;n debe verificarse en la auditor&iacute;a bienal, que incluir&aacute; tanto aspectos organizativos como t&eacute;cnicos.";
 choices[20][2] = "La Auditor&iacute;a LOPD es una auditor&iacute;a IT estrictamente hablando, ya que no debe entrar a valorar aspectos organizativos y procedimientales mientras que el hacking &eacute;tico entra a valorar los valores &eacute;ticos de la empresa de cara al tratamiento de la informaci&oacute;n, en particular los datos de car&aacute;cter personal.";
 choices[20][3] = "El hacking &eacute;tico requiere de personal t&eacute;cnico exclusivamente (hackers o no) mientras que la auditor&iacute;a de cumplimiento de la LOPD s&oacute;lo debe contar con personal jurista y los responsables funcionales de las aplicaciones LOPD involucradas pero no a t&eacute;cnicos.";
 answers[20] = 1;
 units[20] = ['79', '36', '35'];
 blocks[20] = ['B2', 'B1'];
 comments[20] = "Id Pregunta: 9780. ";
 preguntaids[20] = 9780


//  Id pregunta: 9774 Año de creación de pregunta: 2014
 questions[21]= "22)  Para desarrollar un plan de continuidad de negocio de &eacute;xito es fundamental la participaci&oacute;n del usuario final durante el proceso de:";
 choices[21]= new Array();
 choices[21][0] = "Estrategias de recuperaci&oacute;n";
 choices[21][1] = "Desarrollo del plan detallado";
 choices[21][2] = "An&aacute;lisis de impacto al negocio (BIA)";
 choices[21][3] = "Mantenimiento y pruebas";
 answers[21] = 2;
 units[21] = ['45'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 9774. Durante el BIA se debe entender y conocer las necesidades del negocio, sus operaciones y el impacto en el negocio ante un desastre";
 preguntaids[21] = 9774


//  Id pregunta: 9779 Año de creación de pregunta: 2014
 questions[22]= "23)  La probabilidad de explosi&oacute;n por escape de gas en una f&aacute;brica es de 0'0001. Si llega a producirse se sabe que morir&aacute;n al menos diez empleados y se producir&aacute;n p&eacute;rdidas materiales por al menos de 100 millones de euros. &iquest;Cu&aacute;l es riesgo cuantitativo asociado a la amenaza de explosi&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "10000 euros";
 choices[22][1] = "100 millones de euros";
 choices[22][2] = "No se puede valorar porque la p&eacute;rdida de vidas humanas no es cuantificable (salvo para las compa&ntilde;&iacute;as de seguros)";
 choices[22][3] = "Muy alto";
 answers[22] = 2;
 units[22] = ['45'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 9779. ";
 preguntaids[22] = 9779


//  Id pregunta: 9781 Año de creación de pregunta: 2014
 questions[23]= "24)  En el transcurso de una auditor&iacute;a inform&aacute;tica, uno de los auditores descubre que existe un incumplimiento grave en un control inform&aacute;tico que podr&iacute;a llevar a la realizaci&oacute;n de un fraude importante por parte de un grupo de empleados, con p&eacute;rdidas econ&oacute;micas y de imagen para la empresa auditada. El auditor debe:";
 choices[23]= new Array();
 choices[23][0] = "Reunir todas las evidencias de esta deficiencia grave y convocar una reuni&oacute;n urgente con los responsables de la empresa para que conozcan este hecho y puedan tomar medidas preventivas.";
 choices[23][1] = "Contactar al grupo de empleados que pueden cometer el fraude y advertirles de lo descubierto para que no comentan el posible fraude.";
 choices[23][2] = "Reunir todas las pruebas y exponerlas todas juntas en el informe al final de la auditor&iacute;a, aunque dicho informe se entregue con posterioridad de la posibilidad de realizaci&oacute;n del fraude, ya que una auditor&iacute;a no debe interrumpirse por ninguna causa.";
 choices[23][3] = "Llamar a ISACA para informar de que se ha producido una violaci&oacute;n del c&oacute;digo &eacute;tico de conducta que se propone en COSO (Marco de Gobierno Corporativo)";
 answers[23] = 0;
 units[23] = ['36', '45'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 9781. ";
 preguntaids[23] = 9781


//  Id pregunta: 9761 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest; Cu&aacute;l de las siguientes opciones contribuye mejor a un plan de continuidad de negocio eficaz?";
 choices[24]= new Array();
 choices[24][0] = "La documentaci&oacute;n se distribuye a todas las partes interesadas";
 choices[24][1] = "La planificaci&oacute;n involucra a todos los departamentos de usuarios";
 choices[24][2] = "El plan se ha aprobado por la alta direcci&oacute;n";
 choices[24][3] = "El plan se ha auditado por un auditor externo";
 answers[24] = 1;
 units[24] = ['36'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 9761. La participaci&oacute;n de los departamentos de usuarios en el Plan de Continuidad de Negocio es crucial para la identificaci&oacute;n de las prioridades de proceso de negocio.";
 preguntaids[24] = 9761


//  Id pregunta: 9766 Año de creación de pregunta: 2014
 questions[25]= "26)  Cual de las siguientes certificaciones profesionales NO pertenecen a ISACA";
 choices[25]= new Array();
 choices[25][0] = "CISSP";
 choices[25][1] = "CISA";
 choices[25][2] = "CRISC";
 choices[25][3] = "CISM";
 answers[25] = 0;
 units[25] = ['36'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 9766. CISSP pertenece a ISC2";
 preguntaids[25] = 9766


//  Id pregunta: 9768 Año de creación de pregunta: 2014
 questions[26]= "27)  COBIT 5 Incluye";
 choices[26]= new Array();
 choices[26][0] = "4 principios y 6 procesos habilitadores";
 choices[26][1] = "5 principios y 7 procesos habilitadores";
 choices[26][2] = "4 principios y 7 procesos habilitadores";
 choices[26][3] = "5 principios y 6 procesos habilitadores";
 answers[26] = 1;
 units[26] = ['101'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 9768. ";
 preguntaids[26] = 9768


