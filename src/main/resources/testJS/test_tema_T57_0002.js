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
//  Id pregunta: 5560 Año de creación de pregunta: 2009
 questions[0]= "1)  En GNU/Linux se utilizan diversos programas para la gesti&oacute;n de versiones, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[0]= new Array();
 choices[0][0] = "mercurial";
 choices[0][1] = "ksafe";
 choices[0][2] = "git";
 choices[0][3] = "bazaar";
 answers[0] = 1;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 5560. ";
 preguntaids[0] = 5560


//  Id pregunta: 3200 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest; Cu&aacute;l de las siguientes no es una herramienta de copia remota de ficheros ?";
 choices[1]= new Array();
 choices[1][0] = "rcp";
 choices[1][1] = "rsync";
 choices[1][2] = "ftp";
 choices[1][3] = "vtam";
 answers[1] = 3;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3200. ";
 preguntaids[1] = 3200


//  Id pregunta: 4300 Año de creación de pregunta: 2003
 questions[2]= "3)  El tiempo de respuesta en teor&iacute;a de colas es:";
 choices[2]= new Array();
 choices[2][0] = "Tiempo de servicio de un dispositivo para un usuario";
 choices[2][1] = "Tiempo de espera mas tiempo de servicio";
 choices[2][2] = "Tiempo que el usuario espera en la cola atendiendo a otros usuarios hasta que le toca el turno";
 choices[2][3] = "Tiempo en que un dispositivo est&aacute; ocupado en atender al sistema operativo";
 answers[2] = 1;
 units[2] = ['57'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 4300. ";
 preguntaids[2] = 4300


//  Id pregunta: 2881 Año de creación de pregunta: 2002
 questions[3]= "4)  En Unix un proceso puede crear otro proceso Unix si:";
 choices[3]= new Array();
 choices[3][0] = "Tiene privilegios suficientes";
 choices[3][1] = "Tiene mayor prioridad que un determinado umbral";
 choices[3][2] = "Tiene suficientes recursos disponibles";
 choices[3][3] = "No puede";
 answers[3] = 2;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2881. ";
 preguntaids[3] = 2881


//  Id pregunta: 3514 Año de creación de pregunta: 2006
 questions[4]= "5)  Dentro del kernel de Unix, el n&uacute;cleo dependiente";
 choices[4]= new Array();
 choices[4][0] = "Controla la ejecuci&oacute;n de procesos";
 choices[4][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n";
 choices[4][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos";
 choices[4][3] = "Se encarga de las interrupciones";
 answers[4] = 3;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3514. ";
 preguntaids[4] = 3514


//  Id pregunta: 3046 Año de creación de pregunta: 2002
 questions[5]= "6)  Se&ntilde;ale la respuesta falsa respecto de Unix:";
 choices[5]= new Array();
 choices[5][0] = "Se cre&oacute; basandose en MULTICS";
 choices[5][1] = "Est&aacute; escrito en lenguaje C";
 choices[5][2] = "Se us&oacute; primero en la NASA";
 choices[5][3] = "Inicialmente era gratuito";
 answers[5] = 2;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3046. ";
 preguntaids[5] = 3046


//  Id pregunta: 2887 Año de creación de pregunta: 2002
 questions[6]= "7)  GNU:";
 choices[6]= new Array();
 choices[6][0] = "Es un acr&oacute;nimo de 'GNU is Not Unix'";
 choices[6][1] = "Fue fundado en 1984 por Richard M. Stallman para crear un sistema operativo Unix completo, basado en software libre.";
 choices[6][2] = "Es el autor de las licencias de software libre GPL y LGPL";
 choices[6][3] = "Todas son ciertas";
 answers[6] = 3;
 units[6] = ['57'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2887. ";
 preguntaids[6] = 2887


//  Id pregunta: 3005 Año de creación de pregunta: 2002
 questions[7]= "8)  Para Unix un archivo de compone de:";
 choices[7]= new Array();
 choices[7][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[7][1] = "Una secuencia de bytes";
 choices[7][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[7][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[7] = 1;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3005. ";
 preguntaids[7] = 3005


//  Id pregunta: 5509 Año de creación de pregunta: 2007
 questions[8]= "9)  Mayte ha tecleado desde la l&iacute;nea de comandos del shell de su sistema operativo &ldquo;nslookup www.map.es [enter]&rdquo;. Este comando le dar&aacute; como respuesta en su pantalla:";
 choices[8]= new Array();
 choices[8][0] = "La direcci&oacute;n Ethernet del ordenador de Mayte.";
 choices[8][1] = "El tiempo que tarda un paquete de datos desde la m&aacute;quina de Mayte hasta el servidor del MAP.";
 choices[8][2] = "La direcci&oacute;n IP del MAP.";
 choices[8][3] = "La lista de directorios y archivos del directorio ra&iacute;z del MAP";
 answers[8] = 2;
 units[8] = ['57'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 5509. ";
 preguntaids[8] = 5509


//  Id pregunta: 3251 Año de creación de pregunta: 2003
 questions[9]= "10)  En el sistema operativo UNIX los estados en los que puede estar un proceso :";
 choices[9]= new Array();
 choices[9][0] = "Son dos, donde el proceso 0 corresponde al proceso intercambiador";
 choices[9][1] = "Son 8, donde el proceso 0 se denimina init, y es el antecesor de todos los procesos";
 choices[9][2] = "Son 9, entre los que se encuentran los procesos ejecuci&oacute;n en modo de usuario y ejecuci&oacute;n en modo n&uacute;cleo";
 choices[9][3] = "Son 8, entre ellos el proceso cerrado o nonato que significa que est&aacute; aguardando un suceso y tiene que intercambiarse desde la memoria secundaria";
 answers[9] = 2;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3251. ";
 preguntaids[9] = 3251


//  Id pregunta: 5480 Año de creación de pregunta: 2007
 questions[10]= "11)  En el Sistema operativo UN&Iacute;X la expresi&oacute;n que identifica la cuenta del &ldquo;superusuario&rdquo; (que puede llevar a cabo todas las facetas de la administraci&oacute;n de sistemas) es&hellip;";
 choices[10]= new Array();
 choices[10][0] = "Usuario daemon.";
 choices[10][1] = "Usuario adm.";
 choices[10][2] = "Usuario bin.";
 choices[10][3] = "Usuario root.";
 answers[10] = 3;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 5480. ";
 preguntaids[10] = 5480


//  Id pregunta: 2853 Año de creación de pregunta: 2002
 questions[11]= "12)  En sistemas operativos Unix se suele utilizar el editor de texto 'VI', que permite el uso de expresiones regulares. Adem&aacute;s tambien existe un editor de flujo basado en expresiones regulares, que se llama:";
 choices[11]= new Array();
 choices[11][0] = "fvi";
 choices[11][1] = "fred";
 choices[11][2] = "sed";
 choices[11][3] = "xlexp";
 answers[11] = 2;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2853. sed (stream editor) es un editor de flujo, una potente herramienta de tratamiento de texto para el sistema operativoUnix que acepta como entrada un archivo, lo lee y modifica l&iacute;nea a l&iacute;nea de acuerdo a un script, mostrando el resultado por salida est&aacute;ndar (normalmente en pantalla, a menos que se realice una redirecci&oacute;n). Sed permite manipular flujos de datos, como por ejemplo cortar l&iacute;neas, buscar y reemplazar texto (con soporte de expresiones regulares), entre otras cosas";
 preguntaids[11] = 2853


//  Id pregunta: 2868 Año de creación de pregunta: 2002
 questions[12]= "13)  En un sistema operativo Unix System V, &iquest;qu&eacute; tipo de informaci&oacute;n contiene un nodo-i?:";
 choices[12]= new Array();
 choices[12][0] = "Informaci&oacute;n sobre el tama&ntilde;o y nombre del sistema de ficheros";
 choices[12][1] = "Informaci&oacute;n sobre los derechos de acceso al fichero";
 choices[12][2] = "Datos del usuario";
 choices[12][3] = "Informaci&oacute;n sobre los usuarios del fichero";
 answers[12] = 1;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2868. ";
 preguntaids[12] = 2868


//  Id pregunta: 3373 Año de creación de pregunta: 2006
 questions[13]= "14)  El Bourne shell:";
 choices[13]= new Array();
 choices[13][0] = "Est&aacute; basado en el lenguaje C";
 choices[13][1] = "Es posterior al shell de korn";
 choices[13][2] = "No es un shell de Unix s&oacute;lo de Linux";
 choices[13][3] = "Es el shell m&aacute;s antiguo";
 answers[13] = 3;
 units[13] = ['57'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3373. ";
 preguntaids[13] = 3373


//  Id pregunta: 3022 Año de creación de pregunta: 2002
 questions[14]= "15)  SAMBA:";
 choices[14]= new Array();
 choices[14][0] = "Implementa los protocolos de los servidores de archivos Windows";
 choices[14][1] = "Permite que un servidor Unix sea controlador de dominio en una red Windows";
 choices[14][2] = "Permite la compartici&oacute;n de las colas de impresi&oacute;n Unix con Windows y viceversa";
 choices[14][3] = "Todas las anteriores respuestas son ciertas";
 answers[14] = 3;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3022. ";
 preguntaids[14] = 3022


//  Id pregunta: 5841 Año de creación de pregunta: 2009
 questions[15]= "16)  La siguiente instrucci&oacute;n &ldquo;iptables &ndash;L&rdquo; :";
 choices[15]= new Array();
 choices[15][0] = "Habilita el firewall de un equipo basado en iptables.";
 choices[15][1] = "Habilita el interface loopback a traves del firewall iptables.";
 choices[15][2] = "Habilita el paso de paquetes de retorno a trav&eacute;s del firewall iptables.";
 choices[15][3] = "Muestra la lista de reglas del firewall basado en iptables.";
 answers[15] = 3;
 units[15] = ['57', '119'];
 blocks[15] = ['B2', 'B4'];
 comments[15] = "Id Pregunta: 5841. Examen 2006 JCYL";
 preguntaids[15] = 5841


//  Id pregunta: 3002 Año de creación de pregunta: 2002
 questions[16]= "17)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[16]= new Array();
 choices[16][0] = "ldir";
 choices[16][1] = "ls";
 choices[16][2] = "pwd";
 choices[16][3] = "ps";
 answers[16] = 1;
 units[16] = ['56', '57'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3002. ";
 preguntaids[16] = 3002


//  Id pregunta: 5268 Año de creación de pregunta: 2006
 questions[17]= "18)  &iquest;Una BD relacional puede distribuirse en diferentes maquinas?";
 choices[17]= new Array();
 choices[17][0] = "Si";
 choices[17][1] = "Si, pero solo en entorno Linux";
 choices[17][2] = "No";
 choices[17][3] = "No porque se violaria la integridad referencial";
 answers[17] = 0;
 units[17] = ['57'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 5268. ";
 preguntaids[17] = 5268


//  Id pregunta: 3132 Año de creación de pregunta: 2002
 questions[18]= "19)  En un servidor de archivos jer&aacute;rquico cada nodo del &aacute;rbol puede tener:";
 choices[18]= new Array();
 choices[18][0] = "Una etiqueta o un registro de datos, pero no ambos";
 choices[18][1] = "Un registro de datos";
 choices[18][2] = "Una etiqueta, un registro de datos, ambos o ninguno";
 choices[18][3] = "Una etiqueta y un registro de datos obligatoriamente";
 answers[18] = 2;
 units[18] = ['57'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3132. ";
 preguntaids[18] = 3132


//  Id pregunta: 3260 Año de creación de pregunta: 2003
 questions[19]= "20)  En sistema operativo UNIX indicar, entre las siguientes caracter&iacute;sticas cu&aacute;l no corresponde a cualquier sistema de archivo usado: VFS, NFS, etc&hellip;";
 choices[19]= new Array();
 choices[19][0] = "Capacidad de crear y destruir archivos";
 choices[19][1] = "Crecimiento din&aacute;mico de archivos";
 choices[19][2] = "Tratamiento de cualquier dispositivo perof&eacute;rico como archivo";
 choices[19][3] = "Estructura matricial";
 answers[19] = 3;
 units[19] = ['57'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3260. ";
 preguntaids[19] = 3260


//  Id pregunta: 5477 Año de creación de pregunta: 2007
 questions[20]= "21)  Identifique cu&aacute;l de las siguientes alternativas sobre lenguajes de comandos o de control de &oacute;rdenes del Sistema UNIX es correcta:";
 choices[20]= new Array();
 choices[20][0] = "Bourne Shell (desarrollado por AT&amp;T).";
 choices[20][1] = "Korn Shell (desarrollado por Berkeley y Korn).";
 choices[20][2] = "C Shell (desarrollado por AT&amp;T)";
 choices[20][3] = "Korn Shell (desarrollado por Korn).";
 answers[20] = 0;
 units[20] = ['57'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5477. ";
 preguntaids[20] = 5477


//  Id pregunta: 3371 Año de creación de pregunta: 2006
 questions[21]= "22)  El permiso de Unix 500 permite:";
 choices[21]= new Array();
 choices[21][0] = "Lectura y escritura para el propietario del archivo";
 choices[21][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[21][2] = "Lectura y escritura para todos los usuarios";
 choices[21][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[21] = 1;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3371. ";
 preguntaids[21] = 3371


//  Id pregunta: 6009 Año de creación de pregunta: 2003
 questions[22]= "23)  En el UNIX System V, los i-nodos tienen una tabla de direcciones con:";
 choices[22]= new Array();
 choices[22][0] = "11 entradas.";
 choices[22][1] = "12 entradas.";
 choices[22][2] = "13 entradas.";
 choices[22][3] = "14 entradas.";
 answers[22] = 2;
 units[22] = ['57'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6009. TIC B 2007";
 preguntaids[22] = 6009


//  Id pregunta: 2866 Año de creación de pregunta: 2002
 questions[23]= "24)  En un sistema operativo Linux, &iquest;cu&aacute;l es el &uacute;ltimo script que se ejecuta antes de iniciarse el proceso 'login'?:";
 choices[23]= new Array();
 choices[23][0] = "rc.local";
 choices[23][1] = "autoexec.bat";
 choices[23][2] = "rc4";
 choices[23][3] = "prelogin";
 answers[23] = 0;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2866. ";
 preguntaids[23] = 2866


//  Id pregunta: 3367 Año de creación de pregunta: 2006
 questions[24]= "25)  En los sistemas operativos actuales, cada nodo-i dispone de los siguientes apuntadores o &iacute;ndices:";
 choices[24]= new Array();
 choices[24][0] = "12 apuntadores directos, un indirecto simple, un indirecto doble y un indirecto triple";
 choices[24][1] = "10 apuntadores directos, 1 indirecto simle y 1 indirecto doble";
 choices[24][2] = "20 apuntadores directos, uno simple y uno doble";
 choices[24][3] = "todas son falsas";
 answers[24] = 0;
 units[24] = ['57'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3367. ";
 preguntaids[24] = 3367


//  Id pregunta: 2879 Año de creación de pregunta: 2002
 questions[25]= "26)  En Unix el comando  vi  es muy utilizado, sirve para:";
 choices[25]= new Array();
 choices[25][0] = "Listar las primeras 10 l&iacute;neas de un fichero";
 choices[25][1] = "Lista todos los procesos en ejecuci&oacute;n con su estado";
 choices[25][2] = "Es un editor de texto";
 choices[25][3] = "Visualiza la cantidad de memoria libre y el tanto por ciento ocupado del procesador";
 answers[25] = 2;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2879. ";
 preguntaids[25] = 2879


//  Id pregunta: 3374 Año de creación de pregunta: 2006
 questions[26]= "27)  Entre los siguientes, se&ntilde;ale el que no es un sistema de archivos de sistemas operativos de la familia UNIX";
 choices[26]= new Array();
 choices[26][0] = "ZFS";
 choices[26][1] = "XFS";
 choices[26][2] = "CFS";
 choices[26][3] = "NFS";
 answers[26] = 2;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3374. CFS es Cluster File System";
 preguntaids[26] = 3374


//  Id pregunta: 2867 Año de creación de pregunta: 2002
 questions[27]= "28)  En un sistema operativo Linux, el runlevel 6:";
 choices[27]= new Array();
 choices[27][0] = "Pone a la m&aacute;quina en modo multiusuario";
 choices[27][1] = "Pone a la m&aacute;quina en modo monousuario";
 choices[27][2] = "Prepara a la m&aacute;quina para reiniciar";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[27] = 2;
 units[27] = ['57'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2867. ";
 preguntaids[27] = 2867


//  Id pregunta: 3211 Año de creación de pregunta: 2003
 questions[28]= "29)  &iquest; Qu&eacute; escritorio de software libre utiliza CORBA como mecanismo de IPC ?";
 choices[28]= new Array();
 choices[28][0] = "KDE";
 choices[28][1] = "GNOME";
 choices[28][2] = "ambos";
 choices[28][3] = "Ninguno de los 2";
 answers[28] = 1;
 units[28] = ['57'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3211. ";
 preguntaids[28] = 3211


//  Id pregunta: 3512 Año de creación de pregunta: 2006
 questions[29]= "30)  En un sistema de ficheros Unix con un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, con direcciones de bloque de 4 bytes, para representar un fichero de 2 MB";
 choices[29]= new Array();
 choices[29][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[29][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[29][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[29][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[29] = 2;
 units[29] = ['57'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3512. ";
 preguntaids[29] = 3512


//  Id pregunta: 6509 Año de creación de pregunta: 2003
 questions[30]= "31)  En UNIX, los procesos que se ejecutan en background se llaman:";
 choices[30]= new Array();
 choices[30][0] = "DAEMONS";
 choices[30][1] = "SOCKETS";
 choices[30][2] = "BACKGROUND PROCESS";
 choices[30][3] = "En UNIX no se ejecutan procesos en background ya que es un sistema operativo multiusuario";
 answers[30] = 0;
 units[30] = ['57'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 6509. ";
 preguntaids[30] = 6509


//  Id pregunta: 3048 Año de creación de pregunta: 2002
 questions[31]= "32)  Se&ntilde;ale la respuesta falsa. El sistema de ficheros en Unix:";
 choices[31]= new Array();
 choices[31][0] = "Est&aacute; formado por i-nodos";
 choices[31][1] = "Se utiliza para acceder a los perif&eacute;ricos";
 choices[31][2] = "Tiene una estructura no basada en jerarqu&iacute;as";
 choices[31][3] = "Est&aacute; basado en listas enlazadas, con varios niveles de indireccion";
 answers[31] = 2;
 units[31] = ['57'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3048. ";
 preguntaids[31] = 3048


//  Id pregunta: 3276 Año de creación de pregunta: 2003
 questions[32]= "33)  Para cambiar los privilegios de un fichero en UNIX qu&eacute; comando se utiliza";
 choices[32]= new Array();
 choices[32][0] = "pwd";
 choices[32][1] = "chmod";
 choices[32][2] = "rmdir";
 choices[32][3] = "cat";
 answers[32] = 1;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3276. ";
 preguntaids[32] = 3276


//  Id pregunta: 3500 Año de creación de pregunta: 2006
 questions[33]= "34)  El entorno de escritorio KDE:";
 choices[33]= new Array();
 choices[33][0] = "Utiliza como gestor de ventanas uno propio";
 choices[33][1] = "No posee gestor de ventanas propio";
 choices[33][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA";
 choices[33][3] = "No proporciona diferentes configuraciones para distintos idiomas";
 answers[33] = 0;
 units[33] = ['57'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3500. KDE Windows Manager es el gestor de ventanas propio de KDE";
 preguntaids[33] = 3500


//  Id pregunta: 3174 Año de creación de pregunta: 2002
 questions[34]= "35)  Los procesos en UNIX que est&aacute;n en ejecuci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Tienen que residir en memoria";
 choices[34][1] = "Pueden tener p&aacute;ginas en memoria y p&aacute;ginas en disco";
 choices[34][2] = "Tienen que estar en memoria aun cuando no se est&eacute;n ejecutando";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = 1;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3174. ";
 preguntaids[34] = 3174


//  Id pregunta: 5451 Año de creación de pregunta: 2007
 questions[35]= "36)  &iquest;Qu&eacute; s&iacute;mbolo es utilizado para direccionar el resultado de la ejecuci&oacute;n de un comando del sistema operativo Unix sustituyendo el contenido de un fichero?";
 choices[35]= new Array();
 choices[35][0] = "&lt;";
 choices[35][1] = "&gt;";
 choices[35][2] = "&lt;&lt;";
 choices[35][3] = "&gt;&gt;";
 answers[35] = 1;
 units[35] = ['57'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 5451. ";
 preguntaids[35] = 5451


//  Id pregunta: 6048 Año de creación de pregunta: 2003
 questions[36]= "37)  El lenguaje de control de trabajos JCL se utiliza para:";
 choices[36]= new Array();
 choices[36][0] = "Definir las sentencias de control de los procedimientos almacenados en una tabla de base de datos.";
 choices[36][1] = "Definir listas de acceso de usuarios a un sistema de informaci&oacute;n.";
 choices[36][2] = "Indicar al sistema operativo como arrancar un programa por lotes y qu&eacute; recursos va a necesitar.";
 choices[36][3] = "Controlar las excepciones en el lenguaje de programaci&oacute;n Java.";
 answers[36] = 2;
 units[36] = ['57'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 6048. TIC B 2007";
 preguntaids[36] = 6048


//  Id pregunta: 3517 Año de creación de pregunta: 2006
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux";
 choices[37]= new Array();
 choices[37][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel)";
 choices[37][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal";
 choices[37][2] = "Tiene acceso directo a los dispositivos de E/S";
 choices[37][3] = "Acceden directamente al mapa de memoria de otros procesos";
 answers[37] = 1;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3517. ";
 preguntaids[37] = 3517


//  Id pregunta: 6420 Año de creación de pregunta: 2003
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes es un escritorio de Linux?";
 choices[38]= new Array();
 choices[38][0] = "X11";
 choices[38][1] = "Genome";
 choices[38][2] = "KDE";
 choices[38][3] = "Ninguno de ellos";
 answers[38] = 2;
 units[38] = ['57'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6420. ";
 preguntaids[38] = 6420


//  Id pregunta: 5656 Año de creación de pregunta: 2007
 questions[39]= "40)  Metacity";
 choices[39]= new Array();
 choices[39][0] = "Es el gestor de eventos de GNOME 2";
 choices[39][1] = "Es el gestor de ventanas de GNOME 2";
 choices[39][2] = "Es el gestor de eventos de KDE";
 choices[39][3] = "Es el gestor de eventos de MOLINUX";
 answers[39] = 1;
 units[39] = ['57'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 5656. ";
 preguntaids[39] = 5656


//  Id pregunta: 5772 Año de creación de pregunta: 2007
 questions[40]= "41)  Que comando se utiliza para convertir un sistema de ficheros ext2 a ext3 en las ultimas versiones de Suse Linux?";
 choices[40]= new Array();
 choices[40][0] = "tune2fs -c ldev/hdbX";
 choices[40][1] = "tune2fs -j /dev/hdbX";
 choices[40][2] = "make2fs /devlhdbX";
 choices[40][3] = "mount -t ext3 /dev/hdbX /mountpoint";
 answers[40] = 1;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 5772. ";
 preguntaids[40] = 5772


//  Id pregunta: 3383 Año de creación de pregunta: 2006
 questions[41]= "42)  Identifique el t&eacute;rmino que no corresponde a una distribuci&oacute;n de Linux";
 choices[41]= new Array();
 choices[41][0] = "Ubuntu";
 choices[41][1] = "Debian";
 choices[41][2] = "Mandeva";
 choices[41][3] = "Red Hat";
 answers[41] = 2;
 units[41] = ['57'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3383. ";
 preguntaids[41] = 3383


//  Id pregunta: 5481 Año de creación de pregunta: 2007
 questions[42]= "43)  Indique cu&aacute;l de los siguientes t&eacute;rminos no identifica un gestor de arranque del Sistema Operativo";
 choices[42]= new Array();
 choices[42][0] = "NT OS Loader.";
 choices[42][1] = "LILO (Linux Loader)";
 choices[42][2] = "LIUL (Linux Unified Loader).";
 choices[42][3] = "GRUB (Grand Unified Bootloader).";
 answers[42] = 2;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 5481. ";
 preguntaids[42] = 5481


//  Id pregunta: 3324 Año de creación de pregunta: 2004
 questions[43]= "44)  &iquest;Para que se usa el comando &quot;chown&quot; en linux?";
 choices[43]= new Array();
 choices[43][0] = "Para cambiar los permisos sobre un recurso";
 choices[43][1] = "Para cambiar el propietario de un recurso";
 choices[43][2] = "Para cambiar el grupo al que pertenece un recurso";
 choices[43][3] = "Para cambiar la clave de acceso del usuario actual";
 answers[43] = 1;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3324. ";
 preguntaids[43] = 3324


//  Id pregunta: 6186 Año de creación de pregunta: 2003
 questions[44]= "45)  &iquest;En qu&eacute; variable de entorno UNIX se le reporta al servidor de X-Windows la direcci&oacute;n del cliente X donde debe abrir las ventanas?";
 choices[44]= new Array();
 choices[44][0] = "DISPLAY";
 choices[44][1] = "SCREEN";
 choices[44][2] = "XHOST";
 choices[44][3] = "XCLIENT";
 answers[44] = 0;
 units[44] = ['57'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 6186. Examen TIC A Castilla La Mancha 2007";
 preguntaids[44] = 6186


//  Id pregunta: 3130 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[45]= new Array();
 choices[45][0] = "Sun Microsystems";
 choices[45][1] = "OSF (Open Group)";
 choices[45][2] = "Departamento de Defensa de EE.UU.";
 choices[45][3] = "MIT (Massachusets Institute of Technology)";
 answers[45] = 1;
 units[45] = ['57'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3130. ";
 preguntaids[45] = 3130


//  Id pregunta: 3323 Año de creación de pregunta: 2004
 questions[46]= "47)  Indique la opci&oacute;n correcta respecto a un fichero con permisos de acceso 705";
 choices[46]= new Array();
 choices[46][0] = "Permite la lectura y escritura del propietario";
 choices[46][1] = "Permite la escritura del grupo";
 choices[46][2] = "Permite la escritura y ejecuci&oacute;n por parte de cualquier usuario";
 choices[46][3] = "Permite la lectura y escritura de cualquier usuario";
 answers[46] = 0;
 units[46] = ['57'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3323. ";
 preguntaids[46] = 3323


//  Id pregunta: 5618 Año de creación de pregunta: 2007
 questions[47]= "48)  &iquest;Que tipo de informaci&oacute;n contienen los inodos?";
 choices[47]= new Array();
 choices[47][0] = "Contienen los contenidos de los archivos.";
 choices[47][1] = "Contienen informaci&oacute;n acerca del procesos de arranque";
 choices[47][2] = "Contienen informaci&oacute;n referente a cada archivo del sistema de archivos";
 choices[47][3] = "Contienen Ia tabla de caracteres ASCII";
 answers[47] = 2;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 5618. ";
 preguntaids[47] = 5618


//  Id pregunta: 5449 Año de creación de pregunta: 2007
 questions[48]= "49)  Se presentan a continuaci&oacute;n una lista de comandos UNIX, y una lista de funciones. 1) &ldquo;Is&rdquo;. 2) &ldquo;pwd&rdquo;. 3) &ldquo;cat&rdquo;. 4) &ldquo;more&rdquo;. I ) Lista los archivos del directorio activo. II) Muestra en pantalla el contenido de un archivo p&aacute;gina a p&aacute;gina. III) Muestra el camino completo del directorio actual. IV) Imprime en la salida est&aacute;ndar el contenido de un archivo. El orden correcto de emparejamiento entre comandos y funciones es:";
 choices[48]= new Array();
 choices[48][0] = "1-I, 2-II, 3-III y 4-IV.";
 choices[48][1] = "1-I, 2-III, 3-IV y 4-II.";
 choices[48][2] = "1-II, 2-III, 3-IV y 4-IV.";
 choices[48][3] = "1-III, 2-IV, 3-I y 4-II.";
 answers[48] = 1;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 5449. ";
 preguntaids[48] = 5449


//  Id pregunta: 3504 Año de creación de pregunta: 2006
 questions[49]= "50)  Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS";
 choices[49]= new Array();
 choices[49][0] = "Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n";
 choices[49][1] = "Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros";
 choices[49][2] = "Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros";
 choices[49][3] = "Proporciona transparencia de la replicaci&oacute;n";
 answers[49] = 1;
 units[49] = ['57'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3504. ";
 preguntaids[49] = 3504


//  Id pregunta: 6047 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes es un comando de monitorizaci&oacute;n Unix (procesos que se est&aacute;n ejecutando y recursos que se utilizan)?:";
 choices[50]= new Array();
 choices[50][0] = "mount.";
 choices[50][1] = "chmod.";
 choices[50][2] = "top.";
 choices[50][3] = "dd.";
 answers[50] = 2;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6047. TIC B 2007";
 preguntaids[50] = 6047


//  Id pregunta: 3316 Año de creación de pregunta: 2004
 questions[51]= "52)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[51]= new Array();
 choices[51][0] = "Uno de los principios de Unix es &quot;Todo es un archivo&quot;";
 choices[51][1] = "El Sistema Operativo &quot;MULTICS&quot; se caracteriza por la gesti&oacute;n de procesos multiprograma y en tiempo compartido y su arquitectura modular.";
 choices[51][2] = "El Sistema Opreativo Unix se caracteriza, junto con MINIX, por la gesti&oacute;n de procesos multiprogramada y su arquitectura modular.";
 choices[51][3] = "El Sistema Operativo Unix se caracteriza por un sistema de gesti&oacute;n de procesos multiprogramada y en tiempo compartido y por su arquitectura monol&iacute;tica.";
 answers[51] = 3;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3316. MAP-B 2003";
 preguntaids[51] = 3316


//  Id pregunta: 2878 Año de creación de pregunta: 2002
 questions[52]= "53)  En Unix el comando  pwd sirve para:";
 choices[52]= new Array();
 choices[52][0] = "Introducir la contrase&ntilde;a al sistema";
 choices[52][1] = "Saber cu&aacute;l es directorio donde se est&aacute; situado";
 choices[52][2] = "Cambiar nuestra contrase&ntilde;a";
 choices[52][3] = "Saber cu&aacute;l es nuestra impresora asignada";
 answers[52] = 1;
 units[52] = ['57'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2878. ";
 preguntaids[52] = 2878


//  Id pregunta: 2889 Año de creación de pregunta: 2002
 questions[53]= "54)  HURD:";
 choices[53]= new Array();
 choices[53][0] = "Es el sistema operativo GNU por definici&oacute;n";
 choices[53][1] = "Utiliza arquitectura Microkernel";
 choices[53][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[53][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[53] = 2;
 units[53] = ['57'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2889. ";
 preguntaids[53] = 2889


//  Id pregunta: 5527 Año de creación de pregunta: 2007
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n al interfaz hombre-m&aacute;quina en sistemas Unix y Linux:";
 choices[54]= new Array();
 choices[54][0] = "GNOME (GNU Network Object Modelo Environment) est&aacute; totalmente orientado a objetos y al uso de COM+.";
 choices[54][1] = "La implementaci&oacute;n free Xfree86 del entorno de escritorio CDE (Common Desktop Environment) se incluye en la distribuci&oacute;n MacX Server.";
 choices[54][2] = "En X-Windows el modelo es cliente/servidor, basado en un protocolo de red: Xserver, Xclient.";
 choices[54][3] = "KDE (K Desktop Environment) se implementa &uacute;nicamente en sistemas Unix.";
 answers[54] = 2;
 units[54] = ['57'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 5527. ";
 preguntaids[54] = 5527


//  Id pregunta: 2882 Año de creación de pregunta: 2002
 questions[55]= "56)  En Unix, &iquest;qu&eacute; informaci&oacute;n contienen los directorios?:";
 choices[55]= new Array();
 choices[55][0] = "El n&uacute;mero de i-nodo, el nombre del fichero, el uid del propietario, el gid del grupo y los permisos de acceso";
 choices[55][1] = "El n&uacute;mero de i-nodo y el nombre del fichero";
 choices[55][2] = "El nombre del fichero y la direcci&oacute;n del bloque de disco donde comienza el principio de los datos";
 choices[55][3] = "El nombre del fichero y la direcci&oacute;n dentro de la TOC (Table of Contents) del disco donde empieza la concatenaci&oacute;n de asignaci&oacute;n de espacio";
 answers[55] = 1;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2882. ";
 preguntaids[55] = 2882


//  Id pregunta: 3372 Año de creación de pregunta: 2006
 questions[56]= "57)  El comando de Unix 'tee'";
 choices[56]= new Array();
 choices[56][0] = "Muestra el archivo byte a byte incluyendo caracteres no imprimibles";
 choices[56][1] = "Descompone la entrada en 2 flujos de salida, una es la salida est&aacute;ndar y la otra un archivo";
 choices[56][2] = "No existe";
 choices[56][3] = "Busca un patr&oacute;n en uno o m&aacute;s archivos";
 answers[56] = 1;
 units[56] = ['57'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3372. ";
 preguntaids[56] = 3372


//  Id pregunta: 6380 Año de creación de pregunta: 2003
 questions[57]= "58)  El entorno de escritorio GNOME";
 choices[57]= new Array();
 choices[57][0] = "es uno de los entornos m&aacute;s avanzados y completos para Linux";
 choices[57][1] = "usa poco recursos del sistema porque no usa mucho espacio de disco o memoria";
 choices[57][2] = "es el escritorio por defecto de algunas distribuciones como Red Hat y Debian";
 choices[57][3] = "es el GUI elegido por los sistemas UNIX comerciales";
 answers[57] = 2;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6380. Examen 2006 JCYL";
 preguntaids[57] = 6380


//  Id pregunta: 5949 Año de creación de pregunta: 2007
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[58]= new Array();
 choices[58][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux";
 choices[58][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos";
 choices[58][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK";
 choices[58][3] = "La arquitectura actual de componentes de GNOME se denomina Bonobo";
 answers[58] = 0;
 units[58] = ['57'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 5949. ";
 preguntaids[58] = 5949


//  Id pregunta: 6142 Año de creación de pregunta: 2003
 questions[59]= "60)  GNOME es un entorno de escritorio libre para sistemas operativos libres. Seleccione la afirmaci&oacute;n correcta sobre &eacute;l:";
 choices[59]= new Array();
 choices[59][0] = "Ha sido la base sobre la cual se ha desarrollado el c&oacute;digo de la interfaz gr&aacute;fica de Windows VISTA";
 choices[59][1] = "Desde sus or&iacute;genes ha utilizado la biblioteca de controles gr&aacute;ficos GTK";
 choices[59][2] = "Cada vez que se a&ntilde;ade un icono al escritorio requiere que se recompile el Kernel";
 choices[59][3] = "Solamente admite una profundidad de color de 8 bits";
 answers[59] = 1;
 units[59] = ['57'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6142. Examen TIC A1 MAP 2007";
 preguntaids[59] = 6142


//  Id pregunta: 6510 Año de creación de pregunta: 2003
 questions[60]= "61)  En UNIX, el t&eacute;rmino &ldquo;vi&rdquo; se refiere a :";
 choices[60]= new Array();
 choices[60][0] = "Un comando que lista las 20 primeras l&iacute;neas de un fichero";
 choices[60][1] = "Un comando que indica el proceso activo";
 choices[60][2] = "Un editor de texto";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = 2;
 units[60] = ['57'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6510. ";
 preguntaids[60] = 6510


//  Id pregunta: 3206 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest; Cu&aacute;l se utiliza para compartir recursos desde un sistema tipo Unix a equipos Windows utilizando el protocolo SMB ?";
 choices[61]= new Array();
 choices[61][0] = "NFS";
 choices[61][1] = "Samba";
 choices[61][2] = "Cualquiera de los 2 indistintamente";
 choices[61][3] = "Ninguno de los 2";
 answers[61] = 1;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3206. ";
 preguntaids[61] = 3206


//  Id pregunta: 3196 Año de creación de pregunta: 2003
 questions[62]= "63)  El Standard IEEE 1387.2-1995: Software Administration, define el est&aacute;ndar POSIX-7.2:";
 choices[62]= new Array();
 choices[62][0] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas pero no en entornos heterog&eacute;neos.";
 choices[62][1] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas o en entornos heterog&eacute;neos.";
 choices[62][2] = "POSIX (Portable Operating System Interface) es un grupo de interfaces est&aacute;ndares de sistema operativo, y la 7.2 esta dise&ntilde;ada espec&iacute;ficamente para soportar la portabilidad de aplicaciones en c&oacute;digo fuente.";
 choices[62][3] = "Este est&aacute;ndar provee un entorno de computaci&oacute;n en el cual las aplicaciones pueden ser portadas a todos los productos certificados, que pueden ser de distintos proveedores. Contiene est&aacute;ndares para el sistema operativo, protocolos de red, lenguajes de p";
 answers[62] = 1;
 units[62] = ['57'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3196. Junta Andaluc&iacute;a";
 preguntaids[62] = 3196


//  Id pregunta: 2880 Año de creación de pregunta: 2002
 questions[63]= "64)  En Unix la gesti&oacute;n de procesos se realiza:";
 choices[63]= new Array();
 choices[63][0] = "Cuanta m&aacute;s CPU ha consumido un proceso mayor se hace su prioridad, ya que se considera que debe ser uno de los procesos principales del sistema";
 choices[63][1] = "Existe una &uacute;nica cola de procesos. La prioridad se asigna seg&uacute;n el orden de llegada de los mismos";
 choices[63][2] = "El mecanismo de planificaci&oacute;n funciona mediante un timeout que ordena a un driver llamar a una subrutina del kernel cuando ha transcurrido un determinado tiempo";
 choices[63][3] = "El scheduler asigna rodajas de tiempo (time slicers) a los distintos procesos. La duraci&oacute;n de cada rodaja es variable seg&uacute;n la prioridad que tenga asignada el proceso";
 answers[63] = 3;
 units[63] = ['57'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2880. ";
 preguntaids[63] = 2880


//  Id pregunta: 2890 Año de creación de pregunta: 2002
 questions[64]= "65)  Identifique las dos versiones hist&oacute;ricas generadas de Unix al final de los a&ntilde;os 80, motivadas por la coexistencia de dos desarrollos en paralelo:";
 choices[64]= new Array();
 choices[64][0] = "System V y BSD";
 choices[64][1] = "System IV y System V";
 choices[64][2] = "System V y Posix";
 choices[64][3] = "Posix y Motif";
 answers[64] = 0;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2890. ";
 preguntaids[64] = 2890


//  Id pregunta: 5617 Año de creación de pregunta: 2007
 questions[65]= "66)  &iquest;Que es el shell de UNIX?";
 choices[65]= new Array();
 choices[65][0] = "Es el equivalente al escritorio en Windows 2003.";
 choices[65][1] = "Es la unidad m&iacute;nima de informaci&oacute;n que se puede almacenar en un sistema de ficheros UNIX.";
 choices[65][2] = "Es un int&eacute;rprete de comandos.";
 choices[65][3] = "Es un protocolo de comunicaci&oacute;n en red propio de UNIX.";
 answers[65] = 2;
 units[65] = ['57'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 5617. ";
 preguntaids[65] = 5617


//  Id pregunta: 3510 Año de creación de pregunta: 2006
 questions[66]= "67)  En el entorno de escritorio KDE, Kate es:";
 choices[66]= new Array();
 choices[66][0] = "El navegador del escritorio";
 choices[66][1] = "Un generador de informes para la empresa";
 choices[66][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas";
 choices[66][3] = "Un editor de texto";
 answers[66] = 3;
 units[66] = ['57'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3510. ";
 preguntaids[66] = 3510


//  Id pregunta: 3368 Año de creación de pregunta: 2006
 questions[67]= "68)  En los sistemas Unix el superbloque:";
 choices[67]= new Array();
 choices[67][0] = "Contiene informaci&oacute;n para el arranque del sistema";
 choices[67][1] = "Es el bloque 0 en la organizaci&oacute;n de un disco";
 choices[67][2] = "Contiene el n&uacute;mero de i-nodos y el n&uacute;mero de bloques del sistema de archivos";
 choices[67][3] = "Todas son correctas";
 answers[67] = 2;
 units[67] = ['57'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3368. ";
 preguntaids[67] = 3368


//  Id pregunta: 3183 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;Se pueden ejecutar programas MS Windows bajo un entorno Linux?";
 choices[68]= new Array();
 choices[68][0] = "Nunca";
 choices[68][1] = "De forma nativa, linux es compatible binario con MS Windows";
 choices[68][2] = "S&iacute;, a trav&eacute;s de programas espec&iacute;fico para ello";
 choices[68][3] = "S&iacute;, a trav&eacute;s del comando SMB";
 answers[68] = 2;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3183. EXAMEN CASTILLA LA MANCHA";
 preguntaids[68] = 3183


//  Id pregunta: 3108 Año de creación de pregunta: 2002
 questions[69]= "70)  Unix implementa la protecci&oacute;n de ficheros (permisos) a nivel de:";
 choices[69]= new Array();
 choices[69][0] = "Librer&iacute;as del sistema";
 choices[69][1] = "Microkernel";
 choices[69][2] = "Directorios";
 choices[69][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[69] = 2;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3108. ";
 preguntaids[69] = 3108


//  Id pregunta: 6511 Año de creación de pregunta: 2003
 questions[70]= "71)  Indicar cual de las siguientes no es una caracter&iacute;stica de UNIX:";
 choices[70]= new Array();
 choices[70][0] = "Multitarea y multiusuario";
 choices[70][1] = "Int&eacute;rprete de comandos flexible";
 choices[70][2] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 choices[70][3] = "Sistema jer&aacute;rquico de ficheros";
 answers[70] = 2;
 units[70] = ['57'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 6511. ";
 preguntaids[70] = 6511


//  Id pregunta: 3014 Año de creación de pregunta: 2002
 questions[71]= "72)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[71]= new Array();
 choices[71][0] = "Windows no puede ejecutarse bajo Linux";
 choices[71][1] = "Linux no puede ejecutarse bajo Windows";
 choices[71][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[71][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[71] = 3;
 units[71] = ['57', '49', '56'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3014. ";
 preguntaids[71] = 3014


//  Id pregunta: 6365 Año de creación de pregunta: 2003
 questions[72]= "73)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[72]= new Array();
 choices[72][0] = "Esquema externo";
 choices[72][1] = "Esquema legal";
 choices[72][2] = "Esquema conceptual";
 choices[72][3] = "Esquema interno";
 answers[72] = 1;
 units[72] = ['57'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 6365. Examen 2006 JCYL";
 preguntaids[72] = 6365


//  Id pregunta: 3370 Año de creación de pregunta: 2006
 questions[73]= "74)  Las partes del sistema operativo que acceden directamente a los recursos hardware";
 choices[73]= new Array();
 choices[73][0] = "Se ejecutan en modo usuario";
 choices[73][1] = "Se desarrollan por los usuarios";
 choices[73][2] = "Se desarrollan de forma gen&eacute;rica";
 choices[73][3] = "Se ejecutan en modo protegido";
 answers[73] = 3;
 units[73] = ['57'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3370. ";
 preguntaids[73] = 3370


//  Id pregunta: 6379 Año de creación de pregunta: 2003
 questions[74]= "75)  The Bourne-again shell (bash)";
 choices[74]= new Array();
 choices[74][0] = "es conocido como el shell original de UNIX";
 choices[74][1] = "combina buenas caracter&iacute;sticas interactivas con una sintaxis de programaci&oacute;n en shell sencilla";
 choices[74][2] = "no se usa habitualmente, por la dificultad que ofrece su shell m&aacute;s complicado";
 choices[74][3] = "es una extensi&oacute;n mejorada de la original";
 answers[74] = 3;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6379. Examen 2006 JCYL";
 preguntaids[74] = 6379


