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
//  Id pregunta: 3336 Año de creación de pregunta: 2004
 questions[0]= "1)  En cuanto a los procedimientos de inferencia de las estructuras de representaci&oacute;n del conocimiento, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[0]= new Array();
 choices[0][0] = "En las redes semanticas los procedimientos de inferencia son la herencia y el equiparaci&oacute;n";
 choices[0][1] = "En los marcos los procedimientos de inferencia son la deducci&oacute;n de valores de slots, la actualizaci&oacute;n de valores de slots, y la emparejamiento";
 choices[0][2] = "En las reglas los procedimientos de inferencia son el encadenamiento hacia adelante, y el encadenamiento hacia atr&aacute;s";
 choices[0][3] = "Todas son correctas";
 answers[0] = 3;
 units[0] = ['68'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3336. ";
 preguntaids[0] = 3336


//  Id pregunta: 3323 Año de creación de pregunta: 2004
 questions[1]= "2)  Indique la opci&oacute;n correcta respecto a un fichero con permisos de acceso 705";
 choices[1]= new Array();
 choices[1][0] = "Permite la lectura y escritura del propietario";
 choices[1][1] = "Permite la escritura del grupo";
 choices[1][2] = "Permite la escritura y ejecuci&oacute;n por parte de cualquier usuario";
 choices[1][3] = "Permite la lectura y escritura de cualquier usuario";
 answers[1] = 0;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3323. ";
 preguntaids[1] = 3323


//  Id pregunta: 3356 Año de creación de pregunta: 2006
 questions[2]= "3)  Se dispone &uacute;nicamente de dos discos, con los que se pretende implementar una matriz redundante (RAID) con tolerancia a fallos y con el mejor rendimiento posible tanto en lectura como en escritura, &iquest;qu&eacute; tipo escoger&iacute;a?";
 choices[2]= new Array();
 choices[2][0] = "RAID-0";
 choices[2][1] = "RAID-1";
 choices[2][2] = "RAID-3";
 choices[2][3] = "RAID-0 &oacute; RAID-1";
 answers[2] = 1;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3356. ";
 preguntaids[2] = 3356


//  Id pregunta: 3378 Año de creación de pregunta: 2006
 questions[3]= "4)  En el Directorio Activo, el conjunto de atributos de un objeto dado, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Contenedor";
 choices[3][1] = "Esquema";
 choices[3][2] = "&Aacute;rbol";
 choices[3][3] = "P&aacute;gina";
 answers[3] = 1;
 units[3] = ['58'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3378. ";
 preguntaids[3] = 3378


//  Id pregunta: 3330 Año de creación de pregunta: 2004
 questions[4]= "5)  &iquest;Qu&eacute; hace el comando SQL update?";
 choices[4]= new Array();
 choices[4][0] = "Modifica la estructura de una tabla agregando o eliminando campos";
 choices[4][1] = "Modifica la estructura de una vista";
 choices[4][2] = "Modifica los valores de los campos de una tabla";
 choices[4][3] = "Modifica la estructura de una tabla cambiando la definici&oacute;n de sus campos";
 answers[4] = 2;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3330. ";
 preguntaids[4] = 3330


//  Id pregunta: 3322 Año de creación de pregunta: 2004
 questions[5]= "6)  &iquest;En que generaci&oacute;n aparecen los circuitos integrados LSI?";
 choices[5]= new Array();
 choices[5][0] = "En la primera generaci&oacute;n";
 choices[5][1] = "En la segunda generaci&oacute;n";
 choices[5][2] = "En la tercera generaci&oacute;n";
 choices[5][3] = "En la cuarta generaci&oacute;n";
 answers[5] = 3;
 units[5] = ['52'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3322. ";
 preguntaids[5] = 3322


//  Id pregunta: 3325 Año de creación de pregunta: 2004
 questions[6]= "7)  &iquest;Qu&eacute; es un cluster?";
 choices[6]= new Array();
 choices[6][0] = "Un sistema paralelo distribuido de &aacute;mbito local";
 choices[6][1] = "Un sistema paralelo distribuido de &aacute;mbito global";
 choices[6][2] = "Un sistema distribuido paralelo de &aacute;mbito local";
 choices[6][3] = "Un sistema distribuido paralelo de &aacute;mbito global";
 answers[6] = 0;
 units[6] = ['49'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3325. ";
 preguntaids[6] = 3325


//  Id pregunta: 3344 Año de creación de pregunta: 2006
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones se aproxima a la definici&oacute;n de FLOPs?:";
 choices[7]= new Array();
 choices[7][0] = "Expresa la velocidad de ejecuci&oacute;n de las instrucciones de una m&aacute;quina.";
 choices[7][1] = "Expresa la potencia en generaci&oacute;n de c&aacute;lculos cient&iacute;fico-t&eacute;cnicos.";
 choices[7][2] = "Expresa la velocidad para realizar operaciones en coma flotante por unidad de tiempo.";
 choices[7][3] = "Expresa la velocidad para realizar operaciones en coma flotante por segundo.";
 answers[7] = 3;
 units[7] = ['49'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3344. ";
 preguntaids[7] = 3344


//  Id pregunta: 3359 Año de creación de pregunta: 2006
 questions[8]= "9)  Un sistema multiusuario es:";
 choices[8]= new Array();
 choices[8][0] = "Un sistema que posee varias CPUs y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[8][1] = "Un sistema que posee una sola CPU y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[8][2] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero concurrente de usuarios";
 choices[8][3] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero no concurrente de usuarios";
 answers[8] = 2;
 units[8] = ['50'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3359. ";
 preguntaids[8] = 3359


//  Id pregunta: 3339 Año de creación de pregunta: 2004
 questions[9]= "10)  &iquest;Con que otro nombre se conoce tambi&eacute;n a la informaci&oacute;n georreferenciada?";
 choices[9]= new Array();
 choices[9][0] = "Informaci&oacute;n espacial.";
 choices[9][1] = "Informaci&oacute;n geogr&aacute;fica.";
 choices[9][2] = "Geodatos.";
 choices[9][3] = "Todas las anteriores.";
 answers[9] = 3;
 units[9] = ['71'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3339. ";
 preguntaids[9] = 3339


//  Id pregunta: 3353 Año de creación de pregunta: 2006
 questions[10]= "11)  Las memorias cach&eacute; sirven para:";
 choices[10]= new Array();
 choices[10][0] = "Representar un sistema de almacenamiento secundario basado en jerarqu&iacute;a.";
 choices[10][1] = "Representar un sistema de almacenamiento auxiliar basado en jerarqu&iacute;a.";
 choices[10][2] = "Representar un sistema de almacenamiento secundario basado en la rapidez.";
 choices[10][3] = "Representar un sistema de almacenamiento basado en la rapidez.";
 answers[10] = 3;
 units[10] = ['52'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3353. ";
 preguntaids[10] = 3353


//  Id pregunta: 3384 Año de creación de pregunta: 2006
 questions[11]= "12)  Qu&eacute; t&eacute;cnica se utiliza para eliminar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos";
 choices[11]= new Array();
 choices[11][0] = "Back-roll";
 choices[11][1] = "Bloqueo";
 choices[11][2] = "Inter-Roll";
 choices[11][3] = "Roll-back";
 answers[11] = 1;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3384. ";
 preguntaids[11] = 3384


//  Id pregunta: 3365 Año de creación de pregunta: 2006
 questions[12]= "13)  La posibilidad de un sistema operativo de ejecutar diferentes partes de un programa simult&aacute;neamente, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Multitasking";
 choices[12][1] = "Multithreading";
 choices[12][2] = "Multiuser";
 choices[12][3] = "Multiprocessing";
 answers[12] = 1;
 units[12] = ['56'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3365. ";
 preguntaids[12] = 3365


//  Id pregunta: 3375 Año de creación de pregunta: 2006
 questions[13]= "14)  Un sistema operativo trata de obtener el m&aacute;ximo rendimiento del hardware que controla. La multitarea y la existencia de varios procesadores son algunas herramientas para conseguirlo. Se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[13]= new Array();
 choices[13][0] = "No existe incompatibilidad en emplear multiprogramaci&oacute;n y tiempo compartido en un sistema multiprocesador.";
 choices[13][1] = "Una transacci&oacute;n se inicia con la petici&oacute;n de un terminal y acaba con la respuesta de la CPU.";
 choices[13][2] = "En un sistema con time-sharing, la asignaci&oacute;n de prioridades a unos procesos respecto de otros no mejora el rendimiento.";
 choices[13][3] = "El sistema operativo no es responsable de la sincronizaci&oacute;n de procesos, son las aplicaciones quienes se encargan de esa tarea.";
 answers[13] = 0;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3375. ";
 preguntaids[13] = 3375


//  Id pregunta: 3335 Año de creación de pregunta: 2004
 questions[14]= "15)  Respecto al software gratuito y al software libre podemos decir que";
 choices[14]= new Array();
 choices[14][0] = "El software gratuito siempre es libre";
 choices[14][1] = "El software libre siempre es gratuito";
 choices[14][2] = "El software libre y el software gratuito son dos terminos equivalentes";
 choices[14][3] = "Ninguna de las afirmaciones anteriores es correcta";
 answers[14] = 3;
 units[14] = ['66'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3335. ";
 preguntaids[14] = 3335


//  Id pregunta: 3387 Año de creación de pregunta: 2006
 questions[15]= "16)  &iquest;Qu&eacute; es el CLR?";
 choices[15]= new Array();
 choices[15][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[15][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[15][2] = "Una biblioteca de clases de objetos";
 choices[15][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[15] = 1;
 units[15] = ['63'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3387. ";
 preguntaids[15] = 3387


//  Id pregunta: 3318 Año de creación de pregunta: 2004
 questions[16]= "17)  Indique la afirmaci&oacute;n incorrecta, respecto a SMP";
 choices[16]= new Array();
 choices[16][0] = "Es una arquitectura de ordenador con performances muy r&aacute;pidas";
 choices[16][1] = "Tiene multiples CPU disponibles para efectuar procesos individuales completos simult&aacute;neamente";
 choices[16][2] = "Todas las CPU comparten la misma memoria";
 choices[16][3] = "Sus siglas son Symetric Massively Processing";
 answers[16] = 3;
 units[16] = ['49'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3318. ";
 preguntaids[16] = 3318


//  Id pregunta: 3319 Año de creación de pregunta: 2004
 questions[17]= "18)  &iquest;C&oacute;mo se conoce la taxonom&iacute;a, que clasifica las arquitecturas de ordenadores en SISD, SIMD, MISD, MIMD?";
 choices[17]= new Array();
 choices[17][0] = "Kuck";
 choices[17][1] = "Treleaven";
 choices[17][2] = "Flynn";
 choices[17][3] = "Gajski y Pier";
 answers[17] = 2;
 units[17] = ['49'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3319. ";
 preguntaids[17] = 3319


//  Id pregunta: 3369 Año de creación de pregunta: 2006
 questions[18]= "19)  Respecto a la pol&iacute;tica de planificaci&oacute;n de procesos de turno rotatorio o &quot;Round Robin&quot;, es FALSO afirmar que";
 choices[18]= new Array();
 choices[18][0] = "Penaliza a los procesos cortos";
 choices[18][1] = "La penalizaci&oacute;n a los procesos intensivos en E/S puede resolverse con una cola prioritaria para los procesos que salieron de ejecuci&oacute;n por E/S";
 choices[18][2] = "Cada proceso recibe una fracci&oacute;n de tiempo antes de ser expulsado";
 choices[18][3] = "La selecci&oacute;n del siguiente proceso se realiza seg&uacute;n la pol&iacute;tica FCFS (First Come, First Served)";
 answers[18] = 0;
 units[18] = ['56'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3369. ";
 preguntaids[18] = 3369


//  Id pregunta: 3383 Año de creación de pregunta: 2006
 questions[19]= "20)  Identifique el t&eacute;rmino que no corresponde a una distribuci&oacute;n de Linux";
 choices[19]= new Array();
 choices[19][0] = "Ubuntu";
 choices[19][1] = "Debian";
 choices[19][2] = "Mandeva";
 choices[19][3] = "Red Hat";
 answers[19] = 2;
 units[19] = ['57'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3383. ";
 preguntaids[19] = 3383


//  Id pregunta: 3368 Año de creación de pregunta: 2006
 questions[20]= "21)  En los sistemas Unix el superbloque:";
 choices[20]= new Array();
 choices[20][0] = "Contiene informaci&oacute;n para el arranque del sistema";
 choices[20][1] = "Es el bloque 0 en la organizaci&oacute;n de un disco";
 choices[20][2] = "Contiene el n&uacute;mero de i-nodos y el n&uacute;mero de bloques del sistema de archivos";
 choices[20][3] = "Todas son correctas";
 answers[20] = 2;
 units[20] = ['57'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3368. ";
 preguntaids[20] = 3368


//  Id pregunta: 3333 Año de creación de pregunta: 2004
 questions[21]= "22)  &iquest;Qu&eacute; es un JNI?";
 choices[21]= new Array();
 choices[21][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[21][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[21][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[21][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[21] = 3;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3333. ";
 preguntaids[21] = 3333


//  Id pregunta: 3355 Año de creación de pregunta: 2006
 questions[22]= "23)  La t&eacute;cnica usada para incrementar la velocidad de los PC, copiando a memoria RAM el c&oacute;digo de la memoria BIOS ROM tras el arranque, se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Overclocking";
 choices[22][1] = "Ghosting";
 choices[22][2] = "Shadowing";
 choices[22][3] = "La BIOS no se puede ejecutar en una memoria RAM";
 answers[22] = 2;
 units[22] = ['50'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3355. ";
 preguntaids[22] = 3355


//  Id pregunta: 3340 Año de creación de pregunta: 2004
 questions[23]= "24)  Si comparamos una base de datos relacional y otra multidimensional, es FALSO que:";
 choices[23]= new Array();
 choices[23][0] = "Las BDR son mejores que las BDM para obtener vistas de unos datos en funci&oacute;n de otros.";
 choices[23][1] = "Las BDR est&aacute;n optimizadas para la inserci&oacute;n de registros y el control concurrente de usuarios.";
 choices[23][2] = "Las BDM tienen informaci&oacute;n m&aacute;s consistente que las BDR.";
 choices[23][3] = "Las BDM son mejores para el estudio a alto nivel de los datos, ya que ofrecen mayor flexibilidad y rapidez de acceso para el &aacute;nalisis de los mismos.";
 answers[23] = 0;
 units[23] = ['72'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3340. ";
 preguntaids[23] = 3340


//  Id pregunta: 3364 Año de creación de pregunta: 2006
 questions[24]= "25)  Los sistemas operativos multitarea:";
 choices[24]= new Array();
 choices[24][0] = "Se conocen tambi&eacute;n como sistemas multiproceso";
 choices[24][1] = "El procesador cambia de una tarea a otra dando la apariencia de que se realizan concurrentemente";
 choices[24][2] = "Son &quot;preemptive&quot; si cada tarea controla el tiempo que utiliza la CPU";
 choices[24][3] = "Son &quot;cooperative&quot; si el sistema operativo controla el tiempo que cada tarea utiliza la CPU";
 answers[24] = 1;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3364. ";
 preguntaids[24] = 3364


//  Id pregunta: 3360 Año de creación de pregunta: 2006
 questions[25]= "26)  Un mainframe:";
 choices[25]= new Array();
 choices[25][0] = "Es equivalente a una supercomputadora cara";
 choices[25][1] = "Utiliza toda su potencia en ejecutar unos pocos programas lo m&aacute;s r&aacute;pidamente posible";
 choices[25][2] = "Es multitarea y multiproceso, pero monousuario";
 choices[25][3] = "Utiliza su potencia para ejecutar muchos programas concurrentemente";
 answers[25] = 3;
 units[25] = ['49'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3360. ";
 preguntaids[25] = 3360


//  Id pregunta: 3382 Año de creación de pregunta: 2006
 questions[26]= "27)  Cu&aacute;l de las siguientes &oacute;rdenes, define el Lenguaje de Manipulaci&oacute;n de Datos (DML) de un SGBD";
 choices[26]= new Array();
 choices[26][0] = "Create table";
 choices[26][1] = "Revoke";
 choices[26][2] = "Insert";
 choices[26][3] = "Todas las anteriores";
 answers[26] = 2;
 units[26] = ['60'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3382. ";
 preguntaids[26] = 3382


//  Id pregunta: 3337 Año de creación de pregunta: 2004
 questions[27]= "28)  Si hablamos de los procedimientos if-needed,e if-added, es cierto que";
 choices[27]= new Array();
 choices[27][0] = "El procedimiento if-needed es un procedimiento de validadci&oacute;n que se ejecuta cuando se a&ntilde;ade un valor a una ranura.";
 choices[27][1] = "El procedimiento if-added es un procedimiento que se ejecuta siempre que se a&ntilde;ade un valor determinado a un slot";
 choices[27][2] = "Ambos forman parte de las facetas declarativas de un marco";
 choices[27][3] = "Las afirmaciones A) y B) son correctas";
 answers[27] = 1;
 units[27] = ['68'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3337. ";
 preguntaids[27] = 3337


//  Id pregunta: 3317 Año de creación de pregunta: 2004
 questions[28]= "29)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[28]= new Array();
 choices[28][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[28][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[28][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[28][3] = "Por medio de SQL embebido";
 answers[28] = 1;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3317. MAP-B 2003";
 preguntaids[28] = 3317


//  Id pregunta: 3389 Año de creación de pregunta: 2006
 questions[29]= "30)  En la arquitectura de la plataforma .NET";
 choices[29]= new Array();
 choices[29][0] = "CLR es el entorno de ejecuci&oacute;n para .NET";
 choices[29][1] = "CLS define las reglas que debe cumplir todo lenguaje que quiera trabajar con .NET.";
 choices[29][2] = "WebForms se utiliza para el desarrollo de aplicaciones dirigidas a Internet";
 choices[29][3] = "Todas son correctas";
 answers[29] = 3;
 units[29] = ['63'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3389. ";
 preguntaids[29] = 3389


//  Id pregunta: 3374 Año de creación de pregunta: 2006
 questions[30]= "31)  Entre los siguientes, se&ntilde;ale el que no es un sistema de archivos de sistemas operativos de la familia UNIX";
 choices[30]= new Array();
 choices[30][0] = "ZFS";
 choices[30][1] = "XFS";
 choices[30][2] = "CFS";
 choices[30][3] = "NFS";
 answers[30] = 2;
 units[30] = ['57'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3374. CFS es Cluster File System";
 preguntaids[30] = 3374


//  Id pregunta: 3385 Año de creación de pregunta: 2006
 questions[31]= "32)  Qu&eacute; es JDBC";
 choices[31]= new Array();
 choices[31][0] = "Un modelo de objetos ActiveX";
 choices[31][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C";
 choices[31][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[31][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[31] = 3;
 units[31] = ['61'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3385. ";
 preguntaids[31] = 3385


//  Id pregunta: 3334 Año de creación de pregunta: 2004
 questions[32]= "33)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[32]= new Array();
 choices[32][0] = "Driver de tipo I";
 choices[32][1] = "Driver de tipo II";
 choices[32][2] = "Driver de tipo III";
 choices[32][3] = "Driver de tipo IV";
 answers[32] = 2;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3334. ";
 preguntaids[32] = 3334


//  Id pregunta: 3332 Año de creación de pregunta: 2004
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[33]= new Array();
 choices[33][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[33][1] = "Es dependiente de la plataforma";
 choices[33][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[33][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[33] = 1;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3332. ";
 preguntaids[33] = 3332


//  Id pregunta: 3388 Año de creación de pregunta: 2006
 questions[34]= "35)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[34]= new Array();
 choices[34][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[34][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[34][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[34][3] = "Programa de dibujo";
 answers[34] = 0;
 units[34] = ['63'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3388. ";
 preguntaids[34] = 3388


//  Id pregunta: 3391 Año de creación de pregunta: 2006
 questions[35]= "36)  Se&ntilde;alar la afirmaci&oacute;n FALSA sobre los APPLETS de Java";
 choices[35]= new Array();
 choices[35][0] = "Programa Java que proporciona funcionalidad avanzada a una p&aacute;gina web";
 choices[35][1] = "S&oacute;lo utiliza recursos del cliente, no interviene nada el servidor.";
 choices[35][2] = "En muchas ocasiones no puede leer o escribir ficheros en la m&aacute;quina local en la que se ejecute";
 choices[35][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[35] = 1;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3391. Usa recursos del servidor para descargar el propio Applet y, en su caso, hacer consultas.";
 preguntaids[35] = 3391


//  Id pregunta: 3345 Año de creación de pregunta: 2006
 questions[36]= "37)  Para definir un sistema SIMD se podr&iacute;a decir que &hellip;:";
 choices[36]= new Array();
 choices[36][0] = "Una instrucci&oacute;n no puede actuar sobre alguno de los elementos de procesamiento.";
 choices[36][1] = "Una instrucci&oacute;n act&uacute;a sobre un elemento de procesamiento.";
 choices[36][2] = "Una instrucci&oacute;n act&uacute;a sobre uno o varios elementos de procesamiento.";
 choices[36][3] = "Ninguna de las anteriores.";
 answers[36] = 2;
 units[36] = ['49'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3345. ";
 preguntaids[36] = 3345


//  Id pregunta: 3370 Año de creación de pregunta: 2006
 questions[37]= "38)  Las partes del sistema operativo que acceden directamente a los recursos hardware";
 choices[37]= new Array();
 choices[37][0] = "Se ejecutan en modo usuario";
 choices[37][1] = "Se desarrollan por los usuarios";
 choices[37][2] = "Se desarrollan de forma gen&eacute;rica";
 choices[37][3] = "Se ejecutan en modo protegido";
 answers[37] = 3;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3370. ";
 preguntaids[37] = 3370


//  Id pregunta: 3379 Año de creación de pregunta: 2006
 questions[38]= "39)  En el entorno Microsoft WebDAV se utiliza para";
 choices[38]= new Array();
 choices[38][0] = "Recuperaci&oacute;n automatizada del sistema";
 choices[38][1] = "Para sincronizaci&oacute;n de copias de DFS";
 choices[38][2] = "Compartici&oacute;n remota de documentos";
 choices[38][3] = "Encriptaci&oacute;n del sistema de archivos";
 answers[38] = 2;
 units[38] = ['58'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3379. ";
 preguntaids[38] = 3379


//  Id pregunta: 3363 Año de creación de pregunta: 2006
 questions[39]= "40)  La arquitectura cliente/servidor:";
 choices[39]= new Array();
 choices[39][0] = "Se conoce tambi&eacute;n como arquitectura de 3 capas o niveles, siendo la tercera una capa situada entre el cliente y el servidor donde reside la l&oacute;gica de negocio";
 choices[39][1] = "Involucra a un solo cliente que se comunica con un solo servidor";
 choices[39][2] = "Es la m&aacute;s adecuada para aplicaciones en continua evoluci&oacute;n y con datos distribuidos";
 choices[39][3] = "Permite la ejecuci&oacute;n de los tratamientos de clientes y servidor en el mismo equipo o en diferentes, indistintamente";
 answers[39] = 3;
 units[39] = ['55'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3363. ";
 preguntaids[39] = 3363


//  Id pregunta: 3361 Año de creación de pregunta: 2006
 questions[40]= "41)  Ordene de menor a mayor seg&uacute;n el n&uacute;mero de usuarios y carga de trabajo esperado:";
 choices[40]= new Array();
 choices[40][0] = "PC, estaci&oacute;n de trabajo, miniordenador, mainframe";
 choices[40][1] = "Miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 choices[40][2] = "PC, miniordenador, estaci&oacute;n de trabajo, mainframe";
 choices[40][3] = "Miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 answers[40] = 0;
 units[40] = ['49'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3361. ";
 preguntaids[40] = 3361


//  Id pregunta: 3393 Año de creación de pregunta: 2006
 questions[41]= "42)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[41]= new Array();
 choices[41][0] = "extern";
 choices[41][1] = "private";
 choices[41][2] = "final";
 choices[41][3] = "static";
 answers[41] = 3;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3393. ";
 preguntaids[41] = 3393


//  Id pregunta: 3371 Año de creación de pregunta: 2006
 questions[42]= "43)  El permiso de Unix 500 permite:";
 choices[42]= new Array();
 choices[42][0] = "Lectura y escritura para el propietario del archivo";
 choices[42][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[42][2] = "Lectura y escritura para todos los usuarios";
 choices[42][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[42] = 1;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3371. ";
 preguntaids[42] = 3371


//  Id pregunta: 3367 Año de creación de pregunta: 2006
 questions[43]= "44)  En los sistemas operativos actuales, cada nodo-i dispone de los siguientes apuntadores o &iacute;ndices:";
 choices[43]= new Array();
 choices[43][0] = "12 apuntadores directos, un indirecto simple, un indirecto doble y un indirecto triple";
 choices[43][1] = "10 apuntadores directos, 1 indirecto simle y 1 indirecto doble";
 choices[43][2] = "20 apuntadores directos, uno simple y uno doble";
 choices[43][3] = "todas son falsas";
 answers[43] = 0;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3367. ";
 preguntaids[43] = 3367


//  Id pregunta: 3381 Año de creación de pregunta: 2006
 questions[44]= "45)  Qu&eacute; tipo de arquitectura propone el comit&eacute; ANSI/X3/SPARC para la normalizaci&oacute;n de los SGBD";
 choices[44]= new Array();
 choices[44][0] = "Arquitectura de dos niveles: estructura global y vistas l&oacute;gicas";
 choices[44][1] = "Arquitectura de tres niveles: nivel interno o f&iacute;sico, conceptual y externo o l&oacute;gico";
 choices[44][2] = "Arquitectura de cuatro niveles: interno, f&iacute;sico, conceptual y l&oacute;gico";
 choices[44][3] = "Arquitectura de un &uacute;nico nivel denominado nivel global";
 answers[44] = 1;
 units[44] = ['60'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3381. ";
 preguntaids[44] = 3381


//  Id pregunta: 3350 Año de creación de pregunta: 2006
 questions[45]= "46)  &iquest;Cu&aacute;l ser&iacute;a una caracter&iacute;stica esencial a la hora de valorar un equipo mini?";
 choices[45]= new Array();
 choices[45][0] = "Disponer de microprocesadores RISCs.";
 choices[45][1] = "La modularidad.";
 choices[45][2] = "Disponer de sistemas de almacenamiento basados en RAID.";
 choices[45][3] = "La posibilidad de interconexi&oacute;n al host.";
 answers[45] = 1;
 units[45] = ['52'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3350. ";
 preguntaids[45] = 3350


//  Id pregunta: 3348 Año de creación de pregunta: 2006
 questions[46]= "47)  Indicar la respuesta falsa:";
 choices[46]= new Array();
 choices[46][0] = "La profundidad de color es el m&aacute;ximo n&uacute;mero de colores representables";
 choices[46][1] = "El n&uacute;mero de bits de un procesador gr&aacute;fico es independiente de la profundidad o resoluci&oacute;n";
 choices[46][2] = "La resoluci&oacute;n es el n&uacute;mero m&iacute;nimo de pixels que se muestran en pantalla (Pixels en horizontal x Pixels en vertical)";
 choices[46][3] = "La frecuencia de refresco es el n&uacute;mero de veces que se renueva la informaci&oacute;n en pantalla por segundo";
 answers[46] = 2;
 units[46] = ['52'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3348. ";
 preguntaids[46] = 3348


//  Id pregunta: 3324 Año de creación de pregunta: 2004
 questions[47]= "48)  &iquest;Para que se usa el comando &quot;chown&quot; en linux?";
 choices[47]= new Array();
 choices[47][0] = "Para cambiar los permisos sobre un recurso";
 choices[47][1] = "Para cambiar el propietario de un recurso";
 choices[47][2] = "Para cambiar el grupo al que pertenece un recurso";
 choices[47][3] = "Para cambiar la clave de acceso del usuario actual";
 answers[47] = 1;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3324. ";
 preguntaids[47] = 3324


//  Id pregunta: 3380 Año de creación de pregunta: 2006
 questions[48]= "49)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al software libre";
 choices[48]= new Array();
 choices[48][0] = "El kernel de linux es estable a pesar de sus continuas modificaciones";
 choices[48][1] = "El software libre es apto para usuarios no t&eacute;cnicos";
 choices[48][2] = "El SL puede funcionar con software propietario (interoperable)";
 choices[48][3] = "El software libre carece en la actualidad de un soporte adecuado";
 answers[48] = 3;
 units[48] = ['66'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3380. ";
 preguntaids[48] = 3380


//  Id pregunta: 3349 Año de creación de pregunta: 2006
 questions[49]= "50)  En relaci&oacute;n a las tarjetas gr&aacute;ficas:";
 choices[49]= new Array();
 choices[49][0] = "La mayor parte ya son para bus PCI-E (PCI Express)";
 choices[49][1] = "Se pueden conectar al bus AGP, entre otros";
 choices[49][2] = "La resoluci&oacute;n m&aacute;s habitual es de 640 x 480";
 choices[49][3] = "Las respuestas a) y b) son correctas";
 answers[49] = 3;
 units[49] = ['50'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3349. ";
 preguntaids[49] = 3349


//  Id pregunta: 3351 Año de creación de pregunta: 2006
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal (RAM) de un ordenador?";
 choices[50]= new Array();
 choices[50][0] = "Volatilidad.";
 choices[50][1] = "Estructuraci&oacute;n.";
 choices[50][2] = "Jerarquizaci&oacute;n.";
 choices[50][3] = "Dinamismo.";
 answers[50] = 2;
 units[50] = ['52'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3351. ";
 preguntaids[50] = 3351


//  Id pregunta: 3329 Año de creación de pregunta: 2004
 questions[51]= "52)  Indique la afirmaci&oacute;n correcta";
 choices[51]= new Array();
 choices[51][0] = "Una relaci&oacute;n est&aacute; en 4&ordf;FN si no incluye dependencias combinacionales";
 choices[51][1] = "Una relaci&oacute;n est&aacute; en 2&ordf;FN si no incluye grupos repetitivos y sus atributos no primarios tienen una dependencia plena respecto a cada una de las claves y no con partes de estas";
 choices[51][2] = "Una relaci&oacute;n est&aacute; en 1&ordf;FN si incluye alg&uacute;n grupo repetitivo";
 choices[51][3] = "Una relaci&oacute;n est&aacute; en 3&ordf;FN si y solo si est&aacute; en 1&ordf;FN pero no en 2&ordf;FN";
 answers[51] = 1;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3329. ";
 preguntaids[51] = 3329


//  Id pregunta: 3376 Año de creación de pregunta: 2006
 questions[52]= "53)  &iquest;Qu&eacute; es MOSIX?";
 choices[52]= new Array();
 choices[52][0] = "Un sistema operativo monousuario";
 choices[52][1] = "Conjunto de herramientas para crear cl&uacute;sters basados en Linux";
 choices[52][2] = "El m&oacute;dulo encargado de la E/S en Linux";
 choices[52][3] = "API para ejecutar sentencias SQL";
 answers[52] = 1;
 units[52] = ['56'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3376. ";
 preguntaids[52] = 3376


//  Id pregunta: 3357 Año de creación de pregunta: 2006
 questions[53]= "54)  Se&ntilde;ale la opci&oacute;n correcta respecto a RAID, Redundant Array of Independent (or Inexpensive) Disks:";
 choices[53]= new Array();
 choices[53][0] = "RAID se puede implementar por software o hardware";
 choices[53][1] = "RAID se puede implementar s&oacute;lo por software";
 choices[53][2] = "RAID se puede implementar s&oacute;lo por hardware";
 choices[53][3] = "RAID no se puede implementar por software y hardware a la vez";
 answers[53] = 0;
 units[53] = ['53'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3357. ";
 preguntaids[53] = 3357


//  Id pregunta: 3354 Año de creación de pregunta: 2006
 questions[54]= "55)  Se&ntilde;ale la opci&oacute;n correcta respecto a los puertos IEEE 1394:";
 choices[54]= new Array();
 choices[54][0] = "Apple los denomina Firewire y Sony i.Link";
 choices[54][1] = "No son &uacute;tiles para transferencias de alta velocidad";
 choices[54][2] = "La velocidad, superior a puertos USB, es independiente de los dispositivos conectados";
 choices[54][3] = "La velocidad, inferior a puertos USB, se reparte entre los dispositivos conectados";
 answers[54] = 0;
 units[54] = ['52'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3354. ";
 preguntaids[54] = 3354


//  Id pregunta: 3373 Año de creación de pregunta: 2006
 questions[55]= "56)  El Bourne shell:";
 choices[55]= new Array();
 choices[55][0] = "Est&aacute; basado en el lenguaje C";
 choices[55][1] = "Es posterior al shell de korn";
 choices[55][2] = "No es un shell de Unix s&oacute;lo de Linux";
 choices[55][3] = "Es el shell m&aacute;s antiguo";
 answers[55] = 3;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3373. ";
 preguntaids[55] = 3373


//  Id pregunta: 3366 Año de creación de pregunta: 2006
 questions[56]= "57)  Cu&aacute;l es la misi&oacute;n del planificador (scheduler) de un SO";
 choices[56]= new Array();
 choices[56][0] = "Seleccionar el proceso que se va a ejecutar a continuaci&oacute;n";
 choices[56][1] = "Poner en ejecuci&oacute;n el proceso seleccionado";
 choices[56][2] = "Controlar la memoria principal";
 choices[56][3] = "Expulsar al proceso en ejecuci&oacute;n";
 answers[56] = 0;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3366. ";
 preguntaids[56] = 3366


//  Id pregunta: 3346 Año de creación de pregunta: 2006
 questions[57]= "58)  En la clasificaci&oacute;n de arquitectura de ordenadores de Flynn, los procesadores vectoriales corresponden a la clase de ordenadores:";
 choices[57]= new Array();
 choices[57][0] = "SISD ( Single Instruction Single Data)";
 choices[57][1] = "SIMD ( Single Instruction Multiple Data)";
 choices[57][2] = "MIMD (Multiple Instruction Multiple Data)";
 choices[57][3] = "MISD ( Multiple Instruction Single Data)";
 answers[57] = 1;
 units[57] = ['49'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3346. ";
 preguntaids[57] = 3346


//  Id pregunta: 3352 Año de creación de pregunta: 2006
 questions[58]= "59)  Cuando se utilizan t&eacute;cnicas de implementaci&oacute;n de elementos de procesamiento basadas en pipelining se dice que:";
 choices[58]= new Array();
 choices[58][0] = "El paralelismo sucede a nivel de procesador.";
 choices[58][1] = "El paralelismo sucede a nivel de multiprocesador.";
 choices[58][2] = "El paralelismo sucede a nivel de multicomputador.";
 choices[58][3] = "Ninguna de las anteriores.";
 answers[58] = 0;
 units[58] = ['50'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3352. ";
 preguntaids[58] = 3352


//  Id pregunta: 3377 Año de creación de pregunta: 2006
 questions[59]= "60)  El sistema operativo WindowsNT se basaba en una estructura de n&uacute;cleo de sistema operativo";
 choices[59]= new Array();
 choices[59][0] = "Microkernel";
 choices[59][1] = "Monol&iacute;tico";
 choices[59][2] = "Anillo";
 choices[59][3] = "Red";
 answers[59] = 0;
 units[59] = ['58'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3377. ";
 preguntaids[59] = 3377


//  Id pregunta: 3327 Año de creación de pregunta: 2004
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[60]= new Array();
 choices[60][0] = "SELECT";
 choices[60][1] = "CREATE";
 choices[60][2] = "INSERT";
 choices[60][3] = "UPDATE";
 answers[60] = 1;
 units[60] = ['61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3327. ";
 preguntaids[60] = 3327


//  Id pregunta: 3392 Año de creación de pregunta: 2006
 questions[61]= "62)  &iquest;C&oacute;mo se denominan en Java EE los componentes de negocio en el entorno servidor?";
 choices[61]= new Array();
 choices[61][0] = "Applet";
 choices[61][1] = "EJB";
 choices[61][2] = "DCOM+";
 choices[61][3] = "JSP";
 answers[61] = 1;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3392. ";
 preguntaids[61] = 3392


//  Id pregunta: 3321 Año de creación de pregunta: 2004
 questions[62]= "63)  &iquest;Qu&eacute; es el striping?";
 choices[62]= new Array();
 choices[62][0] = "Procedimiento de comprobaci&oacute;n para la detecci&oacute;n de errores";
 choices[62][1] = "M&eacute;todo por el que un bloque de datos se rompe en piezas, y estas se graban de modo simult&aacute;neo en varios discos";
 choices[62][2] = "Proceso que genera valores de paridad";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 1;
 units[62] = ['53'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3321. ";
 preguntaids[62] = 3321


//  Id pregunta: 3390 Año de creación de pregunta: 2006
 questions[63]= "64)  En el entorno Microsoft.NET:";
 choices[63]= new Array();
 choices[63][0] = "MS SQL Server Compact es una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[63][1] = "MS Web Deploy 3.5 es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[63][2] = "BizTalk Server es un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[63][3] = "Todas son correctas";
 answers[63] = 3;
 units[63] = ['63'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3390. ";
 preguntaids[63] = 3390


//  Id pregunta: 3347 Año de creación de pregunta: 2006
 questions[64]= "65)  La m&iacute;nima unidad de informaci&oacute;n gr&aacute;fica que puede ser controlada, se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Bit";
 choices[64][1] = "GIU";
 choices[64][2] = "Resoluci&oacute;n";
 choices[64][3] = "Pixel";
 answers[64] = 3;
 units[64] = ['50'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3347. ";
 preguntaids[64] = 3347


//  Id pregunta: 3326 Año de creación de pregunta: 2004
 questions[65]= "66)  &iquest;Qu&eacute; se conoce como grado de una relaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Un conjunto de valores";
 choices[65][1] = "El n&uacute;mero de tuplas";
 choices[65][2] = "El n&uacute;mero de atributos";
 choices[65][3] = "El n&uacute;mero de vistas";
 answers[65] = 2;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3326. ";
 preguntaids[65] = 3326


//  Id pregunta: 3362 Año de creación de pregunta: 2006
 questions[66]= "67)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[66]= new Array();
 choices[66][0] = "El procesamiento cooperativo es aquel en que 2 o m&aacute;s elementos l&oacute;gicos diferentes interact&uacute;an entre s&iacute; en la realizaci&oacute;n de una tarea com&uacute;n";
 choices[66][1] = "El procesamiento centralizado utiliza el host para ejecutar el 100% de la l&oacute;gica asociada a un programa";
 choices[66][2] = "Los procesamientos centralizados dan mayor flexibilidad y escalabilidad";
 choices[66][3] = "Los procesamientos cooperativos reducen los costes de inversi&oacute;n en equipamiento";
 answers[66] = 2;
 units[66] = ['55'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3362. ";
 preguntaids[66] = 3362


//  Id pregunta: 3358 Año de creación de pregunta: 2006
 questions[67]= "68)  Se&ntilde;ale la opci&oacute;n correcta respecto a SAN, Storage Area Network:";
 choices[67]= new Array();
 choices[67][0] = "SAN se sit&uacute;a entre el servidor de aplicaciones y el sistema de ficheros";
 choices[67][1] = "SAN es una red separada de la LAN, de dispositivos de almacenamiento homog&eacute;neos";
 choices[67][2] = "La diferencia entre NAS y SAN es que &eacute;sta &uacute;ltima utiliza fibra &oacute;ptica para sus interconexiones";
 choices[67][3] = "Todos los dispositivos de almacenamiento de la SAN son accesibles a todos los servidores de la LAN";
 answers[67] = 3;
 units[67] = ['53'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3358. ";
 preguntaids[67] = 3358


//  Id pregunta: 3343 Año de creación de pregunta: 2004
 questions[68]= "69)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[68]= new Array();
 choices[68][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[68][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[68][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[68][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[68] = 1;
 units[68] = ['72'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3343. ";
 preguntaids[68] = 3343


//  Id pregunta: 3320 Año de creación de pregunta: 2004
 questions[69]= "70)  Indique la respuesta correcta. El firewire...";
 choices[69]= new Array();
 choices[69][0] = "es conocido tambi&eacute;n como i.Link o IEEE1394";
 choices[69][1] = "permite la conexi&oacute;n &quot;en caliente&quot;";
 choices[69][2] = "Las opciones A) y B) son correctas";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = 2;
 units[69] = ['52'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3320. ";
 preguntaids[69] = 3320


//  Id pregunta: 3338 Año de creación de pregunta: 2004
 questions[70]= "71)  Sobre el e-learnig";
 choices[70]= new Array();
 choices[70][0] = "Es el uso de las tecnolog&iacute;as multimedia para mejorar y desarrollar nuevas estrategias de aprendizaje";
 choices[70][1] = "Algunas de las facilidades que aporta el e-learning son la accesibilidad geogr&aacute;fica y la flexibilidad en el tiempo";
 choices[70][2] = "Las dos afirmaciones anteriores son correctas";
 choices[70][3] = "Todas las afirmaciones anteriores son falsas";
 answers[70] = 2;
 units[70] = ['70'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3338. ";
 preguntaids[70] = 3338


//  Id pregunta: 3372 Año de creación de pregunta: 2006
 questions[71]= "72)  El comando de Unix 'tee'";
 choices[71]= new Array();
 choices[71][0] = "Muestra el archivo byte a byte incluyendo caracteres no imprimibles";
 choices[71][1] = "Descompone la entrada en 2 flujos de salida, una es la salida est&aacute;ndar y la otra un archivo";
 choices[71][2] = "No existe";
 choices[71][3] = "Busca un patr&oacute;n en uno o m&aacute;s archivos";
 answers[71] = 1;
 units[71] = ['57'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3372. ";
 preguntaids[71] = 3372


//  Id pregunta: 3328 Año de creación de pregunta: 2004
 questions[72]= "73)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[72]= new Array();
 choices[72][0] = "Acceso garantizado";
 choices[72][1] = "Independencia f&iacute;sica de los datos";
 choices[72][2] = "Gesti&oacute;n de una BDR";
 choices[72][3] = "Actualizaci&oacute;n de tablas";
 answers[72] = 3;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3328. ";
 preguntaids[72] = 3328


//  Id pregunta: 3331 Año de creación de pregunta: 2004
 questions[73]= "74)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[73]= new Array();
 choices[73][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[73][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[73][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[73][3] = "Todas son ciertas";
 answers[73] = 3;
 units[73] = ['63'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3331. ";
 preguntaids[73] = 3331


//  Id pregunta: 3341 Año de creación de pregunta: 2004
 questions[74]= "75)  &iquest;Qu&eacute; es FALSO respecto al NRC?";
 choices[74]= new Array();
 choices[74][0] = "Es un elemento utilizado en la pasarela de pago PISTA";
 choices[74][1] = "Sus siglas significan: N&uacute;mero de Referencia Completo";
 choices[74][2] = "Se compone del n&uacute;mero de justificante m&aacute;s unos caracteres de control";
 choices[74][3] = "Para obtener los caracteres de control se aplica la funci&oacute;n MAC del algoritmo DES a los datos de la operaci&oacute;n, mediante la clave privada de la entidad";
 answers[74] = 0;
 units[74] = ['75'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3341. ";
 preguntaids[74] = 3341


