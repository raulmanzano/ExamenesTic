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
//  Id pregunta: 2681 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Qu&eacute; es la WFMC?";
 choices[0]= new Array();
 choices[0][0] = "Una organizaci&oacute;n para promover la investigaci&oacute;n en el campo de la microelectr&oacute;nica y los computadores";
 choices[0][1] = "Un c&oacute;mite de gesti&oacute;n de las distintas organizaciones mundiales existentes en torno al web";
 choices[0][2] = "Un consorcio para coordinar los distintos forums organizados en torno a la tecnolog&iacute;a multimedia emergente";
 choices[0][3] = "Una organizaci&oacute;n cuya misi&oacute;n es promover el uso del workflow";
 answers[0] = 3;
 units[0] = ['55'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2681. ";
 preguntaids[0] = 2681


//  Id pregunta: 6533 Año de creación de pregunta: 2003
 questions[1]= "2)  Acerca de los sistemas operativos, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[1]= new Array();
 choices[1][0] = "Un  S.O. en Red da la visi&oacute;n de estar ejecut&aacute;ndose en una &uacute;nica m&aacute;quina, no en m&aacute;quinas independientes";
 choices[1][1] = "Los S.O. Distribuidos se ejecutan sobre un conjunto de nodos independientes conectados en red, pero no hacen creer al usuario que se trate de un sistema centralizado";
 choices[1][2] = "En un S.O. en Red cada m&aacute;quina ejecuta una copia del S.O.";
 choices[1][3] = "Los sistemas operativos distribuidos fueron el punto de partida para la implementaci&oacute;n de sistemas operativos centralizados";
 answers[1] = 2;
 units[1] = ['55'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 6533. ";
 preguntaids[1] = 6533


//  Id pregunta: 3142 Año de creación de pregunta: 2002
 questions[2]= "3)  Los servicios interactivos multimedia se caracterizan por ser:";
 choices[2]= new Array();
 choices[2][0] = "bidereccionales sim&eacute;tricos";
 choices[2][1] = "bidireccionales asim&eacute;tricos con mayor volumen del cliente al servidor";
 choices[2][2] = "bidireccionales asim&eacute;tricos con mayor volumen del servidor al cliente";
 choices[2][3] = "unidireccionales del servidor al cliente";
 answers[2] = 2;
 units[2] = ['55'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3142. ";
 preguntaids[2] = 3142


//  Id pregunta: 2769 Año de creación de pregunta: 2002
 questions[3]= "4)  El middleware es un software que proporciona un conjunto de servicios para conseguir:";
 choices[3]= new Array();
 choices[3][0] = "Independencia respecto al lenguaje de programaci&oacute;n";
 choices[3][1] = "Transparencia de ubicaci&oacute;n de los recursos distribuidos";
 choices[3][2] = "Ubicar los datos a conveniencia del usuario para conseguir en cada caso los mejores rendimientos";
 choices[3][3] = "Reducir la complejidad de los desarrollos";
 answers[3] = 1;
 units[3] = ['55'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2769. ";
 preguntaids[3] = 2769


//  Id pregunta: 1180 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a de servicios web se podr&iacute;a usar para enviar ficheros de gran tama&ntilde;o en un servicio Web, con tecnolog&iacute;a SOAP que optimiza en formato binario:";
 choices[4]= new Array();
 choices[4][0] = "REST-WS";
 choices[4][1] = "ATOM";
 choices[4][2] = "MTOM";
 choices[4][3] = "WSS";
 answers[4] = 2;
 units[4] = ['55'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1180. ";
 preguntaids[4] = 1180


//  Id pregunta: 1984 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura de servicios Web NO es correcta?";
 choices[5]= new Array();
 choices[5][0] = "Es un software que soporta interacciones m&aacute;quina a m&aacute;quina de forma interoperable.";
 choices[5][1] = "Tiene una interfaz descrita en un determinado formato SOAP, con la que se interact&uacute;a mediante el intercambio de mensajes.";
 choices[5][2] = "Posee un servicio de registro donde se publican los formatos de los servicios web a consultar.";
 choices[5][3] = "EI organismo W3C no especifica c&oacute;mo se implementan los servicios web, sino que define modelos conceptuales y principales aspectos a considerar en la utilizaci&oacute;n de servicios web.";
 answers[5] = 1;
 units[5] = ['55'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1984. ";
 preguntaids[5] = 1984


//  Id pregunta: 6535 Año de creación de pregunta: 2003
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de los siguientes es el protocolo utilizado para el registro y publicaci&oacute;n de servicios web:";
 choices[6]= new Array();
 choices[6][0] = "SOAP";
 choices[6][1] = "UDDI";
 choices[6][2] = "WSDL";
 choices[6][3] = "UDIT";
 answers[6] = 1;
 units[6] = ['55'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 6535. ";
 preguntaids[6] = 6535


//  Id pregunta: 3362 Año de creación de pregunta: 2006
 questions[7]= "8)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "El procesamiento cooperativo es aquel en que 2 o m&aacute;s elementos l&oacute;gicos diferentes interact&uacute;an entre s&iacute; en la realizaci&oacute;n de una tarea com&uacute;n";
 choices[7][1] = "El procesamiento centralizado utiliza el host para ejecutar el 100% de la l&oacute;gica asociada a un programa";
 choices[7][2] = "Los procesamientos centralizados dan mayor flexibilidad y escalabilidad";
 choices[7][3] = "Los procesamientos cooperativos reducen los costes de inversi&oacute;n en equipamiento";
 answers[7] = 2;
 units[7] = ['55'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3362. ";
 preguntaids[7] = 3362


//  Id pregunta: 1811 Año de creación de pregunta: 2016
 questions[8]= "9)  En una arquitectura de 3 capas existen los componentes intermedios llamados middleware. Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como una de las capas o niveles de comunicaci&oacute;n en los que se estructuran los middleware:";
 choices[8]= new Array();
 choices[8][0] = "Protocolo de transporte";
 choices[8][1] = "Canal de enlace de datos";
 choices[8][2] = "Protocolo de servicio";
 choices[8][3] = "Sistema operativo en red";
 answers[8] = 1;
 units[8] = ['55'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1811. ";
 preguntaids[8] = 1811


//  Id pregunta: 2996 Año de creación de pregunta: 2002
 questions[9]= "10)  P2P:";
 choices[9]= new Array();
 choices[9][0] = "Puede usarse para transferir archivos";
 choices[9][1] = "Simboliza un tipo de protocolos o sistemas que hacen uso de todos los recursos presentes en una red entre iguales (peers), haciendola parecer al usuario como un &uacute;nico sistema.";
 choices[9][2] = "Puede usarse para computaci&oacute;n distribuida";
 choices[9][3] = "Todas son ciertas";
 answers[9] = 3;
 units[9] = ['55'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2996. ";
 preguntaids[9] = 2996


//  Id pregunta: 2517 Año de creación de pregunta: 2004
 questions[10]= "11)  En la arquitectura cliente-servidor es falso que:";
 choices[10]= new Array();
 choices[10][0] = "Cliente y servidor tienen que estar obligatoriamente en distintas m&aacute;quinas";
 choices[10][1] = "Un servidor atiende a muchos clientes";
 choices[10][2] = "Hay m&aacute;s tr&aacute;fico de servidor a cliente que de cliente a servidor";
 choices[10][3] = "Todas las respuestas anteriores son verdaderas";
 answers[10] = 0;
 units[10] = ['55'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2517. Similar a examen TIC SS A 2003";
 preguntaids[10] = 2517


//  Id pregunta: 6534 Año de creación de pregunta: 2003
 questions[11]= "12)  Indique cu&aacute;l de los siguientes no se trata de un principio gu&iacute;a que defina reglas b&aacute;sicas para el desarrollo, mantenimiento y uso de arquitecturas SOA:";
 choices[11]= new Array();
 choices[11][0] = "Conceptualizaci&oacute;n";
 choices[11][1] = "Interoperabilidad";
 choices[11][2] = "Componentizaci&oacute;n";
 choices[11][3] = "Reutilizaci&oacute;n";
 answers[11] = 0;
 units[11] = ['55'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 6534. ";
 preguntaids[11] = 6534


//  Id pregunta: 2760 Año de creación de pregunta: 2002
 questions[12]= "13)  El lenguaje Visual Basic, y la arquitectura DNA de Microsoft permiten arquitecturas Cliente/Servidor:";
 choices[12]= new Array();
 choices[12][0] = "De 2 niveles";
 choices[12][1] = "De N niveles";
 choices[12][2] = "Solo con clientes Microsoft";
 choices[12][3] = "B y C son ciertas";
 answers[12] = 1;
 units[12] = ['55'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2760. ";
 preguntaids[12] = 2760


//  Id pregunta: 6536 Año de creación de pregunta: 2003
 questions[13]= "14)  Se&ntilde;ale cu&aacute;l de las siguientes opciones relativas a la tecnolog&iacute;a de web services es verdadera:";
 choices[13]= new Array();
 choices[13][0] = "UDDI se utiliza como lenguaje de definici&oacute;n de servicios web";
 choices[13][1] = "SOAP deriva de XML-RPC";
 choices[13][2] = "WSDL permita la localizaci&oacute;n y publicaci&oacute;n de servicios web";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = 1;
 units[13] = ['55'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6536. ";
 preguntaids[13] = 6536


//  Id pregunta: 5118 Año de creación de pregunta: 2003
 questions[14]= "15)  En cuanto a los Servicios Web, no se puede decir que:";
 choices[14]= new Array();
 choices[14][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[14][1] = "Es independiente de la plataforma";
 choices[14][2] = "Es independiente del lenguaje de programaci&oacute;n y de la plataforma";
 choices[14][3] = "Sus est&aacute;ndares son m&aacute;s complejos que los usados en CORBA";
 answers[14] = 3;
 units[14] = ['55'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 5118. ";
 preguntaids[14] = 5118


//  Id pregunta: 1983 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes NO es un mecanismo de comunicaci&oacute;n para implementar sistemas distribuidos?";
 choices[15]= new Array();
 choices[15][0] = "Llamadas a procedimientos remotos";
 choices[15][1] = "Objetos remotos";
 choices[15][2] = "Paso de mensajes mediante primitivas send/receive";
 choices[15][3] = "Mecanismos de retrollamada";
 answers[15] = 3;
 units[15] = ['55'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1983. ";
 preguntaids[15] = 1983


//  Id pregunta: 2970 Año de creación de pregunta: 2002
 questions[16]= "17)  Las tecnolog&iacute;as del proceso distribuido permiten la captura de la informaci&oacute;n en el lugar en que la actividad se desarrolla y, en consecuencia, el an&aacute;lisis del trabajo puede ser realizado desde ese momento. Una consecuencia b&aacute;sica de este fen&oacute;meno es:";
 choices[16]= new Array();
 choices[16][0] = "Utilizar menos tiempo para la gesti&oacute;n y supervisi&oacute;n";
 choices[16][1] = "Utilizar m&aacute;s tiempo para la gesti&oacute;n al aumentar el volumen de informaci&oacute;n disponible";
 choices[16][2] = "Aumentar la posibilidad de p&eacute;rdida de datos sensibles para la gesti&oacute;n";
 choices[16][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[16] = 0;
 units[16] = ['55'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2970. ";
 preguntaids[16] = 2970


//  Id pregunta: 3018 Año de creación de pregunta: 2002
 questions[17]= "18)  RPC's o Remote Procedure Calls est&aacute;n asocadas con:";
 choices[17]= new Array();
 choices[17][0] = "Redes y Sistemas distribuidos";
 choices[17][1] = "Modelo cliente-servidor";
 choices[17][2] = "Sesiones orientadas a no conexi&oacute;n";
 choices[17][3] = "Todas las respuestas anteriores son correctas";
 answers[17] = 3;
 units[17] = ['55'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3018. ";
 preguntaids[17] = 3018


//  Id pregunta: 6577 Año de creación de pregunta: 2003
 questions[18]= "19)  Las siglas UDDI corresponden a:";
 choices[18]= new Array();
 choices[18][0] = "Universal Description and Discovery Interface";
 choices[18][1] = "Universal Description, Discovery and Integration";
 choices[18][2] = "Universal Definition, Discovery and Integration";
 choices[18][3] = "Universal Definition and Discovery Interface";
 answers[18] = 1;
 units[18] = ['55'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6577. ";
 preguntaids[18] = 6577


//  Id pregunta: 4303 Año de creación de pregunta: 2004
 questions[19]= "20)  En relaci&oacute;n a los servicios web se&ntilde;ale la opci&oacute;n incorrecta";
 choices[19]= new Array();
 choices[19][0] = "SOAP (Simple Object access Protocol &oacute; Services-Oriented Architecture Protocol) es el protocolo de comunicaciones para los Servicios Web";
 choices[19][1] = "WSML (Web Service Markup Language) describe el interfaz externo de un Servicio Web y c&oacute;mo utilizarlo";
 choices[19][2] = "UDDI (Universal Discovery, Descripcion and Integration) es un protocolo para registros basados en web que contiene informaci&oacute;n acerca de servicios. Un registro UDDI es como el list&iacute;n de los servicios.";
 choices[19][3] = "Un Servicio Web se describe con un archivo WSDL, se registra en UDDI y se muestra en web a trav&eacute;s de SOAP.";
 answers[19] = 1;
 units[19] = ['55'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 4303. Similar a examen TIC SS A 2003";
 preguntaids[19] = 4303


//  Id pregunta: 1981 Año de creación de pregunta: 2016
 questions[20]= "21)  En el procesamiento cooperativo de arquitecturas cliente-servidor, &iquest;Cu&aacute;l de los siguientes NO es propio de dicho procesamiento cooperativo?";
 choices[20]= new Array();
 choices[20][0] = "Multiple Server";
 choices[20][1] = "Cooperaci&oacute;n de procesos paralelos";
 choices[20][2] = "Cooperaci&oacute;n de base de datos";
 choices[20][3] = "Cooperaci&oacute;n de balanceadores";
 answers[20] = 3;
 units[20] = ['55'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1981. ";
 preguntaids[20] = 1981


//  Id pregunta: 2684 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Qu&eacute; es un monitor de teleproceso?:";
 choices[21]= new Array();
 choices[21][0] = "Un sistema operativo de proceso de transacciones";
 choices[21][1] = "Un sistema de gesti&oacute;n de la configuraci&oacute;n";
 choices[21][2] = "Una herramienta de monitorizaci&oacute;n del rendimiento";
 choices[21][3] = "Un sistema de procesamiento as&iacute;ncrono";
 answers[21] = 0;
 units[21] = ['55'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2684. ";
 preguntaids[21] = 2684


//  Id pregunta: 6826 Año de creación de pregunta: 2010
 questions[22]= "23)  &iquest;Cu&aacute;l es una infraestructura de integraci&oacute;n para la construcci&oacute;n de arquitecturas SOA?";
 choices[22]= new Array();
 choices[22][0] = "SAML";
 choices[22][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[22][2] = "CASE (Computer-Aided Software Engineering)";
 choices[22][3] = "ESB (Enterprise Service Bus)";
 answers[22] = 3;
 units[22] = ['55'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6826. TIC A 2009";
 preguntaids[22] = 6826


//  Id pregunta: 1986 Año de creación de pregunta: 2016
 questions[23]= "24)  En el mundo de los Servicios Web (web Services), &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?";
 choices[23]= new Array();
 choices[23][0] = "Los protocolos XML-RPC y SOAP son incompatibles";
 choices[23][1] = "Tanto SOAP como XML-RPC son lenguajes de mensajer&iacute;a basados en XML";
 choices[23][2] = "Con XML-RPC puedes elegir el conjunto de caracteres a utilizar en los servicios Web";
 choices[23][3] = "Se pueden utilizar con http sobre TCP";
 answers[23] = 2;
 units[23] = ['55'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1986. ";
 preguntaids[23] = 1986


//  Id pregunta: 3236 Año de creación de pregunta: 2003
 questions[24]= "25)  &iquest;En cu&aacute;l de los siguientes modelos de arquitectura cliente-servidor, el cliente asume mayor carga de proceso?:";
 choices[24]= new Array();
 choices[24][0] = "Base de datos remota.";
 choices[24][1] = "Proceso distribuido.";
 choices[24][2] = "Presentaci&oacute;n remota.";
 choices[24][3] = "Presentaci&oacute;n distribuida.";
 answers[24] = 0;
 units[24] = ['55'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3236. Junta Andaluc&iacute;a";
 preguntaids[24] = 3236


//  Id pregunta: 2990 Año de creación de pregunta: 2002
 questions[25]= "26)  MPI:";
 choices[25]= new Array();
 choices[25][0] = "Es una librer&iacute;a para programaci&oacute;n distribuida por paso de mensajes";
 choices[25][1] = "Multi Peer Interface es una utilidad P2P que permite utilizar los recursos de los PC de una LAN como si de un servidor centralizado se tratara";
 choices[25][2] = "Permite el intercambio de archivos entre PCs de una misma red";
 choices[25][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[25] = 0;
 units[25] = ['55'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2990. ";
 preguntaids[25] = 2990


//  Id pregunta: 6833 Año de creación de pregunta: 2010
 questions[26]= "27)  Los servicios web son:";
 choices[26]= new Array();
 choices[26][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[26][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[26][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[26][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[26] = 3;
 units[26] = ['55', '74'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 6833. TIC A 2009";
 preguntaids[26] = 6833


//  Id pregunta: 1181 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO se usa en el desarrollo de servicios web?";
 choices[27]= new Array();
 choices[27][0] = "AXIS";
 choices[27][1] = "JAX-WS";
 choices[27][2] = "CXE";
 choices[27][3] = "AXIS 2";
 answers[27] = 2;
 units[27] = ['55'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1181. ";
 preguntaids[27] = 1181


//  Id pregunta: 1061 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique la frase correcta acerca de los servicios web distribuidos.";
 choices[28]= new Array();
 choices[28][0] = "WSDL 1.1 define dos &uacute;nicos tipos de operaci&oacute;n, la unidireccional y la de petici&oacute;n-respuesta.";
 choices[28][1] = "Para describir las interfaces de los servicios web se utiliza WS-BPEL.";
 choices[28][2] = "Un usuario de un servicio registra &eacute;ste utilizando UDDI.";
 choices[28][3] = "SOAP es un protocolo para hacer llamadas a m&eacute;todos de objetos remotos.";
 answers[28] = 3;
 units[28] = ['55'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1061. ";
 preguntaids[28] = 1061


//  Id pregunta: 1357 Año de creación de pregunta: 2016
 questions[29]= "30)  En relaci&oacute;n con los servicios web y SOAP, las siglas MTOM se corresponden con:";
 choices[29]= new Array();
 choices[29][0] = "Mail Transmission Optimization Mechanism.";
 choices[29][1] = "Message Transmission Optimization Mechanism.";
 choices[29][2] = "Message Transport Optimization Module.";
 choices[29][3] = "Mail Transport Optimization Module.";
 answers[29] = 1;
 units[29] = ['55'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1357. ";
 preguntaids[29] = 1357


//  Id pregunta: 3275 Año de creación de pregunta: 2003
 questions[30]= "31)  Los thin clients son:";
 choices[30]= new Array();
 choices[30][0] = "Ordenadores sin disco duro que acceden a las aplicaciones a trav&eacute;s de un servidor.";
 choices[30][1] = "CD arrancable con una colecci&oacute;n de programas GNU/ LINUX.";
 choices[30][2] = "Una plataforma e-learning desarrollada por la universidad de Lovaina.";
 choices[30][3] = "Colecci&oacute;n de utilidades que permiten llevar a cabo un proceso de votaci&oacute;n electr&oacute;nica.";
 answers[30] = 0;
 units[30] = ['55'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3275. Junta Andaluc&iacute;a";
 preguntaids[30] = 3275


//  Id pregunta: 5625 Año de creación de pregunta: 2007
 questions[31]= "32)  Respecto a los servicios Web, podemos afirmar que:";
 choices[31]= new Array();
 choices[31][0] = "WDSL define los criterios para los registros basados en Ia red.";
 choices[31][1] = "XML busca Ia definici&oacute;n y descripci&oacute;n de los servicios Web";
 choices[31][2] = "SOAP proporciona una manera estandar de transportar mensajes para el uso de servicios Web";
 choices[31][3] = "UUID define un protocolo de comunicaci&oacute;n f&iacute;sica entre ordenadores.";
 answers[31] = 2;
 units[31] = ['55'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 5625. ";
 preguntaids[31] = 5625


//  Id pregunta: 3363 Año de creación de pregunta: 2006
 questions[32]= "33)  La arquitectura cliente/servidor:";
 choices[32]= new Array();
 choices[32][0] = "Se conoce tambi&eacute;n como arquitectura de 3 capas o niveles, siendo la tercera una capa situada entre el cliente y el servidor donde reside la l&oacute;gica de negocio";
 choices[32][1] = "Involucra a un solo cliente que se comunica con un solo servidor";
 choices[32][2] = "Es la m&aacute;s adecuada para aplicaciones en continua evoluci&oacute;n y con datos distribuidos";
 choices[32][3] = "Permite la ejecuci&oacute;n de los tratamientos de clientes y servidor en el mismo equipo o en diferentes, indistintamente";
 answers[32] = 3;
 units[32] = ['55'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3363. ";
 preguntaids[32] = 3363


//  Id pregunta: 1813 Año de creación de pregunta: 2016
 questions[33]= "34)  En una arquitectura SOA existe una capa en la que se realiza la funci&oacute;n de monitorizaci&oacute;n y control de servicios. Indique cu&aacute;l es la opci&oacute;n correcta que define dicha capa.";
 choices[33]= new Array();
 choices[33][0] = "Capa de control";
 choices[33][1] = "Capa de servicios";
 choices[33][2] = "Capa de SOA Governance";
 choices[33][3] = "Capa de SOA Enterprise Service Bus";
 answers[33] = 2;
 units[33] = ['55'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1813. ";
 preguntaids[33] = 1813


//  Id pregunta: 1544 Año de creación de pregunta: 2016
 questions[34]= "35)  La Especificaci&oacute;n del W3C para optimizar la Transmisi&oacute;n de Mensajes para SOAP es:";
 choices[34]= new Array();
 choices[34][0] = "RRSHB";
 choices[34][1] = "CORBA";
 choices[34][2] = "MTOM";
 choices[34][3] = "SOAP HEADER";
 answers[34] = 2;
 units[34] = ['55'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1544. ";
 preguntaids[34] = 1544


//  Id pregunta: 1176 Año de creación de pregunta: 2016
 questions[35]= "36)  En un Servicio Web, qu&eacute; lenguaje de los siguientes especifica la sintaxis y los mecanismos de intercambio de mensajes:";
 choices[35]= new Array();
 choices[35][0] = "WSDL.";
 choices[35][1] = "SOAP.";
 choices[35][2] = "UDDI.";
 choices[35][3] = "WS-Security.";
 answers[35] = 0;
 units[35] = ['55'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1176. ";
 preguntaids[35] = 1176


//  Id pregunta: 6582 Año de creación de pregunta: 2009
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; ligado al desarrollo de aplicaciones basadas en servicios web:";
 choices[36]= new Array();
 choices[36][0] = "JAXB";
 choices[36][1] = "AWT";
 choices[36][2] = "AXIS";
 choices[36][3] = "WSE";
 answers[36] = 1;
 units[36] = ['55'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 6582. MAP 2008 A2";
 preguntaids[36] = 6582


//  Id pregunta: 3313 Año de creación de pregunta: 2004
 questions[37]= "38)  La gesti&oacute;n de un sistema operativo a trav&eacute;s de los sistemas distribuidos";
 choices[37]= new Array();
 choices[37][0] = "Aporta como ventajas: La compartici&oacute;n de recursos, la aceleraci&oacute;n de c&aacute;lculos, la fiabilidad y la comunicaci&oacute;n.";
 choices[37][1] = "Son sistemas altamente acoplados, los procesadores comparten tanto memoria como reloj.";
 choices[37][2] = "Son sistemas d&eacute;bilmente acoplados, compartiendo los procesadores la memoria.";
 choices[37][3] = "Son sistemas d&eacute;bilmente acoplados, los procesadores comparten reloj pero no memoria.";
 answers[37] = 0;
 units[37] = ['55'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3313. MAP-B 2003";
 preguntaids[37] = 3313


//  Id pregunta: 5808 Año de creación de pregunta: 2007
 questions[38]= "39)  En el contexto de SOA, las siglas ESB son el acr&oacute;nimo de:";
 choices[38]= new Array();
 choices[38][0] = "Execution Service Base";
 choices[38][1] = "Execution Service Board";
 choices[38][2] = "Enterprise Service Bus";
 choices[38][3] = "Enterprise Service Board";
 answers[38] = 2;
 units[38] = ['55'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 5808. ";
 preguntaids[38] = 5808


//  Id pregunta: 6798 Año de creación de pregunta: 2010
 questions[39]= "40)  Las arquitecturas orientadas a servicios est&aacute;n basadas en una serie de principios b&aacute;sicos, uno de los cu&aacute;les es:";
 choices[39]= new Array();
 choices[39][0] = "Los servicios usan una arquitectura &quot;hub-in-spoke&quot;";
 choices[39][1] = "Se integran en sistemas SGDBR";
 choices[39][2] = "Los cambios en la implementaci&oacute;n afectan a los consumidores del servicio";
 choices[39][3] = "Deben estar accesibles y deben poder ser localizados para su consumo";
 answers[39] = 3;
 units[39] = ['55'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 6798. TIC A 2009";
 preguntaids[39] = 6798


//  Id pregunta: 6580 Año de creación de pregunta: 2003
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n falsa sobre SOAP:";
 choices[40]= new Array();
 choices[40][0] = "Funciona s&oacute;lo sobre HTTP";
 choices[40][1] = "Tiene como base XML";
 choices[40][2] = "La cabecera header es opcional";
 choices[40][3] = "El desarrollo body contiene la informaci&oacute;n principal";
 answers[40] = 0;
 units[40] = ['55'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6580. ";
 preguntaids[40] = 6580


//  Id pregunta: 5926 Año de creación de pregunta: 2007
 questions[41]= "42)  En una aplicaci&oacute;n sobre arquitectura de tres capas, &iquest;d&oacute;nde se encuentran ubicadas las reglas de negocio?";
 choices[41]= new Array();
 choices[41][0] = "En el servidor de aplicaciones";
 choices[41][1] = "En el servidor de datos";
 choices[41][2] = "En el Cliente";
 choices[41][3] = "En el servidor http/ssl (Hipertext Transfer Protocol / Secure Sockets Layer)";
 answers[41] = 0;
 units[41] = ['55'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5926. ";
 preguntaids[41] = 5926


//  Id pregunta: 5771 Año de creación de pregunta: 2007
 questions[42]= "43)  Cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo SOAP es falsa";
 choices[42]= new Array();
 choices[42][0] = "Atraviesa firewalls y routers";
 choices[42][1] = "Depende del sistema operativo y del procesador";
 choices[42][2] = "Es un est&aacute;ndar de la industria";
 choices[42][3] = "Utiliza los mismos est&aacute;ndares de la Web";
 answers[42] = 1;
 units[42] = ['55'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 5771. ";
 preguntaids[42] = 5771


//  Id pregunta: 3295 Año de creación de pregunta: 2004
 questions[43]= "44)  El software que conecta dos aplicaciones heterog&eacute;neas, para compartir recursos de proceso de datos, se conoce como:";
 choices[43]= new Array();
 choices[43][0] = "Firmware";
 choices[43][1] = "Interfaz de usuario";
 choices[43][2] = "Middleware";
 choices[43][3] = "Everyware";
 answers[43] = 2;
 units[43] = ['55'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3295. ";
 preguntaids[43] = 3295


//  Id pregunta: 1985 Año de creación de pregunta: 2016
 questions[44]= "45)  Dentro de las arquitecturas orientadas a servicios, &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que es un ESB (Enterprise Service Bus)?";
 choices[44]= new Array();
 choices[44][0] = "Es el encargado de definir y verificar el cumplimiento de los acuerdos de nivel de servicio";
 choices[44][1] = "Es una infraestructura y un sistema de eventos que permiten conectar cualquier recurso de tecnolog&iacute;as de la informaci&oacute;n sin importar la tecnolog&iacute;a que utiliza el recurso.";
 choices[44][2] = "Es el repositorio de datos donde esta almacenada la informaci&oacute;n que quiere ser compartida a trav&eacute;s de los web services.";
 choices[44][3] = "Es el registro y repositorio de los web services.";
 answers[44] = 1;
 units[44] = ['55'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1985. ";
 preguntaids[44] = 1985


//  Id pregunta: 1982 Año de creación de pregunta: 2016
 questions[45]= "46)  Indique cu&aacute;l de las siguientes afirmaciones, relativas a sistemas distribuidos, NO es correcta:";
 choices[45]= new Array();
 choices[45][0] = "En el caso de que un nodo del sistema fallara, los dem&aacute;s podr&iacute;an continuar ejecutando sus acciones";
 choices[45][1] = "Una vez ejecutados distintos trabajos en distintos nodos del sistema, hay que conocer en qu&eacute; orden se han ejecutado estos.";
 choices[45][2] = "Dan una visi&oacute;n al usuario de sistemas aut&oacute;nomos independientes.";
 choices[45][3] = "Tanto las arquitecturas como los sistemas operativos no tienen por qu&eacute; ser iguales";
 answers[45] = 2;
 units[45] = ['55'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1982. ";
 preguntaids[45] = 1982


//  Id pregunta: 2813 Año de creación de pregunta: 2002
 questions[46]= "47)  En el modelo cliente/servidor:";
 choices[46]= new Array();
 choices[46][0] = "Pueden elegirse distintos lenguajes de programaci&oacute;n para cada una de las partes";
 choices[46][1] = "Debe utilizarse siempre SQL para los procesos de tratamiento de datos";
 choices[46][2] = "El lenguaje para la parte cliente, debe permitir caracter&iacute;sticas de orientaci&oacute;n al objeto";
 choices[46][3] = "El lenguaje en el que se programen los procesos a ejecutarse en el cliente determina el que se debe utilizar para programar los procesos de los servidores";
 answers[46] = 0;
 units[46] = ['55'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2813. ";
 preguntaids[46] = 2813


//  Id pregunta: 4430 Año de creación de pregunta: 2002
 questions[47]= "48)  Los web services:";
 choices[47]= new Array();
 choices[47][0] = "Permiten la ejecuci&oacute;n de procedimientos remotos y devoluci&oacute;n de los resultados a trav&eacute;s de redes IP, basandose en el protocolo HTTP";
 choices[47][1] = "Permiten a los usuarios devolver cualquier tipo de informaci&oacute;n con un navegador y el protocolo HTTP";
 choices[47][2] = "Son una mera especificaci&oacute;n y a&uacute;n no se han puesto en pr&aacute;ctica";
 choices[47][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[47] = 0;
 units[47] = ['55'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 4430. ";
 preguntaids[47] = 4430


//  Id pregunta: 6579 Año de creación de pregunta: 2003
 questions[48]= "49)  Cu&aacute;l de los siguientes no se encuentra entre los beneficios que puede obtener una organizaci&oacute;n que adopte SOA:";
 choices[48]= new Array();
 choices[48][0] = "Mejora en la interoperabilidad de servicios";
 choices[48][1] = "Facilidad para el desarrollo de aplicaciones fuertemente acopladas";
 choices[48][2] = "Facilidad para abordar modelos de negocios basados en colaboraci&oacute;n con otros entes (socios, proveedores)";
 choices[48][3] = "Poder para reemplazar elementos de la capa de aplicaci&oacute;n sin disrupci&oacute;n en el proceso de negocio";
 answers[48] = 1;
 units[48] = ['55'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6579. ";
 preguntaids[48] = 6579


//  Id pregunta: 1075 Año de creación de pregunta: 2016
 questions[49]= "50)  Identifique la caracter&iacute;stica que NO forma parte de los principios de dise&ntilde;o SOA:";
 choices[49]= new Array();
 choices[49][0] = "Interconexi&oacute;n";
 choices[49][1] = ". Encapsulaci&oacute;n";
 choices[49][2] = ". Reutilizaci&oacute;n.";
 choices[49][3] = "Descubrimiento.";
 answers[49] = 0;
 units[49] = ['55'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1075. ";
 preguntaids[49] = 1075


//  Id pregunta: 6578 Año de creación de pregunta: 2003
 questions[50]= "51)  BPEL se corresponde con:";
 choices[50]= new Array();
 choices[50][0] = "Un lenguaje estandarizado por OASIS para la composici&oacute;n de servicios web";
 choices[50][1] = "Un formato XML que se utiliza para describir servicios Web";
 choices[50][2] = "Un protocolo est&aacute;ndar creado por Microsoft, IBM y otros, que define c&oacute;mo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML";
 choices[50][3] = "Un consorcio internacional sin fines de lucro que orienta el desarrollo, la convergencia y la adopci&oacute;n de los est&aacute;ndares e-business";
 answers[50] = 0;
 units[50] = ['55'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6578. ";
 preguntaids[50] = 6578


//  Id pregunta: 6072 Año de creación de pregunta: 2003
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?:";
 choices[51]= new Array();
 choices[51][0] = "WDSL";
 choices[51][1] = "SOAP";
 choices[51][2] = "UDDI";
 choices[51][3] = "XHTML";
 answers[51] = 2;
 units[51] = ['55'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 6072. Examen TIC A1 MAP 2007";
 preguntaids[51] = 6072


//  Id pregunta: 6583 Año de creación de pregunta: 2009
 questions[52]= "53)  Seleccione la opci&oacute;n correcta:";
 choices[52]= new Array();
 choices[52][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[52][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n";
 choices[52][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras";
 choices[52][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas";
 answers[52] = 2;
 units[52] = ['55'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6583. MAP 2008 A2";
 preguntaids[52] = 6583


//  Id pregunta: 6584 Año de creación de pregunta: 2009
 questions[53]= "54)  Como se denomina al conjunto de servicios y protocolos de los servicios web:";
 choices[53]= new Array();
 choices[53][0] = "Web Service Protocol Stack.";
 choices[53][1] = "Web Service Protocol Set.";
 choices[53][2] = "UDDI (Universal Description, Discovery and Integration).";
 choices[53][3] = "SOAP (Simple Object Access Protocol).";
 answers[53] = 0;
 units[53] = ['55'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6584. MAP 2008 A2";
 preguntaids[53] = 6584


//  Id pregunta: 2664 Año de creación de pregunta: 2003
 questions[54]= "55)  &iquest;Puede ejecutarse una aplicaci&oacute;n Windows al mismo tiempo por muchos usuarios, en una misma m&aacute;quina, pero con pantallas diferentes?:";
 choices[54]= new Array();
 choices[54][0] = "No, dado que un sistema de este tipo solo puede tener una consola, esa prestaci&oacute;n est&aacute; accesible en sistemas empresariales tipo Unix";
 choices[54][1] = "Si, dado que en un servidor windows empresarial pueden conectarse varias consolas diferentes";
 choices[54][2] = "Si, utilizando X-Windows";
 choices[54][3] = "Si, utilizando servicios de Remote Desktop";
 answers[54] = 3;
 units[54] = ['55'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2664. ";
 preguntaids[54] = 2664


//  Id pregunta: 2910 Año de creación de pregunta: 2002
 questions[55]= "56)  Indique la afirmaci&oacute;n falsa, relativa a la arquitectura cliente/servidor:";
 choices[55]= new Array();
 choices[55][0] = "El di&aacute;logo entre cliente y servidor se inicia a requerimiento del servidor";
 choices[55][1] = "El servidor es el equipo que se encarga de suministrar servicios, como consultas a la base de datos, y el cliente es el equipo que muestra y formatea los datos";
 choices[55][2] = "Durante el desarrollo de las aplicaciones que siguen esta estructura, a veces hay que decidir que partes de la aplicaci&oacute;n se ejecutan en el servidor y cu&aacute;les en el cliente";
 choices[55][3] = "Las aplicaciones que se ejecutan en entorno Web siguen esta arquitectura";
 answers[55] = 0;
 units[55] = ['55'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2910. ";
 preguntaids[55] = 2910


//  Id pregunta: 6696 Año de creación de pregunta: 2009
 questions[56]= "57)  WSDL son las siglas de:";
 choices[56]= new Array();
 choices[56][0] = "Web Services Description Language";
 choices[56][1] = "Web Services Data Language";
 choices[56][2] = "Web SOAP Definition Language";
 choices[56][3] = "Web Services Distributed Language";
 answers[56] = 0;
 units[56] = ['55'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6696. ";
 preguntaids[56] = 6696


//  Id pregunta: 2532 Año de creación de pregunta: 2004
 questions[57]= "58)  Respecto a los 'web services', &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[57]= new Array();
 choices[57][0] = "Se describen mediante el lenguaje WSDL";
 choices[57][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[57][2] = "Pueden interaccionar clientes y servicios de distintas tecnolog&iacute;as";
 choices[57][3] = "Utilizan el protocolo SOAP";
 answers[57] = 1;
 units[57] = ['55'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2532. ";
 preguntaids[57] = 2532


//  Id pregunta: 3039 Año de creación de pregunta: 2002
 questions[58]= "59)  Se&ntilde;ale el enunciado falso:";
 choices[58]= new Array();
 choices[58][0] = "Los ordenadores de primera generaci&oacute;n eran dif&iacute;ciles de programar porque no exist&iacute;an los lenguajes simb&oacute;licos";
 choices[58][1] = "Los ordenadores de segunda generaci&oacute;n quedaron limitados al campo cient&iacute;fico y de la defensa";
 choices[58][2] = "Como consecuencia de la aparici&oacute;n de los transistores disminuyeron las necesidades de refrigeraci&oacute;n";
 choices[58][3] = "El ordenador ENIAC estaba basado en tecnolog&iacute;as de v&aacute;lvulas de vac&iacute;o";
 answers[58] = 1;
 units[58] = ['55'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3039. ";
 preguntaids[58] = 3039


//  Id pregunta: 2812 Año de creación de pregunta: 2002
 questions[59]= "60)  En el modelo cliente/servidor, el funcionamiento de una operaci&oacute;n as&iacute;ncrona consiste en que:";
 choices[59]= new Array();
 choices[59][0] = "El proceso cliente lanza una petici&oacute;n y contin&uacute;a cuando el proceso servidor acusa recibo de la petici&oacute;n";
 choices[59][1] = "El proceso cliente lanza una petici&oacute;n y contin&uacute;a, esperando respuesta afirmativa o negativa a su petici&oacute;n";
 choices[59][2] = "El proceso cliente espera hasta que el proceso servidor ha cumplimentado la petici&oacute;n";
 choices[59][3] = "Las operaciones as&iacute;ncronas no son utilizables en este modelo";
 answers[59] = 1;
 units[59] = ['55'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2812. ";
 preguntaids[59] = 2812


//  Id pregunta: 2991 Año de creación de pregunta: 2002
 questions[60]= "61)  MPI:";
 choices[60]= new Array();
 choices[60][0] = "Es una librer&iacute;a para programaci&oacute;n por paso de mensajes, en entornos distribuidos";
 choices[60][1] = "Es una m&aacute;quina virtual que ejecuta los programas, independientemente del lenguaje con el que se escribieran";
 choices[60][2] = "Es una manera de llamar a todas las aplicaciones que hacen uso de SOAP sobre HTTP";
 choices[60][3] = "Todas son falsas";
 answers[60] = 0;
 units[60] = ['55'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2991. ";
 preguntaids[60] = 2991


//  Id pregunta: 6854 Año de creación de pregunta: 2010
 questions[61]= "62)  Cu&aacute;l de los siguientes NO es un principio arquitect&oacute;nico b&aacute;sico intr&iacute;nsicamente aplicable a arquitecturas SOA:";
 choices[61]= new Array();
 choices[61][0] = "Encapsulaci&oacute;n";
 choices[61][1] = "D&eacute;bil acoplamiento";
 choices[61][2] = "Composici&oacute;n";
 choices[61][3] = "Polimorfismo";
 answers[61] = 3;
 units[61] = ['55'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 6854. ";
 preguntaids[61] = 6854


//  Id pregunta: 2922 Año de creación de pregunta: 2002
 questions[62]= "63)  La arquitectura centralizada tiene como ventaja respecto a la arquitectura distribuida:";
 choices[62]= new Array();
 choices[62][0] = "Que aporta unas posibilidades de trabajo mucho m&aacute;s flexibles y potentes";
 choices[62][1] = "Una m&iacute;nima dependencia de las comunicaciones";
 choices[62][2] = "Una menor complejidad";
 choices[62][3] = "Todas las anteriores";
 answers[62] = 2;
 units[62] = ['55'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2922. ";
 preguntaids[62] = 2922


//  Id pregunta: 2642 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Cu&aacute;l es la diferencia b&aacute;sica entre C y C++?";
 choices[63]= new Array();
 choices[63][0] = "C++ es la versi&oacute;n de C estandarizada por ANSI (tambi&eacute;n se le conoce como ANSI-C).";
 choices[63][1] = "C++ es un superconjunto de instrucciones de C para soportar programaci&oacute;n orientada a objetos.";
 choices[63][2] = "C++ es la versi&oacute;n de C preparada por los laboratorios Bell de ATT que permite embeber sentencias SQL.";
 choices[63][3] = "C++ es una versi&oacute;n 4GL del C est&aacute;ndar (lenguaje de 4&ordf; generaci&oacute;n) mientras que C es un lenguaje de 3&ordf; generaci&oacute;n.";
 answers[63] = 1;
 units[63] = ['55'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2642. ";
 preguntaids[63] = 2642


//  Id pregunta: 5807 Año de creación de pregunta: 2007
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; relacionado con procesos de negocio?";
 choices[64]= new Array();
 choices[64][0] = "BPMN";
 choices[64][1] = "BPEL";
 choices[64][2] = "XPDL";
 choices[64][3] = "WSDL";
 answers[64] = 3;
 units[64] = ['55'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 5807. ";
 preguntaids[64] = 5807


//  Id pregunta: 2984 Año de creación de pregunta: 2002
 questions[65]= "66)  Los sem&aacute;foros son una t&eacute;cnica de comunicaci&oacute;n entre procesos para:";
 choices[65]= new Array();
 choices[65][0] = "Evitar los bloqueos";
 choices[65][1] = "Ejecutar threads";
 choices[65][2] = "Permitir la exclusi&oacute;n mutua";
 choices[65][3] = "Comunicar procesos en sistemas distribuidos";
 answers[65] = 2;
 units[65] = ['55'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2984. ";
 preguntaids[65] = 2984


//  Id pregunta: 6581 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[66]= new Array();
 choices[66][0] = "SOAP";
 choices[66][1] = "UDDI";
 choices[66][2] = "XFSS";
 choices[66][3] = "HTTP";
 answers[66] = 2;
 units[66] = ['55'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6581. ";
 preguntaids[66] = 6581


//  Id pregunta: 5532 Año de creación de pregunta: 2007
 questions[67]= "68)  Indique cu&aacute;l de las siguientes no es una caracter&iacute;stica de los sistemas cliente-servidor:";
 choices[67]= new Array();
 choices[67][0] = "Compartici&oacute;n de recursos.";
 choices[67][1] = "Existe un &uacute;nico sistema de almacenamiento compartido, donde reside toda la informaci&oacute;n importante del sistema.";
 choices[67][2] = "Concurrencia.";
 choices[67][3] = "Interoperabilidad.";
 answers[67] = 1;
 units[67] = ['55'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 5532. ";
 preguntaids[67] = 5532


//  Id pregunta: 2807 Año de creación de pregunta: 2002
 questions[68]= "69)  En el entorno cliente/servidor, TUXEDO es muy conocido como:";
 choices[68]= new Array();
 choices[68][0] = "Un monitor de proceso de transacciones";
 choices[68][1] = "Programa de sesi&oacute;n de IBM en los sistemas MVS";
 choices[68][2] = "Aplicaci&oacute;n para tranferencia de ficheros en sistemas Unix";
 choices[68][3] = "No existe la aplicaci&oacute;n TUXEDO";
 answers[68] = 0;
 units[68] = ['55'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2807. ";
 preguntaids[68] = 2807


//  Id pregunta: 2668 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[69]= new Array();
 choices[69][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[69][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[69][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[69][3] = "No hay diferencia; son la misma arquitectura";
 answers[69] = 0;
 units[69] = ['55'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2668. ";
 preguntaids[69] = 2668


//  Id pregunta: 5424 Año de creación de pregunta: 2007
 questions[70]= "71)  Qu&eacute; es AXIS";
 choices[70]= new Array();
 choices[70][0] = "Un servidor de aplicaciones";
 choices[70][1] = "Un lenguaje de programaci&oacute;n";
 choices[70][2] = "Una implementaci&oacute;n de SOAP para APACHE";
 choices[70][3] = "Un m&eacute;todo as&iacute;ncrono de comunicaci&oacute;n entre servidores.";
 answers[70] = 2;
 units[70] = ['55'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 5424. ";
 preguntaids[70] = 5424


//  Id pregunta: 3280 Año de creación de pregunta: 2003
 questions[71]= "72)  Se&ntilde;ale cu&aacute;l de las siguientes frases es incorrecta, cuando hablamos de una arquitectura cliente-servidor:";
 choices[71]= new Array();
 choices[71][0] = "El entorno en que se desenvuelve una arquitectura cliente-servidor es homog&eacute;neo y por tanto tiene la ventaja de no requerir interfaz para su comunicaci&oacute;n";
 choices[71][1] = "Se distinguen dos tipos de arquitectura cliente-servidor: modelo de 2 capas y modelo de 3 capas";
 choices[71][2] = "Se trata de una arquitectura escalable, es decir susceptible de ampliarse tanto verticalmente (con mayor n&uacute;mero de servidores) como horizontalmente (con mayor n&uacute;mero de clientes)";
 choices[71][3] = "El proceso clinte proporciona la interfaz del usuario y el proceso servidor los medios para gestionar los recursos compartidos";
 answers[71] = 0;
 units[71] = ['55'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3280. ";
 preguntaids[71] = 3280


//  Id pregunta: 2961 Año de creación de pregunta: 2002
 questions[72]= "73)  Las aplicaciones cliente/servidor suelen clasificarse en:";
 choices[72]= new Array();
 choices[72][0] = "Aplicaciones de presentaci&oacute;n, de negocio o de gesti&oacute;n de datos";
 choices[72][1] = "Aplicaciones distribuidas o centralizadas";
 choices[72][2] = "Aplicaciones middleware y OLTP";
 choices[72][3] = "Aplicaciones de dos niveles y aplicaciones de tres niveles";
 answers[72] = 3;
 units[72] = ['55'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2961. ";
 preguntaids[72] = 2961


//  Id pregunta: 6187 Año de creación de pregunta: 2003
 questions[73]= "74)  En el tercer nivel del modelo de arquitectura cliente/servidor, llamado proceso distribuido, las funciones de presentaci&oacute;n residen en:";
 choices[73]= new Array();
 choices[73][0] = "El cliente";
 choices[73][1] = "El servidor";
 choices[73][2] = "La red";
 choices[73][3] = "Se reparten entre cliente y el servidor";
 answers[73] = 0;
 units[73] = ['55'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 6187. Examen TIC A Castilla La Mancha 2007";
 preguntaids[73] = 6187


//  Id pregunta: 4816 Año de creación de pregunta: 2002
 questions[74]= "75)  En la tecnolog&iacute;a de web-services, una de las afirmaciones siguientes no es correcta:";
 choices[74]= new Array();
 choices[74][0] = "SOAP deriva de XML-RPC";
 choices[74][1] = "Se emplea WSDL (Web Service Definition Language) como lenguaje de descripci&oacute;n de web services por sus proveedores";
 choices[74][2] = "UDDI (Universal Description Discovery and Integration) permite la publicaci&oacute;n y localizaci&oacute;n de los servicios web";
 choices[74][3] = "WSSL (Web Service Specification Language) se usa como lenguaje de especificaci&oacute;n de los servicios web";
 answers[74] = 3;
 units[74] = ['55'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 4816. ";
 preguntaids[74] = 4816


