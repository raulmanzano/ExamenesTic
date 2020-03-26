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
//  Id pregunta: 8023 Año de creación de pregunta: 2011
 questions[0]= "1)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia completa, sin marcarlos individualmente como copiados, es una copia de seguridad:";
 choices[0]= new Array();
 choices[0][0] = "Acumulativa.";
 choices[0][1] = "Intermedia.";
 choices[0][2] = "Incremental.";
 choices[0][3] = "Diferencial.";
 answers[0] = 3;
 units[0] = ['100'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 8023. Examen TIC A2 2010";
 preguntaids[0] = 8023


//  Id pregunta: 6448 Año de creación de pregunta: 2003
 questions[1]= "2)  Indicar la respuesta falsa sobre modelos de recuperaci&oacute;n de informaci&oacute;n";
 choices[1]= new Array();
 choices[1][0] = "En general, el modelo vectorial se comporta peor que el probabil&iacute;stico cuando se usa contra colecciones gen&eacute;ricas de documentos";
 choices[1][1] = "Las redes neuronales son muy &uacute;tiles en un sistema de recuperaci&oacute;n de informaci&oacute;n por su potencia reconociendo patrones";
 choices[1][2] = "Las redes de inferencia y las redes de confianza son modelos basados en redes bayesianas";
 choices[1][3] = "Los modelos estructurados permiten combinar la especificaci&oacute;n de consultas con la informaci&oacute;n de la estructura del documento";
 answers[1] = 0;
 units[1] = ['100'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 6448. ";
 preguntaids[1] = 6448


//  Id pregunta: 10835 Año de creación de pregunta: 2015
 questions[2]= "3)  El stemming es:";
 choices[2]= new Array();
 choices[2][0] = "Una t&eacute;cnica de indexaci&oacute;n sint&aacute;ctica";
 choices[2][1] = "Una t&eacute;cnica de indexaci&oacute;n morfol&oacute;gica";
 choices[2][2] = "Una t&eacute;cnica de indexaci&oacute;n sem&aacute;ntica";
 choices[2][3] = "Una t&eacute;cnica de eliminaci&oacute;n de palabras vac&iacute;as";
 answers[2] = 1;
 units[2] = ['100'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 10835. ";
 preguntaids[2] = 10835


//  Id pregunta: 6451 Año de creación de pregunta: 2003
 questions[3]= "4)  Indicar cu&aacute;l de los siguientes no es un apartado contemplado por los criterios SNC del CSAE para elaborar un plan de contingencias";
 choices[3]= new Array();
 choices[3][0] = "Papeles y responsabilidades de los distintos actores";
 choices[3][1] = "Planificaci&oacute;n de recursos cuando se opera en situaci&oacute;n de contingencia";
 choices[3][2] = "Criterios para el retorno a explotaci&oacute;n normal";
 choices[3][3] = "Todos los anteriores son v&aacute;lidos";
 answers[3] = 3;
 units[3] = ['100'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 6451. ";
 preguntaids[3] = 6451


//  Id pregunta: 8216 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de ordenaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Quicksort.";
 choices[4][1] = "Mergesort.";
 choices[4][2] = "Bubblesort.";
 choices[4][3] = "Middlesort.";
 answers[4] = 3;
 units[4] = ['100'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 8216. Examen TIC A2 2010 interna";
 preguntaids[4] = 8216


//  Id pregunta: 7854 Año de creación de pregunta: 2011
 questions[5]= "6)  Referente al protocolo Internet Protocol versi&oacute;n 4 (IPv4), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo permite identificar hasta 256 protocolos para la parte de datos del datagrama.";
 choices[5][1] = "No permite volver a fragmentar un datagrama ya fragmentado (pues la fragmentaci&oacute;n se indica con el bit MF).";
 choices[5][2] = "La unidad de transferencia m&aacute;xima o Maximun Transmission Unit (MTU) es siempre de 65.535 bytes.";
 choices[5][3] = "Si los datagramas han sido fragmentados, al pasar a una red que puede manejar un PDU m&aacute;ximo mayor que la red de origen, previamente a ser reenviados, los fragmentos deben ser reensamblados.";
 answers[5] = 0;
 units[5] = ['100'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7854. Examen TIC A1 2010";
 preguntaids[5] = 7854


//  Id pregunta: 6333 Año de creación de pregunta: 2003
 questions[6]= "7)  La utilizaci&oacute;n de caracteres ajenos al alfabeto anglosaj&oacute;n en un nombre de dominio dentro de una red TCP/IP";
 choices[6]= new Array();
 choices[6][0] = "no es posible nunca";
 choices[6][1] = "solo es posible en redes privadas";
 choices[6][2] = "es posible en redes p&uacute;blicas y privadas que implementen la familia de RFCs relativas a los nombres de dominio internacionalizados";
 choices[6][3] = "es una posibilidad desde la creaci&oacute;n de la familia de protocolos pero que no ha sido desarrollada";
 answers[6] = 2;
 units[6] = ['100'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 6333. ";
 preguntaids[6] = 6333


//  Id pregunta: 6449 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes es un tipo de consulta utilizada para recuperar informaci&oacute;n en la web?";
 choices[7]= new Array();
 choices[7][0] = "Consultas de informaci&oacute;n (informational queries)";
 choices[7][1] = "Consultas transaccionales (transactional queries)";
 choices[7][2] = "Consultas de navegaci&oacute;n (navigational queries)";
 choices[7][3] = "Todas las anteriores son consultas v&aacute;lidas";
 answers[7] = 3;
 units[7] = ['100'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6449. ";
 preguntaids[7] = 6449


//  Id pregunta: 7988 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[8]= new Array();
 choices[8][0] = "Merge sort.";
 choices[8][1] = "Bubble sort.";
 choices[8][2] = "Quicksort.";
 choices[8][3] = "Insertion sort.";
 answers[8] = 2;
 units[8] = ['100'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7988. Examen TIC A2 2010";
 preguntaids[8] = 7988


//  Id pregunta: 9669 Año de creación de pregunta: 2014
 questions[9]= "10)  En el &aacute;mbito de la continuidad de negocio, el &quot;objetivo de prestaci&oacute;n de servicios&quot; se define como:";
 choices[9]= new Array();
 choices[9][0] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[9][1] = "El nivel de servicios a proveer durante el modo de proceso alterno.";
 choices[9][2] = "Ninguna de las anteriores.";
 choices[9][3] = "A y B.";
 answers[9] = 1;
 units[9] = ['100'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 9669. ";
 preguntaids[9] = 9669


//  Id pregunta: 10368 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;Cu&aacute;l es el ciclo de vida correcto de la informaci&oacute;n?";
 choices[10]= new Array();
 choices[10][0] = "Generaci&oacute;n, Almacenamiento, Acceso, Disposici&oacute;n, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[10][1] = "Generaci&oacute;n, Acceso, Almacenamiento, Uso, Disposici&oacute;n y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[10][2] = "Generaci&oacute;n, Acceso, Disposici&oacute;n, Almacenamiento, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[10][3] = "Generaci&oacute;n, Almacenamiento, Acceso, Uso, Disposici&oacute;n, y Conservaci&oacute;n o Destrucci&oacute;n";
 answers[10] = 0;
 units[10] = ['100'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10368. ";
 preguntaids[10] = 10368


//  Id pregunta: 6445 Año de creación de pregunta: 2003
 questions[11]= "12)  En los sistemas de recuperaci&oacute;n de informaci&oacute;n full text &iquest;qu&eacute; operaciones son v&aacute;lidas para reducir el conjunto de palabras clave?";
 choices[11]= new Array();
 choices[11][0] = "Eliminiaci&oacute;n de palabras vac&iacute;as (stop words)";
 choices[11][1] = "Identificaci&oacute;n de la ra&iacute;z gramatical (stemming)";
 choices[11][2] = "Compresi&oacute;n de los conjuntos de palabras obtenidos";
 choices[11][3] = "Todas las anteriores son operaciones v&aacute;lidas";
 answers[11] = 3;
 units[11] = ['100'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 6445. ";
 preguntaids[11] = 6445


//  Id pregunta: 9672 Año de creación de pregunta: 2014
 questions[12]= "13)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como cr&iacute;tica:";
 choices[12]= new Array();
 choices[12][0] = "No puede ser reemplazada por una operaci&oacute;n manual.";
 choices[12][1] = "La tolerancia a la interrupci&oacute;n es muy baja.";
 choices[12][2] = "El costo de interrupci&oacute;n es muy alto.";
 choices[12][3] = "Todas las anteriores.";
 answers[12] = 3;
 units[12] = ['100'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 9672. ";
 preguntaids[12] = 9672


//  Id pregunta: 6367 Año de creación de pregunta: 2003
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[13]= new Array();
 choices[13][0] = "El protocolo IPv6 admite direcciones en IPv4";
 choices[13][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[13][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[13][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[13] = 1;
 units[13] = ['100'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 6367. Examen 2006 JCYL";
 preguntaids[13] = 6367


//  Id pregunta: 9673 Año de creación de pregunta: 2014
 questions[14]= "15)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como vital:";
 choices[14]= new Array();
 choices[14][0] = "Puede realizarse manualmente por un periodo breve de tiempo.";
 choices[14][1] = "Tiene mayor tolerancia a las interrupciones que una clasificada como cr&iacute;tica.";
 choices[14][2] = "Ninguna de las anteriores.";
 choices[14][3] = "A y B.";
 answers[14] = 3;
 units[14] = ['100'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 9673. ";
 preguntaids[14] = 9673


//  Id pregunta: 8210 Año de creación de pregunta: 2011
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[15]= new Array();
 choices[15][0] = "Mergesort";
 choices[15][1] = "Bubblesort";
 choices[15][2] = "Quicksort";
 choices[15][3] = "Insertionsort";
 answers[15] = 2;
 units[15] = ['100'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 8210. Examen TIC A2 2010 interna";
 preguntaids[15] = 8210


//  Id pregunta: 9670 Año de creación de pregunta: 2014
 questions[16]= "17)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[16]= new Array();
 choices[16][0] = "Cuantifica la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n.";
 choices[16][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[16][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[16][3] = "A y B.";
 answers[16] = 3;
 units[16] = ['100'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 9670. ";
 preguntaids[16] = 9670


//  Id pregunta: 5962 Año de creación de pregunta: 2007
 questions[17]= "18)  En el proceso de reconocimiento del habla, el algoritmo Dynamic Time Warping (DTW) se utiliza para:";
 choices[17]= new Array();
 choices[17][0] = "Evitar el uso de plantillas";
 choices[17][1] = "Evitar la alineaci&oacute;n temporal";
 choices[17][2] = "Reconocer palabras aisladas y habla continua";
 choices[17][3] = "Conseguir resultados &oacute;ptimos con vocabularios de 5.000 palabras";
 answers[17] = 2;
 units[17] = ['99', '100'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 5962. ";
 preguntaids[17] = 5962


//  Id pregunta: 5976 Año de creación de pregunta: 2007
 questions[18]= "19)  El protocolo de escritura anticipada en el fichero diario (fichero log) de una base de datos establece que:";
 choices[18]= new Array();
 choices[18][0] = "La escritura de un elemento de datos deber&iacute;a hacerse antes de cualquier operaci&oacute;n en el diario";
 choices[18][1] = "El registro del diario de una operaci&oacute;n deber&iacute;a escribirse antes de que se escriban los datos reales";
 choices[18][2] = "Todos los registros del diario deber&iacute;an escribirse antes de que comenzara a ejecutarse una nuevatransacci&oacute;n";
 choices[18][3] = "El diario nunca necesita escribirse en disco";
 answers[18] = 1;
 units[18] = ['100'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 5976. ";
 preguntaids[18] = 5976


//  Id pregunta: 10366 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes no es un modelo cl&aacute;sico de recuperaci&oacute;n de informaci&oacute;n?";
 choices[19]= new Array();
 choices[19][0] = "Probabil&iacute;stico";
 choices[19][1] = "Estructurado";
 choices[19][2] = "Vectorial";
 choices[19][3] = "Booleano";
 answers[19] = 1;
 units[19] = ['100'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 10366. ";
 preguntaids[19] = 10366


//  Id pregunta: 9674 Año de creación de pregunta: 2014
 questions[20]= "21)  Ordene las siguientes t&eacute;cnicas de respaldo de menor a mayor tiempo de recuperaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "full, diferencial, incremental";
 choices[20][1] = "full, incremental, diferencial";
 choices[20][2] = "incremental, diferencial, full";
 choices[20][3] = "diferencial, incremental, full";
 answers[20] = 0;
 units[20] = ['100'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 9674. ";
 preguntaids[20] = 9674


//  Id pregunta: 6447 Año de creación de pregunta: 2003
 questions[21]= "22)  En la recuperaci&oacute;n de la informaci&oacute;n, los modelos cl&aacute;sicos basados en aproximaciones estad&iacute;sticas son";
 choices[21]= new Array();
 choices[21][0] = "Booleano";
 choices[21][1] = "Vectorial";
 choices[21][2] = "Probabil&iacute;stico";
 choices[21][3] = "Todos los anteriores son modelos cl&aacute;sicos";
 answers[21] = 3;
 units[21] = ['100'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6447. ";
 preguntaids[21] = 6447


//  Id pregunta: 6450 Año de creación de pregunta: 2003
 questions[22]= "23)  &iquest;Qu&eacute; directiva transpone la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones?";
 choices[22]= new Array();
 choices[22][0] = "Directiva 2006/24/CE";
 choices[22][1] = "Directiva 1999/93/CE";
 choices[22][2] = "Directiva 95/46/CE";
 choices[22][3] = "Directiva 2000/31/CE";
 answers[22] = 0;
 units[22] = ['100'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 6450. ";
 preguntaids[22] = 6450


//  Id pregunta: 7062 Año de creación de pregunta: 2010
 questions[23]= "24)  Los ficheros inversos se utilizan preferentemente en:";
 choices[23]= new Array();
 choices[23][0] = "Bases de datos relacionales.";
 choices[23][1] = "Bases de datos jer&aacute;rquicas.";
 choices[23][2] = "Sistemas de recuperaci&oacute;n de informaci&oacute;n";
 choices[23][3] = "Bases de datos reticulares.";
 answers[23] = 2;
 units[23] = ['100'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 7062. ";
 preguntaids[23] = 7062


//  Id pregunta: 8176 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Qu&eacute; es una copia de seguridad incremental?";
 choices[24]= new Array();
 choices[24][0] = "Aquella que copia tan solo los archivos modificados desde la &uacute;ltima copia de seguridad normal, y no marca &eacute;stos como copiados.";
 choices[24][1] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de seguridad normal, y no marca lodos estos archivos como copiados";
 choices[24][2] = "Aquella que copia tan solo los archivos creados desde la &uacute;ltima copia de seguridad normal y marca &eacute;stos como copiados.";
 choices[24][3] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de segundad normal, y marca todos estos archivos como copiados.";
 answers[24] = 3;
 units[24] = ['53', '100'];
 blocks[24] = ['B2', 'B3'];
 comments[24] = "Id Pregunta: 8176. Examen TIC A2 2010 interna";
 preguntaids[24] = 8176


//  Id pregunta: 9671 Año de creación de pregunta: 2014
 questions[25]= "26)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[25]= new Array();
 choices[25][0] = "Determina la frecuencia de las copias de respaldo.";
 choices[25][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[25][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[25][3] = "A y B.";
 answers[25] = 3;
 units[25] = ['100'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 9671. ";
 preguntaids[25] = 9671


//  Id pregunta: 5972 Año de creación de pregunta: 2007
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones relacionadas con Dublin Core NO es cierta?";
 choices[26]= new Array();
 choices[26][0] = "El conjunto de sus elementos est&aacute; definido en el Est&aacute;ndar Z39.85-2001 de la NISO (National InformationStandards Organization)";
 choices[26][1] = "Los metadatos Dublin Core se almacenan frecuentemente en la cabecera HEAD de un documento HTML(Hypertext Markup Language)";
 choices[26][2] = "Su nivel b&aacute;sico contiene 15 elementos sobre metadatos";
 choices[26][3] = "Es una iniciativa de la W3C (World Wide Web Consortium)";
 answers[26] = 3;
 units[26] = ['100'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 5972. ";
 preguntaids[26] = 5972


//  Id pregunta: 6446 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;Cu&aacute;l es la principal l&iacute;nea de trabajo en el campo de la recuperaci&oacute;n de la informaci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "Aproximaciones sem&aacute;nticas";
 choices[27][1] = "Estad&iacute;sticas";
 choices[27][2] = "Las respuestas a) y b) son verdaderas";
 choices[27][3] = "Las respuestas a) y b) son falsas";
 answers[27] = 2;
 units[27] = ['100'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 6446. ";
 preguntaids[27] = 6446


//  Id pregunta: 9337 Año de creación de pregunta: 2014
 questions[28]= "29)  &iquest;Qu&eacute; modelo de recuperaci&oacute;n de informaci&oacute;n se basa en el Teorema de Bayes?a) Vectorial.X b) Probabil&iacute;stico.c) Indexaci&oacute;n por Sem&aacute;ntica Latente.d) Basado en la teor&iacute;a de conjuntos.";
 choices[28]= new Array();
 choices[28][0] = "Vectorial.";
 choices[28][1] = "Probabil&iacute;stico.";
 choices[28][2] = "Indexaci&oacute;n por Sem&aacute;ntica Latente.";
 choices[28][3] = "Basado en la teor&iacute;a de conjuntos.";
 answers[28] = 1;
 units[28] = ['100'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 9337. ";
 preguntaids[28] = 9337


//  Id pregunta: 9668 Año de creación de pregunta: 2014
 questions[29]= "30)  En el &aacute;mbito de la continuidad de negocio, la &quot;ventana de interrupci&oacute;n&quot; se define como:";
 choices[29]= new Array();
 choices[29][0] = "La cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[29][1] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[29][2] = "Se determina en funci&oacute;n de la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n de las operaciones";
 choices[29][3] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 answers[29] = 1;
 units[29] = ['100'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 9668. ";
 preguntaids[29] = 9668


//  Id pregunta: 6275 Año de creación de pregunta: 2003
 questions[30]= "31)  Marcar la opci&oacute;n incorrecta. El tesauro o diccionario de descriptores es un conjunto predefinido de palabras claves que muestran las siguientes relaciones:";
 choices[30]= new Array();
 choices[30][0] = "Relaciones de equivalencia o preferencia";
 choices[30][1] = "Relaciones jer&aacute;rquicas";
 choices[30][2] = "Relaciones asociativas o de afinidad";
 choices[30][3] = "Relaciones instrumentales";
 answers[30] = 3;
 units[30] = ['100'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 6275. ";
 preguntaids[30] = 6275


