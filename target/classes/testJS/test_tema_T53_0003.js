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
//  Id pregunta: 10325 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes sentencias es verdadera?";
 choices[0]= new Array();
 choices[0][0] = "El est&aacute;ndar SATA 3 soporta transferencias hasta 4.8 Gbps";
 choices[0][1] = "La versi&oacute;n ATA-8 soporta velocidades hasta 12 Gbps";
 choices[0][2] = "El SAS 600 consigue velocidades de hasta 16 Gbps";
 choices[0][3] = "Los discos SAS han sido progresivamente sustituidos por los SCSI,";
 answers[0] = 0;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10325. ";
 preguntaids[0] = 10325


//  Id pregunta: 10968 Año de creación de pregunta: 2015
 questions[1]= "2)  Se&ntilde;ale la FALSA en lo relativo a la tecnolog&iacute;a RAID de discos duros:";
 choices[1]= new Array();
 choices[1][0] = "En RAID 5 los bloques de paridad solo se leen cuando la lectura de un sector de datos provoca un error de CRC.";
 choices[1][1] = "Un RAID 6 ampl&iacute;a el nivel RAID 5 a&ntilde;adiendo otro bloque de paridad.";
 choices[1][2] = "El RAID 6 proporciona protecci&oacute;n contra fallos dobles de discos y contra fallos cuando se est&aacute; reconstruyendo un disco.";
 choices[1][3] = "Un RAID 2 necesitar&iacute;a como m&iacute;nimo 32 discos (los necesarios para formar una palabra).";
 answers[1] = 3;
 units[1] = ['53'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10968. ";
 preguntaids[1] = 10968


//  Id pregunta: 9597 Año de creación de pregunta: 2014
 questions[2]= "3)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[2]= new Array();
 choices[2][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[2][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[2][2] = "Ambos operan a nivel de bloque.";
 choices[2][3] = "Ambos operan a nivel de fichero.";
 answers[2] = 0;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9597. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[2] = 9597


//  Id pregunta: 9749 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Qu&eacute; combinaci&oacute;n de discos RAID presenta un mayor rendimiento?";
 choices[3]= new Array();
 choices[3][0] = "RAID 0";
 choices[3][1] = "RAID 5";
 choices[3][2] = "RAID 1+0";
 choices[3][3] = "RAID 0+1";
 answers[3] = 0;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9749. ";
 preguntaids[3] = 9749


//  Id pregunta: 10514 Año de creación de pregunta: 2015
 questions[4]= "5)  Cu&aacute;l de las siguientes caracter&iacute;sticas responde a las que posee un disco de tipo SSD (Solid State Drive)";
 choices[4]= new Array();
 choices[4][0] = "Usan la misma interfaz que los discos duros convencionales y son por tanto f&aacute;cilmente intercambiables sin necesidades de tarjetas adicionales";
 choices[4][1] = "Usan platos giratorios magn&eacute;ticos";
 choices[4][2] = "Son m&aacute;s sensibles a los golpes que los discos convencionales";
 choices[4][3] = "";
 answers[4] = 0;
 units[4] = ['53'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10514. ";
 preguntaids[4] = 10514


//  Id pregunta: 9746 Año de creación de pregunta: 2014
 questions[5]= "6)  En los discos duros magn&eacute;ticos, &iquest;que significa el tiempo de latencia media?";
 choices[5]= new Array();
 choices[5][0] = "Tiempo medio que tarda el cabezal en situarse en la pista deseada";
 choices[5][1] = "Tiempo medio que tarda el cabezal en situarse en la pista y sector deseados";
 choices[5][2] = "Tiempo medio que tarda el cabezal en situarse en el sector deseado, una vez posicionado en la pista";
 choices[5][3] = "Tiempo medio que tarda la controladora en procesar un requerimiento de datos";
 answers[5] = 2;
 units[5] = ['53'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9746. ";
 preguntaids[5] = 9746


//  Id pregunta: 8717 Año de creación de pregunta: 2013
 questions[6]= "7)  Los dispositivos f&iacute;sicos que se utilizan para conectar servidores a trav&eacute;s de una red t&iacute;picamente de fibra con sus dispositivos de almacenamiento, se llaman:";
 choices[6]= new Array();
 choices[6][0] = "LUN";
 choices[6][1] = "ESX";
 choices[6][2] = "HBA";
 choices[6][3] = "IDS";
 answers[6] = 2;
 units[6] = ['53'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8717. Examen TICA2-2011";
 preguntaids[6] = 8717


//  Id pregunta: 8668 Año de creación de pregunta: 2013
 questions[7]= "8)  &iquest;Qu&eacute; es Zoning?";
 choices[7]= new Array();
 choices[7][0] = "Es un concepto perteneciente a las redes SAN de FC";
 choices[7][1] = "Cada zona se comporta como si en la red SAN s&oacute;lo existieran los dispositivos que forman parte de ella.";
 choices[7][2] = "El servidor y la cabina debe estar en la misma zona y adicionalmente la cabina debe permitir el acceso del servicio a dicha LUN.";
 choices[7][3] = "Todas son v&aacute;lidas";
 answers[7] = 3;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8668. ";
 preguntaids[7] = 8668


//  Id pregunta: 9595 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[8]= new Array();
 choices[8][0] = "33%";
 choices[8][1] = "20%";
 choices[8][2] = "50%";
 choices[8][3] = "0%";
 answers[8] = 0;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9595. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[8] = 9595


//  Id pregunta: 8667 Año de creación de pregunta: 2013
 questions[9]= "10)  &iquest;Qu&eacute; es LUN Masking?";
 choices[9]= new Array();
 choices[9][0] = "La cabina presenta una LUN a un servidor y &eacute;ste puede acceder.";
 choices[9][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[9][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSI.";
 choices[9][3] = "Todos son v&aacute;lidas";
 answers[9] = 3;
 units[9] = ['53'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8667. ";
 preguntaids[9] = 8667


//  Id pregunta: 8812 Año de creación de pregunta: 2013
 questions[10]= "11)  Acerca de Fibre Channel, se puede decir:";
 choices[10]= new Array();
 choices[10][0] = "El protocolo sigue el modelo de referencia OSI.";
 choices[10][1] = "Es un protocolo con 5 capas.";
 choices[10][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[10][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[10] = 1;
 units[10] = ['53', '106'];
 blocks[10] = ['B2', 'B4'];
 comments[10] = "Id Pregunta: 8812. ";
 preguntaids[10] = 8812


//  Id pregunta: 9573 Año de creación de pregunta: 2014
 questions[11]= "12)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[11]= new Array();
 choices[11][0] = "Tape Management System.";
 choices[11][1] = "Transaction Multiplexing System.";
 choices[11][2] = "Tape Mapping System.";
 choices[11][3] = "Transaction Management System.";
 answers[11] = 0;
 units[11] = ['53'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9573. TIC A2 2013 libre";
 preguntaids[11] = 9573


//  Id pregunta: 9747 Año de creación de pregunta: 2014
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[12]= new Array();
 choices[12][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[12][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[12][2] = "La latencia de acceso a los datos es menor";
 choices[12][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[12] = 3;
 units[12] = ['53'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9747. ";
 preguntaids[12] = 9747


//  Id pregunta: 8666 Año de creación de pregunta: 2013
 questions[13]= "14)  &iquest;Qu&eacute; es WAFS?";
 choices[13]= new Array();
 choices[13][0] = "Wide Area File Services";
 choices[13][1] = "Una evoluci&oacute;n del empaquetado de audio WAV";
 choices[13][2] = "Un tipo de File System";
 choices[13][3] = "Una t&eacute;cnica de compresi&oacute;n de imagen.";
 answers[13] = 0;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8666. ";
 preguntaids[13] = 8666


//  Id pregunta: 9596 Año de creación de pregunta: 2014
 questions[14]= "15)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[14]= new Array();
 choices[14][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[14][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[14][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[14][3] = "Al gateway para conectar una NAS a una red SAN.";
 answers[14] = 2;
 units[14] = ['53'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9596. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[14] = 9596


//  Id pregunta: 9574 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes comandos de Solaris 11 NO devuelve informaci&oacute;n relativa a discos?";
 choices[15]= new Array();
 choices[15][0] = "iostat";
 choices[15][1] = "df";
 choices[15][2] = "sar";
 choices[15][3] = "nc";
 answers[15] = 3;
 units[15] = ['53'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9574. TIC A2 2013 libre";
 preguntaids[15] = 9574


//  Id pregunta: 9594 Año de creación de pregunta: 2014
 questions[16]= "17)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[16]= new Array();
 choices[16][0] = "300 MB/s.";
 choices[16][1] = "900 MB/s.";
 choices[16][2] = "600 MB/s.";
 choices[16][3] = "150 MB/s.";
 answers[16] = 2;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9594. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[16] = 9594


//  Id pregunta: 8669 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[17]= new Array();
 choices[17][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[17][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric (red SAN).";
 choices[17][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[17][3] = "Todas son correctas.";
 answers[17] = 3;
 units[17] = ['53'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8669. ";
 preguntaids[17] = 8669


//  Id pregunta: 8671 Año de creación de pregunta: 2013
 questions[18]= "19)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[18]= new Array();
 choices[18][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[18][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[18][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso, es equivalente a replicaci&oacute;n discreta.";
 choices[18][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[18] = 3;
 units[18] = ['53'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8671. Examen TIC A1 2011";
 preguntaids[18] = 8671


//  Id pregunta: 10865 Año de creación de pregunta: 2015
 questions[19]= "20)  SATA III ofrece una transferencia de datos de:";
 choices[19]= new Array();
 choices[19][0] = "100 MB/s";
 choices[19][1] = "200 MB/s";
 choices[19][2] = "300 MB/s";
 choices[19][3] = "600 MB/s";
 answers[19] = 3;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10865. ";
 preguntaids[19] = 10865


//  Id pregunta: 10798 Año de creación de pregunta: 2015
 questions[20]= "21)  El n&uacute;mero m&iacute;nimo de discos necesarios en RAID 6 es:";
 choices[20]= new Array();
 choices[20][0] = "2";
 choices[20][1] = "3";
 choices[20][2] = "4";
 choices[20][3] = "5";
 answers[20] = 2;
 units[20] = ['53'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10798. ";
 preguntaids[20] = 10798


//  Id pregunta: 10114 Año de creación de pregunta: 2015
 questions[21]= "22)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[21]= new Array();
 choices[21][0] = "6 Gbps.";
 choices[21][1] = "16 Gbps.";
 choices[21][2] = "8 Gbps.";
 choices[21][3] = "3 Gbps.";
 answers[21] = 1;
 units[21] = ['50', '51', '53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10114. Examen TIC A2 2014";
 preguntaids[21] = 10114


//  Id pregunta: 8716 Año de creación de pregunta: 2013
 questions[22]= "23)  &iquest;C&oacute;mo se llama la conexi&oacute;n de Intel que supera en velocidad a USB 3.0, basada en LightPeak?";
 choices[22]= new Array();
 choices[22][0] = "Thundercat";
 choices[22][1] = "LightFire";
 choices[22][2] = "Thunderbolt";
 choices[22][3] = "USB 4.0";
 answers[22] = 2;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8716. Examen TICA2-2011";
 preguntaids[22] = 8716


//  Id pregunta: 8715 Año de creación de pregunta: 2013
 questions[23]= "24)  &iquest;Con qu&eacute; dispositivo se relaciona la tecnolog&iacute;a de reconocimiento de pulso ac&uacute;stico?";
 choices[23]= new Array();
 choices[23][0] = "Memoria RAM";
 choices[23][1] = "Pantalla t&aacute;ctil.";
 choices[23][2] = "Tarjeta de sonido.";
 choices[23][3] = "Disco duro.";
 answers[23] = 1;
 units[23] = ['53'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8715. Examen TICA2-2011";
 preguntaids[23] = 8715


//  Id pregunta: 8718 Año de creación de pregunta: 2013
 questions[24]= "25)  En un sistema de almacenamiento con 6 discos de 400 GB de capacidad cada uno, &iquest;cu&aacute;l de las siguientes configuraciones RAID tiene al menos 1 TB de capacidad y podr&iacute;a resistir el fallo de 3 discos en algunas ocasiones sin p&eacute;rdida de datos?";
 choices[24]= new Array();
 choices[24][0] = "RAID 6+0";
 choices[24][1] = "RAID 5+0";
 choices[24][2] = "RAID 5+1";
 choices[24][3] = "RAID 0+1";
 answers[24] = 3;
 units[24] = ['53'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8718. Examen TICA2-2011";
 preguntaids[24] = 8718


//  Id pregunta: 9822 Año de creación de pregunta: 2015
 questions[25]= "26)  Indique cu&aacute;l es el orden correcto de las siguientes tecnolog&iacute;as de disco, de menor a mayor tiempo de latencia:";
 choices[25]= new Array();
 choices[25][0] = "SCSI, IDE y SATA.";
 choices[25][1] = "SATA, SSD y FC.";
 choices[25][2] = "SSD, SCSI e IDE.";
 choices[25][3] = "IDE, SSD y SAS.";
 answers[25] = 2;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9822. ";
 preguntaids[25] = 9822


//  Id pregunta: 9575 Año de creación de pregunta: 2014
 questions[26]= "27)  Indique cu&aacute;l de los siguientes NO es un mecanismo en la gesti&oacute;n de una SAN para incrementar la seguridad:";
 choices[26]= new Array();
 choices[26][0] = "Masking";
 choices[26][1] = "Cluning";
 choices[26][2] = "Zoning";
 choices[26][3] = "Port Binding";
 answers[26] = 1;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9575. TIC A2 2013 libre";
 preguntaids[26] = 9575


//  Id pregunta: 8670 Año de creación de pregunta: 2013
 questions[27]= "28)  Identificar que protocolo NO est&aacute; dise&ntilde;ado especificamente para la extensi&oacute;n de las SAN sobre protocolo IP";
 choices[27]= new Array();
 choices[27][0] = "iFTP";
 choices[27][1] = "iSCSCI";
 choices[27][2] = "FCIP";
 choices[27][3] = "iFCP";
 answers[27] = 0;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8670. ";
 preguntaids[27] = 8670


//  Id pregunta: 10076 Año de creación de pregunta: 2015
 questions[28]= "29)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[28]= new Array();
 choices[28][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[28][1] = "RAID 0.";
 choices[28][2] = "RAID 1.";
 choices[28][3] = "RAID 5.";
 answers[28] = 1;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 10076. Examen TIC A2 2014";
 preguntaids[28] = 10076


//  Id pregunta: 9823 Año de creación de pregunta: 2015
 questions[29]= "30)  Elija la opci&oacute;n correcta:";
 choices[29]= new Array();
 choices[29][0] = "La copia de seguridad incremental hace una copia de seguridad de todos los archivos.";
 choices[29][1] = "La copia de seguridad diferencial hace una copia de seguridad de todos los archivos.";
 choices[29][2] = "La copia de seguridad diferencial requiere m&aacute;s espacio en cinta y tiempo que la copia de seguridad incremental.";
 choices[29][3] = "La copia de seguridad incremental hace una copia de seguridad solo de los archivos que han cambiado desde la &uacute;ltima copia de seguridad diferencial.";
 answers[29] = 2;
 units[29] = ['53'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9823. ";
 preguntaids[29] = 9823


//  Id pregunta: 9101 Año de creación de pregunta: 2014
 questions[30]= "31)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[30]= new Array();
 choices[30][0] = "RAID 1";
 choices[30][1] = "RAID 3";
 choices[30][2] = "RAID 4";
 choices[30][3] = "RAID 6";
 answers[30] = 2;
 units[30] = ['53'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9101. Examen TIC-A1 2013";
 preguntaids[30] = 9101


//  Id pregunta: 9587 Año de creación de pregunta: 2014
 questions[31]= "32)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[31]= new Array();
 choices[31][0] = "Enlace.";
 choices[31][1] = "Red.";
 choices[31][2] = "Transporte.";
 choices[31][3] = "Aplicaci&oacute;n.";
 answers[31] = 2;
 units[31] = ['53'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9587. TIC A2 2013 libre";
 preguntaids[31] = 9587


//  Id pregunta: 10134 Año de creación de pregunta: 2015
 questions[32]= "33)  Los switches FC (Fibre Channel) de las redes SAN (Storage Area Network) permiten en la actualidad el uso de &oacute;pticas SFP (Small Form-factor Pluggable) de:";
 choices[32]= new Array();
 choices[32][0] = "4 Gb/s, 8Gb/s, 16 Gb/s";
 choices[32][1] = "8 Gb/s, 16 Gb/s, 32 Gb/s";
 choices[32][2] = "16Gb/s, 32 Gb/s, 64Gb/s";
 choices[32][3] = "1Gbs, 10Gbs, 100Gbs";
 answers[32] = 0;
 units[32] = ['53'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 10134. Examen TIC A1 2014";
 preguntaids[32] = 10134


//  Id pregunta: 10136 Año de creación de pregunta: 2015
 questions[33]= "34)  Tener la funcionalidad &quot;Thin Provisioning&quot; en una cabina de almacenamiento conectada a una red SAN nos permite:";
 choices[33]= new Array();
 choices[33][0] = "Asignar menor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[33][1] = "Sobreasignar mayor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[33][2] = "Asignar mediante peque&ntilde;os incrementos los nuevos discos que se incorporen en caliente.";
 choices[33][3] = "Provisionar una capa de control para la virtualizaci&oacute;n del almacenamiento en cloud.";
 answers[33] = 1;
 units[33] = ['53'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10136. Examen TIC A1 2014";
 preguntaids[33] = 10136


//  Id pregunta: 9748 Año de creación de pregunta: 2014
 questions[34]= "35)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[34]= new Array();
 choices[34][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[34][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[34][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[34][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[34] = 1;
 units[34] = ['53'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9748. ";
 preguntaids[34] = 9748


//  Id pregunta: 10967 Año de creación de pregunta: 2015
 questions[35]= "36)  Se&ntilde;ale la correcta en lo relativo a discos RAID:";
 choices[35]= new Array();
 choices[35][0] = "Un RAID 2 divide los datos a nivel de bloques y usa un c&oacute;digo de Hamming para la correcci&oacute;n de errores.";
 choices[35][1] = "Un RAID 4 usa divisi&oacute;n a nivel de byte con un disco de paridad dedicado.";
 choices[35][2] = "Un RAID 3 usa divisi&oacute;n a nivel de bytes con un disco de paridad dedicado.";
 choices[35][3] = "Un RAID 5 requiere al menos 4 unidades de disco para ser implementado.";
 answers[35] = 1;
 units[35] = ['53'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10967. ";
 preguntaids[35] = 10967


