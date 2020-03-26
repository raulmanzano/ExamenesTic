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
//  Id pregunta: 5797 Año de creación de pregunta: 2007
 questions[0]= "1)  Los identificadores VPI/VCI tienen significado";
 choices[0]= new Array();
 choices[0][0] = "global para toda la red";
 choices[0][1] = "para cada conexi&oacute;n";
 choices[0][2] = "para cada enlace";
 choices[0][3] = "solo entre el terminal y el switch ATM";
 answers[0] = 2;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5797. ";
 preguntaids[0] = 5797


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


//  Id pregunta: 5595 Año de creación de pregunta: 2007
 questions[2]= "3)  &iquest;C&oacute;mo se denomina en telefon&iacute;a IP el elemento encargado de registrar los dispositivos que realizan llamadas usando la red IP?";
 choices[2]= new Array();
 choices[2][0] = "Gateway.";
 choices[2][1] = "Terminal.";
 choices[2][2] = "IVR";
 choices[2][3] = "Gatekeeper.";
 answers[2] = 3;
 units[2] = ['110'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5595. ";
 preguntaids[2] = 5595


//  Id pregunta: 5590 Año de creación de pregunta: 2007
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes clases de servicio es m&aacute;s adecuada en ATM para la transmisi&oacute;n de video comprimido en tiempo real?";
 choices[3]= new Array();
 choices[3][0] = "UBR";
 choices[3][1] = "VBR-NTR";
 choices[3][2] = "VBR-RT";
 choices[3][3] = "CBR";
 answers[3] = 2;
 units[3] = ['107'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5590. ";
 preguntaids[3] = 5590


//  Id pregunta: 5654 Año de creación de pregunta: 2007
 questions[4]= "5)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[4]= new Array();
 choices[4][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de la red publica.";
 choices[4][1] = "Efectuar la autentificaci&oacute;n de los usuarios.";
 choices[4][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de la red publica.";
 choices[4][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[4] = 2;
 units[4] = ['119', '120'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5654. ";
 preguntaids[4] = 5654


//  Id pregunta: 5653 Año de creación de pregunta: 2007
 questions[5]= "6)  La conexi&oacute;n de una red privada a Internet por medio de una pasarela (o &quot;gateway&quot;) NAT permite:";
 choices[5]= new Array();
 choices[5][0] = "Asignar din&aacute;micamente direcciones IP publicas a un ordenador";
 choices[5][1] = "Actuar como cortafuegos filtrando los paquetes de datos recibidos.";
 choices[5][2] = "Asignar din&aacute;micamente direcciones IP privadas dentro de una red privada.";
 choices[5][3] = "Que varios ordenadores accedan a Internet al mismo tiempo por medio de una &uacute;nica direcci&oacute;n IP publica.";
 answers[5] = 3;
 units[5] = ['103'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5653. ";
 preguntaids[5] = 5653


//  Id pregunta: 5794 Año de creación de pregunta: 2007
 questions[6]= "7)  La tecnolog&iacute;a de radio LMDS (Local Multipoint Distribution System) se caracteriza entre otras cosas por ser:";
 choices[6]= new Array();
 choices[6][0] = "una tecnolog&iacute;a punto a punto";
 choices[6][1] = "no requiere de visibilidad directa entre enlaces";
 choices[6][2] = "tiene radios de cobertura t&iacute;picos mayores a 25 Km (kilometros)";
 choices[6][3] = "utilizada para entornos de alta concentraci&oacute;n de usuarios";
 answers[6] = 3;
 units[6] = ['117'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5794. ";
 preguntaids[6] = 5794


//  Id pregunta: 5647 Año de creación de pregunta: 2007
 questions[7]= "8)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet:";
 choices[7]= new Array();
 choices[7][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[7][1] = "Acceden el medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[7][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por Io que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones";
 choices[7][3] = "Nunca acceden Si tras un primer intento se detecto una colisi&oacute;n.";
 answers[7] = 1;
 units[7] = ['104'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5647. ";
 preguntaids[7] = 5647


//  Id pregunta: 5744 Año de creación de pregunta: 2007
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de WiMax respecto a WIFI?:";
 choices[8]= new Array();
 choices[8][0] = "el ancho los canales radio utilizados por WiMax es menor que los de WiFi";
 choices[8][1] = "WiMax utiliza un protocolo de control de acceso al medio CSMA evolucionado respecto al de WiFi";
 choices[8][2] = "WiMax soporta mas usuarios por cada canal radio";
 choices[8][3] = "WiMax permite el control autom&aacute;tico de potencia emitida";
 answers[8] = 1;
 units[8] = ['108'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 5744. ";
 preguntaids[8] = 5744


//  Id pregunta: 5598 Año de creación de pregunta: 2007
 questions[9]= "10)  En relaci&oacute;n con las diferencias entre Wi-fi y Wi-MAX, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[9]= new Array();
 choices[9][0] = "El control y gesti&oacute;n de errores debe ser m&aacute;s importante en Wimax por ser m&aacute;s sensible el rango de frecuencias en que trabaja.";
 choices[9][1] = "Wimax est&aacute; dise&ntilde;ado para transporte de tr&aacute;fico multimedia mientras que Wi-fi, si bien podr&iacute;a soportarlo, no fue espec&iacute;ficamente dise&ntilde;ado para ello.";
 choices[9][2] = "Las frecuencias disponibles para Wimax est&aacute; en valores del espectro mayores que las disponibles para Wifi.";
 choices[9][3] = "Wimax fue inicialmente dise&ntilde;ado para conexiones inal&aacute;mbricas estacionarios mientras que Wifi est&aacute; dise&ntilde;ado para Ethernet m&oacute;vil.";
 answers[9] = 1;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5598. ";
 preguntaids[9] = 5598


//  Id pregunta: 5709 Año de creación de pregunta: 2007
 questions[10]= "11)  Seg&uacute;n la Norma UNE-ISO/IEC 27001:2007, la facultad de un control para lograr los objetivos de seguridad para la que fue dise&ntilde;ado se denomina";
 choices[10]= new Array();
 choices[10][0] = "eficacia de un control";
 choices[10][1] = "eficiencia de un control";
 choices[10][2] = "idoneidad de un control";
 choices[10][3] = "finalidad de un control";
 answers[10] = 0;
 units[10] = ['119'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5709. ";
 preguntaids[10] = 5709


//  Id pregunta: 5652 Año de creación de pregunta: 2007
 questions[11]= "12)  Entre otras funciones, la Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de:";
 choices[11]= new Array();
 choices[11][0] = "La gesti&oacute;n de nombres de dominios de Internet.";
 choices[11][1] = "Arbitrar en los conflictos que puedan surgir entre operadores del sector de Ia comunicaci&oacute;n electr&oacute;nica cuando los interesados lo acuerden.";
 choices[11][2] = "Elaborar el Cuadro Nacional de Atribuci&oacute;n de Frecuencias.";
 choices[11][3] = "Elaboraci&oacute;n de proyectos y desarrollo de los Planes Nacionales de Radiodifusi&oacute;n y Televisi&oacute;n.";
 answers[11] = 1;
 units[11] = ['121'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5652. ";
 preguntaids[11] = 5652


//  Id pregunta: 5738 Año de creación de pregunta: 2007
 questions[12]= "13)  Las siglas HSDPA corresponden a:";
 choices[12]= new Array();
 choices[12][0] = "High-Speed Dynamic Packet Access";
 choices[12][1] = "High-Speed Downlink Packet Access";
 choices[12][2] = "High-Speed Data Packet Access";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = 1;
 units[12] = ['117'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5738. ";
 preguntaids[12] = 5738


//  Id pregunta: 5599 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;Qu&eacute; se entiende por Indoor PLC?:";
 choices[13]= new Array();
 choices[13][0] = "MODEM que recoge la se&ntilde;al de la red el&eacute;ctrica a trav&eacute;s del enchufe.";
 choices[13][1] = "Vertiente de la tecnolog&iacute;a PLC que convierte la l&iacute;nea el&eacute;ctrica en una LAN.";
 choices[13][2] = "Equipo que conecta la red el&eacute;ctrica con la red de comunicaciones.";
 choices[13][3] = "Conjunto formado por el MODEM y el equipo terminal de datos que existen en la vivienda el usuario.";
 answers[13] = 1;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5599. ";
 preguntaids[13] = 5599


//  Id pregunta: 5586 Año de creación de pregunta: 2007
 questions[14]= "15)  Un protocolo de comunicaci&oacute;n es:";
 choices[14]= new Array();
 choices[14][0] = "conjunto de reglas que gobiernan el formato de intercambio de mensajes entre niveles OSI de un mismo sistema.";
 choices[14][1] = "El conjunto de reglas que gobiernan c&oacute;mo va a proceder la comunicaci&oacute;n entre entidades pares de distintos sistemas.";
 choices[14][2] = "El conjunto de elementos f&iacute;sicos y l&oacute;gicos que relacionan dos niveles adyacentes de un sistema.";
 choices[14][3] = "Conjunto de primitivas y par&aacute;metros que concretan los servicios que se proporcionan a trav&eacute;s de la interfaz.";
 answers[14] = 1;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5586. ";
 preguntaids[14] = 5586


//  Id pregunta: 5597 Año de creación de pregunta: 2007
 questions[15]= "16)  &iquest;Cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[15]= new Array();
 choices[15][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[15][1] = "100 kbps";
 choices[15][2] = "144 Kbps";
 choices[15][3] = "384 kbps";
 answers[15] = 3;
 units[15] = ['117'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5597. ";
 preguntaids[15] = 5597


//  Id pregunta: 5580 Año de creación de pregunta: 2007
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre transmisi&oacute;n de datos no es correcta?";
 choices[16]= new Array();
 choices[16][0] = "En el caso de medios de transmisi&oacute;n guiados, es el medio en s&iacute; mismo lo que m&aacute;s limitaciones impone a la transmisi&oacute;n.";
 choices[16][1] = "En los medios no guiados, las caracter&iacute;sticas de la transmisi&oacute;n est&aacute;n en gran medida determinadas por la frecuencia de la portadora.";
 choices[16][2] = "En general, a frecuencias bajas las antenas son direccionales, concentr&aacute;ndose toda la energ&iacute;a en un haz.";
 choices[16][3] = "Si todos los dem&aacute;s factores permanecen constantes, al aumentar el ancho de banda de la se&ntilde;al se puede incrementar la velocidad de transmisi&oacute;n.";
 answers[16] = 2;
 units[16] = ['104'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5580. ";
 preguntaids[16] = 5580


//  Id pregunta: 5585 Año de creación de pregunta: 2007
 questions[17]= "18)  &iquest;A qu&eacute; nivel del modelo OSI se realiza el encapsulamiento Frame Relay y HDLC?";
 choices[17]= new Array();
 choices[17][0] = "Red.";
 choices[17][1] = "Sesi&oacute;n.";
 choices[17][2] = "Enlace de datos.";
 choices[17][3] = "Transporte.";
 answers[17] = 2;
 units[17] = ['105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5585. ";
 preguntaids[17] = 5585


//  Id pregunta: 5657 Año de creación de pregunta: 2007
 questions[18]= "19)  Una caracter&iacute;stica fundamental de XML signature es que:";
 choices[18]= new Array();
 choices[18][0] = "Puede firmar parte o la totalidad de un documento XML";
 choices[18][1] = "Puede firmar un documento RTF y convertirlo en un documento XML.";
 choices[18][2] = "Solo puede firmar un documento XML completo.";
 choices[18][3] = "Solo puede firmar documentos RTF.";
 answers[18] = 0;
 units[18] = ['119'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5657. ";
 preguntaids[18] = 5657


//  Id pregunta: 5593 Año de creación de pregunta: 2007
 questions[19]= "20)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 68 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, General de Telecomunicaciones:";
 choices[19]= new Array();
 choices[19][0] = "El Gobierno.";
 choices[19][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[19][2] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 choices[19][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 answers[19] = 1;
 units[19] = ['121'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5593. ";
 preguntaids[19] = 5593


//  Id pregunta: 5773 Año de creación de pregunta: 2007
 questions[20]= "21)  &iquest;Que entidad publica empresarial tiene atribuida la autoridad de asignaci&oacute;n de nombres de dominio .es?:";
 choices[20]= new Array();
 choices[20][0] = "Red.es";
 choices[20][1] = "FNMT";
 choices[20][2] = "dominios.es";
 choices[20][3] = "Red Iris";
 answers[20] = 0;
 units[20] = ['103'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5773. ";
 preguntaids[20] = 5773


//  Id pregunta: 5581 Año de creación de pregunta: 2007
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[21]= new Array();
 choices[21][0] = "Diafon&iacute;a.";
 choices[21][1] = "Ruido t&eacute;rmico.";
 choices[21][2] = "Ruido de intermodulaci&oacute;n.";
 choices[21][3] = "Atenuaci&oacute;n";
 answers[21] = 0;
 units[21] = ['104'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5581. ";
 preguntaids[21] = 5581


//  Id pregunta: 5704 Año de creación de pregunta: 2007
 questions[22]= "23)  El Sistema de Comunicaciones Moviles Europeo de Tercera Generacion recibe el nombre de:";
 choices[22]= new Array();
 choices[22][0] = "UMTS";
 choices[22][1] = "EDGE";
 choices[22][2] = "DCS-1800.";
 choices[22][3] = "PHS";
 answers[22] = 0;
 units[22] = ['117'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5704. ";
 preguntaids[22] = 5704


//  Id pregunta: 5749 Año de creación de pregunta: 2007
 questions[23]= "24)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[23]= new Array();
 choices[23][0] = "recrea las claves cada cierto tiempo";
 choices[23][1] = "permite utilizar certificados digitales";
 choices[23][2] = "se necesita una asociaci&oacute;n de seguridad IKE para cada conexi&oacute;n IPSEC.";
 choices[23][3] = "esta basado en Oakley.";
 answers[23] = 2;
 units[23] = ['119'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5749. ";
 preguntaids[23] = 5749


//  Id pregunta: 5793 Año de creación de pregunta: 2007
 questions[24]= "25)  El protocolo CMIP de OSI se puede considerar el equivalente al siguiente protocolo de la familia TCP/IP:";
 choices[24]= new Array();
 choices[24][0] = "SMTP";
 choices[24][1] = "SNMP";
 choices[24][2] = "ARP";
 choices[24][3] = "HTTP";
 answers[24] = 1;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5793. ";
 preguntaids[24] = 5793


//  Id pregunta: 5649 Año de creación de pregunta: 2007
 questions[25]= "26)  En un sistema de gesti&oacute;n de red, Ia base de datos MIB (Management Information Base):";
 choices[25]= new Array();
 choices[25][0] = "Identifica el elemento de administraci&oacute;n central de Ia red.";
 choices[25][1] = "Especifica los elementos y Ia parte de los datos que un nodo debe conservar, asi Como las operaciones que se permiten sobre cada uno de ellos";
 choices[25][2] = "Establece Ia conexi&oacute;n entre el nodo administrado y la estaci&oacute;n administradora central.";
 choices[25][3] = "Es una Unidad de Datos del Protocolo (6 PDU) de gesti&oacute;n de red.";
 answers[25] = 1;
 units[25] = ['114'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5649. ";
 preguntaids[25] = 5649


//  Id pregunta: 5650 Año de creación de pregunta: 2007
 questions[26]= "27)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[26]= new Array();
 choices[26][0] = "La tecnolog&iacute;a WiFi esta optimizada para usos en interiores y para rangos de cientos de metros, mientras que la tecnolog&iacute;a WIMAX esta optimizada para aplicaciones de exterior y para rangos de varios kil&oacute;metros.";
 choices[26][1] = "La tecnolog&iacute;a WiFi no requiere que exista l&iacute;nea de visi&oacute;n directa entre el terminal y el Punto de Acceso (AP), mientras que la tecnolog&iacute;a WIMAX requiere que exista una l&iacute;nea de visi&oacute;n directa entre la Estaci&oacute;n Base y la antena del terminal receptor";
 choices[26][2] = "La tecnolog&iacute;a WiFi es capaz de proporcionar capacidades brutas de hasta 54 Mbps en un canal de 20 MHz, mientras que WIMAX proporciona capacidades brutas de hasta 75 Mbps en un canal de 20 MHz.";
 choices[26][3] = "La tecnolog&iacute;a WiFi fue inicialmente dise&ntilde;ada para aplicaciones LAN inal&aacute;mbricas que soportaban decenas de usuarios con una suscripci&oacute;n por terminal, mientras que WIMAX puede soportar cientos de terminales con ilimitadas subscripciones por terminal.";
 answers[26] = 1;
 units[26] = ['108'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5650. ";
 preguntaids[26] = 5650


//  Id pregunta: 5696 Año de creación de pregunta: 2007
 questions[27]= "28)  El protocolo utilizado para gestionar un dispositivo en una red TCP/IP es:";
 choices[27]= new Array();
 choices[27][0] = "RCP";
 choices[27][1] = "SNMP";
 choices[27][2] = "SMTP";
 choices[27][3] = "ICMP";
 answers[27] = 1;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5696. ";
 preguntaids[27] = 5696


//  Id pregunta: 5746 Año de creación de pregunta: 2007
 questions[28]= "29)  En la tecnolog&iacute;a ATM qu&eacute; tipo de protocolo utilizar&iacute;a en la capa de adaptaci&oacute;n al medio si estamos trabajando en modo orientado a conexi&oacute;n y con una tasa de bits constante:";
 choices[28]= new Array();
 choices[28][0] = "Tipo 1";
 choices[28][1] = "Tipo 2";
 choices[28][2] = "Tipo 3/4";
 choices[28][3] = "Tipo 5";
 answers[28] = 0;
 units[28] = ['107'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5746. ";
 preguntaids[28] = 5746


//  Id pregunta: 5514 Año de creación de pregunta: 2007
 questions[29]= "30)  La red G&Eacute;ANT:";
 choices[29]= new Array();
 choices[29][0] = "Es una red basada en IPv6 de &aacute;mbito mundial, que constituye el n&uacute;cleo de Internet.";
 choices[29][1] = "Es una red basada en IPv6, que sirve de desarrollo e investigaci&oacute;n para la nueva Internet 2.";
 choices[29][2] = "Es la siguiente evoluci&oacute;n l&oacute;gica de la Intranet Administrativa que une a diversos organismos de la Administraci&oacute;n General del Estado.";
 choices[29][3] = "Es una red paneuropea de investigaci&oacute;n, formada por la uni&oacute;n de las redes de investigaci&oacute;n, financiada por la Uni&oacute;n Europea";
 answers[29] = 3;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5514. ";
 preguntaids[29] = 5514


//  Id pregunta: 5692 Año de creación de pregunta: 2007
 questions[30]= "31)  Un enlace del tipo STM-1:";
 choices[30]= new Array();
 choices[30][0] = "Es un enlace PDH de 155,52 Mbps";
 choices[30][1] = "Es un enlace PDH de 622,08 Mbps.";
 choices[30][2] = "Es un enlace SDH de 622,08 Mbps.";
 choices[30][3] = "Es un enlace SDH de 155,52 Mbps.";
 answers[30] = 3;
 units[30] = ['114'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5692. ";
 preguntaids[30] = 5692


//  Id pregunta: 5694 Año de creación de pregunta: 2007
 questions[31]= "32)  Dentro de la soluci&oacute;n de telefon&iacute;a IP de Cisco, el componente encargado de almacenar los mensajes del buz&oacute;n de voz recibe el nombre de:";
 choices[31]= new Array();
 choices[31][0] = "Cisco CallManager";
 choices[31][1] = "Cisco Unity";
 choices[31][2] = "Cisco VoiceCom";
 choices[31][3] = "CiscoWorks";
 answers[31] = 1;
 units[31] = ['110'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5694. ";
 preguntaids[31] = 5694


//  Id pregunta: 5662 Año de creación de pregunta: 2007
 questions[32]= "33)  &iquest;C&oacute;mo define la Norma UNE ISO IEC 27002 la seguridad de la informaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "La preservaci&oacute;n de la confidencialidad y la integridad";
 choices[32][1] = "La preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[32][2] = "La obtenci&oacute;n de la autenticaci&oacute;n y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[32][3] = "La obtenci&oacute;n de la autenticaci&oacute;n y el no repudio y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 answers[32] = 1;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5662. ";
 preguntaids[32] = 5662


//  Id pregunta: 5745 Año de creación de pregunta: 2007
 questions[33]= "34)  Cuando un m&oacute;vil se enciende y no encuentra una estaci&oacute;n base de la red a la que pertenece";
 choices[33]= new Array();
 choices[33][0] = "se registra en el HLR (Home Location Register) de la red a la que accede";
 choices[33][1] = "se registra en el VLR (Visitors Location Register) de la red a la que pertenece";
 choices[33][2] = "se registra en el VLR (Visitors Location Register) de la red a la que accede";
 choices[33][3] = "no se registra en ninguna red";
 answers[33] = 2;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5745. ";
 preguntaids[33] = 5745


//  Id pregunta: 5803 Año de creación de pregunta: 2007
 questions[34]= "35)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA";
 choices[34]= new Array();
 choices[34][0] = "7.2Mbps";
 choices[34][1] = "14.4Mbps";
 choices[34][2] = "4.8Mbps";
 choices[34][3] = "10.7Mbps";
 answers[34] = 1;
 units[34] = ['117'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5803. ";
 preguntaids[34] = 5803


//  Id pregunta: 5796 Año de creación de pregunta: 2007
 questions[35]= "36)  Cual de las siguientes no es una caracter&iacute;stica de DAB:";
 choices[35]= new Array();
 choices[35][0] = "utiliza m&uacute;ltiples portadoras en el mismo canal.";
 choices[35][1] = "permite emitir en redes de frecuencia &uacute;nica";
 choices[35][2] = "ofrece un canal radio de retorno";
 choices[35][3] = "ofrecer servicios de datos";
 answers[35] = 2;
 units[35] = ['115'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5796. ";
 preguntaids[35] = 5796


//  Id pregunta: 5513 Año de creación de pregunta: 2007
 questions[36]= "37)  La red de investigaci&oacute;n espa&ntilde;ola encargada de dar servicio Internet a universidades y centros de investigaci&oacute;n es:";
 choices[36]= new Array();
 choices[36][0] = "La intranet del CSIC";
 choices[36][1] = "No existe una red propia de investigaci&oacute;n, utilizando los servicios que ofrece Internet.";
 choices[36][2] = "RedIRIS.";
 choices[36][3] = "La Intranet Administrativa.";
 answers[36] = 2;
 units[36] = ['114'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5513. ";
 preguntaids[36] = 5513


//  Id pregunta: 5518 Año de creación de pregunta: 2007
 questions[37]= "38)  Para evitar las colisiones de paquetes, las redes inal&aacute;mbricas 802.11 WiFi pueden utilizar los siguientes mecanismos: I) CSMA/CA+ACK Carrier Sense Multiple Access with Collision Avoidance + Acknowledge). II) RTS/CTS (Request to Send/Clear to Send). III) OFDM (Orthogonal Frecuency Division Multiplexing).";
 choices[37]= new Array();
 choices[37][0] = "I y II.";
 choices[37][1] = "II y III.";
 choices[37][2] = "I y III.";
 choices[37][3] = "I, II y III.";
 answers[37] = 0;
 units[37] = ['108'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5518. ";
 preguntaids[37] = 5518


//  Id pregunta: 5516 Año de creación de pregunta: 2007
 questions[38]= "39)  El dispositivo necesario para tener acceso a Internet a trav&eacute;s de la red de cable-TV que ofrecen distintos operadores, se llama:";
 choices[38]= new Array();
 choices[38][0] = "CODEC.";
 choices[38][1] = "Router.";
 choices[38][2] = "MODEM cable.";
 choices[38][3] = "Splitter.";
 answers[38] = 2;
 units[38] = ['115'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5516. ";
 preguntaids[38] = 5516


//  Id pregunta: 5592 Año de creación de pregunta: 2007
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[39]= new Array();
 choices[39][0] = "Arquitectura abierta";
 choices[39][1] = "Control centralizado";
 choices[39][2] = "Basada en TCP/IP";
 choices[39][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[39] = 1;
 units[39] = ['103'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5592. ";
 preguntaids[39] = 5592


//  Id pregunta: 5700 Año de creación de pregunta: 2007
 questions[40]= "41)  La capa de adaptaci&oacute;n de ATM (AAL o ATM Adaptation Layer) com&uacute;nmente utilizada para la transmisi&oacute;n de datagramas IP sobre redes ATM es:";
 choices[40]= new Array();
 choices[40][0] = "AAL 5.";
 choices[40][1] = "AAL 1.";
 choices[40][2] = "AAL 3/4.";
 choices[40][3] = "AAL 2.";
 answers[40] = 0;
 units[40] = ['107'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5700. ";
 preguntaids[40] = 5700


//  Id pregunta: 5584 Año de creación de pregunta: 2007
 questions[41]= "42)  &iquest;Qu&eacute; comando se utiliza para comprobar una conexi&oacute;n f&iacute;sica entre dos hosts?";
 choices[41]= new Array();
 choices[41][0] = "TPING.";
 choices[41][1] = "WINPING.";
 choices[41][2] = "TCPING.";
 choices[41][3] = "PING.";
 answers[41] = 3;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5584. ";
 preguntaids[41] = 5584


//  Id pregunta: 5646 Año de creación de pregunta: 2007
 questions[42]= "43)  El protocolo SSL (Secure Sockets Layer):";
 choices[42]= new Array();
 choices[42][0] = "Es una capa de seguridad que opera siempre sobre el protocolo UDP.";
 choices[42][1] = "No garantiza la integridad de Ia informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[42][2] = "Proporciona conexiones seguras solo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[42][3] = "Proporciona conexiones seguras sobre una red insegura garantizando, entre otros aspectos, integridad de datos transmitidos, privacidad de Ia conexi&oacute;n y autentificaci&oacute;n del cliente y del servidor.";
 answers[42] = 3;
 units[42] = ['120'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5646. SSL v3 se ha declarado oficialmente obsoleto en la RFC 7568 en favor de TLS 1.2, pero se mantiene la pregunta porque podr&iacute;a esperarse alguna pregunta sobre SSL.";
 preguntaids[42] = 5646


//  Id pregunta: 5589 Año de creación de pregunta: 2007
 questions[43]= "44)  La codificaci&oacute;n Manchester se caracteriza por:";
 choices[43]= new Array();
 choices[43][0] = "Usar 1 V para el valor &ldquo;1&rdquo; y -1 V para el valor &ldquo;0&rdquo;";
 choices[43][1] = "Dividir cada bit en dos intervalos iguales de 1 V y &ndash;1 V comenzando en el valor positivo para el &ldquo;1&rdquo; y en el valor negativo para el &ldquo;0&rdquo;";
 choices[43][2] = "Indicar el valor &ldquo;1&rdquo; con ausencia de tr&aacute;nsito en la tensi&oacute;n el&eacute;ctrica y el &ldquo;0&rdquo; con una transici&oacute;n";
 choices[43][3] = "La opci&oacute;n anterior, suprimiendo una de cada dos transiciones";
 answers[43] = 1;
 units[43] = ['104'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5589. ";
 preguntaids[43] = 5589


//  Id pregunta: 5753 Año de creación de pregunta: 2007
 questions[44]= "45)  Ignorar quien accede a que dato y cuando lo hace, afecta a Ia dimensi&oacute;n de la seguridad denominada";
 choices[44]= new Array();
 choices[44][0] = "confidencialidad";
 choices[44][1] = "disponibilidad";
 choices[44][2] = "integridad";
 choices[44][3] = "trazabilidad";
 answers[44] = 3;
 units[44] = ['119'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5753. ";
 preguntaids[44] = 5753


//  Id pregunta: 5792 Año de creación de pregunta: 2007
 questions[45]= "46)  &iquest;De qu&eacute; canales y en qu&eacute; numero esta compuesto un enlace primario RDSI si lo contratamos en Europa?:";
 choices[45]= new Array();
 choices[45][0] = "2B+D";
 choices[45][1] = "30B+2D (el D a 64 Kbps)";
 choices[45][2] = "30B+D (el D a 16 Kbps)";
 choices[45][3] = "30B+D (el D a 64 Kbps)";
 answers[45] = 3;
 units[45] = ['108'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5792. ";
 preguntaids[45] = 5792


//  Id pregunta: 5594 Año de creación de pregunta: 2007
 questions[46]= "47)  &iquest;Cu&aacute;l es la banda de frecuencia reservada a voz convencional en la tecnolog&iacute;a ADSL?";
 choices[46]= new Array();
 choices[46][0] = "0-10 KHz";
 choices[46][1] = "0-4 KHz";
 choices[46][2] = "0-56 KHz";
 choices[46][3] = "5-10 KHz";
 answers[46] = 1;
 units[46] = ['108'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5594. ";
 preguntaids[46] = 5594


//  Id pregunta: 5648 Año de creación de pregunta: 2007
 questions[47]= "48)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[47]= new Array();
 choices[47][0] = "Los repetidores o hubs que interconectan estaciones entre s&iacute; operan &uacute;nicamente a nivel el&eacute;ctrico (nivel f&iacute;sico del modelo OSI)";
 choices[47][1] = "El algoritmo de &aacute;rbol de extensi&oacute;n (spanning tree algorithm) es utilizado por los dispositivos puentes (o &quot;bridges&quot;) para construir topolog&iacute;as de interconexi&oacute;n de LAN's libres de bucles.";
 choices[47][2] = "Los encaminadores o routers deben tener implementadas las funcionalidades de los 7 niveles del modelo de referencia OSI para descubrir las rutas de encaminamiento adecuadas.";
 choices[47][3] = "Las pasarelas o gateways permiten, entre otras funcionalidades Ia implementaci&oacute;n de servicios NAT de traducci&oacute;n de direcciones IP.";
 answers[47] = 2;
 units[47] = ['102'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5648. ";
 preguntaids[47] = 5648


//  Id pregunta: 5693 Año de creación de pregunta: 2007
 questions[48]= "49)  El protocolo RIP:";
 choices[48]= new Array();
 choices[48][0] = "Es un protocolo de encaminamiento del tipo &quot;vector de distancia&quot;.";
 choices[48][1] = "Es un protocolo de encaminamiento del tipo &quot;estado del enlace&quot;.";
 choices[48][2] = "Es un protocolo de descarga de correo electr&oacute;nico desde un servidor web.";
 choices[48][3] = "Es un protocolo de interconexi&oacute;n de conmutadores.";
 answers[48] = 0;
 units[48] = ['102'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5693. ";
 preguntaids[48] = 5693


//  Id pregunta: 5799 Año de creación de pregunta: 2007
 questions[49]= "50)  &iquest;Qu&eacute; protocolo de enrutamiento se utiliza principalmente entre los sistemas aut&oacute;nomos en Internet?";
 choices[49]= new Array();
 choices[49][0] = "OSPF";
 choices[49][1] = "RIP";
 choices[49][2] = "BGP";
 choices[49][3] = "RIP2";
 answers[49] = 2;
 units[49] = ['102'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5799. ";
 preguntaids[49] = 5799


//  Id pregunta: 5691 Año de creación de pregunta: 2007
 questions[50]= "51)  El protocolo UDP (User Datagram Protocol):";
 choices[50]= new Array();
 choices[50][0] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP no orientado a conexi&oacute;n.";
 choices[50][1] = "Es un protocolo de nivel de red perteneciente a la familia de protocolos TCP/IP.";
 choices[50][2] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP orientado a conexi&oacute;n.";
 choices[50][3] = "Es el protocolo de transporte utilizado por el protocolo de aplicaci&oacute;n FTP.";
 answers[50] = 0;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5691. ";
 preguntaids[50] = 5691


//  Id pregunta: 5613 Año de creación de pregunta: 2007
 questions[51]= "52)  En qu&eacute; capa del modelo de referencia OSI se localiza la subcapa de control de acceso al medio?";
 choices[51]= new Array();
 choices[51][0] = "Capa f&iacute;sica.";
 choices[51][1] = "Capa de sesi&oacute;n.";
 choices[51][2] = "Capa de transporte.";
 choices[51][3] = "Capa de enlace de datos.";
 answers[51] = 3;
 units[51] = ['105'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5613. ";
 preguntaids[51] = 5613


//  Id pregunta: 5702 Año de creación de pregunta: 2007
 questions[52]= "53)  La reserva para uso privativo de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico a favor de una o varias personas o entidades:";
 choices[52]= new Array();
 choices[52][0] = "No requiere ning&uacute;n tipo de pago al Estado. &Uacute;nicamente es necesaria su notificaci&oacute;n a la Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[52][1] = "Se gravar&aacute; con una tasa anual por reserva del dominio publico radioel&eacute;ctrico.";
 choices[52][2] = "Requiere el pago de una tasa &uacute;nica al inicio de la utilizaci&oacute;n de dichas frecuencias que se negociar&aacute; entre el Estado y el beneficiario de la reserva.";
 choices[52][3] = "Requiere el pago de una tasa a negociar entre el beneficiario de Ia reserva y las personas o entidades que ocupan las bandas de frecuencias adyacentes a la reservada.";
 answers[52] = 1;
 units[52] = ['121'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5702. ";
 preguntaids[52] = 5702


//  Id pregunta: 5701 Año de creación de pregunta: 2007
 questions[53]= "54)  Los denominados cortafuegos o firewalls de filtrado de paquetes, se caracterizan porque:";
 choices[53]= new Array();
 choices[53][0] = "Analizan &uacute;nicamente la informaci&oacute;n incluida en la cabecera TCP/IP de cada paquete.";
 choices[53][1] = "Analizan la carga &uacute;til de datos de cada paquete.";
 choices[53][2] = "Autentifican los usuarios que acceden a la red.";
 choices[53][3] = "No permiten filtrar paquetes en funci&oacute;n del puerto destino de la comunicaci&oacute;n saliente.";
 answers[53] = 0;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5701. ";
 preguntaids[53] = 5701


//  Id pregunta: 5798 Año de creación de pregunta: 2007
 questions[54]= "55)  Un detector de intrusiones act&uacute;a a:";
 choices[54]= new Array();
 choices[54][0] = "nivel f&iacute;sico";
 choices[54][1] = "nivel de enlace";
 choices[54][2] = "nivel de red";
 choices[54][3] = "nivel de aplicaci&oacute;n";
 answers[54] = 3;
 units[54] = ['119', '120'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5798. ";
 preguntaids[54] = 5798


//  Id pregunta: 5699 Año de creación de pregunta: 2007
 questions[55]= "56)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[55]= new Array();
 choices[55][0] = "El sistema GPRS permite el env&iacute;o de paquetes de datos sobre la red GSM.";
 choices[55][1] = "El sistema GPRS utiliza los mismos recursos de la interfaz radio del sistema GSM.";
 choices[55][2] = "En una misma celda no pueden coexistir canales GPRS y GSM.";
 choices[55][3] = "Un canal GPRS solo se asigna al usuario cuando se transmiten o reciben paquetes, mientras que un canal GSM se asigna de forma permanente al usuario durante toda la llamada.";
 answers[55] = 2;
 units[55] = ['117'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 5699. ";
 preguntaids[55] = 5699


//  Id pregunta: 5583 Año de creación de pregunta: 2007
 questions[56]= "57)  El estandar IEEE 802.12 (100VG AnyLAN):";
 choices[56]= new Array();
 choices[56][0] = "Utiliza un m&eacute;todo de acceso de detecci&oacute;n de colisi&oacute;n.";
 choices[56][1] = "Utiliza un m&eacute;todo de acceso de prioridad de demanda.";
 choices[56][2] = "Utiliza un m&eacute;todo de acceso de impedimento de colisi&oacute;n.";
 choices[56][3] = "Utiliza un m&eacute;todo de acceso de paso de testigo.";
 answers[56] = 1;
 units[56] = ['108'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5583. ";
 preguntaids[56] = 5583


//  Id pregunta: 5697 Año de creación de pregunta: 2007
 questions[57]= "58)  &iquest;En que est&aacute;ndar se basa la tecnolog&iacute;a WIMAX?";
 choices[57]= new Array();
 choices[57][0] = "IEEE802.16";
 choices[57][1] = "IEEE802.11";
 choices[57][2] = "IEEE802.3";
 choices[57][3] = "IEEE802.2";
 answers[57] = 0;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5697. ";
 preguntaids[57] = 5697


//  Id pregunta: 5742 Año de creación de pregunta: 2007
 questions[58]= "59)  Un puente como elemento de interconexi&oacute;n de redes en que capa del modelo OSI opera:";
 choices[58]= new Array();
 choices[58][0] = "enlace de datos";
 choices[58][1] = "red";
 choices[58][2] = "transporte";
 choices[58][3] = "ninguna de las anteriores";
 answers[58] = 0;
 units[58] = ['104'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 5742. ";
 preguntaids[58] = 5742


//  Id pregunta: 5515 Año de creación de pregunta: 2007
 questions[59]= "60)  &iquest;Qu&eacute; se entiende por servicio universal, seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[59]= new Array();
 choices[59][0] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica.";
 choices[59][1] = "Que los usuarios finales con discapacidad tengan acceso a los mismos servicios que el resto de los usuarios finales.";
 choices[59][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[59][3] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados.";
 answers[59] = 2;
 units[59] = ['121'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5515. ";
 preguntaids[59] = 5515


//  Id pregunta: 5659 Año de creación de pregunta: 2007
 questions[60]= "61)  El est&aacute;ndar europeo de Televisi&oacute;n Digital Terrestre definido por ETSI (EN 300 744) especifica la difusi&oacute;n terrestre de se&ntilde;ales de TV codificadas en:";
 choices[60]= new Array();
 choices[60][0] = "MPEG-3.";
 choices[60][1] = "MPEG-2.";
 choices[60][2] = "MPEG-4.";
 choices[60][3] = "MPEG-1.";
 answers[60] = 1;
 units[60] = ['115'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5659. ";
 preguntaids[60] = 5659


//  Id pregunta: 5790 Año de creación de pregunta: 2007
 questions[61]= "62)  Para establecer una conexi&oacute;n TCP, el emisor env&iacute;a un segmento TCP en el que:";
 choices[61]= new Array();
 choices[61][0] = "el bit CON a 1 y el bit FIN a 0";
 choices[61][1] = "el bit CON a 1 y el bit ACK a 0.";
 choices[61][2] = "el bit SYN a 1 y el bit FIN a 0";
 choices[61][3] = "el bit SYN a 1 y el bit ACK a 0.";
 answers[61] = 2;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5790. ";
 preguntaids[61] = 5790


//  Id pregunta: 5791 Año de creación de pregunta: 2007
 questions[62]= "63)  Dentro del protocolo de Ia capa de transporte TCP (Transmision Control Protocol&quot;), &iquest;cu&aacute;l de las siguientes primitivas no es de solicitud de servicio?:";
 choices[62]= new Array();
 choices[62][0] = "Active open";
 choices[62][1] = "Send";
 choices[62][2] = "Open success";
 choices[62][3] = "Allocate";
 answers[62] = 2;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5791. ";
 preguntaids[62] = 5791


//  Id pregunta: 5695 Año de creación de pregunta: 2007
 questions[63]= "64)  Las siglas CCNA se corresponden con:";
 choices[63]= new Array();
 choices[63][0] = "Una metodolog&iacute;a de gesti&oacute;n de proyectos en Tecnolog&iacute;as de is Informaci&oacute;n.";
 choices[63][1] = "Una metodolog&iacute;a para el an&aacute;lisis y gesti&oacute;n de riesgos en Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[63][2] = "Metodolog&iacute;a de gesti&oacute;n de Ia seguridad en las Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[63][3] = "Una certificaci&oacute;n de Cisco.";
 answers[63] = 3;
 units[63] = ['102'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5695. ";
 preguntaids[63] = 5695


//  Id pregunta: 5747 Año de creación de pregunta: 2007
 questions[64]= "65)  Cual de los siguientes servicios o redes est&aacute;n sujetos al &aacute;mbito de aplicaci&oacute;n de la Ley 9/2014 General de Telecomunicaciones";
 choices[64]= new Array();
 choices[64][0] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n sonora";
 choices[64][1] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n televisiva";
 choices[64][2] = "las redes de televisi&oacute;n por cable";
 choices[64][3] = "servicios que suministren contenidos transmitidos mediante redes y servicios de comunicaciones electr&oacute;nicas";
 answers[64] = 2;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5747. ";
 preguntaids[64] = 5747


//  Id pregunta: 5651 Año de creación de pregunta: 2007
 questions[65]= "66)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[65]= new Array();
 choices[65][0] = "800 MHz y 2 GHz";
 choices[65][1] = "900 MHz y 2 GHz";
 choices[65][2] = "800 MHz y 11 GHz";
 choices[65][3] = "900 MHz y 5 GHz";
 answers[65] = 1;
 units[65] = ['117'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5651. Desde el a&ntilde;o 2011 se incluye tambi&eacute;n la banda de 900MHz para servicios 3G";
 preguntaids[65] = 5651


//  Id pregunta: 5743 Año de creación de pregunta: 2007
 questions[66]= "67)  En los equipos CISCO con sistema operativo IOS, ,&iquest;como puede verse la configuraci&oacute;n actual del equipo?";
 choices[66]= new Array();
 choices[66][0] = "a trav&eacute;s del comando show running-config";
 choices[66][1] = "a trav&eacute;s del comando show router-stat";
 choices[66][2] = "a trav&eacute;s del comando show ios-config";
 choices[66][3] = "a trav&eacute;s del comando show ip interfaces";
 answers[66] = 0;
 units[66] = ['104'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5743. ";
 preguntaids[66] = 5743


//  Id pregunta: 5663 Año de creación de pregunta: 2007
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una norma certificable?";
 choices[67]= new Array();
 choices[67][0] = "ISO/IEC 27003";
 choices[67][1] = "UNE-ISO/IEC 27002:2009";
 choices[67][2] = "UNE-ISO/IEC 27001:2007";
 choices[67][3] = "BS 7799-1";
 answers[67] = 2;
 units[67] = ['119'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5663. ";
 preguntaids[67] = 5663


//  Id pregunta: 5795 Año de creación de pregunta: 2007
 questions[68]= "69)  En los sistemas de radiocomunicaci&oacute;n, el concepto de PIRE es:";
 choices[68]= new Array();
 choices[68][0] = "La ganancia de la antena";
 choices[68][1] = "La potencla interna del elemento radiante";
 choices[68][2] = "el producto de la potencla suministrada por la antena por la ganancla isot&oacute;pica de esta";
 choices[68][3] = "la probabilidad de interferencla debida a la reflexi&oacute;n de la se&ntilde;al emitida.";
 answers[68] = 2;
 units[68] = ['117'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5795. ";
 preguntaids[68] = 5795


//  Id pregunta: 5741 Año de creación de pregunta: 2007
 questions[69]= "70)  &iquest;Cu&aacute;l es el tama&ntilde;o de cabecera en una unidad de datos del protocolo lPv6?";
 choices[69]= new Array();
 choices[69][0] = "es variable";
 choices[69][1] = "de 20 octetos";
 choices[69][2] = "de 40 octetos";
 choices[69][3] = "similar a lPv4";
 answers[69] = 2;
 units[69] = ['109'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5741. ";
 preguntaids[69] = 5741


//  Id pregunta: 5582 Año de creación de pregunta: 2007
 questions[70]= "71)  las diferencias principales entre el cable no apantallado UTP tipo 3 y el UTP tipo 5 es que";
 choices[70]= new Array();
 choices[70][0] = "UTP-3 incluye tres pares en un mismo conducto aislante, y UTP-5, cinco pares.";
 choices[70][1] = "UTP-5 es m&aacute;s trenzado por unidad de longitud que UTP-3.";
 choices[70][2] = "UTP-5 utiliza conectores RJ45, y UTP-3 utiliza RJ43.";
 choices[70][3] = "UTP-3 tiene m&aacute;s capacidad (ancho de banda), y consigue mayores velocidades que UTP-5.";
 answers[70] = 1;
 units[70] = ['104'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5582. ";
 preguntaids[70] = 5582


//  Id pregunta: 5698 Año de creación de pregunta: 2007
 questions[71]= "72)  El sistema de radiodifusi&oacute;n digital de audio (DAB) emplea bloques de frecuencia cuyo ancho de banda es de:";
 choices[71]= new Array();
 choices[71][0] = "200 KHz.";
 choices[71][1] = "1,536 MHz.";
 choices[71][2] = "8 MHz.";
 choices[71][3] = "4,567 MHz";
 answers[71] = 1;
 units[71] = ['115'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5698. ";
 preguntaids[71] = 5698


//  Id pregunta: 5748 Año de creación de pregunta: 2007
 questions[72]= "73)  Respecto al acceso a Internet, Ia Ley General de telecomunicaciones:";
 choices[72]= new Array();
 choices[72][0] = "no menciona nada";
 choices[72][1] = "obliga a todos los operadores a prestar dicho servicio en localidades de mas de 1.000 habitantes.";
 choices[72][2] = "obliga a Telefonica de Espana, S.A. a prestarlo en todo el territorio nacional";
 choices[72][3] = "lo incluye dentro del servicio universal.";
 answers[72] = 3;
 units[72] = ['121'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5748. ";
 preguntaids[72] = 5748


//  Id pregunta: 5517 Año de creación de pregunta: 2007
 questions[73]= "74)  La telefon&iacute;a m&oacute;vil celular:";
 choices[73]= new Array();
 choices[73][0] = "Permite el paso din&aacute;mico de un terminal entre las c&eacute;lulas.";
 choices[73][1] = "No permite el cambio de c&eacute;lula durante la conversaci&oacute;n.";
 choices[73][2] = "Establece un tama&ntilde;o de c&eacute;lula mayor en ciudad que en espacios abiertos a fin de soportar la mayor densidad de tr&aacute;fico.";
 choices[73][3] = "S&oacute;lo funciona con tecnolog&iacute;a digital.";
 answers[73] = 0;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5517. ";
 preguntaids[73] = 5517


//  Id pregunta: 5519 Año de creación de pregunta: 2007
 questions[74]= "75)  La raz&oacute;n por la que en las comunicaciones WiFi se utilizan t&eacute;cnicas de expansi&oacute;n del espectro es:";
 choices[74]= new Array();
 choices[74][0] = "Para poder incrementar la longitud de onda.";
 choices[74][1] = "Para reducir los problemas de propagaci&oacute;n de la se&ntilde;al.";
 choices[74][2] = "Por razones de seguridad.";
 choices[74][3] = "WiFi no utiliza expansi&oacute;n del espectro.";
 answers[74] = 1;
 units[74] = ['108'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5519. ";
 preguntaids[74] = 5519


