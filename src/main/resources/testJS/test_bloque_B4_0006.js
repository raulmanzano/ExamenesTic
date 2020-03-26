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
//  Id pregunta: 4417 Año de creación de pregunta: 2002
 questions[0]= "1)  Indique la afirmaci&oacute;n incorrecta respecto al correo electr&oacute;nico:";
 choices[0]= new Array();
 choices[0][0] = "Los mensajes se pueden recibir aunque el equipo est&eacute; desconectado";
 choices[0][1] = "No es necesaria la conexi&oacute;n directa emisor-receptor";
 choices[0][2] = "No permite enviar fax";
 choices[0][3] = "Todos los sistemas de correo electr&oacute;nico que cumplan las recomendaciones X.400 de la ITU-T pueden interconectarse a trav&eacute;s de la mensajer&iacute;a p&uacute;blica";
 answers[0] = 2;
 units[0] = ['116'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4417. ";
 preguntaids[0] = 4417


//  Id pregunta: 4346 Año de creación de pregunta: 2004
 questions[1]= "2)  &iquest;Cu&aacute;s de los siguientes estandares de redes de &aacute;rea local se caracterizan por ir sobre 2 pares trenzados apantallados";
 choices[1]= new Array();
 choices[1][0] = "1000BaseLX";
 choices[1][1] = "1000BaseSX";
 choices[1][2] = "1000BaseCX";
 choices[1][3] = "1000BaseT";
 answers[1] = 2;
 units[1] = ['104'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4346. Examen Julio 2003";
 preguntaids[1] = 4346


//  Id pregunta: 4408 Año de creación de pregunta: 2002
 questions[2]= "3)  Dentro de la norma X.400, &iquest; qu&eacute; se entiende por Agente de Usuario (UA)?:";
 choices[2]= new Array();
 choices[2][0] = "El usuario que puede ser una persona o programa de aplicaci&oacute;n";
 choices[2][1] = "Agente que almacena y retransmite los mensajes destinados a un usuario";
 choices[2][2] = "Agente que enruta los mensajes.";
 choices[2][3] = "Proceso de aplicaci&oacute;n que interactua con el sistema de transferencia de mensajes";
 answers[2] = 3;
 units[2] = ['116'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4408. ";
 preguntaids[2] = 4408


//  Id pregunta: 4403 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Qu&eacute; es GOPHER?:";
 choices[3]= new Array();
 choices[3][0] = "Un protocolo de comunicaci&oacute;n entre redes Ethernet";
 choices[3][1] = "Un sistema operativo multitarea y multipuesto desarrollado por NeXT";
 choices[3][2] = "Un sistema disponible en Internet para b&uacute;squeda y transmisi&oacute;n de ficheros";
 choices[3][3] = "Nada de lo anterior";
 answers[3] = 2;
 units[3] = ['103'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4403. ";
 preguntaids[3] = 4403


//  Id pregunta: 4390 Año de creación de pregunta: 2005
 questions[4]= "5)  Al instalar un cortafuegos (firewall) para la protecci&oacute;n de un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[4]= new Array();
 choices[4][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[4][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[4][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[4][3] = "Todas las anteriores";
 answers[4] = 3;
 units[4] = ['119'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4390. Magerit V2";
 preguntaids[4] = 4390


//  Id pregunta: 4398 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Para que me sirve una sonda de intrusi&oacute;n?:";
 choices[5]= new Array();
 choices[5][0] = "No existe ese concepto";
 choices[5][1] = "Para devolver el ataque";
 choices[5][2] = "Para detectar actividades anormales o sospechosas en la red";
 choices[5][3] = "Para penetrar en un sistema";
 answers[5] = 2;
 units[5] = ['119'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4398. ";
 preguntaids[5] = 4398


//  Id pregunta: 4368 Año de creación de pregunta: 2004
 questions[6]= "7)  El protocolo IPv6 define un campo de direcciones de:";
 choices[6]= new Array();
 choices[6][0] = "32 bits";
 choices[6][1] = "64 bits";
 choices[6][2] = "128 bits";
 choices[6][3] = "ninguna de las anteriores";
 answers[6] = 2;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4368. ";
 preguntaids[6] = 4368


//  Id pregunta: 4384 Año de creación de pregunta: 2004
 questions[7]= "8)  &iquest;Qu&eacute; diferencia, entre otras, hay entre S-HTTP y SSL?";
 choices[7]= new Array();
 choices[7][0] = "El protocolo SSL fue desarrollado por Enterprise Integration Technologies (EIT) y el S-HTTP por Netscape";
 choices[7][1] = "S-HTTP permite el cifrado pero no la autenticaci&oacute;n digital, SSL permite tanto el cifrado como la autenticaci&oacute;n digital";
 choices[7][2] = "S-HTTP funciona entre la capa TCP y la capa de aplicaci&oacute;n, SSL funciona en la de aplicaci&oacute;n";
 choices[7][3] = "S-HTTP solamente sirve para la navegaci&oacute;n web, mientras que SSL sirve para cualquier comunicaci&oacute;n";
 answers[7] = 3;
 units[7] = ['119'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4384. Examen TAI 2004";
 preguntaids[7] = 4384


//  Id pregunta: 4359 Año de creación de pregunta: 2004
 questions[8]= "9)  Las cabeceras de extensi&oacute;n";
 choices[8]= new Array();
 choices[8][0] = "Pertenecen al protocolo ipv4";
 choices[8][1] = "Son todas obligatorias";
 choices[8][2] = "Perminten definir la ruta que siga un paquete IPv6";
 choices[8][3] = "Definen las opciones en una red Token Ring";
 answers[8] = 2;
 units[8] = ['109'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4359. ";
 preguntaids[8] = 4359


//  Id pregunta: 4383 Año de creación de pregunta: 2004
 questions[9]= "10)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "No existen";
 choices[9][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[9][2] = "Pueden ser considerados como filtros de paquetes";
 choices[9][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[9] = 3;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4383. Examen TAI 2004";
 preguntaids[9] = 4383


//  Id pregunta: 4420 Año de creación de pregunta: 2002
 questions[10]= "11)  La arquitectura Internet en tres capas diferencia:";
 choices[10]= new Array();
 choices[10][0] = "Nivel de presentaci&oacute;n, de aplicaci&oacute;n y de datos";
 choices[10][1] = "Nivel de navegador, de aplicaci&oacute;n y de datos";
 choices[10][2] = "Nivel de cliente, de servidor  y de navegador";
 choices[10][3] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;c&rsquo; son falsas";
 answers[10] = 0;
 units[10] = ['113'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4420. ";
 preguntaids[10] = 4420


//  Id pregunta: 4393 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes ataques afecta a la disponibilidad de la informaci&oacute;n?:";
 choices[11]= new Array();
 choices[11][0] = "e-mail Spamming";
 choices[11][1] = "DoS (Denial of Service)";
 choices[11][2] = "DDoS (Distributed Denial of Service)";
 choices[11][3] = "Todos los anteriores";
 answers[11] = 3;
 units[11] = ['120'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4393. ";
 preguntaids[11] = 4393


//  Id pregunta: 4392 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes direcciones es v&aacute;lida para un equipo conectado y accesible directamente desde Internet?:";
 choices[12]= new Array();
 choices[12][0] = "256.198.234.12";
 choices[12][1] = "10.128.179.54";
 choices[12][2] = "192.139.234.12";
 choices[12][3] = "127.34.156.0";
 answers[12] = 2;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4392. ";
 preguntaids[12] = 4392


//  Id pregunta: 4375 Año de creación de pregunta: 2004
 questions[13]= "14)  &iquest;A qu&eacute; se corresponden las siglas 802.11d sobre redes inal&aacute;mbricas?";
 choices[13]= new Array();
 choices[13][0] = "A especificaciones de nivel f&iacute;sico";
 choices[13][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[13][2] = "A especificaciones de Seguridad";
 choices[13][3] = "A especificiaciones de roaming";
 answers[13] = 3;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4375. ";
 preguntaids[13] = 4375


//  Id pregunta: 4413 Año de creación de pregunta: 2002
 questions[14]= "15)  En los dispositivos de red se utiliza el 'buffering' para:";
 choices[14]= new Array();
 choices[14][0] = "Almacenar temporalmente los datos recibidos hasta que puedan ser procesados";
 choices[14][1] = "Informar al origen del tr&aacute;fico de que deber&iacute;a usarse control de flujo";
 choices[14][2] = "Emitir el ACK de las tranmisiones que se han recibido";
 choices[14][3] = "Impedir que los dispositivos fuente (emisores) transmitan datos a menos que se les pida expl&iacute;citamente";
 answers[14] = 0;
 units[14] = ['102'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4413. ";
 preguntaids[14] = 4413


//  Id pregunta: 4386 Año de creación de pregunta: 2004
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[15]= new Array();
 choices[15][0] = "La direcci&oacute;n IP no se asocia a la m&aacute;quina sino a la interfaz de red";
 choices[15][1] = "Hay 256 puertos llamados bien conocidos (well known)";
 choices[15][2] = "La direcci&oacute;n IP y el puerto determinan un socket";
 choices[15][3] = "Una aplicaci&oacute;n se identifica por un puerto";
 answers[15] = 1;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4386. SS-A 2004. Los puertos bien conocidos (well-known ports) son aquellos menores a 1024 y que se utilizan para los servicios b&aacute;sicos en Internet";
 preguntaids[15] = 4386


//  Id pregunta: 4406 Año de creación de pregunta: 2002
 questions[16]= "17)  Dado un cable coaxial de longitud 1 metro, donde se aplica una potencia de 1 mW, y se obtiene en el otro extremo una potencia de salida de 0.1 mW, se puede decir que el cable presenta unas p&eacute;rdidas de:";
 choices[16]= new Array();
 choices[16][0] = "10 dB/m";
 choices[16][1] = "20 dB/m";
 choices[16][2] = "1 dB/m";
 choices[16][3] = "5 dB/m";
 answers[16] = 0;
 units[16] = ['104'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4406. ";
 preguntaids[16] = 4406


//  Id pregunta: 4365 Año de creación de pregunta: 2004
 questions[17]= "18)  LDAP ( Lightweght Directory Access Protocol):";
 choices[17]= new Array();
 choices[17][0] = "Surge como evoluci&oacute;n del protocolo DAP  (Directory Access Protocol). LDAP es un protocolo a nivel de aplicaci&oacute;n, por lo que tanto el cliente como el servidor deben implementar completamente la torre de protocolos OSI";
 choices[17][1] = "Surge como alternativa al DAP y utiliza TCP/IP en lugar de los protocolos OSI, lo cu&aacute;l es una ventaja ya que TCP/IP requiere menos recursos y est&aacute; m&aacute;s disponible, especialmente en ordenadores de sobremesa.";
 choices[17][2] = "Abandona el modelo cliente/servidor de implementaci&oacute;n, de modo que una aplicaci&oacute;n que desea acceder al directorio lo hace directamente contra la base de datos cuyo esquema est&aacute; disponible (ISO 9594)";
 choices[17][3] = "Es un servicio de directorio centralizado frente a los modelos distribuidos donde los datos podr&iacute;an estar fraccionados y/o replicados. As&iacute; pues con LDAP un &uacute;nico servidor da todo el servicio de directorio respondiendo a todas las consultas de los clientes";
 answers[17] = 1;
 units[17] = ['116'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4365. ";
 preguntaids[17] = 4365


//  Id pregunta: 4360 Año de creación de pregunta: 2004
 questions[18]= "19)  Indique la afirmaci&oacute;n falsa. De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el servicio universal debe garantizar:";
 choices[18]= new Array();
 choices[18][0] = "La puesta a disposici&oacute;n de los abonados de una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y que se actualice, como m&iacute;nimo, una vez al a&ntilde;o";
 choices[18][1] = "La obtenci&oacute;n por todos los usuarios finales de una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija as&iacute; como el acceso a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico debiendo incluir entre otros el acceso funcional a internet.";
 choices[18][2] = "La existencia de una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago";
 choices[18][3] = "La obtenci&oacute;n por todos los usuarios finales de telefon&iacute;a m&oacute;vil en condiciones de igualdad y no discriminaci&oacute;n, con una calidad determinada que ser&aacute; fijada reglamentariamente y a un precio asequible.";
 answers[18] = 3;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4360. Examen TIC MAP B 2004";
 preguntaids[18] = 4360


//  Id pregunta: 4362 Año de creación de pregunta: 2004
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al protocolo IPv6?";
 choices[19]= new Array();
 choices[19][0] = "Maneja direcciones de 16 bytes";
 choices[19][1] = "La cabecera del protocolo se ha ampliado respecto a la de IPv4";
 choices[19][2] = "Incluye funciones de autenticaci&oacute;n";
 choices[19][3] = "Incluye funciones de encriptaciones";
 answers[19] = 1;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4362. Aunque la cabecera IPv6 tiene mayor tama&ntilde;o, los campos menos utilizados de IP v4 se han movido a OPCIONES";
 preguntaids[19] = 4362


//  Id pregunta: 4367 Año de creación de pregunta: 2004
 questions[20]= "21)  Dentro de la familia de protocolos TCP/IP hay algunos que se definen como no fiables en el sentido de que no aseguran la recepci&oacute;n final en el equipo destinatario de la informaci&oacute;n. De los siguientes indique cu&aacute;l es un protocolo fiable:";
 choices[20]= new Array();
 choices[20][0] = "IP";
 choices[20][1] = "UDP";
 choices[20][2] = "TCP";
 choices[20][3] = "FDDI";
 answers[20] = 2;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4367. ";
 preguntaids[20] = 4367


//  Id pregunta: 4389 Año de creación de pregunta: 2002
 questions[21]= "22)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[21]= new Array();
 choices[21][0] = "criptoan&aacute;lisis lineal";
 choices[21][1] = "criptoan&aacute;lisis continuo";
 choices[21][2] = "sweep-attack";
 choices[21][3] = "fuerza bruta";
 answers[21] = 3;
 units[21] = ['119'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4389. ";
 preguntaids[21] = 4389


//  Id pregunta: 4382 Año de creación de pregunta: 2004
 questions[22]= "23)  Entre los ataques de seguridad que se producen a trav&eacute;s de redes como internet, aparece el concepto de Phishing. &iquest;Cu&aacute;l de las siguientes definiciones se ajustan a este concepto?";
 choices[22]= new Array();
 choices[22][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[22][1] = "Suplantaci&oacute;n de identidades de organizaciones para conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[22][2] = "Escuchas en red con el fin de conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = 1;
 units[22] = ['119'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4382. ";
 preguntaids[22] = 4382


//  Id pregunta: 4347 Año de creación de pregunta: 2004
 questions[23]= "24)  En broadcast, &iquest;qu&eacute; protocolo traduce a direcci&oacute;n f&iacute;sica?";
 choices[23]= new Array();
 choices[23][0] = "TCP";
 choices[23][1] = "UDP";
 choices[23][2] = "RIP";
 choices[23][3] = "ARP";
 answers[23] = 3;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4347. Examen Julio 2003";
 preguntaids[23] = 4347


//  Id pregunta: 4374 Año de creación de pregunta: 2004
 questions[24]= "25)  &iquest;A qu&eacute; se corresponden las siglas 802.11i sobre redes inal&aacute;mbricas?";
 choices[24]= new Array();
 choices[24][0] = "A especificaciones de nivel f&iacute;sico";
 choices[24][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[24][2] = "A especificaciones de Seguridad";
 choices[24][3] = "A especificiaciones de roaming";
 answers[24] = 2;
 units[24] = ['108'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4374. ";
 preguntaids[24] = 4374


//  Id pregunta: 4414 Año de creación de pregunta: 2002
 questions[25]= "26)  En un sistema de alimentaci&oacute;n ininterrumpida, a qu&eacute; se denomina 'red de reserva':";
 choices[25]= new Array();
 choices[25][0] = "A la suministrada por la compa&ntilde;ia el&eacute;ctrica";
 choices[25][1] = "A la que suministra el ondulador (inversor) a la carga";
 choices[25][2] = "A la carga remanente en las bater&iacute;as";
 choices[25][3] = "A la que entrega el rectificador";
 answers[25] = 0;
 units[25] = ['119'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4414. ";
 preguntaids[25] = 4414


//  Id pregunta: 4415 Año de creación de pregunta: 2002
 questions[26]= "27)  En una arquitectura de tres capas el acceso a los datos corresponde a la capa de:";
 choices[26]= new Array();
 choices[26][0] = "Presentaci&oacute;n";
 choices[26][1] = "Aplicaci&oacute;n";
 choices[26][2] = "Datos";
 choices[26][3] = "En realidad las tres capas manipulan los datos";
 answers[26] = 2;
 units[26] = ['113'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4415. ";
 preguntaids[26] = 4415


//  Id pregunta: 4387 Año de creación de pregunta: 2004
 questions[27]= "28)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[27]= new Array();
 choices[27][0] = "Bluetooth";
 choices[27][1] = "HomeRF";
 choices[27][2] = "HiperLAN/2";
 choices[27][3] = "IrLMP";
 answers[27] = 1;
 units[27] = ['108'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4387. Examen TAI 2004";
 preguntaids[27] = 4387


//  Id pregunta: 4412 Año de creación de pregunta: 2002
 questions[28]= "29)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[28]= new Array();
 choices[28][0] = "Distorsi&oacute;n no lineal";
 choices[28][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[28][2] = "Intermodulaci&oacute;n";
 choices[28][3] = "Paradiafon&iacute;a";
 answers[28] = 2;
 units[28] = ['104'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4412. ";
 preguntaids[28] = 4412


//  Id pregunta: 4401 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[29]= new Array();
 choices[29][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[29][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[29][2] = "No hay diferencia; es lo mismo";
 choices[29][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[29] = 3;
 units[29] = ['113'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4401. ";
 preguntaids[29] = 4401


//  Id pregunta: 4404 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Qu&eacute; inconvenientes presenta la transmisi&oacute;n de informaci&oacute;n mediante rayo l&aacute;ser?:";
 choices[30]= new Array();
 choices[30][0] = "Posible causa de accidentes";
 choices[30][1] = "Coste excesivamente elevado";
 choices[30][2] = "Afectada fuertemente por condiciones climatol&oacute;gicas";
 choices[30][3] = "Genera fuertes interferencias electromagn&eacute;ticas en otros aparatos";
 answers[30] = 2;
 units[30] = ['106'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4404. ";
 preguntaids[30] = 4404


//  Id pregunta: 4396 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes protocolos de internet relacionados con el correo electr&oacute;nico permite descargar selectivamente los mensajes de entrada del servidor de correo?:";
 choices[31]= new Array();
 choices[31][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[31][1] = "POP3 (Post Office Protocol versi&oacute;n 3)";
 choices[31][2] = "IMAP4 (Internet Message Access Protocol versi&oacute;n 4)";
 choices[31][3] = "S/MIME (Secure Multipurpose Internet Mail Extensions)";
 answers[31] = 2;
 units[31] = ['116'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4396. ";
 preguntaids[31] = 4396


//  Id pregunta: 4379 Año de creación de pregunta: 2004
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas de las redes GPRS es falsa?";
 choices[32]= new Array();
 choices[32][0] = "Alcanza velocidades de hasta 115kbps";
 choices[32][1] = "Conmutaci&oacute;n de paquetes";
 choices[32][2] = "Es orientado a conexi&oacute;n";
 choices[32][3] = "La tarificaci&oacute;n se produce por volumen de datos intercambiado";
 answers[32] = 2;
 units[32] = ['117'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4379. ";
 preguntaids[32] = 4379


//  Id pregunta: 4353 Año de creación de pregunta: 2004
 questions[33]= "34)  Un spanning tree es";
 choices[33]= new Array();
 choices[33][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[33][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[33][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[33][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[33] = 0;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4353. ";
 preguntaids[33] = 4353


//  Id pregunta: 4341 Año de creación de pregunta: 2004
 questions[34]= "35)  Suponiendo que con el protocolo HDLC tuvieramos un tama&ntilde;o de ventana de 6000, se hubieran enviado 2000 paquetes y recibido 1001 reconocimientos. &iquest;Cu&aacute;ntos paquete podriamos seguir enviando?";
 choices[34]= new Array();
 choices[34][0] = "3000";
 choices[34][1] = "6000";
 choices[34][2] = "5000";
 choices[34][3] = "4000";
 answers[34] = 2;
 units[34] = ['109'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4341. Examen Julio 2003";
 preguntaids[34] = 4341


//  Id pregunta: 4416 Año de creación de pregunta: 2002
 questions[35]= "36)  Indique cu&aacute;l de las opciones refleja m&aacute;s adecuadamente las caracter&iacute;sticas de un cable coaxial:";
 choices[35]= new Array();
 choices[35][0] = "Un cable coaxial es un medio de transmisi&oacute;n constituido por dos hilos conductores aislados entre si y dispuestos de forma paralela a lo largo de todo su recorrido";
 choices[35][1] = "Un cable coaxial est&aacute; constituido por dos hilos conductores paralelos aislados y recubiertos por una l&aacute;mina conductora";
 choices[35][2] = "Un cable coaxial est&aacute; constituido por un hilo conductor central rodeado de una lamina conductora conc&eacute;ntrica con &eacute;l y separado por un medio aislante";
 choices[35][3] = "Un cable coaxial est&aacute; constituido por un conjunto de conductores aislados entre si y torsionados sobre ellos mismos en grupos de cuatro, encerrados todos ellos por una lamina o cubierta conductora";
 answers[35] = 2;
 units[35] = ['104'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4416. ";
 preguntaids[35] = 4416


//  Id pregunta: 4351 Año de creación de pregunta: 2004
 questions[36]= "37)  &iquest;Cu&aacute;s de los siguientes servicios no proporciona el nivel de aplicaci&oacute;n en el modelo OSI de ISO?";
 choices[36]= new Array();
 choices[36][0] = "Determinaci&oacute;n de la calidad de servicio aceptable";
 choices[36][1] = "Acuerdo sobre los mecanismos de privacidad";
 choices[36][2] = "Reglas gramaticales para representaci&oacute;n de los datos y est&aacute;ndares acordados  para obtener  informaci&oacute;n entendible entre sistemas (ASCII, EDIC, ASN.1 )";
 choices[36][3] = "Selecci&oacute;n de la disciplina de di&aacute;logo, incluyendo los procedimientos de iniciaci&oacute;n y liberaci&oacute;n";
 answers[36] = 2;
 units[36] = ['105'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4351. Es la capa de presentaci&oacute;n la que se encarga de la sintaxis";
 preguntaids[36] = 4351


//  Id pregunta: 4357 Año de creación de pregunta: 2004
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes aseveraciones en relaci&oacute;n con el est&aacute;ndar IEEE 802.11 es falsa?";
 choices[37]= new Array();
 choices[37][0] = "Los estandares IEEE 802.11 son de libre distribuci&oacute;n";
 choices[37][1] = "La especificaci&oacute;n de la capa MAC (Medium Access Control) del IEEE 802.11 es el CSMA/CA";
 choices[37][2] = "El nivel MAC del IEEE 802.11 define tres tipos de tramas: datos, administraci&oacute;n y control";
 choices[37][3] = "La especifici&oacute;n IEEE 802.11b define transmisiones con velocidades hasta 54Mbps";
 answers[37] = 3;
 units[37] = ['108'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4357. ";
 preguntaids[37] = 4357


//  Id pregunta: 4402 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Qu&eacute; es el spyware?:";
 choices[38]= new Array();
 choices[38][0] = "SW de alto secreto usado por los servicios de inteligencia de cada pa&iacute;s";
 choices[38][1] = "SW que diversas compa&ntilde;&iacute;as introducen en tu ordenador cuando te descargas algo de internet, para ver tus programas y tus usos y sacar estudios de mercado";
 choices[38][2] = "Es otro nombre de las conocidas cookies";
 choices[38][3] = "La denominaci&oacute;n es err&oacute;nea, no se refiere a nada";
 answers[38] = 1;
 units[38] = ['119'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4402. ";
 preguntaids[38] = 4402


//  Id pregunta: 4373 Año de creación de pregunta: 2004
 questions[39]= "40)  &iquest;Es admisible cierto grado de inconsistencia temporal en la informaci&oacute;n dado sistemas como X.500 o LDAP?";
 choices[39]= new Array();
 choices[39][0] = "S&iacute;";
 choices[39][1] = "No";
 choices[39][2] = "S&iacute;, pero s&oacute;lo para LDAP";
 choices[39][3] = "ninguna de las anteriores";
 answers[39] = 0;
 units[39] = ['116'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4373. ";
 preguntaids[39] = 4373


//  Id pregunta: 4421 Año de creación de pregunta: 2002
 questions[40]= "41)  La degradaci&oacute;n de la calidad de un sistema de transmisi&oacute;n se debe a las perturbaciones, se pueden distinguir varios tipos:";
 choices[40]= new Array();
 choices[40][0] = "La distorsi&oacute;n, se produce siempre en presencia de la se&ntilde;al y puede existir de dos tipos: directa e indirecta";
 choices[40][1] = "La intermodulaci&oacute;n consiste en la aparici&oacute;n en el receptor de nuevas componentes espectrales de primer orden debido a la mezcla de las componentes espectrales de la se&ntilde;al de informaci&oacute;n";
 choices[40][2] = "El ruido es un tipo de perturbaci&oacute;n de origen electromagn&eacute;tico, se consideran tres tipos : t&eacute;rmico, impulsivo y de cuantificaci&oacute;n";
 choices[40][3] = "La diafon&iacute;a produce en la funci&oacute;n de transferencia de extremo a extremo la aparici&oacute;n de frecuencias nuevas que no exist&iacute;an en la se&ntilde;al original";
 answers[40] = 2;
 units[40] = ['104'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4421. ";
 preguntaids[40] = 4421


//  Id pregunta: 4397 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Entre qu&eacute; niveles de la arquitectura TCP/IP se encuentra el protocolo SSL (Secure Socket Layer)?:";
 choices[41]= new Array();
 choices[41][0] = "Por encima del nivel de aplicaci&oacute;n";
 choices[41][1] = "Al mismo nivel que el nivel de aplicaci&oacute;n";
 choices[41][2] = "Entre el nivel de aplicaci&oacute;n y TCP";
 choices[41][3] = "Entre TCP e IP";
 answers[41] = 2;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4397. ";
 preguntaids[41] = 4397


//  Id pregunta: 4385 Año de creación de pregunta: 2004
 questions[42]= "43)  &iquest;Qu&eacute; no puede hacer un sistema de detecci&oacute;n de intrusos?";
 choices[42]= new Array();
 choices[42][0] = "Controlar el tr&aacute;fico de red dentro y fuera de los firewall";
 choices[42][1] = "Evitar que salten alarmas falsas";
 choices[42][2] = "Detectar tiempos de acceso anormales";
 choices[42][3] = "Guardar logs de los accesos";
 answers[42] = 0;
 units[42] = ['119'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4385. SS-A 2004";
 preguntaids[42] = 4385


//  Id pregunta: 4358 Año de creación de pregunta: 2004
 questions[43]= "44)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderse con su router por defecto";
 choices[43]= new Array();
 choices[43][0] = "10.2.40.64";
 choices[43][1] = "10.2.41.45";
 choices[43][2] = "10.2.40.63";
 choices[43][3] = "10.2.40.62";
 answers[43] = 3;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4358. ";
 preguntaids[43] = 4358


//  Id pregunta: 4342 Año de creación de pregunta: 2004
 questions[44]= "45)  X.500 se constituye como un estandar de servicios de directorio electr&oacute;nico con caracter&iacute;sticas de:";
 choices[44]= new Array();
 choices[44][0] = "Actualizaci&oacute;n";
 choices[44][1] = "Acceso y actualizaci&oacute;n";
 choices[44][2] = "Modificaci&oacute;n";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = 1;
 units[44] = ['116'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4342. Examen Julio 2003";
 preguntaids[44] = 4342


//  Id pregunta: 4381 Año de creación de pregunta: 2004
 questions[45]= "46)  Seg&uacute;n la ley 9/2014 general de telecomunicaciones, qu&eacute; organismo regular&aacute; los mercados de telecomunicaciones";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Energia, Turismo y Agenda Digital";
 choices[45][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[45][2] = "Agencia Nacional de Radiocomunicaciones";
 choices[45][3] = "ninguna de las anteriores";
 answers[45] = 1;
 units[45] = ['121'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4381. ";
 preguntaids[45] = 4381


//  Id pregunta: 4344 Año de creación de pregunta: 2004
 questions[46]= "47)  El estandar de IEEE 802.9 se corresponde con...";
 choices[46]= new Array();
 choices[46][0] = "fibra optica";
 choices[46][1] = "voz y datos";
 choices[46][2] = "seguridad LAN";
 choices[46][3] = "ninguna de las anteriores";
 answers[46] = 1;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4344. Examen Julio 2003";
 preguntaids[46] = 4344


//  Id pregunta: 4350 Año de creación de pregunta: 2004
 questions[47]= "48)  Los bridges:";
 choices[47]= new Array();
 choices[47][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[47][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[47][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[47][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[47] = 3;
 units[47] = ['102'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4350. ";
 preguntaids[47] = 4350


//  Id pregunta: 4369 Año de creación de pregunta: 2004
 questions[48]= "49)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modelo de transferencia as&iacute;ncrono) es:";
 choices[48]= new Array();
 choices[48][0] = "Utiliza un formato de celda de longitud fija";
 choices[48][1] = "El tama&ntilde;o de la celda se negocia en el nivel de enlace";
 choices[48][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[48][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transporte";
 answers[48] = 0;
 units[48] = ['107'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4369. ";
 preguntaids[48] = 4369


//  Id pregunta: 4356 Año de creación de pregunta: 2004
 questions[49]= "50)  Indicar cu&aacute;l de las siguientes afirmaciones sobre el estandar GPRS no es correcta";
 choices[49]= new Array();
 choices[49][0] = "La tarificaci&oacute;n es por la cantidad de tr&aacute;fico transmitido y por calidades de servicio";
 choices[49][1] = "Se asigna un canal por usuario que permanecer&aacute; asignado aunque no se envien datos";
 choices[49][2] = "La voz y los datos se multiplexan, permitiendo su envio y recepci&oacute;n simultaneamente";
 choices[49][3] = "La velocidad de conexi&oacute;n puede llegar a los 50kbps";
 answers[49] = 1;
 units[49] = ['117'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4356. ";
 preguntaids[49] = 4356


//  Id pregunta: 4349 Año de creación de pregunta: 2004
 questions[50]= "51)  En la redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[50]= new Array();
 choices[50][0] = "Un ordenador se conecta al siguiente y el &uacute;ltimo al primero, formando un circulo cerrado";
 choices[50][1] = "Existe un nodo raiz del que cuelgan uno o varios nodos";
 choices[50][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[50][3] = "Cada uno de los nodos est&aacute; conectado con todos los demas";
 answers[50] = 2;
 units[50] = ['112'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4349. ";
 preguntaids[50] = 4349


//  Id pregunta: 4354 Año de creación de pregunta: 2004
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "DNS: Sistema de nombres de dominio";
 choices[51][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[51][2] = "FTP: Protocolo de transferencia de archivos";
 choices[51][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[51] = 3;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4354. ";
 preguntaids[51] = 4354


//  Id pregunta: 4378 Año de creación de pregunta: 2004
 questions[52]= "53)  Entre las carater&iacute;sticas de propagaci&oacute;n de las ondas de radiofrecuencia, cu&aacute;l de las siguientes afirmaciones no es correcta cuando se incrementa la frecuencia?";
 choices[52]= new Array();
 choices[52][0] = "Menor alcance de la se&ntilde;al";
 choices[52][1] = "menor ancho de banda";
 choices[52][2] = "mayor inmunidad al ruido";
 choices[52][3] = "mayor necesidad de visibilidad directa";
 answers[52] = 1;
 units[52] = ['108'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4378. ";
 preguntaids[52] = 4378


//  Id pregunta: 4343 Año de creación de pregunta: 2004
 questions[53]= "54)  El sistema de comunicaciones m&oacute;viles GSM se compone de diversos elementos tales como el HLR y VLR, &iquest;que son?";
 choices[53]= new Array();
 choices[53][0] = "estaciones base";
 choices[53][1] = "bases de datos de usuarios";
 choices[53][2] = "MSC";
 choices[53][3] = "ninguna de las anteriores";
 answers[53] = 1;
 units[53] = ['117'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4343. Examen Julio 2003";
 preguntaids[53] = 4343


//  Id pregunta: 4340 Año de creación de pregunta: 2004
 questions[54]= "55)  La tecnolog&iacute;a de acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha denominada WCDMA, es utilizado por el sitema de telecomunicaciones m&oacute;vil?";
 choices[54]= new Array();
 choices[54][0] = "GPS";
 choices[54][1] = "ATM";
 choices[54][2] = "TNM";
 choices[54][3] = "UMTS";
 answers[54] = 3;
 units[54] = ['117'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4340. Examen Julio 2003";
 preguntaids[54] = 4340


//  Id pregunta: 4363 Año de creación de pregunta: 2004
 questions[55]= "56)  De los siguientes n&uacute;meros de puertos TCP y UDP indicar la falsa:";
 choices[55]= new Array();
 choices[55][0] = "21 para FTP";
 choices[55][1] = "23 para TELNET";
 choices[55][2] = "110 para POP3";
 choices[55][3] = "80 para DNS";
 answers[55] = 3;
 units[55] = ['109'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4363. ";
 preguntaids[55] = 4363


//  Id pregunta: 4405 Año de creación de pregunta: 2002
 questions[56]= "57)  Bluetooth:";
 choices[56]= new Array();
 choices[56][0] = "Es una tecnolog&iacute;a de enlace radio para redes LAN de peque&ntilde;o alcance";
 choices[56][1] = "Es una tecnolog&iacute;a de enlace de radio para redes PAN";
 choices[56][2] = "Es el resultado de la aplicaci&oacute;n de las &uacute;ltimas t&eacute;cnicas inform&aacute;ticas al mundo de la odontolog&iacute;a";
 choices[56][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[56] = 1;
 units[56] = ['108'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4405. ";
 preguntaids[56] = 4405


//  Id pregunta: 4371 Año de creación de pregunta: 2004
 questions[57]= "58)  En qu&eacute; tipos se divide la fibra &oacute;ptica en funci&oacute;n de la forma de variaci&oacute;n del &iacute;ndice de refracci&oacute;n desde el eje de la fibra al exterior";
 choices[57]= new Array();
 choices[57][0] = "f.o. monomodo y multimodo";
 choices[57][1] = "f.o. de salto de &iacute;ndice y de &iacute;ndice gradual";
 choices[57][2] = "f.o. de emisores LED y emisores l&aacute;ser";
 choices[57][3] = "f.o. de &iacute;ndice anal&oacute;gico y digital";
 answers[57] = 1;
 units[57] = ['104'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4371. ";
 preguntaids[57] = 4371


//  Id pregunta: 4348 Año de creación de pregunta: 2004
 questions[58]= "59)  El protocolo ARP se basa en la creaci&oacute;n de ...";
 choices[58]= new Array();
 choices[58][0] = "Tablas din&aacute;micas";
 choices[58][1] = "Tablas est&aacute;ticas";
 choices[58][2] = "bloding";
 choices[58][3] = "ninguna de las anteriores";
 answers[58] = 0;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4348. Examen Julio 2003";
 preguntaids[58] = 4348


//  Id pregunta: 4364 Año de creación de pregunta: 2004
 questions[59]= "60)  En 1988, la CCITT cre&oacute; el est&aacute;ndar X.500, sobre servicios de directorio que, posteriormente, fue adoptado por la ISO. El est&aacute;ndar X.500 organiza las entradas en el directorio de manera:";
 choices[59]= new Array();
 choices[59][0] = "Asociativa";
 choices[59][1] = "Jer&aacute;rquica";
 choices[59][2] = "En estrella";
 choices[59][3] = "Como una pila FIFO";
 answers[59] = 1;
 units[59] = ['116'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4364. ";
 preguntaids[59] = 4364


//  Id pregunta: 4376 Año de creación de pregunta: 2004
 questions[60]= "61)  &iquest;A qu&eacute; se corresponden las siglas 802.11f sobre redes inal&aacute;mbricas?";
 choices[60]= new Array();
 choices[60][0] = "A especificaciones de nivel f&iacute;sico";
 choices[60][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[60][2] = "A especificaciones de Seguridad";
 choices[60][3] = "A especificiaciones de comunicaci&oacute;n entre puntos de acceso";
 answers[60] = 3;
 units[60] = ['108'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4376. Es una recomendaci&oacute;n que permite mayor compatibilidad. Usa el protocolo IAPP que permite a un usuario itinerante cambiarse de un punto de acceso a otro mientras est&aacute; en movimiento sin importar qu&eacute; marcas de puntos de acceso se usan en la red.";
 preguntaids[60] = 4376


//  Id pregunta: 4372 Año de creación de pregunta: 2004
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguiente definiciones se corresponde con la vulnerabilidad DDoS que puede producirse sobre nuestros sistemas?";
 choices[61]= new Array();
 choices[61][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[61][1] = "Escuchas en red";
 choices[61][2] = "Denegaci&oacute;n de servicio Distribuido";
 choices[61][3] = "Ataques de desbordamiento de buffer";
 answers[61] = 2;
 units[61] = ['119'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4372. ";
 preguntaids[61] = 4372


//  Id pregunta: 4361 Año de creación de pregunta: 2004
 questions[62]= "63)  En un switch ethernet";
 choices[62]= new Array();
 choices[62][0] = "todos los puertos trabajan a la misma velocidad";
 choices[62][1] = "puede adaptarse a las distintas velocidades de los host conectados de manera autom&aacute;tica";
 choices[62][2] = "hace labores de enrutamiento a nivel wan";
 choices[62][3] = "sirve &uacute;nicamente para conectar redes ethernet con token ring";
 answers[62] = 1;
 units[62] = ['102'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4361. ";
 preguntaids[62] = 4361


//  Id pregunta: 4366 Año de creación de pregunta: 2004
 questions[63]= "64)  De los siguientes &iquest;Cu&aacute;l es un componente b&aacute;sico de un cortafuegos?";
 choices[63]= new Array();
 choices[63][0] = "El balanceador de carga (o asignador de tareas) que permite la ampliaci&oacute;n horizontal del &quot;basti&oacute;n&quot; mediante la asignaci&oacute;n de tramas IP entre varias subredes o m&aacute;quinas configuradas en forma id&eacute;ntica.";
 choices[63][1] = "Los servicios proxy, entendidos como aplicaciones SW para reenviar o bloquear conexiones a servicios como finger, telnet o ftp";
 choices[63][2] = "el sistema operativo LINUX en sus distribuciones seguras";
 choices[63][3] = "La monitorizaci&oacute;n de servicios de red tipo SMTP, POP3, HTTP, NNTP, PING,&hellip;,  a efectos de disponibilidad y rendimiento (performance)";
 answers[63] = 1;
 units[63] = ['119'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4366. ";
 preguntaids[63] = 4366


//  Id pregunta: 4355 Año de creación de pregunta: 2004
 questions[64]= "65)  &iquest;Qu&eacute; norma se encarga de la estandarizaci&oacute;n de redes inal&aacute;mbricas de &aacute;rea personal?";
 choices[64]= new Array();
 choices[64][0] = "El IEEE 802.11";
 choices[64][1] = "El IEEE 802.15";
 choices[64][2] = "El AUT-C";
 choices[64][3] = "El UIT-T E-164";
 answers[64] = 1;
 units[64] = ['108'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4355. ";
 preguntaids[64] = 4355


//  Id pregunta: 4380 Año de creación de pregunta: 2004
 questions[65]= "66)  &iquest;A que se corresponden las siglas DECT?";
 choices[65]= new Array();
 choices[65][0] = "Una red de microondas para uso militar";
 choices[65][1] = "Un sistema de tel&eacute;fonos inal&aacute;mbrico";
 choices[65][2] = "Un sistema de telefon&iacute;a m&oacute;vil";
 choices[65][3] = "ninguna de las anteriores";
 answers[65] = 1;
 units[65] = ['117'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4380. ";
 preguntaids[65] = 4380


//  Id pregunta: 4352 Año de creación de pregunta: 2004
 questions[66]= "67)  La direcci&oacute;n ip 127.0.0.1 representa a";
 choices[66]= new Array();
 choices[66][0] = "El router de la red";
 choices[66][1] = "Toda la red";
 choices[66][2] = "El propio equipo";
 choices[66][3] = "Usualmente el servidor";
 answers[66] = 2;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4352. ";
 preguntaids[66] = 4352


//  Id pregunta: 4377 Año de creación de pregunta: 2004
 questions[67]= "68)  &iquest;A qu&eacute; se corresponden las siglas 802.11e sobre redes inal&aacute;mbricas?";
 choices[67]= new Array();
 choices[67][0] = "A especificaciones de nivel f&iacute;sico";
 choices[67][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[67][2] = "A especificaciones de Seguridad";
 choices[67][3] = "A especificiaciones de roaming";
 answers[67] = 1;
 units[67] = ['108'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4377. ";
 preguntaids[67] = 4377


//  Id pregunta: 4400 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes no es cierta respecto a SSL?";
 choices[68]= new Array();
 choices[68][0] = "Es el acr&oacute;nimo de Secure Sockets Layer, capa segura de interfaz con sockets";
 choices[68][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web";
 choices[68][2] = "En su funcionamiento, se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal (confidencialidad)";
 choices[68][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes";
 answers[68] = 3;
 units[68] = ['119'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4400. ";
 preguntaids[68] = 4400


//  Id pregunta: 4370 Año de creación de pregunta: 2004
 questions[69]= "70)  La familia de redes locales inal&aacute;mbricas WLAN operan en las bandas de frecuencia:";
 choices[69]= new Array();
 choices[69][0] = "2.4 GHz y 5 Ghz";
 choices[69][1] = "10MHz y 100MHz";
 choices[69][2] = "1MHz y 10 MHz";
 choices[69][3] = "ninguna de las anteriores";
 answers[69] = 0;
 units[69] = ['108'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4370. ";
 preguntaids[69] = 4370


//  Id pregunta: 4345 Año de creación de pregunta: 2004
 questions[70]= "71)  El subnivel de control de acceso al medio, MAC se encuentra encuadrado dentro del nivel?";
 choices[70]= new Array();
 choices[70][0] = "Enlace";
 choices[70][1] = "F&iacute;sico";
 choices[70][2] = "Red";
 choices[70][3] = "ninguna de las anteriores";
 answers[70] = 0;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4345. Examen Julio 2003";
 preguntaids[70] = 4345


//  Id pregunta: 4407 Año de creación de pregunta: 2002
 questions[71]= "72)  De las vulnerabilidades del software respecto a la seguridad inform&aacute;tica es falso que:";
 choices[71]= new Array();
 choices[71][0] = "el ataque de buffer overflow se basa en desbordar un buffer de memoria a la pila del sistema y forzar un retorno de una funci&oacute;n al sitio deseado";
 choices[71][1] = "el ataque m&aacute;s famoso en internet (gusano de internet) se basaba en fallo del software de los servidores HTTP en la entrega de p&aacute;ginas";
 choices[71][2] = "el ataque de IP spoofing consiste en falsificar la direcci&oacute;n IP para suplantar la identidad";
 choices[71][3] = "DDOS es un m&eacute;todo de ataque de denegaci&oacute;n del servicio de forma distribuida";
 answers[71] = 1;
 units[71] = ['120'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4407. ";
 preguntaids[71] = 4407


//  Id pregunta: 4418 Año de creación de pregunta: 2002
 questions[72]= "73)  IRC es:";
 choices[72]= new Array();
 choices[72][0] = "Internet Relay Chat";
 choices[72][1] = "InfraRed Channel";
 choices[72][2] = "Investigation Resource Commitee";
 choices[72][3] = "Internet Resource Commitee";
 answers[72] = 0;
 units[72] = ['103'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4418. ";
 preguntaids[72] = 4418


//  Id pregunta: 4399 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Para qu&eacute; se utiliza el entrelazado de bits en la transmisi&oacute;n de informaci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "para proporcionar una sencilla manera de cifrado y conseguir la confidencialidad";
 choices[73][1] = "para evitar que fallos de transmisi&oacute;n afecten a bits consecutivos y se pierda informaci&oacute;n";
 choices[73][2] = "para obtener un c&oacute;digo de redundancia c&iacute;clica que prevenga de errores en recepci&oacute;n";
 choices[73][3] = "Adem&aacute;s de evitar los fallos de transmisi&oacute;n (los llamados errores de r&aacute;faga) evita que se introduzca una mayor latencia en el sistema agilizando la comunicaci&oacute;n";
 answers[73] = 1;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4399. La principal desventaja del entrelazado es que introduce latencia al sistema, ya que tenemos que esperar a la recepci&oacute;n de todos los bits del mensaje para poder desentrelazar y emplear las t&eacute;cnicas de correcci&oacute;n de errores";
 preguntaids[73] = 4399


//  Id pregunta: 4409 Año de creación de pregunta: 2002
 questions[74]= "75)  El l&aacute;ser, como fuente de luz, es:";
 choices[74]= new Array();
 choices[74][0] = "Un oscilador &oacute;ptico basado en la formaci&oacute;n de una onda electromagn&eacute;tica confinada dentro de una cavidad";
 choices[74][1] = "Un rayo luminoso compuesto de ondas de diversas frecuencias";
 choices[74][2] = "Un dispositivo &oacute;ptico con ganancia interna y voltaje de ruptura";
 choices[74][3] = "Un dispositivo utilizado para seleccionar los componentes de una se&ntilde;al de acuerdo con sus frecuencias";
 answers[74] = 0;
 units[74] = ['106'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4409. ";
 preguntaids[74] = 4409


