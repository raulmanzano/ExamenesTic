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
//  Id pregunta: 5777 Año de creación de pregunta: 2007
 questions[0]= "1)  Con el cifrado se asegura";
 choices[0]= new Array();
 choices[0][0] = "la autenticidad";
 choices[0][1] = "la confidencialidad";
 choices[0][2] = "la integridad, la autenticidad y el no repudio en destino";
 choices[0][3] = "la integridad, la autenticidad y el no repudio en origen";
 answers[0] = 1;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 5777. ";
 preguntaids[0] = 5777


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[1]= "2)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[1]= new Array();
 choices[1][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[1][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[1][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[1][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[1] = 0;
 units[1] = ['45'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 614. Xunta de Galicia 2015";
 preguntaids[1] = 614


//  Id pregunta: 10676 Año de creación de pregunta: 2015
 questions[2]= "3)  De entre los siguientes sujetos, &iquest;qui&eacute;n est&aacute; obligado a relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo seg&uacute;n el art&iacute;culo 14 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015?";
 choices[2]= new Array();
 choices[2][0] = "Personas jur&iacute;dicas.";
 choices[2][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[2][2] = "Notarios y registradores de la propiedad y mercantiles.";
 choices[2][3] = "Todos los anteriores.";
 answers[2] = 3;
 units[2] = ['7'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 10676. ";
 preguntaids[2] = 10676


//  Id pregunta: 5475 Año de creación de pregunta: 2007
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[3]= new Array();
 choices[3][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[3][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[3][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[3][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[3] = 0;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5475. ";
 preguntaids[3] = 5475


//  Id pregunta: 2272 Año de creación de pregunta: 2002
 questions[4]= "5)  Referente a la Agencia de Protecci&oacute;n de Datos, no es falso que:";
 choices[4]= new Array();
 choices[4][0] = "El Gobierno pueda cesar discrecionalmente a su Director";
 choices[4][1] = "El Director sea nombrado por su Consejo Consultivo";
 choices[4][2] = "El mandato del Director de la Agencia de Protecci&oacute;n de Datos tendr&aacute; una duraci&oacute;n de seis a&ntilde;os";
 choices[4][3] = "Se caracteriza por su independencia respecto de la Administraci&oacute;n";
 answers[4] = 3;
 units[4] = ['35'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2272. ";
 preguntaids[4] = 2272


//  Id pregunta: 8011 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[5]= new Array();
 choices[5][0] = "1992";
 choices[5][1] = "2008";
 choices[5][2] = "2011";
 choices[5][3] = "2012";
 answers[5] = 2;
 units[5] = ['60'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8011. Examen TIC A2 2010";
 preguntaids[5] = 8011


//  Id pregunta: 3715 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;En qu&eacute; consisten los Factores Cr&iacute;ticos del &Eacute;xito?:";
 choices[6]= new Array();
 choices[6][0] = "Son los elementos del proyecto que pueden retrasar o hundir el proyecto si no se resuelven satisfactoriamente.";
 choices[6][1] = "Son los requisitos m&aacute;s importantes del an&aacute;lisis de requisitos del sistema";
 choices[6][2] = "Son factores cr&iacute;ticos  que se miden despu&eacute;s de la terminaci&oacute;n del proyecto";
 choices[6][3] = "Son los objetivos del proyecto";
 answers[6] = 0;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3715. ";
 preguntaids[6] = 3715


//  Id pregunta: 7720 Año de creación de pregunta: 2010
 questions[7]= "8)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivel que realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el:";
 choices[7]= new Array();
 choices[7][0] = "Nivel 2.";
 choices[7][1] = "Nivel 3.";
 choices[7][2] = "Nivel 4.";
 choices[7][3] = "Nivel 5.";
 answers[7] = 1;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7720. Map 2007";
 preguntaids[7] = 7720


//  Id pregunta: 10003 Año de creación de pregunta: 2015
 questions[8]= "9)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[8]= new Array();
 choices[8][0] = "WS-Security permite crear servicios web seguros.";
 choices[8][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[8][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[8][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[8] = 3;
 units[8] = ['55'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10003. Examen TIC A2 2014";
 preguntaids[8] = 10003


//  Id pregunta: 9314 Año de creación de pregunta: 2014
 questions[9]= "10)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[9]= new Array();
 choices[9][0] = "&lt;% y %&gt;";
 choices[9][1] = "&lt;SCRIPT LANGUAGE=ASPScript&gt;&lt;/SCRIPT&gt;";
 choices[9][2] = "&lt;!-- --&gt;";
 choices[9][3] = "Los comandos ASP no se mezclan en el mismo archivo que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[9] = 0;
 units[9] = ['63'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9314. Examen TIC A2 UPM 2010";
 preguntaids[9] = 9314


//  Id pregunta: 7997 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[10]= new Array();
 choices[10][0] = "SOAP envelope.";
 choices[10][1] = "SOAP binding framework";
 choices[10][2] = "SOAP encoding rules.";
 choices[10][3] = "SOAP  RPC representation.";
 answers[10] = 2;
 units[10] = ['55'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7997. Examen TIC A2 2010";
 preguntaids[10] = 7997


//  Id pregunta: 5308 Año de creación de pregunta: 2006
 questions[11]= "12)  El servicio que copia las p&aacute;ginas de un sitio web a servidores dispersos geogr&aacute;ficamente pafa agilizar la entrega al usuario se llama";
 choices[11]= new Array();
 choices[11][0] = "procesamiento distribuido";
 choices[11][1] = "multicast";
 choices[11][2] = "cluster";
 choices[11][3] = "entrega de contenido";
 answers[11] = 3;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 5308. ";
 preguntaids[11] = 5308


//  Id pregunta: 5972 Año de creación de pregunta: 2007
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones relacionadas con Dublin Core NO es cierta?";
 choices[12]= new Array();
 choices[12][0] = "El conjunto de sus elementos est&aacute; definido en el Est&aacute;ndar Z39.85-2001 de la NISO (National InformationStandards Organization)";
 choices[12][1] = "Los metadatos Dublin Core se almacenan frecuentemente en la cabecera HEAD de un documento HTML(Hypertext Markup Language)";
 choices[12][2] = "Su nivel b&aacute;sico contiene 15 elementos sobre metadatos";
 choices[12][3] = "Es una iniciativa de la W3C (World Wide Web Consortium)";
 answers[12] = 3;
 units[12] = ['100'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 5972. ";
 preguntaids[12] = 5972


//  Id pregunta: 10888 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[13]= new Array();
 choices[13][0] = "MIB";
 choices[13][1] = "SNMP manager";
 choices[13][2] = "SNMP agent";
 choices[13][3] = "Servidor Syslog";
 answers[13] = 3;
 units[13] = ['114'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10888. ";
 preguntaids[13] = 10888


//  Id pregunta: 10318 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;A que se refiere la gu&iacute;a CCN-STIC 804?";
 choices[14]= new Array();
 choices[14][0] = "Medidas de implantaci&oacute;n del ENS";
 choices[14][1] = "Plan de Adecuaci&oacute;n del ENS";
 choices[14][2] = "Auditor&iacute;a del ENS";
 choices[14][3] = "Normas de seguridad del ENS";
 answers[14] = 0;
 units[14] = ['43'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 10318. ";
 preguntaids[14] = 10318


//  Id pregunta: 8975 Año de creación de pregunta: 2013
 questions[15]= "16)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[15]= new Array();
 choices[15][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[15][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[15][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[15][3] = "Est&aacute;n prohibidas.";
 answers[15] = 3;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 8975. Examen TIC A1 2011";
 preguntaids[15] = 8975


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[16]= "17)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[16]= new Array();
 choices[16][0] = "Un Reglamento.";
 choices[16][1] = "Un Decreto.";
 choices[16][2] = "Una Ley.";
 choices[16][3] = "Un Real-Decreto.";
 answers[16] = 2;
 units[16] = ['5'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 190. Uni&oacute;n Europea";
 preguntaids[16] = 190


//  Id pregunta: 7581 Año de creación de pregunta: 2010
 questions[17]= "18)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3 de Quinlan)";
 choices[17]= new Array();
 choices[17][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basados en la entrop&iacute;a";
 choices[17][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizando mecanismos de inducci&oacute;n";
 choices[17][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizando aprendizaje no supervisado";
 choices[17][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas e inclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[17] = 1;
 units[17] = ['68'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7581. Map 2006";
 preguntaids[17] = 7581


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[18]= "19)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[18]= new Array();
 choices[18][0] = "Al Presidente del Gobierno.";
 choices[18][1] = "A las Cortes Generales";
 choices[18][2] = "A los electores.";
 choices[18][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[18] = 3;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 23. Constituci&oacute;n de 1978";
 preguntaids[18] = 23


//  Id pregunta: 2948 Año de creación de pregunta: 2002
 questions[19]= "20)  La principal diferencia entre HTML y XML es que:";
 choices[19]= new Array();
 choices[19][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[19][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[19][2] = "XML es un subconjunto de HTML";
 choices[19][3] = "B y C son ciertas";
 answers[19] = 1;
 units[19] = ['74'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2948. ";
 preguntaids[19] = 2948


//  Id pregunta: 1215 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale los tipos de tr&aacute;fico IPv6 que hay:";
 choices[20]= new Array();
 choices[20][0] = "Unicast, Multicast y Broadcast.";
 choices[20][1] = "Somecast, Multicast y Broadcast.";
 choices[20][2] = "Unicast, Multicast y Anycast.";
 choices[20][3] = "Unicast, Megacast y Anycast.";
 answers[20] = 2;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1215. ";
 preguntaids[20] = 1215


//  Id pregunta: 10307 Año de creación de pregunta: 2015
 questions[21]= "22)  &iquest;Cu&aacute;l no es un principio general del dise&ntilde;o centrado en el usuario de Nielsen?";
 choices[21]= new Array();
 choices[21][0] = "Medida de la satisfacci&oacute;n del usuario";
 choices[21][1] = "Visibilidad del estado del sistema";
 choices[21][2] = "Dise&ntilde;o minimalista";
 choices[21][3] = "Prevenci&oacute;n y ayuda en la recuperaci&oacute;n de errores";
 answers[21] = 0;
 units[21] = ['42'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 10307. ";
 preguntaids[21] = 10307


//  Id pregunta: 7686 Año de creación de pregunta: 2010
 questions[22]= "23)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n de la vigencia de un certificado?";
 choices[22]= new Array();
 choices[22][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado.";
 choices[22][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por este, un tercero autorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica.";
 choices[22][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene.";
 choices[22][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador de servicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso.";
 answers[22] = 3;
 units[22] = ['77'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7686. Map 2007";
 preguntaids[22] = 7686


//  Id pregunta: 1035 Año de creación de pregunta: 2016
 questions[23]= "24)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[23]= new Array();
 choices[23][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[23][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[23][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[23][3] = "Todas son correctas.";
 answers[23] = 3;
 units[23] = ['4', '7', '8', '9'];
 blocks[23] = ['A1', 'A2'];
 comments[23] = "Id Pregunta: 1035. Ley 40/2015";
 preguntaids[23] = 1035


//  Id pregunta: 3819 Año de creación de pregunta: 2002
 questions[24]= "25)  En la planificaci&oacute;n de un Sistema de Informaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "El horizonte temporal del nivel t&aacute;ctico se fija en 3-5 a&ntilde;os";
 choices[24][1] = "El nivel estrat&eacute;gico fija los objetivos/metas y plazos a largo plazo";
 choices[24][2] = "El nivel estrat&eacute;gico contiene informaci&oacute;n de los tres niveles inferiores";
 choices[24][3] = "El nivel t&aacute;ctico controla a los niveles inferiores y es el nexo de comunicaci&oacute;n externa de la empresa";
 answers[24] = 1;
 units[24] = ['83'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3819. ";
 preguntaids[24] = 3819


//  Id pregunta: 991 Año de creación de pregunta: 2016
 questions[25]= "26)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[25]= new Array();
 choices[25][0] = "un &oacute;rgano superior";
 choices[25][1] = "un &oacute;rgano directivo";
 choices[25][2] = "un &oacute;rgano superior o directivo";
 choices[25][3] = "ninguna es correcta";
 answers[25] = 2;
 units[25] = ['4', '7', '8', '9'];
 blocks[25] = ['A1', 'A2'];
 comments[25] = "Id Pregunta: 991. Ley 40/2015";
 preguntaids[25] = 991


//  Id pregunta: 10315 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Por qu&eacute; acuerdo marco comprar&iacute;a usted un ordenador personal?";
 choices[26]= new Array();
 choices[26][0] = "AM 2/2013";
 choices[26][1] = "AM 10/2013";
 choices[26][2] = "AM 13/2013";
 choices[26][3] = "AM 5/2013";
 answers[26] = 0;
 units[26] = ['37'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 10315. El de servicios de desarrollo de la admin electr&oacute;nica es el AM 26/2015 entr&oacute; en vigor en 2016";
 preguntaids[26] = 10315


//  Id pregunta: 9021 Año de creación de pregunta: 2014
 questions[27]= "28)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[27]= new Array();
 choices[27][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[27][1] = "Siempre es de corta duraci&oacute;n";
 choices[27][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[27][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[27] = 0;
 units[27] = ['57'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9021. Examen TIC A1 2013";
 preguntaids[27] = 9021


//  Id pregunta: 9806 Año de creación de pregunta: 2015
 questions[28]= "29)  La ISO publica:";
 choices[28]= new Array();
 choices[28][0] = "Informes T&eacute;cnicos y Gu&iacute;as ISO.";
 choices[28][1] = "Especificaciones Internacionales y Memor&aacute;ndum de errores.";
 choices[28][2] = "A y B son correctas.";
 choices[28][3] = "La ISO no publica ning&uacute;n documento, s&oacute;lo certifica est&aacute;ndares de otras organizaciones.";
 answers[28] = 0;
 units[28] = ['48'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 9806. S&iacute; publica Technical Reports e ISO Guides. Pero no publica Especificaciones Internacionales sino Technical Specifications o Publicly Available Specifications. Tampoco publica Memor&aacute;ndums de Errores sino Correcciones T&eacute;cnicas (Technical Corrigendum).";
 preguntaids[28] = 9806


//  Id pregunta: 2557 Año de creación de pregunta: 2004
 questions[29]= "30)  &iquest;Cu&aacute;l de estas tecnologias ser&iacute;a v&aacute;lida para la conexi&oacute;n en una red de area personal de los perif&eacute;ricos m&aacute;s habituales?";
 choices[29]= new Array();
 choices[29][0] = "Ethernet";
 choices[29][1] = "Bluetooth";
 choices[29][2] = "Wifi";
 choices[29][3] = "WLAN";
 answers[29] = 1;
 units[29] = ['108'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 2557. Examen Seg-Social A 2004";
 preguntaids[29] = 2557


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[30]= "31)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[30]= new Array();
 choices[30][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[30][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[30][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[30][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[30] = 3;
 units[30] = ['1'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 77. Constituci&oacute;n de 1978";
 preguntaids[30] = 77


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[31]= new Array();
 choices[31][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[31][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[31][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[31][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[31] = 1;
 units[31] = ['5'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 114. Uni&oacute;n Europea";
 preguntaids[31] = 114


//  Id pregunta: 6209 Año de creación de pregunta: 2003
 questions[32]= "33)  Indique la secuencia correcta de actividades en que se divide el proceso de Mantenimiento del Sistema de Informaci&oacute;n de M&eacute;trica V3:";
 choices[32]= new Array();
 choices[32][0] = "An&aacute;lisis de la Petici&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[32][1] = "An&aacute;lisis de la Petici&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n.";
 choices[32][2] = "Registro de la Petici&oacute;n -&gt; An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n &gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[32][3] = "An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n.";
 answers[32] = 2;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6209. Examen TIC A Castilla La Mancha 2007";
 preguntaids[32] = 6209


//  Id pregunta: 9341 Año de creación de pregunta: 2014
 questions[33]= "34)  El t&eacute;rmino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[33]= new Array();
 choices[33][0] = "Autentication, Consistency, Integrity, Durability.";
 choices[33][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[33][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[33][3] = "Availability, Consistency, Isolation, Durability.";
 answers[33] = 2;
 units[33] = ['60'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9341. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[33] = 9341


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; pa&iacute;s entr&oacute; a formar parte de la Uni&oacute;n Europea el mismo a&ntilde;o en que formaliz&oacute; su adhesi&oacute;n nuestro pa&iacute;s?";
 choices[34]= new Array();
 choices[34][0] = "Grecia";
 choices[34][1] = "Portugal";
 choices[34][2] = "Las alternativas a) y b) son correctas";
 choices[34][3] = "Ninguno";
 answers[34] = 1;
 units[34] = ['5'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 182. Uni&oacute;n Europea";
 preguntaids[34] = 182


//  Id pregunta: 7418 Año de creación de pregunta: 2010
 questions[35]= "36)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[35]= new Array();
 choices[35][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[35][1] = "Acoplada y mediante hipervisor (bare metal)";
 choices[35][2] = "Paralela y mediante hipervisor (bare metal)";
 choices[35][3] = "Acoplada y mediante CPM (Cross Platform Manager)";
 answers[35] = 0;
 units[35] = ['124'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7418. Examen TIC B 2009";
 preguntaids[35] = 7418


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[36]= "37)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[36]= new Array();
 choices[36][0] = "Establecer tributos.";
 choices[36][1] = "Desarrollar lo establecido en una Ley.";
 choices[36][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[36][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[36] = 0;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 24. Constituci&oacute;n de 1978";
 preguntaids[36] = 24


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[37]= "38)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[37]= new Array();
 choices[37][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[37][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[37][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[37][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[37] = 2;
 units[37] = ['1'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 90. Constituci&oacute;n de 1978";
 preguntaids[37] = 90


//  Id pregunta: 5849 Año de creación de pregunta: 2007
 questions[38]= "39)  Los registros glue de una zona DNS son aquellos que:";
 choices[38]= new Array();
 choices[38][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[38][1] = "Son los registros que mantienen el espacio de nombres de la zona.";
 choices[38][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[38][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[38] = 1;
 units[38] = ['103'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5849. Examen 2006 JCYL";
 preguntaids[38] = 5849


//  Id pregunta: 1087 Año de creación de pregunta: 2016
 questions[39]= "40)  Indicar cu&aacute;l de las siguientes NO es un tipo de georreferenciaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Directa";
 choices[39][1] = "Discreta.";
 choices[39][2] = "Indirecta.";
 choices[39][3] = "Posicional.";
 answers[39] = 3;
 units[39] = ['71'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1087. ";
 preguntaids[39] = 1087


//  Id pregunta: 968 Año de creación de pregunta: 2016
 questions[40]= "41)  Las Administraciones P&uacute;blicas:";
 choices[40]= new Array();
 choices[40][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[40][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[40][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[40][3] = "todas son correctas";
 answers[40] = 1;
 units[40] = ['4', '7', '8', '9'];
 blocks[40] = ['A1', 'A2'];
 comments[40] = "Id Pregunta: 968. Ley 40/2015";
 preguntaids[40] = 968


//  Id pregunta: 1431 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes NO es una potestad de las Cortes Generales declarada en el art&iacute;culo 66 de la Constituci&oacute;n Espa&ntilde;ola?";
 choices[41]= new Array();
 choices[41][0] = "La potestad legislativa del Estado.";
 choices[41][1] = "Aprobar sus Presupuestos.";
 choices[41][2] = "La potestad reglamentaria del Estado.";
 choices[41][3] = "Controlar la acci&oacute;n del Gobierno.";
 answers[41] = 2;
 units[41] = ['1'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 1431. ";
 preguntaids[41] = 1431


//  Id pregunta: 2383 Año de creación de pregunta: 2006
 questions[42]= "43)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[42]= new Array();
 choices[42][0] = "CPM (Critical Path Method).";
 choices[42][1] = "PERT.";
 choices[42][2] = "Diagrama de Gant.";
 choices[42][3] = "PROPS.";
 answers[42] = 0;
 units[42] = ['33'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2383. ";
 preguntaids[42] = 2383


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[43][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[43][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[43][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[43] = 2;
 units[43] = ['11'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 295. Presupuestos generales";
 preguntaids[43] = 295


//  Id pregunta: 9780 Año de creación de pregunta: 2014
 questions[44]= "45)  La auditor&iacute;a bienal de cumplimiento de la LOPD y la realizaci&oacute;n de pruebas de hacking &eacute;tico tienen las siguientes similitudes y diferencias, marcar la respuesta verdadera";
 choices[44]= new Array();
 choices[44][0] = "El hacking &eacute;tico no es una herramienta de auditor&iacute;a ya que lo realizan los hackers solamente, mientras que la auditor&iacute;a LOPD lo realizan siempre juristas o personal de perfil TAC";
 choices[44][1] = "El hacking &eacute;tico es una t&eacute;cnica para probar los controles de seguridad de las aplicaciones y sirve para que un auditor de seguridad IT pueda encontrar deficiencias. Si la aplicaci&oacute;n maneja datos LOPD, la informaci&oacute;n del estado de estos controles puede servir de apoyo a la auditor&iacute;a de cumplimiento del reglamento asociado a la LOPD que tambi&eacute;n debe verificarse en la auditor&iacute;a bienal, que incluir&aacute; tanto aspectos organizativos como t&eacute;cnicos.";
 choices[44][2] = "La Auditor&iacute;a LOPD es una auditor&iacute;a IT estrictamente hablando, ya que no debe entrar a valorar aspectos organizativos y procedimientales mientras que el hacking &eacute;tico entra a valorar los valores &eacute;ticos de la empresa de cara al tratamiento de la informaci&oacute;n, en particular los datos de car&aacute;cter personal.";
 choices[44][3] = "El hacking &eacute;tico requiere de personal t&eacute;cnico exclusivamente (hackers o no) mientras que la auditor&iacute;a de cumplimiento de la LOPD s&oacute;lo debe contar con personal jurista y los responsables funcionales de las aplicaciones LOPD involucradas pero no a t&eacute;cnicos.";
 answers[44] = 1;
 units[44] = ['79', '36', '35'];
 blocks[44] = ['B2', 'B1'];
 comments[44] = "Id Pregunta: 9780. ";
 preguntaids[44] = 9780


//  Id pregunta: 3477 Año de creación de pregunta: 2006
 questions[45]= "46)  Se&ntilde;ale la falsa:";
 choices[45]= new Array();
 choices[45][0] = "La Ley General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[45][1] = "La ley de Firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[45][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[45][3] = "Son ciertas las tres anteriores";
 answers[45] = 3;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 3477. ";
 preguntaids[45] = 3477


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[46]= "47)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[46]= new Array();
 choices[46][0] = "Presencia equilibrada.";
 choices[46][1] = "Presencia paritaria.";
 choices[46][2] = "Presencia consensuada.";
 choices[46][3] = "presencia horizontal.";
 answers[46] = 0;
 units[46] = ['14'];
 blocks[46] = ['A3'];
 comments[46] = "Id Pregunta: 405. Pol&iacute;ticas de igualdad";
 preguntaids[46] = 405


//  Id pregunta: 3045 Año de creación de pregunta: 2002
 questions[47]= "48)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[47]= new Array();
 choices[47][0] = "El RISC tiene m&aacute;s registros";
 choices[47][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[47][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[47][3] = "Todas las respuestas anteriores son ciertas";
 answers[47] = 3;
 units[47] = ['50', '51'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3045. ";
 preguntaids[47] = 3045


//  Id pregunta: 8542 Año de creación de pregunta: 2011
 questions[48]= "49)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos";
 choices[48]= new Array();
 choices[48][0] = "N&uacute;mero de entrada de registro";
 choices[48][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n y notificaci&oacute;n del procedimiento";
 choices[48][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada";
 choices[48][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico";
 answers[48] = 3;
 units[48] = ['43'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 8542. ";
 preguntaids[48] = 8542


//  Id pregunta: 4446 Año de creación de pregunta: 2002
 questions[49]= "50)  Una de las caracter&iacute;sticas fundamentales de los sistemas de recuperaci&oacute;n de informaci&oacute;n es:";
 choices[49]= new Array();
 choices[49][0] = "Trabaja con informaci&oacute;n estructurada de tipo imagen";
 choices[49][1] = "Maneja grandes vol&uacute;menes de informaci&oacute;n no estructurada, combinando norm&aacute;lmente texto e im&aacute;genes";
 choices[49][2] = "Trabaja con informaci&oacute;n estructurada y vol&uacute;menes de informaci&oacute;n medio/bajos";
 choices[49][3] = "Su objeto es la recuperaci&oacute;n de ficheros y bases de datos";
 answers[49] = 1;
 units[49] = ['24'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 4446. ";
 preguntaids[49] = 4446


//  Id pregunta: 8731 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes NO es una prerrogativa de la Administraci&oacute;n seg&uacute;n el Texto Refundido de la Ley de Contratos del Sector P&uacute;blico?";
 choices[50]= new Array();
 choices[50][0] = "Disminuir la cuant&iacute;a econ&oacute;mica del contrato por razones de d&eacute;ficit excesivo.";
 choices[50][1] = "Acordar la resoluci&oacute;n del contrato y determinar los efectos de tal resoluci&oacute;n";
 choices[50][2] = "Modificar los contratos por razones de inter&eacute;s p&uacute;blico.";
 choices[50][3] = "Interpretar los contratos.";
 answers[50] = 0;
 units[50] = ['37'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 8731. Art. 210 RD Legislativo 3/2011";
 preguntaids[50] = 8731


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[51]= "52)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[51]= new Array();
 choices[51][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[51][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[51][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[51][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[51] = 1;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 480. Sociedad de la informaci&oacute;n";
 preguntaids[51] = 480


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[52]= "53)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[52]= new Array();
 choices[52][0] = "X.";
 choices[52][1] = "XIX.";
 choices[52][2] = "XV.";
 choices[52][3] = "XIII.";
 answers[52] = 1;
 units[52] = ['5'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 147. Uni&oacute;n Europea";
 preguntaids[52] = 147


//  Id pregunta: 7607 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[53]= new Array();
 choices[53][0] = "No precisa se&ntilde;al de reloj externa.";
 choices[53][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros.";
 choices[53][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas.";
 choices[53][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus.";
 answers[53] = 1;
 units[53] = ['53'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7607. Map 2006";
 preguntaids[53] = 7607


//  Id pregunta: 4591 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;En qu&eacute; consiste el denominado MAC - Control de acceso al medio?:";
 choices[54]= new Array();
 choices[54][0] = "Es el protocolo de aplicaciones usado en redes punto a punto";
 choices[54][1] = "Es un mecanismo de seguridad en redes de comunicaciones para controlar el acceso a la informaci&oacute;n";
 choices[54][2] = "Es un subnivel del nivel de enlace de datos encargado de regular el acceso al medio de transmisi&oacute;n";
 choices[54][3] = "Es el mecanismo de transmisi&oacute;n espec&iacute;fico de las redes Ethernet";
 answers[54] = 2;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4591. ";
 preguntaids[54] = 4591


//  Id pregunta: 6810 Año de creación de pregunta: 2010
 questions[55]= "56)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[55]= new Array();
 choices[55][0] = "Extraer la direcci&oacute;n de correo de un usuario.";
 choices[55][1] = "Relacionar sucesivas conexiones de un cliente.";
 choices[55][2] = "Enviar un objeto al cliente cuando su copia cach&eacute; est&aacute; obsoleta.";
 choices[55][3] = "Enviar c&oacute;digo embebido en la p&aacute;gina HTML que se ejecutar&aacute; en el cliente.";
 answers[55] = 1;
 units[55] = ['113'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 6810. TIC A 2009";
 preguntaids[55] = 6810


//  Id pregunta: 8271 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;En qu&eacute; generaci&oacute;n de ordenadores se empez&oacute; a utilizar el transistor?";
 choices[56]= new Array();
 choices[56][0] = "En la primera generaci&oacute;n,";
 choices[56][1] = "En la segunda generaci&oacute;n";
 choices[56][2] = "En la tercera generaci&oacute;n.";
 choices[56][3] = "En la cuarta generaci&oacute;n";
 answers[56] = 1;
 units[56] = ['49'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8271. Examen TIC A2 2010 interna";
 preguntaids[56] = 8271


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[57]= new Array();
 choices[57][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[57][1] = "El Gobierno.";
 choices[57][2] = "El Presidente del Gobierno.";
 choices[57][3] = "El Consejo de Ministros.";
 answers[57] = 1;
 units[57] = ['11'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 306. Presupuestos generales";
 preguntaids[57] = 306


//  Id pregunta: 7834 Año de creación de pregunta: 2010
 questions[58]= "59)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[58]= new Array();
 choices[58][0] = "Es una especificaci&oacute;n desarrollada por la W3C.";
 choices[58][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar.";
 choices[58][2] = "P3P est&aacute; basado en CCXML.";
 choices[58][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P.";
 answers[58] = 2;
 units[58] = ['74'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7834. ";
 preguntaids[58] = 7834


//  Id pregunta: 8267 Año de creación de pregunta: 2011
 questions[59]= "60)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[59]= new Array();
 choices[59][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[59][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[59][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[59][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[59] = 0;
 units[59] = ['7'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 8267. Examen TIC A2 2010 interna";
 preguntaids[59] = 8267


//  Id pregunta: 9897 Año de creación de pregunta: 2015
 questions[60]= "61)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[60]= new Array();
 choices[60][0] = "Enero de 2013.";
 choices[60][1] = "Junio de 2013.";
 choices[60][2] = "Diciembre de 2013.";
 choices[60][3] = "Enero de 2014.";
 answers[60] = 1;
 units[60] = ['7', '19'];
 blocks[60] = ['A2', 'A4'];
 comments[60] = "Id Pregunta: 9897. ";
 preguntaids[60] = 9897


//  Id pregunta: 2493 Año de creación de pregunta: 2004
 questions[61]= "62)  En UNIX, &iquest;qui&eacute;n es el due&ntilde;o del proceso una vez ejecutada la instrucci&oacute;n lpr?";
 choices[61]= new Array();
 choices[61][0] = "root";
 choices[61][1] = "el usuario que la ha ejecutado";
 choices[61][2] = "el programa de control de la cola de impresora";
 choices[61][3] = "scheduler";
 answers[61] = 2;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2493. Similar a examen TIC SS A 2003";
 preguntaids[61] = 2493


//  Id pregunta: 3178 Año de creación de pregunta: 2002
 questions[62]= "63)  Respecto a la LSSICE:";
 choices[62]= new Array();
 choices[62][0] = "Son prestadores de servicios de la sociedad de la informaci&oacute;n aquellas empresas, organismos o instituciones que presten o promocionen un bien o servicio a t&iacute;tulo oneroso";
 choices[62][1] = "La ley prohibe enviar comunicaciones publicitarias por correo electr&oacute;nico que previamente no hubieran sido solicitadas o autorizadas expresamente por el destinatario";
 choices[62][2] = "El texto legal da plena validez y eficacia a los contratos celebrados por v&iacute;a electr&oacute;nica, a&uacute;n en el caso de que ninguna de las partes tenga la condici&oacute;n de prestador o destinatario de servicios de la sociedad de la informaci&oacute;n";
 choices[62][3] = "Todas las afirmaciones anteriores son correctas";
 answers[62] = 3;
 units[62] = ['19'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 3178. ";
 preguntaids[62] = 3178


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; es la esteganograf&iacute;a?";
 choices[63]= new Array();
 choices[63][0] = "Es equivalente al cifrado, especialmente en im&aacute;genes digitales, audio, ficheros y video digital.";
 choices[63][1] = "Es un tipo de troyano.";
 choices[63][2] = "Actualmente no se utiliza para el env&iacute;o de informaci&oacute;n.";
 choices[63][3] = "Es el envio de un mensaje oculto, especialmente en im&aacute;genes digitales, audio, ficheros y video digital.";
 answers[63] = 3;
 units[63] = ['76'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 776. AGE A2 2015";
 preguntaids[63] = 776


//  Id pregunta: 5831 Año de creación de pregunta: 2007
 questions[64]= "65)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque&hellip;";
 choices[64]= new Array();
 choices[64][0] = "el lenguaje Java se deriva de C++.";
 choices[64][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[64][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[64][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[64] = 1;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 5831. Examen 2006 JCYL";
 preguntaids[64] = 5831


//  Id pregunta: 10347 Año de creación de pregunta: 2015
 questions[65]= "66)  &iquest;Cu&aacute;ntos niveles de seguridad define el proyecto STORK?";
 choices[65]= new Array();
 choices[65][0] = "3";
 choices[65][1] = "4";
 choices[65][2] = "5";
 choices[65][3] = "6";
 answers[65] = 1;
 units[65] = ['77'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 10347. eIDAS se queda con 3";
 preguntaids[65] = 10347


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[66]= "67)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[66]= new Array();
 choices[66][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[66][1] = "Programa de cartas de servicios";
 choices[66][2] = "Programa para la mejora continua de las organizaciones.";
 choices[66][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[66] = 2;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 454. Direcci&oacute;n p&uacute;blica";
 preguntaids[66] = 454


//  Id pregunta: 1775 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n el art. 18 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[67]= new Array();
 choices[67][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de opini&oacute;n de las personas.";
 choices[67][1] = "La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 choices[67][2] = "Se garantiza el secreto inviolable de las comunicaciones postales, telegr&aacute;ficas y telef&oacute;nicas.";
 choices[67][3] = "Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen, salvo resoluci&oacute;n judicial.";
 answers[67] = 1;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 1775. ";
 preguntaids[67] = 1775


//  Id pregunta: 5706 Año de creación de pregunta: 2007
 questions[68]= "69)  El articulo 60 del RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que en ning&uacute;n caso podr&aacute;n contratar con la Administraci&oacute;n las personas en quienes concurra alguna de las circunstancias siguientes:";
 choices[68]= new Array();
 choices[68][0] = "haber dado lugar, por causa de la que hubiesen sido declarados culpables, a la suspensi&oacute;n de cualquier contrato celebrado con Ia Administraci&oacute;n";
 choices[68][1] = "no hallarse al corriente en el cumplimiento de las obligaciones tributarias o de Seguridad Social impuestas por las disposiciones vigentes, en los t&eacute;rminos que reglamentariamente se determine.";
 choices[68][2] = "no hallarse debidamente clasificadas, en su caso conforme a lo dispuesto en la Ley de Contratos del Sector P&uacute;blico o no acreditar la suficiente solvencia econ&oacute;mica, practica y t&eacute;cnica.";
 choices[68][3] = "haber incurrido en falsedad al facilitar a la Administraci&oacute;n las declaraciones exigibles en el cumplimiento de las disposiciones de esta Ley y de sus normas de desarrollo.";
 answers[68] = 1;
 units[68] = ['37'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 5706. ";
 preguntaids[68] = 5706


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[69]= "70)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[69]= new Array();
 choices[69][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[69][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[69][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[69][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[69] = 3;
 units[69] = ['101'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 862. AGE A1 2015";
 preguntaids[69] = 862


//  Id pregunta: 4723 Año de creación de pregunta: 2002
 questions[70]= "71)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de &aacute;rea metropolitana:";
 choices[70]= new Array();
 choices[70][0] = "802.6";
 choices[70][1] = "802.7";
 choices[70][2] = "802.8";
 choices[70][3] = "802.9";
 answers[70] = 0;
 units[70] = ['112'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4723. ";
 preguntaids[70] = 4723


//  Id pregunta: 974 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[71]= new Array();
 choices[71][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[71][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[71][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[71][3] = "todas son correctas";
 answers[71] = 1;
 units[71] = ['4', '7', '8', '9'];
 blocks[71] = ['A1', 'A2'];
 comments[71] = "Id Pregunta: 974. Ley 40/2015";
 preguntaids[71] = 974


//  Id pregunta: 921 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;C&oacute;mo se podr&iacute;an mitigar los ataques XSS (Cross-Site Scripting) a una aplicaci&oacute;n web?";
 choices[72]= new Array();
 choices[72][0] = "Mediante el uso de certificados electr&oacute;nicos.";
 choices[72][1] = "Mediante el filtrado de datos maliciosos en la entrada de la aplicaci&oacute;n, en la salida o en ambas.";
 choices[72][2] = "Mediante la creaci&oacute;n de reglas que permite un cortafuegos tradicional.";
 choices[72][3] = "Mediante la configuraci&oacute;n de listas de control de accesos (ACL).";
 answers[72] = 1;
 units[72] = ['120'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 921. AGE A2 2015";
 preguntaids[72] = 921


//  Id pregunta: 1474 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;De qu&eacute; orden de complejidad es la b&uacute;squeda dicot&oacute;mica en una tabla ordenada?";
 choices[73]= new Array();
 choices[73][0] = "Logar&iacute;tmica.";
 choices[73][1] = "Lineal.";
 choices[73][2] = "Exponencial.";
 choices[73][3] = "Cuadr&aacute;tica.";
 answers[73] = 0;
 units[73] = ['87'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1474. ";
 preguntaids[73] = 1474


//  Id pregunta: 8398 Año de creación de pregunta: 2011
 questions[74]= "75)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[74]= new Array();
 choices[74][0] = "El padr&oacute;n municipal.";
 choices[74][1] = "Los diarios oficiales.";
 choices[74][2] = "El censo promocional.";
 choices[74][3] = "Los medios de comunicaci&oacute;n";
 answers[74] = 0;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 8398. Operador Ayto. Madrid 2010";
 preguntaids[74] = 8398


