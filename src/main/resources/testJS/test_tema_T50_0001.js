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
//  Id pregunta: 3352 Año de creación de pregunta: 2006
 questions[0]= "1)  Cuando se utilizan t&eacute;cnicas de implementaci&oacute;n de elementos de procesamiento basadas en pipelining se dice que:";
 choices[0]= new Array();
 choices[0][0] = "El paralelismo sucede a nivel de procesador.";
 choices[0][1] = "El paralelismo sucede a nivel de multiprocesador.";
 choices[0][2] = "El paralelismo sucede a nivel de multicomputador.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = 0;
 units[0] = ['50'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3352. ";
 preguntaids[0] = 3352


//  Id pregunta: 2886 Año de creación de pregunta: 2002
 questions[1]= "2)  Entre las operaciones de desplazamiento existe la de desplazamiento l&oacute;gico, que consiste en:";
 choices[1]= new Array();
 choices[1][0] = "Los bits desplazados por un extremo se insertan por el otro.";
 choices[1][1] = "Los bits reemplazos son sustituidos por bits iguales al m&aacute;s cercano.";
 choices[1][2] = "Es igual a del desplazamiento aritm&eacute;tico.";
 choices[1][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[1] = 3;
 units[1] = ['50'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2886. ";
 preguntaids[1] = 2886


//  Id pregunta: 2708 Año de creación de pregunta: 2002
 questions[2]= "3)  Considerando las memoria VRAM, indique la respuesta que es falsa:";
 choices[2]= new Array();
 choices[2][0] = "Incluyen una memoria DRAM y unos registros de desplazamiento que permiten acceso en forma serie";
 choices[2][1] = "Est&aacute;n especialmente dise&ntilde;adas para construir memorias de refresco de determinados gr&aacute;ficos";
 choices[2][2] = "Es un tipo de RAM que no es din&aacute;mica";
 choices[2][3] = "Equivale a Video RAM";
 answers[2] = 2;
 units[2] = ['50'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2708. ";
 preguntaids[2] = 2708


//  Id pregunta: 2737 Año de creación de pregunta: 2002
 questions[3]= "4)  Disponemos de un multiplexor por divisi&oacute;n en el tiempo (TDM) al que se conectan 8 terminales utilizando enlaces de 1200 bps. &iquest;Cu&aacute;l deber&aacute; ser la velocidad de la l&iacute;nea de salida del multiplexor?:";
 choices[3]= new Array();
 choices[3][0] = "Inferior a 9.600 bps";
 choices[3][1] = "Igual o superior a 9.600 bpos";
 choices[3][2] = "Superior a 19.200 bps";
 choices[3][3] = "Igual a 1.200 bps";
 answers[3] = 1;
 units[3] = ['50'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2737. ";
 preguntaids[3] = 2737


//  Id pregunta: 2951 Año de creación de pregunta: 2002
 questions[4]= "5)  La suma de (-19) y (-10) en complemento a 2 es:";
 choices[4]= new Array();
 choices[4][0] = "&quot;100011&quot;";
 choices[4][1] = "Se produce &quot;overflow&quot;";
 choices[4][2] = "&quot;100010&quot;";
 choices[4][3] = "&quot;110010&quot;";
 answers[4] = 0;
 units[4] = ['50'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2951. ";
 preguntaids[4] = 2951


//  Id pregunta: 2926 Año de creación de pregunta: 2002
 questions[5]= "6)  La caracter&iacute;stica principal de la arquitectura 'pipeline' es:";
 choices[5]= new Array();
 choices[5][0] = "La existencia de varios procesadores especializados en tareas concretas que pueden realizarse en paralelo";
 choices[5][1] = "La divisi&oacute;n en fases de la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[5][2] = "La redundancia de algunos dispositivos";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = 1;
 units[5] = ['50', '51'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2926. ";
 preguntaids[5] = 2926


//  Id pregunta: 3490 Año de creación de pregunta: 2006
 questions[6]= "7)  Ejecuci&oacute;n continua y en parte solapada de instrucciones por parte del procesador";
 choices[6]= new Array();
 choices[6][0] = "Flujo de datos";
 choices[6][1] = "Multiplexado";
 choices[6][2] = "Clustering";
 choices[6][3] = "Pipelining";
 answers[6] = 3;
 units[6] = ['50'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3490. ";
 preguntaids[6] = 3490


//  Id pregunta: 3176 Año de creación de pregunta: 2002
 questions[7]= "8)  Para una corporaci&oacute;n bancaria con un potente mainframe el principal cuello de botella suele ser:";
 choices[7]= new Array();
 choices[7][0] = "Los canales de comunicaciones";
 choices[7][1] = "La memoria del sistema central";
 choices[7][2] = "La velocidad de acceso a los datos";
 choices[7][3] = "La velocidad de los operadores humanos que introducen la informaci&oacute;n";
 answers[7] = 2;
 units[7] = ['50'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3176. ";
 preguntaids[7] = 3176


//  Id pregunta: 2662 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Podr&iacute;a ordenar los siguientes tipos de memoria seg&uacute;n su coste, de mayor a menor?:";
 choices[8]= new Array();
 choices[8][0] = "Registros, Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Cinta magn&eacute;tica";
 choices[8][1] = "Registros, Cach&eacute;, Disco magn&eacute;tico, Memoria Principal, Cinta magn&eacute;tica";
 choices[8][2] = "Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Registros, Cinta magn&eacute;tica";
 choices[8][3] = "Todas son falsas";
 answers[8] = 0;
 units[8] = ['50'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2662. ";
 preguntaids[8] = 2662


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[9]= "10)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[9]= new Array();
 choices[9][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[9][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[9][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[9][3] = "Todas las respuestas son correctas.";
 answers[9] = 3;
 units[9] = ['50'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[9] = 643


//  Id pregunta: 2490 Año de creación de pregunta: 2004
 questions[10]= "11)  &iquest;Qu&eacute; se necesita para poder aprovechar la tecnolog&iacute;a HyperThreading?";
 choices[10]= new Array();
 choices[10][0] = "Procesador Intel Pentium 4 y Windows 2003";
 choices[10][1] = "Procesador Sun SPARC y Solaris";
 choices[10][2] = "Procesador Intel Core 2 Duo y Linux";
 choices[10][3] = "Procesador Sun SPARC y Windows 2000";
 answers[10] = 0;
 units[10] = ['50'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2490. ";
 preguntaids[10] = 2490


//  Id pregunta: 3349 Año de creación de pregunta: 2006
 questions[11]= "12)  En relaci&oacute;n a las tarjetas gr&aacute;ficas:";
 choices[11]= new Array();
 choices[11][0] = "La mayor parte ya son para bus PCI-E (PCI Express)";
 choices[11][1] = "Se pueden conectar al bus AGP, entre otros";
 choices[11][2] = "La resoluci&oacute;n m&aacute;s habitual es de 640 x 480";
 choices[11][3] = "Las respuestas a) y b) son correctas";
 answers[11] = 3;
 units[11] = ['50'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3349. ";
 preguntaids[11] = 3349


//  Id pregunta: 6871 Año de creación de pregunta: 2010
 questions[12]= "13)  Indique cual de las siguientes es una caracter&iacute;stica de un servidor &quot;blade&quot;.";
 choices[12]= new Array();
 choices[12][0] = "No contienen fuente de alimentaci&oacute;n propia.";
 choices[12][1] = "Tiene prestaciones m&aacute;s bajas que un servidor tradicional.";
 choices[12][2] = "Solo se puede utilizar en entornos virtualizados.";
 choices[12][3] = "No tiene memoria propia.";
 answers[12] = 0;
 units[12] = ['50'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 6871. TIC A 2009";
 preguntaids[12] = 6871


//  Id pregunta: 3045 Año de creación de pregunta: 2002
 questions[13]= "14)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[13]= new Array();
 choices[13][0] = "El RISC tiene m&aacute;s registros";
 choices[13][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[13][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[13][3] = "Todas las respuestas anteriores son ciertas";
 answers[13] = 3;
 units[13] = ['50', '51'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3045. ";
 preguntaids[13] = 3045


//  Id pregunta: 3509 Año de creación de pregunta: 2006
 questions[14]= "15)  El est&aacute;ndar DMI";
 choices[14]= new Array();
 choices[14][0] = "Permite la monitorizaci&oacute;n de determinadas funciones del PC";
 choices[14][1] = "Permite el control de las diferentes funciones de ahorro de energ&iacute;a de un PC";
 choices[14][2] = "Es un est&aacute;ndar de gesti&oacute;n de energ&iacute;a desarrollado por Intel, Microsoft y Toshiba";
 choices[14][3] = "Es una norma dirigida a dispositivos de alta velocidad";
 answers[14] = 0;
 units[14] = ['50'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3509. ";
 preguntaids[14] = 3509


//  Id pregunta: 2725 Año de creación de pregunta: 2002
 questions[15]= "16)  De los circuitos secuenciales es incorrecto afirmar que:";
 choices[15]= new Array();
 choices[15][0] = "El tipo de disparo determina la forma en que las excitaciones de entrada afectan al estado del biestable.";
 choices[15][1] = "La forma de disparo de un biestable, que es el circuito elemental, viene determinada por tres aspectos: la l&oacute;gica de disparo, el tipo de disparo y el sincronismo.";
 choices[15][2] = "Una misma combinaci&oacute;n l&oacute;gica en sus entradas puede producir distintas combinaciones en su salida.";
 choices[15][3] = "Son circuitos anal&oacute;gicos capaces de memorizar cierta informaci&oacute;n.";
 answers[15] = 3;
 units[15] = ['50'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2725. ";
 preguntaids[15] = 2725


//  Id pregunta: 10094 Año de creación de pregunta: 2015
 questions[16]= "17)  El PUE (Power Usage effectiveness) es una m&eacute;trica que trata de determinar la eficiencia energ&eacute;tica de un Centro de Proceso de Datos, y se define como el resultado de dividir:";
 choices[16]= new Array();
 choices[16][0] = "La potencia total consumida por el CPD por la potencia consumida en el equipamiento TI (servidores, equipos de comunicaciones, almacenamiento y otros).";
 choices[16][1] = "La potencia total consumida por el CPD por la potencia usada en el equipamiento no TI (climatizaci&oacute;n, distribuci&oacute;n el&eacute;ctrica, iluminaci&oacute;n, etc).";
 choices[16][2] = "La potencia consumida por el equipamiento TI entre la consumida por el equipamiento no TI.";
 choices[16][3] = "La potencia total consumida por el CPD por la potencia consumida en el equipamiento de c&oacute;mputo (servidores), excluyendo equipos de comunicaciones y almacenamiento.";
 answers[16] = 0;
 units[16] = ['50'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10094. Examen TIC A2 2014";
 preguntaids[16] = 10094


//  Id pregunta: 1197 Año de creación de pregunta: 2016
 questions[17]= "18)  De las siguientes tareas a efectuar sobre un servidor de aplicaciones, &iquest;cu&aacute;l se puede encuadrar dentro del mantenimiento preventivo?";
 choices[17]= new Array();
 choices[17][0] = "Limpieza peri&oacute;dica del polvo en la fuente de alimentaci&oacute;n.";
 choices[17][1] = "Sustituci&oacute;n de un disco duro defectuoso.";
 choices[17][2] = "Ampliaci&oacute;n de la RAM del equipo.";
 choices[17][3] = "Actualizaci&oacute;n de la versi&oacute;n del software servidor de aplicaciones.";
 answers[17] = 0;
 units[17] = ['50'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1197. ";
 preguntaids[17] = 1197


//  Id pregunta: 2673 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Qu&eacute; es el pseudoc&oacute;digo?";
 choices[18]= new Array();
 choices[18][0] = "Un c&oacute;digo que tiene fallos.";
 choices[18][1] = "El c&oacute;digo antes de ser depurado.";
 choices[18][2] = "El c&oacute;digo de un programa que no se ha ejecutado nunca.";
 choices[18][3] = "Descripcion de alto nivel de un programa";
 answers[18] = 3;
 units[18] = ['50'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2673. ";
 preguntaids[18] = 2673


//  Id pregunta: 1862 Año de creación de pregunta: 2016
 questions[19]= "20)  En t&eacute;rminos de disponibilidad de la informaci&oacute;n, se entiende como Objetivo de Punto de Recuperaci&oacute;n (RPO):";
 choices[19]= new Array();
 choices[19][0] = "La cantidad m&aacute;xima de informaci&oacute;n que puede ser perdida cuando el servicio es restaurado tras una interrupci&oacute;n, sin que suponga repercusiones graves para la organizaci&oacute;n.";
 choices[19][1] = "El tiempo m&aacute;ximo permitido para la recuperaci&oacute;n de un servicio de TI tras una interrupci&oacute;n.";
 choices[19][2] = "La cantidad m&aacute;xima de informaci&oacute;n que se puede recuperar en el tiempo de restauraci&oacute;n del servicio de TI.";
 choices[19][3] = "El tiempo m&iacute;nimo requerido para la recuperaci&oacute;n de un servicio de TI tras una interrupci&oacute;n.";
 answers[19] = 0;
 units[19] = ['50'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1862. ";
 preguntaids[19] = 1862


//  Id pregunta: 6864 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes corresponde a una de las categor&iacute;as de ordenadores contempladas en la taxonom&iacute;a de Flynn?";
 choices[20]= new Array();
 choices[20][0] = "SIDI.";
 choices[20][1] = "SDSP.";
 choices[20][2] = "SIMD.";
 choices[20][3] = "MIMP.";
 answers[20] = 2;
 units[20] = ['50'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6864. TIC A 2009";
 preguntaids[20] = 6864


//  Id pregunta: 10114 Año de creación de pregunta: 2015
 questions[21]= "22)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[21]= new Array();
 choices[21][0] = "6 Gbps.";
 choices[21][1] = "16 Gbps.";
 choices[21][2] = "8 Gbps.";
 choices[21][3] = "3 Gbps.";
 answers[21] = 1;
 units[21] = ['50', '51', '53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10114. Examen TIC A2 2014";
 preguntaids[21] = 10114


//  Id pregunta: 1857 Año de creación de pregunta: 2016
 questions[22]= "23)  Cuando un CPD (Centro de Proceso de Datos) ofrece 5 nueves, se refiere a su:";
 choices[22]= new Array();
 choices[22][0] = "Seguridad.";
 choices[22][1] = "Redundancia.";
 choices[22][2] = "Capacidad de refrigeraci&oacute;n a pleno rendimiento.";
 choices[22][3] = "Disponibilidad.";
 answers[22] = 3;
 units[22] = ['50'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1857. ";
 preguntaids[22] = 1857


//  Id pregunta: 9103 Año de creación de pregunta: 2014
 questions[23]= "24)  Los grandes sistemas, tambi&eacute;n llamados mainframe";
 choices[23]= new Array();
 choices[23][0] = "son desarrollados por muchos fabricantes.";
 choices[23][1] = "usan memoria distribuida y no compartida.";
 choices[23][2] = "son soluciones altamente propietarias.";
 choices[23][3] = "son sistemas d&eacute;bilmente acoplados.";
 answers[23] = 2;
 units[23] = ['50'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9103. Examen TIC-A1 2013";
 preguntaids[23] = 9103


//  Id pregunta: 8272 Año de creación de pregunta: 2011
 questions[24]= "25)  Los actuales dise&ntilde;os l&oacute;gicos de los chipset para la arquitectura x86 se estructuran en dos bloques funcionales: el Northbridge y el Southbridge. Indique cu&aacute;l de los siguientes subsistemas son competencia del Northbridge.";
 choices[24]= new Array();
 choices[24][0] = "Acceso a la RAM y controlador AGP.";
 choices[24][1] = "Controladores IDE y SATA";
 choices[24][2] = "Controladores USB y FIREWIRE";
 choices[24][3] = "Super I/O (Puerto serie, paralelo), audio y LAN";
 answers[24] = 0;
 units[24] = ['50'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8272. Examen TIC A2 2010 interna";
 preguntaids[24] = 8272


//  Id pregunta: 3359 Año de creación de pregunta: 2006
 questions[25]= "26)  Un sistema multiusuario es:";
 choices[25]= new Array();
 choices[25][0] = "Un sistema que posee varias CPUs y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[25][1] = "Un sistema que posee una sola CPU y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[25][2] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero concurrente de usuarios";
 choices[25][3] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero no concurrente de usuarios";
 answers[25] = 2;
 units[25] = ['50'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3359. ";
 preguntaids[25] = 3359


//  Id pregunta: 1851 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique cu&aacute;l de las siguientes afirmaciones es correcta. En un rack para albergar servidores, una U se refiere a:";
 choices[26]= new Array();
 choices[26][0] = "Una medida est&aacute;ndar de la anchura de los equipos que se pueden conectar.";
 choices[26][1] = "Una medida est&aacute;ndar del consumo de cada equipo.";
 choices[26][2] = "Una medida est&aacute;ndar de la altura de los equipos que se pueden conectar.";
 choices[26][3] = "Una medida est&aacute;ndar de la longitud de los ra&iacute;les horizontales para fijar los equipos.";
 answers[26] = 2;
 units[26] = ['50'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1851. ";
 preguntaids[26] = 1851


//  Id pregunta: 2654 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;En qu&eacute; consiste el 'refresco' de una memoria din&aacute;mica?:";
 choices[27]= new Array();
 choices[27][0] = "En el proceso de optimizaci&oacute;n de la temperatura de trabajo de este tipo de memorias";
 choices[27][1] = "En la operaci&oacute;n de reescritura peri&oacute;dica que hay que realizar en ellas para que no pierdan la informaci&oacute;n almacenada";
 choices[27][2] = "En la operaci&oacute;n de acceso peri&oacute;dico que hay que realizar a este tipo de memorias, para repetir la &uacute;ltima operaci&oacute;n realizada";
 choices[27][3] = "El refresco no es propio de las memorias din&aacute;micas";
 answers[27] = 1;
 units[27] = ['50'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2654. ";
 preguntaids[27] = 2654


//  Id pregunta: 3492 Año de creación de pregunta: 2006
 questions[28]= "29)  Espacio intermedio de almacenamiento utilizado hasta obtener una unidad de datos que permita su procesado";
 choices[28]= new Array();
 choices[28][0] = "Registro";
 choices[28][1] = "Cach&eacute;";
 choices[28][2] = "Buffer";
 choices[28][3] = "Pipelining";
 answers[28] = 2;
 units[28] = ['50'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3492. ";
 preguntaids[28] = 3492


//  Id pregunta: 3489 Año de creación de pregunta: 2006
 questions[29]= "30)  Cada uno de los multiples elementos utilizados internamente por el procesador para el de almacenamiento de datos intermedios en la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[29]= new Array();
 choices[29][0] = "Registro";
 choices[29][1] = "Cach&eacute;";
 choices[29][2] = "Buffer";
 choices[29][3] = "Pipelining";
 answers[29] = 0;
 units[29] = ['50'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3489. ";
 preguntaids[29] = 3489


//  Id pregunta: 3491 Año de creación de pregunta: 2006
 questions[30]= "31)  Copia &quot;cercana&quot; de datos que permite un acceso m&aacute;s r&aacute;pido que el almacenamiento habitual";
 choices[30]= new Array();
 choices[30][0] = "Registro";
 choices[30][1] = "Cach&eacute;";
 choices[30][2] = "Buffer";
 choices[30][3] = "Pipelining";
 answers[30] = 1;
 units[30] = ['50'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3491. ";
 preguntaids[30] = 3491


//  Id pregunta: 2472 Año de creación de pregunta: 2004
 questions[31]= "32)  Indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[31]= new Array();
 choices[31][0] = "CISC (Complex Instruction Set Computer) es la arquitectura tradicional del ordenador personal, en la que la CPU utiliza su microc&oacute;digo para ejecutar un juego muy completo de instrucciones";
 choices[31][1] = "En los procesadores CISC las instrucciones pueden ser de longitud variable y usar todos los modos de direccionamiento, requiriendo para ello complejos circuitos decodificadores que ralentizan la ejecuci&oacute;n de cada instrucci&oacute;n";
 choices[31][2] = "Los procesadores RISC (Reduced Instruction Set Computer) fijan la longitud de todas las instrucciones haci&eacute;ndola constante prohibiendo el modo de direccionamiento indirecto";
 choices[31][3] = "Los procesadores RISC necesitan un mayor n&uacute;mero de transistores, lo cual los hace m&aacute;s caros de producir y m&aacute;s dif&iacute;ciles de dise&ntilde;ar";
 answers[31] = 3;
 units[31] = ['50'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2472. ";
 preguntaids[31] = 2472


//  Id pregunta: 3150 Año de creación de pregunta: 2002
 questions[32]= "33)  Se&ntilde;ale cu&aacute;l de los siguientes es un principio de dise&ntilde;o RISC:";
 choices[32]= new Array();
 choices[32][0] = "Un amplio juego de instrucciones facilita el dise&ntilde;o de compiladores";
 choices[32][1] = "El modelo de ejecuci&oacute;n de pila es superior al de registros";
 choices[32][2] = "Los juegos de instrucciones amplios reducen el tama&ntilde;o de los programas";
 choices[32][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[32] = 3;
 units[32] = ['50'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3150. ";
 preguntaids[32] = 3150


//  Id pregunta: 2609 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal de un ordenador?:";
 choices[33]= new Array();
 choices[33][0] = "Volatilidad del contenido";
 choices[33][1] = "Tiempo de acceso peque&ntilde;o";
 choices[33][2] = "Direccionabilidad";
 choices[33][3] = "Acceso a trav&eacute;s de canal desde la unidad central de proceso";
 answers[33] = 3;
 units[33] = ['50'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2609. ";
 preguntaids[33] = 2609


//  Id pregunta: 2687 Año de creación de pregunta: 2002
 questions[34]= "35)  &iquest;Qu&eacute; paradigma de programaci&oacute;n reproduce mas fielmente el funcionamiento de un computador con arquitectura Von Neuman?:";
 choices[34]= new Array();
 choices[34][0] = "El l&oacute;gico";
 choices[34][1] = "El funcional";
 choices[34][2] = "El imperativo";
 choices[34][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[34] = 2;
 units[34] = ['50'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2687. ";
 preguntaids[34] = 2687


//  Id pregunta: 2839 Año de creación de pregunta: 2002
 questions[35]= "36)  En las m&aacute;quinas con tecnolog&iacute;a RISC:";
 choices[35]= new Array();
 choices[35][0] = "El n&uacute;mero de instrucciones es muy elevado";
 choices[35][1] = "Se emplea la microprogramaci&oacute;n";
 choices[35][2] = "No se emplea la microprogramaci&oacute;n";
 choices[35][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[35] = 2;
 units[35] = ['50'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2839. ";
 preguntaids[35] = 2839


//  Id pregunta: 8725 Año de creación de pregunta: 2013
 questions[36]= "37)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[36]= new Array();
 choices[36][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[36][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado";
 choices[36][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[36][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[36] = 3;
 units[36] = ['50'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8725. Examen TICA2-2011";
 preguntaids[36] = 8725


//  Id pregunta: 2644 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;Cu&aacute;l no es caracter&iacute;stica del puerto paralelo?:";
 choices[37]= new Array();
 choices[37][0] = "Transmite y recibe 8 bits a la vez";
 choices[37][1] = "Se define en el Nivel 2 de la ISO";
 choices[37][2] = "Es un puerto RS-232-C de 25 pines";
 choices[37][3] = "Tambi&eacute;n se le conoce en los PC&acute;s como printer port";
 answers[37] = 1;
 units[37] = ['50'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2644. ";
 preguntaids[37] = 2644


//  Id pregunta: 2565 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Qu&eacute; significan las siglas ASIC en el mundo de la arquitectura de computadores?:";
 choices[38]= new Array();
 choices[38][0] = "Circuitos integrados especializados";
 choices[38][1] = "Advanced Set Instructions Complex";
 choices[38][2] = "Nada";
 choices[38][3] = "Procesadores generales";
 answers[38] = 0;
 units[38] = ['50'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2565. Application-Specific Integrated Circuit";
 preguntaids[38] = 2565


//  Id pregunta: 8580 Año de creación de pregunta: 2013
 questions[39]= "40)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[39]= new Array();
 choices[39][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[39][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[39][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[39][3] = "Ninguna respuesta es correcta.";
 answers[39] = 1;
 units[39] = ['50'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8580. ";
 preguntaids[39] = 8580


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[40]= "41)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[40]= new Array();
 choices[40][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[40][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[40][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[40][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[40] = 2;
 units[40] = ['50'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[40] = 644


//  Id pregunta: 3488 Año de creación de pregunta: 2006
 questions[41]= "42)  Grupo de microchips dise&ntilde;ados para trabajar como una unidad para desarrollar una o varias funciones relacionadas";
 choices[41]= new Array();
 choices[41][0] = "BIOS";
 choices[41][1] = "Chip cluster";
 choices[41][2] = "Chipset";
 choices[41][3] = "Estado s&oacute;lido";
 answers[41] = 2;
 units[41] = ['50'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3488. ";
 preguntaids[41] = 3488


//  Id pregunta: 2641 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de hardware?:";
 choices[42]= new Array();
 choices[42][0] = "Componentes s&oacute;lidos y dispositivos de estado de un ordenador";
 choices[42][1] = "Conjunto de programas y datos que procesa el ordenador";
 choices[42][2] = "Componentes f&iacute;sicos y dispositivos de estado s&oacute;lido de un ordenador";
 choices[42][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[42] = 2;
 units[42] = ['50'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2641. ";
 preguntaids[42] = 2641


//  Id pregunta: 2818 Año de creación de pregunta: 2002
 questions[43]= "44)  En el sector de los procesadores cient&iacute;ficos:";
 choices[43]= new Array();
 choices[43][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[43][1] = "Se utilizan sistemas operativos propietarios.";
 choices[43][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[43][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[43] = 3;
 units[43] = ['49', '50'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2818. ";
 preguntaids[43] = 2818


//  Id pregunta: 8585 Año de creación de pregunta: 2013
 questions[44]= "45)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[44]= new Array();
 choices[44][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[44][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[44][2] = "El balanceo de carga solo puede implementarse por software";
 choices[44][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[44] = 2;
 units[44] = ['50'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8585. Examen TIC-A1 2011";
 preguntaids[44] = 8585


//  Id pregunta: 3347 Año de creación de pregunta: 2006
 questions[45]= "46)  La m&iacute;nima unidad de informaci&oacute;n gr&aacute;fica que puede ser controlada, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Bit";
 choices[45][1] = "GIU";
 choices[45][2] = "Resoluci&oacute;n";
 choices[45][3] = "Pixel";
 answers[45] = 3;
 units[45] = ['50'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3347. ";
 preguntaids[45] = 3347


//  Id pregunta: 2731 Año de creación de pregunta: 2002
 questions[46]= "47)  Dentro de los discos &oacute;pticos, los denominados WORM:";
 choices[46]= new Array();
 choices[46][0] = "Permiten escribir, borrar y leer datos de la misma forma que un disco  duro magn&eacute;tico";
 choices[46][1] = "Permiten al usuario escribir sobre un disco de forma imborrable";
 choices[46][2] = "No permiten al usuario escribir sobre el disco, pero s&iacute; puede leerse";
 choices[46][3] = "Permiten al usuario escribir sobre un disco y el borrado por una sola vez";
 answers[46] = 1;
 units[46] = ['50'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2731. ";
 preguntaids[46] = 2731


//  Id pregunta: 3355 Año de creación de pregunta: 2006
 questions[47]= "48)  La t&eacute;cnica usada para incrementar la velocidad de los PC, copiando a memoria RAM el c&oacute;digo de la memoria BIOS ROM tras el arranque, se denomina:";
 choices[47]= new Array();
 choices[47][0] = "Overclocking";
 choices[47][1] = "Ghosting";
 choices[47][2] = "Shadowing";
 choices[47][3] = "La BIOS no se puede ejecutar en una memoria RAM";
 answers[47] = 2;
 units[47] = ['50'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3355. ";
 preguntaids[47] = 3355


//  Id pregunta: 9233 Año de creación de pregunta: 2014
 questions[48]= "49)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[48]= new Array();
 choices[48][0] = "mensajes XML sobre protocolo SMTP.";
 choices[48][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[48][2] = "OData.(Open Data Protocol)";
 choices[48][3] = "BPMN (Business Process Message Notation).";
 answers[48] = 3;
 units[48] = ['50'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9233. Examen TIC A1 2013";
 preguntaids[48] = 9233


//  Id pregunta: 9384 Año de creación de pregunta: 2014
 questions[49]= "50)  Los fuegos de clase D son los que implican:";
 choices[49]= new Array();
 choices[49][0] = "Combustibles s&oacute;lidos como papel, cart&oacute;n, madera, pl&aacute;sticos, etc.";
 choices[49][1] = "Metales y aleaciones: magnesio, sodio, etc.";
 choices[49][2] = "Combustibles l&iacute;quidos, por ejemplo: aceite, derivados del petr&oacute;leo, etc.";
 choices[49][3] = "Gases: butano, metano, propano, etc.";
 answers[49] = 1;
 units[49] = ['50'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9384. Examen TIC A2  2013";
 preguntaids[49] = 9384


//  Id pregunta: 2639 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l es el significado de ASCII?:";
 choices[50]= new Array();
 choices[50][0] = "American System Code for Input Information";
 choices[50][1] = "Asynchonous System Code fot International Information";
 choices[50][2] = "American Standard Code for Input Information";
 choices[50][3] = "American Standard Code for Information Interchange";
 answers[50] = 3;
 units[50] = ['50'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2639. ";
 preguntaids[50] = 2639


//  Id pregunta: 2888 Año de creación de pregunta: 2002
 questions[51]= "52)  HTTL significa:";
 choices[51]= new Array();
 choices[51][0] = "L&oacute;gica Transistor-Transistor de alta velocidad.";
 choices[51][1] = "Lenguaje de transferencia HiperTexto.";
 choices[51][2] = "Lenguaje de Tokens HiperTexto.";
 choices[51][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[51] = 0;
 units[51] = ['50', '51'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2888. ";
 preguntaids[51] = 2888


//  Id pregunta: 1860 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre Fibre Channel";
 choices[52]= new Array();
 choices[52][0] = "Es una tecnolog&iacute;a utilizada para implementar SANs (Storage &Aacute;rea Networks).";
 choices[52][1] = "Funciona exclusivamente sobre fibra &oacute;ptica.";
 choices[52][2] = "Con Fibre Channel se pueden desplegar topolog&iacute;as punto a punto, en anillo e infraestructura conmutada.";
 choices[52][3] = "Los conmutadores Fibre Channel pueden comenzar a transmitir un frame antes de recibirlo en su totalidad.";
 answers[52] = 1;
 units[52] = ['50'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1860. ";
 preguntaids[52] = 1860


//  Id pregunta: 10537 Año de creación de pregunta: 2015
 questions[53]= "54)  En relaci&oacute;n con la taxonom&iacute;a de Flynn, una de las siguientes asociaciones no es correcta";
 choices[53]= new Array();
 choices[53][0] = "SISD - Monoprocesador";
 choices[53][1] = "MISD - Arquitectura sist&oacute;lica";
 choices[53][2] = "SIMD - Multiproceso";
 choices[53][3] = "SMP - Sistemas multicomputador";
 answers[53] = 3;
 units[53] = ['50'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10537. ";
 preguntaids[53] = 10537


//  Id pregunta: 1753 Año de creación de pregunta: 2016
 questions[54]= "55)  A la hora de crear un CPD, se&ntilde;ale qu&eacute; consideraci&oacute;n NO debe tener en cuenta:";
 choices[54]= new Array();
 choices[54][0] = "Todos los cables tendidos bajo el suelo de un CPD deber&iacute;an ser LSZH";
 choices[54][1] = "El CPD deber&iacute;a contar con dos acometidas el&eacute;ctricas independientes.";
 choices[54][2] = "El CPD no deber&iacute;a ubicarse sobre un aparcamiento o estacionamiento de coches.";
 choices[54][3] = "Dentro de un CPD, en el &aacute;rea de ordenadores, deber&iacute;a utilizarse para la extinci&oacute;n de incendios polvo seco.";
 answers[54] = 3;
 units[54] = ['50'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1753. ";
 preguntaids[54] = 1753


//  Id pregunta: 2923 Año de creación de pregunta: 2002
 questions[55]= "56)  La arquitectura RISC:";
 choices[55]= new Array();
 choices[55][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[55][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[55][2] = "No es adaptable al sector de los microordenadores";
 choices[55][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[55] = 3;
 units[55] = ['50', '51'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2923. ";
 preguntaids[55] = 2923


//  Id pregunta: 2582 Año de creación de pregunta: 2002
 questions[56]= "57)  Arquitectura &ldquo;fault tolerant&rdquo; significa:";
 choices[56]= new Array();
 choices[56][0] = "Que el sistema tiene elementos redundantes activos";
 choices[56][1] = "Que el sistema es capaz de funcionar correctamente a&uacute;n en el caso de fallo de algunos elementos";
 choices[56][2] = "Que el sistema tiene elementos redundantes pasivos";
 choices[56][3] = "Todas las anteriores son ciertas";
 answers[56] = 1;
 units[56] = ['50'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2582. ";
 preguntaids[56] = 2582


