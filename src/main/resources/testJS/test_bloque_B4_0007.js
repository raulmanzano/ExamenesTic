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
//  Id pregunta: 4437 Año de creación de pregunta: 2005
 questions[0]= "1)  Un ataque del tipo denegaci&oacute;n de servicio (DoS = Denial of Service) a un servidor Web afecta a:";
 choices[0]= new Array();
 choices[0][0] = "Las respuestas 'c' y 'd' son correctas";
 choices[0][1] = "La dimensi&oacute;n de autenticaci&oacute;n de los usuarios";
 choices[0][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[0][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 answers[0] = 3;
 units[0] = ['120'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4437. ";
 preguntaids[0] = 4437


//  Id pregunta: 4440 Año de creación de pregunta: 2002
 questions[1]= "2)  Una transmisi&oacute;n as&iacute;ncrona se caracteriza porque:";
 choices[1]= new Array();
 choices[1][0] = "Los caracteres se reciben a un ritmo diferente del que se transmiten";
 choices[1][1] = "El terminal receptor funciona a velocidad diferente del emisor";
 choices[1][2] = "Cada car&aacute;cter incorpora su propio sincronismo";
 choices[1][3] = "Se utilizan caracteres de sincronizaci&oacute;n sin periodicidad fija";
 answers[1] = 2;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4440. Cada caracter a ser transmitido es delimitado por un bit de informaci&oacute;n denominado de cabecera o de arranque, y uno o dos bits denominados de terminaci&oacute;n o de parada";
 preguntaids[1] = 4440


//  Id pregunta: 4425 Año de creación de pregunta: 2005
 questions[2]= "3)  La intrusi&oacute;n de un virus inform&aacute;tico del tipo gusano (worm) en un ordenador puede afectar, en primer lugar, por ocupaci&oacute;n de todo el espacio disponible en disco:";
 choices[2]= new Array();
 choices[2][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[2][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[2][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[2][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[2] = 1;
 units[2] = ['120'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4425. ";
 preguntaids[2] = 4425


//  Id pregunta: 4438 Año de creación de pregunta: 2002
 questions[3]= "4)  Un sistema, si se desea que controle los intentos de violaci&oacute;n debe incorporar:";
 choices[3]= new Array();
 choices[3][0] = "An&aacute;lisis y validaci&oacute;n de la llamada";
 choices[3][1] = "Registro de la historia y fecha de la contrase&ntilde;a";
 choices[3][2] = "Forzar a que los usuarios cambien la contrase&ntilde;a";
 choices[3][3] = "Todas las respuestas anteriores son ciertas";
 answers[3] = 3;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4438. ";
 preguntaids[3] = 4438


//  Id pregunta: 4496 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el modelo OSI, es falsa?";
 choices[4]= new Array();
 choices[4][0] = "Un SAP es un recurso a trav&eacute;s del cual una entidad de nivel N+1 accede a los servicios de nivel N";
 choices[4][1] = "Una entidad N+1 s&oacute;lo puede estar conectada a un SAP";
 choices[4][2] = "Las entidades conectadas a trav&eacute;s de un SAP deben residir en el mismo subsistema";
 choices[4][3] = "Una direcci&oacute;n de SAP identifica a un &uacute;nico SAP";
 answers[4] = 1;
 units[4] = ['105'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4496. ";
 preguntaids[4] = 4496


//  Id pregunta: 4479 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos repetidores?:";
 choices[5]= new Array();
 choices[5][0] = "Operan a nivel de LLC, pudiendo usarse para la interconexi&oacute;n de LANs heterog&eacute;neas de nivel 1 y 2 de OSI";
 choices[5][1] = "Operan a nivel 1 de OSI, pudiendo usarse para conectar diferentes tipos de medio f&iacute;sico";
 choices[5][2] = "Pueden analizar direcci&oacute;n de origen y destino, efectuando funciones de filtrado, pero sobre medios f&iacute;sicos homog&eacute;neos";
 choices[5][3] = "Permiten aislar los diferentes segmentos separando el tr&aacute;fico de cada uno";
 answers[5] = 1;
 units[5] = ['104'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4479. ";
 preguntaids[5] = 4479


//  Id pregunta: 4493 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[6]= new Array();
 choices[6][0] = "Los conmutadores se utilizan para resolver problemas de rendimiento de la red debido a anchos de banda peque&ntilde;os y embotellamientos";
 choices[6][1] = "Los encaminadores o routers son independientes del protocolo, ya que se sit&uacute;an en el nivel de red y eligen la ruta m&aacute;s eficiente de cada paquete que reciben";
 choices[6][2] = "El protocolo &quot;spanning tree&quot; tiene como misi&oacute;n evitar la formaci&oacute;n de bucles en la interconexi&oacute;n de elementos de una red";
 choices[6][3] = "Los repetidores obligan a que los 2 segmentos que interconectan tenga el mismo acceso al medio, la misma direcci&oacute;n de red y trabaje con los mismos protocolos";
 answers[6] = 1;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4493. ";
 preguntaids[6] = 4493


//  Id pregunta: 4431 Año de creación de pregunta: 2002
 questions[7]= "8)  Podemos definir protocolo como:";
 choices[7]= new Array();
 choices[7][0] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n entre entidades heterog&eacute;neas, tanto en la transmisi&oacute;n como en el control y recuperaci&oacute;n de errores";
 choices[7][1] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n entre entidades homog&eacute;neas";
 choices[7][2] = "Conjunto de reglas responsables de la comunicaci&oacute;n directa entre 2 sistemas a trav&eacute;s del medio f&iacute;sico que los mantiene conectados";
 choices[7][3] = "Conjunto de reglas que permiten identificar de forma &uacute;nica e inequ&iacute;voca a un nodo o host";
 answers[7] = 1;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4431. Seg&uacute;n el modelo OSI un protocolo establece reglas organizadas y convenidas entre entidades pares (horizontal)";
 preguntaids[7] = 4431


//  Id pregunta: 4463 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;C&oacute;mo se denominan los 2 modos de utilizaci&oacute;n de IPSec?";
 choices[8]= new Array();
 choices[8][0] = "balanceado y no balanceado";
 choices[8][1] = "t&uacute;nel y abierto";
 choices[8][2] = "datagrama y transporte";
 choices[8][3] = "transporte y t&uacute;nel";
 answers[8] = 3;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4463. ";
 preguntaids[8] = 4463


//  Id pregunta: 4432 Año de creación de pregunta: 2002
 questions[9]= "10)  Se dice que una l&iacute;nea es 'full duplex' cuando:";
 choices[9]= new Array();
 choices[9][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea tienen que usarla de forma alternativa en cada sentido de transmisi&oacute;n";
 choices[9][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea pueden transmitir simult&aacute;neamente sin restricciones";
 choices[9][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[9][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 answers[9] = 1;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4432. ";
 preguntaids[9] = 4432


//  Id pregunta: 4483 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta para un sistema intermedio o encaminador (router) de una red IP?:";
 choices[10]= new Array();
 choices[10][0] = "Un encaminador o router no puede fragmentar un datagrama";
 choices[10][1] = "Puede fragmentar un datagrama si es necesario pero no puede reensamblar los fragmentos";
 choices[10][2] = "Puede tanto fragmentar un datagrama como reensamblar los fragmentos";
 choices[10][3] = "Solo puede reensamblar los paquetes TCP orientados a conexi&oacute;n";
 answers[10] = 2;
 units[10] = ['104'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4483. ";
 preguntaids[10] = 4483


//  Id pregunta: 4471 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[11]= new Array();
 choices[11][0] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[11][1] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[11][2] = "No existe ning&uacute;n tipo de encaminamiento";
 choices[11][3] = "Todos los  paquetes siguen el mismo camino por la red";
 answers[11] = 0;
 units[11] = ['102'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4471. ";
 preguntaids[11] = 4471


//  Id pregunta: 4441 Año de creación de pregunta: 2002
 questions[12]= "13)  Una transmisi&oacute;n half duplex describe:";
 choices[12]= new Array();
 choices[12][0] = "Un circuito de cuatro hilos";
 choices[12][1] = "Un cable con doble malla";
 choices[12][2] = "Una comunicaci&oacute;n alternativa en dos sentidos";
 choices[12][3] = "Todas las respuestas anteriores son ciertas";
 answers[12] = 2;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4441. ";
 preguntaids[12] = 4441


//  Id pregunta: 4423 Año de creación de pregunta: 2002
 questions[13]= "14)  La introducci&oacute;n de redundancias en un c&oacute;digo de representaci&oacute;n, por ejemplo la introducci&oacute;n de un bit de paridad (par o impar), se hace para:";
 choices[13]= new Array();
 choices[13][0] = "Detectar posibles errores en la transmisi&oacute;n de la informaci&oacute;n";
 choices[13][1] = "Aumentar la eficacia del c&oacute;digo";
 choices[13][2] = "Aumentar el n&uacute;mero de datos susceptibles de representaci&oacute;n";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = 0;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4423. ";
 preguntaids[13] = 4423


//  Id pregunta: 4472 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;Cu&aacute;l de estas afirmaciones es verdadera respecto a TCP/IP?:";
 choices[14]= new Array();
 choices[14][0] = "TCP tiene el mismo formato de mensaje que IP";
 choices[14][1] = "UDP no es un protocolo TCP/IP";
 choices[14][2] = "Para que TCP/IP funcione es necesario disponer de un interfaz Ethernet";
 choices[14][3] = "Una m&aacute;quina con varias tarjetas de red tiene varias direcciones Internet";
 answers[14] = 3;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4472. ";
 preguntaids[14] = 4472


//  Id pregunta: 4457 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN en bus con paso de testigo?:";
 choices[15]= new Array();
 choices[15][0] = "802.4";
 choices[15][1] = "802.5";
 choices[15][2] = "802.6";
 choices[15][3] = "802.7";
 answers[15] = 0;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4457. ";
 preguntaids[15] = 4457


//  Id pregunta: 4470 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de circuitos?:";
 choices[16]= new Array();
 choices[16][0] = "No es necesario establecer una llamada";
 choices[16][1] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[16][2] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[16][3] = "No existe ning&uacute;n tipo de encaminamiento";
 answers[16] = 2;
 units[16] = ['102'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4470. ";
 preguntaids[16] = 4470


//  Id pregunta: 4435 Año de creación de pregunta: 2005
 questions[17]= "18)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un cracker en un servidor web, en el peor de los casos, puede afectar a:";
 choices[17]= new Array();
 choices[17][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[17][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[17][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[17][3] = "Todas las anteriores";
 answers[17] = 3;
 units[17] = ['120'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4435. ";
 preguntaids[17] = 4435


//  Id pregunta: 4433 Año de creación de pregunta: 2002
 questions[18]= "19)  Se dice que una l&iacute;nea es 'half duplex' cuando:";
 choices[18]= new Array();
 choices[18][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea pueden transmitir simult&aacute;neamente sin restricciones";
 choices[18][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 choices[18][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[18][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir de forma ininterrumpida independientemente de la actividad del otro terminal";
 answers[18] = 2;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4433. ";
 preguntaids[18] = 4433


//  Id pregunta: 4442 Año de creación de pregunta: 2002
 questions[19]= "20)  Correo electr&oacute;nico, compartici&oacute;n de documentos FTP y/o WWW, directorio, agenda, listas de tareas&hellip; Todos ellos son:";
 choices[19]= new Array();
 choices[19][0] = "herramientas groupware s&iacute;ncronas";
 choices[19][1] = "protocolos y aplicaciones TCP/IP";
 choices[19][2] = "herramientas groupware as&iacute;ncronas";
 choices[19][3] = "aplicaciones ofim&aacute;ticas instaladas por defecto en cualquier PDA";
 answers[19] = 2;
 units[19] = ['116'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4442. ";
 preguntaids[19] = 4442


//  Id pregunta: 4427 Año de creación de pregunta: 2002
 questions[20]= "21)  Las siglas ADMD y PRMD se usan dentro la norma X.400 refiri&eacute;ndose a:";
 choices[20]= new Array();
 choices[20][0] = "Estas siglas no se usan en dicha norma";
 choices[20][1] = "Dominios p&uacute;blicos o privados";
 choices[20][2] = "Administraci&oacute;n y privacidad de los datos";
 choices[20][3] = "Ninguna de las respuestas anteriores";
 answers[20] = 1;
 units[20] = ['116'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4427. ";
 preguntaids[20] = 4427


//  Id pregunta: 4434 Año de creación de pregunta: 2002
 questions[21]= "22)  Se dice que una tarea o rutina es as&iacute;ncrona cuando:";
 choices[21]= new Array();
 choices[21][0] = "Gestiona un enlace de terminales 'tontos'";
 choices[21][1] = "Lanza una transacci&oacute;n a un terminal as&iacute;ncrono y espera su contestaci&oacute;n";
 choices[21][2] = "La tarea que la lanza no espera a su terminaci&oacute;n para continuar";
 choices[21][3] = "Son rutinas especializadas de los Sistemas de Tiempo Real dedicadas a la supervis&oacute;n de eventos en los elementos anal&oacute;gicos que controlan";
 answers[21] = 2;
 units[21] = ['103'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4434. ";
 preguntaids[21] = 4434


//  Id pregunta: 4459 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;A qu&eacute; se denomina 'modem nulo'?:";
 choices[22]= new Array();
 choices[22][0] = "A un modem para transportar datos por lineas digitales y que por lo tanto no modula ni demodula nada";
 choices[22][1] = "A un modem sin microprocesador de control";
 choices[22][2] = "A un cable inversor que conecta dos ETDs entre s&iacute;";
 choices[22][3] = "A un equipo que modula y demodula una se&ntilde;al nula";
 answers[22] = 2;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4459. ";
 preguntaids[22] = 4459


//  Id pregunta: 4481 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto de la fibra &oacute;ptica?:";
 choices[23]= new Array();
 choices[23][0] = "La fibra &oacute;ptica monomodo permite mayor ancho de banda que la multimodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[23][1] = "La fibra &oacute;ptica multimodo permite mayor ancho de banda que la monomodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[23][2] = "La fibra &oacute;ptica monomodo permite menor ancho de banda que la multimodo";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 0;
 units[23] = ['106'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4481. ";
 preguntaids[23] = 4481


//  Id pregunta: 4465 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;C&oacute;mo se llama el est&aacute;ndar existente para la integraci&oacute;n de LAN en ATM?:";
 choices[24]= new Array();
 choices[24][0] = "LANE";
 choices[24][1] = "WLAN";
 choices[24][2] = "FDDI";
 choices[24][3] = "ANYLAN";
 answers[24] = 0;
 units[24] = ['107'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4465. ";
 preguntaids[24] = 4465


//  Id pregunta: 4448 Año de creación de pregunta: 2002
 questions[25]= "26)  &quot;Red con un alto grado de cohesi&oacute;n y transparencia que hace que el usuario no vea a las funciones como repartidas entre los distintos elementos de la red&quot;. Es la definici&oacute;n de:";
 choices[25]= new Array();
 choices[25][0] = "Sistema abierto";
 choices[25][1] = "Sistema distribuido";
 choices[25][2] = "Intranet";
 choices[25][3] = "Sistema aut&oacute;nomo";
 answers[25] = 1;
 units[25] = ['102'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4448. ";
 preguntaids[25] = 4448


//  Id pregunta: 4499 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde con el est&aacute;ndar GSM?:";
 choices[26]= new Array();
 choices[26][0] = "Soporta una amplia gama de servicios de transmisi&oacute;n de datos en todas las velocidades est&aacute;ndar hasta los 64 kbps";
 choices[26][1] = "Se basa en los principios de la Red Digital de Servicios Integrados";
 choices[26][2] = "La informaci&oacute;n referente a los abonados se encuentra en una &uacute;nica base de datos";
 choices[26][3] = "En su componente radio se utiliza la banda de los 900 Mhz con el m&eacute;todo DMA, que proporciona ocho canales telef&oacute;nicos en una misma portadora y una codificaci&oacute;n de voz a 64 kbps";
 answers[26] = 1;
 units[26] = ['117'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4499. ";
 preguntaids[26] = 4499


//  Id pregunta: 4477 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de IPv6 es correcta?:";
 choices[27]= new Array();
 choices[27][0] = "Existe una cabecera principal y cabeceras de extensi&oacute;n";
 choices[27][1] = "La cabecera se ha complicado y ha crecido bastante, al tener que incorporar algunos elementos como la seguridad y el esquema de direccionamiento extendido. El tama&ntilde;o ahora es de 64 bytes frente a los 20 bytes de IPv4";
 choices[27][2] = "Las nuevas direcciones tienen 20 bytes";
 choices[27][3] = "Todas son incorrectas";
 answers[27] = 0;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4477. ";
 preguntaids[27] = 4477


//  Id pregunta: 4452 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;A qu&eacute; nivel del modelo OSI corresponde la funci&oacute;n de detecci&oacute;n de colisiones en los sistemas CSMA/CD?:";
 choices[28]= new Array();
 choices[28][0] = "Nivel 1 F&iacute;sico";
 choices[28][1] = "Nivel 2 Enlace";
 choices[28][2] = "Nivel 3 Red";
 choices[28][3] = "Nivel 4 Transporte";
 answers[28] = 0;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4452. Es debatible la respuesta, pero el nivel fisico en su adaptaci&oacute;n al medio f&iacute;sico de comunicaci&oacute;n puede estar capacitado para detectar colisiones.Por ejemplo, un hub trabaja en capa f&iacute;sica y detecta colisiones";
 preguntaids[28] = 4452


//  Id pregunta: 4492 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[29]= new Array();
 choices[29][0] = "Los hubs o concentradores se suelen usar para implementar topolog&iacute;as en estrella f&iacute;sica, pero funcionando como un anillo o como un bus l&oacute;gico";
 choices[29][1] = "Los repetidores &uacute;nicamente sirven para repetir la se&ntilde;al transmitida evitando su atenuaci&oacute;n, ampliando as&iacute; la longitud del cable que soporta la red";
 choices[29][2] = "Los puentes ayudan a resolver el problema de limitaci&oacute;n de distancias junto con el de limitaci&oacute;n del n&uacute;mero de nodos en una red";
 choices[29][3] = "Las pasarelas sirven principalmente para enlazar redes de similares caracter&iacute;sticas";
 answers[29] = 3;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4492. ";
 preguntaids[29] = 4492


//  Id pregunta: 4460 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;C&oacute;mo se comunican una sonda RMON y un agente RMON?:";
 choices[30]= new Array();
 choices[30][0] = "Mediante mensajes SNMP";
 choices[30][1] = "Mediante mensajes LAP-B";
 choices[30][2] = "Mediante mensajes CMIP";
 choices[30][3] = "Mediante Data Streams";
 answers[30] = 0;
 units[30] = ['114'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4460. ";
 preguntaids[30] = 4460


//  Id pregunta: 4445 Año de creación de pregunta: 2002
 questions[31]= "32)  Respecto a los buscadores de internet:";
 choices[31]= new Array();
 choices[31][0] = "los basados en el modelo enciclopedia clasifican las p&aacute;ginas seg&uacute;n su contenido sint&aacute;ctico";
 choices[31][1] = "los basados en palabras clave construyen tablas o &iacute;ndices inversos a partir de las palabras clave de un texto";
 choices[31][2] = "los metabuscadores, al usar varios buscadores simult&aacute;neamente, son mejores que todos los buscadores que usan juntos";
 choices[31][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[31] = 1;
 units[31] = ['103'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4445. ";
 preguntaids[31] = 4445


//  Id pregunta: 4473 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Cu&aacute;l de estas afirmaciones no es cierta para un red de conmutaci&oacute;n de paquetes en modo circuito virtual?:";
 choices[32]= new Array();
 choices[32][0] = "La red se asegura de que el orden de entrega de los paquetes es correcto";
 choices[32][1] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 choices[32][2] = "El circuito l&oacute;gico establecido dura lo que dura la llamada";
 choices[32][3] = "Es necesario liberar el circuito virtual permanente para finalizar la llamada";
 answers[32] = 3;
 units[32] = ['102'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4473. ";
 preguntaids[32] = 4473


//  Id pregunta: 4455 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;A qu&eacute; nivel OSI hace referencia la norma RS-232-C?:";
 choices[33]= new Array();
 choices[33][0] = "Nivel 3";
 choices[33][1] = "Nivel 2";
 choices[33][2] = "Nivel 1";
 choices[33][3] = "No se puede identificar con ninguno de los niveles OSI ya que no est&aacute; reconocido como est&aacute;ndar &lsquo;de jure&rsquo;";
 answers[33] = 2;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4455. ";
 preguntaids[33] = 4455


//  Id pregunta: 4466 Año de creación de pregunta: 2002
 questions[34]= "35)  &iquest;C&oacute;mo se llaman los paquetes de longitud fija en ATM?:";
 choices[34]= new Array();
 choices[34][0] = "Pulsos";
 choices[34][1] = "Tramas";
 choices[34][2] = "Celdas";
 choices[34][3] = "R&aacute;fagas";
 answers[34] = 2;
 units[34] = ['107'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4466. ";
 preguntaids[34] = 4466


//  Id pregunta: 4453 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;A qu&eacute; nivel ISO-OSI operan los bridges (puentes)?:";
 choices[35]= new Array();
 choices[35][0] = "A nivel f&iacute;sico";
 choices[35][1] = "A nivel de red";
 choices[35][2] = "A nivel de enlace";
 choices[35][3] = "A nivel de transporte";
 answers[35] = 2;
 units[35] = ['105'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4453. ";
 preguntaids[35] = 4453


//  Id pregunta: 4462 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;C&oacute;mo se denominan en una red UMTS los componentes responsables de la decisiones de &quot;handover&quot;?:";
 choices[36]= new Array();
 choices[36][0] = "UTRAN";
 choices[36][1] = "Nodos-B";
 choices[36][2] = "RNC";
 choices[36][3] = "RNS";
 answers[36] = 2;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4462. ";
 preguntaids[36] = 4462


//  Id pregunta: 4449 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;A qu&eacute; est&aacute;ndar IEEE 802 corresponde el siguiente grupo de caracter&iacute;sticas: &lsquo;Mecanismo de acceso al medio por paso de testigo; topolog&iacute;a en bus l&oacute;gico; contiene las interfaces entre MAC y LLC, as&iacute; como las primitivas de servicio entre MAC y nivel f&iacute;sico&rsquo;?";
 choices[37]= new Array();
 choices[37][0] = "802.2";
 choices[37][1] = "802.4";
 choices[37][2] = "802.6";
 choices[37][3] = "No existe ning&uacute;n est&aacute;ndar IEEE que trate esas caracter&iacute;sticas";
 answers[37] = 3;
 units[37] = ['102'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4449. El IEE 802.4 es un paso de testigo en Bus (Topolog&iacute;a F&iacute;sica Bus y L&oacute;gica en Anillo)";
 preguntaids[37] = 4449


//  Id pregunta: 4424 Año de creación de pregunta: 2005
 questions[38]= "39)  La intrusi&oacute;n de un caballo de troya (Trojan Horse) en un ordenador puede afectar, en primer lugar a:";
 choices[38]= new Array();
 choices[38][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[38][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[38][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[38][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[38] = 0;
 units[38] = ['120'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4424. ";
 preguntaids[38] = 4424


//  Id pregunta: 4487 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de la seguridad en el correo electr&oacute;nico?:";
 choices[39]= new Array();
 choices[39][0] = "Los usuarios MOSS y PEM necesitan certificados X.509";
 choices[39][1] = "PEM requiere que primero se firme el contenido del correo electr&oacute;nico y, a continuaci&oacute;n, se encripte";
 choices[39][2] = "PEM restringe su uso al entorno texto";
 choices[39][3] = "La extension de PEM con MIME se denomina MOSS";
 answers[39] = 0;
 units[39] = ['116'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4487. ";
 preguntaids[39] = 4487


//  Id pregunta: 4494 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones referidas al modelo de referencia de interconexi&oacute;n de sistemas abiertos de ISO es err&oacute;nea?:";
 choices[40]= new Array();
 choices[40][0] = "El nivel de presentaci&oacute;n da servicios al nivel de aplicaci&oacute;n y solicita revisi&oacute;n a trav&eacute;s de primitivas al nivel de sesi&oacute;n";
 choices[40][1] = "El bloque de transporte est&aacute; formado por los niveles f&iacute;sico, enlace, red y transporte";
 choices[40][2] = "El protocolo de nivel de presentaci&oacute;n regula el di&aacute;logo entre dos entes de nivel 5";
 choices[40][3] = "El nivel de red da servicio al nivel de transporte y solicita servicios del nivel enlace";
 answers[40] = 2;
 units[40] = ['105'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4494. Los tres niveles inferiores (f&iacute;sico, de enlace, de red) constituyen el bloque de transmisi&oacute;n. (depenndientes de la red de conmutaci&oacute;n) y los tres superiores est&aacute;n orientados a la aplicaci&oacute;n (funciones de comunicaci&oacute;n)";
 preguntaids[40] = 4494


//  Id pregunta: 4468 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Cu&aacute; de los siguientes no es un servicio del nivel de enlace de datos del modelo de referencia OSI?:";
 choices[41]= new Array();
 choices[41][0] = "Establecimiento y liberaci&oacute;n de un enlace de datos";
 choices[41][1] = "Control de la transmisi&oacute;n y recuperaci&oacute;n de fallos";
 choices[41][2] = "Gesti&oacute;n del propio nivel";
 choices[41][3] = "Identificaci&oacute;n de circuitos de datos";
 answers[41] = 3;
 units[41] = ['105'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4468. ";
 preguntaids[41] = 4468


//  Id pregunta: 4439 Año de creación de pregunta: 2002
 questions[42]= "43)  Una Bridge CA:";
 choices[42]= new Array();
 choices[42][0] = "Es un dispositivo de nivel 3 (Red) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inal&aacute;mbrica y una terrestre";
 choices[42][1] = "Es un dispositivo de nivel 2 (Enlace) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inal&aacute;mbrica y una terrestre";
 choices[42][2] = "Es una autoridad de certificaci&oacute;n que tiene certificados cruzados con otras muchas CA, pero que no expide certificados, simplemente vale para hacer que los de las otras CA sean interoperables entre si";
 choices[42][3] = "Todas son falsas";
 answers[42] = 2;
 units[42] = ['102'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4439. ";
 preguntaids[42] = 4439


//  Id pregunta: 4436 Año de creación de pregunta: 2005
 questions[43]= "44)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un hacker en un servidor web afecta a:";
 choices[43]= new Array();
 choices[43][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[43][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[43][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[43][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[43] = 0;
 units[43] = ['120'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4436. ";
 preguntaids[43] = 4436


//  Id pregunta: 4429 Año de creación de pregunta: 2002
 questions[44]= "45)  Los sistemas de multiplexaci&oacute;n por divisi&oacute;n en frecuencia, respecto a los por divisi&oacute;n en el tiempo:";
 choices[44]= new Array();
 choices[44][0] = "Tienen problemas de diafon&iacute;a, por lo que se dejan espacios de guarda";
 choices[44][1] = "Utilizan el ancho de banda completo del canal con una duraci&oacute;n fija";
 choices[44][2] = "No utilizan filtros";
 choices[44][3] = "Utilizan antenas de tipo dipolo";
 answers[44] = 0;
 units[44] = ['117'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4429. ";
 preguntaids[44] = 4429


//  Id pregunta: 4476 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguentes es una de las ventajas de utilizar fibra &oacute;ptica, frente a la utilizaci&oacute;n de cable en una red de &aacute;rea local?:";
 choices[45]= new Array();
 choices[45][0] = "Dispositivos y adaptadores m&aacute;s baratos";
 choices[45][1] = "Menor n&uacute;mero de bytes necesarios para obtener el sincronismo";
 choices[45][2] = "Mayor confidencialidad de la informaci&oacute;n que circula";
 choices[45][3] = "Menor ancho de banda";
 answers[45] = 2;
 units[45] = ['106'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4476. ";
 preguntaids[45] = 4476


//  Id pregunta: 4443 Año de creación de pregunta: 2002
 questions[46]= "47)  Los sistemas de recuperaci&oacute;n de fallos hardware se basan siempre en:";
 choices[46]= new Array();
 choices[46][0] = "La redundancia del equipo o empleo de equipos fault-tolerant";
 choices[46][1] = "El establecimiento de una pol&iacute;tica de respaldo rigurosa";
 choices[46][2] = "Una pol&iacute;tica de mantenimiento de equipos adecuada";
 choices[46][3] = "Evitar manipulaciones indebidas en la instalaci&oacute;n inform&aacute;tica";
 answers[46] = 0;
 units[46] = ['119'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4443. ";
 preguntaids[46] = 4443


//  Id pregunta: 4475 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Cu&aacute;l de las respuestas siguientes no se aplica a los servicios de red orientados a conexi&oacute;n?:";
 choices[47]= new Array();
 choices[47][0] = "Requiere que todas las conexiones sean expl&iacute;citamente establecidas y terminadas";
 choices[47][1] = "Requiere que a cada paquete se le a&ntilde;ada toda la direcci&oacute;n de encaminamiento antes de transmitirlo";
 choices[47][2] = "Predetermina el path desde la fuente al destino antes de transmitir los datos";
 choices[47][3] = "Reserva los recursos de red antes de transmitir los datos";
 answers[47] = 1;
 units[47] = ['112'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4475. ";
 preguntaids[47] = 4475


//  Id pregunta: 4426 Año de creación de pregunta: 2005
 questions[48]= "49)  La inundaci&oacute;n de un buz&oacute;n de correo electr&oacute;nico con un gran n&uacute;mero de mensajes (e-mail spamming) afecta a:";
 choices[48]= new Array();
 choices[48][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[48][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[48][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[48][3] = "Las respuestas &lsquo;c&rsquo; y &lsquo;d&rsquo; son correctas";
 answers[48] = 1;
 units[48] = ['120'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4426. ";
 preguntaids[48] = 4426


//  Id pregunta: 4467 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;C&oacute;mo se suele representar la trama de un STM-1 en SDH?";
 choices[49]= new Array();
 choices[49][0] = "como una fila de 2430 octetos separados por bloques funcionales";
 choices[49][1] = "como una matriz de 270 filas y 9 columnas de octetos separados en bloques funcionales";
 choices[49][2] = "como una columna de 2430 octetos separados por bloques funcionales";
 choices[49][3] = "como una matriz de 270 columnas y 9 filas de octetos separados en bloques funcionales";
 answers[49] = 3;
 units[49] = ['107'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4467. ";
 preguntaids[49] = 4467


//  Id pregunta: 4486 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo OSI de ISO?";
 choices[50]= new Array();
 choices[50][0] = "El modelo no especifica relaci&oacute;n de ning&uacute;n tipo ni con lenguajes de programaci&oacute;n ni con sistemas operativos";
 choices[50][1] = "El modelo no contempla aspectos relativos a los interfaces de la aplicaci&oacute;n ni a los usuarios";
 choices[50][2] = "El modelo describe el comportamiento externo y la estructura interna de los sistemas";
 choices[50][3] = "Todas las respuestas anteriores son falsas";
 answers[50] = 2;
 units[50] = ['105'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4486. ";
 preguntaids[50] = 4486


//  Id pregunta: 4456 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN con CSMA/CD?:";
 choices[51]= new Array();
 choices[51][0] = "802.1";
 choices[51][1] = "802.2";
 choices[51][2] = "802.3";
 choices[51][3] = "802.4";
 answers[51] = 2;
 units[51] = ['105'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4456. ";
 preguntaids[51] = 4456


//  Id pregunta: 4484 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a las distintas formas de codificaci&oacute;n?:";
 choices[52]= new Array();
 choices[52][0] = "La codificaci&oacute;n aritm&eacute;tica es m&aacute;s eficiente (en bits/s&iacute;mbolo) que la de Huffman";
 choices[52][1] = "La codificaci&oacute;n de Huffman utiliza los c&oacute;digos m&aacute;s largos para los s&iacute;mbolos m&aacute;s improbables";
 choices[52][2] = "La codificaci&oacute;n de Huffman codifica cada s&iacute;mbolo de forma independiente";
 choices[52][3] = "La codificaci&oacute;n de Huffman utiliza c&oacute;digos de longitud uniforme para representar los diferentes s&iacute;mbolos";
 answers[52] = 3;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4484. ";
 preguntaids[52] = 4484


//  Id pregunta: 4495 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto de los protocolos de gesti&oacute;n de red SNMP y CMIP/CMIS no es cierta?:";
 choices[53]= new Array();
 choices[53][0] = "CMIS/CMIP soporta una arquitectura de objetos (entidades gestionables) m&aacute;s complejos que SNMP";
 choices[53][1] = "CMIS/CMIP contiene las especificaciones para el uso de protocolos SNMP sobre redes OSI mediante la norma CMOT";
 choices[53][2] = "Las aplicaciones de gesti&oacute;n de red basadas en protocolos SNMP est&aacute;n mucho m&aacute;s extendidas en el mercado que las basadas en CMIP";
 choices[53][3] = "CMIS/CMIP es desarrollo conjunto de CCITT e ISO, mientras que SNMP es producto de IETF";
 answers[53] = 1;
 units[53] = ['105'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4495. ";
 preguntaids[53] = 4495


//  Id pregunta: 4474 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de las respuestas siguientes es verdadera sobre las direcciones disponibles en clases A, B y C en redes IP?:";
 choices[54]= new Array();
 choices[54][0] = "El n&uacute;mero de direcciones para sistemas por red decrece de redes clase A a las de clase C";
 choices[54][1] = "El n&uacute;mero de direcciones disponibles para redes decrece de las de clases A a las de clase C";
 choices[54][2] = "Las direcciones de clase C son adecuadas para organizaciones muy grandes, mientras que las de clase B son m&aacute;s adecuadas para compa&ntilde;ias peque&ntilde;as";
 choices[54][3] = "El rango de direcciones A es num&eacute;ricamente el mayor mientras que las de clase C es numericamente el menor";
 answers[54] = 0;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4474. ";
 preguntaids[54] = 4474


//  Id pregunta: 4450 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar IMAP-4?:";
 choices[55]= new Array();
 choices[55][0] = "Correo electr&oacute;nico";
 choices[55][1] = "Compresi&oacute;n de datos";
 choices[55][2] = "Directorio electr&oacute;nico";
 choices[55][3] = "Protocolo de transporte OSI";
 answers[55] = 0;
 units[55] = ['116'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4450. ";
 preguntaids[55] = 4450


//  Id pregunta: 4458 Año de creación de pregunta: 2002
 questions[56]= "57)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[56]= new Array();
 choices[56][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[56][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[56][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[56][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[56] = 1;
 units[56] = ['104'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4458. ";
 preguntaids[56] = 4458


//  Id pregunta: 4498 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes capas del modelo OSI se encarga de establecer puntos intermedios de sincronizaci&oacute;n para evitar p&eacute;rdida de informaci&oacute;n en caso de ca&iacute;das de la comunicaci&oacute;n?:";
 choices[57]= new Array();
 choices[57][0] = "La capa de enlace";
 choices[57][1] = "La capa de red";
 choices[57][2] = "La capa de transporte";
 choices[57][3] = "La capa de sesi&oacute;n";
 answers[57] = 3;
 units[57] = ['105'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4498. ";
 preguntaids[57] = 4498


//  Id pregunta: 4464 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;C&oacute;mo se identifica generalmente una estaci&oacute;n Ethernet?:";
 choices[58]= new Array();
 choices[58][0] = "Mediante la direcci&oacute;n Ethernet que el gestor de la red le asigna";
 choices[58][1] = "Mediante la configuraci&oacute;n de su sistema operativo para configurar su identificaci&oacute;n en la red";
 choices[58][2] = "Mediante la asignaci&oacute;n por el fabricante de la tarjeta de red de una direcci&oacute;n Ethernet &uacute;nica y exclusiva";
 choices[58][3] = "Mediante la asignaci&oacute;n aleatoria que cada usuario de la estaci&oacute;n puede realizar";
 answers[58] = 2;
 units[58] = ['102'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4464. La direcci&oacute;n MAC ,compuesta de 48 bits, identifica un&iacute;vocamente a la tarjeta de red. Los 24 primeros bits son asignados por el IEE y los 24 &uacute;ltimos por el fabricante";
 preguntaids[58] = 4464


//  Id pregunta: 4485 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a los elementos de red?:";
 choices[59]= new Array();
 choices[59][0] = "Los bridges usan la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 choices[59][1] = "Los bridges generan autom&aacute;ticamente sus propias tablas (puerto, direcci&oacute;n MAC) leyendo las direcciones MAC del remitente de cada paquete recibido";
 choices[59][2] = "Si un bridge recibe un paquete cuya direcci&oacute;n MAC de destino no tiene un puerto asociado en su tabla, lo reenv&iacute;a por todos sus puertos (flooding)";
 choices[59][3] = "Los routers, para ser compatibles con distintos protocolos de acceso al medio, utilizan tambi&eacute;n la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 answers[59] = 3;
 units[59] = ['104'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4485. ";
 preguntaids[59] = 4485


//  Id pregunta: 4480 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[60]= new Array();
 choices[60][0] = "El tama&ntilde;o m&aacute;ximo del mensaje a transmitir entre aplicaci&oacute;n origen y destino, depende del tama&ntilde;o m&aacute;ximo del paquete, que viene impuesto por la red";
 choices[60][1] = "No se puede establecer dos circuitos virtuales simult&aacute;neos entere un mismo origen y un mismo destino, ya que la red no podr&iacute;a coordinar dos n&uacute;meros de canal l&oacute;gico con un mismo destino";
 choices[60][2] = "Siempre que se reduzca el tama&ntilde;o de los paquetes, el rendimiento (bytes de informaci&oacute;n transmitidos por unidad de tiempo) disminuir&aacute;, ya que se env&iacute;an los mismo bytes de cabecera, para menos bytes de informaci&oacute;n";
 choices[60][3] = "Todas las respuestas anteriores son falsas";
 answers[60] = 2;
 units[60] = ['102'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4480. ";
 preguntaids[60] = 4480


//  Id pregunta: 4489 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto del correo electr&oacute;nico?:";
 choices[61]= new Array();
 choices[61][0] = "Seg&uacute;n MIME los textos se codifican en 7 bits";
 choices[61][1] = "MIME puede encapsular datos EDI";
 choices[61][2] = "SMTP no soporta servicios de seguridad";
 choices[61][3] = "MIME proporciona seguridad";
 answers[61] = 3;
 units[61] = ['116'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4489. ";
 preguntaids[61] = 4489


//  Id pregunta: 4454 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;A qu&eacute; nivel OSI corresponden las funciones de encaminamiento?:";
 choices[62]= new Array();
 choices[62][0] = "El nivel de enlace";
 choices[62][1] = "El nivel de red";
 choices[62][2] = "El nivel de transporte";
 choices[62][3] = "El nivel de sesi&oacute;n";
 answers[62] = 1;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4454. ";
 preguntaids[62] = 4454


//  Id pregunta: 4482 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta cuando se estudia la relaci&oacute;n entre la velocidad de transmisi&oacute;n de una se&ntilde;al digital y la frecuencia m&aacute;xima de la se&ntilde;al?:";
 choices[63]= new Array();
 choices[63][0] = "No existe ninguna relaci&oacute;n directa";
 choices[63][1] = "Cuanto mayor sea el ancho de banda de la se&ntilde;al, menor es la velocidad de transmisi&oacute;n";
 choices[63][2] = "Cuanto mayor sea la velocidad de transmisi&oacute;n, menor es el ancho de banda";
 choices[63][3] = "Cuanto menor sea el ancho de banda, menor es la velocidad de transmisi&oacute;n";
 answers[63] = 3;
 units[63] = ['104'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4482. ";
 preguntaids[63] = 4482


//  Id pregunta: 4490 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si hablamos de sincronizaci&oacute;n?:";
 choices[64]= new Array();
 choices[64][0] = "En la transmisi&oacute;n as&iacute;ncrona, la sincronizaci&oacute;n se realiza mediante los bits de arranque y parada";
 choices[64][1] = "En la transmisi&oacute;n s&iacute;ncrona, la sincronizaci&oacute;n se restablece con cada car&aacute;cter retransmitido";
 choices[64][2] = "Las se&ntilde;ales is&oacute;cronas requieren una sincronizaci&oacute;n interna, de modo que las sucesivas muestras se transmitan a intervalos fijos a partir de la primera";
 choices[64][3] = "En una red plesi&oacute;crona los equipos se sincronizan a partir de relojes independientes de similar precisi&oacute;n y estabilidad";
 answers[64] = 1;
 units[64] = ['102'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4490. ";
 preguntaids[64] = 4490


//  Id pregunta: 4501 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un protocolo de transmisi&oacute;n orientado a bit?:";
 choices[65]= new Array();
 choices[65][0] = "Para detectar el principio y el final de una trama se utiliza una secuencia de bits, llamada bandera";
 choices[65][1] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n mensajes constituidos por uno o varios caracteres, llamados de control de la comunicaci&oacute;n, tomados de un c&oacute;digo preestablecido";
 choices[65][2] = "La trama es de formato fijo, constituida por campos de longitud determinada, excepto el campo de informaci&oacute;n";
 choices[65][3] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n campos de control con bits (o grupos de bits) cuyo significado est&aacute; dado por su posici&oacute;n";
 answers[65] = 1;
 units[65] = ['112'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4501. ";
 preguntaids[65] = 4501


//  Id pregunta: 4491 Año de creación de pregunta: 2002
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si nos referimos a la modulaci&oacute;n?:";
 choices[66]= new Array();
 choices[66][0] = "La modulaci&oacute;n/desmodulaci&oacute;n se realiza asociando los s&iacute;mbolos de un alfabeto a distintas se&ntilde;ales anal&oacute;gicas";
 choices[66][1] = "La modulaci&oacute;n FSK no afecta a la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[66][2] = "La modulaci&oacute;n QPSK act&uacute;a sobre la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[66][3] = "La modulaci&oacute;n QAM act&uacute;a sobre la fase y la amplitud de la se&ntilde;al anal&oacute;gica";
 answers[66] = 2;
 units[66] = ['102'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4491. ";
 preguntaids[66] = 4491


//  Id pregunta: 4451 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;A qu&eacute; nivel de OSI es equivalente el protocolo IP (Internet Protocol)?:";
 choices[67]= new Array();
 choices[67][0] = "Enlace";
 choices[67][1] = "Red";
 choices[67][2] = "Transporte";
 choices[67][3] = "Comunicaci&oacute;n";
 answers[67] = 1;
 units[67] = ['105'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4451. ";
 preguntaids[67] = 4451


//  Id pregunta: 4497 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[68]= new Array();
 choices[68][0] = "SMTP-X.400";
 choices[68][1] = "TELNET-VT";
 choices[68][2] = "FTAM-FTP";
 choices[68][3] = "X.500-SNMP";
 answers[68] = 3;
 units[68] = ['105'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4497. ";
 preguntaids[68] = 4497


//  Id pregunta: 4500 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[69]= new Array();
 choices[69][0] = "El camino queda establecido durante toda la comunicaci&oacute;n";
 choices[69][1] = "La longitud de las unidades de datos est&aacute; limitada";
 choices[69][2] = "Se recogen en el est&aacute;ndar X.25 de la ITU-T";
 choices[69][3] = "Se han definido dos modos b&aacute;sicos de operaci&oacute;n: datagrama y circuito virtual";
 answers[69] = 0;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4500. ";
 preguntaids[69] = 4500


//  Id pregunta: 4461 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;C&oacute;mo se denominan en una red UMTS los componentes equivalentes a las BTS  de una red GSM?:";
 choices[70]= new Array();
 choices[70][0] = "UTRAN";
 choices[70][1] = "Nodos-B";
 choices[70][2] = "RNC";
 choices[70][3] = "RNS";
 answers[70] = 1;
 units[70] = ['117'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4461. ";
 preguntaids[70] = 4461


//  Id pregunta: 4447 Año de creación de pregunta: 2002
 questions[71]= "72)  &quot;Bus lineal al que est&aacute;n conectadas varias estaciones y que termina en los extremos&quot; se corresponde con la definici&oacute;n de:";
 choices[71]= new Array();
 choices[71][0] = "intranet";
 choices[71][1] = "segmento";
 choices[71][2] = "pasarela";
 choices[71][3] = "puente";
 answers[71] = 1;
 units[71] = ['102'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4447. ";
 preguntaids[71] = 4447


//  Id pregunta: 4469 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para un red de conmutaci&oacute;n de paquetes en modo datagrama?:";
 choices[72]= new Array();
 choices[72][0] = "Un paquete enviado posteriormente no puede llegar antes que otro enviado con anterioridad";
 choices[72][1] = "La red reordena los paquetes y los entrega en el destino en el orden de llegada";
 choices[72][2] = "Cada paquete lleva en la cabecera informaci&oacute;n acerca del origen y el destino del paquete";
 choices[72][3] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 answers[72] = 2;
 units[72] = ['102'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4469. ";
 preguntaids[72] = 4469


//  Id pregunta: 4478 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a alguno de los principios en virtud de los cuales se han definido siete niveles en el Modelo de Referencia OSI?:";
 choices[73]= new Array();
 choices[73][0] = "Definir un n&uacute;mero de capas muy elevado, de modo que la tarea de integrar las capas no sea m&aacute;s dif&iacute;cil de lo estrictamente necesario";
 choices[73][1] = "Crear niveles separados para aquellas funciones que son manifiestamente diferentes por raz&oacute;n del proceso realizado y de la tecnolog&iacute;a involucrada";
 choices[73][2] = "Crear una nueva capa siempre que exista necesidad de fragmentar de nuevo los datos en PDUs de menor tama&ntilde;o para de este modo optimizar el uso de la red";
 choices[73][3] = "Crear una nueva capa siempre que exista necesidad de un nuevo tipo de aplicaci&oacute;n final entre sistemas";
 answers[73] = 1;
 units[73] = ['105'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4478. ";
 preguntaids[73] = 4478


//  Id pregunta: 4488 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de los circuitos virtuales?:";
 choices[74]= new Array();
 choices[74][0] = "Un circuito virtual es un enlace dedicado o temporal entre dos o m&aacute;s estaciones finales en una malla de conmutaci&oacute;n de paquetes";
 choices[74][1] = "Un circuito virtual proporciona una sesi&oacute;n orientada a conexi&oacute;n entre dos puntos finales";
 choices[74][2] = "En circuito virtual conmutado las conexiones duran s&oacute;lo mientras se necesiten y se desconectan cuando la sesi&oacute;n se completa";
 choices[74][3] = "Por un mismo circuito virtual conmutado puede establecerse simult&aacute;neamente enlaces con diferentes estaciones finales de la red";
 answers[74] = 3;
 units[74] = ['102'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4488. ";
 preguntaids[74] = 4488


