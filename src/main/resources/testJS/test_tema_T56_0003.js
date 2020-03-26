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
//  Id pregunta: 9148 Año de creación de pregunta: 2014
 questions[0]= "1)  TinyOS, cuyo dise&ntilde;o est&aacute; orientado a sistemas embebidos inal&aacute;mbricos de baja potencia, est&aacute; escrito en el lenguaje:";
 choices[0]= new Array();
 choices[0][0] = "Java";
 choices[0][1] = "Python";
 choices[0][2] = ".Net";
 choices[0][3] = "nesC";
 answers[0] = 3;
 units[0] = ['56'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9148. Examen TIC A2 2013";
 preguntaids[0] = 9148


//  Id pregunta: 9994 Año de creación de pregunta: 2015
 questions[1]= "2)  El algoritmo de Peterson corresponde a:";
 choices[1]= new Array();
 choices[1][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[1][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[1][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[1][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[1] = 3;
 units[1] = ['56'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9994. Examen TIC A2 2014";
 preguntaids[1] = 9994


//  Id pregunta: 8443 Año de creación de pregunta: 2011
 questions[2]= "3)  El manejador de dispositivos es:";
 choices[2]= new Array();
 choices[2][0] = "Un p rograma de usuario final";
 choices[2][1] = "Hardware que controla un dispositivo";
 choices[2][2] = "Software que controla un dispositivo";
 choices[2][3] = "Todas las anteriores son ciertas";
 answers[2] = 2;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8443. ";
 preguntaids[2] = 8443


//  Id pregunta: 8596 Año de creación de pregunta: 2013
 questions[3]= "4)  &iquest;De qu&eacute; tipo de registro del procesador es el &quot;registro de instrucci&oacute;n&quot;?";
 choices[3]= new Array();
 choices[3][0] = "Opaco";
 choices[3][1] = "Transparente";
 choices[3][2] = "De control";
 choices[3][3] = "Ninguna respuesta es v&aacute;lida.";
 answers[3] = 1;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8596. ";
 preguntaids[3] = 8596


//  Id pregunta: 8275 Año de creación de pregunta: 2011
 questions[4]= "5)  En un esquema de multiprogramaci&oacute;n en memoria real, independientemente de que est&eacute; basado en particiones de tama&ntilde;o fijas o de tama&ntilde;o variable, &iquest;en qu&eacute; consiste el algoritmo del &quot;siguiente ajuste&quot; para elegir el tama&ntilde;o de la partici&oacute;n en la que alojar un programa?";
 choices[4]= new Array();
 choices[4][0] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado";
 choices[4][1] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado, pero dejando un apuntador al lugar en donde se asigno el &uacute;ltimo hueco";
 choices[4][2] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la mayor cantidad al tama&ntilde;o deseado";
 choices[4][3] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la menor cantidad al tama&ntilde;o deseado.";
 answers[4] = 1;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8275. Examen TIC A2 2010 interna";
 preguntaids[4] = 8275


//  Id pregunta: 8594 Año de creación de pregunta: 2013
 questions[5]= "6)  &iquest;Cu&aacute;l no es una funci&oacute;n l&oacute;gica que suele integrar cualquiera de los chipsets actuales?";
 choices[5]= new Array();
 choices[5][0] = "soporte para el microprocesador";
 choices[5][1] = "Controlador de memoria (MMU, Memory Management Unit)";
 choices[5][2] = "Reloj de Tiempo Real (RTC)";
 choices[5][3] = "Controlador de temperatura.";
 answers[5] = 3;
 units[5] = ['56'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8594. ";
 preguntaids[5] = 8594


//  Id pregunta: 9004 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Qu&eacute; establece el teorema de CAP o de Brewer?";
 choices[6]= new Array();
 choices[6][0] = "El n&uacute;mero medio de clientes en un sistema es igual a la tasa promedio de llegada de clientes al sistema, por el tiempo medio que el cliente est&aacute; en un sistema.";
 choices[6][1] = "En un sistema de computaci&oacute;n distribuida es imposible garantizar simult&aacute;neamente la consistencia, disponibilidad y la tolerancia  a fallos.";
 choices[6][2] = "En una relaci&oacute;n, los valores de una clave externa de una tabla, deben coincidir con los valores de una clave primaria de la otra tabla con la que est&aacute; relacionada o bien ser todos nulos.";
 choices[6][3] = "Todas las respuestas son incorrectas.";
 answers[6] = 1;
 units[6] = ['56'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9004. ";
 preguntaids[6] = 9004


//  Id pregunta: 8679 Año de creación de pregunta: 2013
 questions[7]= "8)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[7]= new Array();
 choices[7][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[7][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[7][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[7][3] = "Ninguna es correcta.";
 answers[7] = 2;
 units[7] = ['49', '56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8679. ";
 preguntaids[7] = 8679


//  Id pregunta: 8279 Año de creación de pregunta: 2011
 questions[8]= "9)  Sean dos procesos: P1, con tiempo de ejecuci&oacute;n de 20ms, y P2, con 15ms. El planificador a corto plazo act&uacute;a seg&uacute;n un Round Robin con cuanto de 10ms y tiempo de conmutaci&oacute;n de tarea de 5ms. Marcar el tiempo de retorno (regreso) de P2, teniendo en cuenta que se empieza ejecutando P1.";
 choices[8]= new Array();
 choices[8][0] = "35";
 choices[8][1] = "40";
 choices[8][2] = "50";
 choices[8][3] = "55";
 answers[8] = 2;
 units[8] = ['56'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8279. Examen TIC A2 2010 interna";
 preguntaids[8] = 8279


//  Id pregunta: 8412 Año de creación de pregunta: 2011
 questions[9]= "10)  Indicar qu&eacute; es cierto acerca de las interrupciones de Entrada/Salida:";
 choices[9]= new Array();
 choices[9][0] = "Cuando se produce una interrupci&oacute;n, el registro contador de programa de la CPU cambia su valor, apuntando a la direcci&oacute;n de comienzo de la rutina de tratamiento de la interrupci&oacute;n.";
 choices[9][1] = "Los controladores DMA, al acceder directamente a la memoria principal, no hacen uso de interrupciones.";
 choices[9][2] = "Las interrupciones son generadas por la CPU para informar a los dispositivos perif&eacute;ricos de diferentes situaciones excepcionales en la ejecuci&oacute;n de los programas.";
 choices[9][3] = "Ninguna de las anteriores es cierta";
 answers[9] = 0;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8412. Operador Ayto. Madrid 2010";
 preguntaids[9] = 8412


//  Id pregunta: 8276 Año de creación de pregunta: 2011
 questions[10]= "11)  En un Sistema Operativo, una planificaci&oacute;n de procesos se denomina &quot;preemptive&quot;:";
 choices[10]= new Array();
 choices[10][0] = "Cuando un proceso no se puede desalojar de la CPU";
 choices[10][1] = "No existe tal denominaci&oacute;n.";
 choices[10][2] = "La prevenci&oacute;n de ejecutar procesos que consuman muchos recursos por el Sistema operativo";
 choices[10][3] = "Cuando un proceso se puedo desalojar de la CPU";
 answers[10] = 3;
 units[10] = ['56'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8276. Examen TIC A2 2010 interna";
 preguntaids[10] = 8276


//  Id pregunta: 8442 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;Qu&eacute; situaci&oacute;n se da si la direcci&oacute;n virtual y su correspondiente f&iacute;sica coincide?";
 choices[11]= new Array();
 choices[11][0] = "El sistema carece de memoria virtual";
 choices[11][1] = "El sistema no es multiprogramado";
 choices[11][2] = "El espacio l&oacute;gico y el f&iacute;sico del proceso es el mismo";
 choices[11][3] = "Todas las anteriores son falsas";
 answers[11] = 2;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8442. ";
 preguntaids[11] = 8442


//  Id pregunta: 8181 Año de creación de pregunta: 2011
 questions[12]= "13)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[12]= new Array();
 choices[12][0] = "Listado de todos los equipos";
 choices[12][1] = "Listado de software usado en cada equipo.";
 choices[12][2] = "Esquema de la red.";
 choices[12][3] = "Todos son necesarios.";
 answers[12] = 3;
 units[12] = ['56'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8181. Examen TIC A2 2010 interna";
 preguntaids[12] = 8181


//  Id pregunta: 9992 Año de creación de pregunta: 2015
 questions[13]= "14)  En un sistema de memoria paginada, la tabla donde se almacena la correspondencia entre direcciones l&oacute;gicas y f&iacute;sicas, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "TLB: Translation Lookaside Buffer.";
 choices[13][1] = "TTL: Translation Table Location.";
 choices[13][2] = "ATL: Address Translation Lookup.";
 choices[13][3] = "ATB: Address Table Buffer.";
 answers[13] = 0;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9992. Examen TIC A2 2014";
 preguntaids[13] = 9992


//  Id pregunta: 10205 Año de creación de pregunta: 2015
 questions[14]= "15)  El 3 de Noviembre de 2014 se ha liberado una nueva versi&oacute;n del sistema operativo Android. Se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Android 4.3 Jelly Bean";
 choices[14][1] = "Android 5.0 Lollipop.";
 choices[14][2] = "Android 6.0 Marshmallow.";
 choices[14][3] = "Android 4.4 KitKat.";
 answers[14] = 1;
 units[14] = ['56'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10205. ";
 preguntaids[14] = 10205


//  Id pregunta: 10328 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;A qu&eacute; se refiere un problema de fragmentaci&oacute;n interna de la memoria de un sistema operativo?";
 choices[15]= new Array();
 choices[15][0] = "Cuando el programa es m&aacute;s peque&ntilde;o que el marco de p&aacute;gina asignado";
 choices[15][1] = "Cuando quedan zonas de memoria libres peque&ntilde;as que no se pueden utilizar";
 choices[15][2] = "Cuando un programa utiliza zonas de memoria diferentes en cada sesi&oacute;n para escribir sus datos.";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = 0;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 10328. ";
 preguntaids[15] = 10328


//  Id pregunta: 8593 Año de creación de pregunta: 2013
 questions[16]= "17)  &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta respecto a BIOS?";
 choices[16]= new Array();
 choices[16][0] = "Es un software que se almacena en EPROM pero que no se puede considerar b&aacute;sico";
 choices[16][1] = "Se refresca cada vez que arranca el PC";
 choices[16][2] = "Es el primer software que se ejecuta en el proceso de arranque de una placa base";
 choices[16][3] = "No se puede reprogramar";
 answers[16] = 2;
 units[16] = ['56'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8593. ";
 preguntaids[16] = 8593


//  Id pregunta: 8722 Año de creación de pregunta: 2013
 questions[17]= "18)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido:";
 choices[17]= new Array();
 choices[17][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos";
 choices[17][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[17][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[17][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[17] = 3;
 units[17] = ['56'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8722. Examen TICA2-2011";
 preguntaids[17] = 8722


//  Id pregunta: 8598 Año de creación de pregunta: 2013
 questions[18]= "19)  &iquest;Cu&aacute;l es la respuesta incorrecta respecto al interfaz de disco duro SAS?";
 choices[18]= new Array();
 choices[18][0] = "SAS (Serial Attached SCSI) es una interfaz de transferencia de datos en serie, sucesora del SCSI paralelo.";
 choices[18][1] = "Proporciona una arquitectura punto a punto m&aacute;s simple y robusta que su antecesora paralela.";
 choices[18][2] = "Una de sus principales caracter&iacute;sticas es el aumento de la velocidad de transferencia al aumentar el n&uacute;mero de dispositivos conectados";
 choices[18][3] = "Todas son correctas.";
 answers[18] = 3;
 units[18] = ['56'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8598. ";
 preguntaids[18] = 8598


//  Id pregunta: 9147 Año de creación de pregunta: 2014
 questions[19]= "20)  Podremos almacenar un fichero de 6 GB en un dispositivo, si el sistema de ficheros con el que est&aacute; formateado es:";
 choices[19]= new Array();
 choices[19][0] = "FAT32.";
 choices[19][1] = "NTFS.";
 choices[19][2] = "HPFS";
 choices[19][3] = "ISO 9660:1988 Level 2.";
 answers[19] = 1;
 units[19] = ['56'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9147. Examen TIC A2 2013";
 preguntaids[19] = 9147


//  Id pregunta: 8597 Año de creación de pregunta: 2013
 questions[20]= "21)  &iquest;Cu&aacute;les son las fases ordenadas correctamente de la ejecuci&oacute;n de instrucciones en un procesador?";
 choices[20]= new Array();
 choices[20][0] = "Decodificaci&oacute;n, Prefetch, fetch, ejecuci&oacute;n, escritura de resultados en memoria principal o en los registros";
 choices[20][1] = "Prefetch, decodificaci&oacute;n, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria principal o en los registros";
 choices[20][2] = "Prefetch, fetch, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria principal o en los registros";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 2;
 units[20] = ['56'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8597. ";
 preguntaids[20] = 8597


//  Id pregunta: 9016 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[21]= new Array();
 choices[21][0] = "En actualizar la tabla de p&aacute;ginas, se pide una p&aacute;gina que ya est&aacute; en memoria";
 choices[21][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[21][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[21][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[21] = 0;
 units[21] = ['56'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9016. ";
 preguntaids[21] = 9016


//  Id pregunta: 8590 Año de creación de pregunta: 2013
 questions[22]= "23)  Indique la frase correcta acerca de las arquitecturas de microprocesadores";
 choices[22]= new Array();
 choices[22][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[22][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[22][2] = "La arquitectura RISC maneja instrucciones con forma to regular y complejos modos de direccionamiento";
 choices[22][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitues de palabra.";
 answers[22] = 3;
 units[22] = ['56'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8590. ";
 preguntaids[22] = 8590


//  Id pregunta: 8402 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;Qu&eacute; relaci&oacute;n existe entre fichero, registro y campo?:";
 choices[23]= new Array();
 choices[23][0] = "El fichero esta formado por varios campos y a cada conjunto de campos con un significado relevante se le conoce como registro.";
 choices[23][1] = "Los registros est&aacute;n compuestos por campos, pero no tienen ninguna relaci&oacute;n con un fichero.";
 choices[23][2] = "Los ficheros contienen registros y los registros est&aacute;n formados por una serie de campos cada uno de los cuales contiene un tipo de informaci&oacute;n sobre dicho registro.";
 choices[23][3] = "Ninguna de las anteriores es correcta";
 answers[23] = 2;
 units[23] = ['56'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8402. Operador Ayto. Madrid 2010";
 preguntaids[23] = 8402


//  Id pregunta: 8584 Año de creación de pregunta: 2013
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[24]= new Array();
 choices[24][0] = "ISA";
 choices[24][1] = "HTI";
 choices[24][2] = "PCI";
 choices[24][3] = "AGP";
 answers[24] = 1;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8584. ";
 preguntaids[24] = 8584


//  Id pregunta: 9183 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[25]= new Array();
 choices[25][0] = "Pettabyte (PB).";
 choices[25][1] = "Terabyte (TB).";
 choices[25][2] = "Yottabyte (YB).";
 choices[25][3] = "Zettabyte (ZB).";
 answers[25] = 2;
 units[25] = ['56'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9183. Examen TIC A2 2013";
 preguntaids[25] = 9183


//  Id pregunta: 10227 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Cu&aacute;l se corresponde con el nivel alto de planificaci&oacute;n del procesador?";
 choices[26]= new Array();
 choices[26][0] = "Scheduler";
 choices[26][1] = "Planificator";
 choices[26][2] = "High Planificator";
 choices[26][3] = "Dispatcher";
 answers[26] = 0;
 units[26] = ['56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 10227. ";
 preguntaids[26] = 10227


//  Id pregunta: 8282 Año de creación de pregunta: 2011
 questions[27]= "28)  En la planificaci&oacute;n por prioridad circular o &quot;Round Robin&quot;:";
 choices[27]= new Array();
 choices[27][0] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de tiempo de ejecuci&oacute;n restante m&aacute;s corto";
 choices[27][1] = "De acuerdo a su prioridad, cada proceso preparado pasa a ejecuci&oacute;n durante una cota de tiempo llamada &quot;cuanto&quot;";
 choices[27][2] = "De forma secuencial, cada proceso preparado pasa a ejecuci&oacute;n durante un intervalo de tiempo llamada &quot;cuanto&quot;";
 choices[27][3] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de mayor prioridad asignada";
 answers[27] = 2;
 units[27] = ['56'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8282. Examen TIC A2 2010 interna";
 preguntaids[27] = 8282


//  Id pregunta: 8591 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;Qu&eacute; es un bus de expansion (I/O)?";
 choices[28]= new Array();
 choices[28][0] = "Conjunto de l&iacute;neas de comunicaci&oacute;n encargado de llevar el bus de datos, el bus de direcci&oacute;n y el de control a la tarjeta de interfaz (Entrada/Salida) que se agrega a la tarjeta principal.";
 choices[28][1] = "Vincula a todos los componentes de la CPU";
 choices[28][2] = "Son l&iacute;neas de comunicaci&oacute;n por donde circulan los datos externos e internos del microprocesador.";
 choices[28][3] = "l&iacute;neas de comunicaci&oacute;n por donde viaja la informaci&oacute;n espec&iacute;fica sobre la localizaci&oacute;n de la direcci&oacute;n de memoria de datos o dispositivo al que se hace referencia";
 answers[28] = 0;
 units[28] = ['56'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8591. Examen TIC-A1 2011";
 preguntaids[28] = 8591


//  Id pregunta: 8480 Año de creación de pregunta: 2011
 questions[29]= "30)  En un sistema de segmentaci&oacute;n, los segmentos que necesitan los programas pueden no estar residentes en la memoria principal. Esta situaci&oacute;n se indica haciendo uso del:";
 choices[29]= new Array();
 choices[29][0] = "Bit de segmentaci&oacute;n.";
 choices[29][1] = "Bit de ausencia.";
 choices[29][2] = "Bit de presencia.";
 choices[29][3] = "Bit de petici&oacute;n.";
 answers[29] = 2;
 units[29] = ['56'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8480. Examen UPM A2 2011";
 preguntaids[29] = 8480


//  Id pregunta: 10800 Año de creación de pregunta: 2015
 questions[30]= "31)  Una condici&oacute;n del bloqueo mutuo es:";
 choices[30]= new Array();
 choices[30][0] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[30][1] = "Condici&oacute;n de ocupar y esperar un recurso";
 choices[30][2] = "Condici&oacute;n de espera circular";
 choices[30][3] = "Las 3 son condiciones necesarias del bloqueo mutuo.";
 answers[30] = 3;
 units[30] = ['56'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10800. ";
 preguntaids[30] = 10800


//  Id pregunta: 8678 Año de creación de pregunta: 2013
 questions[31]= "32)  Desde el punto de vista interno, el sistema operativo puede concebirse como:";
 choices[31]= new Array();
 choices[31][0] = "Un interfaz entre los programas de aplicaci&oacute;n y la m&aacute;quina pura.";
 choices[31][1] = "Gestor de recursos.";
 choices[31][2] = "Coordinador del funcionamiento de los recursos de c&oacute;mputo y de entrada y salida.";
 choices[31][3] = "B) y C) son correctas.";
 answers[31] = 3;
 units[31] = ['56'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8678. ";
 preguntaids[31] = 8678


//  Id pregunta: 8595 Año de creación de pregunta: 2013
 questions[32]= "33)  &iquest;Qu&eacute; suele incorporar un controlador de Entrada/Salida?";
 choices[32]= new Array();
 choices[32][0] = "Una UART";
 choices[32][1] = "El controlador de puerto paralelo";
 choices[32][2] = "Reloj de tiempo real";
 choices[32][3] = "Todas las anteriores";
 answers[32] = 3;
 units[32] = ['56'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8595. ";
 preguntaids[32] = 8595


//  Id pregunta: 9834 Año de creación de pregunta: 2015
 questions[33]= "34)  Se&ntilde;ale la respuesta correcta:";
 choices[33]= new Array();
 choices[33][0] = "Un proceso es equivalente a un hilo de ejecuci&oacute;n.";
 choices[33][1] = "Los hilos no pueden compartir entre ellos datos o espacios de direcciones.";
 choices[33][2] = "Se tarda m&aacute;s en eliminar un hilo que un proceso.";
 choices[33][3] = "Tanto los procesos como los hilos pueden crear sus propios hijos.";
 answers[33] = 3;
 units[33] = ['56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9834. ";
 preguntaids[33] = 9834


//  Id pregunta: 8592 Año de creación de pregunta: 2013
 questions[34]= "35)  &iquest;C&oacute;mo se pueden clasificar los perif&eacute;ricos seg&uacute;n su funci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "de entrada";
 choices[34][1] = "de salida";
 choices[34][2] = "Que realizan funciones de almacenamiento auxiliar";
 choices[34][3] = "Todas las anteriores";
 answers[34] = 3;
 units[34] = ['56'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8592. ";
 preguntaids[34] = 8592


//  Id pregunta: 10068 Año de creación de pregunta: 2015
 questions[35]= "36)  En un sistema operativo (S.O) con memoria virtual, cuando un proceso en ejecuci&oacute;n genera un fallo de p&aacute;gina:";
 choices[35]= new Array();
 choices[35][0] = "Se cierran todos los procesos en ejecuci&oacute;n ya que es un error grave del sistema operativo.";
 choices[35][1] = "El S.O busca la p&aacute;gina en memoria secundaria y la carga en memoria principal.";
 choices[35][2] = "El S.O interrumpe la ejecuci&oacute;n del proceso y lo pone en la cola de errores.";
 choices[35][3] = "En un sistema con memoria virtual nunca hay fallos de p&aacute;gina.";
 answers[35] = 1;
 units[35] = ['56'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10068. Examen TIC A2 2014";
 preguntaids[35] = 10068


//  Id pregunta: 8280 Año de creación de pregunta: 2011
 questions[36]= "37)  El grado de multiprogramaci&oacute;n en un sistema operativo corresponde a:";
 choices[36]= new Array();
 choices[36][0] = "El n&uacute;mero m&aacute;ximo de programas que realizan operaciones de E/S.";
 choices[36][1] = "El n&uacute;mero m&aacute;ximo de archivos en un directorio";
 choices[36][2] = "El n&uacute;mero m&aacute;ximo de procesos en memoria principal";
 choices[36][3] = "El n&uacute;mero m&aacute;ximo de programas que comparten variables";
 answers[36] = 2;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8280. Examen TIC A2 2010 interna";
 preguntaids[36] = 8280


//  Id pregunta: 8403 Año de creación de pregunta: 2011
 questions[37]= "38)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[37]= new Array();
 choices[37][0] = "Contiene las instrucciones del programa.";
 choices[37][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[37][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[37][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[37] = 2;
 units[37] = ['56'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8403. Operador Ayto. Madrid 2010";
 preguntaids[37] = 8403


//  Id pregunta: 8587 Año de creación de pregunta: 2013
 questions[38]= "39)  La arquitectura de un ordenador viene definida por";
 choices[38]= new Array();
 choices[38][0] = "El repertorio de instrucciones";
 choices[38][1] = "El tipo de direccionamientos";
 choices[38][2] = "El tipo de operandos";
 choices[38][3] = "Todas las anteriores";
 answers[38] = 3;
 units[38] = ['56'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8587. Examen TIC-A1 2011";
 preguntaids[38] = 8587


//  Id pregunta: 9186 Año de creación de pregunta: 2014
 questions[39]= "40)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Parametrizaci&oacute;n.";
 choices[39][1] = "Segmentaci&oacute;n.";
 choices[39][2] = "Multiplexaci&oacute;n.";
 choices[39][3] = "Paginaci&oacute;n.";
 answers[39] = 1;
 units[39] = ['56'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9186. Examen TIC A2 2013";
 preguntaids[39] = 9186


//  Id pregunta: 8682 Año de creación de pregunta: 2013
 questions[40]= "41)  &iquest;Qu&eacute; es IPL (Initial Program Load)?";
 choices[40]= new Array();
 choices[40][0] = "Es el equivalente al Boot en z/OS";
 choices[40][1] = "El primer programa que se ejecuta cuando se hace un TSO logon.";
 choices[40][2] = "Carga de programa en modo batch en z/OS.";
 choices[40][3] = "Ninguna es correcta.";
 answers[40] = 0;
 units[40] = ['56'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8682. ";
 preguntaids[40] = 8682


