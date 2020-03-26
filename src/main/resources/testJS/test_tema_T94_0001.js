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
//  Id pregunta: 3817 Año de creación de pregunta: 2002
 questions[0]= "1)  En la t&eacute;cnica de estimaci&oacute;n COCOMO cl&aacute;sico, el modelo Intermedio:";
 choices[0]= new Array();
 choices[0][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[0][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[0][2] = "Considera que el impacto de los factores de influencia depende de la fase de desarrollo";
 choices[0][3] = "Nada de lo anterior es correcto";
 answers[0] = 1;
 units[0] = ['94'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3817. ";
 preguntaids[0] = 3817


//  Id pregunta: 5485 Año de creación de pregunta: 2007
 questions[1]= "2)  Los modelos de COCOMO (b&aacute;sico, intermedio y avanzado), est&aacute;n definidos para tres modos de desarrollo de proyectos software. Indique cu&aacute;l de los siguientes conceptos no identifica alguno de estos modos:";
 choices[1]= new Array();
 choices[1][0] = "Modo encapsulado.";
 choices[1][1] = "Modo semiacoplado.";
 choices[1][2] = "Modo org&aacute;nico.";
 choices[1][3] = "Modo empotrado.";
 answers[1] = 0;
 units[1] = ['94'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 5485. ";
 preguntaids[1] = 5485


//  Id pregunta: 5941 Año de creación de pregunta: 2007
 questions[2]= "3)  El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neasde c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en c&oacute;digo C el ratio es 128LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[2]= new Array();
 choices[2][0] = "148";
 choices[2][1] = "250";
 choices[2][2] = "460";
 choices[2][3] = "210";
 answers[2] = 2;
 units[2] = ['94'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 5941. ";
 preguntaids[2] = 5941


//  Id pregunta: 8785 Año de creación de pregunta: 2013
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO?";
 choices[3]= new Array();
 choices[3][0] = "Semiacoplado";
 choices[3][1] = "Empotrado";
 choices[3][2] = "Acoplado";
 choices[3][3] = "Org&aacute;nico";
 answers[3] = 2;
 units[3] = ['94'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 8785. Examen TIC A2 2011";
 preguntaids[3] = 8785


//  Id pregunta: 3595 Año de creación de pregunta: 2004
 questions[4]= "5)  &iquest;Qu&eacute; t&eacute;cnica se puede usar para medir el tama&ntilde;o";
 choices[4]= new Array();
 choices[4][0] = "Program Evaluation and Review Tecnique (PERT)";
 choices[4][1] = "Diagrama de extrapolaci&oacute;n";
 choices[4][2] = "M&eacute;trica Bang";
 choices[4][3] = "WBS (Work Breakdown Structure)";
 answers[4] = 2;
 units[4] = ['94'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3595. Examen Seguridad Social-A 2004";
 preguntaids[4] = 3595


//  Id pregunta: 5980 Año de creación de pregunta: 2007
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes par&aacute;metros NO forma parte de la ecuaci&oacute;n del software de Putnam para la estimaci&oacute;n delesfuerzo de un proyecto software?";
 choices[5]= new Array();
 choices[5][0] = "Casos de uso";
 choices[5][1] = "L&iacute;neas de c&oacute;digo";
 choices[5][2] = "Duraci&oacute;n del proyecto";
 choices[5][3] = "Par&aacute;metro de productividad";
 answers[5] = 0;
 units[5] = ['94'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 5980. ";
 preguntaids[5] = 5980


//  Id pregunta: 7620 Año de creación de pregunta: 2010
 questions[6]= "7)  El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neas de c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes 4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en el c&oacute;digo C el ratio es 128 LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[6]= new Array();
 choices[6][0] = "148";
 choices[6][1] = "250";
 choices[6][2] = "460";
 choices[6][3] = "210";
 answers[6] = 2;
 units[6] = ['94'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7620. Map 2006";
 preguntaids[6] = 7620


//  Id pregunta: 3737 Año de creación de pregunta: 2002
 questions[7]= "8)  Al esfuerzo requeriddo para transferir un programa desde una cierta configuraci&oacute;n hardware o entorno operativo a otro se llama:";
 choices[7]= new Array();
 choices[7][0] = "Portabilidad";
 choices[7][1] = "Reusabilidad";
 choices[7][2] = "Interoperatividad";
 choices[7][3] = "Mantenibilidad";
 answers[7] = 0;
 units[7] = ['94'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3737. ";
 preguntaids[7] = 3737


//  Id pregunta: 3707 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Cu&aacute;les son las suposiciones b&aacute;sicas del modelo COCOMO cl&aacute;sico para estimar el esfuerzo necesario para el desarrollo de sistemas?:";
 choices[8]= new Array();
 choices[8][0] = "Considera que la principal variable explicativa del coste es el n&uacute;mero de instrucciones, con lo que centra sus esfuerzos en estimar este n&uacute;mero";
 choices[8][1] = "Supone que el esfuerzo necesario para el desarrollo de un sistema es el producto de dos factores: complejidad t&eacute;cnica y tama&ntilde;o del tratamiento de la informaci&oacute;n";
 choices[8][2] = "Usa como variable explicativa secundaria la complejidad t&eacute;cnica, originando tres modos de aplicaci&oacute;n del m&eacute;todo: org&aacute;nico, semiacoplado y empotrado";
 choices[8][3] = "Todas las anteriores son asunciones del modelo COCOMO";
 answers[8] = 3;
 units[8] = ['94'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3707. ";
 preguntaids[8] = 3707


//  Id pregunta: 6969 Año de creación de pregunta: 2010
 questions[9]= "10)  En el modelo de estimaci&oacute;n de costes COCOMO se utiliza de base la siguiente funci&oacute;n: 'E = a(Kl)b * m(X)' &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[9]= new Array();
 choices[9][0] = "a y b son variables con valores indefinidos";
 choices[9][1] = "Kl es la cantidad de l&iacute;neas de c&oacute;digo, en millones";
 choices[9][2] = "m(X) es una variable obtenida en una tabla a partir del n&uacute;mero de trabajadores y del conocimiento de las herramientas a utilizar";
 choices[9][3] = "El resultado se da en unidades salario/mes y horas-hombre";
 answers[9] = 3;
 units[9] = ['94'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6969. TIC-B 2009 bloque desarrollo";
 preguntaids[9] = 6969


//  Id pregunta: 3736 Año de creación de pregunta: 2002
 questions[10]= "11)  Al aplicar COCOMO, la diferencia de usar Ensamblador o usar Pascal ser&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "Ensamblador va a resultar m&aacute;s complicado para evaluar COCOMO";
 choices[10][1] = "Pascal ser&aacute; de m&aacute;s nivel que ensamblador";
 choices[10][2] = "Pascal ser&aacute; de menos nivel que ensamblador";
 choices[10][3] = "Da lo mismo usar un lenguaje que otro";
 answers[10] = 1;
 units[10] = ['94'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3736. ";
 preguntaids[10] = 3736


//  Id pregunta: 5814 Año de creación de pregunta: 2007
 questions[11]= "12)  Defina Throughput:";
 choices[11]= new Array();
 choices[11][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido entrabajos por hora o transacciones por segundo)";
 choices[11][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 choices[11][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajospor hora o transacciones por segundo)";
 choices[11][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 answers[11] = 0;
 units[11] = ['94'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 5814. Examen 2006 JCYL";
 preguntaids[11] = 5814


//  Id pregunta: 4239 Año de creación de pregunta: 2006
 questions[12]= "13)  Las tres versiones del modelo COCOMO-2000 son:";
 choices[12]= new Array();
 choices[12][0] = "1) Modelo de composici&oacute;n de la arquitectura 2) Modelo de Dise&ntilde;o Preliminar 3) Modelo Post-Arquitectura.";
 choices[12][1] = "1) Modelo de composici&oacute;n de aplicaciones 2) Modelo de Dise&ntilde;o Preliminar 3) Modelo Post-Arquitectura.";
 choices[12][2] = "1) Modelo de composici&oacute;n de aplicaciones 2) Modelo de An&aacute;lisis Preliminar 3) Modelo Post-Arquitectura.";
 choices[12][3] = "1) Modelo de composici&oacute;n de la arquitectura 2) Modelo de An&aacute;lisis Preliminar 3) Modelo Post-Arquitectura.";
 answers[12] = 1;
 units[12] = ['94'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 4239. ";
 preguntaids[12] = 4239


//  Id pregunta: 5825 Año de creación de pregunta: 2007
 questions[13]= "14)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar.";
 choices[13]= new Array();
 choices[13][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesarioajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos.";
 choices[13][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo.";
 choices[13][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n.";
 choices[13][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n).";
 answers[13] = 2;
 units[13] = ['94'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 5825. Examen 2006 JCYL";
 preguntaids[13] = 5825


//  Id pregunta: 5931 Año de creación de pregunta: 2007
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes es una m&eacute;trica de productividad en la generaci&oacute;n de software seg&uacute;n Pressman?";
 choices[14]= new Array();
 choices[14][0] = "N&uacute;meros de defectos por miles de l&iacute;neas de c&oacute;digo";
 choices[14][1] = "Tiempo medio de cambio";
 choices[14][2] = "Puntos de funci&oacute;n";
 choices[14][3] = "N&uacute;mero de p&eacute;rdidas de integridad";
 answers[14] = 2;
 units[14] = ['94'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 5931. ";
 preguntaids[14] = 5931


//  Id pregunta: 7347 Año de creación de pregunta: 2010
 questions[15]= "16)  En el modelo COCOMO 2000 surgido como evoluci&oacute;n de COCOMO, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[15]= new Array();
 choices[15][0] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[15][1] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: incluye el uso de prototipos";
 choices[15][2] = "Modelo de Dise&ntilde;o Preliminar: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[15][3] = "Modelo de Dise&ntilde;o Preliminar: incluye el uso de prototipos";
 answers[15] = 1;
 units[15] = ['94'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7347. ";
 preguntaids[15] = 7347


//  Id pregunta: 3800 Año de creación de pregunta: 2002
 questions[16]= "17)  El tiempo de programaci&oacute;n de un proyecto software depende principalmente de:";
 choices[16]= new Array();
 choices[16][0] = "Funcionalidad requerida";
 choices[16][1] = "Fiabilidad";
 choices[16][2] = "Tiempo de  respuesta";
 choices[16][3] = "Son ciertas todas las anteriores respuestas";
 answers[16] = 3;
 units[16] = ['94'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3800. ";
 preguntaids[16] = 3800


//  Id pregunta: 7381 Año de creación de pregunta: 2010
 questions[17]= "18)  Uno de los modelos utilizados para la estimaci&oacute;n de costes de un proyecto inform&aacute;tico es COCOMO (COnstructive COst MOdel). Se puede afirmar sobre &eacute;l que:";
 choices[17]= new Array();
 choices[17][0] = "La medici&oacute;n que realiza COCOMO por l&iacute;neas de c&oacute;digo es especialmente &uacute;til para la Orientaci&oacute;n a Objetos";
 choices[17][1] = "Incluye tres submodelos: B&aacute;sico, Intermedio y Detallado";
 choices[17][2] = "Cada submodelo se divide en tres modos: Org&aacute;nico, Inorg&aacute;nico y Directo";
 choices[17][3] = "El modo Org&aacute;nico se aplica a un tipo de proyectos complejos, en los que se tiene experiencia y con unos requisitos muy restrictivos";
 answers[17] = 1;
 units[17] = ['94'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 7381. Examen TIC B 2009";
 preguntaids[17] = 7381


//  Id pregunta: 4030 Año de creación de pregunta: 2004
 questions[18]= "19)  Al utilizar la t&eacute;cnica de estimaci&oacute;n Puntos Funci&oacute;n, se tienen en cuenta";
 choices[18]= new Array();
 choices[18][0] = "Entradas externas, ficheros l&oacute;gicos internos y salidas externas";
 choices[18][1] = "Ficheros de interfaz externos y consultas externas";
 choices[18][2] = "Entradas de aplicaciones, consulas y salidas de aplicaciones";
 choices[18][3] = "A y B son correctas";
 answers[18] = 3;
 units[18] = ['94'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 4030. ";
 preguntaids[18] = 4030


//  Id pregunta: 7524 Año de creación de pregunta: 2010
 questions[19]= "20)  Indique cu&aacute;l de los siguientes componentes no es considerado por el m&eacute;todo de los puntos de funci&oacute;n de Albrecht, para la estimaci&oacute;n del tama&ntilde;o y del esfuerzo necesarios para desarrollar un sistema software:";
 choices[19]= new Array();
 choices[19][0] = "Entradas externas.";
 choices[19][1] = "Ficheros l&oacute;gicos internos.";
 choices[19][2] = "Atributos del producto.";
 choices[19][3] = "Consultas.";
 answers[19] = 2;
 units[19] = ['94'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 7524. Map 2005";
 preguntaids[19] = 7524


//  Id pregunta: 3711 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;En cu&aacute;l de los siguientes grupos de m&eacute;tricas del software se debe encuadrar el modelo de An&aacute;lisis de Puntos de Funci&oacute;n?:";
 choices[20]= new Array();
 choices[20][0] = "M&eacute;tricas de complejidad";
 choices[20][1] = "M&eacute;tricas de productividad";
 choices[20][2] = "M&eacute;tricas de calidad";
 choices[20][3] = "M&eacute;tricas de riesgo";
 answers[20] = 1;
 units[20] = ['94'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3711. ";
 preguntaids[20] = 3711


//  Id pregunta: 4079 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Qu&eacute; formula expresa la relaci&oacute;n entre puntos de funci&oacute;n y COCOMO?";
 choices[21]= new Array();
 choices[21][0] = "FP= DSI * 320/nivel de lenguaje";
 choices[21][1] = "DSI= FP * 320 /nivel del lenguaje";
 choices[21][2] = "FP= nivel de lenguaje / DSI * 320";
 choices[21][3] = "DSI= nivel de lenguaje / FP * 320";
 answers[21] = 1;
 units[21] = ['94'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 4079. ";
 preguntaids[21] = 4079


//  Id pregunta: 6659 Año de creación de pregunta: 2009
 questions[22]= "23)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, la complejidad de los procesos elementales transaccionales no se determina utilizando el n&uacute;mero de:";
 choices[22]= new Array();
 choices[22][0] = "DET (Data Element Type)";
 choices[22][1] = "RET (Record Element Type)";
 choices[22][2] = "FTR (File Type Referenced)";
 choices[22][3] = "Todos los anteriores se utilizan";
 answers[22] = 1;
 units[22] = ['94'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 6659. ";
 preguntaids[22] = 6659


//  Id pregunta: 7658 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes par&aacute;metros NO forma parte de la ecuaci&oacute;n del software de Putnam para la estimaci&oacute;n del esfuerzo de un proyecto software?";
 choices[23]= new Array();
 choices[23][0] = "Casos de uso.";
 choices[23][1] = "L&iacute;neas de c&oacute;digo.";
 choices[23][2] = "Duraci&oacute;n del proyecto.";
 choices[23][3] = "Par&aacute;metro de productividad.";
 answers[23] = 0;
 units[23] = ['94'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 7658. Map 2006";
 preguntaids[23] = 7658


//  Id pregunta: 8858 Año de creación de pregunta: 2013
 questions[24]= "25)  En general, no se entiende por m&eacute;trica software:";
 choices[24]= new Array();
 choices[24][0] = "Una asignaci&oacute;n de valor a un atributo de una entidad propia del software, ya sea un producto o un proceso";
 choices[24][1] = "Una caracter&iacute;stica o atributo propio del software o del proceso de construcci&oacute;n del software";
 choices[24][2] = "Una medida cuantitativa del grado en el que un sistema, un componente o un proceso posee un determinado atributo";
 choices[24][3] = "Una medida o conjunto de medidas destinadas a conocer o estimar el tama&ntilde;o u otra caracter&iacute;stica de un software o un sistema de informaci&oacute;n";
 answers[24] = 1;
 units[24] = ['94'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 8858. ";
 preguntaids[24] = 8858


//  Id pregunta: 6155 Año de creación de pregunta: 2003
 questions[25]= "26)  En el modelo COCOMO, la estimaci&oacute;n del esfuerzo anual b&aacute;sico para el mantenimiento de los sistemas de informaci&oacute;n, (MM)am, conocido el esfuerzo estimado de desarrollo, (MM)d, es:";
 choices[25]= new Array();
 choices[25][0] = "(MM)am =1.8 (DSI) (MM)d";
 choices[25][1] = "(MM)am =2.0 (ADF) (MM)d";
 choices[25][2] = "(MM)am = 3.2(FSP) (MM)d";
 choices[25][3] = "(MM)am = 1.0 (ACT) (MM)d";
 answers[25] = 3;
 units[25] = ['94'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 6155. Examen TIC A1 MAP 2007";
 preguntaids[25] = 6155


//  Id pregunta: 3605 Año de creación de pregunta: 2002
 questions[26]= "27)  Para la estimaci&oacute;n del esfuerzo necesario y dimensionamiento de proyectos de desarrollo de sistemas, &iquest;qu&eacute; opciones viables aparecen?:";
 choices[26]= new Array();
 choices[26][0] = "Modelos basados en t&eacute;cnicas de descomposici&oacute;n y modelos de estimaci&oacute;n emp&iacute;ricos";
 choices[26][1] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos de punto de funci&oacute;n";
 choices[26][2] = "Modelos basados en t&eacute;cnicas de planificaci&oacute;n y control de proyectos y modelos de planificaci&oacute;n temporal";
 choices[26][3] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos emp&iacute;ricos";
 answers[26] = 1;
 units[26] = ['94'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3605. ";
 preguntaids[26] = 3605


//  Id pregunta: 7346 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes m&eacute;tricas NO se usa en el modelo COCOMO?";
 choices[27]= new Array();
 choices[27][0] = "KLOC (K Lines Of Code)";
 choices[27][1] = "NSLOC (New Source Lines Of Code)";
 choices[27][2] = "DSI (Delivery Source Instructions)";
 choices[27][3] = "NSDSI (New Source Delivery Source Instructions)";
 answers[27] = 3;
 units[27] = ['94'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 7346. ";
 preguntaids[27] = 7346


//  Id pregunta: 4033 Año de creación de pregunta: 2004
 questions[28]= "29)  El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de evaluaci&oacute;n de la calidad del software del tipo:";
 choices[28]= new Array();
 choices[28][0] = "Metrica de Fiabilidad";
 choices[28][1] = "Metrica de los Factores de calidad";
 choices[28][2] = "Metrica de Complejidad";
 choices[28][3] = "Ninguna de ellas";
 answers[28] = 3;
 units[28] = ['94'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 4033. ";
 preguntaids[28] = 4033


//  Id pregunta: 4242 Año de creación de pregunta: 2006
 questions[29]= "30)  En el m&eacute;todo de Puntos de Funci&oacute;n de Albretch se consideran cinco par&aacute;metros entre los cu&aacute;les est&aacute;n";
 choices[29]= new Array();
 choices[29][0] = "Ficheros l&oacute;gicos externos";
 choices[29][1] = "Salidas internas";
 choices[29][2] = "Ficheros de interfaz externos";
 choices[29][3] = "Consultas internas";
 answers[29] = 2;
 units[29] = ['94'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 4242. ";
 preguntaids[29] = 4242


//  Id pregunta: 3807 Año de creación de pregunta: 2002
 questions[30]= "31)  En el modelo de estimaci&oacute;n de costes de desarrollo de software (COCOMO) la evaluaci&oacute;n se hace en funci&oacute;n de lo que se conoce como DSI (Delivered Source Instructions). &iquest;Qu&eacute; tipo de instrucciones no se incluyen en este concepto?:";
 choices[30]= new Array();
 choices[30][0] = "Las correspondientes a control de trabajos o procedimientos JCL";
 choices[30][1] = "La de declaraci&oacute;n de datos";
 choices[30][2] = "Las instrucciones de formateo de pantallas";
 choices[30][3] = "Se incluyen todas las anteriores";
 answers[30] = 3;
 units[30] = ['94'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3807. ";
 preguntaids[30] = 3807


//  Id pregunta: 6684 Año de creación de pregunta: 2009
 questions[31]= "32)  En el M&eacute;todo ALBRETCH de los puntos de funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[31]= new Array();
 choices[31][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[31][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[31][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[31][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[31] = 0;
 units[31] = ['94'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6684. ";
 preguntaids[31] = 6684


//  Id pregunta: 7344 Año de creación de pregunta: 2010
 questions[32]= "33)  El nombre del modelo COCOMO se corresponde con:";
 choices[32]= new Array();
 choices[32][0] = "Constructive Cost Model";
 choices[32][1] = "Cost Control Model";
 choices[32][2] = "Comprehensive Cost Model";
 choices[32][3] = "Continuous Cost Model";
 answers[32] = 0;
 units[32] = ['94'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 7344. ";
 preguntaids[32] = 7344


//  Id pregunta: 4093 Año de creación de pregunta: 2003
 questions[33]= "34)  La versi&oacute;n cocomo II guarda alg&uacute;n tipo de compatibilidad con la versi&oacute;n anterior";
 choices[33]= new Array();
 choices[33][0] = "No, es radicalmente diferente pues las t&eacute;cnicas de desarrollo SW han cambiado drasticamente desde la primera versi&oacute;n";
 choices[33][1] = "S&iacute; se ha guardado la compatibilidad con la versi&oacute;n anterior recogiendo los cambios actuales en desarrollo SW, por ejemplo la reutilizaci&oacute;n y el desarrollo con componentes";
 choices[33][2] = "S&iacute;, y lo &uacute;nico diferentes es la inclusi&oacute;n de nuevas variables explicativas en el modelo intermedio para reflejar los cambios en el desarrollo SW actual";
 choices[33][3] = "No existe la versi&oacute;n II de cocomo";
 answers[33] = 1;
 units[33] = ['94'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 4093. ";
 preguntaids[33] = 4093


//  Id pregunta: 6093 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?:";
 choices[34]= new Array();
 choices[34][0] = "Entradas";
 choices[34][1] = "Salidas";
 choices[34][2] = "Consultas";
 choices[34][3] = "Usuarios";
 answers[34] = 3;
 units[34] = ['94'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6093. Examen TIC A1 MAP 2007";
 preguntaids[34] = 6093


//  Id pregunta: 3784 Año de creación de pregunta: 2002
 questions[35]= "36)  El modelo COCOMO de estimaci&oacute;n de recursos y esfuerzo en el desarrollo de un sistema de software, define un tipo de m&eacute;trica:";
 choices[35]= new Array();
 choices[35][0] = "De productividad";
 choices[35][1] = "De complejidad";
 choices[35][2] = "De calidad";
 choices[35][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[35] = 0;
 units[35] = ['94'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 3784. ";
 preguntaids[35] = 3784


//  Id pregunta: 7341 Año de creación de pregunta: 2010
 questions[36]= "37)  En el m&eacute;todo de los Puntos de Funci&oacute;n se valoran:";
 choices[36]= new Array();
 choices[36][0] = "15 caracter&iacute;sticas generales";
 choices[36][1] = "5 caracter&iacute;sticas generales";
 choices[36][2] = "6 caracter&iacute;sticas generales";
 choices[36][3] = "14 caracter&iacute;sticas generales";
 answers[36] = 3;
 units[36] = ['94'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 7341. ";
 preguntaids[36] = 7341


//  Id pregunta: 3816 Año de creación de pregunta: 2002
 questions[37]= "38)  En la t&eacute;cnica de estimaci&oacute;n COCOMO cl&aacute;sico, el modelo avanzado:";
 choices[37]= new Array();
 choices[37][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[37][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[37][2] = "Considera que el impacto de los factores de influencia depende de la fase de desarrollo";
 choices[37][3] = "Nada de lo anterior";
 answers[37] = 2;
 units[37] = ['94'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3816. ";
 preguntaids[37] = 3816


//  Id pregunta: 3942 Año de creación de pregunta: 2002
 questions[38]= "39)  No es una de las formas de aplicar COCOMO:";
 choices[38]= new Array();
 choices[38][0] = "B&aacute;sico";
 choices[38][1] = "Avanzado";
 choices[38][2] = "Intermedio";
 choices[38][3] = "Asistido";
 answers[38] = 3;
 units[38] = ['94'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3942. ";
 preguntaids[38] = 3942


//  Id pregunta: 8786 Año de creación de pregunta: 2013
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[39]= new Array();
 choices[39][0] = "Dise&ntilde;o Arquitectura";
 choices[39][1] = "Dise&ntilde;o Preliminar";
 choices[39][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[39][3] = "Post-Arquitectura";
 answers[39] = 0;
 units[39] = ['94'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 8786. ";
 preguntaids[39] = 8786


//  Id pregunta: 7343 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Qu&eacute; modelo de estimaci&oacute;n de esfuerzo no requiere datos hist&oacute;ricos de otros proyectos?";
 choices[40]= new Array();
 choices[40][0] = "Modelo de Waltson y F&eacute;lix";
 choices[40][1] = "Modelo de Bailey y Basili";
 choices[40][2] = "Modelo de Putnam";
 choices[40][3] = "Todos estos modelos requieren datos hist&oacute;ricos";
 answers[40] = 2;
 units[40] = ['94'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 7343. ";
 preguntaids[40] = 7343


//  Id pregunta: 3951 Año de creación de pregunta: 2002
 questions[41]= "42)  Respecto a la evaluaci&oacute;n realizada por COCOMO, &iquest;cu&aacute;l es la afirmaci&oacute;n falsa?:";
 choices[41]= new Array();
 choices[41][0] = "Se incluye s&oacute;lamente la parte de construcci&oacute;n del sistema y de integraci&oacute;n y pruebas";
 choices[41][1] = "No incluye la parte de formaci&oacute;n de los usuarios";
 choices[41][2] = "No incluye las conversiones";
 choices[41][3] = "No incluye los esfuerzos de planificaci&oacute;n de la instalaci&oacute;n";
 answers[41] = 0;
 units[41] = ['94'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3951. ";
 preguntaids[41] = 3951


//  Id pregunta: 5754 Año de creación de pregunta: 2007
 questions[42]= "43)  El modelo COCOMO (COnstructive COst Model):";
 choices[42]= new Array();
 choices[42][0] = "es un m&eacute;todo de medici&oacute;n de Ia funcionalidad de una aplicaci&oacute;n inform&aacute;tica.";
 choices[42][1] = "es un m&eacute;todo de evaluaci&oacute;n del interface de usuario.";
 choices[42][2] = "es un m&eacute;todo basado en estimaciones del numero de l&iacute;neas de c&oacute;digo.";
 choices[42][3] = "es un m&eacute;todo de planificaci&oacute;n del coste y esfuerzo.";
 answers[42] = 2;
 units[42] = ['94'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 5754. ";
 preguntaids[42] = 5754


//  Id pregunta: 3638 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;A cu&aacute;nto equivale el trabajo de un hombre por mes en COCOMO, medido en horas de trabajo?:";
 choices[43]= new Array();
 choices[43][0] = "140 horas";
 choices[43][1] = "150 horas";
 choices[43][2] = "172 horas";
 choices[43][3] = "152 horas";
 answers[43] = 3;
 units[43] = ['94'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3638. ";
 preguntaids[43] = 3638


//  Id pregunta: 7689 Año de creación de pregunta: 2010
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "Entradas.";
 choices[44][1] = "Salidas.";
 choices[44][2] = "Consultas.";
 choices[44][3] = "Usuarios.";
 answers[44] = 3;
 units[44] = ['94'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 7689. Map 2007";
 preguntaids[44] = 7689


//  Id pregunta: 7752 Año de creación de pregunta: 2010
 questions[45]= "46)  En el modelo COCOMO, la estimaci&oacute;n del esfuerzo anual b&aacute;sico para el mantenimiento de los sistemas de informaci&oacute;n, (MM)am, conocido el esfuerzo estimado de desarrollo, (MM)d, es:";
 choices[45]= new Array();
 choices[45][0] = "(MM)am = 1.8 (DSI) (MM)d.";
 choices[45][1] = "(MM)am = 2.0 (ADF) (MM)d.";
 choices[45][2] = "(MM)am = 3.2 (FSP) (MM)d.";
 choices[45][3] = "(MM)am = 1.0 (ACT) (MM)d.";
 answers[45] = 3;
 units[45] = ['94'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7752. ";
 preguntaids[45] = 7752


//  Id pregunta: 3797 Año de creación de pregunta: 2002
 questions[46]= "47)  El modo semiacoplado de aplicar los modelos de COCOMO considera:";
 choices[46]= new Array();
 choices[46][0] = "Proyectos peque&ntilde;os";
 choices[46][1] = "Proyectos de complejidad media";
 choices[46][2] = "Proyectos de complejidad alta";
 choices[46][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[46] = 1;
 units[46] = ['94'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3797. ";
 preguntaids[46] = 3797


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique alguna certificaci&oacute;n en el &aacute;mbito empresarial que le cualifique profesionalmente para poder gestionar un proyecto de desarrollo:";
 choices[47]= new Array();
 choices[47][0] = "CMP.";
 choices[47][1] = "Oracle Certified Associate, Java SE 8 Programmer Certification.";
 choices[47][2] = "Certificaci&oacute;n ISO 9001:2008.";
 choices[47][3] = "PMP.";
 answers[47] = 3;
 units[47] = ['94'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 852. AGE A2 2015";
 preguntaids[47] = 852


//  Id pregunta: 6837 Año de creación de pregunta: 2010
 questions[48]= "49)  Indicar cu&aacute;l de los siguientes NO es un m&eacute;todo ni un marco metodol&oacute;gico para estimar el esfuerzo de desarrollo en los proyectos:";
 choices[48]= new Array();
 choices[48][0] = "COCOMO II.";
 choices[48][1] = "FPA.";
 choices[48][2] = "ESTIM.";
 choices[48][3] = "SLIM.";
 answers[48] = 2;
 units[48] = ['94'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6837. TIC A 2009";
 preguntaids[48] = 6837


//  Id pregunta: 6685 Año de creación de pregunta: 2009
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no corresponde a una t&eacute;cnica de estimaci&oacute;n del tama&ntilde;o de un sistema software?";
 choices[49]= new Array();
 choices[49][0] = "Puntos funci&oacute;n de Albrecht";
 choices[49][1] = "Use case points";
 choices[49][2] = "Puntos funci&oacute;n MarkII";
 choices[49][3] = "Puntos funci&oacute;n de Boehm";
 answers[49] = 3;
 units[49] = ['94'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 6685. ";
 preguntaids[49] = 6685


//  Id pregunta: 3966 Año de creación de pregunta: 2002
 questions[50]= "51)  Si se usa COCOMO, no se tendr&aacute;n en cuenta:";
 choices[50]= new Array();
 choices[50][0] = "Las l&iacute;neas de c&oacute;digo de los programas de pruebas";
 choices[50][1] = "Las declaraciones iniciales";
 choices[50][2] = "Los trabajos desarrollados en &quot;scripts&quot;";
 choices[50][3] = "Las instrucciones de formateo por pantalla de los datos";
 answers[50] = 0;
 units[50] = ['94'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3966. ";
 preguntaids[50] = 3966


//  Id pregunta: 1063 Año de creación de pregunta: 2016
 questions[51]= "52)  En el &aacute;mbito del modelo COCOMO, un proyecto de tipo empotrado:";
 choices[51]= new Array();
 choices[51][0] = "Es un proyecto relativamente peque&ntilde;o y sencillo, con poca innovaci&oacute;n tecnol&oacute;gica.";
 choices[51][1] = "Es un proyecto a ser incrustado en dispositivos m&oacute;viles, donde los recursos son escasos.";
 choices[51][2] = "Es un proyecto de nivel intermedio en tama&ntilde;o, complejidad y sofisticaci&oacute;n.";
 choices[51][3] = "Es un proyecto de un tama&ntilde;o y complejidad francamente elevado, donde los requisitos hardware y software son muy r&iacute;gidos.";
 answers[51] = 3;
 units[51] = ['94'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 1063. ";
 preguntaids[51] = 1063


//  Id pregunta: 6686 Año de creación de pregunta: 2009
 questions[52]= "53)  En el modelo Early Design de COCOMO II, el valor PM nominal se ajusta utilizando";
 choices[52]= new Array();
 choices[52][0] = "5 factores de escala";
 choices[52][1] = "7 factores de coste";
 choices[52][2] = "17 factores de coste";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = 1;
 units[52] = ['94'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6686. ";
 preguntaids[52] = 6686


//  Id pregunta: 4243 Año de creación de pregunta: 2006
 questions[53]= "54)  El modelo COCOMO 2000 contempla tres versiones que cubren desde el an&aacute;lisis hasta las pruebas de integraci&oacute;n. Cu&aacute;l de las siguientes no es una versi&oacute;n correcta";
 choices[53]= new Array();
 choices[53][0] = "Modelo de composici&oacute;n de la aplicaci&oacute;n";
 choices[53][1] = "Modelo de definici&oacute;n funcional";
 choices[53][2] = "Modelo de dise&ntilde;o preliminar";
 choices[53][3] = "Modelo Post-Arquitectura";
 answers[53] = 1;
 units[53] = ['94'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 4243. ";
 preguntaids[53] = 4243


//  Id pregunta: 4073 Año de creación de pregunta: 2003
 questions[54]= "55)  &iquest;Cu&aacute;ntas variables explicativas adicionales (o drivers) existen en cocomo II?";
 choices[54]= new Array();
 choices[54][0] = "15";
 choices[54][1] = "17";
 choices[54][2] = "22";
 choices[54][3] = "10";
 answers[54] = 1;
 units[54] = ['94'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 4073. ";
 preguntaids[54] = 4073


//  Id pregunta: 1556 Año de creación de pregunta: 2016
 questions[55]= "56)  Cu&aacute;les de los siguientes NO es un modelo de estimaci&oacute;n de proyectos software:";
 choices[55]= new Array();
 choices[55][0] = "COCOMO II.";
 choices[55][1] = "Delphi.";
 choices[55][2] = "PROBE.";
 choices[55][3] = "M&eacute;todo Box-Cox.";
 answers[55] = 3;
 units[55] = ['94'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1556. ";
 preguntaids[55] = 1556


//  Id pregunta: 4251 Año de creación de pregunta: 2006
 questions[56]= "57)  Seg&uacute;n el m&eacute;todo COCOMO aplicado al mantenimiento, el esfuerzo de mantenimiento es proporcional a";
 choices[56]= new Array();
 choices[56][0] = "la Tasa de Crecimiento Anual";
 choices[56][1] = "la Tasa de C&oacute;mputo Anual";
 choices[56][2] = "la Tasa de Cambio Anual";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 2;
 units[56] = ['94'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4251. ";
 preguntaids[56] = 4251


//  Id pregunta: 3783 Año de creación de pregunta: 2002
 questions[57]= "58)  El m&eacute;todo de los puntos de funci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Es dependiente del lenguaje de programaci&oacute;n que se use";
 choices[57][1] = "S&oacute;lo se aplica a proyectos en los que no se pueda usar COCOMO";
 choices[57][2] = "Se basa en el uso de una relaci&oacute;n emp&iacute;rica";
 choices[57][3] = "No es subjetivo, es muy objetivo";
 answers[57] = 2;
 units[57] = ['94'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3783. ";
 preguntaids[57] = 3783


//  Id pregunta: 3796 Año de creación de pregunta: 2002
 questions[58]= "59)  El modo org&aacute;nico de aplicar los modelos de COCOMO considera:";
 choices[58]= new Array();
 choices[58][0] = "Proyectos peque&ntilde;os";
 choices[58][1] = "Proyectos de complejidad media";
 choices[58][2] = "Proyectos de complejidad alta";
 choices[58][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[58] = 0;
 units[58] = ['94'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3796. ";
 preguntaids[58] = 3796


//  Id pregunta: 7345 Año de creación de pregunta: 2010
 questions[59]= "60)  Seg&uacute;n la nomenclatura de Boehm en el modelo COCOMO los proyectos pueden ser:";
 choices[59]= new Array();
 choices[59][0] = "Org&aacute;nicos, semiorg&aacute;nicos y empotrados";
 choices[59][1] = "Org&aacute;nicos, acoplados y empotrados";
 choices[59][2] = "Org&aacute;nicos, acoplados y semiempotrados";
 choices[59][3] = "Org&aacute;nicos, empotrados y semiacoplados";
 answers[59] = 3;
 units[59] = ['94'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7345. ";
 preguntaids[59] = 7345


//  Id pregunta: 7342 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta en la t&eacute;cnica DELPHI?";
 choices[60]= new Array();
 choices[60][0] = "Intervienen distintos estimadores";
 choices[60][1] = "Dan su estimaci&oacute;n en una reuni&oacute;n conjunta";
 choices[60][2] = "Es un proceso repetitivo";
 choices[60][3] = "Debe existir un coordinador";
 answers[60] = 1;
 units[60] = ['94'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 7342. ";
 preguntaids[60] = 7342


//  Id pregunta: 6683 Año de creación de pregunta: 2009
 questions[61]= "62)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, &iquest;cu&aacute;les de los siguientes tipos de procesos elementales se tienen en cuenta?";
 choices[61]= new Array();
 choices[61][0] = "Procesos elementales de datos";
 choices[61][1] = "Procesos elementales de informaci&oacute;n";
 choices[61][2] = "Procesos elementales transaccionales";
 choices[61][3] = "La A y la B son ciertas";
 answers[61] = 3;
 units[61] = ['94'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6683. ";
 preguntaids[61] = 6683


//  Id pregunta: 1059 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes conceptos introducidos por Symons fue una novedad en la m&eacute;trica Puntos de Funci&oacute;n MARK II respecto a la original de Albrecht?";
 choices[62]= new Array();
 choices[62][0] = "Fichero l&oacute;gico de Entrada.";
 choices[62][1] = "Entidad.";
 choices[62][2] = "Consultas Externas.";
 choices[62][3] = "Caracter&iacute;stica.";
 answers[62] = 1;
 units[62] = ['94'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 1059. ";
 preguntaids[62] = 1059


//  Id pregunta: 3542 Año de creación de pregunta: 2004
 questions[63]= "64)  Sobre el m&eacute;todo de los puntos de funci&oacute;n puede decirse que:";
 choices[63]= new Array();
 choices[63][0] = "se basa en el n&uacute;mero de l&iacute;neas de c&oacute;digo";
 choices[63][1] = "es independiente del c&oacute;digo";
 choices[63][2] = "es una m&eacute;trica de complejidad";
 choices[63][3] = "es una m&eacute;trica de fiabilidad";
 answers[63] = 1;
 units[63] = ['94'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3542. Similar a examen TIC MAP A 2004";
 preguntaids[63] = 3542


//  Id pregunta: 5756 Año de creación de pregunta: 2007
 questions[64]= "65)  El atributo que NO forma parte de los que utiliza la t&eacute;cnica de estimaci&oacute;n del M&eacute;todo Albrecht para el An&aacute;lisis de los Puntos Funci&oacute;n es";
 choices[64]= new Array();
 choices[64][0] = "gran uso de Ia configuraci&oacute;n";
 choices[64][1] = "dise&ntilde;o para la eficacia del usuario final";
 choices[64][2] = "velocidad de las transacciones";
 choices[64][3] = "prestaciones";
 answers[64] = 1;
 units[64] = ['94'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 5756. ";
 preguntaids[64] = 5756


//  Id pregunta: 3855 Año de creación de pregunta: 2002
 questions[65]= "66)  Es falso que dependiendo del proyecto a que se aplique COCOMO, podemos clasificar los sistemas como:";
 choices[65]= new Array();
 choices[65][0] = "Org&aacute;nico";
 choices[65][1] = "Semi-org&aacute;nico";
 choices[65][2] = "Semi-acoplado";
 choices[65][3] = "Empotrado";
 answers[65] = 1;
 units[65] = ['94'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 3855. ";
 preguntaids[65] = 3855


//  Id pregunta: 4241 Año de creación de pregunta: 2006
 questions[66]= "67)  La distribucci&oacute;n Rayleigh se utiliza en el modelo de estimaci&oacute;n del esfuerzo de desarrollo de un proyecto SW propuesto por:";
 choices[66]= new Array();
 choices[66][0] = "Putnam";
 choices[66][1] = "Walston-Felix";
 choices[66][2] = "Esterling";
 choices[66][3] = "McCall";
 answers[66] = 0;
 units[66] = ['94'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 4241. ";
 preguntaids[66] = 4241


//  Id pregunta: 7861 Año de creación de pregunta: 2011
 questions[67]= "68)  Seg&uacute;n el m&eacute;todo de puntos funci&oacute;n de Albrecht, marque la respuesta correcta para el valor de PFA (Puntos de Funci&oacute;n Ajustados), si PFNA (Puntos de Funci&oacute;n No Ajustados) y SVA (Suma de los Valores de los 14 Atributos o caracter&iacute;sticas generales del sistema) valen respectivamente 100 y 65:";
 choices[67]= new Array();
 choices[67][0] = "165";
 choices[67][1] = "120";
 choices[67][2] = "SVA no puede tener un valor superior a 50.";
 choices[67][3] = "130";
 answers[67] = 3;
 units[67] = ['94'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 7861. Examen TIC A1 2010";
 preguntaids[67] = 7861


//  Id pregunta: 4240 Año de creación de pregunta: 2006
 questions[68]= "69)  En el M&eacute;todo de los Puntos de Funci&oacute;n &quot;MARK II&quot;:";
 choices[68]= new Array();
 choices[68][0] = "Un sistema se configura como un conjunto de &quot;aplicaciones tipo&quot; l&oacute;gicas.";
 choices[68][1] = "Las consultas se tratan como una entrada m&aacute;s.";
 choices[68][2] = "Se emplea el concepto de &quot;fichero l&oacute;gico&quot;.";
 choices[68][3] = "Se consideran 19 caracter&iacute;sticas del sistema para calcular los valores de ajuste de la complejidad.";
 answers[68] = 3;
 units[68] = ['94'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 4240. ";
 preguntaids[68] = 4240


//  Id pregunta: 3580 Año de creación de pregunta: 2002
 questions[69]= "70)  En la m&eacute;trica de productividad COCOMO, el modelo b&aacute;sico:";
 choices[69]= new Array();
 choices[69][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[69][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[69][2] = "Considera el impacto de los factores de influencia de las fases de desarrollo (an&aacute;lisis funcional y dise&ntilde;o t&eacute;cnico)";
 choices[69][3] = "Nada de lo anterior es correcto";
 answers[69] = 0;
 units[69] = ['94'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3580. ";
 preguntaids[69] = 3580


//  Id pregunta: 3795 Año de creación de pregunta: 2002
 questions[70]= "71)  El modo empotrado de aplicar los modelos de COCOMO considera:";
 choices[70]= new Array();
 choices[70][0] = "Proyectos peque&ntilde;os";
 choices[70][1] = "Proyectos de complejidad media";
 choices[70][2] = "Proyectos de complejidad alta";
 choices[70][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[70] = 3;
 units[70] = ['94'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3795. ";
 preguntaids[70] = 3795


//  Id pregunta: 6173 Año de creación de pregunta: 2003
 questions[71]= "72)  Cu&aacute;l de los siguientes es un modelo de estimaci&oacute;n de proyectos software:";
 choices[71]= new Array();
 choices[71][0] = "CMMI";
 choices[71][1] = "COCOMO";
 choices[71][2] = "M&eacute;todo de Cox";
 choices[71][3] = "El plan de SQA";
 answers[71] = 1;
 units[71] = ['94'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 6173. Examen TIC A Castilla La Mancha 2007";
 preguntaids[71] = 6173


//  Id pregunta: 4280 Año de creación de pregunta: 2006
 questions[72]= "73)  Indique cu&aacute;l de los siguientes componentes no es considerado por el m&eacute;todo de los puntos de funci&oacute;n de Albrecht, para la estimaci&oacute;n del tama&ntilde;o y del esfuerzo necesarios para desarrollar un sistema software";
 choices[72]= new Array();
 choices[72][0] = "Entradas externas";
 choices[72][1] = "Ficheros l&oacute;gicos internos";
 choices[72][2] = "Atributos del producto";
 choices[72][3] = "Consultas";
 answers[72] = 2;
 units[72] = ['94'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 4280. ";
 preguntaids[72] = 4280


//  Id pregunta: 3728 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Qu&eacute; variable utiliza COCOMO?:";
 choices[73]= new Array();
 choices[73][0] = "El n&uacute;mero de personas que intervienen en un proyectos";
 choices[73][1] = "N&uacute;mero de instrucciones en pseudoc&oacute;digo";
 choices[73][2] = "N&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[73][3] = "No se usan  las instrucciones de c&oacute;digo fuente porque var&iacute;an de un lenguaje a otro";
 answers[73] = 2;
 units[73] = ['94'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3728. ";
 preguntaids[73] = 3728


//  Id pregunta: 4094 Año de creación de pregunta: 2003
 questions[74]= "75)  La t&eacute;cnica de puntos de funci&oacute;n es una t&eacute;cnica para determinar";
 choices[74]= new Array();
 choices[74][0] = "La magnitud de un proyecto inform&aacute;tico y su probable coste";
 choices[74][1] = "La calidad de una aplicaci&oacute;n SW y la tase de errores prevista";
 choices[74][2] = "La amigabilidad de un interfaz y la previsi&oacute;n de errores de usuario";
 choices[74][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n";
 answers[74] = 0;
 units[74] = ['94'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 4094. ";
 preguntaids[74] = 4094


