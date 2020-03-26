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
//  Id pregunta: 3125 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas no est&aacute; relacionada con los interfaces de usuario?:";
 choices[0]= new Array();
 choices[0][0] = "Free Windows";
 choices[0][1] = "WYSIWYG";
 choices[0][2] = "X Windows";
 choices[0][3] = "Motif";
 answers[0] = 0;
 units[0] = ['52'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3125. ";
 preguntaids[0] = 3125


//  Id pregunta: 3051 Año de creación de pregunta: 2002
 questions[1]= "2)  Se&ntilde;ale la respuesta falsa. Una unidad de control cableada:";
 choices[1]= new Array();
 choices[1][0] = "Es m&aacute;s r&aacute;pida de lo normal";
 choices[1][1] = "Es muy cara de dise&ntilde;ar";
 choices[1][2] = "Es reprogramable f&aacute;cilmente";
 choices[1][3] = "Ninguna de las anteriores respuestas es falsa";
 answers[1] = 2;
 units[1] = ['52'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3051. ";
 preguntaids[1] = 3051


//  Id pregunta: 6527 Año de creación de pregunta: 2003
 questions[2]= "3)  Se&ntilde;ale cu&aacute;l de las siguientes opciones es correcta:";
 choices[2]= new Array();
 choices[2][0] = "El bus ISA es posterior al bus PCI";
 choices[2][1] = "El bus EISA es anterior al bus ISA";
 choices[2][2] = "El bus PCI es anterior al bus AGP";
 choices[2][3] = "El bus USB es posterior al bus AGP";
 answers[2] = 2;
 units[2] = ['52'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6527. ";
 preguntaids[2] = 6527


//  Id pregunta: 3224 Año de creación de pregunta: 2003
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes bloques b&aacute;sicos no forma parte de la Unidad de Control?:";
 choices[3]= new Array();
 choices[3][0] = "Registro de memorizaci&oacute;n del estado presente.";
 choices[3][1] = "Bloque de calculo del pr&oacute;ximo estado.";
 choices[3][2] = "Bloque de calculo de la salida (micro&oacute;rdenes enviadas a la unidad de procesamiento).";
 choices[3][3] = "Bloque temporizador.";
 answers[3] = 3;
 units[3] = ['52'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3224. Junta Andaluc&iacute;a";
 preguntaids[3] = 3224


//  Id pregunta: 3226 Año de creación de pregunta: 2003
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; al margen de la teor&iacute;a de la conmutaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Obtener los circuitos l&oacute;gicos que representan a las diferentes funciones booleanas.";
 choices[4][1] = "Obtener el circuito de coste m&iacute;nimo.";
 choices[4][2] = "Obtener en un tiempo aceptable un circuito que reproduzca la funci&oacute;n booleana adecuada.";
 choices[4][3] = "Dise&ntilde;ar los circuitos que permitan la transmisi&oacute;n de los datos hasta un receptor situado a una cierta distancia.";
 answers[4] = 3;
 units[4] = ['52'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3226. Junta Andaluc&iacute;a";
 preguntaids[4] = 3226


//  Id pregunta: 3134 Año de creación de pregunta: 2002
 questions[5]= "6)  ISA, PCI, AGP, IDE, PCMCIA&hellip;, son:";
 choices[5]= new Array();
 choices[5][0] = "buses internos";
 choices[5][1] = "buses externos";
 choices[5][2] = "organismos de estandarizaci&oacute;n";
 choices[5][3] = "est&aacute;ndares de almacenamiento";
 answers[5] = 0;
 units[5] = ['52'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3134. ";
 preguntaids[5] = 3134


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[6]= "7)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Infrastructure as a Service (IaaS)";
 choices[6][1] = "Platform as a Service (PaaS)";
 choices[6][2] = "Software as a Service (SaaS)";
 choices[6][3] = "Application as a Service (AaaS)";
 answers[6] = 1;
 units[6] = ['52'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 646. AGE A1 2015";
 preguntaids[6] = 646


//  Id pregunta: 3121 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta al referirnos a los dos tipos de interfaces existentes?:";
 choices[7]= new Array();
 choices[7][0] = "La utilizaci&oacute;n diaria de la interfaz basada en comandos es m&aacute;s &aacute;gil que la basada en men&uacute;, pero su aprendizaje es m&aacute;s costoso";
 choices[7][1] = "A medida que el usuario va ganando destreza la interfaz basada en men&uacute; tiende a hacerse tediosa debido al elevado n&uacute;mero de opciones y funciones que proporcionan";
 choices[7][2] = "Con la interfaz basada en men&uacute; el usuario tiene la continua sensaci&oacute;n de sentirse guiado";
 choices[7][3] = "La interfaz basada en comando es m&aacute;s intuitiva que la basada en men&uacute;";
 answers[7] = 3;
 units[7] = ['52'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3121. ";
 preguntaids[7] = 3121


//  Id pregunta: 3109 Año de creación de pregunta: 2002
 questions[8]= "9)  Uno de los conectores mas utilizados en inform&aacute;tica es el conector RJ45. &iquest;Cu&aacute;ntos contactos tiene?:";
 choices[8]= new Array();
 choices[8][0] = "4";
 choices[8][1] = "6";
 choices[8][2] = "8";
 choices[8][3] = "15";
 answers[8] = 2;
 units[8] = ['52'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3109. ";
 preguntaids[8] = 3109


//  Id pregunta: 2954 Año de creación de pregunta: 2002
 questions[9]= "10)  La t&eacute;cnica o tecnolog&iacute;a consistente en dise&ntilde;ar dispositivos microelectr&oacute;nicos de peque&ntilde;&iacute;simo tama&ntilde;o para, por ejemplo, introducirlos en el cuerpo humano e imitar el comportamiento de sus c&eacute;lulas, se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Tecnolog&iacute;a milim&eacute;trica";
 choices[9][1] = "Microtecnolog&iacute;a";
 choices[9][2] = "Microb&oacute;tica";
 choices[9][3] = "Nanotecnolog&iacute;a";
 answers[9] = 3;
 units[9] = ['52'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2954. ";
 preguntaids[9] = 2954


//  Id pregunta: 2957 Año de creación de pregunta: 2002
 questions[10]= "11)  La Unidad de Control (UC) puede construirse con diferentes m&eacute;todos:";
 choices[10]= new Array();
 choices[10][0] = "L&oacute;gica cableada, se construye mediante puertas l&oacute;gicas y es m&aacute;s r&aacute;pida que la l&oacute;gica programada";
 choices[10][1] = "La UC microprogramada se suele utilizar en ordenadores de tama&ntilde;o medio, en los grandes es demasiado lenta";
 choices[10][2] = "La microprogramaci&oacute;n permite introducir instrucciones complejas, pero las modificaciones y correcciones son dif&iacute;ciles de implementar";
 choices[10][3] = "El dise&ntilde;o en microprogramaci&oacute;n es m&aacute;s laborioso y costoso";
 answers[10] = 1;
 units[10] = ['52'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2957. ";
 preguntaids[10] = 2957


//  Id pregunta: 3101 Año de creación de pregunta: 2002
 questions[11]= "12)  Una memoria EEPROM:";
 choices[11]= new Array();
 choices[11][0] = "Podemos programarla una &uacute;nica vez, s&oacute;lo cuando est&aacute; nueva";
 choices[11][1] = "Podemos reprogramarla tras borrarla el&eacute;ctricamente";
 choices[11][2] = "Podemos reprogramarla, tras borrarla con rayos UV";
 choices[11][3] = "Ninguna de las anteriores es correcta";
 answers[11] = 1;
 units[11] = ['52'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3101. ";
 preguntaids[11] = 3101


//  Id pregunta: 3011 Año de creación de pregunta: 2002
 questions[12]= "13)  Referente al lenguaje m&aacute;quina de un ordenador, se puede afirmar que:";
 choices[12]= new Array();
 choices[12][0] = "El lenguaje m&aacute;quina es independiente de la CPU del ordenador";
 choices[12][1] = "El lenguaje m&aacute;quina, los datos se proporcionan mediante las direcciones de memoria donde &eacute;stos se encuentran";
 choices[12][2] = "Las instrucciones en lenguaje m&aacute;quina no tienen generalmente formato r&iacute;gido en cuanto a la posici&oacute;n de los distintos campos que las configuran";
 choices[12][3] = "El lenguaje m&aacute;quina era algo propio de los ordenadores de &eacute;pocas pasadas, hoy d&iacute;a la mayoria ejecuta directamente c&oacute;digo C";
 answers[12] = 1;
 units[12] = ['52'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3011. ";
 preguntaids[12] = 3011


//  Id pregunta: 2956 Año de creación de pregunta: 2002
 questions[13]= "14)  La Unidad Aritm&eacute;tico L&oacute;gica es la encargada de realizar operaciones realizadas por circuitos electr&oacute;nicos denominados operadores, que se pueden clasificar:";
 choices[13]= new Array();
 choices[13][0] = "Seg&uacute;n su realizaci&oacute;n, los operadores pueden ser aleatorios o secuenciales";
 choices[13][1] = "Por el tipo de operaci&oacute;n realizada : l&oacute;gicas (NOT, AND, OR, XOR) y aritm&eacute;ticas. (suma, resta multiplicaci&oacute;n, divisi&oacute;n, complementaci&oacute;n)";
 choices[13][2] = "En paralelo, se realiza sobre todos los d&iacute;gitos binarios de los operandos al mismo tiempo, en serie se procesa la operaci&oacute;n d&iacute;gito a d&iacute;gito";
 choices[13][3] = "De desplazamiento, utilizando un operador de suma-resta y el algoritmo adecuado";
 answers[13] = 2;
 units[13] = ['52'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2956. ";
 preguntaids[13] = 2956


//  Id pregunta: 3153 Año de creación de pregunta: 2002
 questions[14]= "15)  Un monitor cuya resoluci&oacute;n es de 640 x 480, tiene:";
 choices[14]= new Array();
 choices[14][0] = "480 l&iacute;neas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[14][1] = "640 lineas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[14][2] = "480 pixeles (resoluci&oacute;n horizontal)";
 choices[14][3] = "Ninguna de las anteriores es cierta";
 answers[14] = 0;
 units[14] = ['52'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3153. ";
 preguntaids[14] = 3153


//  Id pregunta: 3015 Año de creación de pregunta: 2002
 questions[15]= "16)  Respecto a las memorias RAM:";
 choices[15]= new Array();
 choices[15][0] = "las RAM est&aacute;ticas no son m&aacute;s r&aacute;pidas que las din&aacute;micas";
 choices[15][1] = "SDRAM (Synchronous Dynamic) es generalmente m&aacute;s r&aacute;pida que EDORAM (Extended Data Output)";
 choices[15][2] = "las RAM no pueden ser usadas para simular discos duros debido a su velocidad de acceso";
 choices[15][3] = "las PBSRAM (pipeline burst static) no pueden proporcionar acceso simult&aacute;neo por la propia concepci&oacute;n de la m&aacute;quina de Von Neumann";
 answers[15] = 1;
 units[15] = ['52'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3015. ";
 preguntaids[15] = 3015


//  Id pregunta: 9745 Año de creación de pregunta: 2014
 questions[16]= "17)  Seg&uacute;n el modelo de madurez de Cloud Computing de Forrester, el nivel en el que el proveedor de SaaS ha creado un software espec&iacute;fico para tal prop&oacute;sito y que emplea, entre otras, la tenencia m&uacute;ltiple, es:";
 choices[16]= new Array();
 choices[16][0] = "Nivel 1";
 choices[16][1] = "Nivel 2";
 choices[16][2] = "Nivel 3";
 choices[16][3] = "Nivel 4";
 answers[16] = 2;
 units[16] = ['52'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9745. http://blogs.msdn.com/b/architectsrule/archive/2008/08/18/saas-maturity-model-according-to-forrester.aspx";
 preguntaids[16] = 9745


//  Id pregunta: 9100 Año de creación de pregunta: 2014
 questions[17]= "18)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud Computing?";
 choices[17]= new Array();
 choices[17][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[17][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[17][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[17][3] = "Todas las respuestas anteriores son ciertas.";
 answers[17] = 3;
 units[17] = ['52'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9100. Examen TIC-A1 2013";
 preguntaids[17] = 9100


//  Id pregunta: 3019 Año de creación de pregunta: 2002
 questions[18]= "19)  RS-232, USB, Centronics, ECP, EPP, SCSI, PS/2&hellip;, son:";
 choices[18]= new Array();
 choices[18][0] = "buses/interfaces internos";
 choices[18][1] = "buses/interfaces externos";
 choices[18][2] = "est&aacute;ndares inal&aacute;mbricos";
 choices[18][3] = "arquitecturas de ordenadores";
 answers[18] = 1;
 units[18] = ['52'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3019. ";
 preguntaids[18] = 3019


//  Id pregunta: 3312 Año de creación de pregunta: 2004
 questions[19]= "20)  Acceso directo a memoria (DMA) es:";
 choices[19]= new Array();
 choices[19][0] = "Mecanismo por el que se transfieren datos entre un sistema de entrada/salida y el sistema de memoria sin la intervenci&oacute;n de la CPU.";
 choices[19][1] = "Un modo de funcionamiento opcional del hardware que permite acelerar el acceso a discos duros.";
 choices[19][2] = "Un modo de funcionamiento opcional del software que permite acelerar el acceso a discos duros.";
 choices[19][3] = "Un modo de acceso a dispositivos de entrada/salida en el que cada uno de ellos esta &quot;mapeado&quot; a una direcci&oacute;n de memoria.";
 answers[19] = 0;
 units[19] = ['52'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3312. ";
 preguntaids[19] = 3312


//  Id pregunta: 3351 Año de creación de pregunta: 2006
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal (RAM) de un ordenador?";
 choices[20]= new Array();
 choices[20][0] = "Volatilidad.";
 choices[20][1] = "Estructuraci&oacute;n.";
 choices[20][2] = "Jerarquizaci&oacute;n.";
 choices[20][3] = "Dinamismo.";
 answers[20] = 2;
 units[20] = ['52'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3351. ";
 preguntaids[20] = 3351


//  Id pregunta: 8465 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Cu&aacute;l es la arquitectura del kernel empleado en Windows 10?";
 choices[21]= new Array();
 choices[21][0] = "Monol&iacute;tico";
 choices[21][1] = "Microkernel";
 choices[21][2] = "Nanokernel";
 choices[21][3] = "Hibrida";
 answers[21] = 3;
 units[21] = ['52'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8465. ";
 preguntaids[21] = 8465


//  Id pregunta: 3075 Año de creación de pregunta: 2002
 questions[22]= "23)  Un microprocesador, cuya frecuencia de reloj es de 300 Mhz y ejecuta 4 instrucciones/ciclo, puede ejecutar:";
 choices[22]= new Array();
 choices[22][0] = "1,2 Mips";
 choices[22][1] = "300 Mips";
 choices[22][2] = "300.000 instrucciones/segundo";
 choices[22][3] = "1200 Mips";
 answers[22] = 3;
 units[22] = ['52'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3075. ";
 preguntaids[22] = 3075


//  Id pregunta: 2940 Año de creación de pregunta: 2002
 questions[23]= "24)  La memoria cach&eacute;:";
 choices[23]= new Array();
 choices[23][0] = "Es una memoria auxiliar que se a&ntilde;ade a la memoria principal";
 choices[23][1] = "Es una parte de la memoria principal m&aacute;s r&aacute;pida que el resto";
 choices[23][2] = "No se encarga de realizar la traducci&oacute;n de los identificadores de bloques";
 choices[23][3] = "No disminuye el fallo de p&aacute;ginas";
 answers[23] = 0;
 units[23] = ['52'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2940. ";
 preguntaids[23] = 2940


//  Id pregunta: 3190 Año de creación de pregunta: 2003
 questions[24]= "25)  Con las memorias DDR-SDRAM podernos obtener una velocidad equivalente a la obtenida con:";
 choices[24]= new Array();
 choices[24][0] = "pc66.";
 choices[24][1] = "pc100.";
 choices[24][2] = "pc133.";
 choices[24][3] = "multiplo (x2) de pc66, pc100 o pc133.";
 answers[24] = 3;
 units[24] = ['52'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3190. Junta Andaluc&iacute;a";
 preguntaids[24] = 3190


//  Id pregunta: 3160 Año de creación de pregunta: 2002
 questions[25]= "26)  El conocido est&aacute;ndar FireWire es el est&aacute;ndar IEEE:";
 choices[25]= new Array();
 choices[25][0] = "1284";
 choices[25][1] = "1394";
 choices[25][2] = "1384";
 choices[25][3] = "1294";
 answers[25] = 1;
 units[25] = ['52'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3160. ";
 preguntaids[25] = 3160


//  Id pregunta: 3102 Año de creación de pregunta: 2002
 questions[26]= "27)  Una microinstrucci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Es una funci&oacute;n que acepta pocos par&aacute;metros en un lenguaje de programaci&oacute;n convencional";
 choices[26][1] = "En unidades de control microprogramadas, cada intrucci&oacute;n es un microprograma formado por microinstrucciones";
 choices[26][2] = "Son comandos del sistema operativo que tienen peque&ntilde;o tama&ntilde;o y que siempre se encuentran en memoria";
 choices[26][3] = "Todas son falsas";
 answers[26] = 1;
 units[26] = ['52'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3102. ";
 preguntaids[26] = 3102


//  Id pregunta: 3234 Año de creación de pregunta: 2013
 questions[27]= "28)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[27]= new Array();
 choices[27][0] = "63";
 choices[27][1] = "127";
 choices[27][2] = "256";
 choices[27][3] = "1024";
 answers[27] = 1;
 units[27] = ['52'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3234. Similar Junta Andaluc&iacute;a";
 preguntaids[27] = 3234


//  Id pregunta: 3010 Año de creación de pregunta: 2002
 questions[28]= "29)  Que el bus de datos trabaje con 32 bits quiere decir que:";
 choices[28]= new Array();
 choices[28][0] = "Todos los dispositivos conectados al bus acceden a 32 bits en cada impulso de reloj del ordenador";
 choices[28][1] = "Todos los dispositivos conectados al bus acceden a 32 bits en dos impulsos de reloj del ordenador";
 choices[28][2] = "Todos los dispositivos conectados al bus acceden a 32 bits en cuatro impulsos de reloj del ordenador";
 choices[28][3] = "Ninguna de las anteriores, ya que el bus del ordenador puede trabajar a diferente velocidad que la CPU";
 answers[28] = 3;
 units[28] = ['52'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3010. ";
 preguntaids[28] = 3010


//  Id pregunta: 3221 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes operaciones l&oacute;gicas es incorrecta?:";
 choices[29]= new Array();
 choices[29][0] = "complementario de (A+B) = complementario (A) . complementario (B)";
 choices[29][1] = "complementario de (A.B) = complementario (A) + complementario (B)";
 choices[29][2] = "complementario de (A . A) = complementario (A)";
 choices[29][3] = "doble complementario (A) = A";
 answers[29] = 2;
 units[29] = ['52'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3221. Junta Andaluc&iacute;a";
 preguntaids[29] = 3221


//  Id pregunta: 3137 Año de creación de pregunta: 2002
 questions[30]= "31)  La definici&oacute;n de la ofim&aacute;tica como la utilizaci&oacute;n de tecnolog&iacute;a para mejorar la realizaci&oacute;n de funciones de oficina se debe a:";
 choices[30]= new Array();
 choices[30][0] = "Hammer y Sirbu";
 choices[30][1] = "Olson y Lucas";
 choices[30][2] = "Eli y Nutt";
 choices[30][3] = "Carter y Huzan";
 answers[30] = 0;
 units[30] = ['52'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3137. ";
 preguntaids[30] = 3137


//  Id pregunta: 3114 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Qu&eacute; empresa desarroll&oacute; el primer rat&oacute;n como perif&eacute;rico de los ordenadores?:";
 choices[31]= new Array();
 choices[31][0] = "LaCie";
 choices[31][1] = "Toshiba";
 choices[31][2] = "Apple";
 choices[31][3] = "Rank Xerox";
 answers[31] = 3;
 units[31] = ['52'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3114. ";
 preguntaids[31] = 3114


//  Id pregunta: 2965 Año de creación de pregunta: 2002
 questions[32]= "33)  Las operaciones de la Unidad Aritm&eacute;tico-L&oacute;gica se clasifican en:";
 choices[32]= new Array();
 choices[32][0] = "Desplazamiento, l&oacute;gicas y aritm&eacute;ticas";
 choices[32][1] = "L&oacute;gicas y aritm&eacute;ticas";
 choices[32][2] = "Desplazamiento, l&oacute;gicas y adici&oacute;n";
 choices[32][3] = "L&oacute;gicas y adici&oacute;n";
 answers[32] = 0;
 units[32] = ['52'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2965. ";
 preguntaids[32] = 2965


//  Id pregunta: 3026 Año de creación de pregunta: 2002
 questions[33]= "34)  Se denomina firmware a:";
 choices[33]= new Array();
 choices[33][0] = "El software que suele suministrar el fabricante con sus equipos";
 choices[33][1] = "El c&oacute;digo de bajo nivel que es com&uacute;n a todos los ordenadores";
 choices[33][2] = "El componente f&iacute;sico que permite que el ordenador ejecute instrucciones m&aacute;quina";
 choices[33][3] = "Programa empotrado que establece la l&oacute;gica de bajo nivel que controla los circuitos electr&oacute;nicos de un dispositivo.";
 answers[33] = 3;
 units[33] = ['52'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3026. ";
 preguntaids[33] = 3026


//  Id pregunta: 3283 Año de creación de pregunta: 2003
 questions[34]= "35)  Si en un texto de inform&aacute;tica encontr&aacute;ramos la expresi&oacute;n &quot;memoria de ferrita&rdquo;, sabr&iacute;amos que estamos leyendo un libro de:";
 choices[34]= new Array();
 choices[34][0] = "Dispositivos optoelectr&oacute;nicos.";
 choices[34][1] = "Historia de la inform&aacute;tica.";
 choices[34][2] = "Dispositivos perif&eacute;ricos.";
 choices[34][3] = "Inteligencia artificial.";
 answers[34] = 1;
 units[34] = ['52'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3283. Junta Andaluc&iacute;a";
 preguntaids[34] = 3283


//  Id pregunta: 2955 Año de creación de pregunta: 2002
 questions[35]= "36)  La tercera generaci&oacute;n de la inform&aacute;tica se caracteriza por:";
 choices[35]= new Array();
 choices[35][0] = "El uso de transistores";
 choices[35][1] = "Uso de microprocesadores";
 choices[35][2] = "El uso de los circuitos SSI";
 choices[35][3] = "El uso de v&aacute;lvulas de vacio";
 answers[35] = 2;
 units[35] = ['52'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2955. ";
 preguntaids[35] = 2955


//  Id pregunta: 6526 Año de creación de pregunta: 2003
 questions[36]= "37)  Indique cu&aacute;l de las siguientes respuestas es err&oacute;nea:";
 choices[36]= new Array();
 choices[36][0] = "Un m&oacute;dulo SODIMM posee 200 contactos";
 choices[36][1] = "Existen m&oacute;dulos DIMM de 194 contactos";
 choices[36][2] = "Existen  m&oacute;dulos DIMM de 184 contactos";
 choices[36][3] = "Las siglas DIMM hacen referencia a &quot;Dual Inline Memory Module&quot;";
 answers[36] = 1;
 units[36] = ['52'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 6526. ";
 preguntaids[36] = 6526


//  Id pregunta: 3115 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;Qu&eacute; es MIDI?:";
 choices[37]= new Array();
 choices[37][0] = "Un formato de codificaci&oacute;n de im&aacute;genes digitales";
 choices[37][1] = "Conjunto de especificaciones y tecnolog&iacute;as que proponen normas para el ensamblaje de la arquitectura de ordenadores";
 choices[37][2] = "Un protocolo para codificar instrucciones para que un sintetizador genere notas musicales";
 choices[37][3] = "Servicio de transferencia autom&aacute;tica de textos entre memorias de dos terminales";
 answers[37] = 2;
 units[37] = ['52'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3115. ";
 preguntaids[37] = 3115


//  Id pregunta: 3354 Año de creación de pregunta: 2006
 questions[38]= "39)  Se&ntilde;ale la opci&oacute;n correcta respecto a los puertos IEEE 1394:";
 choices[38]= new Array();
 choices[38][0] = "Apple los denomina Firewire y Sony i.Link";
 choices[38][1] = "No son &uacute;tiles para transferencias de alta velocidad";
 choices[38][2] = "La velocidad, superior a puertos USB, es independiente de los dispositivos conectados";
 choices[38][3] = "La velocidad, inferior a puertos USB, se reparte entre los dispositivos conectados";
 answers[38] = 0;
 units[38] = ['52'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3354. ";
 preguntaids[38] = 3354


//  Id pregunta: 3180 Año de creación de pregunta: 2002
 questions[39]= "40)  Respecto al funcionamiento de USB, es falso que:";
 choices[39]= new Array();
 choices[39][0] = "no necesita drivers espec&iacute;ficos para configurar los dispositivos a &eacute;l conectados";
 choices[39][1] = "el ordenador identifica autom&aacute;ticamente el dispositivo que se conecta mientras opera &quot;en caliente&quot;";
 choices[39][2] = "La informaci&oacute;n se transmite de forma no balanceada, con la informaci&oacute;n y el control de sincronizaci&oacute;n en se&ntilde;ales separadas";
 choices[39][3] = "USB 1.1 puede funcionar a 1.5 Mbps y 12 Mbps, y USB 2.0, a 480 Mbps";
 answers[39] = 2;
 units[39] = ['52'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3180. ";
 preguntaids[39] = 3180


//  Id pregunta: 3152 Año de creación de pregunta: 2002
 questions[40]= "41)  Un dispositivo multifunci&oacute;n, aplicado a la ofim&aacute;tica, dispone habitualmente de las siguientes funciones:";
 choices[40]= new Array();
 choices[40][0] = "Tableta digitalizadora, l&aacute;piz &oacute;ptico y lector de tarjetas de fotograf&iacute;a digital";
 choices[40][1] = "Impresora, esc&aacute;ner, fax, copiadora";
 choices[40][2] = "Todas las anteriores";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 1;
 units[40] = ['52'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3152. ";
 preguntaids[40] = 3152


//  Id pregunta: 3348 Año de creación de pregunta: 2006
 questions[41]= "42)  Indicar la respuesta falsa:";
 choices[41]= new Array();
 choices[41][0] = "La profundidad de color es el m&aacute;ximo n&uacute;mero de colores representables";
 choices[41][1] = "El n&uacute;mero de bits de un procesador gr&aacute;fico es independiente de la profundidad o resoluci&oacute;n";
 choices[41][2] = "La resoluci&oacute;n es el n&uacute;mero m&iacute;nimo de pixels que se muestran en pantalla (Pixels en horizontal x Pixels en vertical)";
 choices[41][3] = "La frecuencia de refresco es el n&uacute;mero de veces que se renueva la informaci&oacute;n en pantalla por segundo";
 answers[41] = 2;
 units[41] = ['52'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3348. ";
 preguntaids[41] = 3348


//  Id pregunta: 3127 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l es el objetivo del concepto WYSIWYG en los sistemas inform&aacute;ticos?:";
 choices[42]= new Array();
 choices[42][0] = "Lograr alta definici&oacute;n (resoluci&oacute;n) en los documentos impresos";
 choices[42][1] = "Que a la hora de imprimir se tenga claro c&oacute;mo queda el documento";
 choices[42][2] = "Disponer de fonts de todos los tama&ntilde;os deseados a partir de una font base dada";
 choices[42][3] = "Crear documentos multimedia";
 answers[42] = 1;
 units[42] = ['52'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3127. ";
 preguntaids[42] = 3127


//  Id pregunta: 3322 Año de creación de pregunta: 2004
 questions[43]= "44)  &iquest;En que generaci&oacute;n aparecen los circuitos integrados LSI?";
 choices[43]= new Array();
 choices[43][0] = "En la primera generaci&oacute;n";
 choices[43][1] = "En la segunda generaci&oacute;n";
 choices[43][2] = "En la tercera generaci&oacute;n";
 choices[43][3] = "En la cuarta generaci&oacute;n";
 answers[43] = 3;
 units[43] = ['52'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3322. ";
 preguntaids[43] = 3322


//  Id pregunta: 3155 Año de creación de pregunta: 2002
 questions[44]= "45)  Una de las siguientes no es una caracter&iacute;stica que deba reunir un interfaz:";
 choices[44]= new Array();
 choices[44][0] = "Consistencia";
 choices[44][1] = "Naturalidad";
 choices[44][2] = "Obviedad";
 choices[44][3] = "Facilidad de uso y aprendizaje";
 answers[44] = 2;
 units[44] = ['52'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3155. ";
 preguntaids[44] = 3155


//  Id pregunta: 3062 Año de creación de pregunta: 2002
 questions[45]= "46)  Si un ordenador tiene un tiempo de acceso a memoria de 60 nanosegundos, una longitud de palabra de 16 bits, memoria ECC y utiliza 24 bits para direccionamiento, se puede decir que la memoria m&aacute;xima que puede direccionar es de:";
 choices[45]= new Array();
 choices[45][0] = "8 Megabytes";
 choices[45][1] = "16 Megabytes";
 choices[45][2] = "32 Megabytes";
 choices[45][3] = "64 Megabytes";
 answers[45] = 2;
 units[45] = ['52'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3062. ";
 preguntaids[45] = 3062


//  Id pregunta: 3128 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;ntas im&aacute;genes por segundo se emiten utilizando el est&aacute;ndar PAL?:";
 choices[46]= new Array();
 choices[46][0] = "30";
 choices[46][1] = "26";
 choices[46][2] = "15";
 choices[46][3] = "25";
 answers[46] = 3;
 units[46] = ['52'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3128. ";
 preguntaids[46] = 3128


//  Id pregunta: 3273 Año de creación de pregunta: 2003
 questions[47]= "48)  Las l&iacute;neas de un bus se pueden clasificar en grupos funcionales de:";
 choices[47]= new Array();
 choices[47][0] = "L&iacute;neas de direcci&oacute;n y de control.";
 choices[47][1] = "L&iacute;neas de entrada y salida.";
 choices[47][2] = "L&iacute;neas de datos, l&iacute;neas de direcci&oacute;n y l&iacute;neas de control.";
 choices[47][3] = "L&iacute;neas de control de operaci&oacute;n y de salida.";
 answers[47] = 2;
 units[47] = ['52'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3273. Junta Andaluc&iacute;a";
 preguntaids[47] = 3273


//  Id pregunta: 3154 Año de creación de pregunta: 2002
 questions[48]= "49)  Un monitor de 20 pulgadas efectivas y de 1600 x 1200 puntos con 256 tonos de grises produce una resoluci&oacute;n de:";
 choices[48]= new Array();
 choices[48][0] = "300 dpi";
 choices[48][1] = "30 dpi";
 choices[48][2] = "100 dpi";
 choices[48][3] = "50 dpi";
 answers[48] = 2;
 units[48] = ['52'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3154. ";
 preguntaids[48] = 3154


//  Id pregunta: 10225 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l es una plataforma pionera de software abierto que permite el desarrollo de clouds privados de infraestructuras como servicio (IaaS)?";
 choices[49]= new Array();
 choices[49][0] = "VMWARE";
 choices[49][1] = "EUCALYPTUS";
 choices[49][2] = "LYRIUS";
 choices[49][3] = "AMAPOLUS";
 answers[49] = 1;
 units[49] = ['52'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 10225. Adquirida en 2015 por HPE";
 preguntaids[49] = 10225


//  Id pregunta: 2966 Año de creación de pregunta: 2002
 questions[50]= "51)  Las operaciones que permiten pasar la informaci&oacute;n indicada por un operando al destino indicado por otro se llaman:";
 choices[50]= new Array();
 choices[50][0] = "De bifurcaci&oacute;n condicional";
 choices[50][1] = "Aritm&eacute;ticas";
 choices[50][2] = "De transferencia";
 choices[50][3] = "De desplazamiento";
 answers[50] = 2;
 units[50] = ['52'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2966. ";
 preguntaids[50] = 2966


//  Id pregunta: 2952 Año de creación de pregunta: 2002
 questions[51]= "52)  La sustituci&oacute;n de una placa en caliente significa:";
 choices[51]= new Array();
 choices[51][0] = "Que el ordenador debe tener energ&iacute;a en el bus";
 choices[51][1] = "Que se puede hacer con el ordenador funcionando, sin alterar su comportamiento";
 choices[51][2] = "Que debe hacerse inmediatamente despu&eacute;s de haber sacado la defectuosa, en menos tiempo del time out de uso de la placa (normalmente menos de 2 minutos)";
 choices[51][3] = "Son falsas todas las respuestas anteriores";
 answers[51] = 1;
 units[51] = ['52'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2952. ";
 preguntaids[51] = 2952


//  Id pregunta: 3214 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Cu&aacute;l de estos procesadores de 64 bits usa la t&eacute;cnica EPIC (&quot;Explicity Parallel Instruction Computing&quot;)?:";
 choices[52]= new Array();
 choices[52][0] = "PowerPC.";
 choices[52][1] = "Alpha.";
 choices[52][2] = "Ultrasparc.";
 choices[52][3] = "Itanium.";
 answers[52] = 3;
 units[52] = ['52'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3214. Junta Andaluc&iacute;a";
 preguntaids[52] = 3214


//  Id pregunta: 3141 Año de creación de pregunta: 2002
 questions[53]= "54)  Los perif&eacute;ricos conocidos como &quot;Pen-drive&quot; son:";
 choices[53]= new Array();
 choices[53][0] = "Unidades del tama&ntilde;o de un bol&iacute;grafo o un mechero que permiten aumentar la memoria RAM del ordenador o bien a&ntilde;adir un nuevo disco duro port&aacute;til y extra&iacute;ble";
 choices[53][1] = "L&aacute;pices &oacute;pticos que permiten dibujar en tabletas digitalizadoras y pantallas t&aacute;ctiles";
 choices[53][2] = "Esc&aacute;neres de mano de alta precisi&oacute;n";
 choices[53][3] = "Lectores de c&oacute;digos de barras de &uacute;ltima generaci&oacute;n";
 answers[53] = 0;
 units[53] = ['52'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3141. ";
 preguntaids[53] = 3141


//  Id pregunta: 3350 Año de creación de pregunta: 2006
 questions[54]= "55)  &iquest;Cu&aacute;l ser&iacute;a una caracter&iacute;stica esencial a la hora de valorar un equipo mini?";
 choices[54]= new Array();
 choices[54][0] = "Disponer de microprocesadores RISCs.";
 choices[54][1] = "La modularidad.";
 choices[54][2] = "Disponer de sistemas de almacenamiento basados en RAID.";
 choices[54][3] = "La posibilidad de interconexi&oacute;n al host.";
 answers[54] = 1;
 units[54] = ['52'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3350. ";
 preguntaids[54] = 3350


//  Id pregunta: 3106 Año de creación de pregunta: 2002
 questions[55]= "56)  Una sala blanca es:";
 choices[55]= new Array();
 choices[55][0] = "Aquella especialmente dise&ntilde;ada para favorecer la ac&uacute;stica sin necesidad de altavoces ni micr&oacute;fonos";
 choices[55][1] = "Aquella especialmente dise&ntilde;ada para anular las ondas de los tel&eacute;fonos m&oacute;viles impidiendo as&iacute; su cobertura";
 choices[55][2] = "Aquella especialmente dise&ntilde;ada para realizar simulaciones de redes de &aacute;rea local por su escaso nivel de interferencia";
 choices[55][3] = "Aquella especialmente dise&ntilde;ada para la fabricaci&oacute;n de sustratos y componentes electr&oacute;nicos";
 answers[55] = 3;
 units[55] = ['52'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3106. ";
 preguntaids[55] = 3106


//  Id pregunta: 9744 Año de creación de pregunta: 2014
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes grupos de propiedades son caracter&iacute;sticos de Cloud Computing?";
 choices[56]= new Array();
 choices[56][0] = "tenencia m&uacute;ltiple, escalabilidad, elasticidad, independencia de la localizaci&oacute;n";
 choices[56][1] = "A) m&aacute;s reusabilidad";
 choices[56][2] = "B) m&aacute;s interoperabilidad";
 choices[56][3] = "C) m&aacute;s desacoplamiento";
 answers[56] = 0;
 units[56] = ['52'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9744. ";
 preguntaids[56] = 9744


//  Id pregunta: 1925 Año de creación de pregunta: 2016
 questions[57]= "58)  EI concepto de &quot;Cloud Computing&quot; hace referencia a un modelo de prestaci&oacute;n de servicios en el que:";
 choices[57]= new Array();
 choices[57][0] = "Se aloja un servidor o aplicaci&oacute;n en el edificio de un proveedor";
 choices[57][1] = "EI proveedor de servicios se encarga del alojamiento, gesti&oacute;n y administraci&oacute;n de los servidores y aplicaciones del cliente, pero son personalizadas y no se comparten con otros clientes.";
 choices[57][2] = "Se paga &uacute;nicamente por el consumo de servicios efectuado";
 choices[57][3] = "Se utiliza la capacidad de proceso y computaci&oacute;n libre existente en otros servidores de Internet para efectuar operaciones de c&aacute;lculo.";
 answers[57] = 2;
 units[57] = ['52'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1925. ";
 preguntaids[57] = 1925


//  Id pregunta: 2941 Año de creación de pregunta: 2002
 questions[58]= "59)  La memoria EPROM:";
 choices[58]= new Array();
 choices[58][0] = "Es vol&aacute;til y se puede leer y escribir en ella";
 choices[58][1] = "Es una memoria principal permanente pero que s&oacute;lo se puede leer";
 choices[58][2] = "Es borrable de acuerdo con unos procedimientos especiales";
 choices[58][3] = "S&oacute;lo permite acceso secuencial";
 answers[58] = 2;
 units[58] = ['52'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2941. ";
 preguntaids[58] = 2941


//  Id pregunta: 3320 Año de creación de pregunta: 2004
 questions[59]= "60)  Indique la respuesta correcta. El firewire...";
 choices[59]= new Array();
 choices[59][0] = "es conocido tambi&eacute;n como i.Link o IEEE1394";
 choices[59][1] = "permite la conexi&oacute;n &quot;en caliente&quot;";
 choices[59][2] = "Las opciones A) y B) son correctas";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = 2;
 units[59] = ['52'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3320. ";
 preguntaids[59] = 3320


//  Id pregunta: 3171 Año de creación de pregunta: 2002
 questions[60]= "61)  Un PDA:";
 choices[60]= new Array();
 choices[60][0] = "No permite la navegaci&oacute;n en Internet";
 choices[60][1] = "No puede conectarse a un PC";
 choices[60][2] = "Puede llevar instalado Windows";
 choices[60][3] = "Todas las anteriores son ciertas";
 answers[60] = 2;
 units[60] = ['52'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3171. ";
 preguntaids[60] = 3171


//  Id pregunta: 2981 Año de creación de pregunta: 2002
 questions[61]= "62)  Los procedimientos b&aacute;sicos para realizar una transferencia elemental entre la UCP y un perif&eacute;rico son:";
 choices[61]= new Array();
 choices[61][0] = "E/S programada, acceso directo a memoria y canal de E/S";
 choices[61][1] = "E/S programada, interrupciones y acceso directo a memoria";
 choices[61][2] = "Memoria multipuerta y robo de ciclo";
 choices[61][3] = "Canal selector para perif&eacute;ricos r&aacute;pidos y canal multiplexor para perif&eacute;ricos lentos";
 answers[61] = 1;
 units[61] = ['52'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2981. ";
 preguntaids[61] = 2981


//  Id pregunta: 3353 Año de creación de pregunta: 2006
 questions[62]= "63)  Las memorias cach&eacute; sirven para:";
 choices[62]= new Array();
 choices[62][0] = "Representar un sistema de almacenamiento secundario basado en jerarqu&iacute;a.";
 choices[62][1] = "Representar un sistema de almacenamiento auxiliar basado en jerarqu&iacute;a.";
 choices[62][2] = "Representar un sistema de almacenamiento secundario basado en la rapidez.";
 choices[62][3] = "Representar un sistema de almacenamiento basado en la rapidez.";
 answers[62] = 3;
 units[62] = ['52'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3353. ";
 preguntaids[62] = 3353


//  Id pregunta: 3032 Año de creación de pregunta: 2002
 questions[63]= "64)  Se puede entender por 'driver':";
 choices[63]= new Array();
 choices[63][0] = "Un tipo especial de programa supervisor";
 choices[63][1] = "Un programa encargado de permitir el manejo de un determinado perif&eacute;rico por parte de una unidad central";
 choices[63][2] = "Un lector/grabador de discos &oacute;pticos";
 choices[63][3] = "Un lector/grabador de discos CD-ROM";
 answers[63] = 1;
 units[63] = ['52'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3032. ";
 preguntaids[63] = 3032


//  Id pregunta: 9324 Año de creación de pregunta: 2014
 questions[64]= "65)  Desde el punto de vista del &ldquo;Cloud Computing&rdquo;, Gmail es un ejemplo de";
 choices[64]= new Array();
 choices[64][0] = "PaaS (&ldquo;Platform as a Service&rdquo;).";
 choices[64][1] = "CaaS (&ldquo;Communication as a Service&rdquo;).";
 choices[64][2] = "IaaS (&ldquo;Infrastructure as a Service&rdquo;).";
 choices[64][3] = "SaaS (&ldquo;Software as a Service&rdquo;).";
 answers[64] = 3;
 units[64] = ['52'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9324. ";
 preguntaids[64] = 9324


//  Id pregunta: 6528 Año de creación de pregunta: 2003
 questions[65]= "66)  La velocidad de transmisi&oacute;n seg&uacute;n la Recomendaci&oacute;n V.34 de la UIT-T es:";
 choices[65]= new Array();
 choices[65][0] = "33,2 Kbps";
 choices[65][1] = "33,4 Kbps";
 choices[65][2] = "33,6 Kbps";
 choices[65][3] = "33,8 Kbps";
 answers[65] = 2;
 units[65] = ['52'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 6528. ";
 preguntaids[65] = 6528


//  Id pregunta: 2871 Año de creación de pregunta: 2002
 questions[66]= "67)  En una conexi&oacute;n RS-232 C o V24/V28 el conector tiene:";
 choices[66]= new Array();
 choices[66][0] = "15 pines";
 choices[66][1] = "32 pines";
 choices[66][2] = "24 pines";
 choices[66][3] = "25 pines";
 answers[66] = 3;
 units[66] = ['52'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2871. ";
 preguntaids[66] = 2871


//  Id pregunta: 10187 Año de creación de pregunta: 2015
 questions[67]= "68)  El tipo de infraestructura de cloud computing que permite mantener las aplicaciones cr&iacute;ticas dentro de una infraestructura controlada y hacer uso de otros servicios y aplicaciones compartidos por varios clientes se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Nube privada";
 choices[67][1] = "Nube h&iacute;brida";
 choices[67][2] = "Nube p&uacute;blica";
 choices[67][3] = "Infraestructura como Servicio (IaaS)";
 answers[67] = 1;
 units[67] = ['52'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 10187. Examen TIC A1 2014";
 preguntaids[67] = 10187


//  Id pregunta: 2995 Año de creación de pregunta: 2002
 questions[68]= "69)  OnNow:";
 choices[68]= new Array();
 choices[68][0] = "Es una tecnolog&iacute;a que permite a un PC encenderse r&aacute;pidamente";
 choices[68][1] = "Es una caracter&iacute;stica de los sistemas Z/series de IBM que permite el reemplazo en caliente de todas sus partes y su operaci&oacute;n 24x7";
 choices[68][2] = "Es una caracter&iacute;stica de Linux orientada a aumentar la redundancia y confiabilidad en la operaci&oacute;n del sistema";
 choices[68][3] = "Todas las respuestas anteriores son ciertas";
 answers[68] = 0;
 units[68] = ['52'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2995. ";
 preguntaids[68] = 2995


//  Id pregunta: 9811 Año de creación de pregunta: 2015
 questions[69]= "70)  Indique cu&aacute;l de &eacute;stos es un problema asociado al cloud computing:";
 choices[69]= new Array();
 choices[69][0] = "Necesita de una mayor inversi&oacute;n inicial que una infraestructura in-house.";
 choices[69][1] = "Lock-in (cliente cautivo)";
 choices[69][2] = "Generalmente la implantaci&oacute;n es m&aacute;s lenta que con una infraestructura in-house.";
 choices[69][3] = "Ninguno de los anteriores.";
 answers[69] = 1;
 units[69] = ['52'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9811. ";
 preguntaids[69] = 9811


//  Id pregunta: 2958 Año de creación de pregunta: 2002
 questions[70]= "71)  La ventaja fundamental de las memorias cache es:";
 choices[70]= new Array();
 choices[70][0] = "Su alta velocidad";
 choices[70][1] = "Su seguridad";
 choices[70][2] = "La ampliaci&oacute;n de memoria principal que generan";
 choices[70][3] = "Su gran capacidad de direccionamiento";
 answers[70] = 0;
 units[70] = ['52'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2958. ";
 preguntaids[70] = 2958


//  Id pregunta: 3209 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest; Qu&eacute; es SAS ?";
 choices[71]= new Array();
 choices[71][0] = "Serial Attached SCSI";
 choices[71][1] = "Serial ATA";
 choices[71][2] = "Small Computer Systems Interface";
 choices[71][3] = "Un paquete estad&iacute;stico";
 answers[71] = 0;
 units[71] = ['52'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3209. ";
 preguntaids[71] = 3209


//  Id pregunta: 9812 Año de creación de pregunta: 2015
 questions[72]= "73)  Amazon EC2 y RackSpace son ejemplos de:";
 choices[72]= new Array();
 choices[72][0] = "SaaS";
 choices[72][1] = "IaaS";
 choices[72][2] = "PaaS";
 choices[72][3] = "Nube h&iacute;bridas";
 answers[72] = 1;
 units[72] = ['52'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9812. ";
 preguntaids[72] = 9812


//  Id pregunta: 2942 Año de creación de pregunta: 2002
 questions[73]= "74)  La memoria RAM est&aacute;tica se diferencia de la RAM din&aacute;mica:";
 choices[73]= new Array();
 choices[73][0] = "En que la est&aacute;tica es m&aacute;s r&aacute;pida que la din&aacute;mica";
 choices[73][1] = "En que la est&aacute;tica es de s&oacute;lo lectura y la din&aacute;mica de lectura/escritura";
 choices[73][2] = "En que la est&aacute;tica no pierde su informaci&oacute;n si se interrumpe la alimentaci&oacute;n y la din&aacute;mica s&iacute;,";
 choices[73][3] = "En que la RAM est&aacute;tica no necesita ciclos de refresco y la din&aacute;mica s&iacute;";
 answers[73] = 3;
 units[73] = ['52'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2942. ";
 preguntaids[73] = 2942


//  Id pregunta: 8076 Año de creación de pregunta: 2011
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes no es una ventaja del cloud computing?";
 choices[74]= new Array();
 choices[74][0] = "Prestaci&oacute;n de servicios a nivel mundial";
 choices[74][1] = "Implementaci&oacute;n m&aacute;s r&aacute;pida y con menos riesgos";
 choices[74][2] = "Contribuye al uso eficiente de la energ&iacute;a";
 choices[74][3] = "Aumento de la seguridad";
 answers[74] = 3;
 units[74] = ['52'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8076. ";
 preguntaids[74] = 8076


