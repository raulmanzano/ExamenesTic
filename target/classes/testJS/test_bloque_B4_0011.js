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
//  Id pregunta: 4745 Año de creación de pregunta: 2002
 questions[0]= "1)  El protocolo FTP (File Transfer Protocol):";
 choices[0]= new Array();
 choices[0][0] = "Tiene asignado el puerto 23";
 choices[0][1] = "Tiene asignados los puertos 20 y 21";
 choices[0][2] = "Tiene asignado el puerto 25";
 choices[0][3] = "Tiene asignado el puerto 80";
 answers[0] = 1;
 units[0] = ['103'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4745. ";
 preguntaids[0] = 4745


//  Id pregunta: 4810 Año de creación de pregunta: 2002
 questions[1]= "2)  En Internet, los distintos tipos de servicios utilizan protocolos espec&iacute;ficos. De las siguientes parejas servicios-protocolos, una es incorrecta. Se&ntilde;&aacute;lela:";
 choices[1]= new Array();
 choices[1][0] = "P&aacute;ginas Web-HTTP";
 choices[1][1] = "Correo electr&oacute;nico-SNMP";
 choices[1][2] = "Grupos de noticias-NNTP";
 choices[1][3] = "Transferencia de ficheros-FTP";
 answers[1] = 1;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4810. ";
 preguntaids[1] = 4810


//  Id pregunta: 4786 Año de creación de pregunta: 2002
 questions[2]= "3)  En el modelo de referencia OSI, en una interfaz t&iacute;pica, la capa N+1 pasa una...... a la capa N, a trav&eacute;s del......:";
 choices[2]= new Array();
 choices[2][0] = "IDU, SAP";
 choices[2][1] = "IDU, ICI";
 choices[2][2] = "PDU, ICI";
 choices[2][3] = "PDU, SAP";
 answers[2] = 0;
 units[2] = ['105'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4786. ";
 preguntaids[2] = 4786


//  Id pregunta: 4806 Año de creación de pregunta: 2002
 questions[3]= "4)  En Ethernet, se usa un transceptor (transceiver) para:";
 choices[3]= new Array();
 choices[3][0] = "Para hacer una conexi&oacute;n de red de un dispositivo a un servidor";
 choices[3][1] = "Establecer conexiones entre tarjetas de interfaz de red";
 choices[3][2] = "Convertir se&ntilde;ales recibidas por una puerta para transmitirlas por otra";
 choices[3][3] = "Unir un cable desde una estaci&oacute;n al medio f&iacute;sico que constituye la red";
 answers[3] = 3;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4806. ";
 preguntaids[3] = 4806


//  Id pregunta: 4797 Año de creación de pregunta: 2002
 questions[4]= "5)  En el protocolo HTTP, el m&eacute;todo de cliente TRACE:";
 choices[4]= new Array();
 choices[4][0] = "Pide al servidor que se declare a s&iacute; mismo dentro de la cabecera";
 choices[4][1] = "Se utiliza para depuracion y diagnostico, conteniendo informaci&oacute;n del servidor y lo que a&ntilde;aden servidores intermedios";
 choices[4][2] = "No existe";
 choices[4][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[4] = 1;
 units[4] = ['103'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4797. ";
 preguntaids[4] = 4797


//  Id pregunta: 4761 Año de creación de pregunta: 2002
 questions[5]= "6)  El servicio de directorio definido por la ITU-T:";
 choices[5]= new Array();
 choices[5][0] = "Se incluye en casi todos los sistemas de correo electr&oacute;nico para consultar las direcciones de los usuarios existentes en la red";
 choices[5][1] = "Se especifica en el est&aacute;ndar X.600 del ITU";
 choices[5][2] = "Es soportado por un sistema de ficheros en red";
 choices[5][3] = "Se ha definido como un conjunto de modelos, servicios y protocolos accesibles a nivel mundial en forma independiente de la aplicaci&oacute;n";
 answers[5] = 3;
 units[5] = ['116'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4761. ";
 preguntaids[5] = 4761


//  Id pregunta: 4749 Año de creación de pregunta: 2002
 questions[6]= "7)  El protocolo que facilita un mecanismo para asignar din&aacute;micamente las direcciones IP, en el que las direcciones pueden ser rechazadas por los clientes, es:";
 choices[6]= new Array();
 choices[6][0] = "ARP";
 choices[6][1] = "RARP";
 choices[6][2] = "RIP";
 choices[6][3] = "DHCP";
 answers[6] = 3;
 units[6] = ['105'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4749. ";
 preguntaids[6] = 4749


//  Id pregunta: 4801 Año de creación de pregunta: 2002
 questions[7]= "8)  En el protocolo IPv6:";
 choices[7]= new Array();
 choices[7][0] = "El campo 'Hop Limit' es similar al TTL en IP v4";
 choices[7][1] = "Los campos de direcciones tienen 128 bits de longitud";
 choices[7][2] = "No existe ning&uacute;n campo CRC de cabecera";
 choices[7][3] = "Todas las anteriores respuestas son correctas";
 answers[7] = 3;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4801. ";
 preguntaids[7] = 4801


//  Id pregunta: 4790 Año de creación de pregunta: 2002
 questions[8]= "9)  En el modelo de referencia OSI:";
 choices[8]= new Array();
 choices[8][0] = "El nivel de aplicaci&oacute;n controla el intercambio de datos entre los extremos";
 choices[8][1] = "El nivel de red pasa los datos al nivel de sesi&oacute;n";
 choices[8][2] = "El nivel f&iacute;sico establece las especificaciones el&eacute;ctricas de la transmisi&oacute;n";
 choices[8][3] = "El nivel de sesi&oacute;n recoge datos de la red y los pasa al nivel de aplicaci&oacute;n";
 answers[8] = 2;
 units[8] = ['105'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4790. ";
 preguntaids[8] = 4790


//  Id pregunta: 4765 Año de creación de pregunta: 2002
 questions[9]= "10)  El tiempo m&aacute;ximo de paso de datos de una estaci&oacute;n en una red Ethernet a 100 Mbits es:";
 choices[9]= new Array();
 choices[9][0] = "Igual al tiempo que tarda en propagarse un mensaje con longitud m&aacute;xima multiplicado por el n&uacute;mero de nodos en ese tramo";
 choices[9][1] = "No hay tiempo m&aacute;ximo";
 choices[9][2] = "Depende fundamentalmente de si el soporte es de cobre o de fibra &oacute;ptica";
 choices[9][3] = "No existe tiempo m&aacute;ximo ya que es inmediato, pues que el acceso al medio del mensaje lo hace en cuanto escucha que no hay tr&aacute;fico en la red";
 answers[9] = 1;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4765. ";
 preguntaids[9] = 4765


//  Id pregunta: 4793 Año de creación de pregunta: 2002
 questions[10]= "11)  En el modo de operaci&oacute;n denominado datagrama:";
 choices[10]= new Array();
 choices[10][0] = "Trabaja en modo 'conexi&oacute;n'";
 choices[10][1] = "Requiere el establecimiento previo de un circuito f&iacute;sico o virtual";
 choices[10][2] = "Los paquetes pueden viajar por rutas diferentes";
 choices[10][3] = "Requiere equipos terminales y software m&aacute;s sencillo";
 answers[10] = 2;
 units[10] = ['105'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4793. ";
 preguntaids[10] = 4793


//  Id pregunta: 4764 Año de creación de pregunta: 2002
 questions[11]= "12)  El t&eacute;rmino VHE hace referencia a:";
 choices[11]= new Array();
 choices[11][0] = "Un componente de una red UMTS";
 choices[11][1] = "Un componente de una red GSM";
 choices[11][2] = "Un conjunto de servicios cuya apariencia es independiente de la red";
 choices[11][3] = "Un rango de frecuencias";
 answers[11] = 2;
 units[11] = ['117'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4764. ";
 preguntaids[11] = 4764


//  Id pregunta: 4805 Año de creación de pregunta: 2002
 questions[12]= "13)  En Espa&ntilde;a la televisi&oacute;n por cable:";
 choices[12]= new Array();
 choices[12][0] = "Est&aacute; teniendo una implantaci&oacute;n similar a la existente en Alemania";
 choices[12][1] = "Carece de tecnolog&iacute;a suficiente para poder implantarse";
 choices[12][2] = "Se presta generalmente con redes h&iacute;bridasjunto a telefon&iacute;a y datos";
 choices[12][3] = "Todo lo anterior es correcto";
 answers[12] = 2;
 units[12] = ['115'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4805. ";
 preguntaids[12] = 4805


//  Id pregunta: 4774 Año de creación de pregunta: 2002
 questions[13]= "14)  En ATM , &iquest;Qu&eacute; tipo de AAL (ATM Adaptation Layer) es el principal para datos, y juega un papel importante en emulaci&oacute;n de LAN?:";
 choices[13]= new Array();
 choices[13][0] = "AAL 1";
 choices[13][1] = "AAL 2";
 choices[13][2] = "AAL 3/4";
 choices[13][3] = "AAL 5";
 answers[13] = 3;
 units[13] = ['107'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4774. ";
 preguntaids[13] = 4774


//  Id pregunta: 4751 Año de creación de pregunta: 2002
 questions[14]= "15)  El protocolo SNMP:";
 choices[14]= new Array();
 choices[14][0] = "Es un protocolo de gesti&oacute;n de redes";
 choices[14][1] = "Es un protocolo de mensajer&iacute;a electr&oacute;nica";
 choices[14][2] = "Es un protocolo de gesti&oacute;n de protocolos";
 choices[14][3] = "Es un protocolo de mensajer&iacute;a simple";
 answers[14] = 0;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4751. ";
 preguntaids[14] = 4751


//  Id pregunta: 4784 Año de creación de pregunta: 2002
 questions[15]= "16)  En el modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se definen una serie de niveles. &iquest;Cu&aacute;l o cuales de los siguientes deber&iacute;a soportar la red de conmutaci&oacute;n en un caso ideal?:";
 choices[15]= new Array();
 choices[15][0] = "Los tres primeros: f&iacute;sico, enlace y red";
 choices[15][1] = "El nivel 3: red";
 choices[15][2] = "Los niveles 3 y 4: transporte y red";
 choices[15][3] = "Los dos primeros niveles: f&iacute;sico y enlace";
 answers[15] = 0;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4784. ";
 preguntaids[15] = 4784


//  Id pregunta: 4796 Año de creación de pregunta: 2002
 questions[16]= "17)  En el protocolo de transmisi&oacute;n s&iacute;ncrona HDLC ( High-level Data Link Control), &iquest;qu&eacute; no es una caracter&iacute;stica?:";
 choices[16]= new Array();
 choices[16][0] = "Cada bloque se inicia con &quot;01111110&quot;";
 choices[16][1] = "El indicador de fin de bloque es &quot;01111111&quot;";
 choices[16][2] = "Esta prohibido enviar secuencias de 6 o m&aacute;s '1'";
 choices[16][3] = "Por cada serie de 5 unos seguidos, se a&ntilde;ade un cero que el receptor eliminar&aacute;";
 answers[16] = 1;
 units[16] = ['105'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4796. ";
 preguntaids[16] = 4796


//  Id pregunta: 4781 Año de creación de pregunta: 2002
 questions[17]= "18)  En el entorno de las comunicaciones m&oacute;viles, los t&eacute;rminos &quot;handover&quot; y &quot;handoff&quot;:";
 choices[17]= new Array();
 choices[17][0] = "Son sin&oacute;nimos";
 choices[17][1] = "&quot;Handover&quot; hace referencia a conmutaciones entre diferentes BTS y &quot;handoff&quot; a cambios de canal dentro de la misma BTS";
 choices[17][2] = "&quot;Handoff&quot; es equivalente a &quot;roaming&quot;";
 choices[17][3] = "&quot;Handoff&quot; no existe";
 answers[17] = 0;
 units[17] = ['117'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4781. ";
 preguntaids[17] = 4781


//  Id pregunta: 4737 Año de creación de pregunta: 2002
 questions[18]= "19)  El protocolo de aplicaciones inal&aacute;mbricas (WAP), para el acceso y creaci&oacute;n de informaci&oacute;n en internet, utiliza el lenguaje:";
 choices[18]= new Array();
 choices[18][0] = "HTML";
 choices[18][1] = "WML";
 choices[18][2] = "XML";
 choices[18][3] = "CGI";
 answers[18] = 1;
 units[18] = ['117'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4737. ";
 preguntaids[18] = 4737


//  Id pregunta: 4792 Año de creación de pregunta: 2002
 questions[19]= "20)  En el modelo OSI un encaminador o router:";
 choices[19]= new Array();
 choices[19][0] = "Trabaja en el nivel 4";
 choices[19][1] = "Trabaja en el nivel 7";
 choices[19][2] = "Trabaja en el nivel 3";
 choices[19][3] = "Trabaja en el nivel 5";
 answers[19] = 2;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4792. ";
 preguntaids[19] = 4792


//  Id pregunta: 4756 Año de creación de pregunta: 2002
 questions[20]= "21)  El puerto 53 es usado com&uacute;nmente en internet para el protocolo:";
 choices[20]= new Array();
 choices[20][0] = "DNS";
 choices[20][1] = "HTTP";
 choices[20][2] = "FTP";
 choices[20][3] = "Telnet";
 answers[20] = 0;
 units[20] = ['103'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4756. ";
 preguntaids[20] = 4756


//  Id pregunta: 4742 Año de creación de pregunta: 2002
 questions[21]= "22)  El protocolo del stack TCP/IP que define el acceso interactivo a un ordenador remoto es:";
 choices[21]= new Array();
 choices[21][0] = "FTP";
 choices[21][1] = "WAIS";
 choices[21][2] = "Telnet";
 choices[21][3] = "Mail";
 answers[21] = 2;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4742. ";
 preguntaids[21] = 4742


//  Id pregunta: 4798 Año de creación de pregunta: 2002
 questions[22]= "23)  En el protocolo HTTP, el m&eacute;todo HEAD:";
 choices[22]= new Array();
 choices[22][0] = "Es lo mismo que GET";
 choices[22][1] = "Recupera el cuerpo o Body del mensaje";
 choices[22][2] = "Las cabeceras no aparecen en GET pero s&iacute; en HEAD";
 choices[22][3] = "Se utiliza normalmente para ver la existencia del documento o su longitud";
 answers[22] = 3;
 units[22] = ['103'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4798. ";
 preguntaids[22] = 4798


//  Id pregunta: 4808 Año de creación de pregunta: 2002
 questions[23]= "24)  En HDLC, si un sistema inicia el enlace con SABM P, su estaci&oacute;n colateral, para establecer el enlace, le responder&aacute; con:";
 choices[23]= new Array();
 choices[23][0] = "SABM F";
 choices[23][1] = "SABM P";
 choices[23][2] = "UA F";
 choices[23][3] = "UA P";
 answers[23] = 2;
 units[23] = ['105'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4808. ";
 preguntaids[23] = 4808


//  Id pregunta: 4777 Año de creación de pregunta: 2002
 questions[24]= "25)  Indique la respuesta correcta sobre conmutaci&oacute;n de paquetes:";
 choices[24]= new Array();
 choices[24][0] = "la transmisi&oacute;n es por r&aacute;fagas";
 choices[24][1] = "la ruta origen-&gt;destino puede ser variable";
 choices[24][2] = "no hay ning&uacute;n circuito f&iacute;sico dedicado en la comunicaci&oacute;n";
 choices[24][3] = "todas las anteriores son caracter&iacute;sticas de la conmutaci&oacute;n de paquetes";
 answers[24] = 3;
 units[24] = ['112'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4777. ";
 preguntaids[24] = 4777


//  Id pregunta: 4776 Año de creación de pregunta: 2002
 questions[25]= "26)  En comunicaciones de datos, &iquest;sabe lo que es  'overrun'?:";
 choices[25]= new Array();
 choices[25][0] = "Cuando el sistema operativo o el procesador de comunicaciones paran por un exceso de temperatura";
 choices[25][1] = "Un switch que permite al sistema tener m&aacute;s rendimiento (bits /seg) bajo ciertas condiciones";
 choices[25][2] = "Una situaci&oacute;n en la que algunos paquetes pueden perderse debido a que llegan m&aacute;s r&aacute;pidamente de lo que pueden ser procesados";
 choices[25][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[25] = 2;
 units[25] = ['102'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4776. ";
 preguntaids[25] = 4776


//  Id pregunta: 4757 Año de creación de pregunta: 2002
 questions[26]= "27)  El puerto com&uacute;nmente utilizado para aplicaciones de correo electr&oacute;nico es (SMTP) el:";
 choices[26]= new Array();
 choices[26][0] = "80";
 choices[26][1] = "25";
 choices[26][2] = "53";
 choices[26][3] = "21";
 answers[26] = 1;
 units[26] = ['116'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4757. ";
 preguntaids[26] = 4757


//  Id pregunta: 4759 Año de creación de pregunta: 2002
 questions[27]= "28)  El ruido t&eacute;rmico es una perturbaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Debida a las diferencias en los coeficientes de dilataci&oacute;n de los conductores";
 choices[27][1] = "Aleatoria que aparece de forma natural en los conductores por agitaci&oacute;n de los electrones";
 choices[27][2] = "Igual a la temperatura a la cual la resistencia equivalente del dispositivo producir&iacute;a el ruido total observado";
 choices[27][3] = "Introducida en el proceso de cuantificaci&oacute;n";
 answers[27] = 1;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4759. ";
 preguntaids[27] = 4759


//  Id pregunta: 4804 Año de creación de pregunta: 2002
 questions[28]= "29)  En el tipo de conmutaci&oacute;n de paquetes conocido como datagrama:";
 choices[28]= new Array();
 choices[28][0] = "Los paquetes no han de llegar ordenados";
 choices[28][1] = "Se establece un enlace l&oacute;gico entre emisor y receptor";
 choices[28][2] = "Los mensajes no se trocean";
 choices[28][3] = "Los paquetes han de llegar ordenados";
 answers[28] = 0;
 units[28] = ['112'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4804. ";
 preguntaids[28] = 4804


//  Id pregunta: 4799 Año de creación de pregunta: 2002
 questions[29]= "30)  En el protocolo IPv6, el tama&ntilde;o maximo de trama es de:";
 choices[29]= new Array();
 choices[29][0] = "65535 Bytes";
 choices[29][1] = "Depende del campo 'Payload'";
 choices[29][2] = "No hay tama&ntilde;o m&aacute;ximo de trama en IPv6";
 choices[29][3] = "Depende de la versi&oacute;n utilizada";
 answers[29] = 0;
 units[29] = ['105'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4799. ";
 preguntaids[29] = 4799


//  Id pregunta: 4812 Año de creación de pregunta: 2002
 questions[30]= "31)  En la arquitectura de cortafuegos &quot;screened subnet&quot; o subred apantallada:";
 choices[30]= new Array();
 choices[30][0] = "se dispone de un &uacute;nico router, estando el basti&oacute;n y los dem&aacute;s componentes en la red interna";
 choices[30][1] = "se dispone de 2 routers, interno y externo, y tanto el basti&oacute;n como los dem&aacute;s componentes est&aacute;n en la red interna";
 choices[30][2] = "se dispone de 2 routers, interno y externo, y el basti&oacute;n est&aacute; en una red intermedia desmilitarizada o DMZ";
 choices[30][3] = "no se dispone de ning&uacute;n router, sino de un basti&oacute;n con funciones de proxy que apantalla la red interna y alberga los servidores p&uacute;blicos";
 answers[30] = 2;
 units[30] = ['119'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4812. ";
 preguntaids[30] = 4812


//  Id pregunta: 4758 Año de creación de pregunta: 2002
 questions[31]= "32)  El punto de referencia S del modelo RDSI es:";
 choices[31]= new Array();
 choices[31][0] = "La interfaz para terminales anal&oacute;gicos";
 choices[31][1] = "La interfaz con la l&iacute;nea de transmisi&oacute;n hacia la central p&uacute;blica";
 choices[31][2] = "La interfaz a 4 hilos para equipos RDSI";
 choices[31][3] = "La separaci&oacute;n entre las instalaciones de usuario y los equipos de transmisi&oacute;n, cuando existe TR2";
 answers[31] = 2;
 units[31] = ['114'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4758. ";
 preguntaids[31] = 4758


//  Id pregunta: 4778 Año de creación de pregunta: 2002
 questions[32]= "33)  En el acceso a l&iacute;neas y redes de comunicaciones, desde el bucle de abonado constituido por pares de cobre, la tecnolog&iacute;a que permite separar el flujo de datos del tr&aacute;fico telef&oacute;nico en origen, es:";
 choices[32]= new Array();
 choices[32][0] = "RDSI";
 choices[32][1] = "ADSL";
 choices[32][2] = "RTC";
 choices[32][3] = "TCP-IP";
 answers[32] = 1;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4778. ";
 preguntaids[32] = 4778


//  Id pregunta: 4779 Año de creación de pregunta: 2005
 questions[33]= "34)  En el &aacute;mbito de la seguridad de redes, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[33]= new Array();
 choices[33][0] = "Los ataques de &quot;buffer overflow&quot; son posibles debido a fallos de programaci&oacute;n";
 choices[33][1] = "Los ataques mediante &quot;spoofing&quot; se basan en la generaci&oacute;n de paquetes de informaci&oacute;n falsa";
 choices[33][2] = "NIS, NFS, DNS o SMTP son protocolos de aplicaci&oacute;n inseguros";
 choices[33][3] = "Los ataques mediante &quot;secuestro de sesi&oacute;n&quot; no pueden prevenirse en la labor de administraci&oacute;n";
 answers[33] = 3;
 units[33] = ['119'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4779. ";
 preguntaids[33] = 4779


//  Id pregunta: 4809 Año de creación de pregunta: 2002
 questions[34]= "35)  En Internet se encuentran a menudo las siglas FAQ. &iquest;Qu&eacute; significan?:";
 choices[34]= new Array();
 choices[34][0] = "Un curso sobre el tema";
 choices[34][1] = "Las direcciones m&aacute;s relevantes respecto al tema";
 choices[34][2] = "Las preguntas m&aacute;s frecuentes que se hacen";
 choices[34][3] = "Un descripci&oacute;n del contenido del nodo en cuesi&oacute;n";
 answers[34] = 2;
 units[34] = ['103'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4809. ";
 preguntaids[34] = 4809


//  Id pregunta: 4744 Año de creación de pregunta: 2002
 questions[35]= "36)  El protocolo FTP (File Transfer Protocol) utiliza canales diferentes para comandos y para datos:";
 choices[35]= new Array();
 choices[35][0] = "Un servidor FTP en modo activo emplea el puerto 21 para enviar datos al cliente";
 choices[35][1] = "Un servidor FTP emplea el puerto 21 para comandos, ya sea en modo activo o pasivo";
 choices[35][2] = "Un servidor FTP en modo pasivo emplea el puerto 21 para enviar datos al cliente";
 choices[35][3] = "Un servidor FTP emplea el puerto 20 para comandos, ya sea en modo activo o pasivo";
 answers[35] = 1;
 units[35] = ['103'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4744. ";
 preguntaids[35] = 4744


//  Id pregunta: 4752 Año de creación de pregunta: 2002
 questions[36]= "37)  El protocolo TCP (Protocolo de Control de Transmisi&oacute;n) es un protocolo a nivel de transporte orientado a conexi&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Que fue desarrollado expresamente para Internet";
 choices[36][1] = "Que, al igual que el protocolo IP (Protocolo Interredes), son protocolos OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 choices[36][2] = "Que no puede interoperar con protocolos de transporte OSI";
 choices[36][3] = "Que fue dise&ntilde;ado para garantizar la fiabilidad que no ofrece el protocolo IP para establecer comunicaciones fiables entre subredes de datos";
 answers[36] = 3;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4752. ";
 preguntaids[36] = 4752


//  Id pregunta: 4794 Año de creación de pregunta: 2002
 questions[37]= "38)  En el nivel de enlace, respecto al protocolo HDLC puede decirse que:";
 choices[37]= new Array();
 choices[37][0] = "Es un protocolo orientado a car&aacute;cter";
 choices[37][1] = "El modo de respuesta normal se conoce como NRM";
 choices[37][2] = "El modo de respuesta asincrono se conoce como ARM";
 choices[37][3] = "Las respuestas 'b' y 'c' son correctas";
 answers[37] = 3;
 units[37] = ['105'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4794. ";
 preguntaids[37] = 4794


//  Id pregunta: 4802 Año de creación de pregunta: 2002
 questions[38]= "39)  En el servicio de radiomensajer&iacute;a se distinguen tres modalidades.&iquest;Cu&aacute;l de las siguientes no corresponde a &eacute;stas?:";
 choices[38]= new Array();
 choices[38][0] = "Modalidad de aviso";
 choices[38][1] = "Modalidad telef&oacute;nica";
 choices[38][2] = "Modalidad num&eacute;rica";
 choices[38][3] = "Modalidad alfanum&eacute;rica";
 answers[38] = 1;
 units[38] = ['117'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4802. ";
 preguntaids[38] = 4802


//  Id pregunta: 4800 Año de creación de pregunta: 2002
 questions[39]= "40)  En el protocolo IPv6:";
 choices[39]= new Array();
 choices[39][0] = "El campo 'Traffic Class' tiene 8 bits de longitud";
 choices[39][1] = "El campo 'Priority' tiene 8 bits de longitud";
 choices[39][2] = "El campo 'Header CheckSum' tiene 8 bits de longitud";
 choices[39][3] = "El campo 'TOS' indica el tipo de servicio";
 answers[39] = 0;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4800. ";
 preguntaids[39] = 4800


//  Id pregunta: 4803 Año de creación de pregunta: 2002
 questions[40]= "41)  En el servicio de telefon&iacute;a celular se utiliza el concepto de celda indicando:";
 choices[40]= new Array();
 choices[40][0] = "Zona de cobertura del terminal";
 choices[40][1] = "Distancia m&aacute;xima del terminal a la estaci&oacute;n repetidora";
 choices[40][2] = "Distancia m&iacute;nima entre estaciones repetidoras";
 choices[40][3] = "Zona de cobertura de una estaci&oacute;n base";
 answers[40] = 3;
 units[40] = ['117'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4803. ";
 preguntaids[40] = 4803


//  Id pregunta: 4775 Año de creación de pregunta: 2002
 questions[41]= "42)  En ATM: &quot;la capacidad de transferencia que se caracteriza por la ausencia de caracterizaci&oacute;n del tr&aacute;fico en el contrato de forma que la red transmite la informaci&oacute;n que le ofrece el usuario cuando puede y lo mejor que puede &quot;, se denomina:";
 choices[41]= new Array();
 choices[41][0] = "DBR (Deterministic Bit Rate)";
 choices[41][1] = "SBR (Statistic Bit Rate)";
 choices[41][2] = "ABT (ATM Block Transfer)";
 choices[41][3] = "ABR (Available Bit Rate)";
 answers[41] = 3;
 units[41] = ['107'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4775. ";
 preguntaids[41] = 4775


//  Id pregunta: 4747 Año de creación de pregunta: 2002
 questions[42]= "43)  El protocolo IP se dise&ntilde;&oacute; en la RFC:";
 choices[42]= new Array();
 choices[42][0] = "793";
 choices[42][1] = "791";
 choices[42][2] = "768";
 choices[42][3] = "821";
 answers[42] = 1;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4747. ";
 preguntaids[42] = 4747


//  Id pregunta: 4736 Año de creación de pregunta: 2002
 questions[43]= "44)  El protocolo CSMA/CD utilizado en el subnivel MAC de las LAN es propio de las redes:";
 choices[43]= new Array();
 choices[43][0] = "Ethernet";
 choices[43][1] = "Token ring";
 choices[43][2] = "Token bus";
 choices[43][3] = "Se puede emplear en cualquiera de las anteriores";
 answers[43] = 0;
 units[43] = ['112'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4736. ";
 preguntaids[43] = 4736


//  Id pregunta: 4750 Año de creación de pregunta: 2002
 questions[44]= "45)  El protocolo SDLC es:";
 choices[44]= new Array();
 choices[44][0] = "Un protocolo est&aacute;ndar OSI de nivel 2";
 choices[44][1] = "Un protocolo 'propietario' de nivel 2";
 choices[44][2] = "Un protocolo est&aacute;ndar OSI de nivel 4";
 choices[44][3] = "Un protocolo 'propietario' de nivel 4";
 answers[44] = 1;
 units[44] = ['105'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4750. ";
 preguntaids[44] = 4750


//  Id pregunta: 4773 Año de creación de pregunta: 2002
 questions[45]= "46)  El uso de un sistema de intercambio electr&oacute;nico de datos (EDI):";
 choices[45]= new Array();
 choices[45][0] = "Exige la utilizaci&oacute;n de redes con una velocidad de transmisi&oacute;n media-alta";
 choices[45][1] = "Requiere la adquisici&oacute;n de un sistema propietario de correo electr&oacute;nico para la transferencia de informaci&oacute;n";
 choices[45][2] = "Permite el libre intercambio de texto, voz e imagen";
 choices[45][3] = "Constituye en s&iacute; mismo un entorno normalizado de intercambio de mensajes mediante un convenio";
 answers[45] = 3;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4773. ";
 preguntaids[45] = 4773


//  Id pregunta: 4766 Año de creación de pregunta: 2002
 questions[46]= "47)  El tiempo que tarda un terminal en poner una trama en la red:";
 choices[46]= new Array();
 choices[46][0] = "En las redes Ethernet no depende de la ocupaci&oacute;n de su segmento de red";
 choices[46][1] = "Es mejor en una red Token Ring que en una Ethernet si la red est&aacute; muy cargada";
 choices[46][2] = "No tiene cota m&aacute;xima en una red Token Bus";
 choices[46][3] = "Tiene una cota m&aacute;xima en una red Ethernet";
 answers[46] = 1;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4766. ";
 preguntaids[46] = 4766


//  Id pregunta: 4746 Año de creación de pregunta: 2002
 questions[47]= "48)  El protocolo HDLC&hellip;:";
 choices[47]= new Array();
 choices[47][0] = "Es un protocolo de nivel f&iacute;sico";
 choices[47][1] = "Es un protocolo a nivel de enlace";
 choices[47][2] = "Es un protocolo a nive de red";
 choices[47][3] = "Es un protocolo a nivel de transporte";
 answers[47] = 1;
 units[47] = ['105'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4746. ";
 preguntaids[47] = 4746


//  Id pregunta: 4782 Año de creación de pregunta: 2002
 questions[48]= "49)  En el entorno de las redes inal&aacute;mbricas se denomina &quot;hot-spot&quot;:";
 choices[48]= new Array();
 choices[48][0] = "A la zona de cobertura con mayor demanda de tr&aacute;fico";
 choices[48][1] = "A los emplazamientos con cobertura WiFi";
 choices[48][2] = "A zonas de cobertura con potenciales problemas de interferencias";
 choices[48][3] = "A las zonas de sombra";
 answers[48] = 1;
 units[48] = ['108'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4782. ";
 preguntaids[48] = 4782


//  Id pregunta: 4740 Año de creación de pregunta: 2002
 questions[49]= "50)  El protocolo de gesti&oacute;n SNMP opera sobre el protocolo:";
 choices[49]= new Array();
 choices[49][0] = "UDP";
 choices[49][1] = "TCP";
 choices[49][2] = "&quot;a&quot; y &quot;b&quot; son ciertas";
 choices[49][3] = "&quot;a&quot; y &quot;b&quot; son falsas";
 answers[49] = 0;
 units[49] = ['114'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4740. ";
 preguntaids[49] = 4740


//  Id pregunta: 4748 Año de creación de pregunta: 2002
 questions[50]= "51)  El protocolo OSPF:";
 choices[50]= new Array();
 choices[50][0] = "Es un protocolo de encaminamiento como el RIP";
 choices[50][1] = "Significa 'Open Systems Protocol Family'";
 choices[50][2] = "No usa el algoritmo tipo de estados de enlaces (link-state) para encaminar los datagramas";
 choices[50][3] = "Se describe en la RFC942 (Request for Comments)";
 answers[50] = 0;
 units[50] = ['102'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4748. ";
 preguntaids[50] = 4748


//  Id pregunta: 4753 Año de creación de pregunta: 2002
 questions[51]= "52)  El protocolo TCP (Transmisi&oacute;n Control Protocol):";
 choices[51]= new Array();
 choices[51][0] = "Es orientado a conexi&oacute;n y bidireccional";
 choices[51][1] = "Es orientado a conexi&oacute;n, pero no bidireccional";
 choices[51][2] = "Es no orientado a conexi&oacute;n y bidireccional";
 choices[51][3] = "Es no orientado a conexi&oacute;n, y no bidireccional";
 answers[51] = 0;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4753. ";
 preguntaids[51] = 4753


//  Id pregunta: 4743 Año de creación de pregunta: 2002
 questions[52]= "53)  El protocolo en que est&aacute;n basados los niveles inferiores del modelo OSI de la ISO es:";
 choices[52]= new Array();
 choices[52][0] = "SDLC";
 choices[52][1] = "EBCDIC";
 choices[52][2] = "HDLC";
 choices[52][3] = "X.400";
 answers[52] = 2;
 units[52] = ['105'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4743. ";
 preguntaids[52] = 4743


//  Id pregunta: 4755 Año de creación de pregunta: 2002
 questions[53]= "54)  El protocolo X.10 es conocido en:";
 choices[53]= new Array();
 choices[53][0] = "Aplicaciones de telefon&iacute;a m&oacute;vil.";
 choices[53][1] = "Aplicaciones de radares.";
 choices[53][2] = "Aplicaciones dom&oacute;ticas.";
 choices[53][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[53] = 2;
 units[53] = ['105'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4755. ";
 preguntaids[53] = 4755


//  Id pregunta: 4791 Año de creación de pregunta: 2002
 questions[54]= "55)  En el modelo de referencia para interconexi&oacute;n de sistemas abiertos (ISO OSI) indicar cu&aacute;l de las siguientes respuestas es verdadera:";
 choices[54]= new Array();
 choices[54][0] = "El est&aacute;ndar RS-232-C se ha desarrollado para las l&iacute;neas de comunicaci&oacute;n de la capa f&iacute;sica";
 choices[54][1] = "El nivel de enlace corresponde a la l&iacute;nea 4";
 choices[54][2] = "El protocolo de enlace de datos se ocupa de la estandarizaci&oacute;n de las interfaces el&eacute;ctricas, mec&aacute;nicas y de se&ntilde;alizaci&oacute;n";
 choices[54][3] = "Es un modelo de 9 capas";
 answers[54] = 0;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4791. ";
 preguntaids[54] = 4791


//  Id pregunta: 4762 Año de creación de pregunta: 2002
 questions[55]= "56)  El subnivel MAC del nivel de enlace de datos de la pila de protocolos OSI proporciona:";
 choices[55]= new Array();
 choices[55][0] = "Las direcciones de los puntos de acceso al servicio";
 choices[55][1] = "Servicios orientados a la conexi&oacute;n";
 choices[55][2] = "Servicios orientados a la conexi&oacute;n con reconocimiento";
 choices[55][3] = "La direcci&oacute;n f&iacute;sica de un dispositivo de la red";
 answers[55] = 3;
 units[55] = ['105'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4762. ";
 preguntaids[55] = 4762


//  Id pregunta: 4787 Año de creación de pregunta: 2002
 questions[56]= "57)  En el modelo de referencia OSI, los problemas planteados por la falta de fiabilidad de los circuitos como consecuencia de errores en los datos recibidos se resuelven en:";
 choices[56]= new Array();
 choices[56][0] = "El nivel f&iacute;sico";
 choices[56][1] = "El nivel de enlace";
 choices[56][2] = "El nivel de red";
 choices[56][3] = "El nivel de transporte";
 answers[56] = 1;
 units[56] = ['105'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4787. ";
 preguntaids[56] = 4787


//  Id pregunta: 4811 Año de creación de pregunta: 2002
 questions[57]= "58)  En IPv4, las direcciones que van desde 192.0.0.0 hasta 223.255.255.255 son del tipo:";
 choices[57]= new Array();
 choices[57][0] = "A";
 choices[57][1] = "B";
 choices[57][2] = "C";
 choices[57][3] = "D";
 answers[57] = 2;
 units[57] = ['105'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4811. ";
 preguntaids[57] = 4811


//  Id pregunta: 4772 Año de creación de pregunta: 2002
 questions[58]= "59)  El uso de la red de energ&iacute;a el&eacute;ctrica como una red de transmisi&oacute;n telem&aacute;tica de voz y datos es la tecnolog&iacute;a:";
 choices[58]= new Array();
 choices[58][0] = "LCC";
 choices[58][1] = "PCC";
 choices[58][2] = "LLC";
 choices[58][3] = "PLC";
 answers[58] = 3;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4772. ";
 preguntaids[58] = 4772


//  Id pregunta: 4769 Año de creación de pregunta: 2002
 questions[59]= "60)  El topolog&iacute;a denominada FDDI (Fiber Distributed Data Interface) utiliza un m&eacute;todo de acceso al medio:";
 choices[59]= new Array();
 choices[59][0] = "Tipo CSMA/CD: se emite en cualquier momento y se detectan las colisiones";
 choices[59][1] = "Tipo  &lsquo;paso de testigo&rsquo; (Token Passing): es necesario la posesi&oacute;n del testigo para emitir";
 choices[59][2] = "Tipo TDM (multiplexaci&oacute;n por divisi&oacute;n en el tiempo): se asignan diferentes slots de tiempo a cada estaci&oacute;n";
 choices[59][3] = "Tipo FDM: la frecuencia de luz emitida por cada estaci&oacute;n es diferente con lo que no hay colisiones";
 answers[59] = 1;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4769. ";
 preguntaids[59] = 4769


//  Id pregunta: 4738 Año de creación de pregunta: 2002
 questions[60]= "61)  El protocolo de comunicaciones denominado HDLC, es un protocolo orientado a:";
 choices[60]= new Array();
 choices[60][0] = "Car&aacute;cter, de modos: ARM, ABM y SRM";
 choices[60][1] = "Bit , de modos: ARM, ABM y SRM";
 choices[60][2] = "Car&aacute;cter, con cadencia secuencial";
 choices[60][3] = "Bit, con cadencia secuencial";
 answers[60] = 1;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4738. ";
 preguntaids[60] = 4738


//  Id pregunta: 4763 Año de creación de pregunta: 2002
 questions[61]= "62)  El teorema del muestreo, que nos indica la frecuencia con la que debemos muestrear una se&ntilde;al para no perder informaci&oacute;n al digitalizarla, es debido a:";
 choices[61]= new Array();
 choices[61][0] = "Shannon";
 choices[61][1] = "Oppenheim";
 choices[61][2] = "Shafer";
 choices[61][3] = "Nyquist";
 answers[61] = 3;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4763. ";
 preguntaids[61] = 4763


//  Id pregunta: 4754 Año de creación de pregunta: 2002
 questions[62]= "63)  El protocolo TFTP (sic):";
 choices[62]= new Array();
 choices[62][0] = "Significa Trivial FTP";
 choices[62][1] = "Utiliza el conocido puerto 69";
 choices[62][2] = "Deber&iacute;a ser protegido especificamente en el Firewall";
 choices[62][3] = "Todas las anteriores respuestas son correctas";
 answers[62] = 3;
 units[62] = ['103'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4754. ";
 preguntaids[62] = 4754


//  Id pregunta: 4768 Año de creación de pregunta: 2002
 questions[63]= "64)  El tipo de formato de clase C de direcci&oacute;n IP se emplea mayoritariamente para:";
 choices[63]= new Array();
 choices[63][0] = "Las redes de &aacute;rea local";
 choices[63][1] = "Grandes organizaciones p&uacute;blicas y multinacionales que poseen gran n&uacute;mero de subredes";
 choices[63][2] = "Mensajes de difusi&oacute;n m&uacute;ltiple (multicast)";
 choices[63][3] = "Fines experimentales";
 answers[63] = 0;
 units[63] = ['105'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4768. ";
 preguntaids[63] = 4768


//  Id pregunta: 4788 Año de creación de pregunta: 2002
 questions[64]= "65)  En el modelo de referencia OSI, una comunicaci&oacute;n entre dos capas se denomina confirmada, si hay:";
 choices[64]= new Array();
 choices[64][0] = "Una petici&oacute;n y una respuesta";
 choices[64][1] = "Una petici&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[64][2] = "Una petici&oacute;n, una indicaci&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[64][3] = "Todas las anteriores son incompletas";
 answers[64] = 2;
 units[64] = ['105'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4788. ";
 preguntaids[64] = 4788


//  Id pregunta: 4795 Año de creación de pregunta: 2002
 questions[65]= "66)  En el nivel de enlace, usado en redes locales, el subnivel que garantiza la independencia de las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n (par trenzado, cable coaxial, fibra &oacute;ptica...) es:";
 choices[65]= new Array();
 choices[65][0] = "El MAC (Medium Access Control)";
 choices[65][1] = "El LLC (Logical Link Control)";
 choices[65][2] = "Un puente";
 choices[65][3] = "Un repetidor";
 answers[65] = 0;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4795. ";
 preguntaids[65] = 4795


//  Id pregunta: 4807 Año de creación de pregunta: 2002
 questions[66]= "67)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[66]= new Array();
 choices[66][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[66][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[66][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[66][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[66] = 3;
 units[66] = ['112'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4807. ";
 preguntaids[66] = 4807


//  Id pregunta: 4780 Año de creación de pregunta: 2002
 questions[67]= "68)  En el concepto de ventana deslizante:";
 choices[67]= new Array();
 choices[67][0] = "El tama&ntilde;o de la ventana es el n&uacute;mero de paquetes a enviar sin esperar su reconocimiento";
 choices[67][1] = "La ventana avanza de posici&oacute;n seg&uacute;n el asentimiento de paquetes anteriormente enviados";
 choices[67][2] = "Los asentimientos pueden recibirse de forma desordenada";
 choices[67][3] = "Todo lo anterior es correcto";
 answers[67] = 3;
 units[67] = ['105'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4780. ";
 preguntaids[67] = 4780


//  Id pregunta: 4813 Año de creación de pregunta: 2002
 questions[68]= "69)  En la provisi&oacute;n de conexi&oacute;n del nivel de transporte al nivel de sesi&oacute;n del modelo OSI:";
 choices[68]= new Array();
 choices[68][0] = "Es posible el soporte simult&aacute;neo de varias conexiones de sesi&oacute;n por una sola conexi&oacute;n de transporte";
 choices[68][1] = "Una conexi&oacute;n de sesi&oacute;n no puede ser soportada por varias conexiones de transporte secuencialmente";
 choices[68][2] = "No es posible el soporte secuencial de varias conexiones de sesi&oacute;n por una de transporte";
 choices[68][3] = "Una sola conexi&oacute;n de sesi&oacute;n puede ser soportada por varias conexiones de transporte secuencialmente";
 answers[68] = 3;
 units[68] = ['105'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4813. ";
 preguntaids[68] = 4813


//  Id pregunta: 4789 Año de creación de pregunta: 2002
 questions[69]= "70)  En el modelo de referencia OSI, una interfaz:";
 choices[69]= new Array();
 choices[69][0] = "Define las primitivas y los servicios que una capa ofrece a todas las que est&aacute;n sobre ella";
 choices[69][1] = "Define los servicios y las primitivas que una capa ofrece a la inmediatamente superior";
 choices[69][2] = "Define la funcionalidad final que el sistema ofrece al usuario";
 choices[69][3] = "Define las reglas y convenios para que dos procesos en diferentes m&aacute;quinas comuniquen entre s&iacute;";
 answers[69] = 1;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4789. ";
 preguntaids[69] = 4789


//  Id pregunta: 4785 Año de creación de pregunta: 2002
 questions[70]= "71)  En el modelo de referencia OSI, el nivel de red interactua directamente con:";
 choices[70]= new Array();
 choices[70][0] = "El nivel de aplicaci&oacute;n y el nivel f&iacute;sico";
 choices[70][1] = "El nivel de transporte, el nivel de enlace, y sus niveles 'iguales' en otros sistemas";
 choices[70][2] = "El nivel de presentaci&oacute;n, el nivel de sesi&oacute;n y el usuario final";
 choices[70][3] = "Todos los niveles altos y los niveles bajos en los otros sistemas";
 answers[70] = 1;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4785. ";
 preguntaids[70] = 4785


//  Id pregunta: 4741 Año de creación de pregunta: 2002
 questions[71]= "72)  El protocolo de gesti&oacute;n y administraci&oacute;n de redes que ha sido estandarizado por OSI es:";
 choices[71]= new Array();
 choices[71][0] = "SNMP (Simple Network Management Protocol)";
 choices[71][1] = "SMIP (Structure of Management Information Protocol)";
 choices[71][2] = "CMIP (Common Management Information Protocol)";
 choices[71][3] = "RMON (Remote Network Monitoring)";
 answers[71] = 2;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4741. ";
 preguntaids[71] = 4741


//  Id pregunta: 4760 Año de creación de pregunta: 2002
 questions[72]= "73)  El servicio Archie se utiliza para:";
 choices[72]= new Array();
 choices[72][0] = "navegar usando men&uacute;s sin conocer la direcci&oacute;n de la informaci&oacute;n";
 choices[72][1] = "recibir de un servidor las direcciones de bases de datos m&aacute;s adecuadas para responder a la pregunta";
 choices[72][2] = "realizar b&uacute;squedas por los nombres de los ficheros de los servidores FTP";
 choices[72][3] = "buscar informaci&oacute;n seg&uacute;n un esquema de enlaces hipertexto";
 answers[72] = 2;
 units[72] = ['103'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4760. ";
 preguntaids[72] = 4760


//  Id pregunta: 4767 Año de creación de pregunta: 2002
 questions[73]= "74)  El tipo de fibra &oacute;ptica que permite la transmisi&oacute;n a m&aacute;s velocidad es:";
 choices[73]= new Array();
 choices[73][0] = "&Iacute;ndice gradual";
 choices[73][1] = "Multimodo";
 choices[73][2] = "Fibra &oacute;ptica de salto de &iacute;ndice";
 choices[73][3] = "Monomodo";
 answers[73] = 3;
 units[73] = ['104'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4767. ";
 preguntaids[73] = 4767


//  Id pregunta: 4771 Año de creación de pregunta: 2002
 questions[74]= "75)  El tr&aacute;fico vocal GSM suele calcularse para estimaciones de potencias y coberturas de se&ntilde;al en base a una f&oacute;rmula. &iquest;Cu&aacute;l es?:";
 choices[74]= new Array();
 choices[74][0] = "La f&oacute;rmula de Poisson";
 choices[74][1] = "La f&oacute;rmula de Okumura-Hata";
 choices[74][2] = "La f&oacute;rmula Erlang B";
 choices[74][3] = "La f&oacute;rmula Erlang C";
 answers[74] = 2;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4771. ";
 preguntaids[74] = 4771


