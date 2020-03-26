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
//  Id pregunta: 5797 Año de creación de pregunta: 2007
 questions[0]= "1)  Los identificadores VPI/VCI tienen significado";
 choices[0]= new Array();
 choices[0][0] = "global para toda la red";
 choices[0][1] = "para cada conexi&oacute;n";
 choices[0][2] = "para cada enlace";
 choices[0][3] = "solo entre el terminal y el switch ATM";
 answers[0] = 2;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5797. ";
 preguntaids[0] = 5797


//  Id pregunta: 10698 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones hace referencia al tipo de Cuadro de Mandos Balanced Scorecard?";
 choices[1]= new Array();
 choices[1][0] = "Muestra informaci&oacute;n a nivel estrat&eacute;gico, orientada a la consecuci&oacute;n de objetivos.";
 choices[1][1] = "&Uacute;nicamente utilizan indicadores clave de rendimiento (KPI)";
 choices[1][2] = "No utilizan indicadores orientados a objetivos (KGI).";
 choices[1][3] = "Todas las anteriores.";
 answers[1] = 0;
 units[1] = ['69'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10698. ";
 preguntaids[1] = 10698


//  Id pregunta: 10394 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[2]= new Array();
 choices[2][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[2][1] = "Investigaci&oacute;n e innovaci&oacute;n";
 choices[2][2] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[2][3] = "Beneficios TIC para la Sociedad UE";
 answers[2] = 2;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 10394. ";
 preguntaids[2] = 10394


//  Id pregunta: 9798 Año de creación de pregunta: 2015
 questions[3]= "4)  Son principios del programa europeo ISA:";
 choices[3]= new Array();
 choices[3][0] = "La privacidad, la apertura y la seguridad.";
 choices[3][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[3][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[3][3] = "Todas las anteriores.";
 answers[3] = 3;
 units[3] = ['43', '19'];
 blocks[3] = ['B1', 'A4'];
 comments[3] = "Id Pregunta: 9798. ";
 preguntaids[3] = 9798


//  Id pregunta: 10966 Año de creación de pregunta: 2015
 questions[4]= "5)  Seg&uacute;n la Orden PRE/2971/2007 sobre la expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la AGE y sus OO.PP dependientes, se&ntilde;ale la verdadera:";
 choices[4]= new Array();
 choices[4][0] = "La factura electr&oacute;nica solo podr&aacute; estar en formato XAdES, ETSI TS 101 903.";
 choices[4][1] = "La factura deber&aacute; estar en formato XAdES (ETSI TS 101 903) o PAdES (ETSI TS 102 778).";
 choices[4][2] = "Se atribuye al Subsecretario del Ministerio de Hacienda y Administraciones P&uacute;blicas, la facultad de modificar el formato de factura y de firma electr&oacute;nica.";
 choices[4][3] = "Ninguna de las anteriores es correcta";
 answers[4] = 0;
 units[4] = ['47'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 10966. ";
 preguntaids[4] = 10966


//  Id pregunta: 1766 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique cu&aacute;l de las siguientes capas NO se corresponde con las definidas en el protocolo WAP:";
 choices[5]= new Array();
 choices[5][0] = "De aplicaci&oacute;n, WAE";
 choices[5][1] = "De presentaci&oacute;n, WPP";
 choices[5][2] = "De seguridad, WTSL";
 choices[5][3] = "De transporte, WDP";
 answers[5] = 1;
 units[5] = ['117'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1766. ";
 preguntaids[5] = 1766


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[6]= "7)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[6]= new Array();
 choices[6][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[6][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[6][2] = "La protecci&oacute;n del medio ambiente.";
 choices[6][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[6] = 0;
 units[6] = ['22'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 498. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[6] = 498


//  Id pregunta: 3369 Año de creación de pregunta: 2006
 questions[7]= "8)  Respecto a la pol&iacute;tica de planificaci&oacute;n de procesos de turno rotatorio o &quot;Round Robin&quot;, es FALSO afirmar que";
 choices[7]= new Array();
 choices[7][0] = "Penaliza a los procesos cortos";
 choices[7][1] = "La penalizaci&oacute;n a los procesos intensivos en E/S puede resolverse con una cola prioritaria para los procesos que salieron de ejecuci&oacute;n por E/S";
 choices[7][2] = "Cada proceso recibe una fracci&oacute;n de tiempo antes de ser expulsado";
 choices[7][3] = "La selecci&oacute;n del siguiente proceso se realiza seg&uacute;n la pol&iacute;tica FCFS (First Come, First Served)";
 answers[7] = 0;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3369. ";
 preguntaids[7] = 3369


//  Id pregunta: 5713 Año de creación de pregunta: 2007
 questions[8]= "9)  &iquest;En cu&aacute;l de las fases de la planificaci&oacute;n de una auditoria inform&aacute;tica pueden surgir ciertos problemas por coincidir las fechas de trabajo del personal de la empresa auditora con otros clientes?";
 choices[8]= new Array();
 choices[8][0] = "fase de planificaci&oacute;n estrat&eacute;gica";
 choices[8][1] = "fase de planificaci&oacute;n administrativa";
 choices[8][2] = "fase de planificaci&oacute;n t&eacute;cnica";
 choices[8][3] = "fase de planificaci&oacute;n operativa";
 answers[8] = 1;
 units[8] = ['36'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 5713. ";
 preguntaids[8] = 5713


//  Id pregunta: 8756 Año de creación de pregunta: 2013
 questions[9]= "10)  &iquest;Cu&aacute;ndo es necesario disponer de un control compensatorio?";
 choices[9]= new Array();
 choices[9][0] = "Cuando no est&eacute; previsto un control.";
 choices[9][1] = "Cuando el coste de un control lo haga inabordable.";
 choices[9][2] = "Cuando el control no est&eacute; efectivamente implantado o falle su aplicaci&oacute;n.";
 choices[9][3] = "Todas las anteriores son ciertas.";
 answers[9] = 3;
 units[9] = ['36'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 8756. ";
 preguntaids[9] = 8756


//  Id pregunta: 7410 Año de creación de pregunta: 2010
 questions[10]= "11)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[10]= new Array();
 choices[10][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[10][1] = "Paravirtualizaci&oacute;n";
 choices[10][2] = "Virtualizaci&oacute;n de datos";
 choices[10][3] = "Virtualizaci&oacute;n de red";
 answers[10] = 2;
 units[10] = ['124'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7410. ";
 preguntaids[10] = 7410


//  Id pregunta: 1792 Año de creación de pregunta: 2016
 questions[11]= "12)  Un ejemplo de servicio de interoperabilidad es el Servicio de Verificaci&oacute;n de Identidad. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[11]= new Array();
 choices[11][0] = "Permite la verificaci&oacute;n de los datos de identidad de un ciudadano sin que &eacute;ste presente la fotocopia del documento de identidad para aportar al expediente.";
 choices[11][1] = "Se puede utilizar siempre que el ciudadano preste su consentimiento para ello.";
 choices[11][2] = "Es una informaci&oacute;n facilitada por la Direcci&oacute;n General de la Polic&iacute;a a trav&eacute;s de la Plataforma de intermediaci&oacute;n de la Administraci&oacute;n General del Estado.";
 choices[11][3] = "Se puede utilizar en cualquier momento de la tramitaci&oacute;n de un expediente administrativo, y por ser utilizado por una administraci&oacute;n p&uacute;blica no requiere consentimiento expreso del ciudadano.";
 answers[11] = 3;
 units[11] = ['43'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 1792. ";
 preguntaids[11] = 1792


//  Id pregunta: 8455 Año de creación de pregunta: 2011
 questions[12]= "13)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[12]= new Array();
 choices[12][0] = "Enveloped";
 choices[12][1] = "Detached";
 choices[12][2] = "Enveloping";
 choices[12][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[12] = 2;
 units[12] = ['76'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8455. ";
 preguntaids[12] = 8455


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[13]= "14)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[13]= new Array();
 choices[13][0] = "Sean dirigidas por mujeres";
 choices[13][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[13][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[13][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[13] = 2;
 units[13] = ['14'];
 blocks[13] = ['A3'];
 comments[13] = "Id Pregunta: 366. Pol&iacute;ticas de igualdad";
 preguntaids[13] = 366


//  Id pregunta: 6617 Año de creación de pregunta: 2009
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[14]= new Array();
 choices[14][0] = "SecureBSD";
 choices[14][1] = "NetBSD";
 choices[14][2] = "DesktopBSD";
 choices[14][3] = "DragonflyBSD";
 answers[14] = 0;
 units[14] = ['66'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6617. ";
 preguntaids[14] = 6617


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[15]= "16)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[15]= new Array();
 choices[15][0] = "Dos.";
 choices[15][1] = "Cuatro.";
 choices[15][2] = "Cinco.";
 choices[15][3] = "Tres.";
 answers[15] = 1;
 units[15] = ['11'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 307. Presupuestos generales";
 preguntaids[15] = 307


//  Id pregunta: 4151 Año de creación de pregunta: 2006
 questions[16]= "17)  En el modelo de ciclo de vida en espiral:";
 choices[16]= new Array();
 choices[16][0] = "La dimensi&oacute;n radial indica los costes y la angular el progreso";
 choices[16][1] = "La dimensi&oacute;n angular indica los costes y la radial el progreso";
 choices[16][2] = "La dimensi&oacute;n lineal indica los costes y la angular el progreso";
 choices[16][3] = "La dimensi&oacute;n radial indica los costes y la angular el riesgo";
 answers[16] = 0;
 units[16] = ['82'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 4151. ";
 preguntaids[16] = 4151


//  Id pregunta: 2248 Año de creación de pregunta: 2002
 questions[17]= "18)  La Uni&oacute;n Internacional de Telecomunicaciones (en ingl&eacute;s ITU) tiene tres sectores principales. &iquest; Cu&aacute;l no es uno de ellos?:";
 choices[17]= new Array();
 choices[17][0] = "Sector de Radiocomunicaciones (ITU-R)";
 choices[17][1] = "Sector de Estandarizaci&oacute;n de Telecomunicaciones (ITU-T)";
 choices[17][2] = "Sector de Desarrollo (ITU-D)";
 choices[17][3] = "Todas son secciones de la Uni&oacute;n Internacional de Comunicaciones";
 answers[17] = 3;
 units[17] = ['48'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2248. ";
 preguntaids[17] = 2248


//  Id pregunta: 963 Año de creación de pregunta: 2016
 questions[18]= "19)  El sector p&uacute;blico institucional se integra por:";
 choices[18]= new Array();
 choices[18][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[18][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[18][2] = "las Universidades p&uacute;blicas";
 choices[18][3] = "todas son correctas";
 answers[18] = 3;
 units[18] = ['4', '7', '8', '9'];
 blocks[18] = ['A1', 'A2'];
 comments[18] = "Id Pregunta: 963. Ley 40/2015";
 preguntaids[18] = 963


//  Id pregunta: 4599 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; ancho de banda tiene un acceso b&aacute;sico de RDSI en Europa?:";
 choices[19]= new Array();
 choices[19][0] = "64 kbps";
 choices[19][1] = "144 kbps";
 choices[19][2] = "128 kbps";
 choices[19][3] = "2048 kbps";
 answers[19] = 1;
 units[19] = ['114'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4599. ";
 preguntaids[19] = 4599


//  Id pregunta: 7299 Año de creación de pregunta: 2010
 questions[20]= "21)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[20]= new Array();
 choices[20][0] = "En todos los datos personales";
 choices[20][1] = "En los datos personales a los que aplican las medidas de seguridad de nivel b&aacute;sico";
 choices[20][2] = "En los datos personales a los que aplican las medidas de seguridad de nivel medio";
 choices[20][3] = "En los datos personales a los que aplican las medidas de seguridad de nivel alto";
 answers[20] = 3;
 units[20] = ['79'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7299. ";
 preguntaids[20] = 7299


//  Id pregunta: 971 Año de creación de pregunta: 2016
 questions[21]= "22)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[21]= new Array();
 choices[21][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[21][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[21][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[21][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[21] = 2;
 units[21] = ['4', '7', '8', '9'];
 blocks[21] = ['A1', 'A2'];
 comments[21] = "Id Pregunta: 971. Ley 40/2015";
 preguntaids[21] = 971


//  Id pregunta: 1704 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale c&oacute;mo se denominan Las pruebas que tienen por objeto comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n NO introduce un comportamiento no deseado o err&oacute;neo adicional en otros componentes no modificados:";
 choices[22]= new Array();
 choices[22][0] = "De operaci&oacute;n.";
 choices[22][1] = "De entorno.";
 choices[22][2] = "De regresi&oacute;n.";
 choices[22][3] = "De disponibilidad de datos.";
 answers[22] = 2;
 units[22] = ['92'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1704. ";
 preguntaids[22] = 1704


//  Id pregunta: 3475 Año de creación de pregunta: 2006
 questions[23]= "24)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[23]= new Array();
 choices[23][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros.";
 choices[23][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[23][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[23][3] = "Todas son ciertas";
 answers[23] = 3;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 3475. Ley 34/2002, art&iacute;culo 39";
 preguntaids[23] = 3475


//  Id pregunta: 1305 Año de creación de pregunta: 2016
 questions[24]= "25)  En el sistema operativo Linux, &iquest;Cu&aacute;l de las siguientes opciones busca la palabra &quot;Iibro&quot; dentro de ficheros?";
 choices[24]= new Array();
 choices[24][0] = "find -type f I xwygs grep &quot;libro&quot;";
 choices[24][1] = "find -type f I xaygs grep &quot;libro&quot;";
 choices[24][2] = "find -type f I xargs grep &quot;libro&quot;";
 choices[24][3] = "find -type f I xargp grep &quot;libro&quot;";
 answers[24] = 2;
 units[24] = ['57'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1305. ";
 preguntaids[24] = 1305


//  Id pregunta: 9714 Año de creación de pregunta: 2014
 questions[25]= "26)  En el &aacute;mbito de las redes e internet, &iquest;qu&eacute; significan las siglas TOR?";
 choices[25]= new Array();
 choices[25][0] = "The Outer Router";
 choices[25][1] = "The Ominous Router";
 choices[25][2] = "The Onion Router";
 choices[25][3] = "Ninguna es correcta";
 answers[25] = 2;
 units[25] = ['103'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9714. http://es.wikipedia.org/wiki/Tor";
 preguntaids[25] = 9714


//  Id pregunta: 4087 Año de creación de pregunta: 2003
 questions[26]= "27)  En el modelo Entidad Relaci&oacute;n, &iquest; qu&eacute; es una entidad regular?";
 choices[26]= new Array();
 choices[26][0] = "Es aquella que tiene existencia por si misma, no depende de ninguna otra entidad.";
 choices[26][1] = "Es aquella que su existencia depende de otra entidad del modelo y sin la otra entidad no tiene sentido &eacute;sta.";
 choices[26][2] = "Una entidad en la que el n&uacute;mero m&aacute;ximo de ocurrencias que pueden estar asociadas a ella con una ocurrencia de otra u otras entidades participantes es 1.";
 choices[26][3] = "Una entidad que tiene atributos derivados.";
 answers[26] = 0;
 units[26] = ['85'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4087. ";
 preguntaids[26] = 4087


//  Id pregunta: 2321 Año de creación de pregunta: 2002
 questions[27]= "28)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[27]= new Array();
 choices[27][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[27][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[27][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[27][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[27] = 0;
 units[27] = ['43'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2321. ";
 preguntaids[27] = 2321


//  Id pregunta: 1570 Año de creación de pregunta: 2016
 questions[28]= "29)  A los efectos de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, se&ntilde;ale cu&aacute;l NO es un servicio de la sociedad de la informaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos o de mercados y centros comerciales virtuales.";
 choices[28][1] = "El teletexto televisivo y otros servicios equivalentes como las gu&iacute;as electr&oacute;nicas de programas ofrecidas a trav&eacute;s de las plataformas televisivas.";
 choices[28][2] = "El v&iacute;deo bajo demanda, como servicio en que el usuario puede seleccionar a trav&eacute;s de la red, tanto el programa deseado como el momento de su suministro y recepci&oacute;n.";
 choices[28][3] = "El suministro de informaci&oacute;n por v&iacute;a telem&aacute;tica.";
 answers[28] = 1;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 1570. ";
 preguntaids[28] = 1570


//  Id pregunta: 10487 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de plugin de Liferay?";
 choices[29]= new Array();
 choices[29][0] = "Tema";
 choices[29][1] = "Portlet";
 choices[29][2] = "Ruta";
 choices[29][3] = "Hook";
 answers[29] = 2;
 units[29] = ['99'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 10487. ";
 preguntaids[29] = 10487


//  Id pregunta: 8981 Año de creación de pregunta: 2013
 questions[30]= "31)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[30]= new Array();
 choices[30][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[30][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[30][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[30][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[30] = 3;
 units[30] = ['19'];
 blocks[30] = ['A4'];
 comments[30] = "Id Pregunta: 8981. Ley 59/2003, art&iacute;culo 23";
 preguntaids[30] = 8981


//  Id pregunta: 6423 Año de creación de pregunta: 2003
 questions[31]= "32)  Indique cu&aacute;l es una caracter&iacute;stica t&eacute;cnica de W-CDMA, utilizada en UMTS:";
 choices[31]= new Array();
 choices[31][0] = "Emplea radiocanales de 50MHz de ancho de banda";
 choices[31][1] = "Permite transmisiones multic&oacute;digo";
 choices[31][2] = "No admite duplexaci&oacute;n por divisi&oacute;n en frecuencia (FDD)";
 choices[31][3] = "No admite duplexaci&oacute;n por divisi&oacute;n en el tiempo (TDD)";
 answers[31] = 1;
 units[31] = ['117'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6423. ";
 preguntaids[31] = 6423


//  Id pregunta: 3214 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Cu&aacute;l de estos procesadores de 64 bits usa la t&eacute;cnica EPIC (&quot;Explicity Parallel Instruction Computing&quot;)?:";
 choices[32]= new Array();
 choices[32][0] = "PowerPC.";
 choices[32][1] = "Alpha.";
 choices[32][2] = "Ultrasparc.";
 choices[32][3] = "Itanium.";
 answers[32] = 3;
 units[32] = ['52'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3214. Junta Andaluc&iacute;a";
 preguntaids[32] = 3214


//  Id pregunta: 3226 Año de creación de pregunta: 2003
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; al margen de la teor&iacute;a de la conmutaci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "Obtener los circuitos l&oacute;gicos que representan a las diferentes funciones booleanas.";
 choices[33][1] = "Obtener el circuito de coste m&iacute;nimo.";
 choices[33][2] = "Obtener en un tiempo aceptable un circuito que reproduzca la funci&oacute;n booleana adecuada.";
 choices[33][3] = "Dise&ntilde;ar los circuitos que permitan la transmisi&oacute;n de los datos hasta un receptor situado a una cierta distancia.";
 answers[33] = 3;
 units[33] = ['52'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3226. Junta Andaluc&iacute;a";
 preguntaids[33] = 3226


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[34]= new Array();
 choices[34][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[34][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[34][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[34][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[34] = 2;
 units[34] = ['22'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 502. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[34] = 502


//  Id pregunta: 9455 Año de creación de pregunta: 2014
 questions[35]= "36)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[35][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[35][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[35][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[35] = 1;
 units[35] = ['7'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 9455. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[35] = 9455


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[36]= new Array();
 choices[36][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[36][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[36][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[36][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[36] = 1;
 units[36] = ['43'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 591. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[36] = 591


//  Id pregunta: 3505 Año de creación de pregunta: 2006
 questions[37]= "38)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[37]= new Array();
 choices[37][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro";
 choices[37][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash)";
 choices[37][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas";
 choices[37][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo";
 answers[37] = 2;
 units[37] = ['77'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3505. ";
 preguntaids[37] = 3505


//  Id pregunta: 10005 Año de creación de pregunta: 2015
 questions[38]= "39)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[38]= new Array();
 choices[38][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[38][1] = "Cuando haya recibido al menos dos ACK.";
 choices[38][2] = "Cuando reciba cualquier ACK.";
 choices[38][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[38] = 2;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10005. Examen TIC A2 2014";
 preguntaids[38] = 10005


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[39]= "40)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Unidad de igualdad.";
 choices[39][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[39][2] = "Ninguna de las anteriores.";
 choices[39][3] = "A y B son correctas.";
 answers[39] = 1;
 units[39] = ['14'];
 blocks[39] = ['A3'];
 comments[39] = "Id Pregunta: 413. Pol&iacute;ticas de igualdad";
 preguntaids[39] = 413


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[40]= "41)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[40][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[40][2] = "Ambas son correctas.";
 choices[40][3] = "La A y B son incorrectas.";
 answers[40] = 2;
 units[40] = ['14'];
 blocks[40] = ['A3'];
 comments[40] = "Id Pregunta: 397. Pol&iacute;ticas de igualdad";
 preguntaids[40] = 397


//  Id pregunta: 1737 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique cu&aacute;l de las siguientes NO es una herramienta que permita evaluar el rendimiento de aplicaciones web:";
 choices[41]= new Array();
 choices[41][0] = "awstats";
 choices[41][1] = "siege";
 choices[41][2] = "loadRunner";
 choices[41][3] = "Jmeter";
 answers[41] = 0;
 units[41] = ['87'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 1737. ";
 preguntaids[41] = 1737


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[42]= "43)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[42]= new Array();
 choices[42][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[42][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[42][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[42][3] = "todas son correctas";
 answers[42] = 3;
 units[42] = ['7'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 248. Ley 39/2015";
 preguntaids[42] = 248


//  Id pregunta: 4095 Año de creación de pregunta: 2003
 questions[43]= "44)  Los objetivos a conseguir en cuanto a cohesi&oacute;n y acoplamiento en el Dise&ntilde;o Estructurado son:";
 choices[43]= new Array();
 choices[43][0] = "M&aacute;xima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 choices[43][1] = "M&iacute;nima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[43][2] = "M&aacute;xima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[43][3] = "M&iacute;nima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 answers[43] = 0;
 units[43] = ['89'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 4095. ";
 preguntaids[43] = 4095


//  Id pregunta: 3837 Año de creación de pregunta: 2002
 questions[44]= "45)  En una planificaci&oacute;n de un proyecto, una situaci&oacute;n que se da normalmente es que:";
 choices[44]= new Array();
 choices[44][0] = "Al inicio del proyecto se consuman m&aacute;s recursos que al final";
 choices[44][1] = "Al principio los recursos precisos van creciendo y al final decreciendo";
 choices[44][2] = "Al final del proyecto se consumen m&aacute;s recursos que en toda su vida anterior";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = 1;
 units[44] = ['83'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3837. ";
 preguntaids[44] = 3837


//  Id pregunta: 5720 Año de creación de pregunta: 2007
 questions[45]= "46)  Indique cu&aacute;l de los siguientes no es un lenguaje relacional:";
 choices[45]= new Array();
 choices[45][0] = "RQL";
 choices[45][1] = "QUEL";
 choices[45][2] = "QBE";
 choices[45][3] = "SQL";
 answers[45] = 0;
 units[45] = ['61'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 5720. ";
 preguntaids[45] = 5720


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[46]= "47)  En 2007, antes de la crisis, la clasificaci&oacute;n de la solvencia espa&ntilde;ola por las agencias de rating era:";
 choices[46]= new Array();
 choices[46][0] = "AA";
 choices[46][1] = "A";
 choices[46][2] = "AAA";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = 2;
 units[46] = ['12'];
 blocks[46] = ['A3'];
 comments[46] = "Id Pregunta: 348. Modelo econ&oacute;mico";
 preguntaids[46] = 348


//  Id pregunta: 4382 Año de creación de pregunta: 2004
 questions[47]= "48)  Entre los ataques de seguridad que se producen a trav&eacute;s de redes como internet, aparece el concepto de Phishing. &iquest;Cu&aacute;l de las siguientes definiciones se ajustan a este concepto?";
 choices[47]= new Array();
 choices[47][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[47][1] = "Suplantaci&oacute;n de identidades de organizaciones para conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[47][2] = "Escuchas en red con el fin de conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = 1;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4382. ";
 preguntaids[47] = 4382


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[48]= "49)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[48]= new Array();
 choices[48][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[48][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[48][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[48][3] = "Todos las anteriores son ciertas.";
 answers[48] = 3;
 units[48] = ['12'];
 blocks[48] = ['A3'];
 comments[48] = "Id Pregunta: 335. Modelo econ&oacute;mico";
 preguntaids[48] = 335


//  Id pregunta: 6881 Año de creación de pregunta: 2010
 questions[49]= "50)  La planificaci&oacute;n de las redes radioel&eacute;ctricas:";
 choices[49]= new Array();
 choices[49][0] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n a la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[49][1] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n al Ayuntamiento correspondiente.";
 choices[49][2] = "La realiza la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de no causar interferencias entre diferentes servicios.";
 choices[49][3] = "Se realiza en comisi&oacute;n paritaria entre el operador y la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de evitar interferencias entre diferentes servicios.";
 answers[49] = 0;
 units[49] = ['121'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6881. TIC A 2009";
 preguntaids[49] = 6881


//  Id pregunta: 10759 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;De qu&eacute; tama&ntilde;o es el campo de comprobaci&oacute;n de erorres en la tecnolog&iacute;a Ethernet?";
 choices[50]= new Array();
 choices[50][0] = "16";
 choices[50][1] = "32";
 choices[50][2] = "64";
 choices[50][3] = "48";
 answers[50] = 1;
 units[50] = ['112'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 10759. ";
 preguntaids[50] = 10759


//  Id pregunta: 5434 Año de creación de pregunta: 2007
 questions[51]= "52)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[51]= new Array();
 choices[51][0] = "RSA";
 choices[51][1] = "RW";
 choices[51][2] = "Diffie-Hellman";
 choices[51][3] = "DSAE";
 answers[51] = 3;
 units[51] = ['73'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 5434. ";
 preguntaids[51] = 5434


//  Id pregunta: 6276 Año de creación de pregunta: 2003
 questions[52]= "53)  El Marco Europeo de Interoperabilidad 2.0 se construye sobre la base de 12 principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[52]= new Array();
 choices[52][0] = "Multiling&uuml;ismo";
 choices[52][1] = "Seguridad y privacidad";
 choices[52][2] = "Subsidiariedad y proporcionalidad";
 choices[52][3] = "Cooperaci&oacute;n intergubernamental";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 6276. ";
 preguntaids[52] = 6276


//  Id pregunta: 9035 Año de creación de pregunta: 2014
 questions[53]= "54)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[53]= new Array();
 choices[53][0] = "Jurados de concursos";
 choices[53][1] = "Mesas de contrataci&oacute;n";
 choices[53][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[53][3] = "Ninguno de los anteriores";
 answers[53] = 2;
 units[53] = ['10'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 9035. Art. 320, Art. 323 RD Legislativo 3/2011";
 preguntaids[53] = 9035


//  Id pregunta: 5366 Año de creación de pregunta: 2006
 questions[54]= "55)  Con el termino &quot;ventana de backup&quot; se define";
 choices[54]= new Array();
 choices[54][0] = "El espacio m&aacute;ximo disponible para un posible backup, dependiente de la capacidad de las cintas utilizadas";
 choices[54][1] = "La m&aacute;xima velocidad de transferencia de la cinta, que determina la duraci&oacute;n del mismo.";
 choices[54][2] = "El ancho de banda de la red de backup, que determina la duraci&oacute;n del mismo.";
 choices[54][3] = "El periodo de inactividad del sistema, que define el tiempo m&aacute;ximo disponible para realizar el backup.";
 answers[54] = 3;
 units[54] = ['45'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 5366. ";
 preguntaids[54] = 5366


//  Id pregunta: 8645 Año de creación de pregunta: 2013
 questions[55]= "56)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[55]= new Array();
 choices[55][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[55][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[55][2] = "toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[55][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[55] = 2;
 units[55] = ['41'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 8645. ";
 preguntaids[55] = 8645


//  Id pregunta: 9453 Año de creación de pregunta: 2014
 questions[56]= "57)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[56]= new Array();
 choices[56][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[56][1] = "La no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[56][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[56][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[56] = 1;
 units[56] = ['19'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 9453. A: grave; B: muy grave; C: grave; D: grave";
 preguntaids[56] = 9453


//  Id pregunta: 8144 Año de creación de pregunta: 2011
 questions[57]= "58)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[57]= new Array();
 choices[57][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[57][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[57][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[57][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[57] = 0;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 8144. Examen TIC A2 2010 interna";
 preguntaids[57] = 8144


//  Id pregunta: 5373 Año de creación de pregunta: 2006
 questions[58]= "59)  Para listar las conexiones TCP/UDP abiertas en un servidor utilizo el comando";
 choices[58]= new Array();
 choices[58][0] = "ping";
 choices[58][1] = "netstat";
 choices[58][2] = "tracert o traceroute";
 choices[58][3] = "ipconfig / ifconfig";
 answers[58] = 1;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 5373. ";
 preguntaids[58] = 5373


//  Id pregunta: 3798 Año de creación de pregunta: 2002
 questions[59]= "60)  El objetivo del modelo conceptual es:";
 choices[59]= new Array();
 choices[59][0] = "Establecer una visi&oacute;n global de los datos";
 choices[59][1] = "Establecer el detalle de las propiedades";
 choices[59][2] = "Definir las propiedades de cada entidad";
 choices[59][3] = "Definir el flujo de informaci&oacute;n";
 answers[59] = 0;
 units[59] = ['85'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3798. ";
 preguntaids[59] = 3798


//  Id pregunta: 1289 Año de creación de pregunta: 2016
 questions[60]= "61)  EI certificado de sede electr&oacute;nica, seg&uacute;n se establece en el Real Decreto 1671/2009:";
 choices[60]= new Array();
 choices[60][0] = "Identifica la sede y permite la firma electr&oacute;nica de documentos y tramites.";
 choices[60][1] = "Identifica la sede y permite a firma electr&oacute;nica de documentos.";
 choices[60][2] = "Identifica la sede, quedando excluida su aplicaci&oacute;n para la firma electr&oacute;nica de documentos y tramites,";
 choices[60][3] = "Identifica la sede y permite la firma electr&oacute;nica de tr&aacute;mites.";
 answers[60] = 2;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 1289. ";
 preguntaids[60] = 1289


//  Id pregunta: 2123 Año de creación de pregunta: 2002
 questions[61]= "62)  En el &aacute;rea de los sistemas de informaci&oacute;n, &iquest;cu&aacute;l es el significado de las siglas MIS?:";
 choices[61]= new Array();
 choices[61][0] = "Manufacturing In Sequence";
 choices[61][1] = "Manufacturing Information System";
 choices[61][2] = "Management Information System";
 choices[61][3] = "Modelling Input System";
 answers[61] = 2;
 units[61] = ['24'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2123. ";
 preguntaids[61] = 2123


//  Id pregunta: 6523 Año de creación de pregunta: 2003
 questions[62]= "63)  Una soluci&oacute;n basada en Grid Computing ser&iacute;a adecuada para:";
 choices[62]= new Array();
 choices[62][0] = "Obtener rendimientos de pico";
 choices[62][1] = "Aplicaciones multiproceso";
 choices[62][2] = "Entornos de trabajo con productividad sostenida";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 2;
 units[62] = ['49'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 6523. ";
 preguntaids[62] = 6523


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[63]= "64)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[63]= new Array();
 choices[63][0] = "Son actos individuales no normativos.";
 choices[63][1] = "Poseen alcance general.";
 choices[63][2] = "Son actos normativos.";
 choices[63][3] = "No son obligatorias.";
 answers[63] = 0;
 units[63] = ['5'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 191. Uni&oacute;n Europea";
 preguntaids[63] = 191


//  Id pregunta: 4942 Año de creación de pregunta: 2002
 questions[64]= "65)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[64]= new Array();
 choices[64][0] = "ET1";
 choices[64][1] = "ET2";
 choices[64][2] = "TR2";
 choices[64][3] = "AT";
 answers[64] = 2;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4942. ";
 preguntaids[64] = 4942


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[65]= "66)  Los Reglamentos no se caracterizan por:";
 choices[65]= new Array();
 choices[65][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[65][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[65][2] = "Ser obligatorios.";
 choices[65][3] = "No poseer alcance general.";
 answers[65] = 3;
 units[65] = ['5'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 178. Uni&oacute;n Europea";
 preguntaids[65] = 178


//  Id pregunta: 6082 Año de creación de pregunta: 2003
 questions[66]= "67)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en lanorma del ETSI:";
 choices[66]= new Array();
 choices[66][0] = "ET 301-192";
 choices[66][1] = "ET 202-125";
 choices[66][2] = "ET 125-100";
 choices[66][3] = "ET 100-200";
 answers[66] = 0;
 units[66] = ['107', '108'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 6082. Examen TIC A1 MAP 2007";
 preguntaids[66] = 6082


//  Id pregunta: 3735 Año de creación de pregunta: 2002
 questions[67]= "68)  A las herramientas CASE que abarcan las &uacute;ltimas fases del ciclo de vida (dise&ntilde;o detallado y generaci&oacute;n de c&oacute;digo) se las denomina:";
 choices[67]= new Array();
 choices[67][0] = "Superiores (upper CASE).";
 choices[67][1] = "Inferiores (lower CASE).";
 choices[67][2] = "Las 2 anteriores son correctas.";
 choices[67][3] = "Todas son falsas.";
 answers[67] = 1;
 units[67] = ['97'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3735. ";
 preguntaids[67] = 3735


//  Id pregunta: 6092 Año de creación de pregunta: 2003
 questions[68]= "69)  ATM (&quot;Asynchronous Transfer Mode&quot;) emplea celdas:";
 choices[68]= new Array();
 choices[68][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n";
 choices[68][1] = "De tama&ntilde;o fijo : 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n";
 choices[68][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n";
 choices[68][3] = "De tama&ntilde;o variable : 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n";
 answers[68] = 1;
 units[68] = ['107'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6092. Examen TIC A1 MAP 2007";
 preguntaids[68] = 6092


//  Id pregunta: 7205 Año de creación de pregunta: 2010
 questions[69]= "70)  Respecto al direccionamiento en el protocolo TCP, se puede afirmar que:";
 choices[69]= new Array();
 choices[69][0] = "La cabecera TCP incluye las direcciones IP origen y destino";
 choices[69][1] = "La cabecera TCP incluye las direcciones origen y destino y los puertos TCP origen y destino";
 choices[69][2] = "La cabecera TPC incluye los puertos TCP origen y destino";
 choices[69][3] = "La cabecera TCP no incluye ning&uacute;n elemento asociado al direccionamiento de las conexiones del nivel de transporte";
 answers[69] = 2;
 units[69] = ['109'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7205. Castilla La Mancha 2009";
 preguntaids[69] = 7205


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[70]= "71)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[70]= new Array();
 choices[70][0] = "Son vinculantes solamente.";
 choices[70][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[70][2] = "Son preceptivos y vinculantes.";
 choices[70][3] = "Son preceptivos y no vinculantes.";
 answers[70] = 1;
 units[70] = ['5'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 175. Uni&oacute;n Europea";
 preguntaids[70] = 175


//  Id pregunta: 5398 Año de creación de pregunta: 2006
 questions[71]= "72)  El entorno Microsoft, WebDAV";
 choices[71]= new Array();
 choices[71][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[71][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[71][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[71][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[71] = 1;
 units[71] = ['63'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 5398. ";
 preguntaids[71] = 5398


//  Id pregunta: 1461 Año de creación de pregunta: 2016
 questions[72]= "73)  Sin perjuicio de los requisitos que en materia de informaci&oacute;n se establezcan en la materia vigente, el prestador de servicios de la sociedad de la informaci&oacute;n ofrecer&aacute; de manera permanente, f&aacute;cil, directa y gratuita, una serie de informaci&oacute;n. &iquest;Cu&aacute;l NO est&aacute; incluido en esta obligaci&oacute;n, seg&uacute;n la Ley 34/2002, de 11 de julio?";
 choices[72]= new Array();
 choices[72][0] = "Nombre o denominaci&oacute;n social.";
 choices[72][1] = "Si la profesi&oacute;n est&aacute; regulada, los datos del Colegio Profesional al que pertenece.";
 choices[72][2] = "Los c&oacute;digos de conducta a los que, en su caso, est&eacute; adherido.";
 choices[72][3] = "Un n&uacute;mero de tel&eacute;fono donde poder establecer una comunicaci&oacute;n directa con el prestador.";
 answers[72] = 3;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 1461. ";
 preguntaids[72] = 1461


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[73]= new Array();
 choices[73][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[73][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[73][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[73][3] = "todas son correctas";
 answers[73] = 3;
 units[73] = ['7'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 239. Ley 39/2015";
 preguntaids[73] = 239


//  Id pregunta: 5254 Año de creación de pregunta: 2006
 questions[74]= "75)  Que tipo de LAN instalarias en un edificio nuevo";
 choices[74]= new Array();
 choices[74][0] = "Usaria cables porque son m&aacute;s seguros y fiables";
 choices[74][1] = "Usaria Wi-Max porque es una tecnologia que me evita tener que instalar cables";
 choices[74][2] = "Usaria Wi-Fi porque me da la misma funcionalidad que los cables pero con una instalaci&oacute;n m&aacute;s r&aacute;pida";
 choices[74][3] = "Cualquiera de las anteriores es valida";
 answers[74] = 0;
 units[74] = ['103'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5254. ";
 preguntaids[74] = 5254


