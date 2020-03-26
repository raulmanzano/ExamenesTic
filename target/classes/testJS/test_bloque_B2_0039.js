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
//  Id pregunta: 9077 Año de creación de pregunta: 2014
 questions[0]= "1)  Un almac&eacute;n de datos almacena:";
 choices[0]= new Array();
 choices[0][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[0][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[0][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[0][3] = "B y C son correctas.";
 answers[0] = 3;
 units[0] = ['72'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9077. ";
 preguntaids[0] = 9077


//  Id pregunta: 9059 Año de creación de pregunta: 2014
 questions[1]= "2)  La gesti&oacute;n NUMA:";
 choices[1]= new Array();
 choices[1][0] = "Significa Not Uniform Memory Access.";
 choices[1][1] = "Significa Not Unit of Memory Available.";
 choices[1][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[1][3] = "La a) y la c)";
 answers[1] = 3;
 units[1] = ['49'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9059. ";
 preguntaids[1] = 9059


//  Id pregunta: 9086 Año de creación de pregunta: 2014
 questions[2]= "3)  La programaci&oacute;n funcional limita el uso de";
 choices[2]= new Array();
 choices[2][0] = "estados mutables.";
 choices[2][1] = "expresiones lambda.";
 choices[2][2] = "procedimientos como par&aacute;metros.";
 choices[2][3] = "lenguajes como Erlang, F# o Scala.";
 answers[2] = 0;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9086. Examen TIC-A1 2013";
 preguntaids[2] = 9086


//  Id pregunta: 9078 Año de creación de pregunta: 2014
 questions[3]= "4)  Un Datamart:";
 choices[3]= new Array();
 choices[3][0] = "Es una Base de Datos.";
 choices[3][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[3][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[3][3] = "Todas son falsas.";
 answers[3] = 2;
 units[3] = ['72'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9078. ";
 preguntaids[3] = 9078


//  Id pregunta: 9014 Año de creación de pregunta: 2014
 questions[4]= "5)  Las fibras (threads) en el SO Windows...";
 choices[4]= new Array();
 choices[4][0] = "Se ejecutan en modo usuario";
 choices[4][1] = "Usan multitarea preemptiva";
 choices[4][2] = "Usan multitarea colaborativa";
 choices[4][3] = "a) y c) son ciertas";
 answers[4] = 3;
 units[4] = ['58'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9014. ";
 preguntaids[4] = 9014


//  Id pregunta: 9057 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[5]= new Array();
 choices[5][0] = "MISD y SISD";
 choices[5][1] = "SIMD y SISD";
 choices[5][2] = "MIMD y MISD";
 choices[5][3] = "SISD y MISD";
 answers[5] = 1;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9057. ";
 preguntaids[5] = 9057


//  Id pregunta: 9074 Año de creación de pregunta: 2014
 questions[6]= "7)  Las proyecciones (Georreferenciaci&oacute;n Directa):";
 choices[6]= new Array();
 choices[6][0] = "Son proyecciones cil&iacute;ndricas: Proyecci&oacute;n de Mercator, Proyecci&oacute;n de Peter, Proyecci&oacute;n ortogr&aacute;fica y la Proyecci&oacute;n conforme de Lambert.";
 choices[6][1] = "Son proyecciones azimutales: proyecci&oacute;n azimutal, proyecci&oacute;n azimutal de Lambert, proyecci&oacute;n gnom&oacute;nica y proyecci&oacute;n azimutal m&uacute;ltiple.";
 choices[6][2] = "Son proyecciones c&oacute;nicas: proyecci&oacute;n c&oacute;nica simple, proyecci&oacute;n conforme de Lambert y proyecci&oacute;n c&oacute;nica m&uacute;ltiple.";
 choices[6][3] = "Son proyecciones estereogr&aacute;ficas: proyecci&oacute;n estereogr&aacute;fica, proyecci&oacute;n ortogr&aacute;fica, proyecciones modificadas y proyecci&oacute;n conforme gnom&oacute;nica.";
 answers[6] = 2;
 units[6] = ['71'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9074. ";
 preguntaids[6] = 9074


//  Id pregunta: 9127 Año de creación de pregunta: 2014
 questions[7]= "8)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;A qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[7]= new Array();
 choices[7][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[7][1] = "Algoritmos de regresi&oacute;n.";
 choices[7][2] = "Algoritmos de segmentaci&oacute;n.";
 choices[7][3] = "Algoritmos de asociaci&oacute;n.";
 answers[7] = 0;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9127. Examen TIC A2 2013";
 preguntaids[7] = 9127


//  Id pregunta: 9087 Año de creación de pregunta: 2014
 questions[8]= "9)  El modelo Vectorial de representaci&oacute;n de datos espaciales";
 choices[8]= new Array();
 choices[8][0] = "facilita establecer relaciones topol&oacute;gicas entre los elementos.";
 choices[8][1] = "utiliza s&oacute;lo dos elementos geom&eacute;tricos (puntos y l&iacute;neas) para modelar digitalmente las entidades del mundo real.";
 choices[8][2] = "divide el espacio en celdas regulares donde cada una de ellas es ubicada por un vector.";
 choices[8][3] = "almacena los datos mediante el formato vectorial de base de datos BLOB.";
 answers[8] = 0;
 units[8] = ['71'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9087. Examen TIC-A1 2013";
 preguntaids[8] = 9087


//  Id pregunta: 9067 Año de creación de pregunta: 2014
 questions[9]= "10)  Se&ntilde;ale la respuesta correcta:";
 choices[9]= new Array();
 choices[9][0] = "La altitud es la distancia vertical desde un punto de referencia de la superficie terrestre.";
 choices[9][1] = "La altura es la distancia vertical a un origen determinado, considerado como nivel 0.";
 choices[9][2] = "La longitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 choices[9][3] = "La latitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 answers[9] = 3;
 units[9] = ['71'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9067. ";
 preguntaids[9] = 9067


//  Id pregunta: 9101 Año de creación de pregunta: 2014
 questions[10]= "11)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[10]= new Array();
 choices[10][0] = "RAID 1";
 choices[10][1] = "RAID 3";
 choices[10][2] = "RAID 4";
 choices[10][3] = "RAID 6";
 answers[10] = 2;
 units[10] = ['53'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9101. Examen TIC-A1 2013";
 preguntaids[10] = 9101


//  Id pregunta: 9047 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cu&aacute;l no es un requisitos de los MOOC (Massive Open Online Course)?";
 choices[11]= new Array();
 choices[11][0] = "Ser un curso";
 choices[11][1] = "Tener car&aacute;cter masivo";
 choices[11][2] = "Online";
 choices[11][3] = "Todas las anteriores";
 answers[11] = 3;
 units[11] = ['70'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9047. ";
 preguntaids[11] = 9047


//  Id pregunta: 9080 Año de creación de pregunta: 2014
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[12]= new Array();
 choices[12][0] = "Modelo en estrella.";
 choices[12][1] = "Modelo Copo de nieve.";
 choices[12][2] = "Constelaciones.";
 choices[12][3] = "Todos son modelos dimensionales.";
 answers[12] = 3;
 units[12] = ['72'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9080. ";
 preguntaids[12] = 9080


//  Id pregunta: 9126 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?";
 choices[13]= new Array();
 choices[13][0] = "SELECT";
 choices[13][1] = "DRILL";
 choices[13][2] = "CUBE";
 choices[13][3] = "MEMBER";
 answers[13] = 1;
 units[13] = ['60'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9126. Examen TIC A2 2013";
 preguntaids[13] = 9126


//  Id pregunta: 9106 Año de creación de pregunta: 2014
 questions[14]= "15)  ANSI/ISO SQL define ciertos niveles de aislamiento en transacciones en funci&oacute;n de qu&eacute; fen&oacute;menos puede que ocurran. Indique la respuesta correcta respecto al fen&oacute;meno &quot;lectura fantasma&quot;:";
 choices[14]= new Array();
 choices[14][0] = "Se permite en read uncommitted, read committed y repeatable read, pero no se permite en serializable.";
 choices[14][1] = "Se permite en read uncommitted y read committed, pero no se permite en repeatable read ni en serializable.";
 choices[14][2] = "Se permite en read uncommitted y repeatable read, pero no se permite en read committed ni en serializable.";
 choices[14][3] = "Se permite en read uncommitted, pero no se permite en read committed, repeatable read ni en serializable.";
 answers[14] = 0;
 units[14] = ['60'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9106. Examen TIC A2 2013";
 preguntaids[14] = 9106


//  Id pregunta: 9031 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Qu&eacute; se conoce como CPU Throttling en IIS 8.0?";
 choices[15]= new Array();
 choices[15][0] = "A reducir autom&aacute;ticamente la frecuencia de trabajo de la CPU para evitar el calentamiento de la m&aacute;quina";
 choices[15][1] = "A la asignaci&oacute;n de CPU a cada proceso en un entorno multiprocesador";
 choices[15][2] = "A los fallos de CPU ante una sobrecarga de trabajo";
 choices[15][3] = "A la limitaci&oacute;n autom&aacute;tica de los recursos de CPU entre los tenants del sistema";
 answers[15] = 3;
 units[15] = ['58'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9031. La respuesta A es el concepto original de CPU throttling, la D es lo que se entiende en un entorno de hosting";
 preguntaids[15] = 9031


//  Id pregunta: 9070 Año de creación de pregunta: 2014
 questions[16]= "17)  KML:";
 choices[16]= new Array();
 choices[16][0] = "Es un lenguaje de marcado basado en XML para representar datos geogr&aacute;ficos en tres dimensiones.";
 choices[16][1] = "Es un conjunto de est&aacute;ndares para representar informaci&oacute;n geogr&aacute;fica mediante el uso de capas y est&aacute; construido dentro de la familia de formatos XML.";
 choices[16][2] = "Se crea en contraposici&oacute;n a la gram&aacute;tica de GML.";
 choices[16][3] = "Fue desarrollado para ser manejado con Keyoverlay LT, precursor de Google Earth.";
 answers[16] = 0;
 units[16] = ['71'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9070. ";
 preguntaids[16] = 9070


//  Id pregunta: 9024 Año de creación de pregunta: 2014
 questions[17]= "18)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[17]= new Array();
 choices[17][0] = "chmod u+s /directorio/fichero";
 choices[17][1] = "chmog g+s /directorio";
 choices[17][2] = "chmod 177 /directorio";
 choices[17][3] = "chmod +t /directorio";
 answers[17] = 3;
 units[17] = ['57'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9024. Examen TIC A1 2013";
 preguntaids[17] = 9024


//  Id pregunta: 9103 Año de creación de pregunta: 2014
 questions[18]= "19)  Los grandes sistemas, tambi&eacute;n llamados mainframe";
 choices[18]= new Array();
 choices[18][0] = "son desarrollados por muchos fabricantes.";
 choices[18][1] = "usan memoria distribuida y no compartida.";
 choices[18][2] = "son soluciones altamente propietarias.";
 choices[18][3] = "son sistemas d&eacute;bilmente acoplados.";
 answers[18] = 2;
 units[18] = ['50'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9103. Examen TIC-A1 2013";
 preguntaids[18] = 9103


//  Id pregunta: 9061 Año de creación de pregunta: 2014
 questions[19]= "20)  En un cl&uacute;ster:";
 choices[19]= new Array();
 choices[19][0] = "Puede elegirse el porcentaje de procesamiento que cada nodo dedica al cl&uacute;ster.";
 choices[19][1] = "El algoritmo que distribuye el trabajo entre los nodos se conoce como 'Gang Scheduling'.";
 choices[19][2] = "El middleware m&aacute;s utilizado es Xware.";
 choices[19][3] = "Los nodos comparten una memoria central.";
 answers[19] = 1;
 units[19] = ['49'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9061. ";
 preguntaids[19] = 9061


//  Id pregunta: 9096 Año de creación de pregunta: 2014
 questions[20]= "21)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[20]= new Array();
 choices[20][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[20][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[20][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[20][3] = "las opciones a, b y c son ciertas.";
 answers[20] = 3;
 units[20] = ['61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9096. Examen TIC-A1 2013";
 preguntaids[20] = 9096


//  Id pregunta: 9116 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[21]= new Array();
 choices[21][0] = "Contexts and Dependency Injection.";
 choices[21][1] = "Common Display Interface.";
 choices[21][2] = "Context-Dependent Interface.";
 choices[21][3] = "Case-Driven Implementation.";
 answers[21] = 0;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9116. Examen TIC A2 2013";
 preguntaids[21] = 9116


//  Id pregunta: 9060 Año de creación de pregunta: 2014
 questions[22]= "23)  Los sistemas multicomputador pueden dividirse, seg&uacute;n la taxonom&iacute;a de Flynn en:";
 choices[22]= new Array();
 choices[22][0] = "SISD, SIMD, MISD y MIMD.";
 choices[22][1] = "UMA y NUMA.";
 choices[22][2] = "MMC y MMD.";
 choices[22][3] = "Ninguna de las anteriores.";
 answers[22] = 3;
 units[22] = ['49'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9060. ";
 preguntaids[22] = 9060


//  Id pregunta: 9071 Año de creación de pregunta: 2014
 questions[23]= "24)  Son tipos de mapas:";
 choices[23]= new Array();
 choices[23][0] = "Topogr&aacute;fico, topol&oacute;gico, tem&aacute;tico y superficial.";
 choices[23][1] = "Topogr&aacute;fico, azimutal, tem&aacute;tico y plano.";
 choices[23][2] = "Referencial, topol&oacute;gico, tem&aacute;tico y plano.";
 choices[23][3] = "Cil&iacute;ndrico, azimutal, c&oacute;nico y estereogr&aacute;fico.";
 answers[23] = 2;
 units[23] = ['71'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9071. ";
 preguntaids[23] = 9071


//  Id pregunta: 9076 Año de creación de pregunta: 2014
 questions[24]= "25)  En Georeferenciaci&oacute;n, las funciones que deben ser desempe&ntilde;adas por los metadatos son:";
 choices[24]= new Array();
 choices[24][0] = "Descubrimiento, exploraci&oacute;n y acceso.";
 choices[24][1] = "Localizaci&oacute;n inicial, exploraci&oacute;n y carga de los datos.";
 choices[24][2] = "Localizaci&oacute;n inicial, exploraci&oacute;n, carga de los datos e interpretaci&oacute;n.";
 choices[24][3] = "Descubrimiento, exploraci&oacute;n y explotaci&oacute;n.";
 answers[24] = 3;
 units[24] = ['71'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9076. ";
 preguntaids[24] = 9076


//  Id pregunta: 9025 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[25]= new Array();
 choices[25][0] = "Metacity de GNOME";
 choices[25][1] = "KWIN de KDE";
 choices[25][2] = "GTK de CDE";
 choices[25][3] = "Enlightenment de GNOME";
 answers[25] = 2;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9025. Examen TIC A1 2013";
 preguntaids[25] = 9025


//  Id pregunta: 9030 Año de creación de pregunta: 2014
 questions[26]= "27)  &iquest;C&oacute;mo puede ejecutarse Windows 2012 Server en procesadores de 32 bits?";
 choices[26]= new Array();
 choices[26][0] = "No puede";
 choices[26][1] = "Con una versi&oacute;n espec&iacute;fica para estos procesadores";
 choices[26][2] = "Con un programa de emulaci&oacute;n";
 choices[26][3] = "Con una m&aacute;quina virtual";
 answers[26] = 0;
 units[26] = ['58'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9030. ";
 preguntaids[26] = 9030


//  Id pregunta: 9125 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[27]= new Array();
 choices[27][0] = "Citrix";
 choices[27][1] = "Oracle";
 choices[27][2] = "MySql Extend";
 choices[27][3] = "Cassandra";
 answers[27] = 3;
 units[27] = ['73'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9125. Examen TIC A2 2013";
 preguntaids[27] = 9125


//  Id pregunta: 9104 Año de creación de pregunta: 2014
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[28]= new Array();
 choices[28][0] = "Bird.";
 choices[28][1] = "Hibernate.";
 choices[28][2] = "Maverick.";
 choices[28][3] = "Spring.";
 answers[28] = 0;
 units[28] = ['66'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9104. Examen TIC-A1 2013";
 preguntaids[28] = 9104


//  Id pregunta: 9063 Año de creación de pregunta: 2014
 questions[29]= "30)  La arquitectura del Grid se compone de las siguientes capas:";
 choices[29]= new Array();
 choices[29][0] = "Capa de red, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[29][1] = "Capa de red, de &ldquo;middleware&rdquo;, de recursos y de aplicaci&oacute;n.";
 choices[29][2] = "Capa de recursos, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[29][3] = "Ninguna de las anteriores.";
 answers[29] = 1;
 units[29] = ['49'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9063. ";
 preguntaids[29] = 9063


//  Id pregunta: 9011 Año de creación de pregunta: 2014
 questions[30]= "31)  &iquest;Desde qu&eacute; versi&oacute;n del SO Windows est&aacute; disponible la funcionalidad de bitlocker para USB?";
 choices[30]= new Array();
 choices[30][0] = "Windows XP";
 choices[30][1] = "Windows Vista";
 choices[30][2] = "Windows 7";
 choices[30][3] = "Windows 8";
 answers[30] = 2;
 units[30] = ['58'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9011. ";
 preguntaids[30] = 9011


//  Id pregunta: 9081 Año de creación de pregunta: 2014
 questions[31]= "32)  Un problema del modelo dimensional es:";
 choices[31]= new Array();
 choices[31][0] = "Data Expression.";
 choices[31][1] = "Data Complexity.";
 choices[31][2] = "Data Sparsity.";
 choices[31][3] = "Data Compression.";
 answers[31] = 2;
 units[31] = ['72'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9081. ";
 preguntaids[31] = 9081


//  Id pregunta: 9062 Año de creación de pregunta: 2014
 questions[32]= "33)  En Grid Computing:";
 choices[32]= new Array();
 choices[32][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[32][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[32][2] = "Son sistemas heterog&eacute;neos.";
 choices[32][3] = "Todas las anteriores.";
 answers[32] = 3;
 units[32] = ['49'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9062. ";
 preguntaids[32] = 9062


//  Id pregunta: 9029 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[33]= new Array();
 choices[33][0] = "256";
 choices[33][1] = "512";
 choices[33][2] = "1024";
 choices[33][3] = "2048";
 answers[33] = 2;
 units[33] = ['58'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9029. ";
 preguntaids[33] = 9029


//  Id pregunta: 9053 Año de creación de pregunta: 2014
 questions[34]= "35)  Los sistemas multiprocesador:";
 choices[34]= new Array();
 choices[34][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[34][1] = "Sus procesadores no dependen unos de otros.";
 choices[34][2] = "Son sistemas fuertemente acoplados.";
 choices[34][3] = "Ninguna de las anteriores.";
 answers[34] = 2;
 units[34] = ['49'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9053. ";
 preguntaids[34] = 9053


//  Id pregunta: 9069 Año de creación de pregunta: 2014
 questions[35]= "36)  En relaci&oacute;n con las t&eacute;cnicas de compresi&oacute;n y organizaci&oacute;n en SIG raster, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[35]= new Array();
 choices[35][0] = "RLE (Run Length Encode) se basa en estructuras de datos orientadas a la indexaci&oacute;n espacial en las que se procede a la divisi&oacute;n recursiva de la informaci&oacute;n de partida en bloques (cuadrantes).";
 choices[35][1] = "Las t&eacute;cnicas 'Quadtrees' son m&aacute;s complejas que las RLE pero m&aacute;s eficientes.";
 choices[35][2] = "Wavelets se basa en la compresi&oacute;n de patrones y hace factible la transmisi&oacute;n a trav&eacute;s de Internet con tiempos de respuesta muy aceptables.";
 choices[35][3] = "La t&eacute;cnica m&aacute;s elemental es almacenar secuencialmente los valores del atributo en las sucesivas celdas de acuerdo a la secuencia de barrido de la imagen.";
 answers[35] = 0;
 units[35] = ['71'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9069. ";
 preguntaids[35] = 9069


//  Id pregunta: 9068 Año de creación de pregunta: 2014
 questions[36]= "37)  En la comparaci&oacute;n en una proyecci&oacute;n Mercator del un &aacute;rea del Atl&aacute;ntico Norte, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[36]= new Array();
 choices[36][0] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n el c&iacute;rculo m&aacute;ximo terrestre o distancia m&aacute;s corta curva en el mapa.";
 choices[36][1] = "El rumbo ortodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[36][2] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[36][3] = "No existen tales conceptos en la proyecci&oacute;n de Mercator.";
 answers[36] = 2;
 units[36] = ['71'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9068. ";
 preguntaids[36] = 9068


//  Id pregunta: 9073 Año de creación de pregunta: 2014
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes opciones representa tipolog&iacute;as de sistemas SIG?";
 choices[37]= new Array();
 choices[37][0] = "SIG empresarial, SIG de sobremesa, Visualizadores SIG y WebSIG.";
 choices[37][1] = "SIG de componentes, Gesti&oacute;n Catastral y Servicios Posicionales.";
 choices[37][2] = "Ninguna es correcta.";
 choices[37][3] = "Son correctas a y b.";
 answers[37] = 2;
 units[37] = ['71'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9073. ";
 preguntaids[37] = 9073


//  Id pregunta: 9117 Año de creación de pregunta: 2014
 questions[38]= "39)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[38]= new Array();
 choices[38][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[38][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[38][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[38][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[38] = 3;
 units[38] = ['63'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9117. Examen TIC A2 2013";
 preguntaids[38] = 9117


//  Id pregunta: 9072 Año de creación de pregunta: 2014
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes opciones representa elementos dentro de un GIS?";
 choices[39]= new Array();
 choices[39][0] = "Hardware, software, georreferenciaci&oacute;n, equipo cient&iacute;fico y procedimientos.";
 choices[39][1] = "Hardware, software, datos geogr&aacute;ficos, equipo humano y capas tem&aacute;ticas.";
 choices[39][2] = "Proyecci&oacute;n, georreferenciaci&oacute;n, programas, datos espaciales y equipo cient&iacute;fico.";
 choices[39][3] = "Hardware, software, informaci&oacute;n geogr&aacute;fica, equipo humano y procedimientos.";
 answers[39] = 3;
 units[39] = ['71'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9072. ";
 preguntaids[39] = 9072


//  Id pregunta: 9046 Año de creación de pregunta: 2014
 questions[40]= "41)  El sistema operativo OS X de Apple se llama:";
 choices[40]= new Array();
 choices[40][0] = "Maverick";
 choices[40][1] = "Mavericks";
 choices[40][2] = "Cocoa";
 choices[40][3] = "Kit Kat";
 answers[40] = 1;
 units[40] = ['59'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9046. Maverick es el framework de java para desarrollo web";
 preguntaids[40] = 9046


//  Id pregunta: 9055 Año de creación de pregunta: 2014
 questions[41]= "42)  La taxonom&iacute;a de Flynn:";
 choices[41]= new Array();
 choices[41][0] = "Es una clasificaci&oacute;n cl&aacute;sica de computadores en funci&oacute;n de su arquitectura.";
 choices[41][1] = "Se basa en el flujo que siguen los datos y las instrucciones dentro de una m&aacute;quina.";
 choices[41][2] = "Se divide en cuatro categor&iacute;as.";
 choices[41][3] = "Todas las anteriores.";
 answers[41] = 3;
 units[41] = ['49'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9055. ";
 preguntaids[41] = 9055


//  Id pregunta: 9094 Año de creación de pregunta: 2014
 questions[42]= "43)  En referencia a la tecnolog&iacute;a CORBA (Common Object Request Broker Architecture) es INCORRECTO que";
 choices[42]= new Array();
 choices[42][0] = "El protocolo de comunicaciones en el que se basa se denomina GIOP (General InterORB Protocol)";
 choices[42][1] = "El lenguaje para especificaciones de interfaces se denomina IPOL (Independent Platform Object Language).";
 choices[42][2] = "Se basa en un modelo de arquitectura distribuida para entornos heterog&eacute;neos";
 choices[42][3] = "Es una propuesta del Object Management Group.";
 answers[42] = 1;
 units[42] = ['55'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9094. Examen TIC-A1 2013";
 preguntaids[42] = 9094


//  Id pregunta: 9016 Año de creación de pregunta: 2014
 questions[43]= "44)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[43]= new Array();
 choices[43][0] = "En actualizar la tabla de p&aacute;ginas, se pide una p&aacute;gina que ya est&aacute; en memoria";
 choices[43][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[43][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[43][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[43] = 0;
 units[43] = ['56'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9016. ";
 preguntaids[43] = 9016


//  Id pregunta: 9075 Año de creación de pregunta: 2014
 questions[44]= "45)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[44]= new Array();
 choices[44][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[44][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[44][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[44][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[44] = 2;
 units[44] = ['71'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9075. ";
 preguntaids[44] = 9075


//  Id pregunta: 9058 Año de creación de pregunta: 2014
 questions[45]= "46)  La ley de Amdahl demuestra que:";
 choices[45]= new Array();
 choices[45][0] = "Cuantas m&aacute;s CPUs, m&aacute;s productividad.";
 choices[45][1] = "La productividad depende de la parte que sea paralelizable.";
 choices[45][2] = "Cuanto m&aacute;s c&oacute;digo, m&aacute;s CPUs hacen falta.";
 choices[45][3] = "El n&uacute;mero de procesadores es igual al n&uacute;mero de ALUs.";
 answers[45] = 1;
 units[45] = ['49'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9058. ";
 preguntaids[45] = 9058


//  Id pregunta: 9013 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;En qu&eacute; parte del SO Windows se encuentra el Dispatcher?";
 choices[46]= new Array();
 choices[46][0] = "Ejecutivo";
 choices[46][1] = "Microkernel";
 choices[46][2] = "HAL";
 choices[46][3] = "Drivers";
 answers[46] = 1;
 units[46] = ['58'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9013. ";
 preguntaids[46] = 9013


//  Id pregunta: 9026 Año de creación de pregunta: 2014
 questions[47]= "48)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[47]= new Array();
 choices[47][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[47][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[47][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[47][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[47] = 2;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9026. Examen TIC A1 2013";
 preguntaids[47] = 9026


//  Id pregunta: 9021 Año de creación de pregunta: 2014
 questions[48]= "49)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[48]= new Array();
 choices[48][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[48][1] = "Siempre es de corta duraci&oacute;n";
 choices[48][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[48][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[48] = 0;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9021. Examen TIC A1 2013";
 preguntaids[48] = 9021


//  Id pregunta: 9079 Año de creación de pregunta: 2014
 questions[49]= "50)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[49][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[49][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[49][3] = "A es falsa.";
 answers[49] = 0;
 units[49] = ['72'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9079. ";
 preguntaids[49] = 9079


//  Id pregunta: 9017 Año de creación de pregunta: 2014
 questions[50]= "51)  &iquest;En qu&eacute; consisten los segmentos de memoria virtual en el Sistema Operativo Windows?";
 choices[50]= new Array();
 choices[50][0] = "Bloques de memoria virtual de longitud variable que pertenecen al mismo proceso";
 choices[50][1] = "Bloques de memoria virtual de longitud fija que pertenecen al mismo proceso";
 choices[50][2] = "Bloques memoria virtual de longitud fija que no tienen relaci&oacute;n entre ellos";
 choices[50][3] = "Ninguno de los anteriores";
 answers[50] = 3;
 units[50] = ['58'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9017. Windows no usa memoria virtual segmentada, s&oacute;lo paginada";
 preguntaids[50] = 9017


//  Id pregunta: 9118 Año de creación de pregunta: 2014
 questions[51]= "52)  Se&ntilde;ale, entre los siguientes, cu&aacute;l es un cliente WebDAV de l&iacute;nea de comandos para entornos Unix:";
 choices[51]= new Array();
 choices[51][0] = "cadaver";
 choices[51][1] = "audacity";
 choices[51][2] = "mahout";
 choices[51][3] = "CalDAV";
 answers[51] = 0;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9118. Examen TIC A2 2013";
 preguntaids[51] = 9118


//  Id pregunta: 9034 Año de creación de pregunta: 2014
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes proyectos est&aacute; relacionado con el intercambio de contenidos docentes y la coordinaci&oacute;n entre promotores de formaci&oacute;n en la Administraci&oacute;n General del Estado?";
 choices[52]= new Array();
 choices[52][0] = "Comp@rte";
 choices[52][1] = "Racionaliz@";
 choices[52][2] = "Compartir";
 choices[52][3] = "Educ@";
 answers[52] = 2;
 units[52] = ['70'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9034. ";
 preguntaids[52] = 9034


//  Id pregunta: 9054 Año de creación de pregunta: 2014
 questions[53]= "54)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[53]= new Array();
 choices[53][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[53][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[53][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[53][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[53] = 3;
 units[53] = ['49'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9054. ";
 preguntaids[53] = 9054


//  Id pregunta: 9028 Año de creación de pregunta: 2014
 questions[54]= "55)  &iquest;Qu&eacute; es IPAM en Windows 2012 Server?";
 choices[54]= new Array();
 choices[54][0] = "IP Address Management";
 choices[54][1] = "Internet Proccess Advanced Management";
 choices[54][2] = "IP Access Management";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = 0;
 units[54] = ['58'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9028. ";
 preguntaids[54] = 9028


//  Id pregunta: 9066 Año de creación de pregunta: 2014
 questions[55]= "56)  Son est&aacute;ndares GIS:";
 choices[55]= new Array();
 choices[55][0] = "Para metadatos: FGDC Data Content Standard, ISO 19115 Metadatos, OpenGIS Catalog Service.";
 choices[55][1] = "Para servicio de entidades vectoriales: GML, Geography Markup Language (perfil de XML).";
 choices[55][2] = "Para Web Mapping: Open GIS Web Feature Service, ISO 19125 Simple Feature Access.";
 choices[55][3] = "Para protocolos de almacenamiento y transporte de informaci&oacute;n geogr&aacute;fica: OpenGIS Web Map Service (WMS).";
 answers[55] = 0;
 units[55] = ['71'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9066. ";
 preguntaids[55] = 9066


//  Id pregunta: 9065 Año de creación de pregunta: 2014
 questions[56]= "57)  Son servicios de una IDE:";
 choices[56]= new Array();
 choices[56][0] = "Servicios de mapas en Web (WMS), servicios de elementos en Web (WFS), servicios de coberturas en Web (WCS), servicios de conversi&oacute;n de coordenadas, servicios de cat&aacute;logos de datos.";
 choices[56][1] = "Servicios de nomenclator (gazetteer), descripci&oacute;n de estilo de capas (SLD).";
 choices[56][2] = "Servicios de metadatos, establecimiento de est&aacute;ndares, identificaci&oacute;n de marcos, establecimiento de acuerdos entre organismos para la producci&oacute;n de informaci&oacute;n espacial de inter&eacute;s conjunto.";
 choices[56][3] = "a, b y c son correctas.";
 answers[56] = 3;
 units[56] = ['71'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9065. ";
 preguntaids[56] = 9065


//  Id pregunta: 9097 Año de creación de pregunta: 2014
 questions[57]= "58)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[57]= new Array();
 choices[57][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[57][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[57][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[57][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[57] = 2;
 units[57] = ['77'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9097. Examen TIC-A1 2013";
 preguntaids[57] = 9097


//  Id pregunta: 9022 Año de creación de pregunta: 2014
 questions[58]= "59)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[58]= new Array();
 choices[58][0] = "ReFS";
 choices[58][1] = "NTFS";
 choices[58][2] = "HPFS";
 choices[58][3] = "CSFS";
 answers[58] = 0;
 units[58] = ['58'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9022. Examen TIC A1 2013";
 preguntaids[58] = 9022


//  Id pregunta: 9095 Año de creación de pregunta: 2014
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[59]= new Array();
 choices[59][0] = "CORBA es un tipo de middleware.";
 choices[59][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[59][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[59][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[59] = 0;
 units[59] = ['55'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9095. Examen TIC-A1 2013";
 preguntaids[59] = 9095


//  Id pregunta: 9042 Año de creación de pregunta: 2014
 questions[60]= "61)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[60]= new Array();
 choices[60][0] = "MSIL";
 choices[60][1] = "CIL";
 choices[60][2] = "CLS";
 choices[60][3] = "Bytecode";
 answers[60] = 1;
 units[60] = ['63'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9042. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";
 preguntaids[60] = 9042


//  Id pregunta: 9064 Año de creación de pregunta: 2014
 questions[61]= "62)  El serviceware permite:";
 choices[61]= new Array();
 choices[61][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[61][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[61][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[61][3] = "Controlar la red de comunicaciones del Grid.";
 answers[61] = 1;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9064. ";
 preguntaids[61] = 9064


//  Id pregunta: 9019 Año de creación de pregunta: 2014
 questions[62]= "63)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix:";
 choices[62]= new Array();
 choices[62][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz";
 choices[62][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario.";
 choices[62][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz.";
 choices[62][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido.";
 answers[62] = 2;
 units[62] = ['57'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9019. Examen TIC A1 2013";
 preguntaids[62] = 9019


//  Id pregunta: 9100 Año de creación de pregunta: 2014
 questions[63]= "64)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud Computing?";
 choices[63]= new Array();
 choices[63][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[63][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[63][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[63][3] = "Todas las respuestas anteriores son ciertas.";
 answers[63] = 3;
 units[63] = ['52'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9100. Examen TIC-A1 2013";
 preguntaids[63] = 9100


//  Id pregunta: 9045 Año de creación de pregunta: 2014
 questions[64]= "65)  El framework de JAVA para desarrollo web se llama:";
 choices[64]= new Array();
 choices[64][0] = "Maverick";
 choices[64][1] = "Mavericks";
 choices[64][2] = "Cocoa";
 choices[64][3] = "Kit Kat";
 answers[64] = 0;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9045. Mavericks es el sistema operativo OS X de Apple";
 preguntaids[64] = 9045


//  Id pregunta: 9012 Año de creación de pregunta: 2014
 questions[65]= "66)  &iquest;Cuantos atributos tiene un archivo en el sistema de ficheros NTFS?";
 choices[65]= new Array();
 choices[65][0] = "9";
 choices[65][1] = "11";
 choices[65][2] = "13";
 choices[65][3] = "15";
 answers[65] = 2;
 units[65] = ['58'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9012. ";
 preguntaids[65] = 9012


//  Id pregunta: 9015 Año de creación de pregunta: 2014
 questions[66]= "67)  &iquest;C&uacute;al de los siguientes es un medio para la sincronizaci&oacute;n entre procesos Windows?";
 choices[66]= new Array();
 choices[66][0] = "Signals";
 choices[66][1] = "Mutex";
 choices[66][2] = "Sockets";
 choices[66][3] = "RPCs";
 answers[66] = 1;
 units[66] = ['58'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9015. ";
 preguntaids[66] = 9015


//  Id pregunta: 9027 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;C&uacute;al es la interfaz gr&aacute;fica de usuario en una instalaci&oacute;n de Windows 2012 Server core?";
 choices[67]= new Array();
 choices[67][0] = "MetroUI";
 choices[67][1] = "Metacity";
 choices[67][2] = "KDE";
 choices[67][3] = "Ninguna";
 answers[67] = 3;
 units[67] = ['58'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9027. ";
 preguntaids[67] = 9027


//  Id pregunta: 9023 Año de creación de pregunta: 2014
 questions[68]= "69)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra 'libro' dentro de ficheros?";
 choices[68]= new Array();
 choices[68][0] = "find -type f | xwygs grep 'libro'";
 choices[68][1] = "find -type f | xaygs grep 'libro'";
 choices[68][2] = "find -type f | xargs grep 'libro'";
 choices[68][3] = "find -type f | xargp grep 'libro'";
 answers[68] = 2;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 9023. Examen TIC A1 2013";
 preguntaids[68] = 9023


//  Id pregunta: 9056 Año de creación de pregunta: 2014
 questions[69]= "70)  La segmentaci&oacute;n o pipelining:";
 choices[69]= new Array();
 choices[69][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas para simular paralelizaci&oacute;n.";
 choices[69][1] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n.";
 choices[69][2] = "Se trata de dividir el c&oacute;digo en fragmentos para distribuirlos por distintos procesadores.";
 choices[69][3] = "Todas  las anteriores.";
 answers[69] = 0;
 units[69] = ['49'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9056. ";
 preguntaids[69] = 9056


//  Id pregunta: 9122 Año de creación de pregunta: 2014
 questions[70]= "71)  Indique en qu&eacute; consiste el m&eacute;todo QSOS:";
 choices[70]= new Array();
 choices[70][0] = "Est&aacute; destinado a representar la interacci&oacute;n entre los componentes de un sistema.";
 choices[70][1] = "Permite calificar, seleccionar y comparar software Open Source de una manera objetiva.";
 choices[70][2] = "Permite representar a trav&eacute;s de objetos la informaci&oacute;n que contiene una base de datos.";
 choices[70][3] = "Es un modelo matem&aacute;tico que permite calcular las futuras desviaciones en un proyecto software.";
 answers[70] = 1;
 units[70] = ['66'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9122. Examen TIC A2 2013";
 preguntaids[70] = 9122


//  Id pregunta: 9090 Año de creación de pregunta: 2014
 questions[71]= "72)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[71]= new Array();
 choices[71][0] = "MD5 genera un hash de 128 bits.";
 choices[71][1] = "SHA-1 genera un hash de 160 bits.";
 choices[71][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[71][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[71] = 3;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9090. Examen TIC-A1 2013";
 preguntaids[71] = 9090


//  Id pregunta: 9018 Año de creación de pregunta: 2014
 questions[72]= "73)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012";
 choices[72]= new Array();
 choices[72][0] = "Bussiness";
 choices[72][1] = "Essentials";
 choices[72][2] = "Foundation";
 choices[72][3] = "Standard";
 answers[72] = 0;
 units[72] = ['58'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9018. Examen TIC A1 2013";
 preguntaids[72] = 9018


//  Id pregunta: 9115 Año de creación de pregunta: 2014
 questions[73]= "74)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[73]= new Array();
 choices[73][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[73][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[73][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[73][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[73] = 0;
 units[73] = ['64'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 9115. Examen TIC A2 2013";
 preguntaids[73] = 9115


//  Id pregunta: 9020 Año de creación de pregunta: 2014
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[74]= new Array();
 choices[74][0] = "Kexi.";
 choices[74][1] = "Kivio.";
 choices[74][2] = "Konqueror.";
 choices[74][3] = "Kugar.";
 answers[74] = 3;
 units[74] = ['66'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9020. Examen TIC A1 2013";
 preguntaids[74] = 9020


