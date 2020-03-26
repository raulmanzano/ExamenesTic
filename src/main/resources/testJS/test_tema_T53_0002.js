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
//  Id pregunta: 7607 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[0]= new Array();
 choices[0][0] = "No precisa se&ntilde;al de reloj externa.";
 choices[0][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros.";
 choices[0][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas.";
 choices[0][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus.";
 answers[0] = 1;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7607. Map 2006";
 preguntaids[0] = 7607


//  Id pregunta: 3483 Año de creación de pregunta: 2006
 questions[1]= "2)  Tres discos duros con una direcci&oacute;n de red &uacute;nica y propia y sirviendo ficheros a usuarios de estaciones de trabajo en LAN es una";
 choices[1]= new Array();
 choices[1][0] = "SAN";
 choices[1][1] = "NAS";
 choices[1][2] = "RAID";
 choices[1][3] = "Cabina de discos";
 answers[1] = 1;
 units[1] = ['53'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3483. ";
 preguntaids[1] = 3483


//  Id pregunta: 8657 Año de creación de pregunta: 2013
 questions[2]= "3)  &iquest;Qu&eacute; es CAS?";
 choices[2]= new Array();
 choices[2][0] = "Content Address Storage";
 choices[2][1] = "Permiten almacenar una &uacute;nica copia de la informaci&oacute;n duplicada.";
 choices[2][2] = "Permiten reducir el espacio de almacenamiento requerido.";
 choices[2][3] = "Todas son correctas.";
 answers[2] = 3;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8657. ";
 preguntaids[2] = 8657


//  Id pregunta: 5717 Año de creación de pregunta: 2007
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es una distribuci&oacute;n comercial de Linux?:";
 choices[3]= new Array();
 choices[3][0] = "Debian";
 choices[3][1] = "Red Hat";
 choices[3][2] = "SuSE";
 choices[3][3] = "Caldera";
 answers[3] = 0;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5717. Debian no es una distribuci&oacute;n comercial, sino comunitaria";
 preguntaids[3] = 5717


//  Id pregunta: 5616 Año de creación de pregunta: 2007
 questions[4]= "5)  El sistema de almacenamiento SAN:";
 choices[4]= new Array();
 choices[4][0] = "Se corresponde con una red independiente de almacenamiento de altas prestaciones basada en tecnolog&iacute;a de fibra &oacute;ptica.";
 choices[4][1] = "Se corresponde con el sistema de conexi&oacute;n directa (discos en RAID, cinta o disco &oacute;ptico) a un servidor que procesa todas as peticiones de archivos.";
 choices[4][2] = "Tiene una serie de limitaciones entre las que destaca su falta de escalabilidad, lo que hace que su use sea limitado.";
 choices[4][3] = "Se corresponde con un dispositivo de almacenamiento que se conecta a una LAN en la que est&aacute;n conectados los dem&aacute;s equipos , normalmente una Ethernet, y que posee una ip propia.";
 answers[4] = 0;
 units[4] = ['53'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 5616. ";
 preguntaids[4] = 5616


//  Id pregunta: 8191 Año de creación de pregunta: 2011
 questions[5]= "6)  Se&ntilde;ale la respuesta correcta respecto a las cintas Ultrium LTO:";
 choices[5]= new Array();
 choices[5][0] = "Tienen un formato propietario";
 choices[5][1] = "Los lectores son compatibles con las cintas AIT de Sony.";
 choices[5][2] = "En su versi&oacute;n LTO 5. alcanza capacidades sin compresi&oacute;n de hasta 1,4 TB.";
 choices[5][3] = "No permiten ning&uacute;n tipo de cifrado.";
 answers[5] = 2;
 units[5] = ['53'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8191. Examen TIC A2 2010 interna";
 preguntaids[5] = 8191


//  Id pregunta: 7732 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l es el m&iacute;nimo n&uacute;mero de discos necesario para un sistema RAID 0+1?";
 choices[6]= new Array();
 choices[6][0] = "2";
 choices[6][1] = "3";
 choices[6][2] = "4";
 choices[6][3] = "5";
 answers[6] = 2;
 units[6] = ['53'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7732. ";
 preguntaids[6] = 7732


//  Id pregunta: 8661 Año de creación de pregunta: 2013
 questions[7]= "8)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[7]= new Array();
 choices[7][0] = "Mediante la MAC";
 choices[7][1] = "Mediante su WWN (World Wide Name)";
 choices[7][2] = "Mediante una url";
 choices[7][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[7] = 1;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8661. ";
 preguntaids[7] = 8661


//  Id pregunta: 8176 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Qu&eacute; es una copia de seguridad incremental?";
 choices[8]= new Array();
 choices[8][0] = "Aquella que copia tan solo los archivos modificados desde la &uacute;ltima copia de seguridad normal, y no marca &eacute;stos como copiados.";
 choices[8][1] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de seguridad normal, y no marca lodos estos archivos como copiados";
 choices[8][2] = "Aquella que copia tan solo los archivos creados desde la &uacute;ltima copia de seguridad normal y marca &eacute;stos como copiados.";
 choices[8][3] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de segundad normal, y marca todos estos archivos como copiados.";
 answers[8] = 3;
 units[8] = ['53', '100'];
 blocks[8] = ['B2', 'B3'];
 comments[8] = "Id Pregunta: 8176. Examen TIC A2 2010 interna";
 preguntaids[8] = 8176


//  Id pregunta: 5967 Año de creación de pregunta: 2007
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativa a los sistemas de almacenamiento y m&eacute;todos de acceso NO es cierta?";
 choices[9]= new Array();
 choices[9][0] = "El &iacute;ndice basado en &aacute;rbol B presenta mayores densidades que el basado en &aacute;rbol B*";
 choices[9][1] = "Un fichero de datos puede tener varios &iacute;ndices, pero como mucho uno puede ser denso";
 choices[9][2] = "Una clave de b&uacute;squeda no tiene por qu&eacute; ser un&iacute;voca";
 choices[9][3] = "Los niveles n-1 (con n &gt; 1) de un &iacute;ndice multinivel (no arb&oacute;reo) son &iacute;ndices no-densos que indizan el nivel n";
 answers[9] = 0;
 units[9] = ['53'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 5967. ";
 preguntaids[9] = 5967


//  Id pregunta: 8342 Año de creación de pregunta: 2011
 questions[10]= "11)  Los conceptos de switch zoning y LUN masking en una red de almacenamiento FC (Fiber Channel)";
 choices[10]= new Array();
 choices[10][0] = "Permiten restringir la conectividad de red entre clientes FC, y gestionar su m&aacute;scara de red din&aacute;micamente";
 choices[10][1] = "Son utilizados en la administraci&oacute;n de rob&oacute;ticas LTO para copias de seguridad de los discos virtuales";
 choices[10][2] = "Permiten al administrador restringir la visibilidad entre clientes por puerto o WWN, as&iacute; como el acceso a un disco virtual";
 choices[10][3] = "Ambos conceptos son incompatibles en una red FC";
 answers[10] = 2;
 units[10] = ['53'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8342. Examen UC3M 2010";
 preguntaids[10] = 8342


//  Id pregunta: 7355 Año de creación de pregunta: 2010
 questions[11]= "12)  Para crear discos virtuales se utiliza tecnolog&iacute;a RAID se&ntilde;ale la opci&oacute;n falsa:";
 choices[11]= new Array();
 choices[11][0] = "El RAID 0 aporta mayor disponibilidad que el RAID  1";
 choices[11][1] = "El RAID  1 cuenta con una configuraci&oacute;n de discos en espejo";
 choices[11][2] = "El coste de RAID 1 es mayor que el de RAID 5.";
 choices[11][3] = "El RAID 5 usa divisi&oacute;n de datos a nivel de bloques distribuyendo la informaci&oacute;n de paridad entre todos los discos miembros del conjunto";
 answers[11] = 0;
 units[11] = ['53'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7355. Examen TIC B 2009";
 preguntaids[11] = 7355


//  Id pregunta: 3300 Año de creación de pregunta: 2003
 questions[12]= "13)  Indicar la afirmaci&oacute;n falsa en torno a las matrices de discos RAID:";
 choices[12]= new Array();
 choices[12][0] = "Cuando se haya reemplazado el disco en el que se ha producido el error, los datos podr&aacute;n regenerarse usando la informaci&oacute;n redundante.";
 choices[12][1] = "Los archivos de datos individuales se escriben siempre en m&aacute;s de un disco de forma que, dependiendo del nivel de RAID utilizado, se puedan mejorar el rendimiento y la fiabilidad.";
 choices[12][2] = "En una soluci&oacute;n de hardware, la interfaz de controlador controla la creaci&oacute;n y regeneraci&oacute;n de la informaci&oacute;n redundante.";
 choices[12][3] = "Las estrategias para implementar una matriz redundante de discos independientes (RAID, Redundant Array oIndependent Disks) pueden utilizar soluciones de hardware o de software.";
 answers[12] = 1;
 units[12] = ['53'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3300. ";
 preguntaids[12] = 3300


//  Id pregunta: 8358 Año de creación de pregunta: 2011
 questions[13]= "14)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[13]= new Array();
 choices[13][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura";
 choices[13][1] = "Ofrece la maxima seguridad de los datos almacenados";
 choices[13][2] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas";
 choices[13][3] = "Puede ser implementado tanto en Hardware como en Software";
 answers[13] = 2;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8358. Analista Ayto. Madrid 2010";
 preguntaids[13] = 8358


//  Id pregunta: 8603 Año de creación de pregunta: 2013
 questions[14]= "15)  &iquest;C&oacute;mo se clasifican los m&eacute;todos de grabaci&oacute;n en cinta magn&eacute;tica?";
 choices[14]= new Array();
 choices[14][0] = "Lineal, circular y transversal";
 choices[14][1] = "Circular, transversal y Helical";
 choices[14][2] = "Lineal, Transversal, Helical";
 choices[14][3] = "Transversal y Helical";
 answers[14] = 2;
 units[14] = ['53'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8603. ";
 preguntaids[14] = 8603


//  Id pregunta: 6697 Año de creación de pregunta: 2009
 questions[15]= "16)  El sistema de redundancia que calcula dos bloques de paridad independientes por cada escritura, enviando cada uno de los bloques de paridad a un disco diferente y permite recuperarse del fallo simult&aacute;neo de dos discos es:";
 choices[15]= new Array();
 choices[15][0] = "RAID 0";
 choices[15][1] = "RAID 6";
 choices[15][2] = "RAID 5";
 choices[15][3] = "RAID 3";
 answers[15] = 1;
 units[15] = ['53'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6697. MAP 2008 A1";
 preguntaids[15] = 6697


//  Id pregunta: 6185 Año de creación de pregunta: 2003
 questions[16]= "17)  &iquest;C&oacute;mo se denomina cada de una de las particiones l&oacute;gicas de una Storage Area Network?";
 choices[16]= new Array();
 choices[16][0] = "LUN";
 choices[16][1] = "HBA";
 choices[16][2] = "Cluster";
 choices[16][3] = "Uscsi";
 answers[16] = 0;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 6185. Examen TIC A Castilla La Mancha 2007";
 preguntaids[16] = 6185


//  Id pregunta: 7881 Año de creación de pregunta: 2011
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre las redes SAN iSCSI:";
 choices[17]= new Array();
 choices[17][0] = "Intercambian tramas SCSI sobre FC.";
 choices[17][1] = "Es una red de almacenamiento de acceso a ficheros.";
 choices[17][2] = "No permite implementar iSCSI en software.";
 choices[17][3] = "Puede usar TCP/IP como transporte.";
 answers[17] = 3;
 units[17] = ['53'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7881. Examen TIC A1 2010";
 preguntaids[17] = 7881


//  Id pregunta: 5765 Año de creación de pregunta: 2007
 questions[18]= "19)  &iquest;Cual de las siguientes opciones es la correcta?";
 choices[18]= new Array();
 choices[18][0] = "un dispositivo NAS comparte bloques mientras que en una SAN se comparten ficheros.";
 choices[18][1] = "en el modelo NAS se utiliza una infraestructura de red de datos, mientras que en una SAN se crea una infraestructura de red nueva dedicada y orientada a compartir dispositivos de almacenamiento.";
 choices[18][2] = "una SAN puede ser compartida por varios servidores o estar dedicada a un &uacute;nico servidor, puede ser local pero no extenderse por &aacute;reas geogr&aacute;ficas mas amplias.";
 choices[18][3] = "en el modelo SAN se utiliza una infraestructura de red de datos, mientras que en una NAS se crea una infraestructura de red nueva dedicada y orientada a compartir dispositivos de almacenamiento.";
 answers[18] = 1;
 units[18] = ['53'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 5765. ";
 preguntaids[18] = 5765


//  Id pregunta: 3482 Año de creación de pregunta: 2006
 questions[19]= "20)  Datos repartidos en m&uacute;ltiples vol&uacute;menes con los &quot;bits de paridad&quot; en un &uacute;nico disco. Hablamos de:";
 choices[19]= new Array();
 choices[19][0] = "RAID 1";
 choices[19][1] = "RAID 3";
 choices[19][2] = "RAID 0+1";
 choices[19][3] = "RAID 5";
 answers[19] = 1;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3482. ";
 preguntaids[19] = 3482


//  Id pregunta: 5086 Año de creación de pregunta: 2002
 questions[20]= "21)  USB, refir&eacute;ndonos a interfaces, significa:";
 choices[20]= new Array();
 choices[20][0] = "Universal Synchronized Bus, Bus sincronizado universal";
 choices[20][1] = "Unstructured Serial Bits, Bits en serie no estructurados";
 choices[20][2] = "Universal Serial Bus, Bus serie universal";
 choices[20][3] = "Unstructured Synchronized Burst, R&aacute;faga sincronizada y no estructurada";
 answers[20] = 2;
 units[20] = ['53'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5086. ";
 preguntaids[20] = 5086


//  Id pregunta: 3179 Año de creación de pregunta: 2002
 questions[21]= "22)  Respecto a RAID, una de las siguientes afirmaciones es falsa:";
 choices[21]= new Array();
 choices[21][0] = "RAID 0 no ofrece protecci&oacute;n de datos, s&oacute;lo mejora el tiempo de acceso";
 choices[21][1] = "RAID 2 es similar al RAID 1 pero a&ntilde;adiendo redundancia";
 choices[21][2] = "RAID 5 es el m&aacute;s generalizado por su equilibrio de resultados";
 choices[21][3] = "RAID 4 es similar a RAID 0 pero con correcci&oacute;n de errores";
 answers[21] = 1;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3179. ";
 preguntaids[21] = 3179


//  Id pregunta: 8659 Año de creación de pregunta: 2013
 questions[22]= "23)  &iquest;Cu&aacute;les son posibles topolog&iacute;as SAN de fibra &oacute;ptica?";
 choices[22]= new Array();
 choices[22][0] = "Punto a punto";
 choices[22][1] = "Bucle arbitrado";
 choices[22][2] = "Estructura Conmutada";
 choices[22][3] = "Todas son v&aacute;lidas";
 answers[22] = 3;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8659. ";
 preguntaids[22] = 8659


//  Id pregunta: 8662 Año de creación de pregunta: 2013
 questions[23]= "24)  Dentro de una red FC existen una serie de servicios b&aacute;sicos para su correcto funcionamiento y que son implementadas autom&aacute;ticamente de forma distribuida entre todos los switches que componen la red. Son los siguientes:";
 choices[23]= new Array();
 choices[23][0] = "SNS, RCSN, Login, Servicio de gesti&oacute;n y Servicio de tiempos.";
 choices[23][1] = "Servicio de gesti&oacute;n y servicio de tiempos";
 choices[23][2] = "Login";
 choices[23][3] = "Servidor de nombres que asigna los FCID y permite traducir de WWN a FCID.";
 answers[23] = 0;
 units[23] = ['53'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8662. ";
 preguntaids[23] = 8662


//  Id pregunta: 3299 Año de creación de pregunta: 2003
 questions[24]= "25)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta en torno a las matrices de discos RAID:";
 choices[24]= new Array();
 choices[24][0] = "RAID-0. Tambi&eacute;n llamado modo &quot;stripe'' o distribuci&oacute;n por bandas. Las lecturas y escrituras se realizan en serie en los dispositivos.";
 choices[24][1] = "RAID-1. Se mantiene en un disco un duplicado exacto de la informaci&oacute;n del otro disco.";
 choices[24][2] = "RAID-5. Se guarda la informaci&oacute;n de paridad en un &uacute;nico disco y escribe los datos a los otros discos de forma parecida a un RAID-0.";
 choices[24][3] = "RAID-4. La informaci&oacute;n de paridad se distribuye uniformemente entre los discos participantes,";
 answers[24] = 1;
 units[24] = ['53'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3299. ";
 preguntaids[24] = 3299


//  Id pregunta: 8019 Año de creación de pregunta: 2011
 questions[25]= "26)  Dentro de las arquitecturas de almacenamiento, las siglas inglesas SSA responden a:";
 choices[25]= new Array();
 choices[25][0] = "Serialized Storage Area.";
 choices[25][1] = "Serial Storage Area.";
 choices[25][2] = "Serial Storage Architecture.";
 choices[25][3] = "Serialized Storage Architecture.";
 answers[25] = 2;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8019. Examen TIC A2 2010";
 preguntaids[25] = 8019


//  Id pregunta: 5670 Año de creación de pregunta: 2007
 questions[26]= "27)  Los dispositivos NAS utilizan como protocolo para suministrar los archivos a los clientes:";
 choices[26]= new Array();
 choices[26][0] = "ADSL";
 choices[26][1] = "IP";
 choices[26][2] = "SCSI";
 choices[26][3] = "Fiber SCSI";
 answers[26] = 1;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 5670. ";
 preguntaids[26] = 5670


//  Id pregunta: 8658 Año de creación de pregunta: 2013
 questions[27]= "28)  &iquest;C&oacute;mo es el modelo de conectividad interno del almacenamiento?";
 choices[27]= new Array();
 choices[27][0] = "Bus SCSI y bus ATA/IDE de tipo serie";
 choices[27][1] = "SAS es la evoluci&oacute;n de ATA y SATA la evoluci&oacute;n de SCSI.";
 choices[27][2] = "SAS y SATA son evoluciones que modifican las capas bajas de forma que aseguran la compatibilidad a nivel de software.";
 choices[27][3] = "Ante la falta de escalabilidad, problemas de replicaci&oacute;n y redundancia del almacenamiento interno, para entornos empresariales se suele preferir el almacenamiento externo, en forma de una cabina de discos.";
 answers[27] = 3;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8658. ";
 preguntaids[27] = 8658


//  Id pregunta: 7353 Año de creación de pregunta: 2010
 questions[28]= "29)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[28]= new Array();
 choices[28][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[28][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[28][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[28][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[28] = 2;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7353. Examen TIC B 2009";
 preguntaids[28] = 7353


//  Id pregunta: 8090 Año de creación de pregunta: 2011
 questions[29]= "30)  En una SAN, la direcci&oacute;n f&iacute;sica de una HBA se denomina:";
 choices[29]= new Array();
 choices[29][0] = "WWN";
 choices[29][1] = "MAC";
 choices[29][2] = "SPOF";
 choices[29][3] = "IP";
 answers[29] = 0;
 units[29] = ['53'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8090. Analista Ayto. Madrid 2010";
 preguntaids[29] = 8090


//  Id pregunta: 6529 Año de creación de pregunta: 2003
 questions[30]= "31)  Una soluci&oacute;n RAID 5 necesita como m&iacute;nimo:";
 choices[30]= new Array();
 choices[30][0] = "Dos discos";
 choices[30][1] = "Tres discos";
 choices[30][2] = "Un disco";
 choices[30][3] = "Cuatro discos";
 answers[30] = 1;
 units[30] = ['53'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 6529. ";
 preguntaids[30] = 6529


//  Id pregunta: 3235 Año de creación de pregunta: 2003
 questions[31]= "32)  &iquest;Cu&aacute;ntos Gigabytes tiene un Terabyte?";
 choices[31]= new Array();
 choices[31][0] = "4";
 choices[31][1] = "256";
 choices[31][2] = "512";
 choices[31][3] = "1024";
 answers[31] = 3;
 units[31] = ['53'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3235. ";
 preguntaids[31] = 3235


//  Id pregunta: 7167 Año de creación de pregunta: 2010
 questions[32]= "33)  &iquest;C&oacute;mo se denomina cada una de las particiones l&oacute;gicas de una Storage &Aacute;rea Network?";
 choices[32]= new Array();
 choices[32][0] = "LUN";
 choices[32][1] = "HBA";
 choices[32][2] = "Cl&uacute;ster";
 choices[32][3] = "Usci";
 answers[32] = 0;
 units[32] = ['53'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7167. Castilla La Mancha 2009";
 preguntaids[32] = 7167


//  Id pregunta: 8660 Año de creación de pregunta: 2013
 questions[33]= "34)  Con relaci&oacute;n a las topolog&iacute;as SAN de fibra &oacute;ptica bucle arbitrado y estructura conmutada es cierto que&hellip;";
 choices[33]= new Array();
 choices[33][0] = "Mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[33][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[33][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[33][3] = "Bucle arbitrado y red conmutada no son topolog&iacute;as v&aacute;lidas.";
 answers[33] = 2;
 units[33] = ['53'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8660. ";
 preguntaids[33] = 8660


//  Id pregunta: 7358 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[34]= new Array();
 choices[34][0] = "Los protocolos de comunicaciones NAS est&aacute;n basados en ficheros";
 choices[34][1] = "Los dispositivos NAS tienen mayor rendimiento y fiabilidad que los DAS";
 choices[34][2] = "En una red SAN el modo de acceso es a m&aacute;s bajo nivel que en NAS y DAS";
 choices[34][3] = "La mayor&iacute;a de las SAN usan variantes del protocolo SCSI para la comunicaci&oacute;n entre servidores";
 answers[34] = 1;
 units[34] = ['53'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7358. Examen TIC B 2009";
 preguntaids[34] = 7358


//  Id pregunta: 3228 Año de creación de pregunta: 2003
 questions[35]= "36)  &iquest;Cu&aacute;l de los soportes que se indican a continuaci&oacute;n tiene una capacidad m&aacute;xima de 18 gigaoctetos en 2 capas y 2 caras?:";
 choices[35]= new Array();
 choices[35][0] = "DVD-R.";
 choices[35][1] = "DVD+R.";
 choices[35][2] = "DVD-ROM.";
 choices[35][3] = "DVD-RAM.";
 answers[35] = 2;
 units[35] = ['53'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3228. Junta Andaluc&iacute;a";
 preguntaids[35] = 3228


//  Id pregunta: 8021 Año de creación de pregunta: 2011
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre iSCSI es FALSA?:";
 choices[36]= new Array();
 choices[36][0] = "Es un est&aacute;ndar de la IETF.";
 choices[36][1] = "Utiliza por defecto los puertos TCP 860 y TCP 3260.";
 choices[36][2] = "Necesita una arquitectura de cableado independiente.";
 choices[36][3] = "Usa CHAP como principal m&eacute;todo de autenticaci&oacute;n.";
 answers[36] = 2;
 units[36] = ['53'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8021. Examen TIC A2 2010";
 preguntaids[36] = 8021


//  Id pregunta: 7168 Año de creación de pregunta: 2010
 questions[37]= "38)  En un sistema de almacenamiento en RAID 5:";
 choices[37]= new Array();
 choices[37][0] = "Se guardan dos paridades para cada bloque de informaci&oacute;n, cada una de ellas alojada en un disco diferente";
 choices[37][1] = "Se asigna un bloque de paridad por cada bloque de informaci&oacute;n, asignando un bloque alternativo de cada disco para almacenar esa paridad";
 choices[37][2] = "Se usa una divisi&oacute;n de datos a nivel de bloques con un disco de paridad dedicado";
 choices[37][3] = "Los datos se dividen a nivel de bits, en lugar de a nivel de bloques";
 answers[37] = 1;
 units[37] = ['53'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7168. Castilla La Mancha 2009";
 preguntaids[37] = 7168


//  Id pregunta: 6892 Año de creación de pregunta: 2010
 questions[38]= "39)  Una red de &aacute;rea de almacenamiento (SAN) es:";
 choices[38]= new Array();
 choices[38][0] = "Una red especial utilizada por algunos proveedores de servicios en internet para ofrecer servicios din&aacute;micos de almacenamiento y mantenimiento de webs corporativas.";
 choices[38][1] = "Una red basada en conexiones de fibra &oacute;ptica (Fibre Channel) que sirve para conectar m&uacute;ltiples dispositivos de almacenamiento en una red m&aacute;s grande ofreciendo una mayor capacidad de almacenamiento, permitiendo la transmisi&oacute;n de datos a alta velocidad.";
 choices[38][2] = "Un bus de datos utilizados en los grandes sistemas departamentales, muy utilizado para comunicar las consultas hacia las bases de datos.";
 choices[38][3] = "Un dispositivo de almacenamiento con direcci&oacute;n IP asignada que se conecta directamente a una LAN.";
 answers[38] = 1;
 units[38] = ['53'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6892. TIC A 2009";
 preguntaids[38] = 6892


//  Id pregunta: 5716 Año de creación de pregunta: 2007
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre dispositivos NAS es falsa?:";
 choices[39]= new Array();
 choices[39][0] = "la capacidad m&aacute;xima de almacenamiento de los dispositivos NAS es inferior al de las redes SAN";
 choices[39][1] = "los dispositivos NAS utilizan un protocolo SCSI para suministrar los archivos a los clientes";
 choices[39][2] = "la conexi&oacute;n entre los dispositivos NAS y la red se realiza a trav&eacute;s de TCP/IP";
 choices[39][3] = "los dispositivos NAS son unidades de almacenamiento, grandes servidores dedicados exclusivamente a tal fin que se conectan a la red";
 answers[39] = 1;
 units[39] = ['53'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 5716. ";
 preguntaids[39] = 5716


//  Id pregunta: 8656 Año de creación de pregunta: 2013
 questions[40]= "41)  &iquest;Desde el punto de vista de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[40]= new Array();
 choices[40][0] = "La cinta est&aacute; orientada al almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[40][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[40][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[40][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[40] = 1;
 units[40] = ['53'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8656. ";
 preguntaids[40] = 8656


//  Id pregunta: 6531 Año de creación de pregunta: 2003
 questions[41]= "42)  Indique cu&aacute;l de las siguientes opciones es err&oacute;nea:";
 choices[41]= new Array();
 choices[41][0] = "Un sistema de almacenamiento NAS tiene la ventaja de que no sobrecarga la red";
 choices[41][1] = "En un sistema de almacenamiento DAS se aprovechan los excedentes de los nodos";
 choices[41][2] = "Las siglas SAN hacen referencia a &quot;Storage Area Network&quot;";
 choices[41][3] = "Un dispositivo NAS comparte ficheros, mientras que en una SAN se comparten dispositivos de bloques";
 answers[41] = 0;
 units[41] = ['53'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 6531. ";
 preguntaids[41] = 6531


//  Id pregunta: 8663 Año de creación de pregunta: 2013
 questions[42]= "43)  &iquest;C&oacute;mo es SAN iSCSI (Internet SCSI) respecto a FC?";
 choices[42]= new Array();
 choices[42][0] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s cara.";
 choices[42][1] = "Igual";
 choices[42][2] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s barata";
 choices[42][3] = "SCSI se utiliza en tecnolog&iacute;as NAS y no en SAN.";
 answers[42] = 2;
 units[42] = ['53'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8663. ";
 preguntaids[42] = 8663


//  Id pregunta: 8048 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO corresponde a una unidad de estado s&oacute;lido (SSD)?";
 choices[43]= new Array();
 choices[43][0] = "No contiene partes m&oacute;viles.";
 choices[43][1] = "Son discos menos ruidosos que los magn&eacute;ticos.";
 choices[43][2] = "El precio por MB es menor que en los discos magn&eacute;ticos";
 choices[43][3] = "Existen para varias &iacute;nterfaces (SATA, PATA, etc.)";
 answers[43] = 2;
 units[43] = ['53'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8048. Examen TIC A2 2010";
 preguntaids[43] = 8048


//  Id pregunta: 3306 Año de creación de pregunta: 2003
 questions[44]= "45)  Respecto a tecnolog&iacute;as RAID:";
 choices[44]= new Array();
 choices[44][0] = "RAID 0 aumenta el rendimiento";
 choices[44][1] = "RAID 1 utiliza c&oacute;digos hamming";
 choices[44][2] = "RAID 2 utiliza discos espejo";
 choices[44][3] = "RAID 5 utiliza discos espejo";
 answers[44] = 0;
 units[44] = ['53'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3306. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";
 preguntaids[44] = 3306


//  Id pregunta: 3484 Año de creación de pregunta: 2006
 questions[45]= "46)  Los controladores RAID hardware son mucho m&aacute;s r&aacute;pidos que los software. Tambi&eacute;n son mucho m&aacute;s";
 choices[45]= new Array();
 choices[45][0] = "Seguros";
 choices[45][1] = "Fiables";
 choices[45][2] = "Voluminosos";
 choices[45][3] = "Caros";
 answers[45] = 3;
 units[45] = ['53'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3484. ";
 preguntaids[45] = 3484


//  Id pregunta: 8665 Año de creación de pregunta: 2013
 questions[46]= "47)  &iquest;Qu&eacute; es iSCSI (Internet SCSI)?";
 choices[46]= new Array();
 choices[46][0] = "Protocolo que permite establecer t&uacute;neles TCP/IP por el que se env&iacute;an tramas FC sin modificar.";
 choices[46][1] = "No transporta las tramas FC entre sedes remotas sino que transporta s&oacute;lo las capas superiores.";
 choices[46][2] = "Utiliza TCP/IP como red de transporte utilizando la misma infraestructura que se utilice para redes de comunicaciones.";
 choices[46][3] = "Ninguna es correcta.";
 answers[46] = 2;
 units[46] = ['53'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8665. ";
 preguntaids[46] = 8665


//  Id pregunta: 8197 Año de creación de pregunta: 2011
 questions[47]= "48)  De entre las siguientes opciones en el &aacute;mbito del almacenamiento en los sistemas de informaci&oacute;n, se&ntilde;ale la verdadera:";
 choices[47]= new Array();
 choices[47][0] = "SAS es una interfaz de transferencia de datos en serie";
 choices[47][1] = "SATA es una Interfaz de transferencia de datos en paralelo";
 choices[47][2] = "Los dispositivos SAS se identifican por el World Wide Web Name (WWWN).";
 choices[47][3] = "El conector SATA posee 68 pines";
 answers[47] = 0;
 units[47] = ['53'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8197. Examen TIC A2 2010 interna";
 preguntaids[47] = 8197


//  Id pregunta: 6135 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Cu&aacute;l es el m&iacute;nimo n&uacute;mero de discos necesario para un sistema RAID 0+1?:";
 choices[48]= new Array();
 choices[48][0] = "2";
 choices[48][1] = "3";
 choices[48][2] = "4";
 choices[48][3] = "5";
 answers[48] = 2;
 units[48] = ['53'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6135. Examen TIC A1 MAP 2007";
 preguntaids[48] = 6135


//  Id pregunta: 3356 Año de creación de pregunta: 2006
 questions[49]= "50)  Se dispone &uacute;nicamente de dos discos, con los que se pretende implementar una matriz redundante (RAID) con tolerancia a fallos y con el mejor rendimiento posible tanto en lectura como en escritura, &iquest;qu&eacute; tipo escoger&iacute;a?";
 choices[49]= new Array();
 choices[49][0] = "RAID-0";
 choices[49][1] = "RAID-1";
 choices[49][2] = "RAID-3";
 choices[49][3] = "RAID-0 &oacute; RAID-1";
 answers[49] = 1;
 units[49] = ['53'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3356. ";
 preguntaids[49] = 3356


//  Id pregunta: 7758 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;ntos p&iacute;xeles tiene una ilustraci&oacute;n de 6x6 pulgadas con una resoluci&oacute;n de 300 ppi?";
 choices[50]= new Array();
 choices[50][0] = "540.000 p&iacute;xeles.";
 choices[50][1] = "3.240.000 p&iacute;xeles.";
 choices[50][2] = "10.800 p&iacute;xeles.";
 choices[50][3] = "1.800 p&iacute;xeles.";
 answers[50] = 1;
 units[50] = ['53'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7758. ";
 preguntaids[50] = 7758


//  Id pregunta: 3358 Año de creación de pregunta: 2006
 questions[51]= "52)  Se&ntilde;ale la opci&oacute;n correcta respecto a SAN, Storage Area Network:";
 choices[51]= new Array();
 choices[51][0] = "SAN se sit&uacute;a entre el servidor de aplicaciones y el sistema de ficheros";
 choices[51][1] = "SAN es una red separada de la LAN, de dispositivos de almacenamiento homog&eacute;neos";
 choices[51][2] = "La diferencia entre NAS y SAN es que &eacute;sta &uacute;ltima utiliza fibra &oacute;ptica para sus interconexiones";
 choices[51][3] = "Todos los dispositivos de almacenamiento de la SAN son accesibles a todos los servidores de la LAN";
 answers[51] = 3;
 units[51] = ['53'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3358. ";
 preguntaids[51] = 3358


//  Id pregunta: 8190 Año de creación de pregunta: 2011
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia del sistema de almacenamiento RAID 5?";
 choices[52]= new Array();
 choices[52][0] = "La paridad est&aacute; en un disco dedicado";
 choices[52][1] = "La divisi&oacute;n se produce a nivel de bloques";
 choices[52][2] = "Tiene un bajo coste de redundancia";
 choices[52][3] = "Se necesitan al menos 3 discos";
 answers[52] = 0;
 units[52] = ['53'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 8190. Examen TIC A2 2010 interna";
 preguntaids[52] = 8190


//  Id pregunta: 3177 Año de creación de pregunta: 2002
 questions[53]= "54)  RAID significa:";
 choices[53]= new Array();
 choices[53][0] = "Random Access Internet Devices, dispositivos de acceso aleatorio a internet, un tipo de m&oacute;dem que optimiza la velocidad de acceso";
 choices[53][1] = "RAdio Identification and Detection, Identificaci&oacute;n y Detecci&oacute;n por Radio, tecnolog&iacute;a basada en las propiedades de las ondas de radio para detectar cuerpos y objetos quietos o en movimiento";
 choices[53][2] = "Redundant Array of Inexpensive Disks, matriz redundante de discos baratos, tecnolog&iacute;a para tener redundancia en el almacenamiento de datos evitando as&iacute; p&eacute;rdida accidental o intencionada de informaci&oacute;n";
 choices[53][3] = "Redes de Acceso Inal&aacute;mbrico por Diversidad, tecnolog&iacute;a que usa la diversidad (dispersi&oacute;n de la onda en varios rayos) de la transmisi&oacute;n de ondas de radio para aumentar la potencia de transmisi&oacute;n de datos en comunicaciones inal&aacute;mbricas de datos";
 answers[53] = 2;
 units[53] = ['53'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3177. ";
 preguntaids[53] = 3177


//  Id pregunta: 3321 Año de creación de pregunta: 2004
 questions[54]= "55)  &iquest;Qu&eacute; es el striping?";
 choices[54]= new Array();
 choices[54][0] = "Procedimiento de comprobaci&oacute;n para la detecci&oacute;n de errores";
 choices[54][1] = "M&eacute;todo por el que un bloque de datos se rompe en piezas, y estas se graban de modo simult&aacute;neo en varios discos";
 choices[54][2] = "Proceso que genera valores de paridad";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = 1;
 units[54] = ['53'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3321. ";
 preguntaids[54] = 3321


//  Id pregunta: 8664 Año de creación de pregunta: 2013
 questions[55]= "56)  Para extender las redes SAN, &iquest;qu&eacute; tipo de interconexiones se suelen utilizar?:";
 choices[55]= new Array();
 choices[55][0] = "Sonet/SDH, WDM, ATM";
 choices[55][1] = "Sonet/SDH, WDM, ATM, iSCSI, FCIP, iFCP";
 choices[55][2] = "CWDM, DWDM, ATM, iSCSCI, FCIP, iFCP";
 choices[55][3] = "Sonet/SDH, WDM, ATM, iSCSI";
 answers[55] = 1;
 units[55] = ['53'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8664. ";
 preguntaids[55] = 8664


//  Id pregunta: 3293 Año de creación de pregunta: 2003
 questions[56]= "57)  Indique la afirmaci&oacute;n correcta:";
 choices[56]= new Array();
 choices[56][0] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[56][1] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[56][2] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 choices[56][3] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 answers[56] = 0;
 units[56] = ['53'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3293. EXAMEN CASTILLA LA MANCHA";
 preguntaids[56] = 3293


//  Id pregunta: 5432 Año de creación de pregunta: 2007
 questions[57]= "58)  La configuraci&oacute;n RAID que ofrece la mejor relaci&oacute;n precio/rendimiento de entre las siguientes es:";
 choices[57]= new Array();
 choices[57][0] = "RAID 1";
 choices[57][1] = "RAID 2";
 choices[57][2] = "RAID 4";
 choices[57][3] = "RAID 5";
 answers[57] = 3;
 units[57] = ['53'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 5432. ";
 preguntaids[57] = 5432


//  Id pregunta: 3302 Año de creación de pregunta: 2004
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la configuraci&oacute;n de discos RAID 5 son ciertas?";
 choices[58]= new Array();
 choices[58][0] = "Existe un disco de paridad dedicado";
 choices[58][1] = "La paridad de calcula bas&aacute;ndose en la operaci&oacute;n l&oacute;gica XOR";
 choices[58][2] = "Es la configuraci&oacute;n id&oacute;nea para aplicaciones de alta transferencia de datos";
 choices[58][3] = "Todas las anteriores son ciertas";
 answers[58] = 1;
 units[58] = ['53'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3302. ";
 preguntaids[58] = 3302


//  Id pregunta: 8193 Año de creación de pregunta: 2011
 questions[59]= "60)  &iquest;Qu&eacute; es el World Wide Name (WWN)?";
 choices[59]= new Array();
 choices[59][0] = "Un identificador &uacute;nico de 8 byles en una red de almacenamiento";
 choices[59][1] = "Uno de los servidores DNS ra&iacute;z";
 choices[59][2] = "Un nuevo dominio de Internet basado en IPv6 que va a sustituir los actuales dominios basados en IPv4.";
 choices[59][3] = "Un protocolo que permite identificar un equipo y sus recursos con independencia del tipo de red y sistema operativo";
 answers[59] = 0;
 units[59] = ['53'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8193. Examen TIC A2 2010 interna";
 preguntaids[59] = 8193


//  Id pregunta: 7906 Año de creación de pregunta: 2011
 questions[60]= "61)  Cuando existe particionado a nivel de byte, m&aacute;s un disco de paridad dedicado, se trata de:";
 choices[60]= new Array();
 choices[60][0] = "RAID 3.";
 choices[60][1] = "RAID 4.";
 choices[60][2] = "RAID 5.";
 choices[60][3] = "RAID 6.";
 answers[60] = 0;
 units[60] = ['53'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7906. Examen TIC A1 2010";
 preguntaids[60] = 7906


//  Id pregunta: 7805 Año de creación de pregunta: 2010
 questions[61]= "62)  El formato GIF (Graphic Interchange Format):";
 choices[61]= new Array();
 choices[61][0] = "Almacena 8 bits por p&iacute;xel.";
 choices[61][1] = "Almacena 32 bits por p&iacute;xel.";
 choices[61][2] = "Admite una paleta de hasta 512 colores.";
 choices[61][3] = "No admite el algoritmo de compresi&oacute;n LZW (Lempel- Ziv-Welch).";
 answers[61] = 0;
 units[61] = ['53'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7805. ";
 preguntaids[61] = 7805


//  Id pregunta: 3203 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest; Cu&aacute;l es el t&eacute;rmino con el que se denomina la personalizaci&oacute;n en apariencia y prestaciones de un ordenador ?";
 choices[62]= new Array();
 choices[62][0] = "Mobbing";
 choices[62][1] = "e-learning";
 choices[62][2] = "Modding";
 choices[62][3] = "customizing";
 answers[62] = 2;
 units[62] = ['53'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3203. ";
 preguntaids[62] = 3203


//  Id pregunta: 3357 Año de creación de pregunta: 2006
 questions[63]= "64)  Se&ntilde;ale la opci&oacute;n correcta respecto a RAID, Redundant Array of Independent (or Inexpensive) Disks:";
 choices[63]= new Array();
 choices[63][0] = "RAID se puede implementar por software o hardware";
 choices[63][1] = "RAID se puede implementar s&oacute;lo por software";
 choices[63][2] = "RAID se puede implementar s&oacute;lo por hardware";
 choices[63][3] = "RAID no se puede implementar por software y hardware a la vez";
 answers[63] = 0;
 units[63] = ['53'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3357. ";
 preguntaids[63] = 3357


//  Id pregunta: 7833 Año de creación de pregunta: 2010
 questions[64]= "65)  El sistema de redundancia que calcula dos bloques de paridad independientes por cada escritura, enviando cada uno de los bloques de paridad a un disco diferente y permite recuperarse del fallo simult&aacute;neo de dos discos es:";
 choices[64]= new Array();
 choices[64][0] = "RAID 0.";
 choices[64][1] = "RAID 6.";
 choices[64][2] = "RAID 5.";
 choices[64][3] = "RAID 3.";
 answers[64] = 1;
 units[64] = ['53'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7833. ";
 preguntaids[64] = 7833


//  Id pregunta: 7356 Año de creación de pregunta: 2010
 questions[65]= "66)  Si 100 personas reciben un correo electr&oacute;nico, destinado a toda la empresa, con un archivo adjunto de 1 MB, y cada destinatario decide guardar el archivo adjunto localmente, a la hora de hacer backup de esos escritorios se precisar&aacute;n 100 MB de espacio de copias de seguridad. &iquest;C&oacute;mo se denomina la tecnolog&iacute;a que permite reducir este espacio a un uno por ciento del espacio original necesario?";
 choices[65]= new Array();
 choices[65][0] = "Compresion LZ";
 choices[65][1] = "Filtrado de Kalman";
 choices[65][2] = "Renderizaci&oacute;n especulativa";
 choices[65][3] = "Deduplicaci&oacute;n";
 answers[65] = 3;
 units[65] = ['53'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 7356. Examen TIC B 2009";
 preguntaids[65] = 7356


//  Id pregunta: 8024 Año de creación de pregunta: 2011
 questions[66]= "67)  La velocidad de transferencia base (1X) de un disco Blu-ray es de:";
 choices[66]= new Array();
 choices[66][0] = "54 Mbits/s.";
 choices[66][1] = "4,5 MBytes/s.";
 choices[66][2] = "36 MBytes/s.";
 choices[66][3] = "9 MBytes/s.";
 answers[66] = 1;
 units[66] = ['53'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8024. Examen TIC A2 2010";
 preguntaids[66] = 8024


//  Id pregunta: 6136 Año de creación de pregunta: 2003
 questions[67]= "68)  &iquest;C&oacute;mo se denominan los servidores que se implementan en un formato de tarjeta/bandeja en la que se integran memoria, procesadores y almacenamiento interno, que pueden ser insertados en chasis/bastidores especiales sobre los que se comparten elementos comunes (habitualmente conexiones el&eacute;ctricas, conexiones de red de datos fuentes de alimentaci&oacute;n y ventiladores) y que normalmente comparten un sistema de gesti&oacute;n y administraci&oacute;n com&uacute;n?:";
 choices[67]= new Array();
 choices[67][0] = "Clusters";
 choices[67][1] = "Servidores Grid";
 choices[67][2] = "Servidores Blades";
 choices[67][3] = "Ninguno de los anteriores";
 answers[67] = 2;
 units[67] = ['53'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 6136. Examen TIC A1 MAP 2007";
 preguntaids[67] = 6136


//  Id pregunta: 7357 Año de creación de pregunta: 2010
 questions[68]= "69)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia, y los marca individualmente como copiados, es una copia de seguridad:";
 choices[68]= new Array();
 choices[68][0] = "Diaria";
 choices[68][1] = "Intermedia";
 choices[68][2] = "Incremental";
 choices[68][3] = "Diferencial";
 answers[68] = 2;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7357. Examen TIC B 2009";
 preguntaids[68] = 7357


//  Id pregunta: 6530 Año de creación de pregunta: 2003
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa en una soluci&oacute;n RAID.";
 choices[69]= new Array();
 choices[69][0] = "En RAID 0 un fallo en un disco provoca la p&eacute;rdida de todos los datos";
 choices[69][1] = "RAID 4 es como RAID 0 m&aacute;s un disco de paridad dedicado";
 choices[69][2] = "El RAID 1 no mejora el rendimiento en escritura respecto a RAID 0";
 choices[69][3] = "RAID 5 es uno de los niveles RAID m&aacute;s comunes, y hace uso de un disco de paridad dedicado";
 answers[69] = 3;
 units[69] = ['53'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 6530. ";
 preguntaids[69] = 6530


//  Id pregunta: 7354 Año de creación de pregunta: 2010
 questions[70]= "71)  En un disco duro, la unidad m&aacute;s peque&ntilde;a en la que se puede escribir o leer informaci&oacute;n es:";
 choices[70]= new Array();
 choices[70][0] = "La pista";
 choices[70][1] = "El cilindro";
 choices[70][2] = "La cabeza de lectura/escritura";
 choices[70][3] = "El sector";
 answers[70] = 3;
 units[70] = ['53'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7354. Examen TIC B 2009";
 preguntaids[70] = 7354


//  Id pregunta: 8248 Año de creación de pregunta: 2011
 questions[71]= "72)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[71]= new Array();
 choices[71][0] = "iSCSI";
 choices[71][1] = "sSCSI";
 choices[71][2] = "iFCP";
 choices[71][3] = "FCIP";
 answers[71] = 3;
 units[71] = ['53'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8248. Examen UPM A2 2011";
 preguntaids[71] = 8248


//  Id pregunta: 7905 Año de creación de pregunta: 2011
 questions[72]= "73)  Con respecto a sistemas de almacenamiento, indique cu&aacute;l de las siguientes asociaciones de t&eacute;rminos es correcta:";
 choices[72]= new Array();
 choices[72][0] = "Protocolos: CIFS, NDMP, iFCP, NFS.";
 choices[72][1] = "Dispositivos &oacute;pticos: DVD, MO, LTO, UDO.";
 choices[72][2] = "Redes SAN: SCSI, ESCON, FICON, WAFS.";
 choices[72][3] = "Formatos de cintas: FATA, TRAVAN, DLT, DAT.";
 answers[72] = 0;
 units[72] = ['53'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7905. Examen TIC A1 2010";
 preguntaids[72] = 7905


//  Id pregunta: 3271 Año de creación de pregunta: 2003
 questions[73]= "74)  La velocidad te&oacute;rica m&aacute;xima aproximada de un lector de CD-ROM 48x es de:";
 choices[73]= new Array();
 choices[73][0] = "150 KB/seg.";
 choices[73][1] = "3600 KB/seg.";
 choices[73][2] = "7200 KB/seg.";
 choices[73][3] = "3 MB/seg.";
 answers[73] = 2;
 units[73] = ['53'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3271. Junta Andaluc&iacute;a";
 preguntaids[73] = 3271


//  Id pregunta: 8251 Año de creación de pregunta: 2011
 questions[74]= "75)  Los protocolos b&aacute;sicos usados en una red de &aacute;rea de almacenamiento son:";
 choices[74]= new Array();
 choices[74][0] = "Fibre Channel Arbitrated Loop, Fibre Channel Switched y Small Computer System Interface";
 choices[74][1] = "Fibre Channel Arbitrated Loop y Fibre Channel Small Loop";
 choices[74][2] = "Small Computer System Interface y Fibre Channel Small Loop";
 choices[74][3] = "Fibre Channel Small Loop, Address Resolution Protocol y Network File System";
 answers[74] = 0;
 units[74] = ['53'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8251. Examen UPM A2 2011";
 preguntaids[74] = 8251


