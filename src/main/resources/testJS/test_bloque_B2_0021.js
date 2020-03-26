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
//  Id pregunta: 4132 Año de creación de pregunta: 2003
 questions[0]= "1)  M&eacute;todo b&aacute;sico de reconocimiento de caracteres en OCR:";
 choices[0]= new Array();
 choices[0][0] = "Comparaci&oacute;n matricial.";
 choices[0][1] = "S&iacute;ntesis de caracter&iacute;sticas.";
 choices[0][2] = "Todas las anteriores.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = 0;
 units[0] = ['81'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 4132. ";
 preguntaids[0] = 4132


//  Id pregunta: 4260 Año de creación de pregunta: 2006
 questions[1]= "2)  &iquest;La agudeza visual del hombre es capaz de identificar pixeles de?";
 choices[1]= new Array();
 choices[1][0] = "50&micro;m";
 choices[1][1] = "10&micro;m";
 choices[1][2] = "100&micro;m";
 choices[1][3] = "70&micro;m";
 answers[1] = 2;
 units[1] = ['80'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 4260. ";
 preguntaids[1] = 4260


//  Id pregunta: 4122 Año de creación de pregunta: 2003
 questions[2]= "3)  La entrada de documentos al sistema de reconocimiento &oacute;ptico de caracteres se produce sobre soporte:";
 choices[2]= new Array();
 choices[2][0] = "Papel";
 choices[2][1] = "Fax";
 choices[2][2] = "Correo electr&oacute;nico.";
 choices[2][3] = "Todos los anteriores.";
 answers[2] = 3;
 units[2] = ['81'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 4122. ";
 preguntaids[2] = 4122


//  Id pregunta: 4411 Año de creación de pregunta: 2002
 questions[3]= "4)  En las Active Server Pages de Microsoft IIS:";
 choices[3]= new Array();
 choices[3][0] = "Las p&aacute;ginas ASP son ficheros de texto, con c&oacute;digo VBScript o JScript, que es Interpretado";
 choices[3][1] = "Las p&aacute;ginas ASPX son ficheros compilados con c&oacute;digo de lenguajes Microsoft.NET";
 choices[3][2] = "Las p&aacute;ginas CFM son p&aacute;ginas con c&oacute;digo C, interpretado";
 choices[3][3] = "A y B son ciertas";
 answers[3] = 3;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 4411. ";
 preguntaids[3] = 4411


//  Id pregunta: 4828 Año de creación de pregunta: 2002
 questions[4]= "5)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[4]= new Array();
 choices[4][0] = "X especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[4][1] = "Y especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[4][2] = "Z especifica la disciplina de cola.";
 choices[4][3] = "La notaci&oacute;n empleada en teor&iacute;a de tr&aacute;fico se debe a Erlang y no a Kendall.";
 answers[4] = 2;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 4828. ";
 preguntaids[4] = 4828


//  Id pregunta: 4123 Año de creación de pregunta: 2003
 questions[5]= "6)  Teniendo en cuenta la agudeza visual humana y la unidad m&iacute;nima de resoluci&oacute;n, los procesos de tratamiento digital de imagen deber&iacute;an llevarse a cabo entre:";
 choices[5]= new Array();
 choices[5][0] = "25 &micro;m y 100 &micro;m.";
 choices[5][1] = "0,4 &micro;m y 0,7 &micro;m.";
 choices[5][2] = "0,3 &micro;m y 1 mm.";
 choices[5][3] = "Ninguna de las anteriores.";
 answers[5] = 0;
 units[5] = ['80'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 4123. ";
 preguntaids[5] = 4123


//  Id pregunta: 4307 Año de creación de pregunta: 2004
 questions[6]= "7)  La tecnolog&iacute;a DCOM toma las siglas de:";
 choices[6]= new Array();
 choices[6][0] = "Distributed Communication Model";
 choices[6][1] = "Development of Concurrent Multisystems";
 choices[6][2] = "Dynamic Component-Oriented Measure";
 choices[6][3] = "Distributed Component Object Model";
 answers[6] = 3;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 4307. ";
 preguntaids[6] = 4307


//  Id pregunta: 4827 Año de creación de pregunta: 2002
 questions[7]= "8)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[7]= new Array();
 choices[7][0] = "A especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[7][1] = "B especifica ls distribuci&oacute;n de las llegadas al sistema.";
 choices[7][2] = "Las dos anteriores son ciertas.";
 choices[7][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[7] = 3;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 4827. ";
 preguntaids[7] = 4827


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


//  Id pregunta: 4016 Año de creación de pregunta: 2002
 questions[9]= "10)  Uno de los est&aacute;ndares de representaci&oacute;n de c&oacute;digos de barras en dos dimensiones es:";
 choices[9]= new Array();
 choices[9][0] = "PDF 417";
 choices[9][1] = "EPS 417";
 choices[9][2] = "PES 417";
 choices[9][3] = "2DC 417";
 answers[9] = 0;
 units[9] = ['80'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 4016. ";
 preguntaids[9] = 4016


//  Id pregunta: 4128 Año de creación de pregunta: 2003
 questions[10]= "11)  Los servicios de informaci&oacute;n electr&oacute;nica que contienen referencias, algunas veces con extractos, de informaci&oacute;n no publicada, se denominan:";
 choices[10]= new Array();
 choices[10][0] = "Num&eacute;ricos.";
 choices[10][1] = "Directorios.";
 choices[10][2] = "Agendas.";
 choices[10][3] = "Bibliogr&aacute;ficos.";
 answers[10] = 1;
 units[10] = ['81'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 4128. ";
 preguntaids[10] = 4128


//  Id pregunta: 4105 Año de creación de pregunta: 2003
 questions[11]= "12)  En este nivel se extraen los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos:";
 choices[11]= new Array();
 choices[11][0] = "Nivel fon&eacute;tico distintivo.";
 choices[11][1] = "Nivel pros&oacute;dico.";
 choices[11][2] = "Nivel l&eacute;xico-sint&aacute;ctico.";
 choices[11][3] = "Nivel ac&uacute;stico.";
 answers[11] = 2;
 units[11] = ['81'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 4105. ";
 preguntaids[11] = 4105


//  Id pregunta: 4394 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes componentes de software no forma parte del servidor de aplicaciones en una arquitectura a tres capas?:";
 choices[12]= new Array();
 choices[12][0] = "P&aacute;ginas din&aacute;micas";
 choices[12][1] = "Java Virtual Machine";
 choices[12][2] = "Navegador Web";
 choices[12][3] = "Int&eacute;rprete de Scripting";
 answers[12] = 2;
 units[12] = ['62'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 4394. ";
 preguntaids[12] = 4394


//  Id pregunta: 4830 Año de creación de pregunta: 2002
 questions[13]= "14)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[13]= new Array();
 choices[13][0] = "B especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[13][1] = "A especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[13][2] = "Z especifica la disciplina de cola.";
 choices[13][3] = "Todas las anteriores son v&aacute;lidas.";
 answers[13] = 3;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 4830. ";
 preguntaids[13] = 4830


//  Id pregunta: 4829 Año de creación de pregunta: 2002
 questions[14]= "15)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[14]= new Array();
 choices[14][0] = "X especifica el n&uacute;mero de servidores.";
 choices[14][1] = "Y especifica la capacidad del sistema.";
 choices[14][2] = "Ninguna de las anteriores es v&aacute;lida.";
 choices[14][3] = "Las respuestas 'a' y 'b' son ciertas.";
 answers[14] = 3;
 units[14] = ['56'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 4829. ";
 preguntaids[14] = 4829


//  Id pregunta: 4444 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre SGBDs no es correcta?:";
 choices[15]= new Array();
 choices[15][0] = "La indexaci&oacute;n por palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[15][1] = "La indexaci&oacute;n por campos es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[15][2] = "Los procedimientos de b&uacute;squeda de los SGBD se basan en la tecnolog&iacute;a de los ficheros inversos";
 choices[15][3] = "La indexaci&oacute;n por cadenas de palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 answers[15] = 1;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 4444. ";
 preguntaids[15] = 4444


//  Id pregunta: 4006 Año de creación de pregunta: 2002
 questions[16]= "17)  Los distintos tipos de sintetizadores de voz existentes se pueden clasificar en:";
 choices[16]= new Array();
 choices[16][0] = "Sintetizadores articulatorios. Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 choices[16][1] = "Sintetizadores autom&aacute;ticos. Sintetizadores manuales. Sintetizadores programables";
 choices[16][2] = "Sintetizadores programables. Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 choices[16][3] = "Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 answers[16] = 0;
 units[16] = ['81'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 4006. ";
 preguntaids[16] = 4006


//  Id pregunta: 4109 Año de creación de pregunta: 2003
 questions[17]= "18)  En los a&ntilde;os cuarenta se descubri&oacute; un instrumento que ayud&oacute; notablemente al an&aacute;lisis de la voz:";
 choices[17]= new Array();
 choices[17][0] = "El espectr&oacute;grafo.";
 choices[17][1] = "El VODER.";
 choices[17][2] = "La m&aacute;quina de Wolfgang Von Kempelen.";
 choices[17][3] = "La m&aacute;quina de Krat-zenstein.";
 answers[17] = 0;
 units[17] = ['81'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 4109. ";
 preguntaids[17] = 4109


//  Id pregunta: 4050 Año de creación de pregunta: 2003
 questions[18]= "19)  La tecnolog&iacute;a denominada OCR (Optical Character Recognizer), se emplea para:";
 choices[18]= new Array();
 choices[18][0] = "Extraer de un documento electr&oacute;nico un conjunto de palabras o caracteres (descriptores) que sirvan para la representaci&oacute;n del mismo en bases de datos documentales.";
 choices[18][1] = "Analizar tramas de bit, en transmisiones a trav&eacute;s de dispositivos f&iacute;sicos de fibra &oacute;ptica (10/100/1000baseFX).";
 choices[18][2] = "Analizar la autenticidad e integridad de documentos firmados electr&oacute;nicamente.";
 choices[18][3] = "Interpretar digitalmente un documento en papel y generar un archivo electr&oacute;nico de texto con las palabras reconocidas.";
 answers[18] = 3;
 units[18] = ['81'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 4050. Junta Andaluc&iacute;a";
 preguntaids[18] = 4050


//  Id pregunta: 4167 Año de creación de pregunta: 2006
 questions[19]= "20)  Indique la afirmaci&oacute;n incorrecta:";
 choices[19]= new Array();
 choices[19][0] = "Una relaci&oacute;n est&aacute; en segunda forma normal (2FN) solamente si todos los atributos son dependientes en forma completa de la clave.";
 choices[19][1] = "Cualquier relaci&oacute;n en primera forma normal que tiene una clave compuesta, est&aacute; autom&aacute;ticamente en segunda forma normal.";
 choices[19][2] = "Una relaci&oacute;n se encuentra en tercera forma normal (EFN) si no existen transitividades entre sus atributos y si ya se encuentra en 2 FN.";
 choices[19][3] = "Para poner una relaci&oacute;n en la cuarta forma normal debe estar en 3FN y deben existir una o m&aacute;s multidependencias.";
 answers[19] = 1;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 4167. ";
 preguntaids[19] = 4167


//  Id pregunta: 4120 Año de creación de pregunta: 2003
 questions[20]= "21)  Indique la afirmaci&oacute;n verdadera:";
 choices[20]= new Array();
 choices[20][0] = "El reconocimiento de patrones se utiliza para reconocer caracteres mono-espaciados.";
 choices[20][1] = "En la comparaci&oacute;n matricial los caracteres explorados pueden entrar en un bucle de b&uacute;squeda varias veces hasta que el emparejamiento se realiza con &eacute;xito.";
 choices[20][2] = "La comparaci&oacute;n matricial escanea la forma de los caracteresm, los compara con tablas de formas y examina la organizaci&oacute;n de los bits para componer la letra o car&aacute;cter.";
 choices[20][3] = "La comparaci&oacute;n matricial ofrece mucha m&aacute;s flexibilidad que el m&eacute;todo de reconocimiento de patrones.";
 answers[20] = 1;
 units[20] = ['81'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 4120. ";
 preguntaids[20] = 4120


//  Id pregunta: 4267 Año de creación de pregunta: 2006
 questions[21]= "22)  Indicar la falsa";
 choices[21]= new Array();
 choices[21][0] = "En la comparaci&oacute;n matricial se pueden utilizar filtros digitales que aclaran la informaci&oacute;n a almacenar, para optimizar el casamiento";
 choices[21][1] = "En la comparaci&oacute;n matricial escanea la forma de los caracteres y los compara con tablas de formas";
 choices[21][2] = "En el reconocimiento por patrones escanea la forma de los caracteres y los compara con tablas de formas";
 choices[21][3] = "El reconocimiento por patrones ofrece m&aacute;s flexibilidad que la comparaci&oacute;n matricial";
 answers[21] = 1;
 units[21] = ['81'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 4267. ";
 preguntaids[21] = 4267


//  Id pregunta: 4268 Año de creación de pregunta: 2006
 questions[22]= "23)  Una Base de Datos documental";
 choices[22]= new Array();
 choices[22][0] = "presenta un modelo de recuperaci&oacute;n de informaci&oacute;n probabil&iacute;stica";
 choices[22][1] = "presenta un &iacute;ndice de incertidumbre en la respuesta";
 choices[22][2] = "las dos anteriores";
 choices[22][3] = "ninguna de las anteriores";
 answers[22] = 2;
 units[22] = ['61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 4268. ";
 preguntaids[22] = 4268


//  Id pregunta: 4040 Año de creación de pregunta: 2003
 questions[23]= "24)  &iquest; Cu&aacute;l no es un formato de audio ?";
 choices[23]= new Array();
 choices[23][0] = "WMA";
 choices[23][1] = "WAV";
 choices[23][2] = "OGG";
 choices[23][3] = "PNG";
 answers[23] = 3;
 units[23] = ['81'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 4040. ";
 preguntaids[23] = 4040


//  Id pregunta: 4000 Año de creación de pregunta: 2002
 questions[24]= "25)  La codificaci&oacute;n progresiva es una t&eacute;cnica usada en la comprensi&oacute;n de im&aacute;genes basada en:";
 choices[24]= new Array();
 choices[24][0] = "La proximidad espacial (la poca variaci&oacute;n entre pixels contiguos)";
 choices[24][1] = "La proximidad temporal (la poca variaci&oacute;n entre im&aacute;genes temporalmente consecutivas)";
 choices[24][2] = "La relevancia de la informaci&oacute;n";
 choices[24][3] = "T&eacute;cnicas aleatorias";
 answers[24] = 2;
 units[24] = ['80'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 4000. ";
 preguntaids[24] = 4000


//  Id pregunta: 4119 Año de creación de pregunta: 2003
 questions[25]= "26)  Indique la afirmaci&oacute;n verdadera:";
 choices[25]= new Array();
 choices[25][0] = "La informaci&oacute;n recogida por la c&eacute;lula fotoel&eacute;ctrica del esc&aacute;ner es de tipo anal&oacute;gica.";
 choices[25][1] = "En el caso de los esc&aacute;neres de color, el sistema de detecci&oacute;n consiste en separar los componentes de color en sus valores b&aacute;sicos: rojo, verde y azul.";
 choices[25][2] = "La exploraci&oacute;n se realiza mediante c&eacute;lulas fotoel&eacute;ctricas o fotodiodos y el resultado es una informaci&oacute;n que hay que digitalizar antes de que se pueda transmitir al ordenador, que es capaz de procesarla mediante sistemas gr&aacute;ficos y software especial.";
 choices[25][3] = "Todas las anteriores.";
 answers[25] = 3;
 units[25] = ['80'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 4119. ";
 preguntaids[25] = 4119


//  Id pregunta: 4264 Año de creación de pregunta: 2006
 questions[26]= "27)  A los sintetizadores de formantes tambi&eacute;n se les conoce como";
 choices[26]= new Array();
 choices[26][0] = "sintetizadores articulatorios";
 choices[26][1] = "sintetizadores por al&oacute;fonos";
 choices[26][2] = "sintetizadores por reglas";
 choices[26][3] = "sintetizadores por concatenaci&oacute;n controlada";
 answers[26] = 2;
 units[26] = ['81'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 4264. ";
 preguntaids[26] = 4264


//  Id pregunta: 4410 Año de creación de pregunta: 2002
 questions[27]= "28)  En ASP, &iquest;qu&eacute; objeto se utiliza para compartir informaci&oacute;n entre todos los usuarios de una aplicaci&oacute;n?:";
 choices[27]= new Array();
 choices[27][0] = "Application";
 choices[27][1] = "Request";
 choices[27][2] = "Server";
 choices[27][3] = "Session";
 answers[27] = 0;
 units[27] = ['62'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 4410. ";
 preguntaids[27] = 4410


//  Id pregunta: 4826 Año de creación de pregunta: 2002
 questions[28]= "29)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[28]= new Array();
 choices[28][0] = "B especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[28][1] = "A especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[28][2] = "Las dos anteriores son ciertas.";
 choices[28][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[28] = 2;
 units[28] = ['56'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 4826. ";
 preguntaids[28] = 4826


//  Id pregunta: 4258 Año de creación de pregunta: 2006
 questions[29]= "30)  ECW";
 choices[29]= new Array();
 choices[29][0] = "es el acr&oacute;nimo de Enhanced Quality Wavelet";
 choices[29][1] = "es un m&eacute;todo de compresi&oacute;n sin p&eacute;rdidas";
 choices[29][2] = "es un m&eacute;todo de compresi&oacute;n con p&eacute;rdidas";
 choices[29][3] = "se emplea preferentemente para la compresi&oacute;n de voz";
 answers[29] = 2;
 units[29] = ['80'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 4258. ";
 preguntaids[29] = 4258


//  Id pregunta: 4166 Año de creación de pregunta: 2006
 questions[30]= "31)  &iquest;Cuando decimos que una entidad est&aacute; en 3FN?";
 choices[30]= new Array();
 choices[30][0] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave tiene una dependencia funcional completa de la clave.";
 choices[30][1] = "Si est&aacute; en 2FN y no contiene grupos repetitivos.";
 choices[30][2] = "Si est&aacute; en 2FN y no contiene atributos multivaluados.";
 choices[30][3] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave no depende transitivamente de dicha clave.";
 answers[30] = 3;
 units[30] = ['61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 4166. ";
 preguntaids[30] = 4166


//  Id pregunta: 4104 Año de creación de pregunta: 2003
 questions[31]= "32)  El n&uacute;mero de bits por p&iacute;xel se define como:";
 choices[31]= new Array();
 choices[31][0] = "Profundidad del p&iacute;xel.";
 choices[31][1] = "Flexibilidad.";
 choices[31][2] = "Diafragma digital.";
 choices[31][3] = "ECW.";
 answers[31] = 0;
 units[31] = ['80'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 4104. ";
 preguntaids[31] = 4104


//  Id pregunta: 4102 Año de creación de pregunta: 2003
 questions[32]= "33)  El nivel ac&uacute;stico:";
 choices[32]= new Array();
 choices[32][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamen-tal, los formantes, las transiciones, etc.";
 choices[32][1] = "Determina los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[32][2] = "Tambi&eacute;n llamado fon&eacute;tico distintivo, determina el n&uacute;mero preciso de sonidos con valor distinto.";
 choices[32][3] = "Empieza la abstracci&oacute;n y en se aplican reglas gramaticales al conjunto de sonidos a identificar.";
 answers[32] = 0;
 units[32] = ['81'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 4102. ";
 preguntaids[32] = 4102


//  Id pregunta: 4265 Año de creación de pregunta: 2006
 questions[33]= "34)  Entre los factores de complejidad del Habla no se encuentra";
 choices[33]= new Array();
 choices[33][0] = "el locutor";
 choices[33][1] = "el vocabulario";
 choices[33][2] = "la Gram&aacute;tica";
 choices[33][3] = "todos los anteriores son factores de complejidad del Habla";
 answers[33] = 3;
 units[33] = ['81'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 4265. ";
 preguntaids[33] = 4265


//  Id pregunta: 4300 Año de creación de pregunta: 2003
 questions[34]= "35)  El tiempo de respuesta en teor&iacute;a de colas es:";
 choices[34]= new Array();
 choices[34][0] = "Tiempo de servicio de un dispositivo para un usuario";
 choices[34][1] = "Tiempo de espera mas tiempo de servicio";
 choices[34][2] = "Tiempo que el usuario espera en la cola atendiendo a otros usuarios hasta que le toca el turno";
 choices[34][3] = "Tiempo en que un dispositivo est&aacute; ocupado en atender al sistema operativo";
 answers[34] = 1;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 4300. ";
 preguntaids[34] = 4300


//  Id pregunta: 4139 Año de creación de pregunta: 2003
 questions[35]= "36)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[35]= new Array();
 choices[35][0] = "Los avances m&aacute;s recientes en la s&iacute;ntesis del habla han ido por el camino de una parametrizaci&oacute;n de la se&ntilde;al original para suprimir la informaci&oacute;n redundante contenida en las ondas ac&uacute;sticas.";
 choices[35][1] = "En el nivel fon&eacute;tico distintivo se determinan los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[35][2] = "En el nivel fon&eacute;tico se analizan las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[35][3] = "El estudio en el dominio de la frecuencia ha conducido al an&aacute;lisis del habla por transformadas de Fourier y por bancos de filtros en paralelo.";
 answers[35] = 3;
 units[35] = ['81'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 4139. ";
 preguntaids[35] = 4139


//  Id pregunta: 4428 Año de creación de pregunta: 2002
 questions[36]= "37)  Los objetos que intervienen en la capa de aplicaci&oacute;n se denominan:";
 choices[36]= new Array();
 choices[36][0] = "Objetos de aplicaci&oacute;n";
 choices[36][1] = "Objetos de negocio";
 choices[36][2] = "Objetos distribuidos";
 choices[36][3] = "Objetos de servidor";
 answers[36] = 1;
 units[36] = ['62'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 4428. ";
 preguntaids[36] = 4428


//  Id pregunta: 4419 Año de creación de pregunta: 2002
 questions[37]= "38)  La arquitectura 'fault tolerant' se caracteriza por :";
 choices[37]= new Array();
 choices[37][0] = "La ejecuci&oacute;n de una instrucci&oacute;n se divide en fases";
 choices[37][1] = "Las diferentes funciones del sistema se encuentran distribuidas en procesadores especializados";
 choices[37][2] = "Existe suficiente redundancia para asegurar un funcionamiento correcto en caso de fallo";
 choices[37][3] = "Todos los componentes del ordenador intercambian datos compartiendo los buses";
 answers[37] = 2;
 units[37] = ['49'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 4419. ";
 preguntaids[37] = 4419


//  Id pregunta: 4661 Año de creación de pregunta: 2002
 questions[38]= "39)  Cuando se emplean tablas en HTML, &iquest;cu&aacute;l es el comando que permite definir nuevas filas de una tabla?:";
 choices[38]= new Array();
 choices[38][0] = "&lt;TD&gt;&hellip;&lt;/TD&gt;";
 choices[38][1] = "&lt;TR&gt;&hellip;&lt;/TR&gt;";
 choices[38][2] = "&lt;TH&gt;&hellip;&lt;/TH&gt;";
 choices[38][3] = "&lt;TF&gt;&hellip;&lt;/TF&gt;";
 answers[38] = 1;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 4661. ";
 preguntaids[38] = 4661


//  Id pregunta: 4171 Año de creación de pregunta: 2006
 questions[39]= "40)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[39]= new Array();
 choices[39][0] = "No tiene grupos repetitivos";
 choices[39][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[39][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[39][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[39] = 1;
 units[39] = ['61'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 4171. ";
 preguntaids[39] = 4171


//  Id pregunta: 4262 Año de creación de pregunta: 2006
 questions[40]= "41)  &iquest;El m&eacute;todo de interpolaci&oacute;n por el vecino m&aacute;s pr&oacute;ximo se emplea en?";
 choices[40]= new Array();
 choices[40][0] = "la correcci&oacute;n geom&eacute;trica";
 choices[40][1] = "la correcci&oacute;n radiom&eacute;trica";
 choices[40][2] = "el realce geom&eacute;trico";
 choices[40][3] = "el realce radiom&eacute;trico";
 answers[40] = 0;
 units[40] = ['80'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 4262. ";
 preguntaids[40] = 4262


//  Id pregunta: 4136 Año de creación de pregunta: 2003
 questions[41]= "42)  Rango din&aacute;mico de una imagen es:";
 choices[41]= new Array();
 choices[41][0] = "El tama&ntilde;o de la imagen a escanear en sus dos dimensiones (ancho y alto).";
 choices[41][1] = "El cambio de resoluci&oacute;n de la imagen al ampliar o reducir.";
 choices[41][2] = "El n&uacute;mero m&aacute;ximo de niveles de gris por pixel que ser&iacute;an susceptibles de ser definidos entre el blanco y el negro.";
 choices[41][3] = "Tama&ntilde;o m&aacute;ximo de la imagen producida por los traductores del formato EPS (Postscript) a mapa de bits.";
 answers[41] = 2;
 units[41] = ['80'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 4136. ";
 preguntaids[41] = 4136


//  Id pregunta: 4838 Año de creación de pregunta: 2002
 questions[42]= "43)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[42]= new Array();
 choices[42][0] = "Services Oriented Architecture Protocol";
 choices[42][1] = "Simple Object Access Protocol";
 choices[42][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[42][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[42] = 1;
 units[42] = ['74'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 4838. ";
 preguntaids[42] = 4838


//  Id pregunta: 4430 Año de creación de pregunta: 2002
 questions[43]= "44)  Los web services:";
 choices[43]= new Array();
 choices[43][0] = "Permiten la ejecuci&oacute;n de procedimientos remotos y devoluci&oacute;n de los resultados a trav&eacute;s de redes IP, basandose en el protocolo HTTP";
 choices[43][1] = "Permiten a los usuarios devolver cualquier tipo de informaci&oacute;n con un navegador y el protocolo HTTP";
 choices[43][2] = "Son una mera especificaci&oacute;n y a&uacute;n no se han puesto en pr&aacute;ctica";
 choices[43][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[43] = 0;
 units[43] = ['55'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 4430. ";
 preguntaids[43] = 4430


//  Id pregunta: 4928 Año de creación de pregunta: 2002
 questions[44]= "45)  UDDI:";
 choices[44]= new Array();
 choices[44][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[44][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[44][2] = "Significa User Definition Domain  Interface";
 choices[44][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[44] = 3;
 units[44] = ['74'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 4928. ";
 preguntaids[44] = 4928


//  Id pregunta: 4004 Año de creación de pregunta: 2002
 questions[45]= "46)  Los algoritmos de comprensi&oacute;n LZW son del tipo:";
 choices[45]= new Array();
 choices[45][0] = "Basados en diccionario";
 choices[45][1] = "RLE";
 choices[45][2] = "HUFFMAN";
 choices[45][3] = "JPEG";
 answers[45] = 0;
 units[45] = ['80'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 4004. ";
 preguntaids[45] = 4004


//  Id pregunta: 4138 Año de creación de pregunta: 2003
 questions[46]= "47)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[46]= new Array();
 choices[46][0] = "Un filtro paso bajo es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[46][1] = "La ecualizaci&oacute;n del histograma es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[46][2] = "El &quot;filtro de mediana&quot; elige el p&iacute;xel siguiente al central de los valores de la ventana.";
 choices[46][3] = "El filtro paso alto suaviza la imagen.";
 answers[46] = 1;
 units[46] = ['80'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 4138. ";
 preguntaids[46] = 4138


//  Id pregunta: 4135 Año de creación de pregunta: 2003
 questions[47]= "48)  Principal inconveniente del teletexto:";
 choices[47]= new Array();
 choices[47][0] = "El juego de colores es reducido.";
 choices[47][1] = "Carece de interactividad real.";
 choices[47][2] = "La resoluci&oacute;n gr&aacute;fica no es buena.";
 choices[47][3] = "Necesita un decodificador caro y voluminoso.";
 answers[47] = 1;
 units[47] = ['80'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 4135. ";
 preguntaids[47] = 4135


//  Id pregunta: 4422 Año de creación de pregunta: 2005
 questions[48]= "49)  La disponibilidad de un sistema se define como:";
 choices[48]= new Array();
 choices[48][0] = "La proporci&oacute;n de tiempo en la que es realmente utilizado";
 choices[48][1] = "El cociente entre el tiempo medio de reparaci&oacute;n y el tiempo medio entre fallos";
 choices[48][2] = "El porcentaje de tiempo que el sistema est&aacute; disponible";
 choices[48][3] = "La probabilidad de que un sistema falle en un instante dado";
 answers[48] = 2;
 units[48] = ['49'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 4422. Definici&oacute;n dada en Magerit V2";
 preguntaids[48] = 4422


//  Id pregunta: 4259 Año de creación de pregunta: 2006
 questions[49]= "50)  PDF se diferencia de Postscript en que";
 choices[49]= new Array();
 choices[49][0] = "PDF no es un lenguaje , es un formato de archivo";
 choices[49][1] = "No se diferencian; ambos son lenguajes y formatos de archivo";
 choices[49][2] = "Postscript es independiente de la plataforma";
 choices[49][3] = "Postscript permite modificaciones parciales (editabilidad)";
 answers[49] = 0;
 units[49] = ['80'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 4259. ";
 preguntaids[49] = 4259


//  Id pregunta: 4266 Año de creación de pregunta: 2006
 questions[50]= "51)  &iquest;Qu&eacute; sistema de parametr&iacute;zaci&oacute;n no se emplea en el reconocimiento de voz?";
 choices[50]= new Array();
 choices[50][0] = "por fonemas";
 choices[50][1] = "por morfemas";
 choices[50][2] = "por difonemas";
 choices[50][3] = "por semis&iacute;labas";
 answers[50] = 1;
 units[50] = ['81'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 4266. ";
 preguntaids[50] = 4266


//  Id pregunta: 4391 Año de creación de pregunta: 2002
 questions[51]= "52)  ASP significa:";
 choices[51]= new Array();
 choices[51][0] = "Application Service Provider";
 choices[51][1] = "Active Server Pages";
 choices[51][2] = "Las 2 respuestas anteriores son correctas";
 choices[51][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[51] = 2;
 units[51] = ['62'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 4391. ";
 preguntaids[51] = 4391


//  Id pregunta: 4014 Año de creación de pregunta: 2002
 questions[52]= "53)  Un programa de reconocimiento de voz:";
 choices[52]= new Array();
 choices[52][0] = "Es independiente de la persona que lo use";
 choices[52][1] = "Necesita un entrenamiento para adaptarse a la persona que lo use";
 choices[52][2] = "Entiende cualquier vocabulario e idioma una vez que es configurado, ya que s&oacute;lo se basa en adaptaci&oacute;n al tono y altura de la voz que recibe";
 choices[52][3] = "Todo lo anterior es falso";
 answers[52] = 1;
 units[52] = ['81'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 4014. ";
 preguntaids[52] = 4014


//  Id pregunta: 4263 Año de creación de pregunta: 2006
 questions[53]= "54)  El nivel que determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras es el";
 choices[53]= new Array();
 choices[53][0] = "fonol&oacute;gico";
 choices[53][1] = "pros&oacute;dico";
 choices[53][2] = "fon&eacute;tico";
 choices[53][3] = "ninguno de los anteriores";
 answers[53] = 1;
 units[53] = ['81'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 4263. ";
 preguntaids[53] = 4263


//  Id pregunta: 4395 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de scripting?:";
 choices[54]= new Array();
 choices[54][0] = "JavaScript";
 choices[54][1] = "Jscript";
 choices[54][2] = "VBScript";
 choices[54][3] = "XMLScript";
 answers[54] = 3;
 units[54] = ['62'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 4395. ";
 preguntaids[54] = 4395


//  Id pregunta: 4934 Año de creación de pregunta: 2002
 questions[55]= "56)  Un control Active X:";
 choices[55]= new Array();
 choices[55][0] = "S&oacute;lo se pueden escribir en Java";
 choices[55][1] = "S&oacute;lo se pueden ejecutar en sistemas Windows";
 choices[55][2] = "S&oacute;lo pueden acceder a funciones dentro del contenedor en el que se ejecutan";
 choices[55][3] = "S&oacute;lo se pueden escribir en C/C++";
 answers[55] = 1;
 units[55] = ['63'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 4934. ";
 preguntaids[55] = 4934


//  Id pregunta: 4303 Año de creación de pregunta: 2004
 questions[56]= "57)  En relaci&oacute;n a los servicios web se&ntilde;ale la opci&oacute;n incorrecta";
 choices[56]= new Array();
 choices[56][0] = "SOAP (Simple Object access Protocol &oacute; Services-Oriented Architecture Protocol) es el protocolo de comunicaciones para los Servicios Web";
 choices[56][1] = "WSML (Web Service Markup Language) describe el interfaz externo de un Servicio Web y c&oacute;mo utilizarlo";
 choices[56][2] = "UDDI (Universal Discovery, Descripcion and Integration) es un protocolo para registros basados en web que contiene informaci&oacute;n acerca de servicios. Un registro UDDI es como el list&iacute;n de los servicios.";
 choices[56][3] = "Un Servicio Web se describe con un archivo WSDL, se registra en UDDI y se muestra en web a trav&eacute;s de SOAP.";
 answers[56] = 1;
 units[56] = ['55'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 4303. Similar a examen TIC SS A 2003";
 preguntaids[56] = 4303


//  Id pregunta: 4001 Año de creación de pregunta: 2002
 questions[57]= "58)  La denominada comparaci&oacute;n matricial como m&eacute;todo de reconocimiento de caracteres en OCR se utiliza para:";
 choices[57]= new Array();
 choices[57][0] = "Reconocer caracteres monoespaciados, comparando los datos escaneados contra una plantilla de caracteres est&aacute;ndar";
 choices[57][1] = "Escanea la forma de los caracteres, compar&aacute;ndolos con tablas de formas, examinando la organizaci&oacute;n de los bits y componiendo la letra o car&aacute;cter";
 choices[57][2] = "No son correctas ni &lsquo;a&rsquo; ni &lsquo;b&rsquo;";
 choices[57][3] = "Son correctas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[57] = 0;
 units[57] = ['81'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 4001. ";
 preguntaids[57] = 4001


//  Id pregunta: 4816 Año de creación de pregunta: 2002
 questions[58]= "59)  En la tecnolog&iacute;a de web-services, una de las afirmaciones siguientes no es correcta:";
 choices[58]= new Array();
 choices[58][0] = "SOAP deriva de XML-RPC";
 choices[58][1] = "Se emplea WSDL (Web Service Definition Language) como lenguaje de descripci&oacute;n de web services por sus proveedores";
 choices[58][2] = "UDDI (Universal Description Discovery and Integration) permite la publicaci&oacute;n y localizaci&oacute;n de los servicios web";
 choices[58][3] = "WSSL (Web Service Specification Language) se usa como lenguaje de especificaci&oacute;n de los servicios web";
 answers[58] = 3;
 units[58] = ['55'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 4816. ";
 preguntaids[58] = 4816


//  Id pregunta: 4008 Año de creación de pregunta: 2002
 questions[59]= "60)  Los m&eacute;todos de compresi&oacute;n de im&aacute;genes basados en la codificaci&oacute;n del dominio transformado (transformada de Fourier, coseno discreta, etc):";
 choices[59]= new Array();
 choices[59][0] = "Son m&eacute;todos de compresi&oacute;n sin p&eacute;rdidas";
 choices[59][1] = "Son m&eacute;todos de compresi&oacute;n con p&eacute;rdidas";
 choices[59][2] = "La codificaci&oacute;n del dominio transformado no tiene aplicaci&oacute;n para la compresi&oacute;n de im&aacute;genes";
 choices[59][3] = "Se conocen tambi&eacute;n como codificaci&oacute;n de Huffman";
 answers[59] = 1;
 units[59] = ['80'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 4008. ";
 preguntaids[59] = 4008


//  Id pregunta: 4002 Año de creación de pregunta: 2002
 questions[60]= "61)  La resoluci&oacute;n de las c&aacute;maras fotogr&aacute;ficas digitales se mide com&uacute;nmente en:";
 choices[60]= new Array();
 choices[60][0] = "Megabytes";
 choices[60][1] = "Megabits";
 choices[60][2] = "Megahertzios";
 choices[60][3] = "Megap&iacute;xeles";
 answers[60] = 3;
 units[60] = ['80'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 4002. ";
 preguntaids[60] = 4002


//  Id pregunta: 4147 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;l de estos es un tipo de fichero de sonido?";
 choices[61]= new Array();
 choices[61][0] = "TIFF";
 choices[61][1] = "PNG";
 choices[61][2] = "VRML";
 choices[61][3] = "MIDI";
 answers[61] = 3;
 units[61] = ['81'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 4147. ";
 preguntaids[61] = 4147


//  Id pregunta: 4131 Año de creación de pregunta: 2003
 questions[62]= "63)  Los sistemas de recuperaci&oacute;n de informaci&oacute;n llamados de &quot;Lenguaje natural&quot; se basan en la t&eacute;cnica:";
 choices[62]= new Array();
 choices[62][0] = "Hojeo-ojeo.";
 choices[62][1] = "Booleana.";
 choices[62][2] = "Retroalimentaci&oacute;n.";
 choices[62][3] = "De &iacute;ndices invertidos.";
 answers[62] = 3;
 units[62] = ['81'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 4131. ";
 preguntaids[62] = 4131


//  Id pregunta: 4015 Año de creación de pregunta: 2002
 questions[63]= "64)  Una m&aacute;scara en tratamiento digital de im&aacute;genes es:";
 choices[63]= new Array();
 choices[63][0] = "Una matriz num&eacute;rica que se usa para ir haciendo operaciones aritm&eacute;ticas sobre cada uno de los distintos p&iacute;xeles de la imagen, provocando un cambio en los valores de los p&iacute;xeles de la imagen tratada";
 choices[63][1] = "Una zona de la imagen donde no var&iacute;an sus propiedades de color, brillo ni saturaci&oacute;n";
 choices[63][2] = "Una herramienta para poder colorear por capas en los programas ofim&aacute;ticos de tratamiento de im&aacute;genes";
 choices[63][3] = "Nada de lo anterior";
 answers[63] = 0;
 units[63] = ['80'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 4015. ";
 preguntaids[63] = 4015


//  Id pregunta: 4103 Año de creación de pregunta: 2003
 questions[64]= "65)  El nivel l&eacute;xico-sint&aacute;ctico:";
 choices[64]= new Array();
 choices[64][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[64][1] = "Llega a la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, as&iacute; como del contexto en el que discurre el di&aacute;l";
 choices[64][2] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras.";
 choices[64][3] = "Extrae los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos.";
 answers[64] = 3;
 units[64] = ['81'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 4103. ";
 preguntaids[64] = 4103


//  Id pregunta: 4336 Año de creación de pregunta: 2004
 questions[65]= "66)  El componente de servidor J2EE de uso m&aacute;s apropiado para mantener una conversaci&oacute;n con un cliente es un EJB del tipo ...";
 choices[65]= new Array();
 choices[65][0] = "Stateless Session Bean";
 choices[65][1] = "Message Driven Bean";
 choices[65][2] = "Entity Bean con persistencia BMP";
 choices[65][3] = "Stateful Session Bean";
 answers[65] = 3;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 4336. ";
 preguntaids[65] = 4336


//  Id pregunta: 4931 Año de creación de pregunta: 2002
 questions[66]= "67)  Un applet de Java es:";
 choices[66]= new Array();
 choices[66][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[66][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[66][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[66][3] = "Un programa Java que accede a una base de datos relacional";
 answers[66] = 2;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 4931. ";
 preguntaids[66] = 4931


//  Id pregunta: 4315 Año de creación de pregunta: 2004
 questions[67]= "68)  La plataforma Java que se utiliza para el desarrollo de aplicaciones para PDA es:";
 choices[67]= new Array();
 choices[67][0] = "Micro Edition";
 choices[67][1] = "Standard Edition";
 choices[67][2] = "Enterprise Edition";
 choices[67][3] = "Cualquiera de ellas indistintamente dada su portabilidad";
 answers[67] = 0;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 4315. Similar a examen TIC MAP A 2004";
 preguntaids[67] = 4315


//  Id pregunta: 4388 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Qu&eacute; son dentro del entorno de aplicaciones basadas en arquitectura Internet los plug-ins?:";
 choices[68]= new Array();
 choices[68][0] = "Programas que desarrolla el usuario para personalizar el acceso a la informaci&oacute;n del servidor";
 choices[68][1] = "Programas que se agregan al navegador e interact&uacute;an con &eacute;l, con las p&aacute;ginas web y con los recursos locales";
 choices[68][2] = "Posibilidad de a&ntilde;adir nuevo hardware a trav&eacute;s del navegador de manera autom&aacute;tica";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = 1;
 units[68] = ['62'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 4388. ";
 preguntaids[68] = 4388


//  Id pregunta: 4261 Año de creación de pregunta: 2006
 questions[69]= "70)  &iquest;Qu&eacute; formato de compresi&oacute;n no tiene p&eacute;rdidas?";
 choices[69]= new Array();
 choices[69][0] = "JPEG";
 choices[69][1] = "ECW";
 choices[69][2] = "Mrsid";
 choices[69][3] = "RLE";
 answers[69] = 3;
 units[69] = ['80'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 4261. ";
 preguntaids[69] = 4261


//  Id pregunta: 4108 Año de creación de pregunta: 2003
 questions[70]= "71)  En im&aacute;genes multiespectrales o multitemporales se emplean las operaciones aritm&eacute;ticas para:";
 choices[70]= new Array();
 choices[70][0] = "Eliminar ruidos.";
 choices[70][1] = "Detectar cambios.";
 choices[70][2] = "Todas las anteriores.";
 choices[70][3] = "Ninguna de las anteriores.";
 answers[70] = 2;
 units[70] = ['80'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 4108. ";
 preguntaids[70] = 4108


//  Id pregunta: 4011 Año de creación de pregunta: 2002
 questions[71]= "72)  Los sintetizadores de voz utilizan dos m&eacute;todos para sintetizar las palabras. Uno de ellos es:";
 choices[71]= new Array();
 choices[71][0] = "S&iacute;ntesis constructiva";
 choices[71][1] = "S&iacute;ntesis acumulativa";
 choices[71][2] = "S&iacute;ntesis simulativa";
 choices[71][3] = "S&iacute;ntesis por patrones";
 answers[71] = 0;
 units[71] = ['81'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 4011. ";
 preguntaids[71] = 4011


//  Id pregunta: 4107 Año de creación de pregunta: 2003
 questions[72]= "73)  En im&aacute;genes multiespectrales el an&aacute;lisis de componentes principales sirve para:";
 choices[72]= new Array();
 choices[72][0] = "Eliminar ruidos.";
 choices[72][1] = "Eliminaci&oacute;n de informaci&oacute;n redundante.";
 choices[72][2] = "Enmascaramiento o reducci&oacute;n de ciertos efectos atmosf&eacute;ricos o topogr&aacute;ficos.";
 choices[72][3] = "Poder superponer im&aacute;genes de cara a su posterior tratamiento.";
 answers[72] = 1;
 units[72] = ['80'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 4107. ";
 preguntaids[72] = 4107


//  Id pregunta: 4851 Año de creación de pregunta: 2002
 questions[73]= "74)  En una arquitectura de tres capas donde se establecen las reglas del negocio, se corresponde a la capa de:";
 choices[73]= new Array();
 choices[73][0] = "Presentaci&oacute;n";
 choices[73][1] = "L&oacute;gica de negocio";
 choices[73][2] = "Datos";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = 1;
 units[73] = ['62'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 4851. ";
 preguntaids[73] = 4851


//  Id pregunta: 4783 Año de creación de pregunta: 2002
 questions[74]= "75)  En el modelado de tr&aacute;fico basado en LIFO se usan los siguientes modelos:";
 choices[74]= new Array();
 choices[74][0] = "M/M/1.";
 choices[74][1] = "M/M/1/1.";
 choices[74][2] = "M/G/1.";
 choices[74][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[74] = 3;
 units[74] = ['56'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 4783. ";
 preguntaids[74] = 4783


