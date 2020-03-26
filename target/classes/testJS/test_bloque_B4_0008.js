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
//  Id pregunta: 4516 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas no describe las funciones de un repetidor?:";
 choices[0]= new Array();
 choices[0][0] = "Recibe, amplifica y retransmite las se&ntilde;ales recibidas";
 choices[0][1] = "Interconecta m&uacute;ltiples segmentos de LAN";
 choices[0][2] = "Previene del deterioro de la se&ntilde;al causado por las largas longitudes del cable";
 choices[0][3] = "Filtra el tr&aacute;fico basado en las direcciones MAC";
 answers[0] = 3;
 units[0] = ['104'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4516. ";
 preguntaids[0] = 4516


//  Id pregunta: 4507 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al nivel de transporte?:";
 choices[1]= new Array();
 choices[1][0] = "Dividir en fragmentos mas peque&ntilde;os la informaci&oacute;n que acepta del nivel de sesi&oacute;n, y pasarlos al nivel de red";
 choices[1][1] = "Asegurar el trasvase de informaci&oacute;n entre los 2 extremos de la comunicaci&oacute;n";
 choices[1][2] = "Permitir la comunicaci&oacute;n simult&aacute;nea de varias sesiones de trabajo";
 choices[1][3] = "Transportar la informaci&oacute;n entre nodos de conmutaci&oacute;n conectados directamente entre si";
 answers[1] = 3;
 units[1] = ['105'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4507. ";
 preguntaids[1] = 4507


//  Id pregunta: 4535 Año de creación de pregunta: 2002
 questions[2]= "3)  El acceso primario de la Red Digital de Servicios Integrados (en las normas europeas) est&aacute; constituido por:";
 choices[2]= new Array();
 choices[2][0] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[2][1] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[2][2] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 choices[2][3] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 answers[2] = 0;
 units[2] = ['114'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4535. ";
 preguntaids[2] = 4535


//  Id pregunta: 4564 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes protocolos env&iacute;a, tal y como indica su especificaci&oacute;n, &quot;traps&quot;?:";
 choices[3]= new Array();
 choices[3][0] = "SNMP";
 choices[3][1] = "UDP";
 choices[3][2] = "HTTP";
 choices[3][3] = "FTP";
 answers[3] = 0;
 units[3] = ['114'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4564. ";
 preguntaids[3] = 4564


//  Id pregunta: 4537 Año de creación de pregunta: 2002
 questions[4]= "5)  El algoritmo conocido como Spanning Tree Algorithm se usa:";
 choices[4]= new Array();
 choices[4][0] = "Para optimizar los caminos usados en redes complejas con routers";
 choices[4][1] = "Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos";
 choices[4][2] = "Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla";
 choices[4][3] = "Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estaci&oacute;n no conteste (puede estar apagada o estropeada)";
 answers[4] = 1;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4537. ";
 preguntaids[4] = 4537


//  Id pregunta: 4533 Año de creación de pregunta: 2002
 questions[5]= "6)  EDGE responde por:";
 choices[5]= new Array();
 choices[5][0] = "Enhanced Data for GPRS Evolution";
 choices[5][1] = "Extended Data for GSM Enhancement";
 choices[5][2] = "Enhanced Data for GSM Evolution";
 choices[5][3] = "Extended Data for GPRS Enhancement";
 answers[5] = 2;
 units[5] = ['117'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4533. ";
 preguntaids[5] = 4533


//  Id pregunta: 4520 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes topolog&iacute;as tiene un mayor nivel de seguridad?:";
 choices[6]= new Array();
 choices[6][0] = "Bus";
 choices[6][1] = "Anillo";
 choices[6][2] = "Estrella";
 choices[6][3] = "Las 3 anteriores topolog&iacute;as tienen un nivel de seguridad similar";
 answers[6] = 2;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4520. ";
 preguntaids[6] = 4520


//  Id pregunta: 4532 Año de creación de pregunta: 2002
 questions[7]= "8)  DVB/DAVIC y DOCSIS son est&aacute;ndares de:";
 choices[7]= new Array();
 choices[7][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[7][1] = "m&oacute;dems de cable";
 choices[7][2] = "tecnolog&iacute;a xDSL";
 choices[7][3] = "grabaci&oacute;n cd CDROMs";
 answers[7] = 1;
 units[7] = ['115'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4532. ";
 preguntaids[7] = 4532


//  Id pregunta: 4518 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes respuestas sobre CDDI (o CuDDI o TP-DDI) es falsa?:";
 choices[8]= new Array();
 choices[8][0] = "CDDI tiene toda la tolerancia a fallos y velocidad que la FDDI";
 choices[8][1] = "CDDI usa una especificaci&oacute;n PMD ANSI diferente que la FDDI";
 choices[8][2] = "CDDI tiene la misma limitaci&oacute;n de distancia que la FDDI";
 choices[8][3] = "CDDI usa un cableado m&aacute;s econ&oacute;mico que la FDDI";
 answers[8] = 2;
 units[8] = ['106'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4518. ";
 preguntaids[8] = 4518


//  Id pregunta: 4558 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es protocolo OSI de nivel de aplicaci&oacute;n?:";
 choices[9]= new Array();
 choices[9][0] = "Transferencia de ficheros FTAM";
 choices[9][1] = "Correo electr&oacute;nico X.400";
 choices[9][2] = "Servicios de Directorio X.500";
 choices[9][3] = "Transferencia de correo electr&oacute;nico SMTP";
 answers[9] = 3;
 units[9] = ['105'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4558. SMTP es protocolo del nivel de aplicaci&oacute;n del modelo TCP/IP";
 preguntaids[9] = 4558


//  Id pregunta: 4529 Año de creación de pregunta: 2002
 questions[10]= "11)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar puntos de chequeo que permita reiniciar la transmisi&oacute;n a partir del punto m&aacute;s cercano al posible fallo y no desde el principio', corresponde al nivel:";
 choices[10]= new Array();
 choices[10][0] = "Nivel de red";
 choices[10][1] = "Nivel de transporte";
 choices[10][2] = "Nivel de sesi&oacute;n";
 choices[10][3] = "Nivel de presentaci&oacute;n";
 answers[10] = 2;
 units[10] = ['105'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4529. ";
 preguntaids[10] = 4529


//  Id pregunta: 4540 Año de creación de pregunta: 2002
 questions[11]= "12)  El cable de par trenzado no apantallado, categor&iacute;a 5, de 2 pares:";
 choices[11]= new Array();
 choices[11][0] = "Soporta hasta 10 Mbps";
 choices[11][1] = "Soporta hasta 20 Mbps";
 choices[11][2] = "Soporta hasta 100 Mbps";
 choices[11][3] = "Soporta hasta 5 Mbps";
 answers[11] = 2;
 units[11] = ['104'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4540. ";
 preguntaids[11] = 4540


//  Id pregunta: 4542 Año de creación de pregunta: 2002
 questions[12]= "13)  El comando de FTP que presenta los mensajes del servidor es:";
 choices[12]= new Array();
 choices[12][0] = "Dir";
 choices[12][1] = "Pwd";
 choices[12][2] = "Verbose";
 choices[12][3] = "Lcd";
 answers[12] = 2;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4542. ";
 preguntaids[12] = 4542


//  Id pregunta: 4546 Año de creación de pregunta: 2002
 questions[13]= "14)  El error 404 seg&uacute;n el protocolo HTTP indica:";
 choices[13]= new Array();
 choices[13][0] = "mensaje de petici&oacute;n no reconocido";
 choices[13][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[13][2] = "versi&oacute;n HTTP no soportada";
 choices[13][3] = "el objeto pedido no se encuentra en el servidor";
 answers[13] = 3;
 units[13] = ['103'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4546. ";
 preguntaids[13] = 4546


//  Id pregunta: 4515 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes respuestas es falsa respecto a los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n?:";
 choices[14]= new Array();
 choices[14][0] = "Con cableado de par trenzado se pueden alcanzar varios megabits por segundo";
 choices[14][1] = "El cable coaxial se utiliza para redes de &aacute;rea local";
 choices[14][2] = "La fibra &oacute;ptica monomodo es m&aacute;s barata que la fibra &oacute;ptica multimodo";
 choices[14][3] = "La propagaci&oacute;n de las microondas se ve afectada por los fen&oacute;menos atmosf&eacute;ricos";
 answers[14] = 2;
 units[14] = ['104'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4515. ";
 preguntaids[14] = 4515


//  Id pregunta: 4556 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no pertenece al  est&aacute;ndar de correo electr&oacute;nico X.400?:";
 choices[15]= new Array();
 choices[15][0] = "Agente de usuario";
 choices[15][1] = "Agente de transferencia de mensajes";
 choices[15][2] = "Agente de usuario remoto";
 choices[15][3] = "Agente de correo extendido";
 answers[15] = 3;
 units[15] = ['116'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4556. ";
 preguntaids[15] = 4556


//  Id pregunta: 4512 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xDSL?";
 choices[16]= new Array();
 choices[16][0] = "HDSL";
 choices[16][1] = "VDSL";
 choices[16][2] = "ADSL";
 choices[16][3] = "MDSL";
 answers[16] = 3;
 units[16] = ['108'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4512. ";
 preguntaids[16] = 4512


//  Id pregunta: 4508 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes funciones no es propia de los protocolos de nivel de enlace?:";
 choices[17]= new Array();
 choices[17][0] = "Control de flujo";
 choices[17][1] = "Sincronizacion y entramado";
 choices[17][2] = "Control de los canales l&oacute;gicos";
 choices[17][3] = "Recuperaci&oacute;n de errores";
 answers[17] = 2;
 units[17] = ['105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4508. ";
 preguntaids[17] = 4508


//  Id pregunta: 4511 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es un &aacute;rea funcional en el &aacute;mbito de la gesti&oacute;n de redes OSI mediante CMIP?:";
 choices[18]= new Array();
 choices[18][0] = "Fallos";
 choices[18][1] = "Seguridad";
 choices[18][2] = "Rendimiento";
 choices[18][3] = "Control remoto";
 answers[18] = 3;
 units[18] = ['114'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4511. ";
 preguntaids[18] = 4511


//  Id pregunta: 4544 Año de creación de pregunta: 2002
 questions[19]= "20)  El entorno que utiliza un teletrabajador para conectarse con su empresa a trav&eacute;s de internet se denomina:";
 choices[19]= new Array();
 choices[19][0] = "intranet";
 choices[19][1] = "collaboration-net";
 choices[19][2] = "teleworking-net";
 choices[19][3] = "extranet";
 answers[19] = 3;
 units[19] = ['113'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4544. ";
 preguntaids[19] = 4544


//  Id pregunta: 4563 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes protocolos de servicios de Internet corresponde al que se encarga de recoger el correo del buz&oacute;n de usuario de la m&aacute;quina servidora y lo trae a un directorio del disco duro del PC del usuario?:";
 choices[20]= new Array();
 choices[20][0] = "POP3";
 choices[20][1] = "SMTP";
 choices[20][2] = "X.400";
 choices[20][3] = "MIME";
 answers[20] = 0;
 units[20] = ['116'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4563. ";
 preguntaids[20] = 4563


//  Id pregunta: 4509 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes modulaciones, utilizadas con la tecnolog&iacute;a LMDS, proporciona mayor eficiencia espectral?:";
 choices[21]= new Array();
 choices[21][0] = "QPSK";
 choices[21][1] = "4-QAM";
 choices[21][2] = "16-QAM";
 choices[21][3] = "64-QAM";
 answers[21] = 3;
 units[21] = ['108'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4509. ";
 preguntaids[21] = 4509


//  Id pregunta: 4569 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l es el significado correcto en la actualidad de las siglas GSM?:";
 choices[22]= new Array();
 choices[22][0] = "Group System Mobile";
 choices[22][1] = "Global System Mobile";
 choices[22][2] = "Global Special Mobile";
 choices[22][3] = "Group  Special Mobile";
 answers[22] = 1;
 units[22] = ['117'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4569. ";
 preguntaids[22] = 4569


//  Id pregunta: 4573 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Cu&aacute;l es la relaci&oacute;n entre IMT-2000 y UMTS?:";
 choices[23]= new Array();
 choices[23][0] = "Es el mismo sistema";
 choices[23][1] = "UMTS forma parte de la familia IMT-2000";
 choices[23][2] = "IMT-2000 forma parte de la familia UMTS";
 choices[23][3] = "Son est&aacute;ndares diferentes";
 answers[23] = 1;
 units[23] = ['117'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4573. ";
 preguntaids[23] = 4573


//  Id pregunta: 4522 Año de creación de pregunta: 2002
 questions[24]= "25)  Dentro del modelo de referencia OSI, &iquest;cu&aacute;l es el componente de los procesos de aplicaci&oacute;n que se encarga de ejecutar los protocolos de nivel de aplicaci&oacute;n, y de proporcionar los elementos de servicio del nivel de aplicaci&oacute;n?:";
 choices[24]= new Array();
 choices[24][0] = "La entidad de aplicaci&oacute;n";
 choices[24][1] = "Los CASEs (Common Aplication Service Elements)";
 choices[24][2] = "Los SASEs (Specific Aplication Service Elements)";
 choices[24][3] = "El stack de comunicaciones";
 answers[24] = 0;
 units[24] = ['105'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4522. ";
 preguntaids[24] = 4522


//  Id pregunta: 4570 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Cu&aacute;l es la funci&oacute;n principal del protocolo ICMP?:";
 choices[25]= new Array();
 choices[25][0] = "Convertir direcciones hardware en direcciones IP";
 choices[25][1] = "Convertir direcciones IP en direcciones hardware";
 choices[25][2] = "Estar orientado a la conexi&oacute;n y proporcionar una conexi&oacute;n full-duplex fiable";
 choices[25][3] = "Manejar el control de la informaci&oacute;n y de errores entre el router y el host";
 answers[25] = 3;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4570. ";
 preguntaids[25] = 4570


//  Id pregunta: 4560 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no es un protocolo del nivel de aplicaci&oacute;n del modelo OSI?:";
 choices[26]= new Array();
 choices[26][0] = "X.400";
 choices[26][1] = "FTAM";
 choices[26][2] = "X.500";
 choices[26][3] = "X.25";
 answers[26] = 3;
 units[26] = ['105'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4560. X.25 no pertenece al modelo OSI";
 preguntaids[26] = 4560


//  Id pregunta: 4552 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes conceptos no aporta seguridad a una intranet?:";
 choices[27]= new Array();
 choices[27][0] = "Spoofing";
 choices[27][1] = "Firewalls";
 choices[27][2] = "NAT";
 choices[27][3] = "Proxy";
 answers[27] = 0;
 units[27] = ['113'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4552. ";
 preguntaids[27] = 4552


//  Id pregunta: 4519 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes respuestas sobre Emulacion de LAN en ATM es cierta?:";
 choices[28]= new Array();
 choices[28][0] = "Proporciona a las estaciones enganchadas via ATM las mismas capacidades que obtienen de una LAN tipo Ethernet o Token-Ring";
 choices[28][1] = "Requiere modificaciones de los protocolos de mayor nivel (de la capa de red)  para permitir operaciones via una red ATM";
 choices[28][2] = "Intenta emular el Media Access Control (MAC) real de la LAN espec&iacute;fica";
 choices[28][3] = "Define un esquema de encapsulado para Ethernet, Token-Ring y FDDI";
 answers[28] = 0;
 units[28] = ['107'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4519. ";
 preguntaids[28] = 4519


//  Id pregunta: 4571 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l es la funci&oacute;n que tiene la capa de presentaci&oacute;n (Presentation Layer) en la arquitectura de protocolos ISO de OSI?:";
 choices[29]= new Array();
 choices[29][0] = "Presentar la informaci&oacute;n al usuario final";
 choices[29][1] = "Ocuparse de las distintas representaciones de la informaci&oacute;n en distintas m&aacute;quinas, de tal forma que el significado sea el mismo aunque las representaciones sean diferentes";
 choices[29][2] = "Presentar la informaci&oacute;n a la red estableciendo puntos de sincronismo intermedios para evitar p&eacute;rdidas de informaci&oacute;n en caso de caidas de la red";
 choices[29][3] = "Todas las anteriores son funciones de la capa de sesi&oacute;n";
 answers[29] = 1;
 units[29] = ['105'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4571. ";
 preguntaids[29] = 4571


//  Id pregunta: 4541 Año de creación de pregunta: 2002
 questions[30]= "31)  El c&oacute;digo de los mensajes HTTP de respuesta que indican &eacute;xito en la petici&oacute;n comienzan por:";
 choices[30]= new Array();
 choices[30][0] = "1";
 choices[30][1] = "2";
 choices[30][2] = "3";
 choices[30][3] = "5";
 answers[30] = 1;
 units[30] = ['103'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4541. ";
 preguntaids[30] = 4541


//  Id pregunta: 4578 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Cu&aacute;les son las ventajas de la fibra &oacute;ptica comparadas con los cableados de cobre?:";
 choices[31]= new Array();
 choices[31][0] = "Mayor velocidad de transmisi&oacute;n, mayor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, menor atenuaci&oacute;n";
 choices[31][1] = "Mayor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, distancias menores entre repetidores";
 choices[31][2] = "Menor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n, distancias mayores entre repetidores";
 choices[31][3] = "Mayor velocidad de transmisi&oacute;n, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n";
 answers[31] = 0;
 units[31] = ['106'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4578. ";
 preguntaids[31] = 4578


//  Id pregunta: 4562 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes protocolos de los est&aacute;ndares X.400 hace referencia a las comunicaciones entre agente de usuario, y es conocido como IPM (InterPersonal Messaging)?:";
 choices[32]= new Array();
 choices[32][0] = "P1";
 choices[32][1] = "P2";
 choices[32][2] = "P3";
 choices[32][3] = "P7";
 answers[32] = 1;
 units[32] = ['116'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4562. ";
 preguntaids[32] = 4562


//  Id pregunta: 4568 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Cu&aacute;l es el servicio del nivel de enlace del modelo OSI m&aacute;s apropiado para transmitir voz?:";
 choices[33]= new Array();
 choices[33][0] = "Servicio con acuse de recibo y sin conexi&oacute;n";
 choices[33][1] = "Servicio sin acuse de recibo y sin conexi&oacute;n";
 choices[33][2] = "Servicio con acuse de recibo y orientado a la conexi&oacute;n";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = 1;
 units[33] = ['110'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4568. ";
 preguntaids[33] = 4568


//  Id pregunta: 4527 Año de creación de pregunta: 2002
 questions[34]= "35)  Dentro del modelo OSI la funci&oacute;n de 'permitir a un usuario entrar en un sistema remoto a tiempo compartido, o transferir ficheros entre dos m&aacute;quinas', corresponde al nivel:";
 choices[34]= new Array();
 choices[34][0] = "Nivel de red";
 choices[34][1] = "Nivel de transporte";
 choices[34][2] = "Nivel de sesi&oacute;n";
 choices[34][3] = "Nivel de presentaci&oacute;n";
 answers[34] = 2;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4527. ";
 preguntaids[34] = 4527


//  Id pregunta: 4566 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes protocolos reporta los problemas de entrega y encaminamiento en IP?:";
 choices[35]= new Array();
 choices[35][0] = "TCP";
 choices[35][1] = "ICMP";
 choices[35][2] = "RIP";
 choices[35][3] = "UDP";
 answers[35] = 1;
 units[35] = ['109'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4566. ";
 preguntaids[35] = 4566


//  Id pregunta: 4525 Año de creación de pregunta: 2002
 questions[36]= "37)  Dentro del modelo OSI la funci&oacute;n de 'manejo de distintos terminales', corresponde al nivel:";
 choices[36]= new Array();
 choices[36][0] = "Nivel de red";
 choices[36][1] = "Nivel de transporte";
 choices[36][2] = "Nivel de sesi&oacute;n";
 choices[36][3] = "Nivel de presentaci&oacute;n";
 answers[36] = 3;
 units[36] = ['105'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4525. ";
 preguntaids[36] = 4525


//  Id pregunta: 4554 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares define un anillo l&oacute;gico sobre un bus f&iacute;sico?:";
 choices[37]= new Array();
 choices[37][0] = "802.2";
 choices[37][1] = "802.3";
 choices[37][2] = "802.4";
 choices[37][3] = "802.5";
 answers[37] = 2;
 units[37] = ['112'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4554. ";
 preguntaids[37] = 4554


//  Id pregunta: 4550 Año de creación de pregunta: 2002
 questions[38]= "39)  El est&aacute;ndar de ITU-T Q.931 trata sobre:";
 choices[38]= new Array();
 choices[38][0] = "compresi&oacute;n de datos";
 choices[38][1] = "multiplexaci&oacute;n de conexiones";
 choices[38][2] = "se&ntilde;alizaci&oacute;n";
 choices[38][3] = "codecs de audio y video";
 answers[38] = 2;
 units[38] = ['114'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4550. ";
 preguntaids[38] = 4550


//  Id pregunta: 4504 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes es un m&eacute;todo de modulaci&oacute;n &oacute;ptica?:";
 choices[39]= new Array();
 choices[39][0] = "Modulaci&oacute;n directa";
 choices[39][1] = "Modulaci&oacute;n indirecta";
 choices[39][2] = "Modulaci&oacute;n de fase";
 choices[39][3] = "Modulaci&oacute;n interna";
 answers[39] = 0;
 units[39] = ['106'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4504. ";
 preguntaids[39] = 4504


//  Id pregunta: 4543 Año de creación de pregunta: 2002
 questions[40]= "41)  El concepto y primer desarrollo del servicio WWW se debe a:";
 choices[40]= new Array();
 choices[40][0] = "Vinton Cerf";
 choices[40][1] = "Leonard Kleinrock";
 choices[40][2] = "Robert Kahn";
 choices[40][3] = "Tim Berners-Lee";
 answers[40] = 3;
 units[40] = ['103'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4543. ";
 preguntaids[40] = 4543


//  Id pregunta: 4534 Año de creación de pregunta: 2002
 questions[41]= "42)  El acceso b&aacute;sico en RDSI:";
 choices[41]= new Array();
 choices[41][0] = "Es utilizado exclusivamente por un &uacute;nico terminal";
 choices[41][1] = "Puede ser compartido hasta por un m&aacute;ximo de diecis&eacute;is terminales";
 choices[41][2] = "Puede ser compartido hasta por un m&aacute;ximo de ocho terminales";
 choices[41][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[41] = 2;
 units[41] = ['114'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4534. ";
 preguntaids[41] = 4534


//  Id pregunta: 4565 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece al nivel de aplicaci&oacute;n?:";
 choices[42]= new Array();
 choices[42][0] = "Telnet";
 choices[42][1] = "FTP";
 choices[42][2] = "SMTP";
 choices[42][3] = "RIP";
 answers[42] = 3;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4565. ";
 preguntaids[42] = 4565


//  Id pregunta: 4567 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l es el puerto habitual usado por una conexi&oacute;n Telnet?:";
 choices[43]= new Array();
 choices[43][0] = "15";
 choices[43][1] = "21";
 choices[43][2] = "23";
 choices[43][3] = "80";
 answers[43] = 2;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4567. ";
 preguntaids[43] = 4567


//  Id pregunta: 4545 Año de creación de pregunta: 2002
 questions[44]= "45)  El equipo que se encuentra en ambos extremos de una l&iacute;nea de transmisi&oacute;n, se denomina, seg&uacute;n la nomenclatura espa&ntilde;ola de la ITU-T:";
 choices[44]= new Array();
 choices[44][0] = "ETC o equipo terminal de datos";
 choices[44][1] = "ETD o equipo terminal de datos";
 choices[44][2] = "ETCD o equipo terminal del circuito digital";
 choices[44][3] = "ETCD o equipo terminal del circuito de datos";
 answers[44] = 3;
 units[44] = ['112'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4545. ";
 preguntaids[44] = 4545


//  Id pregunta: 4506 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes funciones corresponder&iacute;an al nivel de red en el Modelo de referencia OSI?:";
 choices[45]= new Array();
 choices[45][0] = "Compartici&oacute;n de circuito f&iacute;sico";
 choices[45][1] = "Establecimiento de varias comunicaciones simult&aacute;neas";
 choices[45][2] = "Cifrado de datos";
 choices[45][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[45] = 3;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4506. ";
 preguntaids[45] = 4506


//  Id pregunta: 4553 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes dispositivos es el que trabaja como m&aacute;ximo a nivel 3 - Red - del sistema OSI?:";
 choices[46]= new Array();
 choices[46][0] = "Repetidores";
 choices[46][1] = "Puentes (Bridges)";
 choices[46][2] = "Enrutadores (routers)";
 choices[46][3] = "Pasarelas (Gateways)";
 answers[46] = 2;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4553. ";
 preguntaids[46] = 4553


//  Id pregunta: 4528 Año de creación de pregunta: 2002
 questions[47]= "48)  Dentro del modelo OSI la funci&oacute;n de 'permitir la comunicaci&oacute;n simult&aacute;nea, utilizando una o varias direcciones de red, de una o varias sesiones de trabajo', corresponde al nivel:";
 choices[47]= new Array();
 choices[47][0] = "Nivel de red";
 choices[47][1] = "Nivel de transporte";
 choices[47][2] = "Nivel de sesi&oacute;n";
 choices[47][3] = "Nivel de presentaci&oacute;n";
 answers[47] = 1;
 units[47] = ['105'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4528. ";
 preguntaids[47] = 4528


//  Id pregunta: 4530 Año de creación de pregunta: 2002
 questions[48]= "49)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar testigos para que las dos partes de un protocolo no utilicen la misma operaci&oacute;n al mismo tiempo', corresponde al nivel:";
 choices[48]= new Array();
 choices[48][0] = "Presentaci&oacute;n";
 choices[48][1] = "Transporte";
 choices[48][2] = "Sesi&oacute;n";
 choices[48][3] = "Red";
 answers[48] = 2;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4530. ";
 preguntaids[48] = 4530


//  Id pregunta: 4523 Año de creación de pregunta: 2002
 questions[49]= "50)  Dentro del modelo OSI la funci&oacute;n de 'compatibilizaci&oacute;n de ficheros de distintos formatos', corresponde al nivel:";
 choices[49]= new Array();
 choices[49][0] = "Nivel de red";
 choices[49][1] = "Nivel de transporte";
 choices[49][2] = "Nivel de sesi&oacute;n";
 choices[49][3] = "Nivel de presentaci&oacute;n";
 answers[49] = 3;
 units[49] = ['105'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4523. ";
 preguntaids[49] = 4523


//  Id pregunta: 4503 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes dispositivos permite a una Intranet, cuyas m&aacute;quinas tienen direcciones IP no legales, conectarse con Internet y hacerlo adem&aacute;s de forma selectiva seg&uacute;n una lista de URLs autorizadas?:";
 choices[50]= new Array();
 choices[50][0] = "Un servidor FTP";
 choices[50][1] = "Un servidor WEB";
 choices[50][2] = "Un router";
 choices[50][3] = "Un proxy";
 answers[50] = 3;
 units[50] = ['113'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4503. ";
 preguntaids[50] = 4503


//  Id pregunta: 4555 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de posicionamiento m&oacute;vil ofrece menor precisi&oacute;n?:";
 choices[51]= new Array();
 choices[51][0] = "A-GPS";
 choices[51][1] = "E-OTD";
 choices[51][2] = "CGI-TA";
 choices[51][3] = "TOA";
 answers[51] = 2;
 units[51] = ['117'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4555. ";
 preguntaids[51] = 4555


//  Id pregunta: 4524 Año de creación de pregunta: 2002
 questions[52]= "53)  Dentro del modelo OSI la funci&oacute;n de 'compresi&oacute;n de mensajes', corresponde al nivel:";
 choices[52]= new Array();
 choices[52][0] = "Nivel de red";
 choices[52][1] = "Nivel de transporte";
 choices[52][2] = "Nivel de sesi&oacute;n";
 choices[52][3] = "Nivel de presentaci&oacute;n";
 answers[52] = 3;
 units[52] = ['105'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4524. ";
 preguntaids[52] = 4524


//  Id pregunta: 4557 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes no debe ser un requisito de los sistemas de cableado?:";
 choices[53]= new Array();
 choices[53][0] = "Alto grado de flexibilidad";
 choices[53][1] = "M&iacute;nimas interrupciones";
 choices[53][2] = "Bajo costo en tiempo de diagn&oacute;stico y reparaci&oacute;n";
 choices[53][3] = "Eliminaci&oacute;n de las tecnolog&iacute;as obsoletas";
 answers[53] = 3;
 units[53] = ['104'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4557. ";
 preguntaids[53] = 4557


//  Id pregunta: 4514 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes respuestas define el formato de la trama en Ethernet V2?:";
 choices[54]= new Array();
 choices[54][0] = "CRC, longitud trama, direcci&oacute;n origen, direcci&oacute;n destino, datos";
 choices[54][1] = "Pre&aacute;mbulo, tipo trama, direcci&oacute;n origen, direcci&oacute;n destino, datos y CRC";
 choices[54][2] = "Pre&aacute;mbulo, direcci&oacute;n destino, direcci&oacute;n origen, tipo trama, datos y CRC";
 choices[54][3] = "Pre&aacute;mbulo, direcci&oacute;n origen, direcci&oacute;n destino, longitud trama, datos y CRC";
 answers[54] = 2;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4514. ";
 preguntaids[54] = 4514


//  Id pregunta: 4505 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes expresiones definen mejor las ventajas de un multiplexor estad&iacute;stico?:";
 choices[55]= new Array();
 choices[55][0] = "Pueden atender m&aacute;s circuitos que los multiplexores por divisi&oacute;n de tiempos (MDT)";
 choices[55][1] = "Permiten evaluar la eficacia de transmisi&oacute;n de los circuitos que multiplexa";
 choices[55][2] = "Permite utilizar una l&iacute;nea de transmisi&oacute;n de menor velocidad que el MDT equivalente";
 choices[55][3] = "Evita el uso de los filtros requeridos por el MDT";
 answers[55] = 2;
 units[55] = ['112'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4505. ";
 preguntaids[55] = 4505


//  Id pregunta: 4513 Año de creación de pregunta: 2002
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes proposiciones no es correcta en lo relativo a GPRS?:";
 choices[56]= new Array();
 choices[56][0] = "La conmutaci&oacute;n en GRPS se realiza a nivel de paquetes de datos";
 choices[56][1] = "La red GRPS se puede comunicar con redes TCP/IP";
 choices[56][2] = "La tarificaci&oacute;n no tiene recargo de establecimiento de llamada y es por tiempo de conexi&oacute;n";
 choices[56][3] = "El acceso radio es por paquetes de datos";
 answers[56] = 2;
 units[56] = ['117'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4513. ";
 preguntaids[56] = 4513


//  Id pregunta: 4502 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes direcciones IPv6 es correcta?";
 choices[57]= new Array();
 choices[57][0] = ":FF56::12::13D4";
 choices[57][1] = "15::78A1:9982";
 choices[57][2] = "AAB2:12::15H3:149";
 choices[57][3] = "1234:5678:9012:3456:7890:1234:5678";
 answers[57] = 1;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4502. ";
 preguntaids[57] = 4502


//  Id pregunta: 4561 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes podr&iacute;a ser usado en un sistema aut&oacute;nomo para enrutamiento?:";
 choices[58]= new Array();
 choices[58][0] = "BGP (Border Gateway Protocol)";
 choices[58][1] = "EGP (Exterior Gateway Protocol)";
 choices[58][2] = "AGP (Autonomous Gateway Protocol)";
 choices[58][3] = "RIP (Routing Information Protocol)";
 answers[58] = 3;
 units[58] = ['102'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4561. ";
 preguntaids[58] = 4561


//  Id pregunta: 4510 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no corresponde a una definici&oacute;n correcta de especificaci&oacute;n de la ITU-T?:";
 choices[59]= new Array();
 choices[59][0] = "X.25: interfaz entre ETD y ETCD para terminales en modo paquete en redes p&uacute;blicas de conmutaci&oacute;n de paquetes";
 choices[59][1] = "X.29: define los mecanismos y protocolos para la conexi&oacute;n de terminales as&iacute;ncronos a trav&eacute;s de la red X25, usando un PAD";
 choices[59][2] = "X.32: interfaz entre ETD y ETCD para terminales telegr&aacute;ficos accediendo a redes p&uacute;blicas de conmutaci&oacute;n de paquetes v&iacute;a red de conmutaci&oacute;n de circuitos";
 choices[59][3] = "X.75: interconexi&oacute;n de redes p&uacute;blicas de conmutaci&oacute;n de paquetes y conexi&oacute;n de nodos de las mismas";
 answers[59] = 2;
 units[59] = ['110'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4510. ";
 preguntaids[59] = 4510


//  Id pregunta: 4526 Año de creación de pregunta: 2002
 questions[60]= "61)  Dentro del modelo OSI la funci&oacute;n de 'mantener la secuencialidad de la informaci&oacute;n', corresponde al nivel:";
 choices[60]= new Array();
 choices[60][0] = "Nivel de red";
 choices[60][1] = "Nivel de transporte";
 choices[60][2] = "Nivel de sesi&oacute;n";
 choices[60][3] = "Nivel de presentaci&oacute;n";
 answers[60] = 0;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4526. ";
 preguntaids[60] = 4526


//  Id pregunta: 4517 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes respuestas referentes a las funciones de los distintos niveles OSI es falsa?:";
 choices[61]= new Array();
 choices[61][0] = "Las aplicaciones de correo electr&oacute;nico residen en el nivel de transporte";
 choices[61][1] = "Uno de los servicios que suministra el nivel de Sesi&oacute;n es permitir a un usuario entrar en un sistema remoto a tiempo compartido";
 choices[61][2] = "El nivel de presentaci&oacute;n se encarga del cifrado de la informaci&oacute;n por t&eacute;cnicas criptogr&aacute;ficas";
 choices[61][3] = "Las funciones del nivel de aplicaci&oacute;n est&aacute;n determinadas por los requerimientos de la aplicaci&oacute;n que cargue el usuario";
 answers[61] = 0;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4517. ";
 preguntaids[61] = 4517


//  Id pregunta: 4536 Año de creación de pregunta: 2002
 questions[62]= "63)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[62]= new Array();
 choices[62][0] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad";
 choices[62][1] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red";
 choices[62][2] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad";
 choices[62][3] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad";
 answers[62] = 0;
 units[62] = ['114'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4536. ";
 preguntaids[62] = 4536


//  Id pregunta: 4521 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguiente elementos residen en la capa de aplicaci&oacute;n de la pila TCP/IP?:";
 choices[63]= new Array();
 choices[63][0] = "TFTP";
 choices[63][1] = "FTP";
 choices[63][2] = "DNS";
 choices[63][3] = "Todos los anteriores";
 answers[63] = 3;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4521. ";
 preguntaids[63] = 4521


//  Id pregunta: 4575 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso primario RDSI en Europa?:";
 choices[64]= new Array();
 choices[64][0] = "16 kbps";
 choices[64][1] = "32 kbps";
 choices[64][2] = "64 kbps";
 choices[64][3] = "128 kbps";
 answers[64] = 2;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4575. ";
 preguntaids[64] = 4575


//  Id pregunta: 4551 Año de creación de pregunta: 2002
 questions[65]= "66)  El est&aacute;ndar IEEE que suministra una descripci&oacute;n de los procedimientos del protocolo a nivel de enlace en una red de &aacute;rea local para la transferencia de datos y su control entre cualquier pareja de puntos de acceso al servicio es:";
 choices[65]= new Array();
 choices[65][0] = "802.1";
 choices[65][1] = "802.2";
 choices[65][2] = "802.1";
 choices[65][3] = "802.12";
 answers[65] = 1;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4551. ";
 preguntaids[65] = 4551


//  Id pregunta: 4539 Año de creación de pregunta: 2002
 questions[66]= "67)  El cable coaxial Thick, comunmente conocido como 'amarillo':";
 choices[66]= new Array();
 choices[66][0] = "Sigue el est&aacute;ndar 10 Base 2";
 choices[66][1] = "Tiene un terminador tipo BNC";
 choices[66][2] = "Presenta una impedancia de 50 Ohm.";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = 2;
 units[66] = ['104'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4539. ";
 preguntaids[66] = 4539


//  Id pregunta: 4547 Año de creación de pregunta: 2002
 questions[67]= "68)  El est&aacute;ndar 100Base-FX corresponde a:";
 choices[67]= new Array();
 choices[67][0] = "Ethernet con un par extra de hilos";
 choices[67][1] = "Fast Ethernet con cables de fibra &oacute;ptica";
 choices[67][2] = "Fast Ethernet con cableado de par trenzado";
 choices[67][3] = "Ninguno de los anteriores";
 answers[67] = 1;
 units[67] = ['104'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4547. ";
 preguntaids[67] = 4547


//  Id pregunta: 4574 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso b&aacute;sico RDSI en Europa?:";
 choices[68]= new Array();
 choices[68][0] = "8 Kbps";
 choices[68][1] = "16 Kbps";
 choices[68][2] = "32 Kbps";
 choices[68][3] = "64 Kbps";
 answers[68] = 1;
 units[68] = ['114'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4574. ";
 preguntaids[68] = 4574


//  Id pregunta: 4576 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;les de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos puentes (bridges)?:";
 choices[69]= new Array();
 choices[69][0] = "Analizan la direcci&oacute;n destino del MAC (nivel 2 de OSI), pudiendo efectuar funciones de aprendizaje, filtrado y reenv&iacute;o";
 choices[69][1] = "Pueden interconectar redes tipo 802 que usan niveles 1 y 2 de OSI diferentes, pero no son transparentes a los protocolos de niveles superiores";
 choices[69][2] = "Su rendimiento (medido en paquetes/segundo) es menor que el de los equipos encaminadores (routers)";
 choices[69][3] = "Operan a nivel 3 de OSI, por lo que realizan funciones de filtrado, aislando el tr&aacute;fico de los segmentos conectados";
 answers[69] = 0;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4576. ";
 preguntaids[69] = 4576


//  Id pregunta: 4548 Año de creación de pregunta: 2002
 questions[70]= "71)  El est&aacute;ndar 802.3 del IEEE:";
 choices[70]= new Array();
 choices[70][0] = "Es pr&aacute;cticamente equivalente al Sistema Ethernet";
 choices[70][1] = "Utiliza el m&eacute;todo de paso de testigo en anillo";
 choices[70][2] = "Opera entre 10 y 100 Mb/s";
 choices[70][3] = "Emplea m&eacute;todos de no contenci&oacute;n";
 answers[70] = 0;
 units[70] = ['104'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4548. ";
 preguntaids[70] = 4548


//  Id pregunta: 4549 Año de creación de pregunta: 2002
 questions[71]= "72)  El est&aacute;ndar de correo electr&oacute;nico desarrollado por ITU-T dentro de OSI es:";
 choices[71]= new Array();
 choices[71][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[71][1] = "MHS - X.400 (Message Handling System)";
 choices[71][2] = "PEM (Private Enhanced Mail)";
 choices[71][3] = "MIME (Multipurpose Internet Mail Extension)";
 answers[71] = 1;
 units[71] = ['116'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4549. ";
 preguntaids[71] = 4549


//  Id pregunta: 4559 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de encaminamiento o enrutamiento?:";
 choices[72]= new Array();
 choices[72][0] = "OSPF";
 choices[72][1] = "RIP";
 choices[72][2] = "ORP";
 choices[72][3] = "IS-IS";
 answers[72] = 2;
 units[72] = ['102'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4559. ";
 preguntaids[72] = 4559


//  Id pregunta: 4531 Año de creación de pregunta: 2002
 questions[73]= "74)  Dentro del modelo OSI, podemos afirmar que:";
 choices[73]= new Array();
 choices[73][0] = "El nivel 2 no hay control de flujo";
 choices[73][1] = "El nivel 3 se enfrenta a problemas de encaminamiento";
 choices[73][2] = "El nivel 4 se encarga de los problemas de interconexi&oacute;n de redes";
 choices[73][3] = "En el nivel 5 se tratan los aspectos sint&aacute;ctico y sem&aacute;ntico de la informaci&oacute;n";
 answers[73] = 1;
 units[73] = ['105'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4531. ";
 preguntaids[73] = 4531


//  Id pregunta: 4572 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;l es la funcionalidad de los multiplexores estad&iacute;sticos?:";
 choices[74]= new Array();
 choices[74][0] = "Que realizan un tipo de multiplexaci&oacute;n por divisi&oacute;n en frecuencias (FDM)";
 choices[74][1] = "Que realizan la transferencia de se&ntilde;ales anal&oacute;gicas, y la estad&iacute;stica de errores";
 choices[74][2] = "Que realizan un muestreo de l&iacute;neas seg&uacute;n el tr&aacute;fico, no asignando intervalos fijos";
 choices[74][3] = "Que dividen el ancho de banda, seg&uacute;n par&aacute;metros definibles, proporcionando informaci&oacute;n estad&iacute;stica de uso para que el usuario ajuste sus asignaciones";
 answers[74] = 2;
 units[74] = ['112'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4572. ";
 preguntaids[74] = 4572


