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
//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[0]= "1)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[0]= new Array();
 choices[0][0] = "formular solicitudes";
 choices[0][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[0][2] = "presentar declaraciones responsables o comunicaciones";
 choices[0][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[0] = 1;
 units[0] = ['7'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 228. Ley 39/2015";
 preguntaids[0] = 228


//  Id pregunta: 905 Año de creación de pregunta: 2016
 questions[1]= "2)  En el protocolo SNMP, los valores de cominidad por defecto son:";
 choices[1]= new Array();
 choices[1][0] = "Para lectura 'Rmib' y para escritura 'Wmib'.";
 choices[1][1] = "Para lectura 'Rmib' y para escritura 'Writemib'.";
 choices[1][2] = "Para lectura 'public' y para escritura 'private'.";
 choices[1][3] = "Para lectura 'rmis' y para escritura 'wmis'.";
 answers[1] = 2;
 units[1] = ['114'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 905. AGE A2 2015";
 preguntaids[1] = 905


//  Id pregunta: 3741 Año de creación de pregunta: 2002
 questions[2]= "3)  Al esfuerzo requerido para modificar un programa en explotaci&oacute;n se llama:";
 choices[2]= new Array();
 choices[2][0] = "Usabilidad";
 choices[2][1] = "Mantenibilidad";
 choices[2][2] = "Verificabilidad";
 choices[2][3] = "Flexibilidad";
 answers[2] = 1;
 units[2] = ['93'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3741. ";
 preguntaids[2] = 3741


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[3]= "4)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[3]= new Array();
 choices[3][0] = "Sello electr&oacute;nico";
 choices[3][1] = "Sede electr&oacute;nica";
 choices[3][2] = "Servidor seguro (SSL/TLS)";
 choices[3][3] = "Empleado p&uacute;blico";
 answers[3] = 2;
 units[3] = ['7'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 200. AGE A1 2015";
 preguntaids[3] = 200


//  Id pregunta: 9908 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un metadato obligatorio establecido en la NTI de Documento Electr&oacute;nico?";
 choices[4]= new Array();
 choices[4][0] = "Versi&oacute;n NTI.";
 choices[4][1] = "&Oacute;rgano.";
 choices[4][2] = "Estado de elaboraci&oacute;n.";
 choices[4][3] = "Todos los anteriores son metadatos obligatorios.";
 answers[4] = 3;
 units[4] = ['44'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9908. ";
 preguntaids[4] = 9908


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[5]= "6)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[5]= new Array();
 choices[5][0] = "623";
 choices[5][1] = "649";
 choices[5][2] = "626";
 choices[5][3] = "565";
 answers[5] = 2;
 units[5] = ['5'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 161. Uni&oacute;n Europea";
 preguntaids[5] = 161


//  Id pregunta: 1390 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[6]= new Array();
 choices[6][0] = "No es v&aacute;lida";
 choices[6][1] = "Multicast.";
 choices[6][2] = "Unicast.";
 choices[6][3] = "Loopback.";
 answers[6] = 2;
 units[6] = ['109'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 1390. ";
 preguntaids[6] = 1390


//  Id pregunta: 6514 Año de creación de pregunta: 2003
 questions[7]= "8)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de sistemas UNIX con las aplicaciones son:";
 choices[7]= new Array();
 choices[7][0] = "OSI";
 choices[7][1] = "ISO";
 choices[7][2] = "POSIX";
 choices[7][3] = "XENIX";
 answers[7] = 2;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 6514. ";
 preguntaids[7] = 6514


//  Id pregunta: 5662 Año de creación de pregunta: 2007
 questions[8]= "9)  &iquest;C&oacute;mo define la Norma UNE ISO IEC 27002 la seguridad de la informaci&oacute;n?";
 choices[8]= new Array();
 choices[8][0] = "La preservaci&oacute;n de la confidencialidad y la integridad";
 choices[8][1] = "La preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[8][2] = "La obtenci&oacute;n de la autenticaci&oacute;n y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[8][3] = "La obtenci&oacute;n de la autenticaci&oacute;n y el no repudio y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 answers[8] = 1;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 5662. ";
 preguntaids[8] = 5662


//  Id pregunta: 8045 Año de creación de pregunta: 2011
 questions[9]= "10)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[9]= new Array();
 choices[9][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[9][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento.";
 choices[9][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento.";
 choices[9][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[9] = 1;
 units[9] = ['44'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 8045. Examen TIC A2 2010";
 preguntaids[9] = 8045


//  Id pregunta: 998 Año de creación de pregunta: 2016
 questions[10]= "11)  La Administraci&oacute;n General del Estado se organiza:";
 choices[10]= new Array();
 choices[10][0] = "en Ministerios";
 choices[10][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[10][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[10][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[10] = 1;
 units[10] = ['4', '7', '8', '9'];
 blocks[10] = ['A1', 'A2'];
 comments[10] = "Id Pregunta: 998. Ley 40/2015";
 preguntaids[10] = 998


//  Id pregunta: 2955 Año de creación de pregunta: 2002
 questions[11]= "12)  La tercera generaci&oacute;n de la inform&aacute;tica se caracteriza por:";
 choices[11]= new Array();
 choices[11][0] = "El uso de transistores";
 choices[11][1] = "Uso de microprocesadores";
 choices[11][2] = "El uso de los circuitos SSI";
 choices[11][3] = "El uso de v&aacute;lvulas de vacio";
 answers[11] = 2;
 units[11] = ['52'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2955. ";
 preguntaids[11] = 2955


//  Id pregunta: 1493 Año de creación de pregunta: 2016
 questions[12]= "13)  En relaci&oacute;n a la accesibilidad a las p&aacute;ginas web de las administraciones p&uacute;blicas, la legislaci&oacute;n actual (Real Decreto 1494/2007, por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social) obliga a que la informaci&oacute;n disponible deber&aacute; cumplir, sin entrar en excepciones:";
 choices[12]= new Array();
 choices[12][0] = "Las prioridades 1 de la Norma UNE 139803:2004, &uacute;nicamente.";
 choices[12][1] = "Las prioridades 1 y 2 Norma UNE 139803:2004, &uacute;nicamente.";
 choices[12][2] = "Las prioridades 1, 2 y 3 Norma UNE 139803:2004.";
 choices[12][3] = "La ley establece recomendaciones, aunque no impone obligaciones en este sentido.";
 answers[12] = 1;
 units[12] = ['42'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 1493. ";
 preguntaids[12] = 1493


//  Id pregunta: 7405 Año de creación de pregunta: 2010
 questions[13]= "14)  Un programa que se aloja en el ordenador y permite el acceso a usuarios externos, con el fin de obtener informaci&oacute;n o controlar la m&aacute;quina de forma remota, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Bot";
 choices[13][1] = "Virus";
 choices[13][2] = "Troyano";
 choices[13][3] = "Gusano";
 answers[13] = 2;
 units[13] = ['120'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7405. Examen TIC B 2009";
 preguntaids[13] = 7405


//  Id pregunta: 6989 Año de creación de pregunta: 2010
 questions[14]= "15)  A qu&eacute; proceso principal de M&eacute;trica pertenece la tarea &quot;Determinaci&oacute;n del Acuerdo de Nivel de Servicio&quot;";
 choices[14]= new Array();
 choices[14][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[14][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[14][2] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[14][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[14] = 3;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 6989. TIC-B 2009 bloque desarrollo";
 preguntaids[14] = 6989


//  Id pregunta: 10936 Año de creación de pregunta: 2015
 questions[15]= "16)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[15]= new Array();
 choices[15][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[15][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[15][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[15][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[15] = 3;
 units[15] = ['7'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 10936. ";
 preguntaids[15] = 10936


//  Id pregunta: 3488 Año de creación de pregunta: 2006
 questions[16]= "17)  Grupo de microchips dise&ntilde;ados para trabajar como una unidad para desarrollar una o varias funciones relacionadas";
 choices[16]= new Array();
 choices[16][0] = "BIOS";
 choices[16][1] = "Chip cluster";
 choices[16][2] = "Chipset";
 choices[16][3] = "Estado s&oacute;lido";
 answers[16] = 2;
 units[16] = ['50'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3488. ";
 preguntaids[16] = 3488


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[17]= new Array();
 choices[17][0] = "El Tratado de Lisboa";
 choices[17][1] = "El Tratado de Amsterdam";
 choices[17][2] = "El Tratado de Niza";
 choices[17][3] = "El Acta &Uacute;nica Europea";
 answers[17] = 1;
 units[17] = ['15'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 420. Mercado laboral";
 preguntaids[17] = 420


//  Id pregunta: 10335 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una licencia de c&oacute;digo abierto reconocida por OSI?";
 choices[18]= new Array();
 choices[18][0] = "European Union Public License";
 choices[18][1] = "Apache License";
 choices[18][2] = "Mozilla Public License";
 choices[18][3] = "Google Legal License";
 answers[18] = 3;
 units[18] = ['66'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10335. ";
 preguntaids[18] = 10335


//  Id pregunta: 9139 Año de creación de pregunta: 2014
 questions[19]= "20)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un perfil participante?";
 choices[19]= new Array();
 choices[19][0] = "Directivo";
 choices[19][1] = "Jefe de Proyecto";
 choices[19][2] = "Consultor";
 choices[19][3] = "Usuario experto";
 answers[19] = 3;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 9139. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el perfil &quot;Directivo&quot;.";
 preguntaids[19] = 9139


//  Id pregunta: 10060 Año de creación de pregunta: 2015
 questions[20]= "21)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[20]= new Array();
 choices[20][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[20][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[20][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[20][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[20] = 1;
 units[20] = ['93'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 10060. Examen TIC A2 2014";
 preguntaids[20] = 10060


//  Id pregunta: 3328 Año de creación de pregunta: 2004
 questions[21]= "22)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[21]= new Array();
 choices[21][0] = "Acceso garantizado";
 choices[21][1] = "Independencia f&iacute;sica de los datos";
 choices[21][2] = "Gesti&oacute;n de una BDR";
 choices[21][3] = "Actualizaci&oacute;n de tablas";
 answers[21] = 3;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3328. ";
 preguntaids[21] = 3328


//  Id pregunta: 9318 Año de creación de pregunta: 2014
 questions[22]= "23)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[22]= new Array();
 choices[22][0] = "e-Factura, versi&oacute;n 2.3";
 choices[22][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Energia, Turismo y Agenda Digital.";
 choices[22][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[22][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[22] = 2;
 units[22] = ['10'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 9318. ";
 preguntaids[22] = 9318


//  Id pregunta: 9340 Año de creación de pregunta: 2014
 questions[23]= "24)  Indique los cuatro niveles de aislamiento que define ANSI SQL 92:";
 choices[23]= new Array();
 choices[23][0] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[23][1] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 choices[23][2] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[23][3] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 answers[23] = 0;
 units[23] = ['60'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9340. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[23] = 9340


//  Id pregunta: 6484 Año de creación de pregunta: 2003
 questions[24]= "25)  &iquest;Qu&eacute; tipos de tramitaciones se contemplan en el RD legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[24]= new Array();
 choices[24][0] = "Ordinarias, y urgentes";
 choices[24][1] = "Ordinarias, urgentes y de emergencia";
 choices[24][2] = "Ordinarias y con exigencia de tiempo reducido";
 choices[24][3] = "Ordinarias, urgentes y con restricci&oacute;n temporal";
 answers[24] = 1;
 units[24] = ['37'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 6484. ";
 preguntaids[24] = 6484


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[25]= "26)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[25]= new Array();
 choices[25][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[25][1] = "La libertad sexual y religiosa.";
 choices[25][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[25][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[25] = 0;
 units[25] = ['1'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 81. Constituci&oacute;n de 1978";
 preguntaids[25] = 81


//  Id pregunta: 5031 Año de creación de pregunta: 2002
 questions[26]= "27)  RADIUS es:";
 choices[26]= new Array();
 choices[26][0] = "una herramienta estandarizada de an&aacute;lisis de cobertura radioel&eacute;ctrica";
 choices[26][1] = "un protocolo de acceso inal&aacute;mbrico en la capa de acceso al medio radioel&eacute;ctrico";
 choices[26][2] = "un protocolo de gesti&oacute;n y mantenimiento de redes";
 choices[26][3] = "un protocolo de autenticaci&oacute;n, autorizaci&oacute;n y configuraci&oacute;n de accesos";
 answers[26] = 3;
 units[26] = ['108'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5031. ";
 preguntaids[26] = 5031


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[27]= "28)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[27]= new Array();
 choices[27][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[27][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[27][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[27][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[27] = 2;
 units[27] = ['8'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 260. Ley 39/2015";
 preguntaids[27] = 260


//  Id pregunta: 3198 Año de creación de pregunta: 2003
 questions[28]= "29)  El Real Decreto 209/2003:";
 choices[28]= new Array();
 choices[28][0] = "Modifica la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[28][1] = "Modifica la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[28][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[28][3] = "Todas las anteriores son ciertas";
 answers[28] = 1;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 3198. ";
 preguntaids[28] = 3198


//  Id pregunta: 5127 Año de creación de pregunta: 2003
 questions[29]= "30)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[29]= new Array();
 choices[29][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[29][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[29][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[29][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[29] = 1;
 units[29] = ['106'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5127. ";
 preguntaids[29] = 5127


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[30]= "31)  La Poblaci&oacute;n Activa incluye a:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[30][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[30][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[30][3] = "Todo aquel que desea trabajar";
 answers[30] = 2;
 units[30] = ['15'];
 blocks[30] = ['A3'];
 comments[30] = "Id Pregunta: 415. Mercado laboral";
 preguntaids[30] = 415


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[31]= new Array();
 choices[31][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[31][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[31][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[31][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[31] = 2;
 units[31] = ['22'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 502. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[31] = 502


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[32]= new Array();
 choices[32][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[32][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[32][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[32][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[32] = 3;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 670. Junta de Extremadura A1 2015";
 preguntaids[32] = 670


//  Id pregunta: 10694 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes NO es un Comit&eacute; creado en el seno de la International Standards Organization (ISO)?";
 choices[33]= new Array();
 choices[33][0] = "DEVCO, Comit&eacute; de Desarrollo";
 choices[33][1] = "COPOLCO, Comit&eacute; de pol&iacute;ticas en materia de consumo";
 choices[33][2] = "QUALCO, Comit&eacute; de calidad";
 choices[33][3] = "CASCO, Comit&eacute; de evaluaci&oacute;n de la conformidad";
 answers[33] = 2;
 units[33] = ['48'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 10694. ";
 preguntaids[33] = 10694


//  Id pregunta: 7355 Año de creación de pregunta: 2010
 questions[34]= "35)  Para crear discos virtuales se utiliza tecnolog&iacute;a RAID se&ntilde;ale la opci&oacute;n falsa:";
 choices[34]= new Array();
 choices[34][0] = "El RAID 0 aporta mayor disponibilidad que el RAID  1";
 choices[34][1] = "El RAID  1 cuenta con una configuraci&oacute;n de discos en espejo";
 choices[34][2] = "El coste de RAID 1 es mayor que el de RAID 5.";
 choices[34][3] = "El RAID 5 usa divisi&oacute;n de datos a nivel de bloques distribuyendo la informaci&oacute;n de paridad entre todos los discos miembros del conjunto";
 answers[34] = 0;
 units[34] = ['53'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7355. Examen TIC B 2009";
 preguntaids[34] = 7355


//  Id pregunta: 7129 Año de creación de pregunta: 2010
 questions[35]= "36)  Las Administraciones podr&aacute;n poner a disposici&oacute;n de todos los organismos las aplicaciones que decidan declarar de c&oacute;digo abierto, a trav&eacute;s de el&hellip;";
 choices[35]= new Array();
 choices[35][0] = "Centro de Transferencia de Tecnolog&iacute;a";
 choices[35][1] = "Centro de Compartici&oacute;n de Tecnolog&iacute;a";
 choices[35][2] = "Proyecto Aporta";
 choices[35][3] = "Proyecto Comparte";
 answers[35] = 0;
 units[35] = ['7'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 7129. ";
 preguntaids[35] = 7129


//  Id pregunta: 9497 Año de creación de pregunta: 2014
 questions[36]= "37)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[36]= new Array();
 choices[36][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[36][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[36][2] = "Es compatible con las redes IEEE 802.16e";
 choices[36][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[36] = 2;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 9497. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";
 preguntaids[36] = 9497


//  Id pregunta: 7689 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "Entradas.";
 choices[37][1] = "Salidas.";
 choices[37][2] = "Consultas.";
 choices[37][3] = "Usuarios.";
 answers[37] = 3;
 units[37] = ['94'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 7689. Map 2007";
 preguntaids[37] = 7689


//  Id pregunta: 5064 Año de creación de pregunta: 2002
 questions[38]= "39)  Se&ntilde;ale la opci&oacute;n que mejor indica la utilizaci&oacute;n de los cables de cuadretes:";
 choices[38]= new Array();
 choices[38][0] = "Los cables de cuadretes son indicados en transmisiones de baja frecuencia y en largas distancias";
 choices[38][1] = "Los cables de cuadretes se deben utilizar para transmisi&oacute;n de se&ntilde;ales de baja frecuencia y en distancias medias";
 choices[38][2] = "Los cables de cuadretes son indicados en transmisi&oacute;n de se&ntilde;ales de alta frecuencia y en distancias medias";
 choices[38][3] = "Los cables de cuadretes son los adecuados para transmisi&oacute;n de se&ntilde;ales de alta frecuencia y largas distancias";
 answers[38] = 2;
 units[38] = ['104'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5064. ";
 preguntaids[38] = 5064


//  Id pregunta: 2007 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;C&oacute;mo se denomina al derecho o facultad que se reconoce al afectado para recabar informaci&oacute;n gratuita sobre sus datos de car&aacute;cter personal, ya est&eacute;n incluidos o vayan a ser tratados?:";
 choices[39]= new Array();
 choices[39][0] = "Derecho de informaci&oacute;n";
 choices[39][1] = "Derecho de acceso";
 choices[39][2] = "Derecho de consulta al Registro General de Protecci&oacute;n de Datos";
 choices[39][3] = "Derecho de cancelaci&oacute;n";
 answers[39] = 1;
 units[39] = ['35'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2007. ";
 preguntaids[39] = 2007


//  Id pregunta: 7788 Año de creación de pregunta: 2010
 questions[40]= "41)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[40]= new Array();
 choices[40][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas.";
 choices[40][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos.";
 choices[40][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos.";
 choices[40][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web.";
 answers[40] = 2;
 units[40] = ['125'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7788. ";
 preguntaids[40] = 7788


//  Id pregunta: 7018 Año de creación de pregunta: 2010
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientesa no es un objetivo b&aacute;sico que debe cubrir un ciclo de vida?";
 choices[41]= new Array();
 choices[41][0] = "Asegurar la consistencia con el resto de los sistemas de informaci&oacute;n de la organizaci&oacute;n";
 choices[41][1] = "Garantizar la satisfacci&oacute;n del cliente";
 choices[41][2] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto (calendario y presupuesto)";
 choices[41][3] = "Definir las actividades a realizar y en qu&eacute; orden";
 answers[41] = 1;
 units[41] = ['82'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 7018. ";
 preguntaids[41] = 7018


//  Id pregunta: 7502 Año de creación de pregunta: 2010
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l de las siguientes normas se debe tener en cuenta en el &Aacute;rea de Seguridad de una organizaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "ISO 19799.";
 choices[42][1] = "ISO 14508 sobre perfiles de protecci&oacute;n.";
 choices[42][2] = "ISO 14848.";
 choices[42][3] = "ISO 27002.";
 answers[42] = 3;
 units[42] = ['45'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 7502. Similar a Map 2005";
 preguntaids[42] = 7502


//  Id pregunta: 8456 Año de creación de pregunta: 2011
 questions[43]= "44)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[43]= new Array();
 choices[43][0] = "Hirsch";
 choices[43][1] = "Royce";
 choices[43][2] = "Jackson";
 choices[43][3] = "Bohem";
 answers[43] = 2;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 8456. ";
 preguntaids[43] = 8456


//  Id pregunta: 2465 Año de creación de pregunta: 2002
 questions[44]= "45)  La firma electr&oacute;nica se regula seg&uacute;n la base normativa descrita en:";
 choices[44]= new Array();
 choices[44][0] = "Real Decreto Ley Firma Electr&oacute;nica 213/2001";
 choices[44][1] = "Ley Firma Electr&oacute;nica 59/2003";
 choices[44][2] = "Real Decreto Ley Firma Electr&oacute;nica 15/1999";
 choices[44][3] = "Real Decreto Ley Firma Electr&oacute;nica 30/1998";
 answers[44] = 1;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 2465. ";
 preguntaids[44] = 2465


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[45]= "46)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[45]= new Array();
 choices[45][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[45][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[45][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[45][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[45] = 2;
 units[45] = ['14'];
 blocks[45] = ['A3'];
 comments[45] = "Id Pregunta: 354. Estado del Bienestar";
 preguntaids[45] = 354


//  Id pregunta: 9115 Año de creación de pregunta: 2014
 questions[46]= "47)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[46]= new Array();
 choices[46][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[46][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[46][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[46][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[46] = 0;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9115. Examen TIC A2 2013";
 preguntaids[46] = 9115


//  Id pregunta: 1037 Año de creación de pregunta: 2016
 questions[47]= "48)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[47]= new Array();
 choices[47][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[47][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[47][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[47][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[47] = 0;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 1037. Ley 40/2015";
 preguntaids[47] = 1037


//  Id pregunta: 4524 Año de creación de pregunta: 2002
 questions[48]= "49)  Dentro del modelo OSI la funci&oacute;n de 'compresi&oacute;n de mensajes', corresponde al nivel:";
 choices[48]= new Array();
 choices[48][0] = "Nivel de red";
 choices[48][1] = "Nivel de transporte";
 choices[48][2] = "Nivel de sesi&oacute;n";
 choices[48][3] = "Nivel de presentaci&oacute;n";
 answers[48] = 3;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4524. ";
 preguntaids[48] = 4524


//  Id pregunta: 5367 Año de creación de pregunta: 2006
 questions[49]= "50)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[49]= new Array();
 choices[49][0] = "RJ11 de 6 contactos";
 choices[49][1] = "RJ45 de 6 contactos";
 choices[49][2] = "RJ45 de 8 contactos";
 choices[49][3] = "RJ49 para cables STP";
 answers[49] = 2;
 units[49] = ['104'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5367. ";
 preguntaids[49] = 5367


//  Id pregunta: 3670 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes es un objetivo de la Historia de la Vida de las Entidades (HVE) dentro del an&aacute;lisis estructurado?:";
 choices[50]= new Array();
 choices[50][0] = "Obtener un registro de la secuencia de los cambios de las entidades con el tiempo";
 choices[50][1] = "Establecer los estados posibles de las entidades para que tengan lugar transacciones externas, as&iacute; como los cambios de estado de las entidades originadas por dichas transacciones";
 choices[50][2] = "Los dos anteriores son objetivos de la HVE";
 choices[50][3] = "Todas las anteriores respuestas son falsas";
 answers[50] = 2;
 units[50] = ['85', '86'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3670. ";
 preguntaids[50] = 3670


//  Id pregunta: 3015 Año de creación de pregunta: 2002
 questions[51]= "52)  Respecto a las memorias RAM:";
 choices[51]= new Array();
 choices[51][0] = "las RAM est&aacute;ticas no son m&aacute;s r&aacute;pidas que las din&aacute;micas";
 choices[51][1] = "SDRAM (Synchronous Dynamic) es generalmente m&aacute;s r&aacute;pida que EDORAM (Extended Data Output)";
 choices[51][2] = "las RAM no pueden ser usadas para simular discos duros debido a su velocidad de acceso";
 choices[51][3] = "las PBSRAM (pipeline burst static) no pueden proporcionar acceso simult&aacute;neo por la propia concepci&oacute;n de la m&aacute;quina de Von Neumann";
 answers[51] = 1;
 units[51] = ['52'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3015. ";
 preguntaids[51] = 3015


//  Id pregunta: 6300 Año de creación de pregunta: 2003
 questions[52]= "53)  Sobre la Programaci&oacute;n Extrema:";
 choices[52]= new Array();
 choices[52][0] = "Los proyectos que usan esta metodolog&iacute;a comienzan obteniendo Historias de usuario(User Stories) y desarrollando soluciones (Spike solutions) sobre una arquitectura general de la soluci&oacute;n (Architectural Spike)";
 choices[52][1] = "A partir de aqu&iacute;, se mantiene una reuni&oacute;n a la que acudir&aacute;n clientes/usuarios, desarrolladores y gestores para acordar entre todos lo que se debe hacer";
 choices[52][2] = "Las iteraciones sobre lo que se tiene que hacer generar&aacute;n pruebas que generar&aacute;n m&aacute;s iteraciones sobre el sistema.";
 choices[52][3] = "Todas las anteriores son correctas";
 answers[52] = 3;
 units[52] = ['82'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6300. ";
 preguntaids[52] = 6300


//  Id pregunta: 2586 Año de creación de pregunta: 2002
 questions[53]= "54)  Seg&uacute;n la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, los contratos celebrados por la v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[53]= new Array();
 choices[53][0] = "El lugar en que est&eacute; establecido el prestador de servicios";
 choices[53][1] = "El lugar que figure en el registro mercantil";
 choices[53][2] = "El lugar en que &eacute;ste tenga su residencia habitual";
 choices[53][3] = "El lugar que figure en la cabecera de la p&aacute;gina";
 answers[53] = 2;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 2586. Ley 34/2002, art&iacute;culo 29";
 preguntaids[53] = 2586


//  Id pregunta: 6981 Año de creación de pregunta: 2010
 questions[54]= "55)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[54]= new Array();
 choices[54][0] = "Gesti&oacute;n de la Infraestructura";
 choices[54][1] = "Gesti&oacute;n de Soporte";
 choices[54][2] = "Gesti&oacute;n de Entrega";
 choices[54][3] = "Gesti&oacute;n de Aplicaciones";
 answers[54] = 0;
 units[54] = ['101'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6981. TIC-B 2009 bloque desarrollo";
 preguntaids[54] = 6981


//  Id pregunta: 3447 Año de creación de pregunta: 2006
 questions[55]= "56)  &iquest;Con que categoria de software esta m&aacute;s relacionado el BPM?";
 choices[55]= new Array();
 choices[55][0] = "Workflow";
 choices[55][1] = "B2B";
 choices[55][2] = "B2C";
 choices[55][3] = "SCM";
 answers[55] = 0;
 units[55] = ['72'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3447. ";
 preguntaids[55] = 3447


//  Id pregunta: 9028 Año de creación de pregunta: 2014
 questions[56]= "57)  &iquest;Qu&eacute; es IPAM en Windows 2012 Server?";
 choices[56]= new Array();
 choices[56][0] = "IP Address Management";
 choices[56][1] = "Internet Proccess Advanced Management";
 choices[56][2] = "IP Access Management";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 0;
 units[56] = ['58'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9028. ";
 preguntaids[56] = 9028


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[57]= new Array();
 choices[57][0] = "El BCE";
 choices[57][1] = "El Parlamento";
 choices[57][2] = "El Consejo";
 choices[57][3] = "La Comisi&oacute;n";
 answers[57] = 3;
 units[57] = ['17'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 433. Mercado &Uacute;nico Digital";
 preguntaids[57] = 433


//  Id pregunta: 3905 Año de creación de pregunta: 2002
 questions[58]= "59)  La planificaci&oacute;n de un proyecto inform&aacute;tico debe permitir responder a las preguntas:";
 choices[58]= new Array();
 choices[58][0] = "&iquest;Qu&eacute; tareas hay que realizar, qui&eacute;n debe realizarlas, cu&aacute;ndo se deben realizar?";
 choices[58][1] = "&iquest;Qui&eacute;nes son los miembros del proyecto, cu&aacute;l es su jerarqu&iacute;a, a qu&eacute; unidades pertenecen?";
 choices[58][2] = "&iquest;Qui&eacute;n es el responsable del proyecto, cu&aacute;ntas personas van a participar, cu&aacute;l es su formaci&oacute;n?";
 choices[58][3] = "&iquest;Qui&eacute;nes son los proveedores, cu&aacute;l es su experiencia, de cu&aacute;ntos empleados disponen?";
 answers[58] = 0;
 units[58] = ['83'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3905. ";
 preguntaids[58] = 3905


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[59]= "60)  El sector Servicios NO incluye:";
 choices[59]= new Array();
 choices[59][0] = "El Comercio";
 choices[59][1] = "Los Transportes";
 choices[59][2] = "La Energ&iacute;a";
 choices[59][3] = "Las Comunicaciones";
 answers[59] = 2;
 units[59] = ['12'];
 blocks[59] = ['A3'];
 comments[59] = "Id Pregunta: 345. Modelo econ&oacute;mico";
 preguntaids[59] = 345


//  Id pregunta: 7128 Año de creación de pregunta: 2010
 questions[60]= "61)  La red multicanal de acceso a informaci&oacute;n o tramitaci&oacute;n de los servicios p&uacute;blicos de cualquier administraci&oacute;n, es conocida como:";
 choices[60]= new Array();
 choices[60][0] = "Red 112";
 choices[60][1] = "Red 060";
 choices[60][2] = "Red Conecta";
 choices[60][3] = "Red SARA";
 answers[60] = 1;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 7128. ";
 preguntaids[60] = 7128


//  Id pregunta: 1791 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la respuesta correcta. Con respecto a la Sede Electr&oacute;nica podemos decir qu&eacute;:";
 choices[61]= new Array();
 choices[61][0] = "La Sede Electr&oacute;nica debe estar accesible desde la p&aacute;gina principal de la web institucional de la Administraci&oacute;n P&uacute;blica correspondiente.";
 choices[61][1] = "En una Administraci&oacute;n P&uacute;blica cada &oacute;rgano de direcci&oacute;n (Ministerio, Conseller&iacute;a, Consejer&iacute;a) debe tener su propia sede electr&oacute;nica.";
 choices[61][2] = "Una vez constituida la sede electr&oacute;nica, los tablones de anuncios pueden ser sustituidos o complementados por la publicaci&oacute;n electr&oacute;nica en sede.";
 choices[61][3] = "Debe facilitar informaci&oacute;n de las oficinas de registro y atenci&oacute;n al ciudadano, de los &oacute;rganos de gobierno y el directorio de personal de la Administraci&oacute;n P&uacute;blica.";
 answers[61] = 2;
 units[61] = ['7'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 1791. ";
 preguntaids[61] = 1791


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[62]= new Array();
 choices[62][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[62][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[62][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[62][3] = "todas son correctas";
 answers[62] = 3;
 units[62] = ['7'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 239. Ley 39/2015";
 preguntaids[62] = 239


//  Id pregunta: 967 Año de creación de pregunta: 2016
 questions[63]= "64)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[63]= new Array();
 choices[63][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[63][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[63][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[63][3] = "todas son correctas";
 answers[63] = 3;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 967. Ley 40/2015";
 preguntaids[63] = 967


//  Id pregunta: 5974 Año de creación de pregunta: 2007
 questions[64]= "65)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[64]= new Array();
 choices[64][0] = "Ingenier&iacute;a inversa de procesos.";
 choices[64][1] = "Reestructuraci&oacute;n del software.";
 choices[64][2] = "Ingenier&iacute;a de la integraci&oacute;n de m&oacute;dulos.";
 choices[64][3] = "Ingenier&iacute;a avanzada.";
 answers[64] = 1;
 units[64] = ['97'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 5974. examen TIC 2006";
 preguntaids[64] = 5974


//  Id pregunta: 1534 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con lo previsto en el art&iacute;culo 20 de la Ley Org&aacute;nica 3/2007, los poderes p&uacute;blicos deben considerar la variable sexo, en la realizaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "De compras p&uacute;blicas de bienes y servicios inform&aacute;ticos.";
 choices[65][1] = "De estad&iacute;sticas, encuestas y recogidas de datos que lleven a cabo.";
 choices[65][2] = "Del dise&ntilde;o de formularios de las autoliquidaciones tributarias.";
 choices[65][3] = "De proyectos de actuaci&oacute;n o reforma de bienes inmuebles del patrimonio del estado.";
 answers[65] = 1;
 units[65] = ['14'];
 blocks[65] = ['A3'];
 comments[65] = "Id Pregunta: 1534. ";
 preguntaids[65] = 1534


//  Id pregunta: 1334 Año de creación de pregunta: 2016
 questions[66]= "67)  AI problema en un SGBD en que dos transacciones paralelas intentan modificar el mismo objeto de la base de datos, leyendo ambas el valor antes de que la otra transacci&oacute;n lo actualice, se conoce como:";
 choices[66]= new Array();
 choices[66][0] = "Lectura sucia.";
 choices[66][1] = "Lectura fantasma.";
 choices[66][2] = "Lectura no repetible.";
 choices[66][3] = "Lectura comprometida.";
 answers[66] = 2;
 units[66] = ['60'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1334. ";
 preguntaids[66] = 1334


//  Id pregunta: 6913 Año de creación de pregunta: 2010
 questions[67]= "68)  &iquest;C&oacute;mo se representan las relaciones &quot;ficticias&quot; en el M&eacute;todo de Diagramaci&oacute;n por Flechas (ADM)?";
 choices[67]= new Array();
 choices[67][0] = "Mediante una l&iacute;nea de puntos";
 choices[67][1] = "En ADM no existe el concepto de relaciones &quot;ficticias&quot;";
 choices[67][2] = "Mediante una flecha convexa";
 choices[67][3] = "Mediante una flecha c&oacute;ncava";
 answers[67] = 0;
 units[67] = ['31'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 6913. ";
 preguntaids[67] = 6913


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[68]= "69)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[68]= new Array();
 choices[68][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[68][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[68][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[68][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[68] = 1;
 units[68] = ['58'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 675. Junta de Extremadura A1 2015";
 preguntaids[68] = 675


//  Id pregunta: 3429 Año de creación de pregunta: 2006
 questions[69]= "70)  Los modelos digitales del terreno (MDT) son conjuntos de datos de gran utilidad, y t&iacute;picamente representados mediante un modelo de datos:";
 choices[69]= new Array();
 choices[69][0] = "Vectorial.";
 choices[69][1] = "R&aacute;ster.";
 choices[69][2] = "Alfanum&eacute;rico.";
 choices[69][3] = "De cotas u elevaciones.";
 answers[69] = 1;
 units[69] = ['71'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3429. ";
 preguntaids[69] = 3429


//  Id pregunta: 3914 Año de creación de pregunta: 2002
 questions[70]= "71)  Las consideraciones sobre an&aacute;lisis coste/beneficio y an&aacute;lisis de riesgos, corresponden a la siguiente &aacute;rea de un proyecto inform&aacute;tico:";
 choices[70]= new Array();
 choices[70][0] = "Planificaci&oacute;n del proyecto";
 choices[70][1] = "An&aacute;lisis de viabilidad";
 choices[70][2] = "Dise&ntilde;o de la soluci&oacute;n";
 choices[70][3] = "Seguimiento del proyecto";
 answers[70] = 1;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3914. ";
 preguntaids[70] = 3914


//  Id pregunta: 6447 Año de creación de pregunta: 2003
 questions[71]= "72)  En la recuperaci&oacute;n de la informaci&oacute;n, los modelos cl&aacute;sicos basados en aproximaciones estad&iacute;sticas son";
 choices[71]= new Array();
 choices[71][0] = "Booleano";
 choices[71][1] = "Vectorial";
 choices[71][2] = "Probabil&iacute;stico";
 choices[71][3] = "Todos los anteriores son modelos cl&aacute;sicos";
 answers[71] = 3;
 units[71] = ['100'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 6447. ";
 preguntaids[71] = 6447


//  Id pregunta: 3315 Año de creación de pregunta: 2004
 questions[72]= "73)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[72]= new Array();
 choices[72][0] = "Los servicios OLAP son una herramienta de proceso anal&iacute;tico en l&iacute;nea.";
 choices[72][1] = "Pertenece al dominio de los almacenes de datos y se encuentra dentro del &aacute;mbito, m&aacute;s amplio, de los sistemas de toma de decisiones (DSS) y de los sistemas de informaci&oacute;n ejecutiva (EIS).";
 choices[72][2] = "Una de sus principales metas es incrementar la velocidad de recuperaci&oacute;n de datos.";
 choices[72][3] = "Los servicios OLAP son una herramienta de proceso transaccional en l&iacute;nea.";
 answers[72] = 3;
 units[72] = ['72'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3315. MAP-B 2003";
 preguntaids[72] = 3315


//  Id pregunta: 4813 Año de creación de pregunta: 2002
 questions[73]= "74)  En la provisi&oacute;n de conexi&oacute;n del nivel de transporte al nivel de sesi&oacute;n del modelo OSI:";
 choices[73]= new Array();
 choices[73][0] = "Es posible el soporte simult&aacute;neo de varias conexiones de sesi&oacute;n por una sola conexi&oacute;n de transporte";
 choices[73][1] = "Una conexi&oacute;n de sesi&oacute;n no puede ser soportada por varias conexiones de transporte secuencialmente";
 choices[73][2] = "No es posible el soporte secuencial de varias conexiones de sesi&oacute;n por una de transporte";
 choices[73][3] = "Una sola conexi&oacute;n de sesi&oacute;n puede ser soportada por varias conexiones de transporte secuencialmente";
 answers[73] = 3;
 units[73] = ['105'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4813. ";
 preguntaids[73] = 4813


//  Id pregunta: 2482 Año de creación de pregunta: 2009
 questions[74]= "75)  Respecto a la LSSI puede decirse que:";
 choices[74]= new Array();
 choices[74][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[74][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente";
 choices[74][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma";
 choices[74][3] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma";
 answers[74] = 3;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 2482. Ley 34/2002, art&iacute;culo 21";
 preguntaids[74] = 2482


