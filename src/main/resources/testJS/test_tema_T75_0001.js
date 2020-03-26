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
//  Id pregunta: 3341 Año de creación de pregunta: 2004
 questions[0]= "1)  &iquest;Qu&eacute; es FALSO respecto al NRC?";
 choices[0]= new Array();
 choices[0][0] = "Es un elemento utilizado en la pasarela de pago PISTA";
 choices[0][1] = "Sus siglas significan: N&uacute;mero de Referencia Completo";
 choices[0][2] = "Se compone del n&uacute;mero de justificante m&aacute;s unos caracteres de control";
 choices[0][3] = "Para obtener los caracteres de control se aplica la funci&oacute;n MAC del algoritmo DES a los datos de la operaci&oacute;n, mediante la clave privada de la entidad";
 answers[0] = 0;
 units[0] = ['75'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3341. ";
 preguntaids[0] = 3341


//  Id pregunta: 9338 Año de creación de pregunta: 2014
 questions[1]= "2)  &iquest;Que disposici&oacute;n legal determina el procedimiento para la expedici&oacute;n del DNI electr&oacute;nico y sus certificados de firma electr&oacute;nica?";
 choices[1]= new Array();
 choices[1][0] = "Ley 11/2007, de 22 de junio.";
 choices[1][1] = "RD 4/2010, de 8 de enero.";
 choices[1][2] = "RD 1553/2005, de 23 de diciembre.";
 choices[1][3] = "Ley 26/2007, de 28 de diciembre.";
 answers[1] = 2;
 units[1] = ['75'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9338. ";
 preguntaids[1] = 9338


//  Id pregunta: 8060 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[2]= new Array();
 choices[2][0] = "Bluetooth";
 choices[2][1] = "PayPal Mobile";
 choices[2][2] = "NFC (Near Field Communication)";
 choices[2][3] = "3D Secure";
 answers[2] = 2;
 units[2] = ['75', '108'];
 blocks[2] = ['B2', 'B4'];
 comments[2] = "Id Pregunta: 8060. ";
 preguntaids[2] = 8060


//  Id pregunta: 10257 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes es un protocolo para el pago seguro en red?";
 choices[3]= new Array();
 choices[3][0] = "XMLDSig";
 choices[3][1] = "3D-Secure";
 choices[3][2] = "SSL";
 choices[3][3] = "SHA256";
 answers[3] = 1;
 units[3] = ['75'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10257. ";
 preguntaids[3] = 10257


//  Id pregunta: 9225 Año de creación de pregunta: 2014
 questions[4]= "5)  El protocolo SET (Secure Electronic Transaction)";
 choices[4]= new Array();
 choices[4][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[4][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[4][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[4][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[4] = 1;
 units[4] = ['75'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9225. Examen TIC A1 2013";
 preguntaids[4] = 9225


//  Id pregunta: 6091 Año de creación de pregunta: 2003
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[5]= new Array();
 choices[5][0] = "Simultaneidad";
 choices[5][1] = "Interactividad";
 choices[5][2] = "No repudio";
 choices[5][3] = "Automatizaci&oacute;n";
 answers[5] = 2;
 units[5] = ['75'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6091. Examen TIC A1 MAP 2007";
 preguntaids[5] = 6091


//  Id pregunta: 3056 Año de creación de pregunta: 2002
 questions[6]= "7)  Si comparamos SSL y SET:";
 choices[6]= new Array();
 choices[6][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[6][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[6][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[6][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[6] = 0;
 units[6] = ['10', '75'];
 blocks[6] = ['A2', 'B2'];
 comments[6] = "Id Pregunta: 3056. ";
 preguntaids[6] = 3056


//  Id pregunta: 7443 Año de creación de pregunta: 2010
 questions[7]= "8)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a facturae:";
 choices[7]= new Array();
 choices[7][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[7][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[7][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[7][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[7] = 3;
 units[7] = ['75'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7443. ";
 preguntaids[7] = 7443


//  Id pregunta: 9814 Año de creación de pregunta: 2015
 questions[8]= "9)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[8]= new Array();
 choices[8][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[8][1] = "Debe implementar una interfaz REST.";
 choices[8][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[8][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[8] = 2;
 units[8] = ['75'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9814. ";
 preguntaids[8] = 9814


//  Id pregunta: 9813 Año de creación de pregunta: 2015
 questions[9]= "10)  SET es:";
 choices[9]= new Array();
 choices[9][0] = "Una tecnolog&iacute;a definida por MasterCard con el fin de verificar la identidad de los titulares que efect&uacute;an compras por Internet.";
 choices[9][1] = "Un sistema de micropagos.";
 choices[9][2] = "Un protocolo est&aacute;ndar para el pago remoto con tarjetas de cr&eacute;dito.";
 choices[9][3] = "Un negocio de comercio electr&oacute;nico que permite realizar pagos o transferencias monetarias a trav&eacute;s de Internet.";
 answers[9] = 2;
 units[9] = ['75'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9813. ";
 preguntaids[9] = 9813


//  Id pregunta: 7687 Año de creación de pregunta: 2010
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un medio de pago?";
 choices[10]= new Array();
 choices[10][0] = "Simultaneidad.";
 choices[10][1] = "Interactividad.";
 choices[10][2] = "No repudio.";
 choices[10][3] = "Automatizaci&oacute;n.";
 answers[10] = 2;
 units[10] = ['75'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7687. Map 2007";
 preguntaids[10] = 7687


//  Id pregunta: 7441 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar utilizado para el intercambio de datos relativos al comercio electr&oacute;nico?";
 choices[11]= new Array();
 choices[11][0] = "EDIFACT";
 choices[11][1] = "ebXML";
 choices[11][2] = "XMT";
 choices[11][3] = "UBL";
 answers[11] = 2;
 units[11] = ['75'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7441. ";
 preguntaids[11] = 7441


//  Id pregunta: 2467 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes operaciones se realiza a trav&eacute;s de servicios de transferencia electr&oacute;nica de fondos?";
 choices[12]= new Array();
 choices[12][0] = "Autorizaci&oacute;n y control de transacciones con pago por tarjeta de cr&eacute;dito o d&eacute;bito";
 choices[12][1] = "Consultas de estado de cuenta";
 choices[12][2] = "Consulta o acceso a bancos de datos";
 choices[12][3] = "Todas las anteriores";
 answers[12] = 3;
 units[12] = ['75'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2467. ";
 preguntaids[12] = 2467


//  Id pregunta: 7442 Año de creación de pregunta: 2010
 questions[13]= "14)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[13]= new Array();
 choices[13][0] = "3D Secure";
 choices[13][1] = "UCAF";
 choices[13][2] = "Urbinet";
 choices[13][3] = "SET";
 answers[13] = 2;
 units[13] = ['75'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7442. ";
 preguntaids[13] = 7442


//  Id pregunta: 3050 Año de creación de pregunta: 2002
 questions[14]= "15)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[14]= new Array();
 choices[14][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[14][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[14][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[14][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[14] = 2;
 units[14] = ['10', '75'];
 blocks[14] = ['A2', 'B2'];
 comments[14] = "Id Pregunta: 3050. ";
 preguntaids[14] = 3050


//  Id pregunta: 8623 Año de creación de pregunta: 2013
 questions[15]= "16)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[15]= new Array();
 choices[15][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[15][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[15][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[15][3] = "Todas son verdaderas";
 answers[15] = 0;
 units[15] = ['75'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8623. ";
 preguntaids[15] = 8623


//  Id pregunta: 8624 Año de creación de pregunta: 2013
 questions[16]= "17)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[16]= new Array();
 choices[16][0] = "Fue desarrollado por OASIS";
 choices[16][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas";
 choices[16][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[16][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[16] = 1;
 units[16] = ['75'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8624. ";
 preguntaids[16] = 8624


//  Id pregunta: 10341 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes es el formato oficial de facturaci&oacute;n electr&oacute;nica de la Administraci&oacute;n General del Estado?";
 choices[17]= new Array();
 choices[17][0] = "GS2-XML";
 choices[17][1] = "UBL";
 choices[17][2] = "Facturae";
 choices[17][3] = "Eb-XML";
 answers[17] = 2;
 units[17] = ['75'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10341. ";
 preguntaids[17] = 10341


//  Id pregunta: 7439 Año de creación de pregunta: 2010
 questions[18]= "19)  Seg&uacute;n la ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico cu&aacute;l de los siguientes servicios se encuentra excluidos del &aacute;mbito de aplicaci&oacute;n de la Ley:";
 choices[18]= new Array();
 choices[18][0] = "Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones p&uacute;blicas";
 choices[18][1] = "Los servicios prestados por prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a";
 choices[18][2] = "Los servicios de la sociedad de la informaci&oacute;n que los prestadores residentes o domiciliados en otro Estado ofrezcan a trav&eacute;s de un establecimiento permanente situado en Espa&ntilde;a";
 choices[18][3] = "Servicios que afecten a derechos de propiedad intelectual o industrial prestados por prestadores de servicios establecidos en otro Estado miembro de la Uni&oacute;n Europea o del Espacio Econ&oacute;mico Europeo cuando el destinatario de los servicios radique en Espa&ntilde;a";
 answers[18] = 0;
 units[18] = ['75'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7439. ";
 preguntaids[18] = 7439


//  Id pregunta: 8621 Año de creación de pregunta: 2013
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de los siguientes no es un bloque de primer nivel en una factura en formato Facturae;";
 choices[19]= new Array();
 choices[19][0] = "Datos del emisor";
 choices[19][1] = "Detalle de la factura";
 choices[19][2] = "Importe de la factura";
 choices[19][3] = "Datos de la firma electr&oacute;nica";
 answers[19] = 2;
 units[19] = ['75'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8621. Examen TIC A2 2011";
 preguntaids[19] = 8621


//  Id pregunta: 6223 Año de creación de pregunta: 2003
 questions[20]= "21)  El protocolo SET:";
 choices[20]= new Array();
 choices[20][0] = "Es un protocolo para la realizaci&oacute;n de transacciones de pago seguras a trav&eacute;s de Internet.";
 choices[20][1] = "Es un protocolo para juegos en red.";
 choices[20][2] = "Es un protocolo para la interconexi&oacute;n de chats en Internet.";
 choices[20][3] = "Es un protocolo para la transmisi&oacute;n de voz comprimida a trav&eacute;s de Internet.";
 answers[20] = 0;
 units[20] = ['75'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6223. Examen TIC A Castilla La Mancha 2007";
 preguntaids[20] = 6223


//  Id pregunta: 10545 Año de creación de pregunta: 2015
 questions[21]= "22)  De las siguientes afirmaciones, seleccione la correcta en relaci&oacute;n con lo regulado en la Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico";
 choices[21]= new Array();
 choices[21][0] = "La Ley 25/2013 tiene como &aacute;mbito de actuaci&oacute;n, las facturas emitidas en el marco de las relaciones jur&iacute;dicas entre proveedores de bienes y servicios y las Administraciones P&uacute;blicas";
 choices[21][1] = "Impulso del uso de la factura electr&oacute;nica en el sector p&uacute;blico, con car&aacute;cter obligatorio para determinados sujetos a partir del uno de enero de 2015.";
 choices[21][2] = "Obligaci&oacute;n de las empresas de presentaci&oacute;n en un registro administrativo de las facturas expedidas por los servicios que presten o bienes que entreguen a una Administraci&oacute;n P&uacute;blica, en un plazo de 20 d&iacute;as desde la prestaci&oacute;n o entrega";
 choices[21][3] = "Se establece la creaci&oacute;n obligatoria para la Administraci&oacute;n P&uacute;blica estatal, de puntos generales de entrada de facturas electr&oacute;nicas";
 answers[21] = 0;
 units[21] = ['75'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10545. Es obligatorio a partir del 15 de enero de 2015. El plazo para la entrega de la factura, son 30 d&iacute;as. La creaci&oacute;n es obligatoria para todas las administraciones p&uacute;blicas.";
 preguntaids[21] = 10545


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[22]= "23)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[22]= new Array();
 choices[22][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[22][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[22][2] = "Las Inspecciones Generales de los Servicios";
 choices[22][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[22] = 1;
 units[22] = ['75'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 774. AGE A1 2015";
 preguntaids[22] = 774


//  Id pregunta: 3175 Año de creación de pregunta: 2002
 questions[23]= "24)  Los servicios que ofrece el protocolo SET (Secure Electronico Transaction) son:";
 choices[23]= new Array();
 choices[23][0] = "Autenticaci&oacute;n, disponibilidad, integridad y gesti&oacute;n de pago";
 choices[23][1] = "Autenticaci&oacute;n, confidencialidad, integridad y gesti&oacute;n de pago";
 choices[23][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n y gesti&oacute;n de pago";
 choices[23][3] = "Autenticaci&oacute;n, integridad, disponibilidad y confidencialidad";
 answers[23] = 1;
 units[23] = ['75'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3175. ";
 preguntaids[23] = 3175


//  Id pregunta: 10256 Año de creación de pregunta: 2015
 questions[24]= "25)  Se&ntilde;ale la respuesta FALSA sobre 3D-Secure";
 choices[24]= new Array();
 choices[24][0] = "Es un protocolo basado en XML";
 choices[24][1] = "Se utiliza para asegurar el pago con tarjeta en Internet";
 choices[24][2] = "Es susceptible de ataques &quot;man-in-the-middle&quot;";
 choices[24][3] = "Todas son correctas";
 answers[24] = 3;
 units[24] = ['75'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10256. ";
 preguntaids[24] = 10256


//  Id pregunta: 6418 Año de creación de pregunta: 2003
 questions[25]= "26)  Qu&eacute; formato se emplea para la emision de facturas electr&oacute;nicas por parte de la AGE?";
 choices[25]= new Array();
 choices[25][0] = "XBRL";
 choices[25][1] = "ebXML";
 choices[25][2] = "UBL";
 choices[25][3] = "Facturae";
 answers[25] = 3;
 units[25] = ['75'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6418. ";
 preguntaids[25] = 6418


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[26]= new Array();
 choices[26][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[26][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[26][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[26][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[26] = 0;
 units[26] = ['75'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 773. AGE A1 2015";
 preguntaids[26] = 773


//  Id pregunta: 10947 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l es el formato y la &uacute;ltima versi&oacute;n utillizada para las facturas electr&oacute;nicas a fecha de diciembre de 2015?";
 choices[27]= new Array();
 choices[27][0] = "businessae";
 choices[27][1] = "ubl v2.3";
 choices[27][2] = "facturae v3.1.1";
 choices[27][3] = "Facturae v.3.2.1";
 answers[27] = 3;
 units[27] = ['75'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10947. ";
 preguntaids[27] = 10947


//  Id pregunta: 7776 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l NO es un formato espec&iacute;fico de factura electr&oacute;nica?";
 choices[28]= new Array();
 choices[28][0] = "UBL.";
 choices[28][1] = "EDI.";
 choices[28][2] = "FacturaDTD.";
 choices[28][3] = "CCI-AEAT.";
 answers[28] = 2;
 units[28] = ['75'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7776. ";
 preguntaids[28] = 7776


//  Id pregunta: 10340 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de pago?";
 choices[29]= new Array();
 choices[29][0] = "SET";
 choices[29][1] = "Paypal";
 choices[29][2] = "3-D Secure";
 choices[29][3] = "Mastercard True Payment Protocol";
 answers[29] = 3;
 units[29] = ['75'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10340. ";
 preguntaids[29] = 10340


//  Id pregunta: 3445 Año de creación de pregunta: 2006
 questions[30]= "31)  &iquest;A qu&eacute; hacen referencia las siglas NRC en un sistema de pasarela de pagos?";
 choices[30]= new Array();
 choices[30][0] = "N&uacute;mero de Registro de Control";
 choices[30][1] = "N&uacute;mero de Referencia de Control";
 choices[30][2] = "N&uacute;mero de Referencia Completo";
 choices[30][3] = "N&uacute;mero de Registro Completo";
 answers[30] = 2;
 units[30] = ['75'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3445. ";
 preguntaids[30] = 3445


//  Id pregunta: 2550 Año de creación de pregunta: 2002
 questions[31]= "32)  En telecomunicaciones, EFT son las siglas de:";
 choices[31]= new Array();
 choices[31][0] = "Enhanced Fiber Transmission, Transmisi&oacute;n mejorada por fibra &oacute;ptica";
 choices[31][1] = "Electronic Funds Transfer, Transferencia electr&oacute;nica de fondos";
 choices[31][2] = "Enhanced File Transfer, Transmisi&oacute;n mejorada de ficheros";
 choices[31][3] = "Electronic Forms Transfer, Transferencia electr&oacute;nica de formularios";
 answers[31] = 1;
 units[31] = ['75'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2550. ";
 preguntaids[31] = 2550


//  Id pregunta: 8471 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae?";
 choices[32]= new Array();
 choices[32][0] = "XMLDSig ENVELOPED";
 choices[32][1] = "XMLDSig ENVELOPING";
 choices[32][2] = "PADES-LTV";
 choices[32][3] = "PADES-EPES";
 answers[32] = 0;
 units[32] = ['75'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8471. ";
 preguntaids[32] = 8471


//  Id pregunta: 3446 Año de creación de pregunta: 2006
 questions[33]= "34)  Se&ntilde;ale la correcta:";
 choices[33]= new Array();
 choices[33][0] = "El protocolo de seguridad en comercio electr&oacute;nico 3D Secure es utilizado por Visa y MasterCard";
 choices[33][1] = "Visa utiliza el protocolo Verified by Visa";
 choices[33][2] = "MasterCard Secure Code es el protocolo utilizado por MasterCard";
 choices[33][3] = "Todas las anteriores";
 answers[33] = 3;
 units[33] = ['75'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3446. ";
 preguntaids[33] = 3446


//  Id pregunta: 10245 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Cu&aacute;l es una plataforma electr&oacute;nica de contrataci&oacute;n que permite la contrataci&oacute;n de todos los valores en circulaci&oacute;n del Tesoro P&uacute;blico?";
 choices[34]= new Array();
 choices[34][0] = "SEND";
 choices[34][1] = "FACTURAE";
 choices[34][2] = "COMPRAE";
 choices[34][3] = "TESORO-E";
 answers[34] = 0;
 units[34] = ['75'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 10245. ";
 preguntaids[34] = 10245


//  Id pregunta: 10258 Año de creación de pregunta: 2015
 questions[35]= "36)  Respecto a la factura electr&oacute;nica:";
 choices[35]= new Array();
 choices[35][0] = "S&oacute;lo es obligatoria en el &aacute;mbito de la AGE";
 choices[35][1] = "Reglamentariamente pueden excluirse las de importe inferior a 5000&euro;";
 choices[35][2] = "No est&aacute;n obligadas las agrupaciones de inter&eacute;s econ&oacute;mico europeas";
 choices[35][3] = "Todas son correctas";
 answers[35] = 1;
 units[35] = ['75'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10258. ";
 preguntaids[35] = 10258


//  Id pregunta: 8622 Año de creación de pregunta: 2013
 questions[36]= "37)  La norma que regula las obligaciones de facturaci&oacute;n es:";
 choices[36]= new Array();
 choices[36][0] = "Orden PRE/2971/2007";
 choices[36][1] = "Real Decreto 1496/2003";
 choices[36][2] = "Real Decreto 1619/2012";
 choices[36][3] = "Real Decreto 1783/2012";
 answers[36] = 2;
 units[36] = ['75'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8622. ";
 preguntaids[36] = 8622


//  Id pregunta: 8074 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes normativas no regula la factura electr&oacute;nica?";
 choices[37]= new Array();
 choices[37][0] = "Orden EHA/962/2007";
 choices[37][1] = "Orden PRE/2971/2007";
 choices[37][2] = "Ley 30/2007";
 choices[37][3] = "Ley 59/2003";
 answers[37] = 3;
 units[37] = ['75'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8074. ";
 preguntaids[37] = 8074


//  Id pregunta: 6081 Año de creación de pregunta: 2003
 questions[38]= "39)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?:";
 choices[38]= new Array();
 choices[38][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;arcampa&ntilde;as de marketing directo on-line";
 choices[38][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas";
 choices[38][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica";
 choices[38][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un catalogo on-line de los productosdisponibles para la venta";
 answers[38] = 0;
 units[38] = ['75'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6081. Examen TIC A1 MAP 2007";
 preguntaids[38] = 6081


//  Id pregunta: 3309 Año de creación de pregunta: 2004
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes protocolos se puede considerar como menos seguro para la realizaci&oacute;n de una transacci&oacute;n de comercio electr&oacute;nico?";
 choices[39]= new Array();
 choices[39][0] = "SET";
 choices[39][1] = "SSL";
 choices[39][2] = "3D-Secure";
 choices[39][3] = "SPA/UCAF";
 answers[39] = 1;
 units[39] = ['75'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3309. ";
 preguntaids[39] = 3309


//  Id pregunta: 10189 Año de creación de pregunta: 2015
 questions[40]= "41)  En relaci&oacute;n con el Punto General de Entrada de Facturas Electr&oacute;nicas de la Administraci&oacute;n General del Estado (FACe), se&ntilde;ale la respuesta correcta:";
 choices[40]= new Array();
 choices[40][0] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n utilizar FACe, en todos los casos.";
 choices[40][1] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas e interoperar con el FACe.";
 choices[40][2] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas, sin necesidad de interoperar con FACe.";
 choices[40][3] = "Las Comunidades Aut&oacute;nomas y Entidades Locales podr&aacute;n crear su propio punto general de entrada de facturas electr&oacute;nicas, previa justificaci&oacute;n de su no adhesi&oacute;n a FACe en t&eacute;rminos de eficiencia, y con anterioridad a la realizaci&oacute;n de cualquier inversi&oacute;n al respecto.";
 answers[40] = 3;
 units[40] = ['75'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 10189. Examen TIC A1 2014";
 preguntaids[40] = 10189


