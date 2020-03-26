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
//  Id pregunta: 9372 Año de creación de pregunta: 2014
 questions[0]= "1)  El algoritmo PLC (Packet Loss Concealment):";
 choices[0]= new Array();
 choices[0][0] = "Lo utiliza Frame Relay para el reenv&iacute;o de tramas p&eacute;rdidas por la congesti&oacute;n en el sentido de la transmisi&oacute;n.";
 choices[0][1] = "Algoritmo de ocultamiento de p&eacute;rdida de paquetes utilizado por VoIP.";
 choices[0][2] = "Utilizado por TCP para la retransmisi&oacute;n de paquetes despu&eacute;s de una trama NACK (negative acknowledgement).";
 choices[0][3] = "Algoritmo de descarte de paquetes en situaci&oacute;n de congesti&oacute;n en redes Frame Relay.";
 answers[0] = 1;
 units[0] = ['110'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9372. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[0] = 9372


//  Id pregunta: 10513 Año de creación de pregunta: 2015
 questions[1]= "2)  En cuanto a las medidas de seguridad exigidas seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, una de las siguientes medidas no es exigible en el nivel b&aacute;sico.";
 choices[1]= new Array();
 choices[1][0] = "Registro de incidencias";
 choices[1][1] = "El documento de seguridad con indicaci&oacute;n de activos, medidas y responsable del fichero.";
 choices[1][2] = "Listado de personas autorizadas con acceso.";
 choices[1][3] = "El documento de seguridad.";
 answers[1] = 1;
 units[1] = ['35'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 10513. En el nivel b&aacute;sico, el documento de seguridad, debe tener los recursos y las medidas. La indicaci&oacute;n del responsable es en el nivel medio.";
 preguntaids[1] = 10513


//  Id pregunta: 7108 Año de creación de pregunta: 2010
 questions[2]= "3)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, un esquema abierto es aquel que cumple las siguientes condiciones:";
 choices[2]= new Array();
 choices[2][0] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[2][1] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[2][2] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial, o que este pago no suponga una dificultad de acceso.";
 choices[2][3] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial o que este pago no suponga una dificultad de acceso.";
 answers[2] = 0;
 units[2] = ['43'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 7108. Anexo ENI";
 preguntaids[2] = 7108


//  Id pregunta: 7775 Año de creación de pregunta: 2010
 questions[3]= "4)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Real Decreto 1720/2007, de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[3]= new Array();
 choices[3][0] = "Un mes.";
 choices[3][1] = "Dos meses.";
 choices[3][2] = "Tres meses.";
 choices[3][3] = "Seis meses.";
 answers[3] = 0;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 7775. ";
 preguntaids[3] = 7775


//  Id pregunta: 10805 Año de creación de pregunta: 2015
 questions[4]= "5)  La libertad de distribuci&oacute;n, seg&uacute;n la definici&oacute;n de SW libre de Richard Stallman se identifica como la libertad n&uacute;mero:";
 choices[4]= new Array();
 choices[4][0] = "0";
 choices[4][1] = "1";
 choices[4][2] = "2";
 choices[4][3] = "3";
 answers[4] = 2;
 units[4] = ['66'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10805. ";
 preguntaids[4] = 10805


//  Id pregunta: 6674 Año de creación de pregunta: 2009
 questions[5]= "6)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[5]= new Array();
 choices[5][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[5][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[5][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[5][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[5] = 0;
 units[5] = ['84'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 6674. MAP 2008 A1";
 preguntaids[5] = 6674


//  Id pregunta: 3767 Año de creación de pregunta: 2002
 questions[6]= "7)  El acoplamiento es un concepto fundamental del dise&ntilde;o estructurado. &iquest;Cu&aacute;l de los siguientes tipos define el nivel de acoplamiento ordenados de mayor a menor?";
 choices[6]= new Array();
 choices[6][0] = "Por contenido, com&uacute;n, externo, de control, por estampado, de datos, normal.";
 choices[6][1] = "Externo, com&uacute;n, por contenido, por estampado, de control, directo y normal.";
 choices[6][2] = "Externo, por contenido, com&uacute;n, de control, por estampado, de datos y normal.";
 choices[6][3] = "Por contenido, externo, com&uacute;n, de control, de datos, por estampado y normal.";
 answers[6] = 0;
 units[6] = ['89'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3767. ";
 preguntaids[6] = 3767


//  Id pregunta: 3444 Año de creación de pregunta: 2006
 questions[7]= "8)  Se&ntilde;alar la respuesta falsa:";
 choices[7]= new Array();
 choices[7][0] = "HTML es un subconjunto de SGML";
 choices[7][1] = "XHTML es un subconjunto de XML";
 choices[7][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[7][3] = "RTF es un subconjunto de SGML";
 answers[7] = 2;
 units[7] = ['74'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3444. ";
 preguntaids[7] = 3444


//  Id pregunta: 6087 Año de creación de pregunta: 2003
 questions[8]= "9)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones &iquest;Cada cuanto tiempo, la Comisi&oacute;n del Mercado de las Telecomunicaciones llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos?:";
 choices[8]= new Array();
 choices[8][0] = "En un plazo m&aacute;ximo de tres a&ntilde;os contado desde la adopci&oacute;n de una medida anterior relativa a ese mercado";
 choices[8][1] = "En el plazo m&aacute;ximo de dos a&ntilde;os desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea";
 choices[8][2] = "Las dos anteriores son ciertas";
 choices[8][3] = "Todas las anteriores son falsas";
 answers[8] = 2;
 units[8] = ['121'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6087. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6087


//  Id pregunta: 7942 Año de creación de pregunta: 2011
 questions[9]= "10)  El protocolo FTP es un protocolo:";
 choices[9]= new Array();
 choices[9][0] = "Seguro.";
 choices[9][1] = "Orientado a conexi&oacute;n.";
 choices[9][2] = "De nivel de enlace.";
 choices[9][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red.";
 answers[9] = 1;
 units[9] = ['103'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7942. Examen TIC A2 2010";
 preguntaids[9] = 7942


//  Id pregunta: 962 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley 40/2015 se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[10]= new Array();
 choices[10][0] = "la Administraci&oacute;n General del Estado";
 choices[10][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[10][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[10][3] = "el sector p&uacute;blico y privado institucional";
 answers[10] = 3;
 units[10] = ['4', '7', '8', '9'];
 blocks[10] = ['A1', 'A2'];
 comments[10] = "Id Pregunta: 962. Ley 40/2015";
 preguntaids[10] = 962


//  Id pregunta: 9541 Año de creación de pregunta: 2014
 questions[11]= "12)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[11]= new Array();
 choices[11][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[11][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[11][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[11][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[11] = 1;
 units[11] = ['35'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 9541. Art&iacute;culo 11.2 d) de la Ley Org&aacute;nica 15/1999";
 preguntaids[11] = 9541


//  Id pregunta: 10473 Año de creación de pregunta: 2015
 questions[12]= "13)  Los servicios WMS de OGC se consideran servicios de:";
 choices[12]= new Array();
 choices[12][0] = "Localizaci&oacute;n";
 choices[12][1] = "Descarga";
 choices[12][2] = "Transformaci&oacute;n";
 choices[12][3] = "Visualizaci&oacute;n";
 answers[12] = 3;
 units[12] = ['71'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10473. ";
 preguntaids[12] = 10473


//  Id pregunta: 1095 Año de creación de pregunta: 2016
 questions[13]= "14)  AJAX es:";
 choices[13]= new Array();
 choices[13][0] = "Un lenguaje de programaci&oacute;n basado en la codificaci&oacute;n de programas en XML.";
 choices[13][1] = "Una filosof&iacute;a o t&eacute;cnica de desarrollo de aplicaciones web que se apoya, entre otras tecnolog&iacute;as, en XML y JavaScript.";
 choices[13][2] = "Un servidor de aplicaciones Internet desarrollado en Java cuyas p&aacute;ginas web est&aacute;n escritas en XHTML.";
 choices[13][3] = "Una alternativa a SOAP en la descripci&oacute;n de webservices.";
 answers[13] = 1;
 units[13] = ['74'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1095. ";
 preguntaids[13] = 1095


//  Id pregunta: 10465 Año de creación de pregunta: 2015
 questions[14]= "15)  El 5&ordm; principio de marco de trabajo CobiT v5 establece:";
 choices[14]= new Array();
 choices[14][0] = "Este principio se centra en el Gobierno TI dejando la gesti&oacute;n a otras metodolog&iacute;as como ITIL.";
 choices[14][1] = "Establece una clara distinci&oacute;n entre Gobierno y Gesti&oacute;n.";
 choices[14][2] = "No existe interacci&oacute;n alguna entre Gobierno y Gesti&oacute;n.";
 choices[14][3] = "El Gobierno contiene cuatro dominios, seg&uacute;n las &aacute;reas de responsabilidad de Planificar, Construir, Ejecutar y Supervisar (Plan, Build, Run and Monitor, PBRM).";
 answers[14] = 1;
 units[14] = ['101'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 10465. ";
 preguntaids[14] = 10465


//  Id pregunta: 6896 Año de creación de pregunta: 2010
 questions[15]= "16)  La creaci&oacute;n de una vista l&oacute;gica unificada de los datos, a&uacute;n cuando &eacute;stos est&eacute;n dispersos entre varias bases de datos f&iacute;sicas, para as&iacute; disponer de un &uacute;nico modelo de trabajo de los datos de la organizaci&oacute;n, es una manera de definir:";
 choices[15]= new Array();
 choices[15][0] = "Un almac&eacute;n de datos.";
 choices[15][1] = "Un sistema OLAP.";
 choices[15][2] = "Un sistema de informaci&oacute;n a la direcci&oacute;n.";
 choices[15][3] = "Una base de datos.";
 answers[15] = 0;
 units[15] = ['72'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6896. TIC A 2009";
 preguntaids[15] = 6896


//  Id pregunta: 10554 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les son los beneficios de la Biblioteca Definitiva de Medios (DML)?:  1. Protecci&oacute;n l&oacute;gica del software y control de licencias; 2. Control del despliegue de las versiones autorizadas; 3. Protecci&oacute;n f&iacute;sica del software";
 choices[16]= new Array();
 choices[16][0] = "Solo 1 y 2";
 choices[16][1] = "Solo 2 y 3";
 choices[16][2] = "Todos";
 choices[16][3] = "Ninguno";
 answers[16] = 2;
 units[16] = ['101'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 10554. ";
 preguntaids[16] = 10554


//  Id pregunta: 7454 Año de creación de pregunta: 2010
 questions[17]= "18)  Es un organismo europeo de normalizaci&oacute;n, de acuerdo a la Directiva 98/34/CE";
 choices[17]= new Array();
 choices[17][0] = "CEN";
 choices[17][1] = "ICANN";
 choices[17][2] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 choices[17][3] = "GNU";
 answers[17] = 0;
 units[17] = ['48'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 7454. ";
 preguntaids[17] = 7454


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la respuesta falsa:";
 choices[18]= new Array();
 choices[18][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[18][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[18][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[18][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[18] = 2;
 units[18] = ['5'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 106. Uni&oacute;n Europea";
 preguntaids[18] = 106


//  Id pregunta: 10165 Año de creación de pregunta: 2015
 questions[19]= "20)  RE&Uacute;NETE es el Servicio Com&uacute;n de Reuniones Virtuales de la Red SARA que ofrece herramientas colaborativas a todas las Administraciones P&uacute;blicas. Entre sus funcionalidades NO se encuentra:";
 choices[19]= new Array();
 choices[19][0] = "Correo electr&oacute;nico multidominio.";
 choices[19][1] = "Integraci&oacute;n de salas de videoconferencia tradicional H323/SIP.";
 choices[19][2] = "Soporte on-line para p&aacute;ginas web.";
 choices[19][3] = "Videoconferencia con herramientas de colaboraci&oacute;n.";
 answers[19] = 0;
 units[19] = ['47'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 10165. Examen TIC A1 2014";
 preguntaids[19] = 10165


//  Id pregunta: 6909 Año de creación de pregunta: 2010
 questions[20]= "21)  Con respecto a la desagregaci&oacute;n del bucle de abonado:";
 choices[20]= new Array();
 choices[20][0] = "Existe una oferta de acceso al bucle de abonado (OBA) que obliga al operador establecido (&lsquo;incumbent&rsquo;) a abrir su red a los operadores alternativos";
 choices[20][1] = "La OBA exige que el operador establecido (&lsquo;incumbent&rsquo;) abra su red a los operadores alternativos para todos los servicios sin excepciones, si bien &eacute;stos deber&aacute;n abonar una cuota mensual por cada servicio desagregado";
 choices[20][2] = "Las respuestas a) y b) son correctas";
 choices[20][3] = "Las respuestas a) y b) son falsas";
 answers[20] = 0;
 units[20] = ['121'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 6909. ";
 preguntaids[20] = 6909


//  Id pregunta: 10651 Año de creación de pregunta: 2015
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es INCORRECTA, en referencia a los derechos de los usuarios finales contenidos en la Ley 9/2014:";
 choices[21]= new Array();
 choices[21][0] = "Los usuarios finales tienen derecho a resolver el contrato con un operador en cualquier momento.";
 choices[21][1] = "Los usuarios finales tienen derecho a la continuidad del servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[21][2] = "El plazo de cambio de operador debe ser como m&aacute;ximo de un d&iacute;a.";
 choices[21][3] = "Los usuarios finales tienen derecho a la desconexi&oacute;n de determinados servicios.";
 answers[21] = 2;
 units[21] = ['121'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10651. ";
 preguntaids[21] = 10651


//  Id pregunta: 1617 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;les de las siguientes tareas podr&iacute;an ser llevadas a cabo por la misma persona dentro de un departamento de sistemas de informaci&oacute;n sin repercusiones negativas para el control y la seguridad?";
 choices[22]= new Array();
 choices[22][0] = "Administraci&oacute;n de seguridad y gesti&oacute;n de cambios.";
 choices[22][1] = "Operaciones de producci&oacute;n y desarrollo de sistemas.";
 choices[22][2] = "Desarrollo de sistemas y gesti&oacute;n de cambios.";
 choices[22][3] = "Desarrollo de sistemas y mantenimiento de sistemas.";
 answers[22] = 3;
 units[22] = ['43'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 1617. ";
 preguntaids[22] = 1617


//  Id pregunta: 2115 Año de creación de pregunta: 2002
 questions[23]= "24)  El T&iacute;tulo VI de la LOPD trata sobre:";
 choices[23]= new Array();
 choices[23][0] = "Principios de la protecci&oacute;n de datos";
 choices[23][1] = "Derechos de las personas";
 choices[23][2] = "Movimiento internacional de datos";
 choices[23][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[23] = 3;
 units[23] = ['35'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2115. ";
 preguntaids[23] = 2115


//  Id pregunta: 8392 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l es la norma europea vigente relativa al tratamiento de los datos personales (a partir del 25 de Mayo de 2018)?";
 choices[24]= new Array();
 choices[24][0] = "Reglamento 679/2015";
 choices[24][1] = "Directiva 2006/24/CE";
 choices[24][2] = "Directiva 2002/58/CE";
 choices[24][3] = "Directiva 95/46/CE";
 answers[24] = 0;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 8392. ";
 preguntaids[24] = 8392


//  Id pregunta: 7449 Año de creación de pregunta: 2010
 questions[25]= "26)  Entre los documentos publicados por ISO NO se encuentra:";
 choices[25]= new Array();
 choices[25][0] = "Est&aacute;ndares Internacionales";
 choices[25][1] = "Informes T&eacute;cnicos";
 choices[25][2] = "Recomendaciones";
 choices[25][3] = "Gu&iacute;as ISO";
 answers[25] = 2;
 units[25] = ['48'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 7449. ";
 preguntaids[25] = 7449


//  Id pregunta: 983 Año de creación de pregunta: 2016
 questions[26]= "27)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[26]= new Array();
 choices[26][0] = "la organizaci&oacute;n central, que integra los Ministerios y los servicios comunes";
 choices[26][1] = "la Organizaci&oacute;n Territorial";
 choices[26][2] = "la Organizaci&oacute;n sectorial";
 choices[26][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[26] = 2;
 units[26] = ['4', '7', '8', '9'];
 blocks[26] = ['A1', 'A2'];
 comments[26] = "Id Pregunta: 983. Ley 40/2015";
 preguntaids[26] = 983


//  Id pregunta: 10907 Año de creación de pregunta: 2015
 questions[27]= "28)  El n&uacute;mero binario 11110011 puede expresarse en hexadecimal como:";
 choices[27]= new Array();
 choices[27][0] = "A9";
 choices[27][1] = "F3";
 choices[27][2] = "0C";
 choices[27][3] = "FC";
 answers[27] = 1;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10907. ";
 preguntaids[27] = 10907


//  Id pregunta: 9769 Año de creación de pregunta: 2014
 questions[28]= "29)  Cual de los siguientes no es un principio de COBIT5";
 choices[28]= new Array();
 choices[28][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[28][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[28][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[28][3] = "Aplicar un solo marco integrado";
 answers[28] = 1;
 units[28] = ['101'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 9769. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";
 preguntaids[28] = 9769


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[29]= "30)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[29]= new Array();
 choices[29][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[29][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[29][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[29][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[29] = 2;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 488. Sociedad de la informaci&oacute;n";
 preguntaids[29] = 488


//  Id pregunta: 10033 Año de creación de pregunta: 2015
 questions[30]= "31)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[30]= new Array();
 choices[30][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[30][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[30][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[30][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[30] = 1;
 units[30] = ['91', '86'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 10033. Examen TIC A2 2014";
 preguntaids[30] = 10033


//  Id pregunta: 1042 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[31]= new Array();
 choices[31][0] = "Conferencia de Presidentes.";
 choices[31][1] = "Convenios de colaboraci&oacute;n.";
 choices[31][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[31][3] = "Conferencias Sectoriales.";
 answers[31] = 0;
 units[31] = ['4', '7', '8', '9'];
 blocks[31] = ['A1', 'A2'];
 comments[31] = "Id Pregunta: 1042. Ley 40/2015";
 preguntaids[31] = 1042


//  Id pregunta: 10333 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes es un operador derivado de algebra relacional?";
 choices[32]= new Array();
 choices[32][0] = "Intersecci&oacute;n";
 choices[32][1] = "Uni&oacute;n";
 choices[32][2] = "Proyecci&oacute;n";
 choices[32][3] = "Selecci&oacute;n";
 answers[32] = 0;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 10333. ";
 preguntaids[32] = 10333


//  Id pregunta: 6654 Año de creación de pregunta: 2009
 questions[33]= "34)  &iquest;Qu&eacute; deber&aacute; publicarse, en todo caso, en el perfil de contratante, seg&uacute;n el RD Legislativo 3/2011 de Contatos del Sector P&uacute;blico(art&iacute;culo 53.2)?";
 choices[33]= new Array();
 choices[33][0] = "Los procedimientos anulados";
 choices[33][1] = "Los anuncios de licitaci&oacute;n";
 choices[33][2] = "La adjudicaci&oacute;n de los contratos";
 choices[33][3] = "Las licitaciones abiertas";
 answers[33] = 2;
 units[33] = ['37'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 6654. ";
 preguntaids[33] = 6654


//  Id pregunta: 7984 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[34]= new Array();
 choices[34][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[34][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[34][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[34][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[34] = 3;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 7984. Examen TIC A2 2010";
 preguntaids[34] = 7984


//  Id pregunta: 8814 Año de creación de pregunta: 2013
 questions[35]= "36)  Los niveles de servicio de Resilient Packet Ring son:";
 choices[35]= new Array();
 choices[35][0] = "Clase A: Servicio best effort";
 choices[35][1] = "Clase B: Con latencia y jitter predecible.";
 choices[35][2] = "Clase C: Para tr&aacute;fico con requisitos de baja latencia y bajo jitter.";
 choices[35][3] = "Todas las respuestas son correctas.";
 answers[35] = 1;
 units[35] = ['112'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8814. ";
 preguntaids[35] = 8814


//  Id pregunta: 5891 Año de creación de pregunta: 2007
 questions[36]= "37)  En cual de los siguientes casos se podr&aacute; utilizar el procedimiento negociado";
 choices[36]= new Array();
 choices[36][0] = "Cuando se trate de bienes o servicios declarados de contrataci&oacute;n centralizada.";
 choices[36][1] = "En casos de imperiosa urgencia.";
 choices[36][2] = "Cuando no se presenten proposiciones en respuesta a un procedimiento abierto o restringido o &eacute;stas sean irregulares o inaceptables.";
 choices[36][3] = "En todos los casos anteriores";
 answers[36] = 3;
 units[36] = ['37'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 5891. ";
 preguntaids[36] = 5891


//  Id pregunta: 10578 Año de creación de pregunta: 2015
 questions[37]= "38)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[37]= new Array();
 choices[37][0] = "Gesti&oacute;n de la capacidad";
 choices[37][1] = "Gesti&oacute;n de suministradores";
 choices[37][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[37][3] = "Gesti&oacute;n de cambios";
 answers[37] = 0;
 units[37] = ['101'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 10578. ";
 preguntaids[37] = 10578


//  Id pregunta: 963 Año de creación de pregunta: 2016
 questions[38]= "39)  El sector p&uacute;blico institucional se integra por:";
 choices[38]= new Array();
 choices[38][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[38][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[38][2] = "las Universidades p&uacute;blicas";
 choices[38][3] = "todas son correctas";
 answers[38] = 3;
 units[38] = ['4', '7', '8', '9'];
 blocks[38] = ['A1', 'A2'];
 comments[38] = "Id Pregunta: 963. Ley 40/2015";
 preguntaids[38] = 963


//  Id pregunta: 7577 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[39]= new Array();
 choices[39][0] = "Diagramas de casos de uso.";
 choices[39][1] = "Diagramas de estados.";
 choices[39][2] = "Diagramas de interacci&oacute;n.";
 choices[39][3] = "Diagramas de flujo de datos.";
 answers[39] = 2;
 units[39] = ['86'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7577. Map 2006";
 preguntaids[39] = 7577


//  Id pregunta: 8256 Año de creación de pregunta: 2011
 questions[40]= "41)  Una empresa crea legalmente un fichero de datos personales que utiliza para su tratamiento, pero sin llevar a cabo una correcta actualizaci&oacute;n cuando se producen cambios en los mismos. De entre los &quot;principios de protecci&oacute;n de datos&quot; incluidos en la Ley 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;cu&aacute;l se estar&iacute;a incumpliendo?";
 choices[40]= new Array();
 choices[40][0] = "Calidad de los datos";
 choices[40][1] = "Veracidad de la informaci&oacute;n.";
 choices[40][2] = "Actualizaci&oacute;n peri&oacute;dica";
 choices[40][3] = "Seguimiento de los datos.";
 answers[40] = 0;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 8256. Examen TIC A2 2010 interna";
 preguntaids[40] = 8256


//  Id pregunta: 10737 Año de creación de pregunta: 2015
 questions[41]= "42)  Seg&uacute;n M&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes actividades de aseguramiento de la calidad NO se lleva a cabo durante el Mantenimiento del Sistema de Informaci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "Aseguramiento de la calidad NO afecta al proceso MSI";
 choices[41][1] = "La revisi&oacute;n del plan de pruebas de regresi&oacute;n.";
 choices[41][2] = "La revisi&oacute;n de la realizaci&oacute;n de las pruebas de regresi&oacute;n.";
 choices[41][3] = "La revisi&oacute;n del Plan de Mantenimiento del Sistema.";
 answers[41] = 3;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 10737. ";
 preguntaids[41] = 10737


//  Id pregunta: 10077 Año de creación de pregunta: 2015
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes NO es un producto de virtualizaci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Virtual PC.";
 choices[42][1] = "XEN.";
 choices[42][2] = "Atheros.";
 choices[42][3] = "VirtualBox.";
 answers[42] = 2;
 units[42] = ['124'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 10077. Examen TIC A2 2014";
 preguntaids[42] = 10077


//  Id pregunta: 7343 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Qu&eacute; modelo de estimaci&oacute;n de esfuerzo no requiere datos hist&oacute;ricos de otros proyectos?";
 choices[43]= new Array();
 choices[43][0] = "Modelo de Waltson y F&eacute;lix";
 choices[43][1] = "Modelo de Bailey y Basili";
 choices[43][2] = "Modelo de Putnam";
 choices[43][3] = "Todos estos modelos requieren datos hist&oacute;ricos";
 answers[43] = 2;
 units[43] = ['94'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 7343. ";
 preguntaids[43] = 7343


//  Id pregunta: 3823 Año de creación de pregunta: 2002
 questions[44]= "45)  En las fases del proceso de prueba de software diga cu&aacute;l, seg&uacute;n M&eacute;trica v3, corresponde a la prueba que se realiza una vez ensamblado el software para comprobar que cumple las especificaciones:";
 choices[44]= new Array();
 choices[44][0] = "Prueba de integraci&oacute;n";
 choices[44][1] = "Prueba de unidad";
 choices[44][2] = "Prueba de aceptaci&oacute;n";
 choices[44][3] = "Prueba de validaci&oacute;n";
 answers[44] = 2;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3823. ";
 preguntaids[44] = 3823


//  Id pregunta: 2553 Año de creación de pregunta: 2002
 questions[45]= "46)  Indique una caracter&iacute;stica del software libre:";
 choices[45]= new Array();
 choices[45][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[45][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[45][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[45][3] = "Todas las respuestas son correctas";
 answers[45] = 3;
 units[45] = ['66'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2553. ";
 preguntaids[45] = 2553


//  Id pregunta: 5384 Año de creación de pregunta: 2006
 questions[46]= "47)  Un modem RDSI";
 choices[46]= new Array();
 choices[46][0] = "Es un dispositivo utilizado para conectar un Interfaz B&aacute;sico a otros interfaces";
 choices[46][1] = "Permite la transmisi&oacute;n de datos sobre uno o dos canales B";
 choices[46][2] = "Es un t&eacute;rmino incorrecto";
 choices[46][3] = "Tiene un SPID (n&uacute;mero de l&iacute;nea) propio";
 answers[46] = 2;
 units[46] = ['114'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5384. ";
 preguntaids[46] = 5384


//  Id pregunta: 4383 Año de creación de pregunta: 2004
 questions[47]= "48)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "No existen";
 choices[47][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[47][2] = "Pueden ser considerados como filtros de paquetes";
 choices[47][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[47] = 3;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4383. Examen TAI 2004";
 preguntaids[47] = 4383


//  Id pregunta: 9787 Año de creación de pregunta: 2015
 questions[48]= "49)  El Esquema Nacional de Interoperabilidad:";
 choices[48]= new Array();
 choices[48][0] = "Incluye criterios y recomendaciones de seguridad, conservaci&oacute;n y normalizaci&oacute;n de la informaci&oacute;n.";
 choices[48][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[48][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[48][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[48] = 0;
 units[48] = ['43', '44'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 9787. Art&iacute;culo 1, ENI RD 4/2010";
 preguntaids[48] = 9787


//  Id pregunta: 5089 Año de creación de pregunta: 2002
 questions[49]= "50)  WTLS:";
 choices[49]= new Array();
 choices[49][0] = "est&aacute; basado en el protocolo TLS, pero optimizado para dispositivos m&oacute;viles";
 choices[49][1] = "proporciona mayor seguridad que TLS";
 choices[49][2] = "es independiente de TLS, un protocolo dise&ntilde;ado espec&iacute;ficamente para redes inal&aacute;mbricas";
 choices[49][3] = "ningunas de las anteriores";
 answers[49] = 0;
 units[49] = ['120'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5089. ";
 preguntaids[49] = 5089


//  Id pregunta: 8958 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos no existe dentro de la clase abstracta HttpServlet?";
 choices[50]= new Array();
 choices[50][0] = "doGet()";
 choices[50][1] = "doDelete()";
 choices[50][2] = "doPut()";
 choices[50][3] = "Todos los m&eacute;todos anteriores existen en el clase HttpServlet";
 answers[50] = 3;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8958. ";
 preguntaids[50] = 8958


//  Id pregunta: 10765 Año de creación de pregunta: 2015
 questions[51]= "52)  En el protocolo IPv6:";
 choices[51]= new Array();
 choices[51][0] = "No se pueden fragmentar paquetes.";
 choices[51][1] = "Las cabeceras AH y ESP se procesan en cada router.";
 choices[51][2] = "Incorpora mecanismos para crear circuitos virtuales.";
 choices[51][3] = "Se ofrecen servicios espec&iacute;ficos para TCPv6";
 answers[51] = 2;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 10765. ";
 preguntaids[51] = 10765


//  Id pregunta: 10431 Año de creación de pregunta: 2015
 questions[52]= "53)  El framework Hibernate";
 choices[52]= new Array();
 choices[52][0] = "Est&aacute; disponible tambi&eacute;n para&nbsp;.Net&nbsp;con el nombre de&nbsp;NHibernate.";
 choices[52][1] = "Hibernate se distribuye bajo los t&eacute;rminos de la licencia&nbsp;GNU LGPL.";
 choices[52][2] = "Se apoya en Java Reflection API y en la librer&iacute;a de generaci&oacute;n de c&oacute;digo Javassist.";
 choices[52][3] = "Todas las respuestas son correctas.";
 answers[52] = 3;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 10431. ";
 preguntaids[52] = 10431


//  Id pregunta: 2879 Año de creación de pregunta: 2002
 questions[53]= "54)  En Unix el comando  vi  es muy utilizado, sirve para:";
 choices[53]= new Array();
 choices[53][0] = "Listar las primeras 10 l&iacute;neas de un fichero";
 choices[53][1] = "Lista todos los procesos en ejecuci&oacute;n con su estado";
 choices[53][2] = "Es un editor de texto";
 choices[53][3] = "Visualiza la cantidad de memoria libre y el tanto por ciento ocupado del procesador";
 answers[53] = 2;
 units[53] = ['57'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2879. ";
 preguntaids[53] = 2879


//  Id pregunta: 8378 Año de creación de pregunta: 2011
 questions[54]= "55)  ODBC son las siglas de:";
 choices[54]= new Array();
 choices[54][0] = "Open DataBase Consortium";
 choices[54][1] = "Open Data Business Connectivity";
 choices[54][2] = "Open DataBase Connectivity";
 choices[54][3] = "Object DataBase Consortium";
 answers[54] = 2;
 units[54] = ['60', '61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8378. Examen UPM A2 2011";
 preguntaids[54] = 8378


//  Id pregunta: 9883 Año de creación de pregunta: 2015
 questions[55]= "56)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[55]= new Array();
 choices[55][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[55][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[55][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[55][3] = "Ninguna de las anteriores.";
 answers[55] = 3;
 units[55] = ['7', '19'];
 blocks[55] = ['A2', 'A4'];
 comments[55] = "Id Pregunta: 9883. ";
 preguntaids[55] = 9883


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro?nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[56]= new Array();
 choices[56][0] = "Ser prestados por uno o ma?s prestadores cualificados de servicios de confianza";
 choices[56][1] = "Garantizar la identificacio?n del destinatario antes de la entrega de los datos";
 choices[56][2] = "Indicar mediante un sello cualificado de tiempo electro?nico la fecha y hora de envi?o, recepcio?n y eventual modificacio?n de los datos";
 choices[56][3] = "Proteger el envi?o y la recepcio?n de datos por una firma electro?nica cualificada o un sello electro?nico cualificado de un prestador cualificado de servicios de confianza";
 answers[56] = 2;
 units[56] = ['77'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 789. Reglamento 910/2014";
 preguntaids[56] = 789


//  Id pregunta: 10101 Año de creación de pregunta: 2015
 questions[57]= "58)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[57]= new Array();
 choices[57][0] = "Screened Subnet.";
 choices[57][1] = "Dual-Homed Host.";
 choices[57][2] = "Router-Homed Host.";
 choices[57][3] = "Screened Host.";
 answers[57] = 3;
 units[57] = ['119'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 10101. Examen TIC A2 2014";
 preguntaids[57] = 10101


//  Id pregunta: 1550 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes NO es un m&eacute;todo del objeto XMLHttpRequest de Javascript? Para la respuesta no tenga en cuenta los posibles par&aacute;metros que pueda contener la llamada al mismo.";
 choices[58]= new Array();
 choices[58][0] = "open";
 choices[58][1] = "stop";
 choices[58][2] = "setRequestHeader";
 choices[58][3] = "getAllResponseHeaders";
 answers[58] = 1;
 units[58] = ['74'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1550. ";
 preguntaids[58] = 1550


//  Id pregunta: 2309 Año de creación de pregunta: 2002
 questions[59]= "60)  Si un grupo de personas constituyen una asociaci&oacute;n (por ejemplo de antiguos alumnos, o de padres de alumnos) y recaban informaci&oacute;n de car&aacute;cter personal de sus miembros, almacen&aacute;ndola en un fichero:";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo deber&aacute;n registrar el fichero en la Agencia de Protecci&oacute;n de Datos si el contenido de &eacute;stos es lo suficientemente sensible";
 choices[59][1] = "Seg&uacute;n la finalidad para la que se use y seg&uacute;n el tama&ntilde;o de dicho fichero podr&aacute;n estar exentos de de registrar el fichero";
 choices[59][2] = "Tienen que registrar el fichero en la Agencia de Protecci&oacute;n de Datos";
 choices[59][3] = "Deber&iacute;an registrar el fichero, pero dado que la Agencia de Protecci&oacute;n de Datos s&oacute;lo se ocupa en la pr&aacute;ctica de grandes casos de fraude pueden pasar sin ser sancionados sin ning&uacute;n tipo de problema";
 answers[59] = 2;
 units[59] = ['35'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2309. ";
 preguntaids[59] = 2309


//  Id pregunta: 10029 Año de creación de pregunta: 2015
 questions[60]= "61)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[60]= new Array();
 choices[60][0] = "Diagrama de secuencia.";
 choices[60][1] = "Diagrama de colaboraci&oacute;n.";
 choices[60][2] = "Diagrama de clases.";
 choices[60][3] = "Diagrama de Casos de Uso.";
 answers[60] = 3;
 units[60] = ['91', '85', '89'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 10029. Examen TIC A2 2014";
 preguntaids[60] = 10029


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[61]= new Array();
 choices[61][0] = "Avro";
 choices[61][1] = "Sqoop";
 choices[61][2] = "UIMA";
 choices[61][3] = "Jaql";
 answers[61] = 1;
 units[61] = ['73'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 758. Big Data y NoSQL";
 preguntaids[61] = 758


//  Id pregunta: 7752 Año de creación de pregunta: 2010
 questions[62]= "63)  En el modelo COCOMO, la estimaci&oacute;n del esfuerzo anual b&aacute;sico para el mantenimiento de los sistemas de informaci&oacute;n, (MM)am, conocido el esfuerzo estimado de desarrollo, (MM)d, es:";
 choices[62]= new Array();
 choices[62][0] = "(MM)am = 1.8 (DSI) (MM)d.";
 choices[62][1] = "(MM)am = 2.0 (ADF) (MM)d.";
 choices[62][2] = "(MM)am = 3.2 (FSP) (MM)d.";
 choices[62][3] = "(MM)am = 1.0 (ACT) (MM)d.";
 answers[62] = 3;
 units[62] = ['94'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 7752. ";
 preguntaids[62] = 7752


//  Id pregunta: 10581 Año de creación de pregunta: 2015
 questions[63]= "64)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes podr&iacute;an ser considerados parte interesada (stakeholder) en una gesti&oacute;n de proyecto de servicios?";
 choices[63]= new Array();
 choices[63][0] = "Solo usuarios y clientes";
 choices[63][1] = "Solo suministradores y funciones";
 choices[63][2] = "Solo clientes y funciones";
 choices[63][3] = "Todos los anteriores";
 answers[63] = 3;
 units[63] = ['101'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 10581. ";
 preguntaids[63] = 10581


//  Id pregunta: 994 Año de creación de pregunta: 2016
 questions[64]= "65)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en la ley 40/2015, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[64]= new Array();
 choices[64][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[64][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[64][2] = "a y b son correctas";
 choices[64][3] = "a y b son incorrectas";
 answers[64] = 2;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 994. Ley 40/2015";
 preguntaids[64] = 994


//  Id pregunta: 8962 Año de creación de pregunta: 2013
 questions[65]= "66)  Los EJB de tipo entity pueden ser:";
 choices[65]= new Array();
 choices[65][0] = "De dos tipos: RMP y CMP";
 choices[65][1] = "De dos tipos: BMP y CMP";
 choices[65][2] = "De tres tipos: BMP, CMP y JMP";
 choices[65][3] = "De tres tipos: BMP, CMP y SMP";
 answers[65] = 1;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8962. ";
 preguntaids[65] = 8962


//  Id pregunta: 2154 Año de creación de pregunta: 2002
 questions[66]= "67)  En la elaboraci&oacute;n de una norma se distinguen varias fases. Indique cu&aacute;les son estas:";
 choices[66]= new Array();
 choices[66][0] = "Trabajos preliminares, propuesta, informaci&oacute;n p&uacute;blica, petici&oacute;n";
 choices[66][1] = "Trabajos preliminares, proyecto, informaci&oacute;n p&uacute;blica, propuesta, petici&oacute;n";
 choices[66][2] = "Proyecto, informaci&oacute;n p&uacute;blica, certificaci&oacute;n";
 choices[66][3] = "Proyecto, propuesta, informaci&oacute;n p&uacute;blica, petici&oacute;n";
 answers[66] = 1;
 units[66] = ['48'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2154. ";
 preguntaids[66] = 2154


//  Id pregunta: 1142 Año de creación de pregunta: 2016
 questions[67]= "68)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[67]= new Array();
 choices[67][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[67][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[67][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[67][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[67] = 0;
 units[67] = ['91'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 1142. ";
 preguntaids[67] = 1142


//  Id pregunta: 1841 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre el modelo de capas OSI:";
 choices[68]= new Array();
 choices[68][0] = "La capa de enlace se encarga de determinar los enlaces por donde enviar los paquetes.";
 choices[68][1] = "La capa de sesi&oacute;n est&aacute; por encima de la capa de presentaci&oacute;n.";
 choices[68][2] = "El nivel que realiza la funci&oacute;n de obtener la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el nivel 3.";
 choices[68][3] = "La compresi&oacute;n y el cifrado de los datos es una tarea de la capa de aplicaci&oacute;n.";
 answers[68] = 2;
 units[68] = ['105'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1841. ";
 preguntaids[68] = 1841


//  Id pregunta: 8034 Año de creación de pregunta: 2011
 questions[69]= "70)  Cuando un sistema se debe modificar para que contemple un cambio en las necesidades de los usuarios, se hace referencia al:";
 choices[69]= new Array();
 choices[69][0] = "Mantenimiento Correctivo.";
 choices[69][1] = "Mantenimiento Evolutivo.";
 choices[69][2] = "Mantenimiento Adaptativo.";
 choices[69][3] = "Mantenimiento Perfectivo.";
 answers[69] = 1;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 8034. Examen TIC A2 2010";
 preguntaids[69] = 8034


//  Id pregunta: 4671 Año de creación de pregunta: 2002
 questions[70]= "71)  Del protocolo IKE de IPSec podemos decir:";
 choices[70]= new Array();
 choices[70][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[70][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[70][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[70][3] = "nada de lo anterior es cierto";
 answers[70] = 0;
 units[70] = ['119'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4671. Consultar rfc 2409";
 preguntaids[70] = 4671


//  Id pregunta: 2773 Año de creación de pregunta: 2002
 questions[71]= "72)  El modelo de referencia ANSI/SPARC para la estandarizaci&oacute;n de los SGBD:";
 choices[71]= new Array();
 choices[71][0] = "El n&uacute;cleo de la arquitectura lo constituye el diccionario de datos";
 choices[71][1] = "Los metadatos no forman parte del diccionario";
 choices[71][2] = "Indica la forma de instrumentar las interacciones del SGBD";
 choices[71][3] = "La administraci&oacute;n de la empresa dise&ntilde;a los esquemas externos";
 answers[71] = 0;
 units[71] = ['60'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2773. ";
 preguntaids[71] = 2773


//  Id pregunta: 2521 Año de creación de pregunta: 2004
 questions[72]= "73)  Las aplicaciones Java son comprobadas:";
 choices[72]= new Array();
 choices[72][0] = "en tiempo de compilaci&oacute;n";
 choices[72][1] = "en tiempo de ejecuci&oacute;n";
 choices[72][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[72][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[72] = 2;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2521. Similar a examen TIC SS A 2003";
 preguntaids[72] = 2521


//  Id pregunta: 979 Año de creación de pregunta: 2016
 questions[73]= "74)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[73]= new Array();
 choices[73][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[73][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[73][2] = "a y b son correctas";
 choices[73][3] = "a y b son incorrectas";
 answers[73] = 2;
 units[73] = ['4', '7', '8', '9'];
 blocks[73] = ['A1', 'A2'];
 comments[73] = "Id Pregunta: 979. Ley 40/2015";
 preguntaids[73] = 979


//  Id pregunta: 6705 Año de creación de pregunta: 2009
 questions[74]= "75)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[74]= new Array();
 choices[74][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[74][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[74][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[74][3] = "Antes del 31 de diciembre de 2008";
 answers[74] = 1;
 units[74] = ['42'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 6705. MAP 2008 A1";
 preguntaids[74] = 6705


