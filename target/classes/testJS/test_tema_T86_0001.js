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
//  Id pregunta: 3663 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica com&uacute;n de las metodolog&iacute;as de desarrollo de equipos l&oacute;gicos?:";
 choices[0]= new Array();
 choices[0][0] = "Uso de las t&eacute;cnicas gr&aacute;ficas";
 choices[0][1] = "Orden y coherencia";
 choices[0][2] = "Pruebas de aceptaci&oacute;n";
 choices[0][3] = "Diccionario de datos";
 answers[0] = 2;
 units[0] = ['84', '86'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3663. ";
 preguntaids[0] = 3663


//  Id pregunta: 3671 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes modelos de an&aacute;lisis estructurado sirve para verificar la exactitud de los otros dos modelos y para garantizar la coherencia entre las tres visiones del sistema: est&aacute;tica, din&aacute;mica y evolutiva?:";
 choices[1]= new Array();
 choices[1][0] = "DFD";
 choices[1][1] = "DED";
 choices[1][2] = "HVE";
 choices[1][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[1] = 2;
 units[1] = ['85', '86'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3671. ";
 preguntaids[1] = 3671


//  Id pregunta: 1081 Año de creación de pregunta: 2016
 questions[2]= "3)  Entre los objetivos del dise&ntilde;o de BPEL NO se encuentra:";
 choices[2]= new Array();
 choices[2][0] = "Proveer sistemas de control jer&aacute;rquicos y de estilo gr&aacute;fico, que permitan que su uso sea lo m&aacute;s fusionado posible.";
 choices[2][1] = "Soportar un m&eacute;todo de identificaci&oacute;n de instancias de procesos que permita la definici&oacute;n de identificadores a nivel de mensajes de aplicaciones.";
 choices[2][2] = "Definir procesos de negocio utilizando un lenguaje basado en XML.";
 choices[2][3] = "Definir una interpretaci&oacute;n gr&aacute;fica de los procesos.";
 answers[2] = 3;
 units[2] = ['86'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 1081. ";
 preguntaids[2] = 1081


//  Id pregunta: 3833 Año de creación de pregunta: 2002
 questions[3]= "4)  En un DFD el elemento usado para representar una actividad que transforma los flujos de entrada en otros de salida es:";
 choices[3]= new Array();
 choices[3][0] = "El programa";
 choices[3][1] = "El proceso";
 choices[3][2] = "El nodo";
 choices[3][3] = "La entidad";
 answers[3] = 1;
 units[3] = ['85', '86'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3833. ";
 preguntaids[3] = 3833


//  Id pregunta: 3616 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Cu&aacute;l no es un requisito para un software de tiempo real?";
 choices[4]= new Array();
 choices[4][0] = "Predecible.";
 choices[4][1] = "Encapsulado.";
 choices[4][2] = "Fiable.";
 choices[4][3] = "F&aacute;cil de mantener.";
 answers[4] = 1;
 units[4] = ['86'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3616. ";
 preguntaids[4] = 3616


//  Id pregunta: 1956 Año de creación de pregunta: 2016
 questions[5]= "6)  En la orientaci&oacute;n a objetos, la propiedad que permite ocultar detalles de un objeto se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Singularidad.";
 choices[5][1] = "Polimorfismo.";
 choices[5][2] = "Reusabilidad.";
 choices[5][3] = "Encapsulaci&oacute;n.";
 answers[5] = 3;
 units[5] = ['86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 1956. ";
 preguntaids[5] = 1956


//  Id pregunta: 3826 Año de creación de pregunta: 2002
 questions[6]= "7)  En los diagramas de flujo de datos se usan s&iacute;mbolos. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[6]= new Array();
 choices[6][0] = "El s&iacute;mbolo de 'proceso'";
 choices[6][1] = "El s&iacute;mbolo de 'almac&eacute;n de datos'";
 choices[6][2] = "El s&iacute;mbolo de 'entidad externa'";
 choices[6][3] = "El s&iacute;mbolo de 'decisi&oacute;n' (o alternativa)";
 answers[6] = 3;
 units[6] = ['85', '86'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3826. ";
 preguntaids[6] = 3826


//  Id pregunta: 3824 Año de creación de pregunta: 2002
 questions[7]= "8)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Esquema Conceptual";
 choices[7][1] = "Esquema Externo";
 choices[7][2] = "Esquema Interno";
 choices[7][3] = "Esquema Funcional";
 answers[7] = 1;
 units[7] = ['61', '85', '86'];
 blocks[7] = ['B2', 'B3'];
 comments[7] = "Id Pregunta: 3824. ";
 preguntaids[7] = 3824


//  Id pregunta: 1326 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[8]= new Array();
 choices[8][0] = "La persistencia.";
 choices[8][1] = "Los procesos de transformaci&oacute;n.";
 choices[8][2] = "EI flujo de la informaci&oacute;n.";
 choices[8][3] = "La herencia.";
 answers[8] = 3;
 units[8] = ['86'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 1326. ";
 preguntaids[8] = 1326


//  Id pregunta: 1953 Año de creación de pregunta: 2016
 questions[9]= "10)  Cu&aacute;l de los siguientes NO es un componente principal de un diagrama de flujo de datos o DFD:";
 choices[9]= new Array();
 choices[9][0] = "Entidad Interna.";
 choices[9][1] = "Flujo.";
 choices[9][2] = "Proceso.";
 choices[9][3] = "Almac&eacute;n de datos.";
 answers[9] = 0;
 units[9] = ['86'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 1953. ";
 preguntaids[9] = 1953


//  Id pregunta: 3801 Año de creación de pregunta: 2002
 questions[10]= "11)  En an&aacute;lisis estructurado, el principal objetivo de un DFD es:";
 choices[10]= new Array();
 choices[10][0] = "Construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[10][1] = "Representar gr&aacute;ficamente las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[10][2] = "Describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[10][3] = "Establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[10] = 0;
 units[10] = ['85', '86'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3801. ";
 preguntaids[10] = 3801


//  Id pregunta: 3804 Año de creación de pregunta: 2002
 questions[11]= "12)  En el diccionario de datos (lista organizada de todos los datos pertinentes al sistema, con un conjunto de definiciones precisas para que tanto el analista como el usuario se entiendan), la iteraci&oacute;n de elementos se representa con:";
 choices[11]= new Array();
 choices[11][0] = "&quot;[&quot; y &quot;]&quot;";
 choices[11][1] = "&quot;(&quot; y &quot;)&quot;";
 choices[11][2] = "&quot;{&quot; y &quot;}&quot;";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = 2;
 units[11] = ['85', '86'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3804. ";
 preguntaids[11] = 3804


//  Id pregunta: 3292 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Qu&eacute; son las funciones primitivas en un Diagrama de Flujo de Datos?";
 choices[12]= new Array();
 choices[12][0] = "Son aquellas funciones que no responden a eventos del sistema, que se describen en un Diagrama de Flujo de Datos para mejorar su legibilidad.";
 choices[12][1] = "Son aquellos procesos de un Diagrama de Flujo de Datos que no se descomponen m&aacute;s.";
 choices[12][2] = "Son los procesos que aparecen en el Diagrama de Contexto.";
 choices[12][3] = "Son las funciones que se conectan con los almacenes de datos en un Diagrama de Flujo de Datos.";
 answers[12] = 1;
 units[12] = ['86'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3292. ";
 preguntaids[12] = 3292


//  Id pregunta: 3720 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;Qu&eacute; debe contener de forma general un Plan de Contingencia (tambi&eacute;n denominado Plan de Desastre)?:";
 choices[13]= new Array();
 choices[13][0] = "Plan de viabilidad, procedimientos de emergencia ante fallos, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[13][1] = "Procedimientos de actuaci&oacute;n en caso de desastre, plan de copias de seguridad o de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[13][2] = "An&aacute;lisis de riesgos inform&aacute;ticos, plan de viabilidad, procedimientos de activaci&oacute;n en caso de desastre, plan de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[13][3] = "Plan de activaci&oacute;n de emergencia, procedimientos de emergencia ante fallos y procedimientos de traslado a instalaci&oacute;n alternativa";
 answers[13] = 1;
 units[13] = ['86'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3720. ";
 preguntaids[13] = 3720


//  Id pregunta: 1692 Año de creación de pregunta: 2016
 questions[14]= "15)  En un DFD (Diagrama de Flujo de Datos), &iquest;de qu&eacute; tipos pueden ser los flujos de datos?";
 choices[14]= new Array();
 choices[14][0] = "Consulta, actualizaci&oacute;n, intercambio.";
 choices[14][1] = "Consulta, modificaci&oacute;n, borrado, di&aacute;logo.";
 choices[14][2] = "Consulta, actualizaci&oacute;n, di&aacute;logo.";
 choices[14][3] = "Consulta, modificaci&oacute;n, borrado, intercambio.";
 answers[14] = 2;
 units[14] = ['86'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1692. ";
 preguntaids[14] = 1692


//  Id pregunta: 3613 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no  es de un sistema de tiempo real?";
 choices[15]= new Array();
 choices[15][0] = "Fuertes restricciones en el tiempo de respuesta.";
 choices[15][1] = "La informaci&oacute;n debe estar permanentemente actualizada.";
 choices[15][2] = "El sistema permanecer&aacute; permanentemente activo contestando a cada evento seg&uacute;n las caracter&iacute;sticas del mismo y a la disposici&oacute;n de los recursos.";
 choices[15][3] = "Alto rendimiento del sistema tanto hardware como software, funcionando conjuntamente, lo que hace que el dise&ntilde;ador se encuentre con fuertes problemas de integraci&oacute;n de diversas tecnolog&iacute;as.";
 answers[15] = 2;
 units[15] = ['86'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3613. ";
 preguntaids[15] = 3613


//  Id pregunta: 3866 Año de creación de pregunta: 2002
 questions[16]= "17)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de un almac&eacute;n de datos dentro de un diagrama de flujo de datos:";
 choices[16]= new Array();
 choices[16][0] = "No puede crear, destruir ni transformar datos";
 choices[16][1] = "No se puede comunicar con otro almac&eacute;n de datos mediante un flujo directo, siempre tiene que haber un proceso entre ambos almacenes";
 choices[16][2] = "Debe referirse el almac&eacute;n al entorno f&iacute;sico";
 choices[16][3] = "Si se transpasa por un flujo de datos el contenido completo del almac&eacute;n, este flujo no llevar&aacute; nombre";
 answers[16] = 2;
 units[16] = ['85', '86'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3866. ";
 preguntaids[16] = 3866


//  Id pregunta: 3802 Año de creación de pregunta: 2002
 questions[17]= "18)  En an&aacute;lisis estructurado, una definici&oacute;n de Historia de la Vida de las Entidades (HVE) es:";
 choices[17]= new Array();
 choices[17][0] = "Su principal objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[17][1] = "Su principal objetivo es la representaci&oacute;n gr&aacute;fica de las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[17][2] = "Su principal objetivo es describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[17][3] = "Su principal objetivo consiste en establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[17] = 2;
 units[17] = ['85', '86'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3802. ";
 preguntaids[17] = 3802


//  Id pregunta: 3705 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;l no es una caracter&iacute;stica com&uacute;n a todas las metodolog&iacute;as?:";
 choices[18]= new Array();
 choices[18][0] = "Diccionario de datos";
 choices[18][1] = "Prototipado";
 choices[18][2] = "Cubre todos los aspectos de un sistema de aplicaci&oacute;n: desde el organizativo , hasta el sistema t&eacute;cnico de apoyo";
 choices[18][3] = "An&aacute;lisis de riesgo";
 answers[18] = 1;
 units[18] = ['90', '86'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3705. ";
 preguntaids[18] = 3705


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[19]= new Array();
 choices[19][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[19][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[19][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[19][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[19] = 0;
 units[19] = ['86'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 810. AGE A1 2015";
 preguntaids[19] = 810


//  Id pregunta: 3708 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;les son los elementos de la t&eacute;cnica Historia de la Vida de las Entidades (HVE)?";
 choices[20]= new Array();
 choices[20][0] = "Entidades, eventos, efectos, primitivas, cajas vac&iacute;as.";
 choices[20][1] = "Entidades, eventos, resultados, nodos, cajas llenas.";
 choices[20][2] = "Entidades, eventos, resultados, primitivas, cajas llenas.";
 choices[20][3] = "Entidades, eventos, efectos, nodos, cajas vac&iacute;as.";
 answers[20] = 3;
 units[20] = ['86'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3708. ";
 preguntaids[20] = 3708


//  Id pregunta: 2994 Año de creación de pregunta: 2002
 questions[21]= "22)  OLTP son las siglas en ingl&eacute;s de software del tipo:";
 choices[21]= new Array();
 choices[21][0] = "Gestores de bases de datos orientadas a objetos.";
 choices[21][1] = "Gestores estandarizados de bases de datos documentales.";
 choices[21][2] = "Sistemas de Gestion Transaccional.";
 choices[21][3] = "Programas de an&aacute;lisis tipo data warehouse.";
 answers[21] = 2;
 units[21] = ['86'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 2994. ";
 preguntaids[21] = 2994


//  Id pregunta: 1958 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones referente a las caracter&iacute;sticas de los sistemas transaccionales es FALSA?";
 choices[22]= new Array();
 choices[22][0] = "No permiten la ejecuci&oacute;n concurrente de transacciones para evitar colisiones y dejar al sistema en un estado estable.";
 choices[22][1] = "Debe mantener la consistencia de los datos almacenados.";
 choices[22][2] = "Si una transacci&oacute;n es terminada con &eacute;xito, debe dejar al sistema en un estado estable.";
 choices[22][3] = "Si una transacci&oacute;n es abortada, debe restituirse el anterior estado valido de los datos.";
 answers[22] = 0;
 units[22] = ['86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1958. ";
 preguntaids[22] = 1958


//  Id pregunta: 3848 Año de creación de pregunta: 2002
 questions[23]= "24)  Entre los objetivos de los DFDs se encuentra:";
 choices[23]= new Array();
 choices[23][0] = "Hacer referencia al entorno f&iacute;sico";
 choices[23][1] = "Crear un modelo funcional del sistema";
 choices[23][2] = "Representar el &quot;c&oacute;mo se va a hacer el sistema&quot; en lugar del &quot;qu&eacute; se va a hacer en el sistema&quot;";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 1;
 units[23] = ['85', '86'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3848. ";
 preguntaids[23] = 3848


//  Id pregunta: 3680 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes nombres no se corresponde con el de una metodolog&iacute;a de desarrollo de equipos l&oacute;gicos?:";
 choices[24]= new Array();
 choices[24][0] = "MERISE";
 choices[24][1] = "SSADM";
 choices[24][2] = "SDM";
 choices[24][3] = "METHOD-1";
 answers[24] = 3;
 units[24] = ['84', '86'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3680. ";
 preguntaids[24] = 3680


//  Id pregunta: 3759 Año de creación de pregunta: 2002
 questions[25]= "26)  Dentro de un diagrama de flujos de datos, a los procesos que no necesitan descomponerse se les denomina:";
 choices[25]= new Array();
 choices[25][0] = "Procesos primitivos";
 choices[25][1] = "Procesos finales";
 choices[25][2] = "Procesos at&oacute;micos";
 choices[25][3] = "Procesos elementales";
 answers[25] = 0;
 units[25] = ['85', '86'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3759. ";
 preguntaids[25] = 3759


//  Id pregunta: 3626 Año de creación de pregunta: 2002
 questions[26]= "27)  En un sistema de tiempo real, la captura de est&iacute;mulos del entorno por el sistema se puede llevar  cabo por comprobaci&oacute;n de los dispositivos sensores cada cierto intervalo de tiempo. Esta t&eacute;cnica se denomina:";
 choices[26]= new Array();
 choices[26][0] = "Muestreo o 'polling'.";
 choices[26][1] = "Tiempo real cr&iacute;tico.";
 choices[26][2] = "Interrupci&oacute;n.";
 choices[26][3] = "Tiempo real no cr&iacute;tico.";
 answers[26] = 0;
 units[26] = ['86'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3626. ";
 preguntaids[26] = 3626


//  Id pregunta: 1586 Año de creación de pregunta: 2016
 questions[27]= "28)  En un DFD (Diagrama de Flujos de Datos), los flujos de datos que comunican procesos con almacenes pueden ser de diversos tipos. Entre ellos se encuentran los flujos de datos:";
 choices[27]= new Array();
 choices[27][0] = "De iteracci&oacute;n";
 choices[27][1] = "De di&aacute;logo";
 choices[27][2] = "De sincronizaci&oacute;n.";
 choices[27][3] = "De interrelaci&oacute;n.";
 answers[27] = 1;
 units[27] = ['86'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 1586. ";
 preguntaids[27] = 1586


//  Id pregunta: 3665 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes reglas no es una regla de construcci&oacute;n de flujos en un DFD?:";
 choices[28]= new Array();
 choices[28][0] = "Activa procesos";
 choices[28][1] = "Conecta a los dem&aacute;s elementos de un DFD";
 choices[28][2] = "El flujo no puede crear ni destruir datos";
 choices[28][3] = "Se puede asimilar el flujo de datos a una tuber&iacute;a por la que transita informaci&oacute;n";
 answers[28] = 0;
 units[28] = ['86'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3665. ";
 preguntaids[28] = 3665


//  Id pregunta: 1490 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes elementos es INCORRECTO en un Diagrama de Flujo de Datos?";
 choices[29]= new Array();
 choices[29][0] = "Un proceso en el que no entra o del que no sale ning&uacute;n flujo de datos.";
 choices[29][1] = "Un proceso que no explosiona en otro DFD de menor nivel.";
 choices[29][2] = "Un proceso del que salen exactamente los mismos campos de datos que han entrado, independientemente de que el valor de esos datos haya cambiado o no.";
 choices[29][3] = "Un proceso en el que sus datos de entrada provienen directamente de un almac&eacute;n de datos y que van a parar a otro almac&eacute;n de datos.";
 answers[29] = 0;
 units[29] = ['86'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 1490. ";
 preguntaids[29] = 1490


//  Id pregunta: 3590 Año de creación de pregunta: 2002
 questions[30]= "31)  Indicar la respuesta correcta.  El modelo orientado a los datos:";
 choices[30]= new Array();
 choices[30][0] = "Deduce el ciclo de vida de las entidades a partir del flujo de datos";
 choices[30][1] = "Deduce los procesos que debe incorporar el sistema a partir de los datos manejados";
 choices[30][2] = "Deduce los atributos de las entidades a partir de los procesos que debe realizar el sistema";
 choices[30][3] = "Todas son falsas";
 answers[30] = 3;
 units[30] = ['84', '86'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3590. ";
 preguntaids[30] = 3590


//  Id pregunta: 3614 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes funciones no es importante para un sistema operativo de tiempo real?";
 choices[31]= new Array();
 choices[31][0] = "Manejo eficaz de interrupciones.";
 choices[31][1] = "Gran manejo de memoria virtual.";
 choices[31][2] = "Mecanismos potentes y vers&aacute;tiles de comunicaci&oacute;n entre procesos.";
 choices[31][3] = "Funciones sencillas, &aacute;giles y potentes para el manejo de ficheros.";
 answers[31] = 1;
 units[31] = ['86'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3614. ";
 preguntaids[31] = 3614


//  Id pregunta: 1952 Año de creación de pregunta: 2016
 questions[32]= "33)  EI diagrama de flujo de datos o DFD:";
 choices[32]= new Array();
 choices[32][0] = "Es una t&eacute;cnica de planificaci&oacute;n y estimaci&oacute;n de proyectos.";
 choices[32][1] = "Es una t&eacute;cnica de modelizaci&oacute;n de datos.";
 choices[32][2] = "Es una t&eacute;cnica de modelizaci&oacute;n de procesos.";
 choices[32][3] = "Es una t&eacute;cnica de seguridad de datos.";
 answers[32] = 2;
 units[32] = ['86'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1952. ";
 preguntaids[32] = 1952


//  Id pregunta: 1155 Año de creación de pregunta: 2016
 questions[33]= "34)  En teor&iacute;a de colas, el modelo de disciplina de cola denominado RSS se refiere a que:";
 choices[33]= new Array();
 choices[33][0] = "Se atiende primero al cliente que antes haya llegado.";
 choices[33][1] = "Selecciona a los clientes de manera aleatoria, de acuerdo a alg&uacute;n procedimiento de prioridad o a alg&uacute;n otro orden.";
 choices[33][2] = "Sirve a los clientes igualmente, se reparte un espacio de tiempo a cada cliente.";
 choices[33][3] = "Se atiende primero al cliente que ha llegado el &uacute;ltimo.";
 answers[33] = 1;
 units[33] = ['86'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 1155. ";
 preguntaids[33] = 1155


//  Id pregunta: 3689 Año de creación de pregunta: 2002
 questions[34]= "35)  Indique la afirmaci&oacute;n falsa:";
 choices[34]= new Array();
 choices[34][0] = "El modelado entidad-relaci&oacute;n es una t&eacute;cnica para el modelado de datos";
 choices[34][1] = "Las redes de Petri son una t&eacute;cnica orientada a objetos";
 choices[34][2] = "El diagrama de flujo de datos es una t&eacute;cnica orientada a los datos";
 choices[34][3] = "El diagrama de clases es una t&eacute;cnica orientada a objetos";
 answers[34] = 2;
 units[34] = ['85', '86'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3689. ";
 preguntaids[34] = 3689


//  Id pregunta: 1603 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; diagramas de los empleados en UML (Unified Modeling Language) describen el comportamiento din&aacute;mico del sistema mediante el paso de mensajes entre los objetos del mismo?";
 choices[35]= new Array();
 choices[35][0] = "Diagramas de interacci&oacute;n.";
 choices[35][1] = "Diagramas de flujo de datos.";
 choices[35][2] = "Diagramas de casos de uso.";
 choices[35][3] = "Diagramas de estados.";
 answers[35] = 0;
 units[35] = ['86'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 1603. ";
 preguntaids[35] = 1603


//  Id pregunta: 3846 Año de creación de pregunta: 2002
 questions[36]= "37)  Entre los elementos de un diagrama de flujo de datos tenemos:";
 choices[36]= new Array();
 choices[36][0] = "Entidad externa, proceso, almac&eacute;n de datos y diagrama general";
 choices[36][1] = "Entidad externa, almac&eacute;n de datos y flujo de datos";
 choices[36][2] = "Entidad externa, almac&eacute;n de datos, proceso y flujo de datos";
 choices[36][3] = "Almac&eacute;n de datos, proceso, flujo de datos y diagrama general";
 answers[36] = 2;
 units[36] = ['85', '86'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3846. ";
 preguntaids[36] = 3846


//  Id pregunta: 3751 Año de creación de pregunta: 2002
 questions[37]= "38)  De acuerdo con el proceso de descomposici&oacute;n o explosi&oacute;n por niveles de los DFD's (Diagramas de Flujo de Datos) el primer nivel es el denominado:";
 choices[37]= new Array();
 choices[37][0] = "Diagrama del sistema";
 choices[37][1] = "Diagrama de contexto";
 choices[37][2] = "Diagrama de procesos primitivos";
 choices[37][3] = "Diagrama de top-down";
 answers[37] = 1;
 units[37] = ['85', '86'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3751. ";
 preguntaids[37] = 3751


//  Id pregunta: 3651 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta respecto al diccionario de datos?";
 choices[38]= new Array();
 choices[38][0] = "El diccionario de datos es complementario a otras t&eacute;cnicas como diagramas de flujo de datos o diagramas entidad/relaci&oacute;n";
 choices[38][1] = "En general, las entidades del diagrama entidad/relaci&oacute;n se corresponden a los almacenes del diagrama de flujo de datos y el diccionario de datos";
 choices[38][2] = "El s&iacute;mbolo &quot;@&quot; se suele utilizar como identificador o clave de acceso en el caso de almacenes";
 choices[38][3] = "Todas las respuestas anteriores son correctas";
 answers[38] = 3;
 units[38] = ['86'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3651. ";
 preguntaids[38] = 3651


//  Id pregunta: 3862 Año de creación de pregunta: 2002
 questions[39]= "40)  Indicar cu&aacute;l es una regla de construcci&oacute;n de un proceso dentro de un Diagrama de Flujo de Datos:";
 choices[39]= new Array();
 choices[39][0] = "Los procesos transforman los flujos de datos de entrada en flujos de salida de datos";
 choices[39][1] = "Se puede transformar un dato en varios mediante un proceso";
 choices[39][2] = "Se necesita siempre un proceso entre una entidad externa y un almac&eacute;n de datos";
 choices[39][3] = "Todas las anteriores son reglas de construcci&oacute;n de un proceso";
 answers[39] = 3;
 units[39] = ['85', '86'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3862. ";
 preguntaids[39] = 3862


//  Id pregunta: 2899 Año de creación de pregunta: 2002
 questions[40]= "41)  Indique la afirmaci&oacute;n falsa sobre sistemas en tiempo real.";
 choices[40]= new Array();
 choices[40][0] = "El sistema operativo de tiempo real deber&aacute; contar con gesti&oacute;n de memoria virtual.";
 choices[40][1] = "Los sistemas de tiempo real se basan en la realimentaci&oacute;n de la informaci&oacute;n.";
 choices[40][2] = "El sistema deber&aacute; permanecer pr&aacute;cticamente inactivo para poder atender con la mayor rapidez posible cualquier evento de entrada.";
 choices[40][3] = "El sistema operativo de tiempo real deber&aacute; contar con bloqueo de los procesos cuando est&eacute;n espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 answers[40] = 0;
 units[40] = ['86'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 2899. ";
 preguntaids[40] = 2899


//  Id pregunta: 1559 Año de creación de pregunta: 2016
 questions[41]= "42)  En UML 2.0 hay 13 tipos diferentes de diagramas. Estos se pueden dividir en: Diagramas de estructura y de Comportamiento. &iquest;Cu&aacute;l de los siguientes es un diagrama de comportamiento?";
 choices[41]= new Array();
 choices[41][0] = "Diagrama de clases.";
 choices[41][1] = "Diagrama de casos de uso.";
 choices[41][2] = "Diagrama de componentes.";
 choices[41][3] = "Diagrama de paquetes.";
 answers[41] = 1;
 units[41] = ['86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 1559. ";
 preguntaids[41] = 1559


//  Id pregunta: 3777 Año de creación de pregunta: 2002
 questions[42]= "43)  El Diccionario de Datos es utilizado por:";
 choices[42]= new Array();
 choices[42][0] = "El administrador de la base de datos y los programadores";
 choices[42][1] = "Los analistas y los programadores";
 choices[42][2] = "Los usuarios finales de las aplicaciones";
 choices[42][3] = "Los usuarios remotos";
 answers[42] = 0;
 units[42] = ['60', '85', '86'];
 blocks[42] = ['B2', 'B3'];
 comments[42] = "Id Pregunta: 3777. ";
 preguntaids[42] = 3777


//  Id pregunta: 3615 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un sistema de tiempo real?";
 choices[43]= new Array();
 choices[43][0] = "Control de seguimiento de sat&eacute;lites.";
 choices[43][1] = "Control de edificios inteligentes.";
 choices[43][2] = "N&oacute;mina de una empresa.";
 choices[43][3] = "Reserva de billetes de una compa&ntilde;&iacute;a de transportes interurbana.";
 answers[43] = 2;
 units[43] = ['86'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3615. ";
 preguntaids[43] = 3615


//  Id pregunta: 1154 Año de creación de pregunta: 2016
 questions[44]= "45)  El algoritmo de ordenaci&oacute;n que hace uso de un elemento pivote es:";
 choices[44]= new Array();
 choices[44][0] = "Bubblesort.";
 choices[44][1] = "Heapsort.";
 choices[44][2] = "Quicksort.";
 choices[44][3] = "ShellSort.";
 answers[44] = 2;
 units[44] = ['86'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 1154. ";
 preguntaids[44] = 1154


//  Id pregunta: 3602 Año de creación de pregunta: 2004
 questions[45]= "46)  Son comunes a todas las metodolog&iacute;as de desarrollo de SW";
 choices[45]= new Array();
 choices[45][0] = "Uso de t&eacute;cnicas Gr&aacute;ficas";
 choices[45][1] = "Documentaci&oacute;n";
 choices[45][2] = "Diccionario de datos";
 choices[45][3] = "todas las anteriores";
 answers[45] = 3;
 units[45] = ['84', '86'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3602. ";
 preguntaids[45] = 3602


//  Id pregunta: 3667 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas tiene una visi&oacute;n evolutiva?:";
 choices[46]= new Array();
 choices[46][0] = "Diagrama de flujo de datos";
 choices[46][1] = "Diagrama de estructura de datos";
 choices[46][2] = "Historia de la vida de las entidades";
 choices[46][3] = "Ninguna de las anteriores, ya que son t&eacute;cnicas orientadas a datos o flujos";
 answers[46] = 2;
 units[46] = ['85', '86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3667. ";
 preguntaids[46] = 3667


//  Id pregunta: 3618 Año de creación de pregunta: 2002
 questions[47]= "48)  DARTS es el acr&oacute;nimo de:";
 choices[47]= new Array();
 choices[47][0] = "Data Redesign for Transactional Systems.";
 choices[47][1] = "Design Aproach for Real Time Systems.";
 choices[47][2] = "Design Aproach for Real Transactional Systems.";
 choices[47][3] = "No es acr&oacute;nimo de nada.";
 answers[47] = 1;
 units[47] = ['86'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3618. ";
 preguntaids[47] = 3618


//  Id pregunta: 1047 Año de creación de pregunta: 2016
 questions[48]= "49)  En relaci&oacute;n con los entornos de workflow indique la afirmaci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "A partir de la representaci&oacute;n de un proceso en notaci&oacute;n BPMN puede obtenerse su especificaci&oacute;n en BPEL y viceversa.";
 choices[48][1] = "WS-BPEL v 2.0 ya permite incorporar al modelado los procesos manuales.";
 choices[48][2] = "BPMN incluye tanto el modelado de la secuencia de actividades como los datos y mensajes intercambiados entre los participantes.";
 choices[48][3] = "XPDL y BPEL son implementaciones distintas de BPMN, XPDL basada en XML y BPEL en web services.";
 answers[48] = 2;
 units[48] = ['86'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 1047. ";
 preguntaids[48] = 1047


//  Id pregunta: 1826 Año de creación de pregunta: 2016
 questions[49]= "50)  En la programaci&oacute;n orientada a objetos existe el concepto de polimorfismo. Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[49]= new Array();
 choices[49][0] = "El polimorfismo es una caracter&iacute;stica que permite que m&eacute;todos diferentes, asociados a objetos distintos, puedan compartir el mismo nombre.";
 choices[49][1] = "El polimorfismo es una caracter&iacute;stica que permite que atributos diferentes, asociados a m&eacute;todos distintos, puedan compartir el mismo nombre.";
 choices[49][2] = "El polimorfismo es una caracter&iacute;stica que permite que objetos diferentes, asociados a clases distintas, puedan compartir el mismo nombre.";
 choices[49][3] = "Ninguna de las opciones es correcta.";
 answers[49] = 0;
 units[49] = ['86'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 1826. ";
 preguntaids[49] = 1826


//  Id pregunta: 3821 Año de creación de pregunta: 2002
 questions[50]= "51)  En la realizaci&oacute;n de DFDs:";
 choices[50]= new Array();
 choices[50][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[50][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[50][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[50][3] = "Todas las respuestas anteriores son correctas";
 answers[50] = 3;
 units[50] = ['85', '86'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3821. ";
 preguntaids[50] = 3821


//  Id pregunta: 3624 Año de creación de pregunta: 2002
 questions[51]= "52)  En los sistemas de tiempo real, &iquest;qu&eacute; es m&aacute;s cr&iacute;tico?";
 choices[51]= new Array();
 choices[51][0] = "Fuertes restricciones del tiempo de respuesta.";
 choices[51][1] = "Informaci&oacute;n permanentemente actualizada.";
 choices[51][2] = "Alto rendimiento del sistema.";
 choices[51][3] = "La fiabilidad.";
 answers[51] = 0;
 units[51] = ['86'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3624. ";
 preguntaids[51] = 3624


//  Id pregunta: 3627 Año de creación de pregunta: 2002
 questions[52]= "53)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[52][1] = "Cuando acaba la rutina que los actualiza.";
 choices[52][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[52][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[52] = 3;
 units[52] = ['60', '61', '86'];
 blocks[52] = ['B2', 'B3'];
 comments[52] = "Id Pregunta: 3627. ";
 preguntaids[52] = 3627


//  Id pregunta: 3765 Año de creación de pregunta: 2002
 questions[53]= "54)  Diferentes t&eacute;cnicas para expresar la l&oacute;gica interna de los procesos primitivos son:";
 choices[53]= new Array();
 choices[53][0] = "Lenguaje narrativo, tablas de decisi&oacute;n y pseudoc&oacute;digo";
 choices[53][1] = "Pre/post condiciones, diagramas de flujo, lenguajes formales";
 choices[53][2] = "Todas las anteriores son t&eacute;cnicas usadas v&aacute;lidas";
 choices[53][3] = "Ninguna de las anteriores es una t&eacute;cnica usada v&aacute;lida";
 answers[53] = 2;
 units[53] = ['85', '86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3765. ";
 preguntaids[53] = 3765


//  Id pregunta: 3780 Año de creación de pregunta: 2002
 questions[54]= "55)  El flujo de datos de un DFD:";
 choices[54]= new Array();
 choices[54][0] = "Tiene siempre flechas";
 choices[54][1] = "No tiene por qu&eacute; existir";
 choices[54][2] = "S&oacute;lo conecta procesos";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = 3;
 units[54] = ['85', '86'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3780. ";
 preguntaids[54] = 3780


//  Id pregunta: 1591 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es elemento de un Diagrama de Flujo de Datos (DFD)?:";
 choices[55]= new Array();
 choices[55][0] = "Proceso.";
 choices[55][1] = "Entidad Externa.";
 choices[55][2] = "Entidad Interna.";
 choices[55][3] = "Almac&eacute;n de datos.";
 answers[55] = 2;
 units[55] = ['86'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1591. ";
 preguntaids[55] = 1591


//  Id pregunta: 2547 Año de creación de pregunta: 2004
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con un sistema de workflow?";
 choices[56]= new Array();
 choices[56][0] = "Facilidad de enrutamiento";
 choices[56][1] = "Monitorizaci&oacute;n y control";
 choices[56][2] = "Gesti&oacute;n de procedimientos";
 choices[56][3] = "Control de responsabilidades";
 answers[56] = 3;
 units[56] = ['86'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 2547. ";
 preguntaids[56] = 2547


//  Id pregunta: 3834 Año de creación de pregunta: 2002
 questions[57]= "58)  En un DFD, se&ntilde;alar aquella situaci&oacute;n que no es correcta:";
 choices[57]= new Array();
 choices[57][0] = "Una entidad externa se relaciona con un proceso mediante uno o varios flujos de datos";
 choices[57][1] = "Un almac&eacute;n se repite en varios niveles de DFDs";
 choices[57][2] = "Dos procesos se pueden comunicar, enviando datos de uno a otro, siempre que lacomunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[57][3] = "Un flujo de datos entra en un proceso que s&oacute;lo realiza la transformaci&oacute;n de dividir el flujo entrante en dos flujos salientes";
 answers[57] = 2;
 units[57] = ['85', '86'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3834. ";
 preguntaids[57] = 3834


//  Id pregunta: 3774 Año de creación de pregunta: 2002
 questions[58]= "59)  El diagrama de contexto de un DFD contiene:";
 choices[58]= new Array();
 choices[58][0] = "Un &uacute;nico proceso";
 choices[58][1] = "Exclusivamente una entidad de procedencia y otra de destino";
 choices[58][2] = "Procesos diferentes cuando tiene que representar funciones diferentes";
 choices[58][3] = "Un &uacute;nico fichero de datos";
 answers[58] = 0;
 units[58] = ['85', '86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3774. ";
 preguntaids[58] = 3774


//  Id pregunta: 3074 Año de creación de pregunta: 2002
 questions[59]= "60)  Un lenguaje de programaci&oacute;n en el que s&oacute;lo se especifica lo que quiere llevarse a cabo en lugar de indicar los pasos a dar para llevarlo a cabo, se denomina:";
 choices[59]= new Array();
 choices[59][0] = "No procedural.";
 choices[59][1] = "Simb&oacute;lico.";
 choices[59][2] = "Orientado al objetos.";
 choices[59][3] = "Procedural.";
 answers[59] = 0;
 units[59] = ['85', '86', '89'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3074. ";
 preguntaids[59] = 3074


//  Id pregunta: 3620 Año de creación de pregunta: 2002
 questions[60]= "61)  El par&aacute;metro m&aacute;s importante de un sistema en tiempo real es:";
 choices[60]= new Array();
 choices[60][0] = "La tasa de errores.";
 choices[60][1] = "El jitter.";
 choices[60][2] = "El retardo m&aacute;ximo.";
 choices[60][3] = "La velocidad de transmisi&oacute;n.";
 answers[60] = 2;
 units[60] = ['86'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 3620. ";
 preguntaids[60] = 3620


//  Id pregunta: 3681 Año de creación de pregunta: 2002
 questions[61]= "62)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de una entidad externa dentro de un diagrama de flujo de datos:";
 choices[61]= new Array();
 choices[61][0] = "Representa procesos de aplicaci&oacute;n que no pertenecen al del estudio";
 choices[61][1] = "No est&aacute; permitido que se comuniquen entre s&iacute; las entidades externas a trav&eacute;s de flujos de datos";
 choices[61][2] = "Pueden aparecer en los distintos niveles de un DFD, pero se recomienda que s&oacute;lo aparezcan en el nivel cero";
 choices[61][3] = "Se pueden representar varias veces en el mismo gr&aacute;fico para evitar entrecruzamiento de l&iacute;neas";
 answers[61] = 0;
 units[61] = ['85', '86'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 3681. ";
 preguntaids[61] = 3681


//  Id pregunta: 3835 Año de creación de pregunta: 2002
 questions[62]= "63)  En un diagrama de flujo de datos:";
 choices[62]= new Array();
 choices[62][0] = "Una entidad externa puede aparecer en cualquier diagrama de cualquier nivel";
 choices[62][1] = "Una entidad externa nunca se relaciona mediante un flujo directamente con un almac&eacute;n de datos";
 choices[62][2] = "Se entiende por 'cuadre de flujos netos' el que un proceso tenga el mismo n&uacute;mero de flujos de entrada que de salida";
 choices[62][3] = "Son ciertas las respuestas 'a' y 'b'";
 answers[62] = 3;
 units[62] = ['85', '86'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3835. ";
 preguntaids[62] = 3835


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a los diagramas de flujos de datos (DFD):";
 choices[63]= new Array();
 choices[63][0] = "Una entidad externa se puede conectar directamente a un almac&eacute;n de datos.";
 choices[63][1] = "Los almacenes permiten crear y transformar datos.";
 choices[63][2] = "Los procesos primitivos son aquellos procesos que no necesitan m&aacute;s descomposici&oacute;n.";
 choices[63][3] = "Loos flujos de datos que comunican procesos pueden ser &uacute;nicamente de di&aacute;logo.";
 answers[63] = 2;
 units[63] = ['86'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 812. AGE A2 2015";
 preguntaids[63] = 812


//  Id pregunta: 1592 Año de creación de pregunta: 2016
 questions[64]= "65)  En un diagrama de flujo de datos";
 choices[64]= new Array();
 choices[64][0] = "El proceso nunca es el origen ni el final de los datos.";
 choices[64][1] = "Se representan las relaciones entre las entidades externas.";
 choices[64][2] = "Los almacenes pueden estar comunicados entre s&iacute;.";
 choices[64][3] = "No es necesario reflejar todos los flujos de datos en el diagrama que detalla a un proceso.";
 answers[64] = 0;
 units[64] = ['86'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 1592. ";
 preguntaids[64] = 1592


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[65]= new Array();
 choices[65][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[65][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[65][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[65][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[65] = 1;
 units[65] = ['86'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 811. AGE A1 2015";
 preguntaids[65] = 811


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[66]= "67)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[66]= new Array();
 choices[66][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[66][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[66][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[66][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[66] = 3;
 units[66] = ['86'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 809. AGE A1 2015";
 preguntaids[66] = 809


//  Id pregunta: 3628 Año de creación de pregunta: 2002
 questions[67]= "68)  Indicar cu&aacute;l no es un requisito que deba reunir el software de tiempo real.";
 choices[67]= new Array();
 choices[67][0] = "Sincronizaci&oacute;n y divisi&oacute;n en tareas.";
 choices[67][1] = "Eficiente.";
 choices[67][2] = "Modular.";
 choices[67][3] = "Facilidad de mantenimiento.";
 answers[67] = 1;
 units[67] = ['86'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3628. ";
 preguntaids[67] = 3628


//  Id pregunta: 3586 Año de creación de pregunta: 2004
 questions[68]= "69)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?";
 choices[68]= new Array();
 choices[68][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico";
 choices[68][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico";
 choices[68][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico; se realiza de forma conjunta";
 choices[68][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o f&iacute;sico";
 answers[68] = 0;
 units[68] = ['84', '86'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3586. Pregunta Junta Andalucia - A";
 preguntaids[68] = 3586


//  Id pregunta: 3541 Año de creación de pregunta: 2004
 questions[69]= "70)  Son elementos de un DFD:";
 choices[69]= new Array();
 choices[69][0] = "Eventos, nodos, entidades externas, flujos de datos";
 choices[69][1] = "Eventos, entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[69][2] = "Entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[69][3] = "Entidades externas, nodos, flujos de datos";
 answers[69] = 2;
 units[69] = ['86'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3541. Similar a examen TIC MAP A 2004";
 preguntaids[69] = 3541


//  Id pregunta: 3670 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes es un objetivo de la Historia de la Vida de las Entidades (HVE) dentro del an&aacute;lisis estructurado?:";
 choices[70]= new Array();
 choices[70][0] = "Obtener un registro de la secuencia de los cambios de las entidades con el tiempo";
 choices[70][1] = "Establecer los estados posibles de las entidades para que tengan lugar transacciones externas, as&iacute; como los cambios de estado de las entidades originadas por dichas transacciones";
 choices[70][2] = "Los dos anteriores son objetivos de la HVE";
 choices[70][3] = "Todas las anteriores respuestas son falsas";
 answers[70] = 2;
 units[70] = ['85', '86'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3670. ";
 preguntaids[70] = 3670


//  Id pregunta: 3255 Año de creación de pregunta: 2003
 questions[71]= "72)  En los sistemas de aplicaciones transaccionales online (OLTP), &iquest;como se define el concepto de throughput?:";
 choices[71]= new Array();
 choices[71][0] = "Mayor tiempo de respuesta por transacci&oacute;n.";
 choices[71][1] = "Cantidad de trabajo realizada en un determinado tiempo.";
 choices[71][2] = "Unidad m&iacute;nima de recursos f&iacute;sicos necesarios para ejecutar una transacci&oacute;n.";
 choices[71][3] = "N&uacute;mero de hilos (threads) de ejecuci&oacute;n paralela de transacciones.";
 answers[71] = 1;
 units[71] = ['86'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3255. Junta Andaluc&iacute;a";
 preguntaids[71] = 3255


//  Id pregunta: 1954 Año de creación de pregunta: 2016
 questions[72]= "73)  En un diagrama de flujo de datos:";
 choices[72]= new Array();
 choices[72][0] = "Un almac&eacute;n puede realizar un flujo de datos tanto hacia otro almac&eacute;n como hacia un proceso.";
 choices[72][1] = "Un almac&eacute;n puede realizar un flujo de datos tanto hacia una entidad interna como hacia un proceso.";
 choices[72][2] = "Un almac&eacute;n s&oacute;lo puede realizar un flujo de datos hacia un proceso.";
 choices[72][3] = "Un proceso s&oacute;lo puede realizar un flujo de datos hacia un almac&eacute;n.";
 answers[72] = 2;
 units[72] = ['86'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 1954. ";
 preguntaids[72] = 1954


//  Id pregunta: 1691 Año de creación de pregunta: 2016
 questions[73]= "74)  Cu&aacute;l de las siguientes reglas NO se es necesario cumplir para conseguir que un Diagrama de Flujo de Datos (DFD) sea consistente:";
 choices[73]= new Array();
 choices[73][0] = "Que no falten flujos de datos de entrada o salida que acompa&ntilde;aban al proceso del nivel superior.";
 choices[73][1] = "Que no aparezca alg&uacute;n flujo que no estuviese ya asociado al proceso de nivel superior.";
 choices[73][2] = "Que todos los elementos del DFD resultante deben estar conectados directa o indirectamente con los flujos del proceso origen.";
 choices[73][3] = "Que todos los flujos de control de procesos provengan s&oacute;lo de procesos del mismo nivel.";
 answers[73] = 3;
 units[73] = ['86'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1691. ";
 preguntaids[73] = 1691


//  Id pregunta: 1153 Año de creación de pregunta: 2016
 questions[74]= "75)  Elija la respuesta correcta con respecto a los grafos:";
 choices[74]= new Array();
 choices[74][0] = "Un &aacute;rbol es un grafo dirigido y ac&iacute;clico.";
 choices[74][1] = "Un grafo est&aacute; completamente conectado si existe como m&iacute;nimo un camino entre cualquier par de v&eacute;rtices distintos.";
 choices[74][2] = "En un grafo el grado interior de un v&eacute;rtice es el n&uacute;mero de aristas que llegan a &eacute;l.";
 choices[74][3] = "La lista de adyacencia es una lista donde las filas y las columnas hacen referencia a los v&eacute;rtices para almacenar en cada casilla la longitud entre cada par de v&eacute;rtices del grafo.";
 answers[74] = 2;
 units[74] = ['86'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 1153. ";
 preguntaids[74] = 1153


