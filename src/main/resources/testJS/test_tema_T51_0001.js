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
//  Id pregunta: 8600 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;Qu&eacute; es FAMOS?";
 choices[0]= new Array();
 choices[0][0] = "Floating Gate Avalanche-Injection Metal Oxide Semiconductor";
 choices[0][1] = "Floating Avalanche-Injection Metal Oxide Semiconductor";
 choices[0][2] = "Floating Gate Avalanche-Injection Metal for Operating Systems";
 choices[0][3] = "FAMOS no existe";
 answers[0] = 0;
 units[0] = ['51'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8600. ";
 preguntaids[0] = 8600


//  Id pregunta: 2861 Año de creación de pregunta: 2002
 questions[1]= "2)  En un perif&eacute;rico de la CPU se distinguen:";
 choices[1]= new Array();
 choices[1][0] = "Las se&ntilde;ales de control y el acceso directo a memoria (DMA)";
 choices[1][1] = "Se&ntilde;ales de direcci&oacute;n y de datos";
 choices[1][2] = "E/S y acceso directo a memoria (DMA)";
 choices[1][3] = "Dispositivo perif&eacute;rico y controlador del perif&eacute;rico";
 answers[1] = 3;
 units[1] = ['51'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2861. ";
 preguntaids[1] = 2861


//  Id pregunta: 2845 Año de creación de pregunta: 2002
 questions[2]= "3)  En los ordenadores, por lo general, los programas que realizan tareas de arranque de la m&aacute;quina y de diagn&oacute;sticos se almacenan en:";
 choices[2]= new Array();
 choices[2][0] = "RAM";
 choices[2][1] = "ROM";
 choices[2][2] = "memoria interna del procesador";
 choices[2][3] = "disco duro asociado a la UAL y la UC";
 answers[2] = 1;
 units[2] = ['51'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2845. ";
 preguntaids[2] = 2845


//  Id pregunta: 2838 Año de creación de pregunta: 2002
 questions[3]= "4)  En las escala de integraci&oacute;n ULSI significa:";
 choices[3]= new Array();
 choices[3][0] = "Ultima Large Scale Integration";
 choices[3][1] = "Under Large Scale Integration";
 choices[3][2] = "Ultra Large Scale Integration";
 choices[3][3] = "Update Large Scale Integration";
 answers[3] = 2;
 units[3] = ['51'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2838. ";
 preguntaids[3] = 2838


//  Id pregunta: 8599 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Cu&aacute;ntos cent&iacute;meros tiene el Blu-ray?";
 choices[4]= new Array();
 choices[4][0] = "12";
 choices[4][1] = "13";
 choices[4][2] = "11";
 choices[4][3] = "15";
 answers[4] = 0;
 units[4] = ['51'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8599. ";
 preguntaids[4] = 8599


//  Id pregunta: 8100 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Cu&aacute;l es la velocidad del est&aacute;ndar USB 3.0?:";
 choices[5]= new Array();
 choices[5][0] = "600 MB/s";
 choices[5][1] = "480 MB/s";
 choices[5][2] = "4800 MB/s";
 choices[5][3] = "1092 MB/s";
 answers[5] = 0;
 units[5] = ['51'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8100. Analista Ayto. Madrid 2010";
 preguntaids[5] = 8100


//  Id pregunta: 5314 Año de creación de pregunta: 2006
 questions[6]= "7)  Cuando sincronizamos datos entre una PDA bluetooth y el PC usamos una red";
 choices[6]= new Array();
 choices[6][0] = "LAN";
 choices[6][1] = "PAN";
 choices[6][2] = "NAS";
 choices[6][3] = "MAN";
 answers[6] = 1;
 units[6] = ['51'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 5314. ";
 preguntaids[6] = 5314


//  Id pregunta: 2888 Año de creación de pregunta: 2002
 questions[7]= "8)  HTTL significa:";
 choices[7]= new Array();
 choices[7][0] = "L&oacute;gica Transistor-Transistor de alta velocidad.";
 choices[7][1] = "Lenguaje de transferencia HiperTexto.";
 choices[7][2] = "Lenguaje de Tokens HiperTexto.";
 choices[7][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[7] = 0;
 units[7] = ['50', '51'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2888. ";
 preguntaids[7] = 2888


//  Id pregunta: 10114 Año de creación de pregunta: 2015
 questions[8]= "9)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[8]= new Array();
 choices[8][0] = "6 Gbps.";
 choices[8][1] = "16 Gbps.";
 choices[8][2] = "8 Gbps.";
 choices[8][3] = "3 Gbps.";
 answers[8] = 1;
 units[8] = ['50', '51', '53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10114. Examen TIC A2 2014";
 preguntaids[8] = 10114


//  Id pregunta: 1250 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la respuesta correcta relativa al protocolo iSCSI (Internet Small Computer System Interface), definido en la RFC 7143:";
 choices[9]= new Array();
 choices[9][0] = "Tanto iniciadores como destinos compatibles iSCSI deben implementar el m&eacute;todo de autenticaci&oacute;n CHAP (Challenge Handshake Authentication Protocol).";
 choices[9][1] = "Un nombre iSCSI consiste en una cadena de texto con tres campos: un designador de tipo, un espacio de nombres, y un nombre de dispositivo &uacute;nico dado por la IETF.";
 choices[9][2] = "En la RFC se definen s&oacute;lo dos designadores de tipo: el tipo &ldquo;iqn&rdquo; y el tipo &ldquo;eui&rdquo;.";
 choices[9][3] = "Debe utilizarse obligatoriamente iSNS (Internet Storage Name Service) para localizar los destinos iSCSI.";
 answers[9] = 0;
 units[9] = ['51'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1250. ";
 preguntaids[9] = 1250


//  Id pregunta: 2847 Año de creación de pregunta: 2002
 questions[10]= "11)  En relaci&oacute;n a las diferentes tecnolog&iacute;as de buses:";
 choices[10]= new Array();
 choices[10][0] = "ISA es posterior a MCA";
 choices[10][1] = "AGP es posterior a PCI";
 choices[10][2] = "XT es posterior a ISA";
 choices[10][3] = "EISA es anterior a MCA";
 answers[10] = 1;
 units[10] = ['51'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2847. Orden cronologico: ISA-PCI-USB-AGP";
 preguntaids[10] = 2847


//  Id pregunta: 2926 Año de creación de pregunta: 2002
 questions[11]= "12)  La caracter&iacute;stica principal de la arquitectura 'pipeline' es:";
 choices[11]= new Array();
 choices[11][0] = "La existencia de varios procesadores especializados en tareas concretas que pueden realizarse en paralelo";
 choices[11][1] = "La divisi&oacute;n en fases de la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[11][2] = "La redundancia de algunos dispositivos";
 choices[11][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[11] = 1;
 units[11] = ['50', '51'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2926. ";
 preguntaids[11] = 2926


//  Id pregunta: 1573 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la afirmaci&oacute;n correcta. Cuando en un microprocesador hablamos de un ciclo de m&aacute;quina de tipo &quot;fetch&quot; nos estamos refiriendo a:";
 choices[12]= new Array();
 choices[12][0] = "Lectura de microinstrucci&oacute;n.";
 choices[12][1] = "Lectura de dato de la memoria.";
 choices[12][2] = "Escritura de dato de la memoria.";
 choices[12][3] = "Escritura de dato en un dispositivo.";
 answers[12] = 0;
 units[12] = ['51'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1573. ";
 preguntaids[12] = 1573


//  Id pregunta: 3045 Año de creación de pregunta: 2002
 questions[13]= "14)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[13]= new Array();
 choices[13][0] = "El RISC tiene m&aacute;s registros";
 choices[13][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[13][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[13][3] = "Todas las respuestas anteriores son ciertas";
 answers[13] = 3;
 units[13] = ['50', '51'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3045. ";
 preguntaids[13] = 3045


//  Id pregunta: 2724 Año de creación de pregunta: 2002
 questions[14]= "15)  De las siguientes caracter&iacute;sticas de una memoria RAM est&aacute;tica, hay una falsa. Indique cu&aacute;l es:";
 choices[14]= new Array();
 choices[14][0] = "Permite las operaciones de lectura y escritura";
 choices[14][1] = "Requiere refresco";
 choices[14][2] = "Es de direccionamiento aleatorio";
 choices[14][3] = "Es vol&aacute;til";
 answers[14] = 1;
 units[14] = ['51'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2724. ";
 preguntaids[14] = 2724


//  Id pregunta: 10794 Año de creación de pregunta: 2015
 questions[15]= "16)  La tecnolog&iacute;a NFC opera a una frecuencia de:";
 choices[15]= new Array();
 choices[15][0] = "1,63 MHz";
 choices[15][1] = "13,56 MHz";
 choices[15][2] = "2,45 GHz";
 choices[15][3] = "5,4 GHz";
 answers[15] = 1;
 units[15] = ['51'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 10794. ";
 preguntaids[15] = 10794


//  Id pregunta: 5442 Año de creación de pregunta: 2007
 questions[16]= "17)  El &ldquo;paradigma imperativo&rdquo; en un lenguaje de programaci&oacute;n se basa en:";
 choices[16]= new Array();
 choices[16][0] = "La m&aacute;quina de Turing.";
 choices[16][1] = "El modelo de computador de Von Neumann.";
 choices[16][2] = "El Teorema de la Indecibilidad de G&ouml;del.";
 choices[16][3] = "La m&aacute;quina de Babbage.";
 answers[16] = 1;
 units[16] = ['51'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 5442. ";
 preguntaids[16] = 5442


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[17]= "18)  En el &aacute;mbito de los conectores y cables USB, la extensi&oacute;n de USB 2.0 que posibilita a un dispositivo m&oacute;vil actuar como host o anfitri&oacute;n para otros dispositivos, se conoce como:";
 choices[17]= new Array();
 choices[17][0] = "USB ONT (On-New-Transmission).";
 choices[17][1] = "USB OTG (On-The-Go).";
 choices[17][2] = "USB OTG (Out-The-Ground).";
 choices[17][3] = "USB Bluetooth.";
 answers[17] = 1;
 units[17] = ['51'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 645. AGE A2 2015";
 preguntaids[17] = 645


//  Id pregunta: 8061 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Qu&eacute; tipo de conector de alta velocidad (anteriormente conocido por su nombre clave Light Peak) hace uso de la tecnolog&iacute;a &oacute;ptica llegando a ofrecer anchos de banda de hasta 10 Gbps?";
 choices[18]= new Array();
 choices[18][0] = "FireWire";
 choices[18][1] = "Thunderbolt";
 choices[18][2] = "USB";
 choices[18][3] = "HDMI";
 answers[18] = 1;
 units[18] = ['51'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8061. ";
 preguntaids[18] = 8061


//  Id pregunta: 7517 Año de creación de pregunta: 2010
 questions[19]= "20)  IEEE 1394 es:";
 choices[19]= new Array();
 choices[19][0] = "Un formato de CD.";
 choices[19][1] = "Un proyecto de formato DVD-Audio.";
 choices[19][2] = "Una norma dirigida a dispositivos de alta velocidad como c&aacute;maras de v&iacute;deo e impresoras profesionales.";
 choices[19][3] = "Un norma que regula exclusivamente el ajuste y calibrado del color.";
 answers[19] = 2;
 units[19] = ['51'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7517. Similar a Map 2005";
 preguntaids[19] = 7517


//  Id pregunta: 5440 Año de creación de pregunta: 2007
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta respecto a las caracter&iacute;sticas de los puertos USB (Universal Serial Bus)?:";
 choices[20]= new Array();
 choices[20][0] = "Su rendimiento es superior al del puerto de serie, pero inferior al del puerto paralelo";
 choices[20][1] = "Pueden transferir datos a una velocidad de hasta 10Gbps";
 choices[20][2] = "S&oacute;lo permiten conectar 2^6=16 dispositivos a un mismo ordenador.";
 choices[20][3] = "Necesitan que el sistema operativo disponga de una utilidad USBMS (USB Management System).";
 answers[20] = 1;
 units[20] = ['51'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5440. El est&aacute;ndar USB 3.1 soporta hasta 10 Gbps";
 preguntaids[20] = 5440


//  Id pregunta: 1295 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n el est&aacute;ndar del nuevo USB 3.1, &iquest;Cu&aacute;l es su velocidad?";
 choices[21]= new Array();
 choices[21][0] = "12 Gbps";
 choices[21][1] = "8 Gbps";
 choices[21][2] = "6 Gbps";
 choices[21][3] = "10 Gbps";
 answers[21] = 3;
 units[21] = ['51'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1295. ";
 preguntaids[21] = 1295


//  Id pregunta: 2736 Año de creación de pregunta: 2002
 questions[22]= "23)  DIMM y SIMM son:";
 choices[22]= new Array();
 choices[22][0] = "2 formas de paralelismo en ordenadores (Distributed y Single)";
 choices[22][1] = "2 formas de gesti&oacute;n de memoria (Memory Management)";
 choices[22][2] = "2 tipos de encapsulado de memoria (Dual y Single)";
 choices[22][3] = "2 organismos de estandarizaci&oacute;n para Internet (Internet &amp; MultiMedia)";
 answers[22] = 2;
 units[22] = ['51'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2736. ";
 preguntaids[22] = 2736


//  Id pregunta: 1989 Año de creación de pregunta: 2016
 questions[23]= "24)  EI controlador DMA o de acceso directo a memoria, se encarga de:";
 choices[23]= new Array();
 choices[23][0] = "Avisar al procesador, por medio de una interrupci&oacute;n, de cuando una operaci&oacute;n de entrada-salida de un proceso ha finalizado.";
 choices[23][1] = "Controlar que bloques de disco utiliza cada proceso";
 choices[23][2] = "Mantener en memoria principal las partes de un proceso que son exclusivamente necesarias para su ejecuci&oacute;n en un momento dado.";
 choices[23][3] = "Dividir la memoria principal en bloques y asign&aacute;rselos a los distintos procesos.";
 answers[23] = 0;
 units[23] = ['51'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1989. ";
 preguntaids[23] = 1989


//  Id pregunta: 2820 Año de creación de pregunta: 2002
 questions[24]= "25)  En el subsistema de almacenamiento de un ordenador, se define punto de memoria como:";
 choices[24]= new Array();
 choices[24][0] = "El elemento que almacena un bit";
 choices[24][1] = "El elemento que almacena una palabra";
 choices[24][2] = "El elemento que almacena un byte";
 choices[24][3] = "El elemento que almacena una unidad de datos l&oacute;gicos";
 answers[24] = 0;
 units[24] = ['51'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2820. ";
 preguntaids[24] = 2820


//  Id pregunta: 2738 Año de creación de pregunta: 2002
 questions[25]= "26)  EDSAC y ENIAC son ejemplos de:";
 choices[25]= new Array();
 choices[25][0] = "comit&eacute;s reguladores de auditor&iacute;as inform&aacute;ticas";
 choices[25][1] = "algoritmos criptogr&aacute;ficos de clave sim&eacute;trica";
 choices[25][2] = "est&aacute;ndares de tecnolog&iacute;as de almacenamiento";
 choices[25][3] = "ordenadores de mediados del siglo XX";
 answers[25] = 3;
 units[25] = ['51'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2738. ";
 preguntaids[25] = 2738


//  Id pregunta: 2650 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;ntos s&iacute;mbolos diferentes pueden representarse en EBCDIC?";
 choices[26]= new Array();
 choices[26][0] = "128";
 choices[26][1] = "64";
 choices[26][2] = "256";
 choices[26][3] = "512";
 answers[26] = 2;
 units[26] = ['51'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2650. ";
 preguntaids[26] = 2650


//  Id pregunta: 8462 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Qu&eacute; pantallas t&aacute;ctiles pueden ser manejadas con guantes de lana?";
 choices[27]= new Array();
 choices[27][0] = "las resistivas";
 choices[27][1] = "las capacitivas";
 choices[27][2] = "ambas";
 choices[27][3] = "ninguna";
 answers[27] = 0;
 units[27] = ['51'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8462. ";
 preguntaids[27] = 8462


//  Id pregunta: 2793 Año de creación de pregunta: 2002
 questions[28]= "29)  El t&eacute;rmino &quot;aleatorio&quot; en las memoria RAM se refiere a que:";
 choices[28]= new Array();
 choices[28][0] = "el acceso no sigue un cronograma concreto sino que puede producirse aleatoriamente en cualquier momento de un intervalo limitado";
 choices[28][1] = "el orden de varias operaciones de acceso (lectura y/o escritura) simult&aacute;neas es aleatorio para evitar colisiones, similar a la t&eacute;cnica usada en Ethernet";
 choices[28][2] = "se puede acceder a cualquier byte de memoria sin pasar por los bytes precedentes, esto es, no es un acceso secuencial";
 choices[28][3] = "ninguna de las razones anteriores es la correcta";
 answers[28] = 2;
 units[28] = ['51'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2793. ";
 preguntaids[28] = 2793


//  Id pregunta: 9184 Año de creación de pregunta: 2014
 questions[29]= "30)  La velocidad del est&aacute;ndar USB 3.0 es:";
 choices[29]= new Array();
 choices[29][0] = "Similar a la de USB 2.0.";
 choices[29][1] = "10 veces superior a la de USB 2.0.";
 choices[29][2] = "480 Mbps.";
 choices[29][3] = "15 veces superior a la de USB 2.0.";
 answers[29] = 1;
 units[29] = ['51'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9184. Examen TIC A2 2013";
 preguntaids[29] = 9184


//  Id pregunta: 8601 Año de creación de pregunta: 2013
 questions[30]= "31)  &iquest;Por qu&eacute; la memorias flash de tipo es mucho m&aacute;s r&aacute;pida que las EEPROM convencionales?";
 choices[30]= new Array();
 choices[30][0] = "Es falso. Las memorias EEPROM convencionales son mucho m&aacute;s r&aacute;pidas";
 choices[30][1] = "Porque est&aacute;n fabricadas con puertas l&oacute;gicas AND y OR";
 choices[30][2] = "Porque permiten la lectura y escritura de m&uacute;ltiples posiciones de memoria en la misma operaci&oacute;n";
 choices[30][3] = "Porque borran bit a bit.";
 answers[30] = 2;
 units[30] = ['51'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8601. ";
 preguntaids[30] = 8601


//  Id pregunta: 8604 Año de creación de pregunta: 2013
 questions[31]= "32)  &iquest;Qu&eacute; tipo de conexi&oacute;n inal&aacute;mbrica se suele distinguir en la conexi&oacute;n de los ratones al PC?";
 choices[31]= new Array();
 choices[31][0] = "Radio Frecuencia (banda de 5 Ghz), Infrarrojo, Bluetooth";
 choices[31][1] = "Radio Frecuencia (banda de 2,4 Ghz) e Infrarrojo.";
 choices[31][2] = "Radio Frecuencia (banda de 2,4 Ghz), Infrarrojo y Bluetooth.";
 choices[31][3] = "No se utilizan las conexiones inal&aacute;mbricas para los ratones al no considerarse suficientemente estables";
 answers[31] = 2;
 units[31] = ['51'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8604. ";
 preguntaids[31] = 8604


//  Id pregunta: 2923 Año de creación de pregunta: 2002
 questions[32]= "33)  La arquitectura RISC:";
 choices[32]= new Array();
 choices[32][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[32][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[32][2] = "No es adaptable al sector de los microordenadores";
 choices[32][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[32] = 3;
 units[32] = ['50', '51'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2923. ";
 preguntaids[32] = 2923


//  Id pregunta: 2729 Año de creación de pregunta: 2002
 questions[33]= "34)  Dentro de las arquitecturas que podemos encontrar en el mundo del ordenador personal, en la denominada ISA (Industry Standard Architecture ) su bus de datos trabaja con:";
 choices[33]= new Array();
 choices[33][0] = "32 bits";
 choices[33][1] = "8 bits";
 choices[33][2] = "16 bits";
 choices[33][3] = "64 bits";
 answers[33] = 2;
 units[33] = ['51'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2729. ";
 preguntaids[33] = 2729


//  Id pregunta: 1374 Año de creación de pregunta: 2016
 questions[34]= "35)  Los conectores LC son:";
 choices[34]= new Array();
 choices[34][0] = "Conectores para Pcr.";
 choices[34][1] = "Conectores de par trenzado.";
 choices[34][2] = "Conectores exclusivos para Mainframe.";
 choices[34][3] = "Par trenzado.";
 answers[34] = 3;
 units[34] = ['51'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1374. ";
 preguntaids[34] = 1374


//  Id pregunta: 2836 Año de creación de pregunta: 2002
 questions[35]= "36)  En la Unidad Central de Proceso (CPU):";
 choices[35]= new Array();
 choices[35][0] = "La unidad Aritm&eacute;tico-L&oacute;gica se compone de uno o varios operadores, un banco de registros y un dispositivo secuenciador";
 choices[35][1] = "La Unidad de Control tiene como misi&oacute;n la supervisi&oacute;n y ordenaci&oacute;n de todo el sistema de elementos que componen la CPU y su relaci&oacute;n con la memoria interna";
 choices[35][2] = "En el esquema dise&ntilde;ado por Charles Babbage en su modelo de ordenador, se considera a la Memoria Central como un elemento externo a la CPU";
 choices[35][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[35] = 1;
 units[35] = ['51'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2836. ";
 preguntaids[35] = 2836


//  Id pregunta: 5928 Año de creación de pregunta: 2007
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[36]= new Array();
 choices[36][0] = "No precisa se&ntilde;al de reloj externa";
 choices[36][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros";
 choices[36][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas";
 choices[36][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus";
 answers[36] = 1;
 units[36] = ['51'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5928. ";
 preguntaids[36] = 5928


//  Id pregunta: 10795 Año de creación de pregunta: 2015
 questions[37]= "38)  La tasa de transferencia de USB 3.0 es de:";
 choices[37]= new Array();
 choices[37][0] = "60 MB/s";
 choices[37][1] = "100 MB/s";
 choices[37][2] = "600 MB/s";
 choices[37][3] = "1GB/s";
 answers[37] = 2;
 units[37] = ['51'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10795. ";
 preguntaids[37] = 10795


//  Id pregunta: 1369 Año de creación de pregunta: 2016
 questions[38]= "39)  La tasa de transferencia maxima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[38]= new Array();
 choices[38][0] = "300 MB/s.";
 choices[38][1] = "900 MB/s.";
 choices[38][2] = "600 MB/s.";
 choices[38][3] = "150 MB/s.";
 answers[38] = 2;
 units[38] = ['51'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1369. ";
 preguntaids[38] = 1369


//  Id pregunta: 8047 Año de creación de pregunta: 2011
 questions[39]= "40)  Cu&aacute;l de las siguientes afirmaciones en referencia a la arquitectura de computadores CISC (Complex Instruction Set Computer) es FALSA?";
 choices[39]= new Array();
 choices[39][0] = "Se caracteriza por tener un juego de instrucciones muy amplio.";
 choices[39][1] = "Tiene muchos modos de direccionamiento";
 choices[39][2] = "Tiene varios formatos de instrucci&oacute;n (de longitud variable)";
 choices[39][3] = "Su unidad de control es cableada";
 answers[39] = 3;
 units[39] = ['51'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8047. Examen TIC A2 2010";
 preguntaids[39] = 8047


//  Id pregunta: 1092 Año de creación de pregunta: 2016
 questions[40]= "41)  Cu&aacute;l de las siguientes afirmaciones relativa a las velocidades m&aacute;ximas est&aacute;ndar de transferencia en conexiones con dispositivos externos es correcta:";
 choices[40]= new Array();
 choices[40][0] = "En Firewire 1600 es 400 MB/s.";
 choices[40][1] = "En USB 1.0 es 1,5 MB/s.";
 choices[40][2] = "En Thunderbolt es 1800 MB/s.";
 choices[40][3] = "En USB 3.0 es 600 MB/s.";
 answers[40] = 3;
 units[40] = ['51'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1092. ";
 preguntaids[40] = 1092


//  Id pregunta: 8602 Año de creación de pregunta: 2013
 questions[41]= "42)  &iquest;En qu&eacute; se diferencia la memoria flash de tipo NOR y la de tipo NAND?";
 choices[41]= new Array();
 choices[41][0] = "La de NAND es menos fiable";
 choices[41][1] = "La de tipo NOR tiene un coste mayor";
 choices[41][2] = "Las de tipo NAND s&oacute;lo permiten acceso secuencial (m&aacute;s orientado a dispositivos de almacenamiento masivo) frente a las memorias flash basadas en NOR que permiten lectura de acceso aleatorio.";
 choices[41][3] = "Todas son correctas.";
 answers[41] = 3;
 units[41] = ['51'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8602. ";
 preguntaids[41] = 8602


//  Id pregunta: 9989 Año de creación de pregunta: 2015
 questions[42]= "43)  La velocidad del USB 3.0 es:";
 choices[42]= new Array();
 choices[42][0] = "15 veces superior a la del USB 2.0.";
 choices[42][1] = "Similar a la del USB 2.0.";
 choices[42][2] = "10 veces superior a la del USB 2.0.";
 choices[42][3] = "480 Mbps.";
 answers[42] = 2;
 units[42] = ['51'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9989. Examen TIC A2 2014";
 preguntaids[42] = 9989


//  Id pregunta: 2703 Año de creación de pregunta: 2002
 questions[43]= "44)  Con las siglas SCSI se identifica:";
 choices[43]= new Array();
 choices[43][0] = "Un est&aacute;ndar de facto para la interconexi&oacute;n entre distintas capas de OSI";
 choices[43][1] = "Un est&aacute;ndar para la comunicaci&oacute;n entre el ordenador y los perif&eacute;ricos a &eacute;l conectados";
 choices[43][2] = "Una arquitectura de ordenadores";
 choices[43][3] = "Una tarjeta de video";
 answers[43] = 1;
 units[43] = ['51'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2703. ";
 preguntaids[43] = 2703


//  Id pregunta: 2756 Año de creación de pregunta: 2002
 questions[44]= "45)  El &iacute;ndice m&aacute;ximo de transporte de datos de un bus PCI es:";
 choices[44]= new Array();
 choices[44][0] = "64 Mbytes/segundo";
 choices[44][1] = "16 Mbytes/segundo";
 choices[44][2] = "132 Mbytes/segundo";
 choices[44][3] = "5 Mbytes/segundo";
 answers[44] = 2;
 units[44] = ['51'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2756. ";
 preguntaids[44] = 2756


//  Id pregunta: 8723 Año de creación de pregunta: 2013
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[45]= new Array();
 choices[45][0] = "ISA";
 choices[45][1] = "HTI";
 choices[45][2] = "PCI";
 choices[45][3] = "AGP";
 answers[45] = 1;
 units[45] = ['51'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8723. Examen TICA2-2011";
 preguntaids[45] = 8723


//  Id pregunta: 2696 Año de creación de pregunta: 2002
 questions[46]= "47)  CICS";
 choices[46]= new Array();
 choices[46][0] = "Es un ordenador con un conjunto de instrucciones complejo";
 choices[46][1] = "Es un servidor de directorio x500";
 choices[46][2] = "Es un monitor transaccional";
 choices[46][3] = "Es un servidor de directorio LDAP";
 answers[46] = 2;
 units[46] = ['51'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2696. ";
 preguntaids[46] = 2696


