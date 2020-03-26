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
//  Id pregunta: 4783 Año de creación de pregunta: 2002
 questions[0]= "1)  En el modelado de tr&aacute;fico basado en LIFO se usan los siguientes modelos:";
 choices[0]= new Array();
 choices[0][0] = "M/M/1.";
 choices[0][1] = "M/M/1/1.";
 choices[0][2] = "M/G/1.";
 choices[0][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[0] = 3;
 units[0] = ['56'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 4783. ";
 preguntaids[0] = 4783


//  Id pregunta: 3028 Año de creación de pregunta: 2002
 questions[1]= "2)  Se dispone de un ordenador monoprocesador que permite multiprogramaci&oacute;n, para lo cual es preciso:";
 choices[1]= new Array();
 choices[1][0] = "Utilizar t&eacute;cnicas de multiplexaci&oacute;n en el tiempo";
 choices[1][1] = "Utilizar t&eacute;cnicas de ejecuci&oacute;n de programas en tiempo real";
 choices[1][2] = "Utilizar t&eacute;cnicas de ejecuci&oacute;n en tiempo compartido";
 choices[1][3] = "Fragmentar de forma l&oacute;gica la memoria cach&eacute; en tantas partes ccomo programas en ejecuci&oacute;n tengamos";
 answers[1] = 2;
 units[1] = ['56'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3028. ";
 preguntaids[1] = 3028


//  Id pregunta: 5780 Año de creación de pregunta: 2007
 questions[2]= "3)  Dentro de la prueba de integraci&oacute;n de los sistemas 00, las pruebas basadas en el uso:";
 choices[2]= new Array();
 choices[2][0] = "se componen de pruebas basadas en errores, pruebas al azar y prueba por partici&oacute;n.";
 choices[2][1] = "construyen el sistema en capas, comenzando con las clases que no usan clases servidoras";
 choices[2][2] = "las pruebas basadas en el uso se engoblan en las pruebas de validaci&oacute;n";
 choices[2][3] = "est&aacute;n basadas en las pruebas unitarias del software convencional";
 answers[2] = 1;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 5780. ";
 preguntaids[2] = 5780


//  Id pregunta: 5999 Año de creación de pregunta: 2003
 questions[3]= "4)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por &ldquo;proceso zombi&rdquo;?:";
 choices[3]= new Array();
 choices[3][0] = "Un proceso hijo que ha acabado de realizar sus tareas pero que el padre todav&iacute;a no ha ejecutado la orden de esperar a que el hijo acabe.";
 choices[3][1] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes.";
 choices[3][2] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo proceso";
 choices[3][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita.";
 answers[3] = 0;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5999. TIC B 2007";
 preguntaids[3] = 5999


//  Id pregunta: 6599 Año de creación de pregunta: 2009
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos NO sirve para seleccionar la p&aacute;gina a descargar tras un fallo de p&aacute;gina?";
 choices[4]= new Array();
 choices[4][0] = "FIFO";
 choices[4][1] = "Aleatoria";
 choices[4][2] = "SJF";
 choices[4][3] = "NRU";
 answers[4] = 2;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 6599. ";
 preguntaids[4] = 6599


//  Id pregunta: 4829 Año de creación de pregunta: 2002
 questions[5]= "6)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[5]= new Array();
 choices[5][0] = "X especifica el n&uacute;mero de servidores.";
 choices[5][1] = "Y especifica la capacidad del sistema.";
 choices[5][2] = "Ninguna de las anteriores es v&aacute;lida.";
 choices[5][3] = "Las respuestas 'a' y 'b' son ciertas.";
 answers[5] = 3;
 units[5] = ['56'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 4829. ";
 preguntaids[5] = 4829


//  Id pregunta: 3139 Año de creación de pregunta: 2002
 questions[6]= "7)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[6]= new Array();
 choices[6][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[6][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[6][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[6][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[6] = 3;
 units[6] = ['56'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3139. ";
 preguntaids[6] = 3139


//  Id pregunta: 3138 Año de creación de pregunta: 2002
 questions[7]= "8)  La extensi&oacute;n de los documentos de plantillas en MS Word es:";
 choices[7]= new Array();
 choices[7][0] = "Doc";
 choices[7][1] = "Dot";
 choices[7][2] = "Pln";
 choices[7][3] = "Std";
 answers[7] = 1;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3138. ";
 preguntaids[7] = 3138


//  Id pregunta: 7743 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Cu&aacute;l de las afirmaciones siguientes es cierta con respecto a la t&eacute;cnica de gesti&oacute;n de memoria conocida como &laquo;paginaci&oacute;n&raquo;?";
 choices[8]= new Array();
 choices[8][0] = "Consiste en determinar qu&eacute; espacio vac&iacute;o en la memoria principal es el m&aacute;s indicado para ser asignado a un proceso.";
 choices[8][1] = "El espacio de memoria se divide en secciones f&iacute;sicas de igual tama&ntilde;o llamadas marcos de p&aacute;gina, las cuales sirven como unidad de almacenamiento de informaci&oacute;n.";
 choices[8][2] = "Es la memoria que queda desperdiciada al usar los m&eacute;todos de gesti&oacute;n de memoria tales como la asignaci&oacute;n.";
 choices[8][3] = "Es un esquema de manejo de memoria mediante el cual la estructura del programa refleja su divisi&oacute;n l&oacute;gica, llev&aacute;ndose a cabo una agrupaci&oacute;n l&oacute;gica de la informaci&oacute;n en bloques de tama&ntilde;o variable denominados segmentos.";
 answers[8] = 1;
 units[8] = ['56'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7743. ";
 preguntaids[8] = 7743


//  Id pregunta: 2935 Año de creación de pregunta: 2002
 questions[9]= "10)  La funci&oacute;n de planificar la secuencia de realizaci&oacute;n de las distintas tareas por la Unidad Central de Proceso es realizada por:";
 choices[9]= new Array();
 choices[9][0] = "El boot-strap";
 choices[9][1] = "El dispatcher";
 choices[9][2] = "El scheduler";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = 2;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2935. ";
 preguntaids[9] = 2935


//  Id pregunta: 5948 Año de creación de pregunta: 2007
 questions[10]= "11)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, unaindirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Pararepresentar un fichero de 2 MB:";
 choices[10]= new Array();
 choices[10][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[10][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[10][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[10][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[10] = 0;
 units[10] = ['56'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 5948. ";
 preguntaids[10] = 5948


//  Id pregunta: 2945 Año de creación de pregunta: 2002
 questions[11]= "12)  La multiprogramaci&oacute;n y el tiempo compartido, en los sistemas operativos, ocasionan:";
 choices[11]= new Array();
 choices[11][0] = "Que haya que crear mecanismos de seguridad como cortafuegos y sistemas de alimentaci&oacute;n ininterrumpida";
 choices[11][1] = "Que haya que crear mecanismos de protecci&oacute;n de injerencias entre diversos trabajos simult&aacute;neos, y entre diversos usuarios que quieran acceder a archivos o recursos como la impresora o los discos";
 choices[11][2] = "Que haya que comprobar al apagar el ordenador si a&uacute;n no han cerrado su sesi&oacute;n todos los usuarios";
 choices[11][3] = "Que haya que crear sistemas de protecci&oacute;n del monitor para evitar ataques no autorizados";
 answers[11] = 1;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2945. ";
 preguntaids[11] = 2945


//  Id pregunta: 3281 Año de creación de pregunta: 2003
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas es incorrecta";
 choices[12]= new Array();
 choices[12][0] = "Los ordenadores de segunda generaci&oacute;n, basados en circuitos integrados y multiprogramaci&oacute;n, se programaban en FORTRAN y lenguaje ensamblador, y se usaban para c&aacute;lculos cient&iacute;ficos u de ingenier&iacute;a";
 choices[12][1] = "Los sistemas operativos de tercera generaci&oacute;n permitieron desarrollar la t&eacute;cnica del &quot;spooling&quot; reduciendo considerablemente la necesidad de transporte de cintas magn&eacute;ticas";
 choices[12][2] = "En los sistemas operativos de 4 generaci&oacute;n se desarrolla por primera vez la t&eacute;cnica de multiprogramaci&oacute;n, una variante de los sistemas de tiempo compartido";
 choices[12][3] = "La primera generaci&oacute;n de sistemas operativos surge como consecuencia de los exitosos trabajos realizados por Babbage al desarrollar su m&aacute;quina anal&iacute;tica";
 answers[12] = 0;
 units[12] = ['56'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3281. ";
 preguntaids[12] = 3281


//  Id pregunta: 3220 Año de creación de pregunta: 2003
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica utilizada para el c&aacute;lculo de una funci&oacute;n de correspondencia que asigna a los bloques de la memoria principal posiciones definidas en la memoria cach&eacute;?:";
 choices[13]= new Array();
 choices[13][0] = "Directa.";
 choices[13][1] = "Totalmente asociativa.";
 choices[13][2] = "Asociativa por conjuntos.";
 choices[13][3] = "Suprayectiva.";
 answers[13] = 3;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3220. Junta Andaluc&iacute;a";
 preguntaids[13] = 3220


//  Id pregunta: 8051 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes pol&iacute;ticas de planificaci&oacute;n es de tipo preemptive?";
 choices[14]= new Array();
 choices[14][0] = "Shortest Job First (SJF)";
 choices[14][1] = "Shortest Remaining Time First (SRTF).";
 choices[14][2] = "First-come, first-served (FCFS)";
 choices[14][3] = "Shortest Process Next (SPN).";
 answers[14] = 1;
 units[14] = ['56'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8051. Examen TIC A2 2010";
 preguntaids[14] = 8051


//  Id pregunta: 3088 Año de creación de pregunta: 2002
 questions[15]= "16)  Un sistema operativo debe evolucionar f&aacute;cilmente porque:";
 choices[15]= new Array();
 choices[15][0] = "Hay frecuentes actualizaciones de hardware, y nuevos tipos del mismo; hay nuevos servicios que implican nuevos mecanismos de control; y se presentan siempre fallos no previstos que es necesario corregir";
 choices[15][1] = "No debe evolucionar f&aacute;cilmente, pues debe estar prevista desde su generaci&oacute;n la incorporaci&oacute;n de nuevos elementos de hardware";
 choices[15][2] = "No debe evolucionar f&aacute;cilmente, para evitar la f&aacute;cil generaci&oacute;n de versiones no autorizadas por el propietario";
 choices[15][3] = "Hay frecuentes desapariciones y apariciones de empresas de software, que podr&iacute;an dar lugar a una descontinuidad de versiones";
 answers[15] = 0;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3088. ";
 preguntaids[15] = 3088


//  Id pregunta: 3014 Año de creación de pregunta: 2002
 questions[16]= "17)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[16]= new Array();
 choices[16][0] = "Windows no puede ejecutarse bajo Linux";
 choices[16][1] = "Linux no puede ejecutarse bajo Windows";
 choices[16][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[16][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[16] = 3;
 units[16] = ['57', '49', '56'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3014. ";
 preguntaids[16] = 3014


//  Id pregunta: 3030 Año de creación de pregunta: 2002
 questions[17]= "18)  Se puede acceder directamente a la memoria principal del ordenador por varios m&eacute;todos. Entre ellos se encuentra:";
 choices[17]= new Array();
 choices[17][0] = "Bus multiplexado";
 choices[17][1] = "Robo de ciclo";
 choices[17][2] = "Memoria segmentada";
 choices[17][3] = "Accesos aleatorios";
 answers[17] = 1;
 units[17] = ['56'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3030. ";
 preguntaids[17] = 3030


//  Id pregunta: 6800 Año de creación de pregunta: 2010
 questions[18]= "19)  Adem&aacute;s de controlar el correcto funcionamiento del sistema y poner los medios para corregir sus funciones, &iquest;qu&eacute; funci&oacute;n lecorresponder&iacute;a a un administrador de sistemas operativos?";
 choices[18]= new Array();
 choices[18][0] = "Colaborar en el desarrollo de nuevas versiones de los sistemas operativos o de parches para ellos.";
 choices[18][1] = "Planificar y realizar la adquisici&oacute;n de nuevo equipamiento.";
 choices[18][2] = "Instalar el sistema operativo, actualizar los parches, monitorizar el uso de recursos y corregir las posibles incidencias.";
 choices[18][3] = "Desarrollar los sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 answers[18] = 2;
 units[18] = ['56'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6800. TIC A 2009";
 preguntaids[18] = 6800


//  Id pregunta: 4827 Año de creación de pregunta: 2002
 questions[19]= "20)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[19]= new Array();
 choices[19][0] = "A especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[19][1] = "B especifica ls distribuci&oacute;n de las llegadas al sistema.";
 choices[19][2] = "Las dos anteriores son ciertas.";
 choices[19][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[19] = 3;
 units[19] = ['56'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 4827. ";
 preguntaids[19] = 4827


//  Id pregunta: 3366 Año de creación de pregunta: 2006
 questions[20]= "21)  Cu&aacute;l es la misi&oacute;n del planificador (scheduler) de un SO";
 choices[20]= new Array();
 choices[20][0] = "Seleccionar el proceso que se va a ejecutar a continuaci&oacute;n";
 choices[20][1] = "Poner en ejecuci&oacute;n el proceso seleccionado";
 choices[20][2] = "Controlar la memoria principal";
 choices[20][3] = "Expulsar al proceso en ejecuci&oacute;n";
 answers[20] = 0;
 units[20] = ['56'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3366. ";
 preguntaids[20] = 3366


//  Id pregunta: 7360 Año de creación de pregunta: 2010
 questions[21]= "22)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[21]= new Array();
 choices[21][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[21][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[21][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[21][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[21] = 3;
 units[21] = ['56'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7360. Examen TIC B 2009";
 preguntaids[21] = 7360


//  Id pregunta: 3168 Año de creación de pregunta: 2002
 questions[22]= "23)  La aplicaci&oacute;n que permite conocer si un sistema est&aacute; accesible es:";
 choices[22]= new Array();
 choices[22][0] = "traceroute";
 choices[22][1] = "ping";
 choices[22][2] = "wake";
 choices[22][3] = "setup";
 answers[22] = 1;
 units[22] = ['56'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3168. ";
 preguntaids[22] = 3168


//  Id pregunta: 3242 Año de creación de pregunta: 2003
 questions[23]= "24)  &iquest;Qu&eacute; ordenador personal fue el primero en utilizar el sistema de ventanas - iconos - rat&oacute;n - puntero (WIMP)?:";
 choices[23]= new Array();
 choices[23][0] = "zx81.";
 choices[23][1] = "IBM XT.";
 choices[23][2] = "APPLE.";
 choices[23][3] = "Amstrad CPC 128.";
 answers[23] = 2;
 units[23] = ['56'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3242. Junta Andaluc&iacute;a";
 preguntaids[23] = 3242


//  Id pregunta: 2946 Año de creación de pregunta: 2002
 questions[24]= "25)  La multiprogramaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Se basa en el concepto de tiempo compartido";
 choices[24][1] = "Aprovecha las ventajas de los canales de E/S y de las interrupciones";
 choices[24][2] = "Reduce el tiempo de espera de un programa pero no elimina los tiempos muertos producidos por operaciones de E/S";
 choices[24][3] = "La organizaci&oacute;n de los trabajos mediante colas o listas simplifica las funciones del supervisor respecto al de sistemas operativos convencionales";
 answers[24] = 1;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2946. ";
 preguntaids[24] = 2946


//  Id pregunta: 2969 Año de creación de pregunta: 2002
 questions[25]= "26)  Las rutinas de gesti&oacute;n de trabajos que lleva a cabo un sistema operativo:";
 choices[25]= new Array();
 choices[25][0] = "Proveen una interface l&oacute;gica entre el hardware y el resto del software";
 choices[25][1] = "Permiten que varios procesos puedan ejecutarse en el sistema de forma simult&aacute;nea";
 choices[25][2] = "Supervisan las interrupciones";
 choices[25][3] = "Supervisan las funciones de entrada/salida";
 answers[25] = 1;
 units[25] = ['56'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2969. ";
 preguntaids[25] = 2969


//  Id pregunta: 3057 Año de creación de pregunta: 2002
 questions[26]= "27)  Si construimos un fichero, donde la direcci&oacute;n real de almacenamiento de cada registro se deduce directamente de su indicativo o clave a trav&eacute;s de un algoritmo, estamos hablando de un fichero con organizaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Indexada";
 choices[26][1] = "Encadenada";
 choices[26][2] = "Aleatoria";
 choices[26][3] = "Invertida";
 answers[26] = 2;
 units[26] = ['56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3057. ";
 preguntaids[26] = 3057


//  Id pregunta: 3029 Año de creación de pregunta: 2002
 questions[27]= "28)  Se entiende por 'dispatching ':";
 choices[27]= new Array();
 choices[27][0] = "El mecanismo por el que el sistema operativo decide cu&aacute;l es el siguiente proceso que se va a ejecutar";
 choices[27][1] = "El mecanismo que planifica el uso del procesador entre los diversos programas que se est&aacute;n ejecutando";
 choices[27][2] = "El mecanismo que gestiones las distintas colas de peticiones que existen en un ordenador";
 choices[27][3] = "El mecanismo que determina qu&eacute; procesador debe ejecutar una determinada instrucci&oacute;n";
 answers[27] = 0;
 units[27] = ['56'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3029. ";
 preguntaids[27] = 3029


//  Id pregunta: 8072 Año de creación de pregunta: 2011
 questions[28]= "29)  De los siguientes algoritmos de asignaci&oacute;n del turno de ejecuci&oacute;n de los procesos, &iquest;Cu&aacute;l de ellos consiste en asignar a cada proceso un intervalo de tiempo de ejecuci&oacute;n (llamado time-slice), y cada vez que se vence ese intervalo se copia el contexto del proceso a un lugar seguro y se le asigna su turno a otro proceso?";
 choices[28]= new Array();
 choices[28][0] = "SJF (Shortest Job First)";
 choices[28][1] = "FIFO (First In First Out";
 choices[28][2] = "Por prioridad";
 choices[28][3] = "Round Robin";
 answers[28] = 3;
 units[28] = ['56'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8072. ";
 preguntaids[28] = 8072


//  Id pregunta: 4830 Año de creación de pregunta: 2002
 questions[29]= "30)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[29]= new Array();
 choices[29][0] = "B especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[29][1] = "A especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[29][2] = "Z especifica la disciplina de cola.";
 choices[29][3] = "Todas las anteriores son v&aacute;lidas.";
 answers[29] = 3;
 units[29] = ['56'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 4830. ";
 preguntaids[29] = 4830


//  Id pregunta: 3136 Año de creación de pregunta: 2002
 questions[30]= "31)  La consistencia de un interfaz de usuario:";
 choices[30]= new Array();
 choices[30][0] = "Contribuye a que &eacute;ste sea menos vers&aacute;til en su utilizaci&oacute;n";
 choices[30][1] = "Se refiere a la uniformidad en su utilizaci&oacute;n a lo largo de toda su exposici&oacute;n";
 choices[30][2] = "S&oacute;lo se puede garantizar si &eacute;ste es gr&aacute;fico";
 choices[30][3] = "Garantiza su facilidad de uso";
 answers[30] = 1;
 units[30] = ['56'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3136. ";
 preguntaids[30] = 3136


//  Id pregunta: 7361 Año de creación de pregunta: 2010
 questions[31]= "32)  En relaci&oacute;n a la administraci&oacute;n de procesos de los sistemas operativos, &iquest;en qu&eacute; consiste la planificaci&oacute;n round-robin?";
 choices[31]= new Array();
 choices[31][0] = "En asignar un tiempo de ejecuci&oacute;n a cada proceso";
 choices[31][1] = "En ejecutar primero el proceso m&aacute;s corto";
 choices[31][2] = "En asignar a cada proceso una prioridad y ejecutar el proceso que m&aacute;s prioridad tenga";
 choices[31][3] = "En ejecutar los procesos de forma aleatoria";
 answers[31] = 0;
 units[31] = ['56'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7361. Examen TIC B 2009";
 preguntaids[31] = 7361


//  Id pregunta: 8052 Año de creación de pregunta: 2011
 questions[32]= "33)  Indique la respuesta INCORRECTA sobre el protocolo SMB:";
 choices[32]= new Array();
 choices[32][0] = "Protocolo de red que permite compartir archivos e impresoras (entre otras cosas) entre nodos de una red";
 choices[32][1] = "Microsoft a&ntilde;adi&oacute; algunas extensiones al protocolo y lo renombr&oacute; como CIFS (Common Internet File Syslem).";
 choices[32][2] = "Las iniciales SMB responden a Service Message Block";
 choices[32][3] = "SAMBA es una implementaci&oacute;n libre del protocolo para entornos GNU/Linux y Unix.";
 answers[32] = 2;
 units[32] = ['56'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8052. Examen TIC A2 2010";
 preguntaids[32] = 8052


//  Id pregunta: 5441 Año de creación de pregunta: 2007
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes sistemas operativos es un sistema orientado a objetos?";
 choices[33]= new Array();
 choices[33][0] = "Windows.";
 choices[33][1] = "Linux.";
 choices[33][2] = "OS/400.";
 choices[33][3] = "VMS";
 answers[33] = 2;
 units[33] = ['56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5441. ";
 preguntaids[33] = 5441


//  Id pregunta: 3116 Año de creación de pregunta: 2002
 questions[34]= "35)  &iquest;Qu&eacute; es una API?:";
 choices[34]= new Array();
 choices[34][0] = "Entorno de desarrollo que permite la compatibilidad binaria entre m&aacute;quinas";
 choices[34][1] = "Una herramienta CASE que facilita el desarrollo de aplicaciones";
 choices[34][2] = "Monitor est&aacute;ndar de transacciones en el sistema operativo Unix";
 choices[34][3] = "Application Programming Interface: Interfaz de la aplicaci&oacute;n con otros componentes software, por ejemplo con el sistema operativo o con el interfaz gr&aacute;fico";
 answers[34] = 3;
 units[34] = ['56'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3116. ";
 preguntaids[34] = 3116


//  Id pregunta: 6050 Año de creación de pregunta: 2003
 questions[35]= "36)  El &ldquo;throughput&rdquo;, como medida de rendimiento de un sistema inform&aacute;tico, se define mejor como:";
 choices[35]= new Array();
 choices[35][0] = "Tiempo transcurrido entre la realizaci&oacute;n de una petici&oacute;n al sistema y la recepci&oacute;n de la respuesta.";
 choices[35][1] = "El n&uacute;mero de usuarios simult&aacute;neos trabajando en el sistema.";
 choices[35][2] = "El porcentaje de tiempo de los dispositivos est&aacute;n trabajando en tareas del sistema, no imputables a ning&uacute;n trabajo de usuario.";
 choices[35][3] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado. Por ejemplo, transacciones por segundo.";
 answers[35] = 3;
 units[35] = ['56'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6050. TIC B 2007";
 preguntaids[35] = 6050


//  Id pregunta: 4826 Año de creación de pregunta: 2002
 questions[36]= "37)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[36]= new Array();
 choices[36][0] = "B especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[36][1] = "A especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[36][2] = "Las dos anteriores son ciertas.";
 choices[36][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[36] = 2;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 4826. ";
 preguntaids[36] = 4826


//  Id pregunta: 5998 Año de creación de pregunta: 2003
 questions[37]= "38)  En el &aacute;mbito de los sistemas operativos, entre los algoritmos de planificaci&oacute;n de procesos que utilizan &ldquo;quantum&rdquo; NO se incluye:";
 choices[37]= new Array();
 choices[37][0] = "Round Robin.";
 choices[37][1] = "Planificaci&oacute;n con colas de niveles m&uacute;ltiples.";
 choices[37][2] = "Planificaci&oacute;n con colas de retroalimentaci&oacute;n de niveles m&uacute;ltiples.";
 choices[37][3] = "Planificaci&oacute;n del tiempo restante m&aacute;s corto (SRT).";
 answers[37] = 3;
 units[37] = ['56'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 5998. TIC B 2007";
 preguntaids[37] = 5998


//  Id pregunta: 6428 Año de creación de pregunta: 2003
 questions[38]= "39)  Respecto a la concepci&oacute;n de un sistema operativo como gestor de recursos, un sistema operativo de prop&oacute;sito espec&iacute;fico de control en tiempo real no precisa gestionar:";
 choices[38]= new Array();
 choices[38][0] = "trabajos o procesos";
 choices[38][1] = "memoria principal";
 choices[38][2] = "almacenamiento secundario";
 choices[38][3] = "dispositivos de entrada/salida";
 answers[38] = 2;
 units[38] = ['56'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6428. ";
 preguntaids[38] = 6428


//  Id pregunta: 3002 Año de creación de pregunta: 2002
 questions[39]= "40)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[39]= new Array();
 choices[39][0] = "ldir";
 choices[39][1] = "ls";
 choices[39][2] = "pwd";
 choices[39][3] = "ps";
 answers[39] = 1;
 units[39] = ['56', '57'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3002. ";
 preguntaids[39] = 3002


//  Id pregunta: 3044 Año de creación de pregunta: 2002
 questions[40]= "41)  Se&ntilde;ale la respuesta correcta. El software de base comprende:";
 choices[40]= new Array();
 choices[40][0] = "El sistema operativo, el sistema de gesti&oacute;n de datos , el software de comunicaciones y las utilidades";
 choices[40][1] = "El sistema operativo,  el software de comunicaciones y las utilidades";
 choices[40][2] = "El sistema operativo, el sistema de gesti&oacute;n de datos  y las utilidades";
 choices[40][3] = "El sistema operativo y las utilidades";
 answers[40] = 0;
 units[40] = ['49', '56'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3044. ";
 preguntaids[40] = 3044


//  Id pregunta: 3376 Año de creación de pregunta: 2006
 questions[41]= "42)  &iquest;Qu&eacute; es MOSIX?";
 choices[41]= new Array();
 choices[41][0] = "Un sistema operativo monousuario";
 choices[41][1] = "Conjunto de herramientas para crear cl&uacute;sters basados en Linux";
 choices[41][2] = "El m&oacute;dulo encargado de la E/S en Linux";
 choices[41][3] = "API para ejecutar sentencias SQL";
 answers[41] = 1;
 units[41] = ['56'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3376. ";
 preguntaids[41] = 3376


//  Id pregunta: 3070 Año de creación de pregunta: 2002
 questions[42]= "43)  Un buen sistema operativo, en cuanto a la gesti&oacute;n de memoria principal, debe:";
 choices[42]= new Array();
 choices[42][0] = "Repartirla entre los diversos procesos, de forma que cada uno sepa desde el comienzo que solo cuenta con la que se le ha asignado. As&iacute; el programador sabe lo que tiene que hacer en cada momento en cuanto al trasiego de datos a la memoria principal";
 choices[42][1] = "No afectarle demasiado, dejando que ella misma se gestione sin intervenci&oacute;n del sistema operativo";
 choices[42][2] = "Asignar memoria din&aacute;micamente a los programas seg&uacute;n la vayan necesitando, de forma transparente para el programador";
 choices[42][3] = "Reservarse una cantidad peque&ntilde;a para s&iacute; mismo, dejando que cada aplicaci&oacute;n tenga mayor cantidad limitada de forma fija";
 answers[42] = 2;
 units[42] = ['56'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3070. ";
 preguntaids[42] = 3070


//  Id pregunta: 3066 Año de creación de pregunta: 2002
 questions[43]= "44)  Todas las respuestas son nombres de compa&ntilde;&iacute;as que han desarrollado sistemas operativos de red, excepto una. &iquest;Cu&aacute;l?:";
 choices[43]= new Array();
 choices[43][0] = "Alcatel";
 choices[43][1] = "Microsoft";
 choices[43][2] = "Novell";
 choices[43][3] = "Banyan";
 answers[43] = 0;
 units[43] = ['56'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3066. ";
 preguntaids[43] = 3066


//  Id pregunta: 3172 Año de creación de pregunta: 2002
 questions[44]= "45)  La utilidad &quot;ping&quot;:";
 choices[44]= new Array();
 choices[44][0] = "Se basa en los comandos &quot;echo request&quot; y &quot;echo reply&quot; del protocolo ICMP";
 choices[44][1] = "Se basa en el protocolo PING";
 choices[44][2] = "Se basa en el protocolo UDP";
 choices[44][3] = "Se basa en el protocolo TCP";
 answers[44] = 0;
 units[44] = ['56'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3172. ";
 preguntaids[44] = 3172


//  Id pregunta: 3365 Año de creación de pregunta: 2006
 questions[45]= "46)  La posibilidad de un sistema operativo de ejecutar diferentes partes de un programa simult&aacute;neamente, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Multitasking";
 choices[45][1] = "Multithreading";
 choices[45][2] = "Multiuser";
 choices[45][3] = "Multiprocessing";
 answers[45] = 1;
 units[45] = ['56'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3365. ";
 preguntaids[45] = 3365


//  Id pregunta: 4828 Año de creación de pregunta: 2002
 questions[46]= "47)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[46]= new Array();
 choices[46][0] = "X especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[46][1] = "Y especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[46][2] = "Z especifica la disciplina de cola.";
 choices[46][3] = "La notaci&oacute;n empleada en teor&iacute;a de tr&aacute;fico se debe a Erlang y no a Kendall.";
 answers[46] = 2;
 units[46] = ['56'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 4828. ";
 preguntaids[46] = 4828


//  Id pregunta: 3364 Año de creación de pregunta: 2006
 questions[47]= "48)  Los sistemas operativos multitarea:";
 choices[47]= new Array();
 choices[47][0] = "Se conocen tambi&eacute;n como sistemas multiproceso";
 choices[47][1] = "El procesador cambia de una tarea a otra dando la apariencia de que se realizan concurrentemente";
 choices[47][2] = "Son &quot;preemptive&quot; si cada tarea controla el tiempo que utiliza la CPU";
 choices[47][3] = "Son &quot;cooperative&quot; si el sistema operativo controla el tiempo que cada tarea utiliza la CPU";
 answers[47] = 1;
 units[47] = ['56'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3364. ";
 preguntaids[47] = 3364


//  Id pregunta: 7866 Año de creación de pregunta: 2011
 questions[48]= "49)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[48]= new Array();
 choices[48][0] = "AdvFS";
 choices[48][1] = "MFS";
 choices[48][2] = "JFS2";
 choices[48][3] = "XFS";
 answers[48] = 1;
 units[48] = ['56'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7866. Examen TIC A1 2010";
 preguntaids[48] = 7866


//  Id pregunta: 6188 Año de creación de pregunta: 2003
 questions[49]= "50)  Con un tama&ntilde;o de bloque de 1 KB, &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de un fichero con el sistema de archivos ext3?";
 choices[49]= new Array();
 choices[49][0] = "64GB";
 choices[49][1] = "32GB";
 choices[49][2] = "16GB";
 choices[49][3] = "8GB";
 answers[49] = 2;
 units[49] = ['56'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6188. Examen TIC A Castilla La Mancha 2007";
 preguntaids[49] = 6188


//  Id pregunta: 7617 Año de creación de pregunta: 2010
 questions[50]= "51)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtual de 2^20 y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos de p&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[50]= new Array();
 choices[50][0] = "32 kB.";
 choices[50][1] = "4 MB.";
 choices[50][2] = "1 MB.";
 choices[50][3] = "8 kB";
 answers[50] = 0;
 units[50] = ['56'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7617. Map 2006";
 preguntaids[50] = 7617


//  Id pregunta: 3375 Año de creación de pregunta: 2006
 questions[51]= "52)  Un sistema operativo trata de obtener el m&aacute;ximo rendimiento del hardware que controla. La multitarea y la existencia de varios procesadores son algunas herramientas para conseguirlo. Se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[51]= new Array();
 choices[51][0] = "No existe incompatibilidad en emplear multiprogramaci&oacute;n y tiempo compartido en un sistema multiprocesador.";
 choices[51][1] = "Una transacci&oacute;n se inicia con la petici&oacute;n de un terminal y acaba con la respuesta de la CPU.";
 choices[51][2] = "En un sistema con time-sharing, la asignaci&oacute;n de prioridades a unos procesos respecto de otros no mejora el rendimiento.";
 choices[51][3] = "El sistema operativo no es responsable de la sincronizaci&oacute;n de procesos, son las aplicaciones quienes se encargan de esa tarea.";
 answers[51] = 0;
 units[51] = ['56'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3375. ";
 preguntaids[51] = 3375


//  Id pregunta: 3090 Año de creación de pregunta: 2002
 questions[52]= "53)  Un sistema situado en una central nuclear, encargado de gestionar su correcto funcionamiento y operativa, controlando todos sus elementos, y que tiene un umbral de tiempo m&aacute;ximo para dar cada respuesta, se cataloga como:";
 choices[52]= new Array();
 choices[52][0] = "Sistema multiprogramado";
 choices[52][1] = "Sistema de tiempo compartido";
 choices[52][2] = "Sistema de tiempo real";
 choices[52][3] = "Sistema multiusuario";
 answers[52] = 2;
 units[52] = ['56'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3090. ";
 preguntaids[52] = 3090


//  Id pregunta: 6429 Año de creación de pregunta: 2003
 questions[53]= "54)  VMWARE se encuadra como un sistema operativo del tipo:";
 choices[53]= new Array();
 choices[53][0] = "sistema operativo monol&iacute;tico";
 choices[53][1] = "sistema operativo con capas";
 choices[53][2] = "sistema operativo con m&aacute;quina virtual";
 choices[53][3] = "sistema operativo tipo microkernel";
 answers[53] = 2;
 units[53] = ['56'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6429. ";
 preguntaids[53] = 6429


//  Id pregunta: 2980 Año de creación de pregunta: 2002
 questions[54]= "55)  Los problemas de exclusi&oacute;n mutua entre procesos:";
 choices[54]= new Array();
 choices[54][0] = "Se centran en tres grandes &aacute;reas : la exclusi&oacute;n mutua, el manejo de interrupciones y el 'dead lock'";
 choices[54][1] = "Los resuelve el n&uacute;cleo del sistema operativo mediante la funci&oacute;n de dispatching";
 choices[54][2] = "Afectan a la protecci&oacute;n de datos en memoria y se resuelven dotando al hardware de una serie de instrucciones privilegiadas que gestiona el n&uacute;cleo del sistema operativo";
 choices[54][3] = "Se resuelven mediante la implementaci&oacute;n de sem&aacute;foros";
 answers[54] = 3;
 units[54] = ['56'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2980. ";
 preguntaids[54] = 2980


//  Id pregunta: 3369 Año de creación de pregunta: 2006
 questions[55]= "56)  Respecto a la pol&iacute;tica de planificaci&oacute;n de procesos de turno rotatorio o &quot;Round Robin&quot;, es FALSO afirmar que";
 choices[55]= new Array();
 choices[55][0] = "Penaliza a los procesos cortos";
 choices[55][1] = "La penalizaci&oacute;n a los procesos intensivos en E/S puede resolverse con una cola prioritaria para los procesos que salieron de ejecuci&oacute;n por E/S";
 choices[55][2] = "Cada proceso recibe una fracci&oacute;n de tiempo antes de ser expulsado";
 choices[55][3] = "La selecci&oacute;n del siguiente proceso se realiza seg&uacute;n la pol&iacute;tica FCFS (First Come, First Served)";
 answers[55] = 0;
 units[55] = ['56'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3369. ";
 preguntaids[55] = 3369


//  Id pregunta: 3726 Año de creación de pregunta: 2002
 questions[56]= "57)  En relaci&oacute;n con los Sistemas Operativos, &iquest;Qu&eacute; se entiende por overhead?:";
 choices[56]= new Array();
 choices[56][0] = "Porcentaje de tiempo que transcurre entre  la cabecera (header) del primer paquete y el siguiente";
 choices[56][1] = "Porcentaje de tiempo en el que la CPU est&aacute; atendiendo a tareas del propio sistema";
 choices[56][2] = "Tiempo que tarda la cabeza del disco, una vez posicionada en la pista, en acceder al sector que le interesa";
 choices[56][3] = "Porcentaje de tiempo que la CPU gasta en tratar los datos de entrada";
 answers[56] = 1;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3726. ";
 preguntaids[56] = 3726


//  Id pregunta: 2943 Año de creación de pregunta: 2002
 questions[57]= "58)  La memoria virtual:";
 choices[57]= new Array();
 choices[57][0] = "Tambi&eacute;n se denomina antememoria o memoria cach&eacute;";
 choices[57][1] = "Es una memoria de s&oacute;lo lectura";
 choices[57][2] = "Obliga a diferenciar entre el mapa de direcciones l&oacute;gicas y el de direcciones f&iacute;sicas";
 choices[57][3] = "Se organiza, siguiendo la t&eacute;cnica 'pipe-line', en un conjunto de elementos, llamados segmentos,que forman una unidad l&oacute;gica desde el punto de vista del software";
 answers[57] = 2;
 units[57] = ['56'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2943. ";
 preguntaids[57] = 2943


//  Id pregunta: 2934 Año de creación de pregunta: 2002
 questions[58]= "59)  La estructuraci&oacute;n en niveles l&oacute;gicos de E/S de un sistema inform&aacute;tico puede hacerse de la siguiente forma:";
 choices[58]= new Array();
 choices[58][0] = "Transferencia elemental, transferencia compleja, transferencia m&uacute;ltiple";
 choices[58][1] = "Lenguaje de alto nivel, instrucciones de m&aacute;quina y macroinstrucciones";
 choices[58][2] = "Rutinas de entrada-salida, sistemas operativos, ensambladores";
 choices[58][3] = "Transferencia elemental, de bloque, operaci&oacute;n de entrada/salida";
 answers[58] = 3;
 units[58] = ['56'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2934. ";
 preguntaids[58] = 2934


//  Id pregunta: 8073 Año de creación de pregunta: 2011
 questions[59]= "60)  Uno de los problemas m&aacute;s serios que se pueden presentar en un ambiente de concurrencia es el &ldquo;abrazo mortal&rdquo; (deadlock), el cu&aacute;l se produce cuando se presentan al mismo tiempo 4 condiciones necesarias. &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[59]= new Array();
 choices[59][0] = "Condici&oacute;n de no apropiaci&oacute;n";
 choices[59][1] = "Condici&oacute;n de espera circular";
 choices[59][2] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[59][3] = "Condici&oacute;n de espera ocupada";
 answers[59] = 3;
 units[59] = ['56'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8073. ";
 preguntaids[59] = 8073


//  Id pregunta: 3246 Año de creación de pregunta: 2003
 questions[60]= "61)  En el contexto de las estructuras din&aacute;micas de datos, una cola es:";
 choices[60]= new Array();
 choices[60][0] = "Un tipo de dato que contiene la direcci&oacute;n en memoria de un nodo.";
 choices[60][1] = "Una lista LIFO (Last In First Out).";
 choices[60][2] = "Una estructura de datos no lineal donde la inserci&oacute;n siempre es por el extremo inferior.";
 choices[60][3] = "Una secuencia de elementos en el que las operaciones de inserci&oacute;n y borrado se realiza sobre extremos opuestos de la secuencia.";
 answers[60] = 3;
 units[60] = ['56'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3246. Junta Andaluc&iacute;a";
 preguntaids[60] = 3246


//  Id pregunta: 7871 Año de creación de pregunta: 2011
 questions[61]= "62)  Indique cu&aacute;l es el cuadrado del n&uacute;mero hexadecimal 0xFFFF:";
 choices[61]= new Array();
 choices[61][0] = "0x100000001.";
 choices[61][1] = "0xFFFFFFFF.";
 choices[61][2] = "0xFFFE0001.";
 choices[61][3] = "0xFFFE0002";
 answers[61] = 2;
 units[61] = ['56'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7871. Examen TIC A1 2010";
 preguntaids[61] = 7871


//  Id pregunta: 8015 Año de creación de pregunta: 2011
 questions[62]= "63)  Una de las funciones primordiales del Sistema Operativo es:";
 choices[62]= new Array();
 choices[62][0] = "Gestionar la comunicaci&oacute;n con los servidores de correo.";
 choices[62][1] = "Proporcionar las herramientas ofim&aacute;ticas b&aacute;sicas.";
 choices[62][2] = "Facilitar, al menos, un navegador.";
 choices[62][3] = "Crear la interfaz del hardware con el usuario.";
 answers[62] = 3;
 units[62] = ['56'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8015. Examen TIC A2 2010";
 preguntaids[62] = 8015


//  Id pregunta: 6146 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;Cu&aacute;l de las afirmaciones siguientes es cierta con respecto a la t&eacute;cnica de gesti&oacute;n de memoria conocida como &quot;paginaci&oacute;n&quot;?:";
 choices[63]= new Array();
 choices[63][0] = "Consiste en determinar que espacio vac&iacute;o en la memoria principal es el mas indicado para ser asignado a un proceso";
 choices[63][1] = "El espacio de memoria se divide en secciones f&iacute;sicas de igual tama&ntilde;o llamadas marcos de pagina, las cuales sirven como unidad de almacenamiento de informaci&oacute;n";
 choices[63][2] = "Es la memoria que queda desperdiciada al usar los m&eacute;todos de gesti&oacute;n de memoria tales como la asignaci&oacute;n";
 choices[63][3] = "Es un esquema de manejo de memoria mediante el cual la estructura del programa refleja su divisi&oacute;n l&oacute;gica; llev&aacute;ndose a cabo una agrupaci&oacute;n l&oacute;gica de la informaci&oacute;n en bloques de tama&ntilde;o variable denominados segmentos";
 answers[63] = 1;
 units[63] = ['56'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6146. Examen TIC A1 MAP 2007";
 preguntaids[63] = 6146


//  Id pregunta: 3087 Año de creación de pregunta: 2002
 questions[64]= "65)  Un sistema operativo b&aacute;sico se compone de:";
 choices[64]= new Array();
 choices[64][0] = "Gesti&oacute;n de E/S";
 choices[64][1] = "Gesti&oacute;n de Memoria";
 choices[64][2] = "Planificaci&oacute;n";
 choices[64][3] = "Todas son ciertas";
 answers[64] = 3;
 units[64] = ['56'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3087. ";
 preguntaids[64] = 3087


//  Id pregunta: 3089 Año de creación de pregunta: 2002
 questions[65]= "66)  Un sistema que reparte un quantum de procesador entre sus usuarios interactivos podr&iacute;a calificarse de:";
 choices[65]= new Array();
 choices[65][0] = "Tiempo compartido";
 choices[65][1] = "Tiempo real";
 choices[65][2] = "Batch";
 choices[65][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[65] = 0;
 units[65] = ['56'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3089. ";
 preguntaids[65] = 3089


//  Id pregunta: 7512 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments)?";
 choices[66]= new Array();
 choices[66][0] = "X/OPEN.";
 choices[66][1] = "ACE.";
 choices[66][2] = "OSF.";
 choices[66][3] = "IEEE.";
 answers[66] = 3;
 units[66] = ['56'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7512. Map 2005";
 preguntaids[66] = 7512


//  Id pregunta: 5552 Año de creación de pregunta: 2007
 questions[67]= "68)  Un conjunto de dispositivos o especificaciones que act&uacute;a como intermediario entre una m&aacute;quina y un ser humano para proporcionarle a este la mejor adaptaci&oacute;n posible ante los mecanismos de entrada y salida de la m&aacute;quina es:";
 choices[67]= new Array();
 choices[67][0] = "Un sistema operativo.";
 choices[67][1] = "Una pasarela o gateway.";
 choices[67][2] = "Una interfaz de usuario.";
 choices[67][3] = "El middleware.";
 answers[67] = 2;
 units[67] = ['56'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 5552. ";
 preguntaids[67] = 5552


//  Id pregunta: 3119 Año de creación de pregunta: 2002
 questions[68]= "69)  Considerando de modo gen&eacute;rico una interfaz como un dispositivo de adaptaci&oacute;n a dos entidades distintas, podr&iacute;a decirse que es:";
 choices[68]= new Array();
 choices[68][0] = "Un grupo de especificaciones";
 choices[68][1] = "Una entidad l&oacute;gica";
 choices[68][2] = "Un conjunto de convenios que permite el intercambio de informaci&oacute;n entre dos entidades que pueden ser f&iacute;sicas o no";
 choices[68][3] = "Todas las respuestas son correctas";
 answers[68] = 3;
 units[68] = ['56'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3119. ";
 preguntaids[68] = 3119


//  Id pregunta: 7503 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[69]= new Array();
 choices[69][0] = "XPG4 Base.";
 choices[69][1] = "XPG4 Commands and Utilities.";
 choices[69][2] = "XPG4 Language.";
 choices[69][3] = "XPG4 Internationalised System Calls and Libraries.";
 answers[69] = 2;
 units[69] = ['56'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7503. Map 2005";
 preguntaids[69] = 7503


//  Id pregunta: 5740 Año de creación de pregunta: 2007
 questions[70]= "71)  &iquest;Qu&eacute; extensi&oacute;n tienen en Forms 4.5 los m&oacute;dulos Men&uacute; en binario?";
 choices[70]= new Array();
 choices[70][0] = ".mmb";
 choices[70][1] = ".mxb";
 choices[70][2] = ".bmx";
 choices[70][3] = ".bll";
 answers[70] = 0;
 units[70] = ['56'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 5740. ";
 preguntaids[70] = 5740


//  Id pregunta: 5997 Año de creación de pregunta: 2003
 questions[71]= "72)  En un sistema con memoria virtual, la pol&iacute;tica de reemplazo &oacute;ptima es aqu&eacute;lla que aconseja reemplazar la p&aacute;gina:";
 choices[71]= new Array();
 choices[71][0] = "Que m&aacute;s tiempo lleva en memoria.";
 choices[71][1] = "Que m&aacute;s tiempo vaya a tardar en ser referenciada.";
 choices[71][2] = "Que lleva m&aacute;s tiempo sin ser referenciada.";
 choices[71][3] = "Que ha sido utilizada con menos frecuencia.";
 answers[71] = 1;
 units[71] = ['56'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 5997. TIC B 2007";
 preguntaids[71] = 5997


//  Id pregunta: 7359 Año de creación de pregunta: 2010
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes funciones no las realiza el Sistema Operativo?";
 choices[72]= new Array();
 choices[72][0] = "Gesti&oacute;n de memoria";
 choices[72][1] = "Administraci&oacute;n de procesos";
 choices[72][2] = "Arranque de la m&aacute;quina";
 choices[72][3] = "Administraci&oacute;n del sistema de E/S";
 answers[72] = 2;
 units[72] = ['56'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7359. Examen TIC B 2009";
 preguntaids[72] = 7359


//  Id pregunta: 3001 Año de creación de pregunta: 2002
 questions[73]= "74)  Para la traducci&oacute;n de direcciones virtuales a f&iacute;sicas se utiliza:";
 choices[73]= new Array();
 choices[73][0] = "La paginaci&oacute;n";
 choices[73][1] = "La segmentaci&oacute;n";
 choices[73][2] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[73][3] = "Todas son falsas";
 answers[73] = 2;
 units[73] = ['56'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3001. ";
 preguntaids[73] = 3001


//  Id pregunta: 3131 Año de creación de pregunta: 2002
 questions[74]= "75)  En las interfaces orientadas a objetos (OOUI) es falso que:";
 choices[74]= new Array();
 choices[74][0] = "los iconos representan objetos que se pueden manipular directamente";
 choices[74][1] = "los objetos son de 3 tipos: datos, contenedores y dispositivos";
 choices[74][2] = "un ejemplo de interfaz orientada a objeto lo representan los accesos directos de Windows, donde cada objeto tiene su propia tarea asociada";
 choices[74][3] = "el estilo de interacci&oacute;n es el de acci&oacute;n-objeto y no el de objeto-acci&oacute;n";
 answers[74] = 3;
 units[74] = ['56'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3131. ";
 preguntaids[74] = 3131


