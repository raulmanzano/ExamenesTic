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
//  Id pregunta: 9751 Año de creación de pregunta: 2014
 questions[0]= "1)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[0]= new Array();
 choices[0][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[0][1] = "En MPLS el camino establecido es bidireccional";
 choices[0][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[0][3] = "El campo de etiqueta en MPLS es de 20 bits";
 answers[0] = 1;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9751. ";
 preguntaids[0] = 9751


//  Id pregunta: 9584 Año de creación de pregunta: 2014
 questions[1]= "2)  En la administraci&oacute;n de un dispositivo switch &iquest;qu&eacute; es un trunk?";
 choices[1]= new Array();
 choices[1][0] = "Un puerto de velocidad GigaEthernet o 10 GigaEthernet.";
 choices[1][1] = "Un enlace que agrega tr&aacute;fico de varias VLANs.";
 choices[1][2] = "Un adaptador fibra - par trenzado.";
 choices[1][3] = "Una versi&oacute;n estable del firmware del dispositivo.";
 answers[1] = 1;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9584. TIC A2 2013 libre";
 preguntaids[1] = 9584


//  Id pregunta: 9600 Año de creación de pregunta: 2014
 questions[2]= "3)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[2]= new Array();
 choices[2][0] = "4 bytes.";
 choices[2][1] = "6 bytes.";
 choices[2][2] = "12 bytes.";
 choices[2][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[2] = 0;
 units[2] = ['112'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9600. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[2] = 9600


//  Id pregunta: 9733 Año de creación de pregunta: 2014
 questions[3]= "4)  Cu&aacute;l es el periodo m&aacute;ximo de inhabilitaci&oacute;n del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas al que pueden dar lugar las infracciones muy graves:";
 choices[3]= new Array();
 choices[3][0] = "10 a&ntilde;os";
 choices[3][1] = "5 a&ntilde;os";
 choices[3][2] = "3 a&ntilde;os";
 choices[3][3] = "1 a&ntilde;o";
 answers[3] = 1;
 units[3] = ['121'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9733. ";
 preguntaids[3] = 9733


//  Id pregunta: 9754 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Cu&aacute;l de estos est&aacute;ndares relacionados con Ethernet permite enrutamiento multipath?";
 choices[4]= new Array();
 choices[4][0] = "802.1aq (Shortest Path Bridging)";
 choices[4][1] = "802.D (Spanning Tree Protocol)";
 choices[4][2] = "802.1s, incluido en 802.1Q-2005 (Multiple Spanning Tree Protocol)";
 choices[4][3] = "802.1w (Rapid Spanning Tree Protocol)";
 answers[4] = 0;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9754. Shortest Path Bridging sustituye a los antiguos STP(IEEE 802.1D), RSTP (IEEE 802.1w) y MSTP (IEEE 802.1s) que permit&iacute;an un &uacute;nico camino activo para evitar bucles. SPB permite varios caminos activos lo que posibilita hasta m&aacute;s de 16 millones de VLAN.";
 preguntaids[4] = 9754


//  Id pregunta: 9732 Año de creación de pregunta: 2014
 questions[5]= "6)  En relaci&oacute;n al uso del dominio p&uacute;blico radioel&eacute;ctrico, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[5]= new Array();
 choices[5][0] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico no precisar&aacute; de ning&uacute;n t&iacute;tulo habilitante";
 choices[5][1] = "El uso especial del dominio p&uacute;blico radioel&eacute;ctrico precisar&aacute; de una autorizaci&oacute;n general.";
 choices[5][2] = "El derecho de uso especial por radioaficionados u otros sin contenido econ&oacute;mico no precisar&aacute; de t&iacute;tulo habilitante";
 choices[5][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico requerir&aacute; de una concesi&oacute;n administrativa";
 answers[5] = 2;
 units[5] = ['121'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9732. ";
 preguntaids[5] = 9732


//  Id pregunta: 9604 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[6]= new Array();
 choices[6][0] = "110";
 choices[6][1] = "119";
 choices[6][2] = "161";
 choices[6][3] = "25";
 answers[6] = 2;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9604. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[6] = 9604


//  Id pregunta: 9499 Año de creación de pregunta: 2014
 questions[7]= "8)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[7]= new Array();
 choices[7][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[7][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[7][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[7][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[7] = 3;
 units[7] = ['117'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 9499. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";
 preguntaids[7] = 9499


//  Id pregunta: 9576 Año de creación de pregunta: 2010
 questions[8]= "9)  Una desventaja de la topolog&iacute;a f&iacute;sica de bus es que:";
 choices[8]= new Array();
 choices[8][0] = "Un fallo en el concentrador provoca el aislamiento de todos los nodos a &eacute;l conectados.";
 choices[8][1] = "Requiere m&aacute;s cable que la topolog&iacute;a en estrella.";
 choices[8][2] = "Es vulnerable a la atenuaci&oacute;n, ya que pierde se&ntilde;al a trav&eacute;s de la distancia del cable.";
 choices[8][3] = "Es compleja y dif&iacute;cil de arreglar.";
 answers[8] = 2;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 9576. TIC A2 2013 libre";
 preguntaids[8] = 9576


//  Id pregunta: 9723 Año de creación de pregunta: 2014
 questions[9]= "10)  Si el c&oacute;digo de respuesta de un servidor SMTP, que cumple la RFC 821, es 501, podemos decir que:";
 choices[9]= new Array();
 choices[9][0] = "La operaci&oacute;n se ha realizado con &eacute;xito.";
 choices[9][1] = "Se ha producido un Error Temporal. Es posible que, volver a mandar el comando, con el mismo formato pasado un tiempo, produzca un resultado satisfactorio";
 choices[9][2] = "Se ha producido un Error, debido a que los parametros del comando enviado no tienen la sintaxis correcta.";
 choices[9][3] = "No podemos decir nada";
 answers[9] = 2;
 units[9] = ['116'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9723. http://tools.ietf.org/html/rfc821#page-35";
 preguntaids[9] = 9723


//  Id pregunta: 9586 Año de creación de pregunta: 2014
 questions[10]= "11)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[10]= new Array();
 choices[10][0] = "15 bits.";
 choices[10][1] = "8 bits.";
 choices[10][2] = "10 bits.";
 choices[10][3] = "3 bits.";
 answers[10] = 1;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9586. TIC A2 2013 libre";
 preguntaids[10] = 9586


//  Id pregunta: 9495 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[11]= new Array();
 choices[11][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[11][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[11][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[11][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[11] = 3;
 units[11] = ['108'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9495. ";
 preguntaids[11] = 9495


//  Id pregunta: 9750 Año de creación de pregunta: 2014
 questions[12]= "13)  En IPv6, se&ntilde;ale el prefijo empleado para direcciones link-local:";
 choices[12]= new Array();
 choices[12][0] = "fd00::/8";
 choices[12][1] = "fe00::/64";
 choices[12][2] = "fe80::/64";
 choices[12][3] = "No existen las direcciones link-local en IPv6";
 answers[12] = 2;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9750. ";
 preguntaids[12] = 9750


//  Id pregunta: 9493 Año de creación de pregunta: 2014
 questions[13]= "14)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[13]= new Array();
 choices[13][0] = "3 Mbps";
 choices[13][1] = "2 Mbps";
 choices[13][2] = "5 Mbps";
 choices[13][3] = "1 Mbps";
 answers[13] = 0;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9493. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";
 preguntaids[13] = 9493


//  Id pregunta: 9725 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[14]= new Array();
 choices[14][0] = "I.413";
 choices[14][1] = "I.411";
 choices[14][2] = "I.431";
 choices[14][3] = "I.314";
 answers[14] = 0;
 units[14] = ['110'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9725. ";
 preguntaids[14] = 9725


//  Id pregunta: 9731 Año de creación de pregunta: 2014
 questions[15]= "16)  Cu&aacute;l es el plazo m&aacute;ximo en el cual Registro de Operadores dictar&aacute;n resoluci&oacute;n motivada cuando constate que una notificaci&oacute;n no re&uacute;ne los requisitos establecidos:";
 choices[15]= new Array();
 choices[15][0] = "10 d&iacute;as";
 choices[15][1] = "15 d&iacute;as";
 choices[15][2] = "1 mes";
 choices[15][3] = "3 meses";
 answers[15] = 1;
 units[15] = ['121'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9731. ";
 preguntaids[15] = 9731


//  Id pregunta: 9598 Año de creación de pregunta: 2014
 questions[16]= "17)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[16]= new Array();
 choices[16][0] = "Fibra &oacute;ptica.";
 choices[16][1] = "Mainframes.";
 choices[16][2] = "Buses PCI.";
 choices[16][3] = "Buses PCI.";
 answers[16] = 0;
 units[16] = ['104'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9598. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[16] = 9598


//  Id pregunta: 9599 Año de creación de pregunta: 2014
 questions[17]= "18)  Los conectores LC son:";
 choices[17]= new Array();
 choices[17][0] = "Conectores para PCI.";
 choices[17][1] = "Conectores de par trenzado.";
 choices[17][2] = "Conectores exclusivos para Mainframe.";
 choices[17][3] = "Conectores de fibra &oacute;ptica.";
 answers[17] = 3;
 units[17] = ['104'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9599. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[17] = 9599


//  Id pregunta: 9721 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;Cual es la RFC original del protocolo SMTP?";
 choices[18]= new Array();
 choices[18][0] = "821";
 choices[18][1] = "822";
 choices[18][2] = "823";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = 0;
 units[18] = ['116'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9721. ";
 preguntaids[18] = 9721


//  Id pregunta: 9605 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[19]= new Array();
 choices[19][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este par&aacute;metro.";
 choices[19][1] = "No, necesitar&iacute;a una base de datos externa para almacenarlo.";
 choices[19][2] = "Si, s&oacute;lo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[19][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[19] = 0;
 units[19] = ['114'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9605. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[19] = 9605


//  Id pregunta: 9706 Año de creación de pregunta: 2014
 questions[20]= "21)  Seg&uacute;n la Ley 9/2014, que tipo de infracci&oacute;n es: La realizaci&oacute;n de actividades sin disponer de la habilitaci&oacute;n oportuna en las materias reguladas por esta Ley, cuando legalmente sea necesaria.";
 choices[20]= new Array();
 choices[20][0] = "Muy Grave";
 choices[20][1] = "Grave";
 choices[20][2] = "Leve";
 choices[20][3] = "No es Infraccion";
 answers[20] = 0;
 units[20] = ['121'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9706. Art 76.1 de la Ley 9/2014";
 preguntaids[20] = 9706


//  Id pregunta: 9602 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;C&oacute;mo se llama la base de datos que tiene los par&aacute;metros de gesti&oacute;n de una red?";
 choices[21]= new Array();
 choices[21][0] = "MIB (Management Information Base).";
 choices[21][1] = "NMD (Network Management database).";
 choices[21][2] = "NMS (Network Management System).";
 choices[21][3] = "Ninguna de los anteriores.";
 answers[21] = 0;
 units[21] = ['114'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 9602. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[21] = 9602


//  Id pregunta: 9718 Año de creación de pregunta: 2014
 questions[22]= "23)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[22]= new Array();
 choices[22][0] = "ISO/IEC 11801";
 choices[22][1] = "EN 50173";
 choices[22][2] = "ISO/IEC 18101";
 choices[22][3] = "EN 50137";
 answers[22] = 0;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9718. ";
 preguntaids[22] = 9718


//  Id pregunta: 9492 Año de creación de pregunta: 2014
 questions[23]= "24)  &iquest;Cual de la siguientes t&eacute;cnicas de modulaci&oacute;n no es usada por las tecnolog&iacute;as xDSL?";
 choices[23]= new Array();
 choices[23][0] = "2B1Q";
 choices[23][1] = "CAP";
 choices[23][2] = "DMT";
 choices[23][3] = "WDM";
 answers[23] = 3;
 units[23] = ['106'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9492. La tecnolog&iacute;a usada en algunas xDSL es DWMT, no WDM";
 preguntaids[23] = 9492


//  Id pregunta: 9440 Año de creación de pregunta: 2014
 questions[24]= "25)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en:";
 choices[24]= new Array();
 choices[24][0] = "El elemento gestionado";
 choices[24][1] = "El nodo de gesti&oacute;n central";
 choices[24][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[24][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[24] = 0;
 units[24] = ['114'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9440. ";
 preguntaids[24] = 9440


//  Id pregunta: 9752 Año de creación de pregunta: 2014
 questions[25]= "26)  Se&ntilde;ale la respuesta correcta en lo referente a la detecci&oacute;n y correcci&oacute;n de errores en telecomunicaciones";
 choices[25]= new Array();
 choices[25][0] = "CRC (C&oacute;digo de Redundancia C&iacute;clico) permite detectar y corregir errores en recepci&oacute;n";
 choices[25][1] = "Un c&oacute;digo Hamming de distancia 3 permite detectar 2 errores y corregir 1";
 choices[25][2] = "Reed-Solomon solamente permite detectar errores, no corregirlos";
 choices[25][3] = "Todas las anteriores son incorrectas";
 answers[25] = 1;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9752. ";
 preguntaids[25] = 9752


//  Id pregunta: 9724 Año de creación de pregunta: 2014
 questions[26]= "27)  &iquest;Cual de los siguientes no es un protocolo de correo electr&oacute;nico?";
 choices[26]= new Array();
 choices[26][0] = "SMTP";
 choices[26][1] = "MIME";
 choices[26][2] = "POP2";
 choices[26][3] = "Todos lo son";
 answers[26] = 3;
 units[26] = ['116'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9724. POP2 es una versi&oacute;n obsoleta de POP, pero se pregunta por protocolos de correo. No por su actualidad o uso.";
 preguntaids[26] = 9724


//  Id pregunta: 9734 Año de creación de pregunta: 2014
 questions[27]= "28)  En relaci&oacute;n al Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[27]= new Array();
 choices[27][0] = "Es presidido por el Ministro de Industria, Energ&iacute;a y Turismo";
 choices[27][1] = "Es un &oacute;rgano asesor del Gobierno en materia de telecomunicaciones y sociedad de la informaci&oacute;n";
 choices[27][2] = "Su composici&oacute;n y su r&eacute;gimen se establecen mediante Orden Ministerial";
 choices[27][3] = "Sus miembros representar&aacute;n entre otros a los sindicatos";
 answers[27] = 2;
 units[27] = ['121'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9734. ";
 preguntaids[27] = 9734


//  Id pregunta: 9580 Año de creación de pregunta: 2014
 questions[28]= "29)  &iquest;Cu&aacute;l es el grupo de trabajo correspondiente al est&aacute;ndar WRAN (Wireless Regional Area Network)?:";
 choices[28]= new Array();
 choices[28][0] = "802.19";
 choices[28][1] = "802.2";
 choices[28][2] = "802.21";
 choices[28][3] = "802.22";
 answers[28] = 3;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9580. TIC A2 2013 libre";
 preguntaids[28] = 9580


//  Id pregunta: 9663 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[29]= new Array();
 choices[29][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga.";
 choices[29][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[29][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[29][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[29] = 1;
 units[29] = ['117'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9663. Examen TIC A1 2013";
 preguntaids[29] = 9663


//  Id pregunta: 9497 Año de creación de pregunta: 2014
 questions[30]= "31)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[30]= new Array();
 choices[30][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[30][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[30][2] = "Es compatible con las redes IEEE 802.16e";
 choices[30][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[30] = 2;
 units[30] = ['117'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 9497. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";
 preguntaids[30] = 9497


//  Id pregunta: 9707 Año de creación de pregunta: 2014
 questions[31]= "32)  Cual es el importe m&aacute;ximo de una sanci&oacute;n muy grave seg&uacute;n la Ley 9/2014, si no se puede calcular el beneficio bruto obtenido";
 choices[31]= new Array();
 choices[31][0] = "10 millones de euros";
 choices[31][1] = "No hay un l&iacute;mite";
 choices[31][2] = "20 millones de euros";
 choices[31][3] = "El qu&iacute;ntuplo del beneficio bruto obtenido";
 answers[31] = 2;
 units[31] = ['121'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 9707. Art 79.1.a) de la Ley 9/2014. La respuesta D no es correcta puesto que en la pregunta se especifica que no se puede calcular el beneficio bruto obtenido";
 preguntaids[31] = 9707


//  Id pregunta: 9727 Año de creación de pregunta: 2014
 questions[32]= "33)  &iquest;Cual de los siguientes no es un tipo de tr&aacute;fico de ATM?";
 choices[32]= new Array();
 choices[32][0] = "UBR";
 choices[32][1] = "VBR";
 choices[32][2] = "SBR";
 choices[32][3] = "CBR";
 answers[32] = 2;
 units[32] = ['107'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9727. ";
 preguntaids[32] = 9727


//  Id pregunta: 9448 Año de creación de pregunta: 2010
 questions[33]= "34)  La TDT utiliza como t&eacute;cnica de modulaci&oacute;n de nivel f&iacute;sico";
 choices[33]= new Array();
 choices[33][0] = "CDMA";
 choices[33][1] = "COFDM";
 choices[33][2] = "64-QAM";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = 1;
 units[33] = ['115'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9448. Ayuntamiento Madrid 2014";
 preguntaids[33] = 9448


//  Id pregunta: 9726 Año de creación de pregunta: 2014
 questions[34]= "35)  &iquest;Que estandar establece el formato de la numeracion, las direcciones email y las direcciones web?";
 choices[34]= new Array();
 choices[34][0] = "E.122";
 choices[34][1] = "E.123";
 choices[34][2] = "E.231";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = 1;
 units[34] = ['110'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 9726. ";
 preguntaids[34] = 9726


//  Id pregunta: 9581 Año de creación de pregunta: 2014
 questions[35]= "36)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha por contienda?";
 choices[35]= new Array();
 choices[35][0] = "Paso de testigo en anillo.";
 choices[35][1] = "CSMA no persistente.";
 choices[35][2] = "ALOHA ranurado.";
 choices[35][3] = "Contenci&oacute;n.";
 answers[35] = 1;
 units[35] = ['112'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 9581. TIC A2 2013 libre";
 preguntaids[35] = 9581


//  Id pregunta: 9444 Año de creación de pregunta: 2014
 questions[36]= "37)  &iquest;El reglamento de Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) se encuentra recogido en?:";
 choices[36]= new Array();
 choices[36][0] = "El Real Decreto 920 / 2006";
 choices[36][1] = "El Real Decreto 346 / 2011";
 choices[36][2] = "El Real Decreto 401 / 2003";
 choices[36][3] = "Ninguno de los anteriores";
 answers[36] = 1;
 units[36] = ['115'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 9444. Real Decreto 920/2006, de 28 de julio, por el que se aprueba el Reglamento general de prestaci&oacute;n del servicio de difusi&oacute;n de radio y televisi&oacute;n por cable; Real Decreto 401/2003: ICTs. Est&aacute; derogado;";
 preguntaids[36] = 9444


//  Id pregunta: 9583 Año de creación de pregunta: 2014
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[37]= new Array();
 choices[37][0] = "GETREQUEST PDU";
 choices[37][1] = "SETRESPONSE PDU";
 choices[37][2] = "RESPONSE PDU";
 choices[37][3] = "INFORMREQUEST PDU";
 answers[37] = 1;
 units[37] = ['114'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 9583. TIC A2 2013 libre";
 preguntaids[37] = 9583


//  Id pregunta: 9753 Año de creación de pregunta: 2014
 questions[38]= "39)  &iquest;Qu&eacute; cabeceras del datagrama IP son revisadas por los routers intermedios en IPv6?";
 choices[38]= new Array();
 choices[38][0] = "Todas las cabeceras";
 choices[38][1] = "Ninguna";
 choices[38][2] = "Todas las cabeceras menos las opcionales";
 choices[38][3] = "La cabecera hop-to-hop y el resto de cabeceras menos las cabeceras opcionales";
 answers[38] = 3;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9753. ";
 preguntaids[38] = 9753


//  Id pregunta: 9722 Año de creación de pregunta: 2014
 questions[39]= "40)  En la arquitectura X.400, &iquest;cual es el protocolo de comunicaci&oacute;n entre los Agentes de Usuario y el Repositorio de Mensajes?";
 choices[39]= new Array();
 choices[39][0] = "P2";
 choices[39][1] = "P7";
 choices[39][2] = "P3";
 choices[39][3] = "P1";
 answers[39] = 1;
 units[39] = ['116'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9722. http://www.x400.org/US/X400_Protocols.htm";
 preguntaids[39] = 9722


//  Id pregunta: 9445 Año de creación de pregunta: 2010
 questions[40]= "41)  Conforme a DOCSIS y EuroDOCSIS los canales de cable tienen un ancho de:";
 choices[40]= new Array();
 choices[40][0] = "8 MHz en Europa";
 choices[40][1] = "6 MHz en Norte Am&eacute;rica";
 choices[40][2] = "Las dos anteriores son ciertas";
 choices[40][3] = "Ninguno de los anteriores";
 answers[40] = 2;
 units[40] = ['115'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9445. ";
 preguntaids[40] = 9445


//  Id pregunta: 9498 Año de creación de pregunta: 2014
 questions[41]= "42)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[41]= new Array();
 choices[41][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[41][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[41][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[41][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[41] = 1;
 units[41] = ['117'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9498. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";
 preguntaids[41] = 9498


//  Id pregunta: 9447 Año de creación de pregunta: 2010
 questions[42]= "43)  El TS (Transport Stream) en MPEG-2:";
 choices[42]= new Array();
 choices[42][0] = "Su carga &uacute;til est&aacute; formada por paquetes de trenes elementales (Packetized elementary Streams, PES)";
 choices[42][1] = "Su tama&ntilde;o es de 188 bytes";
 choices[42][2] = "Su cabecera es de 4 bytes";
 choices[42][3] = "Todas las anteriores son ciertas";
 answers[42] = 3;
 units[42] = ['115'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 9447. ";
 preguntaids[42] = 9447


//  Id pregunta: 9735 Año de creación de pregunta: 2014
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[43]= new Array();
 choices[43][0] = "Las multas coercitivas son incompatibles con las sanciones";
 choices[43][1] = "El importe m&aacute;ximo de las multas coercitivas son 30000 euros";
 choices[43][2] = "El importe de las multas coercitivas  se ingresar&aacute; en el Fondo Nacional del Servicio Universal";
 choices[43][3] = "Ninguna de las anteriores es cierta";
 answers[43] = 1;
 units[43] = ['121'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 9735. ";
 preguntaids[43] = 9735


//  Id pregunta: 9588 Año de creación de pregunta: 2014
 questions[44]= "45)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[44]= new Array();
 choices[44][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[44][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[44][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[44][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[44] = 3;
 units[44] = ['105'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 9588. TIC A2 2013 libre";
 preguntaids[44] = 9588


//  Id pregunta: 9491 Año de creación de pregunta: 2014
 questions[45]= "46)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[45]= new Array();
 choices[45][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[45][1] = "No permite la modalidad sim&eacute;trica";
 choices[45][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central";
 choices[45][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[45] = 1;
 units[45] = ['106'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 9491. ";
 preguntaids[45] = 9491


//  Id pregunta: 9603 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[46]= new Array();
 choices[46][0] = "255,255,255,255";
 choices[46][1] = "FF::FF";
 choices[46][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[46][3] = "FF:FF:FF:FF:FF:FF";
 answers[46] = 3;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9603. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[46] = 9603


//  Id pregunta: 9658 Año de creación de pregunta: 2014
 questions[47]= "48)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[47]= new Array();
 choices[47][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235.";
 choices[47][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[47][2] = "permite audioconferencia pero no videoconferencia.";
 choices[47][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[47] = 0;
 units[47] = ['122'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 9658. Examen TIC A1 2013";
 preguntaids[47] = 9658


//  Id pregunta: 9716 Año de creación de pregunta: 2014
 questions[48]= "49)  Cual de las siguientes afirmaciones es correcta con respecto al protocolo CAS, en el &aacute;mbito de los sitemas Single-Sign-On";
 choices[48]= new Array();
 choices[48][0] = "Fue concebido en la universidad de Oxford";
 choices[48][1] = "Es un protocolo SSO para todo tipo de aplicaciones, tanto web, como de escritorio.";
 choices[48][2] = "No existe el protocolo CAS, en ese &aacute;mbito";
 choices[48][3] = "CAS son las siglas de Central Authentication Service";
 answers[48] = 3;
 units[48] = ['123'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 9716. ";
 preguntaids[48] = 9716


//  Id pregunta: 9446 Año de creación de pregunta: 2014
 questions[49]= "50)  &iquest;Qu&eacute; novedad introduce el est&aacute;ndar DOCSIS 3.1?";
 choices[49]= new Array();
 choices[49][0] = "No existe dicho est&aacute;ndar";
 choices[49][1] = "Puede soportar hasta 10 Gbit/s de bajada";
 choices[49][2] = "Permite el uso de tecnolog&iacute;as S-CDMA";
 choices[49][3] = "Permite el ajuste de diferentes niveles de calidad de servicio, seg&uacute;n el servicio empleado";
 answers[49] = 1;
 units[49] = ['115'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 9446. ";
 preguntaids[49] = 9446


//  Id pregunta: 9648 Año de creación de pregunta: 2014
 questions[50]= "51)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure)";
 choices[50]= new Array();
 choices[50][0] = "Permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales.";
 choices[50][1] = "Est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[50][2] = "Aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[50][3] = "No est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.";
 answers[50] = 2;
 units[50] = ['124'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9648. Examen TIC A1 2013";
 preguntaids[50] = 9648


//  Id pregunta: 9579 Año de creación de pregunta: 2010
 questions[51]= "52)  Indique cu&aacute;l de los siguientes es un tipo v&aacute;lido de cable de par trenzado seg&uacute;n su aislamiento o apantallamiento:";
 choices[51]= new Array();
 choices[51][0] = "scp";
 choices[51][1] = "htp";
 choices[51][2] = "ftp";
 choices[51][3] = "ssh";
 answers[51] = 2;
 units[51] = ['104'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9579. TIC A2 2013 libre";
 preguntaids[51] = 9579


//  Id pregunta: 9736 Año de creación de pregunta: 2014
 questions[52]= "53)  A cu&aacute;l de los siguientes organismos corresponde la gesti&oacute;n del registro de los nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s correspondiente a Espa&ntilde;a (.es):";
 choices[52]= new Array();
 choices[52][0] = "El Gobierno";
 choices[52][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[52][2] = "Red.es";
 choices[52][3] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n";
 answers[52] = 2;
 units[52] = ['121'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 9736. ";
 preguntaids[52] = 9736


//  Id pregunta: 9500 Año de creación de pregunta: 2014
 questions[53]= "54)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[53]= new Array();
 choices[53][0] = "Para el canal de subida utiliza la modulaci&oacute;n WCDMA y para el de bajada, OFDMA";
 choices[53][1] = "Corresponde a la release 8 del 3GPP (3rd Generation Partnership Project)";
 choices[53][2] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[53][3] = "El ancho de banda de los canales es variable entre 1,25MHz y 20MHz";
 answers[53] = 0;
 units[53] = ['117'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 9500. Para el canal de subida usa SC-FDMA (Single Carrier FDMA)";
 preguntaids[53] = 9500


//  Id pregunta: 9659 Año de creación de pregunta: 2014
 questions[54]= "55)  En el direccionamiento IPv4, clase C";
 choices[54]= new Array();
 choices[54][0] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^21 redes con 254 nodos posibles.";
 choices[54][1] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^21 redes  con 254 nodos posibles.";
 choices[54][2] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^22 redes  con 126 nodos posibles.";
 choices[54][3] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^22 redes  con 128 nodos posibles.";
 answers[54] = 0;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 9659. Examen TIC A1 2013";
 preguntaids[54] = 9659


//  Id pregunta: 9501 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[55]= new Array();
 choices[55][0] = "Es compatible con las redes IEEE 802.16e";
 choices[55][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[55][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[55][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[55] = 1;
 units[55] = ['117'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9501. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server),";
 preguntaids[55] = 9501


//  Id pregunta: 9730 Año de creación de pregunta: 2014
 questions[56]= "57)  Indique cu&aacute;l de las afirmaciones es falsa";
 choices[56]= new Array();
 choices[56][0] = "Las redes de telecomunicaciones que desarrollen actividades esenciales para la defensa nacional integran, se reservan al Estado y se rigen por su normativa espec&iacute;fica.";
 choices[56][1] = "En el marco de las funciones relacionadas con la defensa civil, corresponde al Ministerio de Defensa estudiar, programar, proponer y ejecutar las medidas relacionadas con las telecomunicaciones.";
 choices[56][2] = "En el &aacute;mbito de la protecci&oacute;n civil, en su espec&iacute;fica relaci&oacute;n con el uso de las telecomunicaciones, el Ministerio de Energia, Turismo y Agenda Digital cooperar&aacute; con el Ministerio del Interior y con los &oacute;rganos responsables de las comunidades aut&oacute;nomas.";
 choices[56][3] = "El Gobierno, con car&aacute;cter excepcional y transitorio, podr&aacute; acordar la asunci&oacute;n por la Administraci&oacute;n General del Estado de la gesti&oacute;n directa de determinados servicios de comunicaciones electr&oacute;nicas.";
 answers[56] = 1;
 units[56] = ['121'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 9730. ";
 preguntaids[56] = 9730


//  Id pregunta: 9443 Año de creación de pregunta: 2014
 questions[57]= "58)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[57]= new Array();
 choices[57][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[57][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[57][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[57][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[57] = 2;
 units[57] = ['114'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9443. ";
 preguntaids[57] = 9443


//  Id pregunta: 9442 Año de creación de pregunta: 2014
 questions[58]= "59)  La principal mejora de SNMPv3 es:";
 choices[58]= new Array();
 choices[58][0] = "Mayor seguridad";
 choices[58][1] = "Mayor rendimiento";
 choices[58][2] = "Mayor eficacia";
 choices[58][3] = "Mayor simplicidad";
 answers[58] = 0;
 units[58] = ['114'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9442. ";
 preguntaids[58] = 9442


//  Id pregunta: 9708 Año de creación de pregunta: 2014
 questions[59]= "60)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[59]= new Array();
 choices[59][0] = "Ataque por entrop&iacute;a";
 choices[59][1] = "Ataque por fuerza bruta";
 choices[59][2] = "Ataque con Tablas Arcoiris";
 choices[59][3] = "Todos son tipos de ataques";
 answers[59] = 0;
 units[59] = ['120'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9708. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";
 preguntaids[59] = 9708


//  Id pregunta: 9496 Año de creación de pregunta: 2014
 questions[60]= "61)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[60]= new Array();
 choices[60][0] = "Corresponde a la release 7 del 3GPP (3rd Generation Partnership Project)";
 choices[60][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[60][2] = "Reutiliza los RNC (Radio Network Controller) de la red 3G incorporando las funciones de los nodos B";
 choices[60][3] = "El ancho de banda de los canales pasa de los 5 MHz de 3G a los 20MHz";
 answers[60] = 1;
 units[60] = ['117'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 9496. Se trata de la release 8. Desaparece el RNC y sus funciones se incorporan al eNode B (Evolved Node B). El ancho de banda no es fijo sino variable entre 1,25MHz y 20MHz.";
 preguntaids[60] = 9496


//  Id pregunta: 9728 Año de creación de pregunta: 2014
 questions[61]= "62)  &iquest;Qu&eacute; RFC define el Estandar SIP?";
 choices[61]= new Array();
 choices[61][0] = "RFC 3160";
 choices[61][1] = "RFC 6130";
 choices[61][2] = "RFC 3610";
 choices[61][3] = "RFC 3261";
 answers[61] = 3;
 units[61] = ['110'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 9728. ";
 preguntaids[61] = 9728


//  Id pregunta: 9715 Año de creación de pregunta: 2014
 questions[62]= "63)  &iquest;Cual de los siguientes es un servicio comun de reuniones virtuales para las Administraciones Publicas?";
 choices[62]= new Array();
 choices[62][0] = "Re&uacute;nete";
 choices[62][1] = "Webex";
 choices[62][2] = "Meetic";
 choices[62][3] = "VirtualMeeting";
 answers[62] = 0;
 units[62] = ['122'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9715. http://administracionelectronica.gob.es/ctt/reunete";
 preguntaids[62] = 9715


//  Id pregunta: 9439 Año de creación de pregunta: 2014
 questions[63]= "64)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[63]= new Array();
 choices[63][0] = "Fault Mangement";
 choices[63][1] = "Configuration Management";
 choices[63][2] = "Accounting Management";
 choices[63][3] = "Improvement Management";
 answers[63] = 3;
 units[63] = ['105'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 9439. ";
 preguntaids[63] = 9439


//  Id pregunta: 9714 Año de creación de pregunta: 2014
 questions[64]= "65)  En el &aacute;mbito de las redes e internet, &iquest;qu&eacute; significan las siglas TOR?";
 choices[64]= new Array();
 choices[64][0] = "The Outer Router";
 choices[64][1] = "The Ominous Router";
 choices[64][2] = "The Onion Router";
 choices[64][3] = "Ninguna es correcta";
 answers[64] = 2;
 units[64] = ['103'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 9714. http://es.wikipedia.org/wiki/Tor";
 preguntaids[64] = 9714


//  Id pregunta: 9713 Año de creación de pregunta: 2014
 questions[65]= "66)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[65]= new Array();
 choices[65][0] = "Si";
 choices[65][1] = "No";
 choices[65][2] = "Depende de la configuraci&oacute;n del FW";
 choices[65][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[65] = 1;
 units[65] = ['119'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 9713. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";
 preguntaids[65] = 9713


//  Id pregunta: 9585 Año de creación de pregunta: 2014
 questions[66]= "67)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[66]= new Array();
 choices[66][0] = "Cabecera siguiente.";
 choices[66][1] = "Enrutamiento.";
 choices[66][2] = "Longitud de la carga &uacute;til.";
 choices[66][3] = "L&iacute;mite de saltos.";
 answers[66] = 1;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9585. TIC A2 2013 libre";
 preguntaids[66] = 9585


//  Id pregunta: 9666 Año de creación de pregunta: 2014
 questions[67]= "68)  Indique la opci&oacute;n verdadera.";
 choices[67]= new Array();
 choices[67][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[67][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[67][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[67][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps.";
 answers[67] = 3;
 units[67] = ['114'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 9666. Examen TIC A1 2013";
 preguntaids[67] = 9666


//  Id pregunta: 9494 Año de creación de pregunta: 2014
 questions[68]= "69)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[68]= new Array();
 choices[68][0] = "802.11f";
 choices[68][1] = "802.11h";
 choices[68][2] = "802.11i";
 choices[68][3] = "802.11r";
 answers[68] = 2;
 units[68] = ['108'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9494. ";
 preguntaids[68] = 9494


//  Id pregunta: 9582 Año de creación de pregunta: 2014
 questions[69]= "70)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[69]= new Array();
 choices[69][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[69][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[69][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[69][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[69] = 0;
 units[69] = ['114'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 9582. TIC A2 2013 libre";
 preguntaids[69] = 9582


//  Id pregunta: 9720 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;Cual de los siguientes no es un tipo de conector RJ?";
 choices[70]= new Array();
 choices[70][0] = "RJ-12";
 choices[70][1] = "RJ-45";
 choices[70][2] = "RJ-25";
 choices[70][3] = "Todos los anteriores son tipos de conectores RJ";
 answers[70] = 3;
 units[70] = ['104'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9720. ";
 preguntaids[70] = 9720


//  Id pregunta: 9719 Año de creación de pregunta: 2014
 questions[71]= "72)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[71]= new Array();
 choices[71][0] = "120 Ohmios";
 choices[71][1] = "150 Ohmios";
 choices[71][2] = "100 Ohmios";
 choices[71][3] = "Todos los anteriores";
 answers[71] = 2;
 units[71] = ['104'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9719. ";
 preguntaids[71] = 9719


//  Id pregunta: 9449 Año de creación de pregunta: 2014
 questions[72]= "73)  &iquest;Qu&eacute; es el dividendo digital?";
 choices[72]= new Array();
 choices[72][0] = "Una parte del espectro radioel&eacute;ctrico que usaba la TDT ha quedado liberada para otros servicios de comunicaciones";
 choices[72][1] = "Una parte del espectro digital.";
 choices[72][2] = "Una compresi&oacute;n del espectro debido a la utilizaci&oacute;n de se&ntilde;ales digitales.";
 choices[72][3] = "Una reasignaci&oacute;n de frecuencias dentro de la banda que utiliza la TDT.";
 answers[72] = 0;
 units[72] = ['115'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 9449. Examen TIC A1 2011";
 preguntaids[72] = 9449


//  Id pregunta: 9653 Año de creación de pregunta: 2014
 questions[73]= "74)  Los sistemas de videoconferencia";
 choices[73]= new Array();
 choices[73][0] = "pueden utilizar conmutaci&oacute;n de circuitos sobre la RDSI usando el protocolo H.326.";
 choices[73][1] = "pueden utilizar redes IP con el protocolo H.323.";
 choices[73][2] = "pueden utilizar redes IP s&oacute;lo si usan el protocolo SIP.";
 choices[73][3] = "pueden utilizar conmutaci&oacute;n de paquetes sobre RDSI, multiplexando las se&ntilde;ales de las distintas localizaciones si usan el protocolo H.328.";
 answers[73] = 1;
 units[73] = ['122'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 9653. Examen TIC A1 2013";
 preguntaids[73] = 9653


//  Id pregunta: 9441 Año de creación de pregunta: 2014
 questions[74]= "75)  Las siglas CMOT significan:";
 choices[74]= new Array();
 choices[74][0] = "Complex Management Over TCP";
 choices[74][1] = "Common Management Over TCP/IP";
 choices[74][2] = "Complex Management Over TCP/IP";
 choices[74][3] = "Complex Management Of Telecomucation";
 answers[74] = 1;
 units[74] = ['114'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 9441. ";
 preguntaids[74] = 9441


