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
//  Id pregunta: 10712 Año de creación de pregunta: 2015
 questions[0]= "1)  El &aacute;rbol formado por las entradas del directorio en LDAP, se llama:";
 choices[0]= new Array();
 choices[0][0] = "DIT";
 choices[0][1] = "Ltree";
 choices[0][2] = "LDS";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = 0;
 units[0] = ['77'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10712. ";
 preguntaids[0] = 10712


//  Id pregunta: 9783 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[1]= new Array();
 choices[1][0] = "Secure Transport Over bRoad toKens";
 choices[1][1] = "Security idenTity acrOss boRders linKed";
 choices[1][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[1][3] = "Safe noTes stOring encRypted Keys";
 answers[1] = 1;
 units[1] = ['77', '78'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9783. ";
 preguntaids[1] = 9783


//  Id pregunta: 9692 Año de creación de pregunta: 2014
 questions[2]= "3)  En el &aacute;mbito de los certificados X.509:";
 choices[2]= new Array();
 choices[2][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[2][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[2][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[2][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[2] = 3;
 units[2] = ['77'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9692. ";
 preguntaids[2] = 9692


//  Id pregunta: 10707 Año de creación de pregunta: 2015
 questions[3]= "4)  La RFC del IETF que hace referencia al modelo de directorio LDAP es:";
 choices[3]= new Array();
 choices[3][0] = "RFC 3161";
 choices[3][1] = "RFC 4510";
 choices[3][2] = "RFC 4120";
 choices[3][3] = "RFC 6101";
 answers[3] = 1;
 units[3] = ['77'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10707. ";
 preguntaids[3] = 10707


//  Id pregunta: 10098 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[4]= new Array();
 choices[4][0] = "Modo ECB (Electronic CodeBook).";
 choices[4][1] = "Modo CBC (Cipher Block Chaining).";
 choices[4][2] = "Modo OFB (Output FeedBack).";
 choices[4][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[4] = 3;
 units[4] = ['77', '78'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10098. Examen TIC A2 2014";
 preguntaids[4] = 10098


//  Id pregunta: 10454 Año de creación de pregunta: 2015
 questions[5]= "6)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[5]= new Array();
 choices[5][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[5][1] = "Notificar&aacute;n al Ministerio de Energia, Turismo y Agenda Digital en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[5][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[5][3] = "Todas son verdaderas.";
 answers[5] = 2;
 units[5] = ['77'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 10454. ";
 preguntaids[5] = 10454


//  Id pregunta: 10854 Año de creación de pregunta: 2015
 questions[6]= "7)  El perfil de XAdES en el que se a&ntilde;aden los certificados a los documentos firmados es:";
 choices[6]= new Array();
 choices[6][0] = "XAdES-A";
 choices[6][1] = "XAdES-C";
 choices[6][2] = "XAdES-X-L";
 choices[6][3] = "XAdES-X";
 answers[6] = 2;
 units[6] = ['77'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10854. ";
 preguntaids[6] = 10854


//  Id pregunta: 9690 Año de creación de pregunta: 2014
 questions[7]= "8)  Respecto a los certificados X.509 v3:";
 choices[7]= new Array();
 choices[7][0] = "Las extensiones se clasifican en cr&iacute;ticas, no criticas y recomendables.";
 choices[7][1] = "Las extensiones no cr&iacute;ticas pueden ignorarse si no se pueden procesar o se decide no hacerlo.";
 choices[7][2] = "Un certificado s&oacute;lo puede contener una extensi&oacute;n de un determinado tipo.";
 choices[7][3] = "No pueden definirse extensiones para uso privado.";
 answers[7] = 1;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9690. ";
 preguntaids[7] = 9690


//  Id pregunta: 10343 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T para infraestructuras de claves p&uacute;blicas?";
 choices[8]= new Array();
 choices[8][0] = "X.500";
 choices[8][1] = "X.509v3";
 choices[8][2] = "X.CRL";
 choices[8][3] = "OCSP";
 answers[8] = 1;
 units[8] = ['77'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10343. X.500 es un conjunto de est&aacute;ndares de la ITU-T sobre servicios de directorio";
 preguntaids[8] = 10343


//  Id pregunta: 10452 Año de creación de pregunta: 2015
 questions[9]= "10)  En relaci&oacute;n con los efectos jur&iacute;dicos de las firmas electr&oacute;nicas, indique la respuesta correcta:";
 choices[9]= new Array();
 choices[9][0] = "No se denegar&aacute;n efectos jur&iacute;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electr&oacute;nica por el mero hecho de ser una firma electr&oacute;nica o porque no cumpla los requisitos de la firma electr&oacute;nica cualificada.";
 choices[9][1] = "Una firma electr&oacute;nica cualificada tendr&aacute; un efecto jur&iacute;dico equivalente al de una firma manuscrita.";
 choices[9][2] = "Una firma electr&oacute;nica b&aacute;sica, como usuario y contrase&ntilde;a, puede ser prueba en juicio.";
 choices[9][3] = "Todas son verdaderas.";
 answers[9] = 3;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10452. ";
 preguntaids[9] = 10452


//  Id pregunta: 10248 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;Cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[10]= new Array();
 choices[10][0] = "30 meses";
 choices[10][1] = "4 a&ntilde;os";
 choices[10][2] = "5 a&ntilde;os";
 choices[10][3] = "10 a&ntilde;os";
 answers[10] = 2;
 units[10] = ['77'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10248. El RD 414/2015 por el que se modifica el RD 1553/2005 los certificados pasan a tener tambi&eacute;n una validez de 5 a&ntilde;os.";
 preguntaids[10] = 10248


//  Id pregunta: 9694 Año de creación de pregunta: 2014
 questions[11]= "12)  Completa la frase: A diferencia de NIS, LDAP &hellip;";
 choices[11]= new Array();
 choices[11][0] = "No est&aacute; restringido a redes unix";
 choices[11][1] = "Usa notaci&oacute;n ASN.1";
 choices[11][2] = "No soporta implementaciones de software libre";
 choices[11][3] = "Se usa sobre TCP/IP";
 answers[11] = 0;
 units[11] = ['77'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9694. ";
 preguntaids[11] = 9694


//  Id pregunta: 10086 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[12]= new Array();
 choices[12][0] = "OCSP";
 choices[12][1] = "CRL";
 choices[12][2] = "PKCS#10";
 choices[12][3] = "HTTPS";
 answers[12] = 0;
 units[12] = ['77', '78'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10086. Examen TIC A2 2014";
 preguntaids[12] = 10086


//  Id pregunta: 10250 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Qu&eacute; elemento de X.500 es el conjunto de toda la informaci&oacute;n disponible en el Servicio de Directorio?";
 choices[13]= new Array();
 choices[13][0] = "DIB";
 choices[13][1] = "DSA";
 choices[13][2] = "DUA";
 choices[13][3] = "DISP";
 answers[13] = 0;
 units[13] = ['77'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10250. ";
 preguntaids[13] = 10250


//  Id pregunta: 10455 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;les son los niveles de seguridad de los sistemas de autenticaci&oacute;n que define el Reglamento 910/2014?";
 choices[14]= new Array();
 choices[14][0] = "Bajo, medio y alto.";
 choices[14][1] = "B&aacute;sico, medio y alto.";
 choices[14][2] = "B&aacute;sico, sustancial y alto.";
 choices[14][3] = "Bajo, sustancial y alto.";
 answers[14] = 3;
 units[14] = ['77'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10455. ";
 preguntaids[14] = 10455


//  Id pregunta: 9791 Año de creación de pregunta: 2015
 questions[15]= "16)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[15]= new Array();
 choices[15][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[15][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[15][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[15][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[15] = 3;
 units[15] = ['7', '77'];
 blocks[15] = ['A2', 'B2'];
 comments[15] = "Id Pregunta: 9791. Art&iacute;culo 18, RD 1671/2009.";
 preguntaids[15] = 9791


//  Id pregunta: 10190 Año de creación de pregunta: 2015
 questions[16]= "17)  Entre los objetivos del proyecto STORK 2.0 (Secure idenTity acrOss boRders linKed) NO se encuentra:";
 choices[16]= new Array();
 choices[16][0] = "Construcci&oacute;n de pilotos o demostradores de servicios de administraci&oacute;n electr&oacute;nica.";
 choices[16][1] = "Estudio de las especificaciones t&eacute;cnicas comunes que permitan el reconocimiento europeo de las eID (identidades electr&oacute;nicas) nacionales.";
 choices[16][2] = "Desarrollo de tecnolog&iacute;as y servicios avanzados de eID que sirvan de base para la construcci&oacute;n de la identidad electr&oacute;nica europea &uacute;nica (eueID) prevista para 2020.";
 choices[16][3] = "Realizaci&oacute;n de estudios sobre la situaci&oacute;n legal y t&eacute;cnica de los sistemas de identificaci&oacute;n y firma electr&oacute;nica utilizados en los Estados Miembros.";
 answers[16] = 2;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10190. Examen TIC A1 2014";
 preguntaids[16] = 10190


//  Id pregunta: 9978 Año de creación de pregunta: 2015
 questions[17]= "18)  Se&ntilde;ale la respuesta correcta. Seg&uacute;n se establece en la Ley de Firma Electr&oacute;nica 59/2003 en su art&iacute;culo 32, las multas establecidas al infractor ser&aacute;n de:";
 choices[17]= new Array();
 choices[17][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros.";
 choices[17][1] = "Por la comisi&oacute;n de infracciones muy graves, multa de 60.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 6.001 a 60.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 6.000 euros.";
 choices[17][2] = "Por la comisi&oacute;n de infracciones muy graves, multa de 120.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 12.001 a 120.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 12.000 euros.";
 choices[17][3] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 15.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 15.000 euros.";
 answers[17] = 0;
 units[17] = ['77'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9978. Examen TIC A2 2014";
 preguntaids[17] = 9978


//  Id pregunta: 10447 Año de creación de pregunta: 2015
 questions[18]= "19)  Entre los requisitos de la firma electr&oacute;nica avanzada no se encuentra:";
 choices[18]= new Array();
 choices[18][0] = "Que est&eacute; vinculada al firmante de manera &uacute;nica y permita su identificaci&oacute;n.";
 choices[18][1] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, con un alto nivel de confianza, bajo su control exclusivo.";
 choices[18][2] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, siempre bajo su control exclusivo.";
 choices[18][3] = "Que est&eacute; vinculada con los datos firmados de modo que detecte cualquier modificaci&oacute;n ulterior.";
 answers[18] = 2;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10447. ";
 preguntaids[18] = 10447


//  Id pregunta: 9697 Año de creación de pregunta: 2014
 questions[19]= "20)  La Autoridad de Certificaci&oacute;n de los certificados emitidos para el DNI electr&oacute;nico es:";
 choices[19]= new Array();
 choices[19][0] = "La F&aacute;brica Nacional de Moneda y Timbre";
 choices[19][1] = "El Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[19][2] = "El CCN (Centro Criptol&oacute;gico Nacional)";
 choices[19][3] = "El Ministerio del Interior - Direcci&oacute;n General de la Polic&iacute;a";
 answers[19] = 3;
 units[19] = ['77'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9697. ";
 preguntaids[19] = 9697


//  Id pregunta: 10456 Año de creación de pregunta: 2015
 questions[20]= "21)  Para los niveles de seguridad de los sistemas de autenticaci&oacute;n definidos en el Reglamento 910/2014 relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior, NO es cierto:";
 choices[20]= new Array();
 choices[20][0] = "Se tienen en cuenta tanto el proyecto europeo STORK como la norma ISO 29115.";
 choices[20][1] = "El nivel sustancial de STORK requiere un registro presencial al menos una vez, y la credencial electr&oacute;nica se entrega como certificado hardware.";
 choices[20][2] = "El modelo QAA (Quality, Authentication, Assurance) diferencia los factores asociados al proceso de registro y entrega de la credencial, y factores asociados al proceso de autenticaci&oacute;n electr&oacute;nica con dicha credencial.";
 choices[20][3] = "El DNIe se corresponde con un nivel 4 de QAA.";
 answers[20] = 1;
 units[20] = ['77'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10456. ";
 preguntaids[20] = 10456


//  Id pregunta: 10453 Año de creación de pregunta: 2015
 questions[21]= "22)  Los certificados cualificados de firma electr&oacute;nica contendr&aacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Al menos el nombre del firmante o un seud&oacute;nimo; si se usara un seud&oacute;nimo, se indicar&aacute; claramente.";
 choices[21][1] = "Los datos relativos al inicio y final del per&iacute;odo de validez del certificado.";
 choices[21][2] = "La localizaci&oacute;n de los servicios que pueden utilizarse para consultar el estado de validez del certificado cualificado.";
 choices[21][3] = "Todas son verdaderas.";
 answers[21] = 3;
 units[21] = ['77'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10453. ";
 preguntaids[21] = 10453


//  Id pregunta: 9698 Año de creación de pregunta: 2014
 questions[22]= "23)  El certificado de firma del DNI electr&oacute;nico es un certificado (seg&uacute;n la ley de Firma Electr&oacute;nica):";
 choices[22]= new Array();
 choices[22][0] = "Avanzado";
 choices[22][1] = "Reconocido";
 choices[22][2] = "Seguro";
 choices[22][3] = "Exportable";
 answers[22] = 1;
 units[22] = ['77'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9698. ";
 preguntaids[22] = 9698


//  Id pregunta: 10458 Año de creación de pregunta: 2015
 questions[23]= "24)  Seleccione la opci&oacute;n correcta m&aacute;s precisa sobre las obligaciones previas a la expedici&oacute;n de certificados reconocidos incluida en la ley de firma electr&oacute;nica:";
 choices[23]= new Array();
 choices[23][0] = "Asegurarse de que el firmante est&aacute; en posesi&oacute;n de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[23][1] = "Asegurarse de que el firmante tiene el control exclusivo sobre el uso de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[23][2] = "La respuesta B) es correcta, la cual fue a&ntilde;adida por la ley 25/2015 de reducci&oacute;n de la carga financiera y otras medidas de orden social, que introduc&iacute;a cambios en la Ley 59/2003 de firma electr&oacute;nica para dar soporte jur&iacute;dico a la denominada firma en la nube.";
 choices[23][3] = "La respuesta A) es correcta, ya que la &uacute;ltima modificaci&oacute;n a la ley de firma electr&oacute;nica fue realizada por  la ley 9/2014 General de Telecomunicaciones, que ampliaba el periodo de validez de los certificados reconocidos a 5 a&ntilde;os.";
 answers[23] = 2;
 units[23] = ['77'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 10458. ";
 preguntaids[23] = 10458


//  Id pregunta: 9712 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[24]= new Array();
 choices[24][0] = "eDirectory";
 choices[24][1] = "iPlanet";
 choices[24][2] = "Active Directory";
 choices[24][3] = "Todos lo son";
 answers[24] = 3;
 units[24] = ['77'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9712. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";
 preguntaids[24] = 9712


//  Id pregunta: 10345 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Qu&eacute; versi&oacute;n del PKCS define una interfaz para el acceso a dispositivos que contienen informaci&oacute;n criptogr&aacute;fica como Tokens o Tarjetas?";
 choices[25]= new Array();
 choices[25][0] = "PKCS 1";
 choices[25][1] = "PKCS 7";
 choices[25][2] = "PCKCS 9";
 choices[25][3] = "PKCS 11";
 answers[25] = 3;
 units[25] = ['77'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 10345. ";
 preguntaids[25] = 10345


//  Id pregunta: 9696 Año de creación de pregunta: 2014
 questions[26]= "27)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[26]= new Array();
 choices[26][0] = "S&oacute;lo puedo hacerlo desde mi casa pero necesito un lector de huella dactilar";
 choices[26][1] = "Puedo hacerlo desde los dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a";
 choices[26][2] = "Puedo hacerlo s&oacute;lo usando mi navegador web";
 choices[26][3] = "S&oacute;lo puedo hacerlo si tengo el PUK";
 answers[26] = 1;
 units[26] = ['77'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9696. ";
 preguntaids[26] = 9696


//  Id pregunta: 10508 Año de creación de pregunta: 2015
 questions[27]= "28)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[27]= new Array();
 choices[27][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[27][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[27][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[27][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[27] = 0;
 units[27] = ['77'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10508. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";
 preguntaids[27] = 10508


//  Id pregunta: 9818 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Cu&aacute;l de &eacute;stas es la codificaci&oacute;n en formato binario de un certificado X.509v3?";
 choices[28]= new Array();
 choices[28][0] = "DER";
 choices[28][1] = "CERT";
 choices[28][2] = "PME";
 choices[28][3] = "Ninguno de los anteriores.";
 answers[28] = 0;
 units[28] = ['77'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9818. ";
 preguntaids[28] = 9818


//  Id pregunta: 10347 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;ntos niveles de seguridad define el proyecto STORK?";
 choices[29]= new Array();
 choices[29][0] = "3";
 choices[29][1] = "4";
 choices[29][2] = "5";
 choices[29][3] = "6";
 answers[29] = 1;
 units[29] = ['77'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10347. eIDAS se queda con 3";
 preguntaids[29] = 10347


//  Id pregunta: 10539 Año de creación de pregunta: 2015
 questions[30]= "31)  De los siguientes, indique la opci&oacute;n que contiene los modelos correctos contemplados por LDAP";
 choices[30]= new Array();
 choices[30][0] = "informaci&oacute;n; direccionamiento; observable; estructural";
 choices[30][1] = "informaci&oacute;n; direccionamiento; objetivable; estructural";
 choices[30][2] = "informaci&oacute;n; direccionamiento; seguridad; estructural";
 choices[30][3] = "informaci&oacute;n; direccionamiento; seguridad; funcional";
 answers[30] = 3;
 units[30] = ['77'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10539. ";
 preguntaids[30] = 10539


//  Id pregunta: 9695 Año de creación de pregunta: 2014
 questions[31]= "32)  La diferencia entre la cofirma y la contrafirma estriba en que:";
 choices[31]= new Array();
 choices[31][0] = "La cofirma ocurre cuando el documento a firmar se considera validado con la firma de uno s&oacute;lo de los dos firmantes  y la contrafirma cuando el documento es v&aacute;lido s&oacute;lo si lo firman los dos a la vez";
 choices[31][1] = "La cofirma y la contrafirma son iguales si se hacen de forma electr&oacute;nica ya que no hay manera de determinar en el tiempo el orden de los firmantes, s&oacute;lo que hayan firmado";
 choices[31][2] = "En la cofirma los dos firmantes pueden firmar en cualquier momento y se supone que est&aacute;n al mismo nivel de responsabilidad respecto de la firma del documento (por ejemplo, una pareja que se compra una casa y firma la hipoteca) mientras que en la contrafirma el orden de los firmantes es relevante y el que firma &uacute;ltimo valida la firma del que ha firmado primero (por ejemplo, un jefe que valida el acto administrativo que firma un subordinado)";
 choices[31][3] = "La cofirma requiere de la firma de dos sujetos f&iacute;sicos o jur&iacute;dicos mientras que la contrafirma requiere de la firma de la aplicaci&oacute;n que genera los certificados del documento (portafirmas)";
 answers[31] = 2;
 units[31] = ['77'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9695. ";
 preguntaids[31] = 9695


//  Id pregunta: 10148 Año de creación de pregunta: 2015
 questions[32]= "33)  En la estructura de un certificado X.509 v3 NO es obligatorio:";
 choices[32]= new Array();
 choices[32][0] = "El n&uacute;mero de serie.";
 choices[32][1] = "La validez no antes de.";
 choices[32][2] = "El identificador &uacute;nico de emisor.";
 choices[32][3] = "El emisor.";
 answers[32] = 2;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 10148. Examen TIC A1 2014";
 preguntaids[32] = 10148


//  Id pregunta: 10249 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[33]= new Array();
 choices[33][0] = ".PFX";
 choices[33][1] = ".DER";
 choices[33][2] = ".P7B";
 choices[33][3] = "Todos lo son";
 answers[33] = 3;
 units[33] = ['77'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10249. ";
 preguntaids[33] = 10249


//  Id pregunta: 10457 Año de creación de pregunta: 2015
 questions[34]= "35)  Sobre los servicios cualificados de entrega electr&oacute;nica certificada es FALSO que deban cumplir el siguiente requisito t&eacute;cnico:";
 choices[34]= new Array();
 choices[34][0] = "Ser prestados por uno o m&aacute;s prestadores cualificados de servicios de confianza.";
 choices[34][1] = "Asegurar con un alto nivel de fiabilidad la identificaci&oacute;n del remitente.";
 choices[34][2] = "Estar protegidos el env&iacute;o y recepci&oacute;n de datos por una firma electr&oacute;nica cualificada o un sello electr&oacute;nico cualificado de tal forma que se impida la posibilidad de que se modifiquen los datos sin que se detecte.";
 choices[34][3] = "Indicar claramente al emisor y al destinatario de los datos cualquier modificaci&oacute;n de los datos necesarios a efectos del env&iacute;o o recepci&oacute;n de los datos.";
 answers[34] = 2;
 units[34] = ['77'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 10457. ";
 preguntaids[34] = 10457


//  Id pregunta: 10099 Año de creación de pregunta: 2015
 questions[35]= "36)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[35]= new Array();
 choices[35][0] = "Mediante claves sim&eacute;tricas.";
 choices[35][1] = "Mediante claves asim&eacute;tricas.";
 choices[35][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[35][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[35] = 0;
 units[35] = ['77', '78'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10099. Examen TIC A2 2014";
 preguntaids[35] = 10099


//  Id pregunta: 9693 Año de creación de pregunta: 2014
 questions[36]= "37)  Si usamos el m&eacute;todo de comprobaci&oacute;n de la validez de un certificado mediante CRL en vez de OCSP puede ocurrir que (marcar la correcta respecto a CRL que no ocurrir&iacute;a usando OCSP)&hellip;";
 choices[36]= new Array();
 choices[36][0] = "El certificado que estamos validando est&eacute; malformado";
 choices[36][1] = "La autoridad de certificaci&oacute;n que emiti&oacute; el certificado sea incorrecta";
 choices[36][2] = "El certificado haya sido revocado desde la anterior emisi&oacute;n de CRL pero la consulta lo d&eacute; por v&aacute;lido";
 choices[36][3] = "El certificado haya expirado pero no se pueda verificar  la fecha de fin de validez y la comprobaci&oacute;n lo d&eacute; por v&aacute;lido cuando est&aacute; expirado.";
 answers[36] = 2;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9693. ";
 preguntaids[36] = 9693


//  Id pregunta: 10344 Año de creación de pregunta: 2015
 questions[37]= "38)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, &iquest;cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[37]= new Array();
 choices[37][0] = "3 a&ntilde;os";
 choices[37][1] = "4 a&ntilde;os";
 choices[37][2] = "5 a&ntilde;os";
 choices[37][3] = "6 a&ntilde;os";
 answers[37] = 2;
 units[37] = ['77'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10344. LGT modific&oacute; la ley de firma";
 preguntaids[37] = 10344


//  Id pregunta: 10446 Año de creación de pregunta: 2015
 questions[38]= "39)  Seg&uacute;n el Principio de Reconocimiento Mutuo que establece el Reglamento 910/2014, se reconocer&aacute; en un Estado miembro, a efectos de la autenticaci&oacute;n transfronteriza para un servicio en l&iacute;nea, el medio de identificaci&oacute;n electr&oacute;nica expedido en otro Estado miembro, siempre que:";
 choices[38]= new Array();
 choices[38][0] = "El nivel de seguridad de este medio de identificaci&oacute;n electr&oacute;nica corresponda a un nivel igual o superior al requerido por el organismo del sector p&uacute;blico para acceder a dicho servicio en l&iacute;nea, independientemente del nivel de seguridad del medio de identificaci&oacute;n.";
 choices[38][1] = "El medio de identificaci&oacute;n est&eacute; expedido seg&uacute;n los incluidos en la lista publicada por la Comisi&oacute;n.";
 choices[38][2] = "Las respuestas A) y B) son correctas.";
 choices[38][3] = "Este reconocimiento se producir&aacute; a m&aacute;s tardar 6 meses despu&eacute;s de que la Comisi&oacute;n publique la lista.";
 answers[38] = 1;
 units[38] = ['77'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10446. ";
 preguntaids[38] = 10446


//  Id pregunta: 10346 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cu&aacute;l de lo siguientes sistemas de firma electr&oacute;nica utilizan las Administraciones P&uacute;blicas para la actuaci&oacute;n administrativa automatizada, con objeto de su identificaci&oacute;n electr&oacute;nica y para la autenticaci&oacute;n de los documentos electr&oacute;nicos que produzcan?";
 choices[39]= new Array();
 choices[39][0] = "Sello electr&oacute;nico";
 choices[39][1] = "C&oacute;digo seguro de verificaci&oacute;n";
 choices[39][2] = "Todos los anteriores";
 choices[39][3] = "Ninguno de los anteriores";
 answers[39] = 2;
 units[39] = ['77'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 10346. ";
 preguntaids[39] = 10346


//  Id pregunta: 9691 Año de creación de pregunta: 2014
 questions[40]= "41)  Una CRL completa:";
 choices[40]= new Array();
 choices[40][0] = "Lista todos los certificados no expirados emitidos por la CA revocados por cualquier raz&oacute;n.";
 choices[40][1] = "Lista los certificados cuyo estado de revocaci&oacute;n ha cambiado desde la anterior CRL completa.";
 choices[40][2] = "Se emite con la periodicidad definida en la politica de actualizaciones, pero siempre que hayan transcurrido menos de 24 horas desde la &uacute;ltima emisi&oacute;n.";
 choices[40][3] = "Lista todos los certificados no expirados revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[40] = 3;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9691. ";
 preguntaids[40] = 9691


