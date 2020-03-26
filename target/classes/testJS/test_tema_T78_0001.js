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
//  Id pregunta: 7266 Año de creación de pregunta: 2010
 questions[0]= "1)  Servicios de una Autoridad de Certificaci&oacute;n esenciales son:";
 choices[0]= new Array();
 choices[0][0] = "Generaci&oacute;n y gesti&oacute;n de claves criptogr&aacute;ficas";
 choices[0][1] = "Servicios de directorio";
 choices[0][2] = "Registro de usuarios mediante el que se acredita la identidad";
 choices[0][3] = "Todas las respuestas anteriores son correctas";
 answers[0] = 3;
 units[0] = ['78'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7266. ";
 preguntaids[0] = 7266


//  Id pregunta: 1280 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;De qu&eacute; material est&aacute; hecha la tarjeta f&iacute;sica del DNI-electr&oacute;nico?";
 choices[1]= new Array();
 choices[1][0] = "Policloruro de vinilo.";
 choices[1][1] = "Policarbonato.";
 choices[1][2] = "Polietileno de alta densidad.";
 choices[1][3] = "Fibra de vidrio.";
 answers[1] = 1;
 units[1] = ['78'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1280. ";
 preguntaids[1] = 1280


//  Id pregunta: 3467 Año de creación de pregunta: 2006
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es un sistema operativo utilizado en la arquitectura de un sistema de tarjeta inteligente?";
 choices[2]= new Array();
 choices[2][0] = "MultOS";
 choices[2][1] = "Jini";
 choices[2][2] = "Java Card";
 choices[2][3] = "Windows SC";
 answers[2] = 1;
 units[2] = ['78'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3467. ";
 preguntaids[2] = 3467


//  Id pregunta: 1883 Año de creación de pregunta: 2016
 questions[3]= "4)  EI Documento Nacional de Identidad electr&oacute;nico:";
 choices[3]= new Array();
 choices[3][0] = "Acredita electr&oacute;nicamente la identidad personal de su titular y permite la firma electr&oacute;nica de documentos";
 choices[3][1] = "S&oacute;lo se podr&aacute; utilizar para acreditar la identidad de su titular";
 choices[3][2] = "Permitir&aacute; acreditar la identidad de las personas f&iacute;sicas o jur&iacute;dicas";
 choices[3][3] = "Puede almacenar informaci&oacute;n penal y sanitario del titular.";
 answers[3] = 0;
 units[3] = ['78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1883. ";
 preguntaids[3] = 1883


//  Id pregunta: 1795 Año de creación de pregunta: 2016
 questions[4]= "5)  Los certificados electr&oacute;nicos reconocidos incorporados al DNI electr&oacute;nico tendr&aacute;n un per&iacute;odo de vigencia de:";
 choices[4]= new Array();
 choices[4][0] = "24 meses";
 choices[4][1] = "30 meses";
 choices[4][2] = "5 a&ntilde;os";
 choices[4][3] = "El per&iacute;odo de validez del documento nacional de identidad.";
 answers[4] = 2;
 units[4] = ['78'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1795. ";
 preguntaids[4] = 1795


//  Id pregunta: 5629 Año de creación de pregunta: 2007
 questions[5]= "6)  El DNI digital permitir&aacute;:";
 choices[5]= new Array();
 choices[5][0] = "Firmar y cifrar.";
 choices[5][1] = "Solo firmar.";
 choices[5][2] = "Solo cifrar.";
 choices[5][3] = "Solo funciones 3DES";
 answers[5] = 1;
 units[5] = ['78'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 5629. ";
 preguntaids[5] = 5629


//  Id pregunta: 5508 Año de creación de pregunta: 2007
 questions[6]= "7)  De entre los siguientes, &iquest;cu&aacute;l no es uno de los servicios de certificaci&oacute;n ofrecidos actualmente por la F&aacute;brica Nacional de Moneda y Timbre?:";
 choices[6]= new Array();
 choices[6][0] = "Fechado digital.";
 choices[6][1] = "Validaci&oacute;n on-line de certificados.";
 choices[6][2] = "Voto electr&oacute;nico en Juntas Generales de Sociedades";
 choices[6][3] = "Login &uacute;nico en sistemas Windows, Linux y Unix";
 answers[6] = 3;
 units[6] = ['78'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 5508. ";
 preguntaids[6] = 5508


//  Id pregunta: 6904 Año de creación de pregunta: 2010
 questions[7]= "8)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[7]= new Array();
 choices[7][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a asim&eacute;trica.";
 choices[7][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[7][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[7][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[7] = 0;
 units[7] = ['78'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 6904. TIC A 2009";
 preguntaids[7] = 6904


//  Id pregunta: 5776 Año de creación de pregunta: 2007
 questions[8]= "9)  OCSP es:";
 choices[8]= new Array();
 choices[8][0] = "un protocolo de comprobaci&oacute;n de estado de un certificado";
 choices[8][1] = "un algoritmo de hash";
 choices[8][2] = "un algoritmo de cifrado sim&eacute;trico";
 choices[8][3] = "un algoritmo de cifrado asim&eacute;trico";
 answers[8] = 0;
 units[8] = ['78'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 5776. ";
 preguntaids[8] = 5776


//  Id pregunta: 7379 Año de creación de pregunta: 2010
 questions[9]= "10)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Autoridad de Certificaci&oacute;n";
 choices[9][1] = "Autoridad de Registro";
 choices[9][2] = "Centro de Confianza";
 choices[9][3] = "Autoridad de Revocaci&oacute;n";
 answers[9] = 0;
 units[9] = ['78'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7379. Examen TIC B 2009";
 preguntaids[9] = 7379


//  Id pregunta: 3184 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[10]= new Array();
 choices[10][0] = "Formato de certificado digital";
 choices[10][1] = "Formato de sobre digital";
 choices[10][2] = "Cifrado con clave privada";
 choices[10][3] = "Sintaxis de la clave privada";
 answers[10] = 1;
 units[10] = ['78'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3184. ";
 preguntaids[10] = 3184


//  Id pregunta: 7656 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization/International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas y protocolos de comunicaci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "7816";
 choices[11][1] = "7816-3.";
 choices[11][2] = "7816-4.";
 choices[11][3] = "7816-5.";
 answers[11] = 1;
 units[11] = ['78'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7656. Map 2006";
 preguntaids[11] = 7656


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[12]= "13)  Respecto al protocolo OCSP, es FALSO que:";
 choices[12]= new Array();
 choices[12][0] = "Los mensajes OCSP son codificados en ASN.1.";
 choices[12][1] = "Est&aacute; definido en el RFC 2560.";
 choices[12][2] = "Tanto la petici&oacute;n como la respuesta deben ir firmadas.";
 choices[12][3] = "Puede usar SMTP como mecanismo de transporte.";
 answers[12] = 2;
 units[12] = ['78'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 796. AGE A2 2015";
 preguntaids[12] = 796


//  Id pregunta: 7262 Año de creación de pregunta: 2010
 questions[13]= "14)  PKCS#12";
 choices[13]= new Array();
 choices[13][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[13][1] = "Especifica una API, por la que los dispositivos que contienen informaci&oacute;n criptogr&aacute;fica realizan funciones criptogr&aacute;ficas";
 choices[13][2] = "El formato del sobre digital";
 choices[13][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[13] = 0;
 units[13] = ['78'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7262. ";
 preguntaids[13] = 7262


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[14]= new Array();
 choices[14][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[14][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[14][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[14][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[14] = 1;
 units[14] = ['78'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 795. AGE A1 2015";
 preguntaids[14] = 795


//  Id pregunta: 7377 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[15]= new Array();
 choices[15][0] = "ISO-7816-1";
 choices[15][1] = "PCKS#11";
 choices[15][2] = "ISO-17789";
 choices[15][3] = "ISO-7815-1";
 answers[15] = 0;
 units[15] = ['78'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7377. Examen TIC B 2009";
 preguntaids[15] = 7377


//  Id pregunta: 7714 Año de creación de pregunta: 2010
 questions[16]= "17)  Seg&uacute;n el est&aacute;ndar ISO 7816 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientes contactos se utiliza para la se&ntilde;al de reloj?";
 choices[16]= new Array();
 choices[16][0] = "C2.";
 choices[16][1] = "C3.";
 choices[16][2] = "C5.";
 choices[16][3] = "C6.";
 answers[16] = 1;
 units[16] = ['78'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7714. Map 2007";
 preguntaids[16] = 7714


//  Id pregunta: 6695 Año de creación de pregunta: 2009
 questions[17]= "18)  Indique la ventaja de los sistemas RFID (Radio Frecuency Identification) de baja frecuencia:";
 choices[17]= new Array();
 choices[17][0] = "Soportan la lectura simult&aacute;nea de varias etiquetas";
 choices[17][1] = "El coste de las etiquetas es bajo debido al peque&ntilde;o tama&ntilde;o de su antena";
 choices[17][2] = "Poseen alta tasas de transmisi&oacute;n";
 choices[17][3] = "Su se&ntilde;al atraviesa materiales tales como el agua, la madera y el aluminio";
 answers[17] = 3;
 units[17] = ['78'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 6695. ";
 preguntaids[17] = 6695


//  Id pregunta: 3229 Año de creación de pregunta: 2009
 questions[18]= "19)  &iquest;C&uacute;al es la afirmaci&oacute;n falsa si hablamos de LDAP?";
 choices[18]= new Array();
 choices[18][0] = "Usa TCP/IP";
 choices[18][1] = "Reemplaza a X.500";
 choices[18][2] = "El protocolo usa ASN.1 y los mensajes se codifican y transmiten usando BER";
 choices[18][3] = "Permite la operaci&oacute;n MODIFY";
 answers[18] = 1;
 units[18] = ['78'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3229. RFC 4511";
 preguntaids[18] = 3229


//  Id pregunta: 2936 Año de creación de pregunta: 2005
 questions[19]= "20)  Los DN, en LDAP, se representan en:";
 choices[19]= new Array();
 choices[19][0] = "XML";
 choices[19][1] = "HTML";
 choices[19][2] = "Texto plano";
 choices[19][3] = "ASN.1";
 answers[19] = 2;
 units[19] = ['77', '78'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2936. RFC 4514";
 preguntaids[19] = 2936


//  Id pregunta: 3485 Año de creación de pregunta: 2006
 questions[20]= "21)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[20]= new Array();
 choices[20][0] = "Huella";
 choices[20][1] = "Biom&eacute;trica";
 choices[20][2] = "JBOD";
 choices[20][3] = "Antropomorfismo";
 answers[20] = 1;
 units[20] = ['78'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3485. ";
 preguntaids[20] = 3485


//  Id pregunta: 6566 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Es capaz el DNI electr&oacute;nico de identificar biom&eacute;tricamente al ciudadano?";
 choices[21]= new Array();
 choices[21][0] = "S&iacute;, a trav&eacute;s del iris ocular";
 choices[21][1] = "S&iacute;, a trav&eacute;s de la firma manuscrita";
 choices[21][2] = "No, no dispone de esa capacidad";
 choices[21][3] = "S&iacute;, a trav&eacute;s de la huella dactilar";
 answers[21] = 3;
 units[21] = ['78'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 6566. ";
 preguntaids[21] = 6566


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[22]= new Array();
 choices[22][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[22][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[22][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[22][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[22] = 3;
 units[22] = ['78'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 794. AGE A1 2015";
 preguntaids[22] = 794


//  Id pregunta: 5724 Año de creación de pregunta: 2007
 questions[23]= "24)  Si exportamos un certificado incluyendo su clave privada desde el navegador MS Internet Explorer 6, que extensi&oacute;n tendr&aacute; el fichero resultante?:";
 choices[23]= new Array();
 choices[23][0] = "p12";
 choices[23][1] = ".cer";
 choices[23][2] = ".jks";
 choices[23][3] = ".pfx";
 answers[23] = 3;
 units[23] = ['78'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 5724. ";
 preguntaids[23] = 5724


//  Id pregunta: 5978 Año de creación de pregunta: 2007
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization /International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas yprotocolos de comunicaci&oacute;n?";
 choices[24]= new Array();
 choices[24][0] = "7816-2";
 choices[24][1] = "7816-3";
 choices[24][2] = "7816-4";
 choices[24][3] = "7816-5";
 answers[24] = 1;
 units[24] = ['78'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 5978. ";
 preguntaids[24] = 5978


//  Id pregunta: 2464 Año de creación de pregunta: 2002
 questions[25]= "26)  El &quot;proyecto CERES&quot;:";
 choices[25]= new Array();
 choices[25][0] = "Establece c&oacute;mo deben de ser los certificados que se usen para realizar la firma electr&oacute;nica";
 choices[25][1] = "Hace que se pueda usar a la Fabrica Nacional de la Moneda y Timbre de forma gratuita por todos los espa&ntilde;oles";
 choices[25][2] = "Se define en el &aacute;mbito de la relaci&oacute;n de los ciudadanos con las administraciones y &eacute;stas entre si.";
 choices[25][3] = "Designa a la Fabrica Nacional de la Moneda y Timbre como autoridad de certificaci&oacute;n para cualquier transacci&oacute;n electr&oacute;nica";
 answers[25] = 2;
 units[25] = ['78'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2464. ";
 preguntaids[25] = 2464


//  Id pregunta: 2541 Año de creación de pregunta: 2004
 questions[26]= "27)  Los tipos de tarjetas inteligentes son";
 choices[26]= new Array();
 choices[26][0] = "de acoplamiento";
 choices[26][1] = "de vecindad";
 choices[26][2] = "de proximidad";
 choices[26][3] = "todas las anteriores";
 answers[26] = 3;
 units[26] = ['78'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2541. ";
 preguntaids[26] = 2541


//  Id pregunta: 7263 Año de creación de pregunta: 2010
 questions[27]= "28)  PKCS#10 define";
 choices[27]= new Array();
 choices[27][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[27][1] = "Sintaxis para las peticiones de certificados";
 choices[27][2] = "El formato del sobre digital";
 choices[27][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[27] = 1;
 units[27] = ['78'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7263. ";
 preguntaids[27] = 7263


//  Id pregunta: 5861 Año de creación de pregunta: 2007
 questions[28]= "29)  Se&ntilde;ale la opci&oacute;n verdadera en relaci&oacute;n a las infraestructura de clave p&uacute;blica&hellip;";
 choices[28]= new Array();
 choices[28][0] = "Se ha de garantizar que ning&uacute;n usuario, salvo aquel para quien se ha generado una pareja de claves de un certificado, pueda jam&aacute;s llegar a disponer de ellas.";
 choices[28][1] = "La utilizaci&oacute;n de hardware criptogr&aacute;fico (HSM) tiene sentido en las Autoridades de Certificaci&oacute;n (CA) pero no as&iacute; en las Autoridades de Registro (RA)";
 choices[28][2] = "Es importante que la CA disponga de certificaci&oacute;n FIPS 140-2";
 choices[28][3] = "EMV es un tipo de certificado que no responde al est&aacute;ndar X.509";
 answers[28] = 3;
 units[28] = ['78'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 5861. ";
 preguntaids[28] = 5861


//  Id pregunta: 5439 Año de creación de pregunta: 2007
 questions[29]= "30)  Los comandos y distribuci&oacute;n de memoria de una tarjeta criptogr&aacute;fica se especifican en el est&aacute;ndar";
 choices[29]= new Array();
 choices[29][0] = "ISO 7816-2";
 choices[29][1] = "ISO 7816-3";
 choices[29][2] = "ISO 7816-4";
 choices[29][3] = "ISO 7816-5";
 answers[29] = 2;
 units[29] = ['78'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 5439. ";
 preguntaids[29] = 5439


//  Id pregunta: 6872 Año de creación de pregunta: 2010
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes NO es un procedimiento adecuado para la consulta de la validez de un certificado digital emitido por un prestador de servicios de confianza?";
 choices[30]= new Array();
 choices[30][0] = "Declaraci&oacute;n de pr&aacute;cticas de certificaci&oacute;n.";
 choices[30][1] = "Listas de certificados revocados.";
 choices[30][2] = "LDAP.";
 choices[30][3] = "OCSP.";
 answers[30] = 0;
 units[30] = ['78'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 6872. TIC A 2009";
 preguntaids[30] = 6872


//  Id pregunta: 6117 Año de creación de pregunta: 2003
 questions[31]= "32)  Seg&uacute;n el est&aacute;ndar ISO 7816-2 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientescontactos se utiliza para la se&ntilde;al de reloj?:";
 choices[31]= new Array();
 choices[31][0] = "C2";
 choices[31][1] = "C3";
 choices[31][2] = "C5";
 choices[31][3] = "C6";
 answers[31] = 1;
 units[31] = ['78'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 6117. Examen TIC A1 MAP 2007";
 preguntaids[31] = 6117


//  Id pregunta: 7378 Año de creación de pregunta: 2010
 questions[32]= "33)  El n&uacute;mero m&aacute;ximo de certificados que se pueden almacenar en una  tarjeta criptogr&aacute;fica CERES es:";
 choices[32]= new Array();
 choices[32][0] = "4";
 choices[32][1] = "5";
 choices[32][2] = "10";
 choices[32][3] = "7";
 answers[32] = 2;
 units[32] = ['78'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7378. Examen TIC B 2009";
 preguntaids[32] = 7378


//  Id pregunta: 7264 Año de creación de pregunta: 2010
 questions[33]= "34)  El est&aacute;ndar X.509 v3 define los distintos elementos que debe contener un certificado, entre los que destacan:";
 choices[33]= new Array();
 choices[33][0] = "N&uacute;mero de serie del certificado";
 choices[33][1] = "Nombre de la autoridad de certificaci&oacute;n";
 choices[33][2] = "Firma digital de la autoridad  certificadora";
 choices[33][3] = "Todas las respuestas anteriores son correctas";
 answers[33] = 3;
 units[33] = ['78'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7264. ";
 preguntaids[33] = 7264


//  Id pregunta: 6574 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;C&oacute;mo se conecta el DNI electr&oacute;nico al ordenador personal del ciudadano?";
 choices[34]= new Array();
 choices[34][0] = "Es necesario un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en las comisar&iacute;as";
 choices[34][1] = "A trav&eacute;s de un lector de tarjetas que cumpla el standard ISO-7816";
 choices[34][2] = "Con un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en establecimientos comerciales";
 choices[34][3] = "No es posible conectarlo a ordenadores personales, s&oacute;lo los especialmente habilitados para ello por la Direcci&oacute;n General de la Polic&iacute;a";
 answers[34] = 1;
 units[34] = ['78'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 6574. ";
 preguntaids[34] = 6574


//  Id pregunta: 7260 Año de creación de pregunta: 2010
 questions[35]= "36)  Dentro de los Est&aacute;ndares de Criptograf&iacute;a de Clave P&uacute;blica (PKCS)";
 choices[35]= new Array();
 choices[35][0] = "PKCS#1: Corresponde al algoritmo RSA";
 choices[35][1] = "PKCS#3: Corresponde al algoritmo Diffie-Hellman";
 choices[35][2] = "PKCS#5: Cifrado con clave privada";
 choices[35][3] = "Todas las respuestas anteriores son correctas";
 answers[35] = 3;
 units[35] = ['78'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7260. ";
 preguntaids[35] = 7260


//  Id pregunta: 5879 Año de creación de pregunta: 2007
 questions[36]= "37)  Si Alice quiere transmitir un documento cifrado (sin autentcaci&oacute;n) hacia Bob utilizando un algoritmo de clave asim&eacute;trica";
 choices[36]= new Array();
 choices[36][0] = "Debe cifrarlo con la clave p&uacute;blica de Bob";
 choices[36][1] = "Debe cifrarlo con la clave privada de Bob";
 choices[36][2] = "Debe cifrarlo con la clave privada de Alice";
 choices[36][3] = "Debe cifrarlo con la clave p&uacute;blica de Alice";
 answers[36] = 0;
 units[36] = ['78'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5879. ";
 preguntaids[36] = 5879


//  Id pregunta: 7380 Año de creación de pregunta: 2010
 questions[37]= "38)  Revocar un certificado electr&oacute;nico significa:";
 choices[37]= new Array();
 choices[37][0] = "Extender su validez m&aacute;s all&aacute; del tiempo l&iacute;mite inicialmente establecido";
 choices[37][1] = "Anular su validez antes de la fecha de caducidad que consta en el mismo";
 choices[37][2] = "Agotar su vida &uacute;til al haberse llegado al l&iacute;mite de vigencia del mismo";
 choices[37][3] = "Desacoplar un certificado de la tarjeta criptogr&aacute;fica en la que reside";
 answers[37] = 1;
 units[37] = ['78'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7380. Examen TIC B 2009";
 preguntaids[37] = 7380


//  Id pregunta: 6572 Año de creación de pregunta: 2003
 questions[38]= "39)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[38]= new Array();
 choices[38][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[38][1] = "Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[38][2] = "No tiene valor jur&iacute;dico";
 choices[38][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[38] = 1;
 units[38] = ['78'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6572. ";
 preguntaids[38] = 6572


//  Id pregunta: 1533 Año de creación de pregunta: 2016
 questions[39]= "40)  Los certificados de identidad p&uacute;blica que est&aacute;n contenidos en el DNI electr&oacute;nico pueden ser revocados por:";
 choices[39]= new Array();
 choices[39][0] = "Compromiso de la clave p&uacute;blica de la Autoridad de Certificaci&oacute;n de la Direcci&oacute;n General de la Polic&iacute;a.";
 choices[39][1] = "Declaraci&oacute;n de que el ciudadano no tiene capacidad de firma (pr&oacute;digo).";
 choices[39][2] = "Tras la renovaci&oacute;n en todos los casos.";
 choices[39][3] = "Compromiso de la clave p&uacute;blica del ciudadano,";
 answers[39] = 1;
 units[39] = ['78'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1533. ";
 preguntaids[39] = 1533


//  Id pregunta: 6868 Año de creación de pregunta: 2010
 questions[40]= "41)  Acerca de las Autoridades de sellado de tiempo:";
 choices[40]= new Array();
 choices[40][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[40][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[40][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[40][3] = "Ninguna de las anteriores es correcta.";
 answers[40] = 1;
 units[40] = ['78'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6868. TIC A 2009";
 preguntaids[40] = 6868


//  Id pregunta: 1104 Año de creación de pregunta: 2016
 questions[41]= "42)  La prestaci&oacute;n de los servicios de validaci&oacute;n del DNI electr&oacute;nico se realiza en base a:";
 choices[41]= new Array();
 choices[41][0] = "Online Certificate Status Protocol (OCSP).";
 choices[41][1] = "Online Services Protocol (OSP).";
 choices[41][2] = "Services Status Protocol (SSP).";
 choices[41][3] = "Online Status Services Certificate (OSSC).";
 answers[41] = 0;
 units[41] = ['78'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1104. ";
 preguntaids[41] = 1104


//  Id pregunta: 7265 Año de creación de pregunta: 2010
 questions[42]= "43)  Una Autoridad de Validaci&oacute;n (VA) puede realizar distintos tipos de servicios de validaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Descarga de CRLs";
 choices[42][1] = "Via OCSP";
 choices[42][2] = "A y B son correctas";
 choices[42][3] = "A y B son incorrectas";
 answers[42] = 2;
 units[42] = ['78'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7265. ";
 preguntaids[42] = 7265


//  Id pregunta: 7510 Año de creación de pregunta: 2010
 questions[43]= "44)  En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "ISO 7816-1.";
 choices[43][1] = "ISO 7816-2.";
 choices[43][2] = "ISO 7816-3.";
 choices[43][3] = "ISO 7816-4.";
 answers[43] = 2;
 units[43] = ['78'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7510. Map 2005";
 preguntaids[43] = 7510


//  Id pregunta: 5775 Año de creación de pregunta: 2007
 questions[44]= "45)  NO es una autoridad de certificaci&oacute;n electr&oacute;nica en Espa&ntilde;a";
 choices[44]= new Array();
 choices[44][0] = "IDCAT";
 choices[44][1] = "CAMERFIRMA";
 choices[44][2] = "CATCERT";
 choices[44][3] = "IZEMPE";
 answers[44] = 0;
 units[44] = ['78'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 5775. ";
 preguntaids[44] = 5775


//  Id pregunta: 6564 Año de creación de pregunta: 2003
 questions[45]= "46)  Se&ntilde;ale cual de los siguientes datos se encuentra en la zona p&uacute;blica del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[45]= new Array();
 choices[45][0] = "Certificado de autenticaci&oacute;n";
 choices[45][1] = "Certificados de la autoridad de certificaci&oacute;n";
 choices[45][2] = "Datos biom&eacute;tricos";
 choices[45][3] = "Claves privadas del ciudadano";
 answers[45] = 1;
 units[45] = ['78'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 6564. ";
 preguntaids[45] = 6564


//  Id pregunta: 3067 Año de creación de pregunta: 2002
 questions[46]= "47)  TTP:";
 choices[46]= new Array();
 choices[46][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[46][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[46][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[46][3] = "Todas son falsas";
 answers[46] = 2;
 units[46] = ['77', '78'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3067. ";
 preguntaids[46] = 3067


//  Id pregunta: 3024 Año de creación de pregunta: 2002
 questions[47]= "48)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[47]= new Array();
 choices[47][0] = "Los usuarios";
 choices[47][1] = "Los datos";
 choices[47][2] = "Los documentos";
 choices[47][3] = "Los mensajes";
 answers[47] = 0;
 units[47] = ['77', '78'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3024. ";
 preguntaids[47] = 3024


//  Id pregunta: 6567 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[48]= new Array();
 choices[48][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[48][1] = "La plataforma @firma";
 choices[48][2] = "La Entidad P&uacute;blica Red.es";
 choices[48][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[48] = 3;
 units[48] = ['78'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6567. Real Decreto 415/2016";
 preguntaids[48] = 6567


//  Id pregunta: 6569 Año de creación de pregunta: 2003
 questions[49]= "50)  Una de las zonas de datos que se encuentran dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico es la denominada zona de seguridad. Esta zona que almacena, entre otros, los datos biom&eacute;tricos, es accesible por:";
 choices[49]= new Array();
 choices[49][0] = "El ciudadano";
 choices[49][1] = "El ciudadano y la Direcci&oacute;n General de la Polic&iacute;a";
 choices[49][2] = "La Direcci&oacute;n General de la Polic&iacute;a";
 choices[49][3] = "Es una zona p&uacute;blica";
 answers[49] = 2;
 units[49] = ['78'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6569. ";
 preguntaids[49] = 6569


//  Id pregunta: 7376 Año de creación de pregunta: 2010
 questions[50]= "51)  La entidad que identifica de forma inequ&iacute;voca al solicitante de un certificado electr&oacute;nico  es la:";
 choices[50]= new Array();
 choices[50][0] = "Autoridad de Registro";
 choices[50][1] = "Autoridad de Certificaci&oacute;n";
 choices[50][2] = "Autoridad de Revocaci&oacute;n";
 choices[50][3] = "Autoridad de Usurpaci&oacute;n";
 answers[50] = 0;
 units[50] = ['78'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7376. Examen TIC B 2009";
 preguntaids[50] = 7376


//  Id pregunta: 7175 Año de creación de pregunta: 2010
 questions[51]= "52)  Una infraestructura de clave p&uacute;blica (PKI) es";
 choices[51]= new Array();
 choices[51][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[51][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[51][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[51][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[51] = 3;
 units[51] = ['78'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7175. Castilla La Mancha 2009";
 preguntaids[51] = 7175


//  Id pregunta: 7261 Año de creación de pregunta: 2010
 questions[52]= "53)  PKCS#7 se centra en";
 choices[52]= new Array();
 choices[52][0] = "El formato del sobre digital";
 choices[52][1] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 choices[52][2] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[52][3] = "Todas las respuestas anteriores son correctas";
 answers[52] = 0;
 units[52] = ['78'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7261. ";
 preguntaids[52] = 7261


//  Id pregunta: 6575 Año de creación de pregunta: 2003
 questions[53]= "54)  Respecto a la validez de los certificados del DNI electr&oacute;nico, se&ntilde;ale la falsa:";
 choices[53]= new Array();
 choices[53][0] = "La p&eacute;rdida de validez del DNI implica su p&eacute;rdida de validez";
 choices[53][1] = "La renovaci&oacute;n implica la expedici&oacute;n de nuevos certificados";
 choices[53][2] = "La expedici&oacute;n de duplicados implica la expedici&oacute;n de nuevos certificados";
 choices[53][3] = "La caducidad de los certificados implica la renovaci&oacute;n del DNI";
 answers[53] = 3;
 units[53] = ['78'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6575. ";
 preguntaids[53] = 6575


//  Id pregunta: 6568 Año de creación de pregunta: 2003
 questions[54]= "55)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Una de las zonas s&oacute;lo es accesible por la Direcci&oacute;n General de la Polic&iacute;a. Se&ntilde;ale su nombre:";
 choices[54]= new Array();
 choices[54][0] = "Zona p&uacute;blica";
 choices[54][1] = "Zona de seguridad";
 choices[54][2] = "Zona privada";
 choices[54][3] = "Zona confidencial";
 answers[54] = 1;
 units[54] = ['78'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 6568. ";
 preguntaids[54] = 6568


//  Id pregunta: 7712 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[55]= new Array();
 choices[55][0] = "RD 153/2005, de 14 de enero.";
 choices[55][1] = "RD 1553/2005, de 23 de diciembre.";
 choices[55][2] = "RD 1555/2003, de 29 de mayo.";
 choices[55][3] = "RD 155/2003, de 15 de septiembre.";
 answers[55] = 1;
 units[55] = ['78'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7712. Map 2007";
 preguntaids[55] = 7712


//  Id pregunta: 2931 Año de creación de pregunta: 2002
 questions[56]= "57)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[56]= new Array();
 choices[56][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[56][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[56][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[56][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[56] = 2;
 units[56] = ['77', '78'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2931. ";
 preguntaids[56] = 2931


//  Id pregunta: 2689 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Qu&eacute; se entiende por autoridad de certificaci&oacute;n?:";
 choices[57]= new Array();
 choices[57][0] = "Un juez";
 choices[57][1] = "Una compa&ntilde;&iacute;a que certifica la seguridad de sus sistemas En la actualidad s&oacute;lo puede considerarse a Microsoft como tal,";
 choices[57][2] = "Son &oacute;rganos administrativos dependientes del Consejo Superior de Inform&aacute;tica que dictan las normas de certificaci&oacute;n digital, de acuerdo a las Directivas de la Uni&oacute;n Europea";
 choices[57][3] = "Son entidades que expiden certificados digitales de manera que garantizan la correspondencia entre la identidad de un usuario y su par de claves";
 answers[57] = 3;
 units[57] = ['78'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2689. ";
 preguntaids[57] = 2689


//  Id pregunta: 2533 Año de creación de pregunta: 2004
 questions[58]= "59)  &iquest;De las siguientes API's cual no es un API de desarrollo de tarjetas inteligentes?";
 choices[58]= new Array();
 choices[58][0] = "CryptoAPI";
 choices[58][1] = "PKCS#7";
 choices[58][2] = "PKCS#11";
 choices[58][3] = "JCE/JCA";
 answers[58] = 1;
 units[58] = ['78'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2533. ";
 preguntaids[58] = 2533


//  Id pregunta: 6387 Año de creación de pregunta: 2003
 questions[59]= "60)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos y atributos del directorio activo se encuentra en el";
 choices[59]= new Array();
 choices[59][0] = "Schema Naming Context";
 choices[59][1] = "Active Directory Schema MMC";
 choices[59][2] = "Configuration Naming Context";
 choices[59][3] = "Domain Naming Context";
 answers[59] = 0;
 units[59] = ['78'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6387. Examen 2006 JCYL";
 preguntaids[59] = 6387


//  Id pregunta: 6576 Año de creación de pregunta: 2003
 questions[60]= "61)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[60]= new Array();
 choices[60][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[60][1] = "Chip RFID";
 choices[60][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[60][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[60] = 1;
 units[60] = ['78'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6576. ";
 preguntaids[60] = 6576


//  Id pregunta: 6153 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public Key Infrastructures)? :";
 choices[61]= new Array();
 choices[61][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[61][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[61][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;n permitidas para dicho certificado";
 choices[61][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[61] = 3;
 units[61] = ['77', '78'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 6153. Examen TIC A1 MAP 2007";
 preguntaids[61] = 6153


//  Id pregunta: 6565 Año de creación de pregunta: 2003
 questions[62]= "63)  Se&ntilde;ale donde se encuentran los datos biom&eacute;tricos y de identidad en el chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[62]= new Array();
 choices[62][0] = "Zona de seguridad";
 choices[62][1] = "Zona p&uacute;blica";
 choices[62][2] = "Zona privada";
 choices[62][3] = "Zona confidencial";
 answers[62] = 0;
 units[62] = ['78'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 6565. ";
 preguntaids[62] = 6565


//  Id pregunta: 2695 Año de creación de pregunta: 2002
 questions[63]= "64)  Cada vez que un ciudadano utilice su tarjeta criptogr&aacute;fica CERES para firmar documentos que debe entregar a la Administraci&oacute;n, se&ntilde;ale qu&eacute; utilizaci&oacute;n estar&aacute; haciendo de las claves de cifrado:";
 choices[63]= new Array();
 choices[63][0] = "Cifrar&aacute; con su clave p&uacute;blica";
 choices[63][1] = "Cifrar&aacute; con la clave p&uacute;blica de la Administraci&oacute;n";
 choices[63][2] = "Cifrara con el certificado ra&iacute;z de la FNMT";
 choices[63][3] = "Cifrar&aacute; con su clave privada";
 answers[63] = 3;
 units[63] = ['78'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2695. ";
 preguntaids[63] = 2695


//  Id pregunta: 3486 Año de creación de pregunta: 2006
 questions[64]= "65)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[64]= new Array();
 choices[64][0] = "Algoritmo de clave secreta";
 choices[64][1] = "Bytecode";
 choices[64][2] = "Esteganograf&iacute;a";
 choices[64][3] = "Dpyware";
 answers[64] = 2;
 units[64] = ['78'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3486. ";
 preguntaids[64] = 3486


//  Id pregunta: 6571 Año de creación de pregunta: 2003
 questions[65]= "66)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[65]= new Array();
 choices[65][0] = "Claves privadas del ciudadano";
 choices[65][1] = "Certificado de autenticaci&oacute;n";
 choices[65][2] = "Claves p&uacute;blicas del ciudadano";
 choices[65][3] = "Certificado de firma";
 answers[65] = 2;
 units[65] = ['78'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 6571. ";
 preguntaids[65] = 6571


//  Id pregunta: 6573 Año de creación de pregunta: 2003
 questions[66]= "67)  Los certificados del DNI electr&oacute;nico:";
 choices[66]= new Array();
 choices[66][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[66][1] = "Se expiden siempre y vienen activados";
 choices[66][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[66][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[66] = 3;
 units[66] = ['78'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6573. ";
 preguntaids[66] = 6573


//  Id pregunta: 3225 Año de creación de pregunta: 2003
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[67]= new Array();
 choices[67][0] = "Scfw";
 choices[67][1] = "MultOs";
 choices[67][2] = "Java Card";
 choices[67][3] = "Open Card";
 answers[67] = 3;
 units[67] = ['78'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3225. ";
 preguntaids[67] = 3225


//  Id pregunta: 7721 Año de creación de pregunta: 2010
 questions[68]= "69)  &iquest;Cu&aacute;l es el per&iacute;odo m&aacute;ximo de validez de los certificados del DNIe?";
 choices[68]= new Array();
 choices[68][0] = "24 meses.";
 choices[68][1] = "5 a&ntilde;os.";
 choices[68][2] = "30 meses.";
 choices[68][3] = "4 a&ntilde;os.";
 answers[68] = 1;
 units[68] = ['78'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7721. Similar a Map 2007";
 preguntaids[68] = 7721


//  Id pregunta: 7176 Año de creación de pregunta: 2010
 questions[69]= "70)  El per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[69]= new Array();
 choices[69][0] = "Tres a&ntilde;os";
 choices[69][1] = "Diez a&ntilde;os";
 choices[69][2] = "Dos a&ntilde;os";
 choices[69][3] = "Cinco a&ntilde;os";
 answers[69] = 3;
 units[69] = ['78'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7176. Castilla La Mancha 2009 (Ley 9/2014, Disposici&oacute;n final sexta)";
 preguntaids[69] = 7176


//  Id pregunta: 1277 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; certificados electr&oacute;nicos incluye el chip de la tarjeta del DNI electr&oacute;nico?";
 choices[70]= new Array();
 choices[70][0] = "De autenticaci&oacute;n y de firma.";
 choices[70][1] = "De componente, de autenticaci&oacute;n y de firma.";
 choices[70][2] = "De cifrado y de firma.";
 choices[70][3] = "De cifrado, de autenticaci&oacute;n y de firma.";
 answers[70] = 1;
 units[70] = ['78'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1277. ";
 preguntaids[70] = 1277


//  Id pregunta: 3493 Año de creación de pregunta: 2006
 questions[71]= "72)  El elemento del DNI que no permite por si solo autenticar a una persona es";
 choices[71]= new Array();
 choices[71][0] = "El nombre";
 choices[71][1] = "La foto";
 choices[71][2] = "La firma";
 choices[71][3] = "La huella dactilar";
 answers[71] = 0;
 units[71] = ['78'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3493. ";
 preguntaids[71] = 3493


//  Id pregunta: 6570 Año de creación de pregunta: 2003
 questions[72]= "73)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[72]= new Array();
 choices[72][0] = "Zona p&uacute;blica";
 choices[72][1] = "Zona de seguridad";
 choices[72][2] = "Zona privada";
 choices[72][3] = "Zona confidencial";
 answers[72] = 3;
 units[72] = ['78'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 6570. ";
 preguntaids[72] = 6570


//  Id pregunta: 3466 Año de creación de pregunta: 2009
 questions[73]= "74)  Relativo a la firma digital, indique la opci&oacute;n incorrecta:";
 choices[73]= new Array();
 choices[73][0] = "XMLDSig es una sintaxis XML para la generaci&oacute;n de firma digital";
 choices[73][1] = "XMLDSig s&oacute;lo se utiliza para firmar documentos XML";
 choices[73][2] = "XML Advanced Electronic Signatures (XAdES) cumple la directiva europea sobre firma electr&oacute;nica";
 choices[73][3] = "Las respuestas 'a' y 'c' son verdaderas";
 answers[73] = 1;
 units[73] = ['78'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3466. ";
 preguntaids[73] = 3466


//  Id pregunta: 1537 Año de creación de pregunta: 2016
 questions[74]= "75)  El DNI electr&oacute;nico es una tarjeta que cumple con la normativa Europea CWA-14890-1:2004, concretamente esta normativa define:";
 choices[74]= new Array();
 choices[74][0] = "El formato en el que se almacena el certificado reconocido de autenticaci&oacute;n y de firma.";
 choices[74][1] = "Los ficheros que se generan al realizarse la firma electr&oacute;nica.";
 choices[74][2] = "C&oacute;mo realizar la comunicaci&oacute;n entre una aplicaci&oacute;n y un dispositivo seguro de creaci&oacute;n de firma.";
 choices[74][3] = "La normativa de accesibilidad para la firma electr&oacute;nica para personas con capacidad reducida.";
 answers[74] = 2;
 units[74] = ['78'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1537. ";
 preguntaids[74] = 1537


