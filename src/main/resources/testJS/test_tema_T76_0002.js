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
//  Id pregunta: 8510 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes algoritmos no es de clave sim&eacute;trica?";
 choices[0]= new Array();
 choices[0][0] = "AES";
 choices[0][1] = "DSA";
 choices[0][2] = "DES";
 choices[0][3] = "BlowFish";
 answers[0] = 1;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8510. ";
 preguntaids[0] = 8510


//  Id pregunta: 3457 Año de creación de pregunta: 2006
 questions[1]= "2)  Se&ntilde;ale la correcta:";
 choices[1]= new Array();
 choices[1][0] = "3DES es un algoritmo de cifrado asim&eacute;trico que consiste en aplicar tres veces DES";
 choices[1][1] = "AES es un algoritmo muy vers&aacute;til porque puede usarse com algoritmo de bloque, como algoritmo de flujo,como funci&oacute;n resumen y como generador de n&uacute;meros pseudo-aleatorios.";
 choices[1][2] = "Las caracter&iacute;sticas de las funciones hash son: resistencia a la preimagen, resistencia a la postimagen y resistencia a la colisi&oacute;n";
 choices[1][3] = "Todas las anteriores";
 answers[1] = 1;
 units[1] = ['76'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3457. ";
 preguntaids[1] = 3457


//  Id pregunta: 7457 Año de creación de pregunta: 2010
 questions[2]= "3)  La autenticaci&oacute;n consiste en:";
 choices[2]= new Array();
 choices[2][0] = "Comprobar los permisos del usuario";
 choices[2][1] = "Comprobar que los datos no han sido alterados en una comunicaci&oacute;n";
 choices[2][2] = "Garantizar que ninguna de las partes pueda negar una operaci&oacute;n realizada";
 choices[2][3] = "Comprobar la identidad del usuario";
 answers[2] = 3;
 units[2] = ['76'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7457. ";
 preguntaids[2] = 7457


//  Id pregunta: 5627 Año de creación de pregunta: 2007
 questions[3]= "4)  El algoritmo MD5:";
 choices[3]= new Array();
 choices[3][0] = "Es un algoritmo de cifrado asim&eacute;trico.";
 choices[3][1] = "Es un algoritmo de cifrado sim&eacute;trico.";
 choices[3][2] = "Es un algoritmo de funci&oacute;n hash.";
 choices[3][3] = "Es un algoritmo de almacenamiento de la clave privada";
 answers[3] = 2;
 units[3] = ['76'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5627. ";
 preguntaids[3] = 5627


//  Id pregunta: 8157 Año de creación de pregunta: 2010
 questions[4]= "5)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[4]= new Array();
 choices[4][0] = "El est&aacute;ndar criptogr&aacute;fico RSA";
 choices[4][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[4][2] = "El intercambio de claves Diffie-Hellman.";
 choices[4][3] = "La sintaxis del mensaje criptogr&aacute;fico";
 answers[4] = 2;
 units[4] = ['76'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8157. Examen TIC A2 2010 interna";
 preguntaids[4] = 8157


//  Id pregunta: 8305 Año de creación de pregunta: 2011
 questions[5]= "6)  Al aplicar el algoritmo SHA-1 sobre una cadena de texto inicial obtendremos siempre un resultado:";
 choices[5]= new Array();
 choices[5][0] = "De menor longitud que la cadena inicial";
 choices[5][1] = "De la misma longitud que la cadena inicial";
 choices[5][2] = "De mayor longitud que la cadena inicial";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 3;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8305. Examen UPM A2 2011";
 preguntaids[5] = 8305


//  Id pregunta: 6793 Año de creación de pregunta: 2010
 questions[6]= "7)  En un sistema con 10 usuarios se plantea el uso de un sistema criptogr&aacute;fico para asegurar las transferencias de datos entretodos ellos. &iquest;Cu&aacute;l ser&iacute;a la diferencia entre usar sistemas de claves sim&eacute;tricas o asim&eacute;tricas?";
 choices[6]= new Array();
 choices[6][0] = "No existe diferencia, en ambos casos se necesitar&aacute;n 20 claves.";
 choices[6][1] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico el doble, ya que todas son secretas.";
 choices[6][2] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico s&oacute;lo 10, una por cada usuario.";
 choices[6][3] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico 45 claves.";
 answers[6] = 3;
 units[6] = ['76'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 6793. TIC A 2009";
 preguntaids[6] = 6793


//  Id pregunta: 6611 Año de creación de pregunta: 2009
 questions[7]= "8)  &iquest;Qu&eacute; longitudes de clave tienen las diferentes versiones del algoritmo AES reconocidas oficialmente por el NIST?";
 choices[7]= new Array();
 choices[7][0] = "64, 128, 256 bits";
 choices[7][1] = "128, 192, 256 bits";
 choices[7][2] = "128, 256, 512 bits";
 choices[7][3] = "128, 256, 384 bits";
 answers[7] = 1;
 units[7] = ['76'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 6611. ";
 preguntaids[7] = 6611


//  Id pregunta: 6158 Año de creación de pregunta: 2001
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes algoritmos se basa en el problema de factorizaci&oacute;n entera?";
 choices[8]= new Array();
 choices[8][0] = "el algoritmo RIPEMD-160";
 choices[8][1] = "los algoritmos RSA y RW";
 choices[8][2] = "los algoritmos DHE y DSAE";
 choices[8][3] = "el algoritmo Rijndael";
 answers[8] = 1;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6158. ";
 preguntaids[8] = 6158


//  Id pregunta: 8455 Año de creación de pregunta: 2011
 questions[9]= "10)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[9]= new Array();
 choices[9][0] = "Enveloped";
 choices[9][1] = "Detached";
 choices[9][2] = "Enveloping";
 choices[9][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[9] = 2;
 units[9] = ['76'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8455. ";
 preguntaids[9] = 8455


//  Id pregunta: 7951 Año de creación de pregunta: 2011
 questions[10]= "11)  En los sistemas criptogr&aacute;ficos h&iacute;bridos:";
 choices[10]= new Array();
 choices[10][0] = "Se prescinde del cifrado sim&eacute;trico.";
 choices[10][1] = "Se cifra la clave de sesi&oacute;n mediante un cifrado sim&eacute;trico";
 choices[10][2] = "Se cifra la clave de sesi&oacute;n mediante un cifrado asim&eacute;trico";
 choices[10][3] = "Se omite el uso de certificados digitales, cuando se dispone de plataformas PKI.";
 answers[10] = 2;
 units[10] = ['76'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7951. Examen TIC A2 2010";
 preguntaids[10] = 7951


//  Id pregunta: 7463 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Qu&eacute; es HSM?";
 choices[11]= new Array();
 choices[11][0] = "Un dispositivo criptogr&aacute;fico basado en hardware  que genera, almacena y protege claves criptogr&aacute;ficas";
 choices[11][1] = "Un algoritmo de clave p&uacute;blica";
 choices[11][2] = "Un API gen&eacute;rico de acceso a dispositivos criptogr&aacute;ficos";
 choices[11][3] = "Un conjunto de pol&iacute;ticas de seguridad en el &aacute;mbito de la criptograf&iacute;a de clave p&uacute;bica";
 answers[11] = 0;
 units[11] = ['76'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7463. ";
 preguntaids[11] = 7463


//  Id pregunta: 7629 Año de creación de pregunta: 2010
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[12]= new Array();
 choices[12][0] = "Modo ECB (Electronic Code Book Mode).";
 choices[12][1] = "Modo CFB (Cipher Feedback Mode).";
 choices[12][2] = "Modo BBM (Bit Block Mode).";
 choices[12][3] = "Modo CBC (Cipher Block Chaining Mode).";
 answers[12] = 2;
 units[12] = ['76'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 7629. Map 2006";
 preguntaids[12] = 7629


//  Id pregunta: 7723 Año de creación de pregunta: 2010
 questions[13]= "14)  El algoritmo de cifrado IDEA es del tipo:";
 choices[13]= new Array();
 choices[13][0] = "Asim&eacute;trico.";
 choices[13][1] = "Sim&eacute;trico por bloques.";
 choices[13][2] = "Sim&eacute;trico de flujo.";
 choices[13][3] = "Sim&eacute;trico de resumen (hash).";
 answers[13] = 3;
 units[13] = ['76'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7723. Map 2007";
 preguntaids[13] = 7723


//  Id pregunta: 3274 Año de creación de pregunta: 2003
 questions[14]= "15)  Las t&eacute;cnicas orientadas a garantizar la seguridad en las operaciones relacionadas con los servicios de certificaci&oacute;n y firma electr&oacute;nica, deben cumplir los principios de:";
 choices[14]= new Array();
 choices[14][0] = "Confidencialidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 choices[14][1] = "Confidencialidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[14][2] = "Disponibilidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[14][3] = "Disponibilidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 answers[14] = 1;
 units[14] = ['76'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3274. Junta Andaluc&iacute;a";
 preguntaids[14] = 3274


//  Id pregunta: 7374 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Qu&eacute; algoritmo de cifrado fue designado por la Administraci&oacute;n Federal Americana como est&aacute;ndar de cifrado sucesor del algoritmo DES?";
 choices[15]= new Array();
 choices[15][0] = "Triple DES";
 choices[15][1] = "AES";
 choices[15][2] = "IDEA";
 choices[15][3] = "Blowfish";
 answers[15] = 1;
 units[15] = ['76'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7374. Examen TIC B 2009";
 preguntaids[15] = 7374


//  Id pregunta: 5950 Año de creación de pregunta: 2007
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[16]= new Array();
 choices[16][0] = "Modo ECB (Electronic Code Book Mode)";
 choices[16][1] = "Modo CFB (Cipher Feedback Mode)";
 choices[16][2] = "Modo BBM (Bit Block Mode)";
 choices[16][3] = "Modo CBC (Cipher Block Chaining Mode)";
 answers[16] = 2;
 units[16] = ['76'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 5950. ";
 preguntaids[16] = 5950


//  Id pregunta: 7546 Año de creación de pregunta: 2010
 questions[17]= "18)  Sean en una comunicaci&oacute;n: m = mensaje a transmitir. y = h(m) el c&oacute;digo hash del mensaje m calculado en origen. m&rsquo; = mensaje recibido. y&rsquo; = h(m&rsquo;) el c&oacute;digo hash del mensaje m&rsquo; recibido, calculado en destino. Se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[17]= new Array();
 choices[17][0] = "Si y = y&rsquo; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&rsquo;.";
 choices[17][1] = "Si y ? y&rsquo; entonces se puede afirmar que la clave privada ha sido alterada.";
 choices[17][2] = "Si m = m&rsquo; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&rsquo;.";
 choices[17][3] = "Si y = y&rsquo; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&rsquo;.";
 answers[17] = 0;
 units[17] = ['76'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7546. Map 2005";
 preguntaids[17] = 7546


//  Id pregunta: 7827 Año de creación de pregunta: 2010
 questions[18]= "19)  Indique cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[18]= new Array();
 choices[18][0] = "Las funciones hash se utilizan en los mecanismos de cifrado/descifrado de mensajes.";
 choices[18][1] = "Las funciones hash se pueden utilizar para garantizar la integridad de los mensajes transmitidos.";
 choices[18][2] = "Las funciones hash generan valores cuya longitud, en bits, depende de la longitud del mensaje original.";
 choices[18][3] = "Las funciones hash requieren el uso de claves de cifrado.";
 answers[18] = 1;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7827. ";
 preguntaids[18] = 7827


//  Id pregunta: 7456 Año de creación de pregunta: 2010
 questions[19]= "20)  Uno de los objetivos de la seguridad es evitar que alteren los datos durante una transmisi&oacute;n, esto es conocido como:";
 choices[19]= new Array();
 choices[19][0] = "Integridad";
 choices[19][1] = "Confidencialidad";
 choices[19][2] = "No Repudio";
 choices[19][3] = "Disponibilidad";
 answers[19] = 0;
 units[19] = ['76'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7456. ";
 preguntaids[19] = 7456


//  Id pregunta: 3244 Año de creación de pregunta: 2004
 questions[20]= "21)  El algoritmo de cifrado Rijndael";
 choices[20]= new Array();
 choices[20][0] = "Compite con AES por ser el est&aacute;ndar de criptograf&iacute;a dominante";
 choices[20][1] = "Es un algoritmo de clave p&uacute;blica";
 choices[20][2] = "Es un desarrollo propietario de IBM";
 choices[20][3] = "Se basa en la teor&iacute;a de campos de Galois";
 answers[20] = 3;
 units[20] = ['76'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3244. ";
 preguntaids[20] = 3244


//  Id pregunta: 7458 Año de creación de pregunta: 2010
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA:";
 choices[21]= new Array();
 choices[21][0] = "DES es un algoritmo de cifrado asim&eacute;trico";
 choices[21][1] = "RSA es un algoritmo de cifrado sim&eacute;trico";
 choices[21][2] = "AES es implementable tanto en hardware como en software";
 choices[21][3] = "Todas las anteriores son FALSAS.";
 answers[21] = 2;
 units[21] = ['76'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7458. ";
 preguntaids[21] = 7458


//  Id pregunta: 5156 Año de creación de pregunta: 2003
 questions[22]= "23)  &iquest;En que nivel del modelo OSI se realiza el cifrado?";
 choices[22]= new Array();
 choices[22][0] = "1";
 choices[22][1] = "5";
 choices[22][2] = "7";
 choices[22][3] = "6";
 answers[22] = 3;
 units[22] = ['76'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 5156. ";
 preguntaids[22] = 5156


//  Id pregunta: 3269 Año de creación de pregunta: 2003
 questions[23]= "24)  La t&eacute;cnica criptogr&aacute;fica basada en un conjunto de m&eacute;todos que permiten tener comunicaci&oacute;n segura entre las partes, siempre y cuando previamente ambas partes hayan intercambiado una clave privada, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Criptograf&iacute;a asim&eacute;trica.";
 choices[23][1] = "Criptograf&iacute;a sim&eacute;trica.";
 choices[23][2] = "Criptograf&iacute;a de clave p&uacute;blica.";
 choices[23][3] = "Criptograf&iacute;a paralela.";
 answers[23] = 1;
 units[23] = ['76'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3269. Junta Andaluc&iacute;a";
 preguntaids[23] = 3269


//  Id pregunta: 7888 Año de creación de pregunta: 2011
 questions[24]= "25)  La distancia de Hamming entre las palabras 01000 y 01010 es:";
 choices[24]= new Array();
 choices[24][0] = "1";
 choices[24][1] = "2";
 choices[24][2] = "3";
 choices[24][3] = "4";
 answers[24] = 0;
 units[24] = ['76'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7888. Examen TIC A1 2010";
 preguntaids[24] = 7888


//  Id pregunta: 7459 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo DES?";
 choices[25]= new Array();
 choices[25][0] = "ECB";
 choices[25][1] = "OCB";
 choices[25][2] = "CBC";
 choices[25][3] = "OFB";
 answers[25] = 1;
 units[25] = ['76'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7459. ";
 preguntaids[25] = 7459


//  Id pregunta: 3469 Año de creación de pregunta: 2006
 questions[26]= "27)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa:";
 choices[26]= new Array();
 choices[26][0] = "PKCS#3 Protocolo de acuerdo de claves Diffie-Hellman";
 choices[26][1] = "PKCS#11 Cryptoki";
 choices[26][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[26][3] = "Todas son ciertas";
 answers[26] = 3;
 units[26] = ['76'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3469. ";
 preguntaids[26] = 3469


//  Id pregunta: 5026 Año de creación de pregunta: 2002
 questions[27]= "28)  PGP, o Pretty Good Privacy:";
 choices[27]= new Array();
 choices[27][0] = "Fue desarrollado por Phil Zimmerman";
 choices[27][1] = "Utiliza IDEA o MD5 como encriptacion";
 choices[27][2] = "Utiliza TripleDES Como encriptacion";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[27] = 0;
 units[27] = ['76'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 5026. ";
 preguntaids[27] = 5026


//  Id pregunta: 6610 Año de creación de pregunta: 2009
 questions[28]= "29)  &iquest;Cu&aacute;l es la longitud efectiva aproximada de clave del algoritmo Triple DES?";
 choices[28]= new Array();
 choices[28][0] = "112 (2x56) bits";
 choices[28][1] = "128 (2x64) bits";
 choices[28][2] = "168 (3x56) bits";
 choices[28][3] = "192 (3x64) bits";
 answers[28] = 0;
 units[28] = ['76'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 6610. ";
 preguntaids[28] = 6610


//  Id pregunta: 6708 Año de creación de pregunta: 2009
 questions[29]= "30)  Indique cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[29]= new Array();
 choices[29][0] = "Las funciones hash se utilizan en los mecanismos de cifrado/descifrado de mensajes";
 choices[29][1] = "Las funciones hash se pueden utilizar para garantizar la integridad de los mensajes transmitidos";
 choices[29][2] = "Las funciones hash generan valores cuya longitud, en bits, depende de la longitud del mensaje original";
 choices[29][3] = "Las funciones hash requieren el uso de claves de cifrado";
 answers[29] = 1;
 units[29] = ['76'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6708. MAP 2008 A1";
 preguntaids[29] = 6708


//  Id pregunta: 5511 Año de creación de pregunta: 2007
 questions[30]= "31)  De entre los siguientes, indique cu&aacute;l no es un sistema criptogr&aacute;fico de clave sim&eacute;trica:";
 choices[30]= new Array();
 choices[30][0] = "DES";
 choices[30][1] = "Triple DES.";
 choices[30][2] = "RSA";
 choices[30][3] = "IDEA";
 answers[30] = 2;
 units[30] = ['76'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5511. ";
 preguntaids[30] = 5511


//  Id pregunta: 8454 Año de creación de pregunta: 2011
 questions[31]= "32)  Como algoritmos de cifrado sim&eacute;trico de bloque no figura:";
 choices[31]= new Array();
 choices[31][0] = "Lucifer";
 choices[31][1] = "Serpent";
 choices[31][2] = "Seal";
 choices[31][3] = "Shark";
 answers[31] = 2;
 units[31] = ['76'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8454. ";
 preguntaids[31] = 8454


//  Id pregunta: 3455 Año de creación de pregunta: 2006
 questions[32]= "33)  Indicar la respuesta falsa:";
 choices[32]= new Array();
 choices[32][0] = "IDEA es un algoritmo de clave sim&eacute;trica";
 choices[32][1] = "RIPMED utiliza claves de 128 bits";
 choices[32][2] = "SHA-1 utiliza claves de 160 bits";
 choices[32][3] = "La seguridad de una funci&oacute;n hash radica en su car&aacute;cter unidireccional";
 answers[32] = 1;
 units[32] = ['76'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3455. ";
 preguntaids[32] = 3455


//  Id pregunta: 8405 Año de creación de pregunta: 2011
 questions[33]= "34)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[33]= new Array();
 choices[33][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[33][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[33][2] = "Cifrar y descifrar con la misma clave.";
 choices[33][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[33] = 2;
 units[33] = ['76'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8405. Operador Ayto. Madrid 2010";
 preguntaids[33] = 8405


//  Id pregunta: 7804 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico o de clave p&uacute;blica?";
 choices[34]= new Array();
 choices[34][0] = "IDEA (International Data Encryption Standard).";
 choices[34][1] = "Algoritmo de intercambio de claves de Diffie-Hellman.";
 choices[34][2] = "AES (Advanced Encryption Standard).";
 choices[34][3] = "RC-5.";
 answers[34] = 1;
 units[34] = ['76'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7804. ";
 preguntaids[34] = 7804


//  Id pregunta: 6711 Año de creación de pregunta: 2009
 questions[35]= "36)  En el protocolo Secure Socket Layer (SSL) el subprotocolo de negociaci&oacute;n (handsake) negocia las claves de sesi&oacute;n mediante el esquema de Diffie-Hellman (D-H) o RSA. Indique la respuesta correcta:";
 choices[35]= new Array();
 choices[35][0] = "D-H an&oacute;nimo es susceptible de ataques por hombre interpuesto";
 choices[35][1] = "D-H ef&iacute;mero no requiere certificado del servidor ni del cliente";
 choices[35][2] = "D-H constante no precisa certificado del cliente";
 choices[35][3] = "RSA necesita la generaci&oacute;n de un n&uacute;mero aleatorio por el servidor que es enviado al cliente cifrado con la clave p&uacute;blica de &eacute;ste";
 answers[35] = 0;
 units[35] = ['76'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6711. MAP 2008 A1";
 preguntaids[35] = 6711


//  Id pregunta: 3245 Año de creación de pregunta: 2004
 questions[36]= "37)  La criptograf&iacute;a cu&aacute;ntica es una t&eacute;cnica basada en";
 choices[36]= new Array();
 choices[36][0] = "Polarizaci&oacute;n de la luz";
 choices[36][1] = "Propiedades de los campos magn&eacute;ticos";
 choices[36][2] = "Ultrasonidos";
 choices[36][3] = "Transmisi&oacute;n de datos a muy alta frecuencia";
 answers[36] = 0;
 units[36] = ['76'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3245. ";
 preguntaids[36] = 3245


//  Id pregunta: 7969 Año de creación de pregunta: 2011
 questions[37]= "38)  Un sistema compuesto por 15 usuarios intercambian informaci&oacute;n cifrada mediante AES. Si los canales de comunicaci&oacute;n entre usuarios es 2 a 2 (es decir, todos intercambian informaci&oacute;n con todos) &iquest;cu&aacute;ntas claves son necesarias?";
 choices[37]= new Array();
 choices[37][0] = "15";
 choices[37][1] = "105";
 choices[37][2] = "210";
 choices[37][3] = "30.";
 answers[37] = 1;
 units[37] = ['76'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7969. Examen TIC A2 2010";
 preguntaids[37] = 7969


//  Id pregunta: 6606 Año de creación de pregunta: 2009
 questions[38]= "39)  &iquest;Qu&eacute; es el efecto avalancha en una funci&oacute;n hash?";
 choices[38]= new Array();
 choices[38][0] = "Una peque&ntilde;a variaci&oacute;n en la longitud del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[38][1] = "Una peque&ntilde;a variaci&oacute;n del contenido del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[38][2] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una peque&ntilde;a variaci&oacute;n en la longitud del resumen";
 choices[38][3] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una gran variaci&oacute;n en el contenido del resumen";
 answers[38] = 3;
 units[38] = ['76'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6606. ";
 preguntaids[38] = 6606


//  Id pregunta: 5832 Año de creación de pregunta: 2007
 questions[39]= "40)  T&eacute;cnica de cifrado utilizada por los clientes de correo-electr&oacute;nico";
 choices[39]= new Array();
 choices[39][0] = "MD5";
 choices[39][1] = "IDEA";
 choices[39][2] = "Curva El&iacute;ptica";
 choices[39][3] = "S/MIME";
 answers[39] = 2;
 units[39] = ['76'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 5832. Examen 2006 JCYL";
 preguntaids[39] = 5832


//  Id pregunta: 6604 Año de creación de pregunta: 2009
 questions[40]= "41)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica monogr&aacute;mica?";
 choices[40]= new Array();
 choices[40][0] = "Cada letra del mensaje original es sustituido por s&oacute;lo una otra letra, n&uacute;mero o s&iacute;mbolo";
 choices[40][1] = "Buscan paliar la sensibilidad frente a ataques basados en el estudio de frecuencias de s&iacute;mbolos.";
 choices[40][2] = "Cada letra del mensaje original puede ser sustituida por m&aacute;s de una letra, n&uacute;mero o s&iacute;mbolo";
 choices[40][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[40] = 0;
 units[40] = ['76'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6604. ";
 preguntaids[40] = 6604


//  Id pregunta: 5860 Año de creación de pregunta: 2007
 questions[41]= "42)  Indique la afirmaci&oacute;n cierta.";
 choices[41]= new Array();
 choices[41][0] = "El resultado de cifrar de nuevo un texto cifrado con otro algoritmo aporta una seguridad adicional, eso s&iacute;, implicando una carga extra de trabajo tanto para cifrar como para luego descifrar el texto";
 choices[41][1] = "Los cifradores de flujo no aportan informaci&oacute;n alguna al criptoanalista que observa el texto cifrado";
 choices[41][2] = "La calidad del algoritmo HASH es independiente de la calidad de la dispersi&oacute;n obtenida en dicho algoritmo";
 choices[41][3] = "El ataque del cumplea&ntilde;os no es aplicable a las funciones HASH, ya que no son reversibles";
 answers[41] = 1;
 units[41] = ['76'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5860. ";
 preguntaids[41] = 5860


//  Id pregunta: 7375 Año de creación de pregunta: 2010
 questions[42]= "43)  A la hora de atacar un texto cifrado, el m&eacute;todo que explota las debilidades del algoritmo de cifrado o sus puntos menos fuertes para intentar deducir un texto nativo o deducir la clave de cifrado se denomina:";
 choices[42]= new Array();
 choices[42][0] = "Ataque por Fuerza Bruta";
 choices[42][1] = "CriptoAn&aacute;lisis";
 choices[42][2] = "An&aacute;lisis Diferencia de Cifrado";
 choices[42][3] = "CriptoCifrado";
 answers[42] = 1;
 units[42] = ['76'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7375. Examen TIC B 2009";
 preguntaids[42] = 7375


//  Id pregunta: 6603 Año de creación de pregunta: 2009
 questions[43]= "44)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica?";
 choices[43]= new Array();
 choices[43][0] = "Emplean un alfabeto de salida con m&aacute;s s&iacute;mbolos que el alfabeto de entrada.";
 choices[43][1] = "Buscan paliar la sensibilidad frente a ataques basados en el estudio de frecuencias de s&iacute;mbolos.";
 choices[43][2] = "Se sustituye cada car&aacute;cter del texto original siempre por otro car&aacute;cter determinado";
 choices[43][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[43] = 2;
 units[43] = ['76'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6603. ";
 preguntaids[43] = 6603


//  Id pregunta: 3520 Año de creación de pregunta: 2006
 questions[44]= "45)  El protocolo SSL v3";
 choices[44]= new Array();
 choices[44][0] = "Trabaja tanto sobre TCP como sobre UDP";
 choices[44][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban TLS/SSL ten&iacute;an su exportaci&oacute;n desde EEUU limitada a claves de 128 bits";
 choices[44][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC";
 choices[44][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman";
 answers[44] = 3;
 units[44] = ['76'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3520. ";
 preguntaids[44] = 3520


//  Id pregunta: 3311 Año de creación de pregunta: 2004
 questions[45]= "46)  &iquest;Cu&aacute;les de los siguientes no son modos de operaci&oacute;n para algoritmos de cifrado por bloques?";
 choices[45]= new Array();
 choices[45][0] = "CTR";
 choices[45][1] = "CBC";
 choices[45][2] = "CFB";
 choices[45][3] = "DFB";
 answers[45] = 3;
 units[45] = ['76'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3311. ";
 preguntaids[45] = 3311


//  Id pregunta: 7496 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[46]= new Array();
 choices[46][0] = "Modelo en cascada.";
 choices[46][1] = "Modelo de prototipado.";
 choices[46][2] = "Modelo de transformaci&oacute;n.";
 choices[46][3] = "Modelo en espiral.";
 answers[46] = 3;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7496. Map 2005";
 preguntaids[46] = 7496


//  Id pregunta: 5853 Año de creación de pregunta: 2007
 questions[47]= "48)  Firmar un mensaje electr&oacute;nico";
 choices[47]= new Array();
 choices[47][0] = "Es lo mismo que cifrarlo";
 choices[47][1] = "Garantiza la confidencialidad";
 choices[47][2] = "Es lo mismo que codificarlo";
 choices[47][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[47] = 3;
 units[47] = ['76'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 5853. Examen 2006 JCYL";
 preguntaids[47] = 5853


//  Id pregunta: 6399 Año de creación de pregunta: 2003
 questions[48]= "49)  Firmar un mensaje electr&oacute;nico";
 choices[48]= new Array();
 choices[48][0] = "Es lo mismo que cifrarlo";
 choices[48][1] = "Garantiza la confidencialidad";
 choices[48][2] = "Es lo mismo que codificarlo";
 choices[48][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[48] = 3;
 units[48] = ['76'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6399. Examen 2006 JCYL";
 preguntaids[48] = 6399


//  Id pregunta: 3459 Año de creación de pregunta: 2006
 questions[49]= "50)  Se&ntilde;ale la falsa:";
 choices[49]= new Array();
 choices[49][0] = "CRL son las siglas en ingl&eacute;s de la lista de certificados revocados";
 choices[49][1] = "OCSP son las siglas en ingl&eacute;s del protocolo de estado de certificados en l&iacute;nea";
 choices[49][2] = "PKCS#7 corresponde al est&aacute;ndar del formato del sobre digital";
 choices[49][3] = "PKCS#11 corresponde al algoritmo RSA";
 answers[49] = 3;
 units[49] = ['76'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3459. ";
 preguntaids[49] = 3459


//  Id pregunta: 6607 Año de creación de pregunta: 2009
 questions[50]= "51)  &iquest;Cu&aacute;l es la longitud del resumen de la funci&oacute;n SHA-1?";
 choices[50]= new Array();
 choices[50][0] = "64 bits";
 choices[50][1] = "128 bits";
 choices[50][2] = "160 bits";
 choices[50][3] = "224 bits";
 answers[50] = 2;
 units[50] = ['76'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6607. ";
 preguntaids[50] = 6607


//  Id pregunta: 3518 Año de creación de pregunta: 2006
 questions[51]= "52)  Sean en una comunicaci&oacute;n: m=mensaje a transmitir; y=h(m) el c&oacute;digo hash del mensaje m calculado en origen; m&rsquo;=mensaje recibido; y&rsquo;=h(m&acute;) el c&oacute;digo hash del mensaje m&acute; recibido, calculado en destino. Se&ntilde;alar cual de las siguientes afirmaciones es cierta:";
 choices[51]= new Array();
 choices[51][0] = "Si y = y&acute; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&acute;";
 choices[51][1] = "Si y != y&acute; entonces se puede afirmar que la clave privada ha sido alterada";
 choices[51][2] = "Si m = m&acute; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&acute;";
 choices[51][3] = "Si y = y&acute; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&acute;";
 answers[51] = 0;
 units[51] = ['76'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3518. ";
 preguntaids[51] = 3518


//  Id pregunta: 3460 Año de creación de pregunta: 2009
 questions[52]= "53)  Se&ntilde;ale la falsa:";
 choices[52]= new Array();
 choices[52][0] = "XML Encryption es un lenguaje cuya funci&oacute;n principal es asegurar la confidencialidad de partes de documentos XML a trav&eacute;s de la encriptaci&oacute;n parcial del documento transportado";
 choices[52][1] = "XML Encryption se puede aplicar a cualquier recurso Web, incluyendo contenido que no es XML.";
 choices[52][2] = "XML Encryption establece que es posible cifrar datos a distintos niveles de granularidad, desde elementos simples hasta documentos enteros";
 choices[52][3] = "Ninguna de las anteriores es falsa.";
 answers[52] = 3;
 units[52] = ['76'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3460. ";
 preguntaids[52] = 3460


//  Id pregunta: 5729 Año de creación de pregunta: 2007
 questions[53]= "54)  &iquest;Qu&eacute; actividades de las siguientes se incluyen en el ciclo de vida cl&aacute;sico, tambi&eacute;n llamado &quot;modelo en cascada&quot;?";
 choices[53]= new Array();
 choices[53][0] = "an&aacute;lisis del sistema, an&aacute;lisis de riesgo, an&aacute;lisis de requisitos";
 choices[53][1] = "an&aacute;lisis de riesgo, an&aacute;lisis de requisitos y codificaci&oacute;n";
 choices[53][2] = "an&aacute;lisis del sistema, prototipos y codificaci&oacute;n";
 choices[53][3] = "dise&ntilde;o, codificaci&oacute;n y pruebas";
 answers[53] = 3;
 units[53] = ['76'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 5729. ";
 preguntaids[53] = 5729


//  Id pregunta: 5777 Año de creación de pregunta: 2007
 questions[54]= "55)  Con el cifrado se asegura";
 choices[54]= new Array();
 choices[54][0] = "la autenticidad";
 choices[54][1] = "la confidencialidad";
 choices[54][2] = "la integridad, la autenticidad y el no repudio en destino";
 choices[54][3] = "la integridad, la autenticidad y el no repudio en origen";
 answers[54] = 1;
 units[54] = ['76'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 5777. ";
 preguntaids[54] = 5777


//  Id pregunta: 3463 Año de creación de pregunta: 2006
 questions[55]= "56)  En relaci&oacute;n al protocolo OCSP (Online Certificate Status Protocol):";
 choices[55]= new Array();
 choices[55][0] = "Se utiliza para conocer el estado de revocaci&oacute;n de un certificado X.509";
 choices[55][1] = "Los mensajes enviados v&iacute;a OCSP se codifican en ASN.1";
 choices[55][2] = "Se define en el RFC 6960";
 choices[55][3] = "Todas las anteriores respuestas son ciertas";
 answers[55] = 3;
 units[55] = ['76'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3463. ";
 preguntaids[55] = 3463


//  Id pregunta: 3464 Año de creación de pregunta: 2006
 questions[56]= "57)  Se&ntilde;ale la falsa:";
 choices[56]= new Array();
 choices[56][0] = "XML Signature asegura la integridad de partes de documentos XML transportados";
 choices[56][1] = "XML Signature puede aplicarse a cualquier contenido digital (objeto de datos), incluyendo XML";
 choices[56][2] = "XML Key Management es un protocolo para distribuir y registrar claves p&uacute;blicas. Lo que hace es ocultar la parte compleja que surge con PKI. Est&aacute; compuesto de: el registro de la clave p&uacute;blica (X-KRSS) y la informaci&oacute;n de clave p&uacute;blica (X-KISS).";
 choices[56][3] = "Todas las anteriores son ciertas";
 answers[56] = 3;
 units[56] = ['76'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3464. ";
 preguntaids[56] = 3464


//  Id pregunta: 3264 Año de creación de pregunta: 2003
 questions[57]= "58)  Entre los algoritmos que puede utilizar SSL se encuentran:";
 choices[57]= new Array();
 choices[57][0] = "TripleDES, RC4 y SHA-1";
 choices[57][1] = "DES, RC2 y MD5";
 choices[57][2] = "Adem&aacute;s de los anteriores puede usar SKIPJACK y RSA";
 choices[57][3] = "Puede usar todos los anteriores e incluso no usar algoritmo de encriptaci&oacute;n, pero s&iacute; de autenticaci&oacute;n con SHA-1 o MD5";
 answers[57] = 3;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3264. ";
 preguntaids[57] = 3264


//  Id pregunta: 7461 Año de creación de pregunta: 2010
 questions[58]= "59)  El grupo de est&aacute;ndares de criptograf&iacute;a de clave p&uacute;blica, PKCS (Public Key Cryptography Standars), son publicados por:";
 choices[58]= new Array();
 choices[58][0] = "IEEE";
 choices[58][1] = "IETF";
 choices[58][2] = "RSA";
 choices[58][3] = "DES";
 answers[58] = 2;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7461. ";
 preguntaids[58] = 7461


//  Id pregunta: 6721 Año de creación de pregunta: 2009
 questions[59]= "60)  Los cifrados de clave p&uacute;blica:";
 choices[59]= new Array();
 choices[59][0] = "De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos";
 choices[59][1] = "A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular";
 choices[59][2] = "La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora";
 choices[59][3] = "Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves";
 answers[59] = 0;
 units[59] = ['76'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6721. MAP 2008 A1";
 preguntaids[59] = 6721


//  Id pregunta: 5628 Año de creación de pregunta: 2007
 questions[60]= "61)  El algoritmo de cifrado Rijndael puede ser especificado por una clave:";
 choices[60]= new Array();
 choices[60][0] = "Fija de 256 bits";
 choices[60][1] = "Con un m&iacute;nimo de 128 bits y un m&aacute;ximo de 256 bits";
 choices[60][2] = "Fija de 128 bits";
 choices[60][3] = "Con un m&iacute;nimo de 256 bits y un m&aacute;ximo de 1024 bits";
 answers[60] = 1;
 units[60] = ['76'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 5628. ";
 preguntaids[60] = 5628


//  Id pregunta: 3458 Año de creación de pregunta: 2006
 questions[61]= "62)  Las aplicaciones fundamentales de la criptograf&iacute;a asim&eacute;trica son:";
 choices[61]= new Array();
 choices[61][0] = "El cifrado eficiente y la firma digital";
 choices[61][1] = "El intercambio seguro de claves privadas o de sesi&oacute;n y la firma digital";
 choices[61][2] = "El intercambio seguro de claves privadas o de sesi&oacute;n y el cifrado eficiente";
 choices[61][3] = "Todas las anteriores";
 answers[61] = 1;
 units[61] = ['76'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3458. ";
 preguntaids[61] = 3458


//  Id pregunta: 7462 Año de creación de pregunta: 2010
 questions[62]= "63)  El est&aacute;ndar de sintaxis de intercambio de informaci&oacute;n personal es:";
 choices[62]= new Array();
 choices[62][0] = "PKCS#7";
 choices[62][1] = "PKCS#9";
 choices[62][2] = "PKCS#12";
 choices[62][3] = "PKCS#14";
 answers[62] = 2;
 units[62] = ['76'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7462. ";
 preguntaids[62] = 7462


//  Id pregunta: 6605 Año de creación de pregunta: 2009
 questions[63]= "64)  Respecto al algoritmo DSA, &iquest;cu&aacute;l de estas afirmaciones es falsa?";
 choices[63]= new Array();
 choices[63][0] = "Sirve para firmar documentos";
 choices[63][1] = "Sirve para autenticar";
 choices[63][2] = "Sirve para cifrar";
 choices[63][3] = "Es un est&aacute;ndar de FIPS para firmas digitales";
 answers[63] = 2;
 units[63] = ['76'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6605. ";
 preguntaids[63] = 6605


//  Id pregunta: 7949 Año de creación de pregunta: 2011
 questions[64]= "65)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[64]= new Array();
 choices[64][0] = "El est&aacute;ndar criptogr&aacute;fico RSA.";
 choices[64][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[64][2] = "El intercambio de claves Diffie-Hellman.";
 choices[64][3] = "La sintaxis del mensaje criptogr&aacute;fico.";
 answers[64] = 2;
 units[64] = ['76'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7949. Examen TIC A2 2010";
 preguntaids[64] = 7949


//  Id pregunta: 7460 Año de creación de pregunta: 2010
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto a las funciones hash:";
 choices[65]= new Array();
 choices[65][0] = "El algoritmo SHA-1 produce una salida resumen de 160 bits";
 choices[65][1] = "Las funciones hash son usadas, principalmente, para resolver el problema de la confidencialidad de los mensajes";
 choices[65][2] = "Resistencia a la preimagen significa que dada cualquier imagen y, es computacionalmente imposible encontrar un mensaje x tal que h(x)=y";
 choices[65][3] = "Resistencia a colisi&oacute;n significa que es computacionalmente imposible encontrar dos diferentes mensajes x, x&rsquo; tal que h(x)=h(x&rsquo;)";
 answers[65] = 1;
 units[65] = ['76'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 7460. ";
 preguntaids[65] = 7460


//  Id pregunta: 7455 Año de creación de pregunta: 2010
 questions[66]= "67)  ASCII es el acr&oacute;nimo de:";
 choices[66]= new Array();
 choices[66][0] = "American Standard Code for Information Integration";
 choices[66][1] = "Alliance Standard Code Interchange Integration";
 choices[66][2] = "American Standard Code for Information Interchange";
 choices[66][3] = "All sugar can injure igloos";
 answers[66] = 2;
 units[66] = ['76'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7455. ";
 preguntaids[66] = 7455


//  Id pregunta: 6746 Año de creación de pregunta: 2009
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico &oacute; de clave p&uacute;blica?";
 choices[67]= new Array();
 choices[67][0] = "IDEA (International Data Encryption Standard)";
 choices[67][1] = "Algoritmo de intercambio de claves de Diffie- Hellman";
 choices[67][2] = "AES (Advanced Encryption Standard)";
 choices[67][3] = "RC-5";
 answers[67] = 1;
 units[67] = ['76'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 6746. MAP 2008 A1";
 preguntaids[67] = 6746


//  Id pregunta: 7823 Año de creación de pregunta: 2010
 questions[68]= "69)  Los cifrados de clave p&uacute;blica:";
 choices[68]= new Array();
 choices[68][0] = "De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos.";
 choices[68][1] = "A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular.";
 choices[68][2] = "La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora.";
 choices[68][3] = "Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves.";
 answers[68] = 0;
 units[68] = ['76'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7823. ";
 preguntaids[68] = 7823


//  Id pregunta: 3456 Año de creación de pregunta: 2006
 questions[69]= "70)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[69]= new Array();
 choices[69][0] = "Fuerza bruta";
 choices[69][1] = "Criptoan&aacute;lisis diferencial";
 choices[69][2] = "Criptoan&aacute;lisis lineal";
 choices[69][3] = "An&aacute;lisis de temporizaci&oacute;n";
 answers[69] = 0;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3456. ";
 preguntaids[69] = 3456


//  Id pregunta: 3522 Año de creación de pregunta: 2006
 questions[70]= "71)  En lo que concierne a los algoritmos de cifrado, la recomendaci&oacute;n PKCS#7 de la compa&ntilde;&iacute;a RSA se refiere a:";
 choices[70]= new Array();
 choices[70][0] = "Formato del sobre digital";
 choices[70][1] = "Formato del certificado digital";
 choices[70][2] = "Sintaxis de la clave privada";
 choices[70][3] = "Algoritmo Diffie-Hellman";
 answers[70] = 0;
 units[70] = ['76'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3522. ";
 preguntaids[70] = 3522


//  Id pregunta: 6612 Año de creación de pregunta: 2009
 questions[71]= "72)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[71]= new Array();
 choices[71][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[71][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[71][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[71][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[71] = 1;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 6612. ";
 preguntaids[71] = 6612


//  Id pregunta: 5983 Año de creación de pregunta: 2007
 questions[72]= "73)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo queespecifica la forma de encapsular los datos que se van a intercambiar?";
 choices[72]= new Array();
 choices[72][0] = "SSL Handshake";
 choices[72][1] = "SSL Record";
 choices[72][2] = "Cipher Secure Layer";
 choices[72][3] = "Secure Stocker Layer";
 answers[72] = 1;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 5983. ";
 preguntaids[72] = 5983


//  Id pregunta: 3454 Año de creación de pregunta: 2006
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes algoritmos no sirve de base para la definici&oacute;n de algoritmos de criptograf&iacute;a asim&eacute;trica?";
 choices[73]= new Array();
 choices[73][0] = "Problema de sustituci&oacute;n af&iacute;n";
 choices[73][1] = "Problema de factorizaci&oacute;n entera";
 choices[73][2] = "Problema de logaritmo discreto";
 choices[73][3] = "Problema de logaritmo discreto el&iacute;ptico";
 answers[73] = 0;
 units[73] = ['76'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3454. ";
 preguntaids[73] = 3454


//  Id pregunta: 7562 Año de creación de pregunta: 2010
 questions[74]= "75)  En lo que concierne a los algoritmos de cifrado, la recomendaci&oacute;n PKCS#7 de la compa&ntilde;&iacute;a RSA, se refiere a:";
 choices[74]= new Array();
 choices[74][0] = "Formato del sobre digital.";
 choices[74][1] = "Formato del certificado digital.";
 choices[74][2] = "Sintaxis de la clave privada.";
 choices[74][3] = "Algoritmo Diffie-Hellman.";
 answers[74] = 0;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7562. Map 2005";
 preguntaids[74] = 7562


