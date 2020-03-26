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
//  Id pregunta: 8159 Año de creación de pregunta: 2011
 questions[0]= "1)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[0]= new Array();
 choices[0][0] = "Al servidor DNS principal";
 choices[0][1] = "Al servidor de correo asociado al dominio";
 choices[0][2] = "Al servidor seguro asociado al dominio";
 choices[0][3] = "Ninguna de las anteriores es correcta";
 answers[0] = 1;
 units[0] = ['116'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8159. Analista Ayto. Madrid 2010";
 preguntaids[0] = 8159


//  Id pregunta: 9723 Año de creación de pregunta: 2014
 questions[1]= "2)  Si el c&oacute;digo de respuesta de un servidor SMTP, que cumple la RFC 821, es 501, podemos decir que:";
 choices[1]= new Array();
 choices[1][0] = "La operaci&oacute;n se ha realizado con &eacute;xito.";
 choices[1][1] = "Se ha producido un Error Temporal. Es posible que, volver a mandar el comando, con el mismo formato pasado un tiempo, produzca un resultado satisfactorio";
 choices[1][2] = "Se ha producido un Error, debido a que los parametros del comando enviado no tienen la sintaxis correcta.";
 choices[1][3] = "No podemos decir nada";
 answers[1] = 2;
 units[1] = ['116'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9723. http://tools.ietf.org/html/rfc821#page-35";
 preguntaids[1] = 9723


//  Id pregunta: 8916 Año de creación de pregunta: 2013
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n con el protocolo LDAP";
 choices[2]= new Array();
 choices[2][0] = "LDAP env&iacute;a los comandos y respuestas siguiendo la notaci&oacute;n ASN.1";
 choices[2][1] = "El desarrollo de la especificaci&oacute;n LDAP se realiza a trav&eacute;s del IETF";
 choices[2][2] = "La funci&oacute;n LAUTH permite autenticar al cliente frente al directorio";
 choices[2][3] = "La unidad b&aacute;sica de informaci&oacute;n almacenada en el directorio es la entrada (entry)";
 answers[2] = 2;
 units[2] = ['116'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8916. ";
 preguntaids[2] = 8916


//  Id pregunta: 9721 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cual es la RFC original del protocolo SMTP?";
 choices[3]= new Array();
 choices[3][0] = "821";
 choices[3][1] = "822";
 choices[3][2] = "823";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = 0;
 units[3] = ['116'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9721. ";
 preguntaids[3] = 9721


//  Id pregunta: 8911 Año de creación de pregunta: 2013
 questions[4]= "5)  En lo referente a la mensajer&iacute;a en Internet indique la afirmaci&oacute;n falsa:";
 choices[4]= new Array();
 choices[4][0] = "MIME se desarrolla en los RFCs 2045 a 2049";
 choices[4][1] = "Si un servidor que no soporta extensiones SMTP recibe un mensaje HELO, devuelve un error de sintaxis al emisor SMTP, quien deber&aacute; enviar en su lugar un mensaje de tipo EHLO";
 choices[4][2] = "El RFC 1870 permite a un receptor especificar el tama&ntilde;o m&aacute;ximo de mensaje que puede recibir";
 choices[4][3] = "El protocolo SMTP se apoya en el sistema de resoluci&oacute;n de nombres de dominio de Internet";
 answers[4] = 1;
 units[4] = ['116'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8911. ";
 preguntaids[4] = 8911


//  Id pregunta: 8913 Año de creación de pregunta: 2013
 questions[5]= "6)  En relaci&oacute;n al est&aacute;ndar X.400 indique la afirmaci&oacute;n verdadera";
 choices[5]= new Array();
 choices[5][0] = "Tiene que funcionar necesariamente sobre redes IP";
 choices[5][1] = "El Subsistema de transferencia de mensajes (MTS) contempla la definici&oacute;n de agentes de usuario (UA) que son los componentes l&oacute;gicos que interact&uacute;an con el usuario para el env&iacute;o y recepci&oacute;n de los mensajes electr&oacute;nicos";
 choices[5][2] = "Una MPDU puede ser de tres tipos: sondas, informes de notificaci&oacute;n o entrega y el mensaje en s&iacute;";
 choices[5][3] = "P2 es el protocolo definido para la comunicaci&oacute;n entre el MTA y el agente del usuario (UA) a trav&eacute;s del elemento MS o repositorio de mensajes";
 answers[5] = 2;
 units[5] = ['116'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8913. ";
 preguntaids[5] = 8913


//  Id pregunta: 9724 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Cual de los siguientes no es un protocolo de correo electr&oacute;nico?";
 choices[6]= new Array();
 choices[6][0] = "SMTP";
 choices[6][1] = "MIME";
 choices[6][2] = "POP2";
 choices[6][3] = "Todos lo son";
 answers[6] = 3;
 units[6] = ['116'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9724. POP2 es una versi&oacute;n obsoleta de POP, pero se pregunta por protocolos de correo. No por su actualidad o uso.";
 preguntaids[6] = 9724


//  Id pregunta: 8910 Año de creación de pregunta: 2013
 questions[7]= "8)  Respecto al direccionamiento de los mensajes en X.400 indique, de las siguientes afirmaciones, la falsa:";
 choices[7]= new Array();
 choices[7][0] = "El campo P hace referencia al dominio concreto al que pertenece el usuario dentro de la organizaci&oacute;n";
 choices[7][1] = "En el campo C de la direcci&oacute;n de correo se almacena el c&oacute;digo ISO para el nombre del pa&iacute;s al que pertenece una direcci&oacute;n de correo";
 choices[7][2] = "El campo CN indica el nombre com&uacute;n que puede, a su vez, dividirse en los subcampos S (apellido) y N (nombre)";
 choices[7][3] = "La omisi&oacute;n del campo ADMD indica el valor &quot;blank&quot;, por lo que no se trata de un campo obligatorio";
 answers[7] = 2;
 units[7] = ['116'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8910. ";
 preguntaids[7] = 8910


//  Id pregunta: 8912 Año de creación de pregunta: 2013
 questions[8]= "9)  Indique qu&eacute; mensaje utiliza el emisor SMTP para comprobar si el servidor acepta el uso de extensiones de servicio SMTP";
 choices[8]= new Array();
 choices[8][0] = "DATA";
 choices[8][1] = "EHLO";
 choices[8][2] = "HELO";
 choices[8][3] = "MAIL";
 answers[8] = 1;
 units[8] = ['116'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8912. ";
 preguntaids[8] = 8912


//  Id pregunta: 10369 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes es una herramienta utilizada para el cifrado de correos electr&oacute;nicos";
 choices[9]= new Array();
 choices[9][0] = "PGP";
 choices[9][1] = "S/MME";
 choices[9][2] = "Todos los anteriores";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = 2;
 units[9] = ['116'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10369. ";
 preguntaids[9] = 10369


//  Id pregunta: 9722 Año de creación de pregunta: 2014
 questions[10]= "11)  En la arquitectura X.400, &iquest;cual es el protocolo de comunicaci&oacute;n entre los Agentes de Usuario y el Repositorio de Mensajes?";
 choices[10]= new Array();
 choices[10][0] = "P2";
 choices[10][1] = "P7";
 choices[10][2] = "P3";
 choices[10][3] = "P1";
 answers[10] = 1;
 units[10] = ['116'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9722. http://www.x400.org/US/X400_Protocols.htm";
 preguntaids[10] = 9722


//  Id pregunta: 8915 Año de creación de pregunta: 2013
 questions[11]= "12)  Respecto al est&aacute;ndar de servicios de directorio X.500, se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[11]= new Array();
 choices[11][0] = "El DIB se divide en distintos trozos de informaci&oacute;n que se estructuran en una jerarqu&iacute;a en &aacute;rbol denominada DIT";
 choices[11][1] = "Cada parte del DIB se almacena en un servidor denominado DSA";
 choices[11][2] = "El intercambio de informaci&oacute;n entre dos DSA est&aacute; basado en los protocolos DSP y DOP";
 choices[11][3] = "El DSA se comunica con el DIB utilizando el protocolo DAP";
 answers[11] = 3;
 units[11] = ['116'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8915. ";
 preguntaids[11] = 8915


//  Id pregunta: 10370 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Qu&eacute; organismo es el responsable del est&aacute;ndar X.500?";
 choices[12]= new Array();
 choices[12][0] = "ITU-T";
 choices[12][1] = "ISO";
 choices[12][2] = "IETF";
 choices[12][3] = "IEEE";
 answers[12] = 2;
 units[12] = ['116'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10370. ITU-T  defini&oacute; el est&aacute;ndar X.500";
 preguntaids[12] = 10370


//  Id pregunta: 8914 Año de creación de pregunta: 2013
 questions[13]= "14)  Indique la afirmaci&oacute;n verdadera en relaci&oacute;n con el protocolo PEM de seguridad en el correo electr&oacute;nico";
 choices[13]= new Array();
 choices[13][0] = "PEM es un protocolo de seguridad extremo a extremo entre Agentes de Usuario (UA)";
 choices[13][1] = "PEM proporciona autenticaci&oacute;n en origen y confidencialidad, pero no proporciona integridad";
 choices[13][2] = "Sus siglas hacen referencia a &quot;Private Extended Mail&quot;";
 choices[13][3] = "Todas las anteriores son verdaderas";
 answers[13] = 0;
 units[13] = ['116'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8914. ";
 preguntaids[13] = 8914


