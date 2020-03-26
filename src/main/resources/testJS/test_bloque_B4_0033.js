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
//  Id pregunta: 9875 Año de creación de pregunta: 2015
 questions[0]= "1)  Single Sign-on...";
 choices[0]= new Array();
 choices[0][0] = "&hellip; es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[0][1] = "&hellip; un conjunto de librer&iacute;as open source para identidades federadas.";
 choices[0][2] = "&hellip; una especificaci&oacute;n de mensajes SAML.";
 choices[0][3] = "&hellip; es una informaci&oacute;n almacenada en el navegador del usuario para su consulta posterior.";
 answers[0] = 0;
 units[0] = ['123'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9875. ";
 preguntaids[0] = 9875


//  Id pregunta: 9755 Año de creación de pregunta: 2014
 questions[1]= "2)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[1]= new Array();
 choices[1][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[1][1] = "25% de hogares conectados a redes NGA";
 choices[1][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[1][3] = "Todas las anteriores";
 answers[1] = 3;
 units[1] = ['121'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9755. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";
 preguntaids[1] = 9755


//  Id pregunta: 10007 Año de creación de pregunta: 2015
 questions[2]= "3)  Se&ntilde;ale qu&eacute; n&uacute;mero de puerto deber&iacute;a usarse si se quiere configurar un servicio para la autenticaci&oacute;n de redes Kerberos:";
 choices[2]= new Array();
 choices[2][0] = "88";
 choices[2][1] = "42";
 choices[2][2] = "74";
 choices[2][3] = "105";
 answers[2] = 0;
 units[2] = ['120'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10007. Examen TIC A2 2014";
 preguntaids[2] = 10007


//  Id pregunta: 9860 Año de creación de pregunta: 2015
 questions[3]= "4)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[3]= new Array();
 choices[3][0] = "La tarjeta SIM contiene la clave del algoritmo de autenticaci&oacute;n con la red GSM.";
 choices[3][1] = "En GSM se utilizan circuitos conmutados extremo a extremo.";
 choices[3][2] = "En la arquitectura de GSM, la interfaz Um se encuentra entre el Subsistema de Estaci&oacute;n Base (BSS) y la Estaci&oacute;n M&oacute;vil (MS).";
 choices[3][3] = "En GSM, la separaci&oacute;n entre portadoras ascendente y descendente es de 45 Mhz.";
 answers[3] = 2;
 units[3] = ['117'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9860. http://seguridadengprs.galeon.com/tema2.htm";
 preguntaids[3] = 9860


//  Id pregunta: 10082 Año de creación de pregunta: 2015
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:";
 choices[4]= new Array();
 choices[4][0] = "SetRequest PDU";
 choices[4][1] = "InformRequest PDU";
 choices[4][2] = "Report PDU";
 choices[4][3] = "GetBackRequest PDU";
 answers[4] = 3;
 units[4] = ['103'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10082. Examen TIC A2 2014";
 preguntaids[4] = 10082


//  Id pregunta: 9865 Año de creación de pregunta: 2015
 questions[5]= "6)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;ndo finaliza el per&iacute;odo por el que se otorgan los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico sin limitaci&oacute;n de n&uacute;mero?";
 choices[5]= new Array();
 choices[5][0] = "El 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[5][1] = "A los 20 a&ntilde;os desde el otorgamiento.";
 choices[5][2] = "El 31 de noviembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[5][3] = "A los cinco a&ntilde;os desde el otorgamiento.";
 answers[5] = 0;
 units[5] = ['121'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9865. ";
 preguntaids[5] = 9865


//  Id pregunta: 10144 Año de creación de pregunta: 2015
 questions[6]= "7)  Para una red wifi, &iquest;c&uacute;al de los siguientes NO es un protocolo de seguridad que le sea aplicable?";
 choices[6]= new Array();
 choices[6][0] = "WPA2.";
 choices[6][1] = "WPA.";
 choices[6][2] = "WAP.";
 choices[6][3] = "WEP.";
 answers[6] = 2;
 units[6] = ['108'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10144. Examen TIC A1 2014";
 preguntaids[6] = 10144


//  Id pregunta: 9876 Año de creación de pregunta: 2015
 questions[7]= "8)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[7]= new Array();
 choices[7][0] = "Con telnet toda la informaci&oacute;n entre cliente y servidor viaja cifrada.";
 choices[7][1] = "X11 dota de una interfaz gr&aacute;fica a los sistemas Microsoft.";
 choices[7][2] = "La infraestructura de escritorio virtual crea un entorno de sistema operativo independiente en el propio escritorio.";
 choices[7][3] = "Citrix es un software comercial para virtualizaci&oacute;n de escritorio.";
 answers[7] = 3;
 units[7] = ['124'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 9876. ";
 preguntaids[7] = 9876


//  Id pregunta: 10145 Año de creación de pregunta: 2015
 questions[8]= "9)  La cuarta generaci&oacute;n de telefon&iacute;a m&oacute;vil (4G) incluye:";
 choices[8]= new Array();
 choices[8][0] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[8][1] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 choices[8][2] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[8][3] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 answers[8] = 0;
 units[8] = ['117', '106'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10145. Examen TIC A1 2014";
 preguntaids[8] = 10145


//  Id pregunta: 10106 Año de creación de pregunta: 2015
 questions[9]= "10)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[9]= new Array();
 choices[9][0] = "16, 24, 32 &oacute; 40";
 choices[9][1] = "6, 12, 24 &oacute; 48";
 choices[9][2] = "4, 8, 16 &oacute; 40";
 choices[9][3] = "8, 16, 32 &oacute; 64";
 answers[9] = 0;
 units[9] = ['122'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10106. Examen TIC A2 2014";
 preguntaids[9] = 10106


//  Id pregunta: 10116 Año de creación de pregunta: 2015
 questions[10]= "11)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[10]= new Array();
 choices[10][0] = "OM2";
 choices[10][1] = "OM3";
 choices[10][2] = "OM4";
 choices[10][3] = "OM5";
 answers[10] = 2;
 units[10] = ['104'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10116. Examen TIC A2 2014";
 preguntaids[10] = 10116


//  Id pregunta: 9757 Año de creación de pregunta: 2014
 questions[11]= "12)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[11]= new Array();
 choices[11][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[11][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[11][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[11][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[11] = 2;
 units[11] = ['121'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9757. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";
 preguntaids[11] = 9757


//  Id pregunta: 10005 Año de creación de pregunta: 2015
 questions[12]= "13)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[12]= new Array();
 choices[12][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[12][1] = "Cuando haya recibido al menos dos ACK.";
 choices[12][2] = "Cuando reciba cualquier ACK.";
 choices[12][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[12] = 2;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10005. Examen TIC A2 2014";
 preguntaids[12] = 10005


//  Id pregunta: 9862 Año de creación de pregunta: 2015
 questions[13]= "14)  La cabecera de autenticaci&oacute;n (AH) de IPSec:";
 choices[13]= new Array();
 choices[13][0] = "Proporciona integridad, no repudio en origen y protecci&oacute;n contra replay.";
 choices[13][1] = "Proporciona confidencialidad, autenticidad de origen e integridad.";
 choices[13][2] = "Crea la asociaci&oacute;n de seguridad.";
 choices[13][3] = "Ninguna de las anteriores.";
 answers[13] = 0;
 units[13] = ['119'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9862. ";
 preguntaids[13] = 9862


//  Id pregunta: 10111 Año de creación de pregunta: 2015
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto al est&aacute;ndar IEEE 802.11ac-2013:";
 choices[14]= new Array();
 choices[14][0] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 2,4 GHz.";
 choices[14][1] = "Ampl&iacute;a ancho de banda de canal a 40 MHz y opera en la banda de 2,4 GHz.";
 choices[14][2] = "Ampl&iacute;a ancho de banda de canal a 80 MHz y opera en la banda de 60 GHz.";
 choices[14][3] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 5 GHz.";
 answers[14] = 3;
 units[14] = ['108'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10111. Examen TIC A2 2014";
 preguntaids[14] = 10111


//  Id pregunta: 10101 Año de creación de pregunta: 2015
 questions[15]= "16)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Screened Subnet.";
 choices[15][1] = "Dual-Homed Host.";
 choices[15][2] = "Router-Homed Host.";
 choices[15][3] = "Screened Host.";
 answers[15] = 3;
 units[15] = ['119'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10101. Examen TIC A2 2014";
 preguntaids[15] = 10101


//  Id pregunta: 9863 Año de creación de pregunta: 2015
 questions[16]= "17)  Se&ntilde;ale cu&aacute;l de estas entidades no pertenece a una arquitectura SAML:";
 choices[16]= new Array();
 choices[16][0] = "AP (Authentication Provider)";
 choices[16][1] = "SP (Service Provider)";
 choices[16][2] = "IdP (Identity Provider)";
 choices[16][3] = "Todos los anteriores son componentes de la arquitectura SAML.";
 answers[16] = 0;
 units[16] = ['119', '120'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 9863. ";
 preguntaids[16] = 9863


//  Id pregunta: 10115 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Qu&eacute; caracter&iacute;sticas de seguridad presenta SNMPv3, tal y como se mencionan en la RFC 3418 (MIB for the SNMP Protocol)?";
 choices[17]= new Array();
 choices[17][0] = "Se recomienda que los implementadores usen el modelo de seguridad basado en usuario y el control de acceso basado en vistas.";
 choices[17][1] = "Se obliga a que los implementadores usen el modelo basado en usuario y el control de acceso basado en vistas.";
 choices[17][2] = "En dicha RFC no se menciona ning&uacute;n elemento de seguridad.";
 choices[17][3] = "En temas de seguridad, s&oacute;lo hace menci&oacute;n al uso obligatorio del algoritmo de encriptaci&oacute;n CBC (Cipher Block Chaining) de DES, conocido tambi&eacute;n por DES-56.";
 answers[17] = 0;
 units[17] = ['114'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 10115. Examen TIC A2 2014";
 preguntaids[17] = 10115


//  Id pregunta: 10083 Año de creación de pregunta: 2015
 questions[18]= "19)  En una red Ethernet 10BASE-T, un paquete de 1000 KBytes se transmite en:";
 choices[18]= new Array();
 choices[18][0] = "0,81 ms";
 choices[18][1] = "8,19 ms";
 choices[18][2] = "819 ms";
 choices[18][3] = "81,9 ms";
 answers[18] = 2;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10083. Examen TIC A2 2014";
 preguntaids[18] = 10083


//  Id pregunta: 10118 Año de creación de pregunta: 2015
 questions[19]= "20)  SAML (Security Assertion Markup Language):";
 choices[19]= new Array();
 choices[19][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[19][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[19][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[19][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[19] = 0;
 units[19] = ['123'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10118. Examen TIC A1 2014";
 preguntaids[19] = 10118


//  Id pregunta: 10089 Año de creación de pregunta: 2015
 questions[20]= "21)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[20]= new Array();
 choices[20][0] = "95.25.30.128/27";
 choices[20][1] = "95.25.30.128/25";
 choices[20][2] = "95.25.46.128/27";
 choices[20][3] = "95.25.46.128/25";
 answers[20] = 2;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 10089. Examen TIC A2 2014";
 preguntaids[20] = 10089


//  Id pregunta: 9861 Año de creación de pregunta: 2015
 questions[21]= "22)  Indique cu&aacute;l de &eacute;stos no es un m&eacute;todo EAP:";
 choices[21]= new Array();
 choices[21][0] = "PEAP";
 choices[21][1] = "EAP-SIM";
 choices[21][2] = "EAP-PAP";
 choices[21][3] = "EAP-TTLS";
 answers[21] = 2;
 units[21] = ['119'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 9861. ";
 preguntaids[21] = 9861


//  Id pregunta: 10087 Año de creación de pregunta: 2015
 questions[22]= "23)  ICMP env&iacute;a mensajes en forma de datagramas que permiten al conjunto del protocolo TCP/IP realizar entre otras las siguientes funciones, se&ntilde;ale la FALSA:";
 choices[22]= new Array();
 choices[22][0] = "Control de flujo.";
 choices[22][1] = "Detecci&oacute;n de destinos inalcanzables.";
 choices[22][2] = "Encriptaci&oacute;n de paquetes.";
 choices[22][3] = "Pruebas de conectividad.";
 answers[22] = 2;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10087. Examen TIC A2 2014";
 preguntaids[22] = 10087


//  Id pregunta: 10054 Año de creación de pregunta: 2015
 questions[23]= "24)  WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el m&eacute;todo PROPPATCH que sirve para:";
 choices[23]= new Array();
 choices[23][0] = "Crear colecciones.";
 choices[23][1] = "Recuperar propiedades, almacenadas como XML, desde un recurso.";
 choices[23][2] = "Cambiar y borrar m&uacute;ltiples propiedades de un recurso en una simple operaci&oacute;n at&oacute;mica.";
 choices[23][3] = "Desbloquear un recurso.";
 answers[23] = 2;
 units[23] = ['103'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10054. Examen TIC A2 2014";
 preguntaids[23] = 10054


//  Id pregunta: 10138 Año de creación de pregunta: 2015
 questions[24]= "25)  En relaci&oacute;n con las soluciones MDM (Mobile Device Management), se&ntilde;ale la respuesta correcta:";
 choices[24]= new Array();
 choices[24][0] = "En ning&uacute;n caso contemplan la tendencia BYOD (Bring Your Own Device) que permite a los usuarios de una organizaci&oacute;n hacer uso de sus dispositivos m&oacute;viles personales para el acceso al entorno, servicios y datos corporativos.";
 choices[24][1] = "Sirven para gestionar la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n no siendo adecuados para el inventario de dispositivos m&oacute;viles.";
 choices[24][2] = "Los fabricantes de las principales plataformas m&oacute;viles no proporcionan soluciones MDM por lo que hay que recurrir siempre a soluciones de terceros.";
 choices[24][3] = "Permiten la monitorizaci&oacute;n autom&aacute;tica de los dispositivos m&oacute;viles y la generaci&oacute;n de alertas al incumplirse la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n.";
 answers[24] = 3;
 units[24] = ['123'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 10138. Examen TIC A1 2014";
 preguntaids[24] = 10138


//  Id pregunta: 10091 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[25]= new Array();
 choices[25][0] = "Loopback.";
 choices[25][1] = "Indefinida (Unspecified).";
 choices[25][2] = "Multicast.";
 choices[25][3] = "No es v&aacute;lida.";
 answers[25] = 0;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10091. Examen TIC A2 2014";
 preguntaids[25] = 10091


//  Id pregunta: 9756 Año de creación de pregunta: 2014
 questions[26]= "27)  Europa 2020...";
 choices[26]= new Array();
 choices[26][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[26][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[26][2] = "A y B son correctas";
 choices[26][3] = "Todas son incorrectas";
 answers[26] = 2;
 units[26] = ['121'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9756. ";
 preguntaids[26] = 9756


//  Id pregunta: 10109 Año de creación de pregunta: 2015
 questions[27]= "28)  Se&ntilde;alar de las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles cu&aacute;l utiliza W-CDMA:";
 choices[27]= new Array();
 choices[27][0] = "GSM";
 choices[27][1] = "EDGE";
 choices[27][2] = "UMTS";
 choices[27][3] = "LTE";
 answers[27] = 2;
 units[27] = ['117'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10109. Examen TIC A2 2014";
 preguntaids[27] = 10109


//  Id pregunta: 9999 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[28]= new Array();
 choices[28][0] = "192.168.30.0";
 choices[28][1] = "192.168.30.128";
 choices[28][2] = "192.168.30.255";
 choices[28][3] = "192.168.30.200";
 answers[28] = 1;
 units[28] = ['109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9999. Examen TIC A2 2014";
 preguntaids[28] = 9999


//  Id pregunta: 10078 Año de creación de pregunta: 2015
 questions[29]= "30)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[29]= new Array();
 choices[29][0] = "IEEE 802.3ab";
 choices[29][1] = "IEEE 802.3at";
 choices[29][2] = "IEEE 802.3ap";
 choices[29][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[29] = 1;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10078. Examen TIC A2 2014";
 preguntaids[29] = 10078


//  Id pregunta: 10162 Año de creación de pregunta: 2015
 questions[30]= "31)  NO es una plataforma de virtualizaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "KVM.";
 choices[30][1] = "XEN.";
 choices[30][2] = "Hyper-V.";
 choices[30][3] = "VSuite.";
 answers[30] = 3;
 units[30] = ['124'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10162. Examen TIC A1 2014";
 preguntaids[30] = 10162


//  Id pregunta: 10110 Año de creación de pregunta: 2015
 questions[31]= "32)  La red de acceso especificada para la tecnolog&iacute;a de comunicaciones m&oacute;viles LTE (Long Term Evolution) y que utiliza la tecnolog&iacute;a OFDMA para la comunicaci&oacute;n con los equipos de los usuarios se llama:";
 choices[31]= new Array();
 choices[31][0] = "E-UTRAN";
 choices[31][1] = "FFTN";
 choices[31][2] = "LMDS";
 choices[31][3] = "WIMAX";
 answers[31] = 0;
 units[31] = ['117', '106'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10110. Examen TIC A2 2014";
 preguntaids[31] = 10110


//  Id pregunta: 10084 Año de creación de pregunta: 2015
 questions[32]= "33)  El protocolo DHCP (Dynamic Host Configuration Protocol) y DHCPv6 (DHCP for IPv6) est&aacute;n definidos en los documentos:";
 choices[32]= new Array();
 choices[32][0] = "RFC 792 y RFC 4361, respectivamente.";
 choices[32][1] = "RFC 826 y RFC 3315, respectivamente.";
 choices[32][2] = "RFC 1034 y RFC 4361, respectivamente.";
 choices[32][3] = "RFC 2131 y RFC 3315, respectivamente.";
 answers[32] = 3;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 10084. Examen TIC A2 2014";
 preguntaids[32] = 10084


//  Id pregunta: 9874 Año de creación de pregunta: 2015
 questions[33]= "34)  Polycom, Radvision y Lifesize son:";
 choices[33]= new Array();
 choices[33][0] = "Sistemas de videoconferencia";
 choices[33][1] = "Sistemas de telefon&iacute;a";
 choices[33][2] = "Conectores RDSI";
 choices[33][3] = "C&oacute;decs de video.";
 answers[33] = 0;
 units[33] = ['122'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9874. ";
 preguntaids[33] = 9874


//  Id pregunta: 10085 Año de creación de pregunta: 2015
 questions[34]= "35)  El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:";
 choices[34]= new Array();
 choices[34][0] = "2121";
 choices[34][1] = "2020";
 choices[34][2] = "980";
 choices[34][3] = "990";
 answers[34] = 3;
 units[34] = ['103'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10085. Examen TIC A2 2014";
 preguntaids[34] = 10085


//  Id pregunta: 10079 Año de creación de pregunta: 2015
 questions[35]= "36)  La direcci&oacute;n can&oacute;nica de un puente o bridge es la direcci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "MAC del interface principal del puente.";
 choices[35][1] = "IP del interface principal del puente.";
 choices[35][2] = "MAC del puente.";
 choices[35][3] = "Del interface de rango num&eacute;rico m&aacute;s alto del puente.";
 answers[35] = 2;
 units[35] = ['102'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10079. Examen TIC A2 2014";
 preguntaids[35] = 10079


//  Id pregunta: 10107 Año de creación de pregunta: 2015
 questions[36]= "37)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[36]= new Array();
 choices[36][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[36][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[36][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[36][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[36] = 2;
 units[36] = ['110'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10107. Examen TIC A2 2014";
 preguntaids[36] = 10107


//  Id pregunta: 10081 Año de creación de pregunta: 2015
 questions[37]= "38)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[37]= new Array();
 choices[37][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[37][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[37][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[37][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[37] = 2;
 units[37] = ['105'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 10081. Examen TIC A2 2014";
 preguntaids[37] = 10081


//  Id pregunta: 9864 Año de creación de pregunta: 2015
 questions[38]= "39)  Indique cu&aacute;l de estos est&aacute;ndares especifica las normas de funcionamiento de la capa f&iacute;sica y de enlace en una WLAN:";
 choices[38]= new Array();
 choices[38][0] = "802.11b";
 choices[38][1] = "802.11g";
 choices[38][2] = "802.11ac";
 choices[38][3] = "Todos los anteriores.";
 answers[38] = 3;
 units[38] = ['108'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9864. ";
 preguntaids[38] = 9864


//  Id pregunta: 10095 Año de creación de pregunta: 2015
 questions[39]= "40)  Diferencia entre el protocolo RIP v1 y RIP v2:";
 choices[39]= new Array();
 choices[39][0] = "RIP v1 es un protocolo de estado del enlace mientras que el RIP v2 es de vector de distancia.";
 choices[39][1] = "RIP v1 encapsula los mensajes en paquetes UDP y RIP v2 en paquetes TCP.";
 choices[39][2] = "RIP v1 no admite subredes y RIP v2 si las admite.";
 choices[39][3] = "RIP v1 es un protocolo de encaminamiento din&aacute;mico de tipo IGP Y RIP v2 es un protocolo de encaminamiento din&aacute;mico de tipo BGP.";
 answers[39] = 2;
 units[39] = ['102'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 10095. Examen TIC A2 2014";
 preguntaids[39] = 10095


//  Id pregunta: 10067 Año de creación de pregunta: 2015
 questions[40]= "41)  El comando ping es el acr&oacute;nimo de:";
 choices[40]= new Array();
 choices[40][0] = "Packet Internet Group.";
 choices[40][1] = "Packet Internet Gangway.";
 choices[40][2] = "Packet Internet Gate.";
 choices[40][3] = "Packet Internet Groper.";
 answers[40] = 3;
 units[40] = ['103'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10067. Examen TIC A2 2014";
 preguntaids[40] = 10067


//  Id pregunta: 9878 Año de creación de pregunta: 2015
 questions[41]= "42)  El t&eacute;rmino Web 2.0 se refiere a:";
 choices[41]= new Array();
 choices[41][0] = "Una generaci&oacute;n de Web basada en comunidades de usuarios que fomenta la colaboraci&oacute;n y el intercambio &aacute;gil de informaci&oacute;n entre los usuarios.";
 choices[41][1] = "Una asociaci&oacute;n de redes sociales.";
 choices[41][2] = "Un concepto original de la web basado en p&aacute;ginas HTML din&aacute;micas.";
 choices[41][3] = "Un conjunto de aplicaciones online del campo de la dom&oacute;tica.";
 answers[41] = 0;
 units[41] = ['125'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9878. ";
 preguntaids[41] = 9878


//  Id pregunta: 10139 Año de creación de pregunta: 2015
 questions[42]= "43)  La Estrategia de Ciberseguridad Nacional fue aprobada por el Consejo Nacional de Seguridad en:";
 choices[42]= new Array();
 choices[42][0] = "Septiembre de 2012.";
 choices[42][1] = "Diciembre de 2013.";
 choices[42][2] = "Enero de 2014.";
 choices[42][3] = "Enero de 2011.";
 answers[42] = 1;
 units[42] = ['119'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 10139. Examen TIC A1 2014";
 preguntaids[42] = 10139


//  Id pregunta: 9859 Año de creación de pregunta: 2015
 questions[43]= "44)  Indique el orden correcto, de mayor a menor, en velocidad de transmisi&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "LTE, UMTS y GPRS.";
 choices[43][1] = "W-CDMA, WiMAX y EDGE.EGDE, UMTS y LTE.";
 choices[43][2] = "HSPA, LTE y GPRS.";
 choices[43][3] = "WiMAX, GPRS y LTE.";
 answers[43] = 0;
 units[43] = ['117', '106'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 9859. ";
 preguntaids[43] = 9859


//  Id pregunta: 10088 Año de creación de pregunta: 2015
 questions[44]= "45)  Se&ntilde;ale cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:";
 choices[44]= new Array();
 choices[44][0] = "132.26.41.128";
 choices[44][1] = "132.26.41.127";
 choices[44][2] = "132.26.41.124";
 choices[44][3] = "132.26.41.55";
 answers[44] = 2;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 10088. Examen TIC A2 2014";
 preguntaids[44] = 10088


//  Id pregunta: 10014 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[45]= new Array();
 choices[45][0] = "Denegaci&oacute;n de servicio.";
 choices[45][1] = "Hombre intermedio.";
 choices[45][2] = "Fuerza Bruta.";
 choices[45][3] = "Ingenier&iacute;a social.";
 answers[45] = 0;
 units[45] = ['119'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 10014. Examen TIC A2 2014";
 preguntaids[45] = 10014


//  Id pregunta: 10108 Año de creación de pregunta: 2015
 questions[46]= "47)  La tecnolog&iacute;a de telefon&iacute;a m&oacute;vil GSM utiliza, entre otras, la siguiente base de datos de usuarios:";
 choices[46]= new Array();
 choices[46][0] = "MSC";
 choices[46][1] = "BSC";
 choices[46][2] = "NSS";
 choices[46][3] = "VLR";
 answers[46] = 3;
 units[46] = ['117'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10108. Examen TIC A2 2014";
 preguntaids[46] = 10108


//  Id pregunta: 9872 Año de creación de pregunta: 2015
 questions[47]= "48)  Indique la afirmaci&oacute;n correcta:";
 choices[47]= new Array();
 choices[47][0] = "Ipv6 posibilita 2256 de direcciones de host diferentes.";
 choices[47][1] = "El encabezado de Ipv6 (sin opciones) es m&aacute;s corto que el de IPv4";
 choices[47][2] = "Con Ipv6 no es necesario el mecanismo de traducci&oacute;n de direcciones de red (NAT)";
 choices[47][3] = "Todas las anteriores son incorrectas.";
 answers[47] = 2;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 9872. ";
 preguntaids[47] = 9872


//  Id pregunta: 9868 Año de creación de pregunta: 2015
 questions[48]= "49)  Se&ntilde;ale aquella opci&oacute;n que no es una WPAN:";
 choices[48]= new Array();
 choices[48][0] = "NFC";
 choices[48][1] = "IRDA";
 choices[48][2] = "Wibree";
 choices[48][3] = "CSMA";
 answers[48] = 3;
 units[48] = ['108'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 9868. ";
 preguntaids[48] = 9868


//  Id pregunta: 10080 Año de creación de pregunta: 2015
 questions[49]= "50)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[49]= new Array();
 choices[49][0] = "Jitter.";
 choices[49][1] = "Delay.";
 choices[49][2] = "Round Trip delay Time.";
 choices[49][3] = "Latencia.";
 answers[49] = 2;
 units[49] = ['102'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 10080. Examen TIC A2 2014";
 preguntaids[49] = 10080


//  Id pregunta: 10130 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[50]= new Array();
 choices[50][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[50][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[50][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[50][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[50] = 1;
 units[50] = ['119'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 10130. Examen TIC A1 2014";
 preguntaids[50] = 10130


//  Id pregunta: 9866 Año de creación de pregunta: 2015
 questions[51]= "52)  Seg&uacute;n la Ley 9/2014, la emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas es una infracci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Muy grave.";
 choices[51][1] = "Grave.";
 choices[51][2] = "Leve";
 choices[51][3] = "No es una infracci&oacute;n.";
 answers[51] = 1;
 units[51] = ['121'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9866. ";
 preguntaids[51] = 9866


//  Id pregunta: 10121 Año de creación de pregunta: 2015
 questions[52]= "53)  Para la instalaci&oacute;n del cableado estructurado de un edificio de oficinas, en el que se cuenta con redes Ethernet y Gigabit Ethernet, se&ntilde;ale la respuesta correcta:";
 choices[52]= new Array();
 choices[52][0] = "Es necesario contar con un switch FC en cada una de las plantas del edificio para la interconexi&oacute;n del cableado UTP/STP.";
 choices[52][1] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 1 y 2.";
 choices[52][2] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 5 y 6.";
 choices[52][3] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 3 y 4.";
 answers[52] = 2;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 10121. Examen TIC A1 2014";
 preguntaids[52] = 10121


//  Id pregunta: 10097 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Qui&eacute;n elabor&oacute; la especificaci&oacute;n Transport Layer Security (TLS)?";
 choices[53]= new Array();
 choices[53][0] = "UIT (Uni&oacute;n Internacional de Telecomunicaciones).";
 choices[53][1] = "IETF (Internet Engineering Task Force).";
 choices[53][2] = "Netscape Communications.";
 choices[53][3] = "ETSI (European Telecommunications Standards Institute).";
 answers[53] = 1;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 10097. Examen TIC A2 2014";
 preguntaids[53] = 10097


//  Id pregunta: 9880 Año de creación de pregunta: 2015
 questions[54]= "55)  Elija la afirmaci&oacute;n correcta sobre el est&aacute;ndar DOCSIS:";
 choices[54]= new Array();
 choices[54][0] = "Se puede emplear para proporcionar acceso a Internet sobre una infraestructura de red HFC.";
 choices[54][1] = "Permite a&ntilde;adir transferencias de datos de alta velocidad a un sistema de televisi&oacute;n por cable (CATV)";
 choices[54][2] = "La versi&oacute;n europea se denomina EuroDOCSIS.";
 choices[54][3] = "Todas las anteriores son correctas.";
 answers[54] = 3;
 units[54] = ['115'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 9880. ";
 preguntaids[54] = 9880


//  Id pregunta: 9788 Año de creación de pregunta: 2015
 questions[55]= "56)  La red SARA:";
 choices[55]= new Array();
 choices[55][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[55][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[55][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[55][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[55] = 3;
 units[55] = ['114'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9788. ";
 preguntaids[55] = 9788


//  Id pregunta: 10090 Año de creación de pregunta: 2015
 questions[56]= "57)  Seg&uacute;n RFC 2460, se&ntilde;ale de las siguientes cabeceras IPv6 cu&aacute;l es una cabecera de extensi&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Cabecera Siguiente.";
 choices[56][1] = "Fragmento.";
 choices[56][2] = "L&iacute;mite de Saltos.";
 choices[56][3] = "Longitud de la Carga &Uacute;til.";
 answers[56] = 1;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 10090. Examen TIC A2 2014";
 preguntaids[56] = 10090


//  Id pregunta: 9877 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Qu&eacute; tipo de m&eacute;todo de acceso al medio es aquel en el que todos los nodos compiten por el uso del medio?";
 choices[57]= new Array();
 choices[57][0] = "Por contienda.";
 choices[57][1] = "Por contenci&oacute;n.";
 choices[57][2] = "Por paso de testigo.";
 choices[57][3] = "Por detecci&oacute;n de portadora.";
 answers[57] = 1;
 units[57] = ['112'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9877. ";
 preguntaids[57] = 9877


//  Id pregunta: 10096 Año de creación de pregunta: 2015
 questions[58]= "59)  El tama&ntilde;o de una cabecera MPLS seg&uacute;n la RFC 3032, es de:";
 choices[58]= new Array();
 choices[58][0] = "20 bits.";
 choices[58][1] = "32 bits.";
 choices[58][2] = "48 bits.";
 choices[58][3] = "64 bits.";
 answers[58] = 1;
 units[58] = ['107'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 10096. Examen TIC A2 2014";
 preguntaids[58] = 10096


//  Id pregunta: 9879 Año de creación de pregunta: 2015
 questions[59]= "60)  En una granja de servidores:";
 choices[59]= new Array();
 choices[59][0] = "Los servidores suelen estar en localizaciones distintas.";
 choices[59][1] = "Los servidores se reparten las tareas que podr&iacute;a ejecutar un solo servidor.";
 choices[59][2] = "Suelen haber equipos de respaldo (backup)";
 choices[59][3] = "Ninguna de las anteriores.";
 answers[59] = 2;
 units[59] = ['113'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9879. ";
 preguntaids[59] = 9879


//  Id pregunta: 9871 Año de creación de pregunta: 2015
 questions[60]= "61)  El teorema de Nyquist establece que:";
 choices[60]= new Array();
 choices[60][0] = "El n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal no puede ser superior al doble de su ancho de banda.";
 choices[60][1] = "La relaci&oacute;n se&ntilde;al a ruido presente en el medio de transmisi&oacute;n no puede ser superior al doble de su ancho de banda.";
 choices[60][2] = "La eficiencia espectral es la relaci&oacute;n entre la velocidad de transmisi&oacute;n y el n&uacute;mero m&aacute;ximo de baudios que pueden transmitirse.";
 choices[60][3] = "Ninguna de las anteriores.";
 answers[60] = 0;
 units[60] = ['104', '106'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 9871. ";
 preguntaids[60] = 9871


//  Id pregunta: 10092 Año de creación de pregunta: 2015
 questions[61]= "62)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta en relaci&oacute;n a la MTU (Maximum Transfer Unit) en redes IP, la MTU del camino es el valor de la:";
 choices[61]= new Array();
 choices[61][0] = "suma de todas las MTU entre el receptor y el emisor.";
 choices[61][1] = "media aritm&eacute;tica de todas las MTU entre el receptor y el emisor.";
 choices[61][2] = "MTU m&aacute;s baja de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 choices[61][3] = "MTU m&aacute;s alta de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 answers[61] = 2;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10092. Examen TIC A2 2014";
 preguntaids[61] = 10092


//  Id pregunta: 10006 Año de creación de pregunta: 2015
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[62]= new Array();
 choices[62][0] = "Request.";
 choices[62][1] = "Invoke.";
 choices[62][2] = "Response.";
 choices[62][3] = "Confirmation.";
 answers[62] = 1;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 10006. Examen TIC A2 2014";
 preguntaids[62] = 10006


//  Id pregunta: 10112 Año de creación de pregunta: 2015
 questions[63]= "64)  En un escenario de movilidad IP &iquest;de qu&eacute; se encarga el Agente Base (Home Agent)?";
 choices[63]= new Array();
 choices[63][0] = "Es el nodo que cambia su punto de conexi&oacute;n a la red sin cambiar su direcci&oacute;n IP o perder las conexiones establecidas.";
 choices[63][1] = "Es el router situado en la red origen del nodo m&oacute;vil que intercepta el tr&aacute;fico destinado al nodo m&oacute;vil y se lo reenv&iacute;a mediante t&uacute;neles IP, realizando adem&aacute;s tareas de localizaci&oacute;n de los nodos m&oacute;viles.";
 choices[63][2] = "Es el router situado en la red visitada que proporciona servicios de encaminamiento a los nodos m&oacute;viles registrados.";
 choices[63][3] = "Es el router situado en la red visitada que facilita una nueva direcci&oacute;n IP al nodo m&oacute;vil.";
 answers[63] = 1;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 10112. Examen TIC A2 2014";
 preguntaids[63] = 10112


//  Id pregunta: 10113 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;En qu&eacute; consiste la liberaci&oacute;n del dividendo digital?";
 choices[64]= new Array();
 choices[64][0] = "Es el proceso por el que se volvieron a repartir las frecuencias del espectro radioel&eacute;ctrico de los 900 MHz, anteriormente asignadas a Movistar, Vodafone y Orange, a aquellos operadores que lo solicitaron, de forma que pudieran ser utilizadas para ofrecer servicios m&oacute;viles LTE/4G.";
 choices[64][1] = "Se denomina as&iacute; al espectro asignado a la emisi&oacute;n de televisi&oacute;n anal&oacute;gica, que va a pasar a ser utilizado por tecnolog&iacute;as LTE/4G.";
 choices[64][2] = "Se denomina as&iacute; al espectro recuperado al hacerse efectiva la transici&oacute;n a la televisi&oacute;n digital terrestre.";
 choices[64][3] = "Es el proceso de reordenaci&oacute;n de algunos canales TDT, para liberar las frecuencias radioel&eacute;ctricas de la banda de 800 MHz que ser&aacute; utilizada por tecnolog&iacute;as m&oacute;viles LTE/4G.";
 answers[64] = 3;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 10113. Examen TIC A2 2014";
 preguntaids[64] = 10113


//  Id pregunta: 10154 Año de creación de pregunta: 2015
 questions[65]= "66)  Para la direcci&oacute;n de loopback, es correcto que:";
 choices[65]= new Array();
 choices[65][0] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::127.0.0.1)";
 choices[65][1] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::1)";
 choices[65][2] = "Se han reservado 256 direcciones en IPv4 (127.0.0.0/24) y 256 direcciones en IPv6 (::127.0.0.1-255)";
 choices[65][3] = "Se han reservado 16.777.214 direcciones en IPv4 (127.0.0.0/8) y una direcci&oacute;n en IPv6 (::1)";
 answers[65] = 3;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 10154. Examen TIC A1 2014";
 preguntaids[65] = 10154


//  Id pregunta: 10160 Año de creación de pregunta: 2015
 questions[66]= "67)  Respecto a RTMP (Real Time Messaging Protocol), se&ntilde;ale la respuesta correcta:";
 choices[66]= new Array();
 choices[66][0] = "Junto con ICMP proporciona las funciones de monitorizaci&oacute;n y control de TCP/IP.";
 choices[66][1] = "Permite la gesti&oacute;n conjunta de mensajer&iacute;a instant&aacute;nea y mensajes cortos GSM.";
 choices[66][2] = "Se emplea para la emisi&oacute;n en tiempo real de streaming de v&iacute;deo.";
 choices[66][3] = "Define el est&aacute;ndar de comunicaciones para los procesadores de sistemas de tiempo real cr&iacute;tico.";
 answers[66] = 2;
 units[66] = ['122'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 10160. Examen TIC A1 2014";
 preguntaids[66] = 10160


//  Id pregunta: 10141 Año de creación de pregunta: 2015
 questions[67]= "68)  Respecto a Bluetooth es correcto que:";
 choices[67]= new Array();
 choices[67][0] = "No utiliza la misma banda de frecuencia que Wi-Fi (802.11), por lo que no se interfieren mutuamente.";
 choices[67][1] = "Con 802.11 AMP puede llegar a 24 Mbps.";
 choices[67][2] = "Debe evitarse en entornos escolares debido a que emite radiaci&oacute;n ionizante.";
 choices[67][3] = "Debe emitirse con un m&iacute;nimo de 10 watios.";
 answers[67] = 1;
 units[67] = ['108'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 10141. Examen TIC A1 2014";
 preguntaids[67] = 10141


//  Id pregunta: 10093 Año de creación de pregunta: 2015
 questions[68]= "69)  En el protocolo RIP Version 2 (Routing Information Protocol), cuyo algoritmo est&aacute; basado en vector distancia, el l&iacute;mite m&aacute;ximo de saltos a partir del cual se considera una ruta como inalcanzable es:";
 choices[68]= new Array();
 choices[68][0] = "15 saltos.";
 choices[68][1] = "9 saltos.";
 choices[68][2] = "16 saltos.";
 choices[68][3] = "7 saltos.";
 answers[68] = 0;
 units[68] = ['102'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 10093. Examen TIC A2 2014";
 preguntaids[68] = 10093


//  Id pregunta: 10104 Año de creación de pregunta: 2015
 questions[69]= "70)  Se&ntilde;ale la respuesta correcta seg&uacute;n lo que dicta el art&iacute;culo 79 de la Ley 9/2014, General de Telecomunicaciones:";
 choices[69]= new Array();
 choices[69][0] = "Por la comisi&oacute;n de infracciones muy graves se impondr&aacute; al infractor multa por importe de hasta 30 millones de euros.";
 choices[69][1] = "Las infracciones muy graves, en funci&oacute;n de sus circunstancias, podr&aacute;n dar lugar a la inhabilitaci&oacute;n hasta de 10 a&ntilde;os del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 choices[69][2] = "Por la comisi&oacute;n de infracciones graves se impondr&aacute; al infractor multa por importe de hasta 5 millones de euros.";
 choices[69][3] = "Por la comisi&oacute;n de infracciones leves se impondr&aacute; al infractor una multa por importe de hasta 50 mil euros.";
 answers[69] = 3;
 units[69] = ['121'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 10104. Examen TIC A2 2014";
 preguntaids[69] = 10104


//  Id pregunta: 9867 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;Cu&aacute;l de estas tecnolog&iacute;as inal&aacute;mbricas puede alcanzar una cobertura de hasta 80 kil&oacute;metros?";
 choices[70]= new Array();
 choices[70][0] = "Zigbee";
 choices[70][1] = "WiMAX";
 choices[70][2] = "Ethernet";
 choices[70][3] = "Wibree";
 answers[70] = 1;
 units[70] = ['108'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9867. ";
 preguntaids[70] = 9867


//  Id pregunta: 9969 Año de creación de pregunta: 2015
 questions[71]= "72)  Seg&uacute;n la gu&iacute;a de comunicaci&oacute;n digital, si un sitio ofrece p&aacute;ginas espec&iacute;ficamente a dispositivos m&oacute;viles. &iquest;A qu&eacute; resoluci&oacute;n es aconsejable optimizar la resoluci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "200 x 250 p&iacute;xeles";
 choices[71][1] = "400 x 450 p&iacute;xeles";
 choices[71][2] = "700 x 950 p&iacute;xeles";
 choices[71][3] = "700 x 1150 p&iacute;xeles";
 answers[71] = 0;
 units[71] = ['125'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9969. ";
 preguntaids[71] = 9969


//  Id pregunta: 10077 Año de creación de pregunta: 2015
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es un producto de virtualizaci&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "Virtual PC.";
 choices[72][1] = "XEN.";
 choices[72][2] = "Atheros.";
 choices[72][3] = "VirtualBox.";
 answers[72] = 2;
 units[72] = ['124'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 10077. Examen TIC A2 2014";
 preguntaids[72] = 10077


//  Id pregunta: 10137 Año de creación de pregunta: 2015
 questions[73]= "74)  Respecto al protocolo Oauth, se&ntilde;ale la respuesta correcta:";
 choices[73]= new Array();
 choices[73][0] = "Es propietario de Twitter, y permite gestionar el acceso a su API por parte de otras aplicaciones.";
 choices[73][1] = "Permite su uso en aplicaciones web y m&oacute;viles, pero no de escritorio.";
 choices[73][2] = "Permite el acceso a la identidad completa del usuario por parte del servidor de aplicaciones.";
 choices[73][3] = "Permite utilizar la cuenta de Facebook para acceder a otras aplicaciones.";
 answers[73] = 3;
 units[73] = ['123'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10137. Examen TIC A1 2014";
 preguntaids[73] = 10137


//  Id pregunta: 10105 Año de creación de pregunta: 2015
 questions[74]= "75)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[74]= new Array();
 choices[74][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[74][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[74][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[74][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[74] = 1;
 units[74] = ['106'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 10105. Examen TIC A2 2014";
 preguntaids[74] = 10105


