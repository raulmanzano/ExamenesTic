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
//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[0]= new Array();
 choices[0][0] = "Veinticinco.";
 choices[0][1] = "Veintisiete.";
 choices[0][2] = "Veintinueve.";
 choices[0][3] = "Cuarenta y uno.";
 answers[0] = 1;
 units[0] = ['5'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 124. Uni&oacute;n Europea";
 preguntaids[0] = 124


//  Id pregunta: 10553 Año de creación de pregunta: 2015
 questions[1]= "2)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[1]= new Array();
 choices[1][0] = "Controlar todos los proveedores externos de TI";
 choices[1][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[1][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[1][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[1] = 1;
 units[1] = ['101'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 10553. ";
 preguntaids[1] = 10553


//  Id pregunta: 1527 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;En cu&aacute;l de los siguientes pa&iacute;ses se usa el mismo sistema de Televisi&oacute;n Digital Terrestre que usamos en Europa?";
 choices[2]= new Array();
 choices[2][0] = "Australia.";
 choices[2][1] = "EEUU.";
 choices[2][2] = "Chile.";
 choices[2][3] = "Jap&oacute;n.";
 answers[2] = 0;
 units[2] = ['115'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1527. ";
 preguntaids[2] = 1527


//  Id pregunta: 10084 Año de creación de pregunta: 2015
 questions[3]= "4)  El protocolo DHCP (Dynamic Host Configuration Protocol) y DHCPv6 (DHCP for IPv6) est&aacute;n definidos en los documentos:";
 choices[3]= new Array();
 choices[3][0] = "RFC 792 y RFC 4361, respectivamente.";
 choices[3][1] = "RFC 826 y RFC 3315, respectivamente.";
 choices[3][2] = "RFC 1034 y RFC 4361, respectivamente.";
 choices[3][3] = "RFC 2131 y RFC 3315, respectivamente.";
 answers[3] = 3;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10084. Examen TIC A2 2014";
 preguntaids[3] = 10084


//  Id pregunta: 4609 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Qu&eacute; es un convertidor anal&oacute;gico/digital (ADC)?:";
 choices[4]= new Array();
 choices[4][0] = "Un convertidor similar a uno digital";
 choices[4][1] = "Un programa que convierte formato anal&oacute;gico a formato digital";
 choices[4][2] = "Un sistema que lee valores continuos y saca valores discretos";
 choices[4][3] = "Nada de lo anterior es correcto";
 answers[4] = 2;
 units[4] = ['104'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4609. ";
 preguntaids[4] = 4609


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[5]= "6)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[5]= new Array();
 choices[5][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[5][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[5][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[5][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[5] = 1;
 units[5] = ['11'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 263. Direcci&oacute;n p&uacute;blica";
 preguntaids[5] = 263


//  Id pregunta: 981 Año de creación de pregunta: 2016
 questions[6]= "7)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n segun la ley 40/2015 a:";
 choices[6]= new Array();
 choices[6][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[6][1] = "el Consejo de Estado";
 choices[6][2] = "el Congreso";
 choices[6][3] = "las Cortes Generales";
 answers[6] = 0;
 units[6] = ['4', '7', '8', '9'];
 blocks[6] = ['A1', 'A2'];
 comments[6] = "Id Pregunta: 981. Ley 40/2015";
 preguntaids[6] = 981


//  Id pregunta: 1037 Año de creación de pregunta: 2016
 questions[7]= "8)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[7]= new Array();
 choices[7][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[7][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[7][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[7][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[7] = 0;
 units[7] = ['4', '7', '8', '9'];
 blocks[7] = ['A1', 'A2'];
 comments[7] = "Id Pregunta: 1037. Ley 40/2015";
 preguntaids[7] = 1037


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;alar la respuesta FALSA respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[8]= new Array();
 choices[8][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[8][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[8][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[8][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[8] = 1;
 units[8] = ['22'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 518. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[8] = 518


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[9]= new Array();
 choices[9][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[9][1] = "Autorizar indultos generales.";
 choices[9][2] = "Sancionar las leyes.";
 choices[9][3] = "Promulgar las leyes.";
 answers[9] = 1;
 units[9] = ['2'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 99. AGE A2 2015";
 preguntaids[9] = 99


//  Id pregunta: 9097 Año de creación de pregunta: 2014
 questions[10]= "11)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[10]= new Array();
 choices[10][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[10][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[10][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[10][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[10] = 2;
 units[10] = ['77'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9097. Examen TIC-A1 2013";
 preguntaids[10] = 9097


//  Id pregunta: 5630 Año de creación de pregunta: 2007
 questions[11]= "12)  Los prestadores de servicios de certificaci&oacute;n con car&aacute;cter previo al cese definitivo de su actividad, &iquest;que gesti&oacute;n deber&aacute;n realizar con la informaci&oacute;n relativa a los certificados electr&oacute;nicos cuya vigencia haya sido extinguida?";
 choices[11]= new Array();
 choices[11][0] = "Remitirla al ministerio competente.";
 choices[11][1] = "Remitirla al prestador al que se propone la gesti&oacute;n de los certificados vigentes.";
 choices[11][2] = "Ninguna. La ley solo obliga la transferencia de la informaci&oacute;n relativa a los certificados vigentes.";
 choices[11][3] = "Debe conservarla en soporte perdurable durante al menos 30 anos.";
 answers[11] = 0;
 units[11] = ['77'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 5630. Ley 59/2003, art&iacute;culo 21";
 preguntaids[11] = 5630


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[12]= new Array();
 choices[12][0] = "A los ministros.";
 choices[12][1] = "Las respuestas a) y b) son correctas.";
 choices[12][2] = "Las respuestas a) y b) no son correctas.";
 choices[12][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[12] = 1;
 units[12] = ['11'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 279. Presupuestos generales";
 preguntaids[12] = 279


//  Id pregunta: 8656 Año de creación de pregunta: 2013
 questions[13]= "14)  &iquest;Desde el punto de vista de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[13]= new Array();
 choices[13][0] = "La cinta est&aacute; orientada al almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[13][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[13][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[13][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[13] = 1;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8656. ";
 preguntaids[13] = 8656


//  Id pregunta: 9821 Año de creación de pregunta: 2015
 questions[14]= "15)  El DNIe 3.0:";
 choices[14]= new Array();
 choices[14][0] = "Permite la lectura sin PIN del certificado de firma.";
 choices[14][1] = "Incorpora tecnolog&iacute;a de lectura sin contacto.";
 choices[14][2] = "Reduce la vigencia de los certificados de identificaci&oacute;n y firma a 5 a&ntilde;os.";
 choices[14][3] = "Todas las anteriores.";
 answers[14] = 1;
 units[14] = ['78'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9821. A. Permite la lectura sin PIN del certificado de identificaci&oacute;n, no de firma. C. Amplia la vigencia de los certificados (antes 30 meses).";
 preguntaids[14] = 9821


//  Id pregunta: 7099 Año de creación de pregunta: 2010
 questions[15]= "16)  El Esquema Nacional de Seguridad establece que las l&iacute;neas de defensa han de estar constituidas por medidas de distinto tipo, &iquest;Cu&aacute;l de las siguientes no es una de ellos?";
 choices[15]= new Array();
 choices[15][0] = "Organizativa";
 choices[15][1] = "Sem&aacute;ntica";
 choices[15][2] = "L&oacute;gica";
 choices[15][3] = "F&iacute;sica";
 answers[15] = 1;
 units[15] = ['46'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 7099. Art&iacute;culo 8 ENS";
 preguntaids[15] = 7099


//  Id pregunta: 2847 Año de creación de pregunta: 2002
 questions[16]= "17)  En relaci&oacute;n a las diferentes tecnolog&iacute;as de buses:";
 choices[16]= new Array();
 choices[16][0] = "ISA es posterior a MCA";
 choices[16][1] = "AGP es posterior a PCI";
 choices[16][2] = "XT es posterior a ISA";
 choices[16][3] = "EISA es anterior a MCA";
 answers[16] = 1;
 units[16] = ['51'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2847. Orden cronologico: ISA-PCI-USB-AGP";
 preguntaids[16] = 2847


//  Id pregunta: 10937 Año de creación de pregunta: 2015
 questions[17]= "18)  En relaci&oacute;n a la Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[17]= new Array();
 choices[17][0] = "Al menos dos veces al a&ntilde;o convocar&aacute; a los representantes de los organismos que, con funciones similares a las desarrolladas por ella, hayan sido creados por las Comunidades Aut&oacute;nomas en ejercicio de sus competencias.";
 choices[17][1] = "Pertenece al Ministerio de Industria, Energia y Turismo.";
 choices[17][2] = "A esta reuni&oacute;n podr&aacute; ser convocado un representante de la Administraci&oacute;n Local propuesto por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[17][3] = "No se ha creado a&uacute;n.";
 answers[17] = 2;
 units[17] = ['22'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 10937. ";
 preguntaids[17] = 10937


//  Id pregunta: 8483 Año de creación de pregunta: 2011
 questions[18]= "19)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[18]= new Array();
 choices[18][0] = "El grado de intencionalidad.";
 choices[18][1] = "El volumen de negocio o actividad del infractor.";
 choices[18][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[18][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[18] = 3;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 8483. Examen UPM A2 2011";
 preguntaids[18] = 8483


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[19]= new Array();
 choices[19][0] = "Lean startup";
 choices[19][1] = "Business Model Canvas";
 choices[19][2] = "Dynamic system Development method";
 choices[19][3] = "Lean software development";
 answers[19] = 2;
 units[19] = ['34'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 557. Metodologias Lean";
 preguntaids[19] = 557


//  Id pregunta: 995 Año de creación de pregunta: 2016
 questions[20]= "21)  Segun la ley 40/2015 los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[20]= new Array();
 choices[20][0] = "los &oacute;rganos administrativos";
 choices[20][1] = "las entidades dependientes";
 choices[20][2] = "las unidades administrativas";
 choices[20][3] = "los servicios comunes";
 answers[20] = 2;
 units[20] = ['4', '7', '8', '9'];
 blocks[20] = ['A1', 'A2'];
 comments[20] = "Id Pregunta: 995. Ley 40/2015";
 preguntaids[20] = 995


//  Id pregunta: 3255 Año de creación de pregunta: 2003
 questions[21]= "22)  En los sistemas de aplicaciones transaccionales online (OLTP), &iquest;como se define el concepto de throughput?:";
 choices[21]= new Array();
 choices[21][0] = "Mayor tiempo de respuesta por transacci&oacute;n.";
 choices[21][1] = "Cantidad de trabajo realizada en un determinado tiempo.";
 choices[21][2] = "Unidad m&iacute;nima de recursos f&iacute;sicos necesarios para ejecutar una transacci&oacute;n.";
 choices[21][3] = "N&uacute;mero de hilos (threads) de ejecuci&oacute;n paralela de transacciones.";
 answers[21] = 1;
 units[21] = ['86'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3255. Junta Andaluc&iacute;a";
 preguntaids[21] = 3255


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[22]= "23)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[22]= new Array();
 choices[22][0] = "tienen capacidad de obrar limitada";
 choices[22][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[22][2] = "no tienen capacidad de obrar";
 choices[22][3] = "ninguna es correcta";
 answers[22] = 2;
 units[22] = ['7'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 225. Ley 39/2015";
 preguntaids[22] = 225


//  Id pregunta: 4919 Año de creación de pregunta: 2002
 questions[23]= "24)  La t&eacute;cnica de acceso al medio utilizada en redes Ethernet se denomina:";
 choices[23]= new Array();
 choices[23][0] = "CSMA";
 choices[23][1] = "CSMA/CD";
 choices[23][2] = "CSMA/CA";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 1;
 units[23] = ['112'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4919. ";
 preguntaids[23] = 4919


//  Id pregunta: 8350 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[24]= new Array();
 choices[24][0] = "IEEE";
 choices[24][1] = "ISO";
 choices[24][2] = "IEC";
 choices[24][3] = "ANSI";
 answers[24] = 3;
 units[24] = ['48'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 8350. Examen UC3M 2010";
 preguntaids[24] = 8350


//  Id pregunta: 8429 Año de creación de pregunta: 2011
 questions[25]= "26)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[25]= new Array();
 choices[25][0] = "Los est&aacute;ndares abiertos";
 choices[25][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[25][2] = "Los dos anteriores";
 choices[25][3] = "Los dos primeros y los que determine la autoridad compentente mediante disposici&oacute;n publicada en la sede judicial";
 answers[25] = 2;
 units[25] = ['2'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 8429. ";
 preguntaids[25] = 8429


//  Id pregunta: 1917 Año de creación de pregunta: 2016
 questions[26]= "27)  En relaci&oacute;n con el protocolo SMTP, &iquest;Cu&aacute;l de las siguientes aseveraciones se cumple?:";
 choices[26]= new Array();
 choices[26][0] = "Para leer correo de entrada y componer correo de salida los usuarios utilizan clientes SMTP";
 choices[26][1] = "SMTP es un protocolo no compatible con IPv6";
 choices[26][2] = "Los anfitriones externos, servidores de correo, se ponen en contacto con los anfitriones internos, servidores de correo, a trav&eacute;s de SMTP";
 choices[26][3] = "SMTP es un protocolo de capa de nivel de sesi&oacute;n.";
 answers[26] = 2;
 units[26] = ['116'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1917. ";
 preguntaids[26] = 1917


//  Id pregunta: 1049 Año de creación de pregunta: 2016
 questions[27]= "28)  Cu&aacute;l de los siguientes NO es un algoritmo de funciones hash:";
 choices[27]= new Array();
 choices[27][0] = "SHA-256.";
 choices[27][1] = "BASH.";
 choices[27][2] = "WHIRLPOOL.";
 choices[27][3] = "HAVAL.";
 answers[27] = 1;
 units[27] = ['76'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1049. ";
 preguntaids[27] = 1049


//  Id pregunta: 9831 Año de creación de pregunta: 2015
 questions[28]= "29)  Son proyectos SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica) en Espa&ntilde;a:";
 choices[28]= new Array();
 choices[28][0] = "SIC y SILG.";
 choices[28][1] = "SIGNA y SIANE.";
 choices[28][2] = "SIGMA y SIGPAC.";
 choices[28][3] = "SIGMAPA y SEGRO.";
 answers[28] = 1;
 units[28] = ['71'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9831. ";
 preguntaids[28] = 9831


//  Id pregunta: 1001 Año de creación de pregunta: 2016
 questions[29]= "30)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[29]= new Array();
 choices[29][0] = "Director General";
 choices[29][1] = "Secretario general";
 choices[29][2] = "Subdirector general";
 choices[29][3] = "Subsecretario";
 answers[29] = 0;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 1001. Ley 40/2015";
 preguntaids[29] = 1001


//  Id pregunta: 4314 Año de creación de pregunta: 2004
 questions[30]= "31)  En telefon&iacute;a m&oacute;vil GSM, &iquest;qu&eacute; bases de datos se utilizan para almacenar datos de cliente?";
 choices[30]= new Array();
 choices[30][0] = "VLR y HLR";
 choices[30][1] = "EIR y HLR";
 choices[30][2] = "MSC y VLR";
 choices[30][3] = "EIR y MSC";
 answers[30] = 0;
 units[30] = ['117'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4314. Similar a examen TIC MAP A 2004";
 preguntaids[30] = 4314


//  Id pregunta: 8433 Año de creación de pregunta: 2011
 questions[31]= "32)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[31]= new Array();
 choices[31][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[31][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[31][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[31][3] = "Ninguno de los anteriores";
 answers[31] = 2;
 units[31] = ['2'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 8433. ";
 preguntaids[31] = 8433


//  Id pregunta: 1032 Año de creación de pregunta: 2016
 questions[32]= "33)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[32]= new Array();
 choices[32][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[32][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[32][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[32][3] = "Todas son correctas.";
 answers[32] = 3;
 units[32] = ['4', '7', '8', '9'];
 blocks[32] = ['A1', 'A2'];
 comments[32] = "Id Pregunta: 1032. Ley 40/2015";
 preguntaids[32] = 1032


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[33]= new Array();
 choices[33][0] = "Indirecta.";
 choices[33][1] = "Directa.";
 choices[33][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[33][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[33] = 1;
 units[33] = ['14'];
 blocks[33] = ['A3'];
 comments[33] = "Id Pregunta: 1291. ";
 preguntaids[33] = 1291


//  Id pregunta: 6642 Año de creación de pregunta: 2009
 questions[34]= "35)  En un radioenlace:";
 choices[34]= new Array();
 choices[34][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[34][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[34][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[34][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[34] = 1;
 units[34] = ['117'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 6642. ";
 preguntaids[34] = 6642


//  Id pregunta: 8127 Año de creación de pregunta: 2011
 questions[35]= "36)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA:";
 choices[35]= new Array();
 choices[35][0] = "Lluirex - Valencia";
 choices[35][1] = "MAX - Madrid";
 choices[35][2] = "LinKat - Catalu&ntilde;a";
 choices[35][3] = "mEDUxa - Baleares";
 answers[35] = 3;
 units[35] = ['66'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8127. Examen TIC A2 2010 interna";
 preguntaids[35] = 8127


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[36]= "37)  Componen la Comisi&oacute;n Europea:";
 choices[36]= new Array();
 choices[36][0] = "Un Comisario por cada Estado miembro.";
 choices[36][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[36][2] = "Dos Comisarios por cada Estado miembro.";
 choices[36][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[36] = 0;
 units[36] = ['5'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 127. Uni&oacute;n Europea";
 preguntaids[36] = 127


//  Id pregunta: 7889 Año de creación de pregunta: 2011
 questions[37]= "38)  En relaci&oacute;n a la seguridad en redes inal&aacute;mbricas, cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[37]= new Array();
 choices[37][0] = "Entre los mecanismos b&aacute;sicos de seguridad aplicables en redes inal&aacute;mbricas, se encuentran: 1. Ocultaci&oacute;n del SSID (identificador de red). 2. Filtrado MAC. 3. Ajuste de potencia. 4. Uso de mecanismos de autenticaci&oacute;n y cifrado.";
 choices[37][1] = "El ataque DoS, &quot;Clear Channel Assesments&quot;, basado en falsear el mecanismo CCA, afecta a dispositivos 802.11a, 802.11b y 802.11g.";
 choices[37][2] = "Una RSN &quot;Robust Security Network&quot; es una red de seguridad en la que todas las asociaciones entre sus miembros se basan en fuertes mecanismos criptogr&aacute;ficos y de autenticaci&oacute;n.";
 choices[37][3] = "AirMagnet, Airodump, Aireplay, Kismet y Netstumbler, son herramientas inform&aacute;ticas que permiten estudiar redes inal&aacute;mbricas.";
 answers[37] = 1;
 units[37] = ['108'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7889. Examen TIC A1 2010";
 preguntaids[37] = 7889


//  Id pregunta: 5589 Año de creación de pregunta: 2007
 questions[38]= "39)  La codificaci&oacute;n Manchester se caracteriza por:";
 choices[38]= new Array();
 choices[38][0] = "Usar 1 V para el valor &ldquo;1&rdquo; y -1 V para el valor &ldquo;0&rdquo;";
 choices[38][1] = "Dividir cada bit en dos intervalos iguales de 1 V y &ndash;1 V comenzando en el valor positivo para el &ldquo;1&rdquo; y en el valor negativo para el &ldquo;0&rdquo;";
 choices[38][2] = "Indicar el valor &ldquo;1&rdquo; con ausencia de tr&aacute;nsito en la tensi&oacute;n el&eacute;ctrica y el &ldquo;0&rdquo; con una transici&oacute;n";
 choices[38][3] = "La opci&oacute;n anterior, suprimiendo una de cada dos transiciones";
 answers[38] = 1;
 units[38] = ['104'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5589. ";
 preguntaids[38] = 5589


//  Id pregunta: 4513 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes proposiciones no es correcta en lo relativo a GPRS?:";
 choices[39]= new Array();
 choices[39][0] = "La conmutaci&oacute;n en GRPS se realiza a nivel de paquetes de datos";
 choices[39][1] = "La red GRPS se puede comunicar con redes TCP/IP";
 choices[39][2] = "La tarificaci&oacute;n no tiene recargo de establecimiento de llamada y es por tiempo de conexi&oacute;n";
 choices[39][3] = "El acceso radio es por paquetes de datos";
 answers[39] = 2;
 units[39] = ['117'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4513. ";
 preguntaids[39] = 4513


//  Id pregunta: 9870 Año de creación de pregunta: 2015
 questions[40]= "41)  Indique la afirmaci&oacute;n incorrecta:";
 choices[40]= new Array();
 choices[40][0] = "ActiveX es una evoluci&oacute;n de las tecnolog&iacute;as Component Object Model (COM) y Object Linking and Embedding (OLE).";
 choices[40][1] = "La tecnolog&iacute;a ActiveX est&aacute; limitada al sistema operativo Windows.";
 choices[40][2] = "Para introducir un control ActiveX en una p&aacute;gina HTML es necesario utilizar la etiqueta &lt;object&gt;";
 choices[40][3] = "Todas las anteriores son correctas.";
 answers[40] = 1;
 units[40] = ['62'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9870. ";
 preguntaids[40] = 9870


//  Id pregunta: 8978 Año de creación de pregunta: 2013
 questions[41]= "42)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[41]= new Array();
 choices[41][0] = "El nombre o denominiaci&oacute;n social";
 choices[41][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[41][2] = "Los datos de su inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[41][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[41] = 1;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 8978. Ley 34/2002, art&iacute;culo 10";
 preguntaids[41] = 8978


//  Id pregunta: 9883 Año de creación de pregunta: 2015
 questions[42]= "43)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[42]= new Array();
 choices[42][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[42][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[42][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[42][3] = "Ninguna de las anteriores.";
 answers[42] = 3;
 units[42] = ['7', '19'];
 blocks[42] = ['A2', 'A4'];
 comments[42] = "Id Pregunta: 9883. ";
 preguntaids[42] = 9883


//  Id pregunta: 6938 Año de creación de pregunta: 2010
 questions[43]= "44)  Entre las funciones de BPEL no se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[43][1] = "Definir procesos de negocio.";
 choices[43][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[43][3] = "Orquestar servicios Web.";
 answers[43] = 0;
 units[43] = ['86'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6938. ";
 preguntaids[43] = 6938


//  Id pregunta: 3857 Año de creación de pregunta: 2002
 questions[44]= "45)  EXCELERATOR, SADT, TAGS..., son herramientas para:";
 choices[44]= new Array();
 choices[44][0] = "Confecci&oacute;n de prototipos";
 choices[44][1] = "An&aacute;lisis de requerimientos";
 choices[44][2] = "Auditor&iacute;a de Sistemas de Informaci&oacute;n";
 choices[44][3] = "Ninguna de las anteriores es cierta";
 answers[44] = 1;
 units[44] = ['84'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3857. ";
 preguntaids[44] = 3857


//  Id pregunta: 10933 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;En qu&eacute; medida las entidades privadas tienen que cumplir la Ley de Transparencia?";
 choices[45]= new Array();
 choices[45][0] = "Las entidades privadas que perciban durante el per&iacute;odo de un a&ntilde;o ayudas o subvenciones p&uacute;blicas en una cuant&iacute;a superior a 150.000 euros";
 choices[45][1] = "cuando al menos el 40?% del total de sus ingresos anuales tengan car&aacute;cter de ayuda o subvenci&oacute;n p&uacute;blica, siempre que alcancen como m&iacute;nimo la cantidad de 5.000 euros.";
 choices[45][2] = "No tienen que cumplir la ley de transparencia";
 choices[45][3] = "las cumplir&aacute;n sin ninguna limitaci&oacute;n";
 answers[45] = 1;
 units[45] = ['22'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 10933. ";
 preguntaids[45] = 10933


//  Id pregunta: 10887 Año de creación de pregunta: 2015
 questions[46]= "47)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[46]= new Array();
 choices[46][0] = "Punto a punto";
 choices[46][1] = "Broadcast multi-acceso";
 choices[46][2] = "No broadcast multi-acceso";
 choices[46][3] = "Broadcast punto a multipunto";
 answers[46] = 2;
 units[46] = ['114'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10887. ";
 preguntaids[46] = 10887


//  Id pregunta: 9629 Año de creación de pregunta: 2014
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interopeabilidad?";
 choices[47]= new Array();
 choices[47][0] = "Multiling&uuml;ismo";
 choices[47][1] = "Accesibilidad";
 choices[47][2] = "Empleo de soluciones de software libre";
 choices[47][3] = "Uso de est&aacute;ndares abiertos";
 answers[47] = 2;
 units[47] = ['43'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 9629. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";
 preguntaids[47] = 9629


//  Id pregunta: 2805 Año de creación de pregunta: 2002
 questions[48]= "49)  En el campo de la representaci&oacute;n del conocimiento simb&oacute;lico:";
 choices[48]= new Array();
 choices[48][0] = "La unidad b&aacute;sica funcional de una red sem&aacute;ntica es el 'objeto' que formaliza la representaci&oacute;n de un concepto";
 choices[48][1] = "Un marco es una descripci&oacute;n de un objeto, que contiene ranuras (slots) para todas las informaciones asociadas con el objeto";
 choices[48][2] = "Las reglas deductivas son una manera de representar al conocimiento de tipo procedimental";
 choices[48][3] = "Una restricci&oacute;n expresa es una relaci&oacute;n de equilibrio entre los predicados de uno o m&aacute;s objetos";
 answers[48] = 1;
 units[48] = ['68'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2805. ";
 preguntaids[48] = 2805


//  Id pregunta: 7575 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) y UDP (User Datagram Protocol) es cierta?";
 choices[49]= new Array();
 choices[49][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores.";
 choices[49][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos.";
 choices[49][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP (Internet Protocol), que es un protocolo de red no fiable.";
 choices[49][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite.";
 answers[49] = 3;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 7575. Map 2006";
 preguntaids[49] = 7575


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[50]= "51)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[50]= new Array();
 choices[50][0] = "0";
 choices[50][1] = "1";
 choices[50][2] = "Tantos como peticiones concurrentes tenga.";
 choices[50][3] = "Tantos como le permita la memoria de la JVM.";
 answers[50] = 1;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 711. AGE A1 2015";
 preguntaids[50] = 711


//  Id pregunta: 9786 Año de creación de pregunta: 2015
 questions[51]= "52)  Elija la respuesta incorrecta:";
 choices[51]= new Array();
 choices[51][0] = "La utilizaci&oacute;n de infraestructuras y servicios comunes proporciona mayor agilidad en el desarrollo y despliegue de servicios.";
 choices[51][1] = "Las Administraciones P&uacute;blicas pueden utilizar cualquier tecnolog&iacute;a de la informaci&oacute;n en sus relaciones con los ciudadanos.";
 choices[51][2] = "El Comit&eacute; Sectorial de la Administraci&oacute;n Electr&oacute;nica asegura la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[51][3] = "Existe un directorio general de aplicaciones para su reutilizaci&oacute;n en la AGE.";
 answers[51] = 1;
 units[51] = ['44'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 9786. Art&iacute;culo 1, ENI RD 4/2010: deben evitar discriminaci&oacute;n.";
 preguntaids[51] = 9786


//  Id pregunta: 8788 Año de creación de pregunta: 2013
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un nivel de madurez de CMMI ?";
 choices[52]= new Array();
 choices[52][0] = "Definido";
 choices[52][1] = "Gestionado";
 choices[52][2] = "Gestionado de forma cuantitativa";
 choices[52][3] = "Repetible";
 answers[52] = 3;
 units[52] = ['92'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 8788. ";
 preguntaids[52] = 8788


//  Id pregunta: 8556 Año de creación de pregunta: 2013
 questions[53]= "54)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[53]= new Array();
 choices[53][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[53][1] = "A traves de la ley de patentes";
 choices[53][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[53][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[53] = 3;
 units[53] = ['41'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 8556. ";
 preguntaids[53] = 8556


//  Id pregunta: 6716 Año de creación de pregunta: 2009
 questions[54]= "55)  &iquest;Cu&aacute;ndo deber&aacute;n tener implantadas la totalidad de las medidas de seguridad los ficheros, tanto automatizados como no automatizados, creados con posterioridad a la fecha de entrada en vigor del RD 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de Desarrollo de la LOPD?:";
 choices[54]= new Array();
 choices[54][0] = "En el plazo de un a&ntilde;o desde su creaci&oacute;n";
 choices[54][1] = "En el plazo de seis meses desde su creaci&oacute;n";
 choices[54][2] = "En el momento de su creaci&oacute;n";
 choices[54][3] = "Depender&aacute; del tama&ntilde;o del fichero";
 answers[54] = 2;
 units[54] = ['35'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 6716. MAP 2008 A1";
 preguntaids[54] = 6716


//  Id pregunta: 9432 Año de creación de pregunta: 2014
 questions[55]= "56)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[55]= new Array();
 choices[55][0] = "M&uacute;ltiples";
 choices[55][1] = "Trunk";
 choices[55][2] = "VLAN- Link";
 choices[55][3] = "Data-Link";
 answers[55] = 1;
 units[55] = ['102'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9432. ";
 preguntaids[55] = 9432


//  Id pregunta: 9758 Año de creación de pregunta: 2014
 questions[56]= "57)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[56]= new Array();
 choices[56][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[56][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[56][2] = "Determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[56][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[56] = 0;
 units[56] = ['45'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 9758. ";
 preguntaids[56] = 9758


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[57]= "58)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[57]= new Array();
 choices[57][0] = "La Comisi&oacute;n Europea.";
 choices[57][1] = "El Consejo Europeo.";
 choices[57][2] = "El Consejo de Europa.";
 choices[57][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[57] = 0;
 units[57] = ['5'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[57] = 130


//  Id pregunta: 6679 Año de creación de pregunta: 2009
 questions[58]= "59)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[58]= new Array();
 choices[58][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[58][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[58][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[58][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[58] = 2;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 6679. MAP 2008 A1";
 preguntaids[58] = 6679


//  Id pregunta: 2668 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[59]= new Array();
 choices[59][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[59][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[59][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[59][3] = "No hay diferencia; son la misma arquitectura";
 answers[59] = 0;
 units[59] = ['55'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2668. ";
 preguntaids[59] = 2668


//  Id pregunta: 7116 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[60]= new Array();
 choices[60][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[60][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[60][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[60][3] = "En dos diarios de tirada nacional";
 answers[60] = 2;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 7116. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[60] = 7116


//  Id pregunta: 1017 Año de creación de pregunta: 2016
 questions[61]= "62)  Los Delegados del Gobierno en las Comunidades Autonomas (se&ntilde;ala la incorrecta):";
 choices[61]= new Array();
 choices[61][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[61][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[61][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[61][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[61] = 2;
 units[61] = ['4', '7', '8', '9'];
 blocks[61] = ['A1', 'A2'];
 comments[61] = "Id Pregunta: 1017. Ley 40/2015";
 preguntaids[61] = 1017


//  Id pregunta: 2950 Año de creación de pregunta: 2002
 questions[62]= "63)  La resoluci&oacute;n distribuida de problemas (RDP) estudia sistemas inteligentes distribuidos, cuyos agentes cumplen unas caracter&iacute;sticas m&iacute;nimas de:";
 choices[62]= new Array();
 choices[62][0] = "Benevolencia, objetivos compartidos, dise&ntilde;o central";
 choices[62][1] = "Benevolencia, objetivos compartidos, dise&ntilde;o distribuido";
 choices[62][2] = "Benevolencia, objetivos propios. dise&ntilde;o distribuido";
 choices[62][3] = "Benevolencia,  objetivos propios, dise&ntilde;o central";
 answers[62] = 0;
 units[62] = ['67'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2950. ";
 preguntaids[62] = 2950


//  Id pregunta: 1135 Año de creación de pregunta: 2016
 questions[63]= "64)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[63]= new Array();
 choices[63][0] = "Es siempre cero.";
 choices[63][1] = "Es igual a su tiempo early.";
 choices[63][2] = "Es mayor que su tiempo early.";
 choices[63][3] = "Es menor que su tiempo early.";
 answers[63] = 1;
 units[63] = ['33'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 1135. ";
 preguntaids[63] = 1135


//  Id pregunta: 4469 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para un red de conmutaci&oacute;n de paquetes en modo datagrama?:";
 choices[64]= new Array();
 choices[64][0] = "Un paquete enviado posteriormente no puede llegar antes que otro enviado con anterioridad";
 choices[64][1] = "La red reordena los paquetes y los entrega en el destino en el orden de llegada";
 choices[64][2] = "Cada paquete lleva en la cabecera informaci&oacute;n acerca del origen y el destino del paquete";
 choices[64][3] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 answers[64] = 2;
 units[64] = ['102'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4469. ";
 preguntaids[64] = 4469


//  Id pregunta: 3161 Año de creación de pregunta: 2002
 questions[65]= "66)  El creador de JAVA es:";
 choices[65]= new Array();
 choices[65][0] = "Microsoft";
 choices[65][1] = "IBM";
 choices[65][2] = "SUN Microsystems";
 choices[65][3] = "CERN";
 answers[65] = 2;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3161. ";
 preguntaids[65] = 3161


//  Id pregunta: 5899 Año de creación de pregunta: 2007
 questions[66]= "67)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidospueden tener un periodo m&aacute;ximo de validez de:";
 choices[66]= new Array();
 choices[66][0] = "Dos a&ntilde;os";
 choices[66][1] = "Tres a&ntilde;os";
 choices[66][2] = "Cuatro a&ntilde;os";
 choices[66][3] = "Cinco a&ntilde;os";
 answers[66] = 3;
 units[66] = ['77'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 5899. ";
 preguntaids[66] = 5899


//  Id pregunta: 1247 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes conceptos NO est&aacute; relacionado con la especificaci&oacute;n de IP m&oacute;vil para IPv4 del IETF (RFC 5944)?";
 choices[67]= new Array();
 choices[67][0] = "Tunneling.";
 choices[67][1] = "Home agent.";
 choices[67][2] = "Mobile Switching Centre.";
 choices[67][3] = "Care-of address.";
 answers[67] = 2;
 units[67] = ['109'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1247. ";
 preguntaids[67] = 1247


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[68]= "69)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para aquellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un periodo cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[68][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para aquellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un periodo cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[68][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[68][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[68] = 1;
 units[68] = ['14'];
 blocks[68] = ['A3'];
 comments[68] = "Id Pregunta: 357. Estado del Bienestar";
 preguntaids[68] = 357


//  Id pregunta: 3135 Año de creación de pregunta: 2002
 questions[69]= "70)  La compresi&oacute;n con p&eacute;rdidas no ser&iacute;a adecuada para:";
 choices[69]= new Array();
 choices[69][0] = "Un ejecutable";
 choices[69][1] = "Texto ASCII";
 choices[69][2] = "Un facs&iacute;mil";
 choices[69][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[69] = 3;
 units[69] = ['80'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3135. ";
 preguntaids[69] = 3135


//  Id pregunta: 10532 Año de creación de pregunta: 2015
 questions[70]= "71)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[70]= new Array();
 choices[70][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[70][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[70][2] = "ISO 9001 consta de ocho secciones";
 choices[70][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[70] = 0;
 units[70] = ['98'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 10532. ";
 preguntaids[70] = 10532


//  Id pregunta: 1042 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[71]= new Array();
 choices[71][0] = "Conferencia de Presidentes.";
 choices[71][1] = "Convenios de colaboraci&oacute;n.";
 choices[71][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[71][3] = "Conferencias Sectoriales.";
 answers[71] = 0;
 units[71] = ['4', '7', '8', '9'];
 blocks[71] = ['A1', 'A2'];
 comments[71] = "Id Pregunta: 1042. Ley 40/2015";
 preguntaids[71] = 1042


//  Id pregunta: 2902 Año de creación de pregunta: 2002
 questions[72]= "73)  Indicar la respuesta incorrecta sobre las restricciones en inteligencia artificial:";
 choices[72]= new Array();
 choices[72][0] = "Si bien las reglas expresan influencias del tipo causa-efecto entre conceptos, una restricci&oacute;n es una ecuaci&oacute;n que permite expresar m&uacute;ltiples relaciones causa-efecto, estableciendo puntos de sincronismo en el comportamiento de los objetos";
 choices[72][1] = "Una restricci&oacute;n expresa una relaci&oacute;n de equilibrio entre los atributos de uno o m&aacute;s sujetos, y constituye la pieza b&aacute;sica de informaci&oacute;n para la comprensi&oacute;n y modelizaci&oacute;n del conocimiento del mundo real bajo este enfoque";
 choices[72][2] = "Hay dominios de conocimiento que formulados en restriccioness dan lugar a bases de conocimiento muy grandes debido a que el conocimiento se expresa mejor mediante reglas";
 choices[72][3] = "Todo sistema de restricciones debe constar como m&iacute;nimo de un lenguaje de especificaci&oacute;n de restricciones y un procedimiento capaz de interpretar esta especificaci&oacute;n y de evaluar sus respuestas";
 answers[72] = 2;
 units[72] = ['68'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2902. ";
 preguntaids[72] = 2902


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[73]= new Array();
 choices[73][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[73][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[73][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[73][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[73] = 1;
 units[73] = ['86'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 811. AGE A1 2015";
 preguntaids[73] = 811


//  Id pregunta: 6640 Año de creación de pregunta: 2009
 questions[74]= "75)  &iquest;De acuerdo al est&aacute;ndar, cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS R99 si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[74]= new Array();
 choices[74][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[74][1] = "100 kbps";
 choices[74][2] = "144 Kbps";
 choices[74][3] = "384 kbps";
 answers[74] = 3;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 6640. ";
 preguntaids[74] = 6640


