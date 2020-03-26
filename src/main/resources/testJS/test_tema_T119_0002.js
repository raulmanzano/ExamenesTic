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
//  Id pregunta: 10130 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[0]= new Array();
 choices[0][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[0][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[0][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[0][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[0] = 1;
 units[0] = ['119'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10130. Examen TIC A1 2014";
 preguntaids[0] = 10130


//  Id pregunta: 7711 Año de creación de pregunta: 2010
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&laquo;Secure Socket Layer&raquo;) es correcta?";
 choices[1]= new Array();
 choices[1][0] = "Solo proporciona servicios de seguridad para el protocolo HTTP (&laquo;HyperText Transfer Protocol&raquo;).";
 choices[1][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir.";
 choices[1][2] = "El protocolo se implementa entre los niveles de Transporte y de Red.";
 choices[1][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n.";
 answers[1] = 3;
 units[1] = ['119'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7711. Map 2007";
 preguntaids[1] = 7711


//  Id pregunta: 7425 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service):";
 choices[2]= new Array();
 choices[2][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP y el puerto 1813";
 choices[2][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[2][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[2][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[2] = 0;
 units[2] = ['119'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 7425. Examen TIC B 2009";
 preguntaids[2] = 7425


//  Id pregunta: 9196 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[3]= new Array();
 choices[3][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[3][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[3][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[3][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[3] = 2;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9196. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[3] = 9196


//  Id pregunta: 8233 Año de creación de pregunta: 2011
 questions[4]= "5)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[4]= new Array();
 choices[4][0] = "Capa IP";
 choices[4][1] = "Capa de Aplicaci&oacute;n";
 choices[4][2] = "Capa de Sesi&oacute;n";
 choices[4][3] = "Capa de Transporte";
 answers[4] = 0;
 units[4] = ['119'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8233. Examen UPM A2 2011";
 preguntaids[4] = 8233


//  Id pregunta: 7829 Año de creación de pregunta: 2010
 questions[5]= "6)  En el protocolo Secure Socket Layer (SSL) el subprotocolo de negociaci&oacute;n (handsake) negocia las claves de sesi&oacute;n mediante el esquema de Diffie-Hellman (D-H) o RSA. Indique la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "D-H an&oacute;nimo es susceptible de ataques por hombre interpuesto.";
 choices[5][1] = "D-H ef&iacute;mero no requiere certificado del servidor ni del cliente.";
 choices[5][2] = "D-H constante no precisa certificado del cliente.";
 choices[5][3] = "RSA necesita la generaci&oacute;n de un n&uacute;mero aleatorio por el servidor que es enviado al cliente cifrado con la clave p&uacute;blica de &eacute;ste.";
 answers[5] = 0;
 units[5] = ['119'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7829. ";
 preguntaids[5] = 7829


//  Id pregunta: 9861 Año de creación de pregunta: 2015
 questions[6]= "7)  Indique cu&aacute;l de &eacute;stos no es un m&eacute;todo EAP:";
 choices[6]= new Array();
 choices[6][0] = "PEAP";
 choices[6][1] = "EAP-SIM";
 choices[6][2] = "EAP-PAP";
 choices[6][3] = "EAP-TTLS";
 answers[6] = 2;
 units[6] = ['119'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9861. ";
 preguntaids[6] = 9861


//  Id pregunta: 7256 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;C&oacute;mo se utiliza un protocolo reto/respuesta con una implementaci&oacute;n con un dispositivo de tokens?";
 choices[7]= new Array();
 choices[7][0] = "Este protocolo no se usa, se usa la criptograf&iacute;a";
 choices[7][1] = "El servicio de autenticaci&oacute;n genera un reto y el dispositivo inteligente genera una respuesta basado en el reto";
 choices[7][2] = "El dispositivo pide el usuario y la contrase&ntilde;a";
 choices[7][3] = "El dispositivo compara la contrase&ntilde;a del usuario contra una base de datos de credenciales";
 answers[7] = 1;
 units[7] = ['119'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7256. ";
 preguntaids[7] = 7256


//  Id pregunta: 8418 Año de creación de pregunta: 2011
 questions[8]= "9)  Las siglas SSL y TLS se refieren a:";
 choices[8]= new Array();
 choices[8][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[8][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[8][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[8][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[8] = 1;
 units[8] = ['119', '120'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8418. Operador Ayto. Madrid 2010";
 preguntaids[8] = 8418


//  Id pregunta: 7950 Año de creación de pregunta: 2011
 questions[9]= "10)  En relaci&oacute;n a IPSec se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[9]= new Array();
 choices[9][0] = "Se defini&oacute; originariamente en las RFCs 1825 y 1829.";
 choices[9][1] = "Tanto AH (Authentication Header) como ESP (Encapsulating Security Payload) proporcionan integridad y autenticaci&oacute;n en la comunicaci&oacute;n.";
 choices[9][2] = "En modo transporte con AH no es posible traducir direcciones mediante NAT transversal.";
 choices[9][3] = "ESP debe implementar obligatoriamente el algoritmo AES-CBC con claves de 128 bits";
 answers[9] = 2;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7950. Examen TIC A2 2010";
 preguntaids[9] = 7950


//  Id pregunta: 9228 Año de creación de pregunta: 2010
 questions[10]= "11)  Ordene de forma decreciente, en relaci&oacute;n al coste en hardware (puertas l&oacute;gicasequivalentes), las siguientes primitivas criptogr&aacute;ficas: funci&oacute;n resumen (ej. MD5 o SHA-1), cifrado asim&eacute;trico (ej. RSA o curvas el&iacute;pticas) y cifrado sim&eacute;trico (ej. AES o DES).";
 choices[10]= new Array();
 choices[10][0] = "Funci&oacute;n resumen, Cifrado asim&eacute;trico, Cifrado sim&eacute;trico.";
 choices[10][1] = "Funci&oacute;n resumen, Cifrado sim&eacute;trico, Cifrado asim&eacute;trico.";
 choices[10][2] = "Cifrado asim&eacute;trico, Cifrado sim&eacute;trico, Funci&oacute;n resumen.";
 choices[10][3] = "Cifrado asim&eacute;trico, Funci&oacute;n resumen, Cifrado sim&eacute;trico.";
 answers[10] = 3;
 units[10] = ['119'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9228. Examen TIC A1 2013";
 preguntaids[10] = 9228


//  Id pregunta: 9205 Año de creación de pregunta: 2014
 questions[11]= "12)  Si el usuario A desea enviar un documento firmado digitalmente por &eacute;l al usuario B:";
 choices[11]= new Array();
 choices[11][0] = "El usuario A debe enviar el documento acompa&ntilde;ado del documento cifrado con la clave p&uacute;blica de B.";
 choices[11][1] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave p&uacute;blica de B.";
 choices[11][2] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave privada de A.";
 choices[11][3] = "El usuario A debe enviar el documento cifrado con la clave p&uacute;blica de B acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y todo cifrado con la clave privada de A.";
 answers[11] = 2;
 units[11] = ['119'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9205. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[11] = 9205


//  Id pregunta: 7407 Año de creación de pregunta: 2010
 questions[12]= "13)  Los cortafuegos de filtrado de paquetes:";
 choices[12]= new Array();
 choices[12][0] = "Funcionan a nivel de red";
 choices[12][1] = "Funcionan a a nivel de aplicaci&oacute;n";
 choices[12][2] = "Funcionan a nivel de enlace";
 choices[12][3] = "Funcionan a nivel de sesi&oacute;n";
 answers[12] = 0;
 units[12] = ['119'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 7407. Examen TIC B 2009";
 preguntaids[12] = 7407


//  Id pregunta: 7258 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[13]= new Array();
 choices[13][0] = "Algo que alguien sabe";
 choices[13][1] = "Algo que alguien es";
 choices[13][2] = "Algo que alguien tiene";
 choices[13][3] = "Lo que una persona sabe y es";
 answers[13] = 3;
 units[13] = ['119'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7258. ";
 preguntaids[13] = 7258


//  Id pregunta: 9193 Año de creación de pregunta: 2014
 questions[14]= "15)  El algoritmo DES:";
 choices[14]= new Array();
 choices[14][0] = "Es un algoritmo de cifrado asim&eacute;trico que codifica bloques de 64 bits empleando claves de 32 bits, con una permutaci&oacute;n al principio y otra al final del proceso.";
 choices[14][1] = "Es un algoritmo de cifrado por bloques que codifica bloques de 54 bits, y su estructura consta de 16 etapas.";
 choices[14][2] = "Es un algoritmo de cifrado sim&eacute;trico cuya estructura es una variaci&oacute;n de la red de Feistel.";
 choices[14][3] = "Es un algoritmo de cifrado de flujo que codifica flujos de 64 bits, empleando una clave de 64, aunque s&oacute;lo 56 bits son utilizados. Los 8 bits restantes comprueban la paridad.";
 answers[14] = 2;
 units[14] = ['119'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9193. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[14] = 9193


//  Id pregunta: 9199 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes puertos es el puerto est&aacute;ndar de POP3 sobre SSL?";
 choices[15]= new Array();
 choices[15][0] = "995";
 choices[15][1] = "993";
 choices[15][2] = "220";
 choices[15][3] = "465";
 answers[15] = 0;
 units[15] = ['119'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9199. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[15] = 9199


//  Id pregunta: 10496 Año de creación de pregunta: 2015
 questions[16]= "17)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[16]= new Array();
 choices[16][0] = "ISO 15408 - Common criteria";
 choices[16][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[16][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[16][3] = "RFC 5246 - IPSEC";
 answers[16] = 3;
 units[16] = ['45', '78', '119'];
 blocks[16] = ['B1', 'B2', 'B4'];
 comments[16] = "Id Pregunta: 10496. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";
 preguntaids[16] = 10496


//  Id pregunta: 10855 Año de creación de pregunta: 2015
 questions[17]= "18)  XACML es:";
 choices[17]= new Array();
 choices[17][0] = "Un est&aacute;ndar de firma de documentos.";
 choices[17][1] = "Un est&aacute;ndar que define un esquema XML para el intercambio de autorizaci&oacute;n y autenticaci&oacute;n.";
 choices[17][2] = "Un est&aacute;ndar basado en la especificaci&oacute;n XML para definir pol&iacute;ticas de control de acceso.";
 choices[17][3] = "Especifica un proceso para cifrar datos y representar esa informaci&oacute;n cifrada en XML.";
 answers[17] = 2;
 units[17] = ['119'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 10855. ";
 preguntaids[17] = 10855


//  Id pregunta: 9375 Año de creación de pregunta: 2014
 questions[18]= "19)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[18]= new Array();
 choices[18][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[18][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[18][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[18][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[18] = 3;
 units[18] = ['119'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9375. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[18] = 9375


//  Id pregunta: 6552 Año de creación de pregunta: 2003
 questions[19]= "20)  Cual de los siguientes sistemas est&aacute; colocado tradicionalmente en la DMZ de una red";
 choices[19]= new Array();
 choices[19][0] = "Servidor de aplicaciones";
 choices[19][1] = "Proxy";
 choices[19][2] = "Servidor LDAP";
 choices[19][3] = "Servidor de base de datos";
 answers[19] = 1;
 units[19] = ['119'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 6552. ";
 preguntaids[19] = 6552


//  Id pregunta: 10879 Año de creación de pregunta: 2015
 questions[20]= "21)  En el contexto de NAT IP,&iquest; qu&eacute; direcci&oacute;n se usa para representar equipos internos en el exterior?";
 choices[20]= new Array();
 choices[20][0] = "Local interna";
 choices[20][1] = "Global interna";
 choices[20][2] = "Local externa";
 choices[20][3] = "Global interna";
 answers[20] = 1;
 units[20] = ['119'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 10879. ";
 preguntaids[20] = 10879


//  Id pregunta: 7259 Año de creación de pregunta: 2010
 questions[21]= "22)  Revisar los logs de seguridad es un tipo de seguridad";
 choices[21]= new Array();
 choices[21][0] = "Preventiva";
 choices[21][1] = "De detecci&oacute;n";
 choices[21][2] = "Disuasoria";
 choices[21][3] = "Correctiva";
 answers[21] = 1;
 units[21] = ['119'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 7259. ";
 preguntaids[21] = 7259


//  Id pregunta: 9191 Año de creación de pregunta: 2014
 questions[22]= "23)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[22]= new Array();
 choices[22][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[22][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[22][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[22][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[22] = 3;
 units[22] = ['119'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9191. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[22] = 9191


//  Id pregunta: 10709 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Qu&eacute; afirmaci&oacute;n respecto al protocolo SSL NO es cierta?";
 choices[23]= new Array();
 choices[23][0] = "Responde por Secure Socket Layer.";
 choices[23][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web.";
 choices[23][2] = "En su funcionamiento se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal. (confidencialidad)";
 choices[23][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes.";
 answers[23] = 3;
 units[23] = ['119'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10709. ";
 preguntaids[23] = 10709


//  Id pregunta: 9862 Año de creación de pregunta: 2015
 questions[24]= "25)  La cabecera de autenticaci&oacute;n (AH) de IPSec:";
 choices[24]= new Array();
 choices[24][0] = "Proporciona integridad, no repudio en origen y protecci&oacute;n contra replay.";
 choices[24][1] = "Proporciona confidencialidad, autenticidad de origen e integridad.";
 choices[24][2] = "Crea la asociaci&oacute;n de seguridad.";
 choices[24][3] = "Ninguna de las anteriores.";
 answers[24] = 0;
 units[24] = ['119'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9862. ";
 preguntaids[24] = 9862


//  Id pregunta: 9155 Año de creación de pregunta: 2014
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n es correcta respecto a firmar digitalmente mediante XML Signature al usar WS-Security:";
 choices[25]= new Array();
 choices[25][0] = "WS-Security no contempla el uso de XML Signature por no adaptarse bien al modelo petici&oacute;n respuesta de Web Services.";
 choices[25][1] = "WS-Security contemplaba el uso de XML Signature en la versi&oacute;n 1.0 pero se abandon&oacute; en favor de XML DynaSign.";
 choices[25][2] = "WS-Security contempla el uso de XML Signature con algunas limitaciones, como recomendar el no usar Enveloped Signature Transform.";
 choices[25][3] = "WS-Security contempla el uso de XML Signature, sin establecer limitaciones ni extensiones especiales.";
 answers[25] = 2;
 units[25] = ['119'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9155. Examen TIC A2 2013";
 preguntaids[25] = 9155


//  Id pregunta: 10771 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes funciones de seguridad no ofrece SSL?";
 choices[26]= new Array();
 choices[26][0] = "No repudio";
 choices[26][1] = "Confidencialidad";
 choices[26][2] = "Integridad.";
 choices[26][3] = "Ofrece todas las anteriores";
 answers[26] = 0;
 units[26] = ['119'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 10771. ";
 preguntaids[26] = 10771


//  Id pregunta: 7252 Año de creación de pregunta: 2010
 questions[27]= "28)  La informaci&oacute;n puede obtenerse a trav&eacute;s de se&ntilde;ales el&eacute;ctricas en las ondas. Una forma de combatirlo es a trav&eacute;s de";
 choices[27]= new Array();
 choices[27][0] = "Tempest";
 choices[27][1] = "Ruido Blanco";
 choices[27][2] = "Zonas de control";
 choices[27][3] = "Todas las respuestas anteriores son correctas";
 answers[27] = 3;
 units[27] = ['119'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 7252. ";
 preguntaids[27] = 7252


//  Id pregunta: 9863 Año de creación de pregunta: 2015
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de estas entidades no pertenece a una arquitectura SAML:";
 choices[28]= new Array();
 choices[28][0] = "AP (Authentication Provider)";
 choices[28][1] = "SP (Service Provider)";
 choices[28][2] = "IdP (Identity Provider)";
 choices[28][3] = "Todos los anteriores son componentes de la arquitectura SAML.";
 answers[28] = 0;
 units[28] = ['119', '120'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9863. ";
 preguntaids[28] = 9863


//  Id pregunta: 7811 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[29]= new Array();
 choices[29][0] = "Interrupci&oacute;n.";
 choices[29][1] = "Interceptaci&oacute;n.";
 choices[29][2] = "Modificaci&oacute;n.";
 choices[29][3] = "Generaci&oacute;n.";
 answers[29] = 1;
 units[29] = ['119'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7811. ";
 preguntaids[29] = 7811


//  Id pregunta: 6740 Año de creación de pregunta: 2009
 questions[30]= "31)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[30]= new Array();
 choices[30][0] = "Un determinado virus inform&aacute;tico";
 choices[30][1] = "Difusi&oacute;n masiva de noticias falsas";
 choices[30][2] = "Suplantaci&oacute;n fraudulenta que intentan conseguir informaci&oacute;n valiosa";
 choices[30][3] = "Reenv&iacute;o de mensajes a mucha gente";
 answers[30] = 2;
 units[30] = ['119'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6740. MAP 2008 A1";
 preguntaids[30] = 6740


//  Id pregunta: 10382 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes es un protocolo de autenticaci&oacute;n PPP (Point to Point)?";
 choices[31]= new Array();
 choices[31][0] = "RADIUS &ndash; Remote Authentication Dial In User Service";
 choices[31][1] = "Kerberos";
 choices[31][2] = "CHAP Challenge Handshake Authentication Protocol";
 choices[31][3] = "Todos los anteriores";
 answers[31] = 2;
 units[31] = ['119'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10382. ";
 preguntaids[31] = 10382


//  Id pregunta: 7253 Año de creación de pregunta: 2010
 questions[32]= "33)  La autenticaci&oacute;n fuerte requiere dos de los tres atributos de autenticaci&oacute;n, de entre los que se encuentran";
 choices[32]= new Array();
 choices[32][0] = "Algo que alguien sabe";
 choices[32][1] = "Algo que alguien tiene";
 choices[32][2] = "A y B son correctas";
 choices[32][3] = "A y B son incorrectas";
 answers[32] = 2;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7253. ";
 preguntaids[32] = 7253


//  Id pregunta: 10710 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Qu&eacute; es FALSO si hablamos de SET?";
 choices[33]= new Array();
 choices[33][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de cr&eacute;dito.";
 choices[33][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft, Mastercard-Netscape.";
 choices[33][2] = "Es m&aacute;s sencillo de implementar que SSL, lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado.";
 choices[33][3] = "Es el acr&oacute;nimo de Secure Electronic Transactions, Transacciones Electr&oacute;nicas Seguras";
 answers[33] = 2;
 units[33] = ['119'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 10710. ";
 preguntaids[33] = 10710


//  Id pregunta: 10191 Año de creación de pregunta: 2015
 questions[34]= "35)  Para prevenir un ataque de SQL Injection:";
 choices[34]= new Array();
 choices[34][0] = "Debe detenerse la base de datos para evitar su infecci&oacute;n por el c&oacute;digo malicioso.";
 choices[34][1] = "Debe evitarse el uso de procedimientos almacenados en la base de datos.";
 choices[34][2] = "Debe eliminarse del equipo del usuario el c&oacute;digo SQL descargado, para evitar su propagaci&oacute;n.";
 choices[34][3] = "Debe utilizarse instrucciones SQL parametrizadas.";
 answers[34] = 3;
 units[34] = ['119'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10191. Examen TIC A1 2014";
 preguntaids[34] = 10191


//  Id pregunta: 10097 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Qui&eacute;n elabor&oacute; la especificaci&oacute;n Transport Layer Security (TLS)?";
 choices[35]= new Array();
 choices[35][0] = "UIT (Uni&oacute;n Internacional de Telecomunicaciones).";
 choices[35][1] = "IETF (Internet Engineering Task Force).";
 choices[35][2] = "Netscape Communications.";
 choices[35][3] = "ETSI (European Telecommunications Standards Institute).";
 answers[35] = 1;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10097. Examen TIC A2 2014";
 preguntaids[35] = 10097


//  Id pregunta: 9206 Año de creación de pregunta: 2014
 questions[36]= "37)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[36]= new Array();
 choices[36][0] = "Certificado de autenticaci&oacute;n";
 choices[36][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[36][2] = "Claves Diffie-Hellman.";
 choices[36][3] = "Certificados X-509 de componente.";
 answers[36] = 1;
 units[36] = ['119'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 9206. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[36] = 9206


//  Id pregunta: 9194 Año de creación de pregunta: 2014
 questions[37]= "38)  &iquest;C&oacute;mo se denomina el m&oacute;dulo criptogr&aacute;fico necesario para poder operar con el DNI electr&oacute;nico en un entorno UNIX?";
 choices[37]= new Array();
 choices[37][0] = "Cryptographic Service Provider (CSP).";
 choices[37][1] = "PKCS#11.";
 choices[37][2] = "PGP.";
 choices[37][3] = "Smart Card Mini-Driver.";
 answers[37] = 1;
 units[37] = ['119'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 9194. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[37] = 9194


//  Id pregunta: 8234 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI?";
 choices[38]= new Array();
 choices[38][0] = "Proxy";
 choices[38][1] = "Firewall de filtrado de paquetes";
 choices[38][2] = "Antivirus";
 choices[38][3] = "Filtro anti SPAM";
 answers[38] = 1;
 units[38] = ['119'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 8234. Examen UPM A2 2011";
 preguntaids[38] = 8234


//  Id pregunta: 7953 Año de creación de pregunta: 2011
 questions[39]= "40)  EI ataque conocido como &quot;ARP Spoofing&quot;:";
 choices[39]= new Array();
 choices[39][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[39][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs.";
 choices[39][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo.";
 choices[39][3] = "Puede impedirse mediante DHCP snooping.";
 answers[39] = 3;
 units[39] = ['119'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 7953. Examen TIC A2 2010";
 preguntaids[39] = 7953


//  Id pregunta: 9204 Año de creación de pregunta: 2014
 questions[40]= "41)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[40]= new Array();
 choices[40][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[40][1] = "Persona que accede a datos no autorizados.";
 choices[40][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[40][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[40] = 0;
 units[40] = ['119'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9204. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[40] = 9204


//  Id pregunta: 9190 Año de creación de pregunta: 2014
 questions[41]= "42)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[41]= new Array();
 choices[41][0] = "Utilizar el cifrado.";
 choices[41][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[41][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[41][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[41] = 0;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9190. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[41] = 9190


//  Id pregunta: 7255 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Qu&eacute; pol&iacute;tica de control aplica cuando la infraestructura usa un modelo no discrecional?";
 choices[42]= new Array();
 choices[42][0] = "Basado en reglas";
 choices[42][1] = "Basado en roles";
 choices[42][2] = "Basado en identidades";
 choices[42][3] = "MAC";
 answers[42] = 1;
 units[42] = ['119'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7255. ";
 preguntaids[42] = 7255


//  Id pregunta: 10853 Año de creación de pregunta: 2015
 questions[43]= "44)  Las dimensiones can&oacute;nicas de la seguridad son:";
 choices[43]= new Array();
 choices[43][0] = "Disponibilidad, confidencialidad y trazabilidad";
 choices[43][1] = "Confidencialidad, autenticidad y disponibilidad";
 choices[43][2] = "Integridad, trazabilidad y autenticidad";
 choices[43][3] = "Confidencialidad, integridad y disponibilidad";
 answers[43] = 3;
 units[43] = ['119'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 10853. ";
 preguntaids[43] = 10853


//  Id pregunta: 9200 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[44]= new Array();
 choices[44][0] = "La clave privada del emisor es la usada para garantizar la confidencialidad.";
 choices[44][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio e integridad entre otros.";
 choices[44][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, para servicios de confidencialidad, proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos.";
 choices[44][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es m&aacute;s sencilla que la existente en los sistemas convecionales sim&eacute;tricos de clave secreta.";
 answers[44] = 0;
 units[44] = ['119'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 9200. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[44] = 9200


//  Id pregunta: 10139 Año de creación de pregunta: 2015
 questions[45]= "46)  La Estrategia de Ciberseguridad Nacional fue aprobada por el Consejo Nacional de Seguridad en:";
 choices[45]= new Array();
 choices[45][0] = "Septiembre de 2012.";
 choices[45][1] = "Diciembre de 2013.";
 choices[45][2] = "Enero de 2014.";
 choices[45][3] = "Enero de 2011.";
 answers[45] = 1;
 units[45] = ['119'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 10139. Examen TIC A1 2014";
 preguntaids[45] = 10139


//  Id pregunta: 9210 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[46]= new Array();
 choices[46][0] = "Spoofing.";
 choices[46][1] = "Man in the middle.";
 choices[46][2] = "Denial of Service.";
 choices[46][3] = "Flooding.";
 answers[46] = 2;
 units[46] = ['119'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9210. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[46] = 9210


//  Id pregunta: 7257 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Qu&eacute; m&eacute;todo de control de acceso est&aacute; dirigida al usuario?";
 choices[47]= new Array();
 choices[47][0] = "No discrecional";
 choices[47][1] = "MAC";
 choices[47][2] = "Basado en identidades";
 choices[47][3] = "DAC";
 answers[47] = 3;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 7257. ";
 preguntaids[47] = 7257


//  Id pregunta: 7249 Año de creación de pregunta: 2010
 questions[48]= "49)  Una tarjeta de memoria";
 choices[48]= new Array();
 choices[48][0] = "Puede procesar informaci&oacute;n";
 choices[48][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[48][2] = "Nunca puede procesar informaci&oacute;n";
 choices[48][3] = "Son un tipo de tarjeta inteligente";
 answers[48] = 2;
 units[48] = ['119'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7249. ";
 preguntaids[48] = 7249


//  Id pregunta: 8141 Año de creación de pregunta: 2011
 questions[49]= "50)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Modo t&uacute;nel.";
 choices[49][1] = "Modo transporte.";
 choices[49][2] = "Modo encapsulado.";
 choices[49][3] = "Modo transparente.";
 answers[49] = 1;
 units[49] = ['119'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8141. Examen TIC A2 2010 interna";
 preguntaids[49] = 8141


//  Id pregunta: 7246 Año de creación de pregunta: 2010
 questions[50]= "51)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[50]= new Array();
 choices[50][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[50][1] = "MAC usa un sistema de etiquetado";
 choices[50][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[50][3] = "Todas las respuestas anteriores son correctas";
 answers[50] = 3;
 units[50] = ['119'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7246. ";
 preguntaids[50] = 7246


//  Id pregunta: 10014 Año de creación de pregunta: 2015
 questions[51]= "52)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[51]= new Array();
 choices[51][0] = "Denegaci&oacute;n de servicio.";
 choices[51][1] = "Hombre intermedio.";
 choices[51][2] = "Fuerza Bruta.";
 choices[51][3] = "Ingenier&iacute;a social.";
 answers[51] = 0;
 units[51] = ['119'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 10014. Examen TIC A2 2014";
 preguntaids[51] = 10014


//  Id pregunta: 9195 Año de creación de pregunta: 2014
 questions[52]= "53)  Indique cu&aacute;l de las siguientes afirmaciones relacionadas con IPsec es FALSA:";
 choices[52]= new Array();
 choices[52][0] = "IPv6 incluye expl&iacute;citamente la posibilidad de utilizarlo.";
 choices[52][1] = "Puede operar en modo t&uacute;nel o en modo transporte.";
 choices[52][2] = "El protocolo AH proporciona confidencialidad.";
 choices[52][3] = "El protocolo ESP proporciona autenticaci&oacute;n.";
 answers[52] = 2;
 units[52] = ['119'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 9195. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[52] = 9195


//  Id pregunta: 8138 Año de creación de pregunta: 2011
 questions[53]= "54)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[53]= new Array();
 choices[53][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[53][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[53][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[53][3] = "Son firewalls que operan en el nivel de red.";
 answers[53] = 3;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8138. Examen TIC A2 2010 interna";
 preguntaids[53] = 8138


//  Id pregunta: 10196 Año de creación de pregunta: 2015
 questions[54]= "55)  En el &aacute;mbito de la ciberseguridad, respecto de las APT (Advanced Persistent Threats), se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "Una APT comprende distintas fases entre las que se encuentra la extracci&oacute;n de datos.";
 choices[54][1] = "Una APT no utiliza t&eacute;cnicas de ingenier&iacute;a social para lograr el acceso al sistema objetivo.";
 choices[54][2] = "Una APT es un conjunto de software malicioso con poca repercusi&oacute;n en el sistema objetivo y de f&aacute;cil detecci&oacute;n por las herramientas antivirus.";
 choices[54][3] = "Una APT consiste en ataques avanzados pr&oacute;ximos en el tiempo hacia objetivos generales e impersonales.";
 answers[54] = 0;
 units[54] = ['119'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 10196. Examen TIC A1 2014";
 preguntaids[54] = 10196


//  Id pregunta: 9141 Año de creación de pregunta: 2014
 questions[55]= "56)  El ataque a SSL/TLS que permite extraer informaci&oacute;n sobre los tokens de login, email, etc en 30 segundos se llama:";
 choices[55]= new Array();
 choices[55][0] = "Beast Attack";
 choices[55][1] = "Crime";
 choices[55][2] = "Breach";
 choices[55][3] = "No existe dicho ataque";
 answers[55] = 2;
 units[55] = ['119'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9141. ";
 preguntaids[55] = 9141


//  Id pregunta: 6520 Año de creación de pregunta: 2003
 questions[56]= "57)  Indique cu&aacute;l de estos productos no forman parte de los que proporcionan seguridad en el correo electr&oacute;nico";
 choices[56]= new Array();
 choices[56][0] = "PGP";
 choices[56][1] = "PEM";
 choices[56][2] = "MOSS";
 choices[56][3] = "Single MIME";
 answers[56] = 3;
 units[56] = ['119'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 6520. ";
 preguntaids[56] = 6520


//  Id pregunta: 9188 Año de creación de pregunta: 2014
 questions[57]= "58)  Infraestructura de PKI. La autoridad de certificaci&oacute;n ra&iacute;z:";
 choices[57]= new Array();
 choices[57][0] = "No utiliza certificados digitales.";
 choices[57][1] = "Utiliza un certificado digital firmado por otra autoridad de certificaci&oacute;n.";
 choices[57][2] = "Utiliza un certifica digital autofirmado por ella misma.";
 choices[57][3] = "Utiliza un certificado digital emitido por la Administraci&oacute;n P&uacute;blica.";
 answers[57] = 2;
 units[57] = ['119'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9188. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[57] = 9188


//  Id pregunta: 10711 Año de creación de pregunta: 2015
 questions[58]= "59)  Al instalar un cortafuegos en un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[58]= new Array();
 choices[58][0] = "Confidencialidad.";
 choices[58][1] = "Disponibilidad.";
 choices[58][2] = "Integridad.";
 choices[58][3] = "Todas las anteriores.";
 answers[58] = 3;
 units[58] = ['119'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 10711. ";
 preguntaids[58] = 10711


//  Id pregunta: 9397 Año de creación de pregunta: 2014
 questions[59]= "60)  Se&ntilde;ale cuales de las siguiente afirmaciones NO es una caracter&iacute;stica del protocolo EAP-TTLS:";
 choices[59]= new Array();
 choices[59][0] = "En la creaci&oacute;n del t&uacute;nel TLS el servidor se autentica mediante certificado.";
 choices[59][1] = "El cliente puede usar un m&eacute;todo de autenticaci&oacute;n distinto a EAP.";
 choices[59][2] = "Est&aacute; soportado de forma nativa en sistemas operativos Windows 7.";
 choices[59][3] = "Los mensajes de autenticaci&oacute;n del cliente son enviados cifrados al servidor.";
 answers[59] = 2;
 units[59] = ['119'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9397. Examen TIC A2  2013";
 preguntaids[59] = 9397


//  Id pregunta: 10101 Año de creación de pregunta: 2015
 questions[60]= "61)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[60]= new Array();
 choices[60][0] = "Screened Subnet.";
 choices[60][1] = "Dual-Homed Host.";
 choices[60][2] = "Router-Homed Host.";
 choices[60][3] = "Screened Host.";
 answers[60] = 3;
 units[60] = ['119'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 10101. Examen TIC A2 2014";
 preguntaids[60] = 10101


//  Id pregunta: 9192 Año de creación de pregunta: 2014
 questions[61]= "62)  El algoritmo RSA es un algoritmo:";
 choices[61]= new Array();
 choices[61][0] = "De triple clave.";
 choices[61][1] = "Asim&eacute;trico.";
 choices[61][2] = "De clave privada.";
 choices[61][3] = "Sim&eacute;trico.";
 answers[61] = 1;
 units[61] = ['119'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 9192. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[61] = 9192


//  Id pregunta: 9203 Año de creación de pregunta: 2014
 questions[62]= "63)  Un programa malicioso capaz de alojarse en computadoras y permitir el acceso a usuarios externos, a trav&eacute;s de una red local o de Internet, con el fin de recabar informaci&oacute;n o controlar remotamente a la m&aacute;quina anfitriona, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Un caballo de Troya.";
 choices[62][1] = "Un virus.";
 choices[62][2] = "Un gusano.";
 choices[62][3] = "El tal&oacute;n de Aquiles.";
 answers[62] = 0;
 units[62] = ['119'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9203. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[62] = 9203


//  Id pregunta: 9202 Año de creación de pregunta: 2014
 questions[63]= "64)  En lo que se refiere a las Firmas Digitales, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[63]= new Array();
 choices[63][0] = "Si una firma digital es v&aacute;lida para un documento es v&aacute;lida para otro distinto.";
 choices[63][1] = "S&oacute;lo puede ser generada por su leg&iacute;timo titular.";
 choices[63][2] = "Es p&uacute;blicamente verificable.";
 choices[63][3] = "La forma m&aacute;s extendida de calcular firmas digitales consiste en emplear una combinaci&oacute;n de cifrado asim&eacute;trico y funciones resumen.";
 answers[63] = 0;
 units[63] = ['119'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 9202. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[63] = 9202


//  Id pregunta: 8140 Año de creación de pregunta: 2011
 questions[64]= "65)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[64]= new Array();
 choices[64][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[64][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[64][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[64][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[64] = 2;
 units[64] = ['119'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8140. Examen TIC A2 2010 interna";
 preguntaids[64] = 8140


//  Id pregunta: 8126 Año de creación de pregunta: 2011
 questions[65]= "66)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[65]= new Array();
 choices[65][0] = "El c&oacute;digo se replica al activarse";
 choices[65][1] = "Su efecto es retardado.";
 choices[65][2] = "No se activan por eventos.";
 choices[65][3] = "Es otra manera de referirse a los troyanos.";
 answers[65] = 1;
 units[65] = ['119'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8126. Examen TIC A2 2010";
 preguntaids[65] = 8126


//  Id pregunta: 7251 Año de creación de pregunta: 2010
 questions[66]= "67)  Un ejemplo de ataque al control de acceso es";
 choices[66]= new Array();
 choices[66][0] = "Denegaci&oacute;n de servicio";
 choices[66][1] = "Spoofing";
 choices[66][2] = "Ataques de diccionario";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = 3;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7251. ";
 preguntaids[66] = 7251


//  Id pregunta: 9713 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[67]= new Array();
 choices[67][0] = "Si";
 choices[67][1] = "No";
 choices[67][2] = "Depende de la configuraci&oacute;n del FW";
 choices[67][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[67] = 1;
 units[67] = ['119'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 9713. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";
 preguntaids[67] = 9713


//  Id pregunta: 7203 Año de creación de pregunta: 2010
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[68]= new Array();
 choices[68][0] = "Nessus";
 choices[68][1] = "Snort";
 choices[68][2] = "Nagios";
 choices[68][3] = "NetSaint";
 answers[68] = 1;
 units[68] = ['119'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 7203. Castilla La Mancha 2009";
 preguntaids[68] = 7203


//  Id pregunta: 7553 Año de creación de pregunta: 2010
 questions[69]= "70)  El protocolo SSL v.3:";
 choices[69]= new Array();
 choices[69][0] = "Trabaja tanto sobre TCP como sobre UDP.";
 choices[69][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban SSL ten&iacute;an su exportaci&oacute;n desde EE UU limitada a claves de 128 bits.";
 choices[69][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC.";
 choices[69][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman.";
 answers[69] = 3;
 units[69] = ['119'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7553. Map 2005";
 preguntaids[69] = 7553


//  Id pregunta: 9187 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes opciones est&aacute; considerada como la caracter&iacute;stica m&aacute;s segura de una red WLAN?";
 choices[70]= new Array();
 choices[70][0] = "Configuraci&oacute;n de SSID (Service Ser Identifier).";
 choices[70][1] = "Clave WEP.";
 choices[70][2] = "Selecci&oacute;n del canal.";
 choices[70][3] = "Configuraci&oacute;n de la energ&iacute;a.";
 answers[70] = 1;
 units[70] = ['119'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9187. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[70] = 9187


//  Id pregunta: 8124 Año de creación de pregunta: 2011
 questions[71]= "72)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "ISO/lEC 13335-2.";
 choices[71][1] = "ISO/lEC 27002:2013.";
 choices[71][2] = "UNE 71502:2004.";
 choices[71][3] = "ISO 10646.";
 answers[71] = 1;
 units[71] = ['119'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 8124. Examen TIC A2 2010";
 preguntaids[71] = 8124


//  Id pregunta: 7248 Año de creación de pregunta: 2010
 questions[72]= "73)  En el &aacute;mbito de la biometr&iacute;a";
 choices[72]= new Array();
 choices[72][0] = "Un error Tipo I significa que el sistema ha rechazado a un individuo autorizado";
 choices[72][1] = "Un error Tipo I significa que el sistema ha autorizado a un impostor";
 choices[72][2] = "Un error Tipo II significa que el sistema ha rechazado a un individuo autorizado";
 choices[72][3] = "Un error Tipo III significa que el sistema ha rechazado a un individuo autorizado";
 answers[72] = 0;
 units[72] = ['119'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7248. ";
 preguntaids[72] = 7248


//  Id pregunta: 7819 Año de creación de pregunta: 2010
 questions[73]= "74)  Por IP-SPOOFING entendemos:";
 choices[73]= new Array();
 choices[73][0] = "Captura de passwords.";
 choices[73][1] = "Uso fraudulento de direcciones de enlace.";
 choices[73][2] = "Suplantaci&oacute;n de direcciones de red.";
 choices[73][3] = "Propagaci&oacute;n de virus.";
 answers[73] = 2;
 units[73] = ['119'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7819. ";
 preguntaids[73] = 7819


//  Id pregunta: 6702 Año de creación de pregunta: 2009
 questions[74]= "75)  El protocolo Secure Shell, definido en la RFC (IETF Request for Comment) 4251:";
 choices[74]= new Array();
 choices[74][0] = "Permite la negociaci&oacute;n de los algoritmos criptogr&aacute;ficos a usar";
 choices[74][1] = "Proporciona, entre otros, los servicios de confidencialidad, no repudio e integridad";
 choices[74][2] = "Opcionalmente admite compresi&oacute;n, que en este caso debe aplicarse tras el cifrado del paquete";
 choices[74][3] = "Trabaja tanto sobre TCP como sobre UDP";
 answers[74] = 0;
 units[74] = ['119'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 6702. MAP 2008 A1";
 preguntaids[74] = 6702


