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
//  Id pregunta: 3021 Año de creación de pregunta: 2002
 questions[0]= "1)  RSA es:";
 choices[0]= new Array();
 choices[0][0] = "Un algoritmo criptogr&aacute;fico";
 choices[0][1] = "Un mecanismo de intercambio de claves";
 choices[0][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[0][3] = "Una funcion resumen";
 answers[0] = 0;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3021. ";
 preguntaids[0] = 3021


//  Id pregunta: 1226 Año de creación de pregunta: 2016
 questions[1]= "2)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[1]= new Array();
 choices[1][0] = "Mediante claves sim&eacute;tricas.";
 choices[1][1] = "Mediante claves asim&eacute;tricas.";
 choices[1][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[1][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[1] = 0;
 units[1] = ['76'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1226. ";
 preguntaids[1] = 1226


//  Id pregunta: 2525 Año de creación de pregunta: 2004
 questions[2]= "3)  En relaci&oacute;n con la huella digital y las funciones hash, se&ntilde;alar la opci&oacute;n falsa:";
 choices[2]= new Array();
 choices[2][0] = "Dos mensajes id&eacute;nticos, producen la misma huella";
 choices[2][1] = "Dada una huella es computacionalmente imposible encontrar un mensaje que produzca esa huella";
 choices[2][2] = "Si dos huellas son id&eacute;nticas, s&oacute;lo pueden haber sido originadas con el mismo mensaje";
 choices[2][3] = "Si dos huellas son id&eacute;nticas, pueden haber sido originadas por distintos mensajes con muy poca probabilidad";
 answers[2] = 2;
 units[2] = ['76'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2525. Similar a examen TIC SS A 2003. Puede haber colisiones aunque con una probabilidad muy baja.";
 preguntaids[2] = 2525


//  Id pregunta: 2949 Año de creación de pregunta: 2002
 questions[3]= "4)  La propiedad de una funci&oacute;n res&uacute;men por la que dado un mensaje (x), es computacionalmente imposible encontrar otro mensaje (x&rsquo;) cuya funci&oacute;n resumen sea igual a la funci&oacute;n res&uacute;men del primer mensaje (x), corresponde a:";
 choices[3]= new Array();
 choices[3][0] = "Resistencia a la preimagen";
 choices[3][1] = "Resistencia a la segunda preimagen";
 choices[3][2] = "Resistencia a colisi&oacute;n";
 choices[3][3] = "Resistencia a la igualdad";
 answers[3] = 1;
 units[3] = ['76'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2949. ";
 preguntaids[3] = 2949


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[4]= new Array();
 choices[4][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[4][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[4][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[4][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[4] = 0;
 units[4] = ['76'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 781. Xunta de Galicia 2015";
 preguntaids[4] = 781


//  Id pregunta: 2972 Año de creación de pregunta: 2002
 questions[5]= "6)  Los algoritmos de clave p&uacute;blica o asim&eacute;trica:";
 choices[5]= new Array();
 choices[5][0] = "no han alcanzado la perfecci&oacute;n matem&aacute;tica, hay ataques m&aacute;s eficaces que la fuerza bruta";
 choices[5][1] = "presentan altas tasas de cifrado y descifrado";
 choices[5][2] = "su distribuci&oacute;n usando directorios p&uacute;blicos es compleja";
 choices[5][3] = "no son compatibles con el concepto de certificado";
 answers[5] = 0;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2972. ";
 preguntaids[5] = 2972


//  Id pregunta: 3020 Año de creación de pregunta: 2002
 questions[6]= "7)  RSA es:";
 choices[6]= new Array();
 choices[6][0] = "un algoritmo de clave privada";
 choices[6][1] = "un algoritmo de clave p&uacute;blica";
 choices[6][2] = "un m&eacute;todo de criptoan&aacute;lisis diferencial";
 choices[6][3] = "una infraestructura de clave p&uacute;blica";
 answers[6] = 1;
 units[6] = ['76'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3020. ";
 preguntaids[6] = 3020


//  Id pregunta: 1050 Año de creación de pregunta: 2016
 questions[7]= "8)  Los certificados de clave p&uacute;blica";
 choices[7]= new Array();
 choices[7][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones.";
 choices[7][1] = "Tienen en torno a 1 Mbytes.";
 choices[7][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA.";
 choices[7][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemas de clave p&uacute;blica.";
 answers[7] = 0;
 units[7] = ['76'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1050. ";
 preguntaids[7] = 1050


//  Id pregunta: 2920 Año de creación de pregunta: 2002
 questions[8]= "9)  Kerberos utiliza algoritmos de cifrado:";
 choices[8]= new Array();
 choices[8][0] = "No utiliza algoritmos de cifrado, porque no cifra nada";
 choices[8][1] = "Utiliza algoritmos de cifrado RSA";
 choices[8][2] = "Utiliza algoritmos de cifrado tipo DES";
 choices[8][3] = "Lo &uacute;nico que utiliza es firma electr&oacute;nica";
 answers[8] = 2;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2920. ";
 preguntaids[8] = 2920


//  Id pregunta: 2740 Año de creación de pregunta: 2002
 questions[9]= "10)  El algoritmo RSA se emplea para:";
 choices[9]= new Array();
 choices[9][0] = "Cifrar datos con una clave secreta";
 choices[9][1] = "Cifrar datos con una criptograf&iacute;a de clave p&uacute;blica";
 choices[9][2] = "Obtener un resumen (huella digital) de un documento";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = 1;
 units[9] = ['76'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2740. ";
 preguntaids[9] = 2740


//  Id pregunta: 3042 Año de creación de pregunta: 2002
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los algoritmos de cifrado:";
 choices[10]= new Array();
 choices[10][0] = "Si utilizamos el sistema de cifrado mediante clave p&uacute;blica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N! / 2 x (N - 2)! parejas de claves";
 choices[10][1] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N*(N-1)/2 claves";
 choices[10][2] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de 10 nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer 9 claves, y ser&aacute;n necesarias un total de 45 claves";
 choices[10][3] = "Los algoritmos de cifrado mediante clave sim&eacute;trica DES, RC-2 y RC-4 son p&uacute;blicos.  A partir de un bloque de caracteres &ldquo;en claro&rdquo;, estos algoritmos generan un bloque de caracteres ininteligible (cifrado) mediante un n&uacute;mero de sustituciones y permutaciones";
 answers[10] = 0;
 units[10] = ['76'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3042. ";
 preguntaids[10] = 3042


//  Id pregunta: 2603 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[11]= new Array();
 choices[11][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[11][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[11][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[11][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[11] = 0;
 units[11] = ['76'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2603. ";
 preguntaids[11] = 2603


//  Id pregunta: 3181 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Qu&eacute; tecnolog&iacute;a sustituy&oacute; a DES tras su ruptura?";
 choices[12]= new Array();
 choices[12][0] = "Rijndael";
 choices[12][1] = "RC-4";
 choices[12][2] = "MD5";
 choices[12][3] = "SEAL";
 answers[12] = 0;
 units[12] = ['76'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3181. ";
 preguntaids[12] = 3181


//  Id pregunta: 2842 Año de creación de pregunta: 2002
 questions[13]= "14)  En los criptosistemas asim&eacute;tricos:";
 choices[13]= new Array();
 choices[13][0] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con la clave p&uacute;blica del emisor";
 choices[13][1] = "El emisor cifra con su clave p&uacute;blica y el receptor descifra con su clave privada";
 choices[13][2] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con su clave privada";
 choices[13][3] = "El emisor cifra con su clave privada y el receptor descifra con su clave p&uacute;blica";
 answers[13] = 2;
 units[13] = ['76'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2842. La respuesta D para que fuera correcta deberia ser &quot;El emisor cifra con su clave privada y el receptor descifra con la clave p&uacute;blica del emisor&quot;";
 preguntaids[13] = 2842


//  Id pregunta: 1641 Año de creación de pregunta: 2016
 questions[14]= "15)  Las funciones &quot;hash&quot; en los procesos de firma electr&oacute;nica se emplean para:";
 choices[14]= new Array();
 choices[14][0] = "Garantizar la integridad de lo firmado.";
 choices[14][1] = "Asegurar la confidencialidad de lo firmado.";
 choices[14][2] = "Autenticar al firmante.";
 choices[14][3] = "Asegurar el no repudio del firmante.";
 answers[14] = 0;
 units[14] = ['76'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1641. ";
 preguntaids[14] = 1641


//  Id pregunta: 2765 Año de creación de pregunta: 2002
 questions[15]= "16)  Firmar un mensaje electr&oacute;nico:";
 choices[15]= new Array();
 choices[15][0] = "Es lo mismo que cifrarlo";
 choices[15][1] = "Es lo mismo que codificarlo";
 choices[15][2] = "Garantiza la confidencialidad";
 choices[15][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[15] = 3;
 units[15] = ['76'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2765. ";
 preguntaids[15] = 2765


//  Id pregunta: 1886 Año de creación de pregunta: 2016
 questions[16]= "17)  En criptograf&iacute;a asim&eacute;trica, con que clave cifra un usuario un documento:";
 choices[16]= new Array();
 choices[16][0] = "Con su propia clave privada";
 choices[16][1] = "Con su propia clave p&uacute;blica";
 choices[16][2] = "Con la clave privada del destinatario";
 choices[16][3] = "Con la clave p&uacute;blica del destinatario";
 answers[16] = 3;
 units[16] = ['76'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1886. ";
 preguntaids[16] = 1886


//  Id pregunta: 1526 Año de creación de pregunta: 2016
 questions[17]= "18)  Mediante un sistema criptogr&aacute;fico sim&eacute;trico, un usuario A (con claves p&uacute;blica Pa y privada Ka) desea comunicarse con otro usuario B (con claves p&uacute;blica Pb y privada Kb). &iquest;De qu&eacute; forma podr&iacute;a A enviarle un mensaje (M) a B de manera que s&oacute;lo pueda verlo B y garantizando que ha sido A el que lo ha enviado?";
 choices[17]= new Array();
 choices[17][0] = "Kb(Pa(M)).";
 choices[17][1] = "Pb(Ka(M)).";
 choices[17][2] = "Pb(M).";
 choices[17][3] = "Ka(M).";
 answers[17] = 1;
 units[17] = ['76'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1526. ";
 preguntaids[17] = 1526


//  Id pregunta: 3065 Año de creación de pregunta: 2002
 questions[18]= "19)  SSL:";
 choices[18]= new Array();
 choices[18][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza (banco)";
 choices[18][1] = "Permite que un tercero cn acceso al tr&aacute;fico entre el servidor y el cliente no pueda romper la confidencialidad";
 choices[18][2] = "Es un algoritmo de cifrado, de un n&uacute;mero de bits variable";
 choices[18][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[18] = 1;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3065. ";
 preguntaids[18] = 3065


//  Id pregunta: 3219 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes no es una propiedad que debe cumplir una funci&oacute;n resumen (hash) ?";
 choices[19]= new Array();
 choices[19][0] = "Resistencia a la preimagen";
 choices[19][1] = "Resistencia a la colisi&oacute;n Fuerte";
 choices[19][2] = "Resistencia a la colisi&oacute;n Suave";
 choices[19][3] = "Resistencia a la no colisi&oacute;n";
 answers[19] = 3;
 units[19] = ['76'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3219. ";
 preguntaids[19] = 3219


//  Id pregunta: 3053 Año de creación de pregunta: 2002
 questions[20]= "21)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[20]= new Array();
 choices[20][0] = "Res&uacute;men";
 choices[20][1] = "Bloques";
 choices[20][2] = "Flujos";
 choices[20][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[20] = 0;
 units[20] = ['76'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3053. ";
 preguntaids[20] = 3053


//  Id pregunta: 2554 Año de creación de pregunta: 2005
 questions[21]= "22)  La captura de los datos de una tarjeta de cr&eacute;dito por un tercero, en una transacci&oacute;n econ&oacute;mica realizada a trav&eacute;s de internet entre un comprador y una tienda de comercio electr&oacute;nico afecta a:";
 choices[21]= new Array();
 choices[21][0] = "La dimensi&oacute;n de integridad de la informaci&oacute;n en tr&aacute;nsito";
 choices[21][1] = "La dimensi&oacute;n de autenticaci&oacute;n del destinatario de la informaci&oacute;n en tr&aacute;nsito";
 choices[21][2] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n en tr&aacute;nsito";
 choices[21][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n en tr&aacute;nsito";
 answers[21] = 2;
 units[21] = ['76'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2554. ";
 preguntaids[21] = 2554


//  Id pregunta: 3223 Año de creación de pregunta: 2003
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes algoritmos no es de criptograf&iacute;a sim&eacute;trica de flujos?";
 choices[22]= new Array();
 choices[22][0] = "WAKE";
 choices[22][1] = "RC-4";
 choices[22][2] = "SEAL";
 choices[22][3] = "MD5";
 answers[22] = 3;
 units[22] = ['76'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3223. ";
 preguntaids[22] = 3223


//  Id pregunta: 2634 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes sistemas de cifrado no es una alternativa aceptable para DES (Data Encryption Standard)?:";
 choices[23]= new Array();
 choices[23][0] = "RC-4";
 choices[23][1] = "IDEA";
 choices[23][2] = "Triple DES";
 choices[23][3] = "RSA";
 answers[23] = 3;
 units[23] = ['76'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2634. ";
 preguntaids[23] = 2634


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[24]= "25)  Los criptosistemas pueden clasificarse en:";
 choices[24]= new Array();
 choices[24][0] = "Concretos, Estables e Inestables.";
 choices[24][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[24][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[24][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[24] = 3;
 units[24] = ['76'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 779. Junta de Extremadura A1 2015";
 preguntaids[24] = 779


//  Id pregunta: 2988 Año de creación de pregunta: 2002
 questions[25]= "26)  Marcar la correcta respecto de los algoritmos criptogr&aacute;ficos:";
 choices[25]= new Array();
 choices[25][0] = "El algoritmo de cifra de Merkle-Hellman es de clave dispersa";
 choices[25][1] = "El algoritmo de cifra de Merkle-Hellman es de clave &uacute;nica";
 choices[25][2] = "El algoritmo DES es de clave p&uacute;blica";
 choices[25][3] = "El algoritmo DES es de clave sim&eacute;trica";
 answers[25] = 3;
 units[25] = ['76'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2988. ";
 preguntaids[25] = 2988


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[26]= "27)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[26]= new Array();
 choices[26][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[26][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[26][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[26][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[26] = 2;
 units[26] = ['76'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 780. Junta de Extremadura A1 2015";
 preguntaids[26] = 780


//  Id pregunta: 3017 Año de creación de pregunta: 2002
 questions[27]= "28)  Respecto al algoritmo RSA:";
 choices[27]= new Array();
 choices[27][0] = "Reduce el problema de la distribuci&oacute;n de claves respecto a los criptosistemas cl&aacute;sicos";
 choices[27][1] = "Pertenece a la categor&iacute;a de criptosistemas sim&eacute;tricos";
 choices[27][2] = "Se basa en la utilizaci&oacute;n de grandes series de n&uacute;meros primos de tama&ntilde;o peque&ntilde;o";
 choices[27][3] = "Se basa en la transposici&oacute;n y sustituci&oacute;n de s&iacute;mbolos a trav&eacute;s de m&uacute;ltiples iteraciones";
 answers[27] = 0;
 units[27] = ['76'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3017. ";
 preguntaids[27] = 3017


//  Id pregunta: 1875 Año de creación de pregunta: 2016
 questions[28]= "29)  Cu&aacute;l es el uso m&aacute;s generalizado de las funciones irreversibles tipo HASH:";
 choices[28]= new Array();
 choices[28][0] = "Para cifrar y descifrar mensajes";
 choices[28][1] = "Para firma electr&oacute;nica";
 choices[28][2] = "Para garantizar la confidencialidad";
 choices[28][3] = "Para encriptar mensajes";
 answers[28] = 1;
 units[28] = ['76'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1875. ";
 preguntaids[28] = 1875


//  Id pregunta: 1836 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones es la correcta dentro de un sistema de cifrado sim&eacute;trico?";
 choices[29]= new Array();
 choices[29][0] = "Se utiliza un par de claves, una para cifrar y otra para descifrar.";
 choices[29][1] = "Los extremos que se comunican deben conocer la clave privada.";
 choices[29][2] = "Utilizan longitudes de claves mayores que el cifrado asim&eacute;trico.";
 choices[29][3] = "Es m&aacute;s lento que el cifrado asim&eacute;trico.";
 answers[29] = 1;
 units[29] = ['76'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1836. ";
 preguntaids[29] = 1836


//  Id pregunta: 1073 Año de creación de pregunta: 2016
 questions[30]= "31)  Los cifradores de clave secreta:";
 choices[30]= new Array();
 choices[30][0] = "Pueden encadenarse (cifrado producto) produciendo un criptograma m&aacute;s robusto que el obtenido al aplicar un &uacute;nico cifrado.";
 choices[30][1] = "A igualdad de longitud de clave son m&aacute;s robustos que los de clave p&uacute;blica.";
 choices[30][2] = "Su seguridad recae en el secreto del dise&ntilde;o.";
 choices[30][3] = "Se usan en los sistemas operativos Windows XP y 7 para proteger las contrase&ntilde;as de los usuarios.";
 answers[30] = 1;
 units[30] = ['76'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1073. ";
 preguntaids[30] = 1073


//  Id pregunta: 3025 Año de creación de pregunta: 2002
 questions[31]= "32)  Se define como criptosistema asim&eacute;trico lo siguiente:";
 choices[31]= new Array();
 choices[31][0] = "algoritmo basado en clave &uacute;nica";
 choices[31][1] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo una p&uacute;blica y otra privada";
 choices[31][2] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo ambas privadas";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 1;
 units[31] = ['76'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3025. ";
 preguntaids[31] = 3025


//  Id pregunta: 1402 Año de creación de pregunta: 2016
 questions[32]= "33)  EI algoritmo SHA-l (RFC 3174) produce un resumen de salida de:";
 choices[32]= new Array();
 choices[32][0] = "128 bits";
 choices[32][1] = "160 bits";
 choices[32][2] = "224 bits";
 choices[32][3] = "256 bits";
 answers[32] = 1;
 units[32] = ['76'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1402. ";
 preguntaids[32] = 1402


//  Id pregunta: 2524 Año de creación de pregunta: 2004
 questions[33]= "34)  La criptograf&iacute;a sirve para codificar:";
 choices[33]= new Array();
 choices[33][0] = "Lenguaje manuscrito";
 choices[33][1] = "Lenguaje manuscrito y datos";
 choices[33][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[33][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[33] = 1;
 units[33] = ['76'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2524. Similar a examen TIC SS A 2003";
 preguntaids[33] = 2524


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;les de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?";
 choices[34]= new Array();
 choices[34][0] = "De m&eacute;todos y de funciones.";
 choices[34][1] = "De bloque y de flujo.";
 choices[34][2] = "De ocultamiento y de resumen.";
 choices[34][3] = "De funciones y de flujo.";
 answers[34] = 1;
 units[34] = ['76'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 777. AGE A2 2015";
 preguntaids[34] = 777


//  Id pregunta: 1759 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique cu&aacute;l de los siguientes NO es, actualmente, un tama&ntilde;o de clave v&aacute;lido para el algoritmo de cifrado AES:";
 choices[35]= new Array();
 choices[35][0] = "128 bits";
 choices[35][1] = "192 bits";
 choices[35][2] = "256 bits";
 choices[35][3] = "512 bits";
 answers[35] = 3;
 units[35] = ['76'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1759. ";
 preguntaids[35] = 1759


//  Id pregunta: 1758 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l de los siguientes algoritmos es de cifrado asim&eacute;trico:";
 choices[36]= new Array();
 choices[36][0] = "Cast5";
 choices[36][1] = "Twofish";
 choices[36][2] = "Idea";
 choices[36][3] = "ElGamal";
 answers[36] = 3;
 units[36] = ['76'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1758. ";
 preguntaids[36] = 1758


//  Id pregunta: 1049 Año de creación de pregunta: 2016
 questions[37]= "38)  Cu&aacute;l de los siguientes NO es un algoritmo de funciones hash:";
 choices[37]= new Array();
 choices[37][0] = "SHA-256.";
 choices[37][1] = "BASH.";
 choices[37][2] = "WHIRLPOOL.";
 choices[37][3] = "HAVAL.";
 answers[37] = 1;
 units[37] = ['76'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1049. ";
 preguntaids[37] = 1049


//  Id pregunta: 2975 Año de creación de pregunta: 2002
 questions[38]= "39)  Los criptosistemas irreversibles:";
 choices[38]= new Array();
 choices[38][0] = "No existen actualmente dada la potencia de los sistemas actuales y la potencia de la computaci&oacute;n distribuida";
 choices[38][1] = "Se utilizan sobre todo para la autenticaci&oacute;n de entidades";
 choices[38][2] = "Se basan en funciones matem&aacute;ticas no invertibles computacionalmente, o carentes de inversa";
 choices[38][3] = "B y C son ciertas";
 answers[38] = 3;
 units[38] = ['76'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2975. ";
 preguntaids[38] = 2975


//  Id pregunta: 2874 Año de creación de pregunta: 2002
 questions[39]= "40)  En una operaci&oacute;n de resumen o hash, con h = H(M) :";
 choices[39]= new Array();
 choices[39][0] = "M debe ser de longitud fija";
 choices[39][1] = "no tiene por qu&eacute; conocerse H";
 choices[39][2] = "h debe ser de longitud fija";
 choices[39][3] = "dado M, no siempre se va a poder calcular H(M)";
 answers[39] = 2;
 units[39] = ['76'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2874. ";
 preguntaids[39] = 2874


//  Id pregunta: 1223 Año de creación de pregunta: 2016
 questions[40]= "41)  Si a un mensaje le aplicamos una funci&oacute;n hash, ciframos el resultado con una clave privada y se lo enviamos a un tercero junto con el mensaje original conseguimos:";
 choices[40]= new Array();
 choices[40][0] = "Autenticaci&oacute;n, Integridad y No repudio en origen.";
 choices[40][1] = "Confidencialidad, Integridad y No repudio en origen.";
 choices[40][2] = "Autenticaci&oacute;n, Confidencialidad e Integridad.";
 choices[40][3] = "Autenticaci&oacute;n, Confidencialidad y No repudio en origen.";
 answers[40] = 0;
 units[40] = ['76'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1223. ";
 preguntaids[40] = 1223


//  Id pregunta: 3008 Año de creación de pregunta: 2002
 questions[41]= "42)  Pilar quier enviar un mensaje confidencial a Antonio, en un sistema de clave p&uacute;blica, por lo tanto existen las claves Pilar-privada / Pilar p&uacute;blica y Antonio privada / Antonio p&uacute;blica.  Pilar genera su mensaje, &iquest;con qu&eacute; clave de las cuatro lo cifrar&aacute;?:";
 choices[41]= new Array();
 choices[41][0] = "Pilar-privada";
 choices[41][1] = "Pilar-p&uacute;blica";
 choices[41][2] = "Antonio-privada";
 choices[41][3] = "Antonio-p&uacute;blica";
 answers[41] = 3;
 units[41] = ['76'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3008. ";
 preguntaids[41] = 3008


//  Id pregunta: 2817 Año de creación de pregunta: 2002
 questions[42]= "43)  En el proceso de cifrado basado en el m&eacute;todo DES de criptosistema sim&eacute;trico, en el cu&aacute;l existen n nodos de intercambio de mensajes, &iquest;cu&aacute;ntas claves debe gestionar cada uno de los nodos para comunicarse con el resto?:";
 choices[42]= new Array();
 choices[42][0] = "n";
 choices[42][1] = "n + 1";
 choices[42][2] = "n!";
 choices[42][3] = "Ninguna de las anteriores contestaciones es cierta";
 answers[42] = 3;
 units[42] = ['76'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2817. ";
 preguntaids[42] = 2817


//  Id pregunta: 2522 Año de creación de pregunta: 2004
 questions[43]= "44)  Los algoritmos de cifrado que utilizaban los antiguos romanos eran de clave:";
 choices[43]= new Array();
 choices[43][0] = "sim&eacute;trica";
 choices[43][1] = "asim&eacute;trica";
 choices[43][2] = "diferencial";
 choices[43][3] = "clave sim&eacute;trica o asim&eacute;trica, dependiendo del algoritmo";
 answers[43] = 0;
 units[43] = ['76'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2522. Similar a examen TIC SS A 2003";
 preguntaids[43] = 2522


//  Id pregunta: 2928 Año de creación de pregunta: 2002
 questions[44]= "45)  La clave p&uacute;blica forma parte de un:";
 choices[44]= new Array();
 choices[44][0] = "Sistema criptogr&aacute;fico sim&eacute;trico";
 choices[44][1] = "Sistema criptogr&aacute;fico anal&oacute;gico";
 choices[44][2] = "Sistema criptogr&aacute;fico asim&eacute;trico";
 choices[44][3] = "Sistema criptogr&aacute;fico propietario de la Administraci&oacute;n P&uacute;blica";
 answers[44] = 2;
 units[44] = ['76'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2928. ";
 preguntaids[44] = 2928


//  Id pregunta: 1838 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es el tama&ntilde;o de bloque del algoritmo DES?";
 choices[45]= new Array();
 choices[45][0] = "64 bits";
 choices[45][1] = "56 bits";
 choices[45][2] = "128 bits";
 choices[45][3] = "256 bits";
 answers[45] = 0;
 units[45] = ['76'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1838. ";
 preguntaids[45] = 1838


//  Id pregunta: 1729 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale qu&eacute; m&oacute;dulo criptogr&aacute;fico debe tener instalado un ordenador para que el usuario pueda utilizar el DNI electr&oacute;nico:";
 choices[46]= new Array();
 choices[46][0] = "No es necesario ning&uacute;n m&oacute;dulo criptogr&aacute;fico.";
 choices[46][1] = "Debe estar instalado &quot;Cryptographic Service Provider&quot; (CSP) o el m&oacute;dulo PKCS#11 indistintamente.";
 choices[46][2] = "En los entornos UNIX / Linux o MAC debe estar instalado el m&oacute;dulo PKCS#11.";
 choices[46][3] = "En un entorno Microsoft Windows debe estar instalado el m&oacute;dulo PKCS#11.";
 answers[46] = 2;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1729. ";
 preguntaids[46] = 1729


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[47]= "48)  Cu&aacute;l de los siguientes NO es una forma b&aacute;sica de funcionamiento o modo de operaci&oacute;n con los bloques de mensajes en los algoritmos sim&eacute;tricos de cifrado:";
 choices[47]= new Array();
 choices[47][0] = "Cipher Block Chainning (CBC).";
 choices[47][1] = "Cipher FeedBack (CFB).";
 choices[47][2] = "Output FeedBack (OFB).";
 choices[47][3] = "Quadruple Block Cipher (QBC).";
 answers[47] = 3;
 units[47] = ['76'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 778. AGE A2 2015";
 preguntaids[47] = 778


//  Id pregunta: 2726 Año de creación de pregunta: 2002
 questions[48]= "49)  De los siguientes algoritmos cript&oacute;graficos se&ntilde;ale cu&aacute;l es de clave p&uacute;blica:";
 choices[48]= new Array();
 choices[48][0] = "DES (Data Encryption Standard)";
 choices[48][1] = "RSA (Rivest, Shamir, Adelman)";
 choices[48][2] = "IDEA (International Data Encryption Algorithm)";
 choices[48][3] = "LOKI";
 answers[48] = 1;
 units[48] = ['76'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2726. ";
 preguntaids[48] = 2726


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[49]= new Array();
 choices[49][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[49][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[49][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[49][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[49] = 1;
 units[49] = ['76'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 775. AGE A1 2015";
 preguntaids[49] = 775


//  Id pregunta: 2735 Año de creación de pregunta: 2002
 questions[50]= "51)  Diffie y Hellman inventaron:";
 choices[50]= new Array();
 choices[50][0] = "Un algoritmo criptogr&aacute;fico";
 choices[50][1] = "Un mecanismo de intercambio de claves";
 choices[50][2] = "Las infraestructuras de clave p&uacute;blica (PKI))";
 choices[50][3] = "Las funciones resumen";
 answers[50] = 1;
 units[50] = ['76'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2735. ";
 preguntaids[50] = 2735


//  Id pregunta: 2594 Año de creación de pregunta: 2002
 questions[51]= "52)  Comparando la criptograf&iacute;a de clave secreta frente a la criptograf&iacute;a asim&eacute;trica. &iquest;C&uacute;al de los dos tipos de criptograf&iacute;a es m&aacute;s segura, suponiendo igual longitud de clave?:";
 choices[51]= new Array();
 choices[51][0] = "La de clave secreta";
 choices[51][1] = "La asim&eacute;trica";
 choices[51][2] = "Son igual de seguras";
 choices[51][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[51] = 0;
 units[51] = ['76'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2594. ";
 preguntaids[51] = 2594


//  Id pregunta: 1225 Año de creación de pregunta: 2016
 questions[52]= "53)  SHA-1 produce un valor hash de:";
 choices[52]= new Array();
 choices[52][0] = "20 bytes.";
 choices[52][1] = "33 bytes.";
 choices[52][2] = "256 y 512 bits, respectivamente.";
 choices[52][3] = "256 bits.";
 answers[52] = 0;
 units[52] = ['76'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1225. ";
 preguntaids[52] = 1225


//  Id pregunta: 2523 Año de creación de pregunta: 2004
 questions[53]= "54)  La ciencia que trata de descifrar mensajes cifrados sin conocer los c&oacute;digos se denomina:";
 choices[53]= new Array();
 choices[53][0] = "Criptoan&aacute;lisis o an&aacute;lisis criptogr&aacute;fico";
 choices[53][1] = "Ingenier&iacute;a social";
 choices[53][2] = "Fuerza Bruta";
 choices[53][3] = "Criptograf&iacute;a";
 answers[53] = 0;
 units[53] = ['76'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2523. Similar a examen TIC SS A 2003";
 preguntaids[53] = 2523


//  Id pregunta: 2601 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al uso de mecanismos criptogr&aacute;ficos?:";
 choices[54]= new Array();
 choices[54][0] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la latencia de las comunicaciones";
 choices[54][1] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la confidencialidad";
 choices[54][2] = "El uso de mecanismos criptogr&aacute;ficos puede implementarse por software o por hardware";
 choices[54][3] = "El uso de mecanismos criptogr&aacute;ficos no puede proporcionar integridad en las comunicaciones";
 answers[54] = 3;
 units[54] = ['76'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2601. ";
 preguntaids[54] = 2601


//  Id pregunta: 2788 Año de creación de pregunta: 2002
 questions[55]= "56)  El servicio de seguridad que garantiza que la informaci&oacute;n no ha sido mutilada o alterada de manera no autorizada se denomina:";
 choices[55]= new Array();
 choices[55][0] = "Autentificaci&oacute;n";
 choices[55][1] = "Confidencialidad";
 choices[55][2] = "Integridad";
 choices[55][3] = "No repudio";
 answers[55] = 2;
 units[55] = ['76'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2788. ";
 preguntaids[55] = 2788


//  Id pregunta: 2790 Año de creación de pregunta: 2002
 questions[56]= "57)  El sistema de encriptaci&oacute;n RSA (Rivest, Shamir y Adleman, 1978)&hellip;:";
 choices[56]= new Array();
 choices[56][0] = "El receptor del mensaje debe conocer la clave p&uacute;blica para descifrarlo";
 choices[56][1] = "Se basa en la seguridad que confiere la dificultad de factorizar n&uacute;meros grandes";
 choices[56][2] = "Es un sistema de encriptaci&oacute;n sim&eacute;trico";
 choices[56][3] = "Garantiza la seguridad a&uacute;n utilizando n&uacute;meros primos de menos de veinte cifras";
 answers[56] = 1;
 units[56] = ['76'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2790. ";
 preguntaids[56] = 2790


//  Id pregunta: 2754 Año de creación de pregunta: 2002
 questions[57]= "58)  El ganador del concurso p&uacute;blico para reemplazar al algoritmo DES es:";
 choices[57]= new Array();
 choices[57][0] = "RC6";
 choices[57][1] = "Twofish";
 choices[57][2] = "Serpent";
 choices[57][3] = "Rijndael";
 answers[57] = 3;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2754. ";
 preguntaids[57] = 2754


//  Id pregunta: 3243 Año de creación de pregunta: 2004
 questions[58]= "59)  Sobre el algoritmo de cifrado RSA en no es cierto que";
 choices[58]= new Array();
 choices[58][0] = "Es utilizado para firmar digitalmente";
 choices[58][1] = "Fue propuesto por Diffie y Hellman";
 choices[58][2] = "Lo que se cifra con la clave privada se descifra con la p&uacute;blica";
 choices[58][3] = "Lo que se cifra con la clave p&uacute;blica se descifra con la privada";
 answers[58] = 1;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3243. ";
 preguntaids[58] = 3243


//  Id pregunta: 2733 Año de creación de pregunta: 2002
 questions[59]= "60)  Dentro de los sistemas de criptograf&iacute;a de res&uacute;men podemos encontrar los algoritmos:";
 choices[59]= new Array();
 choices[59][0] = "DES";
 choices[59][1] = "SEAL";
 choices[59][2] = "RC-4";
 choices[59][3] = "MD-5";
 answers[59] = 3;
 units[59] = ['76'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2733. ";
 preguntaids[59] = 2733


//  Id pregunta: 2794 Año de creación de pregunta: 2002
 questions[60]= "61)  El test de rachas utilizado en criptograf&iacute;a se basa en:";
 choices[60]= new Array();
 choices[60][0] = "El an&aacute;lisis de la independencia de los elementos de un criptograma";
 choices[60][1] = "La b&uacute;squeda de las posibles dependencias o recursiones de un criptograma";
 choices[60][2] = "La b&uacute;squeda de independencia entre s&iacute;mbolos de un criptograma";
 choices[60][3] = "El an&aacute;lisis de la dependencia entre s&iacute;mbolos de un criptograma";
 answers[60] = 0;
 units[60] = ['76'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2794. ";
 preguntaids[60] = 2794


//  Id pregunta: 1220 Año de creación de pregunta: 2016
 questions[61]= "62)  En el &aacute;mbito de la criptograf&iacute;a asim&eacute;trica, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[61]= new Array();
 choices[61][0] = "La clave p&uacute;blica sirve para firmar los documentos, antes de enviarlos.";
 choices[61][1] = "La clave privada sirve para cifrar la clave p&uacute;blica antes de firmar con esta &uacute;ltima un documento.";
 choices[61][2] = "La clave privada se ha de generar aleatoriamente a partir de la clave p&uacute;blica cada vez que se firma un documento.";
 choices[61][3] = "La clave p&uacute;blica sirve para comprobar la firma digital de un documento firmado.";
 answers[61] = 3;
 units[61] = ['76'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1220. ";
 preguntaids[61] = 1220


//  Id pregunta: 2646 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;C&uacute;al o c&uacute;ales de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?:";
 choices[62]= new Array();
 choices[62][0] = "De bloques (block cipher),  de flujos (stream cipher) y de res&uacute;men (hash function)";
 choices[62][1] = "De flujos (stream cipher), de res&uacute;men (hash function) y de sigilo (stealth cipher)";
 choices[62][2] = "De bloques (block cipher),  de ocultamiento (conceal cipher) y de sellado de tiempo (time stamping cipher)";
 choices[62][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[62] = 0;
 units[62] = ['76'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2646. ";
 preguntaids[62] = 2646


//  Id pregunta: 2841 Año de creación de pregunta: 2002
 questions[63]= "64)  En los algoritmos de clave sim&eacute;trica:";
 choices[63]= new Array();
 choices[63][0] = "se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[63][1] = "tienen alta velocidad de cifrado y descifrado";
 choices[63][2] = "no se ha alcanzado a&uacute;n la perfecci&oacute;n matem&aacute;tica, y existen algoritmos eficaces para reventarlos aparte del de fuerza bruta";
 choices[63][3] = "no pueden ser usados para autenticar a las partes";
 answers[63] = 1;
 units[63] = ['76'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2841. ";
 preguntaids[63] = 2841


//  Id pregunta: 3054 Año de creación de pregunta: 2005
 questions[64]= "65)  &iquest;Qu&eacute; se conoce por SHA-2?:";
 choices[64]= new Array();
 choices[64][0] = "Una funci&oacute;n de compresi&oacute;n";
 choices[64][1] = "Un mecanismo de intercambio de claves";
 choices[64][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[64][3] = "Un conjunto de funciones resumen";
 answers[64] = 3;
 units[64] = ['76'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3054. ";
 preguntaids[64] = 3054


//  Id pregunta: 1054 Año de creación de pregunta: 2016
 questions[65]= "66)  Las funciones resumen (hash) MD5 y SHA-1 tienen en com&uacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Que ambas admiten mensajes de entrada de longitud m&aacute;xima 264 Mbytes.";
 choices[65][1] = "Que ambas generan res&uacute;menes de 128 bits.";
 choices[65][2] = "Que ambas realizan relleno de bits (si procede) en el &uacute;ltimo bloque del mensaje.";
 choices[65][3] = "Que ambas realizan 80 iteraciones por bloque del mensaje.";
 answers[65] = 2;
 units[65] = ['76'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1054. ";
 preguntaids[65] = 1054


//  Id pregunta: 2610 Año de creación de pregunta: 2002
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de una funci&oacute;n Hash?:";
 choices[66]= new Array();
 choices[66][0] = "Obtiene un resultado unidireccional e irreversible";
 choices[66][1] = "No hace falta una clave pues el texto cifrado depende exclusivamente del texto claro original";
 choices[66][2] = "Se trata de una funci&oacute;n libre de colisiones en sentido estricto";
 choices[66][3] = "La seguridad de la funci&oacute;n Hash radica en su car&aacute;cter bidireccional";
 answers[66] = 3;
 units[66] = ['76'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2610. ";
 preguntaids[66] = 2610


//  Id pregunta: 1515 Año de creación de pregunta: 2016
 questions[67]= "68)  En la criptograf&iacute;a de clave p&uacute;blica, si queremos garantizar la autenticidad y el no repudio en origen de un mensaje que enviamos a un tercero, &iquest;con qu&eacute; clave debemos cifrar nuestro mensaje?";
 choices[67]= new Array();
 choices[67][0] = "Con nuestra clave p&uacute;blica.";
 choices[67][1] = "Con nuestra clave privada.";
 choices[67][2] = "Con la clave p&uacute;blica del receptor.";
 choices[67][3] = "Con la clave privada del receptor.";
 answers[67] = 1;
 units[67] = ['76'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1515. ";
 preguntaids[67] = 1515


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; es la esteganograf&iacute;a?";
 choices[68]= new Array();
 choices[68][0] = "Es equivalente al cifrado, especialmente en im&aacute;genes digitales, audio, ficheros y video digital.";
 choices[68][1] = "Es un tipo de troyano.";
 choices[68][2] = "Actualmente no se utiliza para el env&iacute;o de informaci&oacute;n.";
 choices[68][3] = "Es el envio de un mensaje oculto, especialmente en im&aacute;genes digitales, audio, ficheros y video digital.";
 answers[68] = 3;
 units[68] = ['76'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 776. AGE A2 2015";
 preguntaids[68] = 776


//  Id pregunta: 3239 Año de creación de pregunta: 2003
 questions[69]= "70)  &iquest;Qu&eacute; es lo que la Firma Digital no garantiza por si sola?";
 choices[69]= new Array();
 choices[69][0] = "Autenticaci&oacute;n";
 choices[69][1] = "Integridad";
 choices[69][2] = "Disponibilidad";
 choices[69][3] = "No repudio";
 answers[69] = 2;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3239. ";
 preguntaids[69] = 3239


//  Id pregunta: 2730 Año de creación de pregunta: 2002
 questions[70]= "71)  Dentro de los criptosistemas el Data Encryption Standard es el m&aacute;s conocido por su f&aacute;cil implementaci&oacute;n. Indicar cu&aacute;l de las siguientes afirmaciones no le es aplicable:";
 choices[70]= new Array();
 choices[70][0] = "La clave es &uacute;nica y debe ser conocida por receptor y emisor";
 choices[70][1] = "La longitud de la clave es de 56 bits";
 choices[70][2] = "El ciclo de permutaci&oacute;n y sustituci&oacute;n se repite 16 veces";
 choices[70][3] = "Este m&eacute;todo de cifrado se conoce como de clave p&uacute;blica";
 answers[70] = 3;
 units[70] = ['76'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2730. ";
 preguntaids[70] = 2730


//  Id pregunta: 1877 Año de creación de pregunta: 2016
 questions[71]= "72)  Los algoritmos de clave sim&eacute;trica:";
 choices[71]= new Array();
 choices[71][0] = "Disponen de un par de claves p&uacute;blica/privada";
 choices[71][1] = "Son menos eficientes que los de clave asim&eacute;trica";
 choices[71][2] = "Se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[71][3] = "Tienen una alta velocidad de cifrado y descifrado";
 answers[71] = 3;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1877. ";
 preguntaids[71] = 1877


//  Id pregunta: 2742 Año de creación de pregunta: 2002
 questions[72]= "73)  El cifrado TDES - 2EDE (Encrypt-Decrypt-Encrypt) es:";
 choices[72]= new Array();
 choices[72][0] = "Un cifrado doble con 2 claves que aumentan el tama&ntilde;o de la clave DES a 112 bits";
 choices[72][1] = "Un cifrado triple con 2 claves que aumenta el tama&ntilde;o de la clave DES a 112 bits";
 choices[72][2] = "Un cifrado triple con una clave de 56 bits";
 choices[72][3] = "No existe";
 answers[72] = 1;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2742. ";
 preguntaids[72] = 2742


//  Id pregunta: 3007 Año de creación de pregunta: 2002
 questions[73]= "74)  PGP son una siglas muy conocidad dentro del mundo del cifrado y de la seguridad. &iquest;A qu&eacute; corresponden?:";
 choices[73]= new Array();
 choices[73][0] = "Pretty Good Privacy";
 choices[73][1] = "Personal General Privacity";
 choices[73][2] = "Privacity Generator Program";
 choices[73][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[73] = 0;
 units[73] = ['76'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3007. ";
 preguntaids[73] = 3007


//  Id pregunta: 2556 Año de creación de pregunta: 2004
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos es de tipo asim&eacute;trico?";
 choices[74]= new Array();
 choices[74][0] = "Triple DES (TDES)";
 choices[74][1] = "Rinjdael (AES)";
 choices[74][2] = "Diffie-Hellman";
 choices[74][3] = "IDEA (International Data Encription Algorithm)";
 answers[74] = 2;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2556. Examen Seg-Social A 2004";
 preguntaids[74] = 2556


