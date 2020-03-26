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
//  Id pregunta: 8845 Año de creación de pregunta: 2013
 questions[0]= "1)  En el modelo de referencia de ATM, &iquest;cu&aacute;ntos planos se especifican?";
 choices[0]= new Array();
 choices[0][0] = "Dos (usuario y se&ntilde;alizaci&oacute;n).";
 choices[0][1] = "Tres (usuario, control/se&ntilde;alizaci&oacute;n y administraci&oacute;n).";
 choices[0][2] = "Dos (datos estructurados y datos no estructurados).";
 choices[0][3] = "Tres (datos, voz y video).";
 answers[0] = 1;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8845. Examen TIC AGE A2 2011 libre";
 preguntaids[0] = 8845


//  Id pregunta: 8813 Año de creación de pregunta: 2013
 questions[1]= "2)  Resilient Packet Ring";
 choices[1]= new Array();
 choices[1][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[1][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[1][2] = "Es incompatible con Ethernet.";
 choices[1][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[1] = 3;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8813. ";
 preguntaids[1] = 8813


//  Id pregunta: 8778 Año de creación de pregunta: 2013
 questions[2]= "3)  Acerca de las ventanas de transmisi&oacute;n en las fibras &oacute;pticas, se puede afirmar:";
 choices[2]= new Array();
 choices[2][0] = "Son provocadas por la presencia del ion hidroxilo OH-";
 choices[2][1] = "La m&aacute;s amplia es la primera ventana, entre los 0,8 y 0,9 micras";
 choices[2][2] = "Alrededor de los 1550 nm existe una ventana de transmisi&oacute;n.";
 choices[2][3] = "La tercera ventana obliga a usar transmisiones monomodo";
 answers[2] = 2;
 units[2] = ['106'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8778. ";
 preguntaids[2] = 8778


//  Id pregunta: 8793 Año de creación de pregunta: 2013
 questions[3]= "4)  Acerca de RDSI y sus diferentes servicios:";
 choices[3]= new Array();
 choices[3][0] = "Los servicios portadores soportan la comunicaci&oacute;n terminal a terminal";
 choices[3][1] = "Los teleservicios proporcionan capacidades adicionales para los servicios suplementarios y los servicios portadores.";
 choices[3][2] = "Los servicios suplementarios soportan la comunicaci&oacute;n terminal a terminal y controlan los procesos de comunicaci&oacute;n entre usuarios.";
 choices[3][3] = "Los teleservicios soportan la comunicaci&oacute;n terminal a terminal";
 answers[3] = 3;
 units[3] = ['114'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8793. ";
 preguntaids[3] = 8793


//  Id pregunta: 8815 Año de creación de pregunta: 2013
 questions[4]= "5)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[4]= new Array();
 choices[4][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[4][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[4][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[4][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[4] = 0;
 units[4] = ['112'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8815. ";
 preguntaids[4] = 8815


//  Id pregunta: 8795 Año de creación de pregunta: 2013
 questions[5]= "6)  En RDSI, en el lado del operador:";
 choices[5]= new Array();
 choices[5][0] = "La Terminaci&oacute;n de Central se encarga de manejar el protocolo de enlace de datos.";
 choices[5][1] = "La Terminaci&oacute;n de L&iacute;nea se encarga de manejar el protocolo de enlace de datos.";
 choices[5][2] = "La Terminaci&oacute;n de Central est&aacute; entre la interfaz U y V.";
 choices[5][3] = "La Terminaci&oacute;n de L&iacute;nea est&aacute; entre la interfaz U y T.";
 answers[5] = 0;
 units[5] = ['114'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8795. ";
 preguntaids[5] = 8795


//  Id pregunta: 8831 Año de creación de pregunta: 2013
 questions[6]= "7)  Seg&uacute;n la UIT, dentro de la denominaci&oacute;n 4G, se pueden incluir las siguientes tecnolog&iacute;as:";
 choices[6]= new Array();
 choices[6][0] = "LTE";
 choices[6][1] = "WiMAX y LTE";
 choices[6][2] = "WiMAX";
 choices[6][3] = "LTE, WiMAX y HSPA+";
 answers[6] = 3;
 units[6] = ['117'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8831. ";
 preguntaids[6] = 8831


//  Id pregunta: 8505 Año de creación de pregunta: 2011
 questions[7]= "8)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[7]= new Array();
 choices[7][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[7][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[7][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[7][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[7] = 1;
 units[7] = ['103'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8505. Teleco Ayto. Madrid 2010";
 preguntaids[7] = 8505


//  Id pregunta: 8808 Año de creación de pregunta: 2013
 questions[8]= "9)  De entre los diferentes tipos de CSMA (Carrier Sense Multiple Access), se puede afirmar:";
 choices[8]= new Array();
 choices[8][0] = "En CSMA 1-persistente, si el medio est&aacute; libre, el emisor transmite, si no, espera un tiempo aleatorio.";
 choices[8][1] = "En CSMA p-Persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre.";
 choices[8][2] = "En CSMA no-persistente, si el emisor tiene el canal libre, transmite con probabilidad &quot;p&quot; y si detecta que existe alguien transmitiendo, espera un tiempo aleatorio con probabilidad &quot;q=(1-p)&quot;";
 choices[8][3] = "En CSMA 1-persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre";
 answers[8] = 3;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8808. ";
 preguntaids[8] = 8808


//  Id pregunta: 8507 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[9]= new Array();
 choices[9][0] = "Wowza Media Server";
 choices[9][1] = "Icecast";
 choices[9][2] = "Darwin Streaming Server";
 choices[9][3] = "FlowCast";
 answers[9] = 3;
 units[9] = ['103'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8507. Teleco Ayto. Madrid 2010";
 preguntaids[9] = 8507


//  Id pregunta: 8524 Año de creación de pregunta: 2011
 questions[10]= "11)  Cu&aacute;l es la afirmaci&oacute;n correcta sobre IEEE 802";
 choices[10]= new Array();
 choices[10][0] = "802.8 es el grupo asesor de banda ancha";
 choices[10][1] = "802.7 es el grupo asesor en fibras &oacute;pticas";
 choices[10][2] = "802.10 era el grupo asesor en seguridad";
 choices[10][3] = "802.3 trata sobre el control l&oacute;gico de enlace";
 answers[10] = 2;
 units[10] = ['108'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8524. ";
 preguntaids[10] = 8524


//  Id pregunta: 8618 Año de creación de pregunta: 2013
 questions[11]= "12)  De los siguientes sistemas, &iquest;cu&aacute;l no se refiere a un sistema de navegaci&oacute;n por sat&eacute;lite?";
 choices[11]= new Array();
 choices[11][0] = "Beidou";
 choices[11][1] = "COMPASS";
 choices[11][2] = "QZSS";
 choices[11][3] = "GNP";
 answers[11] = 3;
 units[11] = ['102'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8618. ";
 preguntaids[11] = 8618


//  Id pregunta: 8838 Año de creación de pregunta: 2013
 questions[12]= "13)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[12]= new Array();
 choices[12][0] = "Direcci&oacute;n IPv6 compatible con IPv4.";
 choices[12][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[12][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[12][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[12] = 2;
 units[12] = ['117', '109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8838. Examen TIC A1 2011";
 preguntaids[12] = 8838


//  Id pregunta: 8533 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Qu&eacute; categor&iacute;as de HSDPA pueden alcanzar 10 Mbits/s?";
 choices[13]= new Array();
 choices[13][0] = "9 y 10";
 choices[13][1] = "9";
 choices[13][2] = "10";
 choices[13][3] = "12";
 answers[13] = 0;
 units[13] = ['117'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8533. ";
 preguntaids[13] = 8533


//  Id pregunta: 8827 Año de creación de pregunta: 2013
 questions[14]= "15)  &iquest;De qu&eacute; est&aacute;ndar se estar&iacute;a hablando si se menciona una Interfaz aerea avanzada con velocidades de transmisi&oacute;n de 100 Mbps para dispositivos fijos y 1 Gbps para dispositivos m&oacute;viles?";
 choices[14]= new Array();
 choices[14][0] = "802.16e";
 choices[14][1] = "802.11-2012";
 choices[14][2] = "802.16m";
 choices[14][3] = "802.11ac";
 answers[14] = 2;
 units[14] = ['108'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8827. ";
 preguntaids[14] = 8827


//  Id pregunta: 8509 Año de creación de pregunta: 2011
 questions[15]= "16)  &iquest;Qu&eacute; tecnolog&iacute;a utiliza en exclusiva una modulacu&oacute;n DSSS?";
 choices[15]= new Array();
 choices[15][0] = "802.11a";
 choices[15][1] = "802.11b";
 choices[15][2] = "802.11g";
 choices[15][3] = "802.11n";
 answers[15] = 1;
 units[15] = ['108'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8509. ";
 preguntaids[15] = 8509


//  Id pregunta: 8534 Año de creación de pregunta: 2011
 questions[16]= "17)  Indica cu&aacute;l de los siguientes par&aacute;metros tiene en cuenta el algoritmo de adjudicaci&oacute;n de HSUPA.";
 choices[16]= new Array();
 choices[16][0] = "Ancho de banda disponible en cada estaci&oacute;n";
 choices[16][1] = "Consumo el&eacute;ctrico del Hardware";
 choices[16][2] = "Interferencia en el canal UPLOAD";
 choices[16][3] = "Todos los anteriores.";
 answers[16] = 3;
 units[16] = ['108'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8534. ";
 preguntaids[16] = 8534


//  Id pregunta: 8843 Año de creación de pregunta: 2013
 questions[17]= "18)  Las redes ATM emplean celdas de:";
 choices[17]= new Array();
 choices[17][0] = "Tama&ntilde;o variable: entre 5 e 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n";
 choices[17][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n";
 choices[17][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[17][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[17] = 1;
 units[17] = ['107'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8843. ";
 preguntaids[17] = 8843


//  Id pregunta: 8779 Año de creación de pregunta: 2013
 questions[18]= "19)  Respecto a la tecnologia de multiplexaci&oacute;n WDM:";
 choices[18]= new Array();
 choices[18][0] = "Dense WDM soporta menos canales que Coarse WDM y se usa en distancias m&aacute;s cortas.";
 choices[18][1] = "Coarse WDM utiliza luz muy direccional para aprovechar el bajo n&uacute;mero de canales";
 choices[18][2] = "Dense WDM y Coarse WDM son tecnolog&iacute;as no interoperables";
 choices[18][3] = "Coarse WDM alcanza distancias de 1000 km";
 answers[18] = 2;
 units[18] = ['106'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8779. ";
 preguntaids[18] = 8779


//  Id pregunta: 8801 Año de creación de pregunta: 2013
 questions[19]= "20)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[19]= new Array();
 choices[19][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[19][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[19][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[19][3] = "Ninguna de las respuestas es correcta.";
 answers[19] = 0;
 units[19] = ['114'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8801. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[19] = 8801


//  Id pregunta: 8811 Año de creación de pregunta: 2013
 questions[20]= "21)  Una red Ethernet que sigue la especificaci&oacute;n 10GBASE-ER:";
 choices[20]= new Array();
 choices[20][0] = "Funciona sobre par de cobre.";
 choices[20][1] = "Funciona con fibra &oacute;ptica que opera en primera ventana.";
 choices[20][2] = "Funciona con fibra &oacute;ptica que opera en tercera ventana.";
 choices[20][3] = "Utiliza fibra &oacute;ptica multimodo.";
 answers[20] = 2;
 units[20] = ['112'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8811. ";
 preguntaids[20] = 8811


//  Id pregunta: 8842 Año de creación de pregunta: 2013
 questions[21]= "22)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[21]= new Array();
 choices[21][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatic Repeat Request)";
 choices[21][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[21][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[21][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[21] = 3;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8842. ";
 preguntaids[21] = 8842


//  Id pregunta: 8834 Año de creación de pregunta: 2013
 questions[22]= "23)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[22]= new Array();
 choices[22][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[22][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP.";
 choices[22][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP.";
 choices[22][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[22] = 1;
 units[22] = ['117'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8834. ";
 preguntaids[22] = 8834


//  Id pregunta: 8799 Año de creación de pregunta: 2013
 questions[23]= "24)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso primario RDSI en Europa?";
 choices[23]= new Array();
 choices[23][0] = "1544 Kbps";
 choices[23][1] = "64 Kbps";
 choices[23][2] = "2048 Kbps";
 choices[23][3] = "1024 Kbps";
 answers[23] = 2;
 units[23] = ['114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8799. ";
 preguntaids[23] = 8799


//  Id pregunta: 8794 Año de creación de pregunta: 2013
 questions[24]= "25)  La red S-TESTA:";
 choices[24]= new Array();
 choices[24][0] = "Es accesible directamente desde cada Ministerio.";
 choices[24][1] = "El EuroDomain es un Dominio Local de servicios centralizados.";
 choices[24][2] = "Algunas aplicaciones que usan sus servicios son OLAF, DG TREN o DG FISH.";
 choices[24][3] = "Da acceso y opera a trav&eacute;s de Internet.";
 answers[24] = 2;
 units[24] = ['114'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8794. ";
 preguntaids[24] = 8794


//  Id pregunta: 8619 Año de creación de pregunta: 2013
 questions[25]= "26)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[25]= new Array();
 choices[25][0] = "Independiente/Infraestructura";
 choices[25][1] = "Activo/Pasivo";
 choices[25][2] = "Manual/Continuo";
 choices[25][3] = "Modo voz/Modo voz + datos";
 answers[25] = 1;
 units[25] = ['106'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8619. ";
 preguntaids[25] = 8619


//  Id pregunta: 8816 Año de creación de pregunta: 2013
 questions[26]= "27)  Ante situaciones de congesti&oacute;n, Resilient Packet Ring:";
 choices[26]= new Array();
 choices[26][0] = "Reacciona descartando paquetes.";
 choices[26][1] = "Utiliza el algoritmo Fairness, que sirve para los servicios de clase A1, B-CIR, B-EIR y C; y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo y que se puede reutilizar de las diferentes clases.";
 choices[26][2] = "Utiliza el algoritmo Fairness, que sirve para todos los tipos de tr&aacute;fico y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo.";
 choices[26][3] = "No tiene control de congesti&oacute;n.";
 answers[26] = 1;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8816. ";
 preguntaids[26] = 8816


//  Id pregunta: 8781 Año de creación de pregunta: 2013
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[27]= new Array();
 choices[27][0] = "UTP - Unshielded Twisted Pair.";
 choices[27][1] = "STP - Shielded Twisted Pair.";
 choices[27][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[27][3] = "FTP - Foiled Twisted Pair.";
 answers[27] = 2;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8781. ";
 preguntaids[27] = 8781


//  Id pregunta: 8535 Año de creación de pregunta: 2011
 questions[28]= "29)  Respecto a LMDS:";
 choices[28]= new Array();
 choices[28][0] = "Al ser de frecuencias bajas, no tiene problemas con las zonas de sombra.";
 choices[28][1] = "Son redes de lento despliegue";
 choices[28][2] = "Funciona en la banda de los 28 a 31 Ghz y una difusi&oacute;n m&aacute;xima de 7 km";
 choices[28][3] = "Se la conoce como proveedor de servicios sin cable";
 answers[28] = 2;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8535. ";
 preguntaids[28] = 8535


//  Id pregunta: 8807 Año de creación de pregunta: 2013
 questions[29]= "30)  &iquest;Cu&aacute;l de estas afirmaciones es cierta en relaci&oacute;n con las redes de &aacute;rea local?";
 choices[29]= new Array();
 choices[29][0] = "El subnivel LLC se encarga del control l&oacute;gico del enlace, por lo que gestiona el tipo de acceso al medio.";
 choices[29][1] = "El subnivel MAC controla el acceso al medio, creando una trama que se adapta a la topolog&iacute;a de la red f&iacute;sica.";
 choices[29][2] = "El subnivel MAC se encarga del control l&oacute;gico del enlace.";
 choices[29][3] = "El subnivel MAC es el responsable de las funciones de entramado, control de errores y control de flujo.";
 answers[29] = 1;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8807. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";
 preguntaids[29] = 8807


//  Id pregunta: 8826 Año de creación de pregunta: 2013
 questions[30]= "31)  Acerca de las recomendaciones relativas a X.25, se puede afirmar:";
 choices[30]= new Array();
 choices[30][0] = "X.21 define el interfaz entre ETD y ETCD para terminales que operan en modo paquete en redes p&uacute;blicas";
 choices[30][1] = "X.25 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 choices[30][2] = "X.75 define el Interfaz entre ETD y ETCD para un equipo de datos arr&iacute;tmico con acceso a la facilidad de empaquetado/desempaquetado de datos (PAD), en una red X.25";
 choices[30][3] = "X.75 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 answers[30] = 3;
 units[30] = ['112'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8826. ";
 preguntaids[30] = 8826


//  Id pregunta: 8829 Año de creación de pregunta: 2013
 questions[31]= "32)  La ley de Cooper afirma que:";
 choices[31]= new Array();
 choices[31][0] = "El n&uacute;mero m&aacute;ximo de conversaciones de voz o su equivalente en tr&aacute;fico de datos que pueden ser llevados a cabo en todo el espectro radioel&eacute;ctrico &uacute;til en una determinada &aacute;rea, se dobla cada 30 meses.";
 choices[31][1] = "Tijeras cortan papel, papel cubre a piedra, piedra aplasta lagarto, lagarto envenena a Spock.";
 choices[31][2] = "&Eacute;l n&uacute;mero de MFLOPS que un procesador puede realizar, aumenta siguiendo un ritmo logar&iacute;tmico.";
 choices[31][3] = "El rendimiento de un sistema aumenta linealmente con el n&uacute;mero de unidades de procesamiento que posea.";
 answers[31] = 0;
 units[31] = ['117'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 8829. ";
 preguntaids[31] = 8829


//  Id pregunta: 8818 Año de creación de pregunta: 2013
 questions[32]= "33)  E-Line:";
 choices[32]= new Array();
 choices[32][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[32][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[32][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[32][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[32] = 2;
 units[32] = ['112'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8818. ";
 preguntaids[32] = 8818


//  Id pregunta: 8780 Año de creación de pregunta: 2013
 questions[33]= "34)  Se&ntilde;ale la respuesta correcta:";
 choices[33]= new Array();
 choices[33][0] = "El subsistema vertical conecta el distribuidor de campus con los puntos de transici&oacute;n (PT)";
 choices[33][1] = "El subsistema horizontal parte de los cuadros de distribuci&oacute;n de planta y llega a las rosetas de conexi&oacute;n.";
 choices[33][2] = "El subsistema horizontal conecta los puntos de transicion (PT) entre s&iacute;";
 choices[33][3] = "El cableado de campus comienza en los distribuidores de planta.";
 answers[33] = 1;
 units[33] = ['104'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8780. ";
 preguntaids[33] = 8780


//  Id pregunta: 8817 Año de creación de pregunta: 2013
 questions[34]= "35)  En una red metropolitana Ethernet basada en MPLS";
 choices[34]= new Array();
 choices[34][0] = "En la red del operador se transportan tramas de Ethernet sobre MPLS";
 choices[34][1] = "Las tramas de Ethernet se transportan sobre MPLS y en la red del operador se vuelve a utilizar Ethernet como tecnolog&iacute;a para el transporte de MPLS.";
 choices[34][2] = "En la salida de las diferentes redes de &aacute;rea local que componen la red metropolitana, se a&ntilde;ade una cabecera IP sobre la que se aplican las etiquetas MPLS.";
 choices[34][3] = "Ninguna de las respuestas es correcta.";
 answers[34] = 1;
 units[34] = ['112'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8817. ";
 preguntaids[34] = 8817


//  Id pregunta: 8772 Año de creación de pregunta: 2013
 questions[35]= "36)  &iquest;Qu&eacute; norma define el cableado estructurado?";
 choices[35]= new Array();
 choices[35][0] = "ISO 50173";
 choices[35][1] = "ISO 11801";
 choices[35][2] = "ISO 18765";
 choices[35][3] = "ISO 80211";
 answers[35] = 1;
 units[35] = ['104'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8772. ";
 preguntaids[35] = 8772


//  Id pregunta: 8830 Año de creación de pregunta: 2013
 questions[36]= "37)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n con 4G:";
 choices[36]= new Array();
 choices[36][0] = "Admite la utilizaci&oacute;n de antenas MIMO";
 choices[36][1] = "Para el servicio de voz utiliza el canal VOL, cuyo acceso se negocia previamente a trav&eacute;s del canal VOL-ALLOC";
 choices[36][2] = "Utiliza modulaciones adaptativas para el aprovechamiento &oacute;ptimo del canal.";
 choices[36][3] = "Utiliza multiplexaci&oacute;n estad&iacute;stica en el dominio de la frecuencia.";
 answers[36] = 1;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8830. ";
 preguntaids[36] = 8830


//  Id pregunta: 8506 Año de creación de pregunta: 2011
 questions[37]= "38)  Indica cual de estas afirmaciones es cierta";
 choices[37]= new Array();
 choices[37][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[37][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[37][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = 1;
 units[37] = ['103'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 8506. Teleco Ayto. Madrid 2010";
 preguntaids[37] = 8506


//  Id pregunta: 8839 Año de creación de pregunta: 2013
 questions[38]= "39)  En las comunicaciones m&oacute;viles, permitir que se mantenga la conexi&oacute;n cuando un dispositivo m&oacute;vil se cambia dentro de la red a la que pertenece de la zona cubierta por una estaci&oacute;n base a otra, se conoce como:";
 choices[38]= new Array();
 choices[38][0] = "Roaming.";
 choices[38][1] = "Cobertura.";
 choices[38][2] = "Talk-out.";
 choices[38][3] = "hand-off o handover.";
 answers[38] = 3;
 units[38] = ['117'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 8839. Examen TIC A2 2011";
 preguntaids[38] = 8839


//  Id pregunta: 8836 Año de creación de pregunta: 2013
 questions[39]= "40)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[39]= new Array();
 choices[39][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[39][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[39][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[39][3] = "La modulaci&oacute;n utilizada en GMS es GMSK";
 answers[39] = 2;
 units[39] = ['117'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8836. ";
 preguntaids[39] = 8836


//  Id pregunta: 8784 Año de creación de pregunta: 2013
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[40]= new Array();
 choices[40][0] = "1000BASE-SX";
 choices[40][1] = "1000BASE-LX";
 choices[40][2] = "1000BASE-TX";
 choices[40][3] = "1000BASE-CX";
 answers[40] = 1;
 units[40] = ['106'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8784. Examen TIC A2 2011";
 preguntaids[40] = 8784


//  Id pregunta: 8812 Año de creación de pregunta: 2013
 questions[41]= "42)  Acerca de Fibre Channel, se puede decir:";
 choices[41]= new Array();
 choices[41][0] = "El protocolo sigue el modelo de referencia OSI.";
 choices[41][1] = "Es un protocolo con 5 capas.";
 choices[41][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[41][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[41] = 1;
 units[41] = ['53', '106'];
 blocks[41] = ['B2', 'B4'];
 comments[41] = "Id Pregunta: 8812. ";
 preguntaids[41] = 8812


//  Id pregunta: 8806 Año de creación de pregunta: 2013
 questions[42]= "43)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[42]= new Array();
 choices[42][0] = "CWDM";
 choices[42][1] = "SDH";
 choices[42][2] = "WDM";
 choices[42][3] = "DWDM";
 answers[42] = 3;
 units[42] = ['106'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8806. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";
 preguntaids[42] = 8806


//  Id pregunta: 8774 Año de creación de pregunta: 2013
 questions[43]= "44)  El efecto de la diafon&iacute;a en un cable se define como:";
 choices[43]= new Array();
 choices[43][0] = "La p&eacute;rdida de potencia en la se&ntilde;al debido a la emisi&oacute;n electromagn&eacute;tica al ambiente.";
 choices[43][1] = "La variaci&oacute;n de la velocidad de propagaci&oacute;n de la se&ntilde;al en funcion de la frecuencia";
 choices[43][2] = "La interferencia electromagn&eacute;tica producida entre se&ntilde;ales que discurren simult&aacute;neamente entre pares paralelos.";
 choices[43][3] = "Es la distorsi&oacute;n de la se&ntilde;al por la influencia de se&ntilde;ales espurias del ambiente.";
 answers[43] = 2;
 units[43] = ['104'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 8774. ";
 preguntaids[43] = 8774


//  Id pregunta: 8796 Año de creación de pregunta: 2013
 questions[44]= "45)  Sobre los canales no estructurados en Europa:";
 choices[44]= new Array();
 choices[44][0] = "El H11 trabaja a 384 Kbps, agrupando 6 canales de 64 Kbps";
 choices[44][1] = "El H0 trabaja a 1536 Kbps, agrupando 24 canales de 64 Kbps";
 choices[44][2] = "El H11 trabaja a 1920 Kbps, agrupando 30 canales de 64 Kbps";
 choices[44][3] = "El H0 trabaja 384 Kbps, agrupando 6 canales de 64 Kbps";
 answers[44] = 3;
 units[44] = ['114'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8796. ";
 preguntaids[44] = 8796


//  Id pregunta: 8548 Año de creación de pregunta: 2013
 questions[45]= "46)  Indique cu&aacute;l es el n&uacute;mero de protocolo para IPv6";
 choices[45]= new Array();
 choices[45][0] = "17";
 choices[45][1] = "41";
 choices[45][2] = "47";
 choices[45][3] = "50";
 answers[45] = 1;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8548. Consultar en wikipedia List_of_IP_protocol_numbers";
 preguntaids[45] = 8548


//  Id pregunta: 8803 Año de creación de pregunta: 2013
 questions[46]= "47)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[46]= new Array();
 choices[46][0] = "S&oacute;lo 1 canal B puede estar ocupado en un momento determinado, pero puede encolar lo que entre por el otro.";
 choices[46][1] = "3, ya que cada canal s&oacute;lo puede ser utilizado por un terminal a la vez, y con la compresi&oacute;n adecuada todos los canales permiten una comunicaci&oacute;n vocal.";
 choices[46][2] = "1 por cada canal B, mientras que el canal D puede ser compartido por varios terminales en modo paquete.";
 choices[46][3] = "Los 8 terminales que puede soportar el acceso b&aacute;sico.";
 answers[46] = 2;
 units[46] = ['114'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8803. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[46] = 8803


//  Id pregunta: 8835 Año de creación de pregunta: 2013
 questions[47]= "48)  De las tecnolog&iacute;as 4G, se puede afirmar:";
 choices[47]= new Array();
 choices[47][0] = "WiMax alcanza velocidades de bajada inferiores a 100 Mbps";
 choices[47][1] = "LTE alcanza velocidades de bajada superiores a las que se alcanzan con WiMax";
 choices[47][2] = "WiMAX puede alcanzar velocidades de bajada superiores a 100 Mbps";
 choices[47][3] = "HSPA+ no puede superar los 25 Mbps de bajada puesto que no mantiene una conexi&oacute;n permanente con la estaci&oacute;n base";
 answers[47] = 2;
 units[47] = ['117'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8835. ";
 preguntaids[47] = 8835


//  Id pregunta: 8777 Año de creación de pregunta: 2013
 questions[48]= "49)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI:";
 choices[48]= new Array();
 choices[48][0] = "Equivale al cable clase E de ISO";
 choices[48][1] = "Es el cable adecuado para transmisiones de 100 Mbps";
 choices[48][2] = "Su rango de funcionamiento alcanza los 100 Mhz";
 choices[48][3] = "Se trata de una categor&iacute;a obsoleta";
 answers[48] = 0;
 units[48] = ['104'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8777. ";
 preguntaids[48] = 8777


//  Id pregunta: 8773 Año de creación de pregunta: 2013
 questions[49]= "50)  &iquest;Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[49]= new Array();
 choices[49][0] = "Clase D";
 choices[49][1] = "Clase F";
 choices[49][2] = "Clase E";
 choices[49][3] = "b) y c) son correctas.";
 answers[49] = 3;
 units[49] = ['104'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8773. ";
 preguntaids[49] = 8773


//  Id pregunta: 8844 Año de creación de pregunta: 2013
 questions[50]= "51)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[50]= new Array();
 choices[50][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio.";
 choices[50][1] = "Apenas se entiende nada.";
 choices[50][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[50][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[50] = 2;
 units[50] = ['107'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 8844. Examen Xunta de Galicia A1 2011";
 preguntaids[50] = 8844


//  Id pregunta: 8802 Año de creación de pregunta: 2013
 questions[51]= "52)  Indica cu&aacute;l de estas afirmaciones es cierta:";
 choices[51]= new Array();
 choices[51][0] = "En RDSI, igual que en RTB, el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[51][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[51][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[51][3] = "Todas las respuestas son correctas.";
 answers[51] = 1;
 units[51] = ['114'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8802. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[51] = 8802


//  Id pregunta: 8837 Año de creación de pregunta: 2013
 questions[52]= "53)  El servicio universal de telecomunicaciones es:";
 choices[52]= new Array();
 choices[52][0] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza en un &aacute;mbito compartido entre varios usuarios, con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[52][1] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[52][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a los usuarios con las rentas m&aacute;s bajas con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[52][3] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los centros de formaci&oacute;n con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada.";
 answers[52] = 1;
 units[52] = ['121'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8837. Examen TIC A1 2011";
 preguntaids[52] = 8837


//  Id pregunta: 8800 Año de creación de pregunta: 2013
 questions[53]= "54)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[53]= new Array();
 choices[53][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[53][1] = "S&oacute;lo se emplea en RDSI";
 choices[53][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[53][3] = "Ninguna de las respuestas es correcta.";
 answers[53] = 0;
 units[53] = ['114'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8800. Pruebas selectivas para Gesti&oacute;n de Sistemas e Inform&aacute;tica de la UPM 2011. Libre";
 preguntaids[53] = 8800


//  Id pregunta: 8775 Año de creación de pregunta: 2013
 questions[54]= "55)  &iquest;C&uacute;al de los siguientes aspectos NO se recoge en las cl&aacute;sulas sobre contrataci&oacute;n p&uacute;blica de SCE del manual EPHOS-2?";
 choices[54]= new Array();
 choices[54][0] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la ISO 80211";
 choices[54][1] = "El cableado deber&aacute; estar de acuerdo con los requisitos del nivel f&iacute;sico de la ISO 802.x";
 choices[54][2] = "Se debe detallar la ubicaci&oacute;n de equipos activos en el cableado de backbone";
 choices[54][3] = "Se debe detallar el n&uacute;mero de z&oacute;calos o rosetas del cableado horizontal";
 answers[54] = 0;
 units[54] = ['104'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 8775. ";
 preguntaids[54] = 8775


//  Id pregunta: 8520 Año de creación de pregunta: 2011
 questions[55]= "56)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[55]= new Array();
 choices[55][0] = "Capa F&iacute;sica de Datos";
 choices[55][1] = "Capa de Red";
 choices[55][2] = "Capa de Enlace de Datos";
 choices[55][3] = "Capa de Transporte";
 answers[55] = 2;
 units[55] = ['105'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 8520. ";
 preguntaids[55] = 8520


//  Id pregunta: 8820 Año de creación de pregunta: 2013
 questions[56]= "57)  El protocolo de nivel 2 utilizado en una l&iacute;nea punto a punto con Jerarqu&iacute;a Digital S&iacute;ncrona es:";
 choices[56]= new Array();
 choices[56][0] = "PPP";
 choices[56][1] = "LAPB";
 choices[56][2] = "L2TP";
 choices[56][3] = "L2F";
 answers[56] = 0;
 units[56] = ['112'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8820. ";
 preguntaids[56] = 8820


//  Id pregunta: 8809 Año de creación de pregunta: 2013
 questions[57]= "58)  Una red utiliza CSMA/CD. Opera a 1 Gbps con un cable de 500 metros de largo sin repetidores. La velocidad de propagaci&oacute;n en el cable es de 200.000 km/s &iquest;Cu&aacute;l es el tama&ntilde;o m&iacute;nimo de la trama?";
 choices[57]= new Array();
 choices[57][0] = "5000 bits";
 choices[57][1] = "10000 bits";
 choices[57][2] = "1250 bytes";
 choices[57][3] = "1000 bits";
 answers[57] = 0;
 units[57] = ['112'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 8809. ";
 preguntaids[57] = 8809


//  Id pregunta: 8841 Año de creación de pregunta: 2013
 questions[58]= "59)  Se&ntilde;ale la respuesta falsa con respecto a LTE:";
 choices[58]= new Array();
 choices[58][0] = "Emplea radiocanales de frecuencia fija de 15 Mhz";
 choices[58][1] = "Utiliza canales de ancho de banda adaptativos.";
 choices[58][2] = "Puede trabajar en muchas bandas frecuenciales diferentes";
 choices[58][3] = "Utiliza modulaciones QPSK, 16QAM y 64QAM";
 answers[58] = 0;
 units[58] = ['117'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 8841. Examen Teleco Ayto Madrid 2010";
 preguntaids[58] = 8841


//  Id pregunta: 8828 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[59]= new Array();
 choices[59][0] = "802.16m";
 choices[59][1] = "802.16e";
 choices[59][2] = "802.16k";
 choices[59][3] = "802.16-2009";
 answers[59] = 0;
 units[59] = ['108'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8828. Tambi&eacute;n conocida como Mobile WiMAX Release 2";
 preguntaids[59] = 8828


//  Id pregunta: 8527 Año de creación de pregunta: 2014
 questions[60]= "61)  Con respecto a las siguientes siglas:";
 choices[60]= new Array();
 choices[60][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[60][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[60][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[60][3] = "Todas las anteriores";
 answers[60] = 3;
 units[60] = ['108'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 8527. ";
 preguntaids[60] = 8527


//  Id pregunta: 8776 Año de creación de pregunta: 2013
 questions[61]= "62)  El cable BS/UTP:";
 choices[61]= new Array();
 choices[61][0] = "Es un cable de pantalla global de aluminio y una trenza de cobre recubri&eacute;ndolo";
 choices[61][1] = "Es un cable coaxial";
 choices[61][2] = "Presenta apantallamiento dos a dos";
 choices[61][3] = "No presenta apantallamiento global";
 answers[61] = 0;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 8776. ";
 preguntaids[61] = 8776


//  Id pregunta: 8833 Año de creación de pregunta: 2013
 questions[62]= "63)  Sobre el interfaz radio de LTE, se puede afirmar";
 choices[62]= new Array();
 choices[62][0] = "Utiliza WCDMA";
 choices[62][1] = "Utiliza unicamente FDD para la duplexaci&oacute;n.";
 choices[62][2] = "Utiliza OFDM para la bajada y FDMA de portadora simple en la subida";
 choices[62][3] = "Combina TDMA y FDMA";
 answers[62] = 2;
 units[62] = ['117'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 8833. ";
 preguntaids[62] = 8833


//  Id pregunta: 8810 Año de creación de pregunta: 2013
 questions[63]= "64)  Una red de anillo en contienda.";
 choices[63]= new Array();
 choices[63][0] = "Nunca se pasa un testigo";
 choices[63][1] = "Lo m&aacute;s razonable es utilizar este m&eacute;todo en situaciones de demanda baja de transmisi&oacute;n.";
 choices[63][2] = "Mejora las prestaciones de la red en situaciones alta demanda de transmisi&oacute;n.";
 choices[63][3] = "Es imposible detectar las colisiones bajo este esquema de funcionamiento.";
 answers[63] = 1;
 units[63] = ['112'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8810. ";
 preguntaids[63] = 8810


//  Id pregunta: 8783 Año de creación de pregunta: 2013
 questions[64]= "65)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[64]= new Array();
 choices[64][0] = "EIA/TIA 586";
 choices[64][1] = "SO/EIS DIS 11108";
 choices[64][2] = "EIA/TIA 568";
 choices[64][3] = "ISO/EIS DIS 11801";
 answers[64] = 3;
 units[64] = ['104'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8783. Examen TIC A2 2011";
 preguntaids[64] = 8783


//  Id pregunta: 8832 Año de creación de pregunta: 2013
 questions[65]= "66)  En LTE, las funciones de control de recursos de radio, control de calidad de servicio y movilidad se llevan a cabo en:";
 choices[65]= new Array();
 choices[65][0] = "Los Evolved Node-B";
 choices[65][1] = "Los Evolved RNC";
 choices[65][2] = "En las BSC";
 choices[65][3] = "En servidores remotos del operador, a los que se accede por conmutaci&oacute;n en una red IP";
 answers[65] = 0;
 units[65] = ['117'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8832. ";
 preguntaids[65] = 8832


//  Id pregunta: 8805 Año de creación de pregunta: 2013
 questions[66]= "67)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[66]= new Array();
 choices[66][0] = "40GBASE-KR4";
 choices[66][1] = "4GBASE-SR40";
 choices[66][2] = "40GBASE-SR4";
 choices[66][3] = "40GBASE-LR4";
 answers[66] = 3;
 units[66] = ['106', '112'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 8805. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";
 preguntaids[66] = 8805


//  Id pregunta: 8804 Año de creación de pregunta: 2013
 questions[67]= "68)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[67]= new Array();
 choices[67][0] = "Fibra 62.5/125 um";
 choices[67][1] = "Fibra 50/125 um";
 choices[67][2] = "Fibra 200/380 um";
 choices[67][3] = "Fibra 10/125 um";
 answers[67] = 3;
 units[67] = ['106'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8804. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[67] = 8804


//  Id pregunta: 8782 Año de creación de pregunta: 2013
 questions[68]= "69)  &iquest;C&oacute;mo se denomina al subsistema de cableado estructurado que interconecta los armarios de planta de un edificio?";
 choices[68]= new Array();
 choices[68][0] = "Subsistema campus";
 choices[68][1] = "Subsistema horizontal";
 choices[68][2] = "Subsistema intermodal";
 choices[68][3] = "Subsistema troncal";
 answers[68] = 3;
 units[68] = ['104'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 8782. Examen TIC A1 AGE 2011";
 preguntaids[68] = 8782


//  Id pregunta: 8814 Año de creación de pregunta: 2013
 questions[69]= "70)  Los niveles de servicio de Resilient Packet Ring son:";
 choices[69]= new Array();
 choices[69][0] = "Clase A: Servicio best effort";
 choices[69][1] = "Clase B: Con latencia y jitter predecible.";
 choices[69][2] = "Clase C: Para tr&aacute;fico con requisitos de baja latencia y bajo jitter.";
 choices[69][3] = "Todas las respuestas son correctas.";
 answers[69] = 1;
 units[69] = ['112'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 8814. ";
 preguntaids[69] = 8814


//  Id pregunta: 8798 Año de creación de pregunta: 2013
 questions[70]= "71)  Respecto de RDSI, se puede afirmar:";
 choices[70]= new Array();
 choices[70][0] = "En la capa de enlace, el canal D hace uso del Procedimiento de Acceso al Enlace en el Canal D (o LAPD)";
 choices[70][1] = "En la capa de enlace, el canal B hace uso del Procedimiento de Acceso al Enlace en el Canal B (o LAPB)";
 choices[70][2] = "La transmisi&oacute;n d&uacute;plex en la capa f&iacute;sica se efect&uacute;a a 192 kbps mediante tramas de 40 bits cada una y una duraci&oacute;n de 275 us";
 choices[70][3] = "En la capa de red, se usa el protocolo LAPB, para gestionar las conexiones";
 answers[70] = 0;
 units[70] = ['114'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 8798. ";
 preguntaids[70] = 8798


//  Id pregunta: 8797 Año de creación de pregunta: 2013
 questions[71]= "72)  DSS1 es:";
 choices[71]= new Array();
 choices[71][0] = "Un protocolo utilizado en ADSL, en la capa de red, para la gesti&oacute;n de conexiones con el DSLAM";
 choices[71][1] = "Un protocolo utilizado en RDSI, de la capa de red, para gesti&oacute;n de conexiones.";
 choices[71][2] = "Un protocolo utilizado en RDSI en la capa de enlace, para el control de acceso al canal D";
 choices[71][3] = "Un protocolo utilizado en ADSL, en la capa de enlace, para el acceso m&uacute;ltiple a los servicios";
 answers[71] = 1;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 8797. ";
 preguntaids[71] = 8797


//  Id pregunta: 8819 Año de creación de pregunta: 2013
 questions[72]= "73)  En un circuito virtual:";
 choices[72]= new Array();
 choices[72][0] = "El Equipo de Terminaci&oacute;n del Circuito de Datos (ETCD) es un nodo frontera de red, a trav&eacute;s del cual los datos del usuario atraviesan la misma hasta llegar al ETCD remoto.";
 choices[72][1] = "La Central de Conmutaci&oacute;n de Paquetes es la encargada del paso de paquetes al siguiente nodo dentro del circuito virtual establecido.";
 choices[72][2] = "Un Circuito de Datos es la conexi&oacute;n virtual establecida entre los dos ETCD (Equipos de Terminaci&oacute;n del Circuito de Datos) involucrados en una transmisi&oacute;n.";
 choices[72][3] = "Todas son correctas.";
 answers[72] = 3;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 8819. ";
 preguntaids[72] = 8819


//  Id pregunta: 8840 Año de creación de pregunta: 2013
 questions[73]= "74)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[73]= new Array();
 choices[73][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[73][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[73][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[73][3] = "Ninguna de las respuestas es correcta.";
 answers[73] = 0;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 8840. Examen TIC A2 2011";
 preguntaids[73] = 8840


//  Id pregunta: 8792 Año de creación de pregunta: 2013
 questions[74]= "75)  De entre las siguientes, existe una que no es una iniciativa comunitaria relacionada con el &aacute;mbito TIC:";
 choices[74]= new Array();
 choices[74][0] = "ISA";
 choices[74][1] = "eTIN";
 choices[74][2] = "IDAbc";
 choices[74][3] = "CIP 2007-2013";
 answers[74] = 1;
 units[74] = ['114'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 8792. ";
 preguntaids[74] = 8792


