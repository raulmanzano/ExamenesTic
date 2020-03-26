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
//  Id pregunta: 1859 Año de creación de pregunta: 2016
 questions[0]= "1)  La organizaci&oacute;n de discos RAID 4 necesita:";
 choices[0]= new Array();
 choices[0][0] = "4 discos f&iacute;sicos como m&iacute;nimo.";
 choices[0][1] = "3 discos f&iacute;sicos como m&iacute;nimo.";
 choices[0][2] = "2 discos f&iacute;sicos como m&iacute;nimo.";
 choices[0][3] = "No tiene limitaci&oacute;n en el n&uacute;mero m&iacute;nimo de discos f&iacute;sicos.";
 answers[0] = 1;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1859. ";
 preguntaids[0] = 1859


//  Id pregunta: 2621 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes dispositivos no tiene relaci&oacute;n con el almacenamiento de la informaci&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "RAID";
 choices[1][1] = "OCR";
 choices[1][2] = "WORM";
 choices[1][3] = "DAT";
 answers[1] = 1;
 units[1] = ['53'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2621. ";
 preguntaids[1] = 2621


//  Id pregunta: 3049 Año de creación de pregunta: 2002
 questions[2]= "3)  Se&ntilde;ale la respuesta falsa. Frente a RAID 1, RAID 5:";
 choices[2]= new Array();
 choices[2][0] = "Es m&aacute;s r&aacute;pido en escritura";
 choices[2][1] = "Utiliza m&aacute;s discos";
 choices[2][2] = "Ofrece menos espacio utilizable en relaci&oacute;n con el tama&ntilde;o total de los discos";
 choices[2][3] = "Todas las respuestas anteriores son falsas";
 answers[2] = 1;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3049. ";
 preguntaids[2] = 3049


//  Id pregunta: 2857 Año de creación de pregunta: 2002
 questions[3]= "4)  En un disco magn&eacute;tico,  &iquest;qu&eacute; son las pistas?:";
 choices[3]= new Array();
 choices[3][0] = "Un espacio peque&ntilde;o entre los sectores";
 choices[3][1] = "Las posiciones donde la cabeza se mueve cuando el disco se apaga";
 choices[3][2] = "El n&uacute;mero de 'platos' del disco";
 choices[3][3] = "Nada de lo anterior es correcto";
 answers[3] = 3;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2857. Una pista de unidad de disco es un camino circular en la superficie del disco magn&eacute;tico donde la informaci&oacute;n es grabada magn&eacute;ticamente y de la cual tambi&eacute;n se lee la informaci&oacute;n registrada.";
 preguntaids[3] = 2857


//  Id pregunta: 1739 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale c&oacute;mo se denomina el protocolo de interconexi&oacute;n en redes SAN que opera a nivel de gateway y que permite el despliegue de servicios Fibre Channel sobre una red TCP/IP:";
 choices[4]= new Array();
 choices[4][0] = "FCIP (Fibre Channel Internet Protocol).";
 choices[4][1] = "iFCP (Internet Fibre Channel Protocol).";
 choices[4][2] = "iSCSI (Internet Small Computer System Interface).";
 choices[4][3] = "WDM (Wave Division Multiplexing).";
 answers[4] = 1;
 units[4] = ['53'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1739. ";
 preguntaids[4] = 1739


//  Id pregunta: 1372 Año de creación de pregunta: 2016
 questions[5]= "6)  Comparando NAS (Network-attacheda Storage) con SAN (Storage Area Network):";
 choices[5]= new Array();
 choices[5][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[5][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[5][2] = "Ambos operan a nivel de bloque.";
 choices[5][3] = "Ambos operan a nivel de fichero.";
 answers[5] = 0;
 units[5] = ['53'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1372. ";
 preguntaids[5] = 1372


//  Id pregunta: 1610 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde a una SAN (Storage &Aacute;rea Network) pero NO a una NAS (Network Attached Storage)?";
 choices[6]= new Array();
 choices[6][0] = "El dispositivo de almacenamiento no corresponde a un &uacute;nico servidor, pudiendo ser compartido por varios servidores.";
 choices[6][1] = "Las conexiones f&iacute;sicas desde los servidores hacia la plataforma son de uso espec&iacute;fico para el almacenamiento, no siendo utilizadas para otros fines";
 choices[6][2] = "Las peticiones de datos al sistema se hacen de forma remota a trav&eacute;s del protocolo CIFS";
 choices[6][3] = "Se comparte la misma infraestructura de red para los servidores y para el almacenamiento";
 answers[6] = 1;
 units[6] = ['53'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1610. ";
 preguntaids[6] = 1610


//  Id pregunta: 1967 Año de creación de pregunta: 2016
 questions[7]= "8)  Cu&aacute;l de los siguientes niveles de RAID se conoce como 'mirroring':";
 choices[7]= new Array();
 choices[7][0] = "RAID 5.";
 choices[7][1] = "RAID O.";
 choices[7][2] = "RAID 3.";
 choices[7][3] = "RAID 1.";
 answers[7] = 3;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1967. ";
 preguntaids[7] = 1967


//  Id pregunta: 3012 Año de creación de pregunta: 2002
 questions[8]= "9)  Referido a un sistema de disco magn&eacute;tico, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[8]= new Array();
 choices[8][0] = "Todas las pistas de un sector est&aacute;n en el mismo cilindro";
 choices[8][1] = "Un sector est&aacute; constituido por varias pistas";
 choices[8][2] = "Un  cilindro est&aacute; constituido por varias pistas";
 choices[8][3] = "Una pista est&aacute; constituida por varios cilindros";
 answers[8] = 2;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3012. ";
 preguntaids[8] = 3012


//  Id pregunta: 3149 Año de creación de pregunta: 2002
 questions[9]= "10)  Se entiende por red de almacenamiento (Storage Area Network):";
 choices[9]= new Array();
 choices[9][0] = "El conjunto de ficheros y bases de datos interconectados por una red de area local";
 choices[9][1] = "Un sistema de ordenadores conectados por una WAN que permite el acceso mutuo a sus bases de datos";
 choices[9][2] = "Un sistema de comunicaciones que cuenta con cierta capacidad de memoria en sus encaminadores";
 choices[9][3] = "Un sistema que contempla el almacenamiento de datos e informaciones como un conjunto virtual embebido en una red de comunicaci&oacute;n";
 answers[9] = 3;
 units[9] = ['53'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3149. ";
 preguntaids[9] = 3149


//  Id pregunta: 1055 Año de creación de pregunta: 2016
 questions[10]= "11)  Identificar que protocolo no est&aacute; dise&ntilde;ado espec&iacute;ficamente para la extensi&oacute;n de las SAN sobre protocolo IP:";
 choices[10]= new Array();
 choices[10][0] = "Iftp";
 choices[10][1] = "iSCSI";
 choices[10][2] = "FCIP";
 choices[10][3] = "iFCP";
 answers[10] = 0;
 units[10] = ['53'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1055. ";
 preguntaids[10] = 1055


//  Id pregunta: 3095 Año de creación de pregunta: 2002
 questions[11]= "12)  Una cinta DAT DDS3 tiene una capacidad de:";
 choices[11]= new Array();
 choices[11][0] = "32,1 Gb sin comprimir";
 choices[11][1] = "40 Gb comprimido";
 choices[11][2] = "80 Gb comprimido";
 choices[11][3] = "12 Gb sin comprimir";
 answers[11] = 3;
 units[11] = ['53'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3095. ";
 preguntaids[11] = 3095


//  Id pregunta: 3151 Año de creación de pregunta: 2002
 questions[12]= "13)  Suponiendo una densidad de grabaci&oacute;n lineal d = 10000 bits/cm, un radio R = 5 cm, una velocidad de giro de 3600 rpm y utilizaci&oacute;n de bits de paridad, la velocidad de transferencia es de:";
 choices[12]= new Array();
 choices[12][0] = "0.2 Mbytes/s";
 choices[12][1] = "10 Mbytes/s";
 choices[12][2] = "2.1 Mbytes/s";
 choices[12][3] = "18.9 Mbytes/s";
 answers[12] = 2;
 units[12] = ['53'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3151. ";
 preguntaids[12] = 3151


//  Id pregunta: 1117 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; relacionado con el sistema de archivos distribuido Lustre:";
 choices[13]= new Array();
 choices[13][0] = "DSS (Distributed Storage Server).";
 choices[13][1] = "OST (Object Storage Target).";
 choices[13][2] = "OSS (Object Storage Server).";
 choices[13][3] = "MDS (MetaData Server).";
 answers[13] = 0;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1117. ";
 preguntaids[13] = 1117


//  Id pregunta: 2478 Año de creación de pregunta: 2004
 questions[14]= "15)  A la hora de evaluar el comportamiento de un sistema inform&aacute;tico, el &quot;throughput&quot; se puede definir como:";
 choices[14]= new Array();
 choices[14][0] = "El n&uacute;mero de CPUs necesarias para asegurar una velocidad de procesamiento determinada";
 choices[14][1] = "El n&uacute;mero de recursos inform&aacute;ticos disponibles en el sistema";
 choices[14][2] = "El cociente entre la velocidad de transmisi&oacute;n de la red y la velocidad media de las CPUs del sistema";
 choices[14][3] = "La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 answers[14] = 3;
 units[14] = ['53'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2478. ";
 preguntaids[14] = 2478


//  Id pregunta: 2481 Año de creación de pregunta: 2004
 questions[15]= "16)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[15]= new Array();
 choices[15][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura.";
 choices[15][1] = "Ofrece la m&aacute;xima seguridad de los datos almacenados.";
 choices[15][2] = "Ofrece cierta seguridad y buena velocidad en lectura.";
 choices[15][3] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas.";
 answers[15] = 2;
 units[15] = ['53'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2481. ";
 preguntaids[15] = 2481


//  Id pregunta: 1371 Año de creación de pregunta: 2016
 questions[16]= "17)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[16]= new Array();
 choices[16][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[16][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[16][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[16][3] = "AI gateway para conectar una NAS a una red SAN.";
 answers[16] = 2;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1371. ";
 preguntaids[16] = 1371


//  Id pregunta: 3129 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;En qu&eacute; se basa la acci&oacute;n de comprimir las im&aacute;genes para almacenarlas o transmitirlas v&iacute;a red de &aacute;rea local o v&iacute;a teleproceso?:";
 choices[17]= new Array();
 choices[17][0] = "En la codificaci&oacute;n progresiva";
 choices[17][1] = "En la modulaci&oacute;n codificada";
 choices[17][2] = "En la codificaci&oacute;n de la informaci&oacute;n";
 choices[17][3] = "En el filtrado de frecuencias";
 answers[17] = 2;
 units[17] = ['53'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3129. ";
 preguntaids[17] = 3129


//  Id pregunta: 1622 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;ntas unidades de disco se necesitan como m&iacute;nimo para implementar una soluci&oacute;n RAID 5?";
 choices[18]= new Array();
 choices[18][0] = "1";
 choices[18][1] = "2";
 choices[18][2] = "3";
 choices[18][3] = "4";
 answers[18] = 2;
 units[18] = ['53'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1622. ";
 preguntaids[18] = 1622


//  Id pregunta: 2569 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; tienen en com&uacute;n Sony, Philips, Nokia, Panasonic, HP y Microsoft?:";
 choices[19]= new Array();
 choices[19][0] = "Fueron las &uacute;nicas multinacionales en el sector TIC con beneficios en 2002";
 choices[19][1] = "Todas se caracterizan por su pol&iacute;tica monopol&iacute;stica";
 choices[19][2] = "Todas fabrican perif&eacute;ricos m&oacute;viles";
 choices[19][3] = "Todas pertenecen, entre otras, al DHWG (Digital Home Working Group)";
 answers[19] = 3;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2569. ";
 preguntaids[19] = 2569


//  Id pregunta: 2803 Año de creación de pregunta: 2002
 questions[20]= "21)  En el &aacute;mbito de las estructuras de datos, las siglas VSAM significan:";
 choices[20]= new Array();
 choices[20][0] = "Virtual Storage Access Method";
 choices[20][1] = "Verification System Access Method";
 choices[20][2] = "Very Short Access Method";
 choices[20][3] = "Valued Storage Archival Method";
 answers[20] = 0;
 units[20] = ['53'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2803. ";
 preguntaids[20] = 2803


//  Id pregunta: 1740 Año de creación de pregunta: 2016
 questions[21]= "22)  Se cuenta con 4 discos f&iacute;sicos que se desea configurar como una &uacute;nica unidad, por ejemplo /root. Se desea maximizar la capacidad &uacute;til de almacenamiento proporcionando alg&uacute;n mecanismo de redundancia ante fallos. Por favor, elija entre las siguientes la mejor opci&oacute;n a utilizar:";
 choices[21]= new Array();
 choices[21][0] = "RAID 0";
 choices[21][1] = "RAID 1";
 choices[21][2] = "RAID 0+1";
 choices[21][3] = "RAID 5";
 answers[21] = 3;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1740. ";
 preguntaids[21] = 1740


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[22]= "23)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Incremental, diferencial, completa";
 choices[22][1] = "Completa, incremental, diferencial";
 choices[22][2] = "Completa, diferencial, incremental";
 choices[22][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[22] = 0;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 648. AGE A1 2015";
 preguntaids[22] = 648


//  Id pregunta: 2492 Año de creación de pregunta: 2004
 questions[23]= "24)  En un CPD se hacen back-ups de 240 GB. Se hacen 4 al a&ntilde;o. Si se quiere tener la informaci&oacute;n de los 5 a&ntilde;os anteriores, &iquest;Cu&aacute;ntas cintas de 60 GB hacen falta?";
 choices[23]= new Array();
 choices[23][0] = "60";
 choices[23][1] = "80";
 choices[23][2] = "90";
 choices[23][3] = "70";
 answers[23] = 1;
 units[23] = ['53'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2492. Similar a examen TIC SS A 2003";
 preguntaids[23] = 2492


//  Id pregunta: 1203 Año de creación de pregunta: 2016
 questions[24]= "25)  Cu&aacute;l de las siguientes relaciones NO es correcta:";
 choices[24]= new Array();
 choices[24][0] = "1024 Petabytes = 1 Zettabyte.";
 choices[24][1] = "1024 Zettabytes = 1 Yottabyte.";
 choices[24][2] = "1024 Yottabytes = 1 Brontobyte.";
 choices[24][3] = "1024 Brontobytes = 1 Geopbyte.";
 answers[24] = 0;
 units[24] = ['53'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1203. ";
 preguntaids[24] = 1203


//  Id pregunta: 1991 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los sistemas de almacenamiento basados en iSCSI es FALSA?";
 choices[25]= new Array();
 choices[25][0] = "Funcionan &uacute;nicamente sobre redes Gigabit Ethernet.";
 choices[25][1] = "Son m&aacute;s econ&oacute;micos que las soluciones basadas en Fibre Channel.";
 choices[25][2] = "Actualmente tienen un rendimiento inferior a las soluciones basadas en Fibre Channel.";
 choices[25][3] = "Consisten en el intercambio de tramas SCSI pero sobre TCP/IP, en lugar de sobre FC.";
 answers[25] = 0;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1991. ";
 preguntaids[25] = 1991


//  Id pregunta: 2509 Año de creación de pregunta: 2004
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes arquitecturas RAID implementa &quot;mirroring&quot; o espejo de discos?";
 choices[26]= new Array();
 choices[26][0] = "RAID 1";
 choices[26][1] = "RAID 0";
 choices[26][2] = "RAID 2";
 choices[26][3] = "RAID 5";
 answers[26] = 0;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2509. Examen TIC MAP B 2004";
 preguntaids[26] = 2509


//  Id pregunta: 2545 Año de creación de pregunta: 2004
 questions[27]= "28)  &iquest;Qu&eacute; significado tienen las siguientes siglas COLD?";
 choices[27]= new Array();
 choices[27][0] = "Computer Output to laser Disk";
 choices[27][1] = "Computer on line disk";
 choices[27][2] = "Computer Optical Laser Disk";
 choices[27][3] = "ninguna de las anteriores";
 answers[27] = 0;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2545. ";
 preguntaids[27] = 2545


//  Id pregunta: 1899 Año de creación de pregunta: 2016
 questions[28]= "29)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia completa, sin marcarlos individualmente como copiados, es una copia de seguridad:";
 choices[28]= new Array();
 choices[28][0] = "Acumulativa";
 choices[28][1] = "Intermedia";
 choices[28][2] = "Incremental";
 choices[28][3] = "Diferencial";
 answers[28] = 3;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1899. ";
 preguntaids[28] = 1899


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[29]= new Array();
 choices[29][0] = "Backup full.";
 choices[29][1] = "Backup diferencial.";
 choices[29][2] = "Backup incremental.";
 choices[29][3] = "Backup deduplicado.";
 answers[29] = 3;
 units[29] = ['53'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 653. Xunta de Galicia 2015";
 preguntaids[29] = 653


//  Id pregunta: 2856 Año de creación de pregunta: 2002
 questions[30]= "31)  En un disco duro Winchester:";
 choices[30]= new Array();
 choices[30][0] = "Las cabezas tocan el disco en todo momento";
 choices[30][1] = "Las cabezas nunca tocan el disco";
 choices[30][2] = "Las cabezas tocan el disco para grabar";
 choices[30][3] = "Las cabezas solo tocan el disco para formatearlo a bajo nivel";
 answers[30] = 1;
 units[30] = ['53'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2856. ";
 preguntaids[30] = 2856


//  Id pregunta: 1734 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta respecto del formato de disco &oacute;ptico Blu-ray:";
 choices[31]= new Array();
 choices[31][0] = "Se accede a trav&eacute;s de un l&aacute;ser de color rojo de 650 nan&oacute;metros.";
 choices[31][1] = "Dispone en su superficie de una capa de policarbonato de 0,6 mil&iacute;metros.";
 choices[31][2] = "Presenta menor resistencia a ralladuras y tolera peor la suciedad que el formato DVD.";
 choices[31][3] = "Soporta los formatos de compresi&oacute;n MPEG-2 y MPEG-4.";
 answers[31] = 3;
 units[31] = ['53'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1734. ";
 preguntaids[31] = 1734


//  Id pregunta: 2962 Año de creación de pregunta: 2002
 questions[32]= "33)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID tienen por objeto mejorar las siguientes caracter&iacute;sticas de los sistemas de almacenamiento. Se&ntilde;ale la opci&oacute;n correcta:";
 choices[32]= new Array();
 choices[32][0] = "La seguridad y la velocidad de transferencia";
 choices[32][1] = "La capacidad de almacenamiento y la segmentaci&oacute;n correcta de los datos";
 choices[32][2] = "La velocidad de transferencia y la ausencia de errores en los datos almacenados";
 choices[32][3] = "La disponibilidad de los datos y/o el rendimiento";
 answers[32] = 3;
 units[32] = ['53'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2962. ";
 preguntaids[32] = 2962


//  Id pregunta: 3060 Año de creación de pregunta: 2002
 questions[33]= "34)  Si se comparan los diferentes sistemas de almacenamiento secundario:";
 choices[33]= new Array();
 choices[33][0] = "La velocidad de transferencia es del mismo orden en una unidad de cinta DAT que en una unidad de disco magn&eacute;tico";
 choices[33][1] = "La capacidad de almacenamiento de una cinta de cartucho normal de 0,25&quot; es similar a la de un CD-ROM de 5&quot; 1/4";
 choices[33][2] = "Los discos WORM y los magneto-opticos ofrecen la posibilidad de borrar y reescribir informaci&oacute;n";
 choices[33][3] = "En las unidades de cinta no se puede intercalar informaci&oacute;n adicional, por el contrario, para hacerlo habr&iacute;a que regrabar todo el resto de la cinta";
 answers[33] = 3;
 units[33] = ['53'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3060. ";
 preguntaids[33] = 3060


//  Id pregunta: 3118 Año de creación de pregunta: 2002
 questions[34]= "35)  Con AGP se pretende:";
 choices[34]= new Array();
 choices[34][0] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el procesador";
 choices[34][1] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el disco duro";
 choices[34][2] = "Aislar el subsistema de v&iacute;deo de la arquitectura ISA";
 choices[34][3] = "Separar los subsistemas de audio y v&iacute;deo del bus principal";
 answers[34] = 0;
 units[34] = ['53'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3118. ";
 preguntaids[34] = 3118


//  Id pregunta: 3083 Año de creación de pregunta: 2002
 questions[35]= "36)  Un sistema de almacenamiento RAID 0:";
 choices[35]= new Array();
 choices[35][0] = "Es un sistema tolerante a fallos de un disco";
 choices[35][1] = "Es un sistema que guarda en disco la informaci&oacute;n de paridad del resto de los discos";
 choices[35][2] = "Requiere al menos 5 discos";
 choices[35][3] = "Requiere como m&iacute;nimo dos discos y mejora el rendimiento en los accesos a los discos";
 answers[35] = 3;
 units[35] = ['53'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3083. ";
 preguntaids[35] = 3083


//  Id pregunta: 2925 Año de creación de pregunta: 2002
 questions[36]= "37)  La capacidad efectiva de informaci&oacute;n &uacute;til de un disco es:";
 choices[36]= new Array();
 choices[36][0] = "El tama&ntilde;o en pulgadas del disco";
 choices[36][1] = "El n&uacute;mero de bits que pueden almacenarse en el disco sin formatar";
 choices[36][2] = "El n&uacute;mero de bit que pueden almacenarse en el disco formatado";
 choices[36][3] = "El n&uacute;mero de bit que pueden almacenarse en una pista";
 answers[36] = 2;
 units[36] = ['53'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2925. ";
 preguntaids[36] = 2925


//  Id pregunta: 2843 Año de creación de pregunta: 2002
 questions[37]= "38)  En los discos &oacute;pticos (CD-ROM, WROM etc) la densidad de grabaci&oacute;n es:";
 choices[37]= new Array();
 choices[37][0] = "Constante";
 choices[37][1] = "Variable, dependiendo de la distancia al centro";
 choices[37][2] = "Depende del tipo";
 choices[37][3] = "Igual que en los discos magn&eacute;ticos";
 answers[37] = 0;
 units[37] = ['53'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2843. ";
 preguntaids[37] = 2843


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[38]= "39)  El EtherType del protocolo FCoE (Fibre Channel Over Ethernet) es:";
 choices[38]= new Array();
 choices[38][0] = "0&times;8906";
 choices[38][1] = "0x86DD";
 choices[38][2] = "0&times;0806";
 choices[38][3] = "0x809B";
 answers[38] = 0;
 units[38] = ['53'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 651. AGE A2 2015";
 preguntaids[38] = 651


//  Id pregunta: 2795 Año de creación de pregunta: 2002
 questions[39]= "40)  El tiempo de latencia en un disco:";
 choices[39]= new Array();
 choices[39][0] = "Tiempo medio necesario para que la informaci&oacute;n pase por debajo de la cabeza de lectura-escritura cuando est&aacute; posicionada sobre la pista adecuada";
 choices[39][1] = "Corresponde al tiempo empleado para realizar la mitad del giro";
 choices[39][2] = "Es equivalente al tiempo de espera";
 choices[39][3] = "Todas las respuestas anteriores son ciertas";
 answers[39] = 3;
 units[39] = ['53'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2795. ";
 preguntaids[39] = 2795


//  Id pregunta: 1898 Año de creación de pregunta: 2016
 questions[40]= "41)  Para un sistema de almacenamiento de cien unidades de disco, &iquest;Cu&aacute;l de los siguientes ofrece mayor capacidad neta de almacenamiento?: .";
 choices[40]= new Array();
 choices[40][0] = "RAI1";
 choices[40][1] = "RAI5";
 choices[40][2] = "RAI6";
 choices[40][3] = "RAID 0+1";
 answers[40] = 1;
 units[40] = ['53'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1898. ";
 preguntaids[40] = 1898


//  Id pregunta: 2877 Año de creación de pregunta: 2002
 questions[41]= "42)  En una unidad de disco magn&eacute;tico, el tiempo de acceso a la informaci&oacute;n viene dado por:";
 choices[41]= new Array();
 choices[41][0] = "El tiempo de latencia";
 choices[41][1] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de latencia";
 choices[41][2] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de transferencia";
 choices[41][3] = "La longitud de la pista partido por la velocidad de rotaci&oacute;n m&aacute;s el tiempo de posicionamiento de la cabeza";
 answers[41] = 1;
 units[41] = ['53'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2877. ";
 preguntaids[41] = 2877


//  Id pregunta: 2701 Año de creación de pregunta: 2002
 questions[42]= "43)  Con 3 discos SCSI de 145 Gbytes en modalidad RAID 5, se obtiene una capacidad total neta de:";
 choices[42]= new Array();
 choices[42][0] = "145 Gbytes";
 choices[42][1] = "435 Gbytes";
 choices[42][2] = "290 Gbytes";
 choices[42][3] = "217.5 Gbytes";
 answers[42] = 2;
 units[42] = ['53'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2701. ";
 preguntaids[42] = 2701


//  Id pregunta: 1741 Año de creación de pregunta: 2016
 questions[43]= "44)  En relaci&oacute;n con las definiciones de RAID (Redundant Array of Inexpensive Disks), indique la respuesta err&oacute;nea:";
 choices[43]= new Array();
 choices[43][0] = "Un RAID 6 es similar a RAID 5, salvo que calcula dos bloques de paridad independientes por cada escritura, mandando cada uno de los bloques de paridad a un disco diferente.";
 choices[43][1] = "Un RAID 4 Consiste en &ldquo;stripping&rdquo; a nivel de bloque, como RAID o m&aacute;s un disco de paridad dedicado. Cada bloque escrito es dividido en partes, se obtiene un bloque de paridad que permite recomponer el bloque inicial en caso de p&eacute;rdida de alguna de las partes.";
 choices[43][2] = "Un RAID 2 divide los bits a nivel de bloque. Por cada &ldquo;palabra&rdquo; enviada a escritura calcula un c&oacute;digo de Hamming que permite recuperar la informaci&oacute;n en caso de fallo de un disco y env&iacute;a posteriormente cada bloque a su disco correspondiente para mantener la paridad.";
 choices[43][3] = "Un RAID 5 Este nivel de RAID es similar a RAID 4, salvo que no utiliza un disco de paridad dedicado, sino que distribuye los bloques de paridad por todos los discos del array.";
 answers[43] = 2;
 units[43] = ['53'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 1741. ";
 preguntaids[43] = 1741


//  Id pregunta: 1897 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; sistema de RAID proporciona protecci&oacute;n contra fallos dobles de discos y contra fallos cuando se est&aacute; reconstruyendo un disco?:";
 choices[44]= new Array();
 choices[44][0] = "RAI3";
 choices[44][1] = "RAI5";
 choices[44][2] = "RAI6";
 choices[44][3] = "RAID 0+1";
 answers[44] = 2;
 units[44] = ['53'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1897. ";
 preguntaids[44] = 1897


//  Id pregunta: 1297 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[45]= new Array();
 choices[45][0] = "Petta byte (PS)";
 choices[45][1] = "Terabyte (TS)";
 choices[45][2] = "Yottabyte (YS)";
 choices[45][3] = "Zettabyte (ZS)";
 answers[45] = 2;
 units[45] = ['53'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1297. ";
 preguntaids[45] = 1297


//  Id pregunta: 3173 Año de creación de pregunta: 2002
 questions[46]= "47)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID-3 se caracterizan por:";
 choices[46]= new Array();
 choices[46][0] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad en un disco dedicado";
 choices[46][1] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad distribuido";
 choices[46][2] = "Garantizar la disponibilidad de los datos mediante la redundancia completa en discos espejo";
 choices[46][3] = "Garantizar la disponibilidad de los datos mediante el control de paridad redundante";
 answers[46] = 0;
 units[46] = ['53'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3173. ";
 preguntaids[46] = 3173


//  Id pregunta: 2929 Año de creación de pregunta: 2002
 questions[47]= "48)  La compresi&oacute;n o compactaci&oacute;n de datos en los dispositivos de almacenamiento magn&eacute;tico, es una t&eacute;cnica efectiva para:";
 choices[47]= new Array();
 choices[47][0] = "Reducir la ocupaci&oacute;n de los registros en dispositivos DASD";
 choices[47][1] = "Reducir el n&uacute;mero de I-O's, mejorando la eficiencia del procesador";
 choices[47][2] = "Mejorar la eficiencia del buffer de datos";
 choices[47][3] = "Todas las anteriores respuestas son correctas";
 answers[47] = 3;
 units[47] = ['53'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2929. ";
 preguntaids[47] = 2929


//  Id pregunta: 3099 Año de creación de pregunta: 2002
 questions[48]= "49)  Una de las siguientes caracter&iacute;sticas no es com&uacute;n a los discos WORM y WMRA:";
 choices[48]= new Array();
 choices[48][0] = "Poseen una gran capacidad de almacenamiento";
 choices[48][1] = "Son de f&aacute;cil manipulaci&oacute;n y transportabilidad";
 choices[48][2] = "Permiten escribir y borrar datos al igual que un disco magn&eacute;tico";
 choices[48][3] = "Son insensibles frente a las radiaciones electromagn&eacute;ticas";
 answers[48] = 2;
 units[48] = ['53'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3099. ";
 preguntaids[48] = 3099


//  Id pregunta: 2873 Año de creación de pregunta: 2002
 questions[49]= "50)  En una operaci&oacute;n de grabaci&oacute;n sobre una cinta magn&eacute;tica:";
 choices[49]= new Array();
 choices[49][0] = "Se escribe un car&aacute;cter";
 choices[49][1] = "Se escribe un bloque";
 choices[49][2] = "Se lee un dato";
 choices[49][3] = "Se escribe un registro l&oacute;gico";
 answers[49] = 1;
 units[49] = ['53'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2873. ";
 preguntaids[49] = 2873


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[50]= "51)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[50]= new Array();
 choices[50][0] = "6 TB.";
 choices[50][1] = "5 TB.";
 choices[50][2] = "7 TB.";
 choices[50][3] = "3 TB.";
 answers[50] = 1;
 units[50] = ['53'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 655. Xunta de Galicia 2015";
 preguntaids[50] = 655


//  Id pregunta: 1620 Año de creación de pregunta: 2016
 questions[51]= "52)  Dentro de las topolog&iacute;as SAN, se&ntilde;ale cu&aacute;l es la que permite conectar hasta 126 dispositivos:";
 choices[51]= new Array();
 choices[51][0] = "Punto a punto";
 choices[51][1] = "Fibre Channel Arbitred loop";
 choices[51][2] = "Switched fabric";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = 1;
 units[51] = ['53'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1620. ";
 preguntaids[51] = 1620


//  Id pregunta: 3023 Año de creación de pregunta: 2002
 questions[52]= "53)  SAN:";
 choices[52]= new Array();
 choices[52][0] = "Es un fabricante americano de hardware y software";
 choices[52][1] = "Es una red de fibra &oacute;ptica dedicada para el almacenamiento";
 choices[52][2] = "Es una red de &aacute;rea local muy peque&ntilde;a (Simple Area Network)";
 choices[52][3] = "Corresponde con la tecnolog&iacute;a Software Adaptative Networking que permite que los nodos de conmutaci&oacute;n de las redes tengan procesamiento inteligente liberando a los clientes de incompatibilidades de protocolos y de gran cantidad de procesamiento";
 answers[52] = 1;
 units[52] = ['53'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3023. ";
 preguntaids[52] = 3023


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[53]= new Array();
 choices[53][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[53][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[53][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[53][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[53] = 2;
 units[53] = ['53'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 647. AGE A1 2015";
 preguntaids[53] = 647


//  Id pregunta: 3091 Año de creación de pregunta: 2002
 questions[54]= "55)  Un sistema SUN:";
 choices[54]= new Array();
 choices[54][0] = "Puede utilizar procesadores Sparc";
 choices[54][1] = "Puede utilizar procesadores MIPS";
 choices[54][2] = "Puede utilizar procesadores Intel";
 choices[54][3] = "A y C son ciertas";
 answers[54] = 3;
 units[54] = ['53'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3091. ";
 preguntaids[54] = 3091


//  Id pregunta: 1621 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA en relaci&oacute;n con los sistemas de discos m&uacute;ltiples RAID (Redundant Array of Independent Disks)?";
 choices[55]= new Array();
 choices[55][0] = "Un RAID 1 crea una copia exacta (o espejo) de un conjunto de datos en dos o m&aacute;s discos.";
 choices[55][1] = "Un RAID 1 resulta &uacute;til cuando el rendimiento en lectura es m&aacute;s importante que la capacidad.";
 choices[55][2] = "Un RAID 2 divide los datos a nivel de bits en lugar de a nivel de bloques y usa un c&oacute;digo de Hamming para la correcci&oacute;n de errores.";
 choices[55][3] = "Un RAID o (tambi&eacute;n llamado conjunto dividido o volumen dividido) distribuye los datos equitativamente entre dos o m&aacute;s discos con informaci&oacute;n de paridad para proporcionar redundancia.";
 answers[55] = 3;
 units[55] = ['53'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1621. ";
 preguntaids[55] = 1621


//  Id pregunta: 2992 Año de creación de pregunta: 2002
 questions[56]= "57)  NAS:";
 choices[56]= new Array();
 choices[56][0] = "Es un dispositivo de almacenamiento conectado a red de alta capacidad";
 choices[56][1] = "Es un sistema de emisi&oacute;n de alarmas a trav&eacute;s de redes";
 choices[56][2] = "Es una base de datos orientada a objetos";
 choices[56][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[56] = 0;
 units[56] = ['53'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2992. ";
 preguntaids[56] = 2992


//  Id pregunta: 1994 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un formato de cintas magn&eacute;ticas de almacenamiento?";
 choices[57]= new Array();
 choices[57][0] = "DAT";
 choices[57][1] = "DLT.";
 choices[57][2] = "TRACBAN.";
 choices[57][3] = "LTO.";
 answers[57] = 2;
 units[57] = ['53'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1994. ";
 preguntaids[57] = 1994


//  Id pregunta: 3140 Año de creación de pregunta: 2002
 questions[58]= "59)  Los c&oacute;decs DivX permiten:";
 choices[58]= new Array();
 choices[58][0] = "Escuchar la radio en un PC";
 choices[58][1] = "Ver la TV en un PC";
 choices[58][2] = "Conectar cualquier dispositivo Bluetooth a un PC";
 choices[58][3] = "Ver v&iacute;deos en un PC";
 answers[58] = 3;
 units[58] = ['53'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3140. ";
 preguntaids[58] = 3140


//  Id pregunta: 1368 Año de creación de pregunta: 2016
 questions[59]= "60)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[59]= new Array();
 choices[59][0] = "Tape Management System.";
 choices[59][1] = "Transaction Multiplexing System.";
 choices[59][2] = "Tape Mapping System.";
 choices[59][3] = "Transaction Management System.";
 answers[59] = 0;
 units[59] = ['53'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 1368. ";
 preguntaids[59] = 1368


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[60]= "61)  1 Saganbyte se corresponde con:";
 choices[60]= new Array();
 choices[60][0] = "1024 Brontobytes.";
 choices[60][1] = "1024 YottaBytes.";
 choices[60][2] = "1024 Jotabytes.";
 choices[60][3] = "1024 Geopbytes.";
 answers[60] = 3;
 units[60] = ['53'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 649. AGE A2 2015";
 preguntaids[60] = 649


//  Id pregunta: 1520 Año de creación de pregunta: 2016
 questions[61]= "62)  En el &aacute;mbito del almacenamiento de datos &iquest;cu&aacute;l de las siguientes afirmaciones sobre un sistema SAN es correcta?";
 choices[61]= new Array();
 choices[61][0] = "Las aplicaciones piden datos directamente al sistema de ficheros, si bien el almacenamiento es remoto al sistema de ficheros.";
 choices[61][1] = "El servidor y el dispositivo de almacenamiento est&aacute;n directamente conectados (hay un enlace punto a punto).";
 choices[61][2] = "Comparte la capacidad de almacenamiento de un servidor con otros dispositivos clientes a trav&eacute;s de una red, haciendo uso de un sistema operativo optimizado.";
 choices[61][3] = "Al emplear la red local de servicio en el almacenamiento de datos merma la capacidad de dicha LAN.";
 answers[61] = 0;
 units[61] = ['53'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1520. ";
 preguntaids[61] = 1520


//  Id pregunta: 3122 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes denominaciones no corresponde a un formato comercial de DVD?:";
 choices[62]= new Array();
 choices[62][0] = "DVD+RW";
 choices[62][1] = "DVD-R";
 choices[62][2] = "DVD-RE";
 choices[62][3] = "DVD RAM";
 answers[62] = 2;
 units[62] = ['53'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3122. ";
 preguntaids[62] = 3122


//  Id pregunta: 1202 Año de creación de pregunta: 2016
 questions[63]= "64)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[63]= new Array();
 choices[63][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[63][1] = "RAID 0.";
 choices[63][2] = "RAID 1.";
 choices[63][3] = "RAID 5.";
 answers[63] = 1;
 units[63] = ['53'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1202. ";
 preguntaids[63] = 1202


//  Id pregunta: 3162 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;ntos niveles RAID est&aacute;ndar existen?:";
 choices[64]= new Array();
 choices[64][0] = "4";
 choices[64][1] = "5";
 choices[64][2] = "6";
 choices[64][3] = "7";
 answers[64] = 3;
 units[64] = ['53'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3162. ";
 preguntaids[64] = 3162


//  Id pregunta: 2561 Año de creación de pregunta: 2004
 questions[65]= "66)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[65]= new Array();
 choices[65][0] = "iSCSI";
 choices[65][1] = "sSCSI";
 choices[65][2] = "iFCP";
 choices[65][3] = "FCIP";
 answers[65] = 3;
 units[65] = ['53'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2561. Examen Seg-Social A 2004";
 preguntaids[65] = 2561


//  Id pregunta: 1519 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;ntos discos f&iacute;sicos son necesarios como m&iacute;nimo para poder establecer una configuraci&oacute;n en RAID 5?";
 choices[66]= new Array();
 choices[66][0] = "1";
 choices[66][1] = "2";
 choices[66][2] = "3";
 choices[66][3] = "4";
 answers[66] = 2;
 units[66] = ['53'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1519. ";
 preguntaids[66] = 1519


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique la afirmaci&oacute;n correcta sobre la configuraci&oacute;n de almacenamiento RAID 3:";
 choices[67]= new Array();
 choices[67][0] = "Consiste en hacer stripping a nivel de byte m&aacute;s un disco de paridad dedicado.";
 choices[67][1] = "Es la configuraci&oacute;n m&aacute;s utilizada en la pr&aacute;ctica.";
 choices[67][2] = "Distribuye los datos a nivel de bloque.";
 choices[67][3] = "Implementa el mirroring o espejo de discos.";
 answers[67] = 0;
 units[67] = ['53'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 650. AGE A2 2015";
 preguntaids[67] = 650


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[68]= new Array();
 choices[68][0] = "As&iacute;ncrona.";
 choices[68][1] = "Log-shipping.";
 choices[68][2] = "Disk buffering.";
 choices[68][3] = "S&iacute;ncrona.";
 answers[68] = 3;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 652. Xunta de Galicia 2015";
 preguntaids[68] = 652


//  Id pregunta: 3061 Año de creación de pregunta: 2002
 questions[69]= "70)  Si un disco tiene 7 pistas por cilindro y la capacidad  de cada  pista es de 2000 caracteres, para copiar una cinta que contiene 300 registros de 100 caracteres cada uno, &iquest;cu&aacute;ntos cilindros har&iacute;an falta?:";
 choices[69]= new Array();
 choices[69][0] = "3 cilindros";
 choices[69][1] = "2 cilindros";
 choices[69][2] = "4 cilindros";
 choices[69][3] = "5 cilindros";
 answers[69] = 0;
 units[69] = ['53'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3061. ";
 preguntaids[69] = 3061


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[70]= "71)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[70]= new Array();
 choices[70][0] = "6 TB.";
 choices[70][1] = "8 TB.";
 choices[70][2] = "7 TB.";
 choices[70][3] = "4 TB.";
 answers[70] = 3;
 units[70] = ['53'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 654. Xunta de Galicia 2015";
 preguntaids[70] = 654


//  Id pregunta: 3147 Año de creación de pregunta: 2002
 questions[71]= "72)  SCSI responde a las siglas de:";
 choices[71]= new Array();
 choices[71][0] = "Smart Computer System Interface, Interfaz elegante para sistemas de computadora";
 choices[71][1] = "Small Computer System Interface, Interfaz para peque&ntilde;os sistemas de computadora";
 choices[71][2] = "Synchonized Computer Serial Interface, Interfaz serie para ordenadores sincronizados";
 choices[71][3] = "Superb Computation Scale- Integration, escala de integraci&oacute;n para computaci&oacute;n s&uacute;per";
 answers[71] = 1;
 units[71] = ['53'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3147. ";
 preguntaids[71] = 3147


//  Id pregunta: 1993 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes NO es una topolog&iacute;a f&iacute;sica de las redes de almacenamiento SAN?";
 choices[72]= new Array();
 choices[72][0] = "Estrella.";
 choices[72][1] = "Anillo.";
 choices[72][2] = "Malla.";
 choices[72][3] = "Jer&aacute;rquica";
 answers[72] = 3;
 units[72] = ['53'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 1993. ";
 preguntaids[72] = 1993


//  Id pregunta: 2819 Año de creación de pregunta: 2002
 questions[73]= "74)  En el sistema operativo Unix, las tuberias (pipes) son mecanismos de comunicaci&oacute;n que permiten la transferencia de datos entre dos procesos. &iquest;C&oacute;mo podr&iacute;amos crear una tuber&iacute;a con el nombre TUB?:";
 choices[73]= new Array();
 choices[73][0] = "mknod TUB p";
 choices[73][1] = "En Unix no se puede dar una nombre a una tuber&iacute;a";
 choices[73][2] = "mkp TUB";
 choices[73][3] = "mkpipe TUB";
 answers[73] = 0;
 units[73] = ['53'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2819. ";
 preguntaids[73] = 2819


//  Id pregunta: 1370 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[74]= new Array();
 choices[74][0] = "33%";
 choices[74][1] = "20%";
 choices[74][2] = "50%";
 choices[74][3] = "0%";
 answers[74] = 0;
 units[74] = ['53'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1370. ";
 preguntaids[74] = 1370


