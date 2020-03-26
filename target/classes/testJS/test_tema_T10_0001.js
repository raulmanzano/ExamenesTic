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
//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[0]= "1)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[0]= new Array();
 choices[0][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[0][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[0][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[0][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[0] = 3;
 units[0] = ['10'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[0] = 9037


//  Id pregunta: 9035 Año de creación de pregunta: 2014
 questions[1]= "2)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[1]= new Array();
 choices[1][0] = "Jurados de concursos";
 choices[1][1] = "Mesas de contrataci&oacute;n";
 choices[1][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = 2;
 units[1] = ['10'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 9035. Art. 320, Art. 323 RD Legislativo 3/2011";
 preguntaids[1] = 9035


//  Id pregunta: 10815 Año de creación de pregunta: 2015
 questions[2]= "3)  Seg&uacute;n la Ley 25/2013:";
 choices[2]= new Array();
 choices[2][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[2][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[2][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[2][3] = "Todas las anteriores son correctas";
 answers[2] = 3;
 units[2] = ['10'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 10815. ";
 preguntaids[2] = 10815


//  Id pregunta: 1977 Año de creación de pregunta: 2016
 questions[3]= "4)  En relaci&oacute;n a los procedimientos de adjudicaci&oacute;n previstos en la Ley de Contratos del Sector P&uacute;blico, en el procedimiento restringido:";
 choices[3]= new Array();
 choices[3][0] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, estando prohibida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los solicitantes o candidatos.";
 choices[3][1] = "La adjudicaci&oacute;n recaer&aacute; en el licitador justificadamente elegido por el &oacute;rgano de contrataci&oacute;n, tras efectuar consultas con diversos candidatos y negociar las condiciones del contrato con uno o varios de ellos.";
 choices[3][2] = "Todo empresario interesado podr&aacute; presentar una proposici&oacute;n, quedando excluida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los licitadores.";
 choices[3][3] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, pudi&eacute;ndose negociar las condiciones del contrato con los mismos.";
 answers[3] = 0;
 units[3] = ['10'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 1977. ";
 preguntaids[3] = 1977


//  Id pregunta: 1976 Año de creación de pregunta: 2016
 questions[4]= "5)  Podr&aacute;n ser objeto de tramitaci&oacute;n urgente regulada en el art. 96 de la Ley de Contratos del Sector P&uacute;blico:";
 choices[4]= new Array();
 choices[4][0] = "Los contratos cuya celebraci&oacute;n responda a una necesidad inaplazable o cuya adjudicaci&oacute;n sea preciso acelerar por razones de inter&eacute;s p&uacute;blico, previa declaraci&oacute;n de urgencia hecha por el &oacute;rgano de contrataci&oacute;n, debidamente motivada.";
 choices[4][1] = "Los contratos en los que la Administraci&oacute;n tenga que actuar de manera inmediata a causa de acontecimientos catastr6ficos, de situaciones que supongan grave peligro o de necesidades que afectan a la defensa nacional.";
 choices[4][2] = "Los contratos de obras sujetos a regulaci&oacute;n armonizada.";
 choices[4][3] = "Ninguna de las respuestas anteriores es correcta,";
 answers[4] = 0;
 units[4] = ['10'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 1976. ";
 preguntaids[4] = 1976


//  Id pregunta: 10158 Año de creación de pregunta: 2015
 questions[5]= "6)  Respecto al formato de factura electr&oacute;nica Facturae 3.2.x, se&ntilde;ale la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "Es de tipo PDF-A, para facilitar su impresi&oacute;n.";
 choices[5][1] = "Es un formato certificado con la Norma SICRES 3.0, para la compatibilidad e interconexi&oacute;n de los Registros Contables de Facturas.";
 choices[5][2] = "Es un formato no estructurado compuesto por dos bloques obligatorios y cuatro opcionales.";
 choices[5][3] = "Incluye firma Electr&oacute;nica en XML Advanced Electronic Signature (XADES)";
 answers[5] = 3;
 units[5] = ['10'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 10158. Examen TIC A1 2014";
 preguntaids[5] = 10158


//  Id pregunta: 9038 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[6]= new Array();
 choices[6][0] = "Tribunal Central de Recursos Especiales";
 choices[6][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[6][2] = "Tribunal Administrativo Tributario";
 choices[6][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[6] = 1;
 units[6] = ['10'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 9038. Adscrito al MINHAP";
 preguntaids[6] = 9038


//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[7]= "8)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[7]= new Array();
 choices[7][0] = "Reponen";
 choices[7][1] = "Reajustan";
 choices[7][2] = "Devuelven o cancelan";
 choices[7][3] = "Todas las anteriores";
 answers[7] = 3;
 units[7] = ['10'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[7] = 9134


//  Id pregunta: 9133 Año de creación de pregunta: 2014
 questions[8]= "9)  La garant&iacute;a global, seg&uacute;n el RD Legislativo 3/2011:";
 choices[8]= new Array();
 choices[8][0] = "No podr&aacute; superar el 10% del importe de adjudicaci&oacute;n del contrato.";
 choices[8][1] = "Es obligatoria.";
 choices[8][2] = "Se deposita s&oacute;lo una vez y sirve para varias contrataciones.";
 choices[8][3] = "No existe.";
 answers[8] = 2;
 units[8] = ['10'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 9133. Art. 98 RD Legislativo 3/2011";
 preguntaids[8] = 9133


//  Id pregunta: 8526 Año de creación de pregunta: 2013
 questions[9]= "10)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[9]= new Array();
 choices[9][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[9][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[9][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = 3;
 units[9] = ['10'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 8526. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";
 preguntaids[9] = 8526


//  Id pregunta: 8525 Año de creación de pregunta: 2012
 questions[10]= "11)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[10]= new Array();
 choices[10][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[10][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[10][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial.";
 choices[10][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[10] = 2;
 units[10] = ['10'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 8525. Art. 40 RD Legislativo 3/2011";
 preguntaids[10] = 8525


//  Id pregunta: 9319 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[11]= new Array();
 choices[11][0] = "Pago mediante cargo en cuenta";
 choices[11][1] = "Pago con tarjeta";
 choices[11][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[11][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[11] = 3;
 units[11] = ['10'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 9319. ";
 preguntaids[11] = 9319


//  Id pregunta: 3056 Año de creación de pregunta: 2002
 questions[12]= "13)  Si comparamos SSL y SET:";
 choices[12]= new Array();
 choices[12][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[12][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[12][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[12][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[12] = 0;
 units[12] = ['10', '75'];
 blocks[12] = ['A2', 'B2'];
 comments[12] = "Id Pregunta: 3056. ";
 preguntaids[12] = 3056


//  Id pregunta: 6419 Año de creación de pregunta: 2003
 questions[13]= "14)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[13]= new Array();
 choices[13][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[13][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[13][2] = "A y B son correctas";
 choices[13][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[13] = 2;
 units[13] = ['10'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 6419. ";
 preguntaids[13] = 6419


//  Id pregunta: 10779 Año de creación de pregunta: 2015
 questions[14]= "15)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[14]= new Array();
 choices[14][0] = "10 d&iacute;as h&aacute;biles";
 choices[14][1] = "15 d&iacute;as h&aacute;biles";
 choices[14][2] = "15 d&iacute;as naturales";
 choices[14][3] = "1 mes";
 answers[14] = 3;
 units[14] = ['10'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 10779. ";
 preguntaids[14] = 10779


//  Id pregunta: 9320 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[15]= new Array();
 choices[15][0] = "Ley 11/2007";
 choices[15][1] = "Real Decreto 1619/2012";
 choices[15][2] = "Ley 25/2013";
 choices[15][3] = "Real Decreto Legislativo 3/2011";
 answers[15] = 0;
 units[15] = ['10'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 9320. ";
 preguntaids[15] = 9320


//  Id pregunta: 1975 Año de creación de pregunta: 2016
 questions[16]= "17)  Son causas de nulidad de los contratos de las Administraciones P&uacute;blicas:";
 choices[16]= new Array();
 choices[16][0] = "La invalidez de alguno de sus actos preparatorios por concurrir en los mismos alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[16][1] = "La nulidad de un acto que no sea preparatorio del contrato.";
 choices[16][2] = "La invalidez de la adjudicaci&oacute;n por concurrir en la misma alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[16][3] = "Las respuestas a) y c) son correctas.";
 answers[16] = 3;
 units[16] = ['10'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 1975. ";
 preguntaids[16] = 1975


//  Id pregunta: 9036 Año de creación de pregunta: 2014
 questions[17]= "18)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[17]= new Array();
 choices[17][0] = "Mesas de contrataci&oacute;n";
 choices[17][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[17][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[17][3] = "Todos los anteriores";
 answers[17] = 0;
 units[17] = ['10'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 9036. Art. 324, Art. 325 RD Legislativo 3/2011";
 preguntaids[17] = 9036


//  Id pregunta: 8528 Año de creación de pregunta: 2015
 questions[18]= "19)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[18]= new Array();
 choices[18][0] = "En el perfil del contratante y en el BOE.";
 choices[18][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[18][2] = "En el BOE y en el DOUE";
 choices[18][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[18] = 1;
 units[18] = ['10'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 8528. ";
 preguntaids[18] = 8528


//  Id pregunta: 9318 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[19]= new Array();
 choices[19][0] = "e-Factura, versi&oacute;n 2.3";
 choices[19][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Energia, Turismo y Agenda Digital.";
 choices[19][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[19][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[19] = 2;
 units[19] = ['10'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 9318. ";
 preguntaids[19] = 9318


//  Id pregunta: 10125 Año de creación de pregunta: 2015
 questions[20]= "21)  La facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas es obligatoria para las empresas desde:";
 choices[20]= new Array();
 choices[20][0] = "Enero de 2015.";
 choices[20][1] = "Enero de 2016.";
 choices[20][2] = "Diciembre de 2016.";
 choices[20][3] = "Diciembre de 2015.";
 answers[20] = 0;
 units[20] = ['10'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 10125. Examen TIC A1 2014";
 preguntaids[20] = 10125


//  Id pregunta: 8263 Año de creación de pregunta: 2011
 questions[21]= "22)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[21]= new Array();
 choices[21][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[21][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[21][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[21][3] = "39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas";
 answers[21] = 1;
 units[21] = ['10'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 8263. Examen TIC A2 2010 interna";
 preguntaids[21] = 8263


//  Id pregunta: 9033 Año de creación de pregunta: 2014
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[22]= new Array();
 choices[22][0] = "a) Publicidad y transparencia";
 choices[22][1] = "b) Salvaguarda de la libre competencia";
 choices[22][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[22][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[22] = 3;
 units[22] = ['10'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 9033. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";
 preguntaids[22] = 9033


//  Id pregunta: 3050 Año de creación de pregunta: 2002
 questions[23]= "24)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[23]= new Array();
 choices[23][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[23][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[23][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[23][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[23] = 2;
 units[23] = ['10', '75'];
 blocks[23] = ['A2', 'B2'];
 comments[23] = "Id Pregunta: 3050. ";
 preguntaids[23] = 3050


