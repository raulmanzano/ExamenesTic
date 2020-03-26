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
//  Id pregunta: 8404 Año de creación de pregunta: 2011
 questions[0]= "1)  Indicar cu&aacute;l de las siguientes herramientas y protocolos permite el control remoto de puestos de usuario:";
 choices[0]= new Array();
 choices[0][0] = "NNTP.";
 choices[0][1] = "VNC.";
 choices[0][2] = "NTP.";
 choices[0][3] = "FTP";
 answers[0] = 1;
 units[0] = ['123'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8404. Operador Ayto. Madrid 2010";
 preguntaids[0] = 8404


//  Id pregunta: 8183 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Cual de las siguientes soluciones comerciales de Escritorio Remoto se distribuye bajo licencia propietaria?";
 choices[1]= new Array();
 choices[1][0] = "Vinagre";
 choices[1][1] = "DameWare Mini Remote Control";
 choices[1][2] = "TightVNC";
 choices[1][3] = "RdesKtop";
 answers[1] = 1;
 units[1] = ['123'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8183. Examen TIC A2 2010 interna";
 preguntaids[1] = 8183


//  Id pregunta: 9208 Año de creación de pregunta: 2014
 questions[2]= "3)  Indique la respuesta falsa:";
 choices[2]= new Array();
 choices[2][0] = "El estandar de autenticaci&oacute;n OAuth fue crado por la OATH (Initiative for Open Authentication).";
 choices[2][1] = "OAuth 2.0 no es compatible con OAuth 1.0.";
 choices[2][2] = "Graph API de Facebook solo soporta OAuth 2.0.";
 choices[2][3] = "Google soporta Oauth 2.0. como m&eacute;todo recomendado de autenticaci&oacute;n para todas sus APIs.";
 answers[2] = 0;
 units[2] = ['123'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9208. Oauth y OATH son conceptos diferentes.";
 preguntaids[2] = 9208


//  Id pregunta: 10925 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[3]= new Array();
 choices[3][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[3][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[3][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[3][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[3] = 0;
 units[3] = ['123'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10925. ";
 preguntaids[3] = 10925


//  Id pregunta: 7673 Año de creación de pregunta: 2010
 questions[4]= "5)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[4]= new Array();
 choices[4][0] = "El sistema de autenticaci&oacute;n &laquo;Kerberos&raquo;, utiliza exclusivamente mecanismos de criptograf&iacute;a asim&eacute;trica.";
 choices[4][1] = "Para la autenticaci&oacute;n &laquo;Kerberos&raquo; utiliza mecanismos basados en criptograf&iacute;a sim&eacute;trica y en criptograf&iacute;a asim&eacute;trica.";
 choices[4][2] = "Para la autenticaci&oacute;n &laquo;Kerberos&raquo; utiliza exclusivamente mecanismos basados en criptograf&iacute;a sim&eacute;trica.";
 choices[4][3] = "Para la autenticaci&oacute;n &laquo;Kerberos&raquo; utiliza mecanismos de identificaci&oacute;n/password y de criptograf&iacute;a sim&eacute;trica.";
 answers[4] = 3;
 units[4] = ['123'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 7673. Map 2007";
 preguntaids[4] = 7673


//  Id pregunta: 9875 Año de creación de pregunta: 2015
 questions[5]= "6)  Single Sign-on...";
 choices[5]= new Array();
 choices[5][0] = "&hellip; es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[5][1] = "&hellip; un conjunto de librer&iacute;as open source para identidades federadas.";
 choices[5][2] = "&hellip; una especificaci&oacute;n de mensajes SAML.";
 choices[5][3] = "&hellip; es una informaci&oacute;n almacenada en el navegador del usuario para su consulta posterior.";
 answers[5] = 0;
 units[5] = ['123'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9875. ";
 preguntaids[5] = 9875


//  Id pregunta: 10137 Año de creación de pregunta: 2015
 questions[6]= "7)  Respecto al protocolo Oauth, se&ntilde;ale la respuesta correcta:";
 choices[6]= new Array();
 choices[6][0] = "Es propietario de Twitter, y permite gestionar el acceso a su API por parte de otras aplicaciones.";
 choices[6][1] = "Permite su uso en aplicaciones web y m&oacute;viles, pero no de escritorio.";
 choices[6][2] = "Permite el acceso a la identidad completa del usuario por parte del servidor de aplicaciones.";
 choices[6][3] = "Permite utilizar la cuenta de Facebook para acceder a otras aplicaciones.";
 answers[6] = 3;
 units[6] = ['123'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10137. Examen TIC A1 2014";
 preguntaids[6] = 10137


//  Id pregunta: 8345 Año de creación de pregunta: 2011
 questions[7]= "8)  Se entiende por SSO";
 choices[7]= new Array();
 choices[7][0] = "Un procedimiento de autenticaci&oacute;n que permite acceder a diversos recursos inform&aacute;ticos utilizando una &uacute;nica identificaci&oacute;n";
 choices[7][1] = "Un sistema basado el claves SSL para la gesti&oacute;n remota de claves sim&eacute;tricas";
 choices[7][2] = "Un sistema de gesti&oacute;n y almacenamiento de claves fraccionadas con coherencia asim&eacute;trica";
 choices[7][3] = "Un procedimiento de comunicaciones seguras entre objetos basado en sockets";
 answers[7] = 0;
 units[7] = ['123'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8345. Examen UC3M 2010";
 preguntaids[7] = 8345


//  Id pregunta: 6766 Año de creación de pregunta: 2009
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de un sistema de gesti&oacute;n de identidades respecto de la gesti&oacute;n de usuarios tradicional?";
 choices[8]= new Array();
 choices[8][0] = "Proporciona un punto &uacute;nico de provisi&oacute;n de usuarios para todos los sistemas de la organizaci&oacute;n";
 choices[8][1] = "Sincronizaci&oacute;n entre sistemas";
 choices[8][2] = "No existe una gesti&oacute;n centralizada del ciclo de vida de los usuarios";
 choices[8][3] = "Unificaci&oacute;n de contrase&ntilde;as en recursos";
 answers[8] = 2;
 units[8] = ['123'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6766. ";
 preguntaids[8] = 6766


//  Id pregunta: 1748 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale a qu&eacute; se denomina Single sign-on (SSO):";
 choices[9]= new Array();
 choices[9][0] = "Es un protocolo de cifrado para autenticar al usuario.";
 choices[9][1] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[9][2] = "Esta asociado al cifrado basado en Secure Socket Layers (SSL).";
 choices[9][3] = "Permite a trav&eacute;s del protocolo de red HTTPS identificar a los usuarios en el acceso a servicios Web.";
 answers[9] = 1;
 units[9] = ['123'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1748. ";
 preguntaids[9] = 1748


//  Id pregunta: 9207 Año de creación de pregunta: 2014
 questions[10]= "11)  Indique la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "OAuth (Open Authorization) es un protocolo abierto que permite autorizaci&oacute;n segura de una API de modo est&aacute;ndar y simple para aplicaciones de escritorio, m&oacute;viles y web.";
 choices[10][1] = "OAuth y OpenID son protocolos id&eacute;nticos.";
 choices[10][2] = "OpenID es un est&aacute;ndar de identificaci&oacute;n digital descentralizado, con el que un usuario puede identificarse en una p&aacute;gina web a trav&eacute;s de una URL o XRI.";
 choices[10][3] = "A diferencia de arquitecturas Single Sign-On, OpenId no especifica el mecanismo de autenticaci&oacute;n.";
 answers[10] = 1;
 units[10] = ['123'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9207. Oauth y OpenID son completamente diferentes. El resto de respuestas son ciertas.";
 preguntaids[10] = 9207


//  Id pregunta: 6818 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l de estas herramientas NO est&aacute; relacionada con la gesti&oacute;n de identidades?";
 choices[11]= new Array();
 choices[11][0] = "Oracle Identity Management";
 choices[11][1] = "BMC Remedy Action Request System";
 choices[11][2] = "IBM Tivoli Identity Manager";
 choices[11][3] = "Novell Nsure";
 answers[11] = 1;
 units[11] = ['123'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6818. ";
 preguntaids[11] = 6818


//  Id pregunta: 6768 Año de creación de pregunta: 2009
 questions[12]= "13)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[12]= new Array();
 choices[12][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[12][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[12][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[12][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[12] = 0;
 units[12] = ['123'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 6768. ";
 preguntaids[12] = 6768


//  Id pregunta: 10118 Año de creación de pregunta: 2015
 questions[13]= "14)  SAML (Security Assertion Markup Language):";
 choices[13]= new Array();
 choices[13][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[13][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[13][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[13][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[13] = 0;
 units[13] = ['123'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10118. Examen TIC A1 2014";
 preguntaids[13] = 10118


//  Id pregunta: 6767 Año de creación de pregunta: 2009
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es un beneficio de un sistema de gesti&oacute;n de identidades respecto de la gesti&oacute;n de usuarios tradicional?";
 choices[14]= new Array();
 choices[14][0] = "Inexistencia de un interfaz de self-service para el usuario final";
 choices[14][1] = "Informes de auditoria";
 choices[14][2] = "Visi&oacute;n global del perfil del usuario";
 choices[14][3] = "Administraci&oacute;n delegada de usuarios";
 answers[14] = 0;
 units[14] = ['123'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6767. ";
 preguntaids[14] = 6767


//  Id pregunta: 6820 Año de creación de pregunta: 2010
 questions[15]= "16)  En el &aacute;mbito del Single Sign-On, &iquest;c&oacute;mo se denomina a la informaci&oacute;n confidencial agrupada (nombre de usuario, contrase&ntilde;a, etc) que se precisa para acceder a las aplicaciones?";
 choices[15]= new Array();
 choices[15][0] = "Credenciales";
 choices[15][1] = "Federaci&oacute;n";
 choices[15][2] = "Cookies";
 choices[15][3] = "Login";
 answers[15] = 0;
 units[15] = ['123'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6820. ";
 preguntaids[15] = 6820


//  Id pregunta: 6817 Año de creación de pregunta: 2010
 questions[16]= "17)  El proyecto Fidelity, de gesti&oacute;n de identidad federado en &aacute;mbito europeo, est&aacute; basado en est&aacute;ndares de:";
 choices[16]= new Array();
 choices[16][0] = "W3C";
 choices[16][1] = "IEEE";
 choices[16][2] = "CEN";
 choices[16][3] = "Liberty Alliance";
 answers[16] = 3;
 units[16] = ['123'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 6817. ";
 preguntaids[16] = 6817


//  Id pregunta: 6769 Año de creación de pregunta: 2009
 questions[17]= "18)  &iquest;Qu&eacute; es SSO?";
 choices[17]= new Array();
 choices[17][0] = "Es un Sistema Operativo para proporcionar la autorizaci&oacute;n de utilizaci&oacute;n de recursos basado en certificados de usuario.";
 choices[17][1] = "Es un m&eacute;todo de control de acceso que permite a un usuario validarse una &uacute;nica vez y tener acceso a diferentes recursos sin tener que volver a introducir sus credenciales";
 choices[17][2] = "Es una plataforma que almacena todas las contrase&ntilde;as del usuario para que &eacute;ste no tenga que teclearlas cada vez que accede a las distintas aplicaciones";
 choices[17][3] = "Es la plataforma PKI que emite certificados de empleado p&uacute;blico para la AGE";
 answers[17] = 1;
 units[17] = ['123'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 6769. ";
 preguntaids[17] = 6769


//  Id pregunta: 6819 Año de creación de pregunta: 2010
 questions[18]= "19)  En relaci&oacute;n con el Single Sign On";
 choices[18]= new Array();
 choices[18][0] = "Los sistemas Web Single Sign On utilizan 'cookies' para reconocer a los usuarios y su estado de autenticaci&oacute;n";
 choices[18][1] = "Los usuarios de los sistemas SSO mediante Kerberos reciben un 'ticket' al registrarse que luego se presenta en las aplicaciones cliente";
 choices[18][2] = "Las dos respuestas anteriores son correctas";
 choices[18][3] = "Todas las respuestas anteriores son incorrectas";
 answers[18] = 2;
 units[18] = ['123'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 6819. ";
 preguntaids[18] = 6819


//  Id pregunta: 8068 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no es un tipo de SSO (Single Sign-On)?";
 choices[19]= new Array();
 choices[19][0] = "Enterprise SSO";
 choices[19][1] = "Web SSO";
 choices[19][2] = "Kerberos";
 choices[19][3] = "Novell";
 answers[19] = 3;
 units[19] = ['123'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8068. ";
 preguntaids[19] = 8068


//  Id pregunta: 6816 Año de creación de pregunta: 2010
 questions[20]= "21)  En el &aacute;mbito de la Gesti&oacute;n de Identidades, &iquest;c&oacute;mo se denomina al conjunto de proveedores de servicios, identidades y atributos que disponen de acuerdos de servicio, comerciales y de negocio para que el usuario pueda realizar transacciones de forma transparente y sencilla entre todos ellos?";
 choices[20]= new Array();
 choices[20][0] = "Web Access Management";
 choices[20][1] = "WS - Security";
 choices[20][2] = "C&iacute;rculo de Confianza (CoT)";
 choices[20][3] = "SAML";
 answers[20] = 2;
 units[20] = ['123'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 6816. ";
 preguntaids[20] = 6816


//  Id pregunta: 8239 Año de creación de pregunta: 2011
 questions[21]= "22)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[21]= new Array();
 choices[21][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[21][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[21][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[21][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[21] = 2;
 units[21] = ['123'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8239. Examen UPM A2 2011";
 preguntaids[21] = 8239


//  Id pregunta: 9198 Año de creación de pregunta: 2014
 questions[22]= "23)  &iquest;Qu&eacute; es SAML?";
 choices[22]= new Array();
 choices[22][0] = "Un est&aacute;ndar abierto que define un esquema para el intercambio de datos de autenticaci&oacute;n y autorizaci&oacute;n.";
 choices[22][1] = "Un servicio proveedor de identidades.";
 choices[22][2] = "Un protocolo para la verificaci&oacute;n de identidades.";
 choices[22][3] = "Un software de definici&oacute;n de autoridades.";
 answers[22] = 0;
 units[22] = ['123'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9198. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[22] = 9198


//  Id pregunta: 9716 Año de creación de pregunta: 2014
 questions[23]= "24)  Cual de las siguientes afirmaciones es correcta con respecto al protocolo CAS, en el &aacute;mbito de los sitemas Single-Sign-On";
 choices[23]= new Array();
 choices[23][0] = "Fue concebido en la universidad de Oxford";
 choices[23][1] = "Es un protocolo SSO para todo tipo de aplicaciones, tanto web, como de escritorio.";
 choices[23][2] = "No existe el protocolo CAS, en ese &aacute;mbito";
 choices[23][3] = "CAS son las siglas de Central Authentication Service";
 answers[23] = 3;
 units[23] = ['123'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9716. ";
 preguntaids[23] = 9716


//  Id pregunta: 9189 Año de creación de pregunta: 2014
 questions[24]= "25)  En la gesti&oacute;n unificada de usuarios, &iquest;a qu&eacute; se denomina Single Sign-On (SSO)?";
 choices[24]= new Array();
 choices[24][0] = "Procedimiento de cifrado para autenticar a un usuario.";
 choices[24][1] = "Procedimiento asociado al cifrado en Secure Socket Layer (SSL).";
 choices[24][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de autenticaci&oacute;n.";
 choices[24][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS.";
 answers[24] = 2;
 units[24] = ['123'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9189. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[24] = 9189


//  Id pregunta: 9209 Año de creación de pregunta: 2014
 questions[25]= "26)  Indique la opci&oacute;n falsa:";
 choices[25]= new Array();
 choices[25][0] = "Las siglas HOTP hacen referencia la algoritmo HMAC-based One Time Password.";
 choices[25][1] = "HOTP es un est&aacute;ndar abierto.";
 choices[25][2] = "Son implementaciones de HOTP: Barada, Google Authenticator, LinOTP.";
 choices[25][3] = "HOTP no puede ser utilizado para autenticar a un usuario en un sistema a trav&eacute;s de un servidor de autenticaci&oacute;n.";
 answers[25] = 3;
 units[25] = ['123'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9209. HOTP SI se puede utilizar para autenticar a un usuario en un sistema.";
 preguntaids[25] = 9209


//  Id pregunta: 9197 Año de creación de pregunta: 2014
 questions[26]= "27)  El proceso mediante el cual un usuario se autentica una vez en el sistema de la organizaci&oacute;n y es capaz de acceder al resto de servicios se denomina:";
 choices[26]= new Array();
 choices[26][0] = "Single Login On";
 choices[26][1] = "Simple Login On";
 choices[26][2] = "Single Sign On";
 choices[26][3] = "Simple Sign On";
 answers[26] = 2;
 units[26] = ['123'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9197. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[26] = 9197


//  Id pregunta: 10138 Año de creación de pregunta: 2015
 questions[27]= "28)  En relaci&oacute;n con las soluciones MDM (Mobile Device Management), se&ntilde;ale la respuesta correcta:";
 choices[27]= new Array();
 choices[27][0] = "En ning&uacute;n caso contemplan la tendencia BYOD (Bring Your Own Device) que permite a los usuarios de una organizaci&oacute;n hacer uso de sus dispositivos m&oacute;viles personales para el acceso al entorno, servicios y datos corporativos.";
 choices[27][1] = "Sirven para gestionar la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n no siendo adecuados para el inventario de dispositivos m&oacute;viles.";
 choices[27][2] = "Los fabricantes de las principales plataformas m&oacute;viles no proporcionan soluciones MDM por lo que hay que recurrir siempre a soluciones de terceros.";
 choices[27][3] = "Permiten la monitorizaci&oacute;n autom&aacute;tica de los dispositivos m&oacute;viles y la generaci&oacute;n de alertas al incumplirse la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n.";
 answers[27] = 3;
 units[27] = ['123'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10138. Examen TIC A1 2014";
 preguntaids[27] = 10138


//  Id pregunta: 8075 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[28]= new Array();
 choices[28][0] = "Conecta";
 choices[28][1] = "Robinson";
 choices[28][2] = "Stork";
 choices[28][3] = "Interoperability card";
 answers[28] = 2;
 units[28] = ['123'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8075. ";
 preguntaids[28] = 8075


