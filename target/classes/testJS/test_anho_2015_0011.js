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
//  Id pregunta: 10589 Año de creación de pregunta: 2015
 questions[0]= "1)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio decide qu&eacute; servicios deber&iacute;an ser ofrecidos y a qui&eacute;nes se les va a ofrecer?";
 choices[0]= new Array();
 choices[0][0] = "Mejora continua del servicio";
 choices[0][1] = "Operaci&oacute;n del servicio";
 choices[0][2] = "Dise&ntilde;o del servicio";
 choices[0][3] = "Estrategia del servicio";
 answers[0] = 3;
 units[0] = ['101'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 10589. ";
 preguntaids[0] = 10589


//  Id pregunta: 10540 Año de creación de pregunta: 2015
 questions[1]= "2)  Cu&aacute;l es el significado de las sigla RIP";
 choices[1]= new Array();
 choices[1][0] = "Routing Improved Protocol";
 choices[1][1] = "Routing Inner Protocol";
 choices[1][2] = "Routing Information Protocol";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = 2;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10540. ";
 preguntaids[1] = 10540


//  Id pregunta: 10551 Año de creación de pregunta: 2015
 questions[2]= "3)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el objetivo principal del contenido del Cat&aacute;logo de Servicios?";
 choices[2]= new Array();
 choices[2][0] = "Ofrecer informaci&oacute;n sobre todos los servicios";
 choices[2][1] = "Ofrecer informaci&oacute;n confiable de los servicios operativos y en desarrollo";
 choices[2][2] = "Tener informaci&oacute;n sobre la infraestructura";
 choices[2][3] = "Analizar inversiones en servicios";
 answers[2] = 1;
 units[2] = ['101'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 10551. ";
 preguntaids[2] = 10551


//  Id pregunta: 10583 Año de creación de pregunta: 2015
 questions[3]= "4)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta para todos los procesos?";
 choices[3]= new Array();
 choices[3][0] = "Definen funciones como parte de su dise&ntilde;o";
 choices[3][1] = "Entregan resultados al cliente o a interesados";
 choices[3][2] = "Son llevados a cabo por un proveedor de servicios externo, en apoyo a un cliente";
 choices[3][3] = "Son unidades de organizaciones responsables de resultados espec&iacute;ficos";
 answers[3] = 1;
 units[3] = ['101'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 10583. ";
 preguntaids[3] = 10583


//  Id pregunta: 10599 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;En qu&eacute; libro de ITIL v3 se pueden encontrar las descripciones detalladas de la Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de Suministradores?";
 choices[4]= new Array();
 choices[4][0] = "Estrategia del Servicio";
 choices[4][1] = "Dise&ntilde;o del Servicio";
 choices[4][2] = "Transici&oacute;n del Servicio";
 choices[4][3] = "Operaci&oacute;n del Servicio";
 answers[4] = 1;
 units[4] = ['101'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10599. ";
 preguntaids[4] = 10599


//  Id pregunta: 10580 Año de creación de pregunta: 2015
 questions[5]= "6)  Seg&uacute;n ITIL v3, &iquest;una petici&oacute;n de un cliente deber&iacute;a ser cumplida SIEMPRE?";
 choices[5]= new Array();
 choices[5][0] = "S&iacute;, si el cliente es externo, ya que est&aacute; pagando por el servicio";
 choices[5][1] = "No si el cliente es interno, ya que no siempre paga por el servicio";
 choices[5][2] = "No, es responsabilidad del proveedor TI llevar a cabo las debidas diligencias antes de que la petici&oacute;n sea cumplida";
 choices[5][3] = "S&iacute;, el proveedor del servicio deber&iacute;a asegurarse de que todos las peticiones para nuevos servicios sean cumplidas";
 answers[5] = 2;
 units[5] = ['101'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 10580. ";
 preguntaids[5] = 10580


//  Id pregunta: 10547 Año de creación de pregunta: 2015
 questions[6]= "7)  En cuanto a la segmentaci&oacute;n de dominios en una red se&ntilde;ale la verdadera";
 choices[6]= new Array();
 choices[6][0] = "Un switch segmenta dominios de colisi&oacute;n y de broadcast";
 choices[6][1] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n de manera f&iacute;sica y de broadcast de manera l&oacute;gica";
 choices[6][2] = "Un router segmenta dominios de broadcast de manera f&iacute;sica";
 choices[6][3] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n y de broadcast de manera f&iacute;sica";
 answers[6] = 2;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10547. ";
 preguntaids[6] = 10547


//  Id pregunta: 10544 Año de creación de pregunta: 2015
 questions[7]= "8)  En cuanto al formato de la cabecera IPv6, se&ntilde;ale la opci&oacute;n verdadera";
 choices[7]= new Array();
 choices[7][0] = "4 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[7][1] = "4 bits de versi&oacute;n, 20 bits de clase de tr&aacute;fico, 8 etiqueta de flujo";
 choices[7][2] = "8 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[7][3] = "4 bits de versi&oacute;n, 4 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 answers[7] = 0;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10544. ";
 preguntaids[7] = 10544


//  Id pregunta: 10595 Año de creación de pregunta: 2015
 questions[8]= "9)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la descripci&oacute;n correcta de las cuatro Ps del Dise&ntilde;o del Servicio?";
 choices[8]= new Array();
 choices[8][0] = "Un proceso de cuatro pasos para el dise&ntilde;o de una gesti&oacute;n del servicio efectiva";
 choices[8][1] = "Una definici&oacute;n del personal y los productos requeridos para un dise&ntilde;o exitoso";
 choices[8][2] = "Una serie de preguntas que deben hacerse cuando se revisan las especificaciones de dise&ntilde;o";
 choices[8][3] = "Cuatro &aacute;reas principales que deben ser consideradas durante el Dise&ntilde;o del Servicio";
 answers[8] = 3;
 units[8] = ['101'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 10595. ";
 preguntaids[8] = 10595


//  Id pregunta: 10594 Año de creación de pregunta: 2015
 questions[9]= "10)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes no es un prop&oacute;sito u objetivo de la Gesti&oacute;n de la Disponibilidad?";
 choices[9]= new Array();
 choices[9][0] = "Monitorizar e informar sobre la disponibilidad de componentes";
 choices[9][1] = "Asegurar que la disponibilidad de los servicios se ajusta a las necesidades acordadas del negocio";
 choices[9][2] = "Evaluar el impacto de los cambios sobre el Plan de Disponibilidad";
 choices[9][3] = "Asegurar que los planes de continuidad del negocio est&aacute;n alineados con objetivos del negocio";
 answers[9] = 3;
 units[9] = ['101'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10594. ";
 preguntaids[9] = 10594


//  Id pregunta: 10579 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones respecto de la base de datos de errores conocidos (KEDB) es la mejor?";
 choices[10]= new Array();
 choices[10][0] = "La KEDB es la misma base de datos que el sistema de gesti&oacute;n del conocimiento del servicio (SKMS)";
 choices[10][1] = "La KEDB deber&iacute;a de usarse durante la fase de diagn&oacute;stico de incidencias para intentar acelerar el proceso de resoluci&oacute;n";
 choices[10][2] = "Debe tenerse cuidado para evitar duplicar registros en la KEDB. Esto puede ser realizado al ser posible dar acceso de creaci&oacute;n de nuevos registros a muchos t&eacute;cnicos";
 choices[10][3] = "Acceder a la KEDB deber&iacute;a estar limitado al centro de servicio a usuarios";
 answers[10] = 1;
 units[10] = ['101'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10579. ";
 preguntaids[10] = 10579


//  Id pregunta: 10597 Año de creación de pregunta: 2015
 questions[11]= "12)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes es un prop&oacute;sito b&aacute;sico de la gesti&oacute;n de relaciones con el negocio?";
 choices[11]= new Array();
 choices[11][0] = "Llevar a cabo actividades operacionales para dar soporte de servicios";
 choices[11][1] = "Asegurar que todos los objetivos dentro del acuerdo de nivel de servicio se cumplan";
 choices[11][2] = "Maximizar el valor del contrato y la eficiencia operacional de los servicios que son entregados";
 choices[11][3] = "Entender las necesidades del cliente y asegurar que se cumplen";
 answers[11] = 3;
 units[11] = ['101'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 10597. ";
 preguntaids[11] = 10597


//  Id pregunta: 10564 Año de creación de pregunta: 2015
 questions[12]= "13)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre un sistema de gesti&oacute;n de configuraci&oacute;n (CMS) es la correcta?";
 choices[12]= new Array();
 choices[12][0] = "El CMS no debe contener datos corporativos acerca de los clientes y usuarios";
 choices[12][1] = "Puede haber m&aacute;s de un CMS";
 choices[12][2] = "No debe haber m&aacute;s de una base de datos de gesti&oacute;n de la configuraci&oacute;n (CMDB)";
 choices[12][3] = "Aunque una organizaci&oacute;n externalice sus servicios de TI tiene la necesidad de un CMS";
 answers[12] = 3;
 units[12] = ['101'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 10564. ";
 preguntaids[12] = 10564


//  Id pregunta: 10572 Año de creación de pregunta: 2015
 questions[13]= "14)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; significa &ldquo;Garant&iacute;a de un servicio&rdquo;?";
 choices[13]= new Array();
 choices[13][0] = "El servicio se ajusta al prop&oacute;sito";
 choices[13][1] = "No habr&aacute; fallas en las aplicaciones ni en la infraestructura asociada al servicio";
 choices[13][2] = "Todos los problemas relacionados con el servicio se solucionan gratuitamente durante un per&iacute;odo determinado de tiempo";
 choices[13][3] = "A los clientes se les aseguran ciertos niveles de disponibilidad, capacidad, continuidad y seguridad";
 answers[13] = 3;
 units[13] = ['101'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 10572. ";
 preguntaids[13] = 10572


//  Id pregunta: 10552 Año de creación de pregunta: 2015
 questions[14]= "15)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[14]= new Array();
 choices[14][0] = "Entregar servicios acordados";
 choices[14][1] = "Contratar proveedores TI";
 choices[14][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[14][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[14] = 2;
 units[14] = ['101'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 10552. ";
 preguntaids[14] = 10552


//  Id pregunta: 10538 Año de creación de pregunta: 2015
 questions[15]= "16)  De los perfiles creados por WS-I indique cu&aacute;l no existe";
 choices[15]= new Array();
 choices[15][0] = "WS-I Basic security profile";
 choices[15][1] = "WS-I Reliable secure profile";
 choices[15][2] = "WS-I Extended Reliable profile";
 choices[15][3] = "WS-I Basic profile";
 answers[15] = 2;
 units[15] = ['55'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 10538. ";
 preguntaids[15] = 10538


//  Id pregunta: 10532 Año de creación de pregunta: 2015
 questions[16]= "17)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[16]= new Array();
 choices[16][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[16][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[16][2] = "ISO 9001 consta de ocho secciones";
 choices[16][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[16] = 0;
 units[16] = ['98'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 10532. ";
 preguntaids[16] = 10532


//  Id pregunta: 10531 Año de creación de pregunta: 2015
 questions[17]= "18)  Se&ntilde;ale el tipo de proyecto que no est&aacute; entre los contemplados por COCOMO";
 choices[17]= new Array();
 choices[17][0] = "Empotrado";
 choices[17][1] = "Org&aacute;nico";
 choices[17][2] = "Semiacoplado";
 choices[17][3] = "Semiempotrado";
 answers[17] = 3;
 units[17] = ['94'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10531. ";
 preguntaids[17] = 10531


//  Id pregunta: 10549 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n el Modelo Entidad/Relaci&oacute;n, se&ntilde;ale cu&aacute;l no se encuentra entre las caracter&iacute;sticas que caracterizan una relaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Nombre";
 choices[18][1] = "Tipo de correspondencia";
 choices[18][2] = "Cardinalidad";
 choices[18][3] = "Identificaci&oacute;n";
 answers[18] = 3;
 units[18] = ['85'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10549. ";
 preguntaids[18] = 10549


//  Id pregunta: 10560 Año de creación de pregunta: 2015
 questions[19]= "20)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es la MEJOR descripci&oacute;n de un acuerdo de nivel operativo (OLA)?";
 choices[19]= new Array();
 choices[19][0] = "Un acuerdo entre un proveedor de servicios de TI y otra parte de la misma organizaci&oacute;n que colabora en la prestaci&oacute;n de servicios";
 choices[19][1] = "Un acuerdo escrito entre el proveedor de servicios de TI y sus clientes, el cual define las metas clave y responsabilidades de ambas partes";
 choices[19][2] = "Un acuerdo entre dos proveedores de servicios sobre los niveles de servicio requeridos por el cliente";
 choices[19][3] = "Un acuerdo entre un Centro de Servicios externo y el cliente de TI acerca de los tiempos de respuesta y de reparaci&oacute;n";
 answers[19] = 0;
 units[19] = ['101'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 10560. ";
 preguntaids[19] = 10560


//  Id pregunta: 10577 Año de creación de pregunta: 2015
 questions[20]= "21)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones respecto a funciones es correcta?: 1. Pueden incluir herramientas; 2. Son grupos que utilizan recursos para llevar a cabo una o m&aacute;s actividades; 3. Una persona o grupo puede desarrollar m&uacute;ltiples funciones; 4. Son m&aacute;s caras de implantar comparado con los procesos";
 choices[20]= new Array();
 choices[20][0] = "Solo 1, 2 y 3";
 choices[20][1] = "Solo 1, 2 y 4";
 choices[20][2] = "Todas las anteriores";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 0;
 units[20] = ['101'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 10577. ";
 preguntaids[20] = 10577


//  Id pregunta: 10546 Año de creación de pregunta: 2015
 questions[21]= "22)  Las redes conmutadas ethernet, tienen una serie de ventajas. Se&ntilde;ale la que no se encuentra entre ellas";
 choices[21]= new Array();
 choices[21][0] = "Redes half-duplex";
 choices[21][1] = "Autonegociaci&oacute;n";
 choices[21][2] = "Trunking";
 choices[21][3] = "Uso del comando pause";
 answers[21] = 0;
 units[21] = ['102'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10546. ";
 preguntaids[21] = 10546


//  Id pregunta: 10558 Año de creación de pregunta: 2015
 questions[22]= "23)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de registrar las relaciones entre los componentes del servicio?";
 choices[22]= new Array();
 choices[22][0] = "Gesti&oacute;n de niveles del servicio";
 choices[22][1] = "Gesti&oacute;n de porfolio de servicios";
 choices[22][2] = "Gesti&oacute;n de activos y configuraci&oacute;n del servicio (SACM)";
 choices[22][3] = "Gesti&oacute;n de incidencias";
 answers[22] = 2;
 units[22] = ['101'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10558. ";
 preguntaids[22] = 10558


//  Id pregunta: 10568 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos son las caracter&iacute;sticas claves que contribuyen al &eacute;xito de ITIL?: 1. Es neutral respecto a fabricantes y vendedores; 2. No es prescriptivo; 3. Es una mejor pr&aacute;ctica; 4. Es un est&aacute;ndar";
 choices[23]= new Array();
 choices[23][0] = "Solo 3";
 choices[23][1] = "Solo 1, 2 y 3";
 choices[23][2] = "Todos los anteriores";
 choices[23][3] = "Solo 2, 3 y 4";
 answers[23] = 1;
 units[23] = ['101'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10568. ";
 preguntaids[23] = 10568


//  Id pregunta: 10563 Año de creación de pregunta: 2015
 questions[24]= "25)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos NO es una etapa del ciclo de vida del servicio?";
 choices[24]= new Array();
 choices[24][0] = "Optimizaci&oacute;n del servicio";
 choices[24][1] = "Transici&oacute;n del servicio";
 choices[24][2] = "Dise&ntilde;o del servicio";
 choices[24][3] = "Estrategia del servicio";
 answers[24] = 0;
 units[24] = ['101'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10563. ";
 preguntaids[24] = 10563


//  Id pregunta: 10548 Año de creación de pregunta: 2015
 questions[25]= "26)  En cuanto al uso de los Cost Driven Attributes (CDA) en COCOMO, seleccione la opci&oacute;n verdadera";
 choices[25]= new Array();
 choices[25][0] = "Para estimar el esfuerzo, se tiene en cuenta las l&iacute;neas de c&oacute;digo en miles de l&iacute;neas de c&oacute;digo (KLOC)";
 choices[25][1] = "Los Cost Driven Attributes (a, b, c y d) son los mismos para cada fase de construcci&oacute;n del software en el modelo avanzado.";
 choices[25][2] = "En el m&oacute;delo b&aacute;sico, se tiene en cuenta, adem&aacute;s del n&uacute;mero de l&iacute;neas, los Cost Driven Attributes (CDA) b&aacute;sicos";
 choices[25][3] = "Para estimar el esfuerzo, se utiliza a y b. Para estimar el tiempo se utliza c y d.";
 answers[25] = 3;
 units[25] = ['94'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 10548. ";
 preguntaids[25] = 10548


//  Id pregunta: 10573 Año de creación de pregunta: 2015
 questions[26]= "27)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; etapa del ciclo de vida del servicio asegura que los m&eacute;todos de medici&oacute;n proporcionar&aacute;n las m&eacute;tricas necesarias para los servicios nuevos o modificados?";
 choices[26]= new Array();
 choices[26][0] = "Dise&ntilde;o del servicio";
 choices[26][1] = "Operaci&oacute;n del servicio";
 choices[26][2] = "Estrategia del servicio";
 choices[26][3] = "Entrega del servicio";
 answers[26] = 0;
 units[26] = ['101'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 10573. ";
 preguntaids[26] = 10573


//  Id pregunta: 10536 Año de creación de pregunta: 2015
 questions[27]= "28)  Se&ntilde;ale la afirmaci&oacute;n falsa de entre las siguientes:";
 choices[27]= new Array();
 choices[27][0] = "Las relaciones regulares son entre dos entidades fuertes";
 choices[27][1] = "La existencia de las entidades fuertes, depende de otra entidad";
 choices[27][2] = "Las entidades pueden ser fuertes o d&eacute;biles";
 choices[27][3] = "Las relaciones d&eacute;biles se producen entre una entidad fuerte y otra d&eacute;bil";
 answers[27] = 1;
 units[27] = ['85'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 10536. ";
 preguntaids[27] = 10536


//  Id pregunta: 10542 Año de creación de pregunta: 2015
 questions[28]= "29)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[28]= new Array();
 choices[28][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[28][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[28][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[28][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[28] = 0;
 units[28] = ['35'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 10542. ";
 preguntaids[28] = 10542


//  Id pregunta: 10590 Año de creación de pregunta: 2015
 questions[29]= "30)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la mejor definici&oacute;n de un evento?";
 choices[29]= new Array();
 choices[29][0] = "Una situaci&oacute;n donde un umbral de rendimiento se ha superado y esto impacta a un nivel de servicio acordado";
 choices[29][1] = "Un cambio de estado significativo para la gesti&oacute;n de un servicio TI";
 choices[29][2] = "Un defecto conocido del sistema que genera m&uacute;ltiples incidencias";
 choices[29][3] = "Una reuni&oacute;n planificada entre los clientes y el personal TI para anunciar un servicio nuevo o un programa de mejoras";
 answers[29] = 1;
 units[29] = ['101'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 10590. ";
 preguntaids[29] = 10590


//  Id pregunta: 10598 Año de creación de pregunta: 2015
 questions[30]= "31)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones es un objetivo del proceso de coordinaci&oacute;n del dise&ntilde;o?";
 choices[30]= new Array();
 choices[30][0] = "Asegurar que los objetivos de disponibilidad del servicio se cumplan";
 choices[30][1] = "Definir, documentar, acordar, monitorizar, medir y revisar los niveles de servicios";
 choices[30][2] = "Proveer y mantener una fuente &uacute;nica de informaci&oacute;n consistente sobre todos los servicios operativos";
 choices[30][3] = "Monitorizar y mejorar el desempe&ntilde;o de la etapa de dise&ntilde;o del ciclo de vida del servicio";
 answers[30] = 3;
 units[30] = ['101'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 10598. ";
 preguntaids[30] = 10598


//  Id pregunta: 10557 Año de creación de pregunta: 2015
 questions[31]= "32)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes enunciados no es un prop&oacute;sito de Operaci&oacute;n del Servicio?";
 choices[31]= new Array();
 choices[31][0] = "Llevar a cabo pruebas para asegurar que los servicios est&aacute;n dise&ntilde;ados para satisfacer las necesidades del negocio";
 choices[31][1] = "Entregar y gestionar servicios de TI";
 choices[31][2] = "Gestionar la tecnolog&iacute;a utilizada para entregar servicios";
 choices[31][3] = "Monitorizar el desempe&ntilde;o de la tecnolog&iacute;a y los procesos";
 answers[31] = 0;
 units[31] = ['101'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10557. ";
 preguntaids[31] = 10557


//  Id pregunta: 10535 Año de creación de pregunta: 2015
 questions[32]= "33)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la correcta para la transformaci&oacute;n de una relaci&oacute;n 1:1";
 choices[32]= new Array();
 choices[32][0] = "Se crea una clave for&aacute;nea en una de ellas que referencia a la clave de la otra";
 choices[32][1] = "La relaci&oacute;n se convierte en tabla con cada una de las claves m&aacute;s las propiedades de la relaci&oacute;n";
 choices[32][2] = "Podr&iacute;a elegirse entre las opciones anteriores";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = 0;
 units[32] = ['60'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 10535. ";
 preguntaids[32] = 10535


//  Id pregunta: 10539 Año de creación de pregunta: 2015
 questions[33]= "34)  De los siguientes, indique la opci&oacute;n que contiene los modelos correctos contemplados por LDAP";
 choices[33]= new Array();
 choices[33][0] = "informaci&oacute;n; direccionamiento; observable; estructural";
 choices[33][1] = "informaci&oacute;n; direccionamiento; objetivable; estructural";
 choices[33][2] = "informaci&oacute;n; direccionamiento; seguridad; estructural";
 choices[33][3] = "informaci&oacute;n; direccionamiento; seguridad; funcional";
 answers[33] = 3;
 units[33] = ['77'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10539. ";
 preguntaids[33] = 10539


//  Id pregunta: 10584 Año de creación de pregunta: 2015
 questions[34]= "35)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es primordialmente responsable de empaquetar, construir, probar y desplegar servicios?";
 choices[34]= new Array();
 choices[34][0] = "Planificaci&oacute;n y soporte a la transici&oacute;n";
 choices[34][1] = "Gesti&oacute;n de entregas y despliegues";
 choices[34][2] = "Gesti&oacute;n de configuraci&oacute;n y activos del servicio";
 choices[34][3] = "Gesti&oacute;n del cat&aacute;logo de servicios";
 answers[34] = 1;
 units[34] = ['101'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 10584. ";
 preguntaids[34] = 10584


//  Id pregunta: 10553 Año de creación de pregunta: 2015
 questions[35]= "36)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[35]= new Array();
 choices[35][0] = "Controlar todos los proveedores externos de TI";
 choices[35][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[35][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[35][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[35] = 1;
 units[35] = ['101'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 10553. ";
 preguntaids[35] = 10553


//  Id pregunta: 10593 Año de creación de pregunta: 2015
 questions[36]= "37)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio provee un marco de referencia para evaluar las capacidades del servicio y los perfiles de riesgo antes que un nuevo servicio o un cambio sea desplegado?";
 choices[36]= new Array();
 choices[36][0] = "Estrategia del servicio";
 choices[36][1] = "Mejora continua del servicio";
 choices[36][2] = "Transici&oacute;n del servicio";
 choices[36][3] = "Operaci&oacute;n del servicio";
 answers[36] = 2;
 units[36] = ['101'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 10593. ";
 preguntaids[36] = 10593


//  Id pregunta: 10554 Año de creación de pregunta: 2015
 questions[37]= "38)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les son los beneficios de la Biblioteca Definitiva de Medios (DML)?:  1. Protecci&oacute;n l&oacute;gica del software y control de licencias; 2. Control del despliegue de las versiones autorizadas; 3. Protecci&oacute;n f&iacute;sica del software";
 choices[37]= new Array();
 choices[37][0] = "Solo 1 y 2";
 choices[37][1] = "Solo 2 y 3";
 choices[37][2] = "Todos";
 choices[37][3] = "Ninguno";
 answers[37] = 2;
 units[37] = ['101'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 10554. ";
 preguntaids[37] = 10554


//  Id pregunta: 10576 Año de creación de pregunta: 2015
 questions[38]= "39)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas es la lista correcta de las cuatro P's del dise&ntilde;o del servicio?";
 choices[38]= new Array();
 choices[38][0] = "Planificaci&oacute;n, productos, posici&oacute;n, procesos";
 choices[38][1] = "Planificaci&oacute;n, perspectiva, posici&oacute;n, personas";
 choices[38][2] = "Perspectiva, asociados (partners), problemas, personas";
 choices[38][3] = "Personas, asociados (partners), productos, procesos";
 answers[38] = 3;
 units[38] = ['101'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 10576. ";
 preguntaids[38] = 10576


//  Id pregunta: 10567 Año de creación de pregunta: 2015
 questions[39]= "40)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes conceptos son caracter&iacute;sticas de todo proceso?: 1. Es medible; 2. Entrega un resultado especifico; 3. Entrega sus resultados principales a un cliente o a otros interesados";
 choices[39]= new Array();
 choices[39][0] = "Solo 1 y 3";
 choices[39][1] = "Solo 1 y 2";
 choices[39][2] = "Solo 2 y 3";
 choices[39][3] = "Todos los anteriores";
 answers[39] = 3;
 units[39] = ['101'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 10567. ";
 preguntaids[39] = 10567


//  Id pregunta: 10570 Año de creación de pregunta: 2015
 questions[40]= "41)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes atributos debe entregar un servicio de TI a los clientes?";
 choices[40]= new Array();
 choices[40][0] = "Capacidades";
 choices[40][1] = "Coste";
 choices[40][2] = "Riesgo";
 choices[40][3] = "Valor";
 answers[40] = 3;
 units[40] = ['101'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 10570. ";
 preguntaids[40] = 10570


//  Id pregunta: 10591 Año de creación de pregunta: 2015
 questions[41]= "42)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones deber&iacute;a ser tratada como una incidencia?: 1. Un usuario es incapaz de acceder a un servicio durante el horario de servicio; 2. Un miembro autorizado del personal TI no puede acceder a un servicio durante el horario de servicio; 3. Un componente de red falla pero el usuario no percibe ninguna alteraci&oacute;n del servicio; 4. Un usuario contacta con el centro de servicio para informar que una aplicaci&oacute;n presenta un rendimiento lento";
 choices[41]= new Array();
 choices[41][0] = "Todas las anteriores";
 choices[41][1] = "Solo 1 y 4";
 choices[41][2] = "Solo 2 y 3";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = 0;
 units[41] = ['101'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 10591. ";
 preguntaids[41] = 10591


//  Id pregunta: 10561 Año de creación de pregunta: 2015
 questions[42]= "43)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito principal de la Gesti&oacute;n de Disponibilidad?";
 choices[42]= new Array();
 choices[42][0] = "Monitorizar e informar la disponibilidad de los componentes";
 choices[42][1] = "Asegurar que se cumplen todas las metas del acuerdo de nivel de servicios (SLA)";
 choices[42][2] = "Garantizar los niveles de disponibilidad de los servicios y de los componentes";
 choices[42][3] = "Asegurar que la disponibilidad del servicio satisface las necesidades acordadas con el negocio";
 answers[42] = 3;
 units[42] = ['101'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 10561. ";
 preguntaids[42] = 10561


//  Id pregunta: 10603 Año de creación de pregunta: 2015
 questions[43]= "44)  Seg&uacute;n la Ley 9/2014, &iquest;a qui&eacute;n corresponde la elaboraci&oacute;n de propuestas de planes nacionales para ser elevados al gobierno y desarrollo normativo de estos planes?";
 choices[43]= new Array();
 choices[43][0] = "CNMC.";
 choices[43][1] = "ORECE.";
 choices[43][2] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 choices[43][3] = "Ministerio de Energia, Turismo y Agenda Digital.";
 answers[43] = 3;
 units[43] = ['121'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 10603. Articulo 69";
 preguntaids[43] = 10603


//  Id pregunta: 10571 Año de creación de pregunta: 2015
 questions[44]= "45)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones resume mejor el prop&oacute;sito de la Gesti&oacute;n de Eventos?";
 choices[44]= new Array();
 choices[44][0] = "La habilidad de detectar eventos, darles sentido y determinar las acciones de control apropiadas";
 choices[44][1] = "La habilidad de detectar eventos, restablecer el servicio a la normalidad tan pronto como sea posible y minimizar el impacto adverso en las operaciones del negocio";
 choices[44][2] = "La habilidad de monitorizar y controlar las actividades del personal t&eacute;cnico";
 choices[44][3] = "La habilidad de informar sobre la entrega exitosa de los servicios al comprobar el tiempo de funcionamiento de los dispositivos de la infraestructura";
 answers[44] = 0;
 units[44] = ['101'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 10571. ";
 preguntaids[44] = 10571


//  Id pregunta: 10596 Año de creación de pregunta: 2015
 questions[45]= "46)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre gesti&oacute;n de suministradores es incorrecta?";
 choices[45]= new Array();
 choices[45][0] = "La gesti&oacute;n de suministradores negocia acuerdos de nivel operacional (OLA)";
 choices[45][1] = "La gesti&oacute;n de suministradores asegura que los suministradores cumplan con las expectativas del negocio";
 choices[45][2] = "La gesti&oacute;n de suministradores mantiene informaci&oacute;n en un sistema de gesti&oacute;n de suministradores y contratos";
 choices[45][3] = "La gesti&oacute;n de suministradores negocia acuerdos externos para ayudar en la provisi&oacute;n de servicios";
 answers[45] = 0;
 units[45] = ['101'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 10596. ";
 preguntaids[45] = 10596


//  Id pregunta: 10586 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes listas de pasos del Ciclo de Deming empleada por ITIL v3 es la correcta?";
 choices[46]= new Array();
 choices[46][0] = "Planificar, Medir, Monitorizar, Informar";
 choices[46][1] = "Planificar, Revisar, Reaccionar, Implementar";
 choices[46][2] = "Planificar, Hacer, Actuar, Auditar";
 choices[46][3] = "Planificar, Hacer, Revisar, Actuar";
 answers[46] = 3;
 units[46] = ['101'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 10586. ";
 preguntaids[46] = 10586


//  Id pregunta: 10587 Año de creación de pregunta: 2015
 questions[47]= "48)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la MEJOR definici&oacute;n de un modelo de incidencias?";
 choices[47]= new Array();
 choices[47][0] = "La plantilla que define el formulario de registro de incidencias usado para informar las incidencias";
 choices[47][1] = "Un tipo de incidencia que acarrea un tipo est&aacute;ndar (o modelo) de elemento de configuraci&oacute;n (CI)";
 choices[47][2] = "Un conjunto predefinido de pasos a seguir al tratar con un tipo conocido de incidencia";
 choices[47][3] = "Una incidencia que es f&aacute;cil de resolver";
 answers[47] = 2;
 units[47] = ['101'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 10587. ";
 preguntaids[47] = 10587


//  Id pregunta: 10578 Año de creación de pregunta: 2015
 questions[48]= "49)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[48]= new Array();
 choices[48][0] = "Gesti&oacute;n de la capacidad";
 choices[48][1] = "Gesti&oacute;n de suministradores";
 choices[48][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[48][3] = "Gesti&oacute;n de cambios";
 answers[48] = 0;
 units[48] = ['101'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 10578. ";
 preguntaids[48] = 10578


//  Id pregunta: 10559 Año de creación de pregunta: 2015
 questions[49]= "50)  Seg&uacute;n ITIL v3, &iquest;para qu&eacute; se utiliza el modelo RACI?";
 choices[49]= new Array();
 choices[49][0] = "Documentar los roles y las responsabilidades de los interesados en un proceso o actividad";
 choices[49][1] = "Definir los requisitos para un nuevo servicio o un proceso";
 choices[49][2] = "Analizar el impacto de una incidencia en el negocio";
 choices[49][3] = "Crear un cuadro de mando que muestra el estado global de la gesti&oacute;n de servicios";
 answers[49] = 0;
 units[49] = ['101'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 10559. ";
 preguntaids[49] = 10559


//  Id pregunta: 10588 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;Cu&aacute;les de los siguientes roles est&aacute;n definidos en el modelo RACI de ITIL v3?";
 choices[50]= new Array();
 choices[50][0] = "Responsable, Encargado, Consultado, Informado";
 choices[50][1] = "Responsable, Factible, Consultado, Informado";
 choices[50][2] = "Realista, Encargado, Consultado, Informado";
 choices[50][3] = "Responsable, Encargado, Correcto, Informado";
 answers[50] = 0;
 units[50] = ['101'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10588. ";
 preguntaids[50] = 10588


//  Id pregunta: 10600 Año de creación de pregunta: 2015
 questions[51]= "52)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes opciones es la jerarqu&iacute;a que utiliza el proceso de Gesti&oacute;n del Conocimiento?";
 choices[51]= new Array();
 choices[51][0] = "Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge)";
 choices[51][1] = "Datos (Data), Informaci&oacute;n (Information), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 choices[51][2] = "Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data)";
 choices[51][3] = "Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 answers[51] = 1;
 units[51] = ['101'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 10600. ";
 preguntaids[51] = 10600


//  Id pregunta: 10565 Año de creación de pregunta: 2015
 questions[52]= "53)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes elementos estar&iacute;an almacenados en la biblioteca definitiva de medios (DML)?: 1. Copias de software comprado; 2. Copias de software desarrollado internamente; 3. Documentaci&oacute;n relevante de las licencias; 4. Calendario de cambios";
 choices[52]= new Array();
 choices[52][0] = "Todas las anteriores";
 choices[52][1] = "Solo 1 y 2";
 choices[52][2] = "Solo 3 y 4";
 choices[52][3] = "Solo 1, 2 y 3";
 answers[52] = 3;
 units[52] = ['101'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 10565. ";
 preguntaids[52] = 10565


//  Id pregunta: 10545 Año de creación de pregunta: 2015
 questions[53]= "54)  De las siguientes afirmaciones, seleccione la correcta en relaci&oacute;n con lo regulado en la Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico";
 choices[53]= new Array();
 choices[53][0] = "La Ley 25/2013 tiene como &aacute;mbito de actuaci&oacute;n, las facturas emitidas en el marco de las relaciones jur&iacute;dicas entre proveedores de bienes y servicios y las Administraciones P&uacute;blicas";
 choices[53][1] = "Impulso del uso de la factura electr&oacute;nica en el sector p&uacute;blico, con car&aacute;cter obligatorio para determinados sujetos a partir del uno de enero de 2015.";
 choices[53][2] = "Obligaci&oacute;n de las empresas de presentaci&oacute;n en un registro administrativo de las facturas expedidas por los servicios que presten o bienes que entreguen a una Administraci&oacute;n P&uacute;blica, en un plazo de 20 d&iacute;as desde la prestaci&oacute;n o entrega";
 choices[53][3] = "Se establece la creaci&oacute;n obligatoria para la Administraci&oacute;n P&uacute;blica estatal, de puntos generales de entrada de facturas electr&oacute;nicas";
 answers[53] = 0;
 units[53] = ['75'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10545. Es obligatorio a partir del 15 de enero de 2015. El plazo para la entrega de la factura, son 30 d&iacute;as. La creaci&oacute;n es obligatoria para todas las administraciones p&uacute;blicas.";
 preguntaids[53] = 10545


//  Id pregunta: 10585 Año de creación de pregunta: 2015
 questions[54]= "55)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones es el mejor ejemplo de una soluci&oacute;n temporal (workaround)?";
 choices[54]= new Array();
 choices[54][0] = "Un t&eacute;cnico instala un script para redirigir la impresi&oacute;n a una impresora alternativa hasta que se pueda aplicar una soluci&oacute;n permanente";
 choices[54][1] = "Un t&eacute;cnico intenta resolver una incidencia de diferentes maneras. Una de ellas funciona aunque no sabe cu&aacute;l.";
 choices[54][2] = "Despu&eacute;s de notificar la incidencia al centro de servicio, el usuario se dedica a otras tareas mientras se identifica y resuelve el problema";
 choices[54][3] = "Un dispositivo funciona de forma intermitente, permitiendo al usuario trabajar con un rendimiento degradado mientras el t&eacute;cnico diagnostica la incidencia";
 answers[54] = 0;
 units[54] = ['101'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 10585. ";
 preguntaids[54] = 10585


//  Id pregunta: 10562 Año de creación de pregunta: 2015
 questions[55]= "56)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de las siguientes actividades est&aacute;n incluidas como parte de la Transici&oacute;n del Servicio?: 1. Introducir nuevos servicios; 2. Retirar servicios; 3. Transferir servicios entre proveedores de servicios";
 choices[55]= new Array();
 choices[55][0] = "Solo 1 y 2";
 choices[55][1] = "Solo 2";
 choices[55][2] = "Todas las anteriores";
 choices[55][3] = "1 y 3";
 answers[55] = 2;
 units[55] = ['101'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 10562. ";
 preguntaids[55] = 10562


//  Id pregunta: 10592 Año de creación de pregunta: 2015
 questions[56]= "57)  Seg&uacute;n ITIL v3, los procesos de Operaci&oacute;n del Servicio son Gesti&oacute;n de Incidencias, Gesti&oacute;n de Problemas, Gesti&oacute;n de Accesos, &hellip;";
 choices[56]= new Array();
 choices[56][0] = "&hellip; Gesti&oacute;n de Eventos y Gesti&oacute;n de Peticiones.";
 choices[56][1] = "&hellip; Gesti&oacute;n de Eventos y Centro de Servicio al usuario.";
 choices[56][2] = "&hellip; Gesti&oacute;n de las Instalaciones y Gesti&oacute;n de Eventos.";
 choices[56][3] = "&hellip; Gesti&oacute;n de Cambios y Gesti&oacute;n de Niveles del Servicio.";
 answers[56] = 0;
 units[56] = ['101'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 10592. ";
 preguntaids[56] = 10592


//  Id pregunta: 10566 Año de creación de pregunta: 2015
 questions[57]= "58)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de revisar regularmente los acuerdos de nivel operativo (OLA)?";
 choices[57]= new Array();
 choices[57][0] = "Gesti&oacute;n de suministradores";
 choices[57][1] = "Gesti&oacute;n de niveles de servicio";
 choices[57][2] = "Gesti&oacute;n del porfolio de servicios";
 choices[57][3] = "Gesti&oacute;n de demanda";
 answers[57] = 1;
 units[57] = ['101'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10566. ";
 preguntaids[57] = 10566


//  Id pregunta: 10550 Año de creación de pregunta: 2015
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes opciones contiene m&eacute;todos de asignaci&oacute;n de pesos en la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta";
 choices[58]= new Array();
 choices[58][0] = "Delphi, Utilidades relativas, UMA, Entrop&iacute;a";
 choices[58][1] = "Delphi, Utilidades relativas, AHP, Entrop&iacute;a";
 choices[58][2] = "Delphi, Utilidades relativas, Electre, Entrop&iacute;a";
 choices[58][3] = "Delphi, Utilidades relativas, Electre, TOPSIS";
 answers[58] = 1;
 units[58] = ['38'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 10550. ";
 preguntaids[58] = 10550


//  Id pregunta: 10555 Año de creación de pregunta: 2015
 questions[59]= "60)  Indique qu&eacute; definiciones son correctas de acuerdo a ITIL v3 para Gesti&oacute;n de Incidencias y Gesti&oacute;n de Problemas: 1. Gesti&oacute;n de Incidencias: restaura el servicio lo antes posible, sin importar la soluci&oacute;n aplicada; 2. Gesti&oacute;n de Problemas: procura dar soluciones definitivas para evitar la recurrencia de incidencias.";
 choices[59]= new Array();
 choices[59][0] = "Solo 1";
 choices[59][1] = "Solo 2";
 choices[59][2] = "Ambas";
 choices[59][3] = "Ninguna";
 answers[59] = 2;
 units[59] = ['101'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 10555. ";
 preguntaids[59] = 10555


//  Id pregunta: 10602 Año de creación de pregunta: 2015
 questions[60]= "61)  Indique la afirmaci&oacute;n INCORRECTA seg&uacute;n la Ley 9/2014:";
 choices[60]= new Array();
 choices[60][0] = "Se regular&aacute; el derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[60][1] = "Se regular&aacute; el derecho a la continuidad del servicio.";
 choices[60][2] = "Se regular&aacute; el derecho a la utilizaci&oacute;n del servicio de contestador autom&aacute;tico de llamadas.";
 choices[60][3] = "Se regular&aacute; el derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 answers[60] = 2;
 units[60] = ['121'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 10602. Articulo 47";
 preguntaids[60] = 10602


//  Id pregunta: 10541 Año de creación de pregunta: 2015
 questions[61]= "62)  Cu&aacute;l es la forma correcta de crear un sello electr&oacute;nico seg&uacute;n la normativa sobre administraci&oacute;n electr&oacute;nica";
 choices[61]= new Array();
 choices[61][0] = "Resoluci&oacute;n del Ministro publicado en BOE";
 choices[61][1] = "Resoluci&oacute;n del Ministro publicado en sede";
 choices[61][2] = "Resoluci&oacute;n de la sbusecretar&iacute;a publicado en la Sede";
 choices[61][3] = "Resoluci&oacute;n del Consejo de Ministros publicado en BOE";
 answers[61] = 2;
 units[61] = ['78'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 10541. ";
 preguntaids[61] = 10541


//  Id pregunta: 10534 Año de creación de pregunta: 2015
 questions[62]= "63)  En cuanto a los derechos de autor&iacute;a de los programas de ordenador, se&ntilde;ale cu&aacute;l no se encuentra entre los derechos morales";
 choices[62]= new Array();
 choices[62][0] = "Derecho de Transformaci&oacute;n";
 choices[62][1] = "Derecho a decidir sobre la divulgaci&oacute;n";
 choices[62][2] = "Derecho a que se reconozca su autor&iacute;a";
 choices[62][3] = "Derecho a mantener la integridad de la obra";
 answers[62] = 0;
 units[62] = ['41'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 10534. ";
 preguntaids[62] = 10534


//  Id pregunta: 10537 Año de creación de pregunta: 2015
 questions[63]= "64)  En relaci&oacute;n con la taxonom&iacute;a de Flynn, una de las siguientes asociaciones no es correcta";
 choices[63]= new Array();
 choices[63][0] = "SISD - Monoprocesador";
 choices[63][1] = "MISD - Arquitectura sist&oacute;lica";
 choices[63][2] = "SIMD - Multiproceso";
 choices[63][3] = "SMP - Sistemas multicomputador";
 answers[63] = 3;
 units[63] = ['50'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 10537. ";
 preguntaids[63] = 10537


//  Id pregunta: 10530 Año de creación de pregunta: 2015
 questions[64]= "65)  Cu&aacute;l de los siguientes es un m&eacute;todo din&aacute;mico de rentabilidad de inversiones";
 choices[64]= new Array();
 choices[64][0] = "Tasa de rendimiento contable";
 choices[64][1] = "&Iacute;ndice de rentabilidad";
 choices[64][2] = "Rentabilidad media";
 choices[64][3] = "Pay-back";
 answers[64] = 1;
 units[64] = ['40'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 10530. ";
 preguntaids[64] = 10530


//  Id pregunta: 10582 Año de creación de pregunta: 2015
 questions[65]= "66)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes actividades asegura y desempe&ntilde;a la Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio?: 1. Identificar los elementos de configuraci&oacute;n (CI); 2. Que los CIs tengan una l&iacute;nea base; 3. Controlar los cambios en los CIs";
 choices[65]= new Array();
 choices[65][0] = "Todos";
 choices[65][1] = "Solo 1 y 2";
 choices[65][2] = "Solo 3";
 choices[65][3] = "Solo 2 y 3";
 answers[65] = 0;
 units[65] = ['101'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 10582. ";
 preguntaids[65] = 10582


//  Id pregunta: 10575 Año de creación de pregunta: 2015
 questions[66]= "67)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; afirmaci&oacute;n sobre la relaci&oacute;n entre el sistema de gesti&oacute;n de configuraci&oacute;n (CMS) y el sistema de gesti&oacute;n del conocimiento de servicios (SKMS) es la correcta?";
 choices[66]= new Array();
 choices[66][0] = "El SKMS es parte de la CMS";
 choices[66][1] = "El CMS es parte del SKMS";
 choices[66][2] = "El CMS y el SKMS son la misma cosa";
 choices[66][3] = "No existe una relaci&oacute;n entre el CMS y el SKMS";
 answers[66] = 1;
 units[66] = ['101'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 10575. ";
 preguntaids[66] = 10575


//  Id pregunta: 10604 Año de creación de pregunta: 2015
 questions[67]= "68)  Seg&uacute;n la Ley 9/2014, cu&aacute;l de los siguientes NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicos dispuestos al p&uacute;blico:";
 choices[67]= new Array();
 choices[67][0] = "Derecho a la continuidad de servicio y a obtener compensaci&oacute;n por su interrupci&oacute;n.";
 choices[67][1] = "Derecho de acceso a servicio de emergencias de forma gratuita.";
 choices[67][2] = "Derecho a informaci&oacute;n veraz, eficaz, suficiente y transparente.";
 choices[67][3] = "Derecho a autorizar el desv&iacute;o automatizado de llamadas.";
 answers[67] = 3;
 units[67] = ['121'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 10604. Articulo 47";
 preguntaids[67] = 10604


//  Id pregunta: 10574 Año de creación de pregunta: 2015
 questions[68]= "69)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas NO es un tipo de m&eacute;trica que se describe en la Mejora Continua del Servicio (CSI)?";
 choices[68]= new Array();
 choices[68][0] = "M&eacute;tricas del proceso";
 choices[68][1] = "M&eacute;tricas del servicio";
 choices[68][2] = "M&eacute;tricas de personal";
 choices[68][3] = "M&eacute;tricas tecnol&oacute;gicas";
 answers[68] = 2;
 units[68] = ['101'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 10574. ";
 preguntaids[68] = 10574


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


//  Id pregunta: 10601 Año de creación de pregunta: 2015
 questions[70]= "71)  De acuerdo a la Ley 9/2014:";
 choices[70]= new Array();
 choices[70][0] = "La CNMC garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[70][1] = "El Ministerio de Energia, Turismo y Agenda Digital garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[70][2] = "Los operadores garantizan la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[70][3] = "La Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 answers[70] = 2;
 units[70] = ['121'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 10601. Articulo 21";
 preguntaids[70] = 10601


//  Id pregunta: 10556 Año de creación de pregunta: 2015
 questions[71]= "72)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[71]= new Array();
 choices[71][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[71][1] = "De tecnolog&iacute;a y de servicios";
 choices[71][2] = "De servicios y de personas";
 choices[71][3] = "De servicios y de procesos";
 answers[71] = 0;
 units[71] = ['101'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 10556. ";
 preguntaids[71] = 10556


//  Id pregunta: 10581 Año de creación de pregunta: 2015
 questions[72]= "73)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes podr&iacute;an ser considerados parte interesada (stakeholder) en una gesti&oacute;n de proyecto de servicios?";
 choices[72]= new Array();
 choices[72][0] = "Solo usuarios y clientes";
 choices[72][1] = "Solo suministradores y funciones";
 choices[72][2] = "Solo clientes y funciones";
 choices[72][3] = "Todos los anteriores";
 answers[72] = 3;
 units[72] = ['101'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 10581. ";
 preguntaids[72] = 10581


//  Id pregunta: 10569 Año de creación de pregunta: 2015
 questions[73]= "74)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito del proceso de peticiones de servicio?";
 choices[73]= new Array();
 choices[73][0] = "Tramitar las peticiones de servicio de los usuarios";
 choices[73][1] = "Asegurar que todas las peticiones dentro de una organizaci&oacute;n de TI se satisfagan";
 choices[73][2] = "Asegurar el cumplimiento de una solicitud de cambio";
 choices[73][3] = "Asegurar que los acuerdos de nivel de servicio (SLA) son cumplidos";
 answers[73] = 0;
 units[73] = ['101'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 10569. ";
 preguntaids[73] = 10569


//  Id pregunta: 10543 Año de creación de pregunta: 2015
 questions[74]= "75)  Qu&eacute; roles est&aacute;n sujetos al r&eacute;gimen sancionador de la Ley Org&aacute;nica de Protecci&oacute;n de DAtos";
 choices[74]= new Array();
 choices[74][0] = "Responsable del tratamiento";
 choices[74][1] = "Responsable del fichero";
 choices[74][2] = "Ambos";
 choices[74][3] = "Ninguno";
 answers[74] = 2;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 10543. ";
 preguntaids[74] = 10543


