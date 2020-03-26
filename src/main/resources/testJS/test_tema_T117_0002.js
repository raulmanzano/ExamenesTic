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
//  Id pregunta: 8381 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Qu&eacute; Informaci&oacute;n contiene una SIM?";
 choices[0]= new Array();
 choices[0][0] = "IMSI";
 choices[0][1] = "PIN";
 choices[0][2] = "OMC";
 choices[0][3] = "La respuesta A y B son correctas";
 answers[0] = 3;
 units[0] = ['117'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8381. ";
 preguntaids[0] = 8381


//  Id pregunta: 5803 Año de creación de pregunta: 2007
 questions[1]= "2)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA";
 choices[1]= new Array();
 choices[1][0] = "7.2Mbps";
 choices[1][1] = "14.4Mbps";
 choices[1][2] = "4.8Mbps";
 choices[1][3] = "10.7Mbps";
 answers[1] = 1;
 units[1] = ['117'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5803. ";
 preguntaids[1] = 5803


//  Id pregunta: 5000 Año de creación de pregunta: 2002
 questions[2]= "3)  Los sistemas de radio en los que los m&oacute;viles no est&aacute;n asignados a una &uacute;nica frecuencia sino que pueden usar una cualquiera de las frecuencias o canales disponibles se denomina:";
 choices[2]= new Array();
 choices[2][0] = "GSM";
 choices[2][1] = "TACS";
 choices[2][2] = "NMT";
 choices[2][3] = "Trunking";
 answers[2] = 3;
 units[2] = ['117'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5000. ";
 preguntaids[2] = 5000


//  Id pregunta: 7859 Año de creación de pregunta: 2011
 questions[3]= "4)  Conforme a la especificaci&oacute;n 3GPP TS 03.60, GPRS se implementa l&oacute;gicamente a&ntilde;adiendo a la estructura de GSM los nodos Serving GPRS Support Node (SGSN) y Gateway GPRS Support Node (GGSN). &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[3]= new Array();
 choices[3][0] = "Entre ambos tipos de nodos se define la Intefaz Gn si est&aacute;n situados en la misma red m&oacute;vil (PLMN).";
 choices[3][1] = "El SGSN es el nodo de interconexi&oacute;n con la Red de Conmutaci&oacute;n de Paquetes o Packet Data Network (PDN).";
 choices[3][2] = "La funcionalidad proporcionada por SGSN y GGSN debe residir en diferentes nodos f&iacute;sicos.";
 choices[3][3] = "Entre ambos tipos de nodos se define la Intefaz Gi si est&aacute;n situados en distinta red m&oacute;vil (PLMN).";
 answers[3] = 0;
 units[3] = ['117'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 7859. Examen TIC A1 2010";
 preguntaids[3] = 7859


//  Id pregunta: 5132 Año de creación de pregunta: 2003
 questions[4]= "5)  Sobre el Entorno Dom&eacute;stico Virtual o VHE (Virtual Home Environment) puede decirse que:";
 choices[4]= new Array();
 choices[4][0] = "Es un nuevo est&aacute;ndar de interfaz dom&oacute;tica entre electrodom&eacute;sticos";
 choices[4][1] = "Es un concepto ligado a la tecnolog&iacute;a UMTS";
 choices[4][2] = "Es una norma de intercomunicaci&oacute;n inal&aacute;mbrica para utilizar en el hogar";
 choices[4][3] = "Ninguna de las opciones anteriores es correcta";
 answers[4] = 1;
 units[4] = ['117'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5132. ";
 preguntaids[4] = 5132


//  Id pregunta: 7271 Año de creación de pregunta: 2010
 questions[5]= "6)  GPRS no se caracteriza por";
 choices[5]= new Array();
 choices[5][0] = "Los paquetes se envian a intervalos de tiempo irregulares";
 choices[5][1] = "El nodo GGSN es el nodo pasarela que realiza la interfaz con las redes de datos externas";
 choices[5][2] = "No requiere gesti&oacute;n de movilidad";
 choices[5][3] = "Todas las respuestas anteriores son correctas";
 answers[5] = 2;
 units[5] = ['117'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7271. ";
 preguntaids[5] = 7271


//  Id pregunta: 8244 Año de creación de pregunta: 2011
 questions[6]= "7)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[6][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[6][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar la red por alg&uacute;n motivo.";
 choices[6][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[6] = 2;
 units[6] = ['117'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8244. Examen UPM A2 2011";
 preguntaids[6] = 8244


//  Id pregunta: 8149 Año de creación de pregunta: 2011
 questions[7]= "8)  En las redes m&oacute;viles 3G de transici&oacute;n, encontramos tecnolog&iacute;as como HSPA evolucionado o HSPA+. &iquest;Cu&aacute;l es una de las caracter&iacute;sticas de mejora de esta tecnolog&iacute;a?";
 choices[7]= new Array();
 choices[7][0] = "Permite el uso de antenas MIMO";
 choices[7][1] = "Alcanza velocidades pico te&oacute;ncas de 100 Mbps.";
 choices[7][2] = "Proporciona capacidades sim&eacute;tricas para los enlaces ascendente y descendente";
 choices[7][3] = "La modulaci&oacute;n es GMSK, de gran eficiencia espectral";
 answers[7] = 0;
 units[7] = ['117'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8149. Examen TIC A2 2010 interna";
 preguntaids[7] = 8149


//  Id pregunta: 5137 Año de creación de pregunta: 2003
 questions[8]= "9)  Al ajuste hacia niveles predeterminados de los valores troceados de una se&ntilde;al anal&oacute;gica se le denomina:";
 choices[8]= new Array();
 choices[8][0] = "Cuantificaci&oacute;n.";
 choices[8][1] = "Digitalizaci&oacute;n.";
 choices[8][2] = "Discretizaci&oacute;n.";
 choices[8][3] = "Codificaci&oacute;n.";
 answers[8] = 0;
 units[8] = ['117'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 5137. ";
 preguntaids[8] = 5137


//  Id pregunta: 5244 Año de creación de pregunta: 2006
 questions[9]= "10)  &iquest;Qu&eacute; modulaci&oacute;n se usa en GSM?";
 choices[9]= new Array();
 choices[9][0] = "QPSK";
 choices[9][1] = "BPSK";
 choices[9][2] = "QAM";
 choices[9][3] = "GMSK";
 answers[9] = 3;
 units[9] = ['117'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5244. ";
 preguntaids[9] = 5244


//  Id pregunta: 5919 Año de creación de pregunta: 2007
 questions[10]= "11)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN(Gateway GPRS Support Node)?";
 choices[10]= new Array();
 choices[10][0] = "La gesti&oacute;n de la movilidad";
 choices[10][1] = "El cifrado y autenticaci&oacute;n";
 choices[10][2] = "La conexi&oacute;n al HLR (Home Location Register)";
 choices[10][3] = "La conexi&oacute;n a los ISP (Internet Service Provider)";
 answers[10] = 3;
 units[10] = ['117'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5919. ";
 preguntaids[10] = 5919


//  Id pregunta: 8830 Año de creación de pregunta: 2013
 questions[11]= "12)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n con 4G:";
 choices[11]= new Array();
 choices[11][0] = "Admite la utilizaci&oacute;n de antenas MIMO";
 choices[11][1] = "Para el servicio de voz utiliza el canal VOL, cuyo acceso se negocia previamente a trav&eacute;s del canal VOL-ALLOC";
 choices[11][2] = "Utiliza modulaciones adaptativas para el aprovechamiento &oacute;ptimo del canal.";
 choices[11][3] = "Utiliza multiplexaci&oacute;n estad&iacute;stica en el dominio de la frecuencia.";
 answers[11] = 1;
 units[11] = ['117'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8830. ";
 preguntaids[11] = 8830


//  Id pregunta: 5794 Año de creación de pregunta: 2007
 questions[12]= "13)  La tecnolog&iacute;a de radio LMDS (Local Multipoint Distribution System) se caracteriza entre otras cosas por ser:";
 choices[12]= new Array();
 choices[12][0] = "una tecnolog&iacute;a punto a punto";
 choices[12][1] = "no requiere de visibilidad directa entre enlaces";
 choices[12][2] = "tiene radios de cobertura t&iacute;picos mayores a 25 Km (kilometros)";
 choices[12][3] = "utilizada para entornos de alta concentraci&oacute;n de usuarios";
 answers[12] = 3;
 units[12] = ['117'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5794. ";
 preguntaids[12] = 5794


//  Id pregunta: 5241 Año de creación de pregunta: 2006
 questions[13]= "14)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[13]= new Array();
 choices[13][0] = "HSCSD, GSM, GPRS, UMTS";
 choices[13][1] = "GSM. HSCSD, UMTS, GPRS";
 choices[13][2] = "GSM, HSCSD, GPRS, UMTS";
 choices[13][3] = "GSM, GPRS, HSCSD, UMTS";
 answers[13] = 2;
 units[13] = ['117'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5241. ";
 preguntaids[13] = 5241


//  Id pregunta: 7809 Año de creación de pregunta: 2010
 questions[14]= "15)  &iquest;Por qu&eacute; organismo de normalizaci&oacute;n ha sido promovido el est&aacute;ndar GSM?";
 choices[14]= new Array();
 choices[14][0] = "ISO (International Standards Organization).";
 choices[14][1] = "IEEE (Institute of Electrical Engineers).";
 choices[14][2] = "ETSI (European Telecommunications Standards Institute).";
 choices[14][3] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n).";
 answers[14] = 2;
 units[14] = ['117'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 7809. ";
 preguntaids[14] = 7809


//  Id pregunta: 7207 Año de creación de pregunta: 2010
 questions[15]= "16)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[15]= new Array();
 choices[15][0] = "Onda de superficie";
 choices[15][1] = "Onda ionosf&eacute;rica";
 choices[15][2] = "Onda espacial";
 choices[15][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[15] = 2;
 units[15] = ['117'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7207. Castilla La Mancha 2009";
 preguntaids[15] = 7207


//  Id pregunta: 5239 Año de creación de pregunta: 2006
 questions[16]= "17)  La arquitectura del sistema GPRS, adem&aacute;s de los elementos del sistema GSM, requiere una serie de nuevos elementos entre los que se encuentran:";
 choices[16]= new Array();
 choices[16][0] = "Los nodos GGSN y GSGN";
 choices[16][1] = "Los nodos SGSN y GSSN";
 choices[16][2] = "Los nodos GSGN y SSGN";
 choices[16][3] = "Los nodos GGSN y SGSN";
 answers[16] = 3;
 units[16] = ['117'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5239. ";
 preguntaids[16] = 5239


//  Id pregunta: 5011 Año de creación de pregunta: 2002
 questions[17]= "18)  OSA Parlay es:";
 choices[17]= new Array();
 choices[17][0] = "Open Services Architecture, del Parlay Group, arquitectura que pretende establecer una capa de middleware para el desarrollo de aplicaciones est&aacute;ndares comunes para el desarrollo de servicios m&oacute;viles";
 choices[17][1] = "Open Software Association, con sede establecida en Parlay (Texas)";
 choices[17][2] = "Other Specification for Applicatios, un nuevo est&aacute;ndar dise&ntilde;ado por John Parlay (miembro destacado de ITU-T) que pretende establecer una capa universal de aplicaci&oacute;n que a&uacute;ne las capas de aplicaci&oacute;n de OSI y TCP/IP favoreciendo su total compatibilidad";
 choices[17][3] = "OSA Parlay no se corresponde con ning&uacute;n acr&oacute;nimo conocido";
 answers[17] = 0;
 units[17] = ['117'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5011. ";
 preguntaids[17] = 5011


//  Id pregunta: 5795 Año de creación de pregunta: 2007
 questions[18]= "19)  En los sistemas de radiocomunicaci&oacute;n, el concepto de PIRE es:";
 choices[18]= new Array();
 choices[18][0] = "La ganancia de la antena";
 choices[18][1] = "La potencla interna del elemento radiante";
 choices[18][2] = "el producto de la potencla suministrada por la antena por la ganancla isot&oacute;pica de esta";
 choices[18][3] = "la probabilidad de interferencla debida a la reflexi&oacute;n de la se&ntilde;al emitida.";
 answers[18] = 2;
 units[18] = ['117'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5795. ";
 preguntaids[18] = 5795


//  Id pregunta: 5804 Año de creación de pregunta: 2009
 questions[19]= "20)  Modulaci&oacute;n empleada en la tecnolog&iacute;a HSDPA en R5 para el enlace descendente";
 choices[19]= new Array();
 choices[19][0] = "4QAM y QPSK";
 choices[19][1] = "8QAM y QPSK";
 choices[19][2] = "16 QAM y QPSK";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 2;
 units[19] = ['117'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5804. ";
 preguntaids[19] = 5804


//  Id pregunta: 5704 Año de creación de pregunta: 2007
 questions[20]= "21)  El Sistema de Comunicaciones Moviles Europeo de Tercera Generacion recibe el nombre de:";
 choices[20]= new Array();
 choices[20][0] = "UMTS";
 choices[20][1] = "EDGE";
 choices[20][2] = "DCS-1800.";
 choices[20][3] = "PHS";
 answers[20] = 0;
 units[20] = ['117'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5704. ";
 preguntaids[20] = 5704


//  Id pregunta: 7272 Año de creación de pregunta: 2010
 questions[21]= "22)  GPRS no se caracteriza por";
 choices[21]= new Array();
 choices[21][0] = "Servicio simult&aacute;neo de voz y datos";
 choices[21][1] = "No existe multiplexaci&oacute;n de voz y datos";
 choices[21][2] = "Servicio no orientado a conexi&oacute;n";
 choices[21][3] = "Tarificaci&oacute;n por volumen de datos intercambiado";
 answers[21] = 1;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 7272. ";
 preguntaids[21] = 7272


//  Id pregunta: 5172 Año de creación de pregunta: 2003
 questions[22]= "23)  En telefon&iacute;a movil GSM qu&eacute; dos bases de datos se utilizan para guardar datos del cliente";
 choices[22]= new Array();
 choices[22][0] = "VLR y HLR";
 choices[22][1] = "MSC y VLR";
 choices[22][2] = "NMC y OMC";
 choices[22][3] = "GMSC y NMC";
 answers[22] = 0;
 units[22] = ['117'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5172. ";
 preguntaids[22] = 5172


//  Id pregunta: 8148 Año de creación de pregunta: 2011
 questions[23]= "24)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[23]= new Array();
 choices[23][0] = "10,8 Mbps te&oacute;ricos.";
 choices[23][1] = "14 Mbps";
 choices[23][2] = "2 Mbps";
 choices[23][3] = "384 Kbps";
 answers[23] = 1;
 units[23] = ['117'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8148. Examen TIC A2 2010 interna";
 preguntaids[23] = 8148


//  Id pregunta: 6736 Año de creación de pregunta: 2009
 questions[24]= "25)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[24]= new Array();
 choices[24][0] = "GPRS";
 choices[24][1] = "UMTS";
 choices[24][2] = "GSM";
 choices[24][3] = "DECT";
 answers[24] = 1;
 units[24] = ['117'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 6736. MAP 2008 A1";
 preguntaids[24] = 6736


//  Id pregunta: 7270 Año de creación de pregunta: 2010
 questions[25]= "26)  GSM no utiliza";
 choices[25]= new Array();
 choices[25][0] = "Esquema de protecci&oacute;n mediante salto RF";
 choices[25][1] = "Transmisi&oacute;n discontinua";
 choices[25][2] = "Transmisi&oacute;n continua";
 choices[25][3] = "Paging";
 answers[25] = 2;
 units[25] = ['117'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 7270. ";
 preguntaids[25] = 7270


//  Id pregunta: 5240 Año de creación de pregunta: 2006
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no es un elemento de la arquitectura GSM?";
 choices[26]= new Array();
 choices[26][0] = "HLR";
 choices[26][1] = "MSC";
 choices[26][2] = "SGSN";
 choices[26][3] = "BTS";
 answers[26] = 2;
 units[26] = ['117'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5240. ";
 preguntaids[26] = 5240


//  Id pregunta: 7275 Año de creación de pregunta: 2010
 questions[27]= "28)  HSDPA introduce, respecto de UMTS, las siguientes mejoras:";
 choices[27]= new Array();
 choices[27][0] = "Tasas cercanas 200 Gbps";
 choices[27][1] = "Nueva portadora de 584 kbps";
 choices[27][2] = "Reducci&oacute;n del tiempo de latencia";
 choices[27][3] = "M&aacute;ximo de 10 GB de tr&aacute;fico al mes para el usuario";
 answers[27] = 2;
 units[27] = ['117'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 7275. ";
 preguntaids[27] = 7275


//  Id pregunta: 5261 Año de creación de pregunta: 2006
 questions[28]= "29)  Que elemento de los siguientes no son propios de instalaciones de VoIP";
 choices[28]= new Array();
 choices[28][0] = "gatekeeper";
 choices[28][1] = "SIP";
 choices[28][2] = "router";
 choices[28][3] = "todos los anteriores";
 answers[28] = 3;
 units[28] = ['117'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5261. ";
 preguntaids[28] = 5261


//  Id pregunta: 8407 Año de creación de pregunta: 2011
 questions[29]= "30)  El sistema de radiocomunicaciones digitales TETRA:";
 choices[29]= new Array();
 choices[29][0] = "Tiene capacidades de transmisi&oacute;n de datos.";
 choices[29][1] = "No permite comunicaciones uno a muchos.";
 choices[29][2] = "Permite una mayor densidad de usuarios que GSM.";
 choices[29][3] = "Es exclusivamente anal&oacute;gico";
 answers[29] = 0;
 units[29] = ['117'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8407. Operador Ayto. Madrid 2010";
 preguntaids[29] = 8407


//  Id pregunta: 6064 Año de creación de pregunta: 2003
 questions[30]= "31)  Una caracter&iacute;stica de la tecnolog&iacute;a HSDPA (High Speed Downlink Packet Access) es:";
 choices[30]= new Array();
 choices[30][0] = "Adaptaci&oacute;n r&aacute;pida del enlace. La velocidad de transmisi&oacute;n de datos var&iacute;a de forma r&aacute;pida seg&uacute;n las condicionesdel canal de radio.";
 choices[30][1] = "Transmisi&oacute;n en canal no compartido. Se introduce un nuevo canal de transporte en el enlace descendentedenominado HS-DSCH (High-Speed Downlink Shared Channel).";
 choices[30][2] = "Los datos que se reciben de forma err&oacute;nea, debido a las condiciones de propagaci&oacute;n, no hay que solicitarlos denuevo al transmisor para su correcci&oacute;n.";
 choices[30][3] = "La modulaci&oacute;n normalmente empleada es 4-QAM.";
 answers[30] = 0;
 units[30] = ['117'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6064. TIC B 2007";
 preguntaids[30] = 6064


//  Id pregunta: 5745 Año de creación de pregunta: 2007
 questions[31]= "32)  Cuando un m&oacute;vil se enciende y no encuentra una estaci&oacute;n base de la red a la que pertenece";
 choices[31]= new Array();
 choices[31][0] = "se registra en el HLR (Home Location Register) de la red a la que accede";
 choices[31][1] = "se registra en el VLR (Visitors Location Register) de la red a la que pertenece";
 choices[31][2] = "se registra en el VLR (Visitors Location Register) de la red a la que accede";
 choices[31][3] = "no se registra en ninguna red";
 answers[31] = 2;
 units[31] = ['117'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5745. ";
 preguntaids[31] = 5745


//  Id pregunta: 5046 Año de creación de pregunta: 2002
 questions[32]= "33)  Se conoce como tiempo de vuelo a:";
 choices[32]= new Array();
 choices[32][0] = "El tiempo desde que el cabeza de un disco comienza su movimiento hasta que se posa sobre una pista concreta de la superficie del disco";
 choices[32][1] = "El tiempo desde que una se&ntilde;al (onda) sale de un emisor v&iacute;a radio (aire) hasta que llega a su destino";
 choices[32][2] = "El tiempo que transcurre desde que se pulsa una tecla hasta que el sistema responde al comando requerido";
 choices[32][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[32] = 1;
 units[32] = ['117'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5046. ";
 preguntaids[32] = 5046


//  Id pregunta: 8227 Año de creación de pregunta: 2011
 questions[33]= "34)  La se&ntilde;ales de banda Ku, &iquest;en que rango de frecuencias trabajan?";
 choices[33]= new Array();
 choices[33][0] = "1-8 MHz";
 choices[33][1] = "4-8 GHz";
 choices[33][2] = "12-18 GHz";
 choices[33][3] = "4-8 MHz";
 answers[33] = 2;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8227. Examen UPM A2 2011";
 preguntaids[33] = 8227


//  Id pregunta: 5738 Año de creación de pregunta: 2007
 questions[34]= "35)  Las siglas HSDPA corresponden a:";
 choices[34]= new Array();
 choices[34][0] = "High-Speed Dynamic Packet Access";
 choices[34][1] = "High-Speed Downlink Packet Access";
 choices[34][2] = "High-Speed Data Packet Access";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = 1;
 units[34] = ['117'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5738. ";
 preguntaids[34] = 5738


//  Id pregunta: 5651 Año de creación de pregunta: 2007
 questions[35]= "36)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[35]= new Array();
 choices[35][0] = "800 MHz y 2 GHz";
 choices[35][1] = "900 MHz y 2 GHz";
 choices[35][2] = "800 MHz y 11 GHz";
 choices[35][3] = "900 MHz y 5 GHz";
 answers[35] = 1;
 units[35] = ['117'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5651. Desde el a&ntilde;o 2011 se incluye tambi&eacute;n la banda de 900MHz para servicios 3G";
 preguntaids[35] = 5651


//  Id pregunta: 5862 Año de creación de pregunta: 2009
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes sistemas de telefon&iacute;a se dise&ntilde;&oacute; para trabajar en espacios reducidos y altas densidades de tr&aacute;fico?";
 choices[36]= new Array();
 choices[36][0] = "GSM 900";
 choices[36][1] = "TACS";
 choices[36][2] = "DECT";
 choices[36][3] = "PAS";
 answers[36] = 2;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5862. ";
 preguntaids[36] = 5862


//  Id pregunta: 7274 Año de creación de pregunta: 2010
 questions[37]= "38)  UMTS";
 choices[37]= new Array();
 choices[37][0] = "Reutiliza el subsistema de red de GSM";
 choices[37][1] = "Reutiliza el subsistema de red de GPRS";
 choices[37][2] = "El sistema de acceso radio es nuevo";
 choices[37][3] = "Todas las respuestas anteriores son ciertas";
 answers[37] = 3;
 units[37] = ['117'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7274. ";
 preguntaids[37] = 7274


//  Id pregunta: 6642 Año de creación de pregunta: 2009
 questions[38]= "39)  En un radioenlace:";
 choices[38]= new Array();
 choices[38][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[38][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[38][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[38][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[38] = 1;
 units[38] = ['117'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 6642. ";
 preguntaids[38] = 6642


//  Id pregunta: 5242 Año de creación de pregunta: 2006
 questions[39]= "40)  &iquest;Cu&aacute;l es el ancho de banda de separaci&oacute;n entre las portadoras ascendentes y descendentes en GSM?";
 choices[39]= new Array();
 choices[39][0] = "15 MHz";
 choices[39][1] = "25 MHz";
 choices[39][2] = "35 MHz";
 choices[39][3] = "45 MHz";
 answers[39] = 3;
 units[39] = ['117'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5242. ";
 preguntaids[39] = 5242


//  Id pregunta: 7964 Año de creación de pregunta: 2011
 questions[40]= "41)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es:";
 choices[40]= new Array();
 choices[40][0] = "GPRS.";
 choices[40][1] = "HSDPA.";
 choices[40][2] = "HSUPA.";
 choices[40][3] = "UMTS.";
 answers[40] = 2;
 units[40] = ['117'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7964. Examen TIC A2 2010";
 preguntaids[40] = 7964


//  Id pregunta: 6063 Año de creación de pregunta: 2003
 questions[41]= "42)  Cu&aacute;l debe ser la frecuencia m&iacute;nima de muestreo de una se&ntilde;al anal&oacute;gica de voz transmitida por un canaltelef&oacute;nico para que pueda ser reconstruida con exactitud:";
 choices[41]= new Array();
 choices[41][0] = "8 muestras/segundo.";
 choices[41][1] = "8000 muestras/segundo.";
 choices[41][2] = "16 muestras/segundo.";
 choices[41][3] = "4000 muestras/segundo.";
 answers[41] = 1;
 units[41] = ['117'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6063. TIC B 2007";
 preguntaids[41] = 6063


//  Id pregunta: 7268 Año de creación de pregunta: 2010
 questions[42]= "43)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[42]= new Array();
 choices[42][0] = "Tecnolog&iacute;a HSDPA";
 choices[42][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[42][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[42][3] = "Todas las respuestas anteriores son correctas";
 answers[42] = 3;
 units[42] = ['117'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7268. ";
 preguntaids[42] = 7268


//  Id pregunta: 5238 Año de creación de pregunta: 2006
 questions[43]= "44)  En relaci&oacute;n a la numeraci&oacute;n del sistema de telefon&iacute;a m&oacute;vil GSM, el n&uacute;mero que identifica a un abonado de una red GSM dentro del plan de numeraci&oacute;n de la red telef&oacute;nica p&uacute;blica conmutada se denomina:";
 choices[43]= new Array();
 choices[43][0] = "MSRN";
 choices[43][1] = "IMEI";
 choices[43][2] = "MSISDN";
 choices[43][3] = "IMSI";
 answers[43] = 2;
 units[43] = ['117'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5238. ";
 preguntaids[43] = 5238


//  Id pregunta: 5071 Año de creación de pregunta: 2002
 questions[44]= "45)  SIM equivale a:";
 choices[44]= new Array();
 choices[44][0] = "Software for IMSI of Mobiles";
 choices[44][1] = "Secure Identification of Mobile Subscriber";
 choices[44][2] = "Subscriber Identity Module";
 choices[44][3] = "Synchronous Internet Media";
 answers[44] = 2;
 units[44] = ['117'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5071. ";
 preguntaids[44] = 5071


//  Id pregunta: 5597 Año de creación de pregunta: 2007
 questions[45]= "46)  &iquest;Cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[45]= new Array();
 choices[45][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[45][1] = "100 kbps";
 choices[45][2] = "144 Kbps";
 choices[45][3] = "384 kbps";
 answers[45] = 3;
 units[45] = ['117'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5597. ";
 preguntaids[45] = 5597


//  Id pregunta: 5863 Año de creación de pregunta: 2007
 questions[46]= "47)  La interfaz entre la RNC de la UTRAN y el SGSN es:";
 choices[46]= new Array();
 choices[46][0] = "Iu";
 choices[46][1] = "Iub";
 choices[46][2] = "Gi";
 choices[46][3] = "Gb";
 answers[46] = 0;
 units[46] = ['117'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5863. ";
 preguntaids[46] = 5863


//  Id pregunta: 8533 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Qu&eacute; categor&iacute;as de HSDPA pueden alcanzar 10 Mbits/s?";
 choices[47]= new Array();
 choices[47][0] = "9 y 10";
 choices[47][1] = "9";
 choices[47][2] = "10";
 choices[47][3] = "12";
 answers[47] = 0;
 units[47] = ['117'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8533. ";
 preguntaids[47] = 8533


//  Id pregunta: 7273 Año de creación de pregunta: 2010
 questions[48]= "49)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[48]= new Array();
 choices[48][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[48][1] = "La capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[48][2] = "El esquema de codificaci&oacute;n";
 choices[48][3] = "Todas las respuestas anteriores son ciertas";
 answers[48] = 3;
 units[48] = ['117'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7273. ";
 preguntaids[48] = 7273


//  Id pregunta: 5864 Año de creación de pregunta: 2009
 questions[49]= "50)  En UMTS R99 o R3, la interfaz entre la UTRAN y el SGSN se establece sobre:";
 choices[49]= new Array();
 choices[49][0] = "Frame Relay";
 choices[49][1] = "ATM";
 choices[49][2] = "VPLS";
 choices[49][3] = "Cualquiera";
 answers[49] = 1;
 units[49] = ['117'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5864. ";
 preguntaids[49] = 5864


//  Id pregunta: 5111 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Cu&aacute;les son las capas que componen la arquitectura WAP?";
 choices[50]= new Array();
 choices[50][0] = "Aplicaci&oacute;n, Sesi&oacute;n, Transacciones y Transporte";
 choices[50][1] = "Aplicaci&oacute;n, Sesi&oacute;n,Presentaci&oacute;n, Transporte, y Red";
 choices[50][2] = "Aplicaci&oacute;n, Sesi&oacute;n, Seguridad y Transporte";
 choices[50][3] = "Ninguna de las opciones anteriores es correcta";
 answers[50] = 3;
 units[50] = ['117'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5111. ";
 preguntaids[50] = 5111


//  Id pregunta: 8829 Año de creación de pregunta: 2013
 questions[51]= "52)  La ley de Cooper afirma que:";
 choices[51]= new Array();
 choices[51][0] = "El n&uacute;mero m&aacute;ximo de conversaciones de voz o su equivalente en tr&aacute;fico de datos que pueden ser llevados a cabo en todo el espectro radioel&eacute;ctrico &uacute;til en una determinada &aacute;rea, se dobla cada 30 meses.";
 choices[51][1] = "Tijeras cortan papel, papel cubre a piedra, piedra aplasta lagarto, lagarto envenena a Spock.";
 choices[51][2] = "&Eacute;l n&uacute;mero de MFLOPS que un procesador puede realizar, aumenta siguiendo un ritmo logar&iacute;tmico.";
 choices[51][3] = "El rendimiento de un sistema aumenta linealmente con el n&uacute;mero de unidades de procesamiento que posea.";
 answers[51] = 0;
 units[51] = ['117'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8829. ";
 preguntaids[51] = 8829


//  Id pregunta: 8097 Año de creación de pregunta: 2011
 questions[52]= "53)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[52]= new Array();
 choices[52][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[52][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[52][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = 1;
 units[52] = ['117'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8097. Analista Ayto. Madrid 2010";
 preguntaids[52] = 8097


//  Id pregunta: 6643 Año de creación de pregunta: 2009
 questions[53]= "54)  En comunicaciones m&oacute;viles:";
 choices[53]= new Array();
 choices[53][0] = "La raz&oacute;n por la que se usan frecuencia altas para las comunicaciones m&oacute;viles es porque se alcanzan m&aacute;s distancias que con frecuencias inferiores para la misma potencia radiada";
 choices[53][1] = "El sentido de transmisi&oacute;n de estaci&oacute;n m&oacute;vil a estaci&oacute;n terrena suele ocupar la banda inferior de las dos en que se dividen los sistemas TDD.";
 choices[53][2] = "Las bandas de frecuencia m&aacute;s bajas suelen estar asociadas a mayores anchos de banda que las bandas de frecuencias m&aacute;s altas.";
 choices[53][3] = "Todas las anteriores son falsas.";
 answers[53] = 3;
 units[53] = ['117'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 6643. ";
 preguntaids[53] = 6643


//  Id pregunta: 7403 Año de creación de pregunta: 2010
 questions[54]= "55)  En telefon&iacute;a m&oacute;vil, la tecnolog&iacute;a GSM utiliza las siguientes bases de datos de usuarios";
 choices[54]= new Array();
 choices[54][0] = "HLR y VLR";
 choices[54][1] = "VLR y MSC";
 choices[54][2] = "NMC y OMC";
 choices[54][3] = "AUC y NMC";
 answers[54] = 0;
 units[54] = ['117'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 7403. Examen TIC B 2009";
 preguntaids[54] = 7403


//  Id pregunta: 6641 Año de creación de pregunta: 2009
 questions[55]= "56)  UMTS en su est&aacute;ndar contempla como posibilidades para transmisi&oacute;n d&uacute;plex:";
 choices[55]= new Array();
 choices[55][0] = "CMDA o TDMA";
 choices[55][1] = "FDD o TDD";
 choices[55][2] = "FDMA u OFDMA";
 choices[55][3] = "TCDMA";
 answers[55] = 1;
 units[55] = ['117'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 6641. ";
 preguntaids[55] = 6641


//  Id pregunta: 8349 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[56]= new Array();
 choices[56][0] = "EDGE";
 choices[56][1] = "HSDPA";
 choices[56][2] = "UMTS/3G";
 choices[56][3] = "GPRS";
 answers[56] = 1;
 units[56] = ['117'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8349. Examen UC3M 2010";
 preguntaids[56] = 8349


//  Id pregunta: 5415 Año de creación de pregunta: 2006
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[57]= new Array();
 choices[57][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[57][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[57][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[57][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[57] = 0;
 units[57] = ['117'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5415. ";
 preguntaids[57] = 5415


//  Id pregunta: 5243 Año de creación de pregunta: 2006
 questions[58]= "59)  W-CDMA permite a UMTS trasmitir datos en un rango de velocidades que van desde los 144 Kbps a los 384 Kbps y hasta 2 Mbps en interior de edificios. Pero, &iquest;qu&eacute; t&eacute;cnica de duplexi&oacute;n usa W-CDMA?";
 choices[58]= new Array();
 choices[58][0] = "TDD";
 choices[58][1] = "FDD";
 choices[58][2] = "Las dos anteriores";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = 2;
 units[58] = ['117'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 5243. ";
 preguntaids[58] = 5243


//  Id pregunta: 7963 Año de creación de pregunta: 2011
 questions[59]= "60)  En el &aacute;mbito de las tecnolog&iacute;as de comunicaciones m&oacute;viles, el orden cronol&oacute;gico de protocolos, de mayor a menor antig&uuml;edad es:";
 choices[59]= new Array();
 choices[59][0] = "GSM, UMTS, HSUPA, HSDPA.";
 choices[59][1] = "GSM, UMTS, HSDPA, HSUPA.";
 choices[59][2] = "GSM, HSUPA, HSDPA, UMTS.";
 choices[59][3] = "UMTS, GSM, HSDPA, HSUPA.";
 answers[59] = 1;
 units[59] = ['117'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 7963. Examen TIC A2 2010";
 preguntaids[59] = 7963


//  Id pregunta: 7404 Año de creación de pregunta: 2010
 questions[60]= "61)  El acceso al medio utilizado por GSM (Global System Mobile) es acceso m&uacute;ltiple por divisi&oacute;n de:";
 choices[60]= new Array();
 choices[60][0] = "Frecuencia";
 choices[60][1] = "Tiempo";
 choices[60][2] = "Tiempo y frecuencia";
 choices[60][3] = "C&oacute;digo de banda ancha (WCDMA)";
 answers[60] = 2;
 units[60] = ['117'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7404. Examen TIC B 2009";
 preguntaids[60] = 7404


//  Id pregunta: 5805 Año de creación de pregunta: 2007
 questions[61]= "62)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[61]= new Array();
 choices[61][0] = "4G";
 choices[61][1] = "3.5G";
 choices[61][2] = "5G";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 1;
 units[61] = ['117'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5805. ";
 preguntaids[61] = 5805


//  Id pregunta: 6640 Año de creación de pregunta: 2009
 questions[62]= "63)  &iquest;De acuerdo al est&aacute;ndar, cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS R99 si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[62]= new Array();
 choices[62][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[62][1] = "100 kbps";
 choices[62][2] = "144 Kbps";
 choices[62][3] = "384 kbps";
 answers[62] = 3;
 units[62] = ['117'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 6640. ";
 preguntaids[62] = 6640


//  Id pregunta: 7793 Año de creación de pregunta: 2010
 questions[63]= "64)  En el &aacute;mbito de las redes de comunicaciones m&oacute;viles, cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[63]= new Array();
 choices[63][0] = "En la red GSM se utiliza el Acceso m&uacute;ltiple por divisi&oacute;n de c&oacute;digo de banda ancha (WCDMA) como tecnolog&iacute;a de acceso";
 choices[63][1] = "En la tecnolog&iacute;a UMTS las llamadas de voz y datos recorren el mismo camino en la red de acceso radio, pero se bifurcan en la red de conmutaci&oacute;n, existiendo una red para las llamadas de voz y otra para las llamadas de datos.";
 choices[63][2] = "El primer paso en la separaci&oacute;n entre voz y datos lo ha marcado la tecnolog&iacute;a TMA o TACS, al introducir conmutaci&oacute;n de paquetes para la transferencia de datos.";
 choices[63][3] = "En la red de acceso de la arquitectura LTE, el controlador de la red radio (RNC) controla los e-NodeB";
 answers[63] = 1;
 units[63] = ['117'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 7793. ";
 preguntaids[63] = 7793


//  Id pregunta: 5001 Año de creación de pregunta: 2002
 questions[64]= "65)  Los sistemas m&oacute;viles celulares:";
 choices[64]= new Array();
 choices[64][0] = "Son de car&aacute;cter unidireccional";
 choices[64][1] = "No permiten la conexi&oacute;n a la red p&uacute;blica";
 choices[64][2] = "Permiten la reutilizaci&oacute;n de frecuencias";
 choices[64][3] = "No requieren separaci&oacute;n m&iacute;nima entre c&eacute;lulas";
 answers[64] = 2;
 units[64] = ['117'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5001. ";
 preguntaids[64] = 5001


//  Id pregunta: 7201 Año de creación de pregunta: 2010
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[65]= new Array();
 choices[65][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[65][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[65][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[65][3] = "Es un servicio punto a punto";
 answers[65] = 2;
 units[65] = ['117'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7201. Castilla La Mancha 2009";
 preguntaids[65] = 7201


//  Id pregunta: 5262 Año de creación de pregunta: 2006
 questions[66]= "67)  &iquest;Qu&eacute; se puede hacer con un telefono IP?";
 choices[66]= new Array();
 choices[66][0] = "Llamar a un telefono IP de otra red de otro edificio";
 choices[66][1] = "Llamar a otro telefono analogico";
 choices[66][2] = "Ser llamado por otro telefono analogico";
 choices[66][3] = "todos los anteriores";
 answers[66] = 3;
 units[66] = ['117'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5262. ";
 preguntaids[66] = 5262


//  Id pregunta: 5411 Año de creación de pregunta: 2006
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes organismos de normalizaci&oacute;n ha promovido el est&aacute;ndar GSM?";
 choices[67]= new Array();
 choices[67][0] = "ISO (International Standards Organization)";
 choices[67][1] = "IEEE (Institute of Electrical Engineers)";
 choices[67][2] = "ETSI (European Telecommunications Standards Institute)";
 choices[67][3] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n)";
 answers[67] = 2;
 units[67] = ['117'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5411. ";
 preguntaids[67] = 5411


//  Id pregunta: 5091 Año de creación de pregunta: 2003
 questions[68]= "69)  Dentro de las Frecuencias de sat&eacute;lite de uso comercial  se encuentra la banda Ku(BSS) que tiene como aplicaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Datos y TV a altas velocidades";
 choices[68][1] = "Radiodifusi&oacute;n de televisi&oacute;n por sat&eacute;lite.";
 choices[68][2] = "VSAT, video e Internet";
 choices[68][3] = "Datos, voz y video";
 answers[68] = 1;
 units[68] = ['117'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5091. ";
 preguntaids[68] = 5091


//  Id pregunta: 5517 Año de creación de pregunta: 2007
 questions[69]= "70)  La telefon&iacute;a m&oacute;vil celular:";
 choices[69]= new Array();
 choices[69][0] = "Permite el paso din&aacute;mico de un terminal entre las c&eacute;lulas.";
 choices[69][1] = "No permite el cambio de c&eacute;lula durante la conversaci&oacute;n.";
 choices[69][2] = "Establece un tama&ntilde;o de c&eacute;lula mayor en ciudad que en espacios abiertos a fin de soportar la mayor densidad de tr&aacute;fico.";
 choices[69][3] = "S&oacute;lo funciona con tecnolog&iacute;a digital.";
 answers[69] = 0;
 units[69] = ['117'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5517. ";
 preguntaids[69] = 5517


//  Id pregunta: 5699 Año de creación de pregunta: 2007
 questions[70]= "71)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[70]= new Array();
 choices[70][0] = "El sistema GPRS permite el env&iacute;o de paquetes de datos sobre la red GSM.";
 choices[70][1] = "El sistema GPRS utiliza los mismos recursos de la interfaz radio del sistema GSM.";
 choices[70][2] = "En una misma celda no pueden coexistir canales GPRS y GSM.";
 choices[70][3] = "Un canal GPRS solo se asigna al usuario cuando se transmiten o reciben paquetes, mientras que un canal GSM se asigna de forma permanente al usuario durante toda la llamada.";
 answers[70] = 2;
 units[70] = ['117'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5699. ";
 preguntaids[70] = 5699


//  Id pregunta: 5806 Año de creación de pregunta: 2009
 questions[71]= "72)  HSDPA (High Speed Download Packet Access) no cumple que:";
 choices[71]= new Array();
 choices[71][0] = "Es compatible en sentido inverso con W-CDMA.";
 choices[71][1] = "Utiliza t&eacute;cnicas de redundancia incremental en la retransmisi&oacute;n de tramas.";
 choices[71][2] = "Emplea Fast Packet Scheduling, con el cual la estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datos en el siguiente marco de 2 ms.";
 choices[71][3] = "Su velocidad pico para un usuario es de 1 Mbps.";
 answers[71] = 3;
 units[71] = ['117'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5806. ";
 preguntaids[71] = 5806


//  Id pregunta: 7269 Año de creación de pregunta: 2010
 questions[72]= "73)  GSM se caracteriza por";
 choices[72]= new Array();
 choices[72][0] = "Enlace ascendente 880-905 MHz";
 choices[72][1] = "Enlace ascendente 890-915 MHz";
 choices[72][2] = "Enlace descendente 890-915 MHz";
 choices[72][3] = "Todas las respuestas anteriores son incorrectos";
 answers[72] = 1;
 units[72] = ['117'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7269. ";
 preguntaids[72] = 7269


//  Id pregunta: 7794 Año de creación de pregunta: 2010
 questions[73]= "74)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[73]= new Array();
 choices[73][0] = "GPRS.";
 choices[73][1] = "UMTS.";
 choices[73][2] = "GSM.";
 choices[73][3] = "DECT.";
 answers[73] = 1;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7794. ";
 preguntaids[73] = 7794


//  Id pregunta: 6423 Año de creación de pregunta: 2003
 questions[74]= "75)  Indique cu&aacute;l es una caracter&iacute;stica t&eacute;cnica de W-CDMA, utilizada en UMTS:";
 choices[74]= new Array();
 choices[74][0] = "Emplea radiocanales de 50MHz de ancho de banda";
 choices[74][1] = "Permite transmisiones multic&oacute;digo";
 choices[74][2] = "No admite duplexaci&oacute;n por divisi&oacute;n en frecuencia (FDD)";
 choices[74][3] = "No admite duplexaci&oacute;n por divisi&oacute;n en el tiempo (TDD)";
 answers[74] = 1;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 6423. ";
 preguntaids[74] = 6423


