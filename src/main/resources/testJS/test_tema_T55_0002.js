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
//  Id pregunta: 8677 Año de creación de pregunta: 2013
 questions[0]= "1)  &ldquo;Un sistema distribuido es una colecci&oacute;n de computadores independientes que aparece ante los usuarios del sistema como una &uacute;nica computadora&rdquo;, es una definici&oacute;n de:";
 choices[0]= new Array();
 choices[0][0] = "Tanenbaum";
 choices[0][1] = "Sloman &amp; Kramer.";
 choices[0][2] = "Shanon";
 choices[0][3] = "No se corresponde a la definici&oacute;n de un sistema distribuido.";
 answers[0] = 0;
 units[0] = ['55'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8677. ";
 preguntaids[0] = 8677


//  Id pregunta: 8676 Año de creación de pregunta: 2013
 questions[1]= "2)  En la primitiva send-receive, &iquest;qu&eacute; caracter&iacute;sticas tienen send y receive?";
 choices[1]= new Array();
 choices[1][0] = "Send es bloqueante y Receive es no bloqueante.";
 choices[1][1] = "Ambas son bloqueantes.";
 choices[1][2] = "Ambas son no bloqueantes.";
 choices[1][3] = "Send es no bloqueante y Receive es bloqueante.";
 answers[1] = 3;
 units[1] = ['55'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8676. ";
 preguntaids[1] = 8676


//  Id pregunta: 8674 Año de creación de pregunta: 2013
 questions[2]= "3)  &iquest;Cu&aacute;les son los modelos m&aacute;s habituales de Sistemas Distribuidos?";
 choices[2]= new Array();
 choices[2][0] = "Cliente/Servidor";
 choices[2][1] = "Proxy/Cach&eacute;";
 choices[2][2] = "Modelo Peer to Peer";
 choices[2][3] = "Los anteriores y otros modelos como c&oacute;digo M&oacute;vil, Agente M&oacute;vil y Clientes ligeros";
 answers[2] = 3;
 units[2] = ['55'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8674. ";
 preguntaids[2] = 8674


//  Id pregunta: 9677 Año de creación de pregunta: 2014
 questions[3]= "4)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[3]= new Array();
 choices[3][0] = "XOP XML-binary Optimized Protocol";
 choices[3][1] = "XOP XML-binary Optimized Packaging";
 choices[3][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[3][3] = "REST Represantional State Transfer";
 answers[3] = 2;
 units[3] = ['55'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9677. ";
 preguntaids[3] = 9677


//  Id pregunta: 7968 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes sentencias JCL (Job Control language) marca el final de un trabajo?";
 choices[4]= new Array();
 choices[4][0] = "//";
 choices[4][1] = "// JOB";
 choices[4][2] = "//*";
 choices[4][3] = "// DD";
 answers[4] = 0;
 units[4] = ['55'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7968. Examen TIC A2 2010";
 preguntaids[4] = 7968


//  Id pregunta: 9851 Año de creación de pregunta: 2015
 questions[5]= "6)  Se&ntilde;ale la opci&oacute;n correcta:";
 choices[5]= new Array();
 choices[5][0] = "RMI es un m&eacute;todo de invocaci&oacute;n remota para Java exclusivamente.";
 choices[5][1] = "CORBA o RMI pueden utilizarse para la comunicaci&oacute;n entre aplicaciones distribuidas de tecnolog&iacute;as distintas.";
 choices[5][2] = "Un Sistema de Comunicaci&oacute;n entre Procesos (IPC) es una capa de software que permite realizar llamadas a m&eacute;todos situados en m&aacute;quinas remotas.";
 choices[5][3] = "DCOM es una tecnolog&iacute;a de Sun Microsystems.";
 answers[5] = 0;
 units[5] = ['55'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9851. ";
 preguntaids[5] = 9851


//  Id pregunta: 6856 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Qu&eacute; se entiende por SOI (Infraestructura Orientada a Servicios)?";
 choices[6]= new Array();
 choices[6][0] = "Una colecci&oacute;n de recursos de hardware y software que soportan la implantaci&oacute;n y el desarrollo de la arquitectura SOA.";
 choices[6][1] = "Se trata de una colecci&oacute;n de recursos de hardware y software que suponen una alternativa a SOA.";
 choices[6][2] = "Se trata de un concepto para el que &quot;The Open Group&quot; ha abierto un proyecto dentro del grupo de trabajo de SOA.";
 choices[6][3] = "Tanto A y C son correctas.";
 answers[6] = 3;
 units[6] = ['55'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 6856. ";
 preguntaids[6] = 6856


//  Id pregunta: 7890 Año de creación de pregunta: 2011
 questions[7]= "8)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[7]= new Array();
 choices[7][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[7][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[7][2] = "Cliente - IDL Stub - Servidor.";
 choices[7][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[7] = 0;
 units[7] = ['55'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7890. Examen TIC A1 2010";
 preguntaids[7] = 7890


//  Id pregunta: 8414 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Qu&eacute; significan las siglas SOAP?";
 choices[8]= new Array();
 choices[8][0] = "Simple Object Access Protocol, o protocolo simple de acceso a objetos";
 choices[8][1] = "Single Object Access Protocol, o protocolo de acceso a objetos individuales";
 choices[8][2] = "Single Object Authorization Protocolo, o protocolo de autorizaci&oacute;n de objetos individuales";
 choices[8][3] = "Sevice Oriented Access Protocol, o protocolo de acceso orientado a servicios";
 answers[8] = 0;
 units[8] = ['55'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8414. Operador Ayto. Madrid 2010";
 preguntaids[8] = 8414


//  Id pregunta: 10866 Año de creación de pregunta: 2015
 questions[9]= "10)  UDDI se corresponde con las siglas:";
 choices[9]= new Array();
 choices[9][0] = "Universal Description, Discovery and Integration";
 choices[9][1] = "Uniform Description, Discovery and Integration";
 choices[9][2] = "Universal Description, Discovery and Information";
 choices[9][3] = "Unic Description, Discovery and Information";
 answers[9] = 0;
 units[9] = ['55'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10866. ";
 preguntaids[9] = 10866


//  Id pregunta: 9815 Año de creación de pregunta: 2015
 questions[10]= "11)  Son principios arquitect&oacute;nicos de dise&ntilde;o de SOA:";
 choices[10]= new Array();
 choices[10][0] = "Encapsulaci&oacute;n, autonom&iacute;a y m&aacute;xima dependencia entre servicios.";
 choices[10][1] = "Optimizaci&oacute;n, abstracci&oacute;n y fiabilidad.";
 choices[10][2] = "Composici&oacute;n, descubrimiento y reutilizaci&oacute;n.";
 choices[10][3] = "Fuerte acoplamiento, contrato y madurez.";
 answers[10] = 2;
 units[10] = ['55'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9815. ";
 preguntaids[10] = 9815


//  Id pregunta: 10053 Año de creación de pregunta: 2015
 questions[11]= "12)  Se&ntilde;ale la respuesta INCORRECTA respecto a la tecnolog&iacute;a de Servicios Web REST:";
 choices[11]= new Array();
 choices[11][0] = "JAX-RS es una API Java que proporciona soporte en la creaci&oacute;n de servicios web de acuerdo con REST.";
 choices[11][1] = "Jersey es una implementaci&oacute;n de referencia de servicios web REST.";
 choices[11][2] = "REST publica recursos que son accesibles a trav&eacute;s de m&eacute;todos http, por ejemplo POST y GET.";
 choices[11][3] = "Los recursos REST permiten s&oacute;lo 3 operaciones: CREATE, UPDATE y DELETE.";
 answers[11] = 3;
 units[11] = ['55'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10053. Examen TIC A2 2014";
 preguntaids[11] = 10053


//  Id pregunta: 9680 Año de creación de pregunta: 2014
 questions[12]= "13)  Respecto a REST, indique qu&eacute; afirmaci&oacute;n es falsa:";
 choices[12]= new Array();
 choices[12][0] = "Permite una generalizaci&oacute;n de las interfaces entre recursos.";
 choices[12][1] = "Facilita el desarrollo de los clientes de los servicios.";
 choices[12][2] = "Su uso est&aacute; indicado para aplicaciones en las que la gesti&oacute;n del estado es compleja.";
 choices[12][3] = "La funcionalidad de las aplicaciones se representa mediante recursos.";
 answers[12] = 2;
 units[12] = ['55'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9680. ";
 preguntaids[12] = 9680


//  Id pregunta: 9679 Año de creación de pregunta: 2014
 questions[13]= "14)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[13]= new Array();
 choices[13][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[13][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[13][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[13][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[13] = 0;
 units[13] = ['55'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9679. ";
 preguntaids[13] = 9679


//  Id pregunta: 8518 Año de creación de pregunta: 2011
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[14]= new Array();
 choices[14][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[14][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[14][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[14][3] = "Todas son incorrectas";
 answers[14] = 2;
 units[14] = ['55'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8518. ";
 preguntaids[14] = 8518


//  Id pregunta: 8673 Año de creación de pregunta: 2013
 questions[15]= "16)  Un conjunto de procesadores interconectados por redes que ocultan dicha caracter&iacute;stica mostrando una visi&oacute;n al usuario de &ldquo;uniprocesador virtual&rdquo; es:";
 choices[15]= new Array();
 choices[15][0] = "S. O. Distribuido";
 choices[15][1] = "S.O. Cooperativos o basados en Middlewares";
 choices[15][2] = "S. O. En Red";
 choices[15][3] = "S.O. Centralizados";
 answers[15] = 0;
 units[15] = ['55'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8673. ";
 preguntaids[15] = 8673


//  Id pregunta: 10799 Año de creación de pregunta: 2015
 questions[16]= "17)  BPEL est&aacute; estandarizado por:";
 choices[16]= new Array();
 choices[16][0] = "BMPI";
 choices[16][1] = "OASIS";
 choices[16][2] = "WfMC";
 choices[16][3] = "W3C";
 answers[16] = 1;
 units[16] = ['55'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10799. ";
 preguntaids[16] = 10799


//  Id pregunta: 9650 Año de creación de pregunta: 2014
 questions[17]= "18)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[17]= new Array();
 choices[17][0] = "Se hace incompatible el uso de servicios web.";
 choices[17][1] = "Los servicios encapsulan sus funcionalidades.";
 choices[17][2] = "Los servicios mantienen un fuerte acoplamiento.";
 choices[17][3] = "Los servicios dependen fuertemente de la plataforma subyacente.";
 answers[17] = 1;
 units[17] = ['55'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9650. Examen TIC A1 2013";
 preguntaids[17] = 9650


//  Id pregunta: 8173 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP?";
 choices[18]= new Array();
 choices[18][0] = "WSDL";
 choices[18][1] = "UDDI";
 choices[18][2] = "XML";
 choices[18][3] = "REST";
 answers[18] = 0;
 units[18] = ['55'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8173. Examen TIC A2 2010 interna";
 preguntaids[18] = 8173


//  Id pregunta: 8470 Año de creación de pregunta: 2011
 questions[19]= "20)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[19]= new Array();
 choices[19][0] = "Organization for the Advancement of Structured Information Services";
 choices[19][1] = "Organization for the Advancement of Service Integration Standards";
 choices[19][2] = "Organization for the Advancement of Structured Information Standards";
 choices[19][3] = "Organization for the Application of Structured Information Standards";
 answers[19] = 2;
 units[19] = ['55'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8470. ";
 preguntaids[19] = 8470


//  Id pregunta: 8059 Año de creación de pregunta: 2011
 questions[20]= "21)  Dentro de las arquitecturas orientadas a servicios, &iquest;cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que es un ESB (Enterprise Service Bus)?";
 choices[20]= new Array();
 choices[20][0] = "Es el encargado de definir y verificar el cumplimiento de los acuerdos de nivel de servicio";
 choices[20][1] = "Es una infraestructura y un sistema de eventos que permiten conectar cualquier recurso de tecnolog&iacute;as de la informaci&oacute;n sin importar la tecnolog&iacute;a que utiliza el recurso";
 choices[20][2] = "Es el repositorio de datos donde est&aacute; almacenada la informaci&oacute;n que quiere ser compartida a trav&eacute;s de los web services";
 choices[20][3] = "Es el registro y repositorio de los web services";
 answers[20] = 1;
 units[20] = ['55'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8059. Examen TIC A2 2010";
 preguntaids[20] = 8059


//  Id pregunta: 8091 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Cu&aacute;l de estos NO es un est&aacute;ndar del W3C para Web Services?:";
 choices[21]= new Array();
 choices[21][0] = "UDDI";
 choices[21][1] = "SOAP";
 choices[21][2] = "WSDL";
 choices[21][3] = "XML";
 answers[21] = 0;
 units[21] = ['55'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8091. Analista Ayto. Madrid 2010";
 preguntaids[21] = 8091


//  Id pregunta: 10327 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguiente no es un organismo de estandarizaci&oacute;n de arquitecturas SOA?";
 choices[22]= new Array();
 choices[22][0] = "Business Process Management Initiative (BPMI)";
 choices[22][1] = "Object Management Group (OMG)";
 choices[22][2] = "OASIS";
 choices[22][3] = "Microsoft-IBM Workflow Management Coallition";
 answers[22] = 3;
 units[22] = ['55'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10327. ";
 preguntaids[22] = 10327


//  Id pregunta: 9095 Año de creación de pregunta: 2014
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[23]= new Array();
 choices[23][0] = "CORBA es un tipo de middleware.";
 choices[23][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[23][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[23][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[23] = 0;
 units[23] = ['55'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9095. Examen TIC-A1 2013";
 preguntaids[23] = 9095


//  Id pregunta: 7791 Año de creación de pregunta: 2010
 questions[24]= "25)  WSDL son las siglas de:";
 choices[24]= new Array();
 choices[24][0] = "Web Services Description Language.";
 choices[24][1] = "Web Services Data Language.";
 choices[24][2] = "Web SOAP Definition Language.";
 choices[24][3] = "Web Services Distributed Language.";
 answers[24] = 0;
 units[24] = ['55'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7791. ";
 preguntaids[24] = 7791


//  Id pregunta: 9522 Año de creación de pregunta: 2014
 questions[25]= "26)  Podemos considerar a SOAP como:";
 choices[25]= new Array();
 choices[25][0] = "Un protocolo XML para ser usado con tecnolog&iacute;a RMI";
 choices[25][1] = "Una especificaci&oacute;n que describe las normas en que se envian y reciben comunicaciones basadas en XML";
 choices[25][2] = "Sustituye al protocolo RPC en sistemas distribuidos que usan CORBA";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = 1;
 units[25] = ['55'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9522. ";
 preguntaids[25] = 9522


//  Id pregunta: 10538 Año de creación de pregunta: 2015
 questions[26]= "27)  De los perfiles creados por WS-I indique cu&aacute;l no existe";
 choices[26]= new Array();
 choices[26][0] = "WS-I Basic security profile";
 choices[26][1] = "WS-I Reliable secure profile";
 choices[26][2] = "WS-I Extended Reliable profile";
 choices[26][3] = "WS-I Basic profile";
 answers[26] = 2;
 units[26] = ['55'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 10538. ";
 preguntaids[26] = 10538


//  Id pregunta: 6878 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;les de los siguientes son los perfiles WS-I?:";
 choices[27]= new Array();
 choices[27][0] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile, WS-I Basic Security Profile (BSP), WS-I Reliable Secure Profile.";
 choices[27][1] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile (BIP) y WS-I Reliable Secure Profile.";
 choices[27][2] = "WS-I Basic Infrastructure Profile (BIP), WS-I Basic Security Profile (BSP) y  WS-I Reliable Secure Profile.";
 choices[27][3] = "WS-I Basic Profile, WS-I Basic Security Profile (BSP) y WS-I Reliable Secure Profile.";
 answers[27] = 3;
 units[27] = ['55'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 6878. ";
 preguntaids[27] = 6878


//  Id pregunta: 8675 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;C&oacute;mo es por lo general el paso de mensajes mediante la primitiva send-receive?";
 choices[28]= new Array();
 choices[28][0] = "S&iacute;ncrona";
 choices[28][1] = "As&iacute;ncrona";
 choices[28][2] = "Se realiza una llamada desde un cliente a una funci&oacute;n o procedimiento de un servidor.";
 choices[28][3] = "Se instancia un objeto del servidor.";
 answers[28] = 1;
 units[28] = ['55'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8675. ";
 preguntaids[28] = 8675


//  Id pregunta: 7997 Año de creación de pregunta: 2011
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "SOAP envelope.";
 choices[29][1] = "SOAP binding framework";
 choices[29][2] = "SOAP encoding rules.";
 choices[29][3] = "SOAP  RPC representation.";
 answers[29] = 2;
 units[29] = ['55'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7997. Examen TIC A2 2010";
 preguntaids[29] = 7997


//  Id pregunta: 10226 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Qu&eacute; quiere decir que una operaci&oacute;n es idempotente?";
 choices[30]= new Array();
 choices[30][0] = "Que tiene prioridad sobre cualquier tipo de operaci&oacute;n";
 choices[30][1] = "Que cualquier operaci&oacute;n tiene m&aacute;s prioridad que ella";
 choices[30][2] = "Que el resultado de la misma var&iacute;a cada vez que se ejecuta";
 choices[30][3] = "Que el resultado de la misma no var&iacute;a con cada vez que se ejecuta";
 answers[30] = 3;
 units[30] = ['55'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10226. ";
 preguntaids[30] = 10226


//  Id pregunta: 8160 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos se corresponde con la tecnolog&iacute;a que proporciona una infraestructura para la definici&oacute;n de servicios que pueden ser consumidos de manera uniforme, sin conocer los detalles e los sistemas que los proporcionan?";
 choices[31]= new Array();
 choices[31][0] = "EAI (Enterprise Application Integration)";
 choices[31][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[31][2] = "ESB (Enterprise Service Bus)";
 choices[31][3] = "ORB (Object Request Broker)";
 answers[31] = 2;
 units[31] = ['55'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8160. Analista Ayto. Madrid 2010";
 preguntaids[31] = 8160


//  Id pregunta: 8709 Año de creación de pregunta: 2013
 questions[32]= "33)  Las siglas SSI (Single System Image) corresponden a:";
 choices[32]= new Array();
 choices[32][0] = "Una interfaz &uacute;nica de acceso al sistema para un cluster de servidores.";
 choices[32][1] = "Una imagen del sistema operativo de un ordenador que se utiliza para la creaci&oacute;n de clones.";
 choices[32][2] = "Una copia completa de un ordenador personal Windows que sirve para restaurar el sistema.";
 choices[32][3] = "Una representaci&oacute;n de la memoria del sistema que se utiliza en .NET.";
 answers[32] = 0;
 units[32] = ['49', '55'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8709. Examen TICA2-2011";
 preguntaids[32] = 8709


//  Id pregunta: 6857 Año de creación de pregunta: 2010
 questions[33]= "34)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[33]= new Array();
 choices[33][0] = "XML, SOAP y WSDL";
 choices[33][1] = "XML, SOAP y UDDI";
 choices[33][2] = "XML, WSDL y UDDI";
 choices[33][3] = "SOAP, WSDL y UDDI";
 answers[33] = 0;
 units[33] = ['55', '74'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 6857. ";
 preguntaids[33] = 6857


//  Id pregunta: 6855 Año de creación de pregunta: 2010
 questions[34]= "35)  Respecto a SOA y los Servicios Web:";
 choices[34]= new Array();
 choices[34][0] = "Son el mismo concepto.";
 choices[34][1] = "Los Servicios Web son una de las tecnolog&iacute;as destacadas para llevar a la pr&aacute;ctica el paradigma conceptual SOA, pero no son la &uacute;nica.";
 choices[34][2] = "Los Servicios Web son la tecnolog&iacute;a para llevar a la pr&aacute;ctica el paradigma conceptual SOA aunque la arquitectura de desarrollo de los propios Servicios Web puede realizarse de diferentes formas.";
 choices[34][3] = "No existe ninguna relaci&oacute;n entre SOA y los Servicios Web.";
 answers[34] = 1;
 units[34] = ['55'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 6855. ";
 preguntaids[34] = 6855


//  Id pregunta: 10003 Año de creación de pregunta: 2015
 questions[35]= "36)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[35]= new Array();
 choices[35][0] = "WS-Security permite crear servicios web seguros.";
 choices[35][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[35][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[35][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[35] = 3;
 units[35] = ['55'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10003. Examen TIC A2 2014";
 preguntaids[35] = 10003


//  Id pregunta: 9094 Año de creación de pregunta: 2014
 questions[36]= "37)  En referencia a la tecnolog&iacute;a CORBA (Common Object Request Broker Architecture) es INCORRECTO que";
 choices[36]= new Array();
 choices[36][0] = "El protocolo de comunicaciones en el que se basa se denomina GIOP (General InterORB Protocol)";
 choices[36][1] = "El lenguaje para especificaciones de interfaces se denomina IPOL (Independent Platform Object Language).";
 choices[36][2] = "Se basa en un modelo de arquitectura distribuida para entornos heterog&eacute;neos";
 choices[36][3] = "Es una propuesta del Object Management Group.";
 answers[36] = 1;
 units[36] = ['55'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9094. Examen TIC-A1 2013";
 preguntaids[36] = 9094


//  Id pregunta: 9681 Año de creación de pregunta: 2014
 questions[37]= "38)  Respecto a REST, indique la respuesta correcta:";
 choices[37]= new Array();
 choices[37][0] = "Los m&eacute;todos HEAD, POST, PUT y DELETE definen la interfaz de los recursos.";
 choices[37][1] = "Al igual que SOAP est&aacute; basado en verbos u operaciones para definir la funcionalidad de las aplicaciones.";
 choices[37][2] = "Los servicios web tipo REST permiten el uso de WS-Security.";
 choices[37][3] = "Permiten mayor escalabilidad al no requerir mantenimiento del estado.";
 answers[37] = 3;
 units[37] = ['55'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9681. ";
 preguntaids[37] = 9681


//  Id pregunta: 9678 Año de creación de pregunta: 2014
 questions[38]= "39)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[38]= new Array();
 choices[38][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[38][1] = "Es una alternativa a XML en AJAX.";
 choices[38][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[38][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[38] = 2;
 units[38] = ['55'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9678. ";
 preguntaids[38] = 9678


//  Id pregunta: 7715 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;En cu&aacute;l de los siguientes modelos para el desarrollo de aplicaciones distribuidas o en red seg&uacute;n el modelo cliente-servidor, est&aacute; encuadrado COM+ (Common Object Model Plus)?";
 choices[39]= new Array();
 choices[39][0] = "Modelos basados en llamadas a funciones (sockets).";
 choices[39][1] = "Modelos basados en llamadas a procedimientos remotos (RPC).";
 choices[39][2] = "Modelos basados en llamadas a objetos distribuidos.";
 choices[39][3] = "Modelos basados en agentes m&oacute;viles.";
 answers[39] = 2;
 units[39] = ['55'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7715. Map 2007";
 preguntaids[39] = 7715


