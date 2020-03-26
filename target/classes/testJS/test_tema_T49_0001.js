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
//  Id pregunta: 3085 Año de creación de pregunta: 2002
 questions[0]= "1)  Un sistema IBM z/Series:";
 choices[0]= new Array();
 choices[0][0] = "Puede ejecutar Linux";
 choices[0][1] = "Puede ejecutar OS/400";
 choices[0][2] = "Puede ejecutar Windows 2000";
 choices[0][3] = "Todas son ciertas";
 answers[0] = 0;
 units[0] = ['49'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3085. ";
 preguntaids[0] = 3085


//  Id pregunta: 2818 Año de creación de pregunta: 2002
 questions[1]= "2)  En el sector de los procesadores cient&iacute;ficos:";
 choices[1]= new Array();
 choices[1][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[1][1] = "Se utilizan sistemas operativos propietarios.";
 choices[1][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[1][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[1] = 3;
 units[1] = ['49', '50'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2818. ";
 preguntaids[1] = 2818


//  Id pregunta: 1373 Año de creación de pregunta: 2016
 questions[2]= "3)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[2]= new Array();
 choices[2][0] = "Fibra &oacute;ptica.";
 choices[2][1] = "Mainframes.";
 choices[2][2] = "Buses PCr.";
 choices[2][3] = "Conectores de fibra &oacute;ptica.";
 answers[2] = 0;
 units[2] = ['49'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 1373. ";
 preguntaids[2] = 1373


//  Id pregunta: 2543 Año de creación de pregunta: 2004
 questions[3]= "4)  Dada la arquitectura de supercomputaci&oacute;n MPP, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[3]= new Array();
 choices[3][0] = "Distintas CPU acceden a la misma &aacute;rea de memoria";
 choices[3][1] = "Distintas CPU acceden a sus propias &aacute;reas de memoria";
 choices[3][2] = "Cada CPU puede acceder tanto a su propia &aacute;rea de memoria como a un &aacute;rea com&uacute;n";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = 1;
 units[3] = ['49'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2543. ";
 preguntaids[3] = 2543


//  Id pregunta: 1926 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;les de las siguientes NO es una caracter&iacute;stica esencial de los sistemas de altas prestaciones?";
 choices[4]= new Array();
 choices[4][0] = "Arquitectura altamente paralela.";
 choices[4][1] = "Gran capacidad de compute.";
 choices[4][2] = "Tiempo compartido.";
 choices[4][3] = "Elevado coste.";
 answers[4] = 2;
 units[4] = ['49'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1926. ";
 preguntaids[4] = 1926


//  Id pregunta: 3346 Año de creación de pregunta: 2006
 questions[5]= "6)  En la clasificaci&oacute;n de arquitectura de ordenadores de Flynn, los procesadores vectoriales corresponden a la clase de ordenadores:";
 choices[5]= new Array();
 choices[5][0] = "SISD ( Single Instruction Single Data)";
 choices[5][1] = "SIMD ( Single Instruction Multiple Data)";
 choices[5][2] = "MIMD (Multiple Instruction Multiple Data)";
 choices[5][3] = "MISD ( Multiple Instruction Single Data)";
 answers[5] = 1;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3346. ";
 preguntaids[5] = 3346


//  Id pregunta: 3344 Año de creación de pregunta: 2006
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones se aproxima a la definici&oacute;n de FLOPs?:";
 choices[6]= new Array();
 choices[6][0] = "Expresa la velocidad de ejecuci&oacute;n de las instrucciones de una m&aacute;quina.";
 choices[6][1] = "Expresa la potencia en generaci&oacute;n de c&aacute;lculos cient&iacute;fico-t&eacute;cnicos.";
 choices[6][2] = "Expresa la velocidad para realizar operaciones en coma flotante por unidad de tiempo.";
 choices[6][3] = "Expresa la velocidad para realizar operaciones en coma flotante por segundo.";
 answers[6] = 3;
 units[6] = ['49'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3344. ";
 preguntaids[6] = 3344


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[7]= "8)  La potencia de un microprocesador se mide en FLOPS, unidad que indica:";
 choices[7]= new Array();
 choices[7][0] = "El n&uacute;mero de accesos a memoria que es capaz de realizar en un segundo.";
 choices[7][1] = "La frecuencia de la se&ntilde;al de reloj del microprocesador.";
 choices[7][2] = "El n&uacute;mero de operaciones de coma flotante por segundo que puede realizar.";
 choices[7][3] = "El n&uacute;mero de millones de instrucciones por segundo que puede procesar.";
 answers[7] = 2;
 units[7] = ['49'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 641. AGE A2 2015";
 preguntaids[7] = 641


//  Id pregunta: 1293 Año de creación de pregunta: 2016
 questions[8]= "9)  En los sistemas multiprocesador, los sistemas MIMD se caracterizan por:";
 choices[8]= new Array();
 choices[8][0] = "Varias unidades funcionales realizan diferentes operaciones sobre diferentes datos.";
 choices[8][1] = "Una &uacute;nica unidad funcional realiza varias operaciones sobre diferentes datos.";
 choices[8][2] = "Varias unidades funcionales realizan operaciones similares sobre datos diferentes.";
 choices[8][3] = "Una &uacute;nica unidad funcional realiza una &uacute;nica operaci&oacute;n sobre diferentes datos.";
 answers[8] = 0;
 units[8] = ['49'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1293. ";
 preguntaids[8] = 1293


//  Id pregunta: 3345 Año de creación de pregunta: 2006
 questions[9]= "10)  Para definir un sistema SIMD se podr&iacute;a decir que &hellip;:";
 choices[9]= new Array();
 choices[9][0] = "Una instrucci&oacute;n no puede actuar sobre alguno de los elementos de procesamiento.";
 choices[9][1] = "Una instrucci&oacute;n act&uacute;a sobre un elemento de procesamiento.";
 choices[9][2] = "Una instrucci&oacute;n act&uacute;a sobre uno o varios elementos de procesamiento.";
 choices[9][3] = "Ninguna de las anteriores.";
 answers[9] = 2;
 units[9] = ['49'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3345. ";
 preguntaids[9] = 3345


//  Id pregunta: 6521 Año de creación de pregunta: 2003
 questions[10]= "11)  Se&ntilde;ale la diferencia entre SMP y clustering";
 choices[10]= new Array();
 choices[10][0] = "SMP utiliza memoria compartida y el clustering paso de mensaje";
 choices[10][1] = "SMP utiliza paralelismo puro y el clustering memoria compartida";
 choices[10][2] = "SMP utiliza memoria compartida y el clustering paralelismo puro";
 choices[10][3] = "SMP utiliza memoria compartida y el clustering paralelismo de datos";
 answers[10] = 0;
 units[10] = ['49'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 6521. ";
 preguntaids[10] = 6521


//  Id pregunta: 1071 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[11]= new Array();
 choices[11][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[11][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[11][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[11][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[11] = 3;
 units[11] = ['49'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1071. ";
 preguntaids[11] = 1071


//  Id pregunta: 3035 Año de creación de pregunta: 2002
 questions[12]= "13)  Seg&uacute;n la taxonom&iacute;a de Flynn de arquitecturas con proceso en paralelo, una m&aacute;quina MISD:";
 choices[12]= new Array();
 choices[12][0] = "Es la que se corresponde con la arquitectura de Von Neumann";
 choices[12][1] = "Es la estructura de un sistema con multiprocesador";
 choices[12][2] = "Es una superestructura pipe-line formada por varios procesadores, en la que cada uno hace parte del proceso sobre el flujo de datos que circula entre ellos";
 choices[12][3] = "No se corresponde con nada de lo anterior";
 answers[12] = 2;
 units[12] = ['49'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3035. ";
 preguntaids[12] = 3035


//  Id pregunta: 1928 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;En qu&eacute; consiste el esquema de paralelizaci&oacute;n SIMD?";
 choices[13]= new Array();
 choices[13][0] = "Los procesadores pueden ejecutar diferentes instrucciones.";
 choices[13][1] = "Los procesadores trabajan sobre diferentes conjuntos de datos.";
 choices[13][2] = "Los procesadores pueden ejecutar diferentes instrucciones y trabajan sobre diferentes conjuntos de datos.";
 choices[13][3] = "Los procesadores trabajan sobre el mismo conjunto de datos.";
 answers[13] = 1;
 units[13] = ['49'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1928. ";
 preguntaids[13] = 1928


//  Id pregunta: 3318 Año de creación de pregunta: 2004
 questions[14]= "15)  Indique la afirmaci&oacute;n incorrecta, respecto a SMP";
 choices[14]= new Array();
 choices[14][0] = "Es una arquitectura de ordenador con performances muy r&aacute;pidas";
 choices[14][1] = "Tiene multiples CPU disponibles para efectuar procesos individuales completos simult&aacute;neamente";
 choices[14][2] = "Todas las CPU comparten la misma memoria";
 choices[14][3] = "Sus siglas son Symetric Massively Processing";
 answers[14] = 3;
 units[14] = ['49'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3318. ";
 preguntaids[14] = 3318


//  Id pregunta: 1465 Año de creación de pregunta: 2016
 questions[15]= "16)  Un sistema multiprocesador en el que todas las CPU comparten la memoria corresponde a un modelo del tipo:";
 choices[15]= new Array();
 choices[15][0] = "SMP.";
 choices[15][1] = "MPP o SMP.";
 choices[15][2] = "Ninguno, puesto que en un sistema multiprocesador las CPU nunca comparten memoria.";
 choices[15][3] = "MPP.";
 answers[15] = 0;
 units[15] = ['49'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1465. ";
 preguntaids[15] = 1465


//  Id pregunta: 2666 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Qu&eacute; arquitectura monoprocesador se caracteriza por ejecutar una instruccion sobre varios datos de manera simult&aacute;nea?:";
 choices[16]= new Array();
 choices[16][0] = "SIMD";
 choices[16][1] = "MIMD";
 choices[16][2] = "SISD";
 choices[16][3] = "MISD";
 answers[16] = 0;
 units[16] = ['49'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2666. ";
 preguntaids[16] = 2666


//  Id pregunta: 3077 Año de creación de pregunta: 2002
 questions[17]= "18)  Un procesador superescalar es aqu&eacute;l que:";
 choices[17]= new Array();
 choices[17][0] = "Contiene varias unidades de ejecuci&oacute;n independientes de forma que puede ejecutar varias instrucciones simult&aacute;neamente";
 choices[17][1] = "Est&aacute; optimizado para maquinas multiprocesador, principalmente por su implementaci&oacute;n de algoritmos que aseguran la coherencia de las cach&eacute;s";
 choices[17][2] = "Contiene varias unidades de coma flotante posibilitando la paralelizaci&oacute;n de c&oacute;digo en servidores de c&aacute;lculo intensivo";
 choices[17][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[17] = 0;
 units[17] = ['49'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3077. ";
 preguntaids[17] = 3077


//  Id pregunta: 3361 Año de creación de pregunta: 2006
 questions[18]= "19)  Ordene de menor a mayor seg&uacute;n el n&uacute;mero de usuarios y carga de trabajo esperado:";
 choices[18]= new Array();
 choices[18][0] = "PC, estaci&oacute;n de trabajo, miniordenador, mainframe";
 choices[18][1] = "Miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 choices[18][2] = "PC, miniordenador, estaci&oacute;n de trabajo, mainframe";
 choices[18][3] = "Miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 answers[18] = 0;
 units[18] = ['49'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3361. ";
 preguntaids[18] = 3361


//  Id pregunta: 1116 Año de creación de pregunta: 2016
 questions[19]= "20)  La arquitectura GRID est&aacute; compuesta por capas. La capa m&aacute;s baja y donde se encuentran los recursos computacionales y de almacenamiento que ser&aacute;n compartidos por los protocolos grid se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Fabric.";
 choices[19][1] = "Connectivity.";
 choices[19][2] = "Resource.";
 choices[19][3] = "Collective.";
 answers[19] = 0;
 units[19] = ['49'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1116. ";
 preguntaids[19] = 1116


//  Id pregunta: 6752 Año de creación de pregunta: 2009
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes paquetes software se usa para construir grids?:";
 choices[20]= new Array();
 choices[20][0] = "Globus Toolkit";
 choices[20][1] = "Grid Squema Toolkit";
 choices[20][2] = "EYEE Toolkit";
 choices[20][3] = "WS-DAI";
 answers[20] = 0;
 units[20] = ['49'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6752. MAP 2008 A1";
 preguntaids[20] = 6752


//  Id pregunta: 6524 Año de creación de pregunta: 2003
 questions[21]= "22)  Una soluci&oacute;n RISC se caracteriza por:";
 choices[21]= new Array();
 choices[21][0] = "Pocos formatos de instrucci&oacute;n (longitud fija)";
 choices[21][1] = "Muchos modos de direccionamiento";
 choices[21][2] = "Dos instrucciones de almacenamiento (load/store)";
 choices[21][3] = "Tanto a) como c)";
 answers[21] = 3;
 units[21] = ['49'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 6524. ";
 preguntaids[21] = 6524


//  Id pregunta: 3498 Año de creación de pregunta: 2006
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las arquitecturas Grid?:";
 choices[22]= new Array();
 choices[22][0] = "Resultados de supercomputaci&oacute;n (alta transaccionalidad) a bajo coste.";
 choices[22][1] = "La obsolescencia deja de ser un problema.";
 choices[22][2] = "Los nodos de la red no son dedicados. Podemos parametrizar exactamente el porcentaje de dedicaci&oacute;n a la red.";
 choices[22][3] = "No ser&aacute; necesario modificar las aplicaciones desarrolladas para que &eacute;stas puedan ser ejecutadas en la arquitectura Grid.";
 answers[22] = 3;
 units[22] = ['49'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3498. ";
 preguntaids[22] = 3498


//  Id pregunta: 2548 Año de creación de pregunta: 2004
 questions[23]= "24)  Indique cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP (Symmetric MultiProcessing) y MPP (Massively Paralleling MultiProcessing) es falsa:";
 choices[23]= new Array();
 choices[23][0] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[23][1] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido en segmentos que se comuniquen entre s&iacute;";
 choices[23][2] = "MPP no sufre el cuello de botella que sufre SMP en el acceso a memoria";
 choices[23][3] = "Un cluster est&aacute; compuesto por dos o m&aacute;s ordenadores que se comportan como una sola m&aacute;quina";
 answers[23] = 0;
 units[23] = ['49'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2548. TAI 2004";
 preguntaids[23] = 2548


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[24]= "25)  El conjunto de servicios que permite la interoperabilidad de aplicaciones distribuidas en una LAN se conoce como:";
 choices[24]= new Array();
 choices[24][0] = "inyector de dependencia.";
 choices[24][1] = "middleware.";
 choices[24][2] = "framework.";
 choices[24][3] = "controller.";
 answers[24] = 1;
 units[24] = ['49'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 642. AGE A2 2015";
 preguntaids[24] = 642


//  Id pregunta: 6523 Año de creación de pregunta: 2003
 questions[25]= "26)  Una soluci&oacute;n basada en Grid Computing ser&iacute;a adecuada para:";
 choices[25]= new Array();
 choices[25][0] = "Obtener rendimientos de pico";
 choices[25][1] = "Aplicaciones multiproceso";
 choices[25][2] = "Entornos de trabajo con productividad sostenida";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = 2;
 units[25] = ['49'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6523. ";
 preguntaids[25] = 6523


//  Id pregunta: 3319 Año de creación de pregunta: 2004
 questions[26]= "27)  &iquest;C&oacute;mo se conoce la taxonom&iacute;a, que clasifica las arquitecturas de ordenadores en SISD, SIMD, MISD, MIMD?";
 choices[26]= new Array();
 choices[26][0] = "Kuck";
 choices[26][1] = "Treleaven";
 choices[26][2] = "Flynn";
 choices[26][3] = "Gajski y Pier";
 answers[26] = 2;
 units[26] = ['49'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3319. ";
 preguntaids[26] = 3319


//  Id pregunta: 6525 Año de creación de pregunta: 2003
 questions[27]= "28)  Una soluci&oacute;n CISC no se caracteriza por:";
 choices[27]= new Array();
 choices[27][0] = "Muchos modos de direccionamiento";
 choices[27][1] = "Unidad de control cableada";
 choices[27][2] = "N&uacute;mero de instrucciones muy elevado";
 choices[27][3] = "Varios formatos de instrucci&oacute;n (longitud variable)";
 answers[27] = 1;
 units[27] = ['49'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 6525. ";
 preguntaids[27] = 6525


//  Id pregunta: 3497 Año de creación de pregunta: 2006
 questions[28]= "29)  Respecto de las arquitecturas Grid, es falso afirmar que:";
 choices[28]= new Array();
 choices[28][0] = "El porcentaje de dedicaci&oacute;n de cada m&aacute;quina de la arquitectura es fijo e independiente de la carga de cada una.";
 choices[28][1] = "Su nombre proviene del paradigma de la red el&eacute;ctrica.";
 choices[28][2] = "Los recursos que las componen se encuentran distribuidos geogr&aacute;ficamente.";
 choices[28][3] = "Sus creadores fueron Ian Foster y Carl Kesselman.";
 answers[28] = 0;
 units[28] = ['49'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3497. ";
 preguntaids[28] = 3497


//  Id pregunta: 6522 Año de creación de pregunta: 2003
 questions[29]= "30)  Dentro de la clasificaci&oacute;n de Flynn, un ordenador con Multiprocesador Masivamente Paralelo (MPP), se clasificar&iacute;a en la siguiente categor&iacute;a:";
 choices[29]= new Array();
 choices[29][0] = "SISD";
 choices[29][1] = "SIMD";
 choices[29][2] = "MISD";
 choices[29][3] = "MIMD";
 answers[29] = 3;
 units[29] = ['49'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6522. ";
 preguntaids[29] = 6522


//  Id pregunta: 5719 Año de creación de pregunta: 2007
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el recurso Quorum de un cluster?";
 choices[30]= new Array();
 choices[30][0] = "contiene datos del firmware del hardware del fabricante de los servidores que forman el cluster.";
 choices[30][1] = "contiene los &Uacute;ltimos datos accedidos par el usuario.";
 choices[30][2] = "ofrece una configuraci&oacute;n consistente del cluster.";
 choices[30][3] = "no existe el recurso Quorum en un cluster.";
 answers[30] = 2;
 units[30] = ['49'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5719. ";
 preguntaids[30] = 5719


//  Id pregunta: 2870 Año de creación de pregunta: 2002
 questions[31]= "32)  En un sistema vectorial:";
 choices[31]= new Array();
 choices[31][0] = "Los MFLOPS pico son mayores que los MIPS";
 choices[31][1] = "Los MIPS pico son los mismos que los MFLOPs pico";
 choices[31][2] = "Ambas variables no tienen relaci&oacute;n directa";
 choices[31][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[31] = 0;
 units[31] = ['49'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2870. ";
 preguntaids[31] = 2870


//  Id pregunta: 3267 Año de creación de pregunta: 2003
 questions[32]= "33)  La escalabilidad vertical tiene que ver con:";
 choices[32]= new Array();
 choices[32][0] = "Granjas de servidores";
 choices[32][1] = "Servidores en rack";
 choices[32][2] = "Cluster de seridores";
 choices[32][3] = "Nada de lo anterior";
 answers[32] = 3;
 units[32] = ['49'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3267. ";
 preguntaids[32] = 3267


//  Id pregunta: 5996 Año de creación de pregunta: 2003
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones corresponde a una de las caracter&iacute;sticas de los procesadores paralelos (MIMD):";
 choices[33]= new Array();
 choices[33][0] = "Todas las unidades de ejecuci&oacute;n paralela est&aacute;n sincronizadas y todas responden a una sola instrucci&oacute;n que emana de un &uacute;nico contador de programa.";
 choices[33][1] = "Una memoria central contiene los programas y una unidad de control centralizada se encarga de extraer cada instrucci&oacute;n y ejecutarla.";
 choices[33][2] = "Son &uacute;tiles para las operaciones que repiten los mismos c&aacute;lculos en un conjunto de datos (vectores).";
 choices[33][3] = "Se trata de un grupo de procesadores independientes cada uno de ellos con su propio contador de programa y sus propios datos.";
 answers[33] = 3;
 units[33] = ['49'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5996. TIC B 2007";
 preguntaids[33] = 5996


//  Id pregunta: 2604 Año de creación de pregunta: 2002
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes afirmaciones se ajusta m&aacute;s a la definici&oacute;n de MIPS?:";
 choices[34]= new Array();
 choices[34][0] = "Expresa la capacidad de ejecuci&oacute;n de instrucciones de una m&aacute;quina";
 choices[34][1] = "Expresa la velocidad de ejecuci&oacute;n en miles de intrucciones por segundo";
 choices[34][2] = "Expresa la potencia de c&aacute;lculo cient&iacute;fico de un computador";
 choices[34][3] = "Expresa la potencia de c&aacute;lculo de generaci&oacute;n de gr&aacute;ficos";
 answers[34] = 0;
 units[34] = ['49'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2604. ";
 preguntaids[34] = 2604


//  Id pregunta: 1927 Año de creación de pregunta: 2016
 questions[35]= "36)  La funci&oacute;n de un planificador en sistemas de altas prestaciones es:";
 choices[35]= new Array();
 choices[35][0] = "Contabilizar el tiempo consumido por cada proceso.";
 choices[35][1] = "Seleccionar trabajos en funci&oacute;n de su prioridad.";
 choices[35][2] = "Realizar cambios de contexto de los procesos.";
 choices[35][3] = "Asignar la cuota de tiempo de c&aacute;lculo (walltime).";
 answers[35] = 1;
 units[35] = ['49'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1927. ";
 preguntaids[35] = 1927


//  Id pregunta: 3207 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Qu&eacute; es MOSIX?";
 choices[36]= new Array();
 choices[36][0] = "MOSIX es un conjunto de herramientas especialmente desarrolladas para la construcci&oacute;n de clusters Linux basados en el procesador x86";
 choices[36][1] = "MOSIX es un conjunto de herramientas especialmente desarrolladas para la construcci&oacute;n de clusters Unix";
 choices[36][2] = "MOSIX es un conjunto de herramientas especialmente desarrolladas para la construcci&oacute;n de clusters Linux";
 choices[36][3] = "MOSIX es un conjunto de herramientas especialmente desarrolladas para la construcci&oacute;n de clusters Unix basados en el procesador x86";
 answers[36] = 0;
 units[36] = ['49'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3207. ";
 preguntaids[36] = 3207


//  Id pregunta: 3494 Año de creación de pregunta: 2006
 questions[37]= "38)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto de la Taxonom&iacute;a de Flynn:";
 choices[37]= new Array();
 choices[37][0] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del tipo de acceso a memoria.";
 choices[37][1] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la tipolog&iacute;a de flujos de datos e instrucciones.";
 choices[37][2] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la capacidad de procesamiento.";
 choices[37][3] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del acoplamiento entre los distintos procesadores.";
 answers[37] = 1;
 units[37] = ['49'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3494. ";
 preguntaids[37] = 3494


//  Id pregunta: 6713 Año de creación de pregunta: 2009
 questions[38]= "39)  Indique cu&aacute;l de las siguientes afirmaciones es una caracter&iacute;stica de la tecnolog&iacute;a de Grid Computing:";
 choices[38]= new Array();
 choices[38][0] = "Los nodos tienen que estar dedicados";
 choices[38][1] = "Todos los sistemas deben ser homog&eacute;neos";
 choices[38][2] = "La escalabilidad es parametrizable";
 choices[38][3] = "Los recursos no se localizan din&aacute;micamente";
 answers[38] = 2;
 units[38] = ['49'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6713. MAP 2008 A1";
 preguntaids[38] = 6713


//  Id pregunta: 7831 Año de creación de pregunta: 2010
 questions[39]= "40)  Indique cu&aacute;l de las siguientes afirmaciones es una caracter&iacute;stica de la tecnolog&iacute;a de Grid Computing:";
 choices[39]= new Array();
 choices[39][0] = "Los nodos tienen que estar dedicados.";
 choices[39][1] = "Todos los sistemas deben ser homog&eacute;neos.";
 choices[39][2] = "La escalabilidad es parametrizable.";
 choices[39][3] = "Los recursos no se localizan din&aacute;micamente.";
 answers[39] = 2;
 units[39] = ['49'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7831. ";
 preguntaids[39] = 7831


//  Id pregunta: 3496 Año de creación de pregunta: 2006
 questions[40]= "41)  Respecto de la SSI (Single System Image) de un cluster, es falso que:";
 choices[40]= new Array();
 choices[40][0] = "Es generada por un middleware que se situa entre el entorno de usuario y el sistema operativo.";
 choices[40][1] = "Podemos encontrar SSIs hardware, a nivel de kernel de sistema operativo y de aplicaci&oacute;n.";
 choices[40][2] = "La soluci&oacute;n de SSI m&aacute;s eficiente en cuanto a tiempos de ejecuci&oacute;n es la implementada en el kernel del sistema operativo.";
 choices[40][3] = "Genera una apariencia de recurso unificado a partir de un grupo de computadores interconectados.";
 answers[40] = 2;
 units[40] = ['49'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3496. ";
 preguntaids[40] = 3496


//  Id pregunta: 1736 Año de creación de pregunta: 2016
 questions[41]= "42)  El Lenguaje de Control de Trabajos (JCL), es un conjunto de especificaciones que constituyen un lenguaje de programaci&oacute;n de tareas para el sistema operativo que gobierna un equipo inform&aacute;tico, usado en Mainframes. Entre sus caracter&iacute;sticas indicar la respuesta err&oacute;nea:";
 choices[41]= new Array();
 choices[41][0] = "Las sentencias JCL comienzan con //";
 choices[41][1] = "A partir de la columna 52 se considera comentario";
 choices[41][2] = "La primera sentencia es JOB";
 choices[41][3] = "Todas las sentencias han de escribirse en MAY&Uacute;SCULAS";
 answers[41] = 1;
 units[41] = ['49'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1736. ";
 preguntaids[41] = 1736


//  Id pregunta: 2480 Año de creación de pregunta: 2004
 questions[42]= "43)  Un sistema multiproceso NUMA se diferencia de uno SMP en:";
 choices[42]= new Array();
 choices[42][0] = "Su menor escalabilidad.";
 choices[42][1] = "Su utilizaci&oacute;n de una red de &aacute;rea local en lugar de un bus para la comunicaci&oacute;n entre CPU's.";
 choices[42][2] = "Su utilizaci&oacute;n de m&aacute;s de un bus para comunicar CPU's y memoria.";
 choices[42][3] = "Su falta de mecanismos de coherencia de cache.";
 answers[42] = 2;
 units[42] = ['49'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2480. ";
 preguntaids[42] = 2480


//  Id pregunta: 6880 Año de creación de pregunta: 2010
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre &quot;grid computing&quot; es FALSA:";
 choices[43]= new Array();
 choices[43][0] = "La escalabilidad parametrizable es una caracter&iacute;stica muy importante de esta arquitectura.";
 choices[43][1] = "Son sistemas homog&eacute;neos.";
 choices[43][2] = "Los nodos no tienen que estar dedicados.";
 choices[43][3] = "Se puede conseguir cerca de un 100 % de utilizaci&oacute;n de la CPU.";
 answers[43] = 1;
 units[43] = ['49'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6880. TIC A 2009";
 preguntaids[43] = 6880


//  Id pregunta: 3325 Año de creación de pregunta: 2004
 questions[44]= "45)  &iquest;Qu&eacute; es un cluster?";
 choices[44]= new Array();
 choices[44][0] = "Un sistema paralelo distribuido de &aacute;mbito local";
 choices[44][1] = "Un sistema paralelo distribuido de &aacute;mbito global";
 choices[44][2] = "Un sistema distribuido paralelo de &aacute;mbito local";
 choices[44][3] = "Un sistema distribuido paralelo de &aacute;mbito global";
 answers[44] = 0;
 units[44] = ['49'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3325. ";
 preguntaids[44] = 3325


//  Id pregunta: 3044 Año de creación de pregunta: 2002
 questions[45]= "46)  Se&ntilde;ale la respuesta correcta. El software de base comprende:";
 choices[45]= new Array();
 choices[45][0] = "El sistema operativo, el sistema de gesti&oacute;n de datos , el software de comunicaciones y las utilidades";
 choices[45][1] = "El sistema operativo,  el software de comunicaciones y las utilidades";
 choices[45][2] = "El sistema operativo, el sistema de gesti&oacute;n de datos  y las utilidades";
 choices[45][3] = "El sistema operativo y las utilidades";
 answers[45] = 0;
 units[45] = ['49', '56'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3044. ";
 preguntaids[45] = 3044


//  Id pregunta: 4419 Año de creación de pregunta: 2002
 questions[46]= "47)  La arquitectura 'fault tolerant' se caracteriza por :";
 choices[46]= new Array();
 choices[46][0] = "La ejecuci&oacute;n de una instrucci&oacute;n se divide en fases";
 choices[46][1] = "Las diferentes funciones del sistema se encuentran distribuidas en procesadores especializados";
 choices[46][2] = "Existe suficiente redundancia para asegurar un funcionamiento correcto en caso de fallo";
 choices[46][3] = "Todos los componentes del ordenador intercambian datos compartiendo los buses";
 answers[46] = 2;
 units[46] = ['49'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 4419. ";
 preguntaids[46] = 4419


//  Id pregunta: 4422 Año de creación de pregunta: 2005
 questions[47]= "48)  La disponibilidad de un sistema se define como:";
 choices[47]= new Array();
 choices[47][0] = "La proporci&oacute;n de tiempo en la que es realmente utilizado";
 choices[47][1] = "El cociente entre el tiempo medio de reparaci&oacute;n y el tiempo medio entre fallos";
 choices[47][2] = "El porcentaje de tiempo que el sistema est&aacute; disponible";
 choices[47][3] = "La probabilidad de que un sistema falle en un instante dado";
 answers[47] = 2;
 units[47] = ['49'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 4422. Definici&oacute;n dada en Magerit V2";
 preguntaids[47] = 4422


//  Id pregunta: 1852 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;A qu&eacute; categor&iacute;a de la taxonom&iacute;a de Flynn pertenecen los microprocesadores multin&uacute;cleo?";
 choices[48]= new Array();
 choices[48][0] = "SISD";
 choices[48][1] = "SIMD";
 choices[48][2] = "MISD";
 choices[48][3] = "MIMD";
 answers[48] = 3;
 units[48] = ['49'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1852. ";
 preguntaids[48] = 1852


//  Id pregunta: 1572 Año de creación de pregunta: 2016
 questions[49]= "50)  Atendiendo a la clasificaci&oacute;n de arquitecturas MIMD (Multiple Instruction stream, Multiple Data stream) [Johson88], se&ntilde;ale cu&aacute;l de las siguientes respuestas se corresponder&iacute;a con una implementaci&oacute;n del tipo DMMP (Distributed Memory/ Message passing):";
 choices[49]= new Array();
 choices[49][0] = "Arquitecturas de memoria compartida o SMP.";
 choices[49][1] = "Arquitecturas de memoria virtual-compartida.";
 choices[49][2] = "No existen implementaciones de esta tipolog&iacute;a.";
 choices[49][3] = "Clusters.";
 answers[49] = 3;
 units[49] = ['49'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1572. ";
 preguntaids[49] = 1572


//  Id pregunta: 3495 Año de creación de pregunta: 2006
 questions[50]= "51)  Acerca de los sistemas MPP puede afirmarse:";
 choices[50]= new Array();
 choices[50][0] = "Constituyen una categor&iacute;a de los sistemas MISD donde se incluyen los arrays sist&oacute;licos.";
 choices[50][1] = "Constituyen una categor&iacute;a de los sistemas MIMD con una &uacute;nica memoria compartida.";
 choices[50][2] = "A su vez se dividen en sistemas de gesti&oacute;n UMA y sistemas de gesti&oacute;n NUMA.";
 choices[50][3] = "Categor&iacute;a de los sistemas MIMD con memoria distribuida.";
 answers[50] = 3;
 units[50] = ['49'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3495. ";
 preguntaids[50] = 3495


//  Id pregunta: 3301 Año de creación de pregunta: 2004
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura hardware NUMA es cierta?";
 choices[51]= new Array();
 choices[51][0] = "Se tarda m&aacute;s en acceder a ciertas zonas de memoria que a otras";
 choices[51][1] = "Cada procesador tiene su propia memoria local";
 choices[51][2] = "Cada procesador puede acceder a las memorias de otros procesadores";
 choices[51][3] = "Todas las anteriores son ciertas";
 answers[51] = 3;
 units[51] = ['49'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3301. ";
 preguntaids[51] = 3301


//  Id pregunta: 3076 Año de creación de pregunta: 2002
 questions[52]= "53)  Un ordenador con multiprocesamiento sim&eacute;trico (SMP). Dentro de la clasificaci&oacute;n de M.J. Flinn se clasificar&iacute;a como:";
 choices[52]= new Array();
 choices[52][0] = "SISD";
 choices[52][1] = "MIMD";
 choices[52][2] = "MISD";
 choices[52][3] = "SIMD";
 answers[52] = 1;
 units[52] = ['49'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3076. ";
 preguntaids[52] = 3076


//  Id pregunta: 2939 Año de creación de pregunta: 2002
 questions[53]= "54)  La ley emp&iacute;rica de Grosh establece:";
 choices[53]= new Array();
 choices[53][0] = "La potencia de c&aacute;lculo de los ordenadores es proporcional al cuadrado del tiempo que transcurre";
 choices[53][1] = "La potencia de c&aacute;lculo de lo ordenadores va en proporci&oacute;n directa con su coste";
 choices[53][2] = "El coste de un ordenador es proporcional a la raiz cuadrada de su potencia de c&aacute;lculo";
 choices[53][3] = "El coste de un ordenador es inversamente proporcional a la disminuci&oacute;n de su potencia";
 answers[53] = 2;
 units[53] = ['49'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2939. ";
 preguntaids[53] = 2939


//  Id pregunta: 1865 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique cu&aacute;l de las siguientes afirmaciones es correcta acerca de los cl&uacute;sters de alto rendimiento (cl&uacute;sters HPC):";
 choices[54]= new Array();
 choices[54][0] = "Se deben programar utilizando librer&iacute;as de paralelizaci&oacute;n como MPI.";
 choices[54][1] = "Funcionan repartiendo la carga entre un gran n&uacute;mero de nodos de forma transparente al usuario.";
 choices[54][2] = "Las comunicaciones entre nodos se realizan siempre a trav&eacute;s de redes Ethernet.";
 choices[54][3] = "Implementan redundancia para garantizar la disponibilidad.";
 answers[54] = 0;
 units[54] = ['49'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1865. ";
 preguntaids[54] = 1865


//  Id pregunta: 2800 Año de creación de pregunta: 2002
 questions[55]= "56)  Elija la respuesta falsa. Un cluster de PCs con Linux, utiliza:";
 choices[55]= new Array();
 choices[55][0] = "MPI, como librer&iacute;a para paso de mensajes";
 choices[55][1] = "Tecnolog&iacute;a NUMA entre todas las m&aacute;quinas";
 choices[55][2] = "Redes de alta velocidad, como Myrinet, O Gigabit ethernet";
 choices[55][3] = "Todas son v&aacute;lidas";
 answers[55] = 1;
 units[55] = ['49'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2800. ";
 preguntaids[55] = 2800


//  Id pregunta: 7637 Año de creación de pregunta: 2010
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[56]= new Array();
 choices[56][0] = "Mosix es un sistema basado en Linux que permite trabajar coordinadamente a m&uacute;ltiples ordenadores pertenecientes a una misma organizaci&oacute;n, u organizaciones distintas.";
 choices[56][1] = "Un grid de Mosix puede dividirse en clusters virtuales. Un proceso ejecut&aacute;ndose en un cluster virtual no puede ser transferido a otro cluster virtual.";
 choices[56][2] = "El Entorno de Ejecuci&oacute;n Virtual de Mosix (MVE, Mosix Virtual Runtime Environment) garantiza que un proceso creado en un nodo del grid, pero que se est&aacute; ejecutando en otro, s&oacute;lo accede en este &uacute;ltimo a la CPU y la memoria.";
 choices[56][3] = "En un grid Mosix cualquier proceso puede ser detenido en un punto de control y salvado a disco para posteriormente reanudar su ejecuci&oacute;n desde dicho punto.";
 answers[56] = 2;
 units[56] = ['49'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7637. Map 2006";
 preguntaids[56] = 7637


//  Id pregunta: 2564 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Qu&eacute; significado tiene el concepto &ldquo;World Wide Grid&rdquo; (WWG)?:";
 choices[57]= new Array();
 choices[57][0] = "Compartici&oacute;n de informaci&oacute;n a trav&eacute;s de internet";
 choices[57][1] = "Compartici&oacute;n de datos e infraestructuras inform&aacute;ticas entre todas las disciplinas cient&iacute;ficas y todos los campos de la industria entre equipos dispersos";
 choices[57][2] = "La extensi&oacute;n de Internet a todos los rincones del mundo";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 1;
 units[57] = ['49'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2564. ";
 preguntaids[57] = 2564


//  Id pregunta: 7808 Año de creación de pregunta: 2010
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes paquetes software se usa para construir grids?";
 choices[58]= new Array();
 choices[58][0] = "Globus Toolkit.";
 choices[58][1] = "Grid Squema Toolkit.";
 choices[58][2] = "EYEE Toolkit.";
 choices[58][3] = "WS-DAI.";
 answers[58] = 0;
 units[58] = ['49'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7808. ";
 preguntaids[58] = 7808


//  Id pregunta: 1479 Año de creación de pregunta: 2016
 questions[59]= "60)  Un sistema distribuido, en oposici&oacute;n a un sistema monol&iacute;tico, permite mejorar:";
 choices[59]= new Array();
 choices[59][0] = "La velocidad de proceso del sistema.";
 choices[59][1] = "La escalabilidad del sistema.";
 choices[59][2] = "La portabilidad del sistema.";
 choices[59][3] = "La usabilidad del sistema.";
 answers[59] = 1;
 units[59] = ['49'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 1479. ";
 preguntaids[59] = 1479


//  Id pregunta: 3014 Año de creación de pregunta: 2002
 questions[60]= "61)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[60]= new Array();
 choices[60][0] = "Windows no puede ejecutarse bajo Linux";
 choices[60][1] = "Linux no puede ejecutarse bajo Windows";
 choices[60][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[60][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[60] = 3;
 units[60] = ['57', '49', '56'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3014. ";
 preguntaids[60] = 3014


//  Id pregunta: 3208 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Qu&eacute; es NUMA?";
 choices[61]= new Array();
 choices[61][0] = "Non-Uniform Memory Access";
 choices[61][1] = "Un nuevo procesador RISC";
 choices[61][2] = "Un nuevo procesador CISC";
 choices[61][3] = "Tipo de arquitectura de proceso paralelo en el que cada procesador comparte una zona de memoria";
 answers[61] = 0;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3208. ";
 preguntaids[61] = 3208


//  Id pregunta: 5531 Año de creación de pregunta: 2007
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la tecnolog&iacute;a de procesadores NUMA (No Uniform Memory Access)?";
 choices[62]= new Array();
 choices[62][0] = "Acceso a m&uacute;ltiples memorias de forma equivalente.";
 choices[62][1] = "Facilidad de programaci&oacute;n.";
 choices[62][2] = "Escalabilidad.";
 choices[62][3] = "Procesamiento paralelo.";
 answers[62] = 0;
 units[62] = ['49'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 5531. ";
 preguntaids[62] = 5531


//  Id pregunta: 3360 Año de creación de pregunta: 2006
 questions[63]= "64)  Un mainframe:";
 choices[63]= new Array();
 choices[63][0] = "Es equivalente a una supercomputadora cara";
 choices[63][1] = "Utiliza toda su potencia en ejecutar unos pocos programas lo m&aacute;s r&aacute;pidamente posible";
 choices[63][2] = "Es multitarea y multiproceso, pero monousuario";
 choices[63][3] = "Utiliza su potencia para ejecutar muchos programas concurrentemente";
 answers[63] = 3;
 units[63] = ['49'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3360. ";
 preguntaids[63] = 3360


//  Id pregunta: 5858 Año de creación de pregunta: 2007
 questions[64]= "65)  Indicar la afirmaci&oacute;n correcta.";
 choices[64]= new Array();
 choices[64][0] = "Los servicios web pueden aprovechar la estructura de un GRID de manera eficiente";
 choices[64][1] = "Un GRID es una red de ordenadores que comparten recursos entre ellos para maximizar sus prestaciones totales";
 choices[64][2] = "Los recursos que se aportan por los miembros de una red GRID pueden ser de almacenamiento, memoria y procesamiento";
 choices[64][3] = "Para que una red GRID sea segura es preciso establecer una pol&iacute;tica de seguridad com&uacute;n a las subredes que lo conforman";
 answers[64] = 0;
 units[64] = ['49'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 5858. ";
 preguntaids[64] = 5858


//  Id pregunta: 5957 Año de creación de pregunta: 2007
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[65]= new Array();
 choices[65][0] = "Mosix es un sistema basado en Linux que permite trabajar coordinadamente a m&uacute;ltiples ordenadorespertenecientes a una misma organizaci&oacute;n, u organizaciones distintas";
 choices[65][1] = "Un grid de Mosix puede dividirse en clusters virtuales. Un proceso ejecut&aacute;ndose en un cluster virtual nopuede ser transferido a otro cluster virtual";
 choices[65][2] = "El Entorno de Ejecuci&oacute;n Virtual de Mosix (MVE, Mosix Virtual Runtime Environment) garantiza que unproceso creado en un nodo del grid, pero que se est&aacute; ejecutando en otro, s&oacute;lo accede en &eacute;ste &uacute;ltimo a laCPU y la memoria";
 choices[65][3] = "En un grid Mosix cualquier proceso puede ser detenido en un punto de control y salvado a disco paraposteriormente reanudar su ejecuci&oacute;n desde dicho punto";
 answers[65] = 2;
 units[65] = ['49'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 5957. ";
 preguntaids[65] = 5957


//  Id pregunta: 7810 Año de creación de pregunta: 2010
 questions[66]= "67)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[66]= new Array();
 choices[66][0] = "Radiocomunicaciones (ITU-R).";
 choices[66][1] = "Estandarizaci&oacute;n (ITU-T).";
 choices[66][2] = "Seguridad (ITU-S).";
 choices[66][3] = "Desarrollo (ITU-D).";
 answers[66] = 2;
 units[66] = ['49'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7810. ";
 preguntaids[66] = 7810


//  Id pregunta: 3110 Año de creación de pregunta: 2002
 questions[67]= "68)  Uno de los problemas m&aacute;s importantes en la aplicaci&oacute;n de los computadores paralelos consiste en:";
 choices[67]= new Array();
 choices[67][0] = "Su gran volumen";
 choices[67][1] = "Elevada potencia consumida";
 choices[67][2] = "Su dif&iacute;cil programaci&oacute;n";
 choices[67][3] = "El escaso hardware disponible";
 answers[67] = 2;
 units[67] = ['49'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3110. ";
 preguntaids[67] = 3110


//  Id pregunta: 2779 Año de creación de pregunta: 2002
 questions[68]= "69)  El paralelismo expl&iacute;cito MIMD esta constituido por:";
 choices[68]= new Array();
 choices[68][0] = "Un s&oacute;lo flujo de instrucciones y varios de datos";
 choices[68][1] = "Varios flujos de Instrucciones y uno de datos";
 choices[68][2] = "Varios flujos de instrucciones y varios de datos";
 choices[68][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[68] = 2;
 units[68] = ['49'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2779. ";
 preguntaids[68] = 2779


//  Id pregunta: 3098 Año de creación de pregunta: 2002
 questions[69]= "70)  Una de las siguientes caracter&iacute;sticas es falsa para los ordenadores RISC. Indicar cu&aacute;l:";
 choices[69]= new Array();
 choices[69][0] = "Consideran m&aacute;s importante la simplicidad en las instrucciones que en la longitud de los programas";
 choices[69][1] = "Las primitivas del ensamblador tienden a ser las mismas que las microinstrucciones";
 choices[69][2] = "Son adecuados para c&aacute;lculos mediante operaciones en coma flotante";
 choices[69][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[69] = 2;
 units[69] = ['49'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3098. ";
 preguntaids[69] = 3098


//  Id pregunta: 2924 Año de creación de pregunta: 2002
 questions[70]= "71)  La arquitectura UMA seg&uacute;n Silicon Graphics:";
 choices[70]= new Array();
 choices[70][0] = "Utiliza un bus AGP 16x";
 choices[70][1] = "Utiliza una &uacute;nica memoria para todos los dispositivos, sin que estos tengan memorias locales";
 choices[70][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[70][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[70] = 1;
 units[70] = ['49'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2924. ";
 preguntaids[70] = 2924


//  Id pregunta: 3204 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest;Cu&aacute;l es la diferencia entre MPP y SMP?";
 choices[71]= new Array();
 choices[71][0] = "En SMP todas las CPU comparten la misma memoria mientras en MPP cada CPU tiene su propia memoria.";
 choices[71][1] = "En MPP todas las CPU comparten la misma memoria mientras en SMP cada CPU tiene su propia memoria.";
 choices[71][2] = "No hay ninguna diferencia ambas arquitecturas son iguales";
 choices[71][3] = "SMP se utiliza en mainframes mientras que MPP se utiliza en supercomputadores";
 answers[71] = 0;
 units[71] = ['49'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3204. ";
 preguntaids[71] = 3204


//  Id pregunta: 2982 Año de creación de pregunta: 2002
 questions[72]= "73)  Los procesadores superescalares:";
 choices[72]= new Array();
 choices[72][0] = "Son siempre procesadores RISC";
 choices[72][1] = "Han de ser necesariamente CISC";
 choices[72][2] = "Suelen ser RISC, pero pueden ser CISC";
 choices[72][3] = "Todas son falsas";
 answers[72] = 2;
 units[72] = ['49'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2982. ";
 preguntaids[72] = 2982


//  Id pregunta: 7851 Año de creación de pregunta: 2011
 questions[73]= "74)  En los sistemas MIMD:";
 choices[73]= new Array();
 choices[73][0] = "Todos los datos est&aacute;n accesibles para todos los procesadores.";
 choices[73][1] = "No todas las instrucciones est&aacute;n disponibles para todos los procesadores.";
 choices[73][2] = "Emplean varios buses de altas prestaciones para transmitir instrucciones y datos simult&aacute;neamente.";
 choices[73][3] = "Pueden trabajar con memoria compartida o con memoria distribuida.";
 answers[73] = 3;
 units[73] = ['49'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7851. Examen TIC A1 2010";
 preguntaids[73] = 7851


//  Id pregunta: 1198 Año de creación de pregunta: 2016
 questions[74]= "75)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[74]= new Array();
 choices[74][0] = "JOB";
 choices[74][1] = "COMMENT";
 choices[74][2] = "EXEC";
 choices[74][3] = "DD";
 answers[74] = 1;
 units[74] = ['49'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1198. ";
 preguntaids[74] = 1198


