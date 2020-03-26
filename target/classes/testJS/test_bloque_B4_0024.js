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
//  Id pregunta: 7411 Año de creación de pregunta: 2010
 questions[0]= "1)  Entre las ventajas de la virtualizaci&oacute;n de hardware no se encuentra";
 choices[0]= new Array();
 choices[0][0] = "La reducci&oacute;n de costes de administraci&oacute;n";
 choices[0][1] = "La eficiencia energ&eacute;tica";
 choices[0][2] = "El incremento de rendimiento de las aplicaciones";
 choices[0][3] = "Mayor aprovechamiento de los servidores";
 answers[0] = 2;
 units[0] = ['124'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7411. ";
 preguntaids[0] = 7411


//  Id pregunta: 7391 Año de creación de pregunta: 2010
 questions[1]= "2)  El protocolo UDP:";
 choices[1]= new Array();
 choices[1][0] = "Es orientado a conexi&oacute;n";
 choices[1][1] = "Genera un flujo unidireccional";
 choices[1][2] = "Realiza el control de redundancia c&iacute;clica (CRC) de los datos";
 choices[1][3] = "Emplea, al comenzar una comunicaci&oacute;n, el mecanismo denominado Three-Weay Hand Shaking";
 answers[1] = 1;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7391. Examen TIC B 2009";
 preguntaids[1] = 7391


//  Id pregunta: 7275 Año de creación de pregunta: 2010
 questions[2]= "3)  HSDPA introduce, respecto de UMTS, las siguientes mejoras:";
 choices[2]= new Array();
 choices[2][0] = "Tasas cercanas 200 Gbps";
 choices[2][1] = "Nueva portadora de 584 kbps";
 choices[2][2] = "Reducci&oacute;n del tiempo de latencia";
 choices[2][3] = "M&aacute;ximo de 10 GB de tr&aacute;fico al mes para el usuario";
 answers[2] = 2;
 units[2] = ['117'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 7275. ";
 preguntaids[2] = 7275


//  Id pregunta: 7414 Año de creación de pregunta: 2010
 questions[3]= "4)  Virtuozzo es un software para virutalizaci&oacute;n de";
 choices[3]= new Array();
 choices[3][0] = "Hardware";
 choices[3][1] = "Red";
 choices[3][2] = "Sistema operativo";
 choices[3][3] = "Escritorio";
 answers[3] = 2;
 units[3] = ['124'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 7414. ";
 preguntaids[3] = 7414


//  Id pregunta: 7401 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xSDL?";
 choices[4]= new Array();
 choices[4][0] = "HDSL";
 choices[4][1] = "VDSL";
 choices[4][2] = "ADSL";
 choices[4][3] = "EDSL";
 answers[4] = 3;
 units[4] = ['108'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 7401. Examen TIC B 2009";
 preguntaids[4] = 7401


//  Id pregunta: 7410 Año de creación de pregunta: 2010
 questions[5]= "6)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[5]= new Array();
 choices[5][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[5][1] = "Paravirtualizaci&oacute;n";
 choices[5][2] = "Virtualizaci&oacute;n de datos";
 choices[5][3] = "Virtualizaci&oacute;n de red";
 answers[5] = 2;
 units[5] = ['124'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7410. ";
 preguntaids[5] = 7410


//  Id pregunta: 7531 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[6]= new Array();
 choices[6][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX o SOH al comienzo de la trama y un car&aacute;cter ETX o ETB al final de la trama.";
 choices[6][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control.";
 choices[6][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack.";
 choices[6][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras.";
 answers[6] = 2;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7531. Map 2005";
 preguntaids[6] = 7531


//  Id pregunta: 7412 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las m&aacute;quinas virtuales con respecto al hardware f&iacute;sico?";
 choices[7]= new Array();
 choices[7][0] = "Aislamiento";
 choices[7][1] = "Independencia  del software";
 choices[7][2] = "Encapsulamiento";
 choices[7][3] = "Compatibilidad";
 answers[7] = 1;
 units[7] = ['124'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7412. ";
 preguntaids[7] = 7412


//  Id pregunta: 7397 Año de creación de pregunta: 2010
 questions[8]= "9)  En un servidor DNS, un registro MX hace referencia a:";
 choices[8]= new Array();
 choices[8][0] = "Un servidor web";
 choices[8][1] = "Un servidor de correo";
 choices[8][2] = "Un servidor seguro";
 choices[8][3] = "El servidor DNS principal";
 answers[8] = 1;
 units[8] = ['116'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7397. Examen TIC B 2009";
 preguntaids[8] = 7397


//  Id pregunta: 7392 Año de creación de pregunta: 2010
 questions[9]= "10)  MPLS (Multiprotocol Label Switching) opera:";
 choices[9]= new Array();
 choices[9][0] = "Sobre el protocolo IP, y por debajo del protocolo TCP";
 choices[9][1] = "Entre la capa de enlace de datos y la capa de red del modelo OSI";
 choices[9][2] = "Entre el protocolo TCP y los protocolos del nivel de Aplicaci&oacute;n";
 choices[9][3] = "Entre la capa del nivel de red y la capa de transporte del modelo TCP/IP";
 answers[9] = 1;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7392. Examen TIC B 2009";
 preguntaids[9] = 7392


//  Id pregunta: 7284 Año de creación de pregunta: 2010
 questions[10]= "11)  La telefon&iacute;a IP";
 choices[10]= new Array();
 choices[10][0] = "Combina datos, voz y video en un &uacute;nico paquete";
 choices[10][1] = "Separa la red de datos de la voz";
 choices[10][2] = "Los procesos utilizados no dependen del tiempo";
 choices[10][3] = "A y C son correctas";
 answers[10] = 0;
 units[10] = ['122'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7284. ";
 preguntaids[10] = 7284


//  Id pregunta: 7386 Año de creación de pregunta: 2010
 questions[11]= "12)  En el protocolo IPv6, las direcciones constan de:";
 choices[11]= new Array();
 choices[11][0] = "6 bytes";
 choices[11][1] = "8 bytes";
 choices[11][2] = "16 bytes";
 choices[11][3] = "32 bytes";
 answers[11] = 2;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 7386. Examen TIC B 2009";
 preguntaids[11] = 7386


//  Id pregunta: 7440 Año de creación de pregunta: 2010
 questions[12]= "13)  La Entidad P&uacute;blica Empresarial responsable de la gesti&oacute;n del Registro de nombres de dominio de Internet bajo el c&oacute;digo de pa&iacute;s .es se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Oepm.es";
 choices[12][1] = "Red.es";
 choices[12][2] = "Funciona.es";
 choices[12][3] = "060.es";
 answers[12] = 1;
 units[12] = ['103'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 7440. ";
 preguntaids[12] = 7440


//  Id pregunta: 7505 Año de creación de pregunta: 2010
 questions[13]= "14)  En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "El campo SYN del primer segmento TCP es igual a 0.";
 choices[13][1] = "El campo SYN del primer segmento TCP es igual a 1.";
 choices[13][2] = "El campo RST del primer segmento TCP es igual a 1.";
 choices[13][3] = "El campo PSH del primer segmento TCP es igual a 1.";
 answers[13] = 1;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7505. Map 2005";
 preguntaids[13] = 7505


//  Id pregunta: 7396 Año de creación de pregunta: 2010
 questions[14]= "15)  El dispositivo necesario para modular la se&ntilde;al de acceso a las redes de cable TV se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Cablemodem";
 choices[14][1] = "HBA (Host Bus Adapter)";
 choices[14][2] = "Splitter";
 choices[14][3] = "HDMI (High-Definition Multi-media interface)";
 answers[14] = 0;
 units[14] = ['115'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 7396. Examen TIC B 2009";
 preguntaids[14] = 7396


//  Id pregunta: 7400 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l es el est&aacute;ndar WIMAX que permite movilidad conocido como: WIMAX m&oacute;vil?";
 choices[15]= new Array();
 choices[15][0] = "802.16d";
 choices[15][1] = "802.16";
 choices[15][2] = "802.16h";
 choices[15][3] = "802.16e";
 answers[15] = 3;
 units[15] = ['108'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7400. Examen TIC B 2009";
 preguntaids[15] = 7400


//  Id pregunta: 7383 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;A qu&eacute; se corresponde el RFC 793?";
 choices[16]= new Array();
 choices[16][0] = "Al protocolo FTP";
 choices[16][1] = "Al protocolo HTTP";
 choices[16][2] = "Al protocolo TCP";
 choices[16][3] = "Al protocolo IP";
 answers[16] = 2;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7383. Examen TIC B 2009";
 preguntaids[16] = 7383


//  Id pregunta: 7426 Año de creación de pregunta: 2010
 questions[17]= "18)  La recomendaci&oacute;n de la UIT H.323";
 choices[17]= new Array();
 choices[17][0] = "Se utiliza &uacute;nicamente en redes RDSI";
 choices[17][1] = "Permite audioconferencia pero no videoconferencia";
 choices[17][2] = "Se le puede a&ntilde;adir seguridad seg&uacute;n la recomendaci&oacute;n de la UIT H.325";
 choices[17][3] = "Fue definida para redes de conmutaci&oacute;n de circuitos";
 answers[17] = 2;
 units[17] = ['122'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 7426. Examen TIC B 2009";
 preguntaids[17] = 7426


//  Id pregunta: 7256 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;C&oacute;mo se utiliza un protocolo reto/respuesta con una implementaci&oacute;n con un dispositivo de tokens?";
 choices[18]= new Array();
 choices[18][0] = "Este protocolo no se usa, se usa la criptograf&iacute;a";
 choices[18][1] = "El servicio de autenticaci&oacute;n genera un reto y el dispositivo inteligente genera una respuesta basado en el reto";
 choices[18][2] = "El dispositivo pide el usuario y la contrase&ntilde;a";
 choices[18][3] = "El dispositivo compara la contrase&ntilde;a del usuario contra una base de datos de credenciales";
 answers[18] = 1;
 units[18] = ['119'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 7256. ";
 preguntaids[18] = 7256


//  Id pregunta: 7407 Año de creación de pregunta: 2010
 questions[19]= "20)  Los cortafuegos de filtrado de paquetes:";
 choices[19]= new Array();
 choices[19][0] = "Funcionan a nivel de red";
 choices[19][1] = "Funcionan a a nivel de aplicaci&oacute;n";
 choices[19][2] = "Funcionan a nivel de enlace";
 choices[19][3] = "Funcionan a nivel de sesi&oacute;n";
 answers[19] = 0;
 units[19] = ['119'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 7407. Examen TIC B 2009";
 preguntaids[19] = 7407


//  Id pregunta: 7419 Año de creación de pregunta: 2010
 questions[20]= "21)  Generalmente el primer paso en un proceso de virtualizaci&oacute;n de infraestructuras TIC en una Organizaci&oacute;n suele ser un proyecto de:";
 choices[20]= new Array();
 choices[20][0] = "Consolidaci&oacute;n de servidores";
 choices[20][1] = "Virtualizaci&oacute;n de salvaguardas";
 choices[20][2] = "SaaS (Storage as a Service)";
 choices[20][3] = "Computing Mobility";
 answers[20] = 0;
 units[20] = ['124'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7419. Examen TIC B 2009";
 preguntaids[20] = 7419


//  Id pregunta: 7384 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Qu&eacute; valor tiene el primer n&uacute;mero de una red de clase C en internet?";
 choices[21]= new Array();
 choices[21][0] = "Menor o igual que 127";
 choices[21][1] = "Entre 192 y 223";
 choices[21][2] = "Mayor o igual que 224";
 choices[21][3] = "Entre 128 y 191";
 answers[21] = 1;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 7384. Examen TIC B 2009";
 preguntaids[21] = 7384


//  Id pregunta: 7398 Año de creación de pregunta: 2010
 questions[22]= "23)  La diferencia entre los protocolos POP  e IMAP es que:";
 choices[22]= new Array();
 choices[22][0] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de recepci&oacute;n";
 choices[22][1] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de env&iacute;o y recepci&oacute;n";
 choices[22][2] = "Uno establece una comunicaci&oacute;n bidireccional y el otro no";
 choices[22][3] = "La capa de ubicaci&oacute;n de cada uno de ellos en el modelo TCP/IP es distinta";
 answers[22] = 2;
 units[22] = ['116'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7398. Examen TIC B 2009";
 preguntaids[22] = 7398


//  Id pregunta: 7413 Año de creación de pregunta: 2010
 questions[23]= "24)  La t&eacute;cnica que utiliza la paravirtualizaci&oacute;n se denomina";
 choices[23]= new Array();
 choices[23][0] = "Ringing up";
 choices[23][1] = "Ring deprivileging";
 choices[23][2] = "Privileging";
 choices[23][3] = "Hypervisor";
 answers[23] = 1;
 units[23] = ['124'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7413. ";
 preguntaids[23] = 7413


//  Id pregunta: 7282 Año de creación de pregunta: 2010
 questions[24]= "25)  Podemos definir ARP poisoning como";
 choices[24]= new Array();
 choices[24][0] = "Alteraci&oacute;n de la tabla ARP para que una direcci&oacute;n IP se corresponda con una MAC distinta a la que ten&iacute;a";
 choices[24][1] = "Con este ataque no se puede redirigir el tr&aacute;fico al ordenador del atacante";
 choices[24][2] = "A y B son correctas";
 choices[24][3] = "A y B son incorrectas";
 answers[24] = 0;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7282. ";
 preguntaids[24] = 7282


//  Id pregunta: 7514 Año de creación de pregunta: 2010
 questions[25]= "26)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE:";
 choices[25]= new Array();
 choices[25][0] = "802.9.";
 choices[25][1] = "802.10.";
 choices[25][2] = "802.11.";
 choices[25][3] = "802.12.";
 answers[25] = 0;
 units[25] = ['110'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 7514. Map 2005";
 preguntaids[25] = 7514


//  Id pregunta: 7280 Año de creación de pregunta: 2010
 questions[26]= "27)  De las siguientes afirmaciones, &iquest;cu&aacute;l es la correcta?";
 choices[26]= new Array();
 choices[26][0] = "ARP y RARP son unos protocolos de facto para transmitir datos a trav&eacute;s de Internet";
 choices[26][1] = "ARP traduce la direcci&oacute;n IP a su correspondiente direcci&oacute;n MAC";
 choices[26][2] = "ICMP traduce la direcci&oacute;n MAC a su correspondiente direcci&oacute;n IP";
 choices[26][3] = "Todas las respuestas anteriores son correctas";
 answers[26] = 1;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 7280. ";
 preguntaids[26] = 7280


//  Id pregunta: 7272 Año de creación de pregunta: 2010
 questions[27]= "28)  GPRS no se caracteriza por";
 choices[27]= new Array();
 choices[27][0] = "Servicio simult&aacute;neo de voz y datos";
 choices[27][1] = "No existe multiplexaci&oacute;n de voz y datos";
 choices[27][2] = "Servicio no orientado a conexi&oacute;n";
 choices[27][3] = "Tarificaci&oacute;n por volumen de datos intercambiado";
 answers[27] = 1;
 units[27] = ['117'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 7272. ";
 preguntaids[27] = 7272


//  Id pregunta: 7385 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 220.8.7.0/28, sin considerar las direcciones de subred y de broadcast?";
 choices[28]= new Array();
 choices[28][0] = "256";
 choices[28][1] = "254";
 choices[28][2] = "14";
 choices[28][3] = "28";
 answers[28] = 2;
 units[28] = ['109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7385. Examen TIC B 2009";
 preguntaids[28] = 7385


//  Id pregunta: 7274 Año de creación de pregunta: 2010
 questions[29]= "30)  UMTS";
 choices[29]= new Array();
 choices[29][0] = "Reutiliza el subsistema de red de GSM";
 choices[29][1] = "Reutiliza el subsistema de red de GPRS";
 choices[29][2] = "El sistema de acceso radio es nuevo";
 choices[29][3] = "Todas las respuestas anteriores son ciertas";
 answers[29] = 3;
 units[29] = ['117'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7274. ";
 preguntaids[29] = 7274


//  Id pregunta: 7423 Año de creación de pregunta: 2010
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[30]= new Array();
 choices[30][0] = "Sindicaci&oacute;n de contenidos";
 choices[30][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[30][2] = "P&aacute;ginas personales";
 choices[30][3] = "Directorios (taxonom&iacute;as)";
 answers[30] = 0;
 units[30] = ['124'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7423. Examen TIC B 2009";
 preguntaids[30] = 7423


//  Id pregunta: 7258 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[31]= new Array();
 choices[31][0] = "Algo que alguien sabe";
 choices[31][1] = "Algo que alguien es";
 choices[31][2] = "Algo que alguien tiene";
 choices[31][3] = "Lo que una persona sabe y es";
 answers[31] = 3;
 units[31] = ['119'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 7258. ";
 preguntaids[31] = 7258


//  Id pregunta: 7279 Año de creación de pregunta: 2010
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto al modelo OSI?";
 choices[32]= new Array();
 choices[32][0] = "La capa 5 establece, mantiene y cierra el di&aacute;logo entre dos aplicaciones. Controla la organizaci&oacute;n del di&aacute;logo y su sincronizaci&oacute;n";
 choices[32][1] = "La capa 4 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 choices[32][2] = "La capa 3 proporciona transmisiones extremo a extremo";
 choices[32][3] = "La capa 2 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 answers[32] = 0;
 units[32] = ['105'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7279. ";
 preguntaids[32] = 7279


//  Id pregunta: 7270 Año de creación de pregunta: 2010
 questions[33]= "34)  GSM no utiliza";
 choices[33]= new Array();
 choices[33][0] = "Esquema de protecci&oacute;n mediante salto RF";
 choices[33][1] = "Transmisi&oacute;n discontinua";
 choices[33][2] = "Transmisi&oacute;n continua";
 choices[33][3] = "Paging";
 answers[33] = 2;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7270. ";
 preguntaids[33] = 7270


//  Id pregunta: 7394 Año de creación de pregunta: 2010
 questions[34]= "35)  La funci&oacute;n de un hub es";
 choices[34]= new Array();
 choices[34][0] = "Reenviar los paquetes en funci&oacute;n de la direcci&oacute;n MAC de destino";
 choices[34][1] = "Repetir la informaci&oacute;n que llega a un puerto por el resto de puertos";
 choices[34][2] = "Dirigir correctamente tr&aacute;fico de una red a otra";
 choices[34][3] = "Asignar diferentes preferencias a los mensajes que fluyen por la red";
 answers[34] = 1;
 units[34] = ['102'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 7394. Examen TIC B 2009";
 preguntaids[34] = 7394


//  Id pregunta: 7268 Año de creación de pregunta: 2010
 questions[35]= "36)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[35]= new Array();
 choices[35][0] = "Tecnolog&iacute;a HSDPA";
 choices[35][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[35][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[35][3] = "Todas las respuestas anteriores son correctas";
 answers[35] = 3;
 units[35] = ['117'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7268. ";
 preguntaids[35] = 7268


//  Id pregunta: 7424 Año de creación de pregunta: 2010
 questions[36]= "37)  Las redes de pr&oacute;xima generaci&oacute;n (NGN) son seg&uacute;n la UIT (uni&oacute;n internacional de telecomunicaciones):";
 choices[36]= new Array();
 choices[36][0] = "Las redes que engloban las nuevas tecnolog&iacute;as inal&aacute;mbricas, tambi&eacute;n conocidas como redes de cuarta generaci&oacute;n (4G)";
 choices[36][1] = "Las redes que ser&aacute;n desplegadas para la generaci&oacute;n del siglo XXI, las cuales garantizar&aacute;n una cobertura real del 100%";
 choices[36][2] = "Las redes de los pr&oacute;ximos a&ntilde;os, basadas en el protocolo Internet IP y que ser&aacute;n utilizadas para todo tipo de servicios";
 choices[36][3] = "Las futuras redes basadas en conmutaci&oacute;n de circuitos, que proporcionar&aacute;n una calidad de servicio superior y permitir&aacute;n comunicaciones de voz y datos a altas velocidades";
 answers[36] = 2;
 units[36] = ['110'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7424. Examen TIC B 2009";
 preguntaids[36] = 7424


//  Id pregunta: 7255 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Qu&eacute; pol&iacute;tica de control aplica cuando la infraestructura usa un modelo no discrecional?";
 choices[37]= new Array();
 choices[37][0] = "Basado en reglas";
 choices[37][1] = "Basado en roles";
 choices[37][2] = "Basado en identidades";
 choices[37][3] = "MAC";
 answers[37] = 1;
 units[37] = ['119'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7255. ";
 preguntaids[37] = 7255


//  Id pregunta: 7425 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service):";
 choices[38]= new Array();
 choices[38][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP y el puerto 1813";
 choices[38][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[38][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[38][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[38] = 0;
 units[38] = ['119'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 7425. Examen TIC B 2009";
 preguntaids[38] = 7425


//  Id pregunta: 7422 Año de creación de pregunta: 2010
 questions[39]= "40)  La t&eacute;cnica de  virtualizaci&oacute;n de infraestructura TIC denominada paravirtualizaci&oacute;n, pone &eacute;nfasis (comparado con la virtualizaci&oacute;n normal) en:";
 choices[39]= new Array();
 choices[39][0] = "Compatibilidad e interoperabilidad";
 choices[39][1] = "Rendimiento";
 choices[39][2] = "Costes";
 choices[39][3] = "Inteligencia artificial";
 answers[39] = 1;
 units[39] = ['124'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 7422. Examen TIC B 2009";
 preguntaids[39] = 7422


//  Id pregunta: 7388 Año de creación de pregunta: 2010
 questions[40]= "41)  La direcci&oacute;n IPv4 172.30.120.135/12 es una direcci&oacute;n de tipo:";
 choices[40]= new Array();
 choices[40][0] = "Direcci&oacute;n de red broadcast";
 choices[40][1] = "Direcci&oacute;n de red privada";
 choices[40][2] = "Direcci&oacute;n de red de enlace local";
 choices[40][3] = "Direcci&oacute;n de red p&uacute;blica";
 answers[40] = 1;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7388. Examen TIC B 2009";
 preguntaids[40] = 7388


//  Id pregunta: 7399 Año de creación de pregunta: 2010
 questions[41]= "42)  El sistema bluetooth posee las siguientes caracter&iacute;sticas. Se&ntilde;ale cu&aacute;l es la INCORRECTA";
 choices[41]= new Array();
 choices[41][0] = "Funciona en la banda de frecuencias ISM (2,45 GHz)";
 choices[41][1] = "Se corresponde con el est&aacute;ndar IEEE 802.15";
 choices[41][2] = "La topolog&iacute;a de las redes Bluetooth se conoce como micronet o microrred";
 choices[41][3] = "Bluetooth v2.0 permite alcanzar velocidades de hasta 3 Mbps";
 answers[41] = 2;
 units[41] = ['108'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7399. Examen TIC B 2009";
 preguntaids[41] = 7399


//  Id pregunta: 7285 Año de creación de pregunta: 2010
 questions[42]= "43)  El protocolo IP";
 choices[42]= new Array();
 choices[42][0] = "Define el datagrama";
 choices[42][1] = "Define el esquema de direccionamiento";
 choices[42][2] = "Se corresponde aproximadamente con la capa 3 dentro del modelo OSI";
 choices[42][3] = "Todas las respuestas anteriores son correctas";
 answers[42] = 3;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7285. ";
 preguntaids[42] = 7285


//  Id pregunta: 7389 Año de creación de pregunta: 2010
 questions[43]= "44)  El protocolo FTP es un protocolo:";
 choices[43]= new Array();
 choices[43][0] = "Seguro";
 choices[43][1] = "No orientado a conexi&oacute;n";
 choices[43][2] = "De nivel de aplicaci&oacute;n";
 choices[43][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[43] = 2;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 7389. Examen TIC B 2009";
 preguntaids[43] = 7389


//  Id pregunta: 7283 Año de creación de pregunta: 2010
 questions[44]= "45)  El filtrado de paquetes no proporciona";
 choices[44]= new Array();
 choices[44][0] = "Bajo nivel de seguridad";
 choices[44][1] = "Protecci&oacute;n sobre la capa de red";
 choices[44][2] = "Alto rendimiento y escalabilidad";
 choices[44][3] = "Todas las respuestas anteriores son correctas";
 answers[44] = 1;
 units[44] = ['111'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 7283. ";
 preguntaids[44] = 7283


//  Id pregunta: 7421 Año de creación de pregunta: 2010
 questions[45]= "46)  Una de las grandes ventajas que aporta la virtualizaci&oacute;n de infraestructuras en un centro de datos es:";
 choices[45]= new Array();
 choices[45][0] = "Reducci&oacute;n de personal de operaciones";
 choices[45][1] = "Reducci&oacute;n de costes de mantenimiento preventivo";
 choices[45][2] = "Gesti&oacute;n del ciclo de vida de la informaci&oacute;n (ILM) m&aacute;s eficaz";
 choices[45][3] = "Gesti&oacute;n agrupada (pooled) de recursos a lo largo de toda la Organizaci&oacute;n";
 answers[45] = 3;
 units[45] = ['124'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 7421. Examen TIC B 2009";
 preguntaids[45] = 7421


//  Id pregunta: 7259 Año de creación de pregunta: 2010
 questions[46]= "47)  Revisar los logs de seguridad es un tipo de seguridad";
 choices[46]= new Array();
 choices[46][0] = "Preventiva";
 choices[46][1] = "De detecci&oacute;n";
 choices[46][2] = "Disuasoria";
 choices[46][3] = "Correctiva";
 answers[46] = 1;
 units[46] = ['119'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7259. ";
 preguntaids[46] = 7259


//  Id pregunta: 7390 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes opciones representa la m&aacute;scara 255.255.240.0?";
 choices[47]= new Array();
 choices[47][0] = "/20";
 choices[47][1] = "/22";
 choices[47][2] = "/24";
 choices[47][3] = "/240";
 answers[47] = 0;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 7390. Examen TIC B 2009";
 preguntaids[47] = 7390


//  Id pregunta: 7417 Año de creación de pregunta: 2010
 questions[48]= "49)  En un entorno de virtualizaci&oacute;n de m&aacute;quinas, &iquest;cu&aacute;l de los siguientes elementos est&aacute; m&aacute;s pr&oacute;ximo al hardware?";
 choices[48]= new Array();
 choices[48][0] = "Hipervisor";
 choices[48][1] = "VMM (Virtual Machine Monitor)";
 choices[48][2] = "Sistema operativo hospedado";
 choices[48][3] = "HBA (host Bus Adapter)";
 answers[48] = 0;
 units[48] = ['124'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7417. Examen TIC B 2009";
 preguntaids[48] = 7417


//  Id pregunta: 7402 Año de creación de pregunta: 2010
 questions[49]= "50)  Existen diferencias entre ADSL2 y ADSL2+. Se&ntilde;ale la INCORRECTA:";
 choices[49]= new Array();
 choices[49][0] = "La velocidad m&aacute;xima. ADSL2+ alcanza mayores velocidades";
 choices[49][1] = "El ancho de banda. ADSL2+ ocupa mayor ancho de banda";
 choices[49][2] = "La infraestructura necesaria. ADSL2+ requiere una instalaci&oacute;n m&aacute;s compleja que ADSL2 para proporcionar la transici&oacute;n desde ADSL";
 choices[49][3] = "El n&uacute;mero de pares de cobre entrelazados. ADSL2+ requiere el doble de pares de cobre entrelazados";
 answers[49] = 3;
 units[49] = ['108'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 7402. Examen TIC B 2009";
 preguntaids[49] = 7402


//  Id pregunta: 7406 Año de creación de pregunta: 2010
 questions[50]= "51)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[50]= new Array();
 choices[50][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[50][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[50][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[50][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[50] = 3;
 units[50] = ['120'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7406. Examen TIC B 2009";
 preguntaids[50] = 7406


//  Id pregunta: 7495 Año de creación de pregunta: 2010
 questions[51]= "52)  La direcci&oacute;n de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP  100.254.254.254, es:";
 choices[51]= new Array();
 choices[51][0] = "100.255.255.255.";
 choices[51][1] = "0.0.0.255.";
 choices[51][2] = "100.0.0.0.";
 choices[51][3] = "100.254.254.255.";
 answers[51] = 0;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7495. Map 2005";
 preguntaids[51] = 7495


//  Id pregunta: 7257 Año de creación de pregunta: 2010
 questions[52]= "53)  &iquest;Qu&eacute; m&eacute;todo de control de acceso est&aacute; dirigida al usuario?";
 choices[52]= new Array();
 choices[52][0] = "No discrecional";
 choices[52][1] = "MAC";
 choices[52][2] = "Basado en identidades";
 choices[52][3] = "DAC";
 answers[52] = 3;
 units[52] = ['119'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 7257. ";
 preguntaids[52] = 7257


//  Id pregunta: 7269 Año de creación de pregunta: 2010
 questions[53]= "54)  GSM se caracteriza por";
 choices[53]= new Array();
 choices[53][0] = "Enlace ascendente 880-905 MHz";
 choices[53][1] = "Enlace ascendente 890-915 MHz";
 choices[53][2] = "Enlace descendente 890-915 MHz";
 choices[53][3] = "Todas las respuestas anteriores son incorrectos";
 answers[53] = 1;
 units[53] = ['117'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7269. ";
 preguntaids[53] = 7269


//  Id pregunta: 7281 Año de creación de pregunta: 2010
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[54]= new Array();
 choices[54][0] = "ICMP trabaja en la capa de enlace";
 choices[54][1] = "ICMP informa a los hosts, routers y otros dispositivos de problemas en la red";
 choices[54][2] = "ICMP es el principal componente de la utilidad ping";
 choices[54][3] = "Todas las respuestas anteriores son correctas";
 answers[54] = 0;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 7281. ";
 preguntaids[54] = 7281


//  Id pregunta: 7522 Año de creación de pregunta: 2010
 questions[55]= "56)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera seg&uacute;n el modelo OSI en el nivel de:";
 choices[55]= new Array();
 choices[55][0] = "Transporte.";
 choices[55][1] = "Red.";
 choices[55][2] = "F&iacute;sico.";
 choices[55][3] = "Enlace.";
 answers[55] = 1;
 units[55] = ['105'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7522. Map 2005";
 preguntaids[55] = 7522


//  Id pregunta: 7418 Año de creación de pregunta: 2010
 questions[56]= "57)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[56]= new Array();
 choices[56][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[56][1] = "Acoplada y mediante hipervisor (bare metal)";
 choices[56][2] = "Paralela y mediante hipervisor (bare metal)";
 choices[56][3] = "Acoplada y mediante CPM (Cross Platform Manager)";
 answers[56] = 0;
 units[56] = ['124'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 7418. Examen TIC B 2009";
 preguntaids[56] = 7418


//  Id pregunta: 7286 Año de creación de pregunta: 2010
 questions[57]= "58)  IPv6";
 choices[57]= new Array();
 choices[57][0] = "Proporciona un formato de cabecera m&aacute;s complejo";
 choices[57][1] = "Proporciona la posibilidad de a&ntilde;adir extensiones pero no opciones";
 choices[57][2] = "A&ntilde;ade posibilidades para gestionar la calidad de servicios";
 choices[57][3] = "Todas las respuestas anteriores son correctas";
 answers[57] = 2;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7286. ";
 preguntaids[57] = 7286


//  Id pregunta: 7415 Año de creación de pregunta: 2010
 questions[58]= "59)  VMWare es un software de virtualiaci&oacute;n de";
 choices[58]= new Array();
 choices[58][0] = "Sistema operativo";
 choices[58][1] = "Red";
 choices[58][2] = "Paravirtualizaci&oacute;n";
 choices[58][3] = "Hardware";
 answers[58] = 3;
 units[58] = ['124'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7415. ";
 preguntaids[58] = 7415


//  Id pregunta: 7532 Año de creación de pregunta: 2010
 questions[59]= "60)  Las SDU (Service Data Unit) son unidades de datos:";
 choices[59]= new Array();
 choices[59][0] = "Que se intercambian entre entidades hom&oacute;logas.";
 choices[59][1] = "Que proporcionan informaci&oacute;n de control entre niveles.";
 choices[59][2] = "Correspondientes a las primitivas de comunicaci&oacute;n.";
 choices[59][3] = "Que deben ser tratados por el nivel superior N+1 de forma transparente.";
 answers[59] = 3;
 units[59] = ['102'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 7532. Map 2005";
 preguntaids[59] = 7532


//  Id pregunta: 7271 Año de creación de pregunta: 2010
 questions[60]= "61)  GPRS no se caracteriza por";
 choices[60]= new Array();
 choices[60][0] = "Los paquetes se envian a intervalos de tiempo irregulares";
 choices[60][1] = "El nodo GGSN es el nodo pasarela que realiza la interfaz con las redes de datos externas";
 choices[60][2] = "No requiere gesti&oacute;n de movilidad";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = 2;
 units[60] = ['117'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7271. ";
 preguntaids[60] = 7271


//  Id pregunta: 7387 Año de creación de pregunta: 2010
 questions[61]= "62)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[61]= new Array();
 choices[61][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[61][1] = "Tiempo de vida (8 bits)";
 choices[61][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[61][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[61] = 3;
 units[61] = ['108'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 7387. Examen TIC B 2009";
 preguntaids[61] = 7387


//  Id pregunta: 7405 Año de creación de pregunta: 2010
 questions[62]= "63)  Un programa que se aloja en el ordenador y permite el acceso a usuarios externos, con el fin de obtener informaci&oacute;n o controlar la m&aacute;quina de forma remota, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Bot";
 choices[62][1] = "Virus";
 choices[62][2] = "Troyano";
 choices[62][3] = "Gusano";
 answers[62] = 2;
 units[62] = ['120'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7405. Examen TIC B 2009";
 preguntaids[62] = 7405


//  Id pregunta: 7408 Año de creación de pregunta: 2010
 questions[63]= "64)  Una conexi&oacute;n FTP puede funcionar en modo activo o pasivo. Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "El modo pasivo sirve, para que una vez iniciada una transferencia de archivos, poder iniciar otra transferencia sin tener que esperar a la finalizaci&oacute;n de la primera";
 choices[63][1] = "El modo pasivo es muy recomendable cuando el cliente tiene una conexi&oacute;n con cortafuegos, ya que en esta modalidad, tanto el canal de control como el canal de datos los abre el cliente";
 choices[63][2] = "En el modo pasivo se fuerza que, tanto el cliente como el servidor usen los puertos 20 y 21 para el env&iacute;o de los datos y la informaci&oacute;n de control rec&iacute;procamente y evitar problemas con los cortafuegos";
 choices[63][3] = "El modo pasivo, facilita que tanto la informaci&oacute;n de control como la de datos se transmita por el mismo puerto (el 21 en el servidor y cualquier puerto en el cliente)";
 answers[63] = 1;
 units[63] = ['103'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 7408. Examen TIC B 2009";
 preguntaids[63] = 7408


//  Id pregunta: 7513 Año de creación de pregunta: 2010
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece a la capa de aplicaci&oacute;n?";
 choices[64]= new Array();
 choices[64][0] = "NFS.";
 choices[64][1] = "SMTP.";
 choices[64][2] = "RPC.";
 choices[64][3] = "UDP.";
 answers[64] = 3;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 7513. Map 2005";
 preguntaids[64] = 7513


//  Id pregunta: 7395 Año de creación de pregunta: 2010
 questions[65]= "66)  &iquest;Qu&eacute; dato es INCORRECTO relativo al dividendo digital espa&ntilde;ol?";
 choices[65]= new Array();
 choices[65][0] = "Consiste en las bandas de frecuencias que han sido empleadas para la difusi&oacute;n de la TDT";
 choices[65][1] = "Ocupa la banda de frecuencias de 790 a 862 MHz";
 choices[65][2] = "Se refiere a las frecuencias usadas para la difusi&oacute;n en anal&oacute;gico";
 choices[65][3] = "En el futuro, ser&aacute; utilizado para servicios diferentes al de la televisi&oacute;n";
 answers[65] = 2;
 units[65] = ['115'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7395. Examen TIC B 2009";
 preguntaids[65] = 7395


//  Id pregunta: 7420 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una de las tres condiciones de Popek y Godbergh que debe cumplir toda arquitectura inform&aacute;tica para soportar adecuadamente virtualizaci&oacute;n de sistemas?";
 choices[66]= new Array();
 choices[66][0] = "Eficiencia";
 choices[66][1] = "Control de Recursos";
 choices[66][2] = "Equivalencia";
 choices[66][3] = "Escalabilidad";
 answers[66] = 3;
 units[66] = ['124'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7420. Examen TIC B 2009";
 preguntaids[66] = 7420


//  Id pregunta: 7523 Año de creación de pregunta: 2010
 questions[67]= "68)  Especifique de las siguientes normas aquella que pertenezca al nivel f&iacute;sico del modelo OSI:";
 choices[67]= new Array();
 choices[67][0] = "X.214-ISO 8072.";
 choices[67][1] = "RS-449.";
 choices[67][2] = "X.215-ISO 8072.";
 choices[67][3] = "802.3.";
 answers[67] = 1;
 units[67] = ['105'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 7523. Map 2005";
 preguntaids[67] = 7523


//  Id pregunta: 7404 Año de creación de pregunta: 2010
 questions[68]= "69)  El acceso al medio utilizado por GSM (Global System Mobile) es acceso m&uacute;ltiple por divisi&oacute;n de:";
 choices[68]= new Array();
 choices[68][0] = "Frecuencia";
 choices[68][1] = "Tiempo";
 choices[68][2] = "Tiempo y frecuencia";
 choices[68][3] = "C&oacute;digo de banda ancha (WCDMA)";
 answers[68] = 2;
 units[68] = ['117'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 7404. Examen TIC B 2009";
 preguntaids[68] = 7404


//  Id pregunta: 7416 Año de creación de pregunta: 2010
 questions[69]= "70)  Una maqueta virtual se puede definir como";
 choices[69]= new Array();
 choices[69][0] = "Un programa inform&aacute;tico que simula el funcionamiento de un terminal de un ordenador central";
 choices[69][1] = "Un prototipo de aplicaci&oacute;n";
 choices[69][2] = "Un tipo de virtualizaci&oacute;n de servidor";
 choices[69][3] = "Un servidor de terminales";
 answers[69] = 0;
 units[69] = ['124'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7416. ";
 preguntaids[69] = 7416


//  Id pregunta: 7393 Año de creación de pregunta: 2010
 questions[70]= "71)  Seg&uacute;n la RFC 2373 correpondiente a la arquitectura de direccionamiento para IPv6. El prefijo que es usado para direcciones multidifusi&oacute;n (multicast) es";
 choices[70]= new Array();
 choices[70][0] = "3F";
 choices[70][1] = "FE";
 choices[70][2] = "FC";
 choices[70][3] = "FF";
 answers[70] = 3;
 units[70] = ['109'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 7393. Examen TIC B 2009";
 preguntaids[70] = 7393


//  Id pregunta: 7403 Año de creación de pregunta: 2010
 questions[71]= "72)  En telefon&iacute;a m&oacute;vil, la tecnolog&iacute;a GSM utiliza las siguientes bases de datos de usuarios";
 choices[71]= new Array();
 choices[71][0] = "HLR y VLR";
 choices[71][1] = "VLR y MSC";
 choices[71][2] = "NMC y OMC";
 choices[71][3] = "AUC y NMC";
 answers[71] = 0;
 units[71] = ['117'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 7403. Examen TIC B 2009";
 preguntaids[71] = 7403


//  Id pregunta: 7267 Año de creación de pregunta: 2010
 questions[72]= "73)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[72]= new Array();
 choices[72][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[72][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[72][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[72][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[72] = 0;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7267. ";
 preguntaids[72] = 7267


//  Id pregunta: 7273 Año de creación de pregunta: 2010
 questions[73]= "74)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[73]= new Array();
 choices[73][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[73][1] = "La capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[73][2] = "El esquema de codificaci&oacute;n";
 choices[73][3] = "Todas las respuestas anteriores son ciertas";
 answers[73] = 3;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7273. ";
 preguntaids[73] = 7273


//  Id pregunta: 7382 Año de creación de pregunta: 2010
 questions[74]= "75)  Cu&aacute;les de las siguientes afirmaciones es INCORRECTA sobre la fibra &oacute;ptica:";
 choices[74]= new Array();
 choices[74][0] = "No es posible acceder a los datos transmitidos por m&eacute;todos no destructivos";
 choices[74][1] = "Puede transmitir electricidad para alimentar repetidores intermedios";
 choices[74][2] = "Es inmune a las interferencias electromagn&eacute;ticas";
 choices[74][3] = "Las fibras son fr&aacute;giles y sus empalmes son dif&iacute;ciles";
 answers[74] = 1;
 units[74] = ['104'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 7382. Examen TIC B 2009";
 preguntaids[74] = 7382


