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
//  Id pregunta: 5530 Año de creación de pregunta: 2007
 questions[0]= "1)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[0]= new Array();
 choices[0][0] = "&lt;table&gt;";
 choices[0][1] = "&lt;tr&gt;";
 choices[0][2] = "&lt;th&gt;";
 choices[0][3] = "&lt;td&gt;";
 answers[0] = 3;
 units[0] = ['74'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 5530. ";
 preguntaids[0] = 5530


//  Id pregunta: 9127 Año de creación de pregunta: 2014
 questions[1]= "2)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;A qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[1]= new Array();
 choices[1][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[1][1] = "Algoritmos de regresi&oacute;n.";
 choices[1][2] = "Algoritmos de segmentaci&oacute;n.";
 choices[1][3] = "Algoritmos de asociaci&oacute;n.";
 answers[1] = 0;
 units[1] = ['72'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9127. Examen TIC A2 2013";
 preguntaids[1] = 9127


//  Id pregunta: 10058 Año de creación de pregunta: 2015
 questions[2]= "3)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[2]= new Array();
 choices[2][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[2][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[2][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[2][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[2] = 3;
 units[2] = ['94'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 10058. Examen TIC A2 2014";
 preguntaids[2] = 10058


//  Id pregunta: 6114 Año de creación de pregunta: 2003
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&quot;Secure Socket Layer&quot;) es correcta?:";
 choices[3]= new Array();
 choices[3][0] = "S&oacute;lo proporciona servicios de seguridad para el protocolo HTTP (&quot;HyperText Transfer Protocol&quot;)";
 choices[3][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir";
 choices[3][2] = "El protocolo se implementa entre los niveles de Transporte y de Red";
 choices[3][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n";
 answers[3] = 3;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6114. Examen TIC A1 MAP 2007";
 preguntaids[3] = 6114


//  Id pregunta: 9353 Año de creación de pregunta: 2014
 questions[4]= "5)  Elija la respuesta correcta:";
 choices[4]= new Array();
 choices[4][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[4][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[4][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[4][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[4] = 0;
 units[4] = ['63'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9353. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[4] = 9353


//  Id pregunta: 5628 Año de creación de pregunta: 2007
 questions[5]= "6)  El algoritmo de cifrado Rijndael puede ser especificado por una clave:";
 choices[5]= new Array();
 choices[5][0] = "Fija de 256 bits";
 choices[5][1] = "Con un m&iacute;nimo de 128 bits y un m&aacute;ximo de 256 bits";
 choices[5][2] = "Fija de 128 bits";
 choices[5][3] = "Con un m&iacute;nimo de 256 bits y un m&aacute;ximo de 1024 bits";
 answers[5] = 1;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 5628. ";
 preguntaids[5] = 5628


//  Id pregunta: 2480 Año de creación de pregunta: 2004
 questions[6]= "7)  Un sistema multiproceso NUMA se diferencia de uno SMP en:";
 choices[6]= new Array();
 choices[6][0] = "Su menor escalabilidad.";
 choices[6][1] = "Su utilizaci&oacute;n de una red de &aacute;rea local en lugar de un bus para la comunicaci&oacute;n entre CPU's.";
 choices[6][2] = "Su utilizaci&oacute;n de m&aacute;s de un bus para comunicar CPU's y memoria.";
 choices[6][3] = "Su falta de mecanismos de coherencia de cache.";
 answers[6] = 2;
 units[6] = ['49'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2480. ";
 preguntaids[6] = 2480


//  Id pregunta: 5575 Año de creación de pregunta: 2007
 questions[7]= "8)  Si para un sistema de acceso basado en control biom&eacute;trico, FAR = 0% y FRR=12%, puede afirmarse que...";
 choices[7]= new Array();
 choices[7][0] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido denegados.";
 choices[7][1] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 12% de los accesos autorizados han sido denegados.";
 choices[7][2] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 88% de los accesos autorizados han sido denegados.";
 choices[7][3] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido permitidos.";
 answers[7] = 1;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 5575. ";
 preguntaids[7] = 5575


//  Id pregunta: 10056 Año de creación de pregunta: 2015
 questions[8]= "9)  La herramienta que incluye JAXB para convertir un XML Schema a representaciones de clases Java se denomina:";
 choices[8]= new Array();
 choices[8][0] = "jconverter";
 choices[8][1] = "schemagen";
 choices[8][2] = "xjc";
 choices[8][3] = "jaxbws";
 answers[8] = 2;
 units[8] = ['74'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10056. Examen TIC A2 2014";
 preguntaids[8] = 10056


//  Id pregunta: 5798 Año de creación de pregunta: 2007
 questions[9]= "10)  Un detector de intrusiones act&uacute;a a:";
 choices[9]= new Array();
 choices[9][0] = "nivel f&iacute;sico";
 choices[9][1] = "nivel de enlace";
 choices[9][2] = "nivel de red";
 choices[9][3] = "nivel de aplicaci&oacute;n";
 answers[9] = 3;
 units[9] = ['119', '120'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5798. ";
 preguntaids[9] = 5798


//  Id pregunta: 2661 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[10]= new Array();
 choices[10][0] = "El motor de base de datos JET de Access";
 choices[10][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[10][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[10][3] = "El Ayudante de Office";
 answers[10] = 3;
 units[10] = ['58', '68'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2661. ";
 preguntaids[10] = 2661


//  Id pregunta: 4074 Año de creación de pregunta: 2003
 questions[11]= "12)  &iquest;En el Modelo Entidad Relaci&oacute;n, qu&eacute; es el tipo de correspondencia?";
 choices[11]= new Array();
 choices[11][0] = "Es el n&uacute;mero de entidades que participan en una asociaci&oacute;n.";
 choices[11][1] = "Representa el tipo de entidades que participan en una asociaci&oacute;n";
 choices[11][2] = "Es el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de una entidad que pueden estar asociadas con una ocurrencia de otra u otras entidades participantes en la asociaci&oacute;n.";
 choices[11][3] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada entidad conectada que pueden intervenir en una ocurrencia de la asociaci&oacute;n.";
 answers[11] = 3;
 units[11] = ['85'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4074. ";
 preguntaids[11] = 4074


//  Id pregunta: 5342 Año de creación de pregunta: 2006
 questions[12]= "13)  Especificaci&oacute;n industrial que describe como m&oacute;viles, ordenadores y PDAs pueden interconectarse entre s&iacute; usando una conexi&oacute;n inal&aacute;mbrica de corta distancia";
 choices[12]= new Array();
 choices[12][0] = "Bluetooth";
 choices[12][1] = "EMI";
 choices[12][2] = "Wimax";
 choices[12][3] = "IrDA";
 answers[12] = 0;
 units[12] = ['108'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5342. ";
 preguntaids[12] = 5342


//  Id pregunta: 1788 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el art. 20 de la Ley org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, en las disposiciones de creaci&oacute;n o modificaci&oacute;n de los ficheros de las administraciones p&uacute;blicas NO es necesario que se recoja:";
 choices[13]= new Array();
 choices[13][0] = "La finalidad del fichero y los usos previstos para &eacute;l.";
 choices[13][1] = "El procedimiento de recogida de los datos de car&aacute;cter personal.";
 choices[13][2] = "Las cesiones de datos de car&aacute;cter personal y, en su caso, las transferencias de datos que se prevean a pa&iacute;ses terceros.";
 choices[13][3] = "El destino de los datos para el caso de supresi&oacute;n del fichero y las previsiones a adoptar para su destrucci&oacute;n.";
 answers[13] = 3;
 units[13] = ['35'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 1788. ";
 preguntaids[13] = 1788


//  Id pregunta: 6160 Año de creación de pregunta: 2003
 questions[14]= "15)  Un servicio de directorio electr&oacute;nico NO se caracteriza por";
 choices[14]= new Array();
 choices[14][0] = "ser flexible";
 choices[14][1] = "Aceptar cierta inconsistencia temporal de la informaci&oacute;n en su replicaci&oacute;n";
 choices[14][2] = "Ser est&aacute;tico";
 choices[14][3] = "Poder ser consultado y actualizado en l&iacute;nea";
 answers[14] = 2;
 units[14] = ['77'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6160. ";
 preguntaids[14] = 6160


//  Id pregunta: 2117 Año de creación de pregunta: 2002
 questions[15]= "16)  En auditor&iacute;a inform&aacute;tica, el objeto de una &quot;prueba de cumplimiento&quot; es:";
 choices[15]= new Array();
 choices[15][0] = "Verificar el cumplimiento de la legislaci&oacute;n y la normativa vigente en las operaciones de un sistema de informaci&oacute;n, especialmente en el cap&iacute;tulo de compras y gesti&oacute;n de personal";
 choices[15][1] = "Sustanciar la probabilidad de que los objetivos de control no se alcancen";
 choices[15][2] = "Determinar si los controles se est&aacute;n aplicando de la forma descrita en la documentaci&oacute;n o de la forma descrita por el usuario o directivo";
 choices[15][3] = "Verificar que todos los usuarios se adhieren voluntaria u obligatoriamente a la pol&iacute;tica sobre usos de recursos inform&aacute;ticos implantada por la Direcci&oacute;n";
 answers[15] = 2;
 units[15] = ['36', '45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 2117. ";
 preguntaids[15] = 2117


//  Id pregunta: 2160 Año de creación de pregunta: 2002
 questions[16]= "17)  En la metodolog&iacute;a MAGERIT, la actividad &quot;Interpretaci&oacute;n del Riesgo&quot; corresponde a la etapa de:";
 choices[16]= new Array();
 choices[16][0] = "Planificaci&oacute;n";
 choices[16][1] = "An&aacute;lisis de riesgos";
 choices[16][2] = "Gesti&oacute;n de riesgos";
 choices[16][3] = "Selecci&oacute;n de salvaguardas";
 answers[16] = 2;
 units[16] = ['45'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2160. ";
 preguntaids[16] = 2160


//  Id pregunta: 9972 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Qu&eacute; plazo se establece para la realizaci&oacute;n del informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[17]= new Array();
 choices[17][0] = "1 mes";
 choices[17][1] = "20 d&iacute;as";
 choices[17][2] = "10 d&iacute;as";
 choices[17][3] = "3 meses";
 answers[17] = 2;
 units[17] = ['26'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9972. ";
 preguntaids[17] = 9972


//  Id pregunta: 1618 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta. Los procedimientos de control de cambios ayudan a mantener la integridad de la informaci&oacute;n del sistema asegurando que:";
 choices[18]= new Array();
 choices[18][0] = "El c&oacute;digo pasado a producci&oacute;n est&aacute; autorizado.";
 choices[18][1] = "El c&oacute;digo de producci&oacute;n est&aacute; libre de errores.";
 choices[18][2] = "Los datos activos son peri&oacute;dicamente auditados.";
 choices[18][3] = "Los datos activos son actualizados peri&oacute;dicamente.";
 answers[18] = 0;
 units[18] = ['96'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 1618. ";
 preguntaids[18] = 1618


//  Id pregunta: 3684 Año de creación de pregunta: 2002
 questions[19]= "20)  Indicar la afirmaci&oacute;n falsa sobre dise&ntilde;o estructurado:";
 choices[19]= new Array();
 choices[19][0] = "Se define el concepto del dise&ntilde;o estructurado como el proceso de definici&oacute;n de la arquitectura software: componentes, m&oacute;dulos, interfaces, procedimientos de prueba y datos de un sistema que se crean para satisfacer unos requisitos especificados.";
 choices[19][1] = "Podemos entender por cohesi&oacute;n la caracter&iacute;stica que presenta un m&oacute;dulo perteneciente a una aplicaci&oacute;n de ejecutar una tarea &uacute;nica y bien definida, encadenada a otras en una secuencia concreta para constituir un procedimiento dentro del logical.";
 choices[19][2] = "Por oposici&oacute;n al concepto de cohesi&oacute;n, que es una medida de la coherencia y/o complejidad funcional interna de un m&oacute;dulo, encontramos el acoplamiento, como medida de la complejidad externa del mismo de acuerdo a sus interfaces.";
 choices[19][3] = "Todas las respuestas anteriores son verdaderas.";
 answers[19] = 3;
 units[19] = ['89'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3684. ";
 preguntaids[19] = 3684


//  Id pregunta: 3957 Año de creación de pregunta: 2002
 questions[20]= "21)  Seg&uacute;n los estudios de calidad, &iquest;en qu&eacute; fase del desarrollo los errores son m&aacute;s costosos si no han sido detectados una vez finalizado el proyecto?:";
 choices[20]= new Array();
 choices[20][0] = "Especificaci&oacute;n";
 choices[20][1] = "Dise&ntilde;o";
 choices[20][2] = "Codificaci&oacute;n";
 choices[20][3] = "Otros";
 answers[20] = 0;
 units[20] = ['92'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3957. ";
 preguntaids[20] = 3957


//  Id pregunta: 3234 Año de creación de pregunta: 2013
 questions[21]= "22)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[21]= new Array();
 choices[21][0] = "63";
 choices[21][1] = "127";
 choices[21][2] = "256";
 choices[21][3] = "1024";
 answers[21] = 1;
 units[21] = ['52'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3234. Similar Junta Andaluc&iacute;a";
 preguntaids[21] = 3234


//  Id pregunta: 8525 Año de creación de pregunta: 2012
 questions[22]= "23)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[22]= new Array();
 choices[22][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[22][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[22][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial.";
 choices[22][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[22] = 2;
 units[22] = ['10'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 8525. Art. 40 RD Legislativo 3/2011";
 preguntaids[22] = 8525


//  Id pregunta: 7370 Año de creación de pregunta: 2010
 questions[23]= "24)  Los sistemas OLTP se utilizan para:";
 choices[23]= new Array();
 choices[23][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[23][1] = "Generar informes para la direcci&oacute;n.";
 choices[23][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[23][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[23] = 2;
 units[23] = ['72'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7370. Examen TIC B 2009";
 preguntaids[23] = 7370


//  Id pregunta: 10277 Año de creación de pregunta: 2015
 questions[24]= "25)  La MEJOR descripci&oacute;n de la prioridad de una Incidencia es&hellip;";
 choices[24]= new Array();
 choices[24][0] = "La importancia relativa de una Incidencia basada en su impacto y urgencia";
 choices[24][1] = "La velocidad con la que necesita ser resuelta la Incidencia";
 choices[24][2] = "El n&uacute;mero de personas que ser&aacute;n asignadas para trabajar en la Incidencia con el fin de que se resuelva dentro del plazo";
 choices[24][3] = "El camino de escalado que debe seguir para asegurar la resoluci&oacute;n de la Incidencia";
 answers[24] = 0;
 units[24] = ['101'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10277. ";
 preguntaids[24] = 10277


//  Id pregunta: 3484 Año de creación de pregunta: 2006
 questions[25]= "26)  Los controladores RAID hardware son mucho m&aacute;s r&aacute;pidos que los software. Tambi&eacute;n son mucho m&aacute;s";
 choices[25]= new Array();
 choices[25][0] = "Seguros";
 choices[25][1] = "Fiables";
 choices[25][2] = "Voluminosos";
 choices[25][3] = "Caros";
 answers[25] = 3;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3484. ";
 preguntaids[25] = 3484


//  Id pregunta: 5105 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes series no es congruente?:";
 choices[26]= new Array();
 choices[26][0] = "http, https.";
 choices[26][1] = "smtp, pop-3, mime.";
 choices[26][2] = "xml, xsl, xjar.";
 choices[26][3] = "direcci&oacute;n IP, m&aacute;scara, dominio.";
 answers[26] = 2;
 units[26] = ['116'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5105. Junta Andaluc&iacute;a";
 preguntaids[26] = 5105


//  Id pregunta: 4704 Año de creación de pregunta: 2002
 questions[27]= "28)  El PMD:";
 choices[27]= new Array();
 choices[27][0] = "Es el acr&oacute;nimo de Physical Medium Dependent";
 choices[27][1] = "Pertenece al Nivel 2 de 802.11";
 choices[27][2] = "Es la uni&oacute;n entre MAC y PLCP";
 choices[27][3] = "Todas las anteriores respuestas son correctas";
 answers[27] = 0;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4704. ";
 preguntaids[27] = 4704


//  Id pregunta: 9976 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un objetivo estrat&eacute;gico del Plan de Transformaci&oacute;n Digital?";
 choices[28]= new Array();
 choices[28][0] = "Incremento de la productividad y eficacia en el funcionamiento interno de la Administraci&oacute;n";
 choices[28][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n";
 choices[28][2] = "Mayor eficiencia en la prestaci&oacute;n de los servicios TIC en el seno de la Administraci&oacute;n";
 choices[28][3] = "Estrategia corporativa de interoperabilidad";
 answers[28] = 3;
 units[28] = ['26'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 9976. ";
 preguntaids[28] = 9976


//  Id pregunta: 1004 Año de creación de pregunta: 2016
 questions[29]= "30)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[29]= new Array();
 choices[29][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[29][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[29][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[29][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[29] = 1;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 1004. Ley 40/2015";
 preguntaids[29] = 1004


//  Id pregunta: 4538 Año de creación de pregunta: 2002
 questions[30]= "31)  La anchura est&aacute;ndar de un rack es:";
 choices[30]= new Array();
 choices[30][0] = "11 pulgadas";
 choices[30][1] = "25 pulgadas";
 choices[30][2] = "19 pulgadas";
 choices[30][3] = "15 pulgadas";
 answers[30] = 2;
 units[30] = ['46'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 4538. ";
 preguntaids[30] = 4538


//  Id pregunta: 6462 Año de creación de pregunta: 2003
 questions[31]= "32)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.17 del IEEE?";
 choices[31]= new Array();
 choices[31][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[31][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[31][2] = "Resilient Packet Ring";
 choices[31][3] = "Traspaso entre redes";
 answers[31] = 2;
 units[31] = ['112'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6462. ";
 preguntaids[31] = 6462


//  Id pregunta: 8731 Año de creación de pregunta: 2013
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes NO es una prerrogativa de la Administraci&oacute;n seg&uacute;n el Texto Refundido de la Ley de Contratos del Sector P&uacute;blico?";
 choices[32]= new Array();
 choices[32][0] = "Disminuir la cuant&iacute;a econ&oacute;mica del contrato por razones de d&eacute;ficit excesivo.";
 choices[32][1] = "Acordar la resoluci&oacute;n del contrato y determinar los efectos de tal resoluci&oacute;n";
 choices[32][2] = "Modificar los contratos por razones de inter&eacute;s p&uacute;blico.";
 choices[32][3] = "Interpretar los contratos.";
 answers[32] = 0;
 units[32] = ['37'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 8731. Art. 210 RD Legislativo 3/2011";
 preguntaids[32] = 8731


//  Id pregunta: 6124 Año de creación de pregunta: 2003
 questions[33]= "34)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[33]= new Array();
 choices[33][0] = "24 meses";
 choices[33][1] = "5 a&ntilde;os";
 choices[33][2] = "30 meses";
 choices[33][3] = "4 a&ntilde;os";
 answers[33] = 1;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 6124. Examen TIC A1 MAP 2007";
 preguntaids[33] = 6124


//  Id pregunta: 5443 Año de creación de pregunta: 2007
 questions[34]= "35)  Si para consolidar una transacci&oacute;n en un sistema relacional se utiliza la sentencia COMMIT, &iquest;qu&eacute; sentencia se utiliza para retroceder una transacci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "NO COMMIT.";
 choices[34][1] = "ROLLBACK";
 choices[34][2] = "END TRANSACTION.";
 choices[34][3] = "BACK TRANSACTION.";
 answers[34] = 1;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5443. ";
 preguntaids[34] = 5443


//  Id pregunta: 9105 Año de creación de pregunta: 2014
 questions[35]= "36)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[35]= new Array();
 choices[35][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[35][1] = "impide la ingenier&iacute;a inversa.";
 choices[35][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[35][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[35] = 1;
 units[35] = ['97'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 9105. Examen TIC-A1 2013";
 preguntaids[35] = 9105


//  Id pregunta: 10490 Año de creación de pregunta: 2015
 questions[36]= "37)  En relaci&oacute;n a la gesti&oacute;n documental, de contenidos y portales &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[36]= new Array();
 choices[36][0] = "La gesti&oacute;n de portales suele constituir la capa de presentaci&oacute;n, y la documental la de persistencia";
 choices[36][1] = "La gesti&oacute;n de contenidos suele constituir la capa de persistencia, mientras que la gesti&oacute;n documental es la capa de negocio";
 choices[36][2] = "La gesti&oacute;n de portales suele constituir la capa de negocio y la gesti&oacute;n documental la de presentaci&oacute;n";
 choices[36][3] = "La gesti&oacute;n de portales suele constituir la capa de persistencia, mientras que la de contenidos es la de presentaci&oacute;n";
 answers[36] = 0;
 units[36] = ['99'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 10490. ";
 preguntaids[36] = 10490


//  Id pregunta: 3403 Año de creación de pregunta: 2006
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[37]= new Array();
 choices[37][0] = "Tomcat";
 choices[37][1] = "Geronimo";
 choices[37][2] = "JBoss";
 choices[37][3] = "Los 3 lo son";
 answers[37] = 0;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3403. De la especificaci&oacute;n JEE, Tomcat no cumple la especificaci&oacute;n EJB, solo servlets.";
 preguntaids[37] = 3403


//  Id pregunta: 8555 Año de creación de pregunta: 2013
 questions[38]= "39)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[38]= new Array();
 choices[38][0] = "Estar documentado correctamente";
 choices[38][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[38][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[38][3] = "Ser original";
 answers[38] = 3;
 units[38] = ['41'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 8555. ";
 preguntaids[38] = 8555


//  Id pregunta: 10156 Año de creación de pregunta: 2015
 questions[39]= "40)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[39]= new Array();
 choices[39][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[39][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital.";
 choices[39][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[39][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[39] = 1;
 units[39] = ['47'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 10156. Examen TIC A1 2014";
 preguntaids[39] = 10156


//  Id pregunta: 6151 Año de creación de pregunta: 2003
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[40]= new Array();
 choices[40][0] = "UPDATE TABLE";
 choices[40][1] = "ALTER TABLE";
 choices[40][2] = "REVOKE ALL";
 choices[40][3] = "ROLLBACK";
 answers[40] = 1;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6151. Examen TIC A1 MAP 2007";
 preguntaids[40] = 6151


//  Id pregunta: 1499 Año de creación de pregunta: 2016
 questions[41]= "42)  Si decimos que JEE permite utilizar el concepto de sandbox (Java Sandbox), nos estamos refiriendo a que:";
 choices[41]= new Array();
 choices[41][0] = "Cada proceso se ejecuta limitado en los recursos proporcionados por la Java Virtual Machine, y no puede afectar a otros recursos del equipo.";
 choices[41][1] = "A la posibilidad de pasar par&aacute;metros por valor en cada mensaje.";
 choices[41][2] = "A la caracter&iacute;stica que le permite interactuar con elementos de la arquitectura .NET.";
 choices[41][3] = "Al entorno de pruebas integrado en la arquitectura JEE 5.";
 answers[41] = 0;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1499. ";
 preguntaids[41] = 1499


//  Id pregunta: 10559 Año de creación de pregunta: 2015
 questions[42]= "43)  Seg&uacute;n ITIL v3, &iquest;para qu&eacute; se utiliza el modelo RACI?";
 choices[42]= new Array();
 choices[42][0] = "Documentar los roles y las responsabilidades de los interesados en un proceso o actividad";
 choices[42][1] = "Definir los requisitos para un nuevo servicio o un proceso";
 choices[42][2] = "Analizar el impacto de una incidencia en el negocio";
 choices[42][3] = "Crear un cuadro de mando que muestra el estado global de la gesti&oacute;n de servicios";
 answers[42] = 0;
 units[42] = ['101'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 10559. ";
 preguntaids[42] = 10559


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "14";
 choices[43][1] = "11";
 choices[43][2] = "12";
 choices[43][3] = "15";
 answers[43] = 0;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 465. Estrategia TIC";
 preguntaids[43] = 465


//  Id pregunta: 6633 Año de creación de pregunta: 2009
 questions[44]= "45)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[44]= new Array();
 choices[44][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[44][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[44][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[44][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[44] = 1;
 units[44] = ['63'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 6633. MAP 2008 A1";
 preguntaids[44] = 6633


//  Id pregunta: 2403 Año de creación de pregunta: 2006
 questions[45]= "46)  &iquest;Las cesiones de datos personales entre Administraciones P&uacute;blicas, para el ejercicio de competencias distintas pueden realizarse?";
 choices[45]= new Array();
 choices[45][0] = "En todo caso";
 choices[45][1] = "Cuando lo habilite una norma con rango formal de Ley";
 choices[45][2] = "Basta una autorizaci&oacute;n en una norma reglamentaria";
 choices[45][3] = "Nunca";
 answers[45] = 1;
 units[45] = ['35'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2403. ";
 preguntaids[45] = 2403


//  Id pregunta: 5748 Año de creación de pregunta: 2007
 questions[46]= "47)  Respecto al acceso a Internet, Ia Ley General de telecomunicaciones:";
 choices[46]= new Array();
 choices[46][0] = "no menciona nada";
 choices[46][1] = "obliga a todos los operadores a prestar dicho servicio en localidades de mas de 1.000 habitantes.";
 choices[46][2] = "obliga a Telefonica de Espana, S.A. a prestarlo en todo el territorio nacional";
 choices[46][3] = "lo incluye dentro del servicio universal.";
 answers[46] = 3;
 units[46] = ['121'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5748. ";
 preguntaids[46] = 5748


//  Id pregunta: 6469 Año de creación de pregunta: 2003
 questions[47]= "48)  &iquest;Qu&eacute; modelo escoger&iacute;a si tiene como objetivo mejorar el control y la calidad del gobierno de las TI a trav&eacute;s del ciclo completo de la puesta en marcha de aplicaciones?";
 choices[47]= new Array();
 choices[47][0] = "ITIL";
 choices[47][1] = "CMMI";
 choices[47][2] = "COBIT";
 choices[47][3] = "M&Eacute;TRICA";
 answers[47] = 2;
 units[47] = ['101'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6469. ";
 preguntaids[47] = 6469


//  Id pregunta: 1223 Año de creación de pregunta: 2016
 questions[48]= "49)  Si a un mensaje le aplicamos una funci&oacute;n hash, ciframos el resultado con una clave privada y se lo enviamos a un tercero junto con el mensaje original conseguimos:";
 choices[48]= new Array();
 choices[48][0] = "Autenticaci&oacute;n, Integridad y No repudio en origen.";
 choices[48][1] = "Confidencialidad, Integridad y No repudio en origen.";
 choices[48][2] = "Autenticaci&oacute;n, Confidencialidad e Integridad.";
 choices[48][3] = "Autenticaci&oacute;n, Confidencialidad y No repudio en origen.";
 answers[48] = 0;
 units[48] = ['76'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1223. ";
 preguntaids[48] = 1223


//  Id pregunta: 2567 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows?";
 choices[49]= new Array();
 choices[49][0] = "ASP.NET";
 choices[49][1] = "PHP";
 choices[49][2] = "Java EE (Servlets)";
 choices[49][3] = "Todas son v&aacute;lidas";
 answers[49] = 3;
 units[49] = ['63'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2567. ";
 preguntaids[49] = 2567


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[50]= new Array();
 choices[50][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[50][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[50][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[50][3] = "todas son correctas";
 answers[50] = 3;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 239. Ley 39/2015";
 preguntaids[50] = 239


//  Id pregunta: 9202 Año de creación de pregunta: 2014
 questions[51]= "52)  En lo que se refiere a las Firmas Digitales, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[51]= new Array();
 choices[51][0] = "Si una firma digital es v&aacute;lida para un documento es v&aacute;lida para otro distinto.";
 choices[51][1] = "S&oacute;lo puede ser generada por su leg&iacute;timo titular.";
 choices[51][2] = "Es p&uacute;blicamente verificable.";
 choices[51][3] = "La forma m&aacute;s extendida de calcular firmas digitales consiste en emplear una combinaci&oacute;n de cifrado asim&eacute;trico y funciones resumen.";
 answers[51] = 0;
 units[51] = ['119'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9202. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[51] = 9202


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[52]= new Array();
 choices[52][0] = "Indirecta.";
 choices[52][1] = "Directa.";
 choices[52][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[52][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[52] = 1;
 units[52] = ['14'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 370. Pol&iacute;ticas de igualdad";
 preguntaids[52] = 370


//  Id pregunta: 4897 Año de creación de pregunta: 2002
 questions[53]= "54)  La norma FTAM, &iquest;en qu&eacute; nivel del est&aacute;ndar OSI se encuentra?:";
 choices[53]= new Array();
 choices[53][0] = "Nivel de red";
 choices[53][1] = "Nivel de transferencia de ficheros";
 choices[53][2] = "Nivel de transporte";
 choices[53][3] = "Nivel de aplicaci&oacute;n";
 answers[53] = 3;
 units[53] = ['105'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4897. ";
 preguntaids[53] = 4897


//  Id pregunta: 3874 Año de creación de pregunta: 2002
 questions[54]= "55)  La interfaz de METRICA V3 denominada &quot;Gesti&oacute;n de proyectos&quot;:";
 choices[54]= new Array();
 choices[54][0] = "Contempla tanto el desarrollo de nuevos proyectos como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[54][1] = "Consta de 4 tipos de actividades: de inicio de proyecto, de seguimiento y control, de finalizaci&oacute;n de proyecto, y de mantenimiento";
 choices[54][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[54][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[54] = 0;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3874. ";
 preguntaids[54] = 3874


//  Id pregunta: 4233 Año de creación de pregunta: 2006
 questions[55]= "56)  La Teor&iacute;a CALIDAD/COSTE establece que...";
 choices[55]= new Array();
 choices[55][0] = "El coste es constante e independiente de la calidad del Producto.";
 choices[55][1] = "El coste de producci&oacute;n disminuye linealmente con el aumento de calidad.";
 choices[55][2] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad.";
 choices[55][3] = "La relaci&oacute;n entre el coste y la calidad representada gr&aacute;ficamente da lugar a una curva c&oacute;ncava con un m&iacute;nimo.";
 answers[55] = 2;
 units[55] = ['93'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 4233. ";
 preguntaids[55] = 4233


//  Id pregunta: 7185 Año de creación de pregunta: 2010
 questions[56]= "57)  En M&eacute;trica V3, qu&eacute; producto NO se elabora en el proceso Plan de Sistemas de Informaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Modelo de procesos de la organizaci&oacute;n";
 choices[56][1] = "Plan de Migraci&oacute;n y Carga Inicial de Datos";
 choices[56][2] = "Arquitectura Tecnol&oacute;gica";
 choices[56][3] = "Plan de proyectos";
 answers[56] = 1;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 7185. Castilla La Mancha 2009";
 preguntaids[56] = 7185


//  Id pregunta: 6115 Año de creación de pregunta: 2003
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[57]= new Array();
 choices[57][0] = "RD 153/2005, de 14 de enero";
 choices[57][1] = "RD 1553/2005, de 23 de diciembre";
 choices[57][2] = "RD 1555/2003, de 29 de mayo";
 choices[57][3] = "RD 155/2003, de 15 de septiembre";
 answers[57] = 1;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 6115. Examen TIC A1 MAP 2007";
 preguntaids[57] = 6115


//  Id pregunta: 7527 Año de creación de pregunta: 2010
 questions[58]= "59)  En JDBC, &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[58]= new Array();
 choices[58][0] = "Driver Tipo 1.";
 choices[58][1] = "Driver Tipo 2.";
 choices[58][2] = "Driver Tipo 3.";
 choices[58][3] = "Driver Tipo 4.";
 answers[58] = 0;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7527. Map 2005";
 preguntaids[58] = 7527


//  Id pregunta: 6285 Año de creación de pregunta: 2007
 questions[59]= "60)  La actividad &quot;Especificaci&oacute;n detallada del plan de aseguramiento de calidad&quot; en qu&eacute; proceso se realiza";
 choices[59]= new Array();
 choices[59][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[59][1] = "Estudio de Viabilidad del Sistema";
 choices[59][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[59][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[59] = 0;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 6285. ";
 preguntaids[59] = 6285


//  Id pregunta: 1258 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[60]= new Array();
 choices[60][0] = "Indirecta.";
 choices[60][1] = "Directa.";
 choices[60][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[60][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[60] = 1;
 units[60] = ['14'];
 blocks[60] = ['A3'];
 comments[60] = "Id Pregunta: 1258. ";
 preguntaids[60] = 1258


//  Id pregunta: 7038 Año de creación de pregunta: 2010
 questions[61]= "62)  &iquest;Qu&eacute; fases debe pasar la t&eacute;cnica de Brainstorming para que sea efectiva?";
 choices[61]= new Array();
 choices[61][0] = "Fase de Definici&oacute;n, Fase de Generaci&oacute;n y Fase de Consolidaci&oacute;n";
 choices[61][1] = "Fase de Generaci&oacute;n, Fase de Preparaci&oacute;n y Fase de Consolidaci&oacute;n";
 choices[61][2] = "Fase de Preparaci&oacute;n, Fase de Generaci&oacute;n y Fase de Conclusiones";
 choices[61][3] = "Fase de Preparaci&oacute;n, Fase de Generaci&oacute;n y Fase de Consolidaci&oacute;n";
 answers[61] = 3;
 units[61] = ['84'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 7038. ";
 preguntaids[61] = 7038


//  Id pregunta: 9611 Año de creación de pregunta: 2014
 questions[62]= "63)  Por motivos estrat&eacute;gicos, se acuerda terminar un portal de admnistraci&oacute;n electr&oacute;nica dos meses antes de lo previsto. No hay disponibilidad de m&aacute;s recursos humanos ni de ampliar el horario de trabajo ni de conseguir fondos para contratar personal externo. El Jefe de Proyecto deber&aacute; negociar entonces con el cliente del portal:";
 choices[62]= new Array();
 choices[62][0] = "Una reducci&oacute;n del alcance previsto, eliminando algunas funcionalidades adicionales o no cr&iacute;ticas,  hasta que cuadre en el tiempo previsto.";
 choices[62][1] = "Una demora en el tiempo ya que no se puede acometer sin m&aacute;s recursos la tarea indicada";
 choices[62][2] = "Que el portal se haga usando herramientas de creaci&oacute;n r&aacute;pida de portales electr&oacute;nicos";
 choices[62][3] = "Una disminuci&oacute;n de la calidad, admitiendo una serie de errores motivados por lo acelerado de la entrega";
 answers[62] = 0;
 units[62] = ['33'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 9611. ";
 preguntaids[62] = 9611


//  Id pregunta: 6631 Año de creación de pregunta: 2009
 questions[63]= "64)  Seg&uacute;n el RD 1720/2007 cuando la obligaci&oacute;n de notificar afecte a ficheros sujetos a la competencia de la autoridad de control de una Comunidad Aut&oacute;noma que haya creado su propio registro de ficheros, la notificaci&oacute;n se realizar&aacute; a:";
 choices[63]= new Array();
 choices[63][0] = "la autoridad auton&oacute;mica competente, que dar&aacute; traslado de la inscripci&oacute;n  al Registro General de Protecci&oacute;n de  Datos";
 choices[63][1] = "la autoridad auton&oacute;mica competente y al Registro General de Protecci&oacute;n de  Datos";
 choices[63][2] = "al Registro General de Protecci&oacute;n de  Datos, que dar&aacute; traslado de la inscripci&oacute;n a la la autoridad auton&oacute;mica competente";
 choices[63][3] = "la autoridad auton&oacute;mica competente o al Registro General de Protecci&oacute;n de  Datos. El receptor de la notificaci&oacute;n dar&aacute; traslado de la inscripci&oacute;n al otro ente";
 answers[63] = 0;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 6631. MAP 2008 A2";
 preguntaids[63] = 6631


//  Id pregunta: 9011 Año de creación de pregunta: 2014
 questions[64]= "65)  &iquest;Desde qu&eacute; versi&oacute;n del SO Windows est&aacute; disponible la funcionalidad de bitlocker para USB?";
 choices[64]= new Array();
 choices[64][0] = "Windows XP";
 choices[64][1] = "Windows Vista";
 choices[64][2] = "Windows 7";
 choices[64][3] = "Windows 8";
 answers[64] = 2;
 units[64] = ['58'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9011. ";
 preguntaids[64] = 9011


//  Id pregunta: 5870 Año de creación de pregunta: 2007
 questions[65]= "66)  COBIT se divide en tres niveles. Indicar cual no es uno de ellos:";
 choices[65]= new Array();
 choices[65][0] = "Dominios";
 choices[65][1] = "Procesos";
 choices[65][2] = "Elementos";
 choices[65][3] = "Actividades";
 answers[65] = 2;
 units[65] = ['101'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 5870. ";
 preguntaids[65] = 5870


//  Id pregunta: 4374 Año de creación de pregunta: 2004
 questions[66]= "67)  &iquest;A qu&eacute; se corresponden las siglas 802.11i sobre redes inal&aacute;mbricas?";
 choices[66]= new Array();
 choices[66][0] = "A especificaciones de nivel f&iacute;sico";
 choices[66][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[66][2] = "A especificaciones de Seguridad";
 choices[66][3] = "A especificiaciones de roaming";
 answers[66] = 2;
 units[66] = ['108'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4374. ";
 preguntaids[66] = 4374


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; es SonarQube?";
 choices[67]= new Array();
 choices[67][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[67][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[67][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[67][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[67] = 2;
 units[67] = ['92'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 840. Integraci&oacute;n continua";
 preguntaids[67] = 840


//  Id pregunta: 8139 Año de creación de pregunta: 2011
 questions[68]= "69)  En relaci&oacute;n con los mecanismos de seguridad en redes Wi-Fi, indique la afirmaci&oacute;n FALSA:";
 choices[68]= new Array();
 choices[68][0] = "Las especificaciones WEP y WPA usan RC4 como algoritmo de cifrado.";
 choices[68][1] = "La especificaci&oacute;n WPA2 mejora la segundad al usar AES como algoritmo de cifrado.";
 choices[68][2] = "En el est&aacute;ndar IEEE 802.11 i es donde se detalla la especificaci&oacute;n de WPA2.";
 choices[68][3] = "El est&aacute;ndar IEEE 802.11g incrementa la seguridad introduciendo 3DES como algoritmo de cifrado.";
 answers[68] = 3;
 units[68] = ['108'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 8139. Examen TIC A2 2010 interna";
 preguntaids[68] = 8139


//  Id pregunta: 7936 Año de creación de pregunta: 2011
 questions[69]= "70)  Una red administrada a trav&eacute;s de SNMP contempla tres componentes claves. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos?";
 choices[69]= new Array();
 choices[69][0] = "Dispositivos administrados.";
 choices[69][1] = "Agentes.";
 choices[69][2] = "Sistemas administradores de red (NMS).";
 choices[69][3] = "Registro de ubicaci&oacute;n de visitantes (VLR).";
 answers[69] = 3;
 units[69] = ['112'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7936. Examen TIC A2 2010";
 preguntaids[69] = 7936


//  Id pregunta: 1568 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es el est&aacute;ndar del IEEE conocido como PoE+ (Power over Ethernet Plus) que aumenta la potencia de entrega respecto a su predecesor?";
 choices[70]= new Array();
 choices[70][0] = "IEEE 802.3af";
 choices[70][1] = "IEEE 802.3ab";
 choices[70][2] = "IEEE 802.3at";
 choices[70][3] = "IEEE 802.1ba";
 answers[70] = 2;
 units[70] = ['112'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1568. ";
 preguntaids[70] = 1568


//  Id pregunta: 9083 Año de creación de pregunta: 2014
 questions[71]= "72)  El protocolo TCP es un protocolo";
 choices[71]= new Array();
 choices[71][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[71][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[71][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[71][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[71] = 1;
 units[71] = ['109'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9083. Examen TIC-A1 2013";
 preguntaids[71] = 9083


//  Id pregunta: 2597 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a los procedimientos almacenados en los sistemas de gesti&oacute;n de bases de datos relacionales?:";
 choices[72]= new Array();
 choices[72][0] = "Es un conjunto de instrucciones y l&oacute;gica de procedimiento de SQL compilado, verificado y almacenado en base de datos";
 choices[72][1] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de preparaci&oacute;n del programa";
 choices[72][2] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de ejecuci&oacute;n del programa";
 choices[72][3] = "Los procedimientos almacenados no admiten par&aacute;metros de entrada";
 answers[72] = 0;
 units[72] = ['60'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2597. ";
 preguntaids[72] = 2597


//  Id pregunta: 10130 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[73]= new Array();
 choices[73][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[73][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[73][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[73][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[73] = 1;
 units[73] = ['119'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10130. Examen TIC A1 2014";
 preguntaids[73] = 10130


//  Id pregunta: 1080 Año de creación de pregunta: 2016
 questions[74]= "75)  En el contexto de los sistemas Datawarehouse y DataMart seleccione la frase correcta.";
 choices[74]= new Array();
 choices[74][0] = "El an&aacute;lisis dimensional de los datos corporativos mediante t&eacute;cnicas de OLAP no puede implementarse sobre bases de datos relacionales.";
 choices[74][1] = "Las bases de datos relacionales incorporan de manera estructural la jerarqu&iacute;a entre sucesivos niveles de una dimensi&oacute;n.";
 choices[74][2] = "Los modelos en copo de nieve utilizan tablas de hechos y tablas de dimensiones para el an&aacute;lisis de los datos corporativos.";
 choices[74][3] = "Los almacenes de datos departamentales (DataMart), a diferencia de los almacenes corporativos (Datawarehouse), no requieren procesos previos de ETL (extracci&oacute;n, transformaci&oacute;n y carga).";
 answers[74] = 2;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1080. ";
 preguntaids[74] = 1080


