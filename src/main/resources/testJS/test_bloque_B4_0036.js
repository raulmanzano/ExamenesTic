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
//  Id pregunta: 10863 Año de creación de pregunta: 2015
 questions[0]= "1)  Se&ntilde;ale la tecnolog&iacute;a que no hace uso de MIMO:";
 choices[0]= new Array();
 choices[0][0] = "HSPA+";
 choices[0][1] = "WiFi";
 choices[0][2] = "WiMAX";
 choices[0][3] = "Las 3 hacen uso de MIMO";
 answers[0] = 3;
 units[0] = ['108'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10863. ";
 preguntaids[0] = 10863


//  Id pregunta: 10908 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Qu&eacute; comando se puede utilizar en un PC con S.O. Windows para obtener la configuraci&oacute;n IP de ese equipo?";
 choices[1]= new Array();
 choices[1][0] = "ifconfig -a";
 choices[1][1] = "netstat -rn";
 choices[1][2] = "iptables -L";
 choices[1][3] = "ipconfig";
 answers[1] = 3;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10908. ";
 preguntaids[1] = 10908


//  Id pregunta: 10887 Año de creación de pregunta: 2015
 questions[2]= "3)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[2]= new Array();
 choices[2][0] = "Punto a punto";
 choices[2][1] = "Broadcast multi-acceso";
 choices[2][2] = "No broadcast multi-acceso";
 choices[2][3] = "Broadcast punto a multipunto";
 answers[2] = 2;
 units[2] = ['114'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10887. ";
 preguntaids[2] = 10887


//  Id pregunta: 10914 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[3]= new Array();
 choices[3][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[3][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[3][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[3][3] = "Se trata de una suite propietaria";
 answers[3] = 1;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10914. ";
 preguntaids[3] = 10914


//  Id pregunta: 10930 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Qu&eacute; algoritmo utiliza el cifrado por bloques?";
 choices[4]= new Array();
 choices[4][0] = "ElGamal";
 choices[4][1] = "DSA";
 choices[4][2] = "RSA";
 choices[4][3] = "DES";
 answers[4] = 3;
 units[4] = ['119'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10930. ";
 preguntaids[4] = 10930


//  Id pregunta: 10910 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;Qu&eacute; mensaje DHCP se utiliza para localizar cualquier servidor DHCP disponible en la red?";
 choices[5]= new Array();
 choices[5][0] = "DHCPREQUEST";
 choices[5][1] = "DHCPACK";
 choices[5][2] = "DHCPDISCOVER";
 choices[5][3] = "DHCPOFFER";
 answers[5] = 2;
 units[5] = ['102'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 10910. ";
 preguntaids[5] = 10910


//  Id pregunta: 10877 Año de creación de pregunta: 2015
 questions[6]= "7)  Un cable RJ-45 cruzado se forma:";
 choices[6]= new Array();
 choices[6][0] = "conectando los pines 1 al 3 y el 2 al 6";
 choices[6][1] = "conectando los pines 1 al 8 el y el 2 al 7";
 choices[6][2] = "conectando los pines 1 al 3 y el 2 al 4";
 choices[6][3] = "conectando el pin 1 al pin 1 y el pin 2 al pin 2";
 answers[6] = 0;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10877. ";
 preguntaids[6] = 10877


//  Id pregunta: 10873 Año de creación de pregunta: 2015
 questions[7]= "8)  La capa de Red del modelo OSI equivale a la capa siguiente del modelo TCP:";
 choices[7]= new Array();
 choices[7][0] = "Internet";
 choices[7][1] = "Application";
 choices[7][2] = "Red";
 choices[7][3] = "Data Link";
 answers[7] = 0;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10873. ";
 preguntaids[7] = 10873


//  Id pregunta: 10885 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l no es una caracteristica de PPP?";
 choices[8]= new Array();
 choices[8][0] = "Se puede usar en circuitos anal&oacute;gicos";
 choices[8][1] = "solo soporta IP";
 choices[8][2] = "es capaz de encapsular varios protocolos";
 choices[8][3] = "Proporciona correcci&oacute;n de errores";
 answers[8] = 1;
 units[8] = ['102'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10885. ";
 preguntaids[8] = 10885


//  Id pregunta: 10944 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes dificultades no tiene que hacer frente el par telef&oacute;nico para la transmisi&oacute;n de alta velocidad de datos?";
 choices[9]= new Array();
 choices[9][0] = "Ruido impulsivo";
 choices[9][1] = "Ruido de fondo";
 choices[9][2] = "Diafon&iacute;a";
 choices[9][3] = "Medio costoso";
 answers[9] = 3;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10944. ";
 preguntaids[9] = 10944


//  Id pregunta: 10909 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;Qu&eacute; metodo de acceso es utilizado para establecer conexiones remotas de linea de comandos, manteniendo el ID de usuario, la contrase&ntilde;a y los contenidos de la sesi&oacute;n de manera privada?";
 choices[10]= new Array();
 choices[10][0] = "Telnet";
 choices[10][1] = "Consola";
 choices[10][2] = "Puerto auxiliar";
 choices[10][3] = "SSH";
 answers[10] = 3;
 units[10] = ['119'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10909. ";
 preguntaids[10] = 10909


//  Id pregunta: 10889 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Qu&eacute; caracter&iacute;stica no se a&ntilde;ade en SNMPv3 respecto a SNMPv2?";
 choices[11]= new Array();
 choices[11][0] = "Autenticaci&oacute;n";
 choices[11][1] = "Cifrado";
 choices[11][2] = "Deteccion de errores";
 choices[11][3] = "Integridad del mensaje";
 answers[11] = 2;
 units[11] = ['114'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 10889. ";
 preguntaids[11] = 10889


//  Id pregunta: 10855 Año de creación de pregunta: 2015
 questions[12]= "13)  XACML es:";
 choices[12]= new Array();
 choices[12][0] = "Un est&aacute;ndar de firma de documentos.";
 choices[12][1] = "Un est&aacute;ndar que define un esquema XML para el intercambio de autorizaci&oacute;n y autenticaci&oacute;n.";
 choices[12][2] = "Un est&aacute;ndar basado en la especificaci&oacute;n XML para definir pol&iacute;ticas de control de acceso.";
 choices[12][3] = "Especifica un proceso para cifrar datos y representar esa informaci&oacute;n cifrada en XML.";
 answers[12] = 2;
 units[12] = ['119'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10855. ";
 preguntaids[12] = 10855


//  Id pregunta: 10942 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[13]= new Array();
 choices[13][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[13][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[13][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[13][3] = "Ninguna es correcta";
 answers[13] = 2;
 units[13] = ['104'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10942. ";
 preguntaids[13] = 10942


//  Id pregunta: 10923 Año de creación de pregunta: 2015
 questions[14]= "15)  El rango de direcciones 10.0.0.0/8";
 choices[14]= new Array();
 choices[14][0] = "Es un rango de direcciones de clase C.";
 choices[14][1] = "Es un rango de direcci&oacute;n p&uacute;blicas.";
 choices[14][2] = "Es un rango de direcciones privadas.";
 choices[14][3] = "Es un rango de direcciones &ldquo;multicast&rdquo;.";
 answers[14] = 2;
 units[14] = ['105'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10923. ";
 preguntaids[14] = 10923


//  Id pregunta: 10912 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Qu&eacute; protocolo soporta la transmisi&oacute;n de informaci&oacute;n en tiempo real?";
 choices[15]= new Array();
 choices[15][0] = "UDP";
 choices[15][1] = "RTP";
 choices[15][2] = "SMTP";
 choices[15][3] = "NTP";
 answers[15] = 1;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10912. ";
 preguntaids[15] = 10912


//  Id pregunta: 10913 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP?";
 choices[16]= new Array();
 choices[16][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos";
 choices[16][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[16][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[16][3] = "Aumentando el espesor de los hilos de cobre";
 answers[16] = 0;
 units[16] = ['104'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 10913. ";
 preguntaids[16] = 10913


//  Id pregunta: 10905 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Qu&eacute; sucede si se pierde el primer paquete de una transferencia TFTP?";
 choices[17]= new Array();
 choices[17][0] = "La aplicaci&oacute;n TFTP volver&aacute; a intentar la solicitud si no se recibe una respuesta.";
 choices[17][1] = "El router del siguiente salto o la puerta de enlace predeterminada proporcionar&aacute;n una respuesta con un c&oacute;digo de error.";
 choices[17][2] = "El cliente esperar&aacute; indefinidamente la respuesta.";
 choices[17][3] = "La capa de transporte volver&aacute; a intentar la consulta si no se recibe una respuesta.";
 answers[17] = 0;
 units[17] = ['120'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 10905. ";
 preguntaids[17] = 10905


//  Id pregunta: 10886 Año de creación de pregunta: 2015
 questions[18]= "19)  Una WAN ATM est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[18]= new Array();
 choices[18][0] = "Punto a punto";
 choices[18][1] = "Broadcast multi-acceso";
 choices[18][2] = "No broadcast multi-acceso";
 choices[18][3] = "Broadcast punto a multipunto";
 answers[18] = 2;
 units[18] = ['107'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10886. ";
 preguntaids[18] = 10886


//  Id pregunta: 10884 Año de creación de pregunta: 2015
 questions[19]= "20)  Un ABR (Router frontera de &aacute;rea) de OSPF:";
 choices[19]= new Array();
 choices[19][0] = "Debe disponer de varias interfaces conectadas al area Backbone";
 choices[19][1] = "Es un enrutador con dos interfaces, cada una de ellas conectada a un area OSPF diferente";
 choices[19][2] = "Un ABR debe disponer de una interfaz conectada al &aacute;rea backbone, y otra conectada a otra &aacute;rea OSPF";
 choices[19][3] = "Basta con que disponga de una interfaz conectada al &aacute;rea Backbone de OSPF";
 answers[19] = 2;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10884. ";
 preguntaids[19] = 10884


//  Id pregunta: 10881 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Qu&eacute; es PAT?";
 choices[20]= new Array();
 choices[20][0] = "Port Address Translation";
 choices[20][1] = "Protocol Access Translation";
 choices[20][2] = "Port Acknowledge Timeout";
 choices[20][3] = "PDU access token";
 answers[20] = 0;
 units[20] = ['119'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 10881. ";
 preguntaids[20] = 10881


//  Id pregunta: 10917 Año de creación de pregunta: 2015
 questions[21]= "22)  &iquest;Qu&eacute; protocolo, en el &aacute;mbito de Ipsec, proporciona confidencialidad de los datos y la autenticaci&oacute;n de paquetes IP?";
 choices[21]= new Array();
 choices[21][0] = "AH";
 choices[21][1] = "RSA";
 choices[21][2] = "IKE";
 choices[21][3] = "ESP";
 answers[21] = 3;
 units[21] = ['119'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10917. ";
 preguntaids[21] = 10917


//  Id pregunta: 10882 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;cu&aacute;l no es un estado de puerto en el protocolo STP?";
 choices[22]= new Array();
 choices[22][0] = "Listening";
 choices[22][1] = "Learning";
 choices[22][2] = "Forwarding";
 choices[22][3] = "Broadcasting";
 answers[22] = 3;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10882. ";
 preguntaids[22] = 10882


//  Id pregunta: 10862 Año de creación de pregunta: 2015
 questions[23]= "24)  Son plataformas para almacenar y compartir fotos:";
 choices[23]= new Array();
 choices[23][0] = "Flickr, Backpackit y Picasa";
 choices[23][1] = "Photobucket, Picasa y ThisLife";
 choices[23][2] = "ThisLife, Drupal y Flickr";
 choices[23][3] = "Photobucket, Backpackit y Feedreader";
 answers[23] = 1;
 units[23] = ['125'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10862. ";
 preguntaids[23] = 10862


//  Id pregunta: 10927 Año de creación de pregunta: 2015
 questions[24]= "25)  Cuando aumenta el n&uacute;mero de colisiones en una red LAN porque se ha aumentado el tr&aacute;fico en la misma, &iquest;qu&eacute; es necesario aplicar?:";
 choices[24]= new Array();
 choices[24][0] = "Segmentaci&oacute;n de la LAN";
 choices[24][1] = "Cambio de forma de conexi&oacute;n";
 choices[24][2] = "Cambio de troncal";
 choices[24][3] = "Cambio de Sistema de cableado estructurado";
 answers[24] = 0;
 units[24] = ['104'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 10927. ";
 preguntaids[24] = 10927


//  Id pregunta: 10864 Año de creación de pregunta: 2015
 questions[25]= "26)  Se&ntilde;ale el c&oacute;dec que no aplica compresi&oacute;n de entre los siguientes:";
 choices[25]= new Array();
 choices[25][0] = "G.711";
 choices[25][1] = "G.726";
 choices[25][2] = "G.729";
 choices[25][3] = "iLBC";
 answers[25] = 0;
 units[25] = ['117'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10864. ";
 preguntaids[25] = 10864


//  Id pregunta: 10898 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera acerca de las VLANs?";
 choices[26]= new Array();
 choices[26][0] = "Se deben tener al menos dos VLANs definidas en cada red conmutada";
 choices[26][1] = "Se deben tener al menos tres VLANs definidas en cada red conmutada";
 choices[26][2] = "No deber&iacute;an tenerse m&aacute;s de 3 switches en cada red conmutada";
 choices[26][3] = "Actuan a nivel 2 del modelo OSI";
 answers[26] = 3;
 units[26] = ['102'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 10898. ";
 preguntaids[26] = 10898


//  Id pregunta: 10911 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[27]= new Array();
 choices[27][0] = "WEP";
 choices[27][1] = "PSK";
 choices[27][2] = "EAP";
 choices[27][3] = "WPA";
 answers[27] = 3;
 units[27] = ['108'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10911. ";
 preguntaids[27] = 10911


//  Id pregunta: 10880 Año de creación de pregunta: 2015
 questions[28]= "29)  En qu&eacute; consiste el mecanismo de Sobrecarga NAT";
 choices[28]= new Array();
 choices[28][0] = "En la utilizaci&oacute;n de puertos para traducir una direccion interna local en una direccion interna global.";
 choices[28][1] = "En la utilizaci&oacute;n de puertos para traducir direcciones internas locales en una o m&aacute;s direcciones globales internas.";
 choices[28][2] = "Traduce una direccion local interna en una global interna";
 choices[28][3] = "Traduce una direccion local interna en otra direccion local interna";
 answers[28] = 1;
 units[28] = ['119'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 10880. ";
 preguntaids[28] = 10880


//  Id pregunta: 10896 Año de creación de pregunta: 2015
 questions[29]= "30)  En el &aacute;mbito de la seguridad,&iquest;a qu&eacute; atienden las siglas AAA?";
 choices[29]= new Array();
 choices[29][0] = "Authentication, Authorization and Accounting";
 choices[29][1] = "Acknowledge, Authorization and Accounting";
 choices[29][2] = "Authentication, Authorization and Access";
 choices[29][3] = "Authentication, Approval and Accounting";
 answers[29] = 0;
 units[29] = ['119'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10896. ";
 preguntaids[29] = 10896


//  Id pregunta: 10890 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;cu&aacute;l no es un mecanismo de transici&oacute;n a ipv6?";
 choices[30]= new Array();
 choices[30][0] = "Tunel 6a4";
 choices[30][1] = "Tunel GRE";
 choices[30][2] = "Tunel ISATAP";
 choices[30][3] = "Tunel PPP";
 answers[30] = 3;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10890. CCN-STIC-495";
 preguntaids[30] = 10890


//  Id pregunta: 10894 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los Caballos de Troya?";
 choices[31]= new Array();
 choices[31][0] = "Un caballo de troya proxy abre el puerto 21 en el sistema objetivo";
 choices[31][1] = "Un caballo de troya es dificil de detectar, porque detiene su ejecuci&oacute;n cuando la aplicaci&oacute;n que lo ejecut&oacute; se cierra.";
 choices[31][2] = "Un caballo de Troya puede cargarse en un virus o un gusano";
 choices[31][3] = "Un caballo de Troya FTP compromete el funcionamiento de cortafuegos";
 answers[31] = 2;
 units[31] = ['119'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10894. ";
 preguntaids[31] = 10894


//  Id pregunta: 10895 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Qu&eacute; amenaza de seguridad se trata de SW que se adhiere a otro SW para ejecutar funciones no deseadas?";
 choices[32]= new Array();
 choices[32][0] = "Virus";
 choices[32][1] = "Gusano";
 choices[32][2] = "Caballo de Troya Proxy";
 choices[32][3] = "Caballo de Troya de denegaci&oacute;n de servicio";
 answers[32] = 0;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 10895. ";
 preguntaids[32] = 10895


//  Id pregunta: 10878 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Cuantos host puede poseer una red /30?";
 choices[33]= new Array();
 choices[33][0] = "1";
 choices[33][1] = "6";
 choices[33][2] = "2";
 choices[33][3] = "4";
 answers[33] = 2;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 10878. ";
 preguntaids[33] = 10878


//  Id pregunta: 10893 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;cu&aacute;l es una caracter&iacute;stica de los ataques DoS?";
 choices[34]= new Array();
 choices[34][0] = "Siempre preceden a ataques de acceso";
 choices[34][1] = "Intentan comprometer la disponibilidad de un equipo, red, o aplicaci&oacute;n";
 choices[34][2] = "Un ejemplo de ellos es el escaneo de puertos";
 choices[34][3] = "Un ejemplo de ellos es el &quot;barrido de ping&quot;";
 answers[34] = 1;
 units[34] = ['119'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10893. ";
 preguntaids[34] = 10893


//  Id pregunta: 10941 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes tipos de cables no presenta apantallamiento?";
 choices[35]= new Array();
 choices[35][0] = "STP";
 choices[35][1] = "S/STP";
 choices[35][2] = "FTP";
 choices[35][3] = "UTP";
 answers[35] = 3;
 units[35] = ['104'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10941. ";
 preguntaids[35] = 10941


//  Id pregunta: 10904 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Qu&eacute; factor determina en TCP el tama&ntilde;o de ventana?";
 choices[36]= new Array();
 choices[36][0] = "la cantidad de datos que el destino puede procesar a la vez";
 choices[36][1] = "el n&uacute;mero de servicios incluidos en el segmento TCP";
 choices[36][2] = "la cantidad de datos que la fuente es capaz de enviar de una sola vez";
 choices[36][3] = "la cantidad de datos a transmitir";
 answers[36] = 0;
 units[36] = ['102'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10904. ";
 preguntaids[36] = 10904


//  Id pregunta: 10925 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[37]= new Array();
 choices[37][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[37][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[37][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[37][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[37] = 0;
 units[37] = ['123'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 10925. ";
 preguntaids[37] = 10925


//  Id pregunta: 10879 Año de creación de pregunta: 2015
 questions[38]= "39)  En el contexto de NAT IP,&iquest; qu&eacute; direcci&oacute;n se usa para representar equipos internos en el exterior?";
 choices[38]= new Array();
 choices[38][0] = "Local interna";
 choices[38][1] = "Global interna";
 choices[38][2] = "Local externa";
 choices[38][3] = "Global interna";
 answers[38] = 1;
 units[38] = ['119'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10879. ";
 preguntaids[38] = 10879


//  Id pregunta: 10903 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cuantos mensajes se intercambian durante el proceso de terminaci&oacute;n de la sesi&oacute;n TCP entre el cliente y el servidor?";
 choices[39]= new Array();
 choices[39][0] = "2";
 choices[39][1] = "4";
 choices[39][2] = "6";
 choices[39][3] = "8";
 answers[39] = 1;
 units[39] = ['102'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 10903. ";
 preguntaids[39] = 10903


//  Id pregunta: 10883 Año de creación de pregunta: 2015
 questions[40]= "41)  Los mensajes intercambiados entre Bridges en STP se denominan:";
 choices[40]= new Array();
 choices[40][0] = "PDUs";
 choices[40][1] = "PDIs";
 choices[40][2] = "BPDU";
 choices[40][3] = "SPDU";
 answers[40] = 2;
 units[40] = ['102'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10883. ";
 preguntaids[40] = 10883


//  Id pregunta: 10853 Año de creación de pregunta: 2015
 questions[41]= "42)  Las dimensiones can&oacute;nicas de la seguridad son:";
 choices[41]= new Array();
 choices[41][0] = "Disponibilidad, confidencialidad y trazabilidad";
 choices[41][1] = "Confidencialidad, autenticidad y disponibilidad";
 choices[41][2] = "Integridad, trazabilidad y autenticidad";
 choices[41][3] = "Confidencialidad, integridad y disponibilidad";
 answers[41] = 3;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 10853. ";
 preguntaids[41] = 10853


//  Id pregunta: 10897 Año de creación de pregunta: 2015
 questions[42]= "43)  &iquest;Qu&eacute; m&eacute;todo de conmutaci&oacute;n LAN ejecuta un CRC en cada trama?";
 choices[42]= new Array();
 choices[42][0] = "Metodo de corte";
 choices[42][1] = "Verificaci&oacute;n de fragmentos";
 choices[42][2] = "Libre de fragmentos";
 choices[42][3] = "Almacenamiento y env&iacute;o";
 answers[42] = 3;
 units[42] = ['102'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 10897. ";
 preguntaids[42] = 10897


//  Id pregunta: 10943 Año de creación de pregunta: 2015
 questions[43]= "44)  &iquest;Para que se utiliza el sistema de multiplexaci&oacute;n CWDM?";
 choices[43]= new Array();
 choices[43][0] = "dar soporte a aplicaciones de redes de &aacute;rea metropolitana, donde se busca no tanto alcanzar largas distancias sino reducci&oacute;n de costes";
 choices[43][1] = "se utiliza para el transporte de grandes cantidades de informaci&oacute;n a larga distancia";
 choices[43][2] = "Actualmente no se utiliza";
 choices[43][3] = "El sistema CWDM es interoperable con DWDM.";
 answers[43] = 0;
 units[43] = ['106'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 10943. ";
 preguntaids[43] = 10943


//  Id pregunta: 10888 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[44]= new Array();
 choices[44][0] = "MIB";
 choices[44][1] = "SNMP manager";
 choices[44][2] = "SNMP agent";
 choices[44][3] = "Servidor Syslog";
 answers[44] = 3;
 units[44] = ['114'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 10888. ";
 preguntaids[44] = 10888


//  Id pregunta: 10901 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;les de los siguientes protocolos no incluye la suite PPP?";
 choices[45]= new Array();
 choices[45][0] = "LAPB";
 choices[45][1] = "HDLC";
 choices[45][2] = "LCP";
 choices[45][3] = "SDLC";
 answers[45] = 0;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 10901. ";
 preguntaids[45] = 10901


//  Id pregunta: 10872 Año de creación de pregunta: 2015
 questions[46]= "47)  Cuando un switch recibe una trama y no posee la direcci&oacute;n de destino, el switch:";
 choices[46]= new Array();
 choices[46][0] = "env&iacute;a la trama por todos los puertos";
 choices[46][1] = "env&iacute;a un ARP para obtener la direcci&oacute;n de destino de la trama";
 choices[46][2] = "reenv&iacute;a la trama por todos los puertos, excepto por el que fue recibido";
 choices[46][3] = "descarta la trama";
 answers[46] = 2;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10872. ";
 preguntaids[46] = 10872


//  Id pregunta: 10915 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;l es uno de los beneficios de la utilizaci&oacute;n de las VPN para el acceso remoto?";
 choices[47]= new Array();
 choices[47][0] = "Menor sobrecarga de protocolo";
 choices[47][1] = "Potencial reducci&oacute;n de los costos de conectividad";
 choices[47][2] = "Aumento de la calidad de servicio";
 choices[47][3] = "Facilidad de soluci&oacute;n de problemas";
 answers[47] = 1;
 units[47] = ['110'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 10915. ";
 preguntaids[47] = 10915


//  Id pregunta: 10906 Año de creación de pregunta: 2015
 questions[48]= "49)  Qu&eacute; campo de la cabecera TCP se utiliza, entre otros, para confirmar la recepci&oacute;n de los datos?";
 choices[48]= new Array();
 choices[48][0] = "numero de secuencia";
 choices[48][1] = "checksum";
 choices[48][2] = "flag FIN";
 choices[48][3] = "flag SYN";
 answers[48] = 0;
 units[48] = ['102'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 10906. ";
 preguntaids[48] = 10906


//  Id pregunta: 10922 Año de creación de pregunta: 2015
 questions[49]= "50)  Diferencia entre un virus y un &ldquo;Caballo de Troya&rdquo;:";
 choices[49]= new Array();
 choices[49][0] = "El virus suele utilizar canales encubiertos.";
 choices[49][1] = "El virus presenta un mecanismo de replicaci&oacute;n.";
 choices[49][2] = "El &ldquo;Caballo de Troya&rdquo; advierte de su presencia.";
 choices[49][3] = "El &ldquo;Caballo de Troya&rdquo; no esconde funciones potencialmente maliciosas.";
 answers[49] = 1;
 units[49] = ['119'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 10922. ";
 preguntaids[49] = 10922


//  Id pregunta: 10892 Año de creación de pregunta: 2015
 questions[50]= "51)  Qu&eacute; direcci&oacute;n multicast utiliza RIPng";
 choices[50]= new Array();
 choices[50][0] = "FF02::9";
 choices[50][1] = "FF02::1";
 choices[50][2] = "FF02:A";
 choices[50][3] = "FF02::6";
 answers[50] = 0;
 units[50] = ['102'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 10892. ";
 preguntaids[50] = 10892


//  Id pregunta: 10875 Año de creación de pregunta: 2015
 questions[51]= "52)  Al conectar un PC y un HUB se debe usar:";
 choices[51]= new Array();
 choices[51][0] = "Straight-through cable";
 choices[51][1] = "Consola";
 choices[51][2] = "Crossover cable";
 choices[51][3] = "RJ 11";
 answers[51] = 0;
 units[51] = ['104'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 10875. ";
 preguntaids[51] = 10875


//  Id pregunta: 10874 Año de creación de pregunta: 2015
 questions[52]= "53)  Al conectar un PC a un switch se debe usar;";
 choices[52]= new Array();
 choices[52][0] = "Straight-through cable";
 choices[52][1] = "Consola";
 choices[52][2] = "Crossover cable";
 choices[52][3] = "RJ 11";
 answers[52] = 0;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 10874. ";
 preguntaids[52] = 10874


//  Id pregunta: 10899 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza caracter&iacute;sticas tanto de los protocolos de vector distancia como de los de estado de enlace?";
 choices[53]= new Array();
 choices[53][0] = "OSPF";
 choices[53][1] = "RIP";
 choices[53][2] = "RIPv2";
 choices[53][3] = "EIGRP";
 answers[53] = 3;
 units[53] = ['102'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 10899. ";
 preguntaids[53] = 10899


//  Id pregunta: 10891 Año de creación de pregunta: 2015
 questions[54]= "55)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[54]= new Array();
 choices[54][0] = "2000::/3";
 choices[54][1] = "FF00::/10";
 choices[54][2] = "FE00::/12";
 choices[54][3] = "::1/128";
 answers[54] = 0;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 10891. ";
 preguntaids[54] = 10891


//  Id pregunta: 10916 Año de creación de pregunta: 2015
 questions[55]= "56)  Qu&eacute; dos algoritmos de cifrado se utilizan en IPsec VPN?";
 choices[55]= new Array();
 choices[55][0] = "3DES y AES";
 choices[55][1] = "AES y DH";
 choices[55][2] = "3DES y PSK";
 choices[55][3] = "IKE y PSK";
 answers[55] = 0;
 units[55] = ['119'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 10916. ";
 preguntaids[55] = 10916


//  Id pregunta: 10876 Año de creación de pregunta: 2015
 questions[56]= "57)  El OUI de una direcci&oacute;n MAC posee";
 choices[56]= new Array();
 choices[56][0] = "6 digitos Hexadecimales";
 choices[56][1] = "32bits";
 choices[56][2] = "48bits";
 choices[56][3] = "24bytes";
 answers[56] = 0;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 10876. ";
 preguntaids[56] = 10876


//  Id pregunta: 10900 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[57]= new Array();
 choices[57][0] = "Direccion destino IP";
 choices[57][1] = "Direccion origen IP";
 choices[57][2] = "Protocolo";
 choices[57][3] = "Puerto";
 answers[57] = 1;
 units[57] = ['102'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 10900. ";
 preguntaids[57] = 10900


//  Id pregunta: 10924 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Qu&eacute; es una topolog&iacute;a de red Ad-Hoc?";
 choices[58]= new Array();
 choices[58][0] = "Aquella en la que todos los elementos de una red se comunican con el resto de igual a igual";
 choices[58][1] = "Aquella en la que todos los elementos de una red se comunican a trav&eacute;s de un elemento com&uacute;n llamado control de accesos.";
 choices[58][2] = "Aquella en la que todos los elementos de una red se comunican siguiendo unas prioridades.";
 choices[58][3] = "Aquella que a nivel l&oacute;gico integra redes localizadas en diferentes redes externas.";
 answers[58] = 0;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 10924. ";
 preguntaids[58] = 10924


//  Id pregunta: 10870 Año de creación de pregunta: 2015
 questions[59]= "60)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[59]= new Array();
 choices[59][0] = "MAC";
 choices[59][1] = "Segmento";
 choices[59][2] = "Paquete";
 choices[59][3] = "Trama";
 answers[59] = 3;
 units[59] = ['105'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 10870. ";
 preguntaids[59] = 10870


//  Id pregunta: 10907 Año de creación de pregunta: 2015
 questions[60]= "61)  El n&uacute;mero binario 11110011 puede expresarse en hexadecimal como:";
 choices[60]= new Array();
 choices[60][0] = "A9";
 choices[60][1] = "F3";
 choices[60][2] = "0C";
 choices[60][3] = "FC";
 answers[60] = 1;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 10907. ";
 preguntaids[60] = 10907


//  Id pregunta: 10902 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Cu&aacute;l es la forma en que un administrador puede configurar VLAN?";
 choices[61]= new Array();
 choices[61][0] = "Est&aacute;ticamente o Dinamicamente";
 choices[61][1] = "Din&aacute;micamente o a trav&eacute;s de una base de datos de VLAN";
 choices[61][2] = "A trav&eacute;s de un servidor DHCP";
 choices[61][3] = "A trav&eacute;s de una base de datos";
 answers[61] = 0;
 units[61] = ['102'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10902. ";
 preguntaids[61] = 10902


//  Id pregunta: 10871 Año de creación de pregunta: 2015
 questions[62]= "63)  Cuando el servidor web envia una respuesta, seg&uacute;n el modelo OSI los datos primero se encapsulan en un";
 choices[62]= new Array();
 choices[62][0] = "Paquete";
 choices[62][1] = "Segmento";
 choices[62][2] = "Trama";
 choices[62][3] = "Frame";
 answers[62] = 1;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 10871. ";
 preguntaids[62] = 10871


