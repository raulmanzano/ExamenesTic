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
//  Id pregunta: 7584 Año de creación de pregunta: 2010
 questions[0]= "1)  El protocolo IPv6 Internet Protocol version 6:";
 choices[0]= new Array();
 choices[0][0] = "Tiene direcciones de red de 64 bits de longitud.";
 choices[0][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento (routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header).";
 choices[0][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menos campos. Esto hace que, por lo general, los routers (encaminadores) realicen menos procesamiento sobre los datagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente.";
 choices[0][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes.";
 answers[0] = 2;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7584. Map 2006";
 preguntaids[0] = 7584


//  Id pregunta: 7733 Año de creación de pregunta: 2010
 questions[1]= "2)  &iquest;C&oacute;mo se denominan los servidores que se implementan en un formato de tarjeta/bandeja en la que se integran memoria, procesadores y almacenamiento interno, que pueden ser insertados en chasis/bastidores especiales sobre los que se comparten elementos comunes (habitualmente conexiones el&eacute;ctricas, conexiones de red de datos, fuentes de alimentaci&oacute;n y ventiladores) y que normalmente comparten un sistema de gesti&oacute;n y administraci&oacute;n com&uacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Clusters.";
 choices[1][1] = "Servidores Grid.";
 choices[1][2] = "Servidores Blades.";
 choices[1][3] = "Ninguno de los anteriores.";
 answers[1] = 2;
 units[1] = ['124'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7733. ";
 preguntaids[1] = 7733


//  Id pregunta: 7685 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (Transmission Control Protocol/Internet Protocol)?";
 choices[2]= new Array();
 choices[2][0] = "PGR.";
 choices[2][1] = "SMTP.";
 choices[2][2] = "ICMP.";
 choices[2][3] = "SNMP.";
 answers[2] = 3;
 units[2] = ['114'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 7685. Map 2007";
 preguntaids[2] = 7685


//  Id pregunta: 7764 Año de creación de pregunta: 2010
 questions[3]= "4)  De entre los est&aacute;ndares siguientes, &iquest;cu&aacute;l se corresponde con la tecnolog&iacute;a WLAN?";
 choices[3]= new Array();
 choices[3][0] = "802.11 del IEEE.";
 choices[3][1] = "802.5 del IEEE.";
 choices[3][2] = "802.8 del IEEE.";
 choices[3][3] = "802.3 del IEEE.";
 answers[3] = 0;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 7764. ";
 preguntaids[3] = 7764


//  Id pregunta: 7678 Año de creación de pregunta: 2010
 questions[4]= "5)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en la norma del ETSI:";
 choices[4]= new Array();
 choices[4][0] = "ET 30192.";
 choices[4][1] = "ET 20225.";
 choices[4][2] = "ET 12500.";
 choices[4][3] = "ET 10000.";
 answers[4] = 0;
 units[4] = ['122'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 7678. Map 2007";
 preguntaids[4] = 7678


//  Id pregunta: 7548 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes organismos de normalizaci&oacute;n ha promovido el est&aacute;ndar GSM?";
 choices[5]= new Array();
 choices[5][0] = "ISO (International Standards Organization).";
 choices[5][1] = "IEEE (Institute of Electrical Engineers).";
 choices[5][2] = "ETSI (European Telecommunications Standards Institute).";
 choices[5][3] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n).";
 answers[5] = 2;
 units[5] = ['106'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7548. Map 2005";
 preguntaids[5] = 7548


//  Id pregunta: 7737 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes grupos de trabajo del IEEE dedica su actividad al campo de las redes de &aacute;rea metropolitana?";
 choices[6]= new Array();
 choices[6][0] = "802.3.";
 choices[6][1] = "802.4.";
 choices[6][2] = "802.5.";
 choices[6][3] = "802.6.";
 answers[6] = 3;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7737. ";
 preguntaids[6] = 7737


//  Id pregunta: 7663 Año de creación de pregunta: 2010
 questions[7]= "8)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[7]= new Array();
 choices[7][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad.";
 choices[7][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente.";
 choices[7][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos.";
 choices[7][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad.";
 answers[7] = 3;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7663. Map 2007";
 preguntaids[7] = 7663


//  Id pregunta: 7576 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and Electronics Engineers) 802.11 es cierta?";
 choices[8]= new Array();
 choices[8][0] = "El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-Sequence Spread Spectrum).";
 choices[8][1] = "El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-Hopping Spread Spectrum).";
 choices[8][2] = "El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal FrequencyDivision Multiplexing).";
 choices[8][3] = "El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing).";
 answers[8] = 0;
 units[8] = ['108'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7576. Map 2006";
 preguntaids[8] = 7576


//  Id pregunta: 7603 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[9]= new Array();
 choices[9][0] = "10.172.13.65";
 choices[9][1] = "172.16.223.125";
 choices[9][2] = "172.64.12.29";
 choices[9][3] = "192.168.23.252";
 answers[9] = 2;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7603. Map 2006";
 preguntaids[9] = 7603


//  Id pregunta: 7798 Año de creación de pregunta: 2010
 questions[10]= "11)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[10]= new Array();
 choices[10][0] = "Un determinado virus inform&aacute;tico.";
 choices[10][1] = "Difusi&oacute;n masiva de noticias falsas.";
 choices[10][2] = "Suplantaci&oacute;n fraudulenta que intenta conseguir informaci&oacute;n valiosa.";
 choices[10][3] = "Reenv&iacute;o de mensajes a mucha gente.";
 answers[10] = 2;
 units[10] = ['120'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7798. ";
 preguntaids[10] = 7798


//  Id pregunta: 7567 Año de creación de pregunta: 2010
 questions[11]= "12)  En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos:";
 choices[11]= new Array();
 choices[11][0] = "De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n.";
 choices[11][1] = "De 5 bytes.";
 choices[11][2] = "De 48 bytes.";
 choices[11][3] = "De 53 bytes";
 answers[11] = 3;
 units[11] = ['107'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 7567. Map 2005";
 preguntaids[11] = 7567


//  Id pregunta: 7553 Año de creación de pregunta: 2010
 questions[12]= "13)  El protocolo SSL v.3:";
 choices[12]= new Array();
 choices[12][0] = "Trabaja tanto sobre TCP como sobre UDP.";
 choices[12][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban SSL ten&iacute;an su exportaci&oacute;n desde EE UU limitada a claves de 128 bits.";
 choices[12][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC.";
 choices[12][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman.";
 answers[12] = 3;
 units[12] = ['119'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 7553. Map 2005";
 preguntaids[12] = 7553


//  Id pregunta: 7662 Año de creación de pregunta: 2010
 questions[13]= "14)  El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a la seguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno que permite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a los est&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[13]= new Array();
 choices[13][0] = "El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivos en redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifrado sim&eacute;trico RC4.";
 choices[13][1] = "El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridad del protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x.";
 choices[13][2] = "El protocolo WPA (Wi-fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE.";
 choices[13][3] = "IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redes inal&aacute;mbricaS";
 answers[13] = 3;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7662. Map 2006";
 preguntaids[13] = 7662


//  Id pregunta: 7564 Año de creación de pregunta: 2010
 questions[14]= "15)  La sintaxis de transferencia OSI, los metaficheros gr&aacute;ficos, la sintaxis de procedimiento comercial y los elementos de mensajes y datos son normas:";
 choices[14]= new Array();
 choices[14][0] = "Sobre medios magn&eacute;ticos y &oacute;pticos.";
 choices[14][1] = "Para representaci&oacute;n de informaci&oacute;n y datos intercambiados.";
 choices[14][2] = "Del equipo l&oacute;gico.";
 choices[14][3] = "Sobre juegos de caracteres y codificaci&oacute;n.";
 answers[14] = 1;
 units[14] = ['105'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 7564. Map 2005";
 preguntaids[14] = 7564


//  Id pregunta: 7538 Año de creación de pregunta: 2010
 questions[15]= "16)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[15]= new Array();
 choices[15][0] = "De 50 a 550 MHz.";
 choices[15][1] = "De 5 a 50 MHz.";
 choices[15][2] = "De 550 a 860 MHz.";
 choices[15][3] = "De 5 a 860 MHz.";
 answers[15] = 1;
 units[15] = ['115'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7538. Map 2005";
 preguntaids[15] = 7538


//  Id pregunta: 7793 Año de creación de pregunta: 2010
 questions[16]= "17)  En el &aacute;mbito de las redes de comunicaciones m&oacute;viles, cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[16]= new Array();
 choices[16][0] = "En la red GSM se utiliza el Acceso m&uacute;ltiple por divisi&oacute;n de c&oacute;digo de banda ancha (WCDMA) como tecnolog&iacute;a de acceso";
 choices[16][1] = "En la tecnolog&iacute;a UMTS las llamadas de voz y datos recorren el mismo camino en la red de acceso radio, pero se bifurcan en la red de conmutaci&oacute;n, existiendo una red para las llamadas de voz y otra para las llamadas de datos.";
 choices[16][2] = "El primer paso en la separaci&oacute;n entre voz y datos lo ha marcado la tecnolog&iacute;a TMA o TACS, al introducir conmutaci&oacute;n de paquetes para la transferencia de datos.";
 choices[16][3] = "En la red de acceso de la arquitectura LTE, el controlador de la red radio (RNC) controla los e-NodeB";
 answers[16] = 1;
 units[16] = ['117'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7793. ";
 preguntaids[16] = 7793


//  Id pregunta: 7544 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&laquo;Thick&raquo;)?";
 choices[17]= new Array();
 choices[17][0] = "BNC.";
 choices[17][1] = "N-series.";
 choices[17][2] = "TNC.";
 choices[17][3] = "SMA-series.";
 answers[17] = 1;
 units[17] = ['104'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 7544. Map 2005";
 preguntaids[17] = 7544


//  Id pregunta: 7707 Año de creación de pregunta: 2010
 questions[18]= "19)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece que:";
 choices[18]= new Array();
 choices[18][0] = "El Gobierno crear&aacute; una entidad p&uacute;blica para la gesti&oacute;n del Fondo nacional del servicio universal.";
 choices[18][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal.";
 choices[18][2] = "El Gobierno, mediante Decreto, establecer&aacute; el procedimiento por el que las operadoras gestionar&aacute;n el Fondo nacional del servicio universal.";
 choices[18][3] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal.";
 answers[18] = 1;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 7707. Similar a Map 2007";
 preguntaids[18] = 7707


//  Id pregunta: 7722 Año de creación de pregunta: 2010
 questions[19]= "20)  &iquest;Qu&eacute; se utiliza para codificar la voz que se transmite por la red IP?";
 choices[19]= new Array();
 choices[19][0] = "Retardo.";
 choices[19][1] = "Encriptado.";
 choices[19][2] = "C&oacute;decs.";
 choices[19][3] = "Claves.";
 answers[19] = 2;
 units[19] = ['110'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 7722. Map 2007";
 preguntaids[19] = 7722


//  Id pregunta: 7642 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[20]= new Array();
 choices[20][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red.";
 choices[20][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n de subred complementaria en cada paquete.";
 choices[20][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores).";
 choices[20][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red.";
 answers[20] = 2;
 units[20] = ['112'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7642. Map 2006";
 preguntaids[20] = 7642


//  Id pregunta: 7575 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) y UDP (User Datagram Protocol) es cierta?";
 choices[21]= new Array();
 choices[21][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores.";
 choices[21][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos.";
 choices[21][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP (Internet Protocol), que es un protocolo de red no fiable.";
 choices[21][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite.";
 answers[21] = 3;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 7575. Map 2006";
 preguntaids[21] = 7575


//  Id pregunta: 7547 Año de creación de pregunta: 2010
 questions[22]= "23)  Indique cu&aacute;l de las siguientes respuestas no es correcta en relaci&oacute;n con los est&aacute;ndares 802.11x del IEEE:";
 choices[22]= new Array();
 choices[22][0] = "802.11a utiliza la banda de 5 GHz, 802.11b y 802.11g la de 2,4 GHz.";
 choices[22][1] = "802.11a alcanza velocidades de 54 Mbps, 802.11b y 802.11g de 11 Mbps.";
 choices[22][2] = "802.11i se refiere a mejoras de seguridad.";
 choices[22][3] = "802.11e se refiere a calidad de servicio.";
 answers[22] = 1;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7547. Map 2005";
 preguntaids[22] = 7547


//  Id pregunta: 7716 Año de creación de pregunta: 2010
 questions[23]= "24)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, General de Telecomunicaciones, establece como infracci&oacute;n leve:";
 choices[23]= new Array();
 choices[23][0] = "La realizaci&oacute;n de actividades sin t&iacute;tulo habilitante cuando sea legalmente necesario.";
 choices[23][1] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en la normativa reguladora de las telecomunicaciones, sea necesaria.";
 choices[23][2] = "El incumplimiento de las obligaciones en materia de calidad de servicio.";
 choices[23][3] = "La transferencia de t&iacute;tulos habilitantes o cesi&oacute;n de derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico, sin cumplir con los requisitos establecidos a tal efecto por la normativa de desarrollo de esta Ley.";
 answers[23] = 2;
 units[23] = ['121'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7716. Similar a Map 2007";
 preguntaids[23] = 7716


//  Id pregunta: 7790 Año de creación de pregunta: 2010
 questions[24]= "25)  Con respecto a los sistemas RFID (Radio Frecuency Identification), indique la respuesta incorrecta:";
 choices[24]= new Array();
 choices[24][0] = "Las etiquetas RFID pueden ser activas, semipasivas o pasivas";
 choices[24][1] = "Pueden funcionar en rangos de frecuencia baja (125 KHz), alta (13.56 MHz), ultraelevada (868 MHz) o de microondas (2.45 GHz)";
 choices[24][2] = "Necesitan tener una l&iacute;nea de visi&oacute;n directa para su correcto funcionamiento";
 choices[24][3] = "La tecnolog&iacute;a Near Field Communications (NFC) es un subconjunto de RFID";
 answers[24] = 2;
 units[24] = ['108'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7790. ";
 preguntaids[24] = 7790


//  Id pregunta: 7634 Año de creación de pregunta: 2010
 questions[25]= "26)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la realizaci&oacute;n de emisiones radioel&eacute;ctricas no autorizadas que vulneren o perjudiquen el desarrollo o implantaci&oacute;n de lo establecido en los Planes de utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico o en el Cuadro Nacional de Atribuci&oacute;n de Frecuencias:";
 choices[25]= new Array();
 choices[25][0] = "Es una infracci&oacute;n muy grave.";
 choices[25][1] = "Es una infracci&oacute;n grave.";
 choices[25][2] = "Es una infracci&oacute;n leve.";
 choices[25][3] = "No es una infracci&oacute;n.";
 answers[25] = 0;
 units[25] = ['121'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 7634. Similar a Map 2006";
 preguntaids[25] = 7634


//  Id pregunta: 7539 Año de creación de pregunta: 2010
 questions[26]= "27)  El est&aacute;ndar de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es:";
 choices[26]= new Array();
 choices[26][0] = "X.600.";
 choices[26][1] = "Open LDAP.";
 choices[26][2] = "X.400.";
 choices[26][3] = "X.500.";
 answers[26] = 3;
 units[26] = ['105'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 7539. Map 2005";
 preguntaids[26] = 7539


//  Id pregunta: 7768 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes opciones describe correctamente la estructura de una direcci&oacute;n MAC?";
 choices[27]= new Array();
 choices[27][0] = "C&oacute;digo de red de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits.";
 choices[27][1] = "C&oacute;digo del fabricante de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits.";
 choices[27][2] = "C&oacute;digo del fabricante de 24 bits m&aacute;s c&oacute;digo de serie de 24 bits.";
 choices[27][3] = "Identidad de red de 24 bits m&aacute;s identidad de host de 24 bits.";
 answers[27] = 2;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 7768. ";
 preguntaids[27] = 7768


//  Id pregunta: 7720 Año de creación de pregunta: 2010
 questions[28]= "29)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivel que realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el:";
 choices[28]= new Array();
 choices[28][0] = "Nivel 2.";
 choices[28][1] = "Nivel 3.";
 choices[28][2] = "Nivel 4.";
 choices[28][3] = "Nivel 5.";
 answers[28] = 1;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7720. Map 2007";
 preguntaids[28] = 7720


//  Id pregunta: 7624 Año de creación de pregunta: 2010
 questions[29]= "30)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, define el Servicio Universal en su T&iacute;tulo III, como el conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible. En relaci&oacute;n a su prestaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[29]= new Array();
 choices[29][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia podr&aacute; designar uno o m&aacute;s operadores diferentes para la prestaci&oacute;n de los diversos elementos del servicio universal, de manera que quede cubierta la totalidad del territorio nacional.";
 choices[29][1] = "Corresponde su prestaci&oacute;n, en todo caso, al operador u operadores con poder significativo en aquellos mercados considerados de referencia en relaci&oacute;n al servicio considerado.";
 choices[29][2] = "El sistema de designaci&oacute;n de operadores encargados de garantizar la prestaci&oacute;n de los servicios, prestaciones y ofertas del servicio universal se establecer&aacute; mediante real decreto, y en todo caso, contemplar&aacute; un mecanismo de licitaci&oacute;n p&uacute;blica para dichos servicios, prestaciones y ofertas.";
 choices[29][3] = "Ninguna de las anteriores es cierta.";
 answers[29] = 2;
 units[29] = ['121'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7624. Similar a Map 2006";
 preguntaids[29] = 7624


//  Id pregunta: 7769 Año de creación de pregunta: 2010
 questions[30]= "31)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?";
 choices[30]= new Array();
 choices[30][0] = "Es una red que interconecta las redes Administrativas de los estados miembros y de las instituciones y agencias europeas.";
 choices[30][1] = "Es un instrumento vertebrador e integrador que ofrece a las Administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones.";
 choices[30][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet.";
 choices[30][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC.";
 answers[30] = 2;
 units[30] = ['114'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7769. ";
 preguntaids[30] = 7769


//  Id pregunta: 7761 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[31]= new Array();
 choices[31][0] = "Hub.";
 choices[31][1] = "Puente.";
 choices[31][2] = "NIC (Network Interface Card).";
 choices[31][3] = "Router.";
 answers[31] = 3;
 units[31] = ['104'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 7761. ";
 preguntaids[31] = 7761


//  Id pregunta: 7773 Año de creación de pregunta: 2010
 questions[32]= "33)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &laquo;Domain Name System&raquo;):";
 choices[32]= new Array();
 choices[32][0] = "HINFO &laquo;Host Information&raquo;.";
 choices[32][1] = "SOA &laquo;Start Of Authority&raquo;.";
 choices[32][2] = "TTL &laquo;Time-To-Live&raquo;.";
 choices[32][3] = "WKS &laquo;Well-Know-Services&raquo;.";
 answers[32] = 2;
 units[32] = ['103'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7773. ";
 preguntaids[32] = 7773


//  Id pregunta: 7566 Año de creación de pregunta: 2010
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[33]= new Array();
 choices[33][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps.";
 choices[33][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos.";
 choices[33][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado.";
 choices[33][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos.";
 answers[33] = 0;
 units[33] = ['106'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7566. Map 2005";
 preguntaids[33] = 7566


//  Id pregunta: 7713 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutador multinivel Gigabit Ethernet?";
 choices[34]= new Array();
 choices[34][0] = "Bus compartido.";
 choices[34][1] = "Memoria compartida.";
 choices[34][2] = "I/O compartida.";
 choices[34][3] = "Crossbar.";
 answers[34] = 0;
 units[34] = ['112'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 7713. Map 2007";
 preguntaids[34] = 7713


//  Id pregunta: 7788 Año de creación de pregunta: 2010
 questions[35]= "36)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[35]= new Array();
 choices[35][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas.";
 choices[35][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos.";
 choices[35][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos.";
 choices[35][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web.";
 answers[35] = 2;
 units[35] = ['125'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7788. ";
 preguntaids[35] = 7788


//  Id pregunta: 7614 Año de creación de pregunta: 2010
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[36]= new Array();
 choices[36][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas de tiempo real.";
 choices[36][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y v&iacute;deo interactivos.";
 choices[36][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889.";
 choices[36][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol) con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece este protocolo.";
 answers[36] = 0;
 units[36] = ['110'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7614. Map 2006";
 preguntaids[36] = 7614


//  Id pregunta: 7661 Año de creación de pregunta: 2010
 questions[37]= "38)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo que especifica la forma de encapsular los datos que se van a intercambiar?";
 choices[37]= new Array();
 choices[37][0] = "SSL Handshake.";
 choices[37][1] = "SSL Record.";
 choices[37][2] = "Cipher Secure Layer.";
 choices[37][3] = "Secure Stocker Layer.";
 answers[37] = 1;
 units[37] = ['120'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7661. Map 2006";
 preguntaids[37] = 7661


//  Id pregunta: 7660 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la gesti&oacute;n de redes NO es cierta?";
 choices[38]= new Array();
 choices[38][0] = "La base de informaci&oacute;n de administraci&oacute;n (MIB) tiene una estructura de base de datos y reside en la estaci&oacute;n de monitorizaci&oacute;n.";
 choices[38][1] = "Uno de los modos de monitorizaci&oacute;n de SNMP es el de sondeo, que consiste en la interrupci&oacute;n por parte del agente SNMP a trav&eacute;s del puerto 162 de UDP.";
 choices[38][2] = "SNMPv3 introduce capacidades de seguridad frente a las versiones anteriores, tales como control de acceso, autenticaci&oacute;n y privacidad.";
 choices[38][3] = "RMONv2 permite la monitorizaci&oacute;n de segmentos de redes de &aacute;rea local y el chequeo de trafico a nivel de red y aplicaci&oacute;n.";
 answers[38] = 0;
 units[38] = ['114'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 7660. Similar a Map 2006";
 preguntaids[38] = 7660


//  Id pregunta: 7711 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&laquo;Secure Socket Layer&raquo;) es correcta?";
 choices[39]= new Array();
 choices[39][0] = "Solo proporciona servicios de seguridad para el protocolo HTTP (&laquo;HyperText Transfer Protocol&raquo;).";
 choices[39][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir.";
 choices[39][2] = "El protocolo se implementa entre los niveles de Transporte y de Red.";
 choices[39][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n.";
 answers[39] = 3;
 units[39] = ['119'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 7711. Map 2007";
 preguntaids[39] = 7711


//  Id pregunta: 7673 Año de creación de pregunta: 2010
 questions[40]= "41)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[40]= new Array();
 choices[40][0] = "El sistema de autenticaci&oacute;n &laquo;Kerberos&raquo;, utiliza exclusivamente mecanismos de criptograf&iacute;a asim&eacute;trica.";
 choices[40][1] = "Para la autenticaci&oacute;n &laquo;Kerberos&raquo; utiliza mecanismos basados en criptograf&iacute;a sim&eacute;trica y en criptograf&iacute;a asim&eacute;trica.";
 choices[40][2] = "Para la autenticaci&oacute;n &laquo;Kerberos&raquo; utiliza exclusivamente mecanismos basados en criptograf&iacute;a sim&eacute;trica.";
 choices[40][3] = "Para la autenticaci&oacute;n &laquo;Kerberos&raquo; utiliza mecanismos de identificaci&oacute;n/password y de criptograf&iacute;a sim&eacute;trica.";
 answers[40] = 3;
 units[40] = ['123'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7673. Map 2007";
 preguntaids[40] = 7673


//  Id pregunta: 7651 Año de creación de pregunta: 2010
 questions[41]= "42)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[41]= new Array();
 choices[41][0] = "La preferencia local.";
 choices[41][1] = "El agregado at&oacute;mico.";
 choices[41][2] = "El pr&oacute;ximo salto.";
 choices[41][3] = "El agregador.";
 answers[41] = 2;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7651. Map 2006";
 preguntaids[41] = 7651


//  Id pregunta: 7557 Año de creación de pregunta: 2010
 questions[42]= "43)  Indique la tecnolog&iacute;a de transmisi&oacute;n que utiliza el est&aacute;ndar 802.16a del IEEE:";
 choices[42]= new Array();
 choices[42][0] = "DSSS.";
 choices[42][1] = "FHSS.";
 choices[42][2] = "OFDM.";
 choices[42][3] = "DWDM.";
 answers[42] = 2;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7557. Map 2005";
 preguntaids[42] = 7557


//  Id pregunta: 7695 Año de creación de pregunta: 2010
 questions[43]= "44)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[43]= new Array();
 choices[43][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet.";
 choices[43][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet.";
 choices[43][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree).";
 choices[43][3] = "De la especificaci&oacute;n 1000Base-T.";
 answers[43] = 1;
 units[43] = ['112'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 7695. Map 2007";
 preguntaids[43] = 7695


//  Id pregunta: 7770 Año de creación de pregunta: 2010
 questions[44]= "45)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l se clasifica como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace:";
 choices[44]= new Array();
 choices[44][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol).";
 choices[44][1] = "IGRP (Interior Gateway Routing Protocol).";
 choices[44][2] = "OSPF (Open Shortest Path First).";
 choices[44][3] = "RIPv2 (Routing Information Protocol ver. 2";
 answers[44] = 0;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 7770. ";
 preguntaids[44] = 7770


//  Id pregunta: 7668 Año de creación de pregunta: 2010
 questions[45]= "46)  Con el est&aacute;ndar WLAN 802.11a, &iquest;qu&eacute; velocidad m&aacute;xima se puede alcanzar?";
 choices[45]= new Array();
 choices[45][0] = "11 Mbps en la banda de 2.4 GHz.";
 choices[45][1] = "108 Mbps en la banda de 5 GHz.";
 choices[45][2] = "54 Mbps en la banda de 5 GHz.";
 choices[45][3] = "58 Mbps en la banda de 2.4 GHz.";
 answers[45] = 2;
 units[45] = ['108'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 7668. Map 2007";
 preguntaids[45] = 7668


//  Id pregunta: 7782 Año de creación de pregunta: 2010
 questions[46]= "47)  Respecto al correo electr&oacute;nico, &iquest;qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[46]= new Array();
 choices[46][0] = "IMAP es un protocolo de env&iacute;o de correo.";
 choices[46][1] = "POP es un protocolo de acceso a correo.";
 choices[46][2] = "SMTP es un protocolo de transporte de mensajes.";
 choices[46][3] = "MIME permite acentos en los mensajes de correo.";
 answers[46] = 0;
 units[46] = ['116'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7782. ";
 preguntaids[46] = 7782


//  Id pregunta: 7675 Año de creación de pregunta: 2010
 questions[47]= "48)  El protocolo DHCP (&laquo;Dynamic Host Configuration Protocol&raquo;) permite:";
 choices[47]= new Array();
 choices[47][0] = "Resolver la direcci&oacute;n del nombre de un host.";
 choices[47][1] = "Eliminar paquetes TCP (Transmission Control Protocol).";
 choices[47][2] = "Asignar din&aacute;micamente direcciones IP.";
 choices[47][3] = "Enrutar paquetes IP.";
 answers[47] = 2;
 units[47] = ['112'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 7675. Map 2007";
 preguntaids[47] = 7675


//  Id pregunta: 7643 Año de creación de pregunta: 2010
 questions[48]= "49)  El Servicio Universal contemplado en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, NO garantiza:";
 choices[48]= new Array();
 choices[48][0] = "Que el ciudadano pueda elegir, para la prestaci&oacute;n del servicio universal, a cualquiera de los operadores registrados a nivel nacional.";
 choices[48][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red p&uacute;blica de comunicaciones electr&oacute;nicas desde una ubicaci&oacute;n fija siempre que sus solicitudes se consideren razonables en los t&eacute;rminos que mediante real decreto se determinen y que, incluir&aacute;n, entre otros factores, el coste de su provisi&oacute;n.";
 choices[48][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, que se actualice, como m&iacute;nimo, una vez al a&ntilde;o.";
 choices[48][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[48] = 0;
 units[48] = ['121'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7643. Similar a Map 2006";
 preguntaids[48] = 7643


//  Id pregunta: 7613 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 - Internet Control Message Protocol version 4?";
 choices[49]= new Array();
 choices[49][0] = "32";
 choices[49][1] = "64";
 choices[49][2] = "128";
 choices[49][3] = "256";
 answers[49] = 1;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 7613. Map 2006";
 preguntaids[49] = 7613


//  Id pregunta: 7794 Año de creación de pregunta: 2010
 questions[50]= "51)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[50]= new Array();
 choices[50][0] = "GPRS.";
 choices[50][1] = "UMTS.";
 choices[50][2] = "GSM.";
 choices[50][3] = "DECT.";
 answers[50] = 1;
 units[50] = ['117'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7794. ";
 preguntaids[50] = 7794


//  Id pregunta: 7595 Año de creación de pregunta: 2010
 questions[51]= "52)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN (Gateway GPRS Support Node)?";
 choices[51]= new Array();
 choices[51][0] = "La gesti&oacute;n de la movilidad.";
 choices[51][1] = "El cifrado y autenticaci&oacute;n.";
 choices[51][2] = "La conexi&oacute;n al HLR (Home Location Register).";
 choices[51][3] = "La conexi&oacute;n a los ISP (Internet Service Provider).";
 answers[51] = 3;
 units[51] = ['106'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7595. Map 2006";
 preguntaids[51] = 7595


//  Id pregunta: 7757 Año de creación de pregunta: 2010
 questions[52]= "53)  Con respecto a la tecnolog&iacute;a conocida como &laquo;SONET&raquo; (terminolog&iacute;a de EE.UU.) o SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[52]= new Array();
 choices[52][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplo de una se&ntilde;al base de 155 Mbps denominada STM.";
 choices[52][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia.";
 choices[52][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red.";
 choices[52][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace o nodo de la red.";
 answers[52] = 1;
 units[52] = ['107'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 7757. ";
 preguntaids[52] = 7757


//  Id pregunta: 7604 Año de creación de pregunta: 2010
 questions[53]= "54)  Una red ATM (Asynchronous Transfer Mode):";
 choices[53]= new Array();
 choices[53][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes.";
 choices[53][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real.";
 choices[53][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuar funciones de encaminamiento de las c&eacute;lulas.";
 choices[53][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas.";
 answers[53] = 2;
 units[53] = ['107'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7604. Map 2006";
 preguntaids[53] = 7604


//  Id pregunta: 7704 Año de creación de pregunta: 2010
 questions[54]= "55)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas que circulan por la red?";
 choices[54]= new Array();
 choices[54][0] = "1522 bytes.";
 choices[54][1] = "1500 bytes.";
 choices[54][2] = "1496 bytes.";
 choices[54][3] = "1518 bytes.";
 answers[54] = 0;
 units[54] = ['112'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 7704. Map 2007";
 preguntaids[54] = 7704


//  Id pregunta: 7586 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[55]= new Array();
 choices[55][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (International Telecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el par telef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logra mediante el empleo de unos filtros denominados &laquo;splitters&raquo;.";
 choices[55][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrierless Amplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos de estandarizaci&oacute;n se decantaron por esta &uacute;ltima.";
 choices[55][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5, que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access).";
 choices[55][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &laquo;G.Lite&raquo; o &laquo;ADSL Lite&raquo; es una variante de ADSL que proporciona menor caudal, pero tiene la ventaja de no requerir splitters.";
 answers[55] = 2;
 units[55] = ['106'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7586. Map 2006";
 preguntaids[55] = 7586


//  Id pregunta: 7588 Año de creación de pregunta: 2010
 questions[56]= "57)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[56]= new Array();
 choices[56][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization).";
 choices[56][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation).";
 choices[56][2] = "SNA (System Network Architecture), de IBM.";
 choices[56][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union-Telecommunications).";
 answers[56] = 3;
 units[56] = ['105'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 7588. Map 2006";
 preguntaids[56] = 7588


//  Id pregunta: 7771 Año de creación de pregunta: 2010
 questions[57]= "58)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes wireless de banda ancha (MBWA):";
 choices[57]= new Array();
 choices[57][0] = "802.3.";
 choices[57][1] = "802.11.";
 choices[57][2] = "802.15.";
 choices[57][3] = "802.20.";
 answers[57] = 3;
 units[57] = ['106'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7771. ";
 preguntaids[57] = 7771


//  Id pregunta: 7800 Año de creación de pregunta: 2010
 questions[58]= "59)  &iquest;Cu&aacute;l es la topolog&iacute;a de red implementada en la arquitectura Bluetooth Low Energy (BLE)?";
 choices[58]= new Array();
 choices[58][0] = "Piconet";
 choices[58][1] = "Scatternet";
 choices[58][2] = "Star-Bus";
 choices[58][3] = "Full-Mesh";
 answers[58] = 2;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7800. ";
 preguntaids[58] = 7800


//  Id pregunta: 7633 Año de creación de pregunta: 2010
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NO es cierta?";
 choices[59]= new Array();
 choices[59][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks).";
 choices[59][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada uno de sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas por dicha estaci&oacute;n.";
 choices[59][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast.";
 choices[59][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os.";
 answers[59] = 2;
 units[59] = ['104'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 7633. Map 2006";
 preguntaids[59] = 7633


//  Id pregunta: 7623 Año de creación de pregunta: 2010
 questions[60]= "61)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientes protocolos:";
 choices[60]= new Array();
 choices[60][0] = "ARP (Address Resolution Protocol).";
 choices[60][1] = "RARP (Reverse Address Resolution Protocol).";
 choices[60][2] = "BOOTP (Bootstrap Protocol).";
 choices[60][3] = "IGMP (Internet Group Management Protocol).";
 answers[60] = 2;
 units[60] = ['112'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7623. Map 2006";
 preguntaids[60] = 7623


//  Id pregunta: 7659 Año de creación de pregunta: 2010
 questions[61]= "62)  Dentro de un sistema de cableado estructurado el denominado &laquo;subsistema horizontal&raquo; es aquel que:";
 choices[61]= new Array();
 choices[61][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta.";
 choices[61][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta.";
 choices[61][2] = "Interconecta edificios en el entorno de un campus.";
 choices[61][3] = "Interconecta a todo el cableado de un edificio.";
 answers[61] = 1;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 7659. Map 2006";
 preguntaids[61] = 7659


//  Id pregunta: 7693 Año de creación de pregunta: 2010
 questions[62]= "63)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el servidor en el modo PASV del Protocolo de Transferencia de Ficheros FTP (&laquo;File Transfer Protocol&raquo;):";
 choices[62]= new Array();
 choices[62][0] = "El puerto 20.";
 choices[62][1] = "El puerto 21.";
 choices[62][2] = "Un puerto por encima de 1023 elegido al azar por el cliente.";
 choices[62][3] = "Un puerto por encima de 1023 elegido al azar por el servidor.";
 answers[62] = 3;
 units[62] = ['103'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7693. Similar a Map 2007";
 preguntaids[62] = 7693


//  Id pregunta: 7774 Año de creación de pregunta: 2010
 questions[63]= "64)  Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo de Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &laquo;servidor NAT&raquo;?";
 choices[63]= new Array();
 choices[63][0] = "Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n.";
 choices[63][1] = "Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[63][2] = "Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5.";
 choices[63][3] = "Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse.";
 answers[63] = 1;
 units[63] = ['102'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 7774. ";
 preguntaids[63] = 7774


//  Id pregunta: 7703 Año de creación de pregunta: 2010
 questions[64]= "65)  En relaci&oacute;n con las ventanas de cr&eacute;dito (de recepci&oacute;n y de env&iacute;o) que utiliza el protocolo TCP para el control de flujo, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[64]= new Array();
 choices[64][0] = "Permiten que el emisor no tenga que esperar un ACK (acknowledge) para cada segmento de datos transmitido.";
 choices[64][1] = "El tama&ntilde;o del b&uacute;fer de estas ventanas est&aacute; limitado a 4096 bytes.";
 choices[64][2] = "Impiden que se reenv&iacute;en paquetes pasado un time-out.";
 choices[64][3] = "Hace que el canal de comunicaci&oacute;n est&eacute; m&aacute;s tiempo ocupado para transmitir la misma informaci&oacute;n.";
 answers[64] = 0;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 7703. Map 2007";
 preguntaids[64] = 7703


//  Id pregunta: 7683 Año de creación de pregunta: 2010
 questions[65]= "66)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, &iquest;cada cu&aacute;nto tiempo, como m&iacute;nimo, la La Comisi&oacute;n Nacional de los Mercados y la Competencia llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea.?";
 choices[65]= new Array();
 choices[65][0] = "Cada a&ntilde;o.";
 choices[65][1] = "Cada dos a&ntilde;os.";
 choices[65][2] = "Cada cuatro a&ntilde;os.";
 choices[65][3] = "Cada seis a&ntilde;os.";
 answers[65] = 1;
 units[65] = ['121'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7683. Similar a Map 2007";
 preguntaids[65] = 7683


//  Id pregunta: 7751 Año de creación de pregunta: 2010
 questions[66]= "67)  En la estructura de la trama del protocolo HDLC (&laquo;High level Data Link Control&raquo;) el n&uacute;mero de bits del delimitador del comienzo de la trama es:";
 choices[66]= new Array();
 choices[66][0] = "Variable.";
 choices[66][1] = "8";
 choices[66][2] = "16";
 choices[66][3] = "32";
 answers[66] = 1;
 units[66] = ['105'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7751. ";
 preguntaids[66] = 7751


//  Id pregunta: 7537 Año de creación de pregunta: 2010
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para el protocolo TCP/IP?";
 choices[67]= new Array();
 choices[67][0] = "IP no proporciona control de errores para datos, ni sumas de comprobaci&oacute;n de cabeceras.";
 choices[67][1] = "Si se pierde o da&ntilde;a alg&uacute;n datagrama durante la transmisi&oacute;n, TCP lo detecta y lo vuelve a retransmitir.";
 choices[67][2] = "UDP garantiza la entrega de los datagramas y evita las duplicaciones.";
 choices[67][3] = "ICMP garantiza la entrega fiable de un paquete IP.";
 answers[67] = 1;
 units[67] = ['102'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 7537. Map 2005";
 preguntaids[67] = 7537


//  Id pregunta: 7786 Año de creación de pregunta: 2010
 questions[68]= "69)  En referencia a WiMAX, seleccione cu&aacute;l de las siguientes opciones se corresponde con WiMAX m&oacute;vil:";
 choices[68]= new Array();
 choices[68][0] = "802.16i.";
 choices[68][1] = "802.16e.";
 choices[68][2] = "802.16f.";
 choices[68][3] = "802.16n.";
 answers[68] = 1;
 units[68] = ['106'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 7786. ";
 preguntaids[68] = 7786


//  Id pregunta: 7585 Año de creación de pregunta: 2010
 questions[69]= "70)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y se aplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itinerancia de clientes es el:";
 choices[69]= new Array();
 choices[69][0] = "802.11e.";
 choices[69][1] = "802.11f.";
 choices[69][2] = "802.11h.";
 choices[69][3] = "802.11i.";
 answers[69] = 1;
 units[69] = ['108'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7585. Map 2006";
 preguntaids[69] = 7585


//  Id pregunta: 7802 Año de creación de pregunta: 2010
 questions[70]= "71)  &iquest;Qu&eacute; servicios garantiza el Servicio Universal contemplado por la Ley 9/2014 General de Telecomunicaciones a todos los usuarios que lo soliciten, independientemente de su localizaci&oacute;n geogr&aacute;fica, con una calidad especificada y a un precio asequible?";
 choices[70]= new Array();
 choices[70][0] = "Suministro de la conexi&oacute;n a la red p&uacute;blica de comunicaciones electr&oacute;nicas desde una ubicaci&oacute;n fija con capacidad de banda ancha a 1 Mbps.";
 choices[70][1] = "Prestaci&oacute;n del servicio de telefon&iacute;a de pago con monedas o tarjetas a trav&eacute;s de los terminales ubicados en la v&iacute;a p&uacute;blica (cabinas telef&oacute;nicas).";
 choices[70][2] = "Elaboraci&oacute;n y entrega de la gu&iacute;a de n&uacute;meros de abonado.";
 choices[70][3] = "Todas las anteriores.";
 answers[70] = 3;
 units[70] = ['121'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 7802. ";
 preguntaids[70] = 7802


//  Id pregunta: 7688 Año de creación de pregunta: 2010
 questions[71]= "72)  ATM (&laquo;Asynchronous Transfer Mode&raquo;) emplea celdas:";
 choices[71]= new Array();
 choices[71][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n.";
 choices[71][1] = "De tama&ntilde;o fijo: 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n.";
 choices[71][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n.";
 choices[71][3] = "De tama&ntilde;o variable: 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n.";
 answers[71] = 1;
 units[71] = ['107'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 7688. Map 2007";
 preguntaids[71] = 7688


//  Id pregunta: 7698 Año de creación de pregunta: 2010
 questions[72]= "73)  Bluetooth es un enlace radio de corto alcance sin cables con un radio de:";
 choices[72]= new Array();
 choices[72][0] = "Hasta 5 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz.";
 choices[72][1] = "Hasta 10 metros y un rango de frecuencia de 2,202 GHz a 2,404 GHz.";
 choices[72][2] = "Hasta 10 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz.";
 choices[72][3] = "Hasta 8 metros y un rango de frecuencia de 1,404 GHz a 2,480 GHz.";
 answers[72] = 2;
 units[72] = ['108'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7698. Map 2007";
 preguntaids[72] = 7698


//  Id pregunta: 7594 Año de creación de pregunta: 2010
 questions[73]= "74)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29. Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a la configuraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignable dentro de dicho rango?";
 choices[73]= new Array();
 choices[73][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.25.";
 choices[73][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada: 192.168.20.1.";
 choices[73][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.25.";
 choices[73][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.1.";
 answers[73] = 2;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7594. Map 2006";
 preguntaids[73] = 7594


//  Id pregunta: 7667 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?";
 choices[74]= new Array();
 choices[74][0] = "ADSL.";
 choices[74][1] = "Grupos noticias (news).";
 choices[74][2] = "FTP.";
 choices[74][3] = "IRC.";
 answers[74] = 0;
 units[74] = ['103'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 7667. Map 2007";
 preguntaids[74] = 7667


