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
//  Id pregunta: 2484 Año de creación de pregunta: 2004
 questions[0]= "1)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[0]= new Array();
 choices[0][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[0][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[0][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[0][3] = "Todas son v&aacute;lidas";
 answers[0] = 3;
 units[0] = ['74'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2484. Similar a examen TIC MAP A 2004. La C no ser&iacute;a v&aacute;lida en HTML 4.0";
 preguntaids[0] = 2484


//  Id pregunta: 3544 Año de creación de pregunta: 2004
 questions[1]= "2)  Se desea desarrollar un proyecto con programaci&oacute;n orientada a objetos en el que va a ser necesario utilizar herencia m&uacute;ltiple. &iquest;Qu&eacute; lenguaje no vamos a poder usar?";
 choices[1]= new Array();
 choices[1][0] = "Python.";
 choices[1][1] = "C++.";
 choices[1][2] = "Eiffel.";
 choices[1][3] = "Smalltalk.";
 answers[1] = 3;
 units[1] = ['89'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3544. Similar a examen TIC MAP A 2004";
 preguntaids[1] = 3544


//  Id pregunta: 2487 Año de creación de pregunta: 2004
 questions[2]= "3)  Cu&aacute;l no es una caracter&iacute;stica del software libre:";
 choices[2]= new Array();
 choices[2][0] = "Libertad de distribuir copias";
 choices[2][1] = "Gratuidad";
 choices[2][2] = "Libertad de realizar modificaciones particulares y mantenerlas para uso privado";
 choices[2][3] = "C&oacute;digo abierto";
 answers[2] = 1;
 units[2] = ['66'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2487. Similar a examen TIC MAP A 2004";
 preguntaids[2] = 2487


//  Id pregunta: 4314 Año de creación de pregunta: 2004
 questions[3]= "4)  En telefon&iacute;a m&oacute;vil GSM, &iquest;qu&eacute; bases de datos se utilizan para almacenar datos de cliente?";
 choices[3]= new Array();
 choices[3][0] = "VLR y HLR";
 choices[3][1] = "EIR y HLR";
 choices[3][2] = "MSC y VLR";
 choices[3][3] = "EIR y MSC";
 answers[3] = 0;
 units[3] = ['117'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4314. Similar a examen TIC MAP A 2004";
 preguntaids[3] = 4314


//  Id pregunta: 3542 Año de creación de pregunta: 2004
 questions[4]= "5)  Sobre el m&eacute;todo de los puntos de funci&oacute;n puede decirse que:";
 choices[4]= new Array();
 choices[4][0] = "se basa en el n&uacute;mero de l&iacute;neas de c&oacute;digo";
 choices[4][1] = "es independiente del c&oacute;digo";
 choices[4][2] = "es una m&eacute;trica de complejidad";
 choices[4][3] = "es una m&eacute;trica de fiabilidad";
 answers[4] = 1;
 units[4] = ['94'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3542. Similar a examen TIC MAP A 2004";
 preguntaids[4] = 3542


//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[5]= "6)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[5]= new Array();
 choices[5][0] = "Firma electr&oacute;nica avanzada";
 choices[5][1] = "Firma electr&oacute;nica reconocida";
 choices[5][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 1;
 units[5] = ['19'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[5] = 2483


//  Id pregunta: 4308 Año de creación de pregunta: 2004
 questions[6]= "7)  &iquest;Qu&eacute; m&aacute;scara habr&iacute;a que aplicar para crear 8 subredes en una red de clase A?";
 choices[6]= new Array();
 choices[6][0] = "255.240.0.0";
 choices[6][1] = "255.192.0.0";
 choices[6][2] = "255.0.0.0";
 choices[6][3] = "2";
 answers[6] = 0;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4308. Similar a examen TIC MAP A 2004. Con esa m&aacute;scara tendriamos hasta 14 subredes. Se aplica la formula  2N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";
 preguntaids[6] = 4308


//  Id pregunta: 4309 Año de creación de pregunta: 2004
 questions[7]= "8)  ECMAscript, con cu&aacute;l de los siguientes lenguajes de script se relaciona:";
 choices[7]= new Array();
 choices[7][0] = "JavaScript";
 choices[7][1] = "VBScript";
 choices[7][2] = "Jscript";
 choices[7][3] = "Perlscript";
 answers[7] = 0;
 units[7] = ['62'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 4309. Similar a examen TIC MAP A 2004";
 preguntaids[7] = 4309


//  Id pregunta: 4312 Año de creación de pregunta: 2004
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[8]= new Array();
 choices[8][0] = "Borrador de Internet";
 choices[8][1] = "Est&aacute;ndar propuesto";
 choices[8][2] = "Borrador de est&aacute;ndar";
 choices[8][3] = "Est&aacute;ndar temporal";
 answers[8] = 3;
 units[8] = ['103'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4312. Similar a examen TIC MAP A 2004";
 preguntaids[8] = 4312


//  Id pregunta: 4313 Año de creación de pregunta: 2004
 questions[9]= "10)  La Ley General de Telecomunicaciones 9/2014 establece la creaci&oacute;n de un registro de operadores. &iquest;A qu&eacute; entidad encarga su llevanza?";
 choices[9]= new Array();
 choices[9][0] = "Agencia estatal de radiocomunicaciones";
 choices[9][1] = "Ministerio  de Energia, Turismo y Agenda Digital";
 choices[9][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[9][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[9] = 1;
 units[9] = ['121'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4313. Similar a examen TIC MAP A 2004.";
 preguntaids[9] = 4313


//  Id pregunta: 2485 Año de creación de pregunta: 2004
 questions[10]= "11)  Un documento XML con DTD es:";
 choices[10]= new Array();
 choices[10][0] = "v&aacute;lido";
 choices[10][1] = "inv&aacute;lido";
 choices[10][2] = "bien formado";
 choices[10][3] = "conformado";
 answers[10] = 0;
 units[10] = ['74'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2485. Similar a examen TIC MAP A 2004";
 preguntaids[10] = 2485


//  Id pregunta: 3569 Año de creación de pregunta: 2004
 questions[11]= "12)  Sean: a) ac&uacute;stico, b) fon&eacute;tico, c) fonol&oacute;gico, d) l&eacute;xico-sint&aacute;ctico, e) pros&oacute;dico, f) sem&aacute;ntico-pragm&aacute;tico, &iquest;cu&aacute;l ser&iacute;a la ordenaci&oacute;n correcta en funci&oacute;n de la menor a mayor inteligencia...";
 choices[11]= new Array();
 choices[11][0] = "a c b d e f";
 choices[11][1] = "a b c d e f";
 choices[11][2] = "a c b e d f";
 choices[11][3] = "a b c e d f";
 answers[11] = 1;
 units[11] = ['81'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3569. Similar a examen TIC MAP A 2004. JMRP: Se elimina porque en el temario de 2016 ya no hay reconocimiento de voz";
 preguntaids[11] = 3569


//  Id pregunta: 3545 Año de creación de pregunta: 2004
 questions[12]= "13)  Las pruebas que se realizan con los componentes modificados con el fin de comprobar que no introducen ning&uacute;n error adicional en los componentes no modificados se denominan:";
 choices[12]= new Array();
 choices[12][0] = "Pruebas unitarias";
 choices[12][1] = "Pruebas de sistema";
 choices[12][2] = "Pruebas de regresi&oacute;n";
 choices[12][3] = "Pruebas de aceptaci&oacute;n";
 answers[12] = 2;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3545. Similar a examen TIC SS A 2004";
 preguntaids[12] = 3545


//  Id pregunta: 4315 Año de creación de pregunta: 2004
 questions[13]= "14)  La plataforma Java que se utiliza para el desarrollo de aplicaciones para PDA es:";
 choices[13]= new Array();
 choices[13][0] = "Micro Edition";
 choices[13][1] = "Standard Edition";
 choices[13][2] = "Enterprise Edition";
 choices[13][3] = "Cualquiera de ellas indistintamente dada su portabilidad";
 answers[13] = 0;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 4315. Similar a examen TIC MAP A 2004";
 preguntaids[13] = 4315


//  Id pregunta: 4310 Año de creación de pregunta: 2004
 questions[14]= "15)  &iquest;Qu&eacute; protocolo de correo permite acceder al correo electr&oacute;nico, manteniendo los mensajes en el servidor, de forma que pueda accederse al correo desde distintos terminales?";
 choices[14]= new Array();
 choices[14][0] = "POP-3";
 choices[14][1] = "SMTP";
 choices[14][2] = "IMAP";
 choices[14][3] = "MIME";
 answers[14] = 2;
 units[14] = ['116'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4310. Similar a examen TIC MAP A 2004";
 preguntaids[14] = 4310


//  Id pregunta: 4311 Año de creación de pregunta: 2004
 questions[15]= "16)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[15]= new Array();
 choices[15][0] = "1000BaseT";
 choices[15][1] = "1000BaseSX";
 choices[15][2] = "1000BaseLx";
 choices[15][3] = "1000BaseCX";
 answers[15] = 3;
 units[15] = ['104'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4311. Similar a examen TIC MAP A 2004";
 preguntaids[15] = 4311


//  Id pregunta: 3541 Año de creación de pregunta: 2004
 questions[16]= "17)  Son elementos de un DFD:";
 choices[16]= new Array();
 choices[16][0] = "Eventos, nodos, entidades externas, flujos de datos";
 choices[16][1] = "Eventos, entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[16][2] = "Entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[16][3] = "Entidades externas, nodos, flujos de datos";
 answers[16] = 2;
 units[16] = ['86'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3541. Similar a examen TIC MAP A 2004";
 preguntaids[16] = 3541


//  Id pregunta: 3543 Año de creación de pregunta: 2004
 questions[17]= "18)  Son interfaces de Metrica v.3:";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de Procesos, Gesti&oacute;n de Perfiles, Aseguramiento de la Calidad";
 choices[17][1] = "Gesti&oacute;n de Perfiles, Gesti&oacute;n de Proyectos, Seguridad, Gesti&oacute;n de Configuraci&oacute;n";
 choices[17][2] = "Gesti&oacute;n de Proyectos, Seguridad, Aseguramiento de la Calidad";
 choices[17][3] = "Gesti&oacute;n de Procesos, Gesti&oacute;n de Configuraci&oacute;n, Seguridad, Aseguramiento de la Calidad";
 answers[17] = 2;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3543. Similar a examen TIC MAP A 2004. JMRP: La pregunta es correcta. La opci&oacute;n correcta no menciona todos los interfaces de M&eacute;trica3 pero eso no hace que sea incorrecta";
 preguntaids[17] = 3543


