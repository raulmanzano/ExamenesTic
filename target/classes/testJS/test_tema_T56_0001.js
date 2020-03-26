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
//  Id pregunta: 2865 Año de creación de pregunta: 2002
 questions[0]= "1)  En un sistema monoprocesador con mezcla de procesos de c&aacute;lculo puro y procesos intensivos en E/S, el uso de una politica de planificaci&oacute;n FIFO provoca:";
 choices[0]= new Array();
 choices[0][0] = "Un tiempo de ejecuci&oacute;n excelente para los procesos con E/S intensiva o interactiva";
 choices[0][1] = "Una gran ineficiencia, ya que los procesos de calculo intensivo se adue&ntilde;an de la CPU";
 choices[0][2] = "Una respuesta equilibrada, sin aprovechar el sistema en su totalidad";
 choices[0][3] = "Todas son falsas";
 answers[0] = 1;
 units[0] = ['56'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2865. ";
 preguntaids[0] = 2865


//  Id pregunta: 2850 Año de creación de pregunta: 2002
 questions[1]= "2)  En relaci&oacute;n con la gesti&oacute;n de prioridades entre perif&eacute;ricos para acceder a un recurso com&uacute;n,  cu&aacute;l de las siguientes sentencias es correcta?:";
 choices[1]= new Array();
 choices[1][0] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s utilizada cuando los dispositivos est&aacute;n conectados mediante bus al recurso com&uacute;n";
 choices[1][1] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[1][2] = "La gesti&oacute;n de prioridad programada es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[1][3] = "La gesti&oacute;n de prioridad h&iacute;brida emplea simult&aacute;neamente los conceptos de gesti&oacute;n distribuida y programada";
 answers[1] = 0;
 units[1] = ['56'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2850. ";
 preguntaids[1] = 2850


//  Id pregunta: 2821 Año de creación de pregunta: 2002
 questions[2]= "3)  En el subsistema de E/S, &iquest;qu&eacute; diferencia a una 'operaci&oacute;n de entrada/salida' de una 'transferencia elemental'?:";
 choices[2]= new Array();
 choices[2][0] = "La primera transfiere uno o varios bloques de datos y la segunda s&oacute;lo mueve un dato o una palabra de control";
 choices[2][1] = "La primera no comprueba el estado del perif&eacute;rico y la segunda s&iacute; lo hace";
 choices[2][2] = "La primera se realiza por hardware y la segunda por software";
 choices[2][3] = "La primera sincroniza la UCP y el controlador del perif&eacute;rico mediante se&ntilde;ales el&eacute;ctricas, y la segunda no lo hace";
 answers[2] = 0;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2821. ";
 preguntaids[2] = 2821


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[3]= new Array();
 choices[3][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[3][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[3][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[3][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[3] = 3;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 663. Junta de Extremadura A1 2015";
 preguntaids[3] = 663


//  Id pregunta: 2526 Año de creación de pregunta: 2004
 questions[4]= "5)  De las estructuras de archivos propuestas a continuaci&oacute;n, indique cu&aacute;l implica que un Sistema Operativo tenga la m&aacute;xima flexibilidad: &quot;Aquella estructura en la que el archivo es un/una: &quot;";
 choices[4]= new Array();
 choices[4][0] = "Secuencia de registros de longitud fija";
 choices[4][1] = "Secuencia de bytes de tama&ntilde;o variable";
 choices[4][2] = "&Aacute;rbol de registros, todos ellos de igual longitud";
 choices[4][3] = "&Aacute;rbol de registros, que pueden ser de distinta longitud";
 answers[4] = 1;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2526. Examen TIC MAP B 2004";
 preguntaids[4] = 2526


//  Id pregunta: 2720 Año de creación de pregunta: 2002
 questions[5]= "6)  Dado x [ 4 ] = { 1, 0, 1, 0 },  &iquest;cu&aacute;l ser&aacute; su contenido despu&eacute;s de ejecutar la siguiente instrucci&oacute;n en lenguaje C?: &ldquo;for ( i=0; i&lt;4; i++ ) for ( j=0; j&lt; 3 ; j++ )  x [ i ] = x [ j ] + 1&rdquo;:";
 choices[5]= new Array();
 choices[5][0] = "{ 1, 1, 2, 3 }";
 choices[5][1] = "{ 2, 2, 2, 2 }";
 choices[5][2] = "{ 2, 2, 4, 5 }";
 choices[5][3] = "Otros valores.";
 answers[5] = 1;
 units[5] = ['56'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2720. ";
 preguntaids[5] = 2720


//  Id pregunta: 2709 Año de creación de pregunta: 2002
 questions[6]= "7)  Considere un sistema con memoria virtual cuya CPU tiene una utilizaci&oacute;n del 15% y donde el dispositivo de paginaci&oacute;n est&aacute; ocupado el 97% del tiempo. &iquest;Qu&eacute; indican estas medidas?:";
 choices[6]= new Array();
 choices[6][0] = "El grado de multiprogramaci&oacute;n es demasiado bajo";
 choices[6][1] = "El dispositivo de paginaci&oacute;n es demasiado peque&ntilde;o";
 choices[6][2] = "La CPU es demasiado lenta";
 choices[6][3] = "El grado de multiprogramaci&oacute;n es demasiado alto";
 answers[6] = 3;
 units[6] = ['56'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2709. ";
 preguntaids[6] = 2709


//  Id pregunta: 2643 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Cu&aacute;l es la diferencia de los comandos del sistema, tales como la orden de listado de directorio (dir &oacute; ls) en MSDOS y LINUX?:";
 choices[7]= new Array();
 choices[7][0] = "En MSDOS, los programas del sistema estaban contenidos en el nucleo, y en LINUX son archivos ejecutables";
 choices[7][1] = "En LINUX, los programas del sistema estan contenidos en el nucleo, y en MSDOS eran archivos ejecutables";
 choices[7][2] = "No existe diferencia, salvo de nombre en esos programas";
 choices[7][3] = "Todas son falsas";
 answers[7] = 1;
 units[7] = ['57', '56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2643. ";
 preguntaids[7] = 2643


//  Id pregunta: 2592 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;C&oacute;mo se llama al m&oacute;dulo, del cual una &uacute;nica copia cargada en memoria puede ser utilizada simult&aacute;neamente por varios usuarios?:";
 choices[8]= new Array();
 choices[8][0] = "M&oacute;dulo concurrente";
 choices[8][1] = "M&oacute;dulo compartido";
 choices[8][2] = "M&oacute;dulo reentrante";
 choices[8][3] = "M&oacute;dulo reusable";
 answers[8] = 2;
 units[8] = ['56'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2592. ";
 preguntaids[8] = 2592


//  Id pregunta: 2578 Año de creación de pregunta: 2002
 questions[9]= "10)  Acerca de las memorias de lectura y escritura, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[9]= new Array();
 choices[9][0] = "Se basan en puntos de memoria de tipo biestable, que mantienen su estado siempre que no se interrumpa la alimentaci&oacute;n";
 choices[9][1] = "Las RAM din&aacute;micas son vol&aacute;tiles, requieren refresco, con un periodo del orden de unos pocos milisegundos";
 choices[9][2] = "Las RAM din&aacute;micas consumen m&aacute;s que las RAM est&aacute;ticas";
 choices[9][3] = "Las RAM est&aacute;ticas son mucho m&aacute;s econ&oacute;micas que las RAM din&aacute;micas";
 answers[9] = 3;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2578. ";
 preguntaids[9] = 2578


//  Id pregunta: 2872 Año de creación de pregunta: 2002
 questions[10]= "11)  En una operaci&oacute;n de acceso directo a memoria, el procesador debe enviar distintas informaciones necesarias para realizar la operaci&oacute;n. Indique cu&aacute;l de las siguientes alternativas se refiere a una informaci&oacute;n que no es necesaria en una operaci&oacute;n de DMA:";
 choices[10]= new Array();
 choices[10][0] = "Direcci&oacute;n de memoria";
 choices[10][1] = "Tama&ntilde;o de las palabras";
 choices[10][2] = "Sentido de la operaci&oacute;n";
 choices[10][3] = "Identificaci&oacute;n del perif&eacute;rico";
 answers[10] = 1;
 units[10] = ['56'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2872. ";
 preguntaids[10] = 2872


//  Id pregunta: 1509 Año de creación de pregunta: 2016
 questions[11]= "12)  La aplicaci&oacute;n o un conjunto de aplicaciones que almacena y organiza la informaci&oacute;n sobre los usuarios de una red de ordenadores, sobre recursos de red, y permite a los administradores gestionar el acceso de usuarios a los recursos sobre dicha red recibe el nombre de:";
 choices[11]= new Array();
 choices[11][0] = "Sistema de ficheros.";
 choices[11][1] = "Servicio de nombres.";
 choices[11][2] = "Servicio de agente remoto.";
 choices[11][3] = "Servicio de directorio.";
 answers[11] = 3;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1509. ";
 preguntaids[11] = 1509


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[12]= "13)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[12]= new Array();
 choices[12][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[12][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[12][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[12][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[12] = 1;
 units[12] = ['56'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 660. Junta de Extremadura A1 2015";
 preguntaids[12] = 660


//  Id pregunta: 2781 Año de creación de pregunta: 2002
 questions[13]= "14)  El principio de &quot;Need-To-Know&quot; viene a significar que:";
 choices[13]= new Array();
 choices[13][0] = "Un proceso s&oacute;lo deber&iacute;a acceder a aquello recursos que son necesarios para completar su tarea";
 choices[13][1] = "Un proceso ha de estar siempre activo frente a cualquier ataque pasivo";
 choices[13][2] = "Las dos anteriores son correctas";
 choices[13][3] = "Hace referencia exclusiva a la asignaci&oacute;n de recursos con herramientas PERT, CPM etc";
 answers[13] = 0;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2781. ";
 preguntaids[13] = 2781


//  Id pregunta: 2762 Año de creación de pregunta: 2002
 questions[14]= "15)  Entre los componentes de un sistema inform&aacute;tico:";
 choices[14]= new Array();
 choices[14][0] = "Dentro del subsistema l&oacute;gico, el software de tiempo real se considera software de base";
 choices[14][1] = "Los montadores/cargadores unen un programa compilado en c&oacute;digo objeto con subrutinas del sistema y del usuario";
 choices[14][2] = "La arquitectura distribuida se divide en SISD, SIMD, MISD, MIMD";
 choices[14][3] = "Overlap o solapamiento es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 answers[14] = 1;
 units[14] = ['56'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2762. ";
 preguntaids[14] = 2762


//  Id pregunta: 2786 Año de creación de pregunta: 2002
 questions[15]= "16)  El Registro de Instrucciones es un &oacute;rgano de control del procesador que sirve para:";
 choices[15]= new Array();
 choices[15][0] = "Llevar el control de las instrucciones m&aacute;quina que se van ejecutando";
 choices[15][1] = "Almacenar la instrucci&oacute;n que se ha de decodificar y ejecutar";
 choices[15][2] = "Es un contador que se va incrementado con los pulsos del reloj maestro";
 choices[15][3] = "Almacenar la direcci&oacute;n de la instrucci&oacute;n que se va a ejecutar";
 answers[15] = 1;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2786. ";
 preguntaids[15] = 2786


//  Id pregunta: 2787 Año de creación de pregunta: 2002
 questions[16]= "17)  El robo de ciclo explica que la duraci&oacute;n de las instrucciones no sea fija en funci&oacute;n de si existen o no robos de ciclo:";
 choices[16]= new Array();
 choices[16][0] = "En todo caso es falso";
 choices[16][1] = "Siempre es cierto";
 choices[16][2] = "Depende de la carga de trabajo de la CPU";
 choices[16][3] = "Depende del 'throughput'";
 answers[16] = 1;
 units[16] = ['56'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2787. ";
 preguntaids[16] = 2787


//  Id pregunta: 1987 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una de las premisas que tiene que lograr un Sistema Operativo para ejecutar correctamente las secciones cr&iacute;ticas de sus procesos:";
 choices[17]= new Array();
 choices[17][0] = "Exclusi&oacute;n mutua";
 choices[17][1] = "Progreso";
 choices[17][2] = "Espera limitada";
 choices[17][3] = "Inclusi&oacute;n indefinida";
 answers[17] = 3;
 units[17] = ['56'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1987. ";
 preguntaids[17] = 1987


//  Id pregunta: 2775 Año de creación de pregunta: 2002
 questions[18]= "19)  El nombre del lenguaje Ada se debe a:";
 choices[18]= new Array();
 choices[18][0] = "Advanced Development of Algorithms";
 choices[18][1] = "Automatic Development and Adaptation of software";
 choices[18][2] = "Adaptative Digital Algorithms";
 choices[18][3] = "Es un homenaje a Ada Augusta Byron, considerada la primera programadora de la historia, que contribuy&oacute; econ&oacute;micamente y laboralmente al desarrollo de las primeras m&aacute;quinas diferenciales";
 answers[18] = 3;
 units[18] = ['56'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2775. ";
 preguntaids[18] = 2775


//  Id pregunta: 2748 Año de creación de pregunta: 2002
 questions[19]= "20)  El control de la ejecuci&oacute;n de un programa JCL se realiza por medio de:";
 choices[19]= new Array();
 choices[19][0] = "El subsistema del control de trabajos del sistema operativo";
 choices[19][1] = "El cortafuegos";
 choices[19][2] = "El subsistema de seguridad Kerberos";
 choices[19][3] = "El filtro de paquetes IP";
 answers[19] = 0;
 units[19] = ['56'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2748. ";
 preguntaids[19] = 2748


//  Id pregunta: 2767 Año de creación de pregunta: 2002
 questions[20]= "21)  El mecanismo &quot;priority aging&quot; que utilizan algunos programas de planificaci&oacute;n de trabajos funciona de la siguiente manera:";
 choices[20]= new Array();
 choices[20][0] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que ha transcurrido desde que el usuario lo envi&oacute;";
 choices[20][1] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo transcurrido desde una hora prefijada por el programador";
 choices[20][2] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que llevan en la cola de entrada";
 choices[20][3] = "Aumenta la prioridad de los trabajos en funci&oacute;n de la edad y categor&iacute;a profesional del programador";
 answers[20] = 2;
 units[20] = ['56'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2767. ";
 preguntaids[20] = 2767


//  Id pregunta: 2860 Año de creación de pregunta: 2002
 questions[21]= "22)  En un ordenador que emplea memoria virtual:";
 choices[21]= new Array();
 choices[21][0] = "Las direcciones que generan los programas se refieren a un espacio mayor que el espacio realmente disponible en memoria principal";
 choices[21][1] = "El mapa de direcciones l&oacute;gicas o virtual es igual al mapa de direcciones f&iacute;sicas o reales";
 choices[21][2] = "El espacio virtual emplea como soporte la memoria principal";
 choices[21][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[21] = 0;
 units[21] = ['56'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2860. ";
 preguntaids[21] = 2860


//  Id pregunta: 2863 Año de creación de pregunta: 2002
 questions[22]= "23)  En un sistema de memoria virtual, cuando un proceso en ejecuci&oacute;n genera un 'fallo de p&aacute;gina':";
 choices[22]= new Array();
 choices[22][0] = "Es un error grave del sistema operativo que ocasiona el aborto del programa";
 choices[22][1] = "El sistema operativo busca en memoria secundaria (disco) la p&aacute;gina que falta y la carga en memoria";
 choices[22][2] = "El sistema operativo busca en memoria secundaria la p&aacute;gina que falta y la intenta llevar a memoria; si no hay espacio para la nueva p&aacute;gina, interrumpe la ejecuci&oacute;n del programa, dando el control a otro proceso";
 choices[22][3] = "Un proceso en ejecuci&oacute;n nunca puede generar un fallo de p&aacute;gina ya que de lo contrario todo el equipo 'caer&aacute;' produciendose una reinicializaci&oacute;n de la m&aacute;quina";
 answers[22] = 1;
 units[22] = ['56'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2863. ";
 preguntaids[22] = 2863


//  Id pregunta: 1665 Año de creación de pregunta: 2016
 questions[23]= "24)  Los Sistemas Operativos Monol&iacute;ticos tienen la estructura de los primeros sistemas operativos constituidos fundamentalmente por un solo programa compuesto de un conjunto de rutinas entrelazadas de tal forma que cada una puede llamar a cualquier otra. Se&ntilde;ale la respuesta FALSA respecto a las caracter&iacute;sticas fundamentales de este tipo de estructura:";
 choices[23]= new Array();
 choices[23][0] = "Construcci&oacute;n del programa final a base de m&oacute;dulos compilados separadamente que se unen a trav&eacute;s del enlazador (linker).";
 choices[23][1] = "Buena definici&oacute;n de par&aacute;metros de enlace entre las distintas rutinas existentes, lo que puede provocar mucho acoplamiento.";
 choices[23][2] = "Tienen protecciones y privilegios en las rutinas para manejar diferentes aspectos de los recursos del ordenador, como memoria, disco, etc.";
 choices[23][3] = "Generalmente est&aacute;n hechos a medida, por lo que son eficientes y r&aacute;pidos en su ejecuci&oacute;n y gesti&oacute;n, pero por lo mismo carecen de flexibilidad para soportar diferentes ambientes de trabajo o tipos de aplicaciones.";
 answers[23] = 2;
 units[23] = ['56'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1665. ";
 preguntaids[23] = 1665


//  Id pregunta: 2710 Año de creación de pregunta: 2002
 questions[24]= "25)  Considere un sistema con un espacio l&oacute;gico de memoria de 128k p&aacute;ginas, cada una con 8k palabras de 16 bits y una memoria f&iacute;sica de 64 Mb. &iquest;Cu&aacute;ntos bits hay en la direcci&oacute;n l&oacute;gica?:";
 choices[24]= new Array();
 choices[24][0] = "32";
 choices[24][1] = "30";
 choices[24][2] = "26";
 choices[24][3] = "25";
 answers[24] = 1;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2710. ";
 preguntaids[24] = 2710


//  Id pregunta: 2858 Año de creación de pregunta: 2002
 questions[25]= "26)  En un entorno transaccional, &iquest;cu&aacute;l de las siguientes acciones traer&iacute;a como resultado una disminuci&oacute;n del tiempo de respuesta?:";
 choices[25]= new Array();
 choices[25][0] = "Compactaci&oacute;n de datos en el dispositivo de almacenamiento magn&eacute;tico, para disminuir el n&uacute;mero de E/S al DASD";
 choices[25][1] = "Ampliaci&oacute;n de la partici&oacute;n de memoria principal para los programas activos, para disminuir la frecuencia de 'swapping'";
 choices[25][2] = "Ampliaci&oacute;n de la memoria virtual, para disminuir la paginaci&oacute;n";
 choices[25][3] = "Todas las anteriores respuestas son correctas";
 answers[25] = 1;
 units[25] = ['56'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2858. ";
 preguntaids[25] = 2858


//  Id pregunta: 2534 Año de creación de pregunta: 2004
 questions[26]= "27)  De las siguientes afirmaciones referentes a los sistemas operativos, &iquest;cu&aacute;l es falsa?.";
 choices[26]= new Array();
 choices[26][0] = "El scheduler decide los candidatos a competir por los recursos";
 choices[26][1] = "El dispatcher decide que proceso se ejecuta";
 choices[26][2] = "Para prevenir el deadlock se puede usar el &quot;algoritmo del banquero&quot;.";
 choices[26][3] = "Ninguna de las anteriores es verdadera";
 answers[26] = 3;
 units[26] = ['56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2534. A, B y C son ciertas, luego es falso que ninguna sea verdadera";
 preguntaids[26] = 2534


//  Id pregunta: 2848 Año de creación de pregunta: 2002
 questions[27]= "28)  En relaci&oacute;n con el concepto de memoria virtual, una de las siguientes afirmaciones es falsa. Indique cu&aacute;l:";
 choices[27]= new Array();
 choices[27][0] = "El mecanismo de traducci&oacute;n de las direcciones de las memorias virtuales se basa en una memoria asociativa que contiene la tabla de p&aacute;ginas f&iacute;sicas y sus equivalentes l&oacute;gicas";
 choices[27][1] = "Generalmente existe una memoria asociativa de alta velocidad que sirve para albergar aquellos elementos de la tabla de p&aacute;ginas/segmentos utilizadas m&aacute;s recientemente";
 choices[27][2] = "La viabilidad de la memoria virtual se basa en el principio de la proximidad de las referencias a memorias";
 choices[27][3] = "La memoria virtual paginada da lugar a la fragmentaci&oacute;n externa";
 answers[27] = 3;
 units[27] = ['56'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2848. ";
 preguntaids[27] = 2848


//  Id pregunta: 2537 Año de creación de pregunta: 2004
 questions[28]= "29)  SOAP (Simple Object Access protocol):";
 choices[28]= new Array();
 choices[28][0] = "En un protocolo de programaci&oacute;n orientado a la plataforma .net de Microsoft (COM)";
 choices[28][1] = "Es un protocolo de intercambio electr&oacute;nico de datos EDI ya en desuso y que se utiliz&oacute; en redes orientados a paquetes del tipo X.25";
 choices[28][2] = "Es un protocolo basado en XML que permite invocar m&eacute;todos, servicios, componentes y objetos sobre servidores remotos utilizando HTTP";
 choices[28][3] = "Es un protocolo de acceso a bases de datos orientadas a objetos con el cual Microsoft Corporation ha anunciado recientemente sque se incorporar&aacute; a la comunidad SW de fuentes abiertas";
 answers[28] = 2;
 units[28] = ['56'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2537. ";
 preguntaids[28] = 2537


//  Id pregunta: 2663 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Por qu&eacute; se dice que C es un lenguaje de nivel medio?";
 choices[29]= new Array();
 choices[29][0] = "porque su aprendizaje es de dificultad media respecto de otros m&aacute;s f&aacute;ciles o dif&iacute;ciles";
 choices[29][1] = "porque su funcionalidad es suficientemente buena aunque no es de los lenguajes que mayores funcionalidades presenta";
 choices[29][2] = "porque est&aacute; a medio camino entre la potencia y rapidez del lenguaje ensamblador y la funcionalidad del lenguaje natural";
 choices[29][3] = "porque sus programas tienen un tama&ntilde;o medio en comparaci&oacute;n con otros lenguajes de programas m&aacute;s simples y otros de programas muy complejos y largos";
 answers[29] = 2;
 units[29] = ['56'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2663. ";
 preguntaids[29] = 2663


//  Id pregunta: 1089 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[30]= new Array();
 choices[30][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos.";
 choices[30][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[30][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[30][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[30] = 3;
 units[30] = ['56'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1089. ";
 preguntaids[30] = 1089


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[31]= "32)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[31]= new Array();
 choices[31][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[31][1] = "Clasificaci&oacute;n por cuenta.";
 choices[31][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[31][3] = "Clasificaci&oacute;n por intercambio.";
 answers[31] = 3;
 units[31] = ['56'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 661. Junta de Extremadura A1 2015";
 preguntaids[31] = 661


//  Id pregunta: 1472 Año de creación de pregunta: 2016
 questions[32]= "33)  En el contexto de la gesti&oacute;n de memoria virtual, un &laquo;fallo de p&aacute;gina&raquo; se produce cuando:";
 choices[32]= new Array();
 choices[32][0] = "Existe un problema f&iacute;sico en la unidad de memoria, que queda desactivada.";
 choices[32][1] = "No se encuentra una p&aacute;gina en el disco, por ejemplo, por estar &eacute;ste da&ntilde;ado.";
 choices[32][2] = "Se est&aacute; buscando una p&aacute;gina y &eacute;sta no est&aacute; cargada en memoria, por lo que habr&aacute; que buscarla en el disco.";
 choices[32][3] = "Se est&aacute; buscando una p&aacute;gina y no est&aacute; en memoria ni tampoco en el disco.";
 answers[32] = 2;
 units[32] = ['56'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1472. ";
 preguntaids[32] = 1472


//  Id pregunta: 2745 Año de creación de pregunta: 2002
 questions[33]= "34)  El componente central de los sistemas operativos sencillos de proceso por lotes (batch) es el:";
 choices[33]= new Array();
 choices[33][0] = "Monitor";
 choices[33][1] = "Compilador";
 choices[33][2] = "Int&eacute;rprete";
 choices[33][3] = "Proceso en serie";
 answers[33] = 0;
 units[33] = ['56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2745. ";
 preguntaids[33] = 2745


//  Id pregunta: 2785 Año de creación de pregunta: 2002
 questions[34]= "35)  El registro de estados de un procesador:";
 choices[34]= new Array();
 choices[34][0] = "Se almacena en la memoria principal del procesador";
 choices[34][1] = "Almacena en cada momento el estado del procesador";
 choices[34][2] = "Sirve para almacenar las condiciones de realizaci&oacute;n de las operaciones de la ALU";
 choices[34][3] = "Los procesadores actuales no tienen registro de estados";
 answers[34] = 2;
 units[34] = ['56'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2785. ";
 preguntaids[34] = 2785


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[35]= "36)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[35]= new Array();
 choices[35][0] = "Monol&iacute;tico.";
 choices[35][1] = "Estratificado.";
 choices[35][2] = "Cliente/servidor.";
 choices[35][3] = "Orientado a objetos.";
 answers[35] = 3;
 units[35] = ['56'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 662. Junta de Extremadura A1 2015";
 preguntaids[35] = 662


//  Id pregunta: 2563 Año de creación de pregunta: 2004
 questions[36]= "37)  En un sistema de memoria virtual, el &quot;bit de suciedad&quot; (dirty bit) se utiliza para:";
 choices[36]= new Array();
 choices[36][0] = "Saber si los datos siguen siendo v&aacute;lidos antes de que la CPU los utilice.";
 choices[36][1] = "Detectar corrupci&oacute;n de datos debida a fallos de hardware o a interferencias electromagn&eacute;ticas.";
 choices[36][2] = "Determinar si los datos se deben escribir en disco antes de ser reemplazados.";
 choices[36][3] = "Saber si los datos ya est&aacute;n disponibles en la memoria cache.";
 answers[36] = 2;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2563. ";
 preguntaids[36] = 2563


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[37]= "38)  En JCL (Job Control Language), el par&aacute;metro de la sentencia EXEC que especifica la cantidad de memoria que puede tilizar el paso se llama:";
 choices[37]= new Array();
 choices[37][0] = "REGION.";
 choices[37][1] = "MEM.";
 choices[37][2] = "PERFORM.";
 choices[37][3] = "DYNAMNBR.";
 answers[37] = 0;
 units[37] = ['56'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 659. AGE A2 2015";
 preguntaids[37] = 659


//  Id pregunta: 2864 Año de creación de pregunta: 2002
 questions[38]= "39)  En un sistema fuertemente acoplado (tightly coupled):";
 choices[38]= new Array();
 choices[38][0] = "Los procesadores solo pueden acceder a los recursos mas cercanos, que ellos controlan";
 choices[38][1] = "Los procesadores pueden acceder a todos los recursos del sistema, mediante paso de mensajes";
 choices[38][2] = "El acceso es posible directamente para todos los procesadores, a la misma velocidad";
 choices[38][3] = "El acceso es posible directamente para todos los procesadores, pero con variaciones de velocidad seg&uacute;n la memoria accedida";
 answers[38] = 2;
 units[38] = ['56'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2864. ";
 preguntaids[38] = 2864


//  Id pregunta: 2784 Año de creación de pregunta: 2002
 questions[39]= "40)  El protocolo MESI:";
 choices[39]= new Array();
 choices[39][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM";
 choices[39][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP";
 choices[39][2] = "Controla las colisiones en redes Token Ring";
 choices[39][3] = "Controla la coherencia cache en algunos procesadores";
 answers[39] = 3;
 units[39] = ['56'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2784. ";
 preguntaids[39] = 2784


//  Id pregunta: 2596 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a la ejecuci&oacute;n de programas en una m&aacute;quina?:";
 choices[40]= new Array();
 choices[40][0] = "Los programas de proceso forman el grueso del sistema operativo";
 choices[40][1] = "Los programas de control funcionan en modo usuario";
 choices[40][2] = "Los programas de control funcionan en modo kernel";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 2;
 units[40] = ['56'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2596. ";
 preguntaids[40] = 2596


//  Id pregunta: 1988 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes funciones NO se considera un componente b&aacute;sico de un Sistema Operativo?";
 choices[41]= new Array();
 choices[41][0] = "La Gesti&oacute;n de la memoria principal.";
 choices[41][1] = "El int&eacute;rprete de &oacute;rdenes.";
 choices[41][2] = "EI Sistema de E/S y sistema de archivos.";
 choices[41][3] = "EI registro de presencia en los sistemas de Teletrabajo";
 answers[41] = 3;
 units[41] = ['56'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1988. ";
 preguntaids[41] = 1988


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la manera correcta de comentar una l&iacute;nea de c&oacute;digo en un job JCL:";
 choices[42]= new Array();
 choices[42][0] = "/*";
 choices[42][1] = "//*";
 choices[42][2] = "#";
 choices[42][3] = "//";
 answers[42] = 1;
 units[42] = ['56'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 658. AGE A2 2015";
 preguntaids[42] = 658


//  Id pregunta: 1726 Año de creación de pregunta: 2016
 questions[43]= "44)  Desde el punto de vista de la administraci&oacute;n, &iquest;cu&aacute;l es la opci&oacute;n adecuada para la distribuci&oacute;n de particiones del Sistema Operativo de servidor?";
 choices[43]= new Array();
 choices[43][0] = "Una partici&oacute;n para rutinas y programas del sistema operativo y para el log; otra partici&oacute;n de dump; y otra para los datos de usuario.";
 choices[43][1] = "Una partici&oacute;n para rutinas y programas del sistema operativo, para el log, y de dump; y otra para los datos de usuario.";
 choices[43][2] = "Una partici&oacute;n para rutinas y programas del sistema operativo y de dump; y otra para el log y los datos de usuario.";
 choices[43][3] = "Una partici&oacute;n para rutinas y programas del sistema operativo; otra para el log; otra de dump; y otra para los datos de usuario.";
 answers[43] = 3;
 units[43] = ['56'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 1726. ";
 preguntaids[43] = 1726


//  Id pregunta: 2774 Año de creación de pregunta: 2002
 questions[44]= "45)  El modo de ejecuci&oacute;n menos privilegiado de un procesador es conocido como:";
 choices[44]= new Array();
 choices[44][0] = "Modo del sistema";
 choices[44][1] = "Modo de usuario";
 choices[44][2] = "Modo de control";
 choices[44][3] = "Modo del n&uacute;cleo";
 answers[44] = 1;
 units[44] = ['56'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2774. ";
 preguntaids[44] = 2774


//  Id pregunta: 2766 Año de creación de pregunta: 2002
 questions[45]= "46)  Frecuencia de paginaci&oacute;n es:";
 choices[45]= new Array();
 choices[45][0] = "N&uacute;mero de peticiones de servicio por unidad de tiempo";
 choices[45][1] = "N&uacute;mero de programas sacados de memoria por unidad de tiempo";
 choices[45][2] = "N&uacute;mero de trabajos de un programa en un entorno de memoria virtual por unidad de tiempo";
 choices[45][3] = "N&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo";
 answers[45] = 3;
 units[45] = ['56'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2766. ";
 preguntaids[45] = 2766


//  Id pregunta: 2846 Año de creación de pregunta: 2002
 questions[46]= "47)  En programaci&oacute;n concurrente, el problema de la exclusi&oacute;n mutua consiste en:";
 choices[46]= new Array();
 choices[46][0] = "2 procesos no pueden estar a la vez en la secci&oacute;n cr&iacute;tica";
 choices[46][1] = "Todo proceso debe de poder entrar en la seccion critica";
 choices[46][2] = "Un proceso de fuera de la secci&oacute;n critica no puede bloquear el acceso a otro";
 choices[46][3] = "Todas son ciertas";
 answers[46] = 3;
 units[46] = ['56'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2846. ";
 preguntaids[46] = 2846


//  Id pregunta: 2676 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Qu&eacute; es el UART?:";
 choices[47]= new Array();
 choices[47][0] = "Universal Asynchronous Receiver Transmitter. Es un microprocesador que act&uacute;a de interfaz entre el bus (paralelo) de la CPU y el puerto serie";
 choices[47][1] = "Universal Asynchronous Receiver Transmitter. Es un dispositivo que adapta terminales as&iacute;ncronos a una red X.25";
 choices[47][2] = "Universal Audio Receiver Transmitter. Es un microprocesador incluido en la tarjeta de sonido que act&uacute;a como receptor y transmisor de las se&ntilde;ales de audio";
 choices[47][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[47] = 0;
 units[47] = ['56'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2676. ";
 preguntaids[47] = 2676


//  Id pregunta: 1127 Año de creación de pregunta: 2016
 questions[48]= "49)  De entre los siguientes, &iquest;qui&eacute;n es el creador del lenguaje de programaci&oacute;n C?";
 choices[48]= new Array();
 choices[48][0] = "Linus Torvalds.";
 choices[48][1] = "Dennis Ritchie.";
 choices[48][2] = "Richard Stallman.";
 choices[48][3] = "Bill Gates.";
 answers[48] = 1;
 units[48] = ['56'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1127. ";
 preguntaids[48] = 1127


//  Id pregunta: 2753 Año de creación de pregunta: 2002
 questions[49]= "50)  El factor de utilizaci&oacute;n de los componentes de un sistema es:";
 choices[49]= new Array();
 choices[49][0] = "Relaci&oacute;n entre el tiempo de proceso requerido por una petici&oacute;n y el tiempo de reflexi&oacute;n del usuario";
 choices[49][1] = "Porcentaje de tiempo durante el cual est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[49][2] = "Porcentaje de tiempo durante el cual dos o m&aacute;s componentes del sistema est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[49][3] = "Porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso";
 answers[49] = 1;
 units[49] = ['56'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2753. ";
 preguntaids[49] = 2753


//  Id pregunta: 2869 Año de creación de pregunta: 2002
 questions[50]= "51)  En un sistema operativo, el 'dispatcher' se encarga de:";
 choices[50]= new Array();
 choices[50][0] = "Asignar un proceso a un procesador que ha quedado libre";
 choices[50][1] = "Optimizar el uso de la memoria RAM";
 choices[50][2] = "Gestionar las interrupciones de entrada/salida";
 choices[50][3] = "Asignar nuevas p&aacute;ginas de memoria al proceso que se est&eacute; ejecutando si las necesita";
 answers[50] = 0;
 units[50] = ['56'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2869. ";
 preguntaids[50] = 2869


//  Id pregunta: 2715 Año de creación de pregunta: 2002
 questions[51]= "52)  Cuando para un archivo disponemos de dos estructuras o zonas distintas, zona de registros y zona de &iacute;ndices, y no hay punteros entre los registros, entonces estamos hablando de archivos con organizaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Secuencial";
 choices[51][1] = "Secuencial indexada";
 choices[51][2] = "Secuencial indexada encadenada";
 choices[51][3] = "Semi-indexada";
 answers[51] = 1;
 units[51] = ['56'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2715. ";
 preguntaids[51] = 2715


//  Id pregunta: 2577 Año de creación de pregunta: 2002
 questions[52]= "53)  Acerca de la memoria virtual, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[52]= new Array();
 choices[52][0] = "Se distingue el mapa de direcciones l&oacute;gicas o virtual y el mapa de direcciones f&iacute;sicas o reales. Las direcciones f&iacute;sicas y l&oacute;gicas son del mismo tama&ntilde;o";
 choices[52][1] = "Con paginaci&oacute;n se resuelven todos los problemas de fragmentaci&oacute;n de memoria";
 choices[52][2] = "Obliga a tener en memoria principal todo el contenido del programa durante la ejecuci&oacute;n";
 choices[52][3] = "Con memoria segmentada se complica la traducci&oacute;n de direcciones";
 answers[52] = 3;
 units[52] = ['56'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2577. ";
 preguntaids[52] = 2577


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la respuesta correcta sobre la planificaci&oacute;n del Sistema Operativo:";
 choices[53]= new Array();
 choices[53][0] = "Una disciplina de planificaci&oacute;n es apropiativa si se le puede retirar la CPU a un proceso mientras est&aacute; en ejecuci&oacute;n.";
 choices[53][1] = "El algoritmo de planificaci&oacute;n SJF (primero el trabajo m&aacute;s corto) es una disciplina apropiativa.";
 choices[53][2] = "Una disciplina de planificaci&oacute;n es no apropiativa si se le puede retirar la CPU a un proceso mientras est&aacute; en ejecuci&oacute;n.";
 choices[53][3] = "El algoritmo de planificaci&oacute;n del tiempo restante m&aacute;s corto (SRT) es una disciplina no apropiativa.";
 answers[53] = 0;
 units[53] = ['56'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 657. AGE A2 2015";
 preguntaids[53] = 657


//  Id pregunta: 2911 Año de creación de pregunta: 2002
 questions[54]= "55)  Indique la respuesta falsa relativa a la monitorizaci&oacute;n del sistema operativo:";
 choices[54]= new Array();
 choices[54][0] = "Se puede hacer en tiempo real utilizando monitores del sistema";
 choices[54][1] = "Incluye herramientas de seguridad para asignar o denegar permisos de usuario en el sistema";
 choices[54][2] = "Se puede hacer a posteriori, utilizando herramientas que realicen an&aacute;lisis estad&iacute;sticos de los logs del sistema";
 choices[54][3] = "Permite detectar los cuellos de botella del sistema";
 answers[54] = 1;
 units[54] = ['56'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2911. ";
 preguntaids[54] = 2911


//  Id pregunta: 1990 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cual de las siguientes respuestas es FALSA. En los sistemas operativos, dentro del &aacute;mbito de las pol&iacute;ticas de planificaci&oacute;n de CPU, se debe mantener un equilibrio para conseguir:";
 choices[55]= new Array();
 choices[55][0] = "Bajo tiempo de respuesta per tarea";
 choices[55][1] = "Alta productividad para tareas que se ejecutan en segundo plano";
 choices[55][2] = "Inanici&oacute;n de los procesos";
 choices[55][3] = "Respetar la prioridad de los procesos.";
 answers[55] = 2;
 units[55] = ['56'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1990. ";
 preguntaids[55] = 1990


//  Id pregunta: 2905 Año de creación de pregunta: 2002
 questions[56]= "57)  Indique cu&aacute;l de las siguientes afirmaciones es falsa respecto a la ortogonalidad:";
 choices[56]= new Array();
 choices[56][0] = "Un juego de instrucciones se dice que es regular si es ortogonal";
 choices[56][1] = "La ortogonalidad implica que cada operaci&oacute;n debe poder realizarse con un tipo de operando fijo y su propio direccionamiento";
 choices[56][2] = "Se garantiza la ortogonalidad limitando la informaci&oacute;n contenida en el c&oacute;digo de operaci&oacute;n a la operaci&oacute;n pura, excluyendo direccionamiento y representaci&oacute;n de datos";
 choices[56][3] = "La ortogonalidad de un juego de instrucciones aporta claras ventajas de simplicidad y claridad";
 answers[56] = 1;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2905. ";
 preguntaids[56] = 2905


//  Id pregunta: 1126 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta FALSA, en relaci&oacute;n con el algoritmo de planificaci&oacute;n SRTF (Shortest Remaining Time First):";
 choices[57]= new Array();
 choices[57][0] = "Es una versi&oacute;n de SJF.";
 choices[57][1] = "Cada vez que entran trabajos se interrumpe el actual y se compara el tiempo restante de &eacute;ste con el de los entrantes.";
 choices[57][2] = "Si hay un trabajo nuevo m&aacute;s corto que lo que le falta al actual en CPU, echamos el actual y metemos el nuevo.";
 choices[57][3] = "Cada proceso tiene un tiempo l&iacute;mite de uso de CPU llamado quantum.";
 answers[57] = 3;
 units[57] = ['56'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1126. ";
 preguntaids[57] = 1126


//  Id pregunta: 2691 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;Qu&eacute; se entiende por quantum?:";
 choices[58]= new Array();
 choices[58][0] = "El porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[58][1] = "El porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[58][2] = "La cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[58][3] = "El n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio &oacute; para reorganizar el mismo";
 answers[58] = 2;
 units[58] = ['56'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2691. ";
 preguntaids[58] = 2691


//  Id pregunta: 2782 Año de creación de pregunta: 2002
 questions[59]= "60)  El programa del sistema operativo cuya misi&oacute;n es resolver las referencias externas de uno o varios m&oacute;dulos objeto y formar una unidad ejecutable se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Coordinador";
 choices[59][1] = "Montador";
 choices[59][2] = "Cargador";
 choices[59][3] = "Editor";
 answers[59] = 1;
 units[59] = ['56'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2782. ";
 preguntaids[59] = 2782


//  Id pregunta: 1464 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Puede darse el caso de un sistema que sea, a la vez, multiusuario y monotarea?";
 choices[60]= new Array();
 choices[60][0] = "No, si es multiusuario, siempre ser&aacute; multitarea.";
 choices[60][1] = "S&iacute;, en ese caso se admiten varios usuarios al mismo tiempo, pero cada uno de ellos puede estar haciendo s&oacute;lo una tarea a la vez.";
 choices[60][2] = "S&iacute;, pero s&oacute;lo si el n&uacute;mero de usuarios es de 2, como m&aacute;ximo, ejecutando tareas alternativamente.";
 choices[60][3] = "S&iacute;, pero s&oacute;lo si se utiliza un sistema gesti&oacute;n de identidades que controle el acceso de los usuarios, de tal forma que act&uacute;e como sem&aacute;foro.";
 answers[60] = 1;
 units[60] = ['56'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1464. ";
 preguntaids[60] = 1464


//  Id pregunta: 1547 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;C&oacute;mo se denomina a la conversi&oacute;n impl&iacute;cita de cualquier tipo de valor al tipo objeto en el lenguaje C#?";
 choices[61]= new Array();
 choices[61][0] = "Casting.";
 choices[61][1] = "Boxing.";
 choices[61][2] = "Unboxing.";
 choices[61][3] = "Down-casting.";
 answers[61] = 1;
 units[61] = ['56'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1547. ";
 preguntaids[61] = 1547


//  Id pregunta: 2692 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Qu&eacute; se entiende por solapamiento de componentes?:";
 choices[62]= new Array();
 choices[62][0] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[62][1] = "Es el porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[62][2] = "Es la cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[62][3] = "Es el n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio o para reorganizar el mismo";
 answers[62] = 0;
 units[62] = ['56'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2692. ";
 preguntaids[62] = 2692


//  Id pregunta: 2579 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes sistemas operativos no es un sistema multiusuario que permite a sus usuarios iniciar sesiones en ellos mediante terminales?";
 choices[63]= new Array();
 choices[63][0] = "Unix";
 choices[63][1] = "Z/OS";
 choices[63][2] = "Microsoft Windows";
 choices[63][3] = "Todas los sistemas anteriores lo permiten.";
 answers[63] = 3;
 units[63] = ['56'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2579. ";
 preguntaids[63] = 2579


//  Id pregunta: 1664 Año de creación de pregunta: 2016
 questions[64]= "65)  Seleccione la respuesta correcta con respecto a los diferentes tipos de sistemas de gesti&oacute;n de memoria (SGM):";
 choices[64]= new Array();
 choices[64][0] = "Los SGM por paginaci&oacute;n no producen fragmentaci&oacute;n interna.";
 choices[64][1] = "Los SGM por segmentaci&oacute;n no producen fragmentaci&oacute;n externa.";
 choices[64][2] = "Los SGM por paginaci&oacute;n producen fragmentaci&oacute;n externa.";
 choices[64][3] = "Los SGM por segmentaci&oacute;n no producen fragmentaci&oacute;n interna.";
 answers[64] = 3;
 units[64] = ['56'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1664. ";
 preguntaids[64] = 1664


//  Id pregunta: 2780 Año de creación de pregunta: 2002
 questions[65]= "66)  El primer boceto de la arquitectura de un ordenador fue propuesto por:";
 choices[65]= new Array();
 choices[65][0] = "Clive Sinclair";
 choices[65][1] = "John Von Neumann";
 choices[65][2] = "Edsger Dijkstra";
 choices[65][3] = "Steve Jobs";
 answers[65] = 1;
 units[65] = ['56'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2780. ";
 preguntaids[65] = 2780


//  Id pregunta: 2675 Año de creación de pregunta: 2002
 questions[66]= "67)  &iquest;Qu&eacute; es el 'swapping'?:";
 choices[66]= new Array();
 choices[66][0] = "Un algoritmo para planificaci&oacute;n del uso de la CPU";
 choices[66][1] = "Un mecanismo para mover procesos de ejecuci&oacute;n desde/hacia la memoria principal a/desde disco respectivamente";
 choices[66][2] = "Un tipo especial de organizaci&oacute;n de los sistemas de ficheros";
 choices[66][3] = "El tiempo medio necesario para mover un programa desde disco a la memoria principal";
 answers[66] = 1;
 units[66] = ['56'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2675. ";
 preguntaids[66] = 2675


//  Id pregunta: 2759 Año de creación de pregunta: 2002
 questions[67]= "68)  El lenguaje COBOL:";
 choices[67]= new Array();
 choices[67][0] = "Es un lenguaje de programaci&oacute;n que no cuenta con ninguna variedad para el sistema operativo UNIX";
 choices[67][1] = "Es un lenguaje de programaci&oacute;n desarrollado por CODASYL a principios de los a&ntilde;os 60";
 choices[67][2] = "Es un lenguaje de programaci&oacute;n desarrollado por CODASYL a principios de los a&ntilde;os 70";
 choices[67][3] = "Es un lenguaje de programaci&oacute;n que dej&oacute; de utilizarse por incompatibilidad con el efecto 2000";
 answers[67] = 1;
 units[67] = ['56'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2759. ";
 preguntaids[67] = 2759


//  Id pregunta: 1125 Año de creación de pregunta: 2016
 questions[68]= "69)  El algoritmo de Peterson corresponde a:";
 choices[68]= new Array();
 choices[68][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[68][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[68][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[68][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[68] = 3;
 units[68] = ['56'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1125. ";
 preguntaids[68] = 1125


//  Id pregunta: 1121 Año de creación de pregunta: 2016
 questions[69]= "70)  En un sistema operativo, cuando hay suficiente memoria para ubicar un nuevo proceso, pero no se le puede asignar porque el espacio disponible no est&aacute; contiguo, se le denomina:";
 choices[69]= new Array();
 choices[69][0] = "Segmentaci&oacute;n.";
 choices[69][1] = "Paginaci&oacute;n.";
 choices[69][2] = "Fragmentaci&oacute;n externa.";
 choices[69][3] = "Fragmentaci&oacute;n interna.";
 answers[69] = 2;
 units[69] = ['56'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1121. ";
 preguntaids[69] = 1121


//  Id pregunta: 1470 Año de creación de pregunta: 2016
 questions[70]= "71)  Indicad cual de los siguientes sistemas de ficheros corresponde con un sistema espec&iacute;fico de ficheros de red:";
 choices[70]= new Array();
 choices[70][0] = "FAT32";
 choices[70][1] = "UDF";
 choices[70][2] = "NFS";
 choices[70][3] = "HFS";
 answers[70] = 2;
 units[70] = ['56'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1470. ";
 preguntaids[70] = 1470


//  Id pregunta: 2768 Año de creación de pregunta: 2002
 questions[71]= "72)  El mecanismo de overlay,  utilizado para poder ejecutar programas de mayor tama&ntilde;o que la memoria principal se caracteriza por:";
 choices[71]= new Array();
 choices[71][0] = "Es un mecanismo que permite al programador no preocuparse por el tama&ntilde;o de los programas";
 choices[71][1] = "El programador debe partir los programas en trozos de tama&ntilde;os similares";
 choices[71][2] = "No es necesario que los programas contengan instrucciones que gestionen el proceso de cargar en memoria el c&oacute;digo que se va a ejecutar en un momento dado";
 choices[71][3] = "Sustituy&oacute; al proceso de paginaci&oacute;n a lo largo de los a&ntilde;os 60";
 answers[71] = 1;
 units[71] = ['56'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2768. ";
 preguntaids[71] = 2768


//  Id pregunta: 1508 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[72]= new Array();
 choices[72][0] = "A mayor tama&ntilde;o del quantum mayor overhead.";
 choices[72][1] = "A mayor swapping mayor overhead.";
 choices[72][2] = "A mayor throughput mayor overhead.";
 choices[72][3] = "Ninguna de las anteriores es cierta.";
 answers[72] = 1;
 units[72] = ['56'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 1508. ";
 preguntaids[72] = 1508


//  Id pregunta: 2633 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes se considerar&aacute; siempre software de aplicaciones y no software de base?";
 choices[73]= new Array();
 choices[73][0] = "Sistemas operativos";
 choices[73][1] = "Software de comunicaciones";
 choices[73][2] = "Software ofim&aacute;tico";
 choices[73][3] = "Sistemas de gesti&oacute;n de datos";
 answers[73] = 2;
 units[73] = ['56'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2633. ";
 preguntaids[73] = 2633


//  Id pregunta: 2732 Año de creación de pregunta: 2002
 questions[74]= "75)  Dentro de los modos de direccionamiento se llama direccionamiento indirecto a:";
 choices[74]= new Array();
 choices[74][0] = "Cuando el objeto se halla direccionado en la propia instrucci&oacute;n";
 choices[74][1] = "Cuando el objeto direccionado es la direcci&oacute;n del objeto buscado";
 choices[74][2] = "Cuando el objeto est&aacute; en un direcci&oacute;n predeterminada";
 choices[74][3] = "Cuando se expresa un desplazamiento sobre una direcci&oacute;n base";
 answers[74] = 1;
 units[74] = ['56'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2732. ";
 preguntaids[74] = 2732


