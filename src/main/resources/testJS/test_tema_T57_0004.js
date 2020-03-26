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
//  Id pregunta: 9590 Año de creación de pregunta: 2014
 questions[0]= "1)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[0]= new Array();
 choices[0][0] = "true &gt; 2013";
 choices[0][1] = "&gt; 2013";
 choices[0][2] = "cat /dev/null &gt; 2013";
 choices[0][3] = "| &gt; 2013";
 answers[0] = 3;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9590. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[0] = 9590


//  Id pregunta: 10714 Año de creación de pregunta: 2015
 questions[1]= "2)  En el entorno gr&aacute;fico KDE, &iquest;Qu&eacute; aplicaci&oacute;n permite generar informes?";
 choices[1]= new Array();
 choices[1][0] = "Kchart";
 choices[1][1] = "Kugar";
 choices[1][2] = "Kplato";
 choices[1][3] = "Kspread";
 answers[1] = 1;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10714. ";
 preguntaids[1] = 10714


//  Id pregunta: 9118 Año de creación de pregunta: 2014
 questions[2]= "3)  Se&ntilde;ale, entre los siguientes, cu&aacute;l es un cliente WebDAV de l&iacute;nea de comandos para entornos Unix:";
 choices[2]= new Array();
 choices[2][0] = "cadaver";
 choices[2][1] = "audacity";
 choices[2][2] = "mahout";
 choices[2][3] = "CalDAV";
 answers[2] = 0;
 units[2] = ['57'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9118. Examen TIC A2 2013";
 preguntaids[2] = 9118


//  Id pregunta: 9661 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[3]= new Array();
 choices[3][0] = "Kexi.";
 choices[3][1] = "Kivio.";
 choices[3][2] = "Konqueror.";
 choices[3][3] = "Kugar.";
 answers[3] = 3;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9661. Examen TIC A1 2013";
 preguntaids[3] = 9661


//  Id pregunta: 8996 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[4]= new Array();
 choices[4][0] = "Las interrupciones";
 choices[4][1] = "El scheduler";
 choices[4][2] = "Los drivers de los dispositivos";
 choices[4][3] = "a) y c) son correctas";
 answers[4] = 3;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8996. ";
 preguntaids[4] = 8996


//  Id pregunta: 9149 Año de creación de pregunta: 2014
 questions[5]= "6)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra &quot;libro&quot; dentro de ficheros?";
 choices[5]= new Array();
 choices[5][0] = "find -type f | xwygs grep &quot;libro&quot;";
 choices[5][1] = "find -type f | xaygs grep &quot;libro&quot;";
 choices[5][2] = "find -type f | xargs grep &quot;libro&quot;";
 choices[5][3] = "find -type f | xargp grep &quot;libro&quot;";
 answers[5] = 2;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9149. Examen TIC A2 2013";
 preguntaids[5] = 9149


//  Id pregunta: 9023 Año de creación de pregunta: 2014
 questions[6]= "7)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra 'libro' dentro de ficheros?";
 choices[6]= new Array();
 choices[6][0] = "find -type f | xwygs grep 'libro'";
 choices[6][1] = "find -type f | xaygs grep 'libro'";
 choices[6][2] = "find -type f | xargs grep 'libro'";
 choices[6][3] = "find -type f | xargp grep 'libro'";
 answers[6] = 2;
 units[6] = ['57'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9023. Examen TIC A1 2013";
 preguntaids[6] = 9023


//  Id pregunta: 9591 Año de creación de pregunta: 2014
 questions[7]= "8)  Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, &iquest;cu&aacute;l de los siguientes m&eacute;todos podemos usar?";
 choices[7]= new Array();
 choices[7][0] = "Mediante cuotas de disco.";
 choices[7][1] = "Mediante el editor de directivas de grupo.";
 choices[7][2] = "No se puede restringir el almacenamiento a usuarios.";
 choices[7][3] = "No se puede restringir el almacenamiento por grupos.";
 answers[7] = 0;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9591. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[7] = 9591


//  Id pregunta: 10228 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l es una biblioteca de render avanzado de controles de aplicaci&oacute;n en GNOME?";
 choices[8]= new Array();
 choices[8][0] = "Metacity";
 choices[8][1] = "Pango";
 choices[8][2] = "Cairo";
 choices[8][3] = "Gconf";
 answers[8] = 2;
 units[8] = ['57'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10228. ";
 preguntaids[8] = 10228


//  Id pregunta: 9589 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[9]= new Array();
 choices[9][0] = "Los ficheros abiertos.";
 choices[9][1] = "El escritorio.";
 choices[9][2] = "Los procesos.";
 choices[9][3] = "Los puertos TCP/IP.";
 answers[9] = 2;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9589. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[9] = 9589


//  Id pregunta: 10867 Año de creación de pregunta: 2015
 questions[10]= "11)  El comando top de Linux permite:";
 choices[10]= new Array();
 choices[10][0] = "Moverse por una b&uacute;squeda";
 choices[10][1] = "Acceder al directorio inmediatamente inferior";
 choices[10][2] = "Conocer el consumo de CPU de todos los procesos";
 choices[10][3] = "Todas las anteriores son falsas";
 answers[10] = 2;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10867. ";
 preguntaids[10] = 10867


//  Id pregunta: 10330 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes no es una Shell de Linux?";
 choices[11]= new Array();
 choices[11][0] = "Shell X";
 choices[11][1] = "Shell de Korn";
 choices[11][2] = "Shell de Bourne";
 choices[11][3] = "Shell C";
 answers[11] = 0;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10330. ";
 preguntaids[11] = 10330


//  Id pregunta: 9993 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[12]= new Array();
 choices[12][0] = "ext3";
 choices[12][1] = "mini fs";
 choices[12][2] = "ReiserFS";
 choices[12][3] = "Reiser4";
 answers[12] = 1;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9993. Examen TIC A2 2014";
 preguntaids[12] = 9993


//  Id pregunta: 9019 Año de creación de pregunta: 2014
 questions[13]= "14)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix:";
 choices[13]= new Array();
 choices[13][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz";
 choices[13][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario.";
 choices[13][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz.";
 choices[13][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido.";
 answers[13] = 2;
 units[13] = ['57'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9019. Examen TIC A1 2013";
 preguntaids[13] = 9019


//  Id pregunta: 9150 Año de creación de pregunta: 2014
 questions[14]= "15)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[14]= new Array();
 choices[14][0] = "chmod u+s /directorio/fichero";
 choices[14][1] = "chmog g+s /directorio";
 choices[14][2] = "chmod 177 /directorio";
 choices[14][3] = "chmod +t /directorio";
 answers[14] = 3;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9150. Examen TIC A2 2013";
 preguntaids[14] = 9150


//  Id pregunta: 9151 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[15]= new Array();
 choices[15][0] = "Metacity de GNOME.";
 choices[15][1] = "KWIN de KDE.";
 choices[15][2] = "GTK de CDE.";
 choices[15][3] = "Enlightenment de GNOME.";
 answers[15] = 2;
 units[15] = ['57'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9151. Examen TIC A2 2013";
 preguntaids[15] = 9151


//  Id pregunta: 10331 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Qu&eacute; comando de UNIX muestra la ruta al directorio de trabajo?";
 choices[16]= new Array();
 choices[16][0] = "Ls";
 choices[16][1] = "Pwd";
 choices[16][2] = "Tree";
 choices[16][3] = "Cd /home";
 answers[16] = 1;
 units[16] = ['57'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10331. ";
 preguntaids[16] = 10331


//  Id pregunta: 10329 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes versiones del sistema de archivos UNIX fue creada por ATT?";
 choices[17]= new Array();
 choices[17][0] = "Virtual File System";
 choices[17][1] = "Fast File System";
 choices[17][2] = "Network File System";
 choices[17][3] = "Remote File System";
 answers[17] = 2;
 units[17] = ['57'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10329. ";
 preguntaids[17] = 10329


//  Id pregunta: 10868 Año de creación de pregunta: 2015
 questions[18]= "19)  Se&ntilde;ale la falsa con respecto al usuario root del sistema operativo UNIX:";
 choices[18]= new Array();
 choices[18][0] = "Su UID es el 0.";
 choices[18][1] = "Recibe el nombre de superusuario.";
 choices[18][2] = "Puede eliminarse por medio del comando rmuser, con los permisos adecuados.";
 choices[18][3] = "Puede fijar prioridades a los procesos.";
 answers[18] = 2;
 units[18] = ['57'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10868. ";
 preguntaids[18] = 10868


//  Id pregunta: 9021 Año de creación de pregunta: 2014
 questions[19]= "20)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[19]= new Array();
 choices[19][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[19][1] = "Siempre es de corta duraci&oacute;n";
 choices[19][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[19][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[19] = 0;
 units[19] = ['57'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9021. Examen TIC A1 2013";
 preguntaids[19] = 9021


//  Id pregunta: 8997 Año de creación de pregunta: 2014
 questions[20]= "21)  La comunicaci&oacute;n s&iacute;ncrona entre procesos UNIX tiene lugar mediante...";
 choices[20]= new Array();
 choices[20][0] = "Pipes";
 choices[20][1] = "Signals";
 choices[20][2] = "Events";
 choices[20][3] = "Sem&aacute;foros";
 answers[20] = 0;
 units[20] = ['57'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8997. ";
 preguntaids[20] = 8997


//  Id pregunta: 9026 Año de creación de pregunta: 2014
 questions[21]= "22)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[21]= new Array();
 choices[21][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[21][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[21][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[21][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[21] = 2;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9026. Examen TIC A1 2013";
 preguntaids[21] = 9026


//  Id pregunta: 9024 Año de creación de pregunta: 2014
 questions[22]= "23)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[22]= new Array();
 choices[22][0] = "chmod u+s /directorio/fichero";
 choices[22][1] = "chmog g+s /directorio";
 choices[22][2] = "chmod 177 /directorio";
 choices[22][3] = "chmod +t /directorio";
 answers[22] = 3;
 units[22] = ['57'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9024. Examen TIC A1 2013";
 preguntaids[22] = 9024


//  Id pregunta: 10069 Año de creación de pregunta: 2015
 questions[23]= "24)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[23]= new Array();
 choices[23][0] = "grep error log.txt | wc &ndash;l";
 choices[23][1] = "grep wc &ndash;l |error log.txt";
 choices[23][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[23][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[23] = 0;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 10069. Examen TIC A2 2014";
 preguntaids[23] = 10069


//  Id pregunta: 10713 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes corresponde al Framework multimedia de KDE?";
 choices[24]= new Array();
 choices[24][0] = "Phonon";
 choices[24][1] = "Decibel";
 choices[24][2] = "Plasma";
 choices[24][3] = "Ninguna de las afirmaciones restantes.";
 answers[24] = 0;
 units[24] = ['57'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10713. ";
 preguntaids[24] = 10713


//  Id pregunta: 10717 Año de creación de pregunta: 2015
 questions[25]= "26)  Seleccione el fichero de Linux que contiene las direcciones de los servidores DNS necesarios para la navegaci&oacute;n por Internet.";
 choices[25]= new Array();
 choices[25][0] = "crontab";
 choices[25][1] = "interfaces";
 choices[25][2] = "resolv.conf";
 choices[25][3] = "dns.conf";
 answers[25] = 2;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 10717. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[25] = 10717


//  Id pregunta: 9329 Año de creación de pregunta: 2014
 questions[26]= "27)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso delsistema que";
 choices[26]= new Array();
 choices[26][0] = "siempre se ejecuta en segundo plano (background).";
 choices[26][1] = "siempre es de corta duraci&oacute;n.";
 choices[26][2] = "est&aacute; siempre ejecut&aacute;ndose.";
 choices[26][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[26] = 0;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9329. ";
 preguntaids[26] = 9329


//  Id pregunta: 9995 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes comandos Unix impide que el archivo de nombre &quot;miarchivo&quot; sea modificado y ejecutado por el grupo al que pertenece dicho archivo?";
 choices[27]= new Array();
 choices[27][0] = "chmod 766 miarchivo";
 choices[27][1] = "chmod a+xw miarchivo";
 choices[27][2] = "chmod 644 miarchivo";
 choices[27][3] = "chmod u=rwx go=wx miarchivo";
 answers[27] = 2;
 units[27] = ['57'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9995. Examen TIC A2 2014";
 preguntaids[27] = 9995


//  Id pregunta: 10928 Año de creación de pregunta: 2015
 questions[28]= "29)  En UNIX, un archivo se compone de:";
 choices[28]= new Array();
 choices[28][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos.";
 choices[28][1] = "Una secuencia de bytes.";
 choices[28][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos.";
 choices[28][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento.";
 answers[28] = 2;
 units[28] = ['57'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 10928. ";
 preguntaids[28] = 10928


//  Id pregunta: 10718 Año de creación de pregunta: 2015
 questions[29]= "30)  Las distribuciones Debian o Ubuntu, entre otras, permiten instalar habitualmente nuevas utilidades a partir de ficheros .deb. Indique cu&aacute;l de las siguientes sentencias Linux es incorrecta:";
 choices[29]= new Array();
 choices[29][0] = "apt-update";
 choices[29][1] = "dpkg-reconfigure";
 choices[29][2] = "apt-cache search xorg";
 choices[29][3] = "dpkg";
 answers[29] = 0;
 units[29] = ['57'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10718. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[29] = 10718


//  Id pregunta: 9655 Año de creación de pregunta: 2014
 questions[30]= "31)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix";
 choices[30]= new Array();
 choices[30][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz.";
 choices[30][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido  y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario.";
 choices[30][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz.";
 choices[30][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido.";
 answers[30] = 2;
 units[30] = ['57'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9655. Examen TIC A1 2013";
 preguntaids[30] = 9655


//  Id pregunta: 10070 Año de creación de pregunta: 2015
 questions[31]= "32)  En Linux, la primera partici&oacute;n l&oacute;gica en el disco duro maestro IDE del canal primario se identifica con:";
 choices[31]= new Array();
 choices[31][0] = "/dev/sda1";
 choices[31][1] = "/dev/hda1";
 choices[31][2] = "/dev/hda5";
 choices[31][3] = "/dev/hda2";
 answers[31] = 2;
 units[31] = ['57'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 10070. Examen TIC A2 2014";
 preguntaids[31] = 10070


//  Id pregunta: 9709 Año de creación de pregunta: 2014
 questions[32]= "33)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[32]= new Array();
 choices[32][0] = "ps -a";
 choices[32][1] = "top";
 choices[32][2] = "fork";
 choices[32][3] = "lsof";
 answers[32] = 3;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9709. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";
 preguntaids[32] = 9709


//  Id pregunta: 9025 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[33]= new Array();
 choices[33][0] = "Metacity de GNOME";
 choices[33][1] = "KWIN de KDE";
 choices[33][2] = "GTK de CDE";
 choices[33][3] = "Enlightenment de GNOME";
 answers[33] = 2;
 units[33] = ['57'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9025. Examen TIC A1 2013";
 preguntaids[33] = 9025


