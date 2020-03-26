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
//  Id pregunta: 10576 Año de creación de pregunta: 2015
 questions[0]= "1)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas es la lista correcta de las cuatro P's del dise&ntilde;o del servicio?";
 choices[0]= new Array();
 choices[0][0] = "Planificaci&oacute;n, productos, posici&oacute;n, procesos";
 choices[0][1] = "Planificaci&oacute;n, perspectiva, posici&oacute;n, personas";
 choices[0][2] = "Perspectiva, asociados (partners), problemas, personas";
 choices[0][3] = "Personas, asociados (partners), productos, procesos";
 answers[0] = 3;
 units[0] = ['101'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 10576. ";
 preguntaids[0] = 10576


//  Id pregunta: 10487 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de plugin de Liferay?";
 choices[1]= new Array();
 choices[1][0] = "Tema";
 choices[1][1] = "Portlet";
 choices[1][2] = "Ruta";
 choices[1][3] = "Hook";
 answers[1] = 2;
 units[1] = ['99'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 10487. ";
 preguntaids[1] = 10487


//  Id pregunta: 10558 Año de creación de pregunta: 2015
 questions[2]= "3)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de registrar las relaciones entre los componentes del servicio?";
 choices[2]= new Array();
 choices[2][0] = "Gesti&oacute;n de niveles del servicio";
 choices[2][1] = "Gesti&oacute;n de porfolio de servicios";
 choices[2][2] = "Gesti&oacute;n de activos y configuraci&oacute;n del servicio (SACM)";
 choices[2][3] = "Gesti&oacute;n de incidencias";
 answers[2] = 2;
 units[2] = ['101'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 10558. ";
 preguntaids[2] = 10558


//  Id pregunta: 10460 Año de creación de pregunta: 2015
 questions[3]= "4)  Indique los nuevos procesos que a&ntilde;ade la versi&oacute;n 3 de ITIL sobre la anterior en la fase de operaci&oacute;n del servicio:";
 choices[3]= new Array();
 choices[3][0] = "Gesti&oacute;n de incidencias, gesti&oacute;n de peticiones y gesti&oacute;n de alertas.";
 choices[3][1] = "Gesti&oacute;n de eventos, gesti&oacute;n de peticiones y gesti&oacute;n de acceso a los servicios TI.";
 choices[3][2] = "Gesti&oacute;n de los proveedores y gesti&oacute;n de la seguridad TI.";
 choices[3][3] = "No existe tal fase de operaci&oacute;n dentro de la versi&oacute;n 3 de ITIL.";
 answers[3] = 1;
 units[3] = ['101'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 10460. ";
 preguntaids[3] = 10460


//  Id pregunta: 10555 Año de creación de pregunta: 2015
 questions[4]= "5)  Indique qu&eacute; definiciones son correctas de acuerdo a ITIL v3 para Gesti&oacute;n de Incidencias y Gesti&oacute;n de Problemas: 1. Gesti&oacute;n de Incidencias: restaura el servicio lo antes posible, sin importar la soluci&oacute;n aplicada; 2. Gesti&oacute;n de Problemas: procura dar soluciones definitivas para evitar la recurrencia de incidencias.";
 choices[4]= new Array();
 choices[4][0] = "Solo 1";
 choices[4][1] = "Solo 2";
 choices[4][2] = "Ambas";
 choices[4][3] = "Ninguna";
 answers[4] = 2;
 units[4] = ['101'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10555. ";
 preguntaids[4] = 10555


//  Id pregunta: 10564 Año de creación de pregunta: 2015
 questions[5]= "6)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre un sistema de gesti&oacute;n de configuraci&oacute;n (CMS) es la correcta?";
 choices[5]= new Array();
 choices[5][0] = "El CMS no debe contener datos corporativos acerca de los clientes y usuarios";
 choices[5][1] = "Puede haber m&aacute;s de un CMS";
 choices[5][2] = "No debe haber m&aacute;s de una base de datos de gesti&oacute;n de la configuraci&oacute;n (CMDB)";
 choices[5][3] = "Aunque una organizaci&oacute;n externalice sus servicios de TI tiene la necesidad de un CMS";
 answers[5] = 3;
 units[5] = ['101'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 10564. ";
 preguntaids[5] = 10564


//  Id pregunta: 10551 Año de creación de pregunta: 2015
 questions[6]= "7)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el objetivo principal del contenido del Cat&aacute;logo de Servicios?";
 choices[6]= new Array();
 choices[6][0] = "Ofrecer informaci&oacute;n sobre todos los servicios";
 choices[6][1] = "Ofrecer informaci&oacute;n confiable de los servicios operativos y en desarrollo";
 choices[6][2] = "Tener informaci&oacute;n sobre la infraestructura";
 choices[6][3] = "Analizar inversiones en servicios";
 answers[6] = 1;
 units[6] = ['101'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 10551. ";
 preguntaids[6] = 10551


//  Id pregunta: 10528 Año de creación de pregunta: 2015
 questions[7]= "8)  Respecto del modelo EFQM, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[7]= new Array();
 choices[7][0] = "Contempla entre los agentes facilitadores los siguientes: Liderazgo; Personas; Pol&iacute;ticas y Estrategias;";
 choices[7][1] = "La autoevaluaci&oacute;n del modelo no permite extraer puntos fuertes y &aacute;reas de mejora";
 choices[7][2] = "Contempla cuatro tipos de resultados:  en las Personas; Clientes; en la Sociedad y resultados Clave. Los resultados no son consecuencia de los agentes facilitadores";
 choices[7][3] = "El premio europeo a la calidad es quinquenal";
 answers[7] = 0;
 units[7] = ['98'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10528. ";
 preguntaids[7] = 10528


//  Id pregunta: 10569 Año de creación de pregunta: 2015
 questions[8]= "9)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito del proceso de peticiones de servicio?";
 choices[8]= new Array();
 choices[8][0] = "Tramitar las peticiones de servicio de los usuarios";
 choices[8][1] = "Asegurar que todas las peticiones dentro de una organizaci&oacute;n de TI se satisfagan";
 choices[8][2] = "Asegurar el cumplimiento de una solicitud de cambio";
 choices[8][3] = "Asegurar que los acuerdos de nivel de servicio (SLA) son cumplidos";
 answers[8] = 0;
 units[8] = ['101'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 10569. ";
 preguntaids[8] = 10569


//  Id pregunta: 10570 Año de creación de pregunta: 2015
 questions[9]= "10)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes atributos debe entregar un servicio de TI a los clientes?";
 choices[9]= new Array();
 choices[9][0] = "Capacidades";
 choices[9][1] = "Coste";
 choices[9][2] = "Riesgo";
 choices[9][3] = "Valor";
 answers[9] = 3;
 units[9] = ['101'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10570. ";
 preguntaids[9] = 10570


//  Id pregunta: 10554 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les son los beneficios de la Biblioteca Definitiva de Medios (DML)?:  1. Protecci&oacute;n l&oacute;gica del software y control de licencias; 2. Control del despliegue de las versiones autorizadas; 3. Protecci&oacute;n f&iacute;sica del software";
 choices[10]= new Array();
 choices[10][0] = "Solo 1 y 2";
 choices[10][1] = "Solo 2 y 3";
 choices[10][2] = "Todos";
 choices[10][3] = "Ninguno";
 answers[10] = 2;
 units[10] = ['101'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10554. ";
 preguntaids[10] = 10554


//  Id pregunta: 10361 Año de creación de pregunta: 2015
 questions[11]= "12)  De acuerdo con la Norma ISO 9004 sobre la madurez del sistema de gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes descripciones se refiere al nivel de madurez 1?";
 choices[11]= new Array();
 choices[11][0] = "Proceso de mejora existente y en uso";
 choices[11][1] = "No hay una aproximaci&oacute;n sistem&aacute;tica evidente; sin resultados, resultados pobres o resultados impredecibles.";
 choices[11][2] = "Aproximaci&oacute;n sistem&aacute;tica basada en el problema o en la prevenci&oacute;n; m&iacute;nimos datos disponibles sobre los resultados de mejora.";
 choices[11][3] = "Proceso de mejora ampliamente integrado.";
 answers[11] = 1;
 units[11] = ['98'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 10361. ";
 preguntaids[11] = 10361


//  Id pregunta: 10356 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;A qu&eacute; fase corresponde la Tarea &ldquo;Presentaci&oacute;n y aprobaci&oacute;n del Sistema de Informaci&oacute;n&rdquo; seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[12]= new Array();
 choices[12][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[12][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[12][2] = "Aseguramiento de la Calidad";
 choices[12][3] = "Gesti&oacute;n de Proyectos";
 answers[12] = 1;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 10356. ";
 preguntaids[12] = 10356


//  Id pregunta: 10354 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Qu&eacute; caracter&iacute;sticas deben tener las transacciones para realizarse r&aacute;pidamente y con riesgos m&iacute;nimos?";
 choices[13]= new Array();
 choices[13][0] = "Atomicidad, Coherencia, Independencia, Durabilidad";
 choices[13][1] = "Atomicidad, Consistencia, Aislamiento, Durabilidad";
 choices[13][2] = "Atomicidad, Consistencia, Independencia, Durabilidad";
 choices[13][3] = "Atomicidad, Coherencia, Aislamiento, Durabilidad";
 answers[13] = 1;
 units[13] = ['86'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 10354. Atomicity, Consistency Isolation, Durability (ACID)";
 preguntaids[13] = 10354


//  Id pregunta: 10563 Año de creación de pregunta: 2015
 questions[14]= "15)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos NO es una etapa del ciclo de vida del servicio?";
 choices[14]= new Array();
 choices[14][0] = "Optimizaci&oacute;n del servicio";
 choices[14][1] = "Transici&oacute;n del servicio";
 choices[14][2] = "Dise&ntilde;o del servicio";
 choices[14][3] = "Estrategia del servicio";
 answers[14] = 0;
 units[14] = ['101'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 10563. ";
 preguntaids[14] = 10563


//  Id pregunta: 10503 Año de creación de pregunta: 2015
 questions[15]= "16)  Se&ntilde;ale el conjunto de conceptos que son introducidos por el Modelo Entidad/Relaci&oacute;n extendido";
 choices[15]= new Array();
 choices[15][0] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e identificaci&oacute;n.";
 choices[15][1] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima y Dependencia en existencia e identificaci&oacute;n.";
 choices[15][2] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e autenticaci&oacute;n.";
 choices[15][3] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima e independencia en existencia e identificaci&oacute;n.";
 answers[15] = 0;
 units[15] = ['85'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 10503. ";
 preguntaids[15] = 10503


//  Id pregunta: 10549 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n el Modelo Entidad/Relaci&oacute;n, se&ntilde;ale cu&aacute;l no se encuentra entre las caracter&iacute;sticas que caracterizan una relaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Nombre";
 choices[16][1] = "Tipo de correspondencia";
 choices[16][2] = "Cardinalidad";
 choices[16][3] = "Identificaci&oacute;n";
 answers[16] = 3;
 units[16] = ['85'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 10549. ";
 preguntaids[16] = 10549


//  Id pregunta: 10548 Año de creación de pregunta: 2015
 questions[17]= "18)  En cuanto al uso de los Cost Driven Attributes (CDA) en COCOMO, seleccione la opci&oacute;n verdadera";
 choices[17]= new Array();
 choices[17][0] = "Para estimar el esfuerzo, se tiene en cuenta las l&iacute;neas de c&oacute;digo en miles de l&iacute;neas de c&oacute;digo (KLOC)";
 choices[17][1] = "Los Cost Driven Attributes (a, b, c y d) son los mismos para cada fase de construcci&oacute;n del software en el modelo avanzado.";
 choices[17][2] = "En el m&oacute;delo b&aacute;sico, se tiene en cuenta, adem&aacute;s del n&uacute;mero de l&iacute;neas, los Cost Driven Attributes (CDA) b&aacute;sicos";
 choices[17][3] = "Para estimar el esfuerzo, se utiliza a y b. Para estimar el tiempo se utliza c y d.";
 answers[17] = 3;
 units[17] = ['94'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10548. ";
 preguntaids[17] = 10548


//  Id pregunta: 10562 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de las siguientes actividades est&aacute;n incluidas como parte de la Transici&oacute;n del Servicio?: 1. Introducir nuevos servicios; 2. Retirar servicios; 3. Transferir servicios entre proveedores de servicios";
 choices[18]= new Array();
 choices[18][0] = "Solo 1 y 2";
 choices[18][1] = "Solo 2";
 choices[18][2] = "Todas las anteriores";
 choices[18][3] = "1 y 3";
 answers[18] = 2;
 units[18] = ['101'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10562. ";
 preguntaids[18] = 10562


//  Id pregunta: 10481 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes NO es un sistema de indexaci&oacute;n y b&uacute;squeda de texto?";
 choices[19]= new Array();
 choices[19][0] = "Lucene";
 choices[19][1] = "Solr";
 choices[19][2] = "Xapian";
 choices[19][3] = "Todos los anteriores lo son";
 answers[19] = 3;
 units[19] = ['99'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 10481. ";
 preguntaids[19] = 10481


//  Id pregunta: 10565 Año de creación de pregunta: 2015
 questions[20]= "21)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes elementos estar&iacute;an almacenados en la biblioteca definitiva de medios (DML)?: 1. Copias de software comprado; 2. Copias de software desarrollado internamente; 3. Documentaci&oacute;n relevante de las licencias; 4. Calendario de cambios";
 choices[20]= new Array();
 choices[20][0] = "Todas las anteriores";
 choices[20][1] = "Solo 1 y 2";
 choices[20][2] = "Solo 3 y 4";
 choices[20][3] = "Solo 1, 2 y 3";
 answers[20] = 3;
 units[20] = ['101'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 10565. ";
 preguntaids[20] = 10565


//  Id pregunta: 10559 Año de creación de pregunta: 2015
 questions[21]= "22)  Seg&uacute;n ITIL v3, &iquest;para qu&eacute; se utiliza el modelo RACI?";
 choices[21]= new Array();
 choices[21][0] = "Documentar los roles y las responsabilidades de los interesados en un proceso o actividad";
 choices[21][1] = "Definir los requisitos para un nuevo servicio o un proceso";
 choices[21][2] = "Analizar el impacto de una incidencia en el negocio";
 choices[21][3] = "Crear un cuadro de mando que muestra el estado global de la gesti&oacute;n de servicios";
 answers[21] = 0;
 units[21] = ['101'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 10559. ";
 preguntaids[21] = 10559


//  Id pregunta: 10463 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO es un principio de Cobit v5?";
 choices[22]= new Array();
 choices[22][0] = "Satisfacer las Necesidades de las Partes Interesadas.";
 choices[22][1] = "Cubrir el &aacute;rea TI de extremo a extremo.";
 choices[22][2] = "Aplicar un Marco de Referencia &Uacute;nico Integrado.";
 choices[22][3] = "Separar el Gobierno de la Gesti&oacute;n.";
 answers[22] = 1;
 units[22] = ['101'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10463. ";
 preguntaids[22] = 10463


//  Id pregunta: 10484 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares NO est&aacute; relacionado directamente con la gesti&oacute;n de contenidos?";
 choices[23]= new Array();
 choices[23][0] = "CIFS";
 choices[23][1] = "CMIS";
 choices[23][2] = "JCR 170";
 choices[23][3] = "Todos lo est&aacute;n";
 answers[23] = 3;
 units[23] = ['99'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10484. ";
 preguntaids[23] = 10484


//  Id pregunta: 10462 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;les son las tres opciones principales en los modelos de dise&ntilde;o de ITIL v3?";
 choices[24]= new Array();
 choices[24][0] = "Modelo tradicional: presupone una mayor estabilidad del servicio.";
 choices[24][1] = "Modelo &Aacute;gil o RAD: principalmente incremental e iterativo que se basa en la creaci&oacute;n de prototipos.";
 choices[24][2] = "Modelo basado en soluciones software est&aacute;ndar ya empaquetadas.";
 choices[24][3] = "Todos son modelos de ITIL versi&oacute;n 3.";
 answers[24] = 3;
 units[24] = ['101'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10462. ";
 preguntaids[24] = 10462


//  Id pregunta: 10485 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares corresponde a la especificaci&oacute;n de portlets m&aacute;s reciente?";
 choices[25]= new Array();
 choices[25][0] = "JSR 286";
 choices[25][1] = "JSR 168";
 choices[25][2] = "JSR 283";
 choices[25][3] = "a y c son ciertas";
 answers[25] = 0;
 units[25] = ['99'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 10485. ";
 preguntaids[25] = 10485


//  Id pregunta: 10365 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de contenidos opensource?";
 choices[26]= new Array();
 choices[26][0] = "Drupal";
 choices[26][1] = "Joomla";
 choices[26][2] = "Alfresco";
 choices[26][3] = "Sharepoint";
 answers[26] = 3;
 units[26] = ['99'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 10365. Soluci&oacute;n propietaria de Microsoft";
 preguntaids[26] = 10365


//  Id pregunta: 10465 Año de creación de pregunta: 2015
 questions[27]= "28)  El 5&ordm; principio de marco de trabajo CobiT v5 establece:";
 choices[27]= new Array();
 choices[27][0] = "Este principio se centra en el Gobierno TI dejando la gesti&oacute;n a otras metodolog&iacute;as como ITIL.";
 choices[27][1] = "Establece una clara distinci&oacute;n entre Gobierno y Gesti&oacute;n.";
 choices[27][2] = "No existe interacci&oacute;n alguna entre Gobierno y Gesti&oacute;n.";
 choices[27][3] = "El Gobierno contiene cuatro dominios, seg&uacute;n las &aacute;reas de responsabilidad de Planificar, Construir, Ejecutar y Supervisar (Plan, Build, Run and Monitor, PBRM).";
 answers[27] = 1;
 units[27] = ['101'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 10465. ";
 preguntaids[27] = 10465


//  Id pregunta: 10486 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de un gestor documental?";
 choices[28]= new Array();
 choices[28][0] = "Creaci&oacute;n";
 choices[28][1] = "Redifusi&oacute;n";
 choices[28][2] = "Expurgo";
 choices[28][3] = "Todas lo son";
 answers[28] = 1;
 units[28] = ['99'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10486. ";
 preguntaids[28] = 10486


//  Id pregunta: 10579 Año de creación de pregunta: 2015
 questions[29]= "30)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones respecto de la base de datos de errores conocidos (KEDB) es la mejor?";
 choices[29]= new Array();
 choices[29][0] = "La KEDB es la misma base de datos que el sistema de gesti&oacute;n del conocimiento del servicio (SKMS)";
 choices[29][1] = "La KEDB deber&iacute;a de usarse durante la fase de diagn&oacute;stico de incidencias para intentar acelerar el proceso de resoluci&oacute;n";
 choices[29][2] = "Debe tenerse cuidado para evitar duplicar registros en la KEDB. Esto puede ser realizado al ser posible dar acceso de creaci&oacute;n de nuevos registros a muchos t&eacute;cnicos";
 choices[29][3] = "Acceder a la KEDB deber&iacute;a estar limitado al centro de servicio a usuarios";
 answers[29] = 1;
 units[29] = ['101'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 10579. ";
 preguntaids[29] = 10579


//  Id pregunta: 10531 Año de creación de pregunta: 2015
 questions[30]= "31)  Se&ntilde;ale el tipo de proyecto que no est&aacute; entre los contemplados por COCOMO";
 choices[30]= new Array();
 choices[30][0] = "Empotrado";
 choices[30][1] = "Org&aacute;nico";
 choices[30][2] = "Semiacoplado";
 choices[30][3] = "Semiempotrado";
 answers[30] = 3;
 units[30] = ['94'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 10531. ";
 preguntaids[30] = 10531


//  Id pregunta: 10483 Año de creación de pregunta: 2015
 questions[31]= "32)  En un gestor documental t&iacute;pico &iquest;d&oacute;nde se realiza el almacenamiento?";
 choices[31]= new Array();
 choices[31][0] = "Los metadatos en el Sistema de Ficheros, los documentos en Base de Datos";
 choices[31][1] = "Los metadatos en Base de Datos, los documentos en el Sistema de Ficheros";
 choices[31][2] = "Metadatos y documentos se almacenan en Base de Datos";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 1;
 units[31] = ['99'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10483. ";
 preguntaids[31] = 10483


//  Id pregunta: 10368 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l es el ciclo de vida correcto de la informaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Generaci&oacute;n, Almacenamiento, Acceso, Disposici&oacute;n, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[32][1] = "Generaci&oacute;n, Acceso, Almacenamiento, Uso, Disposici&oacute;n y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[32][2] = "Generaci&oacute;n, Acceso, Disposici&oacute;n, Almacenamiento, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[32][3] = "Generaci&oacute;n, Almacenamiento, Acceso, Uso, Disposici&oacute;n, y Conservaci&oacute;n o Destrucci&oacute;n";
 answers[32] = 0;
 units[32] = ['100'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 10368. ";
 preguntaids[32] = 10368


//  Id pregunta: 10566 Año de creación de pregunta: 2015
 questions[33]= "34)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de revisar regularmente los acuerdos de nivel operativo (OLA)?";
 choices[33]= new Array();
 choices[33][0] = "Gesti&oacute;n de suministradores";
 choices[33][1] = "Gesti&oacute;n de niveles de servicio";
 choices[33][2] = "Gesti&oacute;n del porfolio de servicios";
 choices[33][3] = "Gesti&oacute;n de demanda";
 answers[33] = 1;
 units[33] = ['101'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 10566. ";
 preguntaids[33] = 10566


//  Id pregunta: 10553 Año de creación de pregunta: 2015
 questions[34]= "35)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[34]= new Array();
 choices[34][0] = "Controlar todos los proveedores externos de TI";
 choices[34][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[34][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[34][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[34] = 1;
 units[34] = ['101'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 10553. ";
 preguntaids[34] = 10553


//  Id pregunta: 10568 Año de creación de pregunta: 2015
 questions[35]= "36)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos son las caracter&iacute;sticas claves que contribuyen al &eacute;xito de ITIL?: 1. Es neutral respecto a fabricantes y vendedores; 2. No es prescriptivo; 3. Es una mejor pr&aacute;ctica; 4. Es un est&aacute;ndar";
 choices[35]= new Array();
 choices[35][0] = "Solo 3";
 choices[35][1] = "Solo 1, 2 y 3";
 choices[35][2] = "Todos los anteriores";
 choices[35][3] = "Solo 2, 3 y 4";
 answers[35] = 1;
 units[35] = ['101'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 10568. ";
 preguntaids[35] = 10568


//  Id pregunta: 10357 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Qu&eacute; roles deben participar en la Tarea de Evaluaci&oacute;n de Alternativas y Selecci&oacute;n, seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[36]= new Array();
 choices[36][0] = "Jefe de Proyecto";
 choices[36][1] = "Jefe de Proyecto y Comit&eacute; de Direcci&oacute;n";
 choices[36][2] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n y Analistas";
 choices[36][3] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n, Analistas y Usuarios Expertos";
 answers[36] = 2;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 10357. ";
 preguntaids[36] = 10357


//  Id pregunta: 10359 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;A qu&eacute; concepto se corresponde la definici&oacute;n: &ldquo;proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n.&rdquo;";
 choices[37]= new Array();
 choices[37][0] = "Ingenier&iacute;a inversa";
 choices[37][1] = "Reingenier&iacute;a";
 choices[37][2] = "Ingenier&iacute;a hacia delante";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = 0;
 units[37] = ['97'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 10359. ";
 preguntaids[37] = 10359


//  Id pregunta: 10366 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es un modelo cl&aacute;sico de recuperaci&oacute;n de informaci&oacute;n?";
 choices[38]= new Array();
 choices[38][0] = "Probabil&iacute;stico";
 choices[38][1] = "Estructurado";
 choices[38][2] = "Vectorial";
 choices[38][3] = "Booleano";
 answers[38] = 1;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 10366. ";
 preguntaids[38] = 10366


//  Id pregunta: 10464 Año de creación de pregunta: 2015
 questions[39]= "40)  En Cobitv5:";
 choices[39]= new Array();
 choices[39][0] = "La cascada de metas es el mecanismo para traducir las necesidades de las partes interesadas en metas corporativas, metas relacionadas con las TI y metas catalizadoras.";
 choices[39][1] = "Las metas corporativas han sido desarrolladas utilizando las dimensiones del cuadro de mando integral (CMI).";
 choices[39][2] = "Los tres objetivos principales de Gobierno a considerar son: realizaci&oacute;n de beneficios, optimizaci&oacute;n de riesgos y optimizaci&oacute;n de recursos.";
 choices[39][3] = "Todas son correctas.";
 answers[39] = 3;
 units[39] = ['101'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 10464. ";
 preguntaids[39] = 10464


//  Id pregunta: 10497 Año de creación de pregunta: 2015
 questions[40]= "41)  Indique cu&aacute;l de los siguientes, es un lenguaje de programaci&oacute;n orientado a objetos puro";
 choices[40]= new Array();
 choices[40][0] = "Eiffel";
 choices[40][1] = "Basic";
 choices[40][2] = "LISP";
 choices[40][3] = "Pascal";
 answers[40] = 0;
 units[40] = ['85'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 10497. ";
 preguntaids[40] = 10497


//  Id pregunta: 10575 Año de creación de pregunta: 2015
 questions[41]= "42)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; afirmaci&oacute;n sobre la relaci&oacute;n entre el sistema de gesti&oacute;n de configuraci&oacute;n (CMS) y el sistema de gesti&oacute;n del conocimiento de servicios (SKMS) es la correcta?";
 choices[41]= new Array();
 choices[41][0] = "El SKMS es parte de la CMS";
 choices[41][1] = "El CMS es parte del SKMS";
 choices[41][2] = "El CMS y el SKMS son la misma cosa";
 choices[41][3] = "No existe una relaci&oacute;n entre el CMS y el SKMS";
 answers[41] = 1;
 units[41] = ['101'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 10575. ";
 preguntaids[41] = 10575


//  Id pregunta: 10488 Año de creación de pregunta: 2015
 questions[42]= "43)  &iquest;En qu&eacute; consisten los Sistemas de Gesti&oacute;n de Contenidos Empresariales (ECM)?";
 choices[42]= new Array();
 choices[42][0] = "En la creaci&oacute;n y gesti&oacute;n de contenidos de un sitio Web";
 choices[42][1] = "En la edici&oacute;n colaborativa de contenidos";
 choices[42][2] = "En la gesti&oacute;n generalista de contenidos desestructurados";
 choices[42][3] = "Todas las anteriores";
 answers[42] = 3;
 units[42] = ['99'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 10488. ";
 preguntaids[42] = 10488


//  Id pregunta: 10583 Año de creación de pregunta: 2015
 questions[43]= "44)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta para todos los procesos?";
 choices[43]= new Array();
 choices[43][0] = "Definen funciones como parte de su dise&ntilde;o";
 choices[43][1] = "Entregan resultados al cliente o a interesados";
 choices[43][2] = "Son llevados a cabo por un proveedor de servicios externo, en apoyo a un cliente";
 choices[43][3] = "Son unidades de organizaciones responsables de resultados espec&iacute;ficos";
 answers[43] = 1;
 units[43] = ['101'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 10583. ";
 preguntaids[43] = 10583


//  Id pregunta: 10482 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;Qu&eacute; es Activiti?";
 choices[44]= new Array();
 choices[44][0] = "Una alternativa a JBPM";
 choices[44][1] = "El motor BPM de Alfresco";
 choices[44][2] = "a y b son ciertas";
 choices[44][3] = "El motor BPM de Liferay";
 answers[44] = 2;
 units[44] = ['99'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 10482. ";
 preguntaids[44] = 10482


//  Id pregunta: 10358 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un modo de COCOMO (Constructive Cost Model) para estimar el n&uacute;mero de instrucciones de c&oacute;digo fuente seg&uacute;n el entorno de aplicaci&oacute;n que se utiliza?";
 choices[45]= new Array();
 choices[45][0] = "Org&aacute;nico";
 choices[45][1] = "Acoplado";
 choices[45][2] = "Semiacoplado";
 choices[45][3] = "Empotrado";
 answers[45] = 1;
 units[45] = ['93'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 10358. ";
 preguntaids[45] = 10358


//  Id pregunta: 10581 Año de creación de pregunta: 2015
 questions[46]= "47)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes podr&iacute;an ser considerados parte interesada (stakeholder) en una gesti&oacute;n de proyecto de servicios?";
 choices[46]= new Array();
 choices[46][0] = "Solo usuarios y clientes";
 choices[46][1] = "Solo suministradores y funciones";
 choices[46][2] = "Solo clientes y funciones";
 choices[46][3] = "Todos los anteriores";
 answers[46] = 3;
 units[46] = ['101'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 10581. ";
 preguntaids[46] = 10581


//  Id pregunta: 10574 Año de creación de pregunta: 2015
 questions[47]= "48)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas NO es un tipo de m&eacute;trica que se describe en la Mejora Continua del Servicio (CSI)?";
 choices[47]= new Array();
 choices[47][0] = "M&eacute;tricas del proceso";
 choices[47][1] = "M&eacute;tricas del servicio";
 choices[47][2] = "M&eacute;tricas de personal";
 choices[47][3] = "M&eacute;tricas tecnol&oacute;gicas";
 answers[47] = 2;
 units[47] = ['101'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 10574. ";
 preguntaids[47] = 10574


//  Id pregunta: 10498 Año de creación de pregunta: 2015
 questions[48]= "49)  Seg&uacute;n se define en M&eacute;trica, la t&eacute;cnica de reglas de transformaci&oacute;n, permite transformar cada elemento del modelo de clases en un elemento del modelo f&iacute;sico. Se&ntilde;ale de los indicados a continuaci&oacute;n cu&aacute;l no es una regla de transformaci&oacute;n contemplada";
 choices[48]= new Array();
 choices[48][0] = "Transformaci&oacute;n de clases";
 choices[48][1] = "Transformaci&oacute;n de atributos de clases";
 choices[48][2] = "Transformaci&oacute;n de relaciones inclusivas";
 choices[48][3] = "Transformaci&oacute;n de la herencia";
 answers[48] = 2;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 10498. No existe. S&iacute; existe la transformaci&oacute;n de relaciones exclusivas.";
 preguntaids[48] = 10498


//  Id pregunta: 10561 Año de creación de pregunta: 2015
 questions[49]= "50)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito principal de la Gesti&oacute;n de Disponibilidad?";
 choices[49]= new Array();
 choices[49][0] = "Monitorizar e informar la disponibilidad de los componentes";
 choices[49][1] = "Asegurar que se cumplen todas las metas del acuerdo de nivel de servicios (SLA)";
 choices[49][2] = "Garantizar los niveles de disponibilidad de los servicios y de los componentes";
 choices[49][3] = "Asegurar que la disponibilidad del servicio satisface las necesidades acordadas con el negocio";
 answers[49] = 3;
 units[49] = ['101'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 10561. ";
 preguntaids[49] = 10561


//  Id pregunta: 10556 Año de creación de pregunta: 2015
 questions[50]= "51)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[50]= new Array();
 choices[50][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[50][1] = "De tecnolog&iacute;a y de servicios";
 choices[50][2] = "De servicios y de personas";
 choices[50][3] = "De servicios y de procesos";
 answers[50] = 0;
 units[50] = ['101'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10556. ";
 preguntaids[50] = 10556


//  Id pregunta: 10577 Año de creación de pregunta: 2015
 questions[51]= "52)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones respecto a funciones es correcta?: 1. Pueden incluir herramientas; 2. Son grupos que utilizan recursos para llevar a cabo una o m&aacute;s actividades; 3. Una persona o grupo puede desarrollar m&uacute;ltiples funciones; 4. Son m&aacute;s caras de implantar comparado con los procesos";
 choices[51]= new Array();
 choices[51][0] = "Solo 1, 2 y 3";
 choices[51][1] = "Solo 1, 2 y 4";
 choices[51][2] = "Todas las anteriores";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = 0;
 units[51] = ['101'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 10577. ";
 preguntaids[51] = 10577


//  Id pregunta: 10367 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes procesos no forma parte del Soporte de Servicio seg&uacute;n la biblioteca ITIL v3?";
 choices[52]= new Array();
 choices[52][0] = "Gesti&oacute;n de Incidencias";
 choices[52][1] = "Gesti&oacute;n de Problemas";
 choices[52][2] = "Gesti&oacute;n de Eventos";
 choices[52][3] = "Gesti&oacute;n del Cambio";
 answers[52] = 2;
 units[52] = ['101'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 10367. ";
 preguntaids[52] = 10367


//  Id pregunta: 10489 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes gestores de contenidos NO est&aacute; desarrollado en Java?";
 choices[53]= new Array();
 choices[53][0] = "Liferay";
 choices[53][1] = "Alfresco";
 choices[53][2] = "Drupal";
 choices[53][3] = "OpenCMS";
 answers[53] = 2;
 units[53] = ['99'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 10489. ";
 preguntaids[53] = 10489


//  Id pregunta: 10567 Año de creación de pregunta: 2015
 questions[54]= "55)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes conceptos son caracter&iacute;sticas de todo proceso?: 1. Es medible; 2. Entrega un resultado especifico; 3. Entrega sus resultados principales a un cliente o a otros interesados";
 choices[54]= new Array();
 choices[54][0] = "Solo 1 y 3";
 choices[54][1] = "Solo 1 y 2";
 choices[54][2] = "Solo 2 y 3";
 choices[54][3] = "Todos los anteriores";
 answers[54] = 3;
 units[54] = ['101'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 10567. ";
 preguntaids[54] = 10567


//  Id pregunta: 10490 Año de creación de pregunta: 2015
 questions[55]= "56)  En relaci&oacute;n a la gesti&oacute;n documental, de contenidos y portales &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[55]= new Array();
 choices[55][0] = "La gesti&oacute;n de portales suele constituir la capa de presentaci&oacute;n, y la documental la de persistencia";
 choices[55][1] = "La gesti&oacute;n de contenidos suele constituir la capa de persistencia, mientras que la gesti&oacute;n documental es la capa de negocio";
 choices[55][2] = "La gesti&oacute;n de portales suele constituir la capa de negocio y la gesti&oacute;n documental la de presentaci&oacute;n";
 choices[55][3] = "La gesti&oacute;n de portales suele constituir la capa de persistencia, mientras que la de contenidos es la de presentaci&oacute;n";
 answers[55] = 0;
 units[55] = ['99'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 10490. ";
 preguntaids[55] = 10490


//  Id pregunta: 10360 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;A qu&eacute; se refieren las siglas EFQM?";
 choices[56]= new Array();
 choices[56][0] = "European Foundation of Quality Metrics";
 choices[56][1] = "European Foundation of Quality Maintenance";
 choices[56][2] = "European Foundation for Qualitiy Management";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 2;
 units[56] = ['98'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 10360. Fundaci&oacute;n Europea Gesti&oacute;n Calidad";
 preguntaids[56] = 10360


//  Id pregunta: 10505 Año de creación de pregunta: 2015
 questions[57]= "58)  La metodolog&iacute;a M&eacute;trica 3, contempla el uso de la t&eacute;cnica de an&aacute;lisis coste / beneficio. Se&ntilde;ale qu&eacute; caracteriza su uso.";
 choices[57]= new Array();
 choices[57][0] = "Se utiliza en etapas medias y tard&iacute;as del proyecto";
 choices[57][1] = "Sugiere utilizarla en PSI (a la hora de definir el plan de acci&oacute;n y la arquitectura tecnol&oacute;gica)";
 choices[57][2] = "Para su uso se determinan costes tangibles e intangibles y beneficios tangibles";
 choices[57][3] = "Se desaconseja su uso en EVS, cuando se valoran las alternativas";
 answers[57] = 1;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10505. ";
 preguntaids[57] = 10505


//  Id pregunta: 10578 Año de creación de pregunta: 2015
 questions[58]= "59)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[58]= new Array();
 choices[58][0] = "Gesti&oacute;n de la capacidad";
 choices[58][1] = "Gesti&oacute;n de suministradores";
 choices[58][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[58][3] = "Gesti&oacute;n de cambios";
 answers[58] = 0;
 units[58] = ['101'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 10578. ";
 preguntaids[58] = 10578


//  Id pregunta: 10507 Año de creación de pregunta: 2015
 questions[59]= "60)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[59]= new Array();
 choices[59][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[59][1] = "En cada tarea debe haber un unico R y A";
 choices[59][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[59][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[59] = 1;
 units[59] = ['101'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 10507. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";
 preguntaids[59] = 10507


//  Id pregunta: 10459 Año de creación de pregunta: 2015
 questions[60]= "61)  La versi&oacute;n 3 de ITIL enfoca la gesti&oacute;n de servicios a partir del ciclo de vida de un servicio, se&ntilde;ale en concepto correcto entre los que se muestran a continuaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Funci&oacute;n: es una subdivisi&oacute;n de una organizaci&oacute;n que est&aacute; especializada en realizar un tipo de trabajo concreto y tiene la responsabilidad de obtener resultados concretos.";
 choices[60][1] = "Actividad: es un conjunto estructurado de procesos dise&ntilde;ado para cumplir uno objetivo concreto.";
 choices[60][2] = "Gesti&oacute;n de Servicio: es un conjunto de actividades y responsabilidades asignadas a una persona o un grupo.";
 choices[60][3] = "Rol: es un conjunto de capacidades organizativas especializadas, cuyo fin es generar valor para los clientes en forma de servicios.";
 answers[60] = 0;
 units[60] = ['101'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 10459. ";
 preguntaids[60] = 10459


//  Id pregunta: 10510 Año de creación de pregunta: 2015
 questions[61]= "62)  Se&ntilde;ale de entre las siguientes, la opci&oacute;n incorrecta en cuanto a las caracter&iacute;sticas del principios del modelado orientado a objetos";
 choices[61]= new Array();
 choices[61][0] = "Polimorfismo, encapsulaci&oacute;n y herencia";
 choices[61][1] = "Reusabilidad, modulaci&oacute;n y herencia";
 choices[61][2] = "Herencia, polimorfismo";
 choices[61][3] = "Reusabilidad, abstracci&oacute;n y herencia";
 answers[61] = 1;
 units[61] = ['85'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 10510. ";
 preguntaids[61] = 10510


//  Id pregunta: 10582 Año de creación de pregunta: 2015
 questions[62]= "63)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes actividades asegura y desempe&ntilde;a la Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio?: 1. Identificar los elementos de configuraci&oacute;n (CI); 2. Que los CIs tengan una l&iacute;nea base; 3. Controlar los cambios en los CIs";
 choices[62]= new Array();
 choices[62][0] = "Todos";
 choices[62][1] = "Solo 1 y 2";
 choices[62][2] = "Solo 3";
 choices[62][3] = "Solo 2 y 3";
 answers[62] = 0;
 units[62] = ['101'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 10582. ";
 preguntaids[62] = 10582


//  Id pregunta: 10571 Año de creación de pregunta: 2015
 questions[63]= "64)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones resume mejor el prop&oacute;sito de la Gesti&oacute;n de Eventos?";
 choices[63]= new Array();
 choices[63][0] = "La habilidad de detectar eventos, darles sentido y determinar las acciones de control apropiadas";
 choices[63][1] = "La habilidad de detectar eventos, restablecer el servicio a la normalidad tan pronto como sea posible y minimizar el impacto adverso en las operaciones del negocio";
 choices[63][2] = "La habilidad de monitorizar y controlar las actividades del personal t&eacute;cnico";
 choices[63][3] = "La habilidad de informar sobre la entrega exitosa de los servicios al comprobar el tiempo de funcionamiento de los dispositivos de la infraestructura";
 answers[63] = 0;
 units[63] = ['101'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 10571. ";
 preguntaids[63] = 10571


//  Id pregunta: 10573 Año de creación de pregunta: 2015
 questions[64]= "65)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; etapa del ciclo de vida del servicio asegura que los m&eacute;todos de medici&oacute;n proporcionar&aacute;n las m&eacute;tricas necesarias para los servicios nuevos o modificados?";
 choices[64]= new Array();
 choices[64][0] = "Dise&ntilde;o del servicio";
 choices[64][1] = "Operaci&oacute;n del servicio";
 choices[64][2] = "Estrategia del servicio";
 choices[64][3] = "Entrega del servicio";
 answers[64] = 0;
 units[64] = ['101'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 10573. ";
 preguntaids[64] = 10573


//  Id pregunta: 10552 Año de creación de pregunta: 2015
 questions[65]= "66)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[65]= new Array();
 choices[65][0] = "Entregar servicios acordados";
 choices[65][1] = "Contratar proveedores TI";
 choices[65][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[65][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[65] = 2;
 units[65] = ['101'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 10552. ";
 preguntaids[65] = 10552


//  Id pregunta: 10580 Año de creación de pregunta: 2015
 questions[66]= "67)  Seg&uacute;n ITIL v3, &iquest;una petici&oacute;n de un cliente deber&iacute;a ser cumplida SIEMPRE?";
 choices[66]= new Array();
 choices[66][0] = "S&iacute;, si el cliente es externo, ya que est&aacute; pagando por el servicio";
 choices[66][1] = "No si el cliente es interno, ya que no siempre paga por el servicio";
 choices[66][2] = "No, es responsabilidad del proveedor TI llevar a cabo las debidas diligencias antes de que la petici&oacute;n sea cumplida";
 choices[66][3] = "S&iacute;, el proveedor del servicio deber&iacute;a asegurarse de que todos las peticiones para nuevos servicios sean cumplidas";
 answers[66] = 2;
 units[66] = ['101'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 10580. ";
 preguntaids[66] = 10580


//  Id pregunta: 10355 Año de creación de pregunta: 2015
 questions[67]= "68)  Seleccione la respuesta verdadera:";
 choices[67]= new Array();
 choices[67][0] = "El fan-in de un m&oacute;dulo es usado como una medida de reusabilidad";
 choices[67][1] = "El fan-in de un m&oacute;dulo es usado como una medida de complejidad.";
 choices[67][2] = "Las dos anteriores son verdaderas";
 choices[67][3] = "Todas son falsas";
 answers[67] = 0;
 units[67] = ['89'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 10355. ";
 preguntaids[67] = 10355


//  Id pregunta: 10560 Año de creación de pregunta: 2015
 questions[68]= "69)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es la MEJOR descripci&oacute;n de un acuerdo de nivel operativo (OLA)?";
 choices[68]= new Array();
 choices[68][0] = "Un acuerdo entre un proveedor de servicios de TI y otra parte de la misma organizaci&oacute;n que colabora en la prestaci&oacute;n de servicios";
 choices[68][1] = "Un acuerdo escrito entre el proveedor de servicios de TI y sus clientes, el cual define las metas clave y responsabilidades de ambas partes";
 choices[68][2] = "Un acuerdo entre dos proveedores de servicios sobre los niveles de servicio requeridos por el cliente";
 choices[68][3] = "Un acuerdo entre un Centro de Servicios externo y el cliente de TI acerca de los tiempos de respuesta y de reparaci&oacute;n";
 answers[68] = 0;
 units[68] = ['101'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 10560. ";
 preguntaids[68] = 10560


//  Id pregunta: 10533 Año de creación de pregunta: 2015
 questions[69]= "70)  En relaci&oacute;n con los diagramas de casos de uso, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[69]= new Array();
 choices[69][0] = "Las relaciones entre casos de uso y actores pueden ser de tipo usa o extiende";
 choices[69][1] = "Las relaciones s&oacute;lo pueden ser entre actores y casos de uso";
 choices[69][2] = "Los elementos principales son: casos de uso, relaciones, actores y extensiones";
 choices[69][3] = "M&eacute;trica no contempla su uso";
 answers[69] = 2;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 10533. ";
 preguntaids[69] = 10533


//  Id pregunta: 10461 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;Cu&aacute;les NO es uno de los cuatro conceptos (conocidos como las cuatro Ps de Mintzberg) en base  a los cuales debe estar definida la estrategia de una organizaci&oacute;n seg&uacute;n ITIL versi&oacute;n 3?";
 choices[70]= new Array();
 choices[70][0] = "Perspectiva: disponer de metas y valores bien definidos y asumibles.";
 choices[70][1] = "Partici&oacute;n: definir y dividir los servicios en procesos.";
 choices[70][2] = "Planificaci&oacute;n: establecer criterios claros de desarrollo futuro.";
 choices[70][3] = "Patr&oacute;n: mantener una coherencia en la toma de decisiones y acciones adoptadas.";
 answers[70] = 1;
 units[70] = ['101'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 10461. ";
 preguntaids[70] = 10461


//  Id pregunta: 10532 Año de creación de pregunta: 2015
 questions[71]= "72)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[71]= new Array();
 choices[71][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[71][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[71][2] = "ISO 9001 consta de ocho secciones";
 choices[71][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[71] = 0;
 units[71] = ['98'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 10532. ";
 preguntaids[71] = 10532


//  Id pregunta: 10572 Año de creación de pregunta: 2015
 questions[72]= "73)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; significa &ldquo;Garant&iacute;a de un servicio&rdquo;?";
 choices[72]= new Array();
 choices[72][0] = "El servicio se ajusta al prop&oacute;sito";
 choices[72][1] = "No habr&aacute; fallas en las aplicaciones ni en la infraestructura asociada al servicio";
 choices[72][2] = "Todos los problemas relacionados con el servicio se solucionan gratuitamente durante un per&iacute;odo determinado de tiempo";
 choices[72][3] = "A los clientes se les aseguran ciertos niveles de disponibilidad, capacidad, continuidad y seguridad";
 answers[72] = 3;
 units[72] = ['101'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 10572. ";
 preguntaids[72] = 10572


//  Id pregunta: 10536 Año de creación de pregunta: 2015
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n falsa de entre las siguientes:";
 choices[73]= new Array();
 choices[73][0] = "Las relaciones regulares son entre dos entidades fuertes";
 choices[73][1] = "La existencia de las entidades fuertes, depende de otra entidad";
 choices[73][2] = "Las entidades pueden ser fuertes o d&eacute;biles";
 choices[73][3] = "Las relaciones d&eacute;biles se producen entre una entidad fuerte y otra d&eacute;bil";
 answers[73] = 1;
 units[73] = ['85'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 10536. ";
 preguntaids[73] = 10536


//  Id pregunta: 10557 Año de creación de pregunta: 2015
 questions[74]= "75)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes enunciados no es un prop&oacute;sito de Operaci&oacute;n del Servicio?";
 choices[74]= new Array();
 choices[74][0] = "Llevar a cabo pruebas para asegurar que los servicios est&aacute;n dise&ntilde;ados para satisfacer las necesidades del negocio";
 choices[74][1] = "Entregar y gestionar servicios de TI";
 choices[74][2] = "Gestionar la tecnolog&iacute;a utilizada para entregar servicios";
 choices[74][3] = "Monitorizar el desempe&ntilde;o de la tecnolog&iacute;a y los procesos";
 answers[74] = 0;
 units[74] = ['101'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 10557. ";
 preguntaids[74] = 10557


