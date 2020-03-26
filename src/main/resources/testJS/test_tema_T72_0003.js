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
//  Id pregunta: 9300 Año de creación de pregunta: 2014
 questions[0]= "1)  El Servicio de Representaci&oacute;n de Workflow (Workflow Enactment Service) seg&uacute;n la Workflow Management Coalition (WfMC) se encarga de:";
 choices[0]= new Array();
 choices[0][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos,secuencia de actividades, a&ntilde;adir elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[0][1] = "El modelado y dise&ntilde;o de los procesos, el cual puede ser interpretado en tiempo de ejecuci&oacute;n por el o los motores de Workflow.";
 choices[0][2] = "La definici&oacute;n de los mecanismos requeridos por los desarrolladores de productos Workflow para implementar la comunicaci&oacute;n de un motor Workflow con otros.";
 choices[0][3] = "La interacci&oacute;n entre los participantes del flujo de trabajo y el servicio de lanzamiento de flujo de trabajo";
 answers[0] = 0;
 units[0] = ['72'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9300. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[0] = 9300


//  Id pregunta: 10708 Año de creación de pregunta: 2015
 questions[1]= "2)  Seg&uacute;n el Modelo de Referencia de Workflow de la WfMC (Workflow Management Coalition), se&ntilde;ale la INCORRECTA:";
 choices[1]= new Array();
 choices[1][0] = "WF Enacment Service es el servicio de representaci&oacute;n de workflow e interpreta la descripci&oacute;n de los procesos.";
 choices[1][1] = "El interfaz 2 establece la comunicaci&oacute;n con las aplicaciones de los clientes.";
 choices[1][2] = "La Interfaz 4 o WAPI, establece funciones de interoperabilidad e interpretaci&oacute;n com&uacute;n en la definici&oacute;n de procesos.";
 choices[1][3] = "La Interfaz 1 se encarga de la administraci&oacute;n y monitorizaci&oacute;n del flujo de trabajo.";
 answers[1] = 3;
 units[1] = ['72'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10708. ";
 preguntaids[1] = 10708


//  Id pregunta: 10721 Año de creación de pregunta: 2015
 questions[2]= "3)  Indicar cu&aacute;l de las siguientes afirmaciones es m&aacute;s id&oacute;nea para definir un sistema de Workflow.";
 choices[2]= new Array();
 choices[2][0] = "Se trata de un sistema de invocaci&oacute;n en la ejecuci&oacute;n de operaciones de entrada salida";
 choices[2][1] = "Se trata de una herramienta para mejorar la ejecuci&oacute;n y el control de los procesos de negocio";
 choices[2][2] = "Se trata de una herramienta para el dibujo de diagramas de flujo";
 choices[2][3] = "Se trata de una herramienta que nos permite establecer prioridades en una cola de trabajo";
 answers[2] = 1;
 units[2] = ['72'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 10721. ";
 preguntaids[2] = 10721


//  Id pregunta: 9355 Año de creación de pregunta: 2014
 questions[3]= "4)  Los ETL son herramientas utilizadas habitualmente en la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas herramientas?";
 choices[3]= new Array();
 choices[3][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[3][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[3][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de p&aacute;ginas HTML.";
 choices[3][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[3] = 3;
 units[3] = ['72'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9355. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[3] = 9355


//  Id pregunta: 10063 Año de creación de pregunta: 2015
 questions[4]= "5)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[4]= new Array();
 choices[4][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[4][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[4][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[4][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[4] = 3;
 units[4] = ['72'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10063. Examen TIC A2 2014";
 preguntaids[4] = 10063


//  Id pregunta: 9832 Año de creación de pregunta: 2015
 questions[5]= "6)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[5]= new Array();
 choices[5][0] = "OLAP";
 choices[5][1] = "OLTP";
 choices[5][2] = "ETL";
 choices[5][3] = "OLTA";
 answers[5] = 0;
 units[5] = ['72'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9832. ";
 preguntaids[5] = 9832


//  Id pregunta: 9299 Año de creación de pregunta: 2014
 questions[6]= "7)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[6]= new Array();
 choices[6][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[6][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[6][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[6][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[6] = 3;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9299. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[6] = 9299


//  Id pregunta: 9301 Año de creación de pregunta: 2014
 questions[7]= "8)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[7]= new Array();
 choices[7][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[7][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[7][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[7][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[7] = 3;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9301. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[7] = 9301


//  Id pregunta: 9305 Año de creación de pregunta: 2014
 questions[8]= "9)  Indique cu&aacute;l de los siguientes elementos NO se asocia a un sistema datawarehouse:";
 choices[8]= new Array();
 choices[8][0] = "Un motor de transacciones.";
 choices[8][1] = "Las herramientas de Extracci&oacute;n, Transformaci&oacute;n y Carga de datos.";
 choices[8][2] = "Las herramientas de explotaci&oacute;n anal&iacute;tica de la informaci&oacute;n.";
 choices[8][3] = "La base de datos multidimensional";
 answers[8] = 0;
 units[8] = ['72'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9305. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[8] = 9305


//  Id pregunta: 9295 Año de creación de pregunta: 2014
 questions[9]= "10)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[9]= new Array();
 choices[9][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[9][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[9][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[9][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[9] = 3;
 units[9] = ['72'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9295. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[9] = 9295


//  Id pregunta: 10062 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n la definici&oacute;n de DataWarehouse de William Inmon, se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una caracter&iacute;stica de este tipo de sistemas:";
 choices[10]= new Array();
 choices[10][0] = "Integrado: los datos deben integrarse en una estructura consistente.";
 choices[10][1] = "Tem&aacute;tico: los datos se organizan por temas.";
 choices[10][2] = "Hist&oacute;rico: una variable puede tomar distintos valores en el tiempo.";
 choices[10][3] = "Vol&aacute;til: los datos no son permanentes en el sistema.";
 answers[10] = 3;
 units[10] = ['72'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10062. Examen TIC A2 2014";
 preguntaids[10] = 10062


//  Id pregunta: 9298 Año de creación de pregunta: 2014
 questions[11]= "12)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Data Warehouse.";
 choices[11][1] = "OLAP";
 choices[11][2] = "Data Mart.";
 choices[11][3] = "Data Mining.";
 answers[11] = 2;
 units[11] = ['72'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9298. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[11] = 9298


