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
//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[0]= "1)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[0]= new Array();
 choices[0][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[0][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[0][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[0][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[0] = 1;
 units[0] = ['58'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 675. Junta de Extremadura A1 2015";
 preguntaids[0] = 675


//  Id pregunta: 2752 Año de creación de pregunta: 2003
 questions[1]= "2)  El Directorio Activo de Windows 2003:";
 choices[1]= new Array();
 choices[1][0] = "Permite crear repositorios virtuales en el mismo disco duro de un &uacute;nico servidor activo";
 choices[1][1] = "Permite crear vol&uacute;menes virtuales que pueden estar repartidos en varios discos de distintos ordenadores";
 choices[1][2] = "Permite crear un repositorio en el cual almacenar todala informaci&oacute;n relevante de la empresa en cuanto a su estructura";
 choices[1][3] = "Permite crear un volumen virtual que se active por requerimiento de los directivos de la empresa";
 answers[1] = 2;
 units[1] = ['58'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2752. ";
 preguntaids[1] = 2752


//  Id pregunta: 5718 Año de creación de pregunta: 2007
 questions[2]= "3)  &iquest;Cual de los siguientes es el sistema de archivos de encriptaci&oacute;n para NTFS?";
 choices[2]= new Array();
 choices[2][0] = "SEE.";
 choices[2][1] = "SCF.";
 choices[2][2] = "EFS.";
 choices[2][3] = "no existe tal sistema de archivos.";
 answers[2] = 2;
 units[2] = ['58'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 5718. ";
 preguntaids[2] = 5718


//  Id pregunta: 3508 Año de creación de pregunta: 2006
 questions[3]= "4)  Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta";
 choices[3]= new Array();
 choices[3][0] = "El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina";
 choices[3][1] = "El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso";
 choices[3][2] = "El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador";
 choices[3][3] = "Los fallos de p&aacute;gina son tratados por el hardware";
 answers[3] = 2;
 units[3] = ['58'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3508. ";
 preguntaids[3] = 3508


//  Id pregunta: 9031 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Qu&eacute; se conoce como CPU Throttling en IIS 8.0?";
 choices[4]= new Array();
 choices[4][0] = "A reducir autom&aacute;ticamente la frecuencia de trabajo de la CPU para evitar el calentamiento de la m&aacute;quina";
 choices[4][1] = "A la asignaci&oacute;n de CPU a cada proceso en un entorno multiprocesador";
 choices[4][2] = "A los fallos de CPU ante una sobrecarga de trabajo";
 choices[4][3] = "A la limitaci&oacute;n autom&aacute;tica de los recursos de CPU entre los tenants del sistema";
 answers[4] = 3;
 units[4] = ['58'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9031. La respuesta A es el concepto original de CPU throttling, la D es lo que se entiende en un entorno de hosting";
 preguntaids[4] = 9031


//  Id pregunta: 8693 Año de creación de pregunta: 2013
 questions[5]= "6)  &iquest;C&oacute;mo surgi&oacute; Windows?";
 choices[5]= new Array();
 choices[5][0] = "En la interfaz de usuario de Apple Lisa, precursora de Apple Macintosh.";
 choices[5][1] = "Fue una interfaz gr&aacute;fica para MS-DOS";
 choices[5][2] = "Windows 1.0 sali&oacute; al mercado en 1985.";
 choices[5][3] = "Todas son correctas.";
 answers[5] = 3;
 units[5] = ['58'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8693. ";
 preguntaids[5] = 8693


//  Id pregunta: 9651 Año de creación de pregunta: 2014
 questions[6]= "7)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012";
 choices[6]= new Array();
 choices[6][0] = "Business";
 choices[6][1] = "Essentials";
 choices[6][2] = "Foundation";
 choices[6][3] = "Standard";
 answers[6] = 0;
 units[6] = ['58'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9651. Examen TIC A1 2013";
 preguntaids[6] = 9651


//  Id pregunta: 7366 Año de creación de pregunta: 2010
 questions[7]= "8)  En una aplicaci&oacute;n desarrollada para el entorno WINDOWS, la posibilidad de cambiar de base de datos relacional a la que se accede sin tener que modificar la aplicaci&oacute;n, est&aacute; garantizada por la utilizaci&oacute;n de";
 choices[7]= new Array();
 choices[7][0] = "Drivers ODBC";
 choices[7][1] = "La tecnolog&iacute;a COM";
 choices[7][2] = "Librer&iacute;as de carga din&aacute;mica (DLL)";
 choices[7][3] = "El API adecuado";
 answers[7] = 0;
 units[7] = ['58'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7366. Examen TIC B 2009";
 preguntaids[7] = 7366


//  Id pregunta: 8695 Año de creación de pregunta: 2013
 questions[8]= "9)  &iquest;Qu&eacute; interfaces admit&iacute;a NT?";
 choices[8]= new Array();
 choices[8][0] = "OS/2";
 choices[8][1] = "POSIX";
 choices[8][2] = "OS/2, POSIX y Win32.";
 choices[8][3] = "Aunque admit&iacute;a OS/2, todav&iacute;a se sigue utilizando en Windows XP.";
 answers[8] = 2;
 units[8] = ['58'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8695. ";
 preguntaids[8] = 8695


//  Id pregunta: 8726 Año de creación de pregunta: 2013
 questions[9]= "10)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows:";
 choices[9]= new Array();
 choices[9][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits";
 choices[9][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[9][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[9][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[9] = 3;
 units[9] = ['58'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8726. Examen TICA2-2011";
 preguntaids[9] = 8726


//  Id pregunta: 3378 Año de creación de pregunta: 2006
 questions[10]= "11)  En el Directorio Activo, el conjunto de atributos de un objeto dado, se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Contenedor";
 choices[10][1] = "Esquema";
 choices[10][2] = "&Aacute;rbol";
 choices[10][3] = "P&aacute;gina";
 answers[10] = 1;
 units[10] = ['58'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3378. ";
 preguntaids[10] = 3378


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique el producto de Microsoft que permite la administraci&oacute;n de Ia configuraci&oacute;n del cumplimiento y la administraci&oacute;n integral de activos de servidores, equipos de escritorio, port&aacute;tiles y dispositivos m&oacute;viles:";
 choices[11]= new Array();
 choices[11][0] = "System Center Data Protection Manager.";
 choices[11][1] = "System Center App Controller.";
 choices[11][2] = "System Center Configuration Manager.";
 choices[11][3] = "System Center Orchestrator.";
 answers[11] = 2;
 units[11] = ['58'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 672. AGE A2 2015";
 preguntaids[11] = 672


//  Id pregunta: 9996 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Para qu&eacute; se utiliza el servicio SMB de Windows?";
 choices[12]= new Array();
 choices[12][0] = "Para configurar un proxy-inverso en la salida a Internet.";
 choices[12][1] = "Para realizar backups remotos y cronificados.";
 choices[12][2] = "Para compartir archivos e impresoras.";
 choices[12][3] = "Para configurar redes wifi.";
 answers[12] = 2;
 units[12] = ['58'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9996. Examen TIC A2 2014";
 preguntaids[12] = 9996


//  Id pregunta: 5619 Año de creación de pregunta: 2007
 questions[13]= "14)  Para usar la utilidad &quot;Shadow Copies for Shared Folders&quot; en un sistema Windows Server 2003 R2 se necesita";
 choices[13]= new Array();
 choices[13][0] = "Un volumen FAT.";
 choices[13][1] = "Un volumen NTFS dedicado en exclusiva a esta funci&oacute;n.";
 choices[13][2] = "Un volumen FAT dedicado en exclusiva a esta funci&oacute;n.";
 choices[13][3] = "Un volumen NTFS";
 answers[13] = 3;
 units[13] = ['58'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5619. ";
 preguntaids[13] = 5619


//  Id pregunta: 3377 Año de creación de pregunta: 2006
 questions[14]= "15)  El sistema operativo WindowsNT se basaba en una estructura de n&uacute;cleo de sistema operativo";
 choices[14]= new Array();
 choices[14][0] = "Microkernel";
 choices[14][1] = "Monol&iacute;tico";
 choices[14][2] = "Anillo";
 choices[14][3] = "Red";
 answers[14] = 0;
 units[14] = ['58'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3377. ";
 preguntaids[14] = 3377


//  Id pregunta: 5726 Año de creación de pregunta: 2007
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes tipos de sistemas de ficheros, lo es de red?";
 choices[15]= new Array();
 choices[15][0] = "ext2";
 choices[15][1] = "swap";
 choices[15][2] = "SMB";
 choices[15][3] = "MSB";
 answers[15] = 2;
 units[15] = ['58'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 5726. ";
 preguntaids[15] = 5726


//  Id pregunta: 8701 Año de creación de pregunta: 2013
 questions[16]= "17)  &iquest;C&oacute;mo es la administraci&oacute;n de memoria en Windows 7?";
 choices[16]= new Array();
 choices[16][0] = "Todos los procesos de usuario comparten un espacio de direcciones virtuales.";
 choices[16][1] = "Cada proceso de usuario tiene su propio espacio de direcciones virtuales.";
 choices[16][2] = "No se gestiona.";
 choices[16][3] = "Ninguna es correcta.";
 answers[16] = 1;
 units[16] = ['58'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8701. ";
 preguntaids[16] = 8701


//  Id pregunta: 5615 Año de creación de pregunta: 2007
 questions[17]= "18)  La utilidad de Microsoft para sincronizar los contenidos de un Pocket PC y una estaci&oacute;n Windows XP se denomina:";
 choices[17]= new Array();
 choices[17][0] = "MS PowerSync";
 choices[17][1] = "MS Syncronizer";
 choices[17][2] = "MS ActiveSync";
 choices[17][3] = "MS PocketSync";
 answers[17] = 2;
 units[17] = ['58'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 5615. ";
 preguntaids[17] = 5615


//  Id pregunta: 9011 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;Desde qu&eacute; versi&oacute;n del SO Windows est&aacute; disponible la funcionalidad de bitlocker para USB?";
 choices[18]= new Array();
 choices[18][0] = "Windows XP";
 choices[18][1] = "Windows Vista";
 choices[18][2] = "Windows 7";
 choices[18][3] = "Windows 8";
 answers[18] = 2;
 units[18] = ['58'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9011. ";
 preguntaids[18] = 9011


//  Id pregunta: 9018 Año de creación de pregunta: 2014
 questions[19]= "20)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012";
 choices[19]= new Array();
 choices[19][0] = "Bussiness";
 choices[19][1] = "Essentials";
 choices[19][2] = "Foundation";
 choices[19][3] = "Standard";
 answers[19] = 0;
 units[19] = ['58'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9018. Examen TIC A1 2013";
 preguntaids[19] = 9018


//  Id pregunta: 3071 Año de creación de pregunta: 2002
 questions[20]= "21)  Un conjunto de instrucciones dedicadas a la ejecuci&oacute;n de una tarea espec&iacute;fica sobre una base de datos en tiempo real recibe el nombre de:";
 choices[20]= new Array();
 choices[20][0] = "M&oacute;dulo";
 choices[20][1] = "M&oacute;dulo reentrante";
 choices[20][2] = "Transacci&oacute;n";
 choices[20][3] = "Actualizaci&oacute;n";
 answers[20] = 2;
 units[20] = ['58', '59', '60'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3071. ";
 preguntaids[20] = 3071


//  Id pregunta: 5153 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Cu&aacute;l no es una extensi&oacute;n de fichero?";
 choices[21]= new Array();
 choices[21][0] = ".pdf";
 choices[21][1] = ".bmp";
 choices[21][2] = ".phf";
 choices[21][3] = ".doc";
 answers[21] = 2;
 units[21] = ['58'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 5153. ";
 preguntaids[21] = 5153


//  Id pregunta: 9030 Año de creación de pregunta: 2014
 questions[22]= "23)  &iquest;C&oacute;mo puede ejecutarse Windows 2012 Server en procesadores de 32 bits?";
 choices[22]= new Array();
 choices[22][0] = "No puede";
 choices[22][1] = "Con una versi&oacute;n espec&iacute;fica para estos procesadores";
 choices[22][2] = "Con un programa de emulaci&oacute;n";
 choices[22][3] = "Con una m&aacute;quina virtual";
 answers[22] = 0;
 units[22] = ['58'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9030. ";
 preguntaids[22] = 9030


//  Id pregunta: 2799 Año de creación de pregunta: 2002
 questions[23]= "24)  Elija la respuesta falsa. Las siguientes funciones pueden ser llevadas a cabo por un sistema windows 200x:";
 choices[23]= new Array();
 choices[23][0] = "Enrutamiento Ip";
 choices[23][1] = "Servidor de telefonia";
 choices[23][2] = "Servidor NFS";
 choices[23][3] = "Servidor NIS+";
 answers[23] = 3;
 units[23] = ['58'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2799. ";
 preguntaids[23] = 2799


//  Id pregunta: 8699 Año de creación de pregunta: 2013
 questions[24]= "25)  &iquest;Qu&eacute; es UMS?";
 choices[24]= new Array();
 choices[24][0] = "Una tecnolog&iacute;a m&oacute;vil";
 choices[24][1] = "User Mode Scheduling.";
 choices[24][2] = "Permite separar en dos partes el hilo de usuario entre la parte del proceso que se ejecuta en modo usuario y el hilo que se ejecuta en modo kernel.";
 choices[24][3] = "La B) y la C) son correctas.";
 answers[24] = 3;
 units[24] = ['58'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8699. ";
 preguntaids[24] = 8699


//  Id pregunta: 8700 Año de creación de pregunta: 2013
 questions[25]= "26)  &iquest;Cu&aacute;l es la relaci&oacute;n entre trabajos, procesos, hilos y fibras en Windows?";
 choices[25]= new Array();
 choices[25][0] = "Los trabajos contienen procesos.";
 choices[25][1] = "Los procesos contienen hilos.";
 choices[25][2] = "Los hilos contienen fibras.";
 choices[25][3] = "Todas son correctas.";
 answers[25] = 3;
 units[25] = ['58'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8700. ";
 preguntaids[25] = 8700


//  Id pregunta: 8694 Año de creación de pregunta: 2013
 questions[26]= "27)  &iquest;Qu&eacute; es ntoskrnl.exe?";
 choices[26]= new Array();
 choices[26][0] = "Un virus que tuvo mucha incidencia en equipos en el 2012.";
 choices[26][1] = "El n&uacute;cleo del sistema operativo Windows 7.";
 choices[26][2] = "Es el programa en modo Kernel NTOS (Windows NT Operating System Kernel)";
 choices[26][3] = "Proporciona los nuevos interfaces de llamadas al sistema de Windows.";
 answers[26] = 2;
 units[26] = ['58'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8694. ";
 preguntaids[26] = 8694


//  Id pregunta: 10801 Año de creación de pregunta: 2015
 questions[27]= "28)  Con respecto al sistema operativo Windows 10, se&ntilde;ale la falsa:";
 choices[27]= new Array();
 choices[27][0] = "Se mantiene y mejora el Men&uacute; de Inicio.";
 choices[27][1] = "Desaparece el entorno Modern UI.";
 choices[27][2] = "Permite crear y administrar escritorios virtuales.";
 choices[27][3] = "Incluye el asistente personal Cortana.";
 answers[27] = 1;
 units[27] = ['58'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10801. ";
 preguntaids[27] = 10801


//  Id pregunta: 7919 Año de creación de pregunta: 2011
 questions[28]= "29)  La familia de WINDOWS SERVER 2003 soporta clusters de servidor de hasta:";
 choices[28]= new Array();
 choices[28][0] = "16 nodos.";
 choices[28][1] = "4 nodos.";
 choices[28][2] = "8 nodos.";
 choices[28][3] = "32 nodos.";
 answers[28] = 2;
 units[28] = ['58'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7919. Examen TIC A1 2010";
 preguntaids[28] = 7919


//  Id pregunta: 9027 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;C&uacute;al es la interfaz gr&aacute;fica de usuario en una instalaci&oacute;n de Windows 2012 Server core?";
 choices[29]= new Array();
 choices[29][0] = "MetroUI";
 choices[29][1] = "Metacity";
 choices[29][2] = "KDE";
 choices[29][3] = "Ninguna";
 answers[29] = 3;
 units[29] = ['58'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9027. ";
 preguntaids[29] = 9027


//  Id pregunta: 2722 Año de creación de pregunta: 2002
 questions[30]= "31)  De las cl&aacute;usulas de Horn, no es correcto afirmar que:";
 choices[30]= new Array();
 choices[30][0] = "Son aquellas que tienen, como mucho, un literal no negado";
 choices[30][1] = "Una hip&oacute;tesis es una cl&aacute;usula de Horn con un literal no negado";
 choices[30][2] = "Una pregunta es una cl&aacute;usula de Horn con ning&uacute;n literal no negado o teorema a demostrar";
 choices[30][3] = "En las bases de datos deductivas indefinidas, todos los axiomas son cl&aacute;usulas de Horn";
 answers[30] = 3;
 units[30] = ['58'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2722. ";
 preguntaids[30] = 2722


//  Id pregunta: 8468 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Qu&eacute; es Windows PowerShell?";
 choices[31]= new Array();
 choices[31][0] = "El interfaz del sistema de gesti&oacute;n de energ&iacute;a de Windows";
 choices[31][1] = "Una interfaz de comandos y un lenguaje de scripting, integrado en .NET y orientado a los administradores de sistemas Windows";
 choices[31][2] = "&quot;Una versi&oacute;n para Windows del comando &quot;&quot;ps&quot;&quot; de Unix&quot;";
 choices[31][3] = "Nada de lo anterior";
 answers[31] = 1;
 units[31] = ['58'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8468. ";
 preguntaids[31] = 8468


//  Id pregunta: 1616 Año de creación de pregunta: 2016
 questions[32]= "33)  En sistemas windows, se&ntilde;ale cu&aacute;l es la herramienta que permite realizar tareas de inventario, distribuci&oacute;n de software y control remoto:";
 choices[32]= new Array();
 choices[32][0] = "SMS, system management service.";
 choices[32][1] = "SAK, system admistration kit.";
 choices[32][2] = "AMK, administration and management kit.";
 choices[32][3] = "RSM, remote server manager.";
 answers[32] = 0;
 units[32] = ['58'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1616. ";
 preguntaids[32] = 1616


//  Id pregunta: 9146 Año de creación de pregunta: 2014
 questions[33]= "34)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[33]= new Array();
 choices[33][0] = "ReFS";
 choices[33][1] = "NTFS";
 choices[33][2] = "HPFS";
 choices[33][3] = "CSFS";
 answers[33] = 0;
 units[33] = ['58'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9146. Examen TIC A2 2013";
 preguntaids[33] = 9146


//  Id pregunta: 9029 Año de creación de pregunta: 2014
 questions[34]= "35)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[34]= new Array();
 choices[34][0] = "256";
 choices[34][1] = "512";
 choices[34][2] = "1024";
 choices[34][3] = "2048";
 answers[34] = 2;
 units[34] = ['58'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9029. ";
 preguntaids[34] = 9029


//  Id pregunta: 9028 Año de creación de pregunta: 2014
 questions[35]= "36)  &iquest;Qu&eacute; es IPAM en Windows 2012 Server?";
 choices[35]= new Array();
 choices[35][0] = "IP Address Management";
 choices[35][1] = "Internet Proccess Advanced Management";
 choices[35][2] = "IP Access Management";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = 0;
 units[35] = ['58'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9028. ";
 preguntaids[35] = 9028


//  Id pregunta: 1065 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows";
 choices[36]= new Array();
 choices[36][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits.";
 choices[36][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[36][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[36][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[36] = 3;
 units[36] = ['58'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1065. ";
 preguntaids[36] = 1065


//  Id pregunta: 9017 Año de creación de pregunta: 2014
 questions[37]= "38)  &iquest;En qu&eacute; consisten los segmentos de memoria virtual en el Sistema Operativo Windows?";
 choices[37]= new Array();
 choices[37][0] = "Bloques de memoria virtual de longitud variable que pertenecen al mismo proceso";
 choices[37][1] = "Bloques de memoria virtual de longitud fija que pertenecen al mismo proceso";
 choices[37][2] = "Bloques memoria virtual de longitud fija que no tienen relaci&oacute;n entre ellos";
 choices[37][3] = "Ninguno de los anteriores";
 answers[37] = 3;
 units[37] = ['58'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9017. Windows no usa memoria virtual segmentada, s&oacute;lo paginada";
 preguntaids[37] = 9017


//  Id pregunta: 10173 Año de creación de pregunta: 2015
 questions[38]= "39)  En referencia al software &ldquo;Windows Mobile Device Center&rdquo;, se&ntilde;ale la respuesta correcta:";
 choices[38]= new Array();
 choices[38][0] = "Es un software de sincronizaci&oacute;n precursor del ActiveSync.";
 choices[38][1] = "Ofrece un controlador de base incorporado a la interfaz de dispositivos en el explorador de Windows.";
 choices[38][2] = "Permite que un dispositivo m&oacute;vil se sincronice con un pc o un servidor que ejecute Microsoft Exchange Server.";
 choices[38][3] = "Es un programa de sincronizaci&oacute;n desarrollado para su uso con sistemas operativos Linux.";
 answers[38] = 2;
 units[38] = ['58'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10173. Examen TIC A1 2014";
 preguntaids[38] = 10173


//  Id pregunta: 7499 Año de creación de pregunta: 2010
 questions[39]= "40)  Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta:";
 choices[39]= new Array();
 choices[39][0] = "El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina.";
 choices[39][1] = "El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso.";
 choices[39][2] = "El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador.";
 choices[39][3] = "Los fallos de p&aacute;gina son tratados por el hardware.";
 answers[39] = 2;
 units[39] = ['58'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7499. Map 2005";
 preguntaids[39] = 7499


//  Id pregunta: 2854 Año de creación de pregunta: 2002
 questions[40]= "41)  En sistemas Windows 200x, &iquest;cu&aacute;l es el API nativo de Microsoft que permite programar contra los servicios de Active Directory?:";
 choices[40]= new Array();
 choices[40][0] = "X.500";
 choices[40][1] = "ADSI";
 choices[40][2] = "LDAP";
 choices[40][3] = "Todas son falsas";
 answers[40] = 1;
 units[40] = ['58'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2854. ";
 preguntaids[40] = 2854


//  Id pregunta: 3068 Año de creación de pregunta: 2002
 questions[41]= "42)  Un &quot;service pack&quot; en el entorno del sistema operativo Windows 2000:";
 choices[41]= new Array();
 choices[41][0] = "Es una aplicaci&oacute;n auxiliar que amplia las funcionalidades del sistema operativo";
 choices[41][1] = "Es un componente del servicio de paquetes";
 choices[41][2] = "Es un paquete integrado que incluye el sistema operativo y programas de aplicaci&oacute;n";
 choices[41][3] = "Es un conjunto de correcciones o partes del sistema operativo que corrige fallos o vulnerabilidades de seguridad y tambi&eacute;n puede ampliar las funcionalidades de dicho sistema";
 answers[41] = 3;
 units[41] = ['58', '59'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3068. ";
 preguntaids[41] = 3068


//  Id pregunta: 8703 Año de creación de pregunta: 2013
 questions[42]= "43)  &iquest;Qu&eacute; es BitLocker?";
 choices[42]= new Array();
 choices[42][0] = "Una funcionalidad de Windows que permite el cifrado de discos duros completos.";
 choices[42][1] = "Se proporciona desde Windows Vista.";
 choices[42][2] = "Con Windows 7 incorpora la funcionalidad de BiLocker-ToGo para dispositivos USB.";
 choices[42][3] = "Todas son correctas";
 answers[42] = 3;
 units[42] = ['58'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8703. ";
 preguntaids[42] = 8703


//  Id pregunta: 8698 Año de creación de pregunta: 2013
 questions[43]= "44)  &iquest;D&oacute;nde se almacena la informaci&oacute;n de inicio de sesi&oacute;n para los usuarios locales en Windows?";
 choices[43]= new Array();
 choices[43][0] = "En el DA de Microsoft.";
 choices[43][1] = "En la SAM (Security Access Manager)";
 choices[43][2] = "En una archivo de texto del sistema cifrado.";
 choices[43][3] = "En la COM (Component Object Model)";
 answers[43] = 1;
 units[43] = ['58'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8698. ";
 preguntaids[43] = 8698


//  Id pregunta: 8706 Año de creación de pregunta: 2013
 questions[44]= "45)  &iquest;Qu&eacute; requisitos m&iacute;nimos de hardware tiene Windows 8?";
 choices[44]= new Array();
 choices[44][0] = "2 GB de RAM para versi&oacute;n de 64 bits y 1 GB para versi&oacute;n de 32 bits.";
 choices[44][1] = "1 GB para versi&oacute;n de 64 bits y 2 para versi&oacute;n de 32 bits.";
 choices[44][2] = "16 GB de espacio libre para versi&oacute;n de 64 bits.";
 choices[44][3] = "Ninguna es correcta.";
 answers[44] = 0;
 units[44] = ['58'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8706. ";
 preguntaids[44] = 8706


//  Id pregunta: 8702 Año de creación de pregunta: 2013
 questions[45]= "46)  &iquest;Qu&eacute; es VAD?";
 choices[45]= new Array();
 choices[45][0] = "Virtual Address Descriptors";
 choices[45][1] = "Virtual Allocator Devices";
 choices[45][2] = "Descriptor de direcciones asignadas.";
 choices[45][3] = "No existe.";
 answers[45] = 0;
 units[45] = ['58'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8702. ";
 preguntaids[45] = 8702


//  Id pregunta: 8705 Año de creación de pregunta: 2013
 questions[46]= "47)  &iquest;Qu&eacute; incluye Windows 8?";
 choices[46]= new Array();
 choices[46][0] = "Una nueva pantalla de Inicio.";
 choices[46][1] = "Una nueva tienda de aplicaciones.";
 choices[46][2] = "Su intefaz de usuario se ha modificado para hacerlo m&aacute;s adecuado para pantallas t&aacute;ctiles.";
 choices[46][3] = "Todas son correctas.";
 answers[46] = 3;
 units[46] = ['58'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8705. ";
 preguntaids[46] = 8705


//  Id pregunta: 8696 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;En qu&eacute; se diferencia la API de Windows y Unix en cuanto a filosof&iacute;a?";
 choices[47]= new Array();
 choices[47][0] = "En Unix las funciones de sistema operativo son simples, con pocos par&aacute;metros.";
 choices[47][1] = "Win32 ofrece interfaces muy extensas con muchos par&aacute;metros.";
 choices[47][2] = "En Unix suele haber pocas formas de realizar una operaci&oacute;n, mientras en Win32 hay a menudo 3 o 4 formas de realizar lo mismo.";
 choices[47][3] = "Todas son correctas.";
 answers[47] = 3;
 units[47] = ['57', '58'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8696. ";
 preguntaids[47] = 8696


//  Id pregunta: 2661 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[48]= new Array();
 choices[48][0] = "El motor de base de datos JET de Access";
 choices[48][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[48][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[48][3] = "El Ayudante de Office";
 answers[48] = 3;
 units[48] = ['58', '68'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2661. ";
 preguntaids[48] = 2661


//  Id pregunta: 3379 Año de creación de pregunta: 2006
 questions[49]= "50)  En el entorno Microsoft WebDAV se utiliza para";
 choices[49]= new Array();
 choices[49][0] = "Recuperaci&oacute;n automatizada del sistema";
 choices[49][1] = "Para sincronizaci&oacute;n de copias de DFS";
 choices[49][2] = "Compartici&oacute;n remota de documentos";
 choices[49][3] = "Encriptaci&oacute;n del sistema de archivos";
 answers[49] = 2;
 units[49] = ['58'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3379. ";
 preguntaids[49] = 3379


//  Id pregunta: 9827 Año de creación de pregunta: 2015
 questions[50]= "51)  El planificador de Windows:";
 choices[50]= new Array();
 choices[50][0] = "Se ejecuta en el hilo de planificaci&oacute;n central del kernel.";
 choices[50][1] = "Su c&oacute;digo se ejecuta cuando se completa una operaci&oacute;n de E/S.";
 choices[50][2] = "Windows no tiene planificador.";
 choices[50][3] = "Est&aacute; escrito en Python.";
 answers[50] = 1;
 units[50] = ['58'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9827. ";
 preguntaids[50] = 9827


//  Id pregunta: 8469 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes no es una edici&oacute;n de Windows 7?";
 choices[51]= new Array();
 choices[51][0] = "Starter";
 choices[51][1] = "Home Premium";
 choices[51][2] = "Ultimate";
 choices[51][3] = "Business";
 answers[51] = 3;
 units[51] = ['58'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8469. ";
 preguntaids[51] = 8469


//  Id pregunta: 8704 Año de creación de pregunta: 2013
 questions[52]= "53)  &iquest;Qu&eacute; mejora Windows Server 2008?";
 choices[52]= new Array();
 choices[52][0] = "Nuevo proceso de reparaci&oacute;n de sistemas NTFS.";
 choices[52][1] = "Creaci&oacute;n de sesiones de usuario secuenciales.";
 choices[52][2] = "Sistema de archivo FAT";
 choices[52][3] = "ASLR, protecci&oacute;n contra malware en la carga de controladores en disco.";
 answers[52] = 0;
 units[52] = ['58'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 8704. ";
 preguntaids[52] = 8704


//  Id pregunta: 9015 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;C&uacute;al de los siguientes es un medio para la sincronizaci&oacute;n entre procesos Windows?";
 choices[53]= new Array();
 choices[53][0] = "Signals";
 choices[53][1] = "Mutex";
 choices[53][2] = "Sockets";
 choices[53][3] = "RPCs";
 answers[53] = 1;
 units[53] = ['58'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9015. ";
 preguntaids[53] = 9015


//  Id pregunta: 9014 Año de creación de pregunta: 2014
 questions[54]= "55)  Las fibras (threads) en el SO Windows...";
 choices[54]= new Array();
 choices[54][0] = "Se ejecutan en modo usuario";
 choices[54][1] = "Usan multitarea preemptiva";
 choices[54][2] = "Usan multitarea colaborativa";
 choices[54][3] = "a) y c) son ciertas";
 answers[54] = 3;
 units[54] = ['58'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9014. ";
 preguntaids[54] = 9014


//  Id pregunta: 9012 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Cuantos atributos tiene un archivo en el sistema de ficheros NTFS?";
 choices[55]= new Array();
 choices[55][0] = "9";
 choices[55][1] = "11";
 choices[55][2] = "13";
 choices[55][3] = "15";
 answers[55] = 2;
 units[55] = ['58'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9012. ";
 preguntaids[55] = 9012


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;A qu&eacute; perfil profesional relacionado con las Tecnolog&iacute;as de Informaci&oacute;n le corresponde la gesti&oacute;n de las Directivas de Grupo (GPO) en el Directorio Activo de Microsoft Windows Server?";
 choices[56]= new Array();
 choices[56][0] = "Administrador de Base de Datos.";
 choices[56][1] = "Analista Programador.";
 choices[56][2] = "Administrador de Sistema Operativo.";
 choices[56][3] = "Jefe de Proyecto.";
 answers[56] = 2;
 units[56] = ['58'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 673. AGE A2 2015";
 preguntaids[56] = 673


//  Id pregunta: 8352 Año de creación de pregunta: 2011
 questions[57]= "58)  En el marco de trabajo Windows Communication Foundation (WCF) para la creaci&oacute;n de Aplicaciones Orientadas a Servicios cu&aacute;l de las siguientes afirmaciones es correcta respecto al modelo de intercambio soportado:";
 choices[57]= new Array();
 choices[57][0] = "El modelo es el de solicitud/respuesta, en que un extremo ha de solicitar datos de otro extremo y el otro extremo enviar siempre una respuesta";
 choices[57][1] = "Permite un modelo d&uacute;plex, en donde dos extremos establecen una conexi&oacute;n y se env&iacute;an datos entre s&iacute;, como ocurre con un programa de mensajer&iacute;a instant&aacute;nea";
 choices[57][2] = "El modelo establece que el env&iacute;o de datos de un extremo de servicio a otro no puede ser asincr&oacute;nico";
 choices[57][3] = "Ninguna de las anteriores es correcta";
 answers[57] = 2;
 units[57] = ['58'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8352. Analista Ayto. Madrid 2010";
 preguntaids[57] = 8352


//  Id pregunta: 9022 Año de creación de pregunta: 2014
 questions[58]= "59)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[58]= new Array();
 choices[58][0] = "ReFS";
 choices[58][1] = "NTFS";
 choices[58][2] = "HPFS";
 choices[58][3] = "CSFS";
 answers[58] = 0;
 units[58] = ['58'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9022. Examen TIC A1 2013";
 preguntaids[58] = 9022


//  Id pregunta: 2659 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Para qu&eacute; sirve el objeto BindingCollection de Visual Basic?";
 choices[59]= new Array();
 choices[59][0] = "Es falso que Visual Basic incluya dicho objeto.";
 choices[59][1] = "Es un recolector de memoria que libera la memoria que ha sido usada por objetos que ya no existen.";
 choices[59][2] = "Enlaza clases como or&iacute;genes de datos a controles orientados a datos.";
 choices[59][3] = "Todas las respuestas son falsas.";
 answers[59] = 2;
 units[59] = ['58'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2659. ";
 preguntaids[59] = 2659


//  Id pregunta: 9013 Año de creación de pregunta: 2014
 questions[60]= "61)  &iquest;En qu&eacute; parte del SO Windows se encuentra el Dispatcher?";
 choices[60]= new Array();
 choices[60][0] = "Ejecutivo";
 choices[60][1] = "Microkernel";
 choices[60][2] = "HAL";
 choices[60][3] = "Drivers";
 answers[60] = 1;
 units[60] = ['58'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9013. ";
 preguntaids[60] = 9013


//  Id pregunta: 8697 Año de creación de pregunta: 2013
 questions[61]= "62)  &iquest;Qu&eacute; son los hives en Windows?";
 choices[61]= new Array();
 choices[61][0] = "Grupos de archivos";
 choices[61][1] = "La organizaci&oacute;n del registro organizado en un &uacute;nico volumen.";
 choices[61][2] = "Cada grupo masivo de archivos se mantiene en varios archivos separados.";
 choices[61][3] = "Todas son correctas.";
 answers[61] = 0;
 units[61] = ['58'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8697. ";
 preguntaids[61] = 8697


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[62]= "63)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[62]= new Array();
 choices[62][0] = "Fat y Ntfs.";
 choices[62][1] = "Extfat y Fat.";
 choices[62][2] = "Fat y Nfst.";
 choices[62][3] = "ext2fs y Ntfs.";
 answers[62] = 0;
 units[62] = ['58'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 674. Junta de Extremadura A1 2015";
 preguntaids[62] = 674


