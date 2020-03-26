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
//  Id pregunta: 10010 Año de creación de pregunta: 2015
 questions[0]= "1)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[0]= new Array();
 choices[0][0] = "Auditor&iacute;a.";
 choices[0][1] = "Acreditaci&oacute;n.";
 choices[0][2] = "Certificaci&oacute;n.";
 choices[0][3] = "Evaluaci&oacute;n.";
 answers[0] = 1;
 units[0] = ['45'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 10010. Examen TIC A2 2014";
 preguntaids[0] = 10010


//  Id pregunta: 10920 Año de creación de pregunta: 2015
 questions[1]= "2)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[1]= new Array();
 choices[1][0] = "MTBF";
 choices[1][1] = "MTBR";
 choices[1][2] = "MTTR";
 choices[1][3] = "MTTF";
 answers[1] = 2;
 units[1] = ['45'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 10920. ";
 preguntaids[1] = 10920


//  Id pregunta: 10301 Año de creación de pregunta: 2015
 questions[2]= "3)  Seleccione la respuesta verdadera sobre los t&eacute;rminos empleados para definir la estrategia de continuidad y recuperaci&oacute;n en un sistema de informaci&oacute;n.";
 choices[2]= new Array();
 choices[2][0] = "El objetivo de Punto de recuperaci&oacute;n RPO determina la p&eacute;rdida aceptable de datos en caso de interrupci&oacute;n.";
 choices[2][1] = "El objetivo de Tiempo de Recuperaci&oacute;n RTO es el tiempo m&aacute;ximo que el sistema puede estar interrumpido.";
 choices[2][2] = "Cuanto m&aacute;s bajo es el RTO m&aacute;s baja es la tolerancia al desastre y m&aacute;s elevado ser&aacute; el coste de las estrategias de recuperaci&oacute;n.";
 choices[2][3] = "Todas las anteriores son verdaderas";
 answers[2] = 0;
 units[2] = ['45'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 10301. [&Uacute;ltimo backup] &lt;- RPO -&gt; [Contingencia] &lt;- RTO -&gt; [Datos restaurados]";
 preguntaids[2] = 10301


//  Id pregunta: 9805 Año de creación de pregunta: 2015
 questions[3]= "4)  Un plan de emergencia es un plan por el que...";
 choices[3]= new Array();
 choices[3][0] = "&hellip; se realiza una nueva puesta en marcha del negocio tras un incidente.";
 choices[3][1] = "&hellip; disminuye el riesgo de aparici&oacute;n de incidentes menores.";
 choices[3][2] = "&hellip; se fuerza la indisponibilidad de los recursos cr&iacute;ticos de informaci&oacute;n.";
 choices[3][3] = "&hellip; se prepara el entorno de continuidad en condiciones precarias.";
 answers[3] = 3;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 9805. ";
 preguntaids[3] = 9805


//  Id pregunta: 10496 Año de creación de pregunta: 2015
 questions[4]= "5)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[4]= new Array();
 choices[4][0] = "ISO 15408 - Common criteria";
 choices[4][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[4][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[4][3] = "RFC 5246 - IPSEC";
 answers[4] = 3;
 units[4] = ['45', '78', '119'];
 blocks[4] = ['B1', 'B2', 'B4'];
 comments[4] = "Id Pregunta: 10496. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";
 preguntaids[4] = 10496


//  Id pregunta: 10011 Año de creación de pregunta: 2015
 questions[5]= "6)  Se&ntilde;ale de las siguientes cu&aacute;l es una t&eacute;cnica espec&iacute;fica dentro de un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos, seg&uacute;n la gu&iacute;a de T&eacute;cnicas de MAGERIT v3:";
 choices[5]= new Array();
 choices[5][0] = "Sesiones de trabajo.";
 choices[5][1] = "Valoraciones Delphi.";
 choices[5][2] = "Histogramas.";
 choices[5][3] = "&Aacute;rboles de ataque.";
 answers[5] = 3;
 units[5] = ['45'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 10011. Examen TIC A2 2014";
 preguntaids[5] = 10011


//  Id pregunta: 10509 Año de creación de pregunta: 2015
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta en relaci&oacute;n a Magerit";
 choices[6]= new Array();
 choices[6][0] = "En Magerit 3, vulnerabilidad de un activo es la potencialidad o posibilidad de ocurrencia de la materializaci&oacute;n de una amenaza sobre dicho activo";
 choices[6][1] = "Se permite estructurar el conjunto de activos en capas";
 choices[6][2] = "Se consideran activos esenciales, la informaci&oacute;n que se maneja y los servicios prestados";
 choices[6][3] = "Define que los activos est&aacute;n expuestos a amenazas que interesan por su valor";
 answers[6] = 0;
 units[6] = ['45'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 10509. ";
 preguntaids[6] = 10509


//  Id pregunta: 10012 Año de creación de pregunta: 2015
 questions[7]= "8)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[7]= new Array();
 choices[7][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[7][1] = "Estructura de respuesta a incidentes.";
 choices[7][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[7][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[7] = 1;
 units[7] = ['36', '45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 10012. Examen TIC A2 2014";
 preguntaids[7] = 10012


//  Id pregunta: 10302 Año de creación de pregunta: 2015
 questions[8]= "9)  Seleccione la respuesta correcta sobre las estrategias de recuperaci&oacute;n.";
 choices[8]= new Array();
 choices[8][0] = "Los Cold Sites son instalaciones parcialmente configurados, que permiten la recuperaci&oacute;n en menos de una semana.";
 choices[8][1] = "Las instalaciones redundantes permiten una recuperaci&oacute;n inmediata ante una interrupci&oacute;n";
 choices[8][2] = "Los Hot Sites tienen un coste menor que los Cold Sites";
 choices[8][3] = "La configuraci&oacute;n m&aacute;s adecuada para un Warm Site es de mirroring.";
 answers[8] = 1;
 units[8] = ['45'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 10302. ";
 preguntaids[8] = 10302


