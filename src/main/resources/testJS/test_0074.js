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
//  Id pregunta: 8318 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;l es el comit&eacute; del W3C encargado de promover y estandarizar la accesibilidad Web?";
 choices[0]= new Array();
 choices[0][0] = "WAI";
 choices[0][1] = "WCAG";
 choices[0][2] = "ATAG";
 choices[0][3] = "UAAG";
 answers[0] = 0;
 units[0] = ['42'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 8318. Examen UPM A2 2011";
 preguntaids[0] = 8318


//  Id pregunta: 5750 Año de creación de pregunta: 2007
 questions[1]= "2)  La organizaci&oacute;n de la informaci&oacute;n en un servicio de directorio es:";
 choices[1]= new Array();
 choices[1][0] = "relacional";
 choices[1][1] = "indexada";
 choices[1][2] = "jer&aacute;rquica";
 choices[1][3] = "en colas";
 answers[1] = 2;
 units[1] = ['77'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 5750. ";
 preguntaids[1] = 5750


//  Id pregunta: 1657 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[2]= new Array();
 choices[2][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[2][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[2][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[2][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[2] = 0;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 1657. ";
 preguntaids[2] = 1657


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[3]= new Array();
 choices[3][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[3][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[3][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[3][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[3] = 2;
 units[3] = ['7'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 208. Ley 39/2015";
 preguntaids[3] = 208


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[4]= "5)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[4]= new Array();
 choices[4][0] = "Los cr&eacute;ditos";
 choices[4][1] = "Las partidas presupuestarias";
 choices[4][2] = "Los derechos";
 choices[4][3] = "Las obligaciones";
 answers[4] = 3;
 units[4] = ['11'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 270. Presupuestos generales";
 preguntaids[4] = 270


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[5]= new Array();
 choices[5][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[5][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[5][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[5] = 1;
 units[5] = ['89'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 818. Junta de Extremadura A1 2015";
 preguntaids[5] = 818


//  Id pregunta: 1124 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes NO es una distribuci&oacute;n LINUX?";
 choices[6]= new Array();
 choices[6][0] = "Fedora.";
 choices[6][1] = "Mandriva.";
 choices[6][2] = "Solaris.";
 choices[6][3] = "Ubuntu.";
 answers[6] = 2;
 units[6] = ['57'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1124. ";
 preguntaids[6] = 1124


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[7]= "8)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[7]= new Array();
 choices[7][0] = "Decretos Legislativos.";
 choices[7][1] = "Decretos-leyes.";
 choices[7][2] = "Leyes de bases.";
 choices[7][3] = "Reales Decretos del Consejo de Ministros.";
 answers[7] = 0;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 31. Constituci&oacute;n de 1978";
 preguntaids[7] = 31


//  Id pregunta: 7353 Año de creación de pregunta: 2010
 questions[8]= "9)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[8]= new Array();
 choices[8][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[8][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[8][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[8][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[8] = 2;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7353. Examen TIC B 2009";
 preguntaids[8] = 7353


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[9]= "10)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[9]= new Array();
 choices[9][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[9][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[9][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[9][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[9] = 2;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 488. Sociedad de la informaci&oacute;n";
 preguntaids[9] = 488


//  Id pregunta: 10435 Año de creación de pregunta: 2015
 questions[10]= "11)  Sobre qu&eacute; actos un licitador puede interponer el recurso especial en materia de contrataci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "&Uacute;nicamente los anuncios de licitaci&oacute;n y los pliegos de los contratos SARA.";
 choices[10][1] = "Los acuerdos de licitaci&oacute;n de cualquier contrato, sea o no SARA.";
 choices[10][2] = "Los anuncios de licitaci&oacute;n, los pliegos, los actos de tr&aacute;mite cualificados as&iacute; como los acuerdos de licitaci&oacute;n de los contratos SARA.";
 choices[10][3] = "Ninguna es verdadera.";
 answers[10] = 2;
 units[10] = ['37'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 10435. ";
 preguntaids[10] = 10435


//  Id pregunta: 10500 Año de creación de pregunta: 2015
 questions[11]= "12)  En cuanto a la utilizaci&oacute;n de web services, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[11]= new Array();
 choices[11][0] = "Los web services en .NET tienen la extensi&oacute;n WSDL";
 choices[11][1] = "El servicio web es descrito mediante un archivo IDL";
 choices[11][2] = "WSDL define el servicio web utilizando IDL";
 choices[11][3] = "XLAN fue definido en los primeros tiempos de desarrollo de web services como est&aacute;ndar abierto de comunicaci&oacute;n entre componentes";
 answers[11] = 2;
 units[11] = ['63', '64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10500. Los web services en .NET tienen la extensi&oacute;n .asmx";
 preguntaids[11] = 10500


//  Id pregunta: 2188 Año de creación de pregunta: 2002
 questions[12]= "13)  Entre los m&eacute;todos utilizados para la selecci&oacute;n de bienes y servicios:";
 choices[12]= new Array();
 choices[12][0] = "En general se considera que a mayor entrop&iacute;a, mayor informaci&oacute;n, puesto que las puntuaciones est&aacute;n m&aacute;s ordenadas";
 choices[12][1] = "La normalizaci&oacute;n de las puntuaciones suele ser necesaria para considerarlas a todas sobre la misma escala y para simplificar los c&aacute;lculos";
 choices[12][2] = "En el m&eacute;todo de permutaci&oacute;n, se exigen solamente las evaluaciones cardinales y los pesos ordinales";
 choices[12][3] = "Todas las respuestas anteriores son correctas";
 answers[12] = 1;
 units[12] = ['38'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 2188. ";
 preguntaids[12] = 2188


//  Id pregunta: 1413 Año de creación de pregunta: 2016
 questions[13]= "14)  Indica cual es el grupo de trabajo en el est&aacute;ndar IEEE 802.11 cuyo objetivo es ampliar el soporte para aplicaciones wireless con requisitos de calidad de servicio (QoS):";
 choices[13]= new Array();
 choices[13][0] = "802.11e";
 choices[13][1] = "802.11i";
 choices[13][2] = "802.11n";
 choices[13][3] = "802.11q";
 answers[13] = 0;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1413. ";
 preguntaids[13] = 1413


//  Id pregunta: 1370 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[14]= new Array();
 choices[14][0] = "33%";
 choices[14][1] = "20%";
 choices[14][2] = "50%";
 choices[14][3] = "0%";
 answers[14] = 0;
 units[14] = ['53'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1370. ";
 preguntaids[14] = 1370


//  Id pregunta: 9985 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?";
 choices[15]= new Array();
 choices[15][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[15][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[15][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[15][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[15] = 3;
 units[15] = ['7'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 9985. Examen TIC A2 2014";
 preguntaids[15] = 9985


//  Id pregunta: 996 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo al articulo 56 de la ley 40/2015, las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[16]= new Array();
 choices[16][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[16][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[16][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[16][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[16] = 0;
 units[16] = ['4', '7', '8', '9'];
 blocks[16] = ['A1', 'A2'];
 comments[16] = "Id Pregunta: 996. Ley 40/2015";
 preguntaids[16] = 996


//  Id pregunta: 4369 Año de creación de pregunta: 2004
 questions[17]= "18)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modelo de transferencia as&iacute;ncrono) es:";
 choices[17]= new Array();
 choices[17][0] = "Utiliza un formato de celda de longitud fija";
 choices[17][1] = "El tama&ntilde;o de la celda se negocia en el nivel de enlace";
 choices[17][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[17][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transporte";
 answers[17] = 0;
 units[17] = ['107'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4369. ";
 preguntaids[17] = 4369


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[18]= "19)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[18]= new Array();
 choices[18][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[18][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[18][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[18][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[18] = 3;
 units[18] = ['22'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 508. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[18] = 508


//  Id pregunta: 5252 Año de creación de pregunta: 2004
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as no se puede utilizar actualmente para acceder a internet en Espa&ntilde;a?";
 choices[19]= new Array();
 choices[19][0] = "ADSL";
 choices[19][1] = "Cable";
 choices[19][2] = "Wi-Max";
 choices[19][3] = "Ninguna de las respuestas es correcta";
 answers[19] = 3;
 units[19] = ['103'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5252. ";
 preguntaids[19] = 5252


//  Id pregunta: 9086 Año de creación de pregunta: 2014
 questions[20]= "21)  La programaci&oacute;n funcional limita el uso de";
 choices[20]= new Array();
 choices[20][0] = "estados mutables.";
 choices[20][1] = "expresiones lambda.";
 choices[20][2] = "procedimientos como par&aacute;metros.";
 choices[20][3] = "lenguajes como Erlang, F# o Scala.";
 answers[20] = 0;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9086. Examen TIC-A1 2013";
 preguntaids[20] = 9086


//  Id pregunta: 7713 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutador multinivel Gigabit Ethernet?";
 choices[21]= new Array();
 choices[21][0] = "Bus compartido.";
 choices[21][1] = "Memoria compartida.";
 choices[21][2] = "I/O compartida.";
 choices[21][3] = "Crossbar.";
 answers[21] = 0;
 units[21] = ['112'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 7713. Map 2007";
 preguntaids[21] = 7713


//  Id pregunta: 6816 Año de creación de pregunta: 2010
 questions[22]= "23)  En el &aacute;mbito de la Gesti&oacute;n de Identidades, &iquest;c&oacute;mo se denomina al conjunto de proveedores de servicios, identidades y atributos que disponen de acuerdos de servicio, comerciales y de negocio para que el usuario pueda realizar transacciones de forma transparente y sencilla entre todos ellos?";
 choices[22]= new Array();
 choices[22][0] = "Web Access Management";
 choices[22][1] = "WS - Security";
 choices[22][2] = "C&iacute;rculo de Confianza (CoT)";
 choices[22][3] = "SAML";
 answers[22] = 2;
 units[22] = ['123'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6816. ";
 preguntaids[22] = 6816


//  Id pregunta: 5631 Año de creación de pregunta: 2007
 questions[23]= "24)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[23]= new Array();
 choices[23][0] = "El lugar donde este establecido el prestador de servicios";
 choices[23][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[23][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[23][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[23] = 1;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 5631. Ley 34/2002, art&iacute;culo 29";
 preguntaids[23] = 5631


//  Id pregunta: 1292 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de Medidas de Protecci&oacute;n Integral contra la Violencia de G&eacute;nero, ,a quien corresponder&aacute; el asesoramiento, evaluaci&oacute;n, colaboraci&oacute;n institucional, elaboraci&oacute;n de informes y estudios, y propuestas de actuaci&oacute;n en materia de violencia de g&eacute;nero?";
 choices[24]= new Array();
 choices[24][0] = "Ala Delegaci&oacute;n Especial del Gobierno contra la Violencia sobre la Mujer.";
 choices[24][1] = "A las Fuerzas y Cuerpos de Seguridad del Estado.";
 choices[24][2] = "AI Observatorio Estatal de Violencia sobre la Mujer.";
 choices[24][3] = "AI Ministerio de Justicia, que creara un &oacute;rgano especifico para ello.";
 answers[24] = 2;
 units[24] = ['14'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 1292. ";
 preguntaids[24] = 1292


//  Id pregunta: 8428 Año de creación de pregunta: 2011
 questions[25]= "26)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[25]= new Array();
 choices[25][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[25][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[25][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[25][3] = "En uno de los dos";
 answers[25] = 3;
 units[25] = ['2'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 8428. ";
 preguntaids[25] = 8428


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[26]= "27)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[26]= new Array();
 choices[26][0] = "La Administraci&oacute;n General del Estado";
 choices[26][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[26][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[26][3] = "Todas las Administraciones P&uacute;blicas";
 answers[26] = 1;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[26] = 6948


//  Id pregunta: 8401 Año de creación de pregunta: 2011
 questions[27]= "28)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[27]= new Array();
 choices[27][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[27][1] = "UTP Categor&iacute;a 3.";
 choices[27][2] = "UTP Categor&iacute;a 5 o 6";
 choices[27][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[27] = 2;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8401. Operador Ayto. Madrid 2010";
 preguntaids[27] = 8401


//  Id pregunta: 7306 Año de creación de pregunta: 2010
 questions[28]= "29)  En el an&aacute;lisis estructurado un sistema se puede modelizar completamente con:";
 choices[28]= new Array();
 choices[28][0] = "Modelo Funcional, Modelo Est&aacute;tico y Modelo Din&aacute;mico";
 choices[28][1] = "Modelo de Procesos y Modelo de Datos";
 choices[28][2] = "Modelo Funcional, Modelo de Clases y Modelo de Casos de Uso";
 choices[28][3] = "Modelo Funcional y Modelo E/R";
 answers[28] = 0;
 units[28] = ['85'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 7306. ";
 preguntaids[28] = 7306


//  Id pregunta: 10476 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Qu&eacute; es un servicio WMTS?";
 choices[29]= new Array();
 choices[29][0] = "Un tipo de recubrimiento SOAP";
 choices[29][1] = "Un servicio de cat&aacute;logo cacheado";
 choices[29][2] = "Un servicio de visualizaci&oacute;n de mapas sin teselas, pero cacheado";
 choices[29][3] = "Un servicio de visualizaci&oacute;n de mapas teselado";
 answers[29] = 3;
 units[29] = ['71'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10476. ";
 preguntaids[29] = 10476


//  Id pregunta: 9900 Año de creación de pregunta: 2015
 questions[30]= "31)  La Ley 39/2015 impone:";
 choices[30]= new Array();
 choices[30][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[30][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[30][2] = "Ambas";
 choices[30][3] = "Ninguna de las anteriores.";
 answers[30] = 0;
 units[30] = ['7', '19'];
 blocks[30] = ['A2', 'A4'];
 comments[30] = "Id Pregunta: 9900. ";
 preguntaids[30] = 9900


//  Id pregunta: 6939 Año de creación de pregunta: 2010
 questions[31]= "32)  XPDL, XML Process Definition Language, dentro de los 5 interfaces que defini&oacute; la WfMC, podr&iacute;a encuadrarse dentro del interfaz n&uacute;mero:";
 choices[31]= new Array();
 choices[31][0] = "1";
 choices[31][1] = "2";
 choices[31][2] = "3";
 choices[31][3] = "4";
 answers[31] = 0;
 units[31] = ['86'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6939. ";
 preguntaids[31] = 6939


//  Id pregunta: 9875 Año de creación de pregunta: 2015
 questions[32]= "33)  Single Sign-on...";
 choices[32]= new Array();
 choices[32][0] = "&hellip; es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[32][1] = "&hellip; un conjunto de librer&iacute;as open source para identidades federadas.";
 choices[32][2] = "&hellip; una especificaci&oacute;n de mensajes SAML.";
 choices[32][3] = "&hellip; es una informaci&oacute;n almacenada en el navegador del usuario para su consulta posterior.";
 answers[32] = 0;
 units[32] = ['123'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9875. ";
 preguntaids[32] = 9875


//  Id pregunta: 4737 Año de creación de pregunta: 2002
 questions[33]= "34)  El protocolo de aplicaciones inal&aacute;mbricas (WAP), para el acceso y creaci&oacute;n de informaci&oacute;n en internet, utiliza el lenguaje:";
 choices[33]= new Array();
 choices[33][0] = "HTML";
 choices[33][1] = "WML";
 choices[33][2] = "XML";
 choices[33][3] = "CGI";
 answers[33] = 1;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4737. ";
 preguntaids[33] = 4737


//  Id pregunta: 6356 Año de creación de pregunta: 2003
 questions[34]= "35)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vista de explotaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[34][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[34][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[34][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[34] = 1;
 units[34] = ['88'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6356. Examen 2006 JCYL";
 preguntaids[34] = 6356


//  Id pregunta: 1643 Año de creación de pregunta: 2016
 questions[35]= "36)  Uno de los grupos de tecnolog&iacute;as consideradas en el &aacute;mbito de la Web 2.0 es AJAX (Asynchronous JavaScript And XML). Indique cu&aacute;l de las siguientes afirmaciones NO se corresponde con este grupo de tecnolog&iacute;as.";
 choices[35]= new Array();
 choices[35][0] = "Es una t&eacute;cnica de desarrollo web para crear aplicaciones interactivas o RIA (Rich Internet Applications)";
 choices[35][1] = "Estas aplicaciones se ejecutan en el servidor y mantiene comunicaci&oacute;n as&iacute;ncrona con el cliente en segundo plano.";
 choices[35][2] = "En los entornos RIA no se producen recargas de p&aacute;gina, ya que desde el principio se carga toda la aplicaci&oacute;n y s&oacute;lo se produce comunicaci&oacute;n con el servidor cuando se necesitan datos externos como los de una Base de Datos o de otros ficheros externos.";
 choices[35][3] = "Lleva consigo la utilizaci&oacute;n de XHTML (o HTML) y hojas de estilos en cascada (CSS) para el dise&ntilde;o que acompa&ntilde;a a la informaci&oacute;n.";
 answers[35] = 1;
 units[35] = ['74'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1643. ";
 preguntaids[35] = 1643


//  Id pregunta: 10471 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;En el contexto de los Sistemas de Informaci&oacute;n Geogr&aacute;fica &iquest;cu&aacute;l de los siguientes usos ser&iacute;a un mashup?";
 choices[36]= new Array();
 choices[36][0] = "B&uacute;squeda de una direcci&oacute;n (geocodificaci&oacute;n directa)";
 choices[36][1] = "Carga de una capa WMS externa usando la API de OpenLayers";
 choices[36][2] = "Descarga de datos vectoriales en GML o KML";
 choices[36][3] = "Todas las anteriores";
 answers[36] = 1;
 units[36] = ['71'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10471. ";
 preguntaids[36] = 10471


//  Id pregunta: 10751 Año de creación de pregunta: 2015
 questions[37]= "38)  En el dise&ntilde;o estructurado, el acoplamiento normal o simple entre dos m&oacute;dulos de software consiste en:";
 choices[37]= new Array();
 choices[37][0] = "Ambos m&oacute;dulos utilizan las mismas estructuras de datos.";
 choices[37][1] = "Un m&oacute;dulo genera informaci&oacute;n de control para el otro m&oacute;dulo.";
 choices[37][2] = "Un m&oacute;dulo se comunica con el otro mediante paso de par&aacute;metros.";
 choices[37][3] = "Son falsas todas las anteriores.";
 answers[37] = 2;
 units[37] = ['89'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 10751. ";
 preguntaids[37] = 10751


//  Id pregunta: 10578 Año de creación de pregunta: 2015
 questions[38]= "39)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[38]= new Array();
 choices[38][0] = "Gesti&oacute;n de la capacidad";
 choices[38][1] = "Gesti&oacute;n de suministradores";
 choices[38][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[38][3] = "Gesti&oacute;n de cambios";
 answers[38] = 0;
 units[38] = ['101'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 10578. ";
 preguntaids[38] = 10578


//  Id pregunta: 10036 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el proceso de normalizaci&oacute;n del Modelo Relacional es cierta?";
 choices[39]= new Array();
 choices[39][0] = "Existen s&oacute;lo un total de 3 Formas Normales: 1FN, 2FN y 3FN.";
 choices[39][1] = "Una tabla est&aacute; en 2FN cuando se demuestra que existe dependencia funcional del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[39][2] = "Una tabla est&aacute; en 1FN cuando se demuestra que existe dependencia funcional completa del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[39][3] = "Una tabla que est&aacute; en 1FN tiene el m&aacute;ximo grado de normalizaci&oacute;n y, por tanto, cumple tambi&eacute;n la Segunda y Tercera Forma Normal.";
 answers[39] = 1;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 10036. Examen TIC A2 2014";
 preguntaids[39] = 10036


//  Id pregunta: 2477 Año de creación de pregunta: 2002
 questions[40]= "41)  El R.D. 209/2003 regula:";
 choices[40]= new Array();
 choices[40][0] = "Los registros telem&aacute;ticos";
 choices[40][1] = "Las notificaciones telem&aacute;ticas";
 choices[40][2] = "La utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[40][3] = "Todas las anteriores son correctas";
 answers[40] = 3;
 units[40] = ['19'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 2477. ";
 preguntaids[40] = 2477


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[41]= new Array();
 choices[41][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[41][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[41][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[41][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[41] = 0;
 units[41] = ['48'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 639. AGE A1 2015";
 preguntaids[41] = 639


//  Id pregunta: 4296 Año de creación de pregunta: 2002
 questions[42]= "43)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[42]= new Array();
 choices[42][0] = "Amenazas";
 choices[42][1] = "Vulnerabilidad";
 choices[42][2] = "Impacto";
 choices[42][3] = "Riesgo";
 answers[42] = 2;
 units[42] = ['45'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 4296. ";
 preguntaids[42] = 4296


//  Id pregunta: 2246 Año de creación de pregunta: 2002
 questions[43]= "44)  Con car&aacute;cter general, la transferencia de ficheros con datos de car&aacute;cter personal se puede hacer:";
 choices[43]= new Array();
 choices[43][0] = "A cualquier pa&iacute;s europeo y africano";
 choices[43][1] = "S&oacute;lo a Europa y Asia";
 choices[43][2] = "S&oacute;lo dentro de UE";
 choices[43][3] = "Con destino a pa&iacute;ses que proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD";
 answers[43] = 3;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2246. ";
 preguntaids[43] = 2246


//  Id pregunta: 10542 Año de creación de pregunta: 2015
 questions[44]= "45)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[44]= new Array();
 choices[44][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[44][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[44][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[44][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[44] = 0;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 10542. ";
 preguntaids[44] = 10542


//  Id pregunta: 2060 Año de creación de pregunta: 2002
 questions[45]= "46)  A todos los efectos se consideraran normas europeas las producidas por los organismos:";
 choices[45]= new Array();
 choices[45][0] = "CEN, CENELEC o CEPT/ETSI";
 choices[45][1] = "CENELEC, ETSI o IEC";
 choices[45][2] = "ISO, CEPT o CENELEC";
 choices[45][3] = "AENOR, CEPT o CEN";
 answers[45] = 0;
 units[45] = ['48'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2060. ";
 preguntaids[45] = 2060


//  Id pregunta: 3829 Año de creación de pregunta: 2002
 questions[46]= "47)  En programaci&oacute;n orientada a objetos, el mecanismo por el cual una clase de objeto puede ser definido como un caso particular de una clase m&aacute;s general se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Herencia";
 choices[46][1] = "Subclase";
 choices[46][2] = "Polimorfismo";
 choices[46][3] = "Encapsulaci&oacute;n";
 answers[46] = 0;
 units[46] = ['85'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3829. ";
 preguntaids[46] = 3829


//  Id pregunta: 5889 Año de creación de pregunta: 2007
 questions[47]= "48)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[47]= new Array();
 choices[47][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[47][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[47][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[47][3] = "Todas las anteriores son ciertas";
 answers[47] = 3;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 5889. ";
 preguntaids[47] = 5889


//  Id pregunta: 6833 Año de creación de pregunta: 2010
 questions[48]= "49)  Los servicios web son:";
 choices[48]= new Array();
 choices[48][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[48][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[48][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[48][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[48] = 3;
 units[48] = ['55', '74'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6833. TIC A 2009";
 preguntaids[48] = 6833


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ala la correcta:";
 choices[49]= new Array();
 choices[49][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[49][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[49][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[49][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[49] = 1;
 units[49] = ['7'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 240. Ley 39/2015";
 preguntaids[49] = 240


//  Id pregunta: 10969 Año de creación de pregunta: 2015
 questions[50]= "51)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[50]= new Array();
 choices[50][0] = "El Portal de la Transparencia depende del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[50][1] = "La solicitud de acceso a la informaci&oacute;n no requerir&aacute; la identificaci&oacute;n del solicitante.";
 choices[50][2] = "No se admitir&aacute;n solicitudes de informaci&oacute;n para cuya divulgaci&oacute;n sea necesaria una acci&oacute;n previa de reelaboraci&oacute;n.";
 choices[50][3] = "La resoluci&oacute;n de la petici&oacute;n de acceso deber&aacute; notificarse al solicitante en el plazo m&aacute;ximo de 15 d&iacute;as h&aacute;biles.";
 answers[50] = 2;
 units[50] = ['22'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 10969. ";
 preguntaids[50] = 10969


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[51]= new Array();
 choices[51][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[51][1] = "Intervenci&oacute;n formal y material.";
 choices[51][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[51][3] = "Intervenci&oacute;n formal y general.";
 answers[51] = 1;
 units[51] = ['11'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 296. Presupuestos generales";
 preguntaids[51] = 296


//  Id pregunta: 5665 Año de creación de pregunta: 2007
 questions[52]= "53)  &iquest;Cual de los siguientes ser&iacute;a el encuadre org&aacute;nico preferible de la auditoria inform&aacute;tica interna?";
 choices[52]= new Array();
 choices[52][0] = "Se adscribir&iacute;a al Departamento de Sistemas de Informaci&oacute;n, ya que el personal especializado necesario solo esta disponible en ese Departamento.";
 choices[52][1] = "Depender&iacute;a org&aacute;nicamente del Departamento de SI y funcionalmente del Departamento Financiero, por su labor auxiliar en la auditoria financiera de la organizaci&oacute;n.";
 choices[52][2] = "No deber&iacute;a existir, ya que al ser interna seria imposible que fuera independiente con respecto a los auditados.";
 choices[52][3] = "Se encuadrar&iacute;a dentro del staff, es decir, dentro de los &oacute;rganos de apoyo a la direcci&oacute;n existentes en la estructura organizativa, con el fin de garantizar la independencia necesaria.";
 answers[52] = 3;
 units[52] = ['36'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 5665. ";
 preguntaids[52] = 5665


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[53]= "54)  La ley de Okun se refiere a:";
 choices[53]= new Array();
 choices[53][0] = "La relaci&oacute;n emp&iacute;rica entre las variables tasa de desempleo y producci&oacute;n de un pa&iacute;s.";
 choices[53][1] = "La relaci&oacute;n inversa entre la inflaci&oacute;n y el desempleo de un pa&iacute;s.";
 choices[53][2] = "La relaci&oacute;n entre la tasa de desempleo y el n&uacute;mero de vacantes sin cubrir respecto del total de empleos.";
 choices[53][3] = "Las relaciones entre los insumos capital (K), trabajo (L) y tecnolog&iacute;a o productividad total de los factores (PTF)";
 answers[53] = 0;
 units[53] = ['15'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 425. Modelo econ&oacute;mico";
 preguntaids[53] = 425


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[54]= new Array();
 choices[54][0] = "Categor&iacute;a b&aacute;sica";
 choices[54][1] = "Categor&iacute;a media";
 choices[54][2] = "Categor&iacute;a alta";
 choices[54][3] = "Categor&iacute;a media y alta";
 answers[54] = 2;
 units[54] = ['46'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 616. AGE A1 2015";
 preguntaids[54] = 616


//  Id pregunta: 6712 Año de creación de pregunta: 2009
 questions[55]= "56)  &iquest;Qu&eacute; es Atom?";
 choices[55]= new Array();
 choices[55][0] = "Sistema de an&aacute;lisis XML";
 choices[55][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos";
 choices[55][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[55][3] = "Sintaxis de una DTD";
 answers[55] = 1;
 units[55] = ['74'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 6712. MAP 2008 A1";
 preguntaids[55] = 6712


//  Id pregunta: 7790 Año de creación de pregunta: 2010
 questions[56]= "57)  Con respecto a los sistemas RFID (Radio Frecuency Identification), indique la respuesta incorrecta:";
 choices[56]= new Array();
 choices[56][0] = "Las etiquetas RFID pueden ser activas, semipasivas o pasivas";
 choices[56][1] = "Pueden funcionar en rangos de frecuencia baja (125 KHz), alta (13.56 MHz), ultraelevada (868 MHz) o de microondas (2.45 GHz)";
 choices[56][2] = "Necesitan tener una l&iacute;nea de visi&oacute;n directa para su correcto funcionamiento";
 choices[56][3] = "La tecnolog&iacute;a Near Field Communications (NFC) es un subconjunto de RFID";
 answers[56] = 2;
 units[56] = ['108'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 7790. ";
 preguntaids[56] = 7790


//  Id pregunta: 9916 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Cu&aacute;l no es un componente del &iacute;ndice del expediente electr&oacute;nico?";
 choices[57]= new Array();
 choices[57][0] = "Fecha de generaci&oacute;n del &iacute;ndice.";
 choices[57][1] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[57][2] = "Disposici&oacute;n de los documentos en carpetas.";
 choices[57][3] = "Identificadores de los documentos electr&oacute;nicos.";
 answers[57] = 1;
 units[57] = ['44'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 9916. ";
 preguntaids[57] = 9916


//  Id pregunta: 3740 Año de creación de pregunta: 2002
 questions[58]= "59)  Al esfuerzo requerido para localizar y delimitar un error en un programa en explotaci&oacute;n se llama:";
 choices[58]= new Array();
 choices[58][0] = "Usabilidad";
 choices[58][1] = "Mantenibilidad";
 choices[58][2] = "Verificabilidad";
 choices[58][3] = "Flexibilidad";
 answers[58] = 1;
 units[58] = ['93'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3740. ";
 preguntaids[58] = 3740


//  Id pregunta: 9424 Año de creación de pregunta: 2014
 questions[59]= "60)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[59]= new Array();
 choices[59][0] = "IEEE 802.1D";
 choices[59][1] = "IEEE 802.1P";
 choices[59][2] = "IEEE 802.1Q";
 choices[59][3] = "IEEE 802.2";
 answers[59] = 2;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9424. ";
 preguntaids[59] = 9424


//  Id pregunta: 10743 Año de creación de pregunta: 2015
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l de las siguientes tareas se realiza en la fase de an&aacute;lisis:";
 choices[60]= new Array();
 choices[60][0] = "Elaboraci&oacute;n del modelo f&iacute;sico de procesos.";
 choices[60][1] = "Identificaci&oacute;n de requisitos funcionales del sistema.";
 choices[60][2] = "Definici&oacute;n de la arquitectura t&eacute;cnica del sistema.";
 choices[60][3] = "Elaboraci&oacute;n del modelo f&iacute;sico de datos.";
 answers[60] = 1;
 units[60] = ['84'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 10743. ";
 preguntaids[60] = 10743


//  Id pregunta: 9244 Año de creación de pregunta: 2014
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as &aacute;giles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[61]= new Array();
 choices[61][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[61][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[61][2] = "El software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[61][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[61] = 2;
 units[61] = ['84'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 9244. Examen TIC A2 2013";
 preguntaids[61] = 9244


//  Id pregunta: 4724 Año de creación de pregunta: 2002
 questions[62]= "63)  Indicar entre las siguientes normas del IEEE la que trata sobre redes inal&aacute;mbricas:";
 choices[62]= new Array();
 choices[62][0] = "802.1";
 choices[62][1] = "802.11";
 choices[62][2] = "802.12";
 choices[62][3] = "802.13";
 answers[62] = 1;
 units[62] = ['101'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 4724. ";
 preguntaids[62] = 4724


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[63]= "64)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[63]= new Array();
 choices[63][0] = "El 23 de julio de 1952.";
 choices[63][1] = "El 18 de abril de 1951.";
 choices[63][2] = "El 16 de abril de 1948.";
 choices[63][3] = "d)Ninguna de las respuestas son correctas.";
 answers[63] = 0;
 units[63] = ['5'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 169. Uni&oacute;n Europea";
 preguntaids[63] = 169


//  Id pregunta: 910 Año de creación de pregunta: 2016
 questions[64]= "65)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Paging";
 choices[64][1] = "Roaming";
 choices[64][2] = "Handover";
 choices[64][3] = "Trunking";
 answers[64] = 0;
 units[64] = ['117'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 910. AGE A1 2015";
 preguntaids[64] = 910


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[65]= "66)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[65]= new Array();
 choices[65][0] = "Diciembre de 1987.";
 choices[65][1] = "Septiembre de 1989.";
 choices[65][2] = "Octubre de 1990.";
 choices[65][3] = "Noviembre de 1980.";
 answers[65] = 1;
 units[65] = ['5'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 156. Uni&oacute;n Europea";
 preguntaids[65] = 156


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[66]= "67)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[66]= new Array();
 choices[66][0] = "Ley Org&aacute;nica.";
 choices[66][1] = "Ley de Bases.";
 choices[66][2] = "Ley ordinaria.";
 choices[66][3] = "Mandato.";
 answers[66] = 1;
 units[66] = ['1'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 16. Constituci&oacute;n de 1978";
 preguntaids[66] = 16


//  Id pregunta: 4218 Año de creación de pregunta: 2006
 questions[67]= "68)  En la planificaci&oacute;n de SI, qu&eacute; producto de los siguientes no est&aacute; contemplado en M&eacute;trica V3";
 choices[67]= new Array();
 choices[67][0] = "Plan de proyectos";
 choices[67][1] = "Modelo de informaci&oacute;n";
 choices[67][2] = "Modelo de Sistemas de informaci&oacute;n";
 choices[67][3] = "Modelo de arquitectura";
 answers[67] = 3;
 units[67] = ['91'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4218. ";
 preguntaids[67] = 4218


//  Id pregunta: 6967 Año de creación de pregunta: 2010
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es un tipo de ramas o m&oacute;dulos subordinados del an&aacute;lisis de transformaci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "Aferentes";
 choices[68][1] = "de Transformaci&oacute;n";
 choices[68][2] = "Diferentes";
 choices[68][3] = "Eferentes";
 answers[68] = 2;
 units[68] = ['85'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6967. TIC-B 2009 bloque desarrollo";
 preguntaids[68] = 6967


//  Id pregunta: 6031 Año de creación de pregunta: 2003
 questions[69]= "70)  &iquest;En cu&aacute;l de los siguientes procesos de M&eacute;trica v.3 se obtiene como producto de alguna de sus tareas los Procedimientos de Migraci&oacute;n y Carga Inicial de Datos?:";
 choices[69]= new Array();
 choices[69][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[69][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[69][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[69][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[69] = 2;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 6031. TIC B 2007";
 preguntaids[69] = 6031


//  Id pregunta: 6621 Año de creación de pregunta: 2003
 questions[70]= "71)  Seg&uacute;n Bennet:";
 choices[70]= new Array();
 choices[70][0] = "El mantenimiento perfectivo son las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia.";
 choices[70][1] = "El mantenimiento evolutivo son las incorporaciones, modificaciones y eliminaciones necesarias en un producto software para cubrir la expansi&oacute;n o cambio en las necesidades del usuario.";
 choices[70][2] = "El mantenimiento preventivo es la realizaci&oacute;n del mantenimiento anticip&aacute;ndose a problemas futuros.";
 choices[70][3] = "El mantenimiento adaptativo es consecuencia de los cambios en los requisitos de usuario";
 answers[70] = 2;
 units[70] = ['96'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 6621. ";
 preguntaids[70] = 6621


//  Id pregunta: 8118 Año de creación de pregunta: 2011
 questions[71]= "72)  &iquest;C&oacute;mo se comenta una l&iacute;nea en XML (eXtensible Markup Language)?";
 choices[71]= new Array();
 choices[71][0] = "/* Esto es un comentario */";
 choices[71][1] = "// Esto es un comentario";
 choices[71][2] = "# Esto es un comentario";
 choices[71][3] = "&lt;!-- Esto es un comentario --&gt;";
 answers[71] = 3;
 units[71] = ['74'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8118. Examen TIC A2 2010";
 preguntaids[71] = 8118


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[72]= new Array();
 choices[72][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[72][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[72][2] = "Fomentar el despliegue de redes y servicios";
 choices[72][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[72] = 0;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 449. Agenda Digital para Espa&ntilde;a";
 preguntaids[72] = 449


//  Id pregunta: 10396 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[73]= new Array();
 choices[73][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[73][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[73][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[73][3] = "Beneficios TIC para la Sociedad UE";
 answers[73] = 0;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 10396. ";
 preguntaids[73] = 10396


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[74]= "75)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[74]= new Array();
 choices[74][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[74][1] = "Personas con nacionalidad europea.";
 choices[74][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[74][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[74] = 3;
 units[74] = ['5'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 198. Uni&oacute;n Europea";
 preguntaids[74] = 198


