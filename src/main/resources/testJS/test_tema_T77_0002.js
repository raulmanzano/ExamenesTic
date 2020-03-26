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
//  Id pregunta: 6162 Año de creación de pregunta: 2001
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de actualizaci&oacute;n de CRLs?";
 choices[0]= new Array();
 choices[0][0] = "muestreo de CRLs";
 choices[0][1] = "env&iacute;o de CRL";
 choices[0][2] = "anuncio de CRL";
 choices[0][3] = "verificaci&oacute;n en l&iacute;nea";
 answers[0] = 1;
 units[0] = ['77'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6162. ";
 preguntaids[0] = 6162


//  Id pregunta: 6717 Año de creación de pregunta: 2009
 questions[1]= "2)  &iquest;Qu&eacute; es WebDAV?";
 choices[1]= new Array();
 choices[1][0] = "Protocolo de acceso y edici&oacute;n de carpetas mediante HTTP";
 choices[1][1] = "Sistema web de creaci&oacute;n de formularios";
 choices[1][2] = "Sistema web seguro de compartici&oacute;n de procesamiento";
 choices[1][3] = "Sistema web de mensajer&iacute;a y alertas";
 answers[1] = 0;
 units[1] = ['77'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 6717. MAP 2008 A1";
 preguntaids[1] = 6717


//  Id pregunta: 6201 Año de creación de pregunta: 2003
 questions[2]= "3)  Seg&uacute;n el art&iacute;culo 21 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio electr&oacute;nico, las comunicaciones comerciales a trav&eacute;s de correo electr&oacute;nico:";
 choices[2]= new Array();
 choices[2][0] = "Est&aacute;n estrictamente prohibidas en todos los casos.";
 choices[2][1] = "Est&aacute;n permitidas si el destinatario de las mismas no manifiesta su oposici&oacute;n inequ&iacute;voca y expresa.";
 choices[2][2] = "Est&aacute;n permitidas en los casos previstos en la Ley Org&aacute;nica de Protecci&oacute;n de Datos.";
 choices[2][3] = "Est&aacute;n permitidas si han sido solicitadas o previamente autorizadas por los destinatarios de las mismas.";
 answers[2] = 3;
 units[2] = ['77'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6201. Examen TIC A Castilla La Mancha 2007";
 preguntaids[2] = 6201


//  Id pregunta: 6153 Año de creación de pregunta: 2003
 questions[3]= "4)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public Key Infrastructures)? :";
 choices[3]= new Array();
 choices[3][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[3][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[3][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;n permitidas para dicho certificado";
 choices[3][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[3] = 3;
 units[3] = ['77', '78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6153. Examen TIC A1 MAP 2007";
 preguntaids[3] = 6153


//  Id pregunta: 5630 Año de creación de pregunta: 2007
 questions[4]= "5)  Los prestadores de servicios de certificaci&oacute;n con car&aacute;cter previo al cese definitivo de su actividad, &iquest;que gesti&oacute;n deber&aacute;n realizar con la informaci&oacute;n relativa a los certificados electr&oacute;nicos cuya vigencia haya sido extinguida?";
 choices[4]= new Array();
 choices[4][0] = "Remitirla al ministerio competente.";
 choices[4][1] = "Remitirla al prestador al que se propone la gesti&oacute;n de los certificados vigentes.";
 choices[4][2] = "Ninguna. La ley solo obliga la transferencia de la informaci&oacute;n relativa a los certificados vigentes.";
 choices[4][3] = "Debe conservarla en soporte perdurable durante al menos 30 anos.";
 answers[4] = 0;
 units[4] = ['77'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 5630. Ley 59/2003, art&iacute;culo 21";
 preguntaids[4] = 5630


//  Id pregunta: 6371 Año de creación de pregunta: 2003
 questions[5]= "6)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[5]= new Array();
 choices[5][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[5][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[5][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[5][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[5] = 2;
 units[5] = ['77'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6371. Examen 2006 JCYL";
 preguntaids[5] = 6371


//  Id pregunta: 5678 Año de creación de pregunta: 2007
 questions[6]= "7)  En una infraestructura PKI, la revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[6]= new Array();
 choices[6][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[6][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[6][2] = "No hace falta, se puede hacer desde Internet.";
 choices[6][3] = "En una oficina de registro.";
 answers[6] = 2;
 units[6] = ['77'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 5678. ";
 preguntaids[6] = 5678


//  Id pregunta: 7276 Año de creación de pregunta: 2010
 questions[7]= "8)  El certificado X.509 no";
 choices[7]= new Array();
 choices[7][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[7][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[7][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[7][3] = "Todas las respuestas anteriores son ciertas";
 answers[7] = 3;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7276. ";
 preguntaids[7] = 7276


//  Id pregunta: 7278 Año de creación de pregunta: 2010
 questions[8]= "9)  El campo extensions en un certificado X.509";
 choices[8]= new Array();
 choices[8][0] = "Permite a&ntilde;adir nuevos campos al certificado sin modificar su definici&oacute;n ASN.1";
 choices[8][1] = "Presentan informaci&oacute;n sobre claves certificadas y pol&iacute;ticas";
 choices[8][2] = "Presentan informaci&oacute;n adicional sobre el propietario del certificado y sobre su emisor";
 choices[8][3] = "Todas las respuestas anteriores son ciertas";
 answers[8] = 3;
 units[8] = ['77'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7278. ";
 preguntaids[8] = 7278


//  Id pregunta: 5800 Año de creación de pregunta: 2007
 questions[9]= "10)  Con independencia de lo establecido sobre la validez del documento nacional de identidad, la vigencia de los certificados electr&oacute;nicos reconocidos incorporados al mismo no podr&aacute; ser superior a:";
 choices[9]= new Array();
 choices[9][0] = "2 a&ntilde;os";
 choices[9][1] = "36 meses";
 choices[9][2] = "5 a&ntilde;os";
 choices[9][3] = "12 meses";
 answers[9] = 2;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 5800. Real Decreto 414/2015, de 29 de mayo que modifica el apartado 1 del art&iacute;culo 12 (Validez de los Certificados electr&oacute;nicos) del Real Decreto 1553/200";
 preguntaids[9] = 5800


//  Id pregunta: 9689 Año de creación de pregunta: 2014
 questions[10]= "11)  En una PKI:";
 choices[10]= new Array();
 choices[10][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[10][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[10][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado.";
 choices[10][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[10] = 3;
 units[10] = ['77'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9689. ";
 preguntaids[10] = 9689


//  Id pregunta: 7482 Año de creación de pregunta: 2010
 questions[11]= "12)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[11]= new Array();
 choices[11][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[11][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[11][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[11][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[11] = 2;
 units[11] = ['77'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7482. Map 2005";
 preguntaids[11] = 7482


//  Id pregunta: 6602 Año de creación de pregunta: 2009
 questions[12]= "13)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[12]= new Array();
 choices[12][0] = "Solamente si es firma reconocida";
 choices[12][1] = "Solamente si es firma cualificada";
 choices[12][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[12][3] = "Ninguna de las anteriores es correcta";
 answers[12] = 2;
 units[12] = ['77'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 6602. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";
 preguntaids[12] = 6602


//  Id pregunta: 5940 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[13]= new Array();
 choices[13][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[13][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[13][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International StandardsOrganization / International Electrotechnical Commission)";
 choices[13][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez delresumen de &eacute;ste";
 answers[13] = 1;
 units[13] = ['77'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5940. ";
 preguntaids[13] = 5940


//  Id pregunta: 7277 Año de creación de pregunta: 2010
 questions[14]= "15)  El Directorio X.500";
 choices[14]= new Array();
 choices[14][0] = "Es una base de datos centralizada y accesible desde cualquier punto";
 choices[14][1] = "Es una base de datos distribuida y accesible desde cualquier punto";
 choices[14][2] = "Est&aacute; dise&ntilde;ado para guardar nombres, direcciones,  pero no la informaci&oacute;n necesaria para localizar y establecer comunicaci&oacute;n con una persona o recurso";
 choices[14][3] = "B y C son ciertas";
 answers[14] = 1;
 units[14] = ['77'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7277. ";
 preguntaids[14] = 7277


//  Id pregunta: 6165 Año de creación de pregunta: 2003
 questions[15]= "16)  Los algoritmos de autenticaci&oacute;n y firma utilizados en el DNI se basan en:";
 choices[15]= new Array();
 choices[15][0] = "Cuatro pares de claves RSA";
 choices[15][1] = "Dos pares de claves DES";
 choices[15][2] = "Dos pares de claves DSA";
 choices[15][3] = "Dos pares de claves RSA";
 answers[15] = 3;
 units[15] = ['77'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6165. ";
 preguntaids[15] = 6165


//  Id pregunta: 7639 Año de creación de pregunta: 2010
 questions[16]= "17)  Los certificados de clave p&uacute;blica:";
 choices[16]= new Array();
 choices[16][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones.";
 choices[16][1] = "Ocupan m&aacute;s de 100 kbytes.";
 choices[16][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest Shamir Adleman).";
 choices[16][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemas de clave p&uacute;blica.";
 answers[16] = 0;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7639. Map 2006";
 preguntaids[16] = 7639


//  Id pregunta: 5801 Año de creación de pregunta: 2007
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes no es un servicio ofrecido por el DNI electronico?";
 choices[17]= new Array();
 choices[17][0] = "Firma electronica de documentos";
 choices[17][1] = "Identificacion en medios telematicos";
 choices[17][2] = "Acreditar la identidad fisica";
 choices[17][3] = "Tarjeta sanitaria electronica";
 answers[17] = 3;
 units[17] = ['77'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 5801. RD 1553/2005, art&iacute;culo 1";
 preguntaids[17] = 5801


//  Id pregunta: 6556 Año de creación de pregunta: 2003
 questions[18]= "19)  Indique la respuesta incorrecta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[18]= new Array();
 choices[18][0] = "El modelo de datos de Active Directory deriva del modelo de datos X.500";
 choices[18][1] = "Active Directory utiliza DNS como servicio de ubicaci&oacute;n";
 choices[18][2] = "El identificador &uacute;nico global de objetos, GUID, es un n&uacute;mero de 64 bitsdel que se garantiza su unicidad, y que se asigna a los objetos cuando secrean.";
 choices[18][3] = "En la lista de protocolos compatibles se incluye LDAP, en sus versiones 2 y 3.";
 answers[18] = 2;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6556. ";
 preguntaids[18] = 6556


//  Id pregunta: 6608 Año de creación de pregunta: 2009
 questions[19]= "20)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[19]= new Array();
 choices[19][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[19][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[19][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[19][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[19] = 1;
 units[19] = ['77'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 6608. ";
 preguntaids[19] = 6608


//  Id pregunta: 7619 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[20]= new Array();
 choices[20][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado.";
 choices[20][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta.";
 choices[20][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International Standards Organization/International Electrotechnical Commission).";
 choices[20][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste.";
 answers[20] = 1;
 units[20] = ['77'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7619. Map 2006";
 preguntaids[20] = 7619


//  Id pregunta: 9173 Año de creación de pregunta: 2014
 questions[21]= "22)  En la Ley 59/2003, de firma electr&oacute;nica, se indica que la prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Ministro de Hacienda.";
 choices[21][1] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Consejo de Ministros.";
 choices[21][2] = "No est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[21][3] = "Es una competencia auton&oacute;mica.";
 answers[21] = 2;
 units[21] = ['77'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9173. Examen TIC A2 2013";
 preguntaids[21] = 9173


//  Id pregunta: 7127 Año de creación de pregunta: 2010
 questions[22]= "23)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[22]= new Array();
 choices[22][0] = "Ministerio de Defensa";
 choices[22][1] = "Ministerio del Interior";
 choices[22][2] = "Ministerio de Presidencia";
 choices[22][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[22] = 1;
 units[22] = ['77'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7127. RD 1553/2005, art&iacute;culo 3";
 preguntaids[22] = 7127


//  Id pregunta: 5587 Año de creación de pregunta: 2007
 questions[23]= "24)  En relaci&oacute;n con la Ley 59/2003, de firma electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[23]= new Array();
 choices[23][0] = "El prestador de servicios de certificaci&oacute;n ha de ser una persona jur&iacute;dica.";
 choices[23][1] = "Por resoluci&oacute;n administrativa puede suspenderse, pero no extinguirse, la vigencia de los certificados electr&oacute;nicos.";
 choices[23][2] = "Los certificados reconocidos deben incluir necesariamente, entre otros datos, la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que expide el certificado.";
 choices[23][3] = "El DNI electr&oacute;nico acredita electr&oacute;nicamente la identidad personal de su titular, pero no permite la firma electr&oacute;nica de documentos.";
 answers[23] = 2;
 units[23] = ['77'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 5587. Ley 59/2003, art&iacute;culo 11";
 preguntaids[23] = 5587


//  Id pregunta: 8245 Año de creación de pregunta: 2011
 questions[24]= "25)  Indique el puerto utilizado por el protocolo LDAP sobre SSL:";
 choices[24]= new Array();
 choices[24][0] = "563";
 choices[24][1] = "443";
 choices[24][2] = "336";
 choices[24][3] = "636";
 answers[24] = 3;
 units[24] = ['77'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8245. Examen UPM A2 2011";
 preguntaids[24] = 8245


//  Id pregunta: 7681 Año de creación de pregunta: 2010
 questions[25]= "26)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es un dispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[25]= new Array();
 choices[25][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse solo una vez y asegurar razonablemente su secreto.";
 choices[25][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[25][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros.";
 choices[25][3] = "Que el dispositivo utilizado no altere los datos o el documento que deba firmarse ni impida que este se muestre al firmante antes del proceso de firma.";
 answers[25] = 1;
 units[25] = ['77'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7681. Map 2007";
 preguntaids[25] = 7681


//  Id pregunta: 6161 Año de creación de pregunta: 2001
 questions[26]= "27)  En el est&aacute;ndar X.509,&iquest; qu&eacute; procedimiento de autenticaci&oacute;n utilizar&iacute;a cuando el origen y el destino no tienen relojes sincronizados?";
 choices[26]= new Array();
 choices[26][0] = "autenticaci&oacute;n a 1 v&iacute;a";
 choices[26][1] = "autenticaci&oacute;n a 2 v&iacute;as";
 choices[26][2] = "autenticaci&oacute;n a 3 v&iacute;as";
 choices[26][3] = "autenticaci&oacute;n a 4 v&iacute;as";
 answers[26] = 2;
 units[26] = ['77'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 6161. ";
 preguntaids[26] = 6161


//  Id pregunta: 7781 Año de creación de pregunta: 2010
 questions[27]= "28)  Suponga que recibe una firma electr&oacute;nica avanzada de tipo XAdES-T sin una asociaci&oacute;n espec&iacute;fica a ninguna pol&iacute;tica de firma concreta y que ha verificado con &eacute;xito el formato de la firma y su integridad. En esta situaci&oacute;n, la evaluaci&oacute;n de la validez de dicha firma electr&oacute;nica seg&uacute;n la norma ETSI TS 101 903 v1.3.2 da como resultado:";
 choices[27]= new Array();
 choices[27][0] = "Firma inv&aacute;lida.";
 choices[27][1] = "Validaci&oacute;n incompleta de la firma.";
 choices[27][2] = "Firma v&aacute;lida.";
 choices[27][3] = "Firma suspendida.";
 answers[27] = 1;
 units[27] = ['77'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7781. ";
 preguntaids[27] = 7781


//  Id pregunta: 7933 Año de creación de pregunta: 2011
 questions[28]= "29)  Un prestador de servicios de certificaci&oacute;n, &iquest;durante qu&eacute; per&iacute;odo de tiempo tiene que conservar la informaci&oacute;n relativa a los certificados reconocidos expedidos, de manera que puedan verificarse las firmas efectuadas con los mismos, de acuerdo a lo dispuesto en la Ley 59/2003, de 19 de diciembre, de Firma electr&oacute;nica?";
 choices[28]= new Array();
 choices[28][0] = "Al menos durante 15 a&ntilde;os contados desde la fecha de fin de validez del certificado,";
 choices[28][1] = "Al menos durante 15 a&ntilde;os contados desde el momento de su expedici&oacute;n";
 choices[28][2] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde la fecha de fin de validez del certificado.";
 choices[28][3] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde el momento de su expedici&oacute;n.";
 answers[28] = 1;
 units[28] = ['77'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7933. Examen TIC A2 2010";
 preguntaids[28] = 7933


//  Id pregunta: 9688 Año de creación de pregunta: 2014
 questions[29]= "30)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[29]= new Array();
 choices[29][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[29][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[29][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[29][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[29] = 3;
 units[29] = ['77'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9688. ";
 preguntaids[29] = 9688


//  Id pregunta: 5591 Año de creación de pregunta: 2007
 questions[30]= "31)  La firma digital de un mensaje o documento, garantiza:";
 choices[30]= new Array();
 choices[30][0] = "La autenticaci&oacute;n del emisor e integridad del mensaje.";
 choices[30][1] = "La autenticaci&oacute;n del emisor y confidencialidad del env&iacute;o.";
 choices[30][2] = "Autenticaci&oacute;n, confidencialidad e integridad.";
 choices[30][3] = "Confidencialidad del env&iacute;o e integridad del mensaje.";
 answers[30] = 0;
 units[30] = ['77'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5591. ";
 preguntaids[30] = 5591


//  Id pregunta: 5727 Año de creación de pregunta: 2007
 questions[31]= "32)  Indica cu&aacute;l de las siguientes definiciones de firma electr&oacute;nica es la que aparece en la Ley 59/2003, de 19 de diciembre:";
 choices[31]= new Array();
 choices[31][0] = "es el resultado de obtener por medio de mecanismos o dispositivos un patr&oacute;n que se asocie biun&iacute;vocamente a un individuo y a su voluntad de firmar.";
 choices[31][1] = "es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[31][2] = "es el documento electr&oacute;nico que acredita electr&oacute;nicamente la identidad personal de su titular y permite la firma de documentos.";
 choices[31][3] = "es el conjunto de datos &uacute;nicos, como c&oacute;digos o claves criptogr&aacute;ficas privadas, que el firmante utiliza para firmar documentos.";
 answers[31] = 1;
 units[31] = ['77'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 5727. Ley 59/2003, art&iacute;culo 3";
 preguntaids[31] = 5727


//  Id pregunta: 8391 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;Qu&eacute; grupos de operaciones est&aacute;n definidas en el modelo funcional de LDAP?";
 choices[32]= new Array();
 choices[32][0] = "De consulta, de actualizaci&oacute;n y de b&uacute;squeda";
 choices[32][1] = "De b&uacute;squeda, de actualizaci&oacute;n y de control";
 choices[32][2] = "De consulta, de actualizaci&oacute;n y de autenticaci&oacute;n y control";
 choices[32][3] = "De comparaci&oacute;n, de consulta y de b&uacute;squeda";
 answers[32] = 1;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8391. ";
 preguntaids[32] = 8391


//  Id pregunta: 7952 Año de creación de pregunta: 2011
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[33]= new Array();
 choices[33][0] = "XAdES-X.";
 choices[33][1] = "XAdES-X-L.";
 choices[33][2] = "XAdES-C.";
 choices[33][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[33] = 1;
 units[33] = ['77'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7952. Examen TIC A2 2010";
 preguntaids[33] = 7952


//  Id pregunta: 6609 Año de creación de pregunta: 2009
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[34]= new Array();
 choices[34][0] = "Definici&oacute;n del tipo de contenido";
 choices[34][1] = "Resumen del mensaje";
 choices[34][2] = "Sello de tiempo";
 choices[34][3] = "Atributos identificativos del certificado del firmante";
 answers[34] = 2;
 units[34] = ['77'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 6609. ";
 preguntaids[34] = 6609


//  Id pregunta: 8513 Año de creación de pregunta: 2011
 questions[35]= "36)  Cual de las firmas Xades a&ntilde;ade referencias a datos de verificaci&oacute;n (certificados y listas de revocaci&oacute;n) a los documentos firmados";
 choices[35]= new Array();
 choices[35][0] = "Xades-BES";
 choices[35][1] = "Xades-T";
 choices[35][2] = "Xades-C";
 choices[35][3] = "Xades-EPES";
 answers[35] = 2;
 units[35] = ['77'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8513. ";
 preguntaids[35] = 8513


//  Id pregunta: 6164 Año de creación de pregunta: 2003
 questions[36]= "37)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[36]= new Array();
 choices[36][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[36][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[36][2] = "60 mm de ancho X 58 mm de alto";
 choices[36][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[36] = 0;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 6164. ";
 preguntaids[36] = 6164


//  Id pregunta: 6143 Año de creación de pregunta: 2003
 questions[37]= "38)  &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?:";
 choices[37]= new Array();
 choices[37][0] = "Zona p&uacute;blica";
 choices[37][1] = "Zona privada";
 choices[37][2] = "Zona de seguridad";
 choices[37][3] = "Zona compartida";
 answers[37] = 2;
 units[37] = ['77'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 6143. Examen TIC A1 MAP 2007";
 preguntaids[37] = 6143


//  Id pregunta: 7846 Año de creación de pregunta: 2010
 questions[38]= "39)  Referente a la Recomendaci&oacute;n del W3C &quot;XML Signature Syntax and Processing&quot;, &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[38]= new Array();
 choices[38][0] = "S&oacute;lo es posible indicar el uso del algoritmo C14N en el elemento ds:SignedInfo.";
 choices[38][1] = "Explica tres posibles formas de aplicaci&oacute;n de la firma: detached, enveloping y enveloped.";
 choices[38][2] = "Permite firmar documentos en cualquier formato, no s&oacute;lo en formato XML.";
 choices[38][3] = "Es la base para la definici&oacute;n de XAdES.";
 answers[38] = 0;
 units[38] = ['77'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7846. Examen TIC A1 2010";
 preguntaids[38] = 7846


//  Id pregunta: 7529 Año de creación de pregunta: 2010
 questions[39]= "40)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[39]= new Array();
 choices[39][0] = "Multa de 30.001 a 150.000 euros.";
 choices[39][1] = "Multa por importe m&aacute;ximo de 50.000 euros.";
 choices[39][2] = "Multa de 150.001 a 600.000 euros.";
 choices[39][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo.";
 answers[39] = 0;
 units[39] = ['77'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7529. Map 2005";
 preguntaids[39] = 7529


//  Id pregunta: 6160 Año de creación de pregunta: 2003
 questions[40]= "41)  Un servicio de directorio electr&oacute;nico NO se caracteriza por";
 choices[40]= new Array();
 choices[40][0] = "ser flexible";
 choices[40][1] = "Aceptar cierta inconsistencia temporal de la informaci&oacute;n en su replicaci&oacute;n";
 choices[40][2] = "Ser est&aacute;tico";
 choices[40][3] = "Poder ser consultado y actualizado en l&iacute;nea";
 answers[40] = 2;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6160. ";
 preguntaids[40] = 6160


//  Id pregunta: 6077 Año de creación de pregunta: 2003
 questions[41]= "42)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[41]= new Array();
 choices[41][0] = "El sistema de autenticaci&oacute;n &quot;Kerberos&quot;, utiliza exclusivamente mecanismos de criptograf&iacute;a asim&eacute;trica";
 choices[41][1] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos basados en criptograf&iacute;a sim&eacute;trica y en criptograf&iacute;aasim&eacute;trica";
 choices[41][2] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza exclusivamente mecanismos basados en critograf&iacute;a sim&eacute;trica";
 choices[41][3] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos de identificaci&oacute;n/password y de criptograf&iacute;a sim&eacute;trica";
 answers[41] = 3;
 units[41] = ['77'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 6077. Examen TIC A1 MAP 2007";
 preguntaids[41] = 6077


//  Id pregunta: 7206 Año de creación de pregunta: 2010
 questions[42]= "43)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[42]= new Array();
 choices[42][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[42][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[42][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[42][3] = "Ninguna de las anteriores es correcta";
 answers[42] = 2;
 units[42] = ['77'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7206. Castilla La Mancha 2009";
 preguntaids[42] = 7206


//  Id pregunta: 6159 Año de creación de pregunta: 2003
 questions[43]= "44)  El est&aacute;ndar conocido como ISO/IEC 9594-1:2014 se corresponde con:";
 choices[43]= new Array();
 choices[43][0] = "LDAP";
 choices[43][1] = "UIT-T X-500";
 choices[43][2] = "HTML";
 choices[43][3] = "SQL";
 answers[43] = 1;
 units[43] = ['77'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6159. ";
 preguntaids[43] = 6159


//  Id pregunta: 8335 Año de creación de pregunta: 2011
 questions[44]= "45)  Seg&uacute;n el art&iacute;culo 3 de la Ley 59/2003, de 19 de diciembre, de Firma Electr&oacute;nica, una &quot;firma electr&oacute;nica que permite identificar al firmante y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control&quot; es una:";
 choices[44]= new Array();
 choices[44][0] = "Firma electr&oacute;nica";
 choices[44][1] = "Firma electr&oacute;nica avanzada";
 choices[44][2] = "Firma electr&oacute;nica reconocida";
 choices[44][3] = "Firma electr&oacute;nica validada";
 answers[44] = 1;
 units[44] = ['77'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8335. Examen UPM A2 2011";
 preguntaids[44] = 8335


//  Id pregunta: 6557 Año de creación de pregunta: 2003
 questions[45]= "46)  Indique la respuesta correcta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[45]= new Array();
 choices[45][0] = "Cuando un dominio se une a un &aacute;rbol dedominio se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitiva unidireccional entre el dominio y su primario del &aacute;rbol";
 choices[45][1] = "Cuando un dominio se une a un &aacute;rbol dedominio no se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitivabidireccional entre el dominio y su primario del &aacute;rbol";
 choices[45][2] = "El sistema de replicaci&oacute;n de Active Directory utiliza n&uacute;meros de secuencia de actualizaciones";
 choices[45][3] = "Para la propagaci&oacute;n de actualizaciones de Active Directory, Windows Server 2003proporciona sincronizaci&oacute;n temporal distribuida.";
 answers[45] = 2;
 units[45] = ['77'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 6557. ";
 preguntaids[45] = 6557


//  Id pregunta: 5750 Año de creación de pregunta: 2007
 questions[46]= "47)  La organizaci&oacute;n de la informaci&oacute;n en un servicio de directorio es:";
 choices[46]= new Array();
 choices[46][0] = "relacional";
 choices[46][1] = "indexada";
 choices[46][2] = "jer&aacute;rquica";
 choices[46][3] = "en colas";
 answers[46] = 2;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 5750. ";
 preguntaids[46] = 5750


//  Id pregunta: 6601 Año de creación de pregunta: 2009
 questions[47]= "48)  &iquest;Tiene la firma electr&oacute;nica el mismo valor ante la ley que la firma manuscrita?";
 choices[47]= new Array();
 choices[47][0] = "S&iacute;, siempre";
 choices[47][1] = "No, en ning&uacute;n caso";
 choices[47][2] = "S&iacute;, si es firma electr&oacute;nica avanzada";
 choices[47][3] = "S&iacute;, si es firma electr&oacute;nica cualificada";
 answers[47] = 3;
 units[47] = ['77'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 6601. Reglamento 910/2014";
 preguntaids[47] = 6601


//  Id pregunta: 6199 Año de creación de pregunta: 2003
 questions[48]= "49)  Seg&uacute;n la normativa de firma electr&oacute;nica de firma electr&oacute;nica, el per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[48]= new Array();
 choices[48][0] = "Un a&ntilde;o";
 choices[48][1] = "Dos a&ntilde;os";
 choices[48][2] = "Tres a&ntilde;os";
 choices[48][3] = "Cinco a&ntilde;os";
 answers[48] = 3;
 units[48] = ['77'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6199. Examen TIC A Castilla La Mancha 2007";
 preguntaids[48] = 6199


//  Id pregunta: 5677 Año de creación de pregunta: 2007
 questions[49]= "50)  La firma digital garantiza:";
 choices[49]= new Array();
 choices[49][0] = "La autenticidad, la integridad y el no repudio en destino.";
 choices[49][1] = "La autenticidad, la integridad y el no repudio en origen.";
 choices[49][2] = "La autenticidad, la integridad y la confidencialidad.";
 choices[49][3] = "La confidencialidad.";
 answers[49] = 1;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 5677. ";
 preguntaids[49] = 5677


//  Id pregunta: 7572 Año de creación de pregunta: 2010
 questions[50]= "51)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos pueden tener un per&iacute;odo m&aacute;ximo de validez de:";
 choices[50]= new Array();
 choices[50][0] = "Dos a&ntilde;os.";
 choices[50][1] = "Cuatro a&ntilde;os.";
 choices[50][2] = "Cinco a&ntilde;os.";
 choices[50][3] = "La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica no establece expl&iacute;citamente un per&iacute;odo m&aacute;ximo de validez para este tipo de certificados.";
 answers[50] = 2;
 units[50] = ['77'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7572. Similar a Map 2006";
 preguntaids[50] = 7572


//  Id pregunta: 7686 Año de creación de pregunta: 2010
 questions[51]= "52)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n de la vigencia de un certificado?";
 choices[51]= new Array();
 choices[51][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado.";
 choices[51][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por este, un tercero autorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica.";
 choices[51][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene.";
 choices[51][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador de servicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso.";
 answers[51] = 3;
 units[51] = ['77'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7686. Map 2007";
 preguntaids[51] = 7686


//  Id pregunta: 5899 Año de creación de pregunta: 2007
 questions[52]= "53)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidospueden tener un periodo m&aacute;ximo de validez de:";
 choices[52]= new Array();
 choices[52][0] = "Dos a&ntilde;os";
 choices[52][1] = "Tres a&ntilde;os";
 choices[52][2] = "Cuatro a&ntilde;os";
 choices[52][3] = "Cinco a&ntilde;os";
 answers[52] = 3;
 units[52] = ['77'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 5899. ";
 preguntaids[52] = 5899


//  Id pregunta: 6796 Año de creación de pregunta: 2010
 questions[53]= "54)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[53]= new Array();
 choices[53][0] = "De acceso discrecional (DAC)";
 choices[53][1] = "De acceso obligatorio (MAC)";
 choices[53][2] = "Basado en roles (RBAC)";
 choices[53][3] = "De confidencialidad.";
 answers[53] = 1;
 units[53] = ['77'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6796. TIC A 2009";
 preguntaids[53] = 6796


//  Id pregunta: 5544 Año de creación de pregunta: 2007
 questions[54]= "55)  Un sistema pide a los usuarios c&oacute;digo de usuario y clave para identificarse. Los datos de los usuarios se almacenan en la base de datos, a excepci&oacute;n de las claves que se guardan en un fichero encriptado del sistema, que se actualiza cuando los usuarios cambian su clave. Este sistema ha demostrado ser lento y poco seguro. Se&ntilde;ale la opci&oacute;n m&aacute;s adecuada para mejorarlo:";
 choices[54]= new Array();
 choices[54][0] = "Indexar el fichero para que el acceso sea m&aacute;s r&aacute;pido.";
 choices[54][1] = "Guardar las claves encriptadas en un campo de la tabla de usuarios.";
 choices[54][2] = "Dividir el fichero en varios ficheros para mejorar el acceso, guardando en un campo de la tabla de usuarios el nombre del fichero donde reside la clave de cada usuario.";
 choices[54][3] = "No guardar la clave, gener&aacute;ndola mediante una funci&oacute;n hash aplicada al c&oacute;digo.";
 answers[54] = 1;
 units[54] = ['77'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 5544. ";
 preguntaids[54] = 5544


//  Id pregunta: 7647 Año de creación de pregunta: 2010
 questions[55]= "56)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL):";
 choices[55]= new Array();
 choices[55][0] = "Permiten conocer el estado de un certificado en el instante de la consulta.";
 choices[55][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[55][2] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n.";
 choices[55][3] = "Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintas facilitan su tratamiento.";
 answers[55] = 2;
 units[55] = ['77'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7647. Map 2006";
 preguntaids[55] = 7647


//  Id pregunta: 7520 Año de creación de pregunta: 2010
 questions[56]= "57)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos:";
 choices[56]= new Array();
 choices[56][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo.";
 choices[56][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo.";
 choices[56][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante.";
 choices[56][3] = "Confieren, por s&iacute; mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita.";
 answers[56] = 1;
 units[56] = ['77'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7520. Similar a Map 2005";
 preguntaids[56] = 7520


//  Id pregunta: 6688 Año de creación de pregunta: 2009
 questions[57]= "58)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[57]= new Array();
 choices[57][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[57][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[57][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC";
 choices[57][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste";
 answers[57] = 1;
 units[57] = ['77'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6688. ";
 preguntaids[57] = 6688


//  Id pregunta: 5959 Año de creación de pregunta: 2007
 questions[58]= "59)  Los certificados de clave p&uacute;blica:";
 choices[58]= new Array();
 choices[58][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones";
 choices[58][1] = "Ocupan m&aacute;s de 100 kbytes";
 choices[58][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest ShamirAdleman)";
 choices[58][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemasde clave p&uacute;blica";
 answers[58] = 0;
 units[58] = ['77'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 5959. ";
 preguntaids[58] = 5959


//  Id pregunta: 9174 Año de creación de pregunta: 2014
 questions[59]= "60)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[59]= new Array();
 choices[59][0] = "5 a&ntilde;os.";
 choices[59][1] = "10 a&ntilde;os.";
 choices[59][2] = "Permanentemente.";
 choices[59][3] = "15 a&ntilde;os.";
 answers[59] = 3;
 units[59] = ['77'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9174. Examen TIC A2 2013";
 preguntaids[59] = 9174


//  Id pregunta: 6163 Año de creación de pregunta: 2003
 questions[60]= "61)  La informaci&oacute;n en el chip del DNI est&aacute; distribuida en tres zonas, con diferentes niveles y condiciones de acceso. &iquest;Cu&aacute;l no es una de ellas?";
 choices[60]= new Array();
 choices[60][0] = "Zona privada";
 choices[60][1] = "Zona de control";
 choices[60][2] = "Zona de seguridad";
 choices[60][3] = "Zona p&uacute;blica";
 answers[60] = 1;
 units[60] = ['77'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6163. ";
 preguntaids[60] = 6163


//  Id pregunta: 7126 Año de creación de pregunta: 2010
 questions[61]= "62)  De acuerdo a lo dispuesto en la ley 59/2003, se&ntilde;ale la respuesta correcta";
 choices[61]= new Array();
 choices[61][0] = "Firma electr&oacute;nica, es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[61][1] = "La firma electr&oacute;nica avanzada tendr&aacute; respecto de los datos consignados en forma electr&oacute;nica el mismo valor que la firma manuscrita en relaci&oacute;n con los consignados en papel.";
 choices[61][2] = "La firma electronica avanzada es la firma electr&oacute;nica reconocida basada en un certificado reconocido y generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[61][3] = "La firma electr&oacute;nica reconocida es la firma electr&oacute;nica avanzada que permite identificar al firmante, as&iacute; como el momento de creaci&oacute;n y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede mantener bajo su exclusivo control.";
 answers[61] = 0;
 units[61] = ['77'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7126. Ley 59/2003, art&iacute;culo 3";
 preguntaids[61] = 7126


//  Id pregunta: 6198 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguiente afirmaciones es cierta respecto a la firma electr&oacute;nica?";
 choices[62]= new Array();
 choices[62][0] = "La firma de documento se encuentra siempre dentro del documento original.";
 choices[62][1] = "En los certificados de persona jur&iacute;dica la identificaci&oacute;n de la persona solicitante se incluye en el certificado electr&oacute;nico.";
 choices[62][2] = "La extinci&oacute;n de un certificado s&oacute;lo puede ser por resoluci&oacute;n judicial que lo ordene.";
 choices[62][3] = "La extinci&oacute;n o suspensi&oacute;n de la vigencia de un certificado electr&oacute;nico tendr&aacute; efectos retroactivos.";
 answers[62] = 1;
 units[62] = ['77'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 6198. Examen TIC A Castilla La Mancha 2007";
 preguntaids[62] = 6198


//  Id pregunta: 9097 Año de creación de pregunta: 2014
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[63]= new Array();
 choices[63][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[63][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[63][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[63][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[63] = 2;
 units[63] = ['77'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9097. Examen TIC-A1 2013";
 preguntaids[63] = 9097


//  Id pregunta: 5575 Año de creación de pregunta: 2007
 questions[64]= "65)  Si para un sistema de acceso basado en control biom&eacute;trico, FAR = 0% y FRR=12%, puede afirmarse que...";
 choices[64]= new Array();
 choices[64][0] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido denegados.";
 choices[64][1] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 12% de los accesos autorizados han sido denegados.";
 choices[64][2] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 88% de los accesos autorizados han sido denegados.";
 choices[64][3] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido permitidos.";
 answers[64] = 1;
 units[64] = ['77'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 5575. ";
 preguntaids[64] = 5575


//  Id pregunta: 5969 Año de creación de pregunta: 2007
 questions[65]= "66)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL)";
 choices[65]= new Array();
 choices[65][0] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 choices[65][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondienteclave p&uacute;blica";
 choices[65][2] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[65][3] = "Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintasfacilitan su tratamiento";
 answers[65] = 2;
 units[65] = ['77'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 5969. ";
 preguntaids[65] = 5969


//  Id pregunta: 7501 Año de creación de pregunta: 2010
 questions[66]= "67)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objetos de acuerdo a su funcionalidad:";
 choices[66]= new Array();
 choices[66][0] = "Auxiliar, Estructural, Simplificada, Alias.";
 choices[66][1] = "Estructural, Simplificada, Auxiliar, Alias.";
 choices[66][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias.";
 choices[66][3] = "Abstracta, Estructural, Auxiliar, Alias.";
 answers[66] = 3;
 units[66] = ['77'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7501. Map 2005";
 preguntaids[66] = 7501


//  Id pregunta: 9172 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;Cu&aacute;les son &aacute;reas de actuaci&oacute;n dentro de la Estrategia 2011-2015 del Plan Avanza 2?";
 choices[67]= new Array();
 choices[67][0] = "Ciudadan&iacute;a Digital, Econom&iacute;a Digital, Educaci&oacute;n y Servicios P&uacute;blicos Digitales, Publicaci&oacute;n Digital.";
 choices[67][1] = "Infraestructura, Gobernanza, Confianza y Seguridad, Espacio &uacute;nico de informaci&oacute;n.";
 choices[67][2] = "Administraci&oacute;n sin papeles, Infraestructuras, Uso y confianza en Internet, Impulso de la industria TIC espa&ntilde;ola.";
 choices[67][3] = "Administraci&oacute;n en l&iacute;nea, Comercio electr&oacute;nico, Salud y Educaci&oacute;n en l&iacute;nea, Banda Ancha.";
 answers[67] = 2;
 units[67] = ['77'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9172. Examen TIC A2 2013";
 preguntaids[67] = 9172


//  Id pregunta: 6200 Año de creación de pregunta: 2003
 questions[68]= "69)  Seg&uacute;n la LSSI, cu&aacute;les son las p&aacute;ginas web que deben cumplir criterios de accesibilidad:";
 choices[68]= new Array();
 choices[68][0] = "Todas, independientemente de su finalidad.";
 choices[68][1] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2004";
 choices[68][2] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2008";
 choices[68][3] = "S&oacute;lo las comerciales";
 answers[68] = 2;
 units[68] = ['77'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 6200. Examen TIC A Castilla La Mancha 2007";
 preguntaids[68] = 6200


//  Id pregunta: 7783 Año de creación de pregunta: 2010
 questions[69]= "70)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[69]= new Array();
 choices[69][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado.";
 choices[69][1] = "Se puede implementar mediante criptograf&iacute;a de clave sim&eacute;trica.";
 choices[69][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC.";
 choices[69][3] = "La firma ciega (Blind Signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste.";
 answers[69] = 1;
 units[69] = ['77'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7783. ";
 preguntaids[69] = 7783


//  Id pregunta: 7954 Año de creación de pregunta: 2011
 questions[70]= "71)  Un documento firmado digitalmente incluye la huella digital:";
 choices[70]= new Array();
 choices[70][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[70][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[70][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[70][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[70] = 2;
 units[70] = ['77'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7954. Examen TIC A2 2010";
 preguntaids[70] = 7954


//  Id pregunta: 6166 Año de creación de pregunta: 2003
 questions[71]= "72)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[71]= new Array();
 choices[71][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[71][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[71][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[71][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[71] = 2;
 units[71] = ['77'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 6166. ";
 preguntaids[71] = 6166


//  Id pregunta: 8348 Año de creación de pregunta: 2011
 questions[72]= "73)  &iquest;Con qu&eacute; campo de la inform&aacute;tica se relaciona SHA-2?";
 choices[72]= new Array();
 choices[72][0] = "Data Mining";
 choices[72][1] = "La Criptograf&iacute;a";
 choices[72][2] = "El e-learning";
 choices[72][3] = "La gesti&oacute;n de versiones";
 answers[72] = 1;
 units[72] = ['77'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8348. Examen UC3M 2010";
 preguntaids[72] = 8348


//  Id pregunta: 7491 Año de creación de pregunta: 2010
 questions[73]= "74)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[73]= new Array();
 choices[73][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[73][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[73][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[73][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[73] = 2;
 units[73] = ['77'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7491. Map 2005";
 preguntaids[73] = 7491


//  Id pregunta: 7125 Año de creación de pregunta: 2010
 questions[74]= "75)  La ley 59/2003 de firma electr&oacute;nica, regula:";
 choices[74]= new Array();
 choices[74][0] = "La firma electr&oacute;nica";
 choices[74][1] = "La prestaci&oacute;n de servicios de certificaci&oacute;n";
 choices[74][2] = "La eficacia de la firma electr&oacute;nica";
 choices[74][3] = "Todas las anteriores son correctas.";
 answers[74] = 3;
 units[74] = ['77'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7125. Ley 59/2003, art&iacute;culo 1";
 preguntaids[74] = 7125


