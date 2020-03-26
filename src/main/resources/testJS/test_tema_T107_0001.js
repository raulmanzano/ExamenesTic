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
//  Id pregunta: 4774 Año de creación de pregunta: 2002
 questions[0]= "1)  En ATM , &iquest;Qu&eacute; tipo de AAL (ATM Adaptation Layer) es el principal para datos, y juega un papel importante en emulaci&oacute;n de LAN?:";
 choices[0]= new Array();
 choices[0][0] = "AAL 1";
 choices[0][1] = "AAL 2";
 choices[0][2] = "AAL 3/4";
 choices[0][3] = "AAL 5";
 answers[0] = 3;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4774. ";
 preguntaids[0] = 4774


//  Id pregunta: 5596 Año de creación de pregunta: 2007
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un posible mecanismo de transmisi&oacute;n de voz sobre paquetes de datos?";
 choices[1]= new Array();
 choices[1][0] = "Voz sobre IP (VoIP).";
 choices[1][1] = "Voz sobre TCP (VoTCP).";
 choices[1][2] = "Voz sobre celdas (VoATM).";
 choices[1][3] = "Voz sobre tramas (VoFR).";
 answers[1] = 1;
 units[1] = ['107'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5596. ";
 preguntaids[1] = 5596


//  Id pregunta: 4871 Año de creación de pregunta: 2002
 questions[2]= "3)  La capa de adaptaci&oacute;n de ATM se encarga de:";
 choices[2]= new Array();
 choices[2][0] = "Establecer y liberar los circuitos virtuales";
 choices[2][1] = "Segmentar y reenviar los paquetes mayores de una celda";
 choices[2][2] = "Generar y extraer las cabeceras de las celdas";
 choices[2][3] = "Define las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n";
 answers[2] = 1;
 units[2] = ['107'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4871. ";
 preguntaids[2] = 4871


//  Id pregunta: 1398 Año de creación de pregunta: 2016
 questions[3]= "4)  MPLS (Multi protocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[3]= new Array();
 choices[3][0] = "FEC (Forwarding Equivalent Class).";
 choices[3][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[3][2] = "CIR (Commited Information Rate).";
 choices[3][3] = "MBS (Maximum Burst Size).";
 answers[3] = 0;
 units[3] = ['107'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 1398. ";
 preguntaids[3] = 1398


//  Id pregunta: 4627 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Qu&eacute; relaci&oacute;n hay entre Jerarqu&iacute;a Digital S&iacute;ncrona y ATM?:";
 choices[4]= new Array();
 choices[4][0] = "Son dos est&aacute;ndares correspondientes al mismo nivel ISO-OSI, por lo que la decisi&oacute;n entre uno y otro es alternativa";
 choices[4][1] = "Las celdas ATM suelen viajar 'embebidas' en tramas JDS";
 choices[4][2] = "Las tramas JDS suelen viajar embebidas en tramas ATM";
 choices[4][3] = "ATM y JDS son dos nombres distintos para el mismo est&aacute;ndar";
 answers[4] = 1;
 units[4] = ['107'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4627. ";
 preguntaids[4] = 4627


//  Id pregunta: 5125 Año de creación de pregunta: 2003
 questions[5]= "6)  En una red VoIP el elemento llamado &quot;SoftSwitch&quot; es el encargado de:";
 choices[5]= new Array();
 choices[5][0] = "Permitir la comunicaci&oacute;n entre la Red VoIP y las Redes tradicionales de Conmutaci&oacute;n de Circuitos";
 choices[5][1] = "Proporcionar una interfaz hacia la Red VoIP y una o mas interfaces tradicionales de voz hacia el cliente";
 choices[5][2] = "Recibir la se&ntilde;alizaci&oacute;n de las llamadas y de enrutarlas hacia su destino";
 choices[5][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[5] = 2;
 units[5] = ['107'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5125. ";
 preguntaids[5] = 5125


//  Id pregunta: 4852 Año de creación de pregunta: 2002
 questions[6]= "7)  En una celda ATM, si el campo PT contiene el valor 100:";
 choices[6]= new Array();
 choices[6][0] = "Es una celda de datos de usuario";
 choices[6][1] = "Es una celda de gesti&oacute;n de recursos";
 choices[6][2] = "Es una celda de datos de usuario pero indica extremo a extremo la congestion de trafico";
 choices[6][3] = "Es una celda asociada al segmento F5 de OAM";
 answers[6] = 3;
 units[6] = ['107'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4852. ";
 preguntaids[6] = 4852


//  Id pregunta: 4631 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Qu&eacute; tama&ntilde;o de celdas se utiliza en ATM?:";
 choices[7]= new Array();
 choices[7][0] = "Un m&aacute;ximo de 64 bytes";
 choices[7][1] = "El tama&ntilde;o m&aacute;ximo depende del contrato con el proveedor del servicio, siendo m&uacute;ltiplo de 64 bytes";
 choices[7][2] = "1024 bits";
 choices[7][3] = "424 bits";
 answers[7] = 3;
 units[7] = ['107'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4631. ";
 preguntaids[7] = 4631


//  Id pregunta: 4467 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;C&oacute;mo se suele representar la trama de un STM-1 en SDH?";
 choices[8]= new Array();
 choices[8][0] = "como una fila de 2430 octetos separados por bloques funcionales";
 choices[8][1] = "como una matriz de 270 filas y 9 columnas de octetos separados en bloques funcionales";
 choices[8][2] = "como una columna de 2430 octetos separados por bloques funcionales";
 choices[8][3] = "como una matriz de 270 columnas y 9 filas de octetos separados en bloques funcionales";
 answers[8] = 3;
 units[8] = ['107'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4467. ";
 preguntaids[8] = 4467


//  Id pregunta: 6082 Año de creación de pregunta: 2003
 questions[9]= "10)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en lanorma del ETSI:";
 choices[9]= new Array();
 choices[9][0] = "ET 301-192";
 choices[9][1] = "ET 202-125";
 choices[9][2] = "ET 125-100";
 choices[9][3] = "ET 100-200";
 answers[9] = 0;
 units[9] = ['107', '108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6082. Examen TIC A1 MAP 2007";
 preguntaids[9] = 6082


//  Id pregunta: 5180 Año de creación de pregunta: 2003
 questions[10]= "11)  Mediante qu&eacute; tecnolog&iacute;a se puede conectar un PC a sus perif&eacute;ricos de forma inal&aacute;mbrica";
 choices[10]= new Array();
 choices[10][0] = "IMODE";
 choices[10][1] = "OFDM";
 choices[10][2] = "BLUETOOTH";
 choices[10][3] = "WIFI";
 answers[10] = 2;
 units[10] = ['107'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5180. ";
 preguntaids[10] = 5180


//  Id pregunta: 5746 Año de creación de pregunta: 2007
 questions[11]= "12)  En la tecnolog&iacute;a ATM qu&eacute; tipo de protocolo utilizar&iacute;a en la capa de adaptaci&oacute;n al medio si estamos trabajando en modo orientado a conexi&oacute;n y con una tasa de bits constante:";
 choices[11]= new Array();
 choices[11][0] = "Tipo 1";
 choices[11][1] = "Tipo 2";
 choices[11][2] = "Tipo 3/4";
 choices[11][3] = "Tipo 5";
 answers[11] = 0;
 units[11] = ['107'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5746. ";
 preguntaids[11] = 5746


//  Id pregunta: 6134 Año de creación de pregunta: 2003
 questions[12]= "13)  Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?:";
 choices[12]= new Array();
 choices[12][0] = "S&iacute;";
 choices[12][1] = "No";
 choices[12][2] = "Depende de la direcci&oacute;n de la Puerta de Enlace";
 choices[12][3] = "Depende de la configuraci&oacute;n del switch";
 answers[12] = 0;
 units[12] = ['105', '107', '109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 6134. Examen TIC A1 MAP 2007";
 preguntaids[12] = 6134


//  Id pregunta: 1843 Año de creación de pregunta: 2016
 questions[13]= "14)  Las redes ATM emplean celdas de:";
 choices[13]= new Array();
 choices[13][0] = "Tama&ntilde;o variable: entre 5 y 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n.";
 choices[13][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n.";
 choices[13][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[13][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[13] = 1;
 units[13] = ['107'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1843. ";
 preguntaids[13] = 1843


//  Id pregunta: 5590 Año de creación de pregunta: 2007
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes clases de servicio es m&aacute;s adecuada en ATM para la transmisi&oacute;n de video comprimido en tiempo real?";
 choices[14]= new Array();
 choices[14][0] = "UBR";
 choices[14][1] = "VBR-NTR";
 choices[14][2] = "VBR-RT";
 choices[14][3] = "CBR";
 answers[14] = 2;
 units[14] = ['107'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5590. ";
 preguntaids[14] = 5590


//  Id pregunta: 1844 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre MPLS (Multiprotocol Label Switching)";
 choices[15]= new Array();
 choices[15][0] = "Opera entre la capa de enlace y la capa de red.";
 choices[15][1] = "Opera entre la capa de transporte y la capa de red.";
 choices[15][2] = "Complementa los servicios de TLS/SSL.";
 choices[15][3] = "Requiere una capa f&iacute;sica espec&iacute;fica.";
 answers[15] = 0;
 units[15] = ['107'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 1844. ";
 preguntaids[15] = 1844


//  Id pregunta: 4708 Año de creación de pregunta: 2002
 questions[16]= "17)  Es falso que las &quot;Etiquetas RF/ID&quot;:";
 choices[16]= new Array();
 choices[16][0] = "Permiten s&oacute;lo lectura a una distancia de 1 metro. La escritura se debe hacer con contacto.";
 choices[16][1] = "Las etiquetas RF/ID pueden contener hasta 64 bytes";
 choices[16][2] = "Son etiquetas con una espiral en su interior de 5 x 5 cm";
 choices[16][3] = "Su principal aplicaci&oacute;n es inventario o seguridad";
 answers[16] = 0;
 units[16] = ['107'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4708. ";
 preguntaids[16] = 4708


//  Id pregunta: 5925 Año de creación de pregunta: 2007
 questions[17]= "18)  Una red ATM (Asynchronous Transfer Mode):";
 choices[17]= new Array();
 choices[17][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes";
 choices[17][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real";
 choices[17][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuarfunciones de encaminamiento de las c&eacute;lulas";
 choices[17][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas";
 answers[17] = 2;
 units[17] = ['107'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5925. ";
 preguntaids[17] = 5925


//  Id pregunta: 5109 Año de creación de pregunta: 2003
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes protocolos se usa para se&ntilde;alizaci&oacute;n en VoIP?";
 choices[18]= new Array();
 choices[18][0] = "POTS";
 choices[18][1] = "RSVP";
 choices[18][2] = "DTMF";
 choices[18][3] = "SIP";
 answers[18] = 3;
 units[18] = ['107'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5109. ";
 preguntaids[18] = 5109


//  Id pregunta: 4465 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;C&oacute;mo se llama el est&aacute;ndar existente para la integraci&oacute;n de LAN en ATM?:";
 choices[19]= new Array();
 choices[19][0] = "LANE";
 choices[19][1] = "WLAN";
 choices[19][2] = "FDDI";
 choices[19][3] = "ANYLAN";
 answers[19] = 0;
 units[19] = ['107'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4465. ";
 preguntaids[19] = 4465


//  Id pregunta: 5877 Año de creación de pregunta: 2007
 questions[20]= "21)  En ATM, para la transmisi&oacute;n de servicios is&oacute;cronos se utilizan los protocolos de adaptaci&oacute;n AAL1 y AAL2. La diferencia entre ellos es";
 choices[20]= new Array();
 choices[20][0] = "AAL1 es de velocidad variable y AAL2 es de velocidad constante";
 choices[20][1] = "AAL1 es de velocidad constante y AAL2 es de velocidad variable";
 choices[20][2] = "AAL1 es orientado a conexi&oacute;n y AAL2 es de tipo datagrama";
 choices[20][3] = "AAL1 es de tipo datagrama y AAL2 es orientado a conexi&oacute;n";
 answers[20] = 1;
 units[20] = ['107'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5877. ";
 preguntaids[20] = 5877


//  Id pregunta: 1633 Año de creación de pregunta: 2016
 questions[21]= "22)  Dentro de la arquitectura MPLS -Multiple Protocol Label Switching-, tecnolog&iacute;a de conmutaci&oacute;n para circuitos virtuales, &iquest;c&oacute;mo se denomina al tr&aacute;fico que se encamina bajo una etiqueta?";
 choices[21]= new Array();
 choices[21][0] = "FER";
 choices[21][1] = "LSB";
 choices[21][2] = "FEC";
 choices[21][3] = "LSR";
 answers[21] = 2;
 units[21] = ['107'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1633. ";
 preguntaids[21] = 1633


//  Id pregunta: 1913 Año de creación de pregunta: 2016
 questions[22]= "23)  Con respecto a la tecnolog&iacute;a de Jerarqu&iacute;a Digital S&iacute;ncrona (SDH/JDS) &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[22]= new Array();
 choices[22][0] = "Las tramas tributarias de las se&ntilde;ales de I&iacute;nea pueden ser subdivididas para acomodar cargas plesi&oacute;cronas, trafico ATM o unidades de menor orden. Esto supone mezclar trance de distinto tipo dando lugar a redes flexibles.";
 choices[22][1] = "EI procesamiento de la serial se lleva a cabo a nivel de STM-1, con lo que las se&ntilde;ales de velocidades superiores son s&iacute;ncronas entre s&iacute;, y est&aacute;n en fase per ser generadas localmente por cada nodo la red";
 choices[22][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[22][3] = "No sirven para transportar trance de tipo IP";
 answers[22] = 3;
 units[22] = ['107'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1913. ";
 preguntaids[22] = 1913


//  Id pregunta: 1517 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; es FEC (Forwarding Equivalence Class) en MPLS?";
 choices[23]= new Array();
 choices[23][0] = "Flujos de tr&aacute;fico que comparten la misma ruta y el mismo tratamiento en cada LSR.";
 choices[23][1] = "Es el trayecto a trav&eacute;s del cual fluye el tr&aacute;fico entre dos extremos LER.";
 choices[23][2] = "Protocolo que conmuta etiquetas.";
 choices[23][3] = "Protocolo responsable de que el LSP sea establecido para que sea funcional mediante el intercambio de etiquetas entre los nodos de la red.";
 answers[23] = 0;
 units[23] = ['107'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1517. ";
 preguntaids[23] = 1517


//  Id pregunta: 4594 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Entre que dos dispositivos se utiliza el NNI (network node interface)?:";
 choices[24]= new Array();
 choices[24][0] = "Dos switches ATM";
 choices[24][1] = "Dos sistemas finales ATM";
 choices[24][2] = "Un DSU/CSU y un router";
 choices[24][3] = "Un sistema final ATM y un switch";
 answers[24] = 0;
 units[24] = ['107'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4594. ";
 preguntaids[24] = 4594


//  Id pregunta: 1636 Año de creación de pregunta: 2016
 questions[25]= "26)  ATM (modo de transferencia as&iacute;ncrono)es un protocolo de nivel 2 utilizado en las redes de operadores sobre el que se encapsulan protocolos de niveles superiores en celdas de 53 octetos. Indique cu&aacute;l de las siguientes capas es la encargada de a&ntilde;adir los &uacute;ltimos 5 bytes de overhead &oacute; sobrecarga de protocolo a los 48 bytes rest&aacute;ntes para completar la celda ATM.";
 choices[25]= new Array();
 choices[25][0] = "Capa AAL1";
 choices[25][1] = "Capa CBR";
 choices[25][2] = "Capa AAL5";
 choices[25][3] = "Capa ATM";
 answers[25] = 3;
 units[25] = ['107'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 1636. ";
 preguntaids[25] = 1636


//  Id pregunta: 1396 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[26]= new Array();
 choices[26][0] = "LSP (Label Switched Path).";
 choices[26][1] = "LSR (Label Switching Router).";
 choices[26][2] = "FEC (Forwarding Equivalence Class).";
 choices[26][3] = "ILP (Incoming Label Protocol).";
 answers[26] = 3;
 units[26] = ['107'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1396. ";
 preguntaids[26] = 1396


//  Id pregunta: 1842 Año de creación de pregunta: 2016
 questions[27]= "28)  El nombre del est&aacute;ndar WiMAX proviene de:";
 choices[27]= new Array();
 choices[27][0] = "Wireless Media for &Aacute;rea eXtent";
 choices[27][1] = "Worldwide Interoperability for Microwave Access";
 choices[27][2] = "WiFi MAXimun";
 choices[27][3] = "Wireless Model Access eXtensive";
 answers[27] = 1;
 units[27] = ['107'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1842. ";
 preguntaids[27] = 1842


//  Id pregunta: 6745 Año de creación de pregunta: 2009
 questions[28]= "29)  Los fabricantes e investigadores hacen referencia a diversos factores determinantes en la calidad de la trasmisi&oacute;n de la voz; de entre los siguientes, determine el &quot;cr&iacute;tico&quot; para aplicaciones de tiempo real como la voz y el video sobre IP:";
 choices[28]= new Array();
 choices[28][0] = "Jitter";
 choices[28][1] = "Throughput";
 choices[28][2] = "Delay";
 choices[28][3] = "Packet Loss";
 answers[28] = 0;
 units[28] = ['107'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 6745. MAP 2008 A1";
 preguntaids[28] = 6745


//  Id pregunta: 1249 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes NO es un elemento de una red MPLS seg&uacute;n el RFC 3031?";
 choices[29]= new Array();
 choices[29][0] = "LSR - Label Switching Router.";
 choices[29][1] = "LDP - Label Distribution Protocol.";
 choices[29][2] = "ILM - Incoming Label Mode.";
 choices[29][3] = "LSP - Label Switched Path.";
 answers[29] = 2;
 units[29] = ['107'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1249. ";
 preguntaids[29] = 1249


//  Id pregunta: 1218 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique la afirmaci&oacute;n correcta respecto a VPLS:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo permite establecer enlaces VPN punto a punto.";
 choices[30][1] = "Ofrece un servicio VPN de capa 4.";
 choices[30][2] = "Permite establecer Calidad de Servicio (QoS) utilizando el campo EXP.";
 choices[30][3] = "S&oacute;lo es &uacute;til en un contexto LAN.";
 answers[30] = 2;
 units[30] = ['107'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1218. ";
 preguntaids[30] = 1218


//  Id pregunta: 4670 Año de creación de pregunta: 2002
 questions[31]= "32)  De SDH y SONET podemos decir:";
 choices[31]= new Array();
 choices[31][0] = "son en realidad lo mismo pero con diferente denominaci&oacute;n en Norteam&eacute;rica y Europa";
 choices[31][1] = "son distintos en la disposici&oacute;n de los contenedores virtuales pero todas sus tasas de transmisi&oacute;n coinciden";
 choices[31][2] = "son compatibles en conjunto, adaptando las velocidades de diferentes niveles de capacidad";
 choices[31][3] = "son jerarqu&iacute;as de transmisi&oacute;n digital totalmente distintas e incompatibles entre s&iacute;";
 answers[31] = 2;
 units[31] = ['107'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4670. ";
 preguntaids[31] = 4670


//  Id pregunta: 5984 Año de creación de pregunta: 2007
 questions[32]= "33)  El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a laseguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno quepermite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a losest&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[32]= new Array();
 choices[32][0] = "El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivosen redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifradosim&eacute;trico RC4";
 choices[32][1] = "El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridaddel protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x";
 choices[32][2] = "El protocolo WPA (Wi-Fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE";
 choices[32][3] = "IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redesinal&aacute;mbricas";
 answers[32] = 3;
 units[32] = ['107'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5984. ";
 preguntaids[32] = 5984


//  Id pregunta: 6474 Año de creación de pregunta: 2003
 questions[33]= "34)  &iquest;Cu&aacute;l de estas afirmaciones NO es correcta?";
 choices[33]= new Array();
 choices[33][0] = "La recomendaci&oacute;n aplicable para HDSL es la G991.1";
 choices[33][1] = "La recomendaci&oacute;n aplicable para ADSL-lite es G992.2";
 choices[33][2] = "La recomendaci&oacute;n aplicable para el ADSL2 es G992.3 y G992.4";
 choices[33][3] = "La recomendaci&oacute;n aplicable del SHDSL es la G992.1";
 answers[33] = 3;
 units[33] = ['107'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 6474. ";
 preguntaids[33] = 6474


//  Id pregunta: 4700 Año de creación de pregunta: 2002
 questions[34]= "35)  El nivel f&iacute;sico incorpora un mecanismo de deteccion de canal libre que se denomina dentro de la especificaci&oacute;n 802.11:";
 choices[34]= new Array();
 choices[34][0] = "Carrier Detection";
 choices[34][1] = "Clear Channel Assessment";
 choices[34][2] = "Channel Check";
 choices[34][3] = "Carrier Assesment";
 answers[34] = 1;
 units[34] = ['107'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4700. ";
 preguntaids[34] = 4700


//  Id pregunta: 7567 Año de creación de pregunta: 2010
 questions[35]= "36)  En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos:";
 choices[35]= new Array();
 choices[35][0] = "De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n.";
 choices[35][1] = "De 5 bytes.";
 choices[35][2] = "De 48 bytes.";
 choices[35][3] = "De 53 bytes";
 answers[35] = 3;
 units[35] = ['107'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7567. Map 2005";
 preguntaids[35] = 7567


//  Id pregunta: 4608 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Qu&eacute; es SDH?";
 choices[36]= new Array();
 choices[36][0] = "una familia de protocolos para transportar se&ntilde;ales digitales multimedia";
 choices[36][1] = "un conjunto de especificaciones de tasas de transmisi&oacute;n que transportan s&iacute;ncronamente se&ntilde;ales digitales de diferentes capacidades";
 choices[36][2] = "una torre de protocolos propietaria similar a SNA";
 choices[36][3] = "un conjunto de est&aacute;ndares americanos de transporte de se&ntilde;ales digitales entre sistemas digitales";
 answers[36] = 1;
 units[36] = ['107'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4608. ";
 preguntaids[36] = 4608


//  Id pregunta: 1757 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale qu&eacute; longitud tiene la cabecera de MPLS (Multiprotocol Label Switching):";
 choices[37]= new Array();
 choices[37][0] = "20 bits.";
 choices[37][1] = "32 bits.";
 choices[37][2] = "53 Bytes.";
 choices[37][3] = "53 bits.";
 answers[37] = 1;
 units[37] = ['107'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 1757. ";
 preguntaids[37] = 1757


//  Id pregunta: 5165 Año de creación de pregunta: 2003
 questions[38]= "39)  De las siguientes opciones cual no esta relacionada con ATM";
 choices[38]= new Array();
 choices[38][0] = "VPI";
 choices[38][1] = "VCI";
 choices[38][2] = "VHI";
 choices[38][3] = "SDH";
 answers[38] = 2;
 units[38] = ['107'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5165. ";
 preguntaids[38] = 5165


//  Id pregunta: 4466 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;C&oacute;mo se llaman los paquetes de longitud fija en ATM?:";
 choices[39]= new Array();
 choices[39][0] = "Pulsos";
 choices[39][1] = "Tramas";
 choices[39][2] = "Celdas";
 choices[39][3] = "R&aacute;fagas";
 answers[39] = 2;
 units[39] = ['107'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4466. ";
 preguntaids[39] = 4466


//  Id pregunta: 5189 Año de creación de pregunta: 2003
 questions[40]= "41)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modo de transferencia as&iacute;ncrono) es:";
 choices[40]= new Array();
 choices[40][0] = "Utiliza un formato de celda de longitud fija";
 choices[40][1] = "El tama&ntilde;o de la celda se negocia a nivel de enlace";
 choices[40][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[40][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transporte";
 answers[40] = 0;
 units[40] = ['107'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5189. ";
 preguntaids[40] = 5189


//  Id pregunta: 6092 Año de creación de pregunta: 2003
 questions[41]= "42)  ATM (&quot;Asynchronous Transfer Mode&quot;) emplea celdas:";
 choices[41]= new Array();
 choices[41][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n";
 choices[41][1] = "De tama&ntilde;o fijo : 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n";
 choices[41][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n";
 choices[41][3] = "De tama&ntilde;o variable : 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n";
 answers[41] = 1;
 units[41] = ['107'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6092. Examen TIC A1 MAP 2007";
 preguntaids[41] = 6092


//  Id pregunta: 4603 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Qu&eacute; es el jitter?";
 choices[42]= new Array();
 choices[42][0] = "un dispositivo similar al router pero con mayor inteligencia a la hora de enrutar los paquetes";
 choices[42][1] = "la variabilidad del retardo en la transmisi&oacute;n de informaci&oacute;n por una red";
 choices[42][2] = "un envoltorio software a modo de cortafuegos que se instala sobre protocolos conocidos como TCP o FTP";
 choices[42][3] = "un hacker que se dedica a desenmascarar en la red a otros hackers";
 answers[42] = 1;
 units[42] = ['107'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4603. ";
 preguntaids[42] = 4603


//  Id pregunta: 5162 Año de creación de pregunta: 2003
 questions[43]= "44)  &iquest;Qu&eacute; mensajes son necesarios para establecer una conexi&oacute;n TCP?:";
 choices[43]= new Array();
 choices[43][0] = "SYN y ACK";
 choices[43][1] = "SYN, SYN-ACK y ACK";
 choices[43][2] = "SYN, SYN-ACK, ACK y NSI";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = 1;
 units[43] = ['107'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5162. ";
 preguntaids[43] = 5162


//  Id pregunta: 5174 Año de creación de pregunta: 2003
 questions[44]= "45)  Indicar la afirmaci&oacute;n correcta:";
 choices[44]= new Array();
 choices[44][0] = "MPLS es un est&aacute;ndar ISO de conmutaci&oacute;nde paquetes, que trata de proporcionaralgunas de las caracter&iacute;sticasde las redes orientadas a conexi&oacute;na las redes no orientadasa conexi&oacute;n";
 choices[44][1] = "Una red MPLS est&aacute; compuestapor dos tipos principales denodos, los LER (Label End Routers)y los LSR (Label Switching Routers)";
 choices[44][2] = "MPLS es un est&aacute;ndar IP del IETF de conmutaci&oacute;nde paquetes, que trata de proporcionaralgunas de las caracter&iacute;sticasde las redes no orientadas a conexi&oacute;na las redes orientadasa conexi&oacute;n";
 choices[44][3] = "MPLS se implementahabitualmente como una soluci&oacute;n IPpura o de nivel 3";
 answers[44] = 3;
 units[44] = ['107'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5174. ";
 preguntaids[44] = 5174


//  Id pregunta: 5034 Año de creación de pregunta: 2002
 questions[45]= "46)  Respecto a la clase de QoS definido por el ATM Forum, UBR, puede decirse que:";
 choices[45]= new Array();
 choices[45][0] = "Asegura una cantidad m&iacute;nima de datos que pueden transmitirse a trav&eacute;s de la red";
 choices[45][1] = "Garantiza al menos una tasa de c&eacute;lulas transmitidas";
 choices[45][2] = "No garantiza ni siquiera un retardo m&aacute;ximo";
 choices[45][3] = "Tiene una tasa de bits concreta incluida en la especificaci&oacute;n";
 answers[45] = 2;
 units[45] = ['107'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5034. ";
 preguntaids[45] = 5034


//  Id pregunta: 5073 Año de creación de pregunta: 2002
 questions[46]= "47)  SIP es:";
 choices[46]= new Array();
 choices[46][0] = "Particularizaci&oacute;n de GOSIP (Government OSI Profile) m&aacute;s ligera";
 choices[46][1] = "Un tipo de mensaje de H.323 para videotelefon&iacute;a";
 choices[46][2] = "Un protocolo de paquetizaci&oacute;n de voz que se ejecuta en los mediagateways";
 choices[46][3] = "Protocolo de voz sobre IP del IETF";
 answers[46] = 3;
 units[46] = ['107'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5073. ";
 preguntaids[46] = 5073


//  Id pregunta: 4369 Año de creación de pregunta: 2004
 questions[47]= "48)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modelo de transferencia as&iacute;ncrono) es:";
 choices[47]= new Array();
 choices[47][0] = "Utiliza un formato de celda de longitud fija";
 choices[47][1] = "El tama&ntilde;o de la celda se negocia en el nivel de enlace";
 choices[47][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[47][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transporte";
 answers[47] = 0;
 units[47] = ['107'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4369. ";
 preguntaids[47] = 4369


//  Id pregunta: 5797 Año de creación de pregunta: 2007
 questions[48]= "49)  Los identificadores VPI/VCI tienen significado";
 choices[48]= new Array();
 choices[48][0] = "global para toda la red";
 choices[48][1] = "para cada conexi&oacute;n";
 choices[48][2] = "para cada enlace";
 choices[48][3] = "solo entre el terminal y el switch ATM";
 answers[48] = 2;
 units[48] = ['107'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5797. ";
 preguntaids[48] = 5797


//  Id pregunta: 5388 Año de creación de pregunta: 2006
 questions[49]= "50)  MPLS";
 choices[49]= new Array();
 choices[49][0] = "Da soporte al desarrollo de Redes Privadas Virtuales (VPNs) extremo a extremo";
 choices[49][1] = "Se configura internamente en la red de un operador de telecomunicaciones (ISP)";
 choices[49][2] = "Dadas sus capacidades de calidad de servicio (QoS) es recomendado en redes LAN empresariales";
 choices[49][3] = "todas las anteriores";
 answers[49] = 1;
 units[49] = ['107'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5388. ";
 preguntaids[49] = 5388


//  Id pregunta: 5008 Año de creación de pregunta: 2002
 questions[50]= "51)  MPLS se encapsula en la torre de protocolos:";
 choices[50]= new Array();
 choices[50][0] = "por encima del protocolo IP y por debajo del protocolo TCP";
 choices[50][1] = "por encima del protocolo TCP y por debajo de otros protocolos de transporte";
 choices[50][2] = "por encima de los protocolos del nivel de enlace y por debajo de IP";
 choices[50][3] = "por encima de los protocolos del nivel de transporte";
 answers[50] = 2;
 units[50] = ['107'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5008. ";
 preguntaids[50] = 5008


//  Id pregunta: 884 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es la tercera ventana de funcionamiento para la fibra &oacute;ptica?";
 choices[51]= new Array();
 choices[51][0] = "850 nm";
 choices[51][1] = "1310 nm";
 choices[51][2] = "1480 nm";
 choices[51][3] = "1550 nm";
 answers[51] = 3;
 units[51] = ['107'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 884. AGE A2 2015";
 preguntaids[51] = 884


//  Id pregunta: 5159 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Qu&eacute; est&aacute;ndar WIFI es el que soporta simult&aacute;neamente las velocidades de 11Mbps y 54Mbps?";
 choices[52]= new Array();
 choices[52][0] = "802.11a";
 choices[52][1] = "802.11b";
 choices[52][2] = "802.11g";
 choices[52][3] = "802.11x";
 answers[52] = 2;
 units[52] = ['107'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5159. ";
 preguntaids[52] = 5159


//  Id pregunta: 5150 Año de creación de pregunta: 2003
 questions[53]= "54)  &iquest;Con qu&eacute; est&aacute; relacionado CSMA/CD?";
 choices[53]= new Array();
 choices[53][0] = "802.4";
 choices[53][1] = "802.3";
 choices[53][2] = "802.5";
 choices[53][3] = "802.6";
 answers[53] = 1;
 units[53] = ['107'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5150. ";
 preguntaids[53] = 5150


//  Id pregunta: 4298 Año de creación de pregunta: 2003
 questions[54]= "55)  En una red MPLS, &iquest; qu&eacute; funci&oacute;n realiza el LER?";
 choices[54]= new Array();
 choices[54][0] = "Es el elemento que conmuta etiquetas";
 choices[54][1] = "Es el nombre de un circuito virtual MPLS";
 choices[54][2] = "Es el elemento que inicia o termina el t&uacute;nel";
 choices[54][3] = "Es el elemento que conmuta el tr&aacute;fico en funci&oacute;n de las etiquetas";
 answers[54] = 2;
 units[54] = ['107'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4298. ";
 preguntaids[54] = 4298


//  Id pregunta: 7202 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[55]= new Array();
 choices[55][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[55][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[55][2] = "Porque mejora el enrutamiento";
 choices[55][3] = "Por analog&iacute;a con Ethernet";
 answers[55] = 1;
 units[55] = ['107'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7202. Castilla La Mancha 2009";
 preguntaids[55] = 7202


//  Id pregunta: 4677 Año de creación de pregunta: 2002
 questions[56]= "57)  Dentro de una celda ATM, el campo GFC:";
 choices[56]= new Array();
 choices[56][0] = "S&oacute;lo esta presente en las celdas de los interfaces usuario-red";
 choices[56][1] = "Al igual que el campo CLP, &quot;marca&quot; la celda a lo largo de todo su transito por la red";
 choices[56][2] = "Tiene una longitud de 1 bit";
 choices[56][3] = "Proporciona la sincronizaci&oacute;n entre celdas";
 answers[56] = 0;
 units[56] = ['107'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4677. ";
 preguntaids[56] = 4677


//  Id pregunta: 5260 Año de creación de pregunta: 2006
 questions[57]= "58)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[57]= new Array();
 choices[57][0] = "La convergencia de las redes de voz y datos";
 choices[57][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[57][2] = "Ninguna de las anteriores";
 choices[57][3] = "tanto la opci&oacute;n a como la b";
 answers[57] = 3;
 units[57] = ['102', '107', '108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5260. ";
 preguntaids[57] = 5260


//  Id pregunta: 1637 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes clases de servicio proporcionadas por el protocolo ATM (Asynchronous Transfer Mode) deber&iacute;amos utilizar para la transmisi&oacute;n de video MPEG?";
 choices[58]= new Array();
 choices[58][0] = "ABR";
 choices[58][1] = "VBR-RT";
 choices[58][2] = "VBR-NRT";
 choices[58][3] = "UBR";
 answers[58] = 1;
 units[58] = ['107'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1637. ";
 preguntaids[58] = 1637


//  Id pregunta: 5161 Año de creación de pregunta: 2003
 questions[59]= "60)  &iquest;Qu&eacute; influy&oacute; en el origen de XML?";
 choices[59]= new Array();
 choices[59][0] = "SGML y SOAP";
 choices[59][1] = "SGML";
 choices[59][2] = "SGML y HTTP";
 choices[59][3] = "http y SGML";
 answers[59] = 1;
 units[59] = ['107'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5161. ";
 preguntaids[59] = 5161


//  Id pregunta: 1639 Año de creación de pregunta: 2016
 questions[60]= "61)  Las redes ATM se caracterizan por:";
 choices[60]= new Array();
 choices[60][0] = "Las c&eacute;lulas se transmiten a intervalos regulares.";
 choices[60][1] = "Se realiza control de errores en el campo de datos.";
 choices[60][2] = "No se garantiza que las c&eacute;lulas llegan a su destino en el mismo orden en el que fueron transmitidas.";
 choices[60][3] = "Se realiza control de flujo en la red ATM.";
 answers[60] = 0;
 units[60] = ['107'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1639. ";
 preguntaids[60] = 1639


//  Id pregunta: 4775 Año de creación de pregunta: 2002
 questions[61]= "62)  En ATM: &quot;la capacidad de transferencia que se caracteriza por la ausencia de caracterizaci&oacute;n del tr&aacute;fico en el contrato de forma que la red transmite la informaci&oacute;n que le ofrece el usuario cuando puede y lo mejor que puede &quot;, se denomina:";
 choices[61]= new Array();
 choices[61][0] = "DBR (Deterministic Bit Rate)";
 choices[61][1] = "SBR (Statistic Bit Rate)";
 choices[61][2] = "ABT (ATM Block Transfer)";
 choices[61][3] = "ABR (Available Bit Rate)";
 answers[61] = 3;
 units[61] = ['107'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4775. ";
 preguntaids[61] = 4775


//  Id pregunta: 4690 Año de creación de pregunta: 2002
 questions[62]= "63)  El m&oacute;dulo de transferencia s&iacute;ncrono (STM) principal de SDH  se transmite a una velocidad de:";
 choices[62]= new Array();
 choices[62][0] = "51.84 Mbps";
 choices[62][1] = "1984 kbps";
 choices[62][2] = "100 Mbps";
 choices[62][3] = "155.52 Mbps";
 answers[62] = 3;
 units[62] = ['107'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4690. ";
 preguntaids[62] = 4690


//  Id pregunta: 5416 Año de creación de pregunta: 2006
 questions[63]= "64)  En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos";
 choices[63]= new Array();
 choices[63][0] = "De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n";
 choices[63][1] = "De 5 bytes";
 choices[63][2] = "De 48 bytes";
 choices[63][3] = "De 53 bytes";
 answers[63] = 3;
 units[63] = ['107'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5416. ";
 preguntaids[63] = 5416


//  Id pregunta: 7688 Año de creación de pregunta: 2010
 questions[64]= "65)  ATM (&laquo;Asynchronous Transfer Mode&raquo;) emplea celdas:";
 choices[64]= new Array();
 choices[64][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n.";
 choices[64][1] = "De tama&ntilde;o fijo: 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n.";
 choices[64][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n.";
 choices[64][3] = "De tama&ntilde;o variable: 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n.";
 answers[64] = 1;
 units[64] = ['107'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 7688. Map 2007";
 preguntaids[64] = 7688


//  Id pregunta: 5166 Año de creación de pregunta: 2003
 questions[65]= "66)  Dentro de las Tecnolog&iacute;as de nivel acceso usadas en ATM se&ntilde;alar  la Falsa";
 choices[65]= new Array();
 choices[65][0] = "PSH";
 choices[65][1] = "SDH";
 choices[65][2] = "ATM";
 choices[65][3] = "SAR";
 answers[65] = 3;
 units[65] = ['107'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5166. ";
 preguntaids[65] = 5166


//  Id pregunta: 2953 Año de creación de pregunta: 2002
 questions[66]= "67)  La t&eacute;cnica ADPCM:";
 choices[66]= new Array();
 choices[66][0] = "Se utiliza para comprimir im&aacute;genes est&aacute;ticas";
 choices[66][1] = "Se basa en la modelizaci&oacute;n por fractales";
 choices[66][2] = "Tambi&eacute;n es llamada LZW (Lempel, Ziv y Welch), y se usa para compresi&oacute;n de audio";
 choices[66][3] = "Ninguna de las anteriores es verdadera";
 answers[66] = 3;
 units[66] = ['107', '110'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 2953. ";
 preguntaids[66] = 2953


//  Id pregunta: 1401 Año de creación de pregunta: 2016
 questions[67]= "68)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[67]= new Array();
 choices[67][0] = "32";
 choices[67][1] = "24";
 choices[67][2] = "20";
 choices[67][3] = "16";
 answers[67] = 2;
 units[67] = ['107'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1401. ";
 preguntaids[67] = 1401


//  Id pregunta: 5072 Año de creación de pregunta: 2002
 questions[68]= "69)  SIP es:";
 choices[68]= new Array();
 choices[68][0] = "una versi&oacute;n segura del protocolo IP";
 choices[68][1] = "un conjunto de protocolos para gesti&oacute;n de sesiones";
 choices[68][2] = "protocolo para instalaciones de software";
 choices[68][3] = "nada de lo anterior";
 answers[68] = 1;
 units[68] = ['107'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5072. ";
 preguntaids[68] = 5072


//  Id pregunta: 1638 Año de creación de pregunta: 2016
 questions[69]= "70)  En relaci&oacute;n con el protocolo MPLS (Multiprotocol Label Switching), indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[69]= new Array();
 choices[69][0] = "En MPLS el camino que el tr&aacute;fico sigue por los nodos est&aacute; prefijado desde el origen.";
 choices[69][1] = "En MPLS se puede ofrecer un conjunto mayor y m&aacute;s flexible de servicios sobre las redes de operador, si bien, el mecanismo de conmutaci&oacute;n de etiquetas es algo m&aacute;s lento que el mecanismo de encaminamiento IP.";
 choices[69][2] = "Sobre MPLS se pueden establecer Redes Privadas Virtuales de nivel 3 con protocolo IP";
 choices[69][3] = "Sobre MPLS se pueden establecer Redes Privadas Virtuales de nivel 2 con VPLS";
 answers[69] = 1;
 units[69] = ['107'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 1638. ";
 preguntaids[69] = 1638


//  Id pregunta: 7604 Año de creación de pregunta: 2010
 questions[70]= "71)  Una red ATM (Asynchronous Transfer Mode):";
 choices[70]= new Array();
 choices[70][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes.";
 choices[70][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real.";
 choices[70][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuar funciones de encaminamiento de las c&eacute;lulas.";
 choices[70][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas.";
 answers[70] = 2;
 units[70] = ['107'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 7604. Map 2006";
 preguntaids[70] = 7604


//  Id pregunta: 4589 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;En qu&eacute; bandas de frecuencias se han concedido licencias LMDS en Espa&ntilde;a?:";
 choices[71]= new Array();
 choices[71][0] = "450 y 900 MHz";
 choices[71][1] = "450 y 900 GHz";
 choices[71][2] = "3,5 y 26 MHz";
 choices[71][3] = "3,5 y 26 GHz";
 answers[71] = 3;
 units[71] = ['107'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4589. ";
 preguntaids[71] = 4589


//  Id pregunta: 5094 Año de creación de pregunta: 2003
 questions[72]= "73)  El modo de transferencia as&iacute;ncrono (ATM), utiliza:";
 choices[72]= new Array();
 choices[72][0] = "Celdas de tama&ntilde;o variable con una cabecera fija de 5 octetos y un campo de informaci&oacute;n variable de hasta 64 octetos.";
 choices[72][1] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos, y un campo de informaci&oacute;n variable de hasta 48 octetos.";
 choices[72][2] = "Celdas de tama&ntilde;o fijo con una cabecera fija de 5 octetos y un campo de informaci&oacute;n fijo de 48 octetos.";
 choices[72][3] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos y un campo de informaci&oacute;n fijo de 64 octetos.";
 answers[72] = 2;
 units[72] = ['107'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5094. Junta Andaluc&iacute;a";
 preguntaids[72] = 5094


//  Id pregunta: 5700 Año de creación de pregunta: 2007
 questions[73]= "74)  La capa de adaptaci&oacute;n de ATM (AAL o ATM Adaptation Layer) com&uacute;nmente utilizada para la transmisi&oacute;n de datagramas IP sobre redes ATM es:";
 choices[73]= new Array();
 choices[73][0] = "AAL 5.";
 choices[73][1] = "AAL 1.";
 choices[73][2] = "AAL 3/4.";
 choices[73][3] = "AAL 2.";
 answers[73] = 0;
 units[73] = ['107'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5700. ";
 preguntaids[73] = 5700


//  Id pregunta: 4519 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes respuestas sobre Emulacion de LAN en ATM es cierta?:";
 choices[74]= new Array();
 choices[74][0] = "Proporciona a las estaciones enganchadas via ATM las mismas capacidades que obtienen de una LAN tipo Ethernet o Token-Ring";
 choices[74][1] = "Requiere modificaciones de los protocolos de mayor nivel (de la capa de red)  para permitir operaciones via una red ATM";
 choices[74][2] = "Intenta emular el Media Access Control (MAC) real de la LAN espec&iacute;fica";
 choices[74][3] = "Define un esquema de encapsulado para Ethernet, Token-Ring y FDDI";
 answers[74] = 0;
 units[74] = ['107'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4519. ";
 preguntaids[74] = 4519


