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
//  Id pregunta: 976 Año de creación de pregunta: 2016
 questions[0]= "1)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[0]= new Array();
 choices[0][0] = "circulares";
 choices[0][1] = "reglamentos internos";
 choices[0][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[0][3] = "disposiciones de car&aacute;cter general";
 answers[0] = 2;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 976. Ley 40/2015";
 preguntaids[0] = 976


//  Id pregunta: 9279 Año de creación de pregunta: 2014
 questions[1]= "2)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[1]= new Array();
 choices[1][0] = "Jefe de Proyecto";
 choices[1][1] = "Consultor";
 choices[1][2] = "Analista";
 choices[1][3] = "Programador";
 answers[1] = 0;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 9279. Examen TIC A2 2013. Promocion interna";
 preguntaids[1] = 9279


//  Id pregunta: 884 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l es la tercera ventana de funcionamiento para la fibra &oacute;ptica?";
 choices[2]= new Array();
 choices[2][0] = "850 nm";
 choices[2][1] = "1310 nm";
 choices[2][2] = "1480 nm";
 choices[2][3] = "1550 nm";
 answers[2] = 3;
 units[2] = ['107'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 884. AGE A2 2015";
 preguntaids[2] = 884


//  Id pregunta: 7373 Año de creación de pregunta: 2010
 questions[3]= "4)  Dentro de los est&aacute;ndares XML, aquel  donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[3]= new Array();
 choices[3][0] = "DTD";
 choices[3][1] = "XSL";
 choices[3][2] = "XLL";
 choices[3][3] = "DHTML";
 answers[3] = 2;
 units[3] = ['74'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7373. Examen TIC B 2009";
 preguntaids[3] = 7373


//  Id pregunta: 8738 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes situaciones NO puede considerarse un incidente?";
 choices[4]= new Array();
 choices[4][0] = "Fallo hardware.";
 choices[4][1] = "Un usuario no autorizado de la cuenta de un usuario.";
 choices[4][2] = "Un evento cuyo impacto no genere una interrupci&oacute;n prolongada del servicio.";
 choices[4][3] = "Todos los anteriores se considerar&iacute;an incidentes.";
 answers[4] = 3;
 units[4] = ['45'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 8738. ";
 preguntaids[4] = 8738


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[5]= "6)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[5]= new Array();
 choices[5][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[5][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[5][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[5][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[5] = 2;
 units[5] = ['1'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[5] = 18


//  Id pregunta: 3094 Año de creación de pregunta: 2002
 questions[6]= "7)  Una base de datos multidimensional:";
 choices[6]= new Array();
 choices[6][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[6][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[6][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[6][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[6] = 1;
 units[6] = ['72', '73'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3094. ";
 preguntaids[6] = 3094


//  Id pregunta: 6504 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes conceptos se definen en X.500?";
 choices[7]= new Array();
 choices[7][0] = "DIB, que se comunica con el DSA utilizando el protocolo DAP. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. DMO que gestiona un dominio DMD";
 choices[7][1] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DIT, donde se almacena la informaci&oacute;n en un directorio X.500. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's.";
 choices[7][2] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DAP, que es el protocolo utilizado por un DUA para comunicarse con un DSA. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's.";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = 2;
 units[7] = ['116'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 6504. ";
 preguntaids[7] = 6504


//  Id pregunta: 9790 Año de creación de pregunta: 2015
 questions[8]= "9)  No es objetivo de la Ley 39/2015:";
 choices[8]= new Array();
 choices[8][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[8][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[8][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[8][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[8] = 2;
 units[8] = ['7', '47'];
 blocks[8] = ['A2', 'B1'];
 comments[8] = "Id Pregunta: 9790. ";
 preguntaids[8] = 9790


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[9]= "10)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[9]= new Array();
 choices[9][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[9][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[9][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[9][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[9] = 0;
 units[9] = ['8'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 256. Ley 39/2015";
 preguntaids[9] = 256


//  Id pregunta: 9808 Año de creación de pregunta: 2015
 questions[10]= "11)  datos.gob.es...";
 choices[10]= new Array();
 choices[10][0] = "&hellip; es una iniciativa con el fin de promocionar la protecci&oacute;n de datos de car&aacute;cter personal en Espa&ntilde;a.";
 choices[10][1] = "&hellip; es una sede electr&oacute;nica para la reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.";
 choices[10][2] = "&hellip; aloja el Portal de la Transparencia.";
 choices[10][3] = "&hellip; aloja el Cat&aacute;logo Nacional de datos abiertos.";
 answers[10] = 3;
 units[10] = ['27'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 9808. ";
 preguntaids[10] = 9808


//  Id pregunta: 2715 Año de creación de pregunta: 2002
 questions[11]= "12)  Cuando para un archivo disponemos de dos estructuras o zonas distintas, zona de registros y zona de &iacute;ndices, y no hay punteros entre los registros, entonces estamos hablando de archivos con organizaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Secuencial";
 choices[11][1] = "Secuencial indexada";
 choices[11][2] = "Secuencial indexada encadenada";
 choices[11][3] = "Semi-indexada";
 answers[11] = 1;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2715. ";
 preguntaids[11] = 2715


//  Id pregunta: 4254 Año de creación de pregunta: 2006
 questions[12]= "13)  &iquest;Qu&eacute; herramientas de reingenier&iacute;a se engloban en un paquete CASE?";
 choices[12]= new Array();
 choices[12][0] = "Via Center.";
 choices[12][1] = "CA-Metrics.";
 choices[12][2] = "Cadre.";
 choices[12][3] = "ADW.";
 answers[12] = 0;
 units[12] = ['96', '97'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 4254. ";
 preguntaids[12] = 4254


//  Id pregunta: 3626 Año de creación de pregunta: 2002
 questions[13]= "14)  En un sistema de tiempo real, la captura de est&iacute;mulos del entorno por el sistema se puede llevar  cabo por comprobaci&oacute;n de los dispositivos sensores cada cierto intervalo de tiempo. Esta t&eacute;cnica se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Muestreo o 'polling'.";
 choices[13][1] = "Tiempo real cr&iacute;tico.";
 choices[13][2] = "Interrupci&oacute;n.";
 choices[13][3] = "Tiempo real no cr&iacute;tico.";
 answers[13] = 0;
 units[13] = ['86'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3626. ";
 preguntaids[13] = 3626


//  Id pregunta: 8978 Año de creación de pregunta: 2013
 questions[14]= "15)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[14]= new Array();
 choices[14][0] = "El nombre o denominiaci&oacute;n social";
 choices[14][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[14][2] = "Los datos de su inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[14][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[14] = 1;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 8978. Ley 34/2002, art&iacute;culo 10";
 preguntaids[14] = 8978


//  Id pregunta: 9204 Año de creación de pregunta: 2014
 questions[15]= "16)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[15]= new Array();
 choices[15][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[15][1] = "Persona que accede a datos no autorizados.";
 choices[15][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[15][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[15] = 0;
 units[15] = ['119'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9204. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[15] = 9204


//  Id pregunta: 7348 Año de creación de pregunta: 2010
 questions[16]= "17)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, marca el periodo de prescripci&oacute;n de una infracci&oacute;n grave en:";
 choices[16]= new Array();
 choices[16][0] = "1 a&ntilde;o";
 choices[16][1] = "2 a&ntilde;os";
 choices[16][2] = "6 meses";
 choices[16][3] = "10 meses";
 answers[16] = 1;
 units[16] = ['35'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 7348. Examen TIC B 2009";
 preguntaids[16] = 7348


//  Id pregunta: 9250 Año de creación de pregunta: 2014
 questions[17]= "18)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[17]= new Array();
 choices[17][0] = "S&iacute;, mediante un flujo de datos.";
 choices[17][1] = "S&iacute;, mediante un flujo de control.";
 choices[17][2] = "Si, mediante un proceso iterativo.";
 choices[17][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[17] = 1;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 9250. Examen TIC A2 2013";
 preguntaids[17] = 9250


//  Id pregunta: 9981 Año de creación de pregunta: 2015
 questions[18]= "19)  Se&ntilde;ale la respuesta correcta, seg&uacute;n la Ley Org&aacute;nica 15/1999, el Director de la Agencia de Protecci&oacute;n de Datos es nombrado de entre:";
 choices[18]= new Array();
 choices[18][0] = "Los miembros del Consejo Consultivo, mediante Orden Ministerial, y su mandato es de 4 a&ntilde;os.";
 choices[18][1] = "Los miembros del Consejo Consultivo, mediante Real Decreto, y su mandato es de 4 a&ntilde;os.";
 choices[18][2] = "Los miembros del Consejo Asesor del Ministerio de Justicia, mediante Orden Ministerial, y su mandato es de 5 a&ntilde;os.";
 choices[18][3] = "Los miembros del Consejo de Gobierno, mediante Real Decreto, y su mandato es de 5 a&ntilde;os.";
 answers[18] = 1;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 9981. Examen TIC A2 2014";
 preguntaids[18] = 9981


//  Id pregunta: 8703 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;Qu&eacute; es BitLocker?";
 choices[19]= new Array();
 choices[19][0] = "Una funcionalidad de Windows que permite el cifrado de discos duros completos.";
 choices[19][1] = "Se proporciona desde Windows Vista.";
 choices[19][2] = "Con Windows 7 incorpora la funcionalidad de BiLocker-ToGo para dispositivos USB.";
 choices[19][3] = "Todas son correctas";
 answers[19] = 3;
 units[19] = ['58'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8703. ";
 preguntaids[19] = 8703


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[20]= new Array();
 choices[20][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[20][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[20][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[20][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[20] = 0;
 units[20] = ['22'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 497. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[20] = 497


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[21][1] = "Auditor&iacute;a operativa.";
 choices[21][2] = "Auditor&iacute;a de cumplimiento.";
 choices[21][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[21] = 2;
 units[21] = ['11'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 290. Presupuestos generales";
 preguntaids[21] = 290


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[22]= new Array();
 choices[22][0] = "al menos por 50 Diputados.";
 choices[22][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[22][2] = "por la Mesa del Congreso de los Diputados.";
 choices[22][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[22] = 1;
 units[22] = ['1'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 10. Constituci&oacute;n de 1978";
 preguntaids[22] = 10


//  Id pregunta: 6740 Año de creación de pregunta: 2009
 questions[23]= "24)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[23]= new Array();
 choices[23][0] = "Un determinado virus inform&aacute;tico";
 choices[23][1] = "Difusi&oacute;n masiva de noticias falsas";
 choices[23][2] = "Suplantaci&oacute;n fraudulenta que intentan conseguir informaci&oacute;n valiosa";
 choices[23][3] = "Reenv&iacute;o de mensajes a mucha gente";
 answers[23] = 2;
 units[23] = ['119'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6740. MAP 2008 A1";
 preguntaids[23] = 6740


//  Id pregunta: 6828 Año de creación de pregunta: 2010
 questions[24]= "25)  El CCITT ha pasado a denominarse:";
 choices[24]= new Array();
 choices[24][0] = "UIT-T o ITU-T.";
 choices[24][1] = "CEPT.";
 choices[24][2] = "IEEE.";
 choices[24][3] = "ETSI.";
 answers[24] = 0;
 units[24] = ['48'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 6828. TIC A 2009";
 preguntaids[24] = 6828


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[25]= new Array();
 choices[25][0] = "Tiene car&aacute;cter facultativo.";
 choices[25][1] = "Tiene car&aacute;cter potestativo.";
 choices[25][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[25][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[25] = 1;
 units[25] = ['22'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 500. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[25] = 500


//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[26]= "27)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[26]= new Array();
 choices[26][0] = "Firma electr&oacute;nica avanzada";
 choices[26][1] = "Firma electr&oacute;nica reconocida";
 choices[26][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 1;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[26] = 2483


//  Id pregunta: 3693 Año de creación de pregunta: 2002
 questions[27]= "28)  La complejidad ciclom&aacute;tica tiene que ver con la t&eacute;cnica de:";
 choices[27]= new Array();
 choices[27][0] = "McCall";
 choices[27][1] = "McCabe";
 choices[27][2] = "Hasltead";
 choices[27][3] = "COCOMO";
 answers[27] = 1;
 units[27] = ['93'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3693. ";
 preguntaids[27] = 3693


//  Id pregunta: 2065 Año de creación de pregunta: 2002
 questions[28]= "29)  En relaci&oacute;n con los sistemas abiertos, indique la afirmaci&oacute;n que no es correcta:";
 choices[28]= new Array();
 choices[28][0] = "Los sistemas abiertos son aqu&eacute;llos cuyas especificaciones est&aacute;n aprobadas por organismos independientes de normalizaci&oacute;n";
 choices[28][1] = "En lo tocante a sistemas operativos, sistema abierto es sin&oacute;nimo de Unix";
 choices[28][2] = "Sistemas abiertos son aqu&eacute;llos que pueden ser adquiridos de fuentes distintas en un mercado competitivo";
 choices[28][3] = "Un sistema definido como abierto es capaz de interconectarse con otro de acuerdo con unas normas establecidas";
 answers[28] = 1;
 units[28] = ['43'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2065. ";
 preguntaids[28] = 2065


//  Id pregunta: 5509 Año de creación de pregunta: 2007
 questions[29]= "30)  Mayte ha tecleado desde la l&iacute;nea de comandos del shell de su sistema operativo &ldquo;nslookup www.map.es [enter]&rdquo;. Este comando le dar&aacute; como respuesta en su pantalla:";
 choices[29]= new Array();
 choices[29][0] = "La direcci&oacute;n Ethernet del ordenador de Mayte.";
 choices[29][1] = "El tiempo que tarda un paquete de datos desde la m&aacute;quina de Mayte hasta el servidor del MAP.";
 choices[29][2] = "La direcci&oacute;n IP del MAP.";
 choices[29][3] = "La lista de directorios y archivos del directorio ra&iacute;z del MAP";
 answers[29] = 2;
 units[29] = ['57'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 5509. ";
 preguntaids[29] = 5509


//  Id pregunta: 7626 Año de creación de pregunta: 2010
 questions[30]= "31)  Las aplicaciones a medida desarrolladas a petici&oacute;n de la Administraci&oacute;n General del Estado son consideradas:";
 choices[30]= new Array();
 choices[30][0] = "Software libre.";
 choices[30][1] = "Software propietario.";
 choices[30][2] = "Software de dominio p&uacute;blico.";
 choices[30][3] = "Software de fuentes abiertas, de acuerdo con los criterios de normalizaci&oacute;n y conservaci&oacute;n de las aplicaciones utilizadas para el ejercicio de potestades.";
 answers[30] = 1;
 units[30] = ['41'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 7626. Map 2006";
 preguntaids[30] = 7626


//  Id pregunta: 2820 Año de creación de pregunta: 2002
 questions[31]= "32)  En el subsistema de almacenamiento de un ordenador, se define punto de memoria como:";
 choices[31]= new Array();
 choices[31][0] = "El elemento que almacena un bit";
 choices[31][1] = "El elemento que almacena una palabra";
 choices[31][2] = "El elemento que almacena un byte";
 choices[31][3] = "El elemento que almacena una unidad de datos l&oacute;gicos";
 answers[31] = 0;
 units[31] = ['51'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2820. ";
 preguntaids[31] = 2820


//  Id pregunta: 2955 Año de creación de pregunta: 2002
 questions[32]= "33)  La tercera generaci&oacute;n de la inform&aacute;tica se caracteriza por:";
 choices[32]= new Array();
 choices[32][0] = "El uso de transistores";
 choices[32][1] = "Uso de microprocesadores";
 choices[32][2] = "El uso de los circuitos SSI";
 choices[32][3] = "El uso de v&aacute;lvulas de vacio";
 answers[32] = 2;
 units[32] = ['52'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2955. ";
 preguntaids[32] = 2955


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[33]= new Array();
 choices[33][0] = "Anualmente por el Consejo de Ministros";
 choices[33][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[33][2] = "Al final de cada legislatura por el Gobierno";
 choices[33][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[33] = 0;
 units[33] = ['14'];
 blocks[33] = ['A3'];
 comments[33] = "Id Pregunta: 367. Pol&iacute;ticas de igualdad";
 preguntaids[33] = 367


//  Id pregunta: 5446 Año de creación de pregunta: 2007
 questions[34]= "35)  Un sistema ERP (Enterprise Resource Planning) b&aacute;sicamente act&uacute;a sobre:";
 choices[34]= new Array();
 choices[34][0] = "La capa de datos (SGBD).";
 choices[34][1] = "La capa de l&oacute;gica de negocio.";
 choices[34][2] = "La capa de presentaci&oacute;n.";
 choices[34][3] = "La capa de comunicaci&oacute;n";
 answers[34] = 1;
 units[34] = ['69'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5446. ";
 preguntaids[34] = 5446


//  Id pregunta: 2703 Año de creación de pregunta: 2002
 questions[35]= "36)  Con las siglas SCSI se identifica:";
 choices[35]= new Array();
 choices[35][0] = "Un est&aacute;ndar de facto para la interconexi&oacute;n entre distintas capas de OSI";
 choices[35][1] = "Un est&aacute;ndar para la comunicaci&oacute;n entre el ordenador y los perif&eacute;ricos a &eacute;l conectados";
 choices[35][2] = "Una arquitectura de ordenadores";
 choices[35][3] = "Una tarjeta de video";
 answers[35] = 1;
 units[35] = ['51'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2703. ";
 preguntaids[35] = 2703


//  Id pregunta: 8553 Año de creación de pregunta: 2013
 questions[36]= "37)  Con respecto a los Factores Cr&iacute;ticos de &Eacute;xito y los objetivos de la organizaci&oacute;n, se&ntilde;ale la opci&oacute;n INCORRECTA";
 choices[36]= new Array();
 choices[36][0] = "Los objetivos  son los &quot;fines&quot; hacia los cuales se dirige el esfuerzo y el trabajo de la organizaci&oacute;n";
 choices[36][1] = "Los factores de &eacute;xito son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[36][2] = "Para cada objetivo se debe definir, al menos, un factor de &eacute;xito";
 choices[36][3] = "Los factores de &eacute;xito deben determinarse antes que los objetivos, ya que constituyen la base para definir los mismos de manera precisa";
 answers[36] = 3;
 units[36] = ['83'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 8553. ";
 preguntaids[36] = 8553


//  Id pregunta: 5266 Año de creación de pregunta: 2006
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes categorias de software no estan incluidas tipicamente en un ERP ?";
 choices[37]= new Array();
 choices[37][0] = "Gesti&oacute;n de Nomina";
 choices[37][1] = "Gesti&oacute;n de RRHH";
 choices[37][2] = "Gesti&oacute;n de Contabilidad";
 choices[37][3] = "Gesti&oacute;n de Clientes";
 answers[37] = 3;
 units[37] = ['65'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 5266. ";
 preguntaids[37] = 5266


//  Id pregunta: 3592 Año de creación de pregunta: 2002
 questions[38]= "39)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[38]= new Array();
 choices[38][0] = "Eficiencia";
 choices[38][1] = "Correspondencia";
 choices[38][2] = "Eficacia";
 choices[38][3] = "Capacidad";
 answers[38] = 2;
 units[38] = ['83'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3592. ";
 preguntaids[38] = 3592


//  Id pregunta: 7309 Año de creación de pregunta: 2010
 questions[39]= "40)  En el An&aacute;lisis Estructurado, las entidades externas";
 choices[39]= new Array();
 choices[39][0] = "Definen el Interfaz del Usuario";
 choices[39][1] = "Son parte del sistema";
 choices[39][2] = "Aparecen primero en el Diagrama de Contexto y se van heredando en las explosiones de los DFD's";
 choices[39][3] = "Generan y consumen informaci&oacute;n del sistema";
 answers[39] = 3;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7309. ";
 preguntaids[39] = 7309


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[40]= "41)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[40]= new Array();
 choices[40][0] = "la Administraci&oacute;n General del Estado";
 choices[40][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[40][2] = "las Entidades Locales";
 choices[40][3] = "todas son correctas";
 answers[40] = 3;
 units[40] = ['7'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 234. Ley 39/2015";
 preguntaids[40] = 234


//  Id pregunta: 6802 Año de creación de pregunta: 2010
 questions[41]= "42)  NO corresponde a los principios que deben regir un CAU:";
 choices[41]= new Array();
 choices[41][0] = "Proveer un punto de contacto &uacute;nico al usuario final.";
 choices[41][1] = "Disponer de informaci&oacute;n sobre niveles de servicio para mejorar el servicio proporcionado.";
 choices[41][2] = "Rastrear la organizaci&oacute;n para detectar posibles necesidades no cubiertas.";
 choices[41][3] = "Documentar las soluciones dadas a las incidencias.";
 answers[41] = 2;
 units[41] = ['30'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 6802. TIC A 2009";
 preguntaids[41] = 6802


//  Id pregunta: 1419 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;De qu&eacute; trata el T&iacute;tulo VI de la Constituci&oacute;n Espa&ntilde;ola de 1978?:";
 choices[42]= new Array();
 choices[42][0] = "Del Gobierno y la Administraci&oacute;n.";
 choices[42][1] = "Del Poder Judicial.";
 choices[42][2] = "Econom&iacute;a y Hacienda.";
 choices[42][3] = "De las Relaciones del Gobierno y las Cortes Generales.";
 answers[42] = 1;
 units[42] = ['2'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 1419. ";
 preguntaids[42] = 1419


//  Id pregunta: 6725 Año de creación de pregunta: 2009
 questions[43]= "44)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[43]= new Array();
 choices[43][0] = "RMI";
 choices[43][1] = "JNI";
 choices[43][2] = "JDBC";
 choices[43][3] = "JRM";
 answers[43] = 0;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6725. ";
 preguntaids[43] = 6725


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[44]= "45)  La Mesa del Parlamento europeo estar&aacute; compuesta por:";
 choices[44]= new Array();
 choices[44][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[44][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[44][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[44][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[44] = 3;
 units[44] = ['5'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 146. Uni&oacute;n Europea";
 preguntaids[44] = 146


//  Id pregunta: 2994 Año de creación de pregunta: 2002
 questions[45]= "46)  OLTP son las siglas en ingl&eacute;s de software del tipo:";
 choices[45]= new Array();
 choices[45][0] = "Gestores de bases de datos orientadas a objetos.";
 choices[45][1] = "Gestores estandarizados de bases de datos documentales.";
 choices[45][2] = "Sistemas de Gestion Transaccional.";
 choices[45][3] = "Programas de an&aacute;lisis tipo data warehouse.";
 answers[45] = 2;
 units[45] = ['86'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 2994. ";
 preguntaids[45] = 2994


//  Id pregunta: 2603 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[46]= new Array();
 choices[46][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[46][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[46][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[46][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[46] = 0;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2603. ";
 preguntaids[46] = 2603


//  Id pregunta: 5729 Año de creación de pregunta: 2007
 questions[47]= "48)  &iquest;Qu&eacute; actividades de las siguientes se incluyen en el ciclo de vida cl&aacute;sico, tambi&eacute;n llamado &quot;modelo en cascada&quot;?";
 choices[47]= new Array();
 choices[47][0] = "an&aacute;lisis del sistema, an&aacute;lisis de riesgo, an&aacute;lisis de requisitos";
 choices[47][1] = "an&aacute;lisis de riesgo, an&aacute;lisis de requisitos y codificaci&oacute;n";
 choices[47][2] = "an&aacute;lisis del sistema, prototipos y codificaci&oacute;n";
 choices[47][3] = "dise&ntilde;o, codificaci&oacute;n y pruebas";
 answers[47] = 3;
 units[47] = ['76'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 5729. ";
 preguntaids[47] = 5729


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[48]= "49)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[48]= new Array();
 choices[48][0] = "Diciembre de 1987.";
 choices[48][1] = "Septiembre de 1989.";
 choices[48][2] = "Octubre de 1990.";
 choices[48][3] = "Noviembre de 1980.";
 answers[48] = 1;
 units[48] = ['5'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 156. Uni&oacute;n Europea";
 preguntaids[48] = 156


//  Id pregunta: 9502 Año de creación de pregunta: 2014
 questions[49]= "50)  De los siguientes m&eacute;todos de selecci&oacute;n de inversiones, &iquest;cu&aacute;l de los siguientes es din&aacute;mico?";
 choices[49]= new Array();
 choices[49][0] = "Tasa de rendimiento contable";
 choices[49][1] = "ROI (Return of Investment)";
 choices[49][2] = "Flujo total por unidad monetaria comprometida";
 choices[49][3] = "Tasa interna de retorno";
 answers[49] = 3;
 units[49] = ['40'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 9502. Tasa rendimiento contable= Beneficio/ Inversi&oacute;n; ROI = (Beneficio &ndash; Inversi&oacute;n) / Inversi&oacute;n; Flujo total por unidad monetaria comprometida: Consiste en sumar todos los flujos de caja y dividir el importe obtenido entre el desembolso inicial; TIR = &ldquo;r&rdquo; tal que : &minus;C0 + Q1 / (1+r) + Q2 / (1+r)elevado a 2 + ..... + Qn / (1+r) elevado a n= 0";
 preguntaids[49] = 9502


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[50]= "51)  La Ley 39/2015 tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[50]= new Array();
 choices[50][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[50][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[50][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[50][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[50] = 2;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 211. Ley 39/2015";
 preguntaids[50] = 211


//  Id pregunta: 8267 Año de creación de pregunta: 2011
 questions[51]= "52)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[51]= new Array();
 choices[51][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[51][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[51][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[51][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[51] = 0;
 units[51] = ['7'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 8267. Examen TIC A2 2010 interna";
 preguntaids[51] = 8267


//  Id pregunta: 1460 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico se considera infracci&oacute;n muy grave:";
 choices[52]= new Array();
 choices[52][0] = "El incumplimiento habitual de la obligaci&oacute;n de confirmar la recepci&oacute;n de una aceptaci&oacute;n, cuando no se haya pactado su exclusi&oacute;n o el contrato se haya celebrado con un consumidor.";
 choices[52][1] = "La resistencia, excusa o negativa a la actuaci&oacute;n inspectora de los &oacute;rganos facultados para llevarla a cabo con arreglo a esta Ley.";
 choices[52][2] = "El incumplimiento de la obligaci&oacute;n del prestador de servicios establecida en el apartado 1 del art&iacute;culo 22, en relaci&oacute;n con los procedimientos para revocar el consentimiento prestado por los destinatarios cuando no constituya infracci&oacute;n grave.";
 choices[52][3] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene, en virtud de lo dispuesto en el art&iacute;culo 11.";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 1460. ";
 preguntaids[52] = 1460


//  Id pregunta: 2798 Año de creación de pregunta: 2002
 questions[53]= "54)  Elija la respuesta falsa respecto de OLAP.";
 choices[53]= new Array();
 choices[53][0] = "Implica el uso de t&eacute;cnicas multidimensionales.";
 choices[53][1] = "Realiza el an&aacute;lisis Offline de los datos.";
 choices[53][2] = "Puede utilizar bases de datos relacionales.";
 choices[53][3] = "Puede presentar vistas de los datos en un numero reducido de dimensiones.";
 answers[53] = 1;
 units[53] = ['72'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2798. ";
 preguntaids[53] = 2798


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[54]= "55)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[54]= new Array();
 choices[54][0] = "90";
 choices[54][1] = "50";
 choices[54][2] = "64";
 choices[54][3] = "60";
 answers[54] = 1;
 units[54] = ['5'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 151. Uni&oacute;n Europea";
 preguntaids[54] = 151


//  Id pregunta: 7830 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Qu&eacute; es Atom?";
 choices[55]= new Array();
 choices[55][0] = "Sistema de an&aacute;lisis XML.";
 choices[55][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos.";
 choices[55][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas.";
 choices[55][3] = "Sintaxis de una DTD.";
 answers[55] = 1;
 units[55] = ['125'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7830. ";
 preguntaids[55] = 7830


//  Id pregunta: 5004 Año de creación de pregunta: 2002
 questions[56]= "57)  Mbone es:";
 choices[56]= new Array();
 choices[56][0] = "una versi&oacute;n avanzada de Internet 2";
 choices[56][1] = "un backbone especializado en tranmisi&oacute;n de datos multimedia s&oacute;lo en tiempo real";
 choices[56][2] = "el backbone que une todas las dependencias del MIT para intercambio de informaci&oacute;n cient&iacute;fica y tecnol&oacute;gica";
 choices[56][3] = "una red virtual sobre porciones de internet con islas IP multicast";
 answers[56] = 3;
 units[56] = ['103'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5004. ";
 preguntaids[56] = 5004


//  Id pregunta: 1140 Año de creación de pregunta: 2016
 questions[57]= "58)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[57]= new Array();
 choices[57][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[57][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[57][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[57][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[57] = 2;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 1140. ";
 preguntaids[57] = 1140


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[58]= new Array();
 choices[58][0] = "De los derechos y deberes fundamentales.";
 choices[58][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[58][2] = "Derechos y libertades.";
 choices[58][3] = "De la Corona.";
 answers[58] = 2;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 74. Constituci&oacute;n de 1978";
 preguntaids[58] = 74


//  Id pregunta: 8373 Año de creación de pregunta: 2011
 questions[59]= "60)  Respecto a AJAX es falso que:";
 choices[59]= new Array();
 choices[59][0] = "Reduce el volumen de informaci&oacute;n a intercambiar entre el cliente y el servidor frente al empleo del refresco de p&aacute;gina completa.";
 choices[59][1] = "No se puede emplear para desarrollar aplicaciones RIA.";
 choices[59][2] = "Existen m&uacute;ltiples liber&iacute;as para simplificar el desarrollo con AJAX.";
 choices[59][3] = "Son las siglas de Asynchronous JavaScript And XML.";
 answers[59] = 1;
 units[59] = ['62'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8373. Analista Ayto. Madrid 2010";
 preguntaids[59] = 8373


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[60]= new Array();
 choices[60][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[60][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[60][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[60][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[60] = 0;
 units[60] = ['15'];
 blocks[60] = ['A3'];
 comments[60] = "Id Pregunta: 419. Mercado laboral";
 preguntaids[60] = 419


//  Id pregunta: 1030 Año de creación de pregunta: 2016
 questions[61]= "62)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[61]= new Array();
 choices[61][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[61][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[61][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[61][3] = "Todas son correctas.";
 answers[61] = 3;
 units[61] = ['4', '7', '8', '9'];
 blocks[61] = ['A1', 'A2'];
 comments[61] = "Id Pregunta: 1030. Ley 40/2015";
 preguntaids[61] = 1030


//  Id pregunta: 8567 Año de creación de pregunta: 2013
 questions[62]= "63)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[62]= new Array();
 choices[62][0] = "Assets.";
 choices[62][1] = "Rights.";
 choices[62][2] = "Resources.";
 choices[62][3] = "Parties.";
 answers[62] = 2;
 units[62] = ['41'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 8567. ";
 preguntaids[62] = 8567


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[63]= new Array();
 choices[63][0] = "10 d&iacute;as.";
 choices[63][1] = "15 d&iacute;as.";
 choices[63][2] = "1 mes.";
 choices[63][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[63] = 0;
 units[63] = ['7'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 207. Ley 39/2015";
 preguntaids[63] = 207


//  Id pregunta: 7171 Año de creación de pregunta: 2010
 questions[64]= "65)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[64]= new Array();
 choices[64][0] = "GET";
 choices[64][1] = "HEAD";
 choices[64][2] = "POST";
 choices[64][3] = "SERVICE";
 answers[64] = 1;
 units[64] = ['103'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 7171. Castilla La Mancha 2009";
 preguntaids[64] = 7171


//  Id pregunta: 5318 Año de creación de pregunta: 2006
 questions[65]= "66)  Protocolo ligero que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos, incluso detr&aacute;s de un cortafuegos";
 choices[65]= new Array();
 choices[65][0] = "CORBA";
 choices[65][1] = "SOAP";
 choices[65][2] = "RMI";
 choices[65][3] = "DCOM";
 answers[65] = 1;
 units[65] = ['85'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 5318. ";
 preguntaids[65] = 5318


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[66]= "67)  La ley de Okun se refiere a:";
 choices[66]= new Array();
 choices[66][0] = "La relaci&oacute;n emp&iacute;rica entre las variables tasa de desempleo y producci&oacute;n de un pa&iacute;s.";
 choices[66][1] = "La relaci&oacute;n inversa entre la inflaci&oacute;n y el desempleo de un pa&iacute;s.";
 choices[66][2] = "La relaci&oacute;n entre la tasa de desempleo y el n&uacute;mero de vacantes sin cubrir respecto del total de empleos.";
 choices[66][3] = "Las relaciones entre los insumos capital (K), trabajo (L) y tecnolog&iacute;a o productividad total de los factores (PTF)";
 answers[66] = 0;
 units[66] = ['15'];
 blocks[66] = ['A3'];
 comments[66] = "Id Pregunta: 425. Modelo econ&oacute;mico";
 preguntaids[66] = 425


//  Id pregunta: 1822 Año de creación de pregunta: 2016
 questions[67]= "68)  Entre las distintas fases de la ingenier&iacute;a de requisitos, indique cu&aacute;l es la opci&oacute;n correcta que refleja la fase en la que se comprueba que los requisitos implementados se corresponden con los que inicialmente se pretend&iacute;an:";
 choices[67]= new Array();
 choices[67][0] = "Implementar requisitos";
 choices[67][1] = "Verificar requisitos";
 choices[67][2] = "Analizar requisitos";
 choices[67][3] = "Validar requisitos";
 answers[67] = 3;
 units[67] = ['84'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 1822. ";
 preguntaids[67] = 1822


//  Id pregunta: 5541 Año de creación de pregunta: 2007
 questions[68]= "69)  &iquest;Cu&aacute;les son los elementos en que se desglosa el desarrollo de un sistema de informaci&oacute;n, seg&uacute;n M&eacute;trica v3?";
 choices[68]= new Array();
 choices[68][0] = "Revisiones t&eacute;cnicas formales e inspecciones informales.";
 choices[68][1] = "Procesos principales, actividades y tareas.";
 choices[68][2] = "Fases, m&oacute;dulos, actividades y tareas.";
 choices[68][3] = "Interfaces y fases.";
 answers[68] = 1;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 5541. ";
 preguntaids[68] = 5541


//  Id pregunta: 1832 Año de creación de pregunta: 2016
 questions[69]= "70)  Dentro de la familia de est&aacute;ndares ISO 27000, &iquest;qu&eacute; norma se encarga de ayudar a las organizaciones a medir, a informar y, por lo tanto, a mejorar sistem&aacute;ticamente la eficacia de su Sistema de Informaci&oacute;n de Gesti&oacute;n de la Seguridad (SGSI)?";
 choices[69]= new Array();
 choices[69][0] = "ISO 27001";
 choices[69][1] = "ISO 27002";
 choices[69][2] = "ISO 27003";
 choices[69][3] = "ISO 27004";
 answers[69] = 3;
 units[69] = ['46'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 1832. ";
 preguntaids[69] = 1832


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[70]= "71)  Respecto al protocolo OCSP, es FALSO que:";
 choices[70]= new Array();
 choices[70][0] = "Los mensajes OCSP son codificados en ASN.1.";
 choices[70][1] = "Est&aacute; definido en el RFC 2560.";
 choices[70][2] = "Tanto la petici&oacute;n como la respuesta deben ir firmadas.";
 choices[70][3] = "Puede usar SMTP como mecanismo de transporte.";
 answers[70] = 2;
 units[70] = ['78'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 796. AGE A2 2015";
 preguntaids[70] = 796


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[71]= "72)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[71]= new Array();
 choices[71][0] = "De un mes si el acto fuera presunto";
 choices[71][1] = "De un mes si el acto fuera expreso";
 choices[71][2] = "De un mes en cualquier caso";
 choices[71][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[71] = 1;
 units[71] = ['8'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 259. Ley 39/2015";
 preguntaids[71] = 259


//  Id pregunta: 4855 Año de creación de pregunta: 2002
 questions[72]= "73)  En una red de &aacute;rea extensa (WAN):";
 choices[72]= new Array();
 choices[72][0] = "Los tiempos de propagaci&oacute;n son bajos";
 choices[72][1] = "Las velocidades de transmisi&oacute;n de datos son lentas, sobre todo comparadas con las LAN";
 choices[72][2] = "Baja tasa de errores, haciendo innecesario procedimientos efectivos para la detecci&oacute;n y su recuperaci&oacute;n";
 choices[72][3] = "Los retrasos son predecibles";
 answers[72] = 1;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4855. ";
 preguntaids[72] = 4855


//  Id pregunta: 10900 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[73]= new Array();
 choices[73][0] = "Direccion destino IP";
 choices[73][1] = "Direccion origen IP";
 choices[73][2] = "Protocolo";
 choices[73][3] = "Puerto";
 answers[73] = 1;
 units[73] = ['102'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10900. ";
 preguntaids[73] = 10900


//  Id pregunta: 8315 Año de creación de pregunta: 2011
 questions[74]= "75)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;c&oacute;mo se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[74]= new Array();
 choices[74][0] = "WT (Window Toolkit)";
 choices[74][1] = "AWT (Abstract Window Toolkit)";
 choices[74][2] = "JWS (Java Window Set)";
 choices[74][3] = "WS (Windows Set)";
 answers[74] = 1;
 units[74] = ['64'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8315. Examen UPM A2 2011";
 preguntaids[74] = 8315


