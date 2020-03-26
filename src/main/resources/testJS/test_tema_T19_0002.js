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
//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[0]= "1)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[0]= new Array();
 choices[0][0] = "Firma electr&oacute;nica avanzada";
 choices[0][1] = "Firma electr&oacute;nica reconocida";
 choices[0][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = 1;
 units[0] = ['19'];
 blocks[0] = ['A4'];
 comments[0] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[0] = 2483


//  Id pregunta: 3169 Año de creación de pregunta: 2002
 questions[1]= "2)  La Ley de Servicios de la Sociedad de la Informacion y Comercio Electr&oacute;nico se conoce como:";
 choices[1]= new Array();
 choices[1][0] = "30/1992";
 choices[1][1] = "34/2002";
 choices[1][2] = "30/2002";
 choices[1][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[1] = 1;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 3169. ";
 preguntaids[1] = 3169


//  Id pregunta: 5922 Año de creación de pregunta: 2007
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes infracciones NO est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, deservicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[2]= new Array();
 choices[2][0] = "El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por las comunicacionestablecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, prevista en el art&iacute;culo 12 dedicha Ley";
 choices[2][1] = "La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de losse&ntilde;alados en &eacute;l";
 choices[2][2] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente, o su env&iacute;o insistente o sistem&aacute;tico a un mismo destinatario del servicio cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en el art&iacute;culo 21.";
 choices[2][3] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nicoequivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales por los mediosaludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en elart&iacute;culo 21 de dicha Ley";
 answers[2] = 3;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 5922. Ley 34/2002, art&iacute;culo 38 actualizado 38.c por Ley 9/2014";
 preguntaids[2] = 5922


//  Id pregunta: 5888 Año de creación de pregunta: 2007
 questions[3]= "4)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[3]= new Array();
 choices[3][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[3][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[3][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[3][3] = "Todas las anteriores son ciertas";
 answers[3] = 3;
 units[3] = ['19'];
 blocks[3] = ['A4'];
 comments[3] = "Id Pregunta: 5888. Ley 56/2007";
 preguntaids[3] = 5888


//  Id pregunta: 3197 Año de creación de pregunta: 2003
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones pertenece al RD 209/2003 ?";
 choices[4]= new Array();
 choices[4][0] = "Se podr&aacute; utilizar una direcci&oacute;n de correo ordinario para recibir avisos de env&iacute;os la direcci&oacute;n de correo &uacute;nica, no consider&aacute;ndose la notificaci&oacute;n enviada si no se ha recibido ese aviso";
 choices[4][1] = "Si el usuario lo escoge la administraci&oacute;n estar&aacute; obligada a avisar al ciudadano de que tiene una notificaci&oacute;n mediante una mensaje SMS";
 choices[4][2] = "Si el usuario al cabo de 10 d&iacute;as desde que ha recibido la notificaci&oacute;n, no la abre, se pasa a considerar otro tipo de notificaci&oacute;n, con otro plazo para la misma";
 choices[4][3] = "Si el cliente al cabo de 10 desde que ha recibido la notificaci&oacute;n, no la abre, se considera que la notificaci&oacute;n ha sido rechazada";
 answers[4] = 3;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 3197. ";
 preguntaids[4] = 3197


//  Id pregunta: 3170 Año de creación de pregunta: 2002
 questions[5]= "6)  La Ley de Servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Ley 34/2002:";
 choices[5]= new Array();
 choices[5][0] = "Favorece la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica, al asegurar la equivalencia entre los documentos en soporte papel y los documentos electr&oacute;nicos";
 choices[5][1] = "Es una ley pionera, pues se adelant&oacute; en varios meses a la directiva sobre el comercio electr&oacute;nico";
 choices[5][2] = "No incluye previsiones orientadas a hacer efectiva la accesibilidad de las personas con discapacidad a la informaci&oacute;n proporcionada por medios electr&oacute;nicos, remiti&eacute;ndose al desarrollo normativo posterior";
 choices[5][3] = "Prohibe expresamente el env&iacute;o por correo u otras v&iacute;as de comunicaci&oacute;n electr&oacute;nica equivalente de comunicaciones comerciales, para evitar el spamming";
 answers[5] = 0;
 units[5] = ['19'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 3170. ";
 preguntaids[5] = 3170


//  Id pregunta: 6085 Año de creación de pregunta: 2003
 questions[6]= "7)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es undispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[6]= new Array();
 choices[6][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse s&oacute;lo una vez y asegurarrazonablemente su secreto.";
 choices[6][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma ode la propia firma";
 choices[6][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;npor terceros.";
 choices[6][3] = "Que el dispositivo utilizado no alteren los datos o el documento que deba firmarse ni impidan que &eacute;ste semuestre al firmante antes del proceso de firma.";
 answers[6] = 1;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 6085. Examen TIC A1 MAP 2007";
 preguntaids[6] = 6085


//  Id pregunta: 6457 Año de creación de pregunta: 2003
 questions[7]= "8)  Respecto a la Ley 56/2007 de Medidas de Impulso de la Sociendad de la Informaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "Se enmarca dentro del Plan 2006-2010 para el desarrollo de la Sociedad de la Informaci&oacute;n y de convergencia con Europa y entre Comunidades Aut&oacute;nomas y Ciudades Aut&oacute;nomas, Plan Avanza.";
 choices[7][1] = "Modifica la Ley 34/2002 de SSI, la ley 59/2003 de FE y la Ley  de Propiedad Intelectual, entre otras";
 choices[7][2] = "Establece que en las relaciones con consumidores y usuarios, la factura electr&oacute;nica tendr&aacute; eficacia ejecutiva.";
 choices[7][3] = "Obliga a las empresas de sectores de especial incidencia a facilitar un medio de interlocuci&oacute;n telem&aacute;tica a los usuarios con certificados reconocidos de firma electr&oacute;nica.";
 answers[7] = 2;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 6457. Art&iacute;culo 2.3: No podr&aacute; tener eficacia ejecutiva";
 preguntaids[7] = 6457


//  Id pregunta: 5426 Año de creación de pregunta: 2007
 questions[8]= "9)  El desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a NO se dirige hacia:";
 choices[8]= new Array();
 choices[8][0] = "Que los ciudadanos puedan elegir el canal de acceso a las AAPP (tel&eacute;fono, Internet, SMSs, TDT...).";
 choices[8][1] = "Que los ciudadanos puedan acceder a los servicios de las AAPP 24 horas al d&iacute;a, 7 d&iacute;as a la semana.";
 choices[8][2] = "Que los tr&aacute;mites por medios electr&oacute;nicos no obtengan la misma validez que los realizados por medios presenciales.";
 choices[8][3] = "Que los ciudadanos no tengan que presentar documentaci&oacute;n que obre en poder de las AAPP.";
 answers[8] = 2;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 5426. ";
 preguntaids[8] = 5426


//  Id pregunta: 6090 Año de creación de pregunta: 2003
 questions[9]= "10)  Seg&uacute;n la ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n dela vigencia de un certificado?:";
 choices[9]= new Array();
 choices[9][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado";
 choices[9][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por &eacute;ste, un terceroautorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica";
 choices[9][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene";
 choices[9][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador deservicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso";
 answers[9] = 3;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 6090. Examen TIC A1 MAP 2007";
 preguntaids[9] = 6090


//  Id pregunta: 6108 Año de creación de pregunta: 2003
 questions[10]= "11)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros telem&aacute;ticos en d&iacute;as inh&aacute;biles, seg&uacute;n el RD209/2003, de 21 de febrero:";
 choices[10]= new Array();
 choices[10][0] = "Los registros telem&aacute;ticos no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles";
 choices[10][1] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 choices[10][2] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior";
 choices[10][3] = "No se permitir&aacute; la entrada de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente laentrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;ticono se entender&aacute; efectuada";
 answers[10] = 1;
 units[10] = ['19'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 6108. Examen TIC A1 MAP 2007";
 preguntaids[10] = 6108


//  Id pregunta: 5082 Año de creación de pregunta: 2002
 questions[11]= "12)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?:";
 choices[11]= new Array();
 choices[11][0] = "No me afecta para nada";
 choices[11][1] = "La LSSI es aplicable";
 choices[11][2] = "S&oacute;lo para la publicidad";
 choices[11][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[11] = 1;
 units[11] = ['19'];
 blocks[11] = ['A4'];
 comments[11] = "Id Pregunta: 5082. ";
 preguntaids[11] = 5082


//  Id pregunta: 6888 Año de creación de pregunta: 2010
 questions[12]= "13)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[12]= new Array();
 choices[12][0] = "Todos.";
 choices[12][1] = "Ninguno.";
 choices[12][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[12][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[12] = 2;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 6888. TIC A 2009";
 preguntaids[12] = 6888


//  Id pregunta: 3198 Año de creación de pregunta: 2003
 questions[13]= "14)  El Real Decreto 209/2003:";
 choices[13]= new Array();
 choices[13][0] = "Modifica la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[13][1] = "Modifica la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[13][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[13][3] = "Todas las anteriores son ciertas";
 answers[13] = 1;
 units[13] = ['19'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 3198. ";
 preguntaids[13] = 3198


//  Id pregunta: 6169 Año de creación de pregunta: 2003
 questions[14]= "15)  Se regir&aacute;n por su normativa espec&iacute;fica, seg&uacute;n la ley 34/2002, las siguientes actividades y servicios de la sociedad de la informaci&oacute;n, excepto:";
 choices[14]= new Array();
 choices[14][0] = "Notarios";
 choices[14][1] = "Registradores";
 choices[14][2] = "Agentes de bolsa";
 choices[14][3] = "Procuradores";
 answers[14] = 2;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 6169. Ley 34/2002, art&iacute;culo 5";
 preguntaids[14] = 6169


//  Id pregunta: 5833 Año de creación de pregunta: 2007
 questions[15]= "16)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[15]= new Array();
 choices[15][0] = "Un estadio social y econ&oacute;mico de desarrollo.";
 choices[15][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar.";
 choices[15][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles.";
 choices[15][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[15] = 2;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 5833. Examen 2006 JCYL";
 preguntaids[15] = 5833


//  Id pregunta: 6458 Año de creación de pregunta: 2003
 questions[16]= "17)  Respecto de la Ley 56/2007, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[16]= new Array();
 choices[16][0] = "Se incluir&aacute;n en los proyectos de infraestructuras de inter&eacute;s general canalizaciones para el despliegue de redes de comunicaciones, as&iacute; como  se preveer&aacute;n las instalaciones para asegurar la cobertura de comunicaciones m&oacute;viles.";
 choices[16][1] = "Se  especifica la creaci&oacute;n de una base de datos sobre servicios de la sociedad de la informaci&oacute;n  de comunicaciones electr&oacute;nicas en Espa&ntilde;a.";
 choices[16][2] = "En la oferta p&uacute;blica de contrataci&oacute;n electr&oacute;nica de transparencia garantizada no es necesario que una vez concluido el proceso la empresa informe a los participantes de la decisi&oacute;n adoptada.";
 choices[16][3] = "Aclara la valoraci&oacute;n de la firma electr&oacute;nica en juicio.";
 answers[16] = 2;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 6458. ";
 preguntaids[16] = 6458


//  Id pregunta: 2587 Año de creación de pregunta: 2009
 questions[17]= "18)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[17]= new Array();
 choices[17][0] = "Salvaguarda del orden p&uacute;blico";
 choices[17][1] = "Salvaguarda del inter&eacute;s general";
 choices[17][2] = "Respeto a la dignidad de la persona";
 choices[17][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[17] = 1;
 units[17] = ['19'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 2587. Ley 34/2002, art&iacute;culo 8";
 preguntaids[17] = 2587


//  Id pregunta: 3178 Año de creación de pregunta: 2002
 questions[18]= "19)  Respecto a la LSSICE:";
 choices[18]= new Array();
 choices[18][0] = "Son prestadores de servicios de la sociedad de la informaci&oacute;n aquellas empresas, organismos o instituciones que presten o promocionen un bien o servicio a t&iacute;tulo oneroso";
 choices[18][1] = "La ley prohibe enviar comunicaciones publicitarias por correo electr&oacute;nico que previamente no hubieran sido solicitadas o autorizadas expresamente por el destinatario";
 choices[18][2] = "El texto legal da plena validez y eficacia a los contratos celebrados por v&iacute;a electr&oacute;nica, a&uacute;n en el caso de que ninguna de las partes tenga la condici&oacute;n de prestador o destinatario de servicios de la sociedad de la informaci&oacute;n";
 choices[18][3] = "Todas las afirmaciones anteriores son correctas";
 answers[18] = 3;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 3178. ";
 preguntaids[18] = 3178


//  Id pregunta: 3471 Año de creación de pregunta: 2006
 questions[19]= "20)  De acuerdo con la normativa relativa sobre firma electr&oacute;nica, se&ntilde;ale la falsa:";
 choices[19]= new Array();
 choices[19][0] = "La prestaci&oacute;n de servicios de certificaci&oacute;n no est&aacute; sujeta a autorizaci&oacute;n previa y se realizar&aacute; en r&eacute;gimen de libre competencia";
 choices[19][1] = "El firmante es una persona que posee el dispositivo de creaci&oacute;n de firma y que act&uacute;a en nombre propio o de una persona f&iacute;sica o jur&iacute;dica a la que representa.";
 choices[19][2] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 4 a&ntilde;os";
 choices[19][3] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 5 a&ntilde;os";
 answers[19] = 2;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 3471. ";
 preguntaids[19] = 3471


//  Id pregunta: 5427 Año de creación de pregunta: 2007
 questions[20]= "21)  Como parte de la legislaci&oacute;n para el impulso de la sociedad de la informaci&oacute;n se incluyen:";
 choices[20]= new Array();
 choices[20][0] = "La Ley 34/ 2002 de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico";
 choices[20][1] = "La Ley 59/2003 de 19 de diciembre de firma electr&oacute;nica";
 choices[20][2] = "La Directiva Comunitaria 2000/31/CE de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[20][3] = "Todas las anteriores";
 answers[20] = 3;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 5427. ";
 preguntaids[20] = 5427


//  Id pregunta: 6276 Año de creación de pregunta: 2003
 questions[21]= "22)  El Marco Europeo de Interoperabilidad 2.0 se construye sobre la base de 12 principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[21]= new Array();
 choices[21][0] = "Multiling&uuml;ismo";
 choices[21][1] = "Seguridad y privacidad";
 choices[21][2] = "Subsidiariedad y proporcionalidad";
 choices[21][3] = "Cooperaci&oacute;n intergubernamental";
 answers[21] = 3;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 6276. ";
 preguntaids[21] = 6276


//  Id pregunta: 3164 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[22]= new Array();
 choices[22][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[22][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[22][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[22][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[22] = 0;
 units[22] = ['19'];
 blocks[22] = ['A4'];
 comments[22] = "Id Pregunta: 3164. Ley 34/2002, art&iacute;culo 21";
 preguntaids[22] = 3164


//  Id pregunta: 2491 Año de creación de pregunta: 2004
 questions[23]= "24)  Seg&uacute;n el RD 209/2003 por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[23]= new Array();
 choices[23][0] = "La AGE pondr&aacute; a disposici&oacute;n del ciudadano un buz&oacute;n de correo electr&oacute;nico para notificaciones";
 choices[23][1] = "Dicho buz&oacute;n ser&aacute; v&aacute;lido para todas las notificaciones de la AGE";
 choices[23][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se lea a su contenido, se iniciar&aacute; el procedimiento administrativo.";
 choices[23][3] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 answers[23] = 3;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 2491. Similar a examen TIC SS A 2003";
 preguntaids[23] = 2491


//  Id pregunta: 2586 Año de creación de pregunta: 2002
 questions[24]= "25)  Seg&uacute;n la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, los contratos celebrados por la v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[24]= new Array();
 choices[24][0] = "El lugar en que est&eacute; establecido el prestador de servicios";
 choices[24][1] = "El lugar que figure en el registro mercantil";
 choices[24][2] = "El lugar en que &eacute;ste tenga su residencia habitual";
 choices[24][3] = "El lugar que figure en la cabecera de la p&aacute;gina";
 answers[24] = 2;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 2586. Ley 34/2002, art&iacute;culo 29";
 preguntaids[24] = 2586


//  Id pregunta: 6646 Año de creación de pregunta: 2009
 questions[25]= "26)  La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica depende de:";
 choices[25]= new Array();
 choices[25][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[25][1] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[25][2] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[25][3] = "Presidencia del Gobierno.";
 answers[25] = 0;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 6646. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[25] = 6646


//  Id pregunta: 2514 Año de creación de pregunta: 2004
 questions[26]= "27)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[26]= new Array();
 choices[26][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[26][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[26][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[26][3] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 answers[26] = 3;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 2514. Examen TIC MAP B 2004";
 preguntaids[26] = 2514


//  Id pregunta: 5728 Año de creación de pregunta: 2007
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes aspectos NO son tratados en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?:";
 choices[27]= new Array();
 choices[27][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[27][1] = "promueve la elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[27][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a la informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[27][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[27] = 0;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 5728. ";
 preguntaids[27] = 5728


//  Id pregunta: 6167 Año de creación de pregunta: 2003
 questions[28]= "29)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Muy grave";
 choices[28][1] = "Grave";
 choices[28][2] = "Leve";
 choices[28][3] = "No est&aacute; tipificado tal importe";
 answers[28] = 1;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 6167. Ley 59/2003, art&iacute;culo 32";
 preguntaids[28] = 6167


//  Id pregunta: 7130 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[29]= new Array();
 choices[29][0] = "15 d&iacute;as";
 choices[29][1] = "1 mes";
 choices[29][2] = "2 meses";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = 3;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 7130. Ley 34/2002, art&iacute;culo 6";
 preguntaids[29] = 7130


//  Id pregunta: 2555 Año de creación de pregunta: 2002
 questions[30]= "31)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[30]= new Array();
 choices[30][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[30][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[30][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[30][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[30] = 0;
 units[30] = ['19'];
 blocks[30] = ['A4'];
 comments[30] = "Id Pregunta: 2555. ";
 preguntaids[30] = 2555


//  Id pregunta: 2585 Año de creación de pregunta: 2009
 questions[31]= "32)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[31]= new Array();
 choices[31][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[31][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[31][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[31][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[31] = 0;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 2585. Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4";
 preguntaids[31] = 2585


//  Id pregunta: 6133 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Qu&eacute; tipos de certificado est&aacute;n incluidos en el DNIe?:";
 choices[32]= new Array();
 choices[32][0] = "Autenticaci&oacute;n y firma";
 choices[32][1] = "Cifrado y firma";
 choices[32][2] = "Firma";
 choices[32][3] = "Cifrado, firma y autenticaci&oacute;n";
 answers[32] = 3;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 6133. Examen TIC A1 MAP 2007";
 preguntaids[32] = 6133


//  Id pregunta: 5889 Año de creación de pregunta: 2007
 questions[33]= "34)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[33]= new Array();
 choices[33][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[33][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[33][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[33][3] = "Todas las anteriores son ciertas";
 answers[33] = 3;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 5889. ";
 preguntaids[33] = 5889


//  Id pregunta: 6947 Año de creación de pregunta: 2010
 questions[34]= "35)  La Orden PRE/878/2010 regula";
 choices[34]= new Array();
 choices[34][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[34][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[34][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[34][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[34] = 3;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 6947. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";
 preguntaids[34] = 6947


//  Id pregunta: 6679 Año de creación de pregunta: 2009
 questions[35]= "36)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[35]= new Array();
 choices[35][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[35][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[35][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[35][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[35] = 2;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 6679. MAP 2008 A1";
 preguntaids[35] = 6679


//  Id pregunta: 3342 Año de creación de pregunta: 2004
 questions[36]= "37)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[36]= new Array();
 choices[36][0] = "Infracci&oacute;n muy grave";
 choices[36][1] = "Infracci&oacute;n grave";
 choices[36][2] = "Infracci&oacute;n leve";
 choices[36][3] = "No se considera infracci&oacute;n";
 answers[36] = 1;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 3342. Ley 34/2002, art&iacute;culo 38";
 preguntaids[36] = 3342


//  Id pregunta: 6829 Año de creación de pregunta: 2010
 questions[37]= "38)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[37]= new Array();
 choices[37][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[37][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[37][2] = "Quejas y reclamaciones.";
 choices[37][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[37] = 1;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 6829. TIC A 2009";
 preguntaids[37] = 6829


//  Id pregunta: 3474 Año de creación de pregunta: 2006
 questions[38]= "39)  La ley de servicios de la sociedad de la informaci&oacute;n y del comercio electr&oacute;nico (LSSICE) es el resultado de la transposici&oacute;n de dos directivas del Parlamento Europeo y del Consejo. &iquest;Cu&aacute;les?";
 choices[38]= new Array();
 choices[38][0] = "Directivas 2000/31/CE y 98/28/CE";
 choices[38][1] = "Directivas 2000/31/CE y 98/27/CE";
 choices[38][2] = "Directivas 2000/31/CE y 97/27/CE";
 choices[38][3] = "Directivas 2001/31/CE y 98/27/CE";
 answers[38] = 1;
 units[38] = ['19'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 3474. ";
 preguntaids[38] = 3474


//  Id pregunta: 6168 Año de creación de pregunta: 2003
 questions[39]= "40)  &iquest;Qu&eacute; actividades econ&oacute;micas NO caen dentro del &aacute;mbito de la directiva 2000/31/CE?";
 choices[39]= new Array();
 choices[39][0] = "La radiodifusi&oacute;n de televisi&oacute;n o de radio";
 choices[39][1] = "Los servicios de transmisi&oacute;n de informaci&oacute;n a trav&eacute;s de una red de comunicaci&oacute;n";
 choices[39][2] = "La venta de mercanc&iacute;as en l&iacute;nea";
 choices[39][3] = "El env&iacute;o de comunicaciones comerciales por correo electr&oacute;nico";
 answers[39] = 0;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 6168. Directiva 200/31/CE, consideraci&oacute;n 18)";
 preguntaids[39] = 6168


//  Id pregunta: 3476 Año de creación de pregunta: 2006
 questions[40]= "41)  De acuerdo a la ley 34/2002, se&ntilde;ale la verdadera:";
 choices[40]= new Array();
 choices[40][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente previamente no solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[40][1] = "Es posible el env&iacute;o de comunicaciones publicitarias si existe relaci&oacute;n contractual previa";
 choices[40][2] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica no ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos.";
 choices[40][3] = "Todas son verdaderas";
 answers[40] = 3;
 units[40] = ['19'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 3476. ";
 preguntaids[40] = 3476


//  Id pregunta: 5047 Año de creación de pregunta: 2002
 questions[41]= "42)  Se entiende por firma electr&oacute;nica avanzada:";
 choices[41]= new Array();
 choices[41][0] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste mantiene bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 choices[41][1] = "Conjunto de datos, en forma electr&oacute;nica, anejos a otros datos electr&oacute;nicos o asociados funcionalmente a ellos, como medio para identificar formalmente al autor del documento que la recoge";
 choices[41][2] = "Certificaci&oacute;n electr&oacute;nica que vincula unos datos de verificaci&oacute;n de firma a un signatario y confirma su identidad";
 choices[41][3] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste puede utilizar, con un alto nivel de confianza, bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 answers[41] = 3;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 5047. Ley 25/2015. Disposici&oacute;n Final Cuarta. Modificaci&oacute;n de la Ley 59/2003";
 preguntaids[41] = 5047


//  Id pregunta: 7090 Año de creación de pregunta: 2010
 questions[42]= "43)  La ley sobre reutilizaci&oacute;n de la informaci&oacute;n  del sector p&uacute;blico es la ley";
 choices[42]= new Array();
 choices[42][0] = "Ley 37/2007";
 choices[42][1] = "Ley 32/2005";
 choices[42][2] = "Ley 25/2007";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 0;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 7090. Ley 37/2007";
 preguntaids[42] = 7090


//  Id pregunta: 3513 Año de creación de pregunta: 2006
 questions[43]= "44)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[43]= new Array();
 choices[43][0] = "Multa de 30.001 a 150.000 euros";
 choices[43][1] = "Multa por importe m&aacute;ximo de 50.000 euros";
 choices[43][2] = "Multa de 150.001 a 600.000 euros";
 choices[43][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo";
 answers[43] = 0;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 3513. Ley 59/2003, art&iacute;culo 32";
 preguntaids[43] = 3513


//  Id pregunta: 3470 Año de creación de pregunta: 2006
 questions[44]= "45)  La firma electr&oacute;nica avanzada es aquella que cumple que:";
 choices[44]= new Array();
 choices[44][0] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n y est&aacute; creada por un dispositivo de control de firma seguro.";
 choices[44][1] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, est&aacute; creada por un dispositivo de control de firma seguro, tiene control exclusivo del firmante al crearla y no est&aacute; vinculada a los datos.";
 choices[44][2] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo del firmante al crearla y est&aacute; vinculada a los datos.";
 choices[44][3] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo de firmante al crearla y est&aacute; basada en un certificado reconocido.";
 answers[44] = 2;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 3470. ";
 preguntaids[44] = 3470


//  Id pregunta: 5917 Año de creación de pregunta: 2007
 questions[45]= "46)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[45]= new Array();
 choices[45][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[45][1] = "Las comunicaciones comerciales";
 choices[45][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[45][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[45] = 0;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 5917. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";
 preguntaids[45] = 5917


//  Id pregunta: 5631 Año de creación de pregunta: 2007
 questions[46]= "47)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[46]= new Array();
 choices[46][0] = "El lugar donde este establecido el prestador de servicios";
 choices[46][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[46][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[46][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[46] = 1;
 units[46] = ['19'];
 blocks[46] = ['A4'];
 comments[46] = "Id Pregunta: 5631. Ley 34/2002, art&iacute;culo 29";
 preguntaids[46] = 5631


//  Id pregunta: 2560 Año de creación de pregunta: 2004
 questions[47]= "48)  Est&aacute;n excluidos del &aacute;mbito de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[47]= new Array();
 choices[47][0] = "Notarios y registradores de la propiedad y mercantiles en el ejercicio de sus funciones p&uacute;blicas";
 choices[47][1] = "Servicios de venta de arte del patrimonio";
 choices[47][2] = "Servicios bancarios";
 choices[47][3] = "Servicios de la Comisi&oacute;n Nacional del Mercado de Valores";
 answers[47] = 0;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 2560. Examen Seg-Social A 2004";
 preguntaids[47] = 2560


//  Id pregunta: 4021 Año de creación de pregunta: 2002
 questions[48]= "49)  El programa IDABC:";
 choices[48]= new Array();
 choices[48][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[48][1] = "Contiene tres directivas";
 choices[48][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[48][3] = "Fue creado antes que el ENS";
 answers[48] = 0;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 4021. ";
 preguntaids[48] = 4021


//  Id pregunta: 3182 Año de creación de pregunta: 2003
 questions[49]= "50)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[49]= new Array();
 choices[49][0] = "Una persona f&iacute;sica";
 choices[49][1] = "Una persona jur&iacute;dica";
 choices[49][2] = "Ambas";
 choices[49][3] = "S&oacute;lo el Estado";
 answers[49] = 2;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 3182. Ley 59/2003, art&iacute;culo 2.2";
 preguntaids[49] = 3182


//  Id pregunta: 6099 Año de creación de pregunta: 2003
 questions[50]= "51)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[50]= new Array();
 choices[50][0] = "10 d&iacute;as naturales";
 choices[50][1] = "10 d&iacute;as h&aacute;biles";
 choices[50][2] = "20 d&iacute;as naturales";
 choices[50][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[50] = 0;
 units[50] = ['19'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 6099. Examen TIC A1 MAP 2007";
 preguntaids[50] = 6099


//  Id pregunta: 6645 Año de creación de pregunta: 2009
 questions[51]= "52)  Indique cuales son las funciones fundamentales de la Comisi&oacute;n Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[51]= new Array();
 choices[51][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas. Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a. Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[51][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[51][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[51][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[51] = 0;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 6645. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[51] = 6645


//  Id pregunta: 5431 Año de creación de pregunta: 2007
 questions[52]= "53)  Respecto del Marco Europeo de Interoperabilidad (MEI) v2, es falsa la afirmacion:";
 choices[52]= new Array();
 choices[52][0] = "Las dimensiones de interoperabilidad son tres: t&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[52][1] = "Define como principios  entre otros la subsidiariedad, la transparencia y el uso de est&aacute;ndares abiertos.";
 choices[52][2] = "Se elabora dentro del programa IDABC";
 choices[52][3] = "Define un total de doce principios";
 answers[52] = 0;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 5431. Las dimensiones de interoperabilidad son 4: organizativa, sem&aacute;ntica, t&eacute;cnica y legal";
 preguntaids[52] = 5431


//  Id pregunta: 6949 Año de creación de pregunta: 2010
 questions[53]= "54)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[53]= new Array();
 choices[53][0] = "Sello electr&oacute;nico";
 choices[53][1] = "DNI electr&oacute;nico";
 choices[53][2] = "Certificado de empleado p&uacute;blico";
 choices[53][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[53] = 0;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 6949. Articulo 21 RD 1671/2009";
 preguntaids[53] = 6949


//  Id pregunta: 2513 Año de creación de pregunta: 2004
 questions[54]= "55)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[54]= new Array();
 choices[54][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[54][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[54][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[54][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[54] = 3;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 2513. Examen TIC MAP B 2004";
 preguntaids[54] = 2513


//  Id pregunta: 2515 Año de creación de pregunta: 2004
 questions[55]= "56)  Si le notifican una multa de tr&aacute;fico mediante el Servicio de Notificaciones Telem&aacute;ticas Seguras (Direcci&oacute;n Electr&oacute;nica Unica):";
 choices[55]= new Array();
 choices[55][0] = "Puede rechazar recibir la notificaci&oacute;n";
 choices[55][1] = "No puede rechazar recibir la notificaci&oacute;n";
 choices[55][2] = "Le sirve de preaviso, pero debe esperar la notificaci&oacute;n oficial por correo ordinario, o la publicaci&oacute;n de la sanci&oacute;n en el Bolet&iacute;n Oficial de la Provincia";
 choices[55][3] = "Puede reenviarla a otro buz&oacute;n electr&oacute;nico de su elecci&oacute;n";
 answers[55] = 0;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 2515. Examen TIC MAP B 2004";
 preguntaids[55] = 2515


//  Id pregunta: 3279 Año de creación de pregunta: 2004
 questions[56]= "57)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[56]= new Array();
 choices[56][0] = "Leve";
 choices[56][1] = "Grave";
 choices[56][2] = "Muy grave";
 choices[56][3] = "No constituye infracci&oacute;n";
 answers[56] = 0;
 units[56] = ['19'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 3279. Ley 34/2002, art&iacute;culo 38";
 preguntaids[56] = 3279


//  Id pregunta: 2559 Año de creación de pregunta: 2009
 questions[57]= "58)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[57]= new Array();
 choices[57][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[57][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[57][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[57][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[57] = 0;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 2559. ";
 preguntaids[57] = 2559


//  Id pregunta: 6644 Año de creación de pregunta: 2009
 questions[58]= "59)  Respecto al &aacute;mbito de actuaci&oacute;n en la Plataforma de validaci&oacute;n y firma electr&oacute;nica, @firma, del Ministerio de Administraciones P&uacute;blicas, se&ntilde;ale la opci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[58][1] = "Todas las Administraciones P&uacute;blicas y Organismos asociados.";
 choices[58][2] = "Se except&uacute;an las Entidades Locales, Diputaciones provinciales y Cabildos, que acceden a los servicios proporcionados por las Comunidades Aut&oacute;nomas de su &aacute;mbito territorial.";
 choices[58][3] = "Se ofrecen los servicios de validaci&oacute;n y firma a cualquier organizaci&oacute;n de car&aacute;cter p&uacute;blico y privado";
 answers[58] = 1;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 6644. MAP 2008 A2";
 preguntaids[58] = 6644


//  Id pregunta: 6443 Año de creación de pregunta: 2003
 questions[59]= "60)  Indique la respuesta falsa";
 choices[59]= new Array();
 choices[59][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[59][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[59][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[59][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[59] = 0;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 6443. ";
 preguntaids[59] = 6443


//  Id pregunta: 5588 Año de creación de pregunta: 2007
 questions[60]= "61)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[60]= new Array();
 choices[60][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[60][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[60][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[60][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[60] = 2;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 5588. ";
 preguntaids[60] = 5588


//  Id pregunta: 3477 Año de creación de pregunta: 2006
 questions[61]= "62)  Se&ntilde;ale la falsa:";
 choices[61]= new Array();
 choices[61][0] = "La Ley General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[61][1] = "La ley de Firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[61][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[61][3] = "Son ciertas las tres anteriores";
 answers[61] = 3;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 3477. ";
 preguntaids[61] = 3477


//  Id pregunta: 3297 Año de creación de pregunta: 2004
 questions[62]= "63)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[62]= new Array();
 choices[62][0] = "Leve";
 choices[62][1] = "Grave";
 choices[62][2] = "Muy grave";
 choices[62][3] = "No constituye infracci&oacute;n";
 answers[62] = 0;
 units[62] = ['19'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 3297. ";
 preguntaids[62] = 3297


//  Id pregunta: 6065 Año de creación de pregunta: 2003
 questions[63]= "64)  Los certificados electr&oacute;nicos reconocidos incorporados al Documento Nacional de Identidad tendr&aacute;n, deacuerdo con el Real Decreto 1553/2005, de 23 de diciembre, por la que se regula la expedici&oacute;n del DNI y suscertificados de firma electr&oacute;nica, un periodo de vigencia de:";
 choices[63]= new Array();
 choices[63][0] = "5 a&ntilde;os.";
 choices[63][1] = "24 meses.";
 choices[63][2] = "3 a&ntilde;os.";
 choices[63][3] = "30 meses.";
 answers[63] = 0;
 units[63] = ['19'];
 blocks[63] = ['A4'];
 comments[63] = "Id Pregunta: 6065. TIC B 2007";
 preguntaids[63] = 6065


//  Id pregunta: 5887 Año de creación de pregunta: 2007
 questions[64]= "65)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[64]= new Array();
 choices[64][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[64][1] = "Firma electr&oacute;nica";
 choices[64][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[64][3] = "Todas las anteriores son ciertas";
 answers[64] = 3;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 5887. Ley 56/2007";
 preguntaids[64] = 5887


//  Id pregunta: 3511 Año de creación de pregunta: 2006
 questions[65]= "66)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[65]= new Array();
 choices[65][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[65][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[65][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[65][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[65] = 1;
 units[65] = ['19'];
 blocks[65] = ['A4'];
 comments[65] = "Id Pregunta: 3511. Ley 59/2003, art&iacute;culo 11";
 preguntaids[65] = 3511


//  Id pregunta: 6170 Año de creación de pregunta: 2003
 questions[66]= "67)  Seg&uacute;n la ley 34/2002, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n grave?";
 choices[66]= new Array();
 choices[66][0] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene";
 choices[66][1] = "No facilitar la informaci&oacute;n a que se refiere el art&iacute;culo 27.1 (Obligaciones previas al inicio del procedimiento de contrataci&oacute;n), cuando las partes no hayan pactado su exclusi&oacute;n o el destinatario sea un consumidor";
 choices[66][2] = "El incumplimiento de lo previsto en el art. 12 bis.";
 choices[66][3] = "El incumplimiento habitual de la obligaci&oacute;n de confirmar la recepci&oacute;n de una aceptaci&oacute;n, cuando no se haya pactado su exclusi&oacute;n o el contrato se haya celebrado con un consumidor";
 answers[66] = 3;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 6170. Ley 34/2002, art&iacute;culo 38";
 preguntaids[66] = 6170


//  Id pregunta: 5890 Año de creación de pregunta: 2007
 questions[67]= "68)  Seg&uacute;n el Real Decreto 522/2006";
 choices[67]= new Array();
 choices[67][0] = "En procedimientos administrativos de la Administraci&oacute;n General del Estado se suprome la aportaci&oacute;n de fotocopias de documentos de identidad";
 choices[67][1] = "En los procedimientos administrativos de la Administraci&oacute;n General del Estado se suprime la exigencia de aportar el certificado de empadronamiento, como documento probatorio del domicilio y residencia.";
 choices[67][2] = "Se regula la expedici&oacute;n del documento nacional de identidad electr&oacute;nico y sus certificados de firma electr&oacute;nica";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = 0;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 5890. ";
 preguntaids[67] = 5890


//  Id pregunta: 3472 Año de creación de pregunta: 2006
 questions[68]= "69)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[68]= new Array();
 choices[68][0] = "Por la comisi&oacute;n de infracciones muy graves, se impondr&aacute; al infractor multa de 150.001 a 600.000 euros";
 choices[68][1] = "Por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros";
 choices[68][2] = "Por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = 3;
 units[68] = ['19'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 3472. Ley 59/2003, art&iacute;culo 32";
 preguntaids[68] = 3472


//  Id pregunta: 6124 Año de creación de pregunta: 2003
 questions[69]= "70)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[69]= new Array();
 choices[69][0] = "24 meses";
 choices[69][1] = "5 a&ntilde;os";
 choices[69][2] = "30 meses";
 choices[69][3] = "4 a&ntilde;os";
 answers[69] = 1;
 units[69] = ['19'];
 blocks[69] = ['A4'];
 comments[69] = "Id Pregunta: 6124. Examen TIC A1 MAP 2007";
 preguntaids[69] = 6124


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[70]= "71)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[70]= new Array();
 choices[70][0] = "La Administraci&oacute;n General del Estado";
 choices[70][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[70][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[70][3] = "Todas las Administraciones P&uacute;blicas";
 answers[70] = 1;
 units[70] = ['19'];
 blocks[70] = ['A4'];
 comments[70] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[70] = 6948


//  Id pregunta: 3516 Año de creación de pregunta: 2006
 questions[71]= "72)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[71]= new Array();
 choices[71][0] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores";
 choices[71][1] = "S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores";
 choices[71][2] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante";
 choices[71][3] = "Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso";
 answers[71] = 2;
 units[71] = ['19'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 3516. Ley 59/2003, art&iacute;culo 7";
 preguntaids[71] = 3516


//  Id pregunta: 6115 Año de creación de pregunta: 2003
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[72]= new Array();
 choices[72][0] = "RD 153/2005, de 14 de enero";
 choices[72][1] = "RD 1553/2005, de 23 de diciembre";
 choices[72][2] = "RD 1555/2003, de 29 de mayo";
 choices[72][3] = "RD 155/2003, de 15 de septiembre";
 answers[72] = 1;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 6115. Examen TIC A1 MAP 2007";
 preguntaids[72] = 6115


//  Id pregunta: 3163 Año de creación de pregunta: 2009
 questions[73]= "74)  &iquest;Deben los prestadores de servicios de la sociedad de la informaci&oacute;n inscribirse en alg&uacute;n registro?:";
 choices[73]= new Array();
 choices[73][0] = "Es necesaria una autorizaci&oacute;n administrativa";
 choices[73][1] = "S&iacute;, pero a&uacute;n no se ha decidido donde";
 choices[73][2] = "No, pero los datos de su inscripci&oacute;n en el Registro Mercantil en el que, en su caso, se encuentren inscritos o de aquel otro registro p&uacute;blico en el que lo estuvieran para la adquisici&oacute;n de personalidad jur&iacute;dica o a los solos efectos de publicidad forman parte de la informaci&oacute;n general considerada en el art&iacute;culo 10 de la Ley 34/2002.";
 choices[73][3] = "No, pero se debe comunicar al Registro Mercantil el nombre de dominio si es utilizado para publicidad";
 answers[73] = 2;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 3163. Ley 34/2002, art&iacute;culo 9";
 preguntaids[73] = 3163


//  Id pregunta: 3475 Año de creación de pregunta: 2006
 questions[74]= "75)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[74]= new Array();
 choices[74][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros.";
 choices[74][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[74][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[74][3] = "Todas son ciertas";
 answers[74] = 3;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 3475. Ley 34/2002, art&iacute;culo 39";
 preguntaids[74] = 3475


