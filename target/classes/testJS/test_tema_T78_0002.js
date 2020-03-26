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
//  Id pregunta: 8441 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;A qui&eacute;n corresponde elaborar una lista de prestadores de servicios electr&oacute;nicos de confianza?";
 choices[0]= new Array();
 choices[0][0] = "Al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[0][1] = "Al Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[0][2] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[0][3] = "Ninguna de las anteriores es cierta";
 answers[0] = 0;
 units[0] = ['78'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8441. ";
 preguntaids[0] = 8441


//  Id pregunta: 9821 Año de creación de pregunta: 2015
 questions[1]= "2)  El DNIe 3.0:";
 choices[1]= new Array();
 choices[1][0] = "Permite la lectura sin PIN del certificado de firma.";
 choices[1][1] = "Incorpora tecnolog&iacute;a de lectura sin contacto.";
 choices[1][2] = "Reduce la vigencia de los certificados de identificaci&oacute;n y firma a 5 a&ntilde;os.";
 choices[1][3] = "Todas las anteriores.";
 answers[1] = 1;
 units[1] = ['78'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9821. A. Permite la lectura sin PIN del certificado de identificaci&oacute;n, no de firma. C. Amplia la vigencia de los certificados (antes 30 meses).";
 preguntaids[1] = 9821


//  Id pregunta: 10166 Año de creación de pregunta: 2015
 questions[2]= "3)  Respecto a las tarjetas de identificaci&oacute;n con circuitos integrados, la norma ISO/IEC 7816-4:2013 NO especifica:";
 choices[2]= new Array();
 choices[2][0] = "Las dimensiones y tolerancias de la tarjeta de identificaci&oacute;n.";
 choices[2][1] = "M&eacute;todos de acceso a los ficheros e informaci&oacute;n.";
 choices[2][2] = "M&eacute;todos para la securizaci&oacute;n de los mensajes.";
 choices[2][3] = "M&eacute;todos para la recuperaci&oacute;n de informaci&oacute;n.";
 answers[2] = 0;
 units[2] = ['78'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 10166. Examen TIC A1 2014";
 preguntaids[2] = 10166


//  Id pregunta: 9171 Año de creación de pregunta: 2014
 questions[3]= "4)  El uso conjunto de los certificados ubicados en el DNI electr&oacute;nico proporcionan las siguientes garant&iacute;as";
 choices[3]= new Array();
 choices[3][0] = "Disponibilidad, autenticidad de origen,confidencialidad y no repudio de origen.";
 choices[3][1] = "Disponibilidad, integridad, autenticidad de origen.";
 choices[3][2] = "Integridad, autenticidad de origen y no repudio de origen.";
 choices[3][3] = "Integridad, confidencialidad, autenticid ad de origen y no repudio de destino.";
 answers[3] = 2;
 units[3] = ['78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9171. Examen TIC A2 2013";
 preguntaids[3] = 9171


//  Id pregunta: 8390 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[4]= new Array();
 choices[4][0] = "HMAC";
 choices[4][1] = "MD5";
 choices[4][2] = "MD8";
 choices[4][3] = "SHA";
 answers[4] = 2;
 units[4] = ['78'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8390. ";
 preguntaids[4] = 8390


//  Id pregunta: 10153 Año de creación de pregunta: 2015
 questions[5]= "6)  Los certificados electr&oacute;nicos contenidos en el DNI electr&oacute;nico 3.0 tienen una vigencia de:";
 choices[5]= new Array();
 choices[5][0] = "30 meses.";
 choices[5][1] = "48 meses.";
 choices[5][2] = "60 meses.";
 choices[5][3] = "36 meses.";
 answers[5] = 2;
 units[5] = ['78'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 10153. Examen TIC A1 2014";
 preguntaids[5] = 10153


//  Id pregunta: 9820 Año de creación de pregunta: 2015
 questions[6]= "7)  En una arquitectura PKI, la Autoridad de Validaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Verifica la identidad del titular antes de la expedici&oacute;n del certificado.";
 choices[6][1] = "Comprueba si un certificado ha sido revocado mediante servicios de directorio, CRL y OCSP.";
 choices[6][2] = "Expide, gestiona y revoca certificados digitales.";
 choices[6][3] = "Procesa solicitudes de revocaci&oacute;n de certificados.";
 answers[6] = 1;
 units[6] = ['78'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9820. ";
 preguntaids[6] = 9820


//  Id pregunta: 7843 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[7]= new Array();
 choices[7][0] = "Ilimitada.";
 choices[7][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[7][2] = "30 meses.";
 choices[7][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[7] = 1;
 units[7] = ['78'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7843. Examen TIC A1 2010";
 preguntaids[7] = 7843


//  Id pregunta: 8294 Año de creación de pregunta: 2011
 questions[8]= "9)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[8]= new Array();
 choices[8][0] = "PKCS#10";
 choices[8][1] = "PKCS#12";
 choices[8][2] = "X.500";
 choices[8][3] = "X.509";
 answers[8] = 0;
 units[8] = ['78'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8294. Examen UPM A2 2011";
 preguntaids[8] = 8294


//  Id pregunta: 7750 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public Key Infrastructures)?";
 choices[9]= new Array();
 choices[9][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica.";
 choices[9][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido.";
 choices[9][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;n permitidas para dicho certificado.";
 choices[9][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet.";
 answers[9] = 3;
 units[9] = ['78'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7750. ";
 preguntaids[9] = 7750


//  Id pregunta: 10494 Año de creación de pregunta: 2015
 questions[10]= "11)  En relaci&oacute;n con un Prestador de Servicios de Certificaci&oacute;n (PSC) es cierto que";
 choices[10]= new Array();
 choices[10][0] = "Es una persona jur&iacute;dica que expide certificados";
 choices[10][1] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados";
 choices[10][2] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 choices[10][3] = "Es una persona jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 answers[10] = 2;
 units[10] = ['78'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10494. ";
 preguntaids[10] = 10494


//  Id pregunta: 7740 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?";
 choices[11]= new Array();
 choices[11][0] = "Zona p&uacute;blica.";
 choices[11][1] = "Zona privada.";
 choices[11][2] = "Zona de seguridad.";
 choices[11][3] = "Zona compartida.";
 answers[11] = 2;
 units[11] = ['78'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7740. ";
 preguntaids[11] = 7740


//  Id pregunta: 10817 Año de creación de pregunta: 2015
 questions[12]= "13)  Las tarjetas de proximidad se encuentran recogidas en el est&aacute;ndar:";
 choices[12]= new Array();
 choices[12][0] = "ISO 10536";
 choices[12][1] = "ISO 14443";
 choices[12][2] = "ISO 15693";
 choices[12][3] = "ISO 16949";
 answers[12] = 1;
 units[12] = ['78'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10817. ";
 preguntaids[12] = 10817


//  Id pregunta: 10541 Año de creación de pregunta: 2015
 questions[13]= "14)  Cu&aacute;l es la forma correcta de crear un sello electr&oacute;nico seg&uacute;n la normativa sobre administraci&oacute;n electr&oacute;nica";
 choices[13]= new Array();
 choices[13][0] = "Resoluci&oacute;n del Ministro publicado en BOE";
 choices[13][1] = "Resoluci&oacute;n del Ministro publicado en sede";
 choices[13][2] = "Resoluci&oacute;n de la sbusecretar&iacute;a publicado en la Sede";
 choices[13][3] = "Resoluci&oacute;n del Consejo de Ministros publicado en BOE";
 answers[13] = 2;
 units[13] = ['78'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10541. ";
 preguntaids[13] = 10541


//  Id pregunta: 10086 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[14]= new Array();
 choices[14][0] = "OCSP";
 choices[14][1] = "CRL";
 choices[14][2] = "PKCS#10";
 choices[14][3] = "HTTPS";
 answers[14] = 0;
 units[14] = ['77', '78'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10086. Examen TIC A2 2014";
 preguntaids[14] = 10086


//  Id pregunta: 10496 Año de creación de pregunta: 2015
 questions[15]= "16)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[15]= new Array();
 choices[15][0] = "ISO 15408 - Common criteria";
 choices[15][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[15][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[15][3] = "RFC 5246 - IPSEC";
 answers[15] = 3;
 units[15] = ['45', '78', '119'];
 blocks[15] = ['B1', 'B2', 'B4'];
 comments[15] = "Id Pregunta: 10496. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";
 preguntaids[15] = 10496


//  Id pregunta: 7867 Año de creación de pregunta: 2011
 questions[16]= "17)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico:";
 choices[16]= new Array();
 choices[16][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de  Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[16][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[16][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[16][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits.";
 answers[16] = 1;
 units[16] = ['78'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7867. Examen TIC A1 2010";
 preguntaids[16] = 7867


//  Id pregunta: 10099 Año de creación de pregunta: 2015
 questions[17]= "18)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[17]= new Array();
 choices[17][0] = "Mediante claves sim&eacute;tricas.";
 choices[17][1] = "Mediante claves asim&eacute;tricas.";
 choices[17][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[17][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[17] = 0;
 units[17] = ['77', '78'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10099. Examen TIC A2 2014";
 preguntaids[17] = 10099


//  Id pregunta: 9783 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[18]= new Array();
 choices[18][0] = "Secure Transport Over bRoad toKens";
 choices[18][1] = "Security idenTity acrOss boRders linKed";
 choices[18][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[18][3] = "Safe noTes stOring encRypted Keys";
 answers[18] = 1;
 units[18] = ['77', '78'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9783. ";
 preguntaids[18] = 9783


//  Id pregunta: 8253 Año de creación de pregunta: 2011
 questions[19]= "20)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[19]= new Array();
 choices[19][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[19][1] = "Se incluyen, entre otros, los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[19][2] = "Los datos contenidos, en todo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[19][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[19] = 1;
 units[19] = ['78'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8253. Examen TIC A2 2010 interna";
 preguntaids[19] = 8253


//  Id pregunta: 10098 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[20]= new Array();
 choices[20][0] = "Modo ECB (Electronic CodeBook).";
 choices[20][1] = "Modo CBC (Cipher Block Chaining).";
 choices[20][2] = "Modo OFB (Output FeedBack).";
 choices[20][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[20] = 3;
 units[20] = ['77', '78'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10098. Examen TIC A2 2014";
 preguntaids[20] = 10098


//  Id pregunta: 10199 Año de creación de pregunta: 2015
 questions[21]= "22)  Indique la respuesta FALSA respecto a las autoridades de validaci&oacute;n del DNI electr&oacute;nico:";
 choices[21]= new Array();
 choices[21][0] = "La prestaci&oacute;n de estos servicios de validaci&oacute;n se realiza en base a Online Certificate Status Protocol (OCSP).";
 choices[21][1] = "Para la validaci&oacute;n del DNI electr&oacute;nico se dispone de dos prestadores de Servicios de Validaci&oacute;n.";
 choices[21][2] = "La informaci&oacute;n sobre los certificados electr&oacute;nicos revocados se almacena en las denominadas listas de revocaci&oacute;n de certificados (CRL).";
 choices[21][3] = "En la Infraestructura de Clave P&uacute;blica adoptada para el DNI electr&oacute;nico, se ha optado por asignar a una misma entidad las funciones de Autoridad de Validaci&oacute;n y Certificaci&oacute;n.";
 answers[21] = 3;
 units[21] = ['78'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10199. Examen TIC A1 2014";
 preguntaids[21] = 10199


//  Id pregunta: 10348 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[22]= new Array();
 choices[22][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[22][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Energia, Turismo y Agenda Digital como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[22][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[22][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[22] = 0;
 units[22] = ['78'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10348. ";
 preguntaids[22] = 10348


//  Id pregunta: 10818 Año de creación de pregunta: 2015
 questions[23]= "24)  Con respecto al DNIe 3.0, se&ntilde;ale la falsa:";
 choices[23]= new Array();
 choices[23][0] = "Hace uso de la tecnolog&iacute;a NFC.";
 choices[23][1] = "Se basa en comandos ISO 7816.";
 choices[23][2] = "No es posible utilizarlo con lectores de tarjetas inteligentes.";
 choices[23][3] = "Incorpora un chip m&aacute;s r&aacute;pido.";
 answers[23] = 2;
 units[23] = ['78'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 10818. ";
 preguntaids[23] = 10818


//  Id pregunta: 7731 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;Qu&eacute; tipos de certificado est&aacute;n incluidos en el DNIe?";
 choices[24]= new Array();
 choices[24][0] = "Autenticaci&oacute;n y firma.";
 choices[24][1] = "Cifrado y firma.";
 choices[24][2] = "Firma.";
 choices[24][3] = "Cifrado, firma y autenticaci&oacute;n.";
 answers[24] = 0;
 units[24] = ['78'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7731. Map 2007";
 preguntaids[24] = 7731


//  Id pregunta: 8255 Año de creación de pregunta: 2011
 questions[25]= "26)  La tarjeta DNIe tiene capacidad para la realizaci&oacute;n de firmas electr&oacute;nicas en:";
 choices[25]= new Array();
 choices[25][0] = "Modo raw y modo relleno PKCS#11";
 choices[25][1] = "&Uacute;nicamente en modo raw.";
 choices[25][2] = "&Uacute;nicamente en modo relleno PKCS#11";
 choices[25][3] = "Ninguna de las anteriores.";
 answers[25] = 0;
 units[25] = ['78'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8255. Examen TIC A2 2010 interna";
 preguntaids[25] = 8255


//  Id pregunta: 8237 Año de creación de pregunta: 2011
 questions[26]= "27)  El protocolo OCSP, se utiliza en:";
 choices[26]= new Array();
 choices[26][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[26][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[26][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[26][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[26] = 0;
 units[26] = ['78'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8237. Examen UPM A2 2011";
 preguntaids[26] = 8237


//  Id pregunta: 9819 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Seg&uacute;n el Reglamento 910/2014 del Parlamento Europeo y del Consejo, cu&aacute;l de &eacute;stos son requisitos de seguridad de los TSP (Trust Service Providers)?";
 choices[27]= new Array();
 choices[27][0] = "Notificar las violaciones al MINETUR y el organismo correspondiente en m&aacute;ximo 24 horas.";
 choices[27][1] = "Mantener una base de datos de certificados";
 choices[27][2] = "Publicar las revocaciones en un m&aacute;ximo de 24 horas tras la solicitud.";
 choices[27][3] = "Todas las anteriores.";
 answers[27] = 0;
 units[27] = ['78'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9819. B y C son exclusivamente para QTSPs";
 preguntaids[27] = 9819


//  Id pregunta: 9979 Año de creación de pregunta: 2015
 questions[28]= "29)  Seg&uacute;n se establece en la pol&iacute;tica de certificaci&oacute;n de la DGP para el DNI electr&oacute;nico (DNIe) en lo relativo a las autoridades de certificaci&oacute;n (AC) ra&iacute;z y subordinadas, &iquest;cu&aacute;l es el tama&ntilde;o de esas claves?";
 choices[28]= new Array();
 choices[28][0] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es de 2048 bits y el de claves de las AC subordinadas ser&aacute; de 4096 bits.";
 choices[28][1] = "Las claves de la AC Ra&iacute;z y de las AC subordinadas ser&aacute;n de 2048 bits.";
 choices[28][2] = "El tama&ntilde;o de las claves es: 4096 bits para la AC Ra&iacute;z y 2048 bits para las AC Subordinadas.";
 choices[28][3] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es 8192 bits para la ra&iacute;z y 4096 bits para las AC subordinadas.";
 answers[28] = 2;
 units[28] = ['78'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9979. Examen TIC A2 2014";
 preguntaids[28] = 9979


