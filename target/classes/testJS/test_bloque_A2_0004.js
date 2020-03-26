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
//  Id pregunta: 9898 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Qu&eacute; Ley establece el Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas?";
 choices[0]= new Array();
 choices[0][0] = "Ley 40/2015.";
 choices[0][1] = "Ley 40/2014.";
 choices[0][2] = "Ley 39/2015.";
 choices[0][3] = "Ley 41/2015.";
 answers[0] = 2;
 units[0] = ['7', '19'];
 blocks[0] = ['A2', 'A4'];
 comments[0] = "Id Pregunta: 9898. ";
 preguntaids[0] = 9898


//  Id pregunta: 9036 Año de creación de pregunta: 2014
 questions[1]= "2)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[1]= new Array();
 choices[1][0] = "Mesas de contrataci&oacute;n";
 choices[1][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[1][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[1][3] = "Todos los anteriores";
 answers[1] = 0;
 units[1] = ['10'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 9036. Art. 324, Art. 325 RD Legislativo 3/2011";
 preguntaids[1] = 9036


//  Id pregunta: 9454 Año de creación de pregunta: 2014
 questions[2]= "3)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[2]= new Array();
 choices[2][0] = "se crea en el RD 1671/2009 (art. 15)";
 choices[2][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[2][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[2][3] = "Todas las anteriores son ciertas";
 answers[2] = 3;
 units[2] = ['7'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 9454. ";
 preguntaids[2] = 9454


//  Id pregunta: 9887 Año de creación de pregunta: 2015
 questions[3]= "4)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[3]= new Array();
 choices[3][0] = "Personas jur&iacute;dicas.";
 choices[3][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[3][2] = "Notarios y registradores.";
 choices[3][3] = "Todas las anteriores.";
 answers[3] = 3;
 units[3] = ['7', '19'];
 blocks[3] = ['A2', 'A4'];
 comments[3] = "Id Pregunta: 9887. ";
 preguntaids[3] = 9887


//  Id pregunta: 7116 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[4]= new Array();
 choices[4][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[4][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[4][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[4][3] = "En dos diarios de tirada nacional";
 answers[4] = 2;
 units[4] = ['7'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 7116. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[4] = 7116


//  Id pregunta: 9179 Año de creación de pregunta: 2014
 questions[5]= "6)  De las siguientes opciones se&ntilde;alar cu&aacute;l forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:";
 choices[5]= new Array();
 choices[5][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[5][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[5][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica.";
 choices[5][3] = "Carta de servicios electr&oacute;nicos.";
 answers[5] = 1;
 units[5] = ['7'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 9179. Examen TIC A2 2013";
 preguntaids[5] = 9179


//  Id pregunta: 7122 Año de creación de pregunta: 2010
 questions[6]= "7)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante...";
 choices[6]= new Array();
 choices[6][0] = "Orden del Ministerio de Presidencia";
 choices[6][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[6][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[6][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[6] = 3;
 units[6] = ['7'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 7122. Art&iacute;culo 19 RD 1671/2009";
 preguntaids[6] = 7122


//  Id pregunta: 9889 Año de creación de pregunta: 2015
 questions[7]= "8)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[7]= new Array();
 choices[7][0] = "T&iacute;tulo I";
 choices[7][1] = "T&iacute;tulo II";
 choices[7][2] = "T&iacute;tulo III";
 choices[7][3] = "T&iacute;tulo IV";
 answers[7] = 1;
 units[7] = ['7', '19'];
 blocks[7] = ['A2', 'A4'];
 comments[7] = "Id Pregunta: 9889. ";
 preguntaids[7] = 9889


//  Id pregunta: 9882 Año de creación de pregunta: 2015
 questions[8]= "9)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas deroga expresamente:";
 choices[8]= new Array();
 choices[8][0] = "La Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[8][1] = "La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos.";
 choices[8][2] = "Ambas";
 choices[8][3] = "Ninguna de las dos Leyes se&ntilde;aladas.";
 answers[8] = 2;
 units[8] = ['7', '19'];
 blocks[8] = ['A2', 'A4'];
 comments[8] = "Id Pregunta: 9882. ";
 preguntaids[8] = 9882


//  Id pregunta: 9318 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[9]= new Array();
 choices[9][0] = "e-Factura, versi&oacute;n 2.3";
 choices[9][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Energia, Turismo y Agenda Digital.";
 choices[9][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[9][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[9] = 2;
 units[9] = ['10'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 9318. ";
 preguntaids[9] = 9318


//  Id pregunta: 9892 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n el Art&iacute;culo 14 de la Ley 39/2015. Para las personas f&iacute;sicas, &iquest;qui&eacute;n elige si la relaci&oacute;n se va a establecer a trav&eacute;s de medios electr&oacute;nicos?";
 choices[10]= new Array();
 choices[10][0] = "La Administraci&oacute;n.";
 choices[10][1] = "El ciudadano en todo caso.";
 choices[10][2] = "Habitualmente el ciudadano.";
 choices[10][3] = "Siempre se realiza a trav&eacute;s de medios electr&oacute;nicos.";
 answers[10] = 2;
 units[10] = ['7', '19'];
 blocks[10] = ['A2', 'A4'];
 comments[10] = "Id Pregunta: 9892. ";
 preguntaids[10] = 9892


//  Id pregunta: 8269 Año de creación de pregunta: 2011
 questions[11]= "12)  Dentro del contexto que marca la Ley 39/2015, un expediente electr&oacute;nico es:";
 choices[11]= new Array();
 choices[11][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[11][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[11][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el tipo de informaci&oacute;n que contengan";
 choices[11][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[11] = 2;
 units[11] = ['7'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 8269. Examen TIC A2 2010 interna";
 preguntaids[11] = 8269


//  Id pregunta: 8528 Año de creación de pregunta: 2015
 questions[12]= "13)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[12]= new Array();
 choices[12][0] = "En el perfil del contratante y en el BOE.";
 choices[12][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[12][2] = "En el BOE y en el DOUE";
 choices[12][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[12] = 1;
 units[12] = ['10'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 8528. ";
 preguntaids[12] = 8528


//  Id pregunta: 9901 Año de creación de pregunta: 2015
 questions[13]= "14)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[13]= new Array();
 choices[13][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[13][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[13][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[13][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local, Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[13] = 2;
 units[13] = ['7', '19'];
 blocks[13] = ['A2', 'A4'];
 comments[13] = "Id Pregunta: 9901. ";
 preguntaids[13] = 9901


//  Id pregunta: 7696 Año de creación de pregunta: 2010
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015, con respecto a las notificaciones telem&aacute;ticas, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado, se entender&aacute; rechazada desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido en un plazo de:";
 choices[14]= new Array();
 choices[14][0] = "10 d&iacute;as naturales.";
 choices[14][1] = "10 d&iacute;as h&aacute;biles.";
 choices[14][2] = "20 d&iacute;as naturales.";
 choices[14][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido.";
 answers[14] = 0;
 units[14] = ['7'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 7696. Map 2007";
 preguntaids[14] = 7696


//  Id pregunta: 9895 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[15]= new Array();
 choices[15][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[15][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[15][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y desistir de acciones.";
 choices[15][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[15] = 1;
 units[15] = ['7', '19'];
 blocks[15] = ['A2', 'A4'];
 comments[15] = "Id Pregunta: 9895. ";
 preguntaids[15] = 9895


//  Id pregunta: 9319 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[16]= new Array();
 choices[16][0] = "Pago mediante cargo en cuenta";
 choices[16][1] = "Pago con tarjeta";
 choices[16][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[16][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[16] = 3;
 units[16] = ['10'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 9319. ";
 preguntaids[16] = 9319


//  Id pregunta: 9033 Año de creación de pregunta: 2014
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[17]= new Array();
 choices[17][0] = "a) Publicidad y transparencia";
 choices[17][1] = "b) Salvaguarda de la libre competencia";
 choices[17][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[17][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[17] = 3;
 units[17] = ['10'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 9033. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";
 preguntaids[17] = 9033


//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[18]= new Array();
 choices[18][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[18][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[18][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[18][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[18] = 3;
 units[18] = ['10'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[18] = 9037


//  Id pregunta: 9900 Año de creación de pregunta: 2015
 questions[19]= "20)  La Ley 39/2015 impone:";
 choices[19]= new Array();
 choices[19][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[19][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[19][2] = "Ambas";
 choices[19][3] = "Ninguna de las anteriores.";
 answers[19] = 0;
 units[19] = ['7', '19'];
 blocks[19] = ['A2', 'A4'];
 comments[19] = "Id Pregunta: 9900. ";
 preguntaids[19] = 9900


//  Id pregunta: 7705 Año de creación de pregunta: 2010
 questions[20]= "21)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros en d&iacute;as inh&aacute;biles, seg&uacute;n la Ley 39/2015:";
 choices[20]= new Array();
 choices[20][0] = "Los registros no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles.";
 choices[20][1] = "La presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[20][2] = "La presentaci&oacute;n de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior.";
 choices[20][3] = "No se permitir&aacute; la presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente la entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro no se entender&aacute; efectuada.";
 answers[20] = 1;
 units[20] = ['7'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 7705. Map 2007";
 preguntaids[20] = 7705


//  Id pregunta: 7128 Año de creación de pregunta: 2010
 questions[21]= "22)  La red multicanal de acceso a informaci&oacute;n o tramitaci&oacute;n de los servicios p&uacute;blicos de cualquier administraci&oacute;n, es conocida como:";
 choices[21]= new Array();
 choices[21][0] = "Red 112";
 choices[21][1] = "Red 060";
 choices[21][2] = "Red Conecta";
 choices[21][3] = "Red SARA";
 answers[21] = 1;
 units[21] = ['7'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 7128. ";
 preguntaids[21] = 7128


//  Id pregunta: 9885 Año de creación de pregunta: 2015
 questions[22]= "23)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[22]= new Array();
 choices[22][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[22][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[22][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[22][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[22] = 1;
 units[22] = ['7', '19'];
 blocks[22] = ['A2', 'A4'];
 comments[22] = "Id Pregunta: 9885. ";
 preguntaids[22] = 9885


//  Id pregunta: 7118 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[23]= new Array();
 choices[23][0] = "No";
 choices[23][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[23][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[23][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[23] = 2;
 units[23] = ['7'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 7118. Art&iacute;culo 3.3 RD 1671/2009";
 preguntaids[23] = 7118


//  Id pregunta: 9455 Año de creación de pregunta: 2014
 questions[24]= "25)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[24]= new Array();
 choices[24][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[24][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[24][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[24][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[24] = 1;
 units[24] = ['7'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 9455. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[24] = 9455


//  Id pregunta: 9883 Año de creación de pregunta: 2015
 questions[25]= "26)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[25]= new Array();
 choices[25][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[25][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[25][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[25][3] = "Ninguna de las anteriores.";
 answers[25] = 3;
 units[25] = ['7', '19'];
 blocks[25] = ['A2', 'A4'];
 comments[25] = "Id Pregunta: 9883. ";
 preguntaids[25] = 9883


//  Id pregunta: 9038 Año de creación de pregunta: 2014
 questions[26]= "27)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[26]= new Array();
 choices[26][0] = "Tribunal Central de Recursos Especiales";
 choices[26][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[26][2] = "Tribunal Administrativo Tributario";
 choices[26][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[26] = 1;
 units[26] = ['10'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 9038. Adscrito al MINHAP";
 preguntaids[26] = 9038


//  Id pregunta: 9897 Año de creación de pregunta: 2015
 questions[27]= "28)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[27]= new Array();
 choices[27][0] = "Enero de 2013.";
 choices[27][1] = "Junio de 2013.";
 choices[27][2] = "Diciembre de 2013.";
 choices[27][3] = "Enero de 2014.";
 answers[27] = 1;
 units[27] = ['7', '19'];
 blocks[27] = ['A2', 'A4'];
 comments[27] = "Id Pregunta: 9897. ";
 preguntaids[27] = 9897


//  Id pregunta: 9456 Año de creación de pregunta: 2014
 questions[28]= "29)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[28]= new Array();
 choices[28][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[28][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[28][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[28][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[28] = 1;
 units[28] = ['7'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 9456. ";
 preguntaids[28] = 9456


//  Id pregunta: 9791 Año de creación de pregunta: 2015
 questions[29]= "30)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[29]= new Array();
 choices[29][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[29][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[29][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[29][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[29] = 3;
 units[29] = ['7', '77'];
 blocks[29] = ['A2', 'B2'];
 comments[29] = "Id Pregunta: 9791. Art&iacute;culo 18, RD 1671/2009.";
 preguntaids[29] = 9791


//  Id pregunta: 9896 Año de creación de pregunta: 2015
 questions[30]= "31)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[30]= new Array();
 choices[30][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[30][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[30][2] = "Ambas.";
 choices[30][3] = "Ninguna de las anteriores.";
 answers[30] = 2;
 units[30] = ['7', '19'];
 blocks[30] = ['A2', 'A4'];
 comments[30] = "Id Pregunta: 9896. ";
 preguntaids[30] = 9896


//  Id pregunta: 7119 Año de creación de pregunta: 2010
 questions[31]= "32)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[31][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[31][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[31][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[31] = 2;
 units[31] = ['7'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 7119. Art&iacute;culo 4 RD 1671/2009";
 preguntaids[31] = 7119


//  Id pregunta: 9035 Año de creación de pregunta: 2014
 questions[32]= "33)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[32]= new Array();
 choices[32][0] = "Jurados de concursos";
 choices[32][1] = "Mesas de contrataci&oacute;n";
 choices[32][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[32][3] = "Ninguno de los anteriores";
 answers[32] = 2;
 units[32] = ['10'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 9035. Art. 320, Art. 323 RD Legislativo 3/2011";
 preguntaids[32] = 9035


//  Id pregunta: 7755 Año de creación de pregunta: 2010
 questions[33]= "34)  En relaci&oacute;n con las notificaciones electr&oacute;nicas, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[33]= new Array();
 choices[33][0] = "Se practicar&aacute;n mediante comparecencia en la sede electr&oacute;nica de la Administraci&oacute;n u Organismo actuante, a trav&eacute;s de la direcci&oacute;n electr&oacute;nica habilitada &uacute;nica o mediante ambos sistemas";
 choices[33][1] = "Cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado, se entender&aacute; rechazada cuando hayan transcurrido quince d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido.";
 choices[33][2] = "No ser&aacute;n la opci&oacute;n preferente para efectuar las notificaciones, salvo cuando el interesado resulte obligado a recibirlas por esta v&iacute;a.";
 choices[33][3] = "En ning&uacute;n caso se efectuar&aacute;n por medios electr&oacute;nicos las notificaciones que contengan medios de pago a favor de las Administraciones.";
 answers[33] = 0;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 7755. ";
 preguntaids[33] = 7755


//  Id pregunta: 8252 Año de creación de pregunta: 2011
 questions[34]= "35)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[34]= new Array();
 choices[34][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[34][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[34][2] = "Firma electr&oacute;nica avanzada.";
 choices[34][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[34] = 2;
 units[34] = ['7'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 8252. Examen TIC A2 2010 interna";
 preguntaids[34] = 8252


//  Id pregunta: 1979 Año de creación de pregunta: 2016
 questions[35]= "36)  En la presentaci&oacute;n telem&aacute;tica de documentos, una administraci&oacute;n p&uacute;blica deber&aacute; admitir como v&aacute;lida la acreditaci&oacute;n de la identidad del firmante:";
 choices[35]= new Array();
 choices[35][0] = "Siempre que se real ice con el documento nacional de identidad electr&oacute;nico.";
 choices[35][1] = "Siempre que se realice can el documento nacional de identidad electr&oacute;nico y la administraci&oacute;n tenga convenio con la plataforma @firma.";
 choices[35][2] = "Si la firma se ha realizado can un certificado valido independientemente del prestador de servicios de certificaci&oacute;n.";
 choices[35][3] = "Solo si el certificado pertenece a una persona jur&iacute;dica.";
 answers[35] = 0;
 units[35] = ['7'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 1979. ";
 preguntaids[35] = 1979


//  Id pregunta: 1976 Año de creación de pregunta: 2016
 questions[36]= "37)  Podr&aacute;n ser objeto de tramitaci&oacute;n urgente regulada en el art. 96 de la Ley de Contratos del Sector P&uacute;blico:";
 choices[36]= new Array();
 choices[36][0] = "Los contratos cuya celebraci&oacute;n responda a una necesidad inaplazable o cuya adjudicaci&oacute;n sea preciso acelerar por razones de inter&eacute;s p&uacute;blico, previa declaraci&oacute;n de urgencia hecha por el &oacute;rgano de contrataci&oacute;n, debidamente motivada.";
 choices[36][1] = "Los contratos en los que la Administraci&oacute;n tenga que actuar de manera inmediata a causa de acontecimientos catastr6ficos, de situaciones que supongan grave peligro o de necesidades que afectan a la defensa nacional.";
 choices[36][2] = "Los contratos de obras sujetos a regulaci&oacute;n armonizada.";
 choices[36][3] = "Ninguna de las respuestas anteriores es correcta,";
 answers[36] = 0;
 units[36] = ['10'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 1976. ";
 preguntaids[36] = 1976


//  Id pregunta: 9894 Año de creación de pregunta: 2015
 questions[37]= "38)  Seg&uacute;n la Ley 39/2015, &iquest;para cu&aacute;l de estas actuaciones no es necesar&iacute;a la firma electr&oacute;nica?";
 choices[37]= new Array();
 choices[37][0] = "Iniciar un procedimiento.";
 choices[37][1] = "Interponer un recurso.";
 choices[37][2] = "Desistir de acciones.";
 choices[37][3] = "Renunciar a derechos.";
 answers[37] = 0;
 units[37] = ['7', '19'];
 blocks[37] = ['A2', 'A4'];
 comments[37] = "Id Pregunta: 9894. ";
 preguntaids[37] = 9894


//  Id pregunta: 9886 Año de creación de pregunta: 2015
 questions[38]= "39)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[38]= new Array();
 choices[38][0] = "Personas f&iacute;sicas.";
 choices[38][1] = "Personas jur&iacute;dicas.";
 choices[38][2] = "Personas f&iacute;sicas y jur&iacute;dicas.";
 choices[38][3] = "Ninguna de las anteriores.";
 answers[38] = 1;
 units[38] = ['7', '19'];
 blocks[38] = ['A2', 'A4'];
 comments[38] = "Id Pregunta: 9886. ";
 preguntaids[38] = 9886


//  Id pregunta: 9902 Año de creación de pregunta: 2015
 questions[39]= "40)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[39]= new Array();
 choices[39][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[39][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[39][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[39][3] = "Todas las anteriores.";
 answers[39] = 3;
 units[39] = ['7', '19'];
 blocks[39] = ['A2', 'A4'];
 comments[39] = "Id Pregunta: 9902. ";
 preguntaids[39] = 9902


//  Id pregunta: 9890 Año de creación de pregunta: 2015
 questions[40]= "41)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[40]= new Array();
 choices[40][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[40][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[40][2] = "Ambas";
 choices[40][3] = "Ninguna de las anteriores.";
 answers[40] = 0;
 units[40] = ['7', '19'];
 blocks[40] = ['A2', 'A4'];
 comments[40] = "Id Pregunta: 9890. ";
 preguntaids[40] = 9890


//  Id pregunta: 8267 Año de creación de pregunta: 2011
 questions[41]= "42)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[41]= new Array();
 choices[41][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[41][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[41][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[41][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[41] = 0;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 8267. Examen TIC A2 2010 interna";
 preguntaids[41] = 8267


//  Id pregunta: 8526 Año de creación de pregunta: 2013
 questions[42]= "43)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[42]= new Array();
 choices[42][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[42][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[42][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 3;
 units[42] = ['10'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 8526. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";
 preguntaids[42] = 8526


//  Id pregunta: 8263 Año de creación de pregunta: 2011
 questions[43]= "44)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[43]= new Array();
 choices[43][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[43][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[43][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[43][3] = "39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas";
 answers[43] = 1;
 units[43] = ['10'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 8263. Examen TIC A2 2010 interna";
 preguntaids[43] = 8263


//  Id pregunta: 6419 Año de creación de pregunta: 2003
 questions[44]= "45)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[44]= new Array();
 choices[44][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[44][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[44][2] = "A y B son correctas";
 choices[44][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[44] = 2;
 units[44] = ['10'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 6419. ";
 preguntaids[44] = 6419


//  Id pregunta: 1977 Año de creación de pregunta: 2016
 questions[45]= "46)  En relaci&oacute;n a los procedimientos de adjudicaci&oacute;n previstos en la Ley de Contratos del Sector P&uacute;blico, en el procedimiento restringido:";
 choices[45]= new Array();
 choices[45][0] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, estando prohibida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los solicitantes o candidatos.";
 choices[45][1] = "La adjudicaci&oacute;n recaer&aacute; en el licitador justificadamente elegido por el &oacute;rgano de contrataci&oacute;n, tras efectuar consultas con diversos candidatos y negociar las condiciones del contrato con uno o varios de ellos.";
 choices[45][2] = "Todo empresario interesado podr&aacute; presentar una proposici&oacute;n, quedando excluida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los licitadores.";
 choices[45][3] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, pudi&eacute;ndose negociar las condiciones del contrato con los mismos.";
 answers[45] = 0;
 units[45] = ['10'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 1977. ";
 preguntaids[45] = 1977


//  Id pregunta: 7115 Año de creación de pregunta: 2010
 questions[46]= "47)  Las disposiciones del RD 1671/2009 ser&aacute;n de aplicaci&oacute;n a:";
 choices[46]= new Array();
 choices[46][0] = "Al sector p&uacute;blico en su conjunto.";
 choices[46][1] = "A todas las Administraciones P&uacute;blicas , as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de las mismas.";
 choices[46][2] = "A las relaciones entre las Administraciones P&uacute;blicas.";
 choices[46][3] = "A la actividad de la Administraci&oacute;n General del Estado, as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de la misma.";
 answers[46] = 3;
 units[46] = ['7'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 7115. Art&iacute;culo 1 RD 1671/2009";
 preguntaids[46] = 7115


//  Id pregunta: 9133 Año de creación de pregunta: 2014
 questions[47]= "48)  La garant&iacute;a global, seg&uacute;n el RD Legislativo 3/2011:";
 choices[47]= new Array();
 choices[47][0] = "No podr&aacute; superar el 10% del importe de adjudicaci&oacute;n del contrato.";
 choices[47][1] = "Es obligatoria.";
 choices[47][2] = "Se deposita s&oacute;lo una vez y sirve para varias contrataciones.";
 choices[47][3] = "No existe.";
 answers[47] = 2;
 units[47] = ['10'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 9133. Art. 98 RD Legislativo 3/2011";
 preguntaids[47] = 9133


//  Id pregunta: 8266 Año de creación de pregunta: 2011
 questions[48]= "49)  En el &aacute;mbito de la Administraci&oacute;n General del Estado, &iquest;es posible la notificaci&oacute;n mediante recepci&oacute;n en direcci&oacute;n de correo electr&oacute;nico que los ciudadanos elijan?";
 choices[48]= new Array();
 choices[48][0] = "No est&aacute; previsto para tal fin el uso de una direcci&oacute;n de correo electr&oacute;nico que elijan los ciudadanos, sino s&oacute;lo el uso de la denominada direcci&oacute;n electr&oacute;nica habilitada";
 choices[48][1] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario sendos acuses de salida y recibo, que dejen constancia de su emisi&oacute;n y recepci&oacute;n y que so originen, respectivamente, en el momento del envi&oacute; y de acceso al contenido de la notificaci&oacute;n";
 choices[48][2] = "Si, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuse de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido de la notificaci&oacute;n.";
 choices[48][3] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuso de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido c&iacute;e la notificaci&oacute;n Asimismo, el ciudadano podr&aacute; solicitar un acuse de salida, que deje constancia de su emisi&oacute;n y que se origine en el momento del env&iacute;o de la notificaci&oacute;n";
 answers[48] = 2;
 units[48] = ['7'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 8266. Examen TIC A2 2010 interna";
 preguntaids[48] = 8266


//  Id pregunta: 7121 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[49]= new Array();
 choices[49][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[49][1] = "Unidad administrativa suscriptora del certificado.";
 choices[49][2] = "Fechas de validez del certificado.";
 choices[49][3] = "Ninguna de las anteriores.";
 answers[49] = 1;
 units[49] = ['7'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 7121. Art&iacute;culo 18 RD 1671/2009";
 preguntaids[49] = 7121


//  Id pregunta: 8264 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[50]= new Array();
 choices[50][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[50][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[50][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[50][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[50] = 1;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 8264. Examen TIC A2 2010 interna";
 preguntaids[50] = 8264


//  Id pregunta: 9884 Año de creación de pregunta: 2015
 questions[51]= "52)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor para &quot;las previsiones relativas al registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico&quot; en un plazo de:";
 choices[51]= new Array();
 choices[51][0] = "2 a&ntilde;os despu&eacute;s de su entrada en vigor.";
 choices[51][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n.";
 choices[51][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n.";
 choices[51][3] = "6 meses despu&eacute;s de su publicaci&oacute;n.";
 answers[51] = 0;
 units[51] = ['7', '19'];
 blocks[51] = ['A2', 'A4'];
 comments[51] = "Id Pregunta: 9884. ";
 preguntaids[51] = 9884


//  Id pregunta: 7117 Año de creación de pregunta: 2010
 questions[52]= "53)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[52]= new Array();
 choices[52][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[52][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[52][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[52][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[52] = 1;
 units[52] = ['7'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 7117. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[52] = 7117


//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[53]= "54)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[53]= new Array();
 choices[53][0] = "Reponen";
 choices[53][1] = "Reajustan";
 choices[53][2] = "Devuelven o cancelan";
 choices[53][3] = "Todas las anteriores";
 answers[53] = 3;
 units[53] = ['10'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[53] = 9134


//  Id pregunta: 3056 Año de creación de pregunta: 2002
 questions[54]= "55)  Si comparamos SSL y SET:";
 choices[54]= new Array();
 choices[54][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[54][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[54][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[54][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[54] = 0;
 units[54] = ['10', '75'];
 blocks[54] = ['A2', 'B2'];
 comments[54] = "Id Pregunta: 3056. ";
 preguntaids[54] = 3056


//  Id pregunta: 7124 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[55]= new Array();
 choices[55][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[55][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[55][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[55][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[55] = 2;
 units[55] = ['7'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 7124. Art&iacute;culo 53 RD 1671/2009";
 preguntaids[55] = 7124


//  Id pregunta: 8424 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[56]= new Array();
 choices[56][0] = "Ley 18/2011";
 choices[56][1] = "Ley 39/2015";
 choices[56][2] = "Las dos anteriores";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 1;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 8424. ";
 preguntaids[56] = 8424


//  Id pregunta: 9320 Año de creación de pregunta: 2014
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[57]= new Array();
 choices[57][0] = "Ley 11/2007";
 choices[57][1] = "Real Decreto 1619/2012";
 choices[57][2] = "Ley 25/2013";
 choices[57][3] = "Real Decreto Legislativo 3/2011";
 answers[57] = 0;
 units[57] = ['10'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 9320. ";
 preguntaids[57] = 9320


//  Id pregunta: 9180 Año de creación de pregunta: 2014
 questions[58]= "59)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[58]= new Array();
 choices[58][0] = "Ley ordinaria.";
 choices[58][1] = "Orden Ministerial.";
 choices[58][2] = "Ley org&aacute;nica.";
 choices[58][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[58] = 1;
 units[58] = ['7'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 9180. Examen TIC A2 2013";
 preguntaids[58] = 9180


//  Id pregunta: 3050 Año de creación de pregunta: 2002
 questions[59]= "60)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[59]= new Array();
 choices[59][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[59][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[59][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[59][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[59] = 2;
 units[59] = ['10', '75'];
 blocks[59] = ['A2', 'B2'];
 comments[59] = "Id Pregunta: 3050. ";
 preguntaids[59] = 3050


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[60]= "61)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[60]= new Array();
 choices[60][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[60][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[60][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[60][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[60] = 2;
 units[60] = ['7', '47'];
 blocks[60] = ['A2', 'B1'];
 comments[60] = "Id Pregunta: 9782. ";
 preguntaids[60] = 9782


//  Id pregunta: 9893 Año de creación de pregunta: 2015
 questions[61]= "62)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:";
 choices[61]= new Array();
 choices[61][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[61][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[61][2] = "Ambas";
 choices[61][3] = "Ninguna de las anteriores.";
 answers[61] = 2;
 units[61] = ['7', '19'];
 blocks[61] = ['A2', 'A4'];
 comments[61] = "Id Pregunta: 9893. Art 21, Ley 39/2015";
 preguntaids[61] = 9893


//  Id pregunta: 1978 Año de creación de pregunta: 2016
 questions[62]= "63)  NO es un derecho de los ciudadanos frente a la administraci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Formular alegaciones y aportar documentos en cualquier momento del procedimiento, para que sean tenidos en cuenta por el &oacute;rgano competente al redactar la propuesta de resoluci&oacute;n.";
 choices[62][1] = "Identificar las autoridades y el personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[62][2] = "Conocer, en cualquier momento, el estado de la tramitaci&oacute;n de los procedimientos en los que tengan la condici&oacute;n de interesados.";
 choices[62][3] = "Obtener copia de los documentos contenidos en los procedimientos en los que tengan la condici&oacute;n de interesados.";
 answers[62] = 0;
 units[62] = ['7'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 1978. ";
 preguntaids[62] = 1978


//  Id pregunta: 7129 Año de creación de pregunta: 2010
 questions[63]= "64)  Las Administraciones podr&aacute;n poner a disposici&oacute;n de todos los organismos las aplicaciones que decidan declarar de c&oacute;digo abierto, a trav&eacute;s de el&hellip;";
 choices[63]= new Array();
 choices[63][0] = "Centro de Transferencia de Tecnolog&iacute;a";
 choices[63][1] = "Centro de Compartici&oacute;n de Tecnolog&iacute;a";
 choices[63][2] = "Proyecto Aporta";
 choices[63][3] = "Proyecto Comparte";
 answers[63] = 0;
 units[63] = ['7'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 7129. ";
 preguntaids[63] = 7129


//  Id pregunta: 8525 Año de creación de pregunta: 2012
 questions[64]= "65)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[64]= new Array();
 choices[64][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[64][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[64][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial.";
 choices[64][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[64] = 2;
 units[64] = ['10'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 8525. Art. 40 RD Legislativo 3/2011";
 preguntaids[64] = 8525


//  Id pregunta: 9899 Año de creación de pregunta: 2015
 questions[65]= "66)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[65]= new Array();
 choices[65][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[65][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[65][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[65][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[65] = 0;
 units[65] = ['7', '19'];
 blocks[65] = ['A2', 'A4'];
 comments[65] = "Id Pregunta: 9899. ";
 preguntaids[65] = 9899


//  Id pregunta: 9888 Año de creación de pregunta: 2015
 questions[66]= "67)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[66]= new Array();
 choices[66][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[66][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[66][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[66][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[66] = 1;
 units[66] = ['7', '19'];
 blocks[66] = ['A2', 'A4'];
 comments[66] = "Id Pregunta: 9888. ";
 preguntaids[66] = 9888


//  Id pregunta: 9881 Año de creación de pregunta: 2015
 questions[67]= "68)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[67]= new Array();
 choices[67][0] = "1 de Junio de 2015";
 choices[67][1] = "1 de Julio de 2015";
 choices[67][2] = "2 de Octubre de 2015";
 choices[67][3] = "1 de Noviembre de 2015";
 answers[67] = 2;
 units[67] = ['7', '19'];
 blocks[67] = ['A2', 'A4'];
 comments[67] = "Id Pregunta: 9881. ";
 preguntaids[67] = 9881


//  Id pregunta: 8268 Año de creación de pregunta: 2011
 questions[68]= "69)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[68]= new Array();
 choices[68][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[68][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[68][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[68][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[68] = 1;
 units[68] = ['7'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 8268. Examen TIC A2 2010 interna";
 preguntaids[68] = 8268


//  Id pregunta: 9891 Año de creación de pregunta: 2015
 questions[69]= "70)  Seg&uacute;n la Ley 39/2015 cual de las siguientes opciones no se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[69]= new Array();
 choices[69][0] = "A ser tratados con respeto y deferencia por las autoridades y empleados p&uacute;blicos, que habr&aacute;n de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones.";
 choices[69][1] = "A la obtenci&oacute;n y utilizaci&oacute;n de los medios de identificaci&oacute;n y firma electr&oacute;nica contemplados en esta Ley.";
 choices[69][2] = "A la protecci&oacute;n de datos de car&aacute;cter personal, y en particular a la seguridad y confidencialidad de los datos que figuren en los ficheros, sistemas y aplicaciones de las Administraciones P&uacute;blicas.";
 choices[69][3] = "Archivo y registro del expediente asociado con todo procedimiento administrativo.";
 answers[69] = 3;
 units[69] = ['7', '19'];
 blocks[69] = ['A2', 'A4'];
 comments[69] = "Id Pregunta: 9891. ";
 preguntaids[69] = 9891


//  Id pregunta: 7123 Año de creación de pregunta: 2010
 questions[70]= "71)  En relaci&oacute;n a las copias electr&oacute;nicas de los documentos electr&oacute;nicos realizadas por la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos, se&ntilde;ale la opci&oacute;n incorrecta.";
 choices[70]= new Array();
 choices[70][0] = "En caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, debe incluir su car&aacute;cter de copia entre los metadatos asociados.";
 choices[70][1] = "No se podr&aacute;n generar m&aacute;s copias electr&oacute;nicas aut&eacute;nticas a partir de otras copias electr&oacute;nicas aut&eacute;nticas.";
 choices[70][2] = "Los &oacute;rganos emisores de los documentos administrativos electr&oacute;nicos o receptores de los documentos privados electr&oacute;nicos, o los archivos que reciban los mismos, est&aacute;n obligados a la conservaci&oacute;n de los documentos originales, aunque se hubiere procedido a su copiado.";
 choices[70][3] = "Las copias electr&oacute;nicas generadas que, por ser id&eacute;nticas al documento electr&oacute;nico original no comportan cambio de formato ni de contenido, tendr&aacute;n la eficacia jur&iacute;dica de documento electr&oacute;nico original.";
 answers[70] = 1;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 7123. Art&iacute;culo 43 RD 1671/2009";
 preguntaids[70] = 7123


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[71]= "72)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[71][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[71][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[71][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[71] = 1;
 units[71] = ['7'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 1995. ";
 preguntaids[71] = 1995


//  Id pregunta: 9790 Año de creación de pregunta: 2015
 questions[72]= "73)  No es objetivo de la Ley 39/2015:";
 choices[72]= new Array();
 choices[72][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[72][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[72][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[72][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[72] = 2;
 units[72] = ['7', '47'];
 blocks[72] = ['A2', 'B1'];
 comments[72] = "Id Pregunta: 9790. ";
 preguntaids[72] = 9790


//  Id pregunta: 7120 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;C&uacute;al de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?";
 choices[73]= new Array();
 choices[73][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[73][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[73][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[73][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[73] = 3;
 units[73] = ['7'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 7120. Art&iacute;culo 6 RD 1671/2009";
 preguntaids[73] = 7120


//  Id pregunta: 8265 Año de creación de pregunta: 2011
 questions[74]= "75)  En el contexto de la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, un ciudadano es:";
 choices[74]= new Array();
 choices[74][0] = "Es siempre una persona f&iacute;sica o una persona jur&iacute;dica";
 choices[74][1] = "Siempre es una persona f&iacute;sica, aunque sea representando a una persona jur&iacute;dica.";
 choices[74][2] = "Siempre son personas jur&iacute;dicas, y las personas f&iacute;sicas se entienden como entes sin personalidad.";
 choices[74][3] = "Una persona f&iacute;sica, una persona jur&iacute;dica o incluso, un ente sin personalidad";
 answers[74] = 3;
 units[74] = ['7'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 8265. Examen TIC A2 2010 interna";
 preguntaids[74] = 8265


