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
//  Id pregunta: 2747 Año de creación de pregunta: 2002
 questions[0]= "1)  El concepto de trabajo en grupo o groupware se construy&oacute; alrededor de:";
 choices[0]= new Array();
 choices[0][0] = "Los productos de correo electr&oacute;nico";
 choices[0][1] = "Los procesadores de texto";
 choices[0][2] = "Las redes locales de &aacute;mbito de oficina";
 choices[0][3] = "Las hojas de c&aacute;lculo";
 answers[0] = 0;
 units[0] = ['72'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2747. ";
 preguntaids[0] = 2747


//  Id pregunta: 3439 Año de creación de pregunta: 2006
 questions[1]= "2)  Las herramientas para la elaboraci&oacute;n de informes y listados, tanto en detalle como sobre informaci&oacute;n agregada, a partir de la informaci&oacute;n de los Datawarehouse y datamarts se conocen como herramientas de:";
 choices[1]= new Array();
 choices[1][0] = "OLAP.";
 choices[1][1] = "Query &amp; reporting.";
 choices[1][2] = "Cuadro de mando anal&iacute;tico.";
 choices[1][3] = "Datamining.";
 answers[1] = 1;
 units[1] = ['72'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3439. ";
 preguntaids[1] = 3439


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la definici&oacute;n de B. Inmon, &iquest;qu&eacute; caracter&iacute;stica de las siguientes NO es correcta para un Data Warehouse?";
 choices[2]= new Array();
 choices[2][0] = "Integrado.";
 choices[2][1] = "Hist&oacute;rico.";
 choices[2][2] = "Vol&aacute;til.";
 choices[2][3] = "Tem&aacute;tico.";
 answers[2] = 2;
 units[2] = ['72'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 731. AGE A2 2015";
 preguntaids[2] = 731


//  Id pregunta: 3111 Año de creación de pregunta: 2002
 questions[3]= "4)  Uno de los siguientes grupos de componentes no pertenece al conjunto de componentes s&iacute;ncronos de groupware. Indicar cu&aacute;l:";
 choices[3]= new Array();
 choices[3][0] = "video, audio, editor texto";
 choices[3][1] = "gestor de tr&aacute;fico, control de estado, punteros";
 choices[3][2] = "bases de datos de objetos, motores workflow, notas post-it";
 choices[3][3] = "compartidor de aplicaciones, chat, pizarras";
 answers[3] = 2;
 units[3] = ['72'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3111. ";
 preguntaids[3] = 3111


//  Id pregunta: 3233 Año de creación de pregunta: 2003
 questions[4]= "5)  &iquest;Cu&aacute;l no es un modelo de extracci&oacute;n de datos en miner&iacute;a de datos?";
 choices[4]= new Array();
 choices[4][0] = "De verificaci&oacute;n.";
 choices[4][1] = "De descubrimiento.";
 choices[4][2] = "Jer&aacute;rquico.";
 choices[4][3] = "Predictivo.";
 answers[4] = 2;
 units[4] = ['72'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3233. ";
 preguntaids[4] = 3233


//  Id pregunta: 3037 Año de creación de pregunta: 2009
 questions[5]= "6)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[5]= new Array();
 choices[5][0] = "Actualizaci&oacute;n.";
 choices[5][1] = "Agregaci&oacute;n.";
 choices[5][2] = "Dril-down.";
 choices[5][3] = "Slice-Dice.";
 answers[5] = 0;
 units[5] = ['72', '73'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3037. ";
 preguntaids[5] = 3037


//  Id pregunta: 3263 Año de creación de pregunta: 2003
 questions[6]= "7)  En un sistema de workflow no es una funci&oacute;n b&aacute;sica:";
 choices[6]= new Array();
 choices[6][0] = "Monitorizaci&oacute;n y control";
 choices[6][1] = "Gesti&oacute;n de procedimientos";
 choices[6][2] = "Interoperabilidad entre aplicaciones";
 choices[6][3] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 answers[6] = 2;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3263. ";
 preguntaids[6] = 3263


//  Id pregunta: 3231 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;Cu&aacute;l no es una caracter&iacute;stica esencial del Datawarehouse?";
 choices[7]= new Array();
 choices[7][0] = "Orientado por temas";
 choices[7][1] = "Independiente del tiempo";
 choices[7][2] = "No vol&aacute;til";
 choices[7][3] = "Integrado";
 answers[7] = 1;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3231. ";
 preguntaids[7] = 3231


//  Id pregunta: 3431 Año de creación de pregunta: 2006
 questions[8]= "9)  &iquest;Qu&eacute; utilidad puede tener el Data Mining?";
 choices[8]= new Array();
 choices[8][0] = "Predecir valores futuros en base a los datos actuales.";
 choices[8][1] = "Descubrimiento de fraude.";
 choices[8][2] = "Descubrimiento de patrones en los datos.";
 choices[8][3] = "Todas las anteriores.";
 answers[8] = 3;
 units[8] = ['72'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3431. ";
 preguntaids[8] = 3431


//  Id pregunta: 2750 Año de creación de pregunta: 2002
 questions[9]= "10)  El data warehousing consiste b&aacute;sicamente en:";
 choices[9]= new Array();
 choices[9][0] = "En realizar un BPR (Business Processing Re-engineering) mediante el an&aacute;lisis automatizado de los datos corporativos.";
 choices[9][1] = "En automatizar los procesos de almacenamiento de datos de toda la corporaci&oacute;n. El sistema se encarga de situar los datos, de manera transparente, en los medios f&iacute;sicos m&aacute;s adecuados (discos, cintas, etc&eacute;tera) y de gestionar las copias de salvaguarda.";
 choices[9][2] = "En generar din&aacute;mica y autom&aacute;ticamente, a partir de datos extra&iacute;dos de todas las B.D. operacionales del sistema, otra base de datos donde se va almacenando informaci&oacute;n integrada, resumida, consolidada, multidimensional y significativa.";
 choices[9][3] = "En independizar los datos de la corporaci&oacute;n de su localizaci&oacute;n f&iacute;sica, creando un sistema de informaci&oacute;n virtual que integra todos los datos de la corporaci&oacute;n, incluso si est&aacute;n repartidos en diferentes sedes.";
 answers[9] = 2;
 units[9] = ['72'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2750. ";
 preguntaids[9] = 2750


//  Id pregunta: 1488 Año de creación de pregunta: 2016
 questions[10]= "11)  El algoritmo de miner&iacute;a de datos es el mecanismo que crea un modelo de miner&iacute;a de datos. Para crear un modelo, un algoritmo analiza primero un conjunto de datos y luego busca patrones y tendencias espec&iacute;fico. &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de miner&iacute;a de datos?";
 choices[10]= new Array();
 choices[10][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[10][1] = "Algoritmos de regresi&oacute;n.";
 choices[10][2] = "Algoritmos de segmentaci&oacute;n.";
 choices[10][3] = "Algoritmos de predestinaci&oacute;n.";
 answers[10] = 3;
 units[10] = ['72'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1488. ";
 preguntaids[10] = 1488


//  Id pregunta: 3432 Año de creación de pregunta: 2006
 questions[11]= "12)  &iquest;Para qu&eacute; se utiliza  principalmente el algoritmo k-means?";
 choices[11]= new Array();
 choices[11][0] = "Clustering.";
 choices[11][1] = "Categorizaci&oacute;n.";
 choices[11][2] = "Predicci&oacute;n.";
 choices[11][3] = "Detecci&oacute;n de fraude.";
 answers[11] = 0;
 units[11] = ['72'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3432. ";
 preguntaids[11] = 3432


//  Id pregunta: 3451 Año de creación de pregunta: 2006
 questions[12]= "13)  Se&ntilde;ale la falsa:";
 choices[12]= new Array();
 choices[12][0] = "Bonita es un motor de workflow de sw libre que implementa las especificaciones de la WfMC.";
 choices[12][1] = "Evolution es un cliente para correo electr&oacute;nico y workgroup para sistemas Linux.";
 choices[12][2] = "JoNAS es un servidor de aplicaciones de SW libre";
 choices[12][3] = "Todas son ciertas";
 answers[12] = 3;
 units[12] = ['72'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3451. ";
 preguntaids[12] = 3451


//  Id pregunta: 2694 Año de creación de pregunta: 2002
 questions[13]= "14)  Bill Inmon, padre del Data Warehousing, define &eacute;ste como:";
 choices[13]= new Array();
 choices[13][0] = "Una colecci&oacute;n de datos orientada a materias, integrada, no vol&aacute;til y variante en el tiempo, destinada a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[13][1] = "Un sistema autom&aacute;tico de ayuda a la decisi&oacute;n que implanta la teor&iacute;a de la decisi&oacute;n multicriterio discreta.";
 choices[13][2] = "Una secuencia convergente de refinamientos sobre un conjunto diverso de soluciones a un problema de gesti&oacute;n.";
 choices[13][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[13] = 0;
 units[13] = ['72'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2694. ";
 preguntaids[13] = 2694


//  Id pregunta: 3434 Año de creación de pregunta: 2006
 questions[14]= "15)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[14]= new Array();
 choices[14][0] = "Data sparsity.";
 choices[14][1] = "Data cleansing.";
 choices[14][2] = "Data mining.";
 choices[14][3] = "Data explosion.";
 answers[14] = 0;
 units[14] = ['72'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3434. ";
 preguntaids[14] = 3434


//  Id pregunta: 1355 Año de creación de pregunta: 2016
 questions[15]= "16)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;a qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[15]= new Array();
 choices[15][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[15][1] = "Algoritmos de regresi&oacute;n.";
 choices[15][2] = "Algoritmos de segmentaci&oacute;n.";
 choices[15][3] = "Algoritmos de asociaci&oacute;n.";
 answers[15] = 0;
 units[15] = ['72'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1355. ";
 preguntaids[15] = 1355


//  Id pregunta: 3438 Año de creación de pregunta: 2006
 questions[16]= "17)  Las especializaciones de los sistemas de Datawarehouse orientadas a departamentos o &aacute;reas de negocio concretas se denominan:";
 choices[16]= new Array();
 choices[16][0] = "Data Marts.";
 choices[16][1] = "Data Cleansing.";
 choices[16][2] = "Data Mining.";
 choices[16][3] = "Metadata.";
 answers[16] = 0;
 units[16] = ['72'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3438. ";
 preguntaids[16] = 3438


//  Id pregunta: 3094 Año de creación de pregunta: 2002
 questions[17]= "18)  Una base de datos multidimensional:";
 choices[17]= new Array();
 choices[17][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[17][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[17][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[17][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[17] = 1;
 units[17] = ['72', '73'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3094. ";
 preguntaids[17] = 3094


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[18]= "19)  En relaci&oacute;n al dise&ntilde;o de un Data Warehouse (DW), se&ntilde;ale Ia respuesta incorecta:";
 choices[18]= new Array();
 choices[18][0] = "Slicing: selecciona una dimensi&oacute;n en particular de un cubo determinado, cuyo resultado es un nuevo 'sub-cubo'.";
 choices[18][1] = "Rolling up: permite subir de nivel en la jerarquia, es lo contrario al drilling-down.";
 choices[18][2] = "Drilling down: es la navegaci&oacute;n que permite ir de los datos resumidos a los datos detallados.";
 choices[18][3] = "Drilling across: permite cambiar la vista a otra jerarqu&iacute;a de diferente nivel.";
 answers[18] = 3;
 units[18] = ['72'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 732. AGE A2 2015";
 preguntaids[18] = 732


//  Id pregunta: 3343 Año de creación de pregunta: 2004
 questions[19]= "20)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[19]= new Array();
 choices[19][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[19][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[19][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[19][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[19] = 1;
 units[19] = ['72'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3343. ";
 preguntaids[19] = 3343


//  Id pregunta: 1947 Año de creación de pregunta: 2016
 questions[20]= "21)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &quot;duplicaciones&quot; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[20]= new Array();
 choices[20][0] = "Data Marts";
 choices[20][1] = "Metadata";
 choices[20][2] = "Middleware";
 choices[20][3] = "DataWare";
 answers[20] = 0;
 units[20] = ['72'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1947. ";
 preguntaids[20] = 1947


//  Id pregunta: 1946 Año de creación de pregunta: 2016
 questions[21]= "22)  Las herramientas de miner&iacute;a de datos:";
 choices[21]= new Array();
 choices[21][0] = "Se utilizan en entornos altamente transaccionales.";
 choices[21][1] = "Emplean m&eacute;todos de b&uacute;squeda por asociaciones, secuencias, clasificaciones, pron&oacute;sticos, y/o agrupamientos.";
 choices[21][2] = "Trabajan exclusivamente con bases de datos Oracle y Adabas.";
 choices[21][3] = "Se denominan tambi&eacute;n sistemas OLTP.";
 answers[21] = 1;
 units[21] = ['72'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1946. ";
 preguntaids[21] = 1946


//  Id pregunta: 3449 Año de creación de pregunta: 2006
 questions[22]= "23)  Indique la respuesta falsa en relaci&oacute;n al WfMC (Workflow Management Coalition):";
 choices[22]= new Array();
 choices[22][0] = "Organizaci&oacute;n destinada a establecer est&aacute;ndares relativos a la terminolog&iacute;a del software, su interoperabilidad y conectividad";
 choices[22][1] = "Organizaci&oacute;n creada por las principales empresas del sector para el facilitar la compatibilidad de sus herramientas";
 choices[22][2] = "Ha desarrollado el denominado Modelo de Referencia de Workflow";
 choices[22][3] = "Est&aacute; dividida en tres comit&eacute;s principales: el Comit&eacute; T&eacute;cnico, el Comit&eacute; de Relaciones Externas y el Comit&eacute; Directivo";
 answers[22] = 1;
 units[22] = ['72'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3449. ";
 preguntaids[22] = 3449


//  Id pregunta: 2796 Año de creación de pregunta: 2002
 questions[23]= "24)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[23]= new Array();
 choices[23][0] = "Desarrollo de aplicaciones multiusuario";
 choices[23][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[23][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[23][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[23] = 1;
 units[23] = ['72'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2796. ";
 preguntaids[23] = 2796


//  Id pregunta: 3437 Año de creación de pregunta: 2006
 questions[24]= "25)  Entre los modelos t&iacute;picos de bases de datos multidimensionales se encuentra:";
 choices[24]= new Array();
 choices[24][0] = "Modelo en estrella.";
 choices[24][1] = "El modelo de copo de nieve.";
 choices[24][2] = "Modelo constelaci&oacute;n.";
 choices[24][3] = "Todos los anteriores son correctos.";
 answers[24] = 3;
 units[24] = ['72'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3437. ";
 preguntaids[24] = 3437


//  Id pregunta: 2792 Año de creación de pregunta: 2002
 questions[25]= "26)  El software para la productividad en grupos de trabajo incluye:";
 choices[25]= new Array();
 choices[25][0] = "Gesti&oacute;n de agenda compartida";
 choices[25][1] = "Teleconversaciones m&uacute;ltiples";
 choices[25][2] = "Correo electr&oacute;nico";
 choices[25][3] = "Todas las respuestas anteriores son correctas";
 answers[25] = 3;
 units[25] = ['72'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2792. ";
 preguntaids[25] = 2792


//  Id pregunta: 2680 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Qu&eacute; es la miner&iacute;a de datos?";
 choices[26]= new Array();
 choices[26][0] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda manual de patrones y relaciones.";
 choices[26][1] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda automatizada de patrones y relaciones.";
 choices[26][2] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda aleatoria de patrones y relaciones.";
 choices[26][3] = "Nada de lo anterior es correcto.";
 answers[26] = 1;
 units[26] = ['72'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2680. ";
 preguntaids[26] = 2680


//  Id pregunta: 2670 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Qu&eacute; es 'slice &amp; dice'?";
 choices[27]= new Array();
 choices[27][0] = "Una utilidad de las hojas de c&aacute;lculo para seleccionar filas y columnas.";
 choices[27][1] = "Una t&eacute;cnica OLAP que permite obtener subconjuntos de las vistas multidimensionales.";
 choices[27][2] = "Una t&eacute;cnica de representaci&oacute;n gr&aacute;fica de un sistema de informaci&oacute;n geogr&aacute;fica de acuerdo al modelo r&aacute;ster.";
 choices[27][3] = "Una t&eacute;cnica para redistribuir los flujos convergentes en un sistema de workflow.";
 answers[27] = 1;
 units[27] = ['72'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2670. ";
 preguntaids[27] = 2670


//  Id pregunta: 2645 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[28]= new Array();
 choices[28][0] = "Permite actualizar la informaci&oacute;n de manera r&aacute;pida y f&aacute;cil.";
 choices[28][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[28][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[28][3] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 answers[28] = 0;
 units[28] = ['72'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2645. ";
 preguntaids[28] = 2645


//  Id pregunta: 2700 Año de creación de pregunta: 2002
 questions[29]= "30)  Comparando los conceptos de Groupware y CSCW (Computer Supported Cooperative Work):";
 choices[29]= new Array();
 choices[29][0] = "Groupware se refiere m&aacute;s a aspectos sociol&oacute;gicos y psicol&oacute;gicos";
 choices[29][1] = "CSCW aborda la tem&aacute;tica desde una perspectiva mucho m&aacute;s concreta y espec&iacute;fica";
 choices[29][2] = "Groupware se centra en las connotaciones tecnol&oacute;gicas, en aplicaciones concretas y en actividades grupales";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = 2;
 units[29] = ['72'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2700. ";
 preguntaids[29] = 2700


//  Id pregunta: 2682 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Qu&eacute; es ROLAP?";
 choices[30]= new Array();
 choices[30][0] = "Una base de datos multidimensional.";
 choices[30][1] = "Un sistema de procesamiento analitico online construido sobre una base de datos relacional.";
 choices[30][2] = "Una medida de rendimiento de los sistemas OLAP.";
 choices[30][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[30] = 1;
 units[30] = ['72'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2682. ";
 preguntaids[30] = 2682


//  Id pregunta: 1804 Año de creación de pregunta: 2016
 questions[31]= "32)  El an&aacute;lisis multidimensional se fundamenta en modelar la informaci&oacute;n en dimensiones, hechos y medidas. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[31]= new Array();
 choices[31][0] = "Las dimensiones corresponden a un conjunto de elementos con caracter&iacute;sticas comunes que responden a una pregunta de negocio. Representan diferentes perspectivas de an&aacute;lisis.";
 choices[31][1] = "Los hechos identifican los valores de las medidas de negocio para una combinaci&oacute;n concreta de dimensiones.";
 choices[31][2] = "Se entiende por granularidad de la informaci&oacute;n almacenada en una tabla de hechos, el nivel de detalle de dichos datos.";
 choices[31][3] = "Las dimensiones se organizan en jerarqu&iacute;as. Cada dimensi&oacute;n est&aacute; en una &uacute;nica jerarqu&iacute;a.";
 answers[31] = 3;
 units[31] = ['72'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1804. ";
 preguntaids[31] = 1804


//  Id pregunta: 3433 Año de creación de pregunta: 2006
 questions[32]= "33)  De acuerdo al Garner Group, la transformaci&oacute;n de los datos de la compa&ntilde;&iacute;a en conocimiento para obtener una ventaja competitiva se define como:";
 choices[32]= new Array();
 choices[32][0] = "Business Intelligence.";
 choices[32][1] = "Data Mining.";
 choices[32][2] = "ETL.";
 choices[32][3] = "Balanced Score Card.";
 answers[32] = 0;
 units[32] = ['72'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3433. ";
 preguntaids[32] = 3433


//  Id pregunta: 1080 Año de creación de pregunta: 2016
 questions[33]= "34)  En el contexto de los sistemas Datawarehouse y DataMart seleccione la frase correcta.";
 choices[33]= new Array();
 choices[33][0] = "El an&aacute;lisis dimensional de los datos corporativos mediante t&eacute;cnicas de OLAP no puede implementarse sobre bases de datos relacionales.";
 choices[33][1] = "Las bases de datos relacionales incorporan de manera estructural la jerarqu&iacute;a entre sucesivos niveles de una dimensi&oacute;n.";
 choices[33][2] = "Los modelos en copo de nieve utilizan tablas de hechos y tablas de dimensiones para el an&aacute;lisis de los datos corporativos.";
 choices[33][3] = "Los almacenes de datos departamentales (DataMart), a diferencia de los almacenes corporativos (Datawarehouse), no requieren procesos previos de ETL (extracci&oacute;n, transformaci&oacute;n y carga).";
 answers[33] = 2;
 units[33] = ['72'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1080. ";
 preguntaids[33] = 1080


//  Id pregunta: 3096 Año de creación de pregunta: 2002
 questions[34]= "35)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[34]= new Array();
 choices[34][0] = "Homogeneidad de datos almacenados.";
 choices[34][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[34][2] = "Total organizaci&oacute;n.";
 choices[34][3] = "Facilidad para responder a consultas complejas.";
 answers[34] = 1;
 units[34] = ['72', '73'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3096. ";
 preguntaids[34] = 3096


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[35]= new Array();
 choices[35][0] = "Data Mining (miner&iacute;a de datos)";
 choices[35][1] = "Business Intelligence (inteligencia de negocio)";
 choices[35][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[35][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[35] = 1;
 units[35] = ['72'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 730. AGE A1 2015";
 preguntaids[35] = 730


//  Id pregunta: 3440 Año de creación de pregunta: 2006
 questions[36]= "37)  Las tablas primarias en el modelo dimensional de un Datawarehouse y que contienen los valores y metricas se conocen como:";
 choices[36]= new Array();
 choices[36][0] = "Tablas de dimensiones.";
 choices[36][1] = "Tablas maestras.";
 choices[36][2] = "Tablas de hechos.";
 choices[36][3] = "Tablas externas.";
 answers[36] = 2;
 units[36] = ['72'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3440. ";
 preguntaids[36] = 3440


//  Id pregunta: 2986 Año de creación de pregunta: 2002
 questions[37]= "38)  Los tipos de an&aacute;lisis desarrollados en Data Mining se dividen com&uacute;nmente en:";
 choices[37]= new Array();
 choices[37][0] = "Sint&aacute;ctico y sem&aacute;ntico.";
 choices[37][1] = "Estad&iacute;stico y de calidad.";
 choices[37][2] = "Gr&aacute;fico y textual.";
 choices[37][3] = "Supervisado y no supervisado.";
 answers[37] = 3;
 units[37] = ['72', '73'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2986. ";
 preguntaids[37] = 2986


//  Id pregunta: 2605 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre data-warehouse es verdadera?";
 choices[38]= new Array();
 choices[38][0] = "Los datos se agregan en conjuntos.";
 choices[38][1] = "La actualizaci&oacute;n de los datos se hace en tiempo real.";
 choices[38][2] = "Est&aacute;n orientados a procesos.";
 choices[38][3] = "&Uacute;nicamente se puede realizar data-mining sobre un sistema data-warehouse.";
 answers[38] = 0;
 units[38] = ['72'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2605. ";
 preguntaids[38] = 2605


//  Id pregunta: 3448 Año de creación de pregunta: 2006
 questions[39]= "40)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[39]= new Array();
 choices[39][0] = "Incremento de la productividad";
 choices[39][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[39][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[39][3] = "Todas las anteriores son ciertas";
 answers[39] = 3;
 units[39] = ['72'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3448. ";
 preguntaids[39] = 3448


//  Id pregunta: 2960 Año de creación de pregunta: 2002
 questions[40]= "41)  Las actividades clave del data warehousing son:";
 choices[40]= new Array();
 choices[40][0] = "Recepci&oacute;n, almacenamiento, proceso y presentaci&oacute;n.";
 choices[40][1] = "Extracci&oacute;n de datos, almacenamiento de datos, OLAP, miner&iacute;a de datos y acceso a los datos.";
 choices[40][2] = "Carga de datos de prueba, entrenamiento, inferencia del conocimiento, carga de datos reales y c&aacute;lculo de decisiones.";
 choices[40][3] = "Gesti&oacute;n de los medios f&iacute;sicos de almacenamiento, localizaci&oacute;n transparente de los datos y salvaguarda y restauraci&oacute;n autom&aacute;ticas.";
 answers[40] = 1;
 units[40] = ['72', '73'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2960. ";
 preguntaids[40] = 2960


//  Id pregunta: 2776 Año de creación de pregunta: 2002
 questions[41]= "42)  El objetivo del aprendizaje no supervisado en miner&iacute;a de datos basado en modelado consiste en:";
 choices[41]= new Array();
 choices[41][0] = "Asignar nuevas situaciones a clases a partir de ejemplos existentes.";
 choices[41][1] = "Determinar el comportamiento futuro a partir de datos hist&oacute;ricos.";
 choices[41][2] = "Establecer grupos de parecidos.";
 choices[41][3] = "Descubren patrones y tendencias en los datos.";
 answers[41] = 3;
 units[41] = ['72'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2776. ";
 preguntaids[41] = 2776


//  Id pregunta: 2501 Año de creación de pregunta: 2004
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[42]= new Array();
 choices[42][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[42][1] = "Utiliza modelos de datos multidimensionales.";
 choices[42][2] = "Proporciona la velocidad y flexibilidad necesarias en tiempo real.";
 choices[42][3] = "Est&aacute; basado en modelos de datos jer&aacute;rquicos.";
 answers[42] = 3;
 units[42] = ['72'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2501. Examen TIC MAP B 2004";
 preguntaids[42] = 2501


//  Id pregunta: 3447 Año de creación de pregunta: 2006
 questions[43]= "44)  &iquest;Con que categoria de software esta m&aacute;s relacionado el BPM?";
 choices[43]= new Array();
 choices[43][0] = "Workflow";
 choices[43][1] = "B2B";
 choices[43][2] = "B2C";
 choices[43][3] = "SCM";
 answers[43] = 0;
 units[43] = ['72'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3447. ";
 preguntaids[43] = 3447


//  Id pregunta: 3450 Año de creación de pregunta: 2006
 questions[44]= "45)  &iquest;A qu&eacute; hace referencia las siglas WAPI?";
 choices[44]= new Array();
 choices[44][0] = "Wireless Advanced Privacy Infrastructure";
 choices[44][1] = "Workflow Application Programming Interface";
 choices[44][2] = "Wired Advanced Professional Institute";
 choices[44][3] = "Wireless Application Programming Interface";
 answers[44] = 1;
 units[44] = ['72'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3450. ";
 preguntaids[44] = 3450


//  Id pregunta: 2898 Año de creación de pregunta: 2002
 questions[45]= "46)  Indicar cu&aacute;l de los siguientes no es un modelo de miner&iacute;a de datos:";
 choices[45]= new Array();
 choices[45][0] = "De verificaci&oacute;n.";
 choices[45][1] = "De descubrimiento.";
 choices[45][2] = "De predicci&oacute;n.";
 choices[45][3] = "De validaci&oacute;n.";
 answers[45] = 3;
 units[45] = ['72', '73'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2898. ";
 preguntaids[45] = 2898


//  Id pregunta: 3041 Año de creación de pregunta: 2002
 questions[46]= "47)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[46]= new Array();
 choices[46][0] = "Modelo de descubrimiento.";
 choices[46][1] = "Modelo de verificaci&oacute;n.";
 choices[46][2] = "Modelo predictivo.";
 choices[46][3] = "Modelo de resumen.";
 answers[46] = 1;
 units[46] = ['72', '73'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3041. ";
 preguntaids[46] = 3041


//  Id pregunta: 3315 Año de creación de pregunta: 2004
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[47]= new Array();
 choices[47][0] = "Los servicios OLAP son una herramienta de proceso anal&iacute;tico en l&iacute;nea.";
 choices[47][1] = "Pertenece al dominio de los almacenes de datos y se encuentra dentro del &aacute;mbito, m&aacute;s amplio, de los sistemas de toma de decisiones (DSS) y de los sistemas de informaci&oacute;n ejecutiva (EIS).";
 choices[47][2] = "Una de sus principales metas es incrementar la velocidad de recuperaci&oacute;n de datos.";
 choices[47][3] = "Los servicios OLAP son una herramienta de proceso transaccional en l&iacute;nea.";
 answers[47] = 3;
 units[47] = ['72'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3315. MAP-B 2003";
 preguntaids[47] = 3315


//  Id pregunta: 1492 Año de creación de pregunta: 2016
 questions[48]= "49)  Una de las siguientes respuestas es FALSA en relaci&oacute;n a un Data Warehouse:";
 choices[48]= new Array();
 choices[48][0] = "No se borran datos.";
 choices[48][1] = "Hay campos que almacenan informaci&oacute;n calculada a partir de los datos iniciales, para facilitar c&aacute;lculos posteriores.";
 choices[48][2] = "Permiten analizar informaci&oacute;n en funci&oacute;n de distintos criterios.";
 choices[48][3] = "Una vez agregados los datos para proporcionar la informaci&oacute;n solicitada se eliminan los datos originales.";
 answers[48] = 3;
 units[48] = ['72'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1492. ";
 preguntaids[48] = 1492


//  Id pregunta: 3443 Año de creación de pregunta: 2006
 questions[49]= "50)  OLAP significa:";
 choices[49]= new Array();
 choices[49][0] = "On-Line Automatic Prediction.";
 choices[49][1] = "On-Line Analytical Prediction.";
 choices[49][2] = "On-Line Automatic Processing.";
 choices[49][3] = "On-Line Analytical Processing.";
 answers[49] = 3;
 units[49] = ['72'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3443. ";
 preguntaids[49] = 3443


//  Id pregunta: 2628 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes modelos de miner&iacute;a de datos escoger&iacute;a para detectar un posible fraude?";
 choices[50]= new Array();
 choices[50][0] = "El modelo de Verificaci&oacute;n.";
 choices[50][1] = "El modelo de Descubrimiento.";
 choices[50][2] = "El modelo de Simulaci&oacute;n.";
 choices[50][3] = "El modelo Distribuido.";
 answers[50] = 1;
 units[50] = ['72'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2628. ";
 preguntaids[50] = 2628


//  Id pregunta: 3072 Año de creación de pregunta: 2002
 questions[51]= "52)  Un Data Mart es:";
 choices[51]= new Array();
 choices[51][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[51][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[51][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[51][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[51] = 1;
 units[51] = ['72', '73'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3072. ";
 preguntaids[51] = 3072


//  Id pregunta: 3069 Año de creación de pregunta: 2002
 questions[52]= "53)  Un almac&eacute;n de datos o &quot;data warehouse&quot;:";
 choices[52]= new Array();
 choices[52][0] = "Integra datos de diferentes sistemas de informaci&oacute;n de la organizaci&oacute;n para permitir su an&aacute;lisis posterior por la Direcci&oacute;n.";
 choices[52][1] = "Recopila datos de diferentes &quot;data marts&quot; para permitir su an&aacute;lisis por la Direcci&oacute;n mediante herramientas OLAP.";
 choices[52][2] = "Integra todas las bases de datos que existen en una organizaci&oacute;n para su consulta por la Direcci&oacute;n.";
 choices[52][3] = "Es una base de datos que contiene metainformaci&oacute;n sobre las bases de datos que existen en la organizaci&oacute;n.";
 answers[52] = 0;
 units[52] = ['72', '73'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3069. ";
 preguntaids[52] = 3069


//  Id pregunta: 1545 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes respuestas NO identifica a un servidor OLAP?";
 choices[53]= new Array();
 choices[53][0] = "icCube.";
 choices[53][1] = "Essbase.";
 choices[53][2] = "Oracle HyperCube.";
 choices[53][3] = "Mondrian OLAP server.";
 answers[53] = 2;
 units[53] = ['72'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1545. ";
 preguntaids[53] = 1545


//  Id pregunta: 2520 Año de creación de pregunta: 2004
 questions[54]= "55)  Dentro del campo de los almacenes de datos, los supermercados de datos o Data Marts:";
 choices[54]= new Array();
 choices[54][0] = "Son muy vol&aacute;tiles dada la gran frecuencia de actualizaci&oacute;n.";
 choices[54][1] = "son una versi&oacute;n especial de Data Warehouse, duplicados en varias m&aacute;quinas para agilizar el acceso a los mismos, que contienen los datos muy resumidos en una arquitectura distribuida por niveles.";
 choices[54][2] = "S&oacute;lo pueden ser accedidos por el departamento al que pertenecen los datos.";
 choices[54][3] = "Ninguna de las anteriores.";
 answers[54] = 1;
 units[54] = ['72'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2520. Similar a examen TIC SS A 2003";
 preguntaids[54] = 2520


//  Id pregunta: 3435 Año de creación de pregunta: 2006
 questions[55]= "56)  El termino ETL se refiere a:";
 choices[55]= new Array();
 choices[55][0] = "Extraction, Transfer &amp; Labeling.";
 choices[55][1] = "Explanation, Transformation &amp; Loading.";
 choices[55][2] = "Extraction, Transformation &amp; Loading.";
 choices[55][3] = "Extraction, Transfer &amp; Loading.";
 answers[55] = 2;
 units[55] = ['72'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3435. ";
 preguntaids[55] = 3435


//  Id pregunta: 3216 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;C&uacute;al de las siguientes afirmaciones sobre OLAP es falsa?";
 choices[56]= new Array();
 choices[56][0] = "Pueden presentar vistas de un n&uacute;mero reducido de dimensiones elegido por el usuario.";
 choices[56][1] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 choices[56][2] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[56][3] = "No pueden existir bases de datos OLAP relacionales.";
 answers[56] = 3;
 units[56] = ['72'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3216. ";
 preguntaids[56] = 3216


//  Id pregunta: 3232 Año de creación de pregunta: 2003
 questions[57]= "58)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[57]= new Array();
 choices[57][0] = "Enrutamiento";
 choices[57][1] = "Asignaci&oacute;n de responsabilidades";
 choices[57][2] = "Generaci&oacute;n de formularios";
 choices[57][3] = "Gesti&oacute;n de procedimiento";
 answers[57] = 2;
 units[57] = ['72'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3232. ";
 preguntaids[57] = 3232


//  Id pregunta: 2622 Año de creación de pregunta: 2003
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes ejemplos de tipos de aprendizaje en miner&iacute;a de datos es no supervisado?";
 choices[58]= new Array();
 choices[58][0] = "Modelado y control.";
 choices[58][1] = "Sistemas de predicci&oacute;n.";
 choices[58][2] = "Descubrimiento de patrones.";
 choices[58][3] = "&Aacute;rboles de predicci&oacute;n.";
 answers[58] = 2;
 units[58] = ['72'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2622. ";
 preguntaids[58] = 2622


//  Id pregunta: 2967 Año de creación de pregunta: 2002
 questions[59]= "60)  Las principales caracter&iacute;sticas de un almac&eacute;n de datos son:";
 choices[59]= new Array();
 choices[59][0] = "Organizado en torno a procesos, integrado, inpendiente del tiempo, no volatil";
 choices[59][1] = "Organizado en torno a temas, integrado, independiente del tiempo, volatil";
 choices[59][2] = "Organizado en torno a temas, integrado, dependiente del tiempo, no volatil";
 choices[59][3] = "Organizado en torno a procesos, integrado, dependiente del tiempo, volatil";
 answers[59] = 2;
 units[59] = ['72', '73'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2967. ";
 preguntaids[59] = 2967


//  Id pregunta: 1356 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; es el &quot;Data staging Area&quot; en el contexto de los Data Warehouses?";
 choices[60]= new Array();
 choices[60][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extra en los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[60][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[60][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando estos no pueden ejecutarse en tiempo real.";
 choices[60][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[60] = 0;
 units[60] = ['72'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1356. ";
 preguntaids[60] = 1356


//  Id pregunta: 3436 Año de creación de pregunta: 2006
 questions[61]= "62)  Entre las ventajas de un Datawarehouse no se encuentra:";
 choices[61]= new Array();
 choices[61][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[61][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[61][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n.";
 choices[61][3] = "La informaci&oacute;n de una empresa se mantiene consistente, segura, actualizada y f&aacute;cilmente accesible.";
 answers[61] = 0;
 units[61] = ['72'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3436. ";
 preguntaids[61] = 3436


//  Id pregunta: 2777 Año de creación de pregunta: 2002
 questions[62]= "63)  El objetivo principal de la miner&iacute;a de datos es:";
 choices[62]= new Array();
 choices[62][0] = "Descubrir el conocimiento oculto en grandes vol&uacute;menes de datos y expresarlo de forma inteligible.";
 choices[62][1] = "Reorganizar adecuadamente los grandes vol&uacute;menes de datos.";
 choices[62][2] = "Tener copias de seguridad fiables y r&aacute;pidas de todos y cada uno de los datos de que se dispone.";
 choices[62][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[62] = 0;
 units[62] = ['72'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2777. ";
 preguntaids[62] = 2777


//  Id pregunta: 3441 Año de creación de pregunta: 2006
 questions[63]= "64)  La operaci&oacute;n que permite navegar hacia un mayor nivel de agregaci&oacute;n en dimensiones en un Datawarehouse se conoce como:";
 choices[63]= new Array();
 choices[63][0] = "Drill-Down.";
 choices[63][1] = "Roll-Up.";
 choices[63][2] = "Drill-Through.";
 choices[63][3] = "Slice and Dice.";
 answers[63] = 1;
 units[63] = ['72'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3441. ";
 preguntaids[63] = 3441


//  Id pregunta: 2717 Año de creación de pregunta: 2002
 questions[64]= "65)  Cuando se quiere simular una base de datos multidimensional con una base de datos relacional y hay jerarqu&iacute;as en las dimensiones, lo m&aacute;s adecuado es el:";
 choices[64]= new Array();
 choices[64][0] = "Esquema en estrella.";
 choices[64][1] = "Esquema en tornillo.";
 choices[64][2] = "Esquema de hechos.";
 choices[64][3] = "Esquema en copo de nieve.";
 answers[64] = 3;
 units[64] = ['72'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2717. ";
 preguntaids[64] = 2717


//  Id pregunta: 2519 Año de creación de pregunta: 2004
 questions[65]= "66)  Entre las caracter&iacute;sticas de un Data Warehouse se encuentra que es un sistema:";
 choices[65]= new Array();
 choices[65][0] = "Independiente del tiempo.";
 choices[65][1] = "Integrado.";
 choices[65][2] = "Vol&aacute;til.";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = 1;
 units[65] = ['72'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2519. Similar a examen TIC SS A 2003";
 preguntaids[65] = 2519


//  Id pregunta: 2884 Año de creación de pregunta: 2002
 questions[66]= "67)  Entre las caracter&iacute;sticas del Data Warehousing se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Estar orientado a objetos.";
 choices[66][1] = "Los datos de la empresa no son modificados.";
 choices[66][2] = "Estar destinado a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[66][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[66] = 3;
 units[66] = ['72', '73'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2884. ";
 preguntaids[66] = 2884


//  Id pregunta: 2798 Año de creación de pregunta: 2002
 questions[67]= "68)  Elija la respuesta falsa respecto de OLAP.";
 choices[67]= new Array();
 choices[67][0] = "Implica el uso de t&eacute;cnicas multidimensionales.";
 choices[67][1] = "Realiza el an&aacute;lisis Offline de los datos.";
 choices[67][2] = "Puede utilizar bases de datos relacionales.";
 choices[67][3] = "Puede presentar vistas de los datos en un numero reducido de dimensiones.";
 answers[67] = 1;
 units[67] = ['72'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2798. ";
 preguntaids[67] = 2798


//  Id pregunta: 1354 Año de creación de pregunta: 2016
 questions[68]= "69)  Los ETL son herramientas utilizadas habitualmente en .la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas, herramientas?";
 choices[68]= new Array();
 choices[68][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[68][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[68][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de paginas HTML.";
 choices[68][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[68] = 3;
 units[68] = ['72'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1354. ";
 preguntaids[68] = 1354


//  Id pregunta: 2653 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;En qu&eacute; consiste el an&aacute;lisis multidimensional de OLAP?";
 choices[69]= new Array();
 choices[69][0] = "En analizar los mismos datos desde distintas perspectivas.";
 choices[69][1] = "En consolidar los datos por distintas trayectorias.";
 choices[69][2] = "En encontrar nuevas relaciones entre variables.";
 choices[69][3] = "Todas las respuestas anteriores son correctas.";
 answers[69] = 3;
 units[69] = ['72'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2653. ";
 preguntaids[69] = 2653


//  Id pregunta: 3036 Año de creación de pregunta: 2002
 questions[70]= "71)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[70]= new Array();
 choices[70][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[70][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[70][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[70][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[70] = 0;
 units[70] = ['72'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3036. ";
 preguntaids[70] = 3036


//  Id pregunta: 3217 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[71]= new Array();
 choices[71][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[71][1] = "Alta volatilidad de los datos.";
 choices[71][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[71][3] = "Integraci&oacute;n del formato de los datos.";
 answers[71] = 1;
 units[71] = ['72'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3217. Junta Andaluc&iacute;a";
 preguntaids[71] = 3217


//  Id pregunta: 3442 Año de creación de pregunta: 2006
 questions[72]= "73)  &iquest;Con cu&aacute;l de las siguientes categor&iacute;as de software est&aacute; m&aacute;s relacionado el Business Intelligence?";
 choices[72]= new Array();
 choices[72][0] = "ERP.";
 choices[72][1] = "Datawarehouse y OLAP.";
 choices[72][2] = "Document Management y Content Management.";
 choices[72][3] = "SCM.";
 answers[72] = 1;
 units[72] = ['72'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3442. ";
 preguntaids[72] = 3442


//  Id pregunta: 2619 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es com&uacute;nmente utilizada para la extracci&oacute;n de informaci&oacute;n en un almac&eacute;n de datos?";
 choices[73]= new Array();
 choices[73][0] = "De consulta e informe.";
 choices[73][1] = "De an&aacute;lisis m&uacute;ltidimensional.";
 choices[73][2] = "De an&aacute;lisis predictivo.";
 choices[73][3] = "De inteligencia artificial.";
 answers[73] = 2;
 units[73] = ['72'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2619. ";
 preguntaids[73] = 2619


//  Id pregunta: 3340 Año de creación de pregunta: 2004
 questions[74]= "75)  Si comparamos una base de datos relacional y otra multidimensional, es FALSO que:";
 choices[74]= new Array();
 choices[74][0] = "Las BDR son mejores que las BDM para obtener vistas de unos datos en funci&oacute;n de otros.";
 choices[74][1] = "Las BDR est&aacute;n optimizadas para la inserci&oacute;n de registros y el control concurrente de usuarios.";
 choices[74][2] = "Las BDM tienen informaci&oacute;n m&aacute;s consistente que las BDR.";
 choices[74][3] = "Las BDM son mejores para el estudio a alto nivel de los datos, ya que ofrecen mayor flexibilidad y rapidez de acceso para el &aacute;nalisis de los mismos.";
 answers[74] = 0;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3340. ";
 preguntaids[74] = 3340


