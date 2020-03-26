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
//  Id pregunta: 6739 Año de creación de pregunta: 2009
 questions[0]= "1)  Un Data Warehouse es:";
 choices[0]= new Array();
 choices[0][0] = "Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[0][1] = "Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[0][2] = "Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[0][3] = "Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[0] = 3;
 units[0] = ['73'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6739. MAP 2008 A1";
 preguntaids[0] = 6739


//  Id pregunta: 2986 Año de creación de pregunta: 2002
 questions[1]= "2)  Los tipos de an&aacute;lisis desarrollados en Data Mining se dividen com&uacute;nmente en:";
 choices[1]= new Array();
 choices[1][0] = "Sint&aacute;ctico y sem&aacute;ntico.";
 choices[1][1] = "Estad&iacute;stico y de calidad.";
 choices[1][2] = "Gr&aacute;fico y textual.";
 choices[1][3] = "Supervisado y no supervisado.";
 answers[1] = 3;
 units[1] = ['72', '73'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2986. ";
 preguntaids[1] = 2986


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[2]= "3)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[2]= new Array();
 choices[2][0] = "Bases de datos orientadas a filas";
 choices[2][1] = "Bases de datos orientadas a documentos";
 choices[2][2] = "Bases de datos de clave/valor";
 choices[2][3] = "Bases de datos orientadas a objetos";
 answers[2] = 0;
 units[2] = ['73'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 740. Big Data y NoSQL";
 preguntaids[2] = 740


//  Id pregunta: 9002 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[3]= new Array();
 choices[3][0] = "Soportan operaciones JOIN";
 choices[3][1] = "Garantizan completamente ACID";
 choices[3][2] = "Requieren estructuras fijas, como tablas";
 choices[3][3] = "Escalan bien horizontalmente";
 answers[3] = 3;
 units[3] = ['73'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9002. ";
 preguntaids[3] = 9002


//  Id pregunta: 1192 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una base de datos NoSQL basada en un modelo de almacenamiento de &laquo;clave-valor&raquo;:";
 choices[4]= new Array();
 choices[4][0] = "Cassandra.";
 choices[4][1] = "Dynamo.";
 choices[4][2] = "Radiant.";
 choices[4][3] = "Oracle NoSQL.";
 answers[4] = 2;
 units[4] = ['73'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1192. ";
 preguntaids[4] = 1192


//  Id pregunta: 9003 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[5]= new Array();
 choices[5][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[5][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[5][2] = "Utilizan estructuras flexibles";
 choices[5][3] = "Todas las anteriores lo son";
 answers[5] = 3;
 units[5] = ['73'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9003. ";
 preguntaids[5] = 9003


//  Id pregunta: 2960 Año de creación de pregunta: 2002
 questions[6]= "7)  Las actividades clave del data warehousing son:";
 choices[6]= new Array();
 choices[6][0] = "Recepci&oacute;n, almacenamiento, proceso y presentaci&oacute;n.";
 choices[6][1] = "Extracci&oacute;n de datos, almacenamiento de datos, OLAP, miner&iacute;a de datos y acceso a los datos.";
 choices[6][2] = "Carga de datos de prueba, entrenamiento, inferencia del conocimiento, carga de datos reales y c&aacute;lculo de decisiones.";
 choices[6][3] = "Gesti&oacute;n de los medios f&iacute;sicos de almacenamiento, localizaci&oacute;n transparente de los datos y salvaguarda y restauraci&oacute;n autom&aacute;ticas.";
 answers[6] = 1;
 units[6] = ['72', '73'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2960. ";
 preguntaids[6] = 2960


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[7]= "8)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[7]= new Array();
 choices[7][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[7][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[7][2] = "Se basan en sistemas distribuidos";
 choices[7][3] = "Se basan en el modelo de datos relacional";
 answers[7] = 2;
 units[7] = ['73'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 742. Big Data y NoSQL";
 preguntaids[7] = 742


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[8]= new Array();
 choices[8][0] = "Es un framework de software libre.";
 choices[8][1] = "Es una base de datos NoSQL.";
 choices[8][2] = "Est&aacute; basado en MapReduce.";
 choices[8][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[8] = 1;
 units[8] = ['73'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 736. AGE A1 2015";
 preguntaids[8] = 736


//  Id pregunta: 10702 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Facebook?";
 choices[9]= new Array();
 choices[9][0] = "Hive";
 choices[9][1] = "Cassandra";
 choices[9][2] = "Hbase";
 choices[9][3] = "ZoneKeeper";
 answers[9] = 2;
 units[9] = ['73'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10702. ";
 preguntaids[9] = 10702


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[10]= new Array();
 choices[10][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[10][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[10][2] = "A) y B) son verdaderas";
 choices[10][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[10] = 2;
 units[10] = ['73'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 746. Big Data y NoSQL";
 preguntaids[10] = 746


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[11]= "12)  Son proyectos de Apache relacionados con Big Data:";
 choices[11]= new Array();
 choices[11][0] = "Hadoop";
 choices[11][1] = "Spark";
 choices[11][2] = "A) y B)";
 choices[11][3] = "Niguno de los anteriores";
 answers[11] = 2;
 units[11] = ['73'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 748. Big Data y NoSQL";
 preguntaids[11] = 748


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[12]= "13)  Big Data:";
 choices[12]= new Array();
 choices[12][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[12][1] = "No puede emplearse para tratar datos no estructurados";
 choices[12][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = 3;
 units[12] = ['73'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 749. Big Data y NoSQL";
 preguntaids[12] = 749


//  Id pregunta: 3037 Año de creación de pregunta: 2009
 questions[13]= "14)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[13]= new Array();
 choices[13][0] = "Actualizaci&oacute;n.";
 choices[13][1] = "Agregaci&oacute;n.";
 choices[13][2] = "Dril-down.";
 choices[13][3] = "Slice-Dice.";
 answers[13] = 0;
 units[13] = ['72', '73'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3037. ";
 preguntaids[13] = 3037


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[14]= new Array();
 choices[14][0] = "Neo4J";
 choices[14][1] = "OrientDB";
 choices[14][2] = "InfoGrid";
 choices[14][3] = "SimpleDB";
 answers[14] = 3;
 units[14] = ['73'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 751. Big Data y NoSQL";
 preguntaids[14] = 751


//  Id pregunta: 2884 Año de creación de pregunta: 2002
 questions[15]= "16)  Entre las caracter&iacute;sticas del Data Warehousing se encuentra:";
 choices[15]= new Array();
 choices[15][0] = "Estar orientado a objetos.";
 choices[15][1] = "Los datos de la empresa no son modificados.";
 choices[15][2] = "Estar destinado a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[15][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[15] = 3;
 units[15] = ['72', '73'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2884. ";
 preguntaids[15] = 2884


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[16]= new Array();
 choices[16][0] = "Varios namenodes y varios datanodes por cluster";
 choices[16][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[16][2] = "1 namenode y varios datanodes por cluster";
 choices[16][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[16] = 2;
 units[16] = ['73'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 759. Big Data y NoSQL";
 preguntaids[16] = 759


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;n desarroll&oacute; inicialmente la base de datos NoSQL Cassandra?";
 choices[17]= new Array();
 choices[17][0] = "Apache.";
 choices[17][1] = "Facebook.";
 choices[17][2] = "Apple.";
 choices[17][3] = "Twitter.";
 answers[17] = 1;
 units[17] = ['73'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 737. AGE A2 2015";
 preguntaids[17] = 737


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[18]= new Array();
 choices[18][0] = "Cassandra";
 choices[18][1] = "Riak";
 choices[18][2] = "Avro";
 choices[18][3] = "Zookeeper";
 answers[18] = 3;
 units[18] = ['73'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 754. Big Data y NoSQL";
 preguntaids[18] = 754


//  Id pregunta: 10811 Año de creación de pregunta: 2015
 questions[19]= "20)  Hive:";
 choices[19]= new Array();
 choices[19][0] = "Impone una jerarqu&iacute;a a los archivos en cl&uacute;ster y permite sincronizar el trabajo entre las distintas entidades.";
 choices[19][1] = "Permite administrar grandes conjuntos de datos que se encuentran en cl&uacute;ster utilizando un lenguaje similar a SQL";
 choices[19][2] = "Permite gestionar los flujos de trabajo y la sincronizaci&oacute;n al trabajar con datos en cl&uacute;ster.";
 choices[19][3] = "Ofrece una interfaz gr&aacute;fica que permite disponer, administrar y supervisar un conjunto de nodos de trabajo Hadoop.";
 answers[19] = 1;
 units[19] = ['73'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10811. ";
 preguntaids[19] = 10811


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[20]= new Array();
 choices[20][0] = "Orientaci&oacute;n a objetos";
 choices[20][1] = "MapReduce";
 choices[20][2] = "Pipeline filtering";
 choices[20][3] = "Programaci&oacute;n funcional";
 answers[20] = 1;
 units[20] = ['73'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 757. Big Data y NoSQL";
 preguntaids[20] = 757


//  Id pregunta: 7759 Año de creación de pregunta: 2010
 questions[21]= "22)  El sub-proyecto de &laquo;Apache&raquo; que incluye funcionalidades de indexaci&oacute;n y b&uacute;squeda en los &iacute;ndices creados es:";
 choices[21]= new Array();
 choices[21][0] = "Watchdog.";
 choices[21][1] = "Turbine.";
 choices[21][2] = "Lucene.";
 choices[21][3] = "Avalon.";
 answers[21] = 2;
 units[21] = ['73'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7759. ";
 preguntaids[21] = 7759


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[22]= "23)  Son bases de datos NoSQL:";
 choices[22]= new Array();
 choices[22][0] = "MongoDB y Maria DB";
 choices[22][1] = "HBase y Dynamo";
 choices[22][2] = "MariaDB, Cassandra y BigTable";
 choices[22][3] = "La A) y la C)";
 answers[22] = 1;
 units[22] = ['73'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 744. Big Data y NoSQL";
 preguntaids[22] = 744


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; es MongoDB?";
 choices[23]= new Array();
 choices[23][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[23][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[23][2] = "Un sistema gestor de base de datos relacional.";
 choices[23][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[23] = 1;
 units[23] = ['73'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 733. AGE A1 2015";
 preguntaids[23] = 733


//  Id pregunta: 9833 Año de creación de pregunta: 2015
 questions[24]= "25)  Una sistema de gesti&oacute;n de base de datos NoSQL...";
 choices[24]= new Array();
 choices[24][0] = "&hellip; es un sistema de base de datos relacional que no utiliza SQL.";
 choices[24][1] = "&hellip; almacena sus datos en estructuras fijas (tablas).";
 choices[24][2] = "&hellip; garantiza completamente las propiedades ACID.";
 choices[24][3] = "&hellip; tienen como ventaja principal la gran escalabilidad y rendimiento.";
 answers[24] = 3;
 units[24] = ['73'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9833. ";
 preguntaids[24] = 9833


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[25]= "26)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[25]= new Array();
 choices[25][0] = "Almacenamiento orientado a columnas";
 choices[25][1] = "Framework MapReduce";
 choices[25][2] = "OLTP";
 choices[25][3] = "Bases de datos clave-valor";
 answers[25] = 2;
 units[25] = ['73'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 735. AGE A1 2015";
 preguntaids[25] = 735


//  Id pregunta: 2967 Año de creación de pregunta: 2002
 questions[26]= "27)  Las principales caracter&iacute;sticas de un almac&eacute;n de datos son:";
 choices[26]= new Array();
 choices[26][0] = "Organizado en torno a procesos, integrado, inpendiente del tiempo, no volatil";
 choices[26][1] = "Organizado en torno a temas, integrado, independiente del tiempo, volatil";
 choices[26][2] = "Organizado en torno a temas, integrado, dependiente del tiempo, no volatil";
 choices[26][3] = "Organizado en torno a procesos, integrado, dependiente del tiempo, volatil";
 answers[26] = 2;
 units[26] = ['72', '73'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2967. ";
 preguntaids[26] = 2967


//  Id pregunta: 3096 Año de creación de pregunta: 2002
 questions[27]= "28)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[27]= new Array();
 choices[27][0] = "Homogeneidad de datos almacenados.";
 choices[27][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[27][2] = "Total organizaci&oacute;n.";
 choices[27][3] = "Facilidad para responder a consultas complejas.";
 answers[27] = 1;
 units[27] = ['72', '73'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3096. ";
 preguntaids[27] = 3096


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[28]= new Array();
 choices[28][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[28][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[28][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[28][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[28] = 0;
 units[28] = ['73'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 752. Big Data y NoSQL";
 preguntaids[28] = 752


//  Id pregunta: 1352 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique cual de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[29]= new Array();
 choices[29][0] = "Joost";
 choices[29][1] = "Netflix";
 choices[29][2] = "Cassandra";
 choices[29][3] = "Hadoop";
 answers[29] = 3;
 units[29] = ['73'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1352. ";
 preguntaids[29] = 1352


//  Id pregunta: 10700 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes NO hace referencia a un proyecto de Big Data?";
 choices[30]= new Array();
 choices[30][0] = "Flume";
 choices[30][1] = "Cassandra";
 choices[30][2] = "Galenicum";
 choices[30][3] = "Hbase";
 answers[30] = 2;
 units[30] = ['73'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10700. ";
 preguntaids[30] = 10700


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[31]= "32)  El lenguaje SPARK es un subconjunto de:";
 choices[31]= new Array();
 choices[31][0] = "Java";
 choices[31][1] = "Fortran";
 choices[31][2] = "Ruby";
 choices[31][3] = "Ada";
 answers[31] = 3;
 units[31] = ['73'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 734. AGE A1 2015";
 preguntaids[31] = 734


//  Id pregunta: 2898 Año de creación de pregunta: 2002
 questions[32]= "33)  Indicar cu&aacute;l de los siguientes no es un modelo de miner&iacute;a de datos:";
 choices[32]= new Array();
 choices[32][0] = "De verificaci&oacute;n.";
 choices[32][1] = "De descubrimiento.";
 choices[32][2] = "De predicci&oacute;n.";
 choices[32][3] = "De validaci&oacute;n.";
 answers[32] = 3;
 units[32] = ['72', '73'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2898. ";
 preguntaids[32] = 2898


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; es el machine learning?";
 choices[33]= new Array();
 choices[33][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[33][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[33][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[33][3] = "Un paradigma en el desarrollo de mecanismos de control";
 answers[33] = 0;
 units[33] = ['73'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 755. Big Data y NoSQL";
 preguntaids[33] = 755


//  Id pregunta: 6004 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;Para cu&aacute;les de los siguientes sistemas se debe configurar la base de datos optimizando las inserciones, modificaciones y borrado de datos y asegurando un alto nivel de concurrencia?";
 choices[34]= new Array();
 choices[34][0] = "OLTP (sistemas transaccionales on line).";
 choices[34][1] = "DSS (sistemas de soporte a la decisi&oacute;n).";
 choices[34][2] = "Data Warehouse (almacenes de datos).";
 choices[34][3] = "ERP (sistemas de planificaci&oacute;n de recursos).";
 answers[34] = 0;
 units[34] = ['72', '73'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 6004. TIC B 2007";
 preguntaids[34] = 6004


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[35]= "36)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[35]= new Array();
 choices[35][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[35][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[35][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[35][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[35] = 2;
 units[35] = ['73'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 750. Big Data y NoSQL";
 preguntaids[35] = 750


//  Id pregunta: 10143 Año de creación de pregunta: 2015
 questions[36]= "37)  Dentro de las soluciones en el &aacute;mbito de BigData, la arquitectura Hadoop consta del m&oacute;dulo MapReduce que consiste en:";
 choices[36]= new Array();
 choices[36][0] = "Un framework para escribir aplicaciones que procesan grandes cantidades de datos en paralelo.";
 choices[36][1] = "Una base de datos no relacional y distribuida, con varios maestros, escalable y sin puntos &uacute;nicos de fallo.";
 choices[36][2] = "Un sistema de archivos distribuido que proporciona acceso de alto rendimiento a los datos de la aplicaci&oacute;n.";
 choices[36][3] = "Una infraestructura de data warehouse que proporciona los datos resumidos y consultas ad hoc.";
 answers[36] = 0;
 units[36] = ['73'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10143. Examen TIC A1 2014";
 preguntaids[36] = 10143


//  Id pregunta: 3041 Año de creación de pregunta: 2002
 questions[37]= "38)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[37]= new Array();
 choices[37][0] = "Modelo de descubrimiento.";
 choices[37][1] = "Modelo de verificaci&oacute;n.";
 choices[37][2] = "Modelo predictivo.";
 choices[37][3] = "Modelo de resumen.";
 answers[37] = 1;
 units[37] = ['72', '73'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3041. ";
 preguntaids[37] = 3041


//  Id pregunta: 3072 Año de creación de pregunta: 2002
 questions[38]= "39)  Un Data Mart es:";
 choices[38]= new Array();
 choices[38][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[38][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[38][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[38][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[38] = 1;
 units[38] = ['72', '73'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3072. ";
 preguntaids[38] = 3072


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[39]= "40)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[39]= new Array();
 choices[39][0] = "Gran volumen de informaci&oacute;n";
 choices[39][1] = "Gran variedad de datos";
 choices[39][2] = "Se analizan datos a gran velocidad";
 choices[39][3] = "Todas las anteriores son verdaderas";
 answers[39] = 3;
 units[39] = ['73'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 745. Big Data y NoSQL";
 preguntaids[39] = 745


//  Id pregunta: 5434 Año de creación de pregunta: 2007
 questions[40]= "41)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[40]= new Array();
 choices[40][0] = "RSA";
 choices[40][1] = "RW";
 choices[40][2] = "Diffie-Hellman";
 choices[40][3] = "DSAE";
 answers[40] = 3;
 units[40] = ['73'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 5434. ";
 preguntaids[40] = 5434


//  Id pregunta: 10703 Año de creación de pregunta: 2015
 questions[41]= "42)  Indique la FALSA respecto al concepto MapReduce.";
 choices[41]= new Array();
 choices[41][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[41][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[41][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[41][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[41] = 2;
 units[41] = ['73'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 10703. ";
 preguntaids[41] = 10703


//  Id pregunta: 8998 Año de creación de pregunta: 2014
 questions[42]= "43)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[42]= new Array();
 choices[42][0] = "MariaBD";
 choices[42][1] = "Apache Cassandra";
 choices[42][2] = "Heidi";
 choices[42][3] = "Ingres";
 answers[42] = 1;
 units[42] = ['73'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8998. ";
 preguntaids[42] = 8998


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[43]= new Array();
 choices[43][0] = "Avro";
 choices[43][1] = "Sqoop";
 choices[43][2] = "UIMA";
 choices[43][3] = "Jaql";
 answers[43] = 1;
 units[43] = ['73'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 758. Big Data y NoSQL";
 preguntaids[43] = 758


//  Id pregunta: 10117 Año de creación de pregunta: 2015
 questions[44]= "45)  Apache Hadoop es un framework de software que implementa un sistema de ficheros que se inspir&oacute; en:";
 choices[44]= new Array();
 choices[44][0] = "HP Data File System.";
 choices[44][1] = "Google File System.";
 choices[44][2] = "Network File System.";
 choices[44][3] = "High Density File System.";
 answers[44] = 1;
 units[44] = ['73'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10117. Examen TIC A1 2014";
 preguntaids[44] = 10117


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[45]= new Array();
 choices[45][0] = "Yarn";
 choices[45][1] = "Flume";
 choices[45][2] = "Hive";
 choices[45][3] = "BizAgi";
 answers[45] = 3;
 units[45] = ['73'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 753. Big Data y NoSQL";
 preguntaids[45] = 753


//  Id pregunta: 5818 Año de creación de pregunta: 2007
 questions[46]= "47)  En el &aacute;mbito de la miner&iacute;a de datos &iquest;c&oacute;mo se llama la herramienta con la que se establecen relaciones entre elementos?";
 choices[46]= new Array();
 choices[46][0] = "Clasificaci&oacute;n.";
 choices[46][1] = "Asociaci&oacute;n.";
 choices[46][2] = "Agrupaci&oacute;n.";
 choices[46][3] = "Secuenciaci&oacute;n.";
 answers[46] = 2;
 units[46] = ['72', '73'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 5818. Examen 2006 JCYL";
 preguntaids[46] = 5818


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[47]= "48)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[47]= new Array();
 choices[47][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[47][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[47][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[47][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[47] = 1;
 units[47] = ['73'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 741. Big Data y NoSQL";
 preguntaids[47] = 741


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[48]= "49)  Cu&aacute;l de las siguientes afirmaciones sobre MongoDB es CORRECTA:";
 choices[48]= new Array();
 choices[48][0] = "Permite el uso de instrucciones SQL.";
 choices[48][1] = "El equivalente en MongoDB a una tabla de un RDBMS se denomina Documento.";
 choices[48][2] = "Utiliza BSON con formato de serializaci&oacute;n para almacenar los datos.";
 choices[48][3] = "Soporta transacciones sobre m&uacute;ltiples documentos.";
 answers[48] = 2;
 units[48] = ['73'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 738. AGE A2 2015";
 preguntaids[48] = 738


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[49]= new Array();
 choices[49][0] = "NoSQL";
 choices[49][1] = "Sistemas de baja latencia";
 choices[49][2] = "MapReduce";
 choices[49][3] = "Business Intelligence";
 answers[49] = 1;
 units[49] = ['73'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 756. Big Data y NoSQL";
 preguntaids[49] = 756


//  Id pregunta: 9125 Año de creación de pregunta: 2014
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[50]= new Array();
 choices[50][0] = "Citrix";
 choices[50][1] = "Oracle";
 choices[50][2] = "MySql Extend";
 choices[50][3] = "Cassandra";
 answers[50] = 3;
 units[50] = ['73'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9125. Examen TIC A2 2013";
 preguntaids[50] = 9125


//  Id pregunta: 5510 Año de creación de pregunta: 2007
 questions[51]= "52)  Cu&aacute;l es la longitud de la clave utilizada por el sistema criptogr&aacute;fico sim&eacute;trico DES?";
 choices[51]= new Array();
 choices[51][0] = "56 Bits";
 choices[51][1] = "168 Bits";
 choices[51][2] = "256 Bits.";
 choices[51][3] = "Puede ser cualquiera, pero la habitual es 1.024 Bits.";
 answers[51] = 0;
 units[51] = ['73'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 5510. ";
 preguntaids[51] = 5510


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[52]= "53)  En qu&eacute; consiste el principio BASE:";
 choices[52]= new Array();
 choices[52][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[52][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[52][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[52][3] = "Todas las anteriores son falsas";
 answers[52] = 3;
 units[52] = ['73'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 743. Big Data y NoSQL";
 preguntaids[52] = 743


//  Id pregunta: 10701 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Twitter?";
 choices[53]= new Array();
 choices[53][0] = "Hive";
 choices[53][1] = "Cassandra";
 choices[53][2] = "Hbase";
 choices[53][3] = "ZoneKeeper";
 answers[53] = 1;
 units[53] = ['73'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10701. ";
 preguntaids[53] = 10701


//  Id pregunta: 3094 Año de creación de pregunta: 2002
 questions[54]= "55)  Una base de datos multidimensional:";
 choices[54]= new Array();
 choices[54][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[54][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[54][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[54][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[54] = 1;
 units[54] = ['72', '73'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3094. ";
 preguntaids[54] = 3094


//  Id pregunta: 3069 Año de creación de pregunta: 2002
 questions[55]= "56)  Un almac&eacute;n de datos o &quot;data warehouse&quot;:";
 choices[55]= new Array();
 choices[55][0] = "Integra datos de diferentes sistemas de informaci&oacute;n de la organizaci&oacute;n para permitir su an&aacute;lisis posterior por la Direcci&oacute;n.";
 choices[55][1] = "Recopila datos de diferentes &quot;data marts&quot; para permitir su an&aacute;lisis por la Direcci&oacute;n mediante herramientas OLAP.";
 choices[55][2] = "Integra todas las bases de datos que existen en una organizaci&oacute;n para su consulta por la Direcci&oacute;n.";
 choices[55][3] = "Es una base de datos que contiene metainformaci&oacute;n sobre las bases de datos que existen en la organizaci&oacute;n.";
 answers[55] = 0;
 units[55] = ['72', '73'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3069. ";
 preguntaids[55] = 3069


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l es un Framework Java inspirado en la tecnolog&iacute;a Map-Reduce, que utiliza HDFS para el almacenamiento y est&aacute; dise&ntilde;ado para escribir trabajos que procesan enormes cantidades de datos y que da muy buenos resultados en aplicaciones Big Data?";
 choices[56]= new Array();
 choices[56][0] = "MongoDB.";
 choices[56][1] = "Pig Latin.";
 choices[56][2] = "Hadoop.";
 choices[56][3] = "Apache Cassandra.";
 answers[56] = 2;
 units[56] = ['73'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 739. AGE A2 2015";
 preguntaids[56] = 739


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[57]= "58)  Son bases de datos NoSQL orientadas a objetos:";
 choices[57]= new Array();
 choices[57][0] = "GemStone";
 choices[57][1] = "Zope Object DB";
 choices[57][2] = "Las dos anteriores";
 choices[57][3] = "Solo B)";
 answers[57] = 2;
 units[57] = ['73'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 747. Big Data y NoSQL";
 preguntaids[57] = 747


