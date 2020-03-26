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
//  Id pregunta: 9442 Año de creación de pregunta: 2014
 questions[0]= "1)  La principal mejora de SNMPv3 es:";
 choices[0]= new Array();
 choices[0][0] = "Mayor seguridad";
 choices[0][1] = "Mayor rendimiento";
 choices[0][2] = "Mayor eficacia";
 choices[0][3] = "Mayor simplicidad";
 answers[0] = 0;
 units[0] = ['114'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9442. ";
 preguntaids[0] = 9442


//  Id pregunta: 9438 Año de creación de pregunta: 2014
 questions[1]= "2)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[1]= new Array();
 choices[1][0] = "GEANT";
 choices[1][1] = "IRIS";
 choices[1][2] = "TESTA";
 choices[1][3] = "SARA";
 answers[1] = 1;
 units[1] = ['114'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9438. ";
 preguntaids[1] = 9438


//  Id pregunta: 10889 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Qu&eacute; caracter&iacute;stica no se a&ntilde;ade en SNMPv3 respecto a SNMPv2?";
 choices[2]= new Array();
 choices[2][0] = "Autenticaci&oacute;n";
 choices[2][1] = "Cifrado";
 choices[2][2] = "Deteccion de errores";
 choices[2][3] = "Integridad del mensaje";
 answers[2] = 2;
 units[2] = ['114'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10889. ";
 preguntaids[2] = 10889


//  Id pregunta: 9386 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[3]= new Array();
 choices[3][0] = "B";
 choices[3][1] = "D";
 choices[3][2] = "H";
 choices[3][3] = "I";
 answers[3] = 3;
 units[3] = ['114'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9386. Examen TIC A2  2013";
 preguntaids[3] = 9386


//  Id pregunta: 10499 Año de creación de pregunta: 2015
 questions[4]= "5)  Cu&aacute;l de las siguientes es una caracter&iacute;stca de SIP";
 choices[4]= new Array();
 choices[4][0] = "M&aacute;s cercano a http y datos";
 choices[4][1] = "Est&aacute;ndar de la ITU-T";
 choices[4][2] = "Las tareas de se&ntilde;alizaci&oacute;n dependen de un servidor central, con terminales &quot;tontos&quot; en los extremos.";
 choices[4][3] = "Presentado como evoluci&oacute;n de SS7, dise&ntilde;ado para el control de la se&ntilde;alizaci&oacute;n en redes de conmutaci&oacute;n de circuitos.";
 answers[4] = 0;
 units[4] = ['114'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10499. Es un est&aacute;ndar de IETF.";
 preguntaids[4] = 10499


//  Id pregunta: 10888 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[5]= new Array();
 choices[5][0] = "MIB";
 choices[5][1] = "SNMP manager";
 choices[5][2] = "SNMP agent";
 choices[5][3] = "Servidor Syslog";
 answers[5] = 3;
 units[5] = ['114'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 10888. ";
 preguntaids[5] = 10888


//  Id pregunta: 9605 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[6]= new Array();
 choices[6][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este par&aacute;metro.";
 choices[6][1] = "No, necesitar&iacute;a una base de datos externa para almacenarlo.";
 choices[6][2] = "Si, s&oacute;lo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[6][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[6] = 0;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9605. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[6] = 9605


//  Id pregunta: 10845 Año de creación de pregunta: 2015
 questions[7]= "8)  Se&ntilde;ale la frase incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "La versi&oacute;n 3 de SNMP proporciona mejoras en materia de seguridad con respecto a la versi&oacute;n 2.";
 choices[7][1] = "SNMP es un protocolo de la capa de aplicaci&oacute;n.";
 choices[7][2] = "Las versiones 1, 2 y 3 son compatibles entre s&iacute;.";
 choices[7][3] = "Los mensajes GetNextRequest se utilizan para recorrer una tabla de objetos.";
 answers[7] = 2;
 units[7] = ['114'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10845. ";
 preguntaids[7] = 10845


//  Id pregunta: 9211 Año de creación de pregunta: 2014
 questions[8]= "9)  En el marco del modelo est&aacute;ndar de gesti&oacute;n de red definido por la ISO y la ITU-TX.700, son &aacute;reas de gesti&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "la gesti&oacute;n de fallos, de contabilidad, de configuraci&oacute;n, de calidad defuncionamiento y de seguridad.";
 choices[8][1] = "la gesti&oacute;n de fallos, de la demanda, de configuraci&oacute;n, de rendimiento y deseguridad.";
 choices[8][2] = "la gesti&oacute;n de fallos, de monitorizaci&oacute;n, de configuraci&oacute;n y de seguridad";
 choices[8][3] = "la gesti&oacute;n de monitorizaci&oacute;n, de trazabilidad, de configuraci&oacute;n y de seguridad";
 answers[8] = 0;
 units[8] = ['114'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 9211. Examen TIC A1 2013";
 preguntaids[8] = 9211


//  Id pregunta: 10115 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Qu&eacute; caracter&iacute;sticas de seguridad presenta SNMPv3, tal y como se mencionan en la RFC 3418 (MIB for the SNMP Protocol)?";
 choices[9]= new Array();
 choices[9][0] = "Se recomienda que los implementadores usen el modelo de seguridad basado en usuario y el control de acceso basado en vistas.";
 choices[9][1] = "Se obliga a que los implementadores usen el modelo basado en usuario y el control de acceso basado en vistas.";
 choices[9][2] = "En dicha RFC no se menciona ning&uacute;n elemento de seguridad.";
 choices[9][3] = "En temas de seguridad, s&oacute;lo hace menci&oacute;n al uso obligatorio del algoritmo de encriptaci&oacute;n CBC (Cipher Block Chaining) de DES, conocido tambi&eacute;n por DES-56.";
 answers[9] = 0;
 units[9] = ['114'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10115. Examen TIC A2 2014";
 preguntaids[9] = 10115


//  Id pregunta: 9443 Año de creación de pregunta: 2014
 questions[10]= "11)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[10]= new Array();
 choices[10][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[10][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[10][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[10][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[10] = 2;
 units[10] = ['114'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9443. ";
 preguntaids[10] = 9443


//  Id pregunta: 9371 Año de creación de pregunta: 2010
 questions[11]= "12)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[11]= new Array();
 choices[11][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[11][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[11][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[11][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[11] = 0;
 units[11] = ['114'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9371. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[11] = 9371


//  Id pregunta: 10887 Año de creación de pregunta: 2015
 questions[12]= "13)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[12]= new Array();
 choices[12][0] = "Punto a punto";
 choices[12][1] = "Broadcast multi-acceso";
 choices[12][2] = "No broadcast multi-acceso";
 choices[12][3] = "Broadcast punto a multipunto";
 answers[12] = 2;
 units[12] = ['114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10887. ";
 preguntaids[12] = 10887


//  Id pregunta: 9602 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;C&oacute;mo se llama la base de datos que tiene los par&aacute;metros de gesti&oacute;n de una red?";
 choices[13]= new Array();
 choices[13][0] = "MIB (Management Information Base).";
 choices[13][1] = "NMD (Network Management database).";
 choices[13][2] = "NMS (Network Management System).";
 choices[13][3] = "Ninguna de los anteriores.";
 answers[13] = 0;
 units[13] = ['114'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9602. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[13] = 9602


//  Id pregunta: 9666 Año de creación de pregunta: 2014
 questions[14]= "15)  Indique la opci&oacute;n verdadera.";
 choices[14]= new Array();
 choices[14][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[14][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[14][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[14][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps.";
 answers[14] = 3;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9666. Examen TIC A1 2013";
 preguntaids[14] = 9666


//  Id pregunta: 10375 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas se a&ntilde;ade en la Versi&oacute;n 3 del protocolo SNMP?";
 choices[15]= new Array();
 choices[15][0] = "Permite a los agentes informar de forma espontanea al gestor de un evento";
 choices[15][1] = "Enviar mensajes no solicitados al gestor";
 choices[15][2] = "Mecanismos de autentificaci&oacute;n, privacidad y control de accesos verdaderamente s&oacute;lidos.";
 choices[15][3] = "Permite que el agente informe espont&aacute;neamente de excepciones y errores en el protocolo";
 answers[15] = 2;
 units[15] = ['114'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10375. ";
 preguntaids[15] = 10375


//  Id pregunta: 9788 Año de creación de pregunta: 2015
 questions[16]= "17)  La red SARA:";
 choices[16]= new Array();
 choices[16][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[16][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[16][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[16][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[16] = 3;
 units[16] = ['114'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9788. ";
 preguntaids[16] = 9788


//  Id pregunta: 9582 Año de creación de pregunta: 2014
 questions[17]= "18)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[17]= new Array();
 choices[17][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[17][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[17][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[17][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[17] = 0;
 units[17] = ['114'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9582. TIC A2 2013 libre";
 preguntaids[17] = 9582


//  Id pregunta: 9583 Año de creación de pregunta: 2014
 questions[18]= "19)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[18]= new Array();
 choices[18][0] = "GETREQUEST PDU";
 choices[18][1] = "SETRESPONSE PDU";
 choices[18][2] = "RESPONSE PDU";
 choices[18][3] = "INFORMREQUEST PDU";
 answers[18] = 1;
 units[18] = ['114'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9583. TIC A2 2013 libre";
 preguntaids[18] = 9583


//  Id pregunta: 9356 Año de creación de pregunta: 2014
 questions[19]= "20)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[19]= new Array();
 choices[19][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[19][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[19][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.";
 choices[19][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[19] = 3;
 units[19] = ['114'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9356. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[19] = 9356


//  Id pregunta: 9604 Año de creación de pregunta: 2014
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[20]= new Array();
 choices[20][0] = "110";
 choices[20][1] = "119";
 choices[20][2] = "161";
 choices[20][3] = "25";
 answers[20] = 2;
 units[20] = ['114'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9604. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[20] = 9604


//  Id pregunta: 10844 Año de creación de pregunta: 2015
 questions[21]= "22)  En la tecnolog&iacute;a RDSI, la interfaz entre un equipo de usuario no compatible con RDSI y el correspondiente terminal adaptador recibe el nombre de punto de referencia:";
 choices[21]= new Array();
 choices[21][0] = "P";
 choices[21][1] = "R";
 choices[21][2] = "S";
 choices[21][3] = "T";
 answers[21] = 1;
 units[21] = ['114'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10844. ";
 preguntaids[21] = 10844


//  Id pregunta: 9437 Año de creación de pregunta: 2014
 questions[22]= "23)  La red TESTA tiene el rango de direcciones:";
 choices[22]= new Array();
 choices[22][0] = "10.0.0.0";
 choices[22][1] = "192.0.0.0";
 choices[22][2] = "62.0.0.0";
 choices[22][3] = "62.62.0.0";
 answers[22] = 3;
 units[22] = ['114'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9437. ";
 preguntaids[22] = 9437


//  Id pregunta: 9441 Año de creación de pregunta: 2014
 questions[23]= "24)  Las siglas CMOT significan:";
 choices[23]= new Array();
 choices[23][0] = "Complex Management Over TCP";
 choices[23][1] = "Common Management Over TCP/IP";
 choices[23][2] = "Complex Management Over TCP/IP";
 choices[23][3] = "Complex Management Of Telecomucation";
 answers[23] = 1;
 units[23] = ['114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9441. ";
 preguntaids[23] = 9441


//  Id pregunta: 9436 Año de creación de pregunta: 2014
 questions[24]= "25)  Un acceso b&aacute;sico RDSI tiene:";
 choices[24]= new Array();
 choices[24][0] = "30 canales B de 64 kbps y 1 canal D de 64 kbps";
 choices[24][1] = "2 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[24][2] = "30 canales B de 16 kbps y 1 canal D de 16 kbps";
 choices[24][3] = "2 canales B de 16 kbps y 1 canal D de 16 kbps";
 answers[24] = 0;
 units[24] = ['114'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9436. ";
 preguntaids[24] = 9436


//  Id pregunta: 10374 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento es de nivel interno?";
 choices[25]= new Array();
 choices[25][0] = "OSPF";
 choices[25][1] = "IS-IS";
 choices[25][2] = "RIP";
 choices[25][3] = "Todos los anteriores";
 answers[25] = 3;
 units[25] = ['114'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10374. ";
 preguntaids[25] = 10374


//  Id pregunta: 9440 Año de creación de pregunta: 2014
 questions[26]= "27)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en:";
 choices[26]= new Array();
 choices[26][0] = "El elemento gestionado";
 choices[26][1] = "El nodo de gesti&oacute;n central";
 choices[26][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[26][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[26] = 0;
 units[26] = ['114'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9440. ";
 preguntaids[26] = 9440


