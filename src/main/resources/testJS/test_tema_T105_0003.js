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
//  Id pregunta: 9439 Año de creación de pregunta: 2014
 questions[0]= "1)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[0]= new Array();
 choices[0][0] = "Fault Mangement";
 choices[0][1] = "Configuration Management";
 choices[0][2] = "Accounting Management";
 choices[0][3] = "Improvement Management";
 answers[0] = 3;
 units[0] = ['105'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9439. ";
 preguntaids[0] = 9439


//  Id pregunta: 7720 Año de creación de pregunta: 2010
 questions[1]= "2)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivel que realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el:";
 choices[1]= new Array();
 choices[1][0] = "Nivel 2.";
 choices[1][1] = "Nivel 3.";
 choices[1][2] = "Nivel 4.";
 choices[1][3] = "Nivel 5.";
 answers[1] = 1;
 units[1] = ['105'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7720. Map 2007";
 preguntaids[1] = 7720


//  Id pregunta: 6079 Año de creación de pregunta: 2003
 questions[2]= "3)  El protocolo DHCP (&quot;Dynamic Host Configuration Protocol&quot;) permite:";
 choices[2]= new Array();
 choices[2][0] = "Resolver la direcci&oacute;n del nombre de un host.";
 choices[2][1] = "Eliminar paquetes TCP (Transmission Control Protocol)";
 choices[2][2] = "Asignar din&aacute;micamente direcciones IP";
 choices[2][3] = "Enrutar paquetes IP";
 answers[2] = 2;
 units[2] = ['105'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 6079. Examen TIC A1 MAP 2007";
 preguntaids[2] = 6079


//  Id pregunta: 10873 Año de creación de pregunta: 2015
 questions[3]= "4)  La capa de Red del modelo OSI equivale a la capa siguiente del modelo TCP:";
 choices[3]= new Array();
 choices[3][0] = "Internet";
 choices[3][1] = "Application";
 choices[3][2] = "Red";
 choices[3][3] = "Data Link";
 answers[3] = 0;
 units[3] = ['105'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10873. ";
 preguntaids[3] = 10873


//  Id pregunta: 8079 Año de creación de pregunta: 2011
 questions[4]= "5)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[4]= new Array();
 choices[4][0] = "a) 172.16.20.0";
 choices[4][1] = "172.16.24.45";
 choices[4][2] = "Ambas respuestas son correctas";
 choices[4][3] = "Ninguna respuesta es correcta";
 answers[4] = 2;
 units[4] = ['105'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8079. Analista Ayto. Madrid 2010";
 preguntaids[4] = 8079


//  Id pregunta: 7539 Año de creación de pregunta: 2010
 questions[5]= "6)  El est&aacute;ndar de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es:";
 choices[5]= new Array();
 choices[5][0] = "X.600.";
 choices[5][1] = "Open LDAP.";
 choices[5][2] = "X.400.";
 choices[5][3] = "X.500.";
 answers[5] = 3;
 units[5] = ['105'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7539. Map 2005";
 preguntaids[5] = 7539


//  Id pregunta: 8383 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;C&oacute;mo se llama la PDU de nivel 3?";
 choices[6]= new Array();
 choices[6][0] = "Paquete";
 choices[6][1] = "SPDU";
 choices[6][2] = "Trama";
 choices[6][3] = "TPDU";
 answers[6] = 0;
 units[6] = ['105'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8383. ";
 preguntaids[6] = 8383


//  Id pregunta: 7588 Año de creación de pregunta: 2010
 questions[7]= "8)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization).";
 choices[7][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation).";
 choices[7][2] = "SNA (System Network Architecture), de IBM.";
 choices[7][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union-Telecommunications).";
 answers[7] = 3;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7588. Map 2006";
 preguntaids[7] = 7588


//  Id pregunta: 6122 Año de creación de pregunta: 2003
 questions[8]= "9)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivelque realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redesgeogr&aacute;ficas distintas es el:";
 choices[8]= new Array();
 choices[8][0] = "Nivel 2";
 choices[8][1] = "Nivel 3";
 choices[8][2] = "Nivel 4";
 choices[8][3] = "Nivel 5";
 answers[8] = 1;
 units[8] = ['105'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6122. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6122


//  Id pregunta: 9264 Año de creación de pregunta: 2014
 questions[9]= "10)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[9]= new Array();
 choices[9][0] = "N3.";
 choices[9][1] = "N4.";
 choices[9][2] = "N6.";
 choices[9][3] = "N7.";
 answers[9] = 2;
 units[9] = ['105'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9264. ";
 preguntaids[9] = 9264


//  Id pregunta: 8112 Año de creación de pregunta: 2011
 questions[10]= "11)  De las siguientes afirmaciones sobre el protocolo ICMP, &iquest;cu&aacute;l es cierta?";
 choices[10]= new Array();
 choices[10][0] = "Est&aacute; definido en las RFC 792 y 2463.";
 choices[10][1] = "Se considera un protocolo de nivel de transporte, al ir sobre datagramas IP.";
 choices[10][2] = "Permite conocer la direcci&oacute;n MAC asociada a una direcci&oacute;n IP.";
 choices[10][3] = "La cabecera tiene una longitud de 4 bytes en ICMPv4 y de 8 en ICMPv6.";
 answers[10] = 0;
 units[10] = ['105', '109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8112. Examen TIC A2 2010 interna";
 preguntaids[10] = 8112


//  Id pregunta: 10912 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Qu&eacute; protocolo soporta la transmisi&oacute;n de informaci&oacute;n en tiempo real?";
 choices[11]= new Array();
 choices[11][0] = "UDP";
 choices[11][1] = "RTP";
 choices[11][2] = "SMTP";
 choices[11][3] = "NTP";
 answers[11] = 1;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 10912. ";
 preguntaids[11] = 10912


//  Id pregunta: 9267 Año de creación de pregunta: 2014
 questions[12]= "13)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[12]= new Array();
 choices[12][0] = "2, uno mayor y otro menor.";
 choices[12][1] = "3, mayor, mediano y menor.";
 choices[12][2] = "Ninguno.";
 choices[12][3] = "Depende del protocolo implementado.";
 answers[12] = 0;
 units[12] = ['105'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9267. ";
 preguntaids[12] = 9267


//  Id pregunta: 9082 Año de creación de pregunta: 2014
 questions[13]= "14)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[13]= new Array();
 choices[13][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[13][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[13][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[13][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[13] = 1;
 units[13] = ['105'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9082. ";
 preguntaids[13] = 9082


//  Id pregunta: 7523 Año de creación de pregunta: 2010
 questions[14]= "15)  Especifique de las siguientes normas aquella que pertenezca al nivel f&iacute;sico del modelo OSI:";
 choices[14]= new Array();
 choices[14][0] = "X.214-ISO 8072.";
 choices[14][1] = "RS-449.";
 choices[14][2] = "X.215-ISO 8072.";
 choices[14][3] = "802.3.";
 answers[14] = 1;
 units[14] = ['105'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 7523. Map 2005";
 preguntaids[14] = 7523


//  Id pregunta: 7751 Año de creación de pregunta: 2010
 questions[15]= "16)  En la estructura de la trama del protocolo HDLC (&laquo;High level Data Link Control&raquo;) el n&uacute;mero de bits del delimitador del comienzo de la trama es:";
 choices[15]= new Array();
 choices[15][0] = "Variable.";
 choices[15][1] = "8";
 choices[15][2] = "16";
 choices[15][3] = "32";
 answers[15] = 1;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7751. ";
 preguntaids[15] = 7751


//  Id pregunta: 10907 Año de creación de pregunta: 2015
 questions[16]= "17)  El n&uacute;mero binario 11110011 puede expresarse en hexadecimal como:";
 choices[16]= new Array();
 choices[16][0] = "A9";
 choices[16][1] = "F3";
 choices[16][2] = "0C";
 choices[16][3] = "FC";
 answers[16] = 1;
 units[16] = ['105'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 10907. ";
 preguntaids[16] = 10907


//  Id pregunta: 10870 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[17]= new Array();
 choices[17][0] = "MAC";
 choices[17][1] = "Segmento";
 choices[17][2] = "Paquete";
 choices[17][3] = "Trama";
 answers[17] = 3;
 units[17] = ['105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 10870. ";
 preguntaids[17] = 10870


//  Id pregunta: 7768 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes opciones describe correctamente la estructura de una direcci&oacute;n MAC?";
 choices[18]= new Array();
 choices[18][0] = "C&oacute;digo de red de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits.";
 choices[18][1] = "C&oacute;digo del fabricante de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits.";
 choices[18][2] = "C&oacute;digo del fabricante de 24 bits m&aacute;s c&oacute;digo de serie de 24 bits.";
 choices[18][3] = "Identidad de red de 24 bits m&aacute;s identidad de host de 24 bits.";
 answers[18] = 2;
 units[18] = ['105'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 7768. ";
 preguntaids[18] = 7768


//  Id pregunta: 7941 Año de creación de pregunta: 2011
 questions[19]= "20)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de:";
 choices[19]= new Array();
 choices[19][0] = "Enlace.";
 choices[19][1] = "Red.";
 choices[19][2] = "Transporte.";
 choices[19][3] = "Aplicaci&oacute;n.";
 answers[19] = 2;
 units[19] = ['105'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 7941. Examen TIC A2 2010";
 preguntaids[19] = 7941


//  Id pregunta: 7886 Año de creación de pregunta: 2011
 questions[20]= "21)  En el modelo de referencia de Interconexi&oacute;n de sistemas abiertos (OSI/ISO), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[20]= new Array();
 choices[20][0] = "Las normas de intercomunicaci&oacute;n entre capas constituyen cada protocolo.";
 choices[20][1] = "No todos los nodos participantes en una comunicaci&oacute;n necesitan implementar todas las capas del modelo.";
 choices[20][2] = "Cada entidad del nivel N se comunica directamente con su par.";
 choices[20][3] = "Al especificar cualquier servicio que una capa proporciona, se emplean siempre las primitivas REQUEST, INDICATION, RESPONSE, CONFIRM.";
 answers[20] = 1;
 units[20] = ['105'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7886. Examen TIC A1 2010";
 preguntaids[20] = 7886


//  Id pregunta: 10006 Año de creación de pregunta: 2015
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[21]= new Array();
 choices[21][0] = "Request.";
 choices[21][1] = "Invoke.";
 choices[21][2] = "Response.";
 choices[21][3] = "Confirmation.";
 answers[21] = 1;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10006. Examen TIC A2 2014";
 preguntaids[21] = 10006


//  Id pregunta: 8113 Año de creación de pregunta: 2011
 questions[22]= "23)  &iquest;Sobre qu&eacute; protocolo se encapsulan los paquetes DHCP?";
 choices[22]= new Array();
 choices[22][0] = "HTTP.";
 choices[22][1] = "UDP.";
 choices[22][2] = "TCP.";
 choices[22][3] = "IP.";
 answers[22] = 1;
 units[22] = ['105'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8113. Examen TIC A2 2010 interna";
 preguntaids[22] = 8113


//  Id pregunta: 9360 Año de creación de pregunta: 2014
 questions[23]= "24)  El puerto 69 es utilizado por:";
 choices[23]= new Array();
 choices[23][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[23][1] = "Finger.";
 choices[23][2] = "IMAP (Internet Message Access Protocol).";
 choices[23][3] = "SFTP (Secure File Transfer Protocol).";
 answers[23] = 0;
 units[23] = ['105'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9360. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[23] = 9360


//  Id pregunta: 8382 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un tipo de Primitiva?";
 choices[24]= new Array();
 choices[24][0] = "Received";
 choices[24][1] = "Indication";
 choices[24][2] = "Response";
 choices[24][3] = "Request";
 answers[24] = 0;
 units[24] = ['105'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8382. ";
 preguntaids[24] = 8382


//  Id pregunta: 10901 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;les de los siguientes protocolos no incluye la suite PPP?";
 choices[25]= new Array();
 choices[25][0] = "LAPB";
 choices[25][1] = "HDLC";
 choices[25][2] = "LCP";
 choices[25][3] = "SDLC";
 answers[25] = 0;
 units[25] = ['105'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10901. ";
 preguntaids[25] = 10901


//  Id pregunta: 8078 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[26]= new Array();
 choices[26][0] = "FTP.";
 choices[26][1] = "TFTP.";
 choices[26][2] = "DNS.";
 choices[26][3] = "Ninguno de los anteriores.";
 answers[26] = 2;
 units[26] = ['105', '109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8078. Analista Ayto. Madrid 2010";
 preguntaids[26] = 8078


//  Id pregunta: 6106 Año de creación de pregunta: 2003
 questions[27]= "28)  En relaci&oacute;n con las ventanas de cr&eacute;dito (de recepci&oacute;n y de envio) que utiliza el protocolo TCP para el control deflujo, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[27]= new Array();
 choices[27][0] = "Permiten que el emisor no tenga que esperar un ACK (acknowledge) para cada segmento de datostransmitido";
 choices[27][1] = "El tama&ntilde;o del b&uacute;fer de esta ventanas est&aacute; limitado a 4096 bytes";
 choices[27][2] = "Impiden que se reenv&iacute;en paquetes pasado un time-out";
 choices[27][3] = "Hace que el canal de comunicaci&oacute;n est&eacute; m&aacute;s tiempo ocupado para transmitir la misma informaci&oacute;n.";
 answers[27] = 0;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 6106. Examen TIC A1 MAP 2007";
 preguntaids[27] = 6106


//  Id pregunta: 7279 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto al modelo OSI?";
 choices[28]= new Array();
 choices[28][0] = "La capa 5 establece, mantiene y cierra el di&aacute;logo entre dos aplicaciones. Controla la organizaci&oacute;n del di&aacute;logo y su sincronizaci&oacute;n";
 choices[28][1] = "La capa 4 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 choices[28][2] = "La capa 3 proporciona transmisiones extremo a extremo";
 choices[28][3] = "La capa 2 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 answers[28] = 0;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7279. ";
 preguntaids[28] = 7279


//  Id pregunta: 7522 Año de creación de pregunta: 2010
 questions[29]= "30)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera seg&uacute;n el modelo OSI en el nivel de:";
 choices[29]= new Array();
 choices[29][0] = "Transporte.";
 choices[29][1] = "Red.";
 choices[29][2] = "F&iacute;sico.";
 choices[29][3] = "Enlace.";
 answers[29] = 1;
 units[29] = ['105'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7522. Map 2005";
 preguntaids[29] = 7522


//  Id pregunta: 9260 Año de creación de pregunta: 2014
 questions[30]= "31)  Entre los conceptos fundamentales del modelo OSI no est&aacute;:";
 choices[30]= new Array();
 choices[30][0] = "Interfaz: normas de comunicaci&oacute;n entre capas.";
 choices[30][1] = "Primitivas de servicio: llamadas entrantes o salientes en cada una de las capas.";
 choices[30][2] = "Protocolo: conjunto de reglas organizadas y convenidas entre los participantes en una comunicaci&oacute;n.";
 choices[30][3] = "Servicio: cada capa recibe servicios de las entidades que se encuentran sobre ella y presta servicios a las entidades que se encuentran debajo.";
 answers[30] = 3;
 units[30] = ['105'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 9260. ";
 preguntaids[30] = 9260


//  Id pregunta: 7944 Año de creación de pregunta: 2011
 questions[31]= "32)  Hablando del modelo OSI &iquest;Cu&aacute;l de las siguientes parejas NO es correcta?";
 choices[31]= new Array();
 choices[31][0] = "Nivel 4 - HDLC.";
 choices[31][1] = "Nivel 1 - CSMA/CD.";
 choices[31][2] = "Nivel 3 - X.25.";
 choices[31][3] = "Nivel 2 - LAPB";
 answers[31] = 0;
 units[31] = ['105'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 7944. Examen TIC A2 2010";
 preguntaids[31] = 7944


//  Id pregunta: 9266 Año de creación de pregunta: 2014
 questions[32]= "33)  &iquest;Cu&aacute;l no es un fallo detectado en el modelo de referencia OSI?";
 choices[32]= new Array();
 choices[32][0] = "Se desarroll&oacute; antes de que se inventaran los protocolos, as&iacute; que no se sab&iacute;a qu&eacute; funcionalidad poner en cada capa.";
 choices[32][1] = "Las capas de red y enlace de datos est&aacute;n muy llenas y se han subdividido en subcapas, cada una con funciones distintas.";
 choices[32][2] = "La administraci&oacute;n de la red es clave en el modelo.";
 choices[32][3] = "El modelo est&aacute; dominado por una mentalidad de comunicaciones.";
 answers[32] = 2;
 units[32] = ['105'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9266. ";
 preguntaids[32] = 9266


//  Id pregunta: 10923 Año de creación de pregunta: 2015
 questions[33]= "34)  El rango de direcciones 10.0.0.0/8";
 choices[33]= new Array();
 choices[33][0] = "Es un rango de direcciones de clase C.";
 choices[33][1] = "Es un rango de direcci&oacute;n p&uacute;blicas.";
 choices[33][2] = "Es un rango de direcciones privadas.";
 choices[33][3] = "Es un rango de direcciones &ldquo;multicast&rdquo;.";
 answers[33] = 2;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 10923. ";
 preguntaids[33] = 10923


//  Id pregunta: 9265 Año de creación de pregunta: 2014
 questions[34]= "35)  Indique la opci&oacute;n falsa:";
 choices[34]= new Array();
 choices[34][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[34][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[34][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[34][3] = "Todas son verdaderas.";
 answers[34] = 0;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 9265. ";
 preguntaids[34] = 9265


//  Id pregunta: 7564 Año de creación de pregunta: 2010
 questions[35]= "36)  La sintaxis de transferencia OSI, los metaficheros gr&aacute;ficos, la sintaxis de procedimiento comercial y los elementos de mensajes y datos son normas:";
 choices[35]= new Array();
 choices[35][0] = "Sobre medios magn&eacute;ticos y &oacute;pticos.";
 choices[35][1] = "Para representaci&oacute;n de informaci&oacute;n y datos intercambiados.";
 choices[35][2] = "Del equipo l&oacute;gico.";
 choices[35][3] = "Sobre juegos de caracteres y codificaci&oacute;n.";
 answers[35] = 1;
 units[35] = ['105'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7564. Map 2005";
 preguntaids[35] = 7564


//  Id pregunta: 8369 Año de creación de pregunta: 2011
 questions[36]= "37)  HDLC define tres tipos de estaciones, dos configuraciones de enlace y tres modos de operaci&oacute;n para la transferencia de los datos. Se&ntilde;ale la respuesta correcta en relaci&oacute;n a dichas definiciones:";
 choices[36]= new Array();
 choices[36][0] = "La Configuraci&oacute;n de Enlace no Balanceada est&aacute; formada por una estaci&oacute;n primaria y una o m&aacute;s estaciones secundarias y &uacute;nicamente se permite la transmisi&oacute;n semi-duplex";
 choices[36][1] = "El modo de respuesta normal (NRM) se utiliza en la configuraci&oacute;n no balanceada";
 choices[36][2] = "El modo de respuesta as&iacute;ncrono (ARM) se utiliza en la configuraci&oacute;n balanceada.";
 choices[36][3] = "Solamente existen dos tipos de estaciones, primaria y secundaria";
 answers[36] = 1;
 units[36] = ['105'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8369. Analista Ayto. Madrid 2010";
 preguntaids[36] = 8369


//  Id pregunta: 7663 Año de creación de pregunta: 2010
 questions[37]= "38)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[37]= new Array();
 choices[37][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad.";
 choices[37][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente.";
 choices[37][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos.";
 choices[37][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad.";
 answers[37] = 3;
 units[37] = ['105'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7663. Map 2007";
 preguntaids[37] = 7663


//  Id pregunta: 6722 Año de creación de pregunta: 2009
 questions[38]= "39)  Teniendo una red IP con m&aacute;scara 255.255.240.0 &iquest;cu&aacute;ntos puestos se pueden direccionar?";
 choices[38]= new Array();
 choices[38][0] = "240";
 choices[38][1] = "512";
 choices[38][2] = "1024";
 choices[38][3] = "4094";
 answers[38] = 3;
 units[38] = ['105'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 6722. MAP 2008 A1";
 preguntaids[38] = 6722


//  Id pregunta: 6134 Año de creación de pregunta: 2003
 questions[39]= "40)  Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?:";
 choices[39]= new Array();
 choices[39][0] = "S&iacute;";
 choices[39][1] = "No";
 choices[39][2] = "Depende de la direcci&oacute;n de la Puerta de Enlace";
 choices[39][3] = "Depende de la configuraci&oacute;n del switch";
 answers[39] = 0;
 units[39] = ['105', '107', '109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 6134. Examen TIC A1 MAP 2007";
 preguntaids[39] = 6134


//  Id pregunta: 8520 Año de creación de pregunta: 2011
 questions[40]= "41)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[40]= new Array();
 choices[40][0] = "Capa F&iacute;sica de Datos";
 choices[40][1] = "Capa de Red";
 choices[40][2] = "Capa de Enlace de Datos";
 choices[40][3] = "Capa de Transporte";
 answers[40] = 2;
 units[40] = ['105'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8520. ";
 preguntaids[40] = 8520


//  Id pregunta: 8384 Año de creación de pregunta: 2011
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un ASE?";
 choices[41]= new Array();
 choices[41][0] = "ACSE";
 choices[41][1] = "MCSE";
 choices[41][2] = "RTSE";
 choices[41][3] = "ROSE";
 answers[41] = 1;
 units[41] = ['105'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8384. ";
 preguntaids[41] = 8384


//  Id pregunta: 10871 Año de creación de pregunta: 2015
 questions[42]= "43)  Cuando el servidor web envia una respuesta, seg&uacute;n el modelo OSI los datos primero se encapsulan en un";
 choices[42]= new Array();
 choices[42][0] = "Paquete";
 choices[42][1] = "Segmento";
 choices[42][2] = "Trama";
 choices[42][3] = "Frame";
 answers[42] = 1;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 10871. ";
 preguntaids[42] = 10871


//  Id pregunta: 9588 Año de creación de pregunta: 2014
 questions[43]= "44)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[43]= new Array();
 choices[43][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[43][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[43][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[43][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[43] = 3;
 units[43] = ['105'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 9588. TIC A2 2013 libre";
 preguntaids[43] = 9588


//  Id pregunta: 10081 Año de creación de pregunta: 2015
 questions[44]= "45)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[44]= new Array();
 choices[44][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[44][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[44][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[44][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[44] = 2;
 units[44] = ['105'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 10081. Examen TIC A2 2014";
 preguntaids[44] = 10081


//  Id pregunta: 8367 Año de creación de pregunta: 2011
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes asociaciones &ldquo;protocolos OSI - protocolos TCP/IP&rdquo; no es correcta?:";
 choices[45]= new Array();
 choices[45][0] = "X.500-SNMP";
 choices[45][1] = "SMTP-X.400";
 choices[45][2] = "FTAM-FTP";
 choices[45][3] = "SMTP-X.25";
 answers[45] = 0;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8367. Analista Ayto. Madrid 2010";
 preguntaids[45] = 8367


//  Id pregunta: 10872 Año de creación de pregunta: 2015
 questions[46]= "47)  Cuando un switch recibe una trama y no posee la direcci&oacute;n de destino, el switch:";
 choices[46]= new Array();
 choices[46][0] = "env&iacute;a la trama por todos los puertos";
 choices[46][1] = "env&iacute;a un ARP para obtener la direcci&oacute;n de destino de la trama";
 choices[46][2] = "reenv&iacute;a la trama por todos los puertos, excepto por el que fue recibido";
 choices[46][3] = "descarta la trama";
 answers[46] = 2;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10872. ";
 preguntaids[46] = 10872


