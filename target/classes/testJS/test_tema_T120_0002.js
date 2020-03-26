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
//  Id pregunta: 10007 Año de creación de pregunta: 2015
 questions[0]= "1)  Se&ntilde;ale qu&eacute; n&uacute;mero de puerto deber&iacute;a usarse si se quiere configurar un servicio para la autenticaci&oacute;n de redes Kerberos:";
 choices[0]= new Array();
 choices[0][0] = "88";
 choices[0][1] = "42";
 choices[0][2] = "74";
 choices[0][3] = "105";
 answers[0] = 0;
 units[0] = ['120'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10007. Examen TIC A2 2014";
 preguntaids[0] = 10007


//  Id pregunta: 10381 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes ataques se basa en la suplantaci&oacute;n de identidad mediante t&eacute;cnicas de ingenier&iacute;a social?";
 choices[1]= new Array();
 choices[1][0] = "Phishing";
 choices[1][1] = "Man in the middle";
 choices[1][2] = "Eavesdropping";
 choices[1][3] = "Sniffing";
 answers[1] = 0;
 units[1] = ['120'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10381. ";
 preguntaids[1] = 10381


//  Id pregunta: 9165 Año de creación de pregunta: 2014
 questions[2]= "3)  En el contexto de la seguridad, el shoulder surfing consiste en:";
 choices[2]= new Array();
 choices[2][0] = "Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.";
 choices[2][1] = "Uso de aplicaciones intermedias llamadas shoulders para la obtenci&oacute;n de los datos de navegaci&oacute;n.";
 choices[2][2] = "Espiar f&iacute;sicamente a los usuarios, para obtener generalmente claves de acceso al sistema.";
 choices[2][3] = "Es un sin&oacute;nimo del ataque man in the middle";
 answers[2] = 2;
 units[2] = ['120'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9165. Examen TIC A2 2013";
 preguntaids[2] = 9165


//  Id pregunta: 7798 Año de creación de pregunta: 2010
 questions[3]= "4)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[3]= new Array();
 choices[3][0] = "Un determinado virus inform&aacute;tico.";
 choices[3][1] = "Difusi&oacute;n masiva de noticias falsas.";
 choices[3][2] = "Suplantaci&oacute;n fraudulenta que intenta conseguir informaci&oacute;n valiosa.";
 choices[3][3] = "Reenv&iacute;o de mensajes a mucha gente.";
 answers[3] = 2;
 units[3] = ['120'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 7798. ";
 preguntaids[3] = 7798


//  Id pregunta: 9708 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[4]= new Array();
 choices[4][0] = "Ataque por entrop&iacute;a";
 choices[4][1] = "Ataque por fuerza bruta";
 choices[4][2] = "Ataque con Tablas Arcoiris";
 choices[4][3] = "Todos son tipos de ataques";
 answers[4] = 0;
 units[4] = ['120'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9708. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";
 preguntaids[4] = 9708


//  Id pregunta: 8418 Año de creación de pregunta: 2011
 questions[5]= "6)  Las siglas SSL y TLS se refieren a:";
 choices[5]= new Array();
 choices[5][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[5][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[5][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[5][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[5] = 1;
 units[5] = ['119', '120'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8418. Operador Ayto. Madrid 2010";
 preguntaids[5] = 8418


//  Id pregunta: 10506 Año de creación de pregunta: 2015
 questions[6]= "7)  Se&ntilde;ale de entre los siguientes, cu&aacute;l no es un ataque en una red";
 choices[6]= new Array();
 choices[6][0] = "Ping de la muerte";
 choices[6][1] = "ARP poisoning";
 choices[6][2] = "Smurf";
 choices[6][3] = "Snicker";
 answers[6] = 3;
 units[6] = ['120'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10506. ";
 preguntaids[6] = 10506


//  Id pregunta: 10905 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Qu&eacute; sucede si se pierde el primer paquete de una transferencia TFTP?";
 choices[7]= new Array();
 choices[7][0] = "La aplicaci&oacute;n TFTP volver&aacute; a intentar la solicitud si no se recibe una respuesta.";
 choices[7][1] = "El router del siguiente salto o la puerta de enlace predeterminada proporcionar&aacute;n una respuesta con un c&oacute;digo de error.";
 choices[7][2] = "El cliente esperar&aacute; indefinidamente la respuesta.";
 choices[7][3] = "La capa de transporte volver&aacute; a intentar la consulta si no se recibe una respuesta.";
 answers[7] = 0;
 units[7] = ['120'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10905. ";
 preguntaids[7] = 10905


//  Id pregunta: 8477 Año de creación de pregunta: 2011
 questions[8]= "9)  El protocolo SSL (Secure Sockets Layer)";
 choices[8]= new Array();
 choices[8][0] = "Proporciona conexiones seguras s&oacute;lo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[8][1] = "No garantiza la integridad de la informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[8][2] = "Es una capa de seguridad que opera siempre sobre protocolo UDP.";
 choices[8][3] = "Proporciona conexiones seguras sobre una red insegura garantizando la integridad de los datos transmitidos, privacidad de la conexi&oacute;n y autentificaci&oacute;n del cliente y servidor.";
 answers[8] = 3;
 units[8] = ['120'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8477. Examen UPM A2 2011";
 preguntaids[8] = 8477


//  Id pregunta: 7661 Año de creación de pregunta: 2010
 questions[9]= "10)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo que especifica la forma de encapsular los datos que se van a intercambiar?";
 choices[9]= new Array();
 choices[9][0] = "SSL Handshake.";
 choices[9][1] = "SSL Record.";
 choices[9][2] = "Cipher Secure Layer.";
 choices[9][3] = "Secure Stocker Layer.";
 answers[9] = 1;
 units[9] = ['120'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7661. Map 2006";
 preguntaids[9] = 7661


//  Id pregunta: 9164 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[10]= new Array();
 choices[10][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[10][1] = "Suplantaci&oacute;n de identidad.";
 choices[10][2] = "Denegaci&oacute;n de servicio.";
 choices[10][3] = "Manipulaci&oacute;n de un recurso.";
 answers[10] = 0;
 units[10] = ['120'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9164. Examen TIC A2 2013";
 preguntaids[10] = 9164


//  Id pregunta: 9863 Año de creación de pregunta: 2015
 questions[11]= "12)  Se&ntilde;ale cu&aacute;l de estas entidades no pertenece a una arquitectura SAML:";
 choices[11]= new Array();
 choices[11][0] = "AP (Authentication Provider)";
 choices[11][1] = "SP (Service Provider)";
 choices[11][2] = "IdP (Identity Provider)";
 choices[11][3] = "Todos los anteriores son componentes de la arquitectura SAML.";
 answers[11] = 0;
 units[11] = ['119', '120'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9863. ";
 preguntaids[11] = 9863


//  Id pregunta: 9201 Año de creación de pregunta: 2014
 questions[12]= "13)  En seguridad inform&aacute;tica, cu&aacute;l de los siguientes procesos, puede considerarse un m&eacute;todo de hardening de un sistema:";
 choices[12]= new Array();
 choices[12][0] = "La reducci&oacute;n de software innecesario en el sistema.";
 choices[12][1] = "La instalaci&oacute;n de software para comprobar el estado de la red.";
 choices[12][2] = "La conexi&oacute;n a sistemas de almacenamiento (SAN o NAS).";
 choices[12][3] = "La aplicaci&oacute;n de bonding (agrupaci&oacute;n o trunking) en las interfaces de red.";
 answers[12] = 0;
 units[12] = ['120'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9201. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[12] = 9201


//  Id pregunta: 10184 Año de creación de pregunta: 2015
 questions[13]= "14)  La Comisi&oacute;n Nacional de los Mercados y la Competencia (CNMC), en relaci&oacute;n con las telecomunicaciones:";
 choices[13]= new Array();
 choices[13][0] = "Autoriza operadores de telecomunicaciones.";
 choices[13][1] = "Autoriza distribuidores de equipamiento de redes y servicios de la sociedad de la informaci&oacute;n.";
 choices[13][2] = "Define los mercados de referencia relativos a redes y servicios electr&oacute;nicos.";
 choices[13][3] = "Define las actuaciones de los operadores, en relaci&oacute;n con los posibles conflictos de los anchos de banda en el espacio radioel&eacute;ctrico.";
 answers[13] = 2;
 units[13] = ['120'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10184. Examen TIC A1 2014";
 preguntaids[13] = 10184


