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
//  Id pregunta: 10896 Año de creación de pregunta: 2015
 questions[0]= "1)  En el &aacute;mbito de la seguridad,&iquest;a qu&eacute; atienden las siglas AAA?";
 choices[0]= new Array();
 choices[0][0] = "Authentication, Authorization and Accounting";
 choices[0][1] = "Acknowledge, Authorization and Accounting";
 choices[0][2] = "Authentication, Authorization and Access";
 choices[0][3] = "Authentication, Approval and Accounting";
 answers[0] = 0;
 units[0] = ['119'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10896. ";
 preguntaids[0] = 10896


//  Id pregunta: 10916 Año de creación de pregunta: 2015
 questions[1]= "2)  Qu&eacute; dos algoritmos de cifrado se utilizan en IPsec VPN?";
 choices[1]= new Array();
 choices[1][0] = "3DES y AES";
 choices[1][1] = "AES y DH";
 choices[1][2] = "3DES y PSK";
 choices[1][3] = "IKE y PSK";
 answers[1] = 0;
 units[1] = ['119'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10916. ";
 preguntaids[1] = 10916


//  Id pregunta: 10914 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[2]= new Array();
 choices[2][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[2][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[2][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[2][3] = "Se trata de una suite propietaria";
 answers[2] = 1;
 units[2] = ['119'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10914. ";
 preguntaids[2] = 10914


//  Id pregunta: 10893 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;cu&aacute;l es una caracter&iacute;stica de los ataques DoS?";
 choices[3]= new Array();
 choices[3][0] = "Siempre preceden a ataques de acceso";
 choices[3][1] = "Intentan comprometer la disponibilidad de un equipo, red, o aplicaci&oacute;n";
 choices[3][2] = "Un ejemplo de ellos es el escaneo de puertos";
 choices[3][3] = "Un ejemplo de ellos es el &quot;barrido de ping&quot;";
 answers[3] = 1;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10893. ";
 preguntaids[3] = 10893


//  Id pregunta: 10894 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los Caballos de Troya?";
 choices[4]= new Array();
 choices[4][0] = "Un caballo de troya proxy abre el puerto 21 en el sistema objetivo";
 choices[4][1] = "Un caballo de troya es dificil de detectar, porque detiene su ejecuci&oacute;n cuando la aplicaci&oacute;n que lo ejecut&oacute; se cierra.";
 choices[4][2] = "Un caballo de Troya puede cargarse en un virus o un gusano";
 choices[4][3] = "Un caballo de Troya FTP compromete el funcionamiento de cortafuegos";
 answers[4] = 2;
 units[4] = ['119'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10894. ";
 preguntaids[4] = 10894


//  Id pregunta: 10922 Año de creación de pregunta: 2015
 questions[5]= "6)  Diferencia entre un virus y un &ldquo;Caballo de Troya&rdquo;:";
 choices[5]= new Array();
 choices[5][0] = "El virus suele utilizar canales encubiertos.";
 choices[5][1] = "El virus presenta un mecanismo de replicaci&oacute;n.";
 choices[5][2] = "El &ldquo;Caballo de Troya&rdquo; advierte de su presencia.";
 choices[5][3] = "El &ldquo;Caballo de Troya&rdquo; no esconde funciones potencialmente maliciosas.";
 answers[5] = 1;
 units[5] = ['119'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 10922. ";
 preguntaids[5] = 10922


//  Id pregunta: 10909 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Qu&eacute; metodo de acceso es utilizado para establecer conexiones remotas de linea de comandos, manteniendo el ID de usuario, la contrase&ntilde;a y los contenidos de la sesi&oacute;n de manera privada?";
 choices[6]= new Array();
 choices[6][0] = "Telnet";
 choices[6][1] = "Consola";
 choices[6][2] = "Puerto auxiliar";
 choices[6][3] = "SSH";
 answers[6] = 3;
 units[6] = ['119'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10909. ";
 preguntaids[6] = 10909


//  Id pregunta: 10917 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Qu&eacute; protocolo, en el &aacute;mbito de Ipsec, proporciona confidencialidad de los datos y la autenticaci&oacute;n de paquetes IP?";
 choices[7]= new Array();
 choices[7][0] = "AH";
 choices[7][1] = "RSA";
 choices[7][2] = "IKE";
 choices[7][3] = "ESP";
 answers[7] = 3;
 units[7] = ['119'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10917. ";
 preguntaids[7] = 10917


//  Id pregunta: 10881 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Qu&eacute; es PAT?";
 choices[8]= new Array();
 choices[8][0] = "Port Address Translation";
 choices[8][1] = "Protocol Access Translation";
 choices[8][2] = "Port Acknowledge Timeout";
 choices[8][3] = "PDU access token";
 answers[8] = 0;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10881. ";
 preguntaids[8] = 10881


//  Id pregunta: 10930 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Qu&eacute; algoritmo utiliza el cifrado por bloques?";
 choices[9]= new Array();
 choices[9][0] = "ElGamal";
 choices[9][1] = "DSA";
 choices[9][2] = "RSA";
 choices[9][3] = "DES";
 answers[9] = 3;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10930. ";
 preguntaids[9] = 10930


//  Id pregunta: 10880 Año de creación de pregunta: 2015
 questions[10]= "11)  En qu&eacute; consiste el mecanismo de Sobrecarga NAT";
 choices[10]= new Array();
 choices[10][0] = "En la utilizaci&oacute;n de puertos para traducir una direccion interna local en una direccion interna global.";
 choices[10][1] = "En la utilizaci&oacute;n de puertos para traducir direcciones internas locales en una o m&aacute;s direcciones globales internas.";
 choices[10][2] = "Traduce una direccion local interna en una global interna";
 choices[10][3] = "Traduce una direccion local interna en otra direccion local interna";
 answers[10] = 1;
 units[10] = ['119'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10880. ";
 preguntaids[10] = 10880


//  Id pregunta: 10895 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Qu&eacute; amenaza de seguridad se trata de SW que se adhiere a otro SW para ejecutar funciones no deseadas?";
 choices[11]= new Array();
 choices[11][0] = "Virus";
 choices[11][1] = "Gusano";
 choices[11][2] = "Caballo de Troya Proxy";
 choices[11][3] = "Caballo de Troya de denegaci&oacute;n de servicio";
 answers[11] = 0;
 units[11] = ['119'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 10895. ";
 preguntaids[11] = 10895


