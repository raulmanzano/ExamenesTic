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
//  Id pregunta: 1082 Año de creación de pregunta: 2016
 questions[0]= "1)  El modelo de reproducci&oacute;n del color CMYK :";
 choices[0]= new Array();
 choices[0][0] = "Es el modelo utilizado por la mayor&iacute;a de esc&aacute;neres.";
 choices[0][1] = "Es un modelo de tipo sustractivo.";
 choices[0][2] = "Se basa en la combinaci&oacute;n de tres colores: rojo, verde y azul.";
 choices[0][3] = "Es el modelo utilizado por la mayor&iacute;a de monitores.";
 answers[0] = 1;
 units[0] = ['80'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1082. ";
 preguntaids[0] = 1082


//  Id pregunta: 7764 Año de creación de pregunta: 2010
 questions[1]= "2)  De entre los est&aacute;ndares siguientes, &iquest;cu&aacute;l se corresponde con la tecnolog&iacute;a WLAN?";
 choices[1]= new Array();
 choices[1][0] = "802.11 del IEEE.";
 choices[1][1] = "802.5 del IEEE.";
 choices[1][2] = "802.8 del IEEE.";
 choices[1][3] = "802.3 del IEEE.";
 answers[1] = 0;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7764. ";
 preguntaids[1] = 7764


//  Id pregunta: 3224 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes bloques b&aacute;sicos no forma parte de la Unidad de Control?:";
 choices[2]= new Array();
 choices[2][0] = "Registro de memorizaci&oacute;n del estado presente.";
 choices[2][1] = "Bloque de calculo del pr&oacute;ximo estado.";
 choices[2][2] = "Bloque de calculo de la salida (micro&oacute;rdenes enviadas a la unidad de procesamiento).";
 choices[2][3] = "Bloque temporizador.";
 answers[2] = 3;
 units[2] = ['52'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3224. Junta Andaluc&iacute;a";
 preguntaids[2] = 3224


//  Id pregunta: 4139 Año de creación de pregunta: 2003
 questions[3]= "4)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[3]= new Array();
 choices[3][0] = "Los avances m&aacute;s recientes en la s&iacute;ntesis del habla han ido por el camino de una parametrizaci&oacute;n de la se&ntilde;al original para suprimir la informaci&oacute;n redundante contenida en las ondas ac&uacute;sticas.";
 choices[3][1] = "En el nivel fon&eacute;tico distintivo se determinan los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[3][2] = "En el nivel fon&eacute;tico se analizan las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[3][3] = "El estudio en el dominio de la frecuencia ha conducido al an&aacute;lisis del habla por transformadas de Fourier y por bancos de filtros en paralelo.";
 answers[3] = 3;
 units[3] = ['81'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 4139. ";
 preguntaids[3] = 4139


//  Id pregunta: 7867 Año de creación de pregunta: 2011
 questions[4]= "5)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico:";
 choices[4]= new Array();
 choices[4][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de  Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[4][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[4][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[4][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits.";
 answers[4] = 1;
 units[4] = ['78'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7867. Examen TIC A1 2010";
 preguntaids[4] = 7867


//  Id pregunta: 7115 Año de creación de pregunta: 2010
 questions[5]= "6)  Las disposiciones del RD 1671/2009 ser&aacute;n de aplicaci&oacute;n a:";
 choices[5]= new Array();
 choices[5][0] = "Al sector p&uacute;blico en su conjunto.";
 choices[5][1] = "A todas las Administraciones P&uacute;blicas , as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de las mismas.";
 choices[5][2] = "A las relaciones entre las Administraciones P&uacute;blicas.";
 choices[5][3] = "A la actividad de la Administraci&oacute;n General del Estado, as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de la misma.";
 answers[5] = 3;
 units[5] = ['7'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 7115. Art&iacute;culo 1 RD 1671/2009";
 preguntaids[5] = 7115


//  Id pregunta: 7324 Año de creación de pregunta: 2010
 questions[6]= "7)  CMM en el campo de la ingenier&iacute;a y calidad del software son las siglas de:";
 choices[6]= new Array();
 choices[6][0] = "Capacity Maturity Model";
 choices[6][1] = "Capability Maturity Model";
 choices[6][2] = "Capacity Management Model";
 choices[6][3] = "Capability Management Model";
 answers[6] = 1;
 units[6] = ['92'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7324. ";
 preguntaids[6] = 7324


//  Id pregunta: 8025 Año de creación de pregunta: 2011
 questions[7]= "8)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[7]= new Array();
 choices[7][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[7][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[7][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[7][3] = "Puede usar conectores MIC.";
 answers[7] = 3;
 units[7] = ['104'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8025. Examen TIC A2 2010";
 preguntaids[7] = 8025


//  Id pregunta: 9885 Año de creación de pregunta: 2015
 questions[8]= "9)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[8]= new Array();
 choices[8][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[8][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[8][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[8][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[8] = 1;
 units[8] = ['7', '19'];
 blocks[8] = ['A2', 'A4'];
 comments[8] = "Id Pregunta: 9885. ";
 preguntaids[8] = 9885


//  Id pregunta: 4484 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a las distintas formas de codificaci&oacute;n?:";
 choices[9]= new Array();
 choices[9][0] = "La codificaci&oacute;n aritm&eacute;tica es m&aacute;s eficiente (en bits/s&iacute;mbolo) que la de Huffman";
 choices[9][1] = "La codificaci&oacute;n de Huffman utiliza los c&oacute;digos m&aacute;s largos para los s&iacute;mbolos m&aacute;s improbables";
 choices[9][2] = "La codificaci&oacute;n de Huffman codifica cada s&iacute;mbolo de forma independiente";
 choices[9][3] = "La codificaci&oacute;n de Huffman utiliza c&oacute;digos de longitud uniforme para representar los diferentes s&iacute;mbolos";
 answers[9] = 3;
 units[9] = ['104'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4484. ";
 preguntaids[9] = 4484


//  Id pregunta: 1007 Año de creación de pregunta: 2016
 questions[10]= "11)  Los Subdirectores generales:";
 choices[10]= new Array();
 choices[10][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[10][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[10][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[10][3] = "todas son correctas";
 answers[10] = 1;
 units[10] = ['4', '7', '8', '9'];
 blocks[10] = ['A1', 'A2'];
 comments[10] = "Id Pregunta: 1007. Ley 40/2015";
 preguntaids[10] = 1007


//  Id pregunta: 6386 Año de creación de pregunta: 2003
 questions[11]= "12)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a &quot;.es&quot; la tiene legalmente encomendada";
 choices[11]= new Array();
 choices[11][0] = "Internic.es";
 choices[11][1] = "Red.es";
 choices[11][2] = "Mityc.es";
 choices[11][3] = "Netsol.es";
 answers[11] = 1;
 units[11] = ['48'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 6386. Examen 2006 JCYL";
 preguntaids[11] = 6386


//  Id pregunta: 2500 Año de creación de pregunta: 2004
 questions[12]= "13)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[12]= new Array();
 choices[12][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[12][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[12][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[12][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[12] = 1;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2500. Examen TIC MAP B 2004";
 preguntaids[12] = 2500


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[13]= "14)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[13]= new Array();
 choices[13][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[13][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[13][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[13][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[13] = 3;
 units[13] = ['11'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 324. Presupuestos generales";
 preguntaids[13] = 324


//  Id pregunta: 6526 Año de creación de pregunta: 2003
 questions[14]= "15)  Indique cu&aacute;l de las siguientes respuestas es err&oacute;nea:";
 choices[14]= new Array();
 choices[14][0] = "Un m&oacute;dulo SODIMM posee 200 contactos";
 choices[14][1] = "Existen m&oacute;dulos DIMM de 194 contactos";
 choices[14][2] = "Existen  m&oacute;dulos DIMM de 184 contactos";
 choices[14][3] = "Las siglas DIMM hacen referencia a &quot;Dual Inline Memory Module&quot;";
 answers[14] = 1;
 units[14] = ['52'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6526. ";
 preguntaids[14] = 6526


//  Id pregunta: 3111 Año de creación de pregunta: 2002
 questions[15]= "16)  Uno de los siguientes grupos de componentes no pertenece al conjunto de componentes s&iacute;ncronos de groupware. Indicar cu&aacute;l:";
 choices[15]= new Array();
 choices[15][0] = "video, audio, editor texto";
 choices[15][1] = "gestor de tr&aacute;fico, control de estado, punteros";
 choices[15][2] = "bases de datos de objetos, motores workflow, notas post-it";
 choices[15][3] = "compartidor de aplicaciones, chat, pizarras";
 answers[15] = 2;
 units[15] = ['72'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3111. ";
 preguntaids[15] = 3111


//  Id pregunta: 3594 Año de creación de pregunta: 2004
 questions[16]= "17)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[16]= new Array();
 choices[16][0] = "M&eacute;tricas de productividad";
 choices[16][1] = "M&eacute;tricas de fiabilidad";
 choices[16][2] = "M&eacute;tricas de rendimiento";
 choices[16][3] = "M&eacute;tricas de Complejidad";
 answers[16] = 2;
 units[16] = ['93'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3594. ";
 preguntaids[16] = 3594


//  Id pregunta: 8183 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;Cual de las siguientes soluciones comerciales de Escritorio Remoto se distribuye bajo licencia propietaria?";
 choices[17]= new Array();
 choices[17][0] = "Vinagre";
 choices[17][1] = "DameWare Mini Remote Control";
 choices[17][2] = "TightVNC";
 choices[17][3] = "RdesKtop";
 answers[17] = 1;
 units[17] = ['123'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8183. Examen TIC A2 2010 interna";
 preguntaids[17] = 8183


//  Id pregunta: 1759 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique cu&aacute;l de los siguientes NO es, actualmente, un tama&ntilde;o de clave v&aacute;lido para el algoritmo de cifrado AES:";
 choices[18]= new Array();
 choices[18][0] = "128 bits";
 choices[18][1] = "192 bits";
 choices[18][2] = "256 bits";
 choices[18][3] = "512 bits";
 answers[18] = 3;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1759. ";
 preguntaids[18] = 1759


//  Id pregunta: 10402 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[19]= new Array();
 choices[19][0] = "0.2";
 choices[19][1] = "0.33";
 choices[19][2] = "0.5";
 choices[19][3] = "0.8";
 answers[19] = 2;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 10402. ";
 preguntaids[19] = 10402


//  Id pregunta: 4084 Año de creación de pregunta: 2003
 questions[20]= "21)  El UML ( Unified modeling Language) es un lenguaje que permite modelar construir y documentar los elementos que forman un sistema SW orientado a objetos. Indicar cu&aacute;l entre los siguientes no corresponde a un modelo usado en UML";
 choices[20]= new Array();
 choices[20][0] = "Diagrama de estructura din&aacute;mica";
 choices[20][1] = "Diagrama de Casos de Uso";
 choices[20][2] = "Diagrama de Secuencia";
 choices[20][3] = "Diagrama de colaboraci&oacute;n";
 answers[20] = 0;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 4084. ";
 preguntaids[20] = 4084


//  Id pregunta: 1736 Año de creación de pregunta: 2016
 questions[21]= "22)  El Lenguaje de Control de Trabajos (JCL), es un conjunto de especificaciones que constituyen un lenguaje de programaci&oacute;n de tareas para el sistema operativo que gobierna un equipo inform&aacute;tico, usado en Mainframes. Entre sus caracter&iacute;sticas indicar la respuesta err&oacute;nea:";
 choices[21]= new Array();
 choices[21][0] = "Las sentencias JCL comienzan con //";
 choices[21][1] = "A partir de la columna 52 se considera comentario";
 choices[21][2] = "La primera sentencia es JOB";
 choices[21][3] = "Todas las sentencias han de escribirse en MAY&Uacute;SCULAS";
 answers[21] = 1;
 units[21] = ['49'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1736. ";
 preguntaids[21] = 1736


//  Id pregunta: 3690 Año de creación de pregunta: 2002
 questions[22]= "23)  Indique la afirmaci&oacute;n verdadera relativa a la Gesti&oacute;n de la Documentaci&oacute;n de un proyecto o sistema:";
 choices[22]= new Array();
 choices[22][0] = "La gesti&oacute;n de configuraci&oacute;n y control de versiones se refiere &uacute;nicamente al producto software y no a la documentaci&oacute;n";
 choices[22][1] = "La documentaci&oacute;n producida durante el desarrollo de un proyecto es independiente de la metodolog&iacute;a empleada";
 choices[22][2] = "El documento de requisitos de sistema es anterior al documento de requisitos de usuario";
 choices[22][3] = "La documentaci&oacute;n debe entenderse como todos los productos resultantes de las tareas realizadas, ya sean informes, programas, juegos de pruebas, gr&aacute;ficos, etc";
 answers[22] = 3;
 units[22] = ['99'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3690. ";
 preguntaids[22] = 3690


//  Id pregunta: 4412 Año de creación de pregunta: 2002
 questions[23]= "24)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[23]= new Array();
 choices[23][0] = "Distorsi&oacute;n no lineal";
 choices[23][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[23][2] = "Intermodulaci&oacute;n";
 choices[23][3] = "Paradiafon&iacute;a";
 answers[23] = 2;
 units[23] = ['104'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4412. ";
 preguntaids[23] = 4412


//  Id pregunta: 10526 Año de creación de pregunta: 2015
 questions[24]= "25)  Distintos gobiernos regionales est&aacute;n desarrollando sus propias distribuciones Linux. Seleccione cu&aacute;l no es una de ellas:";
 choices[24]= new Array();
 choices[24][0] = "LinEx en Extremadura,";
 choices[24][1] = "Augustux en Arag&oacute;n";
 choices[24][2] = "AndaLinex en Andaluc&iacute;a";
 choices[24][3] = "LinuxGlobal en Cantabria";
 answers[24] = 2;
 units[24] = ['66'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10526. Es Guadalinex";
 preguntaids[24] = 10526


//  Id pregunta: 7023 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;Cu&aacute;les de las siguientes no es una fase definida en la planificaci&oacute;n estrat&eacute;gica?";
 choices[25]= new Array();
 choices[25][0] = "Formulaci&oacute;n de objetivos organizacionales";
 choices[25][1] = "An&aacute;lisis de las fortalezas y limitaciones de la empresa";
 choices[25][2] = "Reestructuraci&oacute;n de la empresa";
 choices[25][3] = "Formulaci&oacute;n de alternativas estrat&eacute;gicas";
 answers[25] = 2;
 units[25] = ['83'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7023. ";
 preguntaids[25] = 7023


//  Id pregunta: 4069 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de 11 aristas y 9 nodos?";
 choices[26]= new Array();
 choices[26][0] = "6";
 choices[26][1] = "12";
 choices[26][2] = "8";
 choices[26][3] = "4";
 answers[26] = 3;
 units[26] = ['93'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4069. ";
 preguntaids[26] = 4069


//  Id pregunta: 2960 Año de creación de pregunta: 2002
 questions[27]= "28)  Las actividades clave del data warehousing son:";
 choices[27]= new Array();
 choices[27][0] = "Recepci&oacute;n, almacenamiento, proceso y presentaci&oacute;n.";
 choices[27][1] = "Extracci&oacute;n de datos, almacenamiento de datos, OLAP, miner&iacute;a de datos y acceso a los datos.";
 choices[27][2] = "Carga de datos de prueba, entrenamiento, inferencia del conocimiento, carga de datos reales y c&aacute;lculo de decisiones.";
 choices[27][3] = "Gesti&oacute;n de los medios f&iacute;sicos de almacenamiento, localizaci&oacute;n transparente de los datos y salvaguarda y restauraci&oacute;n autom&aacute;ticas.";
 answers[27] = 1;
 units[27] = ['72', '73'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2960. ";
 preguntaids[27] = 2960


//  Id pregunta: 6780 Año de creación de pregunta: 2010
 questions[28]= "29)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[28]= new Array();
 choices[28][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[28][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[28][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[28][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[28] = 2;
 units[28] = ['45'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 6780. Castilla La Mancha 2009";
 preguntaids[28] = 6780


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[29]= "30)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[29]= new Array();
 choices[29][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[29][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[29][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[29][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[29] = 3;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 80. Constituci&oacute;n de 1978";
 preguntaids[29] = 80


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[30]= "31)  La soberan&iacute;a nacional reside en:";
 choices[30]= new Array();
 choices[30][0] = "el Parlamento nacional.";
 choices[30][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[30][2] = "el pueblo espa&ntilde;ol.";
 choices[30][3] = "el Congreso y el Senado.";
 answers[30] = 2;
 units[30] = ['1'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[30] = 82


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[31]= new Array();
 choices[31][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[31][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[31][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[31][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[31] = 2;
 units[31] = ['15'];
 blocks[31] = ['A3'];
 comments[31] = "Id Pregunta: 423. Mercado laboral";
 preguntaids[31] = 423


//  Id pregunta: 7161 Año de creación de pregunta: 2010
 questions[32]= "33)  Se&ntilde;ale una de las restricciones del modelo E/R:";
 choices[32]= new Array();
 choices[32][0] = "No se pueden realizar relaciones de unas relaciones con otras.";
 choices[32][1] = "No permite relacionar m&aacute;s de dos entidades.";
 choices[32][2] = "No permite relaciones reflexivas.";
 choices[32][3] = "No se pueden representar las propiedades de las entidades.";
 answers[32] = 0;
 units[32] = ['85'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 7161. ";
 preguntaids[32] = 7161


//  Id pregunta: 7692 Año de creación de pregunta: 2010
 questions[33]= "34)  La norma ISO 27002 recoge:";
 choices[33]= new Array();
 choices[33][0] = "Buenas pr&aacute;ticas para la gesti&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[33][1] = "La reglamentaci&oacute;n de interconexi&oacute;n segura de redes inal&aacute;mbricas (WIFI).";
 choices[33][2] = "Normativa aplicable para el desarrollo de aplicaciones militares.";
 choices[33][3] = "Est&aacute;ndares de desarrollo de aplicaciones de uso dual (civil y militar).";
 answers[33] = 0;
 units[33] = ['45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 7692. Similar a Map 2007";
 preguntaids[33] = 7692


//  Id pregunta: 1028 Año de creación de pregunta: 2016
 questions[34]= "35)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[34]= new Array();
 choices[34][0] = "Cabr&aacute; recurso de alzada";
 choices[34][1] = "Cabr&aacute; el nuevo protesto";
 choices[34][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[34][3] = "No cabr&aacute; recurso alguno";
 answers[34] = 3;
 units[34] = ['4', '7', '8', '9'];
 blocks[34] = ['A1', 'A2'];
 comments[34] = "Id Pregunta: 1028. Ley 40/2015";
 preguntaids[34] = 1028


//  Id pregunta: 6306 Año de creación de pregunta: 2003
 questions[35]= "36)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[35]= new Array();
 choices[35][0] = "Los FCE ayudan a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n";
 choices[35][1] = "Factores de &eacute;xito son los objetivos de la organizaci&oacute;n";
 choices[35][2] = "FCE son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[35][3] = "Para definir los FCE de la organizaci&oacute;n, es necesario que los objetivos de la misma est&eacute;n claramente definidos";
 answers[35] = 1;
 units[35] = ['83'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6306. ";
 preguntaids[35] = 6306


//  Id pregunta: 1010 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[36]= new Array();
 choices[36][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[36][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[36][2] = "el Ministerio del Interior";
 choices[36][3] = "la Administraci&oacute;n General del Estado";
 answers[36] = 0;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 1010. Ley 40/2015";
 preguntaids[36] = 1010


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[37]= "38)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[37]= new Array();
 choices[37][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[37][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[37][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[37][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[37] = 0;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 254. Ley 39/2015";
 preguntaids[37] = 254


//  Id pregunta: 2760 Año de creación de pregunta: 2002
 questions[38]= "39)  El lenguaje Visual Basic, y la arquitectura DNA de Microsoft permiten arquitecturas Cliente/Servidor:";
 choices[38]= new Array();
 choices[38][0] = "De 2 niveles";
 choices[38][1] = "De N niveles";
 choices[38][2] = "Solo con clientes Microsoft";
 choices[38][3] = "B y C son ciertas";
 answers[38] = 1;
 units[38] = ['55'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2760. ";
 preguntaids[38] = 2760


//  Id pregunta: 9412 Año de creación de pregunta: 2014
 questions[39]= "40)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil tiene 5 fases claramente diferenciadas?";
 choices[39]= new Array();
 choices[39][0] = "SCRUM";
 choices[39][1] = "Lean Software Development";
 choices[39][2] = "Kanban";
 choices[39][3] = "Feature Driven Development";
 answers[39] = 3;
 units[39] = ['84'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 9412. FDD define 5 procesos: Proceso 1 &ndash; Desarrollar el modelo global (Develop overall model), Proceso 2 &ndash; Construir una lista de caracter&iacute;sticas (Build feature list), Proceso 3 &ndash; Planificar (Plan by feature), Proceso 4 &ndash; Dise&ntilde;ar (Design by feature) y Proceso 5 &ndash; Construir (Build by feature).";
 preguntaids[39] = 9412


//  Id pregunta: 6222 Año de creación de pregunta: 2003
 questions[40]= "41)  En el modelo de referencia TCP/IP:";
 choices[40]= new Array();
 choices[40][0] = "No se definen las capas de sesi&oacute;n ni de aplicaci&oacute;n.";
 choices[40][1] = "No se definen las capas de red ni de sesi&oacute;n.";
 choices[40][2] = "No se definen las capas de presentaci&oacute;n ni de aplicaci&oacute;n.";
 choices[40][3] = "No se definen las capas de sesi&oacute;n ni de presentaci&oacute;n.";
 answers[40] = 3;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 6222. Examen TIC A Castilla La Mancha 2007";
 preguntaids[40] = 6222


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[41]= "42)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Unidad de igualdad.";
 choices[41][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[41][2] = "Ninguna de las anteriores.";
 choices[41][3] = "A y B son correctas.";
 answers[41] = 1;
 units[41] = ['14'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 413. Pol&iacute;ticas de igualdad";
 preguntaids[41] = 413


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[42]= "43)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[42]= new Array();
 choices[42][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[42][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[42][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[42][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[42] = 3;
 units[42] = ['1'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 25. Constituci&oacute;n de 1978";
 preguntaids[42] = 25


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[43]= new Array();
 choices[43][0] = "Anual.";
 choices[43][1] = "Semestral.";
 choices[43][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[43][3] = "Bienal.";
 answers[43] = 2;
 units[43] = ['14'];
 blocks[43] = ['A3'];
 comments[43] = "Id Pregunta: 362. Pol&iacute;ticas de igualdad";
 preguntaids[43] = 362


//  Id pregunta: 10386 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;A cu&aacute;l de las siguientes prioridades de la estrategia Europa 2020 se hace referencia con el objetivo de la b&uacute;squeda de un econom&iacute;a basada en el conocimiento y la innovaci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "Crecimiento inteligente";
 choices[44][1] = "Crecimiento sostenible";
 choices[44][2] = "Crecimiento innovador";
 choices[44][3] = "Crecimiento integrador";
 answers[44] = 0;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 10386. ";
 preguntaids[44] = 10386


//  Id pregunta: 2721 Año de creación de pregunta: 2002
 questions[45]= "46)  De acuerdo al modelo vectorial, &iquest;cu&aacute;l de los siguientes datos no se representa en un sistema de informaci&oacute;n geogr&aacute;fica?:";
 choices[45]= new Array();
 choices[45][0] = "Arcos circulares.";
 choices[45][1] = "Pol&iacute;gonos.";
 choices[45][2] = "L&iacute;neas.";
 choices[45][3] = "Matrices de celdas.";
 answers[45] = 3;
 units[45] = ['71'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2721. ";
 preguntaids[45] = 2721


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[46]= new Array();
 choices[46][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[46][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[46][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[46][3] = "todas son correctas";
 answers[46] = 3;
 units[46] = ['7'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 239. Ley 39/2015";
 preguntaids[46] = 239


//  Id pregunta: 7112 Año de creación de pregunta: 2010
 questions[47]= "48)  En el Esquema Nacional de Interoperabilidad, se establece que los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica se sincronizar&aacute;n con la hora oficial de:";
 choices[47]= new Array();
 choices[47][0] = "El reloj de la Puerta del Sol";
 choices[47][1] = "El Instituto Europeo de Medici&oacute;n Horaria";
 choices[47][2] = "La Agencia Espa&ntilde;ola de Meteorologia";
 choices[47][3] = "El Real Instituto y Observatorio de la Armada";
 answers[47] = 3;
 units[47] = ['43'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 7112. Art&iacute;culo 15 ENI";
 preguntaids[47] = 7112


//  Id pregunta: 9050 Año de creación de pregunta: 2014
 questions[48]= "49)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[48]= new Array();
 choices[48][0] = "CMM";
 choices[48][1] = "CMMI Escalonado";
 choices[48][2] = "CMMI Continuo";
 choices[48][3] = "Ninguno de los anteriores";
 answers[48] = 0;
 units[48] = ['92'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 9050. ";
 preguntaids[48] = 9050


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[49]= "50)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[49]= new Array();
 choices[49][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[49][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[49][2] = "La normativa reguladora de cada derecho.";
 choices[49][3] = "Ley 50/1997, del Gobierno.";
 answers[49] = 2;
 units[49] = ['11'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 278. Presupuestos generales";
 preguntaids[49] = 278


//  Id pregunta: 1549 Año de creación de pregunta: 2016
 questions[50]= "51)  LINQ es una extensi&oacute;n al framework de la plataforma .NET. &iquest;Qu&eacute; funcionalidad a&ntilde;ade este componente?";
 choices[50]= new Array();
 choices[50][0] = "A&ntilde;ade una capa de seguridad al runtime, centralizadas en una clase proveedora externa al programa en ejecuci&oacute;n.";
 choices[50][1] = "Permite la encapsulaci&oacute;n autom&aacute;tica de objetos COM a objetos del runtime, permitiendo su manipulaci&oacute;n de manera natural.";
 choices[50][2] = "Hace posible la Programaci&oacute;n Orientada a Aspectos, exponiendo los &quot;concerns&quot; definidos a todas las capas de la aplicaci&oacute;n.";
 choices[50][3] = "Permite efectuar nativamente en el lenguaje de programaci&oacute;n consultas a bases de datos relacionales y otras fuentes.";
 answers[50] = 3;
 units[50] = ['63'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1549. ";
 preguntaids[50] = 1549


//  Id pregunta: 7892 Año de creación de pregunta: 2010
 questions[51]= "52)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[51]= new Array();
 choices[51][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[51][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2012.";
 choices[51][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[51][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[51] = 1;
 units[51] = ['42'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 7892. Examen TIC A1 2010";
 preguntaids[51] = 7892


//  Id pregunta: 8234 Año de creación de pregunta: 2011
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI?";
 choices[52]= new Array();
 choices[52][0] = "Proxy";
 choices[52][1] = "Firewall de filtrado de paquetes";
 choices[52][2] = "Antivirus";
 choices[52][3] = "Filtro anti SPAM";
 answers[52] = 1;
 units[52] = ['119'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8234. Examen UPM A2 2011";
 preguntaids[52] = 8234


//  Id pregunta: 5100 Año de creación de pregunta: 2004
 questions[53]= "54)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el cliente";
 choices[53]= new Array();
 choices[53][0] = "Applets";
 choices[53][1] = "JavaScript";
 choices[53][2] = "ActiveX";
 choices[53][3] = "CGI";
 answers[53] = 3;
 units[53] = ['62'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 5100. ";
 preguntaids[53] = 5100


//  Id pregunta: 7658 Año de creación de pregunta: 2010
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes par&aacute;metros NO forma parte de la ecuaci&oacute;n del software de Putnam para la estimaci&oacute;n del esfuerzo de un proyecto software?";
 choices[54]= new Array();
 choices[54][0] = "Casos de uso.";
 choices[54][1] = "L&iacute;neas de c&oacute;digo.";
 choices[54][2] = "Duraci&oacute;n del proyecto.";
 choices[54][3] = "Par&aacute;metro de productividad.";
 answers[54] = 0;
 units[54] = ['94'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 7658. Map 2006";
 preguntaids[54] = 7658


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[55]= "56)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[55]= new Array();
 choices[55][0] = "En qu&eacute; nos gastamos el dinero";
 choices[55][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[55][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[55][3] = "Qui&eacute;n se gasta el dinero.";
 answers[55] = 0;
 units[55] = ['11'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 273. Presupuestos generales";
 preguntaids[55] = 273


//  Id pregunta: 5631 Año de creación de pregunta: 2007
 questions[56]= "57)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[56]= new Array();
 choices[56][0] = "El lugar donde este establecido el prestador de servicios";
 choices[56][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[56][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[56][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[56] = 1;
 units[56] = ['19'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 5631. Ley 34/2002, art&iacute;culo 29";
 preguntaids[56] = 5631


//  Id pregunta: 10673 Año de creación de pregunta: 2015
 questions[57]= "58)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[57]= new Array();
 choices[57][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[57][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[57][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[57][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[57] = 0;
 units[57] = ['7'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 10673. ";
 preguntaids[57] = 10673


//  Id pregunta: 1181 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO se usa en el desarrollo de servicios web?";
 choices[58]= new Array();
 choices[58][0] = "AXIS";
 choices[58][1] = "JAX-WS";
 choices[58][2] = "CXE";
 choices[58][3] = "AXIS 2";
 answers[58] = 2;
 units[58] = ['55'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1181. ";
 preguntaids[58] = 1181


//  Id pregunta: 3413 Año de creación de pregunta: 2006
 questions[59]= "60)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas...";
 choices[59]= new Array();
 choices[59][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[59][1] = "Utilizan slots donde cada slot se corresponde con una idea";
 choices[59][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[59][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[59] = 0;
 units[59] = ['68'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3413. ";
 preguntaids[59] = 3413


//  Id pregunta: 1526 Año de creación de pregunta: 2016
 questions[60]= "61)  Mediante un sistema criptogr&aacute;fico sim&eacute;trico, un usuario A (con claves p&uacute;blica Pa y privada Ka) desea comunicarse con otro usuario B (con claves p&uacute;blica Pb y privada Kb). &iquest;De qu&eacute; forma podr&iacute;a A enviarle un mensaje (M) a B de manera que s&oacute;lo pueda verlo B y garantizando que ha sido A el que lo ha enviado?";
 choices[60]= new Array();
 choices[60][0] = "Kb(Pa(M)).";
 choices[60][1] = "Pb(Ka(M)).";
 choices[60][2] = "Pb(M).";
 choices[60][3] = "Ka(M).";
 answers[60] = 1;
 units[60] = ['76'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1526. ";
 preguntaids[60] = 1526


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[61]= "62)  Sobre el Plan Juncker:";
 choices[61]= new Array();
 choices[61][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[61][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[61][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[61][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[61] = 1;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 104. Uni&oacute;n Europea";
 preguntaids[61] = 104


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[62]= new Array();
 choices[62][0] = "Siempre en formato electr&oacute;nico.";
 choices[62][1] = "Siempre en formato papel.";
 choices[62][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[62][3] = "La ley no regula el formato del expediente.";
 answers[62] = 0;
 units[62] = ['7'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 205. Ley 39/2015";
 preguntaids[62] = 205


//  Id pregunta: 9136 Año de creación de pregunta: 2014
 questions[63]= "64)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[63]= new Array();
 choices[63][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[63][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[63][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[63][3] = "Ninguna de las anteriores.";
 answers[63] = 1;
 units[63] = ['37'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 9136. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";
 preguntaids[63] = 9136


//  Id pregunta: 985 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[64]= new Array();
 choices[64][0] = "los Subsecretarios y Secretarios generales";
 choices[64][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[64][2] = "los Secretarios de Estado";
 choices[64][3] = "los Subdirectores generales";
 answers[64] = 2;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 985. Ley 40/2015";
 preguntaids[64] = 985


//  Id pregunta: 7117 Año de creación de pregunta: 2010
 questions[65]= "66)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[65]= new Array();
 choices[65][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[65][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[65][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[65][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[65] = 1;
 units[65] = ['7'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 7117. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[65] = 7117


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[66]= new Array();
 choices[66][0] = "Ley 50/1997, del Gobierno.";
 choices[66][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[66][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[66][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[66] = 1;
 units[66] = ['11'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 291. Presupuestos generales";
 preguntaids[66] = 291


//  Id pregunta: 3581 Año de creación de pregunta: 2002
 questions[67]= "68)  En la planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n, las decisiones principales que es preciso tomar son:";
 choices[67]= new Array();
 choices[67][0] = "Establecer los objetivos y metas principales";
 choices[67][1] = "Formular programas y proyectos parqa conseguir los objetivos";
 choices[67][2] = "Definir presupuesto y &aacute;mbito de actuaci&oacute;n para llevar a cabo lo anterior";
 choices[67][3] = "Todas las anteriores respuestas son correctas";
 answers[67] = 3;
 units[67] = ['83'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3581. ";
 preguntaids[67] = 3581


//  Id pregunta: 2115 Año de creación de pregunta: 2002
 questions[68]= "69)  El T&iacute;tulo VI de la LOPD trata sobre:";
 choices[68]= new Array();
 choices[68][0] = "Principios de la protecci&oacute;n de datos";
 choices[68][1] = "Derechos de las personas";
 choices[68][2] = "Movimiento internacional de datos";
 choices[68][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[68] = 3;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2115. ";
 preguntaids[68] = 2115


//  Id pregunta: 6369 Año de creación de pregunta: 2003
 questions[69]= "70)  &iquest;Cu&aacute;l es el lugar m&aacute;s conveniente para la instalaci&oacute;n de un CPD de respaldo en la ribera del Pisuerga?";
 choices[69]= new Array();
 choices[69][0] = "La planta m&aacute;s elevada del edificio de usos m&uacute;ltiples";
 choices[69][1] = "Una sala aneja al garaje subterr&aacute;neo";
 choices[69][2] = "La primera planta de un edificio de cinco plantas";
 choices[69][3] = "La planta baja";
 answers[69] = 2;
 units[69] = ['26'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 6369. Examen 2006 JCYL";
 preguntaids[69] = 6369


//  Id pregunta: 1619 Año de creación de pregunta: 2016
 questions[70]= "71)  El objetivo clave en la planificaci&oacute;n de la capacidad de los sistemas inform&aacute;ticos es asegurar que:";
 choices[70]= new Array();
 choices[70][0] = "Los recursos disponibles son plenamente empleados.";
 choices[70][1] = "Se a&ntilde;adir&aacute;n nuevos recursos para las nuevas aplicaciones de manera puntual.";
 choices[70][2] = "Los recursos existentes se emplean de manera eficaz y eficiente.";
 choices[70][3] = "La utilizaci&oacute;n de recursos no baja del 85%.";
 answers[70] = 2;
 units[70] = ['84'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 1619. ";
 preguntaids[70] = 1619


//  Id pregunta: 4249 Año de creación de pregunta: 2006
 questions[71]= "72)  Algunos de los pasos a realizar en el &quot;mining legacy system assets&quot; son:";
 choices[71]= new Array();
 choices[71][0] = "Rehabilitaci&oacute;n de componentes seleccionados.";
 choices[71][1] = "Reprogramaci&oacute;n de los m&oacute;dulos obsoletos.";
 choices[71][2] = "Realizaci&oacute;n de pruebas detalladas de los componentes del sistema en el nuevo entorno.";
 choices[71][3] = "Ninguna de las anteriores es correcta.";
 answers[71] = 0;
 units[71] = ['95'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 4249. ";
 preguntaids[71] = 4249


//  Id pregunta: 7822 Año de creación de pregunta: 2010
 questions[72]= "73)  El m&eacute;todo de Saaty o AHP:";
 choices[72]= new Array();
 choices[72][0] = "Es relativo a accesibilidad web.";
 choices[72][1] = "Es relativo a la decisi&oacute;n multicriterio.";
 choices[72][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n.";
 choices[72][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo.";
 answers[72] = 1;
 units[72] = ['38'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 7822. ";
 preguntaids[72] = 7822


//  Id pregunta: 3814 Año de creación de pregunta: 2002
 questions[73]= "74)  En la gesti&oacute;n de riesgos del modelo en espiral del ciclo de vida de una aplicaci&oacute;n, entre los riesgos m&aacute;s importantes que se contemplan tenemos:";
 choices[73]= new Array();
 choices[73][0] = "Escasez de personal";
 choices[73][1] = "Presupuestos y calendarios no realistas";
 choices[73][2] = "Las 2 anteriores";
 choices[73][3] = "Ninguna de las anteriores, pues este tema de riesgos es indiferente para el modelo en espiral";
 answers[73] = 2;
 units[73] = ['82'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3814. ";
 preguntaids[73] = 3814


//  Id pregunta: 2346 Año de creación de pregunta: 2003
 questions[74]= "75)  Las medidas de seguridad l&oacute;gica para datos de car&aacute;cter personal caracterizadas como de nivel Medio:";
 choices[74]= new Array();
 choices[74][0] = "De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado";
 choices[74][1] = "La identificaci&oacute;n de los soportes se deber&aacute; realizar utilizando sistemas de etiquetado comprensibles y con significado que permitan a los usuarios con acceso autorizado a los citados soportes y documentos identificar su contenido, y que dificulten la identificaci&oacute;n para el resto de personas.";
 choices[74][2] = "El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[74][3] = "Deber&aacute;n establecerse procedimientos de actuaci&oacute;n para la realizaci&oacute;n como m&iacute;nimo semanal de copias de respaldo, salvo que en dicho per&iacute;odo no se hubiera producido ninguna actualizaci&oacute;n de los datos.";
 answers[74] = 2;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2346. ";
 preguntaids[74] = 2346


