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
//  Id pregunta: 9825 Año de creación de pregunta: 2015
 questions[0]= "1)  El algoritmo Rijndael:";
 choices[0]= new Array();
 choices[0][0] = "Tiene un tama&ntilde;o de clave fijo de 128 bits.";
 choices[0][1] = "Tiene un tama&ntilde;o de bloque fijo de 256 bits.";
 choices[0][2] = "Tiene un tama&ntilde;o de clave de 128, 192 o 256 bits.";
 choices[0][3] = "Tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits.";
 answers[0] = 3;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9825. AES tiene un tama&ntilde;o de clave de 128, 192 o 256 bits. Rijndael, en el que est&aacute; basado, tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits (m&iacute;nimo 128 bits y m&aacute;ximo 256 bits).";
 preguntaids[0] = 9825


//  Id pregunta: 9388 Año de creación de pregunta: 2014
 questions[1]= "2)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[1]= new Array();
 choices[1][0] = "Sim&eacute;trico de bloques.";
 choices[1][1] = "Sim&eacute;trico de flujo.";
 choices[1][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[1][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[1] = 0;
 units[1] = ['76'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9388. Examen TIC A2  2013";
 preguntaids[1] = 9388


//  Id pregunta: 10704 Año de creación de pregunta: 2015
 questions[2]= "3)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[2]= new Array();
 choices[2][0] = "MD5";
 choices[2][1] = "TDEA";
 choices[2][2] = "AES";
 choices[2][3] = "RSA";
 answers[2] = 0;
 units[2] = ['76'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 10704. ";
 preguntaids[2] = 10704


//  Id pregunta: 10816 Año de creación de pregunta: 2015
 questions[3]= "4)  Camellia es un algoritmo:";
 choices[3]= new Array();
 choices[3][0] = "Sim&eacute;trico de bloque";
 choices[3][1] = "Sim&eacute;trico de flujo";
 choices[3][2] = "Asim&eacute;trico";
 choices[3][3] = "De funci&oacute;n hash";
 answers[3] = 0;
 units[3] = ['76'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10816. ";
 preguntaids[3] = 10816


//  Id pregunta: 10450 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l es la equivalencia en criptograf&iacute;a asim&eacute;trica a una longitud de clave de 112 bits en criptograf&iacute;a sim&eacute;trica?";
 choices[4]= new Array();
 choices[4][0] = "1102 bits.";
 choices[4][1] = "1768 bits.";
 choices[4][2] = "2048 bits.";
 choices[4][3] = "3072 bits.";
 answers[4] = 2;
 units[4] = ['76'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10450. ";
 preguntaids[4] = 10450


//  Id pregunta: 9376 Año de creación de pregunta: 2014
 questions[5]= "6)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[5]= new Array();
 choices[5][0] = "Contiene la clave privada.";
 choices[5][1] = "Cumple la sintaxis PKCS #21.";
 choices[5][2] = "Est&aacute; codificado en un formato no binario.";
 choices[5][3] = "No se puede convertir a formato .PEM.";
 answers[5] = 0;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9376. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[5] = 9376


//  Id pregunta: 10448 Año de creación de pregunta: 2015
 questions[6]= "7)  El algoritmo de encriptaci&oacute;n Camellia:";
 choices[6]= new Array();
 choices[6][0] = "Fue desarrollado en EEUU.";
 choices[6][1] = "La longitud de clave es variable entre 128, 192 y 256 bits.";
 choices[6][2] = "Tiene un tama&ntilde;o de bloque de 64 bits.";
 choices[6][3] = "No est&aacute; soportado en TLS/SSL.";
 answers[6] = 1;
 units[6] = ['76'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10448. ";
 preguntaids[6] = 10448


//  Id pregunta: 9641 Año de creación de pregunta: 2014
 questions[7]= "8)  &iquest;Qu&eacute; es Kleopatra?";
 choices[7]= new Array();
 choices[7][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[7][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[7][2] = "Un navegador del entorno KDE";
 choices[7][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[7] = 1;
 units[7] = ['76'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9641. ";
 preguntaids[7] = 9641


//  Id pregunta: 10246 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l es un algoritmo de criptograf&iacute;a sim&eacute;trica de flujo?";
 choices[8]= new Array();
 choices[8][0] = "DES";
 choices[8][1] = "Blowfish";
 choices[8][2] = "SNOW";
 choices[8][3] = "IDEA";
 answers[8] = 2;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10246. El resto son algoritmos de bloque";
 preguntaids[8] = 10246


//  Id pregunta: 10342 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes cifrados sim&eacute;tricos es de flujo?";
 choices[9]= new Array();
 choices[9][0] = "RC-4";
 choices[9][1] = "IDEA";
 choices[9][2] = "RC-5";
 choices[9][3] = "AES";
 answers[9] = 0;
 units[9] = ['76'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10342. ";
 preguntaids[9] = 10342


//  Id pregunta: 9644 Año de creación de pregunta: 2014
 questions[10]= "11)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[10]= new Array();
 choices[10][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[10][1] = "Cifrado C&eacute;sar";
 choices[10][2] = "Criptoan&aacute;lisis";
 choices[10][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[10] = 2;
 units[10] = ['76'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9644. ";
 preguntaids[10] = 9644


//  Id pregunta: 10179 Año de creación de pregunta: 2015
 questions[11]= "12)  Respecto a los ficheros de firma electr&oacute;nica y los documentos firmados electr&oacute;nicamente, se&ntilde;ale la respuesta correcta:";
 choices[11]= new Array();
 choices[11][0] = "El documento firmado siempre va inclu&iacute;do en el fichero de firma, tanto en XAdES como en CAdES.";
 choices[11][1] = "En CAdES, el documento puede no incluirse en el fichero de firma. Estas firmas se llaman expl&iacute;citas.";
 choices[11][2] = "El documento firmado se incluye en el fichero de firma en XAdES, y no se puede incluir en CAdES.";
 choices[11][3] = "En XAdES, s&oacute;lo se puede firmar de forma impl&iacute;cita, en la que el documento no se incluye en el resultado de firma y solamente se incluye una referencia al lugar en el que se encuentra.";
 answers[11] = 1;
 units[11] = ['76'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10179. Examen TIC A1 2014";
 preguntaids[11] = 10179


//  Id pregunta: 9377 Año de creación de pregunta: 2014
 questions[12]= "13)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[12]= new Array();
 choices[12][0] = "Contiene la clave privada.";
 choices[12][1] = "Cumple la sintaxis PKCS #21.";
 choices[12][2] = "Est&aacute; codificado en un formato no binario.";
 choices[12][3] = "No se puede convertir a formato .PEM.";
 answers[12] = 0;
 units[12] = ['76'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9377. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[12] = 9377


//  Id pregunta: 10283 Año de creación de pregunta: 2015
 questions[13]= "14)  Indique la afirmaci&oacute;n INCORRECTA sobre el algoritmo DES (Data Encryption Standard)";
 choices[13]= new Array();
 choices[13][0] = "Est&aacute; basado en las redes de Feistel";
 choices[13][1] = "Usa una clave de 56 bits";
 choices[13][2] = "Roto en 1997 mediante b&uacute;squeda exhaustiva";
 choices[13][3] = "Para hacerlo m&aacute;s robusto se utiliza el doble DES 2-DES";
 answers[13] = 3;
 units[13] = ['76'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10283. ";
 preguntaids[13] = 10283


//  Id pregunta: 10706 Año de creación de pregunta: 2015
 questions[14]= "15)  En el est&aacute;ndar XADES de firma electr&oacute;nica, el perfil que incluye un TimeStamp a las referencias de las CRLs, es:";
 choices[14]= new Array();
 choices[14][0] = "XADES-X";
 choices[14][1] = "XADES-T";
 choices[14][2] = "XADES-XL";
 choices[14][3] = "XADES-C";
 answers[14] = 0;
 units[14] = ['76'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10706. ";
 preguntaids[14] = 10706


//  Id pregunta: 10705 Año de creación de pregunta: 2015
 questions[15]= "16)  De entre los siguientes est&aacute;ndares XML del W3C, &iquest;Cu&aacute;l define pol&iacute;ticas de control de acceso de usuarios?";
 choices[15]= new Array();
 choices[15][0] = "DSML";
 choices[15][1] = "XrML";
 choices[15][2] = "XKMS";
 choices[15][3] = "XACML";
 answers[15] = 3;
 units[15] = ['76'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 10705. ";
 preguntaids[15] = 10705


//  Id pregunta: 10247 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Qu&eacute; algoritmo genera un Hash de mayor longitud?";
 choices[16]= new Array();
 choices[16][0] = "MD5";
 choices[16][1] = "SHA-1";
 choices[16][2] = "SHA-384";
 choices[16][3] = "WHIRLPOOL";
 answers[16] = 3;
 units[16] = ['76'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10247. WHIRLPOOL produce un Hash de 512 bits";
 preguntaids[16] = 10247


//  Id pregunta: 9826 Año de creación de pregunta: 2015
 questions[17]= "18)  Se&ntilde;ale aquel que se corresponde con un protocolo de establecimiento de claves entre partes:";
 choices[17]= new Array();
 choices[17][0] = "Diffie Hellman";
 choices[17][1] = "RIPEMD";
 choices[17][2] = "Rabbit";
 choices[17][3] = "Blowfish";
 answers[17] = 0;
 units[17] = ['76'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9826. ";
 preguntaids[17] = 9826


//  Id pregunta: 9645 Año de creación de pregunta: 2014
 questions[18]= "19)  Si un intruso intenta cotillear (eavesdropping) durante el proceso de generaci&oacute;n de las claves generadas por criptograf&iacute;a cu&aacute;ntica:";
 choices[18]= new Array();
 choices[18][0] = "El sistema lo rechaza";
 choices[18][1] = "Las claves generadas se ven alteradas y se descubre el intento de intrusi&oacute;n";
 choices[18][2] = "Al intentar usar las claves interceptadas le propone el sistema un challenge o desaf&iacute;o adicional";
 choices[18][3] = "S&oacute;lo puede hacerlo si se usan cifradores de flujo";
 answers[18] = 1;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9645. ";
 preguntaids[18] = 9645


//  Id pregunta: 9601 Año de creación de pregunta: 2014
 questions[19]= "20)  CRAM-MD5 definido en el RFC 2195 es una t&eacute;cnica criptogr&aacute;fica que consiste en:";
 choices[19]= new Array();
 choices[19][0] = "Un mecanismo de autenticaci&oacute;n challenge-response para autenticaci&oacute;n de usuarios POP e IMAP, entre otros.";
 choices[19][1] = "Un mecanismo de cifrado sim&eacute;trico de bloque basado en una clave compartida y derivaci&oacute;n de subclaves usando MD5.";
 choices[19][2] = "Un algoritmo de firma electr&oacute;nica basado en MD5, ideado para escenarios en los que no puede usarse criptograf&iacute;a asim&eacute;trica.";
 choices[19][3] = "Un algoritmo de cifrado sim&eacute;trico de flujo (stream) basado una clave compartida, en MD5 y un LFSR predeterminado.";
 answers[19] = 0;
 units[19] = ['76'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9601. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[19] = 9601


//  Id pregunta: 9090 Año de creación de pregunta: 2014
 questions[20]= "21)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[20]= new Array();
 choices[20][0] = "MD5 genera un hash de 128 bits.";
 choices[20][1] = "SHA-1 genera un hash de 160 bits.";
 choices[20][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[20][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[20] = 3;
 units[20] = ['76'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9090. Examen TIC-A1 2013";
 preguntaids[20] = 9090


//  Id pregunta: 10449 Año de creación de pregunta: 2015
 questions[21]= "22)  En relaci&oacute;n con los modos de operaci&oacute;n fundamentales de los algoritmos hash:";
 choices[21]= new Array();
 choices[21][0] = "El modo de operaci&oacute;n MDC sirve para la verificaci&oacute;n de integridad de mensajes";
 choices[21][1] = "MAC permite comprobar tanto la integridad como la autenticidad del origen de un mensaje a trav&eacute;s de una clave compartida.";
 choices[21][2] = "HMAC de IPSec es un ejemplo de implementaci&oacute;n de MAC.";
 choices[21][3] = "Todas las respuestas son verdaderas";
 answers[21] = 3;
 units[21] = ['76'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10449. ";
 preguntaids[21] = 10449


//  Id pregunta: 10282 Año de creación de pregunta: 2015
 questions[22]= "23)  Dado un mensaje, m, y su cifrado mediante OTP (one time pad), c. &iquest;se puede obtener la clave utilizada en el cifrado?";
 choices[22]= new Array();
 choices[22][0] = "No, no se puede";
 choices[22][1] = "S&iacute;, la clave es k = m XOR c";
 choices[22][2] = "S&oacute;lo pueden calcularse la mitad de los bits de la clave";
 choices[22][3] = "S&iacute;, la clave es k = m XOR m";
 answers[22] = 1;
 units[22] = ['76'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10282. ";
 preguntaids[22] = 10282


//  Id pregunta: 9374 Año de creación de pregunta: 2014
 questions[23]= "24)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[23]= new Array();
 choices[23][0] = "Contiene la clave privada.";
 choices[23][1] = "Cumple la sintaxis PKCS #21.";
 choices[23][2] = "Est&aacute; codificado en un formato no binario.";
 choices[23][3] = "No se puede convertir a formato .PEM.";
 answers[23] = 0;
 units[23] = ['76'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9374. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[23] = 9374


//  Id pregunta: 9642 Año de creación de pregunta: 2014
 questions[24]= "25)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[24]= new Array();
 choices[24][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[24][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[24][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[24][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[24] = 0;
 units[24] = ['76'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9642. ";
 preguntaids[24] = 9642


//  Id pregunta: 9643 Año de creación de pregunta: 2014
 questions[25]= "26)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[25]= new Array();
 choices[25][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[25][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[25][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[25][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[25] = 0;
 units[25] = ['76'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9643. ";
 preguntaids[25] = 9643


//  Id pregunta: 10451 Año de creación de pregunta: 2015
 questions[26]= "27)  Sobre la criptograf&iacute;a h&iacute;brida:";
 choices[26]= new Array();
 choices[26][0] = "El transmisor cifra el mensaje con una clave sim&eacute;trica o de sesi&oacute;n, y a su vez cifra esa clave sim&eacute;trica con la clave privada del destinatario.";
 choices[26][1] = "Es utilizada por Pretty Good Privacy.";
 choices[26][2] = "Tambi&eacute;n se conocen como &ldquo;sobre digital&rdquo;.";
 choices[26][3] = "B) y C) son correctas.";
 answers[26] = 3;
 units[26] = ['76'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 10451. ";
 preguntaids[26] = 10451


//  Id pregunta: 9380 Año de creación de pregunta: 2014
 questions[27]= "28)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[27]= new Array();
 choices[27][0] = "128 bits";
 choices[27][1] = "160 bits";
 choices[27][2] = "224 bits";
 choices[27][3] = "256 bits";
 answers[27] = 1;
 units[27] = ['76'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9380. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[27] = 9380


//  Id pregunta: 10174 Año de creación de pregunta: 2015
 questions[28]= "29)  Respecto al algoritmo de cifrado RC5, se&ntilde;ale la respuesta correcta:";
 choices[28]= new Array();
 choices[28][0] = "Se trata de un algoritmo de cifrado asim&eacute;trico.";
 choices[28][1] = "No utiliza rotaciones dependientes de los datos para su proceso.";
 choices[28][2] = "Posee un n&uacute;mero fijo de rotaciones para su proceso.";
 choices[28][3] = "Posee tama&ntilde;o variable de clave.";
 answers[28] = 3;
 units[28] = ['76'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 10174. Examen TIC A1 2014";
 preguntaids[28] = 10174


//  Id pregunta: 10284 Año de creación de pregunta: 2015
 questions[29]= "30)  Sal (salt) en criptograf&iacute;a&hellip;";
 choices[29]= new Array();
 choices[29][0] = "Es un algoritmo de cifrado de bloques";
 choices[29][1] = "Comprende bits aleatorios que se usan como una de las entradas en una funci&oacute;n derivadora de claves.";
 choices[29][2] = "Las sales hacen mucho m&aacute;s lentos los ataques de diccionario y los ataques de fuerza bruta";
 choices[29][3] = "B y C son correctas";
 answers[29] = 3;
 units[29] = ['76'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10284. ";
 preguntaids[29] = 10284


