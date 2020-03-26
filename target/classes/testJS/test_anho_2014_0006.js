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
//  Id pregunta: 9433 Año de creación de pregunta: 2014
 questions[0]= "1)  En el encaminamiento por vector-distancia cada router:";
 choices[0]= new Array();
 choices[0][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[0][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[0][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[0][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[0] = 0;
 units[0] = ['112'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9433. ";
 preguntaids[0] = 9433


//  Id pregunta: 9384 Año de creación de pregunta: 2014
 questions[1]= "2)  Los fuegos de clase D son los que implican:";
 choices[1]= new Array();
 choices[1][0] = "Combustibles s&oacute;lidos como papel, cart&oacute;n, madera, pl&aacute;sticos, etc.";
 choices[1][1] = "Metales y aleaciones: magnesio, sodio, etc.";
 choices[1][2] = "Combustibles l&iacute;quidos, por ejemplo: aceite, derivados del petr&oacute;leo, etc.";
 choices[1][3] = "Gases: butano, metano, propano, etc.";
 answers[1] = 1;
 units[1] = ['50'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9384. Examen TIC A2  2013";
 preguntaids[1] = 9384


//  Id pregunta: 9376 Año de creación de pregunta: 2014
 questions[2]= "3)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[2]= new Array();
 choices[2][0] = "Contiene la clave privada.";
 choices[2][1] = "Cumple la sintaxis PKCS #21.";
 choices[2][2] = "Est&aacute; codificado en un formato no binario.";
 choices[2][3] = "No se puede convertir a formato .PEM.";
 answers[2] = 0;
 units[2] = ['76'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9376. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[2] = 9376


//  Id pregunta: 9379 Año de creación de pregunta: 2014
 questions[3]= "4)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[3]= new Array();
 choices[3][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[3][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[3][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[3][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[3] = 3;
 units[3] = ['110'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9379. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[3] = 9379


//  Id pregunta: 9425 Año de creación de pregunta: 2014
 questions[4]= "5)  El tama&ntilde;o de trama m&iacute;nimo en Ethernet es:";
 choices[4]= new Array();
 choices[4][0] = "48 bytes";
 choices[4][1] = "24 bytes";
 choices[4][2] = "128 bytes";
 choices[4][3] = "64 bytes";
 answers[4] = 3;
 units[4] = ['112'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9425. ";
 preguntaids[4] = 9425


//  Id pregunta: 9390 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[5]= new Array();
 choices[5][0] = "Web 3.0.";
 choices[5][1] = "Labelling.";
 choices[5][2] = "Taxonom&iacute;a.";
 choices[5][3] = "Folcsonom&iacute;a.";
 answers[5] = 3;
 units[5] = ['125'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9390. Examen TIC A2  2013";
 preguntaids[5] = 9390


//  Id pregunta: 9401 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[6]= new Array();
 choices[6][0] = "ATSC";
 choices[6][1] = "ISDB-T";
 choices[6][2] = "DVB-T";
 choices[6][3] = "EDTVB";
 answers[6] = 2;
 units[6] = ['115'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9401. Examen TIC A2  2013";
 preguntaids[6] = 9401


//  Id pregunta: 9374 Año de creación de pregunta: 2014
 questions[7]= "8)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[7]= new Array();
 choices[7][0] = "Contiene la clave privada.";
 choices[7][1] = "Cumple la sintaxis PKCS #21.";
 choices[7][2] = "Est&aacute; codificado en un formato no binario.";
 choices[7][3] = "No se puede convertir a formato .PEM.";
 answers[7] = 0;
 units[7] = ['76'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9374. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[7] = 9374


//  Id pregunta: 9407 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado para eliminar el problema de la indefinici&oacute;n de requisitos?";
 choices[8]= new Array();
 choices[8][0] = "R&aacute;pido";
 choices[8][1] = "Evolutivo";
 choices[8][2] = "Incremental";
 choices[8][3] = "R&aacute;pido o evolutivo, nunca el incremental";
 answers[8] = 0;
 units[8] = ['90'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 9407. ";
 preguntaids[8] = 9407


//  Id pregunta: 9413 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cu&aacute;l es el orden cronol&oacute;gico m&aacute;s acertado?";
 choices[9]= new Array();
 choices[9][0] = "BPM, SOA, EAI, ESB";
 choices[9][1] = "EAI, BPM, SOA, ESB";
 choices[9][2] = "EAI, SOA, BPM, ESB";
 choices[9][3] = "BPM, EAI, SOA, ESB";
 answers[9] = 1;
 units[9] = ['86'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 9413. ";
 preguntaids[9] = 9413


//  Id pregunta: 9397 Año de creación de pregunta: 2014
 questions[10]= "11)  Se&ntilde;ale cuales de las siguiente afirmaciones NO es una caracter&iacute;stica del protocolo EAP-TTLS:";
 choices[10]= new Array();
 choices[10][0] = "En la creaci&oacute;n del t&uacute;nel TLS el servidor se autentica mediante certificado.";
 choices[10][1] = "El cliente puede usar un m&eacute;todo de autenticaci&oacute;n distinto a EAP.";
 choices[10][2] = "Est&aacute; soportado de forma nativa en sistemas operativos Windows 7.";
 choices[10][3] = "Los mensajes de autenticaci&oacute;n del cliente son enviados cifrados al servidor.";
 answers[10] = 2;
 units[10] = ['119'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9397. Examen TIC A2  2013";
 preguntaids[10] = 9397


//  Id pregunta: 9410 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cu&aacute;l NO es un producto de la metodolog&iacute;a SCRUM?";
 choices[11]= new Array();
 choices[11][0] = "Product backlog";
 choices[11][1] = "Sprint";
 choices[11][2] = "Burn down chart";
 choices[11][3] = "Sprint backlog";
 answers[11] = 1;
 units[11] = ['84'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 9410. ";
 preguntaids[11] = 9410


//  Id pregunta: 9424 Año de creación de pregunta: 2014
 questions[12]= "13)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[12]= new Array();
 choices[12][0] = "IEEE 802.1D";
 choices[12][1] = "IEEE 802.1P";
 choices[12][2] = "IEEE 802.1Q";
 choices[12][3] = "IEEE 802.2";
 answers[12] = 2;
 units[12] = ['112'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9424. ";
 preguntaids[12] = 9424


//  Id pregunta: 9403 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Cu&aacute;l NO es un proceso principal de acuerdo a la ISO 12207";
 choices[13]= new Array();
 choices[13][0] = "Adquisici&oacute;n";
 choices[13][1] = "Desarrollo";
 choices[13][2] = "Suministro";
 choices[13][3] = "Gesti&oacute;n";
 answers[13] = 3;
 units[13] = ['82'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 9403. Procesos principales: Adquisici&oacute;n, Suministro, Desarrollo, Operaci&oacute;n, Mantenimiento";
 preguntaids[13] = 9403


//  Id pregunta: 9378 Año de creación de pregunta: 2014
 questions[14]= "15)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[14]= new Array();
 choices[14][0] = "32";
 choices[14][1] = "24";
 choices[14][2] = "20";
 choices[14][3] = "16";
 answers[14] = 2;
 units[14] = ['107'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9378. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[14] = 9378


//  Id pregunta: 9400 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[15]= new Array();
 choices[15][0] = "100 a 224 MHz";
 choices[15][1] = "225 a 356 MHz";
 choices[15][2] = "470 a 862 MHz";
 choices[15][3] = "470 a 758 MHz";
 answers[15] = 3;
 units[15] = ['115'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9400. Examen TIC A2  2013";
 preguntaids[15] = 9400


//  Id pregunta: 9389 Año de creación de pregunta: 2014
 questions[16]= "17)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[16]= new Array();
 choices[16][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[16][1] = "Europa y Norte de &Aacute;frica.";
 choices[16][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[16][3] = "Europa, Oriente Medio y Asia Central.";
 answers[16] = 3;
 units[16] = ['103'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9389. Examen TIC A2  2013";
 preguntaids[16] = 9389


//  Id pregunta: 9399 Año de creación de pregunta: 2014
 questions[17]= "18)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[17]= new Array();
 choices[17][0] = "RDSI";
 choices[17][1] = "Bluetooth";
 choices[17][2] = "DECT";
 choices[17][3] = "Wimax";
 answers[17] = 1;
 units[17] = ['107'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9399. Examen TIC A2  2013";
 preguntaids[17] = 9399


//  Id pregunta: 9438 Año de creación de pregunta: 2014
 questions[18]= "19)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[18]= new Array();
 choices[18][0] = "GEANT";
 choices[18][1] = "IRIS";
 choices[18][2] = "TESTA";
 choices[18][3] = "SARA";
 answers[18] = 1;
 units[18] = ['114'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9438. ";
 preguntaids[18] = 9438


//  Id pregunta: 9426 Año de creación de pregunta: 2014
 questions[19]= "20)  MTU es:";
 choices[19]= new Array();
 choices[19][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[19][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[19][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[19][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[19] = 0;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9426. MTU-Maximum Transfer Unit";
 preguntaids[19] = 9426


//  Id pregunta: 9430 Año de creación de pregunta: 2014
 questions[20]= "21)  Seleccionar la correcta:";
 choices[20]= new Array();
 choices[20][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[20][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[20][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[20][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[20] = 2;
 units[20] = ['112'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9430. ";
 preguntaids[20] = 9430


//  Id pregunta: 9405 Año de creación de pregunta: 2014
 questions[21]= "22)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo de soporte?";
 choices[21]= new Array();
 choices[21][0] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[21][1] = "Gesti&oacute;n";
 choices[21][2] = "Entorno de desarrollo";
 choices[21][3] = "Pruebas";
 answers[21] = 3;
 units[21] = ['82'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 9405. ";
 preguntaids[21] = 9405


//  Id pregunta: 9406 Año de creación de pregunta: 2014
 questions[22]= "23)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado si se conocen bien todos los requisitos de partida?";
 choices[22]= new Array();
 choices[22][0] = "R&aacute;pido";
 choices[22][1] = "Evolutivo";
 choices[22][2] = "Incremental";
 choices[22][3] = "Cualquiera de los anteriores";
 answers[22] = 2;
 units[22] = ['90'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 9406. ";
 preguntaids[22] = 9406


//  Id pregunta: 9436 Año de creación de pregunta: 2014
 questions[23]= "24)  Un acceso b&aacute;sico RDSI tiene:";
 choices[23]= new Array();
 choices[23][0] = "30 canales B de 64 kbps y 1 canal D de 64 kbps";
 choices[23][1] = "2 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[23][2] = "30 canales B de 16 kbps y 1 canal D de 16 kbps";
 choices[23][3] = "2 canales B de 16 kbps y 1 canal D de 16 kbps";
 answers[23] = 0;
 units[23] = ['114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9436. ";
 preguntaids[23] = 9436


//  Id pregunta: 9408 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil se basa en principios como &ldquo;decidir lo m&aacute;s tarde posible&rdquo; y &ldquo;reaccionar tan r&aacute;pido como sea posible?";
 choices[24]= new Array();
 choices[24][0] = "Feature Driven Development";
 choices[24][1] = "Lean Software Development";
 choices[24][2] = "Adaptive Software Development";
 choices[24][3] = "Kanban";
 answers[24] = 1;
 units[24] = ['84'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 9408. Principios LSD: (1) Eliminar desperdicios; (2)  Amplificar el aprendizaje; (3) Decidir lo m&aacute;s tarde posible; (4) Entrega lo m&aacute;s r&aacute;pido posible; (5) Capacitar, potenciar, al equipo; (6) Construir con integridad; (7) Ver el todo";
 preguntaids[24] = 9408


//  Id pregunta: 9434 Año de creación de pregunta: 2014
 questions[25]= "26)  En el encaminamiento por estado de los enlaces cada router:";
 choices[25]= new Array();
 choices[25][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[25][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[25][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[25][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[25] = 3;
 units[25] = ['112'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9434. ";
 preguntaids[25] = 9434


//  Id pregunta: 9414 Año de creación de pregunta: 2014
 questions[26]= "27)  De acuerdo a las actividades de M&eacute;trica v.3, se&ntilde;ale la INCORRECTA:";
 choices[26]= new Array();
 choices[26][0] = "La actividad PSI 4 es de Idenficaci&oacute;n de Requisitos";
 choices[26][1] = "La actividad EVS 3 es de Definici&oacute;n de Requisitos";
 choices[26][2] = "La actividad ASI 2 es de Especificaci&oacute;n de Requisitos";
 choices[26][3] = "La actividad DSI 11 es de Establecimineto de Requisitos de Implantaci&oacute;n";
 answers[26] = 2;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 9414. ";
 preguntaids[26] = 9414


//  Id pregunta: 9409 Año de creación de pregunta: 2014
 questions[27]= "28)  En la metodolog&iacute;a SCRUM existen distintos tipo de reuniones. &iquest;Qu&eacute; orden cronol&oacute;gico suelen tener?";
 choices[27]= new Array();
 choices[27][0] = "Daily Scrum, Scrum de Scrum, Sprint Planning Meeting, Sprint Review Meeting y Spring Retrospective.";
 choices[27][1] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Sprint Review Meeting y Spring Retrospective.";
 choices[27][2] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Spring Retrospective y Sprint Review Meeting.";
 choices[27][3] = "Sprint Planning Meeting, Daily Scrum, Sprint Review Meeting, Scrum de Scrum y Spring Retrospective.";
 answers[27] = 1;
 units[27] = ['84'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 9409. ";
 preguntaids[27] = 9409


//  Id pregunta: 9416 Año de creación de pregunta: 2014
 questions[28]= "29)  De acuerdo a M&eacute;trica v.3, la pr&aacute;ctica JAD distingue distinto perfiles. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[28]= new Array();
 choices[28][0] = "Moderador (l&iacute;der Jad)";
 choices[28][1] = "Desarrolladores";
 choices[28][2] = "Usuarios";
 choices[28][3] = "Analistas";
 answers[28] = 3;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 9416. ";
 preguntaids[28] = 9416


//  Id pregunta: 9381 Año de creación de pregunta: 2014
 questions[29]= "30)  En las comunicaciones a trav&eacute;s de sockets, &iquest;cu&aacute;l de las siguientes NO se corresponde con una primitiva?";
 choices[29]= new Array();
 choices[29][0] = "Bind";
 choices[29][1] = "Listen";
 choices[29][2] = "Reject";
 choices[29][3] = "Socket";
 answers[29] = 2;
 units[29] = ['109'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9381. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[29] = 9381


//  Id pregunta: 9383 Año de creación de pregunta: 2014
 questions[30]= "31)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[30]= new Array();
 choices[30][0] = "Red A.";
 choices[30][1] = "Red B.";
 choices[30][2] = "Red C.";
 choices[30][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[30] = 1;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 9383. Examen TIC A2  2013";
 preguntaids[30] = 9383


//  Id pregunta: 9446 Año de creación de pregunta: 2014
 questions[31]= "32)  &iquest;Qu&eacute; novedad introduce el est&aacute;ndar DOCSIS 3.1?";
 choices[31]= new Array();
 choices[31][0] = "No existe dicho est&aacute;ndar";
 choices[31][1] = "Puede soportar hasta 10 Gbit/s de bajada";
 choices[31][2] = "Permite el uso de tecnolog&iacute;as S-CDMA";
 choices[31][3] = "Permite el ajuste de diferentes niveles de calidad de servicio, seg&uacute;n el servicio empleado";
 answers[31] = 1;
 units[31] = ['115'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 9446. ";
 preguntaids[31] = 9446


//  Id pregunta: 9375 Año de creación de pregunta: 2014
 questions[32]= "33)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[32]= new Array();
 choices[32][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[32][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[32][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[32][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[32] = 3;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9375. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[32] = 9375


//  Id pregunta: 9412 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil tiene 5 fases claramente diferenciadas?";
 choices[33]= new Array();
 choices[33][0] = "SCRUM";
 choices[33][1] = "Lean Software Development";
 choices[33][2] = "Kanban";
 choices[33][3] = "Feature Driven Development";
 answers[33] = 3;
 units[33] = ['84'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 9412. FDD define 5 procesos: Proceso 1 &ndash; Desarrollar el modelo global (Develop overall model), Proceso 2 &ndash; Construir una lista de caracter&iacute;sticas (Build feature list), Proceso 3 &ndash; Planificar (Plan by feature), Proceso 4 &ndash; Dise&ntilde;ar (Design by feature) y Proceso 5 &ndash; Construir (Build by feature).";
 preguntaids[33] = 9412


//  Id pregunta: 9394 Año de creación de pregunta: 2014
 questions[34]= "35)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[34]= new Array();
 choices[34][0] = "GPRS";
 choices[34][1] = "HSDPA";
 choices[34][2] = "HSUPA";
 choices[34][3] = "UMTS";
 answers[34] = 1;
 units[34] = ['117'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 9394. Examen TIC A2  2013";
 preguntaids[34] = 9394


//  Id pregunta: 9382 Año de creación de pregunta: 2014
 questions[35]= "36)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[35]= new Array();
 choices[35][0] = "TIER I";
 choices[35][1] = "TIER II";
 choices[35][2] = "TIER III";
 choices[35][3] = "TIER IV";
 answers[35] = 2;
 units[35] = ['54'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9382. Examen TIC A2  2013";
 preguntaids[35] = 9382


//  Id pregunta: 9380 Año de creación de pregunta: 2014
 questions[36]= "37)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[36]= new Array();
 choices[36][0] = "128 bits";
 choices[36][1] = "160 bits";
 choices[36][2] = "224 bits";
 choices[36][3] = "256 bits";
 answers[36] = 1;
 units[36] = ['76'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9380. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[36] = 9380


//  Id pregunta: 9427 Año de creación de pregunta: 2014
 questions[37]= "38)  Cu&aacute;l de los siguientes contenedores SDH no es posible:";
 choices[37]= new Array();
 choices[37][0] = "STM-1";
 choices[37][1] = "STM-16";
 choices[37][2] = "STM-128";
 choices[37][3] = "STM-256";
 answers[37] = 2;
 units[37] = ['107'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 9427. ";
 preguntaids[37] = 9427


//  Id pregunta: 9373 Año de creación de pregunta: 2014
 questions[38]= "39)  MPLS (Multiprotocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[38]= new Array();
 choices[38][0] = "FEC (Forwarding Equivalent Class).";
 choices[38][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[38][2] = "CIR (Commited Information Rate).";
 choices[38][3] = "MBS (Maximum Burst Size).";
 answers[38] = 0;
 units[38] = ['107'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9373. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[38] = 9373


//  Id pregunta: 9437 Año de creación de pregunta: 2014
 questions[39]= "40)  La red TESTA tiene el rango de direcciones:";
 choices[39]= new Array();
 choices[39][0] = "10.0.0.0";
 choices[39][1] = "192.0.0.0";
 choices[39][2] = "62.0.0.0";
 choices[39][3] = "62.62.0.0";
 answers[39] = 3;
 units[39] = ['114'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9437. ";
 preguntaids[39] = 9437


//  Id pregunta: 9443 Año de creación de pregunta: 2014
 questions[40]= "41)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[40]= new Array();
 choices[40][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[40][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[40][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[40][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[40] = 2;
 units[40] = ['114'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9443. ";
 preguntaids[40] = 9443


//  Id pregunta: 9418 Año de creación de pregunta: 2014
 questions[41]= "42)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[41]= new Array();
 choices[41][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[41][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[41][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[41][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[41] = 1;
 units[41] = ['86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 9418. ";
 preguntaids[41] = 9418


//  Id pregunta: 9441 Año de creación de pregunta: 2014
 questions[42]= "43)  Las siglas CMOT significan:";
 choices[42]= new Array();
 choices[42][0] = "Complex Management Over TCP";
 choices[42][1] = "Common Management Over TCP/IP";
 choices[42][2] = "Complex Management Over TCP/IP";
 choices[42][3] = "Complex Management Of Telecomucation";
 answers[42] = 1;
 units[42] = ['114'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 9441. ";
 preguntaids[42] = 9441


//  Id pregunta: 9396 Año de creación de pregunta: 2014
 questions[43]= "44)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[43]= new Array();
 choices[43][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[43][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[43][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[43][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[43] = 1;
 units[43] = ['106'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 9396. Examen TIC A2  2013";
 preguntaids[43] = 9396


//  Id pregunta: 9398 Año de creación de pregunta: 2014
 questions[44]= "45)  La tecnolog&iacute;a WiMAX 2 es conocida formalmente como:";
 choices[44]= new Array();
 choices[44][0] = "802.16m";
 choices[44][1] = "802.16a";
 choices[44][2] = "802.11x";
 choices[44][3] = "802.11n";
 answers[44] = 0;
 units[44] = ['106'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 9398. Examen TIC A2  2013";
 preguntaids[44] = 9398


//  Id pregunta: 9395 Año de creación de pregunta: 2014
 questions[45]= "46)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[45]= new Array();
 choices[45][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[45][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[45][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[45][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[45] = 1;
 units[45] = ['117'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 9395. Examen TIC A2  2013";
 preguntaids[45] = 9395


//  Id pregunta: 9386 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[46]= new Array();
 choices[46][0] = "B";
 choices[46][1] = "D";
 choices[46][2] = "H";
 choices[46][3] = "I";
 answers[46] = 3;
 units[46] = ['114'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9386. Examen TIC A2  2013";
 preguntaids[46] = 9386


//  Id pregunta: 9450 Año de creación de pregunta: 2014
 questions[47]= "48)  En relaci&oacute;n a las Comunicaciones comerciales por v&iacute;a electr&oacute;nica reguladas por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Cu&aacute;l de las siguientes afirmaciones es INCORRECTA:";
 choices[47]= new Array();
 choices[47][0] = "Las comunicaciones comerciales realizadas por v&iacute;a electr&oacute;nica deber&aacute;n ser claramente identificables como tales y la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan tambi&eacute;n deber&aacute; ser claramente identificable.";
 choices[47][1] = "En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra ''publicidad'' o la abreviatura ''publi''";
 choices[47][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.";
 choices[47][3] = "Lo dispuesto en el apartado anterior no ser&aacute; de aplicaci&oacute;n cuando exista una relaci&oacute;n contractual previa, siempre que el prestador hubiera obtenido de forma l&iacute;cita los datos de contacto del destinatario y los empleara para el env&iacute;o de comunicaciones comerciales referentes a productos o servicios de su propia empresa que sean similares a los que inicialmente fueron objeto de contrataci&oacute;n con el cliente.";
 answers[47] = 1;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 9450. El Art&iacute;culo 20. Informaci&oacute;n exigida sobre las comunicaciones comerciales, ofertas promocionales y concursos fue modificado en 2014 eliminando la frase &quot;En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot; o la abreviatura &quot;publi&quot;.&quot;";
 preguntaids[47] = 9450


//  Id pregunta: 9428 Año de creación de pregunta: 2014
 questions[48]= "49)  Respecto al protocolo Spanning Tree Protocol , es falso que:";
 choices[48]= new Array();
 choices[48][0] = "Es un protocolo de Nivel 2";
 choices[48][1] = "Permite realizar encaminamiento entre nodos";
 choices[48][2] = "Evita bucles en la red.";
 choices[48][3] = "Converge m&aacute;s lentamente que RSTP";
 answers[48] = 1;
 units[48] = ['112'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 9428. ";
 preguntaids[48] = 9428


//  Id pregunta: 9451 Año de creación de pregunta: 2014
 questions[49]= "50)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[49]= new Array();
 choices[49][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[49][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a la adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[49][2] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo al plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n";
 choices[49][3] = "Todas son verdaderas";
 answers[49] = 3;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 9451. ";
 preguntaids[49] = 9451


//  Id pregunta: 9419 Año de creación de pregunta: 2014
 questions[50]= "51)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[50]= new Array();
 choices[50][0] = "salida-mecanismo";
 choices[50][1] = "salida-realimentaci&oacute;n";
 choices[50][2] = "control-realimentaci&oacute;n";
 choices[50][3] = "entrada-realimentaci&oacute;n";
 answers[50] = 1;
 units[50] = ['86'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 9419. Existen cinco tipos de interconexiones entre actividades, que son las siguientes: (1)  Control; (2)  Entrada; (3)   Control &ndash; Realimentaci&oacute;n; (4)  Entrada &ndash; Realimentaci&oacute;n; (5)  Salida &ndash; Mecanismo.";
 preguntaids[50] = 9419


//  Id pregunta: 9388 Año de creación de pregunta: 2014
 questions[51]= "52)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[51]= new Array();
 choices[51][0] = "Sim&eacute;trico de bloques.";
 choices[51][1] = "Sim&eacute;trico de flujo.";
 choices[51][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[51][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[51] = 0;
 units[51] = ['76'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9388. Examen TIC A2  2013";
 preguntaids[51] = 9388


//  Id pregunta: 9377 Año de creación de pregunta: 2014
 questions[52]= "53)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[52]= new Array();
 choices[52][0] = "Contiene la clave privada.";
 choices[52][1] = "Cumple la sintaxis PKCS #21.";
 choices[52][2] = "Est&aacute; codificado en un formato no binario.";
 choices[52][3] = "No se puede convertir a formato .PEM.";
 answers[52] = 0;
 units[52] = ['76'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9377. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[52] = 9377


//  Id pregunta: 9431 Año de creación de pregunta: 2014
 questions[53]= "54)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[53]= new Array();
 choices[53][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[53][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[53][2] = "Cuando ha recibido toda la trama";
 choices[53][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[53] = 0;
 units[53] = ['112'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 9431. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";
 preguntaids[53] = 9431


//  Id pregunta: 9417 Año de creación de pregunta: 2014
 questions[54]= "55)  &iquest;Cu&aacute;l es la diferencia entre una maqueta y un prototipo seg&uacute;n M&eacute;trica v3?";
 choices[54]= new Array();
 choices[54][0] = "Ninguna, son lo mismo seg&uacute;n M&eacute;trica v3.";
 choices[54][1] = "Un prototipo describe parte de la funcionalidad del sistema, una maqueta simula el aspecto visual.";
 choices[54][2] = "Una maqueta describe parte de la funcionalidad del sistema, un prototipo simula el aspecto visual.";
 choices[54][3] = "Una maqueta es un tipo de prototipo evolutivo.";
 answers[54] = 0;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 9417. ";
 preguntaids[54] = 9417


//  Id pregunta: 9423 Año de creación de pregunta: 2014
 questions[55]= "56)  El est&aacute;ndar Wimax est&aacute; especificado en la norma:";
 choices[55]= new Array();
 choices[55][0] = "IEEE 802.11";
 choices[55][1] = "IEEE 802.16";
 choices[55][2] = "IEEE 802.15";
 choices[55][3] = "IEEE 802.19";
 answers[55] = 1;
 units[55] = ['106'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9423. ";
 preguntaids[55] = 9423


//  Id pregunta: 9422 Año de creación de pregunta: 2014
 questions[56]= "57)  Las siglas CSMA/CD significan:";
 choices[56]= new Array();
 choices[56][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[56][1] = "Carrier Sense Multiple Access with Common Data";
 choices[56][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[56][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[56] = 0;
 units[56] = ['112'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 9422. ";
 preguntaids[56] = 9422


//  Id pregunta: 9393 Año de creación de pregunta: 2014
 questions[57]= "58)  Qu&eacute; datos NO incorporar&aacute; una descripci&oacute;n de sesi&oacute;n SDP (Session Description Protocol - RFC 4566) en una iniciaci&oacute;n de sesi&oacute;n utilizada en SIP (Session Initiation Protocol):";
 choices[57]= new Array();
 choices[57][0] = "Tipo de medio.";
 choices[57][1] = "Protocolo de transporte (RTP/UDP/IP, H 320, etc.).";
 choices[57][2] = "Formato del medio (video H.261, video MPEG, etc.).";
 choices[57][3] = "Tama&ntilde;o de los datos.";
 answers[57] = 3;
 units[57] = ['110'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9393. Examen TIC A2  2013";
 preguntaids[57] = 9393


//  Id pregunta: 9421 Año de creación de pregunta: 2014
 questions[58]= "59)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[58]= new Array();
 choices[58][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[58][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[58][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[58][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[58] = 2;
 units[58] = ['112'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9421. ";
 preguntaids[58] = 9421


//  Id pregunta: 9435 Año de creación de pregunta: 2014
 questions[59]= "60)  Cu&aacute;l de los siguientes es un protocolo de encaminamiento externo:";
 choices[59]= new Array();
 choices[59][0] = "RIP";
 choices[59][1] = "OSPF";
 choices[59][2] = "BGP";
 choices[59][3] = "ISIS";
 answers[59] = 2;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9435. ";
 preguntaids[59] = 9435


//  Id pregunta: 9415 Año de creación de pregunta: 2014
 questions[60]= "61)  En relaci&oacute;n con el producto ERS en METRICA v.3:";
 choices[60]= new Array();
 choices[60][0] = "La ERS la obtienen los analistas en ASI 9.";
 choices[60][1] = "La ERS la obtienen los analistas en ASI 2.";
 choices[60][2] = "La ERS la obtienen los analistas y usuarios expertos en ASI 9.";
 choices[60][3] = "La ERS la obtienen los analistas y usuarios expertos en ASI 2.";
 answers[60] = 0;
 units[60] = ['91'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 9415. ";
 preguntaids[60] = 9415


//  Id pregunta: 9411 Año de creación de pregunta: 2014
 questions[61]= "62)  Seg&uacute;n SCRUM, &iquest;se pueden modificar el sprintbacklog durante un sprint?";
 choices[61]= new Array();
 choices[61][0] = "No, nunca";
 choices[61][1] = "Solo el Product Owner";
 choices[61][2] = "Solo el Scrum Master";
 choices[61][3] = "Solo el Product Owner a petici&oacute;n de alg&uacute;n Stakeholder";
 answers[61] = 0;
 units[61] = ['84'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 9411. ";
 preguntaids[61] = 9411


//  Id pregunta: 9449 Año de creación de pregunta: 2014
 questions[62]= "63)  &iquest;Qu&eacute; es el dividendo digital?";
 choices[62]= new Array();
 choices[62][0] = "Una parte del espectro radioel&eacute;ctrico que usaba la TDT ha quedado liberada para otros servicios de comunicaciones";
 choices[62][1] = "Una parte del espectro digital.";
 choices[62][2] = "Una compresi&oacute;n del espectro debido a la utilizaci&oacute;n de se&ntilde;ales digitales.";
 choices[62][3] = "Una reasignaci&oacute;n de frecuencias dentro de la banda que utiliza la TDT.";
 answers[62] = 0;
 units[62] = ['115'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9449. Examen TIC A1 2011";
 preguntaids[62] = 9449


//  Id pregunta: 9387 Año de creación de pregunta: 2014
 questions[63]= "64)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[63]= new Array();
 choices[63][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[63][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[63][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[63][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[63] = 0;
 units[63] = ['107'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 9387. Examen TIC A2  2013";
 preguntaids[63] = 9387


//  Id pregunta: 9442 Año de creación de pregunta: 2014
 questions[64]= "65)  La principal mejora de SNMPv3 es:";
 choices[64]= new Array();
 choices[64][0] = "Mayor seguridad";
 choices[64][1] = "Mayor rendimiento";
 choices[64][2] = "Mayor eficacia";
 choices[64][3] = "Mayor simplicidad";
 answers[64] = 0;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 9442. ";
 preguntaids[64] = 9442


//  Id pregunta: 9439 Año de creación de pregunta: 2014
 questions[65]= "66)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[65]= new Array();
 choices[65][0] = "Fault Mangement";
 choices[65][1] = "Configuration Management";
 choices[65][2] = "Accounting Management";
 choices[65][3] = "Improvement Management";
 answers[65] = 3;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 9439. ";
 preguntaids[65] = 9439


//  Id pregunta: 9392 Año de creación de pregunta: 2014
 questions[66]= "67)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[66]= new Array();
 choices[66][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[66][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[66][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[66][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[66] = 2;
 units[66] = ['110'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9392. Examen TIC A2  2013";
 preguntaids[66] = 9392


//  Id pregunta: 9402 Año de creación de pregunta: 2014
 questions[67]= "68)  En el contexto de comunicaciones inal&aacute;mbricas, MIMO significa:";
 choices[67]= new Array();
 choices[67][0] = "Multiple Input Multiple Output.";
 choices[67][1] = "Massive Input Massive Output.";
 choices[67][2] = "Multiplexed Input Multiplexed Output.";
 choices[67][3] = "Mapped Input Mapped Output.";
 answers[67] = 0;
 units[67] = ['117'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 9402. Examen TIC A2  2013";
 preguntaids[67] = 9402


//  Id pregunta: 9391 Año de creación de pregunta: 2014
 questions[68]= "69)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[68]= new Array();
 choices[68][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[68][1] = "SGL (Splitterless G. Lite).";
 choices[68][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[68][3] = "CAP (Carrierless Amplitude Phase).";
 answers[68] = 3;
 units[68] = ['106'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9391. Examen TIC A2  2013";
 preguntaids[68] = 9391


//  Id pregunta: 9404 Año de creación de pregunta: 2014
 questions[69]= "70)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo del proceso?";
 choices[69]= new Array();
 choices[69][0] = "Entorno de desarrollo";
 choices[69][1] = "Modelado de negocio";
 choices[69][2] = "Pruebas";
 choices[69][3] = "Despliegue";
 answers[69] = 0;
 units[69] = ['82'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 9404. ";
 preguntaids[69] = 9404


//  Id pregunta: 9420 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;Qu&eacute; tipo de flujos de datos no existen?";
 choices[70]= new Array();
 choices[70][0] = "Flujos discretos y continuos";
 choices[70][1] = "Flujos de consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[70][2] = "Flujo de control";
 choices[70][3] = "Existen todos los tipos de flujos anteriores";
 answers[70] = 3;
 units[70] = ['86'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 9420. ";
 preguntaids[70] = 9420


//  Id pregunta: 9440 Año de creación de pregunta: 2014
 questions[71]= "72)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en:";
 choices[71]= new Array();
 choices[71][0] = "El elemento gestionado";
 choices[71][1] = "El nodo de gesti&oacute;n central";
 choices[71][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[71][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[71] = 0;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9440. ";
 preguntaids[71] = 9440


//  Id pregunta: 9432 Año de creación de pregunta: 2014
 questions[72]= "73)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[72]= new Array();
 choices[72][0] = "M&uacute;ltiples";
 choices[72][1] = "Trunk";
 choices[72][2] = "VLAN- Link";
 choices[72][3] = "Data-Link";
 answers[72] = 1;
 units[72] = ['102'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 9432. ";
 preguntaids[72] = 9432


//  Id pregunta: 9444 Año de creación de pregunta: 2014
 questions[73]= "74)  &iquest;El reglamento de Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) se encuentra recogido en?:";
 choices[73]= new Array();
 choices[73][0] = "El Real Decreto 920 / 2006";
 choices[73][1] = "El Real Decreto 346 / 2011";
 choices[73][2] = "El Real Decreto 401 / 2003";
 choices[73][3] = "Ninguno de los anteriores";
 answers[73] = 1;
 units[73] = ['115'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 9444. Real Decreto 920/2006, de 28 de julio, por el que se aprueba el Reglamento general de prestaci&oacute;n del servicio de difusi&oacute;n de radio y televisi&oacute;n por cable; Real Decreto 401/2003: ICTs. Est&aacute; derogado;";
 preguntaids[73] = 9444


//  Id pregunta: 9429 Año de creación de pregunta: 2014
 questions[74]= "75)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[74]= new Array();
 choices[74][0] = "Router";
 choices[74][1] = "Switch";
 choices[74][2] = "Bridge";
 choices[74][3] = "Hub";
 answers[74] = 3;
 units[74] = ['102'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 9429. ";
 preguntaids[74] = 9429


