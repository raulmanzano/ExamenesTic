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
//  Id pregunta: 8871 Año de creación de pregunta: 2013
 questions[0]= "1)  Si tuviese que fijar los l&iacute;mites de exposici&oacute;n en un nivel adecuado para la salud a la hora de instalar una antena, &iquest;qu&eacute; normativa ser&iacute;a la de referencia?";
 choices[0]= new Array();
 choices[0][0] = "Real Decreto 1066/2001";
 choices[0][1] = "Ley 9/2014 General de Telecomunicaciones";
 choices[0][2] = "Ley 56/2007,de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[0][3] = "Real Decreto 899/2009";
 answers[0] = 0;
 units[0] = ['121'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8871. ";
 preguntaids[0] = 8871


//  Id pregunta: 9196 Año de creación de pregunta: 2014
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[1]= new Array();
 choices[1][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[1][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[1][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[1][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[1] = 2;
 units[1] = ['119'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9196. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[1] = 9196


//  Id pregunta: 9189 Año de creación de pregunta: 2014
 questions[2]= "3)  En la gesti&oacute;n unificada de usuarios, &iquest;a qu&eacute; se denomina Single Sign-On (SSO)?";
 choices[2]= new Array();
 choices[2][0] = "Procedimiento de cifrado para autenticar a un usuario.";
 choices[2][1] = "Procedimiento asociado al cifrado en Secure Socket Layer (SSL).";
 choices[2][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de autenticaci&oacute;n.";
 choices[2][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS.";
 answers[2] = 2;
 units[2] = ['123'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9189. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[2] = 9189


//  Id pregunta: 9219 Año de creación de pregunta: 2014
 questions[3]= "4)  La norma ISO 27002";
 choices[3]= new Array();
 choices[3][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[3][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[3][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[3][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[3] = 1;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9219. Examen TIC A1 2013";
 preguntaids[3] = 9219


//  Id pregunta: 8876 Año de creación de pregunta: 2013
 questions[4]= "5)  Seg&uacute;n la ley 9/2014, el derecho de uso del dominio p&uacute;blico radioel&eacute;ctrico es otorgado por:";
 choices[4]= new Array();
 choices[4][0] = "La Agencia Estatal de Radiocomunicaciones";
 choices[4][1] = "MINETUR (actual Ministerio de Energ&iacute;a, Turismo y Agenda Digital)";
 choices[4][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[4][3] = "El Gobierno";
 answers[4] = 1;
 units[4] = ['121'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8876. ";
 preguntaids[4] = 8876


//  Id pregunta: 8910 Año de creación de pregunta: 2013
 questions[5]= "6)  Respecto al direccionamiento de los mensajes en X.400 indique, de las siguientes afirmaciones, la falsa:";
 choices[5]= new Array();
 choices[5][0] = "El campo P hace referencia al dominio concreto al que pertenece el usuario dentro de la organizaci&oacute;n";
 choices[5][1] = "En el campo C de la direcci&oacute;n de correo se almacena el c&oacute;digo ISO para el nombre del pa&iacute;s al que pertenece una direcci&oacute;n de correo";
 choices[5][2] = "El campo CN indica el nombre com&uacute;n que puede, a su vez, dividirse en los subcampos S (apellido) y N (nombre)";
 choices[5][3] = "La omisi&oacute;n del campo ADMD indica el valor &quot;blank&quot;, por lo que no se trata de un campo obligatorio";
 answers[5] = 2;
 units[5] = ['116'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8910. ";
 preguntaids[5] = 8910


//  Id pregunta: 8912 Año de creación de pregunta: 2013
 questions[6]= "7)  Indique qu&eacute; mensaje utiliza el emisor SMTP para comprobar si el servidor acepta el uso de extensiones de servicio SMTP";
 choices[6]= new Array();
 choices[6][0] = "DATA";
 choices[6][1] = "EHLO";
 choices[6][2] = "HELO";
 choices[6][3] = "MAIL";
 answers[6] = 1;
 units[6] = ['116'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8912. ";
 preguntaids[6] = 8912


//  Id pregunta: 9211 Año de creación de pregunta: 2014
 questions[7]= "8)  En el marco del modelo est&aacute;ndar de gesti&oacute;n de red definido por la ISO y la ITU-TX.700, son &aacute;reas de gesti&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "la gesti&oacute;n de fallos, de contabilidad, de configuraci&oacute;n, de calidad defuncionamiento y de seguridad.";
 choices[7][1] = "la gesti&oacute;n de fallos, de la demanda, de configuraci&oacute;n, de rendimiento y deseguridad.";
 choices[7][2] = "la gesti&oacute;n de fallos, de monitorizaci&oacute;n, de configuraci&oacute;n y de seguridad";
 choices[7][3] = "la gesti&oacute;n de monitorizaci&oacute;n, de trazabilidad, de configuraci&oacute;n y de seguridad";
 answers[7] = 0;
 units[7] = ['114'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 9211. Examen TIC A1 2013";
 preguntaids[7] = 9211


//  Id pregunta: 9194 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;C&oacute;mo se denomina el m&oacute;dulo criptogr&aacute;fico necesario para poder operar con el DNI electr&oacute;nico en un entorno UNIX?";
 choices[8]= new Array();
 choices[8][0] = "Cryptographic Service Provider (CSP).";
 choices[8][1] = "PKCS#11.";
 choices[8][2] = "PGP.";
 choices[8][3] = "Smart Card Mini-Driver.";
 answers[8] = 1;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 9194. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[8] = 9194


//  Id pregunta: 9119 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[9]= new Array();
 choices[9][0] = "Model View Controller.";
 choices[9][1] = "Multiple Views Canvas.";
 choices[9][2] = "Mobile Video Compatible.";
 choices[9][3] = "Mobile View Connector.";
 answers[9] = 0;
 units[9] = ['113'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9119. Examen TIC A2 2013";
 preguntaids[9] = 9119


//  Id pregunta: 8913 Año de creación de pregunta: 2013
 questions[10]= "11)  En relaci&oacute;n al est&aacute;ndar X.400 indique la afirmaci&oacute;n verdadera";
 choices[10]= new Array();
 choices[10][0] = "Tiene que funcionar necesariamente sobre redes IP";
 choices[10][1] = "El Subsistema de transferencia de mensajes (MTS) contempla la definici&oacute;n de agentes de usuario (UA) que son los componentes l&oacute;gicos que interact&uacute;an con el usuario para el env&iacute;o y recepci&oacute;n de los mensajes electr&oacute;nicos";
 choices[10][2] = "Una MPDU puede ser de tres tipos: sondas, informes de notificaci&oacute;n o entrega y el mensaje en s&iacute;";
 choices[10][3] = "P2 es el protocolo definido para la comunicaci&oacute;n entre el MTA y el agente del usuario (UA) a trav&eacute;s del elemento MS o repositorio de mensajes";
 answers[10] = 2;
 units[10] = ['116'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8913. ";
 preguntaids[10] = 8913


//  Id pregunta: 9195 Año de creación de pregunta: 2014
 questions[11]= "12)  Indique cu&aacute;l de las siguientes afirmaciones relacionadas con IPsec es FALSA:";
 choices[11]= new Array();
 choices[11][0] = "IPv6 incluye expl&iacute;citamente la posibilidad de utilizarlo.";
 choices[11][1] = "Puede operar en modo t&uacute;nel o en modo transporte.";
 choices[11][2] = "El protocolo AH proporciona confidencialidad.";
 choices[11][3] = "El protocolo ESP proporciona autenticaci&oacute;n.";
 answers[11] = 2;
 units[11] = ['119'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9195. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[11] = 9195


//  Id pregunta: 8872 Año de creación de pregunta: 2013
 questions[12]= "13)  Cuando un municipio elabora un instrumento de planificaci&oacute;n territorial o urban&iacute;stica:";
 choices[12]= new Array();
 choices[12][0] = "Deber&aacute;n obtener un informe sobre la adecuaci&oacute;n de dichos instrumentos de planificaci&oacute;n con la Ley 9/2014 y con la normativa sectorial de telecomunicaciones y sobre las necesidades de redes p&uacute;blicas de comunicaciones electr&oacute;nicas en el &aacute;mbito territorial a que se refieran.";
 choices[12][1] = "El informe lo emite el MINETUR (actual Ministerio de Energ&iacute;a, Turismo y Agenda Digital)";
 choices[12][2] = "Los instrumentos de planificaci&oacute;n territorial o urban&iacute;stica no son competencia estatal, por lo que no se debe emitir ning&uacute;n informe.";
 choices[12][3] = "a) y b) son correctas";
 answers[12] = 3;
 units[12] = ['121'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8872. ";
 preguntaids[12] = 8872


//  Id pregunta: 8875 Año de creación de pregunta: 2013
 questions[13]= "14)  Los prestadores de servicios de instalaci&oacute;n de telecomunicaciones:";
 choices[13]= new Array();
 choices[13][0] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n, por medios electr&oacute;nicos o telem&aacute;ticos, una declaraci&oacute;n responsable sobre el cumplimiento de los requisitos exigibles para el ejercicio de la actividad.";
 choices[13][1] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En 15 d&iacute;as sin respuesta, se entender&aacute; estimada la solicitud.";
 choices[13][2] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En 30 d&iacute;as sin respuesta, se entender&aacute; estimada la solicitud.";
 choices[13][3] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En un mes sin respuesta, se entender&aacute; estimada la solicitud.";
 answers[13] = 0;
 units[13] = ['121'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8875. ";
 preguntaids[13] = 8875


//  Id pregunta: 9213 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;A qui&eacute;n corresponde la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n de acuerdo a la Ley 9/2014, General de Telecomunicaciones?";
 choices[14]= new Array();
 choices[14][0] = "Al Gobierno.";
 choices[14][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[14][2] = "Al Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[14][3] = "A la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 answers[14] = 0;
 units[14] = ['121'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9213. Examen TIC A1 2013";
 preguntaids[14] = 9213


//  Id pregunta: 9205 Año de creación de pregunta: 2014
 questions[15]= "16)  Si el usuario A desea enviar un documento firmado digitalmente por &eacute;l al usuario B:";
 choices[15]= new Array();
 choices[15][0] = "El usuario A debe enviar el documento acompa&ntilde;ado del documento cifrado con la clave p&uacute;blica de B.";
 choices[15][1] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave p&uacute;blica de B.";
 choices[15][2] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave privada de A.";
 choices[15][3] = "El usuario A debe enviar el documento cifrado con la clave p&uacute;blica de B acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y todo cifrado con la clave privada de A.";
 answers[15] = 2;
 units[15] = ['119'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9205. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[15] = 9205


//  Id pregunta: 9091 Año de creación de pregunta: 2014
 questions[16]= "17)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[16]= new Array();
 choices[16][0] = "A, B, C, D.";
 choices[16][1] = "E, F, G, H.";
 choices[16][2] = "S, T, U, V.";
 choices[16][3] = "W, X, Y, Z.";
 answers[16] = 2;
 units[16] = ['114'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9091. Examen TIC-A1 2013";
 preguntaids[16] = 9091


//  Id pregunta: 8967 Año de creación de pregunta: 2013
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.320:";
 choices[17]= new Array();
 choices[17][0] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 choices[17][1] = "Utiliza como est&aacute;ndares de cifrado H.233 y H.244";
 choices[17][2] = "Uno de los tama&ntilde;os de cuadro es CIF (352x288)";
 choices[17][3] = "Uno de los tama&ntilde;os de cuadro es QCIF (176x144)";
 answers[17] = 1;
 units[17] = ['122'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8967. ";
 preguntaids[17] = 8967


//  Id pregunta: 9165 Año de creación de pregunta: 2014
 questions[18]= "19)  En el contexto de la seguridad, el shoulder surfing consiste en:";
 choices[18]= new Array();
 choices[18][0] = "Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.";
 choices[18][1] = "Uso de aplicaciones intermedias llamadas shoulders para la obtenci&oacute;n de los datos de navegaci&oacute;n.";
 choices[18][2] = "Espiar f&iacute;sicamente a los usuarios, para obtener generalmente claves de acceso al sistema.";
 choices[18][3] = "Es un sin&oacute;nimo del ataque man in the middle";
 answers[18] = 2;
 units[18] = ['120'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9165. Examen TIC A2 2013";
 preguntaids[18] = 9165


//  Id pregunta: 9188 Año de creación de pregunta: 2014
 questions[19]= "20)  Infraestructura de PKI. La autoridad de certificaci&oacute;n ra&iacute;z:";
 choices[19]= new Array();
 choices[19][0] = "No utiliza certificados digitales.";
 choices[19][1] = "Utiliza un certificado digital firmado por otra autoridad de certificaci&oacute;n.";
 choices[19][2] = "Utiliza un certifica digital autofirmado por ella misma.";
 choices[19][3] = "Utiliza un certificado digital emitido por la Administraci&oacute;n P&uacute;blica.";
 answers[19] = 2;
 units[19] = ['119'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9188. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[19] = 9188


//  Id pregunta: 9192 Año de creación de pregunta: 2014
 questions[20]= "21)  El algoritmo RSA es un algoritmo:";
 choices[20]= new Array();
 choices[20][0] = "De triple clave.";
 choices[20][1] = "Asim&eacute;trico.";
 choices[20][2] = "De clave privada.";
 choices[20][3] = "Sim&eacute;trico.";
 answers[20] = 1;
 units[20] = ['119'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9192. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[20] = 9192


//  Id pregunta: 9201 Año de creación de pregunta: 2014
 questions[21]= "22)  En seguridad inform&aacute;tica, cu&aacute;l de los siguientes procesos, puede considerarse un m&eacute;todo de hardening de un sistema:";
 choices[21]= new Array();
 choices[21][0] = "La reducci&oacute;n de software innecesario en el sistema.";
 choices[21][1] = "La instalaci&oacute;n de software para comprobar el estado de la red.";
 choices[21][2] = "La conexi&oacute;n a sistemas de almacenamiento (SAN o NAS).";
 choices[21][3] = "La aplicaci&oacute;n de bonding (agrupaci&oacute;n o trunking) en las interfaces de red.";
 answers[21] = 0;
 units[21] = ['120'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 9201. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[21] = 9201


//  Id pregunta: 8966 Año de creación de pregunta: 2013
 questions[22]= "23)  En los sistemas de videoconferencia las MCU:";
 choices[22]= new Array();
 choices[22][0] = "Son un componente obligatorio";
 choices[22][1] = "Son un componente opcional";
 choices[22][2] = "Permiten la comunicaci&oacute;n &uacute;nicamente entre dos terminales";
 choices[22][3] = "Permiten sesiones de videoconferencia s&oacute;lo para dos localizaciones remotas simult&aacute;neas";
 answers[22] = 1;
 units[22] = ['122'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8966. ";
 preguntaids[22] = 8966


//  Id pregunta: 9208 Año de creación de pregunta: 2014
 questions[23]= "24)  Indique la respuesta falsa:";
 choices[23]= new Array();
 choices[23][0] = "El estandar de autenticaci&oacute;n OAuth fue crado por la OATH (Initiative for Open Authentication).";
 choices[23][1] = "OAuth 2.0 no es compatible con OAuth 1.0.";
 choices[23][2] = "Graph API de Facebook solo soporta OAuth 2.0.";
 choices[23][3] = "Google soporta Oauth 2.0. como m&eacute;todo recomendado de autenticaci&oacute;n para todas sus APIs.";
 answers[23] = 0;
 units[23] = ['123'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9208. Oauth y OATH son conceptos diferentes.";
 preguntaids[23] = 9208


//  Id pregunta: 8968 Año de creación de pregunta: 2013
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.323:";
 choices[24]= new Array();
 choices[24][0] = "Es un est&aacute;ndar para videoconferencia sobre redes IP";
 choices[24][1] = "El gatekeeper es un componente principal";
 choices[24][2] = "Utiliza el protocolo H.235 como seguridad (autenticaci&oacute;n, integridad, etc.)";
 choices[24][3] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 answers[24] = 3;
 units[24] = ['122'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8968. ";
 preguntaids[24] = 8968


//  Id pregunta: 9169 Año de creación de pregunta: 2014
 questions[25]= "26)  Se&ntilde;ale de los siguientes el que NO es un lector de feeds RSS:";
 choices[25]= new Array();
 choices[25][0] = "Digg";
 choices[25][1] = "Feedly";
 choices[25][2] = "Mephisto";
 choices[25][3] = "Netvibes";
 answers[25] = 2;
 units[25] = ['125'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9169. Examen TIC A2 2013";
 preguntaids[25] = 9169


//  Id pregunta: 9193 Año de creación de pregunta: 2014
 questions[26]= "27)  El algoritmo DES:";
 choices[26]= new Array();
 choices[26][0] = "Es un algoritmo de cifrado asim&eacute;trico que codifica bloques de 64 bits empleando claves de 32 bits, con una permutaci&oacute;n al principio y otra al final del proceso.";
 choices[26][1] = "Es un algoritmo de cifrado por bloques que codifica bloques de 54 bits, y su estructura consta de 16 etapas.";
 choices[26][2] = "Es un algoritmo de cifrado sim&eacute;trico cuya estructura es una variaci&oacute;n de la red de Feistel.";
 choices[26][3] = "Es un algoritmo de cifrado de flujo que codifica flujos de 64 bits, empleando una clave de 64, aunque s&oacute;lo 56 bits son utilizados. Los 8 bits restantes comprueban la paridad.";
 answers[26] = 2;
 units[26] = ['119'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9193. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[26] = 9193


//  Id pregunta: 9228 Año de creación de pregunta: 2010
 questions[27]= "28)  Ordene de forma decreciente, en relaci&oacute;n al coste en hardware (puertas l&oacute;gicasequivalentes), las siguientes primitivas criptogr&aacute;ficas: funci&oacute;n resumen (ej. MD5 o SHA-1), cifrado asim&eacute;trico (ej. RSA o curvas el&iacute;pticas) y cifrado sim&eacute;trico (ej. AES o DES).";
 choices[27]= new Array();
 choices[27][0] = "Funci&oacute;n resumen, Cifrado asim&eacute;trico, Cifrado sim&eacute;trico.";
 choices[27][1] = "Funci&oacute;n resumen, Cifrado sim&eacute;trico, Cifrado asim&eacute;trico.";
 choices[27][2] = "Cifrado asim&eacute;trico, Cifrado sim&eacute;trico, Funci&oacute;n resumen.";
 choices[27][3] = "Cifrado asim&eacute;trico, Funci&oacute;n resumen, Cifrado sim&eacute;trico.";
 answers[27] = 3;
 units[27] = ['119'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9228. Examen TIC A1 2013";
 preguntaids[27] = 9228


//  Id pregunta: 8873 Año de creación de pregunta: 2013
 questions[28]= "29)  Hay dos operadores que para operar en un determinado territorio ejercen el derecho de ocupaci&oacute;n de propiedad p&uacute;blica o privada. Sin embargo, por motivos de ordenaci&oacute;n urbana, no pueden ejercer esos derechos por separado.";
 choices[28]= new Array();
 choices[28][0] = "Uno de los dos deber&aacute; renunciar a su derecho de ocupaci&oacute;n.";
 choices[28][1] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, podr&aacute; instar de manera motivada al Ministerio de Industria, Energ&iacute;a y Turismo el inicio del procedimiento para imponer el uso compartido recogido en el Art&iacute;culo 32.2.";
 choices[28][2] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, previo tr&aacute;mite de informaci&oacute;n p&uacute;blica, determinar&aacute; una soluci&oacute;n que permita el ejercicio de los derechos de ocupaci&oacute;n de dominio p&uacute;blico o propiedad privada por separado.";
 choices[28][3] = "No se trata de un elemento que regule la ley 9/2014, General de Telecomunicaciones";
 answers[28] = 1;
 units[28] = ['121'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8873. ";
 preguntaids[28] = 8873


//  Id pregunta: 9164 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[29]= new Array();
 choices[29][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[29][1] = "Suplantaci&oacute;n de identidad.";
 choices[29][2] = "Denegaci&oacute;n de servicio.";
 choices[29][3] = "Manipulaci&oacute;n de un recurso.";
 answers[29] = 0;
 units[29] = ['120'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9164. Examen TIC A2 2013";
 preguntaids[29] = 9164


//  Id pregunta: 8914 Año de creación de pregunta: 2013
 questions[30]= "31)  Indique la afirmaci&oacute;n verdadera en relaci&oacute;n con el protocolo PEM de seguridad en el correo electr&oacute;nico";
 choices[30]= new Array();
 choices[30][0] = "PEM es un protocolo de seguridad extremo a extremo entre Agentes de Usuario (UA)";
 choices[30][1] = "PEM proporciona autenticaci&oacute;n en origen y confidencialidad, pero no proporciona integridad";
 choices[30][2] = "Sus siglas hacen referencia a &quot;Private Extended Mail&quot;";
 choices[30][3] = "Todas las anteriores son verdaderas";
 answers[30] = 0;
 units[30] = ['116'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8914. ";
 preguntaids[30] = 8914


//  Id pregunta: 9141 Año de creación de pregunta: 2014
 questions[31]= "32)  El ataque a SSL/TLS que permite extraer informaci&oacute;n sobre los tokens de login, email, etc en 30 segundos se llama:";
 choices[31]= new Array();
 choices[31][0] = "Beast Attack";
 choices[31][1] = "Crime";
 choices[31][2] = "Breach";
 choices[31][3] = "No existe dicho ataque";
 answers[31] = 2;
 units[31] = ['119'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 9141. ";
 preguntaids[31] = 9141


//  Id pregunta: 8911 Año de creación de pregunta: 2013
 questions[32]= "33)  En lo referente a la mensajer&iacute;a en Internet indique la afirmaci&oacute;n falsa:";
 choices[32]= new Array();
 choices[32][0] = "MIME se desarrolla en los RFCs 2045 a 2049";
 choices[32][1] = "Si un servidor que no soporta extensiones SMTP recibe un mensaje HELO, devuelve un error de sintaxis al emisor SMTP, quien deber&aacute; enviar en su lugar un mensaje de tipo EHLO";
 choices[32][2] = "El RFC 1870 permite a un receptor especificar el tama&ntilde;o m&aacute;ximo de mensaje que puede recibir";
 choices[32][3] = "El protocolo SMTP se apoya en el sistema de resoluci&oacute;n de nombres de dominio de Internet";
 answers[32] = 1;
 units[32] = ['116'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8911. ";
 preguntaids[32] = 8911


//  Id pregunta: 8851 Año de creación de pregunta: 2013
 questions[33]= "34)  QSIG es:";
 choices[33]= new Array();
 choices[33][0] = "Un protocolo de se&ntilde;alizaci&oacute;n normalizado a nivel internacional para su uso entre Private Automatic Branch eXchanges (PABX).";
 choices[33][1] = "Un sistema de calidad aplicado a la telefon&iacute;a SIP.";
 choices[33][2] = "Una extensi&oacute;n a SS7 que puede enviarse sobre IP.";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = 0;
 units[33] = ['114'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8851. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[33] = 8851


//  Id pregunta: 8970 Año de creación de pregunta: 2013
 questions[34]= "35)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.329:";
 choices[34]= new Array();
 choices[34][0] = "Es un protocolo que define la se&ntilde;alizaci&oacute;n de llamadas";
 choices[34][1] = "Es un protocolo que permite la inclusi&oacute;n de tr&aacute;fico de datos";
 choices[34][2] = "Especifica un protocolo para el control y etiquetado de dos canales simult&aacute;neos en una &uacute;nica videoconferencia";
 choices[34][3] = "Simplifica y complementa al protocolo T.120";
 answers[34] = 0;
 units[34] = ['122'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8970. ";
 preguntaids[34] = 8970


//  Id pregunta: 9089 Año de creación de pregunta: 2014
 questions[35]= "36)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[35]= new Array();
 choices[35][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[35][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[35][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[35][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[35] = 0;
 units[35] = ['114'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 9089. Examen TIC-A1 2013";
 preguntaids[35] = 9089


//  Id pregunta: 8969 Año de creación de pregunta: 2013
 questions[36]= "37)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.245:";
 choices[36]= new Array();
 choices[36][0] = "Es un protocolo para el control multimedia de las llamadas";
 choices[36][1] = "S&oacute;lo lo utiliza el protocolo H.323";
 choices[36][2] = "Aparte del protocolo H.323, lo utilizan otros protocolos (como por ejemplo el protocolo H.234)";
 choices[36][3] = "Es un protocolo de gesti&oacute;n y control";
 answers[36] = 1;
 units[36] = ['122'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8969. ";
 preguntaids[36] = 8969


//  Id pregunta: 8847 Año de creación de pregunta: 2013
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes redes WAN esta orientada a conexi&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "Una red IP";
 choices[37][1] = "Una red ATM.";
 choices[37][2] = "Una red UMTS.";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = 1;
 units[37] = ['112'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 8847. Examen TIC AGE A2 2011 Promoci&oacute;n Interna";
 preguntaids[37] = 8847


//  Id pregunta: 9198 Año de creación de pregunta: 2014
 questions[38]= "39)  &iquest;Qu&eacute; es SAML?";
 choices[38]= new Array();
 choices[38][0] = "Un est&aacute;ndar abierto que define un esquema para el intercambio de datos de autenticaci&oacute;n y autorizaci&oacute;n.";
 choices[38][1] = "Un servicio proveedor de identidades.";
 choices[38][2] = "Un protocolo para la verificaci&oacute;n de identidades.";
 choices[38][3] = "Un software de definici&oacute;n de autoridades.";
 answers[38] = 0;
 units[38] = ['123'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9198. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[38] = 9198


//  Id pregunta: 9203 Año de creación de pregunta: 2014
 questions[39]= "40)  Un programa malicioso capaz de alojarse en computadoras y permitir el acceso a usuarios externos, a trav&eacute;s de una red local o de Internet, con el fin de recabar informaci&oacute;n o controlar remotamente a la m&aacute;quina anfitriona, se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Un caballo de Troya.";
 choices[39][1] = "Un virus.";
 choices[39][2] = "Un gusano.";
 choices[39][3] = "El tal&oacute;n de Aquiles.";
 answers[39] = 0;
 units[39] = ['119'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9203. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[39] = 9203


//  Id pregunta: 9209 Año de creación de pregunta: 2014
 questions[40]= "41)  Indique la opci&oacute;n falsa:";
 choices[40]= new Array();
 choices[40][0] = "Las siglas HOTP hacen referencia la algoritmo HMAC-based One Time Password.";
 choices[40][1] = "HOTP es un est&aacute;ndar abierto.";
 choices[40][2] = "Son implementaciones de HOTP: Barada, Google Authenticator, LinOTP.";
 choices[40][3] = "HOTP no puede ser utilizado para autenticar a un usuario en un sistema a trav&eacute;s de un servidor de autenticaci&oacute;n.";
 answers[40] = 3;
 units[40] = ['123'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9209. HOTP SI se puede utilizar para autenticar a un usuario en un sistema.";
 preguntaids[40] = 9209


//  Id pregunta: 9204 Año de creación de pregunta: 2014
 questions[41]= "42)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[41]= new Array();
 choices[41][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[41][1] = "Persona que accede a datos no autorizados.";
 choices[41][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[41][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[41] = 0;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9204. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[41] = 9204


//  Id pregunta: 8915 Año de creación de pregunta: 2013
 questions[42]= "43)  Respecto al est&aacute;ndar de servicios de directorio X.500, se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[42]= new Array();
 choices[42][0] = "El DIB se divide en distintos trozos de informaci&oacute;n que se estructuran en una jerarqu&iacute;a en &aacute;rbol denominada DIT";
 choices[42][1] = "Cada parte del DIB se almacena en un servidor denominado DSA";
 choices[42][2] = "El intercambio de informaci&oacute;n entre dos DSA est&aacute; basado en los protocolos DSP y DOP";
 choices[42][3] = "El DSA se comunica con el DIB utilizando el protocolo DAP";
 answers[42] = 3;
 units[42] = ['116'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8915. ";
 preguntaids[42] = 8915


//  Id pregunta: 8848 Año de creación de pregunta: 2013
 questions[43]= "44)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[43]= new Array();
 choices[43][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[43][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[43][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = 1;
 units[43] = ['107'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 8848. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[43] = 8848


//  Id pregunta: 8849 Año de creación de pregunta: 2013
 questions[44]= "45)  RTP (Real Time Protocol) se utiliza en ToIP (telefon&iacute;a IP) para:";
 choices[44]= new Array();
 choices[44][0] = "Mantener sincronizados los relojes de los tel&eacute;fonos.";
 choices[44][1] = "Nada. Lo que se utiliza es RTCP (Real Time Control Protocol)";
 choices[44][2] = "Transmitir la voz: una vez codificada se encapsula como payload de RTP en datagramas UDP.";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = 2;
 units[44] = ['110'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8849. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[44] = 8849


//  Id pregunta: 8880 Año de creación de pregunta: 2013
 questions[45]= "46)  El Fondo nacional del servicio universal tiene por finalidad garantizar la financiaci&oacute;n del servicio universal. La aportaci&oacute;n de activos en met&aacute;lico a dicho Fondo la realiza:";
 choices[45]= new Array();
 choices[45][0] = "El Gobierno a trav&eacute;s de los Presupuestos Generales del Estado.";
 choices[45][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[45][2] = "Las Comunidades Aut&oacute;nomas.";
 choices[45][3] = "Los operadores con obligaciones de contribuir a la financiaci&oacute;n del servicio universal.";
 answers[45] = 3;
 units[45] = ['121'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8880. Examen Xunta Galicia 2011 TIC A1";
 preguntaids[45] = 8880


//  Id pregunta: 8879 Año de creación de pregunta: 2013
 questions[46]= "47)  El art. 12 de la Ley 9/2014, General de Telecomunicaciones, indica los principios generales aplicables al acceso a las redes y recursos asociados y a su interconexi&oacute;n. Indique cual de las siguientes afirmaciones no es correcta:";
 choices[46]= new Array();
 choices[46][0] = "Los operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas tendr&aacute;n el derecho y, cuando se solicite por otros operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas, la obligaci&oacute;n de negociar la interconexi&oacute;n mutua con el fin de prestar servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, con el objeto de garantizar as&iacute; la prestaci&oacute;n de servicios y su interoperabilidad.";
 choices[46][1] = "No existir&aacute;n restricciones que impidan que los operadores negocien entre s&iacute; acuerdos de acceso e interconexi&oacute;n";
 choices[46][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia intervendr&aacute; en las relaciones entre operadores, a petici&oacute;n del Consejo de Ministros.";
 choices[46][3] = "Los operadores que obtengan informaci&oacute;n de otros, en el proceso de negociaci&oacute;n de los acuerdos de acceso o de interconexi&oacute;n, destinar&aacute;n la informaci&oacute;n obtenida exclusivamente a los fines para los que fue solicitada.";
 answers[46] = 2;
 units[46] = ['121'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8879. ";
 preguntaids[46] = 8879


//  Id pregunta: 9190 Año de creación de pregunta: 2014
 questions[47]= "48)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[47]= new Array();
 choices[47][0] = "Utilizar el cifrado.";
 choices[47][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[47][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[47][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[47] = 0;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 9190. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[47] = 9190


//  Id pregunta: 8878 Año de creación de pregunta: 2013
 questions[48]= "49)  Las tasas en materia de telecomunicaciones tiene una serie de fines. Indique el falso:";
 choices[48]= new Array();
 choices[48][0] = "Cubrir los gastos administrativos que ocasione el trabajo de regulaci&oacute;n";
 choices[48][1] = "Cubrir los gastos que ocasionen la gesti&oacute;n, control y ejecuci&oacute;n del r&eacute;gimen establecido en la ley";
 choices[48][2] = "Cubrir los gastos relativos al fomento del despliegue de redes de telecomunicaci&oacute;n";
 choices[48][3] = "Cubrir los gastos de cooperaci&oacute;n internacional, armonizaci&oacute;n y normalizaci&oacute;n y el an&aacute;lisis de mercado";
 answers[48] = 2;
 units[48] = ['121'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8878. ";
 preguntaids[48] = 8878


//  Id pregunta: 9210 Año de creación de pregunta: 2014
 questions[49]= "50)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[49]= new Array();
 choices[49][0] = "Spoofing.";
 choices[49][1] = "Man in the middle.";
 choices[49][2] = "Denial of Service.";
 choices[49][3] = "Flooding.";
 answers[49] = 2;
 units[49] = ['119'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 9210. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[49] = 9210


//  Id pregunta: 9202 Año de creación de pregunta: 2014
 questions[50]= "51)  En lo que se refiere a las Firmas Digitales, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[50]= new Array();
 choices[50][0] = "Si una firma digital es v&aacute;lida para un documento es v&aacute;lida para otro distinto.";
 choices[50][1] = "S&oacute;lo puede ser generada por su leg&iacute;timo titular.";
 choices[50][2] = "Es p&uacute;blicamente verificable.";
 choices[50][3] = "La forma m&aacute;s extendida de calcular firmas digitales consiste en emplear una combinaci&oacute;n de cifrado asim&eacute;trico y funciones resumen.";
 answers[50] = 0;
 units[50] = ['119'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9202. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[50] = 9202


//  Id pregunta: 9200 Año de creación de pregunta: 2014
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[51]= new Array();
 choices[51][0] = "La clave privada del emisor es la usada para garantizar la confidencialidad.";
 choices[51][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio e integridad entre otros.";
 choices[51][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, para servicios de confidencialidad, proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos.";
 choices[51][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es m&aacute;s sencilla que la existente en los sistemas convecionales sim&eacute;tricos de clave secreta.";
 answers[51] = 0;
 units[51] = ['119'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9200. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[51] = 9200


//  Id pregunta: 9155 Año de creación de pregunta: 2014
 questions[52]= "53)  Se&ntilde;ale la afirmaci&oacute;n es correcta respecto a firmar digitalmente mediante XML Signature al usar WS-Security:";
 choices[52]= new Array();
 choices[52][0] = "WS-Security no contempla el uso de XML Signature por no adaptarse bien al modelo petici&oacute;n respuesta de Web Services.";
 choices[52][1] = "WS-Security contemplaba el uso de XML Signature en la versi&oacute;n 1.0 pero se abandon&oacute; en favor de XML DynaSign.";
 choices[52][2] = "WS-Security contempla el uso de XML Signature con algunas limitaciones, como recomendar el no usar Enveloped Signature Transform.";
 choices[52][3] = "WS-Security contempla el uso de XML Signature, sin establecer limitaciones ni extensiones especiales.";
 answers[52] = 2;
 units[52] = ['119'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 9155. Examen TIC A2 2013";
 preguntaids[52] = 9155


//  Id pregunta: 8850 Año de creación de pregunta: 2013
 questions[53]= "54)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP:";
 choices[53]= new Array();
 choices[53][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[53][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al c&oacute;dec G.711.";
 choices[53][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = 0;
 units[53] = ['110'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8850. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[53] = 8850


//  Id pregunta: 8846 Año de creación de pregunta: 2013
 questions[54]= "55)  En el modelo de referencia de ATM, &iquest;c&oacute;mo se denomina la capa que tiene las funciones de convergencia, y segmentaci&oacute;n y reensamblado?";
 choices[54]= new Array();
 choices[54][0] = "TC";
 choices[54][1] = "PM";
 choices[54][2] = "AAL";
 choices[54][3] = "ATM";
 answers[54] = 2;
 units[54] = ['107'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 8846. Examen TIC AGE A2 2011 Promoci&oacute;n Interna";
 preguntaids[54] = 8846


//  Id pregunta: 9207 Año de creación de pregunta: 2014
 questions[55]= "56)  Indique la respuesta falsa:";
 choices[55]= new Array();
 choices[55][0] = "OAuth (Open Authorization) es un protocolo abierto que permite autorizaci&oacute;n segura de una API de modo est&aacute;ndar y simple para aplicaciones de escritorio, m&oacute;viles y web.";
 choices[55][1] = "OAuth y OpenID son protocolos id&eacute;nticos.";
 choices[55][2] = "OpenID es un est&aacute;ndar de identificaci&oacute;n digital descentralizado, con el que un usuario puede identificarse en una p&aacute;gina web a trav&eacute;s de una URL o XRI.";
 choices[55][3] = "A diferencia de arquitecturas Single Sign-On, OpenId no especifica el mecanismo de autenticaci&oacute;n.";
 answers[55] = 1;
 units[55] = ['123'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9207. Oauth y OpenID son completamente diferentes. El resto de respuestas son ciertas.";
 preguntaids[55] = 9207


//  Id pregunta: 9191 Año de creación de pregunta: 2014
 questions[56]= "57)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[56]= new Array();
 choices[56][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[56][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[56][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[56][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[56] = 3;
 units[56] = ['119'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 9191. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[56] = 9191


//  Id pregunta: 9223 Año de creación de pregunta: 2014
 questions[57]= "58)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[57]= new Array();
 choices[57][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[57][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[57][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[57][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[57] = 1;
 units[57] = ['102'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9223. Examen TIC A1 2013";
 preguntaids[57] = 9223


//  Id pregunta: 9168 Año de creación de pregunta: 2014
 questions[58]= "59)  El Lenguaje de Ontolog&iacute;as Web (OWL) proporciona tres sublenguajes, cada uno con nivel de expresividad mayor que el anterior. Se&ntilde;ale el que NO es correcto:";
 choices[58]= new Array();
 choices[58][0] = "OWL Lite.";
 choices[58][1] = "OWL DL.";
 choices[58][2] = "OWL Extension.";
 choices[58][3] = "OWL Full.";
 answers[58] = 2;
 units[58] = ['125'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9168. Examen TIC A2 2013";
 preguntaids[58] = 9168


//  Id pregunta: 9082 Año de creación de pregunta: 2014
 questions[59]= "60)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[59]= new Array();
 choices[59][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[59][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[59][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[59][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[59] = 1;
 units[59] = ['105'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9082. ";
 preguntaids[59] = 9082


//  Id pregunta: 8971 Año de creación de pregunta: 2013
 questions[60]= "61)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[60]= new Array();
 choices[60][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[60][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[60][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[60][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[60] = 1;
 units[60] = ['122'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 8971. ";
 preguntaids[60] = 8971


//  Id pregunta: 8972 Año de creación de pregunta: 2013
 questions[61]= "62)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[61]= new Array();
 choices[61][0] = "Ancho de banda";
 choices[61][1] = "Jitter o variaci&oacute;n de retardo";
 choices[61][2] = "Eco";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = 3;
 units[61] = ['122'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 8972. ";
 preguntaids[61] = 8972


//  Id pregunta: 9092 Año de creación de pregunta: 2014
 questions[62]= "63)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[62]= new Array();
 choices[62][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[62][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[62][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[62][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[62] = 2;
 units[62] = ['102'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9092. Examen TIC-A1 2013";
 preguntaids[62] = 9092


//  Id pregunta: 8916 Año de creación de pregunta: 2013
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n con el protocolo LDAP";
 choices[63]= new Array();
 choices[63][0] = "LDAP env&iacute;a los comandos y respuestas siguiendo la notaci&oacute;n ASN.1";
 choices[63][1] = "El desarrollo de la especificaci&oacute;n LDAP se realiza a trav&eacute;s del IETF";
 choices[63][2] = "La funci&oacute;n LAUTH permite autenticar al cliente frente al directorio";
 choices[63][3] = "La unidad b&aacute;sica de informaci&oacute;n almacenada en el directorio es la entrada (entry)";
 answers[63] = 2;
 units[63] = ['116'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8916. ";
 preguntaids[63] = 8916


//  Id pregunta: 9083 Año de creación de pregunta: 2014
 questions[64]= "65)  El protocolo TCP es un protocolo";
 choices[64]= new Array();
 choices[64][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[64][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[64][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[64][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[64] = 1;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 9083. Examen TIC-A1 2013";
 preguntaids[64] = 9083


//  Id pregunta: 8870 Año de creación de pregunta: 2013
 questions[65]= "66)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros:";
 choices[65]= new Array();
 choices[65][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[65][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[65][2] = "Puede ser de cualquier nacionalidad";
 choices[65][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[65] = 3;
 units[65] = ['121'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8870. ";
 preguntaids[65] = 8870


//  Id pregunta: 9187 Año de creación de pregunta: 2014
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes opciones est&aacute; considerada como la caracter&iacute;stica m&aacute;s segura de una red WLAN?";
 choices[66]= new Array();
 choices[66][0] = "Configuraci&oacute;n de SSID (Service Ser Identifier).";
 choices[66][1] = "Clave WEP.";
 choices[66][2] = "Selecci&oacute;n del canal.";
 choices[66][3] = "Configuraci&oacute;n de la energ&iacute;a.";
 answers[66] = 1;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9187. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[66] = 9187


//  Id pregunta: 8874 Año de creación de pregunta: 2013
 questions[67]= "68)  La Ley General de Telecomunicaciones establece una serie de contenidos m&iacute;nimos que deben incluir los contratos que se celebren entre usuarios finales y operadores. Entre ellos NO se incluye:";
 choices[67]= new Array();
 choices[67][0] = "Los niveles m&iacute;nimos de calidad de servicio que se ofrecen, en particular, el plazo para la conexi&oacute;n inicial, as&iacute; como, en su caso, otros par&aacute;metros de calidad de servicio establecidos reglamentariamente.";
 choices[67][1] = "Los tipos de mantenimiento ofrecidos y los servicios de apoyo facilitados al cliente, as&iacute; como los medios para entrar en contacto con dichos servicios.";
 choices[67][2] = "Los tipos de marcaci&oacute;n relacionados con el servicio, incluyendo servicios avanzados, como n&uacute;mero oculto, servicios de cobro revertido y tarificaciones especiales.";
 choices[67][3] = "Todos los gastos relacionados con la conservaci&oacute;n del n&uacute;mero y otros identificadores.";
 answers[67] = 2;
 units[67] = ['121'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8874. ";
 preguntaids[67] = 8874


//  Id pregunta: 9197 Año de creación de pregunta: 2014
 questions[68]= "69)  El proceso mediante el cual un usuario se autentica una vez en el sistema de la organizaci&oacute;n y es capaz de acceder al resto de servicios se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Single Login On";
 choices[68][1] = "Simple Login On";
 choices[68][2] = "Single Sign On";
 choices[68][3] = "Simple Sign On";
 answers[68] = 2;
 units[68] = ['123'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9197. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[68] = 9197


//  Id pregunta: 8877 Año de creación de pregunta: 2013
 questions[69]= "70)  Una de las siguientes no es una funci&oacute;n de la Comisi&oacute;n Nacional de los Mercados y la Competencia:";
 choices[69]= new Array();
 choices[69][0] = "Arbitrar en los conflictos que puedan surgir entre los operadores del sector de las comunicaciones electr&oacute;nicas";
 choices[69][1] = "Definir y analizar los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas";
 choices[69][2] = "Determinar la cuant&iacute;a que supone el coste neto en la prestaci&oacute;n del servicio universal";
 choices[69][3] = "La creaci&oacute;n de un plan de numeraci&oacute;n";
 answers[69] = 3;
 units[69] = ['121'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 8877. ";
 preguntaids[69] = 8877


//  Id pregunta: 9220 Año de creación de pregunta: 2014
 questions[70]= "71)  De acuerdo con la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave?";
 choices[70]= new Array();
 choices[70][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[70][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[70][2] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[70][3] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en la normativa reguladora de las telecomunicaciones, sea necesaria.";
 answers[70] = 0;
 units[70] = ['121'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9220. Examen TIC A1 2013";
 preguntaids[70] = 9220


//  Id pregunta: 9199 Año de creación de pregunta: 2014
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes puertos es el puerto est&aacute;ndar de POP3 sobre SSL?";
 choices[71]= new Array();
 choices[71][0] = "995";
 choices[71][1] = "993";
 choices[71][2] = "220";
 choices[71][3] = "465";
 answers[71] = 0;
 units[71] = ['119'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9199. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[71] = 9199


//  Id pregunta: 9156 Año de creación de pregunta: 2014
 questions[72]= "73)  Se&ntilde;ale cu&aacute;l de las siguientes opciones est&aacute; basada en el protocolo ICMP:";
 choices[72]= new Array();
 choices[72][0] = "SMTP";
 choices[72][1] = "SNMP";
 choices[72][2] = "PING";
 choices[72][3] = "DNS";
 answers[72] = 2;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 9156. Examen TIC A2 2013";
 preguntaids[72] = 9156


//  Id pregunta: 9206 Año de creación de pregunta: 2014
 questions[73]= "74)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[73]= new Array();
 choices[73][0] = "Certificado de autenticaci&oacute;n";
 choices[73][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[73][2] = "Claves Diffie-Hellman.";
 choices[73][3] = "Certificados X-509 de componente.";
 answers[73] = 1;
 units[73] = ['119'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 9206. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[73] = 9206


//  Id pregunta: 8973 Año de creación de pregunta: 2013
 questions[74]= "75)  Un valor 3 en la escala MOS (Mean Opinion Score) indica que la calidad de la se&ntilde;al es:";
 choices[74]= new Array();
 choices[74][0] = "Adecuada";
 choices[74][1] = "Pobre";
 choices[74][2] = "Buena";
 choices[74][3] = "Ninguna de las anteriores es correcta";
 answers[74] = 0;
 units[74] = ['122'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 8973. ";
 preguntaids[74] = 8973


