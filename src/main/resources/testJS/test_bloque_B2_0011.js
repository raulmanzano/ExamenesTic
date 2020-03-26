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
//  Id pregunta: 2779 Año de creación de pregunta: 2002
 questions[0]= "1)  El paralelismo expl&iacute;cito MIMD esta constituido por:";
 choices[0]= new Array();
 choices[0][0] = "Un s&oacute;lo flujo de instrucciones y varios de datos";
 choices[0][1] = "Varios flujos de Instrucciones y uno de datos";
 choices[0][2] = "Varios flujos de instrucciones y varios de datos";
 choices[0][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[0] = 2;
 units[0] = ['49'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2779. ";
 preguntaids[0] = 2779


//  Id pregunta: 2765 Año de creación de pregunta: 2002
 questions[1]= "2)  Firmar un mensaje electr&oacute;nico:";
 choices[1]= new Array();
 choices[1][0] = "Es lo mismo que cifrarlo";
 choices[1][1] = "Es lo mismo que codificarlo";
 choices[1][2] = "Garantiza la confidencialidad";
 choices[1][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[1] = 3;
 units[1] = ['76'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2765. ";
 preguntaids[1] = 2765


//  Id pregunta: 2768 Año de creación de pregunta: 2002
 questions[2]= "3)  El mecanismo de overlay,  utilizado para poder ejecutar programas de mayor tama&ntilde;o que la memoria principal se caracteriza por:";
 choices[2]= new Array();
 choices[2][0] = "Es un mecanismo que permite al programador no preocuparse por el tama&ntilde;o de los programas";
 choices[2][1] = "El programador debe partir los programas en trozos de tama&ntilde;os similares";
 choices[2][2] = "No es necesario que los programas contengan instrucciones que gestionen el proceso de cargar en memoria el c&oacute;digo que se va a ejecutar en un momento dado";
 choices[2][3] = "Sustituy&oacute; al proceso de paginaci&oacute;n a lo largo de los a&ntilde;os 60";
 answers[2] = 1;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2768. ";
 preguntaids[2] = 2768


//  Id pregunta: 2758 Año de creación de pregunta: 2002
 questions[3]= "4)  El Kernel del sistema objetivo del proyecto GNU es:";
 choices[3]= new Array();
 choices[3][0] = "El kernel 'Linux', mantenido por Linus Torvalds";
 choices[3][1] = "El kernel de Minix, de Andrew S. Tanembaum";
 choices[3][2] = "El kernel Hurd";
 choices[3][3] = "Todas son falsas";
 answers[3] = 2;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2758. ";
 preguntaids[3] = 2758


//  Id pregunta: 2823 Año de creación de pregunta: 2002
 questions[4]= "5)  En inteligencia artificial un marco es:";
 choices[4]= new Array();
 choices[4][0] = "La representaci&oacute;n del conocimiento basada en teor&iacute;a de grafos";
 choices[4][1] = "Un elemento de representaci&oacute;n que contiene, entre otros elementos, ranuras de informaci&oacute;n y punteros";
 choices[4][2] = "El mecanismo de razonamiento m&aacute;s utilizado a la hora de equiparar elementos de conocimiento";
 choices[4][3] = "El objeto formado por el encapsulamiento de reglas deductivas y hechos";
 answers[4] = 1;
 units[4] = ['67'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2823. ";
 preguntaids[4] = 2823


//  Id pregunta: 2801 Año de creación de pregunta: 2002
 questions[5]= "6)  En cuanto a las t&eacute;cnicas de representaci&oacute;n del conocimiento, podemos afirmar que:";
 choices[5]= new Array();
 choices[5][0] = "Un Sistema Basado en el Conocimiento (SBC) es un sistema inform&aacute;tico cuya principal caracter&iacute;stica reside en que el conocimiento necesario para resolver un problema aparece como estructura procesable separada del procedimiento que la manipula";
 choices[5][1] = "Los mecanismos de inferencia son paradigmas de representaci&oacute;n utilizados en las bases de conocimiento de los SBC";
 choices[5][2] = "La representaci&oacute;n param&eacute;trica est&aacute; basada en una concepci&oacute;n epistemol&oacute;gica del mundo en t&eacute;rminos de conceptos";
 choices[5][3] = "Las representaciones de tipo simb&oacute;lico est&aacute;n basadas en una visi&oacute;n del mundo de tipo fisiol&oacute;gico, tales como las redes neuronales";
 answers[5] = 0;
 units[5] = ['68'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2801. ";
 preguntaids[5] = 2801


//  Id pregunta: 2790 Año de creación de pregunta: 2002
 questions[6]= "7)  El sistema de encriptaci&oacute;n RSA (Rivest, Shamir y Adleman, 1978)&hellip;:";
 choices[6]= new Array();
 choices[6][0] = "El receptor del mensaje debe conocer la clave p&uacute;blica para descifrarlo";
 choices[6][1] = "Se basa en la seguridad que confiere la dificultad de factorizar n&uacute;meros grandes";
 choices[6][2] = "Es un sistema de encriptaci&oacute;n sim&eacute;trico";
 choices[6][3] = "Garantiza la seguridad a&uacute;n utilizando n&uacute;meros primos de menos de veinte cifras";
 answers[6] = 1;
 units[6] = ['76'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2790. ";
 preguntaids[6] = 2790


//  Id pregunta: 2763 Año de creación de pregunta: 2002
 questions[7]= "8)  Entrust:";
 choices[7]= new Array();
 choices[7][0] = "Un algoritmo criptogr&aacute;fico";
 choices[7][1] = "Un mecanismo de intercambio de claves";
 choices[7][2] = "Una infraestructura de clave p&uacute;blica (PKI)";
 choices[7][3] = "Una funcion resumen";
 answers[7] = 2;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2763. ";
 preguntaids[7] = 2763


//  Id pregunta: 2783 Año de creación de pregunta: 2002
 questions[8]= "9)  El protocolo de acceso al directorio en X.500 es:";
 choices[8]= new Array();
 choices[8][0] = "TCP/IP";
 choices[8][1] = "LDAP";
 choices[8][2] = "IMAP";
 choices[8][3] = "DAP";
 answers[8] = 3;
 units[8] = ['77'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2783. ";
 preguntaids[8] = 2783


//  Id pregunta: 2767 Año de creación de pregunta: 2002
 questions[9]= "10)  El mecanismo &quot;priority aging&quot; que utilizan algunos programas de planificaci&oacute;n de trabajos funciona de la siguiente manera:";
 choices[9]= new Array();
 choices[9][0] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que ha transcurrido desde que el usuario lo envi&oacute;";
 choices[9][1] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo transcurrido desde una hora prefijada por el programador";
 choices[9][2] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que llevan en la cola de entrada";
 choices[9][3] = "Aumenta la prioridad de los trabajos en funci&oacute;n de la edad y categor&iacute;a profesional del programador";
 answers[9] = 2;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2767. ";
 preguntaids[9] = 2767


//  Id pregunta: 2770 Año de creación de pregunta: 2002
 questions[10]= "11)  El modelo de base de datos CODASYL:";
 choices[10]= new Array();
 choices[10][0] = "Es el modelo conceptual de datos que corresponde a los SGBD jer&aacute;rquicos";
 choices[10][1] = "Es el modelo l&oacute;gico de datos de un SGBD relacional";
 choices[10][2] = "Es el Modelo de Codd";
 choices[10][3] = "No se corresponde con nada de lo anterior";
 answers[10] = 3;
 units[10] = ['60'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2770. ";
 preguntaids[10] = 2770


//  Id pregunta: 2792 Año de creación de pregunta: 2002
 questions[11]= "12)  El software para la productividad en grupos de trabajo incluye:";
 choices[11]= new Array();
 choices[11][0] = "Gesti&oacute;n de agenda compartida";
 choices[11][1] = "Teleconversaciones m&uacute;ltiples";
 choices[11][2] = "Correo electr&oacute;nico";
 choices[11][3] = "Todas las respuestas anteriores son correctas";
 answers[11] = 3;
 units[11] = ['72'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2792. ";
 preguntaids[11] = 2792


//  Id pregunta: 2756 Año de creación de pregunta: 2002
 questions[12]= "13)  El &iacute;ndice m&aacute;ximo de transporte de datos de un bus PCI es:";
 choices[12]= new Array();
 choices[12][0] = "64 Mbytes/segundo";
 choices[12][1] = "16 Mbytes/segundo";
 choices[12][2] = "132 Mbytes/segundo";
 choices[12][3] = "5 Mbytes/segundo";
 answers[12] = 2;
 units[12] = ['51'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2756. ";
 preguntaids[12] = 2756


//  Id pregunta: 2774 Año de creación de pregunta: 2002
 questions[13]= "14)  El modo de ejecuci&oacute;n menos privilegiado de un procesador es conocido como:";
 choices[13]= new Array();
 choices[13][0] = "Modo del sistema";
 choices[13][1] = "Modo de usuario";
 choices[13][2] = "Modo de control";
 choices[13][3] = "Modo del n&uacute;cleo";
 answers[13] = 1;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2774. ";
 preguntaids[13] = 2774


//  Id pregunta: 2799 Año de creación de pregunta: 2002
 questions[14]= "15)  Elija la respuesta falsa. Las siguientes funciones pueden ser llevadas a cabo por un sistema windows 200x:";
 choices[14]= new Array();
 choices[14][0] = "Enrutamiento Ip";
 choices[14][1] = "Servidor de telefonia";
 choices[14][2] = "Servidor NFS";
 choices[14][3] = "Servidor NIS+";
 answers[14] = 3;
 units[14] = ['58'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2799. ";
 preguntaids[14] = 2799


//  Id pregunta: 2785 Año de creación de pregunta: 2002
 questions[15]= "16)  El registro de estados de un procesador:";
 choices[15]= new Array();
 choices[15][0] = "Se almacena en la memoria principal del procesador";
 choices[15][1] = "Almacena en cada momento el estado del procesador";
 choices[15][2] = "Sirve para almacenar las condiciones de realizaci&oacute;n de las operaciones de la ALU";
 choices[15][3] = "Los procesadores actuales no tienen registro de estados";
 answers[15] = 2;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2785. ";
 preguntaids[15] = 2785


//  Id pregunta: 2819 Año de creación de pregunta: 2002
 questions[16]= "17)  En el sistema operativo Unix, las tuberias (pipes) son mecanismos de comunicaci&oacute;n que permiten la transferencia de datos entre dos procesos. &iquest;C&oacute;mo podr&iacute;amos crear una tuber&iacute;a con el nombre TUB?:";
 choices[16]= new Array();
 choices[16][0] = "mknod TUB p";
 choices[16][1] = "En Unix no se puede dar una nombre a una tuber&iacute;a";
 choices[16][2] = "mkp TUB";
 choices[16][3] = "mkpipe TUB";
 answers[16] = 0;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2819. ";
 preguntaids[16] = 2819


//  Id pregunta: 2802 Año de creación de pregunta: 2002
 questions[17]= "18)  En el &aacute;mbito de la inteligencia artificial, &iquest;cu&aacute;l de las siguientes afirmaciones respecto de las redes sem&aacute;nticas es cierta?:";
 choices[17]= new Array();
 choices[17][0] = "La representaci&oacute;n de una red sem&aacute;ntica se realiza con nodos, correspondientes a ideas o conceptos, y arcos representando relaciones entre nodos";
 choices[17][1] = "Las redes se representan mediante sentencias condicionales que relacionan grupos de conceptos, los antecesores y los consecuentes";
 choices[17][2] = "Las redes representan patrones de un concepto e internamente est&aacute;n formados por ranuras representando caracter&iacute;sticas de las redes sem&aacute;nticas";
 choices[17][3] = "Las redes sem&aacute;nticas representan relaciones de equilibrio entre los atributos de uno o m&aacute;s objetos y el rango de valores de los mismos";
 answers[17] = 0;
 units[17] = ['67'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2802. ";
 preguntaids[17] = 2802


//  Id pregunta: 2808 Año de creación de pregunta: 2002
 questions[18]= "19)  En el entorno de Bases de Datos, los &iacute;ndices son de vital importancia en las transacciones de acceso &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?:";
 choices[18]= new Array();
 choices[18][0] = "El &iacute;ndice tambi&eacute;n es una tabla almacenada en disco";
 choices[18][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos";
 choices[18][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario";
 choices[18][3] = "Las actualizaciones de &iacute;ndices no consumen recursos";
 answers[18] = 3;
 units[18] = ['60'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2808. ";
 preguntaids[18] = 2808


//  Id pregunta: 2781 Año de creación de pregunta: 2002
 questions[19]= "20)  El principio de &quot;Need-To-Know&quot; viene a significar que:";
 choices[19]= new Array();
 choices[19][0] = "Un proceso s&oacute;lo deber&iacute;a acceder a aquello recursos que son necesarios para completar su tarea";
 choices[19][1] = "Un proceso ha de estar siempre activo frente a cualquier ataque pasivo";
 choices[19][2] = "Las dos anteriores son correctas";
 choices[19][3] = "Hace referencia exclusiva a la asignaci&oacute;n de recursos con herramientas PERT, CPM etc";
 answers[19] = 0;
 units[19] = ['56'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2781. ";
 preguntaids[19] = 2781


//  Id pregunta: 2766 Año de creación de pregunta: 2002
 questions[20]= "21)  Frecuencia de paginaci&oacute;n es:";
 choices[20]= new Array();
 choices[20][0] = "N&uacute;mero de peticiones de servicio por unidad de tiempo";
 choices[20][1] = "N&uacute;mero de programas sacados de memoria por unidad de tiempo";
 choices[20][2] = "N&uacute;mero de trabajos de un programa en un entorno de memoria virtual por unidad de tiempo";
 choices[20][3] = "N&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo";
 answers[20] = 3;
 units[20] = ['56'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2766. ";
 preguntaids[20] = 2766


//  Id pregunta: 2777 Año de creación de pregunta: 2002
 questions[21]= "22)  El objetivo principal de la miner&iacute;a de datos es:";
 choices[21]= new Array();
 choices[21][0] = "Descubrir el conocimiento oculto en grandes vol&uacute;menes de datos y expresarlo de forma inteligible.";
 choices[21][1] = "Reorganizar adecuadamente los grandes vol&uacute;menes de datos.";
 choices[21][2] = "Tener copias de seguridad fiables y r&aacute;pidas de todos y cada uno de los datos de que se dispone.";
 choices[21][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[21] = 0;
 units[21] = ['72'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2777. ";
 preguntaids[21] = 2777


//  Id pregunta: 2810 Año de creación de pregunta: 2002
 questions[22]= "23)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Private o privadas";
 choices[22][1] = "Static o est&aacute;ticas";
 choices[22][2] = "Final o final";
 choices[22][3] = "System o sistema";
 answers[22] = 1;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2810. ";
 preguntaids[22] = 2810


//  Id pregunta: 2771 Año de creación de pregunta: 2002
 questions[23]= "24)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[23]= new Array();
 choices[23][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[23][1] = "Interfaz lenguaje de datos de usuario";
 choices[23][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[23][3] = "Interfaz lenguaje de datos interno";
 answers[23] = 2;
 units[23] = ['60'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2771. ";
 preguntaids[23] = 2771


//  Id pregunta: 2825 Año de creación de pregunta: 2002
 questions[24]= "25)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[24]= new Array();
 choices[24][0] = "Superset o superconjunto";
 choices[24][1] = "Package o paquete";
 choices[24][2] = "Superclass o Superclase";
 choices[24][3] = "Colection o Colecci&oacute;n";
 answers[24] = 1;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2825. ";
 preguntaids[24] = 2825


//  Id pregunta: 2773 Año de creación de pregunta: 2002
 questions[25]= "26)  El modelo de referencia ANSI/SPARC para la estandarizaci&oacute;n de los SGBD:";
 choices[25]= new Array();
 choices[25][0] = "El n&uacute;cleo de la arquitectura lo constituye el diccionario de datos";
 choices[25][1] = "Los metadatos no forman parte del diccionario";
 choices[25][2] = "Indica la forma de instrumentar las interacciones del SGBD";
 choices[25][3] = "La administraci&oacute;n de la empresa dise&ntilde;a los esquemas externos";
 answers[25] = 0;
 units[25] = ['60'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2773. ";
 preguntaids[25] = 2773


//  Id pregunta: 2793 Año de creación de pregunta: 2002
 questions[26]= "27)  El t&eacute;rmino &quot;aleatorio&quot; en las memoria RAM se refiere a que:";
 choices[26]= new Array();
 choices[26][0] = "el acceso no sigue un cronograma concreto sino que puede producirse aleatoriamente en cualquier momento de un intervalo limitado";
 choices[26][1] = "el orden de varias operaciones de acceso (lectura y/o escritura) simult&aacute;neas es aleatorio para evitar colisiones, similar a la t&eacute;cnica usada en Ethernet";
 choices[26][2] = "se puede acceder a cualquier byte de memoria sin pasar por los bytes precedentes, esto es, no es un acceso secuencial";
 choices[26][3] = "ninguna de las razones anteriores es la correcta";
 answers[26] = 2;
 units[26] = ['51'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2793. ";
 preguntaids[26] = 2793


//  Id pregunta: 2831 Año de creación de pregunta: 2002
 questions[27]= "28)  En la extracci&oacute;n del conocimiento en la miner&iacute;a de datos, &iquest;qu&eacute; ejemplo de los siguientes no se corresponde con aprendizaje supervisado?";
 choices[27]= new Array();
 choices[27][0] = "Sistemas de clasificaci&oacute;n.";
 choices[27][1] = "Patrones de comportamiento.";
 choices[27][2] = "Sistemas de predicci&oacute;n.";
 choices[27][3] = "Modelado y control.";
 answers[27] = 1;
 units[27] = ['68'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2831. ";
 preguntaids[27] = 2831


//  Id pregunta: 2804 Año de creación de pregunta: 2002
 questions[28]= "29)  En el campo de la integraci&oacute;n de los sistemas expertos:";
 choices[28]= new Array();
 choices[28][0] = "Los gestores inteligentes de bases de datos modelizan las descripciones funcionales de los procesos inferenciales b&aacute;sicos";
 choices[28][1] = "Las arquitecturas de sistemas de gesti&oacute;n de bases de datos se pueden optimizar incorporando m&oacute;dulos de optimizaci&oacute;n basados en t&eacute;cnicas heur&iacute;sticas de inteligencia artificial";
 choices[28][2] = "Un sistema de gesti&oacute;n de bases de datos deductivo es aqu&eacute;l en que los criterios de selecci&oacute;n pueden deducirse directamente de las restricciones de integridad";
 choices[28][3] = "Para la formalizaci&oacute;n de sistemas deductivos de bases de datos nunca se utilizan las t&eacute;cnicas de deducci&oacute;n autom&aacute;tica de la l&oacute;gica de primer orden";
 answers[28] = 1;
 units[28] = ['67'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2804. ";
 preguntaids[28] = 2804


//  Id pregunta: 2786 Año de creación de pregunta: 2002
 questions[29]= "30)  El Registro de Instrucciones es un &oacute;rgano de control del procesador que sirve para:";
 choices[29]= new Array();
 choices[29][0] = "Llevar el control de las instrucciones m&aacute;quina que se van ejecutando";
 choices[29][1] = "Almacenar la instrucci&oacute;n que se ha de decodificar y ejecutar";
 choices[29][2] = "Es un contador que se va incrementado con los pulsos del reloj maestro";
 choices[29][3] = "Almacenar la direcci&oacute;n de la instrucci&oacute;n que se va a ejecutar";
 answers[29] = 1;
 units[29] = ['56'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2786. ";
 preguntaids[29] = 2786


//  Id pregunta: 2818 Año de creación de pregunta: 2002
 questions[30]= "31)  En el sector de los procesadores cient&iacute;ficos:";
 choices[30]= new Array();
 choices[30][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[30][1] = "Se utilizan sistemas operativos propietarios.";
 choices[30][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[30][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[30] = 3;
 units[30] = ['49', '50'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2818. ";
 preguntaids[30] = 2818


//  Id pregunta: 2830 Año de creación de pregunta: 2002
 questions[31]= "32)  En la estructura del sistema operativo Unix:";
 choices[31]= new Array();
 choices[31][0] = "Una de las funciones del kernel o n&uacute;cleo es la de gestionar el sistema de archivos";
 choices[31][1] = "El tratamiento de cualquier dispositivo perif&eacute;rico como un archivo";
 choices[31][2] = "La shell muestra la interfaz entre el Unix y el usuario, incorpora una serie de utilidades para realizar las tareas solicitadas por el usuario";
 choices[31][3] = "Dentro del kernel existen dos subsistemas: la interfaz de llamadas al sistema, y el planificador (scheduler)";
 answers[31] = 1;
 units[31] = ['57'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2830. ";
 preguntaids[31] = 2830


//  Id pregunta: 2769 Año de creación de pregunta: 2002
 questions[32]= "33)  El middleware es un software que proporciona un conjunto de servicios para conseguir:";
 choices[32]= new Array();
 choices[32][0] = "Independencia respecto al lenguaje de programaci&oacute;n";
 choices[32][1] = "Transparencia de ubicaci&oacute;n de los recursos distribuidos";
 choices[32][2] = "Ubicar los datos a conveniencia del usuario para conseguir en cada caso los mejores rendimientos";
 choices[32][3] = "Reducir la complejidad de los desarrollos";
 answers[32] = 1;
 units[32] = ['55'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2769. ";
 preguntaids[32] = 2769


//  Id pregunta: 2811 Año de creación de pregunta: 2002
 questions[33]= "34)  En el lenguaje SQL una 'Transacci&oacute;n' es una secuencia de operaciones que constituye una unidad de recuperaci&oacute;n, y que puede finalizarse con una sentencia:";
 choices[33]= new Array();
 choices[33][0] = "SELECT";
 choices[33][1] = "END";
 choices[33][2] = "COMMIT";
 choices[33][3] = "CLOSE";
 answers[33] = 2;
 units[33] = ['61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2811. ";
 preguntaids[33] = 2811


//  Id pregunta: 2761 Año de creación de pregunta: 2002
 questions[34]= "35)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[34]= new Array();
 choices[34][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[34][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[34][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[34][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[34] = 2;
 units[34] = ['74'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2761. ";
 preguntaids[34] = 2761


//  Id pregunta: 2780 Año de creación de pregunta: 2002
 questions[35]= "36)  El primer boceto de la arquitectura de un ordenador fue propuesto por:";
 choices[35]= new Array();
 choices[35][0] = "Clive Sinclair";
 choices[35][1] = "John Von Neumann";
 choices[35][2] = "Edsger Dijkstra";
 choices[35][3] = "Steve Jobs";
 answers[35] = 1;
 units[35] = ['56'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2780. ";
 preguntaids[35] = 2780


//  Id pregunta: 2789 Año de creación de pregunta: 2002
 questions[36]= "37)  El SGBD permite la definici&oacute;n de la Base de Datos a tres niveles de abstracci&oacute;n: l&oacute;gico, f&iacute;sico y externo En el nivel l&oacute;gico:";
 choices[36]= new Array();
 choices[36][0] = "Se da una definici&oacute;n de las estructuras de datos que constituyen la base de datos";
 choices[36][1] = "Se elige una implementaci&oacute;n de cada una de las estructuras de datos";
 choices[36][2] = "Se definen vistas parciales de la base de datos para distintos grupos de usuarios";
 choices[36][3] = "Ninguna es cierta";
 answers[36] = 0;
 units[36] = ['60'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2789. ";
 preguntaids[36] = 2789


//  Id pregunta: 2807 Año de creación de pregunta: 2002
 questions[37]= "38)  En el entorno cliente/servidor, TUXEDO es muy conocido como:";
 choices[37]= new Array();
 choices[37][0] = "Un monitor de proceso de transacciones";
 choices[37][1] = "Programa de sesi&oacute;n de IBM en los sistemas MVS";
 choices[37][2] = "Aplicaci&oacute;n para tranferencia de ficheros en sistemas Unix";
 choices[37][3] = "No existe la aplicaci&oacute;n TUXEDO";
 answers[37] = 0;
 units[37] = ['55'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2807. ";
 preguntaids[37] = 2807


//  Id pregunta: 2822 Año de creación de pregunta: 2002
 questions[38]= "39)  En electr&oacute;nica digital, un conjunto de funciones es completo en un &aacute;lgebra de Boole:";
 choices[38]= new Array();
 choices[38][0] = "Si y s&oacute;lo si cualquier forma booleana puede realizarse con dichas funciones.";
 choices[38][1] = "Si un conjunto m&iacute;nimo puede realizarse con dichas funciones.";
 choices[38][2] = "Si y s&oacute;lo si contiene a todas las funciones l&oacute;gicas siguientes AND, OR, NOT, NAND, XOR.";
 choices[38][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[38] = 0;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2822. ";
 preguntaids[38] = 2822


//  Id pregunta: 2812 Año de creación de pregunta: 2002
 questions[39]= "40)  En el modelo cliente/servidor, el funcionamiento de una operaci&oacute;n as&iacute;ncrona consiste en que:";
 choices[39]= new Array();
 choices[39][0] = "El proceso cliente lanza una petici&oacute;n y contin&uacute;a cuando el proceso servidor acusa recibo de la petici&oacute;n";
 choices[39][1] = "El proceso cliente lanza una petici&oacute;n y contin&uacute;a, esperando respuesta afirmativa o negativa a su petici&oacute;n";
 choices[39][2] = "El proceso cliente espera hasta que el proceso servidor ha cumplimentado la petici&oacute;n";
 choices[39][3] = "Las operaciones as&iacute;ncronas no son utilizables en este modelo";
 answers[39] = 1;
 units[39] = ['55'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2812. ";
 preguntaids[39] = 2812


//  Id pregunta: 2772 Año de creación de pregunta: 2002
 questions[40]= "41)  El modelo de referencia ANSI para SGBD, en cuanto a la definici&oacute;n de los datos:";
 choices[40]= new Array();
 choices[40][0] = "Crea cuatro tipos de esquemas: conceptual, l&oacute;gico, f&iacute;sico, de implementaci&oacute;n";
 choices[40][1] = "Establece la estrecha dependencia que debe existir entre los datos y las aplicaciones";
 choices[40][2] = "Define cinco niveles de interpretaci&oacute;n de los mismos, seg&uacute;n cinco aspectos: visualizaci&oacute;n, cardinalidad, muestreo, distancia y flexibilidad";
 choices[40][3] = "Establece los Metadatos (datos sobre los datos) que se almacenan en el Diccionario de Datos";
 answers[40] = 3;
 units[40] = ['60'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2772. ";
 preguntaids[40] = 2772


//  Id pregunta: 2787 Año de creación de pregunta: 2002
 questions[41]= "42)  El robo de ciclo explica que la duraci&oacute;n de las instrucciones no sea fija en funci&oacute;n de si existen o no robos de ciclo:";
 choices[41]= new Array();
 choices[41][0] = "En todo caso es falso";
 choices[41][1] = "Siempre es cierto";
 choices[41][2] = "Depende de la carga de trabajo de la CPU";
 choices[41][3] = "Depende del 'throughput'";
 answers[41] = 1;
 units[41] = ['56'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2787. ";
 preguntaids[41] = 2787


//  Id pregunta: 2784 Año de creación de pregunta: 2002
 questions[42]= "43)  El protocolo MESI:";
 choices[42]= new Array();
 choices[42][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM";
 choices[42][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP";
 choices[42][2] = "Controla las colisiones en redes Token Ring";
 choices[42][3] = "Controla la coherencia cache en algunos procesadores";
 answers[42] = 3;
 units[42] = ['56'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2784. ";
 preguntaids[42] = 2784


//  Id pregunta: 2816 Año de creación de pregunta: 2002
 questions[43]= "44)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?:";
 choices[43]= new Array();
 choices[43][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica";
 choices[43][1] = "Que todo atributo que represente una relaci&oacute;n, o bien sea nulo, o bien exista en la clave primaria del elemento relacionado";
 choices[43][2] = "Que todo conjunto de operaciones que constituya una unidad, o bien progrese en conjunto, bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[43][3] = "Que se pueda referenciar la totalidad de la base de datos";
 answers[43] = 1;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2816. ";
 preguntaids[43] = 2816


//  Id pregunta: 2791 Año de creación de pregunta: 2002
 questions[44]= "45)  El sistema operativo Linux puede ejecutarse en muchas plataformas diferentes. Esto se debe a:";
 choices[44]= new Array();
 choices[44][0] = "El uso de una m&aacute;quina virtual que encapsula el sistema operativo, abstrayendolo de las peculiaridades del hardware subyacente";
 choices[44][1] = "El uso de una aquitectura microkernel que permite una portabilidad sin precedentes";
 choices[44][2] = "Simplemente el sistema se vuelve a compilar cada vez que se cambia de plataforma";
 choices[44][3] = "La difusi&oacute;n del juego de instrucciones x86, para el que existe soporte en gran cantidad de sistemas";
 answers[44] = 2;
 units[44] = ['57'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2791. ";
 preguntaids[44] = 2791


//  Id pregunta: 2794 Año de creación de pregunta: 2002
 questions[45]= "46)  El test de rachas utilizado en criptograf&iacute;a se basa en:";
 choices[45]= new Array();
 choices[45][0] = "El an&aacute;lisis de la independencia de los elementos de un criptograma";
 choices[45][1] = "La b&uacute;squeda de las posibles dependencias o recursiones de un criptograma";
 choices[45][2] = "La b&uacute;squeda de independencia entre s&iacute;mbolos de un criptograma";
 choices[45][3] = "El an&aacute;lisis de la dependencia entre s&iacute;mbolos de un criptograma";
 answers[45] = 0;
 units[45] = ['76'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2794. ";
 preguntaids[45] = 2794


//  Id pregunta: 2814 Año de creación de pregunta: 2002
 questions[46]= "47)  En el modelo de referencia ANSI/SPARC, el nivel conceptual:";
 choices[46]= new Array();
 choices[46][0] = "Se obtiene conceptualizando los datos f&iacute;sicos";
 choices[46][1] = "Es una representaci&oacute;n abstracta de la base de datos, com&uacute;n para todos los usuarios";
 choices[46][2] = "Conceptualiza y abstrae las vistas del nivel externo";
 choices[46][3] = "Es una representaci&oacute;n abstracta de la base de datos, diferente para cada usuario";
 answers[46] = 1;
 units[46] = ['60'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2814. ";
 preguntaids[46] = 2814


//  Id pregunta: 2762 Año de creación de pregunta: 2002
 questions[47]= "48)  Entre los componentes de un sistema inform&aacute;tico:";
 choices[47]= new Array();
 choices[47][0] = "Dentro del subsistema l&oacute;gico, el software de tiempo real se considera software de base";
 choices[47][1] = "Los montadores/cargadores unen un programa compilado en c&oacute;digo objeto con subrutinas del sistema y del usuario";
 choices[47][2] = "La arquitectura distribuida se divide en SISD, SIMD, MISD, MIMD";
 choices[47][3] = "Overlap o solapamiento es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 answers[47] = 1;
 units[47] = ['56'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2762. ";
 preguntaids[47] = 2762


//  Id pregunta: 2829 Año de creación de pregunta: 2002
 questions[48]= "49)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados a continuaci&oacute;n no corresponde a dicha arquitectura:";
 choices[48]= new Array();
 choices[48][0] = "Esquema externo";
 choices[48][1] = "Esquema legal";
 choices[48][2] = "Esquema conceptual";
 choices[48][3] = "Esquema interno";
 answers[48] = 1;
 units[48] = ['60'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2829. ";
 preguntaids[48] = 2829


//  Id pregunta: 2817 Año de creación de pregunta: 2002
 questions[49]= "50)  En el proceso de cifrado basado en el m&eacute;todo DES de criptosistema sim&eacute;trico, en el cu&aacute;l existen n nodos de intercambio de mensajes, &iquest;cu&aacute;ntas claves debe gestionar cada uno de los nodos para comunicarse con el resto?:";
 choices[49]= new Array();
 choices[49][0] = "n";
 choices[49][1] = "n + 1";
 choices[49][2] = "n!";
 choices[49][3] = "Ninguna de las anteriores contestaciones es cierta";
 answers[49] = 3;
 units[49] = ['76'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2817. ";
 preguntaids[49] = 2817


//  Id pregunta: 2797 Año de creación de pregunta: 2002
 questions[50]= "51)  Elija el tipo de relaciones entre registros que el modelo en red es incapaz de mostrar:";
 choices[50]= new Array();
 choices[50][0] = "1 a 1";
 choices[50][1] = "1 a N";
 choices[50][2] = "N a M";
 choices[50][3] = "Es capaz de mostrar todas";
 answers[50] = 3;
 units[50] = ['60'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2797. ";
 preguntaids[50] = 2797


//  Id pregunta: 2759 Año de creación de pregunta: 2002
 questions[51]= "52)  El lenguaje COBOL:";
 choices[51]= new Array();
 choices[51][0] = "Es un lenguaje de programaci&oacute;n que no cuenta con ninguna variedad para el sistema operativo UNIX";
 choices[51][1] = "Es un lenguaje de programaci&oacute;n desarrollado por CODASYL a principios de los a&ntilde;os 60";
 choices[51][2] = "Es un lenguaje de programaci&oacute;n desarrollado por CODASYL a principios de los a&ntilde;os 70";
 choices[51][3] = "Es un lenguaje de programaci&oacute;n que dej&oacute; de utilizarse por incompatibilidad con el efecto 2000";
 answers[51] = 1;
 units[51] = ['56'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2759. ";
 preguntaids[51] = 2759


//  Id pregunta: 2796 Año de creación de pregunta: 2002
 questions[52]= "53)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[52]= new Array();
 choices[52][0] = "Desarrollo de aplicaciones multiusuario";
 choices[52][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[52][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[52][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[52] = 1;
 units[52] = ['72'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2796. ";
 preguntaids[52] = 2796


//  Id pregunta: 2805 Año de creación de pregunta: 2002
 questions[53]= "54)  En el campo de la representaci&oacute;n del conocimiento simb&oacute;lico:";
 choices[53]= new Array();
 choices[53][0] = "La unidad b&aacute;sica funcional de una red sem&aacute;ntica es el 'objeto' que formaliza la representaci&oacute;n de un concepto";
 choices[53][1] = "Un marco es una descripci&oacute;n de un objeto, que contiene ranuras (slots) para todas las informaciones asociadas con el objeto";
 choices[53][2] = "Las reglas deductivas son una manera de representar al conocimiento de tipo procedimental";
 choices[53][3] = "Una restricci&oacute;n expresa es una relaci&oacute;n de equilibrio entre los predicados de uno o m&aacute;s objetos";
 answers[53] = 1;
 units[53] = ['68'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2805. ";
 preguntaids[53] = 2805


//  Id pregunta: 2776 Año de creación de pregunta: 2002
 questions[54]= "55)  El objetivo del aprendizaje no supervisado en miner&iacute;a de datos basado en modelado consiste en:";
 choices[54]= new Array();
 choices[54][0] = "Asignar nuevas situaciones a clases a partir de ejemplos existentes.";
 choices[54][1] = "Determinar el comportamiento futuro a partir de datos hist&oacute;ricos.";
 choices[54][2] = "Establecer grupos de parecidos.";
 choices[54][3] = "Descubren patrones y tendencias en los datos.";
 answers[54] = 3;
 units[54] = ['72'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2776. ";
 preguntaids[54] = 2776


//  Id pregunta: 2815 Año de creación de pregunta: 2002
 questions[55]= "56)  En el Modelo de Referencia para la estandarizaci&oacute;n de los Sistemas de Gesti&oacute;n de Bases de Datos, basado en la arquitectura de tres niveles de ANSI, las funciones de insertar y borrar se realizan mediante:";
 choices[55]= new Array();
 choices[55][0] = "El esquema interno";
 choices[55][1] = "El diccionario central de datos";
 choices[55][2] = "El lenguaje de definici&oacute;n de datos";
 choices[55][3] = "El lenguaje de manipulaci&oacute;n de datos";
 answers[55] = 3;
 units[55] = ['60'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2815. ";
 preguntaids[55] = 2815


//  Id pregunta: 2775 Año de creación de pregunta: 2002
 questions[56]= "57)  El nombre del lenguaje Ada se debe a:";
 choices[56]= new Array();
 choices[56][0] = "Advanced Development of Algorithms";
 choices[56][1] = "Automatic Development and Adaptation of software";
 choices[56][2] = "Adaptative Digital Algorithms";
 choices[56][3] = "Es un homenaje a Ada Augusta Byron, considerada la primera programadora de la historia, que contribuy&oacute; econ&oacute;micamente y laboralmente al desarrollo de las primeras m&aacute;quinas diferenciales";
 answers[56] = 3;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2775. ";
 preguntaids[56] = 2775


//  Id pregunta: 2826 Año de creación de pregunta: 2002
 questions[57]= "58)  En Java, cuando un programa deja de utilizar un objeto:";
 choices[57]= new Array();
 choices[57][0] = "El &quot;garbage collector&quot; lo elimina inmediatamente de la memoria";
 choices[57][1] = "Es necesario codificar la destrucci&oacute;n del objeto";
 choices[57][2] = "El objeto se destruye a s&iacute; mismo";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 3;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2826. El objeto puede eliminarse cuando no hay referencias a &eacute;l.";
 preguntaids[57] = 2826


//  Id pregunta: 2795 Año de creación de pregunta: 2002
 questions[58]= "59)  El tiempo de latencia en un disco:";
 choices[58]= new Array();
 choices[58][0] = "Tiempo medio necesario para que la informaci&oacute;n pase por debajo de la cabeza de lectura-escritura cuando est&aacute; posicionada sobre la pista adecuada";
 choices[58][1] = "Corresponde al tiempo empleado para realizar la mitad del giro";
 choices[58][2] = "Es equivalente al tiempo de espera";
 choices[58][3] = "Todas las respuestas anteriores son ciertas";
 answers[58] = 3;
 units[58] = ['53'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2795. ";
 preguntaids[58] = 2795


//  Id pregunta: 2798 Año de creación de pregunta: 2002
 questions[59]= "60)  Elija la respuesta falsa respecto de OLAP.";
 choices[59]= new Array();
 choices[59][0] = "Implica el uso de t&eacute;cnicas multidimensionales.";
 choices[59][1] = "Realiza el an&aacute;lisis Offline de los datos.";
 choices[59][2] = "Puede utilizar bases de datos relacionales.";
 choices[59][3] = "Puede presentar vistas de los datos en un numero reducido de dimensiones.";
 answers[59] = 1;
 units[59] = ['72'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2798. ";
 preguntaids[59] = 2798


//  Id pregunta: 2760 Año de creación de pregunta: 2002
 questions[60]= "61)  El lenguaje Visual Basic, y la arquitectura DNA de Microsoft permiten arquitecturas Cliente/Servidor:";
 choices[60]= new Array();
 choices[60][0] = "De 2 niveles";
 choices[60][1] = "De N niveles";
 choices[60][2] = "Solo con clientes Microsoft";
 choices[60][3] = "B y C son ciertas";
 answers[60] = 1;
 units[60] = ['55'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2760. ";
 preguntaids[60] = 2760


//  Id pregunta: 2800 Año de creación de pregunta: 2002
 questions[61]= "62)  Elija la respuesta falsa. Un cluster de PCs con Linux, utiliza:";
 choices[61]= new Array();
 choices[61][0] = "MPI, como librer&iacute;a para paso de mensajes";
 choices[61][1] = "Tecnolog&iacute;a NUMA entre todas las m&aacute;quinas";
 choices[61][2] = "Redes de alta velocidad, como Myrinet, O Gigabit ethernet";
 choices[61][3] = "Todas son v&aacute;lidas";
 answers[61] = 1;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2800. ";
 preguntaids[61] = 2800


//  Id pregunta: 2827 Año de creación de pregunta: 2002
 questions[62]= "63)  En Java:";
 choices[62]= new Array();
 choices[62][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[62][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[62][2] = "Los programas son aplicaciones web de servidor";
 choices[62][3] = "Todas las anteriores respuestas son ciertas";
 answers[62] = 3;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2827. ";
 preguntaids[62] = 2827


//  Id pregunta: 2809 Año de creación de pregunta: 2002
 questions[63]= "64)  En el lenguaje de consulta en BBDD relacionales, se usan los t&eacute;rminos tabla, fila y columna para:";
 choices[63]= new Array();
 choices[63][0] = "Tupla, relaci&oacute;n y atributo, respectivamente";
 choices[63][1] = "Relaci&oacute;n, tupla y atributo, respectivamente";
 choices[63][2] = "Relaci&oacute;n, atributo y tupla, respectivamente";
 choices[63][3] = "Tupla, atributo y relaci&oacute;n, respectivamente";
 answers[63] = 1;
 units[63] = ['61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2809. ";
 preguntaids[63] = 2809


//  Id pregunta: 2782 Año de creación de pregunta: 2002
 questions[64]= "65)  El programa del sistema operativo cuya misi&oacute;n es resolver las referencias externas de uno o varios m&oacute;dulos objeto y formar una unidad ejecutable se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Coordinador";
 choices[64][1] = "Montador";
 choices[64][2] = "Cargador";
 choices[64][3] = "Editor";
 answers[64] = 1;
 units[64] = ['56'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2782. ";
 preguntaids[64] = 2782


//  Id pregunta: 2764 Año de creación de pregunta: 2002
 questions[65]= "66)  Existen diversos tipos de modelos de datos convencionales:";
 choices[65]= new Array();
 choices[65][0] = "El modelo jer&aacute;rquico es m&aacute;s flexible que el de red o reticular";
 choices[65][1] = "El modelo relacional se basa en el &aacute;lgebra y c&aacute;lculo relacional";
 choices[65][2] = "Cronol&oacute;gicamente el modelo de red o reticular es anterior al jer&aacute;rquico";
 choices[65][3] = "En el modelo relacional se exige que el usuario conozca las vinculaciones entre entidades";
 answers[65] = 1;
 units[65] = ['60'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2764. ";
 preguntaids[65] = 2764


//  Id pregunta: 2754 Año de creación de pregunta: 2002
 questions[66]= "67)  El ganador del concurso p&uacute;blico para reemplazar al algoritmo DES es:";
 choices[66]= new Array();
 choices[66][0] = "RC6";
 choices[66][1] = "Twofish";
 choices[66][2] = "Serpent";
 choices[66][3] = "Rijndael";
 answers[66] = 3;
 units[66] = ['76'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2754. ";
 preguntaids[66] = 2754


//  Id pregunta: 2828 Año de creación de pregunta: 2002
 questions[67]= "68)  En Java, al declarar una variable de tipo array";
 choices[67]= new Array();
 choices[67][0] = "No es necesario indicar la longitud del objeto";
 choices[67][1] = "Es necesario indicar la longitud m&aacute;xima del objeto";
 choices[67][2] = "Es necesario indicar la longitud exacta del objeto";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = 0;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2828. Solo se debe indicar la long max de cada dimensi&oacute;n del array si no se asigna en ese momento.";
 preguntaids[67] = 2828


//  Id pregunta: 2820 Año de creación de pregunta: 2002
 questions[68]= "69)  En el subsistema de almacenamiento de un ordenador, se define punto de memoria como:";
 choices[68]= new Array();
 choices[68][0] = "El elemento que almacena un bit";
 choices[68][1] = "El elemento que almacena una palabra";
 choices[68][2] = "El elemento que almacena un byte";
 choices[68][3] = "El elemento que almacena una unidad de datos l&oacute;gicos";
 answers[68] = 0;
 units[68] = ['51'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2820. ";
 preguntaids[68] = 2820


//  Id pregunta: 2824 Año de creación de pregunta: 2002
 questions[69]= "70)  En inteligencia artificial:";
 choices[69]= new Array();
 choices[69][0] = "Los primeros trabajos se centraron en m&eacute;todos de b&uacute;squeda heur&iacute;stica y m&eacute;todos de deducci&oacute;n autom&aacute;tica";
 choices[69][1] = "La rob&oacute;tica no secuencializa las tareas (planificaci&oacute;n) para conseguir pasar de un estado actual a un estado objetivo";
 choices[69][2] = "La representaci&oacute;n del conocimiento pertenece al campo de los Sistemas de Gesti&oacute;n de Bases de Datos, pero no al de la inteligencia artificial";
 choices[69][3] = "Los m&eacute;todos heur&iacute;sticos buscan una formulaci&oacute;n te&oacute;rica para la representaci&oacute;n del conocimiento";
 answers[69] = 0;
 units[69] = ['67'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2824. ";
 preguntaids[69] = 2824


//  Id pregunta: 2806 Año de creación de pregunta: 2002
 questions[70]= "71)  En el editor vi de Unix para escribir el fichero que se est&aacute; editando y salir se utiliza el comando:";
 choices[70]= new Array();
 choices[70][0] = "ww";
 choices[70][1] = ":x";
 choices[70][2] = "Ctrl + w (presionar simult&aacute;neamente la tecla Control y la w)";
 choices[70][3] = "F10 (la tecla de funci&oacute;n F10)";
 answers[70] = 1;
 units[70] = ['57'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2806. Tambi&eacute;n se puede utilizar :wq";
 preguntaids[70] = 2806


//  Id pregunta: 2813 Año de creación de pregunta: 2002
 questions[71]= "72)  En el modelo cliente/servidor:";
 choices[71]= new Array();
 choices[71][0] = "Pueden elegirse distintos lenguajes de programaci&oacute;n para cada una de las partes";
 choices[71][1] = "Debe utilizarse siempre SQL para los procesos de tratamiento de datos";
 choices[71][2] = "El lenguaje para la parte cliente, debe permitir caracter&iacute;sticas de orientaci&oacute;n al objeto";
 choices[71][3] = "El lenguaje en el que se programen los procesos a ejecutarse en el cliente determina el que se debe utilizar para programar los procesos de los servidores";
 answers[71] = 0;
 units[71] = ['55'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2813. ";
 preguntaids[71] = 2813


//  Id pregunta: 2803 Año de creación de pregunta: 2002
 questions[72]= "73)  En el &aacute;mbito de las estructuras de datos, las siglas VSAM significan:";
 choices[72]= new Array();
 choices[72][0] = "Virtual Storage Access Method";
 choices[72][1] = "Verification System Access Method";
 choices[72][2] = "Very Short Access Method";
 choices[72][3] = "Valued Storage Archival Method";
 answers[72] = 0;
 units[72] = ['53'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2803. ";
 preguntaids[72] = 2803


//  Id pregunta: 2821 Año de creación de pregunta: 2002
 questions[73]= "74)  En el subsistema de E/S, &iquest;qu&eacute; diferencia a una 'operaci&oacute;n de entrada/salida' de una 'transferencia elemental'?:";
 choices[73]= new Array();
 choices[73][0] = "La primera transfiere uno o varios bloques de datos y la segunda s&oacute;lo mueve un dato o una palabra de control";
 choices[73][1] = "La primera no comprueba el estado del perif&eacute;rico y la segunda s&iacute; lo hace";
 choices[73][2] = "La primera se realiza por hardware y la segunda por software";
 choices[73][3] = "La primera sincroniza la UCP y el controlador del perif&eacute;rico mediante se&ntilde;ales el&eacute;ctricas, y la segunda no lo hace";
 answers[73] = 0;
 units[73] = ['56'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2821. ";
 preguntaids[73] = 2821


//  Id pregunta: 2788 Año de creación de pregunta: 2002
 questions[74]= "75)  El servicio de seguridad que garantiza que la informaci&oacute;n no ha sido mutilada o alterada de manera no autorizada se denomina:";
 choices[74]= new Array();
 choices[74][0] = "Autentificaci&oacute;n";
 choices[74][1] = "Confidencialidad";
 choices[74][2] = "Integridad";
 choices[74][3] = "No repudio";
 answers[74] = 2;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2788. ";
 preguntaids[74] = 2788


