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
//  Id pregunta: 7093 Año de creación de pregunta: 2010
 questions[0]= "1)  Los interesados en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado servicio de comunicaciones electr&oacute;nicas deber&aacute;n comunicarlo al Registro de Operadores en los t&eacute;rminos que se determinen mediante";
 choices[0]= new Array();
 choices[0][0] = "Real Decreto";
 choices[0][1] = "Resoluci&oacute;n Motivada";
 choices[0][2] = "Orden Ministerial";
 choices[0][3] = "Acuerdo del Consejo de Ministros";
 answers[0] = 0;
 units[0] = ['121'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7093. Art&iacute;culo 6.2 Ley 32/2003";
 preguntaids[0] = 7093


//  Id pregunta: 7195 Año de creación de pregunta: 2010
 questions[1]= "2)  &iquest;Qu&eacute; protocolo define las VLAN (Virtual LAN)?";
 choices[1]= new Array();
 choices[1][0] = "RFC 1032";
 choices[1][1] = "IEEE 802.3u";
 choices[1][2] = "IEEE 802.1q";
 choices[1][3] = "IEEE 802.11";
 answers[1] = 2;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7195. Castilla La Mancha 2009";
 preguntaids[1] = 7195


//  Id pregunta: 6840 Año de creación de pregunta: 2010
 questions[2]= "3)  Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[2]= new Array();
 choices[2][0] = "La direcci&oacute;n MAC del sistema final destino.";
 choices[2][1] = "La direcci&oacute;n IP del sistema final destino.";
 choices[2][2] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destino.";
 choices[2][3] = "La direcci&oacute;n MAC del router.";
 answers[2] = 3;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 6840. TIC A 2009";
 preguntaids[2] = 6840


//  Id pregunta: 6908 Año de creación de pregunta: 2010
 questions[3]= "4)  Con respecto al ancho de banda de la conexi&oacute;n ADSL de un abonado";
 choices[3]= new Array();
 choices[3][0] = "La tasa de transferencia no es sensible a la distancia del abonado a la central, de forma que es similar a todos los abonados de una misma central";
 choices[3][1] = "La tasa de transferencia es sensible a la distancia del abonado a la central, de forma que los abonados que est&aacute;n m&aacute;s cerca de la central tendr&aacute;n posibilidad de velocidades m&aacute;s altas";
 choices[3][2] = "La tasa de transferencia del abonado depende principalmente del n&uacute;mero de abonados que est&aacute;n conectados simult&aacute;neamente, en ning&uacute;n caso de la distancia a la central";
 choices[3][3] = "Todas las respuestas anteriores son falsas";
 answers[3] = 1;
 units[3] = ['106'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6908. ";
 preguntaids[3] = 6908


//  Id pregunta: 6917 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[4]= new Array();
 choices[4][0] = "SAMBA";
 choices[4][1] = "CIFS";
 choices[4][2] = "MSRPC";
 choices[4][3] = "Ninguna de las anteriores.";
 answers[4] = 1;
 units[4] = ['103'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 6917. ";
 preguntaids[4] = 6917


//  Id pregunta: 6847 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Qui&eacute;n es el responsable del est&aacute;ndar DVB-T para la emisi&oacute;n de TDT?";
 choices[5]= new Array();
 choices[5][0] = "CEN/CENELEC";
 choices[5][1] = "ETSI";
 choices[5][2] = "UIT-T";
 choices[5][3] = "IEEE";
 answers[5] = 1;
 units[5] = ['115'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 6847. ";
 preguntaids[5] = 6847


//  Id pregunta: 7247 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[6]= new Array();
 choices[6][0] = "TACACS+";
 choices[6][1] = "Radius";
 choices[6][2] = "Un grupo de trabajo peer-to-peer";
 choices[6][3] = "Diameter";
 answers[6] = 2;
 units[6] = ['120'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7247. ";
 preguntaids[6] = 7247


//  Id pregunta: 6873 Año de creación de pregunta: 2010
 questions[7]= "8)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[7]= new Array();
 choices[7][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[7][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[7][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[7][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[7] = 1;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 6873. TIC A 2009";
 preguntaids[7] = 6873


//  Id pregunta: 6941 Año de creación de pregunta: 2010
 questions[8]= "9)  Indique, cual de entre los siguientes elementos de un sistema de correo X.400 se corresponde con un servidor de correo:";
 choices[8]= new Array();
 choices[8][0] = "UA.";
 choices[8][1] = "MTA.";
 choices[8][2] = "GW.";
 choices[8][3] = "MS.";
 answers[8] = 1;
 units[8] = ['116'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6941. ";
 preguntaids[8] = 6941


//  Id pregunta: 7250 Año de creación de pregunta: 2010
 questions[9]= "10)  Un usuario de Kerberos";
 choices[9]= new Array();
 choices[9][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[9][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[9][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[9][3] = "Todas las respuestas anteriores son correctas";
 answers[9] = 3;
 units[9] = ['120'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7250. ";
 preguntaids[9] = 7250


//  Id pregunta: 6877 Año de creación de pregunta: 2010
 questions[10]= "11)  El protocolo UDP proporciona servicios a las aplicaciones para:";
 choices[10]= new Array();
 choices[10][0] = "Controlar el flujo extremo a extremo.";
 choices[10][1] = "Eliminar paquetes duplicados.";
 choices[10][2] = "Multiplexar y demultiplexar.";
 choices[10][3] = "Reordenar paquetes.";
 answers[10] = 2;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 6877. TIC A 2009";
 preguntaids[10] = 6877


//  Id pregunta: 6859 Año de creación de pregunta: 2010
 questions[11]= "12)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[11]= new Array();
 choices[11][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[11][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[11][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[11][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[11] = 3;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6859. TIC A 2009";
 preguntaids[11] = 6859


//  Id pregunta: 7092 Año de creación de pregunta: 2010
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un objetivo o principio de la ley 9/2014?";
 choices[12]= new Array();
 choices[12][0] = "Fomentar la competencia efectiva en los mercados de telecomunicaciones";
 choices[12][1] = "Fomentar, en la medida de lo posible, la neutralidad tecnol&oacute;gica en la regulaci&oacute;n.";
 choices[12][2] = "Promover el desarrollo de la Sociedad de la Informaci&oacute;n";
 choices[12][3] = "Hacer posible el uso eficaz de los recursos limitados de telecomunicaciones";
 answers[12] = 2;
 units[12] = ['121'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 7092. ";
 preguntaids[12] = 7092


//  Id pregunta: 6920 Año de creación de pregunta: 2010
 questions[13]= "14)  Indique la afirmaci&oacute;n correcta sobre los diferentes codecs de audio y video en videoconferencia H.323";
 choices[13]= new Array();
 choices[13][0] = "G711 y G722 son codecs de audio mientras que H261 y H263 son codecs de video";
 choices[13][1] = "G711 y G722 son codecs de video mientras que H261 y H263 son codecs de audio";
 choices[13][2] = "G711 y H261 son codecs de audio mientras que G722 y H263 son codecs de video";
 choices[13][3] = "G711 y H261 son codecs de video mientras que G722 y H263 son codecs de audio";
 answers[13] = 0;
 units[13] = ['122'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 6920. ";
 preguntaids[13] = 6920


//  Id pregunta: 6882 Año de creación de pregunta: 2010
 questions[14]= "15)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[14]= new Array();
 choices[14][0] = "Activas.";
 choices[14][1] = "Pasivas.";
 choices[14][2] = "Hiperactivas.";
 choices[14][3] = "Semipasivas.";
 answers[14] = 2;
 units[14] = ['108'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6882. TIC A 2009";
 preguntaids[14] = 6882


//  Id pregunta: 6846 Año de creación de pregunta: 2010
 questions[15]= "16)  En relaci&oacute;n con la TDT (Televisi&oacute;n Digital Terrestre), &iquest;como se denominan a las especificaciones t&eacute;cnicas aprobadas a nivel europeo para la emisi&oacute;n de TDT?";
 choices[15]= new Array();
 choices[15][0] = "TDT est&aacute;ndar";
 choices[15][1] = "DVB &ndash; T";
 choices[15][2] = "DVB - TDT";
 choices[15][3] = "Ninguna de las anteriores es correcta";
 answers[15] = 1;
 units[15] = ['115'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6846. ";
 preguntaids[15] = 6846


//  Id pregunta: 7194 Año de creación de pregunta: 2010
 questions[16]= "17)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[16]= new Array();
 choices[16][0] = "Repetidor";
 choices[16][1] = "Puente (bridge)";
 choices[16][2] = "Pasarela (gateway)";
 choices[16][3] = "Encaminador (router)";
 answers[16] = 1;
 units[16] = ['102'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7194. Castilla La Mancha 2009";
 preguntaids[16] = 7194


//  Id pregunta: 6821 Año de creación de pregunta: 2010
 questions[17]= "18)  El programa marco de la UE para la innovaci&oacute;n y competitividad se denomina:";
 choices[17]= new Array();
 choices[17][0] = "eTEN";
 choices[17][1] = "IDA";
 choices[17][2] = "CIP";
 choices[17][3] = "Ninguna de las respuestas es correcta";
 answers[17] = 2;
 units[17] = ['114'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 6821. ";
 preguntaids[17] = 6821


//  Id pregunta: 6902 Año de creación de pregunta: 2010
 questions[18]= "19)  Indique la opci&oacute;n FALSA. Dentro del servicio universal definido por la Ley 9/2014, General de Telecomunicaciones, se debe garantizar:";
 choices[18]= new Array();
 choices[18][0] = "El acceso funcional a internet a velocidad suficiente.";
 choices[18][1] = "Una gu&iacute;a general de n&uacute;meros de abonados.";
 choices[18][2] = "Una cobertura suficiente que permita el acceso a la red de telefon&iacute;a m&oacute;vil.";
 choices[18][3] = "Una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago en todo el territorio nacional.";
 answers[18] = 2;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 6902. TIC A 2009";
 preguntaids[18] = 6902


//  Id pregunta: 6824 Año de creación de pregunta: 2010
 questions[19]= "20)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[19]= new Array();
 choices[19][0] = "UIT-T";
 choices[19][1] = "IETF";
 choices[19][2] = "ISO/IEC";
 choices[19][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[19] = 1;
 units[19] = ['114'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 6824. ";
 preguntaids[19] = 6824


//  Id pregunta: 7205 Año de creación de pregunta: 2010
 questions[20]= "21)  Respecto al direccionamiento en el protocolo TCP, se puede afirmar que:";
 choices[20]= new Array();
 choices[20][0] = "La cabecera TCP incluye las direcciones IP origen y destino";
 choices[20][1] = "La cabecera TCP incluye las direcciones origen y destino y los puertos TCP origen y destino";
 choices[20][2] = "La cabecera TPC incluye los puertos TCP origen y destino";
 choices[20][3] = "La cabecera TCP no incluye ning&uacute;n elemento asociado al direccionamiento de las conexiones del nivel de transporte";
 answers[20] = 2;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7205. Castilla La Mancha 2009";
 preguntaids[20] = 7205


//  Id pregunta: 6905 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[21]= new Array();
 choices[21][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[21][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[21][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[21][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[21] = 0;
 units[21] = ['110'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 6905. ";
 preguntaids[21] = 6905


//  Id pregunta: 6909 Año de creación de pregunta: 2010
 questions[22]= "23)  Con respecto a la desagregaci&oacute;n del bucle de abonado:";
 choices[22]= new Array();
 choices[22][0] = "Existe una oferta de acceso al bucle de abonado (OBA) que obliga al operador establecido (&lsquo;incumbent&rsquo;) a abrir su red a los operadores alternativos";
 choices[22][1] = "La OBA exige que el operador establecido (&lsquo;incumbent&rsquo;) abra su red a los operadores alternativos para todos los servicios sin excepciones, si bien &eacute;stos deber&aacute;n abonar una cuota mensual por cada servicio desagregado";
 choices[22][2] = "Las respuestas a) y b) son correctas";
 choices[22][3] = "Las respuestas a) y b) son falsas";
 answers[22] = 0;
 units[22] = ['121'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6909. ";
 preguntaids[22] = 6909


//  Id pregunta: 7087 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes definiciones describe lo que es Mashup?";
 choices[23]= new Array();
 choices[23][0] = "Aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes para crear un servicio en base a ellas.";
 choices[23][1] = "T&eacute;cnica de desarrollo web que permite modificar la informaci&oacute;n de una p&aacute;gina web, sin tener que recargarla totalmente, agilizando la interacci&oacute;n con el usuario.";
 choices[23][2] = "Conjunto de especificaciones que posibilitan la comunicaci&oacute;n y provisi&oacute;n de servicios entre diferentes aplicaciones v&iacute;a web.";
 choices[23][3] = "Ninguna de las anteriores.";
 answers[23] = 0;
 units[23] = ['125'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7087. ";
 preguntaids[23] = 7087


//  Id pregunta: 6906 Año de creación de pregunta: 2010
 questions[24]= "25)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[24]= new Array();
 choices[24][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[24][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[24][2] = "Las dos respuestas anteriores son correctas";
 choices[24][3] = "Todas las respuestas anteriores son falsas";
 answers[24] = 0;
 units[24] = ['110'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 6906. ";
 preguntaids[24] = 6906


//  Id pregunta: 6881 Año de creación de pregunta: 2010
 questions[25]= "26)  La planificaci&oacute;n de las redes radioel&eacute;ctricas:";
 choices[25]= new Array();
 choices[25][0] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n a la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[25][1] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n al Ayuntamiento correspondiente.";
 choices[25][2] = "La realiza la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de no causar interferencias entre diferentes servicios.";
 choices[25][3] = "Se realiza en comisi&oacute;n paritaria entre el operador y la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de evitar interferencias entre diferentes servicios.";
 answers[25] = 0;
 units[25] = ['121'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 6881. TIC A 2009";
 preguntaids[25] = 6881


//  Id pregunta: 7084 Año de creación de pregunta: 2010
 questions[26]= "27)  Uno de los objetivos perseguidos por la Web 2.0 es:";
 choices[26]= new Array();
 choices[26][0] = "Que las aplicaciones no est&eacute;n disponibles en un solo dispositivo.";
 choices[26][1] = "Que sea el proveedor del servicio el que cree todos los contenidos.";
 choices[26][2] = "Que la comunicaci&oacute;n entre los usuarios este centralizada.";
 choices[26][3] = "Que los sistemas sean fuertemente acoplados.";
 answers[26] = 0;
 units[26] = ['125'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 7084. ";
 preguntaids[26] = 7084


//  Id pregunta: 6822 Año de creación de pregunta: 2010
 questions[27]= "28)  GEANT2 es una red promovida por la UE para:";
 choices[27]= new Array();
 choices[27][0] = "El intercambio de datos entre las Administraciones Europeas";
 choices[27][1] = "La interconexi&oacute;n de la comunidad cient&iacute;fica y universitaria";
 choices[27][2] = "Las dos respuestas anteriores son correctas";
 choices[27][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[27] = 1;
 units[27] = ['114'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 6822. ";
 preguntaids[27] = 6822


//  Id pregunta: 6918 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[28]= new Array();
 choices[28][0] = "GPL";
 choices[28][1] = "GNU LGPL";
 choices[28][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[28][3] = "MGPL";
 answers[28] = 0;
 units[28] = ['103'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 6918. ";
 preguntaids[28] = 6918


//  Id pregunta: 7094 Año de creación de pregunta: 2010
 questions[29]= "30)  Cuando el Regristro de Operadores constate que la notificaci&oacute;n, de un interesado en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado serviciode comunicaciones electr&oacute;nicas, no re&uacute;ne los requisitos, dictar&aacute; resoluci&oacute;n motivada en un plazo m&aacute;ximo de:";
 choices[29]= new Array();
 choices[29][0] = "1 mes";
 choices[29][1] = "10 d&iacute;as";
 choices[29][2] = "15 d&iacute;as";
 choices[29][3] = "2 meses";
 answers[29] = 2;
 units[29] = ['121'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7094. Art&iacute;culo 7 Ley 9/2014";
 preguntaids[29] = 7094


//  Id pregunta: 7251 Año de creación de pregunta: 2010
 questions[30]= "31)  Un ejemplo de ataque al control de acceso es";
 choices[30]= new Array();
 choices[30][0] = "Denegaci&oacute;n de servicio";
 choices[30][1] = "Spoofing";
 choices[30][2] = "Ataques de diccionario";
 choices[30][3] = "Todas las respuestas anteriores son correctas";
 answers[30] = 3;
 units[30] = ['119'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7251. ";
 preguntaids[30] = 7251


//  Id pregunta: 6915 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Sobre qu&eacute; protocolo de la capa de presentaci&oacute;n est&aacute; implementado NFS?";
 choices[31]= new Array();
 choices[31][0] = "ONC RPC";
 choices[31][1] = "XDR";
 choices[31][2] = "NIS";
 choices[31][3] = "XML";
 answers[31] = 1;
 units[31] = ['103'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6915. ";
 preguntaids[31] = 6915


//  Id pregunta: 6919 Año de creación de pregunta: 2010
 questions[32]= "33)  &iquest;Qu&eacute; protocolo de la capa de transporte utiliza TFTP?";
 choices[32]= new Array();
 choices[32][0] = "TCP, al igual que FTP";
 choices[32][1] = "TCP, a diferencia de FTP que usa UDP";
 choices[32][2] = "UDP, a diferencia de FTP que usa TCP";
 choices[32][3] = "UDP, al igual que FTP.";
 answers[32] = 2;
 units[32] = ['103'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 6919. ";
 preguntaids[32] = 6919


//  Id pregunta: 7253 Año de creación de pregunta: 2010
 questions[33]= "34)  La autenticaci&oacute;n fuerte requiere dos de los tres atributos de autenticaci&oacute;n, de entre los que se encuentran";
 choices[33]= new Array();
 choices[33][0] = "Algo que alguien sabe";
 choices[33][1] = "Algo que alguien tiene";
 choices[33][2] = "A y B son correctas";
 choices[33][3] = "A y B son incorrectas";
 answers[33] = 2;
 units[33] = ['119'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7253. ";
 preguntaids[33] = 7253


//  Id pregunta: 7254 Año de creación de pregunta: 2010
 questions[34]= "35)  Deficiencias dentro del sistema Kerberos";
 choices[34]= new Array();
 choices[34][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[34][1] = "Privacidad";
 choices[34][2] = "Integridad";
 choices[34][3] = "Todas las respuestas anteriores son incorrectos";
 answers[34] = 0;
 units[34] = ['120'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 7254. ";
 preguntaids[34] = 7254


//  Id pregunta: 7203 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[35]= new Array();
 choices[35][0] = "Nessus";
 choices[35][1] = "Snort";
 choices[35][2] = "Nagios";
 choices[35][3] = "NetSaint";
 answers[35] = 1;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7203. Castilla La Mancha 2009";
 preguntaids[35] = 7203


//  Id pregunta: 7095 Año de creación de pregunta: 2010
 questions[36]= "37)  El servicio universal definido en la ley 9/2014 deber&aacute; garantizar:";
 choices[36]= new Array();
 choices[36][0] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y se actualice, como m&aacute;ximo, una vez al a&ntilde;o.";
 choices[36][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica, que le ofrezca la posibilidad de efectuar y recibir llamadas telef&oacute;nicas, enviar mensajes cortos de texto (SMS) y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[36][2] = "Que exista una oferta suficiente de equipos terminales de acceso a Internet de banda ancha.";
 choices[36][3] = "Conexi&oacute;n a la red p&uacute;blica de comunicaciones con capacidad de acceso funcional a Internet, que deber&aacute; permitir comunicaciones de datos en banda ancha a una velocidad en sentido descendente de 1 Mbit por segundo";
 answers[36] = 3;
 units[36] = ['121'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7095. Art&iacute;culo 25 Ley 9/2014";
 preguntaids[36] = 7095


//  Id pregunta: 7249 Año de creación de pregunta: 2010
 questions[37]= "38)  Una tarjeta de memoria";
 choices[37]= new Array();
 choices[37][0] = "Puede procesar informaci&oacute;n";
 choices[37][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[37][2] = "Nunca puede procesar informaci&oacute;n";
 choices[37][3] = "Son un tipo de tarjeta inteligente";
 answers[37] = 2;
 units[37] = ['119'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7249. ";
 preguntaids[37] = 7249


//  Id pregunta: 6844 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Qu&eacute; regula la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n)?";
 choices[38]= new Array();
 choices[38][0] = "El acceso a los servicios de telecomunicaci&oacute;n en el interior de los edificios";
 choices[38][1] = "Los servicios de difusi&oacute;n de radio y televisi&oacute;n por cable";
 choices[38][2] = "La consideraci&oacute;n de Internet como servicio universal";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = 0;
 units[38] = ['121'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 6844. ";
 preguntaids[38] = 6844


//  Id pregunta: 7207 Año de creación de pregunta: 2010
 questions[39]= "40)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[39]= new Array();
 choices[39][0] = "Onda de superficie";
 choices[39][1] = "Onda ionosf&eacute;rica";
 choices[39][2] = "Onda espacial";
 choices[39][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[39] = 2;
 units[39] = ['117'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 7207. Castilla La Mancha 2009";
 preguntaids[39] = 7207


//  Id pregunta: 6825 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Qu&eacute; es CMOT?";
 choices[40]= new Array();
 choices[40][0] = "Significa Common Management Interface Protocol Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[40][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT";
 choices[40][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica";
 choices[40][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[40] = 0;
 units[40] = ['114'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 6825. ";
 preguntaids[40] = 6825


//  Id pregunta: 7248 Año de creación de pregunta: 2010
 questions[41]= "42)  En el &aacute;mbito de la biometr&iacute;a";
 choices[41]= new Array();
 choices[41][0] = "Un error Tipo I significa que el sistema ha rechazado a un individuo autorizado";
 choices[41][1] = "Un error Tipo I significa que el sistema ha autorizado a un impostor";
 choices[41][2] = "Un error Tipo II significa que el sistema ha rechazado a un individuo autorizado";
 choices[41][3] = "Un error Tipo III significa que el sistema ha rechazado a un individuo autorizado";
 answers[41] = 0;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7248. ";
 preguntaids[41] = 7248


//  Id pregunta: 6889 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[42]= new Array();
 choices[42][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[42][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[42][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[42][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros.";
 answers[42] = 3;
 units[42] = ['120'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 6889. TIC A 2009";
 preguntaids[42] = 6889


//  Id pregunta: 7171 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[43]= new Array();
 choices[43][0] = "GET";
 choices[43][1] = "HEAD";
 choices[43][2] = "POST";
 choices[43][3] = "SERVICE";
 answers[43] = 1;
 units[43] = ['103'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 7171. Castilla La Mancha 2009";
 preguntaids[43] = 7171


//  Id pregunta: 6942 Año de creación de pregunta: 2010
 questions[44]= "45)  Indique, cu&aacute;l de los siguientes elementos no forma parte de una Intranet:";
 choices[44]= new Array();
 choices[44][0] = "Nomina del personal.";
 choices[44][1] = "Tabl&oacute;n de Anuncios.";
 choices[44][2] = "Motor de b&uacute;squeda de documentaci&oacute;n.";
 choices[44][3] = "Procesador de Textos.";
 answers[44] = 3;
 units[44] = ['113'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6942. ";
 preguntaids[44] = 6942


//  Id pregunta: 6887 Año de creación de pregunta: 2010
 questions[45]= "46)  Un navegador web que tenga que acceder al objeto http://orga.net:5050/imagen.jpg, interrogar&aacute; al servidor local de DNS:";
 choices[45]= new Array();
 choices[45][0] = "Sobre el registro de tipo NS correspondiente al nombre orga.net.";
 choices[45][1] = "Sobre el registro de tipo A correspondiente al nombre orga.net.";
 choices[45][2] = "Sobre el registro de tipo NET correspondiente al nombre orga.net en cualquier puerto.";
 choices[45][3] = "Sobre el registro de tipo SRV correspondiente al nombre orga.net en el puerto 5050.";
 answers[45] = 1;
 units[45] = ['103'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 6887. TIC A 2009";
 preguntaids[45] = 6887


//  Id pregunta: 7201 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[46]= new Array();
 choices[46][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[46][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[46][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[46][3] = "Es un servicio punto a punto";
 answers[46] = 2;
 units[46] = ['117'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7201. Castilla La Mancha 2009";
 preguntaids[46] = 7201


//  Id pregunta: 6940 Año de creación de pregunta: 2010
 questions[47]= "48)  Indique la afirmaci&oacute;n falsa sobre los sistemas de correo electr&oacute;nico SMTP:";
 choices[47]= new Array();
 choices[47][0] = "Es posible establecer DNS blacklist y whitelist en el cliente de correo y/o en el servidor.";
 choices[47][1] = "SMTP permite enviar mensajes codificados seg&uacute;n ASCII de 7 bits y longitud m&aacute;xima de 1000 caracteres.";
 choices[47][2] = "La cabecera MIME-Version debe contener el valor 2.0";
 choices[47][3] = "La cabecera de un mensaje de correo SMTP se especifica en la RFC 822.";
 answers[47] = 2;
 units[47] = ['116'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6940. ";
 preguntaids[47] = 6940


//  Id pregunta: 7089 Año de creación de pregunta: 2010
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un servicio de marcadores sociales en web?";
 choices[48]= new Array();
 choices[48][0] = "Delicious";
 choices[48][1] = "Digg";
 choices[48][2] = "Visconti";
 choices[48][3] = "Reddit";
 answers[48] = 2;
 units[48] = ['125'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7089. ";
 preguntaids[48] = 7089


//  Id pregunta: 6876 Año de creación de pregunta: 2010
 questions[49]= "50)  La competencia para la propuesta de planificaci&oacute;n, gesti&oacute;n y administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, para la comprobaci&oacute;n t&eacute;cnica de emisiones radioel&eacute;ctricas, y para el control y la inspecci&oacute;n de las telecomunicaciones, as&iacute; como la aplicaci&oacute;n del r&eacute;gimen sancionador en la materia, la tiene:";
 choices[49]= new Array();
 choices[49][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[49][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[49][2] = "La Uni&oacute;n Internacional de Telecomunicaciones.";
 choices[49][3] = "Red.es.";
 answers[49] = 0;
 units[49] = ['121'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6876. TIC A 2009";
 preguntaids[49] = 6876


//  Id pregunta: 7202 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[50]= new Array();
 choices[50][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[50][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[50][2] = "Porque mejora el enrutamiento";
 choices[50][3] = "Por analog&iacute;a con Ethernet";
 answers[50] = 1;
 units[50] = ['107'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7202. Castilla La Mancha 2009";
 preguntaids[50] = 7202


//  Id pregunta: 6916 Año de creación de pregunta: 2010
 questions[51]= "52)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[51]= new Array();
 choices[51][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[51][1] = "Dos: NFSv3 y NFSv4.";
 choices[51][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[51][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[51] = 0;
 units[51] = ['103'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 6916. ";
 preguntaids[51] = 6916


//  Id pregunta: 6923 Año de creación de pregunta: 2010
 questions[52]= "53)  Indique cual de las siguientes no es una funci&oacute;n de los gatekeepers:";
 choices[52]= new Array();
 choices[52][0] = "Control del Ancho de Banda.";
 choices[52][1] = "Rechazo de llamadas seg&uacute;n distintos criterios.";
 choices[52][2] = "Control de comunicaci&oacute;n con MCUs o gateways.";
 choices[52][3] = "Comunicaci&oacute;n con redes de conmutaci&oacute;n de circuitos.";
 answers[52] = 3;
 units[52] = ['122'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 6923. ";
 preguntaids[52] = 6923


//  Id pregunta: 6867 Año de creación de pregunta: 2010
 questions[53]= "54)  El teorema de Nyquist establece que el n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal:";
 choices[53]= new Array();
 choices[53][0] = "Puede ser superior al doble de su ancho de banda.";
 choices[53][1] = "No puede ser superior al doble de su ancho de banda.";
 choices[53][2] = "No tiene l&iacute;mite alguno.";
 choices[53][3] = "No puede ser superior al ancho de banda.";
 answers[53] = 1;
 units[53] = ['102'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 6867. TIC A 2009";
 preguntaids[53] = 6867


//  Id pregunta: 7086 Año de creación de pregunta: 2010
 questions[54]= "55)  Identifique cu&aacute;l de los siguientes no es uno de los siete principios de la Web 2.0";
 choices[54]= new Array();
 choices[54][0] = "World Wide Web como plataforma de trabajo";
 choices[54][1] = "Las experiencias enriquecedoras de los usuarios";
 choices[54][2] = "El fin del ciclo de las actualizaciones de versiones del software.";
 choices[54][3] = "El software limitado a un solo dispositivo.";
 answers[54] = 3;
 units[54] = ['125'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 7086. ";
 preguntaids[54] = 7086


//  Id pregunta: 6823 Año de creación de pregunta: 2010
 questions[55]= "56)  Sobre el modelo de gesti&oacute;n TMN (Telecommunication Management Network):";
 choices[55]= new Array();
 choices[55][0] = "Es un modelo de gesti&oacute;n de red orientado a grandes operadores de telecomunicaciones";
 choices[55][1] = "Sus principios est&aacute;n recogidos en la recomendaci&oacute;n M.3010 de la UIT-T";
 choices[55][2] = "Es especialmente apropiado para redes de conmutaci&oacute;n de circuitos";
 choices[55][3] = "Todas las respuestas anteriores son correctas";
 answers[55] = 3;
 units[55] = ['114'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 6823. ";
 preguntaids[55] = 6823


//  Id pregunta: 6921 Año de creación de pregunta: 2010
 questions[56]= "57)  En cuanto a SFTP, se puede afirmar:";
 choices[56]= new Array();
 choices[56][0] = "Se obtiene al ejecutar FTP sobre SSH.";
 choices[56][1] = "Las siglas SFTP significan Simple File Transfer Protocol.";
 choices[56][2] = "El protocolo SFTP en s&iacute; no facilita la autenticaci&oacute;n y la seguridad, sino que espera que el protocolo subyacente asegure a este.";
 choices[56][3] = "Todas las respuestas anteriores son correctas.";
 answers[56] = 2;
 units[56] = ['103'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 6921. ";
 preguntaids[56] = 6921


//  Id pregunta: 7088 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el podcasting es cierta?";
 choices[57]= new Array();
 choices[57][0] = "Podcasting es la distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo) mediante un sistema de sindicaci&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 choices[57][1] = "Habitualmente, no es necesario estar suscrito para descargar un podcast";
 choices[57][2] = "En Internet podemos encontrar todo tipo de podcast de todo tipo de tem&aacute;ticas";
 choices[57][3] = "Todas las anteriores son ciertas";
 answers[57] = 3;
 units[57] = ['125'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7088. ";
 preguntaids[57] = 7088


//  Id pregunta: 7083 Año de creación de pregunta: 2010
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones no se asocia a la Web 2.0?";
 choices[58]= new Array();
 choices[58][0] = "Facebook";
 choices[58][1] = "Wikipedia";
 choices[58][2] = "Flickr";
 choices[58][3] = "Geocities";
 answers[58] = 3;
 units[58] = ['125'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7083. ";
 preguntaids[58] = 7083


//  Id pregunta: 6907 Año de creación de pregunta: 2010
 questions[59]= "60)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[59]= new Array();
 choices[59][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[59][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[59][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[59][3] = "Todas las respuestas anteriores son correctas";
 answers[59] = 3;
 units[59] = ['110'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 6907. ";
 preguntaids[59] = 6907


//  Id pregunta: 7252 Año de creación de pregunta: 2010
 questions[60]= "61)  La informaci&oacute;n puede obtenerse a trav&eacute;s de se&ntilde;ales el&eacute;ctricas en las ondas. Una forma de combatirlo es a trav&eacute;s de";
 choices[60]= new Array();
 choices[60][0] = "Tempest";
 choices[60][1] = "Ruido Blanco";
 choices[60][2] = "Zonas de control";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = 3;
 units[60] = ['119'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7252. ";
 preguntaids[60] = 7252


//  Id pregunta: 6836 Año de creación de pregunta: 2010
 questions[61]= "62)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[61]= new Array();
 choices[61][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[61][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[61][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[61][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[61] = 3;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6836. TIC A 2009";
 preguntaids[61] = 6836


//  Id pregunta: 7196 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de enrutamiento?";
 choices[62]= new Array();
 choices[62][0] = "OSPF";
 choices[62][1] = "RIP";
 choices[62][2] = "BGP";
 choices[62][3] = "RARP";
 answers[62] = 3;
 units[62] = ['102'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7196. Castilla La Mancha 2009";
 preguntaids[62] = 7196


//  Id pregunta: 7198 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;Es compatible el servicio ADSL y el servicio RDSI sobre el mismo par de cobre?";
 choices[63]= new Array();
 choices[63][0] = "S&iacute;";
 choices[63][1] = "No";
 choices[63][2] = "S&oacute;lo si no se ofrece tambi&eacute;n el servicio RTC";
 choices[63][3] = "S&oacute;lo si el cliente no tiene una centralita PBX";
 answers[63] = 0;
 units[63] = ['108'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 7198. Castilla La Mancha 2009. Compatibilidad para ADSL 2+ seg&uacute;n Anexo B";
 preguntaids[63] = 7198


//  Id pregunta: 7082 Año de creación de pregunta: 2010
 questions[64]= "65)  &iquest;Qu&eacute; es un widget?";
 choices[64]= new Array();
 choices[64][0] = "Una aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes relevantes para crear un nuevo servicio en base a ellas, normalmente empleando Servicios Web y APIs p&uacute;blicas.";
 choices[64][1] = "Una red inform&aacute;tica entre pares, sin servidores centralizados, donde se puede compartir informaci&oacute;n de cualquier tipo.";
 choices[64][2] = "Una peque&ntilde;a aplicaci&oacute;n o m&oacute;dulo que realiza una funci&oacute;n concreta, generalmente de tipo visual, dentro de otras aplicaciones o sistemas operativos.";
 choices[64][3] = "Un enlace fijo que no var&iacute;a con el tiempo.";
 answers[64] = 2;
 units[64] = ['125'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 7082. ";
 preguntaids[64] = 7082


//  Id pregunta: 7199 Año de creación de pregunta: 2010
 questions[65]= "66)  Respecto a las mejoras de la TDT (DVB-T), sobre la televisi&oacute;n anal&oacute;gica, se&ntilde;ale la afirmaci&oacute;n INCORRECTA";
 choices[65]= new Array();
 choices[65][0] = "TDT permite un mayor aprovechamiento del espectro";
 choices[65][1] = "TDT permite mayor calidad de imagen";
 choices[65][2] = "TDT permite interactividad";
 choices[65][3] = "TDT permite la visualizaci&oacute;n degradada ante un nivel de se&ntilde;al d&eacute;bil";
 answers[65] = 3;
 units[65] = ['115'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7199. Castilla La Mancha 2009";
 preguntaids[65] = 7199


//  Id pregunta: 7200 Año de creación de pregunta: 2010
 questions[66]= "67)  En relaci&oacute;n con la transmisi&oacute;n en frecuencias radioel&eacute;ctricas, el medio de transmisi&oacute;n influye en la propagaci&oacute;n a trav&eacute;s de un conjunto de fen&oacute;menos f&iacute;sicos &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[66]= new Array();
 choices[66][0] = "Reflexi&oacute;n";
 choices[66][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[66][2] = "Difracci&oacute;n";
 choices[66][3] = "Absorci&oacute;n";
 answers[66] = 1;
 units[66] = ['104'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7200. Castilla La Mancha 2009";
 preguntaids[66] = 7200


//  Id pregunta: 7085 Año de creación de pregunta: 2010
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes formas de presentar informaci&oacute;n se identifica mejor con la definici&oacute;n de folcsonom&iacute;a?";
 choices[67]= new Array();
 choices[67][0] = "&Aacute;rbol";
 choices[67][1] = "Directorio";
 choices[67][2] = "Nube de Tags";
 choices[67][3] = "Cubo";
 answers[67] = 2;
 units[67] = ['125'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 7085. ";
 preguntaids[67] = 7085


//  Id pregunta: 6922 Año de creación de pregunta: 2010
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[68]= new Array();
 choices[68][0] = "Las MCUs permiten sesiones de videoconferencia multipunto con tres o mas localizaciones.";
 choices[68][1] = "Las soluciones de videoconferencia sin MCUs requieren un menor ancho de banda.";
 choices[68][2] = "En las soluciones de videoconferencia con MCU cada equipo env&iacute;a la informaci&oacute;n de audio y video con la MCU y esta la env&iacute;a al destinatario.";
 choices[68][3] = "Las soluciones de videoconferencia sin MCU necesitan equipos con mayor coste.";
 answers[68] = 1;
 units[68] = ['122'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6922. ";
 preguntaids[68] = 6922


//  Id pregunta: 6924 Año de creación de pregunta: 2010
 questions[69]= "70)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[69]= new Array();
 choices[69][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[69][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[69][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[69][3] = "Todas las anteriores son correctas.";
 answers[69] = 3;
 units[69] = ['122'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 6924. ";
 preguntaids[69] = 6924


//  Id pregunta: 6820 Año de creación de pregunta: 2010
 questions[70]= "71)  En el &aacute;mbito del Single Sign-On, &iquest;c&oacute;mo se denomina a la informaci&oacute;n confidencial agrupada (nombre de usuario, contrase&ntilde;a, etc) que se precisa para acceder a las aplicaciones?";
 choices[70]= new Array();
 choices[70][0] = "Credenciales";
 choices[70][1] = "Federaci&oacute;n";
 choices[70][2] = "Cookies";
 choices[70][3] = "Login";
 answers[70] = 0;
 units[70] = ['123'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 6820. ";
 preguntaids[70] = 6820


//  Id pregunta: 6845 Año de creación de pregunta: 2010
 questions[71]= "72)  Seg&uacute;n la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n), todo edificio de nueva construcci&oacute;n debe contar con un proyecto t&eacute;cnico que prevea la conexi&oacute;n a los puntos de conexi&oacute;n de las viviendas o locales de:";
 choices[71]= new Array();
 choices[71][0] = "Las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales";
 choices[71][1] = "El servicio de telefon&iacute;a disponible al p&uacute;blico";
 choices[71][2] = "Los servicios de telecomunicaciones de banda ancha";
 choices[71][3] = "Todas las anteriores son correctas";
 answers[71] = 3;
 units[71] = ['121'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 6845. ";
 preguntaids[71] = 6845


//  Id pregunta: 7246 Año de creación de pregunta: 2010
 questions[72]= "73)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[72]= new Array();
 choices[72][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[72][1] = "MAC usa un sistema de etiquetado";
 choices[72][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[72][3] = "Todas las respuestas anteriores son correctas";
 answers[72] = 3;
 units[72] = ['119'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7246. ";
 preguntaids[72] = 7246


//  Id pregunta: 7204 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Qu&eacute; comandos se usan en POP3 para descargarse y borrar los dos primeros mensajes del buz&oacute;n de correo?";
 choices[73]= new Array();
 choices[73][0] = "RETR 1 DELE 1 RETR 2 DELE 2";
 choices[73][1] = "RETE 1,2 DELE 1,2";
 choices[73][2] = "RETR 1-2 DELE 1-2";
 choices[73][3] = "RETR 1 RETR 2";
 answers[73] = 0;
 units[73] = ['116'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7204. Castilla La Mancha 2009";
 preguntaids[73] = 7204


//  Id pregunta: 7197 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;En qu&eacute; lenguaje est&aacute;n definidos los objetos gestionados en SNMP?";
 choices[74]= new Array();
 choices[74][0] = "C++";
 choices[74][1] = "ASN.1";
 choices[74][2] = "trap";
 choices[74][3] = "Java";
 answers[74] = 1;
 units[74] = ['114'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 7197. Castilla La Mancha 2009";
 preguntaids[74] = 7197


