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
//  Id pregunta: 10716 Año de creación de pregunta: 2015
 questions[0]= "1)  En un entorno de computaci&oacute;n Grid, &iquest;qu&eacute; nombre reciben las agrupaciones din&aacute;micas de diferentes organizaciones f&iacute;sicas o individuos que comparten recursos y colaboran con el fin de lograr un objetivo com&uacute;n?";
 choices[0]= new Array();
 choices[0][0] = "Virtual Organizations (VO).";
 choices[0][1] = "Grid Domain Resources (GDR)";
 choices[0][2] = "Domain Group Policy (DGP).";
 choices[0][3] = "Organization Resource Group (ORG)";
 answers[0] = 0;
 units[0] = ['49'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10716. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[0] = 10716


//  Id pregunta: 9990 Año de creación de pregunta: 2015
 questions[1]= "2)  Globus Toolkit es:";
 choices[1]= new Array();
 choices[1][0] = "Un framework de IBM que proporciona caracter&iacute;sticas para desarrollar, hacer debug y testear aplicaciones AJAX.";
 choices[1][1] = "Un conjunto de herramientas open source para construir grids computacionales.";
 choices[1][2] = "Un framework que contiene APIs y widgets para facilitar el desarrollo de aplicaciones Web que utilicen tecnolog&iacute;a AJAX y programaci&oacute;n paralela.";
 choices[1][3] = "Una librer&iacute;a Python, modular y extensible, que ofrece una API para desarrollar aplicaciones distribuidas.";
 answers[1] = 1;
 units[1] = ['49'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9990. Examen TIC A2 2014";
 preguntaids[1] = 9990


//  Id pregunta: 9061 Año de creación de pregunta: 2014
 questions[2]= "3)  En un cl&uacute;ster:";
 choices[2]= new Array();
 choices[2][0] = "Puede elegirse el porcentaje de procesamiento que cada nodo dedica al cl&uacute;ster.";
 choices[2][1] = "El algoritmo que distribuye el trabajo entre los nodos se conoce como 'Gang Scheduling'.";
 choices[2][2] = "El middleware m&aacute;s utilizado es Xware.";
 choices[2][3] = "Los nodos comparten una memoria central.";
 answers[2] = 1;
 units[2] = ['49'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9061. ";
 preguntaids[2] = 9061


//  Id pregunta: 9064 Año de creación de pregunta: 2014
 questions[3]= "4)  El serviceware permite:";
 choices[3]= new Array();
 choices[3][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[3][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[3][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[3][3] = "Controlar la red de comunicaciones del Grid.";
 answers[3] = 1;
 units[3] = ['49'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9064. ";
 preguntaids[3] = 9064


//  Id pregunta: 9054 Año de creación de pregunta: 2014
 questions[4]= "5)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[4]= new Array();
 choices[4][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[4][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[4][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[4][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[4] = 3;
 units[4] = ['49'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9054. ";
 preguntaids[4] = 9054


//  Id pregunta: 8708 Año de creación de pregunta: 2013
 questions[5]= "6)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y, adem&aacute;s, puede acceder a las memorias de otros procesadores se conoce como:";
 choices[5]= new Array();
 choices[5][0] = "SMP";
 choices[5][1] = "Grid";
 choices[5][2] = "NUMA";
 choices[5][3] = "Cluster";
 answers[5] = 2;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8708. Examen TICA2-2011";
 preguntaids[5] = 8708


//  Id pregunta: 8273 Año de creación de pregunta: 2011
 questions[6]= "7)  En relaci&oacute;n con la tecnolog&iacute;a &quot;grid computing&quot;, se&ntilde;ale la respuesta FALSA:";
 choices[6]= new Array();
 choices[6][0] = "Los nodos no tienen que estar dedicados.";
 choices[6][1] = "Son sistemas homog&eacute;neos (todos los nodos deben ser id&eacute;nticos).";
 choices[6][2] = "Se consigue reducci&oacute;n de costes, no es necesaria disponer de grandes y costosos servidores.";
 choices[6][3] = "La escalabilidad parametrizable es una caracter&iacute;stica muy Importante de esta arquitectura";
 answers[6] = 1;
 units[6] = ['49'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8273. Examen TIC A2 2010 interna";
 preguntaids[6] = 8273


//  Id pregunta: 8578 Año de creación de pregunta: 2013
 questions[7]= "8)  Con respecto a los datos en los sistemas SMP o MMC se pueden distinguir los siguientes tipos en funci&oacute;n de su alcance";
 choices[7]= new Array();
 choices[7][0] = "Datos de alcance s&iacute;ncrono y as&iacute;ncrono";
 choices[7][1] = "Datos de alcance global y local";
 choices[7][2] = "Datos de alcance externo e interno";
 choices[7][3] = "No existe la arquitectura MMC";
 answers[7] = 1;
 units[7] = ['49'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8578. ";
 preguntaids[7] = 8578


//  Id pregunta: 8571 Año de creación de pregunta: 2013
 questions[8]= "9)  &iquest;Cu&aacute;l no es caracter&iacute;stica de los sistemas de mainframe o sistemas multiprocesor?";
 choices[8]= new Array();
 choices[8][0] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH o procesamiento sin interacci&oacute;n";
 choices[8][1] = "En los &uacute;ltimos a&ntilde;os han ca&iacute;do en desuso";
 choices[8][2] = "Se trata de soluciones altamente propietarias, concebidas para entornos cerrados, no heterog&eacute;neos.";
 choices[8][3] = "Existen muy pocos fabricantes en el mercado que desarrollen este tipo de sistemas";
 answers[8] = 1;
 units[8] = ['49'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8571. ";
 preguntaids[8] = 8571


//  Id pregunta: 8709 Año de creación de pregunta: 2013
 questions[9]= "10)  Las siglas SSI (Single System Image) corresponden a:";
 choices[9]= new Array();
 choices[9][0] = "Una interfaz &uacute;nica de acceso al sistema para un cluster de servidores.";
 choices[9][1] = "Una imagen del sistema operativo de un ordenador que se utiliza para la creaci&oacute;n de clones.";
 choices[9][2] = "Una copia completa de un ordenador personal Windows que sirve para restaurar el sistema.";
 choices[9][3] = "Una representaci&oacute;n de la memoria del sistema que se utiliza en .NET.";
 answers[9] = 0;
 units[9] = ['49', '55'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8709. Examen TICA2-2011";
 preguntaids[9] = 8709


//  Id pregunta: 10286 Año de creación de pregunta: 2015
 questions[10]= "11)  El procesador intel i7 utiliza una jerarqu&iacute;a de cache de 3 niveles, L1, L2 y L3. Indicar la respuesta INCORRECTA";
 choices[10]= new Array();
 choices[10][0] = "Respecto al tama&ntilde;o de la memoria, L1&gt;L2&gt;L3";
 choices[10][1] = "Los tres niveles utilizan un tama&ntilde;o de bloque de 64 bytes";
 choices[10][2] = "El nivel 3, L3, es compartido por todos los cores del chip";
 choices[10][3] = "El nivel 1, L1, presenta la latencia m&aacute;s alta";
 answers[10] = 3;
 units[10] = ['49'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10286. ";
 preguntaids[10] = 10286


//  Id pregunta: 8712 Año de creación de pregunta: 2013
 questions[11]= "12)  Indicad cu&aacute;l de los siguientes sistemas de ficheros se corresponde con un sistema de ficheros de alto rendimiento con soporte transaccional:";
 choices[11]= new Array();
 choices[11][0] = "NFS";
 choices[11][1] = "CIFS";
 choices[11][2] = "JFS";
 choices[11][3] = "FAT";
 answers[11] = 2;
 units[11] = ['49'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8712. Examen TICA2-2011";
 preguntaids[11] = 8712


//  Id pregunta: 9060 Año de creación de pregunta: 2014
 questions[12]= "13)  Los sistemas multicomputador pueden dividirse, seg&uacute;n la taxonom&iacute;a de Flynn en:";
 choices[12]= new Array();
 choices[12][0] = "SISD, SIMD, MISD y MIMD.";
 choices[12][1] = "UMA y NUMA.";
 choices[12][2] = "MMC y MMD.";
 choices[12][3] = "Ninguna de las anteriores.";
 answers[12] = 3;
 units[12] = ['49'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9060. ";
 preguntaids[12] = 9060


//  Id pregunta: 9272 Año de creación de pregunta: 2014
 questions[13]= "14)  La taxonom&iacute;a de Flynn:";
 choices[13]= new Array();
 choices[13][0] = "se ha revisado recientemente para incluir los sistemas Big Data.";
 choices[13][1] = "es una clasificaci&oacute;n de computadores en funci&oacute;n de su arquitectura.";
 choices[13][2] = "es la base de la taxonom&iacute;a de Bloom.";
 choices[13][3] = "se propuso con motivo de los primeros PC de IBM.";
 answers[13] = 1;
 units[13] = ['49'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9272. Examen TIC A1 2013";
 preguntaids[13] = 9272


//  Id pregunta: 9743 Año de creación de pregunta: 2014
 questions[14]= "15)  El ancho de banda m&aacute;ximo alcanzado por la familia de est&aacute;ndares USB es:";
 choices[14]= new Array();
 choices[14][0] = "10 Gbit/s full-duplex por USB 3.0";
 choices[14][1] = "10 Gbit/s half-duplex por USB 3.1";
 choices[14][2] = "10 Gbit/s full-duplex por USB 3.2";
 choices[14][3] = "10 Gbit/s full-duplex por USB 3.1";
 answers[14] = 3;
 units[14] = ['49'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9743. ";
 preguntaids[14] = 9743


//  Id pregunta: 9057 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[15]= new Array();
 choices[15][0] = "MISD y SISD";
 choices[15][1] = "SIMD y SISD";
 choices[15][2] = "MIMD y MISD";
 choices[15][3] = "SISD y MISD";
 answers[15] = 1;
 units[15] = ['49'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9057. ";
 preguntaids[15] = 9057


//  Id pregunta: 10285 Año de creación de pregunta: 2015
 questions[16]= "17)  Supongamos que sustituimos un procesador utilizado como servidor web por otro 10 veces m&aacute;s r&aacute;pido. Si el procesador inicial est&aacute; ocupado con c&aacute;lculos el 40% del tiempo y esperando por E/S el 60%, &iquest;qu&eacute; incremento global de velocidad se obtiene con la mejora?";
 choices[16]= new Array();
 choices[16][0] = "1.56";
 choices[16][1] = "10";
 choices[16][2] = "4";
 choices[16][3] = "6";
 answers[16] = 0;
 units[16] = ['49'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10285. Ley de Amdahl";
 preguntaids[16] = 10285


//  Id pregunta: 8573 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[17]= new Array();
 choices[17][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[17][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[17][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[17][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[17] = 3;
 units[17] = ['49'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8573. ";
 preguntaids[17] = 8573


//  Id pregunta: 8572 Año de creación de pregunta: 2013
 questions[18]= "19)  &iquest;Cu&aacute;ndo se publicaron las taxonom&iacute;as de Flynn?";
 choices[18]= new Array();
 choices[18][0] = "En 1950";
 choices[18][1] = "Por primera vez en 1966 y por segunda vez en 1970";
 choices[18][2] = "En 1980";
 choices[18][3] = "En la d&eacute;cada de los noventa.";
 answers[18] = 1;
 units[18] = ['49'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8572. ";
 preguntaids[18] = 8572


//  Id pregunta: 8577 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[19]= new Array();
 choices[19][0] = "Con CPU particionada";
 choices[19][1] = "Con m&uacute;ltiples ALUS";
 choices[19][2] = "Como A) y como B)";
 choices[19][3] = "Ninguna respuesta es correcta";
 answers[19] = 2;
 units[19] = ['49'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8577. ";
 preguntaids[19] = 8577


//  Id pregunta: 8581 Año de creación de pregunta: 2013
 questions[20]= "21)  &iquest;Qu&eacute; se necesita para funcionar en un sistema grid?";
 choices[20]= new Array();
 choices[20][0] = "Al menos un ordenador que act&uacute;e como un servidor y que gestione el funcionamiento de los otros sistemas implicados";
 choices[20][1] = "Un mainframe";
 choices[20][2] = "Al menos un sistema Microsoft";
 choices[20][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[20] = 0;
 units[20] = ['49'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8581. ";
 preguntaids[20] = 8581


//  Id pregunta: 9059 Año de creación de pregunta: 2014
 questions[21]= "22)  La gesti&oacute;n NUMA:";
 choices[21]= new Array();
 choices[21][0] = "Significa Not Uniform Memory Access.";
 choices[21][1] = "Significa Not Unit of Memory Available.";
 choices[21][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[21][3] = "La a) y la c)";
 answers[21] = 3;
 units[21] = ['49'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9059. ";
 preguntaids[21] = 9059


//  Id pregunta: 8586 Año de creación de pregunta: 2013
 questions[22]= "23)  La taxonom&iacute;a de Flynn clasifica los ordenadores en funci&oacute;n de";
 choices[22]= new Array();
 choices[22][0] = "la relaci&oacute;n mayor o menor entre memoria principal y almacenamiento externo";
 choices[22][1] = "el flujo que siguen los datos dentro de la m&aacute;quina y de las instrucciones sobre esos datos";
 choices[22][2] = "el m&eacute;todo de acceso a los dispositivos de almacenamiento externo";
 choices[22][3] = "la relaci&oacute;n entre la velocidad de acceso a datos seg&uacute;n est&eacute;n en memoria o almacenamiento externo";
 answers[22] = 1;
 units[22] = ['49'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8586. Examen TIC-A1 2011";
 preguntaids[22] = 8586


//  Id pregunta: 9053 Año de creación de pregunta: 2014
 questions[23]= "24)  Los sistemas multiprocesador:";
 choices[23]= new Array();
 choices[23][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[23][1] = "Sus procesadores no dependen unos de otros.";
 choices[23][2] = "Son sistemas fuertemente acoplados.";
 choices[23][3] = "Ninguna de las anteriores.";
 answers[23] = 2;
 units[23] = ['49'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9053. ";
 preguntaids[23] = 9053


//  Id pregunta: 8302 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[24]= new Array();
 choices[24][0] = "SISD";
 choices[24][1] = "SIMD";
 choices[24][2] = "MISD";
 choices[24][3] = "MIMD";
 answers[24] = 2;
 units[24] = ['49'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8302. Examen UPM A2 2011";
 preguntaids[24] = 8302


//  Id pregunta: 10720 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica b&aacute;sica de los sistemas de altas prestaciones?";
 choices[25]= new Array();
 choices[25][0] = "Arquitectura altamente paralela.";
 choices[25][1] = "Gran capacidad de c&oacute;mputo.";
 choices[25][2] = "Tiempo compartido.";
 choices[25][3] = "Elevado coste.";
 answers[25] = 2;
 units[25] = ['49'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 10720. ";
 preguntaids[25] = 10720


//  Id pregunta: 9063 Año de creación de pregunta: 2014
 questions[26]= "27)  La arquitectura del Grid se compone de las siguientes capas:";
 choices[26]= new Array();
 choices[26][0] = "Capa de red, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[26][1] = "Capa de red, de &ldquo;middleware&rdquo;, de recursos y de aplicaci&oacute;n.";
 choices[26][2] = "Capa de recursos, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[26][3] = "Ninguna de las anteriores.";
 answers[26] = 1;
 units[26] = ['49'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9063. ";
 preguntaids[26] = 9063


//  Id pregunta: 9741 Año de creación de pregunta: 2014
 questions[27]= "28)  Ordene los siguientes dispositivos seg&uacute;n velocidad de transferencia, de menor a mayor:";
 choices[27]= new Array();
 choices[27][0] = "FireWire 800 &lt; USB 2.0 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[27][1] = "USB 2.0 &lt; FireWire 800 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[27][2] = "FireWire 800 &lt; USB 2.0 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 choices[27][3] = "USB 2.0 &lt; FireWire 800 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 answers[27] = 1;
 units[27] = ['49'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9741. ";
 preguntaids[27] = 9741


//  Id pregunta: 8574 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;Qu&eacute; no presentan las soluciones SISD (Single Instruction stream, Single Data stream)";
 choices[28]= new Array();
 choices[28][0] = "Concurrencia y paralelizaci&oacute;n.";
 choices[28][1] = "S&oacute;lo concurrencia.";
 choices[28][2] = "&Uacute;nicamente paralelizaci&oacute;n.";
 choices[28][3] = "No existe SISD";
 answers[28] = 0;
 units[28] = ['49'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8574. ";
 preguntaids[28] = 8574


//  Id pregunta: 9739 Año de creación de pregunta: 2014
 questions[29]= "30)  En el &aacute;mbito de los procesadores de ordenador, el concepto de pipelining hace referencia a:";
 choices[29]= new Array();
 choices[29][0] = "El encadenamiento de las instrucciones que se ejecutan en el procesador, de manera que la salida de una se conecta a la entrada de la siguiente ahorrando el paso por los registros, lo que acelera la ejecuci&oacute;n";
 choices[29][1] = "El particionado del procesador en etapas, lo que permite paralelizar las fases de ejecuci&oacute;n de instrucciones en el procesador";
 choices[29][2] = "El acceso a memoria mediante buses dedicados al efecto, denominados &quot;pipes&quot;, lo que prioriza las consultas del procesador a la memoria";
 choices[29][3] = "No se contempla el concepto de pipelining relacionado con los procesadores";
 answers[29] = 1;
 units[29] = ['49'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9739. ";
 preguntaids[29] = 9739


//  Id pregunta: 9058 Año de creación de pregunta: 2014
 questions[30]= "31)  La ley de Amdahl demuestra que:";
 choices[30]= new Array();
 choices[30][0] = "Cuantas m&aacute;s CPUs, m&aacute;s productividad.";
 choices[30][1] = "La productividad depende de la parte que sea paralelizable.";
 choices[30][2] = "Cuanto m&aacute;s c&oacute;digo, m&aacute;s CPUs hacen falta.";
 choices[30][3] = "El n&uacute;mero de procesadores es igual al n&uacute;mero de ALUs.";
 answers[30] = 1;
 units[30] = ['49'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9058. ";
 preguntaids[30] = 9058


//  Id pregunta: 8579 Año de creación de pregunta: 2013
 questions[31]= "32)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[31]= new Array();
 choices[31][0] = "Fuertemente acoplados.";
 choices[31][1] = "Muy desacoplados";
 choices[31][2] = "Un procesador no depende de lo que hace otro";
 choices[31][3] = "Todas las respuestas con correctas";
 answers[31] = 0;
 units[31] = ['49'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8579. ";
 preguntaids[31] = 8579


//  Id pregunta: 8710 Año de creación de pregunta: 2013
 questions[32]= "33)  Si se quisiera un middleware para un grid se elegir&iacute;a:";
 choices[32]= new Array();
 choices[32][0] = "Globus Toolkit.";
 choices[32][1] = "Cluster Veritas.";
 choices[32][2] = "Arduino.";
 choices[32][3] = "Data protector.";
 answers[32] = 0;
 units[32] = ['49'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8710. Examen TICA2-2011";
 preguntaids[32] = 8710


//  Id pregunta: 10715 Año de creación de pregunta: 2015
 questions[33]= "34)  La arquitectura de un sistema de Grid Computing est&aacute; formada por las siguientes capas o niveles.";
 choices[33]= new Array();
 choices[33][0] = "Persistence Layer, Data Layer, Logic Layer (Business Layer), Service Layer y Presentation Layer";
 choices[33][1] = "Fabric Layer, Connectivity Layer, Resource Layer, Collective Layer y Applications Layer.";
 choices[33][2] = "Provider Layer, Communicator Layer, Mediator Layer, Coordinator Layer y Presenter Layer.";
 choices[33][3] = "Transport Layer, Security Layer, Transaction Layer, Session Layer y Application Layer.";
 answers[33] = 1;
 units[33] = ['49'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10715. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[33] = 10715


//  Id pregunta: 9738 Año de creación de pregunta: 2014
 questions[34]= "35)  Seg&uacute;n la taxonomia de Flynn, un procesador vectorial ser&iacute;a considerado como";
 choices[34]= new Array();
 choices[34][0] = "SISD";
 choices[34][1] = "SIMD";
 choices[34][2] = "MISD";
 choices[34][3] = "MIMD";
 answers[34] = 1;
 units[34] = ['49'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9738. ";
 preguntaids[34] = 9738


//  Id pregunta: 9055 Año de creación de pregunta: 2014
 questions[35]= "36)  La taxonom&iacute;a de Flynn:";
 choices[35]= new Array();
 choices[35][0] = "Es una clasificaci&oacute;n cl&aacute;sica de computadores en funci&oacute;n de su arquitectura.";
 choices[35][1] = "Se basa en el flujo que siguen los datos y las instrucciones dentro de una m&aacute;quina.";
 choices[35][2] = "Se divide en cuatro categor&iacute;as.";
 choices[35][3] = "Todas las anteriores.";
 answers[35] = 3;
 units[35] = ['49'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9055. ";
 preguntaids[35] = 9055


//  Id pregunta: 9737 Año de creación de pregunta: 2014
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta respecto a las arquitecturas UMA (Uniform Memory Access) y NUMA (Non-Uniform Memory Access)";
 choices[36]= new Array();
 choices[36][0] = "En NUMA un procesador accede m&aacute;s deprisa a su memoria local que a la memoria compartida";
 choices[36][1] = "En UMA los procesadores acceden a la memoria compartida mediante un bus o conmutador";
 choices[36][2] = "A y B son incorrectas";
 choices[36][3] = "A y B son correctas";
 answers[36] = 3;
 units[36] = ['49'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9737. ";
 preguntaids[36] = 9737


//  Id pregunta: 8679 Año de creación de pregunta: 2013
 questions[37]= "38)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[37]= new Array();
 choices[37][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[37][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[37][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[37][3] = "Ninguna es correcta.";
 answers[37] = 2;
 units[37] = ['49', '56'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8679. ";
 preguntaids[37] = 8679


//  Id pregunta: 9056 Año de creación de pregunta: 2014
 questions[38]= "39)  La segmentaci&oacute;n o pipelining:";
 choices[38]= new Array();
 choices[38][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas para simular paralelizaci&oacute;n.";
 choices[38][1] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n.";
 choices[38][2] = "Se trata de dividir el c&oacute;digo en fragmentos para distribuirlos por distintos procesadores.";
 choices[38][3] = "Todas  las anteriores.";
 answers[38] = 0;
 units[38] = ['49'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9056. ";
 preguntaids[38] = 9056


//  Id pregunta: 10287 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de programaci&oacute;n paralela?";
 choices[39]= new Array();
 choices[39][0] = "CUDA";
 choices[39][1] = "OpenCL";
 choices[39][2] = "OpenStack";
 choices[39][3] = "MPI";
 answers[39] = 2;
 units[39] = ['49'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 10287. Openstack es una soluci&oacute;n open source para montar clouds";
 preguntaids[39] = 10287


//  Id pregunta: 9742 Año de creación de pregunta: 2014
 questions[40]= "41)  Seleccione la afirmaci&oacute;n correcta:";
 choices[40]= new Array();
 choices[40][0] = "Los buses paralelos permiten enviar mayor cantidad de informaci&oacute;n por unidad de tiempo que los buses serie";
 choices[40][1] = "El bus MCA (Micro Channel Architecture) empleado en los IBM PS/2 ten&iacute;a un ancho de palabra m&aacute;ximo de 16 bits";
 choices[40][2] = "Los buses paralelos presentan una limitaci&oacute;n de velocidad relacionada con la variaci&oacute;n de retardo o jitter entre los diferentes bits de su ancho de palabra";
 choices[40][3] = "El bus PCI es un bus paralelo pero sus evoluciones posteriores, PCI-X y PCIe son buses serie";
 answers[40] = 2;
 units[40] = ['49'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9742. ";
 preguntaids[40] = 9742


//  Id pregunta: 8517 Año de creación de pregunta: 2011
 questions[41]= "42)  Sistema de Grid Computing";
 choices[41]= new Array();
 choices[41][0] = "Globus Toolkit";
 choices[41][1] = "Nimbus";
 choices[41][2] = "Eucaliptus";
 choices[41][3] = "Gluster";
 answers[41] = 0;
 units[41] = ['49'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8517. ";
 preguntaids[41] = 8517


//  Id pregunta: 8271 Año de creación de pregunta: 2011
 questions[42]= "43)  &iquest;En qu&eacute; generaci&oacute;n de ordenadores se empez&oacute; a utilizar el transistor?";
 choices[42]= new Array();
 choices[42][0] = "En la primera generaci&oacute;n,";
 choices[42][1] = "En la segunda generaci&oacute;n";
 choices[42][2] = "En la tercera generaci&oacute;n.";
 choices[42][3] = "En la cuarta generaci&oacute;n";
 answers[42] = 1;
 units[42] = ['49'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8271. Examen TIC A2 2010 interna";
 preguntaids[42] = 8271


//  Id pregunta: 9593 Año de creación de pregunta: 2014
 questions[43]= "44)  Una sentencia JCL comienza con:";
 choices[43]= new Array();
 choices[43][0] = "//";
 choices[43][1] = "*+";
 choices[43][2] = "#&gt;";
 choices[43][3] = "$&gt;";
 answers[43] = 0;
 units[43] = ['49'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9593. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[43] = 9593


//  Id pregunta: 10322 Año de creación de pregunta: 2015
 questions[44]= "45)  De acuerdo con la Taxonom&iacute;a de Flynn, como se denominan los sistemas de arquitectura serie de Von Neummann?";
 choices[44]= new Array();
 choices[44][0] = "SISD";
 choices[44][1] = "SIMD";
 choices[44][2] = "MISD";
 choices[44][3] = "MIMD";
 answers[44] = 0;
 units[44] = ['49'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10322. ";
 preguntaids[44] = 10322


//  Id pregunta: 9062 Año de creación de pregunta: 2014
 questions[45]= "46)  En Grid Computing:";
 choices[45]= new Array();
 choices[45][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[45][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[45][2] = "Son sistemas heterog&eacute;neos.";
 choices[45][3] = "Todas las anteriores.";
 answers[45] = 3;
 units[45] = ['49'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9062. ";
 preguntaids[45] = 9062


//  Id pregunta: 9566 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;Cu&aacute;l NO es una sentencia del lenguaje JCL (Job Control Language)?";
 choices[46]= new Array();
 choices[46][0] = "EXEC";
 choices[46][1] = "DD";
 choices[46][2] = "JOB";
 choices[46][3] = "CALL";
 answers[46] = 3;
 units[46] = ['49'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9566. TIC A2 2013 libre";
 preguntaids[46] = 9566


//  Id pregunta: 8588 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;Qu&eacute; es Parallel Sysplex?";
 choices[47]= new Array();
 choices[47][0] = "La soluci&oacute;n de clustering de IBM para z/OS";
 choices[47][1] = "Un tipo de registro l&oacute;gico";
 choices[47][2] = "Una aplicaci&oacute;n que permite conocer el estado de procesos de un sistema operativo";
 choices[47][3] = "Una herramienta de virtualizaci&oacute;n";
 answers[47] = 0;
 units[47] = ['49'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8588. ";
 preguntaids[47] = 8588


//  Id pregunta: 8576 Año de creación de pregunta: 2013
 questions[48]= "49)  &iquest;C&oacute;mo es el procesamiento en un sistema SIMD?";
 choices[48]= new Array();
 choices[48][0] = "As&iacute;ncrono";
 choices[48][1] = "Desacoplado";
 choices[48][2] = "S&iacute;ncrono";
 choices[48][3] = "Ninguna respuesta es correcta";
 answers[48] = 2;
 units[48] = ['49'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8576. ";
 preguntaids[48] = 8576


//  Id pregunta: 8589 Año de creación de pregunta: 2013
 questions[49]= "50)  &iquest;Qu&eacute; se suelen considerar como ejemplo de mainframe?";
 choices[49]= new Array();
 choices[49][0] = "Z/OS de IBM";
 choices[49][1] = "Superdome de HP";
 choices[49][2] = "Todas las respuestas anteriores";
 choices[49][3] = "Ninguna respuesta es v&aacute;lida";
 answers[49] = 1;
 units[49] = ['49'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8589. ";
 preguntaids[49] = 8589


//  Id pregunta: 8583 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;Cu&aacute;les son aplicaciones generales para la computaci&oacute;n GRID?";
 choices[50]= new Array();
 choices[50][0] = "S&uacute;per computaci&oacute;n distribuida.";
 choices[50][1] = "Sistemas distribuidos en tiempo real";
 choices[50][2] = "Entornos virtuales de colaboraci&oacute;n (Tele-inmersi&oacute;n)";
 choices[50][3] = "Todas las respuetas anteriores son v&aacute;lidas";
 answers[50] = 3;
 units[50] = ['49'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8583. ";
 preguntaids[50] = 8583


//  Id pregunta: 8582 Año de creación de pregunta: 2013
 questions[51]= "52)  &iquest;C&oacute;mo se puede enmarcar el proyecto SETIHome de investigaci&oacute;n de vida extraterrestre?";
 choices[51]= new Array();
 choices[51][0] = "Como una soluci&oacute;n de web 2.0";
 choices[51][1] = "Como un ejemplo pr&aacute;ctico de computaci&oacute;n Grid";
 choices[51][2] = "Una soluci&oacute;n basada en tecnolog&iacute;a Oracle.";
 choices[51][3] = "Ninguna respuesta es correcta.";
 answers[51] = 1;
 units[51] = ['49'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8582. ";
 preguntaids[51] = 8582


//  Id pregunta: 9740 Año de creación de pregunta: 2014
 questions[52]= "53)  Se&ntilde;ale la respuesta correcta relacionada con las arquitecturas RISC y CISC de procesadores";
 choices[52]= new Array();
 choices[52][0] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, ejecuci&oacute;n de la instrucci&oacute;n, acceso a memoria, escritura a registro";
 choices[52][1] = "CISC es un modelo m&aacute;s moderno que RISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[52][2] = "RISC es un modelo m&aacute;s moderno que CISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[52][3] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, acceso a memoria, ejecuci&oacute;n de la instrucci&oacute;n, escritura a registro";
 answers[52] = 0;
 units[52] = ['49'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9740. ";
 preguntaids[52] = 9740


//  Id pregunta: 8575 Año de creación de pregunta: 2013
 questions[53]= "54)  Se&ntilde;ale la respuesta falsa respecto a la segmentaci&oacute;n";
 choices[53]= new Array();
 choices[53][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas o segmentos.";
 choices[53][1] = "Incrementa la productividad de la CPU";
 choices[53][2] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n";
 choices[53][3] = "Todas las respuestas son correctas";
 answers[53] = 2;
 units[53] = ['49'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8575. ";
 preguntaids[53] = 8575


