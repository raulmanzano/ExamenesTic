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
//  Id pregunta: 7362 Año de creación de pregunta: 2010
 questions[0]= "1)  Seleccione la afirmaci&oacute;n cierta respecto al Sistema Operativo UNIX";
 choices[0]= new Array();
 choices[0][0] = "UNIX no permite la comunicaci&oacute;n entre procesos";
 choices[0][1] = "loctl es un comando que permite crear un fichero";
 choices[0][2] = "Las normas POSIX definen la forma de organizar la memoria";
 choices[0][3] = "Cada fichero lleva asociada una estructura llamada nodo-i (inode)";
 answers[0] = 3;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7362. Examen TIC B 2009";
 preguntaids[0] = 7362


//  Id pregunta: 8050 Año de creación de pregunta: 2011
 questions[1]= "2)  Si en un sistema UNIX, se quiere que el archivo test.txt pueda ser le&iacute;do, modificado (escrito) y ejecutado por su propietario, le&iacute;do y ejecutado por los usuarios que pertenecen al mismo grupo que el propietario, y tan s&oacute;lo le&iacute;do por el resto, &iquest;qu&eacute; instrucci&oacute;n de las siguientes se debe ejecutar?";
 choices[1]= new Array();
 choices[1][0] = "chmod 652 test.txt";
 choices[1][1] = "chmod 754 test.txt";
 choices[1][2] = "chmod 654 test.txt";
 choices[1][3] = "chmod 752 test.txt";
 answers[1] = 1;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8050. Examen TIC A2 2010";
 preguntaids[1] = 8050


//  Id pregunta: 8292 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes comandos se utilizan para crear un cd boot de una instalaci&oacute;n de Linux?";
 choices[2]= new Array();
 choices[2][0] = "mkboot disk.";
 choices[2][1] = "bootfp disk.";
 choices[2][2] = "ww and rawrite.";
 choices[2][3] = "dd and rawrite.";
 answers[2] = 3;
 units[2] = ['57'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8292. Examen UPM A2 2011";
 preguntaids[2] = 8292


//  Id pregunta: 7365 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[3]= new Array();
 choices[3][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[3][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios";
 choices[3][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[3][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[3] = 1;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7365. Examen TIC B 2009";
 preguntaids[3] = 7365


//  Id pregunta: 7533 Año de creación de pregunta: 2010
 questions[4]= "5)  Dentro del kernel de Unix, el n&uacute;cleo dependiente:";
 choices[4]= new Array();
 choices[4][0] = "Controla la ejecuci&oacute;n de procesos.";
 choices[4][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n.";
 choices[4][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos.";
 choices[4][3] = "Se encarga de las interrupciones.";
 answers[4] = 3;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7533. Map 2005";
 preguntaids[4] = 7533


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[5]= "6)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[5]= new Array();
 choices[5][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[5][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[5][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[5][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[5] = 1;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7541. Map 2005";
 preguntaids[5] = 7541


//  Id pregunta: 7627 Año de creación de pregunta: 2010
 questions[6]= "7)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Para representar un fichero de 2 MB:";
 choices[6]= new Array();
 choices[6][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[6][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[6][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[6][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[6] = 2;
 units[6] = ['57'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7627. Map 2006";
 preguntaids[6] = 7627


//  Id pregunta: 6591 Año de creación de pregunta: 2009
 questions[7]= "8)  &iquest;En cu&aacute;l de los siguientes archivos de un sistema GNU/Linux se encuentra la asignaci&oacute;n entre particiones de disco duro y directorios donde son montadas?";
 choices[7]= new Array();
 choices[7][0] = "mountd.conf";
 choices[7][1] = "fstab";
 choices[7][2] = "filesystems";
 choices[7][3] = ".mnt-conf";
 answers[7] = 1;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 6591. ";
 preguntaids[7] = 6591


//  Id pregunta: 7628 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[8]= new Array();
 choices[8][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[8][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[8][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[8][3] = "La arquitectura de componentes de GNOME estaba basada en Bonobo, pero en la actualidad se considera obsoleta";
 answers[8] = 0;
 units[8] = ['57'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7628. Similar a Map 2006";
 preguntaids[8] = 7628


//  Id pregunta: 8311 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Qu&eacute; comando de Unix no tiene que ver con el control de trabajos de ejecuci&oacute;n?";
 choices[9]= new Array();
 choices[9][0] = "jobs";
 choices[9][1] = "fg";
 choices[9][2] = "pg";
 choices[9][3] = "bg";
 answers[9] = 2;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8311. Examen UPM A2 2011";
 preguntaids[9] = 8311


//  Id pregunta: 8684 Año de creación de pregunta: 2013
 questions[10]= "11)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[10]= new Array();
 choices[10][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[10][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[10][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[10][3] = "Todas son correctas.";
 answers[10] = 3;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8684. ";
 preguntaids[10] = 8684


//  Id pregunta: 8101 Año de creación de pregunta: 2011
 questions[11]= "12)  El PID 0 se asigna en Unix/Linux a:";
 choices[11]= new Array();
 choices[11][0] = "Swapper";
 choices[11][1] = "Init";
 choices[11][2] = "Page daemon";
 choices[11][3] = "Load";
 answers[11] = 0;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8101. Analista Ayto. Madrid 2010";
 preguntaids[11] = 8101


//  Id pregunta: 7526 Año de creación de pregunta: 2010
 questions[12]= "13)  En un sistema de ficheros Unix que tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, que adem&aacute;s utiliza direcciones de bloque de 4 bytes, para representar un fichero de 2 MB:";
 choices[12]= new Array();
 choices[12][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[12][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[12][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[12][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[12] = 2;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 7526. Map 2005";
 preguntaids[12] = 7526


//  Id pregunta: 8721 Año de creación de pregunta: 2013
 questions[13]= "14)  Indique la frase correcta sobre la gesti&oacute;n de procesos en los sistemas UNIX:";
 choices[13]= new Array();
 choices[13][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits";
 choices[13][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes";
 choices[13][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[13][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta";
 answers[13] = 1;
 units[13] = ['57'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8721. Examen TICA2-2011";
 preguntaids[13] = 8721


//  Id pregunta: 8995 Año de creación de pregunta: 2014
 questions[14]= "15)  Marcar la respuesta correcta:";
 choices[14]= new Array();
 choices[14][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[14][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[14][2] = "El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[14][3] = "Todas las anteriores son incorrectas";
 answers[14] = 1;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8995. ";
 preguntaids[14] = 8995


//  Id pregunta: 7560 Año de creación de pregunta: 2010
 questions[15]= "16)  En el entorno de la arquitectura GNOME, seleccione la afirmaci&oacute;n correcta en relaci&oacute;n con DII:";
 choices[15]= new Array();
 choices[15][0] = "Es un lenguaje para implementar interfaces CORBA.";
 choices[15][1] = "Es un servicio que ofrece objetos persistentes que representan la informaci&oacute;n IDL de los interfaces disponibles en CORBA.";
 choices[15][2] = "Es un protocolo de comunicaciones de CORBA.";
 choices[15][3] = "Es una interfaz que nos permite la construcci&oacute;n din&aacute;mica de invocaciones para un determinado objeto.";
 answers[15] = 3;
 units[15] = ['57'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7560. Map 2005";
 preguntaids[15] = 7560


//  Id pregunta: 8711 Año de creación de pregunta: 2013
 questions[16]= "17)  Indicad cu&aacute;l de las siguientes versiones NO se corresponde con una distribuci&oacute;n de Linux:";
 choices[16]= new Array();
 choices[16][0] = "Kubuntu.";
 choices[16][1] = "Red Hat";
 choices[16][2] = "Slackware.";
 choices[16][3] = "IRIX.";
 answers[16] = 3;
 units[16] = ['57'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8711. Examen TICA2-2011";
 preguntaids[16] = 8711


//  Id pregunta: 7224 Año de creación de pregunta: 2010
 questions[17]= "18)  GNOME es el acr&oacute;nimo de:";
 choices[17]= new Array();
 choices[17][0] = "GNU Network Object Model Environment";
 choices[17][1] = "General Network Object Model Environment";
 choices[17][2] = "GIMP Network Object Model Environment";
 choices[17][3] = "GNOME Network Object Model Environment";
 answers[17] = 0;
 units[17] = ['57'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7224. ";
 preguntaids[17] = 7224


//  Id pregunta: 8714 Año de creación de pregunta: 2013
 questions[18]= "19)  Si queremos programar la ejecuci&oacute;n del script &quot;/home/user/script.sh&quot; todos los mi&eacute;rcoles y domingos cada 4 horas, la entrada a a&ntilde;adir en el fichero cron ser&iacute;a:";
 choices[18]= new Array();
 choices[18][0] = "0 */4 * * 3,7 /home/user/script.sh";
 choices[18][1] = "* 4 * * 0,3 /home/user/script.sh";
 choices[18][2] = "0 */4 wed,sun * * /home/user/script.sh";
 choices[18][3] = "* */4 * * 3-7 /home/user/script.sh";
 answers[18] = 0;
 units[18] = ['57'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8714. Examen TICA2-2011";
 preguntaids[18] = 8714


//  Id pregunta: 8421 Año de creación de pregunta: 2011
 questions[19]= "20)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[19]= new Array();
 choices[19][0] = "los directorios de trabajo de los usuarios.";
 choices[19][1] = "los sistemas de archivos montados temporalmente.";
 choices[19][2] = "el c&oacute;digo fuente del kernel.";
 choices[19][3] = "los ficheros de los controladores de dispositivos";
 answers[19] = 0;
 units[19] = ['57'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8421. Operador Ayto. Madrid 2010";
 preguntaids[19] = 8421


//  Id pregunta: 8692 Año de creación de pregunta: 2013
 questions[20]= "21)  &iquest;C&oacute;mo divide el software Ubuntu?";
 choices[20]= new Array();
 choices[20][0] = "En secciones llamadas componentes.";
 choices[20][1] = "Los componentes principales son main, restricted, universe, commercial y multiverse.";
 choices[20][2] = "El componente multiverse contiene los paquetes sin soporte debido a que no cumple los requisitos de Software Libre.";
 choices[20][3] = "Todas son correctas.";
 answers[20] = 3;
 units[20] = ['57'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8692. ";
 preguntaids[20] = 8692


//  Id pregunta: 8444 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Para qu&eacute; se utiliza el comando fdisk en Linux?:";
 choices[21]= new Array();
 choices[21][0] = "Para formatear una partici&oacute;n";
 choices[21][1] = "Para formatear un disco completo";
 choices[21][2] = "Para crear una partici&oacute;n";
 choices[21][3] = "Para crear i-nodos";
 answers[21] = 2;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8444. ";
 preguntaids[21] = 8444


//  Id pregunta: 7169 Año de creación de pregunta: 2010
 questions[22]= "23)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por proceso zombi?";
 choices[22]= new Array();
 choices[22][0] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes";
 choices[22][1] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo est&aacute; la espera de que el primer proceso acabe";
 choices[22][2] = "Un proceso que ha completado su ejecuci&oacute;n pero a&uacute;n contin&uacute;a consumiendo recursos";
 choices[22][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita";
 answers[22] = 2;
 units[22] = ['57'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7169. Castilla La Mancha 2009";
 preguntaids[22] = 7169


//  Id pregunta: 8278 Año de creación de pregunta: 2011
 questions[23]= "24)  Una se&ntilde;al en UNIX es un mecanismo de comunicaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Bidireccional";
 choices[23][1] = "S&iacute;ncrono.";
 choices[23][2] = "Entre procesos.";
 choices[23][3] = "En el fichero de cabecera &lt;stdio.h&gt; est&aacute;n definidas todas las se&ntilde;ales, n&uacute;mero y nombre.";
 answers[23] = 2;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8278. Examen TIC A2 2010 interna";
 preguntaids[23] = 8278


//  Id pregunta: 7219 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes propiedades NO se almacena en el i-node de un archivo?";
 choices[24]= new Array();
 choices[24][0] = "Permisos";
 choices[24][1] = "Propietario";
 choices[24][2] = "Grupo";
 choices[24][3] = "Nombre del fichero";
 answers[24] = 3;
 units[24] = ['57'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7219. ";
 preguntaids[24] = 7219


//  Id pregunta: 7214 Año de creación de pregunta: 2010
 questions[25]= "26)  El proyecto POSIX est&aacute; auspiciado por:";
 choices[25]= new Array();
 choices[25][0] = "ISO";
 choices[25][1] = "IEEE";
 choices[25][2] = "GNU";
 choices[25][3] = "Berkley University";
 answers[25] = 1;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7214. ";
 preguntaids[25] = 7214


//  Id pregunta: 6903 Año de creación de pregunta: 2010
 questions[26]= "27)  Linux se genera inspir&aacute;ndose en:";
 choices[26]= new Array();
 choices[26][0] = "Unix y MINIX.";
 choices[26][1] = "Unix y Windows.";
 choices[26][2] = "MINIX y Windows.";
 choices[26][3] = "Unix y OS/360 IBM.";
 answers[26] = 0;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 6903. TIC A 2009";
 preguntaids[26] = 6903


//  Id pregunta: 8519 Año de creación de pregunta: 2011
 questions[27]= "28)  Cu&aacute;l no es una implementaci&oacute;n de Linux";
 choices[27]= new Array();
 choices[27][0] = "Debian";
 choices[27][1] = "Ubuntu";
 choices[27][2] = "Red Hat";
 choices[27][3] = "Mono";
 answers[27] = 3;
 units[27] = ['57'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8519. ";
 preguntaids[27] = 8519


//  Id pregunta: 7217 Año de creación de pregunta: 2010
 questions[28]= "29)  De que tarea NO se encarga el n&uacute;cleo independiente del kernel de UNIX:";
 choices[28]= new Array();
 choices[28][0] = "Interrupciones";
 choices[28][1] = "Ejecuci&oacute;n de procesos";
 choices[28][2] = "Planificar los procesos para su realizaci&oacute;n por la CPU";
 choices[28][3] = "Asignar memoria principal a un proceso en ejecuci&oacute;n";
 answers[28] = 0;
 units[28] = ['57'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7217. ";
 preguntaids[28] = 7217


//  Id pregunta: 7364 Año de creación de pregunta: 2010
 questions[29]= "30)  La copia de seguridad incremental en Linux:";
 choices[29]= new Array();
 choices[29][0] = "Consiste en copiar todos los elementos que han sido modificados desde la &uacute;ltima copia de seguridad completa o incremental";
 choices[29][1] = "Se centra espec&iacute;ficamente en las carpetas y archivos que han sido modificados desde la &uacute;ltima copia de seguridad completa";
 choices[29][2] = "Consiste en crear una copia de seguridad de todas las carpetas y archivos que se deseen copiar";
 choices[29][3] = "Es implementada habitualmente mediante el comando ntbackup";
 answers[29] = 0;
 units[29] = ['57'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7364. Examen TIC B 2009";
 preguntaids[29] = 7364


//  Id pregunta: 8690 Año de creación de pregunta: 2013
 questions[30]= "31)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu tv?";
 choices[30]= new Array();
 choices[30][0] = "No existe.";
 choices[30][1] = "Usa una versi&oacute;n adaptada de la interfaz Unity.";
 choices[30][2] = "Va instalado de serie en la mayor&iacute;a de los tv comerciales.";
 choices[30][3] = "Ninguna es correcta.";
 answers[30] = 1;
 units[30] = ['57'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8690. ";
 preguntaids[30] = 8690


//  Id pregunta: 7215 Año de creación de pregunta: 2010
 questions[31]= "32)  El kernel desarrollado por el proyecto GNU es conocido como:";
 choices[31]= new Array();
 choices[31][0] = "Hurd";
 choices[31][1] = "Linux";
 choices[31][2] = "Emacs";
 choices[31][3] = "Debian";
 answers[31] = 0;
 units[31] = ['57'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7215. ";
 preguntaids[31] = 7215


//  Id pregunta: 8683 Año de creación de pregunta: 2013
 questions[32]= "33)  &iquest;Qu&eacute; es DJL?";
 choices[32]= new Array();
 choices[32][0] = "Un administrador de juegos escrito en Python que permite instalar juegos en Linux.";
 choices[32][1] = "Gestor de juegos que sirve tanto para lanzar los juegos instalados como para instalar juegos desde la red.";
 choices[32][2] = "No existe";
 choices[32][3] = "A) y B) son correctas.";
 answers[32] = 3;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8683. ";
 preguntaids[32] = 8683


//  Id pregunta: 8686 Año de creación de pregunta: 2013
 questions[33]= "34)  &iquest;Qu&eacute; caracter&iacute;sticas tiene shorewall?";
 choices[33]= new Array();
 choices[33][0] = "Es una herramienta de configuraci&oacute;n de gateway/firewall para GNU/Linux";
 choices[33][1] = "Se publicita como &ldquo;iptables&quot; hecho f&aacute;cil";
 choices[33][2] = "Si se quiere configurar el firewall para Ipv6 se debe instalar shorewall6.";
 choices[33][3] = "Todas las anteriores son correctas.";
 answers[33] = 3;
 units[33] = ['57'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8686. ";
 preguntaids[33] = 8686


//  Id pregunta: 6694 Año de creación de pregunta: 2009
 questions[34]= "35)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[34]= new Array();
 choices[34][0] = "ln";
 choices[34][1] = "mkdir";
 choices[34][2] = "ls";
 choices[34][3] = "mv";
 answers[34] = 0;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 6694. ";
 preguntaids[34] = 6694


//  Id pregunta: 7922 Año de creación de pregunta: 2011
 questions[35]= "36)  En relaci&oacute;n con la seguridad en UNIX y particularmente con la auditor&iacute;a del sistema, cu&aacute;l de los siguientes archivos de registro de equipos UNIX se guardan en texto claro, y pueden visualizarse con una orden como cat o similares:";
 choices[35]= new Array();
 choices[35][0] = "syslog, wtmp, lastlog, sulog.";
 choices[35][1] = "syslogd, utmpx, faillog, loginlog.";
 choices[35][2] = "syslog, debug, sulog, loginlog.";
 choices[35][3] = "syslog, btmp, lastlog, loginlog.";
 answers[35] = 2;
 units[35] = ['57'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7922. Examen TIC A1 2010";
 preguntaids[35] = 7922


//  Id pregunta: 7918 Año de creación de pregunta: 2011
 questions[36]= "37)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[36]= new Array();
 choices[36][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[36][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[36][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[36][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[36] = 0;
 units[36] = ['57'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 7918. Examen TIC A1 2010";
 preguntaids[36] = 7918


//  Id pregunta: 6513 Año de creación de pregunta: 2003
 questions[37]= "38)  En UNIX, al primer proceso que se ejecuta (process 0) se le llama:";
 choices[37]= new Array();
 choices[37][0] = "Kernel";
 choices[37][1] = "Swapper";
 choices[37][2] = "Shell";
 choices[37][3] = "Page daemon";
 answers[37] = 1;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 6513. ";
 preguntaids[37] = 6513


//  Id pregunta: 8242 Año de creación de pregunta: 2011
 questions[38]= "39)  El permiso de Unix 500 pemiite:";
 choices[38]= new Array();
 choices[38][0] = "Lectura y escritura para el propietario del archivo";
 choices[38][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[38][2] = "Lectura y escritura para todos los usuarios";
 choices[38][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[38] = 1;
 units[38] = ['57'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8242. Examen UPM A2 2011";
 preguntaids[38] = 8242


//  Id pregunta: 7222 Año de creación de pregunta: 2010
 questions[39]= "40)  NO es una distribuci&oacute;n Linux:";
 choices[39]= new Array();
 choices[39][0] = "Knoppix";
 choices[39][1] = "Suse";
 choices[39][2] = "Memphis";
 choices[39][3] = "Fedora";
 answers[39] = 2;
 units[39] = ['57'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7222. ";
 preguntaids[39] = 7222


//  Id pregunta: 6590 Año de creación de pregunta: 2009
 questions[40]= "41)  Desde un repositorio oficial de SUSE Linux Enterprise Server usted se descarga los archivos binarios de una aplicaci&oacute;n empaquetados del modo est&aacute;ndar de esta distribuci&oacute;n. &iquest;Cu&aacute;l es la extensi&oacute;n del archivo?";
 choices[40]= new Array();
 choices[40][0] = "rpm";
 choices[40][1] = "tar.gz";
 choices[40][2] = "deb";
 choices[40][3] = "tgz";
 answers[40] = 0;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6590. ";
 preguntaids[40] = 6590


//  Id pregunta: 8687 Año de creación de pregunta: 2013
 questions[41]= "42)  &iquest;Qu&eacute; hace ifconfig -a?";
 choices[41]= new Array();
 choices[41][0] = "Instala Ubuntu sobre Windows.";
 choices[41][1] = "Muestra informaci&oacute;n sobre los diversos interfaces de red.";
 choices[41][2] = "Inicia la interfaz de red eth0.";
 choices[41][3] = "Detiene las interfaces de red.";
 answers[41] = 1;
 units[41] = ['57'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8687. ";
 preguntaids[41] = 8687


//  Id pregunta: 8720 Año de creación de pregunta: 2013
 questions[42]= "43)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es:";
 choices[42]= new Array();
 choices[42][0] = "32MB";
 choices[42][1] = "1GB";
 choices[42][2] = "2GB";
 choices[42][3] = "4GB";
 answers[42] = 3;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8720. Examen TICA2-2011";
 preguntaids[42] = 8720


//  Id pregunta: 7363 Año de creación de pregunta: 2010
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de las siguientes distribuciones no se basa en Debian:";
 choices[43]= new Array();
 choices[43][0] = "Ubuntu";
 choices[43][1] = "Knoppix";
 choices[43][2] = "Fedora";
 choices[43][3] = "Guadalinex";
 answers[43] = 2;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7363. Examen TIC B 2009";
 preguntaids[43] = 7363


//  Id pregunta: 8308 Año de creación de pregunta: 2011
 questions[44]= "45)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[44]= new Array();
 choices[44][0] = "Nombre de usuario y shell";
 choices[44][1] = "Contrase&ntilde;a de usuario y home";
 choices[44][2] = "uid y shell";
 choices[44][3] = "gid y home";
 answers[44] = 2;
 units[44] = ['57'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8308. Examen UPM A2 2011";
 preguntaids[44] = 8308


//  Id pregunta: 7551 Año de creación de pregunta: 2010
 questions[45]= "46)  En el sistema operativo UNIX-LINUX, el t&eacute;rmino &laquo;uucp&raquo; hace referencia a:";
 choices[45]= new Array();
 choices[45][0] = "Un programa dise&ntilde;ado para emular terminales ASCII.";
 choices[45][1] = "Un procesador frontal para correo que ofrece caracter&iacute;sticas avanzadas de interfaz de usuario.";
 choices[45][2] = "Un paquete completo de movimiento de datos que puede transferir ficheros ASCII y binarios entre m&aacute;quinas, adem&aacute;s de controlar la ejecuci&oacute;n de &oacute;rdenes sobre una m&aacute;quina remota.";
 choices[45][3] = "Una base de datos que contiene descripciones para secuencias de escape que pueden cambiar el color de la pantalla.";
 answers[45] = 2;
 units[45] = ['57'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7551. Map 2005";
 preguntaids[45] = 7551


//  Id pregunta: 8719 Año de creación de pregunta: 2013
 questions[46]= "47)  En relaci&oacute;n a los sistemas Ubuntu Server, &iquest;qu&eacute; implica una versi&oacute;n LTS?";
 choices[46]= new Array();
 choices[46][0] = "Que es una versi&oacute;n inestable o en fase de desarrollo del kernel.";
 choices[46][1] = "Que es una versi&oacute;n Lite o ligera, especialmente adaptada para tabletas.";
 choices[46][2] = "Que existe soporte para esa versi&oacute;n durante al menos 5 a&ntilde;os desde el lanzamiento.";
 choices[46][3] = "Que existe soporte para esa versi&oacute;n durante al menos 4 a&ntilde;os desde el lanzamiento.";
 answers[46] = 2;
 units[46] = ['57'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8719. Examen TICA2-2011";
 preguntaids[46] = 8719


//  Id pregunta: 7789 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[47]= new Array();
 choices[47][0] = "ln.";
 choices[47][1] = "mkdir.";
 choices[47][2] = "ls.";
 choices[47][3] = "mv.";
 answers[47] = 0;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 7789. ";
 preguntaids[47] = 7789


//  Id pregunta: 6514 Año de creación de pregunta: 2003
 questions[48]= "49)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de sistemas UNIX con las aplicaciones son:";
 choices[48]= new Array();
 choices[48][0] = "OSI";
 choices[48][1] = "ISO";
 choices[48][2] = "POSIX";
 choices[48][3] = "XENIX";
 answers[48] = 2;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6514. ";
 preguntaids[48] = 6514


//  Id pregunta: 8689 Año de creación de pregunta: 2013
 questions[49]= "50)  &iquest;Qu&eacute; es Nemo?";
 choices[49]= new Array();
 choices[49][0] = "Un gestor de archivos.";
 choices[49][1] = "Una aplicaci&oacute;n multimedia para m&oacute;viles.";
 choices[49][2] = "Una suite de ofim&aacute;tica.";
 choices[49][3] = "Un editor de texto.";
 answers[49] = 0;
 units[49] = ['57'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8689. ";
 preguntaids[49] = 8689


//  Id pregunta: 8713 Año de creación de pregunta: 2013
 questions[50]= "51)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[50]= new Array();
 choices[50][0] = "No realiza ninguna acci&oacute;n.";
 choices[50][1] = "Borra la l&iacute;nea anterior.";
 choices[50][2] = "Borra la l&iacute;nea actual";
 choices[50][3] = "Borra la l&iacute;nea posterior.";
 answers[50] = 2;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8713. Examen TICA2-2011";
 preguntaids[50] = 8713


//  Id pregunta: 7220 Año de creación de pregunta: 2010
 questions[51]= "52)  El superusuario administrador de un sistema UNIX se conoce como:";
 choices[51]= new Array();
 choices[51][0] = "admin";
 choices[51][1] = "root";
 choices[51][2] = "superadmin";
 choices[51][3] = "Ninguno de los anteriores";
 answers[51] = 1;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7220. ";
 preguntaids[51] = 7220


//  Id pregunta: 6588 Año de creación de pregunta: 2009
 questions[52]= "53)  &iquest;Qu&eacute; es abiword?";
 choices[52]= new Array();
 choices[52][0] = "Un comando para contar palabras o bytes en archivos de texto.";
 choices[52][1] = "Un procesador de texto";
 choices[52][2] = "Un conversor de formatos multimedia.";
 choices[52][3] = "Un editor de archivos de sonido.";
 answers[52] = 1;
 units[52] = ['57'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6588. ";
 preguntaids[52] = 6588


//  Id pregunta: 7489 Año de creación de pregunta: 2010
 questions[53]= "54)  Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS:";
 choices[53]= new Array();
 choices[53][0] = "Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n.";
 choices[53][1] = "Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros.";
 choices[53][2] = "Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros.";
 choices[53][3] = "Proporciona transparencia de la replicaci&oacute;n.";
 answers[53] = 1;
 units[53] = ['57'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7489. Map 2005";
 preguntaids[53] = 7489


//  Id pregunta: 8053 Año de creación de pregunta: 2011
 questions[54]= "55)  &iquest;Qu&eacute; realiza la sentencia &quot;df -h | grep / unidad/temporal | grep -v grep I wc -l&quot; en el sistema operativo Linux?";
 choices[54]= new Array();
 choices[54][0] = "Cuenta el n&uacute;mero de f&iacute;cheros que se llaman temporal.";
 choices[54][1] = "Lista las unidades extra&iacute;bles del sistema.";
 choices[54][2] = "Cuenta el n&uacute;mero de filesystems que contienen /unidad/temporal en su path de montaje.";
 choices[54][3] = "Cuenta el n&uacute;mero de procesos cuyo nombre contiene /unidad/temporal.";
 answers[54] = 2;
 units[54] = ['57'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8053. Examen TIC A2 2010";
 preguntaids[54] = 8053


//  Id pregunta: 6515 Año de creación de pregunta: 2003
 questions[55]= "56)  En un sistema operativo UNIX queremos que un fichero pueda ser actualizado &uacute;nicamente por su propietario y por los usuarios que pertenecen al mismo grupo que el propietario. Indicar cuales ser&iacute;an los permisos adecuados:";
 choices[55]= new Array();
 choices[55][0] = "755";
 choices[55][1] = "740";
 choices[55][2] = "760";
 choices[55][3] = "777";
 answers[55] = 2;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 6515. ";
 preguntaids[55] = 6515


//  Id pregunta: 8696 Año de creación de pregunta: 2013
 questions[56]= "57)  &iquest;En qu&eacute; se diferencia la API de Windows y Unix en cuanto a filosof&iacute;a?";
 choices[56]= new Array();
 choices[56][0] = "En Unix las funciones de sistema operativo son simples, con pocos par&aacute;metros.";
 choices[56][1] = "Win32 ofrece interfaces muy extensas con muchos par&aacute;metros.";
 choices[56][2] = "En Unix suele haber pocas formas de realizar una operaci&oacute;n, mientras en Win32 hay a menudo 3 o 4 formas de realizar lo mismo.";
 choices[56][3] = "Todas son correctas.";
 answers[56] = 3;
 units[56] = ['57', '58'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8696. ";
 preguntaids[56] = 8696


//  Id pregunta: 7213 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes es un proyecto de estandarizaci&oacute;n de UNIX?";
 choices[57]= new Array();
 choices[57][0] = "GNU";
 choices[57][1] = "GPL";
 choices[57][2] = "POSIX";
 choices[57][3] = "Emacs";
 answers[57] = 2;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7213. ";
 preguntaids[57] = 7213


//  Id pregunta: 7170 Año de creación de pregunta: 2010
 questions[58]= "59)  En un sistema operativo LINUX &iquest;qu&eacute; es un gestor GRUB?";
 choices[58]= new Array();
 choices[58][0] = "Un gestor de creaci&oacute;n y activaci&oacute;n de particiones swap, en el primer sector de la partici&oacute;n de arranque";
 choices[58][1] = "Un gestor que crea un &aacute;rea de swap en memoria RAM";
 choices[58][2] = "Un gestor que activa una partici&oacute;n de swap ya creada";
 choices[58][3] = "Un gestor de arranque multisistema creado por el proyecto GNU";
 answers[58] = 3;
 units[58] = ['57'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7170. Castilla La Mancha 2009";
 preguntaids[58] = 7170


//  Id pregunta: 8688 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[59]= new Array();
 choices[59][0] = "Se orienta al usuario novel y promedio.";
 choices[59][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[59][2] = "Su patrocinador es Canonical.";
 choices[59][3] = "Todas son correctas.";
 answers[59] = 3;
 units[59] = ['57'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8688. ";
 preguntaids[59] = 8688


//  Id pregunta: 7223 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l no es un entorno de escritorio para Linux?";
 choices[60]= new Array();
 choices[60][0] = "KDE";
 choices[60][1] = "GNOME";
 choices[60][2] = "XCFE";
 choices[60][3] = "SUSE";
 answers[60] = 3;
 units[60] = ['57'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7223. ";
 preguntaids[60] = 7223


//  Id pregunta: 7221 Año de creación de pregunta: 2010
 questions[61]= "62)  El comando para cambiar el password de un usuario en UNIX es:";
 choices[61]= new Array();
 choices[61][0] = "passwd";
 choices[61][1] = "pass";
 choices[61][2] = "Red Hot";
 choices[61][3] = "chpass";
 answers[61] = 0;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7221. ";
 preguntaids[61] = 7221


//  Id pregunta: 8467 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Qu&eacute; es procfs en Unix?";
 choices[62]= new Array();
 choices[62][0] = "Un sistema de ficheros especial con informaci&oacute;n sobre procesos y otros recursos del sistema";
 choices[62][1] = "&quot;La versi&oacute;n profesional del sistema de ficheros &quot;&quot;C&quot;&quot; (cfs)&quot;";
 choices[62][2] = "Un comando que devuelve informaci&oacute;n sobre los procesos relacionados con el sistema de ficheros";
 choices[62][3] = "Nada de lo anterior";
 answers[62] = 0;
 units[62] = ['57'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8467. ";
 preguntaids[62] = 8467


//  Id pregunta: 8685 Año de creación de pregunta: 2013
 questions[63]= "64)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[63]= new Array();
 choices[63][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[63][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[63][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[63][3] = "Todas las anteriores son correctas.";
 answers[63] = 0;
 units[63] = ['57'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8685. ";
 preguntaids[63] = 8685


//  Id pregunta: 8691 Año de creación de pregunta: 2013
 questions[64]= "65)  &iquest;Qu&eacute; es main en relaci&oacute;n a Ubuntu?";
 choices[64]= new Array();
 choices[64][0] = "Contiene s&oacute;lo los paquetes que cumplen los requisitos de la licencia de Ubuntu.";
 choices[64][1] = "Contiene los programas soportados por los desarrollores de Ubuntu que no est&aacute;n disponibles bajo ning&uacute;n tipo de licencia libre.";
 choices[64][2] = "Son los programas que no reciben apoyo por parte del equipo de Ubuntu.";
 choices[64][3] = "Son programas comerciales.";
 answers[64] = 0;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8691. ";
 preguntaids[64] = 8691


//  Id pregunta: 8180 Año de creación de pregunta: 2011
 questions[65]= "66)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "chmod 766 ejemplo.txt";
 choices[65][1] = "chmod 751 ejemplo.txt";
 choices[65][2] = "chmod 761 ejemplo.txt";
 choices[65][3] = "chmod 754 ejemplo.txt";
 answers[65] = 3;
 units[65] = ['57'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8180. Examen TIC A2 2010 interna";
 preguntaids[65] = 8180


//  Id pregunta: 8466 Año de creación de pregunta: 2011
 questions[66]= "67)  &iquest;Qu&eacute; es Synaptic en el entorno Linux?";
 choices[66]= new Array();
 choices[66][0] = "Un editor de texto avanzado";
 choices[66][1] = "Un front-end del sistema de gesti&oacute;n de paquetes de software";
 choices[66][2] = "Un sistema de monitorizaci&oacute;n de recursos";
 choices[66][3] = "Un gestor de cuentas de usuario";
 answers[66] = 1;
 units[66] = ['57'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8466. ";
 preguntaids[66] = 8466


//  Id pregunta: 6589 Año de creación de pregunta: 2009
 questions[67]= "68)  &iquest;Cu&aacute;l de estos sistemas de archivos no est&aacute; soportado de forma nativa por el kernel de Linux?";
 choices[67]= new Array();
 choices[67][0] = "ZFS";
 choices[67][1] = "XFS";
 choices[67][2] = "ext4";
 choices[67][3] = "ReiserFS";
 answers[67] = 0;
 units[67] = ['57'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 6589. ZFS es un sistema de archivos desarrollado por Sun para Solaris";
 preguntaids[67] = 6589


//  Id pregunta: 7218 Año de creación de pregunta: 2010
 questions[68]= "69)  En un entorno UNIX/Linux, los procesos no interactivos o de background se denominan:";
 choices[68]= new Array();
 choices[68][0] = "Zombies";
 choices[68][1] = "Swaps";
 choices[68][2] = "Pipes";
 choices[68][3] = "Daemons";
 answers[68] = 3;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7218. ";
 preguntaids[68] = 7218


//  Id pregunta: 8445 Año de creación de pregunta: 2011
 questions[69]= "70)  En el arranque en Linux &iquest;cu&aacute;l de los siguientes procesos se ejecuta en primer lugar?:";
 choices[69]= new Array();
 choices[69][0] = "page daemon";
 choices[69][1] = "swapper";
 choices[69][2] = "init";
 choices[69][3] = "sbin";
 answers[69] = 1;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8445. ";
 preguntaids[69] = 8445


//  Id pregunta: 8994 Año de creación de pregunta: 2014
 questions[70]= "71)  La arquitectura original de Linux es de tipo:";
 choices[70]= new Array();
 choices[70][0] = "Microkernel";
 choices[70][1] = "Monol&iacute;tica";
 choices[70][2] = "Modular";
 choices[70][3] = "H&iacute;brida";
 answers[70] = 1;
 units[70] = ['57'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8994. ";
 preguntaids[70] = 8994


//  Id pregunta: 7216 Año de creación de pregunta: 2010
 questions[71]= "72)  El sistema operativo Ubuntu est&aacute; desarrollado por:";
 choices[71]= new Array();
 choices[71][0] = "Red Hat";
 choices[71][1] = "Novell";
 choices[71][2] = "Canonical";
 choices[71][3] = "MIT";
 answers[71] = 2;
 units[71] = ['57'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 7216. ";
 preguntaids[71] = 7216


//  Id pregunta: 8304 Año de creación de pregunta: 2011
 questions[72]= "73)  Indique cu&aacute;l de las siguientes expresiones mostrar&aacute; el n&uacute;mero de veces que est&aacute; conectado el usuario root:";
 choices[72]= new Array();
 choices[72][0] = "who | grep root | wc -l";
 choices[72][1] = "who root | wc -l";
 choices[72][2] = "who &gt;grep &mdash;v root&gt;wc";
 choices[72][3] = "who &lt;grep -v root&gt;wc";
 answers[72] = 0;
 units[72] = ['57'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8304. Examen UPM A2 2011";
 preguntaids[72] = 8304


//  Id pregunta: 8182 Año de creación de pregunta: 2011
 questions[73]= "74)  En relaci&oacute;n con la administraci&oacute;n de un sistema operativo Linux, indique cu&aacute;l de los siguientes comandos NO est&aacute; destinado a realizar copias de seguridad:";
 choices[73]= new Array();
 choices[73][0] = "tar con los par&aacute;metros cvf";
 choices[73][1] = "tar con los par&aacute;metros tvf";
 choices[73][2] = "cpio en conjunci&oacute;n con el comando ls";
 choices[73][3] = "cpio en conjunci&oacute;n con el comando find";
 answers[73] = 1;
 units[73] = ['57'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8182. Examen TIC A2 2010 interna";
 preguntaids[73] = 8182


//  Id pregunta: 6512 Año de creación de pregunta: 2003
 questions[74]= "75)  En UNIX, un archivo se compone de:";
 choices[74]= new Array();
 choices[74][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[74][1] = "Una secuencia de bytes";
 choices[74][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[74][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[74] = 1;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6512. ";
 preguntaids[74] = 6512


