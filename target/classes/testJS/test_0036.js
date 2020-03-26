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
//  Id pregunta: 4478 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a alguno de los principios en virtud de los cuales se han definido siete niveles en el Modelo de Referencia OSI?:";
 choices[0]= new Array();
 choices[0][0] = "Definir un n&uacute;mero de capas muy elevado, de modo que la tarea de integrar las capas no sea m&aacute;s dif&iacute;cil de lo estrictamente necesario";
 choices[0][1] = "Crear niveles separados para aquellas funciones que son manifiestamente diferentes por raz&oacute;n del proceso realizado y de la tecnolog&iacute;a involucrada";
 choices[0][2] = "Crear una nueva capa siempre que exista necesidad de fragmentar de nuevo los datos en PDUs de menor tama&ntilde;o para de este modo optimizar el uso de la red";
 choices[0][3] = "Crear una nueva capa siempre que exista necesidad de un nuevo tipo de aplicaci&oacute;n final entre sistemas";
 answers[0] = 1;
 units[0] = ['105'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4478. ";
 preguntaids[0] = 4478


//  Id pregunta: 8244 Año de creación de pregunta: 2011
 questions[1]= "2)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[1][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[1][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar la red por alg&uacute;n motivo.";
 choices[1][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[1] = 2;
 units[1] = ['117'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8244. Examen UPM A2 2011";
 preguntaids[1] = 8244


//  Id pregunta: 8260 Año de creación de pregunta: 2011
 questions[2]= "3)  En un organismo p&uacute;blico se gestionan datos personales relativos a la comisi&oacute;n de infracciones administrativas, pero, en ning&uacute;n caso, infracciones penales, &iquest;deben cifrar las transmisiones que puedan hacer de esos datos, a trav&eacute;s de redes p&uacute;blicas?";
 choices[2]= new Array();
 choices[2][0] = "NO en todos los casos. Como no se trata de infracciones penales las medidas de seguridad requeridas son las de nivel bajo, siempre que esos datos queden en el &aacute;mbito de la Administraci&oacute;n";
 choices[2][1] = "Si, se trata de datos de infracciones, que requieren por tanto medidas de nivel alto, aunque el cifrado se puede sustituir por cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros";
 choices[2][2] = "NO se requiere tal cifrado, pues las medidas que requieren ese tipo de datos son las de nivel medio y el mencionado cifrado es una medida de seguridad de nivel alto.";
 choices[2][3] = "Si. El cifrado a trav&eacute;s de redes p&uacute;blicas, a diferencia del realizado a trav&eacute;s de redes inal&aacute;mbricas es una medida de nivel medio, requerida en el caso planteado.";
 answers[2] = 2;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 8260. Examen TIC A2 2010 interna";
 preguntaids[2] = 8260


//  Id pregunta: 10424 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es un API de la especificaci&oacute;n J2EE?";
 choices[3]= new Array();
 choices[3][0] = "JNDI.";
 choices[3][1] = "API Java IDL.";
 choices[3][2] = "JTA (Java Transaction API).";
 choices[3][3] = "JMS (Java Mobile Service).";
 answers[3] = 3;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10424. ";
 preguntaids[3] = 10424


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


//  Id pregunta: 6527 Año de creación de pregunta: 2003
 questions[5]= "6)  Se&ntilde;ale cu&aacute;l de las siguientes opciones es correcta:";
 choices[5]= new Array();
 choices[5][0] = "El bus ISA es posterior al bus PCI";
 choices[5][1] = "El bus EISA es anterior al bus ISA";
 choices[5][2] = "El bus PCI es anterior al bus AGP";
 choices[5][3] = "El bus USB es posterior al bus AGP";
 answers[5] = 2;
 units[5] = ['52'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6527. ";
 preguntaids[5] = 6527


//  Id pregunta: 2217 Año de creación de pregunta: 2002
 questions[6]= "7)  La decisi&oacute;n sobre si la estructura inform&aacute;tica de una organizaci&oacute;n debe ser centralizada o descentralizada, debe tomarse en la etapa de:";
 choices[6]= new Array();
 choices[6][0] = "Planificaci&oacute;n del sistema";
 choices[6][1] = "Especificaci&oacute;n del sistema";
 choices[6][2] = "Dise&ntilde;o del sistema";
 choices[6][3] = "Codificaci&oacute;n del sistema";
 answers[6] = 0;
 units[6] = ['24'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2217. ";
 preguntaids[6] = 2217


//  Id pregunta: 10157 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;C&uacute;al de las siguientes opciones NO es un plan incluido en la Agenda Digital para Espa&ntilde;a?";
 choices[7]= new Array();
 choices[7][0] = "Contenidos y econom&iacute;a digital.";
 choices[7][1] = "Inclusi&oacute;n digital y empleabilidad.";
 choices[7][2] = "Confianza en el &aacute;mbito digital.";
 choices[7][3] = "Servicios p&uacute;blicos en la nube.";
 answers[7] = 3;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 10157. Examen TIC A1 2014";
 preguntaids[7] = 10157


//  Id pregunta: 4309 Año de creación de pregunta: 2004
 questions[8]= "9)  ECMAscript, con cu&aacute;l de los siguientes lenguajes de script se relaciona:";
 choices[8]= new Array();
 choices[8][0] = "JavaScript";
 choices[8][1] = "VBScript";
 choices[8][2] = "Jscript";
 choices[8][3] = "Perlscript";
 answers[8] = 0;
 units[8] = ['62'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 4309. Similar a examen TIC MAP A 2004";
 preguntaids[8] = 4309


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[9]= "10)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[9]= new Array();
 choices[9][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[9][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[9][2] = "Ninguna es correcta.";
 choices[9][3] = "A y B son correctas.";
 answers[9] = 1;
 units[9] = ['14'];
 blocks[9] = ['A3'];
 comments[9] = "Id Pregunta: 391. Pol&iacute;ticas de igualdad";
 preguntaids[9] = 391


//  Id pregunta: 8203 Año de creación de pregunta: 2011
 questions[10]= "11)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[10]= new Array();
 choices[10][0] = "Actividades de Seguimiento y Control.";
 choices[10][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[10][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[10][3] = "Actividades de Inicio del Proyecto.";
 answers[10] = 1;
 units[10] = ['91'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 8203. Examen TIC A2 2010 interna";
 preguntaids[10] = 8203


//  Id pregunta: 4383 Año de creación de pregunta: 2004
 questions[11]= "12)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "No existen";
 choices[11][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[11][2] = "Pueden ser considerados como filtros de paquetes";
 choices[11][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[11] = 3;
 units[11] = ['119'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4383. Examen TAI 2004";
 preguntaids[11] = 4383


//  Id pregunta: 1028 Año de creación de pregunta: 2016
 questions[12]= "13)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[12]= new Array();
 choices[12][0] = "Cabr&aacute; recurso de alzada";
 choices[12][1] = "Cabr&aacute; el nuevo protesto";
 choices[12][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[12][3] = "No cabr&aacute; recurso alguno";
 answers[12] = 3;
 units[12] = ['4', '7', '8', '9'];
 blocks[12] = ['A1', 'A2'];
 comments[12] = "Id Pregunta: 1028. Ley 40/2015";
 preguntaids[12] = 1028


//  Id pregunta: 8055 Año de creación de pregunta: 2011
 questions[13]= "14)  COBOL es el acr&oacute;nimo de:";
 choices[13]= new Array();
 choices[13][0] = "COmputer BUsiness-Oriented Language (Lenguaje de Ordenador Orientado a Negocios).";
 choices[13][1] = "COmmon Business-Oriented Language (Lenguaje Com&uacute;n Orientado a Negocios).";
 choices[13][2] = "Common Object Business Oriented Language (Lenguaje Com&uacute;n Orientado a Objetos de Negocio).";
 choices[13][3] = "No es un acr&oacute;nimo.";
 answers[13] = 1;
 units[13] = ['60'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8055. Examen TIC A2 2010";
 preguntaids[13] = 8055


//  Id pregunta: 10781 Año de creación de pregunta: 2015
 questions[14]= "15)  La protecci&oacute;n contra Denegaci&oacute;n de servicio se recoge en la Gu&iacute; CCN-STIC:";
 choices[14]= new Array();
 choices[14][0] = "828";
 choices[14][1] = "817";
 choices[14][2] = "820";
 choices[14][3] = "823";
 answers[14] = 2;
 units[14] = ['46'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 10781. ";
 preguntaids[14] = 10781


//  Id pregunta: 7204 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Qu&eacute; comandos se usan en POP3 para descargarse y borrar los dos primeros mensajes del buz&oacute;n de correo?";
 choices[15]= new Array();
 choices[15][0] = "RETR 1 DELE 1 RETR 2 DELE 2";
 choices[15][1] = "RETE 1,2 DELE 1,2";
 choices[15][2] = "RETR 1-2 DELE 1-2";
 choices[15][3] = "RETR 1 RETR 2";
 answers[15] = 0;
 units[15] = ['116'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7204. Castilla La Mancha 2009";
 preguntaids[15] = 7204


//  Id pregunta: 2421 Año de creación de pregunta: 2006
 questions[16]= "17)  El m&eacute;todo en el que con criterios el decisor estima una matriz (nxn) A=(a,), donde a es la medida subjetiva de la importancia relativa del criterio i frente al j en una escala normalizada de 1 (igual de importante) a 9 (absolutamente m&aacute;s importante) es:";
 choices[16]= new Array();
 choices[16][0] = "m&eacute;todo Delphi";
 choices[16][1] = "m&eacute;todo de las utilidades relativas";
 choices[16][2] = "m&eacute;todo de la entrop&iacute;a";
 choices[16][3] = "AHP (Analytic Hierarchy Process)";
 answers[16] = 3;
 units[16] = ['38'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2421. ";
 preguntaids[16] = 2421


//  Id pregunta: 8763 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Cu&aacute;l es la norma que regula el proceso de auditor&iacute;a?";
 choices[17]= new Array();
 choices[17][0] = "Aquella que se haya aprobado en el &aacute;mbito organizativo en el que se desarrolla la auditor&iacute;a";
 choices[17][1] = "COBIT";
 choices[17][2] = "El mandato para la auditor&iacute;a";
 choices[17][3] = "La pol&iacute;tica de seguridad de la organizaci&oacute;n";
 answers[17] = 2;
 units[17] = ['36'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 8763. ";
 preguntaids[17] = 8763


//  Id pregunta: 968 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Administraciones P&uacute;blicas:";
 choices[18]= new Array();
 choices[18][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[18][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[18][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[18][3] = "todas son correctas";
 answers[18] = 1;
 units[18] = ['4', '7', '8', '9'];
 blocks[18] = ['A1', 'A2'];
 comments[18] = "Id Pregunta: 968. Ley 40/2015";
 preguntaids[18] = 968


//  Id pregunta: 1249 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes NO es un elemento de una red MPLS seg&uacute;n el RFC 3031?";
 choices[19]= new Array();
 choices[19][0] = "LSR - Label Switching Router.";
 choices[19][1] = "LDP - Label Distribution Protocol.";
 choices[19][2] = "ILM - Incoming Label Mode.";
 choices[19][3] = "LSP - Label Switched Path.";
 answers[19] = 2;
 units[19] = ['107'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1249. ";
 preguntaids[19] = 1249


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[20]= new Array();
 choices[20][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[20][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[20][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[20][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[20] = 3;
 units[20] = ['11'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 321. Presupuestos generales";
 preguntaids[20] = 321


//  Id pregunta: 8122 Año de creación de pregunta: 2011
 questions[21]= "22)  Actualmente, el World Wide Web Consortium (W3C) trabaja en los siguientes est&aacute;ndares y herramientas de integraci&oacute;n de datos de entrada. Seleccionar la respuesta ERR&Oacute;NEA:";
 choices[21]= new Array();
 choices[21][0] = "SRGS tiene corno funci&oacute;n principal permitir que una aplicaci&oacute;n de voz indique a un reconocedor qu&eacute; es lo que tiene que escuchar, es decir, palabras, modelos en los que estas palabras surgen, lenguaje hablado de cada palabra, etc.";
 choices[21][1] = "SSML, lenguaje de marcado de S&iacute;ntesis del Habla, basado en XML, forma parte del proceso de salida de informaci&oacute;n y funciona como componente de conversi&oacute;n ayudando a generar habla sint&eacute;tica.";
 choices[21][2] = "SlSR permite describir anotaciones sobre reglas gramaticales para extraer resultados sem&aacute;nticos a trav&eacute;s del reconocimiento del habla. El resultado obtenido puede expresarse en formato XML, usando el lenguaje EMMA.";
 choices[21][3] = "EMMA es un lenguaje de etiquetado que permite crear di&aacute;logos con los que se puede interactuar escuchando comandos hablados, controlables a trav&eacute;s de entradas de voz";
 answers[21] = 3;
 units[21] = ['81'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8122. Examen TIC A2 2010";
 preguntaids[21] = 8122


//  Id pregunta: 2910 Año de creación de pregunta: 2002
 questions[22]= "23)  Indique la afirmaci&oacute;n falsa, relativa a la arquitectura cliente/servidor:";
 choices[22]= new Array();
 choices[22][0] = "El di&aacute;logo entre cliente y servidor se inicia a requerimiento del servidor";
 choices[22][1] = "El servidor es el equipo que se encarga de suministrar servicios, como consultas a la base de datos, y el cliente es el equipo que muestra y formatea los datos";
 choices[22][2] = "Durante el desarrollo de las aplicaciones que siguen esta estructura, a veces hay que decidir que partes de la aplicaci&oacute;n se ejecutan en el servidor y cu&aacute;les en el cliente";
 choices[22][3] = "Las aplicaciones que se ejecutan en entorno Web siguen esta arquitectura";
 answers[22] = 0;
 units[22] = ['55'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2910. ";
 preguntaids[22] = 2910


//  Id pregunta: 5387 Año de creación de pregunta: 2006
 questions[23]= "24)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos que deben funcionar simult&aacute;neamente en todo momento";
 choices[23]= new Array();
 choices[23][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[23][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[23][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[23][3] = "No puede ser conocido a priori";
 answers[23] = 1;
 units[23] = ['114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5387. ";
 preguntaids[23] = 5387


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[24]= new Array();
 choices[24][0] = "Art. 13, L.O.3/2007.";
 choices[24][1] = "Art. 14, L.O.3/2007.";
 choices[24][2] = "Art. 11, L.O.3/2007.";
 choices[24][3] = "Ninguna es correcta.";
 answers[24] = 2;
 units[24] = ['14'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 378. Pol&iacute;ticas de igualdad";
 preguntaids[24] = 378


//  Id pregunta: 3721 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Qu&eacute; entidades certifican ISO-9000 en Espa&ntilde;a?:";
 choices[25]= new Array();
 choices[25][0] = "S&oacute;lo ISO";
 choices[25][1] = "S&oacute;lo AENOR";
 choices[25][2] = "Empresas privadas";
 choices[25][3] = "AENOR y empresas privadas";
 answers[25] = 3;
 units[25] = ['98'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3721. ";
 preguntaids[25] = 3721


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[26]= "27)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[26]= new Array();
 choices[26][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[26][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[26][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[26][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[26] = 1;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[26] = 215


//  Id pregunta: 4735 Año de creación de pregunta: 2002
 questions[27]= "28)  El protocolo ARP:";
 choices[27]= new Array();
 choices[27][0] = "S&oacute;lo funciona si hay un proxy configurado";
 choices[27][1] = "Permite relacionar puertos TCP y direcciones IP";
 choices[27][2] = "Permite relacionar puertos TCP  y direcciones MAC";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 3;
 units[27] = ['102'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4735. ";
 preguntaids[27] = 4735


//  Id pregunta: 5684 Año de creación de pregunta: 2007
 questions[28]= "29)  &iquest;Qu&eacute; son las siguientes herramientas comerciales: DESIGNER de Oracle, EASY CASE de Evergreen, PREDICT CASE de Software AG y ROSE de Rational?";
 choices[28]= new Array();
 choices[28][0] = "Herramientas CASE de pruebas y generaci&oacute;n de c&oacute;digo.";
 choices[28][1] = "Herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[28][2] = "Herramientas para la m&eacute;trica de software.";
 choices[28][3] = "Herramientas CASE de an&aacute;lisis y dise&ntilde;o.";
 answers[28] = 3;
 units[28] = ['86'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 5684. ";
 preguntaids[28] = 5684


//  Id pregunta: 8451 Año de creación de pregunta: 2011
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de los siguientes no se corresponde con un est&aacute;ndar de Sistemas Geogr&aacute;ficos de Informaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "ISO 19115.";
 choices[29][1] = "ISO 19130.";
 choices[29][2] = "ISO 19139";
 choices[29][3] = "Todos son est&aacute;ndares de sistemas SIG.";
 answers[29] = 3;
 units[29] = ['71'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8451. ";
 preguntaids[29] = 8451


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[30]= new Array();
 choices[30][0] = "En t&iacute;tulos-valores.";
 choices[30][1] = "Las respuestas a) y b) son correctas.";
 choices[30][2] = "Las respuestas a) y b) no son correctas.";
 choices[30][3] = "En cuenta.";
 answers[30] = 1;
 units[30] = ['11'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 316. Presupuestos generales";
 preguntaids[30] = 316


//  Id pregunta: 2691 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Qu&eacute; se entiende por quantum?:";
 choices[31]= new Array();
 choices[31][0] = "El porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[31][1] = "El porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[31][2] = "La cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[31][3] = "El n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio &oacute; para reorganizar el mismo";
 answers[31] = 2;
 units[31] = ['56'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2691. ";
 preguntaids[31] = 2691


//  Id pregunta: 10355 Año de creación de pregunta: 2015
 questions[32]= "33)  Seleccione la respuesta verdadera:";
 choices[32]= new Array();
 choices[32][0] = "El fan-in de un m&oacute;dulo es usado como una medida de reusabilidad";
 choices[32][1] = "El fan-in de un m&oacute;dulo es usado como una medida de complejidad.";
 choices[32][2] = "Las dos anteriores son verdaderas";
 choices[32][3] = "Todas son falsas";
 answers[32] = 0;
 units[32] = ['89'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 10355. ";
 preguntaids[32] = 10355


//  Id pregunta: 10074 Año de creación de pregunta: 2015
 questions[33]= "34)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[33]= new Array();
 choices[33][0] = "JOB";
 choices[33][1] = "COMMENT";
 choices[33][2] = "EXEC";
 choices[33][3] = "DD";
 answers[33] = 1;
 units[33] = ['60', '61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10074. Examen TIC A2 2014";
 preguntaids[33] = 10074


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[34]= "35)  En M&eacute;trica v3, la elaboraci&oacute;n de un cat&aacute;logo detallado de requisitos que describa de forma precisa el sistema de informaci&oacute;n, compete a personas con perfil:";
 choices[34]= new Array();
 choices[34][0] = "Consultor.";
 choices[34][1] = "Jefe de Proyecto.";
 choices[34][2] = "Directivo.";
 choices[34][3] = "Analista.";
 answers[34] = 3;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 823. AGE A2 2015";
 preguntaids[34] = 823


//  Id pregunta: 5952 Año de creación de pregunta: 2007
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (JointPhotographic Experts Group)?";
 choices[35]= new Array();
 choices[35][0] = "B&aacute;sico/secuencial";
 choices[35][1] = "Jer&aacute;rquico";
 choices[35][2] = "Progresivo";
 choices[35][3] = "Conjugado modificado";
 answers[35] = 3;
 units[35] = ['62'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 5952. ";
 preguntaids[35] = 5952


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[36]= "37)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[36][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[36][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[36][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[36] = 3;
 units[36] = ['22'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 511. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[36] = 511


//  Id pregunta: 7964 Año de creación de pregunta: 2011
 questions[37]= "38)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es:";
 choices[37]= new Array();
 choices[37][0] = "GPRS.";
 choices[37][1] = "HSDPA.";
 choices[37][2] = "HSUPA.";
 choices[37][3] = "UMTS.";
 answers[37] = 2;
 units[37] = ['117'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7964. Examen TIC A2 2010";
 preguntaids[37] = 7964


//  Id pregunta: 970 Año de creación de pregunta: 2016
 questions[38]= "39)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[38]= new Array();
 choices[38][0] = "personalidad jur&iacute;dica propia";
 choices[38][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[38][2] = "personalidad jur&iacute;dica plena";
 choices[38][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[38] = 1;
 units[38] = ['4', '7', '8', '9'];
 blocks[38] = ['A1', 'A2'];
 comments[38] = "Id Pregunta: 970. Ley 40/2015";
 preguntaids[38] = 970


//  Id pregunta: 3914 Año de creación de pregunta: 2002
 questions[39]= "40)  Las consideraciones sobre an&aacute;lisis coste/beneficio y an&aacute;lisis de riesgos, corresponden a la siguiente &aacute;rea de un proyecto inform&aacute;tico:";
 choices[39]= new Array();
 choices[39][0] = "Planificaci&oacute;n del proyecto";
 choices[39][1] = "An&aacute;lisis de viabilidad";
 choices[39][2] = "Dise&ntilde;o de la soluci&oacute;n";
 choices[39][3] = "Seguimiento del proyecto";
 answers[39] = 1;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3914. ";
 preguntaids[39] = 3914


//  Id pregunta: 7386 Año de creación de pregunta: 2010
 questions[40]= "41)  En el protocolo IPv6, las direcciones constan de:";
 choices[40]= new Array();
 choices[40][0] = "6 bytes";
 choices[40][1] = "8 bytes";
 choices[40][2] = "16 bytes";
 choices[40][3] = "32 bytes";
 answers[40] = 2;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7386. Examen TIC B 2009";
 preguntaids[40] = 7386


//  Id pregunta: 9192 Año de creación de pregunta: 2014
 questions[41]= "42)  El algoritmo RSA es un algoritmo:";
 choices[41]= new Array();
 choices[41][0] = "De triple clave.";
 choices[41][1] = "Asim&eacute;trico.";
 choices[41][2] = "De clave privada.";
 choices[41][3] = "Sim&eacute;trico.";
 answers[41] = 1;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9192. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[41] = 9192


//  Id pregunta: 1523 Año de creación de pregunta: 2016
 questions[42]= "43)  Dentro de los m&eacute;todos de acceso al medio en redes, &iquest;cu&aacute;l de las siguientes t&eacute;cnicas se encuentra dentro de las denominadas de contienda con escucha?";
 choices[42]= new Array();
 choices[42][0] = "Token ring.";
 choices[42][1] = "CSMA.";
 choices[42][2] = "Aloha puro.";
 choices[42][3] = "Aloha ranurado.";
 answers[42] = 1;
 units[42] = ['102'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1523. ";
 preguntaids[42] = 1523


//  Id pregunta: 5588 Año de creación de pregunta: 2007
 questions[43]= "44)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[43]= new Array();
 choices[43][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[43][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[43][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[43][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[43] = 2;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 5588. ";
 preguntaids[43] = 5588


//  Id pregunta: 2295 Año de creación de pregunta: 2002
 questions[44]= "45)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, no ser&aacute; preciso el consentimiento del interesado en la comunicaci&oacute;n de datos a un tercero cuando:";
 choices[44]= new Array();
 choices[44][0] = "Cuando la cesi&oacute;n est&aacute; autorizada por una Ley";
 choices[44][1] = "Cuando la cesi&oacute;n est&aacute; autorizada por un Real Decreto";
 choices[44][2] = "Cuando la comunicaci&oacute;n tenga por destinatario al Presidente del Gobierno";
 choices[44][3] = "Cuando se realice para garantizar el inter&eacute;s general";
 answers[44] = 0;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2295. ";
 preguntaids[44] = 2295


//  Id pregunta: 964 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[45]= new Array();
 choices[45][0] = "las previsiones de la ley 40/2015 y supletoriamente por su normativa espec&iacute;fica";
 choices[45][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la ley 40/2015";
 choices[45][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[45][3] = "exclusivamente por las previsiones de la ley 40/2015";
 answers[45] = 1;
 units[45] = ['4', '7', '8', '9'];
 blocks[45] = ['A1', 'A2'];
 comments[45] = "Id Pregunta: 964. Ley 40/2015";
 preguntaids[45] = 964


//  Id pregunta: 3470 Año de creación de pregunta: 2006
 questions[46]= "47)  La firma electr&oacute;nica avanzada es aquella que cumple que:";
 choices[46]= new Array();
 choices[46][0] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n y est&aacute; creada por un dispositivo de control de firma seguro.";
 choices[46][1] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, est&aacute; creada por un dispositivo de control de firma seguro, tiene control exclusivo del firmante al crearla y no est&aacute; vinculada a los datos.";
 choices[46][2] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo del firmante al crearla y est&aacute; vinculada a los datos.";
 choices[46][3] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo de firmante al crearla y est&aacute; basada en un certificado reconocido.";
 answers[46] = 2;
 units[46] = ['19'];
 blocks[46] = ['A4'];
 comments[46] = "Id Pregunta: 3470. ";
 preguntaids[46] = 3470


//  Id pregunta: 5631 Año de creación de pregunta: 2007
 questions[47]= "48)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[47]= new Array();
 choices[47][0] = "El lugar donde este establecido el prestador de servicios";
 choices[47][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[47][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[47][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[47] = 1;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 5631. Ley 34/2002, art&iacute;culo 29";
 preguntaids[47] = 5631


//  Id pregunta: 6530 Año de creación de pregunta: 2003
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa en una soluci&oacute;n RAID.";
 choices[48]= new Array();
 choices[48][0] = "En RAID 0 un fallo en un disco provoca la p&eacute;rdida de todos los datos";
 choices[48][1] = "RAID 4 es como RAID 0 m&aacute;s un disco de paridad dedicado";
 choices[48][2] = "El RAID 1 no mejora el rendimiento en escritura respecto a RAID 0";
 choices[48][3] = "RAID 5 es uno de los niveles RAID m&aacute;s comunes, y hace uso de un disco de paridad dedicado";
 answers[48] = 3;
 units[48] = ['53'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6530. ";
 preguntaids[48] = 6530


//  Id pregunta: 9796 Año de creación de pregunta: 2015
 questions[49]= "50)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[49]= new Array();
 choices[49][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[49][1] = "Informado, sostenible y solidario.";
 choices[49][2] = "Inteligente, sostenible e integrador.";
 choices[49][3] = "Arm&oacute;nico, estable y social.";
 answers[49] = 2;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 9796. ";
 preguntaids[49] = 9796


//  Id pregunta: 7273 Año de creación de pregunta: 2010
 questions[50]= "51)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[50]= new Array();
 choices[50][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[50][1] = "La capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[50][2] = "El esquema de codificaci&oacute;n";
 choices[50][3] = "Todas las respuestas anteriores son ciertas";
 answers[50] = 3;
 units[50] = ['117'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7273. ";
 preguntaids[50] = 7273


//  Id pregunta: 1774 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el art. 149.3 de la Constituci&oacute;n Espa&ntilde;ola, el derecho estatal ser&aacute; supletorio del derecho de las Comunidades Aut&oacute;nomas:";
 choices[51]= new Array();
 choices[51][0] = "En lo no asumido por &eacute;stas.";
 choices[51][1] = "En todo caso.";
 choices[51][2] = "En lo no atribuido a &eacute;stas de modo expreso.";
 choices[51][3] = "Seg&uacute;n lo dispongan sus respectivos Estatutos.";
 answers[51] = 1;
 units[51] = ['3'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 1774. ";
 preguntaids[51] = 1774


//  Id pregunta: 9924 Año de creación de pregunta: 2015
 questions[52]= "53)  Seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre entidades registrales &iquest;En qu&eacute; segmento se situa el idenficador de fichero?";
 choices[52]= new Array();
 choices[52][0] = "De asunto";
 choices[52][1] = "De origen";
 choices[52][2] = "De destino";
 choices[52][3] = "De anexo";
 answers[52] = 3;
 units[52] = ['44'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 9924. ";
 preguntaids[52] = 9924


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[53]= "54)  El recurso de alzada puede interponerse:";
 choices[53]= new Array();
 choices[53][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[53][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[53][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[53][3] = "Ante el Defensor del Pueblo";
 answers[53] = 1;
 units[53] = ['8'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 258. Ley 39/2015";
 preguntaids[53] = 258


//  Id pregunta: 9987 Año de creación de pregunta: 2015
 questions[54]= "55)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[54]= new Array();
 choices[54][0] = "Garantiza la confidencialidad de un documento.";
 choices[54][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[54][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[54][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[54] = 3;
 units[54] = ['7'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 9987. Examen TIC A2 2014";
 preguntaids[54] = 9987


//  Id pregunta: 9956 Año de creación de pregunta: 2015
 questions[55]= "56)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Estrategia de Ciberseguridad Nacional?";
 choices[55]= new Array();
 choices[55][0] = "2011";
 choices[55][1] = "2012";
 choices[55][2] = "2013";
 choices[55][3] = "2014";
 answers[55] = 2;
 units[55] = ['46'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 9956. ";
 preguntaids[55] = 9956


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la respuesta correcta:";
 choices[56]= new Array();
 choices[56][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[56][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[56][2] = "Las respuestas A y B son correctas.";
 choices[56][3] = "Las respuestas A y B son falsas.";
 answers[56] = 2;
 units[56] = ['5'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 101. Uni&oacute;n Europea";
 preguntaids[56] = 101


//  Id pregunta: 5833 Año de creación de pregunta: 2007
 questions[57]= "58)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Un estadio social y econ&oacute;mico de desarrollo.";
 choices[57][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar.";
 choices[57][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles.";
 choices[57][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[57] = 2;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 5833. Examen 2006 JCYL";
 preguntaids[57] = 5833


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[58]= "59)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[58]= new Array();
 choices[58][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[58][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[58][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[58][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[58] = 0;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 56. Constituci&oacute;n de 1978";
 preguntaids[58] = 56


//  Id pregunta: 3660 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes es una particularidad del dise&ntilde;o orientado a objetos?";
 choices[59]= new Array();
 choices[59][0] = "Modularidad.";
 choices[59][1] = "Ocultaci&oacute;n de la informaci&oacute;n.";
 choices[59][2] = "Abstracci&oacute;n.";
 choices[59][3] = "Todos lo son.";
 answers[59] = 3;
 units[59] = ['89'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3660. ";
 preguntaids[59] = 3660


//  Id pregunta: 2655 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;En qu&eacute; generaci&oacute;n aparecen los microprocesadores?:";
 choices[60]= new Array();
 choices[60][0] = "Segunda";
 choices[60][1] = "Tercera";
 choices[60][2] = "Cuarta";
 choices[60][3] = "Las generaciones solo se aplican a los lenguajes de programaci&oacute;n";
 answers[60] = 2;
 units[60] = ['54'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2655. ";
 preguntaids[60] = 2655


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[61]= "62)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[61]= new Array();
 choices[61][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[61][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[61][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[61][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[61] = 3;
 units[61] = ['11'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 315. Presupuestos generales";
 preguntaids[61] = 315


//  Id pregunta: 7508 Año de creación de pregunta: 2010
 questions[62]= "63)  El entorno Microsoft, WebDAV:";
 choices[62]= new Array();
 choices[62][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio.";
 choices[62][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e Intranets.";
 choices[62][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red.";
 choices[62][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos.";
 answers[62] = 1;
 units[62] = ['63'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7508. Map 2005";
 preguntaids[62] = 7508


//  Id pregunta: 2659 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Para qu&eacute; sirve el objeto BindingCollection de Visual Basic?";
 choices[63]= new Array();
 choices[63][0] = "Es falso que Visual Basic incluya dicho objeto.";
 choices[63][1] = "Es un recolector de memoria que libera la memoria que ha sido usada por objetos que ya no existen.";
 choices[63][2] = "Enlaza clases como or&iacute;genes de datos a controles orientados a datos.";
 choices[63][3] = "Todas las respuestas son falsas.";
 answers[63] = 2;
 units[63] = ['58'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2659. ";
 preguntaids[63] = 2659


//  Id pregunta: 10083 Año de creación de pregunta: 2015
 questions[64]= "65)  En una red Ethernet 10BASE-T, un paquete de 1000 KBytes se transmite en:";
 choices[64]= new Array();
 choices[64][0] = "0,81 ms";
 choices[64][1] = "8,19 ms";
 choices[64][2] = "819 ms";
 choices[64][3] = "81,9 ms";
 answers[64] = 2;
 units[64] = ['104'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 10083. Examen TIC A2 2014";
 preguntaids[64] = 10083


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[65]= new Array();
 choices[65][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[65][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[65][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[65][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[65] = 3;
 units[65] = ['11'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 276. Presupuestos generales";
 preguntaids[65] = 276


//  Id pregunta: 6790 Año de creación de pregunta: 2010
 questions[66]= "67)  El protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian tr&aacute;fico es:";
 choices[66]= new Array();
 choices[66][0] = "OSPF.";
 choices[66][1] = "No es adecuado usar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas.";
 choices[66][2] = "RIP.";
 choices[66][3] = "BGP-4.";
 answers[66] = 3;
 units[66] = ['102'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 6790. TIC A 2009";
 preguntaids[66] = 6790


//  Id pregunta: 5909 Año de creación de pregunta: 2007
 questions[67]= "68)  En relaci&oacute;n con el diccionario de datos en el an&aacute;lisis estructurado, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[67]= new Array();
 choices[67][0] = "Contiene definiciones de todos los objetos de datos gestionados por el software";
 choices[67][1] = "Se configura con todas las definiciones de objetos de datos, sus atributos y sus relaciones";
 choices[67][2] = "Almacena tan solo una categorizaci&oacute;n de los objetos de datos, sin recoger sus atributos";
 choices[67][3] = "Contiene procedimientos almacenados";
 answers[67] = 0;
 units[67] = ['85'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 5909. ";
 preguntaids[67] = 5909


//  Id pregunta: 3845 Año de creación de pregunta: 2002
 questions[68]= "69)  Entre las ventajas que presenta el modelo en espiral o iterativo del ciclo de vida respecto a otros modelos, est&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Su rango de opciones acomoda las buenas caracter&iacute;sticas de los dem&aacute;s modelos de desarrollo de software";
 choices[68][1] = "Permite preparar la evoluci&oacute;n del ciclo de vida, crecimiento y cambios del producto software";
 choices[68][2] = "Es especialmente indicado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[68][3] = "Todas las anteriores son ventajas del modelo de ciclo de vida en espiral";
 answers[68] = 3;
 units[68] = ['82'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3845. ";
 preguntaids[68] = 3845


//  Id pregunta: 10673 Año de creación de pregunta: 2015
 questions[69]= "70)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[69]= new Array();
 choices[69][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[69][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[69][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[69][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[69] = 0;
 units[69] = ['7'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 10673. ";
 preguntaids[69] = 10673


//  Id pregunta: 9472 Año de creación de pregunta: 2014
 questions[70]= "71)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[70]= new Array();
 choices[70][0] = "N&ordm; de filas recuperadas por la consulta";
 choices[70][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[70][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[70][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[70] = 2;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9472. ";
 preguntaids[70] = 9472


//  Id pregunta: 9467 Año de creación de pregunta: 2014
 questions[71]= "72)  Sea la relaci&oacute;n SOLICITUD (CODIGO, FECHA, DNI_SOLICITANTE, NOM_SOLICITANTE, TEL_SOLICITANTE) y el atributo CODIGO su clave primaria, &iquest;en qu&eacute; forma normal se encuentra?";
 choices[71]= new Array();
 choices[71][0] = "Sin normalizar";
 choices[71][1] = "1&ordf; Forma Normal";
 choices[71][2] = "2&ordf; Forma Normal";
 choices[71][3] = "3&ordf; Forma Normal";
 answers[71] = 2;
 units[71] = ['61'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9467. ";
 preguntaids[71] = 9467


//  Id pregunta: 9912 Año de creación de pregunta: 2015
 questions[72]= "73)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[72]= new Array();
 choices[72][0] = "No se pueden incluir metadatos complementarios.";
 choices[72][1] = "Se pueden incluir metadatos complementarios.";
 choices[72][2] = "Se pueden incluir metadatos complementarios &uacute;nicamente en caso de intercambio de dichos expedientes.";
 choices[72][3] = "Se pueden incluir metadatos complementarios &uacute;nicamente para facilitar el almacenamiento de los expedientes.";
 answers[72] = 1;
 units[72] = ['44'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 9912. ";
 preguntaids[72] = 9912


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[73]= new Array();
 choices[73][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[73][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[73][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[73][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[73] = 0;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 477. Sociedad de la informaci&oacute;n";
 preguntaids[73] = 477


//  Id pregunta: 8706 Año de creación de pregunta: 2013
 questions[74]= "75)  &iquest;Qu&eacute; requisitos m&iacute;nimos de hardware tiene Windows 8?";
 choices[74]= new Array();
 choices[74][0] = "2 GB de RAM para versi&oacute;n de 64 bits y 1 GB para versi&oacute;n de 32 bits.";
 choices[74][1] = "1 GB para versi&oacute;n de 64 bits y 2 para versi&oacute;n de 32 bits.";
 choices[74][2] = "16 GB de espacio libre para versi&oacute;n de 64 bits.";
 choices[74][3] = "Ninguna es correcta.";
 answers[74] = 0;
 units[74] = ['58'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8706. ";
 preguntaids[74] = 8706


