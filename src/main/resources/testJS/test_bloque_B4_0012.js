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
//  Id pregunta: 4855 Año de creación de pregunta: 2002
 questions[0]= "1)  En una red de &aacute;rea extensa (WAN):";
 choices[0]= new Array();
 choices[0][0] = "Los tiempos de propagaci&oacute;n son bajos";
 choices[0][1] = "Las velocidades de transmisi&oacute;n de datos son lentas, sobre todo comparadas con las LAN";
 choices[0][2] = "Baja tasa de errores, haciendo innecesario procedimientos efectivos para la detecci&oacute;n y su recuperaci&oacute;n";
 choices[0][3] = "Los retrasos son predecibles";
 answers[0] = 1;
 units[0] = ['112'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4855. ";
 preguntaids[0] = 4855


//  Id pregunta: 4823 Año de creación de pregunta: 2002
 questions[1]= "2)  En LMDS las t&eacute;cnicas com&uacute;nmente usadas para la reutilizaci&oacute;n de frecuencias son:";
 choices[1]= new Array();
 choices[1][0] = "Minimizar la direccionalidad de las antenas de las celdas";
 choices[1][1] = "Maximizar el aislamiento entre sectores adyacentes a trav&eacute;s de la polarizaci&oacute;n";
 choices[1][2] = "Aumentar el tama&ntilde;o de celda";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = 1;
 units[1] = ['117'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4823. ";
 preguntaids[1] = 4823


//  Id pregunta: 4825 Año de creación de pregunta: 2002
 questions[2]= "3)  En los sistemas de conmutaci&oacute;n de paquetes:";
 choices[2]= new Array();
 choices[2][0] = "Se pueden distinguir dos tipos fundamentales : datagrama y circuito l&oacute;gico";
 choices[2][1] = "En estas redes existe un tiempo de espera producido por la sobrecarga de paquetes en algunos nodos";
 choices[2][2] = "Los tiempos de espera se reducen mediante diversas t&eacute;cnicas de encaminamiento";
 choices[2][3] = "Para evitar la congesti&oacute;n de la red se estudian las rutas &oacute;ptimas para cada par de nodos y se guardan en un nodo central";
 answers[2] = 2;
 units[2] = ['112'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4825. ";
 preguntaids[2] = 4825


//  Id pregunta: 4840 Año de creación de pregunta: 2002
 questions[3]= "4)  En telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l de los siguientes sistemas permite mayor densidad de tr&aacute;fico?:";
 choices[3]= new Array();
 choices[3][0] = "DECT";
 choices[3][1] = "DCS 1800";
 choices[3][2] = "GSM";
 choices[3][3] = "NMT";
 answers[3] = 0;
 units[3] = ['117'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4840. ";
 preguntaids[3] = 4840


//  Id pregunta: 4881 Año de creación de pregunta: 2002
 questions[4]= "5)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10Base5 es de:";
 choices[4]= new Array();
 choices[4][0] = "100 metros";
 choices[4][1] = "185 metros";
 choices[4][2] = "200 metros";
 choices[4][3] = "500 metros";
 answers[4] = 3;
 units[4] = ['104'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4881. ";
 preguntaids[4] = 4881


//  Id pregunta: 4842 Año de creación de pregunta: 2002
 questions[5]= "6)  En Token Ring , un monitor activo:";
 choices[5]= new Array();
 choices[5][0] = "Transmite mensajes de monitorizaci&oacute;n a cada servidor en el anillo para facilitar el balance de carga entre ellos";
 choices[5][1] = "Espera por los mensajes de error, entonces env&iacute;a mensajes de notificaci&oacute;n para limitar (o reordenar) el tr&aacute;fico";
 choices[5][2] = "Escucha la prioridad del testigo y cuando se detecta, reserva la prioridad para la estaci&oacute;n emisora";
 choices[5][3] = "Elimina las tramas no recogidas y es el punto central de informaci&oacute;n de 'timing' para un anillo";
 answers[5] = 3;
 units[5] = ['112'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4842. ";
 preguntaids[5] = 4842


//  Id pregunta: 4880 Año de creación de pregunta: 2002
 questions[6]= "7)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndar 10Base2 es de:";
 choices[6]= new Array();
 choices[6][0] = "100 metros";
 choices[6][1] = "185 metros";
 choices[6][2] = "200 metros";
 choices[6][3] = "500 metros";
 answers[6] = 1;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4880. ";
 preguntaids[6] = 4880


//  Id pregunta: 4841 Año de creación de pregunta: 2002
 questions[7]= "8)  En telefon&iacute;a m&oacute;vil, &iquest;es posible en Espa&ntilde;a cambiar de operador conservando el n&uacute;mero?:";
 choices[7]= new Array();
 choices[7][0] = "S&iacute;, siempre";
 choices[7][1] = "No, nunca";
 choices[7][2] = "No, salvo para empresas";
 choices[7][3] = "S&iacute;, dependiendo de los operadores implicados";
 answers[7] = 0;
 units[7] = ['117'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4841. ";
 preguntaids[7] = 4841


//  Id pregunta: 4899 Año de creación de pregunta: 2002
 questions[8]= "9)  La norma IEEE 802.4 es la especificaci&oacute;n que define la redes:";
 choices[8]= new Array();
 choices[8][0] = "Ethernet";
 choices[8][1] = "Token bus";
 choices[8][2] = "Token ring";
 choices[8][3] = "FDDI";
 answers[8] = 1;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4899. ";
 preguntaids[8] = 4899


//  Id pregunta: 4863 Año de creación de pregunta: 2002
 questions[9]= "10)  Entre las respuestas hay tres relacionadas. Indicar la que no lo est&aacute;:";
 choices[9]= new Array();
 choices[9][0] = "BOOTP";
 choices[9][1] = "SNMP";
 choices[9][2] = "DHCP";
 choices[9][3] = "ARP";
 answers[9] = 1;
 units[9] = ['105'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4863. ";
 preguntaids[9] = 4863


//  Id pregunta: 4814 Año de creación de pregunta: 2002
 questions[10]= "11)  En la Red Digital de Servicios Integrados (RDSI), un acceso b&aacute;sico permite:";
 choices[10]= new Array();
 choices[10][0] = "Obligatoriamente un canal de voz, otro de datos y un tercero de se&ntilde;alizaci&oacute;n";
 choices[10][1] = "Tres conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[10][2] = "Dos conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[10][3] = "Un canal de datos y dos canales de v&iacute;deo";
 answers[10] = 2;
 units[10] = ['114'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4814. ";
 preguntaids[10] = 4814


//  Id pregunta: 4833 Año de creación de pregunta: 2002
 questions[11]= "12)  En redes MAN, protocolo DQDB, se cumple que:";
 choices[11]= new Array();
 choices[11][0] = "Las celdas tienen longitud de 53 bytes";
 choices[11][1] = "Es compatible con ATM";
 choices[11][2] = "Tienen una carga &uacute;til de 48 bytes";
 choices[11][3] = "Todas las anteriores respuestas son correctas";
 answers[11] = 3;
 units[11] = ['112'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4833. ";
 preguntaids[11] = 4833


//  Id pregunta: 4853 Año de creación de pregunta: 2002
 questions[12]= "13)  En una comparaci&oacute;n entre modelos OSI y TCP/IP, es falso que:";
 choices[12]= new Array();
 choices[12][0] = "TCP/IP est&aacute; basado en protocolos existentes, mientras que OSI de ISO es independiente del protocolo";
 choices[12][1] = "En OSI los niveles 2 y 3 est&aacute;n sobrecargados, y los niveles 5 y 6 tienen poca funcionalidad";
 choices[12][2] = "En OSI, al igual que en TCP/IP, las primeras implementaciones no tuvieron apenas errores y se distribuyeron gratuitamente, lo que contribuy&oacute; a su difusi&oacute;n";
 choices[12][3] = "En OSI el nivel de transporte es s&oacute;lo orientado a conexi&oacute;n, y el de red soporta servicios orientados y no orientados a conexi&oacute;n, no como en TCP/IP";
 answers[12] = 2;
 units[12] = ['105'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4853. ";
 preguntaids[12] = 4853


//  Id pregunta: 4887 Año de creación de pregunta: 2002
 questions[13]= "14)  La funci&oacute;n de asociar sesiones con conexiones de transporte corresponde a:";
 choices[13]= new Array();
 choices[13][0] = "Nivel 3 Red";
 choices[13][1] = "Nivel 4 Transporte";
 choices[13][2] = "Nivel 5 Sesi&oacute;n";
 choices[13][3] = "Nivel 6 Presentaci&oacute;n";
 answers[13] = 1;
 units[13] = ['105'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4887. ";
 preguntaids[13] = 4887


//  Id pregunta: 4870 Año de creación de pregunta: 2002
 questions[14]= "15)  La capa de acceso al medio en una red de &aacute;rea local se denomina:";
 choices[14]= new Array();
 choices[14][0] = "MAC";
 choices[14][1] = "ADSL";
 choices[14][2] = "BUS";
 choices[14][3] = "LLC";
 answers[14] = 0;
 units[14] = ['112'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4870. ";
 preguntaids[14] = 4870


//  Id pregunta: 4820 Año de creación de pregunta: 2002
 questions[15]= "16)  En las t&eacute;cnicas celulares aplicadas a telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l es la geometr&iacute;a m&aacute;s adecuada de una c&eacute;lula en t&eacute;rminos de m&aacute;xima cobertura y m&iacute;nima intereferencia?:";
 choices[15]= new Array();
 choices[15][0] = "La cuadrada";
 choices[15][1] = "La circular";
 choices[15][2] = "La triangular";
 choices[15][3] = "La hexagonal";
 answers[15] = 3;
 units[15] = ['117'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4820. ";
 preguntaids[15] = 4820


//  Id pregunta: 4886 Año de creación de pregunta: 2002
 questions[16]= "17)  La frecuencia de transmisi&oacute;n en MHz de M&oacute;vil a Estaci&oacute;n Base ('uplink') en GSM es:";
 choices[16]= new Array();
 choices[16][0] = "890-915";
 choices[16][1] = "800-825";
 choices[16][2] = "790-815";
 choices[16][3] = "960-985";
 answers[16] = 0;
 units[16] = ['117'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4886. ";
 preguntaids[16] = 4886


//  Id pregunta: 4869 Año de creación de pregunta: 2002
 questions[17]= "18)  La autoridad de nombres y direcciones de Internet es:";
 choices[17]= new Array();
 choices[17][0] = "ICANN";
 choices[17][1] = "RIPE";
 choices[17][2] = "IETF";
 choices[17][3] = "NIC";
 answers[17] = 0;
 units[17] = ['103'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4869. ";
 preguntaids[17] = 4869


//  Id pregunta: 4821 Año de creación de pregunta: 2002
 questions[18]= "19)  En las topolog&iacute;as de red de &aacute;rea local (LAN) se puede decir:";
 choices[18]= new Array();
 choices[18][0] = "En un bus el control es siempre distribuido";
 choices[18][1] = "El doble anillo permite seguir funcionando aunque se produzcan fallos en los puntos de la red";
 choices[18][2] = "La malla se obtiene cuando se conectan nodos pertenecientes a redes distintas de la misma topolog&iacute;a";
 choices[18][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[18] = 3;
 units[18] = ['112'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4821. ";
 preguntaids[18] = 4821


//  Id pregunta: 4848 Año de creación de pregunta: 2002
 questions[19]= "20)  En un mensaje de correo electr&oacute;nico cifrado, seg&uacute;n el protocolo S-MIME,  se reciben cifrados:";
 choices[19]= new Array();
 choices[19][0] = "La direcci&oacute;n de correo electr&oacute;nico del destinatario y la direcci&oacute;n de correo electr&oacute;nico del remitente";
 choices[19][1] = "El cuerpo del mensaje y sus archivos adjuntos";
 choices[19][2] = "La &quot;traza&quot; del mensaje (servidores SMTP por los que ha sido encaminado)";
 choices[19][3] = "El asunto del mensaje, el tipo de contenido y la fecha";
 answers[19] = 1;
 units[19] = ['116'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4848. ";
 preguntaids[19] = 4848


//  Id pregunta: 4865 Año de creación de pregunta: 2002
 questions[20]= "21)  Indique la opci&oacute;n que mejor refleje el servicio ofrecido por las compa&ntilde;&iacute;as de telecomunicaci&oacute;n, como conmutaci&oacute;n de circuitos:";
 choices[20]= new Array();
 choices[20][0] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, la entrega a la red y libera el circuito";
 choices[20][1] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda variable";
 choices[20][2] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se env&iacute;a la informaci&oacute;n en paquetes";
 choices[20][3] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda de transmisi&oacute;n fijo durante todo el tiempo que permanece establecido el cto";
 answers[20] = 3;
 units[20] = ['112'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4865. ";
 preguntaids[20] = 4865


//  Id pregunta: 4874 Año de creación de pregunta: 2002
 questions[21]= "22)  La diferencia entre protocolo e interfaz seg&uacute;n OSI es:";
 choices[21]= new Array();
 choices[21][0] = "entre otras, un protocolo se refiere a entidades de distintos niveles y un interfaz a entidades del mismo nivel";
 choices[21][1] = "ambos conceptos se refieren a entidades de distintos niveles";
 choices[21][2] = "ambos conceptos se refieren a entidades del mismo nivel";
 choices[21][3] = "entre otras, un protocolo se refiere a entidades del mismo nivel y un interfaz a entidades de distintos niveles";
 answers[21] = 3;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4874. ";
 preguntaids[21] = 4874


//  Id pregunta: 4849 Año de creación de pregunta: 2002
 questions[22]= "23)  En un protocolo de nivel de enlace se denomina ventana a:";
 choices[22]= new Array();
 choices[22][0] = "Al env&iacute;o de una trama de control que indica al emisor que la trama de informaci&oacute;n ha llegado correctamente";
 choices[22][1] = "Al envio por el emisor de las tramas de informaci&oacute;n numeradas secuencialmente";
 choices[22][2] = "Al envio de los asentimientos numerados por cada una de las tramas de informaci&oacute;n recibidas";
 choices[22][3] = "Al n&uacute;mero m&aacute;ximo de tramas que en un momento dado pueden estar pendientes de confirmaci&oacute;n";
 answers[22] = 3;
 units[22] = ['112'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4849. ";
 preguntaids[22] = 4849


//  Id pregunta: 4858 Año de creación de pregunta: 2002
 questions[23]= "24)  En una red local en la que se tienen problemas de capacidad de la misma se ha decidido dividirla en dos segmentos. Indique cual de las opciones siguientes es la soluci&oacute;n t&eacute;cnica y econ&oacute;micamente m&aacute;s adecuada:";
 choices[23]= new Array();
 choices[23][0] = "Utilizaci&oacute;n de un gateway entre los segmentos";
 choices[23][1] = "Utilizaci&oacute;n de un repetidor entre los segmentos";
 choices[23][2] = "Utilizaci&oacute;n de un switch entre los segmentos";
 choices[23][3] = "Todas las opciones son igualmente adecuadas";
 answers[23] = 2;
 units[23] = ['102'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4858. ";
 preguntaids[23] = 4858


//  Id pregunta: 4847 Año de creación de pregunta: 2002
 questions[24]= "25)  En un firewall de paquetes IP, los paquetes entrantes:";
 choices[24]= new Array();
 choices[24][0] = "Primero se filtran, luego se hace el NAT";
 choices[24][1] = "Primero se hace NAT y luego se filtran";
 choices[24][2] = "Es igual que para los paquetes salientes";
 choices[24][3] = "Depende de la interfaz";
 answers[24] = 1;
 units[24] = ['119'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4847. ";
 preguntaids[24] = 4847


//  Id pregunta: 4857 Año de creación de pregunta: 2002
 questions[25]= "26)  En una red local con un &uacute;nico servidor de ficheros, existen problemas de tiempo de respuesta pues un excesivo n&uacute;mero de nodos intenta acceso al mismo. Indique cual de las opciones siguientes resuelve t&eacute;cnica y econ&oacute;micamente el problema:";
 choices[25]= new Array();
 choices[25][0] = "La utilizaci&oacute;n de un gateway entre dos segmentos de la red";
 choices[25][1] = "La utilizaci&oacute;n de un router entre los dos segmentos de la red";
 choices[25][2] = "La utilizaci&oacute;n de un bridge entre los dos segmentos de la red";
 choices[25][3] = "Ning&uacute;n dispositivo de comunicaciones resolver&iacute;a el problema";
 answers[25] = 3;
 units[25] = ['102'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4857. ";
 preguntaids[25] = 4857


//  Id pregunta: 4882 Año de creación de pregunta: 2002
 questions[26]= "27)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10BaseT es de:";
 choices[26]= new Array();
 choices[26][0] = "100 metros";
 choices[26][1] = "185 metros";
 choices[26][2] = "200 metros";
 choices[26][3] = "500 metros";
 answers[26] = 0;
 units[26] = ['104'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4882. ";
 preguntaids[26] = 4882


//  Id pregunta: 4890 Año de creación de pregunta: 2002
 questions[27]= "28)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[27]= new Array();
 choices[27][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[27][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[27][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[27][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[27] = 2;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4890. ";
 preguntaids[27] = 4890


//  Id pregunta: 4897 Año de creación de pregunta: 2002
 questions[28]= "29)  La norma FTAM, &iquest;en qu&eacute; nivel del est&aacute;ndar OSI se encuentra?:";
 choices[28]= new Array();
 choices[28][0] = "Nivel de red";
 choices[28][1] = "Nivel de transferencia de ficheros";
 choices[28][2] = "Nivel de transporte";
 choices[28][3] = "Nivel de aplicaci&oacute;n";
 answers[28] = 3;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4897. ";
 preguntaids[28] = 4897


//  Id pregunta: 4832 Año de creación de pregunta: 2002
 questions[29]= "30)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, y dependiendo de la velocidad las posibilidades tecnologicas son:";
 choices[29]= new Array();
 choices[29][0] = "Para 155 Mbps las interfaces son el&eacute;ctricas y &oacute;pticas";
 choices[29][1] = "Para 622 Mbps las interfaces son el&eacute;ctricas";
 choices[29][2] = "Para 155 Mbps las interfaces son &oacute;pticas solamente.";
 choices[29][3] = "Para ambas velocidades exclusivamente interfaces &oacute;pticas";
 answers[29] = 0;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4832. ";
 preguntaids[29] = 4832


//  Id pregunta: 4878 Año de creación de pregunta: 2002
 questions[30]= "31)  La direcci&oacute;n IPv4 172.30.20.20:";
 choices[30]= new Array();
 choices[30][0] = "Es una direcci&oacute;n privada";
 choices[30][1] = "Es una direcci&oacute;n p&uacute;blica";
 choices[30][2] = "Es una direcci&oacute;n de clase C";
 choices[30][3] = "Es una direcci&oacute;n de clase D";
 answers[30] = 0;
 units[30] = ['105'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4878. ";
 preguntaids[30] = 4878


//  Id pregunta: 4871 Año de creación de pregunta: 2002
 questions[31]= "32)  La capa de adaptaci&oacute;n de ATM se encarga de:";
 choices[31]= new Array();
 choices[31][0] = "Establecer y liberar los circuitos virtuales";
 choices[31][1] = "Segmentar y reenviar los paquetes mayores de una celda";
 choices[31][2] = "Generar y extraer las cabeceras de las celdas";
 choices[31][3] = "Define las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n";
 answers[31] = 1;
 units[31] = ['107'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4871. ";
 preguntaids[31] = 4871


//  Id pregunta: 4822 Año de creación de pregunta: 2002
 questions[32]= "33)  En las transmisi&oacute;n de datos en tramas se suele incluir un campo denominado CRC. Indique cu&aacute;l de las opciones le parece correcta:";
 choices[32]= new Array();
 choices[32][0] = "Es un campo que indica el final de la trama y prepara al equipo receptor para la siguiente";
 choices[32][1] = "Es un campo de control del n&uacute;mero de bits incluidos en la trama, para conocer el final de la misma";
 choices[32][2] = "Es un campo de control de integridad de la trama, sirve para comprobar la ocurrencia de ciertos errores en la transmisi&oacute;n";
 choices[32][3] = "Es un campo de control de integridad de la trama, sirve para detectar cualquier error en la transmisi&oacute;n";
 answers[32] = 2;
 units[32] = ['112'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4822. ";
 preguntaids[32] = 4822


//  Id pregunta: 4875 Año de creación de pregunta: 2002
 questions[33]= "34)  La direcci&oacute;n de un socket se conforma con:";
 choices[33]= new Array();
 choices[33][0] = "La direcci&oacute;n IP del host y el modo de acceso";
 choices[33][1] = "La direcci&oacute;n IP del host y la direcci&oacute;n de un puerto local";
 choices[33][2] = "La URL del host";
 choices[33][3] = "La URL del host y el modo de acceso";
 answers[33] = 1;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4875. ";
 preguntaids[33] = 4875


//  Id pregunta: 4866 Año de creación de pregunta: 2002
 questions[34]= "35)  Indique qu&eacute; campo de los que se relacionan no est&aacute; incluido en la cabecera de segmento TCP:";
 choices[34]= new Array();
 choices[34][0] = "N&uacute;mero de paquetes enviados por la conexi&oacute;n";
 choices[34][1] = "Posici&oacute;n en bytes donde empiezan los bytes urgentes";
 choices[34][2] = "Direcciones IP de origen y destino";
 choices[34][3] = "Petici&oacute;n de resetear la sesi&oacute;n";
 answers[34] = 2;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4866. ";
 preguntaids[34] = 4866


//  Id pregunta: 4864 Año de creación de pregunta: 2002
 questions[35]= "36)  Indique la opci&oacute;n correcta respecto a la se&ntilde;alizaci&oacute;n en RDSI:";
 choices[35]= new Array();
 choices[35][0] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS7";
 choices[35][1] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal asociado y se le conoce como CCS7";
 choices[35][2] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS9";
 choices[35][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[35] = 0;
 units[35] = ['114'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4864. ";
 preguntaids[35] = 4864


//  Id pregunta: 4859 Año de creación de pregunta: 2002
 questions[36]= "37)  En una red que usa conmutaci&oacute;n de paquetes:";
 choices[36]= new Array();
 choices[36][0] = "La longitud de la unidades de datos (paquetes) que puedan presentarse a la red es ilimitada";
 choices[36][1] = "Cuanto mayor sea la longitud de los paquetes, mayor ser&aacute; el tiempo de espera hasta su retransmisi&oacute;n, por lo que se procurar&aacute; que tama&ntilde;o de los paquetes sea el menor posible";
 choices[36][2] = "Si un mensaje supera la m&aacute;xima longitud permitida, se divide en unidades de datos m&aacute;s peque&ntilde;as";
 choices[36][3] = "La ITU-T en su recomendaci&oacute;n X.25 no propone ning&uacute;n m&aacute;ximo para la longitud de los paquetes";
 answers[36] = 2;
 units[36] = ['112'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4859. ";
 preguntaids[36] = 4859


//  Id pregunta: 4888 Año de creación de pregunta: 2002
 questions[37]= "38)  La funci&oacute;n de una MIB es:";
 choices[37]= new Array();
 choices[37][0] = "Representar un dispositivo dado en la jerarqu&iacute;a de una red gestionada";
 choices[37][1] = "Identificar las caracter&iacute;sticas espec&iacute;ficas de un dispositivo gestionado y asociar uno o m&aacute;s valores a sus caracter&iacute;sticas";
 choices[37][2] = "Mapear agentes SNMP a  NMSs (Network Management Systems) SNMP y mantener una tablas con estas relaciones";
 choices[37][3] = "Permitir representar a los datos de forma independiente de las t&eacute;cnicas de representaci&oacute;n y de las estructuras de sistemas en particular";
 answers[37] = 1;
 units[37] = ['114'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4888. ";
 preguntaids[37] = 4888


//  Id pregunta: 4896 Año de creación de pregunta: 2002
 questions[38]= "39)  La linea &quot;GET / HTTP/1.1&quot;, dentro de un mensaje HTTP significa:";
 choices[38]= new Array();
 choices[38][0] = "Pide un documento localizado en /";
 choices[38][1] = "La versi&oacute;n HTTP es 1.1";
 choices[38][2] = "No tiene indicaci&oacute;n del servidor";
 choices[38][3] = "Todas las anteriores respuestas son correctas";
 answers[38] = 3;
 units[38] = ['103'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4896. ";
 preguntaids[38] = 4896


//  Id pregunta: 4837 Año de creación de pregunta: 2002
 questions[39]= "40)  En sistemas de informaci&oacute;n y comunicaciones, RED es el acr&oacute;nimo de:";
 choices[39]= new Array();
 choices[39][0] = "Random Early Detection";
 choices[39][1] = "Rapid Early Detection";
 choices[39][2] = "Requested Evaluation datagram";
 choices[39][3] = "Response Evaluation and Detection";
 answers[39] = 0;
 units[39] = ['102'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4837. ";
 preguntaids[39] = 4837


//  Id pregunta: 4893 Año de creación de pregunta: 2002
 questions[40]= "41)  La jerarqu&iacute;a digital MDH:";
 choices[40]= new Array();
 choices[40][0] = "Responde por Multimedia Digital Hierarchy";
 choices[40][1] = "Responde por Multiplexed Digital Hierarchy";
 choices[40][2] = "No existe";
 choices[40][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[40] = 2;
 units[40] = ['110'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4893. ";
 preguntaids[40] = 4893


//  Id pregunta: 4879 Año de creación de pregunta: 2002
 questions[41]= "42)  La direcci&oacute;n loopback en IPv6 es:";
 choices[41]= new Array();
 choices[41][0] = "0:0:0:0:0:0:0:1";
 choices[41][1] = "0:0:0:0:0:0:0:0";
 choices[41][2] = "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:";
 choices[41][3] = "F:F:F:F:F:F:F:F";
 answers[41] = 0;
 units[41] = ['105'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4879. ";
 preguntaids[41] = 4879


//  Id pregunta: 4831 Año de creación de pregunta: 2002
 questions[42]= "43)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, nos referimos a:";
 choices[42]= new Array();
 choices[42][0] = "Igualdad de interfaces entre emisor y receptor";
 choices[42][1] = "Igual velocidad de entrada que de salida";
 choices[42][2] = "Igual velocidad de entrada que de salida, pero solo interfaces el&eacute;ctricas";
 choices[42][3] = "Igual velocidad de entrada que de salida, pero solo interfaces &oacute;pticas";
 answers[42] = 1;
 units[42] = ['114'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4831. ";
 preguntaids[42] = 4831


//  Id pregunta: 4876 Año de creación de pregunta: 2002
 questions[43]= "44)  La direcci&oacute;n IP 192.168.42.127:";
 choices[43]= new Array();
 choices[43][0] = "Es una direcci&oacute;n de la red Internet";
 choices[43][1] = "Es una direcci&oacute;n de la red Internet, clase C";
 choices[43][2] = "Es una direcci&oacute;n de una red IP privada";
 choices[43][3] = "Es una direcci&oacute;n de la red Internet, clase B";
 answers[43] = 2;
 units[43] = ['105'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4876. ";
 preguntaids[43] = 4876


//  Id pregunta: 4819 Año de creación de pregunta: 2002
 questions[44]= "45)  En las redes locales, &iquest;qu&eacute; funciones tienen los repetidores?:";
 choices[44]= new Array();
 choices[44][0] = "Repiten los paquetes como se&ntilde;ales el&eacute;ctricas de una red a otra";
 choices[44][1] = "Repiten los paquetes incompletos para que sean reenviados completos";
 choices[44][2] = "Eliminan el ruido de las se&ntilde;ales en la l&iacute;nea y emiten los paquetes regenerados";
 choices[44][3] = "Repiten y ampl&iacute;an las se&ntilde;ales el&eacute;ctricas, incluyendo el ruido";
 answers[44] = 2;
 units[44] = ['102'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4819. ";
 preguntaids[44] = 4819


//  Id pregunta: 4846 Año de creación de pregunta: 2002
 questions[45]= "46)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[45]= new Array();
 choices[45][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[45][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[45][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[45][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[45] = 2;
 units[45] = ['102', '114'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4846. ";
 preguntaids[45] = 4846


//  Id pregunta: 4824 Año de creación de pregunta: 2002
 questions[46]= "47)  En los m&oacute;dems en banda base:";
 choices[46]= new Array();
 choices[46][0] = "No se realiza modulaci&oacute;n ni demodulaci&oacute;n.";
 choices[46][1] = "Emplean modulaci&oacute;n de amplitud con banda lateral &uacute;nica.";
 choices[46][2] = "Emplean modulaci&oacute;n QAM (modulaci&oacute;n en amplitud de cuadratura).";
 choices[46][3] = "Usan modulaci&oacute;n PSK y ASK combinadas.";
 answers[46] = 0;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4824. ";
 preguntaids[46] = 4824


//  Id pregunta: 4818 Año de creación de pregunta: 2002
 questions[47]= "48)  En las necesidades para establecer una aplicaci&oacute;n de videoconferencia, es falso que se requiera:";
 choices[47]= new Array();
 choices[47][0] = "una compresi&oacute;n / descompresi&oacute;n en tiempo real";
 choices[47][1] = "unos l&iacute;mites m&iacute;nimos y m&aacute;ximos para el retardo de comunicaci&oacute;n";
 choices[47][2] = "una sincronizaci&oacute;n de audio y de video";
 choices[47][3] = "un protocolo de se&ntilde;alizaci&oacute;n";
 answers[47] = 1;
 units[47] = ['122'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4818. ";
 preguntaids[47] = 4818


//  Id pregunta: 4885 Año de creación de pregunta: 2002
 questions[48]= "49)  La f&oacute;rmula de Shannon para la capacidad de un canal es (B es el ancho de banda, S la potencia de la se&ntilde;al y N la potencia del ruido):";
 choices[48]= new Array();
 choices[48][0] = "R[bps] = B[Hz] &middot; log2(1 + S/N)";
 choices[48][1] = "R[bps] = B[Hz] &middot; ln(1 + S/N)";
 choices[48][2] = "R[bps] = B[Hz] &middot; log10(1 + S/N)";
 choices[48][3] = "R[bps] = B[kHz] &middot; log2(S/N)";
 answers[48] = 0;
 units[48] = ['104'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4885. ";
 preguntaids[48] = 4885


//  Id pregunta: 4856 Año de creación de pregunta: 2002
 questions[49]= "50)  En una red de &aacute;rea local que utiliza la t&eacute;cnica de acceso al medio conocida como contienda, una de las siguientes afirmaciones es falsa. Se&ntilde;&aacute;lela:";
 choices[49]= new Array();
 choices[49][0] = "Se pueden producir colisiones";
 choices[49][1] = "Cualquier estaci&oacute;n de la Red de &Aacute;rea Local puede transmitir en cualquier momento";
 choices[49][2] = "Se pueden establecer prioridades";
 choices[49][3] = "Ofrece buen rendimiento a baja carga";
 answers[49] = 2;
 units[49] = ['112'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4856. ";
 preguntaids[49] = 4856


//  Id pregunta: 4894 Año de creación de pregunta: 2002
 questions[50]= "51)  La liberalizaci&oacute;n del sector de telecomunicaciones vino marcada por una serie de directivas comunitarias tendentes hacia un mercado en plena competencia. Marcar la directiva relativa a la competencia en los mercados de servicios de telecomunicaciones:";
 choices[50]= new Array();
 choices[50][0] = "Directiva  CE 2002/58";
 choices[50][1] = "Directiva  CE 2002/22";
 choices[50][2] = "Directiva  CE 2002/77";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = 2;
 units[50] = ['121'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4894. ";
 preguntaids[50] = 4894


//  Id pregunta: 4873 Año de creación de pregunta: 2002
 questions[51]= "52)  La conocida RFC 793 se corresponde con:";
 choices[51]= new Array();
 choices[51][0] = "el protocolo TCP";
 choices[51][1] = "la arquitectura TCP/IP";
 choices[51][2] = "el protocolo IP";
 choices[51][3] = "el protocolo SMTP";
 answers[51] = 0;
 units[51] = ['105'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4873. ";
 preguntaids[51] = 4873


//  Id pregunta: 4895 Año de creación de pregunta: 2002
 questions[52]= "53)  La linea &quot;Connection: Keep Alive&quot;, dentro de un mensaje HTTP significa:";
 choices[52]= new Array();
 choices[52][0] = "Dice al servidor web que cierre la conexi&oacute;n";
 choices[52][1] = "Dice al servidor web que cierre la conexi&oacute;n desues de la peticion del cliente";
 choices[52][2] = "El resultado es el mismo en HTTP 1.0 y HTTP 1.1";
 choices[52][3] = "Le dice al servidor que cierra la conexi&oacute;n cuando el cliente lo pida";
 answers[52] = 3;
 units[52] = ['103'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4895. ";
 preguntaids[52] = 4895


//  Id pregunta: 4845 Año de creación de pregunta: 2002
 questions[53]= "54)  En un domicilio particular abonado a un &quot;acceso b&aacute;sico&quot; de RDSI:";
 choices[53]= new Array();
 choices[53][0] = "Siempre puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica";
 choices[53][1] = "No puede estar conectado a Internet ya su vez recibir una llamada telef&oacute;nica";
 choices[53][2] = "Puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica, solo en el caso de que disponga de un &quot;m&oacute;dem&quot; ADSL";
 choices[53][3] = "Ninguna de las anteriores es correcta";
 answers[53] = 0;
 units[53] = ['114'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4845. ";
 preguntaids[53] = 4845


//  Id pregunta: 4854 Año de creación de pregunta: 2002
 questions[54]= "55)  En una comunicaci&oacute;n v&iacute;a radio entre el m&oacute;vil y la estaci&oacute;n base:";
 choices[54]= new Array();
 choices[54][0] = "El enlace ascendente es del m&oacute;vil a la estaci&oacute;n base";
 choices[54][1] = "El enlace descendente es de la estaci&oacute;n base al m&oacute;vil";
 choices[54][2] = "Las 2 respuestas anteriores son correctas";
 choices[54][3] = "Las respuestas 'a'y 'b' son incorrectas";
 answers[54] = 2;
 units[54] = ['117'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4854. ";
 preguntaids[54] = 4854


//  Id pregunta: 4872 Año de creación de pregunta: 2002
 questions[55]= "56)  La codificaci&oacute;n Manchester tambi&eacute;n es conocida como:";
 choices[55]= new Array();
 choices[55][0] = "C&oacute;digo NRZ polar";
 choices[55][1] = "C&oacute;digo NRZ bipolar";
 choices[55][2] = "C&oacute;digo NRZ normal";
 choices[55][3] = "C&oacute;digo bifase";
 answers[55] = 3;
 units[55] = ['105'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4872. ";
 preguntaids[55] = 4872


//  Id pregunta: 4839 Año de creación de pregunta: 2002
 questions[56]= "57)  En telecomunicaciones se emplea mucho el concepto matem&aacute;tico de 'transformada'. &iquest;Podr&iacute;a decir a qu&eacute; se refiere este concepto?";
 choices[56]= new Array();
 choices[56][0] = "Es un cambio en la modulaci&oacute;n de la se&ntilde;al al pasar por las bobinas de 4 hilos.";
 choices[56][1] = "Es una operaci&oacute;n matem&aacute;tica que expresa una ecuaci&oacute;n en otros t&eacute;rminos mucho m&aacute;s f&aacute;cilmente tratables por un ordenador y m&aacute;s intuitivamente comprensibles por el ser humano.";
 choices[56][2] = "Es un cambio de base de las cantidades para poder operar con ellas en l&oacute;gica digital.";
 choices[56][3] = "Nada de lo anterior es cierto.";
 answers[56] = 1;
 units[56] = ['104'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4839. ";
 preguntaids[56] = 4839


//  Id pregunta: 4877 Año de creación de pregunta: 2002
 questions[57]= "58)  La direcci&oacute;n IP:";
 choices[57]= new Array();
 choices[57][0] = "Es &uacute;nica para cada tarjeta de red";
 choices[57][1] = "Es asignada por una entidad supranacional";
 choices[57][2] = "Puede ser modificada manualmente en UNIX";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 2;
 units[57] = ['105'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4877. ";
 preguntaids[57] = 4877


//  Id pregunta: 4891 Año de creación de pregunta: 2002
 questions[58]= "59)  La interconexi&oacute;n de redes privadas a trav&eacute;s de la red 'p&uacute;blica' Internet manteniendo sus propias direcciones IP se consigue por medio de:";
 choices[58]= new Array();
 choices[58][0] = "Firewalls";
 choices[58][1] = "Proxies a nivel de aplicaci&oacute;n";
 choices[58][2] = "Tunneling o encapsulado";
 choices[58][3] = "Cifrado de las cabeceras IP";
 answers[58] = 2;
 units[58] = ['114'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4891. ";
 preguntaids[58] = 4891


//  Id pregunta: 4868 Año de creación de pregunta: 2002
 questions[59]= "60)  La aplicaci&oacute;n 'traceroute' basada en ICMP:";
 choices[59]= new Array();
 choices[59][0] = "permite conocer si un sistema est&aacute; accesible";
 choices[59][1] = "permite establecer la ruta a seguir por un conjunto de datagramas IP";
 choices[59][2] = "permite conocer la ruta seguida por un datagrama IP";
 choices[59][3] = "permite obtener un mapa de la red utilizada";
 answers[59] = 2;
 units[59] = ['105'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4868. ";
 preguntaids[59] = 4868


//  Id pregunta: 4867 Año de creación de pregunta: 2002
 questions[60]= "61)  La actividad conocida como spamming es:";
 choices[60]= new Array();
 choices[60][0] = "uso de una direcci&oacute;n IP falsa para suplantar identidades en Internet";
 choices[60][1] = "uso de mecanismos de proxy para ocultar identidades y direcciones en Internet";
 choices[60][2] = "uso del correo electr&oacute;nico para enviar publicidad no solicitada";
 choices[60][3] = "uso de algoritmos de rastreo en Internet para localizar bases de datos y servidores";
 answers[60] = 2;
 units[60] = ['120'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4867. ";
 preguntaids[60] = 4867


//  Id pregunta: 4852 Año de creación de pregunta: 2002
 questions[61]= "62)  En una celda ATM, si el campo PT contiene el valor 100:";
 choices[61]= new Array();
 choices[61][0] = "Es una celda de datos de usuario";
 choices[61][1] = "Es una celda de gesti&oacute;n de recursos";
 choices[61][2] = "Es una celda de datos de usuario pero indica extremo a extremo la congestion de trafico";
 choices[61][3] = "Es una celda asociada al segmento F5 de OAM";
 answers[61] = 3;
 units[61] = ['107'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4852. ";
 preguntaids[61] = 4852


//  Id pregunta: 4817 Año de creación de pregunta: 2002
 questions[62]= "63)  En las LAN el proceso 'token passing' o paso de testigo supone:";
 choices[62]= new Array();
 choices[62][0] = "Escuchar el tr&aacute;fico del testigo y transmitir si no se detecta nada";
 choices[62][1] = "Utilizar la posesi&oacute;n del testigo para garantizar el derecho a transmitir";
 choices[62][2] = "A&ntilde;adir tramas de testigo a las tramas de datos para acceder a la red";
 choices[62][3] = "El testigo circula en un anillo hasta que alcanza su destino";
 answers[62] = 1;
 units[62] = ['112'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4817. ";
 preguntaids[62] = 4817


//  Id pregunta: 4860 Año de creación de pregunta: 2002
 questions[63]= "64)  En una red TCP/IP, la conmutaci&oacute;n de nivel 4:";
 choices[63]= new Array();
 choices[63][0] = "No existe";
 choices[63][1] = "Se realiza mediante el identificador MAC del paquete IP";
 choices[63][2] = "Se realiza mediante el identificador de puerto del paquete IP";
 choices[63][3] = "Se realiza mediante el identificador de la direcci&oacute;n IP";
 answers[63] = 2;
 units[63] = ['105'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4860. ";
 preguntaids[63] = 4860


//  Id pregunta: 4889 Año de creación de pregunta: 2002
 questions[64]= "65)  La funci&oacute;n fundamental de un &quot;m&oacute;dem&quot; es:";
 choices[64]= new Array();
 choices[64][0] = "La adaptaci&oacute;n de las se&ntilde;ales digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[64][1] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[64][2] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas y digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica digital";
 choices[64][3] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de un medio no anal&oacute;gico";
 answers[64] = 0;
 units[64] = ['104'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4889. ";
 preguntaids[64] = 4889


//  Id pregunta: 4861 Año de creación de pregunta: 2002
 questions[65]= "66)  En X.400, &iquest;cu&aacute;les son las partes que definen un dominio de gesti&oacute;n?:";
 choices[65]= new Array();
 choices[65][0] = "Un PRMD y un IPM";
 choices[65][1] = "Un AU y un ADMD";
 choices[65][2] = "Un MTA y opcionalmente UA's, MS's y AU's";
 choices[65][3] = "Un AU y un PRMD";
 answers[65] = 1;
 units[65] = ['116'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4861. ";
 preguntaids[65] = 4861


//  Id pregunta: 4815 Año de creación de pregunta: 2002
 questions[66]= "67)  En la Red Digital de Servicios Integrados, indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[66]= new Array();
 choices[66][0] = "Existen definidos 2 tipos de acceso: b&aacute;sico y primario";
 choices[66][1] = "El acceso primario est&aacute; constituido por 30 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[66][2] = "Es posible la conexi&oacute;n a la RDSI a trav&eacute;s de un modem m&aacute;s un adaptador anal&oacute;gico-digital";
 choices[66][3] = "Proporciona conexiones digitales extremo a extremo";
 answers[66] = 1;
 units[66] = ['114'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4815. ";
 preguntaids[66] = 4815


//  Id pregunta: 4834 Año de creación de pregunta: 2002
 questions[67]= "68)  En relaci&oacute;n con la prestaci&oacute;n de servicios de telecomunicaciones en Espa&ntilde;a, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[67]= new Array();
 choices[67][0] = "Est&aacute; liberalizada la provisi&oacute;n de servicios, pero no la instalaci&oacute;n de redes de telecomunicaci&oacute;n";
 choices[67][1] = "S&oacute;lo est&aacute;n liberalizadas las comunicaciones telef&oacute;nicas y el acceso a internet";
 choices[67][2] = "S&oacute;lo Telef&oacute;nica de Espa&ntilde;a, Jazztel y Ono est&aacute;n autorizadas a alquilar circuitos punto a punto";
 choices[67][3] = "La instalaci&oacute;n y explotaci&oacute;n de redes y la provisi&oacute;n de servicios de telecomunicaciones est&aacute;n liberalizados";
 answers[67] = 3;
 units[67] = ['121'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4834. ";
 preguntaids[67] = 4834


//  Id pregunta: 4844 Año de creación de pregunta: 2002
 questions[68]= "69)  En UMTS un terminal puede comunicarse simult&aacute;neamente a trav&eacute;s de dos celdas diferentes. Esto:";
 choices[68]= new Array();
 choices[68][0] = "Es cierto tambi&eacute;n en GSM";
 choices[68][1] = "Es cierto tambi&eacute;n en GPRS";
 choices[68][2] = "Es cierto s&oacute;lo en UMTS";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = 2;
 units[68] = ['108'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4844. ";
 preguntaids[68] = 4844


//  Id pregunta: 4862 Año de creación de pregunta: 2002
 questions[69]= "70)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[69]= new Array();
 choices[69][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[69][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[69][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[69][3] = "limitaciones de la distancia a cubrir";
 answers[69] = 1;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4862. ";
 preguntaids[69] = 4862


//  Id pregunta: 4835 Año de creación de pregunta: 2002
 questions[70]= "71)  En sistemas de informaci&oacute;n y comunicaciones, INAP es acr&oacute;nimo de:";
 choices[70]= new Array();
 choices[70][0] = "Integration Network Application Protocol";
 choices[70][1] = "Intelligent Network Application Protocol";
 choices[70][2] = "Inverse Naming Address Protocol";
 choices[70][3] = "Intelligent Network Application Part";
 answers[70] = 3;
 units[70] = ['102'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4835. ";
 preguntaids[70] = 4835


//  Id pregunta: 4836 Año de creación de pregunta: 2002
 questions[71]= "72)  En sistemas de informaci&oacute;n y comunicaciones, MAP es el acr&oacute;nimo de:";
 choices[71]= new Array();
 choices[71][0] = "Multimedia application Protocol";
 choices[71][1] = "Mediagateway Advanced Protocol";
 choices[71][2] = "Medium Access Protocol";
 choices[71][3] = "Mobile Application Part";
 answers[71] = 3;
 units[71] = ['117'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4836. ";
 preguntaids[71] = 4836


//  Id pregunta: 4843 Año de creación de pregunta: 2002
 questions[72]= "73)  En transmisi&oacute;n de datos, &iquest;qu&eacute; ventaja reporta el uso de c&eacute;lulas peque&ntilde;as de longitud fija?:";
 choices[72]= new Array();
 choices[72][0] = "Utilizaci&oacute;n m&aacute;s eficiente del enlace ya que un dispositivo puede enviar c&eacute;lulas sin necesidad de un slot 'libre' de tiempo";
 choices[72][1] = "Minimizaci&oacute;n de esperas intermitentes que pueden derivarse de la espera para que se transmita un paquete largo";
 choices[72][2] = "Una estaci&oacute;n puede enviar muchas c&eacute;lulas en fila sin tener que esperar para est&eacute; disponible su slot de tiempo";
 choices[72][3] = "Puede usarse un pol&iacute;tica de tr&aacute;fico para comparar el tr&aacute;fico real con el acordado";
 answers[72] = 1;
 units[72] = ['110'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4843. ";
 preguntaids[72] = 4843


//  Id pregunta: 4898 Año de creación de pregunta: 2002
 questions[73]= "74)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[73]= new Array();
 choices[73][0] = "11 Mbps";
 choices[73][1] = "11 MBps";
 choices[73][2] = "54 Mbps";
 choices[73][3] = "54 MBps";
 answers[73] = 2;
 units[73] = ['108', '112'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4898. ";
 preguntaids[73] = 4898


//  Id pregunta: 4892 Año de creación de pregunta: 2002
 questions[74]= "75)  La ITU-T ha recogido en diversas recomendaciones la forma en que un terminal as&iacute;ncrono puede acceder a una red de conmutaci&oacute;n de paquetes. El conjunto de estas normas se conoce como la triple X. Indique cual de las siguientes opciones es verdadera:";
 choices[74]= new Array();
 choices[74][0] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[74][1] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica la forma el terminal de paquetes remoto puede controlar los par&aacute;metros del Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblado";
 choices[74][2] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[74][3] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.25 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal  con el Ensamblador\Desensamblador de Paquetes; y la X.7";
 answers[74] = 2;
 units[74] = ['112'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4892. ";
 preguntaids[74] = 4892


