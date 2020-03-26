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
//  Id pregunta: 4785 Año de creación de pregunta: 2002
 questions[0]= "1)  En el modelo de referencia OSI, el nivel de red interactua directamente con:";
 choices[0]= new Array();
 choices[0][0] = "El nivel de aplicaci&oacute;n y el nivel f&iacute;sico";
 choices[0][1] = "El nivel de transporte, el nivel de enlace, y sus niveles 'iguales' en otros sistemas";
 choices[0][2] = "El nivel de presentaci&oacute;n, el nivel de sesi&oacute;n y el usuario final";
 choices[0][3] = "Todos los niveles altos y los niveles bajos en los otros sistemas";
 answers[0] = 1;
 units[0] = ['105'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4785. ";
 preguntaids[0] = 4785


//  Id pregunta: 4866 Año de creación de pregunta: 2002
 questions[1]= "2)  Indique qu&eacute; campo de los que se relacionan no est&aacute; incluido en la cabecera de segmento TCP:";
 choices[1]= new Array();
 choices[1][0] = "N&uacute;mero de paquetes enviados por la conexi&oacute;n";
 choices[1][1] = "Posici&oacute;n en bytes donde empiezan los bytes urgentes";
 choices[1][2] = "Direcciones IP de origen y destino";
 choices[1][3] = "Petici&oacute;n de resetear la sesi&oacute;n";
 answers[1] = 2;
 units[1] = ['105'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4866. ";
 preguntaids[1] = 4866


//  Id pregunta: 5944 Año de creación de pregunta: 2007
 questions[2]= "3)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientesprotocolos:";
 choices[2]= new Array();
 choices[2][0] = "ARP (Address Resolution Protocol)";
 choices[2][1] = "RARP (Reverse Address Resolution Protocol)";
 choices[2][2] = "BOOTP (Bootstrap Protocol)";
 choices[2][3] = "IGMP (Internet Group Management Protocol)";
 answers[2] = 2;
 units[2] = ['105'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5944. ";
 preguntaids[2] = 5944


//  Id pregunta: 4911 Año de creación de pregunta: 2002
 questions[3]= "4)  La recomendaci&oacute;n RFC-1006 define:";
 choices[3]= new Array();
 choices[3][0] = "Funciones de un protocolo de red";
 choices[3][1] = "El protocolo de transporte TCP";
 choices[3][2] = "El protocolo de transporte UDP";
 choices[3][3] = "Protocolo de convergencia de TCP a TP0";
 answers[3] = 3;
 units[3] = ['105'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4911. ";
 preguntaids[3] = 4911


//  Id pregunta: 4789 Año de creación de pregunta: 2002
 questions[4]= "5)  En el modelo de referencia OSI, una interfaz:";
 choices[4]= new Array();
 choices[4][0] = "Define las primitivas y los servicios que una capa ofrece a todas las que est&aacute;n sobre ella";
 choices[4][1] = "Define los servicios y las primitivas que una capa ofrece a la inmediatamente superior";
 choices[4][2] = "Define la funcionalidad final que el sistema ofrece al usuario";
 choices[4][3] = "Define las reglas y convenios para que dos procesos en diferentes m&aacute;quinas comuniquen entre s&iacute;";
 answers[4] = 1;
 units[4] = ['105'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4789. ";
 preguntaids[4] = 4789


//  Id pregunta: 4853 Año de creación de pregunta: 2002
 questions[5]= "6)  En una comparaci&oacute;n entre modelos OSI y TCP/IP, es falso que:";
 choices[5]= new Array();
 choices[5][0] = "TCP/IP est&aacute; basado en protocolos existentes, mientras que OSI de ISO es independiente del protocolo";
 choices[5][1] = "En OSI los niveles 2 y 3 est&aacute;n sobrecargados, y los niveles 5 y 6 tienen poca funcionalidad";
 choices[5][2] = "En OSI, al igual que en TCP/IP, las primeras implementaciones no tuvieron apenas errores y se distribuyeron gratuitamente, lo que contribuy&oacute; a su difusi&oacute;n";
 choices[5][3] = "En OSI el nivel de transporte es s&oacute;lo orientado a conexi&oacute;n, y el de red soporta servicios orientados y no orientados a conexi&oacute;n, no como en TCP/IP";
 answers[5] = 2;
 units[5] = ['105'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4853. ";
 preguntaids[5] = 4853


//  Id pregunta: 4801 Año de creación de pregunta: 2002
 questions[6]= "7)  En el protocolo IPv6:";
 choices[6]= new Array();
 choices[6][0] = "El campo 'Hop Limit' es similar al TTL en IP v4";
 choices[6][1] = "Los campos de direcciones tienen 128 bits de longitud";
 choices[6][2] = "No existe ning&uacute;n campo CRC de cabecera";
 choices[6][3] = "Todas las anteriores respuestas son correctas";
 answers[6] = 3;
 units[6] = ['105'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4801. ";
 preguntaids[6] = 4801


//  Id pregunta: 4961 Año de creación de pregunta: 2002
 questions[7]= "8)  Las direcciones anycast en IPv6 se caracterizan por:";
 choices[7]= new Array();
 choices[7][0] = "identificar a una &uacute;nica interfaz";
 choices[7][1] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a una de ellas, eligi&eacute;ndose la mejor desde el punto de vista de la topoog&iacute;a de red";
 choices[7][2] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a todas las interfaces";
 choices[7][3] = "ninguna de las anteriores respuestas es correcta";
 answers[7] = 1;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4961. ";
 preguntaids[7] = 4961


//  Id pregunta: 4747 Año de creación de pregunta: 2002
 questions[8]= "9)  El protocolo IP se dise&ntilde;&oacute; en la RFC:";
 choices[8]= new Array();
 choices[8][0] = "793";
 choices[8][1] = "791";
 choices[8][2] = "768";
 choices[8][3] = "821";
 answers[8] = 1;
 units[8] = ['105'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4747. ";
 preguntaids[8] = 4747


//  Id pregunta: 4994 Año de creación de pregunta: 2002
 questions[9]= "10)  Los protocolos TP0 y TP2 de OSI est&aacute;n dise&ntilde;ados para redes de tipo A (fiables). &iquest;Cu&aacute;l de las siguentes afirmaciones es correcta?:";
 choices[9]= new Array();
 choices[9][0] = "TP0 no dispone de mecanismos de checksum y TP2 s&iacute;";
 choices[9][1] = "TP2 numera las TPDUs (Transport Protocolo Data Unit) y TP0 no";
 choices[9][2] = "En TP2 existen mecanismos de restablecimiento de la conexi&oacute;n mientras que en TP0 no";
 choices[9][3] = "Ambos permiten el multiplexado Ascendente (varias conexiones de transporte pueden usar la misma de red)";
 answers[9] = 1;
 units[9] = ['105'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4994. ";
 preguntaids[9] = 4994


//  Id pregunta: 4808 Año de creación de pregunta: 2002
 questions[10]= "11)  En HDLC, si un sistema inicia el enlace con SABM P, su estaci&oacute;n colateral, para establecer el enlace, le responder&aacute; con:";
 choices[10]= new Array();
 choices[10][0] = "SABM F";
 choices[10][1] = "SABM P";
 choices[10][2] = "UA F";
 choices[10][3] = "UA P";
 answers[10] = 2;
 units[10] = ['105'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4808. ";
 preguntaids[10] = 4808


//  Id pregunta: 5168 Año de creación de pregunta: 2003
 questions[11]= "12)  En el modelo OSI de ISO indicar cu&aacute;l de los siguientes p&aacute;rrafos describe el nivel de Sesi&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Proporciona el control de di&aacute;logo, con el fin de mantener un registro en la parte que est&aacute; hablando en cierto momento y proporciona facilidades en la sincronizaci&oacute;n";
 choices[11][1] = "Es una colecci&oacute;n de varios protocolos para actividades comunes, como el correo electr&oacute;nico, la transferencia de archivos y la conexi&oacute;n entre terminales remotos a las computadoras en una red";
 choices[11][2] = "Es la que se encarga de la elecci&oacute;n de la mejor ruta, conectando con orientaci&oacute;n a conexi&oacute;n o sin ella";
 choices[11][3] = "Es la que se encarga de los mecanismos de detecci&oacute;n y correcci&oacute;n de errores";
 answers[11] = 0;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5168. ";
 preguntaids[11] = 5168


//  Id pregunta: 4914 Año de creación de pregunta: 2002
 questions[12]= "13)  Cual seria el formato de direcciones IPv4 compatibles en Ipv6";
 choices[12]= new Array();
 choices[12][0] = "::&lt;direcci&oacute;n_IPv4&gt;";
 choices[12][1] = "::FFFF:&lt;direcci&oacute;n_IPv4&gt;";
 choices[12][2] = ":&lt;direcci&oacute;n_IPv4&gt;";
 choices[12][3] = "&lt;direcci&oacute;n_IPv4&gt;::";
 answers[12] = 0;
 units[12] = ['105'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4914. ";
 preguntaids[12] = 4914


//  Id pregunta: 4872 Año de creación de pregunta: 2002
 questions[13]= "14)  La codificaci&oacute;n Manchester tambi&eacute;n es conocida como:";
 choices[13]= new Array();
 choices[13][0] = "C&oacute;digo NRZ polar";
 choices[13][1] = "C&oacute;digo NRZ bipolar";
 choices[13][2] = "C&oacute;digo NRZ normal";
 choices[13][3] = "C&oacute;digo bifase";
 answers[13] = 3;
 units[13] = ['105'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4872. ";
 preguntaids[13] = 4872


//  Id pregunta: 4813 Año de creación de pregunta: 2002
 questions[14]= "15)  En la provisi&oacute;n de conexi&oacute;n del nivel de transporte al nivel de sesi&oacute;n del modelo OSI:";
 choices[14]= new Array();
 choices[14][0] = "Es posible el soporte simult&aacute;neo de varias conexiones de sesi&oacute;n por una sola conexi&oacute;n de transporte";
 choices[14][1] = "Una conexi&oacute;n de sesi&oacute;n no puede ser soportada por varias conexiones de transporte secuencialmente";
 choices[14][2] = "No es posible el soporte secuencial de varias conexiones de sesi&oacute;n por una de transporte";
 choices[14][3] = "Una sola conexi&oacute;n de sesi&oacute;n puede ser soportada por varias conexiones de transporte secuencialmente";
 answers[14] = 3;
 units[14] = ['105'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4813. ";
 preguntaids[14] = 4813


//  Id pregunta: 4787 Año de creación de pregunta: 2002
 questions[15]= "16)  En el modelo de referencia OSI, los problemas planteados por la falta de fiabilidad de los circuitos como consecuencia de errores en los datos recibidos se resuelven en:";
 choices[15]= new Array();
 choices[15][0] = "El nivel f&iacute;sico";
 choices[15][1] = "El nivel de enlace";
 choices[15][2] = "El nivel de red";
 choices[15][3] = "El nivel de transporte";
 answers[15] = 1;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4787. ";
 preguntaids[15] = 4787


//  Id pregunta: 5413 Año de creación de pregunta: 2006
 questions[16]= "17)  La sintaxis de transferencia OSI, los metaficheros gr&aacute;ficos, la sint&aacute;xis de procedimiento comercial y los elementos de mensajes y datos son normas:";
 choices[16]= new Array();
 choices[16][0] = "Sobre medios magn&eacute;ticos y &oacute;pticos";
 choices[16][1] = "Para representaci&oacute;n de informaci&oacute;n y datos intercambiados";
 choices[16][2] = "Del equipo l&oacute;gico";
 choices[16][3] = "Sobre juegos de caracteres y codificaci&oacute;n";
 answers[16] = 1;
 units[16] = ['105'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5413. ";
 preguntaids[16] = 5413


//  Id pregunta: 4971 Año de creación de pregunta: 2002
 questions[17]= "18)  Las tramas son las unidades del nivel de enlace mientras que los paquetes pertenecen al nivel de:";
 choices[17]= new Array();
 choices[17][0] = "Nivel o estrato f&iacute;sico";
 choices[17][1] = "Nivel o estrato de red";
 choices[17][2] = "Nivel o estrato de sesi&oacute;n";
 choices[17][3] = "Nivel o estrato de transporte";
 answers[17] = 1;
 units[17] = ['105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4971. ";
 preguntaids[17] = 4971


//  Id pregunta: 4968 Año de creación de pregunta: 2002
 questions[18]= "19)  Las funciones del modelo OSI siguientes: criptograf&iacute;a, gesti&oacute;n de conversaciones, detecci&oacute;n de errores extremo a extremo, validaciones de tensiones el&eacute;ctricas, garantizar la conexi&oacute;n punto a punto; corresponden, por este orden, a los niveles OSI:";
 choices[18]= new Array();
 choices[18][0] = "Presentaci&oacute;n, aplicaci&oacute;n, transporte, f&iacute;sico, red";
 choices[18][1] = "Presentaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, enlace";
 choices[18][2] = "Aplicaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, red";
 choices[18][3] = "Aplicaci&oacute;n, sesi&oacute;n, red, enlace, transporte";
 answers[18] = 1;
 units[18] = ['105'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4968. ";
 preguntaids[18] = 4968


//  Id pregunta: 4811 Año de creación de pregunta: 2002
 questions[19]= "20)  En IPv4, las direcciones que van desde 192.0.0.0 hasta 223.255.255.255 son del tipo:";
 choices[19]= new Array();
 choices[19][0] = "A";
 choices[19][1] = "B";
 choices[19][2] = "C";
 choices[19][3] = "D";
 answers[19] = 2;
 units[19] = ['105'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4811. ";
 preguntaids[19] = 4811


//  Id pregunta: 4887 Año de creación de pregunta: 2002
 questions[20]= "21)  La funci&oacute;n de asociar sesiones con conexiones de transporte corresponde a:";
 choices[20]= new Array();
 choices[20][0] = "Nivel 3 Red";
 choices[20][1] = "Nivel 4 Transporte";
 choices[20][2] = "Nivel 5 Sesi&oacute;n";
 choices[20][3] = "Nivel 6 Presentaci&oacute;n";
 answers[20] = 1;
 units[20] = ['105'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4887. ";
 preguntaids[20] = 4887


//  Id pregunta: 4791 Año de creación de pregunta: 2002
 questions[21]= "22)  En el modelo de referencia para interconexi&oacute;n de sistemas abiertos (ISO OSI) indicar cu&aacute;l de las siguientes respuestas es verdadera:";
 choices[21]= new Array();
 choices[21][0] = "El est&aacute;ndar RS-232-C se ha desarrollado para las l&iacute;neas de comunicaci&oacute;n de la capa f&iacute;sica";
 choices[21][1] = "El nivel de enlace corresponde a la l&iacute;nea 4";
 choices[21][2] = "El protocolo de enlace de datos se ocupa de la estandarizaci&oacute;n de las interfaces el&eacute;ctricas, mec&aacute;nicas y de se&ntilde;alizaci&oacute;n";
 choices[21][3] = "Es un modelo de 9 capas";
 answers[21] = 0;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4791. ";
 preguntaids[21] = 4791


//  Id pregunta: 4795 Año de creación de pregunta: 2002
 questions[22]= "23)  En el nivel de enlace, usado en redes locales, el subnivel que garantiza la independencia de las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n (par trenzado, cable coaxial, fibra &oacute;ptica...) es:";
 choices[22]= new Array();
 choices[22][0] = "El MAC (Medium Access Control)";
 choices[22][1] = "El LLC (Logical Link Control)";
 choices[22][2] = "Un puente";
 choices[22][3] = "Un repetidor";
 answers[22] = 0;
 units[22] = ['105'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4795. ";
 preguntaids[22] = 4795


//  Id pregunta: 4863 Año de creación de pregunta: 2002
 questions[23]= "24)  Entre las respuestas hay tres relacionadas. Indicar la que no lo est&aacute;:";
 choices[23]= new Array();
 choices[23][0] = "BOOTP";
 choices[23][1] = "SNMP";
 choices[23][2] = "DHCP";
 choices[23][3] = "ARP";
 answers[23] = 1;
 units[23] = ['105'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4863. ";
 preguntaids[23] = 4863


//  Id pregunta: 4972 Año de creación de pregunta: 2002
 questions[24]= "25)  Las unidades de informaci&oacute;n entre redes contienen una o m&aacute;s cabeceras que se usan para:";
 choices[24]= new Array();
 choices[24][0] = "Transportar datos a la aplicaci&oacute;n software receptora";
 choices[24][1] = "Evitar que los datos transmitidos por una estaci&oacute;n interfieran con los de otra";
 choices[24][2] = "Asegurar un acceso ordenado al medio f&iacute;sico";
 choices[24][3] = "Pasar informaci&oacute;n de control a los niveles OSI (o equivalentes) en el sistema de destino";
 answers[24] = 3;
 units[24] = ['105'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4972. ";
 preguntaids[24] = 4972


//  Id pregunta: 4918 Año de creación de pregunta: 2002
 questions[25]= "26)  La sintaxis de transferencia en ASN.1:";
 choices[25]= new Array();
 choices[25][0] = "Est&aacute; definida dentro del nivel 5 del modelo OSI de ISO";
 choices[25][1] = "Es una sintaxis totalmente conceptual";
 choices[25][2] = "Fue reemplazada por las sintaxis abstractas";
 choices[25][3] = "Ninguna de las anteriores es verdadera";
 answers[25] = 3;
 units[25] = ['105'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4918. ";
 preguntaids[25] = 4918


//  Id pregunta: 5054 Año de creación de pregunta: 2002
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de las siguientes no es una arquitectura de comunicaciones:";
 choices[26]= new Array();
 choices[26][0] = "SNA";
 choices[26][1] = "SMTP";
 choices[26][2] = "OSI";
 choices[26][3] = "TCP/IP";
 answers[26] = 1;
 units[26] = ['105'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5054. ";
 preguntaids[26] = 5054


//  Id pregunta: 4780 Año de creación de pregunta: 2002
 questions[27]= "28)  En el concepto de ventana deslizante:";
 choices[27]= new Array();
 choices[27][0] = "El tama&ntilde;o de la ventana es el n&uacute;mero de paquetes a enviar sin esperar su reconocimiento";
 choices[27][1] = "La ventana avanza de posici&oacute;n seg&uacute;n el asentimiento de paquetes anteriormente enviados";
 choices[27][2] = "Los asentimientos pueden recibirse de forma desordenada";
 choices[27][3] = "Todo lo anterior es correcto";
 answers[27] = 3;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4780. ";
 preguntaids[27] = 4780


//  Id pregunta: 5902 Año de creación de pregunta: 2007
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) yUDP (User Datagram Protocol) es cierta?";
 choices[28]= new Array();
 choices[28][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores";
 choices[28][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos";
 choices[28][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP(Internet Protocol), que es un protocolo de red no fiable";
 choices[28][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite";
 answers[28] = 3;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5902. ";
 preguntaids[28] = 5902


//  Id pregunta: 4800 Año de creación de pregunta: 2002
 questions[29]= "30)  En el protocolo IPv6:";
 choices[29]= new Array();
 choices[29][0] = "El campo 'Traffic Class' tiene 8 bits de longitud";
 choices[29][1] = "El campo 'Priority' tiene 8 bits de longitud";
 choices[29][2] = "El campo 'Header CheckSum' tiene 8 bits de longitud";
 choices[29][3] = "El campo 'TOS' indica el tipo de servicio";
 answers[29] = 0;
 units[29] = ['105'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4800. ";
 preguntaids[29] = 4800


//  Id pregunta: 4879 Año de creación de pregunta: 2002
 questions[30]= "31)  La direcci&oacute;n loopback en IPv6 es:";
 choices[30]= new Array();
 choices[30][0] = "0:0:0:0:0:0:0:1";
 choices[30][1] = "0:0:0:0:0:0:0:0";
 choices[30][2] = "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:";
 choices[30][3] = "F:F:F:F:F:F:F:F";
 answers[30] = 0;
 units[30] = ['105'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4879. ";
 preguntaids[30] = 4879


//  Id pregunta: 4943 Año de creación de pregunta: 2002
 questions[31]= "32)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[31]= new Array();
 choices[31][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[31][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[31][2] = "Enlace - Conector V.24, Conector V.35";
 choices[31][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[31] = 2;
 units[31] = ['105'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4943. ";
 preguntaids[31] = 4943


//  Id pregunta: 4953 Año de creación de pregunta: 2002
 questions[32]= "33)  Una transmisi&oacute;n de datos que consiste en un &uacute;nico paquete de datos se env&iacute;a a un subconjunto espec&iacute;fico de los nodos de una red se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Broadcast";
 choices[32][1] = "Multicast";
 choices[32][2] = "Subnetcast";
 choices[32][3] = "Unicast";
 answers[32] = 1;
 units[32] = ['105'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4953. ";
 preguntaids[32] = 4953


//  Id pregunta: 4790 Año de creación de pregunta: 2002
 questions[33]= "34)  En el modelo de referencia OSI:";
 choices[33]= new Array();
 choices[33][0] = "El nivel de aplicaci&oacute;n controla el intercambio de datos entre los extremos";
 choices[33][1] = "El nivel de red pasa los datos al nivel de sesi&oacute;n";
 choices[33][2] = "El nivel f&iacute;sico establece las especificaciones el&eacute;ctricas de la transmisi&oacute;n";
 choices[33][3] = "El nivel de sesi&oacute;n recoge datos de la red y los pasa al nivel de aplicaci&oacute;n";
 answers[33] = 2;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4790. ";
 preguntaids[33] = 4790


//  Id pregunta: 5119 Año de creación de pregunta: 2003
 questions[34]= "35)  En el Modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI), indicar cu&aacute;l de los siguientes niveles no soporta la funci&oacute;n o servicio de correcci&oacute;n de errores:";
 choices[34]= new Array();
 choices[34][0] = "F&iacute;sico";
 choices[34][1] = "Enlace";
 choices[34][2] = "Red";
 choices[34][3] = "Aplicaci&oacute;n";
 answers[34] = 0;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5119. ";
 preguntaids[34] = 5119


//  Id pregunta: 4749 Año de creación de pregunta: 2002
 questions[35]= "36)  El protocolo que facilita un mecanismo para asignar din&aacute;micamente las direcciones IP, en el que las direcciones pueden ser rechazadas por los clientes, es:";
 choices[35]= new Array();
 choices[35][0] = "ARP";
 choices[35][1] = "RARP";
 choices[35][2] = "RIP";
 choices[35][3] = "DHCP";
 answers[35] = 3;
 units[35] = ['105'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4749. ";
 preguntaids[35] = 4749


//  Id pregunta: 4784 Año de creación de pregunta: 2002
 questions[36]= "37)  En el modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se definen una serie de niveles. &iquest;Cu&aacute;l o cuales de los siguientes deber&iacute;a soportar la red de conmutaci&oacute;n en un caso ideal?:";
 choices[36]= new Array();
 choices[36][0] = "Los tres primeros: f&iacute;sico, enlace y red";
 choices[36][1] = "El nivel 3: red";
 choices[36][2] = "Los niveles 3 y 4: transporte y red";
 choices[36][3] = "Los dos primeros niveles: f&iacute;sico y enlace";
 answers[36] = 0;
 units[36] = ['105'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4784. ";
 preguntaids[36] = 4784


//  Id pregunta: 5121 Año de creación de pregunta: 2003
 questions[37]= "38)  En el nivel de Enlace del modelo OSI, parada-espera, adelante-atr&aacute;s, y rechazo selectivo, son:";
 choices[37]= new Array();
 choices[37][0] = "M&eacute;todos de detecci&oacute;n de errores.";
 choices[37][1] = "Mecanismos de solicitud de repetici&oacute;n autom&aacute;tica (ARQ).";
 choices[37][2] = "Protocolos de control de enlace de alto nivel.";
 choices[37][3] = "Procedimientos de acceso al enlace.";
 answers[37] = 1;
 units[37] = ['105'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5121. Junta Andaluc&iacute;a";
 preguntaids[37] = 5121


//  Id pregunta: 4788 Año de creación de pregunta: 2002
 questions[38]= "39)  En el modelo de referencia OSI, una comunicaci&oacute;n entre dos capas se denomina confirmada, si hay:";
 choices[38]= new Array();
 choices[38][0] = "Una petici&oacute;n y una respuesta";
 choices[38][1] = "Una petici&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[38][2] = "Una petici&oacute;n, una indicaci&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[38][3] = "Todas las anteriores son incompletas";
 answers[38] = 2;
 units[38] = ['105'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4788. ";
 preguntaids[38] = 4788


//  Id pregunta: 4877 Año de creación de pregunta: 2002
 questions[39]= "40)  La direcci&oacute;n IP:";
 choices[39]= new Array();
 choices[39][0] = "Es &uacute;nica para cada tarjeta de red";
 choices[39][1] = "Es asignada por una entidad supranacional";
 choices[39][2] = "Puede ser modificada manualmente en UNIX";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = 2;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4877. ";
 preguntaids[39] = 4877


//  Id pregunta: 4978 Año de creación de pregunta: 2002
 questions[40]= "41)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[40]= new Array();
 choices[40][0] = "X.400";
 choices[40][1] = "I.200";
 choices[40][2] = "X.500";
 choices[40][3] = "X.200";
 answers[40] = 3;
 units[40] = ['105'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4978. ";
 preguntaids[40] = 4978


//  Id pregunta: 5003 Año de creación de pregunta: 2002
 questions[41]= "42)  Los tipos diferentes de primitivas existentes en el modelo OSI son:";
 choices[41]= new Array();
 choices[41][0] = "Request, Answer, Finalization";
 choices[41][1] = "Request, Response, Indication, Confirmation";
 choices[41][2] = "Request, Response, Error, Indication, Confirmation, Replay";
 choices[41][3] = "Dependen del protocolo, cada protocolo tiene un conjunto distinto de tipos de primitivas";
 answers[41] = 1;
 units[41] = ['105'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5003. ";
 preguntaids[41] = 5003


//  Id pregunta: 4878 Año de creación de pregunta: 2002
 questions[42]= "43)  La direcci&oacute;n IPv4 172.30.20.20:";
 choices[42]= new Array();
 choices[42][0] = "Es una direcci&oacute;n privada";
 choices[42][1] = "Es una direcci&oacute;n p&uacute;blica";
 choices[42][2] = "Es una direcci&oacute;n de clase C";
 choices[42][3] = "Es una direcci&oacute;n de clase D";
 answers[42] = 0;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4878. ";
 preguntaids[42] = 4878


//  Id pregunta: 6057 Año de creación de pregunta: 2003
 questions[43]= "44)  &iquest;Cu&aacute;l es la versi&oacute;n ampliada del protocolo BOOTP?:";
 choices[43]= new Array();
 choices[43][0] = "DHCP.";
 choices[43][1] = "RARP.";
 choices[43][2] = "DNS.";
 choices[43][3] = "WINS.";
 answers[43] = 0;
 units[43] = ['105'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 6057. TIC B 2007";
 preguntaids[43] = 6057


//  Id pregunta: 4936 Año de creación de pregunta: 2002
 questions[44]= "45)  Un protocolo, seg&uacute;n el modelo OSI:";
 choices[44]= new Array();
 choices[44][0] = "especifica reglas sint&aacute;cticas, sem&aacute;nticas y gram&aacute;ticas que determinan la comunicaci&oacute;n entre entidades del mismo nivel";
 choices[44][1] = "especifica reglas sint&aacute;cticas, sem&aacute;nticas y gram&aacute;ticas que determinan la comunicaci&oacute;n entre entidades de distinto nivel";
 choices[44][2] = "no especifica reglas de comportamiento, s&oacute;lo de sintaxis entre los mensajes intercambiados";
 choices[44][3] = "es especificado en un lenguaje de prop&oacute;sito general, por lo general dependiente de la m&aacute;quina en la que se ejecute dicho protocolo";
 answers[44] = 0;
 units[44] = ['105'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4936. ";
 preguntaids[44] = 4936


//  Id pregunta: 4874 Año de creación de pregunta: 2002
 questions[45]= "46)  La diferencia entre protocolo e interfaz seg&uacute;n OSI es:";
 choices[45]= new Array();
 choices[45][0] = "entre otras, un protocolo se refiere a entidades de distintos niveles y un interfaz a entidades del mismo nivel";
 choices[45][1] = "ambos conceptos se refieren a entidades de distintos niveles";
 choices[45][2] = "ambos conceptos se refieren a entidades del mismo nivel";
 choices[45][3] = "entre otras, un protocolo se refiere a entidades del mismo nivel y un interfaz a entidades de distintos niveles";
 answers[45] = 3;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4874. ";
 preguntaids[45] = 4874


//  Id pregunta: 4746 Año de creación de pregunta: 2002
 questions[46]= "47)  El protocolo HDLC&hellip;:";
 choices[46]= new Array();
 choices[46][0] = "Es un protocolo de nivel f&iacute;sico";
 choices[46][1] = "Es un protocolo a nivel de enlace";
 choices[46][2] = "Es un protocolo a nive de red";
 choices[46][3] = "Es un protocolo a nivel de transporte";
 answers[46] = 1;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4746. ";
 preguntaids[46] = 4746


//  Id pregunta: 5181 Año de creación de pregunta: 2003
 questions[47]= "48)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[47]= new Array();
 choices[47][0] = "d a c b";
 choices[47][1] = "a b c d";
 choices[47][2] = "b c d a";
 choices[47][3] = "b a d c";
 answers[47] = 0;
 units[47] = ['105'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5181. ";
 preguntaids[47] = 5181


//  Id pregunta: 4793 Año de creación de pregunta: 2002
 questions[48]= "49)  En el modo de operaci&oacute;n denominado datagrama:";
 choices[48]= new Array();
 choices[48][0] = "Trabaja en modo 'conexi&oacute;n'";
 choices[48][1] = "Requiere el establecimiento previo de un circuito f&iacute;sico o virtual";
 choices[48][2] = "Los paquetes pueden viajar por rutas diferentes";
 choices[48][3] = "Requiere equipos terminales y software m&aacute;s sencillo";
 answers[48] = 2;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4793. ";
 preguntaids[48] = 4793


//  Id pregunta: 5014 Año de creación de pregunta: 2002
 questions[49]= "50)  Para especificar un protocolo en el modelo OSI son necesarios:";
 choices[49]= new Array();
 choices[49][0] = "S&oacute;lo la descripci&oacute;n de las PDUs que lo forman, junto con su prop&oacute;sito y los campos que las forman";
 choices[49][1] = "La a) y la descripci&oacute;n de los servicios usados, procedimientos seguidos y descripci&oacute;n formal (usando por ejemplo ASN.1)";
 choices[49][2] = "La b) y adem&aacute;s la descripci&oacute;n del comportamiento interno-externo";
 choices[49][3] = "Un protocolo no se puede especificar libremente, ya que hay impuestas condiciones referentes al sistema operativo y/o los lenguajes de programaci&oacute;n que usen las m&aacute;quinas en las que se implante";
 answers[49] = 1;
 units[49] = ['105'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5014. ";
 preguntaids[49] = 5014


//  Id pregunta: 4755 Año de creación de pregunta: 2002
 questions[50]= "51)  El protocolo X.10 es conocido en:";
 choices[50]= new Array();
 choices[50][0] = "Aplicaciones de telefon&iacute;a m&oacute;vil.";
 choices[50][1] = "Aplicaciones de radares.";
 choices[50][2] = "Aplicaciones dom&oacute;ticas.";
 choices[50][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[50] = 2;
 units[50] = ['105'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4755. ";
 preguntaids[50] = 4755


//  Id pregunta: 4762 Año de creación de pregunta: 2002
 questions[51]= "52)  El subnivel MAC del nivel de enlace de datos de la pila de protocolos OSI proporciona:";
 choices[51]= new Array();
 choices[51][0] = "Las direcciones de los puntos de acceso al servicio";
 choices[51][1] = "Servicios orientados a la conexi&oacute;n";
 choices[51][2] = "Servicios orientados a la conexi&oacute;n con reconocimiento";
 choices[51][3] = "La direcci&oacute;n f&iacute;sica de un dispositivo de la red";
 answers[51] = 3;
 units[51] = ['105'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4762. ";
 preguntaids[51] = 4762


//  Id pregunta: 5934 Año de creación de pregunta: 2007
 questions[52]= "53)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4)?";
 choices[52]= new Array();
 choices[52][0] = "32";
 choices[52][1] = "64";
 choices[52][2] = "128";
 choices[52][3] = "256";
 answers[52] = 0;
 units[52] = ['105', '109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5934. ";
 preguntaids[52] = 5934


//  Id pregunta: 4916 Año de creación de pregunta: 2002
 questions[53]= "54)  La RFC que contiene las especificaciones del protocolo IPv6 es:";
 choices[53]= new Array();
 choices[53][0] = "1945";
 choices[53][1] = "1884";
 choices[53][2] = "2460";
 choices[53][3] = "2584";
 answers[53] = 2;
 units[53] = ['105'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4916. ";
 preguntaids[53] = 4916


//  Id pregunta: 5120 Año de creación de pregunta: 2003
 questions[54]= "55)  En el modelo OSI de 7 capas, la capa 2 de Enlace de Datos cuenta con protocolos est&aacute;ndares como:";
 choices[54]= new Array();
 choices[54][0] = "HDLC, LAPB y LAPD.";
 choices[54][1] = "SDLC, LAPB e ICMP.";
 choices[54][2] = "LAPB, LAPD y LAPH.";
 choices[54][3] = "HDLC, LAPB e ICMP.";
 answers[54] = 0;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5120. Junta Andaluc&iacute;a";
 preguntaids[54] = 5120


//  Id pregunta: 5585 Año de creación de pregunta: 2007
 questions[55]= "56)  &iquest;A qu&eacute; nivel del modelo OSI se realiza el encapsulamiento Frame Relay y HDLC?";
 choices[55]= new Array();
 choices[55][0] = "Red.";
 choices[55][1] = "Sesi&oacute;n.";
 choices[55][2] = "Enlace de datos.";
 choices[55][3] = "Transporte.";
 answers[55] = 2;
 units[55] = ['105'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 5585. ";
 preguntaids[55] = 5585


//  Id pregunta: 4794 Año de creación de pregunta: 2002
 questions[56]= "57)  En el nivel de enlace, respecto al protocolo HDLC puede decirse que:";
 choices[56]= new Array();
 choices[56][0] = "Es un protocolo orientado a car&aacute;cter";
 choices[56][1] = "El modo de respuesta normal se conoce como NRM";
 choices[56][2] = "El modo de respuesta asincrono se conoce como ARM";
 choices[56][3] = "Las respuestas 'b' y 'c' son correctas";
 answers[56] = 3;
 units[56] = ['105'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4794. ";
 preguntaids[56] = 4794


//  Id pregunta: 4768 Año de creación de pregunta: 2002
 questions[57]= "58)  El tipo de formato de clase C de direcci&oacute;n IP se emplea mayoritariamente para:";
 choices[57]= new Array();
 choices[57][0] = "Las redes de &aacute;rea local";
 choices[57][1] = "Grandes organizaciones p&uacute;blicas y multinacionales que poseen gran n&uacute;mero de subredes";
 choices[57][2] = "Mensajes de difusi&oacute;n m&uacute;ltiple (multicast)";
 choices[57][3] = "Fines experimentales";
 answers[57] = 0;
 units[57] = ['105'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4768. ";
 preguntaids[57] = 4768


//  Id pregunta: 4962 Año de creación de pregunta: 2002
 questions[58]= "59)  Las direcciones de tipo B en IPv4:";
 choices[58]= new Array();
 choices[58][0] = "Comienzan por '110'";
 choices[58][1] = "incluyen entre ellas a la direcci&oacute;n 193.168.25.73";
 choices[58][2] = "destina 16 bits para los sistemas";
 choices[58][3] = "es utilizada para direcciones multicast";
 answers[58] = 2;
 units[58] = ['105'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4962. ";
 preguntaids[58] = 4962


//  Id pregunta: 4993 Año de creación de pregunta: 2002
 questions[59]= "60)  Los protocolos de control de enlace se orientan:";
 choices[59]= new Array();
 choices[59][0] = "A objeto";
 choices[59][1] = "A baudio";
 choices[59][2] = "A car&aacute;cter o a bit";
 choices[59][3] = "A una trama de tama&ntilde;o variable, hasta 256 bits";
 answers[59] = 2;
 units[59] = ['105'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4993. ";
 preguntaids[59] = 4993


//  Id pregunta: 4873 Año de creación de pregunta: 2002
 questions[60]= "61)  La conocida RFC 793 se corresponde con:";
 choices[60]= new Array();
 choices[60][0] = "el protocolo TCP";
 choices[60][1] = "la arquitectura TCP/IP";
 choices[60][2] = "el protocolo IP";
 choices[60][3] = "el protocolo SMTP";
 answers[60] = 0;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4873. ";
 preguntaids[60] = 4873


//  Id pregunta: 4890 Año de creación de pregunta: 2002
 questions[61]= "62)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[61]= new Array();
 choices[61][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[61][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[61][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[61][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[61] = 2;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4890. ";
 preguntaids[61] = 4890


//  Id pregunta: 4799 Año de creación de pregunta: 2002
 questions[62]= "63)  En el protocolo IPv6, el tama&ntilde;o maximo de trama es de:";
 choices[62]= new Array();
 choices[62][0] = "65535 Bytes";
 choices[62][1] = "Depende del campo 'Payload'";
 choices[62][2] = "No hay tama&ntilde;o m&aacute;ximo de trama en IPv6";
 choices[62][3] = "Depende de la versi&oacute;n utilizada";
 answers[62] = 0;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4799. ";
 preguntaids[62] = 4799


//  Id pregunta: 4786 Año de creación de pregunta: 2002
 questions[63]= "64)  En el modelo de referencia OSI, en una interfaz t&iacute;pica, la capa N+1 pasa una...... a la capa N, a trav&eacute;s del......:";
 choices[63]= new Array();
 choices[63][0] = "IDU, SAP";
 choices[63][1] = "IDU, ICI";
 choices[63][2] = "PDU, ICI";
 choices[63][3] = "PDU, SAP";
 answers[63] = 0;
 units[63] = ['105'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4786. ";
 preguntaids[63] = 4786


//  Id pregunta: 4989 Año de creación de pregunta: 2002
 questions[64]= "65)  Los niveles superiores del modelo OSI se agrupan dentro del bloque de aplicaci&oacute;n mientras que los niveles bajos se agrupan en el:";
 choices[64]= new Array();
 choices[64][0] = "Bloque de compatibilidad de software";
 choices[64][1] = "Bloque de encaminamiento del tr&aacute;fico";
 choices[64][2] = "Bloque de transmisi&oacute;n";
 choices[64][3] = "Bloque de multiplexaci&oacute;n y detecci&oacute;n de errores";
 answers[64] = 2;
 units[64] = ['105'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4989. ";
 preguntaids[64] = 4989


//  Id pregunta: 4920 Año de creación de pregunta: 2002
 questions[65]= "66)  La t&eacute;cnica de utilizar 'ventanas de transmisi&oacute;n y recepci&oacute;n' en los protocolos se utiliza fundamentalmente porque:";
 choices[65]= new Array();
 choices[65][0] = "Evita la necesidad de enviar 'reconocimientos negativos' a aquellas tramas que han llegado incorrectamente";
 choices[65][1] = "Aumenta el tiempo de utilizaci&oacute;n efectiva del canal";
 choices[65][2] = "Aumenta la velocidad de sincronismo entre transmisor y receptor";
 choices[65][3] = "Impide el desbordamiento de la memoria del receptor";
 answers[65] = 1;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4920. ";
 preguntaids[65] = 4920


//  Id pregunta: 4860 Año de creación de pregunta: 2002
 questions[66]= "67)  En una red TCP/IP, la conmutaci&oacute;n de nivel 4:";
 choices[66]= new Array();
 choices[66][0] = "No existe";
 choices[66][1] = "Se realiza mediante el identificador MAC del paquete IP";
 choices[66][2] = "Se realiza mediante el identificador de puerto del paquete IP";
 choices[66][3] = "Se realiza mediante el identificador de la direcci&oacute;n IP";
 answers[66] = 2;
 units[66] = ['105'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4860. ";
 preguntaids[66] = 4860


//  Id pregunta: 5070 Año de creación de pregunta: 2002
 questions[67]= "68)  Siguiendo la terminolog&iacute;a OSI, se&ntilde;alar qu&eacute; respuesta no se refiere a una de las categor&iacute;as en las que se puede dividir los procesos de aplicaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Procesos de gesti&oacute;n del sistema";
 choices[67][1] = "Procesos de gesti&oacute;n de las aplicaciones";
 choices[67][2] = "Procesos de gesti&oacute;n del control de flujo";
 choices[67][3] = "Procesos de usuario";
 answers[67] = 2;
 units[67] = ['105'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5070. ";
 preguntaids[67] = 5070


//  Id pregunta: 5613 Año de creación de pregunta: 2007
 questions[68]= "69)  En qu&eacute; capa del modelo de referencia OSI se localiza la subcapa de control de acceso al medio?";
 choices[68]= new Array();
 choices[68][0] = "Capa f&iacute;sica.";
 choices[68][1] = "Capa de sesi&oacute;n.";
 choices[68][2] = "Capa de transporte.";
 choices[68][3] = "Capa de enlace de datos.";
 answers[68] = 3;
 units[68] = ['105'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5613. ";
 preguntaids[68] = 5613


//  Id pregunta: 4750 Año de creación de pregunta: 2002
 questions[69]= "70)  El protocolo SDLC es:";
 choices[69]= new Array();
 choices[69][0] = "Un protocolo est&aacute;ndar OSI de nivel 2";
 choices[69][1] = "Un protocolo 'propietario' de nivel 2";
 choices[69][2] = "Un protocolo est&aacute;ndar OSI de nivel 4";
 choices[69][3] = "Un protocolo 'propietario' de nivel 4";
 answers[69] = 1;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4750. ";
 preguntaids[69] = 4750


//  Id pregunta: 4796 Año de creación de pregunta: 2002
 questions[70]= "71)  En el protocolo de transmisi&oacute;n s&iacute;ncrona HDLC ( High-level Data Link Control), &iquest;qu&eacute; no es una caracter&iacute;stica?:";
 choices[70]= new Array();
 choices[70][0] = "Cada bloque se inicia con &quot;01111110&quot;";
 choices[70][1] = "El indicador de fin de bloque es &quot;01111111&quot;";
 choices[70][2] = "Esta prohibido enviar secuencias de 6 o m&aacute;s '1'";
 choices[70][3] = "Por cada serie de 5 unos seguidos, se a&ntilde;ade un cero que el receptor eliminar&aacute;";
 answers[70] = 1;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4796. ";
 preguntaids[70] = 4796


//  Id pregunta: 4876 Año de creación de pregunta: 2002
 questions[71]= "72)  La direcci&oacute;n IP 192.168.42.127:";
 choices[71]= new Array();
 choices[71][0] = "Es una direcci&oacute;n de la red Internet";
 choices[71][1] = "Es una direcci&oacute;n de la red Internet, clase C";
 choices[71][2] = "Es una direcci&oacute;n de una red IP privada";
 choices[71][3] = "Es una direcci&oacute;n de la red Internet, clase B";
 answers[71] = 2;
 units[71] = ['105'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4876. ";
 preguntaids[71] = 4876


//  Id pregunta: 4875 Año de creación de pregunta: 2002
 questions[72]= "73)  La direcci&oacute;n de un socket se conforma con:";
 choices[72]= new Array();
 choices[72][0] = "La direcci&oacute;n IP del host y el modo de acceso";
 choices[72][1] = "La direcci&oacute;n IP del host y la direcci&oacute;n de un puerto local";
 choices[72][2] = "La URL del host";
 choices[72][3] = "La URL del host y el modo de acceso";
 answers[72] = 1;
 units[72] = ['105'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4875. ";
 preguntaids[72] = 4875


//  Id pregunta: 4897 Año de creación de pregunta: 2002
 questions[73]= "74)  La norma FTAM, &iquest;en qu&eacute; nivel del est&aacute;ndar OSI se encuentra?:";
 choices[73]= new Array();
 choices[73][0] = "Nivel de red";
 choices[73][1] = "Nivel de transferencia de ficheros";
 choices[73][2] = "Nivel de transporte";
 choices[73][3] = "Nivel de aplicaci&oacute;n";
 answers[73] = 3;
 units[73] = ['105'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4897. ";
 preguntaids[73] = 4897


//  Id pregunta: 4868 Año de creación de pregunta: 2002
 questions[74]= "75)  La aplicaci&oacute;n 'traceroute' basada en ICMP:";
 choices[74]= new Array();
 choices[74][0] = "permite conocer si un sistema est&aacute; accesible";
 choices[74][1] = "permite establecer la ruta a seguir por un conjunto de datagramas IP";
 choices[74][2] = "permite conocer la ruta seguida por un datagrama IP";
 choices[74][3] = "permite obtener un mapa de la red utilizada";
 answers[74] = 2;
 units[74] = ['105'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4868. ";
 preguntaids[74] = 4868


